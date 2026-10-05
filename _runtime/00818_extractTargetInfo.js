// _runtime/00818_extractTargetInfo.js
import CLIENT_ADDRESS_ATTRIBUTE from "00816_CLIENT_ADDRESS_ATTRIBUTE.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

let obj2;
let obj3;
let obj4;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = {
  "tools/call": obj2,
  "resources/read": obj3,
  "resources/subscribe": obj4,
  "resources/unsubscribe": { targetField: "uri", targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE },
  "prompts/get": {
    targetField: "name",
    targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_PROMPT_NAME_ATTRIBUTE,
    captureName: true,
    captureArguments: true,
    argumentsField: "arguments",
  },
};
obj2 = {
  targetField: "name",
  targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_TOOL_NAME_ATTRIBUTE,
  captureArguments: true,
  argumentsField: "arguments",
};
obj3 = { targetField: "uri", targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE, captureUri: true };
obj4 = { targetField: "uri", targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE };
({ targetField: "uri", targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE });
({
  targetField: "name",
  targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_PROMPT_NAME_ATTRIBUTE,
  captureName: true,
  captureArguments: true,
  argumentsField: "arguments",
});

export const extractTargetInfo = function extractTargetInfo(method, arg1) {
  if (obj[method]) {
    let tmp2;
    if (obj[method].targetField) {
      let tmp5;
      if (arg1 != null) {
        tmp5 = arg1[tmp.targetField];
      }
      if (typeof tmp5 === "string") {
        tmp2 = arg1[tmp.targetField];
      }
    }
    const obj2 = { target: tmp2, attributes: null };
    if (tmp2) {
      let obj4;
      if (obj[method].targetAttribute) {
        const obj3 = {};
        obj3[obj[method].targetAttribute] = tmp2;
        obj4 = obj3;
      }
      obj2.attributes = obj4;
      return obj2;
    }
    obj4 = {};
  } else {
    obj = { attributes: {} };
    return obj;
  }
};
export const getRequestArguments = function getRequestArguments(method3, uri) {
  let str;
  let tmp11;
  obj = {};
  if (obj[method3]) {
    if (obj[method3].captureArguments) {
      if (obj[method3].argumentsField) {
        let tmp4;
        if (uri != null) {
          tmp4 = uri[tmp.argumentsField];
        }
        if (tmp4) {
          if (typeof uri[obj[method3].argumentsField] === "object") {
            if (null !== uri[obj[method3].argumentsField]) {
              const _Object = Object;
              const entries = Object.entries(tmp5);
              const tmp30 = entries[Symbol.iterator]();
              while (tmp30 !== undefined) {
                [str, tmp11] = tmp7;
                let _HermesInternal = HermesInternal;
                let _JSON = JSON;
                let combined = "" + CLIENT_ADDRESS_ATTRIBUTE.MCP_REQUEST_ARGUMENT + "." + str.toLowerCase();
                obj[combined] = JSON.stringify(tmp11);
                continue;
              }
            }
          }
        }
      }
    }
    let captureUri = tmp.captureUri;
    if (captureUri) {
      uri = undefined;
      if (uri != null) {
        uri = uri.uri;
      }
      captureUri = uri;
    }
    if (captureUri) {
      const _HermesInternal2 = HermesInternal;
      const _JSON2 = JSON;
      const combined1 = "" + CLIENT_ADDRESS_ATTRIBUTE.MCP_REQUEST_ARGUMENT + ".uri";
      obj[combined1] = JSON.stringify(uri.uri);
    }
    let captureName = tmp.captureName;
    if (captureName) {
      let name;
      if (uri != null) {
        name = uri.name;
      }
      captureName = name;
    }
    if (captureName) {
      const _HermesInternal3 = HermesInternal;
      const _JSON3 = JSON;
      const combined2 = "" + CLIENT_ADDRESS_ATTRIBUTE.MCP_REQUEST_ARGUMENT + ".name";
      obj[combined2] = JSON.stringify(uri.name);
    }
    return obj;
  } else {
    return obj;
  }
};
