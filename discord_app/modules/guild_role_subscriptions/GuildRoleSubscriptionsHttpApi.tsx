// === Module 6769: GuildRoleSubscriptionsHttpApi ===

// Module 6769 (GuildRoleSubscriptionsHttpApi)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 1096 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_5, closure_6, guild_id;

let obj = function _updateGuildRoleSubscriptionGroupListing() {
  obj = _asyncToGenerator(async (arg0, arg1, body) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj7;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0, closure_1), body, rejectWithError: obj7.rejectWithMigratedError() };
              const patch = HTTP.patch;
              c7 = 2;
              c8 = 1;
              obj7 = HTTPUtils;
              const obj4 = { value: patch(request), done: false };
              return obj4;
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_0 = closure_5;
            const self = this;
            const self2 = this;
            const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_0);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
            c8 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp14) {
          closure_5 = tmp14;
          if (0 === c6) {
            c8 = 3;
            throw tmp14;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _createGuildRoleSubscriptionGroupListing() {
  obj = _asyncToGenerator(async (arg0, body) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj7;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0), body, rejectWithError: obj7.rejectWithMigratedError() };
              const post = HTTP.post;
              c6 = 2;
              c7 = 1;
              obj7 = HTTPUtils;
              const obj4 = { value: post(request), done: false };
              return obj4;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_0 = closure_4;
            const self = this;
            const self2 = this;
            const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_0);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp14) {
          closure_4 = tmp14;
          if (0 === c5) {
            c7 = 3;
            throw tmp14;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _deleteGuildRoleSubscriptionGroupListing() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0, closure_1), rejectWithError: obj6.rejectWithMigratedError() };
            const del = HTTP.del;
            obj6 = HTTPUtils;
            c6 = 2;
            c7 = 1;
            const obj5 = { value: del(obj4), done: false };
            return obj5;
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_0 = closure_4;
          const self = this;
          const self2 = this;
          const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_0);
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        closure_4 = tmp14;
        if (0 === c5) {
          c7 = 3;
          throw tmp14;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _createGuildRoleSubscriptionListing() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let priceTier = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (async function(arg0, value, arg2) {
      let obj10;
      let obj6;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_3;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              priceTier = undefined;
              priceTier = priceTier.priceTier;
              closure_3 = Object.assign(priceTier, Object.assign({ priceTier: 0 }));
              c7 = 1;
              c8 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              c6 = 1;
              const HTTP = closure_132_0(closure_132_1[3]).HTTP;
              const request = { url: closure_132_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(closure_0, closure_1), body: obj6, rejectWithError: obj10.rejectWithMigratedError() };
              const post = HTTP.post;
              obj6 = { price_tier: priceTier };
              const merged = Object.assign(closure_3);
              c7 = 3;
              c8 = 1;
              obj10 = closure_132_0(closure_132_1[3]);
              const obj7 = { value: post(request), done: false };
              return obj7;
            }
          } else if (2 === c7) {
            c6 = 0;
            closure_4 = closure_5;
            self = this;
            const self2 = this;
            const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_4);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
            c8 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp18) {
          closure_5 = tmp18;
          if (0 === c6) {
            c8 = 3;
            throw tmp18;
          } else {
            c7 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _updateGuildRoleSubscriptionListing() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let priceTier = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    const iter = (async function(arg0, value, arg2, arg3) {
      let obj10;
      let obj6;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_4;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              priceTier = undefined;
              priceTier = priceTier.priceTier;
              closure_4 = Object.assign(priceTier, Object.assign({ priceTier: 0 }));
              c8 = 1;
              c9 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              c7 = 1;
              const HTTP = closure_133_0(closure_133_1[3]).HTTP;
              const request = { url: closure_133_3.GUILD_ROLE_SUBSCRIPTION_LISTINGS(closure_0, closure_1, closure_2), body: obj6, rejectWithError: obj10.rejectWithMigratedError() };
              const patch = HTTP.patch;
              obj6 = { price_tier: priceTier };
              const merged = Object.assign(closure_4);
              c8 = 3;
              c9 = 1;
              obj10 = closure_133_0(closure_133_1[3]);
              const obj7 = { value: patch(request), done: false };
              return obj7;
            }
          } else if (2 === c8) {
            c7 = 0;
            closure_5 = closure_6;
            self = this;
            const self2 = this;
            const aPIError = new closure_133_0(closure_133_1[4]).APIError(closure_5);
            throw aPIError;
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            return { value, done: true };
          } else {
            c7 = 0;
            c9 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp19) {
          closure_6 = tmp19;
          if (0 === c7) {
            c9 = 3;
            throw tmp19;
          } else {
            c8 = 2;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _getGuildRoleSubscriptionGroupListingsForGuild() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj10;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        let closure_3;
        let obj4;
        let obj6;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = tmp;
            let closure_2 = tmp4;
            obj4 = closure_1;
            if (closure_1 === undefined) {
              obj4 = { includeSoftDeleted: false };
            }
            obj6 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            obj6 = { include_soft_deleted: obj4.includeSoftDeleted, country_code: obj4.countryCode };
            c5 = 1;
            const HTTP = closure_131_0(closure_131_1[3]).HTTP;
            const request = { url: closure_131_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0), query: obj6, rejectWithError: obj10.rejectWithMigratedError() };
            const get = HTTP.get;
            obj10 = closure_131_0(closure_131_1[3]);
            c6 = 3;
            c7 = 1;
            const obj7 = { value: get(request), done: false };
            return obj7;
          }
        } else if (2 === c6) {
          c5 = 0;
          closure_3 = closure_4;
          const self = this;
          const self2 = this;
          const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_3);
          throw aPIError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp15) {
        closure_4 = tmp15;
        if (0 === c5) {
          c7 = 3;
          throw tmp15;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getGuildRoleSubscriptionsSettings() {
  obj = _asyncToGenerator(async (arg0) => {
    let c1;
    let c2;
    let obj7;
    let closure_0 = arg0;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(closure_0), rejectWithError: obj7.rejectWithMigratedError() };
    const get = HTTP.get;
    obj7 = HTTPUtils;
    await get(obj4);
    return value.body;
  });
  return obj(...arguments);
};
obj = function _updateGuildRoleSubscriptionsSettings() {
  obj = _asyncToGenerator(async (arg0, body) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      let obj7;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.GUILD_ROLE_SUBSCRIPTIONS_SETTINGS(closure_0), body, rejectWithError: obj7.rejectWithMigratedError() };
              const patch = HTTP.patch;
              c6 = 2;
              c7 = 1;
              obj7 = HTTPUtils;
              const obj4 = { value: patch(request), done: false };
              return obj4;
            }
          } else if (1 === c6) {
            c5 = 0;
            closure_0 = closure_4;
            const self = this;
            const self2 = this;
            const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_0);
            throw aPIError;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            c5 = 0;
            c7 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp14) {
          closure_4 = tmp14;
          if (0 === c5) {
            c7 = 3;
            throw tmp14;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _getPriceTiers() {
  let constants2;
  obj = _asyncToGenerator(async (guild_id) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0) {
      let obj4;
      let obj8;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.PRICE_TIERS, query: obj4, rejectWithError: obj8.rejectWithMigratedError() };
              const get = HTTP.get;
              obj4 = { price_tier_type: constants2.GUILD_ROLE_SUBSCRIPTIONS, guild_id };
              c5 = 2;
              c6 = 1;
              obj8 = HTTPUtils;
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else if (1 === c5) {
            c4 = 0;
            guild_id = closure_3;
            const self = this;
            const self2 = this;
            const aPIError = new closure_130_0(closure_130_1[4]).APIError(guild_id);
            throw aPIError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp14) {
          closure_3 = tmp14;
          if (0 === c4) {
            c6 = 3;
            throw tmp14;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _getGuildRoleSubscriptionGroupListing() {
  obj = _asyncToGenerator(async function(arg0, arg1) {
    let obj10;
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let obj4;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            obj4 = closure_2;
            if (closure_2 === undefined) {
              obj4 = {};
            }
            c7 = 1;
            c8 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c6 = 1;
            const HTTP = closure_132_0(closure_132_1[3]).HTTP;
            const request = { url: closure_132_3.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTINGS(closure_0, closure_1), query: obj6, rejectWithError: obj10.rejectWithMigratedError() };
            const get = HTTP.get;
            obj6 = { include_draft_listings: obj4.includeDraftListings, include_archived_listings: obj4.includeArchivedListings };
            obj10 = closure_132_0(closure_132_1[3]);
            c7 = 3;
            c8 = 1;
            const obj7 = { value: get(request), done: false };
            return obj7;
          }
        } else if (2 === c7) {
          c6 = 0;
          let closure_3 = closure_5;
          const self = this;
          const self2 = this;
          const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_3);
          throw aPIError;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp16) {
        closure_5 = tmp16;
        if (0 === c6) {
          c8 = 3;
          throw tmp16;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getGuildRoleSubscriptionGroupForSubscriptionPlan() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj7;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.SUBSCRIPTION_PLAN_GUILD_ROLE_GROUP_LISTING(closure_0), rejectWithError: obj7.rejectWithMigratedError() };
            const get = HTTP.get;
            obj7 = HTTPUtils;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          const self = this;
          const self2 = this;
          const aPIError = new closure_130_0(closure_130_1[4]).APIError(closure_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp14) {
        closure_3 = tmp14;
        if (0 === c4) {
          c6 = 3;
          throw tmp14;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _deleteGuildRoleSubscriptionListing() {
  obj = _asyncToGenerator(async function(arg0, arg1, arg2) {
    let obj6;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTINGS(closure_0, closure_1, closure_2), rejectWithError: obj6.rejectWithMigratedError() };
            const del = HTTP.del;
            obj6 = HTTPUtils;
            c7 = 2;
            c8 = 1;
            const obj5 = { value: del(obj4), done: false };
            return obj5;
          }
        } else if (1 === c7) {
          c6 = 0;
          closure_0 = closure_5;
          const self = this;
          const self2 = this;
          const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_0);
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
          return { value: "IconComponent", done: null };
        }
      } catch (tmp14) {
        closure_5 = tmp14;
        if (0 === c6) {
          c8 = 3;
          throw tmp14;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _archiveGuildRoleSubscriptionListing() {
  obj = _asyncToGenerator(async function(arg0, arg1, arg2) {
    let obj7;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_GROUP_LISTING_ARCHIVE(closure_0, closure_1, closure_2), rejectWithError: obj7.rejectWithMigratedError() };
            const post = HTTP.post;
            obj7 = HTTPUtils;
            c7 = 2;
            c8 = 1;
            const obj5 = { value: post(obj4), done: false };
            return obj5;
          }
        } else if (1 === c7) {
          c6 = 0;
          closure_0 = closure_5;
          const self = this;
          const self2 = this;
          const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp14) {
        closure_5 = tmp14;
        if (0 === c6) {
          c8 = 3;
          throw tmp14;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getGuildRoleSubscriptionTrials() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj7;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIALS(closure_0), rejectWithError: obj7.rejectWithMigratedError() };
            const get = HTTP.get;
            obj7 = HTTPUtils;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          const self = this;
          const self2 = this;
          const aPIError = new closure_130_0(closure_130_1[4]).APIError(closure_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp14) {
        closure_3 = tmp14;
        if (0 === c4) {
          c6 = 3;
          throw tmp14;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _updateGuildRoleSubscriptionsTrial() {
  obj = _asyncToGenerator(async (arg0, arg1, body) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj7;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_4 = tmp;
              closure_3 = tmp4;
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_LISTING_TRIAL(closure_0, closure_1), body, rejectWithError: obj7.rejectWithMigratedError() };
              const patch = HTTP.patch;
              c7 = 2;
              c8 = 1;
              obj7 = HTTPUtils;
              const obj4 = { value: patch(request), done: false };
              return obj4;
            }
          } else if (1 === c7) {
            c6 = 0;
            closure_0 = closure_5;
            const self = this;
            const self2 = this;
            const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_0);
            throw aPIError;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            c6 = 0;
            c8 = 3;
            return { value: value.body, done: true };
          }
        } catch (tmp14) {
          closure_5 = tmp14;
          if (0 === c6) {
            c8 = 3;
            throw tmp14;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _getGuildRoleSubscriptionTrialEligibility() {
  obj = _asyncToGenerator(async function(arg0, arg1, arg2) {
    let obj7;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            c6 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.GUILD_ROLE_SUBSCRIPTION_TRIAL_ELIGIBILITY(closure_0, closure_1, closure_2), rejectWithError: obj7.rejectWithMigratedError() };
            const get = HTTP.get;
            obj7 = HTTPUtils;
            c7 = 2;
            c8 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c7) {
          c6 = 0;
          closure_0 = closure_5;
          const self = this;
          const self2 = this;
          const aPIError = new closure_132_0(closure_132_1[4]).APIError(closure_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c6 = 0;
          c8 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp14) {
        closure_5 = tmp14;
        if (0 === c6) {
          c8 = 3;
          throw tmp14;
        } else {
          c7 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getGuildMonetizationRestrictions() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj9;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        let signal;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            signal = undefined;
            let obj4 = closure_1;
            if (closure_1 === undefined) {
              obj4 = {};
            }
            signal = obj4.signal;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            c5 = 1;
            const HTTP = closure_131_0(closure_131_1[3]).HTTP;
            const obj6 = { url: closure_131_3.CREATOR_MONETIZATION_RESTRICTIONS(closure_0), signal, rejectWithError: obj9.rejectWithMigratedError() };
            const get = HTTP.get;
            obj9 = closure_131_0(closure_131_1[3]);
            c6 = 3;
            c7 = 1;
            const obj7 = { value: get(obj6), done: false };
            return obj7;
          }
        } else if (2 === c6) {
          c5 = 0;
          let closure_2 = closure_4;
          const self = this;
          const self2 = this;
          const aPIError = new closure_131_0(closure_131_1[4]).APIError(closure_2);
          throw aPIError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp15) {
        closure_4 = tmp15;
        if (0 === c5) {
          c7 = 3;
          throw tmp15;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchHighlightedCreatorGuildDetails() {
  obj = _asyncToGenerator(async function(arg0) {
    let obj7;
    let value;
    let closure_0 = arg0;
    if (c7 === 2) {
      c7 = 3;
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
      let c5;
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp4;
            closure_0 = undefined;
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.GUILD_DISCOVERY_SLUG(closure_0), rejectWithError: obj7.rejectWithMigratedError() };
            const get = HTTP.get;
            obj7 = HTTPUtils;
            c6 = 2;
            c7 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c6) {
          c5 = 0;
          value = closure_4;
          const self = this;
          const self2 = this;
          const aPIError = new closure_131_0(closure_131_1[4]).APIError(value);
          throw aPIError;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          const body = closure_0.body;
          value = body;
          if (body == null) {
            const _JSON = JSON;
            value = JSON.parse(closure_0.text);
          }
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp18) {
        closure_4 = tmp18;
        if (0 === c5) {
          c7 = 3;
          throw tmp18;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const PriceTierTypes = Constants2.PriceTierTypes;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/GuildRoleSubscriptionsHttpApi.tsx");

export const updateGuildRoleSubscriptionGroupListing = function updateGuildRoleSubscriptionGroupListing() {
  return obj(...arguments);
};
export const createGuildRoleSubscriptionGroupListing = function createGuildRoleSubscriptionGroupListing() {
  return obj(...arguments);
};
export const deleteGuildRoleSubscriptionGroupListing = function deleteGuildRoleSubscriptionGroupListing() {
  return obj(...arguments);
};
export const createGuildRoleSubscriptionListing = function createGuildRoleSubscriptionListing() {
  return obj(...arguments);
};
export const updateGuildRoleSubscriptionListing = function updateGuildRoleSubscriptionListing() {
  return obj(...arguments);
};
export const getGuildRoleSubscriptionGroupListingsForGuild = function getGuildRoleSubscriptionGroupListingsForGuild() {
  return obj(...arguments);
};
export const getGuildRoleSubscriptionsSettings = function getGuildRoleSubscriptionsSettings() {
  return obj(...arguments);
};
export const updateGuildRoleSubscriptionsSettings = function updateGuildRoleSubscriptionsSettings() {
  return obj(...arguments);
};
export const getPriceTiers = function getPriceTiers() {
  return obj(...arguments);
};
export const getGuildRoleSubscriptionGroupListing = function getGuildRoleSubscriptionGroupListing() {
  return obj(...arguments);
};
export const getGuildRoleSubscriptionGroupForSubscriptionPlan = function getGuildRoleSubscriptionGroupForSubscriptionPlan() {
  return obj(...arguments);
};
export const deleteGuildRoleSubscriptionListing = function deleteGuildRoleSubscriptionListing() {
  return obj(...arguments);
};
export const archiveGuildRoleSubscriptionListing = function archiveGuildRoleSubscriptionListing() {
  return obj(...arguments);
};
export const getGuildRoleSubscriptionTrials = function getGuildRoleSubscriptionTrials() {
  return obj(...arguments);
};
export const updateGuildRoleSubscriptionsTrial = function updateGuildRoleSubscriptionsTrial() {
  return obj(...arguments);
};
export const getGuildRoleSubscriptionTrialEligibility = function getGuildRoleSubscriptionTrialEligibility() {
  return obj(...arguments);
};
export const getGuildMonetizationRestrictions = function getGuildMonetizationRestrictions() {
  return obj(...arguments);
};
export const fetchHighlightedCreatorGuildDetails = function fetchHighlightedCreatorGuildDetails() {
  return obj(...arguments);
};