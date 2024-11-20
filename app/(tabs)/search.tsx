import React, { useState, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  Dimensions,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import ProfileImage from "@/assets/images/icon.png";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { Checkbox } from "expo-checkbox";

const { height } = Dimensions.get("window");

const searchResults = [
  { id: "1", title: "Explain Features of OOPs", reads: 500 },
  { id: "2", title: "Explain Features of OOPs", reads: 500 },
  { id: "3", title: "Explain Features of OOPs", reads: 500 },
];

const filterCategories = [
  {
    filter: "Institutes",
    options: [
      { id: "3", itemName: "RK University" },
      { id: "4", itemName: "Delhi University" },
    ],
    id: "1",
  },
  { filter: "Courses", options: [{ id: "6", itemName: "B.Tech" }], id: "2" },
  {
    filter: "Rating",
    options: [
      { id: "7", itemName: "1" },
      { id: "9", itemName: "2" },
    ],
    id: "3",
  },
];

type FilterItem = {
  id: string;
  itemName: string;
};

type FilterCategory = {
  filter: string;
  options: FilterItem[];
  id: string;
};

export default function SearchScreen() {
  const [selectedFilterCategory, setSelectedFilterCategory] =
    useState<FilterCategory>(filterCategories[0]);

  const [selectedFilters, setSelectedFilters] = useState<
    { categoryId: string; itemId: string }[]
  >([]);

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderSearchResult = ({ item }: any) => (
    <TouchableOpacity style={styles.resultCard}>
      <View style={styles.resultContent}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        <Text style={styles.resultReads}>Reads: {item.reads}</Text>
      </View>
      <Image source={ProfileImage} style={styles.universityIcon} />
    </TouchableOpacity>
  );

  const toggleFilter = (categoryId: string, itemId: string) => {
    setSelectedFilters((prev) => {
      const existingFilter = prev.find(
        (filter) => filter.categoryId === categoryId && filter.itemId === itemId
      );
      if (existingFilter) {
        return prev.filter(
          (filter) =>
            !(filter.categoryId === categoryId && filter.itemId === itemId)
        );
      } else {
        return [...prev, { categoryId, itemId }];
      }
    });
  };

  const isFilterSelected = (categoryId: string, itemId: string) => {
    return selectedFilters.some(
      (filter) => filter.categoryId === categoryId && filter.itemId === itemId
    );
  };

  const showResults = () => {
    bottomSheetModalRef.current?.dismiss()

  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <BottomSheetModalProvider>
          <View style={styles.header}>
            <TouchableOpacity>
              <Ionicons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <View style={styles.searchBar}>
              <TextInput
                placeholder="Search"
                style={styles.searchInput}
                placeholderTextColor="#666"
              />
            </View>
            <TouchableOpacity onPress={handlePresentModalPress}>
              <Ionicons name="options-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>

          <FlatList
            data={searchResults}
            renderItem={renderSearchResult}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.resultsList}
          />

          <BottomSheetModal
            ref={bottomSheetModalRef}
            snapPoints={["70%"]}
            backgroundStyle={styles.bottomSheetBackground}
          >
            <BottomSheetView style={styles.filterContainer}>
              <Text style={styles.filterTitle}>Filters</Text>

              <View style={styles.filterTabs}>
                {filterCategories.map(({ id, filter, options }) => (
                  <Pressable
                    key={filter}
                    style={[
                      styles.filterTab,
                      selectedFilterCategory.id === id &&
                        styles.filterTabActive,
                    ]}
                    onPress={() =>
                      setSelectedFilterCategory({ id, filter, options })
                    }
                  >
                    <Text
                      style={[
                        styles.filterTabText,
                        selectedFilterCategory.id === id &&
                          styles.filterTabTextActive,
                      ]}
                    >
                      {filter}
                    </Text>
                  </Pressable>
                ))}
              </View>

              <FlatList
                data={selectedFilterCategory.options}
                renderItem={({item}) => (
                  <Pressable
                    key={item.id}
                    style={styles.filterItem}
                    onPress={() => toggleFilter(selectedFilterCategory.id, item.id)}
                  >
                    <Checkbox
                      value={isFilterSelected(selectedFilterCategory.id, item.id)}
                      onValueChange={() =>
                        toggleFilter(selectedFilterCategory.id, item.id)
                      }
                      color={
                        isFilterSelected(selectedFilterCategory.id, item.id)
                          ? "#6C5CE7"
                          : undefined
                      }
                      style={styles.checkbox}
                    />
                    <Text style={styles.filterItemText}>{item.itemName}</Text>
                  </Pressable>
                )}
                numColumns={2}
                keyExtractor={(item) => item.id}
                style={styles.filterItemsContainer}
              />

              <TouchableOpacity
                style={styles.showResultsButton}
                onPress={showResults}
              >
                <Text style={styles.showResultsText}>Show Results</Text>
              </TouchableOpacity>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    height: 40,
    backgroundColor: "#F1F1F1",
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  searchInput: {
    fontSize: 16,
  },
  resultsList: {
    padding: 16,
  },
  resultCard: {
    flexDirection: "row",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.2
  },
  resultContent: {
    flex: 1,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  resultReads: {
    fontSize: 14,
    color: "#666",
  },
  universityIcon: {
    width: 40,
    height: 40,
    marginLeft: 12,
  },
  bottomSheetBackground: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  filterContainer: {
    flex: 1,
    padding: 20,
  },
  filterTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  filterTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filterTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: "#F1F1F1",
    width: 100,
  },
  filterTabActive: {
    backgroundColor: "#6C5CE7",
  },
  filterTabText: {
    color: "#666",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  filterTabTextActive: {
    color: "#fff",
  },
  filterItemsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  filterItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: "#F1F1F1",
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  checkbox: {
    marginRight: 12,
  },
  filterItemText: {
    fontSize: 15,
    color: "#333",
    flexWrap: 'wrap',
    flex:1
  },
  showResultsButton: {
    backgroundColor: "#6C5CE7",
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
  },
  showResultsText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
