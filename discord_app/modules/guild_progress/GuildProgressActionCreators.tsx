// === Module 12477: GuildProgressActionCreators ===

// Module 12477 (GuildProgressActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    const obj = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj);
  },
  markCompletedProgressSeen(id) {
    importDefault = id;
    DispatcherDefault.wait(() => {
      const obj = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId };
      return obj.dispatch(obj);
    });
  },
  dismissProgress(id) {
    const obj = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj);
  }
};