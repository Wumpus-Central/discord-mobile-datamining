// === Module 321: _isNativeReflectConstruct ===

// Module 321 (_isNativeReflectConstruct)
import _modDef38 from "module_38" /* 38 */;
import closure_3 from "_classCallCheck" /* 41 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import { isValidElement } from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const CellRenderer = arg1;
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
  } catch (err) {
  }
}
({ StyleSheet, View: error } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
class CellRenderer {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, closure_0);
    items1 = [...items];
    tmp2 = closure_5;
    obj = closure_5(closure_0);
    tmp3 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    obj = { highlighted: false, leadingItem: tmp3Result.props.item };
    tmp3Result.state = { separatorProps: obj };
    tmp3Result._separators = {
      highlight() {
            ({ props, props: props2 } = closure_0);
            const items = [, ];
            ({ cellKey: arr[0], prevCellKey: arr[1] } = props);
            props2.onUpdateSeparators(items, { highlighted: true });
          },
      unhighlight() {
            ({ props, props: props2 } = closure_0);
            const items = [, ];
            ({ cellKey: arr[0], prevCellKey: arr[1] } = props);
            props2.onUpdateSeparators(items, { highlighted: false });
          },
      updateProps(arg0, arg1) {
            const props = closure_0.props;
            let prevCellKey = props.cellKey;
            const props2 = closure_0.props;
            if ("leading" === arg0) {
              prevCellKey = props.prevCellKey;
            }
            const items = [prevCellKey];
            props2.onUpdateSeparators(items, arg1);
          }
    };
    tmp3Result._onLayout = (arg0) => {
      const props = closure_0.props;
      const onCellLayout = props.onCellLayout;
      if (onCellLayout != null) {
        onCellLayout(arg0, tmp.props.cellKey, tmp.props.index);
      }
    };
    tmp3Result._onCellFocusCapture = (arg0) => {
      const props = closure_0.props;
      const onCellFocusCapture = props.onCellFocusCapture;
      if (onCellFocusCapture != null) {
        onCellFocusCapture(closure_0.props.cellKey);
      }
    };
    return tmp3Result;
  }
}
importDefaultResult1(CellRenderer, importAllResult.PureComponent);
let obj = {
  key: "updateSeparatorProps",
  value: function updateSeparatorProps(closure_0) {
    this.setState((separatorProps) => {
      let obj = { separatorProps: null };
      obj = {};
      const merged = Object.assign(separatorProps.separatorProps);
      const merged1 = Object.assign(closure_0);
      obj[0] = obj;
      return obj;
    });
  }
};
let items = [
  obj,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const props = this.props;
      props.onUnmount(this.props.cellKey);
    }
  },
  {
    key: "_renderElement",
    value: function _renderElement(renderItem, ListItemComponent, item, index) {
      let tmp = renderItem;
      if (renderItem) {
        tmp = ListItemComponent;
      }
      if (tmp) {
        const _console = console;
        console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.");
      }
      const self = this;
      if (ListItemComponent) {
        let obj = { item: null, index: null, separators: null };
        obj[0] = item;
        obj[1] = index;
        obj[2] = self._separators;
        let tmp7 = callback3(ListItemComponent, obj);
      } else if (renderItem) {
        obj = { item: null, index: null, separators: null };
        obj[0] = item;
        obj[1] = index;
        obj[2] = self._separators;
        tmp7 = renderItem(obj);
      } else {
        _modDef38(false, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
      }
      return tmp7;
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ CellRendererComponent, ItemSeparatorComponent, horizontal, item, index, inversionStyle, onCellLayout } = props);
      const _renderElementResult = this._renderElement(props.renderItem, props.ListItemComponent, item, index);
      let tmp2 = ItemSeparatorComponent;
      if (!isValidElement(ItemSeparatorComponent)) {
        let tmp3 = ItemSeparatorComponent;
        if (ItemSeparatorComponent) {
          let obj = {};
          const merged = Object.assign(self.state.separatorProps);
          tmp3 = callback3(ItemSeparatorComponent, obj);
        }
        tmp2 = tmp3;
      }
      if (inversionStyle) {
        let items = row;
        if (horizontal) {
          items = [, ];
          items[0] = items.rowReverse;
          items[1] = inversionStyle;
          let items1 = items;
        } else {
          items1 = [items.columnReverse, inversionStyle];
        }
      } else {
        let tmp7 = inversionStyle;
        if (horizontal) {
          const items2 = [row.row, inversionStyle];
          tmp7 = items2;
        }
        if (CellRendererComponent) {
          obj = { cellKey: null, index: null, item: null, style: null, onFocusCapture: null };
          obj[0] = props.cellKey;
          obj[1] = index;
          obj[2] = item;
          obj[3] = tmp7;
          obj[4] = self._onCellFocusCapture;
          if (onCellLayout) {
            obj = { onLayout: null };
            obj[0] = self._onLayout;
            onCellLayout = obj;
          }
          const merged1 = Object.assign(onCellLayout);
          const items3 = [_renderElementResult, tmp2];
          obj.children = items3;
          let tmp10Result = tmp10(CellRendererComponent, obj);
        } else {
          obj1 = { style: null, onFocusCapture: null };
          obj1[0] = tmp7;
          obj1[1] = self._onCellFocusCapture;
          let tmp12 = onCellLayout;
          if (onCellLayout) {
            const obj2 = { onLayout: null };
            obj2[0] = self._onLayout;
            tmp12 = obj2;
          }
          const merged2 = Object.assign(tmp12);
          const items4 = [_renderElementResult, tmp2];
          obj1.children = items4;
          tmp10Result = tmp10(closure_7, obj1);
          const tmp11 = closure_7;
        }
        const obj3 = { cellKey: null, children: null };
        obj3[0] = self.props.cellKey;
        obj3[1] = tmp10Result;
        return callback3(CellRenderer(322).VirtualizedListCellContextProvider, obj3);
      }
    }
  }
];
obj = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(item, separatorProps) {
    let tmp = null;
    if (item.item !== separatorProps.separatorProps.leadingItem) {
      let obj = { separatorProps: null };
      obj = {};
      const merged = Object.assign(separatorProps.separatorProps);
      obj.leadingItem = item.item;
      obj[0] = obj;
      tmp = obj;
    }
    return tmp;
  }
};
let items1 = [obj];
const styles = StyleSheet.create({ row: { flexDirection: "row" }, rowReverse: { flexDirection: "row-reverse" }, columnReverse: { flexDirection: "column-reverse" } });

export default importDefaultResult(CellRenderer, items, items1);