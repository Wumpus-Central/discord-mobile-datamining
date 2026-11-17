// === Module 14565: useConjureShareServers ===

// Module 14565 (useConjureShareServers)
import ConjureProjectTypes from "ConjureProjectTypes" /* 7026 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5181 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/useConjureShareServers.tsx");

export default function useConjureShareServers(arg0, arg1, arg2) {
  _require = arg0;
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  let stateFromStores;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  let found;
  let pickGuild;
  let share;
  let publish;
  closure_9 = undefined;
  let str2;
  closure_11 = undefined;
  items = [share];
  const items1 = [arg0];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    let project = ConjureProjectStore.getProject(closure_0);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  const first = _slicedToArray(found.useState(() => {
    let install_scope;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    return "guild" === install_scope;
  }), 1)[0];
  const tmp7 = flag(stateFromStores[6])(arg0, arg1, arg2, first);
  require("conjureRemoveApp");
  if (first) {
    let result = null != stateFromStores;
    if (result) {
      result = tmp(tmp2[6]).canAddConjureProjectToAnotherServer(stateFromStores, tmp10, "ConjureShareServers");
      const tmpResult = tmp(tmp2[6]);
    }
    let tmp11 = result;
  } else {
    tmp11 = null != arg2 && tmp7.available;
  }
  const arr3 = tmp11 ? tmp7.guilds : [];
  let obj = require("initialize");
  const tmp3 = share;
  const tmp5 = _slicedToArray;
  const items2 = [tmp3, pickGuild];
  const items3 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items2, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    if (null != project) {
      if ("guild" === project.install_scope) {
        const result = ConjureProjectTypes.conjureProjectServerIds(project);
        const mapped = result.map((item) => guild.getGuild(item));
        found = mapped.filter((item) => null != item);
      }
      return [];
    }
  }, items3);
  const tmpResult3 = require("initialize");
  [c3, c4] = tmp5(found.useState(() => {
    let tmp = null;
    if (flag) {
      let guild_id;
      if (stateFromStores != null) {
        guild_id = stateFromStores.guild_id;
      }
      if (guild_id == null) {
        guild_id = null;
      }
      tmp = guild_id;
    }
    return tmp;
  }), 2);
  found = arr3.find((id) => id.id === c3);
  if (found == null) {
    found = null;
  }
  pickGuild = tmp7.pickGuild;
  share = tmp7.share;
  publish = tmp7.publish;
  const items4 = [pickGuild];
  const callback = obj2.useCallback((arg0) => {
    _undefined(arg0);
    if (null != arg0) {
      pickGuild(arg0);
    }
  }, items4);
  closure_9 = obj2.useRef(false);
  const effect = obj2.useEffect(() => {
    closure_9.current = false;
    return () => {
      closure_1_9.current = true;
    };
  }, []);
  str2 = undefined;
  if (stateFromStores != null) {
    str2 = stateFromStores.name;
  }
  if (str2 == null) {
    str2 = "";
  }
  closure_11 = obj2.useRef(false);
  _require = asyncGeneratorStep(async (arg0, arg1) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c6 = 2;
        if (0 === name) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp5;
            closure_3 = tmp2;
            closure_131_2 = undefined;
            closure_131_0 = closure_0;
            closure_131_1 = closure_1;
            let flag3 = closure_2;
            if (closure_2 === undefined) {
              flag3 = false;
            }
            closure_131_2 = flag3;
            closure_131_3 = undefined;
            name = 1;
            c6 = 1;
            return { value: "Path", done: true };
          }
        } else {
          if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else if (null != name) {
              if (!ref2.current) {
                ref2.current = true;
                name = 2;
                c6 = 1;
                const obj5 = { value: share(), done: false };
                return obj5;
              }
            } else {
              closure_131_0();
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_131_3 = value;
              if (closure_131_3.shared) {
                if (!ref.current) {
                  closure_131_0();
                  if ("publish" !== closure_131_3.next) {
                    const intl = closure_0(stateFromStores[9]).intl;
                    if ("added" === closure_131_3.next) {
                      let o2xHEb = flag(stateFromStores[10])["4WtS+v"];
                    } else {
                      o2xHEb = flag(stateFromStores[10]).o2xHEb;
                    }
                    const obj7 = { app, server: name.name };
                    closure_131_1(intl.formatToPlainString(o2xHEb, obj7));
                  } else {
                    name = 3;
                    c6 = 1;
                    const obj8 = { value: publish(closure_131_2), done: false };
                    return obj8;
                  }
                }
              } else {
                ref2.current = false;
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c6 = 3;
        }
      } catch (tmp42) {
        c6 = tmp;
        throw tmp42;
      }
    }
  });
  const items5 = [found, share, publish, str2];
  let obj3 = { current: stateFromStoresArray, candidates: arr3, picked: found, pick: callback, changeRows: null, sharing: null, error: null, finish: null };
  const callback1 = obj2.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items5);
  if (null == found) {
    let items6 = [];
  } else {
    const tmpResult4 = tmp(tmp2[11]);
    if (first) {
      items6 = tmpResult4.conjureAddToAnotherServerRows(stateFromStores);
    } else {
      items6 = tmpResult4.conjureShareRows(stateFromStores);
    }
  }
  obj3.changeRows = items6;
  ({ sharing: obj5.sharing, error: obj5.error } = tmp7);
  obj3.finish = callback1;
  return obj3;
};