// discord_app/modules/expression_picker/ExpressionPickerGridStores.tsx
import react_native from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import module_1254_mod from "../../../_runtime/metro/01254__.js";
import combine_mod from "../../../_runtime/04756_combine.js";
import size from "../../../_runtime/metro/00002__.js";

const f102101 = () => closure_1_2;
let closure_2 = Object.freeze({
  inspectedExpressionPosition: { rowIndex: 0, columnIndex: 0 },
  hasInteracted: false,
  activeCategoryIndex: 0,
  searchPlaceholder: null,
  bottomPosition: null,
  analyticsId: null,
});
let module_1254 = module_1254_mod;
module_1254 = module_1254.createWithEqualityFn();
let combine = combine_mod;
let withEqualityFnResult = module_1254(combine.subscribeWithSelector(f102101));
let store = {
  useStore: withEqualityFnResult,
  getState() {
    return require.getState();
  },
  subscribe(arg0, arg1) {
    return require.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(columnIndex, rowIndex, source) {
    let obj = react_native;
    obj.batchUpdates(() => {
      let obj2;
      const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
      obj2 = { rowIndex, columnIndex, source };
      return require.setState(obj);
    });
  },
  setActiveCategoryIndex(activeCategoryIndex) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { activeCategoryIndex };
      return require.setState(obj);
    });
  },
  setSearchPlaceholder(searchPlaceholder) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { searchPlaceholder };
      return require.setState(obj);
    });
  },
  resetStoreState() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState(closure_2_2));
  },
  setBottomPosition(bottomPosition) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { bottomPosition };
      return require.setState(obj);
    });
  },
  setAnalyticsId(replaced) {
    const analyticsId = replaced;
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { analyticsId };
      return require.setState(obj);
    });
  },
  getAnalyticsId() {
    return require.getState().analyticsId;
  },
};
module_1254 = module_1254_mod;
module_1254 = module_1254.createWithEqualityFn();
combine = combine_mod;
const withEqualityFn1Result = module_1254(combine.subscribeWithSelector(f102101));
const store1 = {
  useStore: withEqualityFn1Result,
  getState() {
    return require.getState();
  },
  subscribe(arg0, arg1) {
    return require.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(columnIndex, rowIndex, source) {
    let obj = react_native;
    obj.batchUpdates(() => {
      let obj2;
      const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
      obj2 = { rowIndex, columnIndex, source };
      return require.setState(obj);
    });
  },
  setActiveCategoryIndex(activeCategoryIndex) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { activeCategoryIndex };
      return require.setState(obj);
    });
  },
  setSearchPlaceholder(searchPlaceholder) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { searchPlaceholder };
      return require.setState(obj);
    });
  },
  resetStoreState() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState(closure_2_2));
  },
  setBottomPosition(bottomPosition) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { bottomPosition };
      return require.setState(obj);
    });
  },
  setAnalyticsId(replaced) {
    const analyticsId = replaced;
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { analyticsId };
      return require.setState(obj);
    });
  },
  getAnalyticsId() {
    return require.getState().analyticsId;
  },
};
module_1254 = module_1254_mod;
module_1254 = module_1254.createWithEqualityFn();
combine = combine_mod;
const withEqualityFn2Result = module_1254(combine.subscribeWithSelector(f102101));
const store2 = {
  useStore: withEqualityFn2Result,
  getState() {
    return require.getState();
  },
  subscribe(arg0, arg1) {
    return require.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(columnIndex, rowIndex, source) {
    let obj = react_native;
    obj.batchUpdates(() => {
      let obj2;
      const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
      obj2 = { rowIndex, columnIndex, source };
      return require.setState(obj);
    });
  },
  setActiveCategoryIndex(activeCategoryIndex) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { activeCategoryIndex };
      return require.setState(obj);
    });
  },
  setSearchPlaceholder(searchPlaceholder) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { searchPlaceholder };
      return require.setState(obj);
    });
  },
  resetStoreState() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState(closure_2_2));
  },
  setBottomPosition(bottomPosition) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { bottomPosition };
      return require.setState(obj);
    });
  },
  setAnalyticsId(replaced) {
    const analyticsId = replaced;
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { analyticsId };
      return require.setState(obj);
    });
  },
  getAnalyticsId() {
    return require.getState().analyticsId;
  },
};
module_1254 = module_1254_mod;
module_1254 = module_1254.createWithEqualityFn();
combine = combine_mod;
const withEqualityFn3Result = module_1254(combine.subscribeWithSelector(f102101));
let c0 = withEqualityFn3Result;
const store3 = {
  useStore: withEqualityFn3Result,
  getState() {
    return require.getState();
  },
  subscribe(arg0, arg1) {
    return require.subscribe(arg0, arg1);
  },
  setInspectedExpressionPosition(columnIndex, rowIndex, source) {
    let obj = react_native;
    obj.batchUpdates(() => {
      let obj2;
      const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
      obj2 = { rowIndex, columnIndex, source };
      return require.setState(obj);
    });
  },
  setActiveCategoryIndex(activeCategoryIndex) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { activeCategoryIndex };
      return require.setState(obj);
    });
  },
  setSearchPlaceholder(searchPlaceholder) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { searchPlaceholder };
      return require.setState(obj);
    });
  },
  resetStoreState() {
    let state;
    const obj = react_native;
    obj.batchUpdates(() => state.setState(closure_2_2));
  },
  setBottomPosition(bottomPosition) {
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { bottomPosition };
      return require.setState(obj);
    });
  },
  setAnalyticsId(replaced) {
    const analyticsId = replaced;
    let obj = react_native;
    obj.batchUpdates(() => {
      const obj = { analyticsId };
      return require.setState(obj);
    });
  },
  getAnalyticsId() {
    return require.getState().analyticsId;
  },
};
const result = size.fileFinishedImporting("modules/expression_picker/ExpressionPickerGridStores.tsx");

export default function createStore() {
  let obj = module_1254;
  const withEqualityFn = obj.createWithEqualityFn();
  let obj2 = combine;
  const withEqualityFnResult = withEqualityFn(obj2.subscribeWithSelector(f102101));
  require = withEqualityFnResult;
  const store = {
    useStore: withEqualityFnResult,
    getState() {
      return require.getState();
    },
    subscribe(arg0, arg1) {
      return require.subscribe(arg0, arg1);
    },
    setInspectedExpressionPosition(columnIndex, rowIndex, source) {
      let obj = react_native;
      obj.batchUpdates(() => {
        let obj2;
        const obj = { inspectedExpressionPosition: obj2, hasInteracted: true };
        obj2 = { rowIndex, columnIndex, source };
        return require.setState(obj);
      });
    },
    setActiveCategoryIndex(activeCategoryIndex) {
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = { activeCategoryIndex };
        return require.setState(obj);
      });
    },
    setSearchPlaceholder(searchPlaceholder) {
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = { searchPlaceholder };
        return require.setState(obj);
      });
    },
    resetStoreState() {
      let state;
      const obj = react_native;
      obj.batchUpdates(() => state.setState(closure_2_2));
    },
    setBottomPosition(bottomPosition) {
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = { bottomPosition };
        return require.setState(obj);
      });
    },
    setAnalyticsId(replaced) {
      const analyticsId = replaced;
      let obj = react_native;
      obj.batchUpdates(() => {
        const obj = { analyticsId };
        return require.setState(obj);
      });
    },
    getAnalyticsId() {
      return require.getState().analyticsId;
    },
  };
  return store;
}
export const INACTIVE_CATEGORY_INDEX = -1;
export const EmojiPickerStore = store;
export const StickerPickerStore = store1;
export const SoundboardPickerStore = store2;
export const ApplicationCommandDiscoveryPickerStore = store3;
