// discord_app/modules/conjure/remix/ConjureRemix.tsx
import _modDef4245 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import ConjureWorkerTickets from "../connection/ConjureWorkerTickets.tsx";
import conjureRemixConnection from "conjureRemixConnection.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import Dispatcher from "../../../Dispatcher.tsx";

require = fn;
function startRemix(id, guildId, arg2, arg3) {
  ({ name, copy } = arg2);
  ({ preloadPreview: importDefault, shareTicket, onReserved: dependencyMap } = arg3);
  GuildStore = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  map = undefined;
  c8 = undefined;
  c9 = undefined;
  closure_11 = undefined;
  let nonce;
  function accept(comma) {
    timestampProducer(comma);
    if (closure_6 == null) {
      closure_6 = conjureRemixConnection.acceptRemix(c4, comma, copy).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(c4, comma, copy);
    }
    return closure_6;
  }
  closure_14 = async function _open() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp4;
            const v0 = 0;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            c8 = true;
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value, done: false };
            return obj5;
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            if (null == closure_128_0) {
              const obj7 = { ok: false, message: closure_129_3, kept: false };
              c3 = 3;
              const obj8 = { value: obj7, done: true };
              return obj8;
            } else {
              dependencyMap = 2;
              c3 = 1;
              const obj9 = { value: closure_129_10(closure_128_0.id), done: false };
              return obj9;
            }
          }
        } else if (2 === tmp4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_128_1 = value;
            if ("unreachable" === closure_128_1) {
              closure_129_6 = null;
              closure_129_8 = false;
              const obj11 = { ok: false, message: closure_129_3, kept: true };
              c3 = 3;
            } else if ("rejected" !== closure_128_1) {
              const obj12 = { ok: true, projectId: closure_128_0.id, guildId: closure_129_11 };
            }
            if (closure_129_5 != null) {
              tmp12();
            }
            closure_1_5(closure_128_0.id);
            const obj3 = v0(dependencyMap[11]);
            dependencyMap = 3;
            c3 = 1;
            const obj13 = {
              value: v0(dependencyMap[11]).deleteProject(closure_128_0.id).catch(() => {

                      }),
              done: false
            };
            return obj13;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          { ok: false, message: null, kept: false }[1] = closure_129_3;
        }
      } catch (tmp36) {
        c3 = tmp;
        throw tmp36;
      }
    }
  };
  const intl = copy(1112).intl;
  closure_3 = intl.string(_modDef4245.Cn8H0Y);
  let tmp3;
  if (null != shareTicket) {
    let obj2 = { share_ticket: shareTicket };
    tmp3 = obj2;
  }
  const mintRemixTicketResult = copy(7674).mintRemixTicket(id.id, tmp3);
  GuildStore = mintRemixTicketResult;
  mintRemixTicketResult.catch(() => {

  });
  closure_6 = null;
  map = null;
  c8 = false;
  c9 = false;
  let tmp5 = null;
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
    let tmp8 = null;
    if (null != guild) {
      tmp8 = null;
      if (tmpResult.canStartConjureProject(guild, "ConjureRemix")) {
        tmp8 = guildId;
      }
      tmpResult = copy(7602);
    }
    tmp5 = tmp8;
  }
  closure_11 = tmp5;
  let obj = copy(7674);
  nonce = copy(10071).createNonce();
  let result = map.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    closure_7 = id;
    set.add(id);
    const result = ConjureWorkerTickets.rememberCreatedProjectTicket(id, ws_ticket);
    timestampProducer(id);
    if (closure_6 == null) {
      const tmp3Result = conjureRemixConnection;
      closure_6 = conjureRemixConnection.acceptRemix(c4, id, copy).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(c4, id, copy);
    }
    if (dependencyMap != null) {
      tmp9(id, closure_11);
    }
  });
  const tmpResult3 = copy(10071);
  let obj3 = { name };
  if (null != tmp5) {
    let obj4 = { guild_id: tmp5 };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  obj3.remix_source_project_id = id.id;
  obj3.remix_share_ticket = shareTicket;
  obj3.nonce = nonce;
  const remix = copy(7667).createRemix(obj3);
  remix.then((id) => {
    map.delete(nonce);
    set.delete(id.id);
    if (null != id.remix_preview) {
      ConjureActionCreators.applyRemixPreview(id.id, id.remix_preview);
      if (!c9) {
        let tmp7;
        if (importDefault != null) {
          tmp7 = importDefault(id);
        }
        closure_5 = tmp7;
      }
    }
    id = id.id;
    timestampProducer(id);
    if (closure_6 == null) {
      closure_6 = conjureRemixConnection.acceptRemix(c4, id, copy).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(c4, id, copy);
    }
    return id;
  }, () => {
    map.delete(nonce);
    if (null != closure_7) {
      set.delete(closure_7);
      hasOwnProperty(closure_7);
    }
    return null;
  });
  return {
    guildId,
    name,
    copy,
    open() {
      const self = this;
      const apply = closure_14.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    abandon() {
      let tmp = c8;
      if (!c8) {
        tmp = c9;
      }
      if (!tmp) {
        c9 = true;
        promise.then((id) => {
          if (closure_1_5 != null) {
            tmp();
          }
          if (null != id) {
            closure_5(id.id);
          }
        });
      }
    }
  };
}
const ConjureConnectionStore = fn(7693);
({ closeConnection: hasOwnProperty, ensureConnection: closure_6 } = ConjureConnectionStore);
let map = new Map();
const set = new Set();
const subscription = Dispatcher.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (nonce) => {
  ({ projectId, wsTicket } = nonce);
  value = map.get(nonce.nonce);
  if (value != null) {
    value(projectId, wsTicket);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export function isValidCopyName(str) {
  return str.trim().length >= ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH;
}
export function conjureCopyChangesType(install_scope, id) {
  return "guild" === install_scope.install_scope !== (null != id);
}
export function isConjureRemixCreating(c1) {
  return set.has(c1);
}
export function createConjureRemix(project, arg1, shareTicket) {
  closure_0 = project;
  closure_1 = arg1;
  closure_2 = shareTicket;
  closure_5 = async function _confirm(arg0) {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_0 = closure_0;
            ({ name: closure_131_1, copy: closure_131_2 } = closure_1);
            closure_131_3 = closure_2;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            closure_131_6 = undefined;
            c7 = 1;
            c8 = 1;
            return { value: "Path", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (closure_132_4) {
            c8 = 3;
            return { value: null, done: true };
          } else {
            closure_132_4 = true;
            closure_131_4 = closure_131_1.trim();
            closure_131_5 = true === closure_131_2;
            c6 = 1;
            let guildId;
            if (closure_132_3 != null) {
              guildId = closure_132_3.guildId;
            }
            let tmp26 = guildId === closure_131_0;
            if (tmp26) {
              tmp26 = closure_132_3.name === closure_131_4;
            }
            if (tmp26) {
              tmp26 = closure_132_3.copy === closure_131_5;
            }
            if (!tmp26) {
              if (closure_132_3 != null) {
                obj3.abandon();
              }
              const obj6 = { name: closure_131_4, copy: closure_131_5 };
              const obj7 = { preloadPreview: closure_132_1, shareTicket: closure_132_2, onReserved: closure_131_3 };
              closure_132_3 = startRemix(closure_132_0, closure_131_0, obj6, obj7);
              obj3 = closure_132_3;
            }
            c7 = 3;
            c8 = 1;
            const obj8 = { value: closure_132_3.open(), done: false };
            return obj8;
          }
        } else if (2 === tmp7) {
          c6 = 0;
          closure_132_4 = false;
          throw closure_5;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_132_4 = false;
          c8 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_131_6 = value;
          let kept = closure_131_6.ok;
          if (!kept) {
            kept = closure_131_6.kept;
          }
          if (!kept) {
            closure_132_3 = null;
          }
          c6 = 0;
          closure_132_4 = false;
          c8 = 3;
          const obj = { value: closure_131_6, done: true };
          return obj;
        }
      } catch (tmp53) {
        closure_5 = tmp53;
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp53;
        } else {
          c7 = tmp;
        }
      }
    }
  };
  c3 = null;
  c4 = false;
  return {
    confirm(arg0, arg1, arg2) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    dismiss() {
      let abandonResult;
      if (_null != null) {
        abandonResult = _null.abandon();
      }
      return abandonResult;
    }
  };
}