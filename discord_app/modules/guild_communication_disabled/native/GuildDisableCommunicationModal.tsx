// discord_app/modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import GuildDisableCommunicationDefault from "GuildDisableCommunication.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let onGoBack;
      let tmp4;
      let tmp5Result;
      const obj = guildId(onGoBack[3]);
      const cResult = obj.c(12);
      guildId = guildId.guildId;
      const user = guildId.user;
      if (cResult[0] !== guildId.cancelButtonCallback) {
        const obj2 = { onBeforeGoBack: guildId.cancelButtonCallback };
        cResult[0] = guildId.cancelButtonCallback;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      onGoBack = user(tmp2[4])(tmp4).onGoBack;
      if (cResult[2] === guildId) {
        let tmp6;
        if (cResult[3] === user) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === guildId) {
          if (cResult[6] === onGoBack) {
            let tmp8;
            if (cResult[7] === user) {
              tmp8 = cResult[8];
            }
            if (cResult[9] === tmp6) {
              let tmp9;
              if (cResult[10] === tmp8) {
                tmp9 = cResult[11];
              }
              return tmp9;
            }
            const tmp11 = jsx(user(onGoBack[8]), { screenKey: "disableCommunication", title: tmp6, render: tmp8 });
            cResult[9] = tmp6;
            cResult[10] = tmp8;
            cResult[11] = tmp11;
            tmp9 = tmp11;
          }
        }
        const fn = function b() {
          return jsx(GuildDisableCommunicationDefault, { user, guildId, onClose: onGoBack });
        };
        cResult[5] = guildId;
        cResult[6] = onGoBack;
        cResult[7] = user;
        cResult[8] = fn;
        tmp8 = fn;
      }
      const intl = tmp(tmp2[5]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj4 = { user: tmp5Result.getName(guildId, null, user) };
      const FN7NIS = tmp(tmp2[5]).t.FN7NIS;
      tmp5Result = user(onGoBack[6]);
      const formatToPlainStringResult = formatToPlainString(FN7NIS, obj4);
      cResult[2] = guildId;
      cResult[3] = user;
      cResult[4] = formatToPlainStringResult;
      tmp6 = formatToPlainStringResult;
    }
  : (onBeforeGoBack) => {
      let obj3;
      const guildId = onBeforeGoBack.guildId;
      const user = onBeforeGoBack.user;
      let onGoBack;
      onGoBack = user(onGoBack[4])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
      user(onGoBack[8]);
      const intl = guildId(onGoBack[5]).intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj2 = { user: obj3.getName(guildId, null, user) };
      const FN7NIS = guildId(onGoBack[5]).t.FN7NIS;
      obj3 = user(onGoBack[6]);
      return (
        <tmp
          screenKey="disableCommunication"
          title={formatToPlainString(FN7NIS, obj2)}
          render={function render() {
            return jsx(GuildDisableCommunicationDefault, { user, guildId, onClose: onGoBack });
          }}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx",
);

export default tmp3;
