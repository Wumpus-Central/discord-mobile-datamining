// discord_app/modules/app_icons/native/AppIconsCoachmark.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AssetRegistryDefault from "../../../../_runtime/09642_AssetRegistry.js";
import AppIconUtils from "AppIconUtils.tsx";
import AssetRegistryDefault2 from "../../../../_runtime/17107_AssetRegistry.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, markAsDismissed;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
({ Image: closure_4, View: hasOwnProperty } = react_native);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  info: { alignItems: "center" },
  image: { alignSelf: "center", marginBottom: 20 },
  nitroWheel: { marginRight: 8 },
  titleContainer: { display: "flex", flexDirection: "row", alignItems: "center" },
  subtitle: { marginTop: 8, textAlign: "center" },
  footer: obj3,
};
obj2 = { padding: nativeDefault.space.PX_16, paddingBottom: 0 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: 20, gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let currentUser;
      let intl;
      let items1;
      let items2;
      let tmp22;
      let tmp5;
      let tmp6;
      let tmp9;
      let obj = markAsDismissed(576);
      const cResult = obj.c(43);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function h() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = markAsDismissed(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const obj3 = PremiumUtilsDefault;
        const isPremiumResult = obj3.isPremium(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = isPremiumResult;
        tmp9 = isPremiumResult;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== markAsDismissed) {
        const fn2 = function b() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (markAsDismissed != null) {
            tmp3(ContentDismissActionType.PRIMARY);
          }
          const obj2 = AppIconUtils;
          const result = obj2.navigateToAppIconSettings();
        };
        cResult[4] = markAsDismissed;
        cResult[5] = fn2;
      }
      if (cResult[6] !== markAsDismissed) {
        class A {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp2(ContentDismissActionType.DISMISS);
            }
          }
        }
        cResult[6] = markAsDismissed;
        cResult[7] = A;
      } else {
        class A {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet();
            if (markAsDismissed != null) {
              tmp2(ContentDismissActionType.DISMISS);
            }
          }
        }
      }
      if (cResult[8] !== markAsDismissed) {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        cResult[8] = markAsDismissed;
        cResult[9] = D;
      } else {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
      }
      if (cResult[10] !== tmp4.image) {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        let obj2 = { source: AssetRegistryDefault2, style: tmp4.image };
        cResult[10] = tmp4.image;
        cResult[11] = closure_8(closure_4, obj2);
        const tmp18 = closure_8(closure_4, obj2);
      } else {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
      }
      if (cResult[12] !== tmp4.nitroWheel) {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        const obj4 = {
          source: AssetRegistryDefault,
          size: markAsDismissed(1188).IconSizes.MEDIUM,
          style: tmp4.nitroWheel,
          disableColor: true,
        };
        const Icon = tmp(1188).Icon;
        cResult[12] = tmp4.nitroWheel;
        cResult[13] = closure_8(Icon, obj4);
        const tmp21 = closure_8(Icon, obj4);
      } else {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        const obj5 = {
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: intl.string(markAsDismissed(1126).t.EfA4Cq),
        };
        const Text = tmp(4886).Text;
        intl = tmp(1126).intl;
        const tmp23 = closure_8(Text, obj5);
        cResult[14] = tmp23;
        tmp22 = tmp23;
      } else {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
      }
      if (cResult[15] === tmp4.titleContainer) {
        class D {
          constructor() {
            return markAsDismissed(ContentDismissActionType.DISMISS);
          }
        }
        if (cResult[18] !== tmp9) {
          class D {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
          const string = tmp27.string;
          const t = tmp(1126).t;
          if (tmp9) {
            class D {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
          } else {
            class D {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
          }
          cResult[18] = tmp9;
          cResult[19] = tmp28;
        } else {
          class D {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
        }
        if (cResult[20] === tmp4.subtitle) {
          class D {
            constructor() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            }
          }
          if (cResult[23] === tmp4.info) {
            class D {
              constructor() {
                return markAsDismissed(ContentDismissActionType.DISMISS);
              }
            }
          }
          const obj6 = { style: tmp4.info, children: items1 };
          items1 = [tmp15, tmp24, tmp29];
          cResult[23] = tmp4.info;
          cResult[24] = tmp24;
          cResult[25] = tmp29;
          cResult[26] = tmp15;
          cResult[27] = closure_9(closure_5, obj6);
          const tmp35 = closure_9(closure_5, obj6);
        }
        const obj7 = { variant: "text-md/normal", color: "text-default", style: tmp4.subtitle, children: tmp28 };
        cResult[20] = tmp4.subtitle;
        cResult[21] = tmp28;
        cResult[22] = closure_8(markAsDismissed(4886).Text, obj7);
        const tmp31 = closure_8(markAsDismissed(4886).Text, obj7);
      }
      const obj8 = { style: tmp4.titleContainer, children: items2 };
      items2 = [tmp19, tmp22];
      cResult[15] = tmp4.titleContainer;
      cResult[16] = tmp19;
      cResult[17] = closure_9(closure_5, obj8);
      const tmp25 = closure_9(closure_5, obj8);
    }
  : (markAsDismissed) => {
      let currentUser;
      let intl;
      let intl3;
      let intl4;
      let items2;
      let items3;
      let items4;
      let items5;
      let stringResult;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const tmp = closure_10();
      const tmp2 = markAsDismissed;
      let obj = markAsDismissed(504);
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj2 = PremiumUtilsDefault;
      const items1 = [markAsDismissed];
      const isPremiumResult = obj2.isPremium(stateFromStores);
      const callback = react.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        if (markAsDismissed != null) {
          tmp2(ContentDismissActionType.DISMISS);
        }
      }, items1);
      const obj3 = {
        onDismiss() {
          return markAsDismissed(ContentDismissActionType.DISMISS);
        },
        contentStyles: tmp.container,
        children: items4,
      };
      const obj4 = { style: tmp.info, children: items2 };
      const obj5 = { source: AssetRegistryDefault2, style: tmp.image };
      BottomSheet = markAsDismissed(6645).BottomSheet;
      items2 = [closure_8(closure_4, obj5), ,];
      const obj6 = { style: tmp.titleContainer, children: items3 };
      const obj7 = {
        source: AssetRegistryDefault,
        size: markAsDismissed(1188).IconSizes.MEDIUM,
        style: tmp.nitroWheel,
        disableColor: true,
      };
      const Icon = markAsDismissed(1188).Icon;
      items3 = [closure_8(Icon, obj7)];
      const obj8 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(markAsDismissed(1126).t.EfA4Cq),
      };
      const Text = markAsDismissed(4886).Text;
      intl = markAsDismissed(1126).intl;
      items3[1] = closure_8(Text, obj8);
      items2[1] = closure_9(closure_5, obj6);
      const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.subtitle, children: stringResult };
      const Text2 = markAsDismissed(4886).Text;
      const intl2 = markAsDismissed(1126).intl;
      const string = intl2.string;
      const t = markAsDismissed(1126).t;
      if (isPremiumResult) {
        stringResult = string(t.IgchKK);
      } else {
        stringResult = string(t.D0XzaS);
      }
      items2[2] = closure_8(Text2, obj9);
      items4 = [closure_9(closure_5, obj4)];
      const obj10 = { style: tmp.footer, children: items5 };
      const obj11 = {
        text: intl3.string(tmp2(1126).t.Pt547C),
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          if (markAsDismissed != null) {
            tmp3(ContentDismissActionType.PRIMARY);
          }
          const obj2 = AppIconUtils;
          const result = obj2.navigateToAppIconSettings();
        },
      };
      const Button = tmp2(5594).Button;
      intl3 = tmp2(1126).intl;
      items5 = [closure_8(Button, obj11)];
      const obj12 = { variant: "secondary", text: intl4.string(tmp2(1126).t.iSrIIZ), onPress: callback };
      const Button2 = tmp2(5594).Button;
      intl4 = tmp2(1126).intl;
      items5[1] = closure_8(Button2, obj12);
      items4[1] = closure_9(closure_5, obj10);
      return closure_9(BottomSheet, obj3);
    };
let result = size.fileFinishedImporting("modules/app_icons/native/AppIconsCoachmark.tsx");

export default tmp5;
