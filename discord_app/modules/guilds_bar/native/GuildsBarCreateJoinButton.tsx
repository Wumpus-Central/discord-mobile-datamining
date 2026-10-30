// === Module 18368: GuildsBarCreateJoinButton ===

// Module 18368 (GuildsBarCreateJoinButton)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import CirclePlusIcon from "CirclePlusIcon" /* 11454 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 18314 */;
import HomeDrawerAddServerRow from "HomeDrawerAddServerRow" /* 18369 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5040 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
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
const Constants = fn(1072);
({ AnalyticsPages: closure_7, MOBILE_GUILD_UPSELL_LIST: closure_8, TooltipNames: closure_9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = fn(1386).PremiumUpsellTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_13 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default noop.memo(function GuildsBarCreateJoinButton() {
  const tmp = closure_13();
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  const items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => guildId.getGuildId() === closure_1_8);
  const obj3 = { style: tmp.stretch, children: null };
  const memo = noop.useMemo(() => ({
    onPress() {
      if (obj.isAtGuildCapAndNonPremium()) {
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
      } else {
        closure_1_1(dependencyMap[16])(closure_1_8);
      }
      obj = closure_1_0(dependencyMap[11]);
    }
  }), []);
  const obj4 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: -35.191, expandedChildren: -1892548606, children: 1546188226 };
  const intl = util.intl;
  obj4.label = intl.string(util.t.l5WIbf);
  obj4.expandedChildren = jsx(HomeDrawerAddServerRow.HomeDrawerAddServerRowExpandedChildren, {});
  const colors = nativeDefault.colors;
  obj4.children = jsx(CirclePlusIcon.CirclePlusIcon, { size: "md", color: stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT });
  obj3.children = jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: -35.191, expandedChildren: -1892548606, children: 1546188226 });
  return <View style={tmp.stretch}>{null}</View>;
});