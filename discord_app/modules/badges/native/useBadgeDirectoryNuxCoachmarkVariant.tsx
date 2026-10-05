// discord_app/modules/badges/native/useBadgeDirectoryNuxCoachmarkVariant.tsx
import react2 from "../../../../_runtime/00576_react.js";
import useCanOpenBadgeDirectoryFromProfile from "useCanOpenBadgeDirectoryFromProfile.tsx";
import useBadgeDirectoryNuxPopoverVariant from "../useBadgeDirectoryNuxPopoverVariant.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_4 = { variantProps: null, isPending: false };
let closure_5 = { variantProps: null, isPending: true };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _location;
      let enabled;
      let fetchCatalog;
      let tmp11;
      let tmp12;
      let tmp4;
      let userId;
      const obj = react2;
      const cResult = obj.c(8);
      ({ userId, enabled, fetchCatalog, location: _location } = arg0);
      if (cResult[0] !== _location) {
        const obj2 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      const tmpResult = useCanOpenBadgeDirectoryFromProfile;
      if (enabled) {
        enabled = tmpResult.useCanOpenBadgeDirectoryFromProfile(tmp4);
      }
      if (cResult[2] === fetchCatalog) {
        if (cResult[3] === enabled) {
          let tmp5;
          if (cResult[4] === userId) {
            tmp5 = cResult[5];
          }
          const tmpResult2 = useBadgeDirectoryNuxPopoverVariant;
          const badgeDirectoryNuxPopoverState = tmpResult2.useBadgeDirectoryNuxPopoverState(tmp5);
          const variantProps = badgeDirectoryNuxPopoverState.variantProps;
          const isPending = badgeDirectoryNuxPopoverState.isPending;
          [tmp11, tmp12] = react.useState(null);
          _slicedToArray(react.useState(null), 2);
          if (enabled) {
            if (null != tmp11) {
              return tmp11;
            } else if (isPending) {
              return closure_5;
            } else {
              let tmp15;
              if (cResult[6] !== variantProps) {
                const obj3 = { variantProps, isPending: false };
                cResult[6] = variantProps;
                cResult[7] = obj3;
                tmp15 = obj3;
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
        }
      }
      const obj4 = { currentUserId: userId, enabled, fetchCatalog };
      cResult[2] = fetchCatalog;
      cResult[3] = enabled;
      cResult[4] = userId;
      cResult[5] = obj4;
      tmp5 = obj4;
    }
  : (enabled) => {
      let _location;
      let fetchCatalog;
      let isPending;
      let tmp5;
      let tmp6;
      let userId;
      let variantProps;
      enabled = enabled.enabled;
      ({ userId, fetchCatalog, location: _location } = enabled);
      const obj = useCanOpenBadgeDirectoryFromProfile;
      if (enabled) {
        enabled = obj.useCanOpenBadgeDirectoryFromProfile({ location: _location });
      }
      const tmpResult = useBadgeDirectoryNuxPopoverVariant;
      const badgeDirectoryNuxPopoverState = tmpResult.useBadgeDirectoryNuxPopoverState({
        currentUserId: userId,
        enabled,
        fetchCatalog,
      });
      ({ variantProps, isPending } = badgeDirectoryNuxPopoverState);
      [tmp5, tmp6] = react.useState(null);
      _slicedToArray(react.useState(null), 2);
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
    };
const result = size.fileFinishedImporting("modules/badges/native/useBadgeDirectoryNuxCoachmarkVariant.tsx");

export const useBadgeDirectoryNuxCoachmarkVariant = tmp2;
