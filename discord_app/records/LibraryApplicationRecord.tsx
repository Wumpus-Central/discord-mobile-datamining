// === Module 7398: LibraryApplicationRecord ===

// Module 7398 (LibraryApplicationRecord)
import FlagUtilsAll from "FlagUtils" /* 1384 */;
import _modDef4153 from "module_4153" /* 4153 */;
import Record from "Record" /* 1386 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;
import EntitlementRecord from "EntitlementRecord" /* 7395 */;

const Constants = fn(1074);
({ LibraryApplicationFlags: hasOwnProperty, Distributors: metroRequire, SKUTypes: closure_7 } = Constants);
let LibraryApplicationRecord;
class LibraryApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp = new LibraryApplicationRecord(new.target, new.target, global);
    ({ id: tmp.id, createdAt: tmp.createdAt, flags: tmp.flags, branchId: tmp.branchId, entitlements: tmp.entitlements, branch: tmp.branch, sku: tmp.sku } = global);
    tmp.isTestMode = global.isTestMode || false;
    return tmp;
  }
}
const prototype = LibraryApplicationRecord.prototype;
LibraryApplicationRecord["createFromServer"] = function createFromServer(id) {
  let obj = { id: id.application.id, branchId: id.branch_id, entitlements: null, branch: null, flags: null, createdAt: null, sku: null };
  if (null != id.entitlements) {
    let entitlements = id.entitlements;
    let mapped = entitlements.map((item) => EntitlementRecord.createFromServer(item));
  } else {
    mapped = [];
  }
  obj.entitlements = mapped;
  ({ branch: obj.branch, flags: obj.flags, created_at: obj.createdAt } = id);
  obj = { id: id.sku.id, type: id.sku.type, premium: id.sku.premium, preorderReleaseAt: null, preorderApproximateReleaseDate: null };
  let entitlementsResult = null;
  if (null != id.sku.preorder_release_at) {
    entitlements = _modDef4153;
    entitlementsResult = entitlements(id.sku.preorder_release_at);
  }
  obj.preorderReleaseAt = entitlementsResult;
  let prop = null;
  if (null != id.sku.preorder_approximate_release_date) {
    prop = id.sku.preorder_approximate_release_date;
  }
  obj.preorderApproximateReleaseDate = prop;
  obj.sku = obj;
  if (typeof LibraryApplicationRecord === "function") {
    const tmp11 = new LibraryApplicationRecord(tmp, entitlements, tmp3);
    ({ id: tmp11.id, createdAt: tmp11.createdAt, flags: tmp11.flags, branchId: tmp11.branchId, entitlements: tmp11.entitlements, branch: tmp11.branch, sku: tmp11.sku } = obj);
    tmp11.isTestMode = obj.isTestMode || false;
    return tmp11;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
LibraryApplicationRecord["createForTestMode"] = function createForTestMode(id) {
  id = id.id;
  const id2 = id.branch.id;
  const branch = id.branch;
  const ENTITLED = hasOwnProperty.ENTITLED;
  const created_at = id.branch.created_at;
  if (typeof LibraryApplicationRecord === "function") {
    const items = [];
    const tmp6 = new LibraryApplicationRecord(tmp, tmp2, new.target, id, created_at, ENTITLED, id2, items, branch);
    tmp6.id = id;
    tmp6.createdAt = created_at;
    tmp6.flags = ENTITLED;
    tmp6.branchId = id2;
    tmp6.entitlements = items;
    tmp6.branch = branch;
    tmp6.sku = obj;
    tmp6.isTestMode = true;
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  obj = { id: id.skuId, type: constants2.DURABLE_PRIMARY, premium: false };
};
prototype["getFlags"] = function getFlags() {
  return this.flags;
};
prototype["hasFlag"] = function hasFlag(IS_ANIMATED) {
  return FlagUtilsAll.hasFlag(this.flags, IS_ANIMATED);
};
prototype["isHidden"] = function isHidden() {
  return this.hasFlag(hasOwnProperty.HIDDEN);
};
prototype["isLegacyOverlayEnabled"] = function isLegacyOverlayEnabled() {
  return !this.hasFlag(hasOwnProperty.OVERLAY_DISABLED);
};
prototype["isOverlayV3Enabled"] = function isOverlayV3Enabled() {
  return !this.hasFlag(hasOwnProperty.OVERLAY_V3_DISABLED);
};
prototype["isOverlayEnabled"] = function isOverlayEnabled() {
  const self = this;
  return this.isLegacyOverlayEnabled() || self.isOverlayV3Enabled();
};
prototype["isMasterBranch"] = function isMasterBranch() {
  return this.branchId === this.id;
};
prototype["isDiscordApplication"] = function isDiscordApplication() {
  return true;
};
prototype["isEntitled"] = function isEntitled(currentUser, SKUStore) {
  const self = this;
  closure_1 = currentUser;
  closure_0 = SKUStore;
  let someResult = this.isTestMode;
  if (!someResult) {
    const entitlements = this.entitlements;
    someResult = entitlements.some((isValid) => isValid.isValid(closure_1, closure_0, self.branchId));
  }
  return someResult;
};
prototype["isPreorder"] = function isPreorder() {
  return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate;
};
prototype["getDistributor"] = function getDistributor() {
  return constants.DISCORD;
};
prototype["getBranchName"] = function getBranchName() {
  let str = "master";
  if (null != this.branch) {
    str = this.branch.name;
  }
  return str;
};
prototype["getBranchedName"] = function getBranchedName(name) {
  const self = this;
  if (!this.isMasterBranch()) {
    if (null != self.branch) {
      const _HermesInternal = HermesInternal;
      name = "" + name.name + " (" + self.branch.name + ")";
    }
    return name;
  }
  name = name.name;
};
prototype["getSkuIdForAnalytics"] = function getSkuIdForAnalytics() {
  return this.sku.id;
};
prototype["getAnalyticsData"] = function getAnalyticsData() {
  const self = this;
  const application = ApplicationStore.getApplication(this.id);
  let id = null;
  if (null != application) {
    id = application.id;
  }
  const obj = { application_id: id, application_name: null, sku_id: null, launcher_platform: null };
  let name = null;
  if (null != application) {
    name = application.name;
  }
  obj.application_name = name;
  obj.sku_id = self.getSkuIdForAnalytics();
  obj.launcher_platform = self.getDistributor();
  return obj;
};
const size = fn(2);
const result = size.fileFinishedImporting("records/LibraryApplicationRecord.tsx");

export default LibraryApplicationRecord;