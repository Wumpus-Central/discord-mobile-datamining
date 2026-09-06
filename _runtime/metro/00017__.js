// === Module 17: ? ===

// Module 17
const obj = {};
Object.defineProperty(obj, "ActivityIndicator", { get: () => require("ActivityIndicator").default, set: undefined });
Object.defineProperty(obj, "Button", { get: () => require("Button").default, set: undefined });
Object.defineProperty(obj, "DrawerLayoutAndroid", { get: () => require("module_302").default, set: undefined });
Object.defineProperty(obj, "EventEmitter", { get: () => require("EventEmitter").default, set: undefined });
Object.defineProperty(obj, "FlatList", { get: () => require("module_311").default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require("_queryCache").default, set: undefined });
Object.defineProperty(obj, "ImageBackground", { get: () => require("module_338").default, set: undefined });
Object.defineProperty(obj, "InputAccessoryView", { get: () => require("module_339").default, set: undefined });
Object.defineProperty(obj, "KeyboardAvoidingView", { get: () => require("module_341").default, set: undefined });
Object.defineProperty(obj, "experimental_LayoutConformance", { get: () => require("LayoutConformance").default, set: undefined });
Object.defineProperty(obj, "Modal", { get: () => require("module_346").default, set: undefined });
Object.defineProperty(obj, "unstable_NativeText", { get: () => require("NativeText").NativeText, set: undefined });
Object.defineProperty(obj, "unstable_NativeView", { get: () => require("Commands").default, set: undefined });
Object.defineProperty(obj, "Pressable", { get: () => require("module_414").default, set: undefined });
Object.defineProperty(obj, "ProgressBarAndroid", {
  get: () => {
    require("warnOnce").default("progress-bar-android-moved", "ProgressBarAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/progress-bar-android' instead of 'react-native'. See https://github.com/react-native-progress-view/progress-bar-android");
    return require("ProgressBarAndroid").default;
  },
  set: undefined
});
Object.defineProperty(obj, "RefreshControl", { get: () => require("module_416").default, set: undefined });
Object.defineProperty(obj, "SafeAreaView", {
  get: () => {
    require("warnOnce").default("safe-area-view-deprecated", "SafeAreaView has been deprecated and will be removed in a future release. Please use 'react-native-safe-area-context' instead. See https://github.com/AppAndFlow/react-native-safe-area-context");
    return require("module_419").default;
  },
  set: undefined
});
Object.defineProperty(obj, "ScrollView", { get: () => require("module_349").default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require("module_406").default, set: undefined });
Object.defineProperty(obj, "StatusBar", { get: () => require("module_304").default, set: undefined });
Object.defineProperty(obj, "Switch", { get: () => require("returnsFalse").default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require("module_298").default, set: undefined });
Object.defineProperty(obj, "unstable_TextAncestorContext", { get: () => require("module_111").default, set: undefined });
Object.defineProperty(obj, "TextInput", { get: () => require("InternalTextInput").default, set: undefined });
Object.defineProperty(obj, "Touchable", { get: () => require("Mixin").default, set: undefined });
Object.defineProperty(obj, "TouchableHighlight", { get: () => require("module_428").default, set: undefined });
Object.defineProperty(obj, "TouchableNativeFeedback", { get: () => require("module_291").default, set: undefined });
Object.defineProperty(obj, "TouchableOpacity", { get: () => require("module_429").default, set: undefined });
Object.defineProperty(obj, "TouchableWithoutFeedback", { get: () => require("TouchableWithoutFeedback").default, set: undefined });
Object.defineProperty(obj, "View", { get: () => require("View").default, set: undefined });
Object.defineProperty(obj, "VirtualizedList", { get: () => require("module_431").default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require("module_432").default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualView", { get: () => require("defaultHiddenStyle").default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualArray", { get: () => require("VirtualArray").VirtualArray, set: undefined });
Object.defineProperty(obj, "unstable_createVirtualCollectionView", { get: () => require("defaultItemToKey").createVirtualCollectionView, set: undefined });
Object.defineProperty(obj, "unstable_VirtualColumn", { get: () => require("module_440").default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualColumnGenerator", { get: () => require("DEFAULT_INITIAL_NUM_TO_RENDER").default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualRow", { get: () => require("module_443").default, set: undefined });
Object.defineProperty(obj, "unstable_getScrollParent", { get: () => require("module_445").default, set: undefined });
Object.defineProperty(obj, "unstable_DEFAULT_INITIAL_NUM_TO_RENDER", { get: () => require("module_442").DEFAULT_INITIAL_NUM_TO_RENDER, set: undefined });
Object.defineProperty(obj, "AccessibilityInfo", { get: () => require("module_447").default, set: undefined });
Object.defineProperty(obj, "ActionSheetIOS", { get: () => require("showActionSheetWithOptions").default, set: undefined });
Object.defineProperty(obj, "Alert", { get: () => require("module_231").default, set: undefined });
Object.defineProperty(obj, "Animated", { get: () => require("get FlatList").default, set: undefined });
Object.defineProperty(obj, "Appearance", { get: () => require("module_453"), set: undefined });
Object.defineProperty(obj, "AppRegistry", { get: () => require("AppRegistry").AppRegistry, set: undefined });
Object.defineProperty(obj, "AppState", { get: () => require("AppStateImpl").default, set: undefined });
Object.defineProperty(obj, "BackHandler", { get: () => require("module_247").default, set: undefined });
Object.defineProperty(obj, "Clipboard", {
  get: () => {
    require("warnOnce").default("clipboard-moved", "Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard");
    return require("Clipboard").default;
  },
  set: undefined
});
Object.defineProperty(obj, "codegenNativeCommands", { get: () => require("codegenNativeCommands").default, set: undefined });
Object.defineProperty(obj, "codegenNativeComponent", { get: () => require("codegenNativeComponent").default, set: undefined });
Object.defineProperty(obj, "DeviceEventEmitter", { get: () => require("module_92").default, set: undefined });
Object.defineProperty(obj, "DeviceInfo", { get: () => require("module_465").default, set: undefined });
Object.defineProperty(obj, "DevMenu", { get: () => require("module_466").default, set: undefined });
Object.defineProperty(obj, "DevSettings", { get: () => require("module_467").default, set: undefined });
Object.defineProperty(obj, "Dimensions", { get: () => require("Dimensions").default, set: undefined });
Object.defineProperty(obj, "DynamicColorIOS", { get: () => require("DynamicColorIOS").DynamicColorIOS, set: undefined });
Object.defineProperty(obj, "Easing", { get: () => require("bezier").default, set: undefined });
Object.defineProperty(obj, "findNodeHandle", { get: () => require("renderElement").findNodeHandle, set: undefined });
Object.defineProperty(obj, "I18nManager", { get: () => require("I18nManager").default, set: undefined });
Object.defineProperty(obj, "InteractionManager", {
  get: () => {
    require("warnOnce").default("interaction-manager-deprecated", "InteractionManager has been deprecated and will be removed in a future release. Please refactor long tasks into smaller ones, and  use 'requestIdleCallback' instead.");
    return require("reject").default;
  },
  set: undefined
});
Object.defineProperty(obj, "Keyboard", { get: () => require("KeyboardImpl").default, set: undefined });
Object.defineProperty(obj, "LayoutAnimation", { get: () => require("configureNext").default, set: undefined });
Object.defineProperty(obj, "Linking", { get: () => require("module_470").default, set: undefined });
Object.defineProperty(obj, "LogBox", { get: () => require("install").default, set: undefined });
Object.defineProperty(obj, "NativeAppEventEmitter", { get: () => require("module_238").default, set: undefined });
Object.defineProperty(obj, "NativeComponentRegistry", { get: () => require("module_65"), set: undefined });
Object.defineProperty(obj, "NativeDialogManagerAndroid", { get: () => require("DialogManagerAndroid").default, set: undefined });
Object.defineProperty(obj, "NativeEventEmitter", { get: () => require("NativeEventEmitter").default, set: undefined });
Object.defineProperty(obj, "NativeModules", { get: () => require("genModule").default, set: undefined });
Object.defineProperty(obj, "Networking", { get: () => require("module_208").default, set: undefined });
Object.defineProperty(obj, "PanResponder", { get: () => require("module_474").default, set: undefined });
Object.defineProperty(obj, "PermissionsAndroid", { get: () => require("PermissionsAndroidImpl").default, set: undefined });
Object.defineProperty(obj, "PixelRatio", { get: () => require("PixelRatio").default, set: undefined });
Object.defineProperty(obj, "Platform", { get: () => require("get Version").default, set: undefined });
Object.defineProperty(obj, "PlatformColor", { get: () => require("PlatformColor").PlatformColor, set: undefined });
Object.defineProperty(obj, "PushNotificationIOS", {
  get: () => {
    require("warnOnce").default("pushNotificationIOS-moved", "PushNotificationIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. See https://github.com/react-native-push-notification/ios");
    return require("PushNotificationIOS").default;
  },
  set: undefined
});
Object.defineProperty(obj, "processColor", { get: () => require("processColor").default, set: undefined });
Object.defineProperty(obj, "registerCallableModule", { get: () => require("module_236").default, set: undefined });
Object.defineProperty(obj, "requireNativeComponent", { get: () => require("module_464").default, set: undefined });
Object.defineProperty(obj, "ReactNativeVersion", { get: () => require("ReactNativeVersion").default, set: undefined });
Object.defineProperty(obj, "RootTagContext", { get: () => require("RootTagContext").RootTagContext, set: undefined });
Object.defineProperty(obj, "Settings", { get: () => require("module_483").default, set: undefined });
Object.defineProperty(obj, "Share", { get: () => require("Share").default, set: undefined });
Object.defineProperty(obj, "StyleSheet", { get: () => require("get hairlineWidth").default, set: undefined });
Object.defineProperty(obj, "Systrace", { get: () => require("module_46"), set: undefined });
Object.defineProperty(obj, "ToastAndroid", { get: () => require("SHORT").default, set: undefined });
Object.defineProperty(obj, "TurboModuleRegistry", { get: () => require("module_30"), set: undefined });
Object.defineProperty(obj, "UIManager", { get: () => require("measure").default, set: undefined });
obj.unstable_batchedUpdates = function unstable_batchedUpdates(fn, arg1) {
  fn(arg1);
};
Object.defineProperty(obj, "useAnimatedValue", { get: () => require("module_491").default, set: undefined });
Object.defineProperty(obj, "useAnimatedValueXY", { get: () => require("module_492").default, set: undefined });
Object.defineProperty(obj, "useAnimatedColor", { get: () => require("module_493").default, set: undefined });
Object.defineProperty(obj, "useColorScheme", { get: () => require("subscribe").default, set: undefined });
Object.defineProperty(obj, "usePressability", { get: () => require("module_301").default, set: undefined });
Object.defineProperty(obj, "useWindowDimensions", { get: () => require("module_340").default, set: undefined });
Object.defineProperty(obj, "UTFSequence", { get: () => require("module_495").default, set: undefined });
Object.defineProperty(obj, "Vibration", { get: () => require("Vibration").default, set: undefined });
Object.defineProperty(obj, "VirtualViewMode", { get: () => require("defaultHiddenStyle").VirtualViewMode, set: undefined });

export default obj;