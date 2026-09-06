// _runtime/00843_asString.js
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "00704_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00823_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import truncateTextByBytes from "00826_truncateTextByBytes.js";
import LANGCHAIN_INTEGRATION_NAME from "00844_LANGCHAIN_INTEGRATION_NAME.js";

require = arg1;
const dependencyMap = arg6;
function asString(str) {
  if (typeof str === "string") {
    return str;
  } else {
    try {
      const _JSON = JSON;
      return JSON.stringify(str);
    } catch (err) {
      const _String = String;
      return String(tmp);
    }
  }
}
function baseRequestAttributes(ls_provider, unknown, chat, kwargs, temperature, ls_temperature) {
  let str = ls_provider;
  if (ls_provider == null) {
    str = "langchain";
  }
  let obj = {};
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_SYSTEM_ATTRIBUTE] = asString(str);
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_OPERATION_NAME_ATTRIBUTE] = chat;
  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = asString(unknown);
  obj[SEMANTIC_ATTRIBUTE_CACHE_HIT.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = LANGCHAIN_INTEGRATION_NAME.LANGCHAIN_ORIGIN;
  if ("kwargs" in kwargs) {
    kwargs = kwargs.kwargs;
  }
  temperature = undefined;
  if (temperature != null) {
    temperature = temperature.temperature;
  }
  if (temperature == null) {
    ls_temperature = undefined;
    if (ls_temperature != null) {
      ls_temperature = ls_temperature.ls_temperature;
    }
    temperature = ls_temperature;
  }
  if (temperature == null) {
    let temperature1;
    if (kwargs != null) {
      temperature1 = kwargs.temperature;
    }
    temperature = temperature1;
  }
  if (typeof setNumberIfDefined === "function") {
    obj = {};
    const _Number = Number;
    const NumberResult = Number(temperature);
    const _Number2 = Number;
    if (!Number.isNaN(NumberResult)) {
      obj[tmp8] = NumberResult;
    }
    let max_tokens;
    if (temperature != null) {
      max_tokens = temperature.max_tokens;
    }
    if (max_tokens == null) {
      let ls_max_tokens;
      if (ls_temperature != null) {
        ls_max_tokens = ls_temperature.ls_max_tokens;
      }
      max_tokens = ls_max_tokens;
    }
    if (max_tokens == null) {
      let max_tokens1;
      if (kwargs != null) {
        max_tokens1 = kwargs.max_tokens;
      }
      max_tokens = max_tokens1;
    }
    if (typeof setNumberIfDefined === "function") {
      const _Number3 = Number;
      const NumberResult1 = Number(max_tokens);
      const _Number4 = Number;
      if (!Number.isNaN(NumberResult1)) {
        obj[tmp14] = NumberResult1;
      }
      let top_p;
      if (temperature != null) {
        top_p = temperature.top_p;
      }
      if (top_p == null) {
        let top_p1;
        if (kwargs != null) {
          top_p1 = kwargs.top_p;
        }
        top_p = top_p1;
      }
      if (typeof setNumberIfDefined === "function") {
        const _Number5 = Number;
        const NumberResult2 = Number(top_p);
        const _Number6 = Number;
        if (!Number.isNaN(NumberResult2)) {
          obj[tmp18] = NumberResult2;
        }
        if (temperature != null) {
          const frequency_penalty = temperature.frequency_penalty;
        }
        if (typeof setNumberIfDefined === "function") {
          const _Number7 = Number;
          const NumberResult3 = Number(frequency_penalty);
          const _Number8 = Number;
          if (!Number.isNaN(NumberResult3)) {
            obj[tmp20] = NumberResult3;
          }
          if (temperature != null) {
            const presence_penalty = temperature.presence_penalty;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number9 = Number;
            const NumberResult4 = Number(presence_penalty);
            const _Number10 = Number;
            if (!Number.isNaN(NumberResult4)) {
              obj[tmp22] = NumberResult4;
            }
            let tmp24 = temperature;
            if (temperature) {
              tmp24 = "stream" in temperature;
            }
            if (tmp24) {
              const _Boolean = Boolean;
              const BooleanResult = Boolean(temperature.stream);
              if (typeof setIfDefined === "function") {
                if (null != BooleanResult) {
                  obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_STREAM_ATTRIBUTE] = BooleanResult;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            const merged = Object.assign(obj);
            return obj;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function setIfDefined(arg0, GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, arg2) {
  if (null != arg2) {
    arg0[GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE] = arg2;
  }
}
function setNumberIfDefined(arg0, arg1, arg2) {}

export const extractChatModelRequestAttributes = function extractChatModelRequestAttributes(
  id,
  arr,
  arg2,
  invocationParams,
  ls_provider,
) {
  ls_provider = undefined;
  if (ls_provider != null) {
    ls_provider = ls_provider.ls_provider;
  }
  if (ls_provider == null) {
    id = id.id;
    let tmp3;
    if (id != null) {
      tmp3 = id[2];
    }
    ls_provider = tmp3;
  }
  let str;
  if (invocationParams != null) {
    str = invocationParams.model;
  }
  if (str == null) {
    let ls_model_name;
    if (ls_provider != null) {
      ls_model_name = ls_provider.ls_model_name;
    }
    str = ls_model_name;
  }
  if (str == null) {
    str = "unknown";
  }
  const tmpResult = baseRequestAttributes(ls_provider, str, "chat", id, invocationParams, ls_provider);
  if (arg2) {
    let _Array = Array;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        const mapped = arr.flat().map((_getType) => {
          _getType = _getType._getType;
          if (typeof _getType === "function") {
            const call = _getType.call;
            const formatted = typeof call === "unknown" ? _getType() : call(_getType).toLowerCase();
            let tmp31 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted];
            if (tmp31 == null) {
              tmp31 = formatted;
            }
            let obj = { role: tmp31, content: asString(_getType.content) };
            return obj;
          } else {
            const constructor = _getType.constructor;
            let name;
            if (constructor != null) {
              name = constructor.name;
            }
            if (name) {
              let str18 = "system";
              if (!name.includes("System")) {
                let str20 = "user";
                let str21 = "user";
                if (!name.includes("Human")) {
                  let str24 = "assistant";
                  if (!name.includes("AI")) {
                    str24 = "assistant";
                    if (!name.includes("Assistant")) {
                      let str27 = "function";
                      if (!name.includes("Function")) {
                        if (name.includes("Tool")) {
                          str20 = "tool";
                        }
                        str27 = str20;
                      }
                      str24 = str27;
                    }
                  }
                  str21 = str24;
                }
                str18 = str21;
              }
              const formatted1 = str18.toLowerCase();
              let tmp26 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted1];
              if (tmp26 == null) {
                tmp26 = formatted1;
              }
              obj = { role: tmp26, content: asString(_getType.content) };
              return obj;
            } else if (_getType.type) {
              const _String2 = String;
              const str15 = String(_getType.type);
              const formatted2 = String(_getType.type).toLowerCase().toLowerCase();
              let tmp21 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted2];
              if (tmp21 == null) {
                tmp21 = formatted2;
              }
              const obj1 = { role: tmp21, content: asString(_getType.content) };
              return obj1;
            } else if (_getType.role) {
              const _String = String;
              const formatted3 = String(_getType.role).toLowerCase();
              let tmp15 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted3];
              if (tmp15 == null) {
                tmp15 = formatted3;
              }
              const obj2 = { role: tmp15, content: asString(_getType.content) };
              return obj2;
            } else {
              if (1 === _getType.lc) {
                if (_getType.kwargs) {
                  const id = _getType.id;
                  const _Array = Array;
                  let str2 = "";
                  if (Array.isArray(id)) {
                    str2 = "";
                    if (id.length > 0) {
                      str2 = id[id.length - 1];
                    }
                  }
                  let str3 = "user";
                  let str4 = "user";
                  if (typeof str2 === "string") {
                    let str13 = "system";
                    if (!str2.includes("System")) {
                      let tmp4 = str3;
                      if (!str2.includes("Human")) {
                        let str8 = "assistant";
                        if (!str2.includes("AI")) {
                          str8 = "assistant";
                          if (!str2.includes("Assistant")) {
                            let str11 = "function";
                            if (!str2.includes("Function")) {
                              if (str2.includes("Tool")) {
                                str3 = "tool";
                              }
                              str11 = str3;
                            }
                            str8 = str11;
                          }
                        }
                        tmp4 = str8;
                      }
                      str13 = tmp4;
                    }
                    str4 = str13;
                  }
                  const formatted4 = str4.toLowerCase();
                  let tmp8 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted4];
                  if (tmp8 == null) {
                    tmp8 = formatted4;
                  }
                  const obj3 = { role: tmp8, content: null };
                  const kwargs = _getType.kwargs;
                  let content;
                  if (kwargs != null) {
                    content = kwargs.content;
                  }
                  obj3.content = asString(content);
                  return obj3;
                }
              }
              obj = { role: "user", content: asString(_getType.content) };
              return obj;
            }
          }
        });
        if (typeof setIfDefined === "function") {
          if (null != length) {
            tmpResult[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] =
              length;
          }
          const result = truncateTextByBytes.truncateGenAiMessages(mapped);
          const tmp10 = asString(result);
          if (typeof setIfDefined === "function") {
            if (null != tmp10) {
              tmpResult[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp10;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          const tmp12Result = truncateTextByBytes;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const flatResult = arr.flat();
      }
    }
  }
  return tmpResult;
};
export const extractLLMRequestAttributes = function extractLLMRequestAttributes(
  kwargs,
  arr,
  arg2,
  invocationParams,
  ls_provider,
) {
  ls_provider = undefined;
  if (ls_provider != null) {
    ls_provider = ls_provider.ls_provider;
  }
  let str;
  if (invocationParams != null) {
    str = invocationParams.model;
  }
  if (str == null) {
    let ls_model_name;
    if (ls_provider != null) {
      ls_model_name = ls_provider.ls_model_name;
    }
    str = ls_model_name;
  }
  if (str == null) {
    str = "unknown";
  }
  const tmp2Result = baseRequestAttributes(ls_provider, str, "pipeline", kwargs, invocationParams, ls_provider);
  if (arg2) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        if (typeof setIfDefined === "function") {
          if (null != length) {
            tmp2Result[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] =
              length;
          }
          const mapped = arr.map((content) => ({ role: "user", content }));
          const tmp9 = asString(mapped);
          if (typeof setIfDefined === "function") {
            if (null != tmp9) {
              tmp2Result[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp9;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
  }
  return tmp2Result;
};
export const extractLlmResponseAttributes = function extractLlmResponseAttributes(generations, flag2) {
  if (generations) {
    const obj = {};
    let _Array = Array;
    if (Array.isArray(generations.generations)) {
      generations = generations.generations;
      const mapped = generations.flat().map((generationInfo) => {
        generationInfo = generationInfo.generationInfo;
        let finish_reason;
        if (generationInfo != null) {
          finish_reason = generationInfo.finish_reason;
        }
        if (finish_reason) {
          let finish_reason1 = generationInfo.generationInfo.finish_reason;
        } else {
          const generation_info = generationInfo.generation_info;
          let finish_reason2;
          if (generation_info != null) {
            finish_reason2 = generation_info.finish_reason;
          }
          finish_reason1 = null;
          if (finish_reason2) {
            finish_reason1 = generationInfo.generation_info.finish_reason;
          }
        }
        return finish_reason1;
      });
      const found = mapped.filter((item) => typeof item === "string");
      if (found.length > 0) {
        const tmp6 = asString(found);
        if (typeof setIfDefined === "function") {
          if (null != tmp6) {
            obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = tmp6;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      (function addToolCallsAttributes(generations, arg1) {
        const items = [];
        const iter = generations.flat()[Symbol.iterator]();
        while (iter !== undefined) {
          let message = iter.next().message;
          let content;
          if (message != null) {
            content = message.content;
          }
          let _Array = Array;
          if (Array.isArray(content)) {
            for (const item10026 of content) {
              if ("tool_use" === item10026.type) {
                let arr = items.push(tmp6);
              }
              continue;
            }
          }
          continue;
        }
        if (items.length > 0) {
          setIfDefined(
            arg1,
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE,
            asString(items),
          );
        }
        const flatResult = generations.flat();
      })(generations.generations, obj);
      if (flag2) {
        const generations2 = generations.generations;
        const mapped1 = generations2.flat().map((text) => {
          text = text.text;
          if (text == null) {
            const message = text.message;
            let content;
            if (message != null) {
              content = message.content;
            }
            text = content;
          }
          return text;
        });
        const found1 = mapped1.filter((item) => typeof item === "string");
        if (found1.length > 0) {
          const tmp14 = asString(found1);
          if (typeof setIfDefined === "function") {
            if (null != tmp14) {
              obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = tmp14;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        const flatResult1 = generations2.flat();
      }
      let flatResult = generations.flat();
    }
    const llmOutput = generations.llmOutput;
    if (llmOutput) {
      ({ tokenUsage, usage } = llmOutput);
      if (tokenUsage) {
        if (typeof setNumberIfDefined === "function") {
          const _Number15 = Number;
          const NumberResult = Number(tmp38);
          const _Number16 = Number;
          if (!Number.isNaN(NumberResult)) {
            obj[tmp37] = NumberResult;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number17 = Number;
            const NumberResult1 = Number(tmp41);
            const _Number18 = Number;
            if (!Number.isNaN(NumberResult1)) {
              obj[tmp40] = NumberResult1;
            }
            if (typeof setNumberIfDefined === "function") {
              const _Number19 = Number;
              const NumberResult2 = Number(tmp44);
              const _Number20 = Number;
              if (!Number.isNaN(NumberResult2)) {
                obj[tmp43] = NumberResult2;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else if (usage) {
        if (typeof setNumberIfDefined === "function") {
          const _Number = Number;
          const NumberResult3 = Number(tmp20);
          const _Number2 = Number;
          if (!Number.isNaN(NumberResult3)) {
            obj[tmp19] = NumberResult3;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number3 = Number;
            const NumberResult4 = Number(tmp23);
            const _Number4 = Number;
            if (!Number.isNaN(NumberResult4)) {
              obj[tmp22] = NumberResult4;
            }
            const _Number5 = Number;
            const NumberResult5 = Number(usage.input_tokens);
            const _Number6 = Number;
            const NumberResult6 = Number(usage.output_tokens);
            const _Number7 = Number;
            let num3 = 0;
            if (!Number.isNaN(NumberResult5)) {
              num3 = NumberResult5;
            }
            const _Number8 = Number;
            let num4 = 0;
            if (!Number.isNaN(NumberResult6)) {
              num4 = NumberResult6;
            }
            const sum = num3 + num4;
            if (sum > 0) {
              if (typeof setNumberIfDefined === "function") {
                const _Number9 = Number;
                const NumberResult7 = Number(sum);
                const _Number10 = Number;
                if (!Number.isNaN(NumberResult7)) {
                  obj[tmp28] = NumberResult7;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (undefined !== usage.cache_creation_input_tokens) {
              if (typeof setNumberIfDefined === "function") {
                const _Number11 = Number;
                const NumberResult8 = Number(tmp31);
                const _Number12 = Number;
                if (!Number.isNaN(NumberResult8)) {
                  obj[tmp30] = NumberResult8;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (undefined !== usage.cache_read_input_tokens) {
              if (typeof setNumberIfDefined === "function") {
                const _Number13 = Number;
                const NumberResult9 = Number(tmp68);
                const _Number14 = Number;
                if (!Number.isNaN(NumberResult9)) {
                  obj[tmp67] = NumberResult9;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    }
    ({ llmOutput: llmOutput2, generations: generations3 } = generations);
    let first1;
    if (generations3 != null) {
      const first = generations3[0];
      if (first != null) {
        first1 = first[0];
      }
    }
    if (first1 != null) {
      let message = first1.message;
    }
    let model_name;
    if (llmOutput2 != null) {
      model_name = llmOutput2.model_name;
    }
    if (model_name == null) {
      let model;
      if (llmOutput2 != null) {
        model = llmOutput2.model;
      }
      model_name = model;
    }
    if (model_name == null) {
      let model_name1;
      if (message != null) {
        const response_metadata = message.response_metadata;
        if (response_metadata != null) {
          model_name1 = response_metadata.model_name;
        }
      }
      model_name = model_name1;
    }
    if (model_name) {
      if (typeof setIfDefined === "function") {
        if (null != model_name) {
          obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = model_name;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let id;
    if (llmOutput2 != null) {
      id = llmOutput2.id;
    }
    if (id == null) {
      let id1;
      if (message != null) {
        id1 = message.id;
      }
      id = id1;
    }
    if (id) {
      if (typeof setIfDefined === "function") {
        if (null != id) {
          obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_ID_ATTRIBUTE] = id;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    let stop_reason;
    if (llmOutput2 != null) {
      stop_reason = llmOutput2.stop_reason;
    }
    if (stop_reason == null) {
      let finish_reason;
      if (message != null) {
        const response_metadata2 = message.response_metadata;
        if (response_metadata2 != null) {
          finish_reason = response_metadata2.finish_reason;
        }
      }
      stop_reason = finish_reason;
    }
    if (stop_reason) {
      const tmp66 = asString(stop_reason);
      if (typeof setIfDefined === "function") {
        if (null != tmp66) {
          obj[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE] = tmp66;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return obj;
  }
};
export const getInvocationParams = function getInvocationParams(invocation_params) {
  if (invocation_params) {
    const _Array = Array;
    if (!Array.isArray(invocation_params)) {
      return invocation_params.invocation_params;
    }
  }
};
export const normalizeLangChainMessages = function normalizeLangChainMessages(items) {
  return items.map((_getType) => {
    _getType = _getType._getType;
    if (typeof _getType === "function") {
      const call = _getType.call;
      const formatted = typeof call === "unknown" ? _getType() : call(_getType).toLowerCase();
      let tmp31 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted];
      if (tmp31 == null) {
        tmp31 = formatted;
      }
      let obj = { role: tmp31, content: asString(_getType.content) };
      return obj;
    } else {
      const constructor = _getType.constructor;
      let name;
      if (constructor != null) {
        name = constructor.name;
      }
      if (name) {
        let str18 = "system";
        if (!name.includes("System")) {
          let str20 = "user";
          let str21 = "user";
          if (!name.includes("Human")) {
            let str24 = "assistant";
            if (!name.includes("AI")) {
              str24 = "assistant";
              if (!name.includes("Assistant")) {
                let str27 = "function";
                if (!name.includes("Function")) {
                  if (name.includes("Tool")) {
                    str20 = "tool";
                  }
                  str27 = str20;
                }
                str24 = str27;
              }
            }
            str21 = str24;
          }
          str18 = str21;
        }
        const formatted1 = str18.toLowerCase();
        let tmp26 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted1];
        if (tmp26 == null) {
          tmp26 = formatted1;
        }
        obj = { role: tmp26, content: asString(_getType.content) };
        return obj;
      } else if (_getType.type) {
        const _String2 = String;
        const str15 = String(_getType.type);
        const formatted2 = String(_getType.type).toLowerCase().toLowerCase();
        let tmp21 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted2];
        if (tmp21 == null) {
          tmp21 = formatted2;
        }
        const obj1 = { role: tmp21, content: asString(_getType.content) };
        return obj1;
      } else if (_getType.role) {
        const _String = String;
        const formatted3 = String(_getType.role).toLowerCase();
        let tmp15 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted3];
        if (tmp15 == null) {
          tmp15 = formatted3;
        }
        const obj2 = { role: tmp15, content: asString(_getType.content) };
        return obj2;
      } else {
        if (1 === _getType.lc) {
          if (_getType.kwargs) {
            const id = _getType.id;
            const _Array = Array;
            let str2 = "";
            if (Array.isArray(id)) {
              str2 = "";
              if (id.length > 0) {
                str2 = id[id.length - 1];
              }
            }
            let str3 = "user";
            let str4 = "user";
            if (typeof str2 === "string") {
              let str13 = "system";
              if (!str2.includes("System")) {
                let tmp4 = str3;
                if (!str2.includes("Human")) {
                  let str8 = "assistant";
                  if (!str2.includes("AI")) {
                    str8 = "assistant";
                    if (!str2.includes("Assistant")) {
                      let str11 = "function";
                      if (!str2.includes("Function")) {
                        if (str2.includes("Tool")) {
                          str3 = "tool";
                        }
                        str11 = str3;
                      }
                      str8 = str11;
                    }
                  }
                  tmp4 = str8;
                }
                str13 = tmp4;
              }
              str4 = str13;
            }
            const formatted4 = str4.toLowerCase();
            let tmp8 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted4];
            if (tmp8 == null) {
              tmp8 = formatted4;
            }
            const obj3 = { role: tmp8, content: null };
            const kwargs = _getType.kwargs;
            let content;
            if (kwargs != null) {
              content = kwargs.content;
            }
            obj3.content = asString(content);
            return obj3;
          }
        }
        obj = { role: "user", content: asString(_getType.content) };
        return obj;
      }
    }
  });
};
