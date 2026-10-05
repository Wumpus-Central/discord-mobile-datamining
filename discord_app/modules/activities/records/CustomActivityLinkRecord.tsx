// discord_app/modules/activities/records/CustomActivityLinkRecord.tsx
import ApplicationAssetUtils from "../../../utils/ApplicationAssetUtils.tsx";
import utils_CustomActivityLinkUtils from "../../../../discord_common/js/shared/activities/utils/CustomActivityLinkUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/activities/records/CustomActivityLinkRecord.tsx");
class CustomActivityLinkRecord {
  constructor(link) {
    const prototype = new.target.prototype;
    const obj = utils_CustomActivityLinkUtils;
    const result = obj.decodeCustomActivityLink(link.link_id);
    let type;
    if (result != null) {
      type = result.type;
    }
    if (type == null) {
      type = null;
    }
    const obj2 = Object.create(prototype);
    obj2.type = type;
    ({ application_id: tmp3.applicationId, link_id: tmp3.linkId } = link);
    let asset_id;
    if ("asset_id" in link) {
      asset_id = link.asset_id;
    }
    obj2.assetId = asset_id;
    let asset_path;
    if ("asset_path" in link) {
      asset_path = link.asset_path;
    }
    obj2.assetPath = asset_path;
    ({ title: tmp3.title, description: tmp3.description, custom_id: tmp3.customId } = link);
    return obj2;
  }
  getAssetURL() {
    let assetImage;
    const self = this;
    if (this.type === utils_CustomActivityLinkUtils.CustomLinkType.MANAGED) {
      const tmpResult = ApplicationAssetUtils;
      assetImage = tmpResult.getAssetImage(self.applicationId, self.assetId, 512);
    } else if (self.type === utils_CustomActivityLinkUtils.CustomLinkType.QUICK) {
      const assetPath = self.assetPath;
      let combined;
      if (null != assetPath) {
        const _location = location;
        const _window = window;
        const _HermesInternal = HermesInternal;
        combined = "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/attachments-quick-links/" + assetPath;
      }
      assetImage = combined;
    }
    return assetImage;
  }
}
let prototype = CustomActivityLinkRecord.prototype;

export default CustomActivityLinkRecord;
