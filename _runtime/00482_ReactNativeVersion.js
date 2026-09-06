// _runtime/00482_ReactNativeVersion.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

class ReactNativeVersion {
  constructor() {
    tmp = closure_0(this, ReactNativeVersion);
    return;
  }
}
_classCallCheck = ReactNativeVersion;
const entry = {
  key: "getVersionString",
  value: function getVersionString() {
    ({ major, minor, patch } = this);
    let str = "";
    if (null != this.prerelease) {
      const _HermesInternal = HermesInternal;
      str = "-" + this.prerelease;
    }
    return "" + major + "." + minor + "." + patch + str;
  },
};
const items = [entry];
const tmp2 = _createClassDefault(ReactNativeVersion, null, items);
tmp2.major = 0;
tmp2.minor = 86;
tmp2.patch = 0;
tmp2.prerelease = null;

export default tmp2;
export const version = { major: tmp2.major, minor: tmp2.minor, patch: tmp2.patch, prerelease: tmp2.prerelease };
