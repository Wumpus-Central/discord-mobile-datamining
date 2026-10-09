// === Module 15993: DevToolsGuildTagBadgesScreen ===

// Module 15993 (DevToolsGuildTagBadgesScreen)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 5087 */;
import badges_GuildBadge from "badges/GuildBadge" /* 14065 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildTagConstants = fn(7869);
({ GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS: metroRequire, GUILD_TAG_BADGE_PALETTE_PRESETS, GuildTagBadgeKind } = GuildTagConstants);
const jsxProd = fn(21);
({ jsxs: closure_7, jsx: closure_8 } = jsxProd);
const entries = Object.entries(GuildTagBadgeKind);
const found = entries.filter((item) => {
  [tmp] = item;
  return isNaN(Number(tmp));
});
let closure_9 = found.map((item) => {
  [tmp, tmp2] = item;
  return { name, value };
});
let items = [{ label: "Untinted", primary: "end", secondary: "PX_16" }, ...GUILD_TAG_BADGE_PALETTE_PRESETS.map((primary, index) => ({ label: "P" + index + 1, primary: primary.primary, secondary: primary.secondary }))];
const dependencyMap2 = [24, 48, 72];
const createStyles = fn(5091);
let obj2 = { wrap: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 }, contentContainer: null, controlRow: null, grid: null, tile: null, badgeBox: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj2.contentContainer = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
let obj4 = { padding: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj2.controlRow = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.grid = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
let obj6 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 };
obj2.tile = { alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_4, width: 96, padding: nativeDefault.space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
obj2.badgeBox = { height: 72, alignItems: "center", justifyContent: "center" };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { alignItems: "center", justifyContent: "flex-start", gap: nativeDefault.space.PX_4, width: 96, padding: nativeDefault.space.PX_8, backgroundColor: "#ffffff", borderRadius: 8 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DevToolsGuildTagBadgesScreen() {
  const cResult = require("c").c(29);
  const tmp4 = closure_12();
  _require = tmp4;
  [first, _slicedToArray] = noop.useState(1);
  const tmp7 = _slicedToArray(noop.useState(1), 2);
  noop = tmp7[1];
  closure_4 = tmp8;
  closure_5 = tmp9;
  if (cResult[0] === dependencyMap2[tmp7[0]]) {
    if (cResult[1] === tmp8.label) {
      let tmp12 = cResult[2];
    }
    if (cResult[3] !== first) {
      const mapped = arr.map((label, index) => {
        closure_0 = index;
        const obj = { text: label.label, size: "sm", variant: null, onPress: null };
        let str = "secondary";
        if (index === first) {
          str = "primary";
        }
        obj.variant = str;
        obj.onPress = function onPress() {
          return closure_2(closure_0);
        };
        return closure_1_8(closure_0(first[10]).Button, obj, label.label);
      });
      cResult[3] = first;
      cResult[4] = mapped;
      let tmp14 = mapped;
    } else {
      tmp14 = cResult[4];
    }
    if (cResult[5] === tmp4.controlRow) {
      if (cResult[6] === tmp14) {
        let tmp16 = cResult[7];
      }
      const _HermesInternal = HermesInternal;
      const combined = "Size: " + tmp9 + "px (tap to cycle)";
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function j() {
          return closure_3((arg0) => (arg0 + 1) % length.length);
        };
        cResult[8] = fn;
        let tmp23 = fn;
      } else {
        tmp23 = cResult[8];
      }
      if (cResult[9] !== combined) {
        let obj2 = { text: combined, size: "sm", onPress: tmp23 };
        const tmp26 = closure_8(tmp(tmp2[10]).Button, obj2);
        cResult[9] = combined;
        cResult[10] = tmp26;
        let tmp24 = tmp26;
      } else {
        tmp24 = cResult[10];
      }
      if (cResult[11] === tmp9) {
        if (cResult[12] === tmp4.badgeBox) {
          if (cResult[13] === tmp4.tile) {
            if (cResult[14] === tmp8.primary) {
              if (cResult[15] === tmp8.secondary) {
                let tmp28 = cResult[16];
              }
              if (cResult[17] === tmp4.grid) {
                if (cResult[18] === tmp28) {
                  let tmp31 = cResult[19];
                }
                if (cResult[20] === tmp31) {
                  if (cResult[21] === tmp12) {
                    if (cResult[22] === tmp16) {
                      if (cResult[23] === tmp24) {
                        let tmp35 = cResult[24];
                      }
                      if (cResult[25] === tmp4.contentContainer) {
                        if (cResult[26] === tmp4.wrap) {
                          if (cResult[27] === tmp35) {
                            let tmp38 = cResult[28];
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
                const obj4 = { spacing: 16, children: null };
                items = [tmp12, tmp16, tmp24, tmp31];
                obj4.children = items;
                const tmp37 = closure_7(tmp(tmp2[12]).Stack, obj4);
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
        value = value.value;
        const obj = { style: closure_0.tile, children: null };
        const obj2 = { style: closure_0.badgeBox, children: null };
        const size = { badge: value, primaryTintColor: closure_4.primary, secondaryTintColor: closure_4.secondary, width: height, height };
        obj2.children = closure_2_8(badges_GuildBadge.GuildBadge, size);
        items = [closure_2_8(hasOwnProperty, obj2), ];
        const obj3 = { variant: "text-xs/normal", color: "text-muted", style: { textAlign: "center" }, children: null };
        const items1 = [value.name, ];
        let str = "";
        if (2 === dependencyMap[value]) {
          str = " \u00B7 2c";
        }
        items1[1] = str;
        obj3.children = items1;
        items[1] = React5(Text_Text.Text, obj3);
        obj.children = items;
        return React5(hasOwnProperty, obj, value);
      });
      cResult[11] = tmp9;
      cResult[12] = tmp4.badgeBox;
      cResult[13] = tmp4.tile;
      cResult[14] = tmp8.primary;
      cResult[15] = tmp8.secondary;
      cResult[16] = mapped1;
      tmp28 = mapped1;
    }
    const obj6 = { horizontal: true, showsHorizontalScrollIndicator: false, children: null };
    const obj7 = { style: tmp4.controlRow, children: tmp14 };
    obj6.children = closure_8(closure_5, obj7);
    const tmp20 = closure_8(closure_4, obj6);
    cResult[5] = tmp4.controlRow;
    cResult[6] = tmp14;
    cResult[7] = tmp20;
    tmp16 = tmp20;
  }
  const obj8 = { variant: "text-md/normal", children: null };
  let items1 = ["All ", closure_9.length, " badge kinds. Tint: ", items[first].label, " \u00B7 Size: ", dependencyMap2[tmp7[0]], "px. 2c = two-color badge."];
  obj8.children = items1;
  const tmp13 = closure_7(require("Text/Text").Text, obj8);
  cResult[0] = dependencyMap2[tmp7[0]];
  cResult[1] = items[first].label;
  cResult[2] = tmp13;
  tmp12 = tmp13;
  arr = items;
  let obj = require("c");
}) : (function DevToolsGuildTagBadgesScreen() {
  const tmp = closure_12();
  _require = tmp;
  [first, _slicedToArray] = noop.useState(1);
  const tmp4 = _slicedToArray(noop.useState(1), 2);
  noop = tmp4[1];
  closure_4 = tmp5;
  closure_5 = tmp6;
  let obj = { style: tmp.wrap, contentContainerStyle: tmp.contentContainer, children: null };
  let obj2 = { spacing: 16, children: null };
  let obj3 = { variant: "text-md/normal", children: null };
  items = ["All ", closure_9.length, " badge kinds. Tint: "];
  items[3] = items[first].label;
  items[4] = " \u00B7 Size: ";
  items[5] = dependencyMap2[tmp4[0]];
  items[6] = "px. 2c = two-color badge.";
  obj3.children = items;
  let items1 = [closure_7(require("Text/Text").Text, obj3), , , ];
  const obj4 = {
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    children: closure_8(closure_5, {
      style: tmp.controlRow,
      children: items.map((label, index) => {
        closure_0 = index;
        const obj = { text: label.label, size: "sm", variant: null, onPress: null };
        let str = "secondary";
        if (index === first) {
          str = "primary";
        }
        obj.variant = str;
        obj.onPress = function onPress() {
          return closure_2(closure_0);
        };
        return closure_1_8(closure_0(first[10]).Button, obj, label.label);
      })
    })
  };
  items1[1] = closure_8(closure_4, obj4);
  const obj5 = {
    style: tmp.controlRow,
    children: items.map((label, index) => {
      closure_0 = index;
      const obj = { text: label.label, size: "sm", variant: null, onPress: null };
      let str = "secondary";
      if (index === first) {
        str = "primary";
      }
      obj.variant = str;
      obj.onPress = function onPress() {
        return closure_2(closure_0);
      };
      return closure_1_8(closure_0(first[10]).Button, obj, label.label);
    })
  };
  items1[2] = closure_8(require("components/Button/Button").Button, {
    text: "Size: " + dependencyMap2[tmp4[0]] + "px (tap to cycle)",
    size: "sm",
    onPress() {
      return closure_3((arg0) => (arg0 + 1) % length.length);
    }
  });
  const obj6 = {
    text: "Size: " + dependencyMap2[tmp4[0]] + "px (tap to cycle)",
    size: "sm",
    onPress() {
      return closure_3((arg0) => (arg0 + 1) % length.length);
    }
  };
  items1[3] = closure_8(closure_5, {
    style: tmp.grid,
    children: closure_9.map((value) => {
      value = value.value;
      const obj = { style: closure_0.tile, children: null };
      const obj2 = { style: closure_0.badgeBox, children: null };
      const size = { badge: value, primaryTintColor: closure_4.primary, secondaryTintColor: closure_4.secondary, width: height, height };
      obj2.children = closure_2_8(badges_GuildBadge.GuildBadge, size);
      items = [closure_2_8(hasOwnProperty, obj2), ];
      const obj3 = { variant: "text-xs/normal", color: "text-muted", style: { textAlign: "center" }, children: null };
      const items1 = [value.name, ];
      let str = "";
      if (2 === dependencyMap[value]) {
        str = " \u00B7 2c";
      }
      items1[1] = str;
      obj3.children = items1;
      items[1] = React5(Text_Text.Text, obj3);
      obj.children = items;
      return React5(hasOwnProperty, obj, value);
    })
  });
  obj2.children = items1;
  obj.children = closure_7(require("Stack/Stack").Stack, obj2);
  return closure_8(closure_4, obj);
});