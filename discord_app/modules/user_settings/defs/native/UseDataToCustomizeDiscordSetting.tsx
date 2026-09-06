// === Module 14857: UseDataToCustomizeDiscordSetting ===

// Module 14857 (UseDataToCustomizeDiscordSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import useParentalControlSettings from "useParentalControlSettings" /* 14824 */;
import ConsentActionCreators from "ConsentActionCreators" /* 14855 */;
import showDataPrivacyRateLimitAlert from "showDataPrivacyRateLimitAlert" /* 14856 */;
import ConsentStore from "ConsentStore" /* 6595 */;

require = fn;
const Consents = fn(1074).Consents;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.MNKzyg);
  },
  parent: fn(7975).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToCustomizeDiscordSettingValue() {
    const items = [ConsentStore];
    return initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.PERSONALIZATION));
  },
  onValueChange: function handlePersonalizationChange(arg0) {
    if (arg0) {
      let items = [Consents.PERSONALIZATION];
      ConsentActionCreators.setConsents(items, []).catch((error) => showDataPrivacyRateLimitAlert.showDataPrivacyRateLimitAlert(error.message));
      const setConsentsResult = ConsentActionCreators.setConsents(items, []);
    } else {
      const obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = util.intl;
      obj.title = intl.string(util.t["9SNpzv"]);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t.gJvDDh);
      const intl3 = util.intl;
      obj.confirmText = intl3.string(util.t["9g5UGw"]);
      const intl4 = util.intl;
      obj.cancelText = intl4.string(util.t["+ZLPw9"]);
      obj.confirmColor = common_AlertDefault.Colors.RED;
      obj.onConfirm = function onConfirm() {
        const items = [constants.PERSONALIZATION];
        return ConsentActionCreators.setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  }
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToCustomizeDiscordSetting.tsx");

export default SettingBuilders;