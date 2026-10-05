// discord_app/modules/forums/native/posts/ForumPostTimestamp.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ForumHooks from "../../ForumHooks.tsx";
import ForumChannelStore from "../../ForumChannelStore.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const useForumChannelStore = ForumChannelStore.useForumChannelStore;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ text: { lineHeight: 18, height: 18 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let format;
      let hasUnreads;
      let textStyle;
      let thread;
      const obj = react2;
      const cResult = obj.c(7);
      ({ textStyle, thread } = arg0);
      ({ hasUnreads, format } = arg0);
      const tmp4 = closure_4();
      const sortOrder = useForumChannelStore(thread.parent_id).sortOrder;
      const obj2 = ForumHooks;
      const lastActiveTimestamp = obj2.useLastActiveTimestamp(thread, sortOrder, format);
      let str = "text-muted";
      if (hasUnreads) {
        str = "text-default";
      }
      if (cResult[0] === tmp4.text) {
        let tmp6;
        if (cResult[1] === textStyle) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === str) {
          if (cResult[4] === lastActiveTimestamp) {
            let tmp7;
            if (cResult[5] === tmp6) {
              tmp7 = cResult[6];
            }
            return tmp7;
          }
        }
        const tmp9 = jsx(Text_Text.Text, {
          lineClamp: 1,
          variant: "text-xs/normal",
          color: str,
          style: tmp6,
          children: lastActiveTimestamp,
        });
        cResult[3] = str;
        cResult[4] = lastActiveTimestamp;
        cResult[5] = tmp6;
        cResult[6] = tmp9;
        tmp7 = tmp9;
      }
      const items = [textStyle, tmp4.text];
      cResult[0] = tmp4.text;
      cResult[1] = textStyle;
      cResult[2] = items;
      tmp6 = items;
    }
  : (thread) => {
      let format;
      let hasUnreads;
      let textStyle;
      thread = thread.thread;
      ({ textStyle, hasUnreads, format } = thread);
      const tmp = closure_4();
      const sortOrder = useForumChannelStore(thread.parent_id).sortOrder;
      let str = "text-muted";
      const obj = ForumHooks;
      const lastActiveTimestamp = obj.useLastActiveTimestamp(thread, sortOrder, format);
      if (hasUnreads) {
        str = "text-default";
      }
      const items = [textStyle, tmp.text];
      return jsx(Text_Text.Text, {
        lineClamp: 1,
        variant: "text-xs/normal",
        color: str,
        style: items,
        children: lastActiveTimestamp,
      });
    };
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostTimestamp.tsx");

export default tmp3;
