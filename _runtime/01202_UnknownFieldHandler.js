// _runtime/01202_UnknownFieldHandler.js
let UnknownFieldHandler = exports.UnknownFieldHandler;
if (!UnknownFieldHandler) {
  let obj = {};
  exports.UnknownFieldHandler = obj;
  UnknownFieldHandler = obj;
}
UnknownFieldHandler.symbol = Symbol.for("protobuf-ts/unknown");
UnknownFieldHandler.onRead = (arg0, arg1, no, wireType, data) => {
  if (typeof is === "function") {
    let items;
    let isArray = arg1;
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(arg1[UnknownFieldHandler.symbol]);
    }
    const symbol = UnknownFieldHandler.symbol;
    if (isArray) {
      items = arg1[symbol];
    } else {
      items = [];
      arg1[symbol] = items;
    }
    const obj = { no, wireType, data };
    items.push(obj);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
UnknownFieldHandler.onWrite = (arg0, arg1, tag) => {
  const listResult = UnknownFieldHandler.list(arg1);
  for (const item10009 of listResult) {
    let data = item10009.data;
    let tagResult = tag.tag(item10009.no, item10009.wireType);
    let rawResult = tagResult.raw(data);
    continue;
  }
};
UnknownFieldHandler.list = (arg0, arg1) => {
  let closure_0 = arg1;
  if (typeof is === "function") {
    let isArray = arg0;
    if (isArray) {
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
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
UnknownFieldHandler.last = (arg0, arg1) => {
  const listResult = UnknownFieldHandler.list(arg0, arg1);
  return listResult.slice(-1)[0];
};
function is(arg0) {}
let WireType = exports.WireType;
if (!WireType) {
  const obj2 = {};
  exports.WireType = obj2;
  WireType = obj2;
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

export const mergeBinaryOptions = function mergeBinaryOptions(arg0, arg1) {
  return Object.assign(Object.assign({}, arg0), arg1);
};
