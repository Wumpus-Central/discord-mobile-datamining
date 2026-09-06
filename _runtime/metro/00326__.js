// _runtime/metro/00326__.js
import _modDef38 from "00038__.js";
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import _modDef314 from "00314__.js";
import _slicedToArray from "00032__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import "module_19";

const VirtualizedSectionList = fn;
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
  } catch (err) {}
}
function ItemWithSeparator(leadingItem) {
  const LeadingSeparatorComponent = leadingItem.LeadingSeparatorComponent;
  const SeparatorComponent = leadingItem.SeparatorComponent;
  const cellKey = leadingItem.cellKey;
  ({ prevCellKey: closure_3, setSelfHighlightCallback } = leadingItem);
  ({ updateHighlightFor: _objectWithoutProperties, setSelfUpdatePropsCallback } = leadingItem);
  ({ updatePropsFor: closure_7, inverted } = leadingItem);
  ({ item, index, section } = leadingItem);
  [tmp2, _getPrototypeOf] = _slicedToArray(closure_1_11(false), 2);
  const tmp3 = _slicedToArray(closure_1_11(false), 2);
  closure_9 = tmp3[1];
  let obj = {
    leadingItem: leadingItem.leadingItem,
    leadingSection: leadingItem.leadingSection,
    section: leadingItem.section,
    trailingItem: leadingItem.item,
    trailingSection: leadingItem.trailingSection,
  };
  const tmp4 = _slicedToArray(closure_1_11(obj), 2);
  const first = tmp4[0];
  closure_11 = tmp4[1];
  obj = {
    leadingItem: leadingItem.item,
    leadingSection: leadingItem.leadingSection,
    section: leadingItem.section,
    trailingItem: leadingItem.trailingItem,
    trailingSection: leadingItem.trailingSection,
  };
  const tmp6 = _slicedToArray(closure_1_11(obj), 2);
  const first1 = tmp6[0];
  closure_13 = tmp8;
  const items = [cellKey, setSelfHighlightCallback, tmp6[1], setSelfUpdatePropsCallback];
  closure_1_10(() => {
    setSelfHighlightCallback(cellKey, closure_9);
    setSelfUpdatePropsCallback(cellKey, closure_13);
    return () => {
      setSelfUpdatePropsCallback(cellKey, null);
      setSelfHighlightCallback(cellKey, null);
    };
  }, items);
  obj = {
    highlight() {
      _getPrototypeOf(true);
      closure_9(true);
      if (null != closure_1_3) {
        _objectWithoutProperties(tmp3, true);
      }
    },
    unhighlight() {
      _getPrototypeOf(false);
      closure_9(false);
      if (null != closure_1_3) {
        _objectWithoutProperties(tmp3, false);
      }
    },
    updateProps(arg0, arg1) {
      if ("leading" === arg0) {
        if (null != LeadingSeparatorComponent) {
          let obj = {};
          const merged = Object.assign(first);
          const merged1 = Object.assign(arg1);
          closure_11(obj);
        } else if (null != closure_1_3) {
          obj = {};
          const merged2 = Object.assign(first);
          const merged3 = Object.assign(arg1);
          closure_1_7(tmp14, obj);
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
          closure_13(obj);
        }
      }
    },
  };
  let tmp11 = null != LeadingSeparatorComponent;
  let tmp = _slicedToArray(closure_1_11(false), 2);
  if (tmp11) {
    let tmp13 = LeadingSeparatorComponent;
    if (!noop.isValidElement(LeadingSeparatorComponent)) {
      const obj1 = { highlighted: tmp2 };
      let merged = Object.assign(first);
      tmp13 = closure_1_12(LeadingSeparatorComponent, obj1);
    }
    tmp11 = tmp13;
  }
  let tmp18 = null != SeparatorComponent;
  if (tmp18) {
    let tmp20 = SeparatorComponent;
    if (!noop.isValidElement(SeparatorComponent)) {
      const obj2 = { highlighted: tmp3[0] };
      let merged1 = Object.assign(first1);
      tmp20 = closure_1_12(SeparatorComponent, obj2);
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
  const children = [tmp28, leadingItem.renderItem({ item, index, section, separators: obj })];
  let tmp30 = null;
  if (tmp25) {
    if (false === inverted) {
      tmp11 = tmp18;
    }
    tmp30 = tmp11;
  }
  children[2] = tmp30;
  return closure_1_14(map1, { children });
}
let closure_3 = [
  "ItemSeparatorComponent",
  "SectionSeparatorComponent",
  "renderItem",
  "renderSectionFooter",
  "renderSectionHeader",
  "sections",
  "stickySectionHeadersEnabled",
];
_possibleConstructorReturnDefault;
const noop = fn(19);
({ useEffect: c10, useState: closure_11 } = noop);
const jsxProd = fn(21);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = jsxProd);
class VirtualizedSectionList {
  constructor() {
    self = this;
    items = [...arguments];
    closure_0 = undefined;
    tmp = metroRequire(this, VirtualizedSectionList);
    items1 = [...items];
    tmp2 = closure_8;
    obj = closure_8(VirtualizedSectionList);
    tmp3 = closure_7;
    if (closure_2_15()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._keyExtractor = (arg0, index) => {
      const _subExtractorResult = closure_0._subExtractor(index);
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
      _modDef38(null != index.index, "Received a broken ViewToken");
      const _subExtractorResult = closure_0._subExtractor(index.index);
      if (_subExtractorResult) {
        const keyExtractor = _subExtractorResult.section.keyExtractor;
        let keyExtractor2 = closure_0.props.keyExtractor;
        if (!keyExtractor2) {
          keyExtractor2 = VirtualizedSectionList(313).keyExtractor;
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
    };
    tmp3Result._onViewableItemsChanged = (arg0) => {
      ({ viewableItems, changed } = arg0);
      const onViewableItemsChanged = closure_0.props.onViewableItemsChanged;
      if (null != onViewableItemsChanged) {
        const obj = { viewableItems: null, changed: null };
        const mapped = viewableItems.map(closure_0._convertViewable, closure_0);
        const _Boolean = Boolean;
        obj.viewableItems = mapped.filter(Boolean);
        const mapped1 = changed.map(closure_0._convertViewable, closure_0);
        const _Boolean2 = Boolean;
        obj.changed = mapped1.filter(Boolean);
        const result = onViewableItemsChanged(obj);
      }
    };
    tmp3Result._renderItem = (arg0) => {
      closure_0 = arg0;
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
                obj = { section };
                renderSectionHeaderResult = renderSectionHeader(obj);
              }
              return renderSectionHeaderResult;
            } else {
              const renderSectionFooter = obj.props.renderSectionFooter;
              let renderSectionFooterResult = null;
              if (renderSectionFooter) {
                obj = { section };
                renderSectionFooterResult = renderSectionFooter(obj);
              }
              return renderSectionFooterResult;
            }
          } else {
            const result = obj._getSeparatorComponent(index, _subExtractorResult, closure_0);
            _modDef38(_subExtractorResult.section.renderItem || obj.props.renderItem, "no renderItem!");
            const obj1 = {
              SeparatorComponent: result,
              LeadingSeparatorComponent: null,
              cellKey: null,
              index: null,
              item: null,
              leadingItem: null,
              leadingSection: null,
              prevCellKey: null,
              setSelfHighlightCallback: null,
              setSelfUpdatePropsCallback: null,
              updateHighlightFor: null,
              updatePropsFor: null,
              renderItem: null,
              section: null,
              trailingItem: null,
              trailingSection: null,
              inverted: null,
            };
            let prop;
            if (0 === index2) {
              prop = obj.props.SectionSeparatorComponent;
            }
            obj1.LeadingSeparatorComponent = prop;
            obj1.cellKey = _subExtractorResult.key;
            obj1.index = index2;
            obj1.item = index.item;
            ({ leadingItem: obj2.leadingItem, leadingSection: obj2.leadingSection } = _subExtractorResult);
            obj1.prevCellKey = obj._subExtractor(index - 1) || {}.key;
            ({
              _setUpdateHighlightFor: obj2.setSelfHighlightCallback,
              _setUpdatePropsFor: obj2.setSelfUpdatePropsCallback,
              _updateHighlightFor: obj2.updateHighlightFor,
              _updatePropsFor: obj2.updatePropsFor,
            } = obj);
            obj1.renderItem = _subExtractorResult.section.renderItem || obj.props.renderItem;
            ({
              section: obj2.section,
              trailingItem: obj2.trailingItem,
              trailingSection: obj2.trailingSection,
            } = _subExtractorResult);
            obj1.inverted = obj.props.inverted;
            return closure_3_12(ItemWithSeparator, obj1);
          }
        } else {
          return null;
        }
      };
    };
    tmp3Result._updatePropsFor = (arg0, arg1) => {
      if (null != closure_0._updatePropsMap[arg0]) {
        tmp(arg1);
      }
    };
    tmp3Result._updateHighlightFor = (arg0, arg1) => {
      if (null != closure_0._updateHighlightMap[arg0]) {
        tmp(arg1);
      }
    };
    tmp3Result._setUpdateHighlightFor = (arg0, arg1) => {
      if (null != arg1) {
        closure_0._updateHighlightMap[arg0] = arg1;
      } else {
        const _updateHighlightFor = closure_0._updateHighlightFor;
        delete tmp2[tmp];
      }
    };
    tmp3Result._setUpdatePropsFor = (arg0, arg1) => {
      if (null != arg1) {
        closure_0._updatePropsMap[arg0] = arg1;
      } else {
        const _updatePropsMap = closure_0._updatePropsMap;
        delete tmp2[tmp];
      }
    };
    tmp3Result._updateHighlightMap = {};
    tmp3Result._updatePropsMap = {};
    tmp3Result._captureRef = (_listRef) => {
      closure_0._listRef = _listRef;
    };
    return tmp3Result;
  }
}
_inherits(VirtualizedSectionList, noop.PureComponent);
const entry = {
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
          sum =
            tmp2 + _listRef2.__getListMetrics().getCellMetricsApprox(tmp - itemIndex.itemIndex, _listRef2.props).length;
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
  },
};
let items = [
  entry,
  {
    key: "getListRef",
    value: function getListRef() {
      return this._listRef;
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const props = this.props;
      ({
        ItemSeparatorComponent,
        SectionSeparatorComponent,
        renderItem,
        renderSectionFooter,
        renderSectionHeader,
        sections,
        stickySectionHeadersEnabled,
      } = props);
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
          let arr = items.push(num2 + num);
        }
        let sum = num2 + 2;
        let props2 = self.props;
        sum1 = sum + props2.getItemCount(tmp3.data);
        num2 = sum1;
        continue;
      }
      const tmp = _objectWithoutProperties(props, closure_3);
      const obj = {};
      const _renderItemResult = self._renderItem(num2);
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
      return closure_1_12(_modDef314, obj);
    },
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
    },
  },
  {
    key: "_subExtractor",
    value: function _subExtractor(index) {
      let diff;
      let diff1 = index;
      ({ getItem, getItemCount, sections } = this.props);
      let num = 0;
      if (0 < sections.length) {
        while (true) {
          ({ data, key } = sections[num]);
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
          let obj = {
            section: tmp3,
            key: `${key}:header`,
            index: null,
            header: true,
            trailingSection: sections[num + 1],
          };
        } else if (diff === getItemCount(data)) {
          obj = { section: tmp3, key: `${key}:footer`, index: null, header: false, trailingSection: sections[num + 1] };
        } else {
          obj = {
            section: tmp3,
            key: null,
            index: null,
            leadingItem: null,
            leadingSection: null,
            trailingItem: null,
            trailingSection: null,
          };
          let keyExtractor = tmp3.keyExtractor;
          const text = `${key}:`;
          if (!keyExtractor) {
            keyExtractor = tmp2;
          }
          if (!keyExtractor) {
            keyExtractor = VirtualizedSectionList(313).keyExtractor;
          }
          obj.key = text + keyExtractor(getItem(data, diff), diff);
          obj.index = diff;
          obj.leadingItem = getItem(data, diff - 1);
          obj.leadingSection = sections[num - 1];
          obj.trailingItem = getItem(data, diff + 1);
          obj.trailingSection = sections[num + 1];
        }
        return obj;
      }
    },
  },
  {
    key: "_getSeparatorComponent",
    value: function _getSeparatorComponent(index, _subExtractorResult, arg2) {
      const self = this;
      if (!_subExtractorResult) {
        _subExtractorResult = self._subExtractor(index);
      }
      if (_subExtractorResult) {
        let SectionSeparatorComponent = self.props.SectionSeparatorComponent;
        const props = self.props;
        const diff = arg2 - 1;
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
    },
  },
];

export default _createClass(VirtualizedSectionList, items);
