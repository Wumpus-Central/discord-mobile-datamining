// _runtime/metro/00105__.js
import result from "../00026_result.js";
import resultDefault from "../00026_result.js";
import weakSet from "../00106_weakSet.js";

let obj = { directEventTypes: null, bubblingEventTypes: null, validAttributes: null };
obj = {
  topAccessibilityAction: { registrationName: "onAccessibilityAction" },
  onGestureHandlerEvent: null,
  onGestureHandlerStateChange: null,
  topContentSizeChange: null,
  topScrollBeginDrag: null,
  topMessage: null,
  topSelectionChange: null,
  topLoadingFinish: null,
  topMomentumScrollEnd: null,
  topLoadingStart: null,
  topLoadingError: null,
  topMomentumScrollBegin: null,
  topScrollEndDrag: null,
  topScroll: null,
  topLayout: null,
};
obj[1] = weakSet.DynamicallyInjectedByGestureHandler({ registrationName: "onGestureHandlerEvent" });
obj[2] = weakSet.DynamicallyInjectedByGestureHandler({ registrationName: "onGestureHandlerStateChange" });
obj[3] = { registrationName: "onContentSizeChange" };
obj[4] = { registrationName: "onScrollBeginDrag" };
obj[5] = { registrationName: "onMessage" };
obj[6] = { registrationName: "onSelectionChange" };
obj[7] = { registrationName: "onLoadingFinish" };
obj[8] = { registrationName: "onMomentumScrollEnd" };
obj[9] = { registrationName: "onLoadingStart" };
obj[10] = { registrationName: "onLoadingError" };
obj[11] = { registrationName: "onMomentumScrollBegin" };
obj[12] = { registrationName: "onScrollEndDrag" };
obj[13] = { registrationName: "onScroll" };
obj[14] = { registrationName: "onLayout" };
obj[0] = obj;
obj[1] = {
  topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } },
  topSelect: { phasedRegistrationNames: { captured: "onSelectCapture", bubbled: "onSelect" } },
  topTouchEnd: { phasedRegistrationNames: { captured: "onTouchEndCapture", bubbled: "onTouchEnd" } },
  topTouchCancel: { phasedRegistrationNames: { captured: "onTouchCancelCapture", bubbled: "onTouchCancel" } },
  topTouchStart: { phasedRegistrationNames: { captured: "onTouchStartCapture", bubbled: "onTouchStart" } },
  topTouchMove: { phasedRegistrationNames: { captured: "onTouchMoveCapture", bubbled: "onTouchMove" } },
  topPointerCancel: { phasedRegistrationNames: { captured: "onPointerCancelCapture", bubbled: "onPointerCancel" } },
  topPointerDown: { phasedRegistrationNames: { captured: "onPointerDownCapture", bubbled: "onPointerDown" } },
  topPointerEnter: {
    phasedRegistrationNames: { captured: "onPointerEnterCapture", bubbled: "onPointerEnter", skipBubbling: true },
  },
  topPointerLeave: {
    phasedRegistrationNames: { captured: "onPointerLeaveCapture", bubbled: "onPointerLeave", skipBubbling: true },
  },
  topPointerMove: { phasedRegistrationNames: { captured: "onPointerMoveCapture", bubbled: "onPointerMove" } },
  topPointerUp: { phasedRegistrationNames: { captured: "onPointerUpCapture", bubbled: "onPointerUp" } },
  topPointerOut: { phasedRegistrationNames: { captured: "onPointerOutCapture", bubbled: "onPointerOut" } },
  topPointerOver: { phasedRegistrationNames: { captured: "onPointerOverCapture", bubbled: "onPointerOver" } },
  topClick: { phasedRegistrationNames: { captured: "onClickCapture", bubbled: "onClick" } },
  topBlur: { phasedRegistrationNames: { captured: "onBlurCapture", bubbled: "onBlur" } },
  topFocus: { phasedRegistrationNames: { captured: "onFocusCapture", bubbled: "onFocus" } },
  topKeyDown: { phasedRegistrationNames: { captured: "onKeyDownCapture", bubbled: "onKeyDown" } },
  topKeyUp: { phasedRegistrationNames: { captured: "onKeyUpCapture", bubbled: "onKeyUp" } },
};
obj = {};
const merged = Object.assign({
  backgroundColor: result.colorAttribute,
  transform: true,
  transformOrigin: true,
  experimental_backgroundImage: result.backgroundImageAttribute,
  experimental_backgroundSize: result.backgroundSizeAttribute,
  experimental_backgroundPosition: result.backgroundPositionAttribute,
  experimental_backgroundRepeat: result.backgroundRepeatAttribute,
  boxShadow: result.boxShadowAttribute,
  filter: result.filterAttribute,
  mixBlendMode: true,
  isolation: true,
  opacity: true,
  elevation: true,
  shadowColor: result.colorAttribute,
  zIndex: true,
  renderToHardwareTextureAndroid: true,
  testID: true,
  nativeID: true,
  id: true,
  accessibilityLabelledBy: true,
  accessibilityLabel: true,
  accessibilityHint: true,
  accessibilityRole: true,
  accessibilityCollection: true,
  accessibilityCollectionItem: true,
  accessibilityState: true,
  accessibilityActions: true,
  accessibilityValue: true,
  experimental_accessibilityOrder: true,
  importantForAccessibility: true,
  screenReaderFocusable: true,
  "aria-busy": true,
  "aria-checked": true,
  "aria-disabled": true,
  "aria-expanded": true,
  "aria-hidden": true,
  "aria-label": true,
  "aria-labelledby": true,
  "aria-live": true,
  "aria-selected": true,
  "aria-valuemax": true,
  "aria-valuemin": true,
  "aria-valuenow": true,
  "aria-valuetext": true,
  role: true,
  rotation: true,
  scaleX: true,
  scaleY: true,
  translateX: true,
  translateY: true,
  accessibilityLiveRegion: true,
  width: true,
  minWidth: true,
  collapsable: true,
  collapsableChildren: true,
  maxWidth: true,
  height: true,
  minHeight: true,
  maxHeight: true,
  flex: true,
  flexGrow: true,
  rowGap: true,
  columnGap: true,
  gap: true,
  flexShrink: true,
  flexBasis: true,
  aspectRatio: true,
  flexDirection: true,
  flexWrap: true,
  alignSelf: true,
  alignItems: true,
  alignContent: true,
  justifyContent: true,
  overflow: true,
  display: true,
  boxSizing: true,
  margin: true,
  marginBlock: true,
  marginBlockEnd: true,
  marginBlockStart: true,
  marginBottom: true,
  marginEnd: true,
  marginHorizontal: true,
  marginInline: true,
  marginInlineEnd: true,
  marginInlineStart: true,
  marginLeft: true,
  marginRight: true,
  marginStart: true,
  marginTop: true,
  marginVertical: true,
  padding: true,
  paddingBlock: true,
  paddingBlockEnd: true,
  paddingBlockStart: true,
  paddingBottom: true,
  paddingEnd: true,
  paddingHorizontal: true,
  paddingInline: true,
  paddingInlineEnd: true,
  paddingInlineStart: true,
  paddingLeft: true,
  paddingRight: true,
  paddingStart: true,
  paddingTop: true,
  paddingVertical: true,
  borderWidth: true,
  borderStartWidth: true,
  borderEndWidth: true,
  borderTopWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  outlineColor: result.colorAttribute,
  outlineOffset: true,
  outlineStyle: true,
  outlineWidth: true,
  start: true,
  end: true,
  left: true,
  right: true,
  top: true,
  bottom: true,
  inset: true,
  insetBlock: true,
  insetBlockEnd: true,
  insetBlockStart: true,
  insetInline: true,
  insetInlineEnd: true,
  insetInlineStart: true,
  position: true,
  style: resultDefault,
  removeClippedSubviews: true,
  accessible: true,
  hasTVPreferredFocus: true,
  nextFocusDown: true,
  nextFocusForward: true,
  nextFocusLeft: true,
  nextFocusRight: true,
  nextFocusUp: true,
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomRightRadius: true,
  borderBottomLeftRadius: true,
  borderTopStartRadius: true,
  borderTopEndRadius: true,
  borderBottomStartRadius: true,
  borderBottomEndRadius: true,
  borderEndEndRadius: true,
  borderEndStartRadius: true,
  borderStartEndRadius: true,
  borderStartStartRadius: true,
  borderStyle: true,
  hitSlop: true,
  pointerEvents: true,
  nativeBackgroundAndroid: true,
  nativeForegroundAndroid: true,
  needsOffscreenAlphaCompositing: true,
  borderColor: result.colorAttribute,
  borderLeftColor: result.colorAttribute,
  borderRightColor: result.colorAttribute,
  borderTopColor: result.colorAttribute,
  borderBottomColor: result.colorAttribute,
  borderStartColor: result.colorAttribute,
  borderEndColor: result.colorAttribute,
  borderBlockColor: result.colorAttribute,
  borderBlockEndColor: result.colorAttribute,
  borderBlockStartColor: result.colorAttribute,
  focusable: true,
  tabIndex: true,
  backfaceVisibility: true,
});
obj.onLayout = true;
obj.onMoveShouldSetResponder = true;
obj.onMoveShouldSetResponderCapture = true;
obj.onStartShouldSetResponder = true;
obj.onStartShouldSetResponderCapture = true;
obj.onResponderGrant = true;
obj.onResponderReject = true;
obj.onResponderStart = true;
obj.onResponderEnd = true;
obj.onResponderRelease = true;
obj.onResponderMove = true;
obj.onResponderTerminate = true;
obj.onResponderTerminationRequest = true;
obj.onShouldBlockNativeResponder = true;
obj.onTouchStart = true;
obj.onTouchMove = true;
obj.onTouchEnd = true;
obj.onTouchCancel = true;
obj.onClick = true;
obj.onClickCapture = true;
obj.onPointerEnter = true;
obj.onPointerEnterCapture = true;
obj.onPointerLeave = true;
obj.onPointerLeaveCapture = true;
obj.onPointerMove = true;
obj.onPointerMoveCapture = true;
obj.onPointerOut = true;
obj.onPointerOutCapture = true;
obj.onPointerOver = true;
obj.onPointerOverCapture = true;
obj.preventClipping = true;
obj[2] = obj;

export default obj;
