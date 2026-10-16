// === Module 12043: ConjureNativeChat ===

// Module 12043 (ConjureNativeChat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import util from "util" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import _modDef3865 from "module_3865" /* 3865 */;
import LinearGradientDefault from "LinearGradient" /* 5454 */;
import _modDef6467 from "module_6467" /* 6467 */;
import conjureChatTurns from "conjureChatTurns" /* 10900 */;
import conjurePublishCard from "conjurePublishCard" /* 12046 */;
import ConjureTodoState from "ConjureTodoState" /* 12048 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12049 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12050 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12051 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12052 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12053 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12054 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12059 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12060 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12089 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 2001 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10898 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10913 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10915 */;
import ConjureChatStore from "ConjureChatStore" /* 10899 */;

const require = globalThis.__r;

require = fn;
let View = fn(17).View;
let ConjureConnectionStore = fn(10898);
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
const createStyles = fn(5154);
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
          const tmp30 = value2(_modDef6467, obj7);
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
    tmp3 = value2(_modDef6467, obj2);
  }
  return tmp3;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeChat(projectId) {
  const cResult = projectId(stateFromStores[13]).c(262);
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
    tmp6 = items;
    tmp8 = items1;
  } else {
    [tmp6, tmp7, tmp8] = cResult;
  }
  let obj = projectId(stateFromStores[13]);
  stateFromStores = projectId(stateFromStores[14]).useStateFromStores(tmp6, T, tmp8);
  onRestoreVersion(stateFromStores[15])(projectId);
  onRestoreVersion(stateFromStores[16])(projectId);
  const tmpResult = projectId(stateFromStores[14]);
  const conjureRemixStartedAt = projectId(stateFromStores[16]).useConjureRemixStartedAt(projectId);
  const bottom = onRestoreVersion(tmp2[17])().bottom;
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === projectId) {
      let tmp14 = cResult[5];
      let tmp15 = cResult[6];
    }
    const effect = stateFromStores3.useEffect(tmp14, tmp15);
    class T {
      constructor() {
        return "active" === closure_6.getState();
      }
    }
    const ackConjureProjectWhileViewing = obj4.useAckConjureProjectWhileViewing(projectId, stateFromStores);
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const items2 = [ConjureChatStore];
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      cResult[7] = items2;
      let tmp19 = items2;
    } else {
      tmp19 = cResult[7];
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
      let tmp22 = V;
      const tmp21 = items3;
    } else {
      class V {
        constructor() {
          return closure_14.getMessages(projectId);
        }
      }
      tmp22 = cResult[10];
    }
    const stateFromStores1 = tmp(tmp2[14]).useStateFromStores(tmp19, tmp22, tmp21);
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
      const tmp24 = items4;
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
      let tmp26 = items5;
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
      tmp26 = cResult[14];
    }
    const tmpResult15 = tmp(tmp2[14]);
    const stateFromStores2 = tmp(tmp2[14]).useStateFromStores(tmp24, J, tmp26);
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
      _slicedToArray = tmp28;
      const _Symbol3 = Symbol;
      class T {
        constructor() {
          return "active" === closure_6.getState();
        }
      }
      if (tmp30 === Symbol.for("react.memo_cache_sentinel")) {
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
        const tmp31 = items6;
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
        cResult[20] = tmp34;
        cResult[21] = items7;
        let tmp33 = items7;
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
        tmp33 = cResult[21];
      }
      stateFromStores3 = tmp(tmp2[14]).useStateFromStores(tmp31, tmp34, tmp33);
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
        const tmp36 = items8;
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
        cResult[24] = tmp39;
        cResult[25] = items9;
        let tmp38 = items9;
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
        tmp38 = cResult[25];
      }
      const tmpResult17 = tmp(tmp2[14]);
      const stateFromStores4 = tmp(tmp2[14]).useStateFromStores(tmp36, tmp39, tmp38);
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
        const tmp41 = items10;
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
        cResult[28] = tmp44;
        cResult[29] = items11;
        let tmp43 = items11;
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
        tmp43 = cResult[29];
      }
      const tmpResult18 = tmp(tmp2[14]);
      const stateFromStores5 = tmp(tmp2[14]).useStateFromStores(tmp41, tmp44, tmp43);
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
        const tmp46 = items12;
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
        cResult[32] = tmp49;
        cResult[33] = items13;
        let tmp48 = items13;
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
        tmp48 = cResult[33];
      }
      const tmpResult19 = tmp(tmp2[14]);
      const stateFromStores6 = tmp(tmp2[14]).useStateFromStores(tmp46, tmp49, tmp48);
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
        const tmp51 = items14;
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
        cResult[36] = tmp54;
        cResult[37] = items15;
        let tmp53 = items15;
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
        tmp53 = cResult[37];
      }
      const tmpResult20 = tmp(tmp2[14]);
      const stateFromStores7 = tmp(tmp2[14]).useStateFromStores(tmp51, tmp54, tmp53);
      class N {
        constructor() {
          if (closure_2) {
            tmp = ensureConnection;
            tmp2 = projectId;
            tmp3 = ensureConnection(projectId);
          }
          return;
        }
      }
      [tmp59, tmp60] = tmp58;
      View = tmp60;
      let tmp61 = null == tmp59;
      if (!tmp61) {
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
        tmp61 = tmp62;
      }
      if (!tmp61) {
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
        cResult[39] = tmp64;
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
        const tmp66 = items16;
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
        cResult[42] = tmp69;
        cResult[43] = items17;
        let tmp68 = items17;
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
        tmp68 = cResult[43];
      }
      const tmpResult21 = tmp(tmp2[14]);
      const stateFromStores8 = tmp(tmp2[14]).useStateFromStores(tmp66, tmp69, tmp68);
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
        const tmp71 = items18;
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
        const items19 = [projectId];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[45] = projectId;
        cResult[46] = tmp74;
        cResult[47] = items19;
        let tmp73 = items19;
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
        tmp73 = cResult[47];
      }
      const tmpResult22 = tmp(tmp2[14]);
      stateFromStores9 = tmp(tmp2[14]).useStateFromStores(tmp71, tmp74, tmp73);
      const _Symbol10 = Symbol;
      if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
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
        const items20 = [ConjureChatStore];
        class T {
          constructor() {
            return "active" === closure_6.getState();
          }
        }
        cResult[48] = items20;
        const tmp76 = items20;
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
        let tmp78 = items21;
      } else {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
        tmp78 = cResult[51];
      }
      const tmpResult23 = tmp(tmp2[14]);
      const stateFromStores10 = tmp(tmp2[14]).useStateFromStores(tmp76, Be, tmp78);
      if (cResult[52] === stateFromStores8) {
        class Be {
          constructor() {
            return closure_14.isHistoryUnavailable(projectId);
          }
        }
      }
      const tmpResult24 = tmp(tmp2[14]);
      let obj2 = { historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 };
      const chatEmptyStateResult = tmp(tmp2[20]).chatEmptyState(obj2);
      cResult[52] = stateFromStores8;
      cResult[53] = stateFromStores9;
      cResult[54] = stateFromStores10;
      cResult[55] = chatEmptyStateResult;
      const tmpResult25 = tmp(tmp2[20]);
    }
    const tmpResult16 = tmp(tmp2[14]);
    const withLivePublishCardResult = tmp(tmp2[19]).withLivePublishCard(stateFromStores1, stateFromStores2);
    cResult[15] = stateFromStores1;
    cResult[16] = stateFromStores2;
    cResult[17] = withLivePublishCardResult;
    tmp28 = withLivePublishCardResult;
    const tmpResult26 = tmp(tmp2[19]);
  }
  class N {
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
  cResult[5] = N;
  cResult[6] = items22;
  tmp15 = items22;
  tmp14 = N;
  const tmpResult14 = projectId(stateFromStores[16]);
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
  let dismissedAppBuildRequestId;
  let onDismissAppBuildRequest;
  let canSend;
  let memo2;
  let joined;
  let memo4;
  let memo5;
  c33 = undefined;
  c34 = undefined;
  let bound;
  let ref;
  let callback3;
  let callback4;
  c44 = undefined;
  let callback7;
  closure_48 = undefined;
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
  const ackConjureProjectWhileViewing = projectId(stateFromStores[18]).useAckConjureProjectWhileViewing(projectId, stateFromStores);
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
  let tmp20 = stateFromStores1(stateFromStores2.useState(null), 2);
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
    _undefined2((get) => projectId(stateFromStores[23]).toggleConjureCard(get, closure_0, closure_1));
  }, []);
  const items28 = [memo];
  closure_16 = obj3.useMemo(() => conjurePendingPlan.planVersions(memo), items28);
  const tmp19Result = stateFromStores1(obj3.useState(() => new Map()), 2);
  [c17, c18] = stateFromStores1(obj3.useState(() => new Map()), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined3((get) => projectId(stateFromStores[23]).toggleConjureCard(get, closure_0, closure_1));
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
    conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3865.EMgIuY));
  }, items30);
  const items31 = [projectId];
  onPickIdea = obj3.useCallback((implementation_prompt) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items31);
  const tmp19Result8 = stateFromStores1(obj3.useState(() => new Map()), 2);
  const items32 = [projectId];
  [tmp38, tmp39] = stateFromStores1(require("useConjureDraftHasText")(projectId), 2);
  const items33 = [projectId];
  const callback1 = obj3.useCallback(() => {
    const intl = util.intl;
    collapsed(projectId, intl.string(_modDef3865["t5CN3+"]));
  }, items32);
  closure_23 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, { clarificationAnswers, attachments });
  }, items33);
  const tmp19Result9 = stateFromStores1(require("useConjureDraftHasText")(projectId), 2);
  [c24, c25] = stateFromStores1(obj3.useState(null), 2);
  const tmp19Result11 = stateFromStores1(obj3.useState(null), 2);
  dismissedAppBuildRequestId = tmp19Result11[0];
  onDismissAppBuildRequest = tmp19Result11[1];
  let tmp45 = tmp44;
  if ("open" !== stateFromStores8) {
    tmp45 = "connecting" === stateFromStores8;
  }
  canSend = tmp45;
  const items34 = [memo];
  memo2 = obj3.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items34);
  const tmp19Result10 = stateFromStores1(obj3.useState(null), 2);
  joined = Array.from(memo1, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  }).join(",");
  const items35 = [tmp45, memo2, joined, dismissedAppBuildRequestId];
  const items36 = [memo];
  const memo3 = obj3.useMemo(() => ({ canSend, pendingPlanId: memo2, secretStatusesKey: joined, dismissedAppBuildRequestId }), items35);
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
  [obj18, c33] = stateFromStores1(obj3.useState(null), 2);
  const tmp19Result12 = stateFromStores1(obj3.useState(null), 2);
  [tmp56, c34] = stateFromStores1(obj3.useState(64), 2);
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
  const tmp19Result13 = stateFromStores1(obj3.useState(64), 2);
  bound = tmp56;
  if (!tmp2Result18.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp56, fadingEdgeLength);
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
    closure_40.current = timestamp + c17;
    closure_41.current = timestamp + 2000;
  }, []);
  const items39 = [projectId, callback4];
  const effect1 = obj3.useEffect(() => {
    closure_39.current = true;
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
    closure_39.current = false;
  }, []);
  tmp2Result18 = projectId(stateFromStores[32]);
  [tmp68, c44] = stateFromStores1(obj3.useState(false), 2);
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
    closure_37.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
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
  const memo7 = obj3.useMemo(() => ({ itemVisiblePercentThreshold: projectId(stateFromStores[33]).MIN_VISIBLE_PERCENT }), []);
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
    const intl3 = tmp2(tmp3[27]).intl;
    memo6 = intl3.string(require("module_3865").mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(tmp3[27]).intl;
    memo6 = intl2.string(require("module_3865").xnCAaP);
  } else if (memo6 == null) {
    let intl = tmp2(tmp3[27]).intl;
    memo6 = intl.string(require("module_3865").L9EDub);
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
    checklistLiveResult = tmp2(tmp3[21]).checklistLive(tmp75);
    const tmp2Result19 = tmp2(tmp3[21]);
  }
  if (null != tmp75) {
    const tmp2Result20 = tmp2(tmp3[34]);
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
    let render_id1;
    if (memo[memo4] != null) {
      render_id1 = tmp80.render_id;
    }
    tmp79 = render_id1;
  }
  let tmp82 = null != tmp79;
  if (tmp82) {
    tmp82 = null != obj18 && !obj18.has(tmp79) || tmp68;
    const tmp83 = null != obj18 && !obj18.has(tmp79) || tmp68;
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
  const items47 = [bound, memo4, callback7];
  const effect3 = obj3.useEffect(() => {
    closure_45.current = memo4;
    closure_46.current = bound;
    closure_0 = requestAnimationFrame(callback7);
    return () => cancelAnimationFrame(closure_0);
  }, items47);
  const items48 = [memo];
  closure_48 = obj3.useMemo(() => {
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
  }, items48);
  const items49 = [memo];
  onJumpToReplied = obj3.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      closure_39.current = false;
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
      closure_39.current = false;
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
      closure_38.current = true;
    }
  }, []);
  const items52 = [projectId];
  const callback13 = obj3.useCallback((arg0, arg1) => {
    closure_38.current = true;
    collapsed(projectId, arg0, arg1);
  }, items51);
  let connectionLabelResult = null;
  const callback14 = obj3.useCallback(() => {
    closure_2_8(projectId);
  }, items52);
  if ("open" !== stateFromStores8) {
    connectionLabelResult = tmp2(tmp3[37]).connectionLabel(stateFromStores8);
    const tmp2Result21 = tmp2(tmp3[37]);
  }
  const tmp19Result14 = stateFromStores1(obj3.useState(false), 2);
  const obj12 = { style: tmp.container, children: null };
  const conjureControlActive = projectId(stateFromStores[38]).useConjureControlActive(projectId);
  const items53 = [onToggleChecklist(require("ConjureShellGlow"), { thinking: stateFromStores3, bleedBottom: require("useSafeAreaInsets")().bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: null };
  const obj14 = { clearance: tmp56, children: null };
  const obj15 = { ref, fadingEdgeLength, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onScrollBeginDrag: null, onContentSizeChange: null, onStartReached: null, scrollEventThrottle: 16, contentInset: null, ListHeaderComponent: null, style: null, contentContainerStyle: null, data: null, extraData: null, maintainVisibleContentPosition: null, keyExtractor: null, ListFooterComponent: null, ListEmptyComponent: null, renderItem: null };
  const tmp2Result22 = projectId(stateFromStores[38]);
  const tmp95 = c24;
  const tmp2Result23 = projectId(stateFromStores[32]);
  obj15.removeClippedSubviews = projectId(stateFromStores[32]).isIOS() && undefined;
  obj15.viewabilityConfig = memo7;
  obj15.onViewableItemsChanged = callback10;
  obj15.onScroll = callback8;
  obj15.onScrollBeginDrag = callback6;
  obj15.onContentSizeChange = callback9;
  obj15.onStartReached = callback5;
  const tmp96 = projectId(stateFromStores[32]).isIOS() && undefined;
  let tmp97;
  if (tmp2Result24.isIOS()) {
    const obj16 = { top: num };
    tmp97 = obj16;
  }
  obj15.contentInset = tmp97;
  tmp2Result24 = projectId(stateFromStores[32]);
  let tmp94Result = null;
  if (!tmp2Result25.isIOS()) {
    tmp94Result = null;
    if (num > 0) {
      const obj17 = { style: null };
      const obj19 = { height: num };
      obj17.style = obj19;
      tmp94Result = tmp94(tmp93, obj17);
    }
  }
  obj15.ListHeaderComponent = tmp94Result;
  const items54 = [tmp.transcript, ];
  tmp2Result25 = projectId(stateFromStores[32]);
  const isIOSResult = projectId(stateFromStores[32]).isIOS();
  let tmp100 = !isIOSResult;
  if (!isIOSResult) {
    const obj20 = { marginBottom: tmp56 - bound };
    tmp100 = obj20;
  }
  items54[1] = tmp100;
  obj15.style = items54;
  const items55 = [tmp.transcriptContent, ];
  const tmp2Result26 = projectId(stateFromStores[32]);
  items55[1] = { paddingBottom: bound + require("native").space.PX_8 };
  obj15.contentContainerStyle = items55;
  obj15.data = memo;
  obj15.extraData = memo3;
  obj15.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 };
  obj15.keyExtractor = function keyExtractor(render_id) {
    return render_id.render_id;
  };
  const obj22 = { projectId, messages: memo, draftHasText: tmp38, onAskForIdeas: null, onShow: null };
  let tmp102;
  const obj21 = { paddingBottom: bound + require("native").space.PX_8 };
  if (tmp45) {
    tmp102 = callback1;
  }
  obj22.onAskForIdeas = tmp102;
  obj22.onShow = callback12;
  obj15.ListFooterComponent = onToggleChecklist(require("ConjureTipsHost"), obj22);
  let tmp103 = "loading" === chatEmptyStateResult;
  if (tmp103) {
    obj15.ListEmptyComponent = null;
    obj15.renderItem = function renderItem(arg0) {
      ({ item, index } = arg0);
      const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, checklistSuperseded: null, secretRequestStatus: null, checklistExpanded: null, onToggleChecklist: null, planVersion: null, planSuperseded: null, planExpanded: null, onTogglePlan: null, replied: null, onJumpToReplied: null, onApprovePlan: null, onPickIdea: null, onAnswerClarification: null, clarificationDismissed: null, onDismissClarification: null, canSend: null, appBuildRequestDismissed: null, onDismissAppBuildRequest: null, onRestoreVersion: null };
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
      obj.checklistExpanded = conjureCardOverrides.conjureCardExpanded(c13, item.render_id, set.has(item.render_id));
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
      obj.planExpanded = conjureCardOverrides.conjureCardExpanded(c17, item.render_id, true === superseded1);
      obj.onTogglePlan = onTogglePlan;
      obj.replied = closure_48.get(item.render_id);
      obj.onJumpToReplied = onJumpToReplied;
      let tmp13;
      if (canSend) {
        if (item.render_id === memo2) {
          tmp13 = closure_21;
        }
      }
      obj.onApprovePlan = tmp13;
      obj.onPickIdea = onPickIdea;
      let tmp15;
      if (canSend) {
        tmp15 = closure_23;
      }
      obj.onAnswerClarification = tmp15;
      let tmp16 = null != item.clarification;
      if (tmp16) {
        tmp16 = item.clarification.id === c24;
      }
      obj.clarificationDismissed = tmp16;
      obj.onDismissClarification = onDismissClarification;
      obj.canSend = canSend;
      let tmp18 = null != item.appBuildRequest;
      if (tmp18) {
        tmp18 = item.appBuildRequest.id === first;
      }
      obj.appBuildRequestDismissed = tmp18;
      obj.onDismissAppBuildRequest = onDismissAppBuildRequest;
      let tmp20;
      if (!stateFromStores3) {
        tmp20 = closure_1_1;
      }
      obj.onRestoreVersion = tmp20;
      return value2(tmp3, obj);
    };
    obj14.children = tmp94(tmp2(tmp3[43]).FlashList, obj15);
    const items56 = [tmp94(tmp95, obj14), , ];
    let tmp94Result6 = null;
    if (tmp27) {
      const obj23 = { projectId };
      tmp94Result6 = tmp94(require("ConjureThinkingOverlay"), obj23);
    }
    items56[1] = tmp94Result6;
    let tmp94Result7 = null;
    if (null != tmp84) {
      const obj24 = { line: tmp84, onJumpToActivity: callback11, bottom: require("native").space.PX_12 + tmp56, todos: memo8, todosLive: checklistLiveResult, agents: memo9 };
      tmp94Result7 = tmp94(require("ConjureFloatingActivity"), obj24);
      const tmp5Result4 = require("ConjureFloatingActivity");
    }
    items56[2] = tmp94Result7;
    obj13.children = items56;
    items53[1] = tmp92(tmp93, obj13);
    const obj25 = { style: tmp.bottomStack, onLayout: callback2, children: null };
    const obj26 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: null, activity: null, projectUsage: null, connLabel: null, controlling: null, connFailed: null, thinkingOpen: null, onToggleThinking: null };
    if (tmp103) {
      tmp103 = 0 === memo.length;
    }
    obj26.recalling = tmp103;
    obj26.activity = stateFromStores6;
    obj26.projectUsage = stateFromStores7;
    obj26.connLabel = connectionLabelResult;
    obj26.controlling = conjureControlActive;
    obj26.connFailed = "failed" === stateFromStores8;
    obj26.thinkingOpen = tmp27;
    obj26.onToggleThinking = callback;
    const items57 = [tmp94(require("ConjureNativeStatusStrip"), obj26), , , ];
    let tmp94Result8 = null;
    if (null != tmp7) {
      const obj27 = { style: tmp.notice, children: null };
      const obj28 = { type: "critical", role: "alert", message: tmp7.message, action: null };
      const obj29 = { text: tmp7.retry.text, onPress: tmp7.retry.onClick };
      obj28.action = obj29;
      obj27.children = tmp94(tmp2(tmp3[47]).NewInlineNotice, obj28);
      tmp94Result8 = tmp94(tmp93, obj27);
    }
    items57[1] = tmp94Result8;
    let tmp94Result9 = null;
    if (null != tmp6) {
      const obj30 = { style: tmp.notice, children: null };
      ({ message: obj48.message, onDismiss: obj48.onDismiss } = tmp6);
      obj30.children = tmp94(tmp2(tmp3[47]).NewInlineNotice, { type: "warning", role: "status", message: null, onDismiss: null });
      tmp94Result9 = tmp94(tmp93, obj30);
      const obj31 = { type: "warning", role: "status", message: null, onDismiss: null };
    }
    items57[2] = tmp94Result9;
    const obj32 = { projectId, canSend: tmp45, running: stateFromStores3, onSend: callback13, onInterrupt: null, onDraftHasTextChange: null, hidden: null };
    let tmp112;
    const tmp5Result5 = require("ConjureNativeStatusStrip");
    if (stateFromStores3) {
      tmp112 = callback14;
    }
    obj32.onInterrupt = tmp112;
    obj32.onDraftHasTextChange = tmp39;
    obj32.hidden = hidden;
    items57[3] = tmp94(require("ConjureNativeComposer"), obj32);
    obj25.children = items57;
    items53[2] = tmp92(tmp93, obj25);
    obj12.children = items53;
    return tmp92(tmp93, obj12);
  } else {
    const obj33 = { style: tmp.placeholder, children: null };
    const intl4 = tmp2(tmp3[27]).intl;
    if ("unavailable" === chatEmptyStateResult) {
      let AyiQEp = require("module_3865").Td4Sf4;
    } else {
      AyiQEp = require("module_3865").AyiQEp;
    }
    const obj34 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
    obj33.children = tmp94(tmp2(tmp3[41]).Text, obj34);
    tmp94(tmp93, obj33);
  }
  const tmp5Result = require("ConjureTipsHost");
});