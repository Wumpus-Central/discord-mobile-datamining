// discord_app/modules/user_settings/defs/native/VoiceSetting.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import intl3 from "../../../../intl/index.native.tsx";
import MicrophoneIcon from "../../../../design/components/Icon/native/redesign/generated/MicrophoneIcon.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let UserSettingsSections;
let c3;
({ InputModes: c3, UserSettingsSections } = Constants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let mode;
      let tmp4;
      let tmp5;
      let tmp8;
      const obj = react;
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function o() {
          return mode.getMode();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        let stringResult;
        if (stateFromStores === constants.PUSH_TO_TALK) {
          const intl2 = intl3.intl;
          stringResult = intl2.string(intl3.t.Q8gkVL);
        } else {
          const intl = intl3.intl;
          stringResult = intl.string(intl3.t.cHCEOJ);
        }
        cResult[2] = stateFromStores;
        cResult[3] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : () => {
      let mode;
      let stringResult;
      const items = [MediaEngineStore];
      const obj = get_initialized;
      if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
        const intl2 = intl3.intl;
        stringResult = intl2.string(intl3.t.Q8gkVL);
      } else {
        const intl = intl3.intl;
        stringResult = intl.string(intl3.t.cHCEOJ);
      }
      return stringResult;
    };
let obj = {
  useTitle() {
    const intl = intl3.intl;
    return intl.string(intl3.t.B1fFpf);
  },
  parent: null,
  IconComponent: MicrophoneIcon.MicrophoneIcon,
  useTrailing: tmp3,
  screen: {
    route: UserSettingsSections.VOICE,
    getComponent() {
      return require("SettingsVoiceScreen").default;
    },
  },
  useSearchTerms() {
    const intl = intl3.intl;
    const items = [intl.string(intl3.t.nuFtHH)];
    return items;
  },
};
const route = SettingBuilders.createRoute(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default route;
