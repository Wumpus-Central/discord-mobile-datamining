// === Module 16731: VibegrationsNativeComposer ===

// Module 16731 (VibegrationsNativeComposer)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import useToken from "useToken" /* 4580 */;
import WarningIcon from "WarningIcon" /* 4803 */;
import SendMessageIcon from "SendMessageIcon" /* 4841 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4854 */;
import VibegrationsTypes from "VibegrationsTypes" /* 6747 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8700 */;
import ImageCarousel from "ImageCarousel" /* 10360 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10689 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11602 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11868 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11876 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 14804 */;
import VibegrationsModelSettingsSheet from "VibegrationsModelSettingsSheet" /* 16572 */;
import StopIcon from "StopIcon" /* 16698 */;
import vibegrationsAttachmentDrafts from "vibegrationsAttachmentDrafts" /* 16715 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import VibegrationsComposerDraftStore from "VibegrationsComposerDraftStore" /* 16717 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;

const require = globalThis.__r;
const VibegrationsModelSettingsSheetDefault = VibegrationsModelSettingsSheet;

require = fn;
function trailingItemKey(key) {
  return key.key;
}
function tooLargeText(contentType) {
  const intl = util.intl;
  const obj = { size: null };
  const obj2 = VibegrationsTypes;
  obj.size = obj2.formatVibegrationsAttachmentLimit(VibegrationsTypes.vibegrationsAttachmentLimit(contentType));
  return intl.formatToPlainString(_modDef3723.cI7t94, obj);
}
function draftAccessibilityLabel(draft) {
  if ("uploading" === draft.status) {
    const intl3 = util.intl;
    const obj3 = { name: draft.name };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3723.sFX7H4, obj3);
  } else if (null != draft.errorText) {
    const intl2 = util.intl;
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3723.ZOkckv, { name: null, error: null });
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
const uploadAttachmentBytes = fn(12904).uploadAttachmentBytes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let c14 = 120;
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4890);
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
let closure_16 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled() ? ((draft) => {
  const cResult = c.c(25);
  draft = draft.draft;
  const onRemove = draft.onRemove;
  const tmp4 = closure_16();
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
          const tmp30 = __initData(ImageCarousel.ImageCarouselTile, obj4);
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
      obj5.children = __initData(timestampProducer, obj6);
      let tmp21 = __initData(React5, obj5);
    } else {
      tmp21 = null;
      if ("error" === draft.status) {
        const obj7 = { style: tmp4.draftOverlay, children: null };
        const obj8 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
        obj7.children = __initData(WarningIcon.WarningIcon, obj8);
        tmp21 = __initData(React5, obj7);
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
}) : ((draft) => {
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
  obj3.accessibilityLabel = draftAccessibilityLabel(draft);
  const intl = util.intl;
  obj3.removeAccessibilityLabel = intl.formatToPlainString(util.t.FxKgb3, { name: draft.name });
  obj3.onRemove = callback;
  if ("uploading" === draft.status) {
    const obj5 = { style: tmp.draftOverlay, children: null };
    const obj6 = { size: "small", color: token };
    obj5.children = __initData(timestampProducer, obj6);
    let tmp7Result = __initData(React5, obj5);
  } else {
    tmp7Result = null;
    if ("error" === draft.status) {
      const obj7 = { style: tmp.draftOverlay, children: null };
      const obj13 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      obj7.children = __initData(WarningIcon.WarningIcon, obj13);
      tmp7Result = __initData(React5, obj7);
    }
  }
  obj3.children = tmp7Result;
  return __initData(ImageCarousel.ImageCarouselTile, obj3);
});
ReactCompilerGating = fn(558);
let obj10 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeComposer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = require("c").c(142);
  projectId = projectId.projectId;
  _require = projectId;
  const canSend = projectId.canSend;
  ({ running, stopped, onSend } = projectId);
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  if (cResult[0] !== projectId) {
    const fn = function s() {
      return VibegrationsComposerDraftStore.getDraft(closure_0);
    };
    cResult[0] = projectId;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  let tmp6 = onDraftHasTextChange(str.useState(tmp4), 2);
  closure_6 = tmp7;
  if (cResult[2] !== projectId) {
    class B {
      constructor(arg0) {
        obj = closure_0(closure_2[18]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_6(projectId);
        return;
      }
    }
    cResult[2] = projectId;
    cResult[3] = B;
  } else {
    class B {
      constructor(arg0) {
        obj = closure_0(closure_2[18]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_6(projectId);
        return;
      }
    }
  }
  B = tmp8;
  if (cResult[4] !== tmp6[0]) {
    class B {
      constructor(arg0) {
        obj = closure_0(closure_2[18]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_6(projectId);
        return;
      }
    }
    cResult[4] = str;
    cResult[5] = tmp10;
  } else {
    class B {
      constructor(arg0) {
        obj = closure_0(closure_2[18]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_6(projectId);
        return;
      }
    }
  }
  const useReducedMotion = tmp11;
  if (cResult[6] === "" !== tmp10) {
    class B {
      constructor(arg0) {
        obj = closure_0(closure_2[18]);
        setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
        tmp2 = closure_6(projectId);
        return;
      }
    }
    const effect = obj2.useEffect(G, items3);
    [tmp15, tmp16] = tmp5(obj2.useState(null), 2);
    VibegrationsComposerDraftStore = tmp16;
    obj2.useRef(null);
    const tmp5Result = tmp5(obj2.useState(null), 2);
    if (tmp5Result4[0] !== projectId) {
      class B {
        constructor(arg0) {
          obj = closure_0(closure_2[18]);
          setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
          tmp2 = closure_6(projectId);
          return;
        }
      }
      tmp7(VibegrationsComposerDraftStore.getDraft(projectId));
      tmp16(null);
    }
    if (cResult[10] !== projectId) {
      class F {
        constructor() {
          obj = closure_1(closure_2[19]);
          setTextResult = obj.setText(closure_10.current, closure_9.getDraft(closure_0));
          return;
        }
      }
      let items = [projectId];
      cResult[10] = projectId;
      cResult[11] = F;
      cResult[12] = items;
      let tmp23 = items;
    } else {
      class F {
        constructor() {
          obj = closure_1(closure_2[19]);
          setTextResult = obj.setText(closure_10.current, closure_9.getDraft(closure_0));
          return;
        }
      }
      tmp23 = cResult[12];
    }
    const effect1 = obj2.useEffect(F, tmp23);
    tmp5Result4 = tmp5(obj2.useState(projectId), 2);
    const vibegrationsAttachmentDraftList = tmp(onSend[20]).useVibegrationsAttachmentDraftList(projectId, "chat");
    let tmpResult = tmp(onSend[20]);
    [r10092, uploadAttachmentBytes] = tmp5(obj2.useState(false), 2);
    const tmp5Result5 = tmp5(obj2.useState(false), 2);
    [r10097, closure_12] = tmp5(obj2.useState(null), 2);
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          obj = closure_1(closure_2[19]);
          setTextResult = obj.setText(closure_10.current, closure_9.getDraft(closure_0));
          return;
        }
      }
      cResult[13] = tmp29;
    } else {
      class F {
        constructor() {
          obj = closure_1(closure_2[19]);
          setTextResult = obj.setText(closure_10.current, closure_9.getDraft(closure_0));
          return;
        }
      }
    }
    if (cResult[14] === tmp8) {
      class F {
        constructor() {
          obj = closure_1(closure_2[19]);
          setTextResult = obj.setText(closure_10.current, closure_9.getDraft(closure_0));
          return;
        }
      }
      const token = tmp(onSend[15]).useToken(canSend(onSend[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
      const tmpResult6 = tmp(onSend[15]);
      const token1 = tmp(onSend[15]).useToken(canSend(onSend[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
      const tmpResult7 = tmp(onSend[15]);
      const token2 = tmp(onSend[15]).useToken(canSend(onSend[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
      const tmpResult8 = tmp(onSend[15]);
      const _Symbol2 = Symbol;
      const token3 = tmp(onSend[15]).useToken(canSend(onSend[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            obj = closure_1(closure_2[19]);
            setTextResult = obj.setText(closure_10.current, closure_9.getDraft(closure_0));
            return;
          }
        }
        const items1 = [useReducedMotion];
        function de() {
          return useReducedMotion.useReducedMotion;
        }
        cResult[17] = items1;
        cResult[18] = de;
        let tmp36 = de;
        const tmp35 = items1;
      } else {
        class F {
          constructor() {
            obj = closure_1(closure_2[19]);
            setTextResult = obj.setText(closure_10.current, closure_9.getDraft(closure_0));
            return;
          }
        }
        tmp36 = cResult[18];
      }
      const tmpResult9 = tmp(onSend[15]);
      const stateFromStores = tmp(onSend[21]).useStateFromStores(tmp35, tmp36);
      let _Math = Math;
      const bound = Math.max(0, (token1 - token) / 2);
      const _Math2 = Math;
      const _Math3 = Math;
      const bound1 = Math.min(Ce, Math.max(0, (token - 20) / 2));
      if (tmp15 == null) {
        class F {
          constructor() {
            obj = closure_1(closure_2[19]);
            setTextResult = obj.setText(closure_10.current, closure_9.getDraft(closure_0));
            return;
          }
        }
      }
      const bound2 = Math.min(Ie, Math.max(token, tmp15));
      class G {
        constructor() {
          tmpResult = undefined;
          if (onDraftHasTextChange != null) {
            tmp3 = closure_8;
            tmpResult = tmp(closure_8);
          }
          return tmpResult;
        }
      }
      if (cResult[19] !== projectId) {
        class Ie {
          constructor(arg0) {
            if (0 === projectId.length) {
              return;
            } else {
              obj2 = closure_0;
              result = closure_2;
              obj3 = closure_0(closure_2[20]);
              str = "chat";
              tmp10 = closure_0;
              diff = closure_0(closure_2[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getVibegrationsAttachmentDrafts(closure_0, "chat").length;
              if (projectId.length > diff) {
                tmp4 = closure_12;
                intl = obj2(result[10]).intl;
                tmp5 = closure_1;
                obj = { count: null };
                obj.count = obj2(result[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
                tmp6 = closure_12(intl.formatToPlainString(closure_1(result[11]).DlX57a, obj));
                tmp7 = globalThis;
                _Math = Math;
                substr = projectId.slice(0, Math.max(0, diff));
                arr = substr;
                if (0 === substr.length) {
                  return;
                }
              } else {
                tmp = closure_12;
                tmp2 = null;
                tmp3 = closure_12(null);
                arr = projectId;
              }
              mapped = arr.map((name) => {
                closure_0 = name;
                let obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
                if (null != name.size) {
                  if (!obj9.isVibegrationsAttachmentWithinLimit(name.size, name.contentType)) {
                    let obj2 = { draft: null };
                    let obj3 = {};
                    const merged = Object.assign(obj);
                    obj3.status = "error";
                    const intl = projectId(1126).intl;
                    let obj4 = { size: null };
                    const tmp6Result = projectId(6747);
                    obj4.size = tmp6Result.formatVibegrationsAttachmentLimit(projectId(6747).vibegrationsAttachmentLimit(name.contentType));
                    obj3.errorText = intl.formatToPlainString(canSend(3723).cI7t94, obj4);
                    obj2.draft = obj3;
                    return obj2;
                  }
                  obj9 = projectId(6747);
                }
                closure_0 = onInterrupt(function*() {
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp4 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } else {
                    try {
                      c3 = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          closure_1 = tmp5;
                          closure_128_0 = undefined;
                          const _fetch = fetch;
                          c2 = 1;
                          c3 = 1;
                          const obj4 = { value: fetch(tmp2.uri), done: false };
                          return obj4;
                        }
                      } else if (1 === tmp5) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj5 = { value, done: true };
                          return obj5;
                        } else {
                          c2 = 2;
                          c3 = 1;
                          const obj6 = { value: value.blob(), done: false };
                          return obj6;
                        }
                      } else if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj7 = { value, done: true };
                        return obj7;
                      } else {
                        closure_128_0 = value;
                        if (obj8.isVibegrationsAttachmentWithinLimit(closure_128_0.size, tmp2.contentType)) {
                          uploadAttachmentBytes(tmp2, closure_128_0, tmp2.name, tmp2.contentType);
                        } else {
                          { errorText: null }.errorText = onPress2(tmp2.contentType);
                          const obj = { errorText: null };
                        }
                        c3 = 3;
                        obj8 = projectId(6747);
                      }
                    } catch (tmp19) {
                      c3 = tmp;
                      throw tmp19;
                    }
                  }
                });
                let obj5 = { draft: null, upload: null };
                let obj6 = {};
                const merged1 = Object.assign(obj);
                obj6.status = "uploading";
                obj5.draft = obj6;
                obj5.upload = function upload() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                return obj5;
              });
              obj2 = obj2(result[20]);
              result = obj2.addVibegrationsAttachmentDrafts(tmp10, "chat", mapped);
            }
            return;
          }
        }
        cResult[19] = projectId;
        cResult[20] = Ie;
      } else {
        class Ie {
          constructor(arg0) {
            if (0 === projectId.length) {
              return;
            } else {
              obj2 = closure_0;
              result = closure_2;
              obj3 = closure_0(closure_2[20]);
              str = "chat";
              tmp10 = closure_0;
              diff = closure_0(closure_2[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - obj3.getVibegrationsAttachmentDrafts(closure_0, "chat").length;
              if (projectId.length > diff) {
                tmp4 = closure_12;
                intl = obj2(result[10]).intl;
                tmp5 = closure_1;
                obj = { count: null };
                obj.count = obj2(result[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
                tmp6 = closure_12(intl.formatToPlainString(closure_1(result[11]).DlX57a, obj));
                tmp7 = globalThis;
                _Math = Math;
                substr = projectId.slice(0, Math.max(0, diff));
                arr = substr;
                if (0 === substr.length) {
                  return;
                }
              } else {
                tmp = closure_12;
                tmp2 = null;
                tmp3 = closure_12(null);
                arr = projectId;
              }
              mapped = arr.map((name) => {
                closure_0 = name;
                let obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
                if (null != name.size) {
                  if (!obj9.isVibegrationsAttachmentWithinLimit(name.size, name.contentType)) {
                    let obj2 = { draft: null };
                    let obj3 = {};
                    const merged = Object.assign(obj);
                    obj3.status = "error";
                    const intl = projectId(1126).intl;
                    let obj4 = { size: null };
                    const tmp6Result = projectId(6747);
                    obj4.size = tmp6Result.formatVibegrationsAttachmentLimit(projectId(6747).vibegrationsAttachmentLimit(name.contentType));
                    obj3.errorText = intl.formatToPlainString(canSend(3723).cI7t94, obj4);
                    obj2.draft = obj3;
                    return obj2;
                  }
                  obj9 = projectId(6747);
                }
                closure_0 = onInterrupt(function*() {
                  if (c3 === 2) {
                    c3 = 3;
                    throw new TypeError("Generator functions may not be called on executing generators");
                  } else if (tmp4 === 3) {
                    if (arg0 === 1) {
                      throw value;
                    } else if (arg0 === 2) {
                      const obj2 = { value, done: true };
                      return obj2;
                    } else {
                      return { value: "IconComponent", done: "IconComponent" };
                    }
                  } else {
                    try {
                      c3 = 2;
                      if (0 === c2) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj3 = { value, done: true };
                          return obj3;
                        } else {
                          closure_1 = tmp5;
                          closure_128_0 = undefined;
                          const _fetch = fetch;
                          c2 = 1;
                          c3 = 1;
                          const obj4 = { value: fetch(tmp2.uri), done: false };
                          return obj4;
                        }
                      } else if (1 === tmp5) {
                        if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 3;
                          const obj5 = { value, done: true };
                          return obj5;
                        } else {
                          c2 = 2;
                          c3 = 1;
                          const obj6 = { value: value.blob(), done: false };
                          return obj6;
                        }
                      } else if (arg0 === 1) {
                        c3 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c3 = 3;
                        const obj7 = { value, done: true };
                        return obj7;
                      } else {
                        closure_128_0 = value;
                        if (obj8.isVibegrationsAttachmentWithinLimit(closure_128_0.size, tmp2.contentType)) {
                          uploadAttachmentBytes(tmp2, closure_128_0, tmp2.name, tmp2.contentType);
                        } else {
                          { errorText: null }.errorText = onPress2(tmp2.contentType);
                          const obj = { errorText: null };
                        }
                        c3 = 3;
                        obj8 = projectId(6747);
                      }
                    } catch (tmp19) {
                      c3 = tmp;
                      throw tmp19;
                    }
                  }
                });
                let obj5 = { draft: null, upload: null };
                let obj6 = {};
                const merged1 = Object.assign(obj);
                obj6.status = "uploading";
                obj5.draft = obj6;
                obj5.upload = function upload() {
                  const self = this;
                  const apply = closure_0.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                return obj5;
              });
              obj2 = obj2(result[20]);
              result = obj2.addVibegrationsAttachmentDrafts(tmp10, "chat", mapped);
            }
            return;
          }
        }
      }
      Ie = tmp45;
      if (cResult[21] !== projectId) {
        class Ce {
          constructor(arg0) {
            obj = closure_0(closure_2[20]);
            return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
          }
        }
        cResult[21] = projectId;
        cResult[22] = Ce;
        const tmp46 = Ce;
      } else {
        class Ce {
          constructor(arg0) {
            obj = closure_0(closure_2[20]);
            return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
          }
        }
      }
      Ce = tmp46;
      if (cResult[23] !== tmp45) {
        class Ce {
          constructor(arg0) {
            obj = closure_0(closure_2[20]);
            return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
          }
        }
        _require = onInterrupt(function*() {
          if (c3 === 2) {
            c3 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp4 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj3 = { value, done: true };
              return obj3;
            } else {
              return { value: "IconComponent", done: "IconComponent" };
            }
          } else {
            try {
              c3 = 2;
              if (0 === c2) {
                if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                } else {
                  closure_1 = tmp5;
                  closure_128_0 = undefined;
                  const obj5 = { mediaType: "any", selectionLimit: tmp2(onSend[12]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
                  c2 = 1;
                  c3 = 1;
                  const obj6 = { value: canSend(onSend[22]).launchImageLibraryAsync(obj5), done: false };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                let obj = { value, done: true };
                return obj;
              } else {
                closure_128_0 = value;
                let didCancel = closure_128_0.didCancel;
                if (!didCancel) {
                  didCancel = null == closure_128_0.assets;
                }
                if (!didCancel) {
                  const assets = closure_128_0.assets;
                  Ie(assets.map((uri) => {
                    const obj = { uri: uri.uri, name: null, contentType: null, size: null };
                    ({ uri, fileName } = uri);
                    if (null == fileName) {
                      const parts = uri.split("/");
                      let str3 = parts.at(-1);
                      if (str3 == null) {
                        str3 = "attachment";
                      }
                      fileName = str3;
                    }
                    obj.name = fileName;
                    let str4 = uri.mimeType;
                    if (str4 == null) {
                      str4 = uri.fileType;
                    }
                    if (str4 == null) {
                      str4 = uri.type;
                    }
                    if (str4 == null) {
                      str4 = "application/octet-stream";
                    }
                    obj.contentType = str4;
                    return obj;
                  }));
                }
                c3 = 3;
                return { value: "IconComponent", done: "IconComponent" };
              }
            } catch (tmp19) {
              c3 = tmp;
              throw tmp19;
            }
          }
        });
        const fn2 = function() {
          const self = this;
          const apply = closure_0.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        cResult[23] = tmp45;
        cResult[24] = fn2;
      } else {
        class Ce {
          constructor(arg0) {
            obj = closure_0(closure_2[20]);
            return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
          }
        }
      }
      if (cResult[25] === tmp45) {
        class Ce {
          constructor(arg0) {
            obj = closure_0(closure_2[20]);
            return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
          }
        }
        if (cResult[28] !== tmp45) {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
          _require = onInterrupt(function*() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj3 = { value, done: true };
                return obj3;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj4 = { value, done: true };
                    return obj4;
                  } else {
                    closure_1 = tmp5;
                    closure_128_0 = undefined;
                    c2 = 1;
                    c3 = 1;
                    const obj5 = { value: tmp2(onSend[23]).handleDocumentSelection({ pickMultiple: true }), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  let obj = { value, done: true };
                  return obj;
                } else {
                  closure_128_0 = value;
                  if (null != closure_128_0) {
                    Ie(closure_128_0.map((uri) => {
                      const obj = { uri: uri.uri, name: null, contentType: null, size: null };
                      ({ uri, name } = uri);
                      if (null == name) {
                        const parts = uri.split("/");
                        let str3 = parts.at(-1);
                        if (str3 == null) {
                          str3 = "attachment";
                        }
                        name = str3;
                      }
                      obj.name = name;
                      let str4 = uri.type;
                      if (str4 == null) {
                        str4 = "application/octet-stream";
                      }
                      obj.contentType = str4;
                      let size = uri.size;
                      if (size == null) {
                        size = null;
                      }
                      obj.size = size;
                      return obj;
                    }));
                  }
                  c3 = 3;
                  return { value: "IconComponent", done: "IconComponent" };
                }
              } catch (tmp16) {
                c3 = tmp;
                throw tmp16;
              }
            }
          });
          const fn3 = function() {
            const self = this;
            const apply = closure_0.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          cResult[28] = tmp45;
          cResult[29] = fn3;
        } else {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
          const stringResult = obj9.string(tmp30(onSend[11]).xE6M2k);
          cResult[30] = stringResult;
          const tmp50 = stringResult;
        } else {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
        }
        if (cResult[31] !== tmp47) {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
          tmp53[0] = tmp50;
          tmp53[1] = tmp47;
          cResult[31] = tmp47;
          cResult[32] = tmp53;
        } else {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
          const stringResult1 = obj10.string(tmp30(onSend[11]).DN7KeU);
          cResult[33] = stringResult1;
          const tmp54 = stringResult1;
        } else {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
        }
        if (cResult[34] !== tmp49) {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
          tmp57[0] = tmp54;
          tmp57[1] = tmp49;
          cResult[34] = tmp49;
          cResult[35] = tmp57;
        } else {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
        }
        if (cResult[36] === tmp53) {
          class Ce {
            constructor(arg0) {
              obj = closure_0(closure_2[20]);
              return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
            }
          }
          if (cResult[39] !== vibegrationsAttachmentDraftList) {
            class Ce {
              constructor(arg0) {
                obj = closure_0(closure_2[20]);
                return obj.removeVibegrationsAttachmentDraft(closure_0, "chat", projectId);
              }
            }
            if (cResult[41] === Symbol.for("react.memo_cache_sentinel")) {
              class Ge {
                constructor(arg0) {
                  return "ready" === projectId.status;
                }
              }
              cResult[41] = Ge;
            } else {
              class Ge {
                constructor(arg0) {
                  return "ready" === projectId.status;
                }
              }
            }
            const everyResult = vibegrationsAttachmentDraftList.every(Ge);
            cResult[39] = vibegrationsAttachmentDraftList;
            cResult[40] = everyResult;
          } else {
            class Ge {
              constructor(arg0) {
                return "ready" === projectId.status;
              }
            }
            const tmp63 = "" !== str.trim() || vibegrationsAttachmentDraftList.length > 0;
            cResult[42] = vibegrationsAttachmentDraftList.length;
            cResult[43] = str;
            cResult[44] = tmp63;
          }
        }
        const items2 = [tmp53, tmp57];
        cResult[36] = tmp53;
        cResult[37] = tmp57;
        cResult[38] = items2;
      }
      function xe(nativeEvent) {
        ({ url, type } = nativeEvent.nativeEvent);
        if (canSend) {
          const obj = { uri: url, name: null, contentType: null, size: null };
          const parts = url.split("/");
          let str2 = parts.at(-1);
          if (str2 == null) {
            str2 = "attachment";
          }
          obj.name = str2;
          if (type == null) {
            type = "application/octet-stream";
          }
          obj.contentType = type;
          const items = [obj];
          Ie(items);
        }
      }
      cResult[25] = tmp45;
      cResult[26] = canSend;
      cResult[27] = xe;
      const tmpResult10 = tmp(onSend[21]);
    }
    function ce(nativeEvent) {
      nativeEvent = nativeEvent.nativeEvent;
      if (nativeEvent.text !== str) {
        B(nativeEvent.text);
      }
    }
    cResult[14] = tmp8;
    cResult[15] = str;
    cResult[16] = ce;
    class G {
      constructor() {
        tmpResult = undefined;
        if (onDraftHasTextChange != null) {
          tmp3 = closure_8;
          tmpResult = tmp(closure_8);
        }
        return tmpResult;
      }
    }
    const tmp5Result6 = tmp5(obj2.useState(null), 2);
  }
  class G {
    constructor() {
      tmpResult = undefined;
      if (onDraftHasTextChange != null) {
        tmp3 = closure_8;
        tmpResult = tmp(closure_8);
      }
      return tmpResult;
    }
  }
  items3 = ["" !== tmp10, onDraftHasTextChange];
  cResult[6] = "" !== tmp10;
  cResult[7] = onDraftHasTextChange;
  cResult[8] = G;
  cResult[9] = items3;
  let obj = require("c");
}) : ((projectId) => {
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  const running = projectId.running;
  let flag = projectId.stopped;
  if (flag === undefined) {
    flag = false;
  }
  const onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  c12 = undefined;
  c13 = undefined;
  maxHeight = undefined;
  let callback3;
  let onRemove;
  let callback4;
  let callback6;
  closure_19 = undefined;
  c20 = undefined;
  let callback7;
  let stateFromStores1;
  let callback8;
  let callback9;
  const tmp2 = onInterrupt(onDraftHasTextChange.useState(() => VibegrationsComposerDraftStore.getDraft(projectId)), 2);
  let str = tmp2[0];
  closure_7 = tmp3;
  let items = [projectId];
  const callback = onDraftHasTextChange.useCallback((draft) => {
    VibegrationsActionCreators.setComposerDraft(projectId, draft);
    closure_7(draft);
  }, items);
  const tmp5 = "" !== str.trim();
  VibegrationsComposerDraftStore = tmp5;
  const items1 = [tmp5, onDraftHasTextChange];
  const effect = onDraftHasTextChange.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_9);
    }
    return tmpResult;
  }, items1);
  [num, tmp8] = onInterrupt(onDraftHasTextChange.useState(null), 2);
  c10 = tmp8;
  const ref = onDraftHasTextChange.useRef(null);
  const tmp10 = onInterrupt(onDraftHasTextChange.useState(projectId), 2);
  if (tmp10[0] !== projectId) {
    tmp10[1](projectId);
    tmp3(VibegrationsComposerDraftStore.getDraft(projectId));
    tmp8(null);
  }
  const items2 = [projectId];
  const effect1 = obj.useEffect(() => {
    ChatInputNativeCommandsDefault.setText(ref.current, VibegrationsComposerDraftStore.getDraft(projectId));
  }, items2);
  const tmp7 = onInterrupt(onDraftHasTextChange.useState(null), 2);
  const vibegrationsAttachmentDraftList = projectId(running[20]).useVibegrationsAttachmentDraftList(projectId, "chat");
  let obj2 = projectId(running[20]);
  [boxFocused, c12] = onInterrupt(onDraftHasTextChange.useState(false), 2);
  let tmpResult = onInterrupt(onDraftHasTextChange.useState(false), 2);
  [tmp20, c13] = onInterrupt(onDraftHasTextChange.useState(null), 2);
  const items3 = [callback, str];
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const callback2 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
    }
  }, items3);
  const tmpResult2 = onInterrupt(onDraftHasTextChange.useState(null), 2);
  const token = projectId(running[15]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = projectId(running[15]);
  const token1 = projectId(running[15]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj4 = projectId(running[15]);
  const token2 = projectId(running[15]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj5 = projectId(running[15]);
  const token3 = projectId(running[15]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj6 = projectId(running[15]);
  const items4 = [callback];
  const stateFromStores = projectId(running[21]).useStateFromStores(items4, () => callback.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(callback3, Math.max(0, (token - 20) / 2));
  const bound2 = Math.min(tmp31, Math.max(token, num));
  const tmp33 = onRemove();
  maxHeight = tmp33;
  const items5 = [projectId];
  callback3 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      let obj2 = require;
      let result = dependencyMap;
      const diff = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - vibegrationsAttachmentDrafts.getVibegrationsAttachmentDrafts(projectId, "chat").length;
      if (arr.length > diff) {
        let intl = obj2(1126).intl;
        let obj = { count: obj2(6747).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE };
        _undefined3(intl.formatToPlainString(_modDef3723.DlX57a, obj));
        const _Math = Math;
        const substr = arr.slice(0, Math.max(0, diff));
        arr = substr;
      } else {
        _undefined3(null);
      }
      const mapped = arr.map((name) => {
        closure_0 = name;
        closure_1 = function _upload2() {
          const self = this;
          const tmp = onSend(function*() {
            if (c3 === 2) {
              c3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp4 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "IconComponent" };
              }
            } else {
              try {
                c3 = 2;
                if (0 === c2) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_1 = tmp5;
                    closure_0 = tmp2;
                    closure_128_0 = undefined;
                    const _fetch = fetch;
                    c2 = 1;
                    c3 = 1;
                    const obj4 = { value: fetch(name.uri), done: false };
                    return obj4;
                  }
                } else if (1 === tmp5) {
                  if (arg0 === 1) {
                    c3 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c3 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    c2 = 2;
                    c3 = 1;
                    const obj6 = { value: value.blob(), done: false };
                    return obj6;
                  }
                } else if (arg0 === 1) {
                  c3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  closure_128_0 = value;
                  if (obj8.isVibegrationsAttachmentWithinLimit(closure_128_0.size, closure_129_0.contentType)) {
                    closure_2_11(closure_0, closure_128_0, closure_129_0.name, closure_129_0.contentType);
                  } else {
                    { errorText: null }.errorText = closure_2_18(closure_129_0.contentType);
                    const obj = { errorText: null };
                  }
                  c3 = 3;
                  obj8 = name(closure_2_2[12]);
                }
              } catch (tmp19) {
                c3 = tmp;
                throw tmp19;
              }
            }
          });
          closure_1 = tmp;
          const apply = tmp.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        let obj = { name: name.name, contentType: name.contentType, previewUrl: name.uri };
        if (null != name.size) {
          if (!obj9.isVibegrationsAttachmentWithinLimit(name.size, name.contentType)) {
            let obj2 = { draft: null };
            let obj3 = {};
            const merged = Object.assign(obj);
            obj3.status = "error";
            const intl = projectId(running[10]).intl;
            let obj4 = { size: null };
            const tmp6Result = projectId(running[12]);
            obj4.size = tmp6Result.formatVibegrationsAttachmentLimit(projectId(running[12]).vibegrationsAttachmentLimit(name.contentType));
            obj3.errorText = intl.formatToPlainString(canSend(running[11]).cI7t94, obj4);
            obj2.draft = obj3;
            return obj2;
          }
          obj9 = projectId(running[12]);
        }
        let obj5 = { draft: null, upload: null };
        let obj6 = {};
        const merged1 = Object.assign(obj);
        obj6.status = "uploading";
        obj5.draft = obj6;
        obj5.upload = function upload() {
          const self = this;
          const apply = closure_1.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        };
        return obj5;
      });
      obj2 = obj2(16715);
      result = obj2.addVibegrationsAttachmentDrafts(projectId, "chat", mapped);
    }
  }, items5);
  const items6 = [projectId];
  onRemove = obj.useCallback((arg0) => vibegrationsAttachmentDrafts.removeVibegrationsAttachmentDraft(projectId, "chat", arg0), items6);
  const items7 = [callback3];
  callback4 = obj.useCallback(onSend(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = undefined;
            const obj5 = { mediaType: "any", selectionLimit: tmp2(6747).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: tmp5(7285).launchImageLibraryAsync(obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          let didCancel = closure_128_0.didCancel;
          if (!didCancel) {
            didCancel = null == closure_128_0.assets;
          }
          if (!didCancel) {
            const assets = closure_128_0.assets;
            closure_129_15(assets.map((uri) => {
              const obj = { uri: uri.uri, name: null, contentType: null, size: null };
              ({ uri, fileName } = uri);
              if (null == fileName) {
                const parts = uri.split("/");
                let str3 = parts.at(-1);
                if (str3 == null) {
                  str3 = "attachment";
                }
                fileName = str3;
              }
              obj.name = fileName;
              let str4 = uri.mimeType;
              if (str4 == null) {
                str4 = uri.fileType;
              }
              if (str4 == null) {
                str4 = uri.type;
              }
              if (str4 == null) {
                str4 = "application/octet-stream";
              }
              obj.contentType = str4;
              return obj;
            }));
          }
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp19) {
        c3 = tmp;
        throw tmp19;
      }
    }
  }), items7);
  const items8 = [callback3, canSend];
  const callback5 = obj.useCallback((nativeEvent) => {
    ({ url, type } = nativeEvent.nativeEvent);
    if (canSend) {
      const obj = { uri: url, name: null, contentType: null, size: null };
      const parts = url.split("/");
      let str2 = parts.at(-1);
      if (str2 == null) {
        str2 = "attachment";
      }
      obj.name = str2;
      if (type == null) {
        type = "application/octet-stream";
      }
      obj.contentType = type;
      const items = [obj];
      callback3(items);
    }
  }, items8);
  const items9 = [callback3];
  callback6 = obj.useCallback(onSend(function*() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj5 = { value: tmp2(c2[23]).handleDocumentSelection({ pickMultiple: true }), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          if (null != closure_128_0) {
            closure_129_15(closure_128_0.map((uri) => {
              const obj = { uri: uri.uri, name: null, contentType: null, size: null };
              ({ uri, name } = uri);
              if (null == name) {
                const parts = uri.split("/");
                let str3 = parts.at(-1);
                if (str3 == null) {
                  str3 = "attachment";
                }
                name = str3;
              }
              obj.name = name;
              let str4 = uri.type;
              if (str4 == null) {
                str4 = "application/octet-stream";
              }
              obj.contentType = str4;
              let size = uri.size;
              if (size == null) {
                size = null;
              }
              obj.size = size;
              return obj;
            }));
          }
          c3 = 3;
          return { value: "IconComponent", done: "IconComponent" };
        }
      } catch (tmp16) {
        c3 = tmp;
        throw tmp16;
      }
    }
  }), items9);
  const items10 = [callback6, callback4];
  const memo = obj.useMemo(() => {
    const obj = { label: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3723.xE6M2k);
    obj.action = callback4;
    const items = [obj, ];
    const obj2 = { label: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3723.DN7KeU);
    obj2.action = callback6;
    items[1] = obj2;
    return items;
  }, items10);
  let obj7 = projectId(running[21]);
  const tmp40 = "" !== str.trim() || vibegrationsAttachmentDraftList.length > 0;
  closure_19 = tmp40;
  let tmp41 = canSend;
  if (canSend) {
    tmp41 = tmp40;
  }
  if (tmp41) {
    tmp41 = everyResult;
  }
  c20 = tmp41;
  const items11 = [onSend, projectId, tmp41, callback, str];
  callback7 = obj.useCallback(() => {
    if (c20) {
      const result = vibegrationsAttachmentDrafts.takeVibegrationsAttachmentRefs(projectId, "chat");
      let tmp6;
      if (result.length > 0) {
        tmp6 = result;
      }
      onSend("chat", tmp6);
      callback("");
      ChatInputNativeCommandsDefault.setText(ref.current, "");
      _undefined3(null);
      _undefined(null);
    }
  }, items11);
  everyResult = vibegrationsAttachmentDraftList.every((status) => "ready" === status.status);
  const items12 = [c10];
  const items13 = [projectId];
  stateFromStores1 = projectId(running[21]).useStateFromStores(items12, () => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items13);
  const items14 = [projectId];
  callback8 = obj.useCallback(() => {
    const obj2 = { content: __initData(VibegrationsModelSettingsSheetDefault, { projectId }), key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items14);
  const items15 = [tmp40, running, stateFromStores1, tmp41];
  const memo1 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_19) {
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
  }, items15);
  const items16 = [tmp33, canSend, onInterrupt, callback8, callback7];
  callback9 = obj.useCallback((key) => {
    if ("stop" === key.key) {
      const obj2 = { style: closure_14.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(_modDef3723.KdgI4k);
      let tmp14 = __initData(ChatInputActionButtonDefault, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_14.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback8, disabled: !canSend, accessibilityLabel: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3723["2NWMqY"]);
      tmp14 = __initData(ChatInputActionButtonDefault, obj);
    } else {
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_14);
      obj5.IconComponent = SendMessageIcon.SendMessageIcon;
      const intl3 = util.intl;
      obj5.accessibilityLabel = intl3.string(util.t.TXNS7S);
      obj5.onPress = callback7;
      obj5.disabled = !key.sendable;
      tmp14 = __initData(ChatInputActionButtonDefault, obj5);
    }
    return tmp14;
  }, items16);
  const items17 = [callback9];
  const callback10 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback9(arg1) };
    return __initData(ChatInputActionButtonTransitionItemDefault, obj, arg0);
  }, items17);
  const callback11 = obj.useCallback(() => _undefined2(true), []);
  let obj8 = { style: tmp33.container, children: null };
  let tmp52 = null;
  const callback12 = obj.useCallback(() => _undefined2(false), []);
  if (null != tmp20) {
    let obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp20 };
    tmp52 = c12(tmp16(tmp17[31]).Text, obj9);
  }
  const items18 = [
    tmp52,
    vibegrationsAttachmentDraftList.map((errorText) => {
      let tmp = null;
      if (null != errorText.errorText) {
        const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: null };
        const intl = projectId(running[10]).intl;
        ({ name: obj2.name, errorText: obj2.error } = errorText);
        obj.children = intl.formatToPlainString(canSend(running[11]).ZOkckv, { name: null, error: null });
        tmp = _undefined2(projectId(running[31]).Text, obj, errorText.localId);
        const obj3 = { name: null, error: null };
      }
      return tmp;
    }),
  ,

  ];
  let tmp54 = null;
  if (vibegrationsAttachmentDraftList.length > 0) {
    const obj10 = { visible: true, style: tmp33.draftCarousel, children: vibegrationsAttachmentDraftList.map((draft) => __initData(closure_20, { draft, onRemove }, draft.localId)) };
    tmp54 = c12(tmp16(tmp17[17]).ImageCarouselRow, obj10);
  }
  items18[2] = tmp54;
  const items19 = [tmp33.box, ];
  if (boxFocused) {
    boxFocused = tmp33.boxFocused;
  }
  const obj11 = { style: items19, children: null };
  items19[1] = boxFocused;
  const obj12 = { style: tmp33.boxContents, children: null };
  const obj13 = {
    style: { paddingBottom: bound },
    children: c12(projectId(running[33]).ContextMenu, {
      items: memo,
      align: "above",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(_modDef3723.gUn10I);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return __initData(ChatInputActionButtonDefault, obj);
      }
    })
  };
  const items20 = [c12(closure_7, obj13), , ];
  const obj15 = { style: null, children: null };
  const items21 = [tmp33.input, { marginBottom: bound, height: bound2 }];
  obj15.style = items21;
  const obj16 = { ref, editable: canSend, shouldShowCursor: true, maxHeight, verticalInset: bound1, placeholder: null, accessibilityLabel: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onSelectionOrTextChange: null, onPasteImage: null };
  const obj14 = {
    items: memo,
    align: "above",
    children(arg0) {
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3723.gUn10I);
      obj.accessibilityActions = accessibilityActions;
      obj.onAccessibilityAction = onAccessibilityAction;
      return __initData(ChatInputActionButtonDefault, obj);
    }
  };
  const tmp16Result = projectId(running[21]);
  let intl = tmp16(tmp17[10]).intl;
  const tmp23Result2 = canSend(running[11]);
  if (flag) {
    let nm4w9P = tmp23Result2.JeM47J;
  } else if (!canSend) {
    nm4w9P = tmp23Result2.nm4w9P;
  }
  obj16.placeholder = intl.string(nm4w9P);
  let intl2 = tmp16(tmp17[10]).intl;
  obj16.accessibilityLabel = intl2.string(canSend(running[11]).OPr66w);
  obj16.onBeginFocus = callback11;
  obj16.onEndBlur = callback12;
  obj16.onChangeContentSize = callback1;
  obj16.onSelectionOrTextChange = callback2;
  obj16.onPasteImage = callback5;
  obj15.children = c12(canSend(running[34]), obj16);
  items20[1] = c12(closure_7, obj15);
  const obj17 = { style: null, children: null };
  const items22 = [tmp33.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  obj17.style = items22;
  if (stateFromStores) {
    let callback9Result = callback9(memo1[0]);
  } else {
    const obj18 = { items: memo1, renderItem: callback10, getItemKey: callback4 };
    callback9Result = tmp56(tmp16(tmp17[35]).TransitionGroup, obj18);
  }
  obj17.children = callback9Result;
  items20[2] = c12(closure_7, obj17);
  obj12.children = items20;
  obj11.children = c13(closure_7, obj12);
  items18[3] = c12(closure_7, obj11);
  obj8.children = items18;
  return c13(closure_7, obj8);
});