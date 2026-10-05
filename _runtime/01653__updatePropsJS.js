// === Module 1653: _updatePropsJS ===

// Module 1653 (_updatePropsJS)
import react_native from "react-native" /* 1647 */;
import ReanimatedError from "ReanimatedError" /* 1654 */;
import _mod1655 from "module_1655" /* 1655 */;
import PropsAllowlists from "PropsAllowlists" /* 1656 */;
import _mod1657 from "module_1657" /* 1657 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

global._makeShareableClone = () => {
  const reanimatedError = new ReanimatedError.ReanimatedError("`_makeShareableClone` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleHostFunctionOnJS = () => {
  const reanimatedError = new ReanimatedError.ReanimatedError("`_scheduleOnJS` should never be called from React runtime.");
  throw reanimatedError;
};
global._scheduleOnRuntime = () => {
  const reanimatedError = new ReanimatedError.ReanimatedError("`_scheduleOnRuntime` should never be called from React runtime.");
  throw reanimatedError;
};
function setNativeProps(arg0, arg1, arg2) {

}
function updatePropsDOM(arg0, arg1, arg2) {

}

export const createJSReanimatedModule = _mod1657.createJSReanimatedModule;
export const _updatePropsJS = (arg0, tag, arg2) => {
  let closure_0 = arg0;
  const tmp = tag;
  if (tmp) {
    let animatableRef = tag;
    if (tag.getAnimatableRef) {
      animatableRef = tag.getAnimatableRef();
    }
    const _Object = Object;
    const keys = Object.keys(arg0);
    const items = [{}, {}];
    let num = 1;
    const first = _slicedToArray(keys.reduce((acc, item) => {
      let num = 0;
      if (typeof closure_0[item] === "function") {
        num = 1;
      }
      acc[num][item] = closure_0[item];
      return acc;
    }, items), 1)[0];
    if (typeof animatableRef.setNativeProps === "function") {
      if (typeof setNativeProps === "function") {
        if (arg2) {
          const obj = {};
          for (const key10106 in first) {
            if (!PropsAllowlists.PropsAllowlists.NATIVE_THREAD_PROPS_WHITELIST[key10106]) {
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
        const obj2 = {};
        const tmp28 = animatableRef.previousStyle || {};
        const merged = Object.assign(tmp28);
        const merged1 = Object.assign(first);
        animatableRef.previousStyle = obj2;
        const setNativeProps2 = animatableRef.setNativeProps;
        if (setNativeProps2 != null) {
          const obj3 = { style: obj2 };
          setNativeProps2(obj3);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      if (undefined !== _mod1655.createReactDOMStyle) {
        if (undefined !== animatableRef.style) {
          if (typeof updatePropsDOM === "function") {
            const obj4 = {};
            const tmp11 = animatableRef.previousStyle || {};
            const merged2 = Object.assign(tmp11);
            const merged3 = Object.assign(first);
            animatableRef.previousStyle = obj4;
            const tmp37Result = _mod1655;
            const reactDOMStyle = tmp37Result.createReactDOMStyle(obj4);
            const _Array = Array;
            const tmp19 = Array.isArray(reactDOMStyle.transform) && undefined !== _mod1655.createTransformValue;
            if (tmp19) {
              const tmp37Result3 = _mod1655;
              reactDOMStyle.transform = tmp37Result3.createTransformValue(reactDOMStyle.transform);
            }
            let tmp20 = undefined !== _mod1655.createTextShadowValue;
            if (tmp20) {
              tmp20 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
            }
            if (tmp20) {
              const obj5 = { textShadowColor: null, textShadowOffset: null, textShadowRadius: null };
              ({ textShadowColor: obj6.textShadowColor, textShadowOffset: obj6.textShadowOffset, textShadowRadius: obj6.textShadowRadius } = reactDOMStyle);
              const tmp37Result4 = _mod1655;
              reactDOMStyle.textShadow = tmp37Result4.createTextShadowValue(obj5);
            }
            for (const key10094 in reactDOMStyle) {
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
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      const _Object2 = Object;
      if (Object.keys(animatableRef.props).length > 0) {
        const _Object3 = Object;
        const keys1 = Object.keys(animatableRef.props);
        const item = keys1.forEach((item) => {
          if (first[item]) {
            const _touchableNode = animatableRef._touchableNode;
            const attr = _touchableNode.setAttribute(item.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase()), tmp[item]);
          }
        });
      } else {
        const str = "className";
        let str2 = "";
        if ("className" in animatableRef) {
          let className;
          if (animatableRef != null) {
            className = animatableRef.className;
          }
          str2 = className;
        }
        const logger = react_native.logger;
        const _HermesInternal = HermesInternal;
        logger.warn("It's not possible to manipulate the component " + str2);
      }
    }
  }
};