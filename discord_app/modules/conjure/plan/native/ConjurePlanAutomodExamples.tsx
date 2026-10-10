// === Module 17161: ConjurePlanAutomodExamples ===

// Module 17161 (ConjurePlanAutomodExamples)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AvatarUtils from "AvatarUtils" /* 1415 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1418 */;
import _modDef3849 from "module_3849" /* 3849 */;
import Stack_Stack from "Stack/Stack" /* 5377 */;
import ConjurePlanAutomodOutcomes from "ConjurePlanAutomodOutcomes" /* 17162 */;
import noop from "module_19" /* 19 */;

const Text_Text = Text(5088);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { blocked: fn(10408).ShieldIcon, alert: fn(8772).BellIcon, allowed: fn(6867).CircleCheckIcon };
let obj2 = { blurple: { text: "text-brand", icon: nativeDefault.colors.TEXT_BRAND }, red: null, green: null };
let obj3 = { text: "text-brand", icon: nativeDefault.colors.TEXT_BRAND };
obj2.red = { text: "text-feedback-critical", icon: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj4 = { text: "text-feedback-critical", icon: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj2.green = { text: "text-feedback-positive", icon: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
const createStyles = fn(5092);
let obj7 = { heading: null, examples: null, section: null, sectionHeader: null, sectionLabel: null, rows: null, row: null, blockedRow: null, blockedBar: null, rowBody: null };
let obj5 = { text: "text-feedback-positive", icon: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
obj7.heading = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj7.examples = { gap: nativeDefault.space.PX_12 };
let obj9 = { gap: nativeDefault.space.PX_12 };
obj7.section = { gap: nativeDefault.space.PX_8 };
const obj10 = { gap: nativeDefault.space.PX_8 };
obj7.sectionHeader = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj7.sectionLabel = { textTransform: "uppercase", letterSpacing: 0.24 };
const obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj7.rows = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
const obj12 = { gap: nativeDefault.space.PX_4, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, overflow: "hidden" };
obj7.row = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_12 };
const obj13 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_6, paddingHorizontal: nativeDefault.space.PX_12 };
obj7.blockedRow = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT };
const rect = { position: "absolute", top: 0, bottom: 0, start: 0, width: 2, backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj7.blockedBar = rect;
const obj14 = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT };
obj7.rowBody = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
let closure_8 = createStyles.createStyles(obj7);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function Footnote(reason) {
  let Text = require;
  let tmp = dependencyMap;
  const cResult = c.c(2);
  reason = reason.reason;
  if (null == reason) {
    return null;
  } else if (cResult[0] !== reason) {
    Text = Text_Text.Text;
    obj2 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: reason };
    tmp = React4(Text, obj2);
    cResult[0] = reason;
    cResult[1] = tmp;
  }
}) : (function Footnote(reason) {
  reason = reason.reason;
  let tmp = null;
  if (null != reason) {
    obj = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: reason };
    tmp = React4(Text_Text.Text, obj);
  }
  return tmp;
});
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExampleRow(example) {
  const cResult = c.c(29);
  example = example.example;
  const tmp4 = closure_8();
  ({ label, blockedStyle } = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome]);
  if (cResult[0] !== example) {
    const result = ConjurePlanAutomodOutcomes.planAutomodReasonText(example);
    cResult[0] = example;
    cResult[1] = result;
    let tmp5 = result;
    const tmpResult = ConjurePlanAutomodOutcomes;
  } else {
    tmp5 = cResult[1];
  }
  let blockedRow = blockedStyle;
  if (blockedStyle) {
    blockedRow = tmp4.blockedRow;
  }
  if (cResult[2] === tmp4.row) {
    if (cResult[3] === blockedRow) {
      let tmp7 = cResult[4];
    }
    if (cResult[5] !== label) {
      const labelResult = label();
      cResult[5] = label;
      cResult[6] = labelResult;
      let tmp8 = labelResult;
    } else {
      tmp8 = cResult[6];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp8 + ": " + example.content;
    if (cResult[7] === tmp5) {
      if (cResult[8] === combined) {
        let obj3 = cResult[9];
      }
      const joined = obj3.join(", ");
      if (cResult[10] === blockedStyle) {
        if (cResult[11] === tmp4.blockedBar) {
          let tmp14 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          obj2 = { source: null, size: null };
          const tmpResult4 = AvatarUtils;
          obj2.source = tmpResult4.makeSource(AvatarUtils.getDefaultAvatarURL(undefined, undefined));
          obj2.size = native.AvatarSizes.XSMALL;
          const tmp20 = React4(native.Avatar, obj2);
          cResult[13] = tmp20;
          let tmp18 = tmp20;
          const tmpResult5 = AvatarUtils;
        } else {
          tmp18 = cResult[13];
        }
        if (cResult[14] !== example.content) {
          const result1 = ConjurePlanAutomodOutcomes.renderPlanAutomodExampleContent(example.content);
          cResult[14] = example.content;
          cResult[15] = result1;
          let tmp21 = result1;
          const tmpResult6 = ConjurePlanAutomodOutcomes;
        } else {
          tmp21 = cResult[15];
        }
        if (cResult[16] !== tmp21) {
          const obj4 = { variant: "text-sm/normal", color: "text-default", children: tmp21 };
          const tmp25 = React4(Text_Text.Text, obj4);
          cResult[16] = tmp21;
          cResult[17] = tmp25;
          let tmp23 = tmp25;
        } else {
          tmp23 = cResult[17];
        }
        if (cResult[18] !== tmp5) {
          const obj5 = { reason: tmp5 };
          const tmp29 = React4(closure_9, obj5);
          cResult[18] = tmp5;
          cResult[19] = tmp29;
          let tmp26 = tmp29;
        } else {
          tmp26 = cResult[19];
        }
        if (cResult[20] === tmp4.rowBody) {
          if (cResult[21] === tmp23) {
            if (cResult[22] === tmp26) {
              let tmp30 = cResult[23];
            }
            if (cResult[24] === tmp30) {
              if (cResult[25] === tmp7) {
                if (cResult[26] === joined) {
                  if (cResult[27] === tmp14) {
                    let tmp34 = cResult[28];
                  }
                  return tmp34;
                }
              }
            }
            const obj6 = { style: tmp7, accessible: true, accessibilityLabel: joined, children: null };
            const items = [tmp14, tmp18, tmp30];
            obj6.children = items;
            const tmp37 = hasOwnProperty(View, obj6);
            cResult[24] = tmp30;
            cResult[25] = tmp7;
            cResult[26] = joined;
            cResult[27] = tmp14;
            cResult[28] = tmp37;
            tmp34 = tmp37;
          }
        }
        const obj7 = { style: tmp4.rowBody, children: null };
        const items1 = [tmp23, tmp26];
        obj7.children = items1;
        const tmp33 = hasOwnProperty(View, obj7);
        cResult[20] = tmp4.rowBody;
        cResult[21] = tmp23;
        cResult[22] = tmp26;
        cResult[23] = tmp33;
        tmp30 = tmp33;
      }
      let tmp15 = null;
      if (blockedStyle) {
        const obj8 = { style: tmp4.blockedBar };
        tmp15 = React4(View, obj8);
      }
      cResult[10] = blockedStyle;
      cResult[11] = tmp4.blockedBar;
      cResult[12] = tmp15;
      tmp14 = tmp15;
    }
    const items2 = [combined, tmp5];
    const found = items2.filter((item) => null != item);
    cResult[7] = tmp5;
    cResult[8] = combined;
    cResult[9] = found;
    obj3 = found;
  }
  const items3 = [tmp4.row, blockedRow];
  cResult[2] = tmp4.row;
  cResult[3] = blockedRow;
  cResult[4] = items3;
  tmp7 = items3;
}) : (function ExampleRow(example) {
  example = example.example;
  const tmp = closure_8();
  ({ blockedStyle, label } = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome]);
  const result = ConjurePlanAutomodOutcomes.planAutomodReasonText(example);
  const items = [tmp.row, ];
  let blockedRow = blockedStyle;
  if (blockedStyle) {
    blockedRow = tmp.blockedRow;
  }
  obj2 = { style: items, accessible: true, accessibilityLabel: null, children: null };
  items[1] = blockedRow;
  const items1 = ["" + label() + ": " + example.content, result];
  const found = items1.filter((item) => null != item);
  obj2.accessibilityLabel = found.join(", ");
  let tmp7 = null;
  if (blockedStyle) {
    const obj3 = { style: tmp.blockedBar };
    tmp7 = React4(View, obj3);
  }
  const items2 = [tmp7, , ];
  const obj4 = { source: null, size: null };
  const tmp2Result = AvatarUtils;
  obj4.source = tmp2Result.makeSource(AvatarUtils.getDefaultAvatarURL(undefined, undefined));
  obj4.size = native.AvatarSizes.XSMALL;
  items2[1] = React4(native.Avatar, obj4);
  const obj5 = { style: tmp.rowBody, children: null };
  const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
  const tmp2Result3 = AvatarUtils;
  obj6.children = ConjurePlanAutomodOutcomes.renderPlanAutomodExampleContent(example.content);
  const items3 = [React4(Text_Text.Text, obj6), React4(closure_9, { reason: result })];
  obj5.children = items3;
  items2[2] = hasOwnProperty(View, obj5);
  obj2.children = items2;
  return hasOwnProperty(View, obj2);
});
ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function ExampleSection(group) {
  obj = c;
  const cResult = obj.c(23);
  let examples = group.group;
  const tmp4 = closure_8();
  obj2 = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_SECTIONS[examples.section];
  if (cResult[0] === obj[examples.section]) {
    if (cResult[1] === tmp6.icon) {
      let tmp9 = cResult[2];
    }
    if (cResult[3] !== obj2) {
      const labelResult = obj2.label();
      cResult[3] = obj2;
      cResult[4] = labelResult;
      let tmp11 = labelResult;
    } else {
      tmp11 = cResult[4];
    }
    if (cResult[5] === tmp6.text) {
      if (cResult[6] === tmp4.sectionLabel) {
        if (cResult[7] === tmp11) {
          let tmp13 = cResult[8];
        }
        if (cResult[9] === tmp4.sectionHeader) {
          if (cResult[10] === tmp9) {
            if (cResult[11] === tmp13) {
              let tmp16 = cResult[12];
            }
            if (cResult[13] !== examples.examples) {
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                class L {
                  constructor(arg0, arg1) {
                    obj = { example: group };
                    return closure_1_4(closure_1_10, obj, arg1);
                  }
                }
                cResult[15] = L;
              } else {
                class L {
                  constructor(arg0, arg1) {
                    obj = { example: group };
                    return closure_1_4(closure_1_10, obj, arg1);
                  }
                }
              }
              const examples1 = examples.examples;
              const mapped = examples1.map(L);
              examples = examples.examples;
              cResult[13] = examples;
              cResult[14] = mapped;
            } else {
              class L {
                constructor(arg0, arg1) {
                  obj = { example: group };
                  return closure_1_4(closure_1_10, obj, arg1);
                }
              }
              if (cResult[16] === tmp4.rows) {
                class L {
                  constructor(arg0, arg1) {
                    obj = { example: group };
                    return closure_1_4(closure_1_10, obj, arg1);
                  }
                }
                if (cResult[19] === tmp4.section) {
                  class L {
                    constructor(arg0, arg1) {
                      obj = { example: group };
                      return closure_1_4(closure_1_10, obj, arg1);
                    }
                  }
                }
                const obj3 = { style: tmp7, children: null };
                const items = [tmp16, tmp26];
                obj3.children = items;
                const tmp33 = hasOwnProperty(View, obj3);
                cResult[19] = tmp4.section;
                cResult[20] = tmp26;
                cResult[21] = tmp16;
                cResult[22] = tmp33;
              }
              const obj4 = { style: tmp20, children: tmp21 };
              const tmp29 = React4(View, obj4);
              cResult[16] = tmp4.rows;
              cResult[17] = tmp21;
              cResult[18] = tmp29;
            }
          }
        }
        const obj5 = { style: tmp8, children: null };
        const items1 = [tmp9, tmp13];
        obj5.children = items1;
        const tmp19 = hasOwnProperty(View, obj5);
        cResult[9] = tmp4.sectionHeader;
        cResult[10] = tmp9;
        cResult[11] = tmp13;
        cResult[12] = tmp19;
        tmp16 = tmp19;
      }
    }
    const obj6 = { variant: "text-xs/semibold", color: tmp6.text, style: tmp4.sectionLabel, children: tmp11 };
    const tmp15 = React4(Text_Text.Heading, obj6);
    cResult[5] = tmp6.text;
    cResult[6] = tmp4.sectionLabel;
    cResult[7] = tmp11;
    cResult[8] = tmp15;
    tmp13 = tmp15;
  }
  const tmp10 = React4(obj[examples.section], { size: "xs", color: obj2[obj2.tone].icon });
  cResult[0] = obj[examples.section];
  cResult[1] = obj2[obj2.tone].icon;
  cResult[2] = tmp10;
  tmp9 = tmp10;
  const obj7 = { size: "xs", color: obj2[obj2.tone].icon };
}) : (function ExampleSection(group) {
  group = group.group;
  const tmp = closure_8();
  obj = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
  obj2 = { style: tmp.section, children: null };
  const obj3 = { style: tmp.sectionHeader, children: null };
  const items = [React4(obj[group.section], { size: "xs", color: obj2[obj.tone].icon }), React4(Text_Text.Heading, { variant: "text-xs/semibold", color: obj2[obj.tone].text, style: tmp.sectionLabel, children: obj.label() })];
  obj3.children = items;
  const items1 = [hasOwnProperty(View, obj3), ];
  const obj6 = { style: tmp.rows, children: null };
  const examples = group.examples;
  obj6.children = examples.map((example, index) => closure_1_4(closure_1_10, { example }, index));
  items1[1] = React4(View, obj6);
  obj2.children = items1;
  return hasOwnProperty(View, obj2);
});
ReactCompilerGating = fn(558);
const obj15 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePlanAutomodExamples(automod) {
  const cResult = c.c(15);
  let examples = automod.automod;
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = AvatarUtils;
    const source = tmpResult.makeSource(utils_AvatarUtils.getAutomodAvatarURL());
    cResult[0] = source;
    let first = source;
    const tmpResult3 = utils_AvatarUtils;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    obj2 = { source: first, size: native.AvatarSizes.SIZE_16, accessibilityLabel: null };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.hG1StD);
    const tmp9 = React4(native.Avatar, obj2);
    cResult[1] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(_modDef3849.z4ZKYG);
    const tmp13 = React4(Text_Text.Text, obj3);
    cResult[2] = tmp13;
    let tmp10 = tmp13;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] !== tmp4.heading) {
    const obj4 = { style: tmp4.heading, children: null };
    const items = [tmp7, tmp10];
    obj4.children = items;
    const tmp17 = hasOwnProperty(View, obj4);
    cResult[3] = tmp4.heading;
    cResult[4] = tmp17;
    let tmp14 = tmp17;
  } else {
    tmp14 = cResult[4];
  }
  if (cResult[5] !== examples.examples) {
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor(arg0) {
          obj = { group: automod };
          return closure_1_4(closure_1_11, obj, automod.section);
        }
      }
      cResult[7] = S;
    } else {
      class S {
        constructor(arg0) {
          obj = { group: automod };
          return closure_1_4(closure_1_11, obj, automod.section);
        }
      }
    }
    const result = ConjurePlanAutomodOutcomes.groupPlanAutomodExamples(examples.examples);
    const mapped = result.map(S);
    examples = examples.examples;
    cResult[5] = examples;
    cResult[6] = mapped;
    const tmpResult4 = ConjurePlanAutomodOutcomes;
  } else {
    class S {
      constructor(arg0) {
        obj = { group: automod };
        return closure_1_4(closure_1_11, obj, automod.section);
      }
    }
    if (cResult[8] === tmp4.examples) {
      class S {
        constructor(arg0) {
          obj = { group: automod };
          return closure_1_4(closure_1_11, obj, automod.section);
        }
      }
      const _Symbol2 = Symbol;
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0) {
            obj = { group: automod };
            return closure_1_4(closure_1_11, obj, automod.section);
          }
        }
        const obj5 = { variant: "text-xs/normal", color: "text-muted", children: null };
        const intl3 = util.intl;
        obj5.children = intl3.string(_modDef3849.bo4MOx);
        const tmp29 = React4(Text_Text.Text, obj5);
        cResult[11] = tmp29;
        const tmp27 = tmp29;
      } else {
        class S {
          constructor(arg0) {
            obj = { group: automod };
            return closure_1_4(closure_1_11, obj, automod.section);
          }
        }
      }
      if (cResult[12] === tmp14) {
        class S {
          constructor(arg0) {
            obj = { group: automod };
            return closure_1_4(closure_1_11, obj, automod.section);
          }
        }
        return tmp30;
      }
      const obj6 = { direction: "vertical", spacing: 4, children: null };
      const items1 = [tmp14, tmp23, tmp27];
      obj6.children = items1;
      const tmp32 = hasOwnProperty(Stack_Stack.Stack, obj6);
      cResult[12] = tmp14;
      cResult[13] = tmp23;
      cResult[14] = tmp32;
      tmp30 = tmp32;
    }
    const obj7 = { style: tmp18, children: tmp19 };
    const tmp26 = React4(View, obj7);
    cResult[8] = tmp4.examples;
    cResult[9] = tmp19;
    cResult[10] = tmp26;
  }
}) : (function ConjurePlanAutomodExamples(automod) {
  const tmp = closure_8();
  obj = { direction: "vertical", spacing: 4, children: null };
  obj2 = { style: tmp.heading, children: null };
  const obj3 = { source: null, size: null, accessibilityLabel: null };
  const obj4 = AvatarUtils;
  obj3.source = obj4.makeSource(utils_AvatarUtils.getAutomodAvatarURL());
  obj3.size = native.AvatarSizes.SIZE_16;
  const intl = util.intl;
  obj3.accessibilityLabel = intl.string(util.t.hG1StD);
  const items = [React4(native.Avatar, obj3), ];
  const obj6 = { variant: "text-sm/semibold", color: "text-muted", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(_modDef3849.z4ZKYG);
  items[1] = React4(Text_Text.Text, obj6);
  obj2.children = items;
  const items1 = [hasOwnProperty(View, obj2), , ];
  const obj7 = { style: tmp.examples, children: null };
  const result = ConjurePlanAutomodOutcomes.groupPlanAutomodExamples(automod.automod.examples);
  obj7.children = result.map((group) => closure_1_4(closure_1_11, { group }, group.section));
  items1[1] = React4(View, obj7);
  const obj9 = { variant: "text-xs/normal", color: "text-muted", children: null };
  const intl3 = util.intl;
  obj9.children = intl3.string(_modDef3849.bo4MOx);
  items1[2] = React4(Text_Text.Text, obj9);
  obj.children = items1;
  return hasOwnProperty(Stack_Stack.Stack, obj);
});