// === Module 16489: useGuildsBarBadges ===

// Module 16489 (useGuildsBarBadges)
import native from "native" /* 1177 */;
import GuildJoinRequestUtils from "GuildJoinRequestUtils" /* 4463 */;
import computeGuildsBarCutoutDefault from "computeGuildsBarCutout" /* 16458 */;
import GuildsBarActivityIndicator from "GuildsBarActivityIndicator" /* 16494 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import GuildIncidentsStore from "GuildIncidentsStore" /* 10230 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 4462 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["guildActivityIndicatorSource"];
const Constants = fn(1074);
({ GuildFeatures: closure_12, Permissions: map1 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_15 = createStyles.createStyles({ topRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default function useGuildsBarBadges(arg0, mentionCount, isMentionLowImportance) {
  _require = arg0;
  const tmp = closure_15();
  importDefault = tmp;
  let items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const obj = require("initialize");
  const items1 = [cutoutTopRight, UserStore, cutout];
  const items2 = [arg0, stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
    if (stateFromStores) {
      const request = UserGuildJoinRequestStore.getRequest(closure_0);
      const currentUser = UserStore.getCurrentUser();
      if (null != currentUser) {
        if (null != request) {
          if (request.userId === currentUser.id) {
            const member = GuildMemberStore.getMember(closure_0, request.userId);
            if (null != member) {
              if (!member.isPending) {
                GuildJoinRequestUtils;
              }
            }
            return request.applicationStatus;
          }
        }
      }
    }
  }, items2);
  let obj2 = require("initialize");
  const items3 = [PermissionStore, GuildStore, memo];
  const items4 = [arg0];
  const stateFromStores2 = require("initialize").useStateFromStores(items3, () => {
    const guild = GuildStore.getGuild(closure_0);
    if (null != guild) {
      if (PermissionStore.can(constants2.MANAGE_GUILD, guild)) {
        const guildIncident = GuildIncidentsStore.getGuildIncident(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          const has = features.has;
          if (has != null) {
            hasItem = has(constants.INVITES_DISABLED);
          }
        }
        if (!hasItem) {
          let invitesDisabledUntil;
          if (guildIncident != null) {
            invitesDisabledUntil = guildIncident.invitesDisabledUntil;
          }
          let tmp10 = null != invitesDisabledUntil;
          if (tmp10) {
            const _Date = Date;
            const date = new Date(guildIncident.invitesDisabledUntil);
            const _Date2 = Date;
            const date1 = new Date();
            tmp10 = date > date1;
          }
          hasItem = tmp10;
        }
        return hasItem;
      }
    }
    return false;
  }, items4);
  const tmp5 = require("useGuildsBarGuildMediaState")(arg0);
  closure_3 = tmp5;
  let obj3 = require("initialize");
  const token = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
  let obj4 = require("useToken");
  const token1 = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const items5 = [tmp.topRightBadge, token1];
  memo = token1.useMemo(() => {
    const items = [topRightBadge.topRightBadge, { top: token1 - native.BADGE_PADDING }];
    return items;
  }, items5);
  const items6 = [tmp5, memo, token];
  const memo1 = token1.useMemo(() => {
    const mediaIcon = GuildsBarActivityIndicator.getMediaIcon(closure_3);
    let source;
    if (mediaIcon != null) {
      source = mediaIcon.source;
    }
    if (source == null) {
      source = null;
    }
    const obj2 = { guildActivityIndicatorSource: source, IconComponent: null, isCurrentUserConnected: null };
    let icon;
    if (mediaIcon != null) {
      icon = mediaIcon.icon;
    }
    obj2.IconComponent = icon;
    obj2.isCurrentUserConnected = closure_3.isCurrentUserConnected;
    const guildActivityIndicatorSource = obj2.guildActivityIndicatorSource;
    const tmp7 = _objectWithoutProperties(obj2, closure_3);
    let tmp8 = null;
    if (null != guildActivityIndicatorSource) {
      const obj3 = { style: memo, source: guildActivityIndicatorSource };
      const merged = Object.assign(tmp7);
      tmp8 = jsx(GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase, { style: memo, source: guildActivityIndicatorSource });
    }
    const obj4 = { badgeTopRight: tmp8, cutoutTopRight: null };
    let tmp14;
    if (null != guildActivityIndicatorSource) {
      const obj5 = { position: "top-right", containerSize: token };
      tmp14 = computeGuildsBarCutoutDefault(obj5);
    }
    obj4.cutoutTopRight = tmp14;
    return obj4;
  }, items6);
  cutoutTopRight = memo1.cutoutTopRight;
  let tmp10 = require("useGuildsBarBottomRightBadge")({ mentionCount, isMentionLowImportance, joinRequestState: stateFromStores1, shouldShowInvitesDisabled: stateFromStores2 });
  cutout = tmp10.cutout;
  const obj7 = { badgeTopRight: memo1.badgeTopRight, badgeBottomRight: tmp10.badge, cutouts: null, mediaState: tmp5 };
  const items7 = [cutoutTopRight, cutout];
  obj7.cutouts = token1.useMemo(() => {
    const items = [];
    if (null != cutoutTopRight) {
      items.push(tmp);
    }
    if (null != cutout) {
      items.push(tmp3);
    }
    return items;
  }, items7);
  return obj7;
};