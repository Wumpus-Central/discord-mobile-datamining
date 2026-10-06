// === Module 6486: DiscordMd5 ===

// Module 6486 (DiscordMd5)
import _modDef6487 from "module_6487" /* 6487 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

class DiscordMd5 {
  static fromBlob(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let c2;
      let closure_1;
      const fromArrayBuffer = fromArrayBuffer2.fromArrayBuffer;
      await fromArrayBuffer.arrayBuffer();
      return fromArrayBuffer(value);
    })();
  }
  static fromArrayBuffer(value) {
    const _ArrayBuffer = _modDef6487.ArrayBuffer;
    return _ArrayBuffer.hash(value);
  }
  static fromDataURI(arg0) {
    let closure_0 = arg0;
    const resolved = Promise.resolve();
    return resolved.then(function() {
      let length;
      const obj = /^data:[^;]*;base64,(.*)$/;
      const match = obj.exec(closure_0);
      if (null == match) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Not a base64 data URI");
        throw error;
      } else {
        const _atob = atob;
        const atobResult = atob(match[1]);
        const _ArrayBuffer2 = ArrayBuffer;
        const self3 = this;
        const self4 = this;
        const arrayBuffer = new ArrayBuffer(atobResult.length);
        const _Uint8Array = Uint8Array;
        const self5 = this;
        const self6 = this;
        const uint8Array = new Uint8Array(arrayBuffer);
        let num = 0;
        if (0 < atobResult.length) {
          do {
            uint8Array[num] = atobResult.charCodeAt(num);
            num = num + 1;
            length = atobResult.length;
          } while (num < length);
        }
        const _ArrayBuffer = _modDef6487.ArrayBuffer;
        return _ArrayBuffer.hash(arrayBuffer);
      }
    });
  }
}
const result = size.fileFinishedImporting("modules/discord_md5/DiscordMd5.tsx");

export default DiscordMd5;