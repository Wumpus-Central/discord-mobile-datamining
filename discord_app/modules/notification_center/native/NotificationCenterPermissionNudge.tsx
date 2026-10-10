// discord_app/modules/notification_center/native/NotificationCenterPermissionNudge.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ContextualOptInNudgeHoldoutExperimentDefault from "../../nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = globalThis.__r;

const require = fn;
const noop = fn(19);
({ useCallback: closure_4, useEffect: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, NOOP: closure_8 } = Constants);
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const NotificationPermissionConstants = fn(12122);
({
  EventActionType: c10,
  EventActionLocation: closure_11,
  NotificationNudgeAnalyticsAction: closure_12,
  NotificationNudgeSurface: map1,
} = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c16 = 604800000;
const createStyles = fn(5092);
let obj2 = {
  container: {
    flexDirection: "row",
    paddingLeft: 24,
    paddingRight: nativeDefault.space.PX_12,
    paddingVertical: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    gap: 16,
  },
  contentContainer: { flex: 1 },
  iconContainer: null,
  ctaButton: null,
};
let size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
  alignItems: "center",
  justifyContent: "center",
};
obj2.iconContainer = size;
let obj3 = {
  flexDirection: "row",
  paddingLeft: 24,
  paddingRight: nativeDefault.space.PX_12,
  paddingVertical: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "flex-start",
  borderBottomWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  gap: 16,
};
obj2.ctaButton = { alignSelf: "flex-start", marginTop: nativeDefault.space.PX_12 };
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationCenterBannerImpl(onDismiss) {
      const cResult = onDismiss(576).c(25);
      onDismiss = onDismiss.onDismiss;
      const tmp4 = closure_17();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
            action: constants4.IMPRESSION,
            prompt_type: constants5.NOTIFICATION_CENTER_BANNER,
          });
        };
        const items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp5 = fn;
        tmp6 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      closure_5(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        function handlePress() {
          const pushNotificationPermission = onDismiss(12123).requestPushNotificationPermission(
            constants2.ALLOW_TO_REQUEST,
            constants3.NOTIFICATION_CENTER,
            closure_1_8,
          );
          const obj = onDismiss(12123);
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
            action: constants4.ACCEPT,
            prompt_type: constants5.NOTIFICATION_CENTER_BANNER,
          });
        }
        cResult[2] = handlePress;
        let tmp8 = handlePress;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== onDismiss) {
        function handleDismiss() {
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
            action: constants2.DISMISS,
            prompt_type: constants3.NOTIFICATION_CENTER_BANNER,
          });
          onDismiss();
        }
        cResult[3] = onDismiss;
        cResult[4] = handleDismiss;
        let tmp9 = handleDismiss;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
        const tmp13 = closure_14(tmp(10345).BellSlashIcon, obj2);
        cResult[5] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== tmp4.iconContainer) {
        const obj3 = { style: tmp4.iconContainer, children: tmp10 };
        const tmp17 = closure_14(View, obj3);
        cResult[6] = tmp4.iconContainer;
        cResult[7] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-md/semibold", color: "text-default", children: null };
        const intl = tmp(1126).intl;
        obj4.children = intl.string(tmp(1126).t.G6YBna);
        const tmp20 = closure_14(tmp(5088).Text, obj4);
        cResult[8] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[8];
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { variant: "text-md/medium", color: "text-muted", style: null, children: null };
        const obj6 = { marginTop: nativeDefault.space.PX_4 };
        obj5.style = obj6;
        const intl2 = tmp(1126).intl;
        obj5.children = intl2.string(tmp(1126).t["9CoPDE"]);
        const tmp24 = closure_14(tmp(5088).Text, obj5);
        cResult[9] = tmp24;
        let tmp21 = tmp24;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { variant: "primary", size: "md", text: null, onPress: null };
        const intl3 = tmp(1126).intl;
        obj7.text = intl3.string(tmp(1126).t.a4bgO0);
        obj7.onPress = tmp8;
        const tmp27 = closure_14(tmp(5379).Button, obj7);
        cResult[10] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[10];
      }
      if (cResult[11] !== tmp4.ctaButton) {
        const obj8 = { style: tmp4.ctaButton, children: tmp25 };
        const tmp31 = closure_14(View, obj8);
        cResult[11] = tmp4.ctaButton;
        cResult[12] = tmp31;
        let tmp28 = tmp31;
      } else {
        tmp28 = cResult[12];
      }
      if (cResult[13] === tmp4.contentContainer) {
        if (cResult[14] === tmp28) {
          let tmp32 = cResult[15];
        }
        const _Symbol = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const intl4 = tmp(1126).intl;
          const stringResult = intl4.string(tmp(1126).t.WAI6xu);
          const tmp38 = closure_14(tmp(6207).XSmallIcon, { size: "sm", color: "icon-strong" });
          cResult[16] = stringResult;
          cResult[17] = tmp38;
          let tmp35 = tmp38;
          let tmp34 = stringResult;
        } else {
          tmp34 = cResult[16];
          tmp35 = cResult[17];
        }
        if (cResult[18] !== tmp9) {
          const obj9 = {
            onPress: tmp9,
            hitSlop: 8,
            accessibilityRole: "button",
            accessibilityLabel: tmp34,
            children: tmp35,
          };
          const tmp41 = closure_14(tmp(6184).PressableHighlight, obj9);
          cResult[18] = tmp9;
          cResult[19] = tmp41;
          let tmp39 = tmp41;
        } else {
          tmp39 = cResult[19];
        }
        if (cResult[20] === tmp4.container) {
          if (cResult[21] === tmp32) {
            if (cResult[22] === tmp39) {
              if (cResult[23] === tmp14) {
                let tmp42 = cResult[24];
              }
              return tmp42;
            }
          }
        }
        const obj10 = { style: tmp4.container, children: null };
        const items1 = [tmp14, tmp32, tmp39];
        obj10.children = items1;
        const tmp45 = closure_15(View, obj10);
        cResult[20] = tmp4.container;
        cResult[21] = tmp32;
        cResult[22] = tmp39;
        cResult[23] = tmp14;
        cResult[24] = tmp45;
        tmp42 = tmp45;
      }
      const obj11 = { style: tmp4.contentContainer, children: null };
      const items2 = [tmp18, tmp21, tmp28];
      obj11.children = items2;
      const tmp33 = closure_15(View, obj11);
      cResult[13] = tmp4.contentContainer;
      cResult[14] = tmp28;
      cResult[15] = tmp33;
      tmp32 = tmp33;
      let obj = onDismiss(576);
    }
  : function NotificationCenterBannerImpl(onDismiss) {
      onDismiss = onDismiss.onDismiss;
      const tmp = closure_17();
      closure_5(() => {
        AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
          action: constants4.IMPRESSION,
          prompt_type: constants5.NOTIFICATION_CENTER_BANNER,
        });
      }, []);
      let obj = { style: tmp.container, children: null };
      const obj2 = {
        style: tmp.iconContainer,
        children: closure_14(onDismiss(10345).BellSlashIcon, { size: "md", color: nativeDefault.colors.ICON_STRONG }),
      };
      const items = [closure_14(View, obj2), ,];
      const obj4 = { style: tmp.contentContainer, children: null };
      const obj5 = { variant: "text-md/semibold", color: "text-default", children: null };
      const intl = onDismiss(1126).intl;
      obj5.children = intl.string(onDismiss(1126).t.G6YBna);
      const items1 = [closure_14(onDismiss(5088).Text, obj5), ,];
      const obj6 = { variant: "text-md/medium", color: "text-muted", style: null, children: null };
      const obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
      obj6.style = { marginTop: nativeDefault.space.PX_4 };
      const intl2 = onDismiss(1126).intl;
      obj6.children = intl2.string(onDismiss(1126).t["9CoPDE"]);
      items1[1] = closure_14(onDismiss(5088).Text, obj6);
      const obj8 = { style: tmp.ctaButton, children: null };
      const obj9 = { variant: "primary", size: "md", text: null, onPress: null };
      const intl3 = onDismiss(1126).intl;
      obj9.text = intl3.string(onDismiss(1126).t.a4bgO0);
      obj9.onPress = function handlePress() {
        const pushNotificationPermission = onDismiss(12123).requestPushNotificationPermission(
          constants2.ALLOW_TO_REQUEST,
          constants3.NOTIFICATION_CENTER,
          closure_1_8,
        );
        const obj = onDismiss(12123);
        AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
          action: constants4.ACCEPT,
          prompt_type: constants5.NOTIFICATION_CENTER_BANNER,
        });
      };
      obj8.children = closure_14(onDismiss(5379).Button, obj9);
      items1[2] = closure_14(View, obj8);
      obj4.children = items1;
      items[1] = closure_15(View, obj4);
      const obj10 = {
        onPress: function handleDismiss() {
          AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, {
            action: constants2.DISMISS,
            prompt_type: constants3.NOTIFICATION_CENTER_BANNER,
          });
          onDismiss();
        },
        hitSlop: 8,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl4 = onDismiss(1126).intl;
      obj10.accessibilityLabel = intl4.string(onDismiss(1126).t.WAI6xu);
      obj10.children = closure_14(onDismiss(6207).XSmallIcon, { size: "sm", color: "icon-strong" });
      items[2] = closure_14(onDismiss(6184).PressableHighlight, obj10);
      obj.children = items;
      return closure_15(View, obj);
    };
ReactCompilerGating = fn(558);
let obj4 = { alignSelf: "flex-start", marginTop: nativeDefault.space.PX_12 };
size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationCenterPermissionNudge() {
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { location: "NotificationCenterPermissionNudge" };
        cResult[0] = obj2;
        let first = obj2;
      } else {
        first = cResult[0];
      }
      const obj = require("c");
      const obj3 = ContextualOptInNudgeHoldoutExperimentDefault;
      const canSeePushNotificationNudge = require("NotificationPermissionUtil").useCanSeePushNotificationNudge();
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { cooldownDurationMs };
        cResult[1] = obj4;
        let tmp6 = obj4;
      } else {
        tmp6 = cResult[1];
      }
      const tmpResult = require("NotificationPermissionUtil");
      let prop = null;
      if (!obj3.useConfig(first).inHoldout) {
        prop = null;
        if (canSeePushNotificationNudge) {
          prop = tmp(2049).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
        }
      }
      const tmp9 = _slicedToArray(
        require("useSelectedDismissibleContent").useSelectedTimeRecurringDismissibleContent(prop, tmp6),
        2,
      );
      _require = tmp10;
      if (cResult[2] !== tmp9[1]) {
        class N {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
        cResult[2] = tmp10;
        cResult[3] = N;
      } else {
        class N {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      if (tmp9[0] !== require("dismissible_content").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
        class N {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
      } else {
        class N {
          constructor() {
            return closure_0(ContentDismissActionType.USER_DISMISS);
          }
        }
      }
      const tmpResult2 = require("useSelectedDismissibleContent");
    }
  : function NotificationCenterPermissionNudge() {
      const obj = ContextualOptInNudgeHoldoutExperimentDefault;
      const canSeePushNotificationNudge = require("NotificationPermissionUtil").useCanSeePushNotificationNudge();
      const obj2 = require("NotificationPermissionUtil");
      let prop = null;
      if (!obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout) {
        prop = null;
        if (canSeePushNotificationNudge) {
          prop = tmp2(2049).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
        }
      }
      const tmp5 = _slicedToArray(
        require("useSelectedDismissibleContent").useSelectedTimeRecurringDismissibleContent(prop, {
          cooldownDurationMs,
        }),
        2,
      );
      _require = tmp6;
      const items = [tmp5[1]];
      const obj3 = require("useSelectedDismissibleContent");
      const obj4 = { cooldownDurationMs };
      let tmp8 = null;
      if (tmp5[0] === require("dismissible_content").DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
        const obj5 = { onDismiss: tmp7 };
        tmp8 = closure_14(closure_18, obj5);
      }
      return tmp8;
    };
