// discord_app/design/components/TransitionGroup/TransitionGroup.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

function wrapChildrenDefault(arg0) {
  return arg0;
}
class TransitionGroup {
  constructor(arg0) {
    items = global.items;
    renderItem = global.renderItem;
    getItemKey = global.getItemKey;
    wrapChildren = global.wrapChildren;
    if (wrapChildren === undefined) {
      wrapChildren = closure_5;
    }
    lazyCleanUpDelay = global.lazyCleanUpDelay;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_4 = require("module_4294967295");
    layoutEffect = renderItem.useLayoutEffect(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
    }, []);
    closure_5 = items(renderItem.useState(closure_4), 2)[1];
    closure_6 = renderItem.useRef(null);
    items = [, , , ];
    items[0] = items;
    items[1] = getItemKey;
    items[2] = renderItem;
    items[3] = lazyCleanUpDelay;
    memo = renderItem.useMemo(() => {
      let current = ref2.current;
      let keys;
      if (current != null) {
        keys = current.keys();
      }
      const set = new Set(keys);
      const map = new Map(ref2.current);
      function _loop() {
        const tmp2 = callback(callback);
        obj = map;
        let value = map.get(tmp2);
        if (null == value) {
          if (null != closure_1_6.current) {
            let MOUNTED = lazyCleanUpDelay.ENTERED;
          } else {
            MOUNTED = lazyCleanUpDelay.MOUNTED;
          }
          function _cleanUp2() {
            const current = closure_1_6.current;
            let value;
            if (current != null) {
              value = current.get(closure_0);
            }
            if (null != value) {
              if (value.state === lazyCleanUpDelay.YEETED) {
                const current2 = closure_1_6.current;
                if (current2 != null) {
                  current2.delete(closure_0);
                }
                if (null != closure_1_3) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(closure_1_4.current);
                  const _setTimeout = setTimeout;
                  closure_1_4.current = setTimeout(() => callback({}), tmp7);
                } else {
                  closure_1_5({});
                }
              }
            }
          }
          obj = { item: null, children: null, state: null, cleanUp: null, renderItem: null };
          obj[0] = callback;
          obj[1] = map(tmp2, callback, MOUNTED, _cleanUp2);
          obj[2] = MOUNTED;
          obj[3] = _cleanUp2;
          obj[4] = map;
        } else {
          if (value.item === callback) {
            if (value.renderItem === map) {
              let tmp6 = value;
            }
            const result = obj.set(tmp2, tmp6);
            set.delete(tmp2);
          }
          if (value.state === lazyCleanUpDelay.YEETED) {
            let state = lazyCleanUpDelay.ENTERED;
          } else {
            state = value.state;
          }
          obj = { item: null, children: null, state: null, cleanUp: null, renderItem: null };
          obj[0] = callback;
          obj[1] = map(tmp2, callback, state, value.cleanUp);
          obj[2] = state;
          obj[3] = value.cleanUp;
          obj[4] = map;
          tmp6 = obj;
        }
      }
      const iter = set[Symbol.iterator]();
      while (iter !== undefined) {
        closure_2 = iter.next();
        let _loopResult = _loop();
        continue;
      }
      for (const item10035 of set) {
        let value = map.get(item10035);
        let tmp9 = value;
        if (null != value) {
          if (tmp9.state === lazyCleanUpDelay.YEETED) {
            if (tmp9.renderItem === map) {
              let result = map.set(item10035, tmp9);
            }
          }
          obj = { item: null, children: null, state: null, cleanUp: null, renderItem: null };
          obj[0] = tmp9.item;
          obj[1] = map(item10035, tmp9.item, lazyCleanUpDelay.YEETED, tmp9.cleanUp);
          obj[2] = lazyCleanUpDelay.YEETED;
          obj[3] = tmp9.cleanUp;
          obj[4] = map;
          if (null != obj.children) {
            let result1 = map.set(item10035, tmp18);
          } else {
            let deleteResult = map.delete(item10035);
          }
        }
        continue;
      }
      return map;
    }, items);
    closure_7 = memo;
    items1 = [];
    items1[0] = memo;
    insertionEffect = renderItem.useInsertionEffect(() => {
      closure_6.current = memo;
      return () => {
        const current = ref.current;
        let clearResult;
        if (current != null) {
          clearResult = current.clear();
        }
        return clearResult;
      };
    }, items1);
    items2 = [];
    for (const item10037 of memo) {
      tmp4 = items;
      arr = items2.push(items(item10037, 2)[1].children);
      continue;
    }
    wrapChildrenResult = null;
    if (items2.length > 0) {
      wrapChildrenResult = wrapChildren(items2, items);
    }
    return wrapChildrenResult;
  }
}
function getSingleItemKey() {
  return "key";
}
let obj = { MOUNTED: 0, [0]: "MOUNTED", ENTERED: 1, [1]: "ENTERED", YEETED: 2, [2]: "YEETED" };
let closure_4 = {};
let result = require("obj132").fileFinishedImporting("design/components/TransitionGroup/TransitionGroup.tsx");

export const TransitionStates = obj;
export { TransitionGroup };
export const TransitionItem = function TransitionItem(item) {
  item = item.item;
  let items = [item];
  return <TransitionGroup items={React.useMemo(() => {
    if (null != item) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items)} renderItem={item.renderItem} getItemKey={getSingleItemKey} />;
};