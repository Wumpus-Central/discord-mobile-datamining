// discord_app/modules/conjure/remix/ConjureRemix.tsx
import _modDef4192 from "../intl/ConjureUntranslated.messages.js";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import ConjureWorkerTickets from "../connection/ConjureWorkerTickets.tsx";
import conjureRemixConnection from "conjureRemixConnection.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import Dispatcher from "../../../Dispatcher.tsx";

require = fn;
function startRemix(id, guildId, arg2, arg3, share_ticket) {
  ({ name, copy } = arg2);
  importDefault = arg3;
  c3 = undefined;
  GuildStore = undefined;
  closure_5 = undefined;
  closure_6 = undefined;
  map = undefined;
  c8 = undefined;
  closure_10 = undefined;
  let nonce;
  function accept(comma) {
    timestampProducer(comma);
    if (closure_5 == null) {
      closure_5 = conjureRemixConnection.acceptRemix(c3, comma, copy).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(c3, comma, copy);
    }
    return closure_5;
  }
  closure_13 = async function _open() {
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
            c7 = true;
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
              const obj7 = { ok: false, message: closure_129_2, kept: false };
              c3 = 3;
              const obj8 = { value: obj7, done: true };
              return obj8;
            } else {
              dependencyMap = 2;
              c3 = 1;
              const obj9 = { value: closure_129_9(closure_128_0.id), done: false };
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
              closure_129_5 = null;
              closure_129_7 = false;
              const obj11 = { ok: false, message: closure_129_2, kept: true };
              c3 = 3;
            } else if ("rejected" !== closure_128_1) {
              const obj12 = { ok: true, projectId: closure_128_0.id, guildId: closure_129_10 };
            }
            if (closure_129_4 != null) {
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
          { ok: false, message: null, kept: false }[1] = closure_129_2;
        }
      } catch (tmp36) {
        c3 = tmp;
        throw tmp36;
      }
    }
  };
  const intl = copy(1112).intl;
  dependencyMap = intl.string(_modDef4192.Cn8H0Y);
  let tmp3;
  if (null != share_ticket) {
    let obj2 = { share_ticket };
    tmp3 = obj2;
  }
  const mintRemixTicketResult = copy(7548).mintRemixTicket(id.id, tmp3);
  c3 = mintRemixTicketResult;
  mintRemixTicketResult.catch(() => {

  });
  closure_5 = null;
  closure_6 = null;
  map = false;
  c8 = false;
  let tmp5 = null;
  if (null != guildId) {
    tmp5 = null;
    if ("guild" === id.install_scope) {
      guild = GuildStore.getGuild(guildId);
      let tmp8 = null;
      if (null != guild) {
        tmp8 = null;
        if (tmpResult.canStartConjureProject(guild, "ConjureRemix")) {
          tmp8 = guildId;
        }
        tmpResult = tmp(7476);
      }
      tmp5 = tmp8;
    }
  }
  closure_10 = tmp5;
  let obj = copy(7548);
  nonce = copy(9929).createNonce();
  let result = map.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    closure_6 = id;
    const result = ConjureWorkerTickets.rememberCreatedProjectTicket(id, ws_ticket);
    timestampProducer(id);
    if (closure_5 == null) {
      const tmp2Result = conjureRemixConnection;
      closure_5 = conjureRemixConnection.acceptRemix(c3, id, copy).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(c3, id, copy);
    }
  });
  const tmpResult3 = copy(9929);
  let obj3 = { name };
  if (null != tmp5) {
    let obj4 = { guild_id: tmp5 };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged = Object.assign(obj5);
  obj3.remix_source_project_id = id.id;
  obj3.remix_share_ticket = share_ticket;
  obj3.nonce = nonce;
  const remix = copy(7541).createRemix(obj3);
  remix.then((remix_preview) => {
    map.delete(nonce);
    if (null != remix_preview.remix_preview) {
      ConjureActionCreators.applyRemixPreview(remix_preview.id, remix_preview.remix_preview);
      if (!c8) {
        let tmp6;
        if (closure_1 != null) {
          tmp6 = closure_1(remix_preview);
        }
        closure_4 = tmp6;
      }
    }
    id = remix_preview.id;
    timestampProducer(id);
    if (closure_5 == null) {
      closure_5 = conjureRemixConnection.acceptRemix(c3, id, copy).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(c3, id, copy);
    }
    return remix_preview;
  }, () => {
    map.delete(nonce);
    if (null != closure_6) {
      hasOwnProperty(closure_6);
    }
    return null;
  });
  return {
    guildId,
    name,
    copy,
    open() {
      const self = this;
      const apply = closure_13.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    abandon() {
      let tmp = c7;
      if (!c7) {
        tmp = c8;
      }
      if (!tmp) {
        c8 = true;
        promise.then((id) => {
          if (closure_1_4 != null) {
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
const ConjureConnectionStore = fn(7563);
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