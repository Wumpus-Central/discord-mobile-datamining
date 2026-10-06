// === Module 9512: LinkRecord ===

// Module 9512 (LinkRecord)
import Constants from "Constants" /* 1085 */;
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
class LinkRecord extends Record {
  constructor(arg0) {
    const tmp = new LinkRecord(new.target, this);
    ({ id: tmp.id, path: tmp.path, inviteCode: tmp.inviteCode } = arg0);
    return tmp;
  }
  static fromPath(pathname) {
    const obj = { id: pathname, path: pathname };
    if (typeof LinkRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp4 = new LinkRecord(tmp, tmp2);
      ({ id: tmp4.id, path: tmp4.path, inviteCode: tmp4.inviteCode } = obj);
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static fromInviteCode(code) {
    const combined = "invite:" + code;
    if (typeof LinkRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp6 = new LinkRecord(tmp, LinkRecord, this, combined);
      tmp6.id = combined;
      tmp6.path = tmp4;
      tmp6.inviteCode = code;
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("records/LinkRecord.tsx");

export default LinkRecord;
export { LinkRecord };