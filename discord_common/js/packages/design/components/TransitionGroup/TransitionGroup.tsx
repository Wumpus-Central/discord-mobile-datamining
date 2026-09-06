// === Module 4283: TransitionGroup/TransitionGroup ===

// Module 4283 (TransitionGroup/TransitionGroup)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

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
    closure_4 = renderItem.useRef(-1);
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
        const tmp2 = getItemKey(item);
        closure_0 = tmp2;
        let obj = map;
        value = map.get(tmp2);
        if (null == value) {
          if (null != ref2.current) {
            let MOUNTED = obj.ENTERED;
          } else {
            MOUNTED = obj.MOUNTED;
          }
          function _cleanUp2() {
            const current = ref2.current;
            value = undefined;
            if (current != null) {
              value = current.get(closure_0);
            }
            if (null != value) {
              if (value.state === lazyCleanUpDelay.YEETED) {
                const current2 = ref2.current;
                if (current2 != null) {
                  current2.delete(closure_0);
                }
                if (null != closure_2_3) {
                  const _clearTimeout = clearTimeout;
                  clearTimeout(ref.current);
                  const _setTimeout = setTimeout;
                  ref.current = setTimeout(() => closure_1_5({}), tmp7);
                } else {
                  closure_2_5({});
                }
              }
            }
          }
          obj = { item, children: renderItem(tmp2, item, MOUNTED, _cleanUp2), state: MOUNTED, cleanUp: _cleanUp2, renderItem };
        } else {
          if (value.item === item) {
            if (value.renderItem === renderItem) {
              let tmp6 = value;
            }
            const result = obj.set(tmp2, tmp6);
            set.delete(tmp2);
          }
          if (value.state === obj.YEETED) {
            let state = obj.ENTERED;
          } else {
            state = value.state;
          }
          obj = { item, children: renderItem(tmp2, item, state, value.cleanUp), state, cleanUp: value.cleanUp, renderItem };
          tmp6 = obj;
        }
      }
      const iter = set[Symbol.iterator]();
      while (iter !== undefined) {
        let item = iter.next();
        let _loopResult = _loop();
        continue;
      }
      for (const item10035 of set) {
        value = map.get(item10035);
        let tmp9 = value;
        if (null != value) {
          if (tmp9.state === lazyCleanUpDelay.YEETED) {
            if (tmp9.renderItem === map) {
              let result = map.set(item10035, tmp9);
            }
          }
          let obj = { item: tmp9.item, children: null, state: null, cleanUp: null, renderItem: null };
          obj.children = map(item10035, tmp9.item, lazyCleanUpDelay.YEETED, tmp9.cleanUp);
          obj.state = lazyCleanUpDelay.YEETED;
          obj.cleanUp = tmp9.cleanUp;
          obj.renderItem = map;
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
      ref.current = memo;
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
const jsx = fn(21).jsx;
const TransitionStates = { MOUNTED: 0, [0]: "MOUNTED", ENTERED: 1, [1]: "ENTERED", YEETED: 2, [2]: "YEETED" };
let closure_4 = {};
const size = fn(2);
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/TransitionGroup/TransitionGroup.tsx");

export { TransitionStates };
export { TransitionGroup };
export const TransitionItem = function TransitionItem(renderItem) {
  const item = renderItem.item;
  let items = [item];
  return <TransitionGroup items={noop.useMemo(() => {
    if (null != item) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items)} renderItem={renderItem.renderItem} getItemKey={getSingleItemKey} />;
};