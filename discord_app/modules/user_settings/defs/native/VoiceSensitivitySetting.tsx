// discord_app/modules/user_settings/defs/native/VoiceSensitivitySetting.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import AudioActionCreatorsDefault from "../../../../actions/AudioActionCreators.tsx";
import VoiceSensitivityDefault from "../../../../components_native/common/VoiceSensitivity.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({
      inputMode: MediaEngineStore.getMode(),
      vadThreshold: MediaEngineStore.getModeOptions().threshold,
      vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
    }));
    inputMode = stateFromStoresObject.inputMode;
    const obj2 = {
      style: tmp.slider,
      children: jsx(VoiceSensitivityDefault, {
        auto: vadAutoThreshold,
        threshold: vadThreshold,
        onThresholdChange(threshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
        },
      }),
    };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    return (
      <View style={tmp.slider}>
        {jsx(VoiceSensitivityDefault, {
          auto: vadAutoThreshold,
          threshold: vadThreshold,
          onThresholdChange(threshold) {
            return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
          },
        })}
      </View>
    );
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  },
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
    const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({
      inputMode: MediaEngineStore.getMode(),
      vadThreshold: MediaEngineStore.getModeOptions().threshold,
      vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold,
    }));
    inputMode = stateFromStoresObject.inputMode;
    const obj2 = {
      style: tmp.slider,
      children: jsx(VoiceSensitivityDefault, {
        auto: vadAutoThreshold,
        threshold: vadThreshold,
        onThresholdChange(threshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
        },
      }),
    };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    return (
      <View style={tmp.slider}>
        {jsx(VoiceSensitivityDefault, {
          auto: vadAutoThreshold,
          threshold: vadThreshold,
          onThresholdChange(threshold) {
            return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
          },
        })}
      </View>
    );
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  },
});
