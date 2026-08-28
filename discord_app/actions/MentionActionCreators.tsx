// === Module 15927: ? ===

// Module 15927
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 530 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ME from "ME" /* 676 */;

({ Endpoints: c3, MAX_MENTIONS_PER_FETCH: c4 } = ME);
const result = set.fileFinishedImporting("actions/MentionActionCreators.tsx");

export default {
  setGuildFilter(arg0) {
    ({ guildFilter, roleFilter, everyoneFilter } = arg0);
    dispatcherDefault.dispatch({ type: "SET_RECENT_MENTIONS_FILTER", guildFilter, roleFilter, everyoneFilter });
  },
  clearMentions() {
    dispatcherDefault.dispatch({ type: "CLEAR_MENTIONS" });
  },
  truncateMentions(size) {
    let obj = dispatcherDefault;
    obj = { type: "TRUNCATE_MENTIONS", size };
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
    let obj = dispatcherDefault;
    obj.dispatch({ type: "LOAD_RECENT_MENTIONS", guildId });
    const HTTP = before(530).HTTP;
    obj = { url: closure_3.MENTIONS, query: { before, limit, guild_id: guildId, roles: flag, everyone: flag2, feature: feature.feature }, retries: 2, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    return value.then((body) => {
      body = body.body;
      let obj = closure_1_1(closure_1_2[1]);
      obj = { type: "LOAD_RECENT_MENTIONS_SUCCESS", messages: body, isAfter: null != before, hasMoreAfter: body.length >= closure_1_4 };
      obj.dispatch(obj);
    }, () => {
      callback(table[1]).dispatch({ type: "LOAD_RECENT_MENTIONS_FAILURE" });
    });
  },
  deleteRecentMention(id) {
    const HTTP = sendRequest.HTTP;
    let obj = { url: closure_3.MENTIONS_MESSAGE_ID(id), retries: 2, oldFormErrors: true, rejectWithError: true };
    HTTP.del(obj);
    obj = { type: "RECENT_MENTION_DELETE", id };
    dispatcherDefault.dispatch(obj);
  },
  setRecentMentionsStale() {
    dispatcherDefault.dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
  }
};