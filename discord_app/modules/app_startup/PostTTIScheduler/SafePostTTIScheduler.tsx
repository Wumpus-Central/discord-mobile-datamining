// === Module 5414: waitSafelyForPostTTI ===

// Module 5414 (waitSafelyForPostTTI)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/app_startup/PostTTIScheduler/SafePostTTIScheduler.tsx");

export const waitSafelyForPostTTI = function waitSafelyForPostTTI(arg0) {
  return new Promise((arg0) => {
    closure_0 = arg0;
    const timeout = setTimeout(() => {
      callback();
    }, closure_0);
    num(dependencyMap[0]).schedulePostTTIEvent(() => {
      clearTimeout(closure_1);
      callback();
    });
  });
};