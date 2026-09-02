// === Module 15314: onChange ===

// Module 15314 (onChange)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import create from "create" /* 1305 */;
import MAX_REACTIONS from "MAX_REACTIONS" /* 4132 */;
import explicitContentFromProto from "explicitContentFromProto" /* 4166 */;
import MobileUserSettings from "MobileUserSettings" /* 7893 */;
import createToggle from "createToggle" /* 11288 */;

function onChange(arg0) {
  const obj = MAX_REACTIONS;
  const ReactionNotifications = explicitContentFromProto.ReactionNotifications;
  const result = obj.updateReactionNotificationsSetting(Number(arg0), ReactionNotifications.getSetting());
}
const radio = createToggle.createRadio({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Rq0NFs);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = { label: null, value: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["9x/RtT"]);
    obj[1] = create.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t.fJAbQd);
    obj[1] = create.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t["xu+UDU"]);
    obj[1] = create.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Rq0NFs);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: explicitContentFromProto.ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = { label: null, value: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t["9x/RtT"]);
    obj[1] = create.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = getSystemLocale.intl;
    obj[0] = intl2.string(getSystemLocale.t.fJAbQd);
    obj[1] = create.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t["xu+UDU"]);
    obj[1] = create.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
};
let result = set.fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };