// === Module 12215: ConjureNativeComposer ===

// Module 12215 (ConjureNativeComposer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3862 from "module_3862" /* 3862 */;
import useToken from "useToken" /* 4874 */;
import SendMessageIcon from "SendMessageIcon" /* 5099 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5115 */;
import WarningIcon from "WarningIcon" /* 7788 */;
import ImageCarousel from "ImageCarousel" /* 10237 */;
import MusicIcon from "MusicIcon" /* 10471 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10542 */;
import keepLocalCopy from "keepLocalCopy" /* 11507 */;
import ConjureAttachmentTypes from "ConjureAttachmentTypes" /* 11518 */;
import FileUpIcon from "FileUpIcon" /* 11541 */;
import ConjureModelSettingsSheet from "ConjureModelSettingsSheet" /* 11576 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12031 */;
import conjureMentions from "conjureMentions" /* 12070 */;
import StopIcon from "StopIcon" /* 12091 */;
import conjurePickedFiles from "conjurePickedFiles" /* 12185 */;
import ConjureChatActionCreators from "ConjureChatActionCreators" /* 12216 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12217 */;
import ImagesIcon from "ImagesIcon" /* 12222 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12224 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 12225 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 12227 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5140 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10899 */;
import ConjureComposerDraftStore from "ConjureComposerDraftStore" /* 12033 */;

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
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3862.MWTYwv, obj3);
  } else if (null != draft.errorText) {
    const intl2 = util.intl;
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3862.U2WbGx, { name: null, error: null });
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
let c13 = 120;
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(5151);
let obj2 = { container: { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, box: null, boxFocused: null, boxContents: null, input: null, draftCarousel: null, draftOverlay: null, trailingButton: null, trailingSlot: null, sendButtonActive: null, sendIconActive: null };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.box = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj2.boxFocused = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj2.boxContents = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
let obj6 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj2.input = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj2.draftCarousel = { marginBottom: 0 };
let obj8 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj8.alignItems = "center";
obj8.justifyContent = "center";
obj8.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX;
obj2.draftOverlay = obj8;
let size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj2.trailingButton = size;
obj2.trailingSlot = { alignItems: "center", justifyContent: "center" };
let obj7 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj2.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let obj9 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj2.sendIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeDraftTile(draft) {
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
          const obj4 = { itemKey: StringResult, uri: str, fileName: draft.name, isImage: tmp11, isVideo: tmp13, accessibilityLabel: tmp15, removeAccessibilityLabel: tmp18, onRemove: tmp7, children: cResult[14] };
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
}) : (function ConjureNativeDraftTile(draft) {
  draft = draft.draft;
  const onRemove = draft.onRemove;
  const tmp = closure_15();
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
});
ReactCompilerGating = fn(558);
let obj10 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureNativeComposer(projectId) {
  const cResult = projectId(onSend[13]).c(165);
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  ({ running, onSend } = projectId);
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  const hidden = projectId.hidden;
  noop = tmp4;
  if (cResult[0] !== projectId) {
    const fn = function s() {
      return ConjureComposerDraftStore.getDraft(projectId);
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = onDraftHasTextChange(noop.useState(tmp5), 2);
  const first = tmp7[0];
  closure_7 = tmp9;
  if (cResult[2] !== projectId) {
    class P {
      constructor(arg0) {
        obj = closure_0(closure_2[17]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_7(projectId);
        return;
      }
    }
    cResult[2] = projectId;
    cResult[3] = P;
  } else {
    class P {
      constructor(arg0) {
        obj = closure_0(closure_2[17]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_7(projectId);
        return;
      }
    }
  }
  P = tmp10;
  if (cResult[4] !== first) {
    class P {
      constructor(arg0) {
        obj = closure_0(closure_2[17]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_7(projectId);
        return;
      }
    }
    cResult[4] = first;
    cResult[5] = tmp12;
  } else {
    class P {
      constructor(arg0) {
        obj = closure_0(closure_2[17]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_7(projectId);
        return;
      }
    }
  }
  closure_9 = tmp13;
  if (cResult[6] === "" !== tmp12) {
    class P {
      constructor(arg0) {
        obj = closure_0(closure_2[17]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_7(projectId);
        return;
      }
    }
    const effect = obj2.useEffect(L, items2);
    [r10058, tmp17] = tmp6(obj2.useState(null), 2);
    ConjureComposerDraftStore = tmp17;
    obj2.useRef(null);
    const tmp6Result = tmp6(obj2.useState(null), 2);
    if (tmp6Result5[0] !== projectId) {
      class P {
        constructor(arg0) {
          obj = closure_0(closure_2[17]);
          setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
          tmp2 = closure_7(projectId);
          return;
        }
      }
      tmp9(ConjureComposerDraftStore.getDraft(projectId));
      tmp17(null);
    }
    if (cResult[10] !== projectId) {
      class F {
        constructor() {
          obj = closure_1(closure_2[18]);
          setTextResult = obj.setText(closure_11.current, closure_10.getDraft(closure_0));
          return;
        }
      }
      let items = [projectId];
      cResult[10] = projectId;
      cResult[11] = F;
      cResult[12] = items;
      let tmp24 = items;
    } else {
      class F {
        constructor() {
          obj = closure_1(closure_2[18]);
          setTextResult = obj.setText(closure_11.current, closure_10.getDraft(closure_0));
          return;
        }
      }
      tmp24 = cResult[12];
    }
    const effect1 = obj2.useEffect(F, tmp24);
    if (cResult[13] !== tmp4) {
      class K {
        constructor() {
          if (hidden) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[18]);
            tmp3 = closure_11;
            blurResult = obj.blur(closure_11.current);
          }
          return;
        }
      }
      const items1 = [tmp4];
      cResult[13] = tmp4;
      cResult[14] = items1;
      cResult[15] = K;
      let tmp27 = K;
      const tmp26 = items1;
    } else {
      class K {
        constructor() {
          if (hidden) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[18]);
            tmp3 = closure_11;
            blurResult = obj.blur(closure_11.current);
          }
          return;
        }
      }
      tmp27 = cResult[15];
    }
    const effect2 = obj2.useEffect(tmp27, tmp26);
    tmp6Result5 = tmp6(obj2.useState(projectId), 2);
    const conjureAttachmentDraftList = tmp(onSend[19]).useConjureAttachmentDraftList(projectId, "chat");
    let tmpResult = tmp(onSend[19]);
    [r10102, closure_12] = tmp6(obj2.useState(false), 2);
    const tmp6Result6 = tmp6(obj2.useState(false), 2);
    [r10107, c13] = tmp6(obj2.useState(null), 2);
    const _Symbol = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class K {
        constructor() {
          if (hidden) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[18]);
            tmp3 = closure_11;
            blurResult = obj.blur(closure_11.current);
          }
          return;
        }
      }
      cResult[16] = tmp34;
    } else {
      class K {
        constructor() {
          if (hidden) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[18]);
            tmp3 = closure_11;
            blurResult = obj.blur(closure_11.current);
          }
          return;
        }
      }
    }
    const tmp6Result7 = tmp6(obj2.useState(null), 2);
    [tmp36, PX_8] = tmp6(obj2.useState(null), 2);
    if (cResult[17] === tmp10) {
      class K {
        constructor() {
          if (hidden) {
            tmp = closure_1;
            tmp2 = closure_2;
            obj = closure_1(closure_2[18]);
            tmp3 = closure_11;
            blurResult = obj.blur(closure_11.current);
          }
          return;
        }
      }
      closure_15 = canSend(onSend[20])(projectId);
      if (cResult[20] === canSend) {
        class K {
          constructor() {
            if (hidden) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[18]);
              tmp3 = closure_11;
              blurResult = obj.blur(closure_11.current);
            }
            return;
          }
        }
      }
      let result = null;
      if (null != tmp36) {
        class K {
          constructor() {
            if (hidden) {
              tmp = closure_1;
              tmp2 = closure_2;
              obj = closure_1(closure_2[18]);
              tmp3 = closure_11;
              blurResult = obj.blur(closure_11.current);
            }
            return;
          }
        }
        if (canSend) {
          class K {
            constructor() {
              if (hidden) {
                tmp = closure_1;
                tmp2 = closure_2;
                obj = closure_1(closure_2[18]);
                tmp3 = closure_11;
                blurResult = obj.blur(closure_11.current);
              }
              return;
            }
          }
          if (!tmp4) {
            class K {
              constructor() {
                if (hidden) {
                  tmp = closure_1;
                  tmp2 = closure_2;
                  obj = closure_1(closure_2[18]);
                  tmp3 = closure_11;
                  blurResult = obj.blur(closure_11.current);
                }
                return;
              }
            }
            result = obj4.findConjureMentionQuery(first, tmp36);
          }
        }
      }
      cResult[20] = canSend;
      cResult[21] = tmp36;
      cResult[22] = tmp4;
      cResult[23] = first;
      cResult[24] = result;
      const tmp39 = canSend(onSend[20])(projectId);
    }
    function ue(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent.text !== first) {
        P(nativeEvent.text);
      }
      let end = null;
      if (nativeEvent.start === nativeEvent.end) {
        end = nativeEvent.end;
      }
      PX_8(end);
    }
    cResult[17] = tmp10;
    class L {
      constructor() {
        tmpResult = undefined;
        if (onDraftHasTextChange != null) {
          tmp3 = closure_9;
          tmpResult = tmp(closure_9);
        }
        return tmpResult;
      }
    }
    cResult[18] = first;
    cResult[19] = ue;
    const tmp6Result8 = tmp6(obj2.useState(null), 2);
  }
  class L {
    constructor() {
      tmpResult = undefined;
      if (onDraftHasTextChange != null) {
        tmp3 = closure_9;
        tmpResult = tmp(closure_9);
      }
      return tmpResult;
    }
  }
  items2 = ["" !== tmp12, onDraftHasTextChange];
  cResult[6] = "" !== tmp12;
  cResult[7] = onDraftHasTextChange;
  cResult[8] = L;
  cResult[9] = items2;
  let obj = projectId(onSend[13]);
  tmp = projectId;
}) : (function ConjureNativeComposer(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  const canSend = projectId.canSend;
  const running = projectId.running;
  const onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  let flag = projectId.hidden;
  if (flag === undefined) {
    flag = false;
  }
  maxHeight = undefined;
  c14 = undefined;
  let first;
  getItemKey = undefined;
  closure_17 = undefined;
  let memo;
  closure_19 = undefined;
  let callback4;
  let onRemove;
  let callback5;
  let callback7;
  closure_24 = undefined;
  c25 = undefined;
  let callback8;
  let stateFromStores1;
  let callback9;
  let callback10;
  const tmp2 = onInterrupt(onDraftHasTextChange.useState(() => ConjureComposerDraftStore.getDraft(closure_0)), 2);
  let str = tmp2[0];
  closure_8 = tmp3;
  let items = [projectId];
  const callback = onDraftHasTextChange.useCallback((draft) => {
    ConjureChatActionCreators.setComposerDraft(closure_0, draft);
    closure_8(draft);
  }, items);
  const tmp5 = "" !== str.trim();
  ConjureComposerDraftStore = tmp5;
  const items1 = [tmp5, onDraftHasTextChange];
  const effect = onDraftHasTextChange.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_10);
    }
    return tmpResult;
  }, items1);
  [num, tmp8] = onInterrupt(onDraftHasTextChange.useState(null), 2);
  c11 = tmp8;
  const ref = onDraftHasTextChange.useRef(null);
  const tmp10 = onInterrupt(onDraftHasTextChange.useState(projectId), 2);
  if (tmp10[0] !== projectId) {
    tmp10[1](projectId);
    tmp3(ConjureComposerDraftStore.getDraft(projectId));
    tmp8(null);
  }
  const items2 = [projectId];
  const effect1 = obj.useEffect(() => {
    ChatInputNativeCommandsDefault.setText(ref.current, ConjureComposerDraftStore.getDraft(closure_0));
  }, items2);
  const items3 = [flag];
  const effect2 = obj.useEffect(() => {
    if (flag) {
      ChatInputNativeCommandsDefault.blur(ref.current);
    }
  }, items3);
  const tmp7 = onInterrupt(onDraftHasTextChange.useState(null), 2);
  const conjureAttachmentDraftList = require("conjureAttachmentDrafts").useConjureAttachmentDraftList(projectId, "chat");
  let obj2 = require("conjureAttachmentDrafts");
  [boxFocused, c13] = onInterrupt(onDraftHasTextChange.useState(false), 2);
  let tmpResult = onInterrupt(onDraftHasTextChange.useState(false), 2);
  [tmp21, c14] = onInterrupt(onDraftHasTextChange.useState(null), 2);
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const tmpResult4 = onInterrupt(onDraftHasTextChange.useState(null), 2);
  first = tmpResult4[0];
  getItemKey = tmpResult4[1];
  const items4 = [callback, str];
  const callback2 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
    }
    let end = null;
    if (nativeEvent.start === nativeEvent.end) {
      end = nativeEvent.end;
    }
    closure_16(end);
  }, items4);
  const tmp27 = canSend(running[20])(projectId);
  closure_17 = tmp27;
  const items5 = [str, first, canSend, flag];
  memo = obj.useMemo(() => {
    let result = null;
    if (null != first) {
      result = null;
      if (canSend) {
        result = null;
        if (!flag) {
          result = conjureMentions.findConjureMentionQuery(str, tmp);
        }
      }
    }
    return result;
  }, items5);
  const items6 = [memo, tmp27];
  const items7 = [memo, callback, str];
  const memo1 = obj.useMemo(() => {
    if (null == memo) {
      let items = [];
    } else {
      items = conjureMentions.filterConjureMentionCandidates(closure_17, tmp.text);
    }
    return items;
  }, items6);
  const callback3 = obj.useCallback((username) => {
    if (null != memo) {
      const iter = conjureMentions.insertConjureMention(str, tmp, username);
      callback(iter.value);
      closure_16(iter.caret);
      ChatInputNativeCommandsDefault.setText(ref.current, iter.value);
      ChatInputNativeCommandsDefault.setSelectedRange(ref.current, iter.caret, 0);
    }
  }, items7);
  const tmpResult3 = onInterrupt(onDraftHasTextChange.useState(null), 2);
  const token = require("useToken").useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = require("useToken");
  const token1 = require("useToken").useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj4 = require("useToken");
  const token2 = require("useToken").useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj5 = require("useToken");
  const token3 = require("useToken").useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj6 = require("useToken");
  const items8 = [closure_8];
  const stateFromStores = require("initialize").useStateFromStores(items8, () => closure_8.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(c14, Math.max(0, (token - 20) / 2));
  const bound2 = Math.min(tmp38, Math.max(token, num));
  const tmp40 = first();
  closure_19 = tmp40;
  const items9 = [projectId];
  callback4 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      let obj2 = require;
      let result = dependencyMap;
      const diff = ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE - conjureAttachmentDrafts.getConjureAttachmentDrafts(closure_0, "chat").length;
      if (arr.length > diff) {
        const intl = obj2(1126).intl;
        let obj = { count: obj2(11518).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
        _undefined3(intl.formatToPlainString(_modDef3862.Q0aCVZ, obj));
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
            obj4.errorText = projectId(running[19]).conjureAttachmentTooLargeText(name.contentType);
            obj3.draft = obj4;
            const tmpResult = projectId(running[19]);
          }
          return obj3;
        }
        const obj5 = { draft: null, upload: null };
        const obj6 = {};
        const merged1 = Object.assign(obj);
        obj6.status = "uploading";
        obj5.draft = obj6;
        obj5.upload = function upload() {
          return name(running[24]).uploadConjurePickedFile(projectId, name);
        };
        obj3 = obj5;
      });
      obj2 = obj2(12031);
      result = obj2.addConjureAttachmentDrafts(closure_0, "chat", mapped);
    }
  }, items9);
  const items10 = [projectId];
  onRemove = obj.useCallback((arg0) => conjureAttachmentDrafts.removeConjureAttachmentDraft(closure_0, "chat", arg0), items10);
  const items11 = [callback4];
  callback5 = obj.useCallback(onSend(function*() {
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
            projectId = callback4;
            c1 = 1;
            dependencyMap = 1;
            const obj5 = { value: projectId(12185).pickConjurePhotos("mixed", projectId(11518).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE), done: false };
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
  }), items11);
  const items12 = [callback4, canSend];
  const callback6 = obj.useCallback((nativeEvent) => {
    ({ url, type } = nativeEvent.nativeEvent);
    if (canSend) {
      const obj = { uri: url, name: conjurePickedFiles.pickedName(url, null), contentType: null, size: null };
      if (type == null) {
        type = "application/octet-stream";
      }
      obj.contentType = type;
      const items = [obj];
      callback4(items);
    }
  }, items12);
  _require = onSend((types) => {
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
              const obj6 = { value: types(running[25]).handleDocumentSelection(obj5), done: false };
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
              callback4(closure_129_0.map((uri) => {
                const obj = { uri: uri.uri, name: types(closure_1_2[24]).pickedName(uri.uri, uri.name), contentType: null, size: null };
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp17) {
          c4 = tmp;
          throw tmp17;
        }
      }
    })();
  });
  const items13 = [callback4];
  callback7 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items13);
  const items14 = [callback5, callback7];
  const memo2 = obj.useMemo(() => {
    const obj = { label: null, IconComponent: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3862["51+9lc"]);
    obj.IconComponent = ImagesIcon.ImagesIcon;
    obj.action = callback5;
    let items = [obj, , ];
    const obj2 = { label: null, IconComponent: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3862["10ljr2"]);
    obj2.IconComponent = MusicIcon.MusicIcon;
    obj2.action = function action() {
      const items = [closure_0(running[28]).types.audio];
      return callback7(items);
    };
    items[1] = obj2;
    const obj3 = { label: null, IconComponent: null, action: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(_modDef3862.aotDee);
    obj3.IconComponent = FileUpIcon.FileUpIcon;
    obj3.action = function action() {
      return callback7();
    };
    items[2] = obj3;
    return items;
  }, items14);
  const obj7 = require("initialize");
  const tmp47 = "" !== str.trim() || conjureAttachmentDraftList.length > 0;
  closure_24 = tmp47;
  let tmp48 = canSend;
  if (canSend) {
    tmp48 = tmp47;
  }
  if (tmp48) {
    tmp48 = everyResult;
  }
  c25 = tmp48;
  const items15 = [onSend, projectId, tmp48, callback, str, tmp27];
  callback8 = obj.useCallback(() => {
    if (c25) {
      const result = conjureAttachmentDrafts.takeConjureAttachmentRefs(closure_0, "chat");
      let tmp8;
      const result1 = conjureMentions.encodeConjureMentions(str, closure_17);
      if (result.length > 0) {
        tmp8 = result;
      }
      onSend(result1, tmp8);
      callback("");
      ChatInputNativeCommandsDefault.setText(ref.current, "");
      _undefined3(null);
      _undefined(null);
    }
  }, items15);
  everyResult = conjureAttachmentDraftList.every((status) => "ready" === status.status);
  const items16 = [callback];
  const items17 = [projectId];
  stateFromStores1 = require("initialize").useStateFromStores(items16, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(closure_0);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items17);
  const items18 = [projectId];
  callback9 = obj.useCallback(() => {
    const obj2 = { content: closure_2_11(ConjureModelSettingsSheetDefault, { projectId }), key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items18);
  const items19 = [tmp47, running, stateFromStores1, tmp48];
  const memo3 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_24) {
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
  }, items19);
  const items20 = [tmp40, canSend, onInterrupt, callback9, callback8];
  callback10 = obj.useCallback((key) => {
    if ("stop" === key.key) {
      const obj2 = { style: closure_19.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(_modDef3862.wiguT0);
      let tmp14 = closure_2_11(ChatInputActionButtonDefault, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_19.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback9, disabled: !canSend, accessibilityLabel: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3862["3E7Yc0"]);
      tmp14 = closure_2_11(ChatInputActionButtonDefault, obj);
    } else {
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_19);
      obj5.IconComponent = SendMessageIcon.SendMessageIcon;
      const intl3 = util.intl;
      obj5.accessibilityLabel = intl3.string(util.t.TXNS7S);
      obj5.onPress = callback8;
      obj5.disabled = !key.sendable;
      tmp14 = closure_2_11(ChatInputActionButtonDefault, obj5);
    }
    return tmp14;
  }, items20);
  const items21 = [callback10];
  const callback11 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback10(arg1) };
    return closure_2_11(ChatInputActionButtonTransitionItemDefault, obj, arg0);
  }, items21);
  const callback12 = obj.useCallback(() => _undefined2(true), []);
  const obj8 = { style: tmp40.container, children: null };
  const callback13 = obj.useCallback(() => _undefined2(false), []);
  const items22 = [c11(canSend(running[37]), { users: memo1, onSelect: callback3 }), , , , ];
  let tmp59Result = null;
  if (null != tmp21) {
    const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp21 };
    tmp59Result = tmp59(tmp17(tmp18[38]).Text, obj9);
  }
  items22[1] = tmp59Result;
  items22[2] = conjureAttachmentDraftList.map((errorText) => {
    let tmp = null;
    if (null != errorText.errorText) {
      const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: null };
      const intl = projectId(running[10]).intl;
      ({ name: obj2.name, errorText: obj2.error } = errorText);
      obj.children = intl.formatToPlainString(canSend(running[11]).U2WbGx, { name: null, error: null });
      tmp = _undefined(projectId(running[38]).Text, obj, errorText.localId);
      const obj3 = { name: null, error: null };
    }
    return tmp;
  });
  let tmp59Result2 = null;
  if (conjureAttachmentDraftList.length > 0) {
    const obj10 = { visible: true, style: tmp40.draftCarousel, children: conjureAttachmentDraftList.map((draft) => closure_2_11(closure_18, { draft, onRemove }, draft.localId)) };
    tmp59Result2 = tmp59(tmp17(tmp18[16]).ImageCarouselRow, obj10);
  }
  items22[3] = tmp59Result2;
  const items23 = [tmp40.box, ];
  if (boxFocused) {
    boxFocused = tmp40.boxFocused;
  }
  const obj11 = { style: items23, children: null };
  items23[1] = boxFocused;
  const obj12 = { style: tmp40.boxContents, children: null };
  const obj13 = {
    style: { paddingBottom: bound },
    children: c11(require("ContextMenu").ContextMenu, {
      items: memo2,
      align: "above",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(_modDef3862.hFS71Z);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return closure_2_11(ChatInputActionButtonDefault, obj);
      }
    })
  };
  const items24 = [c11(str, obj13), , ];
  const obj15 = { style: null, children: null };
  const items25 = [tmp40.input, { marginBottom: bound, height: bound2 }];
  obj15.style = items25;
  const obj16 = { ref, editable: canSend, shouldShowCursor: true, maxHeight, verticalInset: bound1, placeholder: null, accessibilityLabel: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onSelectionOrTextChange: null, onPasteImage: null };
  const obj14 = {
    items: memo2,
    align: "above",
    children(arg0) {
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3862.hFS71Z);
      obj.accessibilityActions = accessibilityActions;
      obj.onAccessibilityAction = onAccessibilityAction;
      return closure_2_11(ChatInputActionButtonDefault, obj);
    }
  };
  const tmp17Result = require("initialize");
  let intl = tmp17(tmp18[10]).intl;
  const tmp26Result2 = canSend(running[11]);
  if (!canSend) {
    obj16.placeholder = intl.string(tmp26Result2.zZ9NgM);
    let intl2 = tmp17(tmp18[10]).intl;
    obj16.accessibilityLabel = intl2.string(tmp26(tmp18[11]).ldNl9x);
    obj16.onBeginFocus = callback12;
    obj16.onEndBlur = callback13;
    obj16.onChangeContentSize = callback1;
    obj16.onSelectionOrTextChange = callback2;
    obj16.onPasteImage = callback6;
    obj15.children = tmp59(tmp26Result, obj16);
    items24[1] = tmp59(tmp58, obj15);
    const obj17 = { style: null, children: null };
    const items26 = [tmp40.trailingSlot, ];
    let size = { width: token2 + 2 * token3, height: token1 };
    items26[1] = size;
    obj17.style = items26;
    if (stateFromStores) {
      let callback10Result = callback10(memo3[0]);
    } else {
      const obj18 = { items: memo3, renderItem: callback11, getItemKey };
      callback10Result = tmp59(tmp17(tmp18[42]).TransitionGroup, obj18);
    }
    obj17.children = callback10Result;
    items24[2] = tmp59(tmp58, obj17);
    obj12.children = items24;
    obj11.children = tmp57(tmp58, obj12);
    items22[4] = tmp59(tmp58, obj11);
    obj8.children = items22;
    return tmp57(tmp58, obj8);
  }
});