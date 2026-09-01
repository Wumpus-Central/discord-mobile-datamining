// _runtime/00438_defaultItemToKey.js
import closure_3 from "metro/00032__slicedToArray.js";
import closure_4 from "00019_noop.js";
import noop from "00019_noop.js";
import jsxProd from "react/00021_jsxProd.js";

const require = arg1;
function defaultItemToKey(key) {
  if (typeof key.key !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected 'id' of item to be a string, got: " + typeof key);
    throw typeError;
  } else {
    return key;
  }
}
({ useCallback: c5, useMemo: closure_6, useState: error } = noop);
({ jsx: closure_8, jsxs: c9 } = jsxProd);

export const createVirtualCollectionView = function createVirtualCollectionView(arg0, initial) {
  let spacerStyle = arg0;
  initial = initial.initial;
  const next = initial.next;
  let obj;
  function VirtualCollectionSpacer(nativeID) {
    const virtualItemCount = nativeID.virtualItemCount;
    const onRenderMoreItems = nativeID.onRenderMoreItems;
    closure_2 = undefined;
    const tmp = obj(closure_1_7(obj), 2);
    closure_2 = tmp[1];
    obj = {
      itemCount: virtualItemCount,
      nativeID: nativeID.nativeID,
      onModeChange(mode) {
        if (mode.mode !== spacerStyle(next[3]).VirtualViewMode.Hidden) {
          const tmp2 = callback(mode);
          obj = { SpacerView: null };
          spacerStyle = tmp2.spacerStyle;
          obj[0] = closure_1_4.forwardRef(function SpacerView_withRef(itemCount, ref) {
            itemCount = itemCount.itemCount;
            const merged = Object.assign(itemCount, Object.create(null));
            const items = [itemCount];
            const merged1 = Object.assign(merged);
            return closure_1_8(
              closure_1_6(() => spacerStyle(closure_2_2[3]).createHiddenVirtualView(itemCount(itemCount)), items),
              { ref },
            );
          });
          callback(obj);
          const _Math = Math;
          const _Math2 = Math;
          onRenderMoreItems(Math.min(Math.ceil(tmp2.itemCount), spacerStyle));
        }
      },
    };
    return closure_1_8(tmp[0].SpacerView, obj);
  }
  obj = {
    SpacerView: VirtualCollectionSpacer.forwardRef(function SpacerView_withRef(itemCount, ref) {
      itemCount = itemCount.itemCount;
      const merged = Object.assign(itemCount, Object.create(null));
      const items = [itemCount];
      const merged1 = Object.assign(merged);
      return closure_1_8(
        closure_1_6(() => spacerStyle(closure_2_2[3]).createHiddenVirtualView(itemCount(itemCount)), items),
        { ref },
      );
    }),
  };
  spacerStyle = initial.spacerStyle;
  return function VirtualCollectionView(children) {
    children = children.children;
    closure_0 = children;
    let items = children.items;
    let itemToKey = children.itemToKey;
    if (itemToKey === undefined) {
      itemToKey = closure_1_10;
    }
    let flag = children.removeClippedSubviews;
    if (flag === undefined) {
      flag = false;
    }
    const testID = children.testID;
    const merged = Object.assign(children, Object.create(null));
    closure_5 = undefined;
    closure_6 = undefined;
    c7 = undefined;
    const tmp2 = obj(closure_1_7(Math.ceil(items.itemCount)), 2);
    closure_5 = tmp2[1];
    items = [children, itemToKey, flag];
    let tmp3 = closure_1_5((arg0) => {
      const tmp = itemToKey(arg0);
      obj = { nativeID: tmp, removeClippedSubviews: flag, children: null };
      let tmp6 = null;
      if (null != initial(next[4])) {
        obj = { nativeID: null };
        obj[0] = tmp;
        tmp6 = closure_2_8(initial(next[4]), obj);
      }
      items = [tmp6, callback(arg0, tmp)];
      obj[2] = items;
      return closure_2_9(initial(next[3]), obj, tmp);
    }, items);
    closure_0 = tmp3;
    const items1 = [tmp3];
    closure_6 = closure_1_6(() => {
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
    const arr = Array.from({ length: bound }, (arg0, arg1) => callback2(items.at(arg1)));
    const merged1 = Object.assign(merged);
    obj.spacer = closure_1_6(() => {
      let tmp3Result = null;
      if (0 !== c7) {
        let str = testID;
        if (testID == null) {
          str = "";
        }
        obj = { nativeID: null, virtualItemCount: null, onRenderMoreItems: null };
        const _HermesInternal = HermesInternal;
        obj[0] = "" + str + ":Spacer";
        obj[1] = tmp;
        obj[2] = function onRenderMoreItems(arg0) {
          closure_0 = arg0;
          callback((arg0) => arg0 + closure_0);
        };
        tmp3Result = closure_2_8(testID, obj);
        const tmp3 = closure_2_8;
        const tmp4 = testID;
      }
      return tmp3Result;
    }, items2);
    obj.children = arr;
    return closure_1_8(closure_0, obj);
  };
};
