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
    const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    let stringResult = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.QhATl2);
  } else {
    const scopes = data.scopes;
    stringResult = null;
    if (scopes.some((arg0) => callback(table[5]).isSocialLayerUmbrellaScope(arg0))) {
      const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
      stringResult = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.vBPvK3);
    }
  }
  let tmp9 = null;
  if (null != successImage) {
    let obj = { source: null, style: null, resizeMode: "contain" };
    let obj1 = require("../../../utils/AvatarUtils.tsx") /* getAvatarURL */;
    obj[0] = obj1.makeSource(successImage);
    obj[1] = tmp.image;
    tmp9 = callback(require("../../../components_native/common/FastImage.tsx"), obj);
    const tmp13 = require("../../../components_native/common/FastImage.tsx");
  }
  const items = [tmp9, , ];
  obj = { style: require("ActivateDeviceSharedStyles.tsx").innerContent, children: null };
  obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: null, children: null };
  obj[2] = require("ActivateDeviceSharedStyles.tsx").centerText;
  const intl3 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl3.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.qDtJmD);
  const items1 = [callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  let tmp18Result = null;
  if (null != stringResult) {
    obj1 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
    obj1[2] = require("ActivateDeviceSharedStyles.tsx").centerText;
    obj1[3] = stringResult;
    tmp18Result = tmp18(tmp19(4281).Text, obj1);
  }
  const obj2 = { children: null };
  items1[1] = tmp18Result;
  obj[1] = items1;
  items[1] = closure_5(View, obj);
  const obj3 = { size: "lg", text: null, onPress: null, grow: true };
  const intl4 = tmp19(1236).intl;
  obj3[1] = intl4.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.cpT0Cq);
  obj3[2] = onComplete.onComplete;
  items[2] = callback(require("../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj3);
  obj2[0] = items;
  return closure_5(closure_6, obj2);
};