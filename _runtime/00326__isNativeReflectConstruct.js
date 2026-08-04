// _runtime/00326__isNativeReflectConstruct.js
import _slicedToArray from "_slicedToArray";
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importAllResult from "noop";
import noop from "noop";
import jsxProd from "jsxProd";

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
const VirtualizedSectionList = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function ItemWithSeparator(leadingItem) {
  let closure_3;
  let _objectWithoutProperties;
  let _possibleConstructorReturn;
  let _getPrototypeOf;
  let index;
  let inverted;
  let item;
  let section;
  let setSelfHighlightCallback;
  let setSelfUpdatePropsCallback;
  let tmp2;
  const LeadingSeparatorComponent = leadingItem.LeadingSeparatorComponent;
  const SeparatorComponent = leadingItem.SeparatorComponent;
  const cellKey = leadingItem.cellKey;
  ({ prevCellKey: closure_3, setSelfHighlightCallback } = leadingItem);
  ({ updateHighlightFor: _objectWithoutProperties, setSelfUpdatePropsCallback } = leadingItem);
  ({ updatePropsFor: _possibleConstructorReturn, inverted } = leadingItem);
  ({ item, index, section } = leadingItem);
  [tmp2, _getPrototypeOf] = setSelfHighlightCallback(callback4(false), 2);
  const tmp3 = setSelfHighlightCallback(callback4(false), 2);
  let obj = { leadingItem: leadingItem.leadingItem, leadingSection: leadingItem.leadingSection, section: leadingItem.section, trailingItem: leadingItem.item, trailingSection: leadingItem.trailingSection };
  const tmp4 = setSelfHighlightCallback(callback4(obj), 2);
  const first = tmp4[0];
  callback4 = tmp4[1];
  obj = { leadingItem: leadingItem.item, leadingSection: leadingItem.leadingSection, section: leadingItem.section, trailingItem: leadingItem.trailingItem, trailingSection: leadingItem.trailingSection };
  const tmp6 = setSelfHighlightCallback(callback4(obj), 2);
  const first1 = tmp6[0];
  let closure_13 = tmp8;
  const items = [cellKey, setSelfHighlightCallback, tmp6[1], setSelfUpdatePropsCallback];
  first(() => {
    setSelfHighlightCallback(cellKey, closure_9);
    setSelfUpdatePropsCallback(cellKey, closure_13);
    return () => {
      callback2(closure_2, null);
      callback(closure_2, null);
    };
  }, items);
  obj = {
    highlight() {
      callback3(true);
      callback4(true);
      if (null != closure_3) {
        callback(tmp3, true);
      }
    },
    unhighlight() {
      callback3(false);
      callback4(false);
      if (null != closure_3) {
        callback(tmp3, false);
      }
    },
    updateProps(arg0, arg1) {
      if ("leading" === arg0) {
        if (null != LeadingSeparatorComponent) {
          let obj = {};
          const merged = Object.assign(first);
          const merged1 = Object.assign(arg1);
          callback5(obj);
        } else if (null != closure_3) {
          obj = {};
          const merged2 = Object.assign(first);
          const merged3 = Object.assign(arg1);
          callback2(tmp14, obj);
        }
      } else {
        let tmp = "trailing" === arg0;
        if (tmp) {
          tmp = null != SeparatorComponent;
        }
        if (tmp) {
          obj = {};
          const merged4 = Object.assign(first1);
          const merged5 = Object.assign(arg1);
          obj(obj);
        }
      }
    }
  };
  let tmp11 = null != LeadingSeparatorComponent;
  let tmp = setSelfHighlightCallback(callback4(false), 2);
  if (tmp11) {
    let tmp13 = LeadingSeparatorComponent;
    if (!importAllResult.isValidElement(LeadingSeparatorComponent)) {
      const obj1 = { highlighted: null };
      obj1[0] = tmp2;
      let merged = Object.assign(first);
      tmp13 = first1(LeadingSeparatorComponent, obj1);
    }
    tmp11 = tmp13;
  }
  let tmp18 = null != SeparatorComponent;
  if (tmp18) {
    let tmp20 = SeparatorComponent;
    if (!importAllResult.isValidElement(SeparatorComponent)) {
      const obj2 = { highlighted: null };
      obj2[0] = tmp3[0];
      let merged1 = Object.assign(first1);
      tmp20 = first1(SeparatorComponent, obj2);
    }
    tmp18 = tmp20;
  }
  let tmp25 = tmp11;
  if (!tmp11) {
    tmp25 = tmp18;
  }
  let tmp28 = null;
  if (tmp25) {
    let tmp29 = tmp18;
    if (false === inverted) {
      tmp29 = tmp11;
    }
    tmp28 = tmp29;
  }
  const children = [tmp28, leadingItem.renderItem({ item, index, section, separators: obj }), ];
  let tmp30 = null;
  if (tmp25) {
    if (false === inverted) {
      tmp11 = tmp18;
    }
    tmp30 = tmp11;
  }
  children[2] = tmp30;
  return closure_14(closure_13, { children });
}
let closure_3 = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
let c9 = importAllResult;
({ useEffect: c10, useState: unpackModuleId } = noop);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
class VirtualizedSectionList {
  constructor() {
    self = this;
    items = [...arguments];
    apply = undefined;
    tmp = ItemWithSeparator(this, apply);
    items1 = [...items];
    tmp2 = ItemWithSeparator;
    obj = ItemWithSeparator(apply);
    tmp3 = ItemWithSeparator;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result._keyExtractor = (arg0, index) => {
      const _subExtractorResult = _undefined._subExtractor(index);
      let key = _subExtractorResult;
      if (_subExtractorResult) {
        key = _subExtractorResult.key;
      }
      if (!key) {
        const _String = String;
        key = String(index);
      }
      return key;
    };
    tmp3Result._convertViewable = (index) => {
      outer1_1(outer1_2[9])(null != index.index, "Received a broken ViewToken");
      const _subExtractorResult = _undefined._subExtractor(index.index);
      if (_subExtractorResult) {
        const keyExtractor = _subExtractorResult.section.keyExtractor;
        let keyExtractor2 = tmp3.props.keyExtractor;
        if (!keyExtractor2) {
          keyExtractor2 = _undefined(tmp[10]).keyExtractor;
        }
        if (null != keyExtractor) {
          let keyExtractorResult = keyExtractor(index.item, _subExtractorResult.index);
        } else {
          let num = _subExtractorResult.index;
          if (num == null) {
            num = 0;
          }
          keyExtractorResult = keyExtractor2(index.item, num);
        }
        const obj = {};
        const merged = Object.assign(index);
        obj.index = _subExtractorResult.index;
        obj.key = keyExtractorResult;
        obj.section = _subExtractorResult.section;
        return obj;
      } else {
        return null;
      }
      tmp = outer1_2;
      tmp3 = _undefined;
    };
    tmp3Result._onViewableItemsChanged = (arg0) => {
      let changed;
      let viewableItems;
      ({ viewableItems, changed } = arg0);
      const onViewableItemsChanged = _undefined.props.onViewableItemsChanged;
      if (null != onViewableItemsChanged) {
        const obj = { viewableItems: null, changed: null };
        const mapped = viewableItems.map(tmp._convertViewable, tmp);
        const _Boolean = Boolean;
        obj[0] = mapped.filter(Boolean);
        const mapped1 = changed.map(tmp._convertViewable, tmp);
        const _Boolean2 = Boolean;
        obj[1] = mapped1.filter(Boolean);
        const result = onViewableItemsChanged(obj);
      }
    };
    tmp3Result._renderItem = (arg0) => {
      let closure_0 = arg0;
      return (index) => {
        index = index.index;
        let obj = closure_0;
        const _subExtractorResult = closure_0._subExtractor(index);
        if (_subExtractorResult) {
          const index2 = _subExtractorResult.index;
          if (null == index2) {
            const section = _subExtractorResult.section;
            if (true === _subExtractorResult.header) {
              const renderSectionHeader = obj.props.renderSectionHeader;
              let renderSectionHeaderResult = null;
              if (renderSectionHeader) {
                obj = { section: null };
                obj[0] = section;
                renderSectionHeaderResult = renderSectionHeader(obj);
              }
              return renderSectionHeaderResult;
            } else {
              const renderSectionFooter = obj.props.renderSectionFooter;
              let renderSectionFooterResult = null;
              if (renderSectionFooter) {
                obj = { section: null };
                obj[0] = section;
                renderSectionFooterResult = renderSectionFooter(obj);
              }
              return renderSectionFooterResult;
            }
          } else {
            const result = obj._getSeparatorComponent(index, _subExtractorResult, closure_0);
            outer2_1(outer2_2[9])(_subExtractorResult.section.renderItem || obj.props.renderItem, "no renderItem!");
            const obj1 = { SeparatorComponent: null, LeadingSeparatorComponent: null, cellKey: null, index: null, item: null, leadingItem: null, leadingSection: null, prevCellKey: null, setSelfHighlightCallback: null, setSelfUpdatePropsCallback: null, updateHighlightFor: null, updatePropsFor: null, renderItem: null, section: null, trailingItem: null, trailingSection: null, inverted: null };
            obj1[0] = result;
            let prop;
            if (0 === index2) {
              prop = obj.props.SectionSeparatorComponent;
            }
            obj1[1] = prop;
            obj1[2] = _subExtractorResult.key;
            obj1[3] = index2;
            obj1[4] = index.item;
            ({ leadingItem: obj2[5], leadingSection: obj2[6] } = _subExtractorResult);
            obj1[7] = obj._subExtractor(index - 1) || {}.key;
            ({ _setUpdateHighlightFor: obj2[8], _setUpdatePropsFor: obj2[9], _updateHighlightFor: obj2[10], _updatePropsFor: obj2[11] } = obj);
            obj1[12] = _subExtractorResult.section.renderItem || obj.props.renderItem;
            ({ section: obj2[13], trailingItem: obj2[14], trailingSection: obj2[15] } = _subExtractorResult);
            obj1[16] = obj.props.inverted;
            return outer2_12(outer2_16, obj1);
          }
        } else {
          return null;
        }
      };
    };
    tmp3Result._updatePropsFor = (arg0, arg1) => {
      if (null != _undefined._updatePropsMap[arg0]) {
        tmp(arg1);
      }
    };
    tmp3Result._updateHighlightFor = (arg0, arg1) => {
      if (null != _undefined._updateHighlightMap[arg0]) {
        tmp(arg1);
      }
    };
    tmp3Result._setUpdateHighlightFor = (arg0, arg1) => {
      if (null != arg1) {
        _undefined._updateHighlightMap[arg0] = arg1;
      } else {
        const _updateHighlightFor = _undefined._updateHighlightFor;
        delete tmp2[tmp];
      }
    };
    tmp3Result._setUpdatePropsFor = (arg0, arg1) => {
      if (null != arg1) {
        _undefined._updatePropsMap[arg0] = arg1;
      } else {
        const _updatePropsMap = _undefined._updatePropsMap;
        delete tmp2[tmp];
      }
    };
    tmp3Result._updateHighlightMap = {};
    tmp3Result._updatePropsMap = {};
    tmp3Result._captureRef = (_listRef) => {
      c0._listRef = _listRef;
    };
    return tmp3Result;
  }
}
require("_inherits")(VirtualizedSectionList, importAllResult.PureComponent);
let items = [
  {
    key: "scrollToLocation",
    value: function scrollToLocation(itemIndex) {
      let sectionIndex;
      const self = this;
      itemIndex = itemIndex.itemIndex;
      let num = 0;
      let tmp = itemIndex;
      if (0 < itemIndex.sectionIndex) {
        do {
          let props = self.props;
          itemIndex = itemIndex + (props.getItemCount(self.props.sections[num].data) + 2);
          num = num + 1;
          tmp = itemIndex;
          sectionIndex = itemIndex.sectionIndex;
        } while (num < sectionIndex);
      }
      if (null != self._listRef) {
        const _listRef2 = self._listRef;
        let sum = tmp2;
        if (itemIndex.itemIndex > 0) {
          sum = tmp2;
          if (self.props.stickySectionHeadersEnabled) {
            sum = tmp2 + _listRef2.__getListMetrics().getCellMetricsApprox(tmp - itemIndex.itemIndex, _listRef2.props).length;
            const __getListMetricsResult = _listRef2.__getListMetrics();
          }
        }
        const obj = {};
        const merged = Object.assign(itemIndex);
        obj.viewOffset = sum;
        obj.index = tmp;
        const _listRef = self._listRef;
        _listRef.scrollToIndex(obj);
      }
    }
  },
  {
    key: "getListRef",
    value: function getListRef() {
      return this._listRef;
    }
  },
  {
    key: "render",
    value: function render() {
      let ItemSeparatorComponent;
      let SectionSeparatorComponent;
      let renderItem;
      let renderSectionFooter;
      let renderSectionHeader;
      let sections;
      let stickySectionHeadersEnabled;
      let self = this;
      self = this;
      const props = this.props;
      ({ ItemSeparatorComponent, SectionSeparatorComponent, renderItem, renderSectionFooter, renderSectionHeader, sections, stickySectionHeadersEnabled } = props);
      let num = 0;
      if (this.props.ListHeaderComponent) {
        num = 1;
      }
      let items;
      if (self.props.stickySectionHeadersEnabled) {
        items = [];
      }
      let num2 = 0;
      let sum1 = 0;
      const iter = self.props.sections[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (null != items) {
          let tmp4 = num2;
          let arr = items.push(num2 + num);
        }
        let tmp6 = num2;
        let sum = num2 + 2;
        let tmp8 = sum;
        sum1 = sum;
        let props2 = self.props;
        let tmp9 = nextResult;
        sum1 = sum + props2.getItemCount(tmp3.data);
        num2 = sum1;
        continue;
      }
      const tmp = callback(props, closure_3);
      const obj = {};
      const _renderItemResult = self._renderItem(num2);
      const tmp12 = closure_12;
      const merged = Object.assign(tmp);
      obj.keyExtractor = self._keyExtractor;
      obj.stickyHeaderIndices = items;
      obj.renderItem = _renderItemResult;
      obj.data = self.props.sections;
      obj.getItem = function getItem(arg0, arg1) {
        return self._getItem(self.props, arg0, arg1);
      };
      obj.getItemCount = function getItemCount() {
        return sum1;
      };
      let prop;
      if (self.props.onViewableItemsChanged) {
        prop = self._onViewableItemsChanged;
      }
      obj.onViewableItemsChanged = prop;
      obj.ref = self._captureRef;
      return tmp12(self(314), obj);
    }
  },
  {
    key: "_getItem",
    value: function _getItem(props, arg1, arg2) {
      if (arg1) {
        let diff = arg2 - 1;
        let num2 = 0;
        if (0 < arg1.length) {
          const data = tmp4.data;
          const itemCount = props.getItemCount(data);
          while (-1 !== diff) {
            if (diff === itemCount) {
              break;
            } else if (diff < itemCount) {
              return props.getItem(data, diff);
            } else {
              diff = diff - (itemCount + 2);
              num2 = num2 + 1;
            }
          }
          return arg1[num2];
        }
        return null;
      } else {
        return null;
      }
    }
  },
  {
    key: "_subExtractor",
    value: function _subExtractor(index) {
      let data;
      let diff;
      let getItem;
      let getItemCount;
      let key;
      let sections;
      let diff1 = index;
      ({ getItem, getItemCount, sections } = this.props);
      let num = 0;
      if (0 < sections.length) {
        while (true) {
          ({ data, key } = sections[num]);
          let tmp4 = num;
          let tmp5 = diff1;
          if (!key) {
            let _String = String;
            key = String(num);
          }
          diff = diff1 - 1;
          if (diff < getItemCount(data) + 1) {
            break;
          } else {
            diff1 = diff - (getItemCount(data) + 1);
            num = num + 1;
          }
        }
        if (-1 === diff) {
          let obj = { section: null, key: null, index: null, header: true, trailingSection: null };
          obj[0] = tmp3;
          obj[1] = `${key}:header`;
          obj[4] = sections[num + 1];
        } else if (diff === getItemCount(data)) {
          obj = { section: null, key: null, index: null, header: false, trailingSection: null };
          obj[0] = tmp3;
          obj[1] = `${key}:footer`;
          obj[4] = sections[num + 1];
        } else {
          obj = { section: null, key: null, index: null, leadingItem: null, leadingSection: null, trailingItem: null, trailingSection: null };
          obj[0] = tmp3;
          let keyExtractor = tmp3.keyExtractor;
          const text = `${key}:`;
          if (!keyExtractor) {
            keyExtractor = tmp2;
          }
          if (!keyExtractor) {
            keyExtractor = VirtualizedSectionList(313).keyExtractor;
          }
          obj[1] = text + keyExtractor(getItem(data, diff), diff);
          obj[2] = diff;
          obj[3] = getItem(data, diff - 1);
          obj[4] = sections[num - 1];
          obj[5] = getItem(data, diff + 1);
          obj[6] = sections[num + 1];
        }
        return obj;
      }
    }
  },
  {
    key: "_getSeparatorComponent",
    value: function _getSeparatorComponent(index, _subExtractorResult, closure_0) {
      const self = this;
      if (!_subExtractorResult) {
        _subExtractorResult = self._subExtractor(index);
      }
      if (_subExtractorResult) {
        let SectionSeparatorComponent = self.props.SectionSeparatorComponent;
        const props = self.props;
        const diff = closure_0 - 1;
        const tmp6 = _subExtractorResult.index === props.getItemCount(_subExtractorResult.section.data) - 1;
        if (!SectionSeparatorComponent) {
          let tmp7 = null;
          if (tmp3) {
            tmp7 = null;
            if (!tmp6) {
              tmp7 = null;
              if (index !== diff) {
                tmp7 = tmp3;
              }
            }
          }
          SectionSeparatorComponent = tmp7;
        }
        return SectionSeparatorComponent;
      } else {
        return null;
      }
    }
  }
];

export default importDefaultResult(VirtualizedSectionList, items);