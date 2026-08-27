// === Module 16110: tooLargeText ===

// Module 16110 (tooLargeText)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 3469 */;
import frozen from "frozen" /* 6047 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import rejectPendingPublish from "rejectPendingPublish" /* 16090 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function tooLargeText(contentType) {
  const intl = getSystemLocale.intl;
  const obj = { size: null };
  const obj2 = frozen;
  obj[0] = obj2.formatVibegrationsAttachmentLimit(frozen.vibegrationsAttachmentLimit(contentType));
  return intl.formatToPlainString(messagesProxyDefault.cI7t94, obj);
}
({ ActivityIndicator: closure_6, View: error } = get_ActivityIndicator);
({ deleteStagedAttachment: closure_8, uploadAttachmentBytes: c9 } = rejectPendingPublish);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, box: null, boxFocused: null, boxContents: null, input: null, inputText: null, inputPlaceholder: null, draftRow: null, draftPill: null, draftName: null, trailingButton: null, sendButtonActive: null, sendIconActive: null };
createCacheKey = { paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING, paddingVertical: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
let obj1 = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT, borderWidth: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, borderRadius: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS, overflow: "hidden" };
createCacheKey[2] = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
let obj2 = { backgroundColor: ThemesDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE, borderColor: ThemesDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
createCacheKey[3] = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
let obj3 = { flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL, paddingVertical: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL, gap: ThemesDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP };
createCacheKey[4] = { flex: 1, paddingVertical: 0, paddingHorizontal: ThemesDefault.space.PX_4, minHeight: ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, maxHeight: 120, justifyContent: "center" };
let obj4 = { flex: 1, paddingVertical: 0, paddingHorizontal: ThemesDefault.space.PX_4, minHeight: ThemesDefault.modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE, maxHeight: 120, justifyContent: "center" };
createCacheKey[5] = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_NORMAL, color: ThemesDefault.colors.TEXT_DEFAULT, paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8 };
let obj5 = { fontSize: 16, lineHeight: 20, fontFamily: require("ME").Fonts.PRIMARY_NORMAL, color: ThemesDefault.colors.TEXT_DEFAULT, paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_8 };
createCacheKey[6] = { color: ThemesDefault.colors.TEXT_MUTED };
let obj6 = { color: ThemesDefault.colors.TEXT_MUTED };
createCacheKey[7] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
let obj7 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_4 };
createCacheKey[8] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingLeft: ThemesDefault.space.PX_8, paddingRight: ThemesDefault.space.PX_4, paddingVertical: ThemesDefault.space.PX_4 };
createCacheKey[9] = { flexShrink: 1 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.round, paddingLeft: ThemesDefault.space.PX_8, paddingRight: ThemesDefault.space.PX_4, paddingVertical: ThemesDefault.space.PX_4 };
createCacheKey[10] = { width: ThemesDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: ThemesDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
let obj9 = { width: ThemesDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH, height: ThemesDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT };
createCacheKey[11] = { backgroundColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
const obj10 = { backgroundColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
createCacheKey[12] = { tintColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const obj11 = { tintColor: ThemesDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
const result = require("set").fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeComposer.tsx");

export default function VibegrationsNativeComposer(projectId) {
  projectId = projectId.projectId;
  let _require = projectId;
  ({ canSend, running, onSend } = projectId);
  const onInterrupt = projectId.onInterrupt;
  let str;
  let callback;
  let callback2;
  let React;
  c6 = undefined;
  c7 = undefined;
  closure_8 = undefined;
  closure_9 = undefined;
  let callback3;
  closure_11 = undefined;
  let callback1;
  callback2 = undefined;
  callback3 = undefined;
  let callback4;
  closure_16 = undefined;
  let callback5;
  let callback6;
  canSend = undefined;
  let obj = React;
  let tmp = callback2(React.useState(""), 2);
  str = tmp[0];
  callback = tmp2;
  [arr, c4] = callback2(React.useState([]), 2);
  let tmp3 = callback2(React.useState([]), 2);
  [boxFocused, c5] = callback2(React.useState(false), 2);
  let tmp4 = callback2(React.useState(false), 2);
  [tmp6, c6] = callback2(React.useState(null), 2);
  let tmp5 = callback2(React.useState(null), 2);
  [tmp8, c7] = callback2(React.useState(null), 2);
  let tmp10 = null != tmp8;
  callback = React.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.contentSize.height);
  }, []);
  if (tmp10) {
    let _Math = Math;
    tmp10 = Math.ceil(tmp8) + 16 > 120;
  }
  const tmp12 = callback1();
  closure_8 = tmp12;
  closure_9 = obj.useRef(arr);
  callback3 = obj.useRef(1);
  let tmp7 = callback2(React.useState(null), 2);
  closure_11 = obj.useRef(new Set());
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
      const iter = closure_1_9.current[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = current;
        let tmp2 = nextResult;
        let addResult = current.add(nextResult.localId);
        if (null != nextResult.ref) {
          let tmp5 = callback;
          let tmp6 = current;
          let tmp7 = nextResult;
          let promise = callback(current, tmp2.ref.id);
          let catchPromise = promise.catch(() => {

          });
        }
        continue;
      }
    };
  }, items);
  _require = undefined;
  _require = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, blob) {
      closure_5 = tmp3;
      closure_1 = closure_2;
      closure_2 = size;
      c6 = 1;
      const _fetch = fetch;
      yield fetch(closure_1);
      if (1 === tmp7) {
        c6 = 0;
        const current = closure_1_11.current;
        if (current.has(callback)) {
          c8 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          const obj2 = { status: "error", errorText: null };
          const intl = callback(str[9]).intl;
          obj2[1] = intl.string(onSend(str[10]).GwEHvn);
          closure_1_13(callback, obj2);
          c8 = 3;
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw blob;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          let obj3 = { value: null, done: true };
          obj3[0] = blob;
          return obj3;
        } else {
          c7 = 3;
          c8 = 1;
          const obj4 = { value: null, done: false };
          obj4[0] = blob.blob();
          return obj4;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw blob;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = blob;
          return obj5;
        } else {
          size = blob;
          const current3 = closure_1_11.current;
          if (current3.has(callback)) {
            c6 = 0;
            c8 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            obj3 = callback(str[11]);
            if (obj3.isVibegrationsAttachmentWithinLimit(size.size, closure_2)) {
              c7 = 4;
              c8 = 1;
              const obj6 = { value: null, done: false };
              obj6[0] = callback2(callback, size, closure_1, closure_2);
              return obj6;
            } else {
              const obj7 = { status: "error", errorText: null };
              obj7[1] = callback2(closure_2);
              closure_1_13(callback, obj7);
              c6 = 0;
              c8 = 3;
              const obj8 = { value: null, done: true };
              obj8[0] = undefined;
              return obj8;
            }
          }
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw blob;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj9 = { value: null, done: true };
        obj9[0] = blob;
        return obj9;
      } else {
        const id = blob;
        const current2 = closure_1_11.current;
        if (!current2.has(callback)) {
          const obj = { status: "ready", ref: null };
          obj[1] = id;
          closure_1_13(callback, obj);
          c6 = 0;
        }
      }
      v0(callback, id.id).catch(() => {

      });
      c6 = 0;
    })();
  });
  let items1 = [callback2, projectId];
  callback3 = obj.useCallback(function() {
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
      let VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = str;
      let tmp15 = closure_9;
      const diff = callback(str[11]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - closure_9.current.length;
      if (map.length > diff) {
        let intl = tmp16(VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE[9]).intl;
        let obj = { count: null };
        VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = tmp16(VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE[11]).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
        obj[0] = VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
        _undefined3(intl.formatToPlainString(onSend(VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE[10]).DlX57a, obj));
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
          let obj = closure_1_0(closure_1_2[11]);
          tmp = !obj.isVibegrationsAttachmentWithinLimit(name.size, name.contentType);
        }
        obj = { localId: tmp4, name: name.name, contentType: name.contentType, status: null, errorText: null };
        ref.current = +ref.current + 1;
        str = "uploading";
        if (tmp) {
          str = "error";
        }
        obj[3] = str;
        let formatToPlainStringResult;
        if (tmp) {
          const intl = closure_1_0(closure_1_2[9]).intl;
          obj = { size: null };
          const obj4 = closure_1_0(closure_1_2[11]);
          obj[0] = obj4.formatVibegrationsAttachmentLimit(closure_1_0(closure_1_2[11]).vibegrationsAttachmentLimit(name.contentType));
          formatToPlainStringResult = intl.formatToPlainString(closure_1_1(closure_1_2[10]).cI7t94, obj);
          const obj5 = closure_1_0(closure_1_2[11]);
        }
        obj[4] = formatToPlainStringResult;
        return { draft: obj, uri: name.uri };
      });
      const items = [];
      map = mapped.map;
      let arraySpreadResult = HermesBuiltin.arraySpread(tmp15.current, 0);
      arraySpreadResult = HermesBuiltin.arraySpread(map((draft) => draft.draft), arraySpreadResult);
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
      lib(closure_0, found.ref.id).catch(() => {

      });
      const promise = lib(closure_0, found.ref.id);
    }
    const current1 = closure_9.current;
    callback1(current1.filter((localId) => localId.localId !== closure_0));
  }, items3);
  const items4 = [callback4];
  callback5 = obj.useCallback(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
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
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            obj1 = closure_1_1(5046);
            obj1 = { mediaType: "any", selectionLimit: null, skipProcessing: true };
            obj1[1] = closure_1_0(6047).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
            dependencyMap = 1;
            c3 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = obj1.launchImageLibraryAsync(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          let didCancel = closure_0.didCancel;
          if (!didCancel) {
            didCancel = null == closure_0.assets;
          }
          if (!didCancel) {
            const assets = closure_0.assets;
            callback(assets.map((uri) => {
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
              obj[1] = fileName;
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
              obj[2] = str4;
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
  }), items4);
  const items5 = [callback4];
  callback6 = obj.useCallback(callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === table) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            obj1 = closure_1_0(table[13]);
            table = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = obj1.handleDocumentSelection({ pickMultiple: true });
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          if (null != closure_0) {
            callback(closure_0.map((uri) => {
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
              obj[1] = name;
              let str4 = uri.type;
              if (str4 == null) {
                str4 = "application/octet-stream";
              }
              obj[2] = str4;
              let size = uri.size;
              if (size == null) {
                size = null;
              }
              obj[3] = size;
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
  }), items5);
  const items6 = [callback6, callback5];
  const memo = obj.useMemo(() => {
    let obj = { label: null, action: null };
    const intl = callback(str[9]).intl;
    obj[0] = intl.string(onSend(str[10]).xE6M2k);
    obj[1] = callback5;
    const items = [obj, ];
    obj = { label: null, action: null };
    const intl2 = callback(str[9]).intl;
    obj[0] = intl2.string(onSend(str[10]).DN7KeU);
    obj[1] = callback6;
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
      callback2("");
      _undefined3(null);
      _undefined4(null);
      callback1([]);
      const tmp2 = onSend;
      const tmp3 = str;
    }
  }, items7);
  const callback8 = obj.useCallback(() => _undefined2(true), []);
  obj = { style: tmp12.container, children: null };
  let tmp29 = null;
  const callback9 = obj.useCallback(() => _undefined2(false), []);
  if (null != tmp6) {
    obj = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    obj[2] = tmp6;
    tmp29 = callback3(_require(str[14]).Text, obj);
  }
  const items8 = [tmp29, , ];
  let tmp33 = null;
  if (arr.length > 0) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp12.draftRow;
    obj1[1] = arr.map((children) => {
      const callback = children;
      let obj = { style: lib.draftPill, children: null };
      let tmp4 = null;
      if ("uploading" === children.status) {
        obj = { size: "small", accessibilityLabel: null };
        const intl = callback(str[9]).intl;
        obj = { name: null };
        obj[0] = children.name;
        obj[1] = intl.formatToPlainString(onSend(str[10]).sFX7H4, obj);
        tmp4 = callback3(c6, obj);
      }
      const items = [tmp4, , ];
      obj1 = { style: lib.draftName, children: null };
      str = "text-default";
      if ("error" === children.status) {
        str = "text-feedback-critical";
      }
      const items1 = [callback3(callback(str[14]).Text, { variant: "text-xs/medium", color: str, lineClamp: 1, children: children.name }), ];
      let tmp10Result = null;
      if (null != children.errorText) {
        const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
        obj3[2] = children.errorText;
        tmp10Result = tmp10(tmp11(tmp12[14]).Text, obj3);
      }
      items1[1] = tmp10Result;
      obj1[1] = items1;
      items[1] = closure_11(c7, obj1);
      const obj4 = { accessibilityRole: "button", accessibilityLabel: null, hitSlop: 12, onPress: null, children: null };
      const intl2 = tmp11(tmp12[9]).intl;
      obj4[1] = intl2.string(onSend(str[10])["3HWvgk"]);
      obj4[3] = function onPress() {
        return closure_1_16(localId.localId);
      };
      obj4[4] = callback3(callback(str[16]).CircleXIcon, { size: "xs" });
      items[2] = callback3(callback(str[15]).PressableOpacity, obj4);
      obj[1] = items;
      return closure_11(c7, obj, children.localId);
    });
    tmp33 = callback3(tmp28, obj1);
  }
  items8[1] = tmp33;
  const items9 = [tmp12.box, ];
  if (boxFocused) {
    boxFocused = tmp12.boxFocused;
  }
  let obj2 = { style: items9, children: null };
  items9[1] = boxFocused;
  let obj3 = { style: tmp12.boxContents, children: null };
  const items10 = [
    callback3(_require(str[17]).ContextMenu, {
      items: memo,
      align: "above",
      children(arg0) {
        ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
        const obj = { ref, IconComponent: callback(str[19]).PlusLargeIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
        const intl = callback(str[9]).intl;
        obj[3] = intl.string(onSend(str[10]).gUn10I);
        obj[4] = accessibilityActions;
        obj[5] = onAccessibilityAction;
        return callback3(onSend(str[18]), obj);
      }
    }),
  ,
  ,

  ];
  let obj5 = { multiline: true, allowRedesignTextInput: false, showBorder: false, showTopContainer: false, style: tmp12.input, inputTextStyle: tmp12.inputText, textAlignVertical: "center", placeholder: null, placeholderTextColor: null, accessibilityLabel: null, value: null, onChange: null, onFocus: null, onBlur: null, onContentSizeChange: null, scrollEnabled: null };
  everyResult = arr.every((status) => "ready" === status.status);
  let obj4 = {
    items: memo,
    align: "above",
    children(arg0) {
      ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
      const obj = { ref, IconComponent: callback(str[19]).PlusLargeIcon, onPress, accessibilityLabel: null, accessibilityActions: null, onAccessibilityAction: null };
      const intl = callback(str[9]).intl;
      obj[3] = intl.string(onSend(str[10]).gUn10I);
      obj[4] = accessibilityActions;
      obj[5] = onAccessibilityAction;
      return callback3(onSend(str[18]), obj);
    }
  };
  let intl = _require(str[9]).intl;
  const tmp40 = onSend(str[10]);
  obj5[7] = intl.string(running ? tmp40["67PpcP"] : tmp40.ahRdoJ);
  obj5[8] = tmp12.inputPlaceholder.color;
  let intl2 = tmp36(tmp37[9]).intl;
  obj5[9] = intl2.string(onSend(str[10]).OPr66w);
  obj5[10] = str;
  obj5[11] = tmp[1];
  obj5[12] = callback8;
  obj5[13] = callback9;
  obj5[14] = callback;
  obj5[15] = tmp10;
  items10[1] = callback3(onSend(str[20]), obj5);
  let tmp35Result = null;
  if (running) {
    let obj6 = { style: null, IconComponent: null, onPress: null, disabled: null, accessibilityLabel: null };
    obj6[0] = tmp12.trailingButton;
    let tmp38Result = tmp38(tmp37[18]);
    obj6[1] = tmp36(tmp37[21]).StopIcon;
    obj6[2] = onInterrupt;
    obj6[3] = null == onInterrupt;
    const intl3 = tmp36(tmp37[9]).intl;
    obj6[4] = intl3.string(tmp38(tmp37[10]).KdgI4k);
    tmp35Result = tmp35(tmp38Result, obj6);
  }
  items10[2] = tmp35Result;
  let obj7 = { active: true, style: tmp12.trailingButton, activeStyle: tmp12.sendButtonActive, activeIconStyle: tmp12.sendIconActive, IconComponent: null, accessibilityLabel: null, onPress: null, disabled: null };
  tmp38Result = tmp38(tmp37[18]);
  obj7[4] = _require(str[22]).SendMessageIcon;
  const intl4 = tmp36(tmp37[9]).intl;
  obj7[5] = intl4.string(_require(str[9]).t.TXNS7S);
  obj7[6] = callback7;
  obj7[7] = !canSend;
  items10[3] = callback3(tmp38Result, obj7);
  obj3[1] = items10;
  obj2[1] = closure_11(c7, obj3);
  items8[2] = callback3(c7, obj2);
  obj[1] = items8;
  return closure_11(c7, obj);
};