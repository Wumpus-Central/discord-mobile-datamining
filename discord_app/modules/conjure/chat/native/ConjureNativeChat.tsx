// === Module 12388: ConjureNativeChat ===

// Module 12388 (ConjureNativeChat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1125 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import _modDef3864 from "module_3864" /* 3864 */;
import LinearGradientDefault from "LinearGradient" /* 5295 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import _modDef7026 from "module_7026" /* 7026 */;
import conjureChatTurns from "conjureChatTurns" /* 10809 */;
import conjurePublishCard from "conjurePublishCard" /* 12392 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12398 */;
import ConjureTodoState from "ConjureTodoState" /* 12399 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12400 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12401 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12402 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12403 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12404 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12407 */;
import conjureTranscriptScroll from "conjureTranscriptScroll" /* 12411 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12414 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12415 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12441 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10807 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10824 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10826 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;

require = fn;
let View = fn(17).View;
let ConjureConnectionStore = fn(10807);
({ ensureConnection: closure_7, interruptTurn: closure_8, loadOlderHistory: closure_9, sendUserMessage: c10 } = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
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
const createStyles = fn(5005);
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, transcriptHidden: null, bottomStack: null, notices: null, notice: null, placeholder: null };
const alphaResult = _modDef683(BLACK).alpha(0.2);
obj2.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj2.transcriptHidden = { opacity: 0 };
obj2.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notices = { paddingTop: nativeDefault.space.PX_8 };
let obj5 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notice = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
let obj6 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj2.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_24 = createStyles.createStyles(obj2);
fn(558);
let obj7 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
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
          const tmp30 = value2(_modDef7026, obj7);
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
    const tmp26 = constants(View, obj8);
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
    obj2.maskElement = constants(View, obj3);
    obj2.children = children;
    tmp3 = value2(_modDef7026, obj2);
  }
  return tmp3;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  const cResult = projectId(num[13]).c(293);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  const hidden = projectId.hidden;
  num = 0;
  if (undefined !== transcriptTopInset) {
    num = transcriptTopInset;
  }
  onDismissClarification();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [stateFromStores3];
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const items1 = [];
    cResult[0] = items;
    cResult[1] = T;
    cResult[2] = items1;
    tmp5 = items;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  let obj = projectId(num[13]);
  const stateFromStores = projectId(num[14]).useStateFromStores(tmp5, T, tmp7);
  onRestoreVersion(num[15])(projectId);
  onRestoreVersion(num[16])(projectId);
  onRestoreVersion(num[17])(projectId);
  const tmpResult = projectId(num[14]);
  const conjureRemixStartedAt = projectId(num[17]).useConjureRemixStartedAt(projectId);
  const bottom = onRestoreVersion(tmp2[18])().bottom;
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === projectId) {
      let tmp14 = cResult[5];
      let tmp15 = cResult[6];
    }
    const effect = stateFromStores1.useEffect(tmp14, tmp15);
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const ackConjureProjectWhileViewing = obj5.useAckConjureProjectWhileViewing(projectId, stateFromStores);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[7] = items2;
      let tmp18 = items2;
    } else {
      tmp18 = cResult[7];
    }
    if (cResult[8] !== projectId) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items3 = [projectId];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[8] = projectId;
      cResult[9] = items3;
      cResult[10] = V;
      let tmp21 = V;
      let tmp20 = items3;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp21 = cResult[10];
    }
    stateFromStores1 = tmp(tmp2[14]).useStateFromStores(tmp18, tmp21, tmp20);
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items4 = [ConjurePublishStatusStore];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[11] = items4;
      const tmp23 = items4;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      const items5 = [projectId];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[12] = projectId;
      cResult[13] = tmp26;
      cResult[14] = items5;
      let tmp25 = items5;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp25 = cResult[14];
    }
    const obj4 = stateFromStores1;
    const tmpResult15 = tmp(tmp2[14]);
    const stateFromStores2 = tmp(tmp2[14]).useStateFromStores(tmp23, tmp26, tmp25);
    if (cResult[15] === stateFromStores1) {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      View = tmp28;
      const _Symbol3 = Symbol;
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items6 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[18] = items6;
        const tmp31 = items6;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[19] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items7 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[19] = projectId;
        cResult[20] = tmp34;
        cResult[21] = items7;
        let tmp33 = items7;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp33 = cResult[21];
      }
      stateFromStores3 = tmp(tmp2[14]).useStateFromStores(tmp31, tmp34, tmp33);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items8 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[22] = items8;
        const tmp36 = items8;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[23] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items9 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[23] = projectId;
        cResult[24] = tmp39;
        cResult[25] = items9;
        let tmp38 = items9;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp38 = cResult[25];
      }
      const tmpResult17 = tmp(tmp2[14]);
      const stateFromStores4 = tmp(tmp2[14]).useStateFromStores(tmp36, tmp39, tmp38);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items10 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[26] = items10;
        const tmp41 = items10;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[27] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items11 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[27] = projectId;
        cResult[28] = tmp44;
        cResult[29] = items11;
        let tmp43 = items11;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp43 = cResult[29];
      }
      const tmpResult18 = tmp(tmp2[14]);
      const stateFromStores5 = tmp(tmp2[14]).useStateFromStores(tmp41, tmp44, tmp43);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items12 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[30] = items12;
        const tmp46 = items12;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[31] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items13 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[31] = projectId;
        cResult[32] = tmp49;
        cResult[33] = items13;
        let tmp48 = items13;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp48 = cResult[33];
      }
      const tmpResult19 = tmp(tmp2[14]);
      const stateFromStores6 = tmp(tmp2[14]).useStateFromStores(tmp46, tmp49, tmp48);
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items14 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[34] = items14;
        const tmp51 = items14;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[35] !== projectId) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        const items15 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[35] = projectId;
        cResult[36] = tmp54;
        cResult[37] = items15;
        let tmp53 = items15;
      } else {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        tmp53 = cResult[37];
      }
      const tmpResult20 = tmp(tmp2[14]);
      const stateFromStores7 = tmp(tmp2[14]).useStateFromStores(tmp51, tmp54, tmp53);
      const tmpResult21 = tmp(tmp2[14]);
      class M {
        constructor() {
          if (closure_3) {
            tmp = ensureConnection;
            tmp2 = projectId;
            tmp3 = ensureConnection(projectId);
          }
          return;
        }
      }
      let tmp60 = null == stateFromStores(obj4.useState(null), 2)[0];
      if (!tmp60) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
        if (stateFromStores3) {
          class V {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
        }
        tmp60 = tmp61;
      }
      if (!tmp60) {
        class V {
          constructor() {
            return closure_14.getMessages(projectId);
          }
        }
      }
      if (cResult[38] !== projectId) {
        class Ce {
          constructor() {
            return closure_7(/* F151908 */ function() { ... });
          }
        }
        cResult[38] = projectId;
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[39] = Ce;
      } else {
        class Ce {
          constructor() {
            return closure_7(/* F151908 */ function() { ... });
          }
        }
      }
      if (stateFromStores3) {
        class Ce {
          constructor() {
            return closure_7(/* F151908 */ function() { ... });
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Ce {
          constructor() {
            return closure_7(/* F151908 */ function() { ... });
          }
        }
        const items16 = [ConjureConnectionStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[40] = items16;
        const tmp64 = items16;
      } else {
        class Ce {
          constructor() {
            return closure_7(/* F151908 */ function() { ... });
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        const items17 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[41] = projectId;
        cResult[42] = Ee;
        cResult[43] = items17;
        let tmp66 = items17;
      } else {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        tmp66 = cResult[43];
      }
      const tmp58 = stateFromStores(obj4.useState(null), 2);
      const stateFromStores8 = tmp(tmp2[14]).useStateFromStores(tmp64, Ee, tmp66);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
          }
        }
        const items18 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[44] = items18;
        const tmp68 = items18;
      } else {
        class Ee {
          constructor() {
            return closure_11.getConnState(projectId);
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
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[45] = projectId;
        cResult[46] = Pe;
        cResult[47] = items19;
        let tmp70 = items19;
      } else {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        tmp70 = cResult[47];
      }
      const tmpResult22 = tmp(tmp2[14]);
      const stateFromStores9 = tmp(tmp2[14]).useStateFromStores(tmp68, Pe, tmp70);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        const items20 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[48] = items20;
        const tmp72 = items20;
      } else {
        class Pe {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        const items21 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[49] = projectId;
        cResult[50] = Be;
        cResult[51] = items21;
        let tmp74 = items21;
      } else {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp74 = cResult[51];
      }
      const tmpResult23 = tmp(tmp2[14]);
      const stateFromStores10 = tmp(tmp2[14]).useStateFromStores(tmp72, Be, tmp74);
      if (cResult[52] === stateFromStores8) {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
      }
      const tmpResult24 = tmp(tmp2[14]);
      let obj2 = { historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 };
      const chatEmptyStateResult = tmp(tmp2[21]).chatEmptyState(obj2);
      cResult[52] = stateFromStores8;
      cResult[53] = stateFromStores9;
      cResult[54] = stateFromStores10;
      cResult[55] = chatEmptyStateResult;
      const tmpResult25 = tmp(tmp2[21]);
    }
    const tmpResult16 = tmp(tmp2[14]);
    const withLivePublishCardResult = tmp(tmp2[20]).withLivePublishCard(stateFromStores1, stateFromStores2);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = withLivePublishCardResult;
    tmp28 = withLivePublishCardResult;
    const tmpResult26 = tmp(tmp2[20]);
  }
  class M {
    constructor() {
      if (closure_3) {
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
  cResult[5] = M;
  cResult[6] = items22;
  tmp15 = items22;
  tmp14 = M;
  const tmpResult14 = projectId(num[17]);
}) : (function ConjureNativeChat(projectId) {
  projectId = projectId.projectId;
  let num = projectId.transcriptTopInset;
  if (num === undefined) {
    num = 0;
  }
  ({ onRestoreVersion: dependencyMap, hidden } = projectId);
  if (hidden === undefined) {
    hidden = false;
  }
  let stateFromStores1;
  let memo;
  let stateFromStores9;
  let render_id;
  let set;
  let stateFromStores11;
  let memo1;
  c14 = undefined;
  c15 = undefined;
  let onToggleChecklist;
  closure_17 = undefined;
  c18 = undefined;
  fadingEdgeLength = undefined;
  let onTogglePlan;
  closure_21 = undefined;
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  c25 = undefined;
  c26 = undefined;
  let dismissedAppBuildRequestId;
  let onDismissAppBuildRequest;
  let sent;
  let id;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c36 = undefined;
  c37 = undefined;
  let first1;
  closure_39 = undefined;
  let bound;
  closure_42 = undefined;
  let ref;
  c47 = undefined;
  let callback4;
  closure_50 = undefined;
  let callback5;
  let callback6;
  let stateFromStores10;
  let callback7;
  let callback8;
  closure_58 = undefined;
  c59 = undefined;
  let callback10;
  c64 = undefined;
  let callback13;
  closure_68 = undefined;
  let onJumpToReplied;
  closure_72 = undefined;
  let tmp = closure_24();
  items = [memo];
  const stateFromStores = projectId(504).useStateFromStores(items, () => "active" === memo.getState(), []);
  const tmp6 = num(12389)(projectId);
  const tmp7 = num(12390)(projectId);
  let tmp8 = num(12391)(projectId);
  let obj = projectId(504);
  const conjureRemixStartedAt = projectId(12391).useConjureRemixStartedAt(projectId);
  let obj3 = stateFromStores1;
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores1.useEffect(() => {
    if (stateFromStores) {
      React5(projectId);
    }
  }, items1);
  let obj2 = projectId(12391);
  const ackConjureProjectWhileViewing = projectId(10834).useAckConjureProjectWhileViewing(projectId, stateFromStores);
  const obj4 = projectId(10834);
  const items2 = [c14];
  const items3 = [projectId];
  stateFromStores1 = projectId(504).useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const obj5 = projectId(504);
  const items4 = [stateFromStores11];
  const items5 = [projectId];
  const stateFromStores2 = projectId(504).useStateFromStores(items4, () => ConjurePublishStatusStore.getPublishStatus(projectId), items5);
  const items6 = [stateFromStores1, stateFromStores2];
  memo = stateFromStores1.useMemo(() => conjurePublishCard.withLivePublishCard(stateFromStores1, stateFromStores2), items6);
  const obj7 = projectId(504);
  const items7 = [c14];
  const items8 = [projectId];
  const stateFromStores3 = projectId(504).useStateFromStores(items7, () => ConjureChatStore.isThinking(projectId), items8);
  const obj8 = projectId(504);
  const items9 = [c14];
  const items10 = [projectId];
  const stateFromStores4 = projectId(504).useStateFromStores(items9, () => ConjureChatStore.isCompacting(projectId), items10);
  const obj9 = projectId(504);
  const items11 = [c14];
  const items12 = [projectId];
  const stateFromStores5 = projectId(504).useStateFromStores(items11, () => ConjureChatStore.isSaving(projectId), items12);
  const obj10 = projectId(504);
  const items13 = [c14];
  const items14 = [projectId];
  const stateFromStores6 = projectId(504).useStateFromStores(items13, () => ConjureChatStore.getThinkingActivity(projectId), items14);
  const obj11 = projectId(504);
  const items15 = [c14];
  const items16 = [projectId];
  const stateFromStores7 = projectId(504).useStateFromStores(items15, () => ConjureChatStore.getProjectUsage(projectId), items16);
  const obj12 = projectId(504);
  [tmp21, tmp22] = stateFromStores(stateFromStores1.useState(null), 2);
  c8 = tmp22;
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
  let tmp20 = stateFromStores(stateFromStores1.useState(null), 2);
  const items18 = [set];
  const items19 = [projectId];
  const stateFromStores8 = projectId(504).useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const tmp2Result = projectId(504);
  const items20 = [c14];
  const items21 = [projectId];
  stateFromStores9 = projectId(504).useStateFromStores(items20, () => ConjureChatStore.hasLoadedHistory(projectId), items21);
  const tmp2Result16 = projectId(504);
  const items22 = [c14];
  const items23 = [projectId];
  stateFromStores10 = projectId(504).useStateFromStores(items22, () => ConjureChatStore.isHistoryUnavailable(projectId), items23);
  const tmp2Result17 = projectId(504);
  const chatEmptyStateResult = projectId(12393).chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  const tmp2Result18 = projectId(12393);
  const conjureScopeSetupPending = projectId(12394).useConjureScopeSetupPending(projectId);
  const tmp2Result19 = projectId(12394);
  render_id = null;
  const conjureHeldPrompt = projectId(12394).useConjureHeldPrompt(projectId);
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items24 = [memo];
  set = obj3.useMemo(() => ConjureTodoState.supersededChecklists(memo), items24);
  const tmp2Result20 = projectId(12394);
  const items25 = [memo1];
  const items26 = [projectId];
  stateFromStores11 = projectId(504).useStateFromStores(items25, () => {
    const settings = ConjureSettingsStore.getSettings(projectId);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    return secrets;
  }, items26);
  const items27 = [memo, stateFromStores11];
  memo1 = obj3.useMemo(() => ConjureSecretRequestState.secretRequestStatuses(memo, stateFromStores11), items27);
  const tmp2Result21 = projectId(504);
  [c14, c15] = stateFromStores(obj3.useState(() => new Map()), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(12402).toggleConjureCard(get, closure_0, closure_1));
  }, []);
  const items28 = [memo];
  closure_17 = obj3.useMemo(() => conjurePendingPlan.planVersions(memo), items28);
  const tmp19Result = stateFromStores(obj3.useState(() => new Map()), 2);
  [c18, c19] = stateFromStores(obj3.useState(() => new Map()), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined3((get) => projectId(12402).toggleConjureCard(get, closure_0, closure_1));
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
    conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3864.EMgIuY));
  }, items30);
  const items31 = [projectId];
  closure_23 = obj3.useCallback((implementation_prompt) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const tmp19Result11 = stateFromStores(obj3.useState(() => new Map()), 2);
  const items32 = [projectId];
  [tmp40, tmp41] = stateFromStores(num(12405)(projectId), 2);
  const items33 = [projectId];
  const callback1 = obj3.useCallback(() => {
    const intl = util.intl;
    v65535(projectId, intl.string(_modDef3864["t5CN3+"]));
  }, items32);
  closure_24 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, { clarificationAnswers, attachments });
  }, items33);
  const tmp19Result12 = stateFromStores(num(12405)(projectId), 2);
  [c25, c26] = stateFromStores(obj3.useState(null), 2);
  const tmp19Result14 = stateFromStores(obj3.useState(null), 2);
  dismissedAppBuildRequestId = tmp19Result14[0];
  onDismissAppBuildRequest = tmp19Result14[1];
  const tmp46 = num(12406)(projectId);
  sent = tmp46.sent;
  const request = tmp46.request;
  id = undefined;
  if (request != null) {
    id = request.id;
  }
  const items34 = [id, sent];
  let tmp50 = tmp49;
  const callback2 = obj3.useCallback((arr) => {
    if (null != id) {
      sent(tmp);
    }
    const obj2 = { text: null, variant: "success" };
    const obj = ToastActionCreatorsDefault;
    obj2.text = ConjureAppBuildRequest.appBuildRequestSentToast(arr);
    obj.open("CONJURE_APP_BUILD_REQUEST_SENT", obj2);
  }, items34);
  if ("open" !== stateFromStores8) {
    tmp50 = "connecting" === stateFromStores8;
  }
  canSend = tmp50;
  const items35 = [memo];
  memo2 = obj3.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items35);
  const tmp19Result13 = stateFromStores(obj3.useState(null), 2);
  joined = Array.from(memo1, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  }).join(",");
  const items36 = [tmp50, memo2, joined, dismissedAppBuildRequestId];
  const items37 = [memo];
  const memo3 = obj3.useMemo(() => ({ canSend, pendingPlanId: memo2, secretStatusesKey: joined, dismissedAppBuildRequestId }), items36);
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
  }, items37);
  const items38 = [memo, memo4];
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
  }, items38);
  let tmp56 = null != memo5;
  if (tmp56) {
    tmp56 = memo5.steps.length > 0 || memo5.tasks.length > 0;
    const tmp57 = memo5.steps.length > 0 || memo5.tasks.length > 0;
  }
  const items39 = [memo5];
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
  }, items39);
  const arr = Array.from(memo1, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  [obj21, c36] = stateFromStores(obj3.useState(null), 2);
  const tmp19Result15 = stateFromStores(obj3.useState(null), 2);
  [tmp61, c37] = stateFromStores(obj3.useState(64), 2);
  const tmp19Result17 = stateFromStores(obj3.useState(false), 2);
  first1 = tmp19Result17[0];
  closure_39 = tmp19Result17[1];
  const callback3 = obj3.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
    closure_39(true);
  }, []);
  const tmp19Result16 = stateFromStores(obj3.useState(64), 2);
  bound = tmp61;
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp61, fadingEdgeLength);
  }
  obj3.useRef(null);
  closure_42 = obj3.useRef(null);
  ref = obj3.useRef(false);
  obj3.useRef(true);
  obj3.useRef(0);
  obj3.useRef(0);
  tmp2Result22 = projectId(1381);
  [tmp69, c47] = stateFromStores(obj3.useState(false), 2);
  obj3.useRef(false);
  callback4 = obj3.useCallback(() => {
    closure_48.current = true;
    _undefined6(true);
  }, []);
  closure_50 = obj3.useRef({ viewportHeight: 0, contentHeight: 0, measuredRowCount: null });
  obj3.useRef({ rowCount: 0, historySettled: false });
  callback5 = obj3.useCallback((arg0) => {
    let tmp = arg0;
    const current = closure_50.current;
    ({ viewportHeight, contentHeight } = current);
    if (arg0 == null) {
      let tmp2 = null;
      if (viewportHeight > 0) {
        tmp2 = null;
        if (contentHeight > 0) {
          const current2 = ref.current;
          let num2;
          if (current2 != null) {
            num2 = current2.getAbsoluteLastScrollOffset();
          }
          if (num2 == null) {
            num2 = 0;
          }
          const obj = { offsetY: num2, viewportHeight, contentHeight };
          tmp2 = obj;
        }
      }
      tmp = tmp2;
    }
    const obj3 = {};
    const merged = Object.assign(ref6.current);
    obj3.measuredRowCount = current.measuredRowCount;
    obj3.metrics = tmp;
    return conjureTranscriptScroll.decideConjureTranscriptReveal(obj3);
  }, []);
  const items40 = [callback5, callback4];
  callback6 = obj3.useCallback(() => {
    if (!ref5.current) {
      const tmp2 = callback5();
      if ("reveal" !== tmp2) {
        let current = "scroll-then-confirm" === tmp2;
        if (current) {
          current = ref2.current;
        }
        if (current) {
          const _requestAnimationFrame = requestAnimationFrame;
          let animationFrame = requestAnimationFrame(() => {
            let current = ref.current;
            if (current != null) {
              current.scrollToEnd({ animated: false });
            }
            const animationFrame = requestAnimationFrame(() => {
              let current = ref.current;
              if (!current) {
                current = "reveal" !== closure_1_52();
              }
              if (!current) {
                closure_1_49();
              }
            });
          });
        }
      } else {
        callback4();
      }
    }
  }, items40);
  let tmp73 = stateFromStores9;
  if (!stateFromStores9) {
    tmp73 = stateFromStores10;
  }
  stateFromStores10 = tmp73;
  const items41 = [memo.length, tmp73, callback6];
  const layoutEffect = obj3.useLayoutEffect(() => {
    closure_51.current = { rowCount: memo.length, historySettled: stateFromStores10 };
    closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items41);
  callback7 = obj3.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback8 = obj3.useCallback(() => {
    const timestamp = Date.now();
    closure_45.current = timestamp + c18;
    closure_46.current = timestamp + 2000;
  }, []);
  const items42 = [projectId, callback8];
  const effect1 = obj3.useEffect(() => {
    closure_44.current = true;
    callback8();
  }, items42);
  const items43 = [stateFromStores9, callback8];
  const effect2 = obj3.useEffect(() => {
    if (stateFromStores9) {
      callback8();
    }
  }, items43);
  obj3.useRef(null);
  const items44 = [callback6];
  const callback9 = obj3.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    ref7.current = height;
    if (obj.keepsBottomOnShrink(ref7.current, height, closure_42.current)) {
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: false });
        }
        return scrollToEndResult;
      });
    }
    closure_50.current.viewportHeight = height;
    callback6();
  }, items44);
  closure_58 = obj3.useRef(null);
  const tmp19Result18 = stateFromStores(obj3.useState(false), 2);
  [tmp81, tmp82] = stateFromStores(obj3.useState(null), 2);
  c59 = tmp82;
  if (tmp83) {
    tmp82(null);
  }
  obj3.useRef(null);
  obj3.useRef(false);
  callback10 = obj3.useCallback((current) => {
    closure_60.current = current;
    closure_61.current = false;
    _undefined7(current);
  }, []);
  let projectId1;
  if (tmp81 != null) {
    projectId1 = tmp81.projectId;
  }
  let tmp87 = projectId1 === projectId;
  if (tmp87) {
    const atResult = stateFromStores1.at(-1);
    let render_id1;
    if (atResult != null) {
      render_id1 = atResult.render_id;
    }
    tmp87 = tmp81.planId === render_id1;
  }
  const items45 = [projectId, stateFromStores1, memo, callback10];
  const effect3 = obj3.useEffect(() => {
    const takeArrivedPlanResult = projectId(12403).takeArrivedPlan(closure_58, projectId, stateFromStores1);
    projectId = takeArrivedPlanResult;
    let current = closure_42.current;
    if (null != takeArrivedPlanResult) {
      if (null == current) {
        const findIndexResult = memo.findIndex((render_id) => render_id.render_id === takeArrivedPlanResult);
        if (findIndexResult >= 0) {
          closure_44.current = false;
          closure_43.current = false;
          const obj2 = { projectId: tmp3, planId: takeArrivedPlanResult };
          callback10(obj2);
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => {
            const current = ref.current;
            let scrollToIndexResult;
            if (current != null) {
              const obj = { index: findIndexResult, animated: false, viewPosition: 0 };
              scrollToIndexResult = current.scrollToIndex(obj);
            }
            return scrollToIndexResult;
          });
        }
      } else {
        tmp(12411);
      }
    }
    let obj = projectId(12403);
    tmp = projectId;
    tmp3 = projectId;
  }, items45);
  obj3.useRef(false);
  const items46 = [first1, callback4];
  const effect4 = obj3.useEffect(() => {
    if (first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback4, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items46);
  const items47 = [projectId];
  const callback11 = obj3.useCallback(() => {
    React6(projectId);
  }, items47);
  const callback12 = obj3.useCallback(() => {
    closure_44.current = false;
    closure_61.current = true;
  }, []);
  const tmp19Result19 = stateFromStores(obj3.useState(null), 2);
  tmp83 = null != tmp81 && tmp81.projectId !== projectId;
  [tmp95, c64] = stateFromStores(obj3.useState(false), 2);
  obj3.useRef(null);
  obj3.useRef(0);
  callback13 = obj3.useCallback(() => {
    const current = ref11.current;
    const current2 = closure_42.current;
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
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref12.current;
    }
    _undefined(tmp5);
  }, []);
  const items48 = [callback5, callback4, callback7, callback10, callback13];
  const items49 = [callback6, callback7, callback8, callback13];
  const callback14 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_42.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    if (!ref5.current) {
      const tmp3 = callback5(closure_42.current);
      if ("reveal" === tmp3) {
        callback4();
      } else {
        let current = "scroll-then-confirm" === tmp3;
        if (current) {
          current = ref2.current;
        }
        if (current) {
          callback7();
        }
      }
    }
    let current2 = null != ref8.current;
    if (current2) {
      current2 = ref9.current;
    }
    if (current2) {
      current2 = conjureTranscriptScroll.isNearBottom(closure_42.current);
    }
    if (current2) {
      callback10(null);
    }
    callback13();
  }, items48);
  const callback15 = obj3.useCallback((arg0, contentHeight) => {
    closure_50.current.contentHeight = contentHeight;
    closure_50.current.measuredRowCount = ref6.current.rowCount;
    callback6();
    if (!ref10.current) {
      tmp2.current = true;
      callback8();
    }
    const timestamp = Date.now();
    let current = ref2.current;
    if (current) {
      current = timestamp < ref3.current;
    }
    if (current) {
      const _Math = Math;
      ref3.current = Math.min(timestamp + c18, ref4.current);
      callback7();
    }
    const current2 = closure_42.current;
    if (null != current2) {
      const obj2 = {};
      const merged = Object.assign(current2);
      obj2.contentHeight = contentHeight;
      if (isNearBottomResult) {
        const _Math2 = Math;
        obj2.offsetY = Math.max(0, contentHeight - current2.viewportHeight);
        let tmp13 = obj2;
      } else {
        tmp13 = obj2;
      }
      tmp12.current = tmp13;
      if (ref.current) {
        tmp14.current = false;
        const current3 = ref.current;
        if (current3 != null) {
          current3.scrollToEnd({ animated: true });
        }
      }
      callback13();
      isNearBottomResult = conjureTranscriptScroll.isNearBottom(current2);
    }
  }, items49);
  const items50 = [callback13];
  const memo7 = obj3.useMemo(() => ({ itemVisiblePercentThreshold: projectId(12412).MIN_VISIBLE_PERCENT }), []);
  const callback16 = obj3.useCallback((arg0) => {
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
    callback13();
  }, items50);
  if (stateFromStores5) {
    const intl3 = tmp2(1125).intl;
    memo6 = intl3.string(tmp5(3864).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1125).intl;
    memo6 = intl2.string(tmp5(3864).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(1125).intl;
    memo6 = intl.string(tmp5(3864).L9EDub);
  }
  const items51 = [memo, memo4];
  let tmp102;
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
  }, items51);
  if (null != memo4) {
    tmp102 = memo[memo4];
  }
  let checklistLiveResult = null == tmp102;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(12399).checklistLive(tmp102);
    const tmp2Result23 = tmp2(12399);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp102) {
    conjureTurnStartedAtResult = tmp2(12413).conjureTurnStartedAt(tmp102);
    const tmp2Result24 = tmp2(12413);
  }
  const items52 = [memo5];
  let tmp106;
  const memo9 = obj3.useMemo(() => {
    if (null != memo5) {
      let runningTodoAgentsResult = ConjureTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items52);
  if (null != memo4) {
    let render_id2;
    if (memo[memo4] != null) {
      render_id2 = tmp107.render_id;
    }
    tmp106 = render_id2;
  }
  let tmp109 = null != tmp106;
  if (tmp109) {
    tmp109 = null != obj21 && !obj21.has(tmp106) || tmp95;
    const tmp110 = null != obj21 && !obj21.has(tmp106) || tmp95;
  }
  let tmp111 = null;
  if (stateFromStores3) {
    tmp111 = null;
    if (tmp56) {
      tmp111 = null;
      if (tmp109) {
        tmp111 = memo6;
      }
    }
  }
  const items53 = [bound, memo4, callback13];
  const effect5 = obj3.useEffect(() => {
    closure_65.current = memo4;
    closure_66.current = bound;
    closure_0 = requestAnimationFrame(callback13);
    return () => cancelAnimationFrame(closure_0);
  }, items53);
  const items54 = [memo];
  closure_68 = obj3.useMemo(() => {
    const map = new Map();
    const iter = memo[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      if ("assistant" === nextResult.role) {
        if (null != tmp3.in_reply_to) {
          value = repliedMessagesByIdResult.get(tmp3.in_reply_to);
          if (null != value) {
            let result = map.set(tmp3.render_id, tmp7);
          }
        }
      }
      continue;
    }
    return map;
  }, items54);
  const items55 = [memo];
  onJumpToReplied = obj3.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      closure_44.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items55);
  const items56 = [bound, memo4];
  const callback17 = obj3.useCallback(() => {
    if (null != memo4) {
      closure_44.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items56);
  const callback18 = obj3.useCallback(() => {
    const current = closure_42.current;
    let isNearBottomResult = null != current;
    if (isNearBottomResult) {
      isNearBottomResult = conjureTranscriptScroll.isNearBottom(current);
    }
    if (isNearBottomResult) {
      closure_43.current = true;
    }
  }, []);
  obj3.useRef(false);
  obj3.useRef(false);
  closure_72 = obj3.useCallback((arg0) => {
    let tmp2 = arg0;
    if (arg0) {
      tmp2 = !ref14.current;
    }
    closure_70.current = tmp2;
    if (arg0) {
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: true });
        }
        return scrollToEndResult;
      });
    }
  }, []);
  const items57 = [num];
  const effect6 = obj3.useEffect(() => {
    ref14.current = num > 0;
    let current = ref14.current;
    if (current) {
      current = ref13.current;
    }
    if (current) {
      ref13.current = false;
      const _requestAnimationFrame = requestAnimationFrame;
      const animationFrame = requestAnimationFrame(() => {
        const current = ref.current;
        let scrollToEndResult;
        if (current != null) {
          scrollToEndResult = current.scrollToEnd({ animated: true });
        }
        return scrollToEndResult;
      });
    }
  }, items57);
  const items58 = [projectId];
  const items59 = [projectId];
  const callback19 = obj3.useCallback((arg0, arg1) => {
    closure_43.current = true;
    v65535(projectId, arg0, arg1);
  }, items58);
  let connectionLabelResult = null;
  const callback20 = obj3.useCallback(() => {
    closure_2_8(projectId);
  }, items59);
  if ("open" !== stateFromStores8) {
    connectionLabelResult = tmp2(12416).connectionLabel(stateFromStores8);
    const tmp2Result25 = tmp2(12416);
  }
  const tmp19Result20 = stateFromStores(obj3.useState(false), 2);
  const obj6 = { style: tmp.container, children: null };
  const conjureControlActive = projectId(10875).useConjureControlActive(projectId);
  const items60 = [c15(num(12417), { thinking: stateFromStores3, bleedBottom: num(1631)().bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: null };
  if (first1) {
    const obj14 = { clearance: tmp61, children: null };
    const obj15 = { ref, fadingEdgeLength, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onLayout: null, onScrollBeginDrag: null, onContentSizeChange: null, onStartReached: null, scrollEventThrottle: 16, keyboardShouldPersistTaps: "handled", contentInset: null, ListHeaderComponent: null, style: null, contentContainerStyle: null, data: null, extraData: null, maintainVisibleContentPosition: null, keyExtractor: null, ListFooterComponent: null, ListEmptyComponent: null, renderItem: null };
    const tmp124 = c25;
    const tmp2Result27 = tmp2(1381);
    obj15.removeClippedSubviews = tmp2(1381).isIOS() && undefined;
    obj15.viewabilityConfig = memo7;
    obj15.onViewableItemsChanged = callback16;
    obj15.onScroll = callback14;
    obj15.onLayout = callback9;
    obj15.onScrollBeginDrag = callback12;
    obj15.onContentSizeChange = callback15;
    obj15.onStartReached = callback11;
    const tmp126 = tmp2(1381).isIOS() && undefined;
    let tmp127;
    if (tmp2Result28.isIOS()) {
      const obj16 = { top: num };
      tmp127 = obj16;
    }
    obj15.contentInset = tmp127;
    tmp2Result28 = tmp2(1381);
    let tmp122Result = null;
    if (!tmp2Result29.isIOS()) {
      tmp122Result = null;
      if (num > 0) {
        const obj17 = { style: null };
        const obj18 = { height: num };
        obj17.style = obj18;
        tmp122Result = tmp122(tmp121, obj17);
      }
    }
    obj15.ListHeaderComponent = tmp122Result;
    const items61 = [tmp.transcript, , ];
    tmp2Result29 = tmp2(1381);
    const isIOSResult = tmp2(1381).isIOS();
    let tmp130 = !isIOSResult;
    if (!isIOSResult) {
      const obj19 = { marginBottom: tmp61 - bound };
      tmp130 = obj19;
    }
    items61[1] = tmp130;
    let transcriptHidden = !tmp69;
    if (!tmp69) {
      transcriptHidden = tmp.transcriptHidden;
    }
    items61[2] = transcriptHidden;
    obj15.style = items61;
    const items62 = [tmp.transcriptContent, ];
    const obj20 = { paddingBottom: bound + tmp5(587).space.PX_8 };
    items62[1] = obj20;
    obj15.contentContainerStyle = items62;
    obj15.data = memo;
    obj15.extraData = memo3;
    let AUTOSCROLL_THRESHOLD;
    if (!tmp87) {
      AUTOSCROLL_THRESHOLD = tmp2(12411).AUTOSCROLL_THRESHOLD;
    }
    const obj22 = { startRenderingFromBottom: true, autoscrollToBottomThreshold: AUTOSCROLL_THRESHOLD };
    obj15.maintainVisibleContentPosition = obj22;
    obj15.keyExtractor = function keyExtractor(render_id) {
      return render_id.render_id;
    };
    const obj23 = { projectId, messages: memo, draftHasText: tmp40, onAskForIdeas: null, onShow: null };
    let tmp134;
    const tmp132 = onToggleChecklist;
    const tmp2Result30 = tmp2(1381);
    if (tmp50) {
      tmp134 = callback1;
    }
    const obj24 = { children: null };
    obj23.onAskForIdeas = tmp134;
    obj23.onShow = callback18;
    const items63 = [tmp122(tmp5(12420), obj23), ];
    const obj25 = { projectId };
    items63[1] = tmp122(tmp2(12278).ConjureHostApprovalCards, obj25);
    obj24.children = items63;
    obj15.ListFooterComponent = tmp120(tmp132, obj24);
    if ("loading" === chatEmptyStateResult) {
      obj15.ListEmptyComponent = null;
      obj15.renderItem = function renderItem(arg0) {
        ({ item, index } = arg0);
        const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, checklistSuperseded: null, secretRequestStatus: null, checklistExpanded: null, onToggleChecklist: null, planVersion: null, planSuperseded: null, planExpanded: null, onTogglePlan: null, replied: null, onJumpToReplied: null, onApprovePlan: null, onPickIdea: null, onAnswerClarification: null, clarificationDismissed: null, onDismissClarification: null, onCardInputFocusChange: null, canSend: null, appBuildRequestDismissed: null, onDismissAppBuildRequest: null, onRestoreVersion: null };
        let flag = closure_21[index];
        if (flag == null) {
          flag = true;
        }
        obj.groupStart = flag;
        obj.first = 0 === index;
        obj.isNewest = item.render_id === render_id;
        obj.checklistSuperseded = set.has(item.render_id);
        let str = memo1.get(item.render_id);
        if (str == null) {
          str = "open";
        }
        obj.secretRequestStatus = str;
        const tmp3 = ConjureMessageRowDefault;
        obj.checklistExpanded = conjureCardOverrides.conjureCardExpanded(c14, item.render_id, set.has(item.render_id));
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
        obj.planExpanded = conjureCardOverrides.conjureCardExpanded(c18, item.render_id, true === superseded1);
        obj.onTogglePlan = onTogglePlan;
        obj.replied = closure_68.get(item.render_id);
        obj.onJumpToReplied = onJumpToReplied;
        let tmp13;
        if (canSend) {
          if (item.render_id === memo2) {
            tmp13 = closure_22;
          }
        }
        obj.onApprovePlan = tmp13;
        let tmp15;
        if (canSend) {
          tmp15 = closure_23;
        }
        obj.onPickIdea = tmp15;
        let tmp16;
        if (canSend) {
          tmp16 = closure_24;
        }
        obj.onAnswerClarification = tmp16;
        let tmp17 = null != item.clarification;
        if (tmp17) {
          tmp17 = item.clarification.id === c25;
        }
        obj.clarificationDismissed = tmp17;
        obj.onDismissClarification = onDismissClarification;
        const tmp4Result = conjureCardOverrides;
        let tmp19;
        if (!tmp4Result2.isIOS()) {
          tmp19 = closure_72;
        }
        obj.onCardInputFocusChange = tmp19;
        obj.canSend = canSend;
        let tmp20 = null != item.appBuildRequest;
        if (tmp20) {
          tmp20 = item.appBuildRequest.id === first;
        }
        obj.appBuildRequestDismissed = tmp20;
        obj.onDismissAppBuildRequest = onDismissAppBuildRequest;
        let tmp22;
        if (!stateFromStores3) {
          tmp22 = dependencyMap;
        }
        obj.onRestoreVersion = tmp22;
        return value2(tmp3, obj);
      };
      obj14.children = tmp122(tmp2(7280).FlashList, obj15);
      let tmp122Result10 = tmp122(tmp124, obj14);
    } else {
      const obj26 = { style: tmp.placeholder, children: null };
      const intl4 = tmp2(1125).intl;
      if ("unavailable" === chatEmptyStateResult) {
        let AyiQEp = tmp5(3864).Td4Sf4;
      } else {
        AyiQEp = tmp5(3864).AyiQEp;
      }
      const obj27 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
      obj26.children = tmp122(tmp2(5271).Text, obj27);
      tmp122(tmp121, obj26);
    }
    const tmp5Result = tmp5(12420);
  } else {
    const obj28 = { style: tmp.transcript };
    tmp122Result10 = tmp122(tmp121, obj28);
  }
  const items64 = [tmp122Result10, , ];
  let tmp122Result12 = null;
  if (tmp27) {
    const obj29 = { projectId };
    tmp122Result12 = tmp122(tmp5(12592), obj29);
  }
  items64[1] = tmp122Result12;
  let tmp122Result13 = null;
  if (null != tmp111) {
    const obj30 = { line: tmp111, onJumpToActivity: callback17, bottom: tmp5(587).space.PX_12 + tmp61, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
    tmp122Result13 = tmp122(tmp5(12593), obj30);
    const tmp5Result4 = tmp5(12593);
  }
  items64[2] = tmp122Result13;
  obj13.children = items64;
  items60[1] = closure_17(stateFromStores2, obj13);
  const obj31 = { style: tmp.bottomStack, onLayout: callback3, children: null };
  const obj32 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: null, activity: null, projectUsage: null, connLabel: null, controlling: null, connFailed: null, thinkingOpen: null, onToggleThinking: null };
  let tmp141 = "loading" === chatEmptyStateResult;
  const tmp2Result26 = projectId(10875);
  if (tmp141) {
    tmp141 = 0 === memo.length;
  }
  obj32.recalling = tmp141;
  obj32.activity = stateFromStores6;
  obj32.projectUsage = stateFromStores7;
  obj32.connLabel = connectionLabelResult;
  obj32.controlling = conjureControlActive;
  obj32.connFailed = "failed" === stateFromStores8;
  obj32.thinkingOpen = tmp27;
  obj32.onToggleThinking = callback;
  const items65 = [c15(num(12596), obj32), , ];
  if (null == tmp8) {
    if (null == tmp6) {
      if (null == tmp7) {
        const obj33 = { style: tmp.notices, children: null };
        let tmp122Result14 = null;
        if (null != tmp8) {
          const obj34 = { style: tmp.notice, children: null };
          const obj35 = { type: "critical", role: "alert", message: tmp8.message, action: null };
          const obj36 = { text: tmp8.retry.text, onPress: tmp8.retry.onClick };
          obj35.action = obj36;
          obj34.children = tmp122(tmp2(8011).InlineNotice, obj35);
          tmp122Result14 = tmp122(tmp121, obj34);
        }
        const items66 = [tmp122Result14, , , , ];
        let tmp122Result15 = null;
        if (null != tmp6) {
          const obj37 = { style: tmp.notice, children: null };
          ({ message: obj55.message, onDismiss: obj55.onDismiss } = tmp6);
          obj37.children = tmp122(tmp2(8011).InlineNotice, { type: "warning", role: "status", message: null, onDismiss: null });
          tmp122Result15 = tmp122(tmp121, obj37);
          const obj38 = { type: "warning", role: "status", message: null, onDismiss: null };
        }
        items66[1] = tmp122Result15;
        let tmp122Result16 = null;
        if (null != tmp7) {
          const obj39 = { style: tmp.notice, children: null };
          let str3 = "warning";
          if (tmp7.blocked) {
            str3 = "critical";
          }
          const obj40 = { type: str3, role: null, message: null };
          let str4 = "status";
          if (tmp7.blocked) {
            str4 = "alert";
          }
          obj40.role = str4;
          obj40.message = tmp7.message;
          obj39.children = tmp122(tmp2(8011).InlineNotice, obj40);
          tmp122Result16 = tmp122(tmp121, obj39);
        }
        items66[2] = tmp122Result16;
        let tmp122Result17 = null;
        if (null != tmp46.request) {
          const obj41 = { style: tmp.notice, children: null };
          const obj42 = { projectId, request: tmp46.request, canSend: tmp50, onDismiss: tmp46.close, onSent: callback2 };
          obj41.children = tmp122(tmp5(12578), obj42, tmp46.request.id);
          tmp122Result17 = tmp122(tmp121, obj41);
        }
        items66[3] = tmp122Result17;
        let tmp122Result18 = null;
        if (conjureScopeSetupPending) {
          const obj43 = { style: tmp.notice, children: null };
          const obj44 = { projectId };
          obj43.children = tmp122(tmp5(12605), obj44);
          tmp122Result18 = tmp122(tmp121, obj43);
        }
        items66[4] = tmp122Result18;
        obj33.children = items66;
        items65[1] = tmp120(tmp121, obj33);
        const obj45 = { projectId, canSend: tmp50, inputLocked: conjureScopeSetupPending, aiPaused: null, running: null, onSend: null, onInterrupt: null, onDraftHasTextChange: null, hidden: null, onSendToOtherProjects: null };
        let blocked;
        if (tmp7 != null) {
          blocked = tmp7.blocked;
        }
        obj45.aiPaused = true === blocked;
        obj45.running = stateFromStores3;
        obj45.onSend = callback19;
        let tmp149;
        if (stateFromStores3) {
          tmp149 = callback20;
        }
        obj45.onInterrupt = tmp149;
        obj45.onDraftHasTextChange = tmp41;
        obj45.hidden = hidden;
        let open;
        if (null == tmp46.request) {
          open = tmp46.open;
        }
        obj45.onSendToOtherProjects = open;
        items65[2] = tmp122(tmp5(12606), obj45, conjureHeldPrompt);
        obj31.children = items65;
        items60[2] = tmp120(tmp121, obj31);
        obj6.children = items60;
        return tmp120(tmp121, obj6);
      }
    }
  }
  const tmp5Result5 = num(12596);
});