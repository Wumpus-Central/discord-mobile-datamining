// === Module 15788: SafetyGuildSettingMessageRequests ===

// Module 15788 (SafetyGuildSettingMessageRequests)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import common_AlertDefault from "common/Alert" /* 5783 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import AgeVerificationActionCreatorsDefault from "AgeVerificationActionCreators" /* 8084 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8086 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14625 */;
import DefultGuildsRestrictedSetting from "DefultGuildsRestrictedSetting" /* 15781 */;
import useShouldDisableMessageRequestSettings from "useShouldDisableMessageRequestSettings" /* 15789 */;
import DefaultDMSettingsExperiment from "DefaultDMSettingsExperiment" /* 15790 */;
import GuildStore from "GuildStore" /* 2074 */;

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
const UserSettingsSafetySelectedGuildStore = fn(15778);
({ getSelectedGuildId: closure_4, useUserSafetySettingsSelectedGuildStore: hasOwnProperty } = UserSettingsSafetySelectedGuildStore);
let closure_6 = fn(11130).GUILD_SELECT_ALL_SERVERS_OPTION_ID;
fn(558);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const defaultGuildsRestricted = DefultGuildsRestrictedSetting.useDefaultGuildsRestricted();
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const RestrictedGuildIds = UserSettings.RestrictedGuildIds;
  const setting = RestrictedGuildIds.useSetting();
  if (cResult[0] === selectedGuildId) {
    if (cResult[1] === setting) {
      let tmp5 = cResult[2];
    }
    const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
    const tmpResult = useParentalControlSettings;
    let shouldDisableMessageRequestSettings = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
    if (!shouldDisableMessageRequestSettings) {
      let tmp10 = selectedGuildId !== closure_6;
      if (!tmp10) {
        tmp10 = !isParentallyControlled;
      }
      let tmp11 = !tmp10;
      if (tmp10) {
        if (selectedGuildId === closure_6) {
          tmp5 = defaultGuildsRestricted;
        }
        tmp11 = tmp5;
      }
      shouldDisableMessageRequestSettings = tmp11;
    }
    return shouldDisableMessageRequestSettings;
  }
  const hasItem = setting.includes(selectedGuildId);
  cResult[0] = selectedGuildId;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp5 = hasItem;
}) : (() => {
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
});
let closure_8 = tmp4;
const SettingBuilders = fn(11129);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const tmp2 = closure_8();
  const shouldDisableMessageRequestSettings = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
  const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
  const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
  let tmp5 = !MessageRequestRestrictedDefault.useSetting();
  const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  if (cResult[0] === selectedGuildId) {
    if (cResult[1] === setting) {
      let tmp6 = cResult[2];
    }
    let tmp8 = shouldDisableMessageRequestSettings;
    if (!tmp8) {
      if (selectedGuildId !== closure_6) {
        let tmp12 = !tmp2;
        if (!tmp2) {
          if (!tmp10) {
            tmp5 = !tmp6;
          }
          tmp12 = tmp5;
        }
        let tmp11 = tmp12;
      } else {
        tmp11 = tmp5;
      }
      tmp8 = tmp11;
    }
    return tmp8;
  }
  const hasItem = setting.includes(selectedGuildId);
  cResult[0] = selectedGuildId;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp6 = hasItem;
}) : (() => {
  const selectedGuildId = hasOwnProperty().selectedGuildId;
  const tmp = closure_8();
  const shouldDisableMessageRequestSettings = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
  const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
  const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
  const tmp4 = !MessageRequestRestrictedDefault.useSetting();
  const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  let tmp5 = !setting.includes(selectedGuildId);
  let tmp6 = shouldDisableMessageRequestSettings;
  if (!tmp6) {
    if (selectedGuildId !== closure_6) {
      let tmp10 = !tmp;
      if (!tmp) {
        if (tmp8) {
          tmp5 = tmp4;
        }
        tmp10 = tmp5;
      }
      let tmp9 = tmp10;
    } else {
      tmp9 = tmp4;
    }
    tmp6 = tmp9;
  }
  return tmp6;
});
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["3o2ojh"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.o5fjz6);
  },
  parent: fn(7634).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue: ReactCompilerGating.isReactCompilerEnabled() ? (() => {
    const cResult = c.c(3);
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const tmp2 = closure_8();
    const shouldDisableMessageRequestSettings = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
    const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    let tmp5 = !MessageRequestRestrictedDefault.useSetting();
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    const setting = MessageRequestRestrictedGuildIds.useSetting();
    if (cResult[0] === selectedGuildId) {
      if (cResult[1] === setting) {
        let tmp6 = cResult[2];
      }
      let tmp8 = shouldDisableMessageRequestSettings;
      if (!tmp8) {
        if (selectedGuildId !== closure_6) {
          let tmp12 = !tmp2;
          if (!tmp2) {
            if (!tmp10) {
              tmp5 = !tmp6;
            }
            tmp12 = tmp5;
          }
          let tmp11 = tmp12;
        } else {
          tmp11 = tmp5;
        }
        tmp8 = tmp11;
      }
      return tmp8;
    }
    const hasItem = setting.includes(selectedGuildId);
    cResult[0] = selectedGuildId;
    cResult[1] = setting;
    cResult[2] = hasItem;
    tmp6 = hasItem;
  }) : (() => {
    const selectedGuildId = hasOwnProperty().selectedGuildId;
    const tmp = closure_8();
    const shouldDisableMessageRequestSettings = useShouldDisableMessageRequestSettings.useShouldDisableMessageRequestSettings();
    const isParentallyControlled = useParentalControlSettings.useIsParentallyControlled();
    const MessageRequestRestrictedDefault = UserSettings.MessageRequestRestrictedDefault;
    const tmp4 = !MessageRequestRestrictedDefault.useSetting();
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    const setting = MessageRequestRestrictedGuildIds.useSetting();
    let tmp5 = !setting.includes(selectedGuildId);
    let tmp6 = shouldDisableMessageRequestSettings;
    if (!tmp6) {
      if (selectedGuildId !== closure_6) {
        let tmp10 = !tmp;
        if (!tmp) {
          if (tmp8) {
            tmp5 = tmp4;
          }
          tmp10 = tmp5;
        }
        let tmp9 = tmp10;
      } else {
        tmp9 = tmp4;
      }
      tmp6 = tmp9;
    }
    return tmp6;
  }),
  useIsDisabled: tmp4,
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