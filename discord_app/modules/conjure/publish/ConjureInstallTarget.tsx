// === Module 17082: ConjureInstallTarget ===

// Module 17082 (ConjureInstallTarget)
import ConjureActionCreators from "ConjureActionCreators" /* 11411 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _repairConjureGuildHints(arg0, arg1) {
  let guild_id = arg0;
  closure_1 = arg1;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let tmp5 = guild_id.guild_id === preview_guild_id;
            if (tmp5) {
              tmp5 = guild_id.preview_guild_id === preview_guild_id;
            }
            if (!tmp5) {
              const obj5 = { guild_id: preview_guild_id, preview_guild_id };
              c3 = 1;
              c2 = 1;
              const obj6 = { value: ConjureActionCreators.setGuildHints(guild_id.id, obj5), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp8) {
        c2 = tmp;
        throw tmp8;
      }
    }
  })();
};
const size = fn(2);
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
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};