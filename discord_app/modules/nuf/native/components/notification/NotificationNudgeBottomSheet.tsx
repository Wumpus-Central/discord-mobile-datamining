// discord_app/modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import NotificationPermissionUtil from "../../NotificationPermissionUtil.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let View = fn(17).View;
const NotificationPermissionConstants = fn(12078);
({ EventActionType: hasOwnProperty, NotificationNudgeAnalyticsAction: metroRequire } = NotificationPermissionConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const ContentDismissActionType = fn(2061).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  container: { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" },
  illustration: null,
  title: null,
  body: null,
  buttonsContainer: null,
};
const obj3 = { marginHorizontal: nativeDefault.space.PX_24, alignItems: "center" };
obj2.illustration = { marginVertical: nativeDefault.space.PX_24 };
obj2.title = { textAlign: "center" };
const obj4 = { marginVertical: nativeDefault.space.PX_24 };
obj2.body = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
const obj5 = { textAlign: "center", marginTop: nativeDefault.space.PX_8 };
obj2.buttonsContainer = { marginTop: nativeDefault.space.PX_8, width: "100%" };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_8, width: "100%" };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/nuf/native/components/notification/NotificationNudgeBottomSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationNudgeBottomSheet(surface) {
      const cResult = actionLocation(markAsDismissed[9]).c(41);
      ({ title, body, actionLocation } = surface);
      surface = surface.surface;
      markAsDismissed = surface.markAsDismissed;
      const onHide = surface.onHide;
      closure_11();
      if (cResult[0] !== surface) {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            obj1 = { action: closure_6.IMPRESSION, prompt_type: surface };
            trackResult = obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj1);
            return;
          }
        }
        const items = [surface];
        cResult[0] = surface;
        cResult[1] = S;
        cResult[2] = items;
        let tmp4 = items;
      } else {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            obj1 = { action: closure_6.IMPRESSION, prompt_type: surface };
            trackResult = obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj1);
            return;
          }
        }
        tmp4 = cResult[2];
      }
      const effect = onHide.useEffect(S, tmp4);
      if (cResult[3] !== onHide) {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            obj1 = { action: closure_6.IMPRESSION, prompt_type: surface };
            trackResult = obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj1);
            return;
          }
        }
        cResult[3] = onHide;
        cResult[4] = tmp7;
      } else {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            obj1 = { action: closure_6.IMPRESSION, prompt_type: surface };
            trackResult = obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj1);
            return;
          }
        }
      }
      View = tmp7;
      if (cResult[5] === actionLocation) {
        class S {
          constructor() {
            obj = closure_1(closure_2[10]);
            obj1 = { action: closure_6.IMPRESSION, prompt_type: surface };
            trackResult = obj.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, obj1);
            return;
          }
        }
      }
      const fn = function x() {
        AnalyticsUtilsDefault.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, {
          action: constants2.ACCEPT,
          prompt_type: surface,
        });
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
        const obj2 = { action: constants2.ACCEPT, prompt_type: surface };
        const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(
          constants.ALLOW_TO_REQUEST,
          actionLocation,
          closure_4,
        );
      };
      cResult[5] = actionLocation;
      cResult[6] = tmp7;
      cResult[7] = markAsDismissed;
      cResult[8] = surface;
      cResult[9] = fn;
      let obj = actionLocation(markAsDismissed[9]);
    }
  : function NotificationNudgeBottomSheet(actionLocation) {
      actionLocation = actionLocation.actionLocation;
      const surface = actionLocation.surface;
      const markAsDismissed = actionLocation.markAsDismissed;
      const onHide = actionLocation.onHide;
      ({ title, body } = actionLocation);
      const tmp = closure_11();
      const items = [surface];
      const effect = onHide.useEffect(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, {
          action: constants2.IMPRESSION,
          prompt_type: surface,
        });
      }, items);
      const items1 = [onHide];
      const callback = onHide.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        if (onHide != null) {
          onHide();
        }
      }, items1);
      const items2 = [surface, actionLocation, callback, markAsDismissed];
      const items3 = [surface, callback, markAsDismissed];
      const callback1 = onHide.useCallback(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, {
          action: constants2.ACCEPT,
          prompt_type: surface,
        });
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
        const obj2 = { action: constants2.ACCEPT, prompt_type: surface };
        const pushNotificationPermission = NotificationPermissionUtil.requestPushNotificationPermission(
          constants.ALLOW_TO_REQUEST,
          actionLocation,
          callback,
        );
      }, items2);
      const callback2 = onHide.useCallback(() => {
        AnalyticsUtilsDefault.track(AnalyticEvents.CONTEXTUAL_REMINDER_ACTION, {
          action: constants2.DISMISS,
          prompt_type: surface,
        });
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
        callback();
      }, items3);
      let obj = { children: null };
      let obj2 = { style: tmp.container, children: null };
      const items4 = [
        closure_9(callback, {
          style: tmp.illustration,
          children: closure_9(actionLocation(markAsDismissed[13]).BellSpotIllustration, { scale: 0.8 }),
        }),
        closure_9(actionLocation(markAsDismissed[14]).Text, {
          style: tmp.title,
          variant: "heading-xl/bold",
          accessibilityRole: "header",
          children: title,
        }),
        closure_9(actionLocation(markAsDismissed[14]).Text, {
          style: tmp.body,
          variant: "text-sm/medium",
          color: "text-default",
          children: body,
        }),
      ];
      const obj6 = { style: tmp.buttonsContainer, children: null };
      const obj7 = { children: null };
      const obj8 = { text: null, onPress: null };
      const intl = actionLocation(markAsDismissed[15]).intl;
      obj8.text = intl.string(actionLocation(markAsDismissed[15]).t["+7MDbQ"]);
      obj8.onPress = callback1;
      const items5 = [closure_9(actionLocation(markAsDismissed[16]).Button, obj8)];
      const obj9 = { text: null, onPress: null, variant: "secondary" };
      const intl2 = actionLocation(markAsDismissed[15]).intl;
      obj9.text = intl2.string(actionLocation(markAsDismissed[15]).t.L5eIZ2);
      obj9.onPress = callback2;
      items5[1] = closure_9(actionLocation(markAsDismissed[16]).Button, obj9);
      obj7.children = items5;
      obj6.children = closure_10(actionLocation(markAsDismissed[17]).ButtonGroup, obj7);
      items4[3] = closure_9(callback, obj6);
      obj2.children = items4;
      obj.children = closure_10(callback, obj2);
      return closure_9(actionLocation(markAsDismissed[18]).BottomSheet, obj);
    };
