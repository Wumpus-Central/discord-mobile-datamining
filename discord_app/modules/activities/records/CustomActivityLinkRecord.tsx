// discord_app/modules/activities/records/CustomActivityLinkRecord.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import updateAssets from "../../../utils/ApplicationAssetUtils.tsx";
import fetchCustomActivityLink from "../utils/CustomActivityLinkUtils.tsx";
import CustomLinkType from "../../../../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx";

let result = obj132.fileFinishedImporting("modules/activities/records/CustomActivityLinkRecord.tsx");
class CustomActivityLinkRecord {
  constructor(arg0) {
    obj = require("CustomLinkType");
    result = obj.decodeCustomActivityLink(global.link_id);
    type = undefined;
    if (result != null) {
      type = result.type;
    }
    if (type == null) {
      type = null;
    }
    obj = Object.create(new.target.prototype);
    obj.type = type;
    ({ application_id: tmp3.applicationId, link_id: tmp3.linkId } = global);
    asset_id = undefined;
    if ("asset_id" in global) {
      asset_id = global.asset_id;
    }
    obj.assetId = asset_id;
    asset_path = undefined;
    if ("asset_path" in global) {
      asset_path = global.asset_path;
    }
    obj.assetPath = asset_path;
    ({ title: tmp3.title, description: tmp3.description, custom_id: tmp3.customId } = global);
    return obj;
  }
}
CustomActivityLinkRecord.prototype["getAssetURL"] = function getAssetURL() {
  const self = this;
  if (this.type === CustomLinkType.CustomLinkType.MANAGED) {
    let tmpResult = updateAssets;
    let assetImage = tmpResult.getAssetImage(self.applicationId, self.assetId, 512);
  } else if (self.type === CustomLinkType.CustomLinkType.QUICK) {
    tmpResult = fetchCustomActivityLink;
    assetImage = tmpResult.getQuickLinkImage(self.assetPath);
  }
  return assetImage;
};

export default CustomActivityLinkRecord;