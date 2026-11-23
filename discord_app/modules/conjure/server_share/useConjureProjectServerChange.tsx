// === Module 18294: useConjureProjectServerChange ===

// Module 18294 (useConjureProjectServerChange)
import conjureServerProject from "conjureServerProject" /* 6838 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import conjureChangeRows from "conjureChangeRows" /* 18296 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6621 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureProjectServerChange.tsx");

export default function useConjureProjectServerChange(id) {
  _require = id;
  items = [ConjureProjectStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  closure_129_0 = id;
  let obj = require("initialize");
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds("ConjureProjectServerChange");
  closure_129_1 = conjureEligibleGuilds;
  let obj2 = require("useConjureProjects");
  const items2 = [ConjureProjectStore];
  const items3 = [id];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => conjureServerProject.conjureServerProjectGuildId(ConjureProjectStore.getProject(closure_0)), items3);
  closure_129_2 = stateFromStores1;
  const items4 = [conjureEligibleGuilds, stateFromStores1];
  const memo = target.useMemo(() => stateFromStores.filter((id) => id.id !== moving), items4);
  moving = _slicedToArray(target.useState(() => {
    let install_scope;
    if (stateFromStores != null) {
      install_scope = stateFromStores.install_scope;
    }
    return "guild" === install_scope;
  }), 1)[0];
  const first1 = _slicedToArray(target.useState(memo), 1)[0];
  const items5 = [moving, id];
  const effect = target.useEffect(() => {
    if (first) {
      const result = ConjureActionCreators.refreshConjureInstallState(closure_0);
    }
  }, items5);
  let obj3 = require("initialize");
  let tmp8 = null;
  if (moving) {
    tmp8 = id;
  }
  const conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(tmp8);
  let obj5 = require("conjureRemoveApp");
  [tmp11, _slicedToArray] = target.useState(null);
  target = conjureRemoveTarget;
  if (null != tmp11) {
    target = tmp11.target;
  }
  const tmp5Result = _slicedToArray(target.useState(null), 2);
  [ConjureProjectStore, closure_7] = target.useState(null);
  let found = first1.find((id) => id.id === ConjureProjectStore);
  if (found == null) {
    found = first1[0];
  }
  if (found == null) {
    found = null;
  }
  const tmp5Result4 = _slicedToArray(target.useState(null), 2);
  [tmp15, closure_9] = target.useState(false);
  const tmp5Result6 = _slicedToArray(target.useState(null), 2);
  closure_10 = tmp5Result6[1];
  let str;
  if (stateFromStores != null) {
    str = stateFromStores.name;
  }
  if (str == null) {
    str = "";
  }
  const items6 = [stateFromStores, found, moving, target];
  const memo1 = obj4.useMemo(() => {
    if (null != stateFromStores) {
      if (null != found) {
        const obj = conjureChangeRows;
        if (first) {
          obj.conjureMoveRows(stateFromStores, target, found.name);
        } else {
          obj.conjureShareRows(stateFromStores, found.name);
        }
      }
      return [];
    }
  }, items6);
  const callback = obj4.useCallback((arg0) => {
    closure_1_7(arg0);
    closure_10(null);
  }, []);
  const items7 = [str, found, conjureRemoveTarget, moving, stateFromStores, id];
  const tmp5Result5 = _slicedToArray(target.useState(false), 2);
  return {
    appName: str,
    moving,
    guilds: first1,
    guild: found,
    pickGuild: callback,
    rows: memo1,
    pending: tmp15,
    error: tmp5Result6[0],
    submit: target.useCallback(conjureRemoveTarget(function*() {
      if (c5 === 2) {
        c5 = 3;
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
              id = tmp7;
              closure_128_0 = undefined;
              if (null == found) {
                c5 = 3;
                return { value: null, done: true };
              } else {
                React6(true);
                closure_10(null);
                const obj5 = { target: conjureRemoveTarget };
                _slicedToArray(obj5);
                c3 = 1;
                c4 = 2;
                c5 = 1;
                const obj6 = { value: id(tmp50[7]).setConjureProjectServer(id, found.id), done: false };
                return obj6;
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            let message;
            if (tmp50 != null) {
              const body = tmp50.body;
              if (body != null) {
                message = body.message;
              }
            }
            closure_128_0 = message;
            if (typeof closure_128_0 === "string") {
              let stringResult = closure_128_0;
            } else {
              const intl2 = id(tmp50[10]).intl;
              const tmp68 = tmp3(tmp50[11]);
              if (closure_129_2) {
                let qDjkvv = tmp68.mdrXGt;
              } else {
                qDjkvv = tmp68.qDjkvv;
              }
              stringResult = intl2.string(qDjkvv);
            }
            closure_129_10(stringResult);
            closure_129_4(null);
            closure_129_9(false);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c3 = 0;
            closure_129_9(false);
            let tmp9 = null == closure_129_1;
            if (!tmp9) {
              tmp9 = closure_129_2;
            }
            if (!tmp9) {
              tmp3(tmp50[12])(closure_129_1, "added");
            }
            const intl = id(tmp50[10]).intl;
            let obj = tmp3(tmp50[11]);
            if (closure_129_2) {
              let yHhjsi = obj["B+Xtjy"];
            } else {
              yHhjsi = obj.yHhjsi;
            }
            obj = { app: closure_129_11, server: closure_129_8.name };
            intl.formatToPlainString(yHhjsi, obj);
            c5 = 3;
          }
        } catch (tmp50) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp50;
          } else {
            c4 = tmp;
          }
        }
      }
    }), items7)
  };
};
export function useConjureProjectServerCandidates(projectId) {
  _require = projectId;
  const conjureEligibleGuilds = require("useConjureProjects").useConjureEligibleGuilds("ConjureProjectServerChange");
  const obj = require("useConjureProjects");
  items = [ConjureProjectStore];
  const items1 = [projectId];
  stateFromStores = require("initialize").useStateFromStores(items, () => conjureServerProject.conjureServerProjectGuildId(ConjureProjectStore.getProject(closure_0)), items1);
  const items2 = [conjureEligibleGuilds, stateFromStores];
  return noop.useMemo(() => stateFromStores.filter((id) => id.id !== moving), items2);
}