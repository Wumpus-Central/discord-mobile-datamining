// === Module 4863: fromBlob ===

// Module 4863 (fromBlob)
import _modDef4864 from "module_4864" /* 4864 */;
import closure_2 from "asyncGeneratorStep" /* 5 */;

let prototype;
prototype = function DiscordMd5() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromBlob"] = function fromBlob(arg0) {
  closure_0 = arg0;
  return callback(function*() {
    yield closure_1_0.arrayBuffer();
    return fromArrayBuffer(arg1);
  })();
};
prototype["fromArrayBuffer"] = function fromArrayBuffer(arg0) {
  const _ArrayBuffer = _modDef4864.ArrayBuffer;
  return _ArrayBuffer.hash(arg0);
};
prototype["fromDataURI"] = function fromDataURI(arg0) {
  closure_0 = arg0;
  const resolved = Promise.resolve();
  return resolved.then(() => {
    let length;
    const match = /^data:[^;]*;base64,(.*)$/.exec(callback);
    if (null == match) {
      const _Error = Error;
      error = new Error("Not a base64 data URI");
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
      const _ArrayBuffer = callback(closure_1_1[1]).ArrayBuffer;
      return _ArrayBuffer.hash(arrayBuffer);
    }
    const obj = /^data:[^;]*;base64,(.*)$/;
  });
};
const result = require("set").fileFinishedImporting("modules/discord_md5/DiscordMd5.tsx");

export default prototype;