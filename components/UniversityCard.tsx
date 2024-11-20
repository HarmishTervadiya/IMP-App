import { TouchableOpacity, StyleSheet, Text, Image } from "react-native";

const UniversityCard = ({ name, logo }: any) => (
  <TouchableOpacity style={styles.universityCard}>
    <Image source={logo} style={styles.universityLogo} />
    <Text style={styles.universityName}>{name}</Text>
  </TouchableOpacity>
);

export default UniversityCard;

const styles = StyleSheet.create({
  universitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  universityCard: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
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
    fontWeight: "500",
    textAlign: "center",
  },
});
