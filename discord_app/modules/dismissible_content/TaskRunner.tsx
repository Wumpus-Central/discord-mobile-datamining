// discord_app/modules/dismissible_content/TaskRunner.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/dismissible_content/TaskRunner.tsx");
class TaskRunner {
  constructor() {
    return Object.assign({ timeoutId: null });
  }
}
const prototype = TaskRunner.prototype;
prototype["schedule"] = function schedule(arg0, arg1) {
  const self = this;
  closure_0 = arg0;
  this.unschedule();
  this.timeoutId = setTimeout(() => {
    self.timeoutId = null;
    closure_0();
  }, arg1);
};
prototype["unschedule"] = function unschedule() {
  const self = this;
  if (this.scheduled()) {
    const _clearTimeout = clearTimeout;
    clearTimeout(self.timeoutId);
    self.timeoutId = null;
  }
};
prototype["scheduled"] = function scheduled() {
  return null !== this.timeoutId;
};

export { TaskRunner };
