// discord_app/modules/calls/useHideSelfVideo.tsx
import AudioActionCreatorsDefault from "../../actions/AudioActionCreators.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import MediaEngineStore from "../../stores/MediaEngineStore.tsx";

const require = fn;
const VideoToggleState = fn(1085).VideoToggleState;
const Constants = fn(5115);
({ MediaEngineContextTypes: metroRequire, Features: closure_7 } = Constants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useHideSelfVideo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useHideSelfVideo(arg0, arg1) {
      let DEFAULT = arg1;
      const cResult = DEFAULT(576).c(16);
      if (undefined === arg1) {
        DEFAULT = constants.DEFAULT;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function f() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = DEFAULT(576);
      const stateFromStores = DEFAULT(504).useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MediaEngineStore];
        const fn2 = function _() {
          return MediaEngineStore.supports(constants.DISABLE_VIDEO);
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp10 = fn2;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = DEFAULT(504);
      const stateFromStores1 = DEFAULT(504).useStateFromStores(tmp9, tmp10);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [MediaEngineStore];
        cResult[4] = items2;
        let tmp13 = items2;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === stateFromStores) {
        if (cResult[6] === DEFAULT) {
          let tmp15 = cResult[7];
          let tmp16 = cResult[8];
        }
        const stateFromStores2 = tmp(504).useStateFromStores(tmp13, tmp15, tmp16);
        if (cResult[9] === stateFromStores) {
          if (cResult[10] === DEFAULT) {
            let tmp18 = cResult[11];
          }
          if (cResult[12] === tmp18) {
            if (cResult[13] === stateFromStores2) {
              if (cResult[14] === tmp21) {
                let tmp22 = cResult[15];
              }
              return tmp22;
            }
          }
          const items3 = [(null == arg0 || arg0 === stateFromStores) && stateFromStores1, stateFromStores2, tmp18];
          cResult[12] = tmp18;
          cResult[13] = stateFromStores2;
          cResult[14] = (null == arg0 || arg0 === stateFromStores) && stateFromStores1;
          cResult[15] = items3;
          tmp22 = items3;
        }
        function handleToggleSelfVideoHidden(arg0) {
          AudioActionCreatorsDefault.setDisableLocalVideo(
            stateFromStores,
            arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED,
            DEFAULT,
          );
          const tmp2 = arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED;
        }
        cResult[9] = stateFromStores;
        cResult[10] = DEFAULT;
        cResult[11] = handleToggleSelfVideoHidden;
        tmp18 = handleToggleSelfVideoHidden;
        const tmpResult4 = tmp(504);
      }
      const fn3 = function v() {
        return MediaEngineStore.isLocalVideoDisabled(stateFromStores, DEFAULT);
      };
      const items4 = [stateFromStores, DEFAULT];
      cResult[5] = stateFromStores;
      cResult[6] = DEFAULT;
      cResult[7] = fn3;
      cResult[8] = items4;
      tmp16 = items4;
      tmp15 = fn3;
      const tmpResult3 = DEFAULT(504);
    }
  : function useHideSelfVideo(arg0) {
      let DEFAULT = arg1;
      if (arg1 === undefined) {
        DEFAULT = constants.DEFAULT;
      }
      const items = [AuthenticationStore];
      const stateFromStores = DEFAULT(504).useStateFromStores(items, () => id.getId());
      let obj = DEFAULT(504);
      const items1 = [MediaEngineStore];
      const stateFromStores1 = DEFAULT(504).useStateFromStores(items1, () =>
        MediaEngineStore.supports(constants.DISABLE_VIDEO),
      );
      const obj2 = DEFAULT(504);
      const items2 = [MediaEngineStore];
      const items3 = [stateFromStores, DEFAULT];
      let tmp5 = null == arg0;
      const stateFromStores2 = DEFAULT(504).useStateFromStores(
        items2,
        () => MediaEngineStore.isLocalVideoDisabled(stateFromStores, DEFAULT),
        items3,
      );
      if (!tmp5) {
        tmp5 = arg0 === stateFromStores;
      }
      if (tmp5) {
        tmp5 = stateFromStores1;
      }
      const items4 = [
        tmp5,
        stateFromStores2,
        function handleToggleSelfVideoHidden(arg0) {
          AudioActionCreatorsDefault.setDisableLocalVideo(
            stateFromStores,
            arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED,
            DEFAULT,
          );
          const tmp2 = arg0 ? VideoToggleState.DISABLED : VideoToggleState.MANUAL_ENABLED;
        },
      ];
      return items4;
    };
