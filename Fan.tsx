import React from 'react';
import { StyleSheet, View } from 'react-native';

import Card, { CARD_WIDTH, Cards, CARD_HEIGHT } from './components/Card';

const cards =[
  Cards.Card1,
  Cards.Card2,
  Cards.Card3,
  Cards.Card4,
  Cards.Card5,
  Cards.Card6,
  Cards.Card7,
  Cards.Card8,
  Cards.Card9,
  Cards.Card10,
  Cards.Card11,
  Cards.Card12,
  Cards.Card13,
];

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default () => {
  return (
    <>
      <View style={[styles.overlay, { transform:[{ scale: 2 }]}]}>
        <View style={{ transform: [{ translateX: -CARD_HEIGHT / 4}] }}>
          {cards.map((card, index) => (
            <View
            key={index}
            style={{
              transform: [
                { translateX: CARD_WIDTH / 2 },
                { rotateZ: `${150 + index * 5}deg` },
                { translateX: -CARD_WIDTH / 2 },
              ],
            }}
          >
            <Card type={card} />
          </View>
          ))}
        </View>
      </View>
    </>
  );
};