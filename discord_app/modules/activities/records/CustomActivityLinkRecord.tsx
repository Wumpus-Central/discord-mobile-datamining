// === Module 12942: CustomActivityLinkRecord ===

// Module 12942 (CustomActivityLinkRecord)
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8139 */;
import CustomActivityLinkUtils from "CustomActivityLinkUtils" /* 12940 */;
import utils_CustomActivityLinkUtils from "utils/CustomActivityLinkUtils" /* 12943 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/activities/records/CustomActivityLinkRecord.tsx");
class CustomActivityLinkRecord {
  constructor(arg0) {
    obj = closure_0(closure_1[0]);
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
  if (this.type === utils_CustomActivityLinkUtils.CustomLinkType.MANAGED) {
    let tmpResult = ApplicationAssetUtils;
    let assetImage = tmpResult.getAssetImage(self.applicationId, self.assetId, 512);
  } else if (self.type === utils_CustomActivityLinkUtils.CustomLinkType.QUICK) {
    tmpResult = CustomActivityLinkUtils;
    assetImage = tmpResult.getQuickLinkImage(self.assetPath);
  }
  return assetImage;
};

export default CustomActivityLinkRecord;