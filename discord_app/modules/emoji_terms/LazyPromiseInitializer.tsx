// discord_app/modules/emoji_terms/LazyPromiseInitializer.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/emoji_terms/LazyPromiseInitializer.tsx");
class LazyPromiseInitializer {
  constructor(arg0) {
    merged = Object.assign({ loading: false, loaded: false });
    merged.loader = global;
    return merged;
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
