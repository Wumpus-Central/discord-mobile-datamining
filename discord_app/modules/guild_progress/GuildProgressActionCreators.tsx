// === Module 12210: GuildProgressActionCreators ===

// Module 12210 (GuildProgressActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_INITIALIZE", guildId: id });
  },
  markCompletedProgressSeen(id) {
    DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId: id });
  },
  dismissProgress(id) {
    DispatcherDefault.dispatch({ type: "GUILD_PROGRESS_DISMISS", guildId: id });
  }
};