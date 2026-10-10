// discord_app/modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx
import c from "../../../../../../_runtime/00576_c.js";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../../design/components/Stack/native/Stack.native.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import common_SafeAreaView from "../../../../../components_native/common/SafeAreaView.tsx";
import TwoWayLinkStyles from "TwoWayLinkStyles.tsx";
import _modDef12914 from "../../../../../../_runtime/metro/12914__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ image: { width: 254, height: 127, marginBottom: 32 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/TwoWayLinkError.tsx");

export const TwoWayLinkError = ReactCompilerGating.isReactCompilerEnabled()
  ? function TwoWayLinkError(arg0) {
      const cResult = c.c(30);
      ({ onClose, title, body, onRetry } = arg0);
      const tmp4 = closure_6();
      const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
      if (cResult[0] !== tmp4.image) {
        const obj3 = { source: _modDef12914, style: tmp4.image };
        const tmp10 = React4(FastImageDefault, obj3);
        cResult[0] = tmp4.image;
        cResult[1] = tmp10;
        let tmp6 = tmp10;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === twoWayLinkStyles.title) {
        if (cResult[3] === title) {
          let tmp11 = cResult[4];
        }
        if (cResult[5] === body) {
          if (cResult[6] === twoWayLinkStyles.body) {
            let tmp13 = cResult[7];
          }
          if (cResult[8] === twoWayLinkStyles.content) {
            if (cResult[9] === tmp6) {
              if (cResult[10] === tmp11) {
                if (cResult[11] === tmp13) {
                  let tmp16 = cResult[12];
                }
                const _Symbol = Symbol;
                ({ footerContainer, footerButton } = twoWayLinkStyles);
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = util.intl;
                  const stringResult = intl.string(util.t["5911Lb"]);
                  cResult[13] = stringResult;
                  let tmp21 = stringResult;
                } else {
                  tmp21 = cResult[13];
                }
                if (cResult[14] !== onRetry) {
                  const obj4 = { size: "lg", variant: "primary", text: tmp21, onPress: onRetry };
                  const tmp25 = React4(components_Button_Button.Button, obj4);
                  cResult[14] = onRetry;
                  cResult[15] = tmp25;
                  let tmp23 = tmp25;
                } else {
                  tmp23 = cResult[15];
                }
                const _Symbol2 = Symbol;
                if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = util.intl;
                  const stringResult1 = intl2.string(util.t["ETE/oC"]);
                  cResult[16] = stringResult1;
                  let tmp26 = stringResult1;
                } else {
                  tmp26 = cResult[16];
                }
                if (cResult[17] !== onClose) {
                  const obj5 = { size: "lg", variant: "secondary", text: tmp26, onPress: onClose };
                  const tmp30 = React4(components_Button_Button.Button, obj5);
                  cResult[17] = onClose;
                  cResult[18] = tmp30;
                  let tmp28 = tmp30;
                } else {
                  tmp28 = cResult[18];
                }
                if (cResult[19] === twoWayLinkStyles.footerButton) {
                  if (cResult[20] === tmp28) {
                    if (cResult[21] === tmp23) {
                      let tmp31 = cResult[22];
                    }
                    if (cResult[23] === twoWayLinkStyles.footerContainer) {
                      if (cResult[24] === tmp31) {
                        let tmp34 = cResult[25];
                      }
                      if (cResult[26] === twoWayLinkStyles.container) {
                        if (cResult[27] === tmp34) {
                          if (cResult[28] === tmp16) {
                            let tmp37 = cResult[29];
                          }
                          return tmp37;
                        }
                      }
                      const obj6 = { style: twoWayLinkStyles.container, children: null };
                      const items = [tmp16, tmp34];
                      obj6.children = items;
                      const tmp40 = hasOwnProperty(View, obj6);
                      cResult[26] = twoWayLinkStyles.container;
                      cResult[27] = tmp34;
                      cResult[28] = tmp16;
                      cResult[29] = tmp40;
                      tmp37 = tmp40;
                    }
                    const obj7 = { bottom: true, style: footerContainer, children: tmp31 };
                    const tmp36 = React4(common_SafeAreaView.SafeAreaPaddingView, obj7);
                    cResult[23] = twoWayLinkStyles.footerContainer;
                    cResult[24] = tmp31;
                    cResult[25] = tmp36;
                    tmp34 = tmp36;
                  }
                }
                const obj8 = { spacing: 8, direction: "vertical", style: footerButton, children: null };
                const items1 = [tmp23, tmp28];
                obj8.children = items1;
                const tmp33 = hasOwnProperty(Stack_Stack.Stack, obj8);
                cResult[19] = twoWayLinkStyles.footerButton;
                cResult[20] = tmp28;
                cResult[21] = tmp23;
                cResult[22] = tmp33;
                tmp31 = tmp33;
              }
            }
          }
          const obj9 = { style: twoWayLinkStyles.content, children: null };
          const items2 = [tmp6, tmp11, tmp13];
          obj9.children = items2;
          const tmp19 = hasOwnProperty(View, obj9);
          cResult[8] = twoWayLinkStyles.content;
          cResult[9] = tmp6;
          cResult[10] = tmp11;
          cResult[11] = tmp13;
          cResult[12] = tmp19;
          tmp16 = tmp19;
        }
        const obj10 = {
          variant: "text-md/normal",
          color: "text-default",
          style: twoWayLinkStyles.body,
          children: body,
        };
        const tmp15 = React4(Text_Text.Text, obj10);
        cResult[5] = body;
        cResult[6] = twoWayLinkStyles.body;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      }
      const tmp12 = React4(Text_Text.Text, {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: twoWayLinkStyles.title,
        children: title,
      });
      cResult[2] = twoWayLinkStyles.title;
      cResult[3] = title;
      cResult[4] = tmp12;
      tmp11 = tmp12;
      const obj11 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: twoWayLinkStyles.title,
        children: title,
      };
    }
  : function TwoWayLinkError(arg0) {
      ({ onClose, title, body, onRetry } = arg0);
      const tmp = closure_6();
      const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
      const obj2 = { style: twoWayLinkStyles.container, children: null };
      const obj3 = { style: twoWayLinkStyles.content, children: null };
      const obj4 = { source: null, style: null };
      obj4.source = _modDef12914;
      obj4.style = tmp.image;
      const items = [
        React4(FastImageDefault, obj4),
        React4(Text_Text.Text, {
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          style: twoWayLinkStyles.title,
          children: title,
        }),
        React4(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-default",
          style: twoWayLinkStyles.body,
          children: body,
        }),
      ];
      obj3.children = items;
      const items1 = [hasOwnProperty(View, obj3)];
      const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
      const obj8 = { spacing: 8, direction: "vertical", style: twoWayLinkStyles.footerButton, children: null };
      const obj9 = { size: "lg", variant: "primary", text: null, onPress: null };
      const intl = util.intl;
      obj9.text = intl.string(util.t["5911Lb"]);
      obj9.onPress = onRetry;
      const items2 = [React4(components_Button_Button.Button, obj9)];
      const obj10 = { size: "lg", variant: "secondary", text: null, onPress: null };
      const intl2 = util.intl;
      obj10.text = intl2.string(util.t["ETE/oC"]);
      obj10.onPress = onClose;
      items2[1] = React4(components_Button_Button.Button, obj10);
      obj8.children = items2;
      obj7.children = hasOwnProperty(Stack_Stack.Stack, obj8);
      items1[1] = React4(common_SafeAreaView.SafeAreaPaddingView, obj7);
      obj2.children = items1;
      return hasOwnProperty(View, obj2);
    };
