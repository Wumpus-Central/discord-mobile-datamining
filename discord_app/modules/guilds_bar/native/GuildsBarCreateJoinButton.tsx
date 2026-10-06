// === Module 16333: GuildsBarCreateJoinButton ===

// Module 16333 (GuildsBarCreateJoinButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import GuildCapUpsellHooks from "GuildCapUpsellHooks" /* 6718 */;
import GuildsBarAnimatedItemWrapperDefault from "GuildsBarAnimatedItemWrapper" /* 16274 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16289 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4705 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
function handleCreateJoinGuildPress() {
  return obj(...arguments);
}
let obj = function _handleCreateJoinGuildPress() {
  let paths;
  obj = _asyncToGenerator(async () => {
    let closure_0;
    let items;
    let obj8;
    let obj9;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let tmp;
        let closure_1;
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
            tmp = undefined;
            closure_1 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: require("asyncRequire")(paths[8], paths.paths), done: false };
            return obj4;
          }
        } else if (1 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            tmp = value.default;
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
          closure_1 = value.default;
          tmp.acknowledgeTooltip(closure_129_9.GUILD_TOOLTIP);
          const obj10 = closure_129_0(closure_129_2[11]);
          if (obj10.isAtGuildCapAndNonPremium()) {
            obj = { initialUpsellKey: closure_129_10.GUILD_CAP, analyticsLocation: obj8, analyticsLocations: items, analyticsProperties: obj9 };
            obj8 = { page: closure_129_7.CREATE_JOIN_GUILD_MODAL };
            const handleShowUpsellAlert = closure_129_1(closure_129_2[12]).handleShowUpsellAlert;
            items = [];
            const tmp11 = closure_129_1(closure_129_2[12]);
            items[0] = closure_129_1(closure_129_2[13]).NEW_GUILD_BUTTON;
            obj9 = { type: closure_129_11.GUILD_CAP_MODAL_UPSELL };
            const result = handleShowUpsellAlert(obj);
          } else {
            closure_1.openCreateGuildModal();
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp27) {
        c3 = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
};
const View = react_native.View;
({ AnalyticsPages: metroImportDefault, MOBILE_GUILD_UPSELL_LIST: metroImportAll, TooltipNames: c9, UpsellTypes: c10 } = Constants);
const PremiumUpsellTypes = PremiumConstants.PremiumUpsellTypes;
const jsx = Fragment.jsx;
let closure_13 = createStyles.createStyles({ stretch: { alignSelf: "stretch" } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let MOBILE_GUILDBAR_ICON_DEFAULT;
  let enabled;
  let first;
  let guildId;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp18;
  let tmp19;
  let tmp7;
  let tmp8;
  obj = enabled(576);
  const cResult = obj.c(17);
  const tmp4 = closure_13();
  const obj2 = enabled(16274);
  const guildsBarAnimatedWrapperStyles = obj2.useGuildsBarAnimatedWrapperStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { location: "GuildsBarCreateJoinButton" };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const GameCommunityAddServerEntryExperiment = tmp(13543).GameCommunityAddServerEntryExperiment;
  enabled = GameCommunityAddServerEntryExperiment.useConfig(first).enabled;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function _() {
      return guildId.getGuildId() === closure_1_8;
    };
    cResult[1] = items;
    cResult[2] = fn;
    tmp8 = fn;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
    tmp8 = cResult[2];
  }
  const tmpResult = enabled(504);
  const tmp10 = enabled && tmpResult.useStateFromStores(tmp7, tmp8);
  if (cResult[3] !== enabled) {
    const obj4 = {
      onPress() {
          if (enabled) {
            obj = GuildCapUpsellHooks;
            if (!obj.isAtGuildCapAndNonPremium()) {
              transitionGuildsBarToGuildOrOpenSelectedChannelDefault(metroImportAll);
            }
          }
          handleCreateJoinGuildPress();
        }
    };
    cResult[3] = enabled;
    cResult[4] = obj4;
    tmp11 = obj4;
  } else {
    tmp11 = cResult[4];
  }
  const stretch = tmp4.stretch;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(enabled(1126).t.l5WIbf);
    const tmp16 = jsx(enabled(16334).HomeDrawerAddServerRowExpandedChildren, {});
    cResult[5] = stringResult;
    cResult[6] = tmp16;
    tmp13 = tmp16;
    tmp12 = stringResult;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const colors = nativeDefault.colors;
  if (tmp10) {
    MOBILE_GUILDBAR_ICON_DEFAULT = colors.WHITE;
    tmp18 = importDefault;
  } else {
    MOBILE_GUILDBAR_ICON_DEFAULT = colors.MOBILE_GUILDBAR_ICON_DEFAULT;
    tmp18 = importDefault;
  }
  if (cResult[7] !== MOBILE_GUILDBAR_ICON_DEFAULT) {
    const tmp21 = jsx(enabled(10996).CirclePlusIcon, { size: "md", color: MOBILE_GUILDBAR_ICON_DEFAULT });
    cResult[7] = MOBILE_GUILDBAR_ICON_DEFAULT;
    cResult[8] = tmp21;
    tmp19 = tmp21;
  } else {
    tmp19 = cResult[8];
  }
  if (cResult[9] === tmp11) {
    if (cResult[10] === tmp10) {
      if (cResult[11] === tmp19) {
        let tmp22;
        if (cResult[12] === guildsBarAnimatedWrapperStyles) {
          tmp22 = cResult[13];
        }
        if (cResult[14] === tmp4.stretch) {
          let tmp24;
          if (cResult[15] === tmp22) {
            tmp24 = cResult[16];
          }
          return tmp24;
        }
        const tmp27 = <View style={stretch}>{tmp22}</View>;
        cResult[14] = tmp4.stretch;
        cResult[15] = tmp22;
        cResult[16] = tmp27;
        tmp24 = tmp27;
      }
    }
  }
  const tmp23 = jsx(tmp18(16274), { selected: tmp10, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: tmp11, label: tmp12, expandedChildren: tmp13, children: tmp19 });
  cResult[9] = tmp11;
  cResult[10] = tmp10;
  cResult[11] = tmp19;
  cResult[12] = guildsBarAnimatedWrapperStyles;
  cResult[13] = tmp23;
  tmp22 = tmp23;
}) : (() => {
  let enabled;
  let guildId;
  let intl;
  const tmp = closure_13();
  obj = enabled(16274);
  const guildsBarAnimatedWrapperStyles = obj.useGuildsBarAnimatedWrapperStyles();
  const GameCommunityAddServerEntryExperiment = enabled(13543).GameCommunityAddServerEntryExperiment;
  enabled = GameCommunityAddServerEntryExperiment.useConfig({ location: "GuildsBarCreateJoinButton" }).enabled;
  const items = [SelectedGuildStore];
  const obj2 = enabled(504);
  const tmp5 = enabled && obj2.useStateFromStores(items, () => guildId.getGuildId() === closure_1_8);
  const items1 = [enabled];
  const memo = react.useMemo(() => {
    obj = {
      onPress() {
        if (closure_1_0) {
          obj = enabled(dependencyMap[11]);
          if (!obj.isAtGuildCapAndNonPremium()) {
            transitionGuildsBarToGuildOrOpenSelectedChannelDefault(closure_2_8);
          }
        }
        handleCreateJoinGuildPress();
      }
    };
    return obj;
  }, items1);
  ({ selected: tmp5, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, overState: "y", config: memo, label: intl.string(enabled(1126).t.l5WIbf), expandedChildren: "binary", children: "prefault" });
  GuildsBarAnimatedItemWrapperDefault;
  intl = tmp2(1126).intl;
  const CirclePlusIcon = tmp2(10996).CirclePlusIcon;
  const colors = nativeDefault.colors;
  return <View style={tmp.stretch}>{null}</View>;
}));
let result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx");

export default memoResult;