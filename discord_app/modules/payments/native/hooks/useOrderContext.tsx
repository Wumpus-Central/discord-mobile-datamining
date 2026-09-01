// === Module 10479: useOrderContext ===

// Module 10479 (useOrderContext)
import closure_0 from "_slicedToArray" /* 32 */;
import closure_1 from "noop" /* 19 */;

const result = require("set").fileFinishedImporting("modules/payments/native/hooks/useOrderContext.tsx");

export const useOrderContext = function useOrderContext(initialOrder, NativeGiftContext) {
  let tmp = first(React.useState(initialOrder), 2);
  first = tmp[0];
  React = tmp3;
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    callback((arg0) => {
      let tmp = arg0;
      if (null != arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.revision = closure_0;
        tmp = obj;
      }
      return tmp;
    });
  }, []);
  const items = [first, tmp[1], callback];
  return React.useMemo(() => {
    const obj = { order: first, setOrder: closure_1, setRevision: callback, orderId: null, orderLineItemId: null, revision: null };
    let id;
    if (first != null) {
      id = tmp.id;
    }
    obj[3] = id;
    let id1;
    if (first != null) {
      const order_line_items = tmp.order_line_items;
      if (order_line_items != null) {
        first = order_line_items[0];
        if (first != null) {
          id1 = first.id;
        }
      }
    }
    obj[4] = id1;
    let revision;
    if (first != null) {
      revision = tmp.revision;
    }
    obj[5] = revision;
    return obj;
  }, items);
};