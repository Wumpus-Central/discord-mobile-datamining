// discord_app/modules/conjure/chat/native/ConjureNativeChat.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import LinearGradientDefault from "../../../../../_runtime/05240_LinearGradient.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import _modDef6945 from "../../../../../_runtime/metro/06945__.js";
import conjureChatTurns from "../conjureChatTurns.tsx";
import conjurePublishCard from "../../publish/conjurePublishCard.tsx";
import ConjureTodoState from "../../agent_activity/ConjureTodoState.tsx";
import ConjureTimelineTree from "../../agent_activity/ConjureTimelineTree.tsx";
import ConjureSecretRequestState from "../../secrets/ConjureSecretRequestState.tsx";
import conjureCardOverrides from "../conjureCardOverrides.tsx";
import conjurePendingPlan from "../../plan/conjurePendingPlan.tsx";
import ConjureChatGrouping from "../ConjureChatGrouping.tsx";
import conjureAttachmentDrafts from "../conjureAttachmentDrafts.tsx";
import ConjureAppBuildRequest from "../../app_build_request/ConjureAppBuildRequest.tsx";
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

require = fn;
const View = fn(17).View;
let ConjureConnectionStore = fn(10656);
({
  ensureConnection: closure_7,
  interruptTurn: closure_8,
  loadOlderHistory: closure_9,
  sendUserMessage: c10,
} = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
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
const createStyles = fn(4966);
let obj2 = {
  container: { flex: 1 },
  transcript: { flex: 1 },
  maskSolid: { flex: 1, backgroundColor: BLACK },
  maskFade: { height: 52 },
  transcriptArea: { flex: 1, position: "relative" },
  transcriptContent: null,
  bottomStack: null,
  notice: null,
  placeholder: null,
};
const alphaResult = _modDef683(BLACK).alpha(0.2);
obj2.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj2.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notice = {
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
              const tmp30 = value2(_modDef6945, obj7);
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
        obj2.maskElement = constants(View, obj3);
        obj2.children = children;
        tmp3 = value2(_modDef6945, obj2);
      }
      return tmp3;
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeChat(projectId) {
      const cResult = projectId(num[13]).c(283);
      projectId = projectId.projectId;
      ({ transcriptTopInset, onRestoreVersion } = projectId);
      const hidden = projectId.hidden;
      num = 0;
      if (undefined !== transcriptTopInset) {
        num = transcriptTopInset;
      }
      closure_24();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        items = [AppStateStore];
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
      const tmpResult = projectId(num[14]);
      const conjureRemixStartedAt = projectId(num[16]).useConjureRemixStartedAt(projectId);
      const bottom = onRestoreVersion(tmp2[17])().bottom;
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === projectId) {
          let tmp13 = cResult[5];
          let tmp14 = cResult[6];
        }
        const effect = noop.useEffect(tmp13, tmp14);
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
          let tmp17 = items2;
        } else {
          tmp17 = cResult[7];
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
          let tmp20 = V;
          let tmp19 = items3;
        } else {
          class V {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
          tmp20 = cResult[10];
        }
        const stateFromStores1 = tmp(tmp2[14]).useStateFromStores(tmp17, tmp20, tmp19);
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
          let tmp22 = items4;
        } else {
          class V {
            constructor() {
              return closure_14.getMessages(projectId);
            }
          }
        }
        if (cResult[12] !== projectId) {
          class Q {
            constructor() {
              return closure_12.getPublishStatus(projectId);
            }
          }
          const items5 = [projectId];
          class R {
            constructor() {
              return "active" === closure_6.getState();
            }
          }
          cResult[12] = projectId;
          cResult[13] = Q;
          cResult[14] = items5;
          let tmp24 = items5;
        } else {
          class Q {
            constructor() {
              return closure_12.getPublishStatus(projectId);
            }
          }
          tmp24 = cResult[14];
        }
        const obj4 = noop;
        const tmpResult15 = tmp(tmp2[14]);
        const stateFromStores2 = tmp(tmp2[14]).useStateFromStores(tmp22, Q, tmp24);
        if (cResult[15] === stateFromStores1) {
          class Q {
            constructor() {
              return closure_12.getPublishStatus(projectId);
            }
          }
          noop = tmp26;
          const _Symbol3 = Symbol;
          class R {
            constructor() {
              return "active" === closure_6.getState();
            }
          }
          if (tmp28 === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items6 = [ConjureChatStore];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[18] = items6;
            const tmp29 = items6;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
          }
          if (cResult[19] !== projectId) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items7 = [projectId];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[19] = projectId;
            cResult[20] = tmp32;
            cResult[21] = items7;
            let tmp31 = items7;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            tmp31 = cResult[21];
          }
          const stateFromStores3 = tmp(tmp2[14]).useStateFromStores(tmp29, tmp32, tmp31);
          const _Symbol4 = Symbol;
          if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items8 = [ConjureChatStore];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[22] = items8;
            const tmp34 = items8;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
          }
          if (cResult[23] !== projectId) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items9 = [projectId];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[23] = projectId;
            cResult[24] = tmp37;
            cResult[25] = items9;
            let tmp36 = items9;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            tmp36 = cResult[25];
          }
          const tmpResult17 = tmp(tmp2[14]);
          const stateFromStores4 = tmp(tmp2[14]).useStateFromStores(tmp34, tmp37, tmp36);
          const _Symbol5 = Symbol;
          if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items10 = [ConjureChatStore];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[26] = items10;
            const tmp39 = items10;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
          }
          if (cResult[27] !== projectId) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items11 = [projectId];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[27] = projectId;
            cResult[28] = tmp42;
            cResult[29] = items11;
            let tmp41 = items11;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            tmp41 = cResult[29];
          }
          const tmpResult18 = tmp(tmp2[14]);
          const stateFromStores5 = tmp(tmp2[14]).useStateFromStores(tmp39, tmp42, tmp41);
          const _Symbol6 = Symbol;
          if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items12 = [ConjureChatStore];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[30] = items12;
            const tmp44 = items12;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
          }
          if (cResult[31] !== projectId) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items13 = [projectId];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[31] = projectId;
            cResult[32] = tmp47;
            cResult[33] = items13;
            let tmp46 = items13;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            tmp46 = cResult[33];
          }
          const tmpResult19 = tmp(tmp2[14]);
          const stateFromStores6 = tmp(tmp2[14]).useStateFromStores(tmp44, tmp47, tmp46);
          const _Symbol7 = Symbol;
          if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
              }
            }
            const items14 = [ConjureChatStore];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[34] = items14;
            const tmp49 = items14;
          } else {
            class Q {
              constructor() {
                return closure_12.getPublishStatus(projectId);
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
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[35] = projectId;
            cResult[36] = Se;
            cResult[37] = items15;
            let tmp51 = items15;
          } else {
            class Se {
              constructor() {
                return closure_14.getProjectUsage(projectId);
              }
            }
            tmp51 = cResult[37];
          }
          const tmpResult20 = tmp(tmp2[14]);
          const stateFromStores7 = tmp(tmp2[14]).useStateFromStores(tmp49, Se, tmp51);
          const tmpResult21 = tmp(tmp2[14]);
          class N {
            constructor() {
              if (closure_3) {
                tmp = ensureConnection;
                tmp2 = projectId;
                tmp3 = ensureConnection(projectId);
              }
              return;
            }
          }
          AppStateStore = stateFromStores(obj4.useState(null), 2)[1];
          let tmp57 = null == tmp56;
          if (!tmp57) {
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
            tmp57 = tmp58;
          }
          if (!tmp57) {
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
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[39] = tmp60;
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
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[40] = items16;
            const tmp62 = items16;
          } else {
            class Se {
              constructor() {
                return closure_14.getProjectUsage(projectId);
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
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[41] = projectId;
            cResult[42] = Ee;
            cResult[43] = items17;
            let tmp64 = items17;
          } else {
            class Ee {
              constructor() {
                return closure_11.getConnState(projectId);
              }
            }
            tmp64 = cResult[43];
          }
          const tmp55 = stateFromStores(obj4.useState(null), 2);
          const stateFromStores8 = tmp(tmp2[14]).useStateFromStores(tmp62, Ee, tmp64);
          const _Symbol9 = Symbol;
          if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
            class Ee {
              constructor() {
                return closure_11.getConnState(projectId);
              }
            }
            const items18 = [ConjureChatStore];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[44] = items18;
            const tmp66 = items18;
          } else {
            class Ee {
              constructor() {
                return closure_11.getConnState(projectId);
              }
            }
          }
          if (cResult[45] !== projectId) {
            class Fe {
              constructor() {
                return closure_14.hasLoadedHistory(projectId);
              }
            }
            const items19 = [projectId];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[45] = projectId;
            cResult[46] = Fe;
            cResult[47] = items19;
            let tmp68 = items19;
          } else {
            class Fe {
              constructor() {
                return closure_14.hasLoadedHistory(projectId);
              }
            }
            tmp68 = cResult[47];
          }
          const tmpResult22 = tmp(tmp2[14]);
          const stateFromStores9 = tmp(tmp2[14]).useStateFromStores(tmp66, Fe, tmp68);
          const _Symbol10 = Symbol;
          if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
            class Fe {
              constructor() {
                return closure_14.hasLoadedHistory(projectId);
              }
            }
            const items20 = [ConjureChatStore];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[48] = items20;
            const tmp70 = items20;
          } else {
            class Fe {
              constructor() {
                return closure_14.hasLoadedHistory(projectId);
              }
            }
          }
          if (cResult[49] !== projectId) {
            class Fe {
              constructor() {
                return closure_14.hasLoadedHistory(projectId);
              }
            }
            const items21 = [projectId];
            class R {
              constructor() {
                return "active" === closure_6.getState();
              }
            }
            cResult[49] = projectId;
            cResult[50] = tmp73;
            cResult[51] = items21;
            let tmp72 = items21;
          } else {
            class Fe {
              constructor() {
                return closure_14.hasLoadedHistory(projectId);
              }
            }
            tmp72 = cResult[51];
          }
          const tmpResult23 = tmp(tmp2[14]);
          const stateFromStores10 = tmp(tmp2[14]).useStateFromStores(tmp70, tmp73, tmp72);
          if (cResult[52] === stateFromStores8) {
            class Fe {
              constructor() {
                return closure_14.hasLoadedHistory(projectId);
              }
            }
          }
          const tmpResult24 = tmp(tmp2[14]);
          let obj2 = {
            historyLoaded: stateFromStores9,
            historyUnavailable: stateFromStores10,
            connState: stateFromStores8,
          };
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
        tmp26 = withLivePublishCardResult;
        const tmpResult26 = tmp(tmp2[19]);
      }
      class N {
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
      cResult[5] = N;
      cResult[6] = items22;
      tmp14 = items22;
      tmp13 = N;
      const tmpResult14 = projectId(num[16]);
    }
  : function ConjureNativeChat(projectId) {
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
      let ref;
      let callback4;
      let callback5;
      c47 = undefined;
      let callback8;
      closure_51 = undefined;
      let onJumpToReplied;
      closure_55 = undefined;
      let tmp = closure_24();
      items = [memo];
      const stateFromStores = projectId(504).useStateFromStores(items, () => "active" === memo.getState(), []);
      const tmp6 = num(12223)(projectId);
      const tmp7 = num(12224)(projectId);
      let obj = projectId(504);
      const conjureRemixStartedAt = projectId(12224).useConjureRemixStartedAt(projectId);
      let obj3 = stateFromStores1;
      const items1 = [stateFromStores, projectId];
      const effect = stateFromStores1.useEffect(() => {
        if (stateFromStores) {
          React5(projectId);
        }
      }, items1);
      let obj2 = projectId(12224);
      const ackConjureProjectWhileViewing = projectId(10680).useAckConjureProjectWhileViewing(
        projectId,
        stateFromStores,
      );
      const obj4 = projectId(10680);
      const items2 = [c14];
      const items3 = [projectId];
      stateFromStores1 = projectId(504).useStateFromStores(
        items2,
        () => ConjureChatStore.getMessages(projectId),
        items3,
      );
      const obj5 = projectId(504);
      const items4 = [stateFromStores11];
      const items5 = [projectId];
      const stateFromStores2 = projectId(504).useStateFromStores(
        items4,
        () => ConjurePublishStatusStore.getPublishStatus(projectId),
        items5,
      );
      const items6 = [stateFromStores1, stateFromStores2];
      memo = stateFromStores1.useMemo(
        () => conjurePublishCard.withLivePublishCard(stateFromStores1, stateFromStores2),
        items6,
      );
      const obj6 = projectId(504);
      const items7 = [c14];
      const items8 = [projectId];
      const stateFromStores3 = projectId(504).useStateFromStores(
        items7,
        () => ConjureChatStore.isThinking(projectId),
        items8,
      );
      const obj7 = projectId(504);
      const items9 = [c14];
      const items10 = [projectId];
      const stateFromStores4 = projectId(504).useStateFromStores(
        items9,
        () => ConjureChatStore.isCompacting(projectId),
        items10,
      );
      const obj8 = projectId(504);
      const items11 = [c14];
      const items12 = [projectId];
      const stateFromStores5 = projectId(504).useStateFromStores(
        items11,
        () => ConjureChatStore.isSaving(projectId),
        items12,
      );
      const obj9 = projectId(504);
      const items13 = [c14];
      const items14 = [projectId];
      const stateFromStores6 = projectId(504).useStateFromStores(
        items13,
        () => ConjureChatStore.getThinkingActivity(projectId),
        items14,
      );
      const obj10 = projectId(504);
      const items15 = [c14];
      const items16 = [projectId];
      const stateFromStores7 = projectId(504).useStateFromStores(
        items15,
        () => ConjureChatStore.getProjectUsage(projectId),
        items16,
      );
      const obj11 = projectId(504);
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
      const callback = obj3.useCallback(
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
        tmp27 = tmp21 === projectId;
      }
      let tmp20 = stateFromStores(stateFromStores1.useState(null), 2);
      const items18 = [set];
      const items19 = [projectId];
      const stateFromStores8 = projectId(504).useStateFromStores(
        items18,
        () => ConjureConnectionStore.getConnState(projectId),
        items19,
      );
      const tmp2Result = projectId(504);
      const items20 = [c14];
      const items21 = [projectId];
      stateFromStores9 = projectId(504).useStateFromStores(
        items20,
        () => ConjureChatStore.hasLoadedHistory(projectId),
        items21,
      );
      const tmp2Result14 = projectId(504);
      const items22 = [c14];
      const items23 = [projectId];
      const stateFromStores10 = projectId(504).useStateFromStores(
        items22,
        () => ConjureChatStore.isHistoryUnavailable(projectId),
        items23,
      );
      const tmp2Result15 = projectId(504);
      const chatEmptyStateResult = projectId(12226).chatEmptyState({
        historyLoaded: stateFromStores9,
        historyUnavailable: stateFromStores10,
        connState: stateFromStores8,
      });
      render_id = null;
      if (memo.length > 0) {
        render_id = memo[memo.length - 1].render_id;
      }
      const items24 = [memo];
      set = obj3.useMemo(() => ConjureTodoState.supersededChecklists(memo), items24);
      const tmp2Result16 = projectId(12226);
      const items25 = [memo1];
      const items26 = [projectId];
      stateFromStores11 = projectId(504).useStateFromStores(
        items25,
        () => {
          const settings = ConjureSettingsStore.getSettings(projectId);
          let secrets;
          if (settings != null) {
            secrets = settings.secrets;
          }
          return secrets;
        },
        items26,
      );
      const items27 = [memo, stateFromStores11];
      memo1 = obj3.useMemo(() => ConjureSecretRequestState.secretRequestStatuses(memo, stateFromStores11), items27);
      const tmp2Result17 = projectId(504);
      [c14, c15] = stateFromStores(
        obj3.useState(() => new Map()),
        2,
      );
      onToggleChecklist = obj3.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined2((get) => projectId(12230).toggleConjureCard(get, closure_0, closure_1));
      }, []);
      const items28 = [memo];
      closure_17 = obj3.useMemo(() => conjurePendingPlan.planVersions(memo), items28);
      const tmp19Result = stateFromStores(
        obj3.useState(() => new Map()),
        2,
      );
      [c18, c19] = stateFromStores(
        obj3.useState(() => new Map()),
        2,
      );
      onTogglePlan = obj3.useCallback((arg0, arg1) => {
        closure_0 = arg0;
        closure_1 = arg1;
        _undefined3((get) => projectId(12230).toggleConjureCard(get, closure_0, closure_1));
      }, []);
      const items29 = [memo];
      closure_21 = obj3.useMemo(
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
        items29,
      );
      const items30 = [projectId];
      closure_22 = obj3.useCallback(() => {
        const intl = util.intl;
        conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3830.EMgIuY));
      }, items30);
      const items31 = [projectId];
      closure_23 = obj3.useCallback((implementation_prompt) => {
        conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
      }, items31);
      const tmp19Result8 = stateFromStores(
        obj3.useState(() => new Map()),
        2,
      );
      const items32 = [projectId];
      [tmp38, tmp39] = stateFromStores(num(12234)(projectId), 2);
      const items33 = [projectId];
      const callback1 = obj3.useCallback(() => {
        const intl = util.intl;
        collapsed(projectId, intl.string(_modDef3830["t5CN3+"]));
      }, items32);
      closure_24 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
        conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, {
          clarificationAnswers,
          attachments,
        });
      }, items33);
      const tmp19Result9 = stateFromStores(num(12234)(projectId), 2);
      [c25, c26] = stateFromStores(obj3.useState(null), 2);
      const tmp19Result11 = stateFromStores(obj3.useState(null), 2);
      dismissedAppBuildRequestId = tmp19Result11[0];
      onDismissAppBuildRequest = tmp19Result11[1];
      const tmp44 = num(12236)(projectId);
      sent = tmp44.sent;
      const request = tmp44.request;
      id = undefined;
      if (request != null) {
        id = request.id;
      }
      const items34 = [id, sent];
      let tmp48 = tmp47;
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
        tmp48 = "connecting" === stateFromStores8;
      }
      canSend = tmp48;
      const items35 = [memo];
      memo2 = obj3.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items35);
      const tmp19Result10 = stateFromStores(obj3.useState(null), 2);
      joined = Array.from(memo1, (arg0) => {
        [tmp, tmp2] = arg0;
        return "" + tmp + ":" + tmp2;
      }).join(",");
      const items36 = [tmp48, memo2, joined, dismissedAppBuildRequestId];
      const items37 = [memo];
      const memo3 = obj3.useMemo(
        () => ({ canSend, pendingPlanId: memo2, secretStatusesKey: joined, dismissedAppBuildRequestId }),
        items36,
      );
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
      let tmp54 = null != memo5;
      if (tmp54) {
        tmp54 = memo5.steps.length > 0 || memo5.tasks.length > 0;
        const tmp55 = memo5.steps.length > 0 || memo5.tasks.length > 0;
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
      [obj18, c36] = stateFromStores(obj3.useState(null), 2);
      const tmp19Result12 = stateFromStores(obj3.useState(null), 2);
      [tmp59, c37] = stateFromStores(obj3.useState(64), 2);
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
      const tmp19Result13 = stateFromStores(obj3.useState(64), 2);
      bound = tmp59;
      if (!tmp2Result18.isIOS()) {
        let _Math = Math;
        bound = Math.min(tmp59, fadingEdgeLength);
      }
      obj3.useRef(null);
      ref = obj3.useRef(null);
      obj3.useRef(false);
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
      const items42 = [projectId];
      const callback6 = obj3.useCallback(() => {
        React6(projectId);
      }, items42);
      const callback7 = obj3.useCallback(() => {
        closure_42.current = false;
      }, []);
      tmp2Result18 = projectId(1384);
      [tmp71, c47] = stateFromStores(obj3.useState(false), 2);
      obj3.useRef(null);
      obj3.useRef(0);
      callback8 = obj3.useCallback(() => {
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
      const items43 = [callback8];
      const items44 = [callback4, callback8];
      const callback9 = obj3.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        closure_40.current = {
          offsetY: nativeEvent.contentOffset.y,
          viewportHeight: nativeEvent.layoutMeasurement.height,
          contentHeight: nativeEvent.contentSize.height,
        };
        callback8();
      }, items43);
      const callback10 = obj3.useCallback((arg0, contentHeight) => {
        const timestamp = Date.now();
        let current = ref3.current;
        if (current) {
          current = timestamp < ref4.current;
        }
        if (current) {
          const _Math = Math;
          ref4.current = Math.min(timestamp + c18, ref5.current);
          callback4();
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
          callback8();
        }
      }, items44);
      const items45 = [callback8];
      const memo7 = obj3.useMemo(() => ({ itemVisiblePercentThreshold: projectId(12240).MIN_VISIBLE_PERCENT }), []);
      const callback11 = obj3.useCallback((arg0) => {
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
        callback8();
      }, items45);
      if (stateFromStores5) {
        const intl3 = tmp2(1128).intl;
        memo6 = intl3.string(tmp5(3830).mKK6wB);
      } else if (stateFromStores4) {
        const intl2 = tmp2(1128).intl;
        memo6 = intl2.string(tmp5(3830).xnCAaP);
      } else if (memo6 == null) {
        let intl = tmp2(1128).intl;
        memo6 = intl.string(tmp5(3830).L9EDub);
      }
      const items46 = [memo, memo4];
      let tmp78;
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
      }, items46);
      if (null != memo4) {
        tmp78 = memo[memo4];
      }
      let checklistLiveResult = null == tmp78;
      if (!checklistLiveResult) {
        checklistLiveResult = tmp2(12227).checklistLive(tmp78);
        const tmp2Result19 = tmp2(12227);
      }
      if (null != tmp78) {
        const tmp2Result20 = tmp2(12241);
        const conjureTurnStartedAtResult = tmp2(12241).conjureTurnStartedAt(tmp78);
      }
      const items47 = [memo5];
      let tmp82;
      const memo9 = obj3.useMemo(() => {
        if (null != memo5) {
          let runningTodoAgentsResult = ConjureTodoAgents.runningTodoAgents(tmp.tasks);
        } else {
          runningTodoAgentsResult = [];
        }
        return runningTodoAgentsResult;
      }, items47);
      if (null != memo4) {
        let render_id1;
        if (memo[memo4] != null) {
          render_id1 = tmp83.render_id;
        }
        tmp82 = render_id1;
      }
      let tmp85 = null != tmp82;
      if (tmp85) {
        tmp85 = (null != obj18 && !obj18.has(tmp82)) || tmp71;
        const tmp86 = (null != obj18 && !obj18.has(tmp82)) || tmp71;
      }
      let tmp87 = null;
      if (stateFromStores3) {
        tmp87 = null;
        if (tmp54) {
          tmp87 = null;
          if (tmp85) {
            tmp87 = memo6;
          }
        }
      }
      const items48 = [bound, memo4, callback8];
      const effect3 = obj3.useEffect(() => {
        closure_48.current = memo4;
        closure_49.current = bound;
        closure_0 = requestAnimationFrame(callback8);
        return () => cancelAnimationFrame(closure_0);
      }, items48);
      const items49 = [memo];
      closure_51 = obj3.useMemo(() => {
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
      }, items49);
      const items50 = [memo];
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
      }, items50);
      const items51 = [bound, memo4];
      const callback12 = obj3.useCallback(() => {
        if (null != memo4) {
          closure_42.current = false;
          const current = ref.current;
          if (current != null) {
            const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
            current.scrollToIndex(obj);
          }
        }
      }, items51);
      const callback13 = obj3.useCallback(() => {
        const current = ref.current;
        let tmp = null != current;
        if (tmp) {
          const viewportHeight = current.viewportHeight;
          tmp = current.contentHeight - current.offsetY - viewportHeight <= 0.2 * viewportHeight;
        }
        if (tmp) {
          closure_41.current = true;
        }
      }, []);
      obj3.useRef(false);
      obj3.useRef(false);
      closure_55 = obj3.useCallback((arg0) => {
        let tmp2 = arg0;
        if (arg0) {
          tmp2 = !ref9.current;
        }
        closure_53.current = tmp2;
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
      const items52 = [num];
      const effect4 = obj3.useEffect(() => {
        ref9.current = num > 0;
        let current = ref9.current;
        if (current) {
          current = ref8.current;
        }
        if (current) {
          ref8.current = false;
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
      }, items52);
      const items53 = [projectId];
      const items54 = [projectId];
      const callback14 = obj3.useCallback((arg0, arg1) => {
        closure_41.current = true;
        collapsed(projectId, arg0, arg1);
      }, items53);
      let connectionLabelResult = null;
      const callback15 = obj3.useCallback(() => {
        closure_2_8(projectId);
      }, items54);
      if ("open" !== stateFromStores8) {
        connectionLabelResult = tmp2(12244).connectionLabel(stateFromStores8);
        const tmp2Result21 = tmp2(12244);
      }
      const tmp19Result14 = stateFromStores(obj3.useState(false), 2);
      const obj12 = { style: tmp.container, children: null };
      const conjureControlActive = projectId(10719).useConjureControlActive(projectId);
      const items55 = [c15(num(12245), { thinking: stateFromStores3, bleedBottom: num(1633)().bottom }), ,];
      const obj13 = { style: tmp.transcriptArea, children: null };
      const obj14 = { clearance: tmp59, children: null };
      const obj15 = {
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
        keyboardShouldPersistTaps: "handled",
        contentInset: null,
        ListHeaderComponent: null,
        style: null,
        contentContainerStyle: null,
        data: null,
        extraData: null,
        maintainVisibleContentPosition: null,
        keyExtractor: null,
        ListFooterComponent: null,
        ListEmptyComponent: null,
        renderItem: null,
      };
      const tmp2Result22 = projectId(10719);
      const tmp99 = c25;
      const tmp2Result23 = projectId(1384);
      obj15.removeClippedSubviews = projectId(1384).isIOS() && undefined;
      obj15.viewabilityConfig = memo7;
      obj15.onViewableItemsChanged = callback11;
      obj15.onScroll = callback9;
      obj15.onScrollBeginDrag = callback7;
      obj15.onContentSizeChange = callback10;
      obj15.onStartReached = callback6;
      const tmp100 = projectId(1384).isIOS() && undefined;
      let tmp101;
      if (tmp2Result24.isIOS()) {
        const obj16 = { top: num };
        tmp101 = obj16;
      }
      obj15.contentInset = tmp101;
      tmp2Result24 = projectId(1384);
      let tmp98Result = null;
      if (!tmp2Result25.isIOS()) {
        tmp98Result = null;
        if (num > 0) {
          const obj17 = { style: null };
          const obj19 = { height: num };
          obj17.style = obj19;
          tmp98Result = tmp98(tmp97, obj17);
        }
      }
      obj15.ListHeaderComponent = tmp98Result;
      const items56 = [tmp.transcript];
      tmp2Result25 = projectId(1384);
      const isIOSResult = projectId(1384).isIOS();
      let tmp104 = !isIOSResult;
      if (!isIOSResult) {
        const obj20 = { marginBottom: tmp59 - bound };
        tmp104 = obj20;
      }
      items56[1] = tmp104;
      obj15.style = items56;
      const items57 = [tmp.transcriptContent];
      const tmp2Result26 = projectId(1384);
      items57[1] = { paddingBottom: bound + num(587).space.PX_8 };
      obj15.contentContainerStyle = items57;
      obj15.data = memo;
      obj15.extraData = memo3;
      obj15.maintainVisibleContentPosition = { startRenderingFromBottom: true, autoscrollToBottomThreshold: 0.2 };
      obj15.keyExtractor = function keyExtractor(render_id) {
        return render_id.render_id;
      };
      const obj22 = { projectId, messages: memo, draftHasText: tmp38, onAskForIdeas: null, onShow: null };
      let tmp107;
      const obj21 = { paddingBottom: bound + num(587).space.PX_8 };
      const tmp105 = onToggleChecklist;
      if (tmp48) {
        tmp107 = callback1;
      }
      const obj23 = { children: null };
      obj22.onAskForIdeas = tmp107;
      obj22.onShow = callback13;
      const items58 = [c15(num(12248), obj22), c15(projectId(11740).ConjureHostApprovalCards, { projectId })];
      obj23.children = items58;
      obj15.ListFooterComponent = closure_17(tmp105, obj23);
      let tmp108 = "loading" === chatEmptyStateResult;
      if (tmp108) {
        obj15.ListEmptyComponent = null;
        obj15.renderItem = function renderItem(arg0) {
          ({ item, index } = arg0);
          const obj = {
            projectId,
            message: item,
            groupStart: null,
            first: null,
            isNewest: null,
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
            onAnswerClarification: null,
            clarificationDismissed: null,
            onDismissClarification: null,
            onCardInputFocusChange: null,
            canSend: null,
            appBuildRequestDismissed: null,
            onDismissAppBuildRequest: null,
            onRestoreVersion: null,
          };
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
          obj.checklistExpanded = conjureCardOverrides.conjureCardExpanded(
            c14,
            item.render_id,
            set.has(item.render_id),
          );
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
          obj.replied = closure_51.get(item.render_id);
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
            tmp19 = closure_55;
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
        obj14.children = tmp98(tmp2(7199).FlashList, obj15);
        const items59 = [tmp98(tmp99, obj14), ,];
        let tmp98Result7 = null;
        if (tmp27) {
          const obj24 = { projectId };
          tmp98Result7 = tmp98(tmp5(12402), obj24);
        }
        items59[1] = tmp98Result7;
        let tmp98Result8 = null;
        if (null != tmp87) {
          const obj25 = {
            line: tmp87,
            onJumpToActivity: callback12,
            bottom: tmp5(587).space.PX_12 + tmp59,
            todos: memo8,
            todosLive: checklistLiveResult,
            agents: memo9,
          };
          tmp98Result8 = tmp98(tmp5(12403), obj25);
          const tmp5Result4 = tmp5(12403);
        }
        items59[2] = tmp98Result8;
        obj13.children = items59;
        items55[1] = tmp96(tmp97, obj13);
        const obj26 = { style: tmp.bottomStack, onLayout: callback3, children: null };
        const obj27 = {
          projectId,
          thinking: stateFromStores3,
          turnStartedAt: conjureTurnStartedAtResult,
          remixStartedAt: conjureRemixStartedAt,
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
        if (tmp108) {
          tmp108 = 0 === memo.length;
        }
        obj27.recalling = tmp108;
        obj27.activity = stateFromStores6;
        obj27.projectUsage = stateFromStores7;
        obj27.connLabel = connectionLabelResult;
        obj27.controlling = conjureControlActive;
        obj27.connFailed = "failed" === stateFromStores8;
        obj27.thinkingOpen = tmp27;
        obj27.onToggleThinking = callback;
        const items60 = [tmp98(tmp5(12406), obj27), , , ,];
        let tmp98Result9 = null;
        if (null != tmp7) {
          const obj28 = { style: tmp.notice, children: null };
          const obj29 = { type: "critical", role: "alert", message: tmp7.message, action: null };
          const obj30 = { text: tmp7.retry.text, onPress: tmp7.retry.onClick };
          obj29.action = obj30;
          obj28.children = tmp98(tmp2(7932).NewInlineNotice, obj29);
          tmp98Result9 = tmp98(tmp97, obj28);
        }
        items60[1] = tmp98Result9;
        let tmp98Result10 = null;
        if (null != tmp6) {
          const obj31 = { style: tmp.notice, children: null };
          ({ message: obj49.message, onDismiss: obj49.onDismiss } = tmp6);
          obj31.children = tmp98(tmp2(7932).NewInlineNotice, {
            type: "warning",
            role: "status",
            message: null,
            onDismiss: null,
          });
          tmp98Result10 = tmp98(tmp97, obj31);
          const obj32 = { type: "warning", role: "status", message: null, onDismiss: null };
        }
        items60[2] = tmp98Result10;
        let tmp98Result11 = null;
        if (null != tmp44.request) {
          const obj33 = { style: tmp.notice, children: null };
          const obj34 = {
            projectId,
            request: tmp44.request,
            canSend: tmp48,
            onDismiss: tmp44.close,
            onSent: callback2,
          };
          obj33.children = tmp98(tmp5(12391), obj34, tmp44.request.id);
          tmp98Result11 = tmp98(tmp97, obj33);
        }
        items60[3] = tmp98Result11;
        const obj35 = {
          projectId,
          canSend: tmp48,
          running: stateFromStores3,
          onSend: callback14,
          onInterrupt: null,
          onDraftHasTextChange: null,
          hidden: null,
          onSendToOtherProjects: null,
        };
        let tmp118;
        const tmp5Result5 = tmp5(12406);
        if (stateFromStores3) {
          tmp118 = callback15;
        }
        obj35.onInterrupt = tmp118;
        obj35.onDraftHasTextChange = tmp39;
        obj35.hidden = hidden;
        let open;
        if (null == tmp44.request) {
          open = tmp44.open;
        }
        obj35.onSendToOtherProjects = open;
        items60[4] = tmp98(tmp5(12415), obj35);
        obj26.children = items60;
        items55[2] = tmp96(tmp97, obj26);
        obj12.children = items55;
        return tmp96(tmp97, obj12);
      } else {
        const obj36 = { style: tmp.placeholder, children: null };
        const intl4 = tmp2(1128).intl;
        if ("unavailable" === chatEmptyStateResult) {
          let AyiQEp = tmp5(3830).Td4Sf4;
        } else {
          AyiQEp = tmp5(3830).AyiQEp;
        }
        const obj37 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
        obj36.children = tmp98(tmp2(5216).Text, obj37);
        tmp98(tmp97, obj36);
      }
      const tmp5Result = num(12248);
    };
