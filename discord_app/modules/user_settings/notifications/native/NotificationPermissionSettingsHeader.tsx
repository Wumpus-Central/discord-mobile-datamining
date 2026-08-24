// discord_app/modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ME from "../../../../Constants.tsx";
import EventActionType from "../../../nuf/native/components/notification/NotificationPermissionConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ AnalyticEvents: c5, NOOP: closure_6 } = ME);
({ EventActionLocation: error, EventActionType: closure_8, NotificationNudgeAnalyticsAction: c9, NotificationNudgeSurface: c10 } = EventActionType);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { container: null, cardContent: null, iconCircle: null, body: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignItems: "center" };
createCacheKey[2] = { width: 48, height: 48, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", marginBottom: ThemesDefault.space.PX_8 };
let obj1 = { width: 48, height: 48, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", marginBottom: ThemesDefault.space.PX_8 };
createCacheKey[3] = { marginBottom: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj2 = { marginBottom: ThemesDefault.space.PX_12, marginTop: ThemesDefault.space.PX_8, textAlign: "center" };
const result = require("set").fileFinishedImporting("modules/user_settings/notifications/native/NotificationPermissionSettingsHeader.tsx");

export default function NotificationPermissionSettingsHeader() {
  const tmp = callback3();
  let obj = canSeePushNotificationNudge(11632);
  canSeePushNotificationNudge = obj.useCanSeePushNotificationNudge();
  const items = [canSeePushNotificationNudge];
  const effect = React.useEffect(() => {
    if (canSeePushNotificationNudge) {
      let obj = closure_1_1(closure_1_2[8]);
      obj = { action: null, prompt_type: null };
      obj[0] = closure_1_9.IMPRESSION;
      obj[1] = closure_1_10.NOTIFICATION_SETTINGS_PERMISSION_HEADER;
      obj.track(closure_1_5.CONTEXTUAL_REMINDER_ACTION, obj);
    }
  }, items);
  let tmp7 = null;
  if (canSeePushNotificationNudge) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { border: "none", shadow: "none", children: null };
    obj1 = { style: null, children: null };
    obj1[0] = tmp.cardContent;
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.iconCircle;
    const obj3 = { size: "md", color: null };
    obj3[1] = ThemesDefault.colors.ICON_STRONG;
    obj2[1] = callback(tmp2(10040).BellSlashIcon, obj3);
    const items1 = [callback(View, obj2), , , ];
    const obj4 = { variant: "heading-lg/bold", color: "text-default", children: null };
    const intl = tmp2(1236).intl;
    obj4[2] = intl.string(tmp2(1236).t.MUwOvc);
    items1[1] = callback(tmp2(4739).Text, obj4);
    const obj5 = { variant: "text-sm/medium", style: null, color: "text-muted", children: null };
    obj5[1] = tmp.body;
    const intl2 = tmp2(1236).intl;
    obj5[3] = intl2.string(tmp2(1236).t.G4uKoe);
    items1[2] = callback(tmp2(4739).Text, obj5);
    const obj6 = { style: null, children: null };
    obj6[0] = { alignSelf: "stretch" };
    const obj7 = { variant: "primary", text: null, onPress: null };
    const intl3 = tmp2(1236).intl;
    obj7[1] = intl3.string(tmp2(1236).t["5xWOXv"]);
    obj7[2] = tmp6;
    obj6[1] = callback(tmp2(4750).Button, obj7);
    items1[3] = callback(View, obj6);
    obj1[1] = items1;
    obj[2] = callback2(View, obj1);
    obj[1] = callback(tmp2(6323).Card, obj);
    tmp7 = callback(View, obj);
  }
  return tmp7;
};