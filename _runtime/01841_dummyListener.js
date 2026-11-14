// _runtime/01841_dummyListener.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

const PropsFilter = arg1;
function dummyListener() {}
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
    const self = this;
    props = props.props;
    let obj = {};
    c3 = false;
    for (const key10013 in props) {
      iter = props[key10013];
      if ("style" === key10013) {
        let style = props.style;
        let obj4 = iter(self[2]);
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = obj4.flattenArray(style);
        obj[key10013] = flattenArrayResult.map((viewDescriptors) => {
          viewDescriptors = undefined;
          if (viewDescriptors != null) {
            viewDescriptors = viewDescriptors.viewDescriptors;
          }
          if (viewDescriptors) {
            if (iter._isFirstRender) {
              const _initialPropsMap = self._initialPropsMap;
              const obj3 = {};
              const merged = Object.assign(viewDescriptors.initial.value);
              const merged1 = Object.assign(PropsFilter(1842).initialUpdaterRun(viewDescriptors.initial.updater));
              const result = _initialPropsMap.set(viewDescriptors, obj3);
              const obj4 = PropsFilter(1842);
            }
            const _initialPropsMap2 = self._initialPropsMap;
            let obj5 = _initialPropsMap2.get(viewDescriptors);
            if (obj5 == null) {
              obj5 = {};
            }
            return obj5;
          } else {
            let inlineStyle = viewDescriptors;
            if (obj.hasInlineStyles(viewDescriptors)) {
              inlineStyle = PropsFilter(1827).getInlineStyle(viewDescriptors, iter._isFirstRender);
              const obj2 = PropsFilter(1827);
            }
            return inlineStyle;
          }
        });
        continue;
      } else {
        if ("animatedProps" === key10013) {
          continue;
        } else {
          let tmp = iter;
          let tmp2 = self;
          let obj2 = iter(self[2]);
          if (obj2.has("workletEventHandler", iter)) {
            if (iter.workletEventHandler instanceof tmp(tmp2[5]).WorkletEventHandler) {
              if (iter.workletEventHandler.eventNames.length > 0) {
                let eventNames = iter.workletEventHandler.eventNames;
                let item = eventNames.forEach((item) => {
                  if (obj.has("listeners", iter.workletEventHandler)) {
                    let tmp3 = iter.workletEventHandler.listeners[item];
                  } else {
                    tmp3 = c3;
                  }
                  _classCallCheck[item] = tmp3;
                  obj = iter(_self[2]);
                });
                continue;
              } else {
                obj[key10013] = c3;
                continue;
              }
              continue;
            }
          }
          let tmpResult = tmp(tmp2[6]);
          if (tmpResult.isSharedValue(iter)) {
            if (!arg0._isFirstRender) {
              continue;
            } else {
              obj[key10013] = iter.value;
              continue;
            }
            continue;
          } else {
            obj[key10013] = iter;
            continue;
          }
          continue;
        }
        continue;
      }
      continue;
    }
    const animatedProps = props.animatedProps;
    if (animatedProps) {
      let obj5 = iter(self[2]);
      const item1 = iter(self[2])
        .flattenArray(animatedProps)
        .forEach((viewDescriptors) => {
          if (viewDescriptors) {
            if (viewDescriptors.viewDescriptors) {
              if (viewDescriptors.initial) {
                value = viewDescriptors.initial.value;
                for (const key10021 in value) {
                  obj[key10021] = value[key10021];
                  continue;
                }
              }
            }
            for (const key10007 in arg0) {
              let obj2 = PropsFilter(1761);
              if (obj2.isCSSConfigProp(key10007)) {
                continue;
              } else {
                let tmp2 = arg0[key10007];
                let tmp7Result = PropsFilter(1761);
                if (tmp7Result.isPseudoSelectorValue(tmp2)) {
                  c3 = true;
                  if (undefined === tmp2.default) {
                    continue;
                  } else {
                    obj[key10007] = tmp2.default;
                    continue;
                  }
                  continue;
                } else {
                  obj[key10007] = tmp2;
                  continue;
                }
                continue;
              }
              continue;
            }
          }
        });
      const flattenArrayResult1 = iter(self[2]).flattenArray(animatedProps);
    }
    if (tmp12) {
      obj.onStartShouldSetResponder = iter(self[8]).svgHitTestResponder;
    }
    return obj;
  },
};
const items = [entry];

export const PropsFilter = _createClassDefault(PropsFilter, items);
