// === Module 11646: dispatcher ===

// Module 11646 (dispatcher)
import obj132 from "obj132" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = obj132.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    const obj = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj);
  },
  markCompletedProgressSeen(id) {
    importDefault = id;
    dispatcherDefault.wait(() => {
      id(dependencyMap[0]);
      const obj = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId: id };
      return obj.dispatch(obj);
    });
  },
  dismissProgress(id) {
    const obj = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj);
  }
};