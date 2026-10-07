// discord_app/modules/voice_panel/native/hooks/useSoundboardConfig.tsx
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel.tsx";
import soundboard_SoundboardActionCreators from "../../../soundboard/native/SoundboardActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import MediaEngineStore from "../../../../stores/MediaEngineStore.tsx";

const require = globalThis.__r;

const canChannelUseSoundboardDefault = tmp4(6888);
require = fn;
const SoundboardButtonLocation = {
  VOICE_CONTROLS: "call control drawer",
  VOICE_PANEL_CONTROLS: "voice panel controls",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, analyticsSource) => {
      _require = arg0;
      importDefault = analyticsSource;
      let obj = require("c");
      const cResult = obj.c(17);
      const tmp5 = useIsConnectedToVoiceChannelDefault(arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MediaEngineStore];
        const fn = function c() {
          return deaf.isDeaf();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp7);
      if (cResult[2] === tmp5) {
        if (cResult[3] === analyticsSource) {
          let tmp10 = cResult[4];
        }
        if (cResult[5] === arg0) {
          if (cResult[6] === analyticsSource) {
            let tmp13 = cResult[7];
          }
          if (cResult[8] !== arg0) {
            const tmp4ResultResult = canChannelUseSoundboardDefault(ChannelStore.getChannel(arg0));
            cResult[8] = arg0;
            cResult[9] = tmp4ResultResult;
            let tmp14 = tmp4ResultResult;
            const tmp4Result = canChannelUseSoundboardDefault;
          } else {
            tmp14 = cResult[9];
          }
          let tmp18 = stateFromStores;
          if (!stateFromStores) {
            tmp18 = !tmp14;
          }
          if (cResult[10] !== stateFromStores) {
            let stringResult;
            if (stateFromStores) {
              const intl = tmp(1126).intl;
              stringResult = intl.string(tmp(1126).t.X1lQli);
            }
            cResult[10] = stateFromStores;
            cResult[11] = stringResult;
            let tmp19 = stringResult;
          } else {
            tmp19 = cResult[11];
          }
          if (cResult[12] === tmp18) {
            if (cResult[13] === tmp19) {
              if (cResult[14] === tmp13) {
                if (cResult[15] === tmp10) {
                  let tmp21 = cResult[16];
                }
                return tmp21;
              }
            }
          }
          let obj2 = { visible: tmp10, handlePress: tmp13, disabled: tmp18, disabledAccessibilityHint: tmp19 };
          cResult[12] = tmp18;
          cResult[13] = tmp19;
          cResult[14] = tmp13;
          cResult[15] = tmp10;
          cResult[16] = obj2;
          tmp21 = obj2;
        }
        const fn2 = function h() {
          const channel = ChannelStore.getChannel(closure_0);
          if (null != channel) {
            const obj2 = { channel, analyticsSource };
            const result = soundboard_SoundboardActionCreators.showSoundboardSoundPickerActionSheet(obj2);
          }
        };
        cResult[5] = arg0;
        cResult[6] = analyticsSource;
        cResult[7] = fn2;
        tmp13 = fn2;
      }
      let tmp11 = tmp5;
      if (tmp5) {
        if (obj.VOICE_CONTROLS === analyticsSource) {
          let flag = true;
        } else {
          flag = false;
        }
        tmp11 = flag;
      }
      cResult[2] = tmp5;
      cResult[3] = analyticsSource;
      cResult[4] = tmp11;
      tmp10 = tmp11;
      const tmpResult = require("initialize");
    }
  : (arg0, analyticsSource) => {
      _require = arg0;
      importDefault = analyticsSource;
      let tmp2 = useIsConnectedToVoiceChannelDefault(arg0);
      let obj = require("initialize");
      const items = [MediaEngineStore];
      const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
      if (tmp2) {
        if (obj.VOICE_CONTROLS === analyticsSource) {
          let flag = true;
        } else {
          flag = false;
        }
        tmp2 = flag;
      }
      const items1 = [arg0, analyticsSource];
      const items2 = [arg0];
      const callback = noop.useCallback(() => {
        const channel = ChannelStore.getChannel(closure_0);
        if (null != channel) {
          const obj2 = { channel, analyticsSource };
          const result = soundboard_SoundboardActionCreators.showSoundboardSoundPickerActionSheet(obj2);
        }
      }, items1);
      let obj2 = { visible: tmp2, handlePress: callback, disabled: null, disabledAccessibilityHint: null };
      let tmp7 = stateFromStores;
      if (!stateFromStores) {
        tmp7 = !noop.useMemo(() => canChannelUseSoundboardDefault(ChannelStore.getChannel(closure_0)), items2);
      }
      obj2.disabled = tmp7;
      let stringResult;
      if (stateFromStores) {
        const intl = tmp3(1126).intl;
        stringResult = intl.string(tmp3(1126).t.X1lQli);
      }
      obj2.disabledAccessibilityHint = stringResult;
      return obj2;
    };
export { SoundboardButtonLocation };
