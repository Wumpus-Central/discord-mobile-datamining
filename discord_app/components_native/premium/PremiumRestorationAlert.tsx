// discord_app/components_native/premium/PremiumRestorationAlert.tsx
import componentDidMountDefault from "../common/UntouchableAlert.tsx";
import importDefaultResult from "../../stores/native/IAPStore.android.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../_runtime/00019_noop.js";
import importDefaultResult1 from "../../../discord_common/js/packages/flux/index.tsx";

const PureComponent = importAllResult.PureComponent;
class PremiumRestorationAlert extends PureComponent {
}
PremiumRestorationAlert.prototype["render"] = function render() {
  ({ isBusy, onClose } = this.props);
  return jsx(componentDidMountDefault, { loading, onClose });
};
const items = [importDefaultResult];
const tmp4 = importDefaultResult1.connectStores(items, () => ({ isBusy: importDefaultResult.isBusy() }))(PremiumRestorationAlert);
const result = require("obj132").fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp4;