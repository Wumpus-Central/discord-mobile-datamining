// discord_app/modules/notifications/settings/native/NotificationSettingsMockMessage.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../stores/UserStore.tsx";
import { UserNotificationSettings } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { card: null, cardContent: null, cardMessage: null, overlay: null };
createCacheKey = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
  borderRadius: 10,
  padding: 16,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row" };
createCacheKey[2] = { marginLeft: 12, maxWidth: 240 };
createCacheKey[3] = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
};
let closure_9 = createCacheKey.createStyles(createCacheKey);
let closure_10 = {
  code: "function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}",
};
let obj1 = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWEST,
};
let result = require("set").fileFinishedImporting(
  "modules/notifications/settings/native/NotificationSettingsMockMessage.tsx",
);

export default function NotificationSettingsMockMessage(notificationSetting) {
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  obj1 = sharedValue(4322);
  let str = obj1.getName(stateFromStores);
  if (str == null) {
    str = "Roka";
  }
  _require = tmp7;
  let tmp2Result = tmp2(4217);
  let num = 0;
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num = 0.8;
  }
  sharedValue = tmp2Result.useSharedValue(num);
  tmp2Result = tmp2(4217);
  const fn = function h() {
    const obj = { opacity: null };
    const value = sharedValue.get();
    obj[0] = callback(closure_1_2[10]).withTiming(value, callback(closure_1_2[11]).timingStandard);
    return obj;
  };
  obj = { withTiming: tmp2(4479).withTiming, opacity: sharedValue, timingStandard: tmp2(4482).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 6531430956793;
  fn.__initData = closure_10;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  if (notificationSetting.notificationSetting === UserNotificationSettings.ALL_MESSAGES) {
    obj = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl = tmp2(1233).intl;
    obj[2] = intl.string(tmp2(1233).t.WYyzI5);
    let tmp11 = callback(tmp2(4474).Text, obj);
    let tmp12 = callback;
  } else {
    obj1 = { children: null };
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
    const obj3 = { variant: "text-sm/normal", color: "text-link", children: null };
    const items1 = ["@", str, " "];
    obj3[2] = items1;
    const items2 = [callback2(tmp2(4474).Text, obj3)];
    const intl3 = tmp2(1233).intl;
    items2[1] = intl3.string(tmp2(1233).t.WYyzI5);
    obj2[2] = items2;
    obj1[0] = callback2(tmp2(4474).Text, obj2);
    tmp11 = callback(View, obj1);
    tmp12 = callback;
  }
  const items3 = [sharedValue, notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES];
  const effect = React.useEffect(() => {
    let num = 0;
    if (closure_0) {
      num = 0.8;
    }
    const result = sharedValue.set(num);
  }, items3);
  const obj4 = { style: tmp.card, children: null };
  const obj5 = { style: tmp.cardContent, children: null };
  const obj6 = {
    children: tmp12(require("../../../../design/void/native.tsx").Avatar, {
      source: sharedValue(10266),
      size: require("../../../../design/void/native.tsx").AvatarSizes.LARGE_48,
    }),
  };
  const items4 = [tmp12(View, obj6)];
  const obj8 = { style: tmp.cardMessage, children: null };
  const obj9 = { variant: "text-sm/semibold", children: null };
  const intl2 = tmp2(1233).intl;
  obj9[1] = intl2.string(require("../../../../intl/index.native.tsx").t.qSq0tD);
  const items5 = [tmp12(require("../../../../design/components/Text/native/Text.tsx").Text, obj9), tmp11];
  obj8[1] = items5;
  items4[1] = callback2(View, obj8);
  obj5[1] = items4;
  const items6 = [callback2(View, obj5)];
  const items7 = [animatedStyle, tmp.overlay];
  items6[1] = tmp12(sharedValue(4217).View, { style: items7 });
  obj4[1] = items6;
  return callback2(View, obj4);
}
