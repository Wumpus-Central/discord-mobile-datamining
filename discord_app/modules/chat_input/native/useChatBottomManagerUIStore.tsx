// === Module 9064: useChatBottomManagerUIStore ===

// Module 9064 (useChatBottomManagerUIStore)
import Storage3 from "Storage" /* 510 */;
import c from "c" /* 576 */;
import module_570 from "module_570" /* 570 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let chatInputContainerHeight = "chatInputContainerHeight";
let obj = module_570.create(() => {
  obj = { chatInputContainerHeight: new Map(), showingAutoComplete: null, showJumpToPresentButtonChannelId: null, isAtBottom: null, smallSuggestionBarHeight: null };
  const map = new Map();
  obj.showingAutoComplete = new Map();
  const map1 = new Map();
  obj.showJumpToPresentButtonChannelId = new Map();
  const map2 = new Map();
  obj.isAtBottom = new Map();
  const map3 = new Map();
  obj.smallSuggestionBarHeight = new Map();
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  obj = require("c");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function o(chatInputContainerHeight) {
      chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
      value = chatInputContainerHeight.get(closure_0);
      if (value == null) {
        const Storage = Storage3.Storage;
        let num2 = Storage.get(chatInputContainerHeight, 0);
        if (num2 == null) {
          num2 = 0;
        }
        value = num2;
      }
      return value;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return obj(tmp2);
}) : ((arg0) => {
  closure_0 = arg0;
  return obj((chatInputContainerHeight) => {
    chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
    value = chatInputContainerHeight.get(closure_0);
    if (value == null) {
      const Storage = Storage3.Storage;
      let num2 = Storage.get(chatInputContainerHeight, 0);
      if (num2 == null) {
        num2 = 0;
      }
      value = num2;
    }
    return value;
  });
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  obj = c;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function o(smallSuggestionBarHeight) {
      smallSuggestionBarHeight = smallSuggestionBarHeight.smallSuggestionBarHeight;
      let num = smallSuggestionBarHeight.get(closure_0);
      if (num == null) {
        num = 0;
      }
      return num;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return obj(tmp2);
}) : ((arg0) => {
  closure_0 = arg0;
  return obj((smallSuggestionBarHeight) => {
    smallSuggestionBarHeight = smallSuggestionBarHeight.smallSuggestionBarHeight;
    let num = smallSuggestionBarHeight.get(closure_0);
    if (num == null) {
      num = 0;
    }
    return num;
  });
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  obj = c;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function o(showingAutoComplete) {
      showingAutoComplete = showingAutoComplete.showingAutoComplete;
      let flag = showingAutoComplete.get(closure_0);
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return obj(tmp2);
}) : ((arg0) => {
  closure_0 = arg0;
  return obj((showingAutoComplete) => {
    showingAutoComplete = showingAutoComplete.showingAutoComplete;
    let flag = showingAutoComplete.get(closure_0);
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  closure_0 = arg0;
  obj = c;
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function o(isAtBottom) {
      isAtBottom = isAtBottom.isAtBottom;
      let flag = isAtBottom.get(closure_0);
      if (flag == null) {
        flag = false;
      }
      return flag;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return obj(tmp2);
}) : ((arg0) => {
  closure_0 = arg0;
  return obj((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    let flag = isAtBottom.get(closure_0);
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
});
let result = size.fileFinishedImporting("modules/chat_input/native/useChatBottomManagerUIStore.tsx");

export default obj;
export const updateChatInputContainerHeight = function updateChatInputContainerHeight(num, arg1) {
  closure_0 = num;
  closure_1 = arg1;
  if (typeof num === "number") {
    const Storage = Storage3.Storage;
    let result = Storage.set(chatInputContainerHeight, arg1);
  }
  obj.setState((chatInputContainerHeight) => {
    chatInputContainerHeight = new Map(chatInputContainerHeight.chatInputContainerHeight);
    const result = chatInputContainerHeight.set(closure_0, closure_1);
    return { chatInputContainerHeight };
  });
};
export const updateShowingAutoComplete = function updateShowingAutoComplete(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  obj.setState((showingAutoComplete) => {
    showingAutoComplete = new Map(showingAutoComplete.showingAutoComplete);
    const result = showingAutoComplete.set(closure_0, closure_1);
    return { showingAutoComplete };
  });
};
export const updateShouldShowJumpToPresentButton = function updateShouldShowJumpToPresentButton(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
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
export const useChatInputContainerHeight = tmp3;
export const updateSmallSuggestionBarHeight = function updateSmallSuggestionBarHeight(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  obj.setState((smallSuggestionBarHeight) => {
    smallSuggestionBarHeight = smallSuggestionBarHeight.smallSuggestionBarHeight;
    if (smallSuggestionBarHeight.get(closure_0) === closure_1) {
      return smallSuggestionBarHeight;
    } else {
      const _Map = Map;
      const map = new Map(smallSuggestionBarHeight.smallSuggestionBarHeight);
      const result = map.set(closure_0, tmp2);
      obj = { smallSuggestionBarHeight: map };
      return obj;
    }
  });
};
export const useSmallSuggestionBarHeight = tmp4;
export const useChatShowingAutoComplete = tmp5;
export const updateIsAtBottom = function updateIsAtBottom(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  obj.setState((isAtBottom) => {
    isAtBottom = isAtBottom.isAtBottom;
    if (isAtBottom.get(closure_0) === closure_1) {
      return isAtBottom;
    } else {
      const _Map = Map;
      const map = new Map(isAtBottom.isAtBottom);
      const result = map.set(closure_0, tmp2);
      obj = { isAtBottom: map };
      return obj;
    }
  });
};
export const useChatIsAtBottom = tmp6;
export const useBestActiveChatInputContainerHeight = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  obj = c;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(chatInputContainerHeight) {
      const highestActiveScreenIndex = require("ChatInputUtils").getHighestActiveScreenIndex();
      if (null == highestActiveScreenIndex) {
        const Storage2 = require("Storage").Storage;
        let num4 = Storage2.get(closure_1_2, 0);
        if (num4 == null) {
          num4 = 0;
        }
        value = num4;
      } else {
        chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
        value = chatInputContainerHeight.get(highestActiveScreenIndex);
        if (value == null) {
          const Storage = require("Storage").Storage;
          let num2 = Storage.get(closure_1_2, 0);
          if (num2 == null) {
            num2 = 0;
          }
          value = num2;
        }
      }
      return value;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return obj(first);
}) : (() => obj((chatInputContainerHeight) => {
  const highestActiveScreenIndex = require("ChatInputUtils").getHighestActiveScreenIndex();
  if (null == highestActiveScreenIndex) {
    const Storage2 = require("Storage").Storage;
    let num4 = Storage2.get(closure_1_2, 0);
    if (num4 == null) {
      num4 = 0;
    }
    value = num4;
  } else {
    chatInputContainerHeight = chatInputContainerHeight.chatInputContainerHeight;
    value = chatInputContainerHeight.get(highestActiveScreenIndex);
    if (value == null) {
      const Storage = require("Storage").Storage;
      let num2 = Storage.get(closure_1_2, 0);
      if (num2 == null) {
        num2 = 0;
      }
      value = num2;
    }
  }
  return value;
}));