// discord_app/modules/user_settings/defs/native/InputModeSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

require = fn;
const InputModes = fn(5117).InputModes;
const ReactCompilerGating = fn(558);
const SettingBuilders = fn(10663);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useInputModeSettingTrailing() {
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
        if (stateFromStores === InputModes.PUSH_TO_TALK) {
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
  : function useInputModeSettingTrailing() {
      const items = [MediaEngineStore];
      if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.Q8gkVL);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.cHCEOJ);
      }
      return stringResult;
    };
const pressable = SettingBuilders.createPressable({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["pS+K2L"]);
  },
  parent: fn(7992).MobileUserSettings.VOICE,
  useTrailing: ReactCompilerGating.isReactCompilerEnabled()
    ? function useInputModeSettingTrailing() {
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
          if (stateFromStores === InputModes.PUSH_TO_TALK) {
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
    : function useInputModeSettingTrailing() {
        const items = [MediaEngineStore];
        if (obj.useStateFromStores(items, () => mode.getMode()) === InputModes.PUSH_TO_TALK) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.Q8gkVL);
        } else {
          const intl = util.intl;
          stringResult = intl.string(util.t.cHCEOJ);
        }
        return stringResult;
      },
  onPress: fn(11078).handleInputModePress,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/InputModeSetting.tsx");

export default pressable;
