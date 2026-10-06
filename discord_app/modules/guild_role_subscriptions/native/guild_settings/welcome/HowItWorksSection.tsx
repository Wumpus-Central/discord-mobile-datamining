// === Module 17937: HowItWorksSection ===

// Module 17937 (HowItWorksSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4892 */;
import FastImageDefault from "FastImage" /* 5981 */;
import AssetRegistryDefault from "AssetRegistry" /* 17938 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 17939 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 17940 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: obj2, cardNumber: size, howItWorksCardDescription: obj3, howItWorksCardIcon: { marginVertical: 24 } };
obj2 = { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles = createStyles.createStyles;
size = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
obj3 = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
let closure_6 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let cardNumber;
  let description;
  let iconSource;
  let items;
  const obj = react2;
  const cResult = obj.c(18);
  ({ cardNumber, iconSource, description } = arg0);
  const tmp4 = closure_6();
  const combined = "" + cardNumber + " - " + description;
  if (cResult[0] === cardNumber) {
    let tmp6;
    if (cResult[1] === tmp4.cardNumber) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === iconSource) {
      let tmp8;
      if (cResult[4] === tmp4.howItWorksCardIcon) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        let tmp12;
        if (cResult[7] === tmp8) {
          tmp12 = cResult[8];
        }
        if (cResult[9] === description) {
          let tmp16;
          if (cResult[10] === tmp4.howItWorksCardDescription) {
            tmp16 = cResult[11];
          }
          if (cResult[12] === tmp4.card) {
            if (cResult[13] === combined) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp12) {
                  let tmp19;
                  if (cResult[16] === tmp16) {
                    tmp19 = cResult[17];
                  }
                  return tmp19;
                }
              }
            }
          }
          const obj2 = { style: tmp4.card, accessible: true, accessibilityLabel: combined, children: items };
          items = [tmp6, tmp12, tmp16];
          const tmp22 = hasOwnProperty(View, obj2);
          cResult[12] = tmp4.card;
          cResult[13] = combined;
          cResult[14] = tmp6;
          cResult[15] = tmp12;
          cResult[16] = tmp16;
          cResult[17] = tmp22;
          tmp19 = tmp22;
        }
        const obj3 = { style: tmp4.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description };
        const tmp18 = React3(Text_Text.Text, obj3);
        cResult[9] = description;
        cResult[10] = tmp4.howItWorksCardDescription;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      const obj4 = { style: tmp4.container, children: tmp8 };
      const tmp15 = React3(View, obj4);
      cResult[6] = tmp4.container;
      cResult[7] = tmp8;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj5 = { style: tmp4.howItWorksCardIcon, source: iconSource, resizeMode: "contain" };
    const tmp11 = React3(FastImageDefault, obj5);
    cResult[3] = iconSource;
    cResult[4] = tmp4.howItWorksCardIcon;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  }
  const obj6 = { style: tmp4.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  const tmp7 = React3(Text_Text.Text, obj6);
  cResult[0] = cardNumber;
  cResult[1] = tmp4.cardNumber;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((iconSource) => {
  let cardNumber;
  let description;
  let items;
  let obj4;
  ({ cardNumber, description } = iconSource);
  iconSource = iconSource.iconSource;
  const tmp = closure_6();
  const obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description, children: items };
  items = [, , ];
  const obj2 = { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  items[0] = React3(Text_Text.Text, obj2);
  const obj3 = { style: tmp.container, children: React3(FastImageDefault, obj4) };
  obj4 = { style: tmp.howItWorksCardIcon, source: iconSource, resizeMode: "contain" };
  items[1] = React3(View, obj3);
  const obj5 = { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description };
  items[2] = React3(Text_Text.Text, obj5);
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let tmp12;
  let tmp17;
  let tmp21;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cardNumber: 1, description: intl.string(intl4.t.lT0ZNS), iconSource: AssetRegistryDefault };
    intl = intl4.intl;
    const tmp10 = React3(closure_7, obj2);
    const tmp11 = React3(native.Spacer, { size: 12 });
    cResult[0] = tmp10;
    cResult[1] = tmp11;
    tmp5 = tmp10;
    tmp6 = tmp11;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { cardNumber: 2, description: intl2.string(intl4.t.ihN2Wb), iconSource: AssetRegistryDefault2 };
    intl2 = intl4.intl;
    const tmp16 = React3(closure_7, obj3);
    cResult[2] = tmp16;
    tmp12 = tmp16;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== tmp4.horizontalContainer) {
    const obj4 = { style: tmp4.horizontalContainer, children: items };
    items = [tmp5, tmp6, tmp12];
    const tmp20 = hasOwnProperty(View, obj4);
    cResult[3] = tmp4.horizontalContainer;
    cResult[4] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { cardNumber: 3, description: intl3.string(intl4.t.c8krDQ), iconSource: AssetRegistryDefault3 };
    intl3 = intl4.intl;
    const tmp25 = React3(closure_7, obj5);
    cResult[5] = tmp25;
    tmp21 = tmp25;
  } else {
    tmp21 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    let tmp26;
    if (cResult[7] === tmp17) {
      tmp26 = cResult[8];
    }
    return tmp26;
  }
  const obj6 = { style: tmp4.container, children: items1 };
  items1 = [tmp17, tmp21];
  const tmp27 = hasOwnProperty(View, obj6);
  cResult[6] = tmp4.container;
  cResult[7] = tmp17;
  cResult[8] = tmp27;
  tmp26 = tmp27;
}) : (() => {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: items1 };
  const obj2 = { style: tmp.horizontalContainer, children: items };
  const obj3 = { cardNumber: 1, description: intl.string(intl4.t.lT0ZNS), iconSource: AssetRegistryDefault };
  intl = intl4.intl;
  items = [React3(closure_7, obj3), React3(native.Spacer, { size: 12 }), ];
  const obj4 = { cardNumber: 2, description: intl2.string(intl4.t.ihN2Wb), iconSource: AssetRegistryDefault2 };
  intl2 = intl4.intl;
  items[2] = React3(closure_7, obj4);
  items1 = [hasOwnProperty(View, obj2), ];
  const obj5 = { cardNumber: 3, description: intl3.string(intl4.t.c8krDQ), iconSource: AssetRegistryDefault3 };
  intl3 = intl4.intl;
  items1[1] = React3(closure_7, obj5);
  return hasOwnProperty(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default tmp5;