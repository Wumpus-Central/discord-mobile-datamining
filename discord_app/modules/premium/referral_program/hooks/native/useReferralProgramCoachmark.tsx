// discord_app/modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import openUserSettings from "../../../../user_settings/core/native/openUserSettings.tsx";
import _modDef17273 from "../../../../../../_runtime/metro/17273__.js";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_9 = createStyles.createStyles({
  coachmarkImageContainer: { alignItems: "center", justifyContent: "center" },
  coachmarkImage: { width: 200, height: 112 },
});
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ReferralProgramCoachmarkImg() {
      const cResult = c.c(5);
      const tmp3 = closure_9();
      if (cResult[0] !== tmp3.coachmarkImage) {
        const obj2 = { source: _modDef17273, style: tmp3.coachmarkImage };
        const tmp8 = jsx(FastImageDefault, { source: _modDef17273, style: tmp3.coachmarkImage });
        cResult[0] = tmp3.coachmarkImage;
        cResult[1] = tmp8;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp3.coachmarkImageContainer) {
        if (cResult[3] === tmp4) {
          let tmp9 = cResult[4];
        }
        return tmp9;
      }
      const tmp10 = <View style={tmp3.coachmarkImageContainer}>{tmp4}</View>;
      cResult[2] = tmp3.coachmarkImageContainer;
      cResult[3] = tmp4;
      cResult[4] = tmp10;
      tmp9 = tmp10;
      const obj3 = { style: tmp3.coachmarkImageContainer, children: tmp4 };
    }
  : function ReferralProgramCoachmarkImg() {
      const tmp = closure_9();
      const obj = { style: tmp.coachmarkImageContainer, children: null };
      const obj2 = { source: _modDef17273, style: tmp.coachmarkImage };
      obj.children = jsx(FastImageDefault, { source: _modDef17273, style: tmp.coachmarkImage });
      return <View style={tmp.coachmarkImageContainer}>{null}</View>;
    };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/premium/referral_program/hooks/native/useReferralProgramCoachmark.tsx",
);

export const useReferralProgramCoachmark = ReactCompilerGating.isReactCompilerEnabled()
  ? function useReferralProgramCoachmark(disabled) {
      const cResult = require("c").c(18);
      disabled = disabled.disabled;
      const obj = require("c");
      let result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(
        require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK,
      );
      const obj2 = require("DismissibleContentUnsafeUtils");
      if (!result) {
        result = disabled;
      }
      const isEligibleSenderForReferralProgram =
        require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram(result);
      if (cResult[0] === disabled) {
        if (cResult[1] === isEligibleSenderForReferralProgram) {
          const tmp8 = _slicedToArray(tmp(7090).useSelectedDismissibleContent(cResult[2]), 2);
          _require = tmp9;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.USo4s7);
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t.zmcRl4);
            cResult[3] = stringResult;
            cResult[4] = stringResult1;
            let tmp12 = stringResult1;
            let tmp11 = stringResult;
          } else {
            tmp11 = cResult[3];
            tmp12 = cResult[4];
          }
          if (cResult[5] !== tmp8[1]) {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            cResult[5] = tmp9;
            cResult[6] = S;
          } else {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            const stringResult2 = obj5.string(tmp(1126).t.RzWDqY);
            cResult[7] = stringResult2;
            const tmp16 = stringResult2;
          } else {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          if (cResult[8] !== tmp8[1]) {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            cResult[8] = tmp9;
            cResult[9] = tmp19;
          } else {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          const _Symbol3 = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            cResult[10] = tmp21;
          } else {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          const tmp22 = tmp8[0] === tmp(2048).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
          if (cResult[11] === tmp22) {
            class S {
              constructor() {
                tmp = closure_0(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          const obj4 = {
            title: tmp11,
            description: tmp12,
            position: "top",
            offsetY: nativeDefault.space.PX_12,
            visible: tmp22,
            onDismiss: S,
            buttonVariant: "experimental_premium-primary",
            buttonLabel: tmp16,
            onButtonPress: tmp19,
            renderImgComponent: tmp21,
          };
          cResult[11] = tmp22;
          cResult[12] = S;
          cResult[13] = tmp19;
          cResult[14] = obj4;
          const tmpResult = tmp(7090);
        }
      }
      if (isEligibleSenderForReferralProgram) {
        class S {
          constructor() {
            tmp = closure_0(ContentDismissActionType.USER_DISMISS);
            return;
          }
        }
        cResult[0] = disabled;
        cResult[1] = isEligibleSenderForReferralProgram;
        cResult[2] = items;
      }
      items = [];
      const obj3 = require("useIsEligibleSenderForReferralProgram");
    }
  : function useReferralProgramCoachmark(disabled) {
      disabled = disabled.disabled;
      _require = undefined;
      let visible;
      let result = require("DismissibleContentUnsafeUtils").useIsDismissibleContentDismissed_UNSAFE(
        require("dismissible_content").DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK,
      );
      let obj = require("DismissibleContentUnsafeUtils");
      if (!result) {
        result = disabled;
      }
      const isEligibleSenderForReferralProgram =
        require("useIsEligibleSenderForReferralProgram").useIsEligibleSenderForReferralProgram(result);
      require("useSelectedDismissibleContent");
      if (isEligibleSenderForReferralProgram) {
        if (!disabled) {
          let items = [tmp(2048).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK];
        }
        const tmp8 = _slicedToArray(tmp6(items), 2);
        _require = tmp9;
        const tmp10 = tmp8[0] === tmp(2048).DismissibleContent.REFERRAL_TRIAL_MOBILE_SENDER_COACHMARK;
        visible = tmp10;
        const items1 = [tmp10, tmp8[1]];
        let tmp13 = null;
        if (tmp10) {
          const obj3 = { props: tmp12 };
          tmp13 = obj3;
        }
        return tmp13;
      }
      items = [];
      const obj2 = require("useIsEligibleSenderForReferralProgram");
    };
