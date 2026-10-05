// discord_app/modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import _modDef2883 from "../intl/DisplayNameStyles.messages.js";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import DisplayNameLockeAbstractUI from "../../../design/components/mana-assets/native/generated/DisplayNameLockeAbstractUI.native.tsx";
import react_mod from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

let react = react_mod;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({
  coachmarkImageContainer: { alignItems: "center", justifyContent: "center" },
});
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentUser;
      let markAsDismissed;
      let tmp11;
      let tmp15;
      let tmp19;
      let tmp4;
      let tmp5;
      let tmp8;
      let visible;
      const obj = markAsDismissed(576);
      const cResult = obj.c(16);
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
      const tmpResult = markAsDismissed(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] !== stateFromStores) {
        const obj3 = PremiumUtilsDefault;
        const result = obj3.canUsePremiumProfileCustomization(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = result;
        tmp8 = result;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp8) {
        let stringResult;
        const intl = markAsDismissed(1126).intl;
        const string = intl.string;
        const tmp13 = _modDef2883;
        if (tmp8) {
          stringResult = string(tmp13.h6sykk);
        } else {
          stringResult = string(tmp13.M5amXH);
        }
        cResult[4] = tmp8;
        cResult[5] = stringResult;
        tmp11 = stringResult;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp8) {
        let string2Result;
        const intl2 = markAsDismissed(1126).intl;
        const string2 = intl2.string;
        const tmp17 = _modDef2883;
        if (tmp8) {
          string2Result = string2(tmp17.TyUdka);
        } else {
          string2Result = string2(tmp17.dluV0R);
        }
        cResult[6] = tmp8;
        cResult[7] = string2Result;
        tmp15 = string2Result;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] !== markAsDismissed) {
        const fn2 = function _() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        };
        cResult[8] = markAsDismissed;
        cResult[9] = fn2;
        tmp19 = fn2;
      } else {
        tmp19 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return <closure_1_9 />;
          }
        }
        cResult[10] = U;
      } else {
        class U {
          constructor() {
            return <closure_1_9 />;
          }
        }
      }
      if (cResult[11] === tmp15) {
        class U {
          constructor() {
            return <closure_1_9 />;
          }
        }
      }
      const obj2 = {
        title: tmp11,
        description: tmp15,
        visible,
        position: "bottom",
        onDismiss: tmp19,
        renderImgComponent: U,
      };
      cResult[11] = tmp15;
      cResult[12] = tmp19;
      cResult[13] = tmp11;
      cResult[14] = visible;
      cResult[15] = obj2;
    }
  : (visible) => {
      let currentUser;
      let description;
      let string2Result;
      let stringResult;
      let title;
      visible = visible.visible;
      const markAsDismissed = visible.markAsDismissed;
      dependencyMap = undefined;
      react = undefined;
      let onDismiss;
      const targetRef = visible.targetRef;
      const items = [UserStore];
      const obj = visible(504);
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj2 = markAsDismissed(4528);
      const result = obj2.canUsePremiumProfileCustomization(stateFromStores);
      const intl = visible(1126).intl;
      const string = intl.string;
      const tmp6 = markAsDismissed(2883);
      const tmp4 = markAsDismissed;
      if (result) {
        stringResult = string(tmp6.h6sykk);
      } else {
        stringResult = string(tmp6.M5amXH);
      }
      dependencyMap = stringResult;
      const intl2 = tmp(1126).intl;
      const string2 = intl2.string;
      const tmp4Result = tmp4(2883);
      if (result) {
        string2Result = string2(tmp4Result.TyUdka);
      } else {
        string2Result = string2(tmp4Result.dluV0R);
      }
      react = string2Result;
      const items1 = [markAsDismissed];
      onDismiss = react.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items1);
      const items2 = [stringResult, string2Result, visible, onDismiss];
      const memo = react.useMemo(
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
      const tmpResult = visible(9882);
      const coachmark = tmpResult.useCoachmark(targetRef, memo);
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(3);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(DisplayNameLockeAbstractUI.DisplayNameLockeAbstractUI, {
          width: 160,
          height: 68,
          resizeMode: "contain",
        });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.coachmarkImageContainer) {
        const tmp11 = <View style={tmp4.coachmarkImageContainer}>{first}</View>;
        cResult[1] = tmp4.coachmarkImageContainer;
        cResult[2] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : () => (
      <View style={closure_8().coachmarkImageContainer}>
        {jsx(DisplayNameLockeAbstractUI.DisplayNameLockeAbstractUI, { width: 160, height: 68, resizeMode: "contain" })}
      </View>
    );
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesFlywheelProfileCoachmark.tsx",
);

export default tmp2;
