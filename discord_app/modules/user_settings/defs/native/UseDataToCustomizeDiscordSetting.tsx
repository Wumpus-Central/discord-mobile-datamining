// === Module 16036: UseDataToCustomizeDiscordSetting ===

// Module 16036 (UseDataToCustomizeDiscordSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1112 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5741 */;
import common_AlertDefault from "common/Alert" /* 5813 */;
import useParentalControlSettings from "useParentalControlSettings" /* 15995 */;
import ConsentActionCreators from "ConsentActionCreators" /* 16034 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 16035 */;
import ConsentStore from "ConsentStore" /* 6308 */;

require = fn;
const Consents = fn(1071).Consents;
const SettingBuilders = fn(11817);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(8592).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    items = [ConsentStore];
    return initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      items = [Consents.PERSONALIZATION];
      ConsentActionCreators.setConsents(items, []).catch((error) => showDataPrivacyRateLimitAlert.showDataPrivacyRateLimitAlert(error.message));
      const setConsentsResult = ConsentActionCreators.setConsents(items, []);
    } else {
      const obj2 = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
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
        items = [constants.PERSONALIZATION];
        return ConsentActionCreators.setConsents([], items);
      };
      AlertActionCreatorsDefault.show(obj2);
    }
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default toggle;