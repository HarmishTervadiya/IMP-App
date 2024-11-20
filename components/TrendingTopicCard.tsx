import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";
const TrendingTopicCard = ({ title, subject, rating }: any) => (
  <TouchableOpacity style={styles.trendingCard}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubject}>Sub: {subject}</Text>
    <Text style={styles.cardRating}>Rating: {rating}</Text>
  </TouchableOpacity>
);

export default TrendingTopicCard;

const styles = StyleSheet.create({
  trendingSection: {
    marginBottom: 24,
  },
  trendingCard: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginRight: 16,
    width: 250,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardSubject: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  cardRating: {
    fontSize: 14,
    color: "#666",
  },
});
