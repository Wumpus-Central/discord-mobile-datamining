// discord_app/modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
function performRoleSubscriptionUpsellRedirect() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _performRoleSubscriptionUpsellRedirect(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_0 = hasOwnProperty.CHANNEL(closure_0, constants.ROLE_SUBSCRIPTIONS);
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[3], paths.paths), done: false };
          return obj1;
        }
      } else if (1 === tmp8) {
        c4 = 0;
        closure_129_2 = closure_3;
        let obj3 = new closure_130_1(closure_130_2[5])("RoleSubscriptionsLinkingUtil");
        obj3.error("Could not perform handoff", closure_129_2);
        c6 = 3;
        return { value: false, done: true };
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_1 = value.default;
          c5 = 3;
          c6 = 1;
          obj3 = {
            value: closure_129_1.redirectWithHandoffToken(closure_129_0, { forceExternalBrowser: true }),
            done: false,
          };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp23) {
      closure_3 = tmp23;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp23;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_9 = async function _performRoleSubscriptionTeamCreationRedirect() {
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
          c1 = 1;
          c0 = 1;
          const obj1 = {
            value: performDeveloperPortalRedirectWithTokenHandoff(constants.DEVELOPER_PORTAL_TEAMS),
            done: false,
          };
          return obj1;
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
    } catch (tmp7) {
      c0 = tmp;
      throw tmp7;
    }
  }
};
let closure_10 = async function _performRoleSubscriptionEditPayoutRedirect(arg0) {
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
          c2 = 1;
          c1 = 1;
          const obj1 = {
            value: performDeveloperPortalRedirectWithTokenHandoff(React4.DEVELOPER_PORTAL_EDIT_PAYOUTS(closure_0)),
            done: false,
          };
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
    } catch (tmp8) {
      c1 = tmp;
      throw tmp8;
    }
  }
};
function performDeveloperPortalRedirectWithTokenHandoff() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _performDeveloperPortalRedirectWithTokenHandoff(arg0) {
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
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          c4 = 1;
          c5 = 2;
          c6 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[3], paths.paths), done: false };
          return obj1;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_2 = closure_3;
        let obj3 = new closure_130_1(closure_130_2[5])("RoleSubscriptionsLinkingUtil");
        obj3.error("Could not perform handoff for the developer portal", closure_129_2);
        c6 = 3;
        return { value: false, done: true };
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_129_1 = value.default;
          c5 = 3;
          c6 = 1;
          obj3 = { value: closure_129_1.redirectDeveloperPortalWithHandoffToken(closure_129_0), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c4 = 0;
        c6 = 3;
        return { value: true, done: true };
      }
    } catch (tmp27) {
      closure_3 = tmp27;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp27;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ RelativeMarketingURLs: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx",
);

export default {
  performRoleSubscriptionUpsellRedirect,
  performRoleSubscriptionTeamCreationRedirect() {
    const self = this;
    const apply = closure_9.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  performRoleSubscriptionEditPayoutRedirect() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  maybePerformRoleSubscriptionUpsellRedirect(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      if (tmp === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        let resolved = performRoleSubscriptionUpsellRedirect(guildId);
      }
      return resolved;
    }
    resolved = Promise.resolve(false);
  },
};
