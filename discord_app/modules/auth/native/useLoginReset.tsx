// === Module 8591: useLoginReset ===

// Module 8591 (useLoginReset)
import noop from "noop" /* 19 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;

const result = require("obj132").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};