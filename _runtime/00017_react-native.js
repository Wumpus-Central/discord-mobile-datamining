// _runtime/00017_react-native.js
const require = globalThis.__r;

let obj = {
  unstable_batchedUpdates(fn, arg1) {
    fn(arg1);
  },
};
Object.defineProperty(obj, "ActivityIndicator", { get: () => require("ActivityIndicator").default, set: undefined });
Object.defineProperty(obj, "Button", { get: () => require("Button").default, set: undefined });
Object.defineProperty(obj, "DrawerLayoutAndroid", { get: () => require("metro/00302__.js").default, set: undefined });
Object.defineProperty(obj, "EventEmitter", { get: () => require("metro/00089__.js").default, set: undefined });
Object.defineProperty(obj, "FlatList", { get: () => require("metro/00311__.js").default, set: undefined });
Object.defineProperty(obj, "Image", { get: () => require("Image").default, set: undefined });
Object.defineProperty(obj, "ImageBackground", { get: () => require("metro/00338__.js").default, set: undefined });
Object.defineProperty(obj, "InputAccessoryView", { get: () => require("metro/00339__.js").default, set: undefined });
Object.defineProperty(obj, "KeyboardAvoidingView", { get: () => require("metro/00341__.js").default, set: undefined });
Object.defineProperty(obj, "experimental_LayoutConformance", {
  get: () => require("LayoutConformance").default,
  set: undefined,
});
Object.defineProperty(obj, "Modal", { get: () => require("Wrapper").default, set: undefined });
Object.defineProperty(obj, "unstable_NativeText", { get: () => require("NativeText").NativeText, set: undefined });
Object.defineProperty(obj, "unstable_NativeView", { get: () => require("Commands").default, set: undefined });
Object.defineProperty(obj, "Pressable", { get: () => require("Pressable").default, set: undefined });
Object.defineProperty(obj, "ProgressBarAndroid", {
  get: () => {
    const obj = require("warnOnce");
    obj.default(
      "progress-bar-android-moved",
      "ProgressBarAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/progress-bar-android' instead of 'react-native'. See https://github.com/react-native-progress-view/progress-bar-android",
    );
    return require("ProgressBarAndroid").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "RefreshControl", { get: () => require("metro/00416__.js").default, set: undefined });
Object.defineProperty(obj, "SafeAreaView", {
  get: () => {
    const obj = require("warnOnce");
    obj.default(
      "safe-area-view-deprecated",
      "SafeAreaView has been deprecated and will be removed in a future release. Please use 'react-native-safe-area-context' instead. See https://github.com/AppAndFlow/react-native-safe-area-context",
    );
    return require("react").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "ScrollView", { get: () => require("metro/00349__.js").default, set: undefined });
Object.defineProperty(obj, "SectionList", { get: () => require("metro/00406__.js").default, set: undefined });
Object.defineProperty(obj, "StatusBar", { get: () => require("metro/00304__.js").default, set: undefined });
Object.defineProperty(obj, "Switch", { get: () => require("Switch").default, set: undefined });
Object.defineProperty(obj, "Text", { get: () => require("TextImpl").default, set: undefined });
Object.defineProperty(obj, "unstable_TextAncestorContext", { get: () => require("react").default, set: undefined });
Object.defineProperty(obj, "TextInput", { get: () => require("TextInput").default, set: undefined });
Object.defineProperty(obj, "Touchable", { get: () => require("Mixin").default, set: undefined });
Object.defineProperty(obj, "TouchableHighlight", { get: () => require("TouchableHighlight").default, set: undefined });
Object.defineProperty(obj, "TouchableNativeFeedback", {
  get: () => require("TouchableNativeFeedback").default,
  set: undefined,
});
Object.defineProperty(obj, "TouchableOpacity", { get: () => require("Touchable").default, set: undefined });
Object.defineProperty(obj, "TouchableWithoutFeedback", {
  get: () => require("TouchableWithoutFeedback").default,
  set: undefined,
});
Object.defineProperty(obj, "View", { get: () => require("View").default, set: undefined });
Object.defineProperty(obj, "VirtualizedList", { get: () => require("metro/00431__.js").default, set: undefined });
Object.defineProperty(obj, "VirtualizedSectionList", {
  get: () => require("metro/00432__.js").default,
  set: undefined,
});
Object.defineProperty(obj, "unstable_VirtualView", { get: () => require("metro/00433__.js").default, set: undefined });
Object.defineProperty(obj, "unstable_VirtualArray", {
  get: () => require("_createClass").VirtualArray,
  set: undefined,
});
Object.defineProperty(obj, "unstable_createVirtualCollectionView", {
  get: () => require("metro/00438__.js").createVirtualCollectionView,
  set: undefined,
});
Object.defineProperty(obj, "unstable_VirtualColumn", {
  get: () => require("metro/00440__.js").default,
  set: undefined,
});
Object.defineProperty(obj, "unstable_VirtualColumnGenerator", {
  get: () => require("DEFAULT_INITIAL_NUM_TO_RENDER").default,
  set: undefined,
});
Object.defineProperty(obj, "unstable_VirtualRow", { get: () => require("metro/00443__.js").default, set: undefined });
Object.defineProperty(obj, "unstable_getScrollParent", {
  get: () => require("getScrollParent").default,
  set: undefined,
});
Object.defineProperty(obj, "unstable_DEFAULT_INITIAL_NUM_TO_RENDER", {
  get: () => require("metro/00442__.js").DEFAULT_INITIAL_NUM_TO_RENDER,
  set: undefined,
});
Object.defineProperty(obj, "AccessibilityInfo", { get: () => require("metro/00447__.js").default, set: undefined });
Object.defineProperty(obj, "ActionSheetIOS", {
  get: () => require("showActionSheetWithOptions").default,
  set: undefined,
});
Object.defineProperty(obj, "Alert", { get: () => require("metro/00231__.js").default, set: undefined });
Object.defineProperty(obj, "Animated", { get: () => require("get FlatList").default, set: undefined });
Object.defineProperty(obj, "Appearance", { get: () => require("metro/00453__.js"), set: undefined });
Object.defineProperty(obj, "AppRegistry", { get: () => require("AppRegistry").AppRegistry, set: undefined });
Object.defineProperty(obj, "AppState", { get: () => require("metro/00456__.js").default, set: undefined });
Object.defineProperty(obj, "BackHandler", { get: () => require("metro/00247__.js").default, set: undefined });
Object.defineProperty(obj, "Clipboard", {
  get: () => {
    const obj = require("warnOnce");
    obj.default(
      "clipboard-moved",
      "Clipboard has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-clipboard/clipboard' instead of 'react-native'. See https://github.com/react-native-clipboard/clipboard",
    );
    return require("metro/00460__.js").default;
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
Object.defineProperty(obj, "DeviceEventEmitter", { get: () => require("metro/00092__.js").default, set: undefined });
Object.defineProperty(obj, "DeviceInfo", { get: () => require("metro/00465__.js").default, set: undefined });
Object.defineProperty(obj, "DevMenu", { get: () => require("metro/00466__.js").default, set: undefined });
Object.defineProperty(obj, "DevSettings", { get: () => require("metro/00467__.js").default, set: undefined });
Object.defineProperty(obj, "Dimensions", { get: () => require("metro/00088__.js").default, set: undefined });
Object.defineProperty(obj, "DynamicColorIOS", {
  get: () => require("DynamicColorIOS").DynamicColorIOS,
  set: undefined,
});
Object.defineProperty(obj, "Easing", { get: () => require("bezier").default, set: undefined });
Object.defineProperty(obj, "findNodeHandle", { get: () => require("renderElement").findNodeHandle, set: undefined });
Object.defineProperty(obj, "I18nManager", { get: () => require("I18nManager").default, set: undefined });
Object.defineProperty(obj, "InteractionManager", {
  get: () => {
    const obj = require("warnOnce");
    obj.default(
      "interaction-manager-deprecated",
      "InteractionManager has been deprecated and will be removed in a future release. Please refactor long tasks into smaller ones, and  use 'requestIdleCallback' instead.",
    );
    return require("toError").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "Keyboard", { get: () => require("metro/00343__.js").default, set: undefined });
Object.defineProperty(obj, "LayoutAnimation", { get: () => require("metro/00342__.js").default, set: undefined });
Object.defineProperty(obj, "Linking", { get: () => require("metro/00470__.js").default, set: undefined });
Object.defineProperty(obj, "LogBox", { get: () => require("react").default, set: undefined });
Object.defineProperty(obj, "NativeAppEventEmitter", { get: () => require("metro/00238__.js").default, set: undefined });
Object.defineProperty(obj, "NativeComponentRegistry", { get: () => require("metro/00065__.js"), set: undefined });
Object.defineProperty(obj, "NativeDialogManagerAndroid", {
  get: () => require("DialogManagerAndroid").default,
  set: undefined,
});
Object.defineProperty(obj, "NativeEventEmitter", { get: () => require("metro/00209__.js").default, set: undefined });
Object.defineProperty(obj, "NativeModules", { get: () => require("metro/00031__.js").default, set: undefined });
Object.defineProperty(obj, "Networking", { get: () => require("metro/00208__.js").default, set: undefined });
Object.defineProperty(obj, "PanResponder", { get: () => require("metro/00474__.js").default, set: undefined });
Object.defineProperty(obj, "PermissionsAndroid", { get: () => require("metro/00476__.js").default, set: undefined });
Object.defineProperty(obj, "PixelRatio", { get: () => require("metro/00087__.js").default, set: undefined });
Object.defineProperty(obj, "Platform", { get: () => require("get Version").default, set: undefined });
Object.defineProperty(obj, "PlatformColor", { get: () => require("PlatformColor").PlatformColor, set: undefined });
Object.defineProperty(obj, "PushNotificationIOS", {
  get: () => {
    const obj = require("warnOnce");
    obj.default(
      "pushNotificationIOS-moved",
      "PushNotificationIOS has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. See https://github.com/react-native-push-notification/ios",
    );
    return require("metro/00479__.js").default;
  },
  set: undefined,
});
Object.defineProperty(obj, "processColor", { get: () => require("processColor").default, set: undefined });
Object.defineProperty(obj, "registerCallableModule", {
  get: () => require("metro/00236__.js").default,
  set: undefined,
});
Object.defineProperty(obj, "requireNativeComponent", {
  get: () => require("metro/00464__.js").default,
  set: undefined,
});
Object.defineProperty(obj, "ReactNativeVersion", { get: () => require("metro/00482__.js").default, set: undefined });
Object.defineProperty(obj, "RootTagContext", { get: () => require("react").RootTagContext, set: undefined });
Object.defineProperty(obj, "Settings", { get: () => require("metro/00483__.js").default, set: undefined });
Object.defineProperty(obj, "Share", { get: () => require("metro/00485__.js").default, set: undefined });
Object.defineProperty(obj, "StyleSheet", { get: () => require("get hairlineWidth").default, set: undefined });
Object.defineProperty(obj, "Systrace", { get: () => require("metro/00046__.js"), set: undefined });
Object.defineProperty(obj, "ToastAndroid", { get: () => require("SHORT").default, set: undefined });
Object.defineProperty(obj, "TurboModuleRegistry", { get: () => require("metro/00030__.js"), set: undefined });
Object.defineProperty(obj, "UIManager", { get: () => require("metro/00068__.js").default, set: undefined });
Object.defineProperty(obj, "useAnimatedValue", { get: () => require("useAnimatedValue").default, set: undefined });
Object.defineProperty(obj, "useAnimatedValueXY", { get: () => require("useAnimatedValueXY").default, set: undefined });
Object.defineProperty(obj, "useAnimatedColor", { get: () => require("useAnimatedColor").default, set: undefined });
Object.defineProperty(obj, "useColorScheme", { get: () => require("useColorScheme").default, set: undefined });
Object.defineProperty(obj, "usePressability", { get: () => require("usePressability").default, set: undefined });
Object.defineProperty(obj, "useWindowDimensions", {
  get: () => require("useWindowDimensions").default,
  set: undefined,
});
Object.defineProperty(obj, "UTFSequence", {
  get: () => require("deepFreezeAndThrowOnMutationInDev").default,
  set: undefined,
});
Object.defineProperty(obj, "Vibration", { get: () => require("Vibration").default, set: undefined });
Object.defineProperty(obj, "VirtualViewMode", {
  get: () => require("metro/00433__.js").VirtualViewMode,
  set: undefined,
});

export default obj;
