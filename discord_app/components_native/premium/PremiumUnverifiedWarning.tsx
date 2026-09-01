// discord_app/components_native/premium/PremiumUnverifiedWarning.tsx
import ThemesDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../intl/index.native.tsx";
import Button from "../../design/void/native.tsx";
import importDefaultResult from "../../stores/UserStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../_runtime/00019_noop.js";
import importDefaultResult1 from "../../../discord_common/js/packages/flux/index.tsx";

require = arg1;
createCacheKey = { warning: null };
createCacheKey = { color: ThemesDefault.unsafe_rawColors.RED_400, fontSize: 12, marginTop: 10 };
createCacheKey[0] = createCacheKey;
let closure_4 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class PremiumUnverifiedWarning extends PureComponent {}
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
