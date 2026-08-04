import keys from "keys";

let chatInputContainerHeight = "chatInputContainerHeight";
let obj = keys.create(() => {
  const obj = { chatInputContainerHeight: null, showingAutoComplete: null, showJumpToPresentButtonChannelId: null, isAtBottom: null };
  obj[0] = new Map();
  const map = new Map();
  obj[1] = new Map();
  const map1 = new Map();
  obj[2] = new Map();
  const map2 = new Map();
  obj[3] = new Map();
  return obj;
});
let result = require("getBestActiveInput").fileFinishedImporting("modules/chat_input/native/useChatBottomManagerUIStore.tsx");

export default obj;
export const updateChatInputContainerHeight = function updateChatInputContainerHeight(arg0, arg1) {
  const _require = arg0;
  const dependencyMap = arg1;
  if (typeof arg0 !== "V") {
    const Storage = _require(595).Storage;
    let result = Storage.set(chatInputContainerHeight, arg1);
  }
  obj.setState((chatInputContainerHeight) => {
    chatInputContainerHeight = new Map(chatInputContainerHeight.chatInputContainerHeight);
    const result = chatInputContainerHeight.set(closure_0, closure_1);
    return { chatInputContainerHeight };
  });
};
export const updateShowingAutoComplete = function updateShowingAutoComplete(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj.setState((showingAutoComplete) => {
    showingAutoComplete = new Map(showingAutoComplete.showingAutoComplete);
    const result = showingAutoComplete.set(closure_0, closure_1);
    return { showingAutoComplete };
  });
};
export const updateShouldShowJumpToPresentButton = function updateShouldShowJumpToPresentButton(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let closure_2 = arg2;
  obj.setState((showJumpToPresentButtonChannelId) => {
    showJumpToPresentButtonChannelId = new Map(showJumpToPresentButtonChannelId.showJumpToPresentButtonChannelId);
    let tmp2;
    if (closure_2) {
      tmp2 = closure_0;
    }
    const result = showJumpToPresentButtonChannelId.set(closure_1, tmp2);
    return { showJumpToPresentButtonChannelId };
  });
};
export const useChatInputContainerHeight = function useChatInputContainerHeight(arg0) {
  let closure_0 = arg0;
  return obj((chatInputContainerHeight) => {
    chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
    let value = chatInputContainerHeight.get(callback);
    if (value == null) {
      const Storage = callback(outer1_1[0]).Storage;
      let num2 = Storage.get(outer1_2, 0);
      if (num2 == null) {
        num2 = 0;
      }
      value = num2;
    }
    return value;
  });
};
export const useChatShowingAutoComplete = function useChatShowingAutoComplete(arg0) {
  let closure_0 = arg0;
  return obj((showingAutoComplete) => {
    showingAutoComplete = showingAutoComplete.showingAutoComplete;
    let flag = showingAutoComplete.get(closure_0);
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};
export const updateIsAtBottom = function updateIsAtBottom(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  obj.setState((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    if (isAtBottom.get(closure_0) === closure_1) {
      return isAtBottom;
    } else {
      const _Map = Map;
      const map = new Map(isAtBottom.isAtBottom);
      const result = map.set(tmp, tmp2);
      const obj = { isAtBottom: null };
      obj[0] = map;
      return obj;
    }
    tmp = closure_0;
  });
};
export const useChatIsAtBottom = function useChatIsAtBottom(arg0) {
  let closure_0 = arg0;
  return obj((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    let flag = isAtBottom.get(closure_0);
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
};
export const useBestActiveChatInputContainerHeight = function useBestActiveChatInputContainerHeight() {
  return obj((chatInputContainerHeight) => {
    const highestActiveScreenIndex = callback(table[2]).getHighestActiveScreenIndex();
    if (null == highestActiveScreenIndex) {
      const Storage2 = tmp(tmp2[0]).Storage;
      let num4 = Storage2.get(closure_2, 0);
      if (num4 == null) {
        num4 = 0;
      }
      let value = num4;
    } else {
      chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
      value = chatInputContainerHeight.get(highestActiveScreenIndex);
      if (value == null) {
        const Storage = tmp(tmp2[0]).Storage;
        let num2 = Storage.get(closure_2, 0);
        if (num2 == null) {
          num2 = 0;
        }
        value = num2;
      }
    }
    return value;
  });
};