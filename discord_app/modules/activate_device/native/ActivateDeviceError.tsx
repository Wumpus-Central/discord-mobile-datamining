// discord_app/modules/activate_device/native/ActivateDeviceError.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import registerAssetDefault from "../../../../_runtime/09326_registerAsset.js";
import innerContentDefault from "ActivateDeviceSharedStyles.tsx";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const result = require("set").fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = function ActivateDeviceError(onRetry) {
  let obj = { children: null };
  obj = { source: registerAssetDefault, style: callback3().image };
  const items = [callback(closure_3, obj), ,];
  obj = { style: innerContentDefault.innerContent, children: null };
  obj1 = {
    variant: "heading-lg/bold",
    color: "mobile-text-heading-primary",
    style: innerContentDefault.centerText,
    children: null,
  };
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t["3dgwPD"]);
  const items1 = [callback(Text.Text, obj1)];
  const obj2 = {
    variant: "text-md/medium",
    color: "text-default",
    style: innerContentDefault.centerText,
    children: null,
  };
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
