// === Module 7401: actions ===

// Module 7401 (actions)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/app_database/system/AppDatabaseManager.Entry.tsx");
class Entry {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.parent = global;
    obj.module = null;
    obj.definition = require;
    return obj;
  }
}
const prototype = Entry.prototype;
Object.defineProperty(prototype, "actions", {
  get: function actions() {
    return this.definition.actions;
  },
  set: undefined
});
prototype["load"] = function load() {
  const self = this;
  if (null == this.module) {
    const definition = self.definition;
    self.module = definition.require();
  }
};
prototype["reset"] = function reset() {
  const _module = this.module;
  if (_module != null) {
    _module.resetInMemoryState();
  }
};
prototype["execute"] = function execute(arg0, arg1) {
  this.load();
  if (null != this.module) {
    const actions = this.module.actions;
    if (actions[arg0.type] != null) {
      tmp3(arg0, arg1);
    }
  }
};
prototype["validateInDev"] = function validateInDev() {

};

export { Entry };