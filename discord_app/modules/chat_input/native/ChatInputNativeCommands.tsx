import get_ActivityIndicator from "get ActivityIndicator";

let c3;
let c4;
({ findNodeHandle: c3, NativeModules: c4 } = get_ActivityIndicator);
let result = require("__INTERNAL_VIEW_CONFIG").fileFinishedImporting("modules/chat_input/native/ChatInputNativeCommands.tsx");

export default {
  backspace(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp(11181).Commands;
        Commands.backspace(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.backspace(callback(arg0));
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp = require;
    }
  },
  blur(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp(11181).Commands;
        Commands.blur(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.blur(callback(arg0));
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp = require;
    }
  },
  closeCustomKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp(11181).Commands;
        Commands.closeCustomKeyboard(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.closeCustomKeyboard(callback(arg0));
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp = require;
    }
  },
  flushText(arg0, arg1) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp(11181).Commands;
        Commands.flushText(arg0, arg1);
      } else {
        const _Error = Error;
        const error = new Error("flushText is not supported/needed on iOS");
        throw error;
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp = require;
    }
  },
  getText(arg0, set) {
    const _require = set;
    const importDefault = arg2;
    if (null == arg0) {
      return null;
    } else if (obj3.shouldUseFabricChatInput()) {
      const nonce = tmp17(tmp18[3]).createNonce();
      const result = set.set(nonce, (arg0) => {
        set.delete(nonce);
        callback(arg0);
      });
      const Commands = tmp17(tmp18[2]).Commands;
      Commands.flushText(arg0, nonce);
      const tmp17Result = tmp17(tmp18[3]);
    } else {
      const tmp2 = callback(arg0);
      if (null == tmp2) {
        const _Error = Error;
        const error = new Error("inputRef is null");
        importDefault(tmp18[4]).captureException(error);
        const obj = importDefault(tmp18[4]);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.markTextInputChanged(tmp(arg0));
        const DCDChatInputLegacyManager2 = closure_4.DCDChatInputLegacyManager;
        const text = DCDChatInputLegacyManager2.getText(tmp2);
        text.then(arg2).catch(importDefault(tmp18[4]).captureException);
        const nextPromise = text.then(arg2);
      }
      tmp = callback;
    }
  },
  focus(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp(11181).Commands;
        Commands.focus(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.focus(callback(arg0));
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp = require;
    }
  },
  openCustomKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp(11181).Commands;
        Commands.openCustomKeyboard(arg0);
      } else {
        const _Error = Error;
        const error = new Error("openCustomKeyboard is not supported/needed on iOS");
        throw error;
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp = require;
    }
  },
  openSystemKeyboard(arg0) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp(11181).Commands;
        Commands.openSystemKeyboard(arg0);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.openSystemKeyboard(callback(arg0));
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp = require;
    }
  },
  setText(arg0, arg1) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp2(11181).Commands;
        Commands.setText(arg0, arg1);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.setText(callback(arg0), arg1);
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp2 = require;
    }
  },
  setSelectedRange(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp3(11181).Commands;
        Commands.setSelectedRange(arg0, arg1, arg2);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.setSelectedRange(callback(arg0), arg1, arg2);
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp3 = require;
    }
  },
  updateTextBlocks(arg0, arg1, arg2) {
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp9(11181).Commands;
        const _JSON = JSON;
        const json = JSON.stringify(arg1);
        Commands.updateTextBlocks(arg0, json, tmp6);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.updateTextBlocks(callback(arg0), arg1, tmp6);
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp9 = require;
    }
  },
  replaceRange(arg0, keepCursorPosition) {
    let _location;
    let length;
    let nodes;
    let text;
    ({ location: _location, length, text, nodes } = keepCursorPosition);
    if (nodes === undefined) {
      nodes = [];
    }
    let flag = keepCursorPosition.keepCursorPosition;
    if (flag === undefined) {
      flag = false;
    }
    const editId = keepCursorPosition.editId;
    if (null != arg0) {
      if (obj.shouldUseFabricChatInput()) {
        const Commands = tmp20(11181).Commands;
        const _JSON = JSON;
        Commands.replaceRange(arg0, _location, length, text, JSON.stringify(nodes), flag, editId);
      } else {
        const DCDChatInputLegacyManager = closure_4.DCDChatInputLegacyManager;
        DCDChatInputLegacyManager.replaceRange(callback(arg0), _location, length, text, nodes, flag, editId);
      }
      obj = require(11179) /* useShouldUseFabricChatInput */;
      tmp20 = require;
    }
  }
};