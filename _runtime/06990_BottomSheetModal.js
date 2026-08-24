// === Module 6990: BottomSheetModal ===

// Module 6990 (BottomSheetModal)
import BottomSheetDefault from "BottomSheet" /* 6992 */;
import useBottomSheet from "useBottomSheet" /* 6996 */;
import useBottomSheetInternal from "useBottomSheetInternal" /* 6998 */;
import useBottomSheetModal from "useBottomSheetModal" /* 7000 */;
import useBottomSheetModalInternal from "useBottomSheetModalInternal" /* 7005 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 7007 */;
import print from "print" /* 7011 */;
import useScrollableSetter from "useScrollableSetter" /* 7015 */;
import useScrollHandler from "useScrollHandler" /* 7016 */;
import useScrollEventsHandlersDefault from "useScrollEventsHandlersDefault" /* 7017 */;
import t from "t" /* 7019 */;
import useBottomSheetGestureHandlers from "useBottomSheetGestureHandlers" /* 7022 */;
import memoDefault from "memo" /* 7042 */;
import BottomSheetFooter from "BottomSheetFooter" /* 7044 */;
import BottomSheetHandle from "BottomSheetHandle" /* 7048 */;
import memoDefault2 from "memo" /* 7053 */;
import sharedValueDefault from "sharedValue" /* 7057 */;
import useBottomSheetSpringConfigs from "useBottomSheetSpringConfigs" /* 7059 */;
import useBottomSheetTimingConfigs from "useBottomSheetTimingConfigs" /* 7060 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 7061 */;
import BottomSheetViewDefault from "BottomSheetView" /* 7149 */;
import memoDefault3 from "memo" /* 7152 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 7154 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 7158 */;

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