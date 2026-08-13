// discord_app/modules/video_calls/native/components/UserVideoFailed.tsx
import { View } from "get ActivityIndicator";
import { VideoToggleState } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { mapped } from "../../../errors/av_errors/AVError.tsx";

let c5;
let closure_6;
let error;
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
let obj = { container: null, placeholderImage: null, button: null };
obj = { alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").unsafe_rawColors.PRIMARY_700, padding: 8 };
obj[0] = obj;
obj[1] = { marginBottom: 8, width: "100%", resizeMode: "contain" };
obj[2] = { marginTop: 16, alignSelf: "center" };
let closure_8 = createCacheKey.createStyles(obj);
let result = require("jsxProd").fileFinishedImporting("modules/video_calls/native/components/UserVideoFailed.tsx");

export default function UserVideoFailed(arg0) {
  let avError;
  let removeRetryButton;
  let removeSplashImage;
  let require;
  let style;
  ({ userId: require, removeRetryButton, removeSplashImage } = arg0);
  ({ style, avError } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const tmp2 = callback2();
  let obj = mapped;
  obj = {};
  const merged1 = Object.assign(merged);
  const items = [tmp2.container, style];
  obj.style = items;
  let tmp9 = !removeSplashImage;
  if (!removeSplashImage) {
    obj = { style: null };
    obj[0] = tmp2.placeholderImage;
    tmp9 = callback(tmp3(10664).StreamFailed, obj);
  }
  const obj1 = { children: null };
  const items1 = [tmp9, ];
  const obj2 = { variant: "text-md/semibold", color: "text-strong", children: null };
  const intl = tmp3(1236).intl;
  obj2[2] = intl.string(getSystemLocale.t["z+mxvo"]);
  items1[1] = callback(Text.Text, obj2);
  obj1[0] = items1;
  const items2 = [closure_7(closure_6, obj1), , ];
  const obj3 = { variant: "text-sm/semibold", color: "text-muted", selectable: true, children: null };
  const intl2 = tmp3(1236).intl;
  obj3[3] = intl2.formatToPlainString(getSystemLocale.t.ejOT95, { errorCode: obj.getErrorInfo(avError).errorCode });
  items2[1] = callback(Text.Text, obj3);
  const obj4 = { style: tmp2.button, children: null };
  let tmp11Result = !removeRetryButton;
  if (!removeRetryButton) {
    const obj5 = { variant: "secondary", text: null, onPress: null };
    const intl3 = tmp3(1236).intl;
    obj5[1] = intl3.string(tmp3(1236).t["hxmQ/e"]);
    obj5[2] = function onPress() {
      const result = outer1_0(outer1_2[10]).clearVideoStreamTimeout(outer1_0(outer1_2[11]).MediaEngineContextTypes.DEFAULT, closure_0);
      const obj = outer1_0(outer1_2[10]);
      outer1_1(outer1_2[12]).setDisableLocalVideo(closure_0, outer1_4.DISABLED, outer1_0(outer1_2[11]).MediaEngineContextTypes.DEFAULT, false);
      const timerId = setTimeout(() => {
        outer1_1(outer1_2[12]).setDisableLocalVideo(closure_0, outer1_4.MANUAL_ENABLED, outer1_0(outer1_2[11]).MediaEngineContextTypes.DEFAULT, false);
      }, 1000);
    };
    tmp11Result = tmp11(tmp3(4755).Button, obj5);
  }
  obj4[1] = tmp11Result;
  items2[2] = callback(View, obj4);
  obj.children = items2;
  return closure_7(View, obj);
};