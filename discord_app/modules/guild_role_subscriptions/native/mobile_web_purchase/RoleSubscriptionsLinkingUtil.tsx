// discord_app/modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import ME from "../../../../Constants.tsx";
import { StaticChannelRoute } from "../../../channel/ChannelConstants.tsx";

const require = arg1;
function performRoleSubscriptionUpsellRedirect(guildId) {
  const self = this;
  const apply = _performRoleSubscriptionUpsellRedirect.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _performRoleSubscriptionUpsellRedirect() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (constants === 2) {
        constants = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
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
          constants = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let table = tmp3;
              let lib = tmp5;
              let callback;
              lib = undefined;
              callback = c5.CHANNEL(callback, constants.ROLE_SUBSCRIPTIONS);
              c4 = 1;
              c5 = 2;
              constants = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(closure_1_2[4])(closure_1_2[3], closure_1_2.paths);
              return obj1;
            }
          } else if (1 === tmp8) {
            c4 = 0;
            table = closure_3;
            let obj3 = new lib(table[5])("RoleSubscriptionsLinkingUtil");
            obj3.error("Could not perform handoff", table);
            constants = 3;
            return { value: false, done: true };
          } else if (2 === tmp8) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              constants = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              lib = arg1.default;
              c5 = 3;
              constants = 1;
              obj3 = { value: null, done: false };
              obj3[0] = lib.redirectWithHandoffToken(callback, { forceExternalBrowser: true });
              return obj3;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c4 = 0;
            constants = 3;
            return { value: true, done: true };
          }
        } catch (tmp23) {
          closure_3 = tmp23;
          if (tmp4 === c4) {
            constants = tmp2;
            throw tmp23;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _performRoleSubscriptionTeamCreationRedirect() {
  const self = this;
  const tmp = callback(function*() {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 1;
            c0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_11(closure_1_4.DEVELOPER_PORTAL_TEAMS);
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          c0 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp7) {
        c0 = tmp;
        throw tmp7;
      }
    }
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
function _performRoleSubscriptionEditPayoutRedirect() {
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
              c2 = 1;
              c1 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_11(closure_1_4.DEVELOPER_PORTAL_EDIT_PAYOUTS(closure_0));
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
        } catch (tmp8) {
          c1 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function performDeveloperPortalRedirectWithTokenHandoff() {
  const self = this;
  const apply = _performDeveloperPortalRedirectWithTokenHandoff.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _performDeveloperPortalRedirectWithTokenHandoff() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let table = tmp3;
              let lib = tmp7;
              lib = undefined;
              c4 = 1;
              c5 = 2;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(closure_1_2[4])(closure_1_2[3], closure_1_2.paths);
              return obj1;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            table = closure_3;
            let obj3 = new lib(table[5])("RoleSubscriptionsLinkingUtil");
            obj3.error("Could not perform handoff for the developer portal", table);
            c6 = 3;
            return { value: false, done: true };
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              lib = arg1.default;
              c5 = 3;
              c6 = 1;
              obj3 = { value: null, done: false };
              obj3[0] = lib.redirectDeveloperPortalWithHandoffToken(callback);
              return obj3;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
({ RelativeMarketingURLs: c4, Routes: c5 } = ME);
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/mobile_web_purchase/RoleSubscriptionsLinkingUtil.tsx");

export default {
  performRoleSubscriptionUpsellRedirect,
  performRoleSubscriptionTeamCreationRedirect() {
    const self = this;
    const apply = _performRoleSubscriptionTeamCreationRedirect.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  performRoleSubscriptionEditPayoutRedirect() {
    const self = this;
    const apply = _performRoleSubscriptionEditPayoutRedirect.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  maybePerformRoleSubscriptionUpsellRedirect(closure_2) {
    const guildId = closure_2.guildId;
    if (null != guildId) {
      if (tmp === StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        let resolved = performRoleSubscriptionUpsellRedirect(guildId);
      }
      return resolved;
    }
    resolved = Promise.resolve(false);
  }
};