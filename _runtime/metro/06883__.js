// _runtime/metro/06883__.js
import _modDef6867 from "06867__.js";
import _classCallCheck from "06866__.js";

const ViewabilityHelper = arg1;
class ViewabilityHelper {
  constructor(arg0, arg1) {
    tmp = c2(this, ViewabilityHelper);
    this.possiblyViewableIndices = [];
    this.hasInteracted = false;
    this.viewableIndices = [];
    this.lastReportedViewableIndices = [];
    set = new Set();
    this.timers = set;
    this.viewabilityConfig = global;
    this.viewableIndicesChanged = arg1;
    return;
  }
}
const entry = {
  key: "dispose",
  value: function dispose() {
    const timers = this.timers;
    const item = timers.forEach(clearTimeout);
  },
};
const items = [
  entry,
  {
    key: "updateViewableItems",
    value: function updateViewableItems(arg0, arg1, arg2, arg3, arg4, possiblyViewableIndices) {
      const self = this;
      closure_1 = arg0;
      closure_2 = arg1;
      closure_3 = arg2;
      closure_4 = arg3;
      closure_5 = arg4;
      if (undefined !== possiblyViewableIndices) {
        self.possiblyViewableIndices = possiblyViewableIndices;
      }
      let viewabilityConfig = self.viewabilityConfig;
      let prop;
      if (viewabilityConfig != null) {
        prop = viewabilityConfig.itemVisiblePercentThreshold;
      }
      if (null !== prop) {
        let viewabilityConfig2 = self.viewabilityConfig;
        let prop1;
        if (viewabilityConfig2 != null) {
          prop1 = viewabilityConfig2.itemVisiblePercentThreshold;
        }
        if (undefined !== prop1) {
          const viewabilityConfig3 = self.viewabilityConfig;
          let prop2;
          if (viewabilityConfig3 != null) {
            prop2 = viewabilityConfig3.viewAreaCoveragePercentThreshold;
          }
          if (null !== prop2) {
            const viewabilityConfig4 = self.viewabilityConfig;
            let prop3;
            if (viewabilityConfig4 != null) {
              prop3 = viewabilityConfig4.viewAreaCoveragePercentThreshold;
            }
            if (undefined !== prop3) {
              const _Error = Error;
              const error = new Error(
                ViewabilityHelper(6854).ErrorMessages.multipleViewabilityThresholdTypesNotSupported,
              );
              throw error;
            }
          }
        }
      }
      const viewabilityConfig5 = self.viewabilityConfig;
      let waitForInteraction;
      if (viewabilityConfig5 != null) {
        waitForInteraction = viewabilityConfig5.waitForInteraction;
      }
      if (!waitForInteraction) {
        const prop4 = self.possiblyViewableIndices;
        const found = prop4.filter((item) => {
          const viewabilityConfig = self.viewabilityConfig;
          let prop;
          if (viewabilityConfig != null) {
            prop = viewabilityConfig.viewAreaCoveragePercentThreshold;
          }
          const viewabilityConfig2 = self.viewabilityConfig;
          let prop1;
          if (viewabilityConfig2 != null) {
            prop1 = viewabilityConfig2.itemVisiblePercentThreshold;
          }
          return self.isItemViewable(item, closure_1, closure_2, closure_3, closure_4, prop, prop1, closure_5);
        });
        self.viewableIndices = found;
        const viewabilityConfig6 = self.viewabilityConfig;
        let num;
        if (viewabilityConfig6 != null) {
          num = viewabilityConfig6.minimumViewTime;
        }
        if (num == null) {
          num = 250;
        }
        if (num > 0) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            const timers = self.timers;
            timers.delete(timerId);
            const result = self.checkViewableIndicesChanges(found);
          }, num);
          let timers = self.timers;
          timers.add(timerId);
        } else {
          let result = self.checkViewableIndicesChanges(found);
        }
      }
    },
  },
  {
    key: "checkViewableIndicesChanges",
    value: function checkViewableIndicesChanges(found) {
      const self = this;
      found = found.filter((item) => {
        const viewableIndices = self.viewableIndices;
        return viewableIndices.includes(item);
      });
      const found1 = found.filter((item) => {
        const lastReportedViewableIndices = self.lastReportedViewableIndices;
        return !lastReportedViewableIndices.includes(item);
      });
      const prop = this.lastReportedViewableIndices;
      const found2 = prop.filter((item) => !found.includes(item));
      if (tmp) {
        self.lastReportedViewableIndices = found;
        const result = self.viewableIndicesChanged(found, found1, found2);
      }
    },
  },
  {
    key: "clearLastReportedViewableIndices",
    value: function clearLastReportedViewableIndices() {
      this.lastReportedViewableIndices = [];
    },
  },
  {
    key: "isItemViewable",
    value: function isItemViewable(item, arg1, arg2, arg3, width, prop, prop1, fn) {
      const size = fn(item);
      if (undefined === size) {
        return false;
      } else {
        const diff = (arg1 ? size.x : size.y) - arg2;
        const tmp3 = arg1 ? size.width : size.height;
        if (arg1) {
          width = width.width;
        } else {
          width = width.height - arg3;
        }
        const _Math = Math;
        const _Math2 = Math;
        const bound = Math.min(diff + tmp3, width);
        const diff1 = bound - Math.max(diff, 0);
        if (diff1 === tmp3) {
          return true;
        } else if (0 === diff1) {
          return false;
        } else {
          if (null != prop) {
            let result = 0.01 * prop;
          } else {
            let num2 = prop1;
            if (prop1 == null) {
              num2 = 0;
            }
            result = 0.01 * num2;
          }
          return (null != prop ? diff1 / width : diff1 / tmp3) >= result;
        }
      }
    },
  },
];

export default _modDef6867(ViewabilityHelper, items);
