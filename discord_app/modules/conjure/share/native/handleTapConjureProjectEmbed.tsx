// === Module 12153: handleTapConjureProjectEmbed ===

// Module 12153 (handleTapConjureProjectEmbed)
import openFrameDefault from "openFrame" /* 10568 */;
import conjureSharedProjectCoverTargetDefault from "conjureSharedProjectCoverTarget" /* 11853 */;
import launchConjureSharedProjectDefault from "launchConjureSharedProject" /* 12154 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11850 */;

const require = fn;
function runConjureSharedProjectCoverAction(applicationId, arg1, channelId) {
  const tmp3 = conjureSharedProjectCoverTargetDefault(applicationId, arg1, channelId);
  if (null == tmp3) {
    return false;
  } else if ("open" === tmp3.type) {
    const obj = { applicationId, channel: tmp3.appChannel };
    openFrameDefault(obj);
    return true;
  } else {
    channelId = channelId.channelId;
    let flag = null != channelId;
    if (flag) {
      (function launchOrReport() {
        const self = this;
        const apply = closure_1_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(applicationId, tmp4, channelId);
      flag = true;
    }
    return flag;
  }
}
let closure_8 = async function _launchOrReport() {
  c4 = 0;
  c6 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
    closure_3 = tmp3;
    await launchConjureSharedProjectDefault({ applicationId, guildId, channelId });
    if (1 === tmp7) {
      c5 = 0;
      const intl = closure_131_0(closure_131_2[7]).intl;
      closure_131_0(closure_131_2[6]).presentFailedToast(intl.string(closure_131_1(closure_131_2[8]).hh2nuX));
      c6 = 3;
      closure_131_0(closure_131_2[6]);
    } else if (arg0 === 1) {
      c6 = 3;
      throw value;
    } else if (arg0 !== 2) {
      c5 = 0;
    }
    return value;
  })();
};
let closure_9 = async function _handleTapConjureProjectEmbed(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_4 = tmp2;
          closure_132_0 = closure_1;
          closure_132_1 = closure_2;
          closure_132_2 = undefined;
          status = status.getStatus(closure_0, closure_1);
          let type;
          if (status != null) {
            type = status.type;
          }
          let project = null;
          if ("ready" === type) {
            project = project.getProject(status.projectId);
          }
          closure_132_2 = project;
          if (null == project) {
            let result = null != project;
            if (result) {
              let type1;
              if (status != null) {
                type1 = status.type;
              }
              let ticketValid = "ready" === type1;
              if (ticketValid) {
                ticketValid = status.ticketValid;
              }
              if (!ticketValid) {
                ticketValid = canRemixProject(project);
              }
              result = ticketValid;
            }
            if (result) {
              result = require("ConjureMobileExperiment").isConjureMobileEnabled("handleTapConjureProjectEmbed");
              const obj2 = require("ConjureMobileExperiment");
            }
            if (null != project) {
              if (result) {
                if ("remix" === closure_3) {
                  c5 = 1;
                  c6 = 1;
                  const obj5 = { value: require("asyncRequireImpl")(paths[11], paths.paths), done: false };
                  return obj5;
                }
              }
            }
            let type2;
            if (status != null) {
              type2 = status.type;
            }
            let tmp21 = "no_access" !== type2;
            if (tmp21) {
              let type3;
              if (status != null) {
                type3 = status.type;
              }
              tmp21 = "expired" !== type3;
            }
            if (tmp21) {
              require("openConjureProjectAboutSheet")(closure_0, closure_2, closure_1);
            }
          }
          c6 = 3;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        value.default(closure_132_2, closure_132_1.guildId, closure_132_0);
      }
      c6 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp28) {
      c6 = tmp;
      throw tmp28;
    }
  }
};
const canRemixProject = fn(6502).canRemixProject;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/share/native/handleTapConjureProjectEmbed.tsx");

export default function handleTapConjureProjectEmbed() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};