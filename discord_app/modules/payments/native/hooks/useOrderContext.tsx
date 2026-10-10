// === Module 10058: useOrderContext ===

// Module 10058 (useOrderContext)
import c from "c" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/native/hooks/useOrderContext.tsx");

export const useOrderContext = ReactCompilerGating.isReactCompilerEnabled() ? (function useOrderContext(arg0, arg1) {
  const cResult = c.c(6);
  [tmp3, tmp4] = noop.useState(arg0);
  require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function u(revision) {
      revision((arg0) => {
        let tmp = arg0;
        if (null != arg0) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.revision = revision;
          tmp = obj;
        }
        return tmp;
      });
    };
    cResult[0] = fn;
    let first = fn;
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
        if (cResult[4] === revision) {
          let tmp10 = cResult[5];
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
}) : (function useOrderContext(arg0) {
  let tmp = _slicedToArray(noop.useState(arg0), 2);
  let order = tmp[0];
  const setOrder = tmp3;
  const setRevision = noop.useCallback((revision) => {
    setOrder((arg0) => {
      let tmp = arg0;
      if (null != arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.revision = revision;
        tmp = obj;
      }
      return tmp;
    });
  }, []);
  const items = [order, tmp[1], setRevision];
  return noop.useMemo(() => {
    const obj = { order, setOrder, setRevision, orderId: null, orderLineItemId: null, revision: null };
    let id;
    if (order != null) {
      id = tmp.id;
    }
    obj.orderId = id;
    let id1;
    if (order != null) {
      const order_line_items = tmp.order_line_items;
      if (order_line_items != null) {
        order = order_line_items[0];
        if (order != null) {
          id1 = order.id;
        }
      }
    }
    obj.orderLineItemId = id1;
    let revision;
    if (order != null) {
      revision = tmp.revision;
    }
    obj.revision = revision;
    return obj;
  }, items);
});