// discord_app/modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useReplyActions from "useReplyActions.tsx";
import ICYMICustomStatusRowDefault from "ICYMICustomStatusRow.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let content;
      let openEmojiPicker;
      let openReplyActionSheet;
      let renderForScreenshot;
      let tmp4;
      let visible;
      const obj = react2;
      const cResult = obj.c(12);
      ({ content, renderForScreenshot, visible } = arg0);
      if (cResult[0] !== content) {
        const obj2 = { content };
        cResult[0] = content;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = useReplyActions;
      const replyActions = tmpResult.useReplyActions(tmp4);
      ({ openEmojiPicker, openReplyActionSheet } = replyActions);
      if (cResult[2] === openEmojiPicker) {
        let tmp6;
        if (cResult[3] === openReplyActionSheet) {
          tmp6 = cResult[4];
        }
        if (cResult[5] === content.author_id) {
          if (cResult[6] === content.extra) {
            if (cResult[7] === content.id) {
              if (cResult[8] === renderForScreenshot) {
                if (cResult[9] === tmp6) {
                  let tmp7;
                  if (cResult[10] === visible) {
                    tmp7 = cResult[11];
                  }
                  return tmp7;
                }
              }
            }
          }
        }
        ({ id: obj5.id, author_id: obj5.userId, extra: obj5.customStatusExtra } = content);
        const tmp10 = jsx(ICYMICustomStatusRowDefault, {
          id: null,
          userId: null,
          customStatusExtra: null,
          renderForScreenshot,
          visible,
          variant: tmp6,
        });
        cResult[5] = content.author_id;
        cResult[6] = content.extra;
        cResult[7] = content.id;
        cResult[8] = renderForScreenshot;
        cResult[9] = tmp6;
        cResult[10] = visible;
        cResult[11] = tmp10;
        tmp7 = tmp10;
      }
      const obj4 = {
        kind: "otherUserStatus",
        handlePressPrimary: openReplyActionSheet,
        handlePressSecondary: openEmojiPicker,
      };
      cResult[2] = openEmojiPicker;
      cResult[3] = openReplyActionSheet;
      cResult[4] = obj4;
      tmp6 = obj4;
    }
  : (content) => {
      let openEmojiPicker;
      let openReplyActionSheet;
      let renderForScreenshot;
      let visible;
      content = content.content;
      ({ renderForScreenshot, visible } = content);
      const obj = useReplyActions;
      const replyActions = obj.useReplyActions({ content });
      ({ openEmojiPicker, openReplyActionSheet } = replyActions);
      return jsx(ICYMICustomStatusRowDefault, {
        id: content.id,
        userId: content.author_id,
        customStatusExtra: content.extra,
        renderForScreenshot,
        visible,
        variant: {
          kind: "otherUserStatus",
          handlePressPrimary: openReplyActionSheet,
          handlePressSecondary: openEmojiPicker,
        },
      });
    };
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/CustomStatusEntryRow.tsx");

export default tmp3;
