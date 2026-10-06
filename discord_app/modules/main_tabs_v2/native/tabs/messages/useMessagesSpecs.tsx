// === Module 15992: useMessagesSpecs ===

// Module 15992 (useMessagesSpecs)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import useFontScale from "useFontScale" /* 5609 */;
import MessagesHeader from "MessagesHeader" /* 15993 */;
import MessagesItemChannel from "MessagesItemChannel" /* 15996 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 16008 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = ["height"];
let closure_4 = ["height"];
const DM_WIDTH = Constants.DM_WIDTH;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp10;
  let tmp15;
  let tmp7;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(13);
  const obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  const top = useSafeAreaInsetsDefault().top;
  const obj3 = MessagesHeader;
  const messagesHeaderHeight = obj3.getMessagesHeaderHeight(fontScale);
  if (cResult[0] !== fontScale) {
    const tmpResult = MessagesItemChannel;
    const messagesItemChannelSizes = tmpResult.getMessagesItemChannelSizes(fontScale);
    cResult[0] = fontScale;
    cResult[1] = messagesItemChannelSizes;
    tmp7 = messagesItemChannelSizes;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp7) {
    const height = tmp7.height;
    const tmp13 = _objectWithoutProperties(tmp7, closure_3);
    cResult[2] = tmp7;
    cResult[3] = height;
    cResult[4] = tmp13;
    tmp10 = tmp13;
    tmp9 = height;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const sum = top + messagesHeaderHeight;
  if (cResult[5] !== fontScale) {
    const tmpResult2 = MessagesItemSuggestedFriend;
    const messagesItemSuggestedFriendHeight = tmpResult2.getMessagesItemSuggestedFriendHeight(fontScale);
    cResult[5] = fontScale;
    cResult[6] = messagesItemSuggestedFriendHeight;
    tmp15 = messagesItemSuggestedFriendHeight;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === messagesHeaderHeight) {
    if (cResult[8] === tmp9) {
      if (cResult[9] === tmp10) {
        if (cResult[10] === sum) {
          let tmp17;
          if (cResult[11] === tmp15) {
            tmp17 = cResult[12];
          }
          return tmp17;
        }
      }
    }
  }
  const obj4 = { headerSize: messagesHeaderHeight, listTop: sum, listLeft: DM_WIDTH, listItemHeight: tmp9, listItemSizes: tmp10, listItemSuggestedFriendHeight: tmp15, scrollIndicatorInsetEnd: nativeDefault.space.PX_4 };
  cResult[7] = messagesHeaderHeight;
  cResult[8] = tmp9;
  cResult[9] = tmp10;
  cResult[10] = sum;
  cResult[11] = tmp15;
  cResult[12] = obj4;
  tmp17 = obj4;
}) : (() => {
  let fontScale;
  let top;
  let obj = fontScale(5609);
  fontScale = obj.useFontScale();
  top = top(1618)().top;
  const items = [fontScale, top];
  return react.useMemo(() => {
    let obj4;
    const obj = MessagesHeader;
    const messagesHeaderHeight = obj.getMessagesHeaderHeight(fontScale);
    const obj2 = MessagesItemChannel;
    const messagesItemChannelSizes = obj2.getMessagesItemChannelSizes(fontScale);
    const obj3 = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: DM_WIDTH, listItemHeight: messagesItemChannelSizes.height, listItemSizes: _objectWithoutProperties(messagesItemChannelSizes, closure_4), listItemSuggestedFriendHeight: obj4.getMessagesItemSuggestedFriendHeight(fontScale), scrollIndicatorInsetEnd: nativeDefault.space.PX_4 };
    obj4 = MessagesItemSuggestedFriend;
    return obj3;
  }, items);
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default tmp2;