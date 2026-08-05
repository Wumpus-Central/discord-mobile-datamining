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
  let obj = require("../../../../actions/AlertActionCreators.tsx");
  obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null };
  const intl = _require("../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(_require("../../../../intl/index.native.tsx").t.yAfu1p);
  const intl2 = _require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(_require("../../../../intl/index.native.tsx").t.Ry2z74);
  const intl3 = _require("../../../../intl/index.native.tsx").intl;
  obj[2] = intl3.string(_require("../../../../intl/index.native.tsx").t.p89ACt);
  const intl4 = _require("../../../../intl/index.native.tsx").intl;
  obj[3] = intl4.string(_require("../../../../intl/index.native.tsx").t.gm1Vej);
  obj[4] = require("../../../../components_native/common/Alert.tsx").Colors.RED;
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
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["3o2ojh"]);
  },
  useDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.o5fjz6);
  },
  parent: require("MobileSetting").MobileSetting.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const defaultGuildsRestricted = require("../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx") /* useDefaultGuildsRestricted */.useDefaultGuildsRestricted();
    const selectedGuildId2 = callback2().selectedGuildId;
    const RestrictedGuildIds = require("../../UserSettings.tsx") /* explicitContentFromProto */.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId2);
    const obj = require("../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx") /* useDefaultGuildsRestricted */;
    const tmp6 = selectedGuildId2 !== closure_6 || !require("../../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */.useIsParentallyControlled();
    let tmp7 = !tmp6;
    if (tmp6) {
      if (selectedGuildId2 === tmp5) {
        hasItem = defaultGuildsRestricted;
      }
      tmp7 = hasItem;
    }
    const MessageRequestRestrictedDefault = tmp(3958).MessageRequestRestrictedDefault;
    const obj3 = require("../../../parent_tools/hooks/useParentalControlSettings.tsx") /* useParentalControlledExplicitContentSettings */;
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
    const defaultGuildsRestricted = require("../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx") /* useDefaultGuildsRestricted */.useDefaultGuildsRestricted();
    const selectedGuildId = callback2().selectedGuildId;
    const RestrictedGuildIds = require("../../UserSettings.tsx") /* explicitContentFromProto */.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId);
    const obj = require("../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx") /* useDefaultGuildsRestricted */;
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
      let obj = require("../../content_and_social/DefaultDMSettingsExperiment.tsx") /* shouldAgeVerifyForDMDefaultOff */;
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        obj = { entryPoint: null };
        obj[0] = require("../../../age_assurance/AgeVerificationAnalyticsUtils.tsx") /* AgeVerificationModalEntryPoint */.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
        const result = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx").showAgeVerificationGetStartedModal(obj);
        const obj2 = require("../../../age_assurance/AgeVerificationActionCreators.native.tsx");
      }
    }
    const tmp5 = callback();
    if (tmp5 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const sanitizedMessageRequestRestrictedGuilds = require("../../../../utils/UserSettingsUtils.tsx") /* getSanitizedRestrictedGuilds */.getSanitizedMessageRequestRestrictedGuilds();
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp5);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp5);
      }
      const MessageRequestRestrictedGuildIds = require("../../UserSettings.tsx") /* explicitContentFromProto */.MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
      const obj4 = require("../../../../utils/UserSettingsUtils.tsx") /* getSanitizedRestrictedGuilds */;
      const tmp6 = require;
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default createToggle;
export { showMessageRequestRestrictionModal };