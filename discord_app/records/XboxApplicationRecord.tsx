// discord_app/records/XboxApplicationRecord.tsx
import PlatformsDefault from "../lib/Platforms.tsx";
import ApplicationRecord from "ApplicationRecord.tsx";

let c2 = "xbox:";
const size = fn(2);
const result = size.fileFinishedImporting("records/XboxApplicationRecord.tsx");
class XboxApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp3 = new XboxApplicationRecord(global, tmp2, tmp);
    tmp3.id = "" + c2 + global.name;
    tmp3.name = global.name;
    return tmp3;
  }
}
XboxApplicationRecord.prototype["getIconURL"] = function getIconURL() {
  return PlatformsDefault.get("xbox").icon.lightPNG;
};

export default XboxApplicationRecord;
export const XBOX_APPLICATION_ID_PREFIX = "xbox:";
