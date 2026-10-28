// === Module 12334: ConjureNativeChat ===

// Module 12334 (ConjureNativeChat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1125 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import _modDef3863 from "module_3863" /* 3863 */;
import LinearGradientDefault from "LinearGradient" /* 5294 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5699 */;
import _modDef7002 from "module_7002" /* 7002 */;
import conjureChatTurns from "conjureChatTurns" /* 10735 */;
import conjurePublishCard from "conjurePublishCard" /* 12338 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12344 */;
import ConjureTodoState from "ConjureTodoState" /* 12345 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12346 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12347 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12348 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12349 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12350 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12353 */;
import conjureTranscriptScroll from "conjureTranscriptScroll" /* 12357 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12360 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12361 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12387 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1998 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10733 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10749 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10751 */;
import ConjureChatStore from "ConjureChatStore" /* 10734 */;

require = fn;
let View = fn(17).View;
let ConjureConnectionStore = fn(10733);
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
const createStyles = fn(5004);
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, bottomStack: null, notices: null, notice: null, placeholder: null };
const alphaResult = _modDef683(BLACK).alpha(0.2);
obj2.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
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
          const tmp30 = value2(_modDef7002, obj7);
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
    tmp3 = value2(_modDef7002, obj2);
  }
  return tmp3;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  const cResult = projectId(num[13]).c(307);
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
    class R {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const items1 = [];
    cResult[0] = items;
    cResult[1] = R;
    cResult[2] = items1;
    tmp5 = items;
    tmp7 = items1;
  } else {
    [tmp5, tmp6, tmp7] = cResult;
  }
  let obj = projectId(num[13]);
  const stateFromStores = projectId(num[14]).useStateFromStores(tmp5, R, tmp7);
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
    class R {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const ackConjureProjectWhileViewing = obj5.useAckConjureProjectWhileViewing(projectId, stateFromStores);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      class R {
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
      class R {
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
      class R {
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
      class R {
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
      class R {
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
        class R {
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
        class R {
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
        class R {
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
        class R {
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
        class R {
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
        class R {
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
        class R {
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
        class R {
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
        class R {
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
        class R {
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
      class O {
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
            return closure_7(/* F150335 */ function() { ... });
          }
        }
        cResult[38] = projectId;
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[39] = Ce;
      } else {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
      }
      if (stateFromStores3) {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
        const items16 = [ConjureConnectionStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[40] = items16;
        const tmp64 = items16;
      } else {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
      }
      if (cResult[41] !== projectId) {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
        const items17 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[41] = projectId;
        cResult[42] = tmp67;
        cResult[43] = items17;
        let tmp66 = items17;
      } else {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
        tmp66 = cResult[43];
      }
      const tmp58 = stateFromStores(obj4.useState(null), 2);
      const stateFromStores8 = tmp(tmp2[14]).useStateFromStores(tmp64, tmp67, tmp66);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
        const items18 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[44] = items18;
        const tmp69 = items18;
      } else {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
        const items19 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[45] = projectId;
        cResult[46] = tmp72;
        cResult[47] = items19;
        let tmp71 = items19;
      } else {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
        tmp71 = cResult[47];
      }
      const tmpResult22 = tmp(tmp2[14]);
      const stateFromStores9 = tmp(tmp2[14]).useStateFromStores(tmp69, tmp72, tmp71);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
        const items20 = [ConjureChatStore];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[48] = items20;
        const tmp74 = items20;
      } else {
        class Ce {
          constructor() {
            return closure_7(/* F150335 */ function() { ... });
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Me {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        const items21 = [projectId];
        class R {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[49] = projectId;
        cResult[50] = Me;
        cResult[51] = items21;
        let tmp76 = items21;
      } else {
        class Me {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp76 = cResult[51];
      }
      const tmpResult23 = tmp(tmp2[14]);
      const stateFromStores10 = tmp(tmp2[14]).useStateFromStores(tmp74, Me, tmp76);
      if (cResult[52] === stateFromStores8) {
        class Me {
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
  class O {
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
  cResult[5] = O;
  cResult[6] = items22;
  tmp15 = items22;
  tmp14 = O;
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
  let bound;
  closure_40 = undefined;
  let ref;
  let callback4;
  let callback5;
  closure_48 = undefined;
  c49 = undefined;
  let callback7;
  c53 = undefined;
  let callback10;
  closure_57 = undefined;
  let onJumpToReplied;
  closure_61 = undefined;
  let tmp = closure_24();
  items = [memo];
  const stateFromStores = projectId(504).useStateFromStores(items, () => "active" === memo.getState(), []);
  const tmp6 = num(12335)(projectId);
  const tmp7 = num(12336)(projectId);
  let tmp8 = num(12337)(projectId);
  let obj = projectId(504);
  const conjureRemixStartedAt = projectId(12337).useConjureRemixStartedAt(projectId);
  let obj3 = stateFromStores1;
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores1.useEffect(() => {
    if (stateFromStores) {
      React5(projectId);
    }
  }, items1);
  let obj2 = projectId(12337);
  const ackConjureProjectWhileViewing = projectId(10759).useAckConjureProjectWhileViewing(projectId, stateFromStores);
  const obj4 = projectId(10759);
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
  const stateFromStores10 = projectId(504).useStateFromStores(items22, () => ConjureChatStore.isHistoryUnavailable(projectId), items23);
  const tmp2Result17 = projectId(504);
  const chatEmptyStateResult = projectId(12339).chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  const tmp2Result18 = projectId(12339);
  const conjureScopeSetupPending = projectId(12340).useConjureScopeSetupPending(projectId);
  const tmp2Result19 = projectId(12340);
  render_id = null;
  const conjureHeldPrompt = projectId(12340).useConjureHeldPrompt(projectId);
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items24 = [memo];
  set = obj3.useMemo(() => ConjureTodoState.supersededChecklists(memo), items24);
  const tmp2Result20 = projectId(12340);
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
    _undefined2((get) => projectId(12348).toggleConjureCard(get, closure_0, closure_1));
  }, []);
  const items28 = [memo];
  closure_17 = obj3.useMemo(() => conjurePendingPlan.planVersions(memo), items28);
  const tmp19Result = stateFromStores(obj3.useState(() => new Map()), 2);
  [c18, c19] = stateFromStores(obj3.useState(() => new Map()), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined3((get) => projectId(12348).toggleConjureCard(get, closure_0, closure_1));
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
    conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3863.EMgIuY));
  }, items30);
  const items31 = [projectId];
  closure_23 = obj3.useCallback((implementation_prompt) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const tmp19Result9 = stateFromStores(obj3.useState(() => new Map()), 2);
  const items32 = [projectId];
  [tmp40, tmp41] = stateFromStores(num(12351)(projectId), 2);
  const items33 = [projectId];
  const callback1 = obj3.useCallback(() => {
    const intl = util.intl;
    v65535(projectId, intl.string(_modDef3863["t5CN3+"]));
  }, items32);
  closure_24 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, { clarificationAnswers, attachments });
  }, items33);
  const tmp19Result10 = stateFromStores(num(12351)(projectId), 2);
  [c25, c26] = stateFromStores(obj3.useState(null), 2);
  const tmp19Result12 = stateFromStores(obj3.useState(null), 2);
  dismissedAppBuildRequestId = tmp19Result12[0];
  onDismissAppBuildRequest = tmp19Result12[1];
  const tmp46 = num(12352)(projectId);
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
  const tmp19Result11 = stateFromStores(obj3.useState(null), 2);
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
  const tmp19Result13 = stateFromStores(obj3.useState(null), 2);
  [tmp61, c37] = stateFromStores(obj3.useState(64), 2);
  const callback3 = obj3.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
  }, []);
  const tmp19Result14 = stateFromStores(obj3.useState(64), 2);
  bound = tmp61;
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp61, fadingEdgeLength);
  }
  obj3.useRef(null);
  closure_40 = obj3.useRef(null);
  ref = obj3.useRef(false);
  obj3.useRef(true);
  obj3.useRef(0);
  obj3.useRef(0);
  callback4 = obj3.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback5 = obj3.useCallback(() => {
    const timestamp = Date.now();
    closure_43.current = timestamp + c18;
    closure_44.current = timestamp + 2000;
  }, []);
  const items40 = [projectId, callback5];
  const effect1 = obj3.useEffect(() => {
    closure_42.current = true;
    callback5();
  }, items40);
  const items41 = [stateFromStores9, callback5];
  const effect2 = obj3.useEffect(() => {
    if (stateFromStores9) {
      callback5();
    }
  }, items41);
  obj3.useRef(null);
  const callback6 = obj3.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    ref5.current = height;
    if (obj.keepsBottomOnShrink(ref5.current, height, closure_40.current)) {
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
  }, []);
  closure_48 = obj3.useRef(null);
  tmp2Result22 = projectId(1381);
  [tmp72, tmp73] = stateFromStores(obj3.useState(null), 2);
  c49 = tmp73;
  if (tmp74) {
    tmp73(null);
  }
  obj3.useRef(null);
  obj3.useRef(false);
  callback7 = obj3.useCallback((current) => {
    closure_50.current = current;
    closure_51.current = false;
    _undefined6(current);
  }, []);
  let projectId1;
  if (tmp72 != null) {
    projectId1 = tmp72.projectId;
  }
  let tmp78 = projectId1 === projectId;
  if (tmp78) {
    const atResult = stateFromStores1.at(-1);
    let render_id1;
    if (atResult != null) {
      render_id1 = atResult.render_id;
    }
    tmp78 = tmp72.planId === render_id1;
  }
  const items42 = [projectId, stateFromStores1, memo, callback7];
  const effect3 = obj3.useEffect(() => {
    const takeArrivedPlanResult = projectId(12349).takeArrivedPlan(closure_48, projectId, stateFromStores1);
    projectId = takeArrivedPlanResult;
    let current = closure_40.current;
    if (null != takeArrivedPlanResult) {
      if (null == current) {
        const findIndexResult = memo.findIndex((render_id) => render_id.render_id === takeArrivedPlanResult);
        if (findIndexResult >= 0) {
          closure_42.current = false;
          closure_41.current = false;
          const obj2 = { projectId: tmp3, planId: takeArrivedPlanResult };
          callback7(obj2);
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
        tmp(12357);
      }
    }
    let obj = projectId(12349);
    tmp = projectId;
    tmp3 = projectId;
  }, items42);
  const items43 = [projectId];
  const callback8 = obj3.useCallback(() => {
    React6(projectId);
  }, items43);
  const callback9 = obj3.useCallback(() => {
    closure_42.current = false;
    closure_51.current = true;
  }, []);
  const tmp19Result15 = stateFromStores(obj3.useState(null), 2);
  tmp74 = null != tmp72 && tmp72.projectId !== projectId;
  [tmp85, c53] = stateFromStores(obj3.useState(false), 2);
  obj3.useRef(null);
  obj3.useRef(0);
  callback10 = obj3.useCallback(() => {
    const current = ref8.current;
    const current2 = closure_40.current;
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
      tmp5 = tmp.y >= current2.offsetY + current2.viewportHeight - ref9.current;
    }
    _undefined(tmp5);
  }, []);
  const items44 = [callback7, callback10];
  const items45 = [callback4, callback10];
  const callback11 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_40.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    let current = null != ref6.current;
    if (current) {
      current = ref7.current;
    }
    if (current) {
      current = conjureTranscriptScroll.isNearBottom(closure_40.current);
    }
    if (current) {
      callback7(null);
    }
    callback10();
  }, items44);
  const callback12 = obj3.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    let current = ref2.current;
    if (current) {
      current = timestamp < ref3.current;
    }
    if (current) {
      const _Math = Math;
      ref3.current = Math.min(timestamp + c18, ref4.current);
      callback4();
    }
    const current2 = closure_40.current;
    if (null != current2) {
      const obj2 = {};
      const merged = Object.assign(current2);
      obj2.contentHeight = contentHeight;
      if (isNearBottomResult) {
        const _Math2 = Math;
        obj2.offsetY = Math.max(0, contentHeight - current2.viewportHeight);
        let tmp9 = obj2;
      } else {
        tmp9 = obj2;
      }
      tmp8.current = tmp9;
      if (ref.current) {
        tmp10.current = false;
        const current3 = ref.current;
        if (current3 != null) {
          current3.scrollToEnd({ animated: true });
        }
      }
      callback10();
      isNearBottomResult = conjureTranscriptScroll.isNearBottom(current2);
    }
  }, items45);
  const items46 = [callback10];
  const memo7 = obj3.useMemo(() => ({ itemVisiblePercentThreshold: projectId(12358).MIN_VISIBLE_PERCENT }), []);
  const callback13 = obj3.useCallback((arg0) => {
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
    callback10();
  }, items46);
  if (stateFromStores5) {
    const intl3 = tmp2(1125).intl;
    memo6 = intl3.string(tmp5(3863).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1125).intl;
    memo6 = intl2.string(tmp5(3863).xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(1125).intl;
    memo6 = intl.string(tmp5(3863).L9EDub);
  }
  const items47 = [memo, memo4];
  let tmp92;
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
  }, items47);
  if (null != memo4) {
    tmp92 = memo[memo4];
  }
  let checklistLiveResult = null == tmp92;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(12345).checklistLive(tmp92);
    const tmp2Result23 = tmp2(12345);
  }
  if (null != tmp92) {
    const tmp2Result24 = tmp2(12359);
    const conjureTurnStartedAtResult = tmp2(12359).conjureTurnStartedAt(tmp92);
  }
  const items48 = [memo5];
  let tmp96;
  const memo9 = obj3.useMemo(() => {
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
      render_id2 = tmp97.render_id;
    }
    tmp96 = render_id2;
  }
  let tmp99 = null != tmp96;
  if (tmp99) {
    tmp99 = null != obj21 && !obj21.has(tmp96) || tmp85;
    const tmp100 = null != obj21 && !obj21.has(tmp96) || tmp85;
  }
  let tmp101 = null;
  if (stateFromStores3) {
    tmp101 = null;
    if (tmp56) {
      tmp101 = null;
      if (tmp99) {
        tmp101 = memo6;
      }
    }
  }
  const items49 = [bound, memo4, callback10];
  const effect4 = obj3.useEffect(() => {
    closure_54.current = memo4;
    closure_55.current = bound;
    closure_0 = requestAnimationFrame(callback10);
    return () => cancelAnimationFrame(closure_0);
  }, items49);
  const items50 = [memo];
  closure_57 = obj3.useMemo(() => {
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
  }, items50);
  const items51 = [memo];
  onJumpToReplied = obj3.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      closure_42.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items51);
  const items52 = [bound, memo4];
  const callback14 = obj3.useCallback(() => {
    if (null != memo4) {
      closure_42.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items52);
  const callback15 = obj3.useCallback(() => {
    const current = closure_40.current;
    let isNearBottomResult = null != current;
    if (isNearBottomResult) {
      isNearBottomResult = conjureTranscriptScroll.isNearBottom(current);
    }
    if (isNearBottomResult) {
      closure_41.current = true;
    }
  }, []);
  obj3.useRef(false);
  obj3.useRef(false);
  closure_61 = obj3.useCallback((arg0) => {
    let tmp2 = arg0;
    if (arg0) {
      tmp2 = !ref11.current;
    }
    closure_59.current = tmp2;
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
  const items53 = [num];
  const effect5 = obj3.useEffect(() => {
    ref11.current = num > 0;
    let current = ref11.current;
    if (current) {
      current = ref10.current;
    }
    if (current) {
      ref10.current = false;
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
  }, items53);
  const items54 = [projectId];
  const items55 = [projectId];
  const callback16 = obj3.useCallback((arg0, arg1) => {
    closure_41.current = true;
    v65535(projectId, arg0, arg1);
  }, items54);
  let connectionLabelResult = null;
  const callback17 = obj3.useCallback(() => {
    closure_2_8(projectId);
  }, items55);
  if ("open" !== stateFromStores8) {
    connectionLabelResult = tmp2(12362).connectionLabel(stateFromStores8);
    const tmp2Result25 = tmp2(12362);
  }
  const tmp19Result16 = stateFromStores(obj3.useState(false), 2);
  const obj6 = { style: tmp.container, children: null };
  const conjureControlActive = projectId(10799).useConjureControlActive(projectId);
  const items56 = [c15(num(12363), { thinking: stateFromStores3, bleedBottom: num(1630)().bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: null };
  const obj14 = { clearance: tmp61, children: null };
  const obj15 = { ref, fadingEdgeLength, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onLayout: null, onScrollBeginDrag: null, onContentSizeChange: null, onStartReached: null, scrollEventThrottle: 16, keyboardShouldPersistTaps: "handled", contentInset: null, ListHeaderComponent: null, style: null, contentContainerStyle: null, data: null, extraData: null, maintainVisibleContentPosition: null, keyExtractor: null, ListFooterComponent: null, ListEmptyComponent: null, renderItem: null };
  const tmp113 = c25;
  const tmp2Result26 = projectId(10799);
  const tmp2Result27 = projectId(1381);
  obj15.removeClippedSubviews = projectId(1381).isIOS() && undefined;
  obj15.viewabilityConfig = memo7;
  obj15.onViewableItemsChanged = callback13;
  obj15.onScroll = callback11;
  obj15.onLayout = callback6;
  obj15.onScrollBeginDrag = callback9;
  obj15.onContentSizeChange = callback12;
  obj15.onStartReached = callback8;
  const tmp114 = projectId(1381).isIOS() && undefined;
  let tmp115;
  if (tmp2Result28.isIOS()) {
    const obj16 = { top: num };
    tmp115 = obj16;
  }
  obj15.contentInset = tmp115;
  tmp2Result28 = projectId(1381);
  let tmp112Result = null;
  if (!tmp2Result29.isIOS()) {
    tmp112Result = null;
    if (num > 0) {
      const obj17 = { style: null };
      const obj18 = { height: num };
      obj17.style = obj18;
      tmp112Result = tmp112(tmp111, obj17);
    }
  }
  obj15.ListHeaderComponent = tmp112Result;
  const items57 = [tmp.transcript, ];
  tmp2Result29 = projectId(1381);
  const isIOSResult = projectId(1381).isIOS();
  let tmp118 = !isIOSResult;
  if (!isIOSResult) {
    const obj19 = { marginBottom: tmp61 - bound };
    tmp118 = obj19;
  }
  items57[1] = tmp118;
  obj15.style = items57;
  const items58 = [tmp.transcriptContent, ];
  const tmp2Result30 = projectId(1381);
  items58[1] = { paddingBottom: bound + num(587).space.PX_8 };
  obj15.contentContainerStyle = items58;
  obj15.data = memo;
  obj15.extraData = memo3;
  let AUTOSCROLL_THRESHOLD;
  if (!tmp78) {
    AUTOSCROLL_THRESHOLD = tmp2(12357).AUTOSCROLL_THRESHOLD;
  }
  obj15.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold: AUTOSCROLL_THRESHOLD };
  obj15.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  const obj22 = { projectId, messages: memo, draftHasText: tmp40, onAskForIdeas: null, onShow: null };
  let tmp122;
  const obj20 = { paddingBottom: bound + num(587).space.PX_8 };
  const tmp120 = onToggleChecklist;
  if (tmp50) {
    tmp122 = callback1;
  }
  const obj23 = { children: null };
  obj22.onAskForIdeas = tmp122;
  obj22.onShow = callback15;
  const items59 = [c15(num(12366), obj22), c15(projectId(12224).ConjureHostApprovalCards, { projectId })];
  obj23.children = items59;
  obj15.ListFooterComponent = closure_17(tmp120, obj23);
  let tmp123 = "loading" === chatEmptyStateResult;
  if (tmp123) {
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
      obj.replied = closure_57.get(item.render_id);
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
        tmp19 = closure_61;
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
    obj14.children = tmp112(tmp2(7256).FlashList, obj15);
    const items60 = [tmp112(tmp113, obj14), , ];
    let tmp112Result9 = null;
    if (tmp27) {
      const obj24 = { projectId };
      tmp112Result9 = tmp112(tmp5(12537), obj24);
    }
    items60[1] = tmp112Result9;
    let tmp112Result10 = null;
    if (null != tmp101) {
      const obj25 = { line: tmp101, onJumpToActivity: callback14, bottom: tmp5(587).space.PX_12 + tmp61, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
      tmp112Result10 = tmp112(tmp5(12538), obj25);
      const tmp5Result4 = tmp5(12538);
    }
    items60[2] = tmp112Result10;
    obj13.children = items60;
    items56[1] = tmp110(tmp111, obj13);
    const obj26 = { style: tmp.bottomStack, onLayout: callback3, children: null };
    const obj27 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: null, activity: null, projectUsage: null, connLabel: null, controlling: null, connFailed: null, thinkingOpen: null, onToggleThinking: null };
    if (tmp123) {
      tmp123 = 0 === memo.length;
    }
    obj27.recalling = tmp123;
    obj27.activity = stateFromStores6;
    obj27.projectUsage = stateFromStores7;
    obj27.connLabel = connectionLabelResult;
    obj27.controlling = conjureControlActive;
    obj27.connFailed = "failed" === stateFromStores8;
    obj27.thinkingOpen = tmp27;
    obj27.onToggleThinking = callback;
    const items61 = [tmp112(tmp5(12541), obj27), , ];
    if (null == tmp8) {
      if (null == tmp6) {
        if (null == tmp7) {
          const obj28 = { style: tmp.notices, children: null };
          let tmp112Result11 = null;
          if (null != tmp8) {
            const obj29 = { style: tmp.notice, children: null };
            const obj30 = { type: "critical", role: "alert", message: tmp8.message, action: null };
            const obj31 = { text: tmp8.retry.text, onPress: tmp8.retry.onClick };
            obj30.action = obj31;
            obj29.children = tmp112(tmp2(7988).InlineNotice, obj30);
            tmp112Result11 = tmp112(tmp111, obj29);
          }
          const items62 = [tmp112Result11, , , , ];
          let tmp112Result12 = null;
          if (null != tmp6) {
            const obj32 = { style: tmp.notice, children: null };
            ({ message: obj53.message, onDismiss: obj53.onDismiss } = tmp6);
            obj32.children = tmp112(tmp2(7988).InlineNotice, { type: "warning", role: "status", message: null, onDismiss: null });
            tmp112Result12 = tmp112(tmp111, obj32);
            const obj33 = { type: "warning", role: "status", message: null, onDismiss: null };
          }
          items62[1] = tmp112Result12;
          let tmp112Result13 = null;
          if (null != tmp7) {
            const obj34 = { style: tmp.notice, children: null };
            let str4 = "warning";
            if (tmp7.blocked) {
              str4 = "critical";
            }
            const obj35 = { type: str4, role: null, message: null };
            let str5 = "status";
            if (tmp7.blocked) {
              str5 = "alert";
            }
            obj35.role = str5;
            obj35.message = tmp7.message;
            obj34.children = tmp112(tmp2(7988).InlineNotice, obj35);
            tmp112Result13 = tmp112(tmp111, obj34);
          }
          items62[2] = tmp112Result13;
          let tmp112Result14 = null;
          if (null != tmp46.request) {
            const obj36 = { style: tmp.notice, children: null };
            const obj37 = { projectId, request: tmp46.request, canSend: tmp50, onDismiss: tmp46.close, onSent: callback2 };
            obj36.children = tmp112(tmp5(12523), obj37, tmp46.request.id);
            tmp112Result14 = tmp112(tmp111, obj36);
          }
          items62[3] = tmp112Result14;
          let tmp112Result15 = null;
          if (conjureScopeSetupPending) {
            const obj38 = { style: tmp.notice, children: null };
            const obj39 = { projectId };
            obj38.children = tmp112(tmp5(12550), obj39);
            tmp112Result15 = tmp112(tmp111, obj38);
          }
          items62[4] = tmp112Result15;
          obj28.children = items62;
          items61[1] = tmp110(tmp111, obj28);
          const obj40 = { projectId, canSend: tmp50, inputLocked: conjureScopeSetupPending, aiPaused: null, running: null, onSend: null, onInterrupt: null, onDraftHasTextChange: null, hidden: null, onSendToOtherProjects: null };
          let blocked;
          if (tmp7 != null) {
            blocked = tmp7.blocked;
          }
          obj40.aiPaused = true === blocked;
          obj40.running = stateFromStores3;
          obj40.onSend = callback16;
          let tmp136;
          if (stateFromStores3) {
            tmp136 = callback17;
          }
          obj40.onInterrupt = tmp136;
          obj40.onDraftHasTextChange = tmp41;
          obj40.hidden = hidden;
          let open;
          if (null == tmp46.request) {
            open = tmp46.open;
          }
          obj40.onSendToOtherProjects = open;
          items61[2] = tmp112(tmp5(12551), obj40, conjureHeldPrompt);
          obj26.children = items61;
          items56[2] = tmp110(tmp111, obj26);
          obj6.children = items56;
          return tmp110(tmp111, obj6);
        }
      }
    }
    const tmp5Result5 = tmp5(12541);
  } else {
    const obj41 = { style: tmp.placeholder, children: null };
    const intl4 = tmp2(1125).intl;
    if ("unavailable" === chatEmptyStateResult) {
      let AyiQEp = tmp5(3863).Td4Sf4;
    } else {
      AyiQEp = tmp5(3863).AyiQEp;
    }
    const obj42 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
    obj41.children = tmp112(tmp2(5270).Text, obj42);
    tmp112(tmp111, obj41);
  }
  const tmp5Result = num(12366);
});