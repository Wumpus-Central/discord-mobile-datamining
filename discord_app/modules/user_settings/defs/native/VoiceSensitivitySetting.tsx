// === Module 14794: ? ===

// Module 14794
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import MobileUserSettings from "MobileUserSettings" /* 7816 */;
import VoiceSensitivityDefault from "VoiceSensitivity" /* 9987 */;
import closure_4 from "_detectH265HardwareDecode" /* 4496 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import createToggle from "createToggle" /* 10988 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let closure_6 = createCacheKey.createStyles({ slider: { marginTop: 8 } });
let obj = {
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
    obj = { style: callback().slider, children: jsx(VoiceSensitivityDefault, obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        let obj = closure_1_1(closure_1_2[7]);
        obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.nuFtHH)];
    return items;
  }
};
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
    obj = { style: callback().slider, children: jsx(VoiceSensitivityDefault, obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        let obj = closure_1_1(closure_1_2[7]);
        obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      let obj = closure_1_1(closure_1_2[7]);
      obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
  },
  useSearchTerms() {
    const intl = getSystemLocale.intl;
    const items = [intl.string(getSystemLocale.t.nuFtHH)];
    return items;
  }
});
const result = set.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default createStaticResult;