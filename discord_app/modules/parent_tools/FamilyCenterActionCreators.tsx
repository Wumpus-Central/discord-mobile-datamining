// discord_app/modules/parent_tools/FamilyCenterActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import getSettings from "FamilyCenterControlledSettingsStore.tsx";
import { FamilyCenterAction } from "FamilyCenterConstants.tsx";
import ME from "../../Constants.tsx";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

const require = fn;
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
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const item = set.forEach((item, index) => {
                if (null != item.invoice_items) {
                  if (item.invoice_items.length > 0) {
                    const first = item.invoice_items[0];
                    if (null != first.sku_id) {
                      set.add(first.sku_id);
                    }
                  }
                }
              });
              const _Array = Array;
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(Array.from(set).map((item, index) => set(table[4]).maybeFetchCollectiblesProduct(item)));
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  closure_9 = tmp;
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
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const item = set.forEach((item, index) => {
                if (null != item.sku_id) {
                  set.add(item.sku_id);
                }
              });
              const _Array = Array;
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(Array.from(set).map((item, index) => set(table[4]).maybeFetchCollectiblesProduct(item)));
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  closure_11 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = closure_1_7.FAMILY_CENTER_LINKED_USERS;
              const obj2 = { linked_user_id: null, link_status: null };
              obj2[0] = callback;
              obj2[1] = closure_1;
              obj1[1] = obj2;
              obj1[2] = callback(530).rejectWithMigratedError();
              const obj7 = callback(530);
              c3 = 1;
              dependencyMap = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1).then((result) => {
                const body = result.body;
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          dependencyMap = tmp;
          throw tmp5;
        }
      }
    })();
  });
  closure_12 = tmp;
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
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              obj1 = { url: null, body: null, rejectWithError: null };
              obj1[0] = closure_1_7.FAMILY_CENTER_LINKED_USERS;
              const obj2 = { linked_user_id: null };
              obj2[0] = callback;
              obj1[1] = obj2;
              obj1[2] = callback(530).rejectWithMigratedError();
              const obj7 = callback(530);
              dependencyMap = 1;
              c1 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.del(obj1).then((result) => {
                const body = result.body;
                v3(table[5]);
                const obj = { type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: body, deletedUserId: closure_0 };
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
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          c1 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  closure_13 = tmp;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const HTTP = v0(closure_1_2[6]).HTTP;
            obj1 = { url: null, rejectWithError: null };
            obj1[0] = closure_1_7.FAMILY_CENTER_LINK_CODE;
            obj1[1] = v0(closure_1_2[6]).rejectWithMigratedError();
            const value = HTTP.get(obj1);
            c1 = 1;
            v0 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = value.then((result) => {
              const body = result.body;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp5) {
        v0 = tmp;
        throw tmp5;
      }
    }
  });
  closure_14 = tmp;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            const HTTP = v0(closure_1_2[6]).HTTP;
            obj1 = { url: null, rejectWithError: true };
            obj1[0] = closure_1_7.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp8) {
        v0 = tmp;
        throw tmp8;
      }
    }
  });
  closure_15 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_6, Endpoints: error } = ME);
let result = require("obj132").fileFinishedImporting("modules/parent_tools/FamilyCenterActionCreators.tsx");

export default {
  initialPageLoad() {
    return callback(function*() {
      if (c15 === 2) {
        c15 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c15 = 2;
          if (0 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw body;
            } else if (arg0 === 2) {
              c15 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              c13 = 0;
              closure_12 = tmp4;
              body = undefined;
              let lib;
              dependencyMap = undefined;
              let users2;
              let age_group;
              let obj4;
              closure_1_1(closure_1_2[5]).dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              const HTTP = closure_1_0(closure_1_2[6]).HTTP;
              obj1 = { url: null, rejectWithError: null };
              obj1[0] = closure_1_7.FAMILY_CENTER_TEEN_ACTIVITY_ME;
              const obj15 = closure_1_1(closure_1_2[5]);
              obj1[1] = closure_1_0(closure_1_2[6]).rejectWithMigratedError();
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
                throw body;
              } else if (arg0 === 2) {
                c15 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = body;
                return obj3;
              } else {
                body = body.body;
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
                c6 = amount;
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
                c7 = currency;
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
                c9 = monthly_purchases;
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
                closure_11 = gifts;
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
                  throw body;
                } else if (arg0 === 2) {
                  c15 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = body;
                  return obj6;
                }
              } else if (arg0 === 1) {
                c15 = 3;
                throw body;
              } else if (arg0 === 2) {
                c15 = 3;
                obj = { value: null, done: true };
                obj[0] = body;
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
      let body = tmp5;
      const HTTP = closure_1_0(530).HTTP;
      obj1 = { url: null, rejectWithError: null };
      obj1[0] = closure_1_7.FAMILY_CENTER_LINKED_USERS;
      obj1[1] = closure_1_0(530).rejectWithMigratedError();
      yield HTTP.get(obj1);
      body = body.body;
      const obj4 = { linkedUsers: null, users: null };
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
      const HTTP = v0(closure_1_2[6]).HTTP;
      obj1 = { url: null, query: null, rejectWithError: true };
      obj1[0] = closure_1_7.FAMILY_CENTER_CONNECTION_PREREQUISITES;
      const obj2 = { teen_id: null, link_code: null };
      obj2[0] = v0;
      obj2[1] = c1;
      obj1[1] = obj2;
      yield HTTP.get(obj1);
      return body.body;
    })();
  },
  setPendingConnection(match, match2) {
    const obj = { type: "FAMILY_CENTER_PENDING_CONNECTION_SET", teenId: match, linkCode: match2 };
    obj.dispatch(obj);
  },
  clearPendingConnection() {
    dispatcherDefault.dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_CLEAR" });
  },
  requestLink(userId, linkCode) {
    closure_0 = userId;
    closure_1 = linkCode;
    return callback(function*() {
      let body = tmp5;
      const HTTP = userId(530).HTTP;
      obj1 = { url: null, body: null, rejectWithError: null };
      obj1[0] = closure_1_7.FAMILY_CENTER_LINKED_USERS;
      const obj2 = { recipient_id: null, code: null };
      obj2[0] = userId;
      obj2[1] = linkCode;
      obj1[1] = obj2;
      obj1[2] = userId(530).rejectWithMigratedError();
      yield HTTP.post(obj1);
      body = body.body;
      const obj5 = { linkedUsers: null, users: null };
      obj5[0] = body.linked_users;
      obj5[1] = body.users;
      linkCode(709);
      const obj6 = { type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" };
      const merged = Object.assign(obj5);
      obj6.dispatch(obj6);
      return obj5;
    })();
  },
  fetchTeenActivity(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      if (c11 === 2) {
        c11 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c11 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c11 = 3;
              throw body;
            } else if (arg0 === 2) {
              c11 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_9 = tmp5;
              closure_8 = tmp2;
              body = undefined;
              let teen_audit_log;
              let obj4;
              closure_1_1(closure_1_2[5]).dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              const result = closure_1_7.FAMILY_CENTER_TEEN_ACTIVITY(closure_1_0);
              const HTTP = closure_1_0(closure_1_2[6]).HTTP;
              obj1 = { url: null, rejectWithError: null };
              obj1[0] = result;
              const obj15 = closure_1_1(closure_1_2[5]);
              obj1[1] = closure_1_0(closure_1_2[6]).rejectWithMigratedError();
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
                throw body;
              } else if (arg0 === 2) {
                c11 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = body;
                return obj3;
              } else {
                body = body.body;
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
                c3 = currency;
                if (currency == null) {
                  c3 = null;
                }
                obj4[9] = c3;
                const spending_limit = body.spending_limit;
                c4 = spending_limit;
                if (spending_limit == null) {
                  c4 = null;
                }
                obj4[10] = c4;
                const monthly_purchases = body.monthly_purchases;
                c5 = monthly_purchases;
                if (monthly_purchases == null) {
                  c5 = null;
                }
                obj4[11] = c5;
                let invoices;
                if (teen_audit_log != null) {
                  invoices = teen_audit_log.invoices;
                }
                closure_6 = invoices;
                if (invoices == null) {
                  closure_6 = [];
                }
                obj4[12] = closure_6;
                let gifts;
                if (teen_audit_log != null) {
                  gifts = teen_audit_log.gifts;
                }
                closure_7 = gifts;
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
                  obj5[0] = closure_1_8(closure_1_2.invoices);
                  return obj5;
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw body;
                } else if (arg0 === 2) {
                  c11 = 3;
                  const obj6 = { value: null, done: true };
                  obj6[0] = body;
                  return obj6;
                }
              } else if (arg0 === 1) {
                c11 = 3;
                throw body;
              } else if (arg0 === 2) {
                c11 = 3;
                obj = { value: null, done: true };
                obj[0] = body;
                return obj;
              }
              obj2 = closure_1_1(closure_1_2[5]);
              const obj7 = { type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: null };
              obj7[1] = obj4;
              obj2.dispatch(obj7);
              if (null != body.restricted_schedule) {
                obj4 = closure_1_1(closure_1_2[5]);
                const obj8 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: null, restrictedSchedule: null };
                obj8[1] = body;
                obj8[2] = body.restricted_schedule;
                obj4.dispatch(obj8);
              }
              c11 = 3;
              const obj9 = { value: null, done: true };
              obj9[0] = closure_1_2;
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
              obj10[0] = v0(closure_1_2.gifts);
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
    closure_0 = selectedTeenId;
    closure_1 = arg1;
    closure_2 = startId;
    const callback = event_id;
    return callback(function*() {
      closure_7 = tmp2;
      closure_6 = tmp5;
      const HTTP = selectedTeenId(startId[6]).HTTP;
      obj1 = { url: null, rejectWithError: null };
      obj1[0] = closure_1_7.FAMILY_CENTER_TEEN_ACTIVITY_MORE(selectedTeenId, closure_1_1, startId, event_id);
      obj1[1] = selectedTeenId(startId[6]).rejectWithMigratedError();
      yield HTTP.get(obj1);
      let teen_audit_log = body.body.teen_audit_log;
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
      c2 = amount;
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
      c3 = currency;
      if (currency == null) {
        c3 = null;
      }
      obj4[8] = c3;
      if (teen_audit_log != null) {
        const invoices = teen_audit_log.invoices;
      }
      closure_4 = invoices;
      if (invoices == null) {
        closure_4 = [];
      }
      obj4[9] = closure_4;
      if (teen_audit_log != null) {
        const gifts = teen_audit_log.gifts;
      }
      closure_5 = gifts;
      if (gifts == null) {
        closure_5 = [];
      }
      obj4[10] = closure_5;
      const obj = closure_1_1(startId[7]);
      const obj5 = { action: null, selected_teen_id: null, action_display_type: null };
      obj5[0] = closure_1_5.LoadMore;
      obj5[1] = teen_audit_log;
      obj5[2] = obj4;
      obj.track(closure_1_6.FAMILY_CENTER_ACTION, obj5);
      const obj2 = closure_1_1(startId[5]);
      const obj6 = { type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: null };
      obj6[1] = obj4;
      obj2.dispatch(obj6);
      return teen_audit_log;
    })();
  },
  selectTab(REQUESTS) {
    const obj = { type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: REQUESTS };
    obj.dispatch(obj);
  },
  fetchTeenSettingsAndConsents(id) {
    const _require = id;
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    let obj = { url: closure_7.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(id), rejectWithError: require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((result) => {
      ({ settings, consents } = result.body);
      const obj = { type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS", userId: closure_0, settings, consents };
      obj.dispatch(obj);
    });
  },
  updateTeenSettings(arg0, closure_0, arg2) {
    closure_0 = arg0;
    closure_1 = closure_0;
    closure_2 = arg2;
    return callback(function*() {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw body;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_1 = tmp2;
              let settings = tmp5;
              settings = undefined;
              const protoFieldClass = closure_1_0(1375).getProtoFieldClass(closure_1_0(1306).PreloadedUserSettings, closure_1_1);
              settings = closure_1_4.getSettings(closure_1_0);
              let tmp13;
              if (settings != null) {
                tmp13 = settings[closure_1_1];
              }
              let tmp34Result = closure_1_0(1375);
              const modifiedProto = tmp34Result.createModifiedProto(tmp13, dependencyMap, protoFieldClass, closure_1_0(1306).PreloadedUserSettings, closure_1_1);
              if (null != modifiedProto) {
                const HTTP = closure_1_0(530).HTTP;
                obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = closure_1_7.FAMILY_CENTER_TEEN_SETTINGS(closure_1_0);
                const obj2 = { settings: null };
                tmp34Result = closure_1_0(1342);
                obj2[0] = tmp34Result.protoToB64(closure_1_0(1306).PreloadedUserSettings, modifiedProto);
                obj1[1] = obj2;
                obj1[2] = closure_1_0(530).rejectWithMigratedError();
                dependencyMap = 1;
                c3 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.patch(obj1);
                return obj3;
              } else {
                c3 = 3;
              }
              const obj12 = closure_1_0(1375);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw body;
          } else if (arg0 !== 2) {
            settings = body.body.settings;
            obj = closure_1_1(709);
            const obj4 = { type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: null, settings: null };
            obj4[1] = settings;
            obj4[2] = settings;
            obj.dispatch(obj4);
          }
          c3 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = body;
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
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    { url: closure_7.FAMILY_CENTER_TEEN_CONSENTS(selectedTeenId), body: obj, rejectWithError: null };
    obj = { grant: items1, revoke: items2 };
    obj[2] = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj3 = sendRequest;
    return HTTP.patch(obj).then((result) => {
      const obj = { type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId: closure_0, consents: result.body };
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