// discord_app/modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2568 from "../FamilyCenter.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import FamilyCenterStore from "../FamilyCenterStore.tsx";

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  header: { textAlign: "center" },
  guildIcon: {
    borderRadius: nativeDefault.radii.md,
    borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  },
};
let closure_6 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRow(guildActivity) {
      const cResult = guildActivity(576).c(13);
      guildActivity = guildActivity.guildActivity;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [FamilyCenterStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildActivity.guild_id) {
        const fn = function u() {
          return FamilyCenterStore.getGuild(guildActivity.guild_id);
        };
        cResult[1] = guildActivity.guild_id;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = guildActivity(576);
      const stateFromStores = guildActivity(504).useStateFromStores(first, tmp7);
      if (null == stateFromStores) {
        return null;
      } else {
        if (cResult[3] === guildActivity.call_count) {
          if (cResult[4] === guildActivity.messages_sent) {
            let tmp9 = cResult[5];
          }
          if (cResult[6] === stateFromStores) {
            if (cResult[7] === tmp4.guildIcon) {
              let tmp11 = cResult[8];
            }
            if (cResult[9] === tmp9) {
              if (cResult[10] === stateFromStores.name) {
                if (cResult[11] === tmp11) {
                  let tmp15 = cResult[12];
                }
                return tmp15;
              }
            }
            const obj2 = { label: stateFromStores.name, subLabel: tmp9, icon: tmp11 };
            const tmp17 = closure_4(tmp(6179).TableRow, obj2);
            cResult[9] = tmp9;
            cResult[10] = stateFromStores.name;
            cResult[11] = tmp11;
            cResult[12] = tmp17;
            tmp15 = tmp17;
          }
          const obj3 = { guild: stateFromStores, style: tmp4.guildIcon };
          const tmp14 = closure_4(GuildIconDefault, obj3);
          cResult[6] = stateFromStores;
          cResult[7] = tmp4.guildIcon;
          cResult[8] = tmp14;
          tmp11 = tmp14;
        }
        const topUserOrGuildDescription = tmp(7741).getTopUserOrGuildDescription(
          guildActivity.messages_sent,
          guildActivity.call_count,
        );
        cResult[3] = guildActivity.call_count;
        cResult[4] = guildActivity.messages_sent;
        cResult[5] = topUserOrGuildDescription;
        tmp9 = topUserOrGuildDescription;
        const tmpResult2 = tmp(7741);
      }
      const tmpResult = guildActivity(504);
    }
  : function GuildRow(guildActivity) {
      guildActivity = guildActivity.guildActivity;
      const tmp = closure_6();
      const items = [FamilyCenterStore];
      const stateFromStores = guildActivity(504).useStateFromStores(items, () =>
        FamilyCenterStore.getGuild(guildActivity.guild_id),
      );
      if (null == stateFromStores) {
        return null;
      } else {
        const topUserOrGuildDescription = tmp2(7741).getTopUserOrGuildDescription(
          guildActivity.messages_sent,
          guildActivity.call_count,
        );
        const obj2 = { label: stateFromStores.name, subLabel: topUserOrGuildDescription, icon: null };
        const obj3 = { guild: stateFromStores, style: tmp.guildIcon };
        obj2.icon = closure_4(GuildIconDefault, obj3);
        return closure_4(tmp2(6179).TableRow, obj2);
      }
      const obj = guildActivity(504);
    };
ReactCompilerGating = fn(558);
let obj3 = {
  borderRadius: nativeDefault.radii.md,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterTopServersBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
      const cResult = c.c(11);
      topGuildActivities = topGuildActivities.topGuildActivities;
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef2568.Lq9Set);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.header) {
        const obj2 = { variant: "text-md/bold", style: tmp4.header, children: first };
        const tmp10 = React4(Text_Text.Text, obj2);
        cResult[1] = tmp4.header;
        cResult[2] = tmp10;
        let tmp8 = tmp10;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== topGuildActivities) {
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function h(guildActivity) {
            return closure_1_4(closure_1_7, { guildActivity }, guildActivity.guild_id);
          };
          cResult[5] = fn;
          let tmp12 = fn;
        } else {
          tmp12 = cResult[5];
        }
        const mapped = topGuildActivities.map(tmp12);
        cResult[3] = topGuildActivities;
        cResult[4] = mapped;
      } else {
        if (cResult[6] !== cResult[4]) {
          const obj3 = { hasIcons: true, children: tmp11 };
          const tmp17 = React4(TableRowGroup.TableRowGroup, obj3);
          cResult[6] = tmp11;
          cResult[7] = tmp17;
          let tmp15 = tmp17;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] === tmp8) {
          if (cResult[9] === tmp15) {
            let tmp18 = cResult[10];
          }
          return tmp18;
        }
        const obj4 = { children: null };
        const items = [tmp8, tmp15];
        obj4.children = items;
        const tmp20 = hasOwnProperty(ActionSheet.ActionSheet, obj4);
        cResult[8] = tmp8;
        cResult[9] = tmp15;
        cResult[10] = tmp20;
        tmp18 = tmp20;
      }
    }
  : function FamilyCenterTopGuildsBottomSheet(topGuildActivities) {
      topGuildActivities = topGuildActivities.topGuildActivities;
      const obj = { children: null };
      const obj2 = { variant: "text-md/bold", style: closure_6().header, children: null };
      const intl = util.intl;
      obj2.children = intl.string(_modDef2568.Lq9Set);
      const items = [React4(Text_Text.Text, obj2)];
      const tmp = closure_6();
      items[1] = React4(TableRowGroup.TableRowGroup, {
        hasIcons: true,
        children: topGuildActivities.map((guildActivity) =>
          closure_1_4(closure_1_7, { guildActivity }, guildActivity.guild_id),
        ),
      });
      obj.children = items;
      return hasOwnProperty(ActionSheet.ActionSheet, obj);
    };
