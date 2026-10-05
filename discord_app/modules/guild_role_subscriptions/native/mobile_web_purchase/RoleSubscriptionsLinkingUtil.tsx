// discord_app/modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx
import ChannelConstants from "../../../channel/ChannelConstants.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c0, c1, c2, c5, c6, closure_3;

let closure_4;
let hasOwnProperty;
function performRoleSubscriptionUpsellRedirect() {
  return obj(...arguments);
}
let obj = function _performRoleSubscriptionUpsellRedirect() {
  let paths;
  obj = _asyncToGenerator(async function (arg0) {
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
        let closure_2;
        let closure_1;
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
            closure_2 = tmp;
            closure_0 = undefined;
            closure_1 = undefined;
            closure_0 = hasOwnProperty.CHANNEL(closure_0, constants.ROLE_SUBSCRIPTIONS);
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: require("asyncRequire")(paths[3], paths.paths), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_2 = closure_3;
          const self = this;
          const self2 = this;
          const obj4 = new closure_130_1(closure_130_2[5])("RoleSubscriptionsLinkingUtil");
          obj4.error("Could not perform handoff", closure_2);
          c6 = 3;
          return { value: false, done: true };
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value.default;
            const result = closure_1.redirectWithHandoffToken(closure_0, { forceExternalBrowser: true });
            c5 = 3;
            c6 = 1;
            const obj7 = { value: result, done: false };
            return obj7;
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
      } catch (tmp18) {
        closure_3 = tmp18;
        if (0 === c4) {
          c6 = 3;
          throw tmp18;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _performRoleSubscriptionTeamCreationRedirect() {
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
            c1 = 1;
            c0 = 1;
            const obj4 = {
              value: performDeveloperPortalRedirectWithTokenHandoff(constants.DEVELOPER_PORTAL_TEAMS),
              done: false,
            };
            return obj4;
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
      } catch (tmp6) {
        c0 = 3;
        throw tmp6;
      }
    }
  });
  return obj(...arguments);
};
obj = function _performRoleSubscriptionEditPayoutRedirect() {
  obj = _asyncToGenerator(async (arg0) => {
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
            c2 = 1;
            c1 = 1;
            const obj4 = {
              value: performDeveloperPortalRedirectWithTokenHandoff(React32.DEVELOPER_PORTAL_EDIT_PAYOUTS(closure_0)),
              done: false,
            };
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
      } catch (tmp7) {
        c1 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
function performDeveloperPortalRedirectWithTokenHandoff() {
  return obj(...arguments);
}
obj = function _performDeveloperPortalRedirectWithTokenHandoff() {
  let paths;
  obj = _asyncToGenerator(async function (arg0) {
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
        let closure_2;
        let closure_1;
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
            closure_2 = tmp;
            closure_1 = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: require("asyncRequire")(paths[3], paths.paths), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_2 = closure_3;
          const self = this;
          const self2 = this;
          const obj4 = new closure_130_1(closure_130_2[5])("RoleSubscriptionsLinkingUtil");
          obj4.error("Could not perform handoff for the developer portal", closure_2);
          c6 = 3;
          return { value: false, done: true };
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value.default;
            c5 = 3;
            c6 = 1;
            const obj7 = {
              value: closure_1.redirectDeveloperPortalWithHandoffToken(
                closure_0,
                closure_130_0(closure_130_2[6]).LoginHandoffSource.ROLE_SUBSCRIPTION_SETTING,
              ),
              done: false,
            };
            return obj7;
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
      } catch (tmp25) {
        closure_3 = tmp25;
        if (0 === c4) {
          c6 = 3;
          throw tmp25;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ RelativeMarketingURLs: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
obj = {
  performRoleSubscriptionUpsellRedirect,
  performRoleSubscriptionTeamCreationRedirect() {
    return obj(...arguments);
  },
  performRoleSubscriptionEditPayoutRedirect() {
    return obj(...arguments);
  },
  maybePerformRoleSubscriptionUpsellRedirect(guildId) {
    guildId = guildId.guildId;
    if (null != guildId) {
      let resolved;
      if (tmp === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        resolved = performRoleSubscriptionUpsellRedirect(guildId);
      }
      return resolved;
    }
    resolved = Promise.resolve(false);
  },
};
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx",
);

export default obj;
