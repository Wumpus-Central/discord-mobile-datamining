// discord_app/modules/user_settings/defs/native/VoiceSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const Constants = fn(1085);
({ InputModes: c3, UserSettingsSections } = Constants);
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(11142);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Q8gkVL = dependencyMap;
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function o() {
          return mode.getMode();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp3 = items;
        tmp4 = fn;
      } else {
        [tmp3, tmp4] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
      if (cResult[2] !== stateFromStores) {
        if (stateFromStores === constants.PUSH_TO_TALK) {
          const intl2 = util.intl;
          Q8gkVL = util.t.Q8gkVL;
          let stringResult = intl2.string(Q8gkVL);
        } else {
          const intl = util.intl;
          stringResult = intl.string(util.t.cHCEOJ);
        }
        cResult[2] = stateFromStores;
        cResult[3] = stringResult;
      } else {
        return cResult[3];
      }
      const tmpResult = initialize;
    }
  : () => {
      const items = [MediaEngineStore];
      if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.Q8gkVL);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.cHCEOJ);
      }
      return stringResult;
    };
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.B1fFpf);
  },
  parent: null,
  IconComponent: fn(9702).MicrophoneIcon,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let Q8gkVL = dependencyMap;
        const cResult = c.c(4);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [MediaEngineStore];
          const fn = function o() {
            return mode.getMode();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp3 = items;
          tmp4 = fn;
        } else {
          [tmp3, tmp4] = cResult;
        }
        const stateFromStores = initialize.useStateFromStores(tmp3, tmp4);
        if (cResult[2] !== stateFromStores) {
          if (stateFromStores === constants.PUSH_TO_TALK) {
            const intl2 = util.intl;
            Q8gkVL = util.t.Q8gkVL;
            let stringResult = intl2.string(Q8gkVL);
          } else {
            const intl = util.intl;
            stringResult = intl.string(util.t.cHCEOJ);
          }
          cResult[2] = stateFromStores;
          cResult[3] = stringResult;
        } else {
          return cResult[3];
        }
        const tmpResult = initialize;
      }
    : () => {
        const items = [MediaEngineStore];
        if (obj.useStateFromStores(items, () => mode.getMode()) === constants.PUSH_TO_TALK) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.Q8gkVL);
        } else {
          const intl = util.intl;
          stringResult = intl.string(util.t.cHCEOJ);
        }
        return stringResult;
      },
  screen: {
    route: UserSettingsSections.VOICE,
    getComponent() {
      return require("SettingsVoiceScreen").default;
    },
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSetting.tsx");

export default route;
