// _runtime/01317_jsonReadOptions.js
arg5.jsonReadOptions = undefined;
arg5.jsonWriteOptions = undefined;
arg5.mergeJsonOptions = undefined;
let closure_0 = { emitDefaultValues: false, enumAsInteger: false, useProtoFieldName: false, prettySpaces: 0 };
let closure_1 = { ignoreUnknownFields: false };
arg5.jsonReadOptions = function jsonReadOptions(arg0) {
  if (arg0) {
    const _Object = Object;
    const _Object2 = Object;
    let merged = Object.assign(Object.assign({}, closure_1), arg0);
  } else {
    merged = closure_1;
  }
  return merged;
};
arg5.jsonWriteOptions = function jsonWriteOptions(prettySpaces) {
  if (prettySpaces) {
    const _Object = Object;
    const _Object2 = Object;
    let merged = Object.assign(Object.assign({}, closure_0), prettySpaces);
  } else {
    merged = closure_0;
  }
  return merged;
};
arg5.mergeJsonOptions = function mergeJsonOptions(typeRegistry, typeRegistry2) {
  const merged = Object.assign(Object.assign({}, typeRegistry), typeRegistry2);
  typeRegistry = undefined;
  if (null != typeRegistry) {
    typeRegistry = typeRegistry.typeRegistry;
  }
  if (null === typeRegistry) {
    typeRegistry = [];
  }
  const items = [...typeRegistry];
  let typeRegistry1;
  if (null != typeRegistry2) {
    typeRegistry1 = typeRegistry2.typeRegistry;
  }
  if (null === typeRegistry1) {
    typeRegistry1 = [];
  }
  HermesBuiltin.arraySpread(typeRegistry1, tmp2);
  merged.typeRegistry = items;
  return merged;
};