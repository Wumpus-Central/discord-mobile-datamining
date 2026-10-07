// discord_app/modules/collectibles/records/ShopAssetConfigRecord.tsx
import size from "../../../../_runtime/metro/00002__.js";

let AssetDisplayConfigRecord;
class AssetDisplayConfigRecord {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    ({
      desktop_max_height: tmp.desktopMaxHeight,
      mobile_max_height: tmp.mobileMaxHeight,
      responsive: tmp.responsive,
      background_style: tmp.backgroundStyle,
    } = global);
    return obj;
  }
}
const prototype = AssetDisplayConfigRecord.prototype;
AssetDisplayConfigRecord["fromServer"] = function fromServer(arg0) {
  if (typeof AssetDisplayConfigRecord === "function") {
    ({
      desktop_max_height: tmp3.desktopMaxHeight,
      mobile_max_height: tmp3.mobileMaxHeight,
      responsive: tmp3.responsive,
      background_style: tmp3.backgroundStyle,
    } = arg0);
    return Object.create(tmp.prototype);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["toDesktopStyles"] = function toDesktopStyles() {
  const self = this;
  const obj = {};
  if (null != this.desktopMaxHeight) {
    obj.maxHeight = self.desktopMaxHeight;
  }
  if (null != self.backgroundStyle) {
    obj.background = self.backgroundStyle;
  }
  let tmp;
  if (Object.keys(obj).length > 0) {
    tmp = obj;
  }
  return tmp;
};
prototype["toMobileStyles"] = function toMobileStyles() {
  const self = this;
  const obj = {};
  if (null != this.mobileMaxHeight) {
    obj.maxHeight = self.mobileMaxHeight;
  }
  if (null != self.backgroundStyle) {
    obj.background = self.backgroundStyle;
  }
  let tmp;
  if (Object.keys(obj).length > 0) {
    tmp = obj;
  }
  return tmp;
};
const result = size.fileFinishedImporting("modules/collectibles/records/ShopAssetConfigRecord.tsx");

export { AssetDisplayConfigRecord };
