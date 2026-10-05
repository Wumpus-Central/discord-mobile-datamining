// discord_app/modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import SpamMessageListDefault from "../../../../message_request/native/spam/SpamMessageList.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let navigation;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (navigation) => {
      let tmp3;
      let tmp4;
      let obj = react2;
      const cResult = obj.c(4);
      navigation = navigation.navigation;
      if (cResult[0] !== navigation) {
        const fn = function t(channelId) {
          const obj = { channelId };
          return navigation.push("preview", obj);
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        tmp3 = fn;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] !== tmp3) {
        const tmp7 = jsx(SpamMessageListDefault, { goToMessageRequestPreview: tmp3 });
        cResult[2] = tmp3;
        cResult[3] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[3];
      }
      return tmp4;
    }
  : (navigation) => {
      navigation = navigation.navigation;
      const items = [navigation];
      const goToMessageRequestPreview = react.useCallback((channelId) => {
        const obj = { channelId };
        return navigation.push("preview", obj);
      }, items);
      return jsx(SpamMessageListDefault, { goToMessageRequestPreview });
    };
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/message_requests/screens/MessageRequestsSpamScreen.tsx",
);

export default tmp2;
