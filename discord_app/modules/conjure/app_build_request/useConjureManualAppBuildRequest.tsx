// discord_app/modules/conjure/app_build_request/useConjureManualAppBuildRequest.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3863 from "../intl/ConjureUntranslated.messages.js";
import ConjureAppBuildRequest from "ConjureAppBuildRequest.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_build_request/useConjureManualAppBuildRequest.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureManualAppBuildRequest(projectId) {
      _require = projectId;
      const cResult = require("c").c(8);
      let obj = require("c");
      [tmp3, importDefault] = first(noop.useState(null), 2);
      dependencyMap = noop.useRef(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(current) {
          closure_2.current = current;
          importDefault(current);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      projectId = undefined;
      if (tmp3 != null) {
        projectId = tmp3.projectId;
      }
      let tmp6 = null;
      if (projectId === projectId) {
        tmp6 = tmp3;
      }
      if (cResult[1] !== projectId) {
        const fn2 = function q(str, clearComposer) {
          const obj = { projectId, request: null, clearComposer: null };
          const obj2 = { id: "manual:" + projectId + ":" + Date.now(), summary: null, prompt: null };
          const intl = util.intl;
          obj2.summary = intl.string(_modDef3863["o2++BO"]);
          const trimmed = str.trim();
          obj2.prompt = trimmed.slice(0, ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH);
          obj.request = obj2;
          obj.clearComposer = clearComposer;
          return first(obj);
        };
        cResult[1] = projectId;
        cResult[2] = fn2;
        let tmp7 = fn2;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function v() {
          return first(null);
        };
        cResult[3] = fn3;
        let tmp8 = fn3;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn4 = function j(arg0) {
          const current = ref.current;
          let id;
          if (current != null) {
            id = current.request.id;
          }
          if (id === arg0) {
            current.clearComposer();
            first(null);
          }
        };
        cResult[4] = fn4;
        let tmp9 = fn4;
      } else {
        tmp9 = cResult[4];
      }
      let request;
      if (tmp6 != null) {
        request = tmp6.request;
      }
      if (request == null) {
        request = null;
      }
      if (cResult[5] === tmp7) {
        if (cResult[6] === request) {
          let tmp11 = cResult[7];
        }
        return tmp11;
      }
      let obj2 = { request, open: tmp7, close: tmp8, sent: tmp9 };
      cResult[5] = tmp7;
      cResult[6] = request;
      cResult[7] = obj2;
      tmp11 = obj2;
    }
  : function useConjureManualAppBuildRequest(projectId) {
      [tmp2, importDefault] = callback(noop.useState(null), 2);
      noop.useRef(null);
      callback = noop.useCallback((current) => {
        closure_2.current = current;
        importDefault(current);
      }, []);
      projectId = undefined;
      if (tmp2 != null) {
        projectId = tmp2.projectId;
      }
      let tmp5 = null;
      if (projectId === projectId) {
        tmp5 = tmp2;
      }
      const items = [projectId, callback];
      const items1 = [callback];
      const open = noop.useCallback((str, clearComposer) => {
        const obj = { projectId, request: null, clearComposer: null };
        const obj2 = { id: "manual:" + projectId + ":" + Date.now(), summary: null, prompt: null };
        const intl = util.intl;
        obj2.summary = intl.string(_modDef3863["o2++BO"]);
        const trimmed = str.trim();
        obj2.prompt = trimmed.slice(0, ConjureAppBuildRequest.CONJURE_APP_BUILD_PROMPT_MAX_LENGTH);
        obj.request = obj2;
        obj.clearComposer = clearComposer;
        return callback(obj);
      }, items);
      const items2 = [callback];
      const close = noop.useCallback(() => callback(null), items1);
      let request;
      const sent = noop.useCallback((arg0) => {
        const current = ref.current;
        let id;
        if (current != null) {
          id = current.request.id;
        }
        if (id === arg0) {
          current.clearComposer();
          callback(null);
        }
      }, items2);
      if (tmp5 != null) {
        request = tmp5.request;
      }
      if (request == null) {
        request = null;
      }
      return { request, open, close, sent };
    };
