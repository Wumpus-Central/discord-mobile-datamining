// === Module 10800: ExpressionPickerActionSheet ===

// Module 10800 (ExpressionPickerActionSheet)
import initialize from "initialize" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1379 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1495 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import _mod1654 from "module_1654" /* 1654 */;
import useKeyboardType from "useKeyboardType" /* 5230 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5271 */;
import NavigatorConstants from "NavigatorConstants" /* 5597 */;
import PortalKeyboardFooterIOSDefault from "PortalKeyboardFooterIOS" /* 9580 */;
import KeyboardUtils from "KeyboardUtils" /* 10802 */;
import ExpressionPickerDefault from "ExpressionPicker" /* 10803 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;

require = fn;
let closure_5 = fn(5272).ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = fn(10801).STICKER_FORMATS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  ({ channelId: require, onPressEmoji: importDefault, onPressSticker: dependencyMap, onPressGIF: noop } = arg0);
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  const ref = noop.useRef(null);
  const sharedValue = _mod1654.useSharedValue(-1);
  const obj2 = useKeyboardType;
  items = [ChannelStore];
  const stateFromStores = initialize.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  let tmp14Result = null;
  if (undefined !== stateFromStores) {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      const obj4 = { animatedSheetIndex: sharedValue, followSystemKeyboard: true, constrainToActionSheet: true };
      isIOSResult = closure_7(PortalKeyboardFooterIOSDefault, obj4);
    }
    const obj5 = { children: null };
    const items1 = [isIOSResult, ];
    const obj6 = { scrollable: true, animatedIndex: sharedValue, startHeight: height * closure_5, containerHeight: diff, onDismiss, children: null };
    const obj7 = {
      bottomSheetRef: ref,
      bottomSheetIndex: sharedValue,
      channel: stateFromStores,
      expressionType: obj2.useKeyboardContextForType(KeyboardTypes.KeyboardTypes.EXPRESSION).type,
      hideGifFavorites,
      onPressEmoji(arg0) {
          closure_1_1(arg0);
          KeyboardUtils.dismissKeyboard();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      onPressGIF(arg0) {
          noop(arg0);
          KeyboardUtils.dismissKeyboard();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      onPressSticker(arg0) {
          dependencyMap(arg0);
          KeyboardUtils.dismissKeyboard();
          ActionSheetActionCreatorsDefault.hideActionSheet();
        },
      visibleTabs,
      initialGifQuery,
      stickerFormats: STICKER_FORMATS,
      height: diff
    };
    obj6.children = closure_7(ExpressionPickerDefault, obj7);
    items1[1] = closure_7(Sheet_BottomSheet.BottomSheet, obj6);
    obj5.children = items1;
    tmp14Result = closure_9(closure_8, obj5);
    const tmp2Result = PlatformUtils;
  }
  return tmp14Result;
};