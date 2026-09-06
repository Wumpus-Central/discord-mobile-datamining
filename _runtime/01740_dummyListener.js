// === Module 1740: dummyListener ===

// Module 1740 (dummyListener)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const PropsFilter = arg1;
function dummyListener() {

}
class PropsFilter {
  constructor() {
    tmp = c2(this, PropsFilter);
    map = new Map();
    this._initialPropsMap = map;
    return;
  }
}
const entry = {
  key: "filterNonAnimatedProps",
  value: function filterNonAnimatedProps(props) {
    let iter = props;
    let animatedProps = this;
    props = props.props;
    let obj = {};
    for (const key10014 in props) {
      iter = props[key10014];
      if ("style" === key10014) {
        let style = props.style;
        let obj4 = iter(animatedProps[2]);
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = obj4.flattenArray(style);
        obj[key10014] = flattenArrayResult.map((viewDescriptors) => {
          if (viewDescriptors) {
            if (viewDescriptors.viewDescriptors) {
              if (iter._isFirstRender) {
                const _initialPropsMap = animatedProps._initialPropsMap;
                obj = {};
                const merged = Object.assign(viewDescriptors.initial.value);
                const merged1 = Object.assign(PropsFilter(1708).initialUpdaterRun(viewDescriptors.initial.updater));
                const result = _initialPropsMap.set(viewDescriptors, obj);
                const obj4 = PropsFilter(1708);
              }
              const _initialPropsMap2 = animatedProps._initialPropsMap;
              obj = _initialPropsMap2.get(viewDescriptors);
              if (obj == null) {
                obj = {};
              }
              return obj;
            }
          }
          obj = PropsFilter(1732);
          let inlineStyle = viewDescriptors;
          if (obj.hasInlineStyles(viewDescriptors)) {
            inlineStyle = PropsFilter(1732).getInlineStyle(viewDescriptors, iter._isFirstRender);
            const obj2 = PropsFilter(1732);
          }
          return inlineStyle;
        });
        continue;
      } else {
        if ("animatedProps" === key10014) {
          animatedProps = props.animatedProps;
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
              _classCallCheck[item] = tmp2;
            });
            continue;
          }
          continue;
        } else {
          let tmp7 = iter;
          let tmp8 = animatedProps;
          let obj5 = iter(animatedProps[2]);
          if (obj5.has("workletEventHandler", iter)) {
            if (iter.workletEventHandler instanceof tmp7(tmp8[5]).WorkletEventHandler) {
              if (iter.workletEventHandler.eventNames.length > 0) {
                let eventNames = iter.workletEventHandler.eventNames;
                let item1 = eventNames.forEach((item) => {
                  if (obj.has("listeners", iter.workletEventHandler)) {
                    let tmp3 = iter.workletEventHandler.listeners[item];
                  } else {
                    tmp3 = c3;
                  }
                  _classCallCheck[item] = tmp3;
                  obj = iter(animatedProps[2]);
                });
                continue;
              } else {
                obj[key10014] = dummyListener;
                continue;
              }
              continue;
            }
          }
          let tmp7Result = tmp7(tmp8[6]);
          if (tmp7Result.isSharedValue(iter)) {
            if (!arg0._isFirstRender) {
              continue;
            } else {
              obj[key10014] = iter.value;
              continue;
            }
            continue;
          } else {
            let isChromeDebuggerResult = "onGestureHandlerStateChange" === key10014;
            if (isChromeDebuggerResult) {
              tmp7Result = tmp7(tmp8[7]);
              isChromeDebuggerResult = tmp7Result.isChromeDebugger();
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

export const PropsFilter = _createClassDefault(PropsFilter, items);