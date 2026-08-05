// discord_app/modules/expression_picker/native/ExpressionPickerActionSheet.tsx
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ACTION_SHEET_START_HEIGHT_RATIO as closure_5 } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { STICKER_FORMATS } from "PADDING_HORIZONTAL";
import jsxProd from "jsxProd";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { NAV_BAR_HEIGHT } from "../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import { KeyboardTypes } from "../../keyboard/native/KeyboardTypes.tsx";
import { useKeyboardType } from "../../keyboard/native/useKeyboardType.tsx";
import { ReanimatedRexport } from "../../reanimated/ReanimatedRexport.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
const result = require("ACTION_SHEET_START_HEIGHT_RATIO").fileFinishedImporting("modules/expression_picker/native/ExpressionPickerActionSheet.tsx");

export default function ExpressionPickerActionSheet(arg0) {
  let noop;
  let dependencyMap;
  let hideGifFavorites;
  let importDefault;
  let initialGifQuery;
  let onDismiss;
  let require;
  let visibleTabs;
  ({ channelId: require, onPressEmoji: importDefault, onPressSticker: dependencyMap, onPressGIF: noop } = arg0);
  ({ hideGifFavorites, onDismiss, visibleTabs, initialGifQuery } = arg0);
  let obj = ReanimatedRexport;
  const sharedValue = obj.useSharedValue(-1);
  let obj1 = useKeyboardType /* useKeyboardType */;
  const keyboardContextForType = obj1.useKeyboardContextForType(KeyboardTypes /* KeyboardTypes */.KeyboardTypes.EXPRESSION);
  let obj2 = initialize /* initialize */;
  const items = [ensureGuildLoaded];
  const stateFromStores = obj2.useStateFromStores(items, () => outer1_4.getChannel(closure_0));
  const height = useWindowDimensions({ ignoreKeyboard: true }).height;
  const diff = height - NAV_BAR_HEIGHT /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT_MULTILINE - useSafeAreaInsets().top;
  let tmp15Result = null;
  if (undefined !== stateFromStores) {
    let isIOSResult = tmp2(500).isIOS();
    if (isIOSResult) {
      obj = { animatedSheetIndex: null, followSystemKeyboard: true };
      obj[0] = sharedValue;
      isIOSResult = callback(tmp7(8595), obj);
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
      outer1_0(outer1_2[9]).dismissKeyboard();
      const obj = outer1_0(outer1_2[9]);
      outer1_1(outer1_2[10]).hideActionSheet();
    };
    obj2[6] = function onPressGIF(arg0) {
      callback3(arg0);
      outer1_0(outer1_2[9]).dismissKeyboard();
      const obj = outer1_0(outer1_2[9]);
      outer1_1(outer1_2[10]).hideActionSheet();
    };
    obj2[7] = function onPressSticker(arg0) {
      callback2(arg0);
      outer1_0(outer1_2[9]).dismissKeyboard();
      const obj = outer1_0(outer1_2[9]);
      outer1_1(outer1_2[10]).hideActionSheet();
    };
    obj2[8] = visibleTabs;
    obj2[9] = initialGifQuery;
    obj2[10] = STICKER_FORMATS;
    obj2[11] = diff;
    obj1[5] = callback(tmp7(9844), obj2);
    items1[1] = callback(tmp2(5338).BottomSheet, obj1);
    obj[0] = items1;
    tmp15Result = closure_9(closure_8, obj);
    const tmp15 = closure_9;
    const tmp16 = closure_8;
    const tmp2Result = tmp2(500);
  }
  return tmp15Result;
};