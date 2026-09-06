// === Module 17061: ExpressionPickerStore ===

// Module 17061 (ExpressionPickerStore)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1219 */;
import uniqueIdDefault from "uniqueId" /* 4764 */;
import identity from "module_1244" /* 1244 */;
import module_4430 from "module_4430" /* 4430 */;
import size from "module_2" /* 2 */;

const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let obj = { activeView: null, lastActiveView: null, activeViewType: null, activeChannelId: null, searchQuery: "", isSearchSuggestion: false, pickerId: uniqueIdDefault("uid_"), isNitroLockedSectionVisible: false, areOnlyNitroLockedSectionsVisible: false };
let closure_3 = Object.freeze(obj);
identity = identity.createWithEqualityFn();
obj = {
  name: "expression-picker-last-active-view",
  partialize(lastActiveView) {
    return { lastActiveView: lastActiveView.lastActiveView };
  }
};
const withEqualityFnResult = identity(module_4430.persist(() => closure_3, obj));
const result = size.fileFinishedImporting("modules/expression_picker/ExpressionPickerStore.tsx");

export const openExpressionPicker = function openExpressionPicker(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  require("ReactBatchUpdates").batchUpdates(() => withEqualityFnResult.setState({ activeView, activeViewType, activeChannelId, lastActiveView: withEqualityFnResult.getState().activeView }));
};
export const closeExpressionPicker = function closeExpressionPicker(arg0, arg1) {
  const state = withEqualityFnResult.getState();
  let tmp2 = undefined !== arg0 && arg0 !== state.activeViewType;
  if (!tmp2) {
    tmp2 = undefined !== arg1 && arg1 !== state.activeChannelId;
    const tmp4 = undefined !== arg1 && arg1 !== state.activeChannelId;
  }
  if (!tmp2) {
    if (null !== state.activeView) {
      state(1249).batchUpdates(() => withEqualityFnResult.setState({ activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: activeView.activeView }));
      const obj = state(1249);
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
    closure_130_0 = EMOJI;
    closure_130_1 = arg0;
    closure_130_2 = arg1;
    state1(1249).batchUpdates(() => withEqualityFnResult.setState({ activeView, activeViewType, activeChannelId, lastActiveView: withEqualityFnResult.getState().activeView }));
    const obj3 = state1(1249);
  } else {
    if (state.activeViewType === arg0) {
      if (state.activeChannelId === arg1) {
        state1 = withEqualityFnResult.getState();
        if (null !== state1.activeView) {
          state1(1249).batchUpdates(() => withEqualityFnResult.setState({ activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: activeView.activeView }));
          const obj4 = state1(1249);
        }
      }
    }
    const activeView = state.activeView;
    closure_129_1 = arg0;
    closure_129_2 = arg1;
    state1(1249).batchUpdates(() => withEqualityFnResult.setState({ activeView, activeViewType, activeChannelId, lastActiveView: withEqualityFnResult.getState().activeView }));
    const obj2 = state1(1249);
  }
};
export const toggleExpressionPicker = function toggleExpressionPicker(activeView, activeViewType, activeChannelId) {
  const state = withEqualityFnResult.getState();
  if (state.activeView === activeView) {
    if (state.activeViewType === activeViewType) {
      if (state.activeChannelId === activeChannelId) {
        const state1 = withEqualityFnResult.getState();
        closure_129_0 = state1;
        if (null !== state1.activeView) {
          require("ReactBatchUpdates").batchUpdates(() => withEqualityFnResult.setState({ activeView: null, activeViewType: null, activeChannelId: null, lastActiveView: activeView.activeView }));
          const obj3 = require("ReactBatchUpdates");
        }
      }
    }
  }
  _require = activeView;
  dependencyMap = activeViewType;
  require("ReactBatchUpdates").batchUpdates(() => withEqualityFnResult.setState({ activeView, activeViewType, activeChannelId, lastActiveView: withEqualityFnResult.getState().activeView }));
  const obj2 = require("ReactBatchUpdates");
};
export const setExpressionPickerView = function setExpressionPickerView(activeView) {
  _require = activeView;
  require("ReactBatchUpdates").batchUpdates(() => withEqualityFnResult.setState({ activeView, lastActiveView: withEqualityFnResult.getState().activeView }));
};
export const setSearchQuery = function setSearchQuery(searchQuery) {
  _require = searchQuery;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  require("ReactBatchUpdates").batchUpdates(() => withEqualityFnResult.setState({ searchQuery, isSearchSuggestion: flag }));
};
export const useExpressionPickerStore = withEqualityFnResult;