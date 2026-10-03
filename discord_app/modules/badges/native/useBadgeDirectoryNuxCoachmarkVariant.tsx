// discord_app/modules/badges/native/useBadgeDirectoryNuxCoachmarkVariant.tsx
import c from "../../../../_runtime/00576_c.js";
import useCanOpenBadgeDirectoryFromProfile from "useCanOpenBadgeDirectoryFromProfile.tsx";
import useBadgeDirectoryNuxPopoverVariant from "../useBadgeDirectoryNuxPopoverVariant.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let closure_4 = { variantProps: null, isPending: false };
let closure_5 = { variantProps: null, isPending: true };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/badges/native/useBadgeDirectoryNuxCoachmarkVariant.tsx");

export const useBadgeDirectoryNuxCoachmarkVariant = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(8);
      ({ userId, enabled, fetchCatalog, location: _location } = arg0);
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (enabled) {
        enabled = tmpResult.useCanOpenBadgeDirectoryFromProfile(tmp4);
      }
      if (cResult[2] === fetchCatalog) {
        if (cResult[3] === enabled) {
          if (cResult[4] === userId) {
            let tmp5 = cResult[5];
          }
          const badgeDirectoryNuxPopoverState =
            useBadgeDirectoryNuxPopoverVariant.useBadgeDirectoryNuxPopoverState(tmp5);
          const variantProps = badgeDirectoryNuxPopoverState.variantProps;
          const tmpResult2 = useBadgeDirectoryNuxPopoverVariant;
          [tmp11, tmp12] = noop.useState(null);
          if (enabled) {
            if (null != tmp11) {
              return tmp11;
            } else if (badgeDirectoryNuxPopoverState.isPending) {
              return closure_5;
            } else {
              if (cResult[6] !== variantProps) {
                const obj3 = { variantProps, isPending: false };
                cResult[6] = variantProps;
                cResult[7] = obj3;
                let tmp15 = obj3;
              } else {
                tmp15 = cResult[7];
              }
              tmp12(tmp15);
              return tmp15;
            }
          } else {
            if (null != tmp11) {
              tmp12(null);
            }
            return closure_4;
          }
          const tmp10 = _slicedToArray(noop.useState(null), 2);
        }
      }
      const obj4 = { currentUserId: userId, enabled, fetchCatalog };
      cResult[2] = fetchCatalog;
      cResult[3] = enabled;
      cResult[4] = userId;
      cResult[5] = obj4;
      tmp5 = obj4;
      tmpResult = useCanOpenBadgeDirectoryFromProfile;
    }
  : (enabled) => {
      enabled = enabled.enabled;
      ({ userId, fetchCatalog, location: _location } = enabled);
      if (enabled) {
        enabled = obj.useCanOpenBadgeDirectoryFromProfile({ location: _location });
      }
      obj = useCanOpenBadgeDirectoryFromProfile;
      const badgeDirectoryNuxPopoverState = useBadgeDirectoryNuxPopoverVariant.useBadgeDirectoryNuxPopoverState({
        currentUserId: userId,
        enabled,
        fetchCatalog,
      });
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
    };
