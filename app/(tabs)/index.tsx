import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import ProfileImage from '@/assets/images/icon.png';
import TopicItem from '@/components/TopicItem';
import TrendingTopicCard from '@/components/TrendingTopicCard';
import UniversityCard from '@/components/UniversityCard';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image 
            source={ProfileImage} 
            style={styles.profileImage} 
          />
          <Text style={styles.profileName}>harmis tervadiya</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="add-circle-outline" onPress={() => router.push('/editor')} size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Greeting */}
        <Text style={styles.greeting}>Hello <Text style={styles.name}>Harmis</Text>,</Text>
        <Text style={styles.subHeading}>Here are some trending IMP for you:</Text>

        {/* Trending Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingSection}>
          <TrendingTopicCard 
            title="Explain Features of OOPs" 
            subject="OOPS Programming"
            rating="4.5"
          />
          <TrendingTopicCard 
            title="List out operators with example" 
            subject="Python Programming"
            rating="4.2"
          />
        </ScrollView>

        {/* Universities Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Search by University</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.universitiesGrid}>
          <UniversityCard name="RK University" logo={ProfileImage} />
          <UniversityCard name="Darshan University" logo={ProfileImage} />
          <UniversityCard name="Marwadi University" logo={ProfileImage} />
          <UniversityCard name="Parul University" logo={ProfileImage} />
        </View>

        {/* Top Topics Section */}
        <Text style={styles.sectionTitle}>Top 5 Topics of the week</Text>
        <View style={styles.topicsContainer}>
          <TopicItem number="1" topic="Javascript" />
          <TopicItem number="2" topic="Mern Stack" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  greeting: {
    fontSize: 24,
    marginBottom: 4,
  },
  name: {
    color: '#6C5CE7',
    fontWeight: '600',
  },
  subHeading: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  trendingSection: {
    marginBottom: 24,
  },
  trendingCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
    width: 250,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardSubject: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  cardRating: {
    fontSize: 14,
    color: '#666',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  viewAll: {
    color: '#6C5CE7',
    fontSize: 14,
  },
  universitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  universityCard: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  universityLogo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  universityName: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
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
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {
    padding: 8,
  },
});