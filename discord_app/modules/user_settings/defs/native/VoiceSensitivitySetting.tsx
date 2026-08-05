// discord_app/modules/user_settings/defs/native/VoiceSensitivitySetting.tsx
import { View } from "get ActivityIndicator";
import _detectH265HardwareDecode from "_detectH265HardwareDecode";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import createToggle from "createToggle";
import { VoiceSensitivity } from "../../../../components_native/common/VoiceSensitivity.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";

let closure_6 = createCacheKey.createStyles({ slider: { marginTop: 8 } });
let obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["sqUm+k"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let vadAutoThreshold;
    let vadThreshold;
    let obj = inputMode(589);
    const items = [_detectH265HardwareDecode];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: store.getMode(), vadThreshold: store.getModeOptions().threshold, vadAutoThreshold: store.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    obj = { style: callback().slider, children: jsx(VoiceSensitivity, obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        let obj = outer1_1(outer1_2[7]);
        obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      let obj = outer1_1(outer1_2[7]);
      obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
  },
  useSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["sqUm+k"]);
  },
  parent: require("MobileSetting").MobileSetting.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    let vadAutoThreshold;
    let vadThreshold;
    let obj = inputMode(589);
    const items = [_detectH265HardwareDecode];
    const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ inputMode: store.getMode(), vadThreshold: store.getModeOptions().threshold, vadAutoThreshold: store.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    obj = { style: callback().slider, children: jsx(VoiceSensitivity, obj) };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    obj = {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        let obj = outer1_1(outer1_2[7]);
        obj = { threshold };
        return obj.setMode(inputMode, obj);
      }
    };
    return <View auto={vadAutoThreshold} threshold={vadThreshold} onThresholdChange={function onThresholdChange(threshold) {
      let obj = outer1_1(outer1_2[7]);
      obj = { threshold };
      return obj.setMode(inputMode, obj);
    }} />;
  },
  useSearchTerms() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    const items = [intl.string(getSystemLocale /* getSystemLocale */.t.nuFtHH)];
    return items;
  }
});
const result = require("MobileSetting").fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default createStaticResult;