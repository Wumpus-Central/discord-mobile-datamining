// discord_app/lib/native/FastList.tsx
import obj132 from "../../utils/PlatformUtils.tsx";
import shallowEqualDefault from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import _mod4115 from "../../modules/reanimated/ReanimatedRexport.tsx";
import BottomSheetModal from "../../../_runtime/06952_BottomSheetModal.js";
import obj132Default from "../../modules/core/native/NativeView.tsx";
import refObjectUnionAsPropDefault from "../../modules/typescript/refObjectUnionAsProp.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../_runtime/react/00021_jsxProd.js";
import importDefaultResult from "../../modules/reanimated/ReanimatedRexport.tsx";

require = fn;
function renderDefaultEmpty() {
  return null;
}
function defaultRecyclerKey() {

}
function FastListScrollWorklet(scrollViewRef) {
  scrollViewRef = scrollViewRef.scrollViewRef;
  const scrollPosValue = scrollViewRef.scrollPosValue;
  const horizontal = scrollViewRef.horizontal;
  const onScrollWorklet = scrollViewRef.onScrollWorklet;
  const mutable = scrollViewRef(horizontal[10]).makeMutable(false);
  obj = scrollViewRef(horizontal[10]);
  const fn = function l(contentOffset) {
    contentOffset = contentOffset.contentOffset;
    const tmp2 = horizontal ? contentOffset.x : contentOffset.y;
    const contentSize = contentOffset.contentSize;
    const tmp3 = horizontal ? contentSize.width : contentSize.height;
    if (0 !== tmp3) {
      const result = mutable.set(true);
      const _Math = Math;
      const result1 = scrollPosValue.set(Math.min(tmp2, tmp3));
      if (null != onScrollWorklet) {
        const layoutMeasurement = contentOffset.layoutMeasurement;
        tmp10(tmp2, tmp3, horizontal ? layoutMeasurement.width : layoutMeasurement.height);
      }
    }
  };
  fn.__closure = { horizontal, workletMounted: mutable, scrollPosValue, onScrollWorklet };
  fn.__workletHash = 16225357996403;
  fn.__initData = closure_29;
  const event = scrollViewRef(horizontal[10]).useEvent(fn, ["onScroll"]);
  const items = [event, scrollViewRef];
  const effect = importAllResult.useEffect(() => {
    const tmp = closure_1_9(scrollViewRef.current);
    scrollViewRef = tmp;
    if (null != tmp) {
      event.workletEventHandler.registerForEvents(tmp);
      return () => {
        event.workletEventHandler.unregisterFromEvents(closure_0);
      };
    }
  }, items);
  return null;
}
let closure_3 = ["manualRef", "onScroll", "onScrollWorklet", "onScrollEnd", "onLayout", "renderHeader", "renderFooter", "renderSection", "renderItem", "renderSectionFooter", "getRecyclerKey", "onEndReached", "endReachedThreshold", "headerSize", "footerSize", "sectionSize", "sectionFooterSize", "itemSize", "sections", "scrollPosValue", "batchesToRender", "optimizeListItemRender", "initialScrollSection", "initialScrollItem", "initialScrollOrientation", "initialScrollStart", "getAnchorIdFromIndex", "getAnchorIndexFromId", "EXPERIMENTAL_enableAnchorWhileScrolling", "chunkBase", "disableContentWrappers", "childrenWrapper", "stickyHeaderFooter", "stickySectionsVariant", "persistantKeys", "disableRecyclingOnFullCompute", "disableLegacyGestureHandling", "viewabilityConfig", "onViewableItemsChanged", "debugLayout", "renderAccessory", "removeClippedSubviews", "inActionSheet"];
({ PixelRatio: error, ScrollView: closure_8, StyleSheet, findNodeHandle: c9 } = get_ActivityIndicator);
({ jsxs: c10, jsx: unpackModuleId, Fragment: closure_12 } = jsxProd);
let map = new Map();
let obj = { SPACER: "SPACER", HEADER: "HEADER", FOOTER: "FOOTER", SECTION: "SECTION", ITEM: "ITEM", SECTION_FOOTER: "SECTION_FOOTER" };
let FastListItemRecycler;
class FastListItemRecycler {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
    obj._items = {};
    obj._pendingItems = {};
    item = global.forEach((item, index) => {
      closure_1_5(obj._itemsForType(item.type), 1)[0][item.recyclerKey] = item;
    });
    return obj;
  }
}
const prototype = FastListItemRecycler.prototype;
prototype["_itemsForType"] = function _itemsForType(type) {
  const self = this;
  let tmp = this._items[type];
  if (tmp == null) {
    obj = {};
    self._items[type] = obj;
    tmp = obj;
  }
  const items = [tmp, ];
  let tmp2 = self._pendingItems[type];
  if (tmp2 == null) {
    const items1 = [];
    self._pendingItems[type] = items1;
    tmp2 = items1;
  }
  items[1] = tmp2;
  return items;
};
prototype["get"] = function get(type, layoutStart, layoutSize, customKey) {
  let num = arg4;
  if (arg4 === undefined) {
    num = 0;
  }
  let num2 = arg5;
  if (arg5 === undefined) {
    num2 = -1;
  }
  const tmp = callback2(this._itemsForType(type), 2);
  return this._get({ type, layoutStart, layoutSize, customKey, section: num, item: num2, items: tmp[0], pendingItems: tmp[1] });
};
prototype["_get"] = function _get(arg0) {
  ({ type, layoutStart, layoutSize, customKey, section, item, pendingItems } = arg0);
  if (customKey == null) {
    const _HermesInternal = HermesInternal;
    customKey = "" + type + ":" + section + ":" + item;
  }
  if (null == arg0.items[customKey]) {
    obj = { type: null, key: -1, layoutStart: null, layoutSize: null, section: null, item: null, recyclerKey: null };
    obj[0] = type;
    obj[2] = layoutStart;
    obj[3] = layoutSize;
    obj[4] = section;
    obj[5] = item;
    obj[6] = customKey;
    pendingItems.push(obj);
  } else {
    obj = {};
    const merged = Object.assign(tmp7);
    obj.layoutStart = layoutStart;
    obj.layoutSize = layoutSize;
    obj.section = section;
    obj.item = item;
    delete tmp[tmp2];
  }
  return obj;
};
prototype["fill"] = function fill(arg0) {
  const self = this;
  closure_0 = arg0;
  const item = self(12).forEach(obj, (type) => {
    const tmp = closure_1_5(self._itemsForType(type), 2);
    self._fill(tmp[0], tmp[1], closure_0);
  });
};
prototype["_fill"] = function _fill(arg0, arg1, closure_0) {
  let length;
  closure_0 = arg1;
  let sum1 = 0;
  if (!closure_0) {
    const item = sum1(12).forEach(arg0, (arg0) => {
      if (null == table[closure_1]) {
        return false;
      } else {
        tmp2.key = tmp;
        closure_1 = closure_1 + 1;
      }
    });
    const arr = sum1(12);
  }
  if (sum1 < arg1.length) {
    do {
      let sum = FastListItemRecycler._LAST_KEY + 1;
      FastListItemRecycler._LAST_KEY = sum;
      arg1[sum1].key = sum;
      sum1 = sum1 + 1;
      length = arg1.length;
    } while (sum1 < length);
  }
  arg1.length = 0;
};
FastListItemRecycler._LAST_KEY = 0;
class FastListComputer {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj[2] = [];
    obj[7] = [];
    obj[8] = [];
    obj.props = global;
    updatePropsResult = obj.updateProps(global);
    return obj;
  }
}
const prototype2 = FastListComputer.prototype;
prototype2["updateProps"] = function updateProps(props) {
  const self = this;
  let dirty = this.dirty;
  if (!dirty) {
    dirty = !shallowEqualDefault(props, self.props);
  }
  self.dirty = dirty;
  self.props = props;
  self.uniform = typeof props.itemSize === "number";
};
prototype2["setInfo"] = function setInfo(containerSize) {
  const self = this;
  const rounded = Math.ceil(containerSize / 4);
  self.dirty = this.dirty || rounded !== self.chunkSize;
  self.chunkSize = rounded;
};
prototype2["getSizeForHeader"] = function getSizeForHeader() {
  const headerSize = this.props.headerSize;
  let num = 0;
  if (undefined !== headerSize) {
    num = headerSize;
  }
  let numResult = num;
  if (typeof num !== "number") {
    numResult = num();
  }
  return numResult;
};
prototype2["getSizeForFooter"] = function getSizeForFooter() {
  const footerSize = this.props.footerSize;
  let num = 0;
  if (undefined !== footerSize) {
    num = footerSize;
  }
  let numResult = num;
  if (typeof num !== "number") {
    numResult = num();
  }
  return numResult;
};
prototype2["getSizeForSection"] = function getSizeForSection(arg0) {
  const sectionSize = this.props.sectionSize;
  let num = 0;
  if (undefined !== sectionSize) {
    num = sectionSize;
  }
  let numResult = num;
  if (typeof num !== "number") {
    numResult = num(arg0);
  }
  return numResult;
};
prototype2["getSizeForItem"] = function getSizeForItem(arg0, arg1) {
  const itemSize = this.props.itemSize;
  let itemSizeResult = itemSize;
  if (typeof itemSize !== "number") {
    itemSizeResult = itemSize(arg0, arg1);
  }
  return itemSizeResult;
};
prototype2["getSizeForSectionFooter"] = function getSizeForSectionFooter(arg0) {
  const sectionFooterSize = this.props.sectionFooterSize;
  let num = 0;
  if (undefined !== sectionFooterSize) {
    num = sectionFooterSize;
  }
  let numResult = num;
  if (typeof num !== "number") {
    numResult = num(arg0);
  }
  return numResult;
};
prototype2["getChunk"] = function getChunk(arg0) {
  const self = this;
  const dataCache = this.dataCache;
  let diff = dataCache.length - 1;
  if (null != this.chunkCache) {
    if (arg0 >= self.chunkCache.start) {
      if (arg0 <= self.chunkCache.end) {
        return self.chunkCache;
      }
    }
  }
  let num = 0;
  if (0 <= diff) {
    const sum = num + ((diff - num) / 2 | 0);
    let diff1 = diff;
    while (null != dataCache[sum]) {
      if (arg0 >= tmp3.start) {
        if (arg0 <= tmp3.end) {
          self.chunkCache = tmp3;
          return tmp3;
        }
      }
      if (arg0 < tmp3.start) {
        diff1 = sum - 1;
        let sum1 = num;
        diff = diff1;
        num = sum1;
        if (sum1 <= diff1) {
          continue;
        } else {
          break;
        }
        break;
      } else if (arg0 <= tmp3.end) {
        break;
      } else {
        sum1 = sum + 1;
      }
      break;
    }
  }
};
prototype2["compute"] = function compute(lastStartChunk, lastEndChunk, arr) {
  closure_0 = lastStartChunk;
  closure_1 = lastEndChunk;
  const self = this;
  getRecyclerKey = undefined;
  let items;
  let obj3;
  c6 = undefined;
  function addInitialSection(section, layoutStart, layoutSize, layoutStart2) {
    let arr = items.push(obj3.get(obj.SECTION, layoutStart, layoutSize, getRecyclerKey(obj.SECTION, section), section));
    const sum = layoutStart + layoutSize;
    if (sum < layoutStart2) {
      closure_6 = closure_6 + 1;
      arr = arr.push(obj3.get(obj.SPACER, sum, layoutStart2 - sum, undefined, 0, closure_6));
    }
  }
  function isVisible(layoutStart, layoutSize) {
    let tmp = !flag;
    if (flag) {
      let tmp5 = layoutStart >= closure_0 - layoutSize;
      if (tmp5) {
        tmp5 = layoutStart < closure_1;
      }
      tmp = tmp5;
    }
    return tmp;
  }
  if (this.dirty) {
    self.fullCompute();
    let flag2 = true;
  } else {
    flag2 = false;
    if (lastStartChunk === self.lastStartChunk) {
      flag2 = false;
      if (lastEndChunk === self.lastEndChunk) {
        obj = { size: null, items: null };
        ({ size: obj[0], items: obj[1] } = self);
        return obj;
      }
    }
  }
  ({ stickyHeaderFooter, getRecyclerKey } = self.props);
  if (undefined === getRecyclerKey) {
    getRecyclerKey = defaultRecyclerKey;
  }
  self.lastStartChunk = lastStartChunk;
  self.lastEndChunk = lastEndChunk;
  map = new Map();
  const iter = self.persistantItemData[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    item = undefined;
    ({ type, section } = nextResult);
    if (nextResult.type === obj.ITEM) {
      item = tmp4.item;
    }
    let recyclerKey = getRecyclerKey(type, section, item);
    if (null != recyclerKey) {
      let result = map.set(tmp10, tmp4);
    }
    continue;
  }
  let rounded = Math.floor(lastStartChunk / self.chunkSize);
  const bound = Math.max(Math.ceil(lastEndChunk / self.chunkSize), rounded);
  let result1 = rounded * self.chunkSize;
  items = [];
  self.items = items;
  obj3 = new FastListItemRecycler(arr);
  section2 = -1;
  let num = -1;
  section3 = -1;
  c6 = 0;
  const set = new Set();
  if (rounded <= bound) {
    do {
      let chunk = self.getChunk(rounded);
      if (null != chunk) {
        let addResult = set.add(chunk);
      }
      rounded = rounded + 1;
    } while (rounded <= bound);
  }
  for (const item10103 of set) {
    if (null != item10103) {
      let data = tmp21.data;
      for (const item10107 of data) {
        if (item10107.layoutStart + item10107.layoutSize >= result1) {
          let type4 = item10107.type;
          let tmp224 = obj;
          if (obj.HEADER === type4) {
            if (isVisible(item10107.layoutStart, item10107.layoutSize)) {
              arr = items.push(obj3.get(tmp224.HEADER, item10107.layoutStart, item10107.layoutSize, undefined));
            }
            result1 = item10107.layoutStart + item10107.layoutSize;
          } else if (tmp224.SECTION === type4) {
            if (isVisible(item10107.layoutStart, item10107.layoutSize)) {
              if (-1 === section2) {
                ({ section: section2, section: section3 } = item10107);
              } else {
                section3 = item10107.section;
              }
              let recyclerKey1 = getRecyclerKey(tmp224.SECTION, item10107.section);
              let tmp104 = recyclerKey1;
              let hasItem = null != recyclerKey1;
              if (hasItem) {
                hasItem = map.has(tmp104);
              }
              if (hasItem) {
                let deleteResult = map.delete(tmp104);
              }
              arr = items.push(obj3.get(tmp224.SECTION, item10107.layoutStart, item10107.layoutSize, tmp104, item10107.section));
            }
            result1 = item10107.layoutStart + item10107.layoutSize;
          } else if (tmp224.ITEM === type4) {
            if (null == item10107.uniform) {
              if (isVisible(item10107.layoutStart, item10107.layoutSize)) {
                if (0 === items.length) {
                  let addInitialSectionResult = addInitialSection(item10107.section, item10107.sectionData.layoutStart, item10107.sectionData.layoutSize, item10107.layoutStart);
                }
                if (-1 === section2) {
                  section2 = item10107.section;
                }
                if (-1 === num) {
                  num = item10107.item;
                }
                ({ section: section3, item } = item10107);
                let recyclerKey2 = getRecyclerKey(tmp224.ITEM, item10107.section, item10107.item);
                let tmp86 = recyclerKey2;
                let hasItem1 = null != recyclerKey2;
                if (hasItem1) {
                  hasItem1 = map.has(tmp86);
                }
                if (hasItem1) {
                  let deleteResult1 = map.delete(tmp86);
                }
                let arr1 = items.push(obj3.get(tmp224.ITEM, item10107.layoutStart, item10107.layoutSize, tmp86, item10107.section, item10107.item));
              }
              result1 = item10107.layoutStart + item10107.layoutSize;
            } else {
              let num3 = 0;
              if (result1 > item10107.layoutStart) {
                let _Math = Math;
                num3 = Math.floor((result1 - item10107.layoutStart) / item10107.itemSize);
              }
              let sum2 = num3;
              let sum = item10107.layoutStart + item10107.itemSize * num3;
              result1 = sum;
              if (sum < bound * self.chunkSize) {
                if (sum2 < item10107.items) {
                  while (true) {
                    if (isVisible(result1, item10107.itemSize)) {
                      if (0 === items.length) {
                        let addInitialSectionResult1 = addInitialSection(item10107.section, item10107.sectionData.layoutStart, item10107.sectionData.layoutSize, result1);
                      }
                      if (-1 === section2) {
                        section2 = item10107.section;
                      }
                      if (-1 === num) {
                        num = sum2;
                      }
                      section3 = item10107.section;
                      let tmp58 = obj;
                      let recyclerKey3 = getRecyclerKey(obj.ITEM, item10107.section, sum2);
                      let tmp60 = recyclerKey3;
                      let hasItem2 = null != recyclerKey3;
                      if (hasItem2) {
                        hasItem2 = map.has(tmp60);
                      }
                      if (hasItem2) {
                        let deleteResult2 = map.delete(tmp60);
                      }
                      let arr2 = items.push(obj3.get(tmp58.ITEM, result1, item10107.itemSize, tmp60, item10107.section, sum2));
                    }
                    let sum1 = result1 + item10107.itemSize;
                    result1 = sum1;
                    sum2 = sum2 + 1;
                    if (sum1 >= bound * self.chunkSize) {
                      break;
                    } else {
                      if (sum2 < item10107.items) {
                        continue;
                      } else {
                        break;
                      }
                      break;
                    }
                  }
                }
              }
            }
          } else if (tmp224.SECTION_FOOTER === type4) {
            if (isVisible(item10107.layoutStart, item10107.layoutSize)) {
              if (0 === items.length) {
                let addInitialSectionResult2 = addInitialSection(item10107.section, item10107.sectionData.layoutStart, item10107.sectionData.layoutSize, item10107.layoutStart);
              }
              let SECTION_FOOTER = tmp224.SECTION_FOOTER;
              let layoutStart = item10107.layoutStart;
              let arr3 = items.push(obj3.get(SECTION_FOOTER, layoutStart, item10107.layoutSize, getRecyclerKey(tmp224.SECTION_FOOTER, item10107.section), item10107.section));
            }
            result1 = item10107.layoutStart + item10107.layoutSize;
          } else if (tmp224.FOOTER === type4) {
            if (isVisible(item10107.layoutStart, item10107.layoutSize)) {
              let arr4 = items.push(obj3.get(tmp224.FOOTER, item10107.layoutStart, item10107.layoutSize, undefined));
            }
            result1 = item10107.layoutStart + item10107.layoutSize;
          }
        }
        continue;
      }
    }
    continue;
  }
  const items1 = [];
  const items2 = [];
  let num6 = 0;
  let num7 = 0;
  while (tmp121 !== undefined) {
    let tmp124 = obj3(tmp122, 2);
    [tmp125, tmp126] = tmp124;
    if (tmp126.section < section2) {
      num6 = num6 + tmp126.layoutSize;
      let items3 = [tmp125, tmp126];
      let arr5 = items1.push(items3);
    } else if (tmp126.section > section3) {
      num7 = num7 + tmp126.layoutSize;
      let items4 = [tmp125, tmp126];
      let arr6 = items2.push(items4);
    } else if (tmp126.type === obj.ITEM) {
      if (tmp126.section === section2) {
        if (tmp126.item < num) {
          num6 = num6 + tmp126.layoutSize;
          let items5 = [tmp125, tmp126];
          let arr7 = items1.push(items5);
        }
      }
      num7 = num7 + tmp126.layoutSize;
      let items6 = [tmp125, tmp126];
      let arr8 = items2.push(items6);
    }
    continue;
  }
  const first = items[0];
  if (null != first) {
    if (first.layoutStart > 0) {
      const headerDataCache = self.headerDataCache;
      const layoutStart5 = first.layoutStart;
      let tmp148 = stickyHeaderFooter;
      if (stickyHeaderFooter) {
        tmp148 = null != headerDataCache;
      }
      if (tmp148) {
        tmp148 = "HEADER" !== first.type;
      }
      let layoutStart2 = layoutStart5;
      if (tmp148) {
        if (layoutStart5 - headerDataCache.layoutStart - headerDataCache.layoutSize > 0) {
          items.unshift(obj3.get(obj.SPACER, headerDataCache.layoutStart + headerDataCache.layoutSize, layoutStart5 - headerDataCache.layoutStart - headerDataCache.layoutSize, undefined, 0, 0));
        }
        items.unshift(obj3.get(obj.HEADER, headerDataCache.layoutStart, headerDataCache.layoutSize, undefined));
        layoutStart2 = headerDataCache.layoutStart;
      }
      const _Math2 = Math;
      const bound1 = Math.max(layoutStart2 - num6, 0);
      for (const item10429 of items1) {
        let tmp161 = obj3(item10429, 2);
        [tmp162, tmp163] = tmp161;
        ({ type: type2, layoutStart: layoutStart3, layoutSize, section: section4 } = tmp163);
        let item1;
        if (tmp163.type === obj.ITEM) {
          item1 = tmp164.item;
        }
        let arr11 = items.unshift(obj3.get(type2, layoutStart3, layoutSize, tmp162, section4, item1));
        continue;
      }
      if (bound1 > 0) {
        items.unshift(obj3.get(obj.SPACER, 0, bound1, undefined, 0, 1));
      }
    }
  }
  if (null != items[items.length - 1]) {
    let size = tmp182.layoutStart + tmp182.layoutSize;
  } else {
    size = self.size;
  }
  if (size < self.size) {
    const footerDataCache = self.footerDataCache;
    if (stickyHeaderFooter) {
      stickyHeaderFooter = null != footerDataCache;
    }
    if (stickyHeaderFooter) {
      stickyHeaderFooter = "FOOTER" !== tmp182.type;
    }
    let sum3 = size;
    if (stickyHeaderFooter) {
      if (size < footerDataCache.layoutStart) {
        items.push(obj3.get(obj.SPACER, size, footerDataCache.layoutStart + footerDataCache.layoutSize - size, undefined, 1, 0));
      }
      items.push(obj3.get(obj.FOOTER, footerDataCache.layoutStart, footerDataCache.layoutSize, undefined));
      sum3 = footerDataCache.layoutStart + footerDataCache.layoutSize;
    }
    const sum4 = sum3 + num7;
    if (sum4 < self.size) {
      items.push(obj3.get(obj.SPACER, sum4, self.size - sum4, undefined, 1, 1));
    }
    for (const item10531 of items2) {
      let tmp202 = obj3(item10531, 2);
      [tmp203, tmp204] = tmp202;
      ({ type: type3, layoutStart: layoutStart4, layoutSize: layoutSize2, section: section5 } = tmp204);
      let item2;
      if (tmp204.type === obj.ITEM) {
        item2 = tmp205.item;
      }
      let arr16 = items.push(obj3.get(type3, layoutStart4, layoutSize2, tmp203, section5, item2));
      continue;
    }
  }
  let disableRecycling = self.disableRecycling;
  if (!disableRecycling) {
    disableRecycling = self.props.disableRecyclingOnFullCompute && flag2;
  }
  obj3.fill(disableRecycling);
  obj = { size: self.size, items };
  return obj;
};
prototype2["fullCompute"] = function fullCompute() {
  const self = this;
  const props = this.props;
  ({ sections, insetStart } = props);
  let num = 0;
  if (undefined !== insetStart) {
    num = insetStart;
  }
  const insetEnd = props.insetEnd;
  let num2 = 0;
  if (undefined !== insetEnd) {
    num2 = insetEnd;
  }
  let getRecyclerKey = props.getRecyclerKey;
  if (undefined === getRecyclerKey) {
    getRecyclerKey = defaultRecyclerKey;
  }
  const set = new Set(self.props.persistantKeys);
  self.persistantItemData = [];
  const items = [];
  self.dataCache = items;
  self.chunkCache = undefined;
  const chunkSize = self.chunkSize;
  closure_0 = num;
  self.headerDataCache = undefined;
  self.footerDataCache = undefined;
  function pushData(closure_0, arg1, type) {
    closure_0 = closure_0 + (arg1 - closure_0);
    const bound = Math.max(Math.floor(closure_0 / chunkSize), 0);
    const bound1 = Math.max(Math.floor(arg1 / chunkSize) - 1, bound);
    let chunk = self.getChunk(bound);
    if (null == chunk) {
      obj = { start: null, end: null, data: null };
      obj[0] = bound;
      obj[1] = bound1;
      obj[2] = [];
      items.push(obj);
      chunk = obj;
    }
    if (type.type === closure_1_14.HEADER) {
      self.headerDataCache = type;
    } else if (type.type === tmp7.FOOTER) {
      self.footerDataCache = type;
    }
    chunk.end = bound1;
    const data = chunk.data;
    data.push(type);
  }
  const sizeForHeader = self.getSizeForHeader();
  if (sizeForHeader > 0) {
    obj = { type: null, layoutStart: null, layoutSize: null };
    obj[0] = obj.HEADER;
    obj[1] = closure_0;
    obj[2] = sizeForHeader;
    pushData(closure_0, closure_0 + sizeForHeader, obj);
  }
  for (let num3 = 0; num3 < sections.length; num3 = num3 + 1) {
    let tmp5 = sections[num3];
    if (0 !== tmp5) {
      let tmp32 = closure_0;
      let sizeForSection = self.getSizeForSection(num3);
      obj = { type: null, layoutStart: null, layoutSize: null, section: null };
      let tmp34 = obj;
      obj[0] = obj.SECTION;
      obj[1] = closure_0;
      obj[2] = sizeForSection;
      obj[3] = num3;
      if (set.size > 0) {
        let recyclerKey = getRecyclerKey(tmp34.SECTION, num3);
        let tmp8 = null != recyclerKey && set.has(recyclerKey);
        if (tmp8) {
          let persistantItemData = self.persistantItemData;
          let arr = persistantItemData.push(obj);
          let deleteResult = set.delete(recyclerKey);
        }
      }
      let pushDataResult1 = pushData(tmp32, tmp32 + sizeForSection, obj);
      if (self.uniform) {
        let sizeForItem = self.getSizeForItem(num3, 0);
        obj1 = { type: null, uniform: true, layoutStart: null, itemSize: null, layoutSize: null, section: null, items: null, sectionData: null };
        obj1[0] = tmp34.ITEM;
        obj1[2] = closure_0;
        obj1[3] = sizeForItem;
        obj1[4] = sizeForItem * tmp5;
        obj1[5] = num3;
        obj1[6] = tmp5;
        obj1[7] = obj;
        let pushDataResult2 = pushData(closure_0, closure_0 + sizeForItem * tmp5, obj1);
        let tmp12 = tmp34;
      } else {
        let num4 = 0;
        tmp12 = tmp34;
        if (0 < tmp5) {
          do {
            let sizeForItem1 = self.getSizeForItem(num3, num4);
            let obj2 = { type: null, layoutStart: null, layoutSize: null, section: null, item: null, sectionData: null };
            let tmp15 = obj;
            obj2[0] = obj.ITEM;
            obj2[1] = closure_0;
            obj2[2] = sizeForItem1;
            obj2[3] = num3;
            obj2[4] = num4;
            obj2[5] = obj;
            let pushDataResult3 = pushData(closure_0, closure_0 + sizeForItem1, obj2);
            if (set.size > 0) {
              let recyclerKey1 = getRecyclerKey(tmp15.ITEM, num3, num4);
              let tmp19 = null != recyclerKey1 && set.has(recyclerKey1);
              if (tmp19) {
                let persistantItemData1 = self.persistantItemData;
                arr = persistantItemData1.push(obj2);
                let deleteResult1 = set.delete(recyclerKey1);
              }
            }
            num4 = num4 + 1;
            tmp12 = tmp15;
          } while (num4 < tmp5);
        }
      }
      let sizeForSectionFooter = self.getSizeForSectionFooter(num3);
      if (sizeForSectionFooter > 0) {
        let obj3 = { type: null, layoutStart: null, layoutSize: null, section: null, sectionData: null };
        obj3[0] = tmp12.SECTION_FOOTER;
        obj3[1] = closure_0;
        obj3[2] = sizeForSectionFooter;
        obj3[3] = num3;
        obj3[4] = obj;
        let pushDataResult4 = pushData(closure_0, closure_0 + sizeForSectionFooter, obj3);
      }
    }
  }
  const sizeForFooter = self.getSizeForFooter();
  if (sizeForFooter > 0) {
    const obj4 = { type: null, layoutStart: null, layoutSize: null };
    obj4[0] = obj.FOOTER;
    obj4[1] = closure_0;
    obj4[2] = sizeForFooter;
    pushData(closure_0, closure_0 + sizeForFooter, obj4);
  }
  closure_0 = closure_0 + num2;
  self.size = closure_7.roundToNearestPixel(closure_0);
  self.dirty = false;
};
prototype2["getChunkDataFromSectionItem"] = function getChunkDataFromSectionItem(arg0, arg1) {
  const self = this;
  if (this.dirty) {
    self.fullCompute();
  }
  const iter = self.dataCache[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let data = nextResult.data;
    for (const item10022 of data) {
      let type = item10022.type;
      if (obj.ITEM === type) {
        if (null != arg1) {
          if (true === item10022.uniform) {
            if (item10022.section === arg0) {
              if (arg1 > item10022.items) {
                obj.return();
                iter.return();
              } else {
                obj.return();
                iter.return();
                return tmp3;
              }
            }
          }
          if (null == item10022.uniform) {
            if (item10022.section === arg0) {
              if (item10022.item === arg1) {
                obj.return();
                iter.return();
                return tmp3;
              }
            }
          }
        }
      } else {
        if (tmp7.SECTION === type) {
          if (item10022.section > arg0) {
            obj.return();
            iter.return();
          } else if (null != arg1) {
            continue;
          } else {
            obj.return();
            iter.return();
            return tmp3;
          }
        }
        continue;
      }
      continue;
    }
    continue;
  }
};
prototype2["getChunkIndexFromSectionItem"] = function getChunkIndexFromSectionItem(arg0) {
  const self = this;
  ({ targetSection, targetItem, padBottom } = arg0);
  if (padBottom === undefined) {
    padBottom = 16;
  }
  const iter = arg0.chunk.data[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let type = nextResult.type;
    if (obj.ITEM === type) {
      if (tmp2.section !== targetSection) {
        continue;
      } else {
        if (null == targetItem) {
          continue;
        } else if (tmp2.uniform) {
          if (targetItem >= tmp2.items) {
            iter.return();
          } else {
            let sum = tmp2.layoutStart + tmp2.sectionData.layoutSize + tmp2.itemSize * targetItem;
            obj = { startIndex: null, endIndex: null };
            let _Math5 = Math;
            obj[0] = Math.floor(sum / self.chunkSize);
            let _Math6 = Math;
            obj[1] = Math.floor((sum + tmp2.itemSize + padBottom) / self.chunkSize);
            iter.return();
            return obj;
          }
        } else if (tmp2.item >= targetItem) {
          iter.return();
        } else if (tmp2.item !== targetItem) {
          continue;
        } else {
          obj = { startIndex: null, endIndex: null };
          let _Math3 = Math;
          obj[0] = Math.floor((tmp2.layoutStart - tmp2.sectionData.layoutSize) / self.chunkSize);
          let _Math4 = Math;
          obj[1] = Math.floor((tmp2.layoutStart + tmp2.layoutSize + padBottom) / self.chunkSize);
          iter.return();
          return obj;
        }
        continue;
      }
      continue;
    } else {
      if (tmp3.SECTION !== type) {
        continue;
      } else if (null != targetItem) {
        continue;
      } else if (targetSection < tmp2.section) {
        iter.return();
      } else if (targetSection === tmp2.section) {
        obj = { startIndex: null, endIndex: null };
        let _Math = Math;
        obj[0] = Math.floor(tmp2.layoutStart / self.chunkSize);
        let _Math2 = Math;
        obj[1] = Math.floor((tmp2.layoutStart + tmp2.layoutSize + padBottom) / self.chunkSize);
        iter.return();
        return obj;
      }
      continue;
    }
    continue;
  }
};
prototype2["computeScrollPosition"] = function computeScrollPosition(arg0, arg1, arg2) {
  if (null == arg2) {
    const self = this;
    if (this.dirty) {
      self.fullCompute();
    }
    const dataCache = self.dataCache;
    if (arg1 < 0) {
      return { scrollPosition: 0, size: 0, sectionOffset: 0 };
    } else {
      const iter = dataCache[Symbol.iterator]();
      while (iter !== undefined) {
        let data = iter.next().data;
        for (const item10020 of data) {
          let type = item10020.type;
          if (obj.ITEM === type) {
            if (null != arg2) {
              if (true === item10020.uniform) {
                if (item10020.section === arg1) {
                  if (arg2 > item10020.items) {
                    obj.return();
                    iter.return();
                  } else {
                    obj = { scrollPosition: null, size: null, sectionOffset: null };
                    obj[0] = item10020.sectionData.layoutStart + item10020.sectionData.layoutSize + item10020.itemSize * arg2;
                    obj[1] = item10020.itemSize;
                    let num4 = 0;
                    if (arg0) {
                      num4 = item10020.sectionData.layoutSize;
                    }
                    obj[2] = num4;
                    obj.return();
                    iter.return();
                    return obj;
                  }
                }
              }
              if (null == item10020.uniform) {
                if (item10020.section === arg1) {
                  if (item10020.item === arg2) {
                    obj = { scrollPosition: null, size: null, sectionOffset: null };
                    ({ layoutStart: obj4[0], layoutSize: obj4[1] } = item10020);
                    let num3 = 0;
                    if (arg0) {
                      num3 = item10020.sectionData.layoutSize;
                    }
                    obj[2] = num3;
                    obj.return();
                    iter.return();
                    return obj;
                  }
                }
              }
            }
          } else {
            if (tmp8.SECTION === type) {
              if (item10020.section > arg1) {
                obj.return();
                iter.return();
              } else {
                if (null == arg2) {
                  if (item10020.section === arg1) {
                    obj1 = { scrollPosition: null, size: null, sectionOffset: 0 };
                    ({ layoutStart: obj2[0], layoutSize: obj2[1] } = item10020);
                    obj.return();
                    iter.return();
                    return obj1;
                  }
                }
                continue;
              }
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
  }
};
prototype2["getSectionItemFromPosition"] = function getSectionItemFromPosition(arg0) {
  obj = arg1;
  if (arg1 === undefined) {
    obj = map;
  }
  const self = this;
  if (this.dirty) {
    self.fullCompute();
  }
  let num = 0;
  let num2 = 0;
  const iter = self.items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    let sum = nextResult.layoutStart + num;
    let layoutSize = obj.get(nextResult.recyclerKey);
    let tmp7 = layoutSize;
    if (layoutSize == null) {
      layoutSize = tmp4.layoutSize;
    }
    if (layoutSize > 0) {
      if (arg0 >= sum) {
        if (arg0 <= sum + tmp9) {
          num2 = (arg0 - sum) / layoutSize;
          let tmp = nextResult;
          iter.return();
          break;
        }
        obj = { item: null, positionPercentage: null };
        obj[0] = tmp;
        obj[1] = num2;
        return obj;
      }
    }
    let num3 = 0;
    if (null != tmp7) {
      num3 = tmp7 - tmp4.layoutSize;
    }
    num = num + num3;
    continue;
  }
};
prototype2["setDisableRecycling"] = function setDisableRecycling(disableRecycling) {
  this.disableRecycling = disableRecycling;
};
prototype2["getSize"] = function getSize() {
  const self = this;
  if (this.dirty) {
    self.fullCompute();
  }
  return self.size;
};
prototype2["isDirty"] = function isDirty() {
  return this.dirty;
};
let closure_19 = { code: "function FastListTsx1(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}" };
let closure_20 = importAllResult.memo(function FastListStickySectionRendererComponent(children) {
  ({ layoutStart, layoutSize, horizontal } = children);
  ({ nextSectionLayoutPosition, scrollPosValue } = children);
  ({ fastListInstance, section, debug, recyclerKey } = children);
  let items = [-1, 0];
  const items1 = [0, 0];
  items.push(layoutStart);
  items1.push(0);
  if (nextSectionLayoutPosition == null) {
    nextSectionLayoutPosition = 0;
  }
  const diff = nextSectionLayoutPosition - layoutSize;
  if (diff >= layoutStart) {
    obj = horizontal(items[9]);
    let num2 = 0;
    if (obj.isAndroid()) {
      num2 = -1;
    }
    items.push(diff, diff + 1);
    items1.push(diff - layoutStart + num2, diff - layoutStart + num2);
  } else {
    items.push(layoutStart + 1);
    items1.push(1);
  }
  obj1 = horizontal(items[10]);
  class I {
    constructor() {
      obj = scrollPosValue;
      interpolateResult = null;
      if (null != scrollPosValue) {
        tmp2 = horizontal;
        tmp3 = closure_2;
        obj2 = horizontal(closure_2[10]);
        tmp4 = closure_2;
        tmp5 = closure_3;
        interpolateResult = obj2.interpolate(obj.get(), closure_2, closure_3);
      }
      if (null == interpolateResult) {
        obj = { transform: null };
        obj[0] = undefined;
        return obj;
      } else {
        tmp6 = horizontal;
        if (horizontal) {
          obj1 = { translateX: null };
          obj1[0] = interpolateResult;
          obj2 = obj1;
        } else {
          obj2 = { translateY: null };
          obj2[0] = interpolateResult;
        }
        items = [];
        items[0] = obj2;
        tmp7 = items;
      }
      return;
    }
  }
  obj = { scrollPosValue, interpolate: horizontal(items[10]).interpolate, inputRange: items, outputRange: items1, horizontal };
  I.__closure = obj;
  I.__workletHash = 699810682881;
  I.__initData = closure_19;
  const Children = importAllResult.Children;
  const animatedStyle = obj1.useAnimatedStyle(I);
  const onlyResult = Children.only(children.children(section, fastListInstance, scrollPosValue, layoutStart));
  let style;
  if (null != onlyResult) {
    if ("props" in onlyResult) {
      style = onlyResult.props.style;
    }
  }
  const items2 = [style, , ];
  let tmp15;
  if (!horizontal) {
    tmp15 = layoutSize;
  }
  obj = { zIndex: 10, position: "relative", height: tmp15, width: null };
  let tmp16;
  if (horizontal) {
    tmp16 = layoutSize;
  }
  obj1 = { style: items2, collapsable: false, children: null };
  obj[3] = tmp16;
  items2[1] = obj;
  items2[2] = animatedStyle;
  let cloneElementResult;
  if (null != onlyResult) {
    const obj2 = { style: null };
    obj2[0] = { flex: 1 };
    cloneElementResult = importAllResult.cloneElement(onlyResult, obj2);
  }
  const items3 = [cloneElementResult, false];
  obj1[2] = items3;
  return callback(scrollPosValue(items[11]), obj1);
});
let closure_21 = importAllResult.memo(function _FastListSectionRenderer(disableWrapper) {
  ({ layoutSize, children, fastListInstance, section, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    if (!disableWrapper.debug) {
      obj = { children: null };
      obj[0] = children(section, fastListInstance);
      return callback3(closure_12, obj);
    }
  }
  if (horizontal) {
    obj = { width: null };
    obj[0] = layoutSize;
  } else {
    obj = { height: null };
    obj[0] = layoutSize;
  }
  obj1 = { collapsable: false, style: obj, preventClipping: true, children: null };
  fastListInstance = children(section, fastListInstance);
  section = [fastListInstance, false];
  obj1[3] = section;
  callback(obj132Default, obj1);
});
let closure_22 = importAllResult.memo(function _FastListSectionFooterRenderer(disableWrapper) {
  ({ layoutSize, fastListInstance, children, section, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    if (!disableWrapper.debug) {
      obj = { children: null };
      obj[0] = children(section, fastListInstance);
      return callback3(closure_12, obj);
    }
  }
  if (horizontal) {
    obj = { width: null };
    obj[0] = layoutSize;
  } else {
    obj = { height: null };
    obj[0] = layoutSize;
  }
  obj1 = { collapsable: false, style: obj, children: null };
  children = children(section, fastListInstance);
  section = [children, false];
  obj1[2] = section;
  callback(obj132Default, obj1);
});
let closure_23 = importAllResult.memo(function _FastListItemRenderer(disableWrapper) {
  ({ layoutSize, children, section, fastListInstance, item, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    if (!disableWrapper.debug) {
      if (children != null) {
        let childrenResult = children(section, item, fastListInstance);
      }
    }
    return childrenResult;
  }
  if (horizontal) {
    obj = { width: null };
    obj[0] = layoutSize;
  } else {
    obj = { height: null };
    obj[0] = layoutSize;
  }
  obj = { collapsable: false, style: obj, children: null };
  let childrenResult1;
  if (children != null) {
    childrenResult1 = children(section, item, fastListInstance);
  }
  const items = [childrenResult1, false];
  obj[2] = items;
  childrenResult = callback(obj132Default, obj);
});
let closure_24 = importAllResult.memo(function _FastListHeaderFooterRenderer(disableWrapper) {
  ({ layoutSize, children, fastListInstance, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    if (!disableWrapper.debug) {
      obj = { children: null };
      obj[0] = children(fastListInstance);
      return callback3(closure_12, obj);
    }
  }
  if (horizontal) {
    obj = { width: null };
    obj[0] = layoutSize;
  } else {
    obj = { height: null };
    obj[0] = layoutSize;
  }
  obj1 = { collapsable: false, style: obj, preventClipping: true, children: null };
  children = children(fastListInstance);
  fastListInstance = [children, false];
  obj1[3] = fastListInstance;
  callback(obj132Default, obj1);
});
let closure_25 = importAllResult.memo(function _FastListSpacer(layoutSize) {
  layoutSize = layoutSize.layoutSize;
  if (layoutSize.horizontal) {
    obj = { width: null };
    obj[0] = layoutSize;
    let style = obj;
  } else {
    style = { height: null };
    style[0] = layoutSize;
  }
  return callback2(obj132Default, { collapsable: false, style });
});
let c26 = 1000;
let c27 = 0.5;
class FastListScrollAnchor {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.getScrollPosition = global;
    return obj;
  }
}
const prototype3 = FastListScrollAnchor.prototype;
prototype3["hasAnchor"] = function hasAnchor() {
  return null != this.anchorId;
};
prototype3["cleanAnchor"] = function cleanAnchor(arg0) {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const self = this;
  let isCustomAnchor = !flag;
  if (!flag) {
    isCustomAnchor = self.isCustomAnchor;
  }
  if (!isCustomAnchor) {
    self.isCustomAnchor = false;
    self.anchorId = undefined;
    self.anchorOffset = undefined;
  }
};
prototype3["handleUserScroll"] = function handleUserScroll() {
  this.cleanAnchor(true);
};
prototype3["setCustomAnchor"] = function setCustomAnchor(getAnchorIdFromIndex, anchorOffset, section, item) {
  const self = this;
  this.isCustomAnchor = true;
  this.anchorOffset = anchorOffset;
  this.anchorId = getAnchorIdFromIndex(section, item);
  if (null == this.anchorId) {
    self.cleanAnchor(true);
  }
};
prototype3["findOrUpdateAnchor"] = function findOrUpdateAnchor(getAnchorIdFromIndex, items) {
  const self = this;
  const scrollPosition = this.getScrollPosition();
  this.cleanAnchor();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp4 = nextResult;
    if (nextResult.type === obj.ITEM) {
      if (self.isCustomAnchor) {
        let num = tmp4.item;
        if (num == null) {
          num = 0;
        }
        if (self.anchorId === getAnchorIdFromIndex(tmp4.section, num)) {
          self.anchorOffset = nextResult.layoutStart - scrollPosition;
          iter.return();
        }
      }
      if (!self.isCustomAnchor) {
        if (tmp4.layoutStart >= scrollPosition) {
          self.anchorOffset = tmp4.layoutStart - scrollPosition;
          ({ item, section } = tmp4);
          if (item == null) {
            item = 0;
          }
          self.anchorId = getAnchorIdFromIndex(section, item);
          iter.return();
        }
      }
    }
    continue;
  }
};
prototype3["getAnchorIndex"] = function getAnchorIndex(getAnchorIndexFromId) {
  const self = this;
  if (null != this.anchorId) {
    self.cleanAnchor();
    return getAnchorIndexFromId(self.anchorId);
  }
};
const PureComponent = importAllResult.PureComponent;
class FastList extends PureComponent {
  constructor(arg0) {
    tmp = new tmp(global, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    tmp.containerSize = 0;
    tmp.scrollPos = 0;
    obj2 = require("createFakeSharedValue");
    tmp.scrollPosValue = require("../../index.native.tsx");
    manualRef = tmp.props.manualRef;
    if (manualRef == null) {
      tmp8 = closure_6;
      manualRef = closure_6.createRef();
    }
    tmp.scrollView = manualRef;
    tmp.getItems = function getItems() {
      return lib.state.items;
    };
    tmp.getScrollPosition = function getScrollPosition(nativeElementReference) {
      return lib.scrollPos;
    };
    tmp.disableAnchoringTimeout = undefined;
    tmp.deferredCompute = -1;
    tmp.deferNextCompute = false;
    tmp9 = FastListScrollAnchor;
    if (typeof FastListScrollAnchor !== "function") {
      str5 = "Trying to call a non-function";
      throwTypeErrorResult = HermesBuiltin.throwTypeError();
    }
    obj = Object.create(tmp9.prototype);
    obj.getScrollPosition = tmp.getScrollPosition;
    tmp.scrollAnchor = obj;
    tmp.viewabilityDebounce = -1;
    tmp.previouslyViewableItems = [];
    tmp._scrollPositionToPoint = function _scrollPositionToPoint(result) {
      const horizontal = lib.props.horizontal;
      let num = 0;
      if (horizontal) {
        num = result;
      }
      obj = { x: num, y: null };
      let num2 = 0;
      if (!horizontal) {
        num2 = result;
      }
      obj[1] = num2;
      return obj;
    };
    tmp._calculateScrollPosition = function _calculateScrollPosition(paddingStart) {
      ({ itemCoords, orientation } = paddingStart);
      if (orientation === undefined) {
        orientation = "top";
      }
      let num = paddingStart.paddingStart;
      if (num === undefined) {
        num = 0;
      }
      let num2 = paddingStart.paddingEnd;
      if (num2 === undefined) {
        num2 = 0;
      }
      ({ scrollPosition, size, sectionOffset } = itemCoords);
      if (lib.containerSize > 0) {
        let num3 = lib.containerSize;
      } else {
        num3 = lib.props.chunkBase;
        if (num3 == null) {
          num3 = 0;
        }
      }
      if (size >= num3) {
        orientation = "top";
      }
      if ("visible" === orientation) {
        if (scrollPosition + sectionOffset >= lib.scrollPos + num) {
          if (scrollPosition + size <= lib.scrollPos + (num3 - num2)) {
            return null;
          }
        }
        if (size <= num3) {
          if (scrollPosition >= lib.scrollPos) {
            let diff = scrollPosition + size + num2 - num3;
          }
        }
        diff = scrollPosition - (sectionOffset + num);
      } else if ("top" === orientation) {
        diff = scrollPosition - (sectionOffset + num);
      } else {
        diff = scrollPosition;
        if ("center" === orientation) {
          const _Math = Math;
          const _Math2 = Math;
          const sum = itemCoords.scrollPosition + Math.floor(itemCoords.size / 2);
          diff = sum - Math.floor(num3 / 2);
        }
      }
      return Math.max(0, Math.min(diff, paddingStart.fullSize - num3));
    };
    props = tmp.props;
    num = props.chunkBase;
    obj1 = { headerSize: props.headerSize, footerSize: props.footerSize, sectionSize: props.sectionSize, itemSize: props.itemSize, sectionFooterSize: props.sectionFooterSize, sections: props.sections, insetStart: props.insetStart, insetEnd: props.insetEnd, stickyHeaderFooter: props.stickyHeaderFooter, getRecyclerKey: props.getRecyclerKey, persistantKeys: props.persistantKeys, disableRecyclingOnFullCompute: props.disableRecyclingOnFullCompute };
    tmp11 = FastListComputer;
    if (typeof FastListComputer !== "function") {
      str6 = "Trying to call a non-function";
      throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
    }
    obj2 = Object.create(tmp11.prototype);
    obj2[2] = [];
    obj2[7] = [];
    obj2[8] = [];
    obj2.props = obj1;
    updatePropsResult = obj2.updateProps(obj1);
    if (num == null) {
      num = 0;
    }
    tmp.state = tmp.getInitialState(num, obj2, true);
    tmp.handleViewabilityChange = function handleViewabilityChange() {
      const onViewableItemsChanged = lib.props.onViewableItemsChanged;
      if (null != onViewableItemsChanged) {
        const sum = lib.scrollPos + lib.containerSize;
        const items = [];
        const iter = items[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp5 = nextResult;
          if (nextResult.layoutStart > sum) {
            iter.return();
            break;
          } else {
            let _Math = Math;
            let bound = Math.max(tmp5.layoutStart, tmp22);
            let _Math2 = Math;
            let tmp8 = bound;
            let bound1 = Math.min(tmp5.layoutStart + tmp5.layoutSize, sum);
            if (bound < bound1) {
              if ((tmp10 - tmp8) / tmp5.layoutSize >= tmp21) {
                let arr = items.push(tmp5.recyclerKey);
              }
            }
            continue;
          }
          obj = lib(dependencyMap[6]);
          if (!obj.areArraysShallowEqual(items, lib.previouslyViewableItems)) {
            lib.previouslyViewableItems = items;
            let result = onViewableItemsChanged(items);
          }
        }
      }
    };
    tmp.isVisible = function isVisible(arg0) {
      let num = arg1;
      if (arg1 === undefined) {
        num = 0;
      }
      let num2 = arg2;
      if (arg2 === undefined) {
        num2 = 0;
      }
      return arg0 >= lib.scrollPos + num && arg0 <= lib.scrollPos + lib.containerSize - num2;
    };
    tmp.scrollToTop = function scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const scrollView = lib.scrollView;
      if (scrollView != null) {
        const current = scrollView.current;
        if (current != null) {
          obj = { x: 0, y: 0, animated: null };
          obj[2] = flag;
          current.scrollTo(obj);
        }
      }
    };
    tmp.scrollToLocation = function scrollToLocation(orientation) {
      ({ section, item, animated } = orientation);
      if (animated === undefined) {
        animated = false;
      }
      let str = orientation.orientation;
      if (str === undefined) {
        str = "top";
      }
      let num = orientation.paddingStart;
      if (num === undefined) {
        num = 0;
      }
      let num2 = orientation.paddingEnd;
      if (num2 === undefined) {
        num2 = 0;
      }
      let flag = orientation.setAnchor;
      if (flag === undefined) {
        flag = false;
      }
      obj = lib;
      const current = lib.scrollView.current;
      if (null == current) {
        return false;
      } else {
        ({ getAnchorIdFromIndex, stickySectionsVariant } = obj.props);
        let str2 = "default";
        if (undefined !== stickySectionsVariant) {
          str2 = stickySectionsVariant;
        }
        const fastListComputer = obj.state.fastListComputer;
        const scrollPosition = fastListComputer.computeScrollPosition("default" === str2, section, item);
        if (null == scrollPosition) {
          return false;
        } else {
          if ("visible" === str) {
            if (obj.isVisible(scrollPosition.scrollPosition, num, num2)) {
              return false;
            }
          }
          obj = { itemCoords: null, fullSize: null, orientation: null, paddingStart: null, paddingEnd: null };
          obj[0] = scrollPosition;
          obj[1] = fastListComputer.getSize();
          obj[2] = str;
          obj[3] = num;
          obj[4] = num2;
          const result = obj._calculateScrollPosition(obj);
          let tmp3 = !animated;
          if (!animated) {
            tmp3 = flag;
          }
          if (tmp3) {
            tmp3 = null != getAnchorIdFromIndex;
          }
          if (tmp3) {
            const scrollAnchor = obj.scrollAnchor;
            let num3 = result;
            if (result == null) {
              num3 = 0;
            }
            scrollAnchor.setCustomAnchor(getAnchorIdFromIndex, scrollPosition.scrollPosition - num3, section, item);
          }
          let flag2 = null != result && result !== obj.scrollPos;
          if (flag2) {
            if (!animated) {
              obj.scrollPos = result;
              const blocks = obj.computeBlocks();
            }
            obj = {};
            const merged = Object.assign(obj._scrollPositionToPoint(result));
            obj.animated = animated;
            current.scrollTo(obj);
            flag2 = true;
          }
          return flag2;
        }
      }
    };
    tmp.scrollTo = function scrollTo(result) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      obj = lib;
      const current = lib.scrollView.current;
      const fastListComputer = lib.state.fastListComputer;
      let tmp = null != current;
      if (tmp) {
        let flag2 = result <= fastListComputer.getSize() - obj.containerSize && result !== obj.scrollPos;
        if (flag2) {
          obj = {};
          const merged = Object.assign(obj._scrollPositionToPoint(result));
          obj.animated = flag;
          current.scrollTo(obj);
          flag2 = true;
        }
        tmp = flag2;
      }
      return tmp;
    };
    tmp.handleScroll = function handleScroll(nativeEvent) {
      obj = lib;
      ({ contentInset, horizontal, onScroll, onEndReached, endReachedThreshold, EXPERIMENTAL_enableAnchorWhileScrolling } = lib.props);
      ({ fastListComputer, hasReachedEndBefore } = obj.state);
      const layoutMeasurement = nativeEvent.nativeEvent.layoutMeasurement;
      const tmp2 = horizontal ? layoutMeasurement.width : layoutMeasurement.height;
      let num = horizontal ? contentInset.left : contentInset.top;
      if (num == null) {
        num = 0;
      }
      let num2 = horizontal ? contentInset.right : contentInset.bottom;
      if (num2 == null) {
        num2 = 0;
      }
      obj.containerSize = tmp2 - num - num2;
      const bound = Math.max(0, obj.getScrollPositionFromEvent(nativeEvent));
      const bound1 = Math.min(bound, fastListComputer.getSize() - obj.containerSize);
      obj.scrollPos = bound1;
      if (onScroll != null) {
        onScroll(nativeEvent);
      }
      if (obj.deferNextCompute) {
        obj.deferNextCompute = false;
        if (-1 !== obj.deferredCompute) {
          const _cancelAnimationFrame = cancelAnimationFrame;
          cancelAnimationFrame(obj.deferredCompute);
        }
        const _requestAnimationFrame = requestAnimationFrame;
        obj.deferredCompute = requestAnimationFrame(() => closure_0.computeBlocks());
      } else {
        const blocks = obj.computeBlocks();
      }
      if (!tmp) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj.disableAnchoringTimeout);
        const _setTimeout = setTimeout;
        obj.disableAnchoringTimeout = setTimeout(() => {
          clearTimeout(closure_0.disableAnchoringTimeout);
          closure_0.disableAnchoringTimeout = undefined;
        }, 100);
      }
      if (null != onEndReached) {
        const contentSize = nativeEvent.nativeEvent.contentSize;
        if (endReachedThreshold == null) {
          endReachedThreshold = 0;
        }
        const rounded = Math.ceil((horizontal ? contentSize.width : contentSize.height) - endReachedThreshold - tmp2);
        const _Math = Math;
        const rounded1 = Math.ceil(bound1);
        if (rounded1 >= rounded) {
          if (!hasReachedEndBefore) {
            obj.setState({ hasReachedEndBefore: true });
            obj = { distanceFromEnd: null };
            obj[0] = rounded1 - rounded;
            onEndReached(obj);
          }
        }
        let tmp15 = !tmp12;
        if (rounded1 < rounded) {
          tmp15 = hasReachedEndBefore;
        }
        if (tmp15) {
          obj.setState({ hasReachedEndBefore: false });
        }
      }
      const result = obj.queueViewabilityChange();
    };
    tmp.handleLayout = function handleLayout(nativeEvent) {
      const state = lib.state;
      const fastListComputer = state.fastListComputer;
      ({ contentInset, onLayout, horizontal, chunkBase } = lib.props);
      const layout = nativeEvent.nativeEvent.layout;
      let num = horizontal ? contentInset.left : contentInset.top;
      if (num == null) {
        num = 0;
      }
      let num2 = horizontal ? contentInset.right : contentInset.bottom;
      if (num2 == null) {
        num2 = 0;
      }
      lib.containerSize = (horizontal ? layout.width : layout.height) - num - num2;
      if (null == chunkBase) {
        fastListComputer.setInfo(lib.containerSize);
      }
      if (onLayout != null) {
        onLayout(nativeEvent, lib);
      }
      if (state.isFirstLayout) {
        if (null == chunkBase) {
          lib.setState(lib.getInitialState(lib.containerSize, fastListComputer, false));
        }
        const result = lib.queueViewabilityChange();
      }
      const blocks = lib.computeBlocks();
    };
    tmp.handleMomentumScrollEnd = function handleMomentumScrollEnd(arg0) {
      const onScrollEnd = lib.props.onScrollEnd;
      if (onScrollEnd != null) {
        onScrollEnd(arg0);
      }
    };
    tmp.handleScrollBeginDrag = function handleScrollBeginDrag(arg0) {
      const scrollAnchor = lib.scrollAnchor;
      scrollAnchor.handleUserScroll();
      const props = lib.props;
      const onScrollBeginDrag = props.onScrollBeginDrag;
      if (onScrollBeginDrag != null) {
        onScrollBeginDrag(arg0);
      }
    };
    props2 = tmp.props;
    ({ getAnchorIdFromIndex, getAnchorIndexFromId } = props2);
    if (props2.batchesToRender < 5) {
      tmp29 = globalThis;
      _Error4 = Error;
      tmp30 = new.target;
      str4 = "FastList: `batchesToRender` must be >= 6";
      tmp31 = new.target;
      error = new Error("FastList: `batchesToRender` must be >= 6");
      tmp33 = error;
      throw error;
    } else {
      if (null != getAnchorIdFromIndex) {
        if (null != getAnchorIdFromIndex) {
        }
        tmp13 = globalThis;
        _Error = Error;
        tmp14 = new.target;
        str = "FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither";
        tmp15 = new.target;
        error1 = new Error("FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither");
        tmp17 = error1;
        throw error1;
      }
      viewabilityConfig = tmp.getViewabilityConfig();
      if (viewabilityConfig.minimumViewTime <= 0) {
        tmp24 = globalThis;
        _Error3 = Error;
        tmp25 = new.target;
        str3 = "FastList: `viewabilityConfig.minimumViewTime` must be greater than 0";
        tmp26 = new.target;
        error2 = new Error("FastList: `viewabilityConfig.minimumViewTime` must be greater than 0");
        tmp28 = error2;
        throw error2;
      } else {
        if (viewabilityConfig.visibilityThreshold > 0) {
          num2 = 1;
          if (viewabilityConfig.visibilityThreshold <= 1) {
            return tmp;
          }
        }
        tmp19 = globalThis;
        _Error2 = Error;
        tmp20 = new.target;
        str2 = "FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1";
        tmp21 = new.target;
        error3 = new Error("FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1");
        tmp23 = error3;
        throw error3;
      }
    }
  }
}
const prototype4 = FastList.prototype;
FastList["getDerivedStateFromProps"] = function getDerivedStateFromProps(headerSize, fastListComputer) {
  fastListComputer = fastListComputer.fastListComputer;
  obj = { headerSize: headerSize.headerSize, footerSize: headerSize.footerSize, sectionSize: headerSize.sectionSize, itemSize: headerSize.itemSize, sectionFooterSize: headerSize.sectionFooterSize, sections: headerSize.sections, insetStart: headerSize.insetStart, insetEnd: headerSize.insetEnd, stickyHeaderFooter: headerSize.stickyHeaderFooter, getRecyclerKey: headerSize.getRecyclerKey, persistantKeys: headerSize.persistantKeys, disableRecyclingOnFullCompute: headerSize.disableRecyclingOnFullCompute };
  fastListComputer.updateProps(obj);
  if (0 === fastListComputer.batchSize) {
    obj = {};
    const merged = Object.assign(fastListComputer);
    let num = headerSize.insetStart;
    if (num == null) {
      num = 0;
    }
    let num2 = headerSize.insetEnd;
    if (num2 == null) {
      num2 = 0;
    }
    obj.size = num + num2;
    obj.items = [];
    let tmp3 = obj;
  } else {
    tmp3 = null;
    if (fastListComputer.isDirty()) {
      obj = {};
      const merged1 = Object.assign(fastListComputer);
      let items = fastListComputer.items;
      ({ blockStart, blockEnd } = fastListComputer);
      if (items == null) {
        items = [];
      }
      const merged2 = Object.assign(fastListComputer.compute(blockStart, blockEnd, items));
      tmp3 = obj;
    }
  }
  return tmp3;
};
prototype4["computeScrollPosition"] = function computeScrollPosition(arg0, arg1) {
  const fastListComputer = this.state.fastListComputer;
  return fastListComputer.computeScrollPosition(false, arg0, arg1);
};
prototype4["getInitialState"] = function getInitialState(result, setInfo, isFirstLayout) {
  let items = arg3;
  if (arg3 === undefined) {
    items = [];
  }
  const self = this;
  const props = this.props;
  ({ batchesToRender, initialScrollSection } = props);
  let num = 0;
  if (undefined !== initialScrollSection) {
    num = initialScrollSection;
  }
  ({ initialScrollItem, initialScrollOrientation } = props);
  let str = "visible";
  if (undefined !== initialScrollOrientation) {
    str = initialScrollOrientation;
  }
  ({ initialScrollStart, stickySectionsVariant } = props);
  let str2 = "default";
  if (undefined !== stickySectionsVariant) {
    str2 = stickySectionsVariant;
  }
  const horizontal = props.horizontal;
  const scrollPosValue = props.scrollPosValue;
  setInfo.setInfo(result);
  let num2 = initialScrollStart;
  if (initialScrollStart == null) {
    num2 = 0;
  }
  if (null != initialScrollStart) {
    let point = self._scrollPositionToPoint(initialScrollStart);
    let tmp3 = num2;
  } else if (num > 0) {
    tmp3 = num2;
    if (result > 0) {
      const scrollPosition = setInfo.computeScrollPosition("default" === str2, num, initialScrollItem);
      tmp3 = num2;
      if (null != scrollPosition) {
        obj = { itemCoords: null, fullSize: null, orientation: null, paddingEnd: 16 };
        obj[0] = scrollPosition;
        obj[1] = setInfo.getSize();
        obj[2] = str;
        result = self._calculateScrollPosition(obj);
        let diff = result;
        if (result == null) {
          diff = scrollPosition.scrollPosition - scrollPosition.sectionOffset;
        }
        tmp3 = diff;
        if (null != result) {
          point = self._scrollPositionToPoint(result);
          tmp3 = diff;
        }
      }
    }
  } else {
    tmp3 = num2;
  }
  if (isFirstLayout) {
    if (result > 0) {
      if (0 === result) {
        obj = { batchSize: 0, blockStart: 0, blockEnd: 0 };
      } else {
        const _Math = Math;
        const rounded = Math.ceil(result);
        const _Math2 = Math;
        const _Math3 = Math;
        const rounded1 = Math.floor(tmp3);
        const rounded2 = Math.ceil(rounded / 4);
        const _Math4 = Math;
        const _Math5 = Math;
        const result1 = Math.max(0, Math.round((rounded1 + rounded / 2) / rounded2) - batchesToRender / 2) * rounded2;
        obj = { batchSize: null, blockStart: null, blockEnd: null };
        obj[0] = rounded2;
        obj[1] = result1;
        obj[2] = result1 + rounded2 * batchesToRender;
      }
      ({ batchSize, blockStart, blockEnd } = obj);
    }
  }
  const sum = tmp3 + result;
  const rounded3 = Math.ceil(result / 4);
  if (point == null) {
    point = { x: 0, y: 0 };
  }
  const tmp10 = undefined !== horizontal && horizontal ? point.x : point.y;
  self.scrollPos = tmp10;
  if (null != scrollPosValue) {
    const result2 = scrollPosValue.set(tmp10);
    self.scrollPosValue = scrollPosValue;
  } else {
    self.scrollPosValue = _mod4115.makeMutable(tmp10);
  }
  if (result > 0) {
    let computeResult = setInfo.compute(tmp3, sum, items, true);
  } else {
    computeResult = { size: 0, items: null };
    computeResult[1] = [];
  }
  obj = {};
  const merged = Object.assign(computeResult);
  obj.batchSize = rounded3;
  obj.blockStart = tmp3;
  obj.blockEnd = sum;
  obj.isFirstLayout = isFirstLayout;
  obj.fastListComputer = setInfo;
  obj.initialContentOffset = point;
  obj.hasReachedEndBefore = false;
  return obj;
};
prototype4["componentDidMount"] = function componentDidMount() {
  const result = this.queueViewabilityChange();
};
prototype4["getSnapshotBeforeUpdate"] = function getSnapshotBeforeUpdate(getAnchorIdFromIndex, isFirstLayout) {
  const self = this;
  getAnchorIdFromIndex = getAnchorIdFromIndex.getAnchorIdFromIndex;
  const EXPERIMENTAL_enableAnchorWhileScrolling = this.props.EXPERIMENTAL_enableAnchorWhileScrolling;
  isFirstLayout = self.state.isFirstLayout;
  if (tmp) {
    let tmp4 = null == getAnchorIdFromIndex || isFirstLayout;
    if (!tmp4) {
      tmp4 = isFirstLayout !== isFirstLayout.isFirstLayout;
    }
    if (!tmp4) {
      const scrollAnchor = self.scrollAnchor;
      scrollAnchor.findOrUpdateAnchor(getAnchorIdFromIndex, isFirstLayout.items);
    }
    const scrollAnchor2 = self.scrollAnchor;
    let tmp2 = scrollAnchor2.hasAnchor() || null;
    const tmp7 = scrollAnchor2.hasAnchor() || null;
  } else {
    tmp2 = null;
  }
  return tmp2;
};
prototype4["componentDidUpdate"] = function componentDidUpdate(scrollPosValue, isFirstLayout) {
  const self = this;
  if (scrollPosValue.scrollPosValue !== this.props.scrollPosValue) {
    const _Error = Error;
    error = new Error("FastList: scrollPosValue cannot changed after mounting");
    throw error;
  } else {
    if (!self.state.isFirstLayout) {
      if (isFirstLayout.isFirstLayout) {
        if (null == self.props.chunkBase) {
          const current = self.scrollView.current;
          if (current != null) {
            current.measure(() => self.restoreScrollPosition());
          }
        }
      }
      if (self.state.items !== isFirstLayout.items) {
        const result = self.queueViewabilityChange();
      }
    }
    if (arg2) {
      self.anchorScroll();
    }
  }
};
prototype4["getViewabilityConfig"] = function getViewabilityConfig() {
  const viewabilityConfig = this.props.viewabilityConfig;
  let minimumViewTime;
  if (viewabilityConfig != null) {
    minimumViewTime = viewabilityConfig.minimumViewTime;
  }
  if (minimumViewTime == null) {
    minimumViewTime = c26;
  }
  obj = { minimumViewTime, visibilityThreshold: null };
  let visibilityThreshold;
  if (viewabilityConfig != null) {
    visibilityThreshold = viewabilityConfig.visibilityThreshold;
  }
  if (visibilityThreshold == null) {
    visibilityThreshold = c27;
  }
  obj[1] = visibilityThreshold;
  return obj;
};
prototype4["queueViewabilityChange"] = function queueViewabilityChange() {
  const self = this;
  if (null != this.props.onViewableItemsChanged) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.viewabilityDebounce);
    const _setTimeout = setTimeout;
    self.viewabilityDebounce = setTimeout(self.handleViewabilityChange, self.getViewabilityConfig().minimumViewTime);
  }
};
prototype4["reset"] = function reset() {
  const self = this;
  let num = this.props.chunkBase;
  const state = this.state;
  ({ fastListComputer, items } = state);
  if (!state.isFirstLayout) {
    ({ setState, getInitialState } = self);
    if (num == null) {
      num = 0;
    }
    setState(getInitialState(num, fastListComputer, false, items));
  }
};
prototype4["componentWillUnmount"] = function componentWillUnmount() {
  const self = this;
  if (-1 !== this.deferredCompute) {
    const _cancelAnimationFrame = cancelAnimationFrame;
    cancelAnimationFrame(self.deferredCompute);
  }
  if (-1 !== self.viewabilityDebounce) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.viewabilityDebounce);
  }
};
prototype4["anchorScroll"] = function anchorScroll() {
  const self = this;
  ({ getAnchorIndexFromId, stickySectionsVariant } = this.props);
  let str = "default";
  if (undefined !== stickySectionsVariant) {
    str = stickySectionsVariant;
  }
  const fastListComputer = self.state.fastListComputer;
  if (null != getAnchorIndexFromId) {
    const anchorOffset = self.scrollAnchor.anchorOffset;
    if (null != anchorOffset) {
      const scrollAnchor = self.scrollAnchor;
      const anchorIndex = scrollAnchor.getAnchorIndex(getAnchorIndexFromId);
      if (null != anchorIndex) {
        const scrollPosition = fastListComputer.computeScrollPosition("default" === str, anchorIndex.section, anchorIndex.item);
        if (tmp3) {
          self.scrollTo(scrollPosition.scrollPosition - anchorOffset);
        }
        tmp3 = null != scrollPosition && self.scrollPos !== scrollPosition.scrollPosition - anchorOffset;
      }
    }
  }
};
prototype4["getSectionItemFromPosition"] = function getSectionItemFromPosition(arg0, arg1) {
  const fastListComputer = this.state.fastListComputer;
  return fastListComputer.getSectionItemFromPosition(arg0, arg1);
};
prototype4["getScrollPositionFromEvent"] = function getScrollPositionFromEvent(nativeEvent) {
  const contentOffset = nativeEvent.nativeEvent.contentOffset;
  return this.props.horizontal ? contentOffset.x : contentOffset.y;
};
prototype4["restoreScrollPosition"] = function restoreScrollPosition() {
  const self = this;
  const props = this.props;
  ({ initialScrollItem, initialScrollSection } = props);
  let num = 0;
  if (undefined !== initialScrollSection) {
    num = initialScrollSection;
  }
  const initialScrollOrientation = props.initialScrollOrientation;
  let str = "visible";
  if (undefined !== initialScrollOrientation) {
    str = initialScrollOrientation;
  }
  const initialScrollStart = props.initialScrollStart;
  if (null == initialScrollItem) {
    if (num <= 0) {
      if (null == initialScrollStart) {
        const blocks = self.computeBlocks();
      }
    }
  }
  if (null != initialScrollStart) {
    self.scrollTo(initialScrollStart, false);
  } else {
    obj = { section: null, item: null, orientation: null, paddingEnd: 16, setAnchor: true };
    obj[0] = num;
    if (initialScrollItem == null) {
      initialScrollItem = -1;
    }
    obj[1] = initialScrollItem;
    obj[2] = str;
    if (self.scrollToLocation(obj)) {
      self.deferNextCompute = true;
    } else {
      const scrollPosValue = self.scrollPosValue;
      const result = scrollPosValue.set(0);
      if (-1 !== self.deferredCompute) {
        const _cancelAnimationFrame = cancelAnimationFrame;
        cancelAnimationFrame(self.deferredCompute);
      }
      const _requestAnimationFrame = requestAnimationFrame;
      self.deferredCompute = requestAnimationFrame(() => self.computeBlocks());
    }
  }
};
prototype4["computeBlocks"] = function computeBlocks() {
  const self = this;
  ({ batchesToRender, chunkBase } = this.props);
  const state = this.state;
  const fastListComputer = state.fastListComputer;
  ({ isFirstLayout, items } = state);
  if (chunkBase == null) {
    chunkBase = self.containerSize;
  }
  if (0 === chunkBase) {
    obj = { batchSize: 0, blockStart: 0, blockEnd: 0 };
  } else {
    const _Math = Math;
    const rounded = Math.ceil(chunkBase);
    const _Math2 = Math;
    const _Math3 = Math;
    const rounded1 = Math.floor(tmp);
    const rounded2 = Math.ceil(rounded / 4);
    const _Math4 = Math;
    const _Math5 = Math;
    const result = Math.max(0, Math.round((rounded1 + rounded / 2) / rounded2) - batchesToRender / 2) * rounded2;
    obj = { batchSize: null, blockStart: null, blockEnd: null };
    obj[0] = rounded2;
    obj[1] = result;
    obj[2] = result + rounded2 * batchesToRender;
  }
  if (obj.batchSize === self.state.batchSize) {
    if (obj.blockStart === self.state.blockStart) {
      if (obj.blockEnd === self.state.blockEnd) {
        if (isFirstLayout) {
          self.setState({ isFirstLayout: false });
        }
      }
    }
  }
  obj = {};
  const merged = Object.assign(obj);
  const merged1 = Object.assign(fastListComputer.compute(obj.blockStart, obj.blockEnd, items));
  obj.isFirstLayout = false;
  self.setState(obj);
};
prototype4["renderItems"] = function renderItems() {
  const self = this;
  const props = this.props;
  const stickySectionsVariant = props.stickySectionsVariant;
  let str = "default";
  if (undefined !== stickySectionsVariant) {
    str = stickySectionsVariant;
  }
  let renderHeader = props.renderHeader;
  if (undefined === renderHeader) {
    renderHeader = renderDefaultEmpty;
  }
  let renderFooter = props.renderFooter;
  if (undefined === renderFooter) {
    renderFooter = renderDefaultEmpty;
  }
  let renderSection = props.renderSection;
  if (undefined === renderSection) {
    renderSection = renderDefaultEmpty;
  }
  const renderItem = props.renderItem;
  let renderSectionFooter = props.renderSectionFooter;
  if (undefined === renderSectionFooter) {
    renderSectionFooter = renderDefaultEmpty;
  }
  const optimizeListItemRender = props.optimizeListItemRender;
  const items = self.state.items;
  let flag = self.props.horizontal;
  if (flag == null) {
    flag = false;
  }
  const items1 = [];
  item = items.forEach((item, index) => {
    if (item.type === obj.SECTION) {
      items1.push(tmp);
    }
  });
  const items2 = [];
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    ({ type, key, layoutStart, recyclerKey, layoutSize } = nextResult);
    ({ section, item } = nextResult);
    if (0 !== layoutSize) {
      let tmp45 = obj;
      if (obj.SPACER === type) {
        obj = { horizontal: null, layoutSize: null };
        obj[0] = flag;
        obj[1] = layoutSize;
        let _HermesInternal7 = HermesInternal;
        let arr = items2.push(callback3(closure_25, obj, "" + key));
      } else if (tmp45.HEADER === type) {
        obj = { recyclerKey: null, horizontal: null, disableWrapper: null, fastListInstance: null, layoutSize: null, debug: false, children: null };
        obj[0] = recyclerKey;
        obj[1] = flag;
        obj[2] = tmp2;
        obj[3] = self;
        obj[4] = layoutSize;
        let fn6 = renderHeader;
        if (!tmp) {
          fn6 = () => renderHeader(...HermesBuiltin.copyRestArgs());
        }
        obj[6] = fn6;
        let _HermesInternal6 = HermesInternal;
        arr = items2.push(callback3(closure_24, obj, "" + key));
      } else if (tmp45.FOOTER === type) {
        obj1 = { recyclerKey: null, horizontal: null, disableWrapper: null, fastListInstance: null, layoutSize: null, debug: false, children: null };
        obj1[0] = recyclerKey;
        obj1[1] = flag;
        obj1[2] = tmp2;
        obj1[3] = self;
        obj1[4] = layoutSize;
        let fn5 = renderFooter;
        if (!tmp) {
          fn5 = () => renderFooter(...HermesBuiltin.copyRestArgs());
        }
        obj1[6] = fn5;
        let _HermesInternal5 = HermesInternal;
        let arr1 = items2.push(callback3(closure_24, obj1, "" + key));
      } else if (tmp45.SECTION === type) {
        let arr2 = items1.shift();
        if ("default" !== str) {
          let obj2 = { recyclerKey: null, horizontal: null, disableWrapper: null, layoutStart: null, layoutSize: null, fastListInstance: null, section: null, debug: false, children: null };
          obj2[0] = recyclerKey;
          obj2[1] = flag;
          obj2[2] = tmp2;
          obj2[3] = layoutStart;
          obj2[4] = layoutSize;
          obj2[5] = self;
          obj2[6] = section;
          let fn4 = renderSection;
          if (!tmp) {
            fn4 = () => renderSection(...HermesBuiltin.copyRestArgs());
          }
          obj2[8] = fn4;
          let _HermesInternal4 = HermesInternal;
          let arr3 = items2.push(callback3(closure_21, obj2, "" + key));
        } else {
          let obj3 = { recyclerKey: null, horizontal: null, disableWrapper: null, layoutStart: null, layoutSize: null, nextSectionLayoutPosition: null, scrollPosValue: null, fastListInstance: null, section: null, debug: false, children: null };
          obj3[0] = recyclerKey;
          obj3[1] = flag;
          obj3[2] = tmp2;
          obj3[3] = layoutStart;
          obj3[4] = layoutSize;
          obj3[5] = items1[0];
          obj3[6] = self.scrollPosValue;
          obj3[7] = self;
          obj3[8] = section;
          let fn3 = renderSection;
          if (!tmp) {
            fn3 = () => renderSection(...HermesBuiltin.copyRestArgs());
          }
          obj3[10] = fn3;
          let _HermesInternal3 = HermesInternal;
          let arr4 = items2.push(callback3(closure_20, obj3, "" + key));
        }
      } else if (tmp45.ITEM === type) {
        obj = { recyclerKey: null, horizontal: null, disableWrapper: null, layoutSize: null, fastListInstance: null, section: null, item: null, debug: false, children: null };
        obj[0] = recyclerKey;
        obj[1] = flag;
        obj[2] = tmp2;
        obj[3] = layoutSize;
        obj[4] = self;
        obj[5] = section;
        obj[6] = item;
        let fn2 = renderItem;
        if (!tmp) {
          fn2 = () => renderItem(...HermesBuiltin.copyRestArgs());
        }
        obj[8] = fn2;
        let _HermesInternal2 = HermesInternal;
        let arr5 = items2.push(callback3(closure_23, obj, "" + key));
      } else if (tmp45.SECTION_FOOTER === type) {
        let obj4 = { recyclerKey: null, horizontal: null, disableWrapper: null, fastListInstance: null, layoutSize: null, section: null, debug: false, children: null };
        obj4[0] = recyclerKey;
        obj4[1] = flag;
        obj4[2] = tmp2;
        obj4[3] = self;
        obj4[4] = layoutSize;
        obj4[5] = section;
        let fn = renderSectionFooter;
        if (!tmp) {
          fn = () => renderSectionFooter(...HermesBuiltin.copyRestArgs());
        }
        obj4[7] = fn;
        let _HermesInternal = HermesInternal;
        let arr6 = items2.push(callback3(closure_22, obj4, "" + key));
      }
    }
    continue;
  }
  return items2;
};
prototype4["isEmpty"] = function isEmpty() {
  const sections = this.props.sections;
  return 0 === sections.reduce((acc, item, index) => acc + item, 0);
};
prototype4["setDisableRecycling"] = function setDisableRecycling(arg0) {
  const fastListComputer = this.state.fastListComputer;
  fastListComputer.setDisableRecycling(arg0);
};
prototype4["render"] = function render() {
  const self = this;
  const props = this.props;
  ({ manualRef, onScroll, onScrollEnd, onLayout, renderHeader, renderFooter, renderSection, renderItem, renderSectionFooter, getRecyclerKey, onEndReached, endReachedThreshold, headerSize, footerSize, sectionSize, sectionFooterSize, itemSize, sections, scrollPosValue, batchesToRender, optimizeListItemRender, initialScrollSection, initialScrollItem, initialScrollOrientation, initialScrollStart, getAnchorIdFromIndex, getAnchorIndexFromId, EXPERIMENTAL_enableAnchorWhileScrolling, chunkBase, disableContentWrappers, childrenWrapper, stickyHeaderFooter, stickySectionsVariant, persistantKeys, disableRecyclingOnFullCompute, disableLegacyGestureHandling, viewabilityConfig, onViewableItemsChanged, debugLayout, renderAccessory, removeClippedSubviews } = props);
  if (undefined === removeClippedSubviews) {
    obj = obj132;
    removeClippedSubviews = obj.isAndroid();
  }
  if (props.inActionSheet) {
    let BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  } else {
    BottomSheetScrollView = closure_8;
  }
  obj = {};
  const merged = Object.assign(callback(props, closure_3));
  obj.accessibilityRole = "list";
  obj.ref = refObjectUnionAsPropDefault(self.scrollView);
  obj.scrollEventThrottle = 16;
  obj.contentOffset = self.state.initialContentOffset;
  ({ handleScroll: obj2.onScroll, handleLayout: obj2.onLayout, handleMomentumScrollEnd: obj2.onMomentumScrollEnd, handleScrollBeginDrag: obj2.onScrollBeginDrag } = self);
  obj.removeClippedSubviews = removeClippedSubviews;
  obj.children = self.renderItems();
  const children = [callback3(BottomSheetScrollView, obj), , ];
  obj = { scrollViewRef: self.scrollView, scrollPosValue: self.scrollPosValue, horizontal: null, onScrollWorklet: null };
  let flag = self.props.horizontal;
  if (flag == null) {
    flag = false;
  }
  obj[2] = flag;
  obj[3] = props.onScrollWorklet;
  children[1] = callback3(FastListScrollWorklet, obj);
  let renderAccessoryResult = null;
  if (null != renderAccessory) {
    renderAccessoryResult = renderAccessory(self);
  }
  children[2] = renderAccessoryResult;
  return callback(closure_12, { children });
};
FastList.defaultProps = { batchesToRender: 12, contentInset: { top: 0, right: 0, left: 0, bottom: 0 }, disableLegacyGestureHandling: false, disableRecyclingOnFullCompute: false, stickyHeaderFooter: false };
let closure_29 = { code: "function FastListTsx2(event){const{horizontal,workletMounted,scrollPosValue,onScrollWorklet}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get())return;workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));if(onScrollWorklet!=null){const layoutSize=!horizontal?event.layoutMeasurement.height:event.layoutMeasurement.width;onScrollWorklet(scrollPosition,contentSize,layoutSize);}}" };
const animatedComponent = importDefaultResult.createAnimatedComponent(FastList);
let result = require("obj132").fileFinishedImporting("lib/native/FastList.tsx");

export default FastList;
export const DEFAULT_BATCHES_TO_RENDER = 12;
export const MINIMUM_BATCHES_TO_RENDER = 5;
export const getItemSizeOverrideKey = function getItemSizeOverrideKey(arg0, arg1, arg2) {
  return "" + arg0 + ":" + arg1 + ":" + arg2;
};
export const FastListItemTypes = obj;
export { FastListComputer };
export const AnimatedFastList = animatedComponent;