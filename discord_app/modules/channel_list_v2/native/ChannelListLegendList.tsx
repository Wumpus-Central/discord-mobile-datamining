// discord_app/modules/channel_list_v2/native/ChannelListLegendList.tsx
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import FastList from "../../../lib/native/FastList.tsx";
import useChannelListFlatDataDefault from "useChannelListFlatData.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let metroRequire;
({ Fragment: closure_4, jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = [];
let closure_8 = { item: "duration", positionPercentage: false };
let closure_9 = { zIndex: 5 };
let closure_10 = {
  code: "function ChannelListLegendListTsx1(event){const{scrollPosValue,onScrollWorklet,onScroll,runOnJS}=this.__closure;scrollPosValue.set(event.contentOffset.y);onScrollWorklet(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);if(onScroll!=null){runOnJS(onScroll)();}}",
};
const memoResult = react.memo(
  react.forwardRef(function ChannelListLegendList(footerSize, arg1) {
    let _undefined;
    let _undefined2;
    let c14;
    let c15;
    let contentSize;
    let endReachedThreshold;
    let getItemSize;
    let getRecyclerKey;
    let getSectionFooterSize;
    let getSectionHeaderSize;
    let headerSize;
    let insetEnd;
    let items6;
    let onEndReached;
    let renderAccessory;
    let sections;
    footerSize = footerSize.footerSize;
    ({ headerSize, initialScrollItem: importDefault, initialScrollSection: dependencyMap, insetEnd } = footerSize);
    const listViewportHeight = footerSize.listViewportHeight;
    const onScroll = footerSize.onScroll;
    const onScrollWorklet = footerSize.onScrollWorklet;
    const renderHeader = footerSize.renderHeader;
    const renderItem = footerSize.renderItem;
    const renderSectionFooter = footerSize.renderSectionFooter;
    const renderSectionHeader = footerSize.renderSectionHeader;
    const scrollIndicatorInsetBottom = footerSize.scrollIndicatorInsetBottom;
    c14 = undefined;
    c15 = undefined;
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
    } = footerSize);
    const ref = insetEnd.useRef(null);
    let tmp3 = useChannelListFlatDataDefault({
      getItemSize,
      getRecyclerKey,
      getSectionFooterSize,
      getSectionHeaderSize,
      headerSize,
      sections,
    });
    let getIndex = tmp3;
    ({ offsets: c14, sizes: c15, contentSize } = tmp3);
    const listData = tmp3.listData;
    const memo = insetEnd.useMemo(() => {
      let num = dependencyMap;
      let num2 = dependencyMap;
      if (dependencyMap == null) {
        num2 = 0;
      }
      if (num2 <= 0) {
        if (null == importDefault) {
          return 0;
        }
      }
      getIndex = getIndex.getIndex;
      if (num == null) {
        num = 0;
      }
      const index = getIndex(num, importDefault);
      if (null == index) {
        return 0;
      } else {
        let diff = tmp12;
        if (c15[index] < listViewportHeight) {
          const _Math = Math;
          const _Math2 = Math;
          const sum = tmp12 + Math.floor(tmp14 / 2);
          diff = sum - Math.floor(listViewportHeight / 2);
        }
        const _Math3 = Math;
        const _Math4 = Math;
        return Math.max(0, Math.min(diff, contentSize + footerSize + insetEnd - listViewportHeight));
      }
    }, []);
    let obj = footerSize(4612);
    const sharedValue = obj.useSharedValue(memo);
    const ref1 = insetEnd.useRef(tmp3);
    ref1.current = tmp3;
    const ref2 = insetEnd.useRef(0);
    ref2.current = contentSize + footerSize + insetEnd;
    let items = [listViewportHeight, sharedValue];
    const memo1 = insetEnd.useMemo(() => {
      let obj = {
        scrollPosValue: sharedValue,
        getItems() {
          const current = ref.current;
          let state;
          if (current != null) {
            state = current.getState();
          }
          if (null == state) {
            return renderHeader;
          } else {
            const items = [];
            const _Math = Math;
            const bound = Math.min(state.endBuffered, ref1.current.listData.length - 1);
            const _Math2 = Math;
            let bound1 = Math.max(0, state.startBuffered);
            if (bound1 <= bound) {
              do {
                let tmp3 = ref1.current.listData[bound1];
                let obj = {
                  type: tmp3.type,
                  key: bound1,
                  layoutStart: ref1.current.offsets[bound1],
                  layoutSize: ref1.current.sizes[bound1],
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
        },
        getScrollPosition() {
          const current = ref.current;
          let num;
          if (current != null) {
            num = current.getState().scroll;
          }
          if (num == null) {
            num = 0;
          }
          return num;
        },
        getSectionItemFromPosition(arg0) {
          let num2;
          const offsets = ref1.current.offsets;
          let diff = offsets.length - 1;
          let num = 0;
          let tmp3;
          if (0 <= diff) {
            while (true) {
              let sum;
              let tmp4 = (num + diff) >> 1;
              let diff1 = diff;
              if (arg0 < offsets[tmp4]) {
                diff1 = tmp4 - 1;
                sum = num;
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
            return renderItem;
          } else {
            const obj = {
              type: ref1.current.listData[tmp3].type,
              key: tmp3,
              layoutStart: ref1.current.offsets[tmp3],
              layoutSize: ref1.current.sizes[tmp3],
              section: null,
              item: null,
              recyclerKey: null,
            };
            ({ section: obj.section, item: obj.item, key: obj.recyclerKey } = ref1.current.listData[tmp3]);
            const obj2 = { item: obj, positionPercentage: num2 };
            num2 = 0;
            if (obj.layoutSize > 0) {
              num2 = (arg0 - obj.layoutStart) / obj.layoutSize;
            }
            return obj2;
          }
        },
        scrollToLocation(section) {
          let animated;
          let item;
          ({ item, animated } = section);
          section = section.section;
          if (animated === undefined) {
            animated = false;
          }
          let str = section.orientation;
          if (str === undefined) {
            str = "top";
          }
          let num = section.paddingStart;
          if (num === undefined) {
            num = 0;
          }
          let num2 = section.paddingEnd;
          if (num2 === undefined) {
            num2 = 0;
          }
          if (null != item) {
            if (item < 0) {
              return false;
            }
          }
          const current = ref1.current;
          const index = current.getIndex(section, item);
          if (null == index) {
            return false;
          } else {
            let diff1;
            const current4 = ref.current;
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
            const current2 = ref.current;
            let num6;
            if (current2 != null) {
              num6 = current2.getState().scroll;
            }
            if (num6 == null) {
              num6 = 0;
            }
            let str2 = "top";
            if (ref1.current.sizes[index] < num4) {
              str2 = str;
            }
            if ("visible" === str2) {
              let diff;
              if (ref1.current.offsets[index] >= num6 + num) {
                if (ref1.current.offsets[index] + ref1.current.sizes[index] <= num6 + (num4 - num2)) {
                  return false;
                }
              }
              if (ref1.current.offsets[index] < num6) {
                diff = tmp10 - num;
              } else {
                diff = tmp10 + tmp11 + num2 - num4;
              }
              diff1 = diff;
            } else if ("center" === str2) {
              const _Math = Math;
              const _Math2 = Math;
              const sum = tmp10 + Math.floor(tmp11 / 2);
              diff1 = sum - Math.floor(num4 / 2);
            } else {
              diff1 = tmp10 - num;
            }
            const current3 = ref.current;
            if (current3 != null) {
              const _Math3 = Math;
              const _Math4 = Math;
              const scrollToOffset = current3.scrollToOffset;
              const obj = { offset: Math.max(0, Math.min(diff1, ref.current - num4)), animated };
              scrollToOffset(obj);
            }
            return true;
          }
        },
        scrollToTop() {
          let flag = arg0;
          if (arg0 === undefined) {
            flag = true;
          }
          const current = ref.current;
          if (current != null) {
            const obj = { offset: 0, animated: flag };
            current.scrollToOffset(obj);
          }
        },
      };
      Object.defineProperty(obj, "containerSize", {
        get: () => {
          const current = ref.current;
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
      return obj;
    }, items);
    const items1 = [memo1];
    const imperativeHandle = insetEnd.useImperativeHandle(arg1, () => memo1, items1);
    let obj2 = footerSize(4612);
    const tmp5 = footerSize;
    class Q {
      constructor(contentOffset) {
        const result = sharedValue.set(contentOffset.contentOffset.y);
        onScrollWorklet(
          contentOffset.contentOffset.y,
          contentOffset.contentSize.height,
          contentOffset.layoutMeasurement.height,
        );
        if (null != onScroll) {
          const obj = ReanimatedRexport;
          obj.runOnJS(tmp3)();
        }
      }
    }
    Q.__closure = { scrollPosValue: sharedValue, onScrollWorklet, onScroll, runOnJS: footerSize(4612).runOnJS };
    Q.__workletHash = 11450141164730;
    Q.__initData = renderSectionHeader;
    const items2 = [renderItem, renderSectionFooter, renderSectionHeader];
    ({ scrollPosValue: sharedValue, onScrollWorklet, onScroll, runOnJS: footerSize(4612).runOnJS });
    const animatedScrollHandler = obj2.useAnimatedScrollHandler(Q);
    const callback = insetEnd.useCallback((item) => {
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
    const callback1 = insetEnd.useCallback((type) => type.type, []);
    const callback2 = insetEnd.useCallback((key) => key.key, []);
    const items3 = [memo1, renderHeader];
    const callback3 = insetEnd.useCallback((arg0, arg1) => ref1.current.sizes[arg1], []);
    const items4 = [footerSize, insetEnd];
    const memo2 = insetEnd.useMemo(() => {
      const obj = { children: renderHeader(memo1) };
      return hasOwnProperty(React3, obj);
    }, items3);
    const items5 = [scrollIndicatorInsetBottom];
    const memo3 = insetEnd.useMemo(() => ({ paddingBottom: footerSize + insetEnd }), items4);
    let num = 0;
    const memo4 = insetEnd.useMemo(() => ({ bottom: scrollIndicatorInsetBottom }), items5);
    if (listViewportHeight > 0) {
      num = endReachedThreshold / listViewportHeight;
    }
    const obj4 = { children: items6 };
    items6 = [,];
    const obj5 = {
      ref,
      contentContainerStyle: memo3,
      data: listData,
      drawDistance: listViewportHeight,
      estimatedHeaderSize: headerSize,
      getFixedItemSize: callback3,
      getItemType: callback1,
      initialScrollOffset: memo,
      keyExtractor: callback2,
      ListHeaderComponent: memo2,
      ListHeaderComponentStyle: renderSectionFooter,
      onEndReached,
      onEndReachedThreshold: num,
      onScroll: animatedScrollHandler,
      recycleItems: true,
      renderItem: callback,
      scrollIndicatorInsets: memo4,
    };
    items6[0] = onScroll(tmp5(16024).AnimatedLegendList, obj5);
    items6[1] = renderAccessory(memo1);
    return onScrollWorklet(listViewportHeight, obj4);
  }),
);
let result = size.fileFinishedImporting("modules/channel_list_v2/native/ChannelListLegendList.tsx");

export default memoResult;
