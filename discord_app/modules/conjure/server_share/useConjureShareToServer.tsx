// === Module 13090: useConjureShareToServer ===

// Module 13090 (useConjureShareToServer)
import ConjurePublishTypes from "ConjurePublishTypes" /* 7320 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 5175 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7313 */;

const require = globalThis.__r;

require = fn;
function refreshUntilBotJoins(arg0, arg1) {
  closure_0 = arg0;
  c1 = 6;
  const timerId = setTimeout(() => {
    let integrationStatus = closure_2_7.getIntegrationStatus(closure_1_0);
    let prop;
    if (integrationStatus != null) {
      prop = integrationStatus.integration_installed;
    }
    if (true !== prop) {
      let result = closure_2_0(closure_2_2[12]).refreshConjureInstallState(closure_1_0);
      if (1 < closure_1_1) {
        closure_0 = closure_1_0;
        closure_1 = tmp7 - 1;
        let _setTimeout = setTimeout;
        let timerId = setTimeout(() => {
          let integrationStatus = closure_2_7.getIntegrationStatus(closure_1_0);
          let prop;
          if (integrationStatus != null) {
            prop = integrationStatus.integration_installed;
          }
          if (true !== prop) {
            let result = closure_2_0(closure_2_2[12]).refreshConjureInstallState(closure_1_0);
            if (1 < closure_1_1) {
              closure_0 = closure_1_0;
              closure_1 = tmp7 - 1;
              let _setTimeout = setTimeout;
              let timerId = setTimeout(() => {
                let integrationStatus = closure_2_7.getIntegrationStatus(closure_1_0);
                let prop;
                if (integrationStatus != null) {
                  prop = integrationStatus.integration_installed;
                }
                if (true !== prop) {
                  let result = closure_2_0(closure_2_2[12]).refreshConjureInstallState(closure_1_0);
                  if (1 < closure_1_1) {
                    closure_0 = closure_1_0;
                    closure_1 = tmp7 - 1;
                    let _setTimeout = setTimeout;
                    let timerId = setTimeout(() => {
                      let integrationStatus = closure_2_7.getIntegrationStatus(closure_1_0);
                      let prop;
                      if (integrationStatus != null) {
                        prop = integrationStatus.integration_installed;
                      }
                      if (true !== prop) {
                        let result = closure_2_0(closure_2_2[12]).refreshConjureInstallState(closure_1_0);
                        if (1 < closure_1_1) {
                          closure_0 = closure_1_0;
                          closure_1 = tmp7 - 1;
                          let _setTimeout = setTimeout;
                          let timerId = setTimeout(/* F105460 */ function() { ... }, 1500);
                        }
                        let obj = closure_2_0(closure_2_2[12]);
                      }
                    }, 1500);
                  }
                  let obj = closure_2_0(closure_2_2[12]);
                }
              }, 1500);
            }
            let obj = closure_2_0(closure_2_2[12]);
          }
        }, 1500);
      }
      let obj = closure_2_0(closure_2_2[12]);
    }
  }, 1500);
}
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
const isProjectOwner = fn(6954).isProjectOwner;
const Permissions = fn(1072).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/useConjureShareToServer.tsx");

export default function useConjureShareToServer(arg0, arg1, arg2) {
  _require = arg0;
  closure_1 = arg2;
  items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let obj = require("initialize");
  const tmp = _require;
  const tmp2 = conjureEligibleGuilds;
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
    available = isProjectOwner(stateFromStores);
  }
  let obj3 = require("useConjureProjects");
  const items4 = [PermissionStore];
  const items5 = [conjureEligibleGuilds];
  const guilds = tmp(tmp2[7]).useStateFromStoresArray(items4, () => conjureEligibleGuilds.filter((item) => closure_1_6.can(constants.MANAGE_GUILD, item)), items5);
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
  const tmpResult = tmp(tmp2[7]);
  [tmp13, PermissionStore] = guild.useState(false);
  const tmp8Result = _slicedToArray(guild.useState(false), 2);
  [tmp15, ConjureProjectStore] = guild.useState(null);
  const pickGuild = obj5.useCallback((arg0) => {
    closure_4(arg0);
    ConjureProjectStore(null);
  }, []);
  const items7 = [guild, arg0];
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
            let project2;
            closure_128_5 = undefined;
            closure_128_6 = undefined;
            const intl = tmp5(tmp53[9]).intl;
            const stringResult = intl.string(tmp3(tmp53[10]).qDjkvv);
            closure_128_0 = stringResult;
            if (null == guild) {
              const obj4 = { shared: false, error: stringResult };
              c5 = 3;
              const obj5 = { value: obj4, done: true };
              return obj5;
            } else {
              PermissionStore(true);
              ConjureProjectStore(null);
              closure_128_1 = tmp5(tmp53[11]).nextConjurePreviewAppPublished(tmp5, 30000);
              c3 = 1;
              const obj16 = tmp5(tmp53[11]);
              c4 = 2;
              c5 = 1;
              const obj6 = { value: tmp5(tmp53[12]).shareConjureProject(tmp5, tmp76.id), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_7 = tmp53;
          closure_128_1.cancel();
          let message;
          if (closure_128_7 != null) {
            const body = closure_128_7.body;
            if (body != null) {
              message = body.message;
            }
          }
          closure_128_2 = message;
          if (typeof closure_128_2 === "string") {
            let tmp45 = closure_128_2;
          } else {
            tmp45 = closure_128_0;
          }
          closure_128_3 = tmp45;
          closure_129_7(closure_128_3);
          closure_129_6(false);
          { shared: false, error: null }[1] = closure_128_3;
          c5 = 3;
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
            project2 = project.getProject(closure_129_0);
            if (null != project2) {
              if (!obj15.usesPreviewApp(project2)) {
                closure_128_1.cancel();
                closure_129_6(false);
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
                const obj8 = { shared: true, next: str2 };
                c5 = 3;
                const obj9 = { value: obj8, done: true };
                return obj9;
              }
              obj15 = tmp5(tmp53[13]);
            }
            c4 = 3;
            c5 = 1;
            const obj10 = { value: closure_128_1.published, done: false };
            return obj10;
          }
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else if (value) {
              c4 = 4;
              c5 = 1;
              const obj12 = {
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
              return obj12;
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
          closure_129_6(false);
          let str = "await_test_app";
          if (closure_128_6) {
            str = "publish";
          }
          const obj13 = { shared: true, next: str };
          c5 = 3;
          const obj14 = { value: obj13, done: true };
          return obj14;
        }
      } catch (tmp53) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp53;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items7);
  const items8 = [guild, arg0, arg2];
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
  }), items8);
  if (available) {
    available = stateFromStores1;
  }
  if (available) {
    available = guilds.length > 0;
  }
  return { available, guilds, guild, pickGuild, sharing, error, share, publish };
};