// _runtime/01762_unprocessProps.js
import { ReanimatedModule } from "01661_ReanimatedModule.js";
import { r } from "01763_r.js";
const require = arg1;
const dependencyMap = arg6;
function unprocessProps(styleProps) {
  const result = r.unprocessColorsInProps(styleProps);
  if (Array.isArray(styleProps.boxShadow)) {
    const boxShadow = styleProps.boxShadow;
    styleProps.boxShadow = boxShadow.map((color) => {
      const obj = {};
      const merged = Object.assign(color);
      obj.color = callback(table[1]).unprocessColor(color.color);
      return obj;
    });
  }
}
let obj = { viewsCount: 0, viewsMap: null, intervalId: null, registerView: null, unregisterView: null, syncPropsBackToReact: null, registerInterval: null, unregisterInterval: null };
obj[1] = new Map();
obj[3] = function registerView(componentViewTag, self) {
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
};
obj[4] = function unregisterView(portal) {
  const self = this;
  const viewsMap = this.viewsMap;
  viewsMap.delete(portal);
  this.viewsCount = this.viewsCount - 1;
  if (0 === this.viewsCount) {
    self.unregisterInterval();
  }
};
obj[5] = function syncPropsBackToReact() {
  const ReanimatedModule = ReanimatedModule.ReanimatedModule;
  const settledUpdates = ReanimatedModule.getSettledUpdates();
  const iter = settledUpdates[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let styleProps = nextResult.styleProps;
    let viewsMap = this.viewsMap;
    let tmp3 = styleProps;
    let value = viewsMap.get(nextResult.viewTag);
    let tmp4 = unprocessProps;
    let tmp5 = unprocessProps(styleProps);
    if (value != null) {
      let tmp6 = styleProps;
      let result = value._syncStylePropsBackToReact(tmp3);
    }
    continue;
  }
};
obj[6] = function registerInterval(arg0) {
  const syncPropsBackToReact = this.syncPropsBackToReact;
  this.intervalId = setInterval(syncPropsBackToReact.bind(this), 500);
};
obj[7] = function unregisterInterval() {
  const self = this;
  if (null !== this.intervalId) {
    const _clearInterval = clearInterval;
    clearInterval(self.intervalId);
    self.intervalId = null;
  }
};
arg5.PropsRegistryGarbageCollector = obj;