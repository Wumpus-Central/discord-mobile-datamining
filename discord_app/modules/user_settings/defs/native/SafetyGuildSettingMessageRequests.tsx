// === Module 16290: SafetyGuildSettingMessageRequests ===

// Module 16290 (SafetyGuildSettingMessageRequests)
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2020 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5195 */;
import common_AlertDefault from "common/Alert" /* 5292 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7328 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8761 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8763 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15163 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 16283 */;
import useShouldDisableMessageRequestSettings from "useShouldDisableMessageRequestSettings" /* 16291 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 16292 */;
import GuildStore from "GuildStore" /* 2066 */;

require = fn;
function showMessageRequestRestrictionModal(arg0) {
  _require = arg0;
  const obj2 = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null, isDismissable: false };
  const intl = require("util").intl;
  obj2.title = intl.string(require("util").t.yAfu1p);
  const intl2 = require("util").intl;
  obj2.body = intl2.string(require("util").t.Ry2z74);
  const intl3 = require("util").intl;
  obj2.confirmText = intl3.string(require("util").t.p89ACt);
  const intl4 = require("util").intl;
  obj2.cancelText = intl4.string(require("util").t.gm1Vej);
  obj2.confirmColor = common_AlertDefault.Colors.RED;
  obj2.onConfirm = function onConfirm() {
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
  obj2.onCancel = function onCancel() {
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(closure_0);
  };
  AlertActionCreatorsDefault.show(obj2);
}
const UserSettingsSafetySelectedGuildStore = fn(16280);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } = UserSettingsSafetySelectedGuildStore);
let closure_6 = fn(11812).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
const SettingBuilders = fn(11811);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.o5fjz6);
  },
  parent: fn(8323).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const defaultGuildsRestricted = DefultGuildsRestrictedSetting.useDefaultGuildsRestricted();
    const selectedGuildId2 = hasOwnProperty().selectedGuildId;
    const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId2);
    const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
    let shouldDisableMessageRequestSettings1 = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
    if (!shouldDisableMessageRequestSettings1) {
      let tmp8 = selectedGuildId2 !== closure_6;
      if (!tmp8) {
        tmp8 = !isParentallyControlled;
      }
      let tmp9 = !tmp8;
      if (tmp8) {
        if (selectedGuildId2 === closure_6) {
          hasItem = defaultGuildsRestricted;
        }
        tmp9 = hasItem;
      }
      shouldDisableMessageRequestSettings1 = tmp9;
    }
    const shouldDisableMessageRequestSettings = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
    const tmpResult = useShouldDisableMessageRequestSettings;
    const isParentallyControlled1 = useParentalControlSettings.useIsParentallyControlled();
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    const tmp12 = !MessageRequestRestrictedDefault.useSetting();
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    const setting1 = MessageRequestRestrictedGuildIds.useSetting();
    let tmp13 = !setting1.includes(selectedGuildId);
    let tmp14 = shouldDisableMessageRequestSettings;
    if (!tmp14) {
      if (selectedGuildId !== closure_6) {
        let tmp18 = !shouldDisableMessageRequestSettings1;
        if (!shouldDisableMessageRequestSettings1) {
          if (tmp16) {
            tmp13 = tmp12;
          }
          tmp18 = tmp13;
        }
        let tmp17 = tmp18;
      } else {
        tmp17 = tmp12;
      }
      tmp14 = tmp17;
    }
    return tmp14;
  },
  useIsDisabled() {
    const defaultGuildsRestricted = DefultGuildsRestrictedSetting.useDefaultGuildsRestricted();
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId);
    const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
    let shouldDisableMessageRequestSettings = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
    if (!shouldDisableMessageRequestSettings) {
      let tmp6 = selectedGuildId !== closure_6;
      if (!tmp6) {
        tmp6 = !isParentallyControlled;
      }
      let tmp7 = !tmp6;
      if (tmp6) {
        if (selectedGuildId === closure_6) {
          hasItem = defaultGuildsRestricted;
        }
        tmp7 = hasItem;
      }
      shouldDisableMessageRequestSettings = tmp7;
    }
    return shouldDisableMessageRequestSettings;
  },
  onValueChange: function onAllowMessageRequestsFromServerMembersValueChange(arg0) {
    if (!arg0) {
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        const obj3 = { entryPoint: AgeVerificationAnalyticsUtils.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS };
        const result = AgeVerificationActionCreatorsDefault.showAgeVerificationGetStartedModal(obj3);
      }
      obj = DefaultDMSettingsExperiment;
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default toggle;
export { showMessageRequestRestrictionModal };