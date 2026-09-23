// === Module 16755: GuildsBarCreateJoinButton ===

// Module 16755 (GuildsBarCreateJoinButton)
import nativeDefault from "native" /* 576 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16696 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16711 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4648 */;

const require = fn;
let closure_14 = async function _handleCreateJoinGuildPress() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: require("asyncRequireImpl")(paths[8], paths.paths), done: false };
          return obj4;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_0 = value.default;
          c2 = 2;
          c3 = 1;
          const obj6 = { value: closure_129_0(closure_129_2[9])(closure_129_2[10], closure_129_2.paths), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_128_1 = value.default;
        closure_128_0.acknowledgeTooltip(closure_129_9.GUILD_TOOLTIP);
        if (obj11.isAtGuildCapAndNonPremium()) {
          const obj8 = { initialUpsellKey: closure_129_10.GUILD_CAP, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
          const obj9 = { page: closure_129_7.CREATE_JOIN_GUILD_MODAL };
          obj8.analyticsLocation = obj9;
          const items = [closure_129_1(closure_129_2[13]).NEW_GUILD_BUTTON];
          obj8.analyticsLocations = items;
          const obj10 = { type: closure_129_11.GUILD_CAP_MODAL_UPSELL };
          obj8.analyticsProperties = obj10;
          const result = closure_129_1(closure_129_2[12]).handleShowUpsellAlert(obj8);
          const obj = closure_129_1(closure_129_2[12]);
        } else {
          closure_128_1.openCreateGuildModal();
        }
        c3 = 3;
        obj11 = closure_129_0(closure_129_2[11]);
      }
    } catch (tmp27) {
      c3 = tmp;
      throw tmp27;
    }
  }
};
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticsPages: closure_7, MOBILE_GUILD_UPSELL_LIST: closure_8, TooltipNames: closure_9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = fn(1374).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let closure_13 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default noop.memo(function GuildsBarCreateJoinButton() {
  const tmp = closure_13();
  let obj = enabled(16696);
  const GameCommunityAddServerEntryExperiment = enabled(14073).GameCommunityAddServerEntryExperiment;
  enabled = GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildsBarCreateJoinButton" }).enabled;
  const guildsBarAnimatedWrapperStyles = enabled(16696).useGuildsBarAnimatedWrapperStyles();
  const items = [SelectedGuildStore];
  let stateFromStores = enabled;
  if (enabled) {
    stateFromStores = obj2.useStateFromStores(items, () => guildId.getGuildId() === closure_1_8);
  }
  const items1 = [enabled];
  const obj3 = { style: tmp.stretch, children: null };
  const memo = noop.useMemo(() => ({
    onPress() {
      if (closure_1_0) {
        if (!obj.isAtGuildCapAndNonPremium()) {
          transitionGuildsBarToGuildOrOpenSelectedChannelDefault(closure_2_8);
        }
        obj = enabled(dependencyMap[11]);
      }
      (function handleCreateJoinGuildPress() {
        const self = this;
        const apply = closure_1_14.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }), items1);
  const obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: null, expandedChildren: "heading-lg/bold", children: null };
  obj2 = enabled(504);
  const intl = tmp2(1115).intl;
  obj4.label = intl.string(enabled(1115).t.l5WIbf);
  obj4.expandedChildren = jsx(enabled(16756).HomeDrawerAddServerRowExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj4.children = jsx(enabled(11550).CirclePlusIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  obj3.children = jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: null, expandedChildren: "heading-lg/bold", children: null });
  return <View style={tmp.stretch}>{null}</View>;
});