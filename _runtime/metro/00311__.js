// _runtime/metro/00311__.js
import Fragment from "../react/00021_Fragment.js";
import javaScriptFlagGetterAll from "../00027_javaScriptFlagGetter.js";
import _mod38 from "00038__.js";
import deepDiffer from "../00147_deepDiffer.js";
import get_hairlineWidth from "../00254_get_hairlineWidth.js";
import get_VirtualizedListDefault from "../00312_get_VirtualizedList.js";
import memoizeOneDefault from "../00327_memoizeOne.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroImportDefault from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";

const require = globalThis.__r;
let importDefault;

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
let closure_4 = ["numColumns", "columnWrapperStyle", "removeClippedSubviews", "strictMode"];
const jsx = Fragment.jsx;
class FlatList {
  constructor(arg0) {
    let constructResult;
    const self = this;
    let tmp = _classCallCheck(this, FlatList);
    let items = [arg0];
    let obj = _getPrototypeOf(FlatList);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    let tmp3Result = metroImportDefault(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result._virtualizedListPairs = [];
    tmp3Result._captureRef = (_listRef) => {
      closure_0._listRef = _listRef;
    };
    tmp3Result._getItem = (arg0, arg1) => {
      let num = closure_0.props.numColumns;
      if (num == null) {
        num = 1;
      }
      if (num > 1) {
        let num2;
        const items = [];
        for (let num2 = 0; num2 < num; num2 = num2 + 1) {
          let sum = arg1 * num + num2;
          if (sum < arg0.length) {
            let arr = items.push(arg0[sum]);
          }
        }
        return items;
      } else {
        return arg0[arg1];
      }
    };
    tmp3Result._getItemCount = (arg0) => {
      if (null != arg0) {
        const _Object = Object;
        if (typeof Object(arg0).length === "number") {
          let length;
          let num = closure_0.props.numColumns;
          if (num == null) {
            num = 1;
          }
          if (num > 1) {
            const _Math = Math;
            length = Math.ceil(arg0.length / num);
          } else {
            length = arg0.length;
          }
          return length;
        }
      }
      return 0;
    };
    tmp3Result._keyExtractor = (arr, arg1) => {
      let joined;
      closure_0 = arg1;
      let num = closure_0.props.numColumns;
      const tmp = closure_0;
      if (num == null) {
        num = 1;
      }
      let keyExtractor = tmp.props.keyExtractor;
      if (keyExtractor == null) {
        keyExtractor = closure_2_1(closure_2_3[9]).keyExtractor;
      }
      if (num > 1) {
        const _Array = Array;
        const tmp7 = FlatList(closure_2_3[10]);
        tmp7(
          Array.isArray(arr),
          "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.",
          num,
        );
        const mapped = arr.map((item, index) => keyExtractor(item, closure_0 * num + index));
        joined = mapped.join(":");
      } else {
        joined = keyExtractor(arr, arg1);
      }
      return joined;
    };
    tmp3Result._renderer = (arg0, arg1, arg2, arg3, arg4) => {
      let obj;
      let row;
      let closure_0 = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let num = arg3;
      if (arg3 == null) {
        num = 1;
      }
      function render(arg0) {}
      function renderProp(arg0) {
        let _default;
        let item;
        const separators = arg0;
        if (num > 1) {
          ({ item, index: closure_1 } = arg0);
          const _Array = Array;
          const tmp11 = separators(num[10]);
          tmp11(Array.isArray(item), "Expected array of items with numColumns > 1");
          let obj2 = {
            style: _default.compose(row.row, closure_2),
            children: item.map((item, index) => {
              const obj = { item, index: closure_1 * num + index, separators: separators.separators };
              if (typeof render === "function") {
                let tmp2Result;
                if (separators) {
                  const obj2 = {};
                  const merged = Object.assign(obj);
                  tmp2Result = closure_1_10(tmp, obj2);
                } else {
                  tmp2Result = null;
                  if (closure_1) {
                    tmp2Result = tmp2(obj);
                  }
                }
                let tmp8 = null;
                if (null != tmp2Result) {
                  const obj3 = { children: tmp2Result };
                  tmp8 = closure_3_10(React.Fragment, obj3, index);
                }
                return tmp8;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }),
          };
          const tmp16 = closure_1(num[11]);
          _default = separators(num[12]).default;
          return closure_1_10(tmp16, obj2);
        } else if (typeof render === "function") {
          let tmp3Result;
          if (separators) {
            let obj = {};
            let merged = Object.assign(arg0);
            tmp3Result = closure_1_10(tmp2, obj);
          } else {
            tmp3Result = null;
            if (closure_1) {
              tmp3Result = tmp3(arg0);
            }
          }
          return tmp3Result;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      if (arg0) {
        let obj2 = { ListItemComponent: renderProp };
        obj = obj2;
      } else {
        obj = { renderItem: renderProp };
      }
      return obj;
    };
    tmp3Result._memoizedRenderer = memoizeOneDefault(tmp3Result._renderer);
    tmp3Result._checkProps(tmp3Result.props);
    let props = tmp3Result.props;
    if (tmp3Result.props.viewabilityConfigCallbackPairs) {
      const prop = props.viewabilityConfigCallbackPairs;
      tmp3Result._virtualizedListPairs = prop.map((viewabilityConfig) => {
        const obj = {
          viewabilityConfig: viewabilityConfig.viewabilityConfig,
          onViewableItemsChanged: closure_0._createOnViewableItemsChanged(viewabilityConfig.onViewableItemsChanged),
        };
        return obj;
      });
    } else if (props.onViewableItemsChanged) {
      const prop1 = tmp3Result._virtualizedListPairs;
      let obj2 = {
        viewabilityConfig: tmp3Result.props.viewabilityConfig,
        onViewableItemsChanged: tmp3Result._createOnViewableItemsChanged(() => {
          const items = [...arguments];
          FlatList(closure_2_3[10])(
            closure_0.props.onViewableItemsChanged,
            "Changing the nullability of onViewableItemsChanged is not supported. Once a function or null is supplied that cannot be changed.",
          );
          const props = closure_0.props;
          const items1 = [...items];
          return props.onViewableItemsChanged.apply(items1);
        }),
      };
      const push = prop1.push;
      let arr = push(obj2);
    }
    return tmp3Result;
  }
}
_inherits(FlatList, react.PureComponent);
const entry = {
  key: "scrollToEnd",
  value: function scrollToEnd(arg0) {
    if (this._listRef) {
      const _listRef = tmp._listRef;
      _listRef.scrollToEnd(arg0);
    }
  },
};
let items = [
  entry,
  {
    key: "scrollToIndex",
    value: function scrollToIndex(arg0) {
      if (this._listRef) {
        const _listRef = tmp._listRef;
        _listRef.scrollToIndex(arg0);
      }
    },
  },
  {
    key: "scrollToItem",
    value: function scrollToItem(arg0) {
      if (this._listRef) {
        const _listRef = tmp._listRef;
        _listRef.scrollToItem(arg0);
      }
    },
  },
  {
    key: "scrollToOffset",
    value: function scrollToOffset(arg0) {
      if (this._listRef) {
        const _listRef = tmp._listRef;
        _listRef.scrollToOffset(arg0);
      }
    },
  },
  {
    key: "recordInteraction",
    value: function recordInteraction() {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.recordInteraction();
      }
    },
  },
  {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      if (this._listRef) {
        const _listRef = this._listRef;
        const result = _listRef.flashScrollIndicators();
      }
    },
  },
  {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollResponder();
      }
    },
  },
  {
    key: "getNativeScrollRef",
    value: function getNativeScrollRef() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollRef();
      }
    },
  },
  {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollableNode();
      }
    },
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (this._listRef) {
        const _listRef = tmp._listRef;
        _listRef.setNativeProps(arg0);
      }
    },
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(numColumns) {
      _mod38(
        numColumns.numColumns === this.props.numColumns,
        "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.",
      );
      _mod38(
        (null == numColumns.onViewableItemsChanged) === (null == this.props.onViewableItemsChanged),
        "Changing onViewableItemsChanged nullability on the fly is not supported",
      );
      const tmp3 = _mod38;
      const obj = deepDiffer;
      tmp3(
        !obj.default(numColumns.viewabilityConfig, this.props.viewabilityConfig),
        "Changing viewabilityConfig on the fly is not supported",
      );
      _mod38(
        numColumns.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs,
        "Changing viewabilityConfigCallbackPairs on the fly is not supported",
      );
      this._checkProps(this.props);
    },
  },
  {
    key: "_checkProps",
    value: function _checkProps(arg0) {
      let columnWrapperStyle;
      let getItem;
      let getItemCount;
      let horizontal;
      let onViewableItemsChanged;
      let viewabilityConfigCallbackPairs;
      ({ getItem, onViewableItemsChanged } = arg0);
      let num = this.props.numColumns;
      ({ getItemCount, horizontal, columnWrapperStyle, viewabilityConfigCallbackPairs } = arg0);
      if (num == null) {
        num = 1;
      }
      let tmp4 = !getItem;
      const tmp3 = _mod38;
      if (!getItem) {
        tmp4 = !getItemCount;
      }
      tmp3(tmp4, "FlatList does not support custom data formats.");
      if (num > 1) {
        _mod38(!horizontal, "numColumns does not support horizontal.");
      } else {
        _mod38(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists");
      }
      const tmpResult = _mod38;
      if (onViewableItemsChanged) {
        onViewableItemsChanged = viewabilityConfigCallbackPairs;
      }
      tmpResult(
        !onViewableItemsChanged,
        "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.",
      );
    },
  },
  {
    key: "_pushMultiColumnViewable",
    value: function _pushMultiColumnViewable(items, item) {
      importDefault = item;
      let num = this.props.numColumns;
      if (num == null) {
        num = 1;
      }
      let keyExtractor = this.props.keyExtractor;
      if (keyExtractor == null) {
        keyExtractor = require("get VirtualizedList").keyExtractor;
      }
      item = item.item;
      const item1 = item.forEach((item, index) => {
        _mod38(null != item.index, "Missing index!");
        const sum = item.index * num + index;
        const push = items.push;
        const obj = { item, key: keyExtractor(item, sum), index: sum };
        const merged = Object.assign(item);
        push(obj);
      });
    },
  },
  {
    key: "_createOnViewableItemsChanged",
    value: function _createOnViewableItemsChanged(onViewableItemsChanged) {
      const self = this;
      let closure_0 = onViewableItemsChanged;
      return (viewableItems) => {
        let items;
        let items1;
        let num = items1.props.numColumns;
        if (num == null) {
          num = 1;
        }
        if (items) {
          if (num > 1) {
            items = [];
            items1 = [];
            viewableItems = viewableItems.viewableItems;
            const item = viewableItems.forEach((item) => self._pushMultiColumnViewable(items1, item));
            const changed = viewableItems.changed;
            const item1 = changed.forEach((item) => self._pushMultiColumnViewable(items, item));
            const obj = { viewableItems: items1, changed: items };
            items(obj);
          } else {
            items(viewableItems);
          }
        }
      };
    },
  },
  {
    key: "render",
    value: function render() {
      let columnWrapperStyle;
      let numColumns;
      let removeClippedSubviews;
      let strictMode;
      const self = this;
      const props = this.props;
      ({ numColumns, columnWrapperStyle, removeClippedSubviews, strictMode } = props);
      const obj = { removeClippedSubviews };
      const tmp = undefined !== strictMode && strictMode;
      const tmp2 = _objectWithoutProperties(props, closure_4);
      const tmp3 = tmp ? self._memoizedRenderer : self._renderer;
      const VirtualizedList = get_VirtualizedListDefault.VirtualizedList;
      const merged = Object.assign(tmp2);
      ({
        _getItem: obj.getItem,
        _getItemCount: obj.getItemCount,
        _keyExtractor: obj.keyExtractor,
        _captureRef: obj.ref,
        _virtualizedListPairs: obj.viewabilityConfigCallbackPairs,
      } = self);
      const obj2 = javaScriptFlagGetterAll;
      const result = obj2.shouldUseRemoveClippedSubviewsAsDefaultOnIOS();
      if (removeClippedSubviews == null) {
        removeClippedSubviews = true;
      }
      const merged1 = Object.assign(
        tmp3(self.props.ListItemComponent, self.props.renderItem, columnWrapperStyle, numColumns, self.props.extraData),
      );
      return <VirtualizedList removeClippedSubviews={removeClippedSubviews} />;
    },
  },
];
const importDefaultResultResult = _createClass(FlatList, items);
let _default = get_hairlineWidth.default;
let closure_12 = _default.create({ row: { flexDirection: "row" } });

export default importDefaultResultResult;
