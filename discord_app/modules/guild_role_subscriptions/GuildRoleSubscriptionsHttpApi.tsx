// discord_app/modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _updateGuildRoleSubscriptionGroupListing(arg0, arg1, body) {
  closure_0 = arg0;
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0, closure_1),
              body,
              rejectWithError: HTTPUtils.rejectWithMigratedError(),
            };
            c7 = 2;
            c8 = 1;
            const obj1 = { value: HTTP.patch(request), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_0 = closure_5;
          const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_131_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp19) {
        closure_5 = tmp19;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp19;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_6 = async function _createGuildRoleSubscriptionGroupListing(arg0, body) {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0),
              body,
              rejectWithError: HTTPUtils.rejectWithMigratedError(),
            };
            c6 = 2;
            c7 = 1;
            const obj1 = { value: HTTP.post(request), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_130_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp19) {
        closure_4 = tmp19;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp19;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_7 = async function _deleteGuildRoleSubscriptionGroupListing(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          c5 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0, closure_1),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c6 = 2;
          c7 = 1;
          const obj2 = { value: HTTP.del(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_0 = closure_4;
        const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_130_0);
        throw aPIError;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c5 = 0;
        c7 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp19) {
      closure_4 = tmp19;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp19;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_8 = async function _createGuildRoleSubscriptionListing(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let priceTier = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  let iter = (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp5;
            let priceTier2;
            closure_131_3 = undefined;
            closure_131_0 = closure_0;
            closure_131_1 = closure_1;
            priceTier2 = priceTier.priceTier;
            closure_131_3 = Object.assign(priceTier, Object.assign({ priceTier: 0 }));
            c7 = 1;
            c8 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            c6 = 1;
            const HTTP = closure_132_0(closure_132_1[3]).HTTP;
            const request = {
              url: closure_132_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(closure_131_0, closure_131_1),
              body: null,
              rejectWithError: null,
            };
            const obj3 = {};
            const merged = Object.assign(closure_131_3);
            obj3.price_tier = priceTier2;
            request.body = obj3;
            request.rejectWithError = closure_132_0(closure_132_1[3]).rejectWithMigratedError();
            c7 = 3;
            c8 = 1;
            const obj4 = { value: HTTP.post(request), done: false };
            return obj4;
          }
        } else if (2 === tmp8) {
          c6 = 0;
          closure_131_4 = closure_5;
          const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_131_4);
          throw aPIError;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp24) {
        closure_5 = tmp24;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp24;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
let closure_9 = async function _updateGuildRoleSubscriptionListing(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  let priceTier = arg3;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  let iter = (async (arg0, value, arg2, arg3) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp5;
            let priceTier2;
            closure_132_4 = undefined;
            closure_132_0 = closure_0;
            closure_132_1 = closure_1;
            closure_132_2 = closure_2;
            priceTier2 = priceTier.priceTier;
            closure_132_4 = Object.assign(priceTier, Object.assign({ priceTier: 0 }));
            c8 = 1;
            c9 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj2 = { value, done: true };
            return obj2;
          } else {
            c7 = 1;
            const HTTP = closure_133_0(closure_133_1[3]).HTTP;
            const request = {
              url: closure_133_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(closure_132_0, closure_132_1, closure_132_2),
              body: null,
              rejectWithError: null,
            };
            const obj3 = {};
            const merged = Object.assign(closure_132_4);
            obj3.price_tier = priceTier2;
            request.body = obj3;
            request.rejectWithError = closure_133_0(closure_133_1[3]).rejectWithMigratedError();
            c8 = 3;
            c9 = 1;
            const obj4 = { value: HTTP.patch(request), done: false };
            return obj4;
          }
        } else if (2 === tmp8) {
          c7 = 0;
          closure_132_5 = closure_6;
          const aPIError = new closure_133_0(closure_133_1[4]).APIError(closure_132_5);
          throw aPIError;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c7 = 0;
          c9 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp25) {
        closure_6 = tmp25;
        if (tmp4 === c7) {
          c9 = tmp2;
          throw tmp25;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
let closure_10 = async function _getGuildRoleSubscriptionGroupListingsForGuild(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = { includeSoftDeleted: false };
          }
          closure_130_1 = obj1;
          closure_130_2 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          const obj3 = {
            include_soft_deleted: closure_130_1.includeSoftDeleted,
            country_code: closure_130_1.countryCode,
          };
          closure_130_2 = obj3;
          c5 = 1;
          const HTTP = closure_131_0(closure_131_1[3]).HTTP;
          const request = {
            url: closure_131_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_130_0),
            query: closure_130_2,
            rejectWithError: closure_131_0(closure_131_1[3]).rejectWithMigratedError(),
          };
          c6 = 3;
          c7 = 1;
          const obj4 = { value: HTTP.get(request), done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        closure_130_3 = closure_4;
        const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_130_3);
        throw aPIError;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c5 = 0;
        c7 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp20) {
      closure_4 = tmp20;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp20;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_11 = async function _getGuildRoleSubscriptionsSettings() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.get({
    url: Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(closure_0),
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  });
  return arg1.body;
};
let closure_12 = async function _updateGuildRoleSubscriptionsSettings(arg0, body) {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(closure_0),
              body,
              rejectWithError: HTTPUtils.rejectWithMigratedError(),
            };
            c6 = 2;
            c7 = 1;
            const obj1 = { value: HTTP.patch(request), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_0 = closure_4;
          const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_130_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp19) {
        closure_4 = tmp19;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp19;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_13 = async function _getPriceTiers(guild_id) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.PRICE_TIERS, query: null, rejectWithError: null };
            const obj1 = { price_tier_type: constants2.GUILD_ROLE_SUBSCRIPTIONS, guild_id };
            request.query = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c5 = 2;
            c6 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_0 = closure_3;
          const aPIError = new closure_130_0(closure_130_1[4]).APIError(closure_129_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp19) {
        closure_3 = tmp19;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp19;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_14 = async function _getGuildRoleSubscriptionGroupListing(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp5;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let obj1 = closure_2;
          if (closure_2 === undefined) {
            obj1 = {};
          }
          closure_131_2 = obj1;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c6 = 1;
          const HTTP = closure_132_0(closure_132_1[3]).HTTP;
          const request = {
            url: closure_132_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_131_0, closure_131_1),
            query: null,
            rejectWithError: null,
          };
          const obj3 = {
            include_draft_listings: closure_131_2.includeDraftListings,
            include_archived_listings: closure_131_2.includeArchivedListings,
          };
          request.query = obj3;
          request.rejectWithError = closure_132_0(closure_132_1[3]).rejectWithMigratedError();
          c7 = 3;
          c8 = 1;
          const obj4 = { value: HTTP.get(request), done: false };
          return obj4;
        }
      } else if (2 === tmp8) {
        c6 = 0;
        closure_131_3 = closure_5;
        const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_131_3);
        throw aPIError;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c6 = 0;
        c8 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp22) {
      closure_5 = tmp22;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp22;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_15 = async function _getGuildRoleSubscriptionGroupForSubscriptionPlan(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(closure_0),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c5 = 2;
          c6 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_0 = closure_3;
        const aPIError = new closure_130_0(closure_130_1[4]).APIError(closure_129_0);
        throw aPIError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp19) {
      closure_3 = tmp19;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp19;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_16 = async function _deleteGuildRoleSubscriptionListing(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          c6 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(closure_0, closure_1, closure_2),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c7 = 2;
          c8 = 1;
          const obj2 = { value: HTTP.del(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        closure_131_0 = closure_5;
        const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_131_0);
        throw aPIError;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c6 = 0;
        c8 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp19) {
      closure_5 = tmp19;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp19;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_17 = async function _archiveGuildRoleSubscriptionListing(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          c6 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(closure_0, closure_1, closure_2),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c7 = 2;
          c8 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        closure_131_0 = closure_5;
        const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_131_0);
        throw aPIError;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c6 = 0;
        c8 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp19) {
      closure_5 = tmp19;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp19;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_18 = async function _getGuildRoleSubscriptionTrials(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIALS(closure_0),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c5 = 2;
          c6 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_0 = closure_3;
        const aPIError = new closure_130_0(closure_130_1[4]).APIError(closure_129_0);
        throw aPIError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c4 = 0;
        c6 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp19) {
      closure_3 = tmp19;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp19;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_19 = async function _updateGuildRoleSubscriptionsTrial(arg0, arg1, body) {
  closure_0 = arg0;
  closure_1 = arg1;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(closure_0, closure_1),
              body,
              rejectWithError: HTTPUtils.rejectWithMigratedError(),
            };
            c7 = 2;
            c8 = 1;
            const obj1 = { value: HTTP.patch(request), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c6 = 0;
          closure_131_0 = closure_5;
          const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_131_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp19) {
        closure_5 = tmp19;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp19;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
let closure_20 = async function _getGuildRoleSubscriptionTrialEligibility(arg0, value) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          c6 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(closure_0, closure_1, closure_2),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c7 = 2;
          c8 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c6 = 0;
        closure_131_0 = closure_5;
        const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_131_0);
        throw aPIError;
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        c6 = 0;
        c8 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp19) {
      closure_5 = tmp19;
      if (tmp4 === c6) {
        c8 = tmp2;
        throw tmp19;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_21 = async function _getGuildMonetizationRestrictions(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          let signal;
          closure_130_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          signal = obj1.signal;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          c5 = 1;
          const HTTP = closure_131_0(closure_131_1[3]).HTTP;
          const obj3 = {
            url: closure_131_3.CREATOR_MONETIZATION_RESTRICTIONS(closure_130_0),
            signal,
            rejectWithError: closure_131_0(closure_131_1[3]).rejectWithMigratedError(),
          };
          c6 = 3;
          c7 = 1;
          const obj4 = { value: HTTP.get(obj3), done: false };
          return obj4;
        }
      } else if (2 === tmp8) {
        c5 = 0;
        closure_130_2 = closure_4;
        const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_130_2);
        throw aPIError;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c5 = 0;
        c7 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp21) {
      closure_4 = tmp21;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp21;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_22 = async function _fetchHighlightedCreatorGuildDetails(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          c5 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = {
            url: Endpoints.GUILD_DISCOVERY_SLUG(closure_0),
            rejectWithError: HTTPUtils.rejectWithMigratedError(),
          };
          c6 = 2;
          c7 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c5 = 0;
        closure_130_1 = closure_4;
        const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_130_1);
        throw aPIError;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_130_0 = value;
        const body = closure_130_0.body;
        value = body;
        if (body == null) {
          const _JSON = JSON;
          value = JSON.parse(closure_130_0.text);
        }
        c5 = 0;
        c7 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp23) {
      closure_4 = tmp23;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp23;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const PriceTierTypes = fn(1085).PriceTierTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx");

export const updateGuildRoleSubscriptionGroupListing = function updateGuildRoleSubscriptionGroupListing() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGuildRoleSubscriptionGroupListing = function createGuildRoleSubscriptionGroupListing() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const deleteGuildRoleSubscriptionGroupListing = function deleteGuildRoleSubscriptionGroupListing() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const createGuildRoleSubscriptionListing = function createGuildRoleSubscriptionListing() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildRoleSubscriptionListing = function updateGuildRoleSubscriptionListing() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionGroupListingsForGuild = function getGuildRoleSubscriptionGroupListingsForGuild() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionsSettings = function getGuildRoleSubscriptionsSettings() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildRoleSubscriptionsSettings = function updateGuildRoleSubscriptionsSettings() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPriceTiers = function getPriceTiers() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionGroupListing = function getGuildRoleSubscriptionGroupListing() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionGroupForSubscriptionPlan =
  function getGuildRoleSubscriptionGroupForSubscriptionPlan() {
    const self = this;
    const apply = closure_15.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
export const deleteGuildRoleSubscriptionListing = function deleteGuildRoleSubscriptionListing() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const archiveGuildRoleSubscriptionListing = function archiveGuildRoleSubscriptionListing() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionTrials = function getGuildRoleSubscriptionTrials() {
  const self = this;
  const apply = closure_18.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const updateGuildRoleSubscriptionsTrial = function updateGuildRoleSubscriptionsTrial() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildRoleSubscriptionTrialEligibility = function getGuildRoleSubscriptionTrialEligibility() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getGuildMonetizationRestrictions = function getGuildMonetizationRestrictions() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchHighlightedCreatorGuildDetails = function fetchHighlightedCreatorGuildDetails() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
