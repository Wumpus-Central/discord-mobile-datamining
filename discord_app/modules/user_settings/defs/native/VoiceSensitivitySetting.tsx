// === Module 15520: VoiceSensitivitySetting ===

// Module 15520 (VoiceSensitivitySetting)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1115 */;
import SettingsConstants from "SettingsConstants" /* 8233 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9911 */;
import VoiceSensitivityDefault from "VoiceSensitivity" /* 10241 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;
import createStyles from "createStyles" /* 4756 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ slider: { marginTop: 8 } });
const obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sqUm+k"]);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    const tmp = closure_6();
    const items = [MediaEngineStore];
    const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({ inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    const obj2 = {
      style: tmp.slider,
      children: jsx(VoiceSensitivityDefault, {
        auto: vadAutoThreshold,
        threshold: vadThreshold,
        onThresholdChange(threshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
        }
      })
    };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    return <View style={tmp.slider}>{jsx(VoiceSensitivityDefault, {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
      }
    })}</View>;
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
};
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sqUm+k"]);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    const tmp = closure_6();
    const items = [MediaEngineStore];
    const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({ inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    const obj2 = {
      style: tmp.slider,
      children: jsx(VoiceSensitivityDefault, {
        auto: vadAutoThreshold,
        threshold: vadThreshold,
        onThresholdChange(threshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
        }
      })
    };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    return <View style={tmp.slider}>{jsx(VoiceSensitivityDefault, {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
      }
    })}</View>;
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});