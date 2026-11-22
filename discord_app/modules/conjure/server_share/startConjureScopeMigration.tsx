// === Module 18295: startConjureScopeMigration ===

// Module 18295 (startConjureScopeMigration)
import util from "util" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import createNonce from "createNonce" /* 8447 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 13494 */;
import conjureSendToProject from "conjureSendToProject" /* 18296 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;

require = fn;
let closure_7 = async function _sendMigrationMessage(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp8;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          closure_130_2 = undefined;
          const nonce = createNonce.createNonce();
          closure_130_2 = nonce;
          c5 = 1;
          c6 = 3;
          c7 = 1;
          const obj4 = { value: conjureSendToProject.sendConjureMessageToProject(closure_0, closure_1, nonce), done: false };
          return obj4;
        }
      } else if (1 === tmp8) {
        c5 = 0;
        c6 = 2;
        c7 = 1;
        const obj5 = { value: closure_131_0(closure_131_2[6]).sleep(1500), done: false };
        return obj5;
      } else if (2 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_131_0(closure_131_2[7]).forgetEarlyTicket(closure_130_0);
          c5 = 2;
          const obj11 = closure_131_0(closure_131_2[7]);
          c6 = 5;
          c7 = 1;
          const obj8 = { value: closure_131_0(closure_131_2[5]).sendConjureMessageToProject(closure_130_0, closure_130_1, closure_130_2), done: false };
          return obj8;
        }
      } else {
        if (3 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            c5 = 0;
          }
        } else {
          if (4 === tmp8) {
            c5 = 0;
            closure_130_3 = closure_4;
            const obj10 = { projectId: closure_130_0, err: closure_130_3 };
            closure_131_5.warn("scope migration message failed", obj10);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c5 = 0;
          }
          c5 = 0;
          c7 = 3;
          obj = { value, done: true };
          return obj;
        }
        c7 = 3;
      }
    } catch (tmp20) {
      closure_4 = tmp20;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp20;
      } else if (tmp === tmp22) {
        c6 = tmp;
      } else {
        c6 = tmp5;
      }
    }
  }
};
const logger = new fn(4).Logger("startConjureScopeMigration");
let obj = { added: _modDef4190.YXmrDJ, removed: _modDef4190.OYaecm };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/startConjureScopeMigration.tsx");

export default function startConjureScopeMigration(id, arg1) {
  openConjureProjectInBuilderDefault(id);
  const publishStatus = ConjurePublishStatusStore.getPublishStatus(id.id);
  let publishState;
  if (publishStatus != null) {
    publishState = publishStatus.publishState;
  }
  if (null != publishState) {
    let tmp5 = "nothing_built" !== publishState;
  } else {
    const prop = id.preview_supported_surfaces;
    let num;
    if (prop != null) {
      num = prop.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp5 = num > 0;
    if (!tmp5) {
      const supported_surfaces = id.supported_surfaces;
      let num3;
      if (supported_surfaces != null) {
        num3 = supported_surfaces.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp5 = num3 > 0;
    }
  }
  if (tmp5) {
    const intl = util.intl;
    (function sendMigrationMessage() {
      const self = this;
      const apply = closure_1_7.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(id.id, intl.string(obj[arg1]));
  }
};