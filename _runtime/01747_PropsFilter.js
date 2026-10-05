// === Module 1747: PropsFilter ===

// Module 1747 (PropsFilter)
import _createClassDefault from "_createClass" /* 42 */;
import _mod1715 from "module_1715" /* 1715 */;
import _mod1739 from "module_1739" /* 1739 */;
import flattenArray2 from "flattenArray" /* 1740 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const require = globalThis.__r;
let _require, set;

function dummyListener() {

}
class PropsFilter {
  constructor() {
    _classCallCheck(this, PropsFilter);
    this._initialPropsMap = new Map();
    new Map();
  }
}
const entry = {
  key: "filterNonAnimatedProps",
  value: function filterNonAnimatedProps(props) {
    _require = props;
    const self = this;
    props = props.props;
    let obj = {};
    for (const key10014 in props) {
      let iter = props[key10014];
      if ("style" === key10014) {
        let style = props.style;
        let tmp6 = require("flattenArray");
        let flattenArray = tmp6.flattenArray;
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = flattenArray(style);
        obj[key10014] = flattenArrayResult.map((viewDescriptors) => {
          const tmp = viewDescriptors;
          if (tmp) {
            if (viewDescriptors.viewDescriptors) {
              if (props._isFirstRender) {
                const _initialPropsMap = self._initialPropsMap;
                const obj3 = {};
                set = _initialPropsMap.set;
                const merged = Object.assign(viewDescriptors.initial.value);
                const obj4 = _mod1715;
                const merged1 = Object.assign(obj4.initialUpdaterRun(viewDescriptors.initial.updater));
                const result = set(viewDescriptors, obj3);
              }
              const _initialPropsMap2 = self._initialPropsMap;
              let obj5 = _initialPropsMap2.get(viewDescriptors);
              if (obj5 == null) {
                obj5 = {};
              }
              return obj5;
            }
          }
          let inlineStyle = viewDescriptors;
          obj = _mod1739;
          if (obj.hasInlineStyles(viewDescriptors)) {
            const obj2 = _mod1739;
            inlineStyle = obj2.getInlineStyle(viewDescriptors, props._isFirstRender);
          }
          return inlineStyle;
        });
        continue;
      } else {
        if ("animatedProps" === key10014) {
          let animatedProps = props.animatedProps;
          if (undefined === animatedProps.initial) {
            continue;
          } else {
            let _Object = Object;
            let keys = Object.keys(animatedProps.initial.value);
            let item = keys.forEach((item) => {
              let tmp2;
              if (animatedProps.initial != null) {
                tmp2 = iter.value[item];
              }
              obj[item] = tmp2;
            });
            continue;
          }
          continue;
        } else {
          let tmp8 = _require;
          let tmp9 = self;
          let obj4 = require("flattenArray");
          if (obj4.has("workletEventHandler", iter)) {
            if (iter.workletEventHandler instanceof tmp8(tmp9[5]).WorkletEventHandler) {
              if (iter.workletEventHandler.eventNames.length > 0) {
                let eventNames = iter.workletEventHandler.eventNames;
                let item1 = eventNames.forEach((item) => {
                  let tmp3;
                  const tmp = obj;
                  obj = flattenArray2;
                  if (obj.has("listeners", iter.workletEventHandler)) {
                    tmp3 = iter.workletEventHandler.listeners[item];
                  } else {
                    tmp3 = dummyListener;
                  }
                  tmp[item] = tmp3;
                });
                continue;
              } else {
                obj[key10014] = dummyListener;
                continue;
              }
              continue;
            }
          }
          let tmp8Result = tmp8(tmp9[6]);
          if (tmp8Result.isSharedValue(iter)) {
            if (!props._isFirstRender) {
              continue;
            } else {
              obj[key10014] = iter.value;
              continue;
            }
            continue;
          } else {
            let isChromeDebuggerResult = "onGestureHandlerStateChange" === key10014;
            if (isChromeDebuggerResult) {
              let tmp8Result2 = tmp8(tmp9[7]);
              isChromeDebuggerResult = tmp8Result2.isChromeDebugger();
            }
            if (isChromeDebuggerResult) {
              continue;
            } else {
              obj[key10014] = iter;
              continue;
            }
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    return obj;
  }
};
const items = [entry];
const PropsFilter_export = _createClassDefault(PropsFilter, items);

export { PropsFilter_export as PropsFilter };