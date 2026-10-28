// discord_app/modules/conjure/app_build_request/ConjureAppBuildRequest.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3863 from "../intl/ConjureUntranslated.messages.js";
import createNonce from "../../messages/createNonce.tsx";
import conjureAttachmentDrafts from "../chat/conjureAttachmentDrafts.tsx";
import useConjureProjectPickerOptionsDefault from "../clarification/useConjureProjectPickerOptions.tsx";
import conjureSendToProject from "../connection/conjureSendToProject.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function sentMessage(arr) {
  const map = new Map();
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    ({ target, prompt: _prompt } = nextResult);
    let items1 = map.get(_prompt);
    if (items1 == null) {
      items1 = [];
    }
    let items = [];
    items[HermesBuiltin.arraySpread(items1, 0)] = target;
    let result = map.set(_prompt, items);
    continue;
  }
  arr = Array.from(map, (arg0) => {
    [tmp, arr] = arg0;
    const mapped = arr.map((name) => {
      const intl = closure_1_0(1125).intl;
      return intl.formatToPlainString(closure_1_1(3863).tcDZw9, { name: name.name, projectId: name.projectId });
    });
    const targets = mapped.join(", ");
    let intl = require("util").intl;
    return "" + intl.formatToPlainString(_modDef3863.jZlNst, { targets }) + "\n\n" + tmp;
  });
  return arr.join("\n\n");
}
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_build_request/ConjureAppBuildRequest.tsx");

export const CONJURE_APP_BUILD_PROMPT_MAX_LENGTH = 4000;
export const CONJURE_APP_BUILD_MAX_TARGETS = 10;
export const appBuildRequestSentToast = function appBuildRequestSentToast(arr) {
  const intl = util.intl;
  const obj = { names: null };
  const mapped = arr.map((name) => name.name);
  obj.names = mapped.join(", ");
  return intl.formatToPlainString(_modDef3863.RZO35O, obj);
};
export const useConjureAppBuildRequestForm = ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureAppBuildRequestForm(arg0, prompt, arg2, arg3, arg4) {
      _require = arg0;
      importDefault = arg3;
      dependencyMap = arg4;
      const cResult = require("c").c(47);
      const arr = useConjureProjectPickerOptionsDefault(arg0);
      let num = 2;
      let obj = require("c");
      [tmp4, _slicedToArray] = first1.useState(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      [first1, project] = first1.useState(first);
      const tmp3 = _slicedToArray(first1.useState(null), 2);
      const first2 = _slicedToArray(first1.useState(prompt.prompt), num)[0];
      [closure_6, closure_7] = first1.useState(false);
      const tmp2Result4 = _slicedToArray(first1.useState(prompt.prompt), num);
      [r10054, closure_8] = first1.useState(false);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const _Map = Map;
        const map = new Map();
        cResult[1] = map;
        let tmp12 = map;
      } else {
        tmp12 = cResult[1];
      }
      closure_9 = obj2.useRef(tmp12);
      closure_10 = obj2.useRef(false);
      first1.useRef(false);
      if (cResult[2] === first1) {
        if (cResult[3] === arr) {
          if (cResult[7] !== prompt) {
            if (null != prompt.project_ids) {
              let project_ids = prompt.project_ids;
            } else if (null != prompt.project_id) {
              const items1 = [prompt.project_id];
              project_ids = items1;
            } else {
              project_ids = [];
            }
            cResult[7] = prompt;
            cResult[8] = project_ids;
          } else {
            closure_12 = tmp4;
            if (cResult[9] === tmp4) {
              if (cResult[10] === arr3) {
                closure_13 = tmp20;
                if (cResult[15] === arr3) {
                  if (cResult[16] === tmp20) {
                    const _Symbol2 = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      class W {
                        constructor(arg0) {
                          tmp = closure_3(arg0.slice(0, 10));
                          return;
                        }
                      }
                      cResult[20] = W;
                    } else {
                      class W {
                        constructor(arg0) {
                          tmp = closure_3(arg0.slice(0, 10));
                          return;
                        }
                      }
                    }
                    if (cResult[21] !== first2) {
                      class W {
                        constructor(arg0) {
                          tmp = closure_3(arg0.slice(0, 10));
                          return;
                        }
                      }
                      cResult[21] = first2;
                      cResult[22] = tmp30;
                    } else {
                      class W {
                        constructor(arg0) {
                          tmp = closure_3(arg0.slice(0, 10));
                          return;
                        }
                      }
                    }
                    closure_15 = tmp30;
                    if (arg2) {
                      class W {
                        constructor(arg0) {
                          tmp = closure_3(arg0.slice(0, 10));
                          return;
                        }
                      }
                    }
                    if (!arg2) {
                      class W {
                        constructor(arg0) {
                          tmp = closure_3(arg0.slice(0, 10));
                          return;
                        }
                      }
                      if (cResult[23] === arg4) {
                        class W {
                          constructor(arg0) {
                            tmp = closure_3(arg0.slice(0, 10));
                            return;
                          }
                        }
                        if (cResult[26] === tmp31) {
                          class W {
                            constructor(arg0) {
                              tmp = closure_3(arg0.slice(0, 10));
                              return;
                            }
                          }
                        }
                        function ae() {
                          if (closure_16) {
                            if (0 !== arr7.length) {
                              closure_7(true);
                              closure_8(false);
                              project = project.getProject(content);
                              let name;
                              if (project != null) {
                                name = project.name;
                              }
                              if (name == null) {
                                name = tmp8;
                              }
                              const intl = content(1125).intl;
                              let obj = { name, projectId: content };
                              const _HermesInternal = HermesInternal;
                              content =
                                "" + closure_15 + "\n\n" + intl.formatToPlainString(closure_1(3863).ScoZLp, obj);
                              Promise.allSettled(
                                arr7.map((projectId) => {
                                  const current = ref.current;
                                  value = current.get(projectId.projectId);
                                  content = undefined;
                                  if (value != null) {
                                    content = value.content;
                                  }
                                  if (content !== content) {
                                    const obj = { content, nonce: createNonce.createNonce() };
                                    const current2 = ref.current;
                                    const result = current2.set(projectId.projectId, obj);
                                    value = obj;
                                  }
                                  return conjureSendToProject.sendConjureMessageToProject(
                                    projectId.projectId,
                                    content,
                                    value.nonce,
                                  );
                                }),
                              ).then((result) => {
                                closure_0 = result;
                                const found = closure_14.filter(
                                  (item, index) => "fulfilled" === closure_0[index].status,
                                );
                                const items = [...closure_4, ...found.map((target) => ({ target, prompt: _prompt }))];
                                if (found.length !== closure_14.length) {
                                  if (!ref2.current) {
                                    closure_5(items);
                                    const found1 = closure_14.filter((item) => !found.includes(item));
                                    closure_3(found1.map((projectId) => projectId.projectId));
                                    closure_7(false);
                                    closure_8(true);
                                  }
                                }
                                if (items.length > 0) {
                                  closure_17(items);
                                }
                              });
                              const allSettledResult = Promise.allSettled(
                                arr7.map((projectId) => {
                                  const current = ref.current;
                                  value = current.get(projectId.projectId);
                                  content = undefined;
                                  if (value != null) {
                                    content = value.content;
                                  }
                                  if (content !== content) {
                                    const obj = { content, nonce: createNonce.createNonce() };
                                    const current2 = ref.current;
                                    const result = current2.set(projectId.projectId, obj);
                                    value = obj;
                                  }
                                  return conjureSendToProject.sendConjureMessageToProject(
                                    projectId.projectId,
                                    content,
                                    value.nonce,
                                  );
                                }),
                              );
                            } else {
                              tmp34(first1);
                            }
                          }
                        }
                        cResult[26] = tmp31;
                        cResult[27] = tmp34;
                        cResult[28] = first1;
                        cResult[29] = arg0;
                        cResult[30] = arr7;
                        cResult[31] = tmp30;
                        cResult[32] = ae;
                      }
                      function re(arr) {
                        if (!ref.current) {
                          tmp.current = true;
                          closure_7(true);
                          if (null != closure_2) {
                            tmp5(arr.map((target) => target.target));
                          } else {
                            conjureAttachmentDrafts.sendConjureCardReply(closure_0, sentMessage(arr));
                          }
                        }
                      }
                      cResult[23] = arg4;
                      cResult[24] = arg0;
                      cResult[25] = re;
                      tmp34 = re;
                    } else {
                      class W {
                        constructor(arg0) {
                          tmp = closure_3(arg0.slice(0, 10));
                          return;
                        }
                      }
                      if (arr7.length > 0) {
                        class W {
                          constructor(arg0) {
                            tmp = closure_3(arg0.slice(0, 10));
                            return;
                          }
                        }
                        const tmp32 = "" !== tmp30;
                      } else {
                        class W {
                          constructor(arg0) {
                            tmp = closure_3(arg0.slice(0, 10));
                            return;
                          }
                        }
                      }
                    }
                  }
                }
                if (cResult[18] !== cResult[11]) {
                  class W {
                    constructor(arg0) {
                      tmp = closure_3(arg0.slice(0, 10));
                      return;
                    }
                  }
                  cResult[18] = tmp20;
                  cResult[19] = Q;
                } else {
                  class W {
                    constructor(arg0) {
                      tmp = closure_3(arg0.slice(0, 10));
                      return;
                    }
                  }
                }
                let found = arr3.filter(Q);
                cResult[15] = arr3;
                cResult[16] = cResult[11];
                cResult[17] = found;
              }
            }
            if (cResult[12] !== tmp4) {
              class W {
                constructor(arg0) {
                  tmp = closure_3(arg0.slice(0, 10));
                  return;
                }
              }
              cResult[12] = tmp4;
              cResult[13] = tmp21;
              let found1 = tmp21;
            } else {
              class W {
                constructor(arg0) {
                  tmp = closure_3(arg0.slice(0, 10));
                  return;
                }
              }
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              class W {
                constructor(arg0) {
                  tmp = closure_3(arg0.slice(0, 10));
                  return;
                }
              }
              cResult[14] = H;
            } else {
              class W {
                constructor(arg0) {
                  tmp = closure_3(arg0.slice(0, 10));
                  return;
                }
              }
            }
            found1 = arr3.filter(found1);
            const mapped = found1.map(H);
            cResult[9] = tmp4;
            cResult[10] = arr3;
            cResult[11] = mapped;
          }
        }
      }
      if (cResult[5] !== first1) {
        class W {
          constructor(arg0) {
            tmp = closure_3(arg0.slice(0, 10));
            return;
          }
        }
        cResult[5] = first1;
        cResult[6] = U;
      } else {
        class W {
          constructor(arg0) {
            tmp = closure_3(arg0.slice(0, 10));
            return;
          }
        }
      }
      const found2 = arr.filter(U);
      cResult[num] = first1;
      cResult[3] = arr;
      num = 4;
      cResult[4] = found2;
      const tmp2Result6 = _slicedToArray(first1.useState(false), num);
    }
  : function useConjureAppBuildRequestForm(arg0, prompt, arg2, arg3, arg4) {
      closure_0 = arg0;
      importDefault = prompt;
      let tmp = arg2;
      dependencyMap = arg3;
      _slicedToArray = arg4;
      let tmp2 = useConjureProjectPickerOptionsDefault(arg0);
      noop = tmp2;
      [first, closure_6] = noop.useState(null);
      [first1, closure_8] = noop.useState([]);
      const tmp6 = _slicedToArray(noop.useState(prompt.prompt), 2);
      [first2, closure_10] = noop.useState(false);
      const tmp9 = _slicedToArray(noop.useState(false), 2);
      closure_11 = tmp9[1];
      closure_12 = noop.useRef(new Map());
      closure_13 = noop.useRef(false);
      noop.useRef(false);
      let items = [tmp2, first1];
      const memo = noop.useMemo(
        () => closure_4.filter((item) => !first1.some((target) => target.target.projectId === item.projectId)),
        items,
      );
      const items1 = [prompt];
      const memo1 = noop.useMemo(() => {
        if (null != _prompt.project_ids) {
          let project_ids = _prompt.project_ids;
        } else if (null != _prompt.project_id) {
          const items = [_prompt.project_id];
          project_ids = items;
        } else {
          project_ids = [];
        }
        return project_ids;
      }, items1);
      const items2 = [first, memo1, memo];
      const memo2 = noop.useMemo(() => {
        const found = memo.filter((projectId) => {
          let obj = first;
          if (first == null) {
            obj = memo1;
          }
          return obj.includes(projectId.projectId);
        });
        return found.map((projectId) => projectId.projectId);
      }, items2);
      const items3 = [memo, memo2];
      const memo3 = noop.useMemo(() => memo.filter((projectId) => memo2.includes(projectId.projectId)), items3);
      const callback = noop.useCallback((arr) => {
        closure_6(arr.slice(0, 10));
      }, []);
      const trimmed = str.trim();
      if (arg2) {
        tmp = !first2;
      }
      if (!tmp) {
        closure_20 = tmp;
        const items4 = [arg4, arg0];
        const callback1 = obj.useCallback((arr) => {
          if (!ref.current) {
            tmp.current = true;
            closure_10(true);
            if (null != closure_3) {
              tmp5(arr.map((target) => target.target));
            } else {
              conjureAttachmentDrafts.sendConjureCardReply(closure_0, sentMessage(arr));
            }
          }
        }, items4);
        const items5 = [tmp, callback1, first1, arg0, memo3, trimmed];
        const items6 = [callback1, first1, arg3, first2];
        const callback2 = obj.useCallback(() => {
          if (closure_20) {
            if (0 !== memo3.length) {
              closure_10(true);
              closure_11(false);
              const project = first.getProject(content);
              let name;
              if (project != null) {
                name = project.name;
              }
              if (name == null) {
                name = tmp8;
              }
              const intl = content(1125).intl;
              let obj = { name, projectId: content };
              const _HermesInternal = HermesInternal;
              content = "" + trimmed + "\n\n" + intl.formatToPlainString(_prompt(3863).ScoZLp, obj);
              Promise.allSettled(
                memo3.map((projectId) => {
                  const current = ref.current;
                  value = current.get(projectId.projectId);
                  content = undefined;
                  if (value != null) {
                    content = value.content;
                  }
                  if (content !== content) {
                    const obj = { content, nonce: createNonce.createNonce() };
                    const current2 = ref.current;
                    const result = current2.set(projectId.projectId, obj);
                    value = obj;
                  }
                  return conjureSendToProject.sendConjureMessageToProject(projectId.projectId, content, value.nonce);
                }),
              ).then((result) => {
                closure_0 = result;
                const found = closure_18.filter((item, index) => "fulfilled" === closure_0[index].status);
                const items = [...closure_7, ...found.map((target) => ({ target, prompt: _prompt }))];
                if (found.length !== closure_18.length) {
                  if (!ref2.current) {
                    closure_8(items);
                    const found1 = closure_18.filter((item) => !found.includes(item));
                    closure_6(found1.map((projectId) => projectId.projectId));
                    closure_10(false);
                    closure_11(true);
                  }
                }
                if (items.length > 0) {
                  closure_21(items);
                }
              });
              const allSettledResult = Promise.allSettled(
                memo3.map((projectId) => {
                  const current = ref.current;
                  value = current.get(projectId.projectId);
                  content = undefined;
                  if (value != null) {
                    content = value.content;
                  }
                  if (content !== content) {
                    const obj = { content, nonce: createNonce.createNonce() };
                    const current2 = ref.current;
                    const result = current2.set(projectId.projectId, obj);
                    value = obj;
                  }
                  return conjureSendToProject.sendConjureMessageToProject(projectId.projectId, content, value.nonce);
                }),
              );
            } else {
              callback1(first1);
            }
          }
        }, items5);
        let obj2 = {
          projects: memo,
          targetIds: memo2,
          setTargetIds: callback,
          prompt: str,
          setPrompt: tmp6[1],
          sending: first2,
          failed: tmp9[0],
          canSubmit: tmp,
          submit: callback2,
          dismiss: obj.useCallback(() => {
            closure_13.current = true;
            let tmp2 = first1.length > 0;
            if (tmp2) {
              tmp2 = !first2;
            }
            if (tmp2) {
              callback1(first1);
            }
            dependencyMap();
          }, items6),
        };
        return obj2;
      } else if (memo3.length > 0) {
        let tmp16 = "" !== trimmed;
      } else {
        tmp16 = first1.length > 0;
      }
    };
