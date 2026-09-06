// discord_app/modules/auth/native/useLoginReset.tsx
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/useLoginReset.tsx");

export default function useLoginReset() {
  const effect = noop.useEffect(
    () => () => {
      if (!authenticated.isAuthenticated()) {
        closure_1_0(dependencyMap[2]).loginReset();
        const obj = closure_1_0(dependencyMap[2]);
      }
    },
    [],
  );
}
