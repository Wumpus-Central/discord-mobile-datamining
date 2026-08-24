// discord_app/modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx
import closure_4 from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import closure_5 from "../../../../../../_runtime/00019_noop.js";
import { DM_WIDTH } from "../../../../../Constants.tsx";

const require = arg1;
let closure_3 = ["height"];
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default function useMessagesSpecs() {
  fontScale = fontScale(4751).useFontScale();
  top = top(1629)().top;
  const tmp2 = top(1367)("MessagesHeader");
  dependencyMap = tmp2;
  const items = [fontScale, top, tmp2];
  return React.useMemo(() => {
    let obj = fontScale(15287);
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale, dependencyMap);
    const messagesItemChannelSizes = fontScale(15295).getMessagesItemChannelSizes(fontScale);
    obj = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: closure_1_6, listItemHeight: messagesItemChannelSizes.height, listItemSizes: closure_1_4(messagesItemChannelSizes, closure_1_3), listItemSuggestedFriendHeight: null, scrollIndicatorInsetEnd: null };
    const obj2 = fontScale(15295);
    obj[5] = fontScale(15307).getMessagesItemSuggestedFriendHeight(fontScale);
    obj[6] = top(712).space.PX_4;
    return obj;
  }, items);
};