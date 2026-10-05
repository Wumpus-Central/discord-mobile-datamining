// _runtime/00856_instrumentLangGraph.js
import SPAN_STATUS_ERROR from "00716_SPAN_STATUS_ERROR.js";
import _mod745 from "metro/00745__.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00834_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import _asyncToGenerator from "metro/00005__asyncToGenerator.js";

let c7, c8, closure_5;

function apply(arg0, arg1, arg2) {
  let obj2;
  closure_0 = arg0;
  let closure_1 = arg1;
  const length = arg2;
  let tmp = closure_0(dependencyMap[1]);
  let obj = { op: "gen_ai.create_agent", name: "create_agent", attributes: obj2 };
  obj2 = {};
  let startSpan = tmp.startSpan;
  obj2[closure_0(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = closure_0(dependencyMap[3]).LANGGRAPH_ORIGIN;
  obj2[closure_0(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = "gen_ai.create_agent";
  obj2[closure_0(dependencyMap[4]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "create_agent";
  return startSpan(obj, (setAttribute) => {
    function instrumentCompiledGraphInvoke(arg0, applyResult, arg2, arg3) {
      closure_1 = arg2;
      let closure_2 = arg3;
      let obj = {
        apply(arg0, arg1, arg2) {
          let obj2;
          applyResult = arg0;
          closure_1 = arg1;
          closure_2 = arg2;
          const tmp = applyResult(closure_1[1]);
          let obj = { op: "gen_ai.invoke_agent", name: "invoke_agent", attributes: obj2 };
          obj2 = {};
          const startSpan = tmp.startSpan;
          obj2[applyResult(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = applyResult(closure_1[3]).LANGGRAPH_ORIGIN;
          obj2[applyResult(closure_1[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP] = applyResult(
            closure_1[4],
          ).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE;
          obj2[applyResult(closure_1[4]).GEN_AI_OPERATION_NAME_ATTRIBUTE] = "invoke_agent";
          applyResult = closure_2(function* (arg0) {
            let _null;
            let c1;
            let recordInputs;
            let value;
            closure_0 = arg0;
            if (c8 === 2) {
              c8 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: null };
              }
            } else {
              let c6;
              try {
                let closure_4;
                let items;
                let apply;
                c8 = 2;
                if (0 === c7) {
                  if (arg0 === 1) {
                    c8 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c8 = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    closure_4 = tmp;
                    c1 = undefined;
                    items = undefined;
                    value = undefined;
                    c6 = 1;
                    name = undefined;
                    if (name != null) {
                      name = name.name;
                    }
                    const tmp30 = name && typeof name === "string";
                    if (tmp30) {
                      const attr = closure_0.setAttribute(closure_0(name[4]).GEN_AI_PIPELINE_NAME_ATTRIBUTE, name);
                      const attr1 = closure_0.setAttribute(closure_0(name[4]).GEN_AI_AGENT_NAME_ATTRIBUTE, name);
                      const _HermesInternal = HermesInternal;
                      closure_0.updateName("invoke_agent " + name);
                    }
                    let tmp38;
                    if (_null.length > 1) {
                      tmp38 = arr[1];
                    }
                    let configurable;
                    if (tmp38 != null) {
                      configurable = tmp38.configurable;
                    }
                    let thread_id;
                    if (configurable != null) {
                      thread_id = configurable.thread_id;
                    }
                    const tmp41 = thread_id && typeof thread_id === "string";
                    if (tmp41) {
                      const attr2 = closure_0.setAttribute(
                        closure_0(name[4]).GEN_AI_CONVERSATION_ID_ATTRIBUTE,
                        thread_id,
                      );
                    }
                    const obj6 = closure_0(name[7]);
                    const result = obj6.extractToolsFromCompiledGraph(closure_0);
                    if (result) {
                      const setAttribute = closure_0.setAttribute;
                      const _JSON = JSON;
                      const attr3 = setAttribute(
                        closure_0(name[4]).GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE,
                        JSON.stringify(result),
                      );
                    }
                    ({ recordOutputs: c1, recordInputs } = closure_2_2);
                    if (_null.length > 0) {
                      const messages = arr[0].messages;
                      name = messages;
                      if (messages == null) {
                        name = [];
                      }
                      items = name;
                    } else {
                      items = [];
                    }
                    if (items) {
                      if (recordInputs) {
                        const obj7 = closure_0(name[8]);
                        const result1 = obj7.normalizeLangChainMessages(items);
                        apply = closure_0.setAttributes;
                        const obj5 = {};
                        const obj8 = closure_0(name[9]);
                        const result2 = obj8.truncateGenAiMessages(result1);
                        const _JSON2 = JSON;
                        obj5[closure_0(name[4]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = JSON.stringify(result2);
                        obj5[closure_0(name[4]).GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = result1.length;
                        apply(obj5);
                      }
                    }
                    const _Reflect = Reflect;
                    apply = Reflect.apply;
                    c7 = 2;
                    c8 = 1;
                    const obj9 = { value: apply(closure_0, name, _null), done: false };
                    return obj9;
                  }
                } else if (1 === tmp4) {
                  c6 = 0;
                  closure_4 = closure_5;
                  const obj10 = { code: closure_0(name[5]).SPAN_STATUS_ERROR, message: "internal_error" };
                  const setStatus = closure_0.setStatus;
                  setStatus(obj10);
                  apply = closure_4;
                  const obj11 = { mechanism: { handled: false, type: "auto.ai.langgraph.error" } };
                  const obj4 = closure_0(name[6]);
                  obj4.captureException(closure_4, obj11);
                  throw closure_4;
                } else if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  const obj12 = { value, done: true };
                  return obj12;
                } else {
                  const tmp6 = c1;
                  if (tmp6) {
                    apply = closure_0;
                    _null = items;
                    const setResponseAttributes = closure_0(name[7]).setResponseAttributes;
                    const tmp10 = closure_0(name[7]);
                    if (items == null) {
                      _null = null;
                    }
                    const result3 = setResponseAttributes(apply, _null, value);
                  }
                  c6 = 0;
                  c8 = 3;
                  const obj = { value, done: true };
                  return obj;
                }
              } catch (tmp65) {
                closure_5 = tmp65;
                if (0 === c6) {
                  c8 = 3;
                  throw tmp65;
                } else {
                  c7 = 1;
                }
              }
            }
          });
          return startSpan(obj, function (arg0) {
            return closure_0(...arguments);
          });
        },
      };
      const proxy = new Proxy(arg0, obj);
      return proxy;
    }
    try {
      let first;
      let tmp = globalThis;
      let _Reflect = Reflect;
      let applyResult = Reflect.apply(closure_0, closure_1, length);
      if (length.length > 0) {
        first = length[0];
      } else {
        first = {};
      }
      let tmp6 = first;
      let name;
      if (first != null) {
        name = first.name;
      }
      if (name) {
        name = typeof tmp6.name === "string";
      }
      if (name) {
        let attr = setAttribute.setAttribute(
          ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_AGENT_NAME_ATTRIBUTE,
          tmp6.name,
        );
        let _HermesInternal = HermesInternal;
        setAttribute.updateName("create_agent " + tmp6.name);
      }
      let invoke = applyResult.invoke;
      let obj2 = invoke;
      if (obj2) {
        invoke = typeof obj2 === "function";
      }
      if (invoke) {
        applyResult.invoke = instrumentCompiledGraphInvoke(obj2.bind(applyResult), applyResult, tmp6, closure_0);
      }
      return applyResult;
    } catch (tmp22) {
      let obj = { code: SPAN_STATUS_ERROR.SPAN_STATUS_ERROR, message: "internal_error" };
      let setStatus = setAttribute.setStatus;
      setStatus(obj);
      let obj4 = _mod745;
      let obj3 = { mechanism: { handled: false, type: "auto.ai.langgraph.error" } };
      obj4.captureException(tmp22, obj3);
      throw tmp22;
    }
  });
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentLangGraph = function instrumentLangGraph(compile, arg1) {
  let apply;
  let tmp = arg1 || {};
  compile = compile.compile;
  let closure_0 = tmp;
  let obj = { apply };
  let proxy = new Proxy(compile.bind(compile), obj);
  compile.compile = proxy;
  return compile;
};
export const instrumentStateGraphCompile = function instrumentStateGraphCompile(arg0, arg1) {
  let closure_0 = arg1;
  const obj = { apply };
  const proxy = new Proxy(arg0, obj);
  return proxy;
};
