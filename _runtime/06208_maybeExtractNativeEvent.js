// _runtime/06208_maybeExtractNativeEvent.js
import SHARED_VALUE_OFFSET from "06197_SHARED_VALUE_OFFSET.js";
import allowedNativeProps from "06198_allowedNativeProps.js";
import _mod6207 from "metro/06207__.js";
import _mod6209 from "metro/06209__.js";
import _mod6210 from "metro/06210__.js";
import _mod6211 from "metro/06211__.js";

const allowedNativeProps_export = allowedNativeProps.allowedNativeProps;

export const isGestureEnabled = _mod6209.isGestureEnabled;
export const prepareConfigForNativeSide = _mod6209.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = _mod6209.useClonedAndRemappedConfig;
export const runCallback = _mod6211.runCallback;
export const touchEventTypeToCallbackType = _mod6211.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = _mod6211.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = _mod6210.checkMappingForChangeProperties;
export const flattenAndFilterEvent = _mod6210.flattenAndFilterEvent;
export const getChangeEventCalculator = _mod6210.getChangeEventCalculator;
export const isEventForHandlerWithTag = _mod6210.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = _mod6210.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = _mod6210.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = _mod6210.shouldHandleTouchEvents;
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
export const containsDuplicates = _mod6207.containsDuplicates;
export const isComposedGesture = _mod6207.isComposedGesture;
export const prepareRelations = _mod6207.prepareRelations;
