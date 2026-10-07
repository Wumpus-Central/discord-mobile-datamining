// discord_app/modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import util from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../../../components_native/common/SafeAreaView.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import _modDef8816 from "../../../../../../../_runtime/metro/08816__.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
let closure_7 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (onClose) => {
      const cResult = c.c(26);
      onClose = onClose.onClose;
      const tmp4 = closure_7();
      const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
      ({ container, content } = twoWayLinkStyles);
      if (cResult[0] !== tmp4.image) {
        const obj3 = { source: _modDef8816, style: tmp4.image };
        const tmp10 = hasOwnProperty(React3, obj3);
        cResult[0] = tmp4.image;
        cResult[1] = tmp10;
        let tmp6 = tmp10;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.Fnvxvk);
        cResult[2] = stringResult;
        let tmp11 = stringResult;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== twoWayLinkStyles.title) {
        const obj4 = {
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          style: twoWayLinkStyles.title,
          children: tmp11,
        };
        const tmp15 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[3] = twoWayLinkStyles.title;
        cResult[4] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.YwXceg);
        cResult[5] = stringResult1;
        let tmp16 = stringResult1;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] !== twoWayLinkStyles.body) {
        const obj5 = {
          variant: "text-md/normal",
          color: "text-default",
          style: twoWayLinkStyles.body,
          children: tmp16,
        };
        const tmp20 = hasOwnProperty(Text_Text.Text, obj5);
        cResult[6] = twoWayLinkStyles.body;
        cResult[7] = tmp20;
        let tmp18 = tmp20;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] === twoWayLinkStyles.content) {
        if (cResult[9] === tmp6) {
          if (cResult[10] === tmp13) {
            if (cResult[11] === tmp18) {
              let tmp21 = cResult[12];
            }
            const _Symbol = Symbol;
            ({ footerContainer, footerButton } = twoWayLinkStyles);
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult2 = intl3.string(util.t.i4jeWR);
              cResult[13] = stringResult2;
              let tmp23 = stringResult2;
            } else {
              tmp23 = cResult[13];
            }
            if (cResult[14] !== onClose) {
              const obj6 = { size: "md", text: tmp23, onPress: onClose };
              const tmp27 = hasOwnProperty(components_Button_Button.Button, obj6);
              cResult[14] = onClose;
              cResult[15] = tmp27;
              let tmp25 = tmp27;
            } else {
              tmp25 = cResult[15];
            }
            if (cResult[16] === twoWayLinkStyles.footerButton) {
              if (cResult[17] === tmp25) {
                let tmp28 = cResult[18];
              }
              if (cResult[19] === twoWayLinkStyles.footerContainer) {
                if (cResult[20] === tmp28) {
                  let tmp32 = cResult[21];
                }
                if (cResult[22] === twoWayLinkStyles.container) {
                  if (cResult[23] === tmp21) {
                    if (cResult[24] === tmp32) {
                      let tmp35 = cResult[25];
                    }
                    return tmp35;
                  }
                }
                const obj7 = { style: container, children: null };
                const items = [tmp21, tmp32];
                obj7.children = items;
                const tmp38 = timestampProducer(React4, obj7);
                cResult[22] = twoWayLinkStyles.container;
                cResult[23] = tmp21;
                cResult[24] = tmp32;
                cResult[25] = tmp38;
                tmp35 = tmp38;
              }
              const obj8 = { bottom: true, style: footerContainer, children: tmp28 };
              const tmp34 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj8);
              cResult[19] = twoWayLinkStyles.footerContainer;
              cResult[20] = tmp28;
              cResult[21] = tmp34;
              tmp32 = tmp34;
            }
            const obj9 = { style: footerButton, children: tmp25 };
            const tmp31 = hasOwnProperty(React4, obj9);
            cResult[16] = twoWayLinkStyles.footerButton;
            cResult[17] = tmp25;
            cResult[18] = tmp31;
            tmp28 = tmp31;
          }
        }
      }
      const obj10 = { style: content, children: null };
      const items1 = [tmp6, tmp13, tmp18];
      obj10.children = items1;
      const tmp22 = timestampProducer(React4, obj10);
      cResult[8] = twoWayLinkStyles.content;
      cResult[9] = tmp6;
      cResult[10] = tmp13;
      cResult[11] = tmp18;
      cResult[12] = tmp22;
      tmp21 = tmp22;
    }
  : (onClose) => {
      const tmp = closure_7();
      const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
      const obj2 = { style: twoWayLinkStyles.container, children: null };
      const obj3 = { style: twoWayLinkStyles.content, children: null };
      const items = [hasOwnProperty(React3, { source: _modDef8816, style: tmp.image }), ,];
      const obj5 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: twoWayLinkStyles.title,
        children: null,
      };
      const intl = util.intl;
      obj5.children = intl.string(util.t.Fnvxvk);
      items[1] = hasOwnProperty(Text_Text.Text, obj5);
      const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
      const intl2 = util.intl;
      obj6.children = intl2.string(util.t.YwXceg);
      items[2] = hasOwnProperty(Text_Text.Text, obj6);
      obj3.children = items;
      const items1 = [timestampProducer(React4, obj3)];
      const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
      const obj8 = { style: twoWayLinkStyles.footerButton, children: null };
      const obj9 = { size: "md", text: null, onPress: null };
      const intl3 = util.intl;
      obj9.text = intl3.string(util.t.i4jeWR);
      obj9.onPress = onClose.onClose;
      obj8.children = hasOwnProperty(components_Button_Button.Button, obj9);
      obj7.children = hasOwnProperty(React4, obj8);
      items1[1] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj7);
      obj2.children = items1;
      return timestampProducer(React4, obj2);
    };
