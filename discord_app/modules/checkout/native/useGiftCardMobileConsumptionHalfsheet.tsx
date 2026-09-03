// discord_app/modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import closure_5 from "../../billing/stores/WalletBalanceStore.tsx";
import closure_6 from "../../../stores/billing/PaymentSourceStore.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import { PaymentSourceTypes } from "../../../../discord_common/js/shared/Constants.tsx";

const require = arg1;
const GiftCardMobileConsumptionActionSheet = "GiftCardMobileConsumptionActionSheet";
let obj = { Idle: "idle", Opening: "opening", Opened: "opened" };
let Idle = obj.Idle;
const result = require("set").fileFinishedImporting(
  "modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx",
);

export const useGiftCardMobileConsumptionHalfsheet = function useGiftCardMobileConsumptionHalfsheet() {
  enabled = enabled(6260).useGiftCardsExperimentConfig({ location: "useGiftCardMobileConsumptionHalfsheet" }).enabled;
  obj = enabled(6260);
  let tmp = enabled;
  let items = [callback];
  let items1 = [enabled];
  const stateFromStores = enabled(586).useStateFromStores(
    items,
    () => {
      if (enabled) {
        const _Object = Object;
        const values = Object.values(callback.paymentSources);
        for (const item10013 of values) {
          let tmp7 = item10013;
          let tmp8 = closure_1_8;
          if (item10013.type === closure_1_8.TDS_WALLET) {
            let tmp9 = obj;
            obj.return();
            return item10013.id;
          }
        }
        return null;
      } else {
        return null;
      }
    },
    items1,
  );
  let obj2 = enabled(586);
  const items2 = [closure_5];
  const items3 = [stateFromStores];
  const stateFromStores1 = enabled(586).useStateFromStores(
    items2,
    () => {
      let balance = null;
      if (null != stateFromStores) {
        balance = ref.getBalance(tmp);
      }
      return balance;
    },
    items3,
  );
  const obj3 = enabled(586);
  const items4 = [closure_5];
  const items5 = [stateFromStores];
  let tmp6 = enabled;
  const stateFromStores2 = enabled(586).useStateFromStores(
    items4,
    () => {
      let isFetching = null != stateFromStores;
      if (isFetching) {
        isFetching = ref.getIsFetching(tmp);
      }
      return isFetching;
    },
    items5,
  );
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
      const items = [enabled(1372).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }, items6);
  const obj4 = enabled(586);
  const tmp10 = first(tmp(6261).useSelectedDismissibleContent(memo, undefined, true), 2);
  first = tmp10[0];
  React = tmp12;
  closure_5 = React.useRef(tmp12);
  const items7 = [tmp10[1]];
  const effect = React.useEffect(() => {
    closure_5.current = closure_4;
  }, items7);
  callback = React.useCallback((AUTO_DISMISS) => {
    ref.current(AUTO_DISMISS);
  }, []);
  const items8 = [enabled];
  const effect1 = React.useEffect(() => {
    if (enabled) {
      const paymentSources = enabled(4838).fetchPaymentSources();
      obj = enabled(4838);
    }
  }, items8);
  const items9 = [stateFromStores];
  const effect2 = React.useEffect(() => {
    if (null != stateFromStores) {
      const walletInformation = enabled(4838).fetchWalletInformation(tmp);
      obj = enabled(4838);
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
    if (first === enabled(1372).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      if (Opening === closure_1_10.Idle) {
        Opening = closure_1_10.Opening;
        c0 = false;
        obj = stateFromStores(706);
        const subscription = obj.subscribe("SHOW_ACTION_SHEET", handleShow);
        const promise = enabled(2008)(6265, dependencyMap.paths);
        promise.catch(() => {
          let tmp = c0;
          if (!c0) {
            tmp = Idle !== closure_1_10.Opening;
          }
          if (!tmp) {
            Idle = closure_1_10.Idle;
          }
        });
        const obj2 = stateFromStores(4445);
        obj = { markAsDismissed: null };
        obj[0] = callback;
        obj2.openLazy(promise, closure_1_9, obj, "stack");
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
    if (first === enabled(1372).DismissibleContent.GIFT_CARD_MOBILE_CONSUMPTION_UNAVAILABLE_HALFSHEET) {
      const subscription = stateFromStores(706).subscribe("HIDE_ACTION_SHEET", handleHide);
      return () => {
        stateFromStores(table[11]).unsubscribe("HIDE_ACTION_SHEET", handleHide);
      };
    }
  }, items11);
};
