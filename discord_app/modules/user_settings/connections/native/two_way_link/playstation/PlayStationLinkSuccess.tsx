// discord_app/modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import util from "../../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../../design/components/Button/native/Button.native.tsx";
import FastImageDefault from "../../../../../../components_native/common/FastImage.tsx";
import common_SafeAreaView from "../../../../../../components_native/common/SafeAreaView.tsx";
import TwoWayLinkStyles from "../TwoWayLinkStyles.tsx";
import _modDef12863 from "../../../../../../../discord_assets/assets/connections/console_setup_confirmation.png.js";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let closure_7 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx",
);

export const PlayStationLinkSuccess = ReactCompilerGating.isReactCompilerEnabled()
  ? function PlayStationLinkSuccess(onClose) {
      const cResult = c.c(27);
      onClose = onClose.onClose;
      const tmp4 = closure_7();
      const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { uri: _modDef12863 };
        cResult[0] = obj3;
        let first = obj3;
      } else {
        first = cResult[0];
      }
      ({ container, content } = twoWayLinkStyles);
      if (cResult[1] !== tmp4.image) {
        const obj4 = { source: first, style: tmp4.image };
        const tmp11 = hasOwnProperty(FastImageDefault, obj4);
        cResult[1] = tmp4.image;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.e6SOl0);
        cResult[3] = stringResult;
        let tmp12 = stringResult;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] !== twoWayLinkStyles.title) {
        const obj5 = {
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          style: twoWayLinkStyles.title,
          children: tmp12,
        };
        const tmp16 = hasOwnProperty(Text_Text.Text, obj5);
        cResult[4] = twoWayLinkStyles.title;
        cResult[5] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.QjAZAQ);
        cResult[6] = stringResult1;
        let tmp17 = stringResult1;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] !== twoWayLinkStyles.body) {
        const obj6 = {
          variant: "text-md/normal",
          color: "text-default",
          style: twoWayLinkStyles.body,
          children: tmp17,
        };
        const tmp21 = hasOwnProperty(Text_Text.Text, obj6);
        cResult[7] = twoWayLinkStyles.body;
        cResult[8] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] === twoWayLinkStyles.content) {
        if (cResult[10] === tmp19) {
          if (cResult[11] === tmp8) {
            if (cResult[12] === tmp14) {
              let tmp22 = cResult[13];
            }
            const _Symbol = Symbol;
            ({ footerContainer, footerButton } = twoWayLinkStyles);
            if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult2 = intl3.string(util.t.i4jeWR);
              cResult[14] = stringResult2;
              let tmp24 = stringResult2;
            } else {
              tmp24 = cResult[14];
            }
            if (cResult[15] !== onClose) {
              const obj7 = { size: "md", text: tmp24, onPress: onClose };
              const tmp28 = hasOwnProperty(components_Button_Button.Button, obj7);
              cResult[15] = onClose;
              cResult[16] = tmp28;
              let tmp26 = tmp28;
            } else {
              tmp26 = cResult[16];
            }
            if (cResult[17] === twoWayLinkStyles.footerButton) {
              if (cResult[18] === tmp26) {
                let tmp29 = cResult[19];
              }
              if (cResult[20] === twoWayLinkStyles.footerContainer) {
                if (cResult[21] === tmp29) {
                  let tmp33 = cResult[22];
                }
                if (cResult[23] === twoWayLinkStyles.container) {
                  if (cResult[24] === tmp22) {
                    if (cResult[25] === tmp33) {
                      let tmp36 = cResult[26];
                    }
                    return tmp36;
                  }
                }
                const obj8 = { style: container, children: null };
                const items = [tmp22, tmp33];
                obj8.children = items;
                const tmp39 = timestampProducer(View, obj8);
                cResult[23] = twoWayLinkStyles.container;
                cResult[24] = tmp22;
                cResult[25] = tmp33;
                cResult[26] = tmp39;
                tmp36 = tmp39;
              }
              const obj9 = { bottom: true, style: footerContainer, children: tmp29 };
              const tmp35 = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj9);
              cResult[20] = twoWayLinkStyles.footerContainer;
              cResult[21] = tmp29;
              cResult[22] = tmp35;
              tmp33 = tmp35;
            }
            const obj10 = { style: footerButton, children: tmp26 };
            const tmp32 = hasOwnProperty(View, obj10);
            cResult[17] = twoWayLinkStyles.footerButton;
            cResult[18] = tmp26;
            cResult[19] = tmp32;
            tmp29 = tmp32;
          }
        }
      }
      const obj11 = { style: content, children: null };
      const items1 = [tmp8, tmp14, tmp19];
      obj11.children = items1;
      const tmp23 = timestampProducer(View, obj11);
      cResult[9] = twoWayLinkStyles.content;
      cResult[10] = tmp19;
      cResult[11] = tmp8;
      cResult[12] = tmp14;
      cResult[13] = tmp23;
      tmp22 = tmp23;
    }
  : function PlayStationLinkSuccess(onClose) {
      const tmp = closure_7();
      const twoWayLinkStyles = TwoWayLinkStyles.useTwoWayLinkStyles();
      const obj2 = { style: twoWayLinkStyles.container, children: null };
      const obj3 = { style: twoWayLinkStyles.content, children: null };
      const memo = noop.useMemo(() => ({ uri: _modDef12863 }), []);
      const items = [hasOwnProperty(FastImageDefault, { source: memo, style: tmp.image }), ,];
      const obj5 = {
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        style: twoWayLinkStyles.title,
        children: null,
      };
      const intl = util.intl;
      obj5.children = intl.string(util.t.e6SOl0);
      items[1] = hasOwnProperty(Text_Text.Text, obj5);
      const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: null };
      const intl2 = util.intl;
      obj6.children = intl2.string(util.t.QjAZAQ);
      items[2] = hasOwnProperty(Text_Text.Text, obj6);
      obj3.children = items;
      const items1 = [timestampProducer(View, obj3)];
      const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: null };
      const obj8 = { style: twoWayLinkStyles.footerButton, children: null };
      const obj9 = { size: "md", text: null, onPress: null };
      const intl3 = util.intl;
      obj9.text = intl3.string(util.t.i4jeWR);
      obj9.onPress = onClose.onClose;
      obj8.children = hasOwnProperty(components_Button_Button.Button, obj9);
      obj7.children = hasOwnProperty(View, obj8);
      items1[1] = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj7);
      obj2.children = items1;
      return timestampProducer(View, obj2);
    };
