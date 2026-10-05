// === Module 10434: useOrderContext ===

// Module 10434 (useOrderContext)
import react2 from "react" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let order;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let first;
  let tmp3;
  let tmp4;
  let obj = react2;
  const cResult = obj.c(6);
  [tmp3, tmp4] = _slicedToArray(react.useState(arg0), 2);
  let closure_0 = tmp4;
  const tmp2 = _slicedToArray(react.useState(arg0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(arg0) {
      let tmp = arg0((arg0) => {
        let tmp = arg0;
        if (null != arg0) {
          const obj = { revision };
          const merged = Object.assign(arg0);
          tmp = obj;
        }
        return tmp;
      });
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  let id;
  if (tmp3 != null) {
    id = tmp3.id;
  }
  let id1;
  if (tmp3 != null) {
    const order_line_items = tmp3.order_line_items;
    if (order_line_items != null) {
      const first1 = order_line_items[0];
      if (first1 != null) {
        id1 = first1.id;
      }
    }
  }
  let revision;
  if (tmp3 != null) {
    revision = tmp3.revision;
  }
  if (cResult[1] === tmp3) {
    if (cResult[2] === id) {
      if (cResult[3] === id1) {
        let tmp10;
        if (cResult[4] === revision) {
          tmp10 = cResult[5];
        }
        return tmp10;
      }
    }
  }
  const obj2 = { order: tmp3, setOrder: tmp4, setRevision: first, orderId: id, orderLineItemId: id1, revision };
  cResult[1] = tmp3;
  cResult[2] = id;
  cResult[3] = id1;
  cResult[4] = revision;
  cResult[5] = obj2;
  tmp10 = obj2;
}) : ((arg0) => {
  let first;
  let tmp3;
  [first, tmp3] = react.useState(arg0);
  let closure_1 = tmp3;
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    let tmp = setOrder((arg0) => {
      let tmp = arg0;
      if (null != arg0) {
        const obj = { revision };
        const merged = Object.assign(arg0);
        tmp = obj;
      }
      return tmp;
    });
  }, []);
  const items = [first, tmp3, callback];
  return react.useMemo(() => {
    let id;
    let id1;
    let revision;
    const obj = { order, setOrder, setRevision, orderId: id, orderLineItemId: id1, revision };
    id = undefined;
    if (order != null) {
      id = tmp.id;
    }
    id1 = undefined;
    if (order != null) {
      const order_line_items = tmp.order_line_items;
      if (order_line_items != null) {
        order = order_line_items[0];
        if (order != null) {
          id1 = order.id;
        }
      }
    }
    revision = undefined;
    if (order != null) {
      revision = tmp.revision;
    }
    return obj;
  }, items);
});
const result = size.fileFinishedImporting("modules/payments/native/hooks/useOrderContext.tsx");

export const useOrderContext = tmp2;