// _runtime/metro/01060__.js
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import c3 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

let FeedbackWidgetProvider = fn;
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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
get_ActivityIndicator = fn(17);
({ Animated: metroRequire, Appearance: closure_7, Dimensions: closure_8, Easing: closure_9, Modal: c10, PanResponder: closure_11, Platform, ScrollView: closure_12, View: map1 } = get_ActivityIndicator);
const module_1061 = fn(1061);
const useNativeDriver = module_1061.isNativeDriverSupportedForColorAnimations();
class FeedbackWidgetProvider {
  constructor(arg0) {
    self = this;
    tmp = c2(this, FeedbackWidgetProvider);
    items = [];
    items[0] = global;
    tmp2 = closure_4;
    obj = closure_4(FeedbackWidgetProvider);
    tmp3 = closure_3;
    if (closure_2_14()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    obj = { isButtonVisible: false, isScreenshotButtonVisible: false, isVisible: false, backgroundOpacity: null, panY: null, isScrollAtTop: true };
    value = new metroRequire.Value(0);
    obj.backgroundOpacity = value;
    value1 = new metroRequire.Value(closure_8.get("screen").height);
    obj.panY = value1;
    tmp3Result.state = obj;
    obj1 = {
      onStartShouldSetPanResponder(arg0, dy) {
            let isScrollAtTop = FeedbackWidgetProvider(867).notWeb();
            if (isScrollAtTop) {
              isScrollAtTop = closure_0.state.isScrollAtTop;
            }
            if (isScrollAtTop) {
              isScrollAtTop = dy.dy > 0;
            }
            return isScrollAtTop;
          },
      onMoveShouldSetPanResponder(arg0, dy) {
            let isScrollAtTop = FeedbackWidgetProvider(867).notWeb();
            if (isScrollAtTop) {
              isScrollAtTop = closure_0.state.isScrollAtTop;
            }
            if (isScrollAtTop) {
              isScrollAtTop = dy.dy > 0;
            }
            return isScrollAtTop;
          },
      onPanResponderMove(arg0, dy) {
            if (dy.dy > 0) {
              const panY = closure_0.state.panY;
              panY.setValue(dy.dy);
            }
          },
      onPanResponderRelease(arg0, dy) {
            if (dy.dy > FeedbackWidgetProvider(1062).PULL_DOWN_CLOSE_THRESHOLD) {
              const obj = { toValue: React6.get("screen").height, duration: FeedbackWidgetProvider(1062).SLIDE_ANIMATION_DURATION, useNativeDriver: true };
              RN.timing(closure_0.state.panY, obj).start(() => {
                closure_1_0._handleClose();
              });
              const timingResult = RN.timing(closure_0.state.panY, obj);
            } else {
              RN.spring(closure_0.state.panY, { toValue: 0, useNativeDriver: true }).start();
              const springResult = RN.spring(closure_0.state.panY, { toValue: 0, useNativeDriver: true });
            }
          }
    };
    tmp3Result._panResponder = closure_11.create(obj1);
    tmp3Result._handleScroll = (nativeEvent) => {
      closure_0.setState({ isScrollAtTop: nativeEvent.nativeEvent.contentOffset.y <= 0 });
    };
    tmp3Result._setVisibilityFunction = (isVisible) => {
      if (isVisible) {
        let obj = { isVisible };
        isVisible.setState(obj);
      } else {
        obj = { toValue: null, duration: null, useNativeDriver: true, easing: null };
        ({ parallel, timing } = RN);
        obj.toValue = closure_1_8.get("screen").height;
        obj.duration = isVisible(1062).SLIDE_ANIMATION_DURATION;
        obj.easing = closure_1_9.out(closure_1_9.quad);
        const items = [timing(isVisible.state.panY, obj), ];
        obj = { toValue: 0, duration: isVisible(1062).BACKGROUND_ANIMATION_DURATION, useNativeDriver, easing: closure_1_9.out(closure_1_9.quad) };
        items[1] = RN.timing(isVisible.state.backgroundOpacity, obj);
        parallel(items).start(() => {
          isVisible.setState({ isVisible });
        });
        const parallelResult = parallel(items);
      }
    };
    tmp3Result._setButtonVisibilityFunction = (isButtonVisible) => {
      closure_0.setState({ isButtonVisible });
    };
    tmp3Result._setScreenshotButtonVisibilityFunction = (isScreenshotButtonVisible) => {
      closure_0.setState({ isScreenshotButtonVisible });
    };
    tmp3Result._handleClose = () => {
      const FeedbackWidgetManager = closure_0(1062).FeedbackWidgetManager;
      FeedbackWidgetManager.hide();
    };
    FeedbackButtonManager = closure_0(closure_1[9]).FeedbackButtonManager;
    initializeResult = FeedbackButtonManager.initialize(tmp3Result._setButtonVisibilityFunction);
    ScreenshotButtonManager = closure_0(closure_1[9]).ScreenshotButtonManager;
    initializeResult1 = ScreenshotButtonManager.initialize(tmp3Result._setScreenshotButtonVisibilityFunction);
    FeedbackWidgetManager = closure_0(closure_1[9]).FeedbackWidgetManager;
    initializeResult2 = FeedbackWidgetManager.initialize(tmp3Result._setVisibilityFunction);
    return tmp3Result;
  }
}
_inherits(FeedbackWidgetProvider, noop.Component);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    this._themeListener = React5.addChangeListener(() => {
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
      const self = this;
      if (!isVisible.isVisible) {
        if (self.state.isVisible) {
          let obj = { toValue: 1, duration: null, useNativeDriver: null, easing: null };
          ({ parallel, timing } = RN);
          obj.duration = FeedbackWidgetProvider(1062).BACKGROUND_ANIMATION_DURATION;
          obj.useNativeDriver = useNativeDriver;
          obj.easing = React7.in(React7.quad);
          const items = [timing(self.state.backgroundOpacity, obj), ];
          obj = { toValue: 0, duration: FeedbackWidgetProvider(1062).SLIDE_ANIMATION_DURATION, useNativeDriver: true, easing: React7.in(React7.quad) };
          items[1] = RN.timing(self.state.panY, obj);
          parallel(items).start(() => {
            const debug = FeedbackWidgetProvider(dependencyMap[10]).debug;
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
      const self = this;
      let obj = FeedbackWidgetProvider(1061);
      if (obj.isModalSupported()) {
        let tmpResult = tmp(1064);
        ({ isButtonVisible, isScreenshotButtonVisible, isVisible, backgroundOpacity } = self.state);
        obj = { inputRange: [0, 1], outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.9)"] };
        const theme = tmpResult.getTheme();
        let obj3 = noop;
        const Fragment = noop.Fragment;
        const children = self.props.children;
        if (isButtonVisible) {
          const _Object = Object;
          tmpResult = tmp(998);
          isButtonVisible = obj3.createElement(tmp(1065).FeedbackButton, Object.assign({}, tmpResult.getFeedbackButtonOptions()));
        }
        if (isScreenshotButtonVisible) {
          const _Object2 = Object;
          isScreenshotButtonVisible = obj3.createElement(tmp(1069).ScreenshotButton, Object.assign({}, tmp(998).getScreenshotButtonOptions()));
          const tmpResult1 = tmp(998);
        }
        let element = isVisible;
        if (isVisible) {
          obj = { style: null };
          const items = [tmp(1067).modalWrapper, ];
          const obj1 = { backgroundColor: interpolateResult };
          items[1] = obj1;
          obj.style = items;
          const obj2 = { visible: isVisible, transparent: true, animationType: "none", onRequestClose: self._handleClose, testID: "feedback-form-modal" };
          obj3 = { style: null };
          ({ createElement, createElement: createElement2 } = obj3);
          obj3.style = tmp(1067).topSpacer;
          const element2 = createElement2(map1, obj3);
          const _Object3 = Object;
          const obj4 = { style: null };
          const items1 = [tmp(1067).modalSheetContainer(theme), ];
          const obj5 = { transform: null };
          const obj6 = { translateY: self.state.panY };
          const items2 = [obj6];
          obj5.transform = items2;
          items1[1] = obj5;
          obj4.style = items1;
          const obj7 = { bounces: false, keyboardShouldPersistTaps: "handled", automaticallyAdjustKeyboardInsets: false, onScroll: self._handleScroll };
          const merged = Object.assign(obj4, self._panResponder.panHandlers);
          ({ createElement: createElement3, createElement: createElement4 } = obj3);
          const _Object4 = Object;
          const tmpResult2 = tmp(1067);
          ({ _handleClose: obj17.onFormClose, _handleClose: obj17.onFormSubmitted } = self);
          element = <RN.View style={null}><closure_1_10 visible={isVisible} transparent animationType="none" onRequestClose={self._handleClose} testID="feedback-form-modal">{element2}<RN.View {......merged}>{createElement3(closure_1_12, obj7, createElement4(tmp(1070).FeedbackWidget, Object.assign({}, tmp(998).getFeedbackOptions(), { onFormClose: null, onFormSubmitted: null })))}</RN.View></closure_1_10></RN.View>;
          const obj8 = { onFormClose: null, onFormSubmitted: null };
          const tmpResult3 = tmp(998);
        }
        return <>{children}{isButtonVisible}{isScreenshotButtonVisible}{element}</>;
      } else {
        const debug = tmp(682).debug;
        debug.error("FeedbackWidget Modal is not supported in React Native < 0.71 with Fabric renderer.");
        return <>{self.props.children}</>;
      }
    }
  }
];

export const FeedbackWidgetProvider = _createClass(FeedbackWidgetProvider, items);