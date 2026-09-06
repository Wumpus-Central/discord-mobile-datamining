// === Module 311: ? ===

// Module 311
import _modAll27 from "module_27" /* 27 */;
import _possibleConstructorReturnDefault from "_possibleConstructorReturn" /* 93 */;
import get_VirtualizedListDefault from "get VirtualizedList" /* 312 */;
import areInputsEqualDefault from "areInputsEqual" /* 327 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import noop from "module_19" /* 19 */;

const FlatList = fn;
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
let closure_4 = ["numColumns", "columnWrapperStyle", "removeClippedSubviews", "strictMode"];
_possibleConstructorReturnDefault;
const jsx = fn(21).jsx;
class FlatList {
  constructor(arg0) {
    self = this;
    tmp = metroRequire(this, FlatList);
    items = [];
    items[0] = global;
    tmp2 = closure_8;
    obj = closure_8(FlatList);
    tmp3 = closure_7;
    if (closure_11()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
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
          let num = closure_0.props.numColumns;
          if (num == null) {
            num = 1;
          }
          if (num > 1) {
            const _Math = Math;
            let length = Math.ceil(arg0.length / num);
          } else {
            length = arg0.length;
          }
          return length;
        }
      }
      return 0;
    };
    tmp3Result._keyExtractor = (arr, arg1) => {
      closure_0 = arg1;
      let num = closure_0.props.numColumns;
      if (num == null) {
        num = 1;
      }
      let keyExtractor = closure_0.props.keyExtractor;
      if (keyExtractor == null) {
        keyExtractor = get_VirtualizedListDefault.keyExtractor;
      }
      if (num > 1) {
        const _Array = Array;
        FlatList(38)(Array.isArray(arr), "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.", num);
        const mapped = arr.map((item, index) => keyExtractor(item, closure_0 * num + index));
        let joined = mapped.join(":");
        const tmp7 = FlatList(38);
      } else {
        joined = keyExtractor(arr, arg1);
      }
      return joined;
    };
    tmp3Result._renderer = (arg0, arg1, arg2, arg3, arg4) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      function render(arg0) {

      }
      function renderProp(arg0) {
        const separators = arg0;
        if (num > 1) {
          ({ item, index: closure_1 } = arg0);
          const _Array = Array;
          separators(num[10])(Array.isArray(item), "Expected array of items with numColumns > 1");
          let obj = { style: null, children: null };
          const tmp11 = separators(num[10]);
          const tmp16 = closure_1(num[11]);
          obj.style = separators(num[12]).default.compose(row.row, closure_2);
          obj.children = item.map((item, index) => {
            let obj = { item, index: closure_1_1 * num + index, separators: separators.separators };
            if (typeof render === "function") {
              if (separators) {
                obj = {};
                const merged = Object.assign(obj);
                let tmp2Result = closure_1_10(tmp, obj);
              } else {
                tmp2Result = null;
                if (closure_1) {
                  tmp2Result = tmp2(obj);
                }
              }
              let tmp8 = null;
              if (null != tmp2Result) {
                obj = { children: tmp2Result };
                tmp8 = < key={arg1}>{tmp2Result}</>;
              }
              return tmp8;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          });
          return closure_1_10(tmp16, obj);
        } else if (typeof render === "function") {
          if (separators) {
            obj = {};
            let merged = Object.assign(arg0);
            let tmp3Result = closure_1_10(tmp2, obj);
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
        let obj = { ListItemComponent: renderProp };
      } else {
        obj = { renderItem: renderProp };
      }
      return obj;
    };
    tmp3Result._memoizedRenderer = closure_1(closure_3[13])(tmp3Result._renderer);
    _checkPropsResult = tmp3Result._checkProps(tmp3Result.props);
    props = tmp3Result.props;
    if (tmp3Result.props.viewabilityConfigCallbackPairs) {
      prop = props.viewabilityConfigCallbackPairs;
      tmp3Result._virtualizedListPairs = prop.map((viewabilityConfig) => ({ viewabilityConfig: viewabilityConfig.viewabilityConfig, onViewableItemsChanged: closure_0._createOnViewableItemsChanged(viewabilityConfig.onViewableItemsChanged) }));
    } else if (props.onViewableItemsChanged) {
      prop1 = tmp3Result._virtualizedListPairs;
      obj = { viewabilityConfig: null, onViewableItemsChanged: null };
      obj.viewabilityConfig = tmp3Result.props.viewabilityConfig;
      obj.onViewableItemsChanged = tmp3Result._createOnViewableItemsChanged(() => {
        const items = [...arguments];
        FlatList(38)(closure_0.props.onViewableItemsChanged, "Changing the nullability of onViewableItemsChanged is not supported. Once a function or null is supplied that cannot be changed.");
        const props = closure_0.props;
        const items1 = [...items];
        return props.onViewableItemsChanged.apply(items1);
      });
      arr = prop1.push(obj);
    }
    return tmp3Result;
  }
}
_inherits(FlatList, noop.PureComponent);
const entry = {
  key: "scrollToEnd",
  value: function scrollToEnd(arg0) {
    if (this._listRef) {
      const _listRef = tmp._listRef;
      _listRef.scrollToEnd(arg0);
    }
  }
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
    }
  },
  {
    key: "scrollToItem",
    value: function scrollToItem(arg0) {
      if (this._listRef) {
        const _listRef = tmp._listRef;
        _listRef.scrollToItem(arg0);
      }
    }
  },
  {
    key: "scrollToOffset",
    value: function scrollToOffset(arg0) {
      if (this._listRef) {
        const _listRef = tmp._listRef;
        _listRef.scrollToOffset(arg0);
      }
    }
  },
  {
    key: "recordInteraction",
    value: function recordInteraction() {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.recordInteraction();
      }
    }
  },
  {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      if (this._listRef) {
        const _listRef = this._listRef;
        const result = _listRef.flashScrollIndicators();
      }
    }
  },
  {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollResponder();
      }
    }
  },
  {
    key: "getNativeScrollRef",
    value: function getNativeScrollRef() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollRef();
      }
    }
  },
  {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollableNode();
      }
    }
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (this._listRef) {
        const _listRef = tmp._listRef;
        _listRef.setNativeProps(arg0);
      }
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(numColumns) {
      FlatList(38)(numColumns.numColumns === this.props.numColumns, "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.");
      FlatList(38)(null == numColumns.onViewableItemsChanged === (null == this.props.onViewableItemsChanged), "Changing onViewableItemsChanged nullability on the fly is not supported");
      const tmp3 = FlatList(38);
      tmp3(!FlatList(147).default(numColumns.viewabilityConfig, this.props.viewabilityConfig), "Changing viewabilityConfig on the fly is not supported");
      FlatList(38)(numColumns.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, "Changing viewabilityConfigCallbackPairs on the fly is not supported");
      this._checkProps(this.props);
    }
  },
  {
    key: "_checkProps",
    value: function _checkProps(arg0) {
      ({ getItem, onViewableItemsChanged } = arg0);
      let num = this.props.numColumns;
      ({ getItemCount, horizontal, columnWrapperStyle, viewabilityConfigCallbackPairs } = arg0);
      if (num == null) {
        num = 1;
      }
      let tmp4 = !getItem;
      if (!getItem) {
        tmp4 = !getItemCount;
      }
      FlatList(38)(tmp4, "FlatList does not support custom data formats.");
      if (num > 1) {
        tmp(38)(!horizontal, "numColumns does not support horizontal.");
      } else {
        tmp(38)(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists");
      }
      const tmp3 = FlatList(38);
      if (onViewableItemsChanged) {
        onViewableItemsChanged = viewabilityConfigCallbackPairs;
      }
      FlatList(38)(!onViewableItemsChanged, "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.");
    }
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
        FlatList(38)(null != item.index, "Missing index!");
        const sum = item.index * num + index;
        const obj = {};
        const merged = Object.assign(item);
        obj.item = item;
        obj.key = keyExtractor(item, sum);
        obj.index = sum;
        items.push(obj);
      });
    }
  },
  {
    key: "_createOnViewableItemsChanged",
    value: function _createOnViewableItemsChanged(onViewableItemsChanged) {
      const self = this;
      closure_0 = onViewableItemsChanged;
      return (viewableItems) => {
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
            tmp(obj);
          } else {
            tmp(viewableItems);
          }
        }
      };
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({ numColumns, columnWrapperStyle, removeClippedSubviews, strictMode } = props);
      const obj = {};
      const merged = Object.assign(_objectWithoutProperties(props, closure_4));
      ({ _getItem: obj.getItem, _getItemCount: obj.getItemCount, _keyExtractor: obj.keyExtractor, _captureRef: obj.ref, _virtualizedListPairs: obj.viewabilityConfigCallbackPairs } = self);
      const tmp = undefined !== strictMode && strictMode;
      const tmp2 = _objectWithoutProperties(props, closure_4);
      const tmp3 = undefined !== strictMode && strictMode ? self._memoizedRenderer : self._renderer;
      const tmp4 = jsx;
      const result = _modAll27.shouldUseRemoveClippedSubviewsAsDefaultOnIOS();
      if (removeClippedSubviews == null) {
        removeClippedSubviews = true;
      }
      obj.removeClippedSubviews = removeClippedSubviews;
      const merged1 = Object.assign(tmp3(self.props.ListItemComponent, self.props.renderItem, columnWrapperStyle, numColumns, self.props.extraData));
      return tmp4(get_VirtualizedListDefault.VirtualizedList, obj);
    }
  }
];
const importDefaultResultResult = _createClass(FlatList, items);
let closure_12 = fn(254).default.create({ row: { flexDirection: "row" } });

export default importDefaultResultResult;