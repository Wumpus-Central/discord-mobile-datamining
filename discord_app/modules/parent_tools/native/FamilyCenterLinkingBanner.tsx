// === Module 15169: FamilyCenterLinkingBanner ===

// Module 15169 (FamilyCenterLinkingBanner)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2568 from "module_2568" /* 2568 */;
import Text_Text from "Text/Text" /* 5088 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 7739 */;
import useAgeSpecificText from "useAgeSpecificText" /* 11533 */;
import FamilyCenterBannerButton from "FamilyCenterBannerButton" /* 15132 */;
import WizardHatAndBookSpotIllustration from "WizardHatAndBookSpotIllustration" /* 15170 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(5092);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2, overflow: "hidden" }, content: null, art: null, header: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2, overflow: "hidden" };
obj2.content = { padding: nativeDefault.space.PX_16 };
let obj4 = { padding: nativeDefault.space.PX_16 };
obj2.art = { marginBottom: nativeDefault.space.PX_12 };
let obj5 = { marginBottom: nativeDefault.space.PX_12 };
obj2.header = { marginBottom: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let obj6 = { marginBottom: nativeDefault.space.PX_8 };
createStyles = fn(5092);
const obj9 = { container: null };
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterLinkingBanner() {
  const cResult = c.c(23);
  const tmp4 = closure_6();
  const tmp6 = useIsInAdultAgeGroupDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(_modDef2568.zUCWEL);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(_modDef2568.B0NPbp);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp7 = stringResult;
    tmp8 = stringResult1;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const ageSpecificText = useAgeSpecificText.useAgeSpecificText(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = util.intl;
    const formatResult = intl3.format(_modDef2568.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" });
    const intl4 = util.intl;
    const stringResult2 = intl4.string(_modDef2568.JsAEDi);
    cResult[2] = formatResult;
    cResult[3] = stringResult2;
    let tmp13 = stringResult2;
    let tmp12 = formatResult;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult = useAgeSpecificText;
  const ageSpecificText1 = useAgeSpecificText.useAgeSpecificText(tmp12, tmp13);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp19 = React4(WizardHatAndBookSpotIllustration.WizardHatAndBookSpotIllustration, { accessible: false });
    cResult[4] = tmp19;
    let tmp17 = tmp19;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] !== tmp4.art) {
    const obj2 = { style: tmp4.art, children: tmp17 };
    const tmp23 = React4(View, obj2);
    cResult[5] = tmp4.art;
    cResult[6] = tmp23;
    let tmp20 = tmp23;
  } else {
    tmp20 = cResult[6];
  }
  if (cResult[7] === ageSpecificText) {
    if (cResult[8] === tmp4.header) {
      let tmp24 = cResult[9];
    }
    if (cResult[10] !== ageSpecificText1) {
      const obj3 = { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
      const tmp28 = React4(Text_Text.Text, obj3);
      cResult[10] = ageSpecificText1;
      cResult[11] = tmp28;
      let tmp26 = tmp28;
    } else {
      tmp26 = cResult[11];
    }
    if (cResult[12] === tmp4.content) {
      if (cResult[13] === tmp24) {
        if (cResult[14] === tmp26) {
          let tmp29 = cResult[15];
        }
        if (cResult[16] !== tmp6) {
          const tmp34 = React4(tmp6 ? closure_8 : closure_10, {});
          cResult[16] = tmp6;
          cResult[17] = tmp34;
        } else {
          if (cResult[18] === tmp4.container) {
            if (cResult[19] === tmp20) {
              if (cResult[20] === tmp29) {
                if (cResult[21] === tmp33) {
                  let tmp36 = cResult[22];
                }
                return tmp36;
              }
            }
          }
          const obj4 = { style: tmp4.container, children: null };
          const items = [tmp20, tmp29, cResult[17]];
          obj4.children = items;
          const tmp39 = hasOwnProperty(View, obj4);
          cResult[18] = tmp4.container;
          cResult[19] = tmp20;
          cResult[20] = tmp29;
          cResult[21] = cResult[17];
          cResult[22] = tmp39;
          tmp36 = tmp39;
        }
      }
    }
    const obj5 = { style: tmp4.content, children: null };
    const items1 = [tmp24, tmp26];
    obj5.children = items1;
    const tmp32 = hasOwnProperty(View, obj5);
    cResult[12] = tmp4.content;
    cResult[13] = tmp24;
    cResult[14] = tmp26;
    cResult[15] = tmp32;
    tmp29 = tmp32;
  }
  const tmp25 = React4(Text_Text.Text, { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText });
  cResult[7] = ageSpecificText;
  cResult[8] = tmp4.header;
  cResult[9] = tmp25;
  tmp24 = tmp25;
  const obj6 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
  const tmpResult2 = useAgeSpecificText;
}) : (function FamilyCenterLinkingBanner() {
  const tmp = closure_6();
  const tmp2 = useIsInAdultAgeGroupDefault();
  const intl = util.intl;
  const obj = useAgeSpecificText;
  const intl2 = util.intl;
  const ageSpecificText = obj.useAgeSpecificText(intl.string(_modDef2568.zUCWEL), intl2.string(_modDef2568.B0NPbp));
  const stringResult = intl.string(_modDef2568.zUCWEL);
  const intl3 = util.intl;
  const obj2 = useAgeSpecificText;
  const intl4 = util.intl;
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { style: tmp.art, children: null };
  const ageSpecificText1 = obj2.useAgeSpecificText(intl3.format(_modDef2568.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" }), intl4.string(_modDef2568.JsAEDi));
  obj4.children = React4(WizardHatAndBookSpotIllustration.WizardHatAndBookSpotIllustration, { accessible: false });
  const items = [React4(View, obj4), , ];
  const obj5 = { style: tmp.content, children: null };
  const items1 = [React4(Text_Text.Text, { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText }), React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 })];
  obj5.children = items1;
  items[1] = hasOwnProperty(View, obj5);
  items[2] = React4(tmp2 ? closure_8 : closure_10, {});
  obj3.children = items;
  return hasOwnProperty(View, obj3);
});
obj9.container = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
let closure_7 = createStyles.createStyles(obj9);
ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterLinkingBannerParentContent() {
  const cResult = c.c(6);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { index: 1, header: null, description: null };
    const intl = util.intl;
    obj2.header = intl.string(_modDef2568["7xxAni"]);
    const intl2 = util.intl;
    obj2.description = intl2.string(_modDef2568["1M9So2"]);
    const tmp9 = React4(closure_12, obj2);
    cResult[0] = tmp9;
    let first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { index: 2, header: null, description: null };
    const intl3 = util.intl;
    obj3.header = intl3.string(_modDef2568["AXgx+a"]);
    const intl4 = util.intl;
    obj3.description = intl4.string(_modDef2568.GzMFnb);
    const tmp14 = React4(closure_12, obj3);
    cResult[1] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { index: 3, header: null, description: null, isLast: true };
    const intl5 = util.intl;
    obj4.header = intl5.string(_modDef2568.MZn1tG);
    const intl6 = util.intl;
    obj4.description = intl6.string(_modDef2568["8rLBxD"]);
    const tmp20 = React4(closure_12, obj4);
    const tmp21 = React4(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
    cResult[2] = tmp20;
    cResult[3] = tmp21;
    let tmp16 = tmp21;
    let tmp15 = tmp20;
  } else {
    tmp15 = cResult[2];
    tmp16 = cResult[3];
  }
  if (cResult[4] !== tmp4.container) {
    const obj5 = { style: tmp4.container, children: null };
    const items = [first, tmp10, tmp15, tmp16];
    obj5.children = items;
    const tmp25 = hasOwnProperty(View, obj5);
    cResult[4] = tmp4.container;
    cResult[5] = tmp25;
    let tmp22 = tmp25;
  } else {
    tmp22 = cResult[5];
  }
  return tmp22;
}) : (function FamilyCenterLinkingBannerParentContent() {
  const obj = { style: closure_7().container, children: null };
  const obj2 = { index: 1, header: null, description: null };
  const intl = util.intl;
  obj2.header = intl.string(_modDef2568["7xxAni"]);
  const intl2 = util.intl;
  obj2.description = intl2.string(_modDef2568["1M9So2"]);
  const items = [React4(closure_12, obj2), , , ];
  const obj3 = { index: 2, header: null, description: null };
  const intl3 = util.intl;
  obj3.header = intl3.string(_modDef2568["AXgx+a"]);
  const intl4 = util.intl;
  obj3.description = intl4.string(_modDef2568.GzMFnb);
  items[1] = React4(closure_12, obj3);
  const obj4 = { index: 3, header: null, description: null, isLast: true };
  const intl5 = util.intl;
  obj4.header = intl5.string(_modDef2568.MZn1tG);
  const intl6 = util.intl;
  obj4.description = intl6.string(_modDef2568["8rLBxD"]);
  items[2] = React4(closure_12, obj4);
  items[3] = React4(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
  obj.children = items;
  return hasOwnProperty(View, obj);
});
createStyles = fn(5092);
const obj13 = { container: null };
const obj10 = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
obj13.container = { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 };
let closure_9 = createStyles.createStyles(obj13);
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterLinkingBannerTeenContent() {
  const cResult = c.c(3);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React4(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {});
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj2 = { style: tmp4.container, children: first };
    const tmp11 = React4(View, obj2);
    cResult[1] = tmp4.container;
    cResult[2] = tmp11;
    let tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (function FamilyCenterLinkingBannerTeenContent() {
  return React4(View, { style: closure_9().container, children: React4(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {}) });
});
createStyles = fn(5092);
const obj17 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 }, circle: null, rowContent: null };
let size = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
obj17.circle = size;
obj17.rowContent = { marginLeft: 12, flex: 1 };
let closure_11 = createStyles.createStyles(obj17);
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function FamilyCenterLinkingInstructionsRow(isLast) {
  const cResult = c.c(20);
  ({ header, description, index } = isLast);
  const tmp4 = closure_11();
  if (cResult[0] !== index) {
    const obj2 = { variant: "heading-md/semibold", color: "text-brand", children: index };
    const tmp7 = React4(Text_Text.Text, obj2);
    cResult[0] = index;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.circle) {
    if (cResult[3] === tmp5) {
      let tmp8 = cResult[4];
    }
    let gap = null;
    if (!isLast.isLast) {
      gap = tmp4.gap;
    }
    if (cResult[5] === tmp4.rowContent) {
      if (cResult[6] === gap) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] !== header) {
        const obj3 = { variant: "heading-sm/bold", children: header };
        const tmp14 = React4(Text_Text.Text, obj3);
        cResult[8] = header;
        cResult[9] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] !== description) {
        const obj4 = { variant: "text-sm/medium", color: "text-muted", children: description };
        const tmp17 = React4(Text_Text.Text, obj4);
        cResult[10] = description;
        cResult[11] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp11) {
        if (cResult[13] === tmp12) {
          if (cResult[14] === tmp15) {
            let tmp18 = cResult[15];
          }
          if (cResult[16] === tmp4.row) {
            if (cResult[17] === tmp8) {
              if (cResult[18] === tmp18) {
                let tmp22 = cResult[19];
              }
              return tmp22;
            }
          }
          const obj5 = { style: tmp4.row, children: null };
          const items = [tmp8, tmp18];
          obj5.children = items;
          const tmp25 = hasOwnProperty(View, obj5);
          cResult[16] = tmp4.row;
          cResult[17] = tmp8;
          cResult[18] = tmp18;
          cResult[19] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj6 = { style: tmp11, children: null };
      const items1 = [tmp12, tmp15];
      obj6.children = items1;
      const tmp21 = hasOwnProperty(View, obj6);
      cResult[12] = tmp11;
      cResult[13] = tmp12;
      cResult[14] = tmp15;
      cResult[15] = tmp21;
      tmp18 = tmp21;
    }
    const items2 = [tmp4.rowContent, gap];
    cResult[5] = tmp4.rowContent;
    cResult[6] = gap;
    cResult[7] = items2;
    tmp11 = items2;
  }
  const tmp9 = React4(View, { style: tmp4.circle, children: tmp5 });
  cResult[2] = tmp4.circle;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
  const obj7 = { style: tmp4.circle, children: tmp5 };
}) : (function FamilyCenterLinkingInstructionsRow(arg0) {
  ({ header, description, index, isLast } = arg0);
  const tmp = closure_11();
  const obj = { style: tmp.row, children: null };
  const items = [React4(View, { style: tmp.circle, children: React4(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index }) }), ];
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  const obj3 = { style: items1, children: null };
  items1[1] = gap;
  const items2 = [React4(Text_Text.Text, { variant: "heading-sm/bold", children: header }), React4(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description })];
  obj3.children = items2;
  items[1] = hasOwnProperty(View, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default tmp4;