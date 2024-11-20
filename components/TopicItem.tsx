import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

const TopicItem = ({ number, topic }:any) => (
    <TouchableOpacity style={styles.topicItem}>
      <View style={styles.topicNumber}>
        <Text style={styles.numberText}>{number}</Text>
      </View>
      <Text style={styles.topicText}>{topic}</Text>
    </TouchableOpacity>
  );

  export default TopicItem

  
const styles = StyleSheet.create({
    topicsContainer: {
      marginBottom: 24,
    },
    topicItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 12,
      borderRadius: 12,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    topicNumber: {
      width: 32,
      height: 32,
      borderRadius: 16,
      backgroundColor: '#6C5CE7',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 12,
    },
    numberText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    topicText: {
      fontSize: 16,
      fontWeight: '500',
    }
  });