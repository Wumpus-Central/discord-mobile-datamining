// === Module 13333: conjureSharingFlags ===

// Module 13333 (conjureSharingFlags)
import ConjureProjectTypes from "ConjureProjectTypes" /* 7018 */;
import size from "module_2" /* 2 */;

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