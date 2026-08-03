// === Module 9384: useLoginReset ===

// Module 9384 (useLoginReset)
import noop from "noop";
import fetchFingerprint from "fetchFingerprint";

const result = require("handleLogout").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};