// discord_app/modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import setDefault from "../../../../actions/AlertActionCreators.tsx";
import componentDidMountDefault from "../../../../components_native/common/Alert.tsx";
import getSanitizedRestrictedGuilds from "../../../../utils/UserSettingsUtils.tsx";
import openIncodeAgeVerificationModalDefault from "../../../age_assurance/AgeVerificationActionCreators.native.tsx";
import AgeVerificationModalEntryPoint from "../../../age_assurance/AgeVerificationAnalyticsUtils.tsx";
import useParentalControlledExplicitContentSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import useDefaultGuildsRestricted from "../../privacy_and_safety/DefultGuildsRestrictedSetting.tsx";
import shouldAgeVerifyForDMDefaultOff from "../../content_and_social/DefaultDMSettingsExperiment.tsx";
import closure_3 from "../../../../stores/GuildStore.tsx";
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "../../privacy_and_safety/UserSettingsSafetySelectedGuildStore.tsx";
import { GUILD_SELECT_ALL_SERVERS_OPTION_ID as closure_6 } from "../../../settings/native/renderer/SettingRendererConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
function showMessageRequestRestrictionModal(arg0) {
  const _require = arg0;
  let obj = setDefault;
  obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null, onCancel: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../../intl/index.native.tsx").t.yAfu1p);
  const intl2 = require("../../../../intl/index.native.tsx").intl;
  obj[1] = intl2.string(require("../../../../intl/index.native.tsx").t.Ry2z74);
  const intl3 = require("../../../../intl/index.native.tsx").intl;
  obj[2] = intl3.string(require("../../../../intl/index.native.tsx").t.p89ACt);
  const intl4 = require("../../../../intl/index.native.tsx").intl;
  obj[3] = intl4.string(require("../../../../intl/index.native.tsx").t.gm1Vej);
  obj[4] = componentDidMountDefault.Colors.RED;
  obj[5] = function onConfirm() {
    const MessageRequestRestrictedDefault = callback(closure_1_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(callback);
    const MessageRequestRestrictedGuildIds = callback(closure_1_2[4]).MessageRequestRestrictedGuildIds;
    if (callback) {
      let guildIds = closure_1_3.getGuildIds();
    } else {
      guildIds = [];
    }
    MessageRequestRestrictedGuildIds.updateSetting(guildIds);
  };
  obj[6] = function onCancel() {
    const MessageRequestRestrictedDefault = callback(closure_1_2[4]).MessageRequestRestrictedDefault;
    MessageRequestRestrictedDefault.updateSetting(callback);
  };
  obj.show(obj);
}
({ getSelectedGuildId: c4, useUserSafetySettingsSelectedGuildStore: c5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3o2ojh"]);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.o5fjz6);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useValue() {
    const selectedGuildId = callback2().selectedGuildId;
    const defaultGuildsRestricted = useDefaultGuildsRestricted.useDefaultGuildsRestricted();
    const selectedGuildId2 = callback2().selectedGuildId;
    const RestrictedGuildIds = explicitContentFromProto.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId2);
    const obj = useDefaultGuildsRestricted;
    const tmp6 = selectedGuildId2 !== closure_6 || !useParentalControlledExplicitContentSettings.useIsParentallyControlled();
    let tmp7 = !tmp6;
    if (tmp6) {
      if (selectedGuildId2 === tmp5) {
        hasItem = defaultGuildsRestricted;
      }
      tmp7 = hasItem;
    }
    const MessageRequestRestrictedDefault = tmp(4134).MessageRequestRestrictedDefault;
    const obj3 = useParentalControlledExplicitContentSettings;
    const MessageRequestRestrictedGuildIds = tmp(4134).MessageRequestRestrictedGuildIds;
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
    const defaultGuildsRestricted = useDefaultGuildsRestricted.useDefaultGuildsRestricted();
    const selectedGuildId = callback2().selectedGuildId;
    const RestrictedGuildIds = explicitContentFromProto.RestrictedGuildIds;
    const setting = RestrictedGuildIds.useSetting();
    let hasItem = setting.includes(selectedGuildId);
    const obj = useDefaultGuildsRestricted;
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
      let obj = shouldAgeVerifyForDMDefaultOff;
      if (obj.shouldAgeVerifyForDMDefaultOff()) {
        obj = { entryPoint: null };
        obj[0] = AgeVerificationModalEntryPoint.AgeVerificationModalEntryPoint.MESSAGE_REQUESTS_SETTINGS;
        const result = openIncodeAgeVerificationModalDefault.showAgeVerificationGetStartedModal(obj);
        const obj2 = openIncodeAgeVerificationModalDefault;
      }
    }
    const tmp5 = callback();
    if (tmp5 === closure_6) {
      showMessageRequestRestrictionModal(!arg0);
    } else {
      const sanitizedMessageRequestRestrictedGuilds = getSanitizedRestrictedGuilds.getSanitizedMessageRequestRestrictedGuilds();
      if (arg0) {
        sanitizedMessageRequestRestrictedGuilds.delete(tmp5);
      } else {
        sanitizedMessageRequestRestrictedGuilds.add(tmp5);
      }
      const MessageRequestRestrictedGuildIds = explicitContentFromProto.MessageRequestRestrictedGuildIds;
      const _Array = Array;
      MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
      const obj4 = getSanitizedRestrictedGuilds;
      const tmp6 = require;
    }
  }
};
createToggle = createToggle.createToggle(createToggle);
let result = require("set").fileFinishedImporting("modules/user_settings/defs/native/SafetyGuildSettingMessageRequests.tsx");

export default createToggle;
export { showMessageRequestRestrictionModal };