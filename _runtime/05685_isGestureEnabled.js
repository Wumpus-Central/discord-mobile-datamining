// _runtime/05685_isGestureEnabled.js
import hash from "05674_hash.js";
import items2 from "05675_items2.js";
import isComposedGesture from "05684_isComposedGesture.js";
import map from "05686_map.js";
import isNativeEvent from "05687_isNativeEvent.js";
import getHandler from "05688_getHandler.js";


export const isGestureEnabled = map.isGestureEnabled;
export const prepareConfigForNativeSide = map.prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = map.useClonedAndRemappedConfig;
export const runCallback = getHandler.runCallback;
export const touchEventTypeToCallbackType = getHandler.touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = getHandler.useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = isNativeEvent.checkMappingForChangeProperties;
export const flattenAndFilterEvent = isNativeEvent.flattenAndFilterEvent;
export const getChangeEventCalculator = isNativeEvent.getChangeEventCalculator;
export const isEventForHandlerWithTag = isNativeEvent.isEventForHandlerWithTag;
export const isNativeAnimatedEvent = isNativeEvent.isNativeAnimatedEvent;
export const maybeExtractNativeEvent = isNativeEvent.maybeExtractNativeEvent;
export const shouldHandleTouchEvents = isNativeEvent.shouldHandleTouchEvents;
export const allowedNativeProps = items2.allowedNativeProps;
export const EMPTY_WHITE_LIST = items2.EMPTY_WHITE_LIST;
export const HandlerCallbacks = items2.HandlerCallbacks;
export const NativeWrapperProps = items2.NativeWrapperProps;
export const PropsToFilter = items2.PropsToFilter;
export const PropsWhiteLists = items2.PropsWhiteLists;
export const bindSharedValues = hash.bindSharedValues;
export const hasWorkletEventHandlers = hash.hasWorkletEventHandlers;
export const maybeUnpackValue = hash.maybeUnpackValue;
export const unbindSharedValues = hash.unbindSharedValues;
export const containsDuplicates = isComposedGesture.containsDuplicates;
export const isComposedGesture = isComposedGesture.isComposedGesture;
export const prepareRelations = isComposedGesture.prepareRelations;