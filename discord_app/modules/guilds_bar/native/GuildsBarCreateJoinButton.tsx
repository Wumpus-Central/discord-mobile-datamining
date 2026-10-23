// === Module 17716: GuildsBarCreateJoinButton ===

// Module 17716 (GuildsBarCreateJoinButton)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import GuildCapUpsellHooks from "GuildCapUpsellHooks" /* 7292 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11129 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 17662 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 17677 */;
import HomeDrawerAddServerRow from "HomeDrawerAddServerRow" /* 17717 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4995 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

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
const Constants = fn(1087);
({ AnalyticsPages: closure_7, MOBILE_GUILD_UPSELL_LIST: closure_8, TooltipNames: closure_9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = fn(1394).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(4969);
let closure_13 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GuildsBarCreateJoinButton() {
  const cResult = c.c(14);
  const tmp4 = closure_13();
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function l() {
      return guildId.getGuildId() === closure_1_8;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = {
      onPress() {
          if (obj.isAtGuildCapAndNonPremium()) {
            handleCreateJoinGuildPress();
          } else {
            transitionGuildsBarToGuildOrOpenSelectedChannelDefault(closure_1_8);
          }
          obj = GuildCapUpsellHooks;
        }
    };
    cResult[2] = obj3;
    let tmp10 = obj3;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.l5WIbf);
    const tmp15 = jsx(HomeDrawerAddServerRow.HomeDrawerAddServerRowExpandedChildren, {});
    cResult[3] = stringResult;
    cResult[4] = tmp15;
    let tmp12 = tmp15;
    let tmp11 = stringResult;
  } else {
    tmp11 = cResult[3];
    tmp12 = cResult[4];
  }
  const colors = nativeDefault.colors;
  if (stateFromStores) {
    let MOBILE_GUILDBAR_ICON_DEFAULT = colors.WHITE;
    let tmp17 = importDefault;
  } else {
    MOBILE_GUILDBAR_ICON_DEFAULT = colors.MOBILE_GUILDBAR_ICON_DEFAULT;
    tmp17 = importDefault;
  }
  if (cResult[5] !== MOBILE_GUILDBAR_ICON_DEFAULT) {
    const obj4 = { size: "md", color: MOBILE_GUILDBAR_ICON_DEFAULT };
    const tmp20 = jsx(CirclePlusIcon.CirclePlusIcon, { size: "md", color: MOBILE_GUILDBAR_ICON_DEFAULT });
    cResult[5] = MOBILE_GUILDBAR_ICON_DEFAULT;
    cResult[6] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === tmp18) {
      if (cResult[9] === guildsBarAnimatedWrapperStyles) {
        let tmp21 = cResult[10];
      }
      if (cResult[11] === tmp4.stretch) {
        if (cResult[12] === tmp21) {
          let tmp23 = cResult[13];
        }
        return tmp23;
      }
      const obj5 = { style: tmp4.stretch, children: tmp21 };
      const tmp26 = <View style={tmp4.stretch}>{tmp21}</View>;
      cResult[11] = tmp4.stretch;
      cResult[12] = tmp21;
      cResult[13] = tmp26;
      tmp23 = tmp26;
    }
  }
  const obj6 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: tmp10, label: tmp11, expandedChildren: tmp12, children: tmp18 };
  const tmp22 = jsx(tmp17(17662), { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: tmp10, label: tmp11, expandedChildren: tmp12, children: tmp18 });
  cResult[7] = stateFromStores;
  cResult[8] = tmp18;
  cResult[9] = guildsBarAnimatedWrapperStyles;
  cResult[10] = tmp22;
  tmp21 = tmp22;
  const tmpResult = initialize;
}) : (function GuildsBarCreateJoinButton() {
  const tmp = closure_13();
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  const items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId() === closure_1_8);
  const obj3 = { style: tmp.stretch, children: null };
  const memo = noop.useMemo(() => ({
    onPress() {
      if (obj.isAtGuildCapAndNonPremium()) {
        closure_1_14();
      } else {
        closure_1_1(dependencyMap[18])(closure_1_8);
      }
      obj = closure_1_0(dependencyMap[11]);
    }
  }), []);
  const obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: 4, expandedChildren: "a_6", children: null };
  const intl = util.intl;
  obj4.label = intl.string(util.t.l5WIbf);
  obj4.expandedChildren = jsx(HomeDrawerAddServerRow.HomeDrawerAddServerRowExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj4.children = jsx(CirclePlusIcon.CirclePlusIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  obj3.children = jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: 4, expandedChildren: "a_6", children: null });
  return <View style={tmp.stretch}>{null}</View>;
}));