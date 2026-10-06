// === Module 12133: useCommunicationDisabledCountdownCleanup ===

// Module 12133 (useCommunicationDisabledCountdownCleanup)
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, clearTimeoutResult, num, num2, ref, tmp2, tmp4, tmp6, tmp7, tmp8;

let c3;
let closure_4;
({ useEffect: c3, useRef: closure_4 } = react);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let communicationDisabledUntil;
  let guildId;
  let tmp3;
  let tmp5;
  let userId;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(15);
  const tmp = guildId;
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (arg0 == null) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  ({ communicationDisabledUntil, userId } = tmp3);
  guildId = tmp3.guildId;
  if (cResult[2] !== communicationDisabledUntil) {
    let parsed;
    if (null != communicationDisabledUntil) {
      const _Date2 = Date;
      parsed = Date.parse(communicationDisabledUntil);
    } else {
      const _Date = Date;
      parsed = Date.now();
    }
    cResult[2] = communicationDisabledUntil;
    cResult[3] = parsed;
    tmp5 = parsed;
  } else {
    tmp5 = cResult[3];
  }
  const tmp10 = userId(tmp[3])(tmp5);
  const seconds = tmp10.seconds;
  ref = ref(null);
  if (cResult[4] === guildId) {
    if (cResult[5] === arg0) {
      if (cResult[6] === seconds) {
        let tmp11;
        if (cResult[7] === userId) {
          tmp11 = cResult[8];
        }
        if (cResult[9] === communicationDisabledUntil) {
          if (cResult[10] === guildId) {
            if (cResult[11] === arg0) {
              if (cResult[12] === seconds) {
                let tmp12;
                if (cResult[13] === userId) {
                  tmp12 = cResult[14];
                }
                seconds(tmp11, tmp12);
                return tmp10;
              }
            }
          }
        }
        const items = [guildId, userId, seconds, communicationDisabledUntil, arg0];
        cResult[9] = communicationDisabledUntil;
        cResult[10] = guildId;
        cResult[11] = arg0;
        cResult[12] = seconds;
        cResult[13] = userId;
        cResult[14] = items;
        tmp12 = items;
      }
    }
  }
  class T {
    constructor() {
      if (null != closure_0) {
        tmp = guildId;
        if (null != guildId) {
          tmp2 = userId;
          if (null != userId) {
            tmp4 = seconds;
            num = 0;
            tmp5 = seconds <= 0;
            if (tmp5) {
              tmp6 = closure_4;
              tmp5 = null == closure_4.current;
            }
            if (tmp5) {
              tmp7 = closure_4;
              tmp8 = globalThis;
              _setTimeout = setTimeout;
              num2 = 1000;
              closure_4.current = setTimeout(() => { /* body not rendered: F142444 */ }, 1000);
            }
            return () => { /* body not rendered: F142445 */ };
          }
        }
      }
      clearTimeoutResult = clearTimeout(closure_4.current);
      return;
    }
  }
  cResult[4] = guildId;
  cResult[5] = arg0;
  cResult[6] = seconds;
  cResult[7] = userId;
  cResult[8] = T;
  tmp11 = T;
}) : ((arg0) => {
  let communicationDisabledUntil;
  let parsed;
  let userId;
  let closure_0 = arg0;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  ({ communicationDisabledUntil, userId } = obj);
  const guildId = obj.guildId;
  const tmp = userId(guildId[3]);
  if (null != communicationDisabledUntil) {
    const _Date2 = Date;
    parsed = Date.parse(communicationDisabledUntil);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  const tmpResult = tmp(parsed);
  const seconds = tmpResult.seconds;
  ref = ref(null);
  const items = [guildId, userId, seconds, communicationDisabledUntil, arg0];
  seconds(() => {
    if (null != closure_0) {
      if (null != guildId) {
        if (null != userId) {
          const tmp5 = seconds <= 0 && null == ref.current;
          if (tmp5) {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              const obj = userId(guildId[4]);
              const result = obj.clearGuildMemberTimeout(closure_1_2, closure_1_1);
            }, 1000);
          }
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(ref.current);
              ref.current = null;
            }
          };
        }
      }
    }
    clearTimeout(ref.current);
  }, items);
  return tmpResult;
});
let result = size.fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx");

export const useCommunicationDisabledCountdownCleanup = tmp3;