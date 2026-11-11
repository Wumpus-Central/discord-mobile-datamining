// === Module 15065: UsersLegendList ===

// Module 15065 (UsersLegendList)
import BottomSheetModal from "BottomSheetModal" /* 5507 */;
import FastestListItemTypeDefault from "FastestListItemType" /* 7773 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function renderBottomSheetScrollComponent(children) {
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(BottomSheetModal.BottomSheetScrollView, {});
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let closure_7 = createStyles.createStyles({ row: { overflow: "hidden" } });
let closure_9 = { code: "(function UsersLegendListTsx1(event){let[scrollPosValue,onScroll,scheduleOnRN]=this.__closure;scrollPosValue.set(event.contentOffset.y);if(onScroll!=null){scheduleOnRN(onScroll,{nativeEvent:{contentOffset:{x:event.contentOffset.x,y:event.contentOffset.y},contentSize:{width:event.contentSize.width,height:event.contentSize.height},layoutMeasurement:{width:event.layoutMeasurement.width,height:event.layoutMeasurement.height}}});}})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersLegendList.tsx");

export default noop.memo(function UsersLegendList(insetStart) {
  let num = insetStart.insetStart;
  if (num === undefined) {
    num = 0;
  }
  _require = num;
  let num2 = insetStart.insetEnd;
  if (num2 === undefined) {
    num2 = 0;
  }
  const itemSize = insetStart.itemSize;
  keyExtractor = insetStart.keyExtractor;
  ({ listHeaderSize, onContentLengthChange } = insetStart);
  const renderItem = insetStart.renderItem;
  const renderListHeader = insetStart.renderListHeader;
  const renderSectionHeader = insetStart.renderSectionHeader;
  const sectionHeaderIsSticky = insetStart.sectionHeaderIsSticky;
  const sectionHeaderSize = insetStart.sectionHeaderSize;
  const sections = insetStart.sections;
  let num3;
  let memo1;
  ({ onLayout, onScroll, style, ref } = insetStart);
  let tmp = renderSectionHeader();
  const row = tmp;
  const ref1 = onContentLengthChange.useRef(null);
  const sharedValue = require("module_1652").useSharedValue(0);
  items = [sharedValue];
  const memo = onContentLengthChange.useMemo(() => ({ scrollOffset: sharedValue }), items);
  let obj2 = require("module_1652");
  let tmp3 = _require;
  const items1 = [sectionHeaderSize, sharedValue, onScroll, require("module_1705").scheduleOnRN];
  _require = undefined;
  c1 = undefined;
  dependencyMap = undefined;
  [tmp7, tmp8, tmp9, tmp10] = items1;
  class UsersLegendListTsx1 {
    constructor(arg0) {
      result = closure_0.set(insetStart.contentOffset.y);
      if (null != closure_1) {
        tmp3 = closure_2;
        obj = { nativeEvent: null };
        obj1 = { contentOffset: null, contentSize: null, layoutMeasurement: null };
        point = { x: null, y: null };
        point.x = insetStart.contentOffset.x;
        point.y = insetStart.contentOffset.y;
        obj1.contentOffset = point;
        size = { width: null, height: null };
        size.width = insetStart.contentSize.width;
        size.height = insetStart.contentSize.height;
        obj1.contentSize = size;
        size1 = { width: null, height: null };
        size1.width = insetStart.layoutMeasurement.width;
        size1.height = insetStart.layoutMeasurement.height;
        obj1.layoutMeasurement = size1;
        obj.nativeEvent = obj1;
        tmp4 = closure_2(tmp2, obj);
      }
      return;
    }
  }
  const items2 = [tmp8, tmp9, tmp10];
  UsersLegendListTsx1.__closure = items2;
  UsersLegendListTsx1.__workletHash = 11972523223881;
  UsersLegendListTsx1.__initData = tmp7;
  let obj3 = require("module_1652");
  if (typeof listHeaderSize === "function") {
    num3 = listHeaderSize();
  } else {
    num3 = listHeaderSize;
    if (listHeaderSize == null) {
      num3 = 0;
    }
  }
  const items3 = [num, itemSize, keyExtractor, num3, sectionHeaderIsSticky, sectionHeaderSize, sections];
  memo1 = obj.useMemo(() => {
    const listData = [];
    const offsets = [];
    const sizes = [];
    const stickyHeaderIndices = [];
    const indexByLocation = new Map();
    let sum = c0 + num3;
    let num = 0;
    if (0 < sections.length) {
      do {
        let tmp3 = sections[num];
        let tmp5 = num;
        let tmp6 = sum;
        if (0 !== tmp3) {
          if (sectionHeaderIsSticky) {
            let arr = stickyHeaderIndices.push(listData.length);
          }
          let SECTION_HEADER = FastestListItemTypeDefault.SECTION_HEADER;
          let tmp11 = sectionHeaderSize(num);
          let _HermesInternal = HermesInternal;
          let result = indexByLocation.set("" + num + ":" + -1, listData.length);
          let obj = { type: SECTION_HEADER, section: num, item: -1, key: null };
          let combined;
          if (keyExtractor != null) {
            combined = keyExtractor(SECTION_HEADER, num, -1);
          }
          if (combined == null) {
            let _HermesInternal2 = HermesInternal;
            let str = "";
            let str2 = ":";
            let str3 = ":";
            combined = "" + SECTION_HEADER + ":" + tmp5 + ":" + -1;
          }
          obj.key = combined;
          let arr2 = listData.push(obj);
          let arr3 = offsets.push(sum);
          let arr4 = sizes.push(tmp11);
          let sum1 = sum + tmp11;
          num3 = 0;
          tmp6 = sum1;
          if (0 < tmp3) {
            do {
              let ITEM = FastestListItemTypeDefault.ITEM;
              let tmp24 = _undefined;
              let tmp23 = num3;
              if (typeof _undefined !== "number") {
                tmp24 = _undefined(num, num3);
              }
              let _HermesInternal3 = HermesInternal;
              let result1 = indexByLocation.set("" + num + ":" + num3, listData.length);
              let obj2 = { type: ITEM, section: num, item: num3, key: null };
              let combined1;
              if (keyExtractor != null) {
                combined1 = keyExtractor(ITEM, num, num3);
              }
              if (combined1 == null) {
                let _HermesInternal4 = HermesInternal;
                let str4 = "";
                let str5 = ":";
                let str6 = ":";
                combined1 = "" + ITEM + ":" + tmp5 + ":" + tmp23;
              }
              obj2.key = combined1;
              let arr11 = listData.push(obj2);
              let arr12 = offsets.push(sum1);
              let arr13 = sizes.push(tmp24);
              sum1 = sum1 + tmp24;
              num3 = num3 + 1;
              tmp6 = sum1;
            } while (num3 < tmp3);
          }
        }
        num = num + 1;
        sum = tmp6;
      } while (num < sections.length);
    }
    return { listData, offsets, sizes, stickyHeaderIndices, indexByLocation };
  }, items3);
  const items4 = [memo1, sectionHeaderIsSticky];
  const imperativeHandle = obj.useImperativeHandle(ref, () => ({
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
    scrollToLocation(paddingStart) {
      ({ section, animated } = paddingStart);
      if (animated === undefined) {
        animated = false;
      }
      let num = paddingStart.paddingStart;
      if (num === undefined) {
        num = 0;
      }
      indexByLocation = indexByLocation.indexByLocation;
      ({ offsets, sizes } = indexByLocation);
      value = indexByLocation.get("" + section + ":" + paddingStart.item);
      if (null != value) {
        const _HermesInternal = HermesInternal;
        const value2 = indexByLocation.get("" + section + ":" + -1);
        let num2 = 0;
        if (sectionHeaderIsSticky) {
          num2 = 0;
          if (null != value2) {
            num2 = sizes[value2];
          }
        }
        const current = ref.current;
        if (current != null) {
          const obj = { offset: null, animated: null };
          const _Math = Math;
          obj.offset = Math.max(0, offsets[value] - num2 - num);
          obj.animated = animated;
          current.scrollToOffset(obj);
        }
      }
    }
  }), items4);
  const items5 = [memo1, renderItem, renderSectionHeader, sharedValue, tmp.row];
  const callback = obj.useCallback((arg0) => {
    ({ item, index } = arg0);
    if (item.type === FastestListItemTypeDefault.SECTION_HEADER) {
      const obj2 = { style: null, children: null };
      const obj3 = { height: memo1.sizes[index] };
      obj2.style = obj3;
      obj2.children = renderSectionHeader(item.section, undefined, sharedValue, memo1.offsets[index]);
      let tmp6 = <View style={null}>{null}</View>;
    } else {
      const obj = { style: null, children: null };
      items = [row.row, ];
      const obj4 = { height: memo1.sizes[index] };
      items[1] = obj4;
      obj.style = items;
      obj.children = renderItem(item.section, item.item);
      tmp6 = <View style={null}>{null}</View>;
    }
    return tmp6;
  }, items5);
  const callback1 = obj.useCallback((type) => String(type.type), []);
  const items6 = [memo1];
  const callback2 = obj.useCallback((key) => key.key, []);
  const items7 = [renderListHeader];
  const callback3 = obj.useCallback((arg0, arg1) => memo1.sizes[arg1], items6);
  const items8 = [num, num2];
  const memo2 = obj.useMemo(() => {
    let tmp;
    if (renderListHeader != null) {
      tmp = renderListHeader();
    }
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }, items7);
  const items9 = [onContentLengthChange];
  const memo3 = obj.useMemo(() => ({ paddingTop, paddingBottom }), items8);
  const callback4 = obj.useCallback((arg0, arg1) => {
    let tmpResult;
    if (onContentLengthChange != null) {
      tmpResult = tmp(arg1);
    }
    return tmpResult;
  }, items9);
  let obj4 = { ref: ref1, accessibilityRole: "list", contentContainerStyle: memo3, data: memo1.listData, estimatedHeaderSize: num3, extraData: callback, estimatedListSize: keyExtractor(onContentLengthChange.useState(() => paddingTop(_undefined[8]).getWindowDimensions()), 1)[0], getFixedItemSize: callback3, getItemType: callback1, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", keyExtractor: callback2, ListHeaderComponent: memo2, onContentSizeChange: null, onLayout: null, onScroll: null, renderItem: null, renderScrollComponent: null, sharedValues: null, stickyHeaderIndices: null, style: null };
  let tmp22;
  if (null != onContentLengthChange) {
    tmp22 = callback4;
  }
  obj4.onContentSizeChange = tmp22;
  obj4.onLayout = onLayout;
  obj4.onScroll = require("module_1652").useAnimatedScrollHandler(UsersLegendListTsx1);
  obj4.renderItem = callback;
  let tmp23;
  if (true === insetStart.inActionSheet) {
    tmp23 = sectionHeaderIsSticky;
  }
  obj4.renderScrollComponent = tmp23;
  obj4.sharedValues = memo;
  obj4.stickyHeaderIndices = memo1.stickyHeaderIndices;
  obj4.style = style;
  return renderListHeader(tmp3(15066).AnimatedLegendList, obj4);
});