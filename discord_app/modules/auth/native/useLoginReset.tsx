// === Module 6954: useLoginReset ===

// Module 6954 (useLoginReset)
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = noop.useEffect(() => () => {
    if (!authenticated.isAuthenticated()) {
      closure_1_0(dependencyMap[2]).loginReset();
      const obj = closure_1_0(dependencyMap[2]);
    }
  }, []);
};