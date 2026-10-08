// === Module 13962: useMessageRequestPrivacyOption ===

// Module 13962 (useMessageRequestPrivacyOption)
import c from "c" /* 576 */;
import UserSettings from "UserSettings" /* 2040 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6675 */;
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 12180 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
let ReactCompilerGating = fn(558);
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? (function MessageRequestRestrictedGuildPrivacyOption(guild) {
  const cResult = id(576).c(14);
  guild = guild.guild;
  id = guild.id;
  let MessageRequestRestrictedGuildIds = id(2040).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  if (cResult[0] === id) {
    const RestrictedGuildIds = tmp(2040).RestrictedGuildIds;
    const setting1 = RestrictedGuildIds.useSetting();
    if (cResult[3] === guild.id) {
      if (cResult[4] === setting1) {
        let tmp6 = cResult[5];
      }
      if (cResult[6] !== id) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
        cResult[6] = id;
        cResult[7] = S;
      } else {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
        const stringResult = obj4.string(tmp(1126).t["7UgSGP"]);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(tmp(1126).t.INRaYb);
        cResult[8] = stringResult;
        cResult[9] = stringResult1;
        let tmp11 = stringResult1;
        const tmp10 = stringResult;
      } else {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
        tmp11 = cResult[9];
      }
      if (!tmp6) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
      }
      if (cResult[10] === S) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            if (guild) {
              tmp5 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp3 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
      }
      const obj2 = { label: tmp10, subLabel: tmp11, value: !tmp6, onValueChange: S, disabled: tmp6 };
      const tmp17 = jsx(tmp(6881).ActionSheetSwitchRow, { label: tmp10, subLabel: tmp11, value: !tmp6, onValueChange: S, disabled: tmp6 });
      cResult[10] = S;
      cResult[11] = tmp6;
      cResult[12] = !tmp6;
      cResult[13] = tmp17;
    }
    const hasItem = setting1.includes(guild.id);
    cResult[3] = guild.id;
    cResult[4] = setting1;
    cResult[5] = hasItem;
    tmp6 = hasItem;
  }
  const hasItem1 = setting.includes(id);
  cResult[0] = id;
  cResult[1] = setting;
  cResult[2] = hasItem1;
  let obj = id(576);
}) : (function MessageRequestRestrictedGuildPrivacyOption(guild) {
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(2040).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(2040).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = noop.useCallback((arg0) => {
    const sanitizedMessageRequestRestrictedGuilds = UserSettingsUtils.getSanitizedMessageRequestRestrictedGuilds();
    if (arg0) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
  }, items);
  let obj = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
  const intl = id(1126).intl;
  obj.label = intl.string(id(1126).t["7UgSGP"]);
  const intl2 = id(1126).intl;
  obj.subLabel = intl2.string(id(1126).t.INRaYb);
  let tmp5 = !hasItem1;
  if (!hasItem1) {
    tmp5 = !hasItem;
  }
  obj.value = tmp5;
  obj.onValueChange = callback;
  obj.disabled = hasItem1;
  return jsx(id(6881).ActionSheetSwitchRow, { label: null, subLabel: null, value: null, onValueChange: null, disabled: null });
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export const useMessageRequestPrivacyOption = ReactCompilerGating.isReactCompilerEnabled() ? (function useMessageRequestPrivacyOption(guild) {
  const cResult = c.c(3);
  guild = guild.guild;
  const tmp2 = useIsStricterMessageRequestsDefault();
  if (cResult[0] === guild) {
    if (cResult[1] === tmp2) {
      let tmp3 = cResult[2];
    }
    return tmp3;
  }
  let tmp4 = null;
  if (!tmp2) {
    const obj2 = { guild };
    tmp4 = <closure_5 guild={guild} />;
  }
  cResult[0] = guild;
  cResult[1] = tmp2;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : (function useMessageRequestPrivacyOption(guild) {
  let tmp = null;
  if (!useIsStricterMessageRequestsDefault()) {
    const obj = { guild: guild.guild };
    tmp = <closure_5 guild={guild.guild} />;
  }
  return tmp;
});