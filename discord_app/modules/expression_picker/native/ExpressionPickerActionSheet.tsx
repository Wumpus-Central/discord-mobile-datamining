// === Module 10354: ExpressionPickerActionSheet ===

// Module 10354 (ExpressionPickerActionSheet)
import initialize from "initialize" /* 504 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import KeyboardTypes from "KeyboardTypes" /* 1625 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import _mod1652 from "module_1652" /* 1652 */;
import useKeyboardType from "useKeyboardType" /* 5325 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5388 */;
import NavigatorConstants from "NavigatorConstants" /* 5714 */;
import PortalKeyboardFooterIOSDefault from "PortalKeyboardFooterIOS" /* 10087 */;
import KeyboardUtils from "KeyboardUtils" /* 10356 */;
import ExpressionPickerDefault from "ExpressionPicker" /* 10357 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4989 */;

require = fn;
let closure_5 = fn(5389).ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = fn(10355).STICKER_FORMATS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  ({ channelId: require, onPressEmoji: importDefault, onPressSticker: dependencyMap, onPressGIF: noop } = arg0);
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  const ref = noop.useRef(null);
  const sharedValue = _mod1652.useSharedValue(-1);
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