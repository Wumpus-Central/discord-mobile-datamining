// discord_app/modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useScaledTextLineHeight from "../../../../screen/native/useScaledTextLineHeight.android.tsx";
import MobileVisualRefreshExperiment from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import GuildProgressUtils from "../../../../guild_progress/native/GuildProgressUtils.tsx";
import GuildProgressActionCreatorsDefault from "../../../../guild_progress/GuildProgressActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildProgressButton(guild) {
      const cResult = guild(576).c(15);
      guild = guild.guild;
      let obj = guild(576);
      const guildProgressStep = guild(12207).useGuildProgressStep(guild);
      ({ percentComplete, subtitle, completed } = guildProgressStep);
      if (cResult[0] === completed) {
        if (cResult[1] === guild.id) {
          let tmp5 = cResult[2];
          let tmp6 = cResult[3];
        }
        const effect = noop.useEffect(tmp5, tmp6);
        if (cResult[4] === completed) {
          if (cResult[5] === guild) {
            let tmp9 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { source: completed(16611) };
            const tmp15 = jsx(tmp(8581).RowButton.Icon, { source: completed(16611) });
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t.o3HK3d);
            cResult[7] = tmp15;
            cResult[8] = stringResult;
            let tmp12 = stringResult;
            let tmp11 = tmp15;
          } else {
            tmp11 = cResult[7];
            tmp12 = cResult[8];
          }
          if (cResult[9] !== percentComplete) {
            const obj4 = { percent: percentComplete };
            const tmp20 = jsx(completed(12327), { percent: percentComplete });
            cResult[9] = percentComplete;
            cResult[10] = tmp20;
            let tmp17 = tmp20;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp9) {
            if (cResult[12] === subtitle) {
              if (cResult[13] === tmp17) {
                let tmp21 = cResult[14];
              }
              return tmp21;
            }
          }
          const obj5 = { icon: tmp11, label: tmp12, subLabel: subtitle, onPress: tmp9, trailing: tmp17 };
          const tmp23 = jsx(tmp(8581).RowButton, {
            icon: tmp11,
            label: tmp12,
            subLabel: subtitle,
            onPress: tmp9,
            trailing: tmp17,
          });
          cResult[11] = tmp9;
          cResult[12] = subtitle;
          cResult[13] = tmp17;
          cResult[14] = tmp23;
          tmp21 = tmp23;
        }
        const fn2 = function u() {
          if (!completed) {
            const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
          }
          GuildProgressUtils.openActionSheet(guild);
        };
        cResult[4] = completed;
        cResult[5] = guild;
        cResult[6] = fn2;
        tmp9 = fn2;
      }
      const fn = function n() {
        if (completed) {
          const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(guild.id);
        }
      };
      const items = [completed, guild.id];
      cResult[0] = completed;
      cResult[1] = guild.id;
      cResult[2] = fn;
      cResult[3] = items;
      tmp6 = items;
      tmp5 = fn;
      let obj2 = guild(12207);
    }
  : function GuildProgressButton(guild) {
      guild = guild.guild;
      const guildProgressStep = guild(12207).useGuildProgressStep(guild);
      const completed = guildProgressStep.completed;
      const items = [completed, guild.id];
      ({ percentComplete, subtitle } = guildProgressStep);
      const effect = noop.useEffect(() => {
        if (completed) {
          const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(guild.id);
        }
      }, items);
      const items1 = [guild, completed];
      const callback = noop.useCallback(() => {
        if (!completed) {
          const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
        }
        GuildProgressUtils.openActionSheet(guild);
      }, items1);
      let obj2 = { icon: null, label: null, subLabel: null, onPress: null, trailing: null };
      let obj = guild(12207);
      obj2.icon = jsx(guild(8581).RowButton.Icon, { source: completed(16611) });
      const intl = guild(1126).intl;
      obj2.label = intl.string(guild(1126).t.o3HK3d);
      obj2.subLabel = subtitle;
      obj2.onPress = callback;
      obj2.trailing = jsx(completed(12327), { percent: percentComplete });
      return jsx(guild(8581).RowButton, { icon: null, label: null, subLabel: null, onPress: null, trailing: null });
    };
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(
    nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  );
  const sum = refreshToken + useScaledTextLineHeight.scaleTextLineHeight("text-md/semibold", fontScale);
  return sum + 2 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
