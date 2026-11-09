// discord_app/modules/conjure/server_share/useConjureShareToServer.tsx
import ConjurePublishTypes from "../publish/ConjurePublishTypes.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_12 = async function _waitForPublishStatus(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp3;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          const _Date3 = Date;
          const sum = Date.now() + 5000;
          closure_129_1 = sum;
          if (!isPublishable(closure_0)) {
            const _Date2 = Date;
            if (Date.now() < sum) {
              const promise = new Promise((arg0) => setTimeout(arg0, 250));
              c3 = 1;
              c4 = 1;
              const obj4 = { value: promise, done: false };
              return obj4;
            }
          }
          closure_130_13(closure_129_0);
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (!closure_130_13(closure_129_0)) {
          const _Date = Date;
        }
      }
      c4 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp24) {
      c4 = tmp;
      throw tmp24;
    }
  }
};
function isPublishable(id) {
  const publishStatus = ConjurePublishStatusStore.getPublishStatus(id);
  let publishState;
  if (publishStatus != null) {
    publishState = publishStatus.publishState;
  }
  let canPublishResult = null != publishState;
  if (canPublishResult) {
    canPublishResult = ConjurePublishTypes.canPublish(publishState);
  }
  return canPublishResult;
}
const isProjectOwner = fn(6899).isProjectOwner;
const Permissions = fn(1072).Permissions;
let items = [fn(6900).ConjureSupportedSurface.PROFILE_WIDGET, fn(6900).ConjureSupportedSurface.OVERLAY];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/useConjureShareToServer.tsx");

export default function useConjureShareToServer(arg0, arg1, arg2) {
  _require = arg0;
  importDefault = arg2;
  items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj = require("initialize");
  const items2 = [ConjureProjectStore];
  const items3 = [arg0];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    const integrationStatus = ConjureProjectStore.getIntegrationStatus(closure_0);
    let preview_ready;
    if (integrationStatus != null) {
      preview_ready = integrationStatus.preview_ready;
    }
    return true === preview_ready;
  }, items3);
  let obj2 = require("initialize");
  conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds("ConjureShareToServer");
  let available = null != stateFromStores;
  if (available) {
    available = "user" === stateFromStores.install_scope;
  }
  if (available) {
    available = null == stateFromStores.install_scope_setup;
  }
  if (available) {
    available = isProjectOwner(stateFromStores);
  }
  let obj3 = require("useConjureProjects");
  const items4 = [PermissionStore];
  const items5 = [conjureEligibleGuilds];
  const guilds = require("initialize").useStateFromStoresArray(items4, () => conjureEligibleGuilds.filter((item) => closure_1_6.can(constants.MANAGE_GUILD, item)), items5);
  const tmp9 = _slicedToArray(guild.useState(null), 2);
  _slicedToArray = tmp9[1];
  const items6 = [tmp9[0], , ];
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  items6[1] = guild_id;
  items6[2] = arg1;
  const mapped = items6.map((item) => {
    closure_0 = item;
    return guilds.find((id) => id.id === closure_0);
  });
  guild = mapped.find((item) => null != item);
  if (guild == null) {
    guild = guilds[0];
  }
  if (guild == null) {
    guild = null;
  }
  let blockedReason = null;
  if (null != stateFromStores) {
    let supported_surfaces = stateFromStores.supported_surfaces;
    if (supported_surfaces == null) {
      supported_surfaces = [];
    }
    const items7 = [];
    const arraySpreadResult = HermesBuiltin.arraySpread(supported_surfaces, 0);
    let prop = stateFromStores.preview_supported_surfaces;
    if (prop == null) {
      prop = [];
    }
    HermesBuiltin.arraySpread(prop, arraySpreadResult);
    blockedReason = null;
    if (items7.some((item) => items.includes(item))) {
      let intl = tmp(tmp2[10]).intl;
      blockedReason = intl.string(require("../intl/ConjureUntranslated.messages.js")["/Ow58q"]);
    }
  }
  const tmpResult = require("initialize");
  [tmp22, PermissionStore] = guild.useState(false);
  const tmp8Result = _slicedToArray(guild.useState(false), 2);
  [tmp24, ConjureProjectStore] = guild.useState(null);
  const pickGuild = obj5.useCallback((arg0) => {
    closure_4(arg0);
    ConjureProjectStore(null);
  }, []);
  const items8 = [guild, arg0];
  const share = obj5.useCallback(guilds(function*() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            const intl = tmp5(tmp41[10]).intl;
            const stringResult = intl.string(tmp3(tmp41[11]).qDjkvv);
            closure_128_0 = stringResult;
            if (null == guild) {
              const obj4 = { shared: false, error: stringResult };
              c5 = 3;
              const obj5 = { value: obj4, done: true };
              return obj5;
            } else {
              PermissionStore(true);
              ConjureProjectStore(null);
              closure_128_1 = tmp5(tmp41[12]).nextConjurePreviewAppPublished(tmp5, 30000);
              c3 = 1;
              const tmp49Result = tmp5(tmp41[12]);
              c4 = 3;
              c5 = 1;
              const obj6 = { value: tmp5(tmp41[13]).shareConjureProject(tmp5, tmp53.id), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_5 = tmp41;
          closure_128_1.cancel();
          let message;
          if (closure_128_5 != null) {
            const body = closure_128_5.body;
            if (body != null) {
              message = body.message;
            }
          }
          closure_128_2 = message;
          if (typeof closure_128_2 === "string") {
            let tmp27 = closure_128_2;
          } else {
            tmp27 = closure_128_0;
          }
          closure_128_3 = tmp27;
          closure_129_7(closure_128_3);
          closure_129_6(false);
          { shared: false, error: null }[1] = closure_128_3;
          c5 = 3;
        } else {
          if (2 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else if (value) {
              c4 = 4;
              c5 = 1;
              const obj8 = {
                value: (function waitForPublishStatus() {
                            const self = this;
                            const apply = closure_1_12.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(closure_129_0),
                done: false
              };
              return obj8;
            }
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              c3 = 0;
              c4 = 2;
              c5 = 1;
              const obj10 = { value: closure_128_1.published, done: false };
              return obj10;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          closure_128_4 = value;
          closure_129_6(false);
          const obj11 = { shared: true, testAppReady: closure_128_4 };
          c5 = 3;
          const obj12 = { value: obj11, done: true };
          return obj12;
        }
      } catch (tmp41) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp41;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items8);
  const items9 = [guild, arg0, arg2];
  const publish = obj5.useCallback(guilds(function*() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else if (null != closure_1) {
            if (null != guild) {
              c2 = 1;
              const obj5 = { platform: tmp18.platform, guildId: tmp7.id };
              c1 = 2;
              v3 = 1;
              const obj6 = { value: v3(c2[14]).runConjurePublishAction(closure_0, "share", obj5), done: false };
              return obj6;
            }
          }
        } else {
          if (1 === tmp6) {
            c2 = 0;
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c2 = 0;
          }
          c2 = 0;
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        }
        v3 = 3;
      } catch (tmp11) {
        if (tmp3 === c2) {
          v3 = tmp2;
          throw tmp11;
        } else {
          c1 = tmp;
        }
      }
    }
  }), items9);
  if (available) {
    available = stateFromStores1;
  }
  if (available) {
    available = guilds.length > 0;
  }
  return { available, guilds, guild, pickGuild, blockedReason, sharing, error, share, publish };
};