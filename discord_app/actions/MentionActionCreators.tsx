import ME from "ME";

let c3;
let c4;
({ Endpoints: c3, MAX_MENTIONS_PER_FETCH: c4 } = ME);
const result = require("sendRequest").fileFinishedImporting("actions/MentionActionCreators.tsx");

export default {
  setGuildFilter(arg0) {
    let everyoneFilter;
    let guildFilter;
    let roleFilter;
    ({ guildFilter, roleFilter, everyoneFilter } = arg0);
    importDefault(709).dispatch({ type: "SET_RECENT_MENTIONS_FILTER", guildFilter, roleFilter, everyoneFilter });
  },
  clearMentions() {
    importDefault(709).dispatch({ type: "CLEAR_MENTIONS" });
  },
  truncateMentions(size) {
    let obj = importDefault(709);
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
    let obj = importDefault(709);
    obj.dispatch({ type: "LOAD_RECENT_MENTIONS", guildId });
    const HTTP = before(530).HTTP;
    obj = { url: closure_3.MENTIONS, query: { before, limit, guild_id: guildId, roles: flag, everyone: flag2, feature: feature.feature }, retries: 2, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    return value.then((body) => {
      body = body.body;
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "LOAD_RECENT_MENTIONS_SUCCESS", messages: body, isAfter: null != before, hasMoreAfter: body.length >= outer1_4 };
      obj.dispatch(obj);
    }, () => {
      callback(table[1]).dispatch({ type: "LOAD_RECENT_MENTIONS_FAILURE" });
    });
  },
  deleteRecentMention(id) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    let obj = { url: closure_3.MENTIONS_MESSAGE_ID(id), retries: 2, oldFormErrors: true, rejectWithError: true };
    HTTP.del(obj);
    obj = { type: "RECENT_MENTION_DELETE", id };
    importDefault(709).dispatch(obj);
  },
  setRecentMentionsStale() {
    importDefault(709).dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
  }
};