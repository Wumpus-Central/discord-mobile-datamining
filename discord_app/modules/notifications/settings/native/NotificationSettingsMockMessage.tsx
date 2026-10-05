// === Module 12505: NotificationSettingsMockMessage ===

// Module 12505 (NotificationSettingsMockMessage)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import timing from "timing" /* 4891 */;
import timingPresets from "timingPresets" /* 4894 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, set;

let metroImportAll;
let metroImportDefault;
let obj2;
let rect;
const View = react_native.View;
const UserNotificationSettings = Constants.UserNotificationSettings;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, cardContent: { display: "flex", flexDirection: "row" }, cardMessage: { marginLeft: 12, maxWidth: 240 }, overlay: rect };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, overflow: "hidden", borderRadius: 10, padding: 16 };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let closure_9 = createStyles(obj);
const __initData = { code: "function NotificationSettingsMockMessageTsx1(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
const __initData2 = { code: "function NotificationSettingsMockMessageTsx2(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}" };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((notificationSetting) => {
  let Avatar;
  let closure_0;
  let currentUser;
  let intl;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj6;
  let obj9;
  let sharedValue;
  let tmp17;
  let tmp5;
  let tmp6;
  let tmp9;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(29);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function y() {
      return currentUser.getCurrentUser();
    };
    let num = 0;
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    const obj3 = sharedValue(4722);
    let str = obj3.getName(stateFromStores);
    if (str == null) {
      str = "Roka";
    }
    cResult[2] = stateFromStores;
    cResult[3] = str;
    tmp9 = str;
  } else {
    tmp9 = cResult[3];
  }
  _require = tmp13;
  let num5 = 0;
  const useSharedValue = tmp(4612).useSharedValue;
  tmp(4612);
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num5 = 0.8;
  }
  sharedValue = useSharedValue(num5);
  const tmpResult4 = tmp(4612);
  class A {
    constructor() {
      let value;
      let withTiming;
      const obj = { opacity: withTiming(value, timingPresets.timingStandard) };
      withTiming = timing.withTiming;
      timing;
      value = sharedValue.get();
      return obj;
    }
  }
  A.__closure = { withTiming: tmp(4891).withTiming, opacity: sharedValue, timingStandard: tmp(4894).timingStandard };
  A.__workletHash = 6531430956793;
  A.__initData = __initData;
  ({ withTiming: tmp(4891).withTiming, opacity: sharedValue, timingStandard: tmp(4894).timingStandard });
  const animatedStyle = tmpResult4.useAnimatedStyle(A);
  if (notificationSetting.notificationSetting !== UserNotificationSettings.ALL_MESSAGES) {
    let tmp20;
    let tmp23;
    let tmp25;
    if (cResult[5] !== tmp9) {
      const obj4 = { variant: "text-sm/normal", color: "text-link", children: items1 };
      items1 = ["@", tmp9, " "];
      const tmp22 = closure_8(tmp(4886).Text, obj4);
      cResult[5] = tmp9;
      cResult[6] = tmp22;
      tmp20 = tmp22;
    } else {
      tmp20 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t.WYyzI5);
      cResult[7] = stringResult;
      tmp23 = stringResult;
    } else {
      tmp23 = cResult[7];
    }
    if (cResult[8] !== tmp20) {
      const obj5 = { children: closure_8(tmp(4886).Text, obj6) };
      obj6 = { variant: "text-sm/medium", color: "text-default", children: items2 };
      items2 = [tmp20, tmp23];
      const tmp29 = closure_7(View, obj5);
      cResult[8] = tmp20;
      cResult[9] = tmp29;
      tmp25 = tmp29;
    } else {
      tmp25 = cResult[9];
    }
    tmp17 = tmp25;
  } else {
    const _Symbol4 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const obj7 = { variant: "text-sm/medium", color: "text-default", children: intl.string(tmp(1126).t.WYyzI5) };
      const Text = tmp(4886).Text;
      intl = tmp(1126).intl;
      const tmp19 = closure_7(Text, obj7);
      cResult[4] = tmp19;
      tmp17 = tmp19;
    } else {
      tmp17 = cResult[4];
    }
  }
  if (cResult[10] === notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    let tmp30;
    let tmp31;
    let tmp34;
    let tmp39;
    if (cResult[11] === sharedValue) {
      tmp30 = cResult[12];
      tmp31 = cResult[13];
    }
    const effect = react.useEffect(tmp30, tmp31);
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      const obj8 = { children: closure_7(Avatar, obj9) };
      obj9 = { source: sharedValue(12506), size: tmp(1188).AvatarSizes.LARGE_48 };
      Avatar = tmp(1188).Avatar;
      const tmp38 = closure_7(View, obj8);
      cResult[14] = tmp38;
      tmp34 = tmp38;
    } else {
      tmp34 = cResult[14];
    }
    const _Symbol3 = Symbol;
    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
      const obj10 = { variant: "text-sm/semibold", children: intl3.string(tmp(1126).t.qSq0tD) };
      const Text2 = tmp(4886).Text;
      intl3 = tmp(1126).intl;
      const tmp41 = closure_7(Text2, obj10);
      cResult[15] = tmp41;
      tmp39 = tmp41;
    } else {
      tmp39 = cResult[15];
    }
    if (cResult[16] === tmp17) {
      let tmp42;
      if (cResult[17] === tmp4.cardMessage) {
        tmp42 = cResult[18];
      }
      if (cResult[19] === tmp4.cardContent) {
        let tmp46;
        if (cResult[20] === tmp42) {
          tmp46 = cResult[21];
        }
        if (cResult[22] === tmp4.overlay) {
          let tmp50;
          if (cResult[23] === animatedStyle) {
            tmp50 = cResult[24];
          }
          if (cResult[25] === tmp4.card) {
            if (cResult[26] === tmp50) {
              let tmp54;
              if (cResult[27] === tmp46) {
                tmp54 = cResult[28];
              }
              return tmp54;
            }
          }
          const obj11 = { style: tmp4.card, children: items3 };
          items3 = [tmp46, tmp50];
          const tmp57 = closure_8(View, obj11);
          cResult[25] = tmp4.card;
          cResult[26] = tmp50;
          cResult[27] = tmp46;
          cResult[28] = tmp57;
          tmp54 = tmp57;
        }
        const obj12 = { style: items4 };
        items4 = [animatedStyle, tmp4.overlay];
        const tmp53 = closure_7(sharedValue(4612).View, obj12);
        cResult[22] = tmp4.overlay;
        cResult[23] = animatedStyle;
        cResult[24] = tmp53;
        tmp50 = tmp53;
      }
      const obj13 = { style: tmp4.cardContent, children: items5 };
      items5 = [tmp34, tmp42];
      const tmp49 = closure_8(View, obj13);
      cResult[19] = tmp4.cardContent;
      cResult[20] = tmp42;
      cResult[21] = tmp49;
      tmp46 = tmp49;
    }
    const obj14 = { style: tmp4.cardMessage, children: items6 };
    items6 = [tmp39, tmp17];
    const tmp45 = closure_8(View, obj14);
    cResult[16] = tmp17;
    cResult[17] = tmp4.cardMessage;
    cResult[18] = tmp45;
    tmp42 = tmp45;
  }
  class R {
    constructor() {
      let num = 0;
      set = sharedValue.set;
      if (closure_0) {
        num = 0.8;
      }
      const result = set(num);
    }
  }
  const items7 = [sharedValue, notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES];
  cResult[10] = notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES;
  cResult[11] = sharedValue;
  cResult[12] = R;
  cResult[13] = items7;
  tmp31 = items7;
  tmp30 = R;
}) : ((notificationSetting) => {
  let Avatar;
  let Text3;
  let closure_0;
  let currentUser;
  let intl;
  let intl2;
  let items1;
  let items2;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj6;
  let sharedValue;
  let tmp12;
  let tmp13;
  const tmp = closure_9();
  let obj = require("get initialized");
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = sharedValue(4722);
  let str = obj2.getName(stateFromStores);
  if (str == null) {
    str = "Roka";
  }
  _require = tmp7;
  let num = 0;
  const useSharedValue = require("ReanimatedRexport").useSharedValue;
  require("ReanimatedRexport");
  if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
    num = 0.8;
  }
  sharedValue = useSharedValue(num);
  const fn = function h() {
    let value;
    let withTiming;
    const obj = { opacity: withTiming(value, timingPresets.timingStandard) };
    withTiming = timing.withTiming;
    timing;
    value = sharedValue.get();
    return obj;
  };
  const tmp2Result2 = require("ReanimatedRexport");
  fn.__closure = { withTiming: require("timing").withTiming, opacity: sharedValue, timingStandard: require("timingPresets").timingStandard };
  fn.__workletHash = 11282667610458;
  fn.__initData = __initData2;
  ({ withTiming: require("timing").withTiming, opacity: sharedValue, timingStandard: require("timingPresets").timingStandard });
  const animatedStyle = tmp2Result2.useAnimatedStyle(fn);
  if (notificationSetting.notificationSetting === UserNotificationSettings.ALL_MESSAGES) {
    const obj4 = { variant: "text-sm/medium", color: "text-default", children: intl.string(require("intl").t.WYyzI5) };
    const Text = tmp2(4886).Text;
    intl = tmp2(1126).intl;
    tmp12 = closure_7(Text, obj4);
    tmp13 = closure_7;
  } else {
    const obj5 = { children: closure_8(Text3, obj6) };
    obj6 = { variant: "text-sm/medium", color: "text-default", children: items2 };
    Text3 = tmp2(4886).Text;
    const obj7 = { variant: "text-sm/normal", color: "text-link", children: items1 };
    items1 = ["@", str, " "];
    items2 = [closure_8(require("Text/Text").Text, obj7), ];
    const intl3 = tmp2(1126).intl;
    items2[1] = intl3.string(require("intl").t.WYyzI5);
    tmp12 = closure_7(View, obj5);
    tmp13 = closure_7;
  }
  const items3 = [sharedValue, notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES];
  const effect = react.useEffect(() => {
    let num = 0;
    set = sharedValue.set;
    if (closure_0) {
      num = 0.8;
    }
    const result = set(num);
  }, items3);
  const obj8 = { style: tmp.card, children: items6 };
  const obj9 = { style: tmp.cardContent, children: items4 };
  const obj10 = { children: tmp13(Avatar, obj11) };
  obj11 = { source: sharedValue(12506), size: require("native").AvatarSizes.LARGE_48 };
  Avatar = tmp2(1188).Avatar;
  items4 = [tmp13(View, obj10), ];
  const obj12 = { style: tmp.cardMessage, children: items5 };
  const obj13 = { variant: "text-sm/semibold", children: intl2.string(require("intl").t.qSq0tD) };
  const Text2 = tmp2(4886).Text;
  intl2 = tmp2(1126).intl;
  items5 = [tmp13(Text2, obj13), tmp12];
  items4[1] = closure_8(View, obj12);
  items6 = [closure_8(View, obj9), ];
  const obj14 = { style: items7 };
  items7 = [animatedStyle, tmp.overlay];
  items6[1] = tmp13(sharedValue(4612).View, obj14);
  return closure_8(View, obj8);
});
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockMessage.tsx");

export default tmp4;