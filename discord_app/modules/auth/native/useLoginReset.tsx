// discord_app/modules/auth/native/useLoginReset.tsx
import noop from "../../../../_runtime/00019_noop.js";
import fetchFingerprint from "../../../stores/AuthenticationStore.tsx";

const result = require("obj132").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};