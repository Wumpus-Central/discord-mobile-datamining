// _runtime/01745_unprocessProps.js
import ReanimatedModule2 from "01644_ReanimatedModule.js";
import r from "01746_r.js";

require = arg1;
const dependencyMap = arg6;
function unprocessProps(styleProps) {
  const result = r.unprocessColorsInProps(styleProps);
  if (Array.isArray(styleProps.boxShadow)) {
    const boxShadow = styleProps.boxShadow;
    styleProps.boxShadow = boxShadow.map((color) => {
      const obj = {};
      const merged = Object.assign(color);
      obj.color = r.unprocessColor(color.color);
      return obj;
    });
  }
}
let obj = {
  viewsCount: 0,
  viewsMap: new Map(),
  intervalId: null,
  registerView(componentViewTag, self) {
    self = this;
    const viewsMap = this.viewsMap;
    if (!viewsMap.has(componentViewTag)) {
      const viewsMap2 = self.viewsMap;
      const result = viewsMap2.set(componentViewTag, self);
      self.viewsCount = self.viewsCount + 1;
      if (1 === self.viewsCount) {
        self.registerInterval();
      }
    }
  },
  unregisterView(portal) {
    const self = this;
    const viewsMap = this.viewsMap;
    viewsMap.delete(portal);
    this.viewsCount = this.viewsCount - 1;
    if (0 === this.viewsCount) {
      self.unregisterInterval();
    }
  },
  syncPropsBackToReact() {
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    const settledUpdates = ReanimatedModule.getSettledUpdates();
    const iter = settledUpdates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let styleProps = nextResult.styleProps;
      let viewsMap = this.viewsMap;
      let tmp3 = styleProps;
      value = viewsMap.get(nextResult.viewTag);
      let tmp5 = unprocessProps(styleProps);
      if (value != null) {
        let result = value._syncStylePropsBackToReact(tmp3);
      }
      continue;
    }
  },
  registerInterval() {
    const syncPropsBackToReact = this.syncPropsBackToReact;
    this.intervalId = setInterval(syncPropsBackToReact.bind(this), 500);
  },
  unregisterInterval() {
    const self = this;
    if (null !== this.intervalId) {
      const _clearInterval = clearInterval;
      clearInterval(self.intervalId);
      self.intervalId = null;
    }
  },
};

export const PropsRegistryGarbageCollector = obj;
