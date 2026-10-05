// discord_app/modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import RowGeneratorDefault from "../renderer/RowGenerator.tsx";
import ChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let message;

let obj2;
const jsx = Fragment.jsx;
let obj = { chatItem: obj2 };
obj2 = { maxHeight: 2 * nativeDefault.space.PX_80 };
let closure_4 = createStyles.createStyles(obj);
const tmp2 = new RowGeneratorDefault();
const rowGenerator = tmp2;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (message) => {
      const obj = react;
      const cResult = obj.c(3);
      message = message.message;
      const tmp3 = closure_4();
      if (cResult[0] === message) {
        let tmp4;
        if (cResult[1] === tmp3.chatItem.maxHeight) {
          tmp4 = cResult[2];
        }
        return tmp4;
      }
      ChatItemDefault;
      const tmp6 = (
        <tmp5
          rowGenerator={rowGenerator}
          message={message}
          maxHeight={tmp3.chatItem.maxHeight}
          backgroundColor={nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT}
          pointerEvents="none"
        />
      );
      cResult[0] = message;
      cResult[1] = tmp3.chatItem.maxHeight;
      cResult[2] = tmp6;
      tmp4 = tmp6;
    }
  : (message) => {
      message = message.message;
      ChatItemDefault;
      return (
        <tmp2
          rowGenerator={rowGenerator}
          message={message}
          maxHeight={closure_4().chatItem.maxHeight}
          backgroundColor={nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT}
          pointerEvents="none"
        />
      );
    };
const result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default tmp3;
