// discord_app/components_native/warnings/Suppressed.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import intl4 from "../../intl/index.native.tsx";
import PermissionActionCreatorsDefault from "../../actions/PermissionActionCreators.tsx";
import AssetRegistryDefault from "../../../_runtime/17126_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../_runtime/17127_AssetRegistry.js";
import react from "../../../_runtime/00019_react.js";
import PermissionSpeakStore from "../../stores/PermissionSpeakStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const Component = react.Component;
class Suppressed extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.close = function close() {
      const obj = PermissionActionCreatorsDefault;
      obj.clearSuppressWarning();
    };
    return applyArgumentsResult;
  }
  render() {
    let stringResult;
    let stringResult1;
    let tmp6;
    let tmp7;
    const isAFKChannelResult = PermissionSpeakStore.isAFKChannel();
    const intl = intl4.intl;
    const string = intl.string;
    const t = intl4.t;
    if (isAFKChannelResult) {
      stringResult = string(t.KuYcnU);
      const intl3 = intl4.intl;
      stringResult1 = intl3.string(intl4.t["RaFZ3+"]);
      tmp7 = AssetRegistryDefault;
      tmp6 = importDefault;
    } else {
      stringResult = string(t.FJSZVM);
      const intl2 = intl4.intl;
      stringResult1 = intl2.string(intl4.t.etJjgW);
      tmp6 = importDefault;
      tmp7 = AssetRegistryDefault2;
    }
    return jsx(tmp6(5790), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
  }
}
const prototype = Suppressed.prototype;
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;
