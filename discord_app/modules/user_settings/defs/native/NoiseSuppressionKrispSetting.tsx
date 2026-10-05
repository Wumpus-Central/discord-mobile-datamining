// discord_app/modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import UserSettingsVoiceUtils from "../../voice/native/UserSettingsVoiceUtils.tsx";
import NoiseCancellationUtils from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp10;
      let tmp11;
      let tmp13;
      let tmp7;
      let tmp8;
      const obj = react;
      const cResult = obj.c(13);
      const obj2 = NoiseCancellationUtils;
      const noiseCancellationDeferredToSystem = obj2.useNoiseCancellationDeferredToSystem();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.rdoNzt);
        cResult[0] = stringResult;
        first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== noiseCancellationDeferredToSystem) {
        const obj3 = {
          value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP,
          label: first,
          disabled: noiseCancellationDeferredToSystem,
        };
        cResult[1] = noiseCancellationDeferredToSystem;
        cResult[2] = obj3;
        tmp7 = obj3;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult1 = intl2.string(intl4.t.qXeYHw);
        cResult[3] = stringResult1;
        tmp8 = stringResult1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== noiseCancellationDeferredToSystem) {
        const obj4 = {
          value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
          disabled: noiseCancellationDeferredToSystem,
          label: tmp8,
        };
        cResult[4] = noiseCancellationDeferredToSystem;
        cResult[5] = obj4;
        tmp10 = obj4;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult2 = intl3.string(intl4.t.wkYAlz);
        cResult[6] = stringResult2;
        tmp11 = stringResult2;
      } else {
        tmp11 = cResult[6];
      }
      if (cResult[7] !== noiseCancellationDeferredToSystem) {
        const obj5 = {
          value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE,
          disabled: noiseCancellationDeferredToSystem,
          label: tmp11,
        };
        cResult[7] = noiseCancellationDeferredToSystem;
        cResult[8] = obj5;
        tmp13 = obj5;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp10) {
          let tmp14;
          if (cResult[11] === tmp13) {
            tmp14 = cResult[12];
          }
          return tmp14;
        }
      }
      const items = [tmp7, tmp10, tmp13];
      cResult[9] = tmp7;
      cResult[10] = tmp10;
      cResult[11] = tmp13;
      cResult[12] = items;
      tmp14 = items;
    }
  : () => {
      let intl;
      let intl2;
      let intl3;
      const obj = NoiseCancellationUtils;
      const noiseCancellationDeferredToSystem = obj.useNoiseCancellationDeferredToSystem();
      const obj2 = {
        value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP,
        label: intl.string(intl4.t.rdoNzt),
        disabled: noiseCancellationDeferredToSystem,
      };
      intl = intl4.intl;
      const items = [obj2, ,];
      const obj3 = {
        value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
        disabled: noiseCancellationDeferredToSystem,
        label: intl2.string(intl4.t.qXeYHw),
      };
      intl2 = intl4.intl;
      items[1] = obj3;
      const obj4 = {
        value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE,
        disabled: noiseCancellationDeferredToSystem,
        label: intl3.string(intl4.t.wkYAlz),
      };
      intl3 = intl4.intl;
      items[2] = obj4;
      return items;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let noiseCancellationSupported;
      let tmp4;
      let tmp5;
      const obj = react;
      const cResult = obj.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function n() {
          return noiseCancellationSupported.isNoiseCancellationSupported();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      return tmpResult.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      let noiseCancellationSupported;
      const items = [MediaEngineStore];
      const obj = get_initialized;
      return obj.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
    };
let obj = {
  useTitle() {
    const intl = intl4.intl;
    return intl.string(intl4.t.t8Qhib);
  },
  parent: MobileUserSettings.VOICE,
  useValue() {
    const obj = UserSettingsVoiceUtils;
    return obj.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const obj = UserSettingsVoiceUtils;
    const result = obj.handleNoiseSuppressionChange(arg0);
  },
  useOptions: tmp2,
  usePredicate: tmp3,
  useSearchTerms() {
    const intl = intl4.intl;
    const items = [intl.string(intl4.t.hmfkCi)];
    return items;
  },
};
const radio = SettingBuilders.createRadio(obj);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default radio;
