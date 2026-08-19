// discord_app/modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/00019_noop.js";
import computeAlertSettings from "../../../guild_antiraid/GuildIncidentsStore.tsx";
import handleGatewayJoinRequestUpdate from "../../../guild_member_verification/UserGuildJoinRequestStore.tsx";
import trackCommunicationDisabled from "../../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import getUncachedChannelPermissions from "../../../../stores/PermissionStore.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let closure_3 = ["guildActivityIndicatorSource"];
({ GuildFeatures: closure_12, Permissions: map1 } = ME);
let closure_15 = createCacheKey.createStyles({ topRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const result = require("obj132").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default function useGuildsBarBadges(arg0, mentionCount, isMentionLowImportance) {
  const _require = arg0;
  const tmp = callback();
  importDefault = tmp;
  let obj = _require(stateFromStores[11]);
  let items = [closure_9];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = closure_1_9.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(closure_1_12.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [cutoutTopRight, closure_11, cutout];
  const items2 = [arg0, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[11]).useStateFromStores(items1, () => {
    if (stateFromStores) {
      const request = cutoutTopRight.getRequest(callback);
      const currentUser = closure_1_11.getCurrentUser();
      if (null != currentUser) {
        if (null != request) {
          if (request.userId === currentUser.id) {
            const member = cutout.getMember(callback, request.userId);
            if (null != member) {
              if (!member.isPending) {
                callback(stateFromStores[12]);
              }
            }
            return request.applicationStatus;
          }
        }
      }
    }
  }, items2);
  let obj2 = _require(stateFromStores[11]);
  const items3 = [closure_10, closure_9, memo];
  const items4 = [arg0];
  const stateFromStores2 = _require(stateFromStores[11]).useStateFromStores(items3, () => {
    const guild = closure_1_9.getGuild(closure_0);
    if (null != guild) {
      if (closure_1_10.can(closure_1_13.MANAGE_GUILD, guild)) {
        const guildIncident = memo.getGuildIncident(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          const has = features.has;
          if (has != null) {
            hasItem = has(closure_1_12.INVITES_DISABLED);
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
  const tmp5 = importDefault(stateFromStores[13])(arg0);
  closure_3 = tmp5;
  const obj3 = _require(stateFromStores[11]);
  const token = _require(stateFromStores[14]).useToken(importDefault(stateFromStores[15]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj4 = _require(stateFromStores[14]);
  const token1 = _require(stateFromStores[14]).useToken(importDefault(stateFromStores[15]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const items5 = [tmp.topRightBadge, token1];
  memo = token1.useMemo(() => {
    const items = [lib.topRightBadge, { top: token1 - callback(stateFromStores[16]).BADGE_PADDING }];
    return items;
  }, items5);
  const items6 = [tmp5, memo, token];
  const memo1 = token1.useMemo(() => {
    let obj = callback(stateFromStores[17]);
    const mediaIcon = obj.getMediaIcon(obj);
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
    obj[1] = icon;
    obj[2] = obj.isCurrentUserConnected;
    const guildActivityIndicatorSource = obj.guildActivityIndicatorSource;
    const tmp7 = token(obj, obj);
    let tmp8 = null;
    if (null != guildActivityIndicatorSource) {
      obj = { style: null, source: null };
      obj[0] = memo;
      obj[1] = guildActivityIndicatorSource;
      const merged = Object.assign(tmp7);
      tmp8 = jsx(callback(stateFromStores[17]).GuildsBarActivityIndicatorBase, { style: null, source: null });
    }
    obj1 = { badgeTopRight: tmp8, cutoutTopRight: null };
    let tmp14;
    if (null != guildActivityIndicatorSource) {
      const obj2 = { position: "top-right", containerSize: null };
      obj2[1] = token;
      tmp14 = lib(stateFromStores[18])(obj2);
    }
    obj1[1] = tmp14;
    return obj1;
  }, items6);
  cutoutTopRight = memo1.cutoutTopRight;
  obj = { mentionCount, isMentionLowImportance, joinRequestState: stateFromStores1, shouldShowInvitesDisabled: stateFromStores2 };
  let tmp10 = importDefault(stateFromStores[19])(obj);
  cutout = tmp10.cutout;
  obj = {
    badgeTopRight: memo1.badgeTopRight,
    badgeBottomRight: tmp10.badge,
    cutouts: token1.useMemo(() => {
      const items = [];
      if (null != cutoutTopRight) {
        items.push(tmp);
      }
      if (null != cutout) {
        items.push(tmp3);
      }
      return items;
    }, items7),
    mediaState: tmp5
  };
  items7 = [cutoutTopRight, cutout];
  return obj;
};