// === Module 11646: dispatcher ===

// Module 11646 (dispatcher)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj);
  },
  markCompletedProgressSeen(id) {
    importDefault = id;
    dispatcherDefault.wait(() => {
      let obj = id(closure_1_1[0]);
      obj = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId: id };
      return obj.dispatch(obj);
    });
  },
  dismissProgress(id) {
    let obj = dispatcherDefault;
    obj = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj);
  }
};