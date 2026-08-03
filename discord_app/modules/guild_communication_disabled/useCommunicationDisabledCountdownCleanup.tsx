// === Module 11674: useCommunicationDisabledCountdownCleanup ===

// Module 11674 (useCommunicationDisabledCountdownCleanup)
import noop from "noop";

let c3;
let obj1;
({ useEffect: obj1, useRef: c3 } = noop);
let result = require("clearGuildMemberTimeout").fileFinishedImporting("modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx");

export const useCommunicationDisabledCountdownCleanup = function useCommunicationDisabledCountdownCleanup(guildMember) {
  let communicationDisabledUntil;
  let userId;
  const importDefault = guildMember;
  let obj = guildMember;
  if (guildMember == null) {
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
  const tmpResult = importDefault(userId[1])(parsed);
  const seconds = tmpResult.seconds;
  let closure_4 = seconds(null);
  const items = [guildId, userId, seconds, communicationDisabledUntil, guildMember];
  guildId(() => {
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
              const result = outer1_0(outer1_1[2]).clearGuildMemberTimeout(closure_2, closure_1);
            }, 1000);
          }
          return () => {
            if (null != ref.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(tmp.current);
              tmp.current = null;
            }
          };
        }
      }
    }
    clearTimeout(ref.current);
  }, items);
  return tmpResult;
};