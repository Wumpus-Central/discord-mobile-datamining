// === Module 13242: useConjureLinkedApps ===

// Module 13242 (useConjureLinkedApps)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7017 */;

const require = globalThis.__r;

const require = fn;
let closure_7 = [];
let closure_8 = [];
let closure_9 = { live: false, hasPreview: true };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/useConjureLinkedApps.tsx");

export default function useConjureLinkedApps(projectId, arg1) {
  _require = projectId;
  importDefault = arg1;
  [tmp2, tmp3] = first1(noop.useState(projectId), 2);
  const tmp5 = first1(noop.useState(closure_7), 2);
  const callers = tmp5[0];
  asyncGeneratorStep = tmp7;
  const tmp9 = first1(noop.useState(closure_8), 2);
  first1 = tmp9[0];
  noop = tmp11;
  let tmp = first1(noop.useState(projectId), 2);
  const tmp12 = closure_9;
  const tmp4 = closure_7;
  const tmp8 = closure_8;
  [tmp14, tmp15] = first1(noop.useState(closure_9), 2);
  ConjureProjectStore = tmp15;
  const tmp16 = first1(noop.useState(false), 2);
  closure_7 = tmp17;
  const tmp18 = first1(noop.useState(false), 2);
  closure_8 = tmp19;
  if (tmp2 !== projectId) {
    tmp3(projectId);
    tmp7(tmp4);
    tmp11(tmp8);
    tmp15(tmp12);
    tmp17(false);
    tmp19(false);
  }
  closure_9 = obj.useRef(projectId);
  items = [projectId];
  const effect = obj.useEffect(() => {
    closure_9.current = current;
  }, items);
  const tmp13 = first1(noop.useState(closure_9), 2);
  const tmp27 = _require;
  let items1 = [ConjureProjectStore];
  const items2 = [projectId];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    items = [...ConjureProjectStore.getOwnedProjects(), ...ConjureProjectStore.getSharedWithMeProjects(), ...ConjureProjectStore.getRailProjects()];
    const items1 = [...new Set(items.map((id) => id.id))];
    const found = items1.filter((item) => item !== current);
    return found.sort();
  }, items2);
  const items3 = [projectId, arg1];
  const effect1 = obj.useEffect(() => {
    closure_1 = async function _load() {
      closure_1 = tmp3;
      await closure_2_0(closure_2_2[5]).fetchLinkedApps(closure_0);
      if (1 === tmp7) {
        c2 = 0;
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        if (closure_129_0) {
          v2(closure_128_0.callers);
          closure_1_6({ live: true === closure_128_0.live, hasPreview: false !== closure_128_0.has_preview });
          c2 = 0;
        } else {
          c2 = 0;
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
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
  }, items3);
  const items4 = [projectId, arg1, stateFromStoresArray];
  const effect2 = obj.useEffect(() => {
    closure_1 = async function _loadTargets() {
      closure_1 = tmp3;
      await closure_2_0(closure_2_2[5]).fetchLinkedAppTargets(closure_0, closure_1_10);
      if (1 === tmp7) {
        c2 = 0;
        c4 = 3;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 !== 2) {
        closure_128_0 = value;
        if (closure_129_0) {
          closure_1_5(closure_128_0.targets);
        }
        c2 = 0;
      }
      return value;
    };
    if (closure_1) {
      if (0 !== stateFromStoresArray.length) {
        c0 = true;
        (function loadTargets() {
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
    }
  }, items4);
  const obj2 = require("initialize");
  const items5 = [ConjureProjectStore];
  const items6 = [projectId];
  let stateFromStores = require("initialize").useStateFromStores(items5, () => ConjureProjectStore.getProject(closure_0), items6);
  const obj3 = require("initialize");
  const items7 = [ConjureProjectStore];
  const items8 = [callers, first1];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items7, () => {
    items = [...first1];
    return Object.fromEntries(items.map((project_id) => {
      project_id = project_id.project_id;
      items = [project_id, project.getProject(project_id)];
      return items;
    }));
  }, items8);
  const items9 = [callers, stateFromStoresObject, first1];
  const memo = obj.useMemo(() => {
    items = [...first1];
    return Object.fromEntries(items.map((project_id) => {
      project_id = project_id.project_id;
      items = [project_id, ];
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
    }));
  }, items9);
  asyncGeneratorStep(async (arg0, build) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (async (arg0, value) => {
      closure_130_0 = closure_0;
      closure_130_1 = build;
      closure_1_7(false);
      closure_1_8(false);
      await closure_0(first[5]).linkConjureApp(closure_0, closure_0, { build });
      if (ref.current === closure_0) {
        closure_1_8(true);
        tmp3((arr) => arr.map((project_id) => {
          let tmp = project_id;
          if (project_id.project_id === closure_1_0) {
            const obj = {};
            const merged = Object.assign(project_id);
            obj.build = build;
            tmp = obj;
          }
          return tmp;
        }));
      }
      await "HermesInternal";
      if (ref.current === closure_0) {
        closure_1_7(true);
      }
    })();
  });
  const items10 = [projectId];
  const callback = obj.useCallback(function(arg0, arg1) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items10);
  _require = asyncGeneratorStep(async (arg0) => {
    closure_2 = tmp3;
    closure_129_0 = current;
    closure_1_7(false);
    closure_1_8(false);
    await closure_0(first[5]).unlinkConjureApp(closure_0, closure_0);
    let v0 = 0;
    if (ref.current === current) {
      closure_1_8(true);
      v0((arr) => arr.filter((project_id) => project_id.project_id !== closure_1_0));
    }
    await "HermesInternal";
    v0 = 0;
    if (ref.current === current) {
      closure_1_7(true);
    }
  });
  const items11 = [projectId];
  let name;
  const callback1 = obj.useCallback(function(arg0) {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items11);
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    let intl = tmp27(tmp28[6]).intl;
    const obj5 = { projectId };
    name = intl.formatToPlainString(require("module_4131").HHCa93, obj5);
  }
  const obj8 = { name, project: null, live: null, hasPreview: null, callers: null, targets: null, projects: null, names: null, failed: null, saved: null, setBuild: null, remove: null };
  if (stateFromStores == null) {
    stateFromStores = null;
  }
  obj8.project = stateFromStores;
  ({ live: obj6.live, hasPreview: obj6.hasPreview } = tmp14);
  obj8.callers = callers;
  obj8.targets = first1;
  obj8.projects = stateFromStoresObject;
  obj8.names = memo;
  obj8.failed = tmp16[0];
  obj8.saved = tmp18[0];
  obj8.setBuild = callback;
  obj8.remove = callback1;
  return obj8;
};