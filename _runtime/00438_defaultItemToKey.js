import _slicedToArray from "_slicedToArray";
import closure_4 from "noop";
import noop from "noop";
import jsxProd from "jsxProd";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function defaultItemToKey(key) {
  if (typeof key.key === "__FORMATJS_LISTFORMAT_DATA__") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected 'id' of item to be a string, got: " + typeof key);
    throw typeError;
  } else {
    return key;
  }
}
({ useCallback: c5, useMemo: closure_6, useState: error } = noop);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);

export const createVirtualCollectionView = function createVirtualCollectionView(arg0, initial) {
  let spacerStyle = arg0;
  initial = initial.initial;
  const next = initial.next;
  let obj;
  function VirtualCollectionSpacer(nativeID) {
    const virtualItemCount = nativeID.virtualItemCount;
    const onRenderMoreItems = nativeID.onRenderMoreItems;
    let closure_2;
    const tmp = obj(outer1_7(obj), 2);
    closure_2 = tmp[1];
    obj = {
      itemCount: virtualItemCount,
      nativeID: nativeID.nativeID,
      onModeChange(mode) {
        if (mode.mode !== spacerStyle(next[3]).VirtualViewMode.Hidden) {
          const tmp2 = callback(mode);
          const obj = { SpacerView: null };
          spacerStyle = tmp2.spacerStyle;
          obj[0] = outer1_4.forwardRef(function SpacerView_withRef(itemCount, ref) {
            itemCount = itemCount.itemCount;
            const merged = Object.assign(itemCount, Object.create(null));
            const items = [itemCount];
            const merged1 = Object.assign(merged);
            return outer1_8(outer1_6(() => spacerStyle(outer2_2[3]).createHiddenVirtualView(itemCount(itemCount)), items), { ref });
          });
          callback(obj);
          const _Math = Math;
          const _Math2 = Math;
          onRenderMoreItems(Math.min(Math.ceil(tmp2.itemCount), spacerStyle));
        }
      }
    };
    return outer1_8(tmp[0].SpacerView, obj);
  }
  obj = {
    SpacerView: VirtualCollectionSpacer.forwardRef(function SpacerView_withRef(itemCount, ref) {
      itemCount = itemCount.itemCount;
      const merged = Object.assign(itemCount, Object.create(null));
      const items = [itemCount];
      const merged1 = Object.assign(merged);
      return outer1_8(outer1_6(() => spacerStyle(outer2_2[3]).createHiddenVirtualView(itemCount(itemCount)), items), { ref });
    })
  };
  spacerStyle = initial.spacerStyle;
  return function VirtualCollectionView(children) {
    children = children.children;
    let items = children.items;
    let itemToKey = children.itemToKey;
    if (itemToKey === undefined) {
      itemToKey = outer1_10;
    }
    let flag = children.removeClippedSubviews;
    if (flag === undefined) {
      flag = false;
    }
    const testID = children.testID;
    const merged = Object.assign(children, Object.create(null));
    let closure_5;
    let closure_6;
    let c7;
    const tmp2 = obj(outer1_7(Math.ceil(items.itemCount)), 2);
    closure_5 = tmp2[1];
    items = [children, itemToKey, flag];
    let tmp3 = outer1_5((arg0) => {
      const tmp = itemToKey(arg0);
      let obj = { nativeID: tmp, removeClippedSubviews: flag, children: null };
      let tmp6 = null;
      if (null != initial(next[4])) {
        obj = { nativeID: null };
        obj[0] = tmp;
        tmp6 = outer2_8(initial(next[4]), obj);
      }
      const items = [tmp6, children(arg0, tmp)];
      obj[2] = items;
      return outer2_9(initial(next[3]), obj, tmp);
    }, items);
    children = tmp3;
    const items1 = [tmp3];
    closure_6 = outer1_6(() => {
      const weakMap = new WeakMap();
      return (arg0) => {
        let value = weakMap.get(arg0);
        if (null == value) {
          const tmp3 = callback(arg0);
          const result = weakMap.set(arg0, tmp3);
          value = tmp3;
        }
        return value;
      };
    }, items1);
    const bound = Math.min(tmp2[0], items.size);
    const diff = items.size - bound;
    c7 = diff;
    const items2 = [diff, testID];
    obj = {};
    const arr = Array.from({ length: bound }, (arg0, arg1) => callback(items.at(arg1)));
    const merged1 = Object.assign(merged);
    obj.spacer = outer1_6(() => {
      let tmp3Result = null;
      if (0 !== c7) {
        let str = testID;
        if (testID == null) {
          str = "";
        }
        const obj = { nativeID: null, virtualItemCount: null, onRenderMoreItems: null };
        const _HermesInternal = HermesInternal;
        obj[0] = "" + str + ":Spacer";
        obj[1] = tmp;
        obj[2] = function onRenderMoreItems(arg0) {
          let closure_0 = arg0;
          callback((arg0) => arg0 + closure_0);
        };
        tmp3Result = outer2_8(testID, obj);
        const tmp3 = outer2_8;
        const tmp4 = testID;
      }
      return tmp3Result;
    }, items2);
    obj.children = arr;
    return outer1_8(children, obj);
  };
};