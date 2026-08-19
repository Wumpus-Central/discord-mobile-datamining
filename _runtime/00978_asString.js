// _runtime/00978_asString.js
import _mod839 from "metro/00839__.js";
import _mod958 from "metro/00958__.js";
import truncateTextByBytes from "00961_truncateTextByBytes.js";
import _mod979 from "metro/00979__.js";

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
  obj[_mod958.GEN_AI_SYSTEM_ATTRIBUTE] = asString(str);
  obj[_mod958.GEN_AI_OPERATION_NAME_ATTRIBUTE] = chat;
  obj[_mod958.GEN_AI_REQUEST_MODEL_ATTRIBUTE] = asString(unknown);
  obj[_mod839.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN] = _mod979.LANGCHAIN_ORIGIN;
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
  if (typeof setNumberIfDefined !== "function") {
    HermesBuiltin.throwTypeError();
  }
  obj = {};
  const NumberResult = Number(temperature);
  if (!Number.isNaN(NumberResult)) {
    obj[_mod958.GEN_AI_REQUEST_TEMPERATURE_ATTRIBUTE] = NumberResult;
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
  if (typeof setNumberIfDefined !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const NumberResult1 = Number(max_tokens);
  if (!Number.isNaN(NumberResult1)) {
    obj[_mod958.GEN_AI_REQUEST_MAX_TOKENS_ATTRIBUTE] = NumberResult1;
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
  if (typeof setNumberIfDefined !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const NumberResult2 = Number(top_p);
  if (!Number.isNaN(NumberResult2)) {
    obj[_mod958.GEN_AI_REQUEST_TOP_P_ATTRIBUTE] = NumberResult2;
  }
  let frequency_penalty;
  if (temperature != null) {
    frequency_penalty = temperature.frequency_penalty;
  }
  if (typeof setNumberIfDefined !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const NumberResult3 = Number(frequency_penalty);
  if (!Number.isNaN(NumberResult3)) {
    obj[_mod958.GEN_AI_REQUEST_FREQUENCY_PENALTY_ATTRIBUTE] = NumberResult3;
  }
  let presence_penalty;
  if (temperature != null) {
    presence_penalty = temperature.presence_penalty;
  }
  if (typeof setNumberIfDefined !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const NumberResult4 = Number(presence_penalty);
  if (!Number.isNaN(NumberResult4)) {
    obj[_mod958.GEN_AI_REQUEST_PRESENCE_PENALTY_ATTRIBUTE] = NumberResult4;
  }
  let tmp20 = temperature;
  if (temperature) {
    tmp20 = "stream" in temperature;
  }
  if (tmp20) {
    const _Boolean = Boolean;
    const BooleanResult = Boolean(temperature.stream);
    if (typeof setIfDefined !== "function") {
      HermesBuiltin.throwTypeError();
    }
    if (null != BooleanResult) {
      obj[_mod958.GEN_AI_REQUEST_STREAM_ATTRIBUTE] = BooleanResult;
    }
  }
  const merged = Object.assign(obj);
  return obj;
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
function setIfDefined(arg0, arg1, arg2) {
  if (null != arg2) {
    arg0[arg1] = arg2;
  }
}
function setNumberIfDefined(arg0, arg1, arg2) {

}
arg5.extractChatModelRequestAttributes = function extractChatModelRequestAttributes(id, arr, closure_0, invocationParams, ls_provider) {
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
  if (closure_0) {
    let _Array = Array;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        const mapped = arr.flat().map((item, index) => {
          const _getType = item._getType;
          if (typeof _getType === "function") {
            const call = _getType.call;
            const formatted = typeof call === "unknown" ? _getType() : call(item).toLowerCase();
            let tmp31 = callback(979).ROLE_MAP[formatted];
            if (tmp31 == null) {
              tmp31 = formatted;
            }
            let obj = { role: null, content: null };
            obj[0] = tmp31;
            obj[1] = callback2(item.content);
            return obj;
          } else {
            const constructor = item.constructor;
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
              let tmp26 = callback(979).ROLE_MAP[formatted1];
              if (tmp26 == null) {
                tmp26 = formatted1;
              }
              obj = { role: null, content: null };
              obj[0] = tmp26;
              obj[1] = callback2(item.content);
              return obj;
            } else if (item.type) {
              const _String2 = String;
              const str15 = String(item.type);
              const formatted2 = String(item.type).toLowerCase().toLowerCase();
              let tmp21 = callback(979).ROLE_MAP[formatted2];
              if (tmp21 == null) {
                tmp21 = formatted2;
              }
              obj1 = { role: null, content: null };
              obj1[0] = tmp21;
              obj1[1] = callback2(item.content);
              return obj1;
            } else if (item.role) {
              const _String = String;
              const formatted3 = String(item.role).toLowerCase();
              let tmp15 = callback(979).ROLE_MAP[formatted3];
              if (tmp15 == null) {
                tmp15 = formatted3;
              }
              const obj2 = { role: null, content: null };
              obj2[0] = tmp15;
              obj2[1] = callback2(item.content);
              return obj2;
            } else {
              if (1 === item.lc) {
                if (item.kwargs) {
                  const id = item.id;
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
                  let tmp8 = callback(979).ROLE_MAP[formatted4];
                  if (tmp8 == null) {
                    tmp8 = formatted4;
                  }
                  const obj3 = { role: null, content: null };
                  obj3[0] = tmp8;
                  const kwargs = item.kwargs;
                  let content;
                  if (kwargs != null) {
                    content = kwargs.content;
                  }
                  obj3[1] = callback2(content);
                  return obj3;
                }
              }
              obj = { role: "user", content: null };
              obj[1] = callback2(item.content);
              return obj;
            }
          }
        });
        if (typeof setIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (null != mapped.length) {
          tmpResult[_mod958.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = length;
        }
        const flatResult = arr.flat();
        const result = truncateTextByBytes.truncateGenAiMessages(mapped);
        const tmp10 = asString(result);
        if (typeof setIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (null != tmp10) {
          tmpResult[_mod958.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp10;
        }
        const tmp12Result = truncateTextByBytes;
      }
    }
  }
  return tmpResult;
};
arg5.extractLLMRequestAttributes = function extractLLMRequestAttributes(kwargs, arr, closure_0, invocationParams, ls_provider) {
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
  if (closure_0) {
    const _Array = Array;
    if (Array.isArray(arr)) {
      if (arr.length > 0) {
        if (typeof setIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (null != arr.length) {
          tmp2Result[_mod958.GEN_AI_REQUEST_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE] = length;
        }
        const mapped = arr.map((item, index) => ({ role: "user", content: item }));
        const tmp9 = asString(mapped);
        if (typeof setIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (null != tmp9) {
          tmp2Result[_mod958.GEN_AI_REQUEST_MESSAGES_ATTRIBUTE] = tmp9;
        }
      }
    }
  }
  return tmp2Result;
};
arg5.extractLlmResponseAttributes = function extractLlmResponseAttributes(generations, flag2) {
  if (generations) {
    const obj = {};
    let _Array = Array;
    if (Array.isArray(generations.generations)) {
      generations = generations.generations;
      const mapped = generations.flat().map((item, index) => {
        const generationInfo = item.generationInfo;
        let finish_reason;
        if (generationInfo != null) {
          finish_reason = generationInfo.finish_reason;
        }
        if (finish_reason) {
          let finish_reason1 = item.generationInfo.finish_reason;
        } else {
          const generation_info = item.generation_info;
          let finish_reason2;
          if (generation_info != null) {
            finish_reason2 = generation_info.finish_reason;
          }
          finish_reason1 = null;
          if (finish_reason2) {
            finish_reason1 = item.generation_info.finish_reason;
          }
        }
        return finish_reason1;
      });
      const found = mapped.filter((item, index) => typeof item === "string");
      if (found.length > 0) {
        const tmp6 = asString(found);
        if (typeof setIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        if (null != tmp6) {
          obj[_mod958.GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE] = tmp6;
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
          callback2(arg1, callback(table[1]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, callback3(items));
        }
        const flatResult = generations.flat();
      })(generations.generations, obj);
      if (flag2) {
        const generations2 = generations.generations;
        const mapped1 = generations2.flat().map((item, index) => {
          let text = item.text;
          if (text == null) {
            const message = item.message;
            let content;
            if (message != null) {
              content = message.content;
            }
            text = content;
          }
          return text;
        });
        const found1 = mapped1.filter((item, index) => typeof item === "string");
        if (found1.length > 0) {
          const tmp14 = asString(found1);
          if (typeof setIfDefined !== "function") {
            HermesBuiltin.throwTypeError();
          }
          if (null != tmp14) {
            obj[_mod958.GEN_AI_RESPONSE_TEXT_ATTRIBUTE] = tmp14;
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
        if (typeof setNumberIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Number15 = Number;
        const NumberResult = Number(tokenUsage.promptTokens);
        const _Number16 = Number;
        if (!Number.isNaN(NumberResult)) {
          obj[_mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = NumberResult;
        }
        if (typeof setNumberIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Number17 = Number;
        const NumberResult1 = Number(tokenUsage.completionTokens);
        const _Number18 = Number;
        if (!Number.isNaN(NumberResult1)) {
          obj[_mod958.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = NumberResult1;
        }
        if (typeof setNumberIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Number19 = Number;
        const NumberResult2 = Number(tokenUsage.totalTokens);
        const _Number20 = Number;
        if (!Number.isNaN(NumberResult2)) {
          obj[_mod958.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = NumberResult2;
        }
      } else if (usage) {
        if (typeof setNumberIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Number = Number;
        const NumberResult3 = Number(usage.input_tokens);
        const _Number2 = Number;
        if (!Number.isNaN(NumberResult3)) {
          obj[_mod958.GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = NumberResult3;
        }
        if (typeof setNumberIfDefined !== "function") {
          HermesBuiltin.throwTypeError();
        }
        const _Number3 = Number;
        const NumberResult4 = Number(usage.output_tokens);
        const _Number4 = Number;
        if (!Number.isNaN(NumberResult4)) {
          obj[_mod958.GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] = NumberResult4;
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
          if (typeof setNumberIfDefined !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const _Number9 = Number;
          const NumberResult7 = Number(sum);
          const _Number10 = Number;
          if (!Number.isNaN(NumberResult7)) {
            obj[_mod958.GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE] = NumberResult7;
          }
        }
        if (undefined !== usage.cache_creation_input_tokens) {
          if (typeof setNumberIfDefined !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const _Number11 = Number;
          const NumberResult8 = Number(usage.cache_creation_input_tokens);
          const _Number12 = Number;
          if (!Number.isNaN(NumberResult8)) {
            obj[_mod958.GEN_AI_USAGE_CACHE_CREATION_INPUT_TOKENS_ATTRIBUTE] = NumberResult8;
          }
        }
        if (undefined !== usage.cache_read_input_tokens) {
          if (typeof setNumberIfDefined !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const _Number13 = Number;
          const NumberResult9 = Number(usage.cache_read_input_tokens);
          const _Number14 = Number;
          if (!Number.isNaN(NumberResult9)) {
            obj[_mod958.GEN_AI_USAGE_CACHE_READ_INPUT_TOKENS_ATTRIBUTE] = NumberResult9;
          }
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
      if (typeof setIfDefined !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != model_name) {
        obj[_mod958.GEN_AI_RESPONSE_MODEL_ATTRIBUTE] = model_name;
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
      if (typeof setIfDefined !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != id) {
        obj[_mod958.GEN_AI_RESPONSE_ID_ATTRIBUTE] = id;
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
      const tmp53 = asString(stop_reason);
      if (typeof setIfDefined !== "function") {
        HermesBuiltin.throwTypeError();
      }
      if (null != tmp53) {
        obj[_mod958.GEN_AI_RESPONSE_STOP_REASON_ATTRIBUTE] = tmp53;
      }
    }
    return obj;
  }
};
arg5.getInvocationParams = function getInvocationParams(invocation_params) {
  if (invocation_params) {
    const _Array = Array;
    if (!Array.isArray(invocation_params)) {
      return invocation_params.invocation_params;
    }
  }
};
arg5.normalizeLangChainMessages = function normalizeLangChainMessages(items) {
  return items.map((item, index) => {
    const _getType = item._getType;
    if (typeof _getType === "function") {
      const call = _getType.call;
      const formatted = typeof call === "unknown" ? _getType() : call(item).toLowerCase();
      let tmp31 = callback(979).ROLE_MAP[formatted];
      if (tmp31 == null) {
        tmp31 = formatted;
      }
      let obj = { role: null, content: null };
      obj[0] = tmp31;
      obj[1] = callback2(item.content);
      return obj;
    } else {
      const constructor = item.constructor;
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
        let tmp26 = callback(979).ROLE_MAP[formatted1];
        if (tmp26 == null) {
          tmp26 = formatted1;
        }
        obj = { role: null, content: null };
        obj[0] = tmp26;
        obj[1] = callback2(item.content);
        return obj;
      } else if (item.type) {
        const _String2 = String;
        const str15 = String(item.type);
        const formatted2 = String(item.type).toLowerCase().toLowerCase();
        let tmp21 = callback(979).ROLE_MAP[formatted2];
        if (tmp21 == null) {
          tmp21 = formatted2;
        }
        obj1 = { role: null, content: null };
        obj1[0] = tmp21;
        obj1[1] = callback2(item.content);
        return obj1;
      } else if (item.role) {
        const _String = String;
        const formatted3 = String(item.role).toLowerCase();
        let tmp15 = callback(979).ROLE_MAP[formatted3];
        if (tmp15 == null) {
          tmp15 = formatted3;
        }
        const obj2 = { role: null, content: null };
        obj2[0] = tmp15;
        obj2[1] = callback2(item.content);
        return obj2;
      } else {
        if (1 === item.lc) {
          if (item.kwargs) {
            const id = item.id;
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
            let tmp8 = callback(979).ROLE_MAP[formatted4];
            if (tmp8 == null) {
              tmp8 = formatted4;
            }
            const obj3 = { role: null, content: null };
            obj3[0] = tmp8;
            const kwargs = item.kwargs;
            let content;
            if (kwargs != null) {
              content = kwargs.content;
            }
            obj3[1] = callback2(content);
            return obj3;
          }
        }
        obj = { role: "user", content: null };
        obj[1] = callback2(item.content);
        return obj;
      }
    }
  });
};