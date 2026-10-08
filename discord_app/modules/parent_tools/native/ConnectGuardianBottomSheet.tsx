// discord_app/modules/parent_tools/native/ConnectGuardianBottomSheet.tsx
import useStateFromStores from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2565 from "../FamilyCenter.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import useOnNewPendingRequestDefault from "../hooks/useOnNewPendingRequest.tsx";
import ConnectGuardianCard from "ConnectGuardianCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const View = fn(17).View;
let closure_6 = fn(7248).CONNECT_GUARDIAN_BOTTOM_SHEET_KEY;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = "https://support.discord.com/hc/articles/14155060633623";
const createStyles = fn(5090);
let obj2 = {
  container: {
    paddingHorizontal: nativeDefault.space.PX_24,
    paddingVertical: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_24,
  },
  info: null,
  centered: null,
  cardContainer: null,
};
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_24,
  paddingVertical: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_24,
};
obj2.info = { alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.centered = { textAlign: "center" };
obj2.cardContainer = { alignItems: "center" };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/ConnectGuardianBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConnectGuardianBottomSheet(arg0) {
      const cResult = c.c(31);
      ({ onRefresh, title, body } = arg0);
      ({ linkCode, expiresAt } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore];
        class C {
          constructor() {
            return closure_1_5.getLinkCode();
          }
        }
        cResult[0] = items;
        cResult[1] = C;
        tmp5 = items;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const stateFromStores = useStateFromStores.useStateFromStores(tmp5, C);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [FamilyCenterStore];
        class A {
          constructor() {
            return closure_1_5.getLinkCodeExpiresAt();
          }
        }
        cResult[2] = items1;
        cResult[3] = A;
        let tmp10 = A;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = useStateFromStores;
      let stateFromStores1 = useStateFromStores.useStateFromStores(tmp9, tmp10);
      if (stateFromStores1 == null) {
        stateFromStores1 = expiresAt;
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            hideActionSheetResult = obj.hideActionSheet(closure_1_6);
            return;
          }
        }
        cResult[4] = B;
        class A {
          constructor() {
            return closure_1_5.getLinkCodeExpiresAt();
          }
        }
      } else {
        class B {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            hideActionSheetResult = obj.hideActionSheet(closure_1_6);
            return;
          }
        }
      }
      useOnNewPendingRequestDefault(tmp14);
      if (cResult[5] !== title) {
        class B {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            hideActionSheetResult = obj.hideActionSheet(closure_1_6);
            return;
          }
        }
        if (title == null) {
          class B {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              hideActionSheetResult = obj.hideActionSheet(closure_1_6);
              return;
            }
          }
          const stringResult = obj4.string(_modDef2565.aCUVfL);
        }
        class A {
          constructor() {
            return closure_1_5.getLinkCodeExpiresAt();
          }
        }
        cResult[6] = stringResult;
      } else {
        class B {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            hideActionSheetResult = obj.hideActionSheet(closure_1_6);
            return;
          }
        }
      }
      if (cResult[7] === tmp4.centered) {
        class B {
          constructor() {
            obj = closure_1_1(closure_1_2[10]);
            hideActionSheetResult = obj.hideActionSheet(closure_1_6);
            return;
          }
        }
        if (cResult[10] !== body) {
          class B {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              hideActionSheetResult = obj.hideActionSheet(closure_1_6);
              return;
            }
          }
          if (body == null) {
            class B {
              constructor() {
                obj = closure_1_1(closure_1_2[10]);
                hideActionSheetResult = obj.hideActionSheet(closure_1_6);
                return;
              }
            }
            const obj2 = { link: null };
            class A {
              constructor() {
                return closure_1_5.getLinkCodeExpiresAt();
              }
            }
            obj2.link = link;
            const formatResult = obj6.format(_modDef2565["2O6ltn"], obj2);
          }
          class A {
            constructor() {
              return closure_1_5.getLinkCodeExpiresAt();
            }
          }
          cResult[11] = formatResult;
        } else {
          class B {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              hideActionSheetResult = obj.hideActionSheet(closure_1_6);
              return;
            }
          }
        }
        if (cResult[12] === tmp4.centered) {
          class B {
            constructor() {
              obj = closure_1_1(closure_1_2[10]);
              hideActionSheetResult = obj.hideActionSheet(closure_1_6);
              return;
            }
          }
          if (cResult[15] === tmp4.info) {
            class B {
              constructor() {
                obj = closure_1_1(closure_1_2[10]);
                hideActionSheetResult = obj.hideActionSheet(closure_1_6);
                return;
              }
            }
          }
          class A {
            constructor() {
              return closure_1_5.getLinkCodeExpiresAt();
            }
          }
          const obj3 = { style: tmp4.info, children: null };
          const items2 = [tmp19, tmp23];
          obj3.children = items2;
          const tmp27 = closure_1_8(View, obj3);
          cResult[15] = tmp4.info;
          cResult[16] = tmp19;
          cResult[17] = tmp23;
          cResult[18] = tmp27;
        }
        class A {
          constructor() {
            return closure_1_5.getLinkCodeExpiresAt();
          }
        }
        const obj5 = { style: tmp4.centered, variant: "text-md/medium", color: "text-default", children: tmp21 };
        const tmp24 = React5(Text_Text.Text, obj5);
        cResult[12] = tmp4.centered;
        cResult[13] = tmp21;
        cResult[14] = tmp24;
      }
      const tmp20 = React5(Text_Text.Text, {
        style: tmp4.centered,
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: tmp17,
      });
      cResult[7] = tmp4.centered;
      cResult[8] = tmp17;
      cResult[9] = tmp20;
      const obj7 = {
        style: tmp4.centered,
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: tmp17,
      };
      const tmpResult2 = useStateFromStores;
    }
  : function ConnectGuardianBottomSheet(arg0) {
      ({ title, body } = arg0);
      ({ linkCode, expiresAt, onRefresh } = arg0);
      const tmp = closure_10();
      const items = [FamilyCenterStore];
      let stateFromStores = useStateFromStores.useStateFromStores(items, () => FamilyCenterStore.getLinkCode());
      const items1 = [FamilyCenterStore];
      let stateFromStores1 = useStateFromStores.useStateFromStores(items1, () =>
        FamilyCenterStore.getLinkCodeExpiresAt(),
      );
      const callback = noop.useCallback(() => {
        ActionSheetActionCreatorsDefault.hideActionSheet(closure_1_6);
      }, []);
      useOnNewPendingRequestDefault(callback);
      const obj3 = { style: tmp.container, children: null };
      const obj4 = { style: tmp.info, children: null };
      const obj5 = {
        style: tmp.centered,
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      if (title == null) {
        const intl = util.intl;
        title = intl.string(_modDef2565.aCUVfL);
      }
      obj5.children = title;
      const items2 = [React5(Text_Text.Text, obj5)];
      const obj6 = { style: tmp.centered, variant: "text-md/medium", color: "text-default", children: null };
      if (body == null) {
        const intl2 = util.intl;
        const obj7 = { link };
        body = intl2.format(_modDef2565["2O6ltn"], obj7);
      }
      obj6.children = body;
      items2[1] = React5(Text_Text.Text, obj6);
      obj4.children = items2;
      const items3 = [closure_1_8(View, obj4), ,];
      const obj8 = { style: tmp.cardContainer, children: null };
      if (stateFromStores == null) {
        stateFromStores = linkCode;
      }
      const obj9 = { linkCode: stateFromStores, expiresAt: null, onRefresh: null };
      if (stateFromStores1 == null) {
        stateFromStores1 = expiresAt;
      }
      const obj10 = { startExpanded: true, children: null };
      obj9.expiresAt = stateFromStores1;
      obj9.onRefresh = onRefresh;
      obj8.children = React5(ConnectGuardianCard.ConnectGuardianCard, obj9);
      items3[1] = React5(View, obj8);
      const obj11 = { variant: "secondary", size: "md", text: null, onPress: null };
      const intl3 = util.intl;
      obj11.text = intl3.string(_modDef2565.Hsm5IF);
      obj11.onPress = callback;
      items3[2] = React5(components_Button_Button.Button, obj11);
      obj3.children = items3;
      obj10.children = closure_1_8(View, obj3);
      return React5(Sheet_BottomSheet.BottomSheet, obj10);
    };
