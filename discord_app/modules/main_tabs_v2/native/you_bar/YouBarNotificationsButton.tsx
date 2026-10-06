// discord_app/modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../haptics/HapticUtils.native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import ForLaterExperiment from "../../../saved_messages/ForLaterExperiment.tsx";
import showForLaterModal from "../../../saved_messages/native/showForLaterModal.tsx";
import SavedMessagesTypes from "../../../saved_messages/SavedMessagesTypes.tsx";
import BellIcon2 from "../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import SavedMessagesStore from "../../../saved_messages/SavedMessagesStore.tsx";
import YouBarConstants from "YouBarConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let _require, dependencyMap, hasNameplate;

let YOU_BAR_BUTTON_ICON_SIZE;
let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let View = react_native.View;
({
  YOU_BAR_SPRING_CONFIG: metroRequire,
  YOU_BAR_BUTTON_HIT_SLOP: metroImportDefault,
  YOU_BAR_BUTTON_ICON_SIZE,
} = YouBarConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = {
  icon: { width: YOU_BAR_BUTTON_ICON_SIZE, height: YOU_BAR_BUTTON_ICON_SIZE },
  iconContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  overdueReminderDot: obj2,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_NOTIFICATION };
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function YouBarNotificationsButtonTsx1(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}",
};
const __initData2 = {
  code: "function YouBarNotificationsButtonTsx2(){const{withSpring,badgeCount,YOU_BAR_SPRING_CONFIG,tokens}=this.__closure;return{transform:[{scaleX:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)}],marginLeft:withSpring(badgeCount>0?tokens.space.PX_4:0,YOU_BAR_SPRING_CONFIG),opacity:withSpring(badgeCount>0?1:0,YOU_BAR_SPRING_CONFIG)};}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (hasNameplate) => {
        let closure_2;
        let intl;
        let isForLaterExperimentOn;
        let overdueMessageReminderCount;
        let tmp10;
        let tmp14;
        let tmp9;
        let obj = react2;
        const cResult = obj.c(39);
        hasNameplate = hasNameplate.hasNameplate;
        const tmp4 = closure_10();
        const value = isForLaterExperimentOn(16376)().value;
        const require = value;
        let obj2 = ReanimatedRexport;
        const fn = function s() {
          let items;
          let num2;
          let num3;
          let withSpring2;
          let withSpring3;
          let num = 0;
          const withSpring = spring.withSpring;
          spring;
          if (require > 0) {
            num = 1;
          }
          const obj = {
            transform: items,
            marginLeft: withSpring2(num2, metroRequire),
            opacity: withSpring3(num3, metroRequire),
          };
          items = [{ scaleX: withSpring(num, metroRequire) }];
          ({ scaleX: withSpring(num, metroRequire) });
          num2 = 0;
          withSpring2 = spring.withSpring;
          spring;
          if (require > 0) {
            num2 = nativeDefault.space.PX_4;
          }
          num3 = 0;
          withSpring3 = spring.withSpring;
          spring;
          if (require > 0) {
            num3 = 1;
          }
          return obj;
        };
        fn.__closure = {
          withSpring: spring.withSpring,
          badgeCount: value,
          YOU_BAR_SPRING_CONFIG,
          tokens: isForLaterExperimentOn(587),
        };
        fn.__workletHash = 11181198364048;
        fn.__initData = __initData;
        ({
          withSpring: spring.withSpring,
          badgeCount: value,
          YOU_BAR_SPRING_CONFIG,
          tokens: isForLaterExperimentOn(587),
        });
        const animatedStyle = obj2.useAnimatedStyle(fn);
        const obj4 = ForLaterExperiment;
        isForLaterExperimentOn = obj4.useIsForLaterExperimentOn("YouBar");
        const obj5 = ForLaterExperiment;
        let hasForLaterAccess = obj5.useHasForLaterAccess("YouBar");
        if (isForLaterExperimentOn) {
          if (!hasForLaterAccess) {
            let num = 0;
            hasForLaterAccess = SavedMessagesStore.getSavedMessageCount() > 0;
          }
          isForLaterExperimentOn = hasForLaterAccess;
        }
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [SavedMessagesStore];
          const fn2 = function _() {
            return overdueMessageReminderCount.getOverdueMessageReminderCount();
          };
          let num2 = 0;
          cResult[0] = items;
          let num3 = 1;
          cResult[1] = fn2;
          tmp10 = fn2;
          tmp9 = items;
        } else {
          [tmp9, tmp10] = cResult;
        }
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
        if (cResult[2] !== isForLaterExperimentOn) {
          const fn3 = function f() {
            if (isForLaterExperimentOn) {
              const obj = HapticUtils;
              const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
              const obj2 = showForLaterModal;
              obj2.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
            }
          };
          cResult[2] = isForLaterExperimentOn;
          cResult[3] = fn3;
          tmp14 = fn3;
        } else {
          tmp14 = cResult[3];
        }
        dependencyMap = tmp14;
        if (cResult[4] !== isForLaterExperimentOn) {
          const items1 = [];
          if (isForLaterExperimentOn) {
            let tmp16;
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { name: "open-bookmarks", label: intl.string(intl3.t["2pAkDA"]) };
              intl = tmp(1126).intl;
              cResult[6] = obj6;
              tmp16 = obj6;
            } else {
              tmp16 = cResult[6];
            }
            items1.push(tmp16);
          }
          cResult[4] = isForLaterExperimentOn;
          cResult[5] = items1;
        }
        if (cResult[7] !== tmp14) {
          class G {
            constructor(nativeEvent) {
              if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
                closure_2();
              }
            }
          }
          cResult[7] = tmp14;
          cResult[8] = G;
        } else {
          class G {
            constructor(nativeEvent) {
              if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
                closure_2();
              }
            }
          }
        }
        if (hasNameplate) {
          class G {
            constructor(nativeEvent) {
              if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
                closure_2();
              }
            }
          }
        }
        if (cResult[9] === tmp4.icon) {
          class G {
            constructor(nativeEvent) {
              if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
                closure_2();
              }
            }
          }
          if (cResult[12] !== value) {
            class G {
              constructor(nativeEvent) {
                if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
                  closure_2();
                }
              }
            }
            const obj7 = { count: value };
            cResult[12] = value;
            cResult[13] = obj9.formatToPlainString(intl3.t.kedGua, obj7);
            const formatToPlainStringResult = obj9.formatToPlainString(intl3.t.kedGua, obj7);
          } else {
            class G {
              constructor(nativeEvent) {
                if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
                  closure_2();
                }
              }
            }
          }
          if (cResult[14] === tmp21) {
            class G {
              constructor(nativeEvent) {
                if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
                  closure_2();
                }
              }
            }
          }
          let combined = tmp21;
          if (isForLaterExperimentOn && stateFromStores > 0 && 0 === value) {
            class G {
              constructor(nativeEvent) {
                if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
                  closure_2();
                }
              }
            }
            const _HermesInternal = HermesInternal;
            const obj8 = { count: stateFromStores };
            combined = "" + tmp21 + ", " + obj11.formatToPlainString(tmp(1126).t.yBmFPA, obj8);
          }
          cResult[14] = tmp21;
          cResult[15] = stateFromStores;
          cResult[16] = isForLaterExperimentOn && stateFromStores > 0 && 0 === value;
          cResult[17] = combined;
        }
        const obj10 = { size: "custom", style: tmp4.icon, color: undefined };
        cResult[9] = tmp4.icon;
        cResult[10] = undefined;
        cResult[11] = closure_8(BellIcon2.BellIcon, obj10);
        closure_8(BellIcon2.BellIcon, obj10);
      }
    : (hasNameplate) => {
        let _undefined;
        let items4;
        let obj9;
        let overdueMessageReminderCount;
        let str;
        let str4;
        hasNameplate = hasNameplate.hasNameplate;
        let isForLaterExperimentOn;
        let onLongPress;
        const tmp = closure_10();
        const tmp3 = onLongPress;
        const value = isForLaterExperimentOn(onLongPress[9])().value;
        _require = value;
        let obj = require("ReanimatedRexport");
        const fn = function u() {
          let items;
          let num2;
          let num3;
          let withSpring2;
          let withSpring3;
          let num = 0;
          const withSpring = spring.withSpring;
          spring;
          if (c0 > 0) {
            num = 1;
          }
          const obj = {
            transform: items,
            marginLeft: withSpring2(num2, metroRequire),
            opacity: withSpring3(num3, metroRequire),
          };
          items = [{ scaleX: withSpring(num, metroRequire) }];
          ({ scaleX: withSpring(num, metroRequire) });
          num2 = 0;
          withSpring2 = spring.withSpring;
          spring;
          if (c0 > 0) {
            num2 = nativeDefault.space.PX_4;
          }
          num3 = 0;
          withSpring3 = spring.withSpring;
          spring;
          if (c0 > 0) {
            num3 = 1;
          }
          return obj;
        };
        let obj2 = {
          withSpring: require("spring").withSpring,
          badgeCount: value,
          YOU_BAR_SPRING_CONFIG,
          tokens: isForLaterExperimentOn(onLongPress[6]),
        };
        fn.__closure = obj2;
        fn.__workletHash = 14846757226483;
        fn.__initData = __initData2;
        const animatedStyle = obj.useAnimatedStyle(fn);
        const obj3 = require("ForLaterExperiment");
        const tmp2 = isForLaterExperimentOn;
        isForLaterExperimentOn = obj3.useIsForLaterExperimentOn("YouBar");
        const obj4 = require("ForLaterExperiment");
        let hasForLaterAccess = obj4.useHasForLaterAccess("YouBar");
        if (isForLaterExperimentOn) {
          if (!hasForLaterAccess) {
            let num = 0;
            hasForLaterAccess = SavedMessagesStore.getSavedMessageCount() > 0;
          }
          isForLaterExperimentOn = hasForLaterAccess;
        }
        let items = [SavedMessagesStore];
        const tmp4Result = require("get initialized");
        const stateFromStores = tmp4Result.useStateFromStores(items, () =>
          overdueMessageReminderCount.getOverdueMessageReminderCount(),
        );
        let tmp10 = isForLaterExperimentOn;
        if (tmp10) {
          let num2 = 0;
          tmp10 = stateFromStores > 0;
        }
        if (tmp10) {
          let num3 = 0;
          tmp10 = 0 === value;
        }
        const items1 = [isForLaterExperimentOn];
        onLongPress = react.useCallback(() => {
          if (isForLaterExperimentOn) {
            const obj = HapticUtils;
            const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.SOFT);
            const obj2 = showForLaterModal;
            obj2.showForLaterModal(SavedMessagesTypes.SavedMessageSortTypes.BOOKMARK);
          }
        }, items1);
        const items2 = [isForLaterExperimentOn];
        const items3 = [onLongPress];
        const memo = react.useMemo(() => {
          let intl;
          const items = [];
          if (isForLaterExperimentOn) {
            const push = items.push;
            const obj = { name: "open-bookmarks", label: intl.string(intl3.t["2pAkDA"]) };
            intl = intl3.intl;
            push(obj);
          }
          return items;
        }, items2);
        const callback1 = react.useCallback((nativeEvent) => {
          if ("open-bookmarks" === nativeEvent.nativeEvent.actionName) {
            callback();
          }
        }, items3);
        const obj5 = { size: "custom", style: tmp.icon, color: str };
        str = undefined;
        const BellIcon = tmp4(tmp3[18]).BellIcon;
        if (hasNameplate) {
          str = "white";
        }
        const tmp14Result = closure_8(BellIcon, obj5);
        let intl = tmp4(tmp3[17]).intl;
        const formatToPlainStringResult = intl.formatToPlainString(require("intl").t.kedGua, { count: value });
        let combined = formatToPlainStringResult;
        if (tmp10) {
          const intl2 = tmp4(tmp3[17]).intl;
          const _HermesInternal = HermesInternal;
          const obj6 = { count: stateFromStores };
          combined = "" + formatToPlainStringResult + ", " + intl2.formatToPlainString(tmp4(tmp3[17]).t.yBmFPA, obj6);
        }
        const YouBarButtonContainer = tmp4(tmp3[19]).YouBarButtonContainer;
        const obj7 = {
          accessibilityLabel: combined,
          accessibilityActions: memo,
          onAccessibilityAction: callback1,
          variant: str4,
          size: "sm",
          icon: closure_9(View, obj9),
          onPress() {
            const obj = _undefined(callback[21]);
            const rootNavigationRef = obj.getRootNavigationRef();
            if (null != rootNavigationRef) {
              rootNavigationRef.navigate("notifications", { inNestedNavigator: true });
            }
          },
          onLongPress,
          hitSlop,
        };
        str4 = "tertiary";
        const IconButton = tmp4(tmp3[22]).IconButton;
        if (hasNameplate) {
          str4 = "secondary-overlay";
        }
        obj9 = { style: tmp.iconContainer, children: items4 };
        items4 = [,];
        const obj10 = { icon: tmp14Result, hasBadge: tmp10, badgeStyle: tmp.overdueReminderDot };
        const obj8 = { children: closure_8(IconButton, obj7) };
        items4[0] = closure_8(require("YouBarButton").YouBarButtonIcon, obj10);
        const obj11 = { style: animatedStyle, children: closure_8(require("native").Badge, { value }) };
        View = tmp2(tmp3[10]).View;
        items4[1] = closure_8(View, obj11);
        return closure_8(YouBarButtonContainer, obj8);
      },
);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarNotificationsButton.tsx");

export default memoResult;
