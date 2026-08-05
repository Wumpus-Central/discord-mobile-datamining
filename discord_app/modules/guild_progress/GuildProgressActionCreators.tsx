// discord_app/modules/guild_progress/GuildProgressActionCreators.tsx
import { dispatcher } from "../../Dispatcher.tsx";
const result = require("set").fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    let obj = dispatcher;
    obj = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj);
  },
  markCompletedProgressSeen(id) {
    const importDefault = id;
    dispatcher.wait(() => {
      let obj = id(outer1_1[0]);
      obj = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId: id };
      return obj.dispatch(obj);
    });
  },
  dismissProgress(id) {
    let obj = dispatcher;
    obj = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj);
  }
};