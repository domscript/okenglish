import React, {ComponentType} from 'react';
import {View} from 'react-native';

import {List} from './List';
import {Test} from './Test';
import {Gear} from './Gear';
import {Info} from './Info';
import {Study} from './Study';
import {Delete} from './Delete';
import {Rocket} from './Rocket';
import {Youtube} from './Youtube';
import {OpenBook} from './OpenBook';
import {FolderGear} from './FolderGear';
import {ListCheck} from './ListCheck';
import {RocketLaunch} from './RocketLaunch';
import {LightbulbOn} from './LightbulbOn';

export interface IconProps {
  color: string;
  size: number;
}

interface IconMainProps {
  name:
    | 'list'
    | 'list-check'
    | 'rocket'
    | 'rocket-launch'
    | 'test'
    | 'gear'
    | 'study'
    | 'youtube'
    | 'info-circle'
    | 'delete'
    | 'open-book'
    | 'lightbulb-on'
    | 'folder-gear';
  color: string;
  size: number;
}

const iconComponents: {[key: string]: ComponentType<any>} = {
  list: List,
  'list-check': ListCheck,
  rocket: Rocket,
  'rocket-launch': RocketLaunch,
  test: Test,
  gear: Gear,
  study: Study,
  youtube: Youtube,
  'info-circle': Info,
  delete: Delete,
  'open-book': OpenBook,
  'lightbulb-on': LightbulbOn,
  'folder-gear': FolderGear,
};

export const MyIcon = ({
  name = 'rocket',
  color = '#000',
  size = 10,
}: IconMainProps) => {
  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    return null; // Handle unknown verbs if needed
  }

  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
          margin: 5,
        },
      ]}>
      <IconComponent color={color} size={size} />
    </View>
  );
};