// === Module 13215: useConjureMakePersonal ===

// Module 13215 (useConjureMakePersonal)
import ConjureActionCreators from "ConjureActionCreators" /* 7265 */;
import conjureChangeRows from "conjureChangeRows" /* 13216 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;

const require = globalThis.__r;

require = fn;
const isProjectOwner = fn(6954).isProjectOwner;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/server_share/useConjureMakePersonal.tsx");

export default function useConjureMakePersonal(id) {
  _require = id;
  [obj3.pending, closure_1] = target.useState(false);
  const tmp2 = _slicedToArray(target.useState(null), 2);
  dependencyMap = tmp2[1];
  items = [id.id];
  const effect = target.useEffect(() => ConjureActionCreators.refreshConjureInstallState(id.id), items);
  const conjureRemoveTarget = require("conjureRemoveApp").useConjureRemoveTarget(id.id);
  let obj2 = require("conjureRemoveApp");
  const tmp4 = _require;
  [tmp8, _slicedToArray] = _slicedToArray(target.useState(null), 2);
  target = conjureRemoveTarget;
  if (null != tmp8) {
    target = tmp8.target;
  }
  let appName;
  if (target != null) {
    appName = target.appName;
  }
  if (appName == null) {
    appName = id.name;
  }
  const items1 = [id, target];
  const memo = obj.useMemo(() => conjureChangeRows.conjureMakePersonalRows(closure_0, target), items1);
  const items2 = [appName, conjureRemoveTarget, id.id];
  let obj3 = { appName, rows: memo, keptChannels: null, pending: null, error: null, submit: null };
  let result = null;
  const callback = obj.useCallback(conjureRemoveTarget(function*() {
    if (c4 === 2) {
      c4 = 3;
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
            id = tmp7;
            closure_128_0 = undefined;
            tmp3(true);
            dependencyMap(null);
            const obj4 = { target: conjureRemoveTarget };
            _slicedToArray(obj4);
            dependencyMap = 1;
            c3 = 2;
            c4 = 1;
            const obj5 = { value: id(7265).makeConjureProjectPersonal(id.id), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          dependencyMap = 0;
          const intl2 = id(1113).intl;
          closure_129_2(intl2.string(tmp3(4079)["d+wTRF"]));
          closure_129_4(null);
          closure_129_1(false);
          c4 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          dependencyMap = 0;
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          dependencyMap = 0;
          closure_129_1(false);
          integrationStatus = integrationStatus.getIntegrationStatus(closure_129_0.id);
          let prop;
          if (integrationStatus != null) {
            prop = integrationStatus.owner_authorization_revoked;
          }
          closure_128_0 = true === prop;
          const intl = id(1113).intl;
          let obj = tmp3(4079);
          if (closure_128_0) {
            let TWYUzf = obj.tOu7uv;
          } else {
            TWYUzf = obj.TWYUzf;
          }
          obj = { app: closure_129_6 };
          intl.formatToPlainString(TWYUzf, obj);
          c4 = 3;
        }
      } catch (tmp31) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp31;
        } else {
          c3 = tmp;
        }
      }
    }
  }), items2);
  if (null != target) {
    result = tmp4(13199).conjureRemoveAppKeptChannels(target);
    const tmp4Result = tmp4(13199);
  }
  obj3.keptChannels = result;
  obj3.error = tmp2[0];
  obj3.submit = callback;
  return obj3;
};
export function canMakeConjureProjectPersonal(project) {
  let tmp = "guild" === project.install_scope;
  if (tmp) {
    tmp = isProjectOwner(project);
  }
  return tmp;
}