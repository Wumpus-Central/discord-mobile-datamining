// discord_app/records/LibraryApplicationRecord.tsx
import FlagUtilsAll from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import _modDef4467 from "../../_runtime/metro/04467__.js";
import Record from "../lib/Record.tsx";
import ApplicationStore from "../modules/applications/ApplicationStore.tsx";
import EntitlementRecord from "EntitlementRecord.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ LibraryApplicationFlags: hasOwnProperty, Distributors: metroRequire, SKUTypes: metroImportDefault } = Constants);
class LibraryApplicationRecord extends Record {
  constructor(isTestMode) {
    const tmp = new LibraryApplicationRecord(new.target, this, isTestMode);
    ({
      id: tmp.id,
      createdAt: tmp.createdAt,
      flags: tmp.flags,
      branchId: tmp.branchId,
      entitlements: tmp.entitlements,
      branch: tmp.branch,
      sku: tmp.sku,
    } = isTestMode);
    tmp.isTestMode = isTestMode.isTestMode || false;
    return tmp;
  }
  static createFromServer(id) {
    let entitlements;
    let entitlementsResult;
    let mapped;
    let obj2;
    let prop;
    const obj = {
      id: id.application.id,
      branchId: id.branch_id,
      entitlements: mapped,
      branch: null,
      flags: null,
      createdAt: null,
      sku: obj2,
    };
    if (null != id.entitlements) {
      entitlements = id.entitlements;
      mapped = entitlements.map((item) => EntitlementRecord.createFromServer(item));
    } else {
      mapped = [];
    }
    ({ branch: obj.branch, flags: obj.flags, created_at: obj.createdAt } = id);
    obj2 = {
      id: id.sku.id,
      type: id.sku.type,
      premium: id.sku.premium,
      preorderReleaseAt: entitlementsResult,
      preorderApproximateReleaseDate: prop,
    };
    entitlementsResult = null;
    if (null != id.sku.preorder_release_at) {
      entitlements = _modDef4467;
      entitlementsResult = entitlements(id.sku.preorder_release_at);
    }
    prop = null;
    if (null != id.sku.preorder_approximate_release_date) {
      prop = id.sku.preorder_approximate_release_date;
    }
    if (typeof LibraryApplicationRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp9 = new LibraryApplicationRecord(tmp, entitlements, tmp3);
      ({
        id: tmp9.id,
        createdAt: tmp9.createdAt,
        flags: tmp9.flags,
        branchId: tmp9.branchId,
        entitlements: tmp9.entitlements,
        branch: tmp9.branch,
        sku: tmp9.sku,
      } = obj);
      tmp9.isTestMode = obj.isTestMode || false;
      return tmp9;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  static createForTestMode(id) {
    id = id.id;
    const id2 = id.branch.id;
    const branch = id.branch;
    const ENTITLED = hasOwnProperty.ENTITLED;
    const created_at = id.branch.created_at;
    const obj = { id: id.skuId, type: metroImportDefault.DURABLE_PRIMARY, premium: false };
    if (typeof LibraryApplicationRecord === "function") {
      const items = [];
      const self = this;
      const self2 = this;
      const tmp4 = new LibraryApplicationRecord(tmp, tmp2, this, id, created_at, ENTITLED, id2, items, branch);
      tmp4.id = id;
      tmp4.createdAt = created_at;
      tmp4.flags = ENTITLED;
      tmp4.branchId = id2;
      tmp4.entitlements = items;
      tmp4.branch = branch;
      tmp4.sku = obj;
      tmp4.isTestMode = true;
      return tmp4;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  getFlags() {
    return this.flags;
  }
  hasFlag(FIND_BY_EMAIL) {
    const obj = FlagUtilsAll;
    return obj.hasFlag(this.flags, FIND_BY_EMAIL);
  }
  isHidden() {
    return this.hasFlag(hasOwnProperty.HIDDEN);
  }
  isLegacyOverlayEnabled() {
    return !this.hasFlag(hasOwnProperty.OVERLAY_DISABLED);
  }
  isOverlayV3Enabled() {
    return !this.hasFlag(hasOwnProperty.OVERLAY_V3_DISABLED);
  }
  isOverlayEnabled() {
    const self = this;
    const tmp = this.isLegacyOverlayEnabled() || self.isOverlayV3Enabled();
    return tmp;
  }
  isMasterBranch() {
    return this.branchId === this.id;
  }
  isDiscordApplication() {
    return true;
  }
  isEntitled(currentUser, SKUStore) {
    const self = this;
    let closure_1 = currentUser;
    let closure_0 = SKUStore;
    let someResult = this.isTestMode;
    if (!someResult) {
      const entitlements = this.entitlements;
      someResult = entitlements.some((isValid) => isValid.isValid(currentUser, SKUStore, self.branchId));
    }
    return someResult;
  }
  isPreorder() {
    return null != this.sku.preorderReleaseAt || null != this.sku.preorderApproximateReleaseDate;
  }
  getDistributor() {
    return metroRequire.DISCORD;
  }
  getBranchName() {
    let str = "master";
    if (null != this.branch) {
      str = this.branch.name;
    }
    return str;
  }
  getBranchedName(name) {
    const self = this;
    if (!this.isMasterBranch()) {
      if (null != self.branch) {
        const _HermesInternal = HermesInternal;
        name = "" + name.name + " (" + self.branch.name + ")";
      }
      return name;
    }
    name = name.name;
  }
  getSkuIdForAnalytics() {
    return this.sku.id;
  }
  getAnalyticsData() {
    let name;
    const self = this;
    const application = ApplicationStore.getApplication(this.id);
    let id = null;
    if (null != application) {
      id = application.id;
    }
    const obj = {
      application_id: id,
      application_name: name,
      sku_id: self.getSkuIdForAnalytics(),
      launcher_platform: self.getDistributor(),
    };
    name = null;
    if (null != application) {
      name = application.name;
    }
    return obj;
  }
}
const prototype = LibraryApplicationRecord.prototype;
const result = size.fileFinishedImporting("records/LibraryApplicationRecord.tsx");

export default LibraryApplicationRecord;
