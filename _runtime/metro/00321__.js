// === Module 321: ? ===

// Module 321
import _modDef38 from "module_38" /* 38 */;
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const CellRenderer = fn;
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
_possibleConstructorReturnDefault;
const isValidElement = fn(19).isValidElement;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
class CellRenderer {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = closure_3(this, CellRenderer);
    items1 = [...items];
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(CellRenderer);
    tmp3 = closure_4;
    if (c10()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    obj = { separatorProps: { highlighted: false, leadingItem: tmp3Result.props.item } };
    tmp3Result.state = obj;
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
        onCellLayout(arg0, closure_0.props.cellKey, closure_0.props.index);
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
_inherits(CellRenderer, noop.PureComponent);
const entry = {
  key: "updateSeparatorProps",
  value: function updateSeparatorProps(_cellRefs) {
    closure_0 = _cellRefs;
    this.setState((separatorProps) => {
      let obj = { separatorProps: null };
      obj = {};
      const merged = Object.assign(separatorProps.separatorProps);
      const merged1 = Object.assign(closure_0);
      obj.separatorProps = obj;
      return obj;
    });
  }
};
let items = [
  entry,
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
        let obj = { item, index, separators: self._separators };
        let tmp7 = React6(ListItemComponent, obj);
      } else if (renderItem) {
        obj = { item, index, separators: self._separators };
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
          tmp3 = React6(ItemSeparatorComponent, obj);
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
          obj = { cellKey: props.cellKey, index, item, style: tmp7, onFocusCapture: self._onCellFocusCapture };
          if (onCellLayout) {
            obj = { onLayout: self._onLayout };
            onCellLayout = obj;
          }
          const merged1 = Object.assign(onCellLayout);
          const items3 = [_renderElementResult, tmp2];
          obj.children = items3;
          let tmp10Result = React7(CellRendererComponent, obj);
        } else {
          const obj1 = { style: tmp7, onFocusCapture: self._onCellFocusCapture };
          let tmp12 = onCellLayout;
          if (onCellLayout) {
            const obj2 = { onLayout: self._onLayout };
            tmp12 = obj2;
          }
          const merged2 = Object.assign(tmp12);
          const items4 = [_renderElementResult, tmp2];
          obj1.children = items4;
          tmp10Result = React7(React5, obj1);
        }
        const obj3 = { cellKey: self.props.cellKey, children: tmp10Result };
        return React6(CellRenderer(322).VirtualizedListCellContextProvider, obj3);
      }
    }
  }
];
const entry1 = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(item, separatorProps) {
    let tmp = null;
    if (item.item !== separatorProps.separatorProps.leadingItem) {
      let obj = { separatorProps: null };
      obj = {};
      const merged = Object.assign(separatorProps.separatorProps);
      obj.leadingItem = item.item;
      obj.separatorProps = obj;
      tmp = obj;
    }
    return tmp;
  }
};
let items1 = [entry1];
const row = StyleSheet.create({ row: { flexDirection: "row" }, rowReverse: { flexDirection: "row-reverse" }, columnReverse: { flexDirection: "column-reverse" } });

export default _createClass(CellRenderer, items, items1);