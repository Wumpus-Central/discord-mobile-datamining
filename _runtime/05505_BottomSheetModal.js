// === Module 5505: BottomSheetModal ===

// Module 5505 (BottomSheetModal)
import BottomSheetDefault from "BottomSheet" /* 5507 */;
import useBottomSheet from "useBottomSheet" /* 5511 */;
import useBottomSheetInternal from "useBottomSheetInternal" /* 5513 */;
import useBottomSheetModal from "useBottomSheetModal" /* 5515 */;
import useBottomSheetModalInternal from "useBottomSheetModalInternal" /* 5520 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 5522 */;
import print from "print" /* 5526 */;
import useScrollableSetter from "useScrollableSetter" /* 5530 */;
import useScrollHandler from "useScrollHandler" /* 5531 */;
import useScrollEventsHandlersDefault from "useScrollEventsHandlersDefault" /* 5532 */;
import t from "t" /* 5675 */;
import useBottomSheetGestureHandlers from "useBottomSheetGestureHandlers" /* 5678 */;
import memoDefault from "memo" /* 5698 */;
import BottomSheetFooter from "BottomSheetFooter" /* 5700 */;
import BottomSheetHandle from "BottomSheetHandle" /* 5704 */;
import memoDefault2 from "memo" /* 5709 */;
import sharedValueDefault from "sharedValue" /* 5713 */;
import useBottomSheetSpringConfigs from "useBottomSheetSpringConfigs" /* 5715 */;
import useBottomSheetTimingConfigs from "useBottomSheetTimingConfigs" /* 5716 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 5717 */;
import BottomSheetViewDefault from "BottomSheetView" /* 5805 */;
import memoDefault3 from "memo" /* 5808 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 5810 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 5814 */;

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