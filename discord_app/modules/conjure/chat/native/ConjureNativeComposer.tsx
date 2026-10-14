// discord_app/modules/conjure/chat/native/ConjureNativeComposer.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import SendMessageIcon from "../../../../design/components/Icon/native/redesign/generated/SendMessageIcon.tsx";
import ActionSheetActionCreators from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import WarningIcon from "../../../../design/components/Icon/native/redesign/generated/WarningIcon.tsx";
import ImageCarousel from "../../../../components_native/chat/ImageCarousel.tsx";
import MusicIcon from "../../../../design/components/Icon/native/redesign/generated/MusicIcon.tsx";
import PlusLargeIcon from "../../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
import keepLocalCopy from "../../../../../_runtime/11283_keepLocalCopy.js";
import ConjureAttachmentTypes from "../ConjureAttachmentTypes.tsx";
import FileUpIcon from "../../../../design/components/Icon/native/redesign/generated/FileUpIcon.tsx";
import ConjureModelSettingsSheet from "../../model_settings/native/ConjureModelSettingsSheet.tsx";
import conjureAttachmentDrafts from "../conjureAttachmentDrafts.tsx";
import StopIcon from "../../../../design/components/Icon/native/redesign/generated/StopIcon.tsx";
import conjurePickedFiles from "conjurePickedFiles.tsx";
import ConjureChatActionCreators from "../ConjureChatActionCreators.tsx";
import ChatInputNativeCommandsDefault from "../../../chat_input/native/ChatInputNativeCommands.tsx";
import ImagesIcon from "../../../../design/components/Icon/native/redesign/generated/ImagesIcon.tsx";
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
    let formatToPlainStringResult = intl3.formatToPlainString(_modDef3849.MWTYwv, obj3);
  } else if (null != draft.errorText) {
    const intl2 = util.intl;
    ({ name: obj2.name, errorText: obj2.error } = draft);
    formatToPlainStringResult = intl2.formatToPlainString(_modDef3849.U2WbGx, { name: null, error: null });
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
const createStyles = fn(5096);
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
  draftCarousel: null,
  draftOverlay: null,
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
obj2.input = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj2.draftCarousel = { marginBottom: 0 };
let obj8 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj8.alignItems = "center";
obj8.justifyContent = "center";
obj8.backgroundColor = nativeDefault.colors.BACKGROUND_SCRIM_LIGHTBOX;
obj2.draftOverlay = obj8;
let size = {
  width: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH,
  height: nativeDefault.modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT,
};
obj2.trailingButton = size;
obj2.trailingSlot = { alignItems: "center", justifyContent: "center" };
let obj7 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_4 };
obj2.sendButtonActive = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
let obj9 = { backgroundColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ACTIVE_BACKGROUND };
obj2.sendIconActive = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
let closure_15 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
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
ReactCompilerGating = fn(558);
let obj10 = { tintColor: nativeDefault.colors.CHAT_INPUT_SEND_BUTTON_ICON_ACTIVE_TINT };
size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/native/ConjureNativeComposer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureNativeComposer(projectId) {
      const cResult = require("c").c(148);
      projectId = projectId.projectId;
      _require = projectId;
      const canSend = projectId.canSend;
      ({ running, onSend } = projectId);
      const onInterrupt = projectId.onInterrupt;
      const onDraftHasTextChange = projectId.onDraftHasTextChange;
      const hidden = projectId.hidden;
      noop = tmp4;
      if (cResult[0] !== projectId) {
        const fn = function s() {
          return ConjureComposerDraftStore.getDraft(closure_0);
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
        class U {
          constructor(arg0) {
            obj = closure_0(closure_2[17]);
            setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
            tmp2 = closure_7(projectId);
            return;
          }
        }
        cResult[2] = projectId;
        cResult[3] = U;
      } else {
        class U {
          constructor(arg0) {
            obj = closure_0(closure_2[17]);
            setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
            tmp2 = closure_7(projectId);
            return;
          }
        }
      }
      AccessibilityStore = U;
      if (cResult[4] !== first) {
        class U {
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
        class U {
          constructor(arg0) {
            obj = closure_0(closure_2[17]);
            setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
            tmp2 = closure_7(projectId);
            return;
          }
        }
      }
      closure_9 = tmp13;
      if ((cResult[6] === "") !== tmp12) {
        class U {
          constructor(arg0) {
            obj = closure_0(closure_2[17]);
            setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
            tmp2 = closure_7(projectId);
            return;
          }
        }
        const effect = obj2.useEffect(L, items4);
        [tmp17, tmp18] = tmp6(obj2.useState(null), 2);
        ConjureComposerDraftStore = tmp18;
        obj2.useRef(null);
        const tmp6Result = tmp6(obj2.useState(null), 2);
        if (tmp6Result4[0] !== projectId) {
          class U {
            constructor(arg0) {
              obj = closure_0(closure_2[17]);
              setComposerDraftResult = obj.setComposerDraft(closure_0, projectId);
              tmp2 = closure_7(projectId);
              return;
            }
          }
          tmp9(ConjureComposerDraftStore.getDraft(projectId));
          tmp18(null);
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
          let tmp25 = items;
        } else {
          class F {
            constructor() {
              obj = closure_1(closure_2[18]);
              setTextResult = obj.setText(closure_11.current, closure_10.getDraft(closure_0));
              return;
            }
          }
          tmp25 = cResult[12];
        }
        const effect1 = obj2.useEffect(F, tmp25);
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
          let tmp28 = K;
          const tmp27 = items1;
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
          tmp28 = cResult[15];
        }
        const effect2 = obj2.useEffect(tmp28, tmp27);
        tmp6Result4 = tmp6(obj2.useState(projectId), 2);
        const conjureAttachmentDraftList = tmp(onSend[19]).useConjureAttachmentDraftList(projectId, "chat");
        let tmpResult = tmp(onSend[19]);
        [r10102, closure_12] = tmp6(obj2.useState(false), 2);
        const tmp6Result5 = tmp6(obj2.useState(false), 2);
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
          cResult[16] = tmp35;
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
        if (cResult[17] === U) {
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
          const token = tmp(onSend[14]).useToken(canSend(onSend[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
          const tmpResult6 = tmp(onSend[14]);
          const token1 = tmp(onSend[14]).useToken(canSend(onSend[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
          const tmpResult7 = tmp(onSend[14]);
          const token2 = tmp(onSend[14]).useToken(canSend(onSend[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
          const tmpResult8 = tmp(onSend[14]);
          const _Symbol2 = Symbol;
          const token3 = tmp(onSend[14]).useToken(canSend(onSend[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
          if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
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
            const items2 = [AccessibilityStore];
            class Te {
              constructor() {
                return closure_8.useReducedMotion;
              }
            }
            cResult[20] = items2;
            cResult[21] = Te;
            let tmp43 = Te;
            const tmp42 = items2;
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
            tmp43 = cResult[21];
          }
          const tmpResult9 = tmp(onSend[14]);
          const stateFromStores = tmp(onSend[20]).useStateFromStores(tmp42, tmp43);
          let _Math = Math;
          const bound = Math.max(0, (token1 - token) / 2);
          const _Math2 = Math;
          const _Math3 = Math;
          const bound1 = Math.min(PX_8, Math.max(0, (token - 20) / 2));
          if (tmp17 == null) {
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
          const bound2 = Math.min(c13, Math.max(token, tmp17));
          tmp53();
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
          if (cResult[22] !== projectId) {
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
            cResult[22] = projectId;
            class Te {
              constructor() {
                return closure_8.useReducedMotion;
              }
            }
            cResult[23] = tmp53;
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
          if (cResult[24] !== projectId) {
            class Se {
              constructor(arg0) {
                obj = closure_0(closure_2[19]);
                return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
              }
            }
            cResult[24] = projectId;
            class Te {
              constructor() {
                return closure_8.useReducedMotion;
              }
            }
            cResult[25] = Se;
            const tmp54 = Se;
          } else {
            class Se {
              constructor(arg0) {
                obj = closure_0(closure_2[19]);
                return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
              }
            }
          }
          Se = tmp54;
          if (cResult[26] !== tmp53) {
            class Se {
              constructor(arg0) {
                obj = closure_0(closure_2[19]);
                return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
              }
            }
            _require = onInterrupt(function* () {
              if (c2 === 2) {
                c2 = 3;
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
                  c2 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      projectId = closure_1_15;
                      c1 = 1;
                      c2 = 1;
                      const obj5 = {
                        value: projectId(onSend[22]).pickConjurePhotos(
                          "mixed",
                          projectId(onSend[21]).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE,
                        ),
                        done: false,
                      };
                      return obj5;
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj = { value, done: true };
                    return obj;
                  } else {
                    projectId(value);
                    c2 = 3;
                    return { value: "IconComponent", done: null };
                  }
                } catch (tmp10) {
                  c2 = tmp;
                  throw tmp10;
                }
              }
            });
            function t17() {
              const self = this;
              const apply = closure_0.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            }
            class Te {
              constructor() {
                return closure_8.useReducedMotion;
              }
            }
            cResult[26] = tmp53;
            cResult[27] = t17;
          } else {
            class Se {
              constructor(arg0) {
                obj = closure_0(closure_2[19]);
                return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
              }
            }
          }
          if (cResult[28] === tmp53) {
            class Se {
              constructor(arg0) {
                obj = closure_0(closure_2[19]);
                return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
              }
            }
            if (cResult[31] !== tmp53) {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
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
                          const obj6 = { value: types(onSend[23]).handleDocumentSelection(obj5), done: false };
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
                          closure_1_15(
                            closure_129_0.map((uri) => {
                              const obj = {
                                uri: uri.uri,
                                name: types(closure_1_2[22]).pickedName(uri.uri, uri.name),
                                contentType: null,
                                size: null,
                              };
                              let str = uri.type;
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
              function t19() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              }
              class Te {
                constructor() {
                  return closure_8.useReducedMotion;
                }
              }
              cResult[31] = tmp53;
              cResult[32] = t19;
            } else {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
            }
            t19 = tmp57;
            class Te {
              constructor() {
                return closure_8.useReducedMotion;
              }
            }
            if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
              const stringResult = obj9.string(tmp37(onSend[11])["51+9lc"]);
              class Te {
                constructor() {
                  return closure_8.useReducedMotion;
                }
              }
              cResult[33] = stringResult;
              const tmp58 = stringResult;
            } else {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
            }
            if (cResult[34] !== tmp55) {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
              tmp61[0] = tmp58;
              tmp61[1] = tmp(onSend[24]).ImagesIcon;
              class Te {
                constructor() {
                  return closure_8.useReducedMotion;
                }
              }
              cResult[34] = tmp55;
              cResult[35] = tmp61;
            } else {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
            }
            const _Symbol3 = Symbol;
            if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
              const stringResult1 = obj10.string(tmp37(onSend[11])["10ljr2"]);
              class Te {
                constructor() {
                  return closure_8.useReducedMotion;
                }
              }
              cResult[36] = stringResult1;
              const tmp62 = stringResult1;
            } else {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
            }
            if (cResult[37] !== tmp57) {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
              tmp65[0] = tmp62;
              tmp65[1] = tmp(onSend[25]).MusicIcon;
              class Te {
                constructor() {
                  return closure_8.useReducedMotion;
                }
              }
              cResult[37] = tmp57;
              cResult[38] = tmp65;
            } else {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[39] === Symbol.for("react.memo_cache_sentinel")) {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
              const stringResult2 = obj11.string(tmp37(onSend[11]).aotDee);
              class Te {
                constructor() {
                  return closure_8.useReducedMotion;
                }
              }
              cResult[39] = stringResult2;
              const tmp66 = stringResult2;
            } else {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
            }
            if (cResult[40] !== tmp57) {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
              tmp69[0] = tmp66;
              tmp69[1] = tmp(onSend[27]).FileUpIcon;
              class Te {
                constructor() {
                  return closure_8.useReducedMotion;
                }
              }
              cResult[40] = tmp57;
              cResult[41] = tmp69;
            } else {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
            }
            if (cResult[42] === tmp61) {
              class Se {
                constructor(arg0) {
                  obj = closure_0(closure_2[19]);
                  return obj.removeConjureAttachmentDraft(closure_0, "chat", projectId);
                }
              }
            }
            const items3 = [tmp61, tmp65, tmp69];
            cResult[42] = tmp61;
            cResult[43] = tmp65;
            cResult[44] = tmp69;
            cResult[45] = items3;
          }
          class Oe {
            constructor(arg0) {
              ({ url, type } = projectId.nativeEvent);
              if (canSend) {
                obj = { uri: null, name: null, contentType: null, size: null };
                obj.uri = url;
                tmp2 = closure_0;
                tmp3 = closure_2;
                tmp = closure_15;
                obj2 = closure_0(closure_2[22]);
                tmp4 = null;
                obj.name = obj2.pickedName(url, null);
                if (type == null) {
                  type = "application/octet-stream";
                }
                obj.contentType = type;
                items = [];
                items[0] = obj;
                tmpResult = tmp(items);
              }
              return;
            }
          }
          cResult[28] = tmp53;
          cResult[29] = canSend;
          cResult[30] = Oe;
          const tmpResult10 = tmp(onSend[20]);
        }
        function ue(nativeEvent) {
          nativeEvent = nativeEvent.nativeEvent;
          if (nativeEvent.text !== first) {
            U(nativeEvent.text);
          }
        }
        cResult[17] = U;
        cResult[18] = first;
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
        const tmp6Result6 = tmp6(obj2.useState(null), 2);
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
      items4 = ["" !== tmp12, onDraftHasTextChange];
      cResult[6] = "" !== tmp12;
      cResult[8] = L;
      cResult[9] = items4;
      let obj = require("c");
    }
  : function ConjureNativeComposer(projectId) {
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
      const tmp2 = onInterrupt(
        onDraftHasTextChange.useState(() => ConjureComposerDraftStore.getDraft(closure_0)),
        2,
      );
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
      const conjureAttachmentDraftList = require("conjureAttachmentDrafts").useConjureAttachmentDraftList(
        projectId,
        "chat",
      );
      let obj2 = require("conjureAttachmentDrafts");
      [boxFocused, c13] = onInterrupt(onDraftHasTextChange.useState(false), 2);
      let tmpResult = onInterrupt(onDraftHasTextChange.useState(false), 2);
      [tmp21, c14] = onInterrupt(onDraftHasTextChange.useState(null), 2);
      const items4 = [callback, str];
      const callback1 = obj.useCallback((nativeEvent) => {
        _undefined(nativeEvent.nativeEvent.height);
      }, []);
      const callback2 = obj.useCallback((nativeEvent) => {
        nativeEvent = nativeEvent.nativeEvent;
        if (nativeEvent.text !== str) {
          callback(nativeEvent.text);
        }
      }, items4);
      const tmpResult2 = onInterrupt(onDraftHasTextChange.useState(null), 2);
      const token = require("useToken").useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_SIZE);
      let obj3 = require("useToken");
      const token1 = require("useToken").useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
      let obj4 = require("useToken");
      const token2 = require("useToken").useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_SEND_BUTTON_WIDTH);
      let obj5 = require("useToken");
      const token3 = require("useToken").useToken(canSend(running[8]).modules.mobile.CHAT_INPUT_ACTION_BUTTON_MARGIN);
      let obj6 = require("useToken");
      const items5 = [closure_8];
      const stateFromStores = require("initialize").useStateFromStores(items5, () => closure_8.useReducedMotion);
      const bound = Math.max(0, (token1 - token) / 2);
      const bound1 = Math.min(c14, Math.max(0, (token - 20) / 2));
      const bound2 = Math.min(tmp32, Math.max(token, num));
      const tmp34 = closure_15();
      closure_15 = tmp34;
      const items6 = [projectId];
      callback3 = obj.useCallback((arr) => {
        if (0 !== arr.length) {
          let obj2 = require;
          let result = dependencyMap;
          const diff =
            ConjureAttachmentTypes.CONJURE_MAX_ATTACHMENTS_PER_MESSAGE -
            conjureAttachmentDrafts.getConjureAttachmentDrafts(closure_0, "chat").length;
          if (arr.length > diff) {
            const intl = obj2(1126).intl;
            let obj = { count: obj2(11294).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE };
            _undefined3(intl.formatToPlainString(_modDef3849.Q0aCVZ, obj));
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
              return name(running[22]).uploadConjurePickedFile(projectId, name);
            };
            obj3 = obj5;
          });
          obj2 = obj2(11806);
          result = obj2.addConjureAttachmentDrafts(closure_0, "chat", mapped);
        }
      }, items6);
      const items7 = [projectId];
      onRemove = obj.useCallback(
        (arg0) => conjureAttachmentDrafts.removeConjureAttachmentDraft(closure_0, "chat", arg0),
        items7,
      );
      const items8 = [callback3];
      callback4 = obj.useCallback(
        onSend(function* () {
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
                  projectId = callback3;
                  c1 = 1;
                  dependencyMap = 1;
                  const obj5 = {
                    value: projectId(11958).pickConjurePhotos(
                      "mixed",
                      projectId(11294).CONJURE_MAX_ATTACHMENTS_PER_MESSAGE,
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
        items8,
      );
      const items9 = [callback3, canSend];
      const callback5 = obj.useCallback((nativeEvent) => {
        ({ url, type } = nativeEvent.nativeEvent);
        if (canSend) {
          const obj = { uri: url, name: conjurePickedFiles.pickedName(url, null), contentType: null, size: null };
          if (type == null) {
            type = "application/octet-stream";
          }
          obj.contentType = type;
          const items = [obj];
          callback3(items);
        }
      }, items9);
      _require = onSend((types) => {
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
                  const obj6 = { value: types(running[23]).handleDocumentSelection(obj5), done: false };
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
                  callback3(
                    closure_129_0.map((uri) => {
                      const obj = {
                        uri: uri.uri,
                        name: types(closure_1_2[22]).pickedName(uri.uri, uri.name),
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
      const items10 = [callback3];
      callback6 = obj.useCallback(function () {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }, items10);
      const items11 = [callback4, callback6];
      const memo = obj.useMemo(() => {
        const obj = { label: null, IconComponent: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3849["51+9lc"]);
        obj.IconComponent = ImagesIcon.ImagesIcon;
        obj.action = callback4;
        let items = [obj, ,];
        const obj2 = { label: null, IconComponent: null, action: null };
        const intl2 = util.intl;
        obj2.label = intl2.string(_modDef3849["10ljr2"]);
        obj2.IconComponent = MusicIcon.MusicIcon;
        obj2.action = function action() {
          const items = [closure_0(running[26]).types.audio];
          return callback6(items);
        };
        items[1] = obj2;
        const obj3 = { label: null, IconComponent: null, action: null };
        const intl3 = util.intl;
        obj3.label = intl3.string(_modDef3849.aotDee);
        obj3.IconComponent = FileUpIcon.FileUpIcon;
        obj3.action = function action() {
          return callback6();
        };
        items[2] = obj3;
        return items;
      }, items11);
      const obj7 = require("initialize");
      const tmp41 = "" !== str.trim() || conjureAttachmentDraftList.length > 0;
      closure_20 = tmp41;
      let tmp42 = canSend;
      if (canSend) {
        tmp42 = tmp41;
      }
      if (tmp42) {
        tmp42 = everyResult;
      }
      c21 = tmp42;
      const items12 = [onSend, projectId, tmp42, callback, str];
      callback7 = obj.useCallback(() => {
        if (c21) {
          const result = conjureAttachmentDrafts.takeConjureAttachmentRefs(closure_0, "chat");
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
      }, items12);
      everyResult = conjureAttachmentDraftList.every((status) => "ready" === status.status);
      const items13 = [callback];
      const items14 = [projectId];
      stateFromStores1 = require("initialize").useStateFromStores(
        items13,
        () => {
          const modelSettings = ConjureModelSettingsStore.getModelSettings(closure_0);
          let tierSettings;
          if (modelSettings != null) {
            tierSettings = modelSettings.tierSettings;
          }
          return null != tierSettings;
        },
        items14,
      );
      const items15 = [projectId];
      callback8 = obj.useCallback(() => {
        const obj2 = {
          content: closure_2_11(ConjureModelSettingsSheetDefault, { projectId }),
          key: ConjureModelSettingsSheet.CONJURE_MODEL_SETTINGS_SHEET_KEY,
        };
        ActionSheetActionCreators.showActionSheet(obj2);
      }, items15);
      const items16 = [tmp41, running, stateFromStores1, tmp42];
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
      }, items16);
      const items17 = [tmp34, canSend, onInterrupt, callback8, callback7];
      callback9 = obj.useCallback((key) => {
        if ("stop" === key.key) {
          const obj2 = {
            style: closure_15.trailingButton,
            IconComponent: StopIcon.StopIcon,
            onPress: onInterrupt,
            disabled: null == onInterrupt,
            accessibilityLabel: null,
          };
          const intl2 = util.intl;
          obj2.accessibilityLabel = intl2.string(_modDef3849.wiguT0);
          let tmp14 = closure_2_11(ChatInputActionButtonDefault, obj2);
        } else if ("models" === key.key) {
          const obj = {
            style: closure_15.trailingButton,
            IconComponent: FiltersHorizontalIcon.FiltersHorizontalIcon,
            onPress: callback8,
            disabled: !canSend,
            accessibilityLabel: null,
          };
          const intl = util.intl;
          obj.accessibilityLabel = intl.string(_modDef3849["3E7Yc0"]);
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
          } = closure_15);
          obj5.IconComponent = SendMessageIcon.SendMessageIcon;
          const intl3 = util.intl;
          obj5.accessibilityLabel = intl3.string(util.t.TXNS7S);
          obj5.onPress = callback7;
          obj5.disabled = !key.sendable;
          tmp14 = closure_2_11(ChatInputActionButtonDefault, obj5);
        }
        return tmp14;
      }, items17);
      const items18 = [callback9];
      const callback10 = obj.useCallback((arg0, arg1, state, cleanup) => {
        const obj = { state, cleanup, withBounce: true, children: callback9(arg1) };
        return closure_2_11(ChatInputActionButtonTransitionItemDefault, obj, arg0);
      }, items18);
      const callback11 = obj.useCallback(() => _undefined2(true), []);
      const obj8 = { style: tmp34.container, children: null };
      let tmp53 = null;
      const callback12 = obj.useCallback(() => _undefined2(false), []);
      if (null != tmp21) {
        const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp21 };
        tmp53 = c11(tmp17(tmp18[35]).Text, obj9);
      }
      const items19 = [
        tmp53,
        conjureAttachmentDraftList.map((errorText) => {
          let tmp = null;
          if (null != errorText.errorText) {
            const obj = { variant: "text-xs/normal", color: "text-feedback-critical", lineClamp: 2, children: null };
            const intl = projectId(running[10]).intl;
            ({ name: obj2.name, errorText: obj2.error } = errorText);
            obj.children = intl.formatToPlainString(canSend(running[11]).U2WbGx, { name: null, error: null });
            tmp = _undefined(projectId(running[35]).Text, obj, errorText.localId);
            const obj3 = { name: null, error: null };
          }
          return tmp;
        }),
        ,
      ];
      let tmp55 = null;
      if (conjureAttachmentDraftList.length > 0) {
        const obj10 = {
          visible: true,
          style: tmp34.draftCarousel,
          children: conjureAttachmentDraftList.map((draft) =>
            closure_2_11(closure_18, { draft, onRemove }, draft.localId),
          ),
        };
        tmp55 = c11(tmp17(tmp18[16]).ImageCarouselRow, obj10);
      }
      items19[2] = tmp55;
      const items20 = [tmp34.box];
      if (boxFocused) {
        boxFocused = tmp34.boxFocused;
      }
      const obj11 = { style: items20, children: null };
      items20[1] = boxFocused;
      const obj12 = { style: tmp34.boxContents, children: null };
      const obj13 = {
        style: { paddingBottom: bound },
        children: c11(require("ContextMenu").ContextMenu, {
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
            obj.accessibilityLabel = intl.string(_modDef3849.hFS71Z);
            obj.accessibilityActions = accessibilityActions;
            obj.onAccessibilityAction = onAccessibilityAction;
            return closure_2_11(ChatInputActionButtonDefault, obj);
          },
        }),
      };
      const items21 = [c11(str, obj13), ,];
      const obj15 = { style: null, children: null };
      const items22 = [tmp34.input, { marginBottom: bound, height: bound2 }];
      obj15.style = items22;
      const obj16 = {
        ref,
        editable: canSend,
        shouldShowCursor: true,
        maxHeight,
        verticalInset: bound1,
        placeholder: null,
        accessibilityLabel: null,
        onBeginFocus: null,
        onEndBlur: null,
        onChangeContentSize: null,
        onSelectionOrTextChange: null,
        onPasteImage: null,
      };
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
          obj.accessibilityLabel = intl.string(_modDef3849.hFS71Z);
          obj.accessibilityActions = accessibilityActions;
          obj.onAccessibilityAction = onAccessibilityAction;
          return closure_2_11(ChatInputActionButtonDefault, obj);
        },
      };
      const tmp17Result = require("initialize");
      let intl = tmp17(tmp18[10]).intl;
      const tmp24Result2 = canSend(running[11]);
      if (!canSend) {
        obj16.placeholder = intl.string(tmp24Result2.zZ9NgM);
        let intl2 = tmp17(tmp18[10]).intl;
        obj16.accessibilityLabel = intl2.string(tmp24(tmp18[11]).ldNl9x);
        obj16.onBeginFocus = callback11;
        obj16.onEndBlur = callback12;
        obj16.onChangeContentSize = callback1;
        obj16.onSelectionOrTextChange = callback2;
        obj16.onPasteImage = callback5;
        obj15.children = tmp57(tmp24Result, obj16);
        items21[1] = tmp57(tmp52, obj15);
        const obj17 = { style: null, children: null };
        const items23 = [tmp34.trailingSlot];
        let size = { width: token2 + 2 * token3, height: token1 };
        items23[1] = size;
        obj17.style = items23;
        if (stateFromStores) {
          let callback9Result = callback9(memo1[0]);
        } else {
          const obj18 = { items: memo1, renderItem: callback10, getItemKey: callback3 };
          callback9Result = tmp57(tmp17(tmp18[39]).TransitionGroup, obj18);
        }
        obj17.children = callback9Result;
        items21[2] = tmp57(tmp52, obj17);
        obj12.children = items21;
        obj11.children = tmp51(tmp52, obj12);
        items19[3] = tmp57(tmp52, obj11);
        obj8.children = items19;
        return tmp51(tmp52, obj8);
      }
    };
