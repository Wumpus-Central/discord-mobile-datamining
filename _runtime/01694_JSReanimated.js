// === Module 1694: JSReanimated ===

// Module 1694 (JSReanimated)
import _mod1665 from "module_1665" /* 1665 */;
import _mod1695 from "module_1695" /* 1695 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
function setNativeProps(arg0, arg1, arg2) {

}
function updatePropsDOM(arg0, arg1, arg2) {

}

export const createJSReanimatedModule = fn(1696).createJSReanimatedModule;
export (arg0, getAnimatableRef, arg2) => {
  dependencyMap = arg0;
  if (getAnimatableRef) {
    let animatableRef = getAnimatableRef;
    if (getAnimatableRef.getAnimatableRef) {
      animatableRef = getAnimatableRef.getAnimatableRef();
    }
    const _Object = Object;
    const keys = Object.keys(arg0);
    items = [{}, {}];
    const first = _slicedToArray(keys.reduce((acc, item) => {
      let num = 0;
      if (typeof dependencyMap[item] === "function") {
        num = 1;
      }
      acc[num][item] = dependencyMap[item];
      return acc;
    }, items), 1)[0];
    if (typeof animatableRef.setNativeProps === "function") {
      if (typeof setNativeProps === "function") {
        if (arg2) {
          setNativeProps = animatableRef.setNativeProps;
          if (setNativeProps != null) {
            setNativeProps(first);
          }
        }
        const tmp26 = animatableRef.previousStyle || {};
        const obj = {};
        const merged = Object.assign(tmp26);
        const merged1 = Object.assign(first);
        animatableRef.previousStyle = obj;
        const setNativeProps2 = animatableRef.setNativeProps;
        if (setNativeProps2 != null) {
          const obj2 = { style: obj };
          setNativeProps2(obj2);
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      if (undefined !== _mod1695.createReactDOMStyle) {
        if (undefined !== animatableRef.style) {
          if (typeof updatePropsDOM === "function") {
            const tmp10 = animatableRef.previousStyle || {};
            const obj3 = {};
            const merged2 = Object.assign(tmp10);
            const merged3 = Object.assign(first);
            animatableRef.previousStyle = obj3;
            const reactDOMStyle = _mod1695.createReactDOMStyle(obj3);
            const _Array = Array;
            const tmp35Result = _mod1695;
            if (tmp18) {
              reactDOMStyle.transform = _mod1695.createTransformValue(reactDOMStyle.transform);
              const tmp35Result3 = _mod1695;
            }
            let tmp19 = undefined !== _mod1695.createTextShadowValue;
            if (tmp19) {
              tmp19 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
              const tmp20 = reactDOMStyle.textShadowColor || reactDOMStyle.textShadowRadius || reactDOMStyle.textShadowOffset;
            }
            if (tmp19) {
              ({ textShadowColor: obj6.textShadowColor, textShadowOffset: obj6.textShadowOffset, textShadowRadius: obj6.textShadowRadius } = reactDOMStyle);
              reactDOMStyle.textShadow = _mod1695.createTextShadowValue({ textShadowColor: null, textShadowOffset: null, textShadowRadius: null });
              const obj4 = { textShadowColor: null, textShadowOffset: null, textShadowRadius: null };
              const tmp35Result4 = _mod1695;
            }
            for (const key10095 in reactDOMStyle) {
              if (arg2) {
                if ("INPUT" === animatableRef.nodeName) {
                  if ("text" === key10095) {
                    animatableRef.value = reactDOMStyle[key10095];
                    continue;
                  }
                }
                let attr = animatableRef.setAttribute(key10095, reactDOMStyle[key10095]);
                continue;
              } else {
                animatableRef.style[key10095] = reactDOMStyle[key10095];
                continue;
              }
              continue;
            }
            tmp18 = Array.isArray(reactDOMStyle.transform) && undefined !== _mod1695.createTransformValue;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
      if (animatableRef.props) {
        const _Object2 = Object;
        if (Object.keys(animatableRef.props).length > 0) {
          const _Object3 = Object;
          const keys1 = Object.keys(animatableRef.props);
          const item = keys1.forEach((item) => {
            if (item in first) {
              const _touchableNode = animatableRef._touchableNode;
              const attr = _touchableNode.setAttribute(item.replace(/[A-Z]/g, (str) => "-" + str.toLowerCase()), tmp[item]);
            }
          });
        }
      }
      let str2 = "";
      if ("className" in animatableRef) {
        let className;
        if (animatableRef != null) {
          className = animatableRef.className;
        }
        str2 = className;
      }
      const logger = _mod1665.logger;
      const _HermesInternal = HermesInternal;
      logger.warn("It's not possible to manipulate the component " + str2);
    }
  }
}