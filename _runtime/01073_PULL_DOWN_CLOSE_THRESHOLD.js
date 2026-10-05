// === Module 1073: PULL_DOWN_CLOSE_THRESHOLD ===

// Module 1073 (PULL_DOWN_CLOSE_THRESHOLD)
import _mod693 from "module_693" /* 693 */;
import _mod878 from "module_878" /* 878 */;
import lazyLoadFeedbackIntegration from "lazyLoadFeedbackIntegration" /* 1074 */;
import c2 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;

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
function NOOP_SET_VISIBILITY() {

}
class FeedbackManager {
  constructor() {
    _classCallCheck(this, FeedbackManager);
  }
}
let obj = {
  key: "_feedbackComponentName",
  get() {
    const error = new Error("Subclasses must override feedbackComponentName");
    throw error;
  }
};
const items = [
  obj,
  {
    key: "initialize",
    value: function initialize(_setVisibility) {
      this._setVisibility = _setVisibility;
    }
  },
  {
    key: "reset",
    value: function reset() {

    }
  },
  {
    key: "show",
    value: function show() {
      const self = this;
      if (this._setVisibility !== NOOP_SET_VISIBILITY) {
        self._isVisible = true;
        self._setVisibility(true);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("[Sentry] " + self._feedbackComponentName + " requires 'Sentry.wrap(RootComponent)' to be called before 'show" + self._feedbackComponentName + "()'.");
      }
    }
  },
  {
    key: "hide",
    value: function hide() {
      const self = this;
      if (this._setVisibility !== NOOP_SET_VISIBILITY) {
        self._isVisible = false;
        self._setVisibility(false);
      } else {
        const _console = console;
        const _HermesInternal = HermesInternal;
        console.warn("[Sentry] " + self._feedbackComponentName + " requires 'Sentry.wrap(RootComponent)' before interacting with the widget.");
      }
    }
  },
  {
    key: "isFormVisible",
    value: function isFormVisible() {
      return this._isVisible;
    }
  }
];
const importDefaultResult1Result = _createClass(FeedbackManager, null, items);
importDefaultResult1Result._isVisible = false;
class FeedbackWidgetManager {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeedbackWidgetManager);
    const obj = _getPrototypeOf(FeedbackWidgetManager);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c2(self, constructResult);
  }
}
_inherits(FeedbackWidgetManager, importDefaultResult1Result);
const items1 = [];
const obj2 = {
  key: "_feedbackComponentName",
  get() {
    return "FeedbackWidget";
  }
};
items1[0] = obj2;
const importDefaultResult1Result1 = _createClass(FeedbackWidgetManager, null, items1);
class FeedbackButtonManager {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, FeedbackButtonManager);
    const obj = _getPrototypeOf(FeedbackButtonManager);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c2(self, constructResult);
  }
}
_inherits(FeedbackButtonManager, importDefaultResult1Result);
const items2 = [];
const obj3 = {
  key: "_feedbackComponentName",
  get() {
    return "FeedbackButton";
  }
};
items2[0] = obj3;
const importDefaultResult1Result2 = _createClass(FeedbackButtonManager, null, items2);
class ScreenshotButtonManager {
  constructor() {
    let constructResult;
    const self = this;
    _classCallCheck(this, ScreenshotButtonManager);
    const obj = _getPrototypeOf(ScreenshotButtonManager);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, arguments, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj(...arguments);
    }
    return c2(self, constructResult);
  }
}
_inherits(ScreenshotButtonManager, importDefaultResult1Result);
const items3 = [];
const obj4 = {
  key: "_feedbackComponentName",
  get() {
    return "ScreenshotButton";
  }
};
items3[0] = obj4;
const importDefaultResult1Result3 = _createClass(ScreenshotButtonManager, null, items3);
const FeedbackWidgetManager_export = importDefaultResult1Result1;
const FeedbackButtonManager_export = importDefaultResult1Result2;
const ScreenshotButtonManager_export = importDefaultResult1Result3;

export const PULL_DOWN_CLOSE_THRESHOLD = 200;
export const SLIDE_ANIMATION_DURATION = 200;
export const BACKGROUND_ANIMATION_DURATION = 200;
export { FeedbackWidgetManager_export as FeedbackWidgetManager };
export { FeedbackButtonManager_export as FeedbackButtonManager };
export { ScreenshotButtonManager_export as ScreenshotButtonManager };
export const showFeedbackButton = () => {
  const obj = lazyLoadFeedbackIntegration;
  const result = obj.lazyLoadAutoInjectFeedbackButtonIntegration();
  importDefaultResult1Result2.show();
};
export const hideFeedbackButton = () => {
  importDefaultResult1Result2.hide();
};
export const showFeedbackWidget = () => {
  const obj = lazyLoadFeedbackIntegration;
  const result = obj.lazyLoadAutoInjectFeedbackIntegration();
  importDefaultResult1Result1.show();
};
export const showScreenshotButton = () => {
  const obj = _mod878;
  if (obj.isWeb()) {
    const debug = _mod693.debug;
    debug.warn("ScreenshotButton is not supported on Web.");
  } else {
    const tmpResult = lazyLoadFeedbackIntegration;
    const result = tmpResult.lazyLoadAutoInjectScreenshotButtonIntegration();
    importDefaultResult1Result3.show();
  }
};
export const hideScreenshotButton = () => {
  importDefaultResult1Result3.hide();
};
export const resetFeedbackButtonManager = () => {
  importDefaultResult1Result2.reset();
};
export const resetFeedbackWidgetManager = () => {
  importDefaultResult1Result1.reset();
};
export const resetScreenshotButtonManager = () => {
  importDefaultResult1Result3.reset();
};