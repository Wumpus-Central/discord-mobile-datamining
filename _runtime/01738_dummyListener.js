// _runtime/01738_dummyListener.js
import _classCallCheck from "_classCallCheck";

let PropsFilter = arg1;
function dummyListener() {

}
class PropsFilter {
  constructor() {
    tmp = dummyListener(this, PropsFilter);
    map = new Map();
    this._initialPropsMap = map;
    return;
  }
}
const items = [
  {
    key: "filterNonAnimatedProps",
    value: function filterNonAnimatedProps(props) {
      let PropsFilter = props;
      let self = this;
      props = props.props;
      let obj = {};
      for (const key10014 in props) {
        let tmp6 = key10014;
        let iter = props[key10014];
        PropsFilter = iter;
        if ("style" === key10014) {
          let style = props.style;
          let tmp4 = PropsFilter;
          let tmp5 = self;
          let obj4 = PropsFilter(self[2]);
          if (style == null) {
            style = [];
          }
          let flattenArrayResult = obj4.flattenArray(style);
          obj[key10014] = flattenArrayResult.map((viewDescriptors) => {
            if (viewDescriptors) {
              if (viewDescriptors.viewDescriptors) {
                if (props._isFirstRender) {
                  const _initialPropsMap = self._initialPropsMap;
                  let obj = {};
                  const merged = Object.assign(viewDescriptors.initial.value);
                  const merged1 = Object.assign(props(self[3]).initialUpdaterRun(viewDescriptors.initial.updater));
                  const result = _initialPropsMap.set(viewDescriptors, obj);
                  const obj4 = props(self[3]);
                }
                const _initialPropsMap2 = self._initialPropsMap;
                obj = _initialPropsMap2.get(viewDescriptors);
                if (obj == null) {
                  obj = {};
                }
                return obj;
              }
            }
            obj = props(self[4]);
            let inlineStyle = viewDescriptors;
            if (obj.hasInlineStyles(viewDescriptors)) {
              inlineStyle = props(self[4]).getInlineStyle(viewDescriptors, props._isFirstRender);
              const obj2 = props(self[4]);
            }
            return inlineStyle;
          });
          continue;
        } else {
          if ("animatedProps" === key10014) {
            let animatedProps = props.animatedProps;
            self = animatedProps;
            if (undefined === animatedProps.initial) {
              continue;
            } else {
              let _Object = Object;
              let keys = Object.keys(animatedProps.initial.value);
              let item = keys.forEach((arg0) => {
                let tmp2;
                if (self.initial != null) {
                  tmp2 = iter.value[arg0];
                }
                obj[arg0] = tmp2;
              });
              continue;
            }
            continue;
          } else {
            let tmp7 = PropsFilter;
            let tmp8 = self;
            let obj5 = PropsFilter(self[2]);
            if (obj5.has("workletEventHandler", iter)) {
              if (iter.workletEventHandler instanceof tmp7(tmp8[5]).WorkletEventHandler) {
                if (iter.workletEventHandler.eventNames.length > 0) {
                  let eventNames = iter.workletEventHandler.eventNames;
                  let item1 = eventNames.forEach((arg0) => {
                    const obj = PropsFilter(1731);
                    if (obj.has("listeners", props.workletEventHandler)) {
                      let tmp3 = props.workletEventHandler.listeners[arg0];
                    } else {
                      tmp3 = dummyListener;
                    }
                    obj[arg0] = tmp3;
                  });
                  continue;
                } else {
                  let tmp2 = dummyListener;
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
  }
];

export const PropsFilter = require("_createClass")(PropsFilter, items);