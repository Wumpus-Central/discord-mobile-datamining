// === Module 438: defaultItemToKey ===

// Module 438 (defaultItemToKey)
import defaultHiddenStyle from "defaultHiddenStyle" /* 433 */;
import _modDef439 from "module_439" /* 439 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";

const defaultHiddenStyleDefault = defaultHiddenStyle;

require = fn;
function defaultItemToKey(key) {
  if (typeof key.key !== "string") {
    const _TypeError = TypeError;
    const typeError = new TypeError("Expected 'id' of item to be a string, got: " + typeof key);
    throw typeError;
  } else {
    return key;
  }
}
const noop = fn(19);
({ useCallback: hasOwnProperty, useMemo: metroRequire, useState: closure_7 } = noop);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);

export const createVirtualCollectionView = function createVirtualCollectionView(arg0, initial) {
  closure_0 = arg0;
  initial = initial.initial;
  const next = initial.next;
  function VirtualCollectionSpacer(nativeID) {
    const virtualItemCount = nativeID.virtualItemCount;
    const onRenderMoreItems = nativeID.onRenderMoreItems;
    const tmp = obj(closure_1_7(obj), 2);
    closure_2 = tmp[1];
    obj = {
      itemCount: virtualItemCount,
      nativeID: nativeID.nativeID,
      onModeChange(mode) {
        if (mode.mode !== defaultHiddenStyle.VirtualViewMode.Hidden) {
          const tmp2 = next(mode);
          obj = { SpacerView: null };
          const spacerStyle = tmp2.spacerStyle;
          obj.SpacerView = React.forwardRef(function SpacerView_withRef(itemCount, ref) {
            itemCount = itemCount.itemCount;
            const merged = Object.assign(itemCount, Object.assign({ itemCount: 0 }));
            const items = [itemCount];
            const merged1 = Object.assign(merged);
            return closure_1_8(closure_1_6(() => virtualItemCount(closure_2[3]).createHiddenVirtualView(spacerStyle(itemCount)), items), { ref });
          });
          closure_2(obj);
          const _Math = Math;
          const _Math2 = Math;
          onRenderMoreItems(Math.min(Math.ceil(tmp2.itemCount), virtualItemCount));
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
      const merged1 = Object.assign(merged);
      return closure_1_8(closure_1_6(() => virtualItemCount(closure_2[3]).createHiddenVirtualView(spacerStyle(itemCount)), items), { ref });
    })
  };
  let spacerStyle = initial.spacerStyle;
  return function VirtualCollectionView(children) {
    children = children.children;
    closure_0 = children;
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
    closure_5 = tmp2[1];
    items = [children, itemToKey, flag];
    let tmp3 = closure_1_5((arg0) => {
      const tmp = itemToKey(arg0);
      obj = { nativeID: tmp, removeClippedSubviews: flag, children: null };
      let tmp6 = null;
      if (null != _modDef439) {
        obj = { nativeID: tmp };
        tmp6 = React6(_modDef439, obj);
      }
      items = [tmp6, closure_0(arg0, tmp)];
      obj.children = items;
      return React7(defaultHiddenStyleDefault, obj, tmp);
    }, items);
    closure_0 = tmp3;
    const items1 = [tmp3];
    closure_6 = closure_1_6(() => {
      const weakMap = new WeakMap();
      return (arg0) => {
        value = weakMap.get(arg0);
        if (null == value) {
          const tmp3 = closure_0(arg0);
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
    const arr = Array.from({ length: bound }, (arg0, arg1) => closure_6(items.at(arg1)));
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
        obj.nativeID = "" + str + ":Spacer";
        obj.virtualItemCount = tmp;
        obj.onRenderMoreItems = function onRenderMoreItems(arg0) {
          closure_0 = arg0;
          closure_1_5((arg0) => arg0 + closure_0);
        };
        tmp3Result = React6(VirtualCollectionSpacer, obj);
      }
      return tmp3Result;
    }, items2);
    obj.children = arr;
    return closure_1_8(closure_0, obj);
  };
};