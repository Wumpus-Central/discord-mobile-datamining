// discord_app/modules/conjure/share/conjureSharingFlags.tsx
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/conjure/share/conjureSharingFlags.tsx");

export function conjureSharingFlags(flags, arg1) {
  flags = flags.flags;
  if (null == flags) {
    return null;
  } else {
    const PUBLIC = ConjureProjectTypes.ConjureProjectFlags.PUBLIC;
    if (arg1) {
      let tmp4 = flags | PUBLIC;
    } else {
      tmp4 = flags & ~PUBLIC;
    }
  }
}
