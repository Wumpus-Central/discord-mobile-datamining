// discord_app/modules/conjure/server_widgets/useConjureServerWidgetOffers.tsx
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import UserProfileApplicationWidgetTypes from "../../user_profile/UserProfileApplicationWidgetTypes.tsx";
import ConjureServerWidgetActionCreators from "ConjureServerWidgetActionCreators.tsx";
import useAddableWidgets from "../../user_profile/hooks/useAddableWidgets.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationWidgetConfigStore from "../../application_widget/ApplicationWidgetConfigStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureServerWidgetStore from "ConjureServerWidgetStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_10 = async function _loadWidgetConfigs(arg0, arg1) {
  dependencyMap = arg0;
  closure_1 = arg1;
  c11 = 0;
  c12 = 0;
  c9 = 0;
  return (async (arg0, value) => {
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c12 = 2;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_8 = tmp4;
            closure_136_0 = closure_1;
            closure_136_1 = undefined;
            closure_136_3 = undefined;
            closure_136_2 = async function _loop() {
              if (c6 === 2) {
                c6 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp7 === 3) {
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
                  c6 = 2;
                  if (0 === c5) {
                    if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c6 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      closure_1 = tmp8;
                      closure_129_0 = undefined;
                      if (dependencyMap()) {
                        c6 = 3;
                        const obj5 = { value: { v: "Array" }, done: true };
                        return obj5;
                      } else {
                        c4 = 1;
                        c5 = 2;
                        c6 = 1;
                        const obj6 = { value: closure_0(tmp3[7]).fetchWidgetConfigs(closure_2_3), done: false };
                        return obj6;
                      }
                    }
                  } else if (1 === tmp8) {
                    c4 = 0;
                    closure_129_1 = closure_3;
                    if (closure_129_1 instanceof closure_0(tmp3[8]).HTTPResponseError) {
                      if (429 === closure_129_1.status) {
                        const retryAfter = closure_129_1.retryAfter;
                        closure_0 = retryAfter;
                        if (retryAfter == null) {
                          closure_0 = closure_0(tmp3[8]).DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS;
                        }
                        closure_129_0 = closure_0;
                        const promise = new Promise((arg0) => setTimeout(arg0, 1000 * closure_1_0));
                        c5 = 3;
                        c6 = 1;
                        const obj7 = { value: promise, done: false };
                        return obj7;
                      }
                    }
                    c6 = 3;
                    return { value: 0, done: true };
                  } else {
                    if (2 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c4 = 0;
                        c6 = 3;
                        const obj9 = { value, done: true };
                        return obj9;
                      } else {
                        c4 = 0;
                      }
                    } else if (3 === tmp8) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c6 = 3;
                        const obj10 = { value, done: true };
                        return obj10;
                      } else if (closure_130_0()) {
                        c6 = 3;
                        const obj11 = { value: { v: "Array" }, done: true };
                        return obj11;
                      } else {
                        c4 = 2;
                        c5 = 5;
                        c6 = 1;
                        const obj12 = { value: closure_0(tmp3[7]).fetchWidgetConfigs(closure_130_3), done: false };
                        return obj12;
                      }
                    } else {
                      if (4 === tmp8) {
                        c4 = 0;
                      } else if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 !== 2) {
                        c4 = 0;
                      }
                      c4 = 0;
                      c6 = 3;
                      const obj = { value, done: true };
                      return obj;
                    }
                    c6 = 3;
                  }
                } catch (tmp36) {
                  closure_3 = tmp36;
                  if (tmp4 === c4) {
                    c6 = tmp2;
                    throw tmp36;
                  } else if (tmp === tmp38) {
                    c5 = tmp;
                  } else {
                    c5 = tmp5;
                  }
                }
              }
            };
            closure_3 = dependencyMap;
            closure_3 = dependencyMap;
            closure_2 = dependencyMap[Symbol.iterator]();
            if (closure_2 === undefined) {
              c12 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              c9 = 1;
              closure_136_3 = tmp33;
              iter4 = closure_136_2()[tmp51.iterator]();
              HermesBuiltin.ensureObject("iterator is not an object");
              next = iter4.next;
              closure_4 = undefined;
              const tmp57 = closure_136_2();
            }
          }
        } else if (1 === tmp7) {
          c9 = 0;
          closure_2.return();
          throw closure_10;
        } else {
          if (2 === tmp7) {
            c9 = 2;
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else {
              closure_4 = value;
              if (arg0 === 2) {
                closure_4 = value;
                c9 = 1;
                const method = HermesBuiltin.getMethod("return");
                if (method === undefined) {
                  c9 = 0;
                  closure_2.return();
                  c12 = 3;
                  let obj4 = { value, done: true };
                  return obj4;
                } else {
                  const iter2 = method(closure_4);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  if (iter2.done) {
                    c9 = 0;
                    closure_2.return();
                    c12 = 3;
                    let obj = { value: iter2.value, done: true };
                    return obj;
                  } else {
                    c11 = 2;
                    c12 = 1;
                    return iter2;
                  }
                }
              } else {
                c9 = 1;
                const tmp19 = value;
              }
            }
          } else {
            c9 = 1;
            const method1 = HermesBuiltin.getMethod("throw");
            if (method1 === undefined) {
              const method2 = HermesBuiltin.getMethod("return");
              if (method2 !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              const iter = method1(tmp9);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              if (iter.done) {
                iter3 = iter;
              } else {
                c11 = 2;
                c12 = 1;
                return iter;
              }
            }
            tmp9 = closure_10;
          }
          value = iter3.value;
          closure_136_1 = value;
          if (0 !== value) {
            if (closure_136_1) {
              c9 = 0;
              closure_2.return();
              c12 = 3;
              let obj5 = { value: closure_136_1.v, done: true };
              return obj5;
            }
          }
          c9 = 0;
        }
        iter3 = next(tmp19);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        if (!iter3.done) {
          c11 = 2;
          c12 = 1;
          return iter3;
        }
      } catch (tmp44) {
        closure_10 = tmp44;
        if (tmp3 === c9) {
          c12 = tmp2;
          throw tmp44;
        } else if (tmp === tmp46) {
          c11 = tmp;
        } else {
          c11 = tmp2;
        }
      }
    }
  })();
};
let closure_9 = new BackoffDefault(30000, 300000);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_widgets/useConjureServerWidgetOffers.tsx");

export default function useConjureServerWidgetOffers() {
  items = [GuildStore, stateFromStores2(stateFromStores4[10]).ApexExperimentStore];
  const stateFromStores = stateFromStores2(stateFromStores4[9]).useStateFromStores(items, () =>
    stateFromStores2(stateFromStores4[11]).hasConjureExperimentGuild(
      GuildStore.getGuildsArray(),
      "useConjureServerWidgetOffers",
    ),
  );
  closure_129_0 = stateFromStores;
  let obj = stateFromStores2(stateFromStores4[9]);
  let items1 = [ConjureServerWidgetStore];
  const stateFromStores1 = stateFromStores2(stateFromStores4[9]).useStateFromStores(items1, () =>
    ConjureServerWidgetStore.getFetchState(),
  );
  closure_129_1 = stateFromStores1;
  const items2 = [stateFromStores, stateFromStores1];
  const effect = noop.useEffect(() => {
    if ("success" === closure_1) {
      closure_9.succeed();
    }
    if (stateFromStores2) {
      if ("unattempted" === closure_1) {
        const conjureServerProfileWidgets = ConjureServerWidgetActionCreators.fetchConjureServerProfileWidgets();
      } else {
        let pending = "error" !== closure_1;
        if (!pending) {
          pending = closure_9.pending;
        }
        if (!pending) {
          closure_9.fail(() => stateFromStores2(stateFromStores4[12]).fetchConjureServerProfileWidgets());
        }
      }
    }
  }, items2);
  const obj2 = stateFromStores2(stateFromStores4[9]);
  const items3 = [ConjureServerWidgetStore];
  stateFromStores2 = stateFromStores2(stateFromStores4[9]).useStateFromStores(items3, () =>
    ConjureServerWidgetStore.getProjects(),
  );
  const items4 = [stateFromStores2];
  const effect1 = noop.useEffect(() => {
    c0 = false;
    (function loadWidgetConfigs() {
      const self = this;
      const apply = closure_1_10.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(
      stateFromStores2.map((application_id) => application_id.application_id),
      () => c0,
    );
    return () => {
      c0 = true;
    };
  }, items4);
  const obj4 = stateFromStores2(stateFromStores4[9]);
  const items5 = [UserStore];
  const stateFromStores3 = stateFromStores2(stateFromStores4[9]).useStateFromStores(items5, () =>
    currentUser.getCurrentUser(),
  );
  let id;
  const obj5 = stateFromStores2(stateFromStores4[9]);
  if (stateFromStores3 != null) {
    id = stateFromStores3.id;
  }
  const tmp10Result = require("useUserProfileWidgets")(id);
  importDefault = tmp10Result;
  let tmp10 = require("useUserProfileWidgets");
  const items6 = [ApplicationWidgetConfigStore];
  stateFromStores4 = stateFromStores2(stateFromStores4[9]).useStateFromStores(items6, () =>
    allConfigsByApplication.getAllConfigsByApplication(),
  );
  const tmpResult = stateFromStores2(stateFromStores4[9]);
  const items7 = [GuildStore];
  const stateFromStores5 = stateFromStores2(stateFromStores4[9]).useStateFromStores(items7, () =>
    GuildStore.getGuilds(),
  );
  const items8 = [stateFromStores2, stateFromStores4, stateFromStores5, tmp10Result];
  return noop.useMemo(() => {
    const found = closure_1.filter((item) => item instanceof stateFromStores2(6048).ApplicationWidget);
    const map = new Map();
    const iter = stateFromStores2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      application_id = nextResult.application_id;
      let tmp3 = application_id;
      let guild_id = nextResult.guild_id;
      let arr2 = stateFromStores4[application_id];
      let found1;
      if (arr2 != null) {
        found1 = arr2.find(
          (status) => status.status === stateFromStores2(14823).ApplicationWidgetConfigStatus.PUBLISHED,
        );
      }
      let tmp6 = found1;
      let result = null != guild_id;
      if (result) {
        result = null != stateFromStores5[guild_id];
      }
      if (result) {
        result = !set.has(tmp3);
      }
      if (result) {
        result = null != tmp6;
      }
      if (result) {
        let obj3 = useAddableWidgets;
        result = obj3.hasAddableApplicationWidgetSurfaces(tmp6);
      }
      if (result) {
        let items1 = map.get(guild_id);
        if (items1 == null) {
          items1 = [];
        }
        items = [];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, 0);
        let obj = { applicationId: null };
        obj.applicationId = tmp3;
        let tmp23 = new.target;
        let tmp24 = new.target;
        let applicationWidget = new UserProfileApplicationWidgetTypes.ApplicationWidget(obj);
        items[arraySpreadResult] = applicationWidget;
        let result1 = map.set(guild_id, items);
      }
      continue;
    }
    return Array.from(map, (arg0) => {
      [tmp, tmp2] = arg0;
      const obj = { guildId: tmp, guildName: null, widgets: null };
      let str;
      if (stateFromStores5[tmp] != null) {
        str = tmp3.name;
      }
      if (str == null) {
        str = "";
      }
      obj.guildName = str;
      obj.widgets = tmp2;
      return obj;
    });
  }, items8);
}
