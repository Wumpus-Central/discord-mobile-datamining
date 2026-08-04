// discord_app/design/components/TransitionGroup/TransitionGroup.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { jsx } from "jsxProd";

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
      wrapChildren = f74914;
    }
    lazyCleanUpDelay = global.lazyCleanUpDelay;
    c4 = undefined;
    f74914 = undefined;
    useRef = undefined;
    useMemo = undefined;
    c4 = require("module_4294967295");
    layoutEffect = renderItem.useLayoutEffect(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
    }, []);
    f74914 = items(renderItem.useState(c4), 2)[1];
    useRef = renderItem.useRef(null);
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
        let obj = map;
        let value = map.get(tmp2);
        if (null == value) {
          if (null != outer1_6.current) {
            let MOUNTED = lazyCleanUpDelay.ENTERED;
          } else {
            MOUNTED = lazyCleanUpDelay.MOUNTED;
          }
          function _cleanUp2() {
            const current = outer1_6.current;
            let value;
            if (current != null) {
              value = current.get(_slicedToArray);
            }
            if (null != value) {
              if (value.state === outer2_3.YEETED) {
                const current2 = outer1_6.current;
                if (current2 != null) {
                  current2.delete(_slicedToArray);
                }
                if (null != outer1_3) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(outer1_4.current);
                  const _setTimeout = setTimeout;
                  outer1_4.current = setTimeout(() => callback({}), tmp7);
                } else {
                  outer1_5({});
                }
              }
            }
          }
          obj = { item: null, children: null, state: null, cleanUp: null, renderItem: null };
          obj[0] = tmp;
          obj[1] = map(tmp2, tmp, MOUNTED, _cleanUp2);
          obj[2] = MOUNTED;
          obj[3] = _cleanUp2;
          obj[4] = map;
        } else {
          if (value.item === tmp) {
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
          obj[0] = tmp;
          obj[1] = map(tmp2, tmp, state, value.cleanUp);
          obj[2] = state;
          obj[3] = value.cleanUp;
          obj[4] = map;
          tmp6 = obj;
        }
      }
      const iter = set[Symbol.iterator]();
      while (iter !== undefined) {
        let closure_2 = iter.next();
        let _loopResult = _loop();
        continue;
      }
      for (const item10035 of set) {
        let tmp7 = item10035;
        let value = map.get(item10035);
        let tmp9 = value;
        if (null != value) {
          let tmp24 = value;
          let tmp25 = lazyCleanUpDelay;
          if (tmp9.state === lazyCleanUpDelay.YEETED) {
            let tmp10 = value;
            let tmp11 = map;
            if (tmp9.renderItem === map) {
              let tmp12 = item10035;
              let tmp13 = value;
              let result = map.set(tmp7, tmp9);
            }
          }
          let tmp15 = value;
          let obj = { item: null, children: null, state: null, cleanUp: null, renderItem: null };
          obj[0] = tmp9.item;
          let tmp16 = map;
          let tmp17 = item10035;
          obj[1] = map(tmp7, tmp9.item, tmp25.YEETED, tmp9.cleanUp);
          obj[2] = tmp25.YEETED;
          obj[3] = tmp9.cleanUp;
          obj[4] = map;
          if (null != obj.children) {
            let tmp21 = item10035;
            let tmp22 = obj;
            let result1 = map.set(tmp7, tmp18);
          } else {
            let tmp19 = item10035;
            let deleteResult = map.delete(tmp7);
          }
        }
        continue;
      }
      return map;
    }, items);
    useMemo = memo;
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
let result = require("jsxProd").fileFinishedImporting("design/components/TransitionGroup/TransitionGroup.tsx");

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
  }, items)} renderItem={arg0.renderItem} getItemKey={getSingleItemKey} />;
};