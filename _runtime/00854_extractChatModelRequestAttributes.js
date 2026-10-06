// _runtime/00854_extractChatModelRequestAttributes.js
import SEMANTIC_ATTRIBUTE_CACHE_HIT from "00715_SEMANTIC_ATTRIBUTE_CACHE_HIT.js";
import ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE from "00834_ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.js";
import DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT from "00837_DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT.js";
import LANGCHAIN_INTEGRATION_NAME from "00855_LANGCHAIN_INTEGRATION_NAME.js";

let generationInfo, text;

const f82198 = (_getType) => {
  let content;
  _getType = _getType._getType;
  if (typeof _getType === "function") {
    const str29 = _getType.call(_getType);
    const formatted = str29.toLowerCase();
    let tmp31 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted];
    if (tmp31 == null) {
      tmp31 = formatted;
    }
    const obj2 = { role: tmp31, content: asString(_getType.content) };
    return obj2;
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
      const obj3 = { role: tmp26, content: asString(_getType.content) };
      return obj3;
    } else if (_getType.type) {
      const _String2 = String;
      const str15 = String(_getType.type);
      const str16 = str15.toLowerCase();
      const formatted2 = str16.toLowerCase();
      let tmp21 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted2];
      if (tmp21 == null) {
        tmp21 = formatted2;
      }
      const obj4 = { role: tmp21, content: asString(_getType.content) };
      return obj4;
    } else if (_getType.role) {
      const _String = String;
      const str14 = String(_getType.role);
      const formatted3 = str14.toLowerCase();
      let tmp15 = LANGCHAIN_INTEGRATION_NAME.ROLE_MAP[formatted3];
      if (tmp15 == null) {
        tmp15 = formatted3;
      }
      const obj5 = { role: tmp15, content: asString(_getType.content) };
      return obj5;
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
          const kwargs = _getType.kwargs;
          const obj6 = { role: tmp8, content: asString(content) };
          content = undefined;
          if (kwargs != null) {
            content = kwargs.content;
          }
          return obj6;
        }
      }
      const obj = { role: "user", content: asString(_getType.content) };
      return obj;
    }
  }
};
function asString(str) {
  if (typeof str === "string") {
    return str;
  } else {
    try {
      const _JSON = JSON;
      return JSON.stringify(str);
    } catch (err) {
      const _String = String;
      return String(str);
    }
  }
}
function baseRequestAttributes(ls_provider, unknown, chat, kwargs, temperature, ls_temperature) {
  let str = ls_provider;
  const GEN_AI_SYSTEM_ATTRIBUTE = ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_SYSTEM_ATTRIBUTE;
  if (ls_provider == null) {
    str = "langchain";
  }
  const obj = {};
  obj[GEN_AI_SYSTEM_ATTRIBUTE] = asString(str);
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
    const obj2 = {};
    const _Number = Number;
    const NumberResult = Number(temperature);
    const _Number2 = Number;
    if (!Number.isNaN(NumberResult)) {
      obj2[tmp8] = NumberResult;
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
        obj2[tmp14] = NumberResult1;
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
        let frequency_penalty;
        const _Number5 = Number;
        const NumberResult2 = Number(top_p);
        const _Number6 = Number;
        if (!Number.isNaN(NumberResult2)) {
          obj2[tmp18] = NumberResult2;
        }
        if (temperature != null) {
          frequency_penalty = temperature.frequency_penalty;
        }
        if (typeof setNumberIfDefined === "function") {
          let presence_penalty;
          const _Number7 = Number;
          const NumberResult3 = Number(frequency_penalty);
          const _Number8 = Number;
          if (!Number.isNaN(NumberResult3)) {
            obj2[tmp20] = NumberResult3;
          }
          if (temperature != null) {
            presence_penalty = temperature.presence_penalty;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number9 = Number;
            const NumberResult4 = Number(presence_penalty);
            const _Number10 = Number;
            if (!Number.isNaN(NumberResult4)) {
              obj2[tmp22] = NumberResult4;
            }
            const tmp24 = temperature && "stream" in temperature;
            if (tmp24) {
              const _Boolean = Boolean;
              const GEN_AI_REQUEST_STREAM_ATTRIBUTE =
                ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_STREAM_ATTRIBUTE;
              const BooleanResult = Boolean(temperature.stream);
              if (typeof setIfDefined === "function") {
                if (null != BooleanResult) {
                  obj2[GEN_AI_REQUEST_STREAM_ATTRIBUTE] = BooleanResult;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            const merged = Object.assign(obj2);
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
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
        const flatResult = arr.flat();
        const mapped = flatResult.map(f82198);
        if (typeof setIfDefined === "function") {
          if (null != mapped.length) {
            tmpResult[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] =
              mapped.length;
          }
          const tmp12Result = DEFAULT_GEN_AI_MESSAGES_BYTE_LIMIT;
          const result = tmp12Result.truncateGenAiMessages(mapped);
          const GEN_AI_REQUEST_MESSAGES_ATTRIBUTE =
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
          const tmp10 = asString(result);
          if (typeof setIfDefined === "function") {
            if (null != tmp10) {
              tmpResult[GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp10;
            }
          } else {
            let str3 = "Trying to call a non-function";
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          let str2 = "Trying to call a non-function";
          throw new TypeError("Trying to call a non-function");
        }
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
          if (null != arr.length) {
            tmp2Result[ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] =
              arr.length;
          }
          const mapped = arr.map((content) => ({ role: "user", content }));
          const GEN_AI_REQUEST_MESSAGES_ATTRIBUTE =
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE;
          const tmp9 = asString(mapped);
          if (typeof setIfDefined === "function") {
            if (null != tmp9) {
              tmp2Result[GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp9;
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
  let generations3;
  let llmOutput2;
  let tokenUsage;
  let usage;
  function addToolCallsAttributes(generations, arg1) {
    const items = [];
    const flatResult = generations.flat();
    const iter = flatResult[Symbol.iterator]();
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
  }
  const tmp = generations;
  if (tmp) {
    let message;
    const obj = {};
    let _Array = Array;
    if (Array.isArray(generations.generations)) {
      generations = generations.generations;
      let flatResult = generations.flat();
      const mapped = flatResult.map((generationInfo) => {
        let finish_reason1;
        generationInfo = generationInfo.generationInfo;
        let finish_reason;
        if (generationInfo != null) {
          finish_reason = generationInfo.finish_reason;
        }
        if (finish_reason) {
          finish_reason1 = generationInfo.generationInfo.finish_reason;
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
        const GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE =
          ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE;
        const tmp7 = asString(found);
        if (typeof setIfDefined === "function") {
          if (null != tmp7) {
            obj[GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = tmp7;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      addToolCallsAttributes(generations.generations, obj);
      if (flag2) {
        const generations2 = generations.generations;
        const flatResult1 = generations2.flat();
        const mapped1 = flatResult1.map((text) => {
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
          const GEN_AI_RESPONSE_TEXT_ATTRIBUTE =
            ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_TEXT_ATTRIBUTE;
          const tmp15 = asString(found1);
          if (typeof setIfDefined === "function") {
            if (null != tmp15) {
              obj[GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = tmp15;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
      }
    }
    const llmOutput = generations.llmOutput;
    if (llmOutput) {
      ({ tokenUsage, usage } = llmOutput);
      if (tokenUsage) {
        if (typeof setNumberIfDefined === "function") {
          const _Number15 = Number;
          const NumberResult = Number(tmp39);
          const _Number16 = Number;
          if (!Number.isNaN(NumberResult)) {
            obj[tmp38] = NumberResult;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number17 = Number;
            const NumberResult1 = Number(tmp42);
            const _Number18 = Number;
            if (!Number.isNaN(NumberResult1)) {
              obj[tmp41] = NumberResult1;
            }
            if (typeof setNumberIfDefined === "function") {
              const _Number19 = Number;
              const NumberResult2 = Number(tmp45);
              const _Number20 = Number;
              if (!Number.isNaN(NumberResult2)) {
                obj[tmp44] = NumberResult2;
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
          const NumberResult3 = Number(tmp21);
          const _Number2 = Number;
          if (!Number.isNaN(NumberResult3)) {
            obj[tmp20] = NumberResult3;
          }
          if (typeof setNumberIfDefined === "function") {
            const _Number3 = Number;
            const NumberResult4 = Number(tmp24);
            const _Number4 = Number;
            if (!Number.isNaN(NumberResult4)) {
              obj[tmp23] = NumberResult4;
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
                  obj[tmp29] = NumberResult7;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (undefined !== usage.cache_creation_input_tokens) {
              if (typeof setNumberIfDefined === "function") {
                const _Number11 = Number;
                const NumberResult8 = Number(tmp32);
                const _Number12 = Number;
                if (!Number.isNaN(NumberResult8)) {
                  obj[tmp31] = NumberResult8;
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            if (undefined !== usage.cache_read_input_tokens) {
              if (typeof setNumberIfDefined === "function") {
                const _Number13 = Number;
                const NumberResult9 = Number(tmp69);
                const _Number14 = Number;
                if (!Number.isNaN(NumberResult9)) {
                  obj[tmp68] = NumberResult9;
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
      message = first1.message;
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
      const GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE =
        ANTHROPIC_AI_RESPONSE_TIMESTAMP_ATTRIBUTE.GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE;
      const tmp67 = asString(stop_reason);
      if (typeof setIfDefined === "function") {
        if (null != tmp67) {
          obj[GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE] = tmp67;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return obj;
  }
};
export const getInvocationParams = function getInvocationParams(invocation_params) {
  const tmp = invocation_params;
  if (tmp) {
    const _Array = Array;
    if (!Array.isArray(invocation_params)) {
      return invocation_params.invocation_params;
    }
  }
};
export const normalizeLangChainMessages = function normalizeLangChainMessages(items) {
  return items.map(f82198);
};
