// === Module 1262: discord_common/IdGenerator ===

// Module 1262 (discord_common/IdGenerator)
import _modDef14 from "module_14" /* 14 */;
import Buffer from "Buffer" /* 1263 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("../discord_common/js/packages/id-generator/IdGenerator.tsx");
class IdGenerator {
  constructor() {
    const merged = Object.assign({ _randomPrefix: null, _creationTime: null, _sequenceNumber: 0 });
    merged[0] = Math.floor(4294967296 * Math.random()) | 0;
    const tmp2 = _modDef14;
    merged[1] = tmp2(Date.now());
    return merged;
  }
  generate(arg0) {
    const obj = _modDef14(arg0);
    this._sequenceNumber = +this._sequenceNumber + 1;
    const tmp2 = +this._sequenceNumber | 0;
    const str = new Buffer.Buffer(24);
    const writeInt32LE = str.writeInt32LE;
    const modResult = obj.mod(4294967296);
    writeInt32LE(modResult.toJSNumber() | 0, 0, true);
    const writeInt32LE2 = str.writeInt32LE;
    const shiftRightResult = obj.shiftRight(32);
    writeInt32LE2(shiftRightResult.toJSNumber() | 0, 4, true);
    str.writeInt32LE(this._randomPrefix, 8, true);
    const _creationTime = this._creationTime;
    const writeInt32LE3 = str.writeInt32LE;
    const modResult1 = _creationTime.mod(4294967296);
    writeInt32LE3(modResult1.toJSNumber() | 0, 12, true);
    const _creationTime2 = this._creationTime;
    const writeInt32LE4 = str.writeInt32LE;
    const shiftRightResult1 = _creationTime2.shiftRight(32);
    writeInt32LE4(shiftRightResult1.toJSNumber() | 0, 16, true);
    str.writeInt32LE(tmp2, 20, true);
    return str.toString("base64");
  }
}
const prototype = IdGenerator.prototype;

export { IdGenerator };