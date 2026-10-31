// === Module 12792: ConjureNativeComposer ===

// Module 12792 (ConjureNativeComposer)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import _modDef3868 from "module_3868" /* 3868 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import useToken from "useToken" /* 5596 */;
import SendMessageIcon from "SendMessageIcon" /* 5729 */;
import WarningIcon from "WarningIcon" /* 8026 */;
import ImageCarousel from "ImageCarousel" /* 10526 */;
import MusicIcon from "MusicIcon" /* 10758 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10828 */;
import ChatArrowRightIcon from "ChatArrowRightIcon" /* 11170 */;
import conjureStoredAttachments2 from "conjureStoredAttachments" /* 12486 */;
import ConjureModelSettingsSheet from "ConjureModelSettingsSheet" /* 12505 */;
import FileUpIcon from "FileUpIcon" /* 12559 */;
import ConjureChatActionCreators from "ConjureChatActionCreators" /* 12582 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12583 */;
import conjureMentions from "conjureMentions" /* 12634 */;
import StopIcon from "StopIcon" /* 12663 */;
import conjurePickedFiles from "conjurePickedFiles" /* 12761 */;
import conjureComposerPills from "conjureComposerPills" /* 12793 */;
import ChatInputParser from "ChatInputParser" /* 12794 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12795 */;
import ImagesIcon from "ImagesIcon" /* 12800 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12802 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 12803 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 12805 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10865 */;
import ConjureComposerDraftStore from "ConjureComposerDraftStore" /* 12581 */;

const require = globalThis.__r;
const ConjureModelSettingsSheetDefault = ConjureModelSettingsSheet;

require = fn;
function trailingItemKey(key) {
  return key.key;
}
function ConjureNativeDraftTile(draft) {
  draft = draft.draft;
  const onRemove = draft.onRemove;
  const tmp = closure_16();
  const items = [onRemove, draft.localId];
  const token = useToken.useToken(nativeDefault.colors.TEXT_OVERLAY_LIGHT);
  const callback = noop.useCallback(() => onRemove(draft.localId), items);
  const obj3 = { itemKey: String(draft.localId), uri: null, fileName: null, isImage: null, isVideo: null, accessibilityLabel: null, removeAccessibilityLabel: null, onRemove: null, children: null };
  let str = draft.previewUrl;
  if (str == null) {
    str = "";
  }
  obj3.uri = str;
  ({ name: obj2.fileName, contentType } = draft);
  obj3.isImage = contentType.startsWith("image/");
  const contentType2 = draft.contentType;
  obj3.isVideo = contentType2.startsWith("video/");
  if ("uploading" === draft.status) {
    const intl3 = util.intl;
    const obj5 = { name: draft.name };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3868.MWTYwv, obj5);
  } else if (null != draft.errorText) {
    const intl2 = util.intl;
    ({ name: obj4.name, errorText: obj4.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3868.U2WbGx, { name: null, error: null });
    const obj6 = { name: null, error: null };
  } else {
    const intl = util.intl;
    const obj7 = { name: draft.name };
    formatToPlainStringResult = intl.formatToPlainString(util.t.MJHFt9, obj7);
  }
  obj3.accessibilityLabel = formatToPlainStringResult;
  const intl4 = util.intl;
  obj3.removeAccessibilityLabel = intl4.formatToPlainString(util.t.FxKgb3, { name: draft.name });
  obj3.onRemove = callback;
  if ("uploading" === draft.status) {
    const obj9 = { style: tmp.draftOverlay, children: null };
    const obj10 = { size: "small", color: token };
    obj9.children = closure_1_12(timestampProducer, obj10);
    let tmp7Result = closure_1_12(React6, obj9);
  } else {
    tmp7Result = null;
    if ("error" === draft.status) {
      const obj19 = { style: tmp.draftOverlay, children: null };
      const obj20 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      obj19.children = closure_1_12(WarningIcon.WarningIcon, obj20);
      tmp7Result = closure_1_12(React6, obj19);
    }
  }
  obj3.children = tmp7Result;
  return closure_1_12(ImageCarousel.ImageCarouselTile, obj3);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, Pressable: closure_7, View: closure_8, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = fn(5014);
let obj2 = { pill: { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs } };
let closure_15 = createStyles.createStyles(obj2);
createStyles = fn(5014);
let obj5 = { container: null, containerFlushTop: null, box: null, boxFocused: null, boxContentsStacked: null, actionsRow: null, actionsAccessory: null, boxContents: null, input: null, inputStacked: null, draftCarousel: null, draftOverlay: null, trailingButton: null, trailingSlot: null, sendButtonActive: null, sendIconActive: null, sendingButton: null };
let obj3 = { backgroundColor: nativeDefault.colors.MENTION_BACKGROUND, color: nativeDefault.colors.MENTION_FOREGROUND, borderRadius: nativeDefault.radii.xs };
obj5.container = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj5.containerFlushTop = { paddingTop: 0 };
let obj6 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingTop: nativeDefault.space.PX_4, paddingBottom: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj5.box = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
let obj7 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj5.boxFocused = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
let obj8 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj5.boxContentsStacked = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.space.PX_4 };
let obj9 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.space.PX_4 };
obj5.actionsRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj5.actionsAccessory = { flex: 1, flexDirection: "row" };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj5.boxContents = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
let obj11 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj5.input = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
let obj12 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj5.inputStacked = { paddingHorizontal: nativeDefault.space.PX_4 };
obj5.draftCarousel = { marginTop: -fn(10527).IMAGE_CAROUSEL_TILE_CLOSE_BUTTON_PADDING, marginBottom: 0 };
let obj14 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj14.alignItems = "center";
obj14.justifyContent = "center";
obj14.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX;
obj5.draftOverlay = obj14;
let size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj5.trailingButton = size;
obj5.trailingSlot = { alignItems: "center", justifyContent: "center" };
let obj13 = { paddingHorizontal: nativeDefault.space.PX_4 };
obj5.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let obj15 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj5.sendIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let obj16 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
obj5.sendingButton = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let closure_16 = createStyles.createStyles(obj5);
let c19 = 1;
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default function ConjureNativeComposer(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  ({ canSend, inputLocked } = projectId);
  if (inputLocked === undefined) {
    inputLocked = false;
  }
  let flag = projectId.aiPaused;
  if (flag === undefined) {
    flag = false;
  }
  let running = projectId.running;
  let onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  let flag2 = projectId.hidden;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onSendToOtherProjects = projectId.onSendToOtherProjects;
  const onSendFiles = projectId.onSendFiles;
  ({ stackedAccessory, placeholder, sending } = projectId);
  if (sending === undefined) {
    sending = false;
  }
  const focusRequest = projectId.focusRequest;
  const blurRequest = projectId.blurRequest;
  canSend = undefined;
  closure_12 = undefined;
  let str;
  closure_14 = undefined;
  closure_15 = undefined;
  let getItemKey;
  let pill;
  let callback1;
  closure_20 = undefined;
  c21 = undefined;
  let ref;
  let conjureAttachmentDraftList;
  let first1;
  closure_25 = undefined;
  c26 = undefined;
  c27 = undefined;
  let callback2;
  let first2;
  closure_30 = undefined;
  closure_31 = undefined;
  let conjureStoredAttachments;
  let memo1;
  let start;
  closure_35 = undefined;
  let callback6;
  let onRemove;
  let callback7;
  let callback9;
  let callback10;
  closure_41 = undefined;
  c42 = undefined;
  let callback11;
  let callback12;
  let stateFromStores1;
  let callback13;
  let token4;
  let callback14;
  if (canSend) {
    canSend = !inputLocked;
  }
  if (canSend) {
    canSend = !flag;
  }
  if (canSend) {
    canSend = !sending;
  }
  closure_12 = tmp;
  let num = 1;
  const first = onDraftHasTextChange(flag2.useState(() => conjureComposerPills.decodeConjurePills(ConjureComposerDraftStore.getDraft(closure_0))), 1)[0];
  let tmp4 = onDraftHasTextChange(flag2.useState(first.text), 2);
  str = tmp4[0];
  closure_14 = tmp4[1];
  const conjureLinkPrefetch = require("conjureLinkEmbeds").useConjureLinkPrefetch(str);
  closure_15 = flag2.useRef(first.pills);
  flag2.useRef(str);
  let items = [str];
  const effect = flag2.useEffect(() => {
    closure_16.current = str;
  }, items);
  let items1 = [projectId];
  getItemKey = flag2.useCallback((current) => {
    const obj = ConjureChatActionCreators;
    obj.setComposerDraft(closure_0, conjureComposerPills.encodeConjurePills(current, closure_15.current));
    closure_14(current);
  }, items1);
  const tmp10 = closure_15();
  pill = tmp10;
  let items2 = [tmp10];
  callback1 = flag2.useCallback((arr, arg1) => {
    let isIOSResult = null == arg1;
    if (isIOSResult) {
      isIOSResult = PlatformUtils.isIOS();
    }
    if (!isIOSResult) {
      const obj2 = ChatInputNativeCommandsDefault;
      const obj3 = conjureComposerPills;
      obj2.updateTextBlocks(ref.current, obj3.conjurePillNodes(arr, closure_15.current, ChatInputParser.convertToNativeStyle(pill.pill)), arg1);
    }
  }, items2);
  const tmp12 = "" !== str.trim();
  closure_20 = tmp12;
  const items3 = [tmp12, onDraftHasTextChange];
  const effect1 = flag2.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_20);
    }
    return tmpResult;
  }, items3);
  let obj2 = require("conjureLinkEmbeds");
  [num2, tmp15] = onDraftHasTextChange(flag2.useState(null), 2);
  c21 = tmp15;
  ref = flag2.useRef(null);
  const tmp17 = onDraftHasTextChange(flag2.useState(projectId), 2);
  if (tmp17[0] !== projectId) {
    tmp17[1](projectId);
    tmp15(null);
  }
  const items4 = [projectId];
  const effect2 = obj.useEffect(() => {
    const decodeConjurePillsResult = conjureComposerPills.decodeConjurePills(ConjureComposerDraftStore.getDraft(closure_0));
    closure_15.current = decodeConjurePillsResult.pills;
    closure_14(decodeConjurePillsResult.text);
    ChatInputNativeCommandsDefault.setText(ref.current, decodeConjurePillsResult.text);
    callback1(decodeConjurePillsResult.text);
  }, items4);
  const items5 = [flag2];
  const effect3 = obj.useEffect(() => {
    if (flag2) {
      ChatInputNativeCommandsDefault.blur(ref.current);
    }
  }, items5);
  let tmp14 = onDraftHasTextChange(flag2.useState(null), 2);
  conjureAttachmentDraftList = require("conjureAttachmentDrafts").useConjureAttachmentDraftList(projectId, "chat");
  const tmp2Result = onDraftHasTextChange(flag2.useState([]), 2);
  first1 = tmp2Result[0];
  closure_25 = tmp2Result[1];
  const items6 = [null != onSendFiles, first1, conjureAttachmentDraftList];
  const memo = obj.useMemo(() => {
    if (closure_12) {
      let mapped = first1.map((localId) => {
        ({ file, errorText } = localId);
        const obj = { localId: localId.localId, name: file.name, contentType: file.contentType, status: null, errorText: null, previewUrl: null };
        str = "ready";
        if (null != errorText) {
          str = "error";
        }
        obj.status = str;
        obj.errorText = errorText;
        obj.previewUrl = file.uri;
        return obj;
      });
    } else {
      mapped = conjureAttachmentDraftList;
    }
    return mapped;
  }, items6);
  const tmp5Result = require("conjureAttachmentDrafts");
  [boxFocused, c26] = onDraftHasTextChange(flag2.useState(false), 2);
  const tmp2Result4 = onDraftHasTextChange(flag2.useState(false), 2);
  [tmp26, c27] = onDraftHasTextChange(flag2.useState(null), 2);
  callback2 = obj.useCallback(() => {
    ChatInputNativeCommandsDefault.focus(ref.current);
    ChatInputNativeCommandsDefault.openSystemKeyboard(ref.current);
  }, []);
  const items7 = [focusRequest, callback2];
  const effect4 = obj.useEffect(() => {
    if (null != focusRequest) {
      callback2();
    }
  }, items7);
  const items8 = [blurRequest];
  const effect5 = obj.useEffect(() => {
    if (null != blurRequest) {
      ChatInputNativeCommandsDefault.blur(ref.current);
    }
  }, items8);
  const callback3 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const tmp2Result6 = onDraftHasTextChange(flag2.useState(null), 2);
  first2 = tmp2Result6[0];
  closure_30 = tmp2Result6[1];
  const items9 = [getItemKey, str, callback1];
  const callback4 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
      callback1(nativeEvent.text, nativeEvent.editId);
    }
    let end = null;
    if (nativeEvent.start === nativeEvent.end) {
      end = nativeEvent.end;
    }
    closure_30(end);
  }, items9);
  const tmp35 = running(onSend[23])(projectId);
  closure_31 = tmp35;
  const tmp2Result5 = onDraftHasTextChange(flag2.useState(null), 2);
  conjureStoredAttachments = require("conjureStoredAttachments").useConjureStoredAttachments(projectId);
  const items10 = [str, first2, canSend, flag2, null != onSendFiles];
  memo1 = obj.useMemo(() => {
    let result = null;
    if (null != first2) {
      result = null;
      if (canSend) {
        result = null;
        if (!flag2) {
          result = null;
          if (!closure_12) {
            result = conjureMentions.findConjureMentionQuery(str, tmp);
          }
        }
      }
    }
    return result;
  }, items10);
  start = undefined;
  if (memo1 != null) {
    start = memo1.start;
  }
  if (start == null) {
    start = null;
  }
  const items11 = [start, projectId];
  const effect6 = obj.useEffect(() => {
    if (null != start) {
      conjureStoredAttachments = conjureStoredAttachments2.fetchConjureStoredAttachments(closure_0);
    }
  }, items11);
  const items12 = [memo1, tmp35, conjureStoredAttachments];
  const memo2 = obj.useMemo(() => {
    if (null == memo1) {
      let items = [];
    } else {
      items = conjureMentions.filterConjureMentionCandidates(closure_31, conjureStoredAttachments, tmp.text);
    }
    return items;
  }, items12);
  const items13 = [memo1, getItemKey, str, callback1, projectId];
  const callback5 = obj.useCallback((kind) => {
    if (null != memo1) {
      const current = closure_15.current;
      if ("user" === kind.kind) {
        const _HermesInternal2 = HermesInternal;
        let combined = "<@" + kind.user.id + ">";
      } else {
        const _HermesInternal = HermesInternal;
        combined = "<file:" + kind.file.id + ">";
      }
      if ("user" === kind.kind) {
        let name = projectId(onSend[16]).conjureUserPillLabel(kind.user.id);
        const obj = projectId(onSend[16]);
      } else {
        name = kind.file.name;
      }
      const conjurePillTextResult = projectId(onSend[16]).conjurePillText(current, name, combined);
      running = conjurePillTextResult;
      const obj3 = { raw: combined, icon: null };
      let conjureFilePillIconResult = null;
      if ("user" !== kind.kind) {
        conjureFilePillIconResult = projectId(onSend[16]).conjureFilePillIcon();
        const obj4 = projectId(onSend[16]);
      }
      obj3.icon = conjureFilePillIconResult;
      const result = current.set(conjurePillTextResult, obj3);
      const _HermesInternal3 = HermesInternal;
      const combined1 = "" + conjurePillTextResult + " ";
      const sum = str.slice(0, memo1.start) + combined1;
      const sum1 = sum + str.slice(memo1.end);
      const sum2 = memo1.start + combined1.length;
      callback(sum1);
      closure_30(sum2);
      const obj2 = projectId(onSend[16]);
      running(onSend[20]).setText(ref.current, sum1);
      const obj5 = running(onSend[20]);
      running(onSend[20]).setSelectedRange(ref.current, sum2, 0);
      callback1(sum1);
      let hasItem = "file" === kind.kind;
      if (hasItem) {
        const CONJURE_VIEWABLE_IMAGE_TYPES = projectId(onSend[26]).CONJURE_VIEWABLE_IMAGE_TYPES;
        hasItem = CONJURE_VIEWABLE_IMAGE_TYPES.has(kind.file.content_type);
      }
      if (hasItem) {
        const attachmentUrl = projectId(onSend[27]).getAttachmentUrl(current, kind.file.id);
        attachmentUrl.then((icon) => {
          value = current.get(conjurePillTextResult);
          if (null != value) {
            value.icon = icon;
            callback1(ref.current);
          }
        }, () => {

        });
        const obj7 = projectId(onSend[27]);
      }
      const obj6 = running(onSend[20]);
    }
  }, items13);
  const tmp5Result9 = require("conjureStoredAttachments");
  const token = require("useToken").useToken(tmp34(tmp6[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp5Result10 = require("useToken");
  const token1 = require("useToken").useToken(tmp34(tmp6[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmp5Result11 = require("useToken");
  const token2 = require("useToken").useToken(tmp34(tmp6[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmp5Result12 = require("useToken");
  const token3 = require("useToken").useToken(tmp34(tmp6[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const tmp5Result13 = require("useToken");
  const items14 = [focusRequest];
  const stateFromStores = require("initialize").useStateFromStores(items14, () => focusRequest.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(closure_14, Math.max(0, (token - 20) / 2));
  const bound2 = Math.min(120, Math.max(token, num2));
  if (undefined !== stackedAccessory) {
    num = 2;
  }
  const bound3 = Math.max(Math.min(120, 20 * num + 2 * bound1), bound2);
  const tmp51 = ref();
  closure_35 = tmp51;
  const items15 = [projectId, null != onSendFiles, first1.length];
  callback6 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      if (closure_12) {
        let length = first1.length;
      } else {
        length = projectId(onSend[22]).getConjureAttachmentDrafts(substr, "chat").length;
        let obj = projectId(onSend[22]);
      }
      const diff = projectId(onSend[26]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE - length;
      substr = arr;
      if (arr.length > diff) {
        const intl = projectId(onSend[11]).intl;
        let obj2 = { count: projectId(onSend[26]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
        _undefined3(intl.formatToPlainString(running(onSend[12]).Q0aCVZ, obj2));
        const _Math = Math;
        substr = arr.slice(0, Math.max(0, diff));
        arr = substr;
      } else {
        _undefined3(null);
      }
      if (closure_12) {
        closure_25((arg0) => {
          const items = [
            ...arg0,
            ...substr.map((file) => {
              const obj = { localId: null, file, errorText: null };
              closure_19 = tmp + 1;
              obj.localId = +closure_19;
              let result;
              if (null != file.size) {
                if (!obj2.isConjureAttachmentWithinLimit(file.size, file.contentType)) {
                  result = substr(dependencyMap[22]).conjureAttachmentTooLargeText(file.contentType);
                  const tmp3Result = substr(dependencyMap[22]);
                }
                obj2 = substr(dependencyMap[26]);
              }
              obj.errorText = result;
              return obj;
            })
          ];
          return items;
        });
      } else {
        const mapped = arr.map((name) => {
          const obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
          if (null != name.size) {
            if (!obj2.isConjureAttachmentWithinLimit(name.size, name.contentType)) {
              let obj3 = { draft: null };
              const obj4 = {};
              const merged = Object.assign(obj);
              obj4.status = "error";
              obj4.errorText = substr(onSend[22]).conjureAttachmentTooLargeText(name.contentType);
              obj3.draft = obj4;
              const tmpResult = substr(onSend[22]);
            }
            return obj3;
          }
          const obj5 = { draft: null, upload: null };
          const obj6 = {};
          const merged1 = Object.assign(obj);
          obj6.status = "uploading";
          obj5.draft = obj6;
          obj5.upload = function upload() {
            return name(onSend[29]).uploadConjurePickedFile(substr, name);
          };
          obj3 = obj5;
        });
        let result = projectId(onSend[22]).addConjureAttachmentDrafts(substr, "chat", mapped);
        let obj3 = projectId(onSend[22]);
      }
    }
  }, items15);
  const items16 = [projectId, null != onSendFiles];
  onRemove = obj.useCallback((id) => {
    closure_0 = id;
    if (closure_12) {
      closure_25((arr) => arr.filter((localId) => localId.localId !== id));
    } else {
      const result = conjureAttachmentDrafts.removeConjureAttachmentDraft(closure_0, "chat", id);
    }
  }, items16);
  const items17 = [callback6];
  callback7 = obj.useCallback(onInterrupt(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            projectId = callback6;
            c1 = 1;
            dependencyMap = 1;
            const obj5 = { value: projectId(12761).pickConjurePhotos("mixed", projectId(12459).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          projectId(value);
          dependencyMap = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp10) {
        dependencyMap = tmp;
        throw tmp10;
      }
    }
  }), items17);
  const items18 = [callback6, canSend];
  const callback8 = obj.useCallback((nativeEvent) => {
    ({ url, type } = nativeEvent.nativeEvent);
    if (canSend) {
      const obj = { uri: url, name: conjurePickedFiles.pickedName(url, null), contentType: null, size: null };
      if (type == null) {
        type = "application/octet-stream";
      }
      obj.contentType = type;
      const items = [obj];
      callback6(items);
    }
  }, items18);
  _require = onInterrupt((types) => {
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = undefined;
              const obj5 = { pickMultiple: true, types };
              c3 = 1;
              c4 = 1;
              const obj6 = { value: types(onSend[30]).handleDocumentSelection(obj5), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            closure_129_0 = value;
            if (null != closure_129_0) {
              callback6(closure_129_0.map((uri) => {
                const obj = { uri: uri.uri, name: types(closure_1_2[29]).pickedName(uri.uri, uri.name), contentType: null, size: null };
                str = uri.type;
                if (str == null) {
                  str = "application/octet-stream";
                }
                obj.contentType = str;
                let size = uri.size;
                if (size == null) {
                  size = null;
                }
                obj.size = size;
                return obj;
              }));
            }
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp17) {
          c4 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  const items19 = [callback6];
  callback9 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items19);
  const items20 = [onSendToOtherProjects, getItemKey];
  callback10 = obj.useCallback(() => {
    const current = ref.current;
    if (onSendToOtherProjects != null) {
      let obj = projectId(onSend[25]);
      tmp(obj.withConjureMentionNames(projectId(onSend[16]).encodeConjurePills(current, closure_15.current)), () => {
        if (ref.current === current) {
          const _Map = Map;
          const map = new Map();
          closure_15.current = map;
          callback("");
          ChatInputNativeCommandsDefault.setText(ref.current, "");
        }
      });
      const obj2 = projectId(onSend[16]);
    }
  }, items20);
  const items21 = [callback7, callback9, onSendToOtherProjects, callback10];
  const memo3 = obj.useMemo(() => {
    const obj = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3868["51+9lc"]);
    obj.IconComponent = ImagesIcon.ImagesIcon;
    obj.action = callback7;
    let items = [obj, , ];
    const obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3868["10ljr2"]);
    obj2.IconComponent = MusicIcon.MusicIcon;
    obj2.action = function action() {
      const items = [closure_0(onSend[33]).types.audio];
      return callback9(items);
    };
    items[1] = obj2;
    const obj3 = { label: null, IconComponent: null, action: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(_modDef3868.aotDee);
    obj3.IconComponent = FileUpIcon.FileUpIcon;
    obj3.action = function action() {
      return callback9();
    };
    items[2] = obj3;
    if (null != onSendToOtherProjects) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(_modDef3868["5HmLrK"]);
      obj4.IconComponent = ChatArrowRightIcon.ChatArrowRightIcon;
      obj4.action = callback10;
      const items1 = [obj4];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, 3);
    return items;
  }, items21);
  const tmp53 = onInterrupt;
  const tmp5Result14 = require("initialize");
  let tmp60 = "" !== str.trim();
  if (!tmp60) {
    let tmp61 = !tmp;
    if (!tmp) {
      tmp61 = memo.length > 0;
    }
    tmp60 = tmp61;
  }
  closure_41 = tmp60;
  let tmp62 = canSend;
  if (canSend) {
    tmp62 = tmp60;
  }
  if (tmp62) {
    tmp62 = everyResult;
  }
  c42 = tmp62;
  const items22 = [getItemKey];
  callback11 = obj.useCallback(() => {
    closure_15.current = new Map();
    callback("");
    const map = new Map();
    ChatInputNativeCommandsDefault.setText(ref.current, "");
    _undefined3(null);
    _undefined(null);
  }, items22);
  const items23 = [onSend, onSendFiles, first1, projectId, tmp62, str, callback11];
  callback12 = obj.useCallback(tmp53(function*() {
    if (onSend === 2) {
      onSend = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        onSend = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            onSend = 3;
            throw value;
          } else if (arg0 === 2) {
            onSend = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            if (c42) {
              const encodeConjurePillsResult = tmp4(onSend[16]).encodeConjurePills(str, ref.current);
              if (null == onSendFiles) {
                const result = tmp4(tmp11[22]).takeConjureAttachmentRefs(tmp4, "chat");
                if (onSend != null) {
                  let tmp20;
                  if (result.length > 0) {
                    tmp20 = result;
                  }
                  tmp19(encodeConjurePillsResult, tmp20);
                }
                callback11();
                const tmp10Result = tmp4(tmp11[22]);
              } else {
                c1 = 1;
                onSend = 1;
                const obj5 = { value: tmp15(encodeConjurePillsResult, first1.map((file) => file.file)), done: false };
                return obj5;
              }
              const obj2 = tmp4(onSend[16]);
              tmp11 = onSend;
            }
            onSend = 3;
          }
        } else if (arg0 === 1) {
          onSend = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            closure_128_25([]);
            closure_128_43();
          }
        }
        onSend = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp24) {
        onSend = tmp;
        throw tmp24;
      }
    }
  }), items23);
  everyResult = memo.every((status) => "ready" === status.status);
  const items24 = [blurRequest];
  const items25 = [projectId];
  stateFromStores1 = require("initialize").useStateFromStores(items24, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(closure_0);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items25);
  const items26 = [projectId];
  callback13 = obj.useCallback(() => {
    const obj2 = { content: closure_2_12(ConjureModelSettingsSheetDefault, { projectId }), key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items26);
  const tmp5Result15 = require("initialize");
  token4 = require("useToken").useToken(tmp34(tmp6[9]).colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT);
  const items27 = [sending, tmp60, running, stateFromStores1, tmp62];
  const memo4 = obj.useMemo(() => {
    str = "sending";
    if (!sending) {
      let str2 = "send";
      let str3 = "send";
      if (!closure_41) {
        let str4 = "stop";
        if (!running) {
          if (stateFromStores1) {
            str2 = "models";
          }
          str4 = str2;
        }
        str3 = str4;
      }
      str = str3;
    }
    const items = [{ key: str, sendable }];
    return items;
  }, items27);
  const items28 = [tmp51, token4, canSend, onInterrupt, callback13, callback12];
  callback14 = obj.useCallback((key) => {
    if ("sending" === key.key) {
      const obj2 = { style: null, accessibilityState: null, children: null };
      const items = [, ];
      ({ trailingButton: arr[0], sendingButton: arr[1] } = closure_35);
      obj2.style = items;
      obj2.accessibilityState = { busy: true };
      const obj3 = { size: "small", color: token4 };
      obj2.children = closure_2_12(timestampProducer, obj3);
      let tmp14 = closure_2_12(React6, obj2);
    } else if ("stop" === key.key) {
      const obj4 = { style: closure_35.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: null };
      const intl2 = util.intl;
      obj4.accessibilityLabel = intl2.string(_modDef3868.wiguT0);
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj4);
    } else if ("models" === key.key) {
      const obj = { style: closure_35.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback13, disabled: !canSend, accessibilityLabel: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3868["3E7Yc0"]);
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj);
    } else {
      const obj9 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ trailingButton: obj5.style, sendButtonActive: obj5.activeStyle, sendIconActive: obj5.activeIconStyle } = closure_35);
      obj9.IconComponent = SendMessageIcon.SendMessageIcon;
      const intl3 = util.intl;
      obj9.accessibilityLabel = intl3.string(util.t.TXNS7S);
      obj9.onPress = callback12;
      obj9.disabled = !key.sendable;
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj9);
    }
    return tmp14;
  }, items28);
  const items29 = [callback14];
  const callback15 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback14(arg1) };
    return closure_2_12(ChatInputActionButtonTransitionItemDefault, obj, arg0);
  }, items29);
  const callback16 = obj.useCallback(() => _undefined2(true), []);
  let tmp73 = null != tmp26;
  const callback17 = obj.useCallback(() => _undefined2(false), []);
  if (!tmp73) {
    tmp73 = memo.length > 0;
  }
  if (!tmp73) {
    tmp73 = memo2.length > 0;
  }
  let num3 = 0;
  if (undefined === stackedAccessory) {
    num3 = bound;
  }
  let obj3 = {
    style: { paddingBottom: num3 },
    children: closure_12(require("ContextMenu").ContextMenu, {
      items: memo3,
      align: "above",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(_modDef3868.hFS71Z);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return closure_2_12(ChatInputActionButtonDefault, obj);
      }
    })
  };
  const tmp74Result = closure_12(sending, obj3);
  const items30 = [undefined !== stackedAccessory ? tmp51.inputStacked : tmp51.input, ];
  let num4 = 0;
  if (undefined === stackedAccessory) {
    num4 = bound;
  }
  let obj5 = { style: items30, onPress: callback2, disabled: bound2 >= bound3, accessible: false, children: null };
  items30[1] = { marginBottom: num4, height: bound3 };
  let obj6 = { style: { height: bound2 }, children: null };
  let obj7 = { ref, editable: canSend, shouldShowCursor: true, maxHeight: 120, verticalInset: bound1, placeholder: null, accessibilityLabel: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onSelectionOrTextChange: null, onPasteImage: null };
  if (placeholder != null) {
    obj7.placeholder = placeholder;
    let intl2 = tmp5(tmp6[11]).intl;
    obj7.accessibilityLabel = intl2.string(tmp34(tmp6[12]).ldNl9x);
    obj7.onBeginFocus = callback16;
    obj7.onEndBlur = callback17;
    obj7.onChangeContentSize = callback3;
    obj7.onSelectionOrTextChange = callback4;
    obj7.onPasteImage = callback8;
    obj6.children = tmp74(tmp78, obj7);
    obj5.children = tmp74(tmp75, obj6);
    const tmp74Result5 = tmp74(onSendFiles, obj5);
    const obj8 = { style: null, children: null };
    const items31 = [tmp51.trailingSlot, ];
    let size = { width: token2 + 2 * token3, height: token1 };
    items31[1] = size;
    obj8.style = items31;
    if (stateFromStores) {
      let callback14Result = callback14(memo4[0]);
    } else {
      let obj9 = { items: memo4, renderItem: callback15, getItemKey };
      callback14Result = tmp74(tmp5(tmp6[46]).TransitionGroup, obj9);
    }
    obj8.children = callback14Result;
    const tmp74Result6 = tmp74(tmp75, obj8);
    const items32 = [tmp51.container, ];
    let containerFlushTop = tmp48;
    if (tmp48) {
      containerFlushTop = !tmp73;
    }
    if (containerFlushTop) {
      containerFlushTop = tmp51.containerFlushTop;
    }
    const obj10 = { style: null, children: null };
    items32[1] = containerFlushTop;
    obj10.style = items32;
    const obj11 = { projectId, suggestions: memo2, onSelect: callback5 };
    const items33 = [tmp74(tmp34(tmp6[47]), obj11), , , , ];
    let tmp74Result7 = null;
    if (null != tmp26) {
      const obj12 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp26 };
      tmp74Result7 = tmp74(tmp5(tmp6[48]).Text, obj12);
    }
    items33[1] = tmp74Result7;
    items33[2] = memo.map((errorText) => {
      let tmp = null;
      if (null != errorText.errorText) {
        const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: null };
        const intl = projectId(onSend[11]).intl;
        ({ name: obj2.name, errorText: obj2.error } = errorText);
        obj.children = intl.formatToPlainString(running(onSend[12]).U2WbGx, { name: null, error: null });
        tmp = closure_12(projectId(onSend[48]).Text, obj, errorText.localId);
        const obj3 = { name: null, error: null };
      }
      return tmp;
    });
    let tmp74Result8 = null;
    if (memo.length > 0) {
      const obj13 = { visible: true, style: tmp51.draftCarousel, children: memo.map((draft) => closure_2_12(ConjureNativeDraftTile, { draft, onRemove }, draft.localId)) };
      tmp74Result8 = tmp74(tmp5(tmp6[14]).ImageCarouselRow, obj13);
    }
    items33[3] = tmp74Result8;
    const items34 = [tmp51.box, ];
    if (boxFocused) {
      boxFocused = tmp51.boxFocused;
    }
    const obj14 = { style: null, children: null };
    items34[1] = boxFocused;
    obj14.style = items34;
    const obj15 = { style: null, children: null };
    if (tmp48) {
      obj15.style = tmp51.boxContentsStacked;
      const items35 = [tmp74Result5, ];
      const obj16 = { style: tmp51.actionsRow, children: null };
      const items36 = [tmp74Result, , ];
      const obj17 = { style: tmp51.actionsAccessory, children: stackedAccessory };
      items36[1] = tmp74(tmp75, obj17);
      items36[2] = tmp74Result6;
      obj16.children = items36;
      items35[1] = tmp86(tmp75, obj16);
      obj15.children = items35;
      let tmp89 = obj15;
    } else {
      obj15.style = tmp51.boxContents;
      const items37 = [tmp74Result, tmp74Result5, tmp74Result6];
      obj15.children = items37;
      tmp89 = obj15;
    }
    obj14.children = str(tmp75, tmp89);
    items33[4] = tmp74(tmp75, obj14);
    obj10.children = items33;
    return str(tmp75, obj10);
  } else {
    let intl = tmp5(tmp6[11]).intl;
    const tmp34Result = tmp34(tmp6[12]);
    if (flag) {
      let zZ9NgM = tmp34Result.Z0hyNL;
    } else if (inputLocked) {
      zZ9NgM = tmp34Result.GcFRaY;
    } else if (!canSend) {
      zZ9NgM = tmp34Result.zZ9NgM;
    }
    intl.string(zZ9NgM);
  }
};