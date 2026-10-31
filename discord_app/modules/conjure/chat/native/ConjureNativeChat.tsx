// === Module 12572: ConjureNativeChat ===

// Module 12572 (ConjureNativeChat)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import util from "util" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import LinearGradientDefault from "LinearGradient" /* 5587 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5712 */;
import _modDef7038 from "module_7038" /* 7038 */;
import conjureChatTurns from "conjureChatTurns" /* 10852 */;
import conjurePublishCard from "conjurePublishCard" /* 12576 */;
import conjureQueuedMessage from "conjureQueuedMessage" /* 12577 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12583 */;
import ConjureClarification from "ConjureClarification" /* 12584 */;
import ConjureTodoState from "ConjureTodoState" /* 12586 */;
import ConjureTimelineTree from "ConjureTimelineTree" /* 12587 */;
import ConjureSecretRequestState from "ConjureSecretRequestState" /* 12588 */;
import conjureCardOverrides from "conjureCardOverrides" /* 12589 */;
import conjurePendingPlan from "conjurePendingPlan" /* 12590 */;
import ConjureChatGrouping from "ConjureChatGrouping" /* 12591 */;
import ConjureAppBuildRequest from "ConjureAppBuildRequest" /* 12594 */;
import conjureTranscriptScroll from "conjureTranscriptScroll" /* 12598 */;
import ConjureTodoAgents from "ConjureTodoAgents" /* 12601 */;
import ConjureRepliedMessage from "ConjureRepliedMessage" /* 12602 */;
import ConjureMessageRowDefault from "ConjureMessageRow" /* 12630 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AppStateStore from "AppStateStore" /* 1993 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10850 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10867 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10869 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;

require = fn;
function TranscriptFade(children) {
  children = children.children;
  const tmp = closure_22();
  let tmp3 = children;
  if (obj.isIOS()) {
    const obj2 = { style: tmp.transcript, maskElement: null, children: null };
    const obj3 = { style: tmp.transcript, children: null };
    const obj4 = { style: tmp.maskSolid };
    items = [__initData(View, obj4), , ];
    const obj5 = { style: tmp.maskFade, colors: items, locations, start, end };
    items[1] = __initData(LinearGradientDefault, obj5);
    const obj6 = { style: null };
    const obj7 = { height: null };
    const _Math = Math;
    obj7.height = Math.max(0, children.clearance - 52);
    obj6.style = obj7;
    items[2] = __initData(View, obj6);
    obj3.children = items;
    obj2.maskElement = closure_1_17(View, obj3);
    obj2.children = children;
    tmp3 = __initData(_modDef7038, obj2);
  }
  return tmp3;
}
const View = fn(17).View;
let ConjureConnectionStore = fn(10850);
({ ensureConnection: closure_7, interruptTurn: closure_8, loadOlderHistory: closure_9, sendUserMessage: c10 } = ConjureConnectionStore);
let ConjureConnectionStore = ConjureConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: closure_15, Fragment: closure_16, jsxs: closure_17 } = jsxProd);
const BLACK = nativeDefault.unsafe_rawColors.BLACK;
let items = [BLACK, , ];
let obj = _modDef671(BLACK);
items[1] = _modDef671(BLACK).alpha(0.2).css();
items[2] = "transparent";
const locations = [0, 0.4, 1];
const start = { x: 0, y: 0 };
const end = { x: 0, y: 1 };
const createStyles = fn(5014);
let obj2 = { container: { flex: 1 }, transcript: { flex: 1 }, maskSolid: { flex: 1, backgroundColor: BLACK }, maskFade: { height: 52 }, transcriptArea: { flex: 1, position: "relative" }, transcriptContent: null, transcriptHidden: null, bottomStack: null, notices: null, notice: null, placeholder: null };
const alphaResult = _modDef671(BLACK).alpha(0.2);
obj2.transcriptContent = { paddingTop: nativeDefault.space.PX_8 };
obj2.transcriptHidden = { opacity: 0 };
obj2.bottomStack = { position: "absolute", left: 0, right: 0, bottom: 0 };
let obj4 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notices = { paddingTop: nativeDefault.space.PX_8 };
let obj5 = { paddingTop: nativeDefault.space.PX_8 };
obj2.notice = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
let obj6 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingBottom: nativeDefault.space.PX_8 };
obj2.placeholder = { alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_24 };
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
  const tmp6 = num(12573)(projectId);
  const tmp7 = num(12574)(projectId);
  let tmp8 = num(12575)(projectId);
  let obj = projectId(504);
  const conjureRemixStartedAt = projectId(12575).useConjureRemixStartedAt(projectId);
  let obj3 = stateFromStores1;
  const items1 = [stateFromStores, projectId];
  const effect = stateFromStores1.useEffect(() => {
    if (stateFromStores) {
      React5(projectId);
    }
  }, items1);
  let obj2 = projectId(12575);
  const ackConjureProjectWhileViewing = projectId(10877).useAckConjureProjectWhileViewing(projectId, stateFromStores);
  const obj4 = projectId(10877);
  const items2 = [memo3];
  const items3 = [projectId];
  stateFromStores1 = projectId(504).useStateFromStores(items2, () => ConjureChatStore.getMessages(projectId), items3);
  const obj5 = projectId(504);
  const items4 = [set];
  const items5 = [projectId];
  const stateFromStores2 = projectId(504).useStateFromStores(items4, () => ConjurePublishStatusStore.getPublishStatus(projectId), items5);
  const items6 = [stateFromStores1, stateFromStores2];
  memo = stateFromStores1.useMemo(() => conjurePublishCard.withLivePublishCard(stateFromStores1, stateFromStores2), items6);
  const items7 = [stateFromStores1];
  const memo1 = stateFromStores1.useMemo(() => conjureQueuedMessage.queuedUserMessages(stateFromStores1), items7);
  const obj7 = projectId(504);
  const items8 = [memo3];
  const items9 = [projectId];
  const stateFromStores3 = projectId(504).useStateFromStores(items8, () => ConjureChatStore.isThinking(projectId), items9);
  const obj8 = projectId(504);
  const items10 = [memo3];
  const items11 = [projectId];
  const stateFromStores4 = projectId(504).useStateFromStores(items10, () => ConjureChatStore.isCompacting(projectId), items11);
  const obj9 = projectId(504);
  const items12 = [memo3];
  const items13 = [projectId];
  const stateFromStores5 = projectId(504).useStateFromStores(items12, () => ConjureChatStore.isSaving(projectId), items13);
  const obj10 = projectId(504);
  const items14 = [memo3];
  const items15 = [projectId];
  const stateFromStores6 = projectId(504).useStateFromStores(items14, () => ConjureChatStore.getThinkingActivity(projectId), items15);
  const obj11 = projectId(504);
  const items16 = [memo3];
  const items17 = [projectId];
  const stateFromStores7 = projectId(504).useStateFromStores(items16, () => ConjureChatStore.getProjectUsage(projectId), items17);
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
  const items18 = [projectId];
  let tmp27 = stateFromStores3;
  const callback = obj3.useCallback(() => _undefined((arg0) => {
    let tmp = null;
    if (arg0 !== projectId) {
      tmp = projectId;
    }
    return tmp;
  }), items18);
  if (stateFromStores3) {
    tmp27 = tmp21 === projectId;
  }
  const tmp20 = stateFromStores(stateFromStores1.useState(null), 2);
  const items19 = [memo2];
  const items20 = [projectId];
  const stateFromStores8 = projectId(504).useStateFromStores(items19, () => ConjureConnectionStore.getConnState(projectId), items20);
  const tmp2Result = projectId(504);
  const items21 = [memo3];
  const items22 = [projectId];
  stateFromStores9 = projectId(504).useStateFromStores(items21, () => ConjureChatStore.hasLoadedHistory(projectId), items22);
  const tmp2Result16 = projectId(504);
  const items23 = [memo3];
  const items24 = [projectId];
  stateFromStores10 = projectId(504).useStateFromStores(items23, () => ConjureChatStore.isHistoryUnavailable(projectId), items24);
  const tmp2Result17 = projectId(504);
  const chatEmptyStateResult = projectId(12578).chatEmptyState({ historyLoaded: stateFromStores9, historyUnavailable: stateFromStores10, connState: stateFromStores8 });
  const tmp2Result18 = projectId(12578);
  const conjureScopeSetupPending = projectId(12579).useConjureScopeSetupPending(projectId);
  const tmp2Result19 = projectId(12579);
  render_id = null;
  const conjureHeldPrompt = projectId(12579).useConjureHeldPrompt(projectId);
  if (memo.length > 0) {
    render_id = memo[memo.length - 1].render_id;
  }
  const items25 = [memo];
  memo2 = obj3.useMemo(() => {
    const liveClarificationResult = ConjureClarification.liveClarification(memo);
    id = undefined;
    if (liveClarificationResult != null) {
      id = liveClarificationResult.id;
    }
    return id;
  }, items25);
  const items26 = [memo];
  set = obj3.useMemo(() => ConjureTodoState.supersededChecklists(memo), items26);
  const tmp2Result20 = projectId(12579);
  const items27 = [stateFromStores11];
  const items28 = [projectId];
  stateFromStores11 = projectId(504).useStateFromStores(items27, () => {
    const settings = ConjureSettingsStore.getSettings(projectId);
    let secrets;
    if (settings != null) {
      secrets = settings.secrets;
    }
    return secrets;
  }, items28);
  const items29 = [memo, stateFromStores11];
  memo3 = obj3.useMemo(() => ConjureSecretRequestState.secretRequestStatuses(memo, stateFromStores11), items29);
  const tmp2Result21 = projectId(504);
  [c15, c16] = stateFromStores(obj3.useState(() => new Map()), 2);
  onToggleChecklist = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined2((get) => projectId(12589).toggleConjureCard(get, closure_0, closure_1));
  }, []);
  const items30 = [memo];
  closure_18 = obj3.useMemo(() => conjurePendingPlan.planVersions(memo), items30);
  const tmp19Result = stateFromStores(obj3.useState(() => new Map()), 2);
  [c19, c20] = stateFromStores(obj3.useState(() => new Map()), 2);
  onTogglePlan = obj3.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined3((get) => projectId(12589).toggleConjureCard(get, closure_0, closure_1));
  }, []);
  const items31 = [memo];
  closure_22 = obj3.useMemo(() => ConjureChatGrouping.groupChatRows(memo.map((key) => {
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
  })), items31);
  const items32 = [projectId];
  closure_23 = obj3.useCallback(() => {
    const intl = util.intl;
    conjureAttachmentDrafts.sendConjureCardReply(projectId, intl.string(_modDef3868.EMgIuY));
  }, items32);
  const items33 = [projectId];
  closure_24 = obj3.useCallback((implementation_prompt) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt.implementation_prompt);
  }, items33);
  const tmp19Result11 = stateFromStores(obj3.useState(() => new Map()), 2);
  const items34 = [projectId];
  [tmp41, tmp42] = stateFromStores(num(12592)(projectId), 2);
  const items35 = [projectId];
  const callback1 = obj3.useCallback(() => {
    const intl = util.intl;
    closure_2_10(projectId, intl.string(_modDef3868["t5CN3+"]));
  }, items34);
  closure_25 = obj3.useCallback((implementation_prompt, clarificationAnswers, attachments) => {
    conjureAttachmentDrafts.sendConjureCardReply(projectId, implementation_prompt, { clarificationAnswers, attachments });
  }, items35);
  const tmp19Result12 = stateFromStores(num(12592)(projectId), 2);
  [c26, c27] = stateFromStores(obj3.useState(null), 2);
  const tmp19Result14 = stateFromStores(obj3.useState(null), 2);
  dismissedAppBuildRequestId = tmp19Result14[0];
  onDismissAppBuildRequest = tmp19Result14[1];
  const tmp47 = num(12593)(projectId);
  sent = tmp47.sent;
  const request = tmp47.request;
  id = undefined;
  if (request != null) {
    id = request.id;
  }
  const items36 = [id, sent];
  let tmp51 = tmp50;
  const callback2 = obj3.useCallback((arr) => {
    if (null != id) {
      sent(tmp);
    }
    const obj2 = { text: null, variant: "success" };
    const obj = ToastActionCreatorsDefault;
    obj2.text = ConjureAppBuildRequest.appBuildRequestSentToast(arr);
    obj.open("CONJURE_APP_BUILD_REQUEST_SENT", obj2);
  }, items36);
  if ("open" !== stateFromStores8) {
    tmp51 = "connecting" === stateFromStores8;
  }
  canSend = tmp51;
  const items37 = [memo];
  memo4 = obj3.useMemo(() => conjurePendingPlan.pendingPlanRenderId(memo), items37);
  const tmp19Result13 = stateFromStores(obj3.useState(null), 2);
  joined = Array.from(memo3, (arg0) => {
    [tmp, tmp2] = arg0;
    return "" + tmp + ":" + tmp2;
  }).join(",");
  const items38 = [tmp51, memo4, joined, dismissedAppBuildRequestId, memo2];
  const items39 = [memo];
  const memo5 = obj3.useMemo(() => ({ canSend, pendingPlanId: memo4, secretStatusesKey: joined, dismissedAppBuildRequestId, liveClarificationId: memo2 }), items38);
  memo6 = obj3.useMemo(() => {
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
  memo7 = obj3.useMemo(() => {
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
  let tmp57 = null != memo7;
  if (tmp57) {
    tmp57 = memo7.steps.length > 0 || memo7.tasks.length > 0;
    const tmp58 = memo7.steps.length > 0 || memo7.tasks.length > 0;
  }
  const items41 = [memo7];
  let memo8 = obj3.useMemo(() => {
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
  [obj21, c37] = stateFromStores(obj3.useState(null), 2);
  const tmp19Result15 = stateFromStores(obj3.useState(null), 2);
  [tmp62, c38] = stateFromStores(obj3.useState(64), 2);
  const tmp19Result17 = stateFromStores(obj3.useState(false), 2);
  first1 = tmp19Result17[0];
  closure_40 = tmp19Result17[1];
  const callback3 = obj3.useCallback((nativeEvent) => {
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
  const tmp19Result16 = stateFromStores(obj3.useState(64), 2);
  bound = tmp62;
  if (!tmp2Result22.isIOS()) {
    let _Math = Math;
    bound = Math.min(tmp62, 52);
  }
  obj3.useRef(null);
  closure_43 = obj3.useRef(null);
  ref = obj3.useRef(false);
  obj3.useRef(true);
  obj3.useRef(0);
  obj3.useRef(0);
  tmp2Result22 = projectId(1375);
  [tmp69, c48] = stateFromStores(obj3.useState(false), 2);
  obj3.useRef(false);
  callback4 = obj3.useCallback(() => {
    closure_49.current = true;
    _undefined6(true);
  }, []);
  closure_51 = obj3.useRef({ viewportHeight: 0, contentHeight: 0, measuredRowCount: null });
  obj3.useRef({ rowCount: 0, historySettled: false });
  callback5 = obj3.useCallback((arg0) => {
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
  let tmp73 = stateFromStores9;
  if (!stateFromStores9) {
    tmp73 = stateFromStores10;
  }
  stateFromStores10 = tmp73;
  const items43 = [memo.length, tmp73, callback6];
  const layoutEffect = obj3.useLayoutEffect(() => {
    closure_52.current = { rowCount: memo.length, historySettled: stateFromStores10 };
    closure_0 = requestAnimationFrame(callback6);
    return () => cancelAnimationFrame(closure_0);
  }, items43);
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
    closure_46.current = timestamp + 500;
    closure_47.current = timestamp + 2000;
  }, []);
  const items44 = [projectId, callback8];
  const effect1 = obj3.useEffect(() => {
    closure_45.current = true;
    callback8();
  }, items44);
  const items45 = [stateFromStores9, callback8];
  const effect2 = obj3.useEffect(() => {
    if (stateFromStores9) {
      callback8();
    }
  }, items45);
  obj3.useRef(null);
  const items46 = [callback6];
  const callback9 = obj3.useCallback((nativeEvent) => {
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
  closure_59 = obj3.useRef(null);
  const tmp19Result18 = stateFromStores(obj3.useState(false), 2);
  [tmp81, tmp82] = stateFromStores(obj3.useState(null), 2);
  c60 = tmp82;
  if (tmp83) {
    tmp82(null);
  }
  obj3.useRef(null);
  obj3.useRef(false);
  callback10 = obj3.useCallback((current) => {
    closure_61.current = current;
    closure_62.current = false;
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
  const items47 = [projectId, stateFromStores1, memo, callback10];
  const effect3 = obj3.useEffect(() => {
    const takeArrivedPlanResult = projectId(12590).takeArrivedPlan(closure_59, projectId, stateFromStores1);
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
        tmp(12598);
      }
    }
    let obj = projectId(12590);
    tmp = projectId;
    tmp3 = projectId;
  }, items47);
  obj3.useRef(false);
  const items48 = [first1, callback4];
  const effect4 = obj3.useEffect(() => {
    if (first1) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(callback4, 3000);
      return () => clearTimeout(closure_0);
    }
  }, items48);
  const items49 = [projectId];
  const callback11 = obj3.useCallback(() => {
    React7(projectId);
  }, items49);
  const callback12 = obj3.useCallback(() => {
    closure_45.current = false;
    closure_62.current = true;
  }, []);
  const tmp19Result19 = stateFromStores(obj3.useState(null), 2);
  tmp83 = null != tmp81 && tmp81.projectId !== projectId;
  [tmp95, c65] = stateFromStores(obj3.useState(false), 2);
  obj3.useRef(null);
  obj3.useRef(0);
  callback13 = obj3.useCallback(() => {
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
  const callback14 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_43.current = { offsetY: nativeEvent.contentOffset.y, viewportHeight: nativeEvent.layoutMeasurement.height, contentHeight: nativeEvent.contentSize.height };
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
  const callback15 = obj3.useCallback((arg0, contentHeight) => {
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
  const memo9 = obj3.useMemo(() => ({ itemVisiblePercentThreshold: projectId(12599).MIN_VISIBLE_PERCENT }), []);
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
  }, items52);
  if (stateFromStores5) {
    const intl3 = tmp2(1113).intl;
    memo8 = intl3.string(tmp5(3868).mKK6wB);
  } else if (stateFromStores4) {
    const intl2 = tmp2(1113).intl;
    memo8 = intl2.string(tmp5(3868).xnCAaP);
  } else if (memo8 == null) {
    let intl = tmp2(1113).intl;
    memo8 = intl.string(tmp5(3868).L9EDub);
  }
  const items53 = [memo, memo6];
  let tmp102;
  const memo10 = obj3.useMemo(() => {
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
    tmp102 = memo[memo6];
  }
  let checklistLiveResult = null == tmp102;
  if (!checklistLiveResult) {
    checklistLiveResult = tmp2(12586).checklistLive(tmp102);
    const tmp2Result23 = tmp2(12586);
  }
  let conjureTurnStartedAtResult;
  if (null != tmp102) {
    conjureTurnStartedAtResult = tmp2(12600).conjureTurnStartedAt(tmp102);
    const tmp2Result24 = tmp2(12600);
  }
  const items54 = [memo7];
  let tmp106;
  const memo11 = obj3.useMemo(() => {
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
    if (tmp57) {
      tmp111 = null;
      if (tmp109) {
        tmp111 = memo8;
      }
    }
  }
  const items55 = [bound, memo6, callback13];
  const effect5 = obj3.useEffect(() => {
    closure_66.current = memo6;
    closure_67.current = bound;
    closure_0 = requestAnimationFrame(callback13);
    return () => cancelAnimationFrame(closure_0);
  }, items55);
  const items56 = [memo];
  closure_69 = obj3.useMemo(() => {
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
  onJumpToReplied = obj3.useCallback((arg0) => {
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
  const callback17 = obj3.useCallback(() => {
    if (null != memo6) {
      closure_45.current = false;
      const current = ref.current;
      if (current != null) {
        const obj = { index: tmp, animated: true, viewPosition: 1, viewOffset: bound };
        current.scrollToIndex(obj);
      }
    }
  }, items58);
  const callback18 = obj3.useCallback(() => {
    const current = closure_43.current;
    let isNearBottomResult = null != current;
    if (isNearBottomResult) {
      isNearBottomResult = conjureTranscriptScroll.isNearBottom(current);
    }
    if (isNearBottomResult) {
      closure_44.current = true;
    }
  }, []);
  obj3.useRef(false);
  obj3.useRef(false);
  closure_73 = obj3.useCallback((arg0) => {
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
  }, items59);
  const items60 = [projectId];
  const items61 = [projectId];
  const callback19 = obj3.useCallback((arg0, arg1) => {
    closure_44.current = true;
    closure_2_10(projectId, arg0, arg1);
  }, items60);
  let connectionLabelResult = null;
  const callback20 = obj3.useCallback(() => {
    React6(projectId);
  }, items61);
  if ("open" !== stateFromStores8) {
    connectionLabelResult = tmp2(12603).connectionLabel(stateFromStores8);
    const tmp2Result25 = tmp2(12603);
  }
  const tmp19Result20 = stateFromStores(obj3.useState(false), 2);
  const obj6 = { style: tmp.container, children: null };
  const conjureControlActive = projectId(10923).useConjureControlActive(projectId);
  const items62 = [c15(num(12604), { thinking: stateFromStores3, bleedBottom: num(1625)().bottom }), , ];
  const obj13 = { style: tmp.transcriptArea, children: null };
  if (first1) {
    const obj14 = { clearance: tmp62, children: null };
    const obj15 = { ref, fadingEdgeLength: 52, removeClippedSubviews: null, viewabilityConfig: null, onViewableItemsChanged: null, onScroll: null, onLayout: null, onScrollBeginDrag: null, onContentSizeChange: null, onStartReached: null, scrollEventThrottle: 16, keyboardShouldPersistTaps: "handled", contentInset: null, ListHeaderComponent: null, style: null, contentContainerStyle: null, data: null, extraData: null, maintainVisibleContentPosition: null, keyExtractor: null, ListFooterComponent: null, ListEmptyComponent: null, renderItem: null };
    const tmp124 = closure_23;
    const tmp2Result27 = tmp2(1375);
    obj15.removeClippedSubviews = tmp2(1375).isIOS() && undefined;
    obj15.viewabilityConfig = memo9;
    obj15.onViewableItemsChanged = callback16;
    obj15.onScroll = callback14;
    obj15.onLayout = callback9;
    obj15.onScrollBeginDrag = callback12;
    obj15.onContentSizeChange = callback15;
    obj15.onStartReached = callback11;
    const tmp125 = tmp2(1375).isIOS() && undefined;
    let tmp126;
    if (tmp2Result28.isIOS()) {
      const obj16 = { top: num };
      tmp126 = obj16;
    }
    obj15.contentInset = tmp126;
    tmp2Result28 = tmp2(1375);
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
    const items63 = [tmp.transcript, , ];
    tmp2Result29 = tmp2(1375);
    const isIOSResult = tmp2(1375).isIOS();
    let tmp129 = !isIOSResult;
    if (!isIOSResult) {
      const obj19 = { marginBottom: tmp62 - bound };
      tmp129 = obj19;
    }
    items63[1] = tmp129;
    let transcriptHidden = !tmp69;
    if (!tmp69) {
      transcriptHidden = tmp.transcriptHidden;
    }
    items63[2] = transcriptHidden;
    obj15.style = items63;
    const items64 = [tmp.transcriptContent, ];
    const obj20 = { paddingBottom: bound + tmp5(575).space.PX_8 };
    items64[1] = obj20;
    obj15.contentContainerStyle = items64;
    obj15.data = memo;
    obj15.extraData = memo5;
    let AUTOSCROLL_THRESHOLD;
    if (!tmp87) {
      AUTOSCROLL_THRESHOLD = tmp2(12598).AUTOSCROLL_THRESHOLD;
    }
    const obj22 = { startRenderingFromBottom: true, autoscrollToBottomThreshold: AUTOSCROLL_THRESHOLD };
    obj15.maintainVisibleContentPosition = obj22;
    obj15.keyExtractor = function keyExtractor(render_id) {
      return render_id.render_id;
    };
    const obj23 = { projectId, messages: memo, draftHasText: tmp41, onAskForIdeas: null, onShow: null };
    let tmp133;
    const tmp131 = c16;
    const tmp2Result30 = tmp2(1375);
    if (tmp51) {
      tmp133 = callback1;
    }
    const obj24 = { children: null };
    obj23.onAskForIdeas = tmp133;
    obj23.onShow = callback18;
    const items65 = [tmp122(tmp5(12607), obj23), ];
    const obj25 = { projectId };
    items65[1] = tmp122(tmp2(12476).ConjureHostApprovalCards, obj25);
    obj24.children = items65;
    obj15.ListFooterComponent = tmp120(tmp131, obj24);
    if ("loading" === chatEmptyStateResult) {
      obj15.ListEmptyComponent = null;
      obj15.renderItem = function renderItem(arg0) {
        ({ item, index } = arg0);
        const obj = { projectId, message: item, groupStart: null, first: null, isNewest: null, checklistSuperseded: null, secretRequestStatus: null, checklistExpanded: null, onToggleChecklist: null, planVersion: null, planSuperseded: null, planExpanded: null, onTogglePlan: null, replied: null, onJumpToReplied: null, onApprovePlan: null, onPickIdea: null, onAnswerClarification: null, clarificationLive: null, clarificationDismissed: null, onDismissClarification: null, onCardInputFocusChange: null, canSend: null, appBuildRequestDismissed: null, onDismissAppBuildRequest: null, onRestoreVersion: null };
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
        return __initData(tmp3, obj);
      };
      obj14.children = tmp122(tmp2(7294).FlashList, obj15);
      let tmp122Result10 = tmp122(tmp124, obj14);
    } else {
      const obj26 = { style: tmp.placeholder, children: null };
      const intl4 = tmp2(1113).intl;
      if ("unavailable" === chatEmptyStateResult) {
        let AyiQEp = tmp5(3868).Td4Sf4;
      } else {
        AyiQEp = tmp5(3868).AyiQEp;
      }
      const obj27 = { variant: "text-sm/normal", color: "text-muted", children: intl4.string(AyiQEp) };
      obj26.children = tmp122(tmp2(5624).Text, obj27);
      tmp122(tmp121, obj26);
    }
    const tmp5Result = tmp5(12607);
  } else {
    const obj28 = { style: tmp.transcript };
    tmp122Result10 = tmp122(tmp121, obj28);
  }
  const items66 = [tmp122Result10, , ];
  let tmp122Result12 = null;
  if (tmp27) {
    const obj29 = { projectId };
    tmp122Result12 = tmp122(tmp5(12777), obj29);
  }
  items66[1] = tmp122Result12;
  let tmp122Result13 = null;
  if (null != tmp111) {
    const obj30 = { line: tmp111, onJumpToActivity: callback17, bottom: tmp5(575).space.PX_12 + tmp62, todos: memo10, todosLive: checklistLiveResult, agents: memo11 };
    tmp122Result13 = tmp122(tmp5(12778), obj30);
    const tmp5Result4 = tmp5(12778);
  }
  items66[2] = tmp122Result13;
  obj13.children = items66;
  items62[1] = onToggleChecklist(stateFromStores2, obj13);
  const obj31 = { style: tmp.bottomStack, onLayout: callback3, children: null };
  const obj32 = { projectId, thinking: stateFromStores3, turnStartedAt: conjureTurnStartedAtResult, remixStartedAt: conjureRemixStartedAt, compacting: stateFromStores4, saving: stateFromStores5, recalling: null, activity: null, projectUsage: null, connLabel: null, controlling: null, connFailed: null, thinkingOpen: null, onToggleThinking: null, queuedCount: null };
  let tmp140 = "loading" === chatEmptyStateResult;
  const tmp2Result26 = projectId(10923);
  if (tmp140) {
    tmp140 = 0 === memo.length;
  }
  obj32.recalling = tmp140;
  obj32.activity = stateFromStores6;
  obj32.projectUsage = stateFromStores7;
  obj32.connLabel = connectionLabelResult;
  obj32.controlling = conjureControlActive;
  obj32.connFailed = "failed" === stateFromStores8;
  obj32.thinkingOpen = tmp27;
  obj32.onToggleThinking = callback;
  obj32.queuedCount = memo1.length;
  const items67 = [c15(num(12781), obj32), , ];
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
          obj34.children = tmp122(tmp2(8025).InlineNotice, obj35);
          tmp122Result14 = tmp122(tmp121, obj34);
        }
        const items68 = [tmp122Result14, , , , ];
        let tmp122Result15 = null;
        if (null != tmp6) {
          const obj37 = { style: tmp.notice, children: null };
          ({ message: obj55.message, onDismiss: obj55.onDismiss } = tmp6);
          obj37.children = tmp122(tmp2(8025).InlineNotice, { type: "warning", role: "status", message: null, onDismiss: null });
          tmp122Result15 = tmp122(tmp121, obj37);
          const obj38 = { type: "warning", role: "status", message: null, onDismiss: null };
        }
        items68[1] = tmp122Result15;
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
          obj39.children = tmp122(tmp2(8025).InlineNotice, obj40);
          tmp122Result16 = tmp122(tmp121, obj39);
        }
        items68[2] = tmp122Result16;
        let tmp122Result17 = null;
        if (null != tmp47.request) {
          const obj41 = { style: tmp.notice, children: null };
          const obj42 = { projectId, request: tmp47.request, canSend: tmp51, onDismiss: tmp47.close, onSent: callback2 };
          obj41.children = tmp122(tmp5(12763), obj42, tmp47.request.id);
          tmp122Result17 = tmp122(tmp121, obj41);
        }
        items68[3] = tmp122Result17;
        let tmp122Result18 = null;
        if (conjureScopeSetupPending) {
          const obj43 = { style: tmp.notice, children: null };
          const obj44 = { projectId };
          obj43.children = tmp122(tmp5(12791), obj44);
          tmp122Result18 = tmp122(tmp121, obj43);
        }
        items68[4] = tmp122Result18;
        obj33.children = items68;
        items67[1] = tmp120(tmp121, obj33);
        const obj45 = { projectId, canSend: tmp51, inputLocked: conjureScopeSetupPending, aiPaused: null, running: null, onSend: null, onInterrupt: null, onDraftHasTextChange: null, hidden: null, onSendToOtherProjects: null };
        let blocked;
        if (tmp7 != null) {
          blocked = tmp7.blocked;
        }
        obj45.aiPaused = true === blocked;
        obj45.running = stateFromStores3;
        obj45.onSend = callback19;
        let tmp148;
        if (stateFromStores3) {
          tmp148 = callback20;
        }
        obj45.onInterrupt = tmp148;
        obj45.onDraftHasTextChange = tmp42;
        obj45.hidden = hidden;
        let open;
        if (null == tmp47.request) {
          open = tmp47.open;
        }
        obj45.onSendToOtherProjects = open;
        items67[2] = tmp122(tmp5(12792), obj45, conjureHeldPrompt);
        obj31.children = items67;
        items62[2] = tmp120(tmp121, obj31);
        obj6.children = items62;
        return tmp120(tmp121, obj6);
      }
    }
  }
  const tmp5Result5 = num(12781);
};