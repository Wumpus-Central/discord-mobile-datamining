// discord_app/modules/conjure/chat/native/ConjureNativeChat.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef671 from "../../../../../_runtime/metro/00671__.js";
import util from "../../../../intl/index.native.tsx";
import _modDef4026 from "../../intl/ConjureUntranslated.messages.js";
import ChatInputUtils from "../../../../utils/native/ChatInputUtils.tsx";
import LinearGradientDefault from "../../../../../_runtime/05715_LinearGradient.js";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import _modDef7104 from "../../../../../_runtime/metro/07104__.js";
import useKeyboardIsOpen from "../../../keyboard/native/useKeyboardIsOpen.tsx";
import conjureChatTurns from "../conjureChatTurns.tsx";
import conjurePublishCard from "../../publish/conjurePublishCard.tsx";
import conjureQueuedMessage from "../conjureQueuedMessage.tsx";
import conjureAttachmentDrafts from "../conjureAttachmentDrafts.tsx";
import ConjureClarification from "../../clarification/ConjureClarification.tsx";
import ConjureTodoState from "../../agent_activity/ConjureTodoState.tsx";
import ConjureTimelineTree from "../../agent_activity/ConjureTimelineTree.tsx";
import ConjureSecretRequestState from "../../secrets/ConjureSecretRequestState.tsx";
import conjureCardOverrides from "../conjureCardOverrides.tsx";
import conjurePendingPlan from "../../plan/conjurePendingPlan.tsx";
import ConjureChatGrouping from "../ConjureChatGrouping.tsx";
import ConjureAppBuildRequest from "../../app_build_request/ConjureAppBuildRequest.tsx";
import conjureTranscriptScroll from "../conjureTranscriptScroll.tsx";
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
function TranscriptFade(children) {
  children = children.children;
  const tmp = closure_22();
  let tmp3 = children;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: null, children: null };
    const obj3 = { style: tmp.transcript, children: null };
    const obj4 = { style: tmp.maskSolid };
    items = [closure_1_15(View, obj4), ,];
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = closure_1_15(LinearGradientDefault, obj5);
    const obj6 = { style: null };
    const obj7 = { height: null };
    const _Math = Math;
    obj7.height = Math.max(0, children.clearance - 52);
    obj6.style = obj7;
    items[2] = closure_1_15(View, obj6);
    obj3.children = items;
    obj2.maskElement = closure_1_17(View, obj3);
    obj2.children = children;
    tmp3 = closure_1_15(_modDef7104, obj2);
  }
  return tmp3;
}
const View = fn(17).View;
let ConjureConnectionStore = fn(10969);
({
  ensureConnection: metroImportDefault,
  interruptTurn: closure_8,
  loadOlderHistory: closure_9,
  sendUserMessage: closure_10,
} = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, ,];
let obj = _modDef671(BLACK);
items[1] = _modDef671(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5140);
let obj2 = {
  container: { flex: 1 },
  transcript: { flex: 1 },
  maskSolid: { flex: 1, backgroundColor: BLACK },
  maskFade: { height: 52 },
  transcriptArea: { flex: 1, position: "relative" },
  transcriptContent: null,
  transcriptHidden: null,
  bottomStack: null,
  notices: null,
  notice: null,
  placeholder: null,
};
const alphaResult = _modDef671(BLACK).alpha(0.2);
obj2.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj2.transcriptHidden = { opacity: 0 };
obj2.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notices = { paddingTop: nativeDefault.space.PX_8 };
let obj5 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notice = {
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
  paddingBottom: nativeDefault.space.PX_8,
};
let obj6 = {
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
let closure_22 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeChat.tsx");

export default function ConjureNativeChat(projectId) {
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
  let memo2;
  let set;
  let stateFromStores11;
  let memo3;
  c15 = undefined;
  c16 = undefined;
  let onToggleChecklist;
  closure_18 = undefined;
  c19 = undefined;
  c20 = undefined;
  let onTogglePlan;
  closure_22 = undefined;
  closure_23 = undefined;
  closure_24 = undefined;
  closure_25 = undefined;
  c26 = undefined;
  c27 = undefined;
  let dismissedAppBuildRequestId;
  let onDismissAppBuildRequest;
  let sent;
  let id;
  let canSend;
  let memo4;
  let joined;
  let memo6;
  let memo7;
  c37 = undefined;
  c38 = undefined;
  let first1;
  closure_40 = undefined;
  let bound;
  closure_43 = undefined;
  let ref;
  c48 = undefined;
  let callback4;
  closure_51 = undefined;
  let callback5;
  let callback6;
  let stateFromStores10;
  let callback7;
  let callback8;
  closure_59 = undefined;
  c60 = undefined;
  let callback10;
  c65 = undefined;
  let callback13;
  closure_69 = undefined;
  let onJumpToReplied;
  closure_73 = undefined;
  let tmp = closure_22();
  items = [memo];
  const stateFromStores = projectId(504).useStateFromStores(items, () => "active" === memo.getState(), []);
  const tmp6 = num(12779)(projectId);
  const tmp7 = num(12780)(projectId);
  let tmp8 = num(12781)(projectId);
  let obj = projectId(504);
  const isConjureManagedCopy = projectId(12290).useIsConjureManagedCopy(projectId);
  let obj2 = projectId(12290);
  const conjureRemixStartedAt = projectId(12781).useConjureRemixStartedAt(projectId);
  const obj4 = stateFromStores1;
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores1.useEffect(() => {
    if (stateFromStores) {
      metroImportDefault(projectId);
    }
  }, items1);
  let obj3 = projectId(12781);
  const ackConjureProjectWhileViewing = projectId(10998).useAckConjureProjectWhileViewing(projectId, stateFromStores);
  const obj5 = projectId(10998);
  const items2 = [memo3];
  const items3 = [projectId];
  stateFromStores1 = projectId(504).useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const obj6 = projectId(504);
  const items4 = [set];
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
  const items7 = [stateFromStores1];
  const memo1 = stateFromStores1.useMemo(() => conjureQueuedMessage.queuedUserMessages(stateFromStores1), items7);
  const obj8 = projectId(504);
  const items8 = [memo3];
  const items9 = [projectId];
  const stateFromStores3 = projectId(504).useStateFromStores(
    items8,
    () => ConjureChatStore.isThinking(projectId),
    items9,
  );
  const obj9 = projectId(504);
  const items10 = [memo3];
  const items11 = [projectId];
  const stateFromStores4 = projectId(504).useStateFromStores(
    items10,
    () => ConjureChatStore.isCompacting(projectId),
    items11,
  );
  const obj10 = projectId(504);
  const items12 = [memo3];
  const items13 = [projectId];
  const stateFromStores5 = projectId(504).useStateFromStores(
    items12,
    () => ConjureChatStore.isSaving(projectId),
    items13,
  );
  const obj11 = projectId(504);
  const items14 = [memo3];
  const items15 = [projectId];
  const stateFromStores6 = projectId(504).useStateFromStores(
    items14,
    () => ConjureChatStore.getThinkingActivity(projectId),
    items15,
  );
  const obj12 = projectId(504);
  const items16 = [memo3];
  const items17 = [projectId];
  const stateFromStores7 = projectId(504).useStateFromStores(
    items16,
    () => ConjureChatStore.getProjectUsage(projectId),
    items17,
  );
  const obj13 = projectId(504);
  [tmp22, tmp23] = stateFromStores(stateFromStores1.useState(null), 2);
  c8 = tmp23;
  let tmp24 = null == tmp22;
  if (!tmp24) {
    let tmp25 = stateFromStores3;
    if (stateFromStores3) {
      tmp25 = tmp22 === projectId;
    }
    tmp24 = tmp25;
  }
  if (!tmp24) {
    tmp23(null);
  }
  const items18 = [projectId];
  let tmp28 = stateFromStores3;
  const callback = obj4.useCallback(
    () =>
      _undefined((arg0) => {
        let tmp = null;
        if (arg0 !== projectId) {
          tmp = projectId;
        }
        return tmp;
      }),
    items18,
  );
  if (stateFromStores3) {
    tmp28 = tmp22 === projectId;
  }
  let tmp21 = stateFromStores(stateFromStores1.useState(null), 2);
  const items19 = [memo2];
  const items20 = [projectId];
  const stateFromStores8 = projectId(504).useStateFromStores(
    items19,
    () => ConjureConnectionStore.getConnState(projectId),
    items20,
  );
  const tmp2Result = projectId(504);
  const items21 = [memo3];
  const items22 = [projectId];
  stateFromStores9 = projectId(504).useStateFromStores(
    items21,
    () => ConjureChatStore.hasLoadedHistory(projectId),
    items22,
  );
  const tmp2Result16 = projectId(504);
  const items23 = [memo3];
  const items24 = [projectId];
  stateFromStores10 = projectId(504).useStateFromStores(
    items23,
    () => ConjureChatStore.isHistoryUnavailable(projectId),
    items24,
  );
  const tmp2Result17 = projectId(504);
  const chatEmptyStateResult = projectId(12784).chatEmptyState({
    historyLoaded: stateFromStores9,
    historyUnavailable: stateFromStores10,
    connState: stateFromStores8,
  });
  const tmp2Result18 = projectId(12784);
  const conjureScopeSetupPending = projectId(12785).useConjureScopeSetupPending(projectId);
  const tmp2Result19 = projectId(12785);
  render_id = null;
  const conjureHeldPrompt = projectId(12785).useConjureHeldPrompt(projectId);
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items25 = [memo];
  memo2 = obj4.useMemo(() => {
    const liveClarificationResult = ConjureClarification.liveClarification(memo);
    id = undefined;
    if (liveClarificationResult != null) {
      id = liveClarificationResult.id;
    }
    return id;
  }, items25);
  const items26 = [memo];
  set = obj4.useMemo(() => ConjureTodoState.supersededChecklists(memo), items26);
  const tmp2Result20 = projectId(12785);
  const items27 = [stateFromStores11];
  const items28 = [projectId];
  stateFromStores11 = projectId(504).useStateFromStores(
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
  const items29 = [memo, stateFromStores11];
  memo3 = obj4.useMemo(() => ConjureSecretRequestState.secretRequestStatuses(memo, stateFromStores11), items29);
  const tmp2Result21 = projectId(504);
  [c15, c16] = stateFromStores(
    obj4.useState(() => new Map()),
    2,
  );
  onToggleChecklist = obj4.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(12795).toggleConjureCard(get, closure_0, closure_1));
  }, []);
  const items30 = [memo];
  closure_18 = obj4.useMemo(() => conjurePendingPlan.planVersions(memo), items30);
  const tmp20Result = stateFromStores(
    obj4.useState(() => new Map()),
    2,
  );
  [c19, c20] = stateFromStores(
    obj4.useState(() => new Map()),
    2,
  );
  onTogglePlan = obj4.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined3((get) => projectId(12795).toggleConjureCard(get, closure_0, closure_1));
  }, []);
  const items31 = [memo];
  closure_22 = obj4.useMemo(
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
  closure_23 = obj4.useCallback(() => {
    const intl = util.intl;
    conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef4026.EMgIuY));
  }, items32);
  const items33 = [projectId];
  closure_24 = obj4.useCallback((implementation_prompt) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items33);
  const tmp20Result11 = stateFromStores(
    obj4.useState(() => new Map()),
    2,
  );
  const items34 = [projectId];
  [tmp42, tmp43] = stateFromStores(num(12798)(projectId), 2);
  const items35 = [projectId];
  const callback1 = obj4.useCallback(() => {
    const intl = util.intl;
    closure_2_10(projectId, intl.string(_modDef4026["t5CN3+"]));
  }, items34);
  closure_25 = obj4.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, {
      clarificationAnswers,
      attachments,
    });
  }, items35);
  const tmp20Result12 = stateFromStores(num(12798)(projectId), 2);
  [c26, c27] = stateFromStores(obj4.useState(null), 2);
  const tmp20Result14 = stateFromStores(obj4.useState(null), 2);
  dismissedAppBuildRequestId = tmp20Result14[0];
  onDismissAppBuildRequest = tmp20Result14[1];
  const tmp48 = num(12799)(projectId);
  sent = tmp48.sent;
  const request = tmp48.request;
  id = undefined;
  if (request != null) {
    id = request.id;
  }
  const items36 = [id, sent];
  let tmp52 = tmp51;
  const callback2 = obj4.useCallback((arr) => {
    if (null != id) {
      sent(tmp);
    }
    const obj2 = { text: null, variant: "success" };
    const obj = ToastActionCreatorsDefault;
    obj2.text = ConjureAppBuildRequest.appBuildRequestSentToast(arr);
    obj.open("CONJURE_APP_BUILD_REQUEST_SENT", obj2);
  }, items36);
  if ("open" !== stateFromStores8) {
    tmp52 = "connecting" === stateFromStores8;
  }
  canSend = tmp52;
  const items37 = [memo];
  memo4 = obj4.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items37);
  const tmp20Result13 = stateFromStores(obj4.useState(null), 2);
  joined = Array.from(memo3, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  }).join(",");
  const items38 = [tmp52, memo4, joined, dismissedAppBuildRequestId, memo2];
  const items39 = [memo];
  const memo5 = obj4.useMemo(
    () => ({
      canSend,
      pendingPlanId: memo4,
      secretStatusesKey: joined,
      dismissedAppBuildRequestId,
      liveClarificationId: memo2,
    }),
    items38,
  );
  memo6 = obj4.useMemo(() => {
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
  }, items39);
  const items40 = [memo, memo6];
  memo7 = obj4.useMemo(() => {
    let tmp2;
    if (null != memo6) {
      tmp2 = memo[tmp];
    }
    let timelineTree = null;
    if (null != tmp2) {
      timelineTree = ConjureTimelineTree.buildTimelineTree(tmp2.steps, { turnActive: true });
    }
    return timelineTree;
  }, items40);
  let tmp58 = null != memo7;
  if (tmp58) {
    tmp58 = memo7.steps.length > 0 || memo7.tasks.length > 0;
    const tmp59 = memo7.steps.length > 0 || memo7.tasks.length > 0;
  }
  const items41 = [memo7];
  let memo8 = obj4.useMemo(() => {
    let currentStepResult;
    if (null != memo7) {
      currentStepResult = ConjureTimelineTree.currentStep(tmp.steps);
    }
    let describeNodeResult = null;
    if (null != currentStepResult) {
      describeNodeResult = ConjureTimelineTree.describeNode(currentStepResult);
    }
    return describeNodeResult;
  }, items41);
  const arr = Array.from(memo3, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  });
  [obj22, c37] = stateFromStores(obj4.useState(null), 2);
  const tmp20Result15 = stateFromStores(obj4.useState(null), 2);
  [tmp63, c38] = stateFromStores(obj4.useState(64), 2);
  const tmp20Result17 = stateFromStores(obj4.useState(false), 2);
  first1 = tmp20Result17[0];
  closure_40 = tmp20Result17[1];
  const callback3 = obj4.useCallback((nativeEvent) => {
    closure_0 = Math.round(nativeEvent.nativeEvent.layout.height);
    _undefined5((arg0) => {
      let tmp = closure_0;
      if (arg0 === closure_0) {
        tmp = arg0;
      }
      return tmp;
    });
    closure_40(true);
  }, []);
  const tmp20Result16 = stateFromStores(obj4.useState(64), 2);
  bound = tmp63;
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp63, 52);
  }
  obj4.useRef(null);
  closure_43 = obj4.useRef(null);
  ref = obj4.useRef(false);
  obj4.useRef(true);
  obj4.useRef(0);
  obj4.useRef(0);
  tmp2Result22 = projectId(1377);
  [tmp70, c48] = stateFromStores(obj4.useState(false), 2);
  obj4.useRef(false);
  callback4 = obj4.useCallback(() => {
    closure_49.current = true;
    _undefined6(true);
  }, []);
  closure_51 = obj4.useRef({ viewportHeight: 0, contentHeight: 0, measuredRowCount: null });
  obj4.useRef({ rowCount: 0, historySettled: false });
  callback5 = obj4.useCallback((arg0) => {
    let tmp = arg0;
    const current = closure_51.current;
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
  const items42 = [callback5, callback4];
  callback6 = obj4.useCallback(() => {
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
                current = "reveal" !== closure_1_53();
              }
              if (!current) {
                closure_1_50();
              }
            });
          });
        }
      } else {
        callback4();
      }
    }
  }, items42);
  let tmp74 = stateFromStores9;
  if (!stateFromStores9) {
    tmp74 = stateFromStores10;
  }
  stateFromStores10 = tmp74;
  const items43 = [memo.length, tmp74, callback6];
  const layoutEffect = obj4.useLayoutEffect(() => {
    closure_52.current = { rowCount: memo.length, historySettled: stateFromStores10 };
    closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items43);
  callback7 = obj4.useCallback(() => {
    const animationFrame = requestAnimationFrame(() => {
      if (ref2.current) {
        const current = ref.current;
        if (current != null) {
          current.scrollToEnd({ animated: false });
        }
      }
    });
  }, []);
  callback8 = obj4.useCallback(() => {
    const timestamp = Date.now();
    closure_46.current = timestamp + 500;
    closure_47.current = timestamp + 2000;
  }, []);
  const items44 = [projectId, callback8];
  const effect1 = obj4.useEffect(() => {
    closure_45.current = true;
    callback8();
  }, items44);
  const items45 = [stateFromStores9, callback8];
  const effect2 = obj4.useEffect(() => {
    if (stateFromStores9) {
      callback8();
    }
  }, items45);
  obj4.useRef(null);
  const items46 = [callback6];
  const callback9 = obj4.useCallback((nativeEvent) => {
    const height = nativeEvent.nativeEvent.layout.height;
    ref7.current = height;
    if (obj.keepsBottomOnShrink(ref7.current, height, closure_43.current)) {
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
    closure_51.current.viewportHeight = height;
    callback6();
  }, items46);
  closure_59 = obj4.useRef(null);
  const tmp20Result18 = stateFromStores(obj4.useState(false), 2);
  [tmp82, tmp83] = stateFromStores(obj4.useState(null), 2);
  c60 = tmp83;
  if (tmp84) {
    tmp83(null);
  }
  obj4.useRef(null);
  obj4.useRef(false);
  callback10 = obj4.useCallback((current) => {
    closure_61.current = current;
    closure_62.current = false;
    _undefined7(current);
  }, []);
  let projectId1;
  if (tmp82 != null) {
    projectId1 = tmp82.projectId;
  }
  let tmp88 = projectId1 === projectId;
  if (tmp88) {
    const atResult = stateFromStores1.at(-1);
    let render_id1;
    if (atResult != null) {
      render_id1 = atResult.render_id;
    }
    tmp88 = tmp82.planId === render_id1;
  }
  const items47 = [projectId, stateFromStores1, memo, callback10];
  const effect3 = obj4.useEffect(() => {
    const takeArrivedPlanResult = projectId(12796).takeArrivedPlan(closure_59, projectId, stateFromStores1);
    projectId = takeArrivedPlanResult;
    let current = closure_43.current;
    if (null != takeArrivedPlanResult) {
      if (null == current) {
        const findIndexResult = memo.findIndex((render_id) => render_id.render_id === takeArrivedPlanResult);
        if (findIndexResult >= 0) {
          closure_45.current = false;
          closure_44.current = false;
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
        tmp(12803);
      }
    }
    let obj = projectId(12796);
    tmp = projectId;
    tmp3 = projectId;
  }, items47);
  obj4.useRef(false);
  const items48 = [first1, callback4];
  const effect4 = obj4.useEffect(() => {
    if (first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback4, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items48);
  const items49 = [projectId];
  const callback11 = obj4.useCallback(() => {
    React6(projectId);
  }, items49);
  const callback12 = obj4.useCallback(() => {
    closure_45.current = false;
    closure_62.current = true;
    if (obj.getKeyboardIsOpen()) {
      ChatInputUtils.dismissKeyboard();
      const tmpResult = ChatInputUtils;
    }
    obj = useKeyboardIsOpen;
  }, []);
  const tmp20Result19 = stateFromStores(obj4.useState(null), 2);
  tmp84 = null != tmp82 && tmp82.projectId !== projectId;
  [tmp96, c65] = stateFromStores(obj4.useState(false), 2);
  obj4.useRef(null);
  obj4.useRef(0);
  callback13 = obj4.useCallback(() => {
    const current = ref11.current;
    const current2 = closure_43.current;
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
  const items50 = [callback5, callback4, callback7, callback10, callback13];
  const items51 = [callback6, callback7, callback8, callback13];
  const callback14 = obj4.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_43.current = {
      offsetY: nativeEvent.contentOffset.y,
      viewportHeight: nativeEvent.layoutMeasurement.height,
      contentHeight: nativeEvent.contentSize.height,
    };
    if (!ref5.current) {
      const tmp3 = callback5(closure_43.current);
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
      current2 = conjureTranscriptScroll.isNearBottom(closure_43.current);
    }
    if (current2) {
      callback10(null);
    }
    callback13();
  }, items50);
  const callback15 = obj4.useCallback((arg0, contentHeight) => {
    closure_51.current.contentHeight = contentHeight;
    closure_51.current.measuredRowCount = ref6.current.rowCount;
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
      ref3.current = Math.min(timestamp + 500, ref4.current);
      callback7();
    }
    const current2 = closure_43.current;
    if (null != current2) {
      const obj2 = {};
      const merged = Object.assign(current2);
      obj2.contentHeight = contentHeight;
      if (isNearBottomResult) {
        const _Math2 = Math;
        obj2.offsetY = Math.max(0, contentHeight - current2.viewportHeight);
        let tmp12 = obj2;
      } else {
        tmp12 = obj2;
      }
      tmp11.current = tmp12;
      if (ref.current) {
        tmp13.current = false;
        const current3 = ref.current;
        if (current3 != null) {
          current3.scrollToEnd({ animated: true });
        }
      }
      callback13();
      isNearBottomResult = conjureTranscriptScroll.isNearBottom(current2);
    }
  }, items51);
  const items52 = [callback13];
  const memo9 = obj4.useMemo(() => ({ itemVisiblePercentThreshold: projectId(12804).MIN_VISIBLE_PERCENT }), []);
  const callback16 = obj4.useCallback((arg0) => {
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
  }, items52);
  if (stateFromStores5) {
    const intl3 = tmp2(1113).intl;
    memo8 = intl3.string(tmp5(4026).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1113).intl;
    memo8 = intl2.string(tmp5(4026).xnCAaP);
  } else if (memo8 == null) {
    let intl = tmp2(1113).intl;
    memo8 = intl.string(tmp5(4026).L9EDub);
  }
  const items53 = [memo, memo6];
  let tmp103;
  const memo10 = obj4.useMemo(() => {
    if (null == memo6) {
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
  }, items53);
  if (null != memo6) {
    tmp103 = memo[memo6];
  }
  let checklistLiveResult = null == tmp103;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(12792).checklistLive(tmp103);
    const tmp2Result23 = tmp2(12792);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp103) {
    conjureTurnStartedAtResult = tmp2(12805).conjureTurnStartedAt(tmp103);
    const tmp2Result24 = tmp2(12805);
  }
  const items54 = [memo7];
  let tmp107;
  const memo11 = obj4.useMemo(() => {
    if (null != memo7) {
      let runningTodoAgentsResult = ConjureTodoAgents.runningTodoAgents(tmp.tasks);
    } else {
      runningTodoAgentsResult = [];
    }
    return runningTodoAgentsResult;
  }, items54);
  if (null != memo6) {
    let render_id2;
    if (memo[memo6] != null) {
      render_id2 = tmp108.render_id;
    }
    tmp107 = render_id2;
  }
  let tmp110 = null != tmp107;
  if (tmp110) {
    tmp110 = (null != obj22 && !obj22.has(tmp107)) || tmp96;
    const tmp111 = (null != obj22 && !obj22.has(tmp107)) || tmp96;
  }
  let tmp112 = null;
  if (stateFromStores3) {
    tmp112 = null;
    if (tmp58) {
      tmp112 = null;
      if (tmp110) {
        tmp112 = memo8;
      }
    }
  }
  const items55 = [bound, memo6, callback13];
  const effect5 = obj4.useEffect(() => {
    closure_66.current = memo6;
    closure_67.current = bound;
    closure_0 = requestAnimationFrame(callback13);
    return () => cancelAnimationFrame(closure_0);
  }, items55);
  const items56 = [memo];
  closure_69 = obj4.useMemo(() => {
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
  }, items56);
  const items57 = [memo];
  onJumpToReplied = obj4.useCallback((arg0) => {
    closure_0 = arg0;
    const findIndexResult = memo.findIndex((id) => id.id === closure_0);
    if (findIndexResult >= 0) {
      closure_45.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: findIndexResult, animated: true, viewPosition: 0.5 };
        current.scrollToIndex(obj);
      }
    }
  }, items57);
  const items58 = [bound, memo6];
  const callback17 = obj4.useCallback(() => {
    if (null != memo6) {
      closure_45.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items58);
  const callback18 = obj4.useCallback(() => {
    const current = closure_43.current;
    let isNearBottomResult = null != current;
    if (isNearBottomResult) {
      isNearBottomResult = conjureTranscriptScroll.isNearBottom(current);
    }
    if (isNearBottomResult) {
      closure_44.current = true;
    }
  }, []);
  obj4.useRef(false);
  obj4.useRef(false);
  closure_73 = obj4.useCallback((arg0) => {
    let tmp2 = arg0;
    if (arg0) {
      tmp2 = !ref14.current;
    }
    closure_71.current = tmp2;
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
  const items59 = [num];
  const effect6 = obj4.useEffect(() => {
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
  }, items59);
  obj4.useRef(false);
  const callback19 = obj4.useCallback(() => {
    closure_74.current = true;
  }, []);
  const callback20 = obj4.useCallback(() => {
    closure_74.current = false;
  }, []);
  const items60 = [projectId];
  const callback21 = obj4.useCallback(() => {
    const current = ref15.current;
    let keyboardIsOpen = !current;
    if (!current) {
      keyboardIsOpen = useKeyboardIsOpen.getKeyboardIsOpen();
    }
    if (keyboardIsOpen) {
      ChatInputUtils.dismissKeyboard();
    }
    ref15.current = false;
  }, []);
  const items61 = [projectId];
  const callback22 = obj4.useCallback((arg0, arg1) => {
    closure_44.current = true;
    closure_2_10(projectId, arg0, arg1);
  }, items60);
  let connectionLabelResult = null;
  const callback23 = obj4.useCallback(() => {
    React5(projectId);
  }, items61);
  if ("open" !== stateFromStores8) {
    connectionLabelResult = tmp2(12808).connectionLabel(stateFromStores8);
    const tmp2Result25 = tmp2(12808);
  }
  const tmp20Result20 = stateFromStores(obj4.useState(false), 2);
  const obj7 = { style: tmp.container, children: null };
  const conjureControlActive = projectId(11049).useConjureControlActive(projectId);
  const items62 = [c15(num(12809), { thinking: stateFromStores3, bleedBottom: num(1627)().bottom }), ,];
  const obj14 = { style: tmp.transcriptArea, onTouchEnd: callback21, onTouchCancel: callback20, children: null };
  const obj15 = { value: callback19, children: null };
  if (first1) {
    const obj16 = { clearance: tmp63, children: null };
    const obj17 = {
      ref,
      fadingEdgeLength: 52,
      removeClippedSubviews: null,
      viewabilityConfig: null,
      onViewableItemsChanged: null,
      onScroll: null,
      onLayout: null,
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
    const tmp128 = closure_23;
    const tmp2Result27 = tmp2(1377);
    obj17.removeClippedSubviews = tmp2(1377).isIOS() && undefined;
    obj17.viewabilityConfig = memo9;
    obj17.onViewableItemsChanged = callback16;
    obj17.onScroll = callback14;
    obj17.onLayout = callback9;
    obj17.onScrollBeginDrag = callback12;
    obj17.onContentSizeChange = callback15;
    obj17.onStartReached = callback11;
    const tmp129 = tmp2(1377).isIOS() && undefined;
    let tmp130;
    if (tmp2Result28.isIOS()) {
      const obj18 = { top: num };
      tmp130 = obj18;
    }
    obj17.contentInset = tmp130;
    tmp2Result28 = tmp2(1377);
    let tmp126Result = null;
    if (!tmp2Result29.isIOS()) {
      tmp126Result = null;
      if (num > 0) {
        const obj19 = { style: null };
        const obj20 = { height: num };
        obj19.style = obj20;
        tmp126Result = tmp126(tmp125, obj19);
      }
    }
    obj17.ListHeaderComponent = tmp126Result;
    const items63 = [tmp.transcript, ,];
    tmp2Result29 = tmp2(1377);
    const isIOSResult = tmp2(1377).isIOS();
    let tmp133 = !isIOSResult;
    if (!isIOSResult) {
      const obj21 = { marginBottom: tmp63 - bound };
      tmp133 = obj21;
    }
    items63[1] = tmp133;
    let transcriptHidden = !tmp70;
    if (!tmp70) {
      transcriptHidden = tmp.transcriptHidden;
    }
    items63[2] = transcriptHidden;
    obj17.style = items63;
    const items64 = [tmp.transcriptContent];
    const obj23 = { paddingBottom: bound + tmp5(575).space.PX_8 };
    items64[1] = obj23;
    obj17.contentContainerStyle = items64;
    obj17.data = memo;
    obj17.extraData = memo5;
    let AUTOSCROLL_THRESHOLD;
    if (!tmp88) {
      AUTOSCROLL_THRESHOLD = tmp2(12803).AUTOSCROLL_THRESHOLD;
    }
    const obj24 = { startRenderingFromBottom: true, autoscrollToBottomThreshold: AUTOSCROLL_THRESHOLD };
    obj17.maintainVisibleContentPosition = obj24;
    obj17.keyExtractor = function keyExtractor(render_id) {
      return render_id.render_id;
    };
    const obj25 = { projectId, messages: memo, draftHasText: tmp42, onAskForIdeas: null, onShow: null };
    let tmp137;
    const tmp135 = c16;
    const tmp2Result30 = tmp2(1377);
    if (tmp52) {
      tmp137 = callback1;
    }
    const obj26 = { children: null };
    obj25.onAskForIdeas = tmp137;
    obj25.onShow = callback18;
    const items65 = [tmp126(tmp5(12812), obj25)];
    const obj27 = { projectId };
    items65[1] = tmp126(tmp2(12303).ConjureHostApprovalCards, obj27);
    obj26.children = items65;
    obj17.ListFooterComponent = tmp124(tmp135, obj26);
    if ("loading" === chatEmptyStateResult) {
      obj17.ListEmptyComponent = null;
      obj17.renderItem = function renderItem(arg0) {
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
          clarificationLive: null,
          clarificationDismissed: null,
          onDismissClarification: null,
          onCardInputFocusChange: null,
          canSend: null,
          appBuildRequestDismissed: null,
          onDismissAppBuildRequest: null,
          onRestoreVersion: null,
        };
        let flag = closure_22[index];
        if (flag == null) {
          flag = true;
        }
        obj.groupStart = flag;
        obj.first = 0 === index;
        obj.isNewest = item.render_id === render_id;
        obj.checklistSuperseded = set.has(item.render_id);
        let str = memo3.get(item.render_id);
        if (str == null) {
          str = "open";
        }
        obj.secretRequestStatus = str;
        const tmp3 = ConjureMessageRowDefault;
        obj.checklistExpanded = conjureCardOverrides.conjureCardExpanded(c15, item.render_id, set.has(item.render_id));
        obj.onToggleChecklist = onToggleChecklist;
        value = closure_18.get(item.render_id);
        let version;
        if (value != null) {
          version = value.version;
        }
        obj.planVersion = version;
        const value3 = closure_18.get(item.render_id);
        let superseded;
        if (value3 != null) {
          superseded = value3.superseded;
        }
        obj.planSuperseded = true === superseded;
        const value4 = closure_18.get(item.render_id);
        let superseded1;
        if (value4 != null) {
          superseded1 = value4.superseded;
        }
        obj.planExpanded = conjureCardOverrides.conjureCardExpanded(c19, item.render_id, true === superseded1);
        obj.onTogglePlan = onTogglePlan;
        obj.replied = closure_69.get(item.render_id);
        obj.onJumpToReplied = onJumpToReplied;
        let tmp13;
        if (canSend) {
          if (item.render_id === memo4) {
            tmp13 = closure_23;
          }
        }
        obj.onApprovePlan = tmp13;
        let tmp15;
        if (canSend) {
          tmp15 = closure_24;
        }
        obj.onPickIdea = tmp15;
        let tmp16;
        if (canSend) {
          tmp16 = closure_25;
        }
        obj.onAnswerClarification = tmp16;
        let tmp17 = null != item.clarification;
        if (tmp17) {
          tmp17 = item.clarification.id === memo2;
        }
        obj.clarificationLive = tmp17;
        let tmp19 = null != item.clarification;
        if (tmp19) {
          tmp19 = item.clarification.id === c26;
        }
        obj.clarificationDismissed = tmp19;
        obj.onDismissClarification = onDismissClarification;
        const tmp4Result = conjureCardOverrides;
        let tmp21;
        if (!tmp4Result2.isIOS()) {
          tmp21 = closure_73;
        }
        obj.onCardInputFocusChange = tmp21;
        obj.canSend = canSend;
        let tmp22 = null != item.appBuildRequest;
        if (tmp22) {
          tmp22 = item.appBuildRequest.id === first;
        }
        obj.appBuildRequestDismissed = tmp22;
        obj.onDismissAppBuildRequest = onDismissAppBuildRequest;
        let tmp24;
        if (!stateFromStores3) {
          tmp24 = dependencyMap;
        }
        obj.onRestoreVersion = tmp24;
        return closure_2_15(tmp3, obj);
      };
      obj16.children = tmp126(tmp2(7357).FlashList, obj17);
      let tmp126Result11 = tmp126(tmp128, obj16);
    } else {
      const obj28 = { style: tmp.placeholder, children: null };
      const intl4 = tmp2(1113).intl;
      if ("unavailable" === chatEmptyStateResult) {
        let AyiQEp = tmp5(4026).Td4Sf4;
      } else {
        AyiQEp = tmp5(4026).AyiQEp;
      }
      const obj29 = { variant: "body-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
      obj28.children = tmp126(tmp2(5751).Text, obj29);
      tmp126(tmp125, obj28);
    }
    const tmp5Result = tmp5(12812);
  } else {
    const obj30 = { style: tmp.transcript };
    tmp126Result11 = tmp126(tmp125, obj30);
  }
  const items66 = [tmp126Result11, ,];
  let tmp126Result13 = null;
  if (tmp28) {
    const obj31 = { projectId };
    tmp126Result13 = tmp126(tmp5(12981), obj31);
  }
  items66[1] = tmp126Result13;
  let tmp126Result14 = null;
  if (null != tmp112) {
    const obj32 = {
      line: tmp112,
      onJumpToActivity: callback17,
      bottom: tmp5(575).space.PX_12 + tmp63,
      todos: memo10,
      todosLive: checklistLiveResult,
      agents: memo11,
    };
    tmp126Result14 = tmp126(tmp5(12983), obj32);
    const tmp5Result4 = tmp5(12983);
  }
  items66[2] = tmp126Result14;
  obj15.children = items66;
  obj14.children = onToggleChecklist(projectId(12304).ConjureCardTouchContext.Provider, obj15);
  items62[1] = c15(stateFromStores2, obj14);
  const obj33 = { style: tmp.bottomStack, onLayout: callback3, children: null };
  const obj34 = {
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
    queuedCount: null,
  };
  let tmp144 = "loading" === chatEmptyStateResult;
  const tmp2Result26 = projectId(11049);
  if (tmp144) {
    tmp144 = 0 === memo.length;
  }
  obj34.recalling = tmp144;
  obj34.activity = stateFromStores6;
  obj34.projectUsage = stateFromStores7;
  obj34.connLabel = connectionLabelResult;
  obj34.controlling = conjureControlActive;
  obj34.connFailed = "failed" === stateFromStores8;
  obj34.thinkingOpen = tmp28;
  obj34.onToggleThinking = callback;
  obj34.queuedCount = memo1.length;
  const items67 = [c15(num(12986), obj34), ,];
  if (!isConjureManagedCopy) {
    if (null == tmp8) {
      if (null == tmp6) {
        if (null == tmp7) {
          const obj35 = { style: tmp.notices, children: null };
          let tmp126Result15 = null;
          if (isConjureManagedCopy) {
            const obj36 = { style: tmp.notice, children: null };
            const obj37 = { projectId };
            obj36.children = tmp126(tmp5(12996), obj37);
            tmp126Result15 = tmp126(tmp125, obj36);
          }
          const items68 = [tmp126Result15, , , , ,];
          let tmp126Result16 = null;
          if (null != tmp8) {
            const obj38 = { style: tmp.notice, children: null };
            const obj39 = { type: "critical", role: "alert", message: tmp8.message, action: null };
            const obj40 = { text: tmp8.retry.text, onPress: tmp8.retry.onClick };
            obj39.action = obj40;
            obj38.children = tmp126(tmp2(8095).InlineNotice, obj39);
            tmp126Result16 = tmp126(tmp125, obj38);
          }
          items68[1] = tmp126Result16;
          let tmp126Result17 = null;
          if (null != tmp6) {
            const obj41 = { style: tmp.notice, children: null };
            ({ message: obj59.message, onDismiss: obj59.onDismiss } = tmp6);
            obj41.children = tmp126(tmp2(8095).InlineNotice, {
              type: "warning",
              role: "status",
              message: null,
              onDismiss: null,
            });
            tmp126Result17 = tmp126(tmp125, obj41);
            const obj42 = { type: "warning", role: "status", message: null, onDismiss: null };
          }
          items68[2] = tmp126Result17;
          let tmp126Result18 = null;
          if (null != tmp7) {
            const obj43 = { style: tmp.notice, children: null };
            let str3 = "warning";
            if (tmp7.blocked) {
              str3 = "critical";
            }
            const obj44 = { type: str3, role: null, message: null };
            let str4 = "status";
            if (tmp7.blocked) {
              str4 = "alert";
            }
            obj44.role = str4;
            obj44.message = tmp7.message;
            obj43.children = tmp126(tmp2(8095).InlineNotice, obj44);
            tmp126Result18 = tmp126(tmp125, obj43);
          }
          items68[3] = tmp126Result18;
          let tmp126Result19 = null;
          if (null != tmp48.request) {
            const obj45 = { style: tmp.notice, children: null };
            const obj46 = {
              projectId,
              request: tmp48.request,
              canSend: tmp52,
              onDismiss: tmp48.close,
              onSent: callback2,
            };
            obj45.children = tmp126(tmp5(12967), obj46, tmp48.request.id);
            tmp126Result19 = tmp126(tmp125, obj45);
          }
          items68[4] = tmp126Result19;
          let tmp126Result20 = null;
          if (conjureScopeSetupPending) {
            const obj47 = { style: tmp.notice, children: null };
            const obj48 = { projectId };
            obj47.children = tmp126(tmp5(13010), obj48);
            tmp126Result20 = tmp126(tmp125, obj47);
          }
          items68[5] = tmp126Result20;
          obj35.children = items68;
          items67[1] = tmp124(tmp125, obj35);
          const obj49 = {
            projectId,
            canSend: tmp52,
            inputLocked: conjureScopeSetupPending,
            aiPaused: null,
            managedCopy: null,
            running: null,
            onSend: null,
            onInterrupt: null,
            onDraftHasTextChange: null,
            hidden: null,
            onSendToOtherProjects: null,
          };
          let blocked;
          if (tmp7 != null) {
            blocked = tmp7.blocked;
          }
          obj49.aiPaused = true === blocked;
          obj49.managedCopy = isConjureManagedCopy;
          obj49.running = stateFromStores3;
          obj49.onSend = callback22;
          let tmp153;
          if (stateFromStores3) {
            tmp153 = callback23;
          }
          obj49.onInterrupt = tmp153;
          obj49.onDraftHasTextChange = tmp43;
          obj49.hidden = hidden;
          let open;
          if (null == tmp48.request) {
            open = tmp48.open;
          }
          obj49.onSendToOtherProjects = open;
          items67[2] = tmp126(tmp5(13011), obj49, conjureHeldPrompt);
          obj33.children = items67;
          items62[2] = tmp124(tmp125, obj33);
          obj7.children = items62;
          return tmp124(tmp125, obj7);
        }
      }
    }
  }
  const tmp5Result5 = num(12986);
}
