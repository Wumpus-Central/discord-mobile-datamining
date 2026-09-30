// === Module 16624: VibegrationsNativeComposer ===

// Module 16624 (VibegrationsNativeComposer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3715 from "module_3715" /* 3715 */;
import useToken from "useToken" /* 4561 */;
import SendMessageIcon from "SendMessageIcon" /* 4807 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 4830 */;
import VibegrationsTypes from "VibegrationsTypes" /* 5567 */;
import WarningIcon from "WarningIcon" /* 8244 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 8695 */;
import ImageCarousel from "ImageCarousel" /* 10295 */;
import PlusLargeIcon from "PlusLargeIcon" /* 10616 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 11673 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 11924 */;
import ChatInputActionButtonTransitionItemDefault from "ChatInputActionButtonTransitionItem" /* 11931 */;
import FiltersHorizontalIcon from "FiltersHorizontalIcon" /* 14742 */;
import VibegrationsModelSettingsSheet from "VibegrationsModelSettingsSheet" /* 16473 */;
import StopIcon from "StopIcon" /* 16591 */;
import vibegrationsAttachmentDrafts from "vibegrationsAttachmentDrafts" /* 16608 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4855 */;
import VibegrationsComposerDraftStore from "VibegrationsComposerDraftStore" /* 16610 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12842 */;

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
  return intl.formatToPlainString(_modDef3715.cI7t94, obj);
}
function VibegrationsNativeDraftTile(draft) {
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
  if ("uploading" === draft.status) {
    const intl3 = util.intl;
    const obj5 = { name: draft.name };
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3715.sFX7H4, obj5);
  } else if (null != draft.errorText) {
    const intl2 = util.intl;
    ({ name: obj4.name, errorText: obj4.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3715.ZOkckv, { name: null, error: null });
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
    let tmp7Result = closure_1_12(React5, obj9);
  } else {
    tmp7Result = null;
    if ("error" === draft.status) {
      const obj19 = { style: tmp.draftOverlay, children: null };
      const obj20 = { size: "sm", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      obj19.children = closure_1_12(WarningIcon.WarningIcon, obj20);
      tmp7Result = closure_1_12(React5, obj19);
    }
  }
  obj3.children = tmp7Result;
  return closure_1_12(ImageCarousel.ImageCarouselTile, obj3);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, StyleSheet } = get_ActivityIndicator);
const uploadAttachmentBytes = fn(12842).uploadAttachmentBytes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4866);
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
size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeComposer.tsx");

export default function VibegrationsNativeComposer(projectId) {
  projectId = projectId.projectId;
  const canSend = projectId.canSend;
  const running = projectId.running;
  let flag = projectId.stopped;
  if (flag === undefined) {
    flag = false;
  }
  const onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  let flag2 = projectId.tipOpen;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onDismissTip = projectId.onDismissTip;
  const onDraftHasTextChange = projectId.onDraftHasTextChange;
  c13 = undefined;
  c14 = undefined;
  closure_15 = undefined;
  let callback3;
  let onRemove;
  let callback4;
  let callback6;
  closure_20 = undefined;
  c21 = undefined;
  let callback7;
  let stateFromStores1;
  let callback8;
  let callback9;
  const ref = onDismissTip.useRef(null);
  const tmp3 = onInterrupt(onDismissTip.useState(() => VibegrationsComposerDraftStore.getDraft(projectId)), 2);
  let str = tmp3[0];
  closure_8 = tmp4;
  let items = [projectId];
  const callback = onDismissTip.useCallback((draft) => {
    VibegrationsActionCreators.setComposerDraft(projectId, draft);
    closure_8(draft);
  }, items);
  const tmp6 = "" !== str.trim();
  closure_10 = tmp6;
  const items1 = [tmp6, onDraftHasTextChange];
  const effect = onDismissTip.useEffect(() => {
    let tmpResult;
    if (onDraftHasTextChange != null) {
      tmpResult = tmp(closure_10);
    }
    return tmpResult;
  }, items1);
  [num, tmp9] = onInterrupt(onDismissTip.useState(null), 2);
  c11 = tmp9;
  const ref1 = onDismissTip.useRef(null);
  const tmp11 = onInterrupt(onDismissTip.useState(projectId), 2);
  if (tmp11[0] !== projectId) {
    tmp11[1](projectId);
    tmp4(callback.getDraft(projectId));
    tmp9(null);
  }
  const items2 = [projectId];
  const effect1 = obj.useEffect(() => {
    ChatInputNativeCommandsDefault.setText(ref1.current, VibegrationsComposerDraftStore.getDraft(projectId));
  }, items2);
  const tmp8 = onInterrupt(onDismissTip.useState(null), 2);
  const vibegrationsAttachmentDraftList = projectId(running[18]).useVibegrationsAttachmentDraftList(projectId, "chat");
  let obj2 = projectId(running[18]);
  [boxFocused, c13] = onInterrupt(onDismissTip.useState(false), 2);
  const tmp2Result = onInterrupt(onDismissTip.useState(false), 2);
  [tmp21, c14] = onInterrupt(onDismissTip.useState(null), 2);
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
  const tmp2Result2 = onInterrupt(onDismissTip.useState(null), 2);
  const token = projectId(running[13]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = projectId(running[13]);
  const token1 = projectId(running[13]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj4 = projectId(running[13]);
  const token2 = projectId(running[13]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj5 = projectId(running[13]);
  const token3 = projectId(running[13]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj6 = projectId(running[13]);
  const items4 = [closure_8];
  const stateFromStores = projectId(running[19]).useStateFromStores(items4, () => closure_8.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(c14, Math.max(0, (token - 20) / 2));
  const bound2 = Math.min(120, Math.max(token, num));
  const tmp33 = closure_15();
  closure_15 = tmp33;
  const items5 = [projectId];
  callback3 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      let obj2 = require;
      let result = dependencyMap;
      const diff = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - vibegrationsAttachmentDrafts.getVibegrationsAttachmentDrafts(projectId, "chat").length;
      if (arr.length > diff) {
        let intl = obj2(1115).intl;
        let obj = { count: obj2(5567).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE };
        _undefined3(intl.formatToPlainString(_modDef3715.DlX57a, obj));
        const _Math = Math;
        const substr = arr.slice(0, Math.max(0, diff));
        arr = substr;
      } else {
        _undefined3(null);
      }
      const mapped = arr.map((name) => {
        closure_0 = name;
        closure_1 = function _upload() {
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
                return { value: "HermesInternal", done: null };
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
                    { errorText: null }.errorText = closure_2_17(closure_129_0.contentType);
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
      obj2 = obj2(16608);
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
        return { value: "HermesInternal", done: null };
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
            const obj5 = { mediaType: "any", selectionLimit: tmp2(5567).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: tmp5(5659).launchImageLibraryAsync(obj5), done: false };
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
            closure_129_16(assets.map((uri) => {
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
          return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
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
            const obj5 = { value: tmp2(c2[21]).handleDocumentSelection({ pickMultiple: true }), done: false };
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
            closure_129_16(closure_128_0.map((uri) => {
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
          return { value: "HermesInternal", done: null };
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
    obj.label = intl.string(_modDef3715.xE6M2k);
    obj.action = callback4;
    const items = [obj, ];
    const obj2 = { label: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3715.DN7KeU);
    obj2.action = callback6;
    items[1] = obj2;
    return items;
  }, items10);
  let obj7 = projectId(running[19]);
  const tmp40 = "" !== str.trim() || vibegrationsAttachmentDraftList.length > 0;
  closure_20 = tmp40;
  let tmp41 = canSend;
  if (canSend) {
    tmp41 = tmp40;
  }
  if (tmp41) {
    tmp41 = everyResult;
  }
  c21 = tmp41;
  const items11 = [onDismissTip, onSend, projectId, tmp41, callback, str];
  callback7 = obj.useCallback(() => {
    if (c21) {
      if (onDismissTip != null) {
        tmp();
      }
      const result = vibegrationsAttachmentDrafts.takeVibegrationsAttachmentRefs(projectId, "chat");
      let tmp9;
      if (result.length > 0) {
        tmp9 = result;
      }
      onSend("chat", tmp9);
      callback("");
      ChatInputNativeCommandsDefault.setText(ref1.current, "");
      _undefined3(null);
      _undefined(null);
    }
  }, items11);
  everyResult = vibegrationsAttachmentDraftList.every((status) => "ready" === status.status);
  const items12 = [closure_10];
  const items13 = [projectId];
  stateFromStores1 = projectId(running[19]).useStateFromStores(items12, () => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items13);
  const items14 = [projectId];
  callback8 = obj.useCallback(() => {
    const obj2 = { content: closure_2_12(VibegrationsModelSettingsSheetDefault, { projectId }), key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items14);
  const items15 = [tmp40, running, stateFromStores1, tmp41];
  const memo1 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_20) {
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
      const obj2 = { style: closure_15.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(_modDef3715.KdgI4k);
      let tmp14 = closure_2_12(ChatInputActionButtonDefault, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_15.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback8, disabled: !canSend, accessibilityLabel: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3715["2NWMqY"]);
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj);
    } else {
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_15);
      obj5.IconComponent = SendMessageIcon.SendMessageIcon;
      const intl3 = util.intl;
      obj5.accessibilityLabel = intl3.string(util.t.TXNS7S);
      obj5.onPress = callback7;
      obj5.disabled = !key.sendable;
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj5);
    }
    return tmp14;
  }, items16);
  const items17 = [callback9];
  const callback10 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback9(arg1) };
    return closure_2_12(ChatInputActionButtonTransitionItemDefault, obj, arg0);
  }, items17);
  const callback11 = obj.useCallback(() => _undefined2(true), []);
  let obj8 = { ref, style: tmp33.container, children: null };
  let tmp52 = null;
  const callback12 = obj.useCallback(() => _undefined2(false), []);
  if (null != onDismissTip) {
    let obj9 = { targetRef: ref, visible: flag2, onDismiss: onDismissTip };
    tmp52 = ref1(tmp24(tmp18[29]), obj9);
  }
  const items18 = [tmp52, , , , ];
  let tmp54 = null;
  if (null != tmp21) {
    const obj10 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp21 };
    tmp54 = ref1(tmp17(tmp18[30]).Text, obj10);
  }
  items18[1] = tmp54;
  items18[2] = vibegrationsAttachmentDraftList.map((errorText) => {
    let tmp = null;
    if (null != errorText.errorText) {
      const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: null };
      const intl = projectId(running[10]).intl;
      ({ name: obj2.name, errorText: obj2.error } = errorText);
      obj.children = intl.formatToPlainString(canSend(running[11]).ZOkckv, { name: null, error: null });
      tmp = ref1(projectId(running[30]).Text, obj, errorText.localId);
      const obj3 = { name: null, error: null };
    }
    return tmp;
  });
  let tmp56 = null;
  if (vibegrationsAttachmentDraftList.length > 0) {
    const obj11 = { visible: true, style: tmp33.draftCarousel, children: vibegrationsAttachmentDraftList.map((draft) => closure_2_12(VibegrationsNativeDraftTile, { draft, onRemove }, draft.localId)) };
    tmp56 = ref1(tmp17(tmp18[14]).ImageCarouselRow, obj11);
  }
  items18[3] = tmp56;
  const items19 = [tmp33.box, ];
  if (boxFocused) {
    boxFocused = tmp33.boxFocused;
  }
  const obj12 = { style: items19, children: null };
  items19[1] = boxFocused;
  const obj13 = { style: tmp33.boxContents, children: null };
  const obj14 = {
    style: { paddingBottom: bound },
    children: ref1(projectId(running[31]).ContextMenu, {
      items: memo,
      align: "above",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(_modDef3715.gUn10I);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return closure_2_12(ChatInputActionButtonDefault, obj);
      }
    })
  };
  const items20 = [ref1(str, obj14), , ];
  const obj16 = { style: null, children: null };
  const items21 = [tmp33.input, { marginBottom: bound, height: bound2 }];
  obj16.style = items21;
  const obj17 = { ref: ref1, editable: canSend, shouldShowCursor: true, maxHeight: 120, verticalInset: bound1, placeholder: null, accessibilityLabel: null, onBeginFocus: null, onEndBlur: null, onChangeContentSize: null, onSelectionOrTextChange: null, onPasteImage: null };
  const obj15 = {
    items: memo,
    align: "above",
    children(arg0) {
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3715.gUn10I);
      obj.accessibilityActions = accessibilityActions;
      obj.onAccessibilityAction = onAccessibilityAction;
      return closure_2_12(ChatInputActionButtonDefault, obj);
    }
  };
  const tmp17Result = projectId(running[19]);
  let intl = tmp17(tmp18[10]).intl;
  const tmp24Result2 = canSend(running[11]);
  if (flag) {
    let nm4w9P = tmp24Result2.JeM47J;
  } else if (!canSend) {
    nm4w9P = tmp24Result2.nm4w9P;
  }
  obj17.placeholder = intl.string(nm4w9P);
  let intl2 = tmp17(tmp18[10]).intl;
  obj17.accessibilityLabel = intl2.string(canSend(running[11]).OPr66w);
  obj17.onBeginFocus = callback11;
  obj17.onEndBlur = callback12;
  obj17.onChangeContentSize = callback1;
  obj17.onSelectionOrTextChange = callback2;
  obj17.onPasteImage = callback5;
  obj16.children = ref1(canSend(running[33]), obj17);
  items20[1] = ref1(str, obj16);
  const obj18 = { style: null, children: null };
  const items22 = [tmp33.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  obj18.style = items22;
  if (stateFromStores) {
    let callback9Result = callback9(memo1[0]);
  } else {
    const obj19 = { items: memo1, renderItem: callback10, getItemKey: callback3 };
    callback9Result = tmp58(tmp17(tmp18[34]).TransitionGroup, obj19);
  }
  obj18.children = callback9Result;
  items20[2] = ref1(str, obj18);
  obj13.children = items20;
  obj12.children = c13(str, obj13);
  items18[4] = ref1(str, obj12);
  obj8.children = items18;
  return c13(str, obj8);
};