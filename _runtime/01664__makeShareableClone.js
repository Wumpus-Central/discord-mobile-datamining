// === Module 1664: _makeShareableClone ===

// Module 1664 (_makeShareableClone)
import t from "t" /* 1665 */;
import closure_2 from "_slicedToArray" /* 32 */;

require = arg1;
global._makeShareableClone = () => {
  const reanimatedError = new t.ReanimatedError("`_makeShareableClone` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleHostFunctionOnJS = () => {
  const reanimatedError = new t.ReanimatedError("`_scheduleOnJS` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleOnRuntime = () => {
  const reanimatedError = new t.ReanimatedError("`_scheduleOnRuntime` should never be called from React runtime.");
  throw reanimatedError;
};
function setNativeProps(arg0, arg1, arg2) {

}
function updatePropsDOM(arg0, arg1, arg2) {

}

export const createJSReanimatedModule = require("module_1668").createJSReanimatedModule;
export const _updatePropsJS = (arg0, getAnimatableRef) => {
  const _require = arg0;
  if (getAnimatableRef) {
    let animatableRef = getAnimatableRef;
    if (getAnimatableRef.getAnimatableRef) {
      animatableRef = getAnimatableRef.getAnimatableRef();
    }
    const _Object = Object;
    const keys = Object.keys(arg0);
    const items = [{}, {}];
    first = first(keys.reduce((arg0, arg1) => {
      let num = 0;
      if (typeof table[arg1] === "function") {
        num = 1;
      }
      arg0[num][arg1] = table[arg1];
      return arg0;
    }, items), 1)[0];
    if (typeof animatableRef.setNativeProps === "function") {
      if (typeof setNativeProps !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (arg2) {
        let obj = {};
        for (const key10106 in first) {
          let tmp41 = key10106;
          let tmp42 = _require;
          let tmp43 = animatableRef;
          if (!_require(animatableRef[4]).PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST[key10106]) {
            continue;
          } else {
            obj[key10106] = first[key10106];
            continue;
          }
          continue;
        }
        setNativeProps = animatableRef.setNativeProps;
        if (setNativeProps != null) {
          setNativeProps(obj);
        }
      }
      const tmp27 = animatableRef.previousStyle || {};
      obj = {};
      const merged = Object.assign(tmp27);
      const merged1 = Object.assign(first);
      animatableRef.previousStyle = obj;
      const setNativeProps2 = animatableRef.setNativeProps;
      if (setNativeProps2 != null) {
        obj1 = { style: null };
        obj1[0] = obj;
        setNativeProps2(obj1);
      }
    } else {
      if (undefined !== _require(animatableRef[2]).createReactDOMStyle) {
        if (undefined !== animatableRef.style) {
          if (typeof updatePropsDOM !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const tmp10 = animatableRef.previousStyle || {};
          const obj2 = {};
          const merged2 = Object.assign(tmp10);
          const merged3 = Object.assign(first);
          animatableRef.previousStyle = obj2;
          let tmp36Result = tmp36(tmp37[2]);
          const reactDOMStyle = tmp36Result.createReactDOMStyle(obj2);
          const _Array = Array;
          if (tmp18) {
            tmp36Result = tmp36(tmp37[2]);
            reactDOMStyle.transform = tmp36Result.createTransformValue(reactDOMStyle.transform);
          }
          let tmp19 = undefined !== tmp36(tmp37[2]).createTextShadowValue;
          if (tmp19) {
            tmp19 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
            const tmp20 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
          }
          if (tmp19) {
            ({ textShadowColor: obj6[0], textShadowOffset: obj6[1], textShadowRadius: obj6[2] } = reactDOMStyle);
            reactDOMStyle.textShadow = tmp36(tmp37[2]).createTextShadowValue({ textShadowColor: null, textShadowOffset: null, textShadowRadius: null });
            const obj3 = { textShadowColor: null, textShadowOffset: null, textShadowRadius: null };
            const tmp36Result1 = tmp36(tmp37[2]);
          }
          for (const key10094 in reactDOMStyle) {
            let tmp39 = key10094;
            if (arg2) {
              if ("INPUT" === animatableRef.nodeName) {
                if ("text" === key10094) {
                  animatableRef.value = reactDOMStyle[key10094];
                  continue;
                }
              }
              let attr = animatableRef.setAttribute(key10094, reactDOMStyle[key10094]);
              continue;
            } else {
              animatableRef.style[key10094] = reactDOMStyle[key10094];
              continue;
            }
            continue;
          }
          tmp18 = Array.isArray(reactDOMStyle.transform) && undefined !== tmp36(tmp37[2]).createTransformValue;
        }
      }
      const _Object2 = Object;
      if (Object.keys(animatableRef.props).length > 0) {
        const _Object3 = Object;
        const keys1 = Object.keys(animatableRef.props);
        const item = keys1.forEach((str) => {
          if (first[str]) {
            const _touchableNode = animatableRef._touchableNode;
            const attr = _touchableNode.setAttribute(str.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase()), tmp[str]);
          }
        });
      } else {
        let str2 = "";
        if ("className" in animatableRef) {
          let className;
          if (animatableRef != null) {
            className = animatableRef.className;
          }
          str2 = className;
        }
        const logger = tmp36(tmp37[3]).logger;
        const _HermesInternal = HermesInternal;
        logger.warn("It's not possible to manipulate the component " + str2);
      }
    }
  }
};