// === Module 16716: GuildsBarCreateJoinButton ===

// Module 16716 (GuildsBarCreateJoinButton)
import nativeDefault from "native" /* 587 */;
import GuildCapUpsellHooks from "GuildCapUpsellHooks" /* 6901 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16657 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16672 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4900 */;

require = fn;
function handleCreateJoinGuildPress() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _handleCreateJoinGuildPress() {
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
      return { value: "IconComponent", done: null };
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
const Constants = fn(1085);
({ AnalyticsPages: closure_7, MOBILE_GUILD_UPSELL_LIST: closure_8, TooltipNames: closure_9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = fn(1392).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_13 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarCreateJoinButton() {
  const cResult = enabled(576).c(17);
  const tmp4 = closure_13();
  let obj = enabled(576);
  const guildsBarAnimatedWrapperStyles = enabled(16657).useGuildsBarAnimatedWrapperStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "GuildsBarCreateJoinButton" };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const GameCommunityAddServerEntryExperiment = tmp(13933).GameCommunityAddServerEntryExperiment;
  enabled = GameCommunityAddServerEntryExperiment.useConfig(first).enabled;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function _() {
      return guildId.getGuildId() === closure_1_8;
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp8 = fn;
    let tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const obj2 = enabled(16657);
  let stateFromStores = enabled;
  if (enabled) {
    stateFromStores = tmpResult.useStateFromStores(tmp7, tmp8);
  }
  if (cResult[3] !== enabled) {
    const obj4 = {
      onPress() {
          if (enabled) {
            if (!obj.isAtGuildCapAndNonPremium()) {
              transitionGuildsBarToGuildOrOpenSelectedChannelDefault(closure_2_8);
            }
            obj = GuildCapUpsellHooks;
          }
          handleCreateJoinGuildPress();
        }
    };
    cResult[3] = enabled;
    cResult[4] = obj4;
    let tmp11 = obj4;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.l5WIbf);
    const tmp16 = jsx(tmp(16717).HomeDrawerAddServerRowExpandedChildren, {});
    cResult[5] = stringResult;
    cResult[6] = tmp16;
    let tmp13 = tmp16;
    let tmp12 = stringResult;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const colors = nativeDefault.colors;
  if (stateFromStores) {
    let MOBILE_GUILDBAR_ICON_DEFAULT = colors.WHITE;
    let tmp18 = importDefault;
  } else {
    MOBILE_GUILDBAR_ICON_DEFAULT = colors.MOBILE_GUILDBAR_ICON_DEFAULT;
    tmp18 = importDefault;
  }
  if (cResult[7] !== MOBILE_GUILDBAR_ICON_DEFAULT) {
    const obj5 = { size: "md", color: MOBILE_GUILDBAR_ICON_DEFAULT };
    const tmp21 = jsx(tmp(10575).CirclePlusIcon, { size: "md", color: MOBILE_GUILDBAR_ICON_DEFAULT });
    cResult[7] = MOBILE_GUILDBAR_ICON_DEFAULT;
    cResult[8] = tmp21;
    let tmp19 = tmp21;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] === tmp11) {
    if (cResult[10] === stateFromStores) {
      if (cResult[11] === tmp19) {
        if (cResult[12] === guildsBarAnimatedWrapperStyles) {
          let tmp22 = cResult[13];
        }
        if (cResult[14] === tmp4.stretch) {
          if (cResult[15] === tmp22) {
            let tmp24 = cResult[16];
          }
          return tmp24;
        }
        const obj6 = { style: tmp4.stretch, children: tmp22 };
        const tmp27 = <View style={tmp4.stretch}>{tmp22}</View>;
        cResult[14] = tmp4.stretch;
        cResult[15] = tmp22;
        cResult[16] = tmp27;
        tmp24 = tmp27;
      }
    }
  }
  const obj7 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: tmp11, label: tmp12, expandedChildren: tmp13, children: tmp19 };
  const tmp23 = jsx(tmp18(16657), { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: tmp11, label: tmp12, expandedChildren: tmp13, children: tmp19 });
  cResult[9] = tmp11;
  cResult[10] = stateFromStores;
  cResult[11] = tmp19;
  cResult[12] = guildsBarAnimatedWrapperStyles;
  cResult[13] = tmp23;
  tmp22 = tmp23;
  tmpResult = enabled(504);
}) : (function GuildsBarCreateJoinButton() {
  const tmp = closure_13();
  let obj = enabled(16657);
  const GameCommunityAddServerEntryExperiment = enabled(13933).GameCommunityAddServerEntryExperiment;
  enabled = GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildsBarCreateJoinButton" }).enabled;
  const guildsBarAnimatedWrapperStyles = enabled(16657).useGuildsBarAnimatedWrapperStyles();
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
      handleCreateJoinGuildPress();
    }
  }), items1);
  const obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: "a", expandedChildren: "DesV7/", children: "r" };
  obj2 = enabled(504);
  const intl = tmp2(1126).intl;
  obj4.label = intl.string(enabled(1126).t.l5WIbf);
  obj4.expandedChildren = jsx(enabled(16717).HomeDrawerAddServerRowExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj4.children = jsx(enabled(10575).CirclePlusIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  obj3.children = jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: "a", expandedChildren: "DesV7/", children: "r" });
  return <View style={tmp.stretch}>{null}</View>;
}));