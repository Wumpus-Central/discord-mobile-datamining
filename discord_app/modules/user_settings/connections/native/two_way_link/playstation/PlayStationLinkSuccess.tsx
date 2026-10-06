// === Module 8805: PlayStationLinkSuccess ===

// Module 8805 (PlayStationLinkSuccess)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6626 */;
import TwoWayLinkStyles from "TwoWayLinkStyles" /* 8774 */;
import _modDef8790 from "module_8790" /* 8790 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onClose;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ Image: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ image: { width: 124, height: 160, marginBottom: 24 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  let container;
  let content;
  let first;
  let footerButton;
  let footerContainer;
  let items;
  let items1;
  let tmp12;
  let tmp14;
  let tmp17;
  let tmp19;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(27);
  onClose = onClose.onClose;
  const tmp4 = closure_8();
  const obj2 = TwoWayLinkStyles;
  const twoWayLinkStyles = obj2.useTwoWayLinkStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { uri: _modDef8790 };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  ({ container, content } = twoWayLinkStyles);
  if (cResult[1] !== tmp4.image) {
    const obj4 = { source: first, style: tmp4.image };
    const tmp11 = metroRequire(React3, obj4);
    cResult[1] = tmp4.image;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  const title = twoWayLinkStyles.title;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.e6SOl0);
    cResult[3] = stringResult;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== twoWayLinkStyles.title) {
    const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: title, children: tmp12 };
    const tmp16 = metroRequire(Text_Text.Text, obj5);
    cResult[4] = twoWayLinkStyles.title;
    cResult[5] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[5];
  }
  const body = twoWayLinkStyles.body;
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl4.intl;
    const stringResult1 = intl2.string(intl4.t.QjAZAQ);
    cResult[6] = stringResult1;
    tmp17 = stringResult1;
  } else {
    tmp17 = cResult[6];
  }
  if (cResult[7] !== twoWayLinkStyles.body) {
    const obj6 = { variant: "text-md/normal", color: "text-default", style: body, children: tmp17 };
    const tmp21 = metroRequire(Text_Text.Text, obj6);
    cResult[7] = twoWayLinkStyles.body;
    cResult[8] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] === twoWayLinkStyles.content) {
    if (cResult[10] === tmp19) {
      if (cResult[11] === tmp8) {
        let tmp22;
        let tmp24;
        let tmp26;
        if (cResult[12] === tmp14) {
          tmp22 = cResult[13];
        }
        const _Symbol = Symbol;
        ({ footerContainer, footerButton } = twoWayLinkStyles);
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = intl4.intl;
          const stringResult2 = intl3.string(intl4.t.i4jeWR);
          cResult[14] = stringResult2;
          tmp24 = stringResult2;
        } else {
          tmp24 = cResult[14];
        }
        if (cResult[15] !== onClose) {
          const obj7 = { size: "md", text: tmp24, onPress: onClose };
          const tmp28 = metroRequire(components_Button_Button.Button, obj7);
          cResult[15] = onClose;
          cResult[16] = tmp28;
          tmp26 = tmp28;
        } else {
          tmp26 = cResult[16];
        }
        if (cResult[17] === twoWayLinkStyles.footerButton) {
          let tmp29;
          if (cResult[18] === tmp26) {
            tmp29 = cResult[19];
          }
          if (cResult[20] === twoWayLinkStyles.footerContainer) {
            let tmp33;
            if (cResult[21] === tmp29) {
              tmp33 = cResult[22];
            }
            if (cResult[23] === twoWayLinkStyles.container) {
              if (cResult[24] === tmp22) {
                let tmp36;
                if (cResult[25] === tmp33) {
                  tmp36 = cResult[26];
                }
                return tmp36;
              }
            }
            const obj8 = { style: container, children: items };
            items = [tmp22, tmp33];
            const tmp39 = metroImportDefault(hasOwnProperty, obj8);
            cResult[23] = twoWayLinkStyles.container;
            cResult[24] = tmp22;
            cResult[25] = tmp33;
            cResult[26] = tmp39;
            tmp36 = tmp39;
          }
          const obj9 = { bottom: true, style: footerContainer, children: tmp29 };
          const tmp35 = metroRequire(common_SafeAreaView.SafeAreaPaddingView, obj9);
          cResult[20] = twoWayLinkStyles.footerContainer;
          cResult[21] = tmp29;
          cResult[22] = tmp35;
          tmp33 = tmp35;
        }
        const obj10 = { style: footerButton, children: tmp26 };
        const tmp32 = metroRequire(hasOwnProperty, obj10);
        cResult[17] = twoWayLinkStyles.footerButton;
        cResult[18] = tmp26;
        cResult[19] = tmp32;
        tmp29 = tmp32;
      }
    }
  }
  const obj11 = { style: content, children: items1 };
  items1 = [tmp8, tmp14, tmp19];
  const tmp23 = metroImportDefault(hasOwnProperty, obj11);
  cResult[9] = twoWayLinkStyles.content;
  cResult[10] = tmp19;
  cResult[11] = tmp8;
  cResult[12] = tmp14;
  cResult[13] = tmp23;
  tmp22 = tmp23;
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
  const tmp = closure_8();
  let obj = TwoWayLinkStyles;
  const twoWayLinkStyles = obj.useTwoWayLinkStyles();
  const obj3 = { style: twoWayLinkStyles.content, children: items };
  items = [, , ];
  const obj2 = { style: twoWayLinkStyles.container, children: items1 };
  const obj4 = {
    source: react.useMemo(() => {
      const obj = { uri: _modDef8790 };
      return obj;
    }, []),
    style: tmp.image
  };
  items[0] = metroRequire(React3, obj4);
  const obj5 = { variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", style: twoWayLinkStyles.title, children: intl.string(intl4.t.e6SOl0) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = metroRequire(Text, obj5);
  const obj6 = { variant: "text-md/normal", color: "text-default", style: twoWayLinkStyles.body, children: intl2.string(intl4.t.QjAZAQ) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[2] = metroRequire(Text2, obj6);
  items1 = [metroImportDefault(hasOwnProperty, obj3), ];
  const obj7 = { bottom: true, style: twoWayLinkStyles.footerContainer, children: metroRequire(hasOwnProperty, obj8) };
  obj8 = { style: twoWayLinkStyles.footerButton, children: metroRequire(Button, obj9) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj9 = { size: "md", text: intl3.string(intl4.t.i4jeWR), onPress: onClose };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[1] = metroRequire(SafeAreaPaddingView, obj7);
  return metroImportDefault(hasOwnProperty, obj2);
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkSuccess.tsx");

export const PlayStationLinkSuccess = tmp4;