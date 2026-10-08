// discord_app/modules/verification/native/components/ChangeEmailComplete.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import _modDef6279 from "../../../../../_runtime/metro/06279__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function handlePress() {
  resetChangeEmailStore();
  EmailVerificationModalActionCreatorsDefault.close();
}
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const resetChangeEmailStore = fn(6202).resetChangeEmailStore;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  contentContainer: {
    flexGrow: 2,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
    gap: 20,
    alignItems: "center",
  },
  image: { height: 190, width: 220, resizeMode: "contain" },
  title: { textAlign: "center" },
  body: { textAlign: "center" },
  bodyInner: { gap: 2 },
  tooltip: null,
};
let obj3 = {
  flexGrow: 2,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_16,
  gap: 20,
  alignItems: "center",
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.tooltip = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: "100%",
  padding: 12,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  width: "100%",
  padding: 12,
  borderWidth: 1,
  borderStyle: "solid",
  borderRadius: nativeDefault.radii.sm,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailComplete.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChangeEmailComplete(email) {
      const cResult = c.c(23);
      email = email.email;
      const tmp4 = closure_9();
      if (cResult[0] !== tmp4.image) {
        const obj2 = { style: tmp4.image, source: _modDef6279 };
        const tmp9 = React5(React4, obj2);
        cResult[0] = tmp4.image;
        cResult[1] = tmp9;
        let tmp5 = tmp9;
      } else {
        tmp5 = cResult[1];
      }
      ({ bodyInner, title } = tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["8O+nF7"]);
        cResult[2] = stringResult;
        let tmp10 = stringResult;
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
        const tmp14 = React5(Text_Text.Text, obj3);
        cResult[3] = tmp4.title;
        cResult[4] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== email) {
        const intl2 = util.intl;
        const obj4 = { email };
        const formatResult = intl2.format(util.t.Zvx0O3, obj4);
        cResult[5] = email;
        cResult[6] = formatResult;
        let tmp15 = formatResult;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp4.body) {
        if (cResult[8] === tmp15) {
          let tmp17 = cResult[9];
        }
        if (cResult[10] === tmp4.bodyInner) {
          if (cResult[11] === tmp12) {
            if (cResult[12] === tmp17) {
              let tmp19 = cResult[13];
            }
            const _Symbol = Symbol;
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult1 = intl3.string(util.t.yb7itQ);
              cResult[14] = stringResult1;
              let tmp23 = stringResult1;
            } else {
              tmp23 = cResult[14];
            }
            if (cResult[15] !== tmp4.tooltip) {
              const obj5 = { style: tmp4.tooltip, variant: "text-sm/normal", children: tmp23 };
              const tmp27 = React5(Text_Text.Text, obj5);
              cResult[15] = tmp4.tooltip;
              cResult[16] = tmp27;
              let tmp25 = tmp27;
            } else {
              tmp25 = cResult[16];
            }
            const _Symbol2 = Symbol;
            if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
              const obj6 = { text: null, onPress: null, grow: true };
              const intl4 = util.intl;
              obj6.text = intl4.string(util.t.BddRzS);
              obj6.onPress = handlePress;
              const tmp31 = React5(components_Button_Button.Button, obj6);
              cResult[17] = tmp31;
              let tmp28 = tmp31;
            } else {
              tmp28 = cResult[17];
            }
            if (cResult[18] === tmp4.contentContainer) {
              if (cResult[19] === tmp19) {
                if (cResult[20] === tmp25) {
                  if (cResult[21] === tmp5) {
                    let tmp32 = cResult[22];
                  }
                  return tmp32;
                }
              }
            }
            const obj7 = {
              keyboardShouldPersistTaps: "handled",
              alwaysBounceVertical: false,
              contentContainerStyle: tmp4.contentContainer,
              children: null,
            };
            const items = [tmp5, tmp19, tmp25, tmp28];
            obj7.children = items;
            const tmp35 = closure_1_8(hasOwnProperty, obj7);
            cResult[18] = tmp4.contentContainer;
            cResult[19] = tmp19;
            cResult[20] = tmp25;
            cResult[21] = tmp5;
            cResult[22] = tmp35;
            tmp32 = tmp35;
          }
        }
        const obj8 = { style: bodyInner, children: null };
        const items1 = [tmp12, tmp17];
        obj8.children = items1;
        const tmp22 = closure_1_8(React3, obj8);
        cResult[10] = tmp4.bodyInner;
        cResult[11] = tmp12;
        cResult[12] = tmp17;
        cResult[13] = tmp22;
        tmp19 = tmp22;
      }
      const tmp18 = React5(Text_Text.Text, {
        style: tmp4.body,
        variant: "text-sm/medium",
        color: "text-default",
        children: tmp15,
      });
      cResult[7] = tmp4.body;
      cResult[8] = tmp15;
      cResult[9] = tmp18;
      tmp17 = tmp18;
    }
  : function ChangeEmailComplete(email) {
      const tmp = closure_9();
      const obj = {
        keyboardShouldPersistTaps: "handled",
        alwaysBounceVertical: false,
        contentContainerStyle: tmp.contentContainer,
        children: null,
      };
      const items = [React5(React4, { style: tmp.image, source: _modDef6279 }), , ,];
      const obj3 = { style: tmp.bodyInner, children: null };
      const obj4 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.string(util.t["8O+nF7"]);
      const items1 = [React5(Text_Text.Text, obj4)];
      const obj5 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj5.children = intl2.format(util.t.Zvx0O3, { email: email.email });
      items1[1] = React5(Text_Text.Text, obj5);
      obj3.children = items1;
      items[1] = closure_1_8(React3, obj3);
      const obj6 = { style: tmp.tooltip, variant: "text-sm/normal", children: null };
      const intl3 = util.intl;
      obj6.children = intl3.string(util.t.yb7itQ);
      items[2] = React5(Text_Text.Text, obj6);
      const obj7 = { text: null, onPress: null, grow: true };
      const intl4 = util.intl;
      obj7.text = intl4.string(util.t.BddRzS);
      obj7.onPress = handlePress;
      items[3] = React5(components_Button_Button.Button, obj7);
      obj.children = items;
      return closure_1_8(hasOwnProperty, obj);
    };
