// === Module 11483: BanConfirmModal ===

// Module 11483 (BanConfirmModal)
import Fragment from "Fragment" /* 21 */;
import BanConfirmDefault from "BanConfirm" /* 11476 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let cancelButtonCallback;
  let guildId;
  let onGoBack;
  let tmp4;
  let tmp6;
  const obj = guildId(onGoBack[3]);
  const cResult = obj.c(7);
  ({ cancelButtonCallback, guildId } = userId);
  userId = userId.userId;
  if (cResult[0] !== cancelButtonCallback) {
    const obj2 = { onBeforeGoBack: cancelButtonCallback };
    cResult[0] = cancelButtonCallback;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  onGoBack = userId(tmp2[4])(tmp4).onGoBack;
  const tmp5 = userId;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[5]).intl;
    const stringResult = intl.string(guildId(onGoBack[5]).t.R3QeLQ);
    cResult[2] = stringResult;
    tmp6 = stringResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === guildId) {
    if (cResult[4] === onGoBack) {
      let tmp8;
      if (cResult[5] === userId) {
        tmp8 = cResult[6];
      }
      return tmp8;
    }
  }
  const tmp9 = jsx(tmp5(onGoBack[6]), {
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
}) : ((onBeforeGoBack) => {
  let guildId;
  let userId;
  ({ guildId: require, userId: importDefault } = onBeforeGoBack);
  let onGoBack;
  onGoBack = require("useNavigatorBackHandler")({ onBeforeGoBack: onBeforeGoBack.cancelButtonCallback }).onGoBack;
  require("ModalStackNavigator");
  const intl = require("intl").intl;
  return <tmp screenKey="ban" title={intl.string(require("intl").t.R3QeLQ)} render={function render() {
    return jsx(BanConfirmDefault, { onBan: onGoBack, guildId: require, userId: importDefault });
  }} />;
});
const result = size.fileFinishedImporting("modules/guild_moderation/native/BanConfirmModal.tsx");

export default tmp3;