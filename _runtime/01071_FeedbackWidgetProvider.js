// === Module 1071: FeedbackWidgetProvider ===

// Module 1071 (FeedbackWidgetProvider)
import _mod693 from "module_693" /* 693 */;
import MOBILE_FEEDBACK_INTEGRATION_NAME from "MOBILE_FEEDBACK_INTEGRATION_NAME" /* 1009 */;
import PULL_DOWN_CLOSE_THRESHOLD from "PULL_DOWN_CLOSE_THRESHOLD" /* 1073 */;
import _mod1075 from "module_1075" /* 1075 */;
import FeedbackButton2 from "FeedbackButton" /* 1076 */;
import defaultButtonStyles from "defaultButtonStyles" /* 1078 */;
import _mod1080 from "module_1080" /* 1080 */;
import FeedbackWidget2 from "FeedbackWidget" /* 1081 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_1072 from "module_1072" /* 1072 */;

let Platform;
let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
({ Animated: metroRequire, Appearance: metroImportDefault, Dimensions: metroImportAll, Easing: c9, Modal: c10, PanResponder: unpackModuleId, Platform, ScrollView: closure_12, View: map1 } = react_native);
const useNativeDriver = module_1072.isNativeDriverSupportedForColorAnimations();
class FeedbackWidgetProvider {
  constructor(arg0) {
    let constructResult;
    let value;
    let value2;
    const self = this;
    _classCallCheck(this, FeedbackWidgetProvider);
    let items = [arg0];
    let obj = _getPrototypeOf(FeedbackWidgetProvider);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = c3(self, constructResult);
    let closure_0 = tmp3Result;
    let obj2 = { isButtonVisible: false, isScreenshotButtonVisible: false, isVisible: false, backgroundOpacity: value, panY: value2, isScrollAtTop: true };
    value = new metroRequire.Value(0);
    value2 = new metroRequire.Value(metroImportAll.get("screen").height);
    tmp3Result.state = obj2;
    let obj3 = {
      onStartShouldSetPanResponder(arg0, dy) {
        const obj = FeedbackWidgetProvider(closure_2_1[8]);
        const isScrollAtTop = obj.notWeb() && closure_0.state.isScrollAtTop && dy.dy > 0;
        return isScrollAtTop;
      },
      onMoveShouldSetPanResponder(arg0, dy) {
        const obj = FeedbackWidgetProvider(closure_2_1[8]);
        const isScrollAtTop = obj.notWeb() && closure_0.state.isScrollAtTop && dy.dy > 0;
        return isScrollAtTop;
      },
      onPanResponderMove(arg0, dy) {
        if (dy.dy > 0) {
          const panY = closure_0.state.panY;
          panY.setValue(dy.dy);
        }
      },
      onPanResponderRelease(arg0, dy) {
        if (dy.dy > FeedbackWidgetProvider(closure_2_1[9]).PULL_DOWN_CLOSE_THRESHOLD) {
          timing = closure_2_6.timing;
          const panY = closure_0.state.panY;
          const obj = { toValue: closure_2_8.get("screen").height, duration: FeedbackWidgetProvider(closure_2_1[9]).SLIDE_ANIMATION_DURATION, useNativeDriver: true };
          const timingResult = timing(panY, obj);
          timingResult.start(() => {
            closure_1_0._handleClose();
          });
        } else {
          const springResult = closure_2_6.spring(closure_0.state.panY, { toValue: 0, useNativeDriver: true });
          springResult.start();
        }
      }
    };
    tmp3Result._panResponder = unpackModuleId.create(obj3);
    tmp3Result._handleScroll = (nativeEvent) => {
      const obj = { isScrollAtTop: nativeEvent.nativeEvent.contentOffset.y <= 0 };
      closure_0.setState(obj);
    };
    tmp3Result._setVisibilityFunction = (isVisible) => {
      let parallel;
      if (isVisible) {
        const obj2 = { isVisible };
        isVisible.setState(obj2);
      } else {
        let obj = { toValue: closure_1_8.get("screen").height, duration: isVisible(closure_1_1[9]).SLIDE_ANIMATION_DURATION, useNativeDriver: true, easing: closure_1_9.out(closure_1_9.quad) };
        ({ parallel, timing } = timing);
        const panY = isVisible.state.panY;
        const items = [timing(panY, obj), ];
        const timing2 = timing.timing;
        const backgroundOpacity = isVisible.state.backgroundOpacity;
        const obj3 = { toValue: 0, duration: isVisible(closure_1_1[9]).BACKGROUND_ANIMATION_DURATION, useNativeDriver, easing: closure_1_9.out(closure_1_9.quad) };
        items[1] = timing2(backgroundOpacity, obj3);
        const parallelResult = parallel(items);
        parallelResult.start(() => {
          const obj = { isVisible };
          isVisible.setState(obj);
        });
      }
    };
    tmp3Result._setButtonVisibilityFunction = (isButtonVisible) => {
      const obj = { isButtonVisible };
      closure_0.setState(obj);
    };
    tmp3Result._setScreenshotButtonVisibilityFunction = (isScreenshotButtonVisible) => {
      const obj = { isScreenshotButtonVisible };
      closure_0.setState(obj);
    };
    tmp3Result._handleClose = () => {
      const FeedbackWidgetManager = FeedbackWidgetProvider(closure_1_1[9]).FeedbackWidgetManager;
      FeedbackWidgetManager.hide();
    };
    const FeedbackButtonManager = PULL_DOWN_CLOSE_THRESHOLD.FeedbackButtonManager;
    FeedbackButtonManager.initialize(tmp3Result._setButtonVisibilityFunction);
    const ScreenshotButtonManager = PULL_DOWN_CLOSE_THRESHOLD.ScreenshotButtonManager;
    ScreenshotButtonManager.initialize(tmp3Result._setScreenshotButtonVisibilityFunction);
    let FeedbackWidgetManager = PULL_DOWN_CLOSE_THRESHOLD.FeedbackWidgetManager;
    FeedbackWidgetManager.initialize(tmp3Result._setVisibilityFunction);
    return tmp3Result;
  }
}
_inherits(FeedbackWidgetProvider, react.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = metroImportDefault.addChangeListener(() => {
      self.forceUpdate();
    });
  }
};
let items = [
  entry,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._themeListener) {
        const _themeListener = this._themeListener;
        _themeListener.remove();
      }
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(arg0, isVisible) {
      let parallel;
      let timing;
      const self = this;
      if (!isVisible.isVisible) {
        if (self.state.isVisible) {
          ({ parallel, timing } = metroRequire);
          const backgroundOpacity = self.state.backgroundOpacity;
          const obj = { toValue: 1, duration: PULL_DOWN_CLOSE_THRESHOLD.BACKGROUND_ANIMATION_DURATION, useNativeDriver, easing: React4.in(React4.quad) };
          const items = [timing(backgroundOpacity, obj), ];
          const timing2 = metroRequire.timing;
          const panY = self.state.panY;
          const obj2 = { toValue: 0, duration: PULL_DOWN_CLOSE_THRESHOLD.SLIDE_ANIMATION_DURATION, useNativeDriver: true, easing: React4.in(React4.quad) };
          items[1] = timing2(panY, obj2);
          const parallelResult = parallel(items);
          parallelResult.start(() => {
            const debug = _mod693.debug;
            debug.log("FeedbackWidgetProvider componentDidUpdate");
          });
        }
      }
      const tmp7 = isVisible.isVisible && !self.state.isVisible;
      if (tmp7) {
        const backgroundOpacity2 = self.state.backgroundOpacity;
        backgroundOpacity2.setValue(0);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      let backgroundOpacity;
      let createElement5;
      let createElement6;
      let createElement8;
      let createElement9;
      let isButtonVisible;
      let isScreenshotButtonVisible;
      let isVisible;
      let items;
      let items1;
      let items2;
      const self = this;
      const obj = module_1072;
      if (obj.isModalSupported()) {
        ({ isButtonVisible, isScreenshotButtonVisible, isVisible, backgroundOpacity } = self.state);
        const obj2 = { inputRange: [0, 1], outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"] };
        const tmpResult = _mod1075;
        const theme = tmpResult.getTheme();
        const Fragment = react.Fragment;
        const children = self.props.children;
        const createElement = react.createElement;
        const interpolateResult = backgroundOpacity.interpolate(obj2);
        if (isButtonVisible) {
          const createElement2 = react.createElement;
          const _Object = Object;
          const FeedbackButton = FeedbackButton2.FeedbackButton;
          const tmpResult5 = MOBILE_FEEDBACK_INTEGRATION_NAME;
          isButtonVisible = createElement2(FeedbackButton, assign({}, tmpResult5.getFeedbackButtonOptions()));
        }
        if (isScreenshotButtonVisible) {
          const createElement3 = react.createElement;
          const _Object2 = Object;
          const ScreenshotButton = _mod1080.ScreenshotButton;
          const assign2 = Object.assign;
          const tmpResult6 = MOBILE_FEEDBACK_INTEGRATION_NAME;
          isScreenshotButtonVisible = createElement3(ScreenshotButton, assign2({}, tmpResult6.getScreenshotButtonOptions()));
        }
        let element4 = isVisible;
        if (element4) {
          const createElement4 = react.createElement;
          const View = metroRequire.View;
          const obj3 = { style: items };
          items = [defaultButtonStyles.modalWrapper, ];
          const obj4 = { backgroundColor: interpolateResult };
          items[1] = obj4;
          const obj5 = { visible: isVisible, transparent: true, animationType: "none", onRequestClose: self._handleClose, testID: "feedback-form-modal" };
          ({ createElement: createElement5, createElement: createElement6 } = react);
          const obj6 = { style: defaultButtonStyles.topSpacer };
          const element6 = createElement6(map1, obj6);
          const _Object3 = Object;
          const createElement7 = react.createElement;
          const View2 = metroRequire.View;
          const assign3 = Object.assign;
          const obj7 = { style: items1 };
          items1 = [, ];
          const tmpResult7 = defaultButtonStyles;
          items1[0] = tmpResult7.modalSheetContainer(theme);
          const obj8 = { transform: items2 };
          items2 = [{ translateY: self.state.panY }];
          const obj9 = { translateY: self.state.panY };
          items1[1] = obj8;
          const obj10 = { bounces: false, keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, onScroll: self._handleScroll };
          ({ createElement: createElement8, createElement: createElement9 } = react);
          const _Object4 = Object;
          const assign3Result = assign3(obj7, self._panResponder.panHandlers);
          const FeedbackWidget = FeedbackWidget2.FeedbackWidget;
          const assign4 = Object.assign;
          const obj11 = { onFormClose: null, onFormSubmitted: null };
          ({ _handleClose: obj16.onFormClose, _handleClose: obj16.onFormSubmitted } = self);
          const tmpResult8 = MOBILE_FEEDBACK_INTEGRATION_NAME;
          element4 = createElement4(View, obj3, createElement5(authStore, obj5, element6, createElement7(View2, assign3Result, createElement8(closure_12, obj10, createElement9(FeedbackWidget, assign4({}, tmpResult8.getFeedbackOptions(), obj11))))));
        }
        return <>{children}{isButtonVisible}{isScreenshotButtonVisible}{element4}</>;
      } else {
        const debug = _mod693.debug;
        debug.error("FeedbackWidget Modal is not supported in React Native < 0.71 with Fabric renderer.");
        return <>{self.props.children}</>;
      }
    }
  }
];
const FeedbackWidgetProvider_export = _createClass(FeedbackWidgetProvider, items);

export { FeedbackWidgetProvider_export as FeedbackWidgetProvider };