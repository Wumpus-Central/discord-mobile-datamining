// === Module 7050: FamilyCenterActionCreators ===

// Module 7050 (FamilyCenterActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7049 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 7051 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c11, c14, c15, closure_12, constants, set;

let metroImportDefault;
let metroRequire;
function maybeFetchCollectiblesForInvoices() {
  return obj(...arguments);
}
let obj = function _maybeFetchCollectiblesForInvoices() {
  obj = _asyncToGenerator(async function(arg0) {
    let arr;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            const item = closure_0.forEach((invoice_items) => {
              if (null != invoice_items.invoice_items) {
                if (invoice_items.invoice_items.length > 0) {
                  const first = invoice_items.invoice_items[0];
                  if (null != first.sku_id) {
                    set.add(first.sku_id);
                  }
                }
              }
            });
            const _Array = Array;
            c2 = 1;
            c1 = 1;
            const obj4 = {
              value: all(arr.map((item) => {
                        obj = closure_1_0(closure_1_2[4]);
                        return obj.maybeFetchCollectiblesProduct(item);
                      })),
              done: false
            };
            arr = Array.from(set);
            return obj4;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c1 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
function maybeFetchCollectiblesForGifts() {
  return obj(...arguments);
}
obj = function _maybeFetchCollectiblesForGifts() {
  obj = _asyncToGenerator(async function(arg0) {
    let arr;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const _Set = Set;
            const self = this;
            const self2 = this;
            set = new Set();
            const item = closure_0.forEach((sku_id) => {
              if (null != sku_id.sku_id) {
                set.add(sku_id.sku_id);
              }
            });
            const _Array = Array;
            c2 = 1;
            c1 = 1;
            const obj4 = {
              value: all(arr.map((item) => {
                        obj = closure_1_0(closure_1_2[4]);
                        return obj.maybeFetchCollectiblesProduct(item);
                      })),
              done: false
            };
            arr = Array.from(set);
            return obj4;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c1 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateLinkForUserId() {
  obj = _asyncToGenerator(async (linked_user_id, link_status) => {
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj7;
      let patchResult;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              const HTTP = require("HTTPUtils").HTTP;
              const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: obj4, rejectWithError: obj7.rejectWithMigratedError() };
              const patch = HTTP.patch;
              obj4 = { linked_user_id, link_status };
              c3 = 1;
              c2 = 1;
              obj7 = require("HTTPUtils");
              const obj5 = {
                value: patchResult.then((body) => {
                          body = body.body;
                          obj = link_status(closure_1_2[5]);
                          obj.dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: body });
                          return body;
                        }),
                done: false
              };
              patchResult = patch(request);
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c2 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _removeLinkForUserId() {
  obj = _asyncToGenerator(async (linked_user_id) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let delResult;
      let obj4;
      let obj7;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              return { value, done: true };
            } else {
              const HTTP = require("HTTPUtils").HTTP;
              const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: obj4, rejectWithError: obj7.rejectWithMigratedError() };
              const del = HTTP.del;
              obj4 = { linked_user_id };
              c2 = 1;
              c1 = 1;
              obj7 = require("HTTPUtils");
              const obj5 = {
                value: delResult.then((body) => {
                          body = body.body;
                          obj = closure_2_1(closure_2_2[5]);
                          const obj2 = { type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: body, deletedUserId };
                          obj.dispatch(obj2);
                          return body;
                        }),
                done: false
              };
              delResult = del(request);
              return obj5;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c1 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c1 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _getLinkCodeForCurrentUser() {
  obj = _asyncToGenerator(async () => {
    let obj6;
    let value;
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = require("HTTPUtils").HTTP;
            const obj4 = { url: constants.FAMILY_CENTER_LINK_CODE, rejectWithError: obj6.rejectWithMigratedError() };
            const get = HTTP.get;
            obj6 = require("HTTPUtils");
            value = get(obj4);
            c1 = 1;
            c0 = 1;
            const obj5 = {
              value: value.then((body) => {
                        body = body.body;
                        const link_code = body.link_code;
                        const expires_at = body.expires_at;
                        obj = closure_1_1(closure_1_2[5]);
                        obj.dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: link_code, expiresAt: expires_at });
                        return link_code;
                      }),
              done: false
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp4) {
        c0 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
obj = function _shareIarWithParents() {
  obj = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = require("HTTPUtils").HTTP;
            const obj4 = { url: constants.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: true };
            c1 = 1;
            c0 = 1;
            const obj5 = { value: HTTP.post(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
const FamilyCenterAction = FamilyCenterConstants.FamilyCenterAction;
({ AnalyticEvents: metroRequire, Endpoints: metroImportDefault } = Constants);
obj = {
  initialPageLoad() {
    return (async () => {
      let actions;
      let gifts;
      let guilds;
      let invoices;
      let monthlyPurchases;
      let obj17;
      let range_start_id;
      let spendingLimit;
      let topGuildActivities;
      let topUserActivities;
      let totalSpendAmount;
      let totalSpendCurrency;
      let totals;
      if (c15 === 2) {
        c15 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          let teen_audit_log;
          let linked_users;
          let users;
          let age_group;
          let obj9;
          c15 = 2;
          if (0 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let c13 = 0;
              closure_12 = tmp3;
              body = undefined;
              teen_audit_log = undefined;
              linked_users = undefined;
              users = undefined;
              age_group = undefined;
              obj9 = undefined;
              const obj15 = DispatcherDefault;
              obj15.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              const HTTP = require("HTTPUtils").HTTP;
              const obj5 = { url: constants.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: obj17.rejectWithMigratedError() };
              const get = HTTP.get;
              obj17 = require("HTTPUtils");
              c14 = 1;
              c15 = 1;
              const obj7 = { value: get(obj5), done: false };
              return obj7;
            }
          } else {
            if (1 === c14) {
              if (arg0 === 1) {
                c15 = 3;
                throw value;
              } else if (arg0 === 2) {
                c15 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                body = value.body;
                teen_audit_log = body.teen_audit_log;
                linked_users = body.linked_users;
                users = body.users;
                age_group = body.age_group;
                let teen_user_id;
                if (teen_audit_log != null) {
                  teen_user_id = teen_audit_log.teen_user_id;
                }
                obj9 = { teenId: teen_user_id, rangeStartId: range_start_id, totals, actions, users, guilds, topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency, spendingLimit, monthlyPurchases, invoices, gifts };
                range_start_id = undefined;
                if (teen_audit_log != null) {
                  range_start_id = teen_audit_log.range_start_id;
                }
                totals = undefined;
                if (teen_audit_log != null) {
                  totals = teen_audit_log.totals;
                }
                if (totals == null) {
                  totals = {};
                }
                actions = undefined;
                if (teen_audit_log != null) {
                  actions = teen_audit_log.actions;
                }
                if (actions == null) {
                  actions = [];
                }
                users = undefined;
                if (teen_audit_log != null) {
                  users = teen_audit_log.users;
                }
                if (users == null) {
                  users = [];
                }
                guilds = undefined;
                if (teen_audit_log != null) {
                  guilds = teen_audit_log.guilds;
                }
                if (guilds == null) {
                  guilds = [];
                }
                let top_user_activities;
                if (teen_audit_log != null) {
                  top_user_activities = teen_audit_log.top_user_activities;
                }
                topUserActivities = top_user_activities;
                if (top_user_activities == null) {
                  topUserActivities = [];
                }
                let top_guild_activities;
                if (teen_audit_log != null) {
                  top_guild_activities = teen_audit_log.top_guild_activities;
                }
                topGuildActivities = top_guild_activities;
                if (top_guild_activities == null) {
                  topGuildActivities = [];
                }
                let amount;
                if (teen_audit_log != null) {
                  const total_spend = teen_audit_log.total_spend;
                  if (total_spend != null) {
                    amount = total_spend.amount;
                  }
                }
                totalSpendAmount = amount;
                if (amount == null) {
                  totalSpendAmount = null;
                }
                let currency;
                if (teen_audit_log != null) {
                  const total_spend2 = teen_audit_log.total_spend;
                  if (total_spend2 != null) {
                    currency = total_spend2.currency;
                  }
                }
                totalSpendCurrency = currency;
                if (currency == null) {
                  totalSpendCurrency = null;
                }
                const spending_limit = body.spending_limit;
                spendingLimit = spending_limit;
                if (spending_limit == null) {
                  spendingLimit = null;
                }
                const monthly_purchases = body.monthly_purchases;
                monthlyPurchases = monthly_purchases;
                if (monthly_purchases == null) {
                  monthlyPurchases = null;
                }
                invoices = undefined;
                if (teen_audit_log != null) {
                  invoices = teen_audit_log.invoices;
                }
                if (invoices == null) {
                  invoices = [];
                }
                gifts = undefined;
                if (teen_audit_log != null) {
                  gifts = teen_audit_log.gifts;
                }
                if (gifts == null) {
                  gifts = [];
                }
                const tmp45 = null != obj9.invoices && obj9.invoices.length > 0;
                if (tmp45) {
                  c14 = 2;
                  c15 = 1;
                  const obj10 = { value: closure_141_8(obj9.invoices), done: false };
                  return obj10;
                }
              }
            } else {
              if (2 === c14) {
                if (arg0 === 1) {
                  c15 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c15 = 3;
                  const obj11 = { value, done: true };
                  return obj11;
                }
              } else if (arg0 === 1) {
                c15 = 3;
                throw value;
              } else if (arg0 === 2) {
                c15 = 3;
                obj = { value, done: true };
                return obj;
              }
              const obj12 = { type: "FAMILY_CENTER_INITIAL_LOAD", familyCenterTeenActivity: obj9, linkedUsers: linked_users, users, ageGroup: age_group };
              const obj4 = closure_141_1(closure_141_2[5]);
              obj4.dispatch(obj12);
              const tmp65 = null != body.restricted_schedule && null != obj9.teenId;
              if (tmp65) {
                const obj13 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: obj9.teenId, restrictedSchedule: body.restricted_schedule };
                const obj6 = closure_141_1(closure_141_2[5]);
                obj6.dispatch(obj13);
              }
              c15 = 3;
              const obj14 = { value: obj9, done: true };
              return obj14;
            }
            const tmp51 = null != obj9.gifts && obj9.gifts.length > 0;
            if (tmp51) {
              c14 = 3;
              c15 = 1;
              const obj16 = { value: closure_141_10(obj9.gifts), done: false };
              return obj16;
            }
          }
        } catch (tmp84) {
          c15 = 3;
          throw tmp84;
        }
      }
    })();
  },
  fetchLinkedUsers() {
    return (async () => {
      let c2;
      let c3;
      let closure_0;
      let closure_1;
      let obj9;
      const HTTP = require("HTTPUtils").HTTP;
      const obj4 = { url: constants.FAMILY_CENTER_LINKED_USERS, rejectWithError: obj9.rejectWithMigratedError() };
      const get = HTTP.get;
      obj9 = require("HTTPUtils");
      await get(obj4);
      const body = value.body;
      const obj7 = { linkedUsers: body.linked_users, users: body.users };
      const obj8 = { type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" };
      const dispatch = closure_129_1(closure_129_2[5]).dispatch;
      const tmp15 = closure_129_1(closure_129_2[5]);
      const merged = Object.assign(obj7);
      dispatch(obj8);
      return obj7;
    })();
  },
  getConnectionPrerequisites(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let obj4;
      const HTTP = teen_id(dependencyMap[6]).HTTP;
      const request = { url: constants.FAMILY_CENTER_CONNECTION_PREREQUISITES, query: obj4, rejectWithError: true };
      obj4 = { teen_id, link_code };
      await HTTP.get(request);
      return value.body;
    })();
  },
  setPendingConnection(match, match2) {
    obj = DispatcherDefault;
    const obj2 = { type: "FAMILY_CENTER_PENDING_CONNECTION_SET", teenId: match, linkCode: match2 };
    obj.dispatch(obj2);
  },
  clearPendingConnection() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_CLEAR" });
  },
  requestLink(userId, linkCode) {
    let closure_0 = userId;
    let closure_1 = linkCode;
    return (async () => {
      let c3;
      let obj10;
      let obj4;
      const code = tmp;
      const recipient_id = tmp4;
      const HTTP = recipient_id(c2[6]).HTTP;
      const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: obj4, rejectWithError: obj10.rejectWithMigratedError() };
      obj4 = { recipient_id, code };
      const post = HTTP.post;
      obj10 = recipient_id(c2[6]);
      await post(request);
      const body = value.body;
      const obj7 = { linkedUsers: body.linked_users, users: body.users };
      const obj8 = { type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" };
      const dispatch = code(c2[5]).dispatch;
      const tmp15 = code(c2[5]);
      const merged = Object.assign(obj7);
      dispatch(obj8);
      return obj7;
    })();
  },
  fetchTeenActivity(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let closure_8;
      let gifts;
      let invoices;
      let monthlyPurchases;
      let obj17;
      let spendingLimit;
      let topGuildActivities;
      let topUserActivities;
      let totalSpendAmount;
      let totalSpendCurrency;
      let v3;
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          let teen_audit_log;
          let obj9;
          c11 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_9 = tmp4;
              body = undefined;
              teen_audit_log = undefined;
              obj9 = undefined;
              const obj15 = topGuildActivities(totalSpendAmount[5]);
              obj15.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              const result = gifts.FAMILY_CENTER_TEEN_ACTIVITY(topUserActivities);
              const HTTP = topUserActivities(totalSpendAmount[6]).HTTP;
              const obj6 = { url: result, rejectWithError: obj17.rejectWithMigratedError() };
              const get = HTTP.get;
              obj17 = topUserActivities(totalSpendAmount[6]);
              v3 = 1;
              c11 = 1;
              const obj7 = { value: get(obj6), done: false };
              return obj7;
            }
          } else {
            if (1 === v3) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c11 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                body = value.body;
                teen_audit_log = body.teen_audit_log;
                obj9 = { teenId: teen_audit_log.teen_user_id, rangeStartId: teen_audit_log.range_start_id, totals: teen_audit_log.totals, actions: teen_audit_log.actions, users: teen_audit_log.users, guilds: teen_audit_log.guilds, topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency, spendingLimit, monthlyPurchases, invoices, gifts };
                const top_user_activities = teen_audit_log.top_user_activities;
                topUserActivities = top_user_activities;
                if (top_user_activities == null) {
                  topUserActivities = [];
                }
                const top_guild_activities = teen_audit_log.top_guild_activities;
                topGuildActivities = top_guild_activities;
                if (top_guild_activities == null) {
                  topGuildActivities = [];
                }
                let amount;
                if (teen_audit_log != null) {
                  const total_spend = teen_audit_log.total_spend;
                  if (total_spend != null) {
                    amount = total_spend.amount;
                  }
                }
                totalSpendAmount = amount;
                if (amount == null) {
                  totalSpendAmount = null;
                }
                let currency;
                if (teen_audit_log != null) {
                  const total_spend2 = teen_audit_log.total_spend;
                  if (total_spend2 != null) {
                    currency = total_spend2.currency;
                  }
                }
                totalSpendCurrency = currency;
                if (currency == null) {
                  totalSpendCurrency = null;
                }
                const spending_limit = body.spending_limit;
                spendingLimit = spending_limit;
                if (spending_limit == null) {
                  spendingLimit = null;
                }
                const monthly_purchases = body.monthly_purchases;
                monthlyPurchases = monthly_purchases;
                if (monthly_purchases == null) {
                  monthlyPurchases = null;
                }
                let invoices1;
                if (teen_audit_log != null) {
                  invoices1 = teen_audit_log.invoices;
                }
                invoices = invoices1;
                if (invoices1 == null) {
                  invoices = [];
                }
                let gifts1;
                if (teen_audit_log != null) {
                  gifts1 = teen_audit_log.gifts;
                }
                gifts = gifts1;
                if (gifts1 == null) {
                  gifts = [];
                }
                invoices = obj9.invoices && obj9.invoices.length > 0;
                if (invoices) {
                  v3 = 2;
                  c11 = 1;
                  const obj10 = { value: tmp(obj9.invoices), done: false };
                  return obj10;
                }
              }
            } else {
              if (2 === v3) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c11 = 3;
                  const obj11 = { value, done: true };
                  return obj11;
                }
              } else if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c11 = 3;
                obj = { value, done: true };
                return obj;
              }
              const obj12 = { type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: obj9 };
              const obj3 = topGuildActivities(totalSpendAmount[5]);
              obj3.dispatch(obj12);
              if (null != body.restricted_schedule) {
                const obj13 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: closure_137_0, restrictedSchedule: body.restricted_schedule };
                const obj5 = topGuildActivities(totalSpendAmount[5]);
                obj5.dispatch(obj13);
              }
              c11 = 3;
              const obj14 = { value: obj9, done: true };
              return obj14;
            }
            gifts = obj9.gifts && obj9.gifts.length > 0;
            if (gifts) {
              v3 = 3;
              c11 = 1;
              const obj16 = { value: v3(obj9.gifts), done: false };
              return obj16;
            }
          }
        } catch (tmp59) {
          c11 = 3;
          throw tmp59;
        }
      }
    })();
  },
  fetchMoreTeenActivity(selectedTeenId, arg1, startId, event_id) {
    let closure_0 = selectedTeenId;
    let closure_1 = arg1;
    let closure_2 = startId;
    _asyncToGenerator = event_id;
    return (async () => {
      let amount;
      let c8;
      let c9;
      let closure_7;
      let currency;
      let gifts;
      let invoices;
      let obj12;
      let topGuildActivities;
      let topUserActivities;
      let totalSpendAmount;
      let totalSpendCurrency;
      constants = tmp4;
      const HTTP = topUserActivities(totalSpendAmount[6]).HTTP;
      const obj5 = { url: tmp.FAMILY_CENTER_TEEN_ACTIVITY_MORE(topUserActivities, topGuildActivities, startId, event_id), rejectWithError: obj12.rejectWithMigratedError() };
      const get = HTTP.get;
      obj12 = topUserActivities(totalSpendAmount[6]);
      await get(obj5);
      const teen_audit_log = value.body.teen_audit_log;
      const obj8 = { teenId: teen_audit_log.teen_user_id, rangeStartId: teen_audit_log.range_start_id, actions: teen_audit_log.actions, users: teen_audit_log.users, guilds: teen_audit_log.guilds, topUserActivities, topGuildActivities, totalSpendAmount, totalSpendCurrency, invoices, gifts };
      const top_user_activities = teen_audit_log.top_user_activities;
      topUserActivities = top_user_activities;
      if (top_user_activities == null) {
        topUserActivities = [];
      }
      const top_guild_activities = teen_audit_log.top_guild_activities;
      topGuildActivities = top_guild_activities;
      if (top_guild_activities == null) {
        topGuildActivities = [];
      }
      if (teen_audit_log != null) {
        const total_spend = teen_audit_log.total_spend;
        if (total_spend != null) {
          amount = total_spend.amount;
        }
      }
      totalSpendAmount = amount;
      if (amount == null) {
        totalSpendAmount = null;
      }
      if (teen_audit_log != null) {
        const total_spend2 = teen_audit_log.total_spend;
        if (total_spend2 != null) {
          currency = total_spend2.currency;
        }
      }
      totalSpendCurrency = currency;
      if (currency == null) {
        totalSpendCurrency = null;
      }
      if (teen_audit_log != null) {
        invoices = teen_audit_log.invoices;
      }
      if (invoices == null) {
        invoices = [];
      }
      if (teen_audit_log != null) {
        gifts = teen_audit_log.gifts;
      }
      if (gifts == null) {
        gifts = [];
      }
      const obj9 = { action: gifts.LoadMore, selected_teen_id: closure_135_0, action_display_type: closure_135_1 };
      obj = topGuildActivities(totalSpendAmount[7]);
      obj.track(constants.FAMILY_CENTER_ACTION, obj9);
      const obj10 = { type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: obj8 };
      const obj3 = topGuildActivities(totalSpendAmount[5]);
      obj3.dispatch(obj10);
      return teen_audit_log;
    })();
  },
  selectTab(REQUESTS) {
    obj = DispatcherDefault;
    const obj2 = { type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: REQUESTS };
    obj.dispatch(obj2);
  },
  fetchTeenSettingsAndConsents(id) {
    let obj2;
    let userId;
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    obj = { url: closure_7.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(id), rejectWithError: obj2.rejectWithMigratedError() };
    const get = HTTP.get;
    obj2 = require("HTTPUtils");
    const value = get(obj);
    return value.then((body) => {
      let consents;
      let settings;
      ({ settings, consents } = body.body);
      obj = DispatcherDefault;
      const obj2 = { type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS", userId, settings, consents };
      obj.dispatch(obj2);
    });
  },
  updateTeenSettings(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async () => {
      let obj4;
      let tmp31Result3;
      let tmp31Result4;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let settings;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              settings = undefined;
              const obj12 = tmp4(c2[8]);
              const protoFieldClass = obj12.getProtoFieldClass(tmp4(c2[9]).PreloadedUserSettings, tmp);
              settings = settings.getSettings(tmp4);
              let tmp12;
              if (settings != null) {
                tmp12 = settings[tmp];
              }
              const tmp31Result = tmp4(c2[8]);
              const modifiedProto = tmp31Result.createModifiedProto(tmp12, closure_2, protoFieldClass, tmp4(c2[9]).PreloadedUserSettings, tmp);
              if (null != modifiedProto) {
                const HTTP = tmp4(c2[6]).HTTP;
                const request = { url: closure_1_7.FAMILY_CENTER_TEEN_SETTINGS(tmp4), body: obj4, rejectWithError: tmp31Result4.rejectWithMigratedError() };
                const patch = HTTP.patch;
                obj4 = { settings: tmp31Result3.protoToB64(tmp4(c2[9]).PreloadedUserSettings, modifiedProto) };
                tmp31Result3 = tmp4(c2[10]);
                tmp31Result4 = tmp4(c2[6]);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: patch(request), done: false };
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            settings = value.body.settings;
            const obj7 = { type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: closure_129_0, settings };
            obj = tmp(c2[5]);
            obj.dispatch(obj7);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp27) {
          c3 = 3;
          throw tmp27;
        }
      }
    })();
  },
  updateTeenConsents(selectedTeenId, items1, items2) {
    let obj3;
    let userId;
    _require = selectedTeenId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_7.FAMILY_CENTER_TEEN_CONSENTS(selectedTeenId), body: obj, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { grant: items1, revoke: items2 };
    obj3 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then((body) => {
      body = body.body;
      obj = DispatcherDefault;
      const obj2 = { type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId, consents: body };
      obj.dispatch(obj2);
    });
  }
};
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActionCreators.tsx");

export default obj;
export const updateLinkForUserId = function updateLinkForUserId() {
  return obj(...arguments);
};
export const removeLinkForUserId = function removeLinkForUserId() {
  return obj(...arguments);
};
export const getLinkCodeForCurrentUser = function getLinkCodeForCurrentUser() {
  return obj(...arguments);
};
export const shareIarWithParents = function shareIarWithParents() {
  return obj(...arguments);
};