// _runtime/01870_unprocessProps.js
import ReanimatedModule2 from "01666_ReanimatedModule.js";
import colors from "01682_colors.js";

require = arg1;
const dependencyMap = arg6;
function unprocessProps(boxShadow) {
  const result = colors.unprocessColorsInProps(boxShadow);
  if (Array.isArray(boxShadow.boxShadow)) {
    boxShadow = boxShadow.boxShadow;
    boxShadow.boxShadow = boxShadow.map((color) => {
      const obj = {};
      const merged = Object.assign(color);
      obj.color = colors.unprocessColor(color.color);
      return obj;
    });
  }
  (function unprocessBackgroundImage(boxShadow) {
    items = ["backgroundImage", "experimental_backgroundImage"];
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = boxShadow[nextResult];
      let arr2 = tmp3;
      let _Array = Array;
      let tmp2 = nextResult;
      if (Array.isArray(tmp3)) {
        boxShadow[tmp2] = arr2.map((colorStops) => {
          colorStops = colorStops.colorStops;
          const mapped = colorStops.map(closure_1_3);
          if ("linear-gradient" === colorStops.type) {
            const obj2 = {};
            const merged = Object.assign(colorStops);
            value = iter.value;
            let combined = value;
            if ("angle" === colorStops.direction.type) {
              const _HermesInternal = HermesInternal;
              combined = "" + value + "deg";
            }
            obj2.direction = combined;
            obj2.colorStops = mapped;
            let obj = obj2;
          } else {
            obj = {};
            const merged1 = Object.assign(colorStops);
            obj.colorStops = mapped;
          }
          return obj;
        });
      }
      continue;
    }
  })(boxShadow);
}
function unprocessColorStop(arg0) {
  ({ color, position } = arg0);
  let unprocessColorResult = null;
  if (null !== color) {
    unprocessColorResult = colors.unprocessColor(color);
  }
  const obj2 = { color: unprocessColorResult, positions: null };
  let tmp4;
  if (null !== position) {
    items = [position];
    tmp4 = items;
  }
  obj2.positions = tmp4;
  return obj2;
}
let obj = {
  viewsMap: new Map(),
  intervalId: null,
  registerView(componentViewTag, self) {
    self = this;
    const viewsMap = this.viewsMap;
    if (!viewsMap.has(componentViewTag)) {
      const viewsMap2 = self.viewsMap;
      const result = viewsMap2.set(componentViewTag, self);
      if (1 === self.viewsMap.size) {
        self.registerInterval();
      }
    }
  },
  unregisterView(componentViewTag) {
    const self = this;
    const viewsMap = this.viewsMap;
    let deleteResult = viewsMap.delete(componentViewTag);
    if (deleteResult) {
      deleteResult = 0 === self.viewsMap.size;
    }
    if (deleteResult) {
      self.unregisterInterval();
    }
  },
  syncPropsBackToReact() {
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    const viewsMap = this.viewsMap;
    items = [...viewsMap.keys()];
    const settledUpdates = ReanimatedModule.getSettledUpdates(items);
    const iter = settledUpdates[Symbol.iterator]();
    while (iter !== undefined) {
      ({ viewTag, styleProps } = nextResult);
      if (null !== styleProps) {
        let viewsMap2 = this.viewsMap;
        value = viewsMap2.get(viewTag);
        let tmp7 = unprocessProps(styleProps);
        if (value != null) {
          let result = value._syncStylePropsBackToReact(styleProps);
        }
      }
      continue;
    }
    nextResult = iter.next();
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
export { unprocessProps };
