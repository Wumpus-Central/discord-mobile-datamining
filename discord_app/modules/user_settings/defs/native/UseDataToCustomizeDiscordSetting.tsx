// discord_app/modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import useParentalControlSettings from "../../../parent_tools/hooks/useParentalControlSettings.tsx";
import ConsentActionCreators from "../../../../actions/ConsentActionCreators.tsx";
import showDataPrivacyRateLimitAlert from "../../privacy_and_safety/native/showDataPrivacyRateLimitAlert.tsx";
import ConsentStore from "../../../../stores/ConsentStore.tsx";

require = fn;
const Consents = fn(1074).Consents;
const SettingBuilders = fn(11714);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8194).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [ConsentStore];
    return initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      let items = [Consents.PERSONALIZATION];
      ConsentActionCreators.setConsents(items, []).catch((error) =>
        showDataPrivacyRateLimitAlert.showDataPrivacyRateLimitAlert(error.message),
      );
      const setConsentsResult = ConsentActionCreators.setConsents(items, []);
    } else {
      const obj2 = {
        title: null,
        body: null,
        confirmText: null,
        cancelText: null,
        confirmColor: null,
        onConfirm: null,
      };
      const intl = util.intl;
      obj2.title = intl.string(util.t["9SNpzv"]);
      const intl2 = util.intl;
      obj2.body = intl2.string(util.t.gJvDDh);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(util.t["9g5UGw"]);
      const intl4 = util.intl;
      obj2.cancelText = intl4.string(util.t["+ZLPw9"]);
      obj2.confirmColor = common_AlertDefault.Colors.RED;
      obj2.onConfirm = function onConfirm() {
        const items = [constants.PERSONALIZATION];
        return ConsentActionCreators.setConsents([], items);
      };
      AlertActionCreatorsDefault.show(obj2);
    }
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default toggle;
