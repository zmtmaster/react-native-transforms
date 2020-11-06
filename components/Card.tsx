import React from "react";
import { Image, StyleSheet } from "react-native";

export const CARD_WIDTH = 60;
export const CARD_HEIGHT = 100;
const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
});

export enum Cards {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Card9,
  Card10,
  Card11,
  Card12,
  Card13,
}

interface CardProps {
  type: Cards;
}

export default ({ type }: CardProps) => {
  let source: number;
  switch (type) {
    case Cards.Card1:
      source = require("../assets/cards/01.png");
      break;
    case Cards.Card2:
      source = require("../assets/cards/02.png");
      break;
    case Cards.Card3:
      source = require("../assets/cards/03.png");
      break;
    case Cards.Card4:
      source = require("../assets/cards/04.png");
      break;
    case Cards.Card5:
      source = require("../assets/cards/05.png");
      break;
    case Cards.Card6:
      source = require("../assets/cards/06.png");
      break;
    case Cards.Card7:
      source = require("../assets/cards/07.png");
      break;
    case Cards.Card8:
      source = require("../assets/cards/08.png");
      break;
    case Cards.Card9:
      source = require("../assets/cards/09.png");
      break;
    case Cards.Card10:
      source = require("../assets/cards/10.png");
      break;
    case Cards.Card11:
      source = require("../assets/cards/11.png");
      break;
    case Cards.Card12:
      source = require("../assets/cards/12.png");
      break;
    case Cards.Card13:
      source = require("../assets/cards/13.png");
      break;
    default:
      throw Error("Invalid card style");
  }
  return <Image style={styles.card} {...{ source }} />;
};