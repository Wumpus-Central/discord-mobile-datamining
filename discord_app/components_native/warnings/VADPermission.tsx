// discord_app/components_native/warnings/VADPermission.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import intl3 from "../../intl/index.native.tsx";
import AlertDefault from "../common/Alert.tsx";
import PermissionActionCreatorsDefault from "../../actions/PermissionActionCreators.tsx";
import react from "../../../_runtime/00019_react.js";
import size from "../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const Component = react.Component;
class VADPermission extends Component {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.close = function close() {
      const obj = PermissionActionCreatorsDefault;
      obj.clearVADWarning();
    };
    return applyArgumentsResult;
  }
  render() {
    AlertDefault;
    const intl = intl3.intl;
    const intl2 = intl3.intl;
    return <tmp title={intl.string(intl3.t.NYklhr)} body={intl2.string(intl3.t.EJ26Oh)} onConfirm={this.close} />;
  }
}
const prototype = VADPermission.prototype;
const result = size.fileFinishedImporting("components_native/warnings/VADPermission.tsx");

export default VADPermission;
