// === Module 8783: CrunchyrollLinkSuccess ===

// Module 8783 (CrunchyrollLinkSuccess)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8742 */;
import AssetRegistryDefault from "AssetRegistry" /* 8784 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onClose;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({ image: { width: 232, height: 108, marginBottom: 24 } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let container;
  let content;
  let footerButton;
  let footerContainer;
  let items;
  let items1;
  let tmp11;
  let tmp13;
  let tmp16;
  let tmp18;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(26);
  onClose = onClose.onClose;
  const tmp4 = closure_7();
  const obj2 = TwoWayLinkStyles;
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  ({ container, content } = twoWayLinkStyles);
  if (cResult[0] !== tmp4.image) {
    const obj3 = { source: AssetRegistryDefault, style: tmp4.image };
    const tmp10 = hasOwnProperty(_false, obj3);
    cResult[0] = tmp4.image;
    cResult[1] = tmp10;
    tmp6 = tmp10;
  } else {
    tmp6 = cResult[1];
  }
  const title = twoWayLinkStyles.title;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.Fnvxvk);
    cResult[2] = stringResult;
    tmp11 = stringResult;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] !== twoWayLinkStyles.title) {
    const obj4 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: title, children: tmp11 };
    const tmp15 = hasOwnProperty(Text_Text.Text, obj4);
    cResult[3] = twoWayLinkStyles.title;
    cResult[4] = tmp15;
    tmp13 = tmp15;
  } else {
    tmp13 = cResult[4];
  }
  const body = twoWayLinkStyles.body;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.YwXceg);
    cResult[5] = stringResult1;
    tmp16 = stringResult1;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] !== twoWayLinkStyles.body) {
    const obj5 = { variant: "text-md/normal", color: "text-default", style: body, children: tmp16 };
    const tmp20 = hasOwnProperty(Text_Text.Text, obj5);
    cResult[6] = twoWayLinkStyles.body;
    cResult[7] = tmp20;
    tmp18 = tmp20;
  } else {
    tmp18 = cResult[7];
  }
  if (cResult[8] === twoWayLinkStyles.content) {
    if (cResult[9] === tmp6) {
      if (cResult[10] === tmp13) {
        let tmp21;
        let tmp23;
        let tmp25;
        if (cResult[11] === tmp18) {
          tmp21 = cResult[12];
        }
        const _Symbol = Symbol;
        ({ footerContainer, footerButton } = twoWayLinkStyles);
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl4.intl;
          const stringResult2 = intl3.string(intl4.t.i4jeWR);
          cResult[13] = stringResult2;
          tmp23 = stringResult2;
        } else {
          tmp23 = cResult[13];
        }
        if (cResult[14] !== onClose) {
          const obj6 = { size: "md", text: tmp23, onPress: onClose };
          const tmp27 = hasOwnProperty(components_Button_Button.Button, obj6);
          cResult[14] = onClose;
          cResult[15] = tmp27;
          tmp25 = tmp27;
        } else {
          tmp25 = cResult[15];
        }
        if (cResult[16] === twoWayLinkStyles.footerButton) {
          let tmp28;
          if (cResult[17] === tmp25) {
            tmp28 = cResult[18];
          }
          if (cResult[19] === twoWayLinkStyles.footerContainer) {
            let tmp32;
            if (cResult[20] === tmp28) {
              tmp32 = cResult[21];
            }
            if (cResult[22] === twoWayLinkStyles.container) {
              if (cResult[23] === tmp21) {
                let tmp35;
                if (cResult[24] === tmp32) {
                  tmp35 = cResult[25];
                }
                return tmp35;
              }
            }
            const obj7 = { style: container, children: items };
            items = [tmp21, tmp32];
            const tmp38 = metroRequire(React3, obj7);
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
        const tmp31 = hasOwnProperty(React3, obj9);
        cResult[16] = twoWayLinkStyles.footerButton;
        cResult[17] = tmp25;
        cResult[18] = tmp31;
        tmp28 = tmp31;
      }
    }
  }
  const obj10 = { style: content, children: items1 };
  items1 = [tmp6, tmp13, tmp18];
  const tmp22 = metroRequire(React3, obj10);
  cResult[8] = twoWayLinkStyles.content;
  cResult[9] = tmp6;
  cResult[10] = tmp13;
  cResult[11] = tmp18;
  cResult[12] = tmp22;
  tmp21 = tmp22;
}) : ((onClose) => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let obj8;
  let obj9;
  onClose = onClose.onClose;
  const tmp = closure_7();
  const obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  items = [, , ];
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj4 = { source: AssetRegistryDefault, style: tmp.image };
  items[0] = hasOwnProperty(_false, obj4);
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.Fnvxvk) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = hasOwnProperty(Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl2.string(intl4.t.YwXceg) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = hasOwnProperty(Text2, obj6);
  items1 = [metroRequire(React3, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: hasOwnProperty(React3, obj8) };
  obj8 = { style: twoWayLinkStyles.footerButton, children: hasOwnProperty(Button, obj9) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj9 = { size: "md", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = hasOwnProperty(SafeAreaPaddingView, obj7);
  return metroRequire(React3, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkSuccess.tsx");

export default tmp5;