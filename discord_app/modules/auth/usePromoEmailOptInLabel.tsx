// === Module 15945: usePromoEmailOptInLabel ===

// Module 15945 (usePromoEmailOptInLabel)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import RegistrationEmailOptInCopyExperimentDefault from "RegistrationEmailOptInCopyExperiment" /* 15946 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/auth/usePromoEmailOptInLabel.tsx");

export const usePromoEmailOptInLabel = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  const cResult = c.c(5);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const trackingCopy = RegistrationEmailOptInCopyExperimentDefault.useConfig(tmp4).trackingCopy;
  if (cResult[2] === arg0) {
    if (cResult[3] === trackingCopy) {
      let tmp5 = cResult[4];
    }
    return tmp5;
  }
  const intl = util.intl;
  let LSoXK5 = arg0;
  if (trackingCopy) {
    LSoXK5 = util.t.LSoXK5;
  }
  const stringResult = intl.string(LSoXK5);
  cResult[2] = arg0;
  cResult[3] = trackingCopy;
  cResult[4] = stringResult;
  tmp5 = stringResult;
}) : ((arg0, location) => {
  let LSoXK5 = arg0;
  const intl = util.intl;
  if (obj.useConfig(obj2).trackingCopy) {
    LSoXK5 = util.t.LSoXK5;
  }
  return intl.string(LSoXK5);
});