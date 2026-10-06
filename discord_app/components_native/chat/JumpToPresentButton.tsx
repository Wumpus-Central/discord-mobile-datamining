// discord_app/components_native/chat/JumpToPresentButton.tsx
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../design/tokens/native/useToken.tsx";
import react from "../../../_runtime/00019_react.js";
import useChatBottomManagerUIStore_mod from "../../modules/chat_input/native/useChatBottomManagerUIStore.tsx";
import GatewayConnectionStore from "../../modules/gateway/GatewayConnectionStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let channelId, dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
let useChatBottomManagerUIStore = useChatBottomManagerUIStore_mod;
({ useChatInputContainerHeight: closure_4, useSmallSuggestionBarHeight: hasOwnProperty } = useChatBottomManagerUIStore);
useChatBottomManagerUIStore = useChatBottomManagerUIStore_mod;
const jsx = Fragment.jsx;
let obj = { container: obj2, containerIOS: { bottom: "100%", pointerEvents: "box-none" } };
obj2 = {
  borderRadius: nativeDefault.radii.round,
  position: "absolute",
  right: nativeDefault.modules.mobile.JUMP_TO_PRESENT_RIGHT_SPACING,
};
let closure_10 = createStyles.createStyles(obj);
let closure_11 = PlatformUtils.isIOS()
  ? (View) => {
      let token;
      const obj = { marginBottom: token + hasOwnProperty(View) };
      const obj2 = useToken;
      token = obj2.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
      return obj;
    }
  : (View) => {
      let sum;
      const obj2 = { bottom: sum + hasOwnProperty(View) };
      const obj = useToken;
      const token = obj.useToken(nativeDefault.modules.mobile.JUMP_TO_PRESENT_BOTTOM_SPACING);
      sum = React3(View) + token;
      return obj2;
    };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let connected;
      let stateFromStores;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp = channelId;
      const obj = channelId(stateFromStores[11]);
      const cResult = obj.c(25);
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
      const tmpResult = tmp(stateFromStores[12]);
      stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7, tmp8);
      if (cResult[3] === channelId) {
        if (cResult[4] === stateFromStores) {
          let tmp11;
          let tmp16;
          let tmp18;
          if (cResult[5] === screenIndex) {
            tmp11 = cResult[6];
          }
          const tmp13 = useChatBottomManagerUIStore(tmp11);
          const tmpResult5 = tmp(stateFromStores[13]);
          const isVoicePanelMounted = tmpResult5.useIsVoicePanelMounted(channelId);
          const _Symbol = Symbol;
          const tmpResult6 = tmp(stateFromStores[13]);
          const isVoicePanelOpen = tmpResult6.useIsVoicePanelOpen(channelId);
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [MessageStore];
            cResult[7] = items2;
            tmp16 = items2;
          } else {
            tmp16 = cResult[7];
          }
          if (cResult[8] !== channelId) {
            const fn3 = function f() {
              return null != MessageStore.getMessages(channelId).jumpReturnTargetId;
            };
            cResult[8] = channelId;
            cResult[9] = fn3;
            tmp18 = fn3;
          } else {
            tmp18 = cResult[9];
          }
          const tmpResult7 = tmp(stateFromStores[12]);
          const stateFromStores1 = tmpResult7.useStateFromStores(tmp16, tmp18);
          if (!tmp13) {
            return null;
          }
          if (cResult[10] === tmp5) {
            let tmp21;
            let tmp23;
            if (cResult[11] === tmp4.containerIOS) {
              tmp21 = cResult[12];
            }
            if (cResult[13] !== stateFromStores1) {
              let stringResult;
              const intl = tmp(tmp2[14]).intl;
              const string = intl.string;
              const t = tmp(tmp2[14]).t;
              if (stateFromStores1) {
                stringResult = string(t.dpjpOp);
              } else {
                stringResult = string(t.gpoQsB);
              }
              cResult[13] = stateFromStores1;
              cResult[14] = stringResult;
              tmp23 = stringResult;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] === tmp21) {
              let tmp25;
              let tmp27Result;
              if (cResult[16] === tmp4.container) {
                tmp25 = cResult[17];
              }
              if (cResult[18] === tmp23) {
                if (cResult[19] === onJumpToPresent) {
                  let tmp26;
                  if (cResult[20] === tmp13) {
                    tmp26 = cResult[21];
                  }
                  if (cResult[22] === tmp26) {
                    let tmp31;
                    if (cResult[23] === tmp25) {
                      tmp31 = cResult[24];
                    }
                    return tmp31;
                  }
                  const tmp34 = <View style={tmp25}>{tmp26}</View>;
                  cResult[22] = tmp26;
                  cResult[23] = tmp25;
                  cResult[24] = tmp34;
                  tmp31 = tmp34;
                }
              }
              if (tmp13) {
                screenIndex(stateFromStores[15]);
                tmp27Result = (
                  <tmp30 accessibilityLabel={tmp23} icon={screenIndex(tmp2[16])} onPress={onJumpToPresent} />
                );
              } else {
                tmp27Result = jsx(tmp(tmp2[17]).MemoedVoicePanelDismissChatButton, {});
              }
              cResult[18] = tmp23;
              cResult[19] = onJumpToPresent;
              cResult[20] = tmp13;
              cResult[21] = tmp27Result;
              tmp26 = tmp27Result;
            }
            const items3 = [tmp4.container, tmp21];
            cResult[15] = tmp21;
            cResult[16] = tmp4.container;
            cResult[17] = items3;
            tmp25 = items3;
          }
          let tmp22 = tmp5;
          const tmpResult8 = tmp(stateFromStores[8]);
          if (tmpResult8.isIOS()) {
            const items4 = [tmp4.containerIOS, tmp5];
            tmp22 = items4;
          }
          cResult[10] = tmp5;
          cResult[11] = tmp4.containerIOS;
          cResult[12] = tmp22;
          tmp21 = tmp22;
        }
      }
      const fn2 = function v(showingAutoComplete) {
        let tmp = stateFromStores;
        if (tmp) {
          showingAutoComplete = showingAutoComplete.showingAutoComplete;
          const value = showingAutoComplete.get(screenIndex);
          let tmp5 = !value;
          if (tmp5) {
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
    }
  : (channelId) => {
      let closure_2;
      let connected;
      let stringResult;
      let tmp12Result;
      channelId = channelId.channelId;
      const screenIndex = channelId.screenIndex;
      const onJumpToPresent = channelId.onJumpToPresent;
      let tmp = closure_10();
      const tmp2 = closure_11(screenIndex);
      const items = [GatewayConnectionStore];
      const obj = channelId(504);
      dependencyMap = obj.useStateFromStores(items, () => connected.isConnected(), []);
      let tmp5 = useChatBottomManagerUIStore((showingAutoComplete) => {
        let tmp = closure_2;
        if (tmp) {
          showingAutoComplete = showingAutoComplete.showingAutoComplete;
          const value = showingAutoComplete.get(screenIndex);
          let tmp5 = !value;
          if (tmp5) {
            const showJumpToPresentButtonChannelId = showingAutoComplete.showJumpToPresentButtonChannelId;
            tmp5 = showJumpToPresentButtonChannelId.get(screenIndex) === channelId;
          }
          tmp = tmp5;
        }
        return tmp;
      });
      const obj2 = channelId(9622);
      const isVoicePanelMounted = obj2.useIsVoicePanelMounted(channelId);
      const obj3 = channelId(9622);
      const isVoicePanelOpen = obj3.useIsVoicePanelOpen(channelId);
      const items1 = [MessageStore];
      const obj4 = channelId(504);
      const stateFromStores = obj4.useStateFromStores(
        items1,
        () => null != MessageStore.getMessages(channelId).jumpReturnTargetId,
      );
      if (!tmp5) {
        return null;
      }
      let tmp10 = tmp2;
      const tmp3Result = channelId(1369);
      if (tmp3Result.isIOS()) {
        const items2 = [tmp.containerIOS, tmp2];
        tmp10 = items2;
      }
      const intl = tmp3(1126).intl;
      const string = intl.string;
      const t = tmp3(1126).t;
      if (stateFromStores) {
        stringResult = string(t.dpjpOp);
      } else {
        stringResult = string(t.gpoQsB);
      }
      const items3 = [tmp.container, tmp10];
      if (tmp5) {
        screenIndex(11911);
        tmp12Result = <tmp16 accessibilityLabel={stringResult} icon={screenIndex(11912)} onPress={onJumpToPresent} />;
      } else {
        tmp12Result = jsx(tmp3(11913).MemoedVoicePanelDismissChatButton, {});
      }
      return <View style={items3}>{tmp12Result}</View>;
    };
const result = size.fileFinishedImporting("components_native/chat/JumpToPresentButton.tsx");

export default tmp4;
