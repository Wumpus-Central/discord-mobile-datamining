// === Module 15276: PremiumRestorationAlert ===

// Module 15276 (PremiumRestorationAlert)
import UntouchableAlertDefault from "UntouchableAlert" /* 15277 */;
import noop from "module_19" /* 19 */;
import IAPStore from "IAPStore" /* 7251 */;
import initialize from "initialize" /* 504 */;

const jsx = fn(21).jsx;
const PureComponent = noop.PureComponent;
class PremiumRestorationAlert extends PureComponent {
}
PremiumRestorationAlert.prototype["render"] = function render() {
  ({ isBusy, onClose } = this.props);
  return jsx(UntouchableAlertDefault, { loading, onClose });
};
const items = [IAPStore];
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default initialize.connectStores(items, () => ({ isBusy: IAPStore.isBusy() }))(PremiumRestorationAlert);