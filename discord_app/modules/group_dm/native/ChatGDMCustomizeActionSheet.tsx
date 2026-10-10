// === Module 9631: ChatGDMCustomizeActionSheet ===

// Module 9631 (ChatGDMCustomizeActionSheet)
import useNavigatorConfirmChangesOnBackDefault from "useNavigatorConfirmChangesOnBack" /* 9632 */;
import ModalStackNavigatorDefault from "ModalStackNavigator" /* 9635 */;
import ChatGDMCustomizeDefault from "ChatGDMCustomize" /* 9637 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/ChatGDMCustomizeActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChatGDMCustomizeActionSheet(channelId) {
  const cResult = channelId(ref[3]).c(5);
  channelId = channelId.channelId;
  const tmp5 = onGoBack(ref[4])();
  onGoBack = tmp5.onGoBack;
  ref = tmp5.ref;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[5]).intl;
    const stringResult = intl.string(tmp(tmp2[5]).t["1r5E+m"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === channelId) {
    if (cResult[2] === onGoBack) {
      if (cResult[3] === ref) {
        let tmp8 = cResult[4];
      }
      return tmp8;
    }
  }
  const tmp9 = jsx(onGoBack(ref[6]), {
    screenKey: "kick",
    title: first,
    render() {
      return jsx(ChatGDMCustomizeDefault, { ref, onFinish: onGoBack, channelId });
    }
  });
  cResult[1] = channelId;
  cResult[2] = onGoBack;
  cResult[3] = ref;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function ChatGDMCustomizeActionSheet(channelId) {
  channelId = channelId.channelId;
  importDefault = undefined;
  dependencyMap = undefined;
  ({ onGoBack: c1, ref: c2 } = useNavigatorConfirmChangesOnBackDefault());
  const obj = { screenKey: "kick", title: null, render: null };
  const tmp = useNavigatorConfirmChangesOnBackDefault();
  const intl = channelId(1126).intl;
  obj.title = intl.string(channelId(1126).t["1r5E+m"]);
  obj.render = function render() {
    return jsx(ChatGDMCustomizeDefault, { ref, onFinish, channelId });
  };
  return jsx(ModalStackNavigatorDefault, { screenKey: "kick", title: null, render: null });
});