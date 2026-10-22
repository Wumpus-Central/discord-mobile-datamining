// === Module 10667: ConjureRemix ===

// Module 10667 (ConjureRemix)
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10690 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10695 */;
import conjureRemixConnection from "conjureRemixConnection" /* 10776 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import Dispatcher from "Dispatcher" /* 584 */;

require = fn;
function prepareConjureRemix(prepareConjureRemixResult, currentGuildId, arg2) {
  _require = currentGuildId;
  importDefault = arg2;
  function accept(comma) {
    hasOwnProperty(comma);
    if (closure_5 == null) {
      closure_5 = conjureRemixConnection.acceptRemix(mintRemixTicketResult, comma).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(mintRemixTicketResult, comma);
    }
    return closure_5;
  }
  closure_11 = async function _open(arg0) {
    closure_129_0 = currentGuildId;
    await value;
    closure_129_1 = value;
    if (null == closure_129_1) {
      return { ok: false, message: closure_130_2, kept: false };
    }
    await closure_130_8(closure_129_1.id);
    if (2 === tmp4) {
      if (arg0 === 1) {
        let v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        return { value, done: true };
      } else {
        closure_129_2 = value;
        if ("unreachable" === closure_129_2) {
          closure_130_5 = null;
          closure_130_7 = false;
          v3 = 3;
        } else if ("rejected" !== closure_129_2) {
          if (closure_129_0 !== closure_130_0) {
            const result = currentGuildId(10690).updateProjectSettings(closure_129_1.id, { guild_id: closure_129_0, preview_guild_id: closure_129_0 });
            c3 = 4;
            v3 = 1;
            return { value: result.then(() => true, () => false), done: false };
          }
        }
        if (closure_130_4 != null) {
          tmp33();
        }
        v3(closure_129_1.id);
        currentGuildId(10690);
        c3 = 3;
        v3 = 1;
        return {
          value: currentGuildId(10690).deleteProject(closure_129_1.id).catch(() => {

              }),
          done: false
        };
      }
    } else if (3 === tmp4) {
      if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        return { value, done: true };
      } else {
        { ok: false, message: null, kept: false }[1] = closure_130_2;
      }
    } else if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (value) {
        if (closure_130_4 != null) {
          tmp10();
        }
        currentGuildId(10695).forgetEarlyTicket(closure_129_1.id);
        v3(closure_129_1.id);
        closure_1_5(closure_129_1.id);
        currentGuildId(10695);
      }
    }
    return value;
  };
  const intl = require("util").intl;
  dependencyMap = intl.string(_modDef3830.Cn8H0Y);
  const mintRemixTicketResult = require("ConjureWorkerTickets").mintRemixTicket(prepareConjureRemixResult.id);
  asyncGeneratorStep = mintRemixTicketResult;
  mintRemixTicketResult.catch(() => {

  });
  closure_5 = null;
  closure_6 = null;
  let obj = require("ConjureWorkerTickets");
  const nonce = require("createNonce").createNonce();
  let result = map.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    closure_6 = id;
    const result = ConjureWorkerTickets.rememberCreatedProjectTicket(id, ws_ticket);
    hasOwnProperty(id);
    if (closure_5 == null) {
      const tmp2Result = conjureRemixConnection;
      closure_5 = conjureRemixConnection.acceptRemix(mintRemixTicketResult, id).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(mintRemixTicketResult, id);
    }
  });
  let obj2 = require("createNonce");
  const obj4 = { name: null, guild_id: currentGuildId, install_scope: prepareConjureRemixResult.install_scope, remix_source_project_id: prepareConjureRemixResult.id, nonce };
  const name = prepareConjureRemixResult.name;
  obj4.name = "" + name.slice(0, 120) + closure_6;
  const remix = require("ConjureActionCreators").createRemix(obj4);
  let nextPromise = remix.then((remix_preview) => {
    map.delete(nonce);
    if (null != remix_preview.remix_preview) {
      ConjureActionCreators.applyRemixPreview(remix_preview.id, remix_preview.remix_preview);
      if (!c7) {
        let tmp6;
        if (closure_1 != null) {
          tmp6 = closure_1(remix_preview);
        }
        closure_4 = tmp6;
      }
    }
    const id = remix_preview.id;
    hasOwnProperty(id);
    if (closure_5 == null) {
      closure_5 = conjureRemixConnection.acceptRemix(mintRemixTicketResult, id).catch(() => "rejected");
      const acceptRemixResult = conjureRemixConnection.acceptRemix(mintRemixTicketResult, id);
    }
    return remix_preview;
  }, () => {
    map.delete(nonce);
    if (null != closure_6) {
      React4(closure_6);
    }
    return null;
  });
  return {
    created: nextPromise,
    open(arg0) {
      const self = this;
      const apply = closure_11.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    },
    dismiss() {
      if (!c7) {
        c7 = true;
        nextPromise = nextPromise.then((id) => {
          if (closure_1_4 != null) {
            tmp();
          }
          if (null != id) {
            closure_4(id.id);
          }
        });
      }
    }
  };
}
const ConjureConnectionStore = fn(10668);
({ closeConnection: closure_4, ensureConnection: hasOwnProperty } = ConjureConnectionStore);
let c6 = " (Remix)";
const map = new Map();
const subscription = Dispatcher.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (nonce) => {
  ({ projectId, wsTicket } = nonce);
  value = map.get(nonce.nonce);
  if (value != null) {
    value(projectId, wsTicket);
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export { prepareConjureRemix };
export const remixConjureProjectInto = function remixConjureProjectInto(prepareConjureRemixResult, currentGuildId) {
  return prepareConjureRemix(prepareConjureRemixResult, currentGuildId).open(currentGuildId);
};