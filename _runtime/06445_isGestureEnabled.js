// _runtime/06445_isGestureEnabled.js

export const isGestureEnabled = require("map").isGestureEnabled;
export const prepareConfigForNativeSide = require("map").prepareConfigForNativeSide;
export const useClonedAndRemappedConfig = require("map").useClonedAndRemappedConfig;
export const runCallback = require("getHandler").runCallback;
export const touchEventTypeToCallbackType = require("getHandler").touchEventTypeToCallbackType;
export const useMemoizedGestureCallbacks = require("getHandler").useMemoizedGestureCallbacks;
export const checkMappingForChangeProperties = require("isNativeEvent").checkMappingForChangeProperties;
export const flattenAndFilterEvent = require("isNativeEvent").flattenAndFilterEvent;
export const getChangeEventCalculator = require("isNativeEvent").getChangeEventCalculator;
export const isEventForHandlerWithTag = require("isNativeEvent").isEventForHandlerWithTag;
export const isNativeAnimatedEvent = require("isNativeEvent").isNativeAnimatedEvent;
export const maybeExtractNativeEvent = require("isNativeEvent").maybeExtractNativeEvent;
export const shouldHandleTouchEvents = require("isNativeEvent").shouldHandleTouchEvents;
export const allowedNativeProps = require("items2").allowedNativeProps;
export const EMPTY_WHITE_LIST = require("items2").EMPTY_WHITE_LIST;
export const HandlerCallbacks = require("items2").HandlerCallbacks;
export const NativeWrapperProps = require("items2").NativeWrapperProps;
export const PropsToFilter = require("items2").PropsToFilter;
export const PropsWhiteLists = require("items2").PropsWhiteLists;
export const bindSharedValues = require("hash").bindSharedValues;
export const hasWorkletEventHandlers = require("hash").hasWorkletEventHandlers;
export const maybeUnpackValue = require("hash").maybeUnpackValue;
export const unbindSharedValues = require("hash").unbindSharedValues;
export const containsDuplicates = require("isComposedGesture").containsDuplicates;
export const isComposedGesture = require("isComposedGesture").isComposedGesture;
export const prepareRelations = require("isComposedGesture").prepareRelations;