// === Module 16371: useMessagesSpecs ===

// Module 16371 (useMessagesSpecs)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1631 */;
import useFontScale from "useFontScale" /* 5383 */;
import MessagesHeader from "MessagesHeader" /* 16372 */;
import MessagesItemChannel from "MessagesItemChannel" /* 16375 */;
import MessagesItemSuggestedFriend from "MessagesItemSuggestedFriend" /* 16387 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["height"];
let closure_4 = ["height"];
const DM_WIDTH = fn(1085).DM_WIDTH;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/useMessagesSpecs.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useMessagesSpecs() {
  const cResult = c.c(13);
  const fontScale = useFontScale.useFontScale();
  const messagesHeaderHeight = MessagesHeader.getMessagesHeaderHeight(fontScale);
  if (cResult[0] !== fontScale) {
    const messagesItemChannelSizes = MessagesItemChannel.getMessagesItemChannelSizes(fontScale);
    cResult[0] = fontScale;
    cResult[1] = messagesItemChannelSizes;
    let tmp7 = messagesItemChannelSizes;
    const tmpResult = MessagesItemChannel;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== tmp7) {
    const height = tmp7.height;
    const tmp13 = _objectWithoutProperties(tmp7, closure_3);
    cResult[2] = tmp7;
    cResult[3] = height;
    cResult[4] = tmp13;
    let tmp10 = tmp13;
    let tmp9 = height;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const sum = useSafeAreaInsetsDefault().top + messagesHeaderHeight;
  if (cResult[5] !== fontScale) {
    const messagesItemSuggestedFriendHeight = MessagesItemSuggestedFriend.getMessagesItemSuggestedFriendHeight(fontScale);
    cResult[5] = fontScale;
    cResult[6] = messagesItemSuggestedFriendHeight;
    let tmp15 = messagesItemSuggestedFriendHeight;
    const tmpResult2 = MessagesItemSuggestedFriend;
  } else {
    tmp15 = cResult[6];
  }
  if (cResult[7] === messagesHeaderHeight) {
    if (cResult[8] === tmp9) {
      if (cResult[9] === tmp10) {
        if (cResult[10] === sum) {
          if (cResult[11] === tmp15) {
            let tmp17 = cResult[12];
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
}) : (function useMessagesSpecs() {
  fontScale = fontScale(5383).useFontScale();
  top = top(1631)().top;
  const items = [fontScale, top];
  return noop.useMemo(() => {
    const messagesHeaderHeight = MessagesHeader.getMessagesHeaderHeight(fontScale);
    const messagesItemChannelSizes = MessagesItemChannel.getMessagesItemChannelSizes(fontScale);
    const obj3 = { headerSize: messagesHeaderHeight, listTop: top + messagesHeaderHeight, listLeft: DM_WIDTH, listItemHeight: messagesItemChannelSizes.height, listItemSizes: _objectWithoutProperties(messagesItemChannelSizes, closure_4), listItemSuggestedFriendHeight: null, scrollIndicatorInsetEnd: null };
    obj3.listItemSuggestedFriendHeight = MessagesItemSuggestedFriend.getMessagesItemSuggestedFriendHeight(fontScale);
    obj3.scrollIndicatorInsetEnd = nativeDefault.space.PX_4;
    return obj3;
  }, items);
});