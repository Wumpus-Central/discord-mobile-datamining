// === Module 15985: OrbOnboardingPill ===

// Module 15985 (OrbOnboardingPill)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import OrbsIcon from "OrbsIcon" /* 9020 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function OrbOnboardingPill() {
  const cResult = c.c(4);
  const tmp4 = closure_5();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React3(OrbsIcon.OrbsIcon, { size: "sm" });
    cResult[0] = tmp7;
    let first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["9JpRfC"]);
    const tmp10 = React3(Text_Text.Text, obj2);
    cResult[1] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== tmp4.container) {
    const obj3 = { style: tmp4.container, children: null };
    const items = [first, tmp8];
    obj3.children = items;
    const tmp14 = React4(View, obj3);
    cResult[2] = tmp4.container;
    cResult[3] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[3];
  }
  return tmp11;
}) : (function OrbOnboardingPill() {
  const obj = { style: closure_5().container, children: null };
  const items = [React3(OrbsIcon.OrbsIcon, { size: "sm" }), ];
  const obj2 = { variant: "text-sm/semibold", color: "redesign-button-tertiary-text", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["9JpRfC"]);
  items[1] = React3(Text_Text.Text, obj2);
  obj.children = items;
  return React4(View, obj);
});
tmp4.displayName = "OrbOnboardingPill";
const createStyles = fn(5091);
let obj3 = { container: { height: 36, borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexDirection: "row", paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_4, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND, flexShrink: 0, gap: 4 } };
let closure_5 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbOnboardingPill.tsx");

export default tmp4;
export const OrbOnboardingPill = tmp4;