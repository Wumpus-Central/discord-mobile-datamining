// discord_app/modules/notifications/settings/native/NotificationSettingsMockMessage.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UserNotificationSettings = fn(1074).UserNotificationSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4640);
let obj2 = {
  card: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    overflow: "hidden",
    borderRadius: 10,
    padding: 16,
  },
  cardContent: { display: "flex", flexDirection: "row" },
  cardMessage: { marginLeft: 12, maxWidth: 240 },
  overlay: null,
};
const rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
obj2.overlay = rect;
let closure_9 = createStyles.createStyles(obj2);
const __initData = {
  code: "function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockMessage.tsx");

export default function NotificationSettingsMockMessage(notificationSetting) {
  const tmp = closure_9();
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  let str = sharedValue(4484).getName(stateFromStores);
  if (str == null) {
    str = "Roka";
  }
  _require = tmp7;
  const obj2 = sharedValue(4484);
  let num = 0;
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num = 0.8;
  }
  sharedValue = require("ReanimatedRexport").useSharedValue(num);
  const tmp2Result = require("ReanimatedRexport");
  const fn = function h() {
    const obj = { opacity: null };
    value = sharedValue.get();
    obj.opacity = timing.withTiming(value, timingPresets.timingStandard);
    return obj;
  };
  const tmp2Result2 = require("ReanimatedRexport");
  fn.__closure = {
    withTiming: require("timing").withTiming,
    opacity: sharedValue,
    timingStandard: require("timingPresets").timingStandard,
  };
  fn.__workletHash = 6531430956793;
  fn.__initData = __initData;
  const animatedStyle = tmp2Result2.useAnimatedStyle(fn);
  if (notificationSetting.notificationSetting === UserNotificationSettings.ALL_MESSAGES) {
    const obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
    const intl = tmp2(1115).intl;
    obj4.children = intl.string(tmp2(1115).t.WYyzI5);
    let tmp11 = closure_7(tmp2(4636).Text, obj4);
    let tmp12 = closure_7;
  } else {
    const obj5 = { children: null };
    const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
    const obj7 = { variant: "text-sm/normal", color: "text-link", children: null };
    const items1 = ["@", str, " "];
    obj7.children = items1;
    const items2 = [closure_8(tmp2(4636).Text, obj7)];
    const intl3 = tmp2(1115).intl;
    items2[1] = intl3.string(tmp2(1115).t.WYyzI5);
    obj6.children = items2;
    obj5.children = closure_8(tmp2(4636).Text, obj6);
    tmp11 = closure_7(View, obj5);
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
  const obj8 = { style: tmp.card, children: null };
  const obj9 = { style: tmp.cardContent, children: null };
  const obj10 = { children: null };
  const obj3 = {
    withTiming: require("timing").withTiming,
    opacity: sharedValue,
    timingStandard: require("timingPresets").timingStandard,
  };
  obj10.children = tmp12(require("native").Avatar, {
    source: sharedValue(10305),
    size: require("native").AvatarSizes.LARGE_48,
  });
  const items4 = [tmp12(View, obj10)];
  const obj12 = { style: tmp.cardMessage, children: null };
  const obj13 = { variant: "text-sm/semibold", children: null };
  const intl2 = tmp2(1115).intl;
  obj13.children = intl2.string(require("util").t.qSq0tD);
  const items5 = [tmp12(require("Text/Text").Text, obj13), tmp11];
  obj12.children = items5;
  items4[1] = closure_8(View, obj12);
  obj9.children = items4;
  const items6 = [closure_8(View, obj9)];
  const obj14 = { style: null };
  const items7 = [animatedStyle, tmp.overlay];
  obj14.style = items7;
  items6[1] = tmp12(sharedValue(4376).View, obj14);
  obj8.children = items6;
  return closure_8(View, obj8);
}
