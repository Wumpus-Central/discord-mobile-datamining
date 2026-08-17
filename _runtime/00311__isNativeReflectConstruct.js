// _runtime/00311__isNativeReflectConstruct.js
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import get_VirtualizedListDefault from "get VirtualizedList" /* 312 */;
import areInputsEqualDefault from "areInputsEqual" /* 327 */;
import closure_5 from "_objectWithoutProperties" /* 109 */;
import closure_6 from "_classCallCheck" /* 41 */;
import closure_7 from "_possibleConstructorReturn" /* 93 */;
import closure_8 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import importDefaultResult1 from "_inherits" /* 98 */;

const FlatList = arg1;
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
let c9 = importAllResult;
class FlatList {
  constructor(arg0) {
    self = this;
    tmp = closure_6(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_8;
    obj = closure_8(closure_0);
    tmp3 = closure_7;
    if (_isNativeReflectConstruct()) {
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
      let num = lib.props.numColumns;
      if (num == null) {
        num = 1;
      }
      if (num > 1) {
        const items = [];
        for (let num2 = 0; num2 < num; num2 = num2 + 1) {
          let sum = arg1 * num + num2;
          let tmp2 = num2;
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
          let num = lib.props.numColumns;
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
    tmp3Result._keyExtractor = (arr) => {
      const lib = arg1;
      let num = lib.props.numColumns;
      if (num == null) {
        num = 1;
      }
      let keyExtractor = lib.props.keyExtractor;
      if (keyExtractor == null) {
        keyExtractor = closure_1_1(closure_1_3[9]).keyExtractor;
      }
      if (num > 1) {
        const _Array = Array;
        lib(closure_1_3[10])(Array.isArray(arr), "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.", num);
        const mapped = arr.map((arg0, arg1) => keyExtractor(arg0, closure_0 * num + arg1));
        let joined = mapped.join(":");
        const tmp7 = lib(closure_1_3[10]);
      } else {
        joined = keyExtractor(arr, arg1);
      }
      return joined;
    };
    tmp3Result._renderer = (arg0, arg1, arg2, arg3, arg4) => {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      let num = arg3;
      if (arg3 == null) {
        num = 1;
      }
      function render(arg0) {

      }
      function renderProp(arg0) {
        const callback = arg0;
        if (num > 1) {
          ({ item, index: closure_1 } = arg0);
          const _Array = Array;
          callback(num[10])(Array.isArray(item), "Expected array of items with numColumns > 1");
          let obj = { style: null, children: null };
          const tmp11 = callback(num[10]);
          const tmp16 = callback2(num[11]);
          obj[0] = callback(num[12]).default.compose(closure_1_12.row, closure_2);
          obj[1] = item.map((item) => {
            let obj = { item, index: closure_1 * closure_1_3 + arg1, separators: separators.separators };
            if (typeof closure_1_4 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            if (separators) {
              obj = {};
              const merged = Object.assign(obj);
              let tmp2Result = closure_1_10(tmp, obj);
            } else {
              tmp2Result = null;
              if (closure_1_1) {
                tmp2Result = tmp2(obj);
              }
            }
            let tmp8 = null;
            if (null != tmp2Result) {
              obj = { children: null };
              obj[0] = tmp2Result;
              tmp8 = closure_2_10(closure_2_9.Fragment, obj, arg1);
            }
            return tmp8;
          });
          return closure_1_10(tmp16, obj);
        } else {
          if (typeof render !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (callback) {
            obj = {};
            let merged = Object.assign(arg0);
            let tmp3Result = closure_1_10(tmp2, obj);
          } else {
            tmp3Result = null;
            if (callback2) {
              tmp3Result = tmp3(arg0);
            }
          }
          return tmp3Result;
        }
      }
      if (arg0) {
        let obj = { ListItemComponent: null };
        obj[0] = renderProp;
      } else {
        obj = { renderItem: null };
        obj[0] = renderProp;
      }
      return obj;
    };
    tmp3Result._memoizedRenderer = require("areInputsEqual")(tmp3Result._renderer);
    _checkPropsResult = tmp3Result._checkProps(tmp3Result.props);
    props = tmp3Result.props;
    if (tmp3Result.props.viewabilityConfigCallbackPairs) {
      prop = props.viewabilityConfigCallbackPairs;
      tmp3Result._virtualizedListPairs = prop.map((viewabilityConfig) => ({ viewabilityConfig: viewabilityConfig.viewabilityConfig, onViewableItemsChanged: lib._createOnViewableItemsChanged(viewabilityConfig.onViewableItemsChanged) }));
    } else if (props.onViewableItemsChanged) {
      prop1 = tmp3Result._virtualizedListPairs;
      obj = { viewabilityConfig: null, onViewableItemsChanged: null };
      obj[0] = tmp3Result.props.viewabilityConfig;
      obj[1] = tmp3Result._createOnViewableItemsChanged(() => {
        const items = [...arguments];
        lib(closure_1_3[10])(lib.props.onViewableItemsChanged, "Changing the nullability of onViewableItemsChanged is not supported. Once a function or null is supplied that cannot be changed.");
        const props = lib.props;
        const items1 = [...items];
        return props.onViewableItemsChanged.apply(items1);
      });
      arr = prop1.push(obj);
    }
    return tmp3Result;
  }
}
importDefaultResult1(FlatList, importAllResult.PureComponent);
let items = [
  {
    key: "scrollToEnd",
    value: function scrollToEnd(arg0) {
      if (this._listRef) {
        const _listRef = tmp._listRef;
        _listRef.scrollToEnd(arg0);
      }
    }
  },
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
      closure_0 = items;
      importDefault = item;
      let num = this.props.numColumns;
      if (num == null) {
        num = 1;
      }
      let keyExtractor = this.props.keyExtractor;
      if (keyExtractor == null) {
        keyExtractor = importDefault(keyExtractor[9]).keyExtractor;
      }
      item = item.item;
      const item1 = item.forEach((item) => {
        items(keyExtractor[10])(null != item.index, "Missing index!");
        const sum = item.index * num + arg1;
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
            const item = viewableItems.forEach((item) => items1._pushMultiColumnViewable(items1, item));
            const changed = viewableItems.changed;
            const item1 = changed.forEach((item) => items1._pushMultiColumnViewable(items, item));
            const obj = { viewableItems: null, changed: null };
            obj[0] = items1;
            obj[1] = items;
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
      const merged = Object.assign(callback(props, closure_4));
      ({ _getItem: obj.getItem, _getItemCount: obj.getItemCount, _keyExtractor: obj.keyExtractor, _captureRef: obj.ref, _virtualizedListPairs: obj.viewabilityConfigCallbackPairs } = self);
      const tmp = undefined !== strictMode && strictMode;
      const tmp2 = callback(props, closure_4);
      const tmp3 = undefined !== strictMode && strictMode ? self._memoizedRenderer : self._renderer;
      const tmp4 = jsx;
      const result = javaScriptFlagGetterAll.shouldUseRemoveClippedSubviewsAsDefaultOnIOS();
      if (removeClippedSubviews == null) {
        removeClippedSubviews = true;
      }
      obj.removeClippedSubviews = removeClippedSubviews;
      const merged1 = Object.assign(tmp3(self.props.ListItemComponent, self.props.renderItem, columnWrapperStyle, numColumns, self.props.extraData));
      return tmp4(get_VirtualizedListDefault.VirtualizedList, obj);
    }
  }
];
let obj = {
  key: "scrollToEnd",
  value: function scrollToEnd(arg0) {
    if (this._listRef) {
      const _listRef = tmp._listRef;
      _listRef.scrollToEnd(arg0);
    }
  }
};
const importDefaultResultResult = importDefaultResult(FlatList, items);
let closure_12 = require("get hairlineWidth").default.create({ row: { flexDirection: "row" } });

export default importDefaultResultResult;