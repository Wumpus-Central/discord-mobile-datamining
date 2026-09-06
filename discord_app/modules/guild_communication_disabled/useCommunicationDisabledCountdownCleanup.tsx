// discord_app/modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx
import noop from "../../../_runtime/metro/00019__.js";
import size from "../../../_runtime/metro/00002__.js";

({ useEffect: c2, useRef: c3 } = noop);
let result = size.fileFinishedImporting(
  "modules/guild_communication_disabled/useCommunicationDisabledCountdownCleanup.tsx",
);

export const useCommunicationDisabledCountdownCleanup = function useCommunicationDisabledCountdownCleanup(guildMember) {
  importDefault = guildMember;
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
  const tmpResult = require("useCountdown")(parsed);
  const seconds = tmpResult.seconds;
  seconds(null);
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
              const result = closure_0(userId[2]).clearGuildMemberTimeout(guildId, closure_1_1);
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
};
