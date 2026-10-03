// === Module 13401: GuildBoostingMarketingBoosterRecognitionCards ===

// Module 13401 (GuildBoostingMarketingBoosterRecognitionCards)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import BoostGemIcon from "BoostGemIcon" /* 4826 */;
import Text_Text from "Text/Text" /* 4886 */;
import HeartIcon from "HeartIcon" /* 8428 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9232 */;
import BoostTier3Icon from "BoostTier3Icon" /* 13328 */;
import _modDef13402 from "module_13402" /* 13402 */;
import _modDef13403 from "module_13403" /* 13403 */;
import _modDef13404 from "module_13404" /* 13404 */;
import _modDef13405 from "module_13405" /* 13405 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(4890);
let obj2 = { card: { minHeight: 124, width: 172, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", flexDirection: "column", alignItems: "center", margin: 5, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 13, paddingVertical: 16 }, description: { textAlign: "center" }, iconContainer: { height: 30, marginBottom: 10 } };
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  const tmp4 = closure_6();
  ({ IconComponent, children } = arg0);
  if (cResult[0] !== IconComponent) {
    const obj2 = { size: "lg", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    const tmp8 = React4(IconComponent, obj2);
    cResult[0] = IconComponent;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.iconContainer) {
    if (cResult[3] === tmp5) {
      let tmp9 = cResult[4];
    }
    if (cResult[5] === tmp4.description) {
      if (cResult[6] === children) {
        let tmp11 = cResult[7];
      }
      if (cResult[8] === tmp4.card) {
        if (cResult[9] === tmp9) {
          if (cResult[10] === tmp11) {
            let tmp14 = cResult[11];
          }
          return tmp14;
        }
      }
      const obj3 = { style: tmp4.card, children: null };
      const items = [tmp9, tmp11];
      obj3.children = items;
      const tmp17 = hasOwnProperty(View, obj3);
      cResult[8] = tmp4.card;
      cResult[9] = tmp9;
      cResult[10] = tmp11;
      cResult[11] = tmp17;
      tmp14 = tmp17;
    }
    const obj4 = { style: tmp4.description, variant: "text-sm/medium", children };
    const tmp13 = React4(Text_Text.Text, obj4);
    cResult[5] = tmp4.description;
    cResult[6] = children;
    cResult[7] = tmp13;
    tmp11 = tmp13;
  }
  const tmp10 = React4(View, { style: tmp4.iconContainer, children: tmp5 });
  cResult[2] = tmp4.iconContainer;
  cResult[3] = tmp5;
  cResult[4] = tmp10;
  tmp9 = tmp10;
  const obj5 = { style: tmp4.iconContainer, children: tmp5 };
}) : ((arg0) => {
  const tmp = closure_6();
  const obj = { style: tmp.card, children: null };
  const obj2 = { style: tmp.iconContainer, children: React4(IconComponent, { size: "lg", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK }) };
  ({ IconComponent, children } = arg0);
  const items = [React4(View, obj2), React4(Text_Text.Text, { style: tmp.description, variant: "text-sm/medium", children })];
  obj.children = items;
  return hasOwnProperty(View, obj);
});
createStyles = fn(4890);
let closure_8 = createStyles.createStyles({ container: { marginTop: 50, display: "flex", flexDirection: "column", alignItems: "center" }, title: { textAlign: "center", marginHorizontal: 34 }, recognitionCardsContainer: { marginTop: 15, display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" } });
ReactCompilerGating = fn(558);
let obj3 = { minHeight: 124, width: 172, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, display: "flex", flexDirection: "column", alignItems: "center", margin: 5, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 13, paddingVertical: 16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingBoosterRecognitionCards.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(13);
  const tmp4 = closure_8();
  ({ container, title } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.IzKs3o);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.title) {
    const obj2 = { variant: "heading-xl/extrabold", style: title, children: first };
    const tmp9 = React4(Text_Text.Heading, obj2);
    cResult[1] = tmp4.title;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { icon: _modDef13402, IconComponent: BoostGemIcon.BoostGemIcon, children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t.TZigSO);
    const tmp14 = React4(closure_7, obj3);
    cResult[3] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { icon: _modDef13403, IconComponent: BoostTier3Icon.BoostTier3Icon, children: null };
    const intl3 = util.intl;
    obj4.children = intl3.string(util.t.hjQuV2);
    const tmp19 = React4(closure_7, obj4);
    cResult[4] = tmp19;
    let tmp15 = tmp19;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { icon: _modDef13404, IconComponent: ShieldUserIcon.ShieldUserIcon, children: null };
    const intl4 = util.intl;
    obj5.children = intl4.string(util.t["2RUcaM"]);
    const tmp24 = React4(closure_7, obj5);
    cResult[5] = tmp24;
    let tmp20 = tmp24;
  } else {
    tmp20 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { icon: _modDef13405, IconComponent: HeartIcon.HeartIcon, children: null };
    const intl5 = util.intl;
    obj6.children = intl5.string(util.t.bJoZKV);
    const tmp29 = React4(closure_7, obj6);
    cResult[6] = tmp29;
    let tmp25 = tmp29;
  } else {
    tmp25 = cResult[6];
  }
  if (cResult[7] !== tmp4.recognitionCardsContainer) {
    const obj7 = { style: tmp4.recognitionCardsContainer, children: null };
    const items = [tmp10, tmp15, tmp20, tmp25];
    obj7.children = items;
    const tmp33 = hasOwnProperty(View, obj7);
    cResult[7] = tmp4.recognitionCardsContainer;
    cResult[8] = tmp33;
    let tmp30 = tmp33;
  } else {
    tmp30 = cResult[8];
  }
  if (cResult[9] === tmp4.container) {
    if (cResult[10] === tmp7) {
      if (cResult[11] === tmp30) {
        let tmp34 = cResult[12];
      }
      return tmp34;
    }
  }
  const obj8 = { style: container, children: null };
  const items1 = [tmp7, tmp30];
  obj8.children = items1;
  const tmp35 = hasOwnProperty(View, obj8);
  cResult[9] = tmp4.container;
  cResult[10] = tmp7;
  cResult[11] = tmp30;
  cResult[12] = tmp35;
  tmp34 = tmp35;
}) : (() => {
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const obj2 = { variant: "heading-xl/extrabold", style: tmp.title, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.IzKs3o);
  const items = [React4(Text_Text.Heading, obj2), ];
  const obj3 = { style: tmp.recognitionCardsContainer, children: null };
  const obj4 = { icon: _modDef13402, IconComponent: BoostGemIcon.BoostGemIcon, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.TZigSO);
  const items1 = [React4(closure_7, obj4), , , ];
  const obj5 = { icon: _modDef13403, IconComponent: BoostTier3Icon.BoostTier3Icon, children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.hjQuV2);
  items1[1] = React4(closure_7, obj5);
  const obj6 = { icon: _modDef13404, IconComponent: ShieldUserIcon.ShieldUserIcon, children: null };
  const intl4 = util.intl;
  obj6.children = intl4.string(util.t["2RUcaM"]);
  items1[2] = React4(closure_7, obj6);
  const obj7 = { icon: _modDef13405, IconComponent: HeartIcon.HeartIcon, children: null };
  const intl5 = util.intl;
  obj7.children = intl5.string(util.t.bJoZKV);
  items1[3] = React4(closure_7, obj7);
  obj3.children = items1;
  items[1] = hasOwnProperty(View, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
});