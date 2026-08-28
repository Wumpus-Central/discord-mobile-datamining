// === Module 16276: ? ===

// Module 16276
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { KEYBOARD_ANIMATION_CONFIG } from "KEYBOARD_ANIMATION_DURATION" /* 11544 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let c4 = importAllResult;
let closure_7 = { code: "function ExpressionPickerKeyboardTsx1(){const{bottomSheetIndex}=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;}" };
let closure_8 = { code: "function ExpressionPickerKeyboardTsx2(){const{bottomSheetExpandingOrExpanded,maximum,minimum}=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};}" };
const memoResult = importAllResult.memo(function ExpressionPickerKeyboard(channel) {
  const chatInputRef = channel.chatInputRef;
  const onClose = channel.onClose;
  const transitionState = channel.transitionState;
  let sharedValue;
  let ref;
  let isScreenReaderEnabled;
  let first;
  closure_7 = undefined;
  let minimum;
  let maximum;
  let derivedValue;
  let obj = chatInputRef(transitionState[4]);
  sharedValue = obj.useSharedValue(-1);
  const sharedValue1 = chatInputRef(transitionState[4]).useSharedValue(0);
  ref = ref.useRef(null);
  const obj2 = chatInputRef(transitionState[4]);
  isScreenReaderEnabled = chatInputRef(transitionState[5]).useIsScreenReaderEnabled();
  const tmp5 = sharedValue(ref.useState(false), 2);
  first = tmp5[0];
  closure_7 = tmp5[1];
  const items = [chatInputRef];
  const items1 = [chatInputRef];
  const callback = ref.useCallback((arg0) => {
    const current = chatInputRef.current;
    current.insertText(onClose(transitionState[6])(arg0), null, true);
    let obj = chatInputRef(transitionState[7]);
    const result = obj.dismissGlobalKeyboard();
    const current2 = chatInputRef.current;
    obj = { type: chatInputRef(transitionState[8]).KeyboardTypes.EXPRESSION };
    current2.openCustomKeyboard(obj);
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
  const obj3 = chatInputRef(transitionState[5]);
  const keyboardContextForType = chatInputRef(transitionState[9]).useKeyboardContextForType(chatInputRef(transitionState[8]).KeyboardTypes.EXPRESSION);
  const tmp12 = onClose(transitionState[10])();
  minimum = tmp12.minimum;
  maximum = tmp12.maximum;
  const obj4 = chatInputRef(transitionState[9]);
  const fn = function b() {
    return Math.max(sharedValue.get(), 0) > 0;
  };
  fn.__closure = { bottomSheetIndex: sharedValue };
  fn.__workletHash = 1982988107352;
  fn.__initData = closure_7;
  derivedValue = chatInputRef(transitionState[4]).useDerivedValue(fn);
  const obj5 = chatInputRef(transitionState[4]);
  class S {
    constructor() {
      obj = { height: closure_10.get() ? maximum : minimum };
      return obj;
    }
  }
  S.__closure = { bottomSheetExpandingOrExpanded: derivedValue, maximum, minimum };
  S.__workletHash = 13253776832356;
  S.__initData = minimum;
  const items4 = [isScreenReaderEnabled, chatInputRef];
  const animatedStyle = chatInputRef(transitionState[4]).useAnimatedStyle(S);
  const items5 = [first, onClose, transitionState];
  const callback4 = ref.useCallback(() => {
    callback(true);
    if (isScreenReaderEnabled) {
      const current = chatInputRef.current;
      current.openSystemKeyboard();
    }
  }, items4);
  const effect = ref.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = transitionState === chatInputRef(transitionState[11]).TransitionStates.YEETED;
    }
    if (tmp) {
      if (onClose != null) {
        tmp5();
      }
    }
  }, items5);
  obj = { ref, animatedIndex: sharedValue, animatedPosition: sharedValue1, forceMaxHeight: isScreenReaderEnabled, chatInputRef, animationConfigs: isScreenReaderEnabled, onClose: callback4, renderExpressionFooter: true, transitionState, children: null };
  const obj6 = chatInputRef(transitionState[4]);
  obj = { nativeID: "expression-picker-sheet", style: animatedStyle, children: first(onClose(transitionState[13]), { bottomSheetRef: ref, bottomSheetIndex: sharedValue, onBackspace: callback3, onPressEmoji: callback, onPressGIF: callback1, onPressSticker: callback2, channel: channel.channel, expressionType: keyboardContextForType, inPortalKeyboard: true }) };
  obj[9] = first(onClose(transitionState[4]).View, obj);
  return first(onClose(transitionState[12]), obj, "expression-picker-" + isScreenReaderEnabled);
});
let result = require("set").fileFinishedImporting("modules/expression_picker/native/ExpressionPickerKeyboard.tsx");

export default memoResult;