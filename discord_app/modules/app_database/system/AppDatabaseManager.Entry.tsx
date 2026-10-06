// === Module 7143: actions ===

// Module 7143 (actions)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_database/system/AppDatabaseManager.Entry.tsx");
class Entry {
  constructor(parent, definition) {
    const obj = Object.create(new.target.prototype);
    obj.parent = parent;
    obj.module = null;
    obj.definition = definition;
    return obj;
  }
  load() {
    const self = this;
    if (null == this.module) {
      const definition = self.definition;
      self.module = definition.require();
    }
  }
  reset() {
    const _module = this.module;
    if (_module != null) {
      _module.resetInMemoryState();
    }
  }
  execute(arg0, arg1) {
    this.load();
    if (null != this.module) {
      const actions = this.module.actions;
      if (actions[arg0.type] != null) {
        actions[arg0.type](arg0, arg1);
      }
    }
  }
  validateInDev() {

  }
}
Object.defineProperty(Entry.prototype, "actions", {
  get: function actions() {
    return this.definition.actions;
  },
  set: undefined
});

export { Entry };