// === Module 6952: BottomSheetModal ===

// Module 6952 (BottomSheetModal)
import BottomSheetDefault from "BottomSheet" /* 6954 */;
import useBottomSheet from "useBottomSheet" /* 6958 */;
import useBottomSheetInternal from "useBottomSheetInternal" /* 6960 */;
import useBottomSheetModal from "useBottomSheetModal" /* 6962 */;
import useBottomSheetModalInternal from "useBottomSheetModalInternal" /* 6967 */;
import normalizeSnapPoint from "normalizeSnapPoint" /* 6969 */;
import print from "print" /* 6973 */;
import useScrollableSetter from "useScrollableSetter" /* 6977 */;
import useScrollHandler from "useScrollHandler" /* 6978 */;
import useScrollEventsHandlersDefault from "useScrollEventsHandlersDefault" /* 6979 */;
import t from "t" /* 6981 */;
import useBottomSheetGestureHandlers from "useBottomSheetGestureHandlers" /* 6984 */;
import memoDefault from "memo" /* 7004 */;
import BottomSheetFooter from "BottomSheetFooter" /* 7006 */;
import BottomSheetHandle from "BottomSheetHandle" /* 7010 */;
import memoDefault2 from "memo" /* 7015 */;
import sharedValueDefault from "sharedValue" /* 7019 */;
import useBottomSheetSpringConfigs from "useBottomSheetSpringConfigs" /* 7021 */;
import useBottomSheetTimingConfigs from "useBottomSheetTimingConfigs" /* 7022 */;
import createBottomSheetScrollableComponent from "createBottomSheetScrollableComponent" /* 7023 */;
import BottomSheetViewDefault from "BottomSheetView" /* 7111 */;
import memoDefault3 from "memo" /* 7114 */;
import BottomSheetBackdrop from "BottomSheetBackdrop" /* 7116 */;
import TouchableOpacityDefault from "TouchableOpacity" /* 7120 */;

for (const key10013 in require("GESTURE_SOURCE")) {
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