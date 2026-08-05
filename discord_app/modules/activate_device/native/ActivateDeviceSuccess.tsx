// discord_app/modules/activate_device/native/ActivateDeviceSuccess.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ image: { width: 300, height: 200, alignSelf: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export const ActivateDeviceSuccess = function ActivateDeviceSuccess(onComplete) {
  let data;
  let successImage;
  ({ data, successImage } = onComplete);
  if (null != data.twoWayLinkCode) {
    const intl2 = require(1236) /* getSystemLocale */.intl;
    let stringResult = intl2.string(require(1236) /* getSystemLocale */.t.QhATl2);
  } else {
    const scopes = data.scopes;
    stringResult = null;
    if (scopes.some((arg0) => callback(table[5]).isSocialLayerUmbrellaScope(arg0))) {
      const intl = require(1236) /* getSystemLocale */.intl;
      stringResult = intl.string(require(1236) /* getSystemLocale */.t.vBPvK3);
    }
  }
  let tmp9 = null;
  if (null != successImage) {
    let obj = { source: null, style: null, resizeMode: "contain" };
    let obj1 = require(1416) /* getAvatarURL */;
    obj[0] = obj1.makeSource(successImage);
    obj[1] = tmp.image;
    tmp9 = callback(importDefault(5236), obj);
    const tmp13 = importDefault(5236);
  }
  const items = [tmp9, , ];
  obj = { style: importDefault(13138).innerContent, children: null };
  obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
  obj[2] = importDefault(13138).centerText;
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl3.string(require(1236) /* getSystemLocale */.t.qDtJmD);
  const items1 = [callback(require(4281) /* Text */.Text, obj), ];
  let tmp18Result = null;
  if (null != stringResult) {
    obj1 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
    obj1[2] = importDefault(13138).centerText;
    obj1[3] = stringResult;
    tmp18Result = tmp18(tmp19(4281).Text, obj1);
  }
  const obj2 = { children: null };
  items1[1] = tmp18Result;
  obj[1] = items1;
  items[1] = closure_5(View, obj);
  const obj3 = { size: "lg", text: null, onPress: null, grow: true };
  const intl4 = tmp19(1236).intl;
  obj3[1] = intl4.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj3[2] = onComplete.onComplete;
  items[2] = callback(require(4695) /* Button */.Button, obj3);
  obj2[0] = items;
  return closure_5(closure_6, obj2);
};