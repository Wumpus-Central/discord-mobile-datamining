// === Module 7161: fromServer ===

// Module 7161 (fromServer)
import set from "set" /* 2 */;

let AssetDisplayConfigRecord;
class AssetDisplayConfigRecord {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    ({ desktop_max_height: tmp.desktopMaxHeight, mobile_max_height: tmp.mobileMaxHeight, responsive: tmp.responsive, background_style: tmp.backgroundStyle } = global);
    return obj;
  }
}
const prototype = AssetDisplayConfigRecord.prototype;
AssetDisplayConfigRecord["fromServer"] = function fromServer(arg0) {
  if (typeof AssetDisplayConfigRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  ({ desktop_max_height: tmp2.desktopMaxHeight, mobile_max_height: tmp2.mobileMaxHeight, responsive: tmp2.responsive, background_style: tmp2.backgroundStyle } = arg0);
  return Object.create(AssetDisplayConfigRecord.prototype);
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
const result = set.fileFinishedImporting("modules/collectibles/records/ShopAssetConfigRecord.tsx");

export { AssetDisplayConfigRecord };