// discord_app/modules/vibegrations/native/VibegrationsNativeComposer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3547 from "../intl/VibegrationsUntranslated.messages.js";
import VibegrationsTypes from "../VibegrationsTypes.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function tooLargeText(contentType) {
  const intl = util.intl;
  const obj = { size: null };
  const obj2 = VibegrationsTypes;
  obj.size = obj2.formatVibegrationsAttachmentLimit(VibegrationsTypes.vibegrationsAttachmentLimit(contentType));
  return intl.formatToPlainString(_modDef3547.cI7t94, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const VibegrationsConnectionStore = fn(16589);
({ deleteStagedAttachment: closure_8, uploadAttachmentBytes: closure_9 } = VibegrationsConnectionStore);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  box: null,
  boxFocused: null,
  boxContents: null,
  input: null,
  inputText: null,
  inputPlaceholder: null,
  draftRow: null,
  draftPill: null,
  draftName: null,
  trailingButton: null,
  sendButtonActive: null,
  sendIconActive: null,
};
createStyles = {
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
  paddingVertical: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
createStyles.container = createStyles;
createStyles.box = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
  overflow: "hidden",
};
let obj1 = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
  overflow: "hidden",
};
createStyles.boxFocused = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
};
let obj2 = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
};
createStyles.boxContents = {
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
  paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
  gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
  paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
  gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
};
createStyles.input = {
  flex: 1,
  paddingVertical: 0,
  paddingHorizontal: nativeDefault.space.PX_4,
  minHeight: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
  maxHeight: 120,
  justifyContent: "center",
};
let obj4 = {
  flex: 1,
  paddingVertical: 0,
  paddingHorizontal: nativeDefault.space.PX_4,
  minHeight: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE,
  maxHeight: 120,
  justifyContent: "center",
};
createStyles.inputText = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: fn(1074).Fonts.PRIMARY_NORMAL,
  color: nativeDefault.colors.TEXT_DEFAULT,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
};
let obj5 = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: fn(1074).Fonts.PRIMARY_NORMAL,
  color: nativeDefault.colors.TEXT_DEFAULT,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_8,
};
createStyles.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
let obj6 = { color: nativeDefault.colors.TEXT_MUTED };
createStyles.draftRow = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj7 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
createStyles.draftPill = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingLeft: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
};
createStyles.draftName = { flexShrink: 1 };
let size = {
  width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH,
  height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
};
createStyles.trailingButton = size;
const obj8 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingLeft: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
};
createStyles.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
const obj9 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
createStyles.sendIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_12 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeComposer.tsx");

export default function VibegrationsNativeComposer(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
  ({ canSend, running, onSend } = projectId);
  const onInterrupt = projectId.onInterrupt;
  _slicedToArray = undefined;
  noop = undefined;
  c6 = undefined;
  c7 = undefined;
  let draftPill;
  closure_9 = undefined;
  closure_10 = undefined;
  let ref;
  let callback1;
  let callback2;
  let callback3;
  let callback4;
  closure_16 = undefined;
  let callback5;
  let callback6;
  canSend = undefined;
  let obj = noop;
  let tmp = _slicedToArray(noop.useState(""), 2);
  let str = tmp[0];
  asyncGeneratorStep = tmp2;
  [arr, c4] = _slicedToArray(noop.useState([]), 2);
  let tmp3 = _slicedToArray(noop.useState([]), 2);
  [boxFocused, c5] = _slicedToArray(noop.useState(false), 2);
  let tmp4 = _slicedToArray(noop.useState(false), 2);
  [tmp6, c6] = _slicedToArray(noop.useState(null), 2);
  const tmp5 = _slicedToArray(noop.useState(null), 2);
  [tmp8, c7] = _slicedToArray(noop.useState(null), 2);
  let tmp10 = null != tmp8;
  const callback = noop.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.contentSize.height);
  }, []);
  if (tmp10) {
    let _Math = Math;
    tmp10 = Math.ceil(tmp8) + 16 > 120;
  }
  const tmp12 = callback1();
  draftPill = tmp12;
  closure_9 = obj.useRef(arr);
  closure_10 = obj.useRef(1);
  let tmp7 = _slicedToArray(noop.useState(null), 2);
  ref = obj.useRef(new Set());
  callback1 = obj.useCallback((current) => {
    closure_9.current = current;
    _undefined(current);
  }, []);
  callback2 = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const current = closure_9.current;
    closure_9.current = current.map((localId) => {
      let tmp = localId;
      if (localId.localId === closure_0) {
        const obj = {};
        const merged = Object.assign(localId);
        const merged1 = Object.assign(closure_1);
        tmp = obj;
      }
      return tmp;
    });
    _undefined(closure_9.current);
  }, []);
  let items = [projectId];
  const effect = obj.useEffect(() => {
    const current = ref.current;
    return () => {
      const iter = ref.current[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let addResult = current.add(nextResult.localId);
        if (null != nextResult.ref) {
          let promise = React6(closure_0, tmp2.ref.id);
          let catchPromise = promise.catch(() => {});
        }
        continue;
      }
    };
  }, items);
  _require = asyncGeneratorStep(async (arg0, arg1, arg2, arg3) => {
    closure_5 = tmp3;
    closure_132_0 = closure_0;
    closure_132_1 = closure_2;
    closure_132_2 = closure_3;
    const _fetch = fetch;
    await fetch(closure_1);
    if (1 === tmp7) {
      c6 = 0;
      const current = ref.current;
      if (current.has(closure_132_0)) {
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } else {
        const obj2 = { status: "error", errorText: null };
        const intl = closure_0(str[9]).intl;
        obj2.errorText = intl.string(onSend(str[10]).GwEHvn);
        callback2(closure_132_0, obj2);
        c8 = 3;
      }
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        let obj3 = { value, done: true };
        return obj3;
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
          obj3 = closure_0(str[11]);
          if (obj3.isVibegrationsAttachmentWithinLimit(closure_132_3.size, closure_132_2)) {
            c7 = 4;
            c8 = 1;
            return { value: closure_9(closure_0, closure_132_3, closure_132_1, closure_132_2), done: false };
          } else {
            callback2(closure_132_0, { status: "error", errorText: callback2(closure_132_2) });
            c6 = 0;
            c8 = 3;
            return { value: undefined, done: true };
          }
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
        callback2(closure_132_0, { status: "ready", ref: closure_132_4 });
        c6 = 0;
      }
    }
    v3(closure_0, closure_132_4.id).catch(() => {});
  });
  let items1 = [callback2, projectId];
  callback3 = obj.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items1);
  const items2 = [callback1, callback3];
  callback4 = obj.useCallback((arg0) => {
    let map = arg0;
    if (0 !== arg0.length) {
      let VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = dependencyMap;
      let tmp15 = closure_9;
      const diff = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - closure_9.current.length;
      if (map.length > diff) {
        let intl = util.intl;
        let obj = { count: null };
        VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
        obj.count = VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
        _undefined3(intl.formatToPlainString(_modDef3547.DlX57a, obj));
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
          let obj = closure_0(str[11]);
          tmp = !obj.isVibegrationsAttachmentWithinLimit(name.size, name.contentType);
        }
        obj = { localId: +ref.current, name: name.name, contentType: name.contentType, status: null, errorText: null };
        ref.current = +ref.current + 1;
        str = "uploading";
        if (tmp) {
          str = "error";
        }
        obj.status = str;
        let formatToPlainStringResult;
        if (tmp) {
          const intl = closure_0(str[9]).intl;
          obj = { size: null };
          const obj4 = closure_0(str[11]);
          obj.size = obj4.formatVibegrationsAttachmentLimit(
            closure_0(str[11]).vibegrationsAttachmentLimit(name.contentType),
          );
          formatToPlainStringResult = intl.formatToPlainString(onSend(str[10]).cI7t94, obj);
          const obj5 = closure_0(str[11]);
        }
        obj.errorText = formatToPlainStringResult;
        return { draft: obj, uri: name.uri };
      });
      const items = [];
      map = mapped.map;
      let arraySpreadResult = HermesBuiltin.arraySpread(tmp15.current, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(
        map((draft) => draft.draft),
        arraySpreadResult,
      );
      callback1(items);
      tmp15 = mapped[Symbol.iterator]();
    }
  }, items2);
  const items3 = [projectId, callback1];
  closure_16 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    let current = ref.current;
    current.add(arg0);
    current = closure_9.current;
    const found = current.find((localId) => localId.localId === closure_0);
    ref = undefined;
    if (found != null) {
      ref = found.ref;
    }
    if (null != ref) {
      React6(closure_0, found.ref.id).catch(() => {});
      const promise = React6(closure_0, found.ref.id);
    }
    const current1 = closure_9.current;
    callback1(current1.filter((localId) => localId.localId !== closure_0));
  }, items3);
  const items4 = [callback4];
  callback5 = obj.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = undefined;
              let obj1 = tmp5(5150);
              obj1 = {
                mediaType: "any",
                selectionLimit: tmp2(7248).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE,
                skipProcessing: true,
              };
              dependencyMap = 1;
              c3 = 1;
              const obj2 = { value: obj1.launchImageLibraryAsync(obj1), done: false };
              return obj2;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            let didCancel = closure_128_0.didCancel;
            if (!didCancel) {
              didCancel = null == closure_128_0.assets;
            }
            if (!didCancel) {
              const assets = closure_128_0.assets;
              closure_129_15(
                assets.map((uri) => {
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
                }),
              );
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c3 = tmp;
          throw tmp19;
        }
      }
    }),
    items4,
  );
  const items5 = [callback4];
  callback6 = obj.useCallback(
    asyncGeneratorStep(async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === str) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              let obj1 = tmp2(str[13]);
              str = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1.value = obj1.handleDocumentSelection({ pickMultiple: true });
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            if (null != closure_128_0) {
              closure_129_15(
                closure_128_0.map((uri) => {
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
                }),
              );
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          c3 = tmp;
          throw tmp16;
        }
      }
    }),
    items5,
  );
  const items6 = [callback6, callback5];
  const memo = obj.useMemo(() => {
    let obj = { label: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3547.xE6M2k);
    obj.action = callback5;
    const items = [obj];
    obj = { label: null, action: null };
    const intl2 = util.intl;
    obj.label = intl2.string(_modDef3547.DN7KeU);
    obj.action = callback6;
    items[1] = obj;
    return items;
  }, items6);
  const set = new Set();
  let tmp23 = "" !== str.trim();
  if (!tmp23) {
    tmp23 = arr.length > 0;
  }
  if (canSend) {
    canSend = tmp23;
  }
  if (canSend) {
    canSend = everyResult;
  }
  const items7 = [onSend, callback1, canSend, str];
  const callback7 = obj.useCallback(() => {
    if (canSend) {
      const current = closure_9.current;
      const found = current.filter((ref) => null != ref.ref);
      const mapped = found.map((ref) => ref.ref);
      let tmp4;
      if (mapped.length > 0) {
        tmp4 = mapped;
      }
      onSend(str, tmp4);
      closure_3("");
      _undefined3(null);
      _undefined4(null);
      callback1([]);
    }
  }, items7);
  const callback8 = obj.useCallback(() => _undefined2(true), []);
  obj = { style: tmp12.container, children: null };
  let tmp29 = null;
  const callback9 = obj.useCallback(() => _undefined2(false), []);
  if (null != tmp6) {
    obj = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp6 };
    tmp29 = closure_10(require("Text/Text").Text, obj);
  }
  const items8 = [tmp29, ,];
  let tmp33 = null;
  if (arr.length > 0) {
    let obj1 = {
      style: tmp12.draftRow,
      children: arr.map((children) => {
        const localId = children;
        let obj = { style: draftPill.draftPill, children: null };
        let tmp4 = null;
        if ("uploading" === children.status) {
          obj = { size: "small", accessibilityLabel: null };
          const intl = localId(str[9]).intl;
          obj = { name: children.name };
          obj.accessibilityLabel = intl.formatToPlainString(onSend(str[10]).sFX7H4, obj);
          tmp4 = closure_10(c6, obj);
        }
        const items = [tmp4, ,];
        const obj1 = { style: draftPill.draftName, children: null };
        str = "text-default";
        if ("error" === children.status) {
          str = "text-feedback-critical";
        }
        const items1 = [
          closure_10(localId(str[14]).Text, {
            variant: "text-xs/medium",
            color: str,
            lineClamp: 1,
            children: children.name,
          }),
        ];
        let tmp10Result = null;
        if (null != children.errorText) {
          const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: children.errorText };
          tmp10Result = closure_10(tmp11(tmp12[14]).Text, obj3);
        }
        items1[1] = tmp10Result;
        obj1.children = items1;
        items[1] = closure_11(c7, obj1);
        const obj4 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          hitSlop: 12,
          onPress: null,
          children: null,
        };
        const intl2 = tmp11(tmp12[9]).intl;
        obj4.accessibilityLabel = intl2.string(onSend(str[10])["3HWvgk"]);
        obj4.onPress = function onPress() {
          return closure_16(localId.localId);
        };
        obj4.children = closure_10(localId(str[16]).CircleXIcon, { size: "xs" });
        items[2] = closure_10(localId(str[15]).PressableOpacity, obj4);
        obj.children = items;
        return closure_11(c7, obj, children.localId);
      }),
    };
    tmp33 = closure_10(tmp28, obj1);
  }
  items8[1] = tmp33;
  const items9 = [tmp12.box];
  if (boxFocused) {
    boxFocused = tmp12.boxFocused;
  }
  let obj2 = { style: items9, children: null };
  items9[1] = boxFocused;
  let obj3 = { style: tmp12.boxContents, children: null };
  const items10 = [
    closure_10(require("ContextMenu").ContextMenu, {
      items: memo,
      align: "above",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = {
          ref,
          IconComponent: closure_0(str[19]).PlusLargeIcon,
          onPress,
          accessibilityLabel: null,
          accessibilityActions: null,
          onAccessibilityAction: null,
        };
        const intl = closure_0(str[9]).intl;
        obj.accessibilityLabel = intl.string(onSend(str[10]).gUn10I);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return closure_10(onSend(str[18]), obj);
      },
    }),
    ,
    ,
  ];
  let obj5 = {
    multiline: true,
    allowRedesignTextInput: false,
    showBorder: false,
    showTopContainer: false,
    style: tmp12.input,
    inputTextStyle: tmp12.inputText,
    textAlignVertical: "center",
    placeholder: null,
    placeholderTextColor: null,
    accessibilityLabel: null,
    value: null,
    onChange: null,
    onFocus: null,
    onBlur: null,
    onContentSizeChange: null,
    scrollEnabled: null,
  };
  everyResult = arr.every((status) => "ready" === status.status);
  let obj4 = {
    items: memo,
    align: "above",
    children(arg0) {
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = {
        ref,
        IconComponent: closure_0(str[19]).PlusLargeIcon,
        onPress,
        accessibilityLabel: null,
        accessibilityActions: null,
        onAccessibilityAction: null,
      };
      const intl = closure_0(str[9]).intl;
      obj.accessibilityLabel = intl.string(onSend(str[10]).gUn10I);
      obj.accessibilityActions = accessibilityActions;
      obj.onAccessibilityAction = onAccessibilityAction;
      return closure_10(onSend(str[18]), obj);
    },
  };
  let intl = require("util").intl;
  const tmp40 = onSend(str[10]);
  obj5.placeholder = intl.string(running ? tmp40["67PpcP"] : tmp40.ahRdoJ);
  obj5.placeholderTextColor = tmp12.inputPlaceholder.color;
  let intl2 = tmp36(tmp37[9]).intl;
  obj5.accessibilityLabel = intl2.string(onSend(str[10]).OPr66w);
  obj5.value = str;
  obj5.onChange = tmp[1];
  obj5.onFocus = callback8;
  obj5.onBlur = callback9;
  obj5.onContentSizeChange = callback;
  obj5.scrollEnabled = tmp10;
  items10[1] = closure_10(onSend(str[20]), obj5);
  let tmp35Result = null;
  if (running) {
    const obj6 = {
      style: tmp12.trailingButton,
      IconComponent: null,
      onPress: null,
      disabled: null,
      accessibilityLabel: null,
    };
    let tmp38Result = tmp38(tmp37[18]);
    obj6.IconComponent = tmp36(tmp37[21]).StopIcon;
    obj6.onPress = onInterrupt;
    obj6.disabled = null == onInterrupt;
    const intl3 = tmp36(tmp37[9]).intl;
    obj6.accessibilityLabel = intl3.string(tmp38(tmp37[10]).KdgI4k);
    tmp35Result = tmp35(tmp38Result, obj6);
  }
  items10[2] = tmp35Result;
  const obj7 = {
    active: true,
    style: tmp12.trailingButton,
    activeStyle: tmp12.sendButtonActive,
    activeIconStyle: tmp12.sendIconActive,
    IconComponent: null,
    accessibilityLabel: null,
    onPress: null,
    disabled: null,
  };
  tmp38Result = tmp38(tmp37[18]);
  obj7.IconComponent = require("SendMessageIcon").SendMessageIcon;
  const intl4 = tmp36(tmp37[9]).intl;
  obj7.accessibilityLabel = intl4.string(require("util").t.TXNS7S);
  obj7.onPress = callback7;
  obj7.disabled = !canSend;
  items10[3] = closure_10(tmp38Result, obj7);
  obj3.children = items10;
  obj2.children = ref(c7, obj3);
  items8[2] = closure_10(c7, obj2);
  obj.children = items8;
  return ref(c7, obj);
}
