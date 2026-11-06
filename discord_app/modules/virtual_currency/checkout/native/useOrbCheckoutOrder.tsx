// === Module 15287: useOrbCheckoutOrder ===

// Module 15287 (useOrbCheckoutOrder)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const ItemPurchaseType = fn(5903).ItemPurchaseType;
const PaymentGateways = fn(1083).PaymentGateways;
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/checkout/native/useOrbCheckoutOrder.tsx");

export function useOrbCheckoutOrder(skuId) {
  skuId = skuId.skuId;
  let isOrdersCheckout;
  dependencyMap = undefined;
  c3 = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  isOrdersCheckout = isOrdersCheckout(15288).useConfig({ location: "orb_checkout_modal" }).enabled;
  const obj = isOrdersCheckout(15288);
  [tmp2, c2] = noop.useState(null);
  let tmp = _slicedToArray(noop.useState(null), 2);
  [tmp4, c3] = noop.useState(isOrdersCheckout);
  const createOrderError = _slicedToArray(noop.useState(null), 2);
  _slicedToArray = createOrderError[1];
  noop = noop.useRef(false);
  closure_6 = noop.useRef(null);
  closure_7 = noop.useRef(false);
  closure_8 = noop.useRef(false);
  const onSignFailure = noop.useCallback((current) => {
    closure_6.current = current;
    _undefined(current);
  }, []);
  items = [isOrdersCheckout, skuId, onSignFailure];
  const markCheckoutSucceeded = noop.useCallback(() => {
    closure_7.current = true;
  }, []);
  const effect = noop.useEffect(() => {
    closure_0 = async function _createOrbOrder() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              skuId = tmp8;
              closure_128_0 = undefined;
              let v0 = 2;
              const obj4 = { orderLineItems: null, paymentGateway: null, isGift: false };
              const obj7 = { sku_id: skuId, quantity: 1, purchase_type: constants.ONE_TIME };
              items = [obj7];
              obj4.orderLineItems = items;
              obj4.paymentGateway = constants2.VIRTUAL_CURRENCY;
              c4 = 3;
              c5 = 1;
              const obj8 = { value: skuId(7713).createOrder(obj4), done: false };
              return obj8;
            }
          } else if (1 === tmp8) {
            v0 = 0;
            v0(false);
            throw closure_2;
          } else if (2 === tmp8) {
            v0 = 1;
            closure_128_1 = closure_2;
            if (obj5.isExpectedHttpClientError(closure_128_1)) {
              if (closure_128_1 instanceof isOrdersCheckout(4990)) {
                let tmp56 = closure_128_1;
              } else {
                tmp56 = new isOrdersCheckout(4990)(closure_128_1);
              }
              c4(tmp56);
            } else {
              const _Error = Error;
              if (closure_128_1 instanceof Error) {
                let error = closure_128_1;
              } else {
                const _Error2 = Error;
                const _String = String;
                error = new Error(String(closure_128_1));
              }
              const obj9 = { tags: { source: "create_order" }, extra: null };
              const obj10 = { skuId, paymentGateway: null };
              const _String2 = String;
              obj10.paymentGateway = String(constants2.VIRTUAL_CURRENCY);
              obj9.extra = obj10;
              const result = skuId(4983).captureBillingException(error, obj9);
              const obj6 = skuId(4983);
            }
            obj5 = skuId(4983);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            v0(false);
            c5 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_128_0 = value;
            if (!ref.current) {
              onSignFailure(closure_128_0);
              v0 = 1;
              v0 = 0;
              v0(false);
              c5 = 3;
            }
            const obj13 = { checkoutSucceeded: false, order: closure_128_0 };
            skuId(10815).discardDraftOrder(obj13);
            v0 = 0;
            v0(false);
            c5 = 3;
            const obj14 = { value: undefined, done: true };
            return obj14;
          }
        } catch (tmp66) {
          closure_2 = tmp66;
          if (tmp5 === v0) {
            c5 = tmp3;
            throw tmp66;
          } else if (tmp2 === tmp68) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    };
    let tmp = isOrdersCheckout;
    if (isOrdersCheckout) {
      tmp = !ref.current;
    }
    if (tmp) {
      ref.current = true;
      (function createOrbOrder() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items);
  const effect1 = noop.useEffect(() => {
    closure_8.current = false;
    return () => {
      closure_1_8.current = true;
      skuId(c2[7]).discardDraftOrder({ checkoutSucceeded: ref2.current, order: ref.current });
    };
  }, []);
  return { isOrdersCheckout, order, isCreatingOrder, createOrderError: createOrderError[0], onSignFailure, markCheckoutSucceeded };
}