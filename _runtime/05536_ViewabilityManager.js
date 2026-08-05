// _runtime/05536_ViewabilityManager.js
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

const ViewabilityManager = importDefault;
class ViewabilityManager {
  constructor(arg0) {
    self = this;
    self = this;
    closure_0 = global;
    tmp = outer1_2(this, closure_0);
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
        obj.hasInteracted = true;
        const viewabilityHelpers = obj.viewabilityHelpers;
        const item = viewabilityHelpers.forEach((arg0) => {
          arg0.hasInteracted = true;
        });
        obj.updateViewableItems();
      }
    };
    this.updateViewableItems = (arg0) => {
      let closure_0 = arg0;
      let rvManager = windowSize.rvManager;
      windowSize = rvManager.getWindowSize();
      if (undefined !== windowSize) {
        if (tmp.shouldListenToVisibleIndices) {
          const rvManager2 = tmp.rvManager;
          let num = rvManager2.getAbsoluteLastScrollOffset();
          if (num == null) {
            num = 0;
          }
          let _classCallCheck = num - tmp.rvManager.firstItemOffset;
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
            let flag = windowSize.rvManager.props.horizontal;
            if (flag == null) {
              flag = false;
            }
            updateViewableItems.updateViewableItems(flag, _classCallCheck, num2, windowSize, (arg0) => {
              rvManager = rvManager.rvManager;
              return rvManager.getLayout(arg0);
            }, closure_0);
          });
        }
      }
    };
    this.clearLastReportedViewableIndices = () => {
      const viewabilityHelpers = self.viewabilityHelpers;
      const item = viewabilityHelpers.forEach((clearLastReportedViewableIndices) => clearLastReportedViewableIndices.clearLastReportedViewableIndices());
    };
    this.createViewabilityHelper = (arg0, arg1) => {
      const lib = arg1;
      return new lib(self[2])(arg0, (arr, arr2, arr3) => {
        if (closure_0 != null) {
          let obj = { viewableItems: null, changed: null };
          obj[0] = arr.map((arg0) => {
            if (undefined !== closure_1.rvManager.props.data[arg0]) {
              if (undefined !== tmp.rvManager.props.keyExtractor) {
                const props = tmp.rvManager.props;
                let keyExtractorResult = props.keyExtractor(tmp2, arg0);
              }
              const obj = { index: null, isViewable: true, item: null, key: null, timestamp: null };
              obj[0] = arg0;
              obj[2] = tmp2;
              obj[3] = keyExtractorResult;
              const _Date = Date;
              obj[4] = Date.now();
              return obj;
            }
            keyExtractorResult = arg0.toString();
          });
          const items = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(arr2.map((arg0) => {
            if (undefined !== closure_1.rvManager.props.data[arg0]) {
              if (undefined !== tmp.rvManager.props.keyExtractor) {
                const props = tmp.rvManager.props;
                let keyExtractorResult = props.keyExtractor(tmp2, arg0);
              }
              const obj = { index: null, isViewable: true, item: null, key: null, timestamp: null };
              obj[0] = arg0;
              obj[2] = tmp2;
              obj[3] = keyExtractorResult;
              const _Date = Date;
              obj[4] = Date.now();
              return obj;
            }
            keyExtractorResult = arg0.toString();
          }), 0);
          arraySpreadResult = HermesBuiltin.arraySpread(arr3.map((arg0) => {
            if (undefined !== closure_1.rvManager.props.data[arg0]) {
              if (undefined !== tmp.rvManager.props.keyExtractor) {
                const props = tmp.rvManager.props;
                let keyExtractorResult = props.keyExtractor(tmp2, arg0);
              }
              const obj = { index: null, isViewable: false, item: null, key: null, timestamp: null };
              obj[0] = arg0;
              obj[2] = tmp2;
              obj[3] = keyExtractorResult;
              const _Date = Date;
              obj[4] = Date.now();
              return obj;
            }
            keyExtractorResult = arg0.toString();
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
    item = prop.forEach((viewabilityConfig) => {
      let closure_0 = arg1;
      const viewabilityHelpers = self.viewabilityHelpers;
      viewabilityHelpers.push(self.createViewabilityHelper(viewabilityConfig.viewabilityConfig, (arg0) => {
        let prop;
        if (props.props.viewabilityConfigCallbackPairs != null) {
          if (viewabilityConfigCallbackPairs[props] != null) {
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

export default _createClass(ViewabilityManager, items);