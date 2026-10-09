// === Module 11399: BanConfirmModal ===

// Module 11399 (BanConfirmModal)
import BanConfirmDefault from "BanConfirm" /* 11390 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/BanConfirmModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BanConfirmModal(userId) {
  const cResult = guildId(onGoBack[3]).c(7);
  ({ cancelButtonCallback, guildId } = userId);
  userId = userId.userId;
  if (cResult[0] !== cancelButtonCallback) {
    const obj2 = { onBeforeGoBack: cancelButtonCallback };
    cResult[0] = cancelButtonCallback;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  onGoBack = userId(tmp2[4])(tmp4).onGoBack;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[5]).intl;
    const stringResult = intl.string(tmp(tmp2[5]).t.R3QeLQ);
    cResult[2] = stringResult;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === guildId) {
    if (cResult[4] === onGoBack) {
      if (cResult[5] === userId) {
        let tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const tmp9 = jsx(userId(onGoBack[6]), {
    screenKey: "ban",
    title: tmp6,
    render() {
      return jsx(BanConfirmDefault, { onBan: onGoBack, guildId, userId });
    }
  });
  cResult[3] = guildId;
  cResult[4] = onGoBack;
  cResult[5] = userId;
  cResult[6] = tmp9;
  tmp8 = tmp9;
}) : (function BanConfirmModal(onBeforeGoBack) {
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = require("useNavigatorBackHandler")({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  const obj = { screenKey: "ban", title: null, render: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.R3QeLQ);
  obj.render = function render() {
    return jsx(BanConfirmDefault, { onBan: onGoBack, guildId, userId });
  };
  return jsx(require("ModalStackNavigator"), { screenKey: "ban", title: null, render: null });
});