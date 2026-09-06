// discord_app/modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx
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
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.XuADY2);
  },
  parent: fn(7975).MobileUserSettings.DATA_AND_PRIVACY,
  useValue: function useDataToImproveDiscordSettingValue() {
    const items = [ConsentStore];
    return initialize.useStateFromStores(items, () => ConsentStore.hasConsented(constants.USAGE_STATISTICS));
  },
  onValueChange: function handleUsageStatisticsChange(arg0) {
    if (arg0) {
      let items = [Consents.USAGE_STATISTICS];
      ConsentActionCreators.setConsents(items, []).catch((error) =>
        showDataPrivacyRateLimitAlert.showDataPrivacyRateLimitAlert(error.message),
      );
      const setConsentsResult = ConsentActionCreators.setConsents(items, []);
    } else {
      const obj = { title: null, body: null, confirmText: null, cancelText: null, confirmColor: null, onConfirm: null };
      const intl = util.intl;
      obj.title = intl.string(util.t.OdPCbN);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t.MGWabA);
      const intl3 = util.intl;
      obj.confirmText = intl3.string(util.t["D3+rU4"]);
      const intl4 = util.intl;
      obj.cancelText = intl4.string(util.t.kYpG0u);
      obj.confirmColor = common_AlertDefault.Colors.RED;
      obj.onConfirm = function onConfirm() {
        const items = [constants.USAGE_STATISTICS];
        return ConsentActionCreators.setConsents([], items);
      };
      obj.show(obj);
    }
  },
  useIsDisabled() {
    return useParentalControlSettings.useIsParentallyControlled();
  },
};
SettingBuilders = SettingBuilders.createToggle(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/UseDataToImproveDiscordSetting.tsx");

export default SettingBuilders;
