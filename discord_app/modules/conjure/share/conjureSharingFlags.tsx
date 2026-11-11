// === Module 13234: conjureSharingFlags ===

// Module 13234 (conjureSharingFlags)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6955 */;
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