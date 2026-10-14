// === Module 11796: ConjureNativeChat ===

// Module 11796 (ConjureNativeChat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import _modDef3849 from "module_3849" /* 3849 */;
import LinearGradientDefault from "LinearGradient" /* 5396 */;
import _modDef6247 from "module_6247" /* 6247 */;
import conjureChatTurns from "conjureChatTurns" /* 10665 */;
import conjurePublishCard from "conjurePublishCard" /* 11799 */;
import ConjureTodoState from "ConjureTodoState" /* 11801 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 11802 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 11803 */;
import conjurePendingPlan from "conjurePendingPlan" /* 11804 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 11805 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 11806 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 11811 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 11812 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 11841 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1999 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10663 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10678 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10680 */;
import ConjureChatStore from "ConjureChatStore" /* 10664 */;

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
let ConjureConnectionStore = fn(10663);
({ ensureConnection: closure_7, interruptTurn: closure_8, loadOlderHistory: closure_9, sendUserMessage: c10 } = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let c17 = 500;
let c18 = 52;
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj = _modDef683(BLACK);
items[1] = _modDef683(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5096);
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, bottomStack: null, notice: null, placeholder: null };
const alphaResult = _modDef683(BLACK).alpha(0.2);
obj2.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj2.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notice = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
let obj5 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj2.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
let closure_23 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
const ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? (function TranscriptFade(children) {
  const cResult = c.c(15);
  children = children.children;
  const tmp3 = closure_23();
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
    const bound = Math.max(0, children.clearance - c18);
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
          const tmp30 = value2(_modDef6247, obj7);
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
  const tmp = closure_23();
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
    obj7.height = Math.max(0, children.clearance - c18);
    obj6.style = obj7;
    items[2] = value2(View, obj6);
    obj3.children = items;
    obj2.maskElement = value3(View, obj3);
    obj2.children = children;
    tmp3 = value2(_modDef6247, obj2);
  }
  return tmp3;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  const cResult = projectId(stateFromStores[13]).c(260);
  projectId = projectId.projectId;
  ({ transcriptTopInset, onRestoreVersion } = projectId);
  const hidden = projectId.hidden;
  closure_23();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    items = [stateFromStores9];
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const items1 = [];
    cResult[0] = items;
    cResult[1] = T;
    cResult[2] = items1;
    tmp10 = items1;
    tmp8 = items;
  } else {
    [tmp8, tmp9, tmp10] = cResult;
  }
  let obj = projectId(stateFromStores[13]);
  stateFromStores = projectId(stateFromStores[14]).useStateFromStores(tmp8, T, tmp10);
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
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const ackConjureProjectWhileViewing = tmp2(tmp4[18]).useAckConjureProjectWhileViewing(projectId);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[7] = items2;
      let tmp21 = items2;
    } else {
      tmp21 = cResult[7];
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
      let tmp24 = V;
      const tmp23 = items3;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp24 = cResult[10];
    }
    const obj4 = stateFromStores3;
    const tmp2Result16 = tmp2(tmp4[18]);
    const stateFromStores1 = tmp2(tmp4[14]).useStateFromStores(tmp21, tmp24, tmp23);
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
      const tmp28 = items4;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
    }
    if (cResult[12] !== projectId) {
      class J {
        constructor() {
          publishStatus = closure_12.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      const items5 = [projectId];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[12] = projectId;
      cResult[13] = J;
      cResult[14] = items5;
      let tmp30 = items5;
    } else {
      class J {
        constructor() {
          publishStatus = closure_12.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      tmp30 = cResult[14];
    }
    const tmp2Result17 = tmp2(tmp4[14]);
    const stateFromStores2 = tmp2(tmp4[14]).useStateFromStores(tmp28, J, tmp30);
    if (cResult[15] === stateFromStores1) {
      class J {
        constructor() {
          publishStatus = closure_12.getPublishStatus(projectId);
          state = undefined;
          if (publishStatus != null) {
            state = publishStatus.state;
          }
          if (state == null) {
            state = null;
          }
          return state;
        }
      }
      _slicedToArray = tmp34;
      const _Symbol3 = Symbol;
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      if (tmp38 === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items6 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[18] = items6;
        const tmp39 = items6;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[19] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items7 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[19] = projectId;
        cResult[20] = tmp42;
        cResult[21] = items7;
        let tmp41 = items7;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        tmp41 = cResult[21];
      }
      stateFromStores3 = tmp2(tmp4[14]).useStateFromStores(tmp39, tmp42, tmp41);
      const _Symbol4 = Symbol;
      if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items8 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[22] = items8;
        const tmp46 = items8;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[23] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items9 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[23] = projectId;
        cResult[24] = tmp49;
        cResult[25] = items9;
        let tmp48 = items9;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        tmp48 = cResult[25];
      }
      const tmp2Result19 = tmp2(tmp4[14]);
      const stateFromStores4 = tmp2(tmp4[14]).useStateFromStores(tmp46, tmp49, tmp48);
      const _Symbol5 = Symbol;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items10 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[26] = items10;
        const tmp53 = items10;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[27] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items11 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[27] = projectId;
        cResult[28] = tmp56;
        cResult[29] = items11;
        let tmp55 = items11;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        tmp55 = cResult[29];
      }
      const tmp2Result20 = tmp2(tmp4[14]);
      const stateFromStores5 = tmp2(tmp4[14]).useStateFromStores(tmp53, tmp56, tmp55);
      const _Symbol6 = Symbol;
      if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items12 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[30] = items12;
        const tmp60 = items12;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[31] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items13 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[31] = projectId;
        cResult[32] = tmp63;
        cResult[33] = items13;
        let tmp62 = items13;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        tmp62 = cResult[33];
      }
      const tmp2Result21 = tmp2(tmp4[14]);
      const stateFromStores6 = tmp2(tmp4[14]).useStateFromStores(tmp60, tmp63, tmp62);
      const _Symbol7 = Symbol;
      if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items14 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[34] = items14;
        const tmp67 = items14;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[35] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items15 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[35] = projectId;
        cResult[36] = tmp70;
        cResult[37] = items15;
        let tmp69 = items15;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        tmp69 = cResult[37];
      }
      class H {
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
      const stateFromStores7 = tmp2(tmp4[14]).useStateFromStores(tmp67, tmp70, tmp69);
      const tmp2Result23 = tmp2(tmp4[14]);
      [tmp76, tmp77] = obj4.useState(null);
      View = tmp77;
      let tmp78 = null == tmp76;
      if (!tmp78) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        if (stateFromStores3) {
          class J {
            constructor() {
              publishStatus = closure_12.getPublishStatus(projectId);
              state = undefined;
              if (publishStatus != null) {
                state = publishStatus.state;
              }
              if (state == null) {
                state = null;
              }
              return state;
            }
          }
        }
        tmp78 = tmp79;
      }
      if (!tmp78) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[38] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        cResult[38] = projectId;
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[39] = tmp81;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (stateFromStores3) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      const _Symbol8 = Symbol;
      if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items16 = [ConjureConnectionStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[40] = items16;
        const tmp83 = items16;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[41] !== projectId) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items17 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[41] = projectId;
        cResult[42] = tmp86;
        cResult[43] = items17;
        let tmp85 = items17;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        tmp85 = cResult[43];
      }
      const tmp75 = _slicedToArray(obj4.useState(null), 2);
      const stateFromStores8 = tmp2(tmp4[14]).useStateFromStores(tmp83, tmp86, tmp85);
      const _Symbol9 = Symbol;
      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
        const items18 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[44] = items18;
        const tmp90 = items18;
      } else {
        class J {
          constructor() {
            publishStatus = closure_12.getPublishStatus(projectId);
            state = undefined;
            if (publishStatus != null) {
              state = publishStatus.state;
            }
            if (state == null) {
              state = null;
            }
            return state;
          }
        }
      }
      if (cResult[45] !== projectId) {
        class Re {
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
        cResult[46] = Re;
        cResult[47] = items19;
        let tmp92 = items19;
      } else {
        class Re {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
        tmp92 = cResult[47];
      }
      const tmp2Result24 = tmp2(tmp4[14]);
      stateFromStores9 = tmp2(tmp4[14]).useStateFromStores(tmp90, Re, tmp92);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
        class Re {
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
        const tmp96 = items20;
      } else {
        class Re {
          constructor() {
            return closure_14.hasLoadedHistory(projectId);
          }
        }
      }
      if (cResult[49] !== projectId) {
        class Le {
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
        cResult[50] = Le;
        cResult[51] = items21;
        let tmp98 = items21;
      } else {
        class Le {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp98 = cResult[51];
      }
      const tmp2Result25 = tmp2(tmp4[14]);
      const stateFromStores10 = tmp2(tmp4[14]).useStateFromStores(tmp96, Le, tmp98);
      if (cResult[52] === stateFromStores8) {
        class Le {
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
    tmp34 = withLivePublishCardResult;
  }
  class H {
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
  cResult[5] = H;
  cResult[6] = items22;
  tmp17 = items22;
  tmp16 = H;
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
  let stateFromStores11;
  let memo1;
  c13 = undefined;
  c14 = undefined;
  let onToggleChecklist;
  closure_16 = undefined;
  c17 = undefined;
  fadingEdgeLength = undefined;
  let onTogglePlan;
  closure_20 = undefined;
  closure_21 = undefined;
  let onPickIdea;
  closure_23 = undefined;
  c24 = undefined;
  c25 = undefined;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c31 = undefined;
  c32 = undefined;
  let bound;
  let ref;
  let callback3;
  let callback4;
  c42 = undefined;
  let callback7;
  closure_46 = undefined;
  let onJumpToReplied;
  let tmp = closure_23();
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
  const items4 = [memo1];
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
  const tmp20 = stateFromStores1(stateFromStores2.useState(null), 2);
  const items18 = [stateFromStores11];
  const items19 = [projectId];
  const stateFromStores8 = projectId(stateFromStores[14]).useStateFromStores(items18, () => ConjureConnectionStore.getConnState(projectId), items19);
  const tmp2Result = projectId(stateFromStores[14]);
  const items20 = [c14];
  const items21 = [projectId];
  stateFromStores9 = projectId(stateFromStores[14]).useStateFromStores(items20, () => ConjureChatStore.hasLoadedHistory(projectId), items21);
  const tmp2Result14 = projectId(stateFromStores[14]);
  const items22 = [c14];
  const items23 = [projectId];
  const stateFromStores10 = projectId(stateFromStores[14]).useStateFromStores(items22, () => ConjureChatStore.isHistoryUnavailable(projectId), items23);
  const tmp2Result15 = projectId(stateFromStores[14]);
  const chatEmptyStateResult = projectId(stateFromStores[20]).chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  render_id = null;
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items24 = [memo];
  obj3.useMemo(() => ConjureTodoState.supersededChecklists(memo), items24);
  const tmp2Result16 = projectId(stateFromStores[20]);
  const items25 = [c13];
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
  const tmp2Result17 = projectId(stateFromStores[14]);
  [c13, c14] = stateFromStores1(obj3.useState(() => new Map()), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(stateFromStores[21]).toggleChecklist(get, closure_0, closure_1));
  }, []);
  const items28 = [memo];
  closure_16 = obj3.useMemo(() => conjurePendingPlan.planVersions(memo), items28);
  const tmp19Result = stateFromStores1(obj3.useState(() => new Map()), 2);
  [c17, c18] = stateFromStores1(obj3.useState(() => new Map()), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined3((get) => projectId(stateFromStores[23]).togglePlanCard(get, closure_0, closure_1));
  }, []);
  const items29 = [memo];
  closure_20 = obj3.useMemo(() => ConjureChatGrouping.groupChatRows(memo.map((key) => {
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
  closure_21 = obj3.useCallback(() => {
    const intl = util.intl;
    conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3849.EMgIuY));
  }, items30);
  const items31 = [projectId];
  onPickIdea = obj3.useCallback((implementation_prompt) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const tmp19Result7 = stateFromStores1(obj3.useState(() => new Map()), 2);
  const items32 = [projectId];
  [tmp38, tmp39] = stateFromStores1(require("useConjureDraftHasText")(projectId), 2);
  const items33 = [projectId];
  const callback1 = obj3.useCallback(() => {
    const intl = util.intl;
    collapsed(projectId, intl.string(_modDef3849["t5CN3+"]));
  }, items32);
  closure_23 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, { clarificationAnswers, attachments });
  }, items33);
  const tmp19Result8 = stateFromStores1(require("useConjureDraftHasText")(projectId), 2);
  [c24, c25] = stateFromStores1(obj3.useState(null), 2);
  let tmp43 = tmp42;
  if ("open" !== stateFromStores8) {
    tmp43 = "connecting" === stateFromStores8;
  }
  canSend = tmp43;
  const items34 = [memo];
  memo2 = obj3.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items34);
  const tmp19Result9 = stateFromStores1(obj3.useState(null), 2);
  joined = Array.from(memo1, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  }).join(",");
  const items35 = [tmp43, memo2, joined];
  const items36 = [memo];
  const memo3 = obj3.useMemo(() => ({ canSend, pendingPlanId: memo2, secretStatusesKey: joined }), items35);
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
  let tmp49 = null != memo5;
  if (tmp49) {
    tmp49 = memo5.steps.length > 0 || memo5.tasks.length > 0;
    const tmp50 = memo5.steps.length > 0 || memo5.tasks.length > 0;
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
  [obj18, c31] = stateFromStores1(obj3.useState(null), 2);
  const tmp19Result10 = stateFromStores1(obj3.useState(null), 2);
  [tmp54, c32] = stateFromStores1(obj3.useState(64), 2);
  const callback2 = obj3.useCallback((nativeEvent) => {
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
  bound = tmp54;
  if (!tmp2Result18.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp54, fadingEdgeLength);
  }
  obj3.useRef(null);
  ref = obj3.useRef(null);
  obj3.useRef(false);
  obj3.useRef(true);
  obj3.useRef(0);
  obj3.useRef(0);
  callback3 = obj3.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback4 = obj3.useCallback(() => {
    const timestamp = Date.now();
    closure_38.current = timestamp + c17;
    closure_39.current = timestamp + 2000;
  }, []);
  const items39 = [projectId, callback4];
  const effect1 = obj3.useEffect(() => {
    closure_37.current = true;
    callback4();
  }, items39);
  const items40 = [stateFromStores9, callback4];
  const effect2 = obj3.useEffect(() => {
    if (stateFromStores9) {
      callback4();
    }
  }, items40);
  const items41 = [projectId];
  const callback5 = obj3.useCallback(() => {
    React6(projectId);
  }, items41);
  const callback6 = obj3.useCallback(() => {
    closure_37.current = false;
  }, []);
  tmp2Result18 = projectId(stateFromStores[31]);
  [tmp66, c42] = stateFromStores1(obj3.useState(false), 2);
  obj3.useRef(null);
  obj3.useRef(0);
  callback7 = obj3.useCallback(() => {
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
  const items42 = [callback7];
  const items43 = [callback3, callback7];
  const callback8 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_35.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
    callback7();
  }, items42);
  const callback9 = obj3.useCallback((arg0, contentHeight) => {
    const timestamp = Date.now();
    let current = ref3.current;
    if (current) {
      current = timestamp < ref4.current;
    }
    if (current) {
      const _Math = Math;
      ref4.current = Math.min(timestamp + c17, ref5.current);
      callback3();
    }
    const current2 = ref.current;
    if (null != current2) {
      const viewportHeight = current2.viewportHeight;
      if (current2.contentHeight - current2.offsetY - viewportHeight <= 0.2 * viewportHeight) {
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
      callback7();
    }
  }, items43);
  const items44 = [callback7];
  const memo7 = obj3.useMemo(() => ({ itemVisiblePercentThreshold: projectId(stateFromStores[32]).MIN_VISIBLE_PERCENT }), []);
  const callback10 = obj3.useCallback((arg0) => {
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
    callback7();
  }, items44);
  if (stateFromStores5) {
    const intl3 = tmp2(tmp3[26]).intl;
    memo6 = intl3.string(require("module_3849").mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(tmp3[26]).intl;
    memo6 = intl2.string(require("module_3849").xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[26]).intl;
    memo6 = intl.string(require("module_3849").L9EDub);
  }
  const items45 = [memo, memo4];
  let tmp73;
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
    tmp73 = memo[memo4];
  }
  let checklistLiveResult = null == tmp73;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(tmp3[21]).checklistLive(tmp73);
    const tmp2Result19 = tmp2(tmp3[21]);
  }
  if (null != tmp73) {
    const tmp2Result20 = tmp2(tmp3[33]);
    const conjureTurnStartedAtResult = tmp2(tmp3[33]).conjureTurnStartedAt(tmp73);
  }
  const items46 = [memo5];
  let tmp77;
  const memo9 = obj3.useMemo(() => {
    if (null != memo5) {
      let runningTodoAgentsResult = ConjureTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items46);
  if (null != memo4) {
    let render_id1;
    if (memo[memo4] != null) {
      render_id1 = tmp78.render_id;
    }
    tmp77 = render_id1;
  }
  let tmp80 = null != tmp77;
  if (tmp80) {
    tmp80 = null != obj18 && !obj18.has(tmp77) || tmp66;
    const tmp81 = null != obj18 && !obj18.has(tmp77) || tmp66;
  }
  let tmp82 = null;
  if (stateFromStores3) {
    tmp82 = null;
    if (tmp49) {
      tmp82 = null;
      if (tmp80) {
        tmp82 = memo6;
      }
    }
  }
  const items47 = [bound, memo4, callback7];
  const effect3 = obj3.useEffect(() => {
    closure_43.current = memo4;
    closure_44.current = bound;
    closure_0 = requestAnimationFrame(callback7);
    return () => cancelAnimationFrame(closure_0);
  }, items47);
  const items48 = [memo];
  closure_46 = obj3.useMemo(() => {
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
      closure_37.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items49);
  const items50 = [bound, memo4];
  const callback11 = obj3.useCallback(() => {
    if (null != memo4) {
      closure_37.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items50);
  const items51 = [projectId];
  const callback12 = obj3.useCallback(() => {
    const current = ref.current;
    let tmp = null != current;
    if (tmp) {
      const viewportHeight = current.viewportHeight;
      tmp = current.contentHeight - current.offsetY - viewportHeight <= 0.2 * viewportHeight;
    }
    if (tmp) {
      closure_36.current = true;
    }
  }, []);
  const items52 = [projectId];
  const callback13 = obj3.useCallback((arg0, arg1) => {
    closure_36.current = true;
    collapsed(projectId, arg0, arg1);
  }, items51);
  let connectionLabelResult = null;
  const callback14 = obj3.useCallback(() => {
    closure_2_8(projectId);
  }, items52);
  if ("open" !== stateFromStores8) {
    connectionLabelResult = tmp2(tmp3[36]).connectionLabel(stateFromStores8);
    const tmp2Result21 = tmp2(tmp3[36]);
  }
  const tmp19Result12 = stateFromStores1(obj3.useState(false), 2);
  const obj12 = { style: tmp.container, children: null };
  const conjureControlActive = projectId(stateFromStores[37]).useConjureControlActive(projectId);
  const items53 = [onToggleChecklist(require("ConjureShellGlow"), { thinking: stateFromStores3, bleedBottom: require("useSafeAreaInsets")().bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: null };
  const obj14 = { clearance: tmp54, children: null };
  const obj15 = { ref, fadingEdgeLength, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onScrollBeginDrag: null, onContentSizeChange: null, onStartReached: null, scrollEventThrottle: 16, contentInset: null, ListHeaderComponent: null, style: null, contentContainerStyle: null, data: null, extraData: null, maintainVisibleContentPosition: null, keyExtractor: null, ListFooterComponent: null, ListEmptyComponent: null, renderItem: null };
  const tmp2Result22 = projectId(stateFromStores[37]);
  const tmp93 = c24;
  const tmp2Result23 = projectId(stateFromStores[31]);
  obj15.removeClippedSubviews = projectId(stateFromStores[31]).isIOS() && undefined;
  obj15.viewabilityConfig = memo7;
  obj15.onViewableItemsChanged = callback10;
  obj15.onScroll = callback8;
  obj15.onScrollBeginDrag = callback6;
  obj15.onContentSizeChange = callback9;
  obj15.onStartReached = callback5;
  const tmp94 = projectId(stateFromStores[31]).isIOS() && undefined;
  let tmp95;
  if (tmp2Result24.isIOS()) {
    const obj16 = { top: num };
    tmp95 = obj16;
  }
  obj15.contentInset = tmp95;
  tmp2Result24 = projectId(stateFromStores[31]);
  let tmp92Result = null;
  if (!tmp2Result25.isIOS()) {
    tmp92Result = null;
    if (num > 0) {
      const obj17 = { style: null };
      const obj19 = { height: num };
      obj17.style = obj19;
      tmp92Result = tmp92(tmp91, obj17);
    }
  }
  obj15.ListHeaderComponent = tmp92Result;
  const items54 = [tmp.transcript, ];
  tmp2Result25 = projectId(stateFromStores[31]);
  const isIOSResult = projectId(stateFromStores[31]).isIOS();
  let tmp98 = !isIOSResult;
  if (!isIOSResult) {
    const obj20 = { marginBottom: tmp54 - bound };
    tmp98 = obj20;
  }
  items54[1] = tmp98;
  obj15.style = items54;
  const items55 = [tmp.transcriptContent, ];
  const tmp2Result26 = projectId(stateFromStores[31]);
  items55[1] = { paddingBottom: bound + require("native").space.PX_8 };
  obj15.contentContainerStyle = items55;
  obj15.data = memo;
  obj15.extraData = memo3;
  obj15.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 };
  obj15.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  const obj22 = { projectId, messages: memo, draftHasText: tmp38, onAskForIdeas: null, onShow: null };
  let tmp100;
  const obj21 = { paddingBottom: bound + require("native").space.PX_8 };
  if (tmp43) {
    tmp100 = callback1;
  }
  obj22.onAskForIdeas = tmp100;
  obj22.onShow = callback12;
  obj15.ListFooterComponent = onToggleChecklist(require("ConjureTipsHost"), obj22);
  let tmp101 = "loading" === chatEmptyStateResult;
  if (tmp101) {
    obj15.ListEmptyComponent = null;
    obj15.renderItem = function renderItem(arg0) {
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, checklistSuperseded: null, secretRequestStatus: null, checklistExpanded: null, onToggleChecklist: null, planVersion: null, planSuperseded: null, planExpanded: null, onTogglePlan: null, replied: null, onJumpToReplied: null, onApprovePlan: null, onPickIdea: null, onAnswerClarification: null, clarificationDismissed: null, onDismissClarification: null, onRestoreVersion: null };
      let flag = closure_20[index];
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
      obj.checklistExpanded = ConjureTodoState.checklistExpanded(c13, item.render_id, set.has(item.render_id));
      obj.onToggleChecklist = onToggleChecklist;
      value = closure_16.get(item.render_id);
      let version;
      if (value != null) {
        version = value.version;
      }
      obj.planVersion = version;
      value3 = closure_16.get(item.render_id);
      let superseded;
      if (value3 != null) {
        superseded = value3.superseded;
      }
      obj.planSuperseded = true === superseded;
      value4 = closure_16.get(item.render_id);
      let superseded1;
      if (value4 != null) {
        superseded1 = value4.superseded;
      }
      obj.planExpanded = conjurePendingPlan.planCardExpanded(c17, item.render_id, true === superseded1);
      obj.onTogglePlan = onTogglePlan;
      obj.replied = closure_46.get(item.render_id);
      obj.onJumpToReplied = onJumpToReplied;
      let tmp13;
      if (closure_26) {
        if (item.render_id === memo2) {
          tmp13 = closure_21;
        }
      }
      obj.onApprovePlan = tmp13;
      obj.onPickIdea = onPickIdea;
      let tmp15;
      if (closure_26) {
        tmp15 = closure_23;
      }
      obj.onAnswerClarification = tmp15;
      let tmp16 = null != item.clarification;
      if (tmp16) {
        tmp16 = item.clarification.id === c24;
      }
      obj.clarificationDismissed = tmp16;
      obj.onDismissClarification = onDismissClarification;
      let tmp18;
      if (!stateFromStores3) {
        tmp18 = closure_1_1;
      }
      obj.onRestoreVersion = tmp18;
      return value2(tmp3, obj);
    };
    obj14.children = tmp92(tmp2(tmp3[42]).FlashList, obj15);
    const items56 = [tmp92(tmp93, obj14), , ];
    let tmp92Result6 = null;
    if (tmp27) {
      const obj23 = { projectId };
      tmp92Result6 = tmp92(require("ConjureThinkingOverlay"), obj23);
    }
    items56[1] = tmp92Result6;
    let tmp92Result7 = null;
    if (null != tmp82) {
      const obj24 = { line: tmp82, onJumpToActivity: callback11, bottom: require("native").space.PX_12 + tmp54, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
      tmp92Result7 = tmp92(require("ConjureFloatingActivity"), obj24);
      const tmp5Result4 = require("ConjureFloatingActivity");
    }
    items56[2] = tmp92Result7;
    obj13.children = items56;
    items53[1] = tmp90(tmp91, obj13);
    const obj25 = { style: tmp.bottomStack, onLayout: callback2, children: null };
    const obj26 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: null, activity: null, projectUsage: null, connLabel: null, controlling: null, connFailed: null, thinkingOpen: null, onToggleThinking: null };
    if (tmp101) {
      tmp101 = 0 === memo.length;
    }
    obj26.recalling = tmp101;
    obj26.activity = stateFromStores6;
    obj26.projectUsage = stateFromStores7;
    obj26.connLabel = connectionLabelResult;
    obj26.controlling = conjureControlActive;
    obj26.connFailed = "failed" === stateFromStores8;
    obj26.thinkingOpen = tmp27;
    obj26.onToggleThinking = callback;
    const items57 = [tmp92(require("ConjureNativeStatusStrip"), obj26), , , ];
    let tmp92Result8 = null;
    if (null != tmp7) {
      const obj27 = { style: tmp.notice, children: null };
      ({ message: obj45.message, retry: obj45.action } = tmp7);
      obj27.children = tmp92(tmp2(tmp3[46]).NewInlineNotice, { type: "critical", role: "alert", message: null, action: null });
      tmp92Result8 = tmp92(tmp91, obj27);
      const obj28 = { type: "critical", role: "alert", message: null, action: null };
    }
    items57[1] = tmp92Result8;
    let tmp92Result9 = null;
    if (null != tmp6) {
      const obj29 = { style: tmp.notice, children: null };
      ({ message: obj47.message, onDismiss: obj47.onDismiss } = tmp6);
      obj29.children = tmp92(tmp2(tmp3[46]).NewInlineNotice, { type: "warning", role: "status", message: null, onDismiss: null });
      tmp92Result9 = tmp92(tmp91, obj29);
      const obj30 = { type: "warning", role: "status", message: null, onDismiss: null };
    }
    items57[2] = tmp92Result9;
    const obj31 = { projectId, canSend: tmp43, running: stateFromStores3, onSend: callback13, onInterrupt: null, onDraftHasTextChange: null, hidden: null };
    let tmp110;
    const tmp5Result5 = require("ConjureNativeStatusStrip");
    if (stateFromStores3) {
      tmp110 = callback14;
    }
    obj31.onInterrupt = tmp110;
    obj31.onDraftHasTextChange = tmp39;
    obj31.hidden = hidden;
    items57[3] = tmp92(require("ConjureNativeComposer"), obj31);
    obj25.children = items57;
    items53[2] = tmp90(tmp91, obj25);
    obj12.children = items53;
    return tmp90(tmp91, obj12);
  } else {
    const obj32 = { style: tmp.placeholder, children: null };
    const intl4 = tmp2(tmp3[26]).intl;
    if ("unavailable" === chatEmptyStateResult) {
      let AyiQEp = require("module_3849").Td4Sf4;
    } else {
      AyiQEp = require("module_3849").AyiQEp;
    }
    const obj33 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
    obj32.children = tmp92(tmp2(tmp3[40]).Text, obj33);
    tmp92(tmp91, obj32);
  }
  const tmp5Result = require("ConjureTipsHost");
});