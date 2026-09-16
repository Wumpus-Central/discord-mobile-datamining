// === Module 16790: VibegrationsNativeComposer ===

// Module 16790 (VibegrationsNativeComposer)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3591 from "module_3591" /* 3591 */;
import VibegrationsTypes from "VibegrationsTypes" /* 7355 */;
import PlusLargeIcon from "PlusLargeIcon" /* 11101 */;
import ChatInputActionButtonDefault from "ChatInputActionButton" /* 12381 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 16730 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import VibegrationsComposerDraftStore from "VibegrationsComposerDraftStore" /* 16791 */;

const require = globalThis.__r;

require = fn;
function tooLargeText(contentType) {
  const intl = util.intl;
  const obj = { size: null };
  const obj2 = VibegrationsTypes;
  obj.size = obj2.formatVibegrationsAttachmentLimit(VibegrationsTypes.vibegrationsAttachmentLimit(contentType));
  return intl.formatToPlainString(_modDef3591.cI7t94, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const VibegrationsConnectionStore = fn(16725);
({ deleteStagedAttachment: closure_9, uploadAttachmentBytes: c10 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, box: null, boxFocused: null, boxContents: null, input: null, inputText: null, inputPlaceholder: null, draftRow: null, draftPill: null, draftName: null, trailingButton: null, sendButtonActive: null, sendIconActive: null };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.box = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
obj2.boxFocused = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
let obj5 = { backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
obj2.boxContents = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
let obj6 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
obj2.input = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, minHeight: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, maxHeight: 120, justifyContent: "center" };
let obj7 = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, minHeight: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, maxHeight: 120, justifyContent: "center" };
obj2.inputText = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
let obj8 = { fontSize: 16, lineHeight: 20, fontFamily: fn(1074).Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj2.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
let obj9 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.draftRow = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.draftPill = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj2.draftName = { flexShrink: 1 };
let size = { width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
obj2.trailingButton = size;
const obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.round, paddingLeft: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4 };
obj2.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
const obj12 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj2.sendIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_13 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeComposer.tsx");

export default function VibegrationsNativeComposer(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  const canSend = projectId.canSend;
  ({ running, stopped } = projectId);
  if (stopped === undefined) {
    stopped = false;
  }
  let onSend = projectId.onSend;
  const onInterrupt = projectId.onInterrupt;
  str = undefined;
  let onChange;
  c6 = undefined;
  c7 = undefined;
  VibegrationsComposerDraftStore = undefined;
  c9 = undefined;
  let draftPill;
  closure_11 = undefined;
  closure_12 = undefined;
  let ref;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  closure_18 = undefined;
  let callback6;
  let callback7;
  c21 = undefined;
  [str] = onChange.useState(() => VibegrationsComposerDraftStore.getDraft(closure_0));
  _slicedToArray = tmp3;
  let items = [projectId];
  onChange = onChange.useCallback((draft) => {
    VibegrationsActionCreators.setComposerDraft(closure_0, draft);
    closure_4(draft);
  }, items);
  const tmp5 = _slicedToArray(onChange.useState(projectId), 2);
  if (tmp5[0] !== projectId) {
    tmp5[1](projectId);
    tmp3(VibegrationsComposerDraftStore.getDraft(projectId));
  }
  [arr2, c6] = onChange.useState([]);
  const tmpResult = _slicedToArray(onChange.useState([]), 2);
  [boxFocused, c7] = onChange.useState(false);
  const tmpResult4 = _slicedToArray(onChange.useState(false), 2);
  [tmp12, c8] = onChange.useState(null);
  const tmpResult5 = _slicedToArray(onChange.useState(null), 2);
  [tmp14, c9] = onChange.useState(null);
  let tmp16 = null != tmp14;
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.contentSize.height);
  }, []);
  if (tmp16) {
    let _Math = Math;
    tmp16 = Math.ceil(tmp14) + 16 > 120;
  }
  const tmp18 = ref();
  draftPill = tmp18;
  closure_11 = obj.useRef(arr2);
  closure_12 = obj.useRef(1);
  const tmpResult6 = _slicedToArray(onChange.useState(null), 2);
  ref = obj.useRef(new Set());
  callback2 = obj.useCallback((current) => {
    closure_11.current = current;
    _undefined(current);
  }, []);
  callback3 = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const current = closure_11.current;
    closure_11.current = current.map((localId) => {
      let tmp = localId;
      if (localId.localId === closure_0) {
        const obj = {};
        const merged = Object.assign(localId);
        const merged1 = Object.assign(closure_1);
        tmp = obj;
      }
      return tmp;
    });
    _undefined(closure_11.current);
  }, []);
  let items1 = [projectId];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    return () => {
      const iter = ref.current[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let addResult = current.add(nextResult.localId);
        if (null != nextResult.ref) {
          let promise = React7(closure_0, tmp2.ref.id);
          let catchPromise = promise.catch(() => {

          });
        }
        continue;
      }
    };
  }, items1);
  _require = str(function*(arg0, arg1, arg2, arg3) {
    closure_5 = tmp3;
    closure_132_0 = closure_0;
    closure_132_1 = closure_2;
    closure_132_2 = closure_3;
    const _fetch = fetch;
    yield fetch(closure_1);
    if (1 === tmp7) {
      c6 = 0;
      const current = ref.current;
      if (current.has(closure_132_0)) {
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else {
        const obj6 = { status: "error", errorText: null };
        const intl = closure_0(onSend[10]).intl;
        obj6.errorText = intl.string(canSend(onSend[11]).GwEHvn);
        callback3(closure_132_0, obj6);
        c8 = 3;
      }
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        return { value, done: true };
      } else {
        c7 = 3;
        c8 = 1;
        return { value: value.blob(), done: false };
      }
    } else if (3 === tmp7) {
      if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        return { value, done: true };
      } else {
        closure_132_3 = value;
        const current3 = ref.current;
        if (current3.has(closure_132_0)) {
          c6 = 0;
          c8 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          if (obj4.isVibegrationsAttachmentWithinLimit(closure_132_3.size, closure_132_2)) {
            c7 = 4;
            c8 = 1;
            return { value: draftPill(closure_0, closure_132_3, closure_132_1, closure_132_2), done: false };
          } else {
            callback3(closure_132_0, { status: "error", errorText: callback2(closure_132_2) });
            c6 = 0;
            c8 = 3;
            return { value: undefined, done: true };
          }
          obj4 = closure_0(onSend[12]);
        }
      }
    } else if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 0;
      c8 = 3;
      return { value, done: true };
    } else {
      closure_132_4 = value;
      const current2 = ref.current;
      if (!current2.has(closure_132_0)) {
        callback3(closure_132_0, { status: "ready", ref: closure_132_4 });
        c6 = 0;
      }
    }
    _undefined4(closure_0, closure_132_4.id).catch(() => {

    });
  });
  const items2 = [callback3, projectId];
  callback4 = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items2);
  const items3 = [callback2, callback4];
  callback5 = obj.useCallback((arg0) => {
    let map = arg0;
    if (0 !== arg0.length) {
      let VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = dependencyMap;
      let tmp15 = closure_11;
      const diff = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - closure_11.current.length;
      if (map.length > diff) {
        let intl = util.intl;
        let obj = { count: null };
        VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
        obj.count = VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
        _undefined3(intl.formatToPlainString(_modDef3591.DlX57a, obj));
        const _Math = Math;
        const substr = map.slice(0, Math.max(0, diff));
        let arr2 = substr;
      } else {
        _undefined3(null);
        arr2 = map;
      }
      const mapped = arr2.map((name) => {
        let tmp = null != name.size;
        if (tmp) {
          tmp = !closure_0(onSend[12]).isVibegrationsAttachmentWithinLimit(name.size, name.contentType);
          const obj = closure_0(onSend[12]);
        }
        const obj2 = { localId: +ref.current, name: name.name, contentType: name.contentType, status: null, errorText: null };
        ref.current = +ref.current + 1;
        str = "uploading";
        if (tmp) {
          str = "error";
        }
        obj2.status = str;
        let formatToPlainStringResult;
        if (tmp) {
          const intl = closure_0(onSend[10]).intl;
          const obj3 = { size: null };
          const obj4 = closure_0(onSend[12]);
          obj3.size = obj4.formatVibegrationsAttachmentLimit(closure_0(onSend[12]).vibegrationsAttachmentLimit(name.contentType));
          formatToPlainStringResult = intl.formatToPlainString(canSend(onSend[11]).cI7t94, obj3);
          const obj5 = closure_0(onSend[12]);
        }
        obj2.errorText = formatToPlainStringResult;
        return { draft: obj2, uri: name.uri };
      });
      const items = [];
      map = mapped.map;
      HermesBuiltin.arraySpread(map((draft) => draft.draft), HermesBuiltin.arraySpread(tmp15.current, 0));
      callback2(items);
      tmp15 = mapped[Symbol.iterator]();
      const arraySpreadResult = HermesBuiltin.arraySpread(tmp15.current, 0);
    }
  }, items3);
  const items4 = [projectId, callback2];
  closure_18 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    const current = ref.current;
    current.add(arg0);
    const current1 = closure_11.current;
    const found = current1.find((localId) => localId.localId === closure_0);
    ref = undefined;
    if (found != null) {
      ref = found.ref;
    }
    if (null != ref) {
      React7(closure_0, found.ref.id).catch(() => {

      });
      const promise = React7(closure_0, found.ref.id);
    }
    const current2 = closure_11.current;
    callback2(current2.filter((localId) => localId.localId !== closure_0));
  }, items4);
  const items5 = [callback5];
  callback6 = obj.useCallback(str(function*() {
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
            const obj5 = { mediaType: "any", selectionLimit: tmp2(7355).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE, skipProcessing: true };
            dependencyMap = 1;
            c3 = 1;
            const obj6 = { value: tmp5(5235).launchImageLibraryAsync(obj5), done: false };
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
            closure_129_17(assets.map((uri) => {
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
  const items6 = [callback5];
  callback7 = obj.useCallback(str(function*() {
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
        if (0 === onSend) {
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
            onSend = 1;
            c3 = 1;
            const obj5 = { value: tmp2(onSend[15]).handleDocumentSelection({ pickMultiple: true }), done: false };
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
            closure_129_17(closure_128_0.map((uri) => {
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
  const items7 = [callback7, callback6];
  const memo = obj.useMemo(() => {
    const obj = { label: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3591.xE6M2k);
    obj.action = callback6;
    const items = [obj, ];
    const obj2 = { label: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3591.DN7KeU);
    obj2.action = callback7;
    items[1] = obj2;
    return items;
  }, items7);
  const set = new Set();
  let tmp29 = "" !== str.trim();
  if (!tmp29) {
    tmp29 = arr2.length > 0;
  }
  let tmp30 = canSend;
  if (canSend) {
    tmp30 = tmp29;
  }
  if (tmp30) {
    tmp30 = everyResult;
  }
  c21 = tmp30;
  const items8 = [onSend, callback2, tmp30, onChange, str];
  const callback8 = obj.useCallback(() => {
    if (c21) {
      const current = closure_11.current;
      const found = current.filter((ref) => null != ref.ref);
      const mapped = found.map((ref) => ref.ref);
      let tmp4;
      if (mapped.length > 0) {
        tmp4 = mapped;
      }
      onSend(str, tmp4);
      callback("");
      _undefined3(null);
      _undefined4(null);
      callback2([]);
    }
  }, items8);
  const callback9 = obj.useCallback(() => _undefined2(true), []);
  let obj2 = { style: tmp18.container, children: null };
  let tmp36 = null;
  const callback10 = obj.useCallback(() => _undefined2(false), []);
  if (null != tmp12) {
    let obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp12 };
    tmp36 = closure_11(require("Text/Text").Text, obj3);
  }
  const items9 = [tmp36, , ];
  let tmp40 = null;
  if (arr2.length > 0) {
    let obj4 = {
      style: tmp18.draftRow,
      children: arr2.map((children) => {
          const localId = children;
          const obj = { style: draftPill.draftPill, children: null };
          let tmp4 = null;
          if ("uploading" === children.status) {
            const obj2 = { size: "small", accessibilityLabel: null };
            const intl = localId(onSend[10]).intl;
            const obj3 = { name: children.name };
            obj2.accessibilityLabel = intl.formatToPlainString(canSend(onSend[11]).sFX7H4, obj3);
            tmp4 = closure_11(c6, obj2);
          }
          const items = [tmp4, , ];
          const obj4 = { style: draftPill.draftName, children: null };
          str = "text-default";
          if ("error" === children.status) {
            str = "text-feedback-critical";
          }
          const items1 = [closure_11(localId(onSend[16]).Text, { variant: "text-xs/medium", color: str, lineClamp: 1, children: children.name }), ];
          let tmp10Result = null;
          if (null != children.errorText) {
            const obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: children.errorText };
            tmp10Result = closure_11(tmp11(onSend[16]).Text, obj6);
          }
          items1[1] = tmp10Result;
          obj4.children = items1;
          items[1] = closure_12(c7, obj4);
          const obj7 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 12, onPress: null, children: null };
          const intl2 = tmp11(onSend[10]).intl;
          obj7.accessibilityLabel = intl2.string(canSend(onSend[11])["3HWvgk"]);
          obj7.onPress = function onPress() {
            return closure_18(localId.localId);
          };
          obj7.children = closure_11(localId(onSend[18]).CircleXIcon, { size: "xs" });
          items[2] = closure_11(localId(onSend[17]).PressableOpacity, obj7);
          obj.children = items;
          return closure_12(c7, obj, children.localId);
        })
    };
    tmp40 = closure_11(tmp35, obj4);
  }
  items9[1] = tmp40;
  const items10 = [tmp18.box, ];
  if (boxFocused) {
    boxFocused = tmp18.boxFocused;
  }
  let obj5 = { style: items10, children: null };
  items10[1] = boxFocused;
  let obj6 = { style: tmp18.boxContents, children: null };
  const items11 = [
    closure_11(require("ContextMenu").ContextMenu, {
      items: memo,
      align: "above",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(_modDef3591.gUn10I);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return closure_2_11(ChatInputActionButtonDefault, obj);
      }
    }),
  ,
  ,

  ];
  const obj8 = { multiline: true, allowRedesignTextInput: false, showBorder: false, showTopContainer: false, style: tmp18.input, inputTextStyle: tmp18.inputText, textAlignVertical: "center", editable: canSend, placeholder: null, placeholderTextColor: null, accessibilityLabel: null, value: null, onChange: null, onFocus: null, onBlur: null, onContentSizeChange: null, scrollEnabled: null };
  everyResult = arr2.every((status) => "ready" === status.status);
  let obj7 = {
    items: memo,
    align: "above",
    children(arg0) {
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: PlusLargeIcon.PlusLargeIcon, onPress, disabled: !canSend, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3591.gUn10I);
      obj.accessibilityActions = accessibilityActions;
      obj.onAccessibilityAction = onAccessibilityAction;
      return closure_2_11(ChatInputActionButtonDefault, obj);
    }
  };
  let intl = require("util").intl;
  const tmp47 = canSend(onSend[11]);
  if (stopped) {
    let nm4w9P = tmp47.JeM47J;
  } else if (!canSend) {
    nm4w9P = tmp47.nm4w9P;
  }
  obj8.placeholder = intl.string(nm4w9P);
  obj8.placeholderTextColor = tmp18.inputPlaceholder.color;
  let intl2 = tmp43(tmp44[10]).intl;
  obj8.accessibilityLabel = intl2.string(canSend(onSend[11]).OPr66w);
  obj8.value = str;
  obj8.onChange = onChange;
  obj8.onFocus = callback9;
  obj8.onBlur = callback10;
  obj8.onContentSizeChange = callback1;
  obj8.scrollEnabled = tmp16;
  items11[1] = closure_11(canSend(onSend[22]), obj8);
  let tmp42Result = null;
  if (running) {
    const obj9 = { style: tmp18.trailingButton, IconComponent: tmp43(tmp44[23]).StopIcon, onPress: onInterrupt, disabled: null == onInterrupt, accessibilityLabel: null };
    const intl3 = tmp43(tmp44[10]).intl;
    obj9.accessibilityLabel = intl3.string(tmp45(tmp44[11]).KdgI4k);
    tmp42Result = tmp42(tmp45(tmp44[20]), obj9);
    const tmp45Result = tmp45(tmp44[20]);
  }
  items11[2] = tmp42Result;
  const obj10 = { active: true, style: tmp18.trailingButton, activeStyle: tmp18.sendButtonActive, activeIconStyle: tmp18.sendIconActive, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
  const tmp46 = canSend(onSend[22]);
  obj10.IconComponent = require("SendMessageIcon").SendMessageIcon;
  const intl4 = tmp43(tmp44[10]).intl;
  obj10.accessibilityLabel = intl4.string(require("util").t.TXNS7S);
  obj10.onPress = callback8;
  obj10.disabled = !tmp30;
  items11[3] = closure_11(canSend(onSend[20]), obj10);
  obj6.children = items11;
  obj5.children = closure_12(c7, obj6);
  items9[2] = closure_11(c7, obj5);
  obj2.children = items9;
  return closure_12(c7, obj2);
};