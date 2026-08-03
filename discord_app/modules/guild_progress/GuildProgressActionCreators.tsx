const result = require("set").fileFinishedImporting("modules/guild_progress/GuildProgressActionCreators.tsx");

export default {
  createProgress(id) {
    let obj = importDefault(709);
    obj = { type: "GUILD_PROGRESS_INITIALIZE", guildId: id };
    obj.dispatch(obj);
  },
  markCompletedProgressSeen(id) {
    const importDefault = id;
    importDefault(709).wait(() => {
      let obj = id(outer1_1[0]);
      obj = { type: "GUILD_PROGRESS_COMPLETED_SEEN", guildId: id };
      return obj.dispatch(obj);
    });
  },
  dismissProgress(id) {
    let obj = importDefault(709);
    obj = { type: "GUILD_PROGRESS_DISMISS", guildId: id };
    obj.dispatch(obj);
  }
};