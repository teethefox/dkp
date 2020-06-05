import React from 'react';
import { Player } from 'video-react';
var mykey = 'your_api_key'; // typically like Gtg-rtZdsreUr_fLfhgPfgff
var calendarid = 'you_calendar_id'; // will look somewhat like 3ruy234vodf6hf4sdf5sd84f@group.calendar.google.com

$.ajax({
    type: 'GET',
    url: encodeURI('https://www.googleapis.com/calendar/v3/calendars/' + calendarid+ '/events?key=' + mykey),
    dataType: 'json',
    success: function (response) {
        //do whatever you want with each
    },
    error: function (response) {
        //tell that an error has occurred
    }
});
export default props => {
  return (
    <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  );
};