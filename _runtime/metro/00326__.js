// === Module 326: ? ===

// Module 326
import elementsThatOverlapOffsets from "elementsThatOverlapOffsets" /* 313 */;
import _modDef314 from "module_314" /* 314 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import metroImportDefault from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import "react";
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

let c10;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
function ItemWithSeparator(leadingItem) {
  let closure_129_3;
  let closure_129_5;
  let closure_129_7;
  let closure_129_8;
  let closure_9;
  let first;
  let first1;
  let first2;
  let index;
  let inverted;
  let item;
  let section;
  let setSelfHighlightCallback;
  let setSelfUpdatePropsCallback;
  let tmp2;
  let tmp9;
  const LeadingSeparatorComponent = leadingItem.LeadingSeparatorComponent;
  const SeparatorComponent = leadingItem.SeparatorComponent;
  const cellKey = leadingItem.cellKey;
  ({ prevCellKey: closure_129_3, setSelfHighlightCallback } = leadingItem);
  ({ updateHighlightFor: closure_129_5, setSelfUpdatePropsCallback } = leadingItem);
  ({ updatePropsFor: closure_129_7, inverted } = leadingItem);
  ({ item, index, section } = leadingItem);
  let tmp = _slicedToArray(unpackModuleId(false), 2);
  [tmp2, closure_129_8] = tmp;
  [first, closure_9] = unpackModuleId(false);
  let obj = { leadingItem: leadingItem.leadingItem, leadingSection: leadingItem.leadingSection, section: leadingItem.section, trailingItem: leadingItem.item, trailingSection: leadingItem.trailingSection };
  [first1, unpackModuleId] = unpackModuleId(obj);
  let obj2 = { leadingItem: leadingItem.item, leadingSection: leadingItem.leadingSection, section: leadingItem.section, trailingItem: leadingItem.trailingItem, trailingSection: leadingItem.trailingSection };
  [first2, tmp9] = unpackModuleId(obj2);
  const items = [cellKey, setSelfHighlightCallback, tmp9, setSelfUpdatePropsCallback];
  authStore(() => {
    setSelfHighlightCallback(cellKey, closure_9);
    setSelfUpdatePropsCallback(cellKey, closure_13);
    return () => {
      setSelfUpdatePropsCallback(cellKey, null);
      setSelfHighlightCallback(cellKey, null);
    };
  }, items);
  let obj3 = {
    highlight() {
      closure_1_8(true);
      closure_9(true);
      if (null != closure_1_3) {
        closure_1_5(tmp3, true);
      }
    },
    unhighlight() {
      closure_1_8(false);
      closure_9(false);
      if (null != closure_1_3) {
        closure_1_5(tmp3, false);
      }
    },
    updateProps(arg0, arg1) {
      if ("leading" === arg0) {
        if (null != LeadingSeparatorComponent) {
          const obj2 = {};
          const merged = Object.assign(first1);
          const merged1 = Object.assign(arg1);
          closure_11(obj2);
        } else if (null != closure_1_3) {
          const obj3 = {};
          const merged2 = Object.assign(first1);
          const merged3 = Object.assign(arg1);
          closure_1_7(tmp14, obj3);
        }
      } else {
        const tmp = "trailing" === arg0 && null != SeparatorComponent;
        if (tmp) {
          const obj = {};
          const merged4 = Object.assign(first2);
          const merged5 = Object.assign(arg1);
          closure_13(obj);
        }
      }
    }
  };
  let tmp12 = null != LeadingSeparatorComponent;
  map1 = tmp9;
  const renderItemResult = leadingItem.renderItem({ item, index, section, separators: obj3 });
  if (tmp12) {
    let tmp14 = LeadingSeparatorComponent;
    if (!react.isValidElement(LeadingSeparatorComponent)) {
      const obj4 = { highlighted: tmp2 };
      let merged = Object.assign(first1);
      tmp14 = closure_12(LeadingSeparatorComponent, obj4);
    }
    tmp12 = tmp14;
  }
  let tmp19 = null != SeparatorComponent;
  if (tmp19) {
    let tmp21 = SeparatorComponent;
    if (!react.isValidElement(SeparatorComponent)) {
      const obj5 = { highlighted: first };
      let merged1 = Object.assign(first2);
      tmp21 = closure_12(SeparatorComponent, obj5);
    }
    tmp19 = tmp21;
  }
  let tmp29 = null;
  const tmp28 = map1;
  if (tmp12 || tmp19) {
    let tmp30 = tmp19;
    if (false === inverted) {
      tmp30 = tmp12;
    }
    tmp29 = tmp30;
  }
  const children = [tmp29, renderItemResult, ];
  let tmp31 = null;
  if (tmp12 || tmp19) {
    if (false === inverted) {
      tmp12 = tmp19;
    }
    tmp31 = tmp12;
  }
  children[2] = tmp31;
  return authStore2(tmp28, { children });
}
let closure_3 = ["ItemSeparatorComponent", "SectionSeparatorComponent", "renderItem", "renderSectionFooter", "renderSectionHeader", "sections", "stickySectionHeadersEnabled"];
({ useEffect: c10, useState: unpackModuleId } = react);
({ jsx: closure_12, Fragment: map1, jsxs: closure_14 } = Fragment);
class VirtualizedSectionList {
  constructor() {
    let constructResult;
    const self = this;
    const items = [...arguments];
    let closure_0;
    const tmp = _classCallCheck(this, VirtualizedSectionList);
    const items1 = [...items];
    let obj = _getPrototypeOf(VirtualizedSectionList);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items1, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items1);
    }
    const tmp3Result = metroImportDefault(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._keyExtractor = (arg0, index) => {
      const _subExtractorResult = closure_0._subExtractor(index);
      let StringResult = _subExtractorResult && _subExtractorResult.key;
      if (!StringResult) {
        const _String = String;
        StringResult = String(index);
      }
      return StringResult;
    };
    tmp3Result._convertViewable = (index) => {
      closure_2_1(closure_2_2[9])(null != index.index, "Received a broken ViewToken");
      const _subExtractorResult = closure_0._subExtractor(index.index);
      if (_subExtractorResult) {
        let keyExtractorResult;
        const keyExtractor = _subExtractorResult.section.keyExtractor;
        const keyExtractor2 = closure_0.props.keyExtractor || VirtualizedSectionList(closure_2_2[10]).keyExtractor;
        if (null != keyExtractor) {
          keyExtractorResult = keyExtractor(index.item, _subExtractorResult.index);
        } else {
          let num = _subExtractorResult.index;
          const item = index.item;
          if (num == null) {
            num = 0;
          }
          keyExtractorResult = keyExtractor2(item, num);
        }
        const obj = { index: _subExtractorResult.index, key: keyExtractorResult, section: _subExtractorResult.section };
        const merged = Object.assign(index);
        return obj;
      } else {
        return null;
      }
    };
    tmp3Result._onViewableItemsChanged = (arg0) => {
      let changed;
      let mapped;
      let mapped1;
      let viewableItems;
      ({ viewableItems, changed } = arg0);
      const onViewableItemsChanged = closure_0.props.onViewableItemsChanged;
      if (null != onViewableItemsChanged) {
        const obj = { viewableItems: mapped.filter(Boolean), changed: mapped1.filter(Boolean) };
        mapped = viewableItems.map(closure_0._convertViewable, closure_0);
        const _Boolean = Boolean;
        mapped1 = changed.map(closure_0._convertViewable, closure_0);
        const _Boolean2 = Boolean;
        const result = onViewableItemsChanged(obj);
      }
    };
    tmp3Result._renderItem = (arg0) => {
      closure_0 = arg0;
      return (index) => {
        let prop;
        index = index.index;
        const item = index.item;
        const _subExtractorResult = closure_0._subExtractor(index);
        if (_subExtractorResult) {
          const index2 = _subExtractorResult.index;
          if (null == index2) {
            const section = _subExtractorResult.section;
            if (true === _subExtractorResult.header) {
              const renderSectionHeader = closure_0.props.renderSectionHeader;
              let renderSectionHeaderResult = null;
              if (renderSectionHeader) {
                const obj3 = { section };
                renderSectionHeaderResult = renderSectionHeader(obj3);
              }
              return renderSectionHeaderResult;
            } else {
              const renderSectionFooter = closure_0.props.renderSectionFooter;
              let renderSectionFooterResult = null;
              if (renderSectionFooter) {
                const obj4 = { section };
                renderSectionFooterResult = renderSectionFooter(obj4);
              }
              return renderSectionFooterResult;
            }
          } else {
            const result = closure_0._getSeparatorComponent(index, _subExtractorResult, closure_0);
            closure_3_1(closure_3_2[9])(_subExtractorResult.section.renderItem || closure_0.props.renderItem, "no renderItem!");
            const obj7 = { SeparatorComponent: result, LeadingSeparatorComponent: prop, cellKey: _subExtractorResult.key, index: index2, item, leadingItem: null, leadingSection: null, prevCellKey: (closure_0._subExtractor(index - 1) || {}).key, setSelfHighlightCallback: null, setSelfUpdatePropsCallback: null, updateHighlightFor: null, updatePropsFor: null, renderItem: _subExtractorResult.section.renderItem || closure_0.props.renderItem, section: null, trailingItem: null, trailingSection: null, inverted: closure_0.props.inverted };
            prop = undefined;
            if (0 === index2) {
              prop = closure_0.props.SectionSeparatorComponent;
            }
            ({ leadingItem: obj2.leadingItem, leadingSection: obj2.leadingSection } = _subExtractorResult);
            ({ _setUpdateHighlightFor: obj2.setSelfHighlightCallback, _setUpdatePropsFor: obj2.setSelfUpdatePropsCallback, _updateHighlightFor: obj2.updateHighlightFor, _updatePropsFor: obj2.updatePropsFor } = closure_0);
            ({ section: obj2.section, trailingItem: obj2.trailingItem, trailingSection: obj2.trailingSection } = _subExtractorResult);
            closure_0._subExtractor(index - 1) || {};
            return closure_3_12(closure_3_16, obj7);
          }
        } else {
          return null;
        }
      };
    };
    tmp3Result._updatePropsFor = (arg0, arg1) => {
      if (null != closure_0._updatePropsMap[arg0]) {
        closure_0._updatePropsMap[arg0](arg1);
      }
    };
    tmp3Result._updateHighlightFor = (arg0, arg1) => {
      if (null != closure_0._updateHighlightMap[arg0]) {
        closure_0._updateHighlightMap[arg0](arg1);
      }
    };
    tmp3Result._setUpdateHighlightFor = (arg0, arg1) => {
      if (null != arg1) {
        closure_0._updateHighlightMap[arg0] = arg1;
      } else {
        delete closure_0._updateHighlightFor[tmp];
      }
    };
    tmp3Result._setUpdatePropsFor = (arg0, arg1) => {
      if (null != arg1) {
        closure_0._updatePropsMap[arg0] = arg1;
      } else {
        delete closure_0._updatePropsMap[tmp];
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
_inherits(VirtualizedSectionList, react.PureComponent);
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
          const __getListMetricsResult = _listRef2.__getListMetrics();
          sum = tmp2 + __getListMetricsResult.getCellMetricsApprox(tmp - itemIndex.itemIndex, _listRef2.props).length;
        }
      }
      const obj = { viewOffset: sum, index: tmp };
      const merged = Object.assign(itemIndex);
      const _listRef = self._listRef;
      _listRef.scrollToIndex(obj);
    }
  }
};
let items = [
  entry,
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
      let _renderItemResult;
      let prop;
      let renderItem;
      let renderSectionFooter;
      let renderSectionHeader;
      let sections;
      let stickySectionHeadersEnabled;
      const self = this;
      const props = this.props;
      ({ ItemSeparatorComponent, SectionSeparatorComponent, renderItem, renderSectionFooter, renderSectionHeader, sections, stickySectionHeadersEnabled } = props);
      let num = 0;
      const tmp = _objectWithoutProperties(props, closure_3);
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
      const obj = {
        keyExtractor: self._keyExtractor,
        stickyHeaderIndices: items,
        renderItem: _renderItemResult,
        data: self.props.sections,
        getItem(arg0, arg1) {
          return self._getItem(self.props, arg0, arg1);
        },
        getItemCount() {
          return sum1;
        },
        onViewableItemsChanged: prop,
        ref: self._captureRef
      };
      _renderItemResult = self._renderItem(num2);
      const tmp13 = _modDef314;
      const merged = Object.assign(tmp);
      prop = undefined;
      if (self.props.onViewableItemsChanged) {
        prop = self._onViewableItemsChanged;
      }
      return closure_12(tmp13, obj);
    }
  },
  {
    key: "_getItem",
    value: function _getItem(props, arg1, arg2) {
      const tmp = arg1;
      if (tmp) {
        let diff = arg2 - 1;
        let num2 = 0;
        if (0 < arg1.length) {
          const data = tmp5.data;
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
      let keyExtractor;
      let sections;
      let text;
      let diff1 = index;
      ({ getItem, getItemCount, sections } = this.props);
      let num = 0;
      if (0 < sections.length) {
        let obj3;
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
          obj3 = { section: tmp3, key: `${key}:header`, index: null, header: true, trailingSection: sections[num + 1] };
          const obj2 = { section: tmp3, key: `${key}:header`, index: null, header: true, trailingSection: sections[num + 1] };
        } else if (diff === getItemCount(data)) {
          obj3 = { section: tmp3, key: `${key}:footer`, index: null, header: false, trailingSection: sections[num + 1] };
          const obj = { section: tmp3, key: `${key}:footer`, index: null, header: false, trailingSection: sections[num + 1] };
        } else {
          obj3 = { section: tmp3, key: text + keyExtractor(getItem(data, diff), diff), index: diff, leadingItem: getItem(data, diff - 1), leadingSection: sections[num - 1], trailingItem: getItem(data, diff + 1), trailingSection: sections[num + 1] };
          keyExtractor = tmp3.keyExtractor;
          text = `${key}:`;
          if (!keyExtractor) {
            keyExtractor = tmp2;
          }
          if (!keyExtractor) {
            keyExtractor = elementsThatOverlapOffsets.keyExtractor;
          }
        }
        return obj3;
      }
    }
  },
  {
    key: "_getSeparatorComponent",
    value: function _getSeparatorComponent(index, _subExtractorResult, arg2) {
      const self = this;
      const tmp = _subExtractorResult || self._subExtractor(index);
      if (tmp) {
        let SectionSeparatorComponent = self.props.SectionSeparatorComponent;
        const props = self.props;
        const diff = arg2 - 1;
        const tmp6 = tmp.index === props.getItemCount(tmp.section.data) - 1;
        if (!SectionSeparatorComponent) {
          let tmp7 = null;
          if (tmp.section.ItemSeparatorComponent || self.props.ItemSeparatorComponent) {
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

export default _createClass(VirtualizedSectionList, items);