// discord_app/modules/verification/native/components/ChangeEmailComplete.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import ChangeEmailStore from "../../ChangeEmailStore.tsx";
import AssetRegistryDefault from "../../../../../_runtime/06094_AssetRegistry.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let email;

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function handlePress() {
  resetChangeEmailStore();
  const obj = EmailVerificationModalActionCreatorsDefault;
  obj.close();
}
({ View: c3, Image: closure_4, ScrollView: hasOwnProperty } = react_native);
const resetChangeEmailStore = ChangeEmailStore.resetChangeEmailStore;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  contentContainer: obj2,
  image: { height: 190, width: 220, resizeMode: "contain" },
  title: { textAlign: "center" },
  body: { textAlign: "center" },
  bodyInner: { gap: 2 },
  tooltip: obj3,
};
obj2 = {
  flexGrow: 2,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  gap: 20,
  alignItems: "center",
};
createStyles = createStyles.createStyles;
obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: "100%",
  padding: 12,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_9 = createStyles(obj);
const tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (email) => {
      let bodyInner;
      let intl4;
      let items;
      let items1;
      let title;
      let tmp10;
      let tmp12;
      let tmp15;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(23);
      email = email.email;
      const tmp4 = closure_9();
      const contentContainer = tmp4.contentContainer;
      if (cResult[0] !== tmp4.image) {
        const obj2 = { style: tmp4.image, source: AssetRegistryDefault };
        const tmp9 = metroImportDefault(React3, obj2);
        cResult[0] = tmp4.image;
        cResult[1] = tmp9;
        tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      ({ bodyInner, title } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult = intl.string(intl5.t["8O+nF7"]);
        cResult[2] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp4.title) {
        const obj3 = {
          style: title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp10,
        };
        const tmp14 = metroImportDefault(Text_Text.Text, obj3);
        cResult[3] = tmp4.title;
        cResult[4] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[4];
      }
      const body = tmp4.body;
      if (cResult[5] !== email) {
        const intl2 = intl5.intl;
        const obj4 = { email };
        const formatResult = intl2.format(intl5.t.Zvx0O3, obj4);
        cResult[5] = email;
        cResult[6] = formatResult;
        tmp15 = formatResult;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp4.body) {
        let tmp17;
        if (cResult[8] === tmp15) {
          tmp17 = cResult[9];
        }
        if (cResult[10] === tmp4.bodyInner) {
          if (cResult[11] === tmp12) {
            let tmp19;
            let tmp23;
            let tmp25;
            let tmp28;
            if (cResult[12] === tmp17) {
              tmp19 = cResult[13];
            }
            const _Symbol = Symbol;
            const tooltip = tmp4.tooltip;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = intl5.intl;
              const stringResult1 = intl3.string(intl5.t.yb7itQ);
              cResult[14] = stringResult1;
              tmp23 = stringResult1;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] !== tmp4.tooltip) {
              const obj5 = { style: tooltip, variant: "text-sm/normal", children: tmp23 };
              const tmp27 = metroImportDefault(Text_Text.Text, obj5);
              cResult[15] = tmp4.tooltip;
              cResult[16] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { text: intl4.string(intl5.t.BddRzS), onPress: handlePress, grow: true };
              const Button = components_Button_Button.Button;
              intl4 = intl5.intl;
              const tmp31 = metroImportDefault(Button, obj6);
              cResult[17] = tmp31;
              tmp28 = tmp31;
            } else {
              tmp28 = cResult[17];
            }
            if (cResult[18] === tmp4.contentContainer) {
              if (cResult[19] === tmp19) {
                if (cResult[20] === tmp25) {
                  let tmp32;
                  if (cResult[21] === tmp5) {
                    tmp32 = cResult[22];
                  }
                  return tmp32;
                }
              }
            }
            const obj7 = {
              keyboardShouldPersistTaps: "handled",
              alwaysBounceVertical: false,
              contentContainerStyle: contentContainer,
              children: items,
            };
            items = [tmp5, tmp19, tmp25, tmp28];
            const tmp35 = metroImportAll(hasOwnProperty, obj7);
            cResult[18] = tmp4.contentContainer;
            cResult[19] = tmp19;
            cResult[20] = tmp25;
            cResult[21] = tmp5;
            cResult[22] = tmp35;
            tmp32 = tmp35;
          }
        }
        const obj8 = { style: bodyInner, children: items1 };
        items1 = [tmp12, tmp17];
        const tmp22 = metroImportAll(_false, obj8);
        cResult[10] = tmp4.bodyInner;
        cResult[11] = tmp12;
        cResult[12] = tmp17;
        cResult[13] = tmp22;
        tmp19 = tmp22;
      }
      const tmp18 = metroImportDefault(Text_Text.Text, {
        style: body,
        variant: "text-sm/medium",
        color: "text-default",
        children: tmp15,
      });
      cResult[7] = tmp4.body;
      cResult[8] = tmp15;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    }
  : (email) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      email = email.email;
      const tmp = closure_9();
      const obj = {
        keyboardShouldPersistTaps: "handled",
        alwaysBounceVertical: false,
        contentContainerStyle: tmp.contentContainer,
        children: items,
      };
      items = [, , ,];
      const obj2 = { style: tmp.image, source: AssetRegistryDefault };
      items[0] = metroImportDefault(React3, obj2);
      const obj3 = { style: tmp.bodyInner, children: items1 };
      const obj4 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(intl5.t["8O+nF7"]),
      };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      items1 = [metroImportDefault(Text, obj4)];
      const obj5 = {
        style: tmp.body,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl2.format(intl5.t.Zvx0O3, { email }),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl5.intl;
      items1[1] = metroImportDefault(Text2, obj5);
      items[1] = metroImportAll(_false, obj3);
      const obj6 = { style: tmp.tooltip, variant: "text-sm/normal", children: intl3.string(intl5.t.yb7itQ) };
      const Text3 = Text_Text.Text;
      intl3 = intl5.intl;
      items[2] = metroImportDefault(Text3, obj6);
      const obj7 = { text: intl4.string(intl5.t.BddRzS), onPress: handlePress, grow: true };
      const Button = components_Button_Button.Button;
      intl4 = intl5.intl;
      items[3] = metroImportDefault(Button, obj7);
      return metroImportAll(hasOwnProperty, obj);
    };
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default tmp7;
