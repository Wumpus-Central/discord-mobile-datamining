// discord_app/modules/payments/native/hooks/useOrderContext.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/payments/native/hooks/useOrderContext.tsx");

export const useOrderContext = function useOrderContext(initialOrder) {
  let tmp = _slicedToArray(noop.useState(initialOrder), 2);
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
};
