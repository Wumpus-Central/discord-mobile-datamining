// === Module 15483: NotificationPermissionSettingsHeader ===

// Module 15483 (NotificationPermissionSettingsHeader)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: hasOwnProperty, NOOP: metroRequire } = Constants);
const NotificationPermissionConstants = fn(12410);
({ EventActionLocation: closure_7, EventActionType: closure_8, NotificationNudgeAnalyticsAction: closure_9, NotificationNudgeSurface: c10 } = NotificationPermissionConstants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
fn(4560);
let createStyles = { container: null, cardContent: null, iconCircle: null, body: null };
createStyles = { paddingTop: nativeDefault.space.PX_16 };
createStyles.container = createStyles;
createStyles.cardContent = { alignItems: "center" };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_8 };
createStyles.iconCircle = size;
createStyles.body = { marginBottom: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8, textAlign: "center" };
let closure_13 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx");

export default function NotificationPermissionSettingsHeader() {
  const tmp = closure_13();
  let obj = canSeePushNotificationNudge(12411);
  canSeePushNotificationNudge = obj.useCanSeePushNotificationNudge();
  const items = [canSeePushNotificationNudge];
  const effect = noop.useEffect(() => {
    if (canSeePushNotificationNudge) {
      const obj = { action: constants2.IMPRESSION, prompt_type: constants3.NOTIFICATION_SETTINGS_PERMISSION_HEADER };
      obj.track(constants.CONTEXTUAL_REMINDER_ACTION, obj);
    }
  }, items);
  let tmp7 = null;
  if (canSeePushNotificationNudge) {
    obj = { style: tmp.container, children: null };
    obj = { border: "none", shadow: "none", children: null };
    const obj1 = { style: tmp.cardContent, children: null };
    const obj2 = { style: tmp.iconCircle, children: null };
    const obj3 = { size: "md", color: nativeDefault.colors.ICON_STRONG };
    obj2.children = closure_11(tmp2(9059).BellSlashIcon, obj3);
    const items1 = [closure_11(View, obj2), , , ];
    const obj4 = { variant: "heading-lg/bold", color: "text-default", children: null };
    const intl = tmp2(1114).intl;
    obj4.children = intl.string(tmp2(1114).t.MUwOvc);
    items1[1] = closure_11(tmp2(4556).Text, obj4);
    const obj5 = { variant: "text-sm/medium", style: tmp.body, color: "text-muted", children: null };
    const intl2 = tmp2(1114).intl;
    obj5.children = intl2.string(tmp2(1114).t.G4uKoe);
    items1[2] = closure_11(tmp2(4556).Text, obj5);
    const obj6 = { style: { alignSelf: "stretch" }, children: null };
    const obj7 = { variant: "primary", text: null, onPress: null };
    const intl3 = tmp2(1114).intl;
    obj7.text = intl3.string(tmp2(1114).t["5xWOXv"]);
    obj7.onPress = tmp6;
    obj6.children = closure_11(tmp2(4975).Button, obj7);
    items1[3] = closure_11(View, obj6);
    obj1.children = items1;
    obj.children = closure_12(View, obj1);
    obj.children = closure_11(tmp2(5607).Card, obj);
    tmp7 = closure_11(View, obj);
  }
  return tmp7;
};