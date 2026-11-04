// === Module 12791: ExpressionPickerKeyboard ===

// Module 12791 (ExpressionPickerKeyboard)
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import _modDef1652 from "module_1652" /* 1652 */;
import KeyboardManagerUtils from "KeyboardManagerUtils" /* 2017 */;
import native from "native" /* 5207 */;
import ExpressionPickerDefault from "ExpressionPicker" /* 10416 */;
import useKeyboardActionSheetHeightDefault from "useKeyboardActionSheetHeight" /* 11435 */;
import PortalKeyboardBottomSheetDefault from "PortalKeyboardBottomSheet" /* 12624 */;
import getEmojiTextDefault from "getEmojiText" /* 12792 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const KEYBOARD_ANIMATION_CONFIG = fn(12582).KEYBOARD_ANIMATION_CONFIG;
let jsx = fn(21).jsx;
let closure_7 = { code: "(function ExpressionPickerKeyboardTsx1(){let[bottomSheetIndex]=this.__closure;return Math.max(bottomSheetIndex.get(),0)>0;})" };
let closure_8 = { code: "(function ExpressionPickerKeyboardTsx2(){let[bottomSheetExpandingOrExpanded,maximum,minimum]=this.__closure;return{height:bottomSheetExpandingOrExpanded.get()?maximum:minimum};})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerKeyboard.tsx");

export default noop.memo(function ExpressionPickerKeyboard(channel) {
  const chatInputRef = channel.chatInputRef;
  _require = chatInputRef;
  const onClose = channel.onClose;
  importDefault = onClose;
  const transitionState = channel.transitionState;
  dependencyMap = transitionState;
  let isScreenReaderEnabled;
  const sharedValue = require("module_1652").useSharedValue(-1);
  let obj = require("module_1652");
  let tmp = _require;
  const sharedValue1 = require("module_1652").useSharedValue(0);
  const ref = isScreenReaderEnabled.useRef(null);
  const obj2 = require("module_1652");
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const tmp7 = ref(isScreenReaderEnabled.useState(false), 2);
  const animationConfigs = tmp7[0];
  jsx = tmp7[1];
  items = [chatInputRef];
  const items1 = [chatInputRef];
  const callback = isScreenReaderEnabled.useCallback((arg0) => {
    const current = _undefined.current;
    current.insertText(getEmojiTextDefault(arg0), null, true);
    const result = KeyboardManagerUtils.dismissGlobalKeyboard();
    const current2 = _undefined.current;
    current2.openCustomKeyboard({ type: KeyboardTypes.KeyboardTypes.EXPRESSION });
    const current3 = ref.current;
    if (current3 != null) {
      current3.snapToIndex(0);
    }
  }, items);
  const items2 = [chatInputRef];
  const callback1 = isScreenReaderEnabled.useCallback((url) => {
    const current = _undefined.current;
    current.handleSelectGIF(url);
    const current2 = _undefined.current;
    current2.openSystemKeyboard();
  }, items1);
  const items3 = [chatInputRef];
  const callback2 = isScreenReaderEnabled.useCallback((sticker) => {
    const current = _undefined.current;
    current.handleSelectSticker(sticker);
    const current2 = _undefined.current;
    current2.openSystemKeyboard();
    const current3 = _undefined.current;
    current3.setText("");
  }, items2);
  const callback3 = isScreenReaderEnabled.useCallback(() => {
    const current = _undefined.current;
    current.backspace();
  }, items3);
  const obj4 = require("useIsScreenReaderEnabled");
  const keyboardContextForType = require("useKeyboardType").useKeyboardContextForType(require("KeyboardTypes").KeyboardTypes.EXPRESSION);
  ({ type, suggestedEmojis } = keyboardContextForType);
  const obj5 = require("useKeyboardType");
  ({ minimum, maximum } = useKeyboardActionSheetHeightDefault());
  const tmp15 = useKeyboardActionSheetHeightDefault();
  const items4 = [closure_7, sharedValue];
  _require = undefined;
  [tmp16, tmp17] = items4;
  class ExpressionPickerKeyboardTsx1 {
    constructor() {
      return Math.max(closure_0.get(), 0) > 0;
    }
  }
  const items5 = [tmp17];
  ExpressionPickerKeyboardTsx1.__closure = items5;
  ExpressionPickerKeyboardTsx1.__workletHash = 15440201615969;
  ExpressionPickerKeyboardTsx1.__initData = tmp16;
  const derivedValue = require("module_1652").useDerivedValue(ExpressionPickerKeyboardTsx1);
  const obj6 = require("module_1652");
  const items6 = [closure_8, derivedValue, maximum, minimum];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp19, tmp20, tmp21, tmp22] = items6;
  class ExpressionPickerKeyboardTsx2 {
    constructor() {
      obj = { height: closure_0.get() ? closure_1 : closure_2 };
      return obj;
    }
  }
  const items7 = [tmp20, tmp21, tmp22];
  ExpressionPickerKeyboardTsx2.__closure = items7;
  ExpressionPickerKeyboardTsx2.__workletHash = 10164343902621;
  ExpressionPickerKeyboardTsx2.__initData = tmp19;
  const items8 = [isScreenReaderEnabled, chatInputRef];
  const animatedStyle = tmp(1652).useAnimatedStyle(ExpressionPickerKeyboardTsx2);
  const items9 = [animationConfigs, onClose, transitionState];
  const callback4 = obj3.useCallback(() => {
    closure_6(true);
    if (isScreenReaderEnabled) {
      const current = _undefined.current;
      current.openSystemKeyboard();
    }
  }, items8);
  const effect = obj3.useEffect(() => {
    let tmp = first;
    if (first) {
      tmp = c2 === native.TransitionStates.YEETED;
    }
    if (tmp) {
      if (c1 != null) {
        tmp5();
      }
    }
  }, items9);
  const obj7 = { ref, animatedIndex: sharedValue, animatedPosition: sharedValue1, forceMaxHeight: isScreenReaderEnabled, chatInputRef, animationConfigs, onClose: callback4, renderExpressionFooter: true, transitionState, children: null };
  const tmpResult = tmp(1652);
  const tmp14Result = PortalKeyboardBottomSheetDefault;
  obj7.children = jsx(_modDef1652.View, { nativeID: "expression-picker-sheet", style: animatedStyle, children: jsx(ExpressionPickerDefault, { bottomSheetRef: ref, bottomSheetIndex: sharedValue, onBackspace: callback3, onPressEmoji: callback, onPressGIF: callback1, onPressSticker: callback2, channel: channel.channel, expressionType: type, suggestedEmojis, inPortalKeyboard: true }) });
  return <tmp14Result key={"expression-picker-" + isScreenReaderEnabled} ref={ref} animatedIndex={sharedValue} animatedPosition={sharedValue1} forceMaxHeight={isScreenReaderEnabled} chatInputRef={chatInputRef} animationConfigs={animationConfigs} onClose={callback4} renderExpressionFooter transitionState={transitionState}>{null}</tmp14Result>;
});