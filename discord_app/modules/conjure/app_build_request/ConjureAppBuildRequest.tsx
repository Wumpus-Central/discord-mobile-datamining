// discord_app/modules/conjure/app_build_request/ConjureAppBuildRequest.tsx
import useConjureProjectPickerOptionsDefault from "../clarification/useConjureProjectPickerOptions.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
function sendAppBuildRequest() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _sendAppBuildRequest(arg0) {
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
      return { value: "IconComponent", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_2;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          const items = [require("ConjureWorkerTickets").mintWorkerTicket(closure_1)];
          const obj10 = require("ConjureWorkerTickets");
          items[1] = require("ConjureWorkerTickets").mintWorkerTicket(closure_0);
          c5 = 1;
          c6 = 1;
          const obj4 = { value: Promise.all(items), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_131_1 = value;
          closure_131_2 = closure_132_3(closure_131_1, 2);
          closure_131_3 = closure_131_2[0];
          closure_131_4 = closure_131_2[1];
          const _fetch = fetch;
          const _URLSearchParams = URLSearchParams;
          const obj6 = { ticket: closure_131_3.ticket };
          const uRLSearchParams = new URLSearchParams(obj6);
          const _HermesInternal2 = HermesInternal;
          const request = { method: "POST", body: null };
          const _JSON = JSON;
          const obj7 = { caller_ticket: closure_131_4.ticket, prompt: closure_131_0 };
          const combined = "" + closure_131_3.baseUrl + "/agent/app-build-request?" + uRLSearchParams;
          request.body = JSON.stringify(obj7);
          c5 = 2;
          c6 = 1;
          const obj8 = { value: fetch(combined, request), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_131_5 = value;
        if (closure_131_5.ok) {
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("app build request failed: " + closure_131_5.status);
          throw error;
        }
      }
    } catch (tmp15) {
      c6 = tmp;
      throw tmp15;
    }
  }
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/app_build_request/ConjureAppBuildRequest.tsx");

export const CONJURE_APP_BUILD_PROMPT_MAX_LENGTH = 4000;
export const useConjureAppBuildRequestForm = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureAppBuildRequestForm(arg0, prompt, arg2) {
      _require = arg0;
      importDefault = prompt;
      const cResult = require("c").c(18);
      const arr = useConjureProjectPickerOptionsDefault(arg0);
      const obj = require("c");
      [tmp3, tmp4] = noop.useState(null);
      const tmp5 = _slicedToArray(noop.useState(prompt.prompt), 2);
      const tmp2 = _slicedToArray(noop.useState(null), 2);
      [tmp7, dependencyMap] = noop.useState(false);
      const tmp6 = _slicedToArray(noop.useState(false), 2);
      [tmp9, _slicedToArray] = noop.useState(false);
      let project_id = null;
      if (arr.some((projectId) => projectId.projectId === _prompt.project_id)) {
        project_id = prompt.project_id;
      }
      if (tmp3 == null) {
        tmp3 = project_id;
      }
      if (tmp3 == null) {
        tmp3 = null;
      }
      c4 = tmp3;
      if (cResult[0] === arr) {
        if (cResult[1] === tmp3) {
          let tmp11 = cResult[2];
        }
        noop = tmp11;
        if (cResult[3] !== str) {
          const trimmed = str.trim();
          cResult[3] = str;
          cResult[4] = trimmed;
          let tmp13 = trimmed;
        } else {
          tmp13 = cResult[4];
        }
        let tmp15 = arg2;
        closure_6 = tmp13;
        if (arg2) {
          tmp15 = !tmp7;
        }
        if (tmp15) {
          tmp15 = null != tmp11;
        }
        if (tmp15) {
          tmp15 = "" !== tmp13;
        }
        closure_7 = tmp15;
        if (cResult[5] === tmp15) {
          if (cResult[6] === arg0) {
            if (cResult[7] === tmp11) {
              if (cResult[8] === tmp13) {
                let tmp16 = cResult[9];
              }
              if (cResult[10] === tmp15) {
                if (cResult[11] === tmp9) {
                  if (cResult[12] === arr) {
                    if (cResult[13] === str) {
                      if (cResult[14] === tmp7) {
                        if (cResult[15] === tmp16) {
                          if (cResult[16] === tmp3) {
                            let tmp17 = cResult[17];
                          }
                          return tmp17;
                        }
                      }
                    }
                  }
                }
              }
              const obj2 = {
                projects: arr,
                targetId: tmp3,
                setTargetId: tmp4,
                prompt: str,
                setPrompt: tmp5[1],
                sending: tmp7,
                failed: tmp9,
                canSubmit: null,
                submit: null,
              };
              class E {
                constructor() {
                  tmp = closure_7;
                  if (closure_7) {
                    tmp2 = closure_5;
                    tmp3 = null;
                    tmp = null != closure_5;
                  }
                  if (tmp) {
                    tmp4 = closure_2;
                    flag = true;
                    tmp5 = closure_2(true);
                    tmp6 = closure_3;
                    flag2 = false;
                    tmp7 = closure_3(false);
                    tmp8 = sendAppBuildRequest;
                    tmp9 = closure_0;
                    tmp10 = closure_5;
                    tmp11 = closure_6;
                    promise = sendAppBuildRequest(closure_0, closure_5.projectId, closure_6);
                    nextPromise = promise.then(
                      () => {
                        const intl = closure_0(1128).intl;
                        return closure_0(12055).sendConjureCardReply(
                          closure_1_0,
                          "" +
                            intl.formatToPlainString(closure_1(3865).jZlNst, {
                              name: projectId.name,
                              projectId: projectId.projectId,
                            }) +
                            "\n\n" +
                            closure_1_6,
                        );
                      },
                      () => {
                        dependencyMap(false);
                        closure_1_3(true);
                      },
                    );
                  }
                  return;
                }
              }
              obj2.submit = tmp16;
              cResult[10] = tmp15;
              cResult[11] = tmp9;
              cResult[12] = arr;
              cResult[13] = str;
              cResult[14] = tmp7;
              cResult[15] = tmp16;
              cResult[16] = tmp3;
              cResult[17] = obj2;
              tmp17 = obj2;
            }
          }
        }
        class E {
          constructor() {
            tmp = closure_7;
            if (closure_7) {
              tmp2 = closure_5;
              tmp3 = null;
              tmp = null != closure_5;
            }
            if (tmp) {
              tmp4 = closure_2;
              flag = true;
              tmp5 = closure_2(true);
              tmp6 = closure_3;
              flag2 = false;
              tmp7 = closure_3(false);
              tmp8 = sendAppBuildRequest;
              tmp9 = closure_0;
              tmp10 = closure_5;
              tmp11 = closure_6;
              promise = sendAppBuildRequest(closure_0, closure_5.projectId, closure_6);
              nextPromise = promise.then(
                () => {
                  const intl = closure_0(1128).intl;
                  return closure_0(12055).sendConjureCardReply(
                    closure_1_0,
                    "" +
                      intl.formatToPlainString(closure_1(3865).jZlNst, {
                        name: projectId.name,
                        projectId: projectId.projectId,
                      }) +
                      "\n\n" +
                      closure_1_6,
                  );
                },
                () => {
                  dependencyMap(false);
                  closure_1_3(true);
                },
              );
            }
            return;
          }
        }
        cResult[5] = tmp15;
        cResult[6] = arg0;
        cResult[7] = tmp11;
        cResult[8] = tmp13;
        cResult[9] = E;
        tmp16 = E;
      }
      let found = arr.find((projectId) => projectId.projectId === c4);
      if (found == null) {
        found = null;
      }
      cResult[0] = arr;
      cResult[1] = tmp3;
      cResult[2] = found;
      tmp11 = found;
    }
  : function useConjureAppBuildRequestForm(arg0, prompt, arg2) {
      closure_0 = arg0;
      importDefault = prompt;
      const arr = useConjureProjectPickerOptionsDefault(arg0);
      [tmp2, tmp3] = found.useState(null);
      const tmp4 = _slicedToArray(found.useState(prompt.prompt), 2);
      const obj = found;
      let tmp = _slicedToArray(found.useState(null), 2);
      [tmp6, dependencyMap] = found.useState(false);
      const tmp5 = _slicedToArray(found.useState(false), 2);
      [tmp8, _slicedToArray] = found.useState(false);
      let project_id = null;
      if (arr.some((projectId) => projectId.projectId === _prompt.project_id)) {
        project_id = prompt.project_id;
      }
      if (tmp2 == null) {
        tmp2 = project_id;
      }
      if (tmp2 == null) {
        tmp2 = null;
      }
      c4 = tmp2;
      found = arr.find((projectId) => projectId.projectId === c4);
      if (found == null) {
        found = null;
      }
      let tmp11 = arg2;
      const trimmed = str.trim();
      if (arg2) {
        tmp11 = !tmp6;
      }
      if (tmp11) {
        tmp11 = null != found;
      }
      if (tmp11) {
        tmp11 = "" !== trimmed;
      }
      closure_7 = tmp11;
      const items = [tmp11, arg0, found, trimmed];
      const tmp7 = _slicedToArray(found.useState(false), 2);
      return {
        projects: arr,
        targetId: tmp2,
        setTargetId: tmp3,
        prompt: tmp4[0],
        setPrompt: tmp4[1],
        sending: tmp6,
        failed: tmp8,
        canSubmit: tmp11,
        submit: obj.useCallback(() => {
          let tmp = closure_7;
          if (closure_7) {
            tmp = null != found;
          }
          if (tmp) {
            dependencyMap(true);
            _slicedToArray(false);
            sendAppBuildRequest(closure_0, found.projectId, trimmed).then(
              () => {
                const intl = closure_0(1128).intl;
                return closure_0(12055).sendConjureCardReply(
                  closure_1_0,
                  "" +
                    intl.formatToPlainString(closure_1(3865).jZlNst, { name: found.name, projectId: found.projectId }) +
                    "\n\n" +
                    trimmed,
                );
              },
              () => {
                dependencyMap(false);
                closure_1_3(true);
              },
            );
            const promise = sendAppBuildRequest(closure_0, found.projectId, trimmed);
          }
        }, items),
      };
    };
