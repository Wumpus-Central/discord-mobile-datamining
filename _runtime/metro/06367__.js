// _runtime/metro/06367__.js
import _createClassDefault from "06352__createClass.js";
import _classCallCheck from "06351__classCallCheck.js";

let updateViewableItems;

class ViewabilityManager {
  constructor(rvManager) {
    const self = this;
    let closure_0 = rvManager;
    let tmp = _classCallCheck(this, ViewabilityManager);
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
      let windowSize;
      closure_0 = arg0;
      let rvManager = windowSize.rvManager;
      windowSize = rvManager.getWindowSize();
      if (undefined !== windowSize) {
        if (windowSize.shouldListenToVisibleIndices) {
          const rvManager2 = tmp.rvManager;
          let num = rvManager2.getAbsoluteLastScrollOffset();
          if (num == null) {
            num = 0;
          }
          let closure_2 = num - tmp.rvManager.firstItemOffset;
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
            updateViewableItems = updateViewableItems.updateViewableItems;
            if (flag == null) {
              flag = false;
            }
            updateViewableItems(
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
      const tmp = new closure_0(self[2])(arg0, (arr, arr2, arr3) => {
        let items;
        if (closure_0 != null) {
          let obj = {
            viewableItems: arr.map((item) => {
              if (undefined !== closure_1_1.rvManager.props.data[item]) {
                let keyExtractorResult;
                if (undefined !== closure_1_1.rvManager.props.keyExtractor) {
                  const props = closure_1_1.rvManager.props;
                  keyExtractorResult = props.keyExtractor(tmp2, item);
                }
                const _Date = Date;
                const obj = {
                  index: item,
                  isViewable: true,
                  item: closure_1_1.rvManager.props.data[item],
                  key: keyExtractorResult,
                  timestamp: Date.now(),
                };
                return obj;
              }
              keyExtractorResult = item.toString();
            }),
            changed: items,
          };
          items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(
            items,
            arr2.map((item) => {
              if (undefined !== closure_1_1.rvManager.props.data[item]) {
                let keyExtractorResult;
                if (undefined !== closure_1_1.rvManager.props.keyExtractor) {
                  const props = closure_1_1.rvManager.props;
                  keyExtractorResult = props.keyExtractor(tmp2, item);
                }
                const _Date = Date;
                const obj = {
                  index: item,
                  isViewable: true,
                  item: closure_1_1.rvManager.props.data[item],
                  key: keyExtractorResult,
                  timestamp: Date.now(),
                };
                return obj;
              }
              keyExtractorResult = item.toString();
            }),
            0,
          );
          HermesBuiltin.arraySpread(
            items,
            arr3.map((item) => {
              if (undefined !== closure_1_1.rvManager.props.data[item]) {
                let keyExtractorResult;
                if (undefined !== closure_1_1.rvManager.props.keyExtractor) {
                  const props = closure_1_1.rvManager.props;
                  keyExtractorResult = props.keyExtractor(tmp2, item);
                }
                const _Date = Date;
                const obj = {
                  index: item,
                  isViewable: false,
                  item: closure_1_1.rvManager.props.data[item],
                  key: keyExtractorResult,
                  timestamp: Date.now(),
                };
                return obj;
              }
              keyExtractorResult = item.toString();
            }),
            arraySpreadResult,
          );
          tmp2(obj);
        }
      });
      return tmp;
    };
    this.rvManager = rvManager;
    const tmp2 =
      null !== rvManager.props.onViewableItemsChanged && undefined !== rvManager.props.onViewableItemsChanged;
    if (tmp2) {
      let viewabilityHelpers = self.viewabilityHelpers;
      const arr = viewabilityHelpers.push(
        self.createViewabilityHelper(rvManager.props.viewabilityConfig, (arg0) => {
          const props = closure_0.props;
          const onViewableItemsChanged = props.onViewableItemsChanged;
          if (onViewableItemsChanged != null) {
            const result = onViewableItemsChanged(arg0);
          }
        }),
      );
    }
    let prop = rvManager.props.viewabilityConfigCallbackPairs;
    if (prop == null) {
      prop = [];
    }
    let item = prop.forEach((viewabilityConfig, index) => {
      const viewabilityHelpers = self.viewabilityHelpers;
      viewabilityHelpers.push(
        self.createViewabilityHelper(viewabilityConfig.viewabilityConfig, (arg0) => {
          let prop;
          if (index.props.viewabilityConfigCallbackPairs != null) {
            if (index.props.viewabilityConfigCallbackPairs[index] != null) {
              prop = tmp3.onViewableItemsChanged;
            }
          }
          if (prop != null) {
            prop(arg0);
          }
        }),
      );
    });
  }
}
let obj = {
  key: "shouldListenToVisibleIndices",
  get() {
    return this.viewabilityHelpers.length > 0;
  },
};
let items = [obj];

export default _createClassDefault(ViewabilityManager, items);
