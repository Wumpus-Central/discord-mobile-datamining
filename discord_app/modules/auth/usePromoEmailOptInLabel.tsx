// === Module 15906: usePromoEmailOptInLabel ===

// Module 15906 (usePromoEmailOptInLabel)
import react from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import RegistrationEmailOptInCopyExperimentDefault from "RegistrationEmailOptInCopyExperiment" /* 15907 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, location) => {
  let tmp4;
  const obj = react;
  const cResult = obj.c(5);
  if (cResult[0] !== location) {
    const obj2 = { location };
    cResult[0] = location;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const obj3 = RegistrationEmailOptInCopyExperimentDefault;
  const trackingCopy = obj3.useConfig(tmp4).trackingCopy;
  if (cResult[2] === arg0) {
    let tmp5;
    if (cResult[3] === trackingCopy) {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const intl = intl2.intl;
  let LSoXK5 = arg0;
  const string = intl.string;
  if (trackingCopy) {
    LSoXK5 = intl2.t.LSoXK5;
  }
  const stringResult = string(LSoXK5);
  cResult[2] = arg0;
  cResult[3] = trackingCopy;
  cResult[4] = stringResult;
  tmp5 = stringResult;
}) : ((arg0, location) => {
  let LSoXK5 = arg0;
  const obj = RegistrationEmailOptInCopyExperimentDefault;
  const obj2 = { location };
  const trackingCopy = obj.useConfig(obj2).trackingCopy;
  const intl = intl2.intl;
  const string = intl.string;
  if (trackingCopy) {
    LSoXK5 = intl2.t.LSoXK5;
  }
  return string(LSoXK5);
});
const result = size.fileFinishedImporting("modules/auth/usePromoEmailOptInLabel.tsx");

export const usePromoEmailOptInLabel = tmp2;