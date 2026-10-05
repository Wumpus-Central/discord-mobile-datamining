// discord_app/modules/report_to_mod/hooks/useReportToModHooks.tsx
import react from "../../../../_runtime/00019_react.js";
import getGuildModeratorReportingEnabledDefault from "../getGuildModeratorReportingEnabled.tsx";
import ReportToModUtils from "../ReportToModUtils.tsx";
import getGuildModeratorReportChannelIdDefault from "../getGuildModeratorReportChannelId.tsx";
import MessageActionCreatorsDefault from "../../../actions/MessageActionCreators.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import MessageStore from "../../../stores/MessageStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, messageReference;

const useEffect = react.useEffect;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          if (null == closure_0) {
            return false;
          } else {
            const guild = GuildStore.getGuild(tmp);
            let tmp4 = null != guild;
            if (tmp4) {
              tmp4 =
                getGuildModeratorReportingEnabledDefault(guild) &&
                null != getGuildModeratorReportChannelIdDefault(guild);
              getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
            }
            return tmp4;
          }
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        if (null == closure_0) {
          return false;
        } else {
          const guild = GuildStore.getGuild(tmp);
          let tmp4 = null != guild;
          if (tmp4) {
            tmp4 =
              getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
            getGuildModeratorReportingEnabledDefault(guild) && null != getGuildModeratorReportChannelIdDefault(guild);
          }
          return tmp4;
        }
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let guild = null;
          if (null != closure_0) {
            guild = GuildStore.getGuild(tmp);
          }
          let tmp4 = null;
          if (null != guild) {
            let tmp7 = getGuildModeratorReportChannelIdDefault(guild);
            if (tmp7 == null) {
              tmp7 = null;
            }
            tmp4 = tmp7;
          }
          return tmp4;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [GuildStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        let guild = null;
        if (null != closure_0) {
          guild = GuildStore.getGuild(tmp);
        }
        let tmp4 = null;
        if (null != guild) {
          let tmp7 = getGuildModeratorReportChannelIdDefault(guild);
          if (tmp7 == null) {
            tmp7 = null;
          }
          tmp4 = tmp7;
        }
        return tmp4;
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (messageReference) => {
      let first;
      let tmp6;
      let tmp = messageReference;
      let obj = messageReference(576);
      const cResult = obj.c(7);
      messageReference = messageReference.messageReference;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== messageReference) {
        const fn = function s() {
          let message = null;
          if (null != messageReference) {
            message = MessageStore.getMessage(messageReference.channel_id, messageReference.message_id);
          }
          return message;
        };
        cResult[1] = messageReference;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === messageReference) {
        let tmp8;
        let tmp9;
        if (cResult[4] === stateFromStores) {
          tmp8 = cResult[5];
          tmp9 = cResult[6];
        }
        useEffect(tmp8, tmp9);
      }
      const fn2 = function h() {
        let obj3;
        const tmp = null == stateFromStores && null != messageReference;
        if (tmp) {
          const obj2 = { channelId: messageReference.channel_id, jump: obj3, limit: 10 };
          obj3 = { messageId: messageReference.message_id };
          const obj = MessageActionCreatorsDefault;
          const messages = obj.fetchMessages(obj2);
        }
      };
      const items1 = [stateFromStores, messageReference];
      cResult[3] = messageReference;
      cResult[4] = stateFromStores;
      cResult[5] = fn2;
      cResult[6] = items1;
      tmp9 = items1;
      tmp8 = fn2;
    }
  : (messageReference) => {
      messageReference = messageReference.messageReference;
      let obj = messageReference(504);
      const items = [MessageStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let message = null;
        if (null != messageReference) {
          message = MessageStore.getMessage(messageReference.channel_id, messageReference.message_id);
        }
        return message;
      });
      const items1 = [stateFromStores, messageReference];
      useEffect(() => {
        let obj3;
        const tmp = null == stateFromStores && null != messageReference;
        if (tmp) {
          const obj2 = { channelId: messageReference.channel_id, jump: obj3, limit: 10 };
          obj3 = { messageId: messageReference.message_id };
          const obj = MessageActionCreatorsDefault;
          const messages = obj.fetchMessages(obj2);
        }
      }, items1);
    };
const result = size.fileFinishedImporting("modules/report_to_mod/hooks/useReportToModHooks.tsx");

export const useIsReportToModEnabled = tmp2;
export const useReportToModChannelId = tmp3;
export const useIsModeratorReportOrPostChannel = function useIsModeratorReportOrPostChannel(isModeratorReportChannel) {
  const obj = ReportToModUtils;
  return obj.isModeratorReportOrPostChannel(isModeratorReportChannel);
};
export const useIsModeratorReportPostChannel = function useIsModeratorReportPostChannel(isModeratorReportChannel) {
  const obj = ReportToModUtils;
  return obj.isModeratorReportPostChannel(isModeratorReportChannel);
};
export const useLoadReportedMessage = tmp4;
export const loadOriginalAuthorFromSnapshot = function loadOriginalAuthorFromSnapshot(arg0) {
  let reported_user_id;
  if (arg0 != null) {
    const first = arg0.messageSnapshots[0];
    if (first != null) {
      const moderatorReport = first.moderatorReport;
      if (moderatorReport != null) {
        reported_user_id = moderatorReport.reported_user_id;
      }
    }
  }
  if (null != reported_user_id) {
    const obj = UserActionCreators;
    const user = obj.getUser(reported_user_id);
  }
};
