// discord_app/modules/parent_tools/native/ConnectGuardianBottomSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import _modDef2521 from "../FamilyCenter.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import useOnNewPendingRequestDefault from "../hooks/useOnNewPendingRequest.tsx";
import ConnectGuardianCard2 from "ConnectGuardianCard.tsx";
import react from "../../../../_runtime/00019_react.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
let closure_6 = FamilyCenterConstants.CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = "https://support.discord.com/hc/articles/14155060633623";
let createStyles = createStyles_mod;
let obj = { container: obj2, info: obj3, centered: { textAlign: "center" }, cardContainer: { alignItems: "center" } };
obj2 = {
  paddingHorizontal: nativeDefault.space.PX_24,
  paddingVertical: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_24,
};
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let body;
      let expiresAt;
      let items2;
      let linkCode;
      let onRefresh;
      let title;
      let tmp10;
      let tmp5;
      let tmp6;
      let tmp9;
      let obj = react2;
      const cResult = obj.c(31);
      ({ onRefresh, title, body } = arg0);
      ({ linkCode, expiresAt } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore];
        const fn = function p() {
          return FamilyCenterStore.getLinkCode();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FamilyCenterStore];
        class A {
          constructor() {
            return FamilyCenterStore.getLinkCodeExpiresAt();
          }
        }
        cResult[2] = items1;
        cResult[3] = A;
        tmp10 = A;
        tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult2 = useStateFromStores;
      let stateFromStores1 = tmpResult2.useStateFromStores(tmp9, tmp10);
      if (stateFromStores1 == null) {
        stateFromStores1 = expiresAt;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(closure_1_6);
          }
        }
        cResult[4] = R;
        class A {
          constructor() {
            return FamilyCenterStore.getLinkCodeExpiresAt();
          }
        }
      } else {
        class R {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(closure_1_6);
          }
        }
      }
      useOnNewPendingRequestDefault(tmp14);
      if (cResult[5] !== title) {
        let stringResult;
        class R {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(closure_1_6);
          }
        }
        if (title == null) {
          class R {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(closure_1_6);
            }
          }
          stringResult = obj4.string(_modDef2521.aCUVfL);
        }
        class A {
          constructor() {
            return FamilyCenterStore.getLinkCodeExpiresAt();
          }
        }
        cResult[6] = stringResult;
      } else {
        class R {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(closure_1_6);
          }
        }
      }
      if (cResult[7] === tmp4.centered) {
        class R {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideActionSheet(closure_1_6);
          }
        }
        if (cResult[10] !== body) {
          let formatResult;
          class R {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(closure_1_6);
            }
          }
          if (body == null) {
            class R {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(closure_1_6);
              }
            }
            const format = tmp23.format;
            const obj2 = { link };
            class A {
              constructor() {
                return FamilyCenterStore.getLinkCodeExpiresAt();
              }
            }
            formatResult = format(_modDef2521["2O6ltn"], obj2);
          }
          class A {
            constructor() {
              return FamilyCenterStore.getLinkCodeExpiresAt();
            }
          }
          cResult[11] = formatResult;
        } else {
          class R {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(closure_1_6);
            }
          }
        }
        if (cResult[12] === tmp4.centered) {
          class R {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet(closure_1_6);
            }
          }
          if (cResult[15] === tmp4.info) {
            class R {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                obj.hideActionSheet(closure_1_6);
              }
            }
          }
          class A {
            constructor() {
              return FamilyCenterStore.getLinkCodeExpiresAt();
            }
          }
          const obj3 = { style: tmp4.info, children: items2 };
          items2 = [tmp19, tmp24];
          cResult[15] = tmp4.info;
          cResult[16] = tmp19;
          cResult[17] = tmp24;
          cResult[18] = metroImportAll(View, obj3);
          const tmp28 = metroImportAll(View, obj3);
        }
        class A {
          constructor() {
            return FamilyCenterStore.getLinkCodeExpiresAt();
          }
        }
        const obj5 = { style: tmp4.centered, variant: "text-md/medium", color: "text-default", children: tmp21 };
        cResult[12] = tmp4.centered;
        cResult[13] = tmp21;
        cResult[14] = metroImportDefault(Text_Text.Text, obj5);
        const tmp25 = metroImportDefault(Text_Text.Text, obj5);
      }
      const obj6 = {
        style: tmp4.centered,
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: tmp17,
      };
      cResult[7] = tmp4.centered;
      cResult[8] = tmp17;
      cResult[9] = metroImportDefault(Text_Text.Text, obj6);
      const tmp20 = metroImportDefault(Text_Text.Text, obj6);
    }
  : (arg0) => {
      let ConnectGuardianCard;
      let body;
      let expiresAt;
      let intl3;
      let items2;
      let items3;
      let linkCode;
      let obj9;
      let onRefresh;
      let title;
      ({ title, body } = arg0);
      ({ linkCode, expiresAt, onRefresh } = arg0);
      const tmp = closure_10();
      let obj = useStateFromStores;
      const items = [FamilyCenterStore];
      let stateFromStores = obj.useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
      const items1 = [FamilyCenterStore];
      const obj2 = useStateFromStores;
      let stateFromStores1 = obj2.useStateFromStores(items1, () => FamilyCenterStore.getLinkCodeExpiresAt());
      const callback = react.useCallback(() => {
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet(closure_1_6);
      }, []);
      useOnNewPendingRequestDefault(callback);
      const obj3 = { style: tmp.container, children: items3 };
      const obj4 = { style: tmp.info, children: items2 };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      const obj5 = {
        style: tmp.centered,
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: title,
      };
      const Text = Text_Text.Text;
      if (title == null) {
        const intl = intl4.intl;
        title = intl.string(_modDef2521.aCUVfL);
      }
      items2 = [metroImportDefault(Text, obj5)];
      const obj6 = { style: tmp.centered, variant: "text-md/medium", color: "text-default", children: body };
      const Text2 = Text_Text.Text;
      if (body == null) {
        const intl2 = intl4.intl;
        const obj7 = { link };
        body = intl2.format(_modDef2521["2O6ltn"], obj7);
      }
      items2[1] = metroImportDefault(Text2, obj6);
      items3 = [metroImportAll(View, obj4), ,];
      const obj8 = { style: tmp.cardContainer, children: metroImportDefault(ConnectGuardianCard, obj9) };
      ConnectGuardianCard = ConnectGuardianCard2.ConnectGuardianCard;
      if (stateFromStores == null) {
        stateFromStores = linkCode;
      }
      obj9 = { linkCode: stateFromStores, expiresAt: stateFromStores1, onRefresh };
      if (stateFromStores1 == null) {
        stateFromStores1 = expiresAt;
      }
      const obj10 = { startExpanded: true, children: metroImportAll(View, obj3) };
      items3[1] = metroImportDefault(View, obj8);
      const obj11 = { variant: "secondary", size: "md", text: intl3.string(_modDef2521.Hsm5IF), onPress: callback };
      const Button = components_Button_Button.Button;
      intl3 = intl4.intl;
      items3[2] = metroImportDefault(Button, obj11);
      return metroImportDefault(BottomSheet, obj10);
    };
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default tmp4;
