// === Module 13512: ActivateDeviceError ===

// Module 13512 (ActivateDeviceError)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import Button from "Button" /* 4879 */;
import registerAssetDefault from "registerAsset" /* 10697 */;
import innerContentDefault from "innerContent" /* 13510 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const result = require("set").fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = function ActivateDeviceError(onRetry) {
  let obj = { children: null };
  obj = { source: registerAssetDefault, style: callback3().image };
  const items = [callback(closure_3, obj), , ];
  obj = { style: innerContentDefault.innerContent, children: null };
  obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: innerContentDefault.centerText, children: null };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t["3dgwPD"]);
  const items1 = [callback(Text.Text, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: innerContentDefault.centerText, children: null };
  const intl2 = getSystemLocale.intl;
  obj2[3] = intl2.string(getSystemLocale.t["/GAO1P"]);
  items1[1] = callback(Text.Text, obj2);
  obj[1] = items1;
  items[1] = callback2(closure_4, obj);
  const obj3 = { size: "lg", text: null, onPress: null, grow: true };
  const intl3 = getSystemLocale.intl;
  obj3[1] = intl3.string(getSystemLocale.t["5911Lb"]);
  obj3[2] = onRetry.onRetry;
  items[2] = callback(Button.Button, obj3);
  obj[0] = items;
  return callback2(closure_7, obj);
};