// _runtime/metro/00321__.js
import react2 from "../00019_react.js";
import _modDef38 from "00038__.js";
import _mod322 from "00322__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react_native from "../00017_react-native.js";
import Fragment from "../react/00021_Fragment.js";

const react = react2;

let StyleSheet;
let c9;
let metroImportAll;
let metroImportDefault;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
const isValidElement = react2.isValidElement;
({ StyleSheet, View: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
class CellRenderer {
  constructor() {
    let constructResult;
    const self = this;
    let items = [...arguments];
    let closure_0;
    _classCallCheck(this, CellRenderer);
    const items1 = [...items];
    const obj = _getPrototypeOf(CellRenderer);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = _possibleConstructorReturn(self, constructResult);
    closure_0 = tmp3Result;
    const obj2 = { separatorProps: { highlighted: false, leadingItem: tmp3Result.props.item } };
    tmp3Result.state = obj2;
    tmp3Result._separators = {
      highlight() {
        let props;
        let props2;
        ({ props, props: props2 } = closure_0);
        const items = [,];
        ({ cellKey: arr[0], prevCellKey: arr[1] } = props);
        props2.onUpdateSeparators(items, { highlighted: true });
      },
      unhighlight() {
        let props;
        let props2;
        ({ props, props: props2 } = closure_0);
        const items = [,];
        ({ cellKey: arr[0], prevCellKey: arr[1] } = props);
        props2.onUpdateSeparators(items, { highlighted: false });
      },
      updateProps(arg0, arg1) {
        const props = closure_0.props;
        let prevCellKey = props.cellKey;
        const props2 = closure_0.props;
        const onUpdateSeparators = props2.onUpdateSeparators;
        if ("leading" === arg0) {
          prevCellKey = props.prevCellKey;
        }
        const items = [prevCellKey];
        onUpdateSeparators(items, arg1);
      },
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
_inherits(CellRenderer, react.PureComponent);
const entry = {
  key: "updateSeparatorProps",
  value: function updateSeparatorProps(_cellRefs) {
    let closure_0 = _cellRefs;
    this.setState((separatorProps) => {
      let obj2;
      const obj = { separatorProps: obj2 };
      obj2 = {};
      const merged = Object.assign(separatorProps.separatorProps);
      const merged1 = Object.assign(_cellRefs);
      return obj;
    });
  },
};
let items = [
  entry,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const props = this.props;
      props.onUnmount(this.props.cellKey);
    },
  },
  {
    key: "_renderElement",
    value: function _renderElement(renderItem, ListItemComponent, item, index) {
      let tmp7;
      const tmp = renderItem && ListItemComponent;
      if (tmp) {
        const _console = console;
        console.warn(
          "VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.",
        );
      }
      const self = this;
      if (ListItemComponent) {
        const obj2 = { item, index, separators: self._separators };
        tmp7 = metroImportAll(ListItemComponent, obj2);
      } else if (renderItem) {
        const obj = { item, index, separators: self._separators };
        tmp7 = renderItem(obj);
      } else {
        _modDef38(
          false,
          "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.",
        );
      }
      return tmp7;
    },
  },
  {
    key: "render",
    value: function render() {
      let CellRendererComponent;
      let ItemSeparatorComponent;
      let horizontal;
      let index;
      let inversionStyle;
      let item;
      let items3;
      let items4;
      let onCellLayout;
      let tmp10Result;
      let tmp7;
      const self = this;
      const props = this.props;
      ({ CellRendererComponent, ItemSeparatorComponent, horizontal, item, index, inversionStyle, onCellLayout } =
        props);
      const cellKey = props.cellKey;
      const _renderElementResult = this._renderElement(props.renderItem, props.ListItemComponent, item, index);
      let tmp2 = ItemSeparatorComponent;
      if (!isValidElement(ItemSeparatorComponent)) {
        let tmp3 = ItemSeparatorComponent;
        if (tmp3) {
          const obj = {};
          const merged = Object.assign(self.state.separatorProps);
          tmp3 = metroImportAll(ItemSeparatorComponent, obj);
        }
        tmp2 = tmp3;
      }
      if (inversionStyle) {
        let items1;
        if (horizontal) {
          const items = [row.rowReverse, inversionStyle];
          items1 = items;
        } else {
          items1 = [row.columnReverse, inversionStyle];
        }
        tmp7 = items1;
      } else {
        tmp7 = inversionStyle;
        if (horizontal) {
          const items2 = [row.row, inversionStyle];
          tmp7 = items2;
        }
      }
      if (CellRendererComponent) {
        const obj2 = { cellKey, index, item, style: tmp7, onFocusCapture: self._onCellFocusCapture, children: items3 };
        if (onCellLayout) {
          onCellLayout = { onLayout: self._onLayout };
          const obj3 = { onLayout: self._onLayout };
        }
        const merged1 = Object.assign(onCellLayout);
        items3 = [_renderElementResult, tmp2];
        tmp10Result = React4(CellRendererComponent, obj2);
      } else {
        let tmp12 = onCellLayout;
        const obj4 = { style: tmp7, onFocusCapture: self._onCellFocusCapture, children: items4 };
        if (tmp12) {
          tmp12 = { onLayout: self._onLayout };
          const obj5 = { onLayout: self._onLayout };
        }
        const merged2 = Object.assign(tmp12);
        items4 = [_renderElementResult, tmp2];
        tmp10Result = React4(metroImportDefault, obj4);
      }
      const obj6 = { cellKey: self.props.cellKey, children: tmp10Result };
      return metroImportAll(_mod322.VirtualizedListCellContextProvider, obj6);
    },
  },
];
const entry1 = {
  key: "getDerivedStateFromProps",
  value: function getDerivedStateFromProps(item, separatorProps) {
    let obj2;
    let tmp = null;
    if (item.item !== separatorProps.separatorProps.leadingItem) {
      const obj = { separatorProps: obj2 };
      obj2 = { leadingItem: item.item };
      const merged = Object.assign(separatorProps.separatorProps);
      tmp = obj;
    }
    return tmp;
  },
};
let items1 = [entry1];
const importDefaultResultResult = _createClass(CellRenderer, items, items1);
const row = StyleSheet.create({
  row: { flexDirection: "row" },
  rowReverse: { flexDirection: "row-reverse" },
  columnReverse: { flexDirection: "column-reverse" },
});

export default importDefaultResultResult;
