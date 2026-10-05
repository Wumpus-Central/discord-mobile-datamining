// === Module 17342: useSoundboardConfig ===

// Module 17342 (useSoundboardConfig)
import useIsConnectedToVoiceChannelDefault from "useIsConnectedToVoiceChannel" /* 17190 */;
import soundboard_SoundboardActionCreators from "soundboard/SoundboardActionCreators" /* 17226 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import MediaEngineStore from "MediaEngineStore" /* 1999 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp4;
const canChannelUseSoundboardDefault = tmp4(6878);
const SoundboardButtonLocation = { VOICE_CONTROLS: "call control drawer", VOICE_PANEL_CONTROLS: "voice panel controls" };
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, analyticsSource) => {
  let closure_0;
  let deaf;
  let tmp6;
  let tmp7;
  _require = arg0;
  importDefault = analyticsSource;
  let obj = require("react");
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
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === tmp5) {
    let tmp10;
    if (cResult[3] === analyticsSource) {
      tmp10 = cResult[4];
    }
    if (cResult[5] === arg0) {
      let tmp13;
      let tmp14;
      let tmp19;
      if (cResult[6] === analyticsSource) {
        tmp13 = cResult[7];
      }
      if (cResult[8] !== arg0) {
        const tmp4Result = canChannelUseSoundboardDefault;
        const tmp4ResultResult = tmp4Result(ChannelStore.getChannel(arg0));
        cResult[8] = arg0;
        cResult[9] = tmp4ResultResult;
        tmp14 = tmp4ResultResult;
      } else {
        tmp14 = cResult[9];
      }
      if (cResult[10] !== stateFromStores) {
        let stringResult;
        if (stateFromStores) {
          const intl = tmp(1126).intl;
          stringResult = intl.string(tmp(1126).t.X1lQli);
        }
        cResult[10] = stateFromStores;
        cResult[11] = stringResult;
        tmp19 = stringResult;
      } else {
        tmp19 = cResult[11];
      }
      if (cResult[12] === (stateFromStores || !tmp14)) {
        if (cResult[13] === tmp19) {
          if (cResult[14] === tmp13) {
            let tmp21;
            if (cResult[15] === tmp10) {
              tmp21 = cResult[16];
            }
            return tmp21;
          }
        }
      }
      let obj2 = { visible: tmp10, handlePress: tmp13, disabled: stateFromStores || !tmp14, disabledAccessibilityHint: tmp19 };
      cResult[12] = stateFromStores || !tmp14;
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
        const obj = soundboard_SoundboardActionCreators;
        const result = obj.showSoundboardSoundPickerActionSheet(obj2);
      }
    };
    cResult[5] = arg0;
    cResult[6] = analyticsSource;
    cResult[7] = fn2;
    tmp13 = fn2;
  }
  let tmp11 = tmp5;
  if (tmp11) {
    let flag;
    if (obj.VOICE_CONTROLS === analyticsSource) {
      flag = true;
    } else {
      flag = false;
    }
    tmp11 = flag;
  }
  cResult[2] = tmp5;
  cResult[3] = analyticsSource;
  cResult[4] = tmp11;
  tmp10 = tmp11;
}) : ((arg0, analyticsSource) => {
  let closure_0;
  let deaf;
  let stringResult;
  const f130047 = () => {
    const tmp = canChannelUseSoundboardDefault;
    return tmp(ChannelStore.getChannel(closure_0));
  };
  _require = arg0;
  importDefault = analyticsSource;
  let tmp2 = useIsConnectedToVoiceChannelDefault(arg0);
  let obj = require("get initialized");
  const items = [MediaEngineStore];
  const stateFromStores = obj.useStateFromStores(items, () => deaf.isDeaf());
  if (tmp2) {
    let flag;
    if (obj.VOICE_CONTROLS === analyticsSource) {
      flag = true;
    } else {
      flag = false;
    }
    tmp2 = flag;
  }
  const items1 = [arg0, analyticsSource];
  const items2 = [arg0];
  const callback = react.useCallback(() => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      const obj2 = { channel, analyticsSource };
      const obj = soundboard_SoundboardActionCreators;
      const result = obj.showSoundboardSoundPickerActionSheet(obj2);
    }
  }, items1);
  let obj2 = { visible: tmp2, handlePress: callback, disabled: stateFromStores || !react.useMemo(f130047, items2), disabledAccessibilityHint: stringResult };
  stringResult = undefined;
  stateFromStores || !react.useMemo(f130047, items2);
  if (stateFromStores) {
    const intl = tmp3(1126).intl;
    stringResult = intl.string(tmp3(1126).t.X1lQli);
  }
  return obj2;
});
let result = size.fileFinishedImporting("modules/voice_panel/native/hooks/useSoundboardConfig.tsx");

export default tmp2;
export { SoundboardButtonLocation };