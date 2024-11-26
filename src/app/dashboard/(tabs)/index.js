import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomePage() {
    return (
        <LinearGradient
            colors={['#61cadf', '#cee5ee']}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeAreaContainer}>
                {/* Header Section */}
                <View style={styles.header}>
                    <Text style={styles.appTitle}>Quest Board</Text>
                </View>

                {/* Welcome Section */}
                <View style={styles.welcomeSection}>
                    <Text style={styles.welcomeText}>Welcome to Quest Board!</Text>
                    <Text style={styles.subText}>Explore quests and earn rewards.</Text>
                </View>

                {/* Search Bar */}
                <View style={styles.searchBar}>
                    <TextInput 
                        style={styles.searchInput} 
                        placeholder="Search for quests..."
                    />
                </View>

                {/* Categories and Quest Cards Section */}
                <ScrollView contentContainerStyle={styles.questCategoriesContainer}>
                    <View style={styles.categoryContainer}>
                        {/* Errands Column */}
                        <View style={styles.categoryColumn}>
                            <Text style={styles.categoryTitle}>Errands</Text>

                            {/* Example Quest 1 */}
                            <View style={styles.questCard}>
                                <Text style={styles.questTitle}>Deliver Documents</Text>
                                <Text style={styles.questLocation}>City Hall</Text>
                                <Text style={styles.questPrice}>₱300</Text>
                                <TouchableOpacity style={styles.viewDetailsButton}>
                                    <Text style={styles.viewDetailsText}>View Details</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Example Quest 2 */}
                            <View style={styles.questCard}>
                                <Text style={styles.questTitle}>Pick Up Package</Text>
                                <Text style={styles.questLocation}>USTP Main Gate</Text>
                                <Text style={styles.questPrice}>₱250</Text>
                                <TouchableOpacity style={styles.viewDetailsButton}>
                                    <Text style={styles.viewDetailsText}>View Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Tutoring Column */}
                        <View style={styles.categoryColumn}>
                            <Text style={styles.categoryTitle}>Tutoring</Text>

                            {/* Example Quest 1 */}
                            <View style={styles.questCard}>
                                <Text style={styles.questTitle}>Help with Math Tutoring</Text>
                                <Text style={styles.questLocation}>USTP CEA Building</Text>
                                <Text style={styles.questPrice}>₱500</Text>
                                <TouchableOpacity style={styles.viewDetailsButton}>
                                    <Text style={styles.viewDetailsText}>View Details</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Example Quest 2 */}
                            <View style={styles.questCard}>
                                <Text style={styles.questTitle}>English Tutor Needed</Text>
                                <Text style={styles.questLocation}>USTP CEA Building</Text>
                                <Text style={styles.questPrice}>₱600</Text>
                                <TouchableOpacity style={styles.viewDetailsButton}>
                                    <Text style={styles.viewDetailsText}>View Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Event Assistance Column */}
                        <View style={styles.categoryColumn}>
                            <Text style={styles.categoryTitle}>Event Assistance</Text>

                            {/* Example Quest 1 */}
                            <View style={styles.questCard}>
                                <Text style={styles.questTitle}>Event Assistant Needed</Text>
                                <Text style={styles.questLocation}>Gymnasium</Text>
                                <Text style={styles.questPrice}>₱800</Text>
                                <TouchableOpacity style={styles.viewDetailsButton}>
                                    <Text style={styles.viewDetailsText}>View Details</Text>
                                </TouchableOpacity>
                            </View>

                            {/* Example Quest 2 */}
                            <View style={styles.questCard}>
                                <Text style={styles.questTitle}>Help with Event Setup</Text>
                                <Text style={styles.questLocation}>USTP DRER Hall</Text>
                                <Text style={styles.questPrice}>₱600</Text>
                                <TouchableOpacity style={styles.viewDetailsButton}>
                                    <Text style={styles.viewDetailsText}>View Details</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeAreaContainer: {
        flex: 1,
    },
    header: {
        paddingVertical: 20,
        backgroundColor: '#084C61',
        alignItems: 'center',
    },
    appTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    welcomeSection: {
        paddingVertical: 20,
        paddingHorizontal: 15,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#084C61',
    },
    subText: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
    searchBar: {
        marginVertical: 15,
        marginHorizontal: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        elevation: 3,
    },
    searchInput: {
        fontSize: 16,
        color: '#333',
    },
    questCategoriesContainer: {
        paddingHorizontal: 20,
    },
    categoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    categoryColumn: {
        flex: 1,
        marginHorizontal: 10,
    },
    categoryTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      textAlign: 'center', // Center the category titles
      color: '#084C61', // Custom color for the titles
      marginBottom: 10,
  },
    questCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 15,
        padding: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    questTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#61cadf',
    },
    questLocation: {
        fontSize: 14,
        color: '#555',
        marginVertical: 5,
    },
    questPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
    viewDetailsButton: {
        backgroundColor: '#61cadf',
        borderRadius: 25,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewDetailsText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
