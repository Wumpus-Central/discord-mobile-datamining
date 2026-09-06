// discord_app/modules/parent_tools/FamilyCenterActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import FamilyCenterControlledSettingsStore from "FamilyCenterControlledSettingsStore.tsx";

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
let closure_9 = async function _maybeFetchCollectiblesForInvoices(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
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
          const obj1 = { value: Promise.all(Array.from(set).map((item) => set(closure_1_2[4]).maybeFetchCollectiblesProduct(item))), done: false };
          return obj1;
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
let closure_11 = async function _maybeFetchCollectiblesForGifts(arg0, value) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
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
          const obj1 = { value: Promise.all(Array.from(set).map((item) => set(closure_1_2[4]).maybeFetchCollectiblesProduct(item))), done: false };
          return obj1;
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c1 = tmp;
      throw tmp5;
    }
  }
};
let closure_12 = async function _updateLinkForUserId(linked_user_id, link_status) {
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: null, rejectWithError: null };
            const obj1 = { linked_user_id, link_status };
            request.body = obj1;
            request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
            const obj7 = require("HTTPUtils");
            c3 = 1;
            c2 = 1;
            const obj2 = {
              value: HTTP.patch(request).then((body) => {
                        body = body.body;
                        link_status(closure_1_2[5]).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_UPDATE_SUCCESS", linkedUsers: body });
                        return body;
                      }),
              done: false
            };
            return obj2;
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c2 = tmp;
        throw tmp5;
      }
    }
  })();
};
let closure_13 = async function _removeLinkForUserId(linked_user_id) {
  c2 = 0;
  c1 = 0;
  return (async (arg0, value) => {
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = require("HTTPUtils").HTTP;
            const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: null, rejectWithError: null };
            const obj1 = { linked_user_id };
            request.body = obj1;
            request.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
            const obj7 = require("HTTPUtils");
            c2 = 1;
            c1 = 1;
            const obj2 = {
              value: HTTP.del(request).then((body) => {
                        body = body.body;
                        c1(c2[5]);
                        const obj = { type: "FAMILY_CENTER_REQUEST_LINK_REMOVE_SUCCESS", linkedUsers: body, deletedUserId };
                        obj.dispatch(obj);
                        return body;
                      }),
              done: false
            };
            return obj2;
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
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c1 = tmp;
        throw tmp5;
      }
    }
  })();
};
let closure_14 = async function _getLinkCodeForCurrentUser(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = require("HTTPUtils").HTTP;
          const obj1 = { url: constants.FAMILY_CENTER_LINK_CODE, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
          value = HTTP.get(obj1);
          c1 = 1;
          c0 = 1;
          const obj2 = {
            value: value.then((body) => {
                      body = body.body;
                      const link_code = body.link_code;
                      closure_1_1(closure_1_2[5]).dispatch({ type: "FAMILY_CENTER_LINK_CODE_FETCH_SUCCESS", linkCode: link_code, expiresAt: body.expires_at });
                      return link_code;
                    }),
            done: false
          };
          return obj2;
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp5) {
      c0 = tmp;
      throw tmp5;
    }
  }
};
let closure_15 = async function _shareIarWithParents(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const HTTP = require("HTTPUtils").HTTP;
          const obj1 = { url: constants.FAMILY_CENTER_SHARE_IAR_WITH_PARENTS, rejectWithError: true };
          c1 = 1;
          c0 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp8) {
      c0 = tmp;
      throw tmp8;
    }
  }
};
const FamilyCenterAction = fn(7538).FamilyCenterAction;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Endpoints: closure_7 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/FamilyCenterActionCreators.tsx");

export default {
  initialPageLoad() {
    return (async (arg0, value) => {
      if (c15 === 2) {
        c15 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c15 = 2;
          if (0 === c14) {
            if (arg0 === 1) {
              c15 = 3;
              throw value;
            } else if (arg0 === 2) {
              c15 = 3;
              obj = { value, done: true };
              return obj;
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
              const obj1 = { url: constants.FAMILY_CENTER_TEEN_ACTIVITY_ME, rejectWithError: null };
              obj1.rejectWithError = require("HTTPUtils").rejectWithMigratedError();
              c14 = 1;
              c15 = 1;
              const obj2 = { value: HTTP.get(obj1), done: false };
              return obj2;
            }
          } else {
            if (1 === tmp4) {
              if (arg0 === 1) {
                c15 = 3;
                throw value;
              } else if (arg0 === 2) {
                c15 = 3;
                let obj3 = { value, done: true };
                return obj3;
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
                const obj4 = { teenId: teen_user_id, rangeStartId: null, totals: null, actions: null, users: null, guilds: null, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, spendingLimit: null, monthlyPurchases: null, invoices: null, gifts: null };
                let range_start_id;
                if (teen_audit_log != null) {
                  range_start_id = teen_audit_log.range_start_id;
                }
                obj4.rangeStartId = range_start_id;
                let totals;
                if (teen_audit_log != null) {
                  totals = teen_audit_log.totals;
                }
                if (totals == null) {
                  totals = {};
                }
                obj4.totals = totals;
                let actions;
                if (teen_audit_log != null) {
                  actions = teen_audit_log.actions;
                }
                if (actions == null) {
                  actions = [];
                }
                obj4.actions = actions;
                let users;
                if (teen_audit_log != null) {
                  users = teen_audit_log.users;
                }
                if (users == null) {
                  users = [];
                }
                obj4.users = users;
                let guilds;
                if (teen_audit_log != null) {
                  guilds = teen_audit_log.guilds;
                }
                if (guilds == null) {
                  guilds = [];
                }
                obj4.guilds = guilds;
                let top_user_activities;
                if (teen_audit_log != null) {
                  top_user_activities = teen_audit_log.top_user_activities;
                }
                let topUserActivities = top_user_activities;
                if (top_user_activities == null) {
                  topUserActivities = [];
                }
                obj4.topUserActivities = topUserActivities;
                let top_guild_activities;
                if (teen_audit_log != null) {
                  top_guild_activities = teen_audit_log.top_guild_activities;
                }
                let topGuildActivities = top_guild_activities;
                if (top_guild_activities == null) {
                  topGuildActivities = [];
                }
                obj4.topGuildActivities = topGuildActivities;
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
                obj4.totalSpendAmount = totalSpendAmount;
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
                obj4.totalSpendCurrency = totalSpendCurrency;
                const spending_limit = body.spending_limit;
                let spendingLimit = spending_limit;
                if (spending_limit == null) {
                  spendingLimit = null;
                }
                obj4.spendingLimit = spendingLimit;
                const monthly_purchases = body.monthly_purchases;
                let monthlyPurchases = monthly_purchases;
                if (monthly_purchases == null) {
                  monthlyPurchases = null;
                }
                obj4.monthlyPurchases = monthlyPurchases;
                let invoices;
                if (teen_audit_log != null) {
                  invoices = teen_audit_log.invoices;
                }
                if (invoices == null) {
                  invoices = [];
                }
                obj4.invoices = invoices;
                let gifts;
                if (teen_audit_log != null) {
                  gifts = teen_audit_log.gifts;
                }
                if (gifts == null) {
                  gifts = [];
                }
                obj4.gifts = gifts;
                closure_140_5 = obj4;
                let tmp46 = null != closure_140_5.invoices;
                if (tmp46) {
                  tmp46 = closure_140_5.invoices.length > 0;
                }
                if (tmp46) {
                  c14 = 2;
                  c15 = 1;
                  let obj5 = { value: closure_141_8(closure_140_5.invoices), done: false };
                  return obj5;
                }
              }
            } else {
              if (2 === tmp4) {
                if (arg0 === 1) {
                  c15 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c15 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c15 = 3;
                throw value;
              } else if (arg0 === 2) {
                c15 = 3;
                obj = { value, done: true };
                return obj;
              }
              obj3 = closure_141_1(closure_141_2[5]);
              const obj7 = { type: "FAMILY_CENTER_INITIAL_LOAD", familyCenterTeenActivity: closure_140_5, linkedUsers: linked_users, users: users2, ageGroup: age_group };
              obj3.dispatch(obj7);
              let tmp66 = null != body.restricted_schedule;
              if (tmp66) {
                tmp66 = null != closure_140_5.teenId;
              }
              if (tmp66) {
                obj5 = closure_141_1(closure_141_2[5]);
                const obj8 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: closure_140_5.teenId, restrictedSchedule: body.restricted_schedule };
                obj5.dispatch(obj8);
              }
              c15 = 3;
              const obj9 = { value: closure_140_5, done: true };
              return obj9;
            }
            let tmp52 = null != closure_140_5.gifts;
            if (tmp52) {
              tmp52 = closure_140_5.gifts.length > 0;
            }
            if (tmp52) {
              c14 = 3;
              c15 = 1;
              const obj10 = { value: closure_141_10(closure_140_5.gifts), done: false };
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
    return (async () => {
      closure_1 = tmp2;
      closure_0 = tmp5;
      const HTTP = require("HTTPUtils").HTTP;
      await HTTP.get({ url: constants.FAMILY_CENTER_LINKED_USERS, rejectWithError: require("HTTPUtils").rejectWithMigratedError() });
      const body = arg1.body;
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
      return arg1.body;
    })();
  },
  setPendingConnection(match, match2) {
    const obj = { type: "FAMILY_CENTER_PENDING_CONNECTION_SET", teenId: match, linkCode: match2 };
    obj.dispatch(obj);
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
      const HTTP = recipient_id(1272).HTTP;
      const request = { url: constants.FAMILY_CENTER_LINKED_USERS, body: { recipient_id, code }, rejectWithError: recipient_id(1272).rejectWithMigratedError() };
      await HTTP.post(request);
      const body = arg1.body;
      closure_128_1 = { linkedUsers: body.linked_users, users: body.users };
      const merged = Object.assign(closure_128_1);
      code(573).dispatch({ type: "FAMILY_CENTER_REQUEST_LINK_SUCCESS" });
      return closure_128_1;
    })();
  },
  fetchTeenActivity(arg0) {
    closure_0 = arg0;
    return (async (arg0, value) => {
      if (c11 === 2) {
        c11 = 3;
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
          c11 = 2;
          if (0 === v3) {
            if (arg0 === 1) {
              c11 = 3;
              throw value;
            } else if (arg0 === 2) {
              c11 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_9 = tmp5;
              let body;
              let teen_audit_log;
              closure_136_2 = undefined;
              topGuildActivities(totalSpendAmount[5]).dispatch({ type: "FAMILY_CENTER_FETCH_START" });
              const result = gifts.FAMILY_CENTER_TEEN_ACTIVITY(topUserActivities);
              const HTTP = topUserActivities(totalSpendAmount[6]).HTTP;
              const obj1 = { url: result, rejectWithError: null };
              const obj15 = topGuildActivities(totalSpendAmount[5]);
              obj1.rejectWithError = topUserActivities(totalSpendAmount[6]).rejectWithMigratedError();
              v3 = 1;
              c11 = 1;
              let obj2 = { value: HTTP.get(obj1), done: false };
              return obj2;
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c11 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                body = value.body;
                teen_audit_log = body.teen_audit_log;
                let obj4 = { teenId: teen_audit_log.teen_user_id, rangeStartId: teen_audit_log.range_start_id, totals: teen_audit_log.totals, actions: teen_audit_log.actions, users: teen_audit_log.users, guilds: teen_audit_log.guilds, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, spendingLimit: null, monthlyPurchases: null, invoices: null, gifts: null };
                const top_user_activities = teen_audit_log.top_user_activities;
                topUserActivities = top_user_activities;
                if (top_user_activities == null) {
                  topUserActivities = [];
                }
                obj4.topUserActivities = topUserActivities;
                const top_guild_activities = teen_audit_log.top_guild_activities;
                topGuildActivities = top_guild_activities;
                if (top_guild_activities == null) {
                  topGuildActivities = [];
                }
                obj4.topGuildActivities = topGuildActivities;
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
                obj4.totalSpendAmount = totalSpendAmount;
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
                obj4.totalSpendCurrency = totalSpendCurrency;
                const spending_limit = body.spending_limit;
                let spendingLimit = spending_limit;
                if (spending_limit == null) {
                  spendingLimit = null;
                }
                obj4.spendingLimit = spendingLimit;
                const monthly_purchases = body.monthly_purchases;
                let monthlyPurchases = monthly_purchases;
                if (monthly_purchases == null) {
                  monthlyPurchases = null;
                }
                obj4.monthlyPurchases = monthlyPurchases;
                let invoices;
                if (teen_audit_log != null) {
                  invoices = teen_audit_log.invoices;
                }
                if (invoices == null) {
                  invoices = [];
                }
                obj4.invoices = invoices;
                gifts = undefined;
                if (teen_audit_log != null) {
                  gifts = teen_audit_log.gifts;
                }
                if (gifts == null) {
                  gifts = [];
                }
                obj4.gifts = gifts;
                closure_136_2 = obj4;
                invoices = closure_136_2.invoices;
                if (invoices) {
                  invoices = closure_136_2.invoices.length > 0;
                }
                if (invoices) {
                  v3 = 2;
                  c11 = 1;
                  const obj5 = { value: tmp2(closure_136_2.invoices), done: false };
                  return obj5;
                }
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c11 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c11 = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                }
              } else if (arg0 === 1) {
                c11 = 3;
                throw value;
              } else if (arg0 === 2) {
                c11 = 3;
                obj = { value, done: true };
                return obj;
              }
              obj2 = topGuildActivities(totalSpendAmount[5]);
              const obj7 = { type: "FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS", familyCenterTeenActivity: closure_136_2 };
              obj2.dispatch(obj7);
              if (null != body.restricted_schedule) {
                obj4 = topGuildActivities(totalSpendAmount[5]);
                const obj8 = { type: "USER_RESTRICTED_SCHEDULE_UPDATE", userId: closure_137_0, restrictedSchedule: body.restricted_schedule };
                obj4.dispatch(obj8);
              }
              c11 = 3;
              const obj9 = { value: closure_136_2, done: true };
              return obj9;
            }
            gifts = closure_136_2.gifts;
            if (gifts) {
              gifts = closure_136_2.gifts.length > 0;
            }
            if (gifts) {
              v3 = 3;
              c11 = 1;
              const obj10 = { value: v3(closure_136_2.gifts), done: false };
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
    asyncGeneratorStep = event_id;
    return (async () => {
      const HTTP = topUserActivities(totalSpendAmount[6]).HTTP;
      await HTTP.get({ url: tmp2.FAMILY_CENTER_TEEN_ACTIVITY_MORE(topUserActivities, topGuildActivities, closure_2, closure_3), rejectWithError: topUserActivities(totalSpendAmount[6]).rejectWithMigratedError() });
      const teen_audit_log = arg1.body.teen_audit_log;
      const obj4 = { teenId: teen_audit_log.teen_user_id, rangeStartId: teen_audit_log.range_start_id, actions: teen_audit_log.actions, users: teen_audit_log.users, guilds: teen_audit_log.guilds, topUserActivities: null, topGuildActivities: null, totalSpendAmount: null, totalSpendCurrency: null, invoices: null, gifts: null };
      const top_user_activities = teen_audit_log.top_user_activities;
      topUserActivities = top_user_activities;
      if (top_user_activities == null) {
        topUserActivities = [];
      }
      obj4.topUserActivities = topUserActivities;
      const top_guild_activities = teen_audit_log.top_guild_activities;
      topGuildActivities = top_guild_activities;
      if (top_guild_activities == null) {
        topGuildActivities = [];
      }
      obj4.topGuildActivities = topGuildActivities;
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
      obj4.totalSpendAmount = totalSpendAmount;
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
      obj4.totalSpendCurrency = totalSpendCurrency;
      if (teen_audit_log != null) {
        let invoices = teen_audit_log.invoices;
      }
      if (invoices == null) {
        invoices = [];
      }
      obj4.invoices = invoices;
      if (teen_audit_log != null) {
        let gifts = teen_audit_log.gifts;
      }
      if (gifts == null) {
        gifts = [];
      }
      obj4.gifts = gifts;
      closure_134_1 = obj4;
      { url: tmp2.FAMILY_CENTER_TEEN_ACTIVITY_MORE(topUserActivities, topGuildActivities, closure_2, closure_3), rejectWithError: topUserActivities(totalSpendAmount[6]).rejectWithMigratedError() };
      topGuildActivities(totalSpendAmount[7]).track(tmp5.FAMILY_CENTER_ACTION, { action: gifts.LoadMore, selected_teen_id: closure_135_0, action_display_type: closure_135_1 });
      topGuildActivities(totalSpendAmount[7]);
      topGuildActivities(totalSpendAmount[5]).dispatch({ type: "FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS", familyCenterTeenActivity: closure_134_1 });
      return teen_audit_log;
    })();
  },
  selectTab(REQUESTS) {
    const obj = { type: "FAMILY_CENTER_HANDLE_TAB_SELECT", tab: REQUESTS };
    obj.dispatch(obj);
  },
  fetchTeenSettingsAndConsents(id) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_7.FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS(id), rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    value = HTTP.get(obj);
    return value.then((body) => {
      ({ settings, consents } = body.body);
      const obj = { type: "FAMILY_CENTER_TEEN_SETTINGS_AND_CONSENTS_FETCH_SUCCESS", userId, settings, consents };
      obj.dispatch(obj);
    });
  },
  updateTeenSettings(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
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
          c3 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let settings2;
              const protoFieldClass = tmp5(1941).getProtoFieldClass(tmp5(1187).PreloadedUserSettings, tmp2);
              settings = settings.getSettings(tmp5);
              let tmp13;
              if (settings != null) {
                tmp13 = settings[tmp36];
              }
              let tmp33Result = tmp33(1941);
              const modifiedProto = tmp33Result.createModifiedProto(tmp13, closure_2, protoFieldClass, tmp33(1187).PreloadedUserSettings, tmp36);
              if (null != modifiedProto) {
                const HTTP = tmp33(1272).HTTP;
                const request = { url: closure_1_7.FAMILY_CENTER_TEEN_SETTINGS(tmp5), body: null, rejectWithError: null };
                const obj1 = { settings: null };
                tmp33Result = tmp33(1223);
                obj1.settings = tmp33Result.protoToB64(tmp33(1187).PreloadedUserSettings, modifiedProto);
                request.body = obj1;
                request.rejectWithError = tmp33(1272).rejectWithMigratedError();
                dependencyMap = 1;
                c3 = 1;
                const obj2 = { value: HTTP.patch(request), done: false };
                return obj2;
              } else {
                c3 = 3;
              }
              const obj12 = tmp5(1941);
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            settings2 = value.body.settings;
            obj = tmp2(573);
            const obj3 = { type: "FAMILY_CENTER_TEEN_UPDATE_SETTINGS_SUCCESS", userId: closure_129_0, settings: settings2 };
            obj.dispatch(obj3);
          }
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
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
    let obj = { grant: items1, revoke: items2 };
    const obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      const obj = { type: "FAMILY_CENTER_TEEN_CONSENTS_UPDATE_SUCCESS", userId, consents: body.body };
      obj.dispatch(obj);
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