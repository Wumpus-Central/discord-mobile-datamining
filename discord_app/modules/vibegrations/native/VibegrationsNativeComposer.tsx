// discord_app/modules/vibegrations/native/VibegrationsNativeComposer.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3712 from "../intl/VibegrationsUntranslated.messages.js";
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
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import VibegrationsComposerDraftStore from "../stores/VibegrationsComposerDraftStore.tsx";
import VibegrationsConnectionStore_mod from "../stores/VibegrationsConnectionStore.tsx";

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
  return intl.formatToPlainString(_modDef3712.cI7t94, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
let VibegrationsConnectionStore = fn(13448);
({ deleteStagedAttachment: c10, uploadAttachmentBytes: closure_11 } = VibegrationsConnectionStore);
let VibegrationsConnectionStore = VibegrationsConnectionStore_mod;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4827);
let obj2 = {
  container: {
    paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
    paddingVertical: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
  },
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
  trailingSlot: null,
  sendButtonActive: null,
  sendIconActive: null,
};
let obj3 = {
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_CONTAINER_HORIZONTAL_PADDING,
  paddingVertical: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
obj2.box = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
  overflow: "hidden",
};
let obj4 = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_DEFAULT,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_BORDER_RADIUS,
  overflow: "hidden",
};
obj2.boxFocused = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
};
let obj5 = {
  backgroundColor: nativeDefault.colors.MOBILE_CHATINPUT_BACKGROUND_ACTIVE,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE,
};
obj2.boxContents = {
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
  paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
  gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
};
let obj6 = {
  flexDirection: "row",
  alignItems: "flex-end",
  paddingHorizontal: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_HORIZONTAL,
  paddingVertical: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL,
  gap: nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_CONTENT_GAP,
};
obj2.input = {
  flex: 1,
  paddingVertical: 0,
  paddingHorizontal: nativeDefault.space.PX_4,
  maxHeight: 120,
  justifyContent: "center",
};
let obj7 = {
  flex: 1,
  paddingVertical: 0,
  paddingHorizontal: nativeDefault.space.PX_4,
  maxHeight: 120,
  justifyContent: "center",
};
obj2.inputText = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: fn(1074).Fonts.PRIMARY_NORMAL,
  color: nativeDefault.colors.TEXT_DEFAULT,
  includeFontPadding: false,
};
let obj8 = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: fn(1074).Fonts.PRIMARY_NORMAL,
  color: nativeDefault.colors.TEXT_DEFAULT,
  includeFontPadding: false,
};
obj2.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
let obj9 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.draftRow = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let obj10 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.draftPill = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingLeft: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
};
obj2.draftName = { flexShrink: 1 };
let size = {
  width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH,
  height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
};
obj2.trailingButton = size;
obj2.trailingSlot = { alignItems: "center", justifyContent: "center" };
let obj11 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_4,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  paddingLeft: nativeDefault.space.PX_8,
  paddingRight: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
};
obj2.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let obj12 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj2.sendIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_16 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsNativeComposer.tsx");

export default function VibegrationsNativeComposer(projectId) {
  projectId = projectId.projectId;
  _require = projectId;
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
  c13 = undefined;
  closure_14 = undefined;
  closure_15 = undefined;
  closure_16 = undefined;
  getItemKey = undefined;
  let callback2;
  let callback3;
  let callback4;
  let callback5;
  closure_22 = undefined;
  let callback6;
  let callback7;
  closure_25 = undefined;
  c26 = undefined;
  let callback8;
  let stateFromStores1;
  let callback9;
  let callback10;
  let ref = onDismissTip.useRef(null);
  const tmp3 = onInterrupt(
    onDismissTip.useState(() => VibegrationsComposerDraftStore.getDraft(closure_0)),
    2,
  );
  let str = tmp3[0];
  closure_7 = tmp4;
  let items = [projectId];
  const onChange = onDismissTip.useCallback((draft) => {
    VibegrationsActionCreators.setComposerDraft(closure_0, draft);
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
      current.setText(VibegrationsComposerDraftStore.getDraft(closure_0));
    }
  }, items1);
  let tmp6 = onInterrupt(onDismissTip.useState(null), 2);
  [arr3, c11] = onInterrupt(onDismissTip.useState([]), 2);
  const tmp2Result = onInterrupt(onDismissTip.useState([]), 2);
  [boxFocused, c12] = onInterrupt(onDismissTip.useState(false), 2);
  const tmp2Result3 = onInterrupt(onDismissTip.useState(false), 2);
  [tmp19, c13] = onInterrupt(onDismissTip.useState(null), 2);
  const callback1 = obj.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.contentSize.height);
  }, []);
  const tmp2Result4 = onInterrupt(onDismissTip.useState(null), 2);
  const token = require("useToken").useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
  let obj2 = require("useToken");
  const token1 = require("useToken").useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  let obj3 = require("useToken");
  const token2 = require("useToken").useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
  let obj4 = require("useToken");
  const token3 = require("useToken").useToken(canSend(running[9]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
  let obj5 = require("useToken");
  const items2 = [onChange];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => callback.useReducedMotion);
  const bound = Math.max(0, (token1 - token) / 2);
  const bound1 = Math.min(closure_15, Math.max(0, (token - 20) / 2));
  let tmp31 = null != tmp7;
  if (tmp31) {
    let _Math = Math;
    tmp31 = Math.ceil(tmp7) + 2 * bound1 > 120;
  }
  const tmp32 = closure_16();
  closure_14 = tmp32;
  closure_15 = obj.useRef(arr3);
  closure_16 = obj.useRef(1);
  let obj6 = require("initialize");
  getItemKey = obj.useRef(new Set());
  callback2 = obj.useCallback((current) => {
    closure_15.current = current;
    _undefined2(current);
  }, []);
  callback3 = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const current = closure_15.current;
    closure_15.current = current.map((localId) => {
      let tmp = localId;
      if (localId.localId === closure_0) {
        const obj = {};
        const merged = Object.assign(localId);
        const merged1 = Object.assign(closure_1);
        tmp = obj;
      }
      return tmp;
    });
    _undefined2(closure_15.current);
  }, []);
  const items3 = [projectId];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    return () => {
      const iter = ref.current[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let addResult = current.add(nextResult.localId);
        if (null != nextResult.ref) {
          let promise = closure_3_10(closure_0, tmp2.ref.id);
          let catchPromise = promise.catch(() => {});
        }
        continue;
      }
    };
  }, items3);
  _require = onSend(function* (arg0, arg1, arg2, arg3) {
    closure_5 = tmp3;
    closure_132_0 = projectId;
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
        const intl = projectId(running[11]).intl;
        obj6.errorText = intl.string(canSend(running[12]).GwEHvn);
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
            return { value: _undefined2(projectId, closure_132_3, closure_132_1, closure_132_2), done: false };
          } else {
            callback3(closure_132_0, { status: "error", errorText: callback2(closure_132_2) });
            c6 = 0;
            c8 = 3;
            return { value: undefined, done: true };
          }
          obj4 = projectId(running[13]);
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
    ref1(projectId, closure_132_4.id).catch(() => {});
  });
  const items4 = [callback3, projectId];
  callback4 = obj.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items4);
  const items5 = [callback2, callback4];
  callback5 = obj.useCallback((arg0) => {
    let map = arg0;
    if (0 !== arg0.length) {
      let VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = dependencyMap;
      let tmp15 = closure_15;
      const diff = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE - closure_15.current.length;
      if (map.length > diff) {
        let intl = util.intl;
        let obj = { count: null };
        VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE = VibegrationsTypes.VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
        obj.count = VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE;
        _undefined4(intl.formatToPlainString(_modDef3712.DlX57a, obj));
        const _Math = Math;
        const substr = map.slice(0, Math.max(0, diff));
        let arr2 = substr;
      } else {
        _undefined4(null);
        arr2 = map;
      }
      const mapped = arr2.map((name) => {
        let tmp = null != name.size;
        if (tmp) {
          tmp = !closure_0(running[13]).isVibegrationsAttachmentWithinLimit(name.size, name.contentType);
          const obj = closure_0(running[13]);
        }
        const obj2 = {
          localId: +ref.current,
          name: name.name,
          contentType: name.contentType,
          status: null,
          errorText: null,
        };
        ref.current = +ref.current + 1;
        str = "uploading";
        if (tmp) {
          str = "error";
        }
        obj2.status = str;
        let formatToPlainStringResult;
        if (tmp) {
          const intl = closure_0(running[11]).intl;
          const obj3 = { size: null };
          const obj4 = closure_0(running[13]);
          obj3.size = obj4.formatVibegrationsAttachmentLimit(
            closure_0(running[13]).vibegrationsAttachmentLimit(name.contentType),
          );
          formatToPlainStringResult = intl.formatToPlainString(canSend(running[12]).cI7t94, obj3);
          const obj5 = closure_0(running[13]);
        }
        obj2.errorText = formatToPlainStringResult;
        return { draft: obj2, uri: name.uri };
      });
      const items = [];
      map = mapped.map;
      HermesBuiltin.arraySpread(
        map((draft) => draft.draft),
        HermesBuiltin.arraySpread(tmp15.current, 0),
      );
      callback2(items);
      tmp15 = mapped[Symbol.iterator]();
      const arraySpreadResult = HermesBuiltin.arraySpread(tmp15.current, 0);
    }
  }, items5);
  const items6 = [projectId, callback2];
  closure_22 = obj.useCallback((arg0) => {
    closure_0 = arg0;
    const current = ref.current;
    current.add(arg0);
    const current1 = closure_15.current;
    const found = current1.find((localId) => localId.localId === closure_0);
    ref = undefined;
    if (found != null) {
      ref = found.ref;
    }
    if (null != ref) {
      closure_2_10(closure_0, found.ref.id).catch(() => {});
      const promise = closure_2_10(closure_0, found.ref.id);
    }
    const current2 = closure_15.current;
    callback2(current2.filter((localId) => localId.localId !== closure_0));
  }, items6);
  const items7 = [callback5];
  callback6 = obj.useCallback(
    onSend(function* () {
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
              const obj5 = {
                mediaType: "any",
                selectionLimit: tmp2(5361).VIBEGRATIONS_MAX_ATTACHMENTS_PER_MESSAGE,
                skipProcessing: true,
              };
              dependencyMap = 1;
              c3 = 1;
              const obj6 = { value: tmp5(5452).launchImageLibraryAsync(obj5), done: false };
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
              closure_129_21(
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
    items7,
  );
  const items8 = [callback5];
  callback7 = obj.useCallback(
    onSend(function* () {
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
              const obj5 = { value: tmp2(c2[18]).handleDocumentSelection({ pickMultiple: true }), done: false };
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
              closure_129_21(
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
    items8,
  );
  const items9 = [callback7, callback6];
  const memo = obj.useMemo(() => {
    const obj = { label: null, action: null };
    const intl = util.intl;
    obj.label = intl.string(_modDef3712.xE6M2k);
    obj.action = callback6;
    const items = [obj];
    const obj2 = { label: null, action: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(_modDef3712.DN7KeU);
    obj2.action = callback7;
    items[1] = obj2;
    return items;
  }, items9);
  const set = new Set();
  const tmp43 = "" !== str.trim() || arr3.length > 0;
  closure_25 = tmp43;
  let tmp44 = canSend;
  if (canSend) {
    tmp44 = tmp43;
  }
  if (tmp44) {
    tmp44 = everyResult;
  }
  c26 = tmp44;
  const items10 = [onDismissTip, onSend, callback2, tmp44, onChange, str];
  callback8 = obj.useCallback(() => {
    if (c26) {
      if (onDismissTip != null) {
        tmp();
      }
      const current1 = closure_15.current;
      const found = current1.filter((ref) => null != ref.ref);
      const mapped = found.map((ref) => ref.ref);
      let tmp7;
      if (mapped.length > 0) {
        tmp7 = mapped;
      }
      onSend(str, tmp7);
      callback("");
      const current = ref1.current;
      if (current != null) {
        current.setText("");
      }
      _undefined4(null);
      _undefined(null);
      callback2([]);
    }
  }, items10);
  everyResult = arr3.every((status) => "ready" === status.status);
  const items11 = [c12];
  const items12 = [projectId];
  stateFromStores1 = require("initialize").useStateFromStores(
    items11,
    () => null != VibegrationsConnectionStore.getModelSettings(closure_0),
    items12,
  );
  const items13 = [projectId];
  callback9 = obj.useCallback(() => {
    const obj2 = {
      content: map1(VibegrationsModelSettingsSheetDefault, { projectId }),
      key: VibegrationsModelSettingsSheet.VIBEGRATIONS_MODEL_SETTINGS_SHEET_KEY,
    };
    ActionSheetActionCreators.showActionSheet(obj2);
  }, items13);
  const items14 = [tmp43, running, stateFromStores1, tmp44];
  const memo1 = obj.useMemo(() => {
    str = "send";
    let str2 = "send";
    if (!closure_25) {
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
  const items15 = [tmp32, canSend, onInterrupt, callback9, callback8];
  callback10 = obj.useCallback((key) => {
    if ("stop" === key.key) {
      const obj2 = {
        style: closure_14.trailingButton,
        IconComponent: StopIcon.StopIcon,
        onPress: onInterrupt,
        disabled: null == onInterrupt,
        accessibilityLabel: null,
      };
      const intl2 = util.intl;
      obj2.accessibilityLabel = intl2.string(_modDef3712.KdgI4k);
      let tmp14 = map1(ChatInputActionButtonDefault, obj2);
    } else if ("models" === key.key) {
      const obj = {
        style: closure_14.trailingButton,
        IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon,
        onPress: callback9,
        disabled: !canSend,
        accessibilityLabel: null,
      };
      const intl = util.intl;
      obj.accessibilityLabel = intl.string(_modDef3712["2NWMqY"]);
      tmp14 = map1(ChatInputActionButtonDefault, obj);
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
      } = closure_14);
      obj5.IconComponent = SendMessageIcon.SendMessageIcon;
      const intl3 = util.intl;
      obj5.accessibilityLabel = intl3.string(util.t.TXNS7S);
      obj5.onPress = callback8;
      obj5.disabled = !key.sendable;
      tmp14 = map1(ChatInputActionButtonDefault, obj5);
    }
    return tmp14;
  }, items15);
  const items16 = [callback10];
  const callback11 = obj.useCallback((arg0, arg1, state, cleanup) => {
    const obj = { state, cleanup, withBounce: true, children: callback10(arg1) };
    return map1(ChatInputActionButtonTransitionItemDefault, obj, arg0);
  }, items16);
  const callback12 = obj.useCallback(() => _undefined3(true), []);
  let obj7 = { ref, style: tmp32.container, children: null };
  let tmp55 = null;
  const callback13 = obj.useCallback(() => _undefined3(false), []);
  if (null != onDismissTip) {
    const obj8 = { targetRef: ref, visible: flag2, onDismiss: onDismissTip };
    tmp55 = c13(tmp23(tmp22[26]), obj8);
  }
  const items17 = [tmp55, , ,];
  let tmp57 = null;
  if (null != tmp19) {
    const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp19 };
    tmp57 = c13(tmp21(tmp22[27]).Text, obj9);
  }
  items17[1] = tmp57;
  let tmp59 = null;
  if (arr3.length > 0) {
    const obj10 = {
      style: tmp32.draftRow,
      children: arr3.map((children) => {
        projectId = children;
        const obj = { style: closure_14.draftPill, children: null };
        let tmp4 = null;
        if ("uploading" === children.status) {
          const obj2 = { size: "small", accessibilityLabel: null };
          const intl = projectId(running[11]).intl;
          const obj3 = { name: children.name };
          obj2.accessibilityLabel = intl.formatToPlainString(canSend(running[12]).sFX7H4, obj3);
          tmp4 = _undefined4(str, obj2);
        }
        const items = [tmp4, ,];
        const obj4 = { style: closure_14.draftName, children: null };
        str = "text-default";
        if ("error" === children.status) {
          str = "text-feedback-critical";
        }
        const items1 = [
          _undefined4(projectId(running[27]).Text, {
            variant: "text-xs/medium",
            color: str,
            lineClamp: 1,
            children: children.name,
          }),
        ];
        let tmp10Result = null;
        if (null != children.errorText) {
          const obj6 = { variant: "text-xs/normal", color: "text-feedback-critical", children: children.errorText };
          tmp10Result = _undefined4(tmp11(running[27]).Text, obj6);
        }
        items1[1] = tmp10Result;
        obj4.children = items1;
        items[1] = closure_14(closure_7, obj4);
        const obj7 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          hitSlop: 12,
          onPress: null,
          children: null,
        };
        const intl2 = tmp11(running[11]).intl;
        obj7.accessibilityLabel = intl2.string(canSend(running[12])["3HWvgk"]);
        obj7.onPress = function onPress() {
          return closure_22(localId.localId);
        };
        obj7.children = _undefined4(projectId(running[29]).CircleXIcon, { size: "xs" });
        items[2] = _undefined4(projectId(running[28]).PressableOpacity, obj7);
        obj.children = items;
        return closure_14(closure_7, obj, children.localId);
      }),
    };
    tmp59 = c13(tmp54, obj10);
  }
  items17[2] = tmp59;
  const items18 = [tmp32.box];
  if (boxFocused) {
    boxFocused = tmp32.boxFocused;
  }
  const obj11 = { style: items18, children: null };
  items18[1] = boxFocused;
  const obj12 = { style: tmp32.boxContents, children: null };
  const obj13 = {
    style: { paddingBottom: bound },
    children: c13(require("ContextMenu").ContextMenu, {
      items: memo,
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
        obj.accessibilityLabel = intl.string(_modDef3712.gUn10I);
        obj.accessibilityActions = accessibilityActions;
        obj.onAccessibilityAction = onAccessibilityAction;
        return map1(ChatInputActionButtonDefault, obj);
      },
    }),
  };
  const items19 = [c13(closure_7, obj13), ,];
  const obj15 = {
    multiline: true,
    allowRedesignTextInput: false,
    showBorder: false,
    showTopContainer: false,
    ref: ref1,
    style: null,
    inputTextStyle: null,
    textAlignVertical: "center",
    editable: canSend,
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
  const items20 = [tmp32.input, { marginBottom: bound, minHeight: token }];
  obj15.style = items20;
  const items21 = [tmp32.inputText, { paddingTop: bound1, paddingBottom: bound1 }];
  obj15.inputTextStyle = items21;
  const obj14 = {
    items: memo,
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
      obj.accessibilityLabel = intl.string(_modDef3712.gUn10I);
      obj.accessibilityActions = accessibilityActions;
      obj.onAccessibilityAction = onAccessibilityAction;
      return map1(ChatInputActionButtonDefault, obj);
    },
  };
  const tmp21Result = require("initialize");
  let intl = tmp21(tmp22[11]).intl;
  const tmp23Result2 = canSend(running[12]);
  if (flag) {
    let nm4w9P = tmp23Result2.JeM47J;
  } else if (!canSend) {
    nm4w9P = tmp23Result2.nm4w9P;
  }
  obj15.placeholder = intl.string(nm4w9P);
  obj15.placeholderTextColor = tmp32.inputPlaceholder.color;
  let intl2 = tmp21(tmp22[11]).intl;
  obj15.accessibilityLabel = intl2.string(canSend(running[12]).OPr66w);
  obj15.value = str;
  obj15.onChange = onChange;
  obj15.onFocus = callback12;
  obj15.onBlur = callback13;
  obj15.onContentSizeChange = callback1;
  obj15.scrollEnabled = tmp31;
  items19[1] = c13(canSend(running[32]), obj15);
  const obj16 = { style: null, children: null };
  const items22 = [tmp32.trailingSlot, { width: token2 + 2 * token3, height: token1 }];
  obj16.style = items22;
  if (stateFromStores) {
    let callback10Result = callback10(memo1[0]);
  } else {
    const obj17 = { items: memo1, renderItem: callback11, getItemKey };
    callback10Result = tmp61(tmp21(tmp22[33]).TransitionGroup, obj17);
  }
  obj16.children = callback10Result;
  items19[2] = c13(closure_7, obj16);
  obj12.children = items19;
  obj11.children = closure_14(closure_7, obj12);
  items17[3] = c13(closure_7, obj11);
  obj7.children = items17;
  return closure_14(closure_7, obj7);
}
