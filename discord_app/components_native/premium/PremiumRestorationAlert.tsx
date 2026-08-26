// === Module 14761: render ===

// Module 14761 (render)
import componentDidMountDefault from "componentDidMount" /* 14762 */;
import importDefaultResult from "updateProduct" /* 6031 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;
import importDefaultResult1 from "initialize" /* 589 */;

const PureComponent = importAllResult.PureComponent;
class PremiumRestorationAlert extends PureComponent {
}
PremiumRestorationAlert.prototype["render"] = function render() {
  ({ isBusy, onClose } = this.props);
  return jsx(componentDidMountDefault, { loading, onClose });
};
const items = [importDefaultResult];
const tmp4 = importDefaultResult1.connectStores(items, () => ({ isBusy: importDefaultResult.isBusy() }))(PremiumRestorationAlert);
const result = require("set").fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp4;