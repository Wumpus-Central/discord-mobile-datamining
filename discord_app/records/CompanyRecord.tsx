// discord_app/records/CompanyRecord.tsx
import Record from "../lib/Record.tsx";
import size from "../../_runtime/metro/00002__.js";

class CompanyRecord extends Record {
  constructor(arg0) {
    const tmp = new CompanyRecord(new.target, this);
    ({ id: tmp.id, name: tmp.name } = arg0);
    return tmp;
  }
  static createFromServer(arg0) {
    if (typeof CompanyRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new CompanyRecord(tmp, tmp2);
      ({ id: tmp5.id, name: tmp5.name } = arg0);
      return tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("records/CompanyRecord.tsx");

export default CompanyRecord;
