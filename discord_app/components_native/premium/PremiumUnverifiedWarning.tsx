// === Module 13696: PremiumUnverifiedWarning ===

// Module 13696 (PremiumUnverifiedWarning)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;
import initialize from "initialize" /* 504 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
const obj2 = { warning: { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 } };
let closure_4 = createStyles.createLegacyClassComponentStyles(obj2);
const PureComponent = noop.PureComponent;
class PremiumUnverifiedWarning extends PureComponent {
}
PremiumUnverifiedWarning.prototype["render"] = function render() {
  let tmp3 = null;
  if (!this.props.verified) {
    const obj = { style: null, children: null };
    const items = [tmp.warning, tmp2];
    obj.style = items;
    const intl = util.intl;
    obj.children = intl.string(util.t["0LgOKH"]);
    tmp3 = jsx(native.LegacyText, { style: null, children: null });
  }
  return tmp3;
};
PremiumUnverifiedWarning.contextType = fn(4787).ThemeContext;
let items = [UserStore];
const obj3 = { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumUnverifiedWarning.tsx");

export default initialize.connectStores(items, () => {
  const currentUser = UserStore.getCurrentUser();
  let verified;
  if (currentUser != null) {
    verified = currentUser.verified;
  }
  if (verified == null) {
    verified = false;
  }
  return { verified };
})(PremiumUnverifiedWarning);