// === Module 14737: FamilyCenterLinkingBanner ===

// Module 14737 (FamilyCenterLinkingBanner)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl7 from "intl" /* 1126 */;
import _modDef2521 from "module_2521" /* 2521 */;
import Text_Text from "Text/Text" /* 4892 */;
import useIsInAdultAgeGroupDefault from "useIsInAdultAgeGroup" /* 8329 */;
import useAgeSpecificText3 from "useAgeSpecificText" /* 11544 */;
import FamilyCenterBannerButton from "FamilyCenterBannerButton" /* 14700 */;
import AssetRegistryDefault from "AssetRegistry" /* 14738 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj6;
let size;
let size1;
({ View: c3, Image: closure_4 } = react_native);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, content: obj3, art: size, header: obj4 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginTop: nativeDefault.space.PX_16, paddingTop: 0, paddingBottom: nativeDefault.space.PX_16, alignItems: "center", borderRadius: nativeDefault.radii.md, elevation: 2, overflow: "hidden" };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
size = { width: "100%", height: 175, marginBottom: nativeDefault.space.PX_12 };
obj4 = { marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let items;
  let items1;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(22);
  const tmp4 = closure_7();
  const tmp6 = useIsInAdultAgeGroupDefault();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl7.intl;
    const stringResult = intl.string(_modDef2521.zUCWEL);
    const intl2 = intl7.intl;
    const stringResult1 = intl2.string(_modDef2521.B0NPbp);
    cResult[0] = stringResult;
    cResult[1] = stringResult1;
    tmp7 = stringResult;
    tmp8 = stringResult1;
  } else {
    [tmp7, tmp8] = cResult;
  }
  const tmpResult = useAgeSpecificText3;
  const ageSpecificText = tmpResult.useAgeSpecificText(tmp7, tmp8);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = intl7.intl;
    const formatResult = intl3.format(_modDef2521.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" });
    const intl4 = intl7.intl;
    const stringResult2 = intl4.string(_modDef2521.JsAEDi);
    cResult[2] = formatResult;
    cResult[3] = stringResult2;
    tmp13 = stringResult2;
    tmp12 = formatResult;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  const tmpResult2 = useAgeSpecificText3;
  const ageSpecificText1 = tmpResult2.useAgeSpecificText(tmp12, tmp13);
  if (cResult[4] !== tmp4.art) {
    const obj2 = { source: AssetRegistryDefault, style: tmp4.art, resizeMethod: "resize" };
    const tmp20 = hasOwnProperty(React3, obj2);
    cResult[4] = tmp4.art;
    cResult[5] = tmp20;
    tmp17 = tmp20;
  } else {
    tmp17 = cResult[5];
  }
  if (cResult[6] === ageSpecificText) {
    let tmp21;
    let tmp23;
    if (cResult[7] === tmp4.header) {
      tmp21 = cResult[8];
    }
    if (cResult[9] !== ageSpecificText1) {
      const obj3 = { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText1 };
      const tmp25 = hasOwnProperty(Text_Text.Text, obj3);
      cResult[9] = ageSpecificText1;
      cResult[10] = tmp25;
      tmp23 = tmp25;
    } else {
      tmp23 = cResult[10];
    }
    if (cResult[11] === tmp4.content) {
      if (cResult[12] === tmp21) {
        let tmp26;
        let tmp30;
        if (cResult[13] === tmp23) {
          tmp26 = cResult[14];
        }
        if (cResult[15] !== tmp6) {
          const tmp31 = hasOwnProperty(tmp6 ? closure_9 : closure_11, {});
          cResult[15] = tmp6;
          cResult[16] = tmp31;
          tmp30 = tmp31;
        } else {
          tmp30 = cResult[16];
        }
        if (cResult[17] === tmp4.container) {
          if (cResult[18] === tmp17) {
            if (cResult[19] === tmp26) {
              let tmp32;
              if (cResult[20] === tmp30) {
                tmp32 = cResult[21];
              }
              return tmp32;
            }
          }
        }
        const obj4 = { style: tmp4.container, children: items };
        items = [tmp17, tmp26, tmp30];
        const tmp35 = metroRequire(_false, obj4);
        cResult[17] = tmp4.container;
        cResult[18] = tmp17;
        cResult[19] = tmp26;
        cResult[20] = tmp30;
        cResult[21] = tmp35;
        tmp32 = tmp35;
      }
    }
    const obj5 = { style: tmp4.content, children: items1 };
    items1 = [tmp21, tmp23];
    const tmp29 = metroRequire(_false, obj5);
    cResult[11] = tmp4.content;
    cResult[12] = tmp21;
    cResult[13] = tmp23;
    cResult[14] = tmp29;
    tmp26 = tmp29;
  }
  const obj6 = { style: tmp4.header, variant: "heading-lg/semibold", children: ageSpecificText };
  const tmp22 = hasOwnProperty(Text_Text.Text, obj6);
  cResult[6] = ageSpecificText;
  cResult[7] = tmp4.header;
  cResult[8] = tmp22;
  tmp21 = tmp22;
}) : (() => {
  let items;
  let items1;
  const tmp = closure_7();
  const tmp2 = useIsInAdultAgeGroupDefault();
  const useAgeSpecificText = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl = intl7.intl;
  const stringResult = intl.string(_modDef2521.zUCWEL);
  const intl2 = intl7.intl;
  const ageSpecificText = useAgeSpecificText(stringResult, intl2.string(_modDef2521.B0NPbp));
  const useAgeSpecificText2 = useAgeSpecificText3.useAgeSpecificText;
  useAgeSpecificText3;
  const intl3 = intl7.intl;
  const formatResult = intl3.format(_modDef2521.yMnoDl, { link: "https://support.discord.com/hc/articles/14155060633623" });
  const intl4 = intl7.intl;
  const obj = { style: tmp.container, children: items };
  const obj2 = { source: AssetRegistryDefault, style: tmp.art, resizeMethod: "resize" };
  const ageSpecificText2 = useAgeSpecificText2(formatResult, intl4.string(_modDef2521.JsAEDi));
  items = [hasOwnProperty(React3, obj2), , ];
  const obj3 = { style: tmp.content, children: items1 };
  items1 = [, ];
  const obj4 = { style: tmp.header, variant: "heading-lg/semibold", children: ageSpecificText };
  items1[0] = hasOwnProperty(Text_Text.Text, obj4);
  items1[1] = hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: ageSpecificText2 });
  items[1] = metroRequire(_false, obj3);
  items[2] = hasOwnProperty(tmp2 ? closure_9 : closure_11, {});
  return metroRequire(_false, obj);
});
createStyles = createStyles_mod;
let obj5 = { container: obj6 };
obj6 = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, width: "100%" };
let closure_8 = createStyles.createStyles(obj5);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  let tmp10;
  let tmp15;
  let tmp16;
  let tmp22;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { index: 1, header: intl.string(_modDef2521["7xxAni"]), description: intl2.string(_modDef2521["1M9So2"]) };
    intl = intl7.intl;
    intl2 = intl7.intl;
    const tmp9 = hasOwnProperty(closure_13, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { index: 2, header: intl3.string(_modDef2521["AXgx+a"]), description: intl4.string(_modDef2521.GzMFnb) };
    intl3 = intl7.intl;
    intl4 = intl7.intl;
    const tmp14 = hasOwnProperty(closure_13, obj3);
    cResult[1] = tmp14;
    tmp10 = tmp14;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { index: 3, header: intl5.string(_modDef2521.MZn1tG), description: intl6.string(_modDef2521["8rLBxD"]), isLast: true };
    intl5 = intl7.intl;
    intl6 = intl7.intl;
    const tmp20 = hasOwnProperty(closure_13, obj4);
    const tmp21 = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
    cResult[2] = tmp20;
    cResult[3] = tmp21;
    tmp16 = tmp21;
    tmp15 = tmp20;
  } else {
    tmp15 = cResult[2];
    tmp16 = cResult[3];
  }
  if (cResult[4] !== tmp4.container) {
    const obj5 = { style: tmp4.container, children: items };
    items = [first, tmp10, tmp15, tmp16];
    const tmp25 = metroRequire(_false, obj5);
    cResult[4] = tmp4.container;
    cResult[5] = tmp25;
    tmp22 = tmp25;
  } else {
    tmp22 = cResult[5];
  }
  return tmp22;
}) : (() => {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items;
  const obj = { style: closure_8().container, children: items };
  const obj2 = { index: 1, header: intl.string(_modDef2521["7xxAni"]), description: intl2.string(_modDef2521["1M9So2"]) };
  intl = intl7.intl;
  intl2 = intl7.intl;
  items = [hasOwnProperty(closure_13, obj2), , , ];
  const obj3 = { index: 2, header: intl3.string(_modDef2521["AXgx+a"]), description: intl4.string(_modDef2521.GzMFnb) };
  intl3 = intl7.intl;
  intl4 = intl7.intl;
  items[1] = hasOwnProperty(closure_13, obj3);
  const obj4 = { index: 3, header: intl5.string(_modDef2521.MZn1tG), description: intl6.string(_modDef2521["8rLBxD"]), isLast: true };
  intl5 = intl7.intl;
  intl6 = intl7.intl;
  items[2] = hasOwnProperty(closure_13, obj4);
  items[3] = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterParentQRCodeButton, {});
  return metroRequire(_false, obj);
});
createStyles = createStyles_mod;
let obj7 = { container: { width: "100%", paddingHorizontal: nativeDefault.space.PX_16 } };
({ width: "100%", paddingHorizontal: nativeDefault.space.PX_16 });
let closure_10 = createStyles.createStyles(obj7);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = hasOwnProperty(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {});
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.container) {
    const obj2 = { style: tmp4.container, children: first };
    const tmp11 = hasOwnProperty(_false, obj2);
    cResult[1] = tmp4.container;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  return tmp8;
}) : (() => {
  const obj = { style: closure_10().container, children: hasOwnProperty(FamilyCenterBannerButton.FamilyCenterTeenQRCodeButton, {}) };
  return hasOwnProperty(_false, obj);
});
createStyles = createStyles_mod;
const obj9 = { row: { display: "flex", flexDirection: "row", alignItems: "flex-start" }, gap: { marginBottom: 12 }, circle: size1, rowContent: { marginLeft: 12, flex: 1 } };
size1 = { display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", overflow: "hidden", width: 32, height: 32, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
let closure_12 = createStyles.createStyles(obj9);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((isLast) => {
  let description;
  let header;
  let index;
  let items;
  let items1;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(20);
  ({ header, description, index } = isLast);
  isLast = isLast.isLast;
  const tmp4 = closure_12();
  if (cResult[0] !== index) {
    const obj2 = { variant: "heading-md/semibold", color: "text-brand", children: index };
    const tmp7 = hasOwnProperty(Text_Text.Text, obj2);
    cResult[0] = index;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.circle) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    let gap = null;
    if (!isLast) {
      gap = tmp4.gap;
    }
    if (cResult[5] === tmp4.rowContent) {
      let tmp11;
      let tmp12;
      let tmp15;
      if (cResult[6] === gap) {
        tmp11 = cResult[7];
      }
      if (cResult[8] !== header) {
        const obj3 = { variant: "heading-sm/bold", children: header };
        const tmp14 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[8] = header;
        cResult[9] = tmp14;
        tmp12 = tmp14;
      } else {
        tmp12 = cResult[9];
      }
      if (cResult[10] !== description) {
        const obj4 = { variant: "text-sm/medium", color: "text-muted", children: description };
        const tmp17 = hasOwnProperty(Text_Text.Text, obj4);
        cResult[10] = description;
        cResult[11] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[11];
      }
      if (cResult[12] === tmp11) {
        if (cResult[13] === tmp12) {
          let tmp18;
          if (cResult[14] === tmp15) {
            tmp18 = cResult[15];
          }
          if (cResult[16] === tmp4.row) {
            if (cResult[17] === tmp8) {
              let tmp22;
              if (cResult[18] === tmp18) {
                tmp22 = cResult[19];
              }
              return tmp22;
            }
          }
          const obj5 = { style: tmp4.row, children: items };
          items = [tmp8, tmp18];
          const tmp25 = metroRequire(_false, obj5);
          cResult[16] = tmp4.row;
          cResult[17] = tmp8;
          cResult[18] = tmp18;
          cResult[19] = tmp25;
          tmp22 = tmp25;
        }
      }
      const obj6 = { style: tmp11, children: items1 };
      items1 = [tmp12, tmp15];
      const tmp21 = metroRequire(_false, obj6);
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
  const obj7 = { style: tmp4.circle, children: tmp5 };
  const tmp9 = hasOwnProperty(_false, obj7);
  cResult[2] = tmp4.circle;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let description;
  let header;
  let index;
  let isLast;
  let items;
  let items2;
  ({ header, description, index, isLast } = arg0);
  const tmp = closure_12();
  const obj = { style: tmp.row, children: items };
  items = [, ];
  const obj2 = { style: tmp.circle, children: hasOwnProperty(Text_Text.Text, { variant: "heading-md/semibold", color: "text-brand", children: index }) };
  items[0] = hasOwnProperty(_false, obj2);
  const items1 = [tmp.rowContent, ];
  let gap = null;
  if (!isLast) {
    gap = tmp.gap;
  }
  const obj3 = { style: items1, children: items2 };
  items1[1] = gap;
  items2 = [hasOwnProperty(Text_Text.Text, { variant: "heading-sm/bold", children: header }), hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", children: description })];
  items[1] = metroRequire(_false, obj3);
  return metroRequire(_false, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkingBanner.tsx");

export default tmp6;