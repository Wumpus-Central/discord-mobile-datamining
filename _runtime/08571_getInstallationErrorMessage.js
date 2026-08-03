// === Module 8571: getInstallationErrorMessage ===

// Module 8571 (getInstallationErrorMessage)
import { Platform } from "get ActivityIndicator";

let obj = { ios: null, android: null };
obj = { expo: null, nonExpo: null };
const items = ["react-native-date-picker is not installed correctly. Make sure you: ", ""];
let arraySpreadResult = HermesBuiltin.arraySpread(["1. Have rebuilt your app (with for instance 'npx expo run:ios')", "2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ", "https://github.com/henninghall/react-native-date-picker"], 2);
items[arraySpreadResult] = "";
const sum = arraySpreadResult + 1;
items[sum] = "Please reply in this thread if this solved your issue or not: ";
const sum1 = sum + 1;
items[sum1] = "https://github.com/henninghall/react-native-date-picker/issues/404";
const sum2 = sum1 + 1;
items[sum2] = "";
items[sum2 + 1] = "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file.";
obj[0] = items.join("\n");
const items1 = ["react-native-date-picker is not installed correctly. Make sure you: ", ""];
arraySpreadResult = HermesBuiltin.arraySpread(["1. Installed pods (by for instance running 'cd ios && pod install')", "2. Rebuilt the app (by for instance 'npx react-native run-ios')"], 2);
items1[arraySpreadResult] = "";
const sum3 = arraySpreadResult + 1;
items1[sum3] = "Please reply in this thread if this solved your issue or not: ";
const sum4 = sum3 + 1;
items1[sum4] = "https://github.com/henninghall/react-native-date-picker/issues/404";
const sum5 = sum4 + 1;
items1[sum5] = "";
items1[sum5 + 1] = "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file.";
obj[1] = items1.join("\n");
obj[0] = obj;
obj = { expo: null, nonExpo: null };
const items2 = ["react-native-date-picker is not installed correctly. Make sure you: ", ""];
const arraySpreadResult1 = HermesBuiltin.arraySpread(["1. Have rebuilt your app (with for instance 'npx expo run:android')", "2. Are not using Expo Go (Expo Go is unsupported). See README for more info: ", "https://github.com/henninghall/react-native-date-picker"], 2);
items2[arraySpreadResult1] = "";
const sum6 = arraySpreadResult1 + 1;
items2[sum6] = "Please reply in this thread if this solved your issue or not: ";
const sum7 = sum6 + 1;
items2[sum7] = "https://github.com/henninghall/react-native-date-picker/issues/404";
const sum8 = sum7 + 1;
items2[sum8] = "";
items2[sum8 + 1] = "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file.";
obj[0] = items2.join("\n");
const items3 = ["react-native-date-picker is not installed correctly. Make sure you: ", ""];
const arraySpreadResult2 = HermesBuiltin.arraySpread(["1. Rebuilt the app (by for instance 'npx react-native run-ios')"], 2);
items3[arraySpreadResult2] = "";
const sum9 = arraySpreadResult2 + 1;
items3[sum9] = "Please reply in this thread if this solved your issue or not: ";
const sum10 = sum9 + 1;
items3[sum10] = "https://github.com/henninghall/react-native-date-picker/issues/404";
const sum11 = sum10 + 1;
items3[sum11] = "";
items3[sum11 + 1] = "To ignore this warning, add 'global.ignoreDatePickerWarning = true' to the top of your index file.";
obj[1] = items3.join("\n");
obj[1] = obj;

export const getInstallationErrorMessage = () => {
  try {
    require(dependencyMap[1]).default;
    return obj.android.expo;
  } catch (err) {
    return obj.android.nonExpo;
  }
};