// discord_app/modules/expression_picker/native/ExpressionPickerActionSheet.tsx
import obj132 from "../../../utils/PlatformUtils.tsx";
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import _mod4115 from "../../reanimated/ReanimatedRexport.tsx";
import useKeyboardType from "../../keyboard/native/useKeyboardType.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import NAV_BAR_HEIGHT from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import Background from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import PortalKeyboardFooterIOSDefault from "../../keyboard/native/PortalKeyboardFooterIOS.ios.tsx";
import dismissKeyboard from "../../../utils/native/KeyboardUtils.tsx";
import _modDef10189 from "ExpressionPicker.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_5 } from "../../action_sheet/native/ActionSheetConstants.tsx";
import { STICKER_FORMATS } from "../../stickers/native/StickerPickerConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  ({ channelId: require, onPressEmoji: importDefault, onPressSticker: dependencyMap, onPressGIF: closure_3 } = arg0);
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  let obj = _mod4115;
  const sharedValue = obj.useSharedValue(-1);
  obj1 = useKeyboardType;
  const keyboardContextForType = obj1.useKeyboardContextForType(KeyboardTypes.KeyboardTypes.EXPRESSION);
  let obj2 = initialize;
  const items = [closure_4];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_1_4.getChannel(closure_0));
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const diff = height - NAV_BAR_HEIGHT.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsetsDefault().top;
  let tmp15Result = null;
  if (undefined !== stateFromStores) {
    let isIOSResult = obj132.isIOS();
    if (isIOSResult) {
      obj = { animatedSheetIndex: null, followSystemKeyboard: true };
      obj[0] = sharedValue;
      isIOSResult = callback(PortalKeyboardFooterIOSDefault, obj);
    }
    obj = { children: null };
    const items1 = [isIOSResult, ];
    obj1 = { scrollable: true, animatedIndex: null, startHeight: null, containerHeight: null, onDismiss: null, children: null };
    obj1[1] = sharedValue;
    obj1[2] = height * closure_5;
    obj1[3] = diff;
    obj1[4] = onDismiss;
    obj2 = { bottomSheetRef: null, bottomSheetIndex: null, channel: null, expressionType: null, hideGifFavorites: null, onPressEmoji: null, onPressGIF: null, onPressSticker: null, visibleTabs: null, initialGifQuery: null, stickerFormats: null, height: null };
    obj2[0] = ref;
    obj2[1] = sharedValue;
    obj2[2] = stateFromStores;
    obj2[3] = keyboardContextForType;
    obj2[4] = hideGifFavorites;
    obj2[5] = function onPressEmoji(arg0) {
      callback(arg0);
      dismissKeyboard.dismissKeyboard();
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    };
    obj2[6] = function onPressGIF(arg0) {
      callback3(arg0);
      dismissKeyboard.dismissKeyboard();
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    };
    obj2[7] = function onPressSticker(arg0) {
      callback2(arg0);
      dismissKeyboard.dismissKeyboard();
      ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
    };
    obj2[8] = visibleTabs;
    obj2[9] = initialGifQuery;
    obj2[10] = STICKER_FORMATS;
    obj2[11] = diff;
    obj1[5] = callback(_modDef10189, obj2);
    items1[1] = callback(Background.BottomSheet, obj1);
    obj[0] = items1;
    tmp15Result = callback(closure_8, obj);
    const tmp2Result = obj132;
  }
  return tmp15Result;
};