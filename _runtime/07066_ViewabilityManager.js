// _runtime/07066_ViewabilityManager.js
import _createClassDefault from "metro/07051__createClass.js";
import _classCallCheck from "metro/07050__classCallCheck.js";

const ViewabilityManager = importDefault;
class ViewabilityManager {
  constructor(arg0) {
    self = this;
    self = this;
    closure_0 = global;
    tmp = closure_2(this, closure_0);
    this.viewabilityHelpers = [];
    this.hasInteracted = false;
    this.dispose = () => {
      const viewabilityHelpers = self.viewabilityHelpers;
      const item = viewabilityHelpers.forEach((item, index) => item.dispose());
    };
    this.onVisibleIndicesChanged = (arg0) => {
      self.updateViewableItems(arg0);
    };
    this.recordInteraction = () => {
      if (!self.hasInteracted) {
        self.hasInteracted = true;
        const viewabilityHelpers = self.viewabilityHelpers;
        const item = viewabilityHelpers.forEach((item, index) => {
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
          const item = viewabilityHelpers.forEach((item, index) => {
            let flag = windowSize.rvManager.props.horizontal;
            if (flag == null) {
              flag = false;
            }
            item.updateViewableItems(flag, closure_2, num2, windowSize, (arg0) => {
              rvManager = rvManager.rvManager;
              return rvManager.getLayout(arg0);
            }, closure_0);
          });
        }
      }
    };
    this.clearLastReportedViewableIndices = () => {
      const viewabilityHelpers = self.viewabilityHelpers;
      const item = viewabilityHelpers.forEach((item, index) => item.clearLastReportedViewableIndices());
    };
    this.createViewabilityHelper = (arg0, arg1) => {
      const lib = arg1;
      return new lib(self[2])(arg0, (arr, arr2, arr3) => {
        if (closure_0 != null) {
          let obj = { viewableItems: null, changed: null };
          obj[0] = arr.map((item, index) => {
            if (undefined !== closure_1.rvManager.props.data[item]) {
              if (undefined !== closure_1.rvManager.props.keyExtractor) {
                const props = closure_1.rvManager.props;
                let keyExtractorResult = props.keyExtractor(tmp2, item);
              }
              const obj = { index: null, isViewable: true, item: null, key: null, timestamp: null };
              obj[0] = item;
              obj[2] = tmp2;
              obj[3] = keyExtractorResult;
              const _Date = Date;
              obj[4] = Date.now();
              return obj;
            }
            keyExtractorResult = item.toString();
          });
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(arr2.map((item, index) => {
            if (undefined !== closure_1.rvManager.props.data[item]) {
              if (undefined !== closure_1.rvManager.props.keyExtractor) {
                const props = closure_1.rvManager.props;
                let keyExtractorResult = props.keyExtractor(tmp2, item);
              }
              const obj = { index: null, isViewable: true, item: null, key: null, timestamp: null };
              obj[0] = item;
              obj[2] = tmp2;
              obj[3] = keyExtractorResult;
              const _Date = Date;
              obj[4] = Date.now();
              return obj;
            }
            keyExtractorResult = item.toString();
          }), 0);
          arraySpreadResult = HermesBuiltin.arraySpread(arr3.map((item, index) => {
            if (undefined !== closure_1.rvManager.props.data[item]) {
              if (undefined !== closure_1.rvManager.props.keyExtractor) {
                const props = closure_1.rvManager.props;
                let keyExtractorResult = props.keyExtractor(tmp2, item);
              }
              const obj = { index: null, isViewable: false, item: null, key: null, timestamp: null };
              obj[0] = item;
              obj[2] = tmp2;
              obj[3] = keyExtractorResult;
              const _Date = Date;
              obj[4] = Date.now();
              return obj;
            }
            keyExtractorResult = item.toString();
          }), arraySpreadResult);
          obj[1] = items;
          tmp(obj);
        }
      });
    };
    this.rvManager = global;
    tmp2 = null !== global.props.onViewableItemsChanged && undefined !== global.props.onViewableItemsChanged;
    if (tmp2) {
      viewabilityHelpers = self.viewabilityHelpers;
      arr = viewabilityHelpers.push(self.createViewabilityHelper(global.props.viewabilityConfig, (arg0) => {
        const props = lib.props;
        const onViewableItemsChanged = props.onViewableItemsChanged;
        if (onViewableItemsChanged != null) {
          const result = onViewableItemsChanged(arg0);
        }
      }));
    }
    prop = global.props.viewabilityConfigCallbackPairs;
    if (prop == null) {
      prop = [];
    }
    item = prop.forEach((item, index) => {
      closure_0 = index;
      const viewabilityHelpers = self.viewabilityHelpers;
      viewabilityHelpers.push(self.createViewabilityHelper(item.viewabilityConfig, (arg0) => {
        let prop;
        if (index.props.viewabilityConfigCallbackPairs != null) {
          if (viewabilityConfigCallbackPairs[index] != null) {
            prop = tmp3.onViewableItemsChanged;
          }
        }
        if (prop != null) {
          prop(arg0);
        }
      }));
    });
    return;
  }
}
let items = [
  {
    key: "shouldListenToVisibleIndices",
    get() {
      return this.viewabilityHelpers.length > 0;
    }
  }
];

export default _createClassDefault(ViewabilityManager, items);