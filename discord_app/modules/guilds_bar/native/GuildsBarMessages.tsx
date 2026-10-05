// === Module 16248: GuildsBarMessages ===

// Module 16248 (GuildsBarMessages)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ChatIcon from "ChatIcon" /* 5855 */;
import GuildsBarAnimatedItemWrapper from "GuildsBarAnimatedItemWrapper" /* 16234 */;
import useGuildsBarBottomRightBadgeDefault from "useGuildsBarBottomRightBadge" /* 16237 */;
import transitionGuildsBarToGuildOrOpenSelectedChannelDefault from "transitionGuildsBarToGuildOrOpenSelectedChannel" /* 16249 */;
import HomeDrawerDirectMessagesRowDefault from "HomeDrawerDirectMessagesRow" /* 16250 */;
import noop from "module_19" /* 19 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4699 */;

const GuildsBarAnimatedItemWrapperDefault = GuildsBarAnimatedItemWrapper;

require = fn;
const ME = fn(1085).ME;
const jsx = fn(21).jsx;
const config = {
  onPress() {
    transitionGuildsBarToGuildOrOpenSelectedChannelDefault(ME);
  }
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarMessages.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(13);
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function c() {
      guildId = guildId.getGuildId();
      let tmp2 = null == guildId;
      if (!tmp2) {
        tmp2 = guildId === ME;
      }
      return tmp2;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { mentionCount: 0 };
    cResult[2] = obj3;
    let tmp9 = obj3;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = initialize;
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault(tmp9));
  const colors = nativeDefault.colors;
  const tmp12 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.YUU0RF);
    cResult[3] = stringResult;
    let tmp13 = stringResult;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp17 = jsx(HomeDrawerDirectMessagesRowDefault, {});
    cResult[4] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] !== tmp12) {
    const obj4 = { color: tmp12 };
    const tmp20 = jsx(ChatIcon.ChatIcon, { color: tmp12 });
    cResult[5] = tmp12;
    cResult[6] = tmp20;
    let tmp18 = tmp20;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] === badge) {
    if (cResult[8] === cutouts) {
      if (cResult[9] === stateFromStores) {
        if (cResult[10] === guildsBarAnimatedWrapperStyles) {
          if (cResult[11] === tmp18) {
            let tmp21 = cResult[12];
          }
          return tmp21;
        }
      }
    }
  }
  const obj5 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: tmp13, externalChildren: badge, expandedChildren: tmp15, children: tmp18 };
  const tmp22 = jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: tmp13, externalChildren: badge, expandedChildren: tmp15, children: tmp18 });
  cResult[7] = badge;
  cResult[8] = cutouts;
  cResult[9] = stateFromStores;
  cResult[10] = guildsBarAnimatedWrapperStyles;
  cResult[11] = tmp18;
  cResult[12] = tmp22;
  tmp21 = tmp22;
  const tmp11 = useGuildsBarBottomRightBadgeDefault(tmp9);
}) : (() => {
  const guildsBarAnimatedWrapperStyles = GuildsBarAnimatedItemWrapper.useGuildsBarAnimatedWrapperStyles();
  const items = [SelectedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => {
    guildId = guildId.getGuildId();
    let tmp2 = null == guildId;
    if (!tmp2) {
      tmp2 = guildId === ME;
    }
    return tmp2;
  });
  ({ badge, cutouts } = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 }));
  const colors = nativeDefault.colors;
  const obj3 = { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", externalChildren: null, expandedChildren: "bottom", children: null };
  const tmp6 = useGuildsBarBottomRightBadgeDefault({ mentionCount: 0 });
  const tmp7 = stateFromStores ? colors.WHITE : colors.MOBILE_GUILDBAR_ICON_DEFAULT;
  const intl = util.intl;
  obj3.label = intl.string(util.t.YUU0RF);
  obj3.externalChildren = badge;
  obj3.expandedChildren = jsx(HomeDrawerDirectMessagesRowDefault, {});
  obj3.children = jsx(ChatIcon.ChatIcon, { color: tmp7 });
  return jsx(GuildsBarAnimatedItemWrapperDefault, { selected: stateFromStores, circle: false, unread: false, styles: guildsBarAnimatedWrapperStyles, cutouts, config, overState: "y", label: "CHANNEL_FOLLOWING_PUBLISH_BUMP_DISMISSED", externalChildren: null, expandedChildren: "bottom", children: null });
}));