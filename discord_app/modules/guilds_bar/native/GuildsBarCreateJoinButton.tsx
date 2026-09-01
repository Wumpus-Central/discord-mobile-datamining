// === Module 15943: _handleCreateJoinGuildPress ===

// Module 15943 (_handleCreateJoinGuildPress)
import ThemesDefault from "Themes" /* 712 */;
import UnreadIndicatorDefault from "UnreadIndicator" /* 15885 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "handleConnectionOpen" /* 4299 */;
import ME from "ME" /* 676 */;
import { PremiumUpsellTypes } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function _handleCreateJoinGuildPress() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let lib2 = tmp5;
            let lib = tmp2;
            lib = undefined;
            lib2 = undefined;
            c2 = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0(c2[9])(c2[8], c2.paths);
            return obj1;
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            lib = arg1.default;
            c2 = 2;
            c3 = 1;
            const obj3 = { value: null, done: false };
            obj3[0] = lib(c2[9])(c2[10], c2.paths);
            return obj3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = arg1;
          return obj4;
        } else {
          lib2 = arg1.default;
          lib.acknowledgeTooltip(constants2.GUILD_TOOLTIP);
          if (obj11.isAtGuildCapAndNonPremium()) {
            obj = lib2(c2[12]);
            const obj5 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
            obj5[0] = constants3.GUILD_CAP;
            const obj6 = { page: null };
            obj6[0] = constants.CREATE_JOIN_GUILD_MODAL;
            obj5[1] = obj6;
            const items = [lib2(c2[13]).NEW_GUILD_BUTTON];
            obj5[2] = items;
            const obj7 = { type: null };
            obj7[0] = constants4.GUILD_CAP_MODAL_UPSELL;
            obj5[3] = obj7;
            const result = obj.handleShowUpsellAlert(obj5);
          } else {
            lib2.openCreateGuildModal();
          }
          c3 = 3;
          obj11 = lib(c2[11]);
        }
      } catch (tmp27) {
        c3 = tmp;
        throw tmp27;
      }
    }
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c4 = importAllResult;
({ AnalyticsPages: error, MOBILE_GUILD_UPSELL_LIST: closure_8, TooltipNames: c9, UpsellTypes: c10 } = ME);
let closure_13 = createCacheKey.createStyles({ stretch: { alignSelf: "stretch" } });
const memoResult = importAllResult.memo(function GuildsBarCreateJoinButton() {
  let obj = enabled(15885);
  const tmp = callback2();
  const GameCommunityAddServerEntryExperiment = enabled(13366).GameCommunityAddServerEntryExperiment;
  enabled = GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildsBarCreateJoinButton" }).enabled;
  obj1 = enabled(589);
  const items = [closure_6];
  let stateFromStores = enabled;
  if (enabled) {
    stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId() === closure_8);
  }
  const items1 = [enabled];
  obj = { style: tmp.stretch, children: null };
  const memo = importAllResult.useMemo(() => ({
    onPress() {
      if (closure_0) {
        if (!obj.isAtGuildCapAndNonPremium()) {
          closure_1_1(closure_1_2[17])(closure_1_8);
        }
      }
      (function handleCreateJoinGuildPress() {
        const self = this;
        const apply = closure_14.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }), items1);
  obj = { selected: stateFromStores, circle: false, unread: false, styles: obj.useGuildsBarAnimatedWrapperStyles(), overState: "y", config: "never", label: "always", expandedChildren: "GuildProgress", children: "GUILD_PROGRESS_INITIALIZE" };
  obj[5] = memo;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const tmp8 = View;
  const intl = tmp2(1236).intl;
  obj[6] = intl.string(enabled(1236).t.l5WIbf);
  obj[7] = jsx(enabled(15944).HomeDrawerAddServerRowExpandedChildren, {});
  const colors = ThemesDefault.colors;
  obj1 = { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj[8] = jsx(enabled(9224).CirclePlusIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  obj[1] = jsx(UnreadIndicatorDefault, { selected: stateFromStores, circle: false, unread: false, styles: obj.useGuildsBarAnimatedWrapperStyles(), overState: "y", config: "never", label: "always", expandedChildren: "GuildProgress", children: "GUILD_PROGRESS_INITIALIZE" });
  return <tmp8 selected={stateFromStores} circle={false} unread={false} styles={obj.useGuildsBarAnimatedWrapperStyles()} overState="y" config="never" label="always" expandedChildren="GuildProgress">{"GUILD_PROGRESS_INITIALIZE"}</tmp8>;
});
let result = require("set").fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default memoResult;