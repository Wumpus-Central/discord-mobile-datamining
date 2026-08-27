// === Module 13290: clearDismissUntil ===

// Module 13290 (clearDismissUntil)
import initializeDefault from "initialize" /* 589 */;
import Storage4 from "Storage" /* 595 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import hooksDefault from "hooks" /* 4043 */;
import closure_3 from "emitChanges" /* 7129 */;
import { PremiumSubscriptionSKUs } from "GuildFeatures" /* 1924 */;
import { NoticeTypes } from "ME" /* 676 */;

require = arg1;
function clearDismissUntil(arg0) {
  const Storage = Storage4.Storage;
  Storage.remove(`${closure_8[arg0]}-untilAtLeast`);
}
function isNoticeDismissed(PREMIUM_TIER_0_TRIAL_ENDING) {
  if (null == PREMIUM_TIER_0_TRIAL_ENDING) {
    return false;
  } else {
    if (null != dependencyMap[PREMIUM_TIER_0_TRIAL_ENDING]) {
      const Storage = Storage4.Storage;
      const value = Storage.get(`${tmp10[PREMIUM_TIER_0_TRIAL_ENDING]}-untilAtLeast`);
      let tmp4 = null;
      if (null != value) {
        tmp4 = hooksDefault(value);
      }
      if (null != tmp4) {
        return tmp4.isAfter(hooksDefault());
      }
    }
    let tmp6 = null != tmp11;
    if (tmp6) {
      tmp6 = "" !== tmp11;
    }
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
    let tmp4 = NoticeTypes;
    if (nextResult === NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING) {
      let tmp9 = store;
      let tmp10 = PremiumSubscriptionSKUs;
      items = [PremiumSubscriptionSKUs.TIER_2];
      if (store.getAlmostExpiringTrialOffersForReminder(items).length > 0) {
        let tmp11 = isNoticeDismissed;
        if (!isNoticeDismissed(tmp4.PREMIUM_TIER_2_TRIAL_ENDING)) {
          let tmp12 = nextResult;
          c6 = tmp3;
          let tmp13 = iter;
          iter.return();
          break;
        }
      }
    } else {
      let tmp5 = nextResult;
      if (tmp3 === tmp4.PREMIUM_TIER_0_TRIAL_ENDING) {
        let tmp14 = store;
        let tmp15 = PremiumSubscriptionSKUs;
        let items1 = [PremiumSubscriptionSKUs.TIER_0];
        if (store.getAlmostExpiringTrialOffersForReminder(items1).length > 0) {
          let tmp6 = isNoticeDismissed;
          if (!isNoticeDismissed(tmp4.PREMIUM_TIER_0_TRIAL_ENDING)) {
            let tmp7 = nextResult;
            c6 = tmp3;
            let tmp8 = iter;
            iter.return();
            break;
          }
          break;
        }
      }
    }
    continue;
  }
}
let c6 = null;
let items = [, ];
({ PREMIUM_TIER_2_TRIAL_ENDING: arr[0], PREMIUM_TIER_0_TRIAL_ENDING: arr[1] } = NoticeTypes);
let closure_8 = { [NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: "hidePremiumTier0TrialEndingReminder", [NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialEndingReminder" };
const Store = initializeDefault.Store;
class NoticeStore extends Store {
}
const prototype = NoticeStore.prototype;
prototype["initialize"] = function initialize() {
  items = [closure_3];
  this.syncWith(items, updateNotice);
  this.waitFor(closure_3);
};
prototype["getNoticeType"] = function getNoticeType() {
  return c6;
};
NoticeStore.displayName = "NoticeStore";
const noticeStore = new NoticeStore(dispatcherDefault, {
  CONNECTION_OPEN: updateNotice,
  CURRENT_USER_UPDATE: updateNotice,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: updateNotice,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: updateNotice,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: updateNotice,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: updateNotice,
  LOGOUT: function handleLogout() {
    (function clearStorage() {
      const iter = dependencyMap[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp4 = table2;
        let tmp5 = table2[nextResult];
        let tmp3 = nextResult;
        if (null != tmp5) {
          let tmp7 = callback;
          let tmp8 = table;
          let Storage = callback(table[3]).Storage;
          let tmp9 = tmp5;
          let removeResult = Storage.remove(tmp6);
        }
        let tmp11 = callback2;
        let tmp12 = nextResult;
        let tmp13 = callback2(tmp3);
        continue;
      }
    })();
    c6 = null;
  },
  NOTICE_DISMISS: function handleNoticeDismiss(untilAtLeast) {
    if (null != c6) {
      let result1 = untilAtLeast;
      let text = c6;
      untilAtLeast = untilAtLeast.untilAtLeast;
      if (null != c6) {
        result1 = dependencyMap;
        if (null != dependencyMap[text]) {
          const Storage = Storage4.Storage;
          const result = Storage.set(tmp13, true);
        }
        if (null == untilAtLeast) {
          const Storage2 = Storage4.Storage;
          Storage2.remove(`${tmp10[tmp9]}-untilAtLeast`);
        }
        const Storage3 = Storage4.Storage;
        text = `${tmp10[tmp9]}-untilAtLeast`;
        result1 = Storage3.set(`${tmp10[tmp9]}-untilAtLeast`, untilAtLeast.format("YYYY-MM-DDTHH:mm:ss.SSSZ"));
      }
      updateNotice();
    }
  }
});
let result = require("set").fileFinishedImporting("modules/premium/native/NoticeStore.tsx");

export default noticeStore;