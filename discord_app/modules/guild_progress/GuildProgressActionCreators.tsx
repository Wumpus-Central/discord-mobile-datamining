// discord_app/modules/guild_progress/GuildProgressActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

let importDefault;

let obj = {
  createProgress(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj2);
  },
  markCompletedProgressSeen(id) {
    let guildId;
    importDefault = id;
    let obj = DispatcherDefault;
    obj.wait(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId };
      return obj.dispatch(obj2);
    });
  },
  dismissProgress(id) {
    const obj = DispatcherDefault;
    const obj2 = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj2);
  },
};
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default obj;
