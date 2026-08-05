// discord_app/modules/activate_device/native/ActivateDeviceError.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { registerAsset } from "../../../../_runtime/10470_registerAsset.js";
import { Button } from "../../../design/components/Button/native/Button.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { innerContent } from "ActivateDeviceSharedStyles.tsx";

let c3;
let c4;
let c5;
let closure_6;
let error;
const require = arg1;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6, Fragment: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ image: { width: 254, height: 127, alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/activate_device/native/ActivateDeviceError.tsx");

export const ActivateDeviceError = function ActivateDeviceError(onRetry) {
  let obj = { children: null };
  obj = { source: null, style: null };
  obj[0] = registerAsset;
  obj[1] = callback3().image;
  const items = [callback(closure_3, obj), , ];
  obj = { style: innerContent.innerContent, children: null };
  const obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
  obj1[2] = innerContent.centerText;
  const intl = getSystemLocale.intl;
  obj1[3] = intl.string(getSystemLocale.t["3dgwPD"]);
  const items1 = [callback(Text.Text, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
  obj2[2] = innerContent.centerText;
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