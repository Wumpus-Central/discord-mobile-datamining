// === Module 11983: JumpToPresentButton ===

// Module 11983 (JumpToPresentButton)
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4778 */;
import noop from "module_19" /* 19 */;
import useChatBottomManagerUIStore_mod from "useChatBottomManagerUIStore" /* 9318 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5753 */;
import MessageStore from "MessageStore" /* 5428 */;

require = fn;
const View = fn(17).View;
let useChatBottomManagerUIStore = fn(9318);
({ useChatInputContainerHeight: closure_4, useSmallSuggestionBarHeight: hasOwnProperty } = useChatBottomManagerUIStore);
let useChatBottomManagerUIStore = useChatBottomManagerUIStore_mod;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { container: { borderRadius: nativeDefault.radii.round, position: "absolute", right: nativeDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING }, containerIOS: { bottom: "100%", pointerEvents: "box-none" } };
let closure_10 = createStyles.createStyles(obj2);
const PlatformUtils = fn(1381);
let closure_11 = PlatformUtils.isIOS() ? ((View) => {
  const obj = { marginBottom: null };
  const token = useToken.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  obj.marginBottom = token + hasOwnProperty(View);
  return obj;
}) : ((View) => {
  const obj2 = { bottom: null };
  const token = useToken.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
  const sum = React4(View) + token;
  obj2.bottom = sum + hasOwnProperty(View);
  return obj2;
});
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.round, position: "absolute", right: nativeDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function JumpToPresentButton(channelId) {
  let tmp2 = stateFromStores;
  const cResult = channelId(stateFromStores[11]).c(25);
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  const onJumpToPresent = channelId.onJumpToPresent;
  const tmp4 = closure_10();
  let tmp5 = closure_11(screenIndex);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GatewayConnectionStore];
    const fn = function s() {
      return connected.isConnected();
    };
    const items1 = [];
    cResult[0] = items;
    cResult[1] = fn;
    cResult[2] = items1;
    tmp6 = items;
    tmp7 = fn;
    tmp8 = items1;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  const obj = channelId(stateFromStores[11]);
  stateFromStores = channelId(tmp2[12]).useStateFromStores(tmp6, tmp7, tmp8);
  if (cResult[3] === channelId) {
    if (cResult[4] === stateFromStores) {
      if (cResult[5] === screenIndex) {
        let tmp11 = cResult[6];
      }
      const tmp13 = useChatBottomManagerUIStore(tmp11);
      const isVoicePanelMounted = tmp(tmp2[13]).useIsVoicePanelMounted(channelId);
      const tmpResult5 = tmp(tmp2[13]);
      const _Symbol = Symbol;
      const isVoicePanelOpen = tmp(tmp2[13]).useIsVoicePanelOpen(channelId);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [MessageStore];
        cResult[7] = items2;
        let tmp16 = items2;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] !== channelId) {
        const fn3 = function f() {
          return null != MessageStore.getMessages(channelId).jumpReturnTargetId;
        };
        cResult[8] = channelId;
        cResult[9] = fn3;
        let tmp18 = fn3;
      } else {
        tmp18 = cResult[9];
      }
      const tmpResult6 = tmp(tmp2[13]);
      const stateFromStores1 = tmp(tmp2[12]).useStateFromStores(tmp16, tmp18);
      if (!tmp13) {
        return null;
      }
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp4.containerIOS) {
          let tmp21 = cResult[12];
        }
        if (cResult[13] !== stateFromStores1) {
          const intl = tmp(tmp2[14]).intl;
          const string = intl.string;
          let dpjpOp = tmp(tmp2[14]).t;
          if (stateFromStores1) {
            dpjpOp = dpjpOp.dpjpOp;
            let stringResult = string(dpjpOp);
          } else {
            stringResult = string(dpjpOp.gpoQsB);
          }
          cResult[13] = stateFromStores1;
          cResult[14] = stringResult;
        } else {
          if (cResult[15] === tmp21) {
            if (cResult[16] === tmp4.container) {
              let tmp26 = cResult[17];
            }
            if (cResult[18] === tmp23) {
              if (cResult[19] === onJumpToPresent) {
                if (cResult[20] === tmp13) {
                  if (cResult[22] === cResult[21]) {
                    if (cResult[23] === tmp26) {
                      let tmp33 = cResult[24];
                    }
                    return tmp33;
                  }
                  const obj2 = { style: tmp26, children: cResult[21] };
                  const tmp36 = <View style={tmp26}>{cResult[21]}</View>;
                  cResult[22] = cResult[21];
                  cResult[23] = tmp26;
                  cResult[24] = tmp36;
                  tmp33 = tmp36;
                }
              }
            }
            if (tmp13) {
              const obj3 = { accessibilityLabel: tmp23, icon: null, onPress: null };
              tmp2 = screenIndex(tmp2[16]);
              obj3.icon = tmp2;
              obj3.onPress = onJumpToPresent;
              let tmp28Result = jsx(screenIndex(tmp2[15]), { accessibilityLabel: tmp23, icon: null, onPress: null });
              const tmp31 = screenIndex(tmp2[15]);
            } else {
              tmp28Result = jsx(tmp(tmp2[17]).MemoedVoicePanelDismissChatButton, {});
            }
            cResult[18] = tmp23;
            cResult[19] = onJumpToPresent;
            cResult[20] = tmp13;
            cResult[21] = tmp28Result;
          }
          const items3 = [tmp4.container, tmp21];
          cResult[15] = tmp21;
          cResult[16] = tmp4.container;
          cResult[17] = items3;
          tmp26 = items3;
        }
      }
      const tmpResult7 = tmp(tmp2[12]);
      let tmp22 = tmp5;
      if (tmpResult8.isIOS()) {
        const items4 = [tmp4.containerIOS, tmp5];
        tmp22 = items4;
      }
      cResult[10] = tmp5;
      cResult[11] = tmp4.containerIOS;
      cResult[12] = tmp22;
      tmp21 = tmp22;
      tmpResult8 = tmp(tmp2[8]);
    }
  }
  const fn2 = function v(showingAutoComplete) {
    let tmp = stateFromStores;
    if (tmp) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      value = showingAutoComplete.get(screenIndex);
      let tmp5 = !value;
      if (!value) {
        const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
        tmp5 = showJumpToPresentButtonChannelId.get(screenIndex) === channelId;
      }
      tmp = tmp5;
    }
    return tmp;
  };
  cResult[3] = channelId;
  cResult[4] = stateFromStores;
  cResult[5] = screenIndex;
  cResult[6] = fn2;
  tmp11 = fn2;
  const tmpResult = channelId(tmp2[12]);
}) : (function JumpToPresentButton(channelId) {
  channelId = channelId.channelId;
  const screenIndex = channelId.screenIndex;
  let tmp = closure_10();
  const tmp2 = closure_11(screenIndex);
  const items = [GatewayConnectionStore];
  dependencyMap = channelId(504).useStateFromStores(items, () => connected.isConnected(), []);
  let tmp5 = useChatBottomManagerUIStore((showingAutoComplete) => {
    let tmp = closure_2;
    if (tmp) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      value = showingAutoComplete.get(screenIndex);
      let tmp5 = !value;
      if (!value) {
        const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
        tmp5 = showJumpToPresentButtonChannelId.get(screenIndex) === channelId;
      }
      tmp = tmp5;
    }
    return tmp;
  });
  const obj = channelId(504);
  const isVoicePanelMounted = channelId(10815).useIsVoicePanelMounted(channelId);
  const obj2 = channelId(10815);
  const isVoicePanelOpen = channelId(10815).useIsVoicePanelOpen(channelId);
  const obj3 = channelId(10815);
  const items1 = [MessageStore];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => null != MessageStore.getMessages(channelId).jumpReturnTargetId);
  if (!tmp5) {
    return null;
  }
  const obj4 = channelId(504);
  let tmp10 = tmp2;
  if (tmp3Result.isIOS()) {
    const items2 = [tmp.containerIOS, tmp2];
    tmp10 = items2;
  }
  const intl = tmp3(1126).intl;
  const string = intl.string;
  const t = tmp3(1126).t;
  if (stateFromStores) {
    let stringResult = string(t.dpjpOp);
  } else {
    stringResult = string(t.gpoQsB);
  }
  const obj5 = { style: null, children: null };
  const items3 = [tmp.container, tmp10];
  obj5.style = items3;
  if (tmp5) {
    const obj6 = { accessibilityLabel: stringResult, icon: screenIndex(11985), onPress: channelId.onJumpToPresent };
    let tmp12Result = jsx(screenIndex(11984), { accessibilityLabel: stringResult, icon: screenIndex(11985), onPress: channelId.onJumpToPresent });
    const tmp16 = screenIndex(11984);
  } else {
    tmp12Result = jsx(tmp3(11986).MemoedVoicePanelDismissChatButton, {});
  }
  obj5.children = tmp12Result;
  return <View style={null}>{null}</View>;
});