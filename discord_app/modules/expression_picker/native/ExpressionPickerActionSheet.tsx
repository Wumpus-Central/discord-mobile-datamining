// discord_app/modules/expression_picker/native/ExpressionPickerActionSheet.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import NavigatorConstants from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import KeyboardUtils from "../../../utils/native/KeyboardUtils.tsx";
import PortalKeyboardFooterIOSDefault from "../../keyboard/native/PortalKeyboardFooterIOS.ios.tsx";
import ExpressionPickerDefault from "ExpressionPicker.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
let closure_5 = fn(7151).ACTION_SHEET_START_HEIGHT_RATIO;
const STICKER_FORMATS = fn(10273).STICKER_FORMATS;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  ({ channelId: require, onPressEmoji: importDefault, onPressSticker: dependencyMap, onPressGIF: noop } = arg0);
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(-1);
  let obj1 = useKeyboardType;
  const keyboardContextForType = obj1.useKeyboardContextForType(KeyboardTypes.KeyboardTypes.EXPRESSION);
  let obj2 = initialize;
  const items = [ChannelStore];
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(require));
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const diff = height - NavigatorConstants.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  let tmp15Result = null;
  if (undefined !== stateFromStores) {
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      obj = { animatedSheetIndex: sharedValue, followSystemKeyboard: true };
      isIOSResult = closure_7(PortalKeyboardFooterIOSDefault, obj);
    }
    obj = { children: null };
    const items1 = [isIOSResult];
    obj1 = {
      scrollable: true,
      animatedIndex: sharedValue,
      startHeight: height * closure_5,
      containerHeight: diff,
      onDismiss,
      children: null,
    };
    obj2 = {
      bottomSheetRef: ref,
      bottomSheetIndex: sharedValue,
      channel: stateFromStores,
      expressionType: keyboardContextForType,
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
      height: diff,
    };
    obj1.children = closure_7(ExpressionPickerDefault, obj2);
    items1[1] = closure_7(Sheet_BottomSheet.BottomSheet, obj1);
    obj.children = items1;
    tmp15Result = closure_9(closure_8, obj);
    const tmp2Result = PlatformUtils;
  }
  return tmp15Result;
}
