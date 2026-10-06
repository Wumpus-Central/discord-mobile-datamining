// === Module 6898: useGiftCardMobileConsumptionHalfsheet ===

// Module 6898 (useGiftCardMobileConsumptionHalfsheet)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1096 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import actions_BillingActionCreators from "actions/BillingActionCreators" /* 5411 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import WalletBalanceStore from "WalletBalanceStore" /* 6899 */;
import PaymentSourceStore from "PaymentSourceStore" /* 4537 */;
import size from "module_2" /* 2 */;

let Idle, dependencyMap;

let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const PaymentSourceTypes = Constants.PaymentSourceTypes;
const GiftCardMobileConsumptionActionSheet = "GiftCardMobileConsumptionActionSheet";
let obj = { Idle: "idle", Opening: "opening", Opened: "opened" };
let Opening = obj.Idle;
const result = size.fileFinishedImporting("modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx");

export const useGiftCardMobileConsumptionHalfsheet = function useGiftCardMobileConsumptionHalfsheet() {
  let closure_2;
  let current;
  let enabled;
  let first;
  let markAsDismissed;
  let ref;
  let tmp = enabled;
  obj = enabled(6900);
  enabled = obj.useGiftCardsExperimentConfig({ location: "useGiftCardMobileConsumptionHalfsheet" }).enabled;
  let obj2 = enabled(504);
  let items = [markAsDismissed];
  let items1 = [enabled];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    if (enabled) {
      const _Object = Object;
      const values = Object.values(PaymentSourceStore.paymentSources);
      for (const item10013 of values) {
        if (item10013.type === PaymentSourceTypes.TDS_WALLET) {
          let id = item10013.id;
          obj.return();
          return id;
        }
      }
      return null;
    } else {
      return null;
    }
  }, items1);
  let obj3 = enabled(504);
  const items2 = [ref];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => {
    let balance = null;
    if (null != stateFromStores) {
      balance = WalletBalanceStore.getBalance(tmp);
    }
    return balance;
  }, items3);
  const items4 = [ref];
  const items5 = [stateFromStores];
  let tmp6 = enabled;
  const obj4 = enabled(504);
  const stateFromStores2 = obj4.useStateFromStores(items4, () => {
    const isFetching = null != stateFromStores && WalletBalanceStore.getIsFetching(tmp);
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
  const memo = react.useMemo(() => {
    let items1;
    if (closure_2) {
      const items = [dismissible_content.DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items6);
  const tmpResult = tmp(6901);
  const tmp10 = first(tmpResult.useSelectedDismissibleContent(memo, undefined, true), 2);
  first = tmp10[0];
  react = tmp12;
  ref = react.useRef(tmp12);
  const items7 = [tmp10[1]];
  const effect = react.useEffect(() => {
    ref.current = current;
  }, items7);
  markAsDismissed = react.useCallback((AUTO_DISMISS) => {
    ref.current(AUTO_DISMISS);
  }, []);
  const items8 = [enabled];
  const effect1 = react.useEffect(() => {
    if (enabled) {
      obj = actions_BillingActionCreators;
      const paymentSources = obj.fetchPaymentSources();
    }
  }, items8);
  const items9 = [stateFromStores];
  const effect2 = react.useEffect(() => {
    if (null != stateFromStores) {
      obj = actions_BillingActionCreators;
      const walletInformation = obj.fetchWalletInformation(tmp);
    }
  }, items9);
  const items10 = [first, markAsDismissed];
  const effect3 = react.useEffect(() => {
    function handleShow(key) {
      const tmp = c0 || key.key !== closure_2_9;
      if (!tmp) {
        Idle = closure_2_10.Opened;
      }
    }
    if (first === dismissible_content.DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      if (Opening === obj.Idle) {
        Opening = obj.Opening;
        let c0 = false;
        obj = DispatcherDefault;
        const subscription = obj.subscribe("SHOW_ACTION_SHEET", handleShow);
        const promise = asyncRequire(6905, dependencyMap.paths);
        promise.catch(() => {
          const tmp = c0 || Idle !== closure_2_10.Opening;
          if (!tmp) {
            Idle = closure_2_10.Idle;
          }
        });
        const obj2 = ActionSheetActionCreatorsDefault;
        const obj3 = { markAsDismissed };
        obj2.openLazy(promise, GiftCardMobileConsumptionActionSheet, obj3, "stack");
        return () => {
          c0 = true;
          obj = stateFromStores(closure_2_2[11]);
          obj.unsubscribe("SHOW_ACTION_SHEET", handleShow);
          if (Idle === closure_2_10.Opening) {
            Idle = closure_2_10.Idle;
          }
        };
      }
    }
  }, items10);
  const items11 = [first];
  const effect4 = react.useEffect(() => {
    function handleHide(key) {
      if (key.key === GiftCardMobileConsumptionActionSheet) {
        ref.current(constants.USER_DISMISS);
      }
    }
    if (first === enabled(closure_2[8]).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      obj = stateFromStores(closure_2[11]);
      const subscription = obj.subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        obj = DispatcherDefault;
        obj.unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items11);
};