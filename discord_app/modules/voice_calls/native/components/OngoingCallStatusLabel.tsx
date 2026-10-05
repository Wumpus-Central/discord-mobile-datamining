// === Module 13607: OngoingCallStatusLabel ===

// Module 13607 (OngoingCallStatusLabel)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import native from "native" /* 1188 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5437 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, num, num2, tmp, tmp6;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  let first;
  let stringResult1;
  let tmp12;
  let tmp14;
  let tmp16;
  let tmp8;
  let user;
  _require = arg0;
  const tmp2 = first;
  const obj = require("react");
  const cResult = obj.c(11);
  const tmp4 = undefined === arg2 || arg2;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[0] = id;
    first = id;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VoiceStateStore, CallStore];
    cResult[1] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== arg0) {
    class N {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          flag = false;
          return false;
        } else {
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = closure_4;
          values = Object.values(closure_4.getVoiceStatesForChannel(tmp.id));
          tmp7 = closure_3;
          call = closure_3.getCall(tmp.id);
          tmp2 = null != call;
          if (tmp2) {
            num = 0;
            tmp2 = call.ringing.length > 0;
          }
          tmp3 = !tmp2;
          if (tmp3) {
            num2 = 1;
            tmp3 = 1 === values.length;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp3 = values[0].userId === closure_1;
          }
          return tmp3;
        }
      }
    }
    const items1 = [first, arg0];
    cResult[2] = arg0;
    cResult[3] = N;
    cResult[4] = items1;
    tmp12 = items1;
  } else {
    class N {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          flag = false;
          return false;
        } else {
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = closure_4;
          values = Object.values(closure_4.getVoiceStatesForChannel(tmp.id));
          tmp7 = closure_3;
          call = closure_3.getCall(tmp.id);
          tmp2 = null != call;
          if (tmp2) {
            num = 0;
            tmp2 = call.ringing.length > 0;
          }
          tmp3 = !tmp2;
          if (tmp3) {
            num2 = 1;
            tmp3 = 1 === values.length;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp3 = values[0].userId === closure_1;
          }
          return tmp3;
        }
      }
    }
    tmp12 = cResult[4];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp8, N, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          flag = false;
          return false;
        } else {
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = closure_4;
          values = Object.values(closure_4.getVoiceStatesForChannel(tmp.id));
          tmp7 = closure_3;
          call = closure_3.getCall(tmp.id);
          tmp2 = null != call;
          if (tmp2) {
            num = 0;
            tmp2 = call.ringing.length > 0;
          }
          tmp3 = !tmp2;
          if (tmp3) {
            num2 = 1;
            tmp3 = 1 === values.length;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp3 = values[0].userId === closure_1;
          }
          return tmp3;
        }
      }
    }
    const stringResult = obj3.string(require("intl").t["1zFMqU"]);
    cResult[5] = stringResult;
    tmp14 = stringResult;
  } else {
    class N {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          flag = false;
          return false;
        } else {
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = closure_4;
          values = Object.values(closure_4.getVoiceStatesForChannel(tmp.id));
          tmp7 = closure_3;
          call = closure_3.getCall(tmp.id);
          tmp2 = null != call;
          if (tmp2) {
            num = 0;
            tmp2 = call.ringing.length > 0;
          }
          tmp3 = !tmp2;
          if (tmp3) {
            num2 = 1;
            tmp3 = 1 === values.length;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp3 = values[0].userId === closure_1;
          }
          return tmp3;
        }
      }
    }
  }
  if (require("CallStateHooks").CallStates.DISCONNECTING !== arg1) {
    class N {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          flag = false;
          return false;
        } else {
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = closure_4;
          values = Object.values(closure_4.getVoiceStatesForChannel(tmp.id));
          tmp7 = closure_3;
          call = closure_3.getCall(tmp.id);
          tmp2 = null != call;
          if (tmp2) {
            num = 0;
            tmp2 = call.ringing.length > 0;
          }
          tmp3 = !tmp2;
          if (tmp3) {
            num2 = 1;
            tmp3 = 1 === values.length;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp3 = values[0].userId === closure_1;
          }
          return tmp3;
        }
      }
    }
    return tmp14;
  }
  if (cResult[6] === stateFromStores) {
    class N {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          flag = false;
          return false;
        } else {
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = closure_4;
          values = Object.values(closure_4.getVoiceStatesForChannel(tmp.id));
          tmp7 = closure_3;
          call = closure_3.getCall(tmp.id);
          tmp2 = null != call;
          if (tmp2) {
            num = 0;
            tmp2 = call.ringing.length > 0;
          }
          tmp3 = !tmp2;
          if (tmp3) {
            num2 = 1;
            tmp3 = 1 === values.length;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp3 = values[0].userId === closure_1;
          }
          return tmp3;
        }
      }
    }
    tmp14 = tmp16;
  }
  if (stateFromStores) {
    class N {
      constructor() {
        tmp = closure_0;
        if (null == closure_0) {
          flag = false;
          return false;
        } else {
          tmp5 = globalThis;
          _Object = Object;
          tmp6 = closure_4;
          values = Object.values(closure_4.getVoiceStatesForChannel(tmp.id));
          tmp7 = closure_3;
          call = closure_3.getCall(tmp.id);
          tmp2 = null != call;
          if (tmp2) {
            num = 0;
            tmp2 = call.ringing.length > 0;
          }
          tmp3 = !tmp2;
          if (tmp3) {
            num2 = 1;
            tmp3 = 1 === values.length;
          }
          if (tmp3) {
            tmp4 = closure_1;
            tmp3 = values[0].userId === closure_1;
          }
          return tmp3;
        }
      }
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp4;
    cResult[8] = stringResult1;
    tmp16 = stringResult1;
  }
  const intl = tmp(tmp2[8]).intl;
  stringResult1 = intl.string(require("intl").t["NGg/fm"]);
}) : ((arg0, arg1) => {
  let user;
  _require = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const id = AuthenticationStore.getId();
  const tmp2 = _require;
  const tmp3 = id;
  const items = [VoiceStateStore, CallStore];
  const items1 = [id, arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null == user) {
      return false;
    } else {
      const _Object = Object;
      const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(user.id));
      const call = CallStore.getCall(user.id);
      return !(null != call && call.ringing.length > 0) && 1 === values.length && values[0].userId === id;
    }
  }, items1);
  const intl = require("intl").intl;
  let stringResult = intl.string(require("intl").t["1zFMqU"]);
  if (require("CallStateHooks").CallStates.DISCONNECTING !== arg1) {
    if (tmp2(tmp3[9]).CallStates.CONNECTED !== arg1) {
      if (tmp2(tmp3[9]).CallStates.RINGING === arg1) {
        const intl2 = tmp2(tmp3[8]).intl;
        stringResult = intl2.string(tmp2(tmp3[8]).t.Xuzre8);
      } else if (tmp2(tmp3[9]).CallStates.DISCONNECTED === arg1) {
        const intl5 = tmp2(tmp3[8]).intl;
        stringResult = intl5.string(tmp2(tmp3[8]).t["w//7ET"]);
      }
    }
    return stringResult;
  }
  if (stateFromStores) {
    let stringResult1;
    if (flag) {
      const intl4 = tmp2(tmp3[8]).intl;
      stringResult1 = intl4.string(tmp2(tmp3[8]).t.xNeSms);
    }
    stringResult = stringResult1;
  }
  const intl3 = tmp2(tmp3[8]).intl;
  stringResult1 = intl3.string(tmp2(tmp3[8]).t["NGg/fm"]);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let style;
  let useAllAloneText;
  let voiceState;
  const obj = react2;
  const cResult = obj.c(3);
  ({ style, useAllAloneText } = arg0);
  let tmp5 = undefined === useAllAloneText;
  ({ channel, voiceState } = arg0);
  if (!tmp5) {
    tmp5 = useAllAloneText;
  }
  const tmp4Result = closure_6(channel, voiceState, tmp5);
  if (cResult[0] === style) {
    let tmp7;
    if (cResult[1] === tmp4Result) {
      tmp7 = cResult[2];
    }
    return tmp7;
  }
  const tmp8 = jsx(native.LegacyText, { style, children: tmp4Result });
  cResult[0] = style;
  cResult[1] = tmp4Result;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : ((useAllAloneText) => {
  let channel;
  let style;
  let voiceState;
  let flag = useAllAloneText.useAllAloneText;
  ({ style, channel, voiceState } = useAllAloneText);
  if (flag === undefined) {
    flag = true;
  }
  const children = closure_6(channel, voiceState, flag);
  return jsx(native.LegacyText, { style, children });
});
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallStatusLabel.tsx");

export default tmp3;