// discord_app/modules/chat_input/native/ChatInputNativeCommands.tsx
import createNonce from "../../messages/createNonce.tsx";
import ChatInputNativeComponent from "../../../../discord_common/js/packages/rtn-codegen/js/ChatInputNativeComponent.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/chat_input/native/ChatInputNativeCommands.tsx");

export default {
  backspace(arg0) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.backspace(arg0);
    }
  },
  blur(arg0) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.blur(arg0);
    }
  },
  closeCustomKeyboard(arg0) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.closeCustomKeyboard(arg0);
    }
  },
  flushText(arg0, arg1) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.flushText(arg0, arg1);
    }
  },
  getText(arg0, set, arg2) {
    closure_1 = arg2;
    if (null == arg0) {
      return null;
    } else {
      const nonce = createNonce.createNonce();
      const result = set.set(nonce, (arg0) => {
        set.delete(nonce);
        closure_1(arg0);
      });
      const Commands = ChatInputNativeComponent.Commands;
      Commands.flushText(arg0, nonce);
    }
  },
  focus(arg0) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.focus(arg0);
    }
  },
  openCustomKeyboard(arg0) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.openCustomKeyboard(arg0);
    }
  },
  openSystemKeyboard(arg0) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.openSystemKeyboard(arg0);
    }
  },
  setText(arg0, arg1) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.setText(arg0, arg1);
    }
  },
  setSelectedRange(arg0, arg1, arg2) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      Commands.setSelectedRange(arg0, arg1, arg2);
    }
  },
  updateTextBlocks(arg0, arg1, arg2) {
    if (null != arg0) {
      const Commands = ChatInputNativeComponent.Commands;
      const _JSON = JSON;
      const json = JSON.stringify(arg1);
      Commands.updateTextBlocks(arg0, json, arg2);
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
      const Commands = ChatInputNativeComponent.Commands;
      const _JSON = JSON;
      Commands.replaceRange(arg0, _location, length, text, JSON.stringify(nodes), flag, editId);
    }
  },
};
