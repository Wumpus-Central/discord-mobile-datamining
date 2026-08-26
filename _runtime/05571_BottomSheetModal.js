// === Module 5571: BottomSheetModal ===

// Module 5571 (BottomSheetModal)
import BottomSheetDefault from "BottomSheet" /* 5573 */;
import useBottomSheet from "useBottomSheet" /* 5577 */;
import useBottomSheetInternal from "useBottomSheetInternal" /* 5579 */;
import useBottomSheetModal from "useBottomSheetModal" /* 5581 */;
import useBottomSheetModalInternal from "useBottomSheetModalInternal" /* 5586 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5588 */;
import print from "print" /* 5592 */;
import useScrollableSetter from "useScrollableSetter" /* 5596 */;
import useScrollHandler from "useScrollHandler" /* 5597 */;
import useScrollEventsHandlersDefault from "useScrollEventsHandlersDefault" /* 5598 */;
import t from "t" /* 5741 */;
import useBottomSheetGestureHandlers from "useBottomSheetGestureHandlers" /* 5744 */;
import memoDefault from "memo" /* 5764 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5766 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5770 */;
import memoDefault2 from "memo" /* 5775 */;
import sharedValueDefault from "sharedValue" /* 5779 */;
import useBottomSheetSpringConfigs from "useBottomSheetSpringConfigs" /* 5781 */;
import useBottomSheetTimingConfigs from "useBottomSheetTimingConfigs" /* 5782 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5783 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5871 */;
import memoDefault3 from "memo" /* 5874 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5876 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5880 */;

for (const key10013 in require("GESTURE_SOURCE")) {
  let tmp2 = key10013;
  arg5[key10013] = require("GESTURE_SOURCE")[key10013];
  continue;
}

export default BottomSheetDefault;
export const BottomSheetModal = memoDefault2;
export const BottomSheetModalProvider = sharedValueDefault;
export const useBottomSheet = useBottomSheet.useBottomSheet;
export const useBottomSheetModal = useBottomSheetModal.useBottomSheetModal;
export const useBottomSheetSpringConfigs = useBottomSheetSpringConfigs.useBottomSheetSpringConfigs;
export const useBottomSheetTimingConfigs = useBottomSheetTimingConfigs.useBottomSheetTimingConfigs;
export const useBottomSheetInternal = useBottomSheetInternal.useBottomSheetInternal;
export const useBottomSheetModalInternal = useBottomSheetModalInternal.useBottomSheetModalInternal;
export const useScrollEventsHandlersDefault = useScrollEventsHandlersDefault.useScrollEventsHandlersDefault;
export const useGestureEventsHandlersDefault = t.useGestureEventsHandlersDefault;
export const useBottomSheetGestureHandlers = useBottomSheetGestureHandlers.useBottomSheetGestureHandlers;
export const useScrollHandler = useScrollHandler.useScrollHandler;
export const useScrollableSetter = useScrollableSetter.useScrollableSetter;
export const BottomSheetScrollView = createBottomSheetScrollableComponent.BottomSheetScrollView;
export const BottomSheetSectionList = createBottomSheetScrollableComponent.BottomSheetSectionList;
export const BottomSheetFlatList = createBottomSheetScrollableComponent.BottomSheetFlatList;
export const BottomSheetVirtualizedList = createBottomSheetScrollableComponent.BottomSheetVirtualizedList;
export const BottomSheetFlashList = createBottomSheetScrollableComponent.BottomSheetFlashList;
export const BottomSheetHandle = BottomSheetHandle.BottomSheetHandle;
export const BottomSheetDraggableView = memoDefault;
export const BottomSheetView = BottomSheetViewDefault;
export const BottomSheetTextInput = memoDefault3;
export const BottomSheetBackdrop = BottomSheetBackdrop.BottomSheetBackdrop;
export const BottomSheetFooter = BottomSheetFooter.BottomSheetFooter;
export const BottomSheetFooterContainer = BottomSheetFooter.BottomSheetFooterContainer;
export const TouchableHighlight = TouchableOpacityDefault.TouchableHighlight;
export const TouchableOpacity = TouchableOpacityDefault.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableOpacityDefault.TouchableWithoutFeedback;
export const createBottomSheetScrollableComponent = createBottomSheetScrollableComponent.createBottomSheetScrollableComponent;
export const getKeyboardAnimationConfigs = normalizeSnapPoint.getKeyboardAnimationConfigs;
export const enableLogging = print.enableLogging;