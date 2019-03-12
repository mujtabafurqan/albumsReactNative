import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const albumDetails = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    const { thumbnailStyle, 
        titleArtistStyle, 
        thumbnailCointanerStyle,
        titleArtistTextStyle,
        bodyImagineStyle
        } = styles;
    return ( 
        <Card>
            <CardSection>
                <View style={thumbnailCointanerStyle}> 
                <Image
                     style={thumbnailStyle}
                     source={{ uri: thumbnail_image }}
                />
                </View>
                <View style={titleArtistStyle}>
                    <Text style={titleArtistTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
            <Image
                     style={bodyImagineStyle}
                     source={{ uri: image }}
            />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)} />
            </CardSection>


        </Card>
    );
};

const styles = {
    titleArtistStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    titleArtistTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailCointanerStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    bodyImagineStyle: {
        height: 300,
        flex: 1,
        widhth: null
    }
};

export default albumDetails;
