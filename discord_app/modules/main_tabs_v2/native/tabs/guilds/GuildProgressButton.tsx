// discord_app/modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useScaledTextLineHeight from "../../../../screen/native/useScaledTextLineHeight.android.tsx";
import MobileVisualRefreshExperiment from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import GuildProgressUtils from "../../../../guild_progress/native/GuildProgressUtils.tsx";
import GuildProgressActionCreatorsDefault from "../../../../guild_progress/GuildProgressActionCreators.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let guild;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let completed;
      let percentComplete;
      let subtitle;
      let obj = guild(576);
      const cResult = obj.c(15);
      guild = guild.guild;
      let obj2 = guild(12130);
      const guildProgressStep = obj2.useGuildProgressStep(guild);
      ({ percentComplete, subtitle, completed } = guildProgressStep);
      if (cResult[0] === completed) {
        let tmp5;
        let tmp6;
        if (cResult[1] === guild.id) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const effect = react.useEffect(tmp5, tmp6);
        if (cResult[4] === completed) {
          let tmp9;
          let tmp12;
          let tmp11;
          let tmp17;
          if (cResult[5] === guild) {
            tmp9 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const Icon = tmp(8897).RowButton.Icon;
            const tmp15 = <Icon source={completed(16123)} />;
            const intl = tmp(1126).intl;
            const stringResult = intl.string(guild(1126).t.o3HK3d);
            cResult[7] = tmp15;
            cResult[8] = stringResult;
            tmp12 = stringResult;
            tmp11 = tmp15;
          } else {
            tmp11 = cResult[7];
            tmp12 = cResult[8];
          }
          if (cResult[9] !== percentComplete) {
            const tmp20 = jsx(completed(12250), { percent: percentComplete });
            cResult[9] = percentComplete;
            cResult[10] = tmp20;
            tmp17 = tmp20;
          } else {
            tmp17 = cResult[10];
          }
          if (cResult[11] === tmp9) {
            if (cResult[12] === subtitle) {
              let tmp21;
              if (cResult[13] === tmp17) {
                tmp21 = cResult[14];
              }
              return tmp21;
            }
          }
          const tmp23 = jsx(guild(8897).RowButton, {
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
            const obj = GuildProgressActionCreatorsDefault;
            const progress = obj.createProgress(guild.id);
          }
          const obj2 = GuildProgressUtils;
          obj2.openActionSheet(guild);
        };
        cResult[4] = completed;
        cResult[5] = guild;
        cResult[6] = fn2;
        tmp9 = fn2;
      }
      const fn = function n() {
        if (completed) {
          const obj = GuildProgressActionCreatorsDefault;
          const result = obj.markCompletedProgressSeen(guild.id);
        }
      };
      const items = [completed, guild.id];
      cResult[0] = completed;
      cResult[1] = guild.id;
      cResult[2] = fn;
      cResult[3] = items;
      tmp6 = items;
      tmp5 = fn;
    }
  : (guild) => {
      let percentComplete;
      let subtitle;
      guild = guild.guild;
      let obj = guild(12130);
      const guildProgressStep = obj.useGuildProgressStep(guild);
      const completed = guildProgressStep.completed;
      const items = [completed, guild.id];
      ({ percentComplete, subtitle } = guildProgressStep);
      const effect = react.useEffect(() => {
        if (completed) {
          const obj = GuildProgressActionCreatorsDefault;
          const result = obj.markCompletedProgressSeen(guild.id);
        }
      }, items);
      const items1 = [guild, completed];
      const callback = react.useCallback(() => {
        if (!completed) {
          const obj = GuildProgressActionCreatorsDefault;
          const progress = obj.createProgress(guild.id);
        }
        const obj2 = GuildProgressUtils;
        obj2.openActionSheet(guild);
      }, items1);
      const RowButton = guild(8897).RowButton;
      ({ source: completed(16123) });
      const Icon = guild(8897).RowButton.Icon;
      const intl = guild(1126).intl;
      return (
        <RowButton
          icon={null}
          label={intl.string(guild(1126).t.o3HK3d)}
          subLabel={subtitle}
          onPress={callback}
          trailing={null}
        />
      );
    };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default tmp2;
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const obj = MobileVisualRefreshExperiment;
  const refreshToken = obj.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const obj2 = useScaledTextLineHeight;
  const sum = refreshToken + obj2.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj3 = useScaledTextLineHeight;
  return sum + 2 * obj3.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
