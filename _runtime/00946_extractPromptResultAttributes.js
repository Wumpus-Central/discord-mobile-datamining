// _runtime/00946_extractPromptResultAttributes.js
import _slicedToArray from "_slicedToArray";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractPromptResultAttributes = function extractPromptResultAttributes(protocolVersion, recordOutputs) {
  let _slicedToArray;
  let closure_3;
  let obj = {};
  if (obj2.isValidContentItem(protocolVersion)) {
    let tmp4 = recordOutputs;
    if (recordOutputs) {
      tmp4 = typeof protocolVersion.description === "string";
    }
    if (tmp4) {
      obj[tmp(tmp2[1]).MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE] = protocolVersion.description;
    }
    const _Array = Array;
    if (Array.isArray(protocolVersion.messages)) {
      obj[tmp(tmp2[1]).MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE] = protocolVersion.messages.length;
      if (recordOutputs) {
        const messages = protocolVersion.messages;
        function _loop2() {
          obj = obj(messages[2]);
          if (obj.isValidContentItem(closure_3)) {
            let str = "mcp.prompt.result";
            if (1 !== messages.length) {
              const _HermesInternal = HermesInternal;
              str = "mcp.prompt.result." + closure_2;
            }
            const role = tmp3.role;
            if (typeof role !== "string") {
              if (tmpResult.isValidContentItem(tmp3.content)) {
                let text = tmp3.content;
                if (typeof text.text === "string") {
                  if (1 === arr.length) {
                    const _HermesInternal5 = HermesInternal;
                    let combined = "" + str + ".message_content";
                  } else {
                    const _HermesInternal4 = HermesInternal;
                    combined = "" + str + ".content";
                  }
                  text = text.text;
                  obj[combined] = text;
                }
              }
            } else {
              if (1 === arr.length) {
                const _HermesInternal3 = HermesInternal;
                let combined1 = "" + str + ".message_" + "role";
              } else {
                const _HermesInternal2 = HermesInternal;
                combined1 = "" + str + "." + "role";
              }
              obj[combined1] = role;
            }
          } else {
            return 1;
          }
        }
        const entries = messages.entries();
        const tmp8 = entries[Symbol.iterator]();
        while (tmp8 !== undefined) {
          let tmp12 = _slicedToArray;
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
  obj2 = obj(messages[2]);
};
export const extractToolResultAttributes = function extractToolResultAttributes(protocolVersion, recordOutputs) {
  let obj = require(936) /* isJsonRpcNotification */;
  if (obj.isValidContentItem(protocolVersion)) {
    const _Array = Array;
    if (Array.isArray(protocolVersion.content)) {
      obj = (function buildAllContentItemAttributes(content, recordOutputs) {
        let closure_3;
        let closure_4;
        let closure_0 = content;
        let closure_1 = recordOutputs;
        let obj = { [closure_0(closure_1[1]).MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE]: content.length };
        function _loop() {
          const obj = content(table[2]);
          if (obj.isValidContentItem(closure_4)) {
            let str = "mcp.tool.result";
            if (1 !== content.length) {
              const _HermesInternal = HermesInternal;
              str = "mcp.tool.result." + closure_3;
            }
            if (typeof tmp3.type === "string") {
              const _HermesInternal2 = HermesInternal;
              obj["" + str + ".content_type"] = tmp3.type;
            }
            if (table) {
              const mimeType = tmp3.mimeType;
              if (typeof mimeType === "string") {
                const _HermesInternal3 = HermesInternal;
                obj["" + str + "." + "mime_type"] = mimeType;
              }
              const uri = tmp3.uri;
              if (typeof uri === "string") {
                const _HermesInternal4 = HermesInternal;
                obj["" + str + "." + "uri"] = uri;
              }
              const name = tmp3.name;
              if (typeof name === "string") {
                const _HermesInternal5 = HermesInternal;
                obj["" + str + "." + "name"] = name;
              }
              if (typeof tmp3.text === "string") {
                const _HermesInternal6 = HermesInternal;
                obj["" + str + ".content"] = tmp3.text;
              }
              if (typeof tmp3.data === "string") {
                const _HermesInternal7 = HermesInternal;
                obj["" + str + ".data_size"] = tmp3.data.length;
              }
              const resource = tmp3.resource;
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
              tmpResult = tmp(tmp2[2]);
            }
          } else {
            return 1;
          }
          tmp = content;
          tmp2 = table;
        }
        const entries = content.entries();
        while (tmp2 !== undefined) {
          let tmp4 = obj;
          let tmp5 = obj(tmp3, 2);
          [closure_3, closure_4] = tmp5;
          let _loopResult = _loop();
          continue;
        }
        return obj;
      })(protocolVersion.content, recordOutputs);
    } else {
      obj = {};
    }
    if (typeof protocolVersion.isError === "boolean") {
      obj[tmp(940).MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE] = protocolVersion.isError;
    }
    return obj;
  } else {
    return {};
  }
  tmp = require;
};