// === Module 15268: context ===

// Module 15268 (context)
import importAllResult from "noop" /* 19 */;

let c0 = importAllResult;
let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/mfa/native/MfaChallengeContext.tsx");

export const MfaChallengeContext = context;
export const useMfaChallenge = function useMfaChallenge() {
  context = importAllResult.useContext(context);
  if (null == context) {
    const _Error = Error;
    error = new Error("useMfaChallenge must be used inside a MfaChallengeContext.Provider");
    throw error;
  } else {
    return context;
  }
};