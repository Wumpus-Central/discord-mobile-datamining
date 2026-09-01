// === Module 5624: BottomSheetModal ===

// Module 5624 (BottomSheetModal)
import BottomSheetDefault from "BottomSheet" /* 5626 */;
import useBottomSheet from "useBottomSheet" /* 5630 */;
import useBottomSheetInternal from "useBottomSheetInternal" /* 5632 */;
import useBottomSheetModal from "useBottomSheetModal" /* 5634 */;
import useBottomSheetModalInternal from "useBottomSheetModalInternal" /* 5639 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5641 */;
import print from "print" /* 5645 */;
import useScrollableSetter from "useScrollableSetter" /* 5649 */;
import useScrollHandler from "useScrollHandler" /* 5650 */;
import useScrollEventsHandlersDefault from "useScrollEventsHandlersDefault" /* 5651 */;
import t from "t" /* 5794 */;
import useBottomSheetGestureHandlers from "useBottomSheetGestureHandlers" /* 5797 */;
import memoDefault from "memo" /* 5817 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5819 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5823 */;
import memoDefault2 from "memo" /* 5828 */;
import sharedValueDefault from "sharedValue" /* 5832 */;
import useBottomSheetSpringConfigs from "useBottomSheetSpringConfigs" /* 5834 */;
import useBottomSheetTimingConfigs from "useBottomSheetTimingConfigs" /* 5835 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5836 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5924 */;
import memoDefault3 from "memo" /* 5927 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5929 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5933 */;

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