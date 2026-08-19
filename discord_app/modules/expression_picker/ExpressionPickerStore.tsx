// === Module 16283: withEqualityFn ===

// Module 16283 (withEqualityFn)
import obj132 from "obj132" /* 2 */;
import ExpressionPickerViewType2 from "ExpressionPickerViewType" /* 1338 */;
import uniqueIdDefault from "uniqueId" /* 5261 */;
import identity from "identity" /* 700 */;
import createJSONStorage from "createJSONStorage" /* 4242 */;

let ExpressionPickerViewType = ExpressionPickerViewType2.ExpressionPickerViewType;
let obj = { activeView: null, lastActiveView: null, activeViewType: null, activeChannelId: null, searchQuery: "", isSearchSuggestion: false, pickerId: uniqueIdDefault("uid_"), isNitroLockedSectionVisible: false, areOnlyNitroLockedSectionsVisible: false };
let closure_3 = Object.freeze(obj);
identity = identity.createWithEqualityFn();
obj = {
  name: "expression-picker-last-active-view",
  partialize(lastActiveView) {
    return { lastActiveView: lastActiveView.lastActiveView };
  }
};
const withEqualityFnResult = identity(createJSONStorage.persist(() => closure_3, obj));
let c4 = withEqualityFnResult;
const result = obj132.fileFinishedImporting("modules/expression_picker/ExpressionPickerStore.tsx");

export const openExpressionPicker = function openExpressionPicker(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  _require(705).batchUpdates(() => closure_1_4.setState({ activeView: closure_0, activeViewType: closure_1, activeChannelId: closure_2, lastActiveView: closure_1_4.getState().activeView }));
};
export const closeExpressionPicker = function closeExpressionPicker(arg0, arg1) {
  const state = withEqualityFnResult.getState();
  let tmp2 = undefined !== arg0 && arg0 !== state.activeViewType;
  if (!tmp2) {
    tmp2 = undefined !== arg1 && arg1 !== state.activeChannelId;
  }
  if (!tmp2) {
    if (null !== state.activeView) {
      state(705).batchUpdates(() => closure_1_4.setState({ activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: activeView.activeView }));
      const obj = state(705);
    }
  }
};
export const toggleMultiExpressionPicker = function toggleMultiExpressionPicker(arg0, arg1) {
  const state = withEqualityFnResult.getState();
  if (null == state.activeView) {
    let EMOJI = state.lastActiveView;
    if (EMOJI == null) {
      EMOJI = ExpressionPickerViewType.EMOJI;
    }
    let activeView = EMOJI;
    dependencyMap = arg0;
    ExpressionPickerViewType = arg1;
    activeView(705).batchUpdates(() => closure_1_4.setState({ activeView: closure_0, activeViewType: closure_1, activeChannelId: closure_2, lastActiveView: closure_1_4.getState().activeView }));
    const obj3 = activeView(705);
  } else {
    if (state.activeViewType === arg0) {
      if (state.activeChannelId === arg1) {
        const state1 = withEqualityFnResult.getState();
        activeView = state1;
        if (null !== state1.activeView) {
          activeView(705).batchUpdates(() => closure_1_4.setState({ activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: activeView.activeView }));
          const obj4 = activeView(705);
        }
      }
    }
    activeView = state.activeView;
    dependencyMap = arg0;
    ExpressionPickerViewType = arg1;
    activeView(705).batchUpdates(() => closure_1_4.setState({ activeView: closure_0, activeViewType: closure_1, activeChannelId: closure_2, lastActiveView: closure_1_4.getState().activeView }));
    const obj2 = activeView(705);
  }
};
export const toggleExpressionPicker = function toggleExpressionPicker(arg0, arg1, arg2) {
  const state = withEqualityFnResult.getState();
  if (state.activeView === arg0) {
    if (state.activeViewType === arg1) {
      if (state.activeChannelId === arg2) {
        const state1 = withEqualityFnResult.getState();
        let _require = state1;
        if (null !== state1.activeView) {
          _require(705).batchUpdates(() => closure_1_4.setState({ activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: activeView.activeView }));
          const obj3 = _require(705);
        }
      }
    }
  }
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  _require(705).batchUpdates(() => closure_1_4.setState({ activeView: closure_0, activeViewType: closure_1, activeChannelId: closure_2, lastActiveView: closure_1_4.getState().activeView }));
  const obj2 = _require(705);
};
export const setExpressionPickerView = function setExpressionPickerView(arg0) {
  const _require = arg0;
  _require(705).batchUpdates(() => closure_1_4.setState({ activeView: closure_0, lastActiveView: closure_1_4.getState().activeView }));
};
export const setSearchQuery = function setSearchQuery(arg0) {
  const _require = arg0;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  _require(flag[4]).batchUpdates(() => closure_1_4.setState({ searchQuery: closure_0, isSearchSuggestion: flag }));
};
export const useExpressionPickerStore = withEqualityFnResult;