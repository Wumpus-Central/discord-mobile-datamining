// discord_app/modules/conjure/linked_apps/useConjureLinkedApps.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3830 from "../intl/ConjureUntranslated.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
let closure_7 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/useConjureLinkedApps.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureLinkedApps(arg0, arg1) {
      _require = arg0;
      importDefault = arg1;
      const cResult = require("c").c(24);
      [callers, asyncGeneratorStep] = stateFromStoresObject.useState(closure_7);
      let obj = require("c");
      const obj2 = stateFromStoresObject;
      let tmp = _require;
      const tmp2 = callers;
      [tmp6, _slicedToArray] = stateFromStoresObject.useState(false);
      if (cResult[0] === arg1) {
        if (cResult[1] === arg0) {
          let tmp7 = cResult[2];
          let tmp8 = cResult[3];
        }
        const effect = obj2.useEffect(tmp7, tmp8);
        let fromEntriesResult = globalThis;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [ConjureProjectStore];
          cResult[4] = items;
          let tmp11 = items;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== callers) {
          const fn2 = function v() {
            return Object.fromEntries(
              first.map((project_id) => {
                project_id = project_id.project_id;
                const items = [project_id, project.getProject(project_id)];
                return items;
              }),
            );
          };
          const items1 = [callers];
          cResult[5] = callers;
          cResult[6] = fn2;
          cResult[7] = items1;
          let tmp14 = items1;
          let tmp13 = fn2;
        } else {
          tmp13 = cResult[6];
          tmp14 = cResult[7];
        }
        stateFromStoresObject = tmp(tmp2[7]).useStateFromStoresObject(tmp11, tmp13, tmp14);
        if (cResult[8] === callers) {
          if (cResult[9] === stateFromStoresObject) {
            if (cResult[13] !== arg0) {
              _require = asyncGeneratorStep(async (arg0, arg1) => {
                closure_130_0 = closure_0;
                closure_130_1 = closure_1;
                v0(false);
                await closure_0(first[6]).linkConjureApp(closure_0, closure_0, closure_1);
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
                await "IconComponent";
                v0 = 0;
                v0(true);
              });
              function t6() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              }
              cResult[13] = arg0;
              cResult[14] = t6;
              let tmp19 = t6;
            } else {
              tmp19 = cResult[14];
            }
            if (cResult[15] !== arg0) {
              _require = asyncGeneratorStep(async (arg0) => {
                closure_2 = tmp3;
                closure_129_0 = closure_0;
                v2(false);
                await closure_0(first[6]).unlinkConjureApp(closure_0, closure_0);
                let v0 = 0;
                v0((arr) => arr.filter((project_id) => project_id.project_id !== closure_1_0));
                await "IconComponent";
                v0 = 0;
                v2(true);
              });
              function t7() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              }
              cResult[15] = arg0;
              cResult[16] = t7;
              let tmp21 = t7;
            } else {
              tmp21 = cResult[16];
            }
            if (cResult[17] === callers) {
              if (cResult[18] === tmp6) {
                if (cResult[19] === tmp16) {
                  if (cResult[20] === stateFromStoresObject) {
                    if (cResult[21] === tmp21) {
                      if (cResult[22] === tmp19) {
                        let tmp23 = cResult[23];
                      }
                      return tmp23;
                    }
                  }
                }
              }
            }
            const obj3 = {
              callers,
              projects: stateFromStoresObject,
              names: cResult[10],
              failed: tmp6,
              setBuild: tmp19,
              remove: tmp21,
            };
            cResult[17] = callers;
            cResult[18] = tmp6;
            cResult[19] = cResult[10];
            cResult[20] = stateFromStoresObject;
            cResult[21] = tmp21;
            cResult[22] = tmp19;
            cResult[23] = obj3;
            tmp23 = obj3;
          }
        }
        if (cResult[11] !== stateFromStoresObject) {
          class P {
            constructor(arg0) {
              project_id = arg0.project_id;
              items = [,];
              items[0] = project_id;
              tmp = closure_5[project_id];
              name = undefined;
              if (tmp != null) {
                name = tmp.name;
              }
              if (name == null) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                intl = closure_0(closure_2[8]).intl;
                tmp5 = closure_1;
                obj = { projectId: null };
                obj.projectId = project_id;
                name = intl.formatToPlainString(closure_1(closure_2[9]).HHCa93, obj);
              }
              items[1] = name;
              return items;
            }
          }
          cResult[11] = stateFromStoresObject;
          cResult[12] = P;
        } else {
          class P {
            constructor(arg0) {
              project_id = arg0.project_id;
              items = [,];
              items[0] = project_id;
              tmp = closure_5[project_id];
              name = undefined;
              if (tmp != null) {
                name = tmp.name;
              }
              if (name == null) {
                tmp3 = closure_0;
                tmp4 = closure_2;
                intl = closure_0(closure_2[8]).intl;
                tmp5 = closure_1;
                obj = { projectId: null };
                obj.projectId = project_id;
                name = intl.formatToPlainString(closure_1(closure_2[9]).HHCa93, obj);
              }
              items[1] = name;
              return items;
            }
          }
        }
        const _Object = fromEntriesResult.Object;
        fromEntriesResult = _Object.fromEntries(callers.map(P));
        cResult[8] = callers;
        cResult[9] = stateFromStoresObject;
        cResult[10] = fromEntriesResult;
        const tmpResult = tmp(tmp2[7]);
      }
      const fn = function s() {
        if (closure_1) {
          c0 = closure_3(function* () {
            closure_1 = tmp3;
            yield closure_0(first[6]).fetchLinkedAppCallers(c0);
            if (1 === tmp7) {
              c2 = 0;
              c4 = 3;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              if (closure_0) {
                closure_2_3(closure_128_0);
              }
              c2 = 0;
            }
            return value;
          });
          (function load() {
            const self = this;
            const apply = c0.apply;
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
      };
      const items2 = [arg0, arg1];
      cResult[0] = arg1;
      cResult[1] = arg0;
      cResult[2] = fn;
      cResult[3] = items2;
      tmp8 = items2;
      tmp7 = fn;
      const tmp5 = _slicedToArray(stateFromStoresObject.useState(false), 2);
    }
  : function useConjureLinkedApps(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      [callers, asyncGeneratorStep] = stateFromStoresObject.useState(closure_7);
      const tmp3 = _slicedToArray(stateFromStoresObject.useState(false), 2);
      _slicedToArray = tmp3[1];
      let items = [arg0, arg1];
      const effect = stateFromStoresObject.useEffect(() => {
        closure_1 = async function _load2() {
          closure_1 = tmp3;
          await closure_2_0(closure_2_2[6]).fetchLinkedAppCallers(closure_0);
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
                const intl = closure_0(first[8]).intl;
                const obj = { projectId: project_id };
                name = intl.formatToPlainString(closure_1(first[9]).HHCa93, obj);
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
        await closure_0(first[6]).linkConjureApp(closure_0, closure_0, closure_1);
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
        await "IconComponent";
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
        await closure_0(first[6]).unlinkConjureApp(closure_0, closure_0);
        let v0 = 0;
        v0((arr) => arr.filter((project_id) => project_id.project_id !== closure_1_0));
        await "IconComponent";
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
    };
