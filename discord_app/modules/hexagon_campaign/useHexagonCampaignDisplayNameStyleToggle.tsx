// discord_app/modules/hexagon_campaign/useHexagonCampaignDisplayNameStyleToggle.tsx
import HexagonCampaignUtils from "HexagonCampaignUtils.tsx";
import useDisplayNameStylesDefault from "../display_name_styles/hooks/useDisplayNameStyles.tsx";
import UserProfileSettingsActionCreators from "../user_profile/UserProfileSettingsActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const HexagonCampaignConstants = fn(5331);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES: metroImportDefault, HexagonCampaignPerk: closure_8 } =
  HexagonCampaignConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/useHexagonCampaignDisplayNameStyleToggle.tsx");

export function useHexagonCampaignDisplayNameStyleToggle(user, showEnrollmentError) {
  _require = showEnrollmentError;
  let obj = require("ProfileCustomizationUtils");
  const tmp3 = useDisplayNameStylesDefault({
    userId: user.id,
    pendingDisplayNameStyles:
      require("ProfileCustomizationUtils").useGuildMemberOrUserPendingDisplayNameStyles(user).pendingDisplayNameStyles,
    ignoreDisabledStylesSetting: true,
  });
  let result = null != tmp3;
  if (result) {
    result = tmp(5334).isHexagonCampaignDisplayNameStyle(tmp3);
    const tmpResult = tmp(5334);
  }
  let obj2 = {
    userId: user.id,
    pendingDisplayNameStyles:
      require("ProfileCustomizationUtils").useGuildMemberOrUserPendingDisplayNameStyles(user).pendingDisplayNameStyles,
    ignoreDisabledStylesSetting: true,
  };
  [tmp6, importDefault] = noop.useState(false);
  dependencyMap = noop.useRef(false);
  asyncGeneratorStep = noop.useRef(true);
  const tmp5 = _slicedToArray(noop.useState(false), 2);
  const unmountEffect = require("useMountEffect").useUnmountEffect(() => {
    closure_3.current = false;
  });
  let obj3 = {
    isApplied: result,
    isEnrolling: tmp6,
    applyCampaignDisplayNameStyle: null,
    removeCampaignDisplayNameStyle: null,
  };
  const callback = noop.useCallback(() => {
    if (!ref.current) {
      const currentUser = UserStore.getCurrentUser();
      let displayNameStyles;
      if (currentUser != null) {
        displayNameStyles = currentUser.displayNameStyles;
      }
      let tmp7 = null;
      if (null != displayNameStyles) {
        tmp7 = null;
        if (!tmp5Result.isHexagonCampaignDisplayNameStyle(displayNameStyles)) {
          tmp7 = displayNameStyles;
        }
        tmp5Result = HexagonCampaignUtils;
      }
      const obj2 = { displayNameStyles: tmp7 };
      UserProfileSettingsActionCreators.setPendingChanges(obj2);
    }
  }, []);
  items = [showEnrollmentError];
  obj3.applyCampaignDisplayNameStyle = noop.useCallback(
    asyncGeneratorStep(async () => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj4 = { value, done: true };
          return obj4;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_1 = tmp3;
              showEnrollmentError = tmp7;
              closure_128_0 = undefined;
              if (ref.current) {
                c4 = 3;
                return { value: false, done: true };
              } else {
                ref.current = true;
                importDefault(true);
                closure_128_0 = false;
                ref = 1;
                c3 = 2;
                c4 = 1;
                const obj8 = {
                  value: showEnrollmentError(ref[10]).ensureHexagonCampaignEnrollment(constants.DISPLAY_NAME_STYLE),
                  done: false,
                };
                return obj8;
              }
            }
          } else {
            if (1 === tmp7) {
              ref = 0;
              closure_128_0 = false;
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref = 0;
              c4 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_128_0 = value;
              ref = 0;
            }
            const current = closure_129_3.current;
            if (!current) {
              c4 = 3;
              const obj9 = { value: current, done: true };
              return obj9;
            } else {
              closure_129_2.current = false;
              closure_129_1(false);
              if (closure_128_0) {
                const result = showEnrollmentError(ref[10]).saveHexagonCampaignPreviousDisplayNameStyles();
                const obj2 = showEnrollmentError(ref[10]);
                const obj10 = { displayNameStyles };
                showEnrollmentError(ref[9]).setPendingChanges(obj10);
                const obj3 = showEnrollmentError(ref[9]);
                const result1 = showEnrollmentError(ref[10]).markHexagonCampaignPerkApplied(
                  constants.DISPLAY_NAME_STYLE,
                );
                let flag = true;
                const obj5 = showEnrollmentError(ref[10]);
              } else {
                flag = false;
                if (closure_129_0 != null) {
                  closure_129_0();
                  flag = false;
                }
              }
            }
          }
        } catch (tmp39) {
          if (tmp4 === ref) {
            c4 = tmp2;
            throw tmp39;
          } else {
            c3 = tmp;
          }
        }
      }
    }),
    items,
  );
  obj3.removeCampaignDisplayNameStyle = callback;
  return obj3;
}
