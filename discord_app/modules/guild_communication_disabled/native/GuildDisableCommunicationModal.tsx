// === Module 11449: GuildDisableCommunicationModal ===

// Module 11449 (GuildDisableCommunicationModal)
import GuildDisableCommunicationDefault from "GuildDisableCommunication" /* 11450 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunicationModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDisableCommunicationModal(guildId) {
  const cResult = guildId(onGoBack[3]).c(12);
  guildId = guildId.guildId;
  const user = guildId.user;
  if (cResult[0] !== guildId.cancelButtonCallback) {
    const obj2 = { onBeforeGoBack: cancelButtonCallback };
    cResult[0] = cancelButtonCallback;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  onGoBack = user(tmp2[4])(tmp4).onGoBack;
  if (cResult[2] === guildId) {
    if (cResult[3] === user) {
      let tmp6 = cResult[4];
    }
    if (cResult[5] === guildId) {
      if (cResult[6] === onGoBack) {
        if (cResult[7] === user) {
          let tmp8 = cResult[8];
        }
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp8) {
            let tmp9 = cResult[11];
          }
          return tmp9;
        }
        const obj3 = { screenKey: "disableCommunication", title: tmp6, render: tmp8 };
        const tmp11 = jsx(tmp5(tmp2[8]), { screenKey: "disableCommunication", title: tmp6, render: tmp8 });
        cResult[9] = tmp6;
        cResult[10] = tmp8;
        cResult[11] = tmp11;
        tmp9 = tmp11;
      }
    }
    const fn = function f() {
      return jsx(GuildDisableCommunicationDefault, { user, guildId, onClose: onGoBack });
    };
    cResult[5] = guildId;
    cResult[6] = onGoBack;
    cResult[7] = user;
    cResult[8] = fn;
    tmp8 = fn;
  }
  const intl = tmp(tmp2[5]).intl;
  const obj4 = { user: null };
  const obj = guildId(onGoBack[3]);
  obj4.user = user(onGoBack[6]).getName(guildId, null, user);
  const formatToPlainStringResult = intl.formatToPlainString(guildId(onGoBack[5]).t.FN7NIS, obj4);
  cResult[2] = guildId;
  cResult[3] = user;
  cResult[4] = formatToPlainStringResult;
  tmp6 = formatToPlainStringResult;
  const tmp5Result = user(onGoBack[6]);
}) : (function GuildDisableCommunicationModal(onBeforeGoBack) {
  const guildId = onBeforeGoBack.guildId;
  const user = onBeforeGoBack.user;
  let onGoBack;
  onGoBack = user(onGoBack[4])({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "disableCommunication", title: null, render: null };
  const intl = guildId(onGoBack[5]).intl;
  const obj2 = { user: null };
  const tmp = user(onGoBack[8]);
  obj2.user = user(onGoBack[6]).getName(guildId, null, user);
  obj.title = intl.formatToPlainString(guildId(onGoBack[5]).t.FN7NIS, obj2);
  obj.render = function render() {
    return jsx(GuildDisableCommunicationDefault, { user, guildId, onClose: onGoBack });
  };
  return <tmp screenKey="disableCommunication" title={null} render={null} />;
});