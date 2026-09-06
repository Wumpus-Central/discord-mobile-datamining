// === Module 10158: NotificationSettingsMockMessage ===

// Module 10158 (NotificationSettingsMockMessage)
import nativeDefault from "native" /* 576 */;
import timing from "timing" /* 4561 */;
import timingPresets from "timingPresets" /* 4564 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { card: null, cardContent: null, cardMessage: null, overlay: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, padding: 16 };
createStyles.card = createStyles;
createStyles.cardContent = { display: "flex", flexDirection: "row" };
createStyles.cardMessage = { marginLeft: 12, maxWidth: 240 };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles.overlay = rect;
let closure_9 = createStyles.createStyles(createStyles);
const __initData = { code: "function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockMessage.tsx");

export default function NotificationSettingsMockMessage(notificationSetting) {
  const tmp = closure_9();
  let obj = require("initialize");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = sharedValue(4404);
  let str = obj1.getName(stateFromStores);
  if (str == null) {
    str = "Roka";
  }
  _require = tmp7;
  let tmp2Result = tmp2(4296);
  let num = 0;
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num = 0.8;
  }
  sharedValue = tmp2Result.useSharedValue(num);
  tmp2Result = tmp2(4296);
  const fn = function h() {
    const obj = { opacity: null };
    value = sharedValue.get();
    obj.opacity = timing.withTiming(value, timingPresets.timingStandard);
    return obj;
  };
  obj = { withTiming: tmp2(4561).withTiming, opacity: sharedValue, timingStandard: tmp2(4564).timingStandard };
  fn.__closure = obj;
  fn.__workletHash = 6531430956793;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  if (notificationSetting.notificationSetting === UserNotificationSettings.ALL_MESSAGES) {
    obj = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl = tmp2(1114).intl;
    obj.children = intl.string(tmp2(1114).t.WYyzI5);
    let tmp11 = closure_7(tmp2(4556).Text, obj);
    let tmp12 = closure_7;
  } else {
    obj1 = { children: null };
    const obj2 = { variant: "text-sm/medium", color: "text-default", children: null };
    const obj3 = { variant: "text-sm/normal", color: "text-link", children: null };
    const items1 = ["@", str, " "];
    obj3.children = items1;
    const items2 = [closure_8(tmp2(4556).Text, obj3), ];
    const intl3 = tmp2(1114).intl;
    items2[1] = intl3.string(tmp2(1114).t.WYyzI5);
    obj2.children = items2;
    obj1.children = closure_8(tmp2(4556).Text, obj2);
    tmp11 = closure_7(View, obj1);
    tmp12 = closure_7;
  }
  const items3 = [sharedValue, notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES];
  const effect = noop.useEffect(() => {
    let num = 0;
    if (closure_0) {
      num = 0.8;
    }
    const result = sharedValue.set(num);
  }, items3);
  const obj4 = { style: tmp.card, children: null };
  const obj5 = { style: tmp.cardContent, children: null };
  const obj6 = { children: tmp12(require("native").Avatar, { source: sharedValue(10159), size: require("native").AvatarSizes.LARGE_48 }) };
  const items4 = [tmp12(View, obj6), ];
  const obj8 = { style: tmp.cardMessage, children: null };
  const obj9 = { variant: "text-sm/semibold", children: null };
  const intl2 = tmp2(1114).intl;
  obj9.children = intl2.string(require("util").t.qSq0tD);
  const items5 = [tmp12(require("Text/Text").Text, obj9), tmp11];
  obj8.children = items5;
  items4[1] = closure_8(View, obj8);
  obj5.children = items4;
  const items6 = [closure_8(View, obj5), ];
  const obj10 = { style: null };
  const items7 = [animatedStyle, tmp.overlay];
  obj10.style = items7;
  items6[1] = tmp12(sharedValue(4296).View, obj10);
  obj4.children = items6;
  return closure_8(View, obj4);
};