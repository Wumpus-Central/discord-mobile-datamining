// discord_app/modules/status_bar/native/components/StatusBar.android.tsx
import { StatusBar } from "get ActivityIndicator";
import { pushStackEntry } from "StatusBarManager.android.tsx";

class StatusBarAndroid extends StatusBar {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult._stackEntry = null;
    return applyArgumentsResult;
  }
}
const prototype = StatusBarAndroid.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this._stackEntry = pushStackEntry.pushStackEntry(this.props);
};
prototype["componentDidUpdate"] = function componentDidUpdate() {
  this._stackEntry = pushStackEntry.replaceStackEntry(this._stackEntry, this.props);
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  pushStackEntry.popStackEntry(this._stackEntry);
  this._stackEntry = null;
};
prototype["render"] = function render() {
  return null;
};
const result = require("set").fileFinishedImporting("modules/status_bar/native/components/StatusBar.android.tsx");

export default StatusBarAndroid;