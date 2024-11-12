import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 15,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    color: 'black',
    backgroundColor: '#9A9A9A',
    borderColor:'black',
    borderWidth:1
  },
  boatContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#9A9A9A',
    borderColor:'black',
    borderWidth:1

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    width: '100%',
    height:35,
    backgroundColor: '#3d3b3e',
    textAlign: 'center',
    marginBottom: 10,
  },

  description: {
    color: 'black',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
    backgroundColor: '#d3d3d3',
    borderColor:'black',
    borderWidth:1,
    borderRadius: 3,
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: 200,
  },
});
// Boat Item Component
const Boats = ({ title, des, icon_name, poster }) => {
  return (
      <View style={styles.boatContainer}>
        <View style={styles.header}>
          <Icon name={icon_name.title} size={20} color="white" />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Text style={styles.description}>{des}</Text>
        <Image source={poster} style={styles.image} />
      </View>
  );
};

// Main Boat List Component
const Boat = () => {
  return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.mainTitle}>GETABOAT - FOR SALE</Text>

        <Boats
            title="Sea Ray 500 Sundancer"
            des="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
            icon_name="sailboat"
            poster={require('./img/sea_ray.jpg')}
        />
        <Boats
            title="Four Winns Horizon 180"
            des="A sporty look and refined details truly set the Horizon 180 above all others."
            icon_name="sailboat"
            poster={require('./img/four_winns.jpg')}
        />
        <Boats
            title="Flipper 640 ST"
            des="A modern take on the classic, traditional hardtop and perfect for a family picnic."
            icon_name="sailboat"
            poster={require('./img/flipper.jpg')}
        />
        <Boats
            title="Princess V48"
            des="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior."
            icon_name="sailboat"
            poster={require('./img/princess.jpg')}
        />
        <Boats
            title="Bayliner 175 Bowrider"
            des="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
            icon_name="sailboat"
            poster={require('./img/bayliner.jpg')}
        />
        <Boats
            title="Fairline Targa 47"
            des="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            icon_name="sailboat"
            poster={require('./img/fairline.jpg')}
        />
      </ScrollView>
  );
};


export default Boat;
