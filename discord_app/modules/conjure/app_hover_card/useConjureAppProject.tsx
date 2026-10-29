// discord_app/modules/conjure/app_hover_card/useConjureAppProject.tsx
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
const canRemixProject = fn(6831).canRemixProject;
const ConjureAppHoverCard = "ConjureAppHoverCard";
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_hover_card/useConjureAppProject.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureAppProject(arg0, arg1, arg2) {
      _require = arg0;
      dependencyMap = arg2;
      const cResult = require("c").c(17);
      if (cResult[0] !== arg1) {
        let obj2 = { guildId: tmp4, location: ConjureAppHoverCard };
        cResult[0] = tmp4;
        cResult[1] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[1];
      }
      let obj = require("c");
      const tmp7 = require("ConjureGuildExperiment").useIsConjureGuildEnabled(tmp5) && null != arg1;
      if (cResult[2] === arg0) {
        if (cResult[3] === arg2) {
          let tmp8 = cResult[4];
          let tmp9 = cResult[5];
        }
        const effect = noop.useEffect(tmp8, tmp9);
        const _Symbol = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          let items = [ConjureProjectStore];
          cResult[6] = items;
          let tmp13 = items;
        } else {
          tmp13 = cResult[6];
        }
        if (cResult[7] !== arg0) {
          const fn2 = function f() {
            let tmp2 = null;
            if (null != closure_0) {
              let project = ConjureProjectStore.getProject(closure_0);
              if (project == null) {
                project = null;
              }
              tmp2 = project;
            }
            const obj = { project: tmp2, isUnavailable: null };
            let result = null != closure_0;
            if (result) {
              result = ConjureActionCreators.isConjureProjectUnavailable(closure_0);
            }
            obj.isUnavailable = result;
            return obj;
          };
          const items1 = [arg0];
          cResult[7] = arg0;
          cResult[8] = fn2;
          cResult[9] = items1;
          let tmp16 = items1;
          let tmp15 = fn2;
        } else {
          tmp15 = cResult[8];
          tmp16 = cResult[9];
        }
        const stateFromStoresObject = tmp(504).useStateFromStoresObject(tmp13, tmp15, tmp16);
        let project = stateFromStoresObject.project;
        if (cResult[10] === tmp7) {
          if (cResult[11] === project) {
            let tmp19 = cResult[12];
          }
          if (cResult[13] === project) {
            if (cResult[14] === tmp19) {
              if (cResult[15] === tmp22) {
                let tmp23 = cResult[16];
              }
              return tmp23;
            }
          }
          const obj3 = { project, remixProject: tmp19, isSettled: null == arg0 || null != project || tmp18 };
          cResult[13] = project;
          cResult[14] = tmp19;
          cResult[15] = null == arg0 || null != project || tmp18;
          cResult[16] = obj3;
          tmp23 = obj3;
        }
        let tmp20 = null;
        if (tmp7) {
          tmp20 = null;
          if (null != project) {
            tmp20 = null;
            if (canRemixProject(project)) {
              tmp20 = project;
            }
          }
        }
        cResult[10] = tmp7;
        cResult[11] = project;
        cResult[12] = tmp20;
        tmp19 = tmp20;
        const tmpResult2 = tmp(504);
      }
      const fn = function b() {
        let tmp = closure_1;
        if (closure_1) {
          tmp = null != closure_0;
        }
        if (tmp) {
          const items = [closure_0];
          const missingConjureProjects = ConjureActionCreators.loadMissingConjureProjects(items);
        }
      };
      const items2 = [arg2, arg0];
      cResult[2] = arg0;
      cResult[3] = arg2;
      cResult[4] = fn;
      cResult[5] = items2;
      tmp9 = items2;
      tmp8 = fn;
      const tmpResult = require("ConjureGuildExperiment");
    }
  : function useConjureAppProject(arg0, guildId, arg2) {
      _require = arg0;
      dependencyMap = arg2;
      const tmp4 =
        require("ConjureGuildExperiment").useIsConjureGuildEnabled({ guildId, location: ConjureAppHoverCard }) &&
        null != guildId;
      noop = tmp4;
      let items = [arg2, arg0];
      const effect = noop.useEffect(() => {
        let tmp = closure_1;
        if (closure_1) {
          tmp = null != closure_0;
        }
        if (tmp) {
          const items = [closure_0];
          const missingConjureProjects = ConjureActionCreators.loadMissingConjureProjects(items);
        }
      }, items);
      let obj = require("ConjureGuildExperiment");
      let obj2 = { guildId, location: ConjureAppHoverCard };
      const items1 = [project];
      const items2 = [arg0];
      const stateFromStoresObject = require("initialize").useStateFromStoresObject(
        items1,
        () => {
          let tmp2 = null;
          if (null != closure_0) {
            project = ConjureProjectStore.getProject(closure_0);
            if (project == null) {
              project = null;
            }
            tmp2 = project;
          }
          const obj = { project: tmp2, isUnavailable: null };
          let result = null != closure_0;
          if (result) {
            result = ConjureActionCreators.isConjureProjectUnavailable(closure_0);
          }
          obj.isUnavailable = result;
          return obj;
        },
        items2,
      );
      project = stateFromStoresObject.project;
      const isUnavailable = stateFromStoresObject.isUnavailable;
      const items3 = [project, tmp4, arg0, isUnavailable];
      return noop.useMemo(() => {
        const obj = { project, remixProject: null, isSettled: null };
        let tmp2 = null;
        if (closure_2) {
          tmp2 = null;
          if (null != project) {
            tmp2 = null;
            if (canRemixProject(project)) {
              tmp2 = project;
            }
          }
        }
        obj.remixProject = tmp2;
        obj.isSettled = null == closure_0 || null != project || isUnavailable;
        return obj;
      }, items3);
    };
