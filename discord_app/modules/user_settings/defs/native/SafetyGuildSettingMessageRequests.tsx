// === Module 15878: SafetyGuildSettingMessageRequests ===

// Module 15878 (SafetyGuildSettingMessageRequests)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6995 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8411 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14824 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 15876 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 15879 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
function showMessageRequestRestrictionModal(arg0) {
  _require = arg0;
  const obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.yAfu1p);
  const intl2 = require("util").intl;
  obj.body = intl2.string(require("util").t.Ry2z74);
  const intl3 = require("util").intl;
  obj.confirmText = intl3.string(require("util").t.p89ACt);
  const intl4 = require("util").intl;
  obj.cancelText = intl4.string(require("util").t.gm1Vej);
  obj.confirmColor = common_AlertDefault.Colors.RED;
  obj.onConfirm = function onConfirm() {
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(closure_0);
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    if (closure_0) {
      let guildIds = GuildStore.getGuildIds();
    } else {
      guildIds = [];
    }
    MessageRequestRestrictedGuildIds.updateSetting(guildIds);
  };
  obj.onCancel = function onCancel() {
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(closure_0);
  };
  obj.show(obj);
}
const UserSettingsSafetySelectedGuildStore = fn(15869);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } = UserSettingsSafetySelectedGuildStore);
let closure_6 = fn(11469).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.o5fjz6);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const defaultGuildsRestricted = DefultGuildsRestrictedSetting.useDefaultGuildsRestricted();
    const selectedGuildId2 = hasOwnProperty().selectedGuildId;
    const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId2);
    const tmp6 = selectedGuildId2 !== closure_6 || !useParentalControlSettings.useIsParentallyControlled();
    let tmp7 = !tmp6;
    if (tmp6) {
      if (selectedGuildId2 === closure_6) {
        hasItem = defaultGuildsRestricted;
      }
      tmp7 = hasItem;
    }
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    const setting1 = MessageRequestRestrictedGuildIds.useSetting();
    let tmp9 = !setting1.includes(selectedGuildId);
    let tmp10 = !tmp7;
    if (!tmp7) {
      if (selectedGuildId === closure_6) {
        tmp9 = tmp8;
      }
      tmp10 = tmp9;
    }
    return tmp10;
  },
  useIsDisabled() {
    const defaultGuildsRestricted = DefultGuildsRestrictedSetting.useDefaultGuildsRestricted();
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId);
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
      let obj = DefaultDMSettingsExperiment;
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        obj = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj);
      }
    }
    const tmp5 = React4();
    if (tmp5 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const sanitizedMessageRequestRestrictedGuilds = UserSettingsUtils.getSanitizedMessageRequestRestrictedGuilds();
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp5);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp5);
      }
      const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
    }
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default SettingBuilders;
export { showMessageRequestRestrictionModal };