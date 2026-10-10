// discord_app/modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx
import c from "../../../../_runtime/00576_c.js";
import _modDef2958 from "../intl/DisplayNameStyles.messages.js";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import DisplayNameLockeAbstractUI from "../../../design/components/mana-assets/native/generated/DisplayNameLockeAbstractUI.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({
  coachmarkImageContainer: { alignItems: "center", justifyContent: "center" },
});
fn(558);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function CoachmarkImage() {
      const cResult = c.c(3);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(DisplayNameLockeAbstractUI.DisplayNameLockeAbstractUI, {
          width: 160,
          height: 68,
          resizeMode: "contain",
        });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.coachmarkImageContainer) {
        const obj2 = { style: tmp4.coachmarkImageContainer, children: first };
        const tmp11 = <View style={tmp4.coachmarkImageContainer}>{first}</View>;
        cResult[1] = tmp4.coachmarkImageContainer;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : function CoachmarkImage() {
      return (
        <View style={closure_8().coachmarkImageContainer}>
          {jsx(DisplayNameLockeAbstractUI.DisplayNameLockeAbstractUI, {
            width: 160,
            height: 68,
            resizeMode: "contain",
          })}
        </View>
      );
    };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function DisplayNameStylesFlywheelProfileCoachmark(arg0) {
      const cResult = markAsDismissed(576).c(16);
      ({ visible, markAsDismissed } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function c() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = markAsDismissed(576);
      const stateFromStores = markAsDismissed(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const result = PremiumUtilsDefault.canUsePremiumProfileCustomization(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = result;
        let tmp8 = result;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp8) {
        const intl = markAsDismissed(1126).intl;
        const string = intl.string;
        let h6sykk = _modDef2958;
        if (tmp8) {
          h6sykk = h6sykk.h6sykk;
          let stringResult = string(h6sykk);
        } else {
          stringResult = string(h6sykk.M5amXH);
        }
        cResult[4] = tmp8;
        cResult[5] = stringResult;
      } else if (cResult[6] !== tmp8) {
        const intl2 = markAsDismissed(1126).intl;
        const string2 = intl2.string;
        let TyUdka = _modDef2958;
        if (tmp8) {
          TyUdka = TyUdka.TyUdka;
          let string2Result = string2(TyUdka);
        } else {
          string2Result = string2(TyUdka.dluV0R);
        }
        cResult[6] = tmp8;
        cResult[7] = string2Result;
      } else {
        if (cResult[8] !== markAsDismissed) {
          const fn2 = function _() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          };
          cResult[8] = markAsDismissed;
          cResult[9] = fn2;
          let tmp19 = fn2;
        } else {
          tmp19 = cResult[9];
        }
        const _Symbol = Symbol;
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class U {
            constructor() {
              return closure_1_7(closure_1_9, {});
            }
          }
          cResult[10] = U;
        } else {
          class U {
            constructor() {
              return closure_1_7(closure_1_9, {});
            }
          }
        }
        if (cResult[11] === cResult[7]) {
          class U {
            constructor() {
              return closure_1_7(closure_1_9, {});
            }
          }
        }
        const obj2 = {
          title: tmp11,
          description: cResult[7],
          visible,
          position: "bottom",
          onDismiss: tmp19,
          renderImgComponent: U,
        };
        cResult[11] = cResult[7];
        cResult[12] = tmp19;
        cResult[13] = tmp11;
        cResult[14] = visible;
        cResult[15] = obj2;
      }
      const tmpResult = markAsDismissed(504);
    }
  : function DisplayNameStylesFlywheelProfileCoachmark(visible) {
      visible = visible.visible;
      const markAsDismissed = visible.markAsDismissed;
      dependencyMap = undefined;
      noop = undefined;
      let onDismiss;
      const items = [UserStore];
      const stateFromStores = visible(504).useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj = visible(504);
      const tmp4 = markAsDismissed;
      const result = markAsDismissed(4769).canUsePremiumProfileCustomization(stateFromStores);
      const intl = visible(1126).intl;
      const string = intl.string;
      const tmp6 = markAsDismissed(2958);
      if (result) {
        let stringResult = string(tmp6.h6sykk);
      } else {
        stringResult = string(tmp6.M5amXH);
      }
      dependencyMap = stringResult;
      const intl2 = tmp(1126).intl;
      const string2 = intl2.string;
      const tmp4Result = tmp4(2958);
      if (result) {
        let string2Result = string2(tmp4Result.TyUdka);
      } else {
        string2Result = string2(tmp4Result.dluV0R);
      }
      noop = string2Result;
      const items1 = [markAsDismissed];
      onDismiss = noop.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const items2 = [stringResult, string2Result, visible, onDismiss];
      const memo = noop.useMemo(
        () => ({
          title,
          description,
          visible,
          position: "bottom",
          onDismiss,
          renderImgComponent() {
            return closure_1_7(closure_1_9, {});
          },
        }),
        items2,
      );
      const obj2 = markAsDismissed(4769);
      const coachmark = visible(9442).useCoachmark(visible.targetRef, memo);
      return null;
    };
