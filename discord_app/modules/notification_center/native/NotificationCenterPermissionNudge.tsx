import _slicedToArray from "_slicedToArray";
import noop from "DismissibleContent";
import { View } from "apexExperiment";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import EventActionType from "EventActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let c4;
let c5;
let closure_12;
let closure_14;
let closure_15;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
let require = arg1;
function NotificationCenterBannerImpl(onDismiss) {
  onDismiss = onDismiss.onDismiss;
  const tmp = createCacheKey();
  callback3(() => {
    let obj = callback(698);
    obj = { action: constants4.IMPRESSION, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  }, []);
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.iconContainer, children: null };
  obj = { size: "md", color: null };
  obj[1] = importDefault(712).colors.ICON_STRONG;
  obj[1] = callback4(onDismiss(10380).BellSlashIcon, obj);
  const items = [callback4(View, obj), , ];
  const obj1 = { style: tmp.contentContainer, children: null };
  const obj2 = { variant: "text-md/semibold", color: "text-default", children: null };
  const intl = onDismiss(1236).intl;
  obj2[2] = intl.string(onDismiss(1236).t.G6YBna);
  const items1 = [callback4(onDismiss(4251).Text, obj2), , ];
  const obj3 = { variant: "text-md/medium", color: "text-muted", style: null, children: null };
  const obj4 = { marginTop: null };
  obj4[0] = importDefault(712).space.PX_4;
  obj3[2] = obj4;
  const intl2 = onDismiss(1236).intl;
  obj3[3] = intl2.string(onDismiss(1236).t["9CoPDE"]);
  items1[1] = callback4(onDismiss(4251).Text, obj3);
  const obj5 = { style: tmp.ctaButton, children: null };
  const obj6 = { variant: "primary", size: "md", text: null, onPress: null };
  const intl3 = onDismiss(1236).intl;
  obj6[2] = intl3.string(onDismiss(1236).t.a4bgO0);
  obj6[3] = function onPress() {
    let obj = onDismiss(11629);
    const pushNotificationPermission = obj.requestPushNotificationPermission(constants2.ALLOW_TO_REQUEST, constants3.NOTIFICATION_CENTER, closure_8);
    obj = { action: constants4.ACCEPT, prompt_type: constants5.NOTIFICATION_CENTER_BANNER };
    callback(698).track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
  };
  obj5[1] = callback4(onDismiss(4666).Button, obj6);
  items1[2] = callback4(View, obj5);
  obj1[1] = items1;
  items[1] = callback5(View, obj1);
  const obj7 = {
    onPress() {
      let obj = outer1_1(outer1_2[9]);
      obj = { action: outer1_12.DISMISS, prompt_type: outer1_13.NOTIFICATION_CENTER_BANNER };
      obj.track(outer1_7.CONTEXTUAL_REMINDER_ACTION, obj);
      onDismiss();
    },
    hitSlop: 8,
    accessibilityRole: "button",
    accessibilityLabel: null,
    children: null
  };
  const intl4 = onDismiss(1236).intl;
  obj7[3] = intl4.string(onDismiss(1236).t.WAI6xu);
  obj7[4] = callback4(onDismiss(5241).XSmallIcon, { size: "sm", color: "icon-strong" });
  items[2] = callback4(onDismiss(4783).PressableHighlight, obj7);
  obj[1] = items;
  return callback5(View, obj);
}
({ useCallback: c4, useEffect: c5 } = noop);
({ AnalyticEvents: error, NOOP: metroImportAll } = ME);
({ EventActionType: c10, EventActionLocation: unpackModuleId, NotificationNudgeAnalyticsAction: closure_12, NotificationNudgeSurface: map1 } = EventActionType);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { container: null, contentContainer: null, iconContainer: null, ctaButton: null };
createCacheKey = { flexDirection: "row", paddingLeft: 24, paddingRight: require("Themes").space.PX_12, paddingVertical: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "flex-start", borderBottomWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, gap: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1 };
createCacheKey[2] = { width: 48, height: 48, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
let obj1 = { width: 48, height: 48, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_MOD_STRONG, alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { alignSelf: "flex-start", marginTop: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { alignSelf: "flex-start", marginTop: require("Themes").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/notification_center/native/NotificationCenterPermissionNudge.tsx");

export default function NotificationCenterPermissionNudge() {
  let obj = importDefault(14527);
  const canSeePushNotificationNudge = require(11629) /* _requestPushNotificationPermission */.useCanSeePushNotificationNudge();
  const obj2 = require(11629) /* _requestPushNotificationPermission */;
  let prop = null;
  if (!obj.useConfig({ location: "NotificationCenterPermissionNudge" }).inHoldout) {
    prop = null;
    if (canSeePushNotificationNudge) {
      prop = tmp2(1358).DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER;
    }
  }
  const tmp5 = callback(require(5921) /* useSelectedDismissibleContent */.useSelectedTimeRecurringDismissibleContent(prop, { cooldownDurationMs: 604800000 }), 2);
  require = tmp6;
  const items = [tmp5[1]];
  const obj3 = require(5921) /* useSelectedDismissibleContent */;
  let tmp8 = null;
  if (tmp5[0] === require(1358) /* DismissibleContent */.DismissibleContent.NOTIFICATION_NUDGE_NOTIFICATION_CENTER_BANNER) {
    obj = { onDismiss: null };
    obj[0] = tmp7;
    tmp8 = callback4(NotificationCenterBannerImpl, obj);
  }
  return tmp8;
};