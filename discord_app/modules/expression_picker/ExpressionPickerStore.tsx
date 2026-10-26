// === Module 18522: ExpressionPickerStore ===

// Module 18522 (ExpressionPickerStore)
import ExpressionPickerConstants from "ExpressionPickerConstants" /* 1243 */;
import uniqueIdDefault from "uniqueId" /* 6673 */;
import identity_mod from "module_1269" /* 1269 */;
import module_5164 from "module_5164" /* 5164 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const ExpressionPickerViewType = ExpressionPickerConstants.ExpressionPickerViewType;
let closure_3 = Object.freeze({ activeView: null, lastActiveView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, searchQuery: "", isSearchSuggestion: false, pickerId: uniqueIdDefault("uid_"), isNitroLockedSectionVisible: false, areOnlyNitroLockedSectionsVisible: false });
let identity = identity_mod;
identity = identity.createWithEqualityFn();
const withEqualityFnResult = identity(module_5164.persist(() => closure_3, {
  name: "expression-picker-last-active-view",
  partialize(lastActiveView) {
    return { lastActiveView: lastActiveView.lastActiveView };
  }
}));
const result = size.fileFinishedImporting("modules/expression_picker/ExpressionPickerStore.tsx");

export const openExpressionPicker = function openExpressionPicker(arg0, arg1, arg2, arg3) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: null, lastActiveView: null };
    let flag;
    if (showEmojiPacks != null) {
      flag = showEmojiPacks.showEmojiPacks;
    }
    if (flag == null) {
      flag = false;
    }
    obj2.showEmojiPacks = flag;
    obj2.lastActiveView = withEqualityFnResult.getState().activeView;
    return withEqualityFnResult.setState(obj2);
  });
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
      state(1274).batchUpdates(() => withEqualityFnResult.setState({ activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, lastActiveView: activeView.activeView }));
      const obj = state(1274);
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
    state1(1274).batchUpdates(() => {
      const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: null, lastActiveView: null };
      let flag;
      if (showEmojiPacks != null) {
        flag = showEmojiPacks.showEmojiPacks;
      }
      if (flag == null) {
        flag = false;
      }
      obj2.showEmojiPacks = flag;
      obj2.lastActiveView = withEqualityFnResult.getState().activeView;
      return withEqualityFnResult.setState(obj2);
    });
    const obj3 = state1(1274);
  } else {
    if (state.activeViewType === arg0) {
      if (state.activeChannelId === arg1) {
        state1 = withEqualityFnResult.getState();
        if (null !== state1.activeView) {
          state1(1274).batchUpdates(() => withEqualityFnResult.setState({ activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, lastActiveView: activeView.activeView }));
          const obj4 = state1(1274);
        }
      }
    }
    const activeView = state.activeView;
    closure_129_1 = arg0;
    closure_129_2 = arg1;
    closure_129_3 = undefined;
    state1(1274).batchUpdates(() => {
      const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: null, lastActiveView: null };
      let flag;
      if (showEmojiPacks != null) {
        flag = showEmojiPacks.showEmojiPacks;
      }
      if (flag == null) {
        flag = false;
      }
      obj2.showEmojiPacks = flag;
      obj2.lastActiveView = withEqualityFnResult.getState().activeView;
      return withEqualityFnResult.setState(obj2);
    });
    const obj2 = state1(1274);
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
          require("ReactBatchUpdates").batchUpdates(() => withEqualityFnResult.setState({ activeView: null, activeViewType: null, activeChannelId: null, showEmojiPacks: false, lastActiveView: activeView.activeView }));
          const obj3 = require("ReactBatchUpdates");
        }
      }
    }
  }
  _require = activeView;
  dependencyMap = activeViewType;
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj2 = { activeView, activeViewType, activeChannelId, showEmojiPacks: null, lastActiveView: null };
    let flag;
    if (showEmojiPacks != null) {
      flag = showEmojiPacks.showEmojiPacks;
    }
    if (flag == null) {
      flag = false;
    }
    obj2.showEmojiPacks = flag;
    obj2.lastActiveView = withEqualityFnResult.getState().activeView;
    return withEqualityFnResult.setState(obj2);
  });
  let obj2 = require("ReactBatchUpdates");
};
export const setExpressionPickerView = function setExpressionPickerView(activeView) {
  _require = activeView;
  require("ReactBatchUpdates").batchUpdates(() => withEqualityFnResult.setState({ activeView, lastActiveView: withEqualityFnResult.getState().activeView, showEmojiPacks: false }));
};
export const setShowEmojiPacks = function setShowEmojiPacks(showEmojiPacks) {
  _require = showEmojiPacks;
  require("ReactBatchUpdates").batchUpdates(() => withEqualityFnResult.setState({ showEmojiPacks }));
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