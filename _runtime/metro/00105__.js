// === Module 105: ? ===

// Module 105
import _mod26 from "module_26" /* 26 */;
import weakSet from "weakSet" /* 106 */;

const _modDef26 = _mod26;

let obj = { directEventTypes: null, bubblingEventTypes: null, validAttributes: null };
obj = { topAccessibilityAction: { registrationName: "onAccessibilityAction" }, onGestureHandlerEvent: null, onGestureHandlerStateChange: null, topContentSizeChange: null, topScrollBeginDrag: null, topMessage: null, topSelectionChange: null, topLoadingFinish: null, topMomentumScrollEnd: null, topLoadingStart: null, topLoadingError: null, topMomentumScrollBegin: null, topScrollEndDrag: null, topScroll: null, topLayout: null };
obj.onGestureHandlerEvent = weakSet.DynamicallyInjectedByGestureHandler({ registrationName: "onGestureHandlerEvent" });
obj.onGestureHandlerStateChange = weakSet.DynamicallyInjectedByGestureHandler({ registrationName: "onGestureHandlerStateChange" });
obj.topContentSizeChange = { registrationName: "onContentSizeChange" };
obj.topScrollBeginDrag = { registrationName: "onScrollBeginDrag" };
obj.topMessage = { registrationName: "onMessage" };
obj.topSelectionChange = { registrationName: "onSelectionChange" };
obj.topLoadingFinish = { registrationName: "onLoadingFinish" };
obj.topMomentumScrollEnd = { registrationName: "onMomentumScrollEnd" };
obj.topLoadingStart = { registrationName: "onLoadingStart" };
obj.topLoadingError = { registrationName: "onLoadingError" };
obj.topMomentumScrollBegin = { registrationName: "onMomentumScrollBegin" };
obj.topScrollEndDrag = { registrationName: "onScrollEndDrag" };
obj.topScroll = { registrationName: "onScroll" };
obj.topLayout = { registrationName: "onLayout" };
obj.directEventTypes = obj;
obj = { topChange: { phasedRegistrationNames: { captured: "onChangeCapture", bubbled: "onChange" } }, topSelect: { phasedRegistrationNames: { captured: "onSelectCapture", bubbled: "onSelect" } }, topTouchEnd: { phasedRegistrationNames: { captured: "onTouchEndCapture", bubbled: "onTouchEnd" } }, topTouchCancel: { phasedRegistrationNames: { captured: "onTouchCancelCapture", bubbled: "onTouchCancel" } }, topTouchStart: { phasedRegistrationNames: { captured: "onTouchStartCapture", bubbled: "onTouchStart" } }, topTouchMove: { phasedRegistrationNames: { captured: "onTouchMoveCapture", bubbled: "onTouchMove" } }, topPointerCancel: { phasedRegistrationNames: { captured: "onPointerCancelCapture", bubbled: "onPointerCancel" } }, topPointerDown: { phasedRegistrationNames: { captured: "onPointerDownCapture", bubbled: "onPointerDown" } }, topPointerEnter: { phasedRegistrationNames: { captured: "onPointerEnterCapture", bubbled: "onPointerEnter", skipBubbling: true } }, topPointerLeave: { phasedRegistrationNames: { captured: "onPointerLeaveCapture", bubbled: "onPointerLeave", skipBubbling: true } }, topPointerMove: { phasedRegistrationNames: { captured: "onPointerMoveCapture", bubbled: "onPointerMove" } }, topPointerUp: { phasedRegistrationNames: { captured: "onPointerUpCapture", bubbled: "onPointerUp" } }, topPointerOut: { phasedRegistrationNames: { captured: "onPointerOutCapture", bubbled: "onPointerOut" } }, topPointerOver: { phasedRegistrationNames: { captured: "onPointerOverCapture", bubbled: "onPointerOver" } }, topClick: { phasedRegistrationNames: { captured: "onClickCapture", bubbled: "onClick" } }, topBlur: { phasedRegistrationNames: { captured: "onBlurCapture", bubbled: "onBlur" } }, topFocus: { phasedRegistrationNames: { captured: "onFocusCapture", bubbled: "onFocus" } }, topKeyDown: { phasedRegistrationNames: { captured: "onKeyDownCapture", bubbled: "onKeyDown" } }, topKeyUp: { phasedRegistrationNames: { captured: "onKeyUpCapture", bubbled: "onKeyUp" } } };
obj.bubblingEventTypes = obj;
const obj1 = {};
const size = { backgroundColor: _mod26.colorAttribute, transform: true, transformOrigin: true, experimental_backgroundImage: _mod26.backgroundImageAttribute, experimental_backgroundSize: _mod26.backgroundSizeAttribute, experimental_backgroundPosition: _mod26.backgroundPositionAttribute, experimental_backgroundRepeat: _mod26.backgroundRepeatAttribute, boxShadow: _mod26.boxShadowAttribute, filter: _mod26.filterAttribute, mixBlendMode: true, isolation: true, opacity: true, elevation: true, shadowColor: _mod26.colorAttribute, zIndex: true, renderToHardwareTextureAndroid: true, testID: true, nativeID: true, id: true, accessibilityLabelledBy: true, accessibilityLabel: true, accessibilityHint: true, accessibilityRole: true, accessibilityCollection: true, accessibilityCollectionItem: true, accessibilityState: true, accessibilityActions: true, accessibilityValue: true, experimental_accessibilityOrder: true, importantForAccessibility: true, screenReaderFocusable: true, "aria-busy": true, "aria-checked": true, "aria-disabled": true, "aria-expanded": true, "aria-hidden": true, "aria-label": true, "aria-labelledby": true, "aria-live": true, "aria-selected": true, "aria-valuemax": true, "aria-valuemin": true, "aria-valuenow": true, "aria-valuetext": true, role: true, rotation: true, scaleX: true, scaleY: true, translateX: true, translateY: true, accessibilityLiveRegion: true, width: true, minWidth: true, collapsable: true, collapsableChildren: true, maxWidth: true, height: true, minHeight: true, maxHeight: true, flex: true, flexGrow: true, rowGap: true, columnGap: true, gap: true, flexShrink: true, flexBasis: true, aspectRatio: true, flexDirection: true, flexWrap: true, alignSelf: true, alignItems: true, alignContent: true, justifyContent: true, overflow: true, display: true, boxSizing: true, margin: true, marginBlock: true, marginBlockEnd: true, marginBlockStart: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginInline: true, marginInlineEnd: true, marginInlineStart: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, padding: true, paddingBlock: true, paddingBlockEnd: true, paddingBlockStart: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingInline: true, paddingInlineEnd: true, paddingInlineStart: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, borderWidth: true, borderStartWidth: true, borderEndWidth: true, borderTopWidth: true, borderBottomWidth: true, borderLeftWidth: true, borderRightWidth: true, outlineColor: _mod26.colorAttribute, outlineOffset: true, outlineStyle: true, outlineWidth: true, start: true, end: true, left: true, right: true, top: true, bottom: true, inset: true, insetBlock: true, insetBlockEnd: true, insetBlockStart: true, insetInline: true, insetInlineEnd: true, insetInlineStart: true, position: true, style: _modDef26, removeClippedSubviews: true, accessible: true, hasTVPreferredFocus: true, nextFocusDown: true, nextFocusForward: true, nextFocusLeft: true, nextFocusRight: true, nextFocusUp: true, borderRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderBottomRightRadius: true, borderBottomLeftRadius: true, borderTopStartRadius: true, borderTopEndRadius: true, borderBottomStartRadius: true, borderBottomEndRadius: true, borderEndEndRadius: true, borderEndStartRadius: true, borderStartEndRadius: true, borderStartStartRadius: true, borderStyle: true, hitSlop: true, pointerEvents: true, nativeBackgroundAndroid: true, nativeForegroundAndroid: true, needsOffscreenAlphaCompositing: true, borderColor: _mod26.colorAttribute, borderLeftColor: _mod26.colorAttribute, borderRightColor: _mod26.colorAttribute, borderTopColor: _mod26.colorAttribute, borderBottomColor: _mod26.colorAttribute, borderStartColor: _mod26.colorAttribute, borderEndColor: _mod26.colorAttribute, borderBlockColor: _mod26.colorAttribute, borderBlockEndColor: _mod26.colorAttribute, borderBlockStartColor: _mod26.colorAttribute, focusable: true, tabIndex: true, backfaceVisibility: true };
const merged = Object.assign(size);
obj1.onLayout = true;
obj1.onMoveShouldSetResponder = true;
obj1.onMoveShouldSetResponderCapture = true;
obj1.onStartShouldSetResponder = true;
obj1.onStartShouldSetResponderCapture = true;
obj1.onResponderGrant = true;
obj1.onResponderReject = true;
obj1.onResponderStart = true;
obj1.onResponderEnd = true;
obj1.onResponderRelease = true;
obj1.onResponderMove = true;
obj1.onResponderTerminate = true;
obj1.onResponderTerminationRequest = true;
obj1.onShouldBlockNativeResponder = true;
obj1.onTouchStart = true;
obj1.onTouchMove = true;
obj1.onTouchEnd = true;
obj1.onTouchCancel = true;
obj1.onClick = true;
obj1.onClickCapture = true;
obj1.onPointerEnter = true;
obj1.onPointerEnterCapture = true;
obj1.onPointerLeave = true;
obj1.onPointerLeaveCapture = true;
obj1.onPointerMove = true;
obj1.onPointerMoveCapture = true;
obj1.onPointerOut = true;
obj1.onPointerOutCapture = true;
obj1.onPointerOver = true;
obj1.onPointerOverCapture = true;
obj1.preventClipping = true;
obj.validAttributes = obj1;

export default obj;