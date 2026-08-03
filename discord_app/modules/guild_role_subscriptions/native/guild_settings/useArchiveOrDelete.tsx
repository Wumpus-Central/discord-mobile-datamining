// === Module 16666: useArchiveOrDelete ===

// Module 16666 (useArchiveOrDelete)
import getSystemLocale from "getSystemLocale";
import _slicedToArray from "_slicedToArray";
import noop from "noop";

let closure_6;
let error;
const require = arg1;
({ useEffect: closure_6, useRef: error } = noop);
const result = require("noop").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx");

export default function useArchiveOrDelete(guildId, groupListingId, editStateId) {
  let closure_8;
  let error;
  let error2;
  let submitting;
  let submitting2;
  const _require = guildId;
  let closure_1 = groupListingId;
  const importAll = editStateId;
  const dependencyMap = arg3;
  function _handleArchiveOrDelete() {
    const self = this;
    const tmp = callback(function*() {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_0 = tmp2;
              const obj1 = { title: null, body: null, confirmText: null, confirmColor: null };
              obj1[0] = outer1_4;
              obj1[1] = outer1_5;
              obj1[2] = outer1_6;
              obj1[3] = outer1_0(outer1_3[7]).ButtonColors.RED;
              v0 = 1;
              c2 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = v0(outer1_3[6]).confirm(obj1);
              return obj2;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c2 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else if (arg1) {
                if (closure_12) {
                  callback(c2);
                  if (null != navigation) {
                    navigation.goBack();
                  }
                } else {
                  v0(outer1_3[8])(null != v0, "group listing id cannot be null");
                  if (closure_11) {
                    v0 = 3;
                    c2 = 1;
                    const obj4 = { value: null, done: false };
                    obj4[0] = callback2(closure_0, tmp14, c2);
                    return obj4;
                  } else {
                    v0 = 2;
                    c2 = 1;
                    const obj5 = { value: null, done: false };
                    obj5[0] = callback3(closure_0, tmp14, c2);
                    return obj5;
                  }
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c2 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = arg1;
                  return obj6;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (null != navigation) {
                  navigation.goBack();
                }
              }
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c2 = 3;
          }
        } catch (tmp31) {
          c2 = tmp;
          throw tmp31;
        }
      }
    });
    const _handleArchiveOrDelete = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let stringResult3 = dependencyMap;
  let obj = _require(14315);
  const subscriptionListing = obj.useSubscriptionListing(editStateId);
  const removeEditStateId = importAll(14330).useEditStateIds(groupListingId, guildId).removeEditStateId;
  let obj2 = importAll(14330);
  const deleteSubscriptionListing = _require(14315).useDeleteSubscriptionListing();
  ({ error, deleteSubscriptionListing: closure_8, submitting } = deleteSubscriptionListing);
  let obj3 = _require(14315);
  const archiveSubscriptionListing = _require(14315).useArchiveSubscriptionListing();
  let closure_9 = archiveSubscriptionListing.archiveSubscriptionListing;
  ({ submitting: submitting2, error: error2 } = archiveSubscriptionListing);
  let closure_10 = removeEditStateId(null);
  let obj4 = _require(14315);
  const first = callback(importAll(14330).useName(editStateId), 1)[0];
  let archived;
  if (subscriptionListing != null) {
    archived = subscriptionListing.archived;
  }
  let closure_11 = tmp8;
  let closure_12 = tmp9;
  if (error == null) {
    error = error2;
  }
  if (true !== archived) {
    if (!tmp9) {
      let intl = tmp(1236).intl;
      obj = { tierName: null };
      obj[0] = first;
      const intl2 = tmp(1236).intl;
      const formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t.OuuIOY, obj);
      const intl3 = tmp(1236).intl;
      const stringResult = intl2.string(tmp(1236).t.RL0wjm);
      const intl4 = tmp(1236).intl;
      let getSystemLocale = intl4.string(tmp(1236).t.N5AIuE);
      const intl5 = tmp(1236).intl;
      callback = intl5.string(tmp(1236).t.TEKiiP);
      const intl6 = tmp(1236).intl;
      stringResult3 = intl6.string(tmp(1236).t["170XOL"]);
      const items = [error];
      stringResult3(() => {
        let tmp2;
        if (ref.current !== error) {
          tmp2 = error;
        }
        if (null != tmp2) {
          ref.current = tmp2;
          const intl = guildId(1236).intl;
          editStateId(3955).presentFailedToast(intl.string(guildId(1236).t.R0RpRX));
          const obj = editStateId(3955);
        }
      }, items);
      obj = { headerText: null, buttonText: null, descriptionText: null, handleArchiveOrDelete: null, deleting: null, archiving: null };
      obj[0] = formatToPlainStringResult;
      obj[1] = stringResult;
      obj[2] = intl3.string(tmp(1236).t["5/Jeg2"]);
      obj[3] = function handleArchiveOrDelete() {
        const self = this;
        const apply = _handleArchiveOrDelete.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj[4] = submitting;
      obj[5] = submitting2;
      return obj;
    }
  }
  const intl7 = tmp(1236).intl;
  intl7.formatToPlainString(_require(1236).t.x2qwWL, { tierName: first });
  const intl8 = tmp(1236).intl;
  intl8.string(_require(1236).t.GMtG6p);
  let intl9 = tmp(1236).intl;
  let intl10 = intl9.string;
  let string = tmp(1236).t;
  if (undefined === subscriptionListing) {
    intl10(string.DHWKJS);
  } else {
    intl10(string.Y4KjUN);
  }
  const intl11 = tmp(1236).intl;
  getSystemLocale = intl11.string(tmp(1236).t["4H6RLl"]);
  intl9 = tmp(1236).intl;
  callback = intl9.string(tmp(1236).t.uG6b1w);
  intl10 = tmp(1236).intl;
  string = intl10.string;
  stringResult3 = string(tmp(1236).t.JoCdPC);
};