// discord_app/modules/user_settings/design_system/native/UserSettingsDesignSystemBadge.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import Card from "../../../../design/components/Card/native/Card.native.tsx";
import TableRadioGroup from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import StarIcon3 from "../../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import ExperimentalCommonIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalCommonIcon.tsx";
import ExperimentalRareIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalRareIcon.tsx";
import ExperimentalEpicIcon from "../../../../design/components/Icon/native/redesign/generated/ExperimentalEpicIcon.tsx";
import ExperimentalMythicIcon2 from "../../../../design/components/Icon/native/redesign/generated/ExperimentalMythicIcon.tsx";
import Badge_Badge from "../../../../design/components/Badge/native/Badge.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4945);
let obj2 = {
  container: { padding: nativeDefault.space.PX_16 },
  preview: null,
  badgeRow: null,
  narrow: null,
  comparisonLabel: null,
  comparisonCell: null,
  layoutCase: null,
  inlineRow: null,
  trailingRow: null,
  inlineBadge: null,
  selfStart: null,
  selfStartParent: null,
};
let obj3 = { padding: nativeDefault.space.PX_16 };
obj2.preview = { minHeight: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center" };
let obj4 = { minHeight: nativeDefault.space.PX_32, alignItems: "center", justifyContent: "center" };
obj2.badgeRow = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.narrow = { width: 120, flexDirection: "row" };
obj2.comparisonLabel = { flex: 1 };
obj2.comparisonCell = { width: 88, alignItems: "flex-start" };
let obj5 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.layoutCase = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
};
obj2.inlineRow = { flexDirection: "row", alignItems: "center" };
obj2.trailingRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj6 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_8,
};
obj2.inlineBadge = { marginLeft: nativeDefault.space.PX_8 };
obj2.selfStart = { alignSelf: "flex-start" };
obj2.selfStartParent = { alignItems: "flex-start" };
let closure_9 = createStyles.createStyles(obj2);
let closure_10 = ["secondary", "primary", "expressive", "rarity-common", "rarity-rare", "rarity-epic", "rarity-mythic"];
let items = [
  { value: "new", label: "new" },
  { value: "beta", label: "beta" },
  { value: "early_access", label: "early_access" },
  { value: "free_trial", label: "free_trial" },
  { value: "custom", label: "Custom text" },
];
let c12 = "A very long custom badge label that truncates";
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Playground() {
      const cResult = c.c(31);
      const tmp4 = closure_9();
      const tmp5 = _slicedToArray(noop.useState("secondary"), 2);
      const first = tmp5[0];
      const tmp7 = _slicedToArray(noop.useState("new"), 2);
      const first1 = tmp7[0];
      const tmp9 = _slicedToArray(noop.useState("Custom"), 2);
      const first2 = tmp9[0];
      const tmp10 = _slicedToArray(noop.useState(false), 2);
      const first3 = tmp10[0];
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Playground" });
        cResult[0] = tmp14;
        let first4 = tmp14;
      } else {
        first4 = cResult[0];
      }
      if (cResult[1] === first2) {
        if (cResult[2] === first1) {
          let tmp16 = cResult[3];
        }
        if (cResult[4] === first3) {
          if (cResult[7] === tmp16) {
            if (cResult[8] === tmp18) {
              if (cResult[9] === first) {
                let tmp20 = cResult[10];
              }
              if (cResult[11] === tmp4.preview) {
                if (cResult[12] === tmp20) {
                  let tmp23 = cResult[13];
                }
                const _Symbol = Symbol;
                if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                  const mapped = closure_10.map((label) =>
                    closure_1_7(require("TableRadioRow").TableRadioRow, { label, value: label }, label),
                  );
                  cResult[14] = mapped;
                  let tmp27 = mapped;
                } else {
                  tmp27 = cResult[14];
                }
                if (cResult[15] !== first) {
                  const obj2 = { title: "Variant", value: first, onChange: tmp5[1], hasIcons: false, children: tmp27 };
                  const tmp32 = React5(TableRadioGroup.TableRadioGroup, obj2);
                  cResult[15] = first;
                  cResult[16] = tmp32;
                  let tmp30 = tmp32;
                } else {
                  tmp30 = cResult[16];
                }
                const _Symbol2 = Symbol;
                if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                  const mapped1 = items.map((label) =>
                    closure_1_7(
                      require("TableRadioRow").TableRadioRow,
                      { label: label.label, value: label.value },
                      label.value,
                    ),
                  );
                  cResult[17] = mapped1;
                  let tmp33 = mapped1;
                } else {
                  tmp33 = cResult[17];
                }
                if (cResult[18] !== first1) {
                  const obj3 = { title: "Type", value: first1, onChange: tmp7[1], hasIcons: false, children: tmp33 };
                  const tmp38 = React5(TableRadioGroup.TableRadioGroup, obj3);
                  cResult[18] = first1;
                  cResult[19] = tmp38;
                  let tmp36 = tmp38;
                } else {
                  tmp36 = cResult[19];
                }
                if (cResult[20] === first2) {
                  if (cResult[21] === first1) {
                    let tmp39 = cResult[22];
                  }
                  if (cResult[23] !== first3) {
                    const obj4 = {
                      label: "Leading icon",
                      value: first3,
                      onValueChange: tmp10[1],
                      start: true,
                      end: true,
                    };
                    const tmp44 = React5(TableSwitchRow.TableSwitchRow, obj4);
                    cResult[23] = first3;
                    cResult[24] = tmp44;
                    let tmp42 = tmp44;
                  } else {
                    tmp42 = cResult[24];
                  }
                  if (cResult[25] === tmp39) {
                    if (cResult[26] === tmp42) {
                      if (cResult[27] === tmp23) {
                        if (cResult[28] === tmp30) {
                          if (cResult[29] === tmp36) {
                            let tmp45 = cResult[30];
                          }
                          return tmp45;
                        }
                      }
                    }
                  }
                  const obj5 = { spacing: nativeDefault.space.PX_12, children: null };
                  items = [first4, tmp23, tmp30, tmp36, tmp39, tmp42];
                  obj5.children = items;
                  const tmp48 = closure_1_8(Stack_Stack.Stack, obj5);
                  cResult[25] = tmp39;
                  cResult[26] = tmp42;
                  cResult[27] = tmp23;
                  cResult[28] = tmp30;
                  cResult[29] = tmp36;
                  cResult[30] = tmp48;
                  tmp45 = tmp48;
                }
                let tmp40 = null;
                if ("custom" === first1) {
                  const obj6 = { label: "Custom text", value: first2, onChange: tmp9[1] };
                  tmp40 = React5(TextInput.TextInput, obj6);
                }
                cResult[20] = first2;
                cResult[21] = first1;
                cResult[22] = tmp40;
                tmp39 = tmp40;
              }
              const obj7 = { style: tmp15, children: tmp20 };
              const tmp26 = React5(timestampProducer, obj7);
              cResult[11] = tmp4.preview;
              cResult[12] = tmp20;
              cResult[13] = tmp26;
              tmp23 = tmp26;
            }
          }
          const obj8 = { type: tmp16, variant: first, icon: tmp18 };
          const tmp22 = React5(Badge_Badge.Badge, obj8);
          cResult[7] = tmp16;
          cResult[8] = tmp18;
          cResult[9] = first;
          cResult[10] = tmp22;
          tmp20 = tmp22;
        }
        if (!first3) {
          cResult[4] = first3;
          cResult[5] = first;
          cResult[6] = undefined;
        } else if ("rarity-common" === first) {
          let ExperimentalMythicIcon = ExperimentalCommonIcon.ExperimentalCommonIcon;
        } else if ("rarity-rare" === first) {
          ExperimentalMythicIcon = ExperimentalRareIcon.ExperimentalRareIcon;
        } else {
          if ("rarity-epic" === first) {
            ExperimentalMythicIcon = ExperimentalEpicIcon.ExperimentalEpicIcon;
          } else if ("rarity-mythic" !== first) {
            ExperimentalMythicIcon = StarIcon3.StarIcon;
          }
          ExperimentalMythicIcon = ExperimentalMythicIcon2.ExperimentalMythicIcon;
        }
      }
      let tmp17 = first1;
      if ("custom" === first1) {
        let str = "Custom";
        if (first2.length > 0) {
          str = first2;
        }
        const obj9 = { text: str };
        tmp17 = obj9;
      }
      cResult[1] = first2;
      cResult[2] = first1;
      cResult[3] = tmp17;
      tmp16 = tmp17;
    }
  : function Playground() {
      const tmp2 = _slicedToArray(noop.useState("secondary"), 2);
      const first = tmp2[0];
      const tmp4 = _slicedToArray(noop.useState("new"), 2);
      const first1 = tmp4[0];
      const tmp6 = _slicedToArray(noop.useState("Custom"), 2);
      const first2 = tmp6[0];
      const tmp7 = _slicedToArray(noop.useState(false), 2);
      const first3 = tmp7[0];
      const obj = { spacing: nativeDefault.space.PX_12, children: null };
      items = [React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Playground" }), , , , ,];
      const obj2 = { style: closure_9().preview, children: null };
      let tmp15 = first1;
      if ("custom" === first1) {
        let str = "Custom";
        if (first2.length > 0) {
          str = first2;
        }
        const obj3 = { text: str };
        tmp15 = obj3;
      }
      const obj4 = { type: tmp15, variant: first, icon: null };
      if (!first3) {
        obj4.icon = undefined;
        obj2.children = React5(Badge_Badge.Badge, obj4);
        items[1] = React5(timestampProducer, obj2);
        const obj5 = {
          title: "Variant",
          value: first,
          onChange: tmp2[1],
          hasIcons: false,
          children: closure_10.map((label) =>
            closure_1_7(require("TableRadioRow").TableRadioRow, { label, value: label }, label),
          ),
        };
        items[2] = React5(TableRadioGroup.TableRadioGroup, obj5);
        const obj6 = {
          title: "Type",
          value: first1,
          onChange: tmp4[1],
          hasIcons: false,
          children: items.map((label) =>
            closure_1_7(
              require("TableRadioRow").TableRadioRow,
              { label: label.label, value: label.value },
              label.value,
            ),
          ),
        };
        items[3] = React5(TableRadioGroup.TableRadioGroup, obj6);
        let tmp12Result = null;
        if (tmp14) {
          const obj7 = { label: "Custom text", value: first2, onChange: tmp6[1] };
          tmp12Result = React5(TextInput.TextInput, obj7);
        }
        items[4] = tmp12Result;
        const obj8 = { label: "Leading icon", value: first3, onValueChange: tmp7[1], start: true, end: true };
        items[5] = React5(TableSwitchRow.TableSwitchRow, obj8);
        obj.children = items;
        return closure_1_8(Stack_Stack.Stack, obj);
      } else if ("rarity-common" === first) {
        let ExperimentalMythicIcon = ExperimentalCommonIcon.ExperimentalCommonIcon;
      } else if ("rarity-rare" === first) {
        ExperimentalMythicIcon = ExperimentalRareIcon.ExperimentalRareIcon;
      } else {
        if ("rarity-epic" === first) {
          ExperimentalMythicIcon = ExperimentalEpicIcon.ExperimentalEpicIcon;
        } else if ("rarity-mythic" !== first) {
          ExperimentalMythicIcon = StarIcon3.StarIcon;
        }
        ExperimentalMythicIcon = ExperimentalMythicIcon2.ExperimentalMythicIcon;
      }
      const tmp = closure_9();
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function VariantMatrix() {
      const cResult = require("c").c(6);
      const tmp4 = closure_9();
      _require = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = closure_7(tmp(5195).Heading, { variant: "text-lg/bold", children: "Variants" });
        const tmp9 = closure_7(tmp(5195).Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Every variant with built-in types, custom text, and a leading icon. With no variant, a badge uses the grey default.",
        });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4) {
        const mapped = closure_10.map((variant) => {
          const obj = { spacing: nativeDefault.space.PX_8, children: null };
          items = [React5(Text_Text.Text, { variant: "text-sm/medium", children: variant })];
          const obj3 = { style: badgeRow.badgeRow, children: null };
          const items1 = [
            React5(Badge_Badge.Badge, { type: "new", variant }),
            React5(Badge_Badge.Badge, { type: "beta", variant }),
            React5(Badge_Badge.Badge, { type: { text: "Custom" }, variant }),
            ,
          ];
          const obj7 = { type: "new", variant, icon: null };
          if ("rarity-common" === variant) {
            let StarIcon = ExperimentalCommonIcon.ExperimentalCommonIcon;
          } else if ("rarity-rare" === variant) {
            StarIcon = ExperimentalRareIcon.ExperimentalRareIcon;
          } else if ("rarity-epic" === variant) {
            StarIcon = ExperimentalEpicIcon.ExperimentalEpicIcon;
          } else if ("rarity-mythic" === variant) {
            StarIcon = ExperimentalMythicIcon2.ExperimentalMythicIcon;
          } else {
            StarIcon = StarIcon3.StarIcon;
          }
          obj7.icon = StarIcon;
          items1[3] = React5(Badge_Badge.Badge, obj7);
          const obj8 = { type: { text: "Custom" }, variant, icon: null };
          if ("rarity-common" === variant) {
            let StarIcon2 = ExperimentalCommonIcon.ExperimentalCommonIcon;
          } else if ("rarity-rare" === variant) {
            StarIcon2 = ExperimentalRareIcon.ExperimentalRareIcon;
          } else if ("rarity-epic" === variant) {
            StarIcon2 = ExperimentalEpicIcon.ExperimentalEpicIcon;
          } else if ("rarity-mythic" === variant) {
            StarIcon2 = ExperimentalMythicIcon2.ExperimentalMythicIcon;
          } else {
            StarIcon2 = StarIcon3.StarIcon;
          }
          obj8.icon = StarIcon2;
          items1[4] = React5(Badge_Badge.Badge, obj8);
          obj3.children = items1;
          items[1] = closure_2_8(timestampProducer, obj3);
          obj.children = items;
          return closure_2_8(Stack_Stack.Stack, obj, variant);
        });
        cResult[2] = tmp4;
        cResult[3] = mapped;
        let tmp10 = mapped;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp10) {
        const obj2 = { children: null };
        let obj3 = { spacing: nativeDefault.space.PX_16, children: null };
        items = [tmp5, tmp6, tmp10];
        obj3.children = items;
        obj2.children = closure_8(tmp(5935).Stack, obj3);
        const tmp17 = closure_7(tmp(6856).Card, obj2);
        cResult[4] = tmp10;
        cResult[5] = tmp17;
        let tmp13 = tmp17;
      } else {
        tmp13 = cResult[5];
      }
      return tmp13;
    }
  : function VariantMatrix() {
      _require = closure_9();
      let obj = { children: null };
      const obj2 = { spacing: nativeDefault.space.PX_16, children: null };
      items = [
        closure_7(require("Text/Text").Heading, { variant: "text-lg/bold", children: "Variants" }),
        closure_7(require("Text/Text").Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Every variant with built-in types, custom text, and a leading icon. With no variant, a badge uses the grey default.",
        }),
        closure_10.map((variant) => {
          const obj = { spacing: nativeDefault.space.PX_8, children: null };
          items = [React5(Text_Text.Text, { variant: "text-sm/medium", children: variant })];
          const obj3 = { style: badgeRow.badgeRow, children: null };
          const items1 = [
            React5(Badge_Badge.Badge, { type: "new", variant }),
            React5(Badge_Badge.Badge, { type: "beta", variant }),
            React5(Badge_Badge.Badge, { type: { text: "Custom" }, variant }),
            ,
          ];
          const obj7 = { type: "new", variant, icon: null };
          if ("rarity-common" === variant) {
            let StarIcon = ExperimentalCommonIcon.ExperimentalCommonIcon;
          } else if ("rarity-rare" === variant) {
            StarIcon = ExperimentalRareIcon.ExperimentalRareIcon;
          } else if ("rarity-epic" === variant) {
            StarIcon = ExperimentalEpicIcon.ExperimentalEpicIcon;
          } else if ("rarity-mythic" === variant) {
            StarIcon = ExperimentalMythicIcon2.ExperimentalMythicIcon;
          } else {
            StarIcon = StarIcon3.StarIcon;
          }
          obj7.icon = StarIcon;
          items1[3] = React5(Badge_Badge.Badge, obj7);
          const obj8 = { type: { text: "Custom" }, variant, icon: null };
          if ("rarity-common" === variant) {
            let StarIcon2 = ExperimentalCommonIcon.ExperimentalCommonIcon;
          } else if ("rarity-rare" === variant) {
            StarIcon2 = ExperimentalRareIcon.ExperimentalRareIcon;
          } else if ("rarity-epic" === variant) {
            StarIcon2 = ExperimentalEpicIcon.ExperimentalEpicIcon;
          } else if ("rarity-mythic" === variant) {
            StarIcon2 = ExperimentalMythicIcon2.ExperimentalMythicIcon;
          } else {
            StarIcon2 = StarIcon3.StarIcon;
          }
          obj8.icon = StarIcon2;
          items1[4] = React5(Badge_Badge.Badge, obj8);
          obj3.children = items1;
          items[1] = closure_2_8(timestampProducer, obj3);
          obj.children = items;
          return closure_2_8(Stack_Stack.Stack, obj, variant);
        }),
      ];
      obj2.children = items;
      obj.children = closure_8(require("Stack/Stack").Stack, obj2);
      return closure_7(require("Card").Card, obj);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Truncation() {
      const cResult = c.c(15);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Long text" });
        const tmp9 = React5(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Labels stay on one line and truncate with an ellipsis when space runs out. The icon never shrinks.",
        });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { type: null };
        const obj3 = { text };
        obj2.type = obj3;
        const tmp13 = React5(Badge_Badge.Badge, obj2);
        cResult[2] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp4.narrow) {
        const obj4 = { style: tmp4.narrow, children: tmp10 };
        const tmp17 = React5(timestampProducer, obj4);
        cResult[3] = tmp4.narrow;
        cResult[4] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { type: null, variant: "primary", icon: null };
        const obj6 = { text };
        obj5.type = obj6;
        obj5.icon = StarIcon3.StarIcon;
        const tmp21 = React5(Badge_Badge.Badge, obj5);
        cResult[5] = tmp21;
        let tmp18 = tmp21;
      } else {
        tmp18 = cResult[5];
      }
      if (cResult[6] !== tmp4.narrow) {
        const obj7 = { style: tmp4.narrow, children: tmp18 };
        const tmp25 = React5(timestampProducer, obj7);
        cResult[6] = tmp4.narrow;
        cResult[7] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[7];
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const obj8 = { type: null, variant: "rarity-epic", icon: null };
        const obj9 = { text };
        obj8.type = obj9;
        obj8.icon = ExperimentalEpicIcon.ExperimentalEpicIcon;
        const tmp29 = React5(Badge_Badge.Badge, obj8);
        cResult[8] = tmp29;
        let tmp26 = tmp29;
      } else {
        tmp26 = cResult[8];
      }
      if (cResult[9] !== tmp4.narrow) {
        const obj10 = { style: tmp4.narrow, children: tmp26 };
        const tmp33 = React5(timestampProducer, obj10);
        cResult[9] = tmp4.narrow;
        cResult[10] = tmp33;
        let tmp30 = tmp33;
      } else {
        tmp30 = cResult[10];
      }
      if (cResult[11] === tmp14) {
        if (cResult[12] === tmp22) {
          if (cResult[13] === tmp30) {
            let tmp34 = cResult[14];
          }
          return tmp34;
        }
      }
      const obj11 = { children: null };
      const obj12 = { spacing: nativeDefault.space.PX_12, children: null };
      items = [tmp5, tmp6, tmp14, tmp22, tmp30];
      obj12.children = items;
      obj11.children = closure_1_8(Stack_Stack.Stack, obj12);
      const tmp35 = React5(Card.Card, obj11);
      cResult[11] = tmp14;
      cResult[12] = tmp22;
      cResult[13] = tmp30;
      cResult[14] = tmp35;
      tmp34 = tmp35;
    }
  : function Truncation() {
      const tmp = closure_9();
      const obj = { children: null };
      const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
      items = [
        React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Long text" }),
        React5(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Labels stay on one line and truncate with an ellipsis when space runs out. The icon never shrinks.",
        }),
        ,
        ,
      ];
      const obj3 = { style: tmp.narrow, children: null };
      const obj4 = { type: { text } };
      obj3.children = React5(Badge_Badge.Badge, obj4);
      items[2] = React5(timestampProducer, obj3);
      const obj6 = {
        style: tmp.narrow,
        children: React5(Badge_Badge.Badge, { type: { text }, variant: "primary", icon: StarIcon3.StarIcon }),
      };
      items[3] = React5(timestampProducer, obj6);
      const obj8 = { style: tmp.narrow, children: null };
      const obj5 = { text };
      const obj7 = { type: { text }, variant: "primary", icon: StarIcon3.StarIcon };
      obj8.children = React5(Badge_Badge.Badge, {
        type: { text },
        variant: "rarity-epic",
        icon: ExperimentalEpicIcon.ExperimentalEpicIcon,
      });
      items[4] = React5(timestampProducer, obj8);
      obj2.children = items;
      obj.children = closure_1_8(Stack_Stack.Stack, obj2);
      return React5(Card.Card, obj);
    };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ComparisonRow(arg0) {
      const cResult = c.c(13);
      ({ label, legacy, mana } = arg0);
      const tmp4 = closure_9();
      if (cResult[0] === label) {
        if (cResult[1] === tmp4.comparisonLabel) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === legacy) {
          if (cResult[4] === tmp4.comparisonCell) {
            let tmp7 = cResult[5];
          }
          if (cResult[6] === mana) {
            if (cResult[7] === tmp4.comparisonCell) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp7) {
                if (cResult[11] === tmp11) {
                  let tmp15 = cResult[12];
                }
                return tmp15;
              }
            }
            const obj2 = {
              direction: "horizontal",
              align: "center",
              spacing: nativeDefault.space.PX_12,
              children: null,
            };
            items = [tmp5, tmp7, tmp11];
            obj2.children = items;
            const tmp18 = closure_1_8(Stack_Stack.Stack, obj2);
            cResult[9] = tmp5;
            cResult[10] = tmp7;
            cResult[11] = tmp11;
            cResult[12] = tmp18;
            tmp15 = tmp18;
          }
          const obj3 = { style: tmp4.comparisonCell, children: mana };
          const tmp14 = React5(timestampProducer, obj3);
          cResult[6] = mana;
          cResult[7] = tmp4.comparisonCell;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        const obj4 = { style: tmp4.comparisonCell, children: legacy };
        const tmp10 = React5(timestampProducer, obj4);
        cResult[3] = legacy;
        cResult[4] = tmp4.comparisonCell;
        cResult[5] = tmp10;
        tmp7 = tmp10;
      }
      const tmp6 = React5(Text_Text.Text, { variant: "text-sm/normal", style: tmp4.comparisonLabel, children: label });
      cResult[0] = label;
      cResult[1] = tmp4.comparisonLabel;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj5 = { variant: "text-sm/normal", style: tmp4.comparisonLabel, children: label };
    }
  : function ComparisonRow(arg0) {
      ({ label, legacy, mana } = arg0);
      const tmp = closure_9();
      const obj = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: null };
      items = [
        React5(Text_Text.Text, { variant: "text-sm/normal", style: tmp.comparisonLabel, children: label }),
        React5(timestampProducer, { style: tmp.comparisonCell, children: legacy }),
        React5(timestampProducer, { style: tmp.comparisonCell, children: mana }),
      ];
      obj.children = items;
      return closure_1_8(Stack_Stack.Stack, obj);
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LegacyComparison() {
      const cResult = c.c(22);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Legacy vs. Mana" });
        const tmp9 = React5(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Legacy defaults on the left, the closest Mana Badge on the right. A bare type renders the grey default, so brand needs an explicit variant.",
        });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.comparisonLabel) {
        const obj2 = { style: tmp4.comparisonLabel };
        const tmp13 = React5(timestampProducer, obj2);
        cResult[2] = tmp4.comparisonLabel;
        cResult[3] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp16 = React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Legacy" });
        cResult[4] = tmp16;
        let tmp14 = tmp16;
      } else {
        tmp14 = cResult[4];
      }
      if (cResult[5] !== tmp4.comparisonCell) {
        const obj3 = { style: tmp4.comparisonCell, children: tmp14 };
        const tmp20 = React5(timestampProducer, obj3);
        cResult[5] = tmp4.comparisonCell;
        cResult[6] = tmp20;
        let tmp17 = tmp20;
      } else {
        tmp17 = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp23 = React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Mana" });
        cResult[7] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[7];
      }
      if (cResult[8] !== tmp4.comparisonCell) {
        const obj4 = { style: tmp4.comparisonCell, children: tmp21 };
        const tmp27 = React5(timestampProducer, obj4);
        cResult[8] = tmp4.comparisonCell;
        cResult[9] = tmp27;
        let tmp24 = tmp27;
      } else {
        tmp24 = cResult[9];
      }
      if (cResult[10] === tmp10) {
        if (cResult[11] === tmp17) {
          if (cResult[12] === tmp24) {
            let tmp28 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp32 = React5(native.TextBadge, { text: "New" });
            cResult[14] = tmp32;
            let tmp30 = tmp32;
          } else {
            tmp30 = cResult[14];
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            const obj5 = { label: "TextBadge vs. default", legacy: tmp30, mana: null };
            const obj6 = { type: { text: "New" } };
            obj5.mana = React5(Badge_Badge.Badge, obj6);
            const tmp36 = React5(closure_16, obj5);
            cResult[15] = tmp36;
            let tmp33 = tmp36;
          } else {
            tmp33 = cResult[15];
          }
          const _Symbol3 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = {
              label: "NewTag vs. new",
              legacy: React5(native.NewTag, {}),
              mana: React5(Badge_Badge.Badge, { type: "new" }),
            };
            const tmp40 = React5(closure_16, obj7);
            cResult[16] = tmp40;
            let tmp37 = tmp40;
          } else {
            tmp37 = cResult[16];
          }
          const _Symbol4 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = {
              label: "NewTag vs. new, brand",
              legacy: React5(native.NewTag, {}),
              mana: React5(Badge_Badge.Badge, { type: "new", variant: "primary" }),
            };
            const tmp44 = React5(closure_16, obj8);
            cResult[17] = tmp44;
            let tmp41 = tmp44;
          } else {
            tmp41 = cResult[17];
          }
          const _Symbol5 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = {
              label: "BetaTag vs. beta",
              legacy: React5(native.BetaTag, {}),
              mana: React5(Badge_Badge.Badge, { type: "beta" }),
            };
            const tmp48 = React5(closure_16, obj9);
            cResult[18] = tmp48;
            let tmp45 = tmp48;
          } else {
            tmp45 = cResult[18];
          }
          const _Symbol6 = Symbol;
          if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = {
              label: "BetaTag vs. beta, brand",
              legacy: React5(native.BetaTag, {}),
              mana: React5(Badge_Badge.Badge, { type: "beta", variant: "primary" }),
            };
            const tmp52 = React5(closure_16, obj10);
            cResult[19] = tmp52;
            let tmp49 = tmp52;
          } else {
            tmp49 = cResult[19];
          }
          if (cResult[20] !== tmp28) {
            const obj11 = { children: null };
            const obj12 = { spacing: nativeDefault.space.PX_12, children: null };
            items = [tmp5, tmp6, tmp28, tmp33, tmp37, tmp41, tmp45, tmp49];
            obj12.children = items;
            obj11.children = closure_1_8(Stack_Stack.Stack, obj12);
            const tmp57 = React5(Card.Card, obj11);
            cResult[20] = tmp28;
            cResult[21] = tmp57;
            let tmp53 = tmp57;
          } else {
            tmp53 = cResult[21];
          }
          return tmp53;
        }
      }
      const obj13 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: null };
      const items1 = [tmp10, tmp17, tmp24];
      obj13.children = items1;
      const tmp29 = closure_1_8(Stack_Stack.Stack, obj13);
      cResult[10] = tmp10;
      cResult[11] = tmp17;
      cResult[12] = tmp24;
      cResult[13] = tmp29;
      tmp28 = tmp29;
    }
  : function LegacyComparison() {
      const tmp = closure_9();
      const obj = { children: null };
      const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
      items = [
        React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Legacy vs. Mana" }),
        React5(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Legacy defaults on the left, the closest Mana Badge on the right. A bare type renders the grey default, so brand needs an explicit variant.",
        }),
        ,
        ,
        ,
        ,
        ,
      ];
      const obj3 = { direction: "horizontal", align: "center", spacing: nativeDefault.space.PX_12, children: null };
      const items1 = [
        React5(timestampProducer, { style: tmp.comparisonLabel }),
        React5(timestampProducer, {
          style: tmp.comparisonCell,
          children: React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Legacy" }),
        }),
      ];
      const obj4 = { style: tmp.comparisonLabel };
      const obj5 = {
        style: tmp.comparisonCell,
        children: React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Legacy" }),
      };
      items1[2] = React5(timestampProducer, {
        style: tmp.comparisonCell,
        children: React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Mana" }),
      });
      obj3.children = items1;
      items[2] = closure_1_8(Stack_Stack.Stack, obj3);
      const obj6 = {
        style: tmp.comparisonCell,
        children: React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: "Mana" }),
      };
      items[3] = React5(closure_16, {
        label: "TextBadge vs. default",
        legacy: React5(native.TextBadge, { text: "New" }),
        mana: React5(Badge_Badge.Badge, { type: { text: "New" } }),
      });
      const obj7 = {
        label: "TextBadge vs. default",
        legacy: React5(native.TextBadge, { text: "New" }),
        mana: React5(Badge_Badge.Badge, { type: { text: "New" } }),
      };
      items[4] = React5(closure_16, {
        label: "NewTag vs. new",
        legacy: React5(native.NewTag, {}),
        mana: React5(Badge_Badge.Badge, { type: "new" }),
      });
      const obj8 = {
        label: "NewTag vs. new",
        legacy: React5(native.NewTag, {}),
        mana: React5(Badge_Badge.Badge, { type: "new" }),
      };
      items[5] = React5(closure_16, {
        label: "NewTag vs. new, brand",
        legacy: React5(native.NewTag, {}),
        mana: React5(Badge_Badge.Badge, { type: "new", variant: "primary" }),
      });
      const obj9 = {
        label: "NewTag vs. new, brand",
        legacy: React5(native.NewTag, {}),
        mana: React5(Badge_Badge.Badge, { type: "new", variant: "primary" }),
      };
      items[6] = React5(closure_16, {
        label: "BetaTag vs. beta",
        legacy: React5(native.BetaTag, {}),
        mana: React5(Badge_Badge.Badge, { type: "beta" }),
      });
      const obj10 = {
        label: "BetaTag vs. beta",
        legacy: React5(native.BetaTag, {}),
        mana: React5(Badge_Badge.Badge, { type: "beta" }),
      };
      items[7] = React5(closure_16, {
        label: "BetaTag vs. beta, brand",
        legacy: React5(native.BetaTag, {}),
        mana: React5(Badge_Badge.Badge, { type: "beta", variant: "primary" }),
      });
      obj2.children = items;
      obj.children = closure_1_8(Stack_Stack.Stack, obj2);
      return React5(Card.Card, obj);
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function LayoutCase(arg0) {
      const cResult = c.c(8);
      ({ title, children } = arg0);
      const tmp4 = closure_9();
      if (cResult[0] !== title) {
        const obj2 = { variant: "text-xs/semibold", color: "text-subtle", children: title };
        const tmp7 = React5(Text_Text.Text, obj2);
        cResult[0] = title;
        cResult[1] = tmp7;
        let tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === children) {
        if (cResult[3] === tmp4.layoutCase) {
          let tmp8 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          if (cResult[6] === tmp8) {
            let tmp10 = cResult[7];
          }
          return tmp10;
        }
        const obj3 = { spacing: nativeDefault.space.PX_4, children: null };
        items = [tmp5, tmp8];
        obj3.children = items;
        const tmp13 = closure_1_8(Stack_Stack.Stack, obj3);
        cResult[5] = tmp5;
        cResult[6] = tmp8;
        cResult[7] = tmp13;
        tmp10 = tmp13;
      }
      const tmp9 = React5(timestampProducer, { style: tmp4.layoutCase, children });
      cResult[2] = children;
      cResult[3] = tmp4.layoutCase;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj4 = { style: tmp4.layoutCase, children };
    }
  : function LayoutCase(arg0) {
      ({ title, children } = arg0);
      const obj = { spacing: nativeDefault.space.PX_4, children: null };
      items = [React5(Text_Text.Text, { variant: "text-xs/semibold", color: "text-subtle", children: title })];
      const tmp = closure_9();
      items[1] = React5(timestampProducer, { style: closure_9().layoutCase, children });
      obj.children = items;
      return closure_1_8(Stack_Stack.Stack, obj);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ParentLayouts() {
      const cResult = c.c(58);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Parent layouts" });
        const tmp9 = React5(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Legacy and Mana badges in the same parents. Both follow the parent's alignment; use parent/container layout to position Mana badges.",
        });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = React5(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" });
        cResult[2] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[2];
      }
      if (cResult[3] !== tmp4.inlineBadge) {
        const obj2 = { text: "New", style: tmp4.inlineBadge };
        const tmp15 = React5(native.TextBadge, obj2);
        cResult[3] = tmp4.inlineBadge;
        cResult[4] = tmp15;
        let tmp13 = tmp15;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] === tmp4.inlineRow) {
        if (cResult[6] === tmp13) {
          let tmp16 = cResult[7];
        }
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp20 = React5(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" });
          cResult[8] = tmp20;
          let tmp18 = tmp20;
        } else {
          tmp18 = cResult[8];
        }
        const _Symbol2 = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { type: { text: "New" } };
          const tmp23 = React5(Badge_Badge.Badge, obj3);
          cResult[9] = tmp23;
          let tmp21 = tmp23;
        } else {
          tmp21 = cResult[9];
        }
        if (cResult[10] !== tmp4.inlineBadge) {
          const obj4 = { style: tmp4.inlineBadge, children: tmp21 };
          const tmp27 = React5(timestampProducer, obj4);
          cResult[10] = tmp4.inlineBadge;
          cResult[11] = tmp27;
          let tmp24 = tmp27;
        } else {
          tmp24 = cResult[11];
        }
        if (cResult[12] === tmp4.inlineRow) {
          if (cResult[13] === tmp24) {
            let tmp28 = cResult[14];
          }
          if (cResult[15] === tmp16) {
            if (cResult[16] === tmp28) {
              let tmp32 = cResult[17];
            }
            const _Symbol3 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp39 = React5(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" });
              const tmp40 = React5(native.BetaTag, {});
              cResult[18] = tmp39;
              cResult[19] = tmp40;
              let tmp37 = tmp40;
              let tmp36 = tmp39;
            } else {
              tmp36 = cResult[18];
              tmp37 = cResult[19];
            }
            if (cResult[20] !== tmp4.inlineRow) {
              const obj5 = { style: tmp4.inlineRow, children: null };
              items = [tmp36, tmp37];
              obj5.children = items;
              const tmp44 = closure_1_8(timestampProducer, obj5);
              cResult[20] = tmp4.inlineRow;
              cResult[21] = tmp44;
              let tmp41 = tmp44;
            } else {
              tmp41 = cResult[21];
            }
            const _Symbol4 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp47 = React5(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" });
              cResult[22] = tmp47;
              let tmp45 = tmp47;
            } else {
              tmp45 = cResult[22];
            }
            const _Symbol5 = Symbol;
            if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp50 = React5(Badge_Badge.Badge, { type: "beta", variant: "primary" });
              cResult[23] = tmp50;
              let tmp48 = tmp50;
            } else {
              tmp48 = cResult[23];
            }
            if (cResult[24] !== tmp4.inlineBadge) {
              const obj6 = { style: tmp4.inlineBadge, children: tmp48 };
              const tmp54 = React5(timestampProducer, obj6);
              cResult[24] = tmp4.inlineBadge;
              cResult[25] = tmp54;
              let tmp51 = tmp54;
            } else {
              tmp51 = cResult[25];
            }
            if (cResult[26] === tmp4.inlineRow) {
              if (cResult[27] === tmp51) {
                let tmp55 = cResult[28];
              }
              if (cResult[29] === tmp41) {
                if (cResult[30] === tmp55) {
                  let tmp59 = cResult[31];
                }
                const _Symbol6 = Symbol;
                if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp65 = React5(native.TextBadge, { text: "New" });
                  cResult[32] = tmp65;
                  let tmp63 = tmp65;
                } else {
                  tmp63 = cResult[32];
                }
                const _Symbol7 = Symbol;
                if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj7 = { title: "Column, default alignment (TextBadge, then Mana)", children: null };
                  const items1 = [tmp63];
                  const obj8 = { type: { text: "New" } };
                  items1[1] = React5(Badge_Badge.Badge, obj8);
                  obj7.children = items1;
                  const tmp70 = closure_1_8(closure_18, obj7);
                  cResult[33] = tmp70;
                  let tmp66 = tmp70;
                } else {
                  tmp66 = cResult[33];
                }
                if (cResult[34] !== tmp4.selfStart) {
                  const obj9 = { text: "New", style: tmp4.selfStart };
                  const tmp73 = React5(native.TextBadge, obj9);
                  cResult[34] = tmp4.selfStart;
                  cResult[35] = tmp73;
                  let tmp71 = tmp73;
                } else {
                  tmp71 = cResult[35];
                }
                const _Symbol8 = Symbol;
                if (cResult[36] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj10 = { type: { text: "New" } };
                  const tmp76 = React5(Badge_Badge.Badge, obj10);
                  cResult[36] = tmp76;
                  let tmp74 = tmp76;
                } else {
                  tmp74 = cResult[36];
                }
                if (cResult[37] !== tmp4.selfStartParent) {
                  const obj11 = { style: tmp4.selfStartParent, children: tmp74 };
                  const tmp80 = React5(timestampProducer, obj11);
                  cResult[37] = tmp4.selfStartParent;
                  cResult[38] = tmp80;
                  let tmp77 = tmp80;
                } else {
                  tmp77 = cResult[38];
                }
                if (cResult[39] === tmp71) {
                  if (cResult[40] === tmp77) {
                    let tmp81 = cResult[41];
                  }
                  const _Symbol9 = Symbol;
                  if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp88 = React5(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" });
                    const tmp89 = React5(native.TextBadge, { text: "New" });
                    cResult[42] = tmp88;
                    cResult[43] = tmp89;
                    let tmp86 = tmp89;
                    let tmp85 = tmp88;
                  } else {
                    tmp85 = cResult[42];
                    tmp86 = cResult[43];
                  }
                  if (cResult[44] !== tmp4.trailingRow) {
                    const obj12 = { style: tmp4.trailingRow, children: null };
                    const items2 = [tmp85, tmp86];
                    obj12.children = items2;
                    const tmp93 = closure_1_8(timestampProducer, obj12);
                    cResult[44] = tmp4.trailingRow;
                    cResult[45] = tmp93;
                    let tmp90 = tmp93;
                  } else {
                    tmp90 = cResult[45];
                  }
                  const _Symbol10 = Symbol;
                  if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp96 = React5(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" });
                    cResult[46] = tmp96;
                    let tmp94 = tmp96;
                  } else {
                    tmp94 = cResult[46];
                  }
                  const _Symbol11 = Symbol;
                  if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                    const obj13 = { type: { text: "New" } };
                    const tmp99 = React5(Badge_Badge.Badge, obj13);
                    cResult[47] = tmp99;
                    let tmp97 = tmp99;
                  } else {
                    tmp97 = cResult[47];
                  }
                  if (cResult[48] !== tmp4.trailingRow) {
                    const obj14 = { style: tmp4.trailingRow, children: null };
                    const items3 = [tmp94, tmp97];
                    obj14.children = items3;
                    const tmp103 = closure_1_8(timestampProducer, obj14);
                    cResult[48] = tmp4.trailingRow;
                    cResult[49] = tmp103;
                    let tmp100 = tmp103;
                  } else {
                    tmp100 = cResult[49];
                  }
                  if (cResult[50] === tmp90) {
                    if (cResult[51] === tmp100) {
                      let tmp104 = cResult[52];
                    }
                    if (cResult[53] === tmp59) {
                      if (cResult[54] === tmp81) {
                        if (cResult[55] === tmp104) {
                          if (cResult[56] === tmp32) {
                            let tmp108 = cResult[57];
                          }
                          return tmp108;
                        }
                      }
                    }
                    const obj15 = { children: null };
                    const obj16 = { spacing: nativeDefault.space.PX_12, children: null };
                    const items4 = [tmp5, tmp6, tmp32, tmp59, tmp66, tmp81, tmp104];
                    obj16.children = items4;
                    obj15.children = closure_1_8(Stack_Stack.Stack, obj16);
                    const tmp112 = React5(Card.Card, obj15);
                    cResult[53] = tmp59;
                    cResult[54] = tmp81;
                    cResult[55] = tmp104;
                    cResult[56] = tmp32;
                    cResult[57] = tmp112;
                    tmp108 = tmp112;
                  }
                  const obj17 = { title: "Trailing edge of a list row (TextBadge, then Mana)", children: null };
                  const items5 = [tmp90, tmp100];
                  obj17.children = items5;
                  const tmp107 = closure_1_8(closure_18, obj17);
                  cResult[50] = tmp90;
                  cResult[51] = tmp100;
                  cResult[52] = tmp107;
                  tmp104 = tmp107;
                }
                const obj18 = { title: "Column with alignSelf: 'flex-start' (TextBadge, then Mana)", children: null };
                const items6 = [tmp71, tmp77];
                obj18.children = items6;
                const tmp84 = closure_1_8(closure_18, obj18);
                cResult[39] = tmp71;
                cResult[40] = tmp77;
                cResult[41] = tmp84;
                tmp81 = tmp84;
              }
              const obj19 = { title: "Row next to text (BetaTag, then Mana brand)", children: null };
              const items7 = [tmp41, tmp55];
              obj19.children = items7;
              const tmp62 = closure_1_8(closure_18, obj19);
              cResult[29] = tmp41;
              cResult[30] = tmp55;
              cResult[31] = tmp62;
              tmp59 = tmp62;
            }
            const obj20 = { style: tmp4.inlineRow, children: null };
            const items8 = [tmp45, tmp51];
            obj20.children = items8;
            const tmp58 = closure_1_8(timestampProducer, obj20);
            cResult[26] = tmp4.inlineRow;
            cResult[27] = tmp51;
            cResult[28] = tmp58;
            tmp55 = tmp58;
          }
          const obj21 = { title: "Row next to text (TextBadge, then Mana)", children: null };
          const items9 = [tmp16, tmp28];
          obj21.children = items9;
          const tmp35 = closure_1_8(closure_18, obj21);
          cResult[15] = tmp16;
          cResult[16] = tmp28;
          cResult[17] = tmp35;
          tmp32 = tmp35;
        }
        const obj22 = { style: tmp4.inlineRow, children: null };
        const items10 = [tmp18, tmp24];
        obj22.children = items10;
        const tmp31 = closure_1_8(timestampProducer, obj22);
        cResult[12] = tmp4.inlineRow;
        cResult[13] = tmp24;
        cResult[14] = tmp31;
        tmp28 = tmp31;
      }
      const obj23 = { style: tmp4.inlineRow, children: null };
      const items11 = [tmp10, tmp13];
      obj23.children = items11;
      const tmp17 = closure_1_8(timestampProducer, obj23);
      cResult[5] = tmp4.inlineRow;
      cResult[6] = tmp13;
      cResult[7] = tmp17;
      tmp16 = tmp17;
    }
  : function ParentLayouts() {
      const tmp = closure_9();
      const obj = { children: null };
      const obj2 = { spacing: nativeDefault.space.PX_12, children: null };
      items = [
        React5(Text_Text.Heading, { variant: "text-lg/bold", children: "Parent layouts" }),
        React5(Text_Text.Text, {
          variant: "text-sm/normal",
          color: "text-subtle",
          children:
            "Legacy and Mana badges in the same parents. Both follow the parent's alignment; use parent/container layout to position Mana badges.",
        }),
        ,
        ,
        ,
        ,
      ];
      const obj3 = { title: "Row next to text (TextBadge, then Mana)", children: null };
      const obj4 = { style: tmp.inlineRow, children: null };
      const items1 = [
        React5(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" }),
        React5(native.TextBadge, { text: "New", style: tmp.inlineBadge }),
      ];
      obj4.children = items1;
      const items2 = [closure_1_8(timestampProducer, obj4)];
      const obj6 = { style: tmp.inlineRow, children: null };
      const items3 = [
        React5(Text_Text.Text, { variant: "text-md/semibold", children: "Channel name" }),
        React5(timestampProducer, {
          style: tmp.inlineBadge,
          children: React5(Badge_Badge.Badge, { type: { text: "New" } }),
        }),
      ];
      obj6.children = items3;
      items2[1] = closure_1_8(timestampProducer, obj6);
      obj3.children = items2;
      items[2] = closure_1_8(closure_18, obj3);
      const obj8 = { title: "Row next to text (BetaTag, then Mana brand)", children: null };
      const obj9 = { style: tmp.inlineRow, children: null };
      const items4 = [
        React5(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" }),
        React5(native.BetaTag, {}),
      ];
      obj9.children = items4;
      const items5 = [closure_1_8(timestampProducer, obj9)];
      const obj10 = { style: tmp.inlineRow, children: null };
      const items6 = [React5(Text_Text.Text, { variant: "text-md/semibold", children: "Feature name" })];
      const obj5 = { text: "New", style: tmp.inlineBadge };
      const obj7 = { style: tmp.inlineBadge, children: React5(Badge_Badge.Badge, { type: { text: "New" } }) };
      items6[1] = React5(timestampProducer, {
        style: tmp.inlineBadge,
        children: React5(Badge_Badge.Badge, { type: "beta", variant: "primary" }),
      });
      obj10.children = items6;
      items5[1] = closure_1_8(timestampProducer, obj10);
      obj8.children = items5;
      items[3] = closure_1_8(closure_18, obj8);
      const obj12 = { title: "Column, default alignment (TextBadge, then Mana)", children: null };
      const items7 = [React5(native.TextBadge, { text: "New" }), React5(Badge_Badge.Badge, { type: { text: "New" } })];
      obj12.children = items7;
      items[4] = closure_1_8(closure_18, obj12);
      const obj13 = { title: "Column with alignSelf: 'flex-start' (TextBadge, then Mana)", children: null };
      const items8 = [React5(native.TextBadge, { text: "New", style: tmp.selfStart })];
      const obj11 = {
        style: tmp.inlineBadge,
        children: React5(Badge_Badge.Badge, { type: "beta", variant: "primary" }),
      };
      const obj14 = { text: "New", style: tmp.selfStart };
      items8[1] = React5(timestampProducer, {
        style: tmp.selfStartParent,
        children: React5(Badge_Badge.Badge, { type: { text: "New" } }),
      });
      obj13.children = items8;
      items[5] = closure_1_8(closure_18, obj13);
      const obj16 = { title: "Trailing edge of a list row (TextBadge, then Mana)", children: null };
      const obj17 = { style: tmp.trailingRow, children: null };
      const items9 = [
        React5(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" }),
        React5(native.TextBadge, { text: "New" }),
      ];
      obj17.children = items9;
      const items10 = [closure_1_8(timestampProducer, obj17)];
      const obj18 = { style: tmp.trailingRow, children: null };
      const items11 = [
        React5(Text_Text.Text, { variant: "text-md/normal", children: "Notifications" }),
        React5(Badge_Badge.Badge, { type: { text: "New" } }),
      ];
      obj18.children = items11;
      items10[1] = closure_1_8(timestampProducer, obj18);
      obj16.children = items10;
      items[6] = closure_1_8(closure_18, obj16);
      obj2.children = items;
      obj.children = closure_1_8(Stack_Stack.Stack, obj2);
      return React5(Card.Card, obj);
    };
ReactCompilerGating = fn(558);
let obj7 = { marginLeft: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/UserSettingsDesignSystemBadge.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsDesignSystemBadge() {
      const cResult = c.c(3);
      const tmp4 = closure_9();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { spacing: nativeDefault.space.PX_24, children: null };
        items = [
          React5(Text_Text.Text, {
            variant: "text-md/normal",
            color: "text-subtle",
            children: "Badges label feature status, like New or Beta. They are not for counts or notifications.",
          }),
          React5(closure_13, {}),
          React5(closure_14, {}),
          React5(closure_15, {}),
          React5(closure_17, {}),
          React5(closure_19, {}),
        ];
        obj2.children = items;
        const tmp14 = closure_1_8(Stack_Stack.Stack, obj2);
        cResult[0] = tmp14;
        let first = tmp14;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.container) {
        const obj3 = { contentContainerStyle: tmp4.container, children: first };
        const tmp18 = React5(hasOwnProperty, obj3);
        cResult[1] = tmp4.container;
        cResult[2] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[2];
      }
      return tmp15;
    }
  : function UserSettingsDesignSystemBadge() {
      const obj = { contentContainerStyle: closure_9().container, children: null };
      const obj2 = { spacing: nativeDefault.space.PX_24, children: null };
      items = [
        React5(Text_Text.Text, {
          variant: "text-md/normal",
          color: "text-subtle",
          children: "Badges label feature status, like New or Beta. They are not for counts or notifications.",
        }),
        React5(closure_13, {}),
        React5(closure_14, {}),
        React5(closure_15, {}),
        React5(closure_17, {}),
        React5(closure_19, {}),
      ];
      obj2.children = items;
      obj.children = closure_1_8(Stack_Stack.Stack, obj2);
      return React5(hasOwnProperty, obj);
    };
