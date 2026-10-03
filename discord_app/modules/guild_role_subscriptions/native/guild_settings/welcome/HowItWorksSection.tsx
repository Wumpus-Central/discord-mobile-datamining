// === Module 17867: HowItWorksSection ===

// Module 17867 (HowItWorksSection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import FastImageDefault from "FastImage" /* 5974 */;
import _modDef17868 from "module_17868" /* 17868 */;
import _modDef17869 from "module_17869" /* 17869 */;
import _modDef17870 from "module_17870" /* 17870 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" }, card: { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, cardNumber: null, howItWorksCardDescription: null, howItWorksCardIcon: null };
let size = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
obj2.cardNumber = size;
let obj3 = { flex: 1, marginVertical: 6, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.howItWorksCardDescription = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
obj2.howItWorksCardIcon = { marginVertical: 24 };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(18);
  ({ cardNumber, iconSource, description } = arg0);
  const tmp4 = closure_6();
  const combined = "" + cardNumber + " - " + description;
  if (cResult[0] === cardNumber) {
    if (cResult[1] === tmp4.cardNumber) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === iconSource) {
      if (cResult[4] === tmp4.howItWorksCardIcon) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4.container) {
        if (cResult[7] === tmp8) {
          let tmp12 = cResult[8];
        }
        if (cResult[9] === description) {
          if (cResult[10] === tmp4.howItWorksCardDescription) {
            let tmp16 = cResult[11];
          }
          if (cResult[12] === tmp4.card) {
            if (cResult[13] === combined) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp12) {
                  if (cResult[16] === tmp16) {
                    let tmp19 = cResult[17];
                  }
                  return tmp19;
                }
              }
            }
          }
          const obj2 = { style: tmp4.card, accessible: true, accessibilityLabel: combined, children: null };
          const items = [tmp6, tmp12, tmp16];
          obj2.children = items;
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
        const tmp18 = React4(Text_Text.Text, obj3);
        cResult[9] = description;
        cResult[10] = tmp4.howItWorksCardDescription;
        cResult[11] = tmp18;
        tmp16 = tmp18;
      }
      const obj4 = { style: tmp4.container, children: tmp8 };
      const tmp15 = React4(View, obj4);
      cResult[6] = tmp4.container;
      cResult[7] = tmp8;
      cResult[8] = tmp15;
      tmp12 = tmp15;
    }
    const obj5 = { style: tmp4.howItWorksCardIcon, source: iconSource, resizeMode: "contain" };
    const tmp11 = React4(FastImageDefault, obj5);
    cResult[3] = iconSource;
    cResult[4] = tmp4.howItWorksCardIcon;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = React4(Text_Text.Text, { style: tmp4.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber });
  cResult[0] = cardNumber;
  cResult[1] = tmp4.cardNumber;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const obj6 = { style: tmp4.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
}) : ((iconSource) => {
  ({ cardNumber, description } = iconSource);
  const tmp = closure_6();
  const obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description, children: null };
  const items = [React4(Text_Text.Text, { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber }), , ];
  const obj3 = { style: tmp.container, children: React4(FastImageDefault, { style: tmp.howItWorksCardIcon, source: iconSource.iconSource, resizeMode: "contain" }) };
  items[1] = React4(View, obj3);
  items[2] = React4(Text_Text.Text, { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description });
  obj.children = items;
  return hasOwnProperty(View, obj);
});
ReactCompilerGating = fn(558);
let obj4 = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(9);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { cardNumber: 1, description: null, iconSource: null };
    const intl = util.intl;
    obj2.description = intl.string(util.t.lT0ZNS);
    obj2.iconSource = _modDef17868;
    const tmp10 = React4(closure_7, obj2);
    const tmp11 = React4(native.Spacer, { size: 12 });
    cResult[0] = tmp10;
    cResult[1] = tmp11;
    tmp5 = tmp10;
    tmp6 = tmp11;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { cardNumber: 2, description: null, iconSource: null };
    const intl2 = util.intl;
    obj3.description = intl2.string(util.t.ihN2Wb);
    obj3.iconSource = _modDef17869;
    const tmp16 = React4(closure_7, obj3);
    cResult[2] = tmp16;
    let tmp12 = tmp16;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== tmp4.horizontalContainer) {
    const obj4 = { style: tmp4.horizontalContainer, children: null };
    const items = [tmp5, tmp6, tmp12];
    obj4.children = items;
    const tmp20 = hasOwnProperty(View, obj4);
    cResult[3] = tmp4.horizontalContainer;
    cResult[4] = tmp20;
    let tmp17 = tmp20;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { cardNumber: 3, description: null, iconSource: null };
    const intl3 = util.intl;
    obj5.description = intl3.string(util.t.c8krDQ);
    obj5.iconSource = _modDef17870;
    const tmp25 = React4(closure_7, obj5);
    cResult[5] = tmp25;
    let tmp21 = tmp25;
  } else {
    tmp21 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    if (cResult[7] === tmp17) {
      let tmp26 = cResult[8];
    }
    return tmp26;
  }
  const obj6 = { style: tmp4.container, children: null };
  const items1 = [tmp17, tmp21];
  obj6.children = items1;
  const tmp27 = hasOwnProperty(View, obj6);
  cResult[6] = tmp4.container;
  cResult[7] = tmp17;
  cResult[8] = tmp27;
  tmp26 = tmp27;
}) : (() => {
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.horizontalContainer, children: null };
  const obj3 = { cardNumber: 1, description: null, iconSource: null };
  const intl = util.intl;
  obj3.description = intl.string(util.t.lT0ZNS);
  obj3.iconSource = _modDef17868;
  const items = [React4(closure_7, obj3), React4(native.Spacer, { size: 12 }), ];
  const obj4 = { cardNumber: 2, description: null, iconSource: null };
  const intl2 = util.intl;
  obj4.description = intl2.string(util.t.ihN2Wb);
  obj4.iconSource = _modDef17869;
  items[2] = React4(closure_7, obj4);
  obj2.children = items;
  const items1 = [hasOwnProperty(View, obj2), ];
  const obj5 = { cardNumber: 3, description: null, iconSource: null };
  const intl3 = util.intl;
  obj5.description = intl3.string(util.t.c8krDQ);
  obj5.iconSource = _modDef17870;
  items1[1] = React4(closure_7, obj5);
  obj.children = items1;
  return hasOwnProperty(View, obj);
});