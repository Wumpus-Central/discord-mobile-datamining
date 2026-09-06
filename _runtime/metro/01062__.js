// _runtime/metro/01062__.js
import c2 from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let ScreenshotButtonManager = arg1;
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
  } catch (err) {}
}
function NOOP_SET_VISIBILITY() {}
class FeedbackManager {
  constructor() {
    tmp = closure_4(this, ScreenshotButtonManager);
    return;
  }
}
ScreenshotButtonManager = FeedbackManager;
let obj = {
  key: "_feedbackComponentName",
  get() {
    const error = new Error("Subclasses must override feedbackComponentName");
    throw error;
  },
};
const items = [
  obj,
  {
    key: "initialize",
    value: function initialize(_setVisibility) {
      this._setVisibility = _setVisibility;
    },
  },
  {
    key: "reset",
    value: function reset() {},
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
        console.warn(
          "[Sentry] " +
            self._feedbackComponentName +
            " requires 'Sentry.wrap(RootComponent)' to be called before 'show" +
            self._feedbackComponentName +
            "()'.",
        );
      }
    },
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
        console.warn(
          "[Sentry] " +
            self._feedbackComponentName +
            " requires 'Sentry.wrap(RootComponent)' before interacting with the widget.",
        );
      }
    },
  },
  {
    key: "isFormVisible",
    value: function isFormVisible() {
      return this._isVisible;
    },
  },
];
const importDefaultResult1Result = _createClass(FeedbackManager, null, items);
importDefaultResult1Result._isVisible = false;
class FeedbackWidgetManager {
  constructor() {
    self = this;
    tmp = closure_4(this, ScreenshotButtonManager);
    tmp2 = closure_3;
    obj = closure_3(ScreenshotButtonManager);
    tmp3 = c2;
    if (hasOwnProperty()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ScreenshotButtonManager = FeedbackWidgetManager;
_inherits(FeedbackWidgetManager, importDefaultResult1Result);
obj = {
  key: "_feedbackComponentName",
  get() {
    return "FeedbackWidget";
  },
};
const items1 = [obj];
const importDefaultResult1Result1 = _createClass(FeedbackWidgetManager, null, items1);
class FeedbackButtonManager {
  constructor() {
    self = this;
    tmp = closure_4(this, ScreenshotButtonManager);
    tmp2 = closure_3;
    obj = closure_3(ScreenshotButtonManager);
    tmp3 = c2;
    if (hasOwnProperty()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
ScreenshotButtonManager = FeedbackButtonManager;
_inherits(FeedbackButtonManager, importDefaultResult1Result);
obj = {
  key: "_feedbackComponentName",
  get() {
    return "FeedbackButton";
  },
};
const items2 = [obj];
const importDefaultResult1Result2 = _createClass(FeedbackButtonManager, null, items2);
class ScreenshotButtonManager {
  constructor() {
    self = this;
    tmp = closure_4(this, ScreenshotButtonManager);
    tmp2 = closure_3;
    obj = closure_3(ScreenshotButtonManager);
    tmp3 = c2;
    if (hasOwnProperty()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      tmp8 = arguments;
      constructResult = Reflect.construct(obj, arguments, tmp2(self).constructor);
    } else {
      tmp4 = arguments;
      tmp5 = arguments;
      constructResult = obj(...arguments);
    }
    return tmp3(self, constructResult);
  }
}
_inherits(ScreenshotButtonManager, importDefaultResult1Result);
const items3 = [
  {
    key: "_feedbackComponentName",
    get() {
      return "ScreenshotButton";
    },
  },
];
const importDefaultResult1Result3 = _createClass(ScreenshotButtonManager, null, items3);

export const PULL_DOWN_CLOSE_THRESHOLD = 200;
export const SLIDE_ANIMATION_DURATION = 200;
export const BACKGROUND_ANIMATION_DURATION = 200;
export const FeedbackWidgetManager = importDefaultResult1Result1;
export const FeedbackButtonManager = importDefaultResult1Result2;
export const ScreenshotButtonManager = importDefaultResult1Result3;
export const showFeedbackButton = () => {
  const result = ScreenshotButtonManager(1063).lazyLoadAutoInjectFeedbackButtonIntegration();
  importDefaultResult1Result2.show();
};
export const hideFeedbackButton = () => {
  importDefaultResult1Result2.hide();
};
export const showFeedbackWidget = () => {
  const result = ScreenshotButtonManager(1063).lazyLoadAutoInjectFeedbackIntegration();
  importDefaultResult1Result1.show();
};
export const showScreenshotButton = () => {
  if (obj.isWeb()) {
    const debug = tmp(682).debug;
    debug.warn("ScreenshotButton is not supported on Web.");
  } else {
    const result = tmp(1063).lazyLoadAutoInjectScreenshotButtonIntegration();
    importDefaultResult1Result3.show();
    const tmpResult = tmp(1063);
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
