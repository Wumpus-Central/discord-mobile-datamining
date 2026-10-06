// discord_app/modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import badges_GuildBadge from "../../../../guild_tag/native/badges/GuildBadge.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import GuildTagConstants from "../../../../guild_tag/GuildTagConstants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, closure_0, value;

let GUILD_TAG_BADGE_PALETTE_PRESETS;
let GuildTagBadgeKind;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let react = react_mod;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({
  GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: metroRequire,
  GUILD_TAG_BADGE_PALETTE_PRESETS,
  GuildTagBadgeKind,
} = GuildTagConstants);
({ jsxs: metroImportDefault, jsx: metroImportAll } = Fragment);
const entries = Object.entries(GuildTagBadgeKind);
const found = entries.filter((item) => {
  let tmp;
  [tmp] = item;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((item) => {
  let tmp;
  let tmp2;
  [tmp, tmp2] = item;
  return { name, value };
});
let items = [
  { label: "Untinted", primary: "enabled", secondary: "Object" },
  ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((primary, index) => {
    const obj = { label: "P" + index + 1, primary: primary.primary, secondary: primary.secondary };
    return obj;
  }),
];
let closure_11 = [24, 48, 72];
let createStyles = createStyles_mod;
let obj = {
  wrap: obj2,
  contentContainer: obj3,
  controlRow: obj4,
  grid: obj5,
  tile: obj6,
  badgeBox: { height: 72, alignItems: "center", justifyContent: "center" },
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj6 = {
  alignItems: "center",
  justifyContent: "flex-start",
  gap: nativeDefault.space.PX_4,
  width: 96,
  padding: nativeDefault.space.PX_8,
  backgroundColor: "#ffffff",
  borderRadius: 8,
};
let closure_12 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_2;
      let closure_3;
      let first;
      let items1;
      let obj7;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(29);
      const tmp4 = closure_12();
      _require = tmp4;
      [first, _slicedToArray] = react.useState(1);
      const tmp7 = _slicedToArray(react.useState(1), 2);
      react = tmp7[1];
      let closure_4 = tmp8;
      let closure_5 = tmp9;
      const arr = items;
      if (cResult[0] === closure_11[tmp7[0]]) {
        let tmp12;
        let tmp14;
        if (cResult[1] === items[first].label) {
          tmp12 = cResult[2];
        }
        const controlRow = tmp4.controlRow;
        if (cResult[3] !== first) {
          const mapped = arr.map((label, index) => {
            let str;
            closure_0 = index;
            const obj = {
              text: label.label,
              size: "sm",
              variant: str,
              onPress() {
                return closure_2(index);
              },
            };
            str = "secondary";
            const Button = closure_0(first[10]).Button;
            if (index === first) {
              str = "primary";
            }
            return closure_1_8(Button, obj, label.label);
          });
          cResult[3] = first;
          cResult[4] = mapped;
          tmp14 = mapped;
        } else {
          tmp14 = cResult[4];
        }
        if (cResult[5] === tmp4.controlRow) {
          let tmp16;
          let tmp23;
          let tmp24;
          if (cResult[6] === tmp14) {
            tmp16 = cResult[7];
          }
          const _HermesInternal = HermesInternal;
          let str = "px (tap to cycle)";
          const combined = "Size: " + tmp9 + "px (tap to cycle)";
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function j() {
              let length;
              return closure_3((arg0) => (arg0 + 1) % length.length);
            };
            cResult[8] = fn;
            tmp23 = fn;
          } else {
            tmp23 = cResult[8];
          }
          if (cResult[9] !== combined) {
            let obj2 = { text: combined, size: "sm", onPress: tmp23 };
            const tmp26 = closure_8(tmp(first[10]).Button, obj2);
            cResult[9] = combined;
            cResult[10] = tmp26;
            tmp24 = tmp26;
          } else {
            tmp24 = cResult[10];
          }
          if (cResult[11] === closure_11[tmp7[0]]) {
            if (cResult[12] === tmp4.badgeBox) {
              if (cResult[13] === tmp4.tile) {
                if (cResult[14] === items[first].primary) {
                  let tmp28;
                  if (cResult[15] === items[first].secondary) {
                    tmp28 = cResult[16];
                  }
                  if (cResult[17] === tmp4.grid) {
                    let tmp31;
                    if (cResult[18] === tmp28) {
                      tmp31 = cResult[19];
                    }
                    if (cResult[20] === tmp31) {
                      if (cResult[21] === tmp12) {
                        if (cResult[22] === tmp16) {
                          let tmp35;
                          if (cResult[23] === tmp24) {
                            tmp35 = cResult[24];
                          }
                          if (cResult[25] === tmp4.contentContainer) {
                            if (cResult[26] === tmp4.wrap) {
                              let tmp38;
                              if (cResult[27] === tmp35) {
                                tmp38 = cResult[28];
                              }
                              return tmp38;
                            }
                          }
                          let obj3 = { style: tmp10, contentContainerStyle: tmp11, children: tmp35 };
                          const tmp41 = closure_8(closure_4, obj3);
                          cResult[25] = tmp4.contentContainer;
                          cResult[26] = tmp4.wrap;
                          cResult[27] = tmp35;
                          cResult[28] = tmp41;
                          tmp38 = tmp41;
                        }
                      }
                    }
                    const obj4 = { spacing: 16, children: items };
                    items = [tmp12, tmp16, tmp24, tmp31];
                    const tmp37 = closure_7(tmp(first[12]).Stack, obj4);
                    cResult[20] = tmp31;
                    cResult[21] = tmp12;
                    cResult[22] = tmp16;
                    cResult[23] = tmp24;
                    cResult[24] = tmp37;
                    tmp35 = tmp37;
                  }
                  const obj5 = { style: tmp27, children: tmp28 };
                  const tmp34 = closure_8(closure_5, obj5);
                  cResult[17] = tmp4.grid;
                  cResult[18] = tmp28;
                  cResult[19] = tmp34;
                  tmp31 = tmp34;
                }
              }
            }
          }
          const mapped1 = closure_9.map((value) => {
            let items1;
            value = value.value;
            const obj = { style: closure_0.tile, children: items };
            const name = value.name;
            const obj2 = { style: closure_0.badgeBox, children: metroImportAll(badges_GuildBadge.GuildBadge, size) };
            size = {
              badge: value,
              primaryTintColor: closure_4.primary,
              secondaryTintColor: closure_4.secondary,
              width: height,
              height,
            };
            const tmp = metroRequire[value];
            items = [metroImportAll(hasOwnProperty, obj2)];
            const obj3 = {
              variant: "text-xs/normal",
              color: "text-muted",
              style: { textAlign: "center" },
              children: items1,
            };
            items1 = [name];
            let str = "";
            const Text = Text_Text.Text;
            if (2 === tmp) {
              str = " \u00B7 2c";
            }
            items1[1] = str;
            items[1] = metroImportDefault(Text, obj3);
            return metroImportDefault(hasOwnProperty, obj, value);
          });
          cResult[11] = closure_11[tmp7[0]];
          cResult[12] = tmp4.badgeBox;
          cResult[13] = tmp4.tile;
          cResult[14] = items[first].primary;
          cResult[15] = items[first].secondary;
          cResult[16] = mapped1;
          tmp28 = mapped1;
        }
        const obj6 = { horizontal: true, showsHorizontalScrollIndicator: false, children: closure_8(closure_5, obj7) };
        obj7 = { style: controlRow, children: tmp14 };
        const tmp20 = closure_8(closure_4, obj6);
        cResult[5] = tmp4.controlRow;
        cResult[6] = tmp14;
        cResult[7] = tmp20;
        tmp16 = tmp20;
      }
      const obj8 = { variant: "text-md/normal", children: items1 };
      items1 = [
        "All ",
        closure_9.length,
        " badge kinds. Tint: ",
        items[first].label,
        " \u00B7 Size: ",
        closure_11[tmp7[0]],
        "px. 2c = two-color badge.",
      ];
      const tmp13 = closure_7(tmp(first[9]).Text, obj8);
      cResult[0] = closure_11[tmp7[0]];
      cResult[1] = items[first].label;
      cResult[2] = tmp13;
      tmp12 = tmp13;
    }
  : () => {
      let Stack;
      let closure_2;
      let closure_3;
      let first;
      let items1;
      let obj2;
      let obj5;
      let tmp = closure_12();
      _require = tmp;
      [first, _slicedToArray] = react.useState(1);
      const tmp4 = _slicedToArray(react.useState(1), 2);
      react = tmp4[1];
      let closure_4 = tmp5;
      let closure_5 = tmp6;
      let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: closure_7(Stack, obj2) };
      obj2 = { spacing: 16, children: items1 };
      Stack = require("Stack/Stack").Stack;
      let obj3 = { variant: "text-md/normal", children: items };
      items = ["All ", closure_9.length, " badge kinds. Tint: "];
      items[3] = items[first].label;
      items[4] = " \u00B7 Size: ";
      items[5] = closure_11[tmp4[0]];
      items[6] = "px. 2c = two-color badge.";
      items1 = [closure_7(require("Text/Text").Text, obj3), , ,];
      const obj4 = { horizontal: true, showsHorizontalScrollIndicator: false, children: closure_8(closure_5, obj5) };
      obj5 = {
        style: tmp.controlRow,
        children: items.map((label, index) => {
          let str;
          closure_0 = index;
          const obj = {
            text: label.label,
            size: "sm",
            variant: str,
            onPress() {
              return closure_2(index);
            },
          };
          str = "secondary";
          const Button = closure_0(first[10]).Button;
          if (index === first) {
            str = "primary";
          }
          return closure_1_8(Button, obj, label.label);
        }),
      };
      items1[1] = closure_8(closure_4, obj4);
      const obj6 = {
        text: "Size: " + closure_11[tmp4[0]] + "px (tap to cycle)",
        size: "sm",
        onPress() {
          let length;
          return closure_3((arg0) => (arg0 + 1) % length.length);
        },
      };
      let Button = require("components/Button/Button").Button;
      items1[2] = closure_8(Button, obj6);
      const obj7 = {
        style: tmp.grid,
        children: closure_9.map((value) => {
          let items1;
          value = value.value;
          const obj = { style: closure_0.tile, children: items };
          const name = value.name;
          const obj2 = { style: closure_0.badgeBox, children: metroImportAll(badges_GuildBadge.GuildBadge, size) };
          size = {
            badge: value,
            primaryTintColor: closure_4.primary,
            secondaryTintColor: closure_4.secondary,
            width: height,
            height,
          };
          const tmp = metroRequire[value];
          items = [metroImportAll(hasOwnProperty, obj2)];
          const obj3 = {
            variant: "text-xs/normal",
            color: "text-muted",
            style: { textAlign: "center" },
            children: items1,
          };
          items1 = [name];
          let str = "";
          const Text = Text_Text.Text;
          if (2 === tmp) {
            str = " \u00B7 2c";
          }
          items1[1] = str;
          items[1] = metroImportDefault(Text, obj3);
          return metroImportDefault(hasOwnProperty, obj, value);
        }),
      };
      items1[3] = closure_8(closure_5, obj7);
      return closure_8(closure_4, obj);
    };
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx",
);

export default tmp6;
