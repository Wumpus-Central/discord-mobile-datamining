// discord_app/modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import AvatarUtils from "../../../../utils/AvatarUtils.tsx";
import utils_AvatarUtils from "../../../../utils/native/AvatarUtils.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import CircleCheckIcon from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import ShieldIcon2 from "../../../../design/components/Icon/native/redesign/generated/ShieldIcon.tsx";
import BellIcon from "../../../../design/components/Icon/native/redesign/generated/BellIcon.tsx";
import ConjurePlanAutomodOutcomes from "../ConjurePlanAutomodOutcomes.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let automod, group, reason;

let closure_4;
let hasOwnProperty;
let obj3;
let obj4;
let obj5;
let obj7;
let obj8;
let rect;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { blocked: ShieldIcon2.ShieldIcon, alert: BellIcon.BellIcon, allowed: CircleCheckIcon.CircleCheckIcon };
let obj2 = { blurple: obj3, red: obj4, green: obj5 };
obj3 = { text: "text-brand", icon: nativeDefault.colors.TEXT_BRAND };
obj4 = { text: "text-feedback-critical", icon: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj5 = { text: "text-feedback-positive", icon: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE };
let createStyles = createStyles_mod;
let obj6 = {
  typeTag: obj7,
  heading: obj8,
  examples: { gap: nativeDefault.space.PX_12 },
  section: { gap: nativeDefault.space.PX_8 },
  sectionHeader: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 },
  sectionLabel: { textTransform: "uppercase", letterSpacing: 0.24 },
  rows: {
    gap: nativeDefault.space.PX_4,
    paddingVertical: nativeDefault.space.PX_4,
    borderRadius: nativeDefault.radii.sm,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: nativeDefault.space.PX_8,
    paddingVertical: nativeDefault.space.PX_6,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
  blockedRow: { backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT },
  blockedBar: rect,
  rowBody: { flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 },
};
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
({ gap: nativeDefault.space.PX_12 });
({ gap: nativeDefault.space.PX_8 });
({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 });
({
  gap: nativeDefault.space.PX_4,
  paddingVertical: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  overflow: "hidden",
});
({
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_6,
  paddingHorizontal: nativeDefault.space.PX_12,
});
({ backgroundColor: nativeDefault.colors.MESSAGE_AUTOMOD_BACKGROUND_DEFAULT });
rect = {
  position: "absolute",
  top: 0,
  bottom: 0,
  start: 0,
  width: 2,
  backgroundColor: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
({ flex: 1, minWidth: 0, gap: nativeDefault.space.PX_4 / 2 });
let closure_8 = createStyles(obj6);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let items;
      let tmp13;
      let tmp9;
      obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        obj2 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
        const ShieldIcon = ShieldIcon2.ShieldIcon;
        const tmp8 = React3(ShieldIcon, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(_modDef3723.DnWMLj) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        const tmp12 = React3(Text, obj3);
        cResult[1] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== tmp4.typeTag) {
        const obj4 = { style: tmp4.typeTag, children: items };
        items = [first, tmp9];
        const tmp16 = hasOwnProperty(View, obj4);
        cResult[2] = tmp4.typeTag;
        cResult[3] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[3];
      }
      return tmp13;
    }
  : () => {
      let intl;
      let items;
      obj = { style: closure_8().typeTag, children: items };
      obj2 = { size: "xs", color: nativeDefault.colors.TEXT_SUBTLE };
      const ShieldIcon = ShieldIcon2.ShieldIcon;
      items = [React3(ShieldIcon, obj2)];
      const obj3 = { variant: "text-sm/medium", color: "text-subtle", children: intl.string(_modDef3723.DnWMLj) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      items[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (reason) => {
      obj = react2;
      const cResult = obj.c(2);
      reason = reason.reason;
      let tmp4 = null;
      if (null != reason) {
        let tmp5;
        if (cResult[0] !== reason) {
          obj2 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: reason };
          const tmp7 = React3(Text_Text.Text, obj2);
          cResult[0] = reason;
          cResult[1] = tmp7;
          tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        tmp4 = tmp5;
      }
      return tmp4;
    }
  : (reason) => {
      reason = reason.reason;
      let tmp = null;
      if (null != reason) {
        obj = { variant: "text-xs/normal", color: "text-muted", lineClamp: 2, children: reason };
        tmp = React3(Text_Text.Text, obj);
      }
      return tmp;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (example) => {
      let blockedStyle;
      let items;
      let items1;
      let label;
      let makeSource;
      let tmp5;
      let tmpResult5;
      obj = react2;
      const cResult = obj.c(29);
      example = example.example;
      const tmp4 = closure_8();
      ({ label, blockedStyle } = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome]);
      if (cResult[0] !== example) {
        const tmpResult = ConjurePlanAutomodOutcomes;
        const result = tmpResult.planAutomodReasonText(example);
        cResult[0] = example;
        cResult[1] = result;
        tmp5 = result;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.row) {
        let tmp8;
        let tmp9;
        if (cResult[3] === (blockedStyle && tmp4.blockedRow)) {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== label) {
          const labelResult = label();
          cResult[5] = label;
          cResult[6] = labelResult;
          tmp9 = labelResult;
        } else {
          tmp9 = cResult[6];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + tmp9 + ": " + example.content;
        if (cResult[7] === tmp5) {
          let obj3;
          if (cResult[8] === combined) {
            obj3 = cResult[9];
          }
          const joined = obj3.join(", ");
          if (cResult[10] === blockedStyle) {
            let tmp15;
            let tmp19;
            let tmp23;
            let tmp25;
            let tmp28;
            if (cResult[11] === tmp4.blockedBar) {
              tmp15 = cResult[12];
            }
            const _Symbol = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              obj2 = {
                source: makeSource(tmpResult5.getDefaultAvatarURL(undefined, undefined)),
                size: native.AvatarSizes.XSMALL,
              };
              const Avatar = native.Avatar;
              makeSource = AvatarUtils.makeSource;
              AvatarUtils;
              tmpResult5 = AvatarUtils;
              const tmp22 = React3(Avatar, obj2);
              cResult[13] = tmp22;
              tmp19 = tmp22;
            } else {
              tmp19 = cResult[13];
            }
            const rowBody = tmp4.rowBody;
            if (cResult[14] !== example.content) {
              const tmpResult6 = ConjurePlanAutomodOutcomes;
              const result1 = tmpResult6.renderPlanAutomodExampleContent(example.content);
              cResult[14] = example.content;
              cResult[15] = result1;
              tmp23 = result1;
            } else {
              tmp23 = cResult[15];
            }
            if (cResult[16] !== tmp23) {
              const obj4 = { variant: "text-sm/normal", color: "text-default", children: tmp23 };
              const tmp27 = React3(Text_Text.Text, obj4);
              cResult[16] = tmp23;
              cResult[17] = tmp27;
              tmp25 = tmp27;
            } else {
              tmp25 = cResult[17];
            }
            if (cResult[18] !== tmp5) {
              const obj5 = { reason: tmp5 };
              const tmp31 = React3(closure_9, obj5);
              cResult[18] = tmp5;
              cResult[19] = tmp31;
              tmp28 = tmp31;
            } else {
              tmp28 = cResult[19];
            }
            if (cResult[20] === tmp4.rowBody) {
              if (cResult[21] === tmp25) {
                let tmp32;
                if (cResult[22] === tmp28) {
                  tmp32 = cResult[23];
                }
                if (cResult[24] === tmp32) {
                  if (cResult[25] === tmp8) {
                    if (cResult[26] === joined) {
                      let tmp36;
                      if (cResult[27] === tmp15) {
                        tmp36 = cResult[28];
                      }
                      return tmp36;
                    }
                  }
                }
                const obj6 = { style: tmp8, accessible: true, accessibilityLabel: joined, children: items };
                items = [tmp15, tmp19, tmp32];
                const tmp39 = hasOwnProperty(View, obj6);
                cResult[24] = tmp32;
                cResult[25] = tmp8;
                cResult[26] = joined;
                cResult[27] = tmp15;
                cResult[28] = tmp39;
                tmp36 = tmp39;
              }
            }
            const obj7 = { style: rowBody, children: items1 };
            items1 = [tmp25, tmp28];
            const tmp35 = hasOwnProperty(View, obj7);
            cResult[20] = tmp4.rowBody;
            cResult[21] = tmp25;
            cResult[22] = tmp28;
            cResult[23] = tmp35;
            tmp32 = tmp35;
          }
          let tmp16 = null;
          if (blockedStyle) {
            const obj8 = { style: tmp4.blockedBar };
            tmp16 = React3(View, obj8);
          }
          cResult[10] = blockedStyle;
          cResult[11] = tmp4.blockedBar;
          cResult[12] = tmp16;
          tmp15 = tmp16;
        }
        const items2 = [combined, tmp5];
        const found = items2.filter((item) => null != item);
        cResult[7] = tmp5;
        cResult[8] = combined;
        cResult[9] = found;
        obj3 = found;
      }
      const items3 = [tmp4.row, blockedStyle && tmp4.blockedRow];
      cResult[2] = tmp4.row;
      cResult[3] = blockedStyle && tmp4.blockedRow;
      cResult[4] = items3;
      tmp8 = items3;
    }
  : (example) => {
      let blockedStyle;
      let found;
      let items2;
      let items3;
      let label;
      let makeSource;
      let tmp2Result3;
      let tmp2Result4;
      example = example.example;
      const tmp = closure_8();
      ({ blockedStyle, label } = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_OUTCOMES[example.outcome]);
      obj = ConjurePlanAutomodOutcomes;
      const result = obj.planAutomodReasonText(example);
      const items = [tmp.row];
      const tmp7 = blockedStyle && tmp.blockedRow;
      items[1] = tmp7;
      obj2 = { style: items, accessible: true, accessibilityLabel: found.join(", "), children: items2 };
      const items1 = ["" + label() + ": " + example.content, result];
      found = items1.filter((item) => null != item);
      let tmp8 = null;
      if (blockedStyle) {
        const obj3 = { style: tmp.blockedBar };
        tmp8 = React3(View, obj3);
      }
      items2 = [tmp8, ,];
      const obj4 = {
        source: makeSource(tmp2Result3.getDefaultAvatarURL(undefined, undefined)),
        size: native.AvatarSizes.XSMALL,
      };
      const Avatar = native.Avatar;
      makeSource = AvatarUtils.makeSource;
      AvatarUtils;
      tmp2Result3 = AvatarUtils;
      items2[1] = React3(Avatar, obj4);
      const obj5 = { style: tmp.rowBody, children: items3 };
      const obj6 = {
        variant: "text-sm/normal",
        color: "text-default",
        children: tmp2Result4.renderPlanAutomodExampleContent(example.content),
      };
      const Text = Text_Text.Text;
      tmp2Result4 = ConjurePlanAutomodOutcomes;
      items3 = [React3(Text, obj6), React3(closure_9, { reason: result })];
      items2[2] = hasOwnProperty(View, obj5);
      return hasOwnProperty(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (group) => {
      let items;
      let items1;
      obj = react2;
      const cResult = obj.c(23);
      group = group.group;
      const tmp4 = closure_8();
      obj2 = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
      if (cResult[0] === obj[group.section]) {
        let tmp9;
        let tmp11;
        if (cResult[1] === obj2[obj2.tone].icon) {
          tmp9 = cResult[2];
        }
        const text = tmp6.text;
        const sectionLabel = tmp4.sectionLabel;
        if (cResult[3] !== obj2) {
          const labelResult = obj2.label();
          cResult[3] = obj2;
          cResult[4] = labelResult;
          tmp11 = labelResult;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] === obj2[obj2.tone].text) {
          if (cResult[6] === tmp4.sectionLabel) {
            let tmp13;
            if (cResult[7] === tmp11) {
              tmp13 = cResult[8];
            }
            if (cResult[9] === tmp4.sectionHeader) {
              if (cResult[10] === tmp9) {
                let tmp16;
                let tmp20;
                if (cResult[11] === tmp13) {
                  tmp16 = cResult[12];
                }
                const rows = tmp4.rows;
                if (cResult[13] !== group.examples) {
                  let tmp22;
                  const _Symbol = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const fn = function w(example, arg1) {
                      obj = { example };
                      return closure_1_4(closure_1_10, obj, arg1);
                    };
                    cResult[15] = fn;
                    tmp22 = fn;
                  } else {
                    tmp22 = cResult[15];
                  }
                  const examples = group.examples;
                  const mapped = examples.map(tmp22);
                  cResult[13] = group.examples;
                  cResult[14] = mapped;
                  tmp20 = mapped;
                } else {
                  tmp20 = cResult[14];
                }
                if (cResult[16] === tmp4.rows) {
                  let tmp24;
                  if (cResult[17] === tmp20) {
                    tmp24 = cResult[18];
                  }
                  if (cResult[19] === tmp4.section) {
                    if (cResult[20] === tmp24) {
                      let tmp28;
                      if (cResult[21] === tmp16) {
                        tmp28 = cResult[22];
                      }
                      return tmp28;
                    }
                  }
                  const obj3 = { style: tmp7, children: items };
                  items = [tmp16, tmp24];
                  const tmp31 = hasOwnProperty(View, obj3);
                  cResult[19] = tmp4.section;
                  cResult[20] = tmp24;
                  cResult[21] = tmp16;
                  cResult[22] = tmp31;
                  tmp28 = tmp31;
                }
                const obj4 = { style: rows, children: tmp20 };
                const tmp27 = React3(View, obj4);
                cResult[16] = tmp4.rows;
                cResult[17] = tmp20;
                cResult[18] = tmp27;
                tmp24 = tmp27;
              }
            }
            const obj5 = { style: tmp8, children: items1 };
            items1 = [tmp9, tmp13];
            const tmp19 = hasOwnProperty(View, obj5);
            cResult[9] = tmp4.sectionHeader;
            cResult[10] = tmp9;
            cResult[11] = tmp13;
            cResult[12] = tmp19;
            tmp16 = tmp19;
          }
        }
        const obj6 = { variant: "text-xs/semibold", color: text, style: sectionLabel, children: tmp11 };
        const tmp15 = React3(Text_Text.Heading, obj6);
        cResult[5] = obj2[obj2.tone].text;
        cResult[6] = tmp4.sectionLabel;
        cResult[7] = tmp11;
        cResult[8] = tmp15;
        tmp13 = tmp15;
      }
      const obj7 = { size: "xs", color: obj2[obj2.tone].icon };
      const tmp10 = React3(obj[group.section], obj7);
      cResult[0] = obj[group.section];
      cResult[1] = obj2[obj2.tone].icon;
      cResult[2] = tmp10;
      tmp9 = tmp10;
    }
  : (group) => {
      let examples;
      let items;
      let items1;
      group = group.group;
      const tmp = closure_8();
      obj = ConjurePlanAutomodOutcomes.CONJURE_PLAN_AUTOMOD_SECTIONS[group.section];
      obj2 = { style: tmp.section, children: items1 };
      const obj3 = { style: tmp.sectionHeader, children: items };
      items = [,];
      const obj4 = { size: "xs", color: obj2[obj.tone].icon };
      items[0] = React3(obj[group.section], obj4);
      const obj5 = {
        variant: "text-xs/semibold",
        color: obj2[obj.tone].text,
        style: tmp.sectionLabel,
        children: obj.label(),
      };
      const Heading = Text_Text.Heading;
      items[1] = React3(Heading, obj5);
      items1 = [hasOwnProperty(View, obj3)];
      const obj6 = {
        style: tmp.rows,
        children: examples.map((example, index) => {
          obj = { example };
          return closure_1_4(closure_1_10, obj, index);
        }),
      };
      examples = group.examples;
      items1[1] = React3(View, obj6);
      return hasOwnProperty(View, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (automod) => {
      let first;
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let tmp11;
      let tmp15;
      let tmp27;
      let tmp8;
      obj = react2;
      const cResult = obj.c(15);
      automod = automod.automod;
      const tmp4 = closure_8();
      const heading = tmp4.heading;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const makeSource = AvatarUtils.makeSource;
        AvatarUtils;
        const tmpResult3 = utils_AvatarUtils;
        const source = makeSource(tmpResult3.getAutomodAvatarURL());
        cResult[0] = source;
        first = source;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        obj2 = { source: first, size: native.AvatarSizes.SIZE_16, accessibilityLabel: intl.string(intl4.t.hG1StD) };
        const Avatar = native.Avatar;
        intl = intl4.intl;
        const tmp10 = React3(Avatar, obj2);
        cResult[1] = tmp10;
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3723.z4ZKYG) };
        const Text = Text_Text.Text;
        intl2 = intl4.intl;
        const tmp14 = React3(Text, obj3);
        cResult[2] = tmp14;
        tmp11 = tmp14;
      } else {
        tmp11 = cResult[2];
      }
      if (cResult[3] !== tmp4.heading) {
        const obj4 = { style: heading, children: items };
        items = [tmp8, tmp11];
        const tmp18 = hasOwnProperty(View, obj4);
        cResult[3] = tmp4.heading;
        cResult[4] = tmp18;
        tmp15 = tmp18;
      } else {
        tmp15 = cResult[4];
      }
      const examples = tmp4.examples;
      if (cResult[5] !== automod.examples) {
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
        const tmpResult4 = ConjurePlanAutomodOutcomes;
        const result = tmpResult4.groupPlanAutomodExamples(automod.examples);
        const mapped = result.map(S);
        cResult[5] = automod.examples;
        cResult[6] = mapped;
      } else {
        class S {
          constructor(arg0) {
            obj = { group: automod };
            return closure_1_4(closure_1_11, obj, automod.section);
          }
        }
      }
      if (cResult[8] === tmp4.examples) {
        let tmp24;
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
          const obj5 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(_modDef3723.bo4MOx) };
          const Text2 = Text_Text.Text;
          intl3 = intl4.intl;
          const tmp26 = React3(Text2, obj5);
          cResult[11] = tmp26;
          tmp24 = tmp26;
        } else {
          class S {
            constructor(arg0) {
              obj = { group: automod };
              return closure_1_4(closure_1_11, obj, automod.section);
            }
          }
        }
        if (cResult[12] === tmp15) {
          class S {
            constructor(arg0) {
              obj = { group: automod };
              return closure_1_4(closure_1_11, obj, automod.section);
            }
          }
          return tmp27;
        }
        const obj6 = { direction: "vertical", spacing: 4, children: items1 };
        items1 = [tmp15, tmp22, tmp24];
        const tmp29 = hasOwnProperty(Stack_Stack.Stack, obj6);
        cResult[12] = tmp15;
        cResult[13] = tmp22;
        cResult[14] = tmp29;
        tmp27 = tmp29;
      }
      cResult[8] = tmp4.examples;
      cResult[9] = tmp19;
      cResult[10] = React3(View, { style: examples, children: tmp19 });
      const tmp23 = React3(View, { style: examples, children: tmp19 });
    }
  : (automod) => {
      let intl;
      let intl2;
      let intl3;
      let items;
      let items1;
      let makeSource;
      let obj4;
      let result;
      automod = automod.automod;
      const tmp = closure_8();
      obj = { direction: "vertical", spacing: 4, children: items1 };
      obj2 = { style: tmp.heading, children: items };
      const Stack = Stack_Stack.Stack;
      const obj3 = {
        source: makeSource(obj4.getAutomodAvatarURL()),
        size: native.AvatarSizes.SIZE_16,
        accessibilityLabel: intl.string(intl4.t.hG1StD),
      };
      const Avatar = native.Avatar;
      makeSource = AvatarUtils.makeSource;
      AvatarUtils;
      obj4 = utils_AvatarUtils;
      intl = intl4.intl;
      items = [React3(Avatar, obj3)];
      const obj5 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.string(_modDef3723.z4ZKYG) };
      const Text = Text_Text.Text;
      intl2 = intl4.intl;
      items[1] = React3(Text, obj5);
      items1 = [hasOwnProperty(View, obj2), ,];
      const obj6 = {
        style: tmp.examples,
        children: result.map((group) => {
          obj = { group };
          return closure_1_4(closure_1_11, obj, group.section);
        }),
      };
      const obj7 = ConjurePlanAutomodOutcomes;
      result = obj7.groupPlanAutomodExamples(automod.examples);
      items1[1] = React3(View, obj6);
      const obj8 = { variant: "text-xs/normal", color: "text-muted", children: intl3.string(_modDef3723.bo4MOx) };
      const Text2 = Text_Text.Text;
      intl3 = intl4.intl;
      items1[2] = React3(Text2, obj8);
      return hasOwnProperty(Stack, obj);
    };
let result = size.fileFinishedImporting("modules/conjure/plan/native/ConjurePlanAutomodExamples.tsx");

export default tmp6;
export const ConjurePlanAutomodTypeTag = tmp5;
