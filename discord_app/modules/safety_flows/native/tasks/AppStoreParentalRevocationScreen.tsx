// discord_app/modules/safety_flows/native/tasks/AppStoreParentalRevocationScreen.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import _modDef2787 from "../../SafetyFlows.messages.js";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ModalScreen2 from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent2 from "../../../../design/components/Modal/native/ModalContent.native.tsx";
import LinkExternalSmallIcon2 from "../../../../design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx";
import ModalActionButton2 from "../../../../design/components/Modal/native/ModalActionButton.native.tsx";
import ModalFooter2 from "../../../../design/components/Modal/native/ModalFooter.native.tsx";
import LogOutDisclaimerDefault from "../LogOutDisclaimer.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = "https://support.discord.com/hc/en-us/articles/42855178312087";
let obj = {
  content: { flexGrow: 1, width: "100%" },
  upperHalf: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  lowerHalf: { flex: 1 },
  text: { textAlign: "center" },
  body: obj2,
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let LinkExternalSmallIcon;
      let body;
      let content;
      let first;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj11;
      let obj8;
      let text;
      let text2;
      let tmp12;
      let tmp15;
      let tmp18;
      let tmp21;
      let tmp6;
      let tmp9;
      let upperHalf;
      let obj = react2;
      const cResult = obj.c(30);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          const obj = LinkingDefault;
          obj.openURL(closure_1_7);
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      ({ content, upperHalf, text } = tmp4);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult = intl.string(_modDef2787.Z87TFb);
        cResult[1] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] !== tmp4.text) {
        const obj2 = {
          accessibilityRole: "header",
          variant: "heading-xl/bold",
          color: "mobile-text-heading-primary",
          style: text,
          children: tmp6,
        };
        const tmp11 = hasOwnProperty(Text_Text.Text, obj2);
        cResult[2] = tmp4.text;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      ({ body, text: text2 } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl5.intl;
        const stringResult1 = intl2.string(_modDef2787.VS98dM);
        cResult[4] = stringResult1;
        tmp12 = stringResult1;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== tmp4.text) {
        const obj3 = { variant: "text-md/medium", color: "text-subtle", style: text2, children: tmp12 };
        const tmp17 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[5] = tmp4.text;
        cResult[6] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      const text3 = tmp4.text;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl5.intl;
        const stringResult2 = intl3.string(_modDef2787.BaI6L4);
        cResult[7] = stringResult2;
        tmp18 = stringResult2;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp4.text) {
        const obj4 = { variant: "text-md/medium", color: "text-subtle", style: text3, children: tmp18 };
        const tmp23 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[8] = tmp4.text;
        cResult[9] = tmp23;
        tmp21 = tmp23;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] === tmp4.body) {
        if (cResult[11] === tmp21) {
          let tmp24;
          if (cResult[12] === tmp15) {
            tmp24 = cResult[13];
          }
          if (cResult[14] === tmp24) {
            let tmp26;
            if (cResult[15] === tmp9) {
              tmp26 = cResult[16];
            }
            if (cResult[17] === tmp4.upperHalf) {
              let tmp30;
              let tmp34;
              if (cResult[18] === tmp26) {
                tmp30 = cResult[19];
              }
              if (cResult[20] !== tmp4.lowerHalf) {
                const obj5 = { style: tmp4.lowerHalf };
                const tmp37 = hasOwnProperty(View, obj5);
                cResult[20] = tmp4.lowerHalf;
                cResult[21] = tmp37;
                tmp34 = tmp37;
              } else {
                tmp34 = cResult[21];
              }
              if (cResult[22] === tmp4.content) {
                if (cResult[23] === tmp30) {
                  let tmp38;
                  let tmp43;
                  let tmp47;
                  let tmp52;
                  if (cResult[24] === tmp34) {
                    tmp38 = cResult[25];
                  }
                  const _Symbol = Symbol;
                  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp46 = hasOwnProperty(LogOutDisclaimerDefault, {});
                    cResult[26] = tmp46;
                    tmp43 = tmp46;
                  } else {
                    tmp43 = cResult[26];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { children: items };
                    items = [tmp43];
                    const ModalFooter = ModalFooter2.ModalFooter;
                    const obj7 = {
                      variant: "primary",
                      text: intl4.string(_modDef2787["6FXIU6"]),
                      icon: hasOwnProperty(LinkExternalSmallIcon, obj8),
                      iconPosition: "end",
                      onPress: first,
                    };
                    const ModalActionButton = ModalActionButton2.ModalActionButton;
                    intl4 = intl5.intl;
                    obj8 = { color: nativeDefault.colors.WHITE };
                    LinkExternalSmallIcon = LinkExternalSmallIcon2.LinkExternalSmallIcon;
                    items[1] = hasOwnProperty(ModalActionButton, obj7);
                    const tmp51 = metroRequire(ModalFooter, obj6);
                    cResult[27] = tmp51;
                    tmp47 = tmp51;
                  } else {
                    tmp47 = cResult[27];
                  }
                  if (cResult[28] !== tmp38) {
                    const obj9 = { children: items1 };
                    items1 = [tmp38, tmp47];
                    const tmp54 = metroRequire(ModalScreen2.ModalScreen, obj9);
                    cResult[28] = tmp38;
                    cResult[29] = tmp54;
                    tmp52 = tmp54;
                  } else {
                    tmp52 = cResult[29];
                  }
                  return tmp52;
                }
              }
              const obj10 = { children: metroRequire(View, obj11) };
              obj11 = { style: content, children: items2 };
              items2 = [tmp30, tmp34];
              const ModalContent = ModalContent2.ModalContent;
              const tmp42 = hasOwnProperty(ModalContent, obj10);
              cResult[22] = tmp4.content;
              cResult[23] = tmp30;
              cResult[24] = tmp34;
              cResult[25] = tmp42;
              tmp38 = tmp42;
            }
            const obj12 = { style: upperHalf, children: tmp26 };
            const tmp33 = hasOwnProperty(View, obj12);
            cResult[17] = tmp4.upperHalf;
            cResult[18] = tmp26;
            cResult[19] = tmp33;
            tmp30 = tmp33;
          }
          const obj13 = { align: "center", spacing: nativeDefault.space.PX_16, children: items3 };
          const Stack2 = Stack_Stack.Stack;
          items3 = [tmp9, tmp24];
          const tmp29 = metroRequire(Stack2, obj13);
          cResult[14] = tmp24;
          cResult[15] = tmp9;
          cResult[16] = tmp29;
          tmp26 = tmp29;
        }
      }
      const obj14 = { align: "center", spacing: nativeDefault.space.PX_16, style: body, children: items4 };
      const Stack = Stack_Stack.Stack;
      items4 = [tmp15, tmp21];
      const tmp25 = metroRequire(Stack, obj14);
      cResult[10] = tmp4.body;
      cResult[11] = tmp21;
      cResult[12] = tmp15;
      cResult[13] = tmp25;
      tmp24 = tmp25;
    }
  : () => {
      let LinkExternalSmallIcon;
      let Stack;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let obj13;
      let obj3;
      let obj5;
      const tmp = closure_8();
      const callback = react.useCallback(() => {
        const obj = LinkingDefault;
        obj.openURL(closure_1_7);
      }, []);
      let obj = { children: items3 };
      const ModalScreen = ModalScreen2.ModalScreen;
      const obj2 = { children: metroRequire(View, obj3) };
      obj3 = { style: tmp.content, children: items2 };
      const obj4 = { style: tmp.upperHalf, children: metroRequire(Stack, obj5) };
      const ModalContent = ModalContent2.ModalContent;
      obj5 = { align: "center", spacing: nativeDefault.space.PX_16, children: items };
      Stack = Stack_Stack.Stack;
      const obj6 = {
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.text,
        children: intl.string(_modDef2787.Z87TFb),
      };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      items = [hasOwnProperty(Text, obj6)];
      const obj7 = { align: "center", spacing: nativeDefault.space.PX_16, style: tmp.body, children: items1 };
      const Stack2 = Stack_Stack.Stack;
      const obj8 = {
        variant: "text-md/medium",
        color: "text-subtle",
        style: tmp.text,
        children: intl2.string(_modDef2787.VS98dM),
      };
      const Text2 = Text_Text.Text;
      intl2 = intl5.intl;
      items1 = [hasOwnProperty(Text2, obj8)];
      const obj9 = {
        variant: "text-md/medium",
        color: "text-subtle",
        style: tmp.text,
        children: intl3.string(_modDef2787.BaI6L4),
      };
      const Text3 = Text_Text.Text;
      intl3 = intl5.intl;
      items1[1] = hasOwnProperty(Text3, obj9);
      items[1] = metroRequire(Stack2, obj7);
      items2 = [hasOwnProperty(View, obj4)];
      const obj10 = { style: tmp.lowerHalf };
      items2[1] = hasOwnProperty(View, obj10);
      items3 = [hasOwnProperty(ModalContent, obj2)];
      const obj11 = { children: items4 };
      const ModalFooter = ModalFooter2.ModalFooter;
      items4 = [hasOwnProperty(LogOutDisclaimerDefault, {})];
      const obj12 = {
        variant: "primary",
        text: intl4.string(_modDef2787["6FXIU6"]),
        icon: hasOwnProperty(LinkExternalSmallIcon, obj13),
        iconPosition: "end",
        onPress: callback,
      };
      const ModalActionButton = ModalActionButton2.ModalActionButton;
      intl4 = intl5.intl;
      obj13 = { color: nativeDefault.colors.WHITE };
      LinkExternalSmallIcon = LinkExternalSmallIcon2.LinkExternalSmallIcon;
      items4[1] = hasOwnProperty(ModalActionButton, obj12);
      items3[1] = metroRequire(ModalFooter, obj11);
      return metroRequire(ModalScreen, obj);
    };
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AppStoreParentalRevocationScreen.tsx");

export default tmp3;
