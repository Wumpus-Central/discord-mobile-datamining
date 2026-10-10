// === Module 13589: OngoingCallStatusLabel ===

// Module 13589 (OngoingCallStatusLabel)
import c from "c" /* 576 */;
import native from "native" /* 1200 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5758 */;
import VoiceStateStore from "VoiceStateStore" /* 5113 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useOngoingCallStatus(arg0, arg1, arg2) {
  _require = arg0;
  let xNeSms = first;
  const cResult = require("c").c(11);
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
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
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
          if (!tmp2) {
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
    let tmp11 = items1;
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
          if (!tmp2) {
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
    tmp11 = cResult[4];
  }
  const obj = require("c");
  let tmp3 = undefined === arg2 || arg2;
  const stateFromStores = require("initialize").useStateFromStores(tmp7, N, tmp11);
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
          if (!tmp2) {
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
    const stringResult = obj3.string(tmp(xNeSms[8]).t["1zFMqU"]);
    cResult[5] = stringResult;
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
          if (!tmp2) {
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
          if (!tmp2) {
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
          if (!tmp2) {
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
  if (!stateFromStores) {
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
          if (!tmp2) {
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
    let stringResult1 = obj4.string(tmp(xNeSms[8]).t["NGg/fm"]);
    cResult[6] = stateFromStores;
    cResult[7] = tmp3;
    cResult[8] = stringResult1;
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
          if (!tmp2) {
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
  const intl = tmp(xNeSms[8]).intl;
  xNeSms = tmp(xNeSms[8]).t.xNeSms;
  stringResult1 = intl.string(xNeSms);
  const tmpResult = require("initialize");
}) : (function useOngoingCallStatus(arg0, arg1) {
  _require = arg0;
  let flag = arg2;
  if (arg2 === undefined) {
    flag = true;
  }
  const id = AuthenticationStore.getId();
  let xNeSms = id;
  const items = [VoiceStateStore, CallStore];
  const items1 = [id, arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null == user) {
      return false;
    } else {
      const _Object = Object;
      const values = Object.values(VoiceStateStore.getVoiceStatesForChannel(user.id));
      const call = CallStore.getCall(user.id);
      let tmp2 = null != call;
      if (tmp2) {
        tmp2 = call.ringing.length > 0;
      }
      let tmp3 = !tmp2;
      if (!tmp2) {
        tmp3 = 1 === values.length;
      }
      if (tmp3) {
        tmp3 = values[0].userId === id;
      }
      return tmp3;
    }
  }, items1);
  const intl = require("util").intl;
  let stringResult = intl.string(require("util").t["1zFMqU"]);
  if (require("CallStateHooks").CallStates.DISCONNECTING !== arg1) {
    if (tmp2(xNeSms[9]).CallStates.CONNECTED !== arg1) {
      if (tmp2(xNeSms[9]).CallStates.RINGING === arg1) {
        const intl2 = tmp2(xNeSms[8]).intl;
        stringResult = intl2.string(tmp2(xNeSms[8]).t.Xuzre8);
      } else if (tmp2(xNeSms[9]).CallStates.DISCONNECTED === arg1) {
        const intl5 = tmp2(xNeSms[8]).intl;
        stringResult = intl5.string(tmp2(xNeSms[8]).t["w//7ET"]);
      }
      return stringResult;
    }
  }
  if (!stateFromStores) {
    const intl3 = tmp2(xNeSms[8]).intl;
    let stringResult1 = intl3.string(tmp2(xNeSms[8]).t["NGg/fm"]);
  }
  const intl4 = tmp2(xNeSms[8]).intl;
  xNeSms = tmp2(xNeSms[8]).t.xNeSms;
  stringResult1 = intl4.string(xNeSms);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/components/OngoingCallStatusLabel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function OngoingCallStatusLabel(arg0) {
  const cResult = c.c(3);
  ({ style, useAllAloneText } = arg0);
  let tmp5 = undefined === useAllAloneText;
  ({ channel, voiceState } = arg0);
  if (!tmp5) {
    tmp5 = useAllAloneText;
  }
  const tmp4Result = closure_6(channel, voiceState, tmp5);
  if (cResult[0] === style) {
    if (cResult[1] === tmp4Result) {
      let tmp7 = cResult[2];
    }
    return tmp7;
  }
  const tmp8 = jsx(native.LegacyText, { style, children: tmp4Result });
  cResult[0] = style;
  cResult[1] = tmp4Result;
  cResult[2] = tmp8;
  tmp7 = tmp8;
}) : (function OngoingCallStatusLabel(useAllAloneText) {
  let flag = useAllAloneText.useAllAloneText;
  ({ style, channel, voiceState } = useAllAloneText);
  if (flag === undefined) {
    flag = true;
  }
  const children = closure_6(channel, voiceState, flag);
  return jsx(native.LegacyText, { style, children });
});