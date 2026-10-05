// discord_app/lib/native/FastList.tsx
import _modDef12 from "../../../_runtime/metro/00012__.js";
import shallowEqual from "../../../discord_common/js/packages/shallow-equal/shallowEqual.tsx";
import PlatformUtils from "../../utils/PlatformUtils.tsx";
import ReanimatedRexport2 from "../../modules/reanimated/ReanimatedRexport.tsx";
import NativeViewDefault from "../../modules/core/native/NativeView.tsx";
import BottomSheetModal from "../../../_runtime/06112_BottomSheetModal.js";
import refObjectUnionAsPropDefault from "../../modules/typescript/refObjectUnionAsProp.tsx";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const shallowEqualDefault = shallowEqual;
const ReanimatedRexport = ReanimatedRexport2;
let obj1, scrollViewRef, set;

let StyleSheet;
let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function renderDefaultEmpty() {
  return null;
}
function defaultRecyclerKey() {}
let closure_3 = [
  "manualRef",
  "onScroll",
  "onScrollWorklet",
  "onScrollEnd",
  "onLayout",
  "renderHeader",
  "renderFooter",
  "renderSection",
  "renderItem",
  "renderSectionFooter",
  "getRecyclerKey",
  "onEndReached",
  "endReachedThreshold",
  "headerSize",
  "footerSize",
  "sectionSize",
  "sectionFooterSize",
  "itemSize",
  "sections",
  "scrollPosValue",
  "batchesToRender",
  "optimizeListItemRender",
  "initialScrollSection",
  "initialScrollItem",
  "initialScrollOrientation",
  "initialScrollStart",
  "getAnchorIdFromIndex",
  "getAnchorIndexFromId",
  "EXPERIMENTAL_enableAnchorWhileScrolling",
  "chunkBase",
  "disableContentWrappers",
  "childrenWrapper",
  "stickyHeaderFooter",
  "stickySectionsVariant",
  "persistantKeys",
  "disableRecyclingOnFullCompute",
  "disableLegacyGestureHandling",
  "viewabilityConfig",
  "onViewableItemsChanged",
  "debugLayout",
  "renderAccessory",
  "removeClippedSubviews",
  "inActionSheet",
];
({ PixelRatio: metroImportDefault, ScrollView: metroImportAll, StyleSheet, findNodeHandle: c9 } = react_native);
({ jsxs: c10, jsx: unpackModuleId, Fragment: closure_12 } = Fragment);
let map = new Map();
const FastListItemTypes = {
  SPACER: "SPACER",
  HEADER: "HEADER",
  FOOTER: "FOOTER",
  SECTION: "SECTION",
  ITEM: "ITEM",
  SECTION_FOOTER: "SECTION_FOOTER",
};
class FastListItemRecycler {
  constructor(arr) {
    obj = Object.create(new.target.prototype);
    obj._items = {};
    obj._pendingItems = {};
    const item = arr.forEach((recyclerKey) => {
      _slicedToArray(obj._itemsForType(recyclerKey.type), 1)[0][recyclerKey.recyclerKey] = recyclerKey;
    });
    return obj;
  }
  _itemsForType(type) {
    const self = this;
    let tmp = this._items[type];
    if (tmp == null) {
      obj = {};
      self._items[type] = obj;
      tmp = obj;
    }
    const items = [tmp];
    let tmp2 = self._pendingItems[type];
    if (tmp2 == null) {
      const items1 = [];
      self._pendingItems[type] = items1;
      tmp2 = items1;
    }
    items[1] = tmp2;
    return items;
  }
  get(type, layoutStart, layoutSize, customKey) {
    let num = arg4;
    if (arg4 === undefined) {
      num = 0;
    }
    let num2 = arg5;
    if (arg5 === undefined) {
      num2 = -1;
    }
    const tmp = _slicedToArray(this._itemsForType(type), 2);
    obj = { type, layoutStart, layoutSize, customKey, section: num, item: num2, items: tmp[0], pendingItems: tmp[1] };
    return this._get(obj);
  }
  _get(arg0) {
    let customKey;
    let item;
    let items;
    let layoutSize;
    let layoutStart;
    let pendingItems;
    let section;
    let type;
    ({ type, layoutStart, layoutSize, customKey, section, item, items, pendingItems } = arg0);
    if (customKey == null) {
      const _HermesInternal = HermesInternal;
      customKey = "" + type + ":" + section + ":" + item;
    }
    if (null == items[customKey]) {
      const obj2 = { type, key: -1, layoutStart, layoutSize, section, item, recyclerKey: customKey };
      pendingItems.push(obj2);
      obj = obj2;
    } else {
      obj = { layoutStart, layoutSize, section, item };
      const merged = Object.assign(tmp5);
      delete items[customKey];
    }
    return obj;
  }
  fill(arg0) {
    const self = this;
    let closure_0 = arg0;
    const arr = self(12);
    const item = arr.forEach(obj, (type) => {
      const tmp = _slicedToArray(self._itemsForType(type), 2);
      self._fill(tmp[0], tmp[1], closure_0);
    });
  }
  _fill(arg0, arg1, arg2) {
    let length;
    let sum1;
    let closure_0 = arg1;
    let closure_1 = 0;
    const tmp = arg2;
    if (!tmp) {
      const arr = _modDef12;
      const item = arr.forEach(arg0, (arg0) => {
        if (null == closure_0[closure_1]) {
          return false;
        } else {
          closure_0[closure_1].key = tmp;
          closure_1 = closure_1 + 1;
        }
      });
    }
    if (closure_1 < arg1.length) {
      do {
        let sum = FastListItemRecycler._LAST_KEY + 1;
        FastListItemRecycler._LAST_KEY = sum;
        arg1[closure_1].key = sum;
        sum1 = closure_1 + 1;
        closure_1 = sum1;
        length = arg1.length;
      } while (sum1 < length);
    }
    arg1.length = 0;
  }
}
const prototype = FastListItemRecycler.prototype;
FastListItemRecycler._LAST_KEY = 0;
class FastListComputer {
  constructor(props) {
    const merged = Object.assign({
      chunkSize: 0,
      uniform: false,
      dataCache: null,
      size: 0,
      dirty: true,
      lastStartChunk: -1,
      lastEndChunk: -1,
      items: null,
      persistantItemData: null,
      disableRecycling: false,
    });
    merged[2] = [];
    merged[7] = [];
    merged[8] = [];
    merged.props = props;
    merged.updateProps(props);
    return merged;
  }
  updateProps(props) {
    const self = this;
    const dirty = this.dirty || !shallowEqualDefault(props, self.props);
    self.dirty = dirty;
    self.props = props;
    self.uniform = typeof props.itemSize === "number";
  }
  setInfo(containerSize) {
    const self = this;
    const rounded = Math.ceil(containerSize / 4);
    self.dirty = this.dirty || rounded !== self.chunkSize;
    self.chunkSize = rounded;
  }
  getSizeForHeader() {
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
  }
  getSizeForFooter() {
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
  }
  getSizeForSection(arg0) {
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
  }
  getSizeForItem(arg0, arg1) {
    const itemSize = this.props.itemSize;
    let itemSizeResult = itemSize;
    if (typeof itemSize !== "number") {
      itemSizeResult = itemSize(arg0, arg1);
    }
    return itemSizeResult;
  }
  getSizeForSectionFooter(arg0) {
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
  }
  getChunk(arg0) {
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
      const sum = num + (((diff - num) / 2) | 0);
      let diff1 = diff;
      while (null != dataCache[sum]) {
        let sum1;
        if (arg0 >= tmp3.start) {
          if (arg0 <= tmp3.end) {
            self.chunkCache = tmp3;
            return tmp3;
          }
        }
        if (arg0 < tmp3.start) {
          diff1 = sum - 1;
          sum1 = num;
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
  }
  compute(lastStartChunk, lastEndChunk, arr) {
    let flag2;
    let getRecyclerKey;
    let item;
    let layoutSize;
    let layoutSize2;
    let layoutStart3;
    let layoutStart4;
    let section;
    let section2;
    let section3;
    let section4;
    let section5;
    let stickyHeaderFooter;
    let tmp125;
    let tmp126;
    let tmp162;
    let tmp163;
    let tmp203;
    let tmp204;
    let type;
    let type2;
    let type3;
    let closure_0 = lastStartChunk;
    let closure_1 = lastEndChunk;
    let flag = arg3;
    if (arg3 === undefined) {
      flag = false;
    }
    const self = this;
    getRecyclerKey = undefined;
    let items;
    let obj3;
    let closure_6;
    function addInitialSection(section, layoutStart, layoutSize, layoutStart2) {
      items.push(obj3.get(obj3.SECTION, layoutStart, layoutSize, getRecyclerKey(obj3.SECTION, section), section));
      const sum = layoutStart + layoutSize;
      if (sum < layoutStart2) {
        closure_6 = closure_6 + 1;
        items.push(obj3.get(obj3.SPACER, sum, layoutStart2 - sum, undefined, 0, closure_6));
      }
    }
    function isVisible(layoutStart, layoutSize) {
      let tmp = !flag;
      if (flag) {
        tmp = layoutStart >= lastStartChunk - layoutSize && layoutStart < lastEndChunk;
        const tmp5 = layoutStart >= lastStartChunk - layoutSize && layoutStart < lastEndChunk;
      }
      return tmp;
    }
    if (this.dirty) {
      self.fullCompute();
      flag2 = true;
    } else {
      flag2 = false;
      if (lastStartChunk === self.lastStartChunk) {
        flag2 = false;
        if (lastEndChunk === self.lastEndChunk) {
          obj = { size: null, items: null };
          ({ size: obj.size, items: obj.items } = self);
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
    const tmp2 = map;
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let tmp5 = obj;
      let item1;
      ({ type, section } = nextResult);
      if (nextResult.type === obj.ITEM) {
        item1 = tmp4.item;
      }
      let recyclerKey = getRecyclerKey(type, section, item1);
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
    closure_6 = 0;
    set = new Set();
    const tmp17 = set;
    if (rounded <= bound) {
      do {
        let chunk = self.getChunk(rounded);
        if (null != chunk) {
          let addResult = set.add(chunk);
        }
        rounded = rounded + 1;
      } while (rounded <= bound);
    }
    for (const item10103 of tmp17) {
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
                let arr2 = items.push(
                  obj3.get(tmp224.SECTION, item10107.layoutStart, item10107.layoutSize, tmp104, item10107.section),
                );
              }
              result1 = item10107.layoutStart + item10107.layoutSize;
            } else if (tmp224.ITEM === type4) {
              if (null == item10107.uniform) {
                if (isVisible(item10107.layoutStart, item10107.layoutSize)) {
                  if (0 === items.length) {
                    let addInitialSectionResult = addInitialSection(
                      item10107.section,
                      item10107.sectionData.layoutStart,
                      item10107.sectionData.layoutSize,
                      item10107.layoutStart,
                    );
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
                  let arr3 = items.push(
                    obj3.get(
                      tmp224.ITEM,
                      item10107.layoutStart,
                      item10107.layoutSize,
                      tmp86,
                      item10107.section,
                      item10107.item,
                    ),
                  );
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
                          let addInitialSectionResult1 = addInitialSection(
                            item10107.section,
                            item10107.sectionData.layoutStart,
                            item10107.sectionData.layoutSize,
                            result1,
                          );
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
                        let arr4 = items.push(
                          obj3.get(tmp58.ITEM, result1, item10107.itemSize, tmp60, item10107.section, sum2),
                        );
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
                  let addInitialSectionResult2 = addInitialSection(
                    item10107.section,
                    item10107.sectionData.layoutStart,
                    item10107.sectionData.layoutSize,
                    item10107.layoutStart,
                  );
                }
                let SECTION_FOOTER = tmp224.SECTION_FOOTER;
                let layoutStart = item10107.layoutStart;
                let arr5 = items.push(
                  obj3.get(
                    SECTION_FOOTER,
                    layoutStart,
                    item10107.layoutSize,
                    getRecyclerKey(tmp224.SECTION_FOOTER, item10107.section),
                    item10107.section,
                  ),
                );
              }
              result1 = item10107.layoutStart + item10107.layoutSize;
            } else if (tmp224.FOOTER === type4) {
              if (isVisible(item10107.layoutStart, item10107.layoutSize)) {
                let arr6 = items.push(obj3.get(tmp224.FOOTER, item10107.layoutStart, item10107.layoutSize, undefined));
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
    const tmp121 = tmp2[Symbol.iterator]();
    while (tmp121 !== undefined) {
      let tmp124 = obj3(tmp122, 2);
      [tmp125, tmp126] = tmp124;
      if (tmp126.section < section2) {
        num6 = num6 + tmp126.layoutSize;
        let items3 = [tmp125, tmp126];
        let arr7 = items1.push(items3);
      } else if (tmp126.section > section3) {
        num7 = num7 + tmp126.layoutSize;
        let items4 = [tmp125, tmp126];
        let arr25 = items2.push(items4);
      } else if (tmp126.type === obj.ITEM) {
        if (tmp126.section === section2) {
          if (tmp126.item < num) {
            num6 = num6 + tmp126.layoutSize;
            let items5 = [tmp125, tmp126];
            let arr26 = items1.push(items5);
          }
        }
        num7 = num7 + tmp126.layoutSize;
        let items6 = [tmp125, tmp126];
        let arr27 = items2.push(items6);
      }
      continue;
    }
    const first = items[0];
    if (null != first) {
      if (first.layoutStart > 0) {
        const headerDataCache = self.headerDataCache;
        const layoutStart5 = first.layoutStart;
        let layoutStart2 = layoutStart5;
        const tmp148 = stickyHeaderFooter && null != headerDataCache && "HEADER" !== first.type;
        if (tmp148) {
          if (layoutStart5 - headerDataCache.layoutStart - headerDataCache.layoutSize > 0) {
            items.unshift(
              obj3.get(
                obj.SPACER,
                headerDataCache.layoutStart + headerDataCache.layoutSize,
                layoutStart5 - headerDataCache.layoutStart - headerDataCache.layoutSize,
                undefined,
                0,
                0,
              ),
            );
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
          let item2;
          let unshift = items.unshift;
          let get = obj3.get;
          if (tmp163.type === obj.ITEM) {
            item2 = tmp164.item;
          }
          let arr30 = unshift(get(type2, layoutStart3, layoutSize, tmp162, section4, item2));
          continue;
        }
        if (bound1 > 0) {
          items.unshift(obj3.get(obj.SPACER, 0, bound1, undefined, 0, 1));
        }
      }
    }
    if (null != items[items.length - 1]) {
      size = tmp182.layoutStart + tmp182.layoutSize;
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
          items.push(
            obj3.get(
              obj.SPACER,
              size,
              footerDataCache.layoutStart + footerDataCache.layoutSize - size,
              undefined,
              1,
              0,
            ),
          );
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
        let item3;
        let push = items.push;
        let get2 = obj3.get;
        if (tmp204.type === obj.ITEM) {
          item3 = tmp205.item;
        }
        let arr35 = push(get2(type3, layoutStart4, layoutSize2, tmp203, section5, item3));
        continue;
      }
    }
    let disableRecycling = self.disableRecycling;
    const fill = obj3.fill;
    if (!disableRecycling) {
      disableRecycling = self.props.disableRecyclingOnFullCompute && flag2;
    }
    fill(disableRecycling);
    return { size: self.size, items };
  }
  fullCompute() {
    let insetStart;
    let num3;
    let sections;
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
    set = new Set(self.props.persistantKeys);
    self.persistantItemData = [];
    const items = [];
    self.dataCache = items;
    self.chunkCache = undefined;
    const chunkSize = self.chunkSize;
    _require = num;
    self.headerDataCache = undefined;
    self.footerDataCache = undefined;
    function pushData(_require, arg1, type) {
      closure_0 = closure_0 + (arg1 - _require);
      const bound = Math.max(Math.floor(_require / chunkSize), 0);
      const bound1 = Math.max(Math.floor(arg1 / chunkSize) - 1, bound);
      let chunk = self.getChunk(bound);
      if (null == chunk) {
        obj = { start: bound, end: bound1, data: [] };
        items.push(obj);
        chunk = obj;
      }
      if (type.type === obj.HEADER) {
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
      obj = { type: obj.HEADER, layoutStart: _require, layoutSize: sizeForHeader };
      pushData(_require, _require + sizeForHeader, obj);
    }
    for (let num3 = 0; num3 < sections.length; num3 = num3 + 1) {
      let tmp5 = sections[num3];
      if (0 !== tmp5) {
        let tmp12;
        let tmp32 = _require;
        let sizeForSection = self.getSizeForSection(num3);
        let obj2 = { type: obj.SECTION, layoutStart: _require, layoutSize: sizeForSection, section: num3 };
        let tmp34 = obj;
        if (set.size > 0) {
          let recyclerKey = getRecyclerKey(tmp34.SECTION, num3);
          let tmp8 = null != recyclerKey && set.has(recyclerKey);
          if (tmp8) {
            let persistantItemData = self.persistantItemData;
            let arr = persistantItemData.push(obj2);
            let deleteResult = set.delete(recyclerKey);
          }
        }
        let pushDataResult1 = pushData(tmp32, tmp32 + sizeForSection, obj2);
        if (self.uniform) {
          let sizeForItem = self.getSizeForItem(num3, 0);
          let obj3 = {
            type: tmp34.ITEM,
            uniform: true,
            layoutStart: _require,
            itemSize: sizeForItem,
            layoutSize: sizeForItem * tmp5,
            section: num3,
            items: tmp5,
            sectionData: obj2,
          };
          let pushDataResult2 = pushData(_require, _require + sizeForItem * tmp5, obj3);
          tmp12 = tmp34;
        } else {
          let num4 = 0;
          tmp12 = tmp34;
          if (0 < tmp5) {
            do {
              let sizeForItem1 = self.getSizeForItem(num3, num4);
              let obj4 = {
                type: obj.ITEM,
                layoutStart: _require,
                layoutSize: sizeForItem1,
                section: num3,
                item: num4,
                sectionData: obj2,
              };
              let tmp15 = obj;
              let pushDataResult3 = pushData(_require, _require + sizeForItem1, obj4);
              if (set.size > 0) {
                let recyclerKey1 = getRecyclerKey(tmp15.ITEM, num3, num4);
                let tmp19 = null != recyclerKey1 && set.has(recyclerKey1);
                if (tmp19) {
                  let persistantItemData1 = self.persistantItemData;
                  let arr2 = persistantItemData1.push(obj4);
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
          let obj5 = {
            type: tmp12.SECTION_FOOTER,
            layoutStart: _require,
            layoutSize: sizeForSectionFooter,
            section: num3,
            sectionData: obj2,
          };
          let pushDataResult4 = pushData(_require, _require + sizeForSectionFooter, obj5);
        }
      }
    }
    const sizeForFooter = self.getSizeForFooter();
    if (sizeForFooter > 0) {
      const obj6 = { type: obj.FOOTER, layoutStart: _require, layoutSize: sizeForFooter };
      pushData(_require, _require + sizeForFooter, obj6);
    }
    _require = _require + num2;
    self.size = closure_7.roundToNearestPixel(_require);
    self.dirty = false;
  }
  getChunkDataFromSectionItem(arg0, arg1) {
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
  }
  getChunkIndexFromSectionItem(chunk) {
    let padBottom;
    let targetItem;
    let targetSection;
    const self = this;
    ({ targetSection, targetItem, padBottom } = chunk);
    chunk = chunk.chunk;
    if (padBottom === undefined) {
      padBottom = 16;
    }
    const iter = chunk.data[Symbol.iterator]();
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
              let obj2 = {
                startIndex: Math.floor(sum / self.chunkSize),
                endIndex: Math.floor((sum + tmp2.itemSize + padBottom) / self.chunkSize),
              };
              let tmp22 = globalThis;
              let _Math5 = Math;
              let _Math6 = Math;
              iter.return();
              return obj2;
            }
          } else if (tmp2.item >= targetItem) {
            iter.return();
          } else if (tmp2.item !== targetItem) {
            continue;
          } else {
            let obj3 = {
              startIndex: Math.floor((tmp2.layoutStart - tmp2.sectionData.layoutSize) / self.chunkSize),
              endIndex: Math.floor((tmp2.layoutStart + tmp2.layoutSize + padBottom) / self.chunkSize),
            };
            let tmp18 = globalThis;
            let _Math3 = Math;
            let _Math4 = Math;
            iter.return();
            return obj3;
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
          obj = {
            startIndex: Math.floor(tmp2.layoutStart / self.chunkSize),
            endIndex: Math.floor((tmp2.layoutStart + tmp2.layoutSize + padBottom) / self.chunkSize),
          };
          let tmp4 = globalThis;
          let _Math = Math;
          let _Math2 = Math;
          iter.return();
          return obj;
        }
        continue;
      }
      continue;
    }
  }
  computeScrollPosition(arg0, arg1, arg2) {
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
                      let obj3 = {
                        scrollPosition:
                          item10020.sectionData.layoutStart +
                          item10020.sectionData.layoutSize +
                          item10020.itemSize * arg2,
                        size: item10020.itemSize,
                        sectionOffset: num4,
                      };
                      let num4 = 0;
                      if (arg0) {
                        num4 = item10020.sectionData.layoutSize;
                      }
                      obj.return();
                      iter.return();
                      return obj3;
                    }
                  }
                }
                if (null == item10020.uniform) {
                  if (item10020.section === arg1) {
                    if (item10020.item === arg2) {
                      let obj7 = { scrollPosition: null, size: null, sectionOffset: num3 };
                      ({ layoutStart: obj4.scrollPosition, layoutSize: obj4.size } = item10020);
                      let num3 = 0;
                      if (arg0) {
                        num3 = item10020.sectionData.layoutSize;
                      }
                      obj.return();
                      iter.return();
                      return obj7;
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
                      let obj8 = { scrollPosition: null, size: null, sectionOffset: 0 };
                      ({ layoutStart: obj2.scrollPosition, layoutSize: obj2.size } = item10020);
                      obj.return();
                      iter.return();
                      return obj8;
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
  }
  getSectionItemFromPosition(arg0) {
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
          let tmp;
          if (arg0 <= sum + tmp9) {
            num2 = (arg0 - sum) / layoutSize;
            tmp = nextResult;
            iter.return();
            break;
          }
          let obj2 = { item: tmp, positionPercentage: num2 };
          return obj2;
        }
      }
      let num3 = 0;
      if (null != tmp7) {
        num3 = tmp7 - tmp4.layoutSize;
      }
      num = num + num3;
      continue;
    }
  }
  setDisableRecycling(disableRecycling) {
    this.disableRecycling = disableRecycling;
  }
  getSize() {
    const self = this;
    if (this.dirty) {
      self.fullCompute();
    }
    return self.size;
  }
  isDirty() {
    return this.dirty;
  }
}
const prototype2 = FastListComputer.prototype;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating.isReactCompilerEnabled();
const __initData = {
  code: "function FastListTsx1(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}",
};
const __initData2 = {
  code: "function FastListTsx2(){const{scrollPosValue,interpolate,inputRange,outputRange,horizontal}=this.__closure;const interpolatedValue=scrollPosValue!=null?interpolate(scrollPosValue.get(),inputRange,outputRange):null;return{transform:interpolatedValue!=null?[horizontal?{translateX:interpolatedValue}:{translateY:interpolatedValue}]:undefined};}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let children;
        let debug;
        let fastListInstance;
        let horizontal;
        let items;
        let items2;
        let layoutSize;
        let layoutStart;
        let nextSectionLayoutPosition;
        let recyclerKey;
        let scrollPosValue;
        let section;
        obj = horizontal(items[8]);
        const cResult = obj.c(24);
        ({ layoutStart, layoutSize, horizontal } = arg0);
        ({ nextSectionLayoutPosition, scrollPosValue } = arg0);
        ({ fastListInstance, section, children, debug, recyclerKey } = arg0);
        items = [-1, 0];
        const items1 = [0, 0];
        items.push(layoutStart);
        items1.push(0);
        if (nextSectionLayoutPosition == null) {
          nextSectionLayoutPosition = 0;
        }
        const diff = nextSectionLayoutPosition - layoutSize;
        if (diff >= layoutStart) {
          let num2 = 0;
          const tmpResult = horizontal(items[11]);
          if (tmpResult.isAndroid()) {
            num2 = -1;
          }
          items.push(diff, diff + 1);
          items1.push(diff - layoutStart + num2, diff - layoutStart + num2);
        } else {
          items.push(layoutStart + 1);
          items1.push(1);
        }
        const fn = function k() {
          let interpolateResult = null;
          if (null != scrollPosValue) {
            const obj2 = ReanimatedRexport2;
            interpolateResult = obj2.interpolate(scrollPosValue.get(), items, items1);
          }
          let transform;
          if (null != interpolateResult) {
            let obj4;
            if (horizontal) {
              obj4 = { translateX: interpolateResult };
              const obj3 = { translateX: interpolateResult };
            } else {
              obj4 = { translateY: interpolateResult };
            }
            items = [obj4];
            transform = items;
          }
          return { transform };
        };
        const tmpResult2 = horizontal(items[12]);
        let obj2 = {
          scrollPosValue,
          interpolate: horizontal(tmp2[12]).interpolate,
          inputRange: items,
          outputRange: items1,
          horizontal,
        };
        fn.__closure = obj2;
        fn.__workletHash = 699810682881;
        fn.__initData = __initData;
        const animatedStyle = tmpResult2.useAnimatedStyle(fn);
        if (cResult[0] === children) {
          if (cResult[1] === fastListInstance) {
            if (cResult[2] === layoutStart) {
              if (cResult[3] === scrollPosValue) {
                let tmp12;
                let style;
                if (cResult[4] === section) {
                  tmp12 = cResult[5];
                }
                if (null != tmp12) {
                  if ("props" in tmp12) {
                    style = tmp12.props.style;
                  }
                }
                let tmp14;
                if (!horizontal) {
                  tmp14 = layoutSize;
                }
                let tmp15;
                if (horizontal) {
                  tmp15 = layoutSize;
                }
                if (cResult[6] === tmp14) {
                  let tmp16;
                  if (cResult[7] === tmp15) {
                    tmp16 = cResult[8];
                  }
                  if (cResult[9] === animatedStyle) {
                    if (cResult[10] === style) {
                      let tmp17;
                      let tmp18;
                      if (cResult[11] === tmp16) {
                        tmp17 = cResult[12];
                      }
                      if (cResult[13] !== tmp12) {
                        let cloneElementResult;
                        if (null != tmp12) {
                          let obj3 = { style: { flex: 1 } };
                          cloneElementResult = react.cloneElement(tmp12, obj3);
                        }
                        cResult[13] = tmp12;
                        cResult[14] = cloneElementResult;
                        tmp18 = cloneElementResult;
                      } else {
                        tmp18 = cResult[14];
                      }
                      if (cResult[15] === debug) {
                        if (cResult[16] === layoutSize) {
                          if (cResult[17] === recyclerKey) {
                            let flag;
                            if (cResult[18] === section) {
                              flag = cResult[19];
                            }
                            if (cResult[20] === tmp17) {
                              if (cResult[21] === tmp18) {
                                let tmp21;
                                if (cResult[22] === flag) {
                                  tmp21 = cResult[23];
                                }
                                return tmp21;
                              }
                            }
                            let obj4 = { style: tmp17, collapsable: false, children: items2 };
                            items2 = [tmp18, flag];
                            const tmp24 = closure_10(scrollPosValue(items[13]), obj4);
                            cResult[20] = tmp17;
                            cResult[21] = tmp18;
                            cResult[22] = flag;
                            cResult[23] = tmp24;
                            tmp21 = tmp24;
                          }
                        }
                      }
                      cResult[15] = debug;
                      cResult[16] = layoutSize;
                      cResult[17] = recyclerKey;
                      cResult[18] = section;
                      cResult[19] = false;
                      flag = false;
                    }
                  }
                  const items3 = [style, tmp16, animatedStyle];
                  cResult[9] = animatedStyle;
                  cResult[10] = style;
                  cResult[11] = tmp16;
                  cResult[12] = items3;
                  tmp17 = items3;
                }
                size = { zIndex: 10, position: "relative", height: tmp14, width: tmp15 };
                cResult[6] = tmp14;
                cResult[7] = tmp15;
                cResult[8] = size;
                tmp16 = size;
              }
            }
          }
        }
        const Children = react.Children;
        const onlyResult = Children.only(children(section, fastListInstance, scrollPosValue, layoutStart));
        cResult[0] = children;
        cResult[1] = fastListInstance;
        cResult[2] = layoutStart;
        cResult[3] = scrollPosValue;
        cResult[4] = section;
        cResult[5] = onlyResult;
        tmp12 = onlyResult;
      }
    : (children) => {
        let debug;
        let fastListInstance;
        let horizontal;
        let items3;
        let layoutSize;
        let layoutStart;
        let nextSectionLayoutPosition;
        let recyclerKey;
        let scrollPosValue;
        let section;
        let tmp16;
        ({ layoutStart, layoutSize, horizontal } = children);
        ({ nextSectionLayoutPosition, scrollPosValue } = children);
        ({ fastListInstance, section, debug, recyclerKey } = children);
        let items = [-1, 0];
        const items1 = [0, 0];
        children = children.children;
        items.push(layoutStart);
        items1.push(0);
        if (nextSectionLayoutPosition == null) {
          nextSectionLayoutPosition = 0;
        }
        const diff = nextSectionLayoutPosition - layoutSize;
        if (diff >= layoutStart) {
          let num2 = 0;
          obj = horizontal(items[11]);
          if (obj.isAndroid()) {
            num2 = -1;
          }
          items.push(diff, diff + 1);
          items1.push(diff - layoutStart + num2, diff - layoutStart + num2);
        } else {
          items.push(layoutStart + 1);
          items1.push(1);
        }
        let obj2 = horizontal(items[12]);
        class E {
          constructor() {
            obj = scrollPosValue;
            interpolateResult = null;
            if (null != scrollPosValue) {
              tmp2 = closure_0;
              tmp3 = closure_2;
              obj2 = closure_0(closure_2[12]);
              tmp4 = closure_2;
              tmp5 = closure_3;
              interpolateResult = obj2.interpolate(obj.get(), closure_2, closure_3);
            }
            transform = undefined;
            if (null != interpolateResult) {
              tmp7 = horizontal;
              if (tmp7) {
                obj1 = { translateX: null };
                obj1.translateX = interpolateResult;
                obj5 = obj1;
              } else {
                obj5 = { translateY: null };
                obj5.translateY = interpolateResult;
              }
              items = [];
              items[0] = obj5;
              transform = items;
            }
            return { transform };
          }
        }
        let obj3 = {
          scrollPosValue,
          interpolate: horizontal(items[12]).interpolate,
          inputRange: items,
          outputRange: items1,
          horizontal,
        };
        E.__closure = obj3;
        E.__workletHash = 338400247426;
        E.__initData = __initData2;
        const Children = react.Children;
        const animatedStyle = obj2.useAnimatedStyle(E);
        const onlyResult = Children.only(children(section, fastListInstance, scrollPosValue, layoutStart));
        let style;
        const tmp13 = scrollPosValue(items[13]);
        if (null != onlyResult) {
          if ("props" in onlyResult) {
            style = onlyResult.props.style;
          }
        }
        const items2 = [style, ,];
        let tmp15;
        if (!horizontal) {
          tmp15 = layoutSize;
        }
        size = { zIndex: 10, position: "relative", height: tmp15, width: tmp16 };
        tmp16 = undefined;
        if (horizontal) {
          tmp16 = layoutSize;
        }
        const obj5 = { style: items2, collapsable: false, children: items3 };
        items2[1] = size;
        items2[2] = animatedStyle;
        let cloneElementResult;
        if (null != onlyResult) {
          const obj6 = { style: { flex: 1 } };
          cloneElementResult = react.cloneElement(onlyResult, obj6);
        }
        items3 = [cloneElementResult, false];
        return closure_10(tmp13, obj5);
      },
);
let closure_22 = react.memo(function _FastListSectionRenderer(disableWrapper) {
  let children;
  let fastListInstance;
  let horizontal;
  let items;
  let layoutSize;
  let obj3;
  let recyclerKey;
  let section;
  ({ layoutSize, children, fastListInstance, section, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    let tmp4Result;
    if (!disableWrapper.debug) {
      obj = { children: children(section, fastListInstance) };
      tmp4Result = unpackModuleId(closure_12, obj);
    }
    return tmp4Result;
  }
  const tmp5 = NativeViewDefault;
  if (horizontal) {
    obj3 = { width: layoutSize };
    const obj2 = { width: layoutSize };
  } else {
    obj3 = { height: layoutSize };
  }
  const obj4 = { collapsable: false, style: obj3, preventClipping: true, children: items };
  items = [children(section, fastListInstance), false];
  tmp4Result = authStore(tmp5, obj4);
});
let closure_23 = react.memo(function _FastListSectionFooterRenderer(disableWrapper) {
  let children;
  let fastListInstance;
  let horizontal;
  let items;
  let layoutSize;
  let obj3;
  let recyclerKey;
  let section;
  ({ layoutSize, fastListInstance, children, section, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    let tmp4Result;
    if (!disableWrapper.debug) {
      obj = { children: children(section, fastListInstance) };
      tmp4Result = unpackModuleId(closure_12, obj);
    }
    return tmp4Result;
  }
  const tmp5 = NativeViewDefault;
  if (horizontal) {
    obj3 = { width: layoutSize };
    const obj2 = { width: layoutSize };
  } else {
    obj3 = { height: layoutSize };
  }
  const obj4 = { collapsable: false, style: obj3, children: items };
  items = [children(section, fastListInstance), false];
  tmp4Result = authStore(tmp5, obj4);
});
let closure_24 = react.memo(function _FastListItemRenderer(disableWrapper) {
  let children;
  let fastListInstance;
  let horizontal;
  let item;
  let items;
  let layoutSize;
  let recyclerKey;
  let section;
  let style;
  ({ layoutSize, children, section, fastListInstance, item, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    let childrenResult;
    if (!disableWrapper.debug) {
      if (children != null) {
        childrenResult = children(section, item, fastListInstance);
      }
    }
    return childrenResult;
  }
  const tmp4 = NativeViewDefault;
  if (horizontal) {
    style = { width: layoutSize };
    const obj2 = { width: layoutSize };
  } else {
    style = { height: layoutSize };
  }
  let childrenResult1;
  const obj3 = { collapsable: false, style, children: items };
  if (children != null) {
    childrenResult1 = children(section, item, fastListInstance);
  }
  items = [childrenResult1, false];
  childrenResult = authStore(tmp4, obj3);
});
let closure_25 = react.memo(function _FastListHeaderFooterRenderer(disableWrapper) {
  let children;
  let fastListInstance;
  let horizontal;
  let items;
  let layoutSize;
  let obj3;
  let recyclerKey;
  ({ layoutSize, children, fastListInstance, recyclerKey, horizontal } = disableWrapper);
  if (disableWrapper.disableWrapper) {
    let tmp4Result;
    if (!disableWrapper.debug) {
      obj = { children: children(fastListInstance) };
      tmp4Result = unpackModuleId(closure_12, obj);
    }
    return tmp4Result;
  }
  const tmp5 = NativeViewDefault;
  if (horizontal) {
    obj3 = { width: layoutSize };
    const obj2 = { width: layoutSize };
  } else {
    obj3 = { height: layoutSize };
  }
  const obj4 = { collapsable: false, style: obj3, preventClipping: true, children: items };
  items = [children(fastListInstance), false];
  tmp4Result = authStore(tmp5, obj4);
});
let closure_26 = react.memo(function _FastListSpacer(layoutSize) {
  let style;
  layoutSize = layoutSize.layoutSize;
  const horizontal = layoutSize.horizontal;
  const tmp2 = NativeViewDefault;
  if (horizontal) {
    style = { width: layoutSize };
    obj = { width: layoutSize };
  } else {
    style = { height: layoutSize };
  }
  return unpackModuleId(tmp2, { collapsable: false, style });
});
let c27 = 1000;
let c28 = 0.5;
class FastListScrollAnchor {
  constructor(getScrollPosition) {
    const merged = Object.assign({ isCustomAnchor: false });
    merged.getScrollPosition = getScrollPosition;
    return merged;
  }
  hasAnchor() {
    return null != this.anchorId;
  }
  cleanAnchor(arg0) {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const self = this;
    const tmp = !flag && self.isCustomAnchor;
    if (!tmp) {
      self.isCustomAnchor = false;
      self.anchorId = undefined;
      self.anchorOffset = undefined;
    }
  }
  handleUserScroll() {
    this.cleanAnchor(true);
  }
  setCustomAnchor(getAnchorIdFromIndex, anchorOffset, section, item) {
    const self = this;
    this.isCustomAnchor = true;
    this.anchorOffset = anchorOffset;
    this.anchorId = getAnchorIdFromIndex(section, item);
    if (null == this.anchorId) {
      self.cleanAnchor(true);
    }
  }
  findOrUpdateAnchor(getAnchorIdFromIndex, items) {
    let item;
    let section2;
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
          let anchorId = self.anchorId;
          let section = tmp4.section;
          if (num == null) {
            num = 0;
          }
          if (anchorId === getAnchorIdFromIndex(section, num)) {
            self.anchorOffset = nextResult.layoutStart - scrollPosition;
            iter.return();
          }
        }
        if (!self.isCustomAnchor) {
          if (tmp4.layoutStart >= scrollPosition) {
            self.anchorOffset = tmp4.layoutStart - scrollPosition;
            ({ item, section: section2 } = tmp4);
            if (item == null) {
              item = 0;
            }
            self.anchorId = getAnchorIdFromIndex(section2, item);
            iter.return();
          }
        }
      }
      continue;
    }
  }
  getAnchorIndex(getAnchorIndexFromId) {
    const self = this;
    if (null != this.anchorId) {
      const tmp2 = getAnchorIndexFromId(self.anchorId);
      self.cleanAnchor();
      return tmp2;
    }
  }
}
const prototype3 = FastListScrollAnchor.prototype;
const PureComponent = react.PureComponent;
class FastList extends PureComponent {
  constructor(arg0) {
    let getAnchorIdFromIndex;
    let getAnchorIndexFromId;
    let tmp;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp7;
    let tmp9;
    let uiStore;
    let tmp10 = new tmp(arg0, tmp7, tmp6, tmp5, tmp4, tmp3, tmp2);
    _require = tmp10;
    tmp10.containerSize = 0;
    tmp10.scrollPos = 0;
    let obj2 = require("ReanimatedHelperTypes");
    tmp10.scrollPosValue = obj2.createFakeSharedValue(0);
    let manualRef = tmp10.props.manualRef;
    if (manualRef == null) {
      manualRef = react.createRef();
    }
    tmp10.scrollView = manualRef;
    tmp10.getItems = function getItems() {
      return uiStore.state.items;
    };
    tmp10.getScrollPosition = function getScrollPosition() {
      return uiStore.scrollPos;
    };
    tmp10.disableAnchoringTimeout = undefined;
    tmp10.deferredCompute = -1;
    tmp10.deferNextCompute = false;
    if (typeof FastListScrollAnchor === "function") {
      let merged = Object.assign({ isCustomAnchor: false });
      merged.getScrollPosition = tmp9;
      tmp10.scrollAnchor = merged;
      tmp10.viewabilityDebounce = -1;
      tmp10.previouslyViewableItems = [];
      tmp10._scrollPositionToPoint = function _scrollPositionToPoint(initialScrollStart) {
        let num2;
        const horizontal = uiStore.props.horizontal;
        let num = 0;
        if (horizontal) {
          num = initialScrollStart;
        }
        const point = { x: num, y: num2 };
        num2 = 0;
        if (!horizontal) {
          num2 = initialScrollStart;
        }
        return point;
      };
      tmp10._calculateScrollPosition = function _calculateScrollPosition(fullSize) {
        let diff;
        let itemCoords;
        let num3;
        let orientation;
        let scrollPosition;
        let sectionOffset;
        ({ itemCoords, orientation } = fullSize);
        fullSize = fullSize.fullSize;
        if (orientation === undefined) {
          orientation = "top";
        }
        let num = fullSize.paddingStart;
        if (num === undefined) {
          num = 0;
        }
        let num2 = fullSize.paddingEnd;
        if (num2 === undefined) {
          num2 = 0;
        }
        ({ scrollPosition, size, sectionOffset } = itemCoords);
        if (uiStore.containerSize > 0) {
          num3 = uiStore.containerSize;
        } else {
          num3 = uiStore.props.chunkBase;
          if (num3 == null) {
            num3 = 0;
          }
        }
        if (size >= num3) {
          orientation = "top";
        }
        if ("visible" === orientation) {
          if (scrollPosition + sectionOffset >= uiStore.scrollPos + num) {
            if (scrollPosition + size <= uiStore.scrollPos + (num3 - num2)) {
              return null;
            }
          }
          if (size <= num3) {
            if (scrollPosition >= uiStore.scrollPos) {
              diff = scrollPosition + size + num2 - num3;
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
        return Math.max(0, Math.min(diff, fullSize - num3));
      };
      let props = tmp10.props;
      let num = props.chunkBase;
      props = {
        headerSize: null,
        footerSize: null,
        sectionSize: null,
        itemSize: null,
        sectionFooterSize: null,
        sections: null,
        insetStart: null,
        insetEnd: null,
        stickyHeaderFooter: null,
        getRecyclerKey: null,
        persistantKeys: null,
        disableRecyclingOnFullCompute: null,
      };
      ({
        headerSize: obj3.headerSize,
        footerSize: obj3.footerSize,
        sectionSize: obj3.sectionSize,
        itemSize: obj3.itemSize,
        sectionFooterSize: obj3.sectionFooterSize,
        sections: obj3.sections,
        insetStart: obj3.insetStart,
        insetEnd: obj3.insetEnd,
        stickyHeaderFooter: obj3.stickyHeaderFooter,
        getRecyclerKey: obj3.getRecyclerKey,
        persistantKeys: obj3.persistantKeys,
        disableRecyclingOnFullCompute: obj3.disableRecyclingOnFullCompute,
      } = props);
      const self = this;
      if (typeof FastListComputer === "function") {
        const merged1 = Object.assign({
          chunkSize: 0,
          uniform: false,
          dataCache: null,
          size: 0,
          dirty: true,
          lastStartChunk: -1,
          lastEndChunk: -1,
          items: null,
          persistantItemData: null,
          disableRecycling: false,
        });
        merged1[2] = [];
        merged1[7] = [];
        merged1[8] = [];
        merged1.props = props;
        merged1.updateProps(props);
        const getInitialState = tmp10.getInitialState;
        if (num == null) {
          num = 0;
        }
        let flag = true;
        tmp10.state = getInitialState(num, merged1, true);
        tmp10.handleViewabilityChange = function handleViewabilityChange() {
          const onViewableItemsChanged = uiStore.props.onViewableItemsChanged;
          if (null != onViewableItemsChanged) {
            const items = uiStore.state.items;
            const sum = uiStore.scrollPos + uiStore.containerSize;
            const items1 = [];
            const visibilityThreshold = uiStore.getViewabilityConfig().visibilityThreshold;
            const scrollPos = uiStore.scrollPos;
            const iter = items[Symbol.iterator]();
            const nextResult = iter.next();
            while (iter !== undefined) {
              let tmp4 = nextResult;
              if (nextResult.layoutStart > sum) {
                iter.return();
                break;
              } else {
                let _Math = Math;
                let bound = Math.max(tmp4.layoutStart, scrollPos);
                let _Math2 = Math;
                let tmp7 = bound;
                let bound1 = Math.min(tmp4.layoutStart + tmp4.layoutSize, sum);
                if (bound < bound1) {
                  if ((tmp9 - tmp7) / tmp4.layoutSize >= visibilityThreshold) {
                    let arr = items1.push(tmp4.recyclerKey);
                  }
                }
                continue;
              }
              let obj2 = shallowEqual;
              if (!obj2.areArraysShallowEqual(items1, uiStore.previouslyViewableItems)) {
                uiStore.previouslyViewableItems = items1;
                let result = onViewableItemsChanged(items1);
              }
            }
          }
        };
        tmp10.isVisible = function isVisible(arg0) {
          let num = arg1;
          if (arg1 === undefined) {
            num = 0;
          }
          let num2 = arg2;
          if (arg2 === undefined) {
            num2 = 0;
          }
          return arg0 >= uiStore.scrollPos + num && arg0 <= uiStore.scrollPos + uiStore.containerSize - num2;
        };
        tmp10.scrollToTop = function scrollToTop() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = true;
          }
          const scrollView = uiStore.scrollView;
          if (scrollView != null) {
            const current = scrollView.current;
            if (current != null) {
              const point = { x: 0, y: 0, animated: flag };
              current.scrollTo(point);
            }
          }
        };
        tmp10.scrollToLocation = function scrollToLocation(orientation) {
          let animated;
          let getAnchorIdFromIndex;
          let item;
          let section;
          let stickySectionsVariant;
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
          const current = uiStore.scrollView.current;
          if (null == current) {
            return false;
          } else {
            ({ getAnchorIdFromIndex, stickySectionsVariant } = uiStore.props);
            let str2 = "default";
            if (undefined !== stickySectionsVariant) {
              str2 = stickySectionsVariant;
            }
            const fastListComputer = uiStore.state.fastListComputer;
            const scrollPosition1 = fastListComputer.computeScrollPosition("default" === str2, section, item);
            if (null == scrollPosition1) {
              return false;
            } else {
              if ("visible" === str) {
                if (uiStore.isVisible(scrollPosition1.scrollPosition, num, num2)) {
                  return false;
                }
              }
              const _calculateScrollPosition = uiStore._calculateScrollPosition;
              const obj2 = {
                itemCoords: scrollPosition1,
                fullSize: fastListComputer.getSize(),
                orientation: str,
                paddingStart: num,
                paddingEnd: num2,
              };
              const result = _calculateScrollPosition(obj2);
              const tmp3 = !animated && flag && null != getAnchorIdFromIndex;
              if (tmp3) {
                const scrollAnchor = uiStore.scrollAnchor;
                let num3 = result;
                const setCustomAnchor = scrollAnchor.setCustomAnchor;
                const scrollPosition = scrollPosition1.scrollPosition;
                if (result == null) {
                  num3 = 0;
                }
                setCustomAnchor(getAnchorIdFromIndex, scrollPosition - num3, section, item);
              }
              let flag2 = null != result && result !== uiStore.scrollPos;
              if (flag2) {
                if (!animated) {
                  uiStore.scrollPos = result;
                  const blocks = uiStore.computeBlocks();
                }
                const scrollTo = current.scrollTo;
                const obj3 = { animated };
                const merged = Object.assign(uiStore._scrollPositionToPoint(result));
                scrollTo(obj3);
                flag2 = true;
              }
              return flag2;
            }
          }
        };
        tmp10.scrollTo = function scrollTo(initialScrollStart) {
          let flag = arg1;
          if (arg1 === undefined) {
            flag = false;
          }
          const current = uiStore.scrollView.current;
          const fastListComputer = uiStore.state.fastListComputer;
          let tmp = null != current;
          if (tmp) {
            let flag2 =
              initialScrollStart <= fastListComputer.getSize() - uiStore.containerSize &&
              initialScrollStart !== uiStore.scrollPos;
            if (flag2) {
              const scrollTo = current.scrollTo;
              const obj2 = { animated: flag };
              const merged = Object.assign(uiStore._scrollPositionToPoint(initialScrollStart));
              scrollTo(obj2);
              flag2 = true;
            }
            tmp = flag2;
          }
          return tmp;
        };
        tmp10.handleScroll = function handleScroll(nativeEvent) {
          let EXPERIMENTAL_enableAnchorWhileScrolling;
          let contentInset;
          let endReachedThreshold;
          let fastListComputer;
          let hasReachedEndBefore;
          let horizontal;
          let onEndReached;
          let onScroll;
          ({
            contentInset,
            horizontal,
            onScroll,
            onEndReached,
            endReachedThreshold,
            EXPERIMENTAL_enableAnchorWhileScrolling,
          } = uiStore.props);
          const tmp = undefined !== EXPERIMENTAL_enableAnchorWhileScrolling && EXPERIMENTAL_enableAnchorWhileScrolling;
          ({ fastListComputer, hasReachedEndBefore } = uiStore.state);
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
          uiStore.containerSize = tmp2 - num - num2;
          const bound = Math.max(0, uiStore.getScrollPositionFromEvent(nativeEvent));
          const minResult = min(bound, fastListComputer.getSize() - uiStore.containerSize);
          uiStore.scrollPos = minResult;
          if (onScroll != null) {
            onScroll(nativeEvent);
          }
          if (uiStore.deferNextCompute) {
            uiStore.deferNextCompute = false;
            if (-1 !== uiStore.deferredCompute) {
              const _cancelAnimationFrame = cancelAnimationFrame;
              cancelAnimationFrame(uiStore.deferredCompute);
            }
            const _requestAnimationFrame = requestAnimationFrame;
            uiStore.deferredCompute = requestAnimationFrame(() => uiStore.computeBlocks());
          } else {
            const blocks = uiStore.computeBlocks();
          }
          if (!tmp) {
            const _clearTimeout = clearTimeout;
            clearTimeout(uiStore.disableAnchoringTimeout);
            const _setTimeout = setTimeout;
            uiStore.disableAnchoringTimeout = setTimeout(() => {
              clearTimeout(uiStore.disableAnchoringTimeout);
              uiStore.disableAnchoringTimeout = undefined;
            }, 100);
          }
          if (null != onEndReached) {
            const contentSize = nativeEvent.nativeEvent.contentSize;
            const _Math = Math;
            const tmp9 = horizontal ? contentSize.width : contentSize.height;
            if (endReachedThreshold == null) {
              endReachedThreshold = 0;
            }
            const ceilResult = ceil(tmp9 - endReachedThreshold - tmp2);
            const _Math2 = Math;
            const rounded = Math.ceil(minResult);
            if (rounded >= ceilResult) {
              if (!hasReachedEndBefore) {
                uiStore.setState({ hasReachedEndBefore: true });
                const obj2 = { distanceFromEnd: rounded - ceilResult };
                onEndReached(obj2);
              }
            }
            const tmp15 = rounded < ceilResult && hasReachedEndBefore;
            if (tmp15) {
              uiStore.setState({ hasReachedEndBefore: false });
            }
          }
          const result = uiStore.queueViewabilityChange();
        };
        tmp10.handleLayout = function handleLayout(nativeEvent) {
          let chunkBase;
          let contentInset;
          let fastListComputer;
          let horizontal;
          let isFirstLayout;
          let onLayout;
          ({ isFirstLayout, fastListComputer } = uiStore.state);
          ({ contentInset, onLayout, horizontal, chunkBase } = uiStore.props);
          const layout = nativeEvent.nativeEvent.layout;
          let num = horizontal ? contentInset.left : contentInset.top;
          const tmp = horizontal ? layout.width : layout.height;
          if (num == null) {
            num = 0;
          }
          let num2 = horizontal ? contentInset.right : contentInset.bottom;
          if (num2 == null) {
            num2 = 0;
          }
          uiStore.containerSize = tmp - num - num2;
          if (null == chunkBase) {
            fastListComputer.setInfo(uiStore.containerSize);
          }
          if (onLayout != null) {
            onLayout(nativeEvent, uiStore);
          }
          if (isFirstLayout) {
            if (null == chunkBase) {
              uiStore.setState(uiStore.getInitialState(uiStore.containerSize, fastListComputer, false));
            }
            const result = uiStore.queueViewabilityChange();
          }
          if (isFirstLayout) {
            const result1 = uiStore.clampInitialScrollPosition();
          }
          const blocks = uiStore.computeBlocks();
        };
        tmp10.handleMomentumScrollEnd = function handleMomentumScrollEnd(arg0) {
          const onScrollEnd = uiStore.props.onScrollEnd;
          if (onScrollEnd != null) {
            onScrollEnd(arg0);
          }
        };
        tmp10.handleScrollBeginDrag = function handleScrollBeginDrag(arg0) {
          const scrollAnchor = uiStore.scrollAnchor;
          scrollAnchor.handleUserScroll();
          const props = uiStore.props;
          const onScrollBeginDrag = props.onScrollBeginDrag;
          if (onScrollBeginDrag != null) {
            onScrollBeginDrag(arg0);
          }
        };
        const props2 = tmp10.props;
        ({ getAnchorIdFromIndex, getAnchorIndexFromId } = props2);
        let num2 = 5;
        if (props2.batchesToRender < 5) {
          const _Error4 = Error;
          const self8 = this;
          const self9 = this;
          const error = new Error("FastList: `batchesToRender` must be >= 6");
          throw error;
        } else {
          if (null != getAnchorIdFromIndex) {
            let tmp12 = globalThis;
            const _Error = Error;
            const self2 = this;
            let str = "FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither";
            const self3 = this;
            const error1 = new Error(
              "FastList: You must define BOTH `getAnchorIndexFromId` and `getAnchorIdFromIndex`, or neither",
            );
            throw error1;
          }
          const viewabilityConfig = tmp10.getViewabilityConfig();
          if (viewabilityConfig.minimumViewTime <= 0) {
            const _Error3 = Error;
            const self6 = this;
            const self7 = this;
            const error2 = new Error("FastList: `viewabilityConfig.minimumViewTime` must be greater than 0");
            throw error2;
          } else {
            if (viewabilityConfig.visibilityThreshold > 0) {
              let num3 = 1;
              if (viewabilityConfig.visibilityThreshold <= 1) {
                return tmp10;
              }
            }
            const _Error2 = Error;
            const self4 = this;
            let str2 =
              "FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1";
            const self5 = this;
            const error3 = new Error(
              "FastList: `viewabilityConfig.visibilityThreshold` must be floating point value greater than 0 and less than 1",
            );
            throw error3;
          }
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static getDerivedStateFromProps(headerSize, fastListComputer) {
    let blockEnd;
    let blockStart;
    let num;
    let num2;
    let tmp3;
    fastListComputer = fastListComputer.fastListComputer;
    obj = {
      headerSize: headerSize.headerSize,
      footerSize: headerSize.footerSize,
      sectionSize: headerSize.sectionSize,
      itemSize: headerSize.itemSize,
      sectionFooterSize: headerSize.sectionFooterSize,
      sections: headerSize.sections,
      insetStart: headerSize.insetStart,
      insetEnd: headerSize.insetEnd,
      stickyHeaderFooter: headerSize.stickyHeaderFooter,
      getRecyclerKey: headerSize.getRecyclerKey,
      persistantKeys: headerSize.persistantKeys,
      disableRecyclingOnFullCompute: headerSize.disableRecyclingOnFullCompute,
    };
    fastListComputer.updateProps(obj);
    if (0 === fastListComputer.batchSize) {
      const obj2 = { size: num + num2, items: [] };
      const merged = Object.assign(fastListComputer);
      num = headerSize.insetStart;
      if (num == null) {
        num = 0;
      }
      num2 = headerSize.insetEnd;
      if (num2 == null) {
        num2 = 0;
      }
      tmp3 = obj2;
    } else {
      tmp3 = null;
      if (fastListComputer.isDirty()) {
        const obj3 = {};
        const merged1 = Object.assign(fastListComputer);
        let items = fastListComputer.items;
        const compute = fastListComputer.compute;
        ({ blockStart, blockEnd } = fastListComputer);
        if (items == null) {
          items = [];
        }
        const merged2 = Object.assign(compute(blockStart, blockEnd, items));
        tmp3 = obj3;
      }
    }
    return tmp3;
  }
  computeScrollPosition(arg0, arg1) {
    const fastListComputer = this.state.fastListComputer;
    return fastListComputer.computeScrollPosition(false, arg0, arg1);
  }
  getInitialState(endImportTime, setInfo, isFirstLayout) {
    let batchSize;
    let batchesToRender;
    let blockEnd;
    let blockStart;
    let initialScrollItem;
    let initialScrollOrientation;
    let initialScrollSection;
    let initialScrollStart;
    let point;
    let stickySectionsVariant;
    let tmp3;
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
    const tmp = undefined !== horizontal && horizontal;
    setInfo.setInfo(endImportTime);
    let num2 = initialScrollStart;
    if (initialScrollStart == null) {
      num2 = 0;
    }
    if (null != initialScrollStart) {
      point = self._scrollPositionToPoint(initialScrollStart);
      tmp3 = num2;
    } else if (num > 0) {
      tmp3 = num2;
      if (endImportTime > 0) {
        const scrollPosition = setInfo.computeScrollPosition("default" === str2, num, initialScrollItem);
        tmp3 = num2;
        if (null != scrollPosition) {
          const _calculateScrollPosition = self._calculateScrollPosition;
          obj = { itemCoords: scrollPosition, fullSize: setInfo.getSize(), orientation: str, paddingEnd: 16 };
          const result = _calculateScrollPosition(obj);
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
    const tmp7 = isFirstLayout;
    if (tmp7) {
      let computeResult;
      if (endImportTime > 0) {
        let obj2;
        if (0 === endImportTime) {
          obj2 = { batchSize: 0, blockStart: 0, blockEnd: 0 };
        } else {
          const _Math = Math;
          const rounded = Math.ceil(endImportTime);
          const _Math2 = Math;
          const _Math3 = Math;
          const rounded1 = Math.floor(tmp3);
          const rounded2 = Math.ceil(rounded / 4);
          const _Math4 = Math;
          const _Math5 = Math;
          const result1 = Math.max(0, Math.round((rounded1 + rounded / 2) / rounded2) - batchesToRender / 2) * rounded2;
          obj2 = { batchSize: rounded2, blockStart: result1, blockEnd: result1 + rounded2 * batchesToRender };
        }
        ({ batchSize, blockStart, blockEnd } = obj2);
      }
      if (point == null) {
        point = { x: 0, y: 0 };
      }
      const tmp8 = tmp ? point.x : point.y;
      self.scrollPos = tmp8;
      if (null != scrollPosValue) {
        const result2 = scrollPosValue.set(tmp8);
        self.scrollPosValue = scrollPosValue;
      } else {
        const obj3 = ReanimatedRexport2;
        self.scrollPosValue = obj3.makeMutable(tmp8);
      }
      if (endImportTime > 0) {
        computeResult = setInfo.compute(blockStart, blockEnd, items, true);
      } else {
        computeResult = { size: 0, items: [] };
      }
      const obj4 = {
        batchSize,
        blockStart,
        blockEnd,
        isFirstLayout,
        fastListComputer: setInfo,
        initialContentOffset: point,
        hasReachedEndBefore: false,
      };
      const merged = Object.assign(computeResult);
      return obj4;
    }
    batchSize = Math.ceil(endImportTime / 4);
    blockEnd = tmp3 + endImportTime;
    blockStart = tmp3;
  }
  componentDidMount() {
    const result = this.queueViewabilityChange();
  }
  getSnapshotBeforeUpdate(getAnchorIdFromIndex, isFirstLayout) {
    let tmp2;
    const self = this;
    getAnchorIdFromIndex = getAnchorIdFromIndex.getAnchorIdFromIndex;
    const EXPERIMENTAL_enableAnchorWhileScrolling = this.props.EXPERIMENTAL_enableAnchorWhileScrolling;
    isFirstLayout = self.state.isFirstLayout;
    const tmp = undefined !== EXPERIMENTAL_enableAnchorWhileScrolling && EXPERIMENTAL_enableAnchorWhileScrolling;
    if (tmp) {
      const tmp4 = null == getAnchorIdFromIndex || isFirstLayout || isFirstLayout !== isFirstLayout.isFirstLayout;
      if (!tmp4) {
        const scrollAnchor = self.scrollAnchor;
        scrollAnchor.findOrUpdateAnchor(getAnchorIdFromIndex, isFirstLayout.items);
      }
      const scrollAnchor2 = self.scrollAnchor;
      tmp2 = scrollAnchor2.hasAnchor() || null;
      scrollAnchor2.hasAnchor() || null;
    } else {
      tmp2 = null;
    }
    return tmp2;
  }
  componentDidUpdate(scrollPosValue, isFirstLayout, arg2) {
    const self = this;
    if (scrollPosValue.scrollPosValue !== this.props.scrollPosValue) {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("FastList: scrollPosValue cannot changed after mounting");
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
      const tmp3 = arg2;
      if (tmp3) {
        self.anchorScroll();
      }
    }
  }
  getViewabilityConfig() {
    let visibilityThreshold;
    const viewabilityConfig = this.props.viewabilityConfig;
    let minimumViewTime;
    if (viewabilityConfig != null) {
      minimumViewTime = viewabilityConfig.minimumViewTime;
    }
    if (minimumViewTime == null) {
      minimumViewTime = c27;
    }
    obj = { minimumViewTime, visibilityThreshold };
    visibilityThreshold = undefined;
    if (viewabilityConfig != null) {
      visibilityThreshold = viewabilityConfig.visibilityThreshold;
    }
    if (visibilityThreshold == null) {
      visibilityThreshold = c28;
    }
    return obj;
  }
  queueViewabilityChange() {
    const self = this;
    if (null != this.props.onViewableItemsChanged) {
      const _clearTimeout = clearTimeout;
      const minimumViewTime = self.getViewabilityConfig().minimumViewTime;
      clearTimeout(self.viewabilityDebounce);
      const _setTimeout = setTimeout;
      self.viewabilityDebounce = setTimeout(self.handleViewabilityChange, minimumViewTime);
    }
  }
  reset() {
    let fastListComputer;
    let getInitialState;
    let items;
    let setState;
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
  }
  componentWillUnmount() {
    const self = this;
    if (-1 !== this.deferredCompute) {
      const _cancelAnimationFrame = cancelAnimationFrame;
      cancelAnimationFrame(self.deferredCompute);
    }
    if (-1 !== self.viewabilityDebounce) {
      const _clearTimeout = clearTimeout;
      clearTimeout(self.viewabilityDebounce);
    }
  }
  anchorScroll() {
    let getAnchorIndexFromId;
    let stickySectionsVariant;
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
          const scrollPosition = fastListComputer.computeScrollPosition(
            "default" === str,
            anchorIndex.section,
            anchorIndex.item,
          );
          const tmp3 = null != scrollPosition && self.scrollPos !== scrollPosition.scrollPosition - anchorOffset;
          if (tmp3) {
            self.scrollTo(scrollPosition.scrollPosition - anchorOffset);
          }
        }
      }
    }
  }
  getSectionItemFromPosition(arg0, arg1) {
    const fastListComputer = this.state.fastListComputer;
    return fastListComputer.getSectionItemFromPosition(arg0, arg1);
  }
  getScrollPositionFromEvent(nativeEvent) {
    const contentOffset = nativeEvent.nativeEvent.contentOffset;
    return this.props.horizontal ? contentOffset.x : contentOffset.y;
  }
  restoreScrollPosition() {
    let initialScrollItem;
    let initialScrollSection;
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
      const scrollToLocation = self.scrollToLocation;
      obj = { section: num, item: initialScrollItem, orientation: str, paddingEnd: 16, setAnchor: true };
      if (initialScrollItem == null) {
        initialScrollItem = -1;
      }
      if (scrollToLocation(obj)) {
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
  }
  clampInitialScrollPosition() {
    let fastListComputer;
    let initialContentOffset;
    const self = this;
    ({ fastListComputer, initialContentOffset } = this.state);
    if (null != initialContentOffset) {
      const horizontal = self.props.horizontal;
      if (horizontal != null) {
        let y;
        if (horizontal) {
          y = initialContentOffset.x;
        }
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const bound = Math.max(0, Math.min(y, Math.max(0, fastListComputer.getSize() - self.containerSize)));
        if (bound !== y) {
          self.scrollPos = bound;
          const scrollPosValue = self.scrollPosValue;
          const result = scrollPosValue.set(bound);
        }
      }
      y = initialContentOffset.y;
    }
  }
  computeBlocks() {
    let batchesToRender;
    let chunkBase;
    let isFirstLayout;
    let items;
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
      obj = { batchSize: rounded2, blockStart: result, blockEnd: result + rounded2 * batchesToRender };
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
    const setState = self.setState;
    const obj2 = { isFirstLayout: false };
    const merged = Object.assign(obj);
    const merged1 = Object.assign(fastListComputer.compute(obj.blockStart, obj.blockEnd, items));
    setState(obj2);
  }
  renderItems() {
    let fn;
    let fn2;
    let fn3;
    let fn4;
    let fn5;
    let fn6;
    let item;
    let key;
    let layoutSize;
    let layoutStart;
    let recyclerKey;
    let section;
    let type;
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
    const tmp = undefined !== optimizeListItemRender && optimizeListItemRender;
    const items = self.state.items;
    let flag = self.props.horizontal;
    if (flag == null) {
      flag = false;
    }
    const items1 = [];
    const item1 = items.forEach((type) => {
      if (type.type === obj.SECTION) {
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
          let obj2 = { horizontal: flag, layoutSize };
          let _HermesInternal7 = HermesInternal;
          let arr = items2.push(closure_11(closure_26, obj2, "" + key));
        } else if (tmp45.HEADER === type) {
          let obj3 = {
            recyclerKey,
            horizontal: flag,
            disableWrapper: tmp2,
            fastListInstance: self,
            layoutSize,
            debug: false,
            children: fn6,
          };
          fn6 = renderHeader;
          let push4 = items2.push;
          if (!tmp) {
            fn6 = () => renderHeader(...HermesBuiltin.copyRestArgs());
          }
          let _HermesInternal6 = HermesInternal;
          let push4Result = push4(closure_11(closure_25, obj3, "" + key));
        } else if (tmp45.FOOTER === type) {
          let obj4 = {
            recyclerKey,
            horizontal: flag,
            disableWrapper: tmp2,
            fastListInstance: self,
            layoutSize,
            debug: false,
            children: fn5,
          };
          fn5 = renderFooter;
          let push3 = items2.push;
          if (!tmp) {
            fn5 = () => renderFooter(...HermesBuiltin.copyRestArgs());
          }
          let _HermesInternal5 = HermesInternal;
          let push3Result = push3(closure_11(closure_25, obj4, "" + key));
        } else if (tmp45.SECTION === type) {
          let arr2 = items1.shift();
          if ("default" !== str) {
            let obj5 = {
              recyclerKey,
              horizontal: flag,
              disableWrapper: tmp2,
              layoutStart,
              layoutSize,
              fastListInstance: self,
              section,
              debug: false,
              children: fn4,
            };
            fn4 = renderSection;
            let push2 = items2.push;
            if (!tmp) {
              fn4 = () => renderSection(...HermesBuiltin.copyRestArgs());
            }
            let _HermesInternal4 = HermesInternal;
            let push2Result = push2(closure_11(closure_22, obj5, "" + key));
          } else {
            let obj6 = {
              recyclerKey,
              horizontal: flag,
              disableWrapper: tmp2,
              layoutStart,
              layoutSize,
              nextSectionLayoutPosition: items1[0],
              scrollPosValue: self.scrollPosValue,
              fastListInstance: self,
              section,
              debug: false,
              children: fn3,
            };
            fn3 = renderSection;
            let push6 = items2.push;
            if (!tmp) {
              fn3 = () => renderSection(...HermesBuiltin.copyRestArgs());
            }
            let _HermesInternal3 = HermesInternal;
            let push6Result = push6(closure_11(closure_21, obj6, "" + key));
          }
        } else if (tmp45.ITEM === type) {
          obj = {
            recyclerKey,
            horizontal: flag,
            disableWrapper: tmp2,
            layoutSize,
            fastListInstance: self,
            section,
            item,
            debug: false,
            children: fn2,
          };
          fn2 = renderItem;
          let push = items2.push;
          if (!tmp) {
            fn2 = () => renderItem(...HermesBuiltin.copyRestArgs());
          }
          let _HermesInternal2 = HermesInternal;
          let arr3 = push(closure_11(closure_24, obj, "" + key));
        } else if (tmp45.SECTION_FOOTER === type) {
          let obj7 = {
            recyclerKey,
            horizontal: flag,
            disableWrapper: tmp2,
            fastListInstance: self,
            layoutSize,
            section,
            debug: false,
            children: fn,
          };
          fn = renderSectionFooter;
          let push5 = items2.push;
          if (!tmp) {
            fn = () => renderSectionFooter(...HermesBuiltin.copyRestArgs());
          }
          let _HermesInternal = HermesInternal;
          let push5Result = push5(closure_11(closure_23, obj7, "" + key));
        }
      }
      continue;
    }
    return items2;
  }
  isEmpty() {
    const sections = this.props.sections;
    return 0 === sections.reduce((acc, item) => acc + item, 0);
  }
  setDisableRecycling(arg0) {
    const fastListComputer = this.state.fastListComputer;
    fastListComputer.setDisableRecycling(arg0);
  }
  render() {
    let BottomSheetScrollView;
    let EXPERIMENTAL_enableAnchorWhileScrolling;
    let batchesToRender;
    let childrenWrapper;
    let chunkBase;
    let debugLayout;
    let disableContentWrappers;
    let disableLegacyGestureHandling;
    let disableRecyclingOnFullCompute;
    let endReachedThreshold;
    let flag;
    let footerSize;
    let getAnchorIdFromIndex;
    let getAnchorIndexFromId;
    let getRecyclerKey;
    let headerSize;
    let initialScrollItem;
    let initialScrollOrientation;
    let initialScrollSection;
    let initialScrollStart;
    let itemSize;
    let manualRef;
    let onEndReached;
    let onLayout;
    let onScroll;
    let onScrollEnd;
    let onViewableItemsChanged;
    let optimizeListItemRender;
    let persistantKeys;
    let removeClippedSubviews;
    let renderAccessory;
    let renderFooter;
    let renderHeader;
    let renderItem;
    let renderSection;
    let renderSectionFooter;
    let scrollPosValue;
    let sectionFooterSize;
    let sectionSize;
    let sections;
    let stickyHeaderFooter;
    let stickySectionsVariant;
    let viewabilityConfig;
    const self = this;
    const props = this.props;
    ({
      manualRef,
      onScroll,
      onScrollEnd,
      onLayout,
      renderHeader,
      renderFooter,
      renderSection,
      renderItem,
      renderSectionFooter,
      getRecyclerKey,
      onEndReached,
      endReachedThreshold,
      headerSize,
      footerSize,
      sectionSize,
      sectionFooterSize,
      itemSize,
      sections,
      scrollPosValue,
      batchesToRender,
      optimizeListItemRender,
      initialScrollSection,
      initialScrollItem,
      initialScrollOrientation,
      initialScrollStart,
      getAnchorIdFromIndex,
      getAnchorIndexFromId,
      EXPERIMENTAL_enableAnchorWhileScrolling,
      chunkBase,
      disableContentWrappers,
      childrenWrapper,
      stickyHeaderFooter,
      stickySectionsVariant,
      persistantKeys,
      disableRecyclingOnFullCompute,
      disableLegacyGestureHandling,
      viewabilityConfig,
      onViewableItemsChanged,
      debugLayout,
      renderAccessory,
      removeClippedSubviews,
    } = props);
    const onScrollWorklet = props.onScrollWorklet;
    if (undefined === removeClippedSubviews) {
      obj = PlatformUtils;
      removeClippedSubviews = obj.isAndroid();
    }
    const inActionSheet = props.inActionSheet;
    const tmp3 = _objectWithoutProperties(props, closure_3);
    if (inActionSheet) {
      BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
    } else {
      BottomSheetScrollView = metroImportAll;
    }
    const obj3 = {
      accessibilityRole: "list",
      ref: refObjectUnionAsPropDefault(self.scrollView),
      scrollEventThrottle: 16,
      contentOffset: self.state.initialContentOffset,
      removeClippedSubviews,
      children: self.renderItems(),
    };
    const merged = Object.assign(tmp3);
    ({
      handleScroll: obj2.onScroll,
      handleLayout: obj2.onLayout,
      handleMomentumScrollEnd: obj2.onMomentumScrollEnd,
      handleScrollBeginDrag: obj2.onScrollBeginDrag,
    } = self);
    const children = [unpackModuleId(BottomSheetScrollView, obj3), ,];
    const obj5 = {
      scrollViewRef: self.scrollView,
      scrollPosValue: self.scrollPosValue,
      horizontal: flag,
      onScrollWorklet,
    };
    flag = self.props.horizontal;
    if (flag == null) {
      flag = false;
    }
    children[1] = unpackModuleId(closure_32, obj5);
    let renderAccessoryResult = null;
    if (null != renderAccessory) {
      renderAccessoryResult = renderAccessory(self);
    }
    children[2] = renderAccessoryResult;
    return authStore(closure_12, { children });
  }
}
const prototype4 = FastList.prototype;
FastList.defaultProps = {
  batchesToRender: 12,
  contentInset: { top: 0, right: 0, left: 0, bottom: 0 },
  disableLegacyGestureHandling: false,
  disableRecyclingOnFullCompute: false,
  stickyHeaderFooter: false,
};
const __initData3 = {
  code: "function FastListTsx3(event){const{horizontal,workletMounted,scrollPosValue,onScrollWorklet}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get()){return;}workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));if(onScrollWorklet!=null){const layoutSize=!horizontal?event.layoutMeasurement.height:event.layoutMeasurement.width;onScrollWorklet(scrollPosition,contentSize,layoutSize);}}",
};
const __initData4 = {
  code: "function FastListTsx4(event){const{horizontal,workletMounted,scrollPosValue,onScrollWorklet}=this.__closure;const scrollPosition=!horizontal?event.contentOffset.y:event.contentOffset.x;const contentSize=!horizontal?event.contentSize.height:event.contentSize.width;if(contentSize===0&&!workletMounted.get())return;workletMounted.set(true);scrollPosValue.set(Math.min(scrollPosition,contentSize));if(onScrollWorklet!=null){const layoutSize=!horizontal?event.layoutMeasurement.height:event.layoutMeasurement.width;onScrollWorklet(scrollPosition,contentSize,layoutSize);}}",
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_32 = ReactCompilerGating.isReactCompilerEnabled()
  ? (scrollViewRef) => {
      let horizontal;
      let workletMounted;
      let tmp = scrollViewRef;
      let tmp2 = horizontal;
      obj = scrollViewRef(horizontal[8]);
      const cResult = obj.c(10);
      scrollViewRef = scrollViewRef.scrollViewRef;
      const scrollPosValue = scrollViewRef.scrollPosValue;
      horizontal = scrollViewRef.horizontal;
      const onScrollWorklet = scrollViewRef.onScrollWorklet;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = tmp(tmp2[12]);
        const mutable = tmpResult.makeMutable(false);
        cResult[0] = mutable;
        workletMounted = mutable;
      } else {
        workletMounted = cResult[0];
      }
      if (cResult[1] === horizontal) {
        if (cResult[2] === onScrollWorklet) {
          let tmp6;
          let tmp7;
          if (cResult[3] === scrollPosValue) {
            tmp6 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const items = ["onScroll"];
            cResult[5] = items;
            tmp7 = items;
          } else {
            tmp7 = cResult[5];
          }
          const tmpResult2 = tmp(tmp2[12]);
          const event = tmpResult2.useEvent(tmp6, tmp7);
          if (cResult[6] === event) {
            let tmp9;
            let tmp10;
            if (cResult[7] === scrollViewRef) {
              tmp9 = cResult[8];
              tmp10 = cResult[9];
            }
            const effect = react.useEffect(tmp9, tmp10);
            return null;
          }
          const fn2 = function v() {
            let closure_0;
            const tmp = closure_1_9(scrollViewRef.current);
            scrollViewRef = tmp;
            if (null != tmp) {
              let workletEventHandler = event.workletEventHandler;
              workletEventHandler.registerForEvents(tmp);
              return () => {
                const workletEventHandler = event.workletEventHandler;
                workletEventHandler.unregisterFromEvents(closure_0);
              };
            }
          };
          const items1 = [event, scrollViewRef];
          cResult[6] = event;
          cResult[7] = scrollViewRef;
          cResult[8] = fn2;
          cResult[9] = items1;
          tmp10 = items1;
          tmp9 = fn2;
        }
      }
      const fn = function y(contentOffset) {
        contentOffset = contentOffset.contentOffset;
        const tmp2 = horizontal ? contentOffset.x : contentOffset.y;
        const contentSize = contentOffset.contentSize;
        const tmp3 = horizontal ? contentSize.width : contentSize.height;
        if (0 !== tmp3) {
          const result = first.set(true);
          const _Math = Math;
          const result1 = scrollPosValue.set(Math.min(tmp2, tmp3));
          if (null != onScrollWorklet) {
            const layoutMeasurement = contentOffset.layoutMeasurement;
            tmp10(tmp2, tmp3, horizontal ? layoutMeasurement.width : layoutMeasurement.height);
          }
        }
      };
      fn.__closure = { horizontal, workletMounted, scrollPosValue, onScrollWorklet };
      fn.__workletHash = 9004791510548;
      fn.__initData = __initData3;
      cResult[1] = horizontal;
      cResult[2] = onScrollWorklet;
      cResult[3] = scrollPosValue;
      cResult[4] = fn;
      tmp6 = fn;
    }
  : (scrollViewRef) => {
      scrollViewRef = scrollViewRef.scrollViewRef;
      const scrollPosValue = scrollViewRef.scrollPosValue;
      const horizontal = scrollViewRef.horizontal;
      const onScrollWorklet = scrollViewRef.onScrollWorklet;
      obj = scrollViewRef(horizontal[12]);
      const mutable = obj.makeMutable(false);
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
      fn.__workletHash = 891241611509;
      fn.__initData = __initData4;
      const obj2 = scrollViewRef(horizontal[12]);
      const event = obj2.useEvent(fn, ["onScroll"]);
      const items = [event, scrollViewRef];
      const effect = react.useEffect(() => {
        let closure_0;
        const tmp = closure_1_9(scrollViewRef.current);
        scrollViewRef = tmp;
        if (null != tmp) {
          let workletEventHandler = event.workletEventHandler;
          workletEventHandler.registerForEvents(tmp);
          return () => {
            const workletEventHandler = event.workletEventHandler;
            workletEventHandler.unregisterFromEvents(closure_0);
          };
        }
      }, items);
      return null;
    };
const animatedComponent = ReanimatedRexport.createAnimatedComponent(FastList);
let size = size_mod;
let result1 = size.fileFinishedImporting("lib/native/FastList.tsx");

export default FastList;
export const DEFAULT_BATCHES_TO_RENDER = 12;
export const MINIMUM_BATCHES_TO_RENDER = 5;
export const getItemSizeOverrideKey = function getItemSizeOverrideKey(arg0, arg1, arg2) {
  return "" + arg0 + ":" + arg1 + ":" + arg2;
};
export { FastListItemTypes };
export { FastListComputer };
export const AnimatedFastList = animatedComponent;
