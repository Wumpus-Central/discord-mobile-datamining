// discord_app/modules/notifications/settings/native/NotificationSettingsMockMessage.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import timingPresets from "../../../../design/animation/reanimated/timing/timingPresets.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UserNotificationSettings = fn(1085).UserNotificationSettings;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
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
const __initData2 = {
  code: "function NotificationSettingsMockMessageTsx2(){const{withTiming,opacity,timingStandard}=this.__closure;return{opacity:withTiming(opacity.get(),timingStandard)};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  overflow: "hidden",
  borderRadius: 10,
  padding: 16,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/NotificationSettingsMockMessage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (notificationSetting) => {
      const cResult = require("c").c(29);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function y() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        let str = sharedValue(4728).getName(stateFromStores);
        if (str == null) {
          str = "Roka";
        }
        cResult[2] = stateFromStores;
        cResult[3] = str;
        let tmp9 = str;
        const obj3 = sharedValue(4728);
      } else {
        tmp9 = cResult[3];
      }
      _require = tmp13;
      const tmpResult = require("initialize");
      let num5 = 0;
      if (notificationSetting.notificationSetting === UserNotificationSettings.NO_MESSAGES) {
        num5 = 0.8;
      }
      sharedValue = require("ReanimatedRexport").useSharedValue(num5);
      const tmpResult3 = require("ReanimatedRexport");
      class A {
        constructor() {
          obj = { opacity: null };
          obj2 = closure_0(closure_2[12]);
          value = closure_1.get();
          obj.opacity = obj2.withTiming(value, closure_0(closure_2[13]).timingStandard);
          return obj;
        }
      }
      const tmpResult4 = require("ReanimatedRexport");
      A.__closure = {
        withTiming: require("timing").withTiming,
        opacity: sharedValue,
        timingStandard: require("timingPresets").timingStandard,
      };
      A.__workletHash = 6531430956793;
      A.__initData = __initData;
      const animatedStyle = tmpResult4.useAnimatedStyle(A);
      if (notificationSetting.notificationSetting !== UserNotificationSettings.ALL_MESSAGES) {
        if (cResult[5] !== tmp9) {
          const obj4 = { variant: "text-sm/normal", color: "text-link", children: null };
          const items1 = ["@", tmp9, " "];
          obj4.children = items1;
          const tmp22 = closure_8(tmp(4892).Text, obj4);
          cResult[5] = tmp9;
          cResult[6] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[6];
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.WYyzI5);
          cResult[7] = stringResult;
          let tmp23 = stringResult;
        } else {
          tmp23 = cResult[7];
        }
        if (cResult[8] !== tmp20) {
          const obj5 = { children: null };
          const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
          const items2 = [tmp20, tmp23];
          obj6.children = items2;
          obj5.children = closure_8(tmp(4892).Text, obj6);
          const tmp29 = closure_7(View, obj5);
          cResult[8] = tmp20;
          cResult[9] = tmp29;
        }
      } else {
        const _Symbol4 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { variant: "text-sm/medium", color: "text-default", children: null };
          class R {
            constructor() {
              num = 0;
              tmp = closure_1;
              if (closure_0) {
                num = 0.8;
              }
              result = closure_1.set(num);
              return;
            }
          }
          obj7.children = tmp18(tmp(1126).t.WYyzI5);
          const tmp19 = closure_7(tmp(4892).Text, obj7);
          cResult[4] = tmp19;
          let tmp16 = tmp19;
        } else {
          tmp16 = cResult[4];
        }
        if (cResult[10] === tmp13) {
          if (cResult[11] === sharedValue) {
            let tmp31 = cResult[12];
            let tmp32 = cResult[13];
          }
          const effect = noop.useEffect(tmp31, tmp32);
          const _Symbol2 = Symbol;
          class R {
            constructor() {
              num = 0;
              tmp = closure_1;
              if (closure_0) {
                num = 0.8;
              }
              result = closure_1.set(num);
              return;
            }
          }
          if (tmp35 === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = { children: null };
            const obj9 = { source: null, size: null };
            class R {
              constructor() {
                num = 0;
                tmp = closure_1;
                if (closure_0) {
                  num = 0.8;
                }
                result = closure_1.set(num);
                return;
              }
            }
            obj9.source = sharedValue(12521);
            obj9.size = tmp(1188).AvatarSizes.LARGE_48;
            obj8.children = closure_7(tmp(1188).Avatar, obj9);
            const tmp39 = closure_7(View, obj8);
            cResult[14] = tmp39;
            let tmp36 = tmp39;
          } else {
            tmp36 = cResult[14];
          }
          const _Symbol3 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = { variant: "text-sm/semibold", children: null };
            class R {
              constructor() {
                num = 0;
                tmp = closure_1;
                if (closure_0) {
                  num = 0.8;
                }
                result = closure_1.set(num);
                return;
              }
            }
            obj10.children = tmp42(tmp(1126).t.qSq0tD);
            const tmp43 = closure_7(tmp(4892).Text, obj10);
            cResult[15] = tmp43;
            let tmp40 = tmp43;
          } else {
            tmp40 = cResult[15];
          }
          if (cResult[16] === tmp16) {
            if (cResult[17] === tmp4.cardMessage) {
              let tmp44 = cResult[18];
            }
            if (cResult[19] === tmp4.cardContent) {
              if (cResult[20] === tmp44) {
                let tmp48 = cResult[21];
              }
              if (cResult[22] === tmp4.overlay) {
                if (cResult[23] === animatedStyle) {
                  let tmp53 = cResult[24];
                }
                if (cResult[25] === tmp4.card) {
                  if (cResult[26] === tmp53) {
                    if (cResult[27] === tmp48) {
                      let tmp58 = cResult[28];
                    }
                    return tmp58;
                  }
                }
                class R {
                  constructor() {
                    num = 0;
                    tmp = closure_1;
                    if (closure_0) {
                      num = 0.8;
                    }
                    result = closure_1.set(num);
                    return;
                  }
                }
                tmp61[0] = tmp4.card;
                const items3 = [tmp48, tmp53];
                tmp61[1] = items3;
                const tmp62 = closure_8(View, tmp61);
                cResult[25] = tmp4.card;
                cResult[26] = tmp53;
                cResult[27] = tmp48;
                cResult[28] = tmp62;
                tmp58 = tmp62;
              }
              class R {
                constructor() {
                  num = 0;
                  tmp = closure_1;
                  if (closure_0) {
                    num = 0.8;
                  }
                  result = closure_1.set(num);
                  return;
                }
              }
              const items4 = [animatedStyle, tmp4.overlay];
              tmp56[0] = items4;
              const tmp57 = closure_7(sharedValue(4618).View, tmp56);
              cResult[22] = tmp4.overlay;
              cResult[23] = animatedStyle;
              cResult[24] = tmp57;
              tmp53 = tmp57;
            }
            class R {
              constructor() {
                num = 0;
                tmp = closure_1;
                if (closure_0) {
                  num = 0.8;
                }
                result = closure_1.set(num);
                return;
              }
            }
            tmp51[0] = tmp4.cardContent;
            const items5 = [tmp36, tmp44];
            tmp51[1] = items5;
            const tmp52 = closure_8(View, tmp51);
            cResult[19] = tmp4.cardContent;
            cResult[20] = tmp44;
            cResult[21] = tmp52;
            tmp48 = tmp52;
          }
          const obj11 = { style: tmp4.cardMessage, children: null };
          const items6 = [tmp40, tmp16];
          obj11.children = items6;
          const tmp47 = closure_8(View, obj11);
          cResult[16] = tmp16;
          cResult[17] = tmp4.cardMessage;
          cResult[18] = tmp47;
          tmp44 = tmp47;
        }
        class R {
          constructor() {
            num = 0;
            tmp = closure_1;
            if (closure_0) {
              num = 0.8;
            }
            result = closure_1.set(num);
            return;
          }
        }
        const items7 = [sharedValue, tmp13];
        cResult[10] = tmp13;
        cResult[11] = sharedValue;
        cResult[12] = R;
        cResult[13] = items7;
        tmp32 = items7;
        tmp31 = R;
      }
      const obj2 = {
        withTiming: require("timing").withTiming,
        opacity: sharedValue,
        timingStandard: require("timingPresets").timingStandard,
      };
    }
  : (notificationSetting) => {
      const tmp = closure_9();
      const items = [UserStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj = require("initialize");
      let str = sharedValue(4728).getName(stateFromStores);
      if (str == null) {
        str = "Roka";
      }
      _require = tmp7;
      const obj2 = sharedValue(4728);
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
      fn.__workletHash = 11282667610458;
      fn.__initData = __initData2;
      const animatedStyle = tmp2Result2.useAnimatedStyle(fn);
      if (notificationSetting.notificationSetting === UserNotificationSettings.ALL_MESSAGES) {
        const obj4 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl = tmp2(1126).intl;
        obj4.children = intl.string(tmp2(1126).t.WYyzI5);
        let tmp11 = closure_7(tmp2(4892).Text, obj4);
        let tmp12 = closure_7;
      } else {
        const obj5 = { children: null };
        const obj6 = { variant: "text-sm/medium", color: "text-default", children: null };
        const obj7 = { variant: "text-sm/normal", color: "text-link", children: null };
        const items1 = ["@", str, " "];
        obj7.children = items1;
        const items2 = [closure_8(tmp2(4892).Text, obj7)];
        const intl3 = tmp2(1126).intl;
        items2[1] = intl3.string(tmp2(1126).t.WYyzI5);
        obj6.children = items2;
        obj5.children = closure_8(tmp2(4892).Text, obj6);
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
        source: sharedValue(12521),
        size: require("native").AvatarSizes.LARGE_48,
      });
      const items4 = [tmp12(View, obj10)];
      const obj12 = { style: tmp.cardMessage, children: null };
      const obj13 = { variant: "text-sm/semibold", children: null };
      const intl2 = tmp2(1126).intl;
      obj13.children = intl2.string(require("util").t.qSq0tD);
      const items5 = [tmp12(require("Text/Text").Text, obj13), tmp11];
      obj12.children = items5;
      items4[1] = closure_8(View, obj12);
      obj9.children = items4;
      const items6 = [closure_8(View, obj9)];
      const obj14 = { style: null };
      const items7 = [animatedStyle, tmp.overlay];
      obj14.style = items7;
      items6[1] = tmp12(sharedValue(4618).View, obj14);
      obj8.children = items6;
      return closure_8(View, obj8);
    };
