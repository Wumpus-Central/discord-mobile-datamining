// === Module 12299: ConjureRemix ===

// Module 12299 (ConjureRemix)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6622 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 6940 */;
import conjureRemixConnection from "conjureRemixConnection" /* 12300 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildStore from "GuildStore" /* 4784 */;
import Dispatcher from "Dispatcher" /* 572 */;

require = fn;
function startRemix(id, guildId, arg2, arg3, share_ticket) {
  _require = guildId;
  ({ name, copy } = arg2);
  dependencyMap = arg3;
  GuildStore = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  map = undefined;
  c8 = undefined;
  c9 = undefined;
  c11 = undefined;
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
              const obj12 = { ok: true, projectId: closure_128_0.id, guildId: null };
              let tmp10 = null;
              if (closure_129_11) {
                tmp10 = closure_129_0;
              }
              obj12.guildId = tmp10;
            }
            if (closure_129_5 != null) {
              tmp14();
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
      } catch (tmp38) {
        c3 = tmp;
        throw tmp38;
      }
    }
  };
  const intl = require("util").intl;
  closure_3 = intl.string(copy(4190).Cn8H0Y);
  let tmp3;
  if (null != share_ticket) {
    let obj2 = { share_ticket };
    tmp3 = obj2;
  }
  const mintRemixTicketResult = require("ConjureWorkerTickets").mintRemixTicket(id.id, tmp3);
  GuildStore = mintRemixTicketResult;
  mintRemixTicketResult.catch(() => {

  });
  closure_6 = null;
  map = null;
  c8 = false;
  c9 = false;
  guild = GuildStore.getGuild(guildId);
  let result = "guild" === id.install_scope && null != guild;
  if (result) {
    result = tmp(6865).canStartConjureProject(guild, "ConjureRemix");
    const tmpResult = tmp(6865);
  }
  c11 = result;
  let obj = require("ConjureWorkerTickets");
  nonce = require("createNonce").createNonce();
  const result1 = map.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    closure_7 = id;
    const result = ConjureWorkerTickets.rememberCreatedProjectTicket(id, ws_ticket);
    timestampProducer(id);
    if (closure_6 == null) {
      const tmp2Result = conjureRemixConnection;
      closure_6 = conjureRemixConnection.acceptRemix(c4, id, copy).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(c4, id, copy);
    }
  });
  const tmpResult3 = require("createNonce");
  let obj3 = { name };
  if (result) {
    let obj4 = { guild_id: guildId };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  obj3.remix_source_project_id = id.id;
  obj3.remix_share_ticket = share_ticket;
  obj3.nonce = nonce;
  const remix = require("ConjureActionCreators").createRemix(obj3);
  remix.then((remix_preview) => {
    map.delete(nonce);
    if (null != remix_preview.remix_preview) {
      ConjureActionCreators.applyRemixPreview(remix_preview.id, remix_preview.remix_preview);
      if (!c9) {
        let tmp6;
        if (dependencyMap != null) {
          tmp6 = dependencyMap(remix_preview);
        }
        closure_5 = tmp6;
      }
    }
    id = remix_preview.id;
    timestampProducer(id);
    if (closure_6 == null) {
      closure_6 = conjureRemixConnection.acceptRemix(c4, id, copy).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(c4, id, copy);
    }
    return remix_preview;
  }, () => {
    map.delete(nonce);
    if (null != closure_7) {
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
const ConjureConnectionStore = fn(6967);
({ closeConnection: hasOwnProperty, ensureConnection: closure_6 } = ConjureConnectionStore);
let map = new Map();
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
export function createConjureRemix(project, arg1, shareTicket) {
  closure_0 = project;
  closure_1 = arg1;
  closure_2 = shareTicket;
  closure_5 = async function _confirm(arg0) {
    if (c7 === 2) {
      c7 = 3;
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
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            closure_130_0 = closure_0;
            ({ name: closure_130_1, copy: closure_130_2 } = closure_1);
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Path", done: true };
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (closure_131_4) {
            c7 = 3;
            return { value: null, done: true };
          } else {
            closure_131_4 = true;
            closure_130_3 = closure_130_1.trim();
            closure_130_4 = true === closure_130_2;
            c5 = 1;
            let guildId;
            if (closure_131_3 != null) {
              guildId = closure_131_3.guildId;
            }
            let tmp26 = guildId === closure_130_0;
            if (tmp26) {
              tmp26 = closure_131_3.name === closure_130_3;
            }
            if (tmp26) {
              tmp26 = closure_131_3.copy === closure_130_4;
            }
            if (!tmp26) {
              if (closure_131_3 != null) {
                obj3.abandon();
              }
              const obj6 = { name: closure_130_3, copy: closure_130_4 };
              closure_131_3 = startRemix(closure_131_0, closure_130_0, obj6, closure_131_1, closure_131_2);
              obj3 = closure_131_3;
            }
            c6 = 3;
            c7 = 1;
            const obj7 = { value: closure_131_3.open(), done: false };
            return obj7;
          }
        } else if (2 === tmp7) {
          c5 = 0;
          closure_131_4 = false;
          throw closure_4;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          closure_131_4 = false;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_130_5 = value;
          let kept = closure_130_5.ok;
          if (!kept) {
            kept = closure_130_5.kept;
          }
          if (!kept) {
            closure_131_3 = null;
          }
          c5 = 0;
          closure_131_4 = false;
          c7 = 3;
          const obj = { value: closure_130_5, done: true };
          return obj;
        }
      } catch (tmp50) {
        closure_4 = tmp50;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp50;
        } else {
          c6 = tmp;
        }
      }
    }
  };
  c3 = null;
  c4 = false;
  return {
    confirm(arg0, arg1) {
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