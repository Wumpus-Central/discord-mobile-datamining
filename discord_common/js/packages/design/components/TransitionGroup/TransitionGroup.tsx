// === Module 4606: TransitionGroup/TransitionGroup ===

// Module 4606 (TransitionGroup/TransitionGroup)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let constants, map;

function wrapChildrenDefault(arg0) {
  return arg0;
}
class TransitionGroup {
  constructor(renderItem) {
    let memo;
    const items = renderItem.items;
    renderItem = renderItem.renderItem;
    const getItemKey = renderItem.getItemKey;
    let wrapChildren = renderItem.wrapChildren;
    if (wrapChildren === undefined) {
      wrapChildren = memo;
    }
    const lazyCleanUpDelay = renderItem.lazyCleanUpDelay;
    let ref2;
    const ref = lazyCleanUpDelay.useRef(-1);
    const layoutEffect = lazyCleanUpDelay.useLayoutEffect(() => {
      if (-1 !== ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp.current);
      }
    }, []);
    constants = getItemKey(lazyCleanUpDelay.useState(ref2), 2)[1];
    ref2 = lazyCleanUpDelay.useRef(null);
    const items1 = [items, getItemKey, renderItem, lazyCleanUpDelay];
    memo = lazyCleanUpDelay.useMemo(() => {
      let current = ref2.current;
      let keys;
      const _Set = Set;
      if (current != null) {
        keys = current.keys();
      }
      const _Set1 = new _Set(keys);
      map = new Map(ref2.current);
      function _loop() {
        let tmp6;
        const tmp2 = getItemKey(item);
        let closure_0 = tmp2;
        let value = map.get(tmp2);
        if (null == value) {
          let MOUNTED;
          if (null != ref.current) {
            MOUNTED = map.ENTERED;
          } else {
            MOUNTED = map.MOUNTED;
          }
          function _cleanUp() {
            const current = ref2.current;
            let value;
            if (current != null) {
              value = current.get(closure_0);
            }
            if (null != value) {
              if (value.state === constants.YEETED) {
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
          tmp6 = { item, children: renderItem(tmp2, item, MOUNTED, _cleanUp), state: MOUNTED, cleanUp: _cleanUp, renderItem };
          const obj2 = { item, children: renderItem(tmp2, item, MOUNTED, _cleanUp), state: MOUNTED, cleanUp: _cleanUp, renderItem };
        } else {
          let state;
          if (value.item === item) {
            if (value.renderItem === renderItem) {
              tmp6 = value;
            }
          }
          const cleanUp = value.cleanUp;
          if (value.state === map.YEETED) {
            state = map.ENTERED;
          } else {
            state = value.state;
          }
          tmp6 = { item, children: renderItem(tmp2, item, state, value.cleanUp), state, cleanUp, renderItem };
          const obj3 = { item, children: renderItem(tmp2, item, state, value.cleanUp), state, cleanUp, renderItem };
        }
        const result = map.set(tmp2, tmp6);
        _Set1.delete(tmp2);
      }
      const iter = _Set1[Symbol.iterator]();
      const tmp4 = _Set1;
      while (iter !== undefined) {
        let item = iter.next();
        let _loopResult = _loop();
        continue;
      }
      for (const item10035 of tmp4) {
        let value = map.get(item10035);
        let tmp9 = value;
        if (null != value) {
          if (tmp9.state === constants.YEETED) {
            if (tmp9.renderItem === map) {
              let result = map.set(item10035, tmp9);
            }
          }
          let obj = { item: tmp9.item, children: map(item10035, tmp9.item, constants.YEETED, tmp9.cleanUp), state: constants.YEETED, cleanUp, renderItem: map };
          let cleanUp = tmp9.cleanUp;
          if (null != obj.children) {
            let result1 = map.set(item10035, tmp18);
          } else {
            let deleteResult = map.delete(item10035);
          }
        }
        continue;
      }
      return map;
    }, items1);
    const items2 = [memo];
    const insertionEffect = lazyCleanUpDelay.useInsertionEffect(() => {
      ref.current = memo;
      return () => {
        const current = ref.current;
        let clearResult;
        if (current != null) {
          clearResult = current.clear();
        }
        return clearResult;
      };
    }, items2);
    const items3 = [];
    for (const item10037 of memo) {
      let tmp4 = getItemKey;
      let arr = items3.push(getItemKey(item10037, 2)[1].children);
      continue;
    }
    let wrapChildrenResult = null;
    if (items3.length > 0) {
      wrapChildrenResult = wrapChildren(items3, items);
    }
    return wrapChildrenResult;
  }
}
function getSingleItemKey() {
  return "key";
}
const jsx = Fragment.jsx;
const TransitionStates = { MOUNTED: 0, [0]: "MOUNTED", ENTERED: 1, [1]: "ENTERED", YEETED: 2, [2]: "YEETED" };
let closure_6 = {};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function TransitionItem(arg0) {
  let item;
  let renderItem;
  let tmp2;
  const obj = react2;
  const cResult = obj.c(5);
  ({ item, renderItem } = arg0);
  if (cResult[0] !== item) {
    let items1;
    if (null != item) {
      const items = [item];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = item;
    cResult[1] = items1;
    tmp2 = items1;
  } else {
    tmp2 = cResult[1];
  }
  if (cResult[2] === tmp2) {
    let tmp4;
    if (cResult[3] === renderItem) {
      tmp4 = cResult[4];
    }
    return tmp4;
  }
  const tmp5 = <TransitionGroup items={tmp2} renderItem={renderItem} getItemKey={getSingleItemKey} />;
  cResult[2] = tmp2;
  cResult[3] = renderItem;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : (function TransitionItem(renderItem) {
  const item = renderItem.item;
  let items = [item];
  return <TransitionGroup items={react.useMemo(() => {
    let items1;
    if (null != item) {
      const items = [tmp];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items)} renderItem={renderItem.renderItem} getItemKey={getSingleItemKey} />;
});
let result = size.fileFinishedImporting("../discord_common/js/packages/design/components/TransitionGroup/TransitionGroup.tsx");

export { TransitionStates };
export { TransitionGroup };
export const TransitionItem = tmp2;