// discord_app/modules/guild/native/GuildBadgeV2.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import native from "../../../design/void/native.tsx";
import shared from "../../../design/shared.tsx";
import GuildBadgeImageSource from "../../guild_badge/native/GuildBadgeImageSource.tsx";
import BadgeCategory from "../../guild_badge/BadgeCategory.tsx";
import GuildTraits from "../../guild_badge/GuildTraits.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let closure_2 = ["guild", "size"];
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ icon: { marginRight: 8 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let MEDIUM;
      let guild;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(12);
      if (cResult[0] !== arg0) {
        ({ guild, size } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_2);
        cResult[0] = arg0;
        cResult[1] = guild;
        cResult[2] = tmp8;
        cResult[3] = size;
        MEDIUM = size;
        tmp5 = tmp8;
        tmp4 = guild;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        MEDIUM = cResult[3];
      }
      if (undefined === MEDIUM) {
        MEDIUM = native.Icon.Sizes.MEDIUM;
      }
      const tmp9 = closure_5();
      const tmpResult = shared;
      const theme = tmpResult.useThemeContext().theme;
      if (null == tmp4) {
        return null;
      } else {
        if (cResult[4] === tmp4) {
          let tmp10;
          if (cResult[5] === theme) {
            tmp10 = cResult[6];
          }
          let tmp12 = null;
          if (null != tmp10) {
            if (cResult[7] === tmp10) {
              if (cResult[8] === tmp5) {
                if (cResult[9] === MEDIUM) {
                  let tmp13;
                  if (cResult[10] === tmp9.icon) {
                    tmp13 = cResult[11];
                  }
                  tmp12 = tmp13;
                }
              }
            }
            const Icon = native.Icon;
            const merged = Object.assign(tmp5);
            const tmp18 = <Icon size={MEDIUM} source={tmp10} style={tmp9.icon} disableColor />;
            cResult[7] = tmp10;
            cResult[8] = tmp5;
            cResult[9] = MEDIUM;
            cResult[10] = tmp9.icon;
            cResult[11] = tmp18;
            tmp13 = tmp18;
          }
          return tmp12;
        }
        const tmpResult2 = GuildBadgeImageSource;
        const guildBadgeImageSource = tmpResult2.getGuildBadgeImageSource(tmp4, theme);
        cResult[4] = tmp4;
        cResult[5] = theme;
        cResult[6] = guildBadgeImageSource;
        tmp10 = guildBadgeImageSource;
      }
    }
  : (arg0) => {
      let guild;
      ({ guild, size } = arg0);
      if (size === undefined) {
        size = native.Icon.Sizes.MEDIUM;
      }
      const merged = Object.assign(arg0, Object.assign({ guild: 0, size: 0 }));
      const tmp4 = closure_5();
      shared;
      if (null == guild) {
        return null;
      } else {
        const tmp5Result = GuildBadgeImageSource;
        const guildBadgeImageSource = tmp5Result.getGuildBadgeImageSource(guild, tmp8);
        let tmp10 = null;
        if (null != guildBadgeImageSource) {
          const Icon = native.Icon;
          const merged1 = Object.assign(merged);
          tmp10 = <Icon size={size} source={guildBadgeImageSource} style={tmp4.icon} disableColor />;
        }
        return tmp10;
      }
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/guild/native/GuildBadgeV2.tsx");

export default tmp3;
export const hasGuildBadge = function hasGuildBadge(fromGuildProfileResult, arg1) {
  const obj = GuildTraits;
  const guildTraits = obj.getGuildTraits(fromGuildProfileResult);
  const obj2 = BadgeCategory;
  const badgeCategory = obj2.getBadgeCategory(guildTraits);
  const tmp5 = GuildBadgeImageSource.badgeVariants[badgeCategory];
  let tmp6 = null != tmp5;
  if (tmp6) {
    const tmpResult = GuildBadgeImageSource;
    tmp6 = null != tmpResult.resolveImageSource(tmp5, guildTraits, arg1);
  }
  return tmp6;
};
