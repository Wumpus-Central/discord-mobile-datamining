// === Module 18853: ChannelListLegendList ===

// Module 18853 (ChannelListLegendList)
import FastList from "FastList" /* 7781 */;
import useChannelListFlatDataDefault from "useChannelListFlatData" /* 18854 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ Fragment: closure_4, jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
let closure_7 = [];
let closure_8 = { item: "delete", positionPercentage: false };
let closure_9 = { zIndex: 5 };
let closure_10 = { code: "(function ChannelListLegendListTsx1(event){let[scrollPosValue,onScrollWorklet,onScroll,scheduleOnRN]=this.__closure;scrollPosValue.set(event.contentOffset.y);onScrollWorklet(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);if(onScroll!=null){scheduleOnRN(onScroll);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListLegendList.tsx");

export default noop.memo(function ChannelListLegendList(listViewportHeight) {
  ({ headerSize, initialScrollItem: c0, initialScrollSection: c1, insetEnd } = listViewportHeight);
  listViewportHeight = listViewportHeight.listViewportHeight;
  noop = listViewportHeight;
  const renderHeader = listViewportHeight.renderHeader;
  const renderItem = listViewportHeight.renderItem;
  const renderSectionFooter = listViewportHeight.renderSectionFooter;
  const renderSectionHeader = listViewportHeight.renderSectionHeader;
  const scrollIndicatorInsetBottom = listViewportHeight.scrollIndicatorInsetBottom;
  const drawDistanceMode = listViewportHeight.drawDistanceMode;
  c11 = undefined;
  c12 = undefined;
  contentSize = undefined;
  ({ endReachedThreshold, getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, onEndReached, onScroll, onScrollWorklet, renderAccessory, sections, ref } = listViewportHeight);
  const ref1 = noop.useRef(null);
  let tmp3 = useChannelListFlatDataDefault({ getItemSize, getRecyclerKey, getSectionFooterSize, getSectionHeaderSize, headerSize, sections });
  let index = tmp3;
  ({ offsets: c11, sizes: c12, contentSize } = tmp3);
  const memo = noop.useMemo(() => {
    let num = c1;
    let num2 = c1;
    if (c1 == null) {
      num2 = 0;
    }
    if (num2 <= 0) {
      if (null == c0) {
        return 0;
      }
    }
    if (num == null) {
      num = 0;
    }
    index = index.getIndex(num, c0);
    if (null == index) {
      return 0;
    } else {
      let diff = tmp11;
      if (_undefined5[index] < c3) {
        const _Math = Math;
        const _Math2 = Math;
        const sum = tmp11 + Math.floor(tmp13 / 2);
        diff = sum - Math.floor(c3 / 2);
      }
      const _Math3 = Math;
      const _Math4 = Math;
      return Math.max(0, Math.min(diff, contentSize + c2 - c3));
    }
  }, []);
  const sharedValue = require("module_1652").useSharedValue(memo);
  const ref2 = noop.useRef(tmp3);
  ref2.current = tmp3;
  const ref3 = noop.useRef(0);
  ref3.current = contentSize + insetEnd;
  items = [listViewportHeight, sharedValue];
  const memo1 = noop.useMemo(() => {
    let obj = {};
    Object.defineProperty(obj, "containerSize", {
      get: () => {
        const current = ref1.current;
        let num;
        if (current != null) {
          num = current.getState().scrollLength;
        }
        if (num == null) {
          num = 0;
        }
        return num;
      },
      set: undefined
    });
    obj.scrollPosValue = sharedValue;
    obj.getItems = function getItems() {
      const current = ref1.current;
      state = undefined;
      if (current != null) {
        state = current.getState();
      }
      if (null == state) {
        return renderSectionHeader;
      } else {
        items = [];
        const _Math = Math;
        const bound = Math.min(state.endBuffered, ref2.current.listData.length - 1);
        const _Math2 = Math;
        let bound1 = Math.max(0, state.startBuffered);
        if (bound1 <= bound) {
          do {
            let tmp3 = ref2.current.listData[bound1];
            let obj = { type: tmp3.type, key: bound1, layoutStart: ref2.current.offsets[bound1], layoutSize: ref2.current.sizes[bound1], section: tmp3.section, item: tmp3.item, recyclerKey: tmp3.key };
            let arr = items.push(obj);
            bound1 = bound1 + 1;
          } while (bound1 <= bound);
        }
        return items;
      }
    };
    obj.getScrollPosition = function getScrollPosition() {
      const current = ref1.current;
      let num;
      if (current != null) {
        num = current.getState().scroll;
      }
      if (num == null) {
        num = 0;
      }
      return num;
    };
    obj.getSectionItemFromPosition = function getSectionItemFromPosition(arg0) {
      const offsets = ref2.current.offsets;
      let diff = offsets.length - 1;
      let num = 0;
      let tmp3;
      if (0 <= diff) {
        while (true) {
          let tmp4 = num + diff >> 1;
          let diff1 = diff;
          if (arg0 < offsets[tmp4]) {
            diff1 = tmp4 - 1;
            let sum = num;
            diff = diff1;
            num = sum;
            if (sum > diff1) {
              break;
            }
          } else {
            tmp3 = tmp4;
            if (arg0 < offsets[tmp4] + tmp[tmp4]) {
              break;
            } else {
              sum = tmp4 + 1;
            }
          }
          break;
        }
      }
      if (null == tmp3) {
        return scrollIndicatorInsetBottom;
      } else {
        const obj = { type: ref2.current.listData[tmp3].type, key: tmp3, layoutStart: ref2.current.offsets[tmp3], layoutSize: ref2.current.sizes[tmp3], section: null, item: null, recyclerKey: null };
        ({ section: obj.section, item: obj.item, key: obj.recyclerKey } = ref2.current.listData[tmp3]);
        const obj2 = { item: obj, positionPercentage: null };
        let num2 = 0;
        if (obj.layoutSize > 0) {
          num2 = (arg0 - obj.layoutStart) / obj.layoutSize;
        }
        obj2.positionPercentage = num2;
        return obj2;
      }
    };
    obj.scrollToLocation = function scrollToLocation(orientation) {
      ({ item, animated } = orientation);
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
      if (null != item) {
        if (item < 0) {
          return false;
        }
      }
      const current = ref2.current;
      index = current.getIndex(orientation.section, item);
      if (null == index) {
        return false;
      } else {
        const current4 = ref1.current;
        let num4;
        if (current4 != null) {
          num4 = current4.getState().scrollLength;
        }
        if (num4 == null) {
          num4 = 0;
        }
        if (num4 <= 0) {
          num4 = _undefined3;
        }
        const current2 = ref1.current;
        let num6;
        if (current2 != null) {
          num6 = current2.getState().scroll;
        }
        if (num6 == null) {
          num6 = 0;
        }
        let str2 = "top";
        if (ref2.current.sizes[index] < num4) {
          str2 = str;
        }
        if ("visible" === str2) {
          if (tmp11 >= num6 + num) {
            if (tmp11 + tmp12 <= num6 + (num4 - num2)) {
              return false;
            }
          }
          if (tmp11 < num6) {
            let diff = tmp11 - num;
          } else {
            diff = tmp11 + tmp12 + num2 - num4;
          }
        } else {
          if ("center" === str2) {
            const _Math = Math;
            const _Math2 = Math;
            const sum = tmp11 + Math.floor(tmp12 / 2);
            let diff1 = sum - Math.floor(num4 / 2);
          } else {
            diff1 = tmp11 - num;
          }
          const current3 = ref1.current;
          if (current3 != null) {
            const obj = { offset: null, animated: null };
            const _Math3 = Math;
            const _Math4 = Math;
            obj.offset = Math.max(0, Math.min(diff1, ref.current - num4));
            obj.animated = animated;
            current3.scrollToOffset(obj);
          }
          return true;
        }
      }
    };
    obj.scrollToTop = function scrollToTop() {
      let flag = arg0;
      if (arg0 === undefined) {
        flag = true;
      }
      const current = ref1.current;
      if (current != null) {
        const obj = { offset: 0, animated: flag };
        current.scrollToOffset(obj);
      }
    };
    return obj;
  }, items);
  const items1 = [memo1];
  const imperativeHandle = noop.useImperativeHandle(ref, () => memo1, items1);
  let obj2 = require("module_1652");
  const tmp5 = _require;
  const items2 = [index, sharedValue, onScrollWorklet, onScroll, require("module_1705").scheduleOnRN];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  [tmp11, tmp12, tmp13, tmp14, tmp15] = items2;
  class ChannelListLegendListTsx1 {
    constructor(arg0) {
      result = closure_0.set(listViewportHeight.contentOffset.y);
      tmp2 = closure_1(listViewportHeight.contentOffset.y, listViewportHeight.contentSize.height, listViewportHeight.layoutMeasurement.height);
      if (null != closure_2) {
        tmp4 = closure_3;
        tmp5 = closure_3(tmp3);
      }
      return;
    }
  }
  const items3 = [tmp12, tmp13, tmp14, tmp15];
  ChannelListLegendListTsx1.__closure = items3;
  ChannelListLegendListTsx1.__workletHash = 15385241443618;
  ChannelListLegendListTsx1.__initData = tmp11;
  const items4 = [renderItem, renderSectionFooter, renderSectionHeader];
  const obj3 = require("module_1652");
  const callback = obj.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (FastList.FastListItemTypes.SECTION === type) {
      return renderSectionHeader(item.section);
    } else if (FastList.FastListItemTypes.SECTION_FOOTER === type) {
      return renderSectionFooter(item.section);
    } else {
      return renderItem(item.section, item.item);
    }
  }, items4);
  const callback1 = obj.useCallback((type) => type.type, []);
  const callback2 = obj.useCallback((key) => key.key, []);
  const items5 = [memo1, renderHeader];
  const callback3 = obj.useCallback((arg0, arg1) => ref2.current.sizes[arg1], []);
  const items6 = [insetEnd];
  const memo2 = obj.useMemo(() => hasOwnProperty(React4, { children: renderHeader(memo1) }), items5);
  const items7 = [scrollIndicatorInsetBottom];
  const memo3 = obj.useMemo(() => ({ paddingBottom }), items6);
  let num = 0;
  const memo4 = obj.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items7);
  if (listViewportHeight > 0) {
    num = endReachedThreshold / listViewportHeight;
  }
  const obj4 = { ref: ref1, contentContainerStyle: memo3, data: tmp3.listData, drawDistance: null, estimatedHeaderSize: null, getFixedItemSize: null, getItemType: null, initialScrollOffset: null, keyExtractor: null, ListHeaderComponent: null, ListHeaderComponentStyle: null, onEndReached: null, onEndReachedThreshold: null, onScroll: null, recycleItems: true, renderItem: null, scrollIndicatorInsets: null, automaticallyAdjustsScrollIndicatorInsets: false };
  if ("viewport" === drawDistanceMode) {
    let num2 = listViewportHeight;
  } else if ("small" === drawDistanceMode) {
    num2 = 100;
  }
  const obj5 = { children: null };
  obj4.drawDistance = num2;
  obj4.estimatedHeaderSize = headerSize;
  obj4.getFixedItemSize = callback3;
  obj4.getItemType = callback1;
  obj4.initialScrollOffset = memo;
  obj4.keyExtractor = callback2;
  obj4.ListHeaderComponent = memo2;
  obj4.ListHeaderComponentStyle = ref1;
  obj4.onEndReached = onEndReached;
  obj4.onEndReachedThreshold = num;
  obj4.onScroll = require("module_1652").useAnimatedScrollHandler(ChannelListLegendListTsx1);
  obj4.renderItem = callback;
  obj4.scrollIndicatorInsets = memo4;
  const items8 = [renderItem(tmp5(15066).AnimatedLegendList, obj4), renderAccessory(memo1)];
  obj5.children = items8;
  return renderSectionFooter(renderHeader, obj5);
});