// discord_app/modules/vibegrations/native/VibegrationsNativeComposer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import VibegrationsTypes from "../VibegrationsTypes.tsx";
import VibegrationsActionCreators from "../actions/VibegrationsActionCreators.tsx";
import PlusLargeIcon from "../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
import ChatInputNativeCommandsDefault from "../../chat_input/native/ChatInputNativeCommands.tsx";
import ChatInputActionButtonDefault from "../../chat_input/native/action_buttons/ChatInputActionButton.tsx";
import ChatInputActionButtonTransitionItemDefault from "../../chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx";
import FiltersHorizontalIcon from "../../../design/components/Icon/native/redesign/generated/FiltersHorizontalIcon.tsx";
import StopIcon from "../../../design/components/Icon/native/redesign/generated/StopIcon.tsx";
import VibegrationsModelSettingsSheet from "VibegrationsModelSettingsSheet.tsx";
import vibegrationsAttachmentDrafts from "../lib/vibegrationsAttachmentDrafts.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import VibegrationsComposerDraftStore from "../stores/VibegrationsComposerDraftStore.tsx";
import VibegrationsConnectionStore from "../stores/VibegrationsConnectionStore.tsx";

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
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const uploadAttachmentBytes = fn(12812).uploadAttachmentBytes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4836);
let obj2 = { container: { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, box: null, boxFocused: null, boxContents: null, input: null, draftRow: null, draftPill: null, draftName: null, trailingButton: null, trailingSlot: null, sendButtonActive: null, sendIconActive: null };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.box = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj2.boxFocused = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj2.boxContents = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
let obj6 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj2.input = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
let obj7 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj2.draftRow = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj8 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.draftPill = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj2.draftName = { flexShrink: 1 };
let size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj2.trailingButton = size;
obj2.trailingSlot = { alignItems: "center", justifyContent: "center" };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj2.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let obj10 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
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
  c11 = undefined;
  c12 = undefined;
  closure_13 = undefined;
  let callback3;
  closure_15 = undefined;
  let callback4;
  let callback6;
  closure_18 = undefined;
  c19 = undefined;
  let callback7;
  let stateFromStores1;
  let callback8;
  let callback9;
  const ref = onDismissTip.useRef(null);
  const tmp3 = onInterrupt(onDismissTip.useState(() => VibegrationsComposerDraftStore.getDraft(projectId)), 2);
  let str = tmp3[0];
  closure_7 = tmp4;
  let items = [projectId];
  const callback = onDismissTip.useCallback((draft) => {
    VibegrationsActionCreators.setComposerDraft(projectId, draft);
    closure_7(draft);
  }, items);
  [num, tmp7] = onInterrupt(onDismissTip.useState(null), 2);
  VibegrationsComposerDraftStore = tmp7;
  const ref1 = onDismissTip.useRef(null);
  let tmp9 = onInterrupt(onDismissTip.useState(projectId), 2);
  if (tmp9[0] !== projectId) {
    tmp9[1](projectId);
    tmp4(VibegrationsComposerDraftStore.getDraft(projectId));
    tmp7(null);
  }
  let items1 = [projectId];
  const effect = obj.useEffect(() => {
    ChatInputNativeCommandsDefault.setText(ref1.current, VibegrationsComposerDraftStore.getDraft(projectId));
  }, items1);
  const tmp6 = onInterrupt(onDismissTip.useState(null), 2);
  const vibegrationsAttachmentDraftList = projectId(running[15]).useVibegrationsAttachmentDraftList(projectId, "chat");
  let obj2 = projectId(running[15]);
  [boxFocused, c11] = onInterrupt(onDismissTip.useState(false), 2);
  const tmp2Result = onInterrupt(onDismissTip.useState(false), 2);
  [tmp19, c12] = onInterrupt(onDismissTip.useState(null), 2);
  const items2 = [callback, str];
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.height);
  }, []);
  const callback2 = obj.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    if (nativeEvent.text !== str) {
      callback(nativeEvent.text);
    }
  }, items2);
  const tmp2Result2 = onInterrupt(onDismissTip.useState(null), 2);
  const token = projectId(running[16]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = projectId(running[16]);
  const token1 = projectId(running[16]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj4 = projectId(running[16]);
  const token2 = projectId(running[16]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj5 = projectId(running[16]);
  const token3 = projectId(running[16]).useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj6 = projectId(running[16]);
  const items3 = [callback];
  const stateFromStores = projectId(running[17]).useStateFromStores(items3, () => callback.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(callback3, Math.max(0, (token - 20) / 2));
  const bound2 = Math.min(120, Math.max(token, num));
  let tmp31 = closure_15();
  closure_13 = tmp31;
  const items4 = [projectId];
  callback3 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      let obj2 = require;
      let result = dependencyMap;
      const diff = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - vibegrationsAttachmentDrafts.getVibegrationsAttachmentDrafts(projectId, "chat").length;
      if (arr.length > diff) {
        let intl = obj2(1115).intl;
        let obj = { count: obj2(5537).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE };
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
        let obj = { name: name.name, contentType: name.contentType };
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
      obj2 = obj2(16574);
      result = obj2.addVibegrationsAttachmentDrafts(projectId, "chat", mapped);
    }
  }, items4);
  const items5 = [projectId];
  closure_15 = obj.useCallback((arg0) => vibegrationsAttachmentDrafts.removeVibegrationsAttachmentDraft(projectId, "chat", arg0), items5);
  const items6 = [callback3];
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
            const obj5 = { mediaType: "any", selectionLimit: tmp2(5537).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: tmp5(5629).launchImageLibraryAsync(obj5), done: false };
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
            closure_129_14(assets.map((uri) => {
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
  }), items6);
  const items7 = [callback3, canSend];
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
  }, items7);
  const items8 = [callback3];
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
            const obj5 = { value: tmp2(c2[19]).handleDocumentSelection({ pickMultiple: true }), done: false };
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
            closure_129_14(closure_128_0.map((uri) => {
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
  }), items8);
  const items9 = [callback6, callback4];
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
  }, items9);
  let obj7 = projectId(running[17]);
  const tmp38 = "" !== str.trim() || vibegrationsAttachmentDraftList.length > 0;
  closure_18 = tmp38;
  let tmp39 = canSend;
  if (canSend) {
    tmp39 = tmp38;
  }
  if (tmp39) {
    tmp39 = everyResult;
  }
  c19 = tmp39;
  const items10 = [onDismissTip, onSend, projectId, tmp39, callback, str];
  callback7 = obj.useCallback(() => {
    if (c19) {
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
  }, items10);
  everyResult = vibegrationsAttachmentDraftList.every((status) => "ready" === status.status);
  const items11 = [ref1];
  const items12 = [projectId];
  stateFromStores1 = projectId(running[17]).useStateFromStores(items11, () => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items12);
  const items13 = [projectId];
  callback8 = obj.useCallback(() => {
    const obj2 = { content: closure_2_12(VibegrationsModelSettingsSheetDefault, { projectId }), key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items13);
  const items14 = [tmp38, running, stateFromStores1, tmp39];
  const memo1 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_18) {
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
  }, items14);
  const items15 = [tmp31, canSend, onInterrupt, callback8, callback7];
  callback9 = obj.useCallback((key) => {
    if ("stop" === key.key) {
      const obj2 = { style: closure_13.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(_modDef3715.KdgI4k);
      let tmp14 = closure_2_12(ChatInputActionButtonDefault, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_13.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback8, disabled: !canSend, accessibilityLabel: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3715["2NWMqY"]);
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj);
    } else {
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_13);
      obj5.IconComponent = SendMessageIcon.SendMessageIcon;
      const intl3 = util.intl;
      obj5.accessibilityLabel = intl3.string(util.t.TXNS7S);
      obj5.onPress = callback7;
      obj5.disabled = !key.sendable;
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj5);
    }
    return tmp14;
  }, items15);
  const items16 = [callback9];
  const callback10 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback9(arg1) };
    return closure_2_12(ChatInputActionButtonTransitionItemDefault, obj, arg0);
  }, items16);
  const callback11 = obj.useCallback(() => _undefined2(true), []);
  let obj8 = { ref, style: tmp31.container, children: null };
  let tmp50 = null;
  const callback12 = obj.useCallback(() => _undefined2(false), []);
  if (null != onDismissTip) {
    let obj9 = { targetRef: ref, visible: flag2, onDismiss: onDismissTip };
    tmp50 = c12(tmp22(tmp16[27]), obj9);
  }
  const items17 = [tmp50, , , ];
  let tmp52 = null;
  if (null != tmp19) {
    const obj10 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp19 };
    tmp52 = c12(tmp15(tmp16[28]).Text, obj10);
  }
  items17[1] = tmp52;
  let tmp54 = null;
  if (vibegrationsAttachmentDraftList.length > 0) {
    const obj11 = {
      style: tmp31.draftRow,
      children: vibegrationsAttachmentDraftList.map((children) => {
          const localId = children;
          const obj = { style: closure_13.draftPill, children: null };
          let tmp4 = null;
          if ("uploading" === children.status) {
            const obj2 = { size: "small", accessibilityLabel: null };
            const intl = projectId(running[10]).intl;
            const obj3 = { name: children.name };
            obj2.accessibilityLabel = intl.formatToPlainString(canSend(running[11]).sFX7H4, obj3);
            tmp4 = _undefined3(str, obj2);
          }
          const items = [tmp4, , ];
          const obj4 = { style: closure_13.draftName, children: null };
          str = "text-default";
          if ("error" === children.status) {
            str = "text-feedback-critical";
          }
          const items1 = [_undefined3(projectId(running[28]).Text, { variant: "text-xs/medium", color: str, lineClamp: 1, children: children.name }), ];
          let tmp10Result = null;
          if (null != children.errorText) {
            const obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: children.errorText };
            tmp10Result = _undefined3(projectId(running[28]).Text, obj6);
          }
          items1[1] = tmp10Result;
          obj4.children = items1;
          items[1] = closure_13(closure_7, obj4);
          const obj7 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 12, onPress: null, children: null };
          const intl2 = projectId(running[10]).intl;
          obj7.accessibilityLabel = intl2.string(canSend(running[11])["3HWvgk"]);
          obj7.onPress = function onPress() {
            return closure_15(localId.localId);
          };
          obj7.children = _undefined3(projectId(running[30]).CircleXIcon, { size: "xs" });
          items[2] = _undefined3(projectId(running[29]).PressableOpacity, obj7);
          obj.children = items;
          return closure_13(closure_7, obj, children.localId);
        })
    };
    tmp54 = c12(tmp49, obj11);
  }
  items17[2] = tmp54;
  const items18 = [tmp31.box, ];
  if (boxFocused) {
    boxFocused = tmp31.boxFocused;
  }
  const obj12 = { style: items18, children: null };
  items18[1] = boxFocused;
  const obj13 = { style: tmp31.boxContents, children: null };
  const obj14 = {
    style: { paddingBottom: bound },
    children: c12(projectId(running[31]).ContextMenu, {
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
  const items19 = [c12(closure_7, obj14), , ];
  const obj16 = { style: null, children: null };
  const items20 = [tmp31.input, { marginBottom: bound, height: bound2 }];
  obj16.style = items20;
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
  const tmp15Result = projectId(running[17]);
  let intl = tmp15(tmp16[10]).intl;
  const tmp22Result2 = canSend(running[11]);
  if (flag) {
    let nm4w9P = tmp22Result2.JeM47J;
  } else if (!canSend) {
    nm4w9P = tmp22Result2.nm4w9P;
  }
  obj17.placeholder = intl.string(nm4w9P);
  let intl2 = tmp15(tmp16[10]).intl;
  obj17.accessibilityLabel = intl2.string(canSend(running[11]).OPr66w);
  obj17.onBeginFocus = callback11;
  obj17.onEndBlur = callback12;
  obj17.onChangeContentSize = callback1;
  obj17.onSelectionOrTextChange = callback2;
  obj17.onPasteImage = callback5;
  obj16.children = c12(canSend(running[33]), obj17);
  items19[1] = c12(closure_7, obj16);
  const obj18 = { style: null, children: null };
  const items21 = [tmp31.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  obj18.style = items21;
  if (stateFromStores) {
    let callback9Result = callback9(memo1[0]);
  } else {
    const obj19 = { items: memo1, renderItem: callback10, getItemKey: callback4 };
    callback9Result = tmp56(tmp15(tmp16[34]).TransitionGroup, obj19);
  }
  obj18.children = callback9Result;
  items19[2] = c12(closure_7, obj18);
  obj13.children = items19;
  obj12.children = closure_13(closure_7, obj13);
  items17[3] = c12(closure_7, obj12);
  obj8.children = items17;
  return closure_13(closure_7, obj8);
};