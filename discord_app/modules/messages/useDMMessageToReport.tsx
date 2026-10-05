// discord_app/modules/messages/useDMMessageToReport.tsx
import react from "../../../_runtime/00576_react.js";
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply.tsx";
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable.tsx";
import getApplicationFromBotUserIdDefault from "../applications/getApplicationFromBotUserId.tsx";
import useIsApplicationDeveloperDefault from "../applications/useIsApplicationDeveloper.tsx";
import useMessageRequestPreview from "../message_request/hooks/useMessageRequestPreview.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let id;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1, arg2) => {
      let error;
      let loaded;
      let message;
      let tmp13;
      const obj = react;
      const cResult = obj.c(6);
      const obj2 = useIsRelationshipTypeSpamReportable;
      let isRelationshipTypeSpamReportable = obj2.useIsRelationshipTypeSpamReportable(arg1);
      let tmp7 = null;
      const tmp6 = getApplicationFromBotUserIdDefault;
      if (arg2) {
        tmp7 = arg1;
      }
      const tmp6Result = tmp6(tmp7);
      let tmp10 = null;
      const tmp5Result = useIsApplicationDeveloperDefault;
      if (arg2) {
        id = undefined;
        if (tmp6Result != null) {
          id = tmp6Result.id;
        }
        if (id == null) {
          id = arg1;
        }
        tmp10 = id;
      }
      if (arg2) {
        isRelationshipTypeSpamReportable = !tmp5Result(tmp10);
      }
      const tmpResult = useLongestChannelMessageBeforeReply;
      let longestChannelMessageBeforeReply = tmpResult.useLongestChannelMessageBeforeReply(id.id, arg1);
      if (cResult[0] !== isRelationshipTypeSpamReportable) {
        const obj3 = { enabled: isRelationshipTypeSpamReportable };
        cResult[0] = isRelationshipTypeSpamReportable;
        cResult[1] = obj3;
        tmp13 = obj3;
      } else {
        tmp13 = cResult[1];
      }
      const tmpResult2 = useMessageRequestPreview;
      const messageRequestPreview = tmpResult2.useMessageRequestPreview(id, tmp13);
      ({ message, loaded, error } = messageRequestPreview);
      if (longestChannelMessageBeforeReply == null) {
        let id1;
        if (message != null) {
          const author = message.author;
          if (author != null) {
            id1 = author.id;
          }
        }
        let tmp16 = null;
        if (id1 === arg1) {
          tmp16 = message;
        }
        longestChannelMessageBeforeReply = tmp16;
      }
      if (cResult[2] === (null != longestChannelMessageBeforeReply || loaded || error)) {
        if (cResult[3] === isRelationshipTypeSpamReportable) {
          let tmp18;
          if (cResult[4] === longestChannelMessageBeforeReply) {
            tmp18 = cResult[5];
          }
          return tmp18;
        }
      }
      const obj4 = {
        message: longestChannelMessageBeforeReply,
        isReportable: isRelationshipTypeSpamReportable,
        isLoaded: null != longestChannelMessageBeforeReply || loaded || error,
      };
      cResult[2] = null != longestChannelMessageBeforeReply || loaded || error;
      cResult[3] = isRelationshipTypeSpamReportable;
      cResult[4] = longestChannelMessageBeforeReply;
      cResult[5] = obj4;
      tmp18 = obj4;
    }
  : (id, arg1, arg2) => {
      let error;
      let loaded;
      const obj = useIsRelationshipTypeSpamReportable;
      let isRelationshipTypeSpamReportable = obj.useIsRelationshipTypeSpamReportable(arg1);
      let tmp6 = null;
      const tmp5 = getApplicationFromBotUserIdDefault;
      if (arg2) {
        tmp6 = arg1;
      }
      const tmp5Result = tmp5(tmp6);
      let tmp9 = null;
      const tmp4Result = useIsApplicationDeveloperDefault;
      if (arg2) {
        id = undefined;
        if (tmp5Result != null) {
          id = tmp5Result.id;
        }
        if (id == null) {
          id = arg1;
        }
        tmp9 = id;
      }
      if (arg2) {
        isRelationshipTypeSpamReportable = !tmp4Result(tmp9);
      }
      const tmpResult = useLongestChannelMessageBeforeReply;
      const longestChannelMessageBeforeReply = tmpResult.useLongestChannelMessageBeforeReply(id.id, arg1);
      const tmpResult2 = useMessageRequestPreview;
      const messageRequestPreview = tmpResult2.useMessageRequestPreview(id, {
        enabled: isRelationshipTypeSpamReportable,
      });
      const message = messageRequestPreview.message;
      let tmp13 = longestChannelMessageBeforeReply;
      ({ loaded, error } = messageRequestPreview);
      if (longestChannelMessageBeforeReply == null) {
        let id1;
        if (message != null) {
          const author = message.author;
          if (author != null) {
            id1 = author.id;
          }
        }
        let tmp15 = null;
        if (id1 === arg1) {
          tmp15 = message;
        }
        tmp13 = tmp15;
      }
      return {
        message: tmp13,
        isReportable: isRelationshipTypeSpamReportable,
        isLoaded: null != tmp13 || loaded || error,
      };
    };
const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = tmp2;
