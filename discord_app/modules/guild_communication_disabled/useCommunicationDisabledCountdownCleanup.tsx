// === Module 12195: useCommunicationDisabledCountdownCleanup ===

// Module 12195 (useCommunicationDisabledCountdownCleanup)
import noop from "module_19" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

({ useEffect: c3, useRef: closure_4 } = noop);
let result = size.fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx");

export const useCommunicationDisabledCountdownCleanup = ReactCompilerGating.isReactCompilerEnabled() ? (function useCommunicationDisabledCountdownCleanup(arg0) {
  _require = arg0;
  const cResult = require("c").c(15);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (arg0 == null) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  ({ communicationDisabledUntil, userId } = tmp3);
  guildId = tmp3.guildId;
  if (cResult[2] !== communicationDisabledUntil) {
    if (null != communicationDisabledUntil) {
      const _Date2 = Date;
      let parsed = Date.parse(communicationDisabledUntil);
    } else {
      const _Date = Date;
      parsed = Date.now();
    }
    cResult[2] = communicationDisabledUntil;
    cResult[3] = parsed;
  } else {
    const tmp11 = userId(guildId[3])(cResult[3]);
    const seconds = tmp11.seconds;
    ref = ref(null);
    if (cResult[4] === guildId) {
      if (cResult[5] === arg0) {
        if (cResult[6] === seconds) {
          if (cResult[7] === userId) {
            let tmp14 = cResult[8];
          }
          if (cResult[9] === communicationDisabledUntil) {
            if (cResult[10] === guildId) {
              if (cResult[11] === arg0) {
                if (cResult[12] === seconds) {
                  if (cResult[13] === userId) {
                    let tmp15 = cResult[14];
                  }
                  seconds(tmp14, tmp15);
                  return tmp11;
                }
              }
            }
          }
          const items = [guildId, userId, seconds, communicationDisabledUntil, arg0];
          class D {
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
                      closure_4.current = setTimeout(() => { ... }, 1000);
                    }
                    return () => { ... };
                  }
                }
              }
              clearTimeoutResult = clearTimeout(closure_4.current);
              return;
            }
          }
          cResult[10] = guildId;
          cResult[11] = arg0;
          cResult[12] = seconds;
          cResult[13] = userId;
          cResult[14] = items;
          tmp15 = items;
        }
      }
    }
    class D {
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
                closure_4.current = setTimeout(() => { ... }, 1000);
              }
              return () => { ... };
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
    cResult[8] = D;
    tmp14 = D;
  }
}) : (function useCommunicationDisabledCountdownCleanup(arg0) {
  closure_0 = arg0;
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  ({ communicationDisabledUntil, userId } = obj);
  const guildId = obj.guildId;
  if (null != communicationDisabledUntil) {
    const _Date2 = Date;
    let parsed = Date.parse(communicationDisabledUntil);
  } else {
    const _Date = Date;
    parsed = Date.now();
  }
  const tmpResult = userId(guildId[3])(parsed);
  const seconds = tmpResult.seconds;
  const tmp = userId(guildId[3]);
  const items = [guildId, userId, seconds, communicationDisabledUntil, arg0];
  seconds(() => {
    if (null != closure_0) {
      if (null != guildId) {
        if (null != userId) {
          let tmp5 = seconds <= 0;
          if (tmp5) {
            tmp5 = null == ref.current;
          }
          if (tmp5) {
            const _setTimeout = setTimeout;
            ref.current = setTimeout(() => {
              const result = userId(guildId[4]).clearGuildMemberTimeout(closure_1_2, closure_1_1);
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