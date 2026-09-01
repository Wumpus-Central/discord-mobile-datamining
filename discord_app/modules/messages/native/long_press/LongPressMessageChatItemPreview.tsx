// discord_app/modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx
import set from "../../../../../_runtime/00002_set.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import setOptionsDefault from "../renderer/RowGenerator.tsx";
import DCDChatItemDefault from "../../../../components_native/chat/ChatItem.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const jsx = jsxProd.jsx;
let obj = { chatItem: null };
obj = { maxHeight: 2 * ThemesDefault.space.PX_80 };
obj[0] = obj;
let closure_3 = createCacheKey.createStyles(obj);
let closure_4 = new setOptionsDefault();
const tmp2 = new setOptionsDefault();
const result = set.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = {
    rowGenerator: closure_4,
    message: message.message,
    maxHeight: callback().chatItem.maxHeight,
    backgroundColor: null,
    pointerEvents: "none",
  };
  const tmp = callback();
  obj[3] = ThemesDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(DCDChatItemDefault, {
    rowGenerator: closure_4,
    message: message.message,
    maxHeight: callback().chatItem.maxHeight,
    backgroundColor: null,
    pointerEvents: "none",
  });
}
