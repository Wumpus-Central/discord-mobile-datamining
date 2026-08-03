// === Module 7424: createCheckInEnvelope ===

// Module 7424 (createCheckInEnvelope)
const require = arg1;
const dependencyMap = arg6;
arg5.createCheckInEnvelope = function createCheckInEnvelope(arg0, arg1, sdk) {
  let obj = { sent_at: null };
  obj[0] = new Date().toISOString();
  if (sdk) {
    sdk = sdk.sdk;
  }
  if (sdk) {
    obj = { name: null, version: null };
    obj[0] = sdk.sdk.name;
    obj[1] = sdk.sdk.version;
    obj.sdk = obj;
  }
  let tmp = arg3;
  if (arg3) {
    tmp = arg4;
  }
  if (tmp) {
    obj.dsn = require(7410) /* dsnFromString */.dsnToString(arg4);
    const obj4 = require(7410) /* dsnFromString */;
  }
  if (arg1) {
    obj.trace = require(7369) /* addNonEnumerableProperty */.dropUndefinedKeys(arg1);
    const obj5 = require(7369) /* addNonEnumerableProperty */;
  }
  const items = [{ type: "check_in" }, arg0];
  const date = new Date();
  const items1 = [items];
  return require(7407) /* forEachEnvelopeItem */.createEnvelope(obj, items1);
};