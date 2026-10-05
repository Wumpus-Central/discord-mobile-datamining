// discord_app/components_native/premium/PremiumRestorationAlert.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import UntouchableAlertDefault from "../common/UntouchableAlert.tsx";
import react from "../../../_runtime/00019_react.js";
import IAPStore from "../../stores/native/IAPStore.android.tsx";
import get_initialized from "../../../discord_common/js/packages/flux/index.tsx";
import size from "../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const PureComponent = react.PureComponent;
class PremiumRestorationAlert extends PureComponent {
  render() {
    let isBusy;
    let onClose;
    ({ isBusy, onClose } = this.props);
    return jsx(UntouchableAlertDefault, { loading, onClose });
  }
}
const prototype = PremiumRestorationAlert.prototype;
const items = [IAPStore];
const tmp4 = get_initialized.connectStores(items, () => {
  const obj = { isBusy: IAPStore.isBusy() };
  return obj;
})(PremiumRestorationAlert);
const result = size.fileFinishedImporting("components_native/premium/PremiumRestorationAlert.tsx");

export default tmp4;
