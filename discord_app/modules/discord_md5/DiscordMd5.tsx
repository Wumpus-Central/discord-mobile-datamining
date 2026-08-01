// === Module 4754: fromBlob ===

// Module 4754 (fromBlob)
import asyncGeneratorStep from "asyncGeneratorStep";

let prototype;
prototype = function DiscordMd5() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromBlob"] = function fromBlob(arg0) {
  let closure_0 = arg0;
  return callback(function*() {
    if (fromArrayBuffer === 2) {
      fromArrayBuffer = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        fromArrayBuffer = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            fromArrayBuffer = 3;
            throw arg1;
          } else if (arg0 === 2) {
            fromArrayBuffer = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = fromArrayBuffer;
            fromArrayBuffer = fromArrayBuffer.fromArrayBuffer;
            c2 = 1;
            fromArrayBuffer = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0.arrayBuffer();
            return obj1;
          }
        } else if (arg0 === 1) {
          fromArrayBuffer = 3;
          throw arg1;
        } else if (arg0 === 2) {
          fromArrayBuffer = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          fromArrayBuffer = 3;
          obj = { value: null, done: true };
          obj[0] = fromArrayBuffer(arg1);
          return obj;
        }
      } catch (tmp9) {
        fromArrayBuffer = tmp;
        throw tmp9;
      }
    }
  })();
};
prototype["fromArrayBuffer"] = function fromArrayBuffer(arg0) {
  const _ArrayBuffer = importDefault(4755).ArrayBuffer;
  return _ArrayBuffer.hash(arg0);
};
prototype["fromDataURI"] = function fromDataURI(arg0) {
  let closure_0 = arg0;
  const resolved = Promise.resolve();
  return resolved.then(() => {
    let length;
    const match = /^data:[^;]*;base64,(.*)$/.exec(callback);
    if (null == match) {
      const _Error = Error;
      const error = new Error("Not a base64 data URI");
      throw error;
    } else {
      const _atob = atob;
      const atobResult = atob(match[1]);
      const _ArrayBuffer2 = ArrayBuffer;
      const arrayBuffer = new ArrayBuffer(atobResult.length);
      const _Uint8Array = Uint8Array;
      const uint8Array = new Uint8Array(arrayBuffer);
      let num = 0;
      if (0 < atobResult.length) {
        do {
          uint8Array[num] = atobResult.charCodeAt(num);
          num = num + 1;
          length = atobResult.length;
        } while (num < length);
      }
      const _ArrayBuffer = callback(outer1_1[1]).ArrayBuffer;
      return _ArrayBuffer.hash(arrayBuffer);
    }
    const obj = /^data:[^;]*;base64,(.*)$/;
  });
};
const result = require("set").fileFinishedImporting("modules/discord_md5/DiscordMd5.tsx");

export default prototype;