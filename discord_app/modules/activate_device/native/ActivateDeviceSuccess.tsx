// discord_app/modules/activate_device/native/ActivateDeviceSuccess.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import getAvatarURL from "../../../utils/AvatarUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import Button from "../../../design/components/Button/native/Button.native.tsx";
import preloadDefault from "../../../components_native/common/FastImage.tsx";
import innerContentDefault from "ActivateDeviceSharedStyles.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5, Fragment: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles({ image: { width: 300, height: 200, alignSelf: "center" } });
const result = require("set").fileFinishedImporting("modules/activate_device/native/ActivateDeviceSuccess.tsx");

export const ActivateDeviceSuccess = function ActivateDeviceSuccess(onComplete) {
  ({ data, successImage } = onComplete);
  if (null != data.twoWayLinkCode) {
    const intl2 = getSystemLocale.intl;
    let stringResult = intl2.string(getSystemLocale.t.QhATl2);
  } else {
    const scopes = data.scopes;
    stringResult = null;
    if (scopes.some((arg0) => callback(table[5]).isSocialLayerUmbrellaScope(arg0))) {
      const intl = getSystemLocale.intl;
      stringResult = intl.string(getSystemLocale.t.vBPvK3);
    }
  }
  let tmp9 = null;
  if (null != successImage) {
    let obj = { source: null, style: null, resizeMode: "contain" };
    obj1 = getAvatarURL;
    obj[0] = obj1.makeSource(successImage);
    obj[1] = tmp.image;
    tmp9 = callback(preloadDefault, obj);
    const tmp13 = preloadDefault;
  }
  const items = [tmp9, , ];
  obj = { style: innerContentDefault.innerContent, children: null };
  obj = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: innerContentDefault.centerText, children: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.qDtJmD);
  const items1 = [callback(Text.Text, obj), ];
  let tmp18Result = null;
  if (null != stringResult) {
    obj1 = { variant: "text-md/medium", color: "text-default", style: null, children: null };
    obj1[2] = innerContentDefault.centerText;
    obj1[3] = stringResult;
    tmp18Result = tmp18(tmp19(4440).Text, obj1);
  }
  const obj2 = { children: null };
  items1[1] = tmp18Result;
  obj[1] = items1;
  items[1] = closure_5(View, obj);
  const obj3 = { size: "lg", text: null, onPress: null, grow: true };
  const intl4 = tmp19(1236).intl;
  obj3[1] = intl4.string(getSystemLocale.t.cpT0Cq);
  obj3[2] = onComplete.onComplete;
  items[2] = callback(Button.Button, obj3);
  obj2[0] = items;
  return closure_5(closure_6, obj2);
};