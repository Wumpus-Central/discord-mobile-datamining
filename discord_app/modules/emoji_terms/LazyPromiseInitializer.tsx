// discord_app/modules/emoji_terms/LazyPromiseInitializer.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/emoji_terms/LazyPromiseInitializer.tsx");
class LazyPromiseInitializer {
  constructor(loader) {
    const merged = Object.assign({ loading: false, loaded: false });
    merged.loader = loader;
    return merged;
  }
  setParams(param) {
    const self = this;
    if (this.param !== param) {
      self.param = param;
      self.loading = false;
      self.loaded = false;
    }
  }
  get() {
    this.ensureLoaded();
    return this.val;
  }
  ensureLoaded() {
    const self = this;
    if (!this.loaded) {
      if (!self.loading) {
        if (undefined !== self.param) {
          const param = self.param;
          self.loading = true;
          const loaderResult = self.loader(param);
          loaderResult.then((result) => {
            if (param === self.param) {
              self.val = result;
              self.loading = false;
              self.loaded = true;
            }
          });
        }
      }
    }
  }
}
const prototype = LazyPromiseInitializer.prototype;

export default LazyPromiseInitializer;
