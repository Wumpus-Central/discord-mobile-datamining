// === Module 13569: PremiumUnverifiedWarning ===

// Module 13569 (PremiumUnverifiedWarning)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import initialize from "initialize" /* 504 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { warning: null };
createStyles = { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 };
createStyles.warning = createStyles;
let closure_4 = createStyles.createLegacyClassComponentStyles(createStyles);
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
PremiumUnverifiedWarning.contextType = fn(4271).ThemeContext;
let items = [UserStore];
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