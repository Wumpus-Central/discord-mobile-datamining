// discord_common/js/packages/id-generator/IdGenerator.tsx
const result = require("set").fileFinishedImporting("../discord_common/js/packages/id-generator/IdGenerator.tsx");
class IdGenerator {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = Math.floor(4294967296 * Math.random()) | 0;
    tmp2 = require("Integer");
    obj[1] = tmp2(Date.now());
    return obj;
  }
}
IdGenerator.prototype["generate"] = function generate(arg0) {
  const obj = require("../../../../_runtime/00014_Integer.js")(arg0);
  this._sequenceNumber = +this._sequenceNumber + 1;
  const str = new require("../../../../_runtime/00511_Buffer.js") /* Buffer */.Buffer(24);
  str.writeInt32LE(obj.mod(4294967296).toJSNumber() | 0, 0, true);
  const modResult = obj.mod(4294967296);
  const tmp2 = +this._sequenceNumber | 0;
  str.writeInt32LE(obj.shiftRight(32).toJSNumber() | 0, 4, true);
  str.writeInt32LE(this._randomPrefix, 8, true);
  const _creationTime = this._creationTime;
  const shiftRightResult = obj.shiftRight(32);
  str.writeInt32LE(_creationTime.mod(4294967296).toJSNumber() | 0, 12, true);
  const _creationTime2 = this._creationTime;
  const modResult1 = _creationTime.mod(4294967296);
  str.writeInt32LE(_creationTime2.shiftRight(32).toJSNumber() | 0, 16, true);
  str.writeInt32LE(tmp2, 20, true);
  return str.toString("base64");
};

export { IdGenerator };