// discord_app/modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RowGeneratorDefault from "../renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
let obj = { chatItem: { maxHeight: 2 * nativeDefault.space.PX_80 } };
let closure_4 = createStyles.createStyles(obj);
let obj2 = { maxHeight: 2 * nativeDefault.space.PX_80 };
const rowGenerator = new RowGeneratorDefault();
const tmp2 = new RowGeneratorDefault();
const result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function LongPressMessageChatItemPreview(message) {
      const cResult = c.c(3);
      message = message.message;
      const tmp3 = closure_4();
      if (cResult[0] === message) {
        if (cResult[1] === tmp3.chatItem.maxHeight) {
          let tmp4 = cResult[2];
        }
        return tmp4;
      }
      const obj2 = {
        rowGenerator,
        message,
        maxHeight: tmp3.chatItem.maxHeight,
        backgroundColor: null,
        pointerEvents: "none",
      };
      obj2.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
      const tmp6 = jsx(ChatItemDefault, {
        rowGenerator,
        message,
        maxHeight: tmp3.chatItem.maxHeight,
        backgroundColor: null,
        pointerEvents: "none",
      });
      cResult[0] = message;
      cResult[1] = tmp3.chatItem.maxHeight;
      cResult[2] = tmp6;
      tmp4 = tmp6;
    }
  : function LongPressMessageChatItemPreview(message) {
      const obj = {
        rowGenerator,
        message: message.message,
        maxHeight: closure_4().chatItem.maxHeight,
        backgroundColor: null,
        pointerEvents: "none",
      };
      const tmp = closure_4();
      obj.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
      return jsx(ChatItemDefault, {
        rowGenerator,
        message: message.message,
        maxHeight: closure_4().chatItem.maxHeight,
        backgroundColor: null,
        pointerEvents: "none",
      });
    };
