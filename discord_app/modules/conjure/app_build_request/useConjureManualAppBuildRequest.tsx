// discord_app/modules/conjure/app_build_request/useConjureManualAppBuildRequest.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3868 from "../intl/ConjureUntranslated.messages.js";
import ConjureAppBuildRequest from "ConjureAppBuildRequest.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_build_request/useConjureManualAppBuildRequest.tsx");

export default function useConjureManualAppBuildRequest(projectId) {
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
    obj2.summary = intl.string(_modDef3868["o2++BO"]);
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
}
