// === Module 9314: ErrorUtils ===

// Module 9314 (ErrorUtils)
import size from "module_2" /* 2 */;

function getUnderlyingIOSExceptionRecursively(NSUnderlyingError) {
  if (null != NSUnderlyingError.userInfo.NSUnderlyingError) {
    const tmp2 = getUnderlyingIOSExceptionRecursively(NSUnderlyingError.userInfo.NSUnderlyingError);
    if (null != tmp2) {
      return tmp2;
    }
  }
  return NSUnderlyingError.userInfo.NSLocalizedDescription;
}
const result = size.fileFinishedImporting("utils/ErrorUtils.tsx");

export function getUnderlyingIOSError(message) {
  try {
    let tmp3 = getUnderlyingIOSExceptionRecursively(message);
    if (tmp3 == null) {
      tmp3 = null;
    }
    return tmp3;
  } catch (err) {
    return null;
  }
}