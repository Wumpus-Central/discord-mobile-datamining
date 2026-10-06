// === Module 17807: GuildSettingsServerTagBadgeGrid ===

// Module 17807 (GuildSettingsServerTagBadgeGrid)
import nativeDefault from "native" /* 587 */;
import GuildTagConstants from "GuildTagConstants" /* 7614 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 12153 */;
import useGuildTagBadgeCollectionDefault from "useGuildTagBadgeCollection" /* 17808 */;
import GuildSettingsServerTagPickerCellDefault from "GuildSettingsServerTagPickerCell" /* 17809 */;
import getGuildTagBadgeLabelDefault from "getGuildTagBadgeLabel" /* 17810 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_0, guildId;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { grid: { flexDirection: "row", flexWrap: "wrap", gap: PX_8 }, upsellCard: obj2, upsellPreview: obj3, upsellText: { flex: 1 } };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
obj3 = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let closure_9 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let lockedBadges;
  let onSelectBadge;
  let substr;
  let tmp12;
  let tmp7;
  let tmp8;
  let unlockedBadges;
  let tmp = guildId;
  let obj = guildId(onSelectBadge[7]);
  const cResult = obj.c(24);
  guildId = guildId.guildId;
  const selectedBadge = guildId.selectedBadge;
  onSelectBadge = guildId.onSelectBadge;
  const cellSize = guildId.cellSize;
  const tmp4 = closure_9();
  ({ unlockedBadges, lockedBadges } = selectedBadge(onSelectBadge[8])());
  selectedBadge(onSelectBadge[8])();
  if (cResult[0] !== guildId) {
    const fn = function t() {
      const obj = { guildId, autoOpenPerkId: "guildTagsBadgePacks" };
      openGuildPowerupsModalDefault(obj);
    };
    cResult[0] = guildId;
    cResult[1] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: intl.string(tmp(onSelectBadge[11]).t.wRnfnY) };
    const Text = tmp(tmp2[10]).Text;
    intl = tmp(tmp2[11]).intl;
    const tmp10 = closure_7(Text, obj2);
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === cellSize) {
    if (cResult[4] === onSelectBadge) {
      if (cResult[5] === selectedBadge) {
        if (cResult[6] === unlockedBadges) {
          tmp12 = cResult[7];
        }
        if (cResult[12] === tmp4.grid) {
          let tmp15;
          if (cResult[13] === tmp12) {
            tmp15 = cResult[14];
          }
          if (cResult[15] === tmp7) {
            if (cResult[16] === lockedBadges) {
              if (cResult[17] === tmp4.upsellCard) {
                if (cResult[18] === tmp4.upsellPreview) {
                  let tmp19;
                  if (cResult[19] === tmp4.upsellText) {
                    tmp19 = cResult[20];
                  }
                  if (cResult[21] === tmp15) {
                    let tmp25;
                    if (cResult[22] === tmp19) {
                      tmp25 = cResult[23];
                    }
                    return tmp25;
                  }
                  const obj3 = { spacing: selectedBadge(onSelectBadge[4]).space.PX_8, children: items };
                  const Stack = tmp(tmp2[16]).Stack;
                  items = [tmp8, tmp15, tmp19];
                  const tmp27 = closure_8(Stack, obj3);
                  cResult[21] = tmp15;
                  cResult[22] = tmp19;
                  cResult[23] = tmp27;
                  tmp25 = tmp27;
                }
              }
            }
          }
          if (lockedBadges.length > 0) {
            ({ accessibilityRole: "button", accessibilityLabel: intl2.string(tmp(onSelectBadge[11]).t.U5p3GZ), onPress: tmp7, style: tmp4.upsellCard, children: items1 });
            intl2 = tmp(tmp2[11]).intl;
            const obj5 = {
              style: tmp4.upsellPreview,
              children: substr.map((badge) => {
                          size = { badge: badge.kind, width: 21, height: 21 };
                          return closure_1_7(guildId(onSelectBadge[14]).GuildBadge, size, badge.kind);
                        })
            };
            substr = lockedBadges.slice(0, 10);
            items1 = [closure_7(closure_5, obj5), , ];
            const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp4.upsellText, children: intl3.string(tmp(onSelectBadge[11]).t.U5p3GZ) };
            const Text2 = tmp(tmp2[10]).Text;
            intl3 = tmp(tmp2[11]).intl;
            items1[1] = closure_7(Text2, obj6);
            const obj7 = { size: "md", color: selectedBadge(onSelectBadge[4]).colors.ICON_SUBTLE };
            const ChevronSmallRightIcon = tmp(tmp2[15]).ChevronSmallRightIcon;
            items1[2] = closure_7(ChevronSmallRightIcon, obj7);
            class T {
              constructor(arg0) {
                closure_0 = guildId;
                obj = { size: cellSize, selected: guildId.kind === selectedBadge, accessibilityLabel: null, onPress: null, children: null };
                tmp = selectedBadge(onSelectBadge[12]);
                obj.accessibilityLabel = selectedBadge(onSelectBadge[13])(guildId.kind);
                obj.onPress = function onPress() {
                  return onSelectBadge(badge.kind);
                };
                size = { badge: guildId.kind, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32 };
                obj.children = closure_1_7(guildId(onSelectBadge[14]).GuildBadge, size);
                return closure_1_7(tmp, obj, guildId.kind);
              }
            }
          }
          cResult[15] = tmp7;
          cResult[16] = lockedBadges;
          cResult[17] = tmp4.upsellCard;
          cResult[18] = tmp4.upsellPreview;
          cResult[19] = tmp4.upsellText;
          cResult[20] = lockedBadges.length > 0;
          tmp19 = tmp20;
        }
        const obj8 = { accessibilityRole: "radiogroup", style: tmp11, children: tmp12 };
        const tmp18 = closure_7(closure_5, obj8);
        cResult[12] = tmp4.grid;
        cResult[13] = tmp12;
        cResult[14] = tmp18;
        tmp15 = tmp18;
      }
    }
  }
  if (cResult[8] === cellSize) {
    if (cResult[9] === onSelectBadge) {
      let tmp13;
      if (cResult[10] === selectedBadge) {
        tmp13 = cResult[11];
      }
      const mapped = unlockedBadges.map(tmp13);
      cResult[3] = cellSize;
      cResult[4] = onSelectBadge;
      cResult[5] = selectedBadge;
      cResult[6] = unlockedBadges;
      cResult[7] = mapped;
      tmp12 = mapped;
    }
  }
  class T {
    constructor(arg0) {
      closure_0 = guildId;
      obj = { size: cellSize, selected: guildId.kind === selectedBadge, accessibilityLabel: null, onPress: null, children: null };
      tmp = selectedBadge(onSelectBadge[12]);
      obj.accessibilityLabel = selectedBadge(onSelectBadge[13])(guildId.kind);
      obj.onPress = function onPress() {
        return onSelectBadge(badge.kind);
      };
      size = { badge: guildId.kind, width: closure_1_6.SIZE_32, height: closure_1_6.SIZE_32 };
      obj.children = closure_1_7(guildId(onSelectBadge[14]).GuildBadge, size);
      return closure_1_7(tmp, obj, guildId.kind);
    }
  }
  cResult[8] = cellSize;
  cResult[9] = onSelectBadge;
  cResult[10] = selectedBadge;
  cResult[11] = T;
  tmp13 = T;
}) : ((guildId) => {
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let lockedBadges;
  let substr;
  let unlockedBadges;
  guildId = guildId.guildId;
  ({ selectedBadge: importDefault, onSelectBadge: dependencyMap, cellSize: react } = guildId);
  let tmp = closure_9();
  ({ unlockedBadges, lockedBadges } = useGuildTagBadgeCollectionDefault());
  const items = [guildId];
  useGuildTagBadgeCollectionDefault();
  const callback = react.useCallback(() => {
    const obj = { guildId, autoOpenPerkId: "guildTagsBadgePacks" };
    openGuildPowerupsModalDefault(obj);
  }, items);
  let obj = { spacing: nativeDefault.space.PX_8, children: items1 };
  const Stack = guildId(5600).Stack;
  const obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: intl.string(guildId(1126).t.wRnfnY) };
  const Text = guildId(4892).Text;
  intl = guildId(1126).intl;
  items1 = [closure_7(Text, obj2), , ];
  const obj3 = {
    accessibilityRole: "radiogroup",
    style: tmp.grid,
    children: unlockedBadges.map((badge) => {
      const obj = {
        size,
        selected: badge.kind === importDefault,
        accessibilityLabel: getGuildTagBadgeLabelDefault(badge.kind),
        onPress() {
          return dependencyMap(badge.kind);
        },
        children: closure_1_7(guildId(dependencyMap[14]).GuildBadge, size)
      };
      size = { badge: badge.kind, width: GuildTagBadgeSize.SIZE_32, height: GuildTagBadgeSize.SIZE_32 };
      const tmp = GuildSettingsServerTagPickerCellDefault;
      return closure_1_7(tmp, obj, badge.kind);
    })
  };
  items1[1] = closure_7(closure_5, obj3);
  let tmp6Result = lockedBadges.length > 0;
  if (tmp6Result) {
    const obj4 = { accessibilityRole: "button", accessibilityLabel: intl2.string(guildId(1126).t.U5p3GZ), onPress: callback, style: tmp.upsellCard, children: items2 };
    intl2 = tmp7(1126).intl;
    const obj5 = {
      style: tmp.upsellPreview,
      children: substr.map((badge) => {
          size = { badge: badge.kind, width: 21, height: 21 };
          return closure_1_7(guildId(dependencyMap[14]).GuildBadge, size, badge.kind);
        })
    };
    substr = lockedBadges.slice(0, 10);
    items2 = [closure_7(closure_5, obj5), , ];
    const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.upsellText, children: intl3.string(guildId(1126).t.U5p3GZ) };
    const Text2 = tmp7(4892).Text;
    intl3 = tmp7(1126).intl;
    items2[1] = closure_7(Text2, obj6);
    const obj7 = { size: "md", color: nativeDefault.colors.ICON_SUBTLE };
    const ChevronSmallRightIcon = tmp7(6715).ChevronSmallRightIcon;
    items2[2] = closure_7(ChevronSmallRightIcon, obj7);
    tmp6Result = closure_8(closure_4, obj4);
  }
  items1[2] = tmp6Result;
  return closure_8(Stack, obj);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx");

export default tmp5;