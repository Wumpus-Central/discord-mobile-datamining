// === Module 10862: getPrivateChannelCall ===

// Module 10862 (getPrivateChannelCall)
import closure_2 from "updateVoiceState" /* 4497 */;
import { NOOP_NULL } from "ME" /* 673 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/calls/native/getPrivateChannelCall.tsx");

export default function getPrivateChannelCall(id) {
  const _require = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let handleStartCall = arg2;
  if (arg2 === undefined) {
    handleStartCall = _require(flag[2]).handleStartCall;
  }
  let handleJoinCall = arg3;
  if (arg3 === undefined) {
    handleJoinCall = _require(flag[2]).handleJoinCall;
  }
  const isInChannelResult = handleStartCall.isInChannel(id.id);
  let obj = _require(flag[3]);
  if (id.isSystemDM()) {
    const C = handleJoinCall;
    let tmp9Result = null;
  } else if (isInChannelResult) {
    if (!flag) {
      const string2 = tmp6(tmp7[4]).intl.string;
      class C {
        constructor() {
          obj = closure_0(c1[5]);
          return obj.handleDisconnect(closure_0);
        }
      }
    }
    class C {
      constructor() {
        obj = closure_0(c1[5]);
        return obj.handleDisconnect(closure_0);
      }
    }
    tmp9Result = tmp16;
  } else if (checkIsCallActiveResult) {
    if (flag) {
      class C {
        constructor() {
          return handleJoinCall(closure_0, c1);
        }
      }
    } else {
      const intl3 = tmp6(tmp7[4]).intl;
      class C {
        constructor() {
          return handleJoinCall(closure_0, c1);
        }
      }
    }
    class C {
      constructor() {
        return handleJoinCall(closure_0, c1);
      }
    }
  } else {
    const intl = tmp6(tmp7[4]).intl;
    class C {
      constructor() {
        return handleStartCall(closure_0, c1);
      }
    }
    if (flag) {
      tmp9Result = tmp9(tmp10["7AWk50"]);
    } else {
      tmp9Result = tmp9(tmp10["EZgS+9"]);
    }
    const intl2 = tmp6(tmp7[4]).intl;
    const string = intl2.string;
    const t = tmp6(tmp7[4]).t;
    if (flag) {
      let stringResult = string(t.oCqlGG);
    } else {
      stringResult = string(t.focH1t);
    }
  }
  obj = { text: tmp9Result, accessibilityHint: null, inCall: null, onPress: null };
  if (stringResult == null) {
    stringResult = tmp9Result;
  }
  obj[1] = stringResult;
  obj[2] = isInChannelResult;
  obj[3] = C;
  return obj;
};