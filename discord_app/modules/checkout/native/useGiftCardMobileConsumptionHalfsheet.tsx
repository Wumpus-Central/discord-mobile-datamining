// discord_app/modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import set from "../../billing/stores/WalletBalanceStore.tsx";
import handlePaymentSourceUpdate from "../../../stores/billing/PaymentSourceStore.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { PaymentSourceTypes } from "../../../../discord_common/js/shared/Constants.tsx";

const require = fn;
const GiftCardMobileConsumptionActionSheet = "GiftCardMobileConsumptionActionSheet";
let obj = { Idle: "idle", Opening: "opening", Opened: "opened" };
let Idle = obj.Idle;
const result = require("obj132").fileFinishedImporting("modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx");

export const useGiftCardMobileConsumptionHalfsheet = function useGiftCardMobileConsumptionHalfsheet() {
  enabled = enabled(7365).useGiftCardsExperimentConfig({ location: "useGiftCardMobileConsumptionHalfsheet" }).enabled;
  obj = enabled(7365);
  let tmp = enabled;
  let items = [callback];
  let items1 = [enabled];
  const stateFromStores = enabled(589).useStateFromStores(items, () => {
    if (enabled) {
      const _Object = Object;
      const values = Object.values(callback.paymentSources);
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
  let obj2 = enabled(589);
  const items2 = [closure_5];
  const items3 = [stateFromStores];
  const stateFromStores1 = enabled(589).useStateFromStores(items2, () => {
    let balance = null;
    if (null != stateFromStores) {
      balance = ref.getBalance(tmp);
    }
    return balance;
  }, items3);
  const obj3 = enabled(589);
  const items4 = [closure_5];
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
  dependencyMap = tmp6;
  const items6 = [tmp6];
  const memo = React.useMemo(() => {
    if (dependencyMap) {
      const items = [enabled(1377).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items6);
  const obj4 = enabled(589);
  const tmp10 = first(tmp(7366).useSelectedDismissibleContent(memo, undefined, true), 2);
  first = tmp10[0];
  React = tmp12;
  closure_5 = React.useRef(tmp12);
  const items7 = [tmp10[1]];
  const effect = React.useEffect(() => {
    closure_5.current = closure_4;
  }, items7);
  callback = React.useCallback((closure_1_1) => {
    ref.current(stateFromStores);
  }, []);
  const items8 = [enabled];
  const effect1 = React.useEffect(() => {
    if (enabled) {
      const paymentSources = enabled(4466).fetchPaymentSources();
      obj = enabled(4466);
    }
  }, items8);
  const items9 = [stateFromStores];
  const effect2 = React.useEffect(() => {
    if (null != stateFromStores) {
      const walletInformation = enabled(4466).fetchWalletInformation(tmp);
      obj = enabled(4466);
    }
  }, items9);
  const items10 = [first, callback];
  const effect3 = React.useEffect(() => {
    function handleShow(key) {
      let tmp = c0;
      if (!c0) {
        tmp = key.key !== closure_1_9;
      }
      if (!tmp) {
        Idle = closure_1_10.Opened;
      }
    }
    if (first === enabled(1377).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      if (Opening === closure_1_10.Idle) {
        Opening = closure_1_10.Opening;
        c0 = false;
        obj = stateFromStores(709);
        const subscription = obj.subscribe("SHOW_ACTION_SHEET", handleShow);
        const promise = enabled(2007)(7370, dependencyMap.paths);
        promise.catch((error) => {
          let tmp = c0;
          if (!c0) {
            tmp = Idle !== closure_1_10.Opening;
          }
          if (!tmp) {
            Idle = closure_1_10.Idle;
          }
        });
        const obj2 = stateFromStores(4342);
        obj = { markAsDismissed: null };
        obj[0] = callback;
        obj2.openLazy(promise, GiftCardMobileConsumptionActionSheet, obj, "stack");
        return () => {
          c0 = true;
          handleShow(closure_1_2[11]).unsubscribe("SHOW_ACTION_SHEET", handleShow);
          if (Idle === closure_1_10.Opening) {
            Idle = closure_1_10.Idle;
          }
        };
      }
    }
  }, items10);
  const items11 = [first];
  const effect4 = React.useEffect(() => {
    function handleHide(key) {
      if (key.key === closure_1_9) {
        ref.current(closure_1_7.USER_DISMISS);
      }
    }
    if (first === enabled(1377).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      const subscription = stateFromStores(709).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        stateFromStores(table[11]).unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items11);
};