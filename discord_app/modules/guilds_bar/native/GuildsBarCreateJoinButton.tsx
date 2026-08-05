// discord_app/modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx
import jsxProd from "jsxProd";
import { View } from "CirclePlusIcon";
import ME from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "set";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { CirclePlusIcon } from "../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { HomeDrawerAddServerRowExpandedChildren } from "../../home_drawer/native/HomeDrawerAddServerRow.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { UnreadIndicator } from "GuildsBarAnimatedItemWrapper.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
function handleCreateJoinGuildPress() {
  const self = this;
  const apply = _handleCreateJoinGuildPress.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
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
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(c2[8])(c2[7], c2.paths);
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
            obj3[0] = lib(c2[8])(c2[9], c2.paths);
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
            obj = lib2(c2[11]);
            const obj5 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null, analyticsProperties: null };
            obj5[0] = constants3.GUILD_CAP;
            const obj6 = { page: null };
            obj6[0] = constants.CREATE_JOIN_GUILD_MODAL;
            obj5[1] = obj6;
            const items = [lib2(c2[12]).NEW_GUILD_BUTTON];
            obj5[2] = items;
            const obj7 = { type: null };
            obj7[0] = constants4.GUILD_CAP_MODAL_UPSELL;
            obj5[3] = obj7;
            const result = obj.handleShowUpsellAlert(obj5);
          } else {
            lib2.openCreateGuildModal();
          }
          c3 = 3;
          obj11 = lib(c2[10]);
        }
      } catch (tmp27) {
        c3 = tmp;
        throw tmp27;
      }
    }
  });
  const _handleCreateJoinGuildPress = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticsPages: c5, TooltipNames: closure_6, UpsellTypes: error } = ME);
let closure_10 = createCacheKey.createStyles({ stretch: { alignSelf: "stretch" } });
let closure_12 = { onPress: handleCreateJoinGuildPress };
const memoResult = require("set").memo(function GuildsBarCreateJoinButton() {
  const tmp = useIsMobileVisualRefreshExperimentEnabled("GuildsBarCreateJoinButton");
  let obj = UnreadIndicator /* UnreadIndicator */;
  obj = { style: callback2().stretch, children: null };
  const tmp2 = callback2();
  obj = { selected: false, circle: !tmp, unread: false, styles: obj.useGuildsBarAnimatedWrapperStyles(), overState: "y", config: 2010, label: null, expandedChildren: null, children: false };
  obj[5] = closure_12;
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[6] = intl.string(getSystemLocale /* getSystemLocale */.t.l5WIbf);
  obj[7] = jsx(HomeDrawerAddServerRowExpandedChildren /* HomeDrawerAddServerRowExpandedChildren */.HomeDrawerAddServerRowExpandedChildren, {});
  const obj1 = { size: "md", color: null };
  obj1[1] = Themes.colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  obj[8] = jsx(CirclePlusIcon /* CirclePlusIcon */.CirclePlusIcon, { size: "md", color: null });
  obj[1] = jsx(UnreadIndicator, { selected: false, circle: !tmp, unread: false, styles: obj.useGuildsBarAnimatedWrapperStyles(), overState: "y", config: 2010, label: null, expandedChildren: null, children: false });
  return <View selected={false} circle={!tmp} unread={false} styles={obj.useGuildsBarAnimatedWrapperStyles()} overState="y" config={2010} label={null} expandedChildren={null}>{false}</View>;
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default memoResult;
export { handleCreateJoinGuildPress };