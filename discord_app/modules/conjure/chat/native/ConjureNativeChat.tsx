// discord_app/modules/conjure/chat/native/ConjureNativeChat.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import LinearGradientDefault from "../../../../../_runtime/05391_LinearGradient.js";
import _modDef6243 from "../../../../../_runtime/metro/06243__.js";
import conjureChatTurns from "../conjureChatTurns.tsx";
import conjurePublishCard from "../../publish/conjurePublishCard.tsx";
import ConjureTodoState from "../../agent_activity/ConjureTodoState.tsx";
import ConjureTimelineTree from "../../agent_activity/ConjureTimelineTree.tsx";
import ConjureSecretRequestState from "../../secrets/ConjureSecretRequestState.tsx";
import conjurePendingPlan from "../../plan/conjurePendingPlan.tsx";
import ConjureChatGrouping from "../ConjureChatGrouping.tsx";
import conjureAttachmentDrafts from "../conjureAttachmentDrafts.tsx";
import ConjureTodoAgents from "../../agent_activity/ConjureTodoAgents.tsx";
import ConjureRepliedMessage from "../ConjureRepliedMessage.tsx";
import ConjureMessageRowDefault from "ConjureMessageRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import ConjureConnectionStore_mod from "../../connection/ConjureConnectionStore.tsx";
import ConjurePublishStatusStore from "../../publish/ConjurePublishStatusStore.tsx";
import ConjureSettingsStore from "../../settings/ConjureSettingsStore.tsx";
import ConjureChatStore from "../ConjureChatStore.tsx";

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
let ConjureConnectionStore = fn(13218);
({
  ensureConnection: closure_7,
  interruptTurn: closure_8,
  loadOlderHistory: closure_9,
  sendUserMessage: c10,
} = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 0.2;
let c18 = 500;
let c19 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, ,];
let obj = _modDef683(BLACK);
items[1] = _modDef683(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5092);
let obj2 = {
  container: { flex: 1 },
  transcript: { flex: 1 },
  maskSolid: { flex: 1, backgroundColor: BLACK },
  maskFade: { height: 52 },
  transcriptArea: { flex: 1, position: "relative" },
  transcriptContent: null,
  bottomStack: null,
  incompleteNotice: null,
  placeholder: null,
};
const alphaResult = _modDef683(BLACK).alpha(0.2);
obj2.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj2.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.incompleteNotice = {
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
  paddingBottom: nativeDefault.space.PX_8,
};
let obj5 = {
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
  paddingBottom: nativeDefault.space.PX_8,
};
obj2.placeholder = {
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_24,
};
let closure_24 = createStyles.createStyles(obj2);
fn(558);
let obj6 = {
  alignItems: "center",
  justifyContent: "center",
  gap: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_24,
};
const ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function TranscriptFade(children) {
      const cResult = c.c(15);
      children = children.children;
      const tmp3 = closure_24();
      if (obj2.isIOS()) {
        ({ transcript, transcript: transcript2 } = tmp3);
        if (cResult[0] !== tmp3.maskSolid) {
          const obj3 = { style: tmp3.maskSolid };
          const tmp7 = value2(View, obj3);
          cResult[0] = tmp3.maskSolid;
          cResult[1] = tmp7;
          let tmp4 = tmp7;
        } else {
          tmp4 = cResult[1];
        }
        if (cResult[2] !== tmp3.maskFade) {
          const obj4 = { style: tmp3.maskFade, colors: items, locations, start, end };
          const tmp15 = value2(LinearGradientDefault, obj4);
          cResult[2] = tmp3.maskFade;
          cResult[3] = tmp15;
          let tmp8 = tmp15;
        } else {
          tmp8 = cResult[3];
        }
        const _Math = Math;
        const bound = Math.max(0, children.clearance - c19);
        if (cResult[4] !== bound) {
          const obj5 = { style: null };
          const obj6 = { height: bound };
          obj5.style = obj6;
          const tmp22 = value2(View, obj5);
          cResult[4] = bound;
          cResult[5] = tmp22;
          let tmp19 = tmp22;
        } else {
          tmp19 = cResult[5];
        }
        if (cResult[6] === tmp3.transcript) {
          if (cResult[7] === tmp4) {
            if (cResult[8] === tmp8) {
              if (cResult[9] === tmp19) {
                let tmp23 = cResult[10];
              }
              if (cResult[11] === children) {
                if (cResult[12] === tmp3.transcript) {
                  if (cResult[13] === tmp23) {
                    let tmp27 = cResult[14];
                  }
                  return tmp27;
                }
              }
              const obj7 = { style: transcript, maskElement: tmp23, children };
              const tmp30 = value2(_modDef6243, obj7);
              cResult[11] = children;
              cResult[12] = tmp3.transcript;
              cResult[13] = tmp23;
              cResult[14] = tmp30;
              tmp27 = tmp30;
            }
          }
        }
        const obj8 = { style: transcript2, children: null };
        items = [tmp4, tmp8, tmp19];
        obj8.children = items;
        const tmp26 = value3(View, obj8);
        cResult[6] = tmp3.transcript;
        cResult[7] = tmp4;
        cResult[8] = tmp8;
        cResult[9] = tmp19;
        cResult[10] = tmp26;
        tmp23 = tmp26;
      } else {
        return children;
      }
      obj2 = PlatformUtils;
    }
  : function TranscriptFade(children) {
      children = children.children;
      const tmp = closure_24();
      let tmp3 = children;
      if (obj.isIOS()) {
        const obj2 = { style: tmp.transcript, maskElement: null, children: null };
        const obj3 = { style: tmp.transcript, children: null };
        const obj4 = { style: tmp.maskSolid };
        items = [value2(View, obj4), ,];
        const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
        items[1] = value2(LinearGradientDefault, obj5);
        const obj6 = { style: null };
        const obj7 = { height: null };
        const _Math = Math;
        obj7.height = Math.max(0, children.clearance - c19);
        obj6.style = obj7;
        items[2] = value2(View, obj6);
        obj3.children = items;
        obj2.maskElement = value3(View, obj3);
        obj2.children = children;
        tmp3 = value2(_modDef6243, obj2);
      }
      return tmp3;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeChat(projectId) {
      const cResult = projectId(stateFromStores[13]).c(259);
      projectId = projectId.projectId;
      ({ transcriptTopInset, onRestoreVersion } = projectId);
      const hidden = projectId.hidden;
      closure_24();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [stateFromStores10];
        const fn = function w() {
          return "active" === stateFromStores10.getState();
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp10 = items1;
        tmp8 = items;
        tmp9 = fn;
      } else {
        [tmp8, tmp9, tmp10] = cResult;
      }
      let obj = projectId(stateFromStores[13]);
      stateFromStores = projectId(stateFromStores[14]).useStateFromStores(tmp8, tmp9, tmp10);
      onRestoreVersion(stateFromStores[15])(projectId);
      const bottom = onRestoreVersion(tmp4[16])().bottom;
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === projectId) {
          let tmp14 = cResult[5];
          let tmp15 = cResult[6];
        }
        const effect = stateFromStores3.useEffect(tmp14, tmp15);
        const ackConjureProjectWhileViewing = tmp2(tmp4[17]).useAckConjureProjectWhileViewing(projectId);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const items2 = [ConjureChatStore];
          cResult[7] = items2;
          let tmp20 = items2;
        } else {
          tmp20 = cResult[7];
        }
        if (cResult[8] !== projectId) {
          class U {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
          const items3 = [projectId];
          cResult[8] = projectId;
          cResult[9] = items3;
          cResult[10] = U;
          let tmp23 = U;
          const tmp22 = items3;
        } else {
          class U {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
          tmp23 = cResult[10];
        }
        let obj3 = stateFromStores3;
        const tmp2Result15 = tmp2(tmp4[17]);
        const stateFromStores1 = tmp2(tmp4[14]).useStateFromStores(tmp20, tmp23, tmp22);
        const _Symbol2 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
          const items4 = [ConjurePublishStatusStore];
          cResult[11] = items4;
          const tmp27 = items4;
        } else {
          class U {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
        }
        if (cResult[12] !== projectId) {
          class U {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
          const items5 = [projectId];
          cResult[12] = projectId;
          cResult[13] = tmp30;
          cResult[14] = items5;
          let tmp29 = items5;
        } else {
          class U {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
          tmp29 = cResult[14];
        }
        const tmp2Result16 = tmp2(tmp4[14]);
        const stateFromStores2 = tmp2(tmp4[14]).useStateFromStores(tmp27, tmp30, tmp29);
        if (cResult[15] === stateFromStores1) {
          class U {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
          _slicedToArray = tmp34;
          const _Symbol3 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class U {
              constructor() {
                return closure_14.getMessages(projectId);
              }
            }
            const items6 = [ConjureChatStore];
            cResult[18] = items6;
            const tmp38 = items6;
          } else {
            class U {
              constructor() {
                return closure_14.getMessages(projectId);
              }
            }
          }
          if (cResult[19] !== projectId) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items7 = [projectId];
            cResult[19] = projectId;
            cResult[20] = Z;
            cResult[21] = items7;
            let tmp40 = items7;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            tmp40 = cResult[21];
          }
          stateFromStores3 = tmp2(tmp4[14]).useStateFromStores(tmp38, Z, tmp40);
          const _Symbol4 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items8 = [ConjureChatStore];
            cResult[22] = items8;
            const tmp44 = items8;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
          }
          if (cResult[23] !== projectId) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items9 = [projectId];
            cResult[23] = projectId;
            cResult[24] = tmp47;
            cResult[25] = items9;
            let tmp46 = items9;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            tmp46 = cResult[25];
          }
          const tmp2Result18 = tmp2(tmp4[14]);
          const stateFromStores4 = tmp2(tmp4[14]).useStateFromStores(tmp44, tmp47, tmp46);
          const _Symbol5 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items10 = [ConjureChatStore];
            cResult[26] = items10;
            const tmp51 = items10;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
          }
          if (cResult[27] !== projectId) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items11 = [projectId];
            cResult[27] = projectId;
            cResult[28] = tmp54;
            cResult[29] = items11;
            let tmp53 = items11;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            tmp53 = cResult[29];
          }
          const tmp2Result19 = tmp2(tmp4[14]);
          const stateFromStores5 = tmp2(tmp4[14]).useStateFromStores(tmp51, tmp54, tmp53);
          const _Symbol6 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items12 = [ConjureChatStore];
            cResult[30] = items12;
            const tmp58 = items12;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
          }
          if (cResult[31] !== projectId) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items13 = [projectId];
            cResult[31] = projectId;
            cResult[32] = tmp61;
            cResult[33] = items13;
            let tmp60 = items13;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            tmp60 = cResult[33];
          }
          const tmp2Result20 = tmp2(tmp4[14]);
          const stateFromStores6 = tmp2(tmp4[14]).useStateFromStores(tmp58, tmp61, tmp60);
          const _Symbol7 = Symbol;
          class O {
            constructor() {
              if (closure_2) {
                tmp = ensureConnection;
                tmp2 = projectId;
                tmp3 = ensureConnection(projectId);
              }
              return;
            }
          }
          if (cResult[35] !== projectId) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items14 = [projectId];
            cResult[35] = projectId;
            cResult[36] = tmp69;
            cResult[37] = items14;
            let tmp68 = items14;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            tmp68 = cResult[37];
          }
          const tmp2Result21 = tmp2(tmp4[14]);
          const stateFromStores7 = tmp2(tmp4[14]).useStateFromStores(tmp66, tmp69, tmp68);
          const tmp2Result22 = tmp2(tmp4[14]);
          [tmp76, tmp77] = obj3.useState(null);
          View = tmp77;
          let tmp78 = null == tmp76;
          if (!tmp78) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            if (stateFromStores3) {
              class Z {
                constructor() {
                  return closure_14.isThinking(projectId);
                }
              }
            }
            tmp78 = tmp79;
          }
          if (!tmp78) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
          }
          if (cResult[38] !== projectId) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            cResult[38] = projectId;
            cResult[39] = tmp81;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
          }
          if (stateFromStores3) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
          }
          const _Symbol8 = Symbol;
          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
            const items15 = [ConjureConnectionStore];
            cResult[40] = items15;
            const tmp83 = items15;
          } else {
            class Z {
              constructor() {
                return closure_14.isThinking(projectId);
              }
            }
          }
          if (cResult[41] !== projectId) {
            class Te {
              constructor() {
                return closure_11.getConnState(projectId);
              }
            }
            const items16 = [projectId];
            cResult[41] = projectId;
            cResult[42] = Te;
            cResult[43] = items16;
            let tmp85 = items16;
          } else {
            class Te {
              constructor() {
                return closure_11.getConnState(projectId);
              }
            }
            tmp85 = cResult[43];
          }
          const tmp75 = _slicedToArray(obj3.useState(null), 2);
          const stateFromStores8 = tmp2(tmp4[14]).useStateFromStores(tmp83, Te, tmp85);
          const _Symbol9 = Symbol;
          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
            class Te {
              constructor() {
                return closure_11.getConnState(projectId);
              }
            }
            const items17 = [ConjureConnectionStore];
            cResult[44] = items17;
            const tmp89 = items17;
          } else {
            class Te {
              constructor() {
                return closure_11.getConnState(projectId);
              }
            }
          }
          if (cResult[45] !== projectId) {
            class Fe {
              constructor() {
                return closure_11.isChatStopped(projectId);
              }
            }
            const items18 = [projectId];
            cResult[45] = projectId;
            cResult[46] = Fe;
            cResult[47] = items18;
            let tmp91 = items18;
          } else {
            class Fe {
              constructor() {
                return closure_11.isChatStopped(projectId);
              }
            }
            tmp91 = cResult[47];
          }
          const tmp2Result23 = tmp2(tmp4[14]);
          const stateFromStores9 = tmp2(tmp4[14]).useStateFromStores(tmp89, Fe, tmp91);
          const _Symbol10 = Symbol;
          if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
            class Fe {
              constructor() {
                return closure_11.isChatStopped(projectId);
              }
            }
            const items19 = [ConjureChatStore];
            cResult[48] = items19;
            const tmp95 = items19;
          } else {
            class Fe {
              constructor() {
                return closure_11.isChatStopped(projectId);
              }
            }
          }
          if (cResult[49] !== projectId) {
            class Fe {
              constructor() {
                return closure_11.isChatStopped(projectId);
              }
            }
            const items20 = [projectId];
            cResult[49] = projectId;
            cResult[50] = tmp98;
            cResult[51] = items20;
            let tmp97 = items20;
          } else {
            class Fe {
              constructor() {
                return closure_11.isChatStopped(projectId);
              }
            }
            tmp97 = cResult[51];
          }
          const tmp2Result24 = tmp2(tmp4[14]);
          stateFromStores10 = tmp2(tmp4[14]).useStateFromStores(tmp95, tmp98, tmp97);
          const _Symbol11 = Symbol;
          if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
            class Fe {
              constructor() {
                return closure_11.isChatStopped(projectId);
              }
            }
            const items21 = [ConjureChatStore];
            cResult[52] = items21;
            const tmp102 = items21;
          } else {
            class Fe {
              constructor() {
                return closure_11.isChatStopped(projectId);
              }
            }
          }
          if (cResult[53] !== projectId) {
            class Oe {
              constructor() {
                return closure_14.isHistoryUnavailable(projectId);
              }
            }
            const items22 = [projectId];
            cResult[53] = projectId;
            cResult[54] = Oe;
            cResult[55] = items22;
            let tmp104 = items22;
          } else {
            class Oe {
              constructor() {
                return closure_14.isHistoryUnavailable(projectId);
              }
            }
            tmp104 = cResult[55];
          }
          const tmp2Result25 = tmp2(tmp4[14]);
          const stateFromStores11 = tmp2(tmp4[14]).useStateFromStores(tmp102, Oe, tmp104);
          if (cResult[56] === stateFromStores8) {
            class Oe {
              constructor() {
                return closure_14.isHistoryUnavailable(projectId);
              }
            }
          }
          const tmp2Result26 = tmp2(tmp4[14]);
          let obj2 = {
            historyLoaded: stateFromStores10,
            historyUnavailable: stateFromStores11,
            connState: stateFromStores8,
          };
          const chatEmptyStateResult = tmp2(tmp4[19]).chatEmptyState(obj2);
          cResult[56] = stateFromStores8;
          cResult[57] = stateFromStores10;
          cResult[58] = stateFromStores11;
          cResult[59] = chatEmptyStateResult;
          const tmp2Result27 = tmp2(tmp4[19]);
        }
        const tmp2Result17 = tmp2(tmp4[14]);
        const withLivePublishCardResult = tmp2(tmp4[18]).withLivePublishCard(stateFromStores1, stateFromStores2);
        cResult[15] = stateFromStores1;
        cResult[16] = stateFromStores2;
        cResult[17] = withLivePublishCardResult;
        const tmp2Result28 = tmp2(tmp4[18]);
        tmp34 = withLivePublishCardResult;
      }
      class O {
        constructor() {
          if (closure_2) {
            tmp = ensureConnection;
            tmp2 = projectId;
            tmp3 = ensureConnection(projectId);
          }
          return;
        }
      }
      const items23 = [stateFromStores, projectId];
      cResult[3] = stateFromStores;
      cResult[4] = projectId;
      cResult[5] = O;
      cResult[6] = items23;
      tmp15 = items23;
      tmp14 = O;
      const tmp2Result = projectId(stateFromStores[14]);
    }
  : function ConjureNativeChat(projectId) {
      projectId = projectId.projectId;
      let num = projectId.transcriptTopInset;
      if (num === undefined) {
        num = 0;
      }
      ({ onRestoreVersion: importDefault, hidden } = projectId);
      if (hidden === undefined) {
        hidden = false;
      }
      let stateFromStores;
      let stateFromStores2;
      let stateFromStores3;
      let stateFromStores10;
      let render_id;
      let render_id1;
      let set;
      let stateFromStores12;
      let memo1;
      c14 = undefined;
      c15 = undefined;
      let onToggleChecklist;
      autoscrollToBottomThreshold = undefined;
      c18 = undefined;
      fadingEdgeLength = undefined;
      let onTogglePlan;
      closure_21 = undefined;
      closure_22 = undefined;
      let onPickIdea;
      let conjureReminder;
      closure_25 = undefined;
      closure_26 = undefined;
      c27 = undefined;
      c28 = undefined;
      let canSend;
      let memo2;
      let joined;
      let memo4;
      let memo5;
      c34 = undefined;
      c35 = undefined;
      let bound;
      let ref;
      let callback2;
      let callback3;
      c45 = undefined;
      let callback6;
      closure_49 = undefined;
      let onJumpToReplied;
      let tmp = conjureReminder();
      items = [stateFromStores3];
      stateFromStores = projectId(stateFromStores[14]).useStateFromStores(
        items,
        () => "active" === stateFromStores3.getState(),
        [],
      );
      const tmp6 = require("useConjureIncompleteAppNotice")(projectId);
      let obj2 = stateFromStores2;
      const items1 = [stateFromStores, projectId];
      const effect = stateFromStores2.useEffect(() => {
        if (stateFromStores) {
          React5(projectId);
        }
      }, items1);
      let obj = projectId(stateFromStores[14]);
      const ackConjureProjectWhileViewing = projectId(stateFromStores[17]).useAckConjureProjectWhileViewing(projectId);
      let obj3 = projectId(stateFromStores[17]);
      const items2 = [c14];
      const items3 = [projectId];
      const stateFromStores1 = projectId(stateFromStores[14]).useStateFromStores(
        items2,
        () => ConjureChatStore.getMessages(projectId),
        items3,
      );
      const obj4 = projectId(stateFromStores[14]);
      const items4 = [stateFromStores12];
      const items5 = [projectId];
      stateFromStores2 = projectId(stateFromStores[14]).useStateFromStores(
        items4,
        () => {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
          let state;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        },
        items5,
      );
      const items6 = [stateFromStores1, stateFromStores2];
      const memo = stateFromStores2.useMemo(
        () => conjurePublishCard.withLivePublishCard(stateFromStores1, stateFromStores2),
        items6,
      );
      const obj5 = projectId(stateFromStores[14]);
      const items7 = [c14];
      const items8 = [projectId];
      stateFromStores3 = projectId(stateFromStores[14]).useStateFromStores(
        items7,
        () => ConjureChatStore.isThinking(projectId),
        items8,
      );
      const obj6 = projectId(stateFromStores[14]);
      const items9 = [c14];
      const items10 = [projectId];
      const stateFromStores4 = projectId(stateFromStores[14]).useStateFromStores(
        items9,
        () => ConjureChatStore.isCompacting(projectId),
        items10,
      );
      const obj7 = projectId(stateFromStores[14]);
      const items11 = [c14];
      const items12 = [projectId];
      const stateFromStores5 = projectId(stateFromStores[14]).useStateFromStores(
        items11,
        () => ConjureChatStore.isSaving(projectId),
        items12,
      );
      const obj8 = projectId(stateFromStores[14]);
      const items13 = [c14];
      const items14 = [projectId];
      const stateFromStores6 = projectId(stateFromStores[14]).useStateFromStores(
        items13,
        () => ConjureChatStore.getThinkingActivity(projectId),
        items14,
      );
      const obj9 = projectId(stateFromStores[14]);
      const items15 = [c14];
      const items16 = [projectId];
      const stateFromStores7 = projectId(stateFromStores[14]).useStateFromStores(
        items15,
        () => ConjureChatStore.getProjectUsage(projectId),
        items16,
      );
      const obj10 = projectId(stateFromStores[14]);
      [tmp19, tmp20] = stateFromStores1(stateFromStores2.useState(null), 2);
      c7 = tmp20;
      let tmp21 = null == tmp19;
      if (!tmp21) {
        let tmp22 = stateFromStores3;
        if (stateFromStores3) {
          tmp22 = tmp19 === projectId;
        }
        tmp21 = tmp22;
      }
      if (!tmp21) {
        tmp20(null);
      }
      const items17 = [projectId];
      let tmp25 = stateFromStores3;
      const callback = obj2.useCallback(
        () =>
          _undefined((arg0) => {
            let tmp = null;
            if (arg0 !== projectId) {
              tmp = projectId;
            }
            return tmp;
          }),
        items17,
      );
      if (stateFromStores3) {
        tmp25 = tmp19 === projectId;
      }
      let tmp18 = stateFromStores1(stateFromStores2.useState(null), 2);
      const items18 = [set];
      const items19 = [projectId];
      const stateFromStores8 = projectId(stateFromStores[14]).useStateFromStores(
        items18,
        () => ConjureConnectionStore.getConnState(projectId),
        items19,
      );
      const tmp2Result = projectId(stateFromStores[14]);
      const items20 = [set];
      const items21 = [projectId];
      const stateFromStores9 = projectId(stateFromStores[14]).useStateFromStores(
        items20,
        () => ConjureConnectionStore.isChatStopped(projectId),
        items21,
      );
      const tmp2Result16 = projectId(stateFromStores[14]);
      const items22 = [c14];
      const items23 = [projectId];
      stateFromStores10 = projectId(stateFromStores[14]).useStateFromStores(
        items22,
        () => ConjureChatStore.hasLoadedHistory(projectId),
        items23,
      );
      const tmp2Result17 = projectId(stateFromStores[14]);
      const items24 = [c14];
      const items25 = [projectId];
      const stateFromStores11 = projectId(stateFromStores[14]).useStateFromStores(
        items24,
        () => ConjureChatStore.isHistoryUnavailable(projectId),
        items25,
      );
      const tmp2Result18 = projectId(stateFromStores[14]);
      const chatEmptyStateResult = projectId(stateFromStores[19]).chatEmptyState({
        historyLoaded: stateFromStores10,
        historyUnavailable: stateFromStores11,
        connState: stateFromStores8,
      });
      render_id = null;
      if (memo.length > 0) {
        render_id = memo[memo.length - 1].render_id;
      }
      const findLastResult = memo.findLast((role) => {
        let turnSettledResult = "assistant" === role.role;
        if (turnSettledResult) {
          turnSettledResult = projectId(stateFromStores[20]).turnSettled(role);
          const obj = projectId(stateFromStores[20]);
        }
        return turnSettledResult;
      });
      render_id1 = undefined;
      if (findLastResult != null) {
        render_id1 = findLastResult.render_id;
      }
      if (render_id1 == null) {
        render_id1 = null;
      }
      const items26 = [memo];
      set = obj2.useMemo(() => ConjureTodoState.supersededChecklists(memo), items26);
      const tmp2Result19 = projectId(stateFromStores[19]);
      const items27 = [memo1];
      const items28 = [projectId];
      stateFromStores12 = projectId(stateFromStores[14]).useStateFromStores(
        items27,
        () => {
          const settings = ConjureSettingsStore.getSettings(projectId);
          let secrets;
          if (settings != null) {
            secrets = settings.secrets;
          }
          return secrets;
        },
        items28,
      );
      const items29 = [memo, stateFromStores12];
      memo1 = obj2.useMemo(() => ConjureSecretRequestState.secretRequestStatuses(memo, stateFromStores12), items29);
      const tmp2Result20 = projectId(stateFromStores[14]);
      [c14, c15] = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      onToggleChecklist = obj2.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined2((get) => projectId(stateFromStores[21]).toggleChecklist(get, closure_0, closure_1));
      }, []);
      const items30 = [memo];
      autoscrollToBottomThreshold = obj2.useMemo(() => conjurePendingPlan.planVersions(memo), items30);
      const tmp17Result = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      [c18, c19] = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      onTogglePlan = obj2.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined3((get) => projectId(stateFromStores[23]).togglePlanCard(get, closure_0, closure_1));
      }, []);
      const items31 = [memo];
      closure_21 = obj2.useMemo(
        () =>
          ConjureChatGrouping.groupChatRows(
            memo.map((key) => {
              const obj = { key: key.render_id, actor: null, authorId: null, boundary: null, separate: null };
              let tmp = null;
              if ("context_boundary" !== key.kind) {
                let str = "assistant";
                if ("user" === key.role) {
                  str = "user";
                }
                tmp = str;
              }
              obj.actor = tmp;
              let user_id;
              if ("user" === key.role) {
                user_id = key.user_id;
              }
              obj.authorId = user_id;
              render_id = undefined;
              if ("user" !== key.role) {
                render_id = key.render_id;
              }
              obj.boundary = render_id;
              let tmp4 = "assistant" === key.role;
              if (tmp4) {
                let tmp5 = null != key.proposal || null != key.clarification;
                if (!tmp5) {
                  tmp5 = "side_reply" === key.kind;
                }
                if (!tmp5) {
                  tmp5 = null != key.in_reply_to;
                }
                tmp4 = tmp5;
              }
              obj.separate = tmp4;
              return obj;
            }),
          ),
        items31,
      );
      const items32 = [projectId];
      closure_22 = obj2.useCallback(() => {
        const intl = util.intl;
        conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3849.EMgIuY));
      }, items32);
      const items33 = [projectId];
      onPickIdea = obj2.useCallback((implementation_prompt) => {
        conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
      }, items33);
      const tmp17Result7 = stateFromStores1(
        obj2.useState(() => new Map()),
        2,
      );
      [tmp39, tmp40] = stateFromStores1(require("useConjureDraftHasText")(projectId), 2);
      const tmp17Result8 = stateFromStores1(require("useConjureDraftHasText")(projectId), 2);
      conjureReminder = projectId(stateFromStores[29]).useConjureReminder(projectId, memo, tmp39);
      const items34 = [projectId];
      closure_25 = obj2.useCallback(() => {
        const intl = util.intl;
        collapsed(projectId, intl.string(_modDef3849["t5CN3+"]));
      }, items34);
      const items35 = [projectId];
      closure_26 = obj2.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
        conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, {
          clarificationAnswers,
          attachments,
        });
      }, items35);
      const tmp2Result21 = projectId(stateFromStores[29]);
      [c27, c28] = stateFromStores1(obj2.useState(null), 2);
      let tmp44 = tmp43;
      if ("open" !== stateFromStores8) {
        tmp44 = "connecting" === stateFromStores8;
      }
      if (tmp44) {
        tmp44 = !stateFromStores9;
      }
      canSend = tmp44;
      const items36 = [memo];
      memo2 = obj2.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items36);
      const tmp17Result9 = stateFromStores1(obj2.useState(null), 2);
      joined = Array.from(memo1, (arg0) => {
        [tmp, tmp2] = arg0;
        return "" + tmp + ":" + tmp2;
      }).join(",");
      const items37 = [conjureReminder, tmp44, memo2, joined];
      const items38 = [memo];
      const memo3 = obj2.useMemo(
        () => ({ reminder: conjureReminder, canSend, pendingPlanId: memo2, secretStatusesKey: joined }),
        items37,
      );
      memo4 = obj2.useMemo(() => {
        let diff = memo.length - 1;
        if (0 <= diff) {
          while (true) {
            let tmp3 = memo[diff];
            if ("assistant" === tmp3.role) {
              let obj = conjureChatTurns;
              if (!obj.turnSettled(tmp3)) {
                break;
              }
            }
            diff = diff - 1;
          }
          return diff;
        }
        return null;
      }, items38);
      const items39 = [memo, memo4];
      memo5 = obj2.useMemo(() => {
        let tmp2;
        if (null != memo4) {
          tmp2 = memo[tmp];
        }
        let timelineTree = null;
        if (null != tmp2) {
          timelineTree = ConjureTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
        }
        return timelineTree;
      }, items39);
      let tmp50 = null != memo5;
      if (tmp50) {
        tmp50 = memo5.steps.length > 0 || memo5.tasks.length > 0;
        const tmp51 = memo5.steps.length > 0 || memo5.tasks.length > 0;
      }
      const items40 = [memo5];
      let memo6 = obj2.useMemo(() => {
        let currentStepResult;
        if (null != memo5) {
          currentStepResult = ConjureTimelineTree.currentStep(tmp.steps);
        }
        let describeNodeResult = null;
        if (null != currentStepResult) {
          describeNodeResult = ConjureTimelineTree.describeNode(currentStepResult);
        }
        return describeNodeResult;
      }, items40);
      const arr = Array.from(memo1, (arg0) => {
        [tmp, tmp2] = arg0;
        return "" + tmp + ":" + tmp2;
      });
      [obj19, c34] = stateFromStores1(obj2.useState(null), 2);
      const tmp17Result10 = stateFromStores1(obj2.useState(null), 2);
      [tmp55, c35] = stateFromStores1(obj2.useState(64), 2);
      const callback1 = obj2.useCallback((nativeEvent) => {
        closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
        _undefined5((arg0) => {
          let tmp = closure_0;
          if (arg0 === closure_0) {
            tmp = arg0;
          }
          return tmp;
        });
      }, []);
      const tmp17Result11 = stateFromStores1(obj2.useState(64), 2);
      bound = tmp55;
      if (!tmp2Result22.isIOS()) {
        let _Math = Math;
        bound = Math.min(tmp55, fadingEdgeLength);
      }
      obj2.useRef(null);
      ref = obj2.useRef(null);
      obj2.useRef(false);
      obj2.useRef(true);
      obj2.useRef(0);
      obj2.useRef(0);
      callback2 = obj2.useCallback(() => {
        const animationFrame = requestAnimationFrame(() => {
          if (ref2.current) {
            const current = ref.current;
            if (current != null) {
              current.scrollToEnd({ animated: false });
            }
          }
        });
      }, []);
      callback3 = obj2.useCallback(() => {
        const timestamp = Date.now();
        closure_41.current = timestamp + c18;
        closure_42.current = timestamp + 2000;
      }, []);
      const items41 = [projectId, callback3];
      const effect1 = obj2.useEffect(() => {
        closure_40.current = true;
        callback3();
      }, items41);
      const items42 = [stateFromStores10, callback3];
      const effect2 = obj2.useEffect(() => {
        if (stateFromStores10) {
          callback3();
        }
      }, items42);
      const items43 = [projectId];
      const callback4 = obj2.useCallback(() => {
        options(projectId);
      }, items43);
      const callback5 = obj2.useCallback(() => {
        closure_40.current = false;
      }, []);
      tmp2Result22 = projectId(stateFromStores[31]);
      [tmp67, c45] = stateFromStores1(obj2.useState(false), 2);
      obj2.useRef(null);
      obj2.useRef(0);
      callback6 = obj2.useCallback(() => {
        const current = ref6.current;
        const current2 = ref.current;
        if (null != current) {
          const current3 = ref.current;
          let layout;
          if (current3 != null) {
            layout = current3.getLayout(current);
          }
        }
        let tmp5 = null != current2;
        if (tmp5) {
          tmp5 = null != tmp;
        }
        if (tmp5) {
          tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref7.current;
        }
        _undefined(tmp5);
      }, []);
      const items44 = [callback6];
      const items45 = [callback2, callback6];
      const callback7 = obj2.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        closure_38.current = {
          offsetY: nativeEvent.contentOffset.y,
          viewportHeight: nativeEvent.layoutMeasurement.height,
          contentHeight: nativeEvent.contentSize.height,
        };
        callback6();
      }, items44);
      const callback8 = obj2.useCallback((arg0, contentHeight) => {
        const timestamp = Date.now();
        let current = ref3.current;
        if (current) {
          current = timestamp < ref4.current;
        }
        if (current) {
          const _Math = Math;
          ref4.current = Math.min(timestamp + c18, ref5.current);
          callback2();
        }
        const current2 = ref.current;
        if (null != current2) {
          if (current2.contentHeight - current2.offsetY - current2.viewportHeight <= c17 * current2.viewportHeight) {
            const obj2 = {};
            const merged = Object.assign(current2);
            obj2.contentHeight = contentHeight;
            const _Math2 = Math;
            obj2.offsetY = Math.max(0, contentHeight - current2.viewportHeight);
            let obj = obj2;
          } else {
            obj = {};
            const merged1 = Object.assign(current2);
            obj.contentHeight = contentHeight;
          }
          tmp8.current = obj;
          if (ref2.current) {
            tmp15.current = false;
            const current3 = ref.current;
            if (current3 != null) {
              current3.scrollToEnd({ animated: true });
            }
          }
          callback6();
        }
      }, items45);
      const items46 = [callback6];
      const memo7 = obj2.useMemo(
        () => ({ itemVisiblePercentThreshold: projectId(stateFromStores[32]).MIN_VISIBLE_PERCENT }),
        [],
      );
      const callback9 = obj2.useCallback((arg0) => {
        set = new Set();
        const iter = arg0.viewableItems[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (null != nextResult.key) {
            let addResult = set.add(tmp2.key);
          }
          continue;
        }
        _undefined4(set);
        callback6();
      }, items46);
      if (stateFromStores5) {
        const intl3 = tmp2(tmp3[26]).intl;
        memo6 = intl3.string(require("../../intl/ConjureUntranslated.messages.js").mKK6wB);
      } else if (stateFromStores4) {
        const intl2 = tmp2(tmp3[26]).intl;
        memo6 = intl2.string(require("../../intl/ConjureUntranslated.messages.js").xnCAaP);
      } else if (memo6 == null) {
        let intl = tmp2(tmp3[26]).intl;
        memo6 = intl.string(require("../../intl/ConjureUntranslated.messages.js").L9EDub);
      }
      const items47 = [memo, memo4];
      let tmp74;
      const memo8 = obj2.useMemo(() => {
        if (null == memo4) {
          return null;
        } else if (null == memo[tmp]) {
          return null;
        } else {
          let latestTodosResult = ConjureTimelineTree.latestTodos(tmp3.steps);
          if (null == latestTodosResult) {
            let todos = null;
            if (null != tmp3.todos) {
              todos = null;
              if (tmp3.todos.length > 0) {
                todos = tmp3.todos;
              }
            }
            latestTodosResult = todos;
          }
          return latestTodosResult;
        }
      }, items47);
      if (null != memo4) {
        tmp74 = memo[memo4];
      }
      let checklistLiveResult = null == tmp74;
      if (!checklistLiveResult) {
        checklistLiveResult = tmp2(tmp3[21]).checklistLive(tmp74);
        const tmp2Result23 = tmp2(tmp3[21]);
      }
      if (null != tmp74) {
        const tmp2Result24 = tmp2(tmp3[33]);
        const conjureTurnStartedAtResult = tmp2(tmp3[33]).conjureTurnStartedAt(tmp74);
      }
      const items48 = [memo5];
      let tmp78;
      const memo9 = obj2.useMemo(() => {
        if (null != memo5) {
          let runningTodoAgentsResult = ConjureTodoAgents.runningTodoAgents(tmp.tasks);
        } else {
          runningTodoAgentsResult = [];
        }
        return runningTodoAgentsResult;
      }, items48);
      if (null != memo4) {
        let render_id2;
        if (memo[memo4] != null) {
          render_id2 = tmp79.render_id;
        }
        tmp78 = render_id2;
      }
      let tmp81 = null != tmp78;
      if (tmp81) {
        tmp81 = (null != obj19 && !obj19.has(tmp78)) || tmp67;
        const tmp82 = (null != obj19 && !obj19.has(tmp78)) || tmp67;
      }
      let tmp83 = null;
      if (stateFromStores3) {
        tmp83 = null;
        if (tmp50) {
          tmp83 = null;
          if (tmp81) {
            tmp83 = memo6;
          }
        }
      }
      const items49 = [bound, memo4, callback6];
      const effect3 = obj2.useEffect(() => {
        closure_46.current = memo4;
        closure_47.current = bound;
        closure_0 = requestAnimationFrame(callback6);
        return () => cancelAnimationFrame(closure_0);
      }, items49);
      const items50 = [memo];
      closure_49 = obj2.useMemo(() => {
        const map = new Map();
        const iter = memo[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp3 = nextResult;
          if ("assistant" === nextResult.role) {
            if (null != tmp3.in_reply_to) {
              let obj2 = ConjureRepliedMessage;
              let repliedMessageResult = obj2.repliedMessage(memo, tmp3.in_reply_to);
              if (null != repliedMessageResult) {
                let result = map.set(tmp3.render_id, tmp10);
              }
            }
          }
          continue;
        }
        return map;
      }, items50);
      const items51 = [memo];
      onJumpToReplied = obj2.useCallback((arg0) => {
        closure_0 = arg0;
        const findIndexResult = memo.findIndex((id) => id.id === closure_0);
        if (findIndexResult >= 0) {
          closure_40.current = false;
          const current = ref.current;
          if (current != null) {
            const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
            current.scrollToIndex(obj);
          }
        }
      }, items51);
      const items52 = [bound, memo4];
      const items53 = [projectId];
      const callback10 = obj2.useCallback(() => {
        if (null != memo4) {
          closure_40.current = false;
          const current = ref.current;
          if (current != null) {
            const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
            current.scrollToIndex(obj);
          }
        }
      }, items52);
      const items54 = [projectId];
      const callback11 = obj2.useCallback((arg0, arg1) => {
        closure_39.current = true;
        collapsed(projectId, arg0, arg1);
      }, items53);
      let connectionLabelResult = null;
      const callback12 = obj2.useCallback(() => {
        closure_2_8(projectId);
      }, items54);
      if ("open" !== stateFromStores8) {
        connectionLabelResult = tmp2(tmp3[36]).connectionLabel(stateFromStores8);
        const tmp2Result25 = tmp2(tmp3[36]);
      }
      const tmp17Result12 = stateFromStores1(obj2.useState(false), 2);
      const obj11 = { style: tmp.container, children: null };
      const conjureControlActive = projectId(stateFromStores[37]).useConjureControlActive(projectId);
      const items55 = [
        c15(require("ConjureShellGlow"), {
          thinking: stateFromStores3,
          bleedBottom: require("useSafeAreaInsets")().bottom,
        }),
        ,
      ];
      const obj12 = { style: tmp.transcriptArea, children: null };
      const obj13 = { clearance: tmp55, children: null };
      const obj14 = {
        ref,
        fadingEdgeLength,
        removeClippedSubviews: null,
        viewabilityConfig: null,
        onViewableItemsChanged: null,
        onScroll: null,
        onScrollBeginDrag: null,
        onContentSizeChange: null,
        onStartReached: null,
        scrollEventThrottle: 16,
        contentInset: null,
        ListHeaderComponent: null,
        style: null,
        contentContainerStyle: null,
        data: null,
        extraData: null,
        maintainVisibleContentPosition: null,
        keyExtractor: null,
        ListEmptyComponent: null,
        renderItem: null,
      };
      const tmp2Result26 = projectId(stateFromStores[37]);
      const tmp93 = closure_25;
      const tmp2Result27 = projectId(stateFromStores[31]);
      obj14.removeClippedSubviews = projectId(stateFromStores[31]).isIOS() && undefined;
      obj14.viewabilityConfig = memo7;
      obj14.onViewableItemsChanged = callback9;
      obj14.onScroll = callback7;
      obj14.onScrollBeginDrag = callback5;
      obj14.onContentSizeChange = callback8;
      obj14.onStartReached = callback4;
      const tmp94 = projectId(stateFromStores[31]).isIOS() && undefined;
      let tmp95;
      if (tmp2Result28.isIOS()) {
        const obj15 = { top: num };
        tmp95 = obj15;
      }
      obj14.contentInset = tmp95;
      tmp2Result28 = projectId(stateFromStores[31]);
      let tmp92Result = null;
      if (!tmp2Result29.isIOS()) {
        tmp92Result = null;
        if (num > 0) {
          const obj16 = { style: null };
          const obj17 = { height: num };
          obj16.style = obj17;
          tmp92Result = tmp92(tmp91, obj16);
        }
      }
      obj14.ListHeaderComponent = tmp92Result;
      const items56 = [tmp.transcript];
      tmp2Result29 = projectId(stateFromStores[31]);
      const isIOSResult = projectId(stateFromStores[31]).isIOS();
      let tmp98 = !isIOSResult;
      if (!isIOSResult) {
        const obj18 = { marginBottom: tmp55 - bound };
        tmp98 = obj18;
      }
      items56[1] = tmp98;
      obj14.style = items56;
      const items57 = [tmp.transcriptContent];
      const tmp2Result30 = projectId(stateFromStores[31]);
      items57[1] = { paddingBottom: bound + require("native").space.PX_8 };
      obj14.contentContainerStyle = items57;
      obj14.data = memo;
      obj14.extraData = memo3;
      obj14.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
      obj14.keyExtractor = function keyExtractor(render_id) {
        return render_id.render_id;
      };
      let tmp99 = "loading" === chatEmptyStateResult;
      if (tmp99) {
        obj14.ListEmptyComponent = null;
        obj14.renderItem = function renderItem(arg0) {
          ({ item, index } = arg0);
          const obj = {
            projectId,
            message: item,
            groupStart: null,
            first: null,
            isNewest: null,
            hostsReminder: null,
            reminder: null,
            checklistSuperseded: null,
            secretRequestStatus: null,
            checklistExpanded: null,
            onToggleChecklist: null,
            planVersion: null,
            planSuperseded: null,
            planExpanded: null,
            onTogglePlan: null,
            replied: null,
            onJumpToReplied: null,
            onApprovePlan: null,
            onPickIdea: null,
            onAskForIdeas: null,
            onAnswerClarification: null,
            clarificationDismissed: null,
            onDismissClarification: null,
            onRestoreVersion: null,
          };
          let flag = closure_21[index];
          if (flag == null) {
            flag = true;
          }
          obj.groupStart = flag;
          obj.first = 0 === index;
          obj.isNewest = item.render_id === render_id;
          obj.hostsReminder = item.render_id === render_id1;
          let tmp4 = null;
          if (item.render_id === render_id1) {
            tmp4 = conjureReminder;
          }
          obj.reminder = tmp4;
          obj.checklistSuperseded = set.has(item.render_id);
          let str = memo1.get(item.render_id);
          if (str == null) {
            str = "open";
          }
          obj.secretRequestStatus = str;
          const tmp3 = ConjureMessageRowDefault;
          obj.checklistExpanded = ConjureTodoState.checklistExpanded(c14, item.render_id, set.has(item.render_id));
          obj.onToggleChecklist = onToggleChecklist;
          value = closure_17.get(item.render_id);
          let version;
          if (value != null) {
            version = value.version;
          }
          obj.planVersion = version;
          value3 = closure_17.get(item.render_id);
          let superseded;
          if (value3 != null) {
            superseded = value3.superseded;
          }
          obj.planSuperseded = true === superseded;
          value4 = closure_17.get(item.render_id);
          let superseded1;
          if (value4 != null) {
            superseded1 = value4.superseded;
          }
          obj.planExpanded = conjurePendingPlan.planCardExpanded(c18, item.render_id, true === superseded1);
          obj.onTogglePlan = onTogglePlan;
          obj.replied = closure_49.get(item.render_id);
          obj.onJumpToReplied = onJumpToReplied;
          let tmp14;
          if (closure_29) {
            if (item.render_id === memo2) {
              tmp14 = closure_22;
            }
          }
          obj.onApprovePlan = tmp14;
          obj.onPickIdea = onPickIdea;
          let tmp16;
          if (closure_29) {
            tmp16 = closure_25;
          }
          obj.onAskForIdeas = tmp16;
          let tmp17;
          if (closure_29) {
            tmp17 = closure_26;
          }
          obj.onAnswerClarification = tmp17;
          let tmp18 = null != item.clarification;
          if (tmp18) {
            tmp18 = item.clarification.id === c27;
          }
          obj.clarificationDismissed = tmp18;
          obj.onDismissClarification = onDismissClarification;
          let tmp20;
          if (!stateFromStores3) {
            tmp20 = closure_1_1;
          }
          obj.onRestoreVersion = tmp20;
          return value2(tmp3, obj);
        };
        obj13.children = tmp92(tmp2(tmp3[41]).FlashList, obj14);
        const items58 = [tmp92(tmp93, obj13), ,];
        let tmp92Result5 = null;
        if (tmp25) {
          const obj22 = { projectId };
          tmp92Result5 = tmp92(require("ConjureThinkingOverlay"), obj22);
        }
        items58[1] = tmp92Result5;
        let tmp92Result6 = null;
        if (null != tmp83) {
          const obj23 = {
            line: tmp83,
            onJumpToActivity: callback10,
            bottom: require("native").space.PX_12 + tmp55,
            todos: memo8,
            todosLive: checklistLiveResult,
            agents: memo9,
          };
          tmp92Result6 = tmp92(require("ConjureFloatingActivity"), obj23);
          const tmp5Result = require("ConjureFloatingActivity");
        }
        items58[2] = tmp92Result6;
        obj12.children = items58;
        items55[1] = tmp90(tmp91, obj12);
        const obj24 = { style: tmp.bottomStack, onLayout: callback1, children: null };
        const obj25 = {
          projectId,
          thinking: stateFromStores3,
          turnStartedAt: conjureTurnStartedAtResult,
          compacting: stateFromStores4,
          saving: stateFromStores5,
          recalling: null,
          activity: null,
          projectUsage: null,
          connLabel: null,
          controlling: null,
          connFailed: null,
          thinkingOpen: null,
          onToggleThinking: null,
        };
        if (tmp99) {
          tmp99 = 0 === memo.length;
        }
        obj25.recalling = tmp99;
        obj25.activity = stateFromStores6;
        obj25.projectUsage = stateFromStores7;
        obj25.connLabel = connectionLabelResult;
        obj25.controlling = conjureControlActive;
        obj25.connFailed = "failed" === stateFromStores8;
        obj25.thinkingOpen = tmp25;
        obj25.onToggleThinking = callback;
        const items59 = [tmp92(require("ConjureNativeStatusStrip"), obj25), ,];
        let tmp92Result7 = null;
        if (null != tmp6) {
          const obj26 = { style: tmp.incompleteNotice, children: null };
          ({ message: obj46.message, onDismiss: obj46.onDismiss } = tmp6);
          obj26.children = tmp92(tmp2(tmp3[45]).NewInlineNotice, {
            type: "warning",
            role: "status",
            message: null,
            onDismiss: null,
          });
          tmp92Result7 = tmp92(tmp91, obj26);
          const obj27 = { type: "warning", role: "status", message: null, onDismiss: null };
        }
        items59[1] = tmp92Result7;
        const obj28 = {
          projectId,
          canSend: tmp44,
          running: stateFromStores3,
          stopped: stateFromStores9,
          onSend: callback11,
          onInterrupt: null,
          onDraftHasTextChange: null,
          hidden: null,
        };
        let tmp107;
        const tmp5Result3 = require("ConjureNativeStatusStrip");
        if (stateFromStores3) {
          tmp107 = callback12;
        }
        obj28.onInterrupt = tmp107;
        obj28.onDraftHasTextChange = tmp40;
        obj28.hidden = hidden;
        items59[2] = tmp92(require("ConjureNativeComposer"), obj28);
        obj24.children = items59;
        items55[2] = tmp90(tmp91, obj24);
        obj11.children = items55;
        return tmp90(tmp91, obj11);
      } else {
        const obj29 = { style: tmp.placeholder, children: null };
        const intl4 = tmp2(tmp3[26]).intl;
        if ("unavailable" === chatEmptyStateResult) {
          let AyiQEp = require("../../intl/ConjureUntranslated.messages.js").Td4Sf4;
        } else {
          AyiQEp = require("../../intl/ConjureUntranslated.messages.js").AyiQEp;
        }
        const obj30 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
        obj29.children = tmp92(tmp2(tmp3[39]).Text, obj30);
        tmp92(tmp91, obj29);
      }
      const obj20 = { paddingBottom: bound + require("native").space.PX_8 };
      const obj21 = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
    };
