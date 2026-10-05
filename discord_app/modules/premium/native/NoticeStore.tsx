// discord_app/modules/premium/native/NoticeStore.tsx
import get_initializedDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import Storage4 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import _modDef4461 from "../../../../_runtime/metro/04461__.js";
import UserOfferStore from "../../../stores/billing/UserOfferStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function clearDismissUntil(arg0) {
  const Storage = Storage4.Storage;
  Storage.remove(`${closure_8[arg0]}-untilAtLeast`);
}
function isNoticeDismissed(PREMIUM_TIER_0_TRIAL_ENDING) {
  if (null == PREMIUM_TIER_0_TRIAL_ENDING) {
    return false;
  } else {
    if (null != closure_8[PREMIUM_TIER_0_TRIAL_ENDING]) {
      const Storage = Storage4.Storage;
      const value = Storage.get(`${tmp10[PREMIUM_TIER_0_TRIAL_ENDING]}-untilAtLeast`);
      let tmp4 = null;
      if (null != value) {
        tmp4 = _modDef4461(value);
      }
      if (null != tmp4) {
        return tmp4.isAfter(_modDef4461());
      }
    }
    let tmp6 = null != tmp11 && "" !== tmp11;
    if (tmp6) {
      const Storage2 = Storage4.Storage;
      let flag = Storage2.get(tmp11);
      if (flag == null) {
        flag = false;
      }
      tmp6 = flag;
    }
    return tmp6;
  }
}
function updateNotice() {
  c6 = null;
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (nextResult === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING) {
      items = [PremiumSubscriptionSKUs.TIER_2];
      if (UserOfferStore.getAlmostExpiringTrialOffersForReminder(items).length > 0) {
        if (!isNoticeDismissed(NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)) {
          c6 = tmp3;
          iter.return();
          break;
        }
      }
    } else if (tmp3 === NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING) {
      let items1 = [PremiumSubscriptionSKUs.TIER_0];
      if (UserOfferStore.getAlmostExpiringTrialOffersForReminder(items1).length > 0) {
        if (!isNoticeDismissed(NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)) {
          c6 = tmp3;
          iter.return();
          break;
        }
        break;
      }
    }
    continue;
  }
}
const PremiumSubscriptionSKUs = PremiumConstants.PremiumSubscriptionSKUs;
const NoticeTypes = Constants.NoticeTypes;
let c6 = null;
let items = [,];
({ PREMIUM_TIER_2_TRIAL_ENDING: arr[0], PREMIUM_TIER_0_TRIAL_ENDING: arr[1] } = NoticeTypes);
let closure_8 = {
  [NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: "hidePremiumTier0TrialEndingReminder",
  [NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialEndingReminder",
};
const Store = get_initializedDefault.Store;
class NoticeStore extends Store {
  initialize() {
    items = [UserOfferStore];
    this.syncWith(items, updateNotice);
    this.waitFor(UserOfferStore);
  }
  getNoticeType() {
    return c6;
  }
}
const prototype = NoticeStore.prototype;
NoticeStore.displayName = "NoticeStore";
const obj = {
  CONNECTION_OPEN: updateNotice,
  CURRENT_USER_UPDATE: updateNotice,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: updateNotice,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: updateNotice,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: updateNotice,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: updateNotice,
  LOGOUT: function handleLogout() {
    function clearStorage() {
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp5 = closure_1_8[nextResult];
        let tmp3 = nextResult;
        if (null != tmp5) {
          let Storage = Storage4.Storage;
          let removeResult = Storage.remove(tmp6);
        }
        let tmp13 = clearDismissUntil(tmp3);
        continue;
      }
    }
    clearStorage();
    c6 = null;
  },
  NOTICE_DISMISS: function handleNoticeDismiss(untilAtLeast) {
    if (null != c6) {
      untilAtLeast = untilAtLeast.untilAtLeast;
      if (null != c6) {
        if (null != closure_8[c6]) {
          const Storage = Storage4.Storage;
          const result = Storage.set(tmp16, true);
        }
        if (null != untilAtLeast) {
          if (null != closure_8[c6]) {
            const Storage3 = Storage4.Storage;
            const text = `${tmp15[tmp14]}-untilAtLeast`;
            const result1 = Storage3.set(
              `${tmp15[tmp14]}-untilAtLeast`,
              untilAtLeast.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
            );
          }
        }
        const Storage2 = Storage4.Storage;
        Storage2.remove(`${tmp15[tmp14]}-untilAtLeast`);
      }
      updateNotice();
    }
  },
};
const noticeStore = new NoticeStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/premium/native/NoticeStore.tsx");

export default noticeStore;
