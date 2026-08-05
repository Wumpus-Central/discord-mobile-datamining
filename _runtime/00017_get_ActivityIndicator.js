// _runtime/00017_get_ActivityIndicator.js
import { ActivityIndicator } from "00018_ActivityIndicator.js";
import { ProgressBarAndroid } from "00023_ProgressBarAndroid.js";
import { get } from "00030_get.js";
import { genModule } from "00031_genModule.js";
import { isEnabled } from "00046_isEnabled.js";
import { processColor } from "00050_processColor.js";
import { PlatformColor } from "00052_PlatformColor.js";
import { setRuntimeConfigProvider } from "00065_setRuntimeConfigProvider.js";
import { measure } from "00068_measure.js";
import { PixelRatio } from "00087_PixelRatio.js";
import { Dimensions } from "00088_Dimensions.js";
import { EventEmitter } from "00089_EventEmitter.js";
import { _isNativeReflectConstruct } from "00092__isNativeReflectConstruct.js";
import { View } from "00108_View.js";
import { noop } from "00111_noop.js";
import { Commands } from "00112_Commands.js";
import { codegenNativeCommands } from "00113_codegenNativeCommands.js";
import { renderElement } from "00114_renderElement.js";
import { warnOnce } from "00165_warnOnce.js";
import { addListener } from "00208_addListener.js";
import { NativeEventEmitter } from "00209_NativeEventEmitter.js";
import { Alert } from "00231_Alert.js";
import { DialogManagerAndroid } from "00232_DialogManagerAndroid.js";
import { MessageQueue } from "00236_MessageQueue.js";
import { _isNativeReflectConstruct } from "00238__isNativeReflectConstruct.js";
import { AppRegistry } from "00244_AppRegistry.js";
import { RootTagContext } from "00253_RootTagContext.js";
import { Button } from "00290_Button.js";
import { _isNativeReflectConstruct } from "00291__isNativeReflectConstruct.js";
import { useTextPressability } from "00298_useTextPressability.js";
import { NativeText } from "00299_NativeText.js";
import { usePressability } from "00301_usePressability.js";
import { _isNativeReflectConstruct } from "00302__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "00304__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "00311__isNativeReflectConstruct.js";
import { _queryCache } from "00328__queryCache.js";
import { _isNativeReflectConstruct } from "00338__isNativeReflectConstruct.js";
import { useWindowDimensions } from "00340_useWindowDimensions.js";
import { _isNativeReflectConstruct } from "00341__isNativeReflectConstruct.js";
import { configureNext } from "00342_configureNext.js";
import { KeyboardImpl } from "00343_KeyboardImpl.js";
import { LayoutConformance } from "00344_LayoutConformance.js";
import { _isNativeReflectConstruct } from "00346__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "00349__isNativeReflectConstruct.js";
import { bezier } from "00364_bezier.js";
import { _isNativeReflectConstruct } from "00406__isNativeReflectConstruct.js";
import { getConstants } from "00411_getConstants.js";
import { memo } from "00414_memo.js";
import { _isNativeReflectConstruct } from "00416__isNativeReflectConstruct.js";
import { noop } from "00419_noop.js";
import { returnsFalse } from "00420_returnsFalse.js";
import { InternalTextInput } from "00423_InternalTextInput.js";
import { Mixin } from "00424_Mixin.js";
import { _isNativeReflectConstruct } from "00428__isNativeReflectConstruct.js";
import { _isNativeReflectConstruct } from "00429__isNativeReflectConstruct.js";
import { TouchableWithoutFeedback } from "00430_TouchableWithoutFeedback.js";
import { defaultHiddenStyle } from "00433_defaultHiddenStyle.js";
import { VirtualArray } from "00437_VirtualArray.js";
import { defaultItemToKey } from "00438_defaultItemToKey.js";
import { DEFAULT_INITIAL_NUM_TO_RENDER } from "00442_DEFAULT_INITIAL_NUM_TO_RENDER.js";
import { getScrollParent } from "00445_getScrollParent.js";
import { map } from "00447_map.js";
import { showActionSheetWithOptions } from "00450_showActionSheetWithOptions.js";
import { getColorScheme } from "00453_getColorScheme.js";
import { AppStateImpl } from "00456_AppStateImpl.js";
import { Clipboard } from "00460_Clipboard.js";
import { codegenNativeComponent } from "00463_codegenNativeComponent.js";
import { getConstants } from "00465_getConstants.js";
import { DynamicColorIOS } from "00468_DynamicColorIOS.js";
import { reject } from "00469_reject.js";
import { _isNativeReflectConstruct } from "00470__isNativeReflectConstruct.js";
import { install } from "00473_install.js";
import { PermissionsAndroidImpl } from "00476_PermissionsAndroidImpl.js";
import { map } from "00479_map.js";
import { ReactNativeVersion } from "00482_ReactNativeVersion.js";
import { Share } from "00485_Share.js";
import { SHORT } from "00488_SHORT.js";
import { useAnimatedValue } from "00491_useAnimatedValue.js";
import { useAnimatedValueXY } from "00492_useAnimatedValueXY.js";
import { useAnimatedColor } from "00493_useAnimatedColor.js";
import { subscribe } from "00494_subscribe.js";
import { deepFreezeAndThrowOnMutationInDev } from "00495_deepFreezeAndThrowOnMutationInDev.js";
import { Vibration } from "00496_Vibration.js";
import { 00247__ } from "metro/00247__.js";
import { 00339__ } from "metro/00339__.js";
import { 00440__ } from "metro/00440__.js";
import { 00441__ } from "metro/00441__.js";
import { 00443__ } from "metro/00443__.js";
import { 00466__ } from "metro/00466__.js";
import { 00467__ } from "metro/00467__.js";
import { 00474__ } from "metro/00474__.js";
import { 00483__ } from "metro/00483__.js";
const obj = {};
Object.defineProperty(obj, "ActivityIndicator", { get: () => ActivityIndicator.default, set: undefined });
Object.defineProperty(obj, "Button", { get: () => Button.default, set: undefined });
Object.defineProperty(obj, "DrawerLayoutAndroid", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "EventEmitter", { get: () => EventEmitter.default, set: undefined });
Object.defineProperty(obj, "FlatList", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => _queryCache.default, set: undefined });
Object.defineProperty(obj, "ImageBackground", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "InputAccessoryView", { get: () => 00339__.default, set: undefined });
Object.defineProperty(obj, "KeyboardAvoidingView", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "experimental_LayoutConformance", { get: () => LayoutConformance.default, set: undefined });
Object.defineProperty(obj, "Modal", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "unstable_NativeText", { get: () => NativeText.NativeText, set: undefined });
Object.defineProperty(obj, "unstable_NativeView", { get: () => Commands.default, set: undefined });
Object.defineProperty(obj, "Pressable", { get: () => memo.default, set: undefined });
Object.defineProperty(obj, "ProgressBarAndroid", {
  get: () => {
    warnOnce.default("progress-bar-android-moved", "ProgressBarAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/progress-bar-android' instead of 'react-native'. See https://github.com/react-native-progress-view/progress-bar-android");
    return ProgressBarAndroid.default;
  },
  set: undefined
});
Object.defineProperty(obj, "RefreshControl", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "SafeAreaView", {
  get: () => {
    warnOnce.default("safe-area-view-deprecated", "SafeAreaView has been deprecated and will be removed in a future release. Please use 'react-native-safe-area-context' instead. See https://github.com/AppAndFlow/react-native-safe-area-context");
    return noop.default;
  },
  set: undefined
});
Object.defineProperty(obj, "ScrollView", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "StatusBar", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "Switch", { get: () => returnsFalse.default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => useTextPressability.default, set: undefined });
Object.defineProperty(obj, "unstable_TextAncestorContext", { get: () => noop.default, set: undefined });
Object.defineProperty(obj, "TextInput", { get: () => InternalTextInput.default, set: undefined });
Object.defineProperty(obj, "Touchable", { get: () => Mixin.default, set: undefined });
Object.defineProperty(obj, "TouchableHighlight", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "TouchableNativeFeedback", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "TouchableOpacity", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "TouchableWithoutFeedback", { get: () => TouchableWithoutFeedback.default, set: undefined });
Object.defineProperty(obj, "View", { get: () => View.default, set: undefined });
Object.defineProperty(obj, "VirtualizedList", { get: () => require("00431_get_VirtualizedList.js") /* get VirtualizedList */ /* get VirtualizedList */.default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require("00432_get_VirtualizedList.js") /* get VirtualizedList */ /* get VirtualizedList */.default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualView", { get: () => defaultHiddenStyle.default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualArray", { get: () => VirtualArray.VirtualArray, set: undefined });
Object.defineProperty(obj, "unstable_createVirtualCollectionView", { get: () => defaultItemToKey.createVirtualCollectionView, set: undefined });
Object.defineProperty(obj, "unstable_VirtualColumn", { get: () => 00440__.default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualColumnGenerator", { get: () => 00441__.default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualRow", { get: () => 00443__.default, set: undefined });
Object.defineProperty(obj, "unstable_getScrollParent", { get: () => getScrollParent.default, set: undefined });
Object.defineProperty(obj, "unstable_DEFAULT_INITIAL_NUM_TO_RENDER", { get: () => DEFAULT_INITIAL_NUM_TO_RENDER.DEFAULT_INITIAL_NUM_TO_RENDER, set: undefined });
Object.defineProperty(obj, "AccessibilityInfo", { get: () => map.default, set: undefined });
Object.defineProperty(obj, "ActionSheetIOS", { get: () => showActionSheetWithOptions.default, set: undefined });
Object.defineProperty(obj, "Alert", { get: () => Alert.default, set: undefined });
Object.defineProperty(obj, "Animated", { get: () => require("00397_get_FlatList.js") /* get FlatList */ /* get FlatList */.default, set: undefined });
Object.defineProperty(obj, "Appearance", { get: () => getColorScheme, set: undefined });
Object.defineProperty(obj, "AppRegistry", { get: () => AppRegistry.AppRegistry, set: undefined });
Object.defineProperty(obj, "AppState", { get: () => AppStateImpl.default, set: undefined });
Object.defineProperty(obj, "BackHandler", { get: () => 00247__.default, set: undefined });
Object.defineProperty(obj, "Clipboard", {
  get: () => {
    warnOnce.default("clipboard-moved", "Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard");
    return Clipboard.default;
  },
  set: undefined
});
Object.defineProperty(obj, "codegenNativeCommands", { get: () => codegenNativeCommands.default, set: undefined });
Object.defineProperty(obj, "codegenNativeComponent", { get: () => codegenNativeComponent.default, set: undefined });
Object.defineProperty(obj, "DeviceEventEmitter", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "DeviceInfo", { get: () => getConstants.default, set: undefined });
Object.defineProperty(obj, "DevMenu", { get: () => 00466__.default, set: undefined });
Object.defineProperty(obj, "DevSettings", { get: () => 00467__.default, set: undefined });
Object.defineProperty(obj, "Dimensions", { get: () => Dimensions.default, set: undefined });
Object.defineProperty(obj, "DynamicColorIOS", { get: () => DynamicColorIOS.DynamicColorIOS, set: undefined });
Object.defineProperty(obj, "Easing", { get: () => bezier.default, set: undefined });
Object.defineProperty(obj, "findNodeHandle", { get: () => renderElement.findNodeHandle, set: undefined });
Object.defineProperty(obj, "I18nManager", { get: () => getConstants.default, set: undefined });
Object.defineProperty(obj, "InteractionManager", {
  get: () => {
    warnOnce.default("interaction-manager-deprecated", "InteractionManager has been deprecated and will be removed in a future release. Please refactor long tasks into smaller ones, and  use 'requestIdleCallback' instead.");
    return reject.default;
  },
  set: undefined
});
Object.defineProperty(obj, "Keyboard", { get: () => KeyboardImpl.default, set: undefined });
Object.defineProperty(obj, "LayoutAnimation", { get: () => configureNext.default, set: undefined });
Object.defineProperty(obj, "Linking", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "LogBox", { get: () => install.default, set: undefined });
Object.defineProperty(obj, "NativeAppEventEmitter", { get: () => _isNativeReflectConstruct.default, set: undefined });
Object.defineProperty(obj, "NativeComponentRegistry", { get: () => setRuntimeConfigProvider, set: undefined });
Object.defineProperty(obj, "NativeDialogManagerAndroid", { get: () => DialogManagerAndroid.default, set: undefined });
Object.defineProperty(obj, "NativeEventEmitter", { get: () => NativeEventEmitter.default, set: undefined });
Object.defineProperty(obj, "NativeModules", { get: () => genModule.default, set: undefined });
Object.defineProperty(obj, "Networking", { get: () => addListener.default, set: undefined });
Object.defineProperty(obj, "PanResponder", { get: () => 00474__.default, set: undefined });
Object.defineProperty(obj, "PermissionsAndroid", { get: () => PermissionsAndroidImpl.default, set: undefined });
Object.defineProperty(obj, "PixelRatio", { get: () => PixelRatio.default, set: undefined });
Object.defineProperty(obj, "Platform", { get: () => require("00273_get_Version.js") /* get Version */ /* get Version */.default, set: undefined });
Object.defineProperty(obj, "PlatformColor", { get: () => PlatformColor.PlatformColor, set: undefined });
Object.defineProperty(obj, "PushNotificationIOS", {
  get: () => {
    warnOnce.default("pushNotificationIOS-moved", "PushNotificationIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. See https://github.com/react-native-push-notification/ios");
    return map.default;
  },
  set: undefined
});
Object.defineProperty(obj, "processColor", { get: () => processColor.default, set: undefined });
Object.defineProperty(obj, "registerCallableModule", { get: () => MessageQueue.default, set: undefined });
Object.defineProperty(obj, "requireNativeComponent", { get: () => require("00464_get_BatchedBridge.js") /* get BatchedBridge */ /* get BatchedBridge */.default, set: undefined });
Object.defineProperty(obj, "ReactNativeVersion", { get: () => ReactNativeVersion.default, set: undefined });
Object.defineProperty(obj, "RootTagContext", { get: () => RootTagContext.RootTagContext, set: undefined });
Object.defineProperty(obj, "Settings", { get: () => 00483__.default, set: undefined });
Object.defineProperty(obj, "Share", { get: () => Share.default, set: undefined });
Object.defineProperty(obj, "StyleSheet", { get: () => require("00254_get_hairlineWidth.js") /* get hairlineWidth */ /* get hairlineWidth */.default, set: undefined });
Object.defineProperty(obj, "Systrace", { get: () => isEnabled, set: undefined });
Object.defineProperty(obj, "ToastAndroid", { get: () => SHORT.default, set: undefined });
Object.defineProperty(obj, "TurboModuleRegistry", { get: () => get, set: undefined });
Object.defineProperty(obj, "UIManager", { get: () => measure.default, set: undefined });
obj.unstable_batchedUpdates = function unstable_batchedUpdates(arg0) {
  arg0(arg1);
};
Object.defineProperty(obj, "useAnimatedValue", { get: () => useAnimatedValue.default, set: undefined });
Object.defineProperty(obj, "useAnimatedValueXY", { get: () => useAnimatedValueXY.default, set: undefined });
Object.defineProperty(obj, "useAnimatedColor", { get: () => useAnimatedColor.default, set: undefined });
Object.defineProperty(obj, "useColorScheme", { get: () => subscribe.default, set: undefined });
Object.defineProperty(obj, "usePressability", { get: () => usePressability.default, set: undefined });
Object.defineProperty(obj, "useWindowDimensions", { get: () => useWindowDimensions.default, set: undefined });
Object.defineProperty(obj, "UTFSequence", { get: () => deepFreezeAndThrowOnMutationInDev.default, set: undefined });
Object.defineProperty(obj, "Vibration", { get: () => Vibration.default, set: undefined });
Object.defineProperty(obj, "VirtualViewMode", { get: () => defaultHiddenStyle.VirtualViewMode, set: undefined });

export default obj;