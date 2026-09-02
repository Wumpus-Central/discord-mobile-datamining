// discord_app/records/LibraryApplicationRecord.tsx
import hasFlagAll from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import toJSDefault from "../lib/Record.tsx";
import hooksDefault from "../../_runtime/04074_hooks.js";
import closure_3 from "../modules/applications/ApplicationStore.tsx";
import closure_4 from "EntitlementRecord.tsx";
import ME from "../Constants.tsx";

toJSDefault;
({ LibraryApplicationFlags: c5, Distributors: closure_6, SKUTypes: error } = ME);
let LibraryApplicationRecord;
class LibraryApplicationRecord extends tmp2 {
  constructor(arg0) {
    tmp = new LibraryApplicationRecord(new.target, new.target, global);
    // ThrowIfThisInitialized (0x7c)
    ({
      id: tmp.id,
      createdAt: tmp.createdAt,
      flags: tmp.flags,
      branchId: tmp.branchId,
      entitlements: tmp.entitlements,
      branch: tmp.branch,
      sku: tmp.sku,
    } = global);
    tmp.isTestMode = global.isTestMode || false;
    return tmp;
  }
}
const prototype = LibraryApplicationRecord.prototype;
LibraryApplicationRecord["createFromServer"] = function createFromServer(id) {
  let obj = {
    id: id.application.id,
    branchId: id.branch_id,
    entitlements: null,
    branch: null,
    flags: null,
    createdAt: null,
    sku: null,
  };
  if (null != id.entitlements) {
    let entitlements = id.entitlements;
    let mapped = entitlements.map((arg0) => closure_4.createFromServer(arg0));
  } else {
    mapped = [];
  }
  obj[2] = mapped;
  ({ branch: obj[3], flags: obj[4], created_at: obj[5] } = id);
  obj = {
    id: id.sku.id,
    type: id.sku.type,
    premium: id.sku.premium,
    preorderReleaseAt: null,
    preorderApproximateReleaseDate: null,
  };
  let entitlementsResult = null;
  if (null != id.sku.preorder_release_at) {
    entitlements = hooksDefault;
    entitlementsResult = entitlements(id.sku.preorder_release_at);
  }
  obj[3] = entitlementsResult;
  let prop = null;
  if (null != id.sku.preorder_approximate_release_date) {
    prop = id.sku.preorder_approximate_release_date;
  }
  obj[4] = prop;
  obj[6] = obj;
  if (typeof LibraryApplicationRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp7 = new LibraryApplicationRecord("Trying to call a non-function", entitlements, tmp2);
  // ThrowIfThisInitialized (0x7c)
  ({
    id: tmp7.id,
    createdAt: tmp7.createdAt,
    flags: tmp7.flags,
    branchId: tmp7.branchId,
    entitlements: tmp7.entitlements,
    branch: tmp7.branch,
    sku: tmp7.sku,
  } = obj);
  tmp7.isTestMode = obj.isTestMode || false;
  return tmp7;
};
LibraryApplicationRecord["createForTestMode"] = function createForTestMode(id) {
  id = id.id;
  const id2 = id.branch.id;
  const branch = id.branch;
  const ENTITLED = closure_5.ENTITLED;
  const created_at = id.branch.created_at;
  if (typeof LibraryApplicationRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const items = [];
  const tmp2 = new LibraryApplicationRecord(
    "Trying to call a non-function",
    LibraryApplicationRecord,
    new.target,
    id,
    created_at,
    ENTITLED,
    id2,
    items,
    branch,
  );
  // ThrowIfThisInitialized (0x7c)
  tmp2.id = id;
  tmp2.createdAt = created_at;
  tmp2.flags = ENTITLED;
  tmp2.branchId = id2;
  tmp2.entitlements = items;
  tmp2.branch = branch;
  tmp2.sku = { id: id.skuId, type: constants2.DURABLE_PRIMARY, premium: false };
  tmp2.isTestMode = true;
  return tmp2;
};
prototype["getFlags"] = function getFlags() {
  return this.flags;
};
prototype["hasFlag"] = function hasFlag(arg0) {
  return hasFlagAll.hasFlag(this.flags, arg0);
};
prototype["isHidden"] = function isHidden() {
  return this.hasFlag(closure_5.HIDDEN);
};
prototype["isLegacyOverlayEnabled"] = function isLegacyOverlayEnabled() {
  return !this.hasFlag(closure_5.OVERLAY_DISABLED);
};
prototype["isOverlayV3Enabled"] = function isOverlayV3Enabled() {
  return !this.hasFlag(closure_5.OVERLAY_V3_DISABLED);
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
prototype["isEntitled"] = function isEntitled(currentUser, closure_4) {
  const self = this;
  closure_1 = currentUser;
  closure_0 = closure_4;
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
  application = application.getApplication(this.id);
  let id = null;
  if (null != application) {
    id = application.id;
  }
  const obj = { application_id: id, application_name: null, sku_id: null, launcher_platform: null };
  let name = null;
  if (null != application) {
    name = application.name;
  }
  obj[1] = name;
  obj[2] = self.getSkuIdForAnalytics();
  obj[3] = self.getDistributor();
  return obj;
};
const result = require("set").fileFinishedImporting("records/LibraryApplicationRecord.tsx");

export default LibraryApplicationRecord;
