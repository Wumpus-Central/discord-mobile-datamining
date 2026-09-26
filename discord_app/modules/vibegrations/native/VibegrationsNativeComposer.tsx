// discord_app/modules/vibegrations/native/VibegrationsNativeComposer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3715 from "../intl/VibegrationsUntranslated.messages.js";
import SendMessageIcon from "../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import ActionSheetActionCreators from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import VibegrationsTypes from "../VibegrationsTypes.tsx";
import VibegrationsActionCreators from "../actions/VibegrationsActionCreators.tsx";
import PlusLargeIcon from "../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
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
const uploadAttachmentBytes = fn(12624).uploadAttachmentBytes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4836);
let obj2 = { container: { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, box: null, boxFocused: null, boxContents: null, input: null, inputText: null, inputPlaceholder: null, draftRow: null, draftPill: null, draftName: null, trailingButton: null, trailingSlot: null, sendButtonActive: null, sendIconActive: null };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.box = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj2.boxFocused = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj2.boxContents = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
let obj6 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj2.input = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 120, justifyContent: "center" };
let obj7 = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 120, justifyContent: "center" };
obj2.inputText = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_DEFAULT, includeFontPadding: false };
let obj8 = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_DEFAULT, includeFontPadding: false };
obj2.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
let obj9 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.draftRow = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.draftPill = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj2.draftName = { flexShrink: 1 };
let size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj2.trailingButton = size;
obj2.trailingSlot = { alignItems: "center", justifyContent: "center" };
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj2.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let obj12 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
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
  let callback2;
  closure_15 = undefined;
  let callback3;
  let callback4;
  closure_18 = undefined;
  c19 = undefined;
  let callback5;
  let stateFromStores1;
  let callback6;
  let callback7;
  const ref = onDismissTip.useRef(null);
  const tmp3 = onInterrupt(onDismissTip.useState(() => VibegrationsComposerDraftStore.getDraft(projectId)), 2);
  let str = tmp3[0];
  closure_7 = tmp4;
  let items = [projectId];
  const onChange = onDismissTip.useCallback((draft) => {
    VibegrationsActionCreators.setComposerDraft(projectId, draft);
    closure_7(draft);
  }, items);
  [tmp7, tmp8] = onInterrupt(onDismissTip.useState(null), 2);
  VibegrationsComposerDraftStore = tmp8;
  const ref1 = onDismissTip.useRef(null);
  const tmp10 = onInterrupt(onDismissTip.useState(projectId), 2);
  if (tmp10[0] !== projectId) {
    tmp10[1](projectId);
    tmp4(VibegrationsComposerDraftStore.getDraft(projectId));
    tmp8(null);
  }
  let items1 = [projectId];
  const effect = obj.useEffect(() => {
    const current = ref1.current;
    if (current != null) {
      current.setText(VibegrationsComposerDraftStore.getDraft(projectId));
    }
  }, items1);
  const tmp6 = onInterrupt(onDismissTip.useState(null), 2);
  const vibegrationsAttachmentDraftList = projectId(running[15]).useVibegrationsAttachmentDraftList(projectId, "chat");
  let obj2 = projectId(running[15]);
  [boxFocused, c11] = onInterrupt(onDismissTip.useState(false), 2);
  const tmp2Result = onInterrupt(onDismissTip.useState(false), 2);
  [tmp20, c12] = onInterrupt(onDismissTip.useState(null), 2);
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.contentSize.height);
  }, []);
  const tmp2Result2 = onInterrupt(onDismissTip.useState(null), 2);
  const token = projectId(running[16]).useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj3 = projectId(running[16]);
  const token1 = projectId(running[16]).useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj4 = projectId(running[16]);
  const token2 = projectId(running[16]).useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj5 = projectId(running[16]);
  const token3 = projectId(running[16]).useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj6 = projectId(running[16]);
  const items2 = [onChange];
  const stateFromStores = projectId(running[17]).useStateFromStores(items2, () => callback.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(callback2, Math.max(0, (token - 20) / 2));
  let tmp30 = null != tmp7;
  if (tmp30) {
    let _Math = Math;
    tmp30 = Math.ceil(tmp7) + 2 * bound1 > 120;
  }
  let tmp31 = closure_15();
  closure_13 = tmp31;
  const items3 = [projectId];
  callback2 = obj.useCallback((arr) => {
    if (0 !== arr.length) {
      let obj2 = require;
      let result = dependencyMap;
      const diff = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - vibegrationsAttachmentDrafts.getVibegrationsAttachmentDrafts(projectId, "chat").length;
      if (arr.length > diff) {
        let intl = obj2(1115).intl;
        let obj = { count: obj2(5371).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE };
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
                  obj8 = name(closure_2_2[13]);
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
            const intl = projectId(running[11]).intl;
            let obj4 = { size: null };
            const tmp6Result = projectId(running[13]);
            obj4.size = tmp6Result.formatVibegrationsAttachmentLimit(projectId(running[13]).vibegrationsAttachmentLimit(name.contentType));
            obj3.errorText = intl.formatToPlainString(canSend(running[12]).cI7t94, obj4);
            obj2.draft = obj3;
            return obj2;
          }
          obj9 = projectId(running[13]);
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
      obj2 = obj2(16400);
      result = obj2.addVibegrationsAttachmentDrafts(projectId, "chat", mapped);
    }
  }, items3);
  const items4 = [projectId];
  closure_15 = obj.useCallback((arg0) => vibegrationsAttachmentDrafts.removeVibegrationsAttachmentDraft(projectId, "chat", arg0), items4);
  const items5 = [callback2];
  callback3 = obj.useCallback(onSend(function*() {
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
            const obj5 = { mediaType: "any", selectionLimit: tmp2(5371).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: tmp5(5462).launchImageLibraryAsync(obj5), done: false };
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
  }), items5);
  const items6 = [callback2];
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
  }), items6);
  const items7 = [callback4, callback3];
  const memo = obj.useMemo(() => {
    const obj = { label: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3715.xE6M2k);
    obj.action = callback3;
    const items = [obj, ];
    const obj2 = { label: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3715.DN7KeU);
    obj2.action = callback4;
    items[1] = obj2;
    return items;
  }, items7);
  let obj7 = projectId(running[17]);
  const tmp37 = "" !== str.trim() || vibegrationsAttachmentDraftList.length > 0;
  closure_18 = tmp37;
  let tmp38 = canSend;
  if (canSend) {
    tmp38 = tmp37;
  }
  if (tmp38) {
    tmp38 = everyResult;
  }
  c19 = tmp38;
  const items8 = [onDismissTip, onSend, projectId, tmp38, onChange, str];
  callback5 = obj.useCallback(() => {
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
      const current = ref1.current;
      if (current != null) {
        current.setText("");
      }
      _undefined3(null);
      _undefined(null);
    }
  }, items8);
  everyResult = vibegrationsAttachmentDraftList.every((status) => "ready" === status.status);
  const items9 = [ref1];
  const items10 = [projectId];
  stateFromStores1 = projectId(running[17]).useStateFromStores(items9, () => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items10);
  const items11 = [projectId];
  callback6 = obj.useCallback(() => {
    const obj2 = { content: closure_2_12(VibegrationsModelSettingsSheetDefault, { projectId }), key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items11);
  const items12 = [tmp37, running, stateFromStores1, tmp38];
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
  }, items12);
  const items13 = [tmp31, canSend, onInterrupt, callback6, callback5];
  callback7 = obj.useCallback((key) => {
    if ("stop" === key.key) {
      const obj2 = { style: closure_13.trailingButton, IconComponent: StopIcon.StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: null };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(_modDef3715.KdgI4k);
      let tmp14 = closure_2_12(ChatInputActionButtonDefault, obj2);
    } else if ("models" === key.key) {
      const obj = { style: closure_13.trailingButton, IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon, onPress: callback6, disabled: !canSend, accessibilityLabel: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3715["2NWMqY"]);
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj);
    } else {
      const obj5 = { active: true, style: null, activeStyle: null, activeIconStyle: null, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
      ({ trailingButton: obj3.style, sendButtonActive: obj3.activeStyle, sendIconActive: obj3.activeIconStyle } = closure_13);
      obj5.IconComponent = SendMessageIcon.SendMessageIcon;
      const intl3 = util.intl;
      obj5.accessibilityLabel = intl3.string(util.t.TXNS7S);
      obj5.onPress = callback5;
      obj5.disabled = !key.sendable;
      tmp14 = closure_2_12(ChatInputActionButtonDefault, obj5);
    }
    return tmp14;
  }, items13);
  const items14 = [callback7];
  const callback8 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback7(arg1) };
    return closure_2_12(ChatInputActionButtonTransitionItemDefault, obj, arg0);
  }, items14);
  const callback9 = obj.useCallback(() => _undefined2(true), []);
  let obj8 = { ref, style: tmp31.container, children: null };
  let tmp49 = null;
  const callback10 = obj.useCallback(() => _undefined2(false), []);
  if (null != onDismissTip) {
    let obj9 = { targetRef: ref, visible: flag2, onDismiss: onDismissTip };
    tmp49 = c12(tmp22(tmp17[27]), obj9);
  }
  const items15 = [tmp49, , , ];
  let tmp51 = null;
  if (null != tmp20) {
    const obj10 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp20 };
    tmp51 = c12(tmp16(tmp17[28]).Text, obj10);
  }
  items15[1] = tmp51;
  let tmp53 = null;
  if (vibegrationsAttachmentDraftList.length > 0) {
    const obj11 = {
      style: tmp31.draftRow,
      children: vibegrationsAttachmentDraftList.map((children) => {
          const localId = children;
          const obj = { style: closure_13.draftPill, children: null };
          let tmp4 = null;
          if ("uploading" === children.status) {
            const obj2 = { size: "small", accessibilityLabel: null };
            const intl = projectId(running[11]).intl;
            const obj3 = { name: children.name };
            obj2.accessibilityLabel = intl.formatToPlainString(canSend(running[12]).sFX7H4, obj3);
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
          const intl2 = projectId(running[11]).intl;
          obj7.accessibilityLabel = intl2.string(canSend(running[12])["3HWvgk"]);
          obj7.onPress = function onPress() {
            return closure_15(localId.localId);
          };
          obj7.children = _undefined3(projectId(running[30]).CircleXIcon, { size: "xs" });
          items[2] = _undefined3(projectId(running[29]).PressableOpacity, obj7);
          obj.children = items;
          return closure_13(closure_7, obj, children.localId);
        })
    };
    tmp53 = c12(tmp48, obj11);
  }
  items15[2] = tmp53;
  const items16 = [tmp31.box, ];
  if (boxFocused) {
    boxFocused = tmp31.boxFocused;
  }
  const obj12 = { style: items16, children: null };
  items16[1] = boxFocused;
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
  const items17 = [c12(closure_7, obj14), , ];
  const obj16 = { multiline: true, allowRedesignTextInput: false, showBorder: false, showTopContainer: false, ref: ref1, style: null, inputTextStyle: null, textAlignVertical: "center", editable: canSend, placeholder: null, placeholderTextColor: null, accessibilityLabel: null, value: null, onChange: null, onFocus: null, onBlur: null, onContentSizeChange: null, scrollEnabled: null };
  const items18 = [tmp31.input, { marginBottom: bound, minHeight: token }];
  obj16.style = items18;
  const items19 = [tmp31.inputText, { paddingTop: bound1, paddingBottom: bound1 }];
  obj16.inputTextStyle = items19;
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
  const tmp16Result = projectId(running[17]);
  let intl = tmp16(tmp17[11]).intl;
  const tmp22Result2 = canSend(running[12]);
  if (flag) {
    let nm4w9P = tmp22Result2.JeM47J;
  } else if (!canSend) {
    nm4w9P = tmp22Result2.nm4w9P;
  }
  obj16.placeholder = intl.string(nm4w9P);
  obj16.placeholderTextColor = tmp31.inputPlaceholder.color;
  let intl2 = tmp16(tmp17[11]).intl;
  obj16.accessibilityLabel = intl2.string(canSend(running[12]).OPr66w);
  obj16.value = str;
  obj16.onChange = onChange;
  obj16.onFocus = callback9;
  obj16.onBlur = callback10;
  obj16.onContentSizeChange = callback1;
  obj16.scrollEnabled = tmp30;
  items17[1] = c12(canSend(running[33]), obj16);
  const obj17 = { style: null, children: null };
  const items20 = [tmp31.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  obj17.style = items20;
  if (stateFromStores) {
    let callback7Result = callback7(memo1[0]);
  } else {
    const obj18 = { items: memo1, renderItem: callback8, getItemKey: callback3 };
    callback7Result = tmp55(tmp16(tmp17[34]).TransitionGroup, obj18);
  }
  obj17.children = callback7Result;
  items17[2] = c12(closure_7, obj17);
  obj13.children = items17;
  obj12.children = closure_13(closure_7, obj13);
  items15[3] = c12(closure_7, obj12);
  obj8.children = items15;
  return closure_13(closure_7, obj8);
};