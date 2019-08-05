import React, { Component } from "react";
import { AsyncStorage, Dimensions, Image, ImageBackground, Text, TouchableOpacity, View, StatusBar, ScrollView, PermissionsAndroid, TextInput, Platform } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { Container, Content, Input } from "native-base"
import styles from "./styles";
import _ from "lodash";
import cross from '../../../assets/card_cross.png';
import bike_riding from '../../../assets/bike_riding.png';
import trekking from '../../../assets/trekking.png';
import party from '../../../assets/party.png';
import dot_rect from '../../../assets/dot_rect.png';
import height_png from '../../../assets/height.png';
import cheers from '../../../assets/cheers.png';
import smoke from '../../../assets/smoke.png';
import education from '../../../assets/education.png';
import portfolio from '../../../assets/portfolio.png';
import addPhoto from '../../../assets/AddPhoto.png';
import question from '../../../assets/question.png';
import houseOutline from '../../../assets/houseOutline.png';
import quote from '../../../assets/quote.png';
import place from '../../../assets/place.png';
import appointment from '../../../assets/appointment.png';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import pos from '../../../assets/pos.png';
import photo from '../../../assets/photo.png';
import back from '../../../assets/back.png';
import remove_icon from '../../../assets/remove.png';
import heart_icon from '../../../assets/heart.png';
import like from '../../../assets/like.png';
import send from '../../../assets/send.png';
import filter from '../../../assets/filter.png';
import colors from '../../../Colors';
import Carousel from 'react-native-snap-carousel';
import HomeFooter from './HomeFooter';
import PopupSendLike from './PopupSendLike';
const { width, height } = Dimensions.get('window');
const Categories = [
    {
        id: 100,
        label: "Bike Riding",
        img: bike_riding,

    },
    {
        id: 200,
        label: "Trekking",
        img: trekking,

    },
    {
        id: 300,
        label: "Weekend Party",
        img: party,

    }
];
const Photoes = [
    {
        img: bike_riding,

    },
    {
        img: trekking,

    },
    {
        img: party,
    }
];
export class EditProfile extends Component<NavigationScreenProps> {
    static navigationOptions = {
        header: null
    };

    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    async accessForLocation() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: "We want use your location",
                    message: "reason of access "
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // want to get user accurate location code goes here

                navigator.geolocation.watchPosition(
                    position => {
                        AsyncStorage.setItem("@userCurrentPos:", JSON.stringify(position));
                        console.log(position);
                    },
                    error => {
                        this.setState({ error: error });
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 1000,
                        distanceFilter: 10
                    }
                );
            } else {

                navigator.geolocation.watchPosition(
                    position => {
                        AsyncStorage.setItem("@userCurrentPos:", JSON.stringify(position));
                        console.log(position)
                    },
                    error => {
                        this.setState({ error: error });
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 20000,
                        maximumAge: 1000,
                        distanceFilter: 10
                    }
                );
            }
        } catch (err) {
            console.log("errerrerr51", err);
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <View style={{
                    width: width,
                    ...Platform.select({
                        ios: {
                            height: 20,
                        },
                        android: {
                            height: 0,
                        },
                    }),
                }}>
                    <StatusBar />
                </View>
                <View style={{ flexDirection: 'row', width: width, padding: 20, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>EDIT PROFILE</Text>
                    <TouchableOpacity activeOpacity={0.8}
                        onPress={() => { this.props.navigation.pop() }}>
                        <Image source={cross} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                    </TouchableOpacity>
                </View>
                <Content>
                    <Text style={[styles.label, { marginLeft: 10, marginTop: 10 }]}>{'MY PHOTOS'}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: width }}>
                        <View style={[styles.photoShadowBox, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image source={photo}
                                style={{ width: '100%', resizeMode: 'contain' }} />

                            <TouchableOpacity activeOpacity={0.8} style={{ alignItems: 'center', justifyContent: 'center', height: 20, width: 20, borderRadius: 10, backgroundColor: 'yellow', position: 'absolute', top: 5, right: 5 }}>
                                <Image source={cross} style={{ height: 10, width: 10, resizeMode: 'contain', tintColor: 'red' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.photoShadowBox, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image source={photo}
                                style={{ width: '100%', resizeMode: 'contain' }} />

                            <TouchableOpacity activeOpacity={0.8} style={{ alignItems: 'center', justifyContent: 'center', height: 20, width: 20, borderRadius: 10, backgroundColor: 'yellow', position: 'absolute', top: 5, right: 5 }}>
                                <Image source={cross} style={{ height: 10, width: 10, resizeMode: 'contain', tintColor: 'red' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.photoShadowBox, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image source={photo}
                                style={{ width: '100%', resizeMode: 'contain' }} />

                            <TouchableOpacity activeOpacity={0.8} style={{ alignItems: 'center', justifyContent: 'center', height: 20, width: 20, borderRadius: 10, backgroundColor: 'yellow', position: 'absolute', top: 5, right: 5 }}>
                                <Image source={cross} style={{ height: 10, width: 10, resizeMode: 'contain', tintColor: 'red' }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', width: width }}>
                        <View style={[styles.photoShadowBox, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
                            <Image source={photo}
                                style={{ width: '100%', resizeMode: 'contain' }} />

                            <TouchableOpacity activeOpacity={0.8} style={{ alignItems: 'center', justifyContent: 'center', height: 20, width: 20, borderRadius: 10, backgroundColor: 'yellow', position: 'absolute', top: 5, right: 5 }}>
                                <Image source={cross} style={{ height: 10, width: 10, resizeMode: 'contain', tintColor: 'red' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.photoShadowBox, { backgroundColor: '#dadada', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>

                            <Image source={addPhoto}
                                style={{ height: 40, width: 50, resizeMode: 'contain' }} />
                            <Text style={{ position: 'absolute', bottom: 5, fontWeight: 'bold', fontSize: 15, color: 'grey' }}>Add Photo</Text>
                        </View>
                    </View>

                    <View style={styles.items}>

                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={dot_rect} style={{ alignSelf: 'center', width: width, height: '100%', resizeMode: 'stretch' }} />
                            <View style={{ position: 'absolute', alignSelf: 'center', width: '100%', padding: 10 }}>
                                <Text style={[styles.label, { padding: 0, margin: 0 }]}>{'I am regular at'}</Text>
                                <Text style={[styles.label, { padding: 0, margin: 0, color: '#b0b0b0' }]}>{'You can find me after work'}</Text>
                            </View>
                        </View>

                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={dot_rect} style={{ alignSelf: 'center', width: width, height: '100%', resizeMode: 'stretch' }} />
                            <View style={{ position: 'absolute', alignSelf: 'center', width: '100%', padding: 10 }}>
                                <Text style={[styles.label, { padding: 0, margin: 0 }]}>{'I am regular at'}</Text>
                                <Text style={[styles.label, { padding: 0, margin: 0, color: '#b0b0b0' }]}>{'You can find me after work'}</Text>
                            </View>
                        </View>

                        <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={dot_rect} style={{ alignSelf: 'center', width: width, height: '100%', resizeMode: 'stretch' }} />
                            <View style={{ position: 'absolute', alignSelf: 'center', width: '100%', padding: 10 }}>
                                <Text style={[styles.label, { padding: 0, margin: 0 }]}>{'I am regular at'}</Text>
                                <Text style={[styles.label, { padding: 0, margin: 0, color: '#b0b0b0' }]}>{'You can find me after work'}</Text>
                            </View>
                        </View>
                        <Text style={styles.label}>{'WHAT DO YOU WANT TO DO?'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'ADD what you want to do or Activity Name'}
                                placeholderTextColor={'#b0b0b0'}
                                style={styles.text} />
                        </View>
                        <Text style={styles.label}>{'PLAN LOCATION OF YOUR ACTIVITY'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'ADD LOCATION'}
                                placeholderTextColor={'#b0b0b0'}
                                style={styles.text} />
                            <TouchableOpacity activeOpacity={0.8} onPress={() => { this.accessForLocation() }}>
                                <Image source={place} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.label}>{'PLAN START DATE & TIME OF ACTIVITY'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'ADD LOCATION'}
                                placeholderTextColor={'#b0b0b0'}
                                style={styles.text} />
                            <Image source={appointment} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        </View>
                        <Text style={styles.label}>{'PLAN END DATE & TIME OF ACTIVITY'}</Text>
                        <View style={styles.itemContainer}>
                            <Input
                                placeholder={'ADD LOCATION'}
                                placeholderTextColor={'#b0b0b0'}
                                style={styles.text} />
                            <Image source={appointment} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        </View>

                    </View>
                    <Text style={[styles.label, { marginLeft: 20 }]}>{'PLAN CATEGORY OF YOUR ACTIVITY'}</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {_.map(Categories, (item, index) => {
                            return (
                                <View key={item.id} >
                                    <TouchableOpacity activeOpacity={0.8} style={[styles.shadowBox, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>

                                        <Image source={item.img}
                                            style={{ height: 40, width: 40, resizeMode: 'contain', margin: 8, tintColor: 'black' }} />
                                        <View
                                            style={{ backgroundColor: '#dadada', width: 10, height: 10, borderRadius: 5, position: 'absolute', bottom: 10, right: 10 }}
                                        />
                                    </TouchableOpacity>
                                    <Text style={{
                                        color: 'black',
                                        paddingLeft: 25,
                                        paddingRight: 25,
                                        fontWeight: 'bold',
                                        fontSize: 18
                                    }}>{item.label}</Text>
                                </View>

                            );
                        })}
                    </ScrollView>

                    <TouchableOpacity style={[styles.shadowBoxItemBtn, { width: width - 40, alignSelf: 'center', justifyContent: 'center' }]} activeOpacity={0.8}>
                        <Text style={{
                            color: '#fff',
                            paddingLeft: 30,
                            textAlign: 'center',
                            paddingRight: 30,
                            fontWeight: 'bold',
                            fontSize: 20
                        }}>{'ADD ACTIVITY'}</Text>
                    </TouchableOpacity>
                    <View style={{ height: 60, backgroundColor: 'white' }} />
                </Content>
            </Container>
        );
    }
}

export default EditProfile;
