// === Module 13119: render ===

// Module 13119 (render)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import importDefaultResult from "mergeGuildAvatar" /* 1922 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;
import importAllResult from "noop" /* 19 */;
import importDefaultResult1 from "initialize" /* 589 */;

require = arg1;
createCacheKey = { warning: null };
createCacheKey = { color: ThemesDefault.unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class PremiumUnverifiedWarning extends PureComponent {
}
PremiumUnverifiedWarning.prototype["render"] = function render() {
  let tmp3 = null;
  if (!this.props.verified) {
    const obj = { style: null, children: null };
    const items = [tmp.warning, tmp2];
    obj[0] = items;
    const intl = getSystemLocale.intl;
    obj[1] = intl.string(getSystemLocale.t["0LgOKH"]);
    tmp3 = jsx(Button.LegacyText, { style: null, children: null });
  }
  return tmp3;
};
PremiumUnverifiedWarning.contextType = require("ManaContext").ThemeContext;
let items = [importDefaultResult];
const tmp4 = importDefaultResult1.connectStores(items, () => {
  const currentUser = importDefaultResult.getCurrentUser();
  let verified;
  if (currentUser != null) {
    verified = currentUser.verified;
  }
  if (verified == null) {
    verified = false;
  }
  return { verified };
})(PremiumUnverifiedWarning);
const result = require("set").fileFinishedImporting("components_native/premium/PremiumUnverifiedWarning.tsx");

export default tmp4;