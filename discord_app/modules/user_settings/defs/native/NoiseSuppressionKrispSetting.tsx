// discord_app/modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import UserSettingsVoiceUtils from "../../voice/native/UserSettingsVoiceUtils.tsx";
import NoiseCancellationUtils from "../../../noise_cancellation/NoiseCancellationUtils.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
fn(558);
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(13);
      const noiseCancellationDeferredToSystem = NoiseCancellationUtils.useNoiseCancellationDeferredToSystem();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.rdoNzt);
        cResult[0] = stringResult;
        let first = stringResult;
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
        let tmp7 = obj3;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.qXeYHw);
        cResult[3] = stringResult1;
        let tmp8 = stringResult1;
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
        let tmp10 = obj4;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t.wkYAlz);
        cResult[6] = stringResult2;
        let tmp11 = stringResult2;
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
        let tmp13 = obj5;
      } else {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp7) {
        if (cResult[10] === tmp10) {
          if (cResult[11] === tmp13) {
            let tmp14 = cResult[12];
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
      const noiseCancellationDeferredToSystem = NoiseCancellationUtils.useNoiseCancellationDeferredToSystem();
      const obj2 = { value: UserSettingsVoiceUtils.NoiseSuppressionOpt.KRISP, label: null, disabled: null };
      const intl = util.intl;
      obj2.label = intl.string(util.t.rdoNzt);
      obj2.disabled = noiseCancellationDeferredToSystem;
      const items = [obj2, ,];
      const obj3 = {
        value: UserSettingsVoiceUtils.NoiseSuppressionOpt.STANDARD,
        disabled: noiseCancellationDeferredToSystem,
        label: null,
      };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.qXeYHw);
      items[1] = obj3;
      const obj4 = {
        value: UserSettingsVoiceUtils.NoiseSuppressionOpt.NONE,
        disabled: noiseCancellationDeferredToSystem,
        label: null,
      };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.wkYAlz);
      items[2] = obj4;
      return items;
    };
const SettingBuilders = fn(11142);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
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
      return initialize.useStateFromStores(tmp4, tmp5);
    }
  : () => {
      const items = [MediaEngineStore];
      return initialize.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
    };
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.t8Qhib);
  },
  parent: fn(7645).MobileUserSettings.VOICE,
  useValue() {
    return UserSettingsVoiceUtils.useSelectedNoiseSuppressionOption();
  },
  onValueChange: function onNoiseSuppressionKrispValueSettingChange(arg0) {
    const result = UserSettingsVoiceUtils.handleNoiseSuppressionChange(arg0);
  },
  useOptions: tmp2,
  usePredicate: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(2);
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
        return initialize.useStateFromStores(tmp4, tmp5);
      }
    : () => {
        const items = [MediaEngineStore];
        return initialize.useStateFromStores(items, () => noiseCancellationSupported.isNoiseCancellationSupported());
      },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.hmfkCi)];
    return items;
  },
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/defs/native/NoiseSuppressionKrispSetting.tsx");

export default radio;
