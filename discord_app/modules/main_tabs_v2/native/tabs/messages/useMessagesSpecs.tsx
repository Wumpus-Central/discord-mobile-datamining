// === Module 16020: useMessagesSpecs ===

// Module 16020 (useMessagesSpecs)
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "noop" /* 19 */;
import { DM_WIDTH } from "ME" /* 1074 */;

const require = arg1;
let closure_3 = ["height"];
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  fontScale = fontScale(4982).useFontScale();
  top = top(1611)().top;
  const items = [fontScale, top];
  return React.useMemo(() => {
    let obj = fontScale(closure_1_2[5]);
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale);
    const messagesItemChannelSizes = fontScale(closure_1_2[6]).getMessagesItemChannelSizes(fontScale);
    obj = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: closure_1_6, listItemHeight: messagesItemChannelSizes.height, listItemSizes: closure_1_4(messagesItemChannelSizes, closure_1_3), listItemSuggestedFriendHeight: null, scrollIndicatorInsetEnd: null };
    const obj2 = fontScale(closure_1_2[6]);
    obj[5] = fontScale(closure_1_2[7]).getMessagesItemSuggestedFriendHeight(fontScale);
    obj[6] = top(closure_1_2[8]).space.PX_4;
    return obj;
  }, items);
};