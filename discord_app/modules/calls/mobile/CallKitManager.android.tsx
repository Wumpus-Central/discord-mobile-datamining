// discord_app/modules/calls/mobile/CallKitManager.android.tsx
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

class CallKitLifecycleManager extends LifecycleManager {
  _initialize() {}
  _terminate() {}
}
const prototype = CallKitLifecycleManager.prototype;
const callKitLifecycleManager = new CallKitLifecycleManager();
const result = size.fileFinishedImporting("modules/calls/mobile/CallKitManager.android.tsx");

export default callKitLifecycleManager;
