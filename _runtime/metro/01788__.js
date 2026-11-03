// _runtime/metro/01788__.js
import _createClassDefault from "00042__createClass.js";
import CSSAnimationsManagerDefault from "../01789_CSSAnimationsManager.js";
import CSSTransitionsManagerDefault from "../01790_CSSTransitionsManager.js";
import nullifyUndefinedValuesDefault from "../01791_nullifyUndefinedValues.js";
import _modDef1792 from "01792__.js";
import _slicedToArray from "00032__.js";
import _classCallCheck from "00041__classCallCheck.js";

const CSSManager = arg1;
class CSSManager {
  constructor(arg0) {
    ({ shadowNodeWrapper, viewTag, reactViewName } = global);
    if (reactViewName === undefined) {
      reactViewName = "RCTView";
    }
    str = arg1;
    if (arg1 === undefined) {
      str = "";
    }
    tmp = closure_4(this, CSSManager);
    this.cssCallbacksManager = null;
    this.hadTransitionLastUpdate = false;
    this.viewTag = viewTag;
    obj = closure_0(c2[3]);
    compoundComponentName = obj.getCompoundComponentName(reactViewName, str);
    obj2 = closure_0(c2[3]);
    this.propsBuilder = obj2.getPropsBuilder(compoundComponentName);
    tmp3 = new closure_1(c2[4])(shadowNodeWrapper, viewTag, compoundComponentName);
    this.cssAnimationsManager = tmp3;
    tmp4 = new closure_1(c2[5])(shadowNodeWrapper, viewTag);
    this.cssTransitionsManager = tmp4;
    tmp5 = new closure_1(c2[6])(shadowNodeWrapper, viewTag, this.propsBuilder, compoundComponentName);
    this.cssPseudoStylesManager = tmp5;
    return;
  }
}
const entry = {
  key: "update",
  value: function update(arg0) {
    let obj = arg1;
    if (arg1 === undefined) {
      obj = {};
    }
    const self = this;
    const tmp3 = _slicedToArray(CSSManager(1758).filterCSSAndStyleProperties(arg0), 4);
    [tmp4, tmp5] = tmp3;
    let tmp6 = null !== tmp4;
    const cssAnimationsManager = this.cssAnimationsManager;
    const result = cssAnimationsManager.hasAttachedAnimations();
    const obj2 = CSSManager(1758);
    const tmp9 = _slicedToArray(CSSManager(1758).splitCSSCallbacks(obj), 2);
    this.syncCallbacks(tmp9[0], tmp9[1]);
    if (!tmp6) {
      if (!tmp7) {
        const cssTransitionsManager = self.cssTransitionsManager;
        let tmp15 = buildResult;
        if (buildResult) {
          if (!tmp6) {
            tmp6 = result;
          }
          if (!tmp6) {
            let IS_ANDROID = CSSManager(1665).IS_ANDROID;
            if (IS_ANDROID) {
              let tmp16 = tmp7;
              if (!tmp7) {
                tmp16 = tmp13;
              }
              IS_ANDROID = tmp16;
            }
            tmp6 = IS_ANDROID;
          }
          tmp15 = tmp6;
        }
        if (tmp15) {
          CSSManager(1662).setViewStyle(self.viewTag, buildResult);
          const tmpResult = CSSManager(1662);
        }
        const cssAnimationsManager2 = self.cssAnimationsManager;
        cssAnimationsManager2.update(tmp4, tmp11);
        const cssPseudoStylesManager = self.cssPseudoStylesManager;
        cssPseudoStylesManager.update(tmp3[2], tmp5);
        self.hadTransitionLastUpdate = tmp7;
      }
    }
    const propsBuilder = self.propsBuilder;
    buildResult = propsBuilder.build(tmp3[3]);
    const obj3 = CSSManager(1758);
  },
};
const items = [
  entry,
  {
    key: "unmountCleanup",
    value: function unmountCleanup() {
      const self = this;
      if (this.cssCallbacksManager != null) {
        cssCallbacksManager.retire();
      }
      const cssAnimationsManager = self.cssAnimationsManager;
      cssAnimationsManager.unmountCleanup();
      const cssTransitionsManager = self.cssTransitionsManager;
      cssTransitionsManager.unmountCleanup();
      const cssPseudoStylesManager = self.cssPseudoStylesManager;
      cssPseudoStylesManager.unmountCleanup();
    },
  },
  {
    key: "syncCallbacks",
    value: function syncCallbacks(arg0, arg1) {
      const self = this;
      if (!this.cssCallbacksManager) {
        if (!arg0) {
          if (!arg1) {
            return { animationEventMask: 0, transitionEventMask: 0 };
          }
        }
        const tmp5 = new _modDef1792(self.viewTag);
        self.cssCallbacksManager = tmp5;
      }
      const result = self.cssCallbacksManager.syncAnimationCallbacks(arg0);
      const result1 = self.cssCallbacksManager.syncTransitionCallbacks(arg1);
      const obj = {
        animationEventMask: self.cssCallbacksManager.getAnimationEventMask(),
        transitionEventMask: self.cssCallbacksManager.getTransitionEventMask(),
      };
      return obj;
    },
  },
];

export default _createClassDefault(CSSManager, items);
