// === Module 757: ? ===

// Module 757
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });

export const addUserAgentToTransportHeaders = function addUserAgentToTransportHeaders(_metadata) {
  _metadata = _metadata._metadata;
  let sdk;
  if (_metadata != null) {
    sdk = _metadata.sdk;
  }
  let name;
  if (sdk != null) {
    name = sdk.name;
  }
  let combined;
  if (name) {
    let version;
    if (sdk != null) {
      version = sdk.version;
    }
    if (version) {
      let name1;
      if (sdk != null) {
        name1 = sdk.name;
      }
      let version1;
      if (sdk != null) {
        version1 = sdk.version;
      }
      const _HermesInternal = HermesInternal;
      combined = "" + name1 + "/" + version1;
    }
  }
  let obj = {};
  const merged = Object.assign(_metadata.transportOptions);
  let tmp9 = combined;
  if (combined) {
    obj = { "user-agent": combined };
    tmp9 = obj;
  }
  obj = {};
  const merged1 = Object.assign(tmp9);
  const transportOptions = _metadata.transportOptions;
  let headers;
  if (transportOptions != null) {
    headers = transportOptions.headers;
  }
  const merged2 = Object.assign(headers);
  obj.headers = obj;
  _metadata.transportOptions = obj;
};