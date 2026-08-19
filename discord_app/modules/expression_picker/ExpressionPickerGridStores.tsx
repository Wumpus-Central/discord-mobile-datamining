// === Module 9303: withEqualityFn ===

// Module 9303 (withEqualityFn)
import obj132 from "obj132" /* 2 */;
import identity from "identity" /* 700 */;
import createJSONStorage from "createJSONStorage" /* 4242 */;

let closure_2 = Object.freeze({ inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 }, hasInteracted: false, activeCategoryIndex: 0, searchPlaceholder: null, bottomPosition: null, analyticsId: null });
identity = identity.createWithEqualityFn();
let withEqualityFnResult = identity(createJSONStorage.subscribeWithSelector(() => closure_2));
identity = identity.createWithEqualityFn();
const withEqualityFn1Result = identity(createJSONStorage.subscribeWithSelector(() => closure_2));
let obj = {
  useStore: withEqualityFn1Result,
  getState() {
    return withEqualityFnResult.getState();
  },
  subscribe(arg0, arg1) {
    return withEqualityFnResult.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => {
      const inspectedExpressionPosition = { rowIndex: closure_1, columnIndex: state, source: closure_2 };
      return state.setState({ inspectedExpressionPosition, hasInteracted: true });
    });
  },
  setActiveCategoryIndex(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ activeCategoryIndex: state }));
  },
  setSearchPlaceholder(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ searchPlaceholder: state }));
  },
  resetStoreState() {
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState(closure_1_2));
  },
  setBottomPosition(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ bottomPosition: state }));
  },
  setAnalyticsId(replaced) {
    closure_0 = replaced;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ analyticsId: state }));
  },
  getAnalyticsId() {
    return withEqualityFnResult.getState().analyticsId;
  }
};
identity = identity.createWithEqualityFn();
const withEqualityFn2Result = identity(createJSONStorage.subscribeWithSelector(() => closure_2));
identity = identity.createWithEqualityFn();
const withEqualityFn3Result = identity(createJSONStorage.subscribeWithSelector(() => closure_2));
let c0 = withEqualityFn3Result;
const result = obj132.fileFinishedImporting("modules/expression_picker/ExpressionPickerGridStores.tsx");

export default function createStore() {
  let obj = _undefined(700);
  const withEqualityFn = obj.createWithEqualityFn();
  const withEqualityFnResult = withEqualityFn(_undefined(4242).subscribeWithSelector(() => closure_2));
  _undefined = withEqualityFnResult;
  obj = {
    useStore: withEqualityFnResult,
    getState() {
      return withEqualityFnResult.getState();
    },
    subscribe(arg0, arg1) {
      return withEqualityFnResult.subscribe(arg0, arg1);
    },
    setInspectedExpressionPosition(arg0, arg1, arg2) {
      closure_0 = arg0;
      closure_1 = arg1;
      closure_2 = arg2;
      withEqualityFnResult(dependencyMap[2]).batchUpdates(() => {
        const inspectedExpressionPosition = { rowIndex: closure_1, columnIndex: state, source: closure_2 };
        return state.setState({ inspectedExpressionPosition, hasInteracted: true });
      });
    },
    setActiveCategoryIndex(arg0) {
      closure_0 = arg0;
      withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ activeCategoryIndex: state }));
    },
    setSearchPlaceholder(arg0) {
      closure_0 = arg0;
      withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ searchPlaceholder: state }));
    },
    resetStoreState() {
      withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState(closure_1_2));
    },
    setBottomPosition(arg0) {
      closure_0 = arg0;
      withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ bottomPosition: state }));
    },
    setAnalyticsId(replaced) {
      closure_0 = replaced;
      withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ analyticsId: state }));
    },
    getAnalyticsId() {
      return withEqualityFnResult.getState().analyticsId;
    }
  };
  return obj;
};
export const INACTIVE_CATEGORY_INDEX = -1;
export const EmojiPickerStore = obj;
export const StickerPickerStore = obj;
export const SoundboardPickerStore = {
  useStore: withEqualityFn2Result,
  getState() {
    return withEqualityFnResult.getState();
  },
  subscribe(arg0, arg1) {
    return withEqualityFnResult.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => {
      const inspectedExpressionPosition = { rowIndex: closure_1, columnIndex: state, source: closure_2 };
      return state.setState({ inspectedExpressionPosition, hasInteracted: true });
    });
  },
  setActiveCategoryIndex(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ activeCategoryIndex: state }));
  },
  setSearchPlaceholder(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ searchPlaceholder: state }));
  },
  resetStoreState() {
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState(closure_1_2));
  },
  setBottomPosition(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ bottomPosition: state }));
  },
  setAnalyticsId(replaced) {
    closure_0 = replaced;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ analyticsId: state }));
  },
  getAnalyticsId() {
    return withEqualityFnResult.getState().analyticsId;
  }
};
export const ApplicationCommandDiscoveryPickerStore = {
  useStore: withEqualityFn3Result,
  getState() {
    return withEqualityFnResult.getState();
  },
  subscribe(arg0, arg1) {
    return withEqualityFnResult.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(arg0, arg1, arg2) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => {
      const inspectedExpressionPosition = { rowIndex: closure_1, columnIndex: state, source: closure_2 };
      return state.setState({ inspectedExpressionPosition, hasInteracted: true });
    });
  },
  setActiveCategoryIndex(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ activeCategoryIndex: state }));
  },
  setSearchPlaceholder(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ searchPlaceholder: state }));
  },
  resetStoreState() {
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState(closure_1_2));
  },
  setBottomPosition(arg0) {
    closure_0 = arg0;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ bottomPosition: state }));
  },
  setAnalyticsId(replaced) {
    closure_0 = replaced;
    withEqualityFnResult(dependencyMap[2]).batchUpdates(() => state.setState({ analyticsId: state }));
  },
  getAnalyticsId() {
    return withEqualityFnResult.getState().analyticsId;
  }
};