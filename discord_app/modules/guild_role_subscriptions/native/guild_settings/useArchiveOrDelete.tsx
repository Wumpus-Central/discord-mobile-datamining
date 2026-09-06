// === Module 17737: useArchiveOrDelete ===

// Module 17737 (useArchiveOrDelete)
import util from "util" /* 1114 */;
import ToastUtilsAll from "ToastUtils" /* 4258 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15227 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useEffect: metroRequire, useRef: closure_7 } = noop);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx");

export default function useArchiveOrDelete(guildId, groupListingId, editStateId, arg3) {
  _require = guildId;
  closure_1 = groupListingId;
  importAll = editStateId;
  dependencyMap = arg3;
  closure_14 = async function _handleArchiveOrDelete(arg0, value) {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj1 = { title, body, confirmText, confirmColor: tmp2(1178).ButtonColors.RED };
            v2 = 1;
            c2 = 1;
            const obj2 = { value: v2(4905).confirm(obj1), done: false };
            return obj2;
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else if (value) {
              if (closure_128_12) {
                closure_128_7(closure_128_2);
                if (null != closure_128_3) {
                  closure_128_3.goBack();
                }
              } else {
                v2(38)(null != closure_128_1, "group listing id cannot be null");
                if (closure_128_11) {
                  v2 = 3;
                  c2 = 1;
                  const obj4 = { value: closure_128_8(closure_128_0, tmp14, closure_128_2), done: false };
                  return obj4;
                } else {
                  v2 = 2;
                  c2 = 1;
                  const obj5 = { value: closure_128_9(closure_128_0, tmp14, closure_128_2), done: false };
                  return obj5;
                }
              }
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj6 = { value, done: true };
                return obj6;
              }
            } else if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (null != closure_128_3) {
                closure_128_3.goBack();
              }
            }
            c2 = 3;
            obj = { value, done: true };
            return obj;
          }
          c2 = 3;
        }
      } catch (tmp31) {
        c2 = tmp;
        throw tmp31;
      }
    }
  };
  let stringResult3 = dependencyMap;
  let obj = require("GuildRoleSubscriptionsHooks");
  const subscriptionListing = obj.useSubscriptionListing(editStateId);
  const removeEditStateId = GuildRoleSubscriptionListingEditStateUtilsAll.useEditStateIds(groupListingId, guildId).removeEditStateId;
  const deleteSubscriptionListing = require("GuildRoleSubscriptionsHooks").useDeleteSubscriptionListing();
  ({ error, deleteSubscriptionListing: closure_8, submitting } = deleteSubscriptionListing);
  let obj3 = require("GuildRoleSubscriptionsHooks");
  const archiveSubscriptionListing = require("GuildRoleSubscriptionsHooks").useArchiveSubscriptionListing();
  closure_9 = archiveSubscriptionListing.archiveSubscriptionListing;
  ({ submitting: submitting2, error: error2 } = archiveSubscriptionListing);
  removeEditStateId(null);
  let obj4 = require("GuildRoleSubscriptionsHooks");
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useName(editStateId), 1)[0];
  let archived;
  if (subscriptionListing != null) {
    archived = subscriptionListing.archived;
  }
  closure_11 = tmp8;
  closure_12 = tmp9;
  if (error == null) {
    error = error2;
  }
  if (true !== archived) {
    if (!tmp9) {
      let intl = tmp(1114).intl;
      obj = { tierName: first };
      const intl2 = tmp(1114).intl;
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.OuuIOY, obj);
      const intl3 = tmp(1114).intl;
      const stringResult = intl2.string(tmp(1114).t.RL0wjm);
      const intl4 = tmp(1114).intl;
      closure_4 = intl4.string(tmp(1114).t.N5AIuE);
      const intl5 = tmp(1114).intl;
      _slicedToArray = intl5.string(tmp(1114).t.TEKiiP);
      const intl6 = tmp(1114).intl;
      stringResult3 = intl6.string(tmp(1114).t["170XOL"]);
      const items = [error];
      stringResult3(() => {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const intl = util.intl;
          ToastUtilsAll.presentFailedToast(intl.string(util.t.R0RpRX));
        }
      }, items);
      obj = {
        headerText: formatToPlainStringResult,
        buttonText: stringResult,
        descriptionText: intl3.string(tmp(1114).t["5/Jeg2"]),
        handleArchiveOrDelete() {
              const self = this;
              const apply = closure_14.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            },
        deleting: submitting,
        archiving: submitting2
      };
      return obj;
    }
  }
  const intl7 = tmp(1114).intl;
  intl7.formatToPlainString(require("util").t.x2qwWL, { tierName: first });
  const intl8 = tmp(1114).intl;
  intl8.string(require("util").t.GMtG6p);
  let intl9 = tmp(1114).intl;
  let intl10 = intl9.string;
  let string = tmp(1114).t;
  if (undefined === subscriptionListing) {
    intl10(string.DHWKJS);
  } else {
    intl10(string.Y4KjUN);
  }
  const intl11 = tmp(1114).intl;
  closure_4 = intl11.string(tmp(1114).t["4H6RLl"]);
  intl9 = tmp(1114).intl;
  _slicedToArray = intl9.string(tmp(1114).t.uG6b1w);
  intl10 = tmp(1114).intl;
  string = intl10.string;
  stringResult3 = string(tmp(1114).t.JoCdPC);
};