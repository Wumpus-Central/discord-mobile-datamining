// discord_app/modules/auth/native/useLoginReset.tsx
import closure_2 from "../../../../_runtime/00019_noop.js";
import closure_3 from "../../../stores/AuthenticationStore.tsx";

const result = require("set").fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = React.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      callback(table[2]).loginReset();
      const obj = callback(table[2]);
    }
  }, []);
};