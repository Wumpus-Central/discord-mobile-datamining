// discord_app/modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import openGuildPowerupsModalDefault from "../../premium/powerups/native/utils/openGuildPowerupsModal.tsx";
import useGuildTagBadgeCollectionDefault from "../../guild_tag/useGuildTagBadgeCollection.tsx";
import GuildSettingsServerTagPickerCellDefault from "GuildSettingsServerTagPickerCell.tsx";
import getGuildTagBadgeLabelDefault from "../../guild_tag/utils/getGuildTagBadgeLabel.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildTagBadgeSize = fn(7869).GuildTagBadgeSize;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  grid: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_8 },
  upsellCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: nativeDefault.space.PX_16,
    padding: nativeDefault.space.PX_16,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  },
  upsellPreview: null,
  upsellText: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_16,
  padding: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.upsellPreview = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj2.upsellText = { flex: 1 };
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { width: 128, flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagBadgeGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsServerTagBadgeGrid(guildId) {
      const cResult = guildId(onSelectBadge[7]).c(24);
      guildId = guildId.guildId;
      const selectedBadge = guildId.selectedBadge;
      onSelectBadge = guildId.onSelectBadge;
      const cellSize = guildId.cellSize;
      const tmp4 = closure_9();
      let obj = guildId(onSelectBadge[7]);
      ({ unlockedBadges, lockedBadges } = selectedBadge(onSelectBadge[8])());
      if (cResult[0] !== guildId) {
        const fn = function t() {
          openGuildPowerupsModalDefault({ guildId, autoOpenPerkId: "guildTagsBadgePacks" });
        };
        cResult[0] = guildId;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
        const intl = tmp(tmp2[11]).intl;
        obj2.children = intl.string(tmp(tmp2[11]).t.wRnfnY);
        const tmp10 = closure_7(tmp(tmp2[10]).Text, obj2);
        cResult[2] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === cellSize) {
        if (cResult[4] === onSelectBadge) {
          if (cResult[5] === selectedBadge) {
            if (cResult[6] === unlockedBadges) {
              if (cResult[12] === tmp4.grid) {
                if (cResult[13] === tmp12) {
                  let tmp16 = cResult[14];
                }
                if (cResult[15] === tmp7) {
                  if (cResult[16] === lockedBadges) {
                    if (cResult[17] === tmp4.upsellCard) {
                      if (cResult[18] === tmp4.upsellPreview) {
                        if (cResult[19] === tmp4.upsellText) {
                          let tmp20 = cResult[20];
                        }
                        if (cResult[21] === tmp16) {
                          if (cResult[22] === tmp20) {
                            let tmp26 = cResult[23];
                          }
                          return tmp26;
                        }
                        const obj3 = { spacing: tmp5(tmp2[4]).space.PX_8, children: null };
                        const items = [tmp8, tmp16, tmp20];
                        obj3.children = items;
                        const tmp28 = closure_8(tmp(tmp2[16]).Stack, obj3);
                        cResult[21] = tmp16;
                        cResult[22] = tmp20;
                        cResult[23] = tmp28;
                        tmp26 = tmp28;
                      }
                    }
                  }
                }
                if (lockedBadges.length > 0) {
                  const obj4 = {
                    accessibilityRole: "button",
                    accessibilityLabel: null,
                    onPress: null,
                    style: null,
                    children: null,
                  };
                  const intl2 = tmp(tmp2[11]).intl;
                  obj4.accessibilityLabel = intl2.string(tmp(tmp2[11]).t.U5p3GZ);
                  obj4.onPress = tmp7;
                  obj4.style = tmp4.upsellCard;
                  const obj5 = { style: tmp4.upsellPreview, children: null };
                  const substr = lockedBadges.slice(0, 10);
                  obj5.children = substr.map((badge) => {
                    const size = { badge: badge.kind, width: 21, height: 21 };
                    return closure_1_7(guildId(onSelectBadge[14]).GuildBadge, size, badge.kind);
                  });
                  const items1 = [closure_7(closure_5, obj5), ,];
                  const obj6 = {
                    variant: "text-md/medium",
                    color: "text-subtle",
                    style: tmp4.upsellText,
                    children: null,
                  };
                  const intl3 = tmp(tmp2[11]).intl;
                  obj6.children = intl3.string(tmp(tmp2[11]).t.U5p3GZ);
                  items1[1] = closure_7(tmp(tmp2[10]).Text, obj6);
                  const obj7 = { size: "md", color: tmp5(tmp2[4]).colors.ICON_SUBTLE };
                  items1[2] = closure_7(tmp(tmp2[15]).ChevronSmallRightIcon, obj7);
                  obj4.children = items1;
                  class G {
                    constructor(arg0) {
                      closure_0 = guildId;
                      obj = {
                        size: cellSize,
                        selected: guildId.kind === selectedBadge,
                        accessibilityLabel: null,
                        onPress: null,
                        children: null,
                      };
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
                tmp20 = tmp21;
              }
              const obj8 = { accessibilityRole: "radiogroup", style: tmp11, children: cResult[7] };
              const tmp19 = closure_7(closure_5, obj8);
              cResult[12] = tmp4.grid;
              cResult[13] = cResult[7];
              cResult[14] = tmp19;
              tmp16 = tmp19;
            }
          }
        }
      }
      if (cResult[8] === cellSize) {
        if (cResult[9] === onSelectBadge) {
          if (cResult[10] === selectedBadge) {
            let tmp13 = cResult[11];
          }
          const mapped = unlockedBadges.map(tmp13);
          cResult[3] = cellSize;
          cResult[4] = onSelectBadge;
          cResult[5] = selectedBadge;
          cResult[6] = unlockedBadges;
          cResult[7] = mapped;
        }
      }
      class G {
        constructor(arg0) {
          closure_0 = guildId;
          obj = {
            size: cellSize,
            selected: guildId.kind === selectedBadge,
            accessibilityLabel: null,
            onPress: null,
            children: null,
          };
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
      cResult[11] = G;
      tmp13 = G;
      const tmp6 = selectedBadge(onSelectBadge[8])();
    }
  : function GuildSettingsServerTagBadgeGrid(guildId) {
      guildId = guildId.guildId;
      ({ selectedBadge: importDefault, onSelectBadge: dependencyMap, cellSize: noop } = guildId);
      const tmp = closure_9();
      ({ unlockedBadges, lockedBadges } = useGuildTagBadgeCollectionDefault());
      const items = [guildId];
      const callback = noop.useCallback(() => {
        openGuildPowerupsModalDefault({ guildId, autoOpenPerkId: "guildTagsBadgePacks" });
      }, items);
      let obj = { spacing: nativeDefault.space.PX_8, children: null };
      const obj2 = { variant: "text-md/medium", color: "text-subtle", accessibilityRole: "header", children: null };
      const intl = guildId(1126).intl;
      obj2.children = intl.string(guildId(1126).t.wRnfnY);
      const items1 = [closure_7(guildId(5087).Text, obj2), ,];
      const tmp4 = useGuildTagBadgeCollectionDefault();
      items1[1] = closure_7(closure_5, {
        accessibilityRole: "radiogroup",
        style: tmp.grid,
        children: unlockedBadges.map((badge) => {
          const obj = {
            size,
            selected: badge.kind === closure_1,
            accessibilityLabel: getGuildTagBadgeLabelDefault(badge.kind),
            onPress() {
              return dependencyMap(badge.kind);
            },
            children: null,
          };
          size = { badge: badge.kind, width: GuildTagBadgeSize.SIZE_32, height: GuildTagBadgeSize.SIZE_32 };
          obj.children = closure_1_7(guildId(14065).GuildBadge, size);
          return closure_1_7(GuildSettingsServerTagPickerCellDefault, obj, badge.kind);
        }),
      });
      let tmp6Result = lockedBadges.length > 0;
      if (tmp6Result) {
        const obj4 = {
          accessibilityRole: "button",
          accessibilityLabel: null,
          onPress: null,
          style: null,
          children: null,
        };
        const intl2 = tmp7(1126).intl;
        obj4.accessibilityLabel = intl2.string(tmp7(1126).t.U5p3GZ);
        obj4.onPress = callback;
        obj4.style = tmp.upsellCard;
        const obj5 = { style: tmp.upsellPreview, children: null };
        const substr = lockedBadges.slice(0, 10);
        obj5.children = substr.map((badge) => {
          size = { badge: badge.kind, width: 21, height: 21 };
          return closure_1_7(guildId(14065).GuildBadge, size, badge.kind);
        });
        const items2 = [closure_7(closure_5, obj5), ,];
        const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.upsellText, children: null };
        const intl3 = tmp7(1126).intl;
        obj6.children = intl3.string(tmp7(1126).t.U5p3GZ);
        items2[1] = closure_7(tmp7(5087).Text, obj6);
        const obj7 = { size: "md", color: nativeDefault.colors.ICON_SUBTLE };
        items2[2] = closure_7(tmp7(6899).ChevronSmallRightIcon, obj7);
        obj4.children = items2;
        tmp6Result = closure_8(closure_4, obj4);
      }
      items1[2] = tmp6Result;
      obj.children = items1;
      return closure_8(guildId(5374).Stack, obj);
    };
