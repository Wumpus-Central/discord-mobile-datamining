import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import isModalSupported from "isModalSupported";

let Platform;
let c10;
let c9;
let closure_12;
let closure_6;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
let FeedbackWidgetProvider = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let c5 = importAllResult;
({ Animated: closure_6, Appearance: error, Dimensions: metroImportAll, Easing: c9, Modal: c10, PanResponder: unpackModuleId, Platform, ScrollView: closure_12, View: map1 } = get_ActivityIndicator);
isModalSupported = isModalSupported.isNativeDriverSupportedForColorAnimations();
class FeedbackWidgetProvider {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    obj = { isButtonVisible: false, isScreenshotButtonVisible: false, isVisible: false, backgroundOpacity: null, panY: null, isScrollAtTop: true };
    value = new Animated.Value(0);
    obj[3] = value;
    value1 = new Animated.Value(Dimensions.get("screen").height);
    obj[4] = value1;
    tmp3Result.state = obj;
    obj1 = {
      onStartShouldSetPanResponder(arg0, dy) {
            let isScrollAtTop = tmp3Result(outer1_1[8]).notWeb();
            if (isScrollAtTop) {
              isScrollAtTop = tmp3Result.state.isScrollAtTop;
            }
            if (isScrollAtTop) {
              isScrollAtTop = dy.dy > 0;
            }
            return isScrollAtTop;
          },
      onMoveShouldSetPanResponder(arg0, dy) {
            let isScrollAtTop = tmp3Result(outer1_1[8]).notWeb();
            if (isScrollAtTop) {
              isScrollAtTop = tmp3Result.state.isScrollAtTop;
            }
            if (isScrollAtTop) {
              isScrollAtTop = dy.dy > 0;
            }
            return isScrollAtTop;
          },
      onPanResponderMove(arg0, dy) {
            if (dy.dy > 0) {
              const panY = tmp3Result.state.panY;
              panY.setValue(dy.dy);
            }
          },
      onPanResponderRelease(arg0, dy) {
            if (dy.dy > tmp3Result(outer1_1[9]).PULL_DOWN_CLOSE_THRESHOLD) {
              const obj = { toValue: null, duration: null, useNativeDriver: true };
              obj[0] = outer1_8.get("screen").height;
              obj[1] = tmp3Result(outer1_1[9]).SLIDE_ANIMATION_DURATION;
              outer1_6.timing(tmp3Result.state.panY, obj).start(() => {
                closure_0._handleClose();
              });
              const timingResult = outer1_6.timing(tmp3Result.state.panY, obj);
            } else {
              outer1_6.spring(tmp3Result.state.panY, { toValue: 0, useNativeDriver: true }).start();
              const springResult = outer1_6.spring(tmp3Result.state.panY, { toValue: 0, useNativeDriver: true });
            }
          }
    };
    tmp3Result._panResponder = PanResponder.create(obj1);
    tmp3Result._handleScroll = (nativeEvent) => {
      tmp3Result.setState({ isScrollAtTop: nativeEvent.nativeEvent.contentOffset.y <= 0 });
    };
    tmp3Result._setVisibilityFunction = (arg0) => {
      let parallel;
      let timing;
      if (arg0) {
        let obj = { isVisible: null };
        obj[0] = arg0;
        tmp3Result.setState(obj);
      } else {
        obj = { toValue: null, duration: null, useNativeDriver: true, easing: null };
        ({ parallel, timing } = outer1_6);
        obj[0] = outer1_8.get("screen").height;
        obj[1] = tmp3Result(outer1_1[9]).SLIDE_ANIMATION_DURATION;
        obj[3] = outer1_9.out(outer1_9.quad);
        const items = [timing(tmp3Result.state.panY, obj), ];
        obj = { toValue: 0, duration: null, useNativeDriver: null, easing: null };
        obj[1] = tmp3Result(outer1_1[9]).BACKGROUND_ANIMATION_DURATION;
        obj[2] = outer1_15;
        obj[3] = outer1_9.out(outer1_9.quad);
        items[1] = outer1_6.timing(tmp3Result.state.backgroundOpacity, obj);
        parallel(items).start(() => {
          state.setState({ isVisible: state });
        });
        const parallelResult = parallel(items);
      }
    };
    tmp3Result._setButtonVisibilityFunction = (isButtonVisible) => {
      tmp3Result.setState({ isButtonVisible });
    };
    tmp3Result._setScreenshotButtonVisibilityFunction = (isScreenshotButtonVisible) => {
      tmp3Result.setState({ isScreenshotButtonVisible });
    };
    tmp3Result._handleClose = () => {
      const FeedbackWidgetManager = tmp3Result(table[9]).FeedbackWidgetManager;
      FeedbackWidgetManager.hide();
    };
    FeedbackButtonManager = require("_isNativeReflectConstruct").FeedbackButtonManager;
    initializeResult = FeedbackButtonManager.initialize(tmp3Result._setButtonVisibilityFunction);
    ScreenshotButtonManager = require("_isNativeReflectConstruct").ScreenshotButtonManager;
    initializeResult1 = ScreenshotButtonManager.initialize(tmp3Result._setScreenshotButtonVisibilityFunction);
    FeedbackWidgetManager = require("_isNativeReflectConstruct").FeedbackWidgetManager;
    initializeResult2 = FeedbackWidgetManager.initialize(tmp3Result._setVisibilityFunction);
    return tmp3Result;
  }
}
require("_inherits")(FeedbackWidgetProvider, importAllResult.Component);
isModalSupported = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = closure_7.addChangeListener(() => {
      self.forceUpdate();
    });
  }
};
let items = [
  isModalSupported,
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
          let obj = { toValue: 1, duration: null, useNativeDriver: null, easing: null };
          ({ parallel, timing } = RN);
          obj[1] = FeedbackWidgetProvider(1197).BACKGROUND_ANIMATION_DURATION;
          obj[2] = isModalSupported;
          obj[3] = closure_9.in(closure_9.quad);
          const items = [timing(self.state.backgroundOpacity, obj), ];
          obj = { toValue: 0, duration: null, useNativeDriver: true, easing: null };
          obj[1] = FeedbackWidgetProvider(1197).SLIDE_ANIMATION_DURATION;
          obj[3] = closure_9.in(closure_9.quad);
          items[1] = RN.timing(self.state.panY, obj);
          parallel(items).start(() => {
            const debug = callback(table[10]).debug;
            debug.log("FeedbackWidgetProvider componentDidUpdate");
          });
          const parallelResult = parallel(items);
        }
      }
      if (tmp7) {
        const backgroundOpacity = self.state.backgroundOpacity;
        backgroundOpacity.setValue(0);
      }
    }
  },
  {
    key: "render",
    value: function render() {
      let backgroundOpacity;
      let createElement;
      let createElement2;
      let createElement3;
      let createElement4;
      let isButtonVisible;
      let isScreenshotButtonVisible;
      let isVisible;
      const self = this;
      let obj = FeedbackWidgetProvider(1196);
      if (obj.isModalSupported()) {
        let tmpResult = tmp(1199);
        ({ isButtonVisible, isScreenshotButtonVisible, isVisible, backgroundOpacity } = self.state);
        obj = { inputRange: null, outputRange: null };
        obj[0] = [0, 1];
        obj[1] = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"];
        const theme = tmpResult.getTheme();
        let obj3 = importAllResult;
        const Fragment = importAllResult.Fragment;
        const children = self.props.children;
        if (isButtonVisible) {
          const _Object = Object;
          tmpResult = tmp(1133);
          isButtonVisible = obj3.createElement(tmp(1200).FeedbackButton, Object.assign({}, tmpResult.getFeedbackButtonOptions()));
        }
        if (isScreenshotButtonVisible) {
          const _Object2 = Object;
          isScreenshotButtonVisible = obj3.createElement(tmp(1204).ScreenshotButton, Object.assign({}, tmp(1133).getScreenshotButtonOptions()));
          const tmpResult1 = tmp(1133);
        }
        let element = isVisible;
        if (isVisible) {
          obj = { style: null };
          const items = [tmp(1202).modalWrapper, ];
          const obj1 = { backgroundColor: null };
          obj1[0] = interpolateResult;
          items[1] = obj1;
          obj[0] = items;
          const obj2 = { visible: null, transparent: true, animationType: "none", onRequestClose: null, testID: "feedback-form-modal" };
          obj2[0] = isVisible;
          obj2[3] = self._handleClose;
          obj3 = { style: null };
          ({ createElement, createElement: createElement2 } = obj3);
          obj3[0] = tmp(1202).topSpacer;
          const element2 = createElement2(closure_13, obj3);
          const _Object3 = Object;
          const obj4 = { style: null };
          const items1 = [tmp(1202).modalSheetContainer(theme), ];
          const obj5 = { transform: null };
          const obj6 = { translateY: null };
          obj6[0] = self.state.panY;
          const items2 = [obj6];
          obj5[0] = items2;
          items1[1] = obj5;
          obj4[0] = items1;
          const obj7 = { bounces: false, keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, onScroll: null };
          obj7[3] = self._handleScroll;
          const merged = Object.assign(obj4, self._panResponder.panHandlers);
          ({ createElement: createElement3, createElement: createElement4 } = obj3);
          const _Object4 = Object;
          const tmpResult2 = tmp(1202);
          ({ _handleClose: obj17[0], _handleClose: obj17[1] } = self);
          element = <RN.View style={null}><closure_10 visible={null} transparent animationType="none" onRequestClose={null} testID="feedback-form-modal">{element2}<RN.View {......merged}>{createElement3(closure_12, obj7, createElement4(tmp(1205).FeedbackWidget, Object.assign({}, tmp(1133).getFeedbackOptions(), { onFormClose: null, onFormSubmitted: null })))}</RN.View></closure_10></RN.View>;
          const obj8 = { onFormClose: null, onFormSubmitted: null };
          const tmpResult3 = tmp(1133);
        }
        return <>{children}{isButtonVisible}{isScreenshotButtonVisible}{element}</>;
      } else {
        const debug = tmp(817).debug;
        debug.error("FeedbackWidget Modal is not supported in React Native < 0.71 with Fabric renderer.");
        return <>{self.props.children}</>;
      }
    }
  }
];

export const FeedbackWidgetProvider = importDefaultResult(FeedbackWidgetProvider, items);