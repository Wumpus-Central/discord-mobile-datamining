// === Module 9234: ? ===

// Module 9234
import react_native from "react-native" /* 17 */;

const require = globalThis.__r;

let items;
let items1;
let items2;
let items3;
let obj2;
let obj3;
const Platform = react_native.Platform;
const obj = { ios: obj2, android: obj3 };
obj2 = { expo: items.join("\n"), nonExpo: items1.join("\n") };
items = ["react-native-date-picker is not installed correctly. Make sure you: ", "", ...["1. Have rebuilt your app (with for instance 'npx expo run:ios')", "2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ", "https://github.com/henninghall/react-native-date-picker"], "", "Please reply in this thread if this solved your issue or not: ", "https://github.com/henninghall/react-native-date-picker/issues/404", "", "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file."];
const sum = tmp2 + 1;
const sum1 = sum + 1;
items1 = ["react-native-date-picker is not installed correctly. Make sure you: ", "", ...["1. Installed pods (by for instance running 'cd ios && pod install')", "2. Rebuilt the app (by for instance 'npx react-native run-ios')"], "", "Please reply in this thread if this solved your issue or not: ", "https://github.com/henninghall/react-native-date-picker/issues/404", "", "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file."];
const sum2 = tmp5 + 1;
const sum3 = sum2 + 1;
obj3 = { expo: items2.join("\n"), nonExpo: items3.join("\n") };
items2 = ["react-native-date-picker is not installed correctly. Make sure you: ", "", ...["1. Have rebuilt your app (with for instance 'npx expo run:android')", "2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ", "https://github.com/henninghall/react-native-date-picker"], "", "Please reply in this thread if this solved your issue or not: ", "https://github.com/henninghall/react-native-date-picker/issues/404", "", "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file."];
const sum4 = tmp8 + 1;
const sum5 = sum4 + 1;
items3 = ["react-native-date-picker is not installed correctly. Make sure you: ", "", ...["1. Rebuilt the app (by for instance 'npx react-native run-ios')"], "", "Please reply in this thread if this solved your issue or not: ", "https://github.com/henninghall/react-native-date-picker/issues/404", "", "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file."];
const sum6 = tmp11 + 1;
const sum7 = sum6 + 1;

export const getInstallationErrorMessage = () => {
  try {
    require(dependencyMap[1]).default;
    return obj.android.expo;
  } catch (err) {
    return obj.android.nonExpo;
  }
};