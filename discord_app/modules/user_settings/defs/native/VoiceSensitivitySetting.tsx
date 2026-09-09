// === Module 15282: VoiceSensitivitySetting ===

// Module 15282 (VoiceSensitivitySetting)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 7989 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9121 */;
import VoiceSensitivityDefault from "VoiceSensitivity" /* 10016 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import createStyles from "createStyles" /* 4574 */;
import SettingBuilders from "SettingBuilders" /* 11500 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ slider: { marginTop: 8 } });
let obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sqUm+k"]);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let obj = inputMode(504);
    const items = [MediaEngineStore];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    obj = { style: closure_6().slider, children: null };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        const obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    obj.children = jsx(VoiceSensitivityDefault, {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        const obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    });
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      const obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
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
    let obj = inputMode(504);
    const items = [MediaEngineStore];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    obj = { style: closure_6().slider, children: null };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        const obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    obj.children = jsx(VoiceSensitivityDefault, {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        const obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    });
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      const obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});