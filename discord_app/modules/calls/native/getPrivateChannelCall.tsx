// === Module 10603: getPrivateChannelCall ===

// Module 10603 (getPrivateChannelCall)
import Constants from "Constants" /* 1085 */;
import CallsUtils from "CallsUtils" /* 9299 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const NOOP_NULL = Constants.NOOP_NULL;
const result = size.fileFinishedImporting("modules/calls/native/getPrivateChannelCall.tsx");

export default function getPrivateChannelCall(id) {
  let stringResult;
  let tmp9Result;
  _require = id;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let handleStartCall = arg2;
  if (arg2 === undefined) {
    handleStartCall = require("PrivateChannelCallUtils").handleStartCall;
  }
  let handleJoinCall = arg3;
  if (arg3 === undefined) {
    handleJoinCall = require("PrivateChannelCallUtils").handleJoinCall;
  }
  const isInChannelResult = handleStartCall.isInChannel(id.id);
  let obj = require("useIsCallActive");
  const checkIsCallActiveResult = obj.checkIsCallActive(id.id);
  if (id.isSystemDM()) {
    const C = handleJoinCall;
    tmp9Result = null;
  } else if (isInChannelResult) {
    if (!flag) {
      const string2 = tmp6(tmp7[4]).intl.string;
      class C {
        constructor() {
          obj = closure_0(closure_1[5]);
          return obj.handleDisconnect(closure_0);
        }
      }
    }
    class C {
      constructor() {
        obj = closure_0(closure_1[5]);
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
      stringResult = string(t.oCqlGG);
    } else {
      stringResult = string(t.focH1t);
    }
  }
  const obj2 = { text: tmp9Result, accessibilityHint: stringResult, inCall: isInChannelResult, onPress: C };
  if (stringResult == null) {
    stringResult = tmp9Result;
  }
  return obj2;
};