// discord_app/modules/safety_flows/native/tasks/AppStoreParentalRevocationScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2859 from "../../SafetyFlows.messages.js";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ModalScreen from "../../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../../design/components/Modal/native/ModalContent.native.tsx";
import LinkExternalSmallIcon from "../../../../design/components/Icon/native/redesign/generated/LinkExternalSmallIcon.tsx";
import ModalFooter from "../../../../design/components/Modal/native/ModalFooter.native.tsx";
import ModalActionButton from "../../../../design/components/Modal/native/ModalActionButton.native.tsx";
import LogOutDisclaimerDefault from "../LogOutDisclaimer.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let c7 = "https://support.discord.com/hc/en-us/articles/42855178312087";
const createStyles = fn(5090);
let obj2 = {
  content: { flexGrow: 1, width: "100%" },
  upperHalf: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  lowerHalf: { flex: 1 },
  text: { textAlign: "center" },
  body: { paddingHorizontal: nativeDefault.space.PX_16 },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/native/tasks/AppStoreParentalRevocationScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function AppStoreParentalRevocationScreen() {
      const cResult = c.c(30);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function t() {
          LinkingDefault.openURL(closure_1_7);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      ({ content, upperHalf, text } = tmp4);
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef2859.Z87TFb);
        cResult[1] = stringResult;
        let tmp6 = stringResult;
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
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      ({ body, text: text2 } = tmp4);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(_modDef2859.VS98dM);
        cResult[4] = stringResult1;
        let tmp12 = stringResult1;
      } else {
        tmp12 = cResult[4];
      }
      if (cResult[5] !== tmp4.text) {
        const obj3 = { variant: "text-md/medium", color: "text-subtle", style: text2, children: tmp12 };
        const tmp17 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[5] = tmp4.text;
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult2 = intl3.string(_modDef2859.BaI6L4);
        cResult[7] = stringResult2;
        let tmp18 = stringResult2;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] !== tmp4.text) {
        const obj4 = { variant: "text-md/medium", color: "text-subtle", style: tmp4.text, children: tmp18 };
        const tmp23 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[8] = tmp4.text;
        cResult[9] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[9];
      }
      if (cResult[10] === tmp4.body) {
        if (cResult[11] === tmp21) {
          if (cResult[12] === tmp15) {
            let tmp24 = cResult[13];
          }
          if (cResult[14] === tmp24) {
            if (cResult[15] === tmp9) {
              let tmp26 = cResult[16];
            }
            if (cResult[17] === tmp4.upperHalf) {
              if (cResult[18] === tmp26) {
                let tmp30 = cResult[19];
              }
              if (cResult[20] !== tmp4.lowerHalf) {
                const obj5 = { style: tmp4.lowerHalf };
                const tmp37 = hasOwnProperty(View, obj5);
                cResult[20] = tmp4.lowerHalf;
                cResult[21] = tmp37;
                let tmp34 = tmp37;
              } else {
                tmp34 = cResult[21];
              }
              if (cResult[22] === tmp4.content) {
                if (cResult[23] === tmp30) {
                  if (cResult[24] === tmp34) {
                    let tmp38 = cResult[25];
                  }
                  const _Symbol = Symbol;
                  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp46 = hasOwnProperty(LogOutDisclaimerDefault, {});
                    cResult[26] = tmp46;
                    let tmp43 = tmp46;
                  } else {
                    tmp43 = cResult[26];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj6 = { children: null };
                    const items = [tmp43];
                    const obj7 = { variant: "primary", text: null, icon: null, iconPosition: "end", onPress: null };
                    const intl4 = util.intl;
                    obj7.text = intl4.string(_modDef2859["6FXIU6"]);
                    const obj8 = { color: nativeDefault.colors.WHITE };
                    obj7.icon = hasOwnProperty(LinkExternalSmallIcon.LinkExternalSmallIcon, obj8);
                    obj7.onPress = first;
                    items[1] = hasOwnProperty(ModalActionButton.ModalActionButton, obj7);
                    obj6.children = items;
                    const tmp51 = timestampProducer(ModalFooter.ModalFooter, obj6);
                    cResult[27] = tmp51;
                    let tmp47 = tmp51;
                  } else {
                    tmp47 = cResult[27];
                  }
                  if (cResult[28] !== tmp38) {
                    const obj9 = { children: null };
                    const items1 = [tmp38, tmp47];
                    obj9.children = items1;
                    const tmp54 = timestampProducer(ModalScreen.ModalScreen, obj9);
                    cResult[28] = tmp38;
                    cResult[29] = tmp54;
                    let tmp52 = tmp54;
                  } else {
                    tmp52 = cResult[29];
                  }
                  return tmp52;
                }
              }
              const obj10 = { children: null };
              const obj11 = { style: content, children: null };
              const items2 = [tmp30, tmp34];
              obj11.children = items2;
              obj10.children = timestampProducer(View, obj11);
              const tmp42 = hasOwnProperty(ModalContent.ModalContent, obj10);
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
          const obj13 = { align: "center", spacing: nativeDefault.space.PX_16, children: null };
          const items3 = [tmp9, tmp24];
          obj13.children = items3;
          const tmp29 = timestampProducer(Stack_Stack.Stack, obj13);
          cResult[14] = tmp24;
          cResult[15] = tmp9;
          cResult[16] = tmp29;
          tmp26 = tmp29;
        }
      }
      const obj14 = { align: "center", spacing: nativeDefault.space.PX_16, style: body, children: null };
      const items4 = [tmp15, tmp21];
      obj14.children = items4;
      const tmp25 = timestampProducer(Stack_Stack.Stack, obj14);
      cResult[10] = tmp4.body;
      cResult[11] = tmp21;
      cResult[12] = tmp15;
      cResult[13] = tmp25;
      tmp24 = tmp25;
    }
  : function AppStoreParentalRevocationScreen() {
      const tmp = closure_8();
      const callback = noop.useCallback(() => {
        LinkingDefault.openURL(closure_1_7);
      }, []);
      const obj = { children: null };
      const obj2 = { children: null };
      const obj3 = { style: tmp.content, children: null };
      const obj4 = { style: tmp.upperHalf, children: null };
      const obj5 = { align: "center", spacing: nativeDefault.space.PX_16, children: null };
      const obj6 = {
        accessibilityRole: "header",
        variant: "heading-xl/bold",
        color: "mobile-text-heading-primary",
        style: tmp.text,
        children: null,
      };
      const intl = util.intl;
      obj6.children = intl.string(_modDef2859.Z87TFb);
      const items = [hasOwnProperty(Text_Text.Text, obj6)];
      const obj7 = { align: "center", spacing: nativeDefault.space.PX_16, style: tmp.body, children: null };
      const obj8 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
      const intl2 = util.intl;
      obj8.children = intl2.string(_modDef2859.VS98dM);
      const items1 = [hasOwnProperty(Text_Text.Text, obj8)];
      const obj9 = { variant: "text-md/medium", color: "text-subtle", style: tmp.text, children: null };
      const intl3 = util.intl;
      obj9.children = intl3.string(_modDef2859.BaI6L4);
      items1[1] = hasOwnProperty(Text_Text.Text, obj9);
      obj7.children = items1;
      items[1] = timestampProducer(Stack_Stack.Stack, obj7);
      obj5.children = items;
      obj4.children = timestampProducer(Stack_Stack.Stack, obj5);
      const items2 = [hasOwnProperty(View, obj4), hasOwnProperty(View, { style: tmp.lowerHalf })];
      obj3.children = items2;
      obj2.children = timestampProducer(View, obj3);
      const items3 = [hasOwnProperty(ModalContent.ModalContent, obj2)];
      const obj11 = { children: null };
      const items4 = [hasOwnProperty(LogOutDisclaimerDefault, {})];
      const obj12 = { variant: "primary", text: null, icon: null, iconPosition: "end", onPress: null };
      const intl4 = util.intl;
      obj12.text = intl4.string(_modDef2859["6FXIU6"]);
      obj12.icon = hasOwnProperty(LinkExternalSmallIcon.LinkExternalSmallIcon, { color: nativeDefault.colors.WHITE });
      obj12.onPress = callback;
      items4[1] = hasOwnProperty(ModalActionButton.ModalActionButton, obj12);
      obj11.children = items4;
      items3[1] = timestampProducer(ModalFooter.ModalFooter, obj11);
      obj.children = items3;
      return timestampProducer(ModalScreen.ModalScreen, obj);
    };
