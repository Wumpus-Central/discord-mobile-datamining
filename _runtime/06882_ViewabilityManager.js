// _runtime/06882_ViewabilityManager.js
import _modDef6867 from "metro/06867__.js";
import _classCallCheck from "metro/06866__.js";

const ViewabilityManager = importDefault;
class ViewabilityManager {
  constructor(arg0) {
    self = this;
    self = this;
    closure_0 = global;
    tmp = c2(this, ViewabilityManager);
    this.viewabilityHelpers = [];
    this.hasInteracted = false;
    this.dispose = () => {
      const viewabilityHelpers = self.viewabilityHelpers;
      const item = viewabilityHelpers.forEach((dispose) => dispose.dispose());
    };
    this.onVisibleIndicesChanged = (arg0) => {
      self.updateViewableItems(arg0);
    };
    this.recordInteraction = () => {
      if (!self.hasInteracted) {
        self.hasInteracted = true;
        const viewabilityHelpers = self.viewabilityHelpers;
        const item = viewabilityHelpers.forEach((item) => {
          item.hasInteracted = true;
        });
        self.updateViewableItems();
      }
    };
    this.updateViewableItems = (arg0) => {
      closure_0 = arg0;
      rvManager = windowSize.rvManager;
      windowSize = rvManager.getWindowSize();
      if (undefined !== windowSize) {
        if (tmp.shouldListenToVisibleIndices) {
          const rvManager2 = tmp.rvManager;
          let num = rvManager2.getAbsoluteLastScrollOffset();
          if (num == null) {
            num = 0;
          }
          closure_2 = num - tmp.rvManager.firstItemOffset;
          const bottomViewabilityInsetRef = tmp.rvManager.props.bottomViewabilityInsetRef;
          let num2;
          if (bottomViewabilityInsetRef != null) {
            num2 = bottomViewabilityInsetRef.current;
          }
          if (num2 == null) {
            num2 = 0;
          }
          const viewabilityHelpers = tmp.viewabilityHelpers;
          const item = viewabilityHelpers.forEach((updateViewableItems) => {
            let flag = self.rvManager.props.horizontal;
            if (flag == null) {
              flag = false;
            }
            updateViewableItems.updateViewableItems(
              flag,
              closure_2,
              num2,
              windowSize,
              (arg0) => {
                rvManager = rvManager.rvManager;
                return rvManager.getLayout(arg0);
              },
              closure_0,
            );
          });
        }
      }
    };
    this.clearLastReportedViewableIndices = () => {
      const viewabilityHelpers = self.viewabilityHelpers;
      const item = viewabilityHelpers.forEach((clearLastReportedViewableIndices) =>
        clearLastReportedViewableIndices.clearLastReportedViewableIndices(),
      );
    };
    this.createViewabilityHelper = (arg0, arg1) => {
      closure_0 = arg1;
      return new closure_0(self[2])(arg0, (arr, arr2, arr3) => {
        if (closure_0 != null) {
          let obj = {
            viewableItems: arr.map((item) => {
              if (undefined !== closure_1_1.rvManager.props.data[item]) {
                if (undefined !== closure_1_1.rvManager.props.keyExtractor) {
                  const props = closure_1_1.rvManager.props;
                  let keyExtractorResult = props.keyExtractor(tmp2, item);
                }
                const obj = { index: item, isViewable: true, item: tmp2, key: keyExtractorResult, timestamp: null };
                const _Date = Date;
                obj.timestamp = Date.now();
                return obj;
              }
              keyExtractorResult = item.toString();
            }),
            changed: null,
          };
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(
            arr2.map((item) => {
              if (undefined !== closure_1_1.rvManager.props.data[item]) {
                if (undefined !== closure_1_1.rvManager.props.keyExtractor) {
                  const props = closure_1_1.rvManager.props;
                  let keyExtractorResult = props.keyExtractor(tmp2, item);
                }
                const obj = { index: item, isViewable: true, item: tmp2, key: keyExtractorResult, timestamp: null };
                const _Date = Date;
                obj.timestamp = Date.now();
                return obj;
              }
              keyExtractorResult = item.toString();
            }),
            0,
          );
          arraySpreadResult = HermesBuiltin.arraySpread(
            arr3.map((item) => {
              if (undefined !== closure_1_1.rvManager.props.data[item]) {
                if (undefined !== closure_1_1.rvManager.props.keyExtractor) {
                  const props = closure_1_1.rvManager.props;
                  let keyExtractorResult = props.keyExtractor(tmp2, item);
                }
                const obj = { index: item, isViewable: false, item: tmp2, key: keyExtractorResult, timestamp: null };
                const _Date = Date;
                obj.timestamp = Date.now();
                return obj;
              }
              keyExtractorResult = item.toString();
            }),
            arraySpreadResult,
          );
          obj.changed = items;
          tmp(obj);
        }
      });
    };
    this.rvManager = global;
    tmp2 = null !== global.props.onViewableItemsChanged && undefined !== global.props.onViewableItemsChanged;
    if (tmp2) {
      viewabilityHelpers = self.viewabilityHelpers;
      arr = viewabilityHelpers.push(
        self.createViewabilityHelper(global.props.viewabilityConfig, (arg0) => {
          const props = closure_0.props;
          const onViewableItemsChanged = props.onViewableItemsChanged;
          if (onViewableItemsChanged != null) {
            const result = onViewableItemsChanged(arg0);
          }
        }),
      );
    }
    prop = global.props.viewabilityConfigCallbackPairs;
    if (prop == null) {
      prop = [];
    }
    item = prop.forEach((viewabilityConfig, index) => {
      const viewabilityHelpers = self.viewabilityHelpers;
      viewabilityHelpers.push(
        self.createViewabilityHelper(viewabilityConfig.viewabilityConfig, (arg0) => {
          let prop;
          if (index.props.viewabilityConfigCallbackPairs != null) {
            if (viewabilityConfigCallbackPairs[index] != null) {
              prop = tmp3.onViewableItemsChanged;
            }
          }
          if (prop != null) {
            prop(arg0);
          }
        }),
      );
    });
    return;
  }
}
let items = [
  {
    key: "shouldListenToVisibleIndices",
    get() {
      return this.viewabilityHelpers.length > 0;
    },
  },
];

export default _modDef6867(ViewabilityManager, items);
