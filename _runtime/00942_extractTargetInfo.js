// _runtime/00942_extractTargetInfo.js
import _slicedToArray from "_slicedToArray";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = { "tools/call": null, "resources/read": null, "resources/subscribe": null, "resources/unsubscribe": null, "prompts/get": null };
obj = { targetField: "name", targetAttribute: require("module_940").MCP_TOOL_NAME_ATTRIBUTE, captureArguments: true, argumentsField: "arguments" };
obj[0] = obj;
obj = { targetField: "uri", targetAttribute: require("module_940").MCP_RESOURCE_URI_ATTRIBUTE, captureUri: true };
obj[1] = obj;
obj[2] = { targetField: "uri", targetAttribute: require("module_940").MCP_RESOURCE_URI_ATTRIBUTE };
let obj1 = { targetField: "uri", targetAttribute: require("module_940").MCP_RESOURCE_URI_ATTRIBUTE };
obj[3] = { targetField: "uri", targetAttribute: require("module_940").MCP_RESOURCE_URI_ATTRIBUTE };
const obj2 = { targetField: "uri", targetAttribute: require("module_940").MCP_RESOURCE_URI_ATTRIBUTE };
obj[4] = { targetField: "name", targetAttribute: require("module_940").MCP_PROMPT_NAME_ATTRIBUTE, captureName: true, captureArguments: true, argumentsField: "arguments" };

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
    obj = { target: null, attributes: null };
    obj[0] = tmp2;
    if (tmp2) {
      if (tmp.targetAttribute) {
        obj = {};
        obj[tmp.targetAttribute] = tmp2;
        let obj1 = obj;
      }
      obj[1] = obj1;
      return obj;
    }
    obj1 = {};
  } else {
    obj = { attributes: null };
    obj[0] = {};
    return obj;
  }
};
export const getRequestArguments = function getRequestArguments(method, uri) {
  const obj = {};
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
                let tmp9 = _slicedToArray;
                let tmp10 = _slicedToArray(tmp7, 2);
                let str = tmp10[0];
                let tmp11 = require;
                let tmp12 = dependencyMap;
                let _HermesInternal = HermesInternal;
                let _JSON = JSON;
                let combined = "" + require(940).MCP_REQUEST_ARGUMENT + "." + str.toLowerCase();
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
      const combined1 = "" + require(940).MCP_REQUEST_ARGUMENT + ".uri";
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
      const combined2 = "" + require(940).MCP_REQUEST_ARGUMENT + ".name";
      obj[combined2] = JSON.stringify(uri.name);
    }
    return obj;
  } else {
    return obj;
  }
};