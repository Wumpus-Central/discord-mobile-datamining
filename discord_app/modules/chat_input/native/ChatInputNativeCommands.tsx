// === Module 11482: ? ===

// Module 11482
import set2 from "set" /* 2 */;
import __INTERNAL_VIEW_CONFIG from "__INTERNAL_VIEW_CONFIG" /* 11483 */;

let result = set2.fileFinishedImporting("modules/chat_input/native/ChatInputNativeCommands.tsx");

export default {
  backspace(arg0) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.backspace(arg0);
    }
  },
  blur(arg0) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.blur(arg0);
    }
  },
  closeCustomKeyboard(arg0) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.closeCustomKeyboard(arg0);
    }
  },
  flushText(arg0, arg1) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.flushText(arg0, arg1);
    }
  },
  getText(arg0, set) {
    const _require = set;
    dependencyMap = arg2;
    if (null == arg0) {
      return null;
    } else {
      const nonce = _require(7431).createNonce();
      const result = set.set(nonce, (arg0) => {
        set.delete(nonce);
        callback(arg0);
      });
      const Commands = _require(11483).Commands;
      Commands.flushText(arg0, nonce);
    }
  },
  focus(arg0) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.focus(arg0);
    }
  },
  openCustomKeyboard(arg0) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.openCustomKeyboard(arg0);
    }
  },
  openSystemKeyboard(arg0) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.openSystemKeyboard(arg0);
    }
  },
  setText(arg0, arg1) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.setText(arg0, arg1);
    }
  },
  setSelectedRange(arg0, arg1, arg2) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      Commands.setSelectedRange(arg0, arg1, arg2);
    }
  },
  updateTextBlocks(arg0, arg1, arg2) {
    if (null != arg0) {
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      const _JSON = JSON;
      const json = JSON.stringify(arg1);
      Commands.updateTextBlocks(arg0, json, arg2);
      const tmp2 = arg2;
    }
  },
  replaceRange(arg0, keepCursorPosition) {
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
      const Commands = __INTERNAL_VIEW_CONFIG.Commands;
      const _JSON = JSON;
      Commands.replaceRange(arg0, _location, length, text, JSON.stringify(nodes), flag, editId);
    }
  }
};