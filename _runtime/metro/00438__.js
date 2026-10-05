// === Module 438: ? ===

// Module 438
import _mod433 from "module_433" /* 433 */;
import _modDef439 from "module_439" /* 439 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;

const _modDef433 = _mod433;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function defaultItemToKey(key) {
  if (typeof key.key !== "string") {
    const _TypeError = TypeError;
    const self = this;
    const self2 = this;
    const typeError = new TypeError("Expected 'id' of item to be a string, got: " + typeof key);
    throw typeError;
  } else {
    return key.key;
  }
}
({ useCallback: hasOwnProperty, useMemo: metroRequire, useState: metroImportDefault } = react);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);

export const createVirtualCollectionView = function createVirtualCollectionView(arg0, initial) {
  let closure_0 = arg0;
  initial = initial.initial;
  const next = initial.next;
  function VirtualCollectionSpacer(virtualItemCount) {
    virtualItemCount = virtualItemCount.virtualItemCount;
    const onRenderMoreItems = virtualItemCount.onRenderMoreItems;
    const nativeID = virtualItemCount.nativeID;
    const tmp = obj(closure_1_7(obj), 2);
    let closure_2 = tmp[1];
    obj = {
      itemCount: virtualItemCount,
      nativeID,
      onModeChange(mode) {
        if (mode.mode !== _mod433.VirtualViewMode.Hidden) {
          let tmp2 = next(mode);
          obj = {
            SpacerView: React.forwardRef(function SpacerView_withRef(itemCount, ref) {
                itemCount = itemCount.itemCount;
                const merged = Object.assign(itemCount, Object.assign({ itemCount: 0 }));
                const items = [itemCount];
                obj = { ref };
                const tmp2 = closure_1_6(() => {
                  obj = virtualItemCount(closure_3_2[3]);
                  return obj.createHiddenVirtualView(spacerStyle(itemCount));
                }, items);
                const merged1 = Object.assign(merged);
                return closure_1_8(tmp2, obj);
              })
          };
          const spacerStyle = tmp2.spacerStyle;
          let itemCount = tmp2.itemCount;
          closure_2(obj);
          const _Math = Math;
          const _Math2 = Math;
          onRenderMoreItems(Math.min(Math.ceil(itemCount), virtualItemCount));
        }
      }
    };
    return closure_1_8(tmp[0].SpacerView, obj);
  }
  let obj = {
    SpacerView: VirtualCollectionSpacer.forwardRef(function SpacerView_withRef(itemCount, ref) {
      itemCount = itemCount.itemCount;
      const merged = Object.assign(itemCount, Object.assign({ itemCount: 0 }));
      const items = [itemCount];
      obj = { ref };
      const tmp2 = closure_1_6(() => {
        obj = virtualItemCount(closure_3_2[3]);
        return obj.createHiddenVirtualView(spacerStyle(itemCount));
      }, items);
      const merged1 = Object.assign(merged);
      return closure_1_8(tmp2, obj);
    })
  };
  let spacerStyle = initial.spacerStyle;
  return function VirtualCollectionView(children) {
    let arr;
    let tmp8;
    children = children.children;
    let items = children.items;
    let itemToKey = children.itemToKey;
    if (itemToKey === undefined) {
      itemToKey = defaultItemToKey;
    }
    let flag = children.removeClippedSubviews;
    if (flag === undefined) {
      flag = false;
    }
    const testID = children.testID;
    const merged = Object.assign(children, Object.assign({ children: 0, items: 0, itemToKey: 0, removeClippedSubviews: 0, testID: 0 }));
    const tmp2 = obj(closure_1_7(Math.ceil(items.itemCount)), 2);
    let closure_5 = tmp2[1];
    const items1 = [children, itemToKey, flag];
    const first = tmp2[0];
    const tmp4 = closure_1_5((arg0) => {
      const tmp = itemToKey(arg0);
      let tmp6 = null;
      obj = { nativeID: tmp, removeClippedSubviews: flag, children: items };
      const tmp5 = _modDef433;
      if (null != _modDef439) {
        const obj2 = { nativeID: tmp };
        tmp6 = metroImportAll(_modDef439, obj2);
      }
      items = [tmp6, children(arg0, tmp)];
      return React4(tmp5, obj, tmp);
    }, items1);
    closure_0 = tmp4;
    const items2 = [tmp4];
    let closure_6 = closure_1_6(() => {
      const weakMap = new WeakMap();
      return (arg0) => {
        let value = weakMap.get(arg0);
        if (null == value) {
          const tmp3 = closure_0(arg0);
          const result = weakMap.set(arg0, tmp3);
          value = tmp3;
        }
        return value;
      };
    }, items2);
    const bound = Math.min(first, items.size);
    const diff = items.size - bound;
    let c7 = diff;
    const items3 = [diff, testID];
    obj = { spacer: tmp8, children: arr };
    arr = Array.from({ length: bound }, (arg0, arg1) => closure_6(items.at(arg1)));
    tmp8 = closure_1_6(() => {
      let tmp3Result = null;
      if (0 !== c7) {
        let str = testID;
        if (testID == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        obj = {
          nativeID: "" + str + ":Spacer",
          virtualItemCount: tmp,
          onRenderMoreItems(arg0) {
              closure_0 = arg0;
              closure_1_5((arg0) => arg0 + closure_0);
            }
        };
        tmp3Result = metroImportAll(VirtualCollectionSpacer, obj);
      }
      return tmp3Result;
    }, items3);
    const merged1 = Object.assign(merged);
    return closure_1_8(children, obj);
  };
};