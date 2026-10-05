// discord_app/modules/expression_picker/native/ExpressionPickerKeyboard.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import KeyboardManagerUtils from "../../../utils/native/KeyboardManagerUtils.tsx";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import PortalKeyboardConstants from "../../keyboard/native/PortalKeyboardConstants.tsx";
import getEmojiTextDefault from "../../emojis/utils/getEmojiText.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const KEYBOARD_ANIMATION_CONFIG = PortalKeyboardConstants.KEYBOARD_ANIMATION_CONFIG;
const jsx = Fragment.jsx;
let __initData = {
  code: "function ExpressionPickerKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}",
};
let closure_8 = {
  code: "function ExpressionPickerKeyboardTsx2(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}",
};
let closure_9 = {
  code: "function ExpressionPickerKeyboardTsx3(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}",
};
let closure_10 = {
  code: "function ExpressionPickerKeyboardTsx4(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}",
};
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onClose) => {
        let channel;
        let chatInputRef;
        let closure_7;
        let ref;
        let suggestedEmojis;
        let transitionState;
        let type;
        let obj = chatInputRef(transitionState[5]);
        const cResult = obj.c(37);
        ({ channel, chatInputRef } = onClose);
        onClose = onClose.onClose;
        transitionState = onClose.transitionState;
        let obj2 = chatInputRef(transitionState[6]);
        const sharedValue = obj2.useSharedValue(-1);
        const obj3 = chatInputRef(transitionState[6]);
        const sharedValue1 = obj3.useSharedValue(0);
        ref = ref.useRef(null);
        const obj4 = chatInputRef(transitionState[7]);
        const isScreenReaderEnabled = obj4.useIsScreenReaderEnabled();
        const tmp8 = sharedValue(ref.useState(false), 2);
        const first = tmp8[0];
        __initData = tmp8[1];
        if (cResult[0] !== chatInputRef) {
          const fn = function x(arg0) {
            const current = chatInputRef.current;
            current.insertText(getEmojiTextDefault(arg0), null, true);
            const obj = KeyboardManagerUtils;
            const result = obj.dismissGlobalKeyboard();
            const current2 = chatInputRef.current;
            const obj2 = { type: KeyboardTypes.KeyboardTypes.EXPRESSION };
            current2.openCustomKeyboard(obj2);
            const current3 = ref.current;
            if (current3 != null) {
              current3.snapToIndex(0);
            }
          };
          cResult[0] = chatInputRef;
          cResult[1] = fn;
        }
        if (cResult[2] !== chatInputRef) {
          class C {
            constructor(url) {
              const current = chatInputRef.current;
              current.handleSelectGIF(url);
              const current2 = chatInputRef.current;
              current2.openSystemKeyboard();
            }
          }
          cResult[2] = chatInputRef;
          cResult[3] = C;
        } else {
          class C {
            constructor(url) {
              const current = chatInputRef.current;
              current.handleSelectGIF(url);
              const current2 = chatInputRef.current;
              current2.openSystemKeyboard();
            }
          }
        }
        if (cResult[4] !== chatInputRef) {
          class C {
            constructor(url) {
              const current = chatInputRef.current;
              current.handleSelectGIF(url);
              const current2 = chatInputRef.current;
              current2.openSystemKeyboard();
            }
          }
          cResult[4] = chatInputRef;
          cResult[5] = tmp13;
        } else {
          class C {
            constructor(url) {
              const current = chatInputRef.current;
              current.handleSelectGIF(url);
              const current2 = chatInputRef.current;
              current2.openSystemKeyboard();
            }
          }
        }
        if (cResult[6] !== chatInputRef) {
          class D {
            constructor() {
              const current = chatInputRef.current;
              current.backspace();
            }
          }
          cResult[6] = chatInputRef;
          cResult[7] = D;
        } else {
          class D {
            constructor() {
              const current = chatInputRef.current;
              current.backspace();
            }
          }
        }
        const tmpResult = chatInputRef(transitionState[11]);
        const keyboardContextForType = tmpResult.useKeyboardContextForType(
          chatInputRef(tmp2[10]).KeyboardTypes.EXPRESSION,
        );
        ({ type, suggestedEmojis } = keyboardContextForType);
        const tmp16 = onClose(transitionState[12])();
        const minimum = tmp16.minimum;
        const maximum = tmp16.maximum;
        const fn2 = function j() {
          return Math.max(sharedValue.get(), 0) > 0;
        };
        fn2.__closure = { bottomSheetIndex: sharedValue };
        fn2.__workletHash = 1982988107352;
        fn2.__initData = __initData;
        const tmpResult3 = chatInputRef(transitionState[6]);
        const derivedValue = tmpResult3.useDerivedValue(fn2);
        const tmpResult4 = chatInputRef(transitionState[6]);
        class M {
          constructor() {
            const obj = { height: derivedValue.get() ? maximum : minimum };
            return obj;
          }
        }
        M.__closure = { bottomSheetExpandingOrExpanded: derivedValue, maximum, minimum };
        M.__workletHash = 13253776832356;
        M.__initData = minimum;
        const animatedStyle = tmpResult4.useAnimatedStyle(M);
        if (cResult[8] === chatInputRef) {
          class D {
            constructor() {
              const current = chatInputRef.current;
              current.backspace();
            }
          }
          if (cResult[11] === first) {
            class D {
              constructor() {
                const current = chatInputRef.current;
                current.backspace();
              }
            }
          }
          const fn3 = function q() {
            const tmp = first && transitionState === native.TransitionStates.YEETED;
            if (tmp) {
              if (onClose != null) {
                tmp5();
              }
            }
          };
          const items = [first, onClose, transitionState];
          cResult[11] = first;
          cResult[12] = onClose;
          cResult[13] = transitionState;
          cResult[14] = fn3;
          cResult[15] = items;
        }
        class V {
          constructor() {
            closure_7(true);
            if (isScreenReaderEnabled) {
              const current = chatInputRef.current;
              current.openSystemKeyboard();
            }
          }
        }
        cResult[8] = chatInputRef;
        cResult[9] = isScreenReaderEnabled;
        cResult[10] = V;
      }
    : (chatInputRef) => {
        let View;
        let obj8;
        let suggestedEmojis;
        let type;
        chatInputRef = chatInputRef.chatInputRef;
        const onClose = chatInputRef.onClose;
        const transitionState = chatInputRef.transitionState;
        let ref;
        let derivedValue;
        const channel = chatInputRef.channel;
        let obj = chatInputRef(transitionState[6]);
        const sharedValue = obj.useSharedValue(-1);
        let obj2 = chatInputRef(transitionState[6]);
        const sharedValue1 = obj2.useSharedValue(0);
        ref = ref.useRef(null);
        const obj3 = chatInputRef(transitionState[7]);
        const isScreenReaderEnabled = obj3.useIsScreenReaderEnabled();
        const tmp5 = sharedValue(ref.useState(false), 2);
        const first = tmp5[0];
        let closure_7 = tmp5[1];
        const items = [chatInputRef];
        const items1 = [chatInputRef];
        const callback = ref.useCallback((arg0) => {
          const current = chatInputRef.current;
          current.insertText(getEmojiTextDefault(arg0), null, true);
          const obj = KeyboardManagerUtils;
          const result = obj.dismissGlobalKeyboard();
          const current2 = chatInputRef.current;
          const obj2 = { type: KeyboardTypes.KeyboardTypes.EXPRESSION };
          current2.openCustomKeyboard(obj2);
          const current3 = ref.current;
          if (current3 != null) {
            current3.snapToIndex(0);
          }
        }, items);
        const items2 = [chatInputRef];
        const callback1 = ref.useCallback((url) => {
          const current = chatInputRef.current;
          current.handleSelectGIF(url);
          const current2 = chatInputRef.current;
          current2.openSystemKeyboard();
        }, items1);
        const items3 = [chatInputRef];
        const callback2 = ref.useCallback((sticker) => {
          const current = chatInputRef.current;
          current.handleSelectSticker(sticker);
          const current2 = chatInputRef.current;
          current2.openSystemKeyboard();
          const current3 = chatInputRef.current;
          current3.setText("");
        }, items2);
        const callback3 = ref.useCallback(() => {
          const current = chatInputRef.current;
          current.backspace();
        }, items3);
        const obj4 = chatInputRef(transitionState[11]);
        const keyboardContextForType = obj4.useKeyboardContextForType(
          chatInputRef(transitionState[10]).KeyboardTypes.EXPRESSION,
        );
        ({ type, suggestedEmojis } = keyboardContextForType);
        const tmp12 = onClose(transitionState[12])();
        const minimum = tmp12.minimum;
        const maximum = tmp12.maximum;
        const obj5 = chatInputRef(transitionState[6]);
        class S {
          constructor() {
            return Math.max(sharedValue.get(), 0) > 0;
          }
        }
        S.__closure = { bottomSheetIndex: sharedValue };
        S.__workletHash = 17590128332378;
        S.__initData = maximum;
        derivedValue = obj5.useDerivedValue(S);
        const fn = function b() {
          const obj = { height: derivedValue.get() ? maximum : minimum };
          return obj;
        };
        fn.__closure = { bottomSheetExpandingOrExpanded: derivedValue, maximum, minimum };
        fn.__workletHash = 7280607865186;
        fn.__initData = derivedValue;
        const items4 = [isScreenReaderEnabled, chatInputRef];
        const obj6 = chatInputRef(transitionState[6]);
        const animatedStyle = obj6.useAnimatedStyle(fn);
        const items5 = [first, onClose, transitionState];
        const callback4 = ref.useCallback(() => {
          closure_7(true);
          if (isScreenReaderEnabled) {
            const current = chatInputRef.current;
            current.openSystemKeyboard();
          }
        }, items4);
        const effect = ref.useEffect(() => {
          const tmp = first && transitionState === native.TransitionStates.YEETED;
          if (tmp) {
            if (onClose != null) {
              tmp5();
            }
          }
        }, items5);
        const obj7 = {
          ref,
          animatedIndex: sharedValue,
          animatedPosition: sharedValue1,
          forceMaxHeight: isScreenReaderEnabled,
          chatInputRef,
          animationConfigs: isScreenReaderEnabled,
          onClose: callback4,
          renderExpressionFooter: true,
          transitionState,
          children: first(View, obj8),
        };
        obj8 = {
          nativeID: "expression-picker-sheet",
          style: animatedStyle,
          children: first(onClose(transitionState[14]), {
            bottomSheetRef: ref,
            bottomSheetIndex: sharedValue,
            onBackspace: callback3,
            onPressEmoji: callback,
            onPressGIF: callback1,
            onPressSticker: callback2,
            channel,
            expressionType: type,
            suggestedEmojis,
            inPortalKeyboard: true,
          }),
        };
        const tmp17 = onClose(transitionState[15]);
        View = onClose(transitionState[6]).View;
        return first(tmp17, obj7, "expression-picker-" + isScreenReaderEnabled);
      },
);
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerKeyboard.tsx");

export default memoResult;
