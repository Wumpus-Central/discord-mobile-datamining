// === Module 12296: ConjureActivity ===

// Module 12296 (ConjureActivity)
import size from "module_2" /* 2 */;

let closure_0 = { building: 0, done: 1, idle: 2 };
const result = size.fileFinishedImporting("modules/conjure/projects/ConjureActivity.tsx");

export const CONJURE_DONE_WINDOW_MS = 60000;
export const conjureActivity = function conjureActivity(finishedAt) {
  finishedAt = finishedAt.finishedAt;
  let str = "building";
  if (!finishedAt.thinking) {
    let str3 = "idle";
    if (null != finishedAt) {
      str3 = "idle";
      if (tmp - finishedAt < 60000) {
        str3 = "done";
      }
    }
    str = str3;
  }
  return str;
};
export const sortConjureProjects = function sortConjureProjects(items) {
  items = [...items];
  return items.sort((sortTime, sortTime2) => {
    const diff = dependencyMap[sortTime.activity] - dependencyMap[sortTime2.activity];
    if (0 !== diff) {
      return diff;
    } else if (sortTime.sortTime !== sortTime2.sortTime) {
      return sortTime2.sortTime - sortTime.sortTime;
    } else {
      const name = sortTime.name;
      let localeCompareResult = name.localeCompare(sortTime2.name);
      if (0 === localeCompareResult) {
        const projectId = sortTime.projectId;
        localeCompareResult = projectId.localeCompare(sortTime2.projectId);
      }
      return localeCompareResult;
    }
  });
};
export const conjureProjectGuildId = function conjureProjectGuildId(guild_id) {
  guild_id = guild_id.guild_id;
  if (guild_id == null) {
    guild_id = guild_id.preview_guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  return guild_id;
};