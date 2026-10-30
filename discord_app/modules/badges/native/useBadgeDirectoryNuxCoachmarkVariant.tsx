// === Module 14879: useBadgeDirectoryNuxCoachmarkVariant ===

// Module 14879 (useBadgeDirectoryNuxCoachmarkVariant)
import useCanOpenBadgeDirectoryFromProfile from "useCanOpenBadgeDirectoryFromProfile" /* 11417 */;
import useBadgeDirectoryNuxPopoverVariant from "useBadgeDirectoryNuxPopoverVariant" /* 14880 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = { variantProps: null, isPending: false };
let closure_5 = { variantProps: null, isPending: true };
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/useBadgeDirectoryNuxCoachmarkVariant.tsx");

export function useBadgeDirectoryNuxCoachmarkVariant(enabled) {
  enabled = enabled.enabled;
  ({ userId, fetchCatalog, location: _location } = enabled);
  if (enabled) {
    enabled = obj.useCanOpenBadgeDirectoryFromProfile({ location: _location });
  }
  obj = useCanOpenBadgeDirectoryFromProfile;
  const badgeDirectoryNuxPopoverState = useBadgeDirectoryNuxPopoverVariant.useBadgeDirectoryNuxPopoverState({ currentUserId: userId, enabled, fetchCatalog });
  ({ variantProps, isPending } = badgeDirectoryNuxPopoverState);
  const tmpResult = useBadgeDirectoryNuxPopoverVariant;
  [tmp5, tmp6] = noop.useState(null);
  if (enabled) {
    if (null != tmp5) {
      return tmp5;
    } else if (isPending) {
      return closure_5;
    } else {
      const obj2 = { variantProps, isPending: false };
      tmp6(obj2);
      return obj2;
    }
  } else {
    if (null != tmp5) {
      tmp6(null);
    }
    return closure_4;
  }
  const tmp4 = _slicedToArray(noop.useState(null), 2);
}