// discord_app/modules/checkout/native/useGiftCardMobileConsumptionHalfsheet.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import actions_BillingActionCreators from "../../billing/actions/BillingActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import WalletBalanceStore from "../../billing/stores/WalletBalanceStore.tsx";
import PaymentSourceStore from "../../../stores/billing/PaymentSourceStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  const stateFromStores = obj2.useStateFromStores(
    items,
    () => {
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
    },
    items1,
  );
  let obj3 = enabled(504);
  const items2 = [ref];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj3.useStateFromStores(
    items2,
    () => {
      let balance = null;
      if (null != stateFromStores) {
        balance = WalletBalanceStore.getBalance(tmp);
      }
      return balance;
    },
    items3,
  );
  const items4 = [ref];
  const items5 = [stateFromStores];
  let tmp6 = enabled;
  const obj4 = enabled(504);
  const stateFromStores2 = obj4.useStateFromStores(
    items4,
    () => {
      const isFetching = null != stateFromStores && WalletBalanceStore.getIsFetching(tmp);
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
