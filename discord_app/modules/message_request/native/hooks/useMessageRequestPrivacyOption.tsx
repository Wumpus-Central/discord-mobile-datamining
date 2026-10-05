// === Module 13722: useMessageRequestPrivacyOption ===

// Module 13722 (useMessageRequestPrivacyOption)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import UserSettings from "UserSettings" /* 2028 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6491 */;
import useIsStricterMessageRequestsDefault from "useIsStricterMessageRequests" /* 12087 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let addResult, deleteResult, guild, updateSettingResult;

const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let id;
  let obj = id(576);
  const cResult = obj.c(14);
  guild = guild.guild;
  id = guild.id;
  let MessageRequestRestrictedGuildIds = id(2028).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  if (cResult[0] === id) {
    let tmp4;
    if (cResult[1] === setting) {
      tmp4 = cResult[2];
    }
    const RestrictedGuildIds = tmp(2028).RestrictedGuildIds;
    const setting1 = RestrictedGuildIds.useSetting();
    if (cResult[3] === guild.id) {
      let tmp6;
      let tmp11;
      let tmp10;
      if (cResult[4] === setting1) {
        tmp6 = cResult[5];
      }
      if (cResult[6] !== id) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            tmp3 = guild;
            if (tmp3) {
              tmp6 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp4 = id;
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
            tmp3 = guild;
            if (tmp3) {
              tmp6 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp4 = id;
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
            tmp3 = guild;
            if (tmp3) {
              tmp6 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp4 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
        const stringResult = obj4.string(id(1126).t["7UgSGP"]);
        const intl = tmp(1126).intl;
        const stringResult1 = intl.string(id(1126).t.INRaYb);
        cResult[8] = stringResult;
        cResult[9] = stringResult1;
        tmp11 = stringResult1;
        tmp10 = stringResult;
      } else {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            tmp3 = guild;
            if (tmp3) {
              tmp6 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp4 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
        tmp11 = cResult[9];
      }
      if (cResult[10] === S) {
        class S {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[5]);
            sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
            tmp3 = guild;
            if (tmp3) {
              tmp6 = id;
              deleteResult = sanitizedMessageRequestRestrictedGuilds.delete(id);
            } else {
              tmp4 = id;
              addResult = sanitizedMessageRequestRestrictedGuilds.add(id);
            }
            MessageRequestRestrictedGuildIds = tmp(tmp2[4]).MessageRequestRestrictedGuildIds;
            updateSettingResult = MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
            return;
          }
        }
      }
      cResult[10] = S;
      cResult[11] = tmp6;
      cResult[12] = !tmp6 && !tmp4;
      cResult[13] = jsx(id(6697).ActionSheetSwitchRow, { label: tmp10, subLabel: tmp11, value: !tmp6 && !tmp4, onValueChange: S, disabled: tmp6 });
      const tmp17 = jsx(id(6697).ActionSheetSwitchRow, { label: tmp10, subLabel: tmp11, value: !tmp6 && !tmp4, onValueChange: S, disabled: tmp6 });
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
  tmp4 = hasItem1;
}) : ((guild) => {
  guild = guild.guild;
  const id = guild.id;
  let MessageRequestRestrictedGuildIds = id(2028).MessageRequestRestrictedGuildIds;
  const setting = MessageRequestRestrictedGuildIds.useSetting();
  const hasItem = setting.includes(id);
  const RestrictedGuildIds = id(2028).RestrictedGuildIds;
  const setting1 = RestrictedGuildIds.useSetting();
  const hasItem1 = setting1.includes(guild.id);
  const items = [id];
  const callback = react.useCallback((arg0) => {
    const obj = UserSettingsUtils;
    const sanitizedMessageRequestRestrictedGuilds = obj.getSanitizedMessageRequestRestrictedGuilds();
    const tmp3 = arg0;
    if (tmp3) {
      sanitizedMessageRequestRestrictedGuilds.delete(id);
    } else {
      sanitizedMessageRequestRestrictedGuilds.add(id);
    }
    const MessageRequestRestrictedGuildIds = UserSettings.MessageRequestRestrictedGuildIds;
    MessageRequestRestrictedGuildIds.updateSetting(Array.from(sanitizedMessageRequestRestrictedGuilds));
  }, items);
  const ActionSheetSwitchRow = id(6697).ActionSheetSwitchRow;
  const intl = id(1126).intl;
  const intl2 = id(1126).intl;
  return <ActionSheetSwitchRow label={intl.string(id(1126).t["7UgSGP"])} subLabel={intl2.string(id(1126).t.INRaYb)} value={!hasItem1 && !hasItem} onValueChange={callback} disabled={hasItem1} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  const obj = react2;
  const cResult = obj.c(3);
  guild = guild.guild;
  const tmp2 = useIsStricterMessageRequestsDefault();
  if (cResult[0] === guild) {
    let tmp3;
    if (cResult[1] === tmp2) {
      tmp3 = cResult[2];
    }
    return tmp3;
  }
  let tmp4 = null;
  if (!tmp2) {
    tmp4 = <closure_5 guild={guild} />;
  }
  cResult[0] = guild;
  cResult[1] = tmp2;
  cResult[2] = tmp4;
  tmp3 = tmp4;
}) : ((guild) => {
  guild = guild.guild;
  let tmp = null;
  if (!useIsStricterMessageRequestsDefault()) {
    tmp = <closure_5 guild={guild} />;
  }
  return tmp;
});
const result = size.fileFinishedImporting("modules/message_request/native/hooks/useMessageRequestPrivacyOption.tsx");

export const useMessageRequestPrivacyOption = tmp2;