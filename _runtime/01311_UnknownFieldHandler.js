// === Module 1311: UnknownFieldHandler ===

// Module 1311 (UnknownFieldHandler)
UnknownFieldHandler.UnknownFieldHandler = undefined;
UnknownFieldHandler.mergeBinaryOptions = undefined;
UnknownFieldHandler.WireType = undefined;
UnknownFieldHandler = UnknownFieldHandler.UnknownFieldHandler;
if (!UnknownFieldHandler) {
  let obj = {};
  UnknownFieldHandler.UnknownFieldHandler = obj;
  UnknownFieldHandler = obj;
}
UnknownFieldHandler.symbol = Symbol.for("protobuf-ts/unknown");
UnknownFieldHandler.onRead = (arg0, arg1, no, wireType, data) => {
  if (typeof is !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let isArray = arg1;
  if (arg1) {
    const _Array = Array;
    isArray = Array.isArray(arg1[UnknownFieldHandler.symbol]);
  }
  const symbol = UnknownFieldHandler.symbol;
  if (isArray) {
    let items = arg1[symbol];
  } else {
    items = [];
    arg1[symbol] = items;
  }
  items.push({ no, wireType, data });
};
UnknownFieldHandler.onWrite = (arg0, arg1, tag) => {
  for (const item10009 of listResult) {
    let tagResult = arg2.tag(item10009.no, item10009.wireType);
    let rawResult = tagResult.raw(item10009.data);
    continue;
  }
};
UnknownFieldHandler.list = (arg0, arg1) => {
  if (typeof is !== "function") {
    HermesBuiltin.throwTypeError();
  }
  let isArray = arg0;
  if (arg0) {
    const _Array = Array;
    isArray = Array.isArray(arg0[UnknownFieldHandler.symbol]);
  }
  if (isArray) {
    let found = arr;
    if (arg1) {
      found = arr.filter((no) => no.no == closure_0);
    }
    return found;
  } else {
    return [];
  }
};
UnknownFieldHandler.last = (arg0, arg1) => UnknownFieldHandler.list(arg0, arg1).slice(-1)[0];
function is(arg0) {

}
UnknownFieldHandler.mergeBinaryOptions = function mergeBinaryOptions(arg0, arg1) {
  return Object.assign(Object.assign({}, arg0), arg1);
};
let WireType = UnknownFieldHandler.WireType;
if (!WireType) {
  obj = {};
  UnknownFieldHandler.WireType = obj;
  WireType = obj;
}
WireType.Varint = 0;
WireType[0] = "Varint";
WireType.Bit64 = 1;
WireType[1] = "Bit64";
WireType.LengthDelimited = 2;
WireType[2] = "LengthDelimited";
WireType.StartGroup = 3;
WireType[3] = "StartGroup";
WireType.EndGroup = 4;
WireType[4] = "EndGroup";
WireType.Bit32 = 5;
WireType[5] = "Bit32";