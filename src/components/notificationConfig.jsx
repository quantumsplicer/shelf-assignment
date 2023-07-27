import PushNotification from 'react-native-push-notification';
import { Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

class NotificationManager {
  configure = () => {
    PushNotification.configure({
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        if (notification.action === 'Yes') {
          console.log('yes')
          // navigation.navigate('navToScreen')
        } else if (notification.action === 'No') {
          // navigation.navigate('navToScreen')
        }
      },

      senderID: '532284868975',
      requestPermissions: Platform.OS === 'ios',
    });
  };

  sendLocalNotification = (title, message) => {
    PushNotification.localNotification({
      title: title,
      message: message,
      actions: '["Yes", "No"]',
      userInfo: {},
    });
  };
}

const notificationManager = new NotificationManager();
export default notificationManager;
