// discord_app/components_native/premium/PremiumUnverifiedWarning.tsx
import importDefaultResult from "mergeGuildAvatar";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { PureComponent } from "noop";
import importAllResult from "noop";
import importDefaultResult1 from "initialize";
import { Button } from "../../design/void/native.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";

const require = arg1;
createCacheKey = { warning: null };
createCacheKey = { color: require("Themes").unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
class PremiumUnverifiedWarning extends PureComponent {
}
PremiumUnverifiedWarning.prototype["render"] = function render() {
  let tmp3 = null;
  if (!this.props.verified) {
    const obj = { style: null, children: null };
    const items = [tmp.warning, tmp2];
    obj[0] = items;
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[1] = intl.string(getSystemLocale /* getSystemLocale */.t["0LgOKH"]);
    tmp3 = jsx(Button /* Button */.LegacyText, { style: null, children: null });
  }
  return tmp3;
};
PremiumUnverifiedWarning.contextType = require("ManaContext").ThemeContext;
let items = [importDefaultResult];
const tmp4 = require("initialize").connectStores(items, () => {
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
const result = require("jsxProd").fileFinishedImporting("components_native/premium/PremiumUnverifiedWarning.tsx");

export default tmp4;