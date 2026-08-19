// discord_app/modules/user_settings/defs/native/VoiceSensitivitySetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import trackDeviceChangedDefault from "../../../../actions/AudioActionCreators.tsx";
import VoiceSensitivityDefault from "../../../../components_native/common/VoiceSensitivity.tsx";
import _detectH265HardwareDecode from "../../../../stores/MediaEngineStore.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let closure_6 = createCacheKey.createStyles({ slider: { marginTop: 8 } });
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["sqUm+k"]);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let obj = inputMode(589);
    const items = [closure_4];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: store.getMode(), vadThreshold: store.getModeOptions().threshold, vadAutoThreshold: store.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    { style: callback().slider, children: jsx(VoiceSensitivityDefault, obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        const obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      const obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.nuFtHH)];
    return items;
  }
});
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default createStaticResult;