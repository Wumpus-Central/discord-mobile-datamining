// discord_app/modules/conjure/chat/native/ConjureNativeComposer.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3830 from "../../intl/ConjureUntranslated.messages.js";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import SendMessageIcon from "../../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import ImageCarousel from "../../../../components_native/chat/ImageCarousel.tsx";
import MusicIcon from "../../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import PlusLargeIcon from "../../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
import ConjureAttachmentTypes from "../ConjureAttachmentTypes.tsx";
import conjureStoredAttachments2 from "../conjureStoredAttachments.tsx";
import ConjureModelSettingsSheet from "../../model_settings/native/ConjureModelSettingsSheet.tsx";
import FileUpIcon from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import ConjureChatActionCreators from "../ConjureChatActionCreators.tsx";
import conjureAttachmentDrafts from "../conjureAttachmentDrafts.tsx";
import conjureMentions from "../conjureMentions.tsx";
import StopIcon from "../../../../design/components/Icon/native/redesign/generated/StopIcon.tsx";
import conjurePickedFiles from "conjurePickedFiles.tsx";
import conjureComposerPills from "conjureComposerPills.tsx";
import ChatInputParser from "../../../chat_input/native/ChatInputParser.tsx";
import ChatInputNativeCommandsDefault from "../../../chat_input/native/ChatInputNativeCommands.tsx";
import ImagesIcon from "../../../../design/components/Icon/native/redesign/generated/ImagesIcon.tsx";
import ChatArrowRightIcon from "../../../../design/components/Icon/native/redesign/generated/ChatArrowRightIcon.tsx";
import ChatInputActionButtonDefault from "../../../chat_input/native/action_buttons/ChatInputActionButton.tsx";
import FiltersHorizontalIcon from "../../../../design/components/Icon/native/redesign/generated/FiltersHorizontalIcon.tsx";
import ChatInputActionButtonTransitionItemDefault from "../../../chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import ConjureModelSettingsStore from "../../model_settings/ConjureModelSettingsStore.tsx";
import ConjureComposerDraftStore from "../ConjureComposerDraftStore.tsx";

const require = globalThis.__r;
const ConjureModelSettingsSheetDefault = ConjureModelSettingsSheet;

require = fn;
function trailingItemKey(key) {
  return key.key;
}
function draftAccessibilityLabel(draft) {
  if ("uploading" === draft.status) {
    const intl3 = util.intl;
    const obj3 = { name: draft.name };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3830.MWTYwv, obj3);
  } else if (null != draft.errorText) {
    const intl2 = util.intl;
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3830.U2WbGx, { name: null, error: null });
    const obj5 = { name: null, error: null };
  } else {
    const intl = util.intl;
    const obj = { name: draft.name };
    formatToPlainStringResult = intl.formatToPlainString(util.t.MJHFt9, obj);
  }
  return formatToPlainStringResult;
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = fn(4971);
let obj2 = {
  pill: {
    backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
    color: nativeDefault.colors.MENTION_FOREGROUND,
    borderRadius: nativeDefault.radii.xs,
  },
};
let closure_14 = createStyles.createStyles(obj2);
createStyles = fn(4971);
let obj5 = {
  container: null,
  box: null,
  boxFocused: null,
  boxContents: null,
  input: null,
  draftCarousel: null,
  draftOverlay: null,
  trailingButton: null,
  trailingSlot: null,
  sendButtonActive: null,
  sendIconActive: null,
};
let obj3 = {
  backgroundColor: nativeDefault.colors.MENTION_BACKGROUND,
  color: nativeDefault.colors.MENTION_FOREGROUND,
  borderRadius: nativeDefault.radii.xs,
};
obj5.container = {
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_4,
  paddingBottom: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
let obj6 = {
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
  paddingTop: nativeDefault.space.PX_4,
  paddingBottom: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
obj5.box = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
  overflow: "hidden",
};
let obj7 = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
  overflow: "hidden",
};
obj5.boxFocused = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
};
let obj8 = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
};
obj5.boxContents = {
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
  paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
  gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
};
let obj9 = {
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
  paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
  gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
};
obj5.input = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj5.draftCarousel = { marginBottom: 0 };
let obj11 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj11.alignItems = "center";
obj11.justifyContent = "center";
obj11.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX;
obj5.draftOverlay = obj11;
let size = {
  width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH,
  height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
};
obj5.trailingButton = size;
obj5.trailingSlot = { alignItems: "center", justifyContent: "center" };
let obj10 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj5.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let obj12 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj5.sendIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_15 = createStyles.createStyles(obj5);
const ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeDraftTile(draft) {
      const cResult = c.c(25);
      draft = draft.draft;
      const onRemove = draft.onRemove;
      const tmp4 = closure_15();
      const token = useToken.useToken(nativeDefault.colors.TEXT_OVERLAY_LIGHT);
      if (cResult[0] === draft.localId) {
        if (cResult[1] === onRemove) {
          let tmp7 = cResult[2];
        }
        const _String = String;
        const StringResult = String(draft.localId);
        let str = draft.previewUrl;
        if (str == null) {
          str = "";
        }
        if (cResult[3] !== draft.contentType) {
          const contentType = draft.contentType;
          const startsWithResult = contentType.startsWith("image/");
          cResult[3] = draft.contentType;
          cResult[4] = startsWithResult;
          let tmp11 = startsWithResult;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== draft.contentType) {
          const contentType2 = draft.contentType;
          const startsWithResult1 = contentType2.startsWith("video/");
          cResult[5] = draft.contentType;
          cResult[6] = startsWithResult1;
          let tmp13 = startsWithResult1;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== draft) {
          const tmp17 = draftAccessibilityLabel(draft);
          cResult[7] = draft;
          cResult[8] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[8];
        }
        if (cResult[9] !== draft.name) {
          const intl = util.intl;
          const obj3 = { name: draft.name };
          const formatToPlainStringResult = intl.formatToPlainString(util.t.FxKgb3, obj3);
          cResult[9] = draft.name;
          cResult[10] = formatToPlainStringResult;
          let tmp18 = formatToPlainStringResult;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] === draft.status) {
          if (cResult[12] === token) {
            if (cResult[13] === tmp4) {
              if (cResult[15] === draft.name) {
                if (cResult[16] === tmp7) {
                  if (cResult[17] === StringResult) {
                    if (cResult[18] === str) {
                      if (cResult[19] === tmp11) {
                        if (cResult[20] === tmp13) {
                          if (cResult[21] === tmp15) {
                            if (cResult[22] === tmp18) {
                              if (cResult[23] === tmp20) {
                                let tmp28 = cResult[24];
                              }
                              return tmp28;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              const obj4 = {
                itemKey: StringResult,
                uri: str,
                fileName: draft.name,
                isImage: tmp11,
                isVideo: tmp13,
                accessibilityLabel: tmp15,
                removeAccessibilityLabel: tmp18,
                onRemove: tmp7,
                children: cResult[14],
              };
              const tmp30 = closure_1_11(ImageCarousel.ImageCarouselTile, obj4);
              cResult[15] = draft.name;
              cResult[16] = tmp7;
              cResult[17] = StringResult;
              cResult[18] = str;
              cResult[19] = tmp11;
              cResult[20] = tmp13;
              cResult[21] = tmp15;
              cResult[22] = tmp18;
              cResult[23] = cResult[14];
              cResult[24] = tmp30;
              tmp28 = tmp30;
            }
          }
        }
        if ("uploading" === draft.status) {
          const obj5 = { style: tmp4.draftOverlay, children: null };
          const obj6 = { size: "small", color: token };
          obj5.children = closure_1_11(timestampProducer, obj6);
          let tmp21 = closure_1_11(React5, obj5);
        } else {
          tmp21 = null;
          if ("error" === draft.status) {
            const obj7 = { style: tmp4.draftOverlay, children: null };
            const obj8 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
            obj7.children = closure_1_11(WarningIcon.WarningIcon, obj8);
            tmp21 = closure_1_11(React5, obj7);
          }
        }
        cResult[11] = draft.status;
        cResult[12] = token;
        cResult[13] = tmp4;
        cResult[14] = tmp21;
      }
      const fn = function n() {
        return onRemove(draft.localId);
      };
      cResult[0] = draft.localId;
      cResult[1] = onRemove;
      cResult[2] = fn;
      tmp7 = fn;
    }
  : function ConjureNativeDraftTile(draft) {
      draft = draft.draft;
      const onRemove = draft.onRemove;
      const tmp = closure_15();
      const items = [onRemove, draft.localId];
      const token = useToken.useToken(nativeDefault.colors.TEXT_OVERLAY_LIGHT);
      const callback = noop.useCallback(() => onRemove(draft.localId), items);
      const obj3 = {
        itemKey: String(draft.localId),
        uri: null,
        fileName: null,
        isImage: null,
        isVideo: null,
        accessibilityLabel: null,
        removeAccessibilityLabel: null,
        onRemove: null,
        children: null,
      };
      let str = draft.previewUrl;
      if (str == null) {
        str = "";
      }
      obj3.uri = str;
      ({ name: obj2.fileName, contentType } = draft);
      obj3.isImage = contentType.startsWith("image/");
      const contentType2 = draft.contentType;
      obj3.isVideo = contentType2.startsWith("video/");
      obj3.accessibilityLabel = draftAccessibilityLabel(draft);
      const intl = util.intl;
      obj3.removeAccessibilityLabel = intl.formatToPlainString(util.t.FxKgb3, { name: draft.name });
      obj3.onRemove = callback;
      if ("uploading" === draft.status) {
        const obj5 = { style: tmp.draftOverlay, children: null };
        const obj6 = { size: "small", color: token };
        obj5.children = closure_1_11(timestampProducer, obj6);
        let tmp7Result = closure_1_11(React5, obj5);
      } else {
        tmp7Result = null;
        if ("error" === draft.status) {
          const obj7 = { style: tmp.draftOverlay, children: null };
          const obj13 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
          obj7.children = closure_1_11(WarningIcon.WarningIcon, obj13);
          tmp7Result = closure_1_11(React5, obj7);
        }
      }
      obj3.children = tmp7Result;
      return closure_1_11(ImageCarousel.ImageCarouselTile, obj3);
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default function ConjureNativeComposer(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  ({ canSend, inputLocked } = projectId);
  if (inputLocked === undefined) {
    inputLocked = false;
  }
  let running = projectId.running;
  const onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  let flag = projectId.hidden;
  if (flag === undefined) {
    flag = false;
  }
  const onSendToOtherProjects = projectId.onSendToOtherProjects;
  canSend = undefined;
  let str;
  closure_9 = undefined;
  closure_10 = undefined;
  let callback;
  let pill;
  let callback1;
  closure_15 = undefined;
  getItemKey = undefined;
  let ref;
  c18 = undefined;
  c19 = undefined;
  let first1;
  closure_21 = undefined;
  closure_22 = undefined;
  let conjureStoredAttachments;
  let memo;
  let start;
  closure_26 = undefined;
  let callback5;
  let onRemove;
  let callback6;
  let callback8;
  let callback9;
  closure_32 = undefined;
  c33 = undefined;
  let callback10;
  let stateFromStores1;
  let callback11;
  let callback12;
  if (canSend) {
    canSend = !inputLocked;
  }
  const first = onDraftHasTextChange(
    flag.useState(() => conjureComposerPills.decodeConjurePills(ConjureComposerDraftStore.getDraft(closure_0))),
    1,
  )[0];
  const tmp3 = onDraftHasTextChange(flag.useState(first.text), 2);
  str = tmp3[0];
  closure_9 = tmp3[1];
  const conjureLinkPrefetch = require("conjureLinkEmbeds").useConjureLinkPrefetch(str);
  closure_10 = flag.useRef(first.pills);
  flag.useRef(str);
  let items = [str];
  const effect = flag.useEffect(() => {
    closure_11.current = str;
  }, items);
  let items1 = [projectId];
  callback = flag.useCallback((chat) => {
    const obj = ConjureChatActionCreators;
    obj.setComposerDraft(closure_0, conjureComposerPills.encodeConjurePills(chat, closure_10.current));
    closure_9(chat);
  }, items1);
  const tmp9 = callback1();
  pill = tmp9;
  let items2 = [tmp9];
  callback1 = flag.useCallback((arr, arg1) => {
    const obj = ChatInputNativeCommandsDefault;
    const obj2 = conjureComposerPills;
    obj.updateTextBlocks(
      ref.current,
      obj2.conjurePillNodes(arr, closure_10.current, ChatInputParser.convertToNativeStyle(pill.pill)),
      arg1,
    );
  }, items2);
  const tmp11 = "" !== str.trim();
  closure_15 = tmp11;
  const items3 = [tmp11, onDraftHasTextChange];
  const effect1 = flag.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_15);
    }
    return tmpResult;
  }, items3);
  let obj2 = require("conjureLinkEmbeds");
  [num, tmp14] = onDraftHasTextChange(flag.useState(null), 2);
  getItemKey = tmp14;
  ref = flag.useRef(null);
  const tmp16 = onDraftHasTextChange(flag.useState(projectId), 2);
  if (tmp16[0] !== projectId) {
    tmp16[1](projectId);
    tmp14(null);
  }
  const items4 = [projectId];
  const effect2 = obj.useEffect(() => {
    const decodeConjurePillsResult = conjureComposerPills.decodeConjurePills(
      ConjureComposerDraftStore.getDraft(closure_0),
    );
    closure_10.current = decodeConjurePillsResult.pills;
    closure_9(decodeConjurePillsResult.text);
    ChatInputNativeCommandsDefault.setText(ref.current, decodeConjurePillsResult.text);
    callback1(decodeConjurePillsResult.text);
  }, items4);
  const items5 = [flag];
  const effect3 = obj.useEffect(() => {
    if (flag) {
      ChatInputNativeCommandsDefault.blur(ref.current);
    }
  }, items5);
  const tmp13 = onDraftHasTextChange(flag.useState(null), 2);
  const conjureAttachmentDraftList = require("conjureAttachmentDrafts").useConjureAttachmentDraftList(
    projectId,
    "chat",
  );
  const tmp4Result = require("conjureAttachmentDrafts");
  [boxFocused, c18] = onDraftHasTextChange(flag.useState(false), 2);
  let tmpResult = onDraftHasTextChange(flag.useState(false), 2);
  [tmp23, c19] = onDraftHasTextChange(flag.useState(null), 2);
  const callback2 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const tmpResult4 = onDraftHasTextChange(flag.useState(null), 2);
  first1 = tmpResult4[0];
  closure_21 = tmpResult4[1];
  const items6 = [callback, str, callback1];
  const callback3 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
      callback1(nativeEvent.text, nativeEvent.editId);
    }
    let end = null;
    if (nativeEvent.start === nativeEvent.end) {
      end = nativeEvent.end;
    }
    closure_21(end);
  }, items6);
  const tmp29 = running(onSend[23])(projectId);
  closure_22 = tmp29;
  const tmpResult3 = onDraftHasTextChange(flag.useState(null), 2);
  conjureStoredAttachments = require("conjureStoredAttachments").useConjureStoredAttachments(projectId);
  const items7 = [str, first1, canSend, flag];
  memo = obj.useMemo(() => {
    let result = null;
    if (null != first1) {
      result = null;
      if (canSend) {
        result = null;
        if (!flag) {
          result = conjureMentions.findConjureMentionQuery(str, tmp);
        }
      }
    }
    return result;
  }, items7);
  start = undefined;
  if (memo != null) {
    start = memo.start;
  }
  if (start == null) {
    start = null;
  }
  const items8 = [start, projectId];
  const effect4 = obj.useEffect(() => {
    if (null != start) {
      conjureStoredAttachments = conjureStoredAttachments2.fetchConjureStoredAttachments(closure_0);
    }
  }, items8);
  const items9 = [memo, tmp29, conjureStoredAttachments];
  const items10 = [memo, callback, str, callback1, projectId];
  const memo1 = obj.useMemo(() => {
    if (null == memo) {
      let items = [];
    } else {
      items = conjureMentions.filterConjureMentionCandidates(closure_22, conjureStoredAttachments, tmp.text);
    }
    return items;
  }, items9);
  const callback4 = obj.useCallback((kind) => {
    if (null != memo) {
      const current = closure_10.current;
      if ("user" === kind.kind) {
        const _HermesInternal2 = HermesInternal;
        let combined = "<@" + kind.user.id + ">";
      } else {
        const _HermesInternal = HermesInternal;
        combined = "<file:" + kind.file.id + ">";
      }
      if ("user" === kind.kind) {
        let name = projectId(onSend[17]).conjureUserPillLabel(kind.user.id);
        const obj = projectId(onSend[17]);
      } else {
        name = kind.file.name;
      }
      const conjurePillTextResult = projectId(onSend[17]).conjurePillText(current, name, combined);
      running = conjurePillTextResult;
      const obj3 = { raw: combined, icon: null };
      let conjureFilePillIconResult = null;
      if ("user" !== kind.kind) {
        conjureFilePillIconResult = projectId(onSend[17]).conjureFilePillIcon();
        const obj4 = projectId(onSend[17]);
      }
      obj3.icon = conjureFilePillIconResult;
      const result = current.set(conjurePillTextResult, obj3);
      const _HermesInternal3 = HermesInternal;
      const combined1 = "" + conjurePillTextResult + " ";
      const sum = str.slice(0, memo.start) + combined1;
      const sum1 = sum + str.slice(memo.end);
      const sum2 = memo.start + combined1.length;
      callback(sum1);
      closure_21(sum2);
      const obj2 = projectId(onSend[17]);
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
        attachmentUrl.then(
          (icon) => {
            value = current.get(conjurePillTextResult);
            if (null != value) {
              value.icon = icon;
              callback1(ref.current);
            }
          },
          () => {},
        );
        const obj7 = projectId(onSend[27]);
      }
      const obj6 = running(onSend[20]);
    }
  }, items10);
  const tmp4Result8 = require("conjureStoredAttachments");
  const token = require("useToken").useToken(tmp28(tmp5[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  const tmp4Result9 = require("useToken");
  const token1 = require("useToken").useToken(tmp28(tmp5[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmp4Result10 = require("useToken");
  const token2 = require("useToken").useToken(tmp28(tmp5[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  const tmp4Result11 = require("useToken");
  const token3 = require("useToken").useToken(tmp28(tmp5[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  const tmp4Result12 = require("useToken");
  const items11 = [str];
  const stateFromStores = require("initialize").useStateFromStores(items11, () => str.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(pill, Math.max(0, (token - 20) / 2));
  const bound2 = Math.min(120, Math.max(token, num));
  const tmp44 = closure_15();
  closure_26 = tmp44;
  const items12 = [projectId];
  callback5 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      let obj2 = require;
      let result = dependencyMap;
      const diff =
        ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE -
        conjureAttachmentDrafts.getConjureAttachmentDrafts(closure_0, "chat").length;
      if (arr.length > diff) {
        const intl = obj2(1128).intl;
        let obj = { count: obj2(12162).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
        _undefined3(intl.formatToPlainString(_modDef3830.Q0aCVZ, obj));
        const _Math = Math;
        const substr = arr.slice(0, Math.max(0, diff));
        arr = substr;
      } else {
        _undefined3(null);
      }
      const mapped = arr.map((name) => {
        const obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
        if (null != name.size) {
          if (!obj2.isConjureAttachmentWithinLimit(name.size, name.contentType)) {
            let obj3 = { draft: null };
            const obj4 = {};
            const merged = Object.assign(obj);
            obj4.status = "error";
            obj4.errorText = projectId(onSend[22]).conjureAttachmentTooLargeText(name.contentType);
            obj3.draft = obj4;
            const tmpResult = projectId(onSend[22]);
          }
          return obj3;
        }
        const obj5 = { draft: null, upload: null };
        const obj6 = {};
        const merged1 = Object.assign(obj);
        obj6.status = "uploading";
        obj5.draft = obj6;
        obj5.upload = function upload() {
          return name(onSend[29]).uploadConjurePickedFile(projectId, name);
        };
        obj3 = obj5;
      });
      obj2 = obj2(12293);
      result = obj2.addConjureAttachmentDrafts(closure_0, "chat", mapped);
    }
  }, items12);
  const items13 = [projectId];
  onRemove = obj.useCallback(
    (arg0) => conjureAttachmentDrafts.removeConjureAttachmentDraft(closure_0, "chat", arg0),
    items13,
  );
  const items14 = [callback5];
  callback6 = obj.useCallback(
    onInterrupt(function* () {
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
          return { value: "IconComponent", done: null };
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
              projectId = callback5;
              c1 = 1;
              dependencyMap = 1;
              const obj5 = {
                value: projectId(12463).pickConjurePhotos(
                  "mixed",
                  projectId(12162).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE,
                ),
                done: false,
              };
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp10) {
          dependencyMap = tmp;
          throw tmp10;
        }
      }
    }),
    items14,
  );
  const items15 = [callback5, canSend];
  const callback7 = obj.useCallback((nativeEvent) => {
    ({ url, type } = nativeEvent.nativeEvent);
    if (canSend) {
      const obj = { uri: url, name: conjurePickedFiles.pickedName(url, null), contentType: null, size: null };
      if (type == null) {
        type = "application/octet-stream";
      }
      obj.contentType = type;
      const items = [obj];
      callback5(items);
    }
  }, items15);
  _require = onInterrupt((types) => {
    c3 = 0;
    c4 = 0;
    return (function* (arg0) {
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
          return { value: "IconComponent", done: null };
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
              callback5(
                closure_129_0.map((uri) => {
                  const obj = {
                    uri: uri.uri,
                    name: types(closure_1_2[29]).pickedName(uri.uri, uri.name),
                    contentType: null,
                    size: null,
                  };
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
                }),
              );
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp17) {
          c4 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  const items16 = [callback5];
  callback8 = obj.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items16);
  const items17 = [onSendToOtherProjects, callback];
  callback9 = obj.useCallback(() => {
    const current = ref.current;
    if (onSendToOtherProjects != null) {
      let obj = projectId(onSend[25]);
      tmp(obj.withConjureMentionNames(projectId(onSend[17]).encodeConjurePills(current, closure_10.current)), () => {
        if (ref.current === current) {
          const _Map = Map;
          const map = new Map();
          closure_10.current = map;
          callback("");
          ChatInputNativeCommandsDefault.setText(ref.current, "");
        }
      });
      const obj2 = projectId(onSend[17]);
    }
  }, items17);
  const items18 = [callback6, callback8, onSendToOtherProjects, callback9];
  const memo2 = obj.useMemo(() => {
    const obj = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3830["51+9lc"]);
    obj.IconComponent = ImagesIcon.ImagesIcon;
    obj.action = callback6;
    let items = [obj, ,];
    const obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3830["10ljr2"]);
    obj2.IconComponent = MusicIcon.MusicIcon;
    obj2.action = function action() {
      const items = [closure_0(onSend[33]).types.audio];
      return callback8(items);
    };
    items[1] = obj2;
    const obj3 = { label: null, IconComponent: null, action: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(_modDef3830.aotDee);
    obj3.IconComponent = FileUpIcon.FileUpIcon;
    obj3.action = function action() {
      return callback8();
    };
    items[2] = obj3;
    if (null != onSendToOtherProjects) {
      const obj4 = { label: null, IconComponent: null, action: null };
      const intl4 = util.intl;
      obj4.label = intl4.string(_modDef3830["5HmLrK"]);
      obj4.IconComponent = ChatArrowRightIcon.ChatArrowRightIcon;
      obj4.action = callback9;
      const items1 = [obj4];
      let items2 = items1;
    } else {
      items2 = [];
    }
    HermesBuiltin.arraySpread(items2, 3);
    return items;
  }, items18);
  const tmp4Result13 = require("initialize");
  const tmp52 = "" !== str.trim() || conjureAttachmentDraftList.length > 0;
  closure_32 = tmp52;
  let tmp53 = canSend;
  if (canSend) {
    tmp53 = tmp52;
  }
  if (tmp53) {
    tmp53 = everyResult;
  }
  c33 = tmp53;
  const items19 = [onSend, projectId, tmp53, callback, str];
  callback10 = obj.useCallback(() => {
    if (c33) {
      const encodeConjurePillsResult = conjureComposerPills.encodeConjurePills(str, closure_10.current);
      const result = conjureAttachmentDrafts.takeConjureAttachmentRefs(closure_0, "chat");
      let tmp8;
      if (result.length > 0) {
        tmp8 = result;
      }
      onSend(encodeConjurePillsResult, tmp8);
      const _Map = Map;
      const map = new Map();
      closure_10.current = map;
      callback("");
      ChatInputNativeCommandsDefault.setText(ref.current, "");
      _undefined3(null);
      _undefined(null);
    }
  }, items19);
  everyResult = conjureAttachmentDraftList.every((status) => "ready" === status.status);
  const items20 = [closure_9];
  const items21 = [projectId];
  stateFromStores1 = require("initialize").useStateFromStores(
    items20,
    () => {
      const modelSettings = ConjureModelSettingsStore.getModelSettings(closure_0);
      let tierSettings;
      if (modelSettings != null) {
        tierSettings = modelSettings.tierSettings;
      }
      return null != tierSettings;
    },
    items21,
  );
  const items22 = [projectId];
  callback11 = obj.useCallback(() => {
    const obj2 = {
      content: closure_2_11(ConjureModelSettingsSheetDefault, { projectId }),
      key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items22);
  const items23 = [tmp52, running, stateFromStores1, tmp53];
  const memo3 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_32) {
      let str3 = "stop";
      if (!running) {
        if (stateFromStores1) {
          str = "models";
        }
        str3 = str;
      }
      str2 = str3;
    }
    const items = [{ key: str2, sendable }];
    return items;
  }, items23);
  const items24 = [tmp44, canSend, onInterrupt, callback11, callback10];
  callback12 = obj.useCallback((key) => {
    if ("stop" === key.key) {
      const obj2 = {
        style: closure_26.trailingButton,
        IconComponent: StopIcon.StopIcon,
        onPress: onInterrupt,
        disabled: null == onInterrupt,
        accessibilityLabel: null,
      };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(_modDef3830.wiguT0);
      let tmp14 = closure_2_11(ChatInputActionButtonDefault, obj2);
    } else if ("models" === key.key) {
      const obj = {
        style: closure_26.trailingButton,
        IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon,
        onPress: callback11,
        disabled: !canSend,
        accessibilityLabel: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3830["3E7Yc0"]);
      tmp14 = closure_2_11(ChatInputActionButtonDefault, obj);
    } else {
      const obj5 = {
        active: true,
        style: null,
        activeStyle: null,
        activeIconStyle: null,
        IconComponent: null,
        accessibilityLabel: null,
        onPress: null,
        disabled: null,
      };
      ({
        trailingButton: obj3.style,
        sendButtonActive: obj3.activeStyle,
        sendIconActive: obj3.activeIconStyle,
      } = closure_26);
      obj5.IconComponent = SendMessageIcon.SendMessageIcon;
      const intl3 = util.intl;
      obj5.accessibilityLabel = intl3.string(util.t.TXNS7S);
      obj5.onPress = callback10;
      obj5.disabled = !key.sendable;
      tmp14 = closure_2_11(ChatInputActionButtonDefault, obj5);
    }
    return tmp14;
  }, items24);
  const items25 = [callback12];
  const callback13 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback12(arg1) };
    return closure_2_11(ChatInputActionButtonTransitionItemDefault, obj, arg0);
  }, items25);
  const callback14 = obj.useCallback(() => _undefined2(true), []);
  let obj3 = { style: tmp44.container, children: null };
  const callback15 = obj.useCallback(() => _undefined2(false), []);
  const items26 = [ref(running(onSend[43]), { projectId, suggestions: memo1, onSelect: callback4 }), , , ,];
  let tmp64Result = null;
  if (null != tmp23) {
    let obj4 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp23 };
    tmp64Result = tmp64(tmp4(tmp5[44]).Text, obj4);
  }
  items26[1] = tmp64Result;
  items26[2] = conjureAttachmentDraftList.map((errorText) => {
    let tmp = null;
    if (null != errorText.errorText) {
      const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: null };
      const intl = projectId(onSend[10]).intl;
      ({ name: obj2.name, errorText: obj2.error } = errorText);
      obj.children = intl.formatToPlainString(running(onSend[11]).U2WbGx, { name: null, error: null });
      tmp = ref(projectId(onSend[44]).Text, obj, errorText.localId);
      const obj3 = { name: null, error: null };
    }
    return tmp;
  });
  let tmp64Result2 = null;
  if (conjureAttachmentDraftList.length > 0) {
    let obj5 = {
      visible: true,
      style: tmp44.draftCarousel,
      children: conjureAttachmentDraftList.map((draft) => closure_2_11(closure_18, { draft, onRemove }, draft.localId)),
    };
    tmp64Result2 = tmp64(tmp4(tmp5[16]).ImageCarouselRow, obj5);
  }
  items26[3] = tmp64Result2;
  const items27 = [tmp44.box];
  if (boxFocused) {
    boxFocused = tmp44.boxFocused;
  }
  let obj6 = { style: items27, children: null };
  items27[1] = boxFocused;
  let obj7 = { style: tmp44.boxContents, children: null };
  const obj8 = {
    style: { paddingBottom: bound },
    children: ref(require("ContextMenu").ContextMenu, {
      items: memo2,
      align: "above",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = {
          ref,
          IconComponent: PlusLargeIcon.PlusLargeIcon,
          onPress,
          disabled: !canSend,
          accessibilityLabel: null,
          accessibilityActions: null,
          onAccessibilityAction: null,
        };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(_modDef3830.hFS71Z);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return closure_2_11(ChatInputActionButtonDefault, obj);
      },
    }),
  };
  const items28 = [ref(canSend, obj8), ,];
  const obj10 = { style: null, children: null };
  const items29 = [tmp44.input, { marginBottom: bound, height: bound2 }];
  obj10.style = items29;
  const obj11 = {
    ref,
    editable: canSend,
    shouldShowCursor: true,
    maxHeight: 120,
    verticalInset: bound1,
    placeholder: null,
    accessibilityLabel: null,
    onBeginFocus: null,
    onEndBlur: null,
    onChangeContentSize: null,
    onSelectionOrTextChange: null,
    onPasteImage: null,
  };
  const obj9 = {
    items: memo2,
    align: "above",
    children(arg0) {
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = {
        ref,
        IconComponent: PlusLargeIcon.PlusLargeIcon,
        onPress,
        disabled: !canSend,
        accessibilityLabel: null,
        accessibilityActions: null,
        onAccessibilityAction: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3830.hFS71Z);
      obj.accessibilityActions = accessibilityActions;
      obj.onAccessibilityAction = onAccessibilityAction;
      return closure_2_11(ChatInputActionButtonDefault, obj);
    },
  };
  const tmp4Result14 = require("initialize");
  let intl = tmp4(tmp5[10]).intl;
  const tmp28Result2 = running(onSend[11]);
  if (inputLocked) {
    let zZ9NgM = tmp28Result2.GcFRaY;
  } else if (!canSend) {
    zZ9NgM = tmp28Result2.zZ9NgM;
  }
  obj11.placeholder = intl.string(zZ9NgM);
  let intl2 = tmp4(tmp5[10]).intl;
  obj11.accessibilityLabel = intl2.string(running(onSend[11]).ldNl9x);
  obj11.onBeginFocus = callback14;
  obj11.onEndBlur = callback15;
  obj11.onChangeContentSize = callback2;
  obj11.onSelectionOrTextChange = callback3;
  obj11.onPasteImage = callback7;
  obj10.children = ref(running(onSend[47]), obj11);
  items28[1] = ref(canSend, obj10);
  const obj12 = { style: null, children: null };
  const items30 = [tmp44.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  obj12.style = items30;
  if (stateFromStores) {
    let callback12Result = callback12(memo3[0]);
  } else {
    const obj13 = { items: memo3, renderItem: callback13, getItemKey };
    callback12Result = tmp64(tmp4(tmp5[48]).TransitionGroup, obj13);
  }
  obj12.children = callback12Result;
  items28[2] = ref(canSend, obj12);
  obj7.children = items28;
  obj6.children = callback(canSend, obj7);
  items26[4] = ref(canSend, obj6);
  obj3.children = items26;
  return callback(canSend, obj3);
}
