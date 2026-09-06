// === Module 16352: GuildsBarCreateJoinButton ===

// Module 16352 (GuildsBarCreateJoinButton)
import nativeDefault from "native" /* 576 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16294 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16308 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4381 */;

const require = fn;
let closure_14 = async function _handleCreateJoinGuildPress(arg0, value) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[8], paths.paths), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_128_0 = value.default;
          c2 = 2;
          c3 = 1;
          const obj3 = { value: closure_129_0(closure_129_2[9])(closure_129_2[10], closure_129_2.paths), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        closure_128_1 = value.default;
        closure_128_0.acknowledgeTooltip(closure_129_9.GUILD_TOOLTIP);
        if (obj11.isAtGuildCapAndNonPremium()) {
          obj = closure_129_1(closure_129_2[12]);
          const obj5 = { initialUpsellKey: closure_129_10.GUILD_CAP, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
          const obj6 = { page: closure_129_7.CREATE_JOIN_GUILD_MODAL };
          obj5.analyticsLocation = obj6;
          const items = [closure_129_1(closure_129_2[13]).NEW_GUILD_BUTTON];
          obj5.analyticsLocations = items;
          const obj7 = { type: closure_129_11.GUILD_CAP_MODAL_UPSELL };
          obj5.analyticsProperties = obj7;
          const result = obj.handleShowUpsellAlert(obj5);
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
const PremiumUpsellTypes = fn(1373).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_13 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default noop.memo(function GuildsBarCreateJoinButton() {
  let obj = enabled(16294);
  const tmp = closure_13();
  const GameCommunityAddServerEntryExperiment = enabled(13714).GameCommunityAddServerEntryExperiment;
  enabled = GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildsBarCreateJoinButton" }).enabled;
  let obj1 = enabled(504);
  const items = [SelectedGuildStore];
  let stateFromStores = enabled;
  if (enabled) {
    stateFromStores = obj1.useStateFromStores(items, () => guildId.getGuildId() === closure_1_8);
  }
  const items1 = [enabled];
  obj = { style: tmp.stretch, children: null };
  const memo = noop.useMemo(() => ({
    onPress() {
      if (enabled) {
        if (!obj.isAtGuildCapAndNonPremium()) {
          transitionGuildsBarToGuildOrOpenSelectedChannelDefault(closure_2_8);
        }
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
  obj = { selected: stateFromStores, circle: false, unread: false, styles: obj.useGuildsBarAnimatedWrapperStyles(), overState: "y", config: memo, label: null, expandedChildren: "guilds-bar-drag-preview", children: null };
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const intl = tmp2(1114).intl;
  obj.label = intl.string(enabled(1114).t.l5WIbf);
  obj.expandedChildren = jsx(enabled(16353).HomeDrawerAddServerRowExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj1 = { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT };
  obj.children = jsx(enabled(11204).CirclePlusIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  obj.children = jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: obj.useGuildsBarAnimatedWrapperStyles(), overState: "y", config: memo, label: null, expandedChildren: "guilds-bar-drag-preview", children: null });
  return <tmp8 selected={stateFromStores} circle={false} unread={false} styles={obj.useGuildsBarAnimatedWrapperStyles()} overState="y" config={memo} label={null} expandedChildren="guilds-bar-drag-preview">{null}</tmp8>;
});