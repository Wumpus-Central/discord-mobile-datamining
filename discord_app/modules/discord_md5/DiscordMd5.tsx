// === Module 5157: DiscordMd5 ===

// Module 5157 (DiscordMd5)
import _modDef5158 from "module_5158" /* 5158 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const prototype = function DiscordMd5() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["fromBlob"] = function fromBlob(arg0) {
  closure_0 = arg0;
  return (async () => {
    await closure_0.arrayBuffer();
    return fromArrayBuffer(arg1);
  })();
};
prototype["fromArrayBuffer"] = function fromArrayBuffer(value) {
  const _ArrayBuffer = _modDef5158.ArrayBuffer;
  return _ArrayBuffer.hash(value);
};
prototype["fromDataURI"] = function fromDataURI(arg0) {
  closure_0 = arg0;
  const resolved = Promise.resolve();
  return resolved.then(() => {
    let length;
    const match = /^data:[^;]*;base64,(.*)$/.exec(closure_0);
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
      const _ArrayBuffer = _modDef5158.ArrayBuffer;
      return _ArrayBuffer.hash(arrayBuffer);
    }
    const obj = /^data:[^;]*;base64,(.*)$/;
  });
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/discord_md5/DiscordMd5.tsx");

export default prototype;