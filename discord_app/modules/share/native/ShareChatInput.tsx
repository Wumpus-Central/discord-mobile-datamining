// === Module 11589: ShareChatInput ===

// Module 11589 (ShareChatInput)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Pressables from "Pressables" /* 6184 */;
import FormInputDefault from "FormInput" /* 8585 */;
import ReactionIcon from "ReactionIcon" /* 8960 */;
import useMessageMaxLengthDefault from "useMessageMaxLength" /* 9259 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { container: { flex: 1, flexDirection: "row", backgroundColor: nativeDefault.colors.SHARE_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, paddingHorizontal: nativeDefault.space.PX_12 }, chatInput: null, chatText: null, inputPlaceholder: null, emojiButton: null, focused: null };
let obj3 = { flex: 1, flexDirection: "row", backgroundColor: nativeDefault.colors.SHARE_CHAT_INPUT_BACKGROUND, borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS, borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT, paddingHorizontal: nativeDefault.space.PX_12 };
obj2.chatInput = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 80 };
const obj5 = { fontSize: 16, lineHeight: 20, fontFamily: fn(1085).Fonts.PRIMARY_NORMAL, color: nativeDefault.colors.TEXT_STRONG, paddingTop: null, paddingBottom: null };
const PlatformUtils = fn(1382);
let num = 2;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
obj5.paddingTop = nativeDefault.space.PX_8 + num;
obj5.paddingBottom = nativeDefault.space.PX_8;
obj2.chatText = obj5;
let obj4 = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 80 };
obj2.inputPlaceholder = { color: nativeDefault.colors.TEXT_MUTED };
const obj7 = { color: nativeDefault.colors.TEXT_MUTED };
obj2.emojiButton = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, alignSelf: "flex-end" };
const obj8 = { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, alignSelf: "flex-end" };
obj2.focused = { borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj9 = { borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ShareChatInput(onBlur) {
  const cResult = c.c(32);
  ({ text, inputRef, onChange, onSelectionChange, onFocus } = onBlur);
  onBlur = onBlur.onBlur;
  ({ onPressEmoji, onSend, disabled } = onBlur);
  const tmp5 = closure_8();
  const tmp7 = useMessageMaxLengthDefault();
  const tmp4 = undefined !== disabled && disabled;
  [tmp9, dependencyMap] = noop.useState(false);
  if (cResult[0] !== onFocus) {
    const fn = function c() {
      dependencyMap(true);
      onFocus();
    };
    cResult[0] = onFocus;
    cResult[1] = fn;
    let tmp10 = fn;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] !== onBlur) {
    class L {
      constructor() {
        tmp = closure_2(false);
        tmp2 = onBlur();
        return;
      }
    }
    cResult[2] = onBlur;
    cResult[3] = L;
  } else {
    class L {
      constructor() {
        tmp = closure_2(false);
        tmp2 = onBlur();
        return;
      }
    }
  }
  if (tmp9) {
    class L {
      constructor() {
        tmp = closure_2(false);
        tmp2 = onBlur();
        return;
      }
    }
  }
  if (cResult[4] === tmp5.container) {
    class L {
      constructor() {
        tmp = closure_2(false);
        tmp2 = onBlur();
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          tmp = closure_2(false);
          tmp2 = onBlur();
          return;
        }
      }
      const stringResult = obj2.string(util.t.ZroO3G);
      cResult[7] = stringResult;
      const tmp13 = stringResult;
    } else {
      class L {
        constructor() {
          tmp = closure_2(false);
          tmp2 = onBlur();
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          tmp = closure_2(false);
          tmp2 = onBlur();
          return;
        }
      }
      const stringResult1 = obj3.string(util.t["/+MXmw"]);
      cResult[8] = stringResult1;
      const tmp15 = stringResult1;
    } else {
      class L {
        constructor() {
          tmp = closure_2(false);
          tmp2 = onBlur();
          return;
        }
      }
    }
    if (cResult[9] === L) {
      class L {
        constructor() {
          tmp = closure_2(false);
          tmp2 = onBlur();
          return;
        }
      }
    }
    const obj4 = { ref: inputRef, maxLength: tmp7, placeholder: tmp13, placeholderTextColor: tmp5.inputPlaceholder.color, accessibilityLabel: tmp15, onSubmitEditing: onSend, onSelectionChange, style: tmp5.chatInput, value: text, onChange, onFocus: tmp10, onBlur: L, multiline: true, showBorder: false, showTopContainer: false, textAlignVertical: "center", inputTextStyle: tmp5.chatText, editable: !tmp4 };
    const tmp20 = timestampProducer(FormInputDefault, obj4);
    cResult[9] = L;
    cResult[10] = tmp10;
    cResult[11] = inputRef;
    cResult[12] = tmp7;
    cResult[13] = onChange;
    cResult[14] = onSelectionChange;
    cResult[15] = onSend;
    cResult[16] = tmp5.chatInput;
    cResult[17] = tmp5.chatText;
    cResult[18] = tmp5.inputPlaceholder.color;
    cResult[19] = !tmp4;
    cResult[20] = text;
    cResult[21] = tmp20;
  }
  const items = [tmp5.container, tmp9];
  cResult[4] = tmp5.container;
  cResult[5] = tmp9;
  cResult[6] = items;
  const tmp8 = _slicedToArray(noop.useState(false), 2);
}) : (function ShareChatInput(onFocus) {
  onFocus = onFocus.onFocus;
  const onBlur = onFocus.onBlur;
  let flag = onFocus.disabled;
  ({ text, inputRef, onChange, onSelectionChange, onPressEmoji, onSend } = onFocus);
  if (flag === undefined) {
    flag = false;
  }
  c2 = undefined;
  const tmp = closure_8();
  const tmp4 = useMessageMaxLengthDefault();
  [focused, c2] = noop.useState(false);
  const items = [onFocus];
  const items1 = [onBlur];
  const callback = noop.useCallback(() => {
    _undefined(true);
    onFocus();
  }, items);
  const items2 = [tmp.container, ];
  const callback1 = noop.useCallback(() => {
    _undefined(false);
    onBlur();
  }, items1);
  if (focused) {
    focused = tmp.focused;
  }
  const obj = { style: items2, children: null };
  items2[1] = focused;
  const obj2 = { ref: inputRef, maxLength: tmp4, placeholder: null, placeholderTextColor: null, accessibilityLabel: null, onSubmitEditing: null, onSelectionChange: null, style: null, value: null, onChange: null, onFocus: null, onBlur: null, multiline: true, showBorder: false, showTopContainer: false, textAlignVertical: "center", inputTextStyle: null, editable: null };
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const intl = util.intl;
  obj2.placeholder = intl.string(util.t.ZroO3G);
  obj2.placeholderTextColor = tmp.inputPlaceholder.color;
  const intl2 = util.intl;
  obj2.accessibilityLabel = intl2.string(util.t["/+MXmw"]);
  obj2.onSubmitEditing = onSend;
  obj2.onSelectionChange = onSelectionChange;
  obj2.style = tmp.chatInput;
  obj2.value = text;
  obj2.onChange = onChange;
  obj2.onFocus = callback;
  obj2.onBlur = callback1;
  obj2.inputTextStyle = tmp.chatText;
  obj2.editable = !flag;
  const items3 = [timestampProducer(FormInputDefault, obj2), ];
  const obj3 = { accessibilityLabel: null, accessibilityRole: "button", onPress: null, style: null, disabled: null, children: null };
  const intl3 = util.intl;
  obj3.accessibilityLabel = intl3.string(util.t.iZ7Mz9);
  obj3.onPress = onPressEmoji;
  obj3.style = tmp.emojiButton;
  obj3.disabled = flag;
  obj3.children = timestampProducer(ReactionIcon.ReactionIcon, { size: "md" });
  items3[1] = timestampProducer(Pressables.PressableOpacity, obj3);
  obj.children = items3;
  return React5(View, obj);
});