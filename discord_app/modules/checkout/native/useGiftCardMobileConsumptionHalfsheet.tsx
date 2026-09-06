// === Module 7385: useGiftCardMobileConsumptionHalfsheet ===

// Module 7385 (useGiftCardMobileConsumptionHalfsheet)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 4884 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import WalletBalanceStore from "WalletBalanceStore" /* 7386 */;
import PaymentSourceStore from "PaymentSourceStore" /* 4221 */;

require = fn;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const PaymentSourceTypes = fn(1085).PaymentSourceTypes;
const GiftCardMobileConsumptionActionSheet = "GiftCardMobileConsumptionActionSheet";
let obj = { Idle: "idle", Opening: "opening", Opened: "opened" };
let Opening = obj.Idle;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx");

export const useGiftCardMobileConsumptionHalfsheet = function useGiftCardMobileConsumptionHalfsheet() {
  enabled = enabled(7387).useGiftCardsExperimentConfig({ location: "useGiftCardMobileConsumptionHalfsheet" }).enabled;
  obj = enabled(7387);
  let tmp = enabled;
  let items = [markAsDismissed];
  let items1 = [enabled];
  const stateFromStores = enabled(504).useStateFromStores(items, () => {
    if (enabled) {
      const _Object = Object;
      const values = Object.values(PaymentSourceStore.paymentSources);
      for (const item10013 of values) {
        if (item10013.type === PaymentSourceTypes.TDS_WALLET) {
          obj.return();
          return item10013.id;
        }
      }
      return null;
    } else {
      return null;
    }
  }, items1);
  let obj2 = enabled(504);
  const items2 = [ref];
  const items3 = [stateFromStores];
  const stateFromStores1 = enabled(504).useStateFromStores(items2, () => {
    let balance = null;
    if (null != stateFromStores) {
      balance = WalletBalanceStore.getBalance(tmp);
    }
    return balance;
  }, items3);
  const obj3 = enabled(504);
  const items4 = [ref];
  const items5 = [stateFromStores];
  let tmp6 = enabled;
  const stateFromStores2 = enabled(504).useStateFromStores(items4, () => {
    let isFetching = null != stateFromStores;
    if (isFetching) {
      isFetching = WalletBalanceStore.getIsFetching(tmp);
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
  dependencyMap = tmp6;
  const items6 = [tmp6];
  const memo = noop.useMemo(() => {
    if (closure_2) {
      const items = [dismissible_content.DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items6);
  const obj4 = enabled(504);
  const tmp10 = first(tmp(7388).useSelectedDismissibleContent(memo, undefined, true), 2);
  first = tmp10[0];
  noop = tmp12;
  ref = noop.useRef(tmp10[1]);
  const items7 = [tmp10[1]];
  const effect = noop.useEffect(() => {
    closure_5.current = current;
  }, items7);
  markAsDismissed = noop.useCallback((AUTO_DISMISS) => {
    ref.current(AUTO_DISMISS);
  }, []);
  const items8 = [enabled];
  const effect1 = noop.useEffect(() => {
    if (enabled) {
      const paymentSources = actions_BillingActionCreators.fetchPaymentSources();
    }
  }, items8);
  const items9 = [stateFromStores];
  const effect2 = noop.useEffect(() => {
    if (null != stateFromStores) {
      const walletInformation = actions_BillingActionCreators.fetchWalletInformation(tmp);
    }
  }, items9);
  const items10 = [first, markAsDismissed];
  const effect3 = noop.useEffect(() => {
    function handleShow(key) {
      let tmp = c0;
      if (!c0) {
        tmp = key.key !== GiftCardMobileConsumptionActionSheet;
      }
      if (!tmp) {
        Idle = obj.Opened;
      }
    }
    if (first === dismissible_content.DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      if (Opening === obj.Idle) {
        Opening = obj.Opening;
        c0 = false;
        obj = DispatcherDefault;
        const subscription = obj.subscribe("SHOW_ACTION_SHEET", handleShow);
        const promise = asyncRequireImpl(7392, dependencyMap.paths);
        promise.catch(() => {
          let tmp = c0;
          if (!c0) {
            tmp = Idle !== obj.Opening;
          }
          if (!tmp) {
            Idle = obj.Idle;
          }
        });
        const obj2 = ActionSheetActionCreatorsDefault;
        obj = { markAsDismissed };
        obj2.openLazy(promise, GiftCardMobileConsumptionActionSheet, obj, "stack");
        return () => {
          c0 = true;
          stateFromStores(closure_2[11]).unsubscribe("SHOW_ACTION_SHEET", handleShow);
          if (Idle === obj.Opening) {
            Idle = obj.Idle;
          }
        };
      }
    }
  }, items10);
  const items11 = [first];
  const effect4 = noop.useEffect(() => {
    function handleHide(key) {
      if (key.key === GiftCardMobileConsumptionActionSheet) {
        ref.current(constants.USER_DISMISS);
      }
    }
    if (first === enabled(dependencyMap[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      const subscription = stateFromStores(dependencyMap[11]).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        DispatcherDefault.unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items11);
};