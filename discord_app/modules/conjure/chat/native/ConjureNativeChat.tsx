// === Module 11786: ConjureNativeChat ===

// Module 11786 (ConjureNativeChat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import _modDef3849 from "module_3849" /* 3849 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import _modDef6243 from "module_6243" /* 6243 */;
import conjureChatTurns from "conjureChatTurns" /* 11217 */;
import conjurePublishCard from "conjurePublishCard" /* 11789 */;
import ConjureTodoState from "ConjureTodoState" /* 11791 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 11792 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 11793 */;
import conjurePendingPlan from "conjurePendingPlan" /* 11794 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 11795 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 11796 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 11803 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 11804 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 11809 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 11215 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11230 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 11232 */;
import ConjureChatStore from "ConjureChatStore" /* 11216 */;

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
let ConjureConnectionStore = fn(11215);
({ ensureConnection: closure_7, interruptTurn: closure_8, loadOlderHistory: closure_9, sendUserMessage: c10 } = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 0.2;
let c18 = 500;
let c19 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj = _modDef683(BLACK);
items[1] = _modDef683(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5092);
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, bottomStack: null, notice: null, placeholder: null };
const alphaResult = _modDef683(BLACK).alpha(0.2);
obj2.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj2.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notice = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
let obj5 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj2.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_24 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
const ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? (function TranscriptFade(children) {
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
}) : (function TranscriptFade(children) {
  children = children.children;
  const tmp = closure_24();
  let tmp3 = children;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: null, children: null };
    const obj3 = { style: tmp.transcript, children: null };
    const obj4 = { style: tmp.maskSolid };
    items = [value2(View, obj4), , ];
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
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  const cResult = projectId(stateFromStores[13]).c(259);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  const hidden = projectId.hidden;
  closure_24();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [stateFromStores9];
    const fn = function w() {
      return "active" === stateFromStores9.getState();
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
  onRestoreVersion(stateFromStores[16])(projectId);
  const tmp2Result = projectId(stateFromStores[14]);
  const conjureRemixStartedAt = projectId(stateFromStores[16]).useConjureRemixStartedAt(projectId);
  const bottom = onRestoreVersion(tmp4[17])().bottom;
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === projectId) {
      let tmp16 = cResult[5];
      let tmp17 = cResult[6];
    }
    const effect = stateFromStores3.useEffect(tmp16, tmp17);
    const ackConjureProjectWhileViewing = tmp2(tmp4[18]).useAckConjureProjectWhileViewing(projectId);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      cResult[7] = items2;
      let tmp22 = items2;
    } else {
      tmp22 = cResult[7];
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
      let tmp25 = U;
      const tmp24 = items3;
    } else {
      class U {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp25 = cResult[10];
    }
    const obj4 = stateFromStores3;
    const tmp2Result16 = tmp2(tmp4[18]);
    const stateFromStores1 = tmp2(tmp4[14]).useStateFromStores(tmp22, tmp25, tmp24);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items4 = [ConjurePublishStatusStore];
      cResult[11] = items4;
      const tmp29 = items4;
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
      cResult[13] = tmp32;
      cResult[14] = items5;
      let tmp31 = items5;
    } else {
      class U {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp31 = cResult[14];
    }
    const tmp2Result17 = tmp2(tmp4[14]);
    const stateFromStores2 = tmp2(tmp4[14]).useStateFromStores(tmp29, tmp32, tmp31);
    if (cResult[15] === stateFromStores1) {
      class U {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      _slicedToArray = tmp36;
      const _Symbol3 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items6 = [ConjureChatStore];
        cResult[18] = items6;
        const tmp40 = items6;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[19] !== projectId) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items7 = [projectId];
        cResult[19] = projectId;
        cResult[20] = tmp43;
        cResult[21] = items7;
        let tmp42 = items7;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp42 = cResult[21];
      }
      stateFromStores3 = tmp2(tmp4[14]).useStateFromStores(tmp40, tmp43, tmp42);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        cResult[22] = items8;
        const tmp47 = items8;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items9 = [projectId];
        cResult[23] = projectId;
        cResult[24] = tmp50;
        cResult[25] = items9;
        let tmp49 = items9;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp49 = cResult[25];
      }
      const tmp2Result19 = tmp2(tmp4[14]);
      const stateFromStores4 = tmp2(tmp4[14]).useStateFromStores(tmp47, tmp50, tmp49);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        cResult[26] = items10;
        const tmp54 = items10;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items11 = [projectId];
        cResult[27] = projectId;
        cResult[28] = tmp57;
        cResult[29] = items11;
        let tmp56 = items11;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp56 = cResult[29];
      }
      const tmp2Result20 = tmp2(tmp4[14]);
      const stateFromStores5 = tmp2(tmp4[14]).useStateFromStores(tmp54, tmp57, tmp56);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        cResult[30] = items12;
        const tmp61 = items12;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items13 = [projectId];
        cResult[31] = projectId;
        cResult[32] = tmp64;
        cResult[33] = items13;
        let tmp63 = items13;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp63 = cResult[33];
      }
      const tmp2Result21 = tmp2(tmp4[14]);
      const stateFromStores6 = tmp2(tmp4[14]).useStateFromStores(tmp61, tmp64, tmp63);
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items14 = [ConjureChatStore];
        cResult[34] = items14;
        const tmp68 = items14;
      } else {
        class U {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[35] !== projectId) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        const items15 = [projectId];
        cResult[35] = projectId;
        cResult[36] = Se;
        cResult[37] = items15;
        let tmp70 = items15;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        tmp70 = cResult[37];
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
      const tmp2Result22 = tmp2(tmp4[14]);
      const stateFromStores7 = tmp2(tmp4[14]).useStateFromStores(tmp68, Se, tmp70);
      const tmp2Result23 = tmp2(tmp4[14]);
      [tmp76, tmp77] = obj4.useState(null);
      View = tmp77;
      let tmp78 = null == tmp76;
      if (!tmp78) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        if (stateFromStores3) {
          class Se {
            constructor() {
              return closure_14.getProjectUsage(projectId);
            }
          }
        }
        tmp78 = tmp79;
      }
      if (!tmp78) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
      }
      if (cResult[38] !== projectId) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        cResult[38] = projectId;
        cResult[39] = tmp81;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
      }
      if (stateFromStores3) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        const items16 = [ConjureConnectionStore];
        cResult[40] = items16;
        const tmp83 = items16;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        const items17 = [projectId];
        cResult[41] = projectId;
        cResult[42] = tmp86;
        cResult[43] = items17;
        let tmp85 = items17;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        tmp85 = cResult[43];
      }
      const tmp75 = _slicedToArray(obj4.useState(null), 2);
      const stateFromStores8 = tmp2(tmp4[14]).useStateFromStores(tmp83, tmp86, tmp85);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
        const items18 = [ConjureChatStore];
        cResult[44] = items18;
        const tmp90 = items18;
      } else {
        class Se {
          constructor() {
            return closure_14.getProjectUsage(projectId);
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        const items19 = [projectId];
        cResult[45] = projectId;
        cResult[46] = Pe;
        cResult[47] = items19;
        let tmp92 = items19;
      } else {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        tmp92 = cResult[47];
      }
      const tmp2Result24 = tmp2(tmp4[14]);
      stateFromStores9 = tmp2(tmp4[14]).useStateFromStores(tmp90, Pe, tmp92);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        const items20 = [ConjureChatStore];
        cResult[48] = items20;
        const tmp96 = items20;
      } else {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class He {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        const items21 = [projectId];
        cResult[49] = projectId;
        cResult[50] = He;
        cResult[51] = items21;
        let tmp98 = items21;
      } else {
        class He {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp98 = cResult[51];
      }
      const tmp2Result25 = tmp2(tmp4[14]);
      const stateFromStores10 = tmp2(tmp4[14]).useStateFromStores(tmp96, He, tmp98);
      if (cResult[52] === stateFromStores8) {
        class He {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
      }
      const tmp2Result26 = tmp2(tmp4[14]);
      let obj2 = { historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 };
      const chatEmptyStateResult = tmp2(tmp4[20]).chatEmptyState(obj2);
      cResult[52] = stateFromStores8;
      cResult[53] = stateFromStores9;
      cResult[54] = stateFromStores10;
      cResult[55] = chatEmptyStateResult;
      const tmp2Result27 = tmp2(tmp4[20]);
    }
    const tmp2Result18 = tmp2(tmp4[14]);
    const withLivePublishCardResult = tmp2(tmp4[19]).withLivePublishCard(stateFromStores1, stateFromStores2);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = withLivePublishCardResult;
    const tmp2Result28 = tmp2(tmp4[19]);
    tmp36 = withLivePublishCardResult;
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
  const items22 = [stateFromStores, projectId];
  cResult[3] = stateFromStores;
  cResult[4] = projectId;
  cResult[5] = O;
  cResult[6] = items22;
  tmp17 = items22;
  tmp16 = O;
  const tmp2Result15 = projectId(stateFromStores[16]);
}) : (function ConjureNativeChat(projectId) {
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
  let stateFromStores9;
  let render_id;
  let render_id1;
  let set;
  let stateFromStores11;
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
  stateFromStores = projectId(stateFromStores[14]).useStateFromStores(items, () => "active" === stateFromStores3.getState(), []);
  const tmp6 = require("useConjureIncompleteAppNotice")(projectId);
  const tmp7 = require("useConjureRemixNotice")(projectId);
  let obj = projectId(stateFromStores[14]);
  const conjureRemixStartedAt = projectId(stateFromStores[16]).useConjureRemixStartedAt(projectId);
  let obj3 = stateFromStores2;
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores2.useEffect(() => {
    if (stateFromStores) {
      React5(projectId);
    }
  }, items1);
  let obj2 = projectId(stateFromStores[16]);
  const ackConjureProjectWhileViewing = projectId(stateFromStores[18]).useAckConjureProjectWhileViewing(projectId);
  const obj4 = projectId(stateFromStores[18]);
  const items2 = [c14];
  const items3 = [projectId];
  const stateFromStores1 = projectId(stateFromStores[14]).useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const obj5 = projectId(stateFromStores[14]);
  const items4 = [stateFromStores11];
  const items5 = [projectId];
  stateFromStores2 = projectId(stateFromStores[14]).useStateFromStores(items4, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(projectId);
    let state;
    if (publishStatus != null) {
      state = publishStatus.state;
    }
    if (state == null) {
      state = null;
    }
    return state;
  }, items5);
  const items6 = [stateFromStores1, stateFromStores2];
  const memo = stateFromStores2.useMemo(() => conjurePublishCard.withLivePublishCard(stateFromStores1, stateFromStores2), items6);
  const obj6 = projectId(stateFromStores[14]);
  const items7 = [c14];
  const items8 = [projectId];
  stateFromStores3 = projectId(stateFromStores[14]).useStateFromStores(items7, () => ConjureChatStore.isThinking(projectId), items8);
  const obj7 = projectId(stateFromStores[14]);
  const items9 = [c14];
  const items10 = [projectId];
  const stateFromStores4 = projectId(stateFromStores[14]).useStateFromStores(items9, () => ConjureChatStore.isCompacting(projectId), items10);
  const obj8 = projectId(stateFromStores[14]);
  const items11 = [c14];
  const items12 = [projectId];
  const stateFromStores5 = projectId(stateFromStores[14]).useStateFromStores(items11, () => ConjureChatStore.isSaving(projectId), items12);
  const obj9 = projectId(stateFromStores[14]);
  const items13 = [c14];
  const items14 = [projectId];
  const stateFromStores6 = projectId(stateFromStores[14]).useStateFromStores(items13, () => ConjureChatStore.getThinkingActivity(projectId), items14);
  const obj10 = projectId(stateFromStores[14]);
  const items15 = [c14];
  const items16 = [projectId];
  const stateFromStores7 = projectId(stateFromStores[14]).useStateFromStores(items15, () => ConjureChatStore.getProjectUsage(projectId), items16);
  const obj11 = projectId(stateFromStores[14]);
  [tmp21, tmp22] = stateFromStores1(stateFromStores2.useState(null), 2);
  c7 = tmp22;
  let tmp23 = null == tmp21;
  if (!tmp23) {
    let tmp24 = stateFromStores3;
    if (stateFromStores3) {
      tmp24 = tmp21 === projectId;
    }
    tmp23 = tmp24;
  }
  if (!tmp23) {
    tmp22(null);
  }
  const items17 = [projectId];
  let tmp27 = stateFromStores3;
  const callback = obj3.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items17);
  if (stateFromStores3) {
    tmp27 = tmp21 === projectId;
  }
  let tmp20 = stateFromStores1(stateFromStores2.useState(null), 2);
  const items18 = [set];
  const items19 = [projectId];
  const stateFromStores8 = projectId(stateFromStores[14]).useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const tmp2Result = projectId(stateFromStores[14]);
  const items20 = [c14];
  const items21 = [projectId];
  stateFromStores9 = projectId(stateFromStores[14]).useStateFromStores(items20, () => ConjureChatStore.hasLoadedHistory(projectId), items21);
  const tmp2Result15 = projectId(stateFromStores[14]);
  const items22 = [c14];
  const items23 = [projectId];
  const stateFromStores10 = projectId(stateFromStores[14]).useStateFromStores(items22, () => ConjureChatStore.isHistoryUnavailable(projectId), items23);
  const tmp2Result16 = projectId(stateFromStores[14]);
  const chatEmptyStateResult = projectId(stateFromStores[20]).chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const findLastResult = memo.findLast((role) => {
    let turnSettledResult = "assistant" === role.role;
    if (turnSettledResult) {
      turnSettledResult = projectId(stateFromStores[21]).turnSettled(role);
      const obj = projectId(stateFromStores[21]);
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
  const items24 = [memo];
  set = obj3.useMemo(() => ConjureTodoState.supersededChecklists(memo), items24);
  const tmp2Result17 = projectId(stateFromStores[20]);
  const items25 = [memo1];
  const items26 = [projectId];
  stateFromStores11 = projectId(stateFromStores[14]).useStateFromStores(items25, () => {
    const settings = ConjureSettingsStore.getSettings(projectId);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    return secrets;
  }, items26);
  const items27 = [memo, stateFromStores11];
  memo1 = obj3.useMemo(() => ConjureSecretRequestState.secretRequestStatuses(memo, stateFromStores11), items27);
  const tmp2Result18 = projectId(stateFromStores[14]);
  [c14, c15] = stateFromStores1(obj3.useState(() => new Map()), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(stateFromStores[22]).toggleChecklist(get, closure_0, closure_1));
  }, []);
  const items28 = [memo];
  autoscrollToBottomThreshold = obj3.useMemo(() => conjurePendingPlan.planVersions(memo), items28);
  const tmp19Result = stateFromStores1(obj3.useState(() => new Map()), 2);
  [c18, c19] = stateFromStores1(obj3.useState(() => new Map()), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined3((get) => projectId(stateFromStores[24]).togglePlanCard(get, closure_0, closure_1));
  }, []);
  const items29 = [memo];
  closure_21 = obj3.useMemo(() => ConjureChatGrouping.groupChatRows(memo.map((key) => {
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
  })), items29);
  const items30 = [projectId];
  closure_22 = obj3.useCallback(() => {
    const intl = util.intl;
    conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3849.EMgIuY));
  }, items30);
  const items31 = [projectId];
  onPickIdea = obj3.useCallback((implementation_prompt) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const tmp19Result7 = stateFromStores1(obj3.useState(() => new Map()), 2);
  [tmp40, tmp41] = stateFromStores1(require("useConjureDraftHasText")(projectId), 2);
  const tmp19Result8 = stateFromStores1(require("useConjureDraftHasText")(projectId), 2);
  conjureReminder = projectId(stateFromStores[30]).useConjureReminder(projectId, memo, tmp40);
  const items32 = [projectId];
  closure_25 = obj3.useCallback(() => {
    const intl = util.intl;
    collapsed(projectId, intl.string(_modDef3849["t5CN3+"]));
  }, items32);
  const items33 = [projectId];
  closure_26 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, { clarificationAnswers, attachments });
  }, items33);
  const tmp2Result19 = projectId(stateFromStores[30]);
  [c27, c28] = stateFromStores1(obj3.useState(null), 2);
  let tmp45 = tmp44;
  if ("open" !== stateFromStores8) {
    tmp45 = "connecting" === stateFromStores8;
  }
  canSend = tmp45;
  const items34 = [memo];
  memo2 = obj3.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items34);
  const tmp19Result9 = stateFromStores1(obj3.useState(null), 2);
  joined = Array.from(memo1, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  }).join(",");
  const items35 = [conjureReminder, tmp45, memo2, joined];
  const items36 = [memo];
  const memo3 = obj3.useMemo(() => ({ reminder: conjureReminder, canSend, pendingPlanId: memo2, secretStatusesKey: joined }), items35);
  memo4 = obj3.useMemo(() => {
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
  }, items36);
  const items37 = [memo, memo4];
  memo5 = obj3.useMemo(() => {
    let tmp2;
    if (null != memo4) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      timelineTree = ConjureTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items37);
  let tmp51 = null != memo5;
  if (tmp51) {
    tmp51 = memo5.steps.length > 0 || memo5.tasks.length > 0;
    const tmp52 = memo5.steps.length > 0 || memo5.tasks.length > 0;
  }
  const items38 = [memo5];
  let memo6 = obj3.useMemo(() => {
    let currentStepResult;
    if (null != memo5) {
      currentStepResult = ConjureTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = ConjureTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items38);
  const arr = Array.from(memo1, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  [obj19, c34] = stateFromStores1(obj3.useState(null), 2);
  const tmp19Result10 = stateFromStores1(obj3.useState(null), 2);
  [tmp56, c35] = stateFromStores1(obj3.useState(64), 2);
  const callback1 = obj3.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const tmp19Result11 = stateFromStores1(obj3.useState(64), 2);
  bound = tmp56;
  if (!tmp2Result20.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp56, fadingEdgeLength);
  }
  obj3.useRef(null);
  ref = obj3.useRef(null);
  obj3.useRef(false);
  obj3.useRef(true);
  obj3.useRef(0);
  obj3.useRef(0);
  callback2 = obj3.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback3 = obj3.useCallback(() => {
    const timestamp = Date.now();
    closure_41.current = timestamp + c18;
    closure_42.current = timestamp + 2000;
  }, []);
  const items39 = [projectId, callback3];
  const effect1 = obj3.useEffect(() => {
    closure_40.current = true;
    callback3();
  }, items39);
  const items40 = [stateFromStores9, callback3];
  const effect2 = obj3.useEffect(() => {
    if (stateFromStores9) {
      callback3();
    }
  }, items40);
  const items41 = [projectId];
  const callback4 = obj3.useCallback(() => {
    options(projectId);
  }, items41);
  const callback5 = obj3.useCallback(() => {
    closure_40.current = false;
  }, []);
  tmp2Result20 = projectId(stateFromStores[32]);
  [tmp68, c45] = stateFromStores1(obj3.useState(false), 2);
  obj3.useRef(null);
  obj3.useRef(0);
  callback6 = obj3.useCallback(() => {
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
  const items42 = [callback6];
  const items43 = [callback2, callback6];
  const callback7 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_38.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback6();
  }, items42);
  const callback8 = obj3.useCallback((arg0, contentHeight) => {
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
  }, items43);
  const items44 = [callback6];
  const memo7 = obj3.useMemo(() => ({ itemVisiblePercentThreshold: projectId(stateFromStores[33]).MIN_VISIBLE_PERCENT }), []);
  const callback9 = obj3.useCallback((arg0) => {
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
  }, items44);
  if (stateFromStores5) {
    const intl3 = tmp2(tmp3[27]).intl;
    memo6 = intl3.string(require("module_3849").mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(tmp3[27]).intl;
    memo6 = intl2.string(require("module_3849").xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[27]).intl;
    memo6 = intl.string(require("module_3849").L9EDub);
  }
  const items45 = [memo, memo4];
  let tmp75;
  const memo8 = obj3.useMemo(() => {
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
  }, items45);
  if (null != memo4) {
    tmp75 = memo[memo4];
  }
  let checklistLiveResult = null == tmp75;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(tmp3[22]).checklistLive(tmp75);
    const tmp2Result21 = tmp2(tmp3[22]);
  }
  if (null != tmp75) {
    const tmp2Result22 = tmp2(tmp3[34]);
    const conjureTurnStartedAtResult = tmp2(tmp3[34]).conjureTurnStartedAt(tmp75);
  }
  const items46 = [memo5];
  let tmp79;
  const memo9 = obj3.useMemo(() => {
    if (null != memo5) {
      let runningTodoAgentsResult = ConjureTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items46);
  if (null != memo4) {
    let render_id2;
    if (memo[memo4] != null) {
      render_id2 = tmp80.render_id;
    }
    tmp79 = render_id2;
  }
  let tmp82 = null != tmp79;
  if (tmp82) {
    tmp82 = null != obj19 && !obj19.has(tmp79) || tmp68;
    const tmp83 = null != obj19 && !obj19.has(tmp79) || tmp68;
  }
  let tmp84 = null;
  if (stateFromStores3) {
    tmp84 = null;
    if (tmp51) {
      tmp84 = null;
      if (tmp82) {
        tmp84 = memo6;
      }
    }
  }
  const items47 = [bound, memo4, callback6];
  const effect3 = obj3.useEffect(() => {
    closure_46.current = memo4;
    closure_47.current = bound;
    closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items47);
  const items48 = [memo];
  closure_49 = obj3.useMemo(() => {
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
  }, items48);
  const items49 = [memo];
  onJumpToReplied = obj3.useCallback((arg0) => {
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
  }, items49);
  const items50 = [bound, memo4];
  const items51 = [projectId];
  const callback10 = obj3.useCallback(() => {
    if (null != memo4) {
      closure_40.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items50);
  const items52 = [projectId];
  const callback11 = obj3.useCallback((arg0, arg1) => {
    closure_39.current = true;
    collapsed(projectId, arg0, arg1);
  }, items51);
  let connectionLabelResult = null;
  const callback12 = obj3.useCallback(() => {
    closure_2_8(projectId);
  }, items52);
  if ("open" !== stateFromStores8) {
    connectionLabelResult = tmp2(tmp3[37]).connectionLabel(stateFromStores8);
    const tmp2Result23 = tmp2(tmp3[37]);
  }
  const tmp19Result12 = stateFromStores1(obj3.useState(false), 2);
  const obj12 = { style: tmp.container, children: null };
  const conjureControlActive = projectId(stateFromStores[38]).useConjureControlActive(projectId);
  const items53 = [c15(require("ConjureShellGlow"), { thinking: stateFromStores3, bleedBottom: require("useSafeAreaInsets")().bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: null };
  const obj14 = { clearance: tmp56, children: null };
  const obj15 = { ref, fadingEdgeLength, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onScrollBeginDrag: null, onContentSizeChange: null, onStartReached: null, scrollEventThrottle: 16, contentInset: null, ListHeaderComponent: null, style: null, contentContainerStyle: null, data: null, extraData: null, maintainVisibleContentPosition: null, keyExtractor: null, ListEmptyComponent: null, renderItem: null };
  const tmp2Result24 = projectId(stateFromStores[38]);
  const tmp94 = closure_25;
  const tmp2Result25 = projectId(stateFromStores[32]);
  obj15.removeClippedSubviews = projectId(stateFromStores[32]).isIOS() && undefined;
  obj15.viewabilityConfig = memo7;
  obj15.onViewableItemsChanged = callback9;
  obj15.onScroll = callback7;
  obj15.onScrollBeginDrag = callback5;
  obj15.onContentSizeChange = callback8;
  obj15.onStartReached = callback4;
  const tmp95 = projectId(stateFromStores[32]).isIOS() && undefined;
  let tmp96;
  if (tmp2Result26.isIOS()) {
    const obj16 = { top: num };
    tmp96 = obj16;
  }
  obj15.contentInset = tmp96;
  tmp2Result26 = projectId(stateFromStores[32]);
  let tmp93Result = null;
  if (!tmp2Result27.isIOS()) {
    tmp93Result = null;
    if (num > 0) {
      const obj17 = { style: null };
      const obj18 = { height: num };
      obj17.style = obj18;
      tmp93Result = tmp93(tmp92, obj17);
    }
  }
  obj15.ListHeaderComponent = tmp93Result;
  const items54 = [tmp.transcript, ];
  tmp2Result27 = projectId(stateFromStores[32]);
  const isIOSResult = projectId(stateFromStores[32]).isIOS();
  let tmp99 = !isIOSResult;
  if (!isIOSResult) {
    const obj20 = { marginBottom: tmp56 - bound };
    tmp99 = obj20;
  }
  items54[1] = tmp99;
  obj15.style = items54;
  const items55 = [tmp.transcriptContent, ];
  const tmp2Result28 = projectId(stateFromStores[32]);
  items55[1] = { paddingBottom: bound + require("native").space.PX_8 };
  obj15.contentContainerStyle = items55;
  obj15.data = memo;
  obj15.extraData = memo3;
  obj15.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
  obj15.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  let tmp100 = "loading" === chatEmptyStateResult;
  if (tmp100) {
    obj15.ListEmptyComponent = null;
    obj15.renderItem = function renderItem(arg0) {
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, hostsReminder: null, reminder: null, checklistSuperseded: null, secretRequestStatus: null, checklistExpanded: null, onToggleChecklist: null, planVersion: null, planSuperseded: null, planExpanded: null, onTogglePlan: null, replied: null, onJumpToReplied: null, onApprovePlan: null, onPickIdea: null, onAskForIdeas: null, onAnswerClarification: null, clarificationDismissed: null, onDismissClarification: null, onRestoreVersion: null };
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
    obj14.children = tmp93(tmp2(tmp3[42]).FlashList, obj15);
    const items56 = [tmp93(tmp94, obj14), , ];
    let tmp93Result6 = null;
    if (tmp27) {
      const obj23 = { projectId };
      tmp93Result6 = tmp93(require("ConjureThinkingOverlay"), obj23);
    }
    items56[1] = tmp93Result6;
    let tmp93Result7 = null;
    if (null != tmp84) {
      const obj24 = { line: tmp84, onJumpToActivity: callback10, bottom: require("native").space.PX_12 + tmp56, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
      tmp93Result7 = tmp93(require("ConjureFloatingActivity"), obj24);
      const tmp5Result = require("ConjureFloatingActivity");
    }
    items56[2] = tmp93Result7;
    obj13.children = items56;
    items53[1] = tmp91(tmp92, obj13);
    const obj25 = { style: tmp.bottomStack, onLayout: callback1, children: null };
    const obj26 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: null, activity: null, projectUsage: null, connLabel: null, controlling: null, connFailed: null, thinkingOpen: null, onToggleThinking: null };
    if (tmp100) {
      tmp100 = 0 === memo.length;
    }
    obj26.recalling = tmp100;
    obj26.activity = stateFromStores6;
    obj26.projectUsage = stateFromStores7;
    obj26.connLabel = connectionLabelResult;
    obj26.controlling = conjureControlActive;
    obj26.connFailed = "failed" === stateFromStores8;
    obj26.thinkingOpen = tmp27;
    obj26.onToggleThinking = callback;
    const items57 = [tmp93(require("ConjureNativeStatusStrip"), obj26), , , ];
    let tmp93Result8 = null;
    if (null != tmp7) {
      const obj27 = { style: tmp.notice, children: null };
      ({ message: obj46.message, retry: obj46.action } = tmp7);
      obj27.children = tmp93(tmp2(tmp3[46]).NewInlineNotice, { type: "critical", role: "alert", message: null, action: null });
      tmp93Result8 = tmp93(tmp92, obj27);
      const obj28 = { type: "critical", role: "alert", message: null, action: null };
    }
    items57[1] = tmp93Result8;
    let tmp93Result9 = null;
    if (null != tmp6) {
      const obj29 = { style: tmp.notice, children: null };
      ({ message: obj48.message, onDismiss: obj48.onDismiss } = tmp6);
      obj29.children = tmp93(tmp2(tmp3[46]).NewInlineNotice, { type: "warning", role: "status", message: null, onDismiss: null });
      tmp93Result9 = tmp93(tmp92, obj29);
      const obj30 = { type: "warning", role: "status", message: null, onDismiss: null };
    }
    items57[2] = tmp93Result9;
    const obj31 = { projectId, canSend: tmp45, running: stateFromStores3, onSend: callback11, onInterrupt: null, onDraftHasTextChange: null, hidden: null };
    let tmp109;
    const tmp5Result3 = require("ConjureNativeStatusStrip");
    if (stateFromStores3) {
      tmp109 = callback12;
    }
    obj31.onInterrupt = tmp109;
    obj31.onDraftHasTextChange = tmp41;
    obj31.hidden = hidden;
    items57[3] = tmp93(require("ConjureNativeComposer"), obj31);
    obj25.children = items57;
    items53[2] = tmp91(tmp92, obj25);
    obj12.children = items53;
    return tmp91(tmp92, obj12);
  } else {
    const obj32 = { style: tmp.placeholder, children: null };
    const intl4 = tmp2(tmp3[27]).intl;
    if ("unavailable" === chatEmptyStateResult) {
      let AyiQEp = require("module_3849").Td4Sf4;
    } else {
      AyiQEp = require("module_3849").AyiQEp;
    }
    const obj33 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
    obj32.children = tmp93(tmp2(tmp3[40]).Text, obj33);
    tmp93(tmp92, obj32);
  }
  const obj21 = { paddingBottom: bound + require("native").space.PX_8 };
  const obj22 = { startRenderingFromBottom: true, autoscrollToBottomThreshold };
});