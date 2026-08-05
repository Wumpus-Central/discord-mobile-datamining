// discord_app/modules/user_settings/defs/native/ReactionNotificationsSettings.tsx
import createToggle from "createToggle";

function onChange(arg0) {
  const obj = require("../../../reactions/ReactionUtils.tsx") /* MAX_REACTIONS */;
  const ReactionNotifications = require("../../UserSettings.tsx") /* explicitContentFromProto */.ReactionNotifications;
  const result = obj.updateReactionNotificationsSetting(Number(arg0), ReactionNotifications.getSetting());
}
const radio = createToggle.createRadio({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Rq0NFs);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = { label: null, value: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["9x/RtT"]);
    obj[1] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.fJAbQd);
    obj[1] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["xu+UDU"]);
    obj[1] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Rq0NFs);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useValue: require("explicitContentFromProto").ReactionNotifications.useSetting,
  onValueChange: onChange,
  useOptions() {
    let obj = { label: null, value: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["9x/RtT"]);
    obj[1] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ReactionNotificationType.NOTIFICATIONS_ENABLED;
    const items = [obj, , ];
    obj = { label: null, value: null };
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.fJAbQd);
    obj[1] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ReactionNotificationType.ONLY_DMS;
    items[1] = obj;
    obj = { label: null, value: null };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["xu+UDU"]);
    obj[1] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ReactionNotificationType.NOTIFICATIONS_DISABLED;
    items[2] = obj;
    return items;
  }
};
let result = require("explicitContentFromProto").fileFinishedImporting("modules/user_settings/defs/native/ReactionNotificationsSettings.tsx");

export default radio;
export { onChange };