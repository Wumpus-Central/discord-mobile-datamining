// === Module 18290: ConjureInstallTarget ===

// Module 18290 (ConjureInstallTarget)
import ConjureActionCreators from "ConjureActionCreators" /* 6814 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_3 = async function _repairConjureGuildHints(arg0) {
  let install_scope = arg0;
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+60" };
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
          } else if ("guild" === install_scope.install_scope) {
            if (null == install_scope.guild_id) {
              c3 = 1;
              c2 = 1;
              const obj5 = { value: ConjureActionCreators.setConjureProjectServer(install_scope.id, preview_guild_id), done: false };
              return obj5;
            } else if (install_scope.preview_guild_id !== preview_guild_id) {
              const obj7 = { preview_guild_id };
              c3 = 2;
              c2 = 1;
              const obj8 = { value: ConjureActionCreators.updateProjectSettings(install_scope.id, obj7), done: false };
              return obj8;
            }
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj9 = { value, done: true };
            return obj9;
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
        return { value: "HermesInternal", done: "+60" };
      } catch (tmp10) {
        c2 = tmp;
        throw tmp10;
      }
    }
  })();
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/ConjureInstallTarget.tsx");

export function conjureInstallGuildId(project, guildId) {
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  let guild_id = guildId;
  if ("guild" === install_scope) {
    guild_id = guildId;
    if (null != project.guild_id) {
      guild_id = project.guild_id;
    }
  }
  return guild_id;
}
export function repairConjureGuildHints() {
  const self = this;
  const apply = closure_3.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}