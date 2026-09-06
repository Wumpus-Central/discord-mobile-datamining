// _runtime/00807_extractTargetInfo.js
import CLIENT_ADDRESS_ATTRIBUTE from "00805_CLIENT_ADDRESS_ATTRIBUTE.js";
import _slicedToArray from "metro/00032__.js";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = {
  "tools/call": null,
  "resources/read": null,
  "resources/subscribe": null,
  "resources/unsubscribe": null,
  "prompts/get": null,
};
obj = {
  targetField: "name",
  targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_TOOL_NAME_ATTRIBUTE,
  captureArguments: true,
  argumentsField: "arguments",
};
obj["tools/call"] = obj;
obj = { targetField: "uri", targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE, captureUri: true };
obj["resources/read"] = obj;
obj["resources/subscribe"] = {
  targetField: "uri",
  targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE,
};
let obj1 = { targetField: "uri", targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE };
obj["resources/unsubscribe"] = {
  targetField: "uri",
  targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE,
};
const obj2 = { targetField: "uri", targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_RESOURCE_URI_ATTRIBUTE };
obj["prompts/get"] = {
  targetField: "name",
  targetAttribute: CLIENT_ADDRESS_ATTRIBUTE.MCP_PROMPT_NAME_ATTRIBUTE,
  captureName: true,
  captureArguments: true,
  argumentsField: "arguments",
};

export const extractTargetInfo = function extractTargetInfo(method, params) {
  if (obj[method]) {
    let tmp2;
    if (tmp.targetField) {
      let tmp5;
      if (params != null) {
        tmp5 = params[tmp.targetField];
      }
      if (typeof tmp5 === "string") {
        tmp2 = params[tmp.targetField];
      }
    }
    obj = { target: tmp2, attributes: null };
    if (tmp2) {
      if (tmp.targetAttribute) {
        obj = {};
        obj[tmp.targetAttribute] = tmp2;
        let obj1 = obj;
      }
      obj.attributes = obj1;
      return obj;
    }
    obj1 = {};
  } else {
    obj = { attributes: {} };
    return obj;
  }
};
export const getRequestArguments = function getRequestArguments(method, uri) {
  obj = {};
  if (obj[method]) {
    if (tmp.captureArguments) {
      if (tmp.argumentsField) {
        let tmp4;
        if (uri != null) {
          tmp4 = uri[tmp.argumentsField];
        }
        if (tmp4) {
          if (typeof uri[tmp.argumentsField] === "object") {
            if (null !== tmp5) {
              const _Object = Object;
              const entries = Object.entries(tmp5);
              const tmp29 = entries[Symbol.iterator]();
              while (tmp29 !== undefined) {
                let tmp10 = _slicedToArray(tmp7, 2);
                let str = tmp10[0];
                let _HermesInternal = HermesInternal;
                let _JSON = JSON;
                let combined = "" + CLIENT_ADDRESS_ATTRIBUTE.MCP_REQUEST_ARGUMENT + "." + str.toLowerCase();
                obj[combined] = JSON.stringify(tmp10[1]);
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
