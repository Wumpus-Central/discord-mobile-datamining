// === Module 822: extractPromptResultAttributes ===

// Module 822 (extractPromptResultAttributes)
import validateMcpServerInstance from "validateMcpServerInstance" /* 812 */;
import CLIENT_ADDRESS_ATTRIBUTE from "CLIENT_ADDRESS_ATTRIBUTE" /* 816 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractPromptResultAttributes = function extractPromptResultAttributes(description, recordOutputs) {
  let closure_3;
  let messages;
  let obj = {};
  const obj2 = obj(messages[2]);
  if (obj2.isValidContentItem(description)) {
    const tmp4 = recordOutputs && typeof description.description === "string";
    if (tmp4) {
      obj[obj(messages[1]).MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE] = description.description;
    }
    const _Array = Array;
    if (Array.isArray(description.messages)) {
      obj[obj(messages[1]).MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE] = description.messages.length;
      if (recordOutputs) {
        messages = description.messages;
        function _loop2() {
          obj = validateMcpServerInstance;
          if (obj.isValidContentItem(closure_3)) {
            let str = "mcp.prompt.result";
            if (1 !== messages.length) {
              const _HermesInternal = HermesInternal;
              str = "mcp.prompt.result." + _slicedToArray;
            }
            const role = closure_3.role;
            if (typeof role === "string") {
              let combined;
              if (1 === messages.length) {
                const _HermesInternal3 = HermesInternal;
                combined = "" + str + ".message_" + "role";
              } else {
                const _HermesInternal2 = HermesInternal;
                combined = "" + str + "." + "role";
              }
              obj[combined] = role;
            }
            const tmpResult = validateMcpServerInstance;
            if (tmpResult.isValidContentItem(closure_3.content)) {
              const content = closure_3.content;
              if (typeof content.text === "string") {
                let combined1;
                if (1 === messages.length) {
                  const _HermesInternal5 = HermesInternal;
                  combined1 = "" + str + ".message_content";
                } else {
                  const _HermesInternal4 = HermesInternal;
                  combined1 = "" + str + ".content";
                }
                obj[combined1] = content.text;
              }
            }
          } else {
            return 1;
          }
        }
        const entries = messages.entries();
        const tmp8 = entries[Symbol.iterator]();
        while (tmp8 !== undefined) {
          let tmp13 = _slicedToArray(tmp10, 2);
          [_slicedToArray, closure_3] = tmp13;
          let _loop2Result = _loop2();
          continue;
        }
      }
    }
    return obj;
  } else {
    return obj;
  }
};
export const extractToolResultAttributes = function extractToolResultAttributes(content, recordOutputs) {
  function buildAllContentItemAttributes(content, recordOutputs) {
    let closure_3;
    let closure_4;
    let closure_1 = recordOutputs;
    let obj = { [closure_0(closure_1[1]).MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE]: content.length };
    function _loop() {
      obj = validateMcpServerInstance;
      if (obj.isValidContentItem(closure_4)) {
        let str = "mcp.tool.result";
        if (1 !== content.length) {
          const _HermesInternal = HermesInternal;
          str = "mcp.tool.result." + closure_3;
        }
        if (typeof closure_4.type === "string") {
          const _HermesInternal2 = HermesInternal;
          obj["" + str + ".content_type"] = closure_4.type;
        }
        if (recordOutputs) {
          const mimeType = closure_4.mimeType;
          if (typeof mimeType === "string") {
            const _HermesInternal3 = HermesInternal;
            obj["" + str + "." + "mime_type"] = mimeType;
          }
          const uri = closure_4.uri;
          if (typeof uri === "string") {
            const _HermesInternal4 = HermesInternal;
            obj["" + str + "." + "uri"] = uri;
          }
          const name = closure_4.name;
          if (typeof name === "string") {
            const _HermesInternal5 = HermesInternal;
            obj["" + str + "." + "name"] = name;
          }
          if (typeof closure_4.text === "string") {
            const _HermesInternal6 = HermesInternal;
            obj["" + str + ".content"] = closure_4.text;
          }
          if (typeof closure_4.data === "string") {
            const _HermesInternal7 = HermesInternal;
            obj["" + str + ".data_size"] = closure_4.data.length;
          }
          const resource = closure_4.resource;
          const tmpResult = validateMcpServerInstance;
          if (tmpResult.isValidContentItem(resource)) {
            const uri2 = resource.uri;
            if (typeof uri2 === "string") {
              const _HermesInternal8 = HermesInternal;
              obj["" + str + "." + "resource_uri"] = uri2;
            }
            const mimeType2 = resource.mimeType;
            if (typeof mimeType2 === "string") {
              const _HermesInternal9 = HermesInternal;
              obj["" + str + "." + "resource_mime_type"] = mimeType2;
            }
          }
        }
      } else {
        return 1;
      }
    }
    const entries = content.entries();
    const tmp2 = entries[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = obj(tmp3, 2);
      [closure_3, closure_4] = tmp5;
      let _loopResult = _loop();
      continue;
    }
    return obj;
  }
  let obj = validateMcpServerInstance;
  if (obj.isValidContentItem(content)) {
    let obj2;
    const tmp3 = globalThis;
    const _Array = Array;
    if (Array.isArray(content.content)) {
      let tmp4 = recordOutputs;
      obj2 = buildAllContentItemAttributes(content.content, recordOutputs);
    } else {
      obj2 = {};
    }
    if (typeof content.isError === "boolean") {
      obj2[CLIENT_ADDRESS_ATTRIBUTE.MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE] = content.isError;
    }
    return obj2;
  } else {
    return {};
  }
};