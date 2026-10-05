// === Module 16350: MentionActionCreators ===

// Module 16350 (MentionActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let body;

let c3;
let closure_4;
({ Endpoints: c3, MAX_MENTIONS_PER_FETCH: closure_4 } = Constants);
let obj = {
  setGuildFilter(arg0) {
    let everyoneFilter;
    let guildFilter;
    let roleFilter;
    ({ guildFilter, roleFilter, everyoneFilter } = arg0);
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SET_RECENT_MENTIONS_FILTER", guildFilter, roleFilter, everyoneFilter });
  },
  clearMentions() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "CLEAR_MENTIONS" });
  },
  truncateMentions(size) {
    const obj = DispatcherDefault;
    const obj2 = { type: "TRUNCATE_MENTIONS", size };
    obj.dispatch(obj2);
  },
  fetchRecentMentions(before) {
    before = before.before;
    let limit = before.limit;
    if (limit === undefined) {
      limit = closure_4;
    }
    let guildId = before.guildId;
    if (guildId === undefined) {
      guildId = null;
    }
    let flag = before.roles;
    if (flag === undefined) {
      flag = true;
    }
    let flag2 = before.everyone;
    if (flag2 === undefined) {
      flag2 = true;
    }
    const feature = before.feature;
    let obj = DispatcherDefault;
    obj.dispatch({ type: "LOAD_RECENT_MENTIONS", guildId });
    const HTTP = before(1282).HTTP;
    const request = { url: constants.MENTIONS, query: { before, limit, guild_id: guildId, roles: flag, everyone: flag2, feature }, retries: 2, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(request);
    return value.then((body) => {
      body = body.body;
      const obj = DispatcherDefault;
      const obj2 = { type: "LOAD_RECENT_MENTIONS_SUCCESS", messages: body, isAfter: null != before, hasMoreAfter: body.length >= React3 };
      obj.dispatch(obj2);
    }, () => {
      const obj = DispatcherDefault;
      obj.dispatch({ type: "LOAD_RECENT_MENTIONS_FAILURE" });
    });
  },
  deleteRecentMention(id) {
    const HTTP = HTTPUtils.HTTP;
    const obj = { url: _false.MENTIONS_MESSAGE_ID(id), retries: 2, oldFormErrors: true, rejectWithError: true };
    HTTP.del(obj);
    const obj2 = DispatcherDefault;
    const obj3 = { type: "RECENT_MENTION_DELETE", id };
    obj2.dispatch(obj3);
  },
  setRecentMentionsStale() {
    const obj = DispatcherDefault;
    obj.dispatch({ type: "SET_RECENT_MENTIONS_STALE" });
  }
};
const result = size.fileFinishedImporting("actions/MentionActionCreators.tsx");

export default obj;