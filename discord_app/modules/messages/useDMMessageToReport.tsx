// discord_app/modules/messages/useDMMessageToReport.tsx
import c from "../../../_runtime/00576_c.js";
import useLongestChannelMessageBeforeReply from "useLongestChannelMessageBeforeReply.tsx";
import useIsRelationshipTypeSpamReportable from "useIsRelationshipTypeSpamReportable.tsx";
import getApplicationFromBotUserIdDefault from "../applications/getApplicationFromBotUserId.tsx";
import useIsApplicationDeveloperDefault from "../applications/useIsApplicationDeveloper.tsx";
import useMessageRequestPreview from "../message_request/hooks/useMessageRequestPreview.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/messages/useDMMessageToReport.tsx");

export const useDMMessageToReport = ReactCompilerGating.isReactCompilerEnabled()
  ? (id, arg1, arg2) => {
      const cResult = c.c(6);
      let isRelationshipTypeSpamReportable =
        useIsRelationshipTypeSpamReportable.useIsRelationshipTypeSpamReportable(arg1);
      let tmp7 = null;
      if (arg2) {
        tmp7 = arg1;
      }
      const tmp6Result = getApplicationFromBotUserIdDefault(tmp7);
      let tmp10 = null;
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
      tmp5Result = useIsApplicationDeveloperDefault;
      let longestChannelMessageBeforeReply = useLongestChannelMessageBeforeReply.useLongestChannelMessageBeforeReply(
        id.id,
        arg1,
      );
      if (cResult[0] !== isRelationshipTypeSpamReportable) {
        const obj3 = { enabled: isRelationshipTypeSpamReportable };
        cResult[0] = isRelationshipTypeSpamReportable;
        cResult[1] = obj3;
        let tmp13 = obj3;
      } else {
        tmp13 = cResult[1];
      }
      const tmpResult = useLongestChannelMessageBeforeReply;
      const messageRequestPreview = useMessageRequestPreview.useMessageRequestPreview(id, tmp13);
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
          if (cResult[4] === longestChannelMessageBeforeReply) {
            let tmp18 = cResult[5];
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
      const tmpResult2 = useMessageRequestPreview;
    }
  : (id, arg1, arg2) => {
      let isRelationshipTypeSpamReportable =
        useIsRelationshipTypeSpamReportable.useIsRelationshipTypeSpamReportable(arg1);
      let tmp6 = null;
      if (arg2) {
        tmp6 = arg1;
      }
      const tmp5Result = getApplicationFromBotUserIdDefault(tmp6);
      let tmp9 = null;
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
      tmp4Result = useIsApplicationDeveloperDefault;
      const longestChannelMessageBeforeReply = useLongestChannelMessageBeforeReply.useLongestChannelMessageBeforeReply(
        id.id,
        arg1,
      );
      const tmpResult = useLongestChannelMessageBeforeReply;
      const messageRequestPreview = useMessageRequestPreview.useMessageRequestPreview(id, {
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
