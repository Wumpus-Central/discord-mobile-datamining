// === Module 1763: unprocessProps ===

// Module 1763 (unprocessProps)
import ReanimatedModule2 from "ReanimatedModule" /* 1662 */;
import r from "r" /* 1764 */;

require = arg1;
const dependencyMap = arg6;
function unprocessProps(styleProps) {
  const result = r.unprocessColorsInProps(styleProps);
  if (Array.isArray(styleProps.boxShadow)) {
    const boxShadow = styleProps.boxShadow;
    styleProps.boxShadow = boxShadow.map((item, index) => {
      const obj = {};
      const merged = Object.assign(item);
      obj.color = callback(table[1]).unprocessColor(item.color);
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
      let value = viewsMap.get(nextResult.viewTag);
      let tmp5 = unprocessProps(styleProps);
      if (value != null) {
        let result = value._syncStylePropsBackToReact(tmp3);
      }
      continue;
    }
  },
  registerInterval(arg0) {
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
  }
};
arg5.PropsRegistryGarbageCollector = obj;