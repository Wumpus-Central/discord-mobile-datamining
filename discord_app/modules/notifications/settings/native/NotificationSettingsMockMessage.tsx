// discord_app/modules/notifications/settings/native/NotificationSettingsMockMessage.tsx
import noop from "noop";
import { View } from "get ActivityIndicator";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserNotificationSettings } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let error;
let metroImportAll;
let require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { card: null, cardContent: null, cardMessage: null, overlay: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row" };
createCacheKey[2] = { marginLeft: 12, maxWidth: 240 };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_10 = { code: "function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
let obj1 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST };
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockMessage.tsx");

export default function NotificationSettingsMockMessage(notificationSetting) {
  const tmp = createCacheKey();
  let obj = initialize;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = sharedValue(4146);
  let str = obj1.getName(stateFromStores);
  if (str == null) {
    str = "Roka";
  }
  require = tmp7;
  let tmp2Result = tmp2(4036);
  let num = 0;
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num = 0.8;
  }
  sharedValue = tmp2Result.useSharedValue(num);
  tmp2Result = tmp2(4036);
  const fn = function h() {
    const obj = { opacity: null };
    const value = sharedValue.get();
    obj[0] = tmp7(outer1_2[10]).withTiming(value, tmp7(outer1_2[11]).timingStandard);
    return obj;
  };
  obj = { withTiming: tmp2(4304).withTiming, opacity: sharedValue, timingStandard: tmp2(4307).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 6531430956793;
  fn.__initData = closure_10;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  if (notificationSetting.notificationSetting === UserNotificationSettings.ALL_MESSAGES) {
    obj = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl = tmp2(1236).intl;
    obj[2] = intl.string(tmp2(1236).t.WYyzI5);
    let tmp11 = callback(tmp2(4299).Text, obj);
    let tmp12 = callback;
  } else {
    obj1 = { children: null };
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
    const obj3 = { variant: "text-sm/normal", color: "text-link", children: null };
    const items1 = ["@", str, " "];
    obj3[2] = items1;
    const items2 = [callback2(tmp2(4299).Text, obj3), ];
    const intl3 = tmp2(1236).intl;
    items2[1] = intl3.string(tmp2(1236).t.WYyzI5);
    obj2[2] = items2;
    obj1[0] = callback2(tmp2(4299).Text, obj2);
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
  const obj6 = { children: null };
  const obj7 = { source: null, size: null };
  obj7[0] = sharedValue(9835);
  obj7[1] = Button.AvatarSizes.LARGE_48;
  obj6[0] = tmp12(Button.Avatar, obj7);
  const items4 = [tmp12(View, obj6), ];
  const obj8 = { style: tmp.cardMessage, children: null };
  const obj9 = { variant: "text-sm/semibold", children: null };
  const intl2 = tmp2(1236).intl;
  obj9[1] = intl2.string(getSystemLocale.t.qSq0tD);
  const items5 = [tmp12(Text.Text, obj9), tmp11];
  obj8[1] = items5;
  items4[1] = callback2(View, obj8);
  obj5[1] = items4;
  const items6 = [callback2(View, obj5), ];
  const items7 = [animatedStyle, tmp.overlay];
  items6[1] = tmp12(sharedValue(4036).View, { style: items7 });
  obj4[1] = items6;
  return callback2(View, obj4);
};