// discord_app/modules/conjure/linked_apps/useConjureLinkedApps.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
let closure_7 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/useConjureLinkedApps.tsx");

export default function useConjureLinkedApps(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  [callers, asyncGeneratorStep] = stateFromStoresObject.useState(closure_7);
  const tmp3 = _slicedToArray(stateFromStoresObject.useState(false), 2);
  _slicedToArray = tmp3[1];
  let items = [arg0, arg1];
  const effect = stateFromStoresObject.useEffect(() => {
    closure_1 = async function _load() {
      closure_1 = tmp3;
      await closure_2_0(closure_2_2[4]).fetchLinkedAppCallers(closure_0);
      if (1 === tmp7) {
        c2 = 0;
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        if (closure_129_0) {
          v2(closure_128_0);
        }
        c2 = 0;
      }
      return value;
    };
    if (closure_1) {
      c0 = true;
      (function load() {
        const self = this;
        const apply = closure_1.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
      return () => {
        c0 = false;
      };
    }
  }, items);
  const items1 = [ConjureProjectStore];
  const items2 = [callers];
  stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items1,
    () =>
      Object.fromEntries(
        first.map((project_id) => {
          project_id = project_id.project_id;
          const items = [project_id, project.getProject(project_id)];
          return items;
        }),
      ),
    items2,
  );
  const items3 = [callers, stateFromStoresObject];
  const memo = stateFromStoresObject.useMemo(
    () =>
      Object.fromEntries(
        first.map((project_id) => {
          project_id = project_id.project_id;
          const items = [project_id];
          let name;
          if (stateFromStoresObject[project_id] != null) {
            name = tmp.name;
          }
          if (name == null) {
            const intl = closure_0(first[6]).intl;
            const obj = { projectId: project_id };
            name = intl.formatToPlainString(closure_1(first[7]).HHCa93, obj);
          }
          items[1] = name;
          return items;
        }),
      ),
    items3,
  );
  asyncGeneratorStep(async (arg0, arg1) => {
    closure_130_0 = closure_0;
    closure_130_1 = closure_1;
    v0(false);
    await closure_0(first[4]).linkConjureApp(closure_0, closure_0, closure_1);
    tmp3((arr) =>
      arr.map((project_id) => {
        let tmp = project_id;
        if (project_id.project_id === closure_1_0) {
          const obj = {};
          const merged = Object.assign(project_id);
          obj.build = build;
          tmp = obj;
        }
        return tmp;
      }),
    );
    await "HermesInternal";
    v0 = 0;
    v0(true);
  });
  const items4 = [arg0];
  const callback = stateFromStoresObject.useCallback(function (arg0, arg1) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items4);
  _require = asyncGeneratorStep(async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = closure_0;
    v2(false);
    await closure_0(first[4]).unlinkConjureApp(closure_0, closure_0);
    let v0 = 0;
    v0((arr) => arr.filter((project_id) => project_id.project_id !== closure_1_0));
    await "HermesInternal";
    v0 = 0;
    v2(true);
  });
  const items5 = [arg0];
  let obj = require("initialize");
  return {
    callers,
    projects: stateFromStoresObject,
    names: memo,
    failed: tmp3[0],
    setBuild: callback,
    remove: stateFromStoresObject.useCallback(function (arg0) {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items5),
  };
}
