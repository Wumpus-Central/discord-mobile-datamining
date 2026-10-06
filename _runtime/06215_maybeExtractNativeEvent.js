// _runtime/06215_maybeExtractNativeEvent.js
import SHARED_VALUE_OFFSET from "06204_SHARED_VALUE_OFFSET.js";
import allowedNativeProps from "06205_allowedNativeProps.js";
import _mod6214 from "metro/06214__.js";
import _mod6216 from "metro/06216__.js";
import _mod6217 from "metro/06217__.js";
import _mod6218 from "metro/06218__.js";

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6216.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6216.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6216.useClonedAndRemappedConfig;
export const runCallback = _mod6218.runCallback;
export const touchEventTypeToCallbackType = _mod6218.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6218.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6217.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6217.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6217.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6217.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6217.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6217.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6217.shouldHandleTouchEvents;
export { allowedNativeProps_export as allowedNativeProps };
export const EMPTY_WHITE_LIST = allowedNativeProps.EMPTY_WHITE_LIST;
export const HandlerCallbacks = allowedNativeProps.HandlerCallbacks;
export const NativeWrapperProps = allowedNativeProps.NativeWrapperProps;
export const PropsToFilter = allowedNativeProps.PropsToFilter;
export const PropsWhiteLists = allowedNativeProps.PropsWhiteLists;
export const bindSharedValues = SHARED_VALUE_OFFSET.bindSharedValues;
export const hasWorkletEventHandlers = SHARED_VALUE_OFFSET.hasWorkletEventHandlers;
export const maybeUnpackValue = SHARED_VALUE_OFFSET.maybeUnpackValue;
export const unbindSharedValues = SHARED_VALUE_OFFSET.unbindSharedValues;
export const containsDuplicates = _mod6214.containsDuplicates;
export const isComposedGesture = _mod6214.isComposedGesture;
export const prepareRelations = _mod6214.prepareRelations;
