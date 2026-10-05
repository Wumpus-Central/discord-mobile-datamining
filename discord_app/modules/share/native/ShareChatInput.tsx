// discord_app/modules/share/native/ShareChatInput.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import ReactionIcon from "../../../design/components/Icon/native/redesign/generated/ReactionIcon.tsx";
import useMessageMaxLengthDefault from "../../messages/useMessageMaxLength.tsx";
import FormInputDefault from "../../../design/void/Form/native/FormInput.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let PX_8;
let metroImportDefault;
let metroRequire;
let num;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  chatInput: obj3,
  chatText: obj4,
  inputPlaceholder: { color: nativeDefault.colors.TEXT_MUTED },
  emojiButton: { paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, alignSelf: "flex-end" },
  focused: { borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE },
};
obj2 = {
  flex: 1,
  flexDirection: "row",
  backgroundColor: nativeDefault.colors.SHARE_CHAT_INPUT_BACKGROUND,
  borderRadius: nativeDefault.modules.mobile.CHAT_INPUT_BORDER_RADIUS,
  borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH,
  borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_DEFAULT,
  paddingHorizontal: nativeDefault.space.PX_12,
};
createStyles = createStyles.createStyles;
obj3 = { flex: 1, paddingVertical: 0, paddingHorizontal: nativeDefault.space.PX_4, maxHeight: 80 };
obj4 = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: Fonts.PRIMARY_NORMAL,
  color: nativeDefault.colors.TEXT_STRONG,
  paddingTop: PX_8 + num,
  paddingBottom: nativeDefault.space.PX_8,
};
PX_8 = nativeDefault.space.PX_8;
num = 2;
if (PlatformUtils.isAndroid()) {
  num = 0;
}
({ color: nativeDefault.colors.TEXT_MUTED });
({ paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8, alignSelf: "flex-end" });
({ borderColor: nativeDefault.colors.MOBILE_CHATINPUT_BORDER_ACTIVE });
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onBlur) => {
      let closure_129_2;
      let disabled;
      let inputRef;
      let onChange;
      let onFocus;
      let onPressEmoji;
      let onSelectionChange;
      let onSend;
      let text;
      let tmp10;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(32);
      ({ text, inputRef, onChange, onSelectionChange, onFocus } = onBlur);
      onBlur = onBlur.onBlur;
      ({ onPressEmoji, onSend, disabled } = onBlur);
      const tmp5 = closure_8();
      const tmp7 = useMessageMaxLengthDefault();
      [tmp9, closure_129_2] = react.useState(false);
      _slicedToArray(react.useState(false), 2);
      if (cResult[0] !== onFocus) {
        const fn = function c() {
          closure_1_2(true);
          onFocus();
        };
        cResult[0] = onFocus;
        cResult[1] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== onBlur) {
        class L {
          constructor() {
            closure_1_2(false);
            onBlur();
          }
        }
        cResult[2] = onBlur;
        cResult[3] = L;
      } else {
        class L {
          constructor() {
            closure_1_2(false);
            onBlur();
          }
        }
      }
      if (tmp9) {
        class L {
          constructor() {
            closure_1_2(false);
            onBlur();
          }
        }
      }
      if (cResult[4] === tmp5.container) {
        let tmp13;
        let tmp15;
        class L {
          constructor() {
            closure_1_2(false);
            onBlur();
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              closure_1_2(false);
              onBlur();
            }
          }
          const stringResult = obj2.string(intl4.t.ZroO3G);
          cResult[7] = stringResult;
          tmp13 = stringResult;
        } else {
          class L {
            constructor() {
              closure_1_2(false);
              onBlur();
            }
          }
        }
        const _Symbol2 = Symbol;
        const color = tmp5.inputPlaceholder.color;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              closure_1_2(false);
              onBlur();
            }
          }
          const stringResult1 = obj3.string(intl4.t["/+MXmw"]);
          cResult[8] = stringResult1;
          tmp15 = stringResult1;
        } else {
          class L {
            constructor() {
              closure_1_2(false);
              onBlur();
            }
          }
        }
        if (cResult[9] === L) {
          class L {
            constructor() {
              closure_1_2(false);
              onBlur();
            }
          }
        }
        const obj4 = {
          ref: inputRef,
          maxLength: tmp7,
          placeholder: tmp13,
          placeholderTextColor: color,
          accessibilityLabel: tmp15,
          onSubmitEditing: onSend,
          onSelectionChange,
          style: tmp5.chatInput,
          value: text,
          onChange,
          onFocus: tmp10,
          onBlur: L,
          multiline: true,
          showBorder: false,
          showTopContainer: false,
          textAlignVertical: "center",
          inputTextStyle: tmp5.chatText,
          editable: !(undefined !== disabled && disabled),
        };
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
        cResult[19] = !(undefined !== disabled && disabled);
        cResult[20] = text;
        cResult[21] = metroRequire(FormInputDefault, obj4);
        const tmp20 = metroRequire(FormInputDefault, obj4);
      }
      const items = [tmp5.container, tmp9];
      cResult[4] = tmp5.container;
      cResult[5] = tmp9;
      cResult[6] = items;
    }
  : (onFocus) => {
      let c2;
      let focused;
      let inputRef;
      let intl;
      let intl2;
      let intl3;
      let items3;
      let onChange;
      let onPressEmoji;
      let onSelectionChange;
      let onSend;
      let text;
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
      [focused, c2] = react.useState(false);
      const items = [onFocus];
      const items1 = [onBlur];
      _slicedToArray(react.useState(false), 2);
      const callback = react.useCallback(() => {
        _undefined(true);
        onFocus();
      }, items);
      const items2 = [tmp.container];
      const callback1 = react.useCallback(() => {
        _undefined(false);
        onBlur();
      }, items1);
      if (focused) {
        focused = tmp.focused;
      }
      const obj = { style: items2, children: items3 };
      items2[1] = focused;
      const obj2 = {
        ref: inputRef,
        maxLength: tmp4,
        placeholder: intl.string(intl4.t.ZroO3G),
        placeholderTextColor: tmp.inputPlaceholder.color,
        accessibilityLabel: intl2.string(intl4.t["/+MXmw"]),
        onSubmitEditing: onSend,
        onSelectionChange,
        style: tmp.chatInput,
        value: text,
        onChange,
        onFocus: callback,
        onBlur: callback1,
        multiline: true,
        showBorder: false,
        showTopContainer: false,
        textAlignVertical: "center",
        inputTextStyle: tmp.chatText,
        editable: !flag,
      };
      const tmp2Result = FormInputDefault;
      intl = intl4.intl;
      intl2 = intl4.intl;
      items3 = [metroRequire(tmp2Result, obj2)];
      const obj3 = {
        accessibilityLabel: intl3.string(intl4.t.iZ7Mz9),
        accessibilityRole: "button",
        onPress: onPressEmoji,
        style: tmp.emojiButton,
        disabled: flag,
        children: metroRequire(ReactionIcon.ReactionIcon, { size: "md" }),
      };
      const PressableOpacity = Pressables.PressableOpacity;
      intl3 = intl4.intl;
      items3[1] = metroRequire(PressableOpacity, obj3);
      return metroImportDefault(View, obj);
    };
const result = size.fileFinishedImporting("modules/share/native/ShareChatInput.tsx");

export default tmp4;
