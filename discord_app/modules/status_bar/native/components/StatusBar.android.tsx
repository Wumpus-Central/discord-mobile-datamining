// discord_app/modules/status_bar/native/components/StatusBar.android.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import StatusBarManagerDefault from "StatusBarManager.android.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const StatusBar = _mod17.StatusBar;
class StatusBarAndroid extends StatusBar {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._stackEntry = null;
    return applyArgumentsResult;
  }
}
const prototype = StatusBarAndroid.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this._stackEntry = StatusBarManagerDefault.pushStackEntry(this.props);
};
prototype["componentDidUpdate"] = function componentDidUpdate() {
  this._stackEntry = StatusBarManagerDefault.replaceStackEntry(this._stackEntry, this.props);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  StatusBarManagerDefault.popStackEntry(this._stackEntry);
  this._stackEntry = null;
};
prototype["render"] = function render() {
  return null;
};
const result = size.fileFinishedImporting("modules/status_bar/native/components/StatusBar.android.tsx");

export default StatusBarAndroid;
