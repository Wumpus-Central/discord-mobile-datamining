// discord_app/modules/channel_list_v2/native/ChannelListLegendList.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import FastList from "../../../lib/native/FastList.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ Fragment: closure_4, jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let closure_7 = [];
let closure_8 = { item: "emoji", positionPercentage: false };
let closure_9 = { zIndex: 5 };
let closure_10 = {
  code: "function ChannelListLegendListTsx1(event){const{scrollPosValue,onScrollWorklet,onScroll,runOnJS}=this.__closure;scrollPosValue.set(event.contentOffset.y);onScrollWorklet(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);if(onScroll!=null){runOnJS(onScroll)();}}",
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListLegendList.tsx");

export default noop.memo(function ChannelListLegendList(listViewportHeight) {
  ({ headerSize, initialScrollItem: require, initialScrollSection: importDefault, insetEnd } = listViewportHeight);
  listViewportHeight = listViewportHeight.listViewportHeight;
  const onScroll = listViewportHeight.onScroll;
  const onScrollWorklet = listViewportHeight.onScrollWorklet;
  const renderHeader = listViewportHeight.renderHeader;
  const renderItem = listViewportHeight.renderItem;
  const renderSectionFooter = listViewportHeight.renderSectionFooter;
  const renderSectionHeader = listViewportHeight.renderSectionHeader;
  const scrollIndicatorInsetBottom = listViewportHeight.scrollIndicatorInsetBottom;
  c13 = undefined;
  c14 = undefined;
  contentSize = undefined;
  ({
    endReachedThreshold,
    getItemSize,
    getRecyclerKey,
    getSectionFooterSize,
    getSectionHeaderSize,
    onEndReached,
    renderAccessory,
    sections,
    ref,
  } = listViewportHeight);
  const ref1 = listViewportHeight.useRef(null);
  let tmp3 = require("useChannelListFlatData")({
    getItemSize,
    getRecyclerKey,
    getSectionFooterSize,
    getSectionHeaderSize,
    headerSize,
    sections,
  });
  let index = tmp3;
  ({ offsets: c13, sizes: c14, contentSize } = tmp3);
  const memo = listViewportHeight.useMemo(() => {
    let num = importDefault;
    let num2 = importDefault;
    if (importDefault == null) {
      num2 = 0;
    }
    if (num2 <= 0) {
      if (null == _require) {
        return 0;
      }
    }
    if (num == null) {
      num = 0;
    }
    index = index.getIndex(num, _require);
    if (null == index) {
      return 0;
    } else {
      let diff = tmp11;
      if (_undefined2[index] < listViewportHeight) {
        const _Math = Math;
        const _Math2 = Math;
        const sum = tmp11 + Math.floor(tmp13 / 2);
        diff = sum - Math.floor(listViewportHeight / 2);
      }
      const _Math3 = Math;
      const _Math4 = Math;
      return Math.max(0, Math.min(diff, contentSize + insetEnd - listViewportHeight));
    }
  }, []);
  const sharedValue = require("ReanimatedRexport").useSharedValue(memo);
  const ref2 = listViewportHeight.useRef(tmp3);
  ref2.current = tmp3;
  const ref3 = listViewportHeight.useRef(0);
  ref3.current = contentSize + insetEnd;
  let items = [listViewportHeight, sharedValue];
  const memo1 = listViewportHeight.useMemo(() => {
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
      set: undefined,
    });
    obj.scrollPosValue = sharedValue;
    obj.getItems = function getItems() {
      const current = ref1.current;
      let state;
      if (current != null) {
        state = current.getState();
      }
      if (null == state) {
        return renderItem;
      } else {
        const items = [];
        const _Math = Math;
        const bound = Math.min(state.endBuffered, ref2.current.listData.length - 1);
        const _Math2 = Math;
        let bound1 = Math.max(0, state.startBuffered);
        if (bound1 <= bound) {
          do {
            let tmp3 = ref2.current.listData[bound1];
            let obj = {
              type: tmp3.type,
              key: bound1,
              layoutStart: ref2.current.offsets[bound1],
              layoutSize: ref2.current.sizes[bound1],
              section: tmp3.section,
              item: tmp3.item,
              recyclerKey: tmp3.key,
            };
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
          let tmp4 = (num + diff) >> 1;
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
        return renderSectionFooter;
      } else {
        const obj = {
          type: ref2.current.listData[tmp3].type,
          key: tmp3,
          layoutStart: ref2.current.offsets[tmp3],
          layoutSize: ref2.current.sizes[tmp3],
          section: null,
          item: null,
          recyclerKey: null,
        };
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
          num4 = listViewportHeight;
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
  const imperativeHandle = listViewportHeight.useImperativeHandle(ref, () => memo1, items1);
  let obj = require("ReanimatedRexport");
  class G {
    constructor(arg0) {
      result = closure_16.set(listViewportHeight.contentOffset.y);
      tmp2 = onScrollWorklet(
        listViewportHeight.contentOffset.y,
        listViewportHeight.contentSize.height,
        listViewportHeight.layoutMeasurement.height,
      );
      if (null != onScroll) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj = closure_0(closure_2[3]);
        tmp6 = obj.runOnJS(tmp3)();
      }
      return;
    }
  }
  let obj2 = require("ReanimatedRexport");
  G.__closure = {
    scrollPosValue: sharedValue,
    onScrollWorklet,
    onScroll,
    runOnJS: require("ReanimatedRexport").runOnJS,
  };
  G.__workletHash = 11450141164730;
  G.__initData = scrollIndicatorInsetBottom;
  const items2 = [renderItem, renderSectionFooter, renderSectionHeader];
  const obj3 = {
    scrollPosValue: sharedValue,
    onScrollWorklet,
    onScroll,
    runOnJS: require("ReanimatedRexport").runOnJS,
  };
  const callback = listViewportHeight.useCallback((item) => {
    item = item.item;
    const type = item.type;
    if (FastList.FastListItemTypes.SECTION === type) {
      return renderSectionHeader(item.section);
    } else if (FastList.FastListItemTypes.SECTION_FOOTER === type) {
      return renderSectionFooter(item.section);
    } else {
      return renderItem(item.section, item.item);
    }
  }, items2);
  const callback1 = listViewportHeight.useCallback((type) => type.type, []);
  const callback2 = listViewportHeight.useCallback((key) => key.key, []);
  const items3 = [memo1, renderHeader];
  const callback3 = listViewportHeight.useCallback((arg0, arg1) => ref2.current.sizes[arg1], []);
  const items4 = [insetEnd];
  const memo2 = listViewportHeight.useMemo(() => hasOwnProperty(React4, { children: renderHeader(memo1) }), items3);
  const items5 = [scrollIndicatorInsetBottom];
  const memo3 = listViewportHeight.useMemo(() => ({ paddingBottom: insetEnd }), items4);
  let num = 0;
  const memo4 = listViewportHeight.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items5);
  if (listViewportHeight > 0) {
    num = endReachedThreshold / listViewportHeight;
  }
  const obj4 = { children: null };
  const animatedScrollHandler = obj2.useAnimatedScrollHandler(G);
  const items6 = [
    onScrollWorklet(require("../../../../_runtime/metro/16512__.js").AnimatedLegendList, {
      ref: ref1,
      contentContainerStyle: memo3,
      data: tmp3.listData,
      drawDistance: listViewportHeight,
      estimatedHeaderSize: headerSize,
      getFixedItemSize: callback3,
      getItemType: callback1,
      initialScrollOffset: memo,
      keyExtractor: callback2,
      ListHeaderComponent: memo2,
      ListHeaderComponentStyle: renderSectionHeader,
      onEndReached,
      onEndReachedThreshold: num,
      onScroll: obj2.useAnimatedScrollHandler(G),
      recycleItems: true,
      renderItem: callback,
      scrollIndicatorInsets: memo4,
    }),
    renderAccessory(memo1),
  ];
  obj4.children = items6;
  return renderHeader(onScroll, obj4);
});
