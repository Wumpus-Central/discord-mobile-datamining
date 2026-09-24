// === Module 7869: FamilyCenterActionCreators ===

// Module 7869 (FamilyCenterActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore" /* 7870 */;

const require = globalThis.__r;

const require = fn;
function maybeFetchCollectiblesForInvoices() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _maybeFetchCollectiblesForInvoices(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const set = new Set();
          const item = _require.forEach((invoice_items) => {
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
          const obj4 = { value: Promise.all(Array.from(set).map((item) => set(closure_1_2[4]).maybeFetchCollectiblesProduct(item))), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
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
};
function maybeFetchCollectiblesForGifts() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _maybeFetchCollectiblesForGifts(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const set = new Set();
          const item = _require.forEach((sku_id) => {
            if (null != sku_id.sku_id) {
              set.add(sku_id.sku_id);
            }
          });
          const _Array = Array;
          c2 = 1;
          c1 = 1;
          const obj4 = { value: Promise.all(Array.from(set).map((item) => set(closure_1_2[4]).maybeFetchCollectiblesProduct(item))), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
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
};
let closure_12 = async function _updateLinkForUserId() {
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: null, rejectWithError: null };
            const obj4 = { linked_user_id, link_status };
            request.body = obj4;
            request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
            const obj7 = require("HTTPUtils");
            c3 = 1;
            c2 = 1;
            const obj5 = {
              value: HTTP.patch(request).then((body) => {
                        body = body.body;
                        link_status(closure_1_2[5]).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: body });
                        return body;
                      }),
              done: false
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c2 = tmp;
        throw tmp5;
      }
    }
  })();
};
let closure_13 = async function _removeLinkForUserId() {
  c2 = 0;
  c1 = 0;
  return (async (arg0) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
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
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: null, rejectWithError: null };
            const obj4 = { linked_user_id };
            request.body = obj4;
            request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
            const obj7 = require("HTTPUtils");
            c2 = 1;
            c1 = 1;
            const obj5 = {
              value: HTTP.del(request).then((body) => {
                        body = body.body;
                        c1(c2[5]).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: body, deletedUserId });
                        return body;
                      }),
              done: false
            };
            return obj5;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj = { value, done: true };
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
};
let closure_14 = async function _getLinkCodeForCurrentUser() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj4 = { url: constants.FAMILY_CENTER_LINK_CODE, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
          value = HTTP.get(obj4);
          c1 = 1;
          c0 = 1;
          const obj5 = {
            value: value.then((body) => {
                      body = body.body;
                      const link_code = body.link_code;
                      closure_1_1(closure_1_2[5]).dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: link_code, expiresAt: body.expires_at });
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
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
};
let closure_15 = async function _shareIarWithParents() {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
        const obj = { value, done: true };
        return obj;
      } else {
        c0 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
const FamilyCenterAction = fn(7868).FamilyCenterAction;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Endpoints: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActionCreators.tsx");

export default {
  initialPageLoad() {
    return (async () => {
      if (c15 === 2) {
        c15 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
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
              c13 = 0;
              closure_12 = tmp4;
              let body;
              let teen_audit_log;
              let linked_users;
              let users2;
              let age_group;
              closure_140_5 = undefined;
              DispatcherDefault.dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              const HTTP = require("HTTPUtils").HTTP;
              const obj5 = { url: constants.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: null };
              obj5.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
              c14 = 1;
              c15 = 1;
              const obj7 = { value: HTTP.get(obj5), done: false };
              return obj7;
            }
          } else {
            if (1 === tmp4) {
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
                users2 = body.users;
                age_group = body.age_group;
                let teen_user_id;
                if (teen_audit_log != null) {
                  teen_user_id = teen_audit_log.teen_user_id;
                }
                const obj9 = { teenId: teen_user_id, rangeStartId: null, totals: null, actions: null, users: null, guilds: null, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, spendingLimit: null, monthlyPurchases: null, invoices: null, gifts: null };
                let range_start_id;
                if (teen_audit_log != null) {
                  range_start_id = teen_audit_log.range_start_id;
                }
                obj9.rangeStartId = range_start_id;
                let totals;
                if (teen_audit_log != null) {
                  totals = teen_audit_log.totals;
                }
                if (totals == null) {
                  totals = {};
                }
                obj9.totals = totals;
                let actions;
                if (teen_audit_log != null) {
                  actions = teen_audit_log.actions;
                }
                if (actions == null) {
                  actions = [];
                }
                obj9.actions = actions;
                let users;
                if (teen_audit_log != null) {
                  users = teen_audit_log.users;
                }
                if (users == null) {
                  users = [];
                }
                obj9.users = users;
                let guilds;
                if (teen_audit_log != null) {
                  guilds = teen_audit_log.guilds;
                }
                if (guilds == null) {
                  guilds = [];
                }
                obj9.guilds = guilds;
                let top_user_activities;
                if (teen_audit_log != null) {
                  top_user_activities = teen_audit_log.top_user_activities;
                }
                let topUserActivities = top_user_activities;
                if (top_user_activities == null) {
                  topUserActivities = [];
                }
                obj9.topUserActivities = topUserActivities;
                let top_guild_activities;
                if (teen_audit_log != null) {
                  top_guild_activities = teen_audit_log.top_guild_activities;
                }
                let topGuildActivities = top_guild_activities;
                if (top_guild_activities == null) {
                  topGuildActivities = [];
                }
                obj9.topGuildActivities = topGuildActivities;
                let amount;
                if (teen_audit_log != null) {
                  const total_spend = teen_audit_log.total_spend;
                  if (total_spend != null) {
                    amount = total_spend.amount;
                  }
                }
                let totalSpendAmount = amount;
                if (amount == null) {
                  totalSpendAmount = null;
                }
                obj9.totalSpendAmount = totalSpendAmount;
                let currency;
                if (teen_audit_log != null) {
                  const total_spend2 = teen_audit_log.total_spend;
                  if (total_spend2 != null) {
                    currency = total_spend2.currency;
                  }
                }
                let totalSpendCurrency = currency;
                if (currency == null) {
                  totalSpendCurrency = null;
                }
                obj9.totalSpendCurrency = totalSpendCurrency;
                const spending_limit = body.spending_limit;
                let spendingLimit = spending_limit;
                if (spending_limit == null) {
                  spendingLimit = null;
                }
                obj9.spendingLimit = spendingLimit;
                const monthly_purchases = body.monthly_purchases;
                let monthlyPurchases = monthly_purchases;
                if (monthly_purchases == null) {
                  monthlyPurchases = null;
                }
                obj9.monthlyPurchases = monthlyPurchases;
                let invoices;
                if (teen_audit_log != null) {
                  invoices = teen_audit_log.invoices;
                }
                if (invoices == null) {
                  invoices = [];
                }
                obj9.invoices = invoices;
                let gifts;
                if (teen_audit_log != null) {
                  gifts = teen_audit_log.gifts;
                }
                if (gifts == null) {
                  gifts = [];
                }
                obj9.gifts = gifts;
                closure_140_5 = obj9;
                let tmp46 = null != closure_140_5.invoices;
                if (tmp46) {
                  tmp46 = closure_140_5.invoices.length > 0;
                }
                if (tmp46) {
                  c14 = 2;
                  c15 = 1;
                  const obj10 = { value: closure_141_8(closure_140_5.invoices), done: false };
                  return obj10;
                }
              }
            } else {
              if (2 === tmp4) {
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
                const obj = { value, done: true };
                return obj;
              }
              const obj12 = { type: "FAMILY_CENTER_INITIAL_LOAD", familyCenterTeenActivity: closure_140_5, linkedUsers: linked_users, users: users2, ageGroup: age_group };
              closure_141_1(closure_141_2[5]).dispatch(obj12);
              let tmp66 = null != body.restricted_schedule;
              if (tmp66) {
                tmp66 = null != closure_140_5.teenId;
              }
              if (tmp66) {
                const obj13 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: closure_140_5.teenId, restrictedSchedule: body.restricted_schedule };
                closure_141_1(closure_141_2[5]).dispatch(obj13);
                const obj6 = closure_141_1(closure_141_2[5]);
              }
              c15 = 3;
              const obj14 = { value: closure_140_5, done: true };
              return obj14;
            }
            let tmp52 = null != closure_140_5.gifts;
            if (tmp52) {
              tmp52 = closure_140_5.gifts.length > 0;
            }
            if (tmp52) {
              c14 = 3;
              c15 = 1;
              const obj16 = { value: closure_141_10(closure_140_5.gifts), done: false };
              return obj16;
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
    return (async () => {
      closure_1 = tmp2;
      closure_0 = tmp5;
      const HTTP = require("HTTPUtils").HTTP;
      await HTTP.get({ url: constants.FAMILY_CENTER_LINKED_USERS, rejectWithError: require("HTTPUtils").rejectWithMigratedError() });
      const body = value.body;
      closure_128_1 = { linkedUsers: body.linked_users, users: body.users };
      const merged = Object.assign(closure_128_1);
      closure_129_1(closure_129_2[5]).dispatch({ type: "FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS" });
      return closure_128_1;
    })();
  },
  getConnectionPrerequisites(arg0, arg1) {
    closure_0 = arg0;
    closure_1 = arg1;
    return (async () => {
      const HTTP = teen_id(dependencyMap[6]).HTTP;
      const request = { url: constants.FAMILY_CENTER_CONNECTION_PREREQUISITES, query: { teen_id, link_code }, rejectWithError: true };
      await HTTP.get(request);
      return value.body;
    })();
  },
  setPendingConnection(match, match2) {
    DispatcherDefault.dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_SET", teenId: match, linkCode: match2 });
  },
  clearPendingConnection() {
    DispatcherDefault.dispatch({ type: "FAMILY_CENTER_PENDING_CONNECTION_CLEAR" });
  },
  requestLink(userId, linkCode) {
    closure_0 = userId;
    closure_1 = linkCode;
    return (async () => {
      const code = tmp2;
      const recipient_id = tmp5;
      const HTTP = recipient_id(1271).HTTP;
      const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: { recipient_id, code }, rejectWithError: recipient_id(1271).rejectWithMigratedError() };
      await HTTP.post(request);
      const body = value.body;
      closure_128_1 = { linkedUsers: body.linked_users, users: body.users };
      const merged = Object.assign(closure_128_1);
      code(573).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" });
      return closure_128_1;
    })();
  },
  fetchTeenActivity(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c11 === 2) {
        c11 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
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
              closure_9 = tmp5;
              let body;
              let teen_audit_log;
              closure_136_2 = undefined;
              topGuildActivities(totalSpendAmount[5]).dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              const result = gifts.FAMILY_CENTER_TEEN_ACTIVITY(topUserActivities);
              const HTTP = topUserActivities(totalSpendAmount[6]).HTTP;
              const obj6 = { url: result, rejectWithError: null };
              const obj15 = topGuildActivities(totalSpendAmount[5]);
              obj6.rejectWithError = topUserActivities(totalSpendAmount[6]).rejectWithMigratedError();
              v3 = 1;
              c11 = 1;
              const obj7 = { value: HTTP.get(obj6), done: false };
              return obj7;
            }
          } else {
            if (1 === tmp5) {
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
                const obj9 = { teenId: teen_audit_log.teen_user_id, rangeStartId: teen_audit_log.range_start_id, totals: teen_audit_log.totals, actions: teen_audit_log.actions, users: teen_audit_log.users, guilds: teen_audit_log.guilds, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, spendingLimit: null, monthlyPurchases: null, invoices: null, gifts: null };
                const top_user_activities = teen_audit_log.top_user_activities;
                topUserActivities = top_user_activities;
                if (top_user_activities == null) {
                  topUserActivities = [];
                }
                obj9.topUserActivities = topUserActivities;
                const top_guild_activities = teen_audit_log.top_guild_activities;
                topGuildActivities = top_guild_activities;
                if (top_guild_activities == null) {
                  topGuildActivities = [];
                }
                obj9.topGuildActivities = topGuildActivities;
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
                obj9.totalSpendAmount = totalSpendAmount;
                let currency;
                if (teen_audit_log != null) {
                  const total_spend2 = teen_audit_log.total_spend;
                  if (total_spend2 != null) {
                    currency = total_spend2.currency;
                  }
                }
                let totalSpendCurrency = currency;
                if (currency == null) {
                  totalSpendCurrency = null;
                }
                obj9.totalSpendCurrency = totalSpendCurrency;
                const spending_limit = body.spending_limit;
                let spendingLimit = spending_limit;
                if (spending_limit == null) {
                  spendingLimit = null;
                }
                obj9.spendingLimit = spendingLimit;
                const monthly_purchases = body.monthly_purchases;
                let monthlyPurchases = monthly_purchases;
                if (monthly_purchases == null) {
                  monthlyPurchases = null;
                }
                obj9.monthlyPurchases = monthlyPurchases;
                let invoices1;
                if (teen_audit_log != null) {
                  invoices1 = teen_audit_log.invoices;
                }
                let invoices = invoices1;
                if (invoices1 == null) {
                  invoices = [];
                }
                obj9.invoices = invoices;
                let gifts1;
                if (teen_audit_log != null) {
                  gifts1 = teen_audit_log.gifts;
                }
                gifts = gifts1;
                if (gifts1 == null) {
                  gifts = [];
                }
                obj9.gifts = gifts;
                closure_136_2 = obj9;
                invoices = closure_136_2.invoices;
                if (invoices) {
                  invoices = closure_136_2.invoices.length > 0;
                }
                if (invoices) {
                  v3 = 2;
                  c11 = 1;
                  const obj10 = { value: tmp2(closure_136_2.invoices), done: false };
                  return obj10;
                }
              }
            } else {
              if (2 === tmp5) {
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
                const obj = { value, done: true };
                return obj;
              }
              const obj12 = { type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: closure_136_2 };
              topGuildActivities(totalSpendAmount[5]).dispatch(obj12);
              if (null != body.restricted_schedule) {
                const obj13 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: closure_137_0, restrictedSchedule: body.restricted_schedule };
                topGuildActivities(totalSpendAmount[5]).dispatch(obj13);
                const obj5 = topGuildActivities(totalSpendAmount[5]);
              }
              c11 = 3;
              const obj14 = { value: closure_136_2, done: true };
              return obj14;
            }
            gifts = closure_136_2.gifts;
            if (gifts) {
              gifts = closure_136_2.gifts.length > 0;
            }
            if (gifts) {
              v3 = 3;
              c11 = 1;
              const obj16 = { value: v3(closure_136_2.gifts), done: false };
              return obj16;
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
    asyncGeneratorStep = event_id;
    return (async () => {
      const HTTP = topUserActivities(totalSpendAmount[6]).HTTP;
      await HTTP.get({ url: tmp2.FAMILY_CENTER_TEEN_ACTIVITY_MORE(topUserActivities, topGuildActivities, closure_2, closure_3), rejectWithError: topUserActivities(totalSpendAmount[6]).rejectWithMigratedError() });
      const teen_audit_log = value.body.teen_audit_log;
      const obj8 = { teenId: teen_audit_log.teen_user_id, rangeStartId: teen_audit_log.range_start_id, actions: teen_audit_log.actions, users: teen_audit_log.users, guilds: teen_audit_log.guilds, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, invoices: null, gifts: null };
      const top_user_activities = teen_audit_log.top_user_activities;
      topUserActivities = top_user_activities;
      if (top_user_activities == null) {
        topUserActivities = [];
      }
      obj8.topUserActivities = topUserActivities;
      const top_guild_activities = teen_audit_log.top_guild_activities;
      topGuildActivities = top_guild_activities;
      if (top_guild_activities == null) {
        topGuildActivities = [];
      }
      obj8.topGuildActivities = topGuildActivities;
      if (teen_audit_log != null) {
        const total_spend = teen_audit_log.total_spend;
        if (total_spend != null) {
          const amount = total_spend.amount;
        }
      }
      totalSpendAmount = amount;
      if (amount == null) {
        totalSpendAmount = null;
      }
      obj8.totalSpendAmount = totalSpendAmount;
      if (teen_audit_log != null) {
        const total_spend2 = teen_audit_log.total_spend;
        if (total_spend2 != null) {
          const currency = total_spend2.currency;
        }
      }
      let totalSpendCurrency = currency;
      if (currency == null) {
        totalSpendCurrency = null;
      }
      obj8.totalSpendCurrency = totalSpendCurrency;
      if (teen_audit_log != null) {
        let invoices = teen_audit_log.invoices;
      }
      if (invoices == null) {
        invoices = [];
      }
      obj8.invoices = invoices;
      if (teen_audit_log != null) {
        let gifts = teen_audit_log.gifts;
      }
      if (gifts == null) {
        gifts = [];
      }
      obj8.gifts = gifts;
      closure_134_1 = obj8;
      topGuildActivities(totalSpendAmount[7]).track(tmp5.FAMILY_CENTER_ACTION, { action: gifts.LoadMore, selected_teen_id: closure_135_0, action_display_type: closure_135_1 });
      topGuildActivities(totalSpendAmount[7]);
      topGuildActivities(totalSpendAmount[5]).dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: closure_134_1 });
      return teen_audit_log;
    })();
  },
  selectTab(REQUESTS) {
    DispatcherDefault.dispatch({ type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: REQUESTS });
  },
  fetchTeenSettingsAndConsents(id) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    const obj = { url: closure_7.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(id), rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    value = HTTP.get(obj);
    return value.then((body) => {
      ({ settings, consents } = body.body);
      DispatcherDefault.dispatch({ type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS", userId, settings, consents });
    });
  },
  updateTeenSettings(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let settings2;
              const protoFieldClass = tmp5(2026).getProtoFieldClass(tmp5(1186).PreloadedUserSettings, tmp2);
              settings = settings.getSettings(tmp5);
              let tmp13;
              if (settings != null) {
                tmp13 = settings[tmp2];
              }
              const tmp33Result = tmp5(2026);
              const modifiedProto = tmp33Result.createModifiedProto(tmp13, closure_2, protoFieldClass, tmp5(1186).PreloadedUserSettings, tmp2);
              if (null != modifiedProto) {
                const HTTP = tmp5(1271).HTTP;
                const request = { url: closure_1_7.FAMILY_CENTER_TEEN_SETTINGS(tmp5), body: null, rejectWithError: null };
                const obj4 = { settings: tmp5(1222).protoToB64(tmp5(1186).PreloadedUserSettings, modifiedProto) };
                request.body = obj4;
                const tmp33Result3 = tmp5(1222);
                request.rejectWithError = tmp5(1271).rejectWithMigratedError();
                dependencyMap = 1;
                c3 = 1;
                const obj5 = { value: HTTP.patch(request), done: false };
                return obj5;
              } else {
                c3 = 3;
              }
              const obj12 = tmp5(2026);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            settings2 = value.body.settings;
            const obj6 = { type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: closure_129_0, settings: settings2 };
            tmp2(573).dispatch(obj6);
            const obj = tmp2(573);
          }
          c3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } catch (tmp28) {
          c3 = tmp;
          throw tmp28;
        }
      }
    })();
  },
  updateTeenConsents(selectedTeenId, items1, items2) {
    _require = selectedTeenId;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_7.FAMILY_CENTER_TEEN_CONSENTS(selectedTeenId), body: { grant: items1, revoke: items2 }, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj = { grant: items1, revoke: items2 };
    const obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      DispatcherDefault.dispatch({ type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId, consents: body.body });
    });
  }
};
export const updateLinkForUserId = function updateLinkForUserId() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeLinkForUserId = function removeLinkForUserId() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getLinkCodeForCurrentUser = function getLinkCodeForCurrentUser() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const shareIarWithParents = function shareIarWithParents() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};