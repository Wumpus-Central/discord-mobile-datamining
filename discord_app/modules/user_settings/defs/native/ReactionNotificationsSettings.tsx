// discord_app/modules/user_settings/defs/native/ReactionNotificationsSettings.tsx
import createToggle from "createToggle";
import { create } from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { MAX_REACTIONS } from "../../../reactions/ReactionUtils.tsx";
import { explicitContentFromProto } from "../../UserSettings.tsx";

function onChange(arg0) {
  const obj = MAX_REACTIONS /* MAX_REACTIONS */;
  const ReactionNotifications = explicitContentFromProto /* explicitContentFromProto */.ReactionNotifications;
  const result = obj.updateReactionNotificationsSetting(Number(arg0), ReactionNotifications.getSetting());
}
const radio = createToggle.createRadio({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.Rq0NFs);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = { label: null, value: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["9x/RtT"]);
    obj[1] = create /* create */.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.fJAbQd);
    obj[1] = create /* create */.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t["xu+UDU"]);
    obj[1] = create /* create */.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.Rq0NFs);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = { label: null, value: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t["9x/RtT"]);
    obj[1] = create /* create */.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl2.string(getSystemLocale /* getSystemLocale */.t.fJAbQd);
    obj[1] = create /* create */.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = getSystemLocale /* getSystemLocale */.intl;
    obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t["xu+UDU"]);
    obj[1] = create /* create */.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
};
let result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };