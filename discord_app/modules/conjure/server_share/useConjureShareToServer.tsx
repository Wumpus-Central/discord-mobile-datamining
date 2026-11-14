// discord_app/modules/conjure/server_share/useConjureShareToServer.tsx
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import ConjurePublishTypes from "../publish/ConjurePublishTypes.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

require = fn;
function refreshUntilBotJoins(arg0, arg1) {
  closure_0 = arg0;
  c1 = 6;
  const timerId = setTimeout(() => {
    let integrationStatus = closure_2_8.getIntegrationStatus(closure_1_0);
    let prop;
    if (integrationStatus != null) {
      prop = integrationStatus.integration_installed;
    }
    if (true !== prop) {
      let result = closure_2_0(closure_2_2[15]).refreshConjureInstallState(closure_1_0);
      if (1 < closure_1_1) {
        closure_0 = closure_1_0;
        closure_1 = tmp7 - 1;
        let _setTimeout = setTimeout;
        let timerId = setTimeout(() => {
          let integrationStatus = closure_2_8.getIntegrationStatus(closure_1_0);
          let prop;
          if (integrationStatus != null) {
            prop = integrationStatus.integration_installed;
          }
          if (true !== prop) {
            let result = closure_2_0(closure_2_2[15]).refreshConjureInstallState(closure_1_0);
            if (1 < closure_1_1) {
              closure_0 = closure_1_0;
              closure_1 = tmp7 - 1;
              let _setTimeout = setTimeout;
              let timerId = setTimeout(() => {
                let integrationStatus = closure_2_8.getIntegrationStatus(closure_1_0);
                let prop;
                if (integrationStatus != null) {
                  prop = integrationStatus.integration_installed;
                }
                if (true !== prop) {
                  let result = closure_2_0(closure_2_2[15]).refreshConjureInstallState(closure_1_0);
                  if (1 < closure_1_1) {
                    closure_0 = closure_1_0;
                    closure_1 = tmp7 - 1;
                    let _setTimeout = setTimeout;
                    let timerId = setTimeout(() => {
                      let integrationStatus = closure_2_8.getIntegrationStatus(closure_1_0);
                      let prop;
                      if (integrationStatus != null) {
                        prop = integrationStatus.integration_installed;
                      }
                      if (true !== prop) {
                        let result = closure_2_0(closure_2_2[15]).refreshConjureInstallState(closure_1_0);
                        if (1 < closure_1_1) {
                          closure_0 = closure_1_0;
                          closure_1 = tmp7 - 1;
                          let _setTimeout = setTimeout;
                          let timerId = setTimeout(/* F106671 */ function() { ... }, 1500);
                        }
                        let obj = closure_2_0(closure_2_2[15]);
                      }
                    }, 1500);
                  }
                  let obj = closure_2_0(closure_2_2[15]);
                }
              }, 1500);
            }
            let obj = closure_2_0(closure_2_2[15]);
          }
        }, 1500);
      }
      let obj = closure_2_0(closure_2_2[15]);
    }
  }, 1500);
}
let closure_13 = async function _waitForPublishStatus(arg0) {
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
          closure_130_14(closure_129_0);
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (!closure_130_14(closure_129_0)) {
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
let isProjectOwner = fn(7017).isProjectOwner;
const Permissions = fn(1072).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureShareToServer.tsx");

export default function useConjureShareToServer(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg2;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let first;
  let guilds;
  closure_7 = undefined;
  guild = undefined;
  isProjectOwner = undefined;
  c10 = undefined;
  items = [guild];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj = require("initialize");
  const tmp = _require;
  const tmp2 = flag;
  const items2 = [guild];
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
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds("ConjureShareToServer");
  let available = null != stateFromStores;
  if (available) {
    available = "user" === stateFromStores.install_scope;
  }
  if (available) {
    available = isProjectOwner(stateFromStores);
  }
  first = conjureEligibleGuilds(first.useState(() => {
    if (flag) {
      if (null != stateFromStores) {
        const result = ConjureProjectTypes.conjureProjectServerIds(tmp);
      }
      return [];
    }
  }), 1)[0];
  let obj3 = require("useConjureProjects");
  const items4 = [closure_7];
  const items5 = [conjureEligibleGuilds, first];
  guilds = tmp(tmp2[10]).useStateFromStoresArray(items4, () => conjureEligibleGuilds.filter((id) => {
    let canResult = closure_7.can(constants.MANAGE_GUILD, id);
    if (canResult) {
      canResult = !first.includes(id.id);
    }
    return canResult;
  }), items5);
  const tmp10 = conjureEligibleGuilds(first.useState(null), 2);
  closure_7 = tmp10[1];
  const items6 = [tmp10[0], , ];
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
  const tmpResult = tmp(tmp2[10]);
  [tmp14, c9] = conjureEligibleGuilds(first.useState(false), 2);
  const tmp8Result = conjureEligibleGuilds(first.useState(false), 2);
  [tmp16, c10] = conjureEligibleGuilds(first.useState(null), 2);
  const pickGuild = obj4.useCallback((arg0) => {
    closure_7(arg0);
    _undefined(null);
  }, []);
  const items7 = [flag, guild, arg0];
  const share = obj4.useCallback(stateFromStores(function*() {
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
            let project2;
            closure_128_5 = undefined;
            closure_128_6 = undefined;
            const intl = tmp5(tmp63[12]).intl;
            const stringResult = intl.string(tmp3(tmp63[13]).qDjkvv);
            closure_128_0 = stringResult;
            if (null == guild) {
              const obj4 = { shared: false, error: stringResult };
              c5 = 3;
              const obj5 = { value: obj4, done: true };
              return obj5;
            } else {
              _undefined(true);
              publishStatus(null);
              let result = null;
              if (!flag) {
                result = tmp5(tmp63[14]).nextConjurePreviewAppPublished(tmp5, 30000);
                const obj12 = tmp5(tmp63[14]);
              }
              closure_128_1 = result;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj6 = { value: tmp5(tmp63[15]).shareConjureProject(tmp5, tmp88.id), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_7 = tmp63;
          if (closure_128_1 != null) {
            obj11.cancel();
          }
          let message;
          if (closure_128_7 != null) {
            const body = closure_128_7.body;
            if (body != null) {
              message = body.message;
            }
          }
          closure_128_2 = message;
          if (typeof closure_128_2 === "string") {
            let tmp48 = closure_128_2;
          } else {
            tmp48 = closure_128_0;
          }
          closure_128_3 = tmp48;
          closure_129_10(closure_128_3);
          closure_129_9(false);
          { shared: false, error: null }[1] = closure_128_3;
          c5 = 3;
          obj11 = closure_128_1;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c3 = 0;
            if (null == closure_128_1) {
              closure_129_9(false);
              c5 = 3;
              const obj8 = { value: { shared: true, next: "added" }, done: true };
              return obj8;
            } else {
              project2 = project.getProject(closure_129_0);
              if (null != project2) {
                if (!obj19.usesPreviewApp(project2)) {
                  closure_128_1.cancel();
                  closure_129_9(false);
                  publishStatus = publishStatus.getPublishStatus(closure_129_0);
                  let publishState;
                  if (publishStatus != null) {
                    publishState = publishStatus.publishState;
                  }
                  closure_128_5 = "not_live" === publishState;
                  if (!closure_128_5) {
                    refreshUntilBotJoins(closure_129_0, 6);
                  }
                  let str2 = "added";
                  if (closure_128_5) {
                    str2 = "publish";
                  }
                  const obj9 = { shared: true, next: str2 };
                  c5 = 3;
                  const obj10 = { value: obj9, done: true };
                  return obj10;
                }
                obj19 = tmp5(tmp63[8]);
              }
              c4 = 3;
              c5 = 1;
              const obj14 = { value: closure_128_1.published, done: false };
              return obj14;
            }
          }
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else if (value) {
              c4 = 4;
              c5 = 1;
              const obj16 = {
                value: (function waitForPublishStatus() {
                            const self = this;
                            const apply = closure_1_13.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(closure_129_0),
                done: false
              };
              return obj16;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          closure_128_6 = value;
          closure_129_9(false);
          let str = "await_test_app";
          if (closure_128_6) {
            str = "publish";
          }
          const obj17 = { shared: true, next: str };
          c5 = 3;
          const obj18 = { value: obj17, done: true };
          return obj18;
        }
      } catch (tmp63) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp63;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items7);
  const items8 = [guild, arg0, arg2];
  const publish = obj4.useCallback(stateFromStores(function*() {
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
              const obj6 = { value: v3(c2[16]).runConjurePublishAction(closure_0, "share", obj5), done: false };
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
  }), items8);
  if (available) {
    available = stateFromStores1;
  }
  if (available) {
    available = guilds.length > 0;
  }
  return { available, guilds, guild, pickGuild, sharing, error, share, publish };
};
export function canAddConjureProjectToAnotherServer(project, removeTarget, ConjureChatMoreSheet) {
  _require = ConjureChatMoreSheet;
  const guild_ids = project.guild_ids;
  const tmp = isProjectOwner(project);
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = null == removeTarget;
  }
  if (!tmp2) {
    tmp2 = null == guild_ids;
  }
  let tmp6 = !tmp2;
  if (!tmp2) {
    let someResult = guild_ids.length < require("ConjureProjectTypes").MAX_PROJECT_SERVERS;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(GuildStore.getGuilds());
      someResult = values.some((id) => {
        const hasItem = guild_ids.includes(id.id);
        let result = !hasItem;
        if (!hasItem) {
          result = ConjureUtils.canStartConjureProject(id, closure_0);
        }
        return result;
      });
    }
    tmp6 = someResult;
  }
  return tmp6;
}