// === Module 9060: StatusBar ===

// Module 9060 (StatusBar)
import react_native from "react-native" /* 17 */;
import StatusBarManagerDefault from "StatusBarManager" /* 9061 */;
import size from "module_2" /* 2 */;

const StatusBar = react_native.StatusBar;
class StatusBarAndroid extends StatusBar {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult._stackEntry = null;
    return applyArgumentsResult;
  }
  componentDidMount() {
    const obj = StatusBarManagerDefault;
    this._stackEntry = obj.pushStackEntry(this.props);
  }
  componentDidUpdate() {
    const obj = StatusBarManagerDefault;
    this._stackEntry = obj.replaceStackEntry(this._stackEntry, this.props);
  }
  componentWillUnmount() {
    const obj = StatusBarManagerDefault;
    obj.popStackEntry(this._stackEntry);
    this._stackEntry = null;
  }
  render() {
    return null;
  }
}
const prototype = StatusBarAndroid.prototype;
const result = size.fileFinishedImporting("modules/status_bar/native/components/StatusBar.android.tsx");

export default StatusBarAndroid;