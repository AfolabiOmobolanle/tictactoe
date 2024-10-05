import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type IconsProps = PropsWithChildren<{name: string}>;
const Icons = ({name}: IconsProps) => {
  switch (name) {
    case 'circle':
      return (
        <View>
          <Text style={styles.circle}>O</Text>
        </View>
      );

      break;
    case 'cross':
      return (
        <View>
          <Text style={styles.cross}>X</Text>
        </View>
      );
      break;

    default:
      <View>
        <Text style={styles.pencil}>🖊</Text>
      </View>;
      return;
  }
};

export default Icons;

const styles = StyleSheet.create({
  circle: {
    fontSize: 30,
    fontWeight: '400',
    color: '#f72e9d',
  },
  cross: {
    color: '#38cc77',
    fontSize: 30,
  },
  pencil: {
    fontWeight: '400',
  },
});
