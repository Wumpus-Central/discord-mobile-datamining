// discord_app/modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import createToggle from "createToggle";

let c4;
let c5;
const require = arg1;
function showMessageRequestRestrictionModal(arg0) {
  const _require = arg0;
  let obj = importDefault(4623);
  obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null };
  const intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t.yAfu1p);
  const intl2 = _require(1236).intl;
  obj[1] = intl2.string(_require(1236).t.Ry2z74);
  const intl3 = _require(1236).intl;
  obj[2] = intl3.string(_require(1236).t.p89ACt);
  const intl4 = _require(1236).intl;
  obj[3] = intl4.string(_require(1236).t.gm1Vej);
  obj[4] = importDefault(4713).Colors.RED;
  obj[5] = function onConfirm() {
    const MessageRequestRestrictedDefault = callback(outer1_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(callback);
    const MessageRequestRestrictedGuildIds = callback(outer1_2[4]).MessageRequestRestrictedGuildIds;
    if (callback) {
      let guildIds = outer1_3.getGuildIds();
    } else {
      guildIds = [];
    }
    MessageRequestRestrictedGuildIds.updateSetting(guildIds);
  };
  obj[6] = function onCancel() {
    const MessageRequestRestrictedDefault = callback(outer1_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(callback);
  };
  obj.show(obj);
}
({ getSelectedGuildId: c4, useUserSafetySettingsSelectedGuildStore: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createToggle = {
  useTitle() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["3o2ojh"]);
  },
  useDescription() {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.o5fjz6);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const defaultGuildsRestricted = require(14785) /* useDefaultGuildsRestricted */.useDefaultGuildsRestricted();
    const selectedGuildId2 = callback2().selectedGuildId;
    const RestrictedGuildIds = require(3958) /* explicitContentFromProto */.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId2);
    const obj = require(14785) /* useDefaultGuildsRestricted */;
    const tmp6 = selectedGuildId2 !== closure_6 || !require(13974) /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    let tmp7 = !tmp6;
    if (tmp6) {
      if (selectedGuildId2 === tmp5) {
        hasItem = defaultGuildsRestricted;
      }
      tmp7 = hasItem;
    }
    const MessageRequestRestrictedDefault = tmp(3958).MessageRequestRestrictedDefault;
    const obj3 = require(13974) /* useParentalControlledExplicitContentSettings */;
    const MessageRequestRestrictedGuildIds = tmp(3958).MessageRequestRestrictedGuildIds;
    const setting1 = MessageRequestRestrictedGuildIds.useSetting();
    let tmp9 = !setting1.includes(selectedGuildId);
    let tmp10 = !tmp7;
    if (!tmp7) {
      if (selectedGuildId === tmp5) {
        tmp9 = tmp8;
      }
      tmp10 = tmp9;
    }
    return tmp10;
  },
  useIsDisabled() {
    const defaultGuildsRestricted = require(14785) /* useDefaultGuildsRestricted */.useDefaultGuildsRestricted();
    const selectedGuildId = callback2().selectedGuildId;
    const RestrictedGuildIds = require(3958) /* explicitContentFromProto */.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId);
    const obj = require(14785) /* useDefaultGuildsRestricted */;
    let tmp4 = selectedGuildId !== closure_6;
    if (!tmp4) {
      tmp4 = !obj3.useIsParentallyControlled();
    }
    let tmp5 = !tmp4;
    if (tmp4) {
      if (selectedGuildId === closure_6) {
        hasItem = defaultGuildsRestricted;
      }
      tmp5 = hasItem;
    }
    return tmp5;
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    if (!arg0) {
      let obj = require(14788) /* shouldAgeVerifyForDMDefaultOff */;
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        obj = { entryPoint: null };
        obj[0] = require(7722) /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
        const result = importDefault(7720).showAgeVerificationGetStartedModal(obj);
        const obj2 = importDefault(7720);
      }
    }
    const tmp5 = callback();
    if (tmp5 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const sanitizedMessageRequestRestrictedGuilds = require(5922) /* getSanitizedRestrictedGuilds */.getSanitizedMessageRequestRestrictedGuilds();
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp5);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp5);
      }
      const MessageRequestRestrictedGuildIds = require(3958) /* explicitContentFromProto */.MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
      const obj4 = require(5922) /* getSanitizedRestrictedGuilds */;
      const tmp6 = require;
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default createToggle;
export { showMessageRequestRestrictionModal };