export const colorPicker = color => {
  switch (color) {
    case 'good':
      return '#00b894'; // change 'good' color to a shade of green
    case 'neutral':
      return '#ffeaa7'; // change 'neutral' color to a shade of yellow
    case 'bad':
      return '#d63031'; // change 'bad' color to a shade of red
    default:
      return '#303030'; // use a dark gray as the default color
  }
};

