// === Module 16588: ConjureInstallTarget ===

// Module 16588 (ConjureInstallTarget)
import ConjureActionCreators from "ConjureActionCreators" /* 8700 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let obj = function _repairConjureGuildHints() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const guild_id = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj2;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              return { value, done: true };
            } else {
              const tmp4 = guild_id.guild_id === preview_guild_id && guild_id.preview_guild_id === preview_guild_id;
              if (!tmp4) {
                c3 = 1;
                c2 = 1;
                const obj5 = { guild_id: preview_guild_id, preview_guild_id };
                const obj6 = { value: obj2.setGuildHints(guild_id.id, obj5), done: false };
                obj2 = ConjureActionCreators;
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp7) {
          c2 = 3;
          throw tmp7;
        }
      }
    })();
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/conjure/publish/ConjureInstallTarget.tsx");

export const conjureInstallGuildId = function conjureInstallGuildId(project, integrationStatus, guildId) {
  let prop;
  if (integrationStatus != null) {
    prop = integrationStatus.integration_installed;
  }
  let guild_id = guildId;
  if (true === prop) {
    let guild_id1;
    if (project != null) {
      guild_id1 = project.guild_id;
    }
    guild_id = guildId;
    if (null != guild_id1) {
      guild_id = project.guild_id;
    }
  }
  return guild_id;
};
export const repairConjureGuildHints = function repairConjureGuildHints() {
  return obj(...arguments);
};