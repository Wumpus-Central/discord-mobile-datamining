// discord_app/modules/emoji_terms/LazyPromiseInitializer.tsx
import obj132 from "../../../_runtime/00002_obj132.js";

const result = obj132.fileFinishedImporting("modules/emoji_terms/LazyPromiseInitializer.tsx");
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
  const self = this;
  if (!this.loaded) {
    if (!self.loading) {
      if (undefined !== self.param) {
        const param = self.param;
        self.loading = true;
        self.loader(param).then((result) => {
          if (param === self.param) {
            self.val = result;
            self.loading = false;
            self.loaded = true;
          }
        });
        const loaderResult = self.loader(param);
      }
    }
  }
};

export default LazyPromiseInitializer;