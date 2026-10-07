// discord_app/components_native/premium/PremiumRestorationAlert.tsx
import UntouchableAlertDefault from "../common/UntouchableAlert.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import IAPStore from "../../stores/native/IAPStore.android.tsx";
import initialize from "../../../discord_common/js/packages/flux/index.tsx";

const jsx = fn(21).jsx;
const PureComponent = noop.PureComponent;
class PremiumRestorationAlert extends PureComponent {}
PremiumRestorationAlert.prototype["render"] = function render() {
  ({ isBusy, onClose } = this.props);
  return jsx(UntouchableAlertDefault, { loading, onClose });
};
const items = [IAPStore];
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default initialize.connectStores(items, () => ({ isBusy: IAPStore.isBusy() }))(PremiumRestorationAlert);
