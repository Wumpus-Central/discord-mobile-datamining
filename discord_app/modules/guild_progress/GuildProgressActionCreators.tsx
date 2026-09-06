// discord_app/modules/guild_progress/GuildProgressActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

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
  },
};
