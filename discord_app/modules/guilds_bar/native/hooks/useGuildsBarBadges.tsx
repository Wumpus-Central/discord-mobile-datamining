// discord_app/modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx
import native from "../../../../design/void/native.tsx";
import GuildJoinRequestUtils from "../../../guild_member_verification/GuildJoinRequestUtils.tsx";
import computeGuildsBarCutoutDefault from "../utils/computeGuildsBarCutout.tsx";
import GuildsBarActivityIndicator from "../GuildsBarActivityIndicator.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildIncidentsStore from "../../../guild_antiraid/GuildIncidentsStore.tsx";
import UserGuildJoinRequestStore from "../../../guild_member_verification/UserGuildJoinRequestStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
let closure_3 = ["guildActivityIndicatorSource"];
const Constants = fn(1074);
({ GuildFeatures: closure_12, Permissions: map1 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles({
  topRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default function useGuildsBarBadges(arg0, mentionCount, isMentionLowImportance) {
  _require = arg0;
  const tmp = closure_15();
  importDefault = tmp;
  let obj = require("initialize");
  let items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => {
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
  const items1 = [cutoutTopRight, UserStore, cutout];
  const items2 = [arg0, stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(
    items1,
    () => {
      if (stateFromStores) {
        const request = UserGuildJoinRequestStore.getRequest(closure_0);
        const currentUser = UserStore.getCurrentUser();
        if (null != currentUser) {
          if (null != request) {
            if (request.userId === currentUser.id) {
              const member = GuildMemberStore.getMember(tmp2, request.userId);
              if (null != member) {
              }
              return request.applicationStatus;
            }
          }
        }
        tmp2 = closure_0;
      }
    },
    items2,
  );
  let obj2 = require("initialize");
  const items3 = [PermissionStore, GuildStore, memo];
  const items4 = [arg0];
  const stateFromStores2 = require("initialize").useStateFromStores(
    items3,
    () => {
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
    },
    items4,
  );
  const tmp5 = require("useGuildsBarGuildMediaState")(arg0);
  closure_3 = tmp5;
  const obj3 = require("initialize");
  const token = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj4 = require("useToken");
  const token1 = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const items5 = [tmp.topRightBadge, token1];
  memo = token1.useMemo(() => {
    const items = [topRightBadge.topRightBadge, { top: token1 - native.BADGE_PADDING }];
    return items;
  }, items5);
  const items6 = [tmp5, memo, token];
  const memo1 = token1.useMemo(() => {
    let obj = GuildsBarActivityIndicator;
    const mediaIcon = obj.getMediaIcon(closure_3);
    let source;
    if (mediaIcon != null) {
      source = mediaIcon.source;
    }
    if (source == null) {
      source = null;
    }
    obj = { guildActivityIndicatorSource: source, IconComponent: null, isCurrentUserConnected: null };
    let icon;
    if (mediaIcon != null) {
      icon = mediaIcon.icon;
    }
    obj.IconComponent = icon;
    obj.isCurrentUserConnected = closure_3.isCurrentUserConnected;
    const guildActivityIndicatorSource = obj.guildActivityIndicatorSource;
    const tmp7 = _objectWithoutProperties(obj, closure_3);
    let tmp8 = null;
    if (null != guildActivityIndicatorSource) {
      obj = { style: memo, source: guildActivityIndicatorSource };
      const merged = Object.assign(tmp7);
      tmp8 = jsx(GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase, {
        style: memo,
        source: guildActivityIndicatorSource,
      });
    }
    const obj1 = { badgeTopRight: tmp8, cutoutTopRight: null };
    let tmp14;
    if (null != guildActivityIndicatorSource) {
      const obj2 = { position: "top-right", containerSize: token };
      tmp14 = computeGuildsBarCutoutDefault(obj2);
    }
    obj1.cutoutTopRight = tmp14;
    return obj1;
  }, items6);
  cutoutTopRight = memo1.cutoutTopRight;
  obj = {
    mentionCount,
    isMentionLowImportance,
    joinRequestState: stateFromStores1,
    shouldShowInvitesDisabled: stateFromStores2,
  };
  let tmp10 = require("useGuildsBarBottomRightBadge")(obj);
  cutout = tmp10.cutout;
  obj = { badgeTopRight: memo1.badgeTopRight, badgeBottomRight: tmp10.badge, cutouts: null, mediaState: tmp5 };
  const items7 = [cutoutTopRight, cutout];
  obj.cutouts = token1.useMemo(() => {
    const items = [];
    if (null != cutoutTopRight) {
      items.push(tmp);
    }
    if (null != cutout) {
      items.push(tmp3);
    }
    return items;
  }, items7);
  return obj;
}
