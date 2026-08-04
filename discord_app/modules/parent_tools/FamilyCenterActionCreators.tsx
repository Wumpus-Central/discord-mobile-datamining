import dispatcher from "dispatcher";
import getSettings from "getSettings";
import { FamilyCenterAction } from "items";
import ME from "ME";

let closure_6;
let error;
const require = arg1;
function maybeFetchCollectiblesForInvoices() {
  const self = this;
  const apply = _maybeFetchCollectiblesForInvoices.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeFetchCollectiblesForInvoices() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const _Set = Set;
              const set = new Set();
              const item = set.forEach((invoice_items) => {
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
              const obj1 = { value: null, done: false };
              obj1[0] = Promise.all(Array.from(set).map((skuId) => set(table[4]).maybeFetchCollectiblesProduct(skuId)));
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _maybeFetchCollectiblesForInvoices = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function maybeFetchCollectiblesForGifts() {
  const self = this;
  const apply = _maybeFetchCollectiblesForGifts.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeFetchCollectiblesForGifts() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const _Set = Set;
              const set = new Set();
              const item = set.forEach((sku_id) => {
                if (null != sku_id.sku_id) {
                  set.add(sku_id.sku_id);
                }
              });
              const _Array = Array;
              c2 = 1;
              c1 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = Promise.all(Array.from(set).map((skuId) => set(table[4]).maybeFetchCollectiblesProduct(skuId)));
              return obj1;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _maybeFetchCollectiblesForGifts = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateLinkForUserId() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1) {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          dependencyMap = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_7.FAMILY_CENTER_LINKED_USERS;
              const obj2 = { linked_user_id: null, link_status: null };
              obj2[0] = callback;
              obj2[1] = closure_1;
              obj1[1] = obj2;
              obj1[2] = callback(530).rejectWithMigratedError();
              const obj7 = callback(530);
              c3 = 1;
              dependencyMap = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1).then((body) => {
                body = body.body;
                callback(table[5]).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: body });
                return body;
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          dependencyMap = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _updateLinkForUserId = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeLinkForUserId() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0) {
      if (c1 === 2) {
        c1 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c1 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c1 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c1 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = outer1_7.FAMILY_CENTER_LINKED_USERS;
              const obj2 = { linked_user_id: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              obj1[2] = callback(530).rejectWithMigratedError();
              const obj7 = callback(530);
              dependencyMap = 1;
              c1 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.del(obj1).then((body) => {
                body = body.body;
                let obj = v3(table[5]);
                obj = { type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: body, deletedUserId: closure_0 };
                obj.dispatch(obj);
                return body;
              });
              return obj3;
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _removeLinkForUserId = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getLinkCodeForCurrentUser() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const HTTP = v0(outer1_2[6]).HTTP;
            const obj1 = { url: null, rejectWithError: null };
            obj1[0] = outer1_7.FAMILY_CENTER_LINK_CODE;
            obj1[1] = v0(outer1_2[6]).rejectWithMigratedError();
            const value = HTTP.get(obj1);
            c1 = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = value.then((body) => {
              body = body.body;
              const link_code = body.link_code;
              v1(table[5]).dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: link_code, expiresAt: body.expires_at });
              return link_code;
            });
            return obj2;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        v0 = tmp;
        throw tmp5;
      }
    }
  });
  const _getLinkCodeForCurrentUser = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _shareIarWithParents() {
  const self = this;
  const tmp = callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const HTTP = v0(outer1_2[6]).HTTP;
            const obj1 = { url: null, rejectWithError: true };
            obj1[0] = outer1_7.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS;
            c1 = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.post(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          v0 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  const _shareIarWithParents = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_6, Endpoints: error } = ME);
let result = require("items").fileFinishedImporting("modules/parent_tools/FamilyCenterActionCreators.tsx");

export default {
  initialPageLoad() {
    return callback(function*() {
      if (c15 === 2) {
        c15 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
          c15 = 2;
          if (0 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c15 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let c13 = 0;
              let closure_12 = tmp4;
              let body;
              let lib;
              let dependencyMap;
              let users2;
              let age_group;
              let obj4;
              outer1_1(outer1_2[5]).dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              let tmp = outer1_0;
              tmp = outer1_2;
              const HTTP = outer1_0(outer1_2[6]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              tmp = outer1_7;
              obj1[0] = outer1_7.FAMILY_CENTER_TEEN_ACTIVITY_ME;
              tmp = outer1_2;
              const obj15 = outer1_1(outer1_2[5]);
              obj1[1] = outer1_0(outer1_2[6]).rejectWithMigratedError();
              c14 = 1;
              c15 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c15 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c15 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                body = arg1.body;
                lib = body.teen_audit_log;
                dependencyMap = body.linked_users;
                users2 = body.users;
                age_group = body.age_group;
                let teen_user_id;
                if (lib != null) {
                  teen_user_id = lib.teen_user_id;
                }
                obj4 = { teenId: null, rangeStartId: null, totals: null, actions: null, users: null, guilds: null, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, spendingLimit: null, monthlyPurchases: null, invoices: null, gifts: null };
                obj4[0] = teen_user_id;
                let range_start_id;
                if (lib != null) {
                  range_start_id = lib.range_start_id;
                }
                obj4[1] = range_start_id;
                let totals;
                if (lib != null) {
                  totals = lib.totals;
                }
                body = totals;
                if (totals == null) {
                  body = {};
                }
                obj4[2] = body;
                let actions;
                if (lib != null) {
                  actions = lib.actions;
                }
                lib = actions;
                if (actions == null) {
                  lib = [];
                }
                obj4[3] = lib;
                let users;
                if (lib != null) {
                  users = lib.users;
                }
                dependencyMap = users;
                if (users == null) {
                  dependencyMap = [];
                }
                obj4[4] = dependencyMap;
                let guilds;
                if (lib != null) {
                  guilds = lib.guilds;
                }
                users2 = guilds;
                if (guilds == null) {
                  users2 = [];
                }
                obj4[5] = users2;
                let top_user_activities;
                if (lib != null) {
                  top_user_activities = lib.top_user_activities;
                }
                age_group = top_user_activities;
                if (top_user_activities == null) {
                  age_group = [];
                }
                obj4[6] = age_group;
                let top_guild_activities;
                if (lib != null) {
                  top_guild_activities = lib.top_guild_activities;
                }
                obj4 = top_guild_activities;
                if (top_guild_activities == null) {
                  obj4 = [];
                }
                obj4[7] = obj4;
                let amount;
                if (lib != null) {
                  const total_spend = lib.total_spend;
                  if (total_spend != null) {
                    amount = total_spend.amount;
                  }
                }
                let c6 = amount;
                if (amount == null) {
                  c6 = null;
                }
                obj4[8] = c6;
                let currency;
                if (lib != null) {
                  const total_spend2 = lib.total_spend;
                  if (total_spend2 != null) {
                    currency = total_spend2.currency;
                  }
                }
                let c7 = currency;
                if (currency == null) {
                  c7 = null;
                }
                obj4[9] = c7;
                const spending_limit = body.spending_limit;
                let callback = spending_limit;
                if (spending_limit == null) {
                  callback = null;
                }
                obj4[10] = callback;
                const monthly_purchases = body.monthly_purchases;
                let c9 = monthly_purchases;
                if (monthly_purchases == null) {
                  c9 = null;
                }
                obj4[11] = c9;
                let invoices;
                if (lib != null) {
                  invoices = lib.invoices;
                }
                let callback2 = invoices;
                if (invoices == null) {
                  callback2 = [];
                }
                obj4[12] = callback2;
                let gifts;
                if (lib != null) {
                  gifts = lib.gifts;
                }
                let closure_11 = gifts;
                if (gifts == null) {
                  closure_11 = [];
                }
                obj4[13] = closure_11;
                let tmp46 = null != obj4.invoices;
                if (tmp46) {
                  tmp46 = obj4.invoices.length > 0;
                }
                if (tmp46) {
                  c14 = 2;
                  c15 = 1;
                  let obj5 = { value: null, done: false };
                  obj5[0] = callback(obj4.invoices);
                  return obj5;
                }
              }
            } else {
              if (2 === tmp4) {
                if (arg0 === 1) {
                  c15 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c15 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = arg1;
                  return obj6;
                }
              } else if (arg0 === 1) {
                c15 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c15 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              obj3 = lib(709);
              const obj7 = { type: "FAMILY_CENTER_INITIAL_LOAD", familyCenterTeenActivity: null, linkedUsers: null, users: null, ageGroup: null };
              obj7[1] = obj4;
              obj7[2] = dependencyMap;
              obj7[3] = users2;
              obj7[4] = age_group;
              obj3.dispatch(obj7);
              let tmp66 = null != body.restricted_schedule;
              if (tmp66) {
                tmp66 = null != obj4.teenId;
              }
              if (tmp66) {
                obj5 = lib(709);
                const obj8 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: null, restrictedSchedule: null };
                obj8[1] = obj4.teenId;
                obj8[2] = body.restricted_schedule;
                obj5.dispatch(obj8);
              }
              c15 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = obj4;
              return obj9;
            }
            let tmp52 = null != obj4.gifts;
            if (tmp52) {
              tmp52 = obj4.gifts.length > 0;
            }
            if (tmp52) {
              c14 = 3;
              c15 = 1;
              const obj10 = { value: null, done: false };
              obj10[0] = callback2(obj4.gifts);
              return obj10;
            }
          }
        } catch (tmp85) {
          c15 = tmp;
          throw tmp85;
        }
      }
    })();
  },
  fetchLinkedUsers() {
    return callback(function*() {
      let obj4 = tmp2;
      let body = tmp5;
      const HTTP = outer1_0(530).HTTP;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_7.FAMILY_CENTER_LINKED_USERS;
      obj1[1] = outer1_0(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      body = arg1.body;
      obj4 = { linkedUsers: null, users: null };
      obj4[0] = body.linked_users;
      obj4[1] = body.users;
      const obj5 = { type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" };
      const merged = Object.assign(obj4);
      obj4(709).dispatch(obj5);
      return obj4;
    })();
  },
  getConnectionPrerequisites(closure_0, closure_1) {
    return callback(function*() {
      const HTTP = v0(outer1_2[6]).HTTP;
      const obj1 = { url: null, query: null, rejectWithError: true };
      obj1[0] = outer1_7.FAMILY_CENTER_CONNECTION_PREREQUISITES;
      const obj2 = { teen_id: null, link_code: null };
      obj2[0] = v0;
      obj2[1] = c1;
      obj1[1] = obj2;
      yield HTTP.get(obj1);
      return arg1.body;
    })();
  },
  setPendingConnection(teenId, linkCode) {
    let obj = importDefault(709);
    obj = { type: "FAMILY_CENTER_PENDING_CONNECTION_SET", teenId, linkCode };
    obj.dispatch(obj);
  },
  clearPendingConnection() {
    importDefault(709).dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_CLEAR" });
  },
  requestLink(userId, linkCode) {
    let closure_0 = userId;
    let closure_1 = linkCode;
    return callback(function*() {
      let obj5 = tmp2;
      let body = tmp5;
      const HTTP = outer1_0(530).HTTP;
      const obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = outer1_7.FAMILY_CENTER_LINKED_USERS;
      const obj2 = { recipient_id: null, code: null };
      obj2[0] = outer1_0;
      obj2[1] = outer1_1;
      obj1[1] = obj2;
      obj1[2] = outer1_0(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      body = arg1.body;
      obj5 = { linkedUsers: null, users: null };
      obj5[0] = body.linked_users;
      obj5[1] = body.users;
      let obj6 = outer1_1(709);
      obj6 = { type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" };
      const merged = Object.assign(obj5);
      obj6.dispatch(obj6);
      return obj5;
    })();
  },
  fetchTeenActivity(arg0) {
    let closure_0 = arg0;
    return callback(function*() {
      if (c11 === 2) {
        c11 = 3;
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
          c11 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c11 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c11 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_9 = tmp5;
              let closure_8 = tmp2;
              let body;
              let teen_audit_log;
              let obj4;
              outer1_1(outer1_2[5]).dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              const result = outer1_7.FAMILY_CENTER_TEEN_ACTIVITY(outer1_0);
              const HTTP = outer1_0(outer1_2[6]).HTTP;
              const obj1 = { url: null, rejectWithError: null };
              obj1[0] = result;
              const obj15 = outer1_1(outer1_2[5]);
              obj1[1] = outer1_0(outer1_2[6]).rejectWithMigratedError();
              v0 = 1;
              c11 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HTTP.get(obj1);
              return obj2;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c11 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c11 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                body = arg1.body;
                teen_audit_log = body.teen_audit_log;
                obj4 = { teenId: null, rangeStartId: null, totals: null, actions: null, users: null, guilds: null, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, spendingLimit: null, monthlyPurchases: null, invoices: null, gifts: null };
                obj4[0] = teen_audit_log.teen_user_id;
                obj4[1] = teen_audit_log.range_start_id;
                obj4[2] = teen_audit_log.totals;
                obj4[3] = teen_audit_log.actions;
                obj4[4] = teen_audit_log.users;
                obj4[5] = teen_audit_log.guilds;
                const top_user_activities = teen_audit_log.top_user_activities;
                body = top_user_activities;
                if (top_user_activities == null) {
                  body = [];
                }
                obj4[6] = body;
                const top_guild_activities = teen_audit_log.top_guild_activities;
                teen_audit_log = top_guild_activities;
                if (top_guild_activities == null) {
                  teen_audit_log = [];
                }
                obj4[7] = teen_audit_log;
                let amount;
                if (teen_audit_log != null) {
                  const total_spend = teen_audit_log.total_spend;
                  if (total_spend != null) {
                    amount = total_spend.amount;
                  }
                }
                obj4 = amount;
                if (amount == null) {
                  obj4 = null;
                }
                obj4[8] = obj4;
                let currency;
                if (teen_audit_log != null) {
                  const total_spend2 = teen_audit_log.total_spend;
                  if (total_spend2 != null) {
                    currency = total_spend2.currency;
                  }
                }
                let c3 = currency;
                if (currency == null) {
                  c3 = null;
                }
                obj4[9] = c3;
                const spending_limit = body.spending_limit;
                let c4 = spending_limit;
                if (spending_limit == null) {
                  c4 = null;
                }
                obj4[10] = c4;
                const monthly_purchases = body.monthly_purchases;
                let c5 = monthly_purchases;
                if (monthly_purchases == null) {
                  c5 = null;
                }
                obj4[11] = c5;
                let invoices;
                if (teen_audit_log != null) {
                  invoices = teen_audit_log.invoices;
                }
                let closure_6 = invoices;
                if (invoices == null) {
                  closure_6 = [];
                }
                obj4[12] = closure_6;
                let gifts;
                if (teen_audit_log != null) {
                  gifts = teen_audit_log.gifts;
                }
                let closure_7 = gifts;
                if (gifts == null) {
                  closure_7 = [];
                }
                obj4[13] = closure_7;
                invoices = obj4.invoices;
                if (invoices) {
                  invoices = obj4.invoices.length > 0;
                }
                if (invoices) {
                  v0 = 2;
                  c11 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = outer1_8(outer1_2.invoices);
                  return obj5;
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c11 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = arg1;
                  return obj6;
                }
              } else if (arg0 === 1) {
                c11 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c11 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              obj2 = outer1_1(outer1_2[5]);
              const obj7 = { type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: null };
              obj7[1] = obj4;
              obj2.dispatch(obj7);
              if (null != body.restricted_schedule) {
                obj4 = outer1_1(outer1_2[5]);
                const obj8 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: null, restrictedSchedule: null };
                obj8[1] = body;
                obj8[2] = body.restricted_schedule;
                obj4.dispatch(obj8);
              }
              c11 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = outer1_2;
              return obj9;
            }
            gifts = obj4.gifts;
            if (gifts) {
              gifts = obj4.gifts.length > 0;
            }
            if (gifts) {
              v0 = 3;
              c11 = 1;
              const obj10 = { value: null, done: false };
              obj10[0] = v0(outer1_2.gifts);
              return obj10;
            }
          }
        } catch (tmp60) {
          c11 = tmp;
          throw tmp60;
        }
      }
    })();
  },
  fetchMoreTeenActivity(selectedTeenId, arg1, startId, event_id) {
    let closure_0 = selectedTeenId;
    let closure_1 = arg1;
    let closure_2 = startId;
    const callback = event_id;
    return callback(function*() {
      let closure_7 = tmp2;
      let closure_6 = tmp5;
      const HTTP = outer1_0(outer1_2[6]).HTTP;
      const obj1 = { url: null, rejectWithError: null };
      obj1[0] = outer1_7.FAMILY_CENTER_TEEN_ACTIVITY_MORE(outer1_0, outer1_1, outer1_2, outer1_3);
      obj1[1] = outer1_0(outer1_2[6]).rejectWithMigratedError();
      yield HTTP.get(obj1);
      let teen_audit_log = arg1.body.teen_audit_log;
      let obj4 = { teenId: null, rangeStartId: null, actions: null, users: null, guilds: null, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, invoices: null, gifts: null };
      obj4[0] = teen_audit_log.teen_user_id;
      obj4[1] = teen_audit_log.range_start_id;
      obj4[2] = teen_audit_log.actions;
      obj4[3] = teen_audit_log.users;
      obj4[4] = teen_audit_log.guilds;
      const top_user_activities = teen_audit_log.top_user_activities;
      teen_audit_log = top_user_activities;
      if (top_user_activities == null) {
        teen_audit_log = [];
      }
      obj4[5] = teen_audit_log;
      const top_guild_activities = teen_audit_log.top_guild_activities;
      obj4 = top_guild_activities;
      if (top_guild_activities == null) {
        obj4 = [];
      }
      obj4[6] = obj4;
      if (teen_audit_log != null) {
        const total_spend = teen_audit_log.total_spend;
        if (total_spend != null) {
          const amount = total_spend.amount;
        }
      }
      let c2 = amount;
      if (amount == null) {
        c2 = null;
      }
      obj4[7] = c2;
      if (teen_audit_log != null) {
        const total_spend2 = teen_audit_log.total_spend;
        if (total_spend2 != null) {
          const currency = total_spend2.currency;
        }
      }
      let c3 = currency;
      if (currency == null) {
        c3 = null;
      }
      obj4[8] = c3;
      if (teen_audit_log != null) {
        const invoices = teen_audit_log.invoices;
      }
      let getSettings = invoices;
      if (invoices == null) {
        getSettings = [];
      }
      obj4[9] = getSettings;
      if (teen_audit_log != null) {
        const gifts = teen_audit_log.gifts;
      }
      let closure_5 = gifts;
      if (gifts == null) {
        closure_5 = [];
      }
      obj4[10] = closure_5;
      const obj = outer1_1(outer1_2[7]);
      const obj5 = { action: null, selected_teen_id: null, action_display_type: null };
      obj5[0] = outer1_5.LoadMore;
      obj5[1] = teen_audit_log;
      obj5[2] = obj4;
      obj.track(outer1_6.FAMILY_CENTER_ACTION, obj5);
      const obj2 = outer1_1(outer1_2[5]);
      const obj6 = { type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: null };
      obj6[1] = obj4;
      obj2.dispatch(obj6);
      return teen_audit_log;
    })();
  },
  selectTab(REQUESTS) {
    let obj = importDefault(709);
    obj = { type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: REQUESTS };
    obj.dispatch(obj);
  },
  fetchTeenSettingsAndConsents(id) {
    const _require = id;
    const HTTP = _require(530).HTTP;
    let obj = { url: closure_7.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(id), rejectWithError: null };
    obj[1] = _require(530).rejectWithMigratedError();
    const value = HTTP.get(obj);
    return value.then((body) => {
      let consents;
      let settings;
      ({ settings, consents } = body.body);
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS", userId: closure_0, settings, consents };
      obj.dispatch(obj);
    });
  },
  updateTeenSettings(arg0, closure_0, arg2) {
    closure_0 = arg0;
    let closure_1 = closure_0;
    let closure_2 = arg2;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_1 = tmp2;
              let settings = tmp5;
              settings = undefined;
              const protoFieldClass = outer1_0(1356).getProtoFieldClass(outer1_0(1306).PreloadedUserSettings, outer1_1);
              settings = outer1_4.getSettings(outer1_0);
              let tmp13;
              if (settings != null) {
                tmp13 = settings[tmp37];
              }
              let tmp34Result = tmp34(1356);
              const modifiedProto = tmp34Result.createModifiedProto(tmp13, dependencyMap, protoFieldClass, tmp34(1306).PreloadedUserSettings, tmp37);
              if (null != modifiedProto) {
                const HTTP = tmp34(530).HTTP;
                const obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = outer1_7.FAMILY_CENTER_TEEN_SETTINGS(outer1_0);
                const obj2 = { settings: null };
                tmp34Result = tmp34(1342);
                obj2[0] = tmp34Result.protoToB64(tmp34(1306).PreloadedUserSettings, modifiedProto);
                obj1[1] = obj2;
                obj1[2] = tmp34(530).rejectWithMigratedError();
                dependencyMap = 1;
                c3 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.patch(obj1);
                return obj3;
              } else {
                c3 = 3;
              }
              const obj12 = outer1_0(1356);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            settings = arg1.body.settings;
            obj = outer1_1(709);
            const obj4 = { type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: null, settings: null };
            obj4[1] = settings;
            obj4[2] = settings;
            obj.dispatch(obj4);
          }
          c3 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } catch (tmp28) {
          c3 = tmp;
          throw tmp28;
        }
      }
    })();
  },
  updateTeenConsents(selectedTeenId, items1, items2) {
    const _require = selectedTeenId;
    const HTTP = _require(530).HTTP;
    obj = { url: closure_7.FAMILY_CENTER_TEEN_CONSENTS(selectedTeenId), body: obj, rejectWithError: null };
    obj = { grant: items1, revoke: items2 };
    obj[2] = _require(530).rejectWithMigratedError();
    const obj3 = _require(530);
    return HTTP.patch(obj).then((body) => {
      let obj = outer1_1(outer1_2[5]);
      obj = { type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: closure_0, consents: body.body };
      obj.dispatch(obj);
    });
  }
};
export const updateLinkForUserId = function updateLinkForUserId(arg0, ACTIVE) {
  const self = this;
  const apply = _updateLinkForUserId.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeLinkForUserId = function removeLinkForUserId(arg0) {
  const self = this;
  const apply = _removeLinkForUserId.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getLinkCodeForCurrentUser = function getLinkCodeForCurrentUser() {
  const self = this;
  const apply = _getLinkCodeForCurrentUser.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const shareIarWithParents = function shareIarWithParents() {
  const self = this;
  const apply = _shareIarWithParents.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};