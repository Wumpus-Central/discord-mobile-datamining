// === Module 7736: useLoginReset ===

// Module 7736 (useLoginReset)
import closure_2 from "noop" /* 19 */;
import closure_3 from "fetchFingerprint" /* 1215 */;

const result = require("set").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};