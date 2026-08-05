// discord_app/modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import set from "set";
import handlePaymentSourceUpdate from "handlePaymentSourceUpdate";
import { ContentDismissActionType } from "ContentDismissActionType";
import { PaymentSourceTypes } from "sum";

const require = arg1;
const GiftCardMobileConsumptionActionSheet = "GiftCardMobileConsumptionActionSheet";
let obj = { Idle: "idle", Opening: "opening", Opened: "opened" };
const Idle = obj.Idle;
const result = require("set").fileFinishedImporting("modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx");

export const useGiftCardMobileConsumptionHalfsheet = function useGiftCardMobileConsumptionHalfsheet() {
  enabled = enabled(5915).useGiftCardsExperimentConfig({ location: "useGiftCardMobileConsumptionHalfsheet" }).enabled;
  let obj = enabled(5915);
  let tmp = enabled;
  let items = [callback];
  let items1 = [enabled];
  const stateFromStores = enabled(589).useStateFromStores(items, () => {
    if (enabled) {
      const _Object = Object;
      const values = Object.values(callback.paymentSources);
      for (const item10013 of values) {
        let tmp7 = item10013;
        let tmp8 = outer1_8;
        if (item10013.type === outer1_8.TDS_WALLET) {
          let tmp9 = obj;
          obj.return();
          return item10013.id;
        }
      }
      return null;
    } else {
      return null;
    }
  }, items1);
  let obj2 = enabled(589);
  const items2 = [set];
  const items3 = [stateFromStores];
  const stateFromStores1 = enabled(589).useStateFromStores(items2, () => {
    let balance = null;
    if (null != stateFromStores) {
      balance = ref.getBalance(tmp);
    }
    return balance;
  }, items3);
  const obj3 = enabled(589);
  const items4 = [set];
  const items5 = [stateFromStores];
  let tmp6 = enabled;
  const stateFromStores2 = enabled(589).useStateFromStores(items4, () => {
    let isFetching = null != stateFromStores;
    if (isFetching) {
      isFetching = ref.getIsFetching(tmp);
    }
    return isFetching;
  }, items5);
  if (enabled) {
    tmp6 = null != stateFromStores;
  }
  if (tmp6) {
    tmp6 = !stateFromStores2;
  }
  if (tmp6) {
    tmp6 = null != stateFromStores1;
  }
  if (tmp6) {
    tmp6 = stateFromStores1.amount > 0;
  }
  const dependencyMap = tmp6;
  const items6 = [tmp6];
  const memo = React.useMemo(() => {
    if (tmp6) {
      const items = [enabled(tmp6[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items6);
  const obj4 = enabled(589);
  const tmp10 = first(tmp(5916).useSelectedDismissibleContent(memo, undefined, true), 2);
  first = tmp10[0];
  React = tmp12;
  set = React.useRef(tmp12);
  const items7 = [tmp10[1]];
  const effect = React.useEffect(() => {
    set.current = noop;
  }, items7);
  callback = React.useCallback((AUTO_DISMISS) => {
    ref.current(AUTO_DISMISS);
  }, []);
  const items8 = [enabled];
  const effect1 = React.useEffect(() => {
    if (enabled) {
      const paymentSources = enabled(tmp6[10]).fetchPaymentSources();
      const obj = enabled(tmp6[10]);
    }
  }, items8);
  const items9 = [stateFromStores];
  const effect2 = React.useEffect(() => {
    if (null != stateFromStores) {
      const walletInformation = enabled(tmp6[10]).fetchWalletInformation(tmp);
      const obj = enabled(tmp6[10]);
    }
  }, items9);
  const items10 = [first, callback];
  const effect3 = React.useEffect(() => {
    function handleShow(key) {
      let tmp = c0;
      if (!c0) {
        tmp = key.key !== outer1_9;
      }
      if (!tmp) {
        const outer1_11 = outer1_10.Opened;
      }
    }
    if (first === enabled(tmp6[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      if (outer1_11 === outer1_10.Idle) {
        outer1_11 = outer1_10.Opening;
        let c0 = false;
        let obj = stateFromStores(tmp2[11]);
        const subscription = obj.subscribe("SHOW_ACTION_SHEET", handleShow);
        const promise = enabled(tmp2[13])(tmp2[12], tmp2.paths);
        promise.catch(() => {
          let tmp = c0;
          if (!c0) {
            tmp = outer1_11 !== outer1_10.Opening;
          }
          if (!tmp) {
            outer1_11 = outer1_10.Idle;
          }
        });
        const obj2 = stateFromStores(tmp2[14]);
        obj = { markAsDismissed: null };
        obj[0] = callback;
        obj2.openLazy(promise, outer1_9, obj, "stack");
        return () => {
          let c0 = true;
          handleShow(outer1_2[11]).unsubscribe("SHOW_ACTION_SHEET", handleShow);
          if (outer1_11 === outer1_10.Opening) {
            outer1_11 = outer1_10.Idle;
          }
        };
      }
    }
  }, items10);
  const items11 = [first];
  const effect4 = React.useEffect(() => {
    function handleHide(key) {
      if (key.key === outer1_9) {
        ref.current(outer1_7.USER_DISMISS);
      }
    }
    if (first === enabled(tmp6[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      const subscription = stateFromStores(tmp[11]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        stateFromStores(table[11]).unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
    tmp = tmp6;
  }, items11);
};