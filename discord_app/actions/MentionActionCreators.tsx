// discord_app/actions/MentionActionCreators.tsx
import DispatcherDefault from "../Dispatcher.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

({ Endpoints: c3, MAX_MENTIONS_PER_FETCH: closure_4 } = Constants);
const result = size.fileFinishedImporting("actions/MentionActionCreators.tsx");

export default {
  setGuildFilter(arg0) {
    ({ guildFilter, roleFilter, everyoneFilter } = arg0);
    DispatcherDefault.dispatch({ type: "SET_RECENT_MENTIONS_FILTER", guildFilter, roleFilter, everyoneFilter });
  },
  clearMentions() {
    DispatcherDefault.dispatch({ type: "CLEAR_MENTIONS" });
  },
  truncateMentions(size) {
    const obj = { type: "TRUNCATE_MENTIONS", size };
    obj.dispatch(obj);
  },
  fetchRecentMentions(feature) {
    const before = feature.before;
    let limit = feature.limit;
    if (limit === undefined) {
      limit = closure_4;
    }
    let guildId = feature.guildId;
    if (guildId === undefined) {
      guildId = null;
    }
    let flag = feature.roles;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = feature.everyone;
    if (flag2 === undefined) {
      flag2 = true;
    }
    DispatcherDefault.dispatch({ type: "LOAD_RECENT_MENTIONS", guildId });
    const HTTP = before(1272).HTTP;
    const request = {
      url: constants.MENTIONS,
      query: { before, limit, guild_id: guildId, roles: flag, everyone: flag2, feature: feature.feature },
      retries: 2,
      oldFormErrors: true,
      rejectWithError: true,
    };
    value = HTTP.get(request);
    return value.then(
      (body) => {
        body = body.body;
        const obj = {
          type: "LOAD_RECENT_MENTIONS_SUCCESS",
          messages: body,
          isAfter: null != before,
          hasMoreAfter: body.length >= React4,
        };
        obj.dispatch(obj);
      },
      () => {
        DispatcherDefault.dispatch({ type: "LOAD_RECENT_MENTIONS_FAILURE" });
      },
    );
  },
  deleteRecentMention(id) {
    const HTTP = HTTPUtils.HTTP;
    let obj = { url: React3.MENTIONS_MESSAGE_ID(id), retries: 2, oldFormErrors: true, rejectWithError: true };
    HTTP.del(obj);
    obj = { type: "RECENT_MENTION_DELETE", id };
    DispatcherDefault.dispatch(obj);
  },
  setRecentMentionsStale() {
    DispatcherDefault.dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
  },
};
