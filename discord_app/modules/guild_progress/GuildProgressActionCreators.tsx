// === Module 12612: GuildProgressActionCreators ===

// Module 12612 (GuildProgressActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_INITIALIZE", guildId: id });
  },
  markCompletedProgressSeen(id) {
    importDefault = id;
    DispatcherDefault.wait(() => DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId }));
  },
  dismissProgress(id) {
    DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_DISMISS", guildId: id });
  }
};