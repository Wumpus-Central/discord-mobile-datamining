// _runtime/metro/00017__.js
const obj = {};
Object.defineProperty(obj, "ActivityIndicator", { get: () => require("ActivityIndicator").default, set: undefined });
Object.defineProperty(obj, "Button", { get: () => require("Button").default, set: undefined });
Object.defineProperty(obj, "DrawerLayoutAndroid", { get: () => require("00302__.js").default, set: undefined });
Object.defineProperty(obj, "EventEmitter", { get: () => require("EventEmitter").default, set: undefined });
Object.defineProperty(obj, "FlatList", { get: () => require("00311__.js").default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require("_queryCache").default, set: undefined });
Object.defineProperty(obj, "ImageBackground", { get: () => require("00338__.js").default, set: undefined });
Object.defineProperty(obj, "InputAccessoryView", { get: () => require("00339__.js").default, set: undefined });
Object.defineProperty(obj, "KeyboardAvoidingView", { get: () => require("00341__.js").default, set: undefined });
Object.defineProperty(obj, "experimental_LayoutConformance", {
  get: () => require("LayoutConformance").default,
  set: undefined,
});
Object.defineProperty(obj, "Modal", { get: () => require("00346__.js").default, set: undefined });
Object.defineProperty(obj, "unstable_NativeText", { get: () => require("NativeText").NativeText, set: undefined });
Object.defineProperty(obj, "unstable_NativeView", { get: () => require("Commands").default, set: undefined });
Object.defineProperty(obj, "Pressable", { get: () => require("00414__.js").default, set: undefined });
Object.defineProperty(obj, "ProgressBarAndroid", {
  get: () => {
    require("warnOnce").default(
      "progress-bar-android-moved",
      "ProgressBarAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/progress-bar-android' instead of 'react-native'. See https://github.com/react-native-progress-view/progress-bar-android",
    );
    return require("ProgressBarAndroid").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "RefreshControl", { get: () => require("00416__.js").default, set: undefined });
Object.defineProperty(obj, "SafeAreaView", {
  get: () => {
    require("warnOnce").default(
      "safe-area-view-deprecated",
      "SafeAreaView has been deprecated and will be removed in a future release. Please use 'react-native-safe-area-context' instead. See https://github.com/AppAndFlow/react-native-safe-area-context",
    );
    return require("00419__.js").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "ScrollView", { get: () => require("00349__.js").default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require("00406__.js").default, set: undefined });
Object.defineProperty(obj, "StatusBar", { get: () => require("00304__.js").default, set: undefined });
Object.defineProperty(obj, "Switch", { get: () => require("returnsFalse").default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require("00298__.js").default, set: undefined });
Object.defineProperty(obj, "unstable_TextAncestorContext", {
  get: () => require("00111__.js").default,
  set: undefined,
});
Object.defineProperty(obj, "TextInput", { get: () => require("InternalTextInput").default, set: undefined });
Object.defineProperty(obj, "Touchable", { get: () => require("Mixin").default, set: undefined });
Object.defineProperty(obj, "TouchableHighlight", { get: () => require("00428__.js").default, set: undefined });
Object.defineProperty(obj, "TouchableNativeFeedback", { get: () => require("00291__.js").default, set: undefined });
Object.defineProperty(obj, "TouchableOpacity", { get: () => require("00429__.js").default, set: undefined });
Object.defineProperty(obj, "TouchableWithoutFeedback", {
  get: () => require("TouchableWithoutFeedback").default,
  set: undefined,
});
Object.defineProperty(obj, "View", { get: () => require("View").default, set: undefined });
Object.defineProperty(obj, "VirtualizedList", { get: () => require("00431__.js").default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", { get: () => require("00432__.js").default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualView", {
  get: () => require("defaultHiddenStyle").default,
  set: undefined,
});
Object.defineProperty(obj, "unstable_VirtualArray", {
  get: () => require("VirtualArray").VirtualArray,
  set: undefined,
});
Object.defineProperty(obj, "unstable_createVirtualCollectionView", {
  get: () => require("defaultItemToKey").createVirtualCollectionView,
  set: undefined,
});
Object.defineProperty(obj, "unstable_VirtualColumn", { get: () => require("00440__.js").default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualColumnGenerator", {
  get: () => require("DEFAULT_INITIAL_NUM_TO_RENDER").default,
  set: undefined,
});
Object.defineProperty(obj, "unstable_VirtualRow", { get: () => require("00443__.js").default, set: undefined });
Object.defineProperty(obj, "unstable_getScrollParent", { get: () => require("00445__.js").default, set: undefined });
Object.defineProperty(obj, "unstable_DEFAULT_INITIAL_NUM_TO_RENDER", {
  get: () => require("00442__.js").DEFAULT_INITIAL_NUM_TO_RENDER,
  set: undefined,
});
Object.defineProperty(obj, "AccessibilityInfo", { get: () => require("00447__.js").default, set: undefined });
Object.defineProperty(obj, "ActionSheetIOS", {
  get: () => require("showActionSheetWithOptions").default,
  set: undefined,
});
Object.defineProperty(obj, "Alert", { get: () => require("00231__.js").default, set: undefined });
Object.defineProperty(obj, "Animated", { get: () => require("get FlatList").default, set: undefined });
Object.defineProperty(obj, "Appearance", { get: () => require("00453__.js"), set: undefined });
Object.defineProperty(obj, "AppRegistry", { get: () => require("AppRegistry").AppRegistry, set: undefined });
Object.defineProperty(obj, "AppState", { get: () => require("AppStateImpl").default, set: undefined });
Object.defineProperty(obj, "BackHandler", { get: () => require("00247__.js").default, set: undefined });
Object.defineProperty(obj, "Clipboard", {
  get: () => {
    require("warnOnce").default(
      "clipboard-moved",
      "Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard",
    );
    return require("Clipboard").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "codegenNativeCommands", {
  get: () => require("codegenNativeCommands").default,
  set: undefined,
});
Object.defineProperty(obj, "codegenNativeComponent", {
  get: () => require("codegenNativeComponent").default,
  set: undefined,
});
Object.defineProperty(obj, "DeviceEventEmitter", { get: () => require("00092__.js").default, set: undefined });
Object.defineProperty(obj, "DeviceInfo", { get: () => require("00465__.js").default, set: undefined });
Object.defineProperty(obj, "DevMenu", { get: () => require("00466__.js").default, set: undefined });
Object.defineProperty(obj, "DevSettings", { get: () => require("00467__.js").default, set: undefined });
Object.defineProperty(obj, "Dimensions", { get: () => require("Dimensions").default, set: undefined });
Object.defineProperty(obj, "DynamicColorIOS", {
  get: () => require("DynamicColorIOS").DynamicColorIOS,
  set: undefined,
});
Object.defineProperty(obj, "Easing", { get: () => require("bezier").default, set: undefined });
Object.defineProperty(obj, "findNodeHandle", { get: () => require("renderElement").findNodeHandle, set: undefined });
Object.defineProperty(obj, "I18nManager", { get: () => require("I18nManager").default, set: undefined });
Object.defineProperty(obj, "InteractionManager", {
  get: () => {
    require("warnOnce").default(
      "interaction-manager-deprecated",
      "InteractionManager has been deprecated and will be removed in a future release. Please refactor long tasks into smaller ones, and  use 'requestIdleCallback' instead.",
    );
    return require("reject").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "Keyboard", { get: () => require("KeyboardImpl").default, set: undefined });
Object.defineProperty(obj, "LayoutAnimation", { get: () => require("configureNext").default, set: undefined });
Object.defineProperty(obj, "Linking", { get: () => require("00470__.js").default, set: undefined });
Object.defineProperty(obj, "LogBox", { get: () => require("install").default, set: undefined });
Object.defineProperty(obj, "NativeAppEventEmitter", { get: () => require("00238__.js").default, set: undefined });
Object.defineProperty(obj, "NativeComponentRegistry", { get: () => require("00065__.js"), set: undefined });
Object.defineProperty(obj, "NativeDialogManagerAndroid", {
  get: () => require("DialogManagerAndroid").default,
  set: undefined,
});
Object.defineProperty(obj, "NativeEventEmitter", { get: () => require("NativeEventEmitter").default, set: undefined });
Object.defineProperty(obj, "NativeModules", { get: () => require("genModule").default, set: undefined });
Object.defineProperty(obj, "Networking", { get: () => require("00208__.js").default, set: undefined });
Object.defineProperty(obj, "PanResponder", { get: () => require("00474__.js").default, set: undefined });
Object.defineProperty(obj, "PermissionsAndroid", {
  get: () => require("PermissionsAndroidImpl").default,
  set: undefined,
});
Object.defineProperty(obj, "PixelRatio", { get: () => require("PixelRatio").default, set: undefined });
Object.defineProperty(obj, "Platform", { get: () => require("get Version").default, set: undefined });
Object.defineProperty(obj, "PlatformColor", { get: () => require("PlatformColor").PlatformColor, set: undefined });
Object.defineProperty(obj, "PushNotificationIOS", {
  get: () => {
    require("warnOnce").default(
      "pushNotificationIOS-moved",
      "PushNotificationIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. See https://github.com/react-native-push-notification/ios",
    );
    return require("PushNotificationIOS").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "processColor", { get: () => require("processColor").default, set: undefined });
Object.defineProperty(obj, "registerCallableModule", { get: () => require("00236__.js").default, set: undefined });
Object.defineProperty(obj, "requireNativeComponent", { get: () => require("00464__.js").default, set: undefined });
Object.defineProperty(obj, "ReactNativeVersion", { get: () => require("ReactNativeVersion").default, set: undefined });
Object.defineProperty(obj, "RootTagContext", { get: () => require("RootTagContext").RootTagContext, set: undefined });
Object.defineProperty(obj, "Settings", { get: () => require("00483__.js").default, set: undefined });
Object.defineProperty(obj, "Share", { get: () => require("Share").default, set: undefined });
Object.defineProperty(obj, "StyleSheet", { get: () => require("get hairlineWidth").default, set: undefined });
Object.defineProperty(obj, "Systrace", { get: () => require("00046__.js"), set: undefined });
Object.defineProperty(obj, "ToastAndroid", { get: () => require("SHORT").default, set: undefined });
Object.defineProperty(obj, "TurboModuleRegistry", { get: () => require("00030__.js"), set: undefined });
Object.defineProperty(obj, "UIManager", { get: () => require("measure").default, set: undefined });
obj.unstable_batchedUpdates = function unstable_batchedUpdates(fn, value) {
  fn(value);
};
Object.defineProperty(obj, "useAnimatedValue", { get: () => require("00491__.js").default, set: undefined });
Object.defineProperty(obj, "useAnimatedValueXY", { get: () => require("00492__.js").default, set: undefined });
Object.defineProperty(obj, "useAnimatedColor", { get: () => require("00493__.js").default, set: undefined });
Object.defineProperty(obj, "useColorScheme", { get: () => require("subscribe").default, set: undefined });
Object.defineProperty(obj, "usePressability", { get: () => require("00301__.js").default, set: undefined });
Object.defineProperty(obj, "useWindowDimensions", { get: () => require("00340__.js").default, set: undefined });
Object.defineProperty(obj, "UTFSequence", { get: () => require("00495__.js").default, set: undefined });
Object.defineProperty(obj, "Vibration", { get: () => require("Vibration").default, set: undefined });
Object.defineProperty(obj, "VirtualViewMode", {
  get: () => require("defaultHiddenStyle").VirtualViewMode,
  set: undefined,
});

export default obj;
