import React, { useState } from 'react';
import { View } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
 const [selectedDate, setSelectedDate] = useState({});

 const onDayPress = (day) => {
    const date = day.dateString;
    setSelectedDate({
      [date]: {
        selected: true,
        marked: true,
        selectedColor: 'red',
      },
    });
 };

 return (
    <View>
      <Calendar
        onDayPress={onDayPress}
        markedDates={selectedDate}
      />
    </View>
 );
};

export default MyCalendar;