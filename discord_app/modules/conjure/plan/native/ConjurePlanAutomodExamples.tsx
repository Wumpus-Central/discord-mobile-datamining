// discord_app/modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjurePlanAutomodOutcomes from "../ConjurePlanAutomodOutcomes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4, Fragment: hasOwnProperty } = jsxProd);
const dependencyMap = { blurple: "text-brand", red: "text-feedback-critical", green: "text-feedback-positive" };
let closure_7 = ["glazedgamer", "sprinkles", "donutking"];
const createStyles = fn(5005);
let obj2 = {
  card: {
    gap: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    overflow: "hidden",
  },
  rule: null,
  section: null,
  caption: null,
  dot: null,
  rows: null,
  row: null,
  blockedRow: null,
  blockedBar: null,
  rowBody: null,
};
let obj3 = {
  gap: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  overflow: "hidden",
};
obj2.rule = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj4 = {
  paddingHorizontal: nativeDefault.space.PX_12,
  paddingBottom: nativeDefault.space.PX_12,
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.section = { gap: nativeDefault.space.PX_4 };
let obj5 = { gap: nativeDefault.space.PX_4 };
obj2.caption = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "baseline",
  paddingHorizontal: nativeDefault.space.PX_12,
};
let obj6 = {
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "baseline",
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.dot = { marginHorizontal: nativeDefault.space.PX_8 };
let obj7 = { marginHorizontal: nativeDefault.space.PX_8 };
obj2.rows = { gap: nativeDefault.space.PX_4 };
let obj8 = { gap: nativeDefault.space.PX_4 };
obj2.row = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_6,
  paddingHorizontal: nativeDefault.space.PX_12,
};
let obj9 = {
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_6,
  paddingHorizontal: nativeDefault.space.PX_12,
};
obj2.blockedRow = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT };
const rect = {
  position: "absolute",
  top: 0,
  bottom: 0,
  start: 0,
  width: 2,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
obj2.blockedBar = rect;
const obj10 = { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT };
obj2.rowBody = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ExampleRow(arg0) {
      const cResult = c.c(33);
      ({ example, username, showReason } = arg0);
      const tmp4 = closure_8();
      ({ label, blockedStyle } = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome]);
      if (cResult[0] === example) {
        if (cResult[1] === showReason) {
          let tmp5 = cResult[2];
        }
        let blockedRow = blockedStyle;
        if (blockedStyle) {
          blockedRow = tmp4.blockedRow;
        }
        if (cResult[3] === tmp4.row) {
          if (cResult[4] === blockedRow) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] !== label) {
            const labelResult = label();
            cResult[6] = label;
            cResult[7] = labelResult;
            let tmp8 = labelResult;
          } else {
            tmp8 = cResult[7];
          }
          const _HermesInternal = HermesInternal;
          const combined = "" + tmp8 + ": " + username + ", " + example.content;
          if (cResult[8] === tmp5) {
            if (cResult[9] === combined) {
              let obj3 = cResult[10];
            }
            const joined = obj3.join(", ");
            if (cResult[11] === blockedStyle) {
              if (cResult[12] === tmp4.blockedBar) {
                let tmp16 = cResult[13];
              }
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { source: null, size: null };
                const tmpResult = AvatarUtils;
                obj2.source = tmpResult.makeSource(AvatarUtils.getDefaultAvatarURL(undefined, undefined));
                obj2.size = native.AvatarSizes.XSMALL;
                const tmp22 = React3(native.Avatar, obj2);
                cResult[14] = tmp22;
                let tmp20 = tmp22;
                const tmpResult4 = AvatarUtils;
              } else {
                tmp20 = cResult[14];
              }
              if (cResult[15] !== username) {
                const obj4 = { variant: "text-sm/semibold", color: "text-strong", children: username };
                const tmp25 = React3(Text_Text.Text, obj4);
                cResult[15] = username;
                cResult[16] = tmp25;
                let tmp23 = tmp25;
              } else {
                tmp23 = cResult[16];
              }
              if (cResult[17] !== example.content) {
                const result = ConjurePlanAutomodOutcomes.renderPlanAutomodExampleContent(example.content);
                cResult[17] = example.content;
                cResult[18] = result;
                let tmp26 = result;
                const tmpResult5 = ConjurePlanAutomodOutcomes;
              } else {
                tmp26 = cResult[18];
              }
              if (cResult[19] !== tmp26) {
                const obj5 = { variant: "text-sm/normal", color: "text-default", children: tmp26 };
                const tmp30 = React3(Text_Text.Text, obj5);
                cResult[19] = tmp26;
                cResult[20] = tmp30;
                let tmp28 = tmp30;
              } else {
                tmp28 = cResult[20];
              }
              if (cResult[21] !== tmp5) {
                let tmp32 = null;
                if (null != tmp5) {
                  const obj6 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: tmp5 };
                  tmp32 = React3(Text_Text.Text, obj6);
                }
                cResult[21] = tmp5;
                cResult[22] = tmp32;
                let tmp31 = tmp32;
              } else {
                tmp31 = cResult[22];
              }
              if (cResult[23] === tmp4.rowBody) {
                if (cResult[24] === tmp23) {
                  if (cResult[25] === tmp28) {
                    if (cResult[26] === tmp31) {
                      let tmp34 = cResult[27];
                    }
                    if (cResult[28] === tmp34) {
                      if (cResult[29] === tmp7) {
                        if (cResult[30] === joined) {
                          if (cResult[31] === tmp16) {
                            let tmp38 = cResult[32];
                          }
                          return tmp38;
                        }
                      }
                    }
                    const obj7 = { style: tmp7, accessible: true, accessibilityLabel: joined, children: null };
                    const items = [tmp16, tmp20, tmp34];
                    obj7.children = items;
                    const tmp41 = React4(View, obj7);
                    cResult[28] = tmp34;
                    cResult[29] = tmp7;
                    cResult[30] = joined;
                    cResult[31] = tmp16;
                    cResult[32] = tmp41;
                    tmp38 = tmp41;
                  }
                }
              }
              const obj8 = { style: tmp4.rowBody, children: null };
              const items1 = [tmp23, tmp28, tmp31];
              obj8.children = items1;
              const tmp37 = React4(View, obj8);
              cResult[23] = tmp4.rowBody;
              cResult[24] = tmp23;
              cResult[25] = tmp28;
              cResult[26] = tmp31;
              cResult[27] = tmp37;
              tmp34 = tmp37;
            }
            let tmp17 = null;
            if (blockedStyle) {
              const obj9 = { style: tmp4.blockedBar };
              tmp17 = React3(View, obj9);
            }
            cResult[11] = blockedStyle;
            cResult[12] = tmp4.blockedBar;
            cResult[13] = tmp17;
            tmp16 = tmp17;
          }
          const items2 = [combined, tmp5];
          const found = items2.filter((item) => null != item);
          cResult[8] = tmp5;
          cResult[9] = combined;
          cResult[10] = found;
          obj3 = found;
        }
        const items3 = [tmp4.row, blockedRow];
        cResult[3] = tmp4.row;
        cResult[4] = blockedRow;
        cResult[5] = items3;
        tmp7 = items3;
      }
      let result1 = null;
      if (showReason) {
        result1 = ConjurePlanAutomodOutcomes.planAutomodReasonText(example);
        const tmpResult6 = ConjurePlanAutomodOutcomes;
      }
      cResult[0] = example;
      cResult[1] = showReason;
      cResult[2] = result1;
      tmp5 = result1;
    }
  : function ExampleRow(showReason) {
      ({ example, username } = showReason);
      const tmp = closure_8();
      const obj = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome];
      const blockedStyle = obj.blockedStyle;
      let result = null;
      if (showReason.showReason) {
        result = ConjurePlanAutomodOutcomes.planAutomodReasonText(example);
        const tmp2Result = ConjurePlanAutomodOutcomes;
      }
      const items = [tmp.row];
      let blockedRow = blockedStyle;
      if (blockedStyle) {
        blockedRow = tmp.blockedRow;
      }
      const obj2 = { style: items, accessible: true, accessibilityLabel: null, children: null };
      items[1] = blockedRow;
      const items1 = ["" + obj.label() + ": " + username + ", " + example.content, result];
      const found = items1.filter((item) => null != item);
      obj2.accessibilityLabel = found.join(", ");
      let tmp7 = null;
      if (blockedStyle) {
        const obj3 = { style: tmp.blockedBar };
        tmp7 = React3(View, obj3);
      }
      const items2 = [tmp7, ,];
      const obj4 = { source: null, size: null };
      const tmp2Result4 = AvatarUtils;
      obj4.source = tmp2Result4.makeSource(AvatarUtils.getDefaultAvatarURL(undefined, undefined));
      obj4.size = native.AvatarSizes.XSMALL;
      items2[1] = React3(native.Avatar, obj4);
      const obj5 = { style: tmp.rowBody, children: null };
      const items3 = [
        React3(Text_Text.Text, { variant: "text-sm/semibold", color: "text-strong", children: username }),
        ,
      ];
      const obj6 = { variant: "text-sm/normal", color: "text-default", children: null };
      const tmp2Result5 = AvatarUtils;
      obj6.children = ConjurePlanAutomodOutcomes.renderPlanAutomodExampleContent(example.content);
      items3[1] = React3(Text_Text.Text, obj6);
      let tmp9Result = null;
      if (null != result) {
        const obj7 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: result };
        tmp9Result = React3(Text_Text.Text, obj7);
      }
      items3[2] = tmp9Result;
      obj5.children = items3;
      items2[2] = React4(View, obj5);
      obj2.children = items2;
      return React4(View, obj2);
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ExampleSection(arg0) {
      const cResult = firstIndex(size[6]).c(31);
      ({ group, firstIndex } = arg0);
      const tmp4 = closure_8();
      const obj2 = firstIndex(size[7]).CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
      if (cResult[0] !== group.examples) {
        const _Set = Set;
        const examples = group.examples;
        const set = new Set(examples.map(firstIndex(tmp2[7]).planAutomodReasonText));
        cResult[0] = group.examples;
        cResult[1] = set;
        size = set;
      } else {
        size = cResult[1];
      }
      if (cResult[2] === group.examples[0]) {
        if (cResult[3] === size.size) {
          let tmp10 = cResult[4];
        }
        ({ section, caption } = tmp4);
        if (cResult[5] !== obj2) {
          const labelResult = obj2.label();
          cResult[5] = obj2;
          cResult[6] = labelResult;
          let tmp14 = labelResult;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] === dependencyMap[obj2.tone]) {
          if (cResult[8] === tmp14) {
            let tmp16 = cResult[9];
          }
          if (cResult[10] === tmp10) {
            if (cResult[11] === tmp4.dot) {
              let tmp19 = cResult[12];
            }
            if (cResult[13] === tmp4.caption) {
              if (cResult[14] === tmp16) {
                if (cResult[15] === tmp19) {
                  let tmp24 = cResult[16];
                }
                if (cResult[17] === firstIndex) {
                  if (cResult[18] === group.examples) {
                    if (cResult[19] === size.size) {
                      if (cResult[24] === tmp4.rows) {
                        if (cResult[25] === tmp29) {
                          let tmp33 = cResult[26];
                        }
                        if (cResult[27] === tmp4.section) {
                          if (cResult[28] === tmp33) {
                            if (cResult[29] === tmp24) {
                              let tmp37 = cResult[30];
                            }
                            return tmp37;
                          }
                        }
                        const obj3 = { style: section, children: null };
                        const items = [tmp24, tmp33];
                        obj3.children = items;
                        const tmp40 = closure_4(View, obj3);
                        cResult[27] = tmp4.section;
                        cResult[28] = tmp33;
                        cResult[29] = tmp24;
                        cResult[30] = tmp40;
                        tmp37 = tmp40;
                      }
                      const obj4 = { style: tmp28, children: cResult[20] };
                      const tmp36 = closure_3(View, obj4);
                      cResult[24] = tmp4.rows;
                      cResult[25] = cResult[20];
                      cResult[26] = tmp36;
                      tmp33 = tmp36;
                    }
                  }
                }
                if (cResult[21] === firstIndex) {
                  if (cResult[22] === size.size) {
                    let tmp30 = cResult[23];
                  }
                  const examples1 = group.examples;
                  const mapped = examples1.map(tmp30);
                  cResult[17] = firstIndex;
                  group = group.examples;
                  cResult[18] = group;
                  size = size.size;
                  cResult[19] = size;
                  cResult[20] = mapped;
                }
                const fn = function z(example, arg1) {
                  return React3(
                    closure_9,
                    { example, username: length[(firstIndex + arg1) % length.length], showReason: size.size > 1 },
                    arg1,
                  );
                };
                cResult[21] = firstIndex;
                cResult[22] = size.size;
                cResult[23] = fn;
                tmp30 = fn;
              }
            }
            const obj5 = { style: caption, accessibilityRole: "header", children: null };
            const items1 = [tmp16, tmp19];
            obj5.children = items1;
            const tmp27 = closure_4(View, obj5);
            cResult[13] = tmp4.caption;
            cResult[14] = tmp16;
            cResult[15] = tmp19;
            cResult[16] = tmp27;
            tmp24 = tmp27;
          }
          let tmp20 = null;
          if (null != tmp10) {
            const obj6 = { children: null };
            const obj7 = {
              variant: "text-xs/semibold",
              color: "text-muted",
              style: tmp4.dot,
              accessible: false,
              children: "\u00B7",
            };
            const items2 = [closure_3(firstIndex(tmp2[10]).Text, obj7)];
            const obj8 = { variant: "text-xs/semibold", color: "text-muted", children: tmp10 };
            items2[1] = closure_3(firstIndex(tmp2[10]).Text, obj8);
            obj6.children = items2;
            tmp20 = closure_4(closure_5, obj6);
          }
          cResult[10] = tmp10;
          cResult[11] = tmp4.dot;
          cResult[12] = tmp20;
          tmp19 = tmp20;
        }
        const obj9 = { variant: "text-xs/semibold", color: dependencyMap[obj2.tone], children: tmp14 };
        const tmp18 = closure_3(firstIndex(tmp2[10]).Text, obj9);
        cResult[7] = dependencyMap[obj2.tone];
        cResult[8] = tmp14;
        cResult[9] = tmp18;
        tmp16 = tmp18;
      }
      let result = null;
      if (1 === size.size) {
        result = firstIndex(tmp2[7]).planAutomodReasonText(group.examples[0]);
        const tmpResult = firstIndex(tmp2[7]);
      }
      cResult[2] = group.examples[0];
      cResult[3] = size.size;
      cResult[4] = result;
      tmp10 = result;
      const obj = firstIndex(size[6]);
    }
  : function ExampleSection(arg0) {
      ({ group, firstIndex: require } = arg0);
      let set;
      const tmp = closure_8();
      const obj = require("ConjurePlanAutomodOutcomes").CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
      const examples = group.examples;
      set = new Set(examples.map(require("ConjurePlanAutomodOutcomes").planAutomodReasonText));
      let result = null;
      if (1 === set.size) {
        result = require("ConjurePlanAutomodOutcomes").planAutomodReasonText(group.examples[0]);
        const tmp2Result = require("ConjurePlanAutomodOutcomes");
      }
      const obj2 = { style: tmp.section, children: null };
      const obj3 = { style: tmp.caption, accessibilityRole: "header", children: null };
      const items = [
        closure_3(require("Text/Text").Text, {
          variant: "text-xs/semibold",
          color: dependencyMap[obj.tone],
          children: obj.label(),
        }),
      ];
      let tmp6Result = null;
      if (null != result) {
        const obj5 = { children: null };
        const obj6 = {
          variant: "text-xs/semibold",
          color: "text-muted",
          style: tmp.dot,
          accessible: false,
          children: "\u00B7",
        };
        const items1 = [closure_3(require("Text/Text").Text, obj6)];
        const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: result };
        items1[1] = closure_3(require("Text/Text").Text, obj7);
        obj5.children = items1;
        tmp6Result = closure_4(closure_5, obj5);
      }
      items[1] = tmp6Result;
      obj3.children = items;
      const items2 = [closure_4(View, obj3)];
      const obj8 = { style: tmp.rows, children: null };
      const examples1 = group.examples;
      obj8.children = examples1.map((example, index) =>
        React3(
          closure_9,
          { example, username: length[(_require + index) % length.length], showReason: set.size > 1 },
          index,
        ),
      );
      items2[1] = closure_3(View, obj8);
      obj2.children = items2;
      return closure_4(View, obj2);
    };
ReactCompilerGating = fn(558);
const obj11 = { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjurePlanAutomodExamples(automod) {
      let Text = require;
      let tmp = dependencyMap;
      const cResult = c.c(18);
      let card = automod.automod;
      let rule = closure_8();
      if (cResult[0] === card.examples) {
        if (cResult[1] === card.rule_name) {
          if (cResult[2] === rule.card) {
            if (cResult[3] === rule.rule) {
              if (cResult[13] === cResult[4]) {
                if (cResult[14] === tmp4) {
                  if (cResult[15] === tmp5) {
                    if (cResult[16] === tmp6) {
                      let tmp17 = cResult[17];
                    }
                    return tmp17;
                  }
                }
              }
              const obj2 = { style: cResult[5], children: null };
              const items = [cResult[6], cResult[7]];
              obj2.children = items;
              const tmp19 = closure_4(cResult[4], obj2);
              cResult[13] = cResult[4];
              cResult[14] = cResult[5];
              cResult[15] = cResult[6];
              cResult[16] = cResult[7];
              cResult[17] = tmp19;
              tmp17 = tmp19;
            }
          }
        }
      }
      const result = ConjurePlanAutomodOutcomes.groupPlanAutomodExamples(card.examples);
      require = result;
      if (cResult[8] !== card.rule_name) {
        const trimmed = card.rule_name.trim();
        cResult[8] = card.rule_name;
        cResult[9] = trimmed;
        let rule2 = trimmed;
      } else {
        rule2 = cResult[9];
      }
      const card2 = rule.card;
      if (cResult[10] === rule2) {
        if (cResult[11] === rule.rule) {
          let tmp9 = cResult[12];
        }
        const mapped = result.map((group, index) => {
          const obj = { group, firstIndex: null };
          const substr = result.slice(0, index);
          obj.firstIndex = substr.reduce((acc, examples) => acc + examples.examples.length, 0);
          return React3(closure_10, obj, group.section);
        });
        cResult[0] = card.examples;
        cResult[1] = card.rule_name;
        card = rule.card;
        cResult[2] = card;
        rule = rule.rule;
        cResult[3] = rule;
        cResult[4] = View;
        cResult[5] = card2;
        cResult[6] = tmp9;
        cResult[7] = mapped;
      }
      let tmp10 = null;
      if ("" !== rule2) {
        const obj3 = { style: rule.rule, children: null };
        Text = Text_Text.Text;
        const obj4 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: rule2 };
        tmp = closure_3(Text, obj4);
        obj3.children = tmp;
        tmp10 = closure_3(View, obj3);
      }
      cResult[10] = rule2;
      rule2 = rule.rule;
      cResult[11] = rule2;
      cResult[12] = tmp10;
      tmp9 = tmp10;
      const TextResult = ConjurePlanAutomodOutcomes;
    }
  : function ConjurePlanAutomodExamples(automod) {
      automod = automod.automod;
      _require = undefined;
      const tmp = closure_8();
      const result = require("ConjurePlanAutomodOutcomes").groupPlanAutomodExamples(automod.examples);
      _require = result;
      const trimmed = automod.rule_name.trim();
      const obj2 = { style: tmp.card, children: null };
      let tmp7 = null;
      if ("" !== trimmed) {
        const obj3 = { style: tmp.rule, children: null };
        const obj4 = { variant: "text-sm/normal", color: "text-default", lineClamp: 1, children: trimmed };
        obj3.children = closure_3(require("Text/Text").Text, obj4);
        tmp7 = closure_3(View, obj3);
      }
      const items = [
        tmp7,
        result.map((group, index) => {
          const obj = { group, firstIndex: null };
          const substr = _undefined.slice(0, index);
          obj.firstIndex = substr.reduce((acc, examples) => acc + examples.examples.length, 0);
          return React3(closure_10, obj, group.section);
        }),
      ];
      obj2.children = items;
      return closure_4(View, obj2);
    };
