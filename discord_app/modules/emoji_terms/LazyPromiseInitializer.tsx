// === Module 5061: setParams ===

// Module 5061 (setParams)
const result = require("set").fileFinishedImporting("modules/emoji_terms/LazyPromiseInitializer.tsx");
class LazyPromiseInitializer {
  constructor(arg0) {
    obj = Object.create(new.target.prototype);
    obj.loader = global;
    return obj;
  }
}
const prototype = LazyPromiseInitializer.prototype;
prototype["setParams"] = function setParams(param) {
  const self = this;
  if (this.param !== param) {
    self.param = param;
    self.loading = false;
    self.loaded = false;
  }
};
prototype["get"] = function get() {
  this.ensureLoaded();
  return this.val;
};
prototype["ensureLoaded"] = function ensureLoaded() {
  let self = this;
  self = this;
  if (!this.loaded) {
    if (!self.loading) {
      if (undefined !== self.param) {
        const param = self.param;
        self.loading = true;
        self.loader(param).then((arg0) => {
          if (param === self.param) {
            tmp.val = arg0;
            tmp.loading = false;
            tmp.loaded = true;
          }
        });
        const loaderResult = self.loader(param);
      }
    }
  }
};

export default LazyPromiseInitializer;