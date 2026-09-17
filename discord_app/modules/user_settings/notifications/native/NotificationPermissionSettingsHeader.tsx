// === Module 15603: NotificationPermissionSettingsHeader ===

// Module 15603 (NotificationPermissionSettingsHeader)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, NOOP: metroRequire } = Constants);
const NotificationPermissionConstants = fn(12562);
({ EventActionLocation: closure_7, EventActionType: closure_8, NotificationNudgeAnalyticsAction: closure_9, NotificationNudgeSurface: c10 } = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_16 }, cardContent: { alignItems: "center" }, iconCircle: null, body: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_8 };
obj2.iconCircle = size;
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
obj2.body = { marginBottom: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx");

export default function NotificationPermissionSettingsHeader() {
  const tmp = closure_13();
  canSeePushNotificationNudge = canSeePushNotificationNudge(12563).useCanSeePushNotificationNudge();
  const items = [canSeePushNotificationNudge];
  const effect = noop.useEffect(() => {
    if (canSeePushNotificationNudge) {
      const obj2 = { action: constants2.IMPRESSION, prompt_type: constants3.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
      AnalyticsUtilsDefault.track(constants.CONTEXTUAL_REMINDER_ACTION, obj2);
    }
  }, items);
  let tmp7 = null;
  if (canSeePushNotificationNudge) {
    let obj2 = { style: tmp.container, children: null };
    const obj3 = { border: "none", shadow: "none", children: null };
    const obj4 = { style: tmp.cardContent, children: null };
    const obj5 = { style: tmp.iconCircle, children: null };
    const obj6 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
    obj5.children = closure_11(tmp2(9213).BellSlashIcon, obj6);
    const items1 = [closure_11(View, obj5), , , ];
    const obj7 = { variant: "heading-lg/bold", color: "text-default", children: null };
    const intl = tmp2(1115).intl;
    obj7.children = intl.string(tmp2(1115).t.MUwOvc);
    items1[1] = closure_11(tmp2(4636).Text, obj7);
    const obj8 = { variant: "text-sm/medium", style: tmp.body, color: "text-muted", children: null };
    const intl2 = tmp2(1115).intl;
    obj8.children = intl2.string(tmp2(1115).t.G4uKoe);
    items1[2] = closure_11(tmp2(4636).Text, obj8);
    const obj9 = { style: { alignSelf: "stretch" }, children: null };
    const obj10 = { variant: "primary", text: null, onPress: null };
    const intl3 = tmp2(1115).intl;
    obj10.text = intl3.string(tmp2(1115).t["5xWOXv"]);
    obj10.onPress = tmp6;
    obj9.children = closure_11(tmp2(5062).Button, obj10);
    items1[3] = closure_11(View, obj9);
    obj4.children = items1;
    obj3.children = closure_12(View, obj4);
    obj2.children = closure_11(tmp2(5695).Card, obj3);
    tmp7 = closure_11(View, obj2);
  }
  return tmp7;
};