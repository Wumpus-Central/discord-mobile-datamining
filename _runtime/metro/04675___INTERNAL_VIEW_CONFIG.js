// === Module 4675: __INTERNAL_VIEW_CONFIG ===

// Module 4675 (__INTERNAL_VIEW_CONFIG)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import result from "result" /* 26 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const codegenNativeComponent = get_ActivityIndicator.codegenNativeComponent;
const obj = { screenId: true, sheetAllowedDetents: true, sheetLargestUndimmedDetent: true, sheetGrabberVisible: true, sheetCornerRadius: true, sheetExpandsWhenScrolledToEdge: true, sheetInitialDetent: true, sheetElevation: true, sheetShouldOverflowTopInset: true, sheetDefaultResizeAnimationEnabled: true, customAnimationOnSwipe: true, fullScreenSwipeEnabled: true, fullScreenSwipeShadowEnabled: true, homeIndicatorHidden: true, preventNativeDismiss: true, gestureEnabled: true, statusBarColor: result.colorAttribute, statusBarHidden: true, screenOrientation: true, statusBarAnimation: true, statusBarStyle: true, statusBarTranslucent: true, gestureResponseDistance: true, stackPresentation: true, stackAnimation: true, transitionDuration: true, replaceAnimation: true, swipeDirection: true, hideKeyboardOnSwipe: true, activityState: true, navigationBarColor: result.colorAttribute, navigationBarTranslucent: true, navigationBarHidden: true, nativeBackButtonDismissalEnabled: true, bottomScrollEdgeEffect: true, leftScrollEdgeEffect: true, rightScrollEdgeEffect: true, topScrollEdgeEffect: true, synchronousShadowStateUpdatesEnabled: true, androidResetScreenShadowStateOnOrientationChangeEnabled: true, ios26AllowInteractionsDuringTransition: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onAppear: true, onDisappear: true, onDismissed: true, onNativeDismissCancelled: true, onWillAppear: true, onWillDisappear: true, onHeaderHeightChange: true, onTransitionProgress: true, onGestureCancel: true, onHeaderBackButtonClicked: true, onSheetDetentChanged: true }));
obj[2] = obj;

export default setRuntimeConfigProvider.get("RNSScreen", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;