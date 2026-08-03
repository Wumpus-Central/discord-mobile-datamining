import _objectWithoutProperties from "_objectWithoutProperties";
import computeGuildsBarCutout from "computeGuildsBarCutout";
import computeAlertSettings from "computeAlertSettings";
import handleGatewayJoinRequestUpdate from "handleGatewayJoinRequestUpdate";
import initialize from "initialize";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { jsx } from "set";
import createCacheKey from "createCacheKey";

let closure_14;
let map1;
const require = arg1;
let closure_3 = ["guildActivityIndicatorSource"];
({ GuildFeatures: map1, Permissions: closure_14 } = ME);
let closure_16 = createCacheKey.createStyles({ topRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" } });
const result = require("computeAlertSettings").fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default function useGuildsBarBadges(arg0, mentionCount, isMentionLowImportance) {
  const _require = arg0;
  const tmp = callback();
  const importDefault = tmp;
  let obj = _require(stateFromStores[12]);
  let items = [createGuildRecordFromRust];
  stateFromStores = obj.useStateFromStores(items, () => {
    const guild = outer1_10.getGuild(closure_0);
    let flag;
    if (guild != null) {
      const features = guild.features;
      flag = features.has(outer1_13.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  const items1 = [cutoutTopRight, mergeGuildAvatar, trackCommunicationDisabled];
  const items2 = [arg0, stateFromStores];
  const stateFromStores1 = _require(stateFromStores[12]).useStateFromStores(items1, () => {
    if (stateFromStores) {
      const request = cutoutTopRight.getRequest(callback);
      const currentUser = outer1_12.getCurrentUser();
      if (null != currentUser) {
        if (null != request) {
          if (request.userId === currentUser.id) {
            const member = outer1_9.getMember(tmp2, request.userId);
            if (null != member) {
              if (!member.isPending) {
                const obj = callback(stateFromStores[13]);
              }
            }
            return request.applicationStatus;
          }
        }
      }
      tmp2 = callback;
    }
  }, items2);
  let obj2 = _require(stateFromStores[12]);
  const items3 = [getUncachedChannelPermissions, createGuildRecordFromRust, memo];
  const items4 = [arg0];
  const stateFromStores2 = _require(stateFromStores[12]).useStateFromStores(items3, () => {
    const guild = outer1_10.getGuild(closure_0);
    if (null != guild) {
      if (outer1_11.can(outer1_14.MANAGE_GUILD, guild)) {
        const guildIncident = memo.getGuildIncident(closure_0);
        let hasItem;
        if (guild != null) {
          const features = guild.features;
          const has = features.has;
          if (has != null) {
            hasItem = has(outer1_13.INVITES_DISABLED);
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
  const tmp5 = importDefault(stateFromStores[14])(arg0);
  let closure_3 = tmp5;
  const obj3 = _require(stateFromStores[12]);
  const items5 = [cutout];
  const items6 = [arg0];
  const stateFromStores3 = _require(stateFromStores[12]).useStateFromStores(items5, () => cutout.getLurkingPreviewExpiry(closure_0), items6);
  const obj4 = _require(stateFromStores[12]);
  const token = _require(stateFromStores[15]).useToken(importDefault(stateFromStores[16]).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const obj5 = _require(stateFromStores[15]);
  const token1 = _require(stateFromStores[15]).useToken(importDefault(stateFromStores[16]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const items7 = [tmp.topRightBadge, token1];
  memo = token1.useMemo(() => {
    const items = [tmp.topRightBadge, { top: token1 - callback(stateFromStores[17]).BADGE_PADDING }];
    return items;
  }, items7);
  const items8 = [tmp5, memo, token];
  const memo1 = token1.useMemo(() => {
    let obj = callback(stateFromStores[18]);
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
    obj[1] = icon;
    obj[2] = closure_3.isCurrentUserConnected;
    const guildActivityIndicatorSource = obj.guildActivityIndicatorSource;
    const tmp7 = token(obj, closure_3);
    let tmp8 = null;
    if (null != guildActivityIndicatorSource) {
      obj = { style: null, source: null };
      obj[0] = memo;
      obj[1] = guildActivityIndicatorSource;
      const merged = Object.assign(tmp7);
      tmp8 = outer1_15(tmp(tmp2[18]).GuildsBarActivityIndicatorBase, obj);
    }
    const obj1 = { badgeTopRight: tmp8, cutoutTopRight: null };
    let tmp14;
    if (null != guildActivityIndicatorSource) {
      const obj2 = { position: "top-right", containerSize: null };
      obj2[1] = token;
      tmp14 = tmp(tmp2[19])(obj2);
    }
    obj1[1] = tmp14;
    return obj1;
  }, items8);
  cutoutTopRight = memo1.cutoutTopRight;
  obj = { mentionCount, isMentionLowImportance, joinRequestState: stateFromStores1, shouldShowInvitesDisabled: stateFromStores2, lurkerPreviewExpiresAt: stateFromStores3 };
  const tmp11 = importDefault(stateFromStores[20])(obj);
  cutout = tmp11.cutout;
  obj = {
    badgeTopRight: memo1.badgeTopRight,
    badgeBottomRight: tmp11.badge,
    cutouts: token1.useMemo(() => {
      const items = [];
      if (null != cutoutTopRight) {
        items.push(tmp);
      }
      if (null != cutout) {
        items.push(tmp3);
      }
      return items;
    }, items9),
    mediaState: tmp5
  };
  items9 = [cutoutTopRight, cutout];
  return obj;
};