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

const require = globalThis.__r;

require = fn;
let closure_3 = ["guildActivityIndicatorSource"];
let closure_4 = ["guildActivityIndicatorSource"];
const Constants = fn(1085);
({ GuildFeatures: map1, Permissions: closure_14 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_16 = createStyles.createStyles({
  topRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildsBarBadges(arg0, arg1, arg2) {
      _require = arg0;
      const cResult = require("c").c(47);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class B {
          constructor() {
            guild = closure_10.getGuild(closure_0);
            flag = undefined;
            if (guild != null) {
              features = guild.features;
              tmp2 = GuildFeatures;
              flag = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
        cResult[1] = arg0;
        cResult[2] = B;
      } else {
        class B {
          constructor() {
            guild = closure_10.getGuild(closure_0);
            flag = undefined;
            if (guild != null) {
              features = guild.features;
              tmp2 = GuildFeatures;
              flag = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, B);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            guild = closure_10.getGuild(closure_0);
            flag = undefined;
            if (guild != null) {
              features = guild.features;
              tmp2 = GuildFeatures;
              flag = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
        const items1 = [UserGuildJoinRequestStore, UserStore, GuildMemberStore];
        cResult[3] = items1;
        const tmp9 = items1;
      } else {
        class B {
          constructor() {
            guild = closure_10.getGuild(closure_0);
            flag = undefined;
            if (guild != null) {
              features = guild.features;
              tmp2 = GuildFeatures;
              flag = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
      }
      if (cResult[4] === arg0) {
        class B {
          constructor() {
            guild = closure_10.getGuild(closure_0);
            flag = undefined;
            if (guild != null) {
              features = guild.features;
              tmp2 = GuildFeatures;
              flag = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
            }
            if (flag == null) {
              flag = false;
            }
            return flag;
          }
        }
        const stateFromStores1 = tmp(504).useStateFromStores(tmp9, C, items5);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor() {
              guild = closure_10.getGuild(closure_0);
              flag = undefined;
              if (guild != null) {
                features = guild.features;
                tmp2 = GuildFeatures;
                flag = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
          const items2 = [PermissionStore, GuildStore, GuildIncidentsStore];
          cResult[8] = items2;
          const tmp13 = items2;
        } else {
          class B {
            constructor() {
              guild = closure_10.getGuild(closure_0);
              flag = undefined;
              if (guild != null) {
                features = guild.features;
                tmp2 = GuildFeatures;
                flag = features.has(GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL);
              }
              if (flag == null) {
                flag = false;
              }
              return flag;
            }
          }
        }
        if (cResult[9] !== arg0) {
          class U {
            constructor() {
              tmp = closure_0;
              guild = closure_10.getGuild(closure_0);
              if (null != guild) {
                tmp3 = closure_11;
                tmp4 = Permissions;
                if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                  tmp5 = closure_7;
                  guildIncident = closure_7.getGuildIncident(tmp);
                  hasItem = undefined;
                  if (guild != null) {
                    features = guild.features;
                    has = features.has;
                    if (has != null) {
                      tmp8 = GuildFeatures;
                      hasItem = has(GuildFeatures.INVITES_DISABLED);
                    }
                  }
                  if (!hasItem) {
                    invitesDisabledUntil = undefined;
                    if (guildIncident != null) {
                      invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                    }
                    tmp10 = null != invitesDisabledUntil;
                    if (tmp10) {
                      tmp11 = globalThis;
                      _Date = Date;
                      tmp12 = new.target;
                      tmp13 = new.target;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      tmp15 = new.target;
                      tmp16 = new.target;
                      date1 = new Date();
                      tmp18 = date1;
                      tmp19 = date;
                      tmp10 = date > date1;
                    }
                    hasItem = tmp10;
                  }
                  return hasItem;
                }
              }
              return false;
            }
          }
          const items3 = [arg0];
          cResult[9] = arg0;
          cResult[10] = U;
          cResult[11] = items3;
          let tmp17 = items3;
        } else {
          class U {
            constructor() {
              tmp = closure_0;
              guild = closure_10.getGuild(closure_0);
              if (null != guild) {
                tmp3 = closure_11;
                tmp4 = Permissions;
                if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                  tmp5 = closure_7;
                  guildIncident = closure_7.getGuildIncident(tmp);
                  hasItem = undefined;
                  if (guild != null) {
                    features = guild.features;
                    has = features.has;
                    if (has != null) {
                      tmp8 = GuildFeatures;
                      hasItem = has(GuildFeatures.INVITES_DISABLED);
                    }
                  }
                  if (!hasItem) {
                    invitesDisabledUntil = undefined;
                    if (guildIncident != null) {
                      invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                    }
                    tmp10 = null != invitesDisabledUntil;
                    if (tmp10) {
                      tmp11 = globalThis;
                      _Date = Date;
                      tmp12 = new.target;
                      tmp13 = new.target;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      tmp15 = new.target;
                      tmp16 = new.target;
                      date1 = new Date();
                      tmp18 = date1;
                      tmp19 = date;
                      tmp10 = date > date1;
                    }
                    hasItem = tmp10;
                  }
                  return hasItem;
                }
              }
              return false;
            }
          }
          tmp17 = cResult[11];
        }
        const tmpResult5 = tmp(504);
        const stateFromStores2 = tmp(504).useStateFromStores(tmp13, U, tmp17);
        const tmp20 = stateFromStores(16693)(arg0);
        const tmpResult6 = tmp(504);
        const token = tmp(4779).useToken(stateFromStores(587).modules.mobile.GUILD_BAR_ITEM_SIZE);
        const tmpResult7 = tmp(4779);
        const token1 = tmp(4779).useToken(stateFromStores(587).modules.mobile.GUILD_BAR_ITEM_MARGIN);
        const diff = token1 - tmp(1200).BADGE_PADDING;
        if (cResult[12] !== diff) {
          class U {
            constructor() {
              tmp = closure_0;
              guild = closure_10.getGuild(closure_0);
              if (null != guild) {
                tmp3 = closure_11;
                tmp4 = Permissions;
                if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                  tmp5 = closure_7;
                  guildIncident = closure_7.getGuildIncident(tmp);
                  hasItem = undefined;
                  if (guild != null) {
                    features = guild.features;
                    has = features.has;
                    if (has != null) {
                      tmp8 = GuildFeatures;
                      hasItem = has(GuildFeatures.INVITES_DISABLED);
                    }
                  }
                  if (!hasItem) {
                    invitesDisabledUntil = undefined;
                    if (guildIncident != null) {
                      invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                    }
                    tmp10 = null != invitesDisabledUntil;
                    if (tmp10) {
                      tmp11 = globalThis;
                      _Date = Date;
                      tmp12 = new.target;
                      tmp13 = new.target;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      tmp15 = new.target;
                      tmp16 = new.target;
                      date1 = new Date();
                      tmp18 = date1;
                      tmp19 = date;
                      tmp10 = date > date1;
                    }
                    hasItem = tmp10;
                  }
                  return hasItem;
                }
              }
              return false;
            }
          }
          tmp25[0] = diff;
          cResult[12] = diff;
          cResult[13] = tmp25;
        } else {
          class U {
            constructor() {
              tmp = closure_0;
              guild = closure_10.getGuild(closure_0);
              if (null != guild) {
                tmp3 = closure_11;
                tmp4 = Permissions;
                if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                  tmp5 = closure_7;
                  guildIncident = closure_7.getGuildIncident(tmp);
                  hasItem = undefined;
                  if (guild != null) {
                    features = guild.features;
                    has = features.has;
                    if (has != null) {
                      tmp8 = GuildFeatures;
                      hasItem = has(GuildFeatures.INVITES_DISABLED);
                    }
                  }
                  if (!hasItem) {
                    invitesDisabledUntil = undefined;
                    if (guildIncident != null) {
                      invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                    }
                    tmp10 = null != invitesDisabledUntil;
                    if (tmp10) {
                      tmp11 = globalThis;
                      _Date = Date;
                      tmp12 = new.target;
                      tmp13 = new.target;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      tmp15 = new.target;
                      tmp16 = new.target;
                      date1 = new Date();
                      tmp18 = date1;
                      tmp19 = date;
                      tmp10 = date > date1;
                    }
                    hasItem = tmp10;
                  }
                  return hasItem;
                }
              }
              return false;
            }
          }
        }
        if (cResult[14] === tmp4.topRightBadge) {
          class U {
            constructor() {
              tmp = closure_0;
              guild = closure_10.getGuild(closure_0);
              if (null != guild) {
                tmp3 = closure_11;
                tmp4 = Permissions;
                if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                  tmp5 = closure_7;
                  guildIncident = closure_7.getGuildIncident(tmp);
                  hasItem = undefined;
                  if (guild != null) {
                    features = guild.features;
                    has = features.has;
                    if (has != null) {
                      tmp8 = GuildFeatures;
                      hasItem = has(GuildFeatures.INVITES_DISABLED);
                    }
                  }
                  if (!hasItem) {
                    invitesDisabledUntil = undefined;
                    if (guildIncident != null) {
                      invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                    }
                    tmp10 = null != invitesDisabledUntil;
                    if (tmp10) {
                      tmp11 = globalThis;
                      _Date = Date;
                      tmp12 = new.target;
                      tmp13 = new.target;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      tmp15 = new.target;
                      tmp16 = new.target;
                      date1 = new Date();
                      tmp18 = date1;
                      tmp19 = date;
                      tmp10 = date > date1;
                    }
                    hasItem = tmp10;
                  }
                  return hasItem;
                }
              }
              return false;
            }
          }
          if (cResult[17] !== tmp20) {
            class U {
              constructor() {
                tmp = closure_0;
                guild = closure_10.getGuild(closure_0);
                if (null != guild) {
                  tmp3 = closure_11;
                  tmp4 = Permissions;
                  if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                    tmp5 = closure_7;
                    guildIncident = closure_7.getGuildIncident(tmp);
                    hasItem = undefined;
                    if (guild != null) {
                      features = guild.features;
                      has = features.has;
                      if (has != null) {
                        tmp8 = GuildFeatures;
                        hasItem = has(GuildFeatures.INVITES_DISABLED);
                      }
                    }
                    if (!hasItem) {
                      invitesDisabledUntil = undefined;
                      if (guildIncident != null) {
                        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                      }
                      tmp10 = null != invitesDisabledUntil;
                      if (tmp10) {
                        tmp11 = globalThis;
                        _Date = Date;
                        tmp12 = new.target;
                        tmp13 = new.target;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        tmp15 = new.target;
                        tmp16 = new.target;
                        date1 = new Date();
                        tmp18 = date1;
                        tmp19 = date;
                        tmp10 = date > date1;
                      }
                      hasItem = tmp10;
                    }
                    return hasItem;
                  }
                }
                return false;
              }
            }
            const mediaIcon = obj7.getMediaIcon(tmp20);
            cResult[17] = tmp20;
            cResult[18] = mediaIcon;
          } else {
            class U {
              constructor() {
                tmp = closure_0;
                guild = closure_10.getGuild(closure_0);
                if (null != guild) {
                  tmp3 = closure_11;
                  tmp4 = Permissions;
                  if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                    tmp5 = closure_7;
                    guildIncident = closure_7.getGuildIncident(tmp);
                    hasItem = undefined;
                    if (guild != null) {
                      features = guild.features;
                      has = features.has;
                      if (has != null) {
                        tmp8 = GuildFeatures;
                        hasItem = has(GuildFeatures.INVITES_DISABLED);
                      }
                    }
                    if (!hasItem) {
                      invitesDisabledUntil = undefined;
                      if (guildIncident != null) {
                        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                      }
                      tmp10 = null != invitesDisabledUntil;
                      if (tmp10) {
                        tmp11 = globalThis;
                        _Date = Date;
                        tmp12 = new.target;
                        tmp13 = new.target;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        tmp15 = new.target;
                        tmp16 = new.target;
                        date1 = new Date();
                        tmp18 = date1;
                        tmp19 = date;
                        tmp10 = date > date1;
                      }
                      hasItem = tmp10;
                    }
                    return hasItem;
                  }
                }
                return false;
              }
            }
          }
          if (tmp27 != null) {
            class U {
              constructor() {
                tmp = closure_0;
                guild = closure_10.getGuild(closure_0);
                if (null != guild) {
                  tmp3 = closure_11;
                  tmp4 = Permissions;
                  if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                    tmp5 = closure_7;
                    guildIncident = closure_7.getGuildIncident(tmp);
                    hasItem = undefined;
                    if (guild != null) {
                      features = guild.features;
                      has = features.has;
                      if (has != null) {
                        tmp8 = GuildFeatures;
                        hasItem = has(GuildFeatures.INVITES_DISABLED);
                      }
                    }
                    if (!hasItem) {
                      invitesDisabledUntil = undefined;
                      if (guildIncident != null) {
                        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                      }
                      tmp10 = null != invitesDisabledUntil;
                      if (tmp10) {
                        tmp11 = globalThis;
                        _Date = Date;
                        tmp12 = new.target;
                        tmp13 = new.target;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        tmp15 = new.target;
                        tmp16 = new.target;
                        date1 = new Date();
                        tmp18 = date1;
                        tmp19 = date;
                        tmp10 = date > date1;
                      }
                      hasItem = tmp10;
                    }
                    return hasItem;
                  }
                }
                return false;
              }
            }
          }
          if (undefined == null) {
            class U {
              constructor() {
                tmp = closure_0;
                guild = closure_10.getGuild(closure_0);
                if (null != guild) {
                  tmp3 = closure_11;
                  tmp4 = Permissions;
                  if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                    tmp5 = closure_7;
                    guildIncident = closure_7.getGuildIncident(tmp);
                    hasItem = undefined;
                    if (guild != null) {
                      features = guild.features;
                      has = features.has;
                      if (has != null) {
                        tmp8 = GuildFeatures;
                        hasItem = has(GuildFeatures.INVITES_DISABLED);
                      }
                    }
                    if (!hasItem) {
                      invitesDisabledUntil = undefined;
                      if (guildIncident != null) {
                        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                      }
                      tmp10 = null != invitesDisabledUntil;
                      if (tmp10) {
                        tmp11 = globalThis;
                        _Date = Date;
                        tmp12 = new.target;
                        tmp13 = new.target;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        tmp15 = new.target;
                        tmp16 = new.target;
                        date1 = new Date();
                        tmp18 = date1;
                        tmp19 = date;
                        tmp10 = date > date1;
                      }
                      hasItem = tmp10;
                    }
                    return hasItem;
                  }
                }
                return false;
              }
            }
          }
          if (tmp27 != null) {
            class U {
              constructor() {
                tmp = closure_0;
                guild = closure_10.getGuild(closure_0);
                if (null != guild) {
                  tmp3 = closure_11;
                  tmp4 = Permissions;
                  if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                    tmp5 = closure_7;
                    guildIncident = closure_7.getGuildIncident(tmp);
                    hasItem = undefined;
                    if (guild != null) {
                      features = guild.features;
                      has = features.has;
                      if (has != null) {
                        tmp8 = GuildFeatures;
                        hasItem = has(GuildFeatures.INVITES_DISABLED);
                      }
                    }
                    if (!hasItem) {
                      invitesDisabledUntil = undefined;
                      if (guildIncident != null) {
                        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                      }
                      tmp10 = null != invitesDisabledUntil;
                      if (tmp10) {
                        tmp11 = globalThis;
                        _Date = Date;
                        tmp12 = new.target;
                        tmp13 = new.target;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        tmp15 = new.target;
                        tmp16 = new.target;
                        date1 = new Date();
                        tmp18 = date1;
                        tmp19 = date;
                        tmp10 = date > date1;
                      }
                      hasItem = tmp10;
                    }
                    return hasItem;
                  }
                }
                return false;
              }
            }
          }
          if (cResult[19] === tmp20.isCurrentUserConnected) {
            class U {
              constructor() {
                tmp = closure_0;
                guild = closure_10.getGuild(closure_0);
                if (null != guild) {
                  tmp3 = closure_11;
                  tmp4 = Permissions;
                  if (closure_11.can(Permissions.MANAGE_GUILD, guild)) {
                    tmp5 = closure_7;
                    guildIncident = closure_7.getGuildIncident(tmp);
                    hasItem = undefined;
                    if (guild != null) {
                      features = guild.features;
                      has = features.has;
                      if (has != null) {
                        tmp8 = GuildFeatures;
                        hasItem = has(GuildFeatures.INVITES_DISABLED);
                      }
                    }
                    if (!hasItem) {
                      invitesDisabledUntil = undefined;
                      if (guildIncident != null) {
                        invitesDisabledUntil = guildIncident.invitesDisabledUntil;
                      }
                      tmp10 = null != invitesDisabledUntil;
                      if (tmp10) {
                        tmp11 = globalThis;
                        _Date = Date;
                        tmp12 = new.target;
                        tmp13 = new.target;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        tmp15 = new.target;
                        tmp16 = new.target;
                        date1 = new Date();
                        tmp18 = date1;
                        tmp19 = date;
                        tmp10 = date > date1;
                      }
                      hasItem = tmp10;
                    }
                    return hasItem;
                  }
                }
                return false;
              }
            }
          }
          const obj2 = {
            guildActivityIndicatorSource: undefined,
            IconComponent: undefined,
            isCurrentUserConnected: tmp20.isCurrentUserConnected,
          };
          const guildActivityIndicatorSource = obj2.guildActivityIndicatorSource;
          const tmp36 = _objectWithoutProperties(obj2, closure_3);
          cResult[19] = tmp20.isCurrentUserConnected;
          cResult[20] = undefined;
          cResult[21] = undefined;
          class C {
            constructor() {
              if (closure_1) {
                tmp = closure_8;
                tmp2 = closure_0;
                request = closure_8.getRequest(closure_0);
                tmp4 = closure_12;
                currentUser = closure_12.getCurrentUser();
                tmp6 = null;
                if (null != currentUser) {
                  if (null != request) {
                    if (request.userId === currentUser.id) {
                      tmp7 = closure_9;
                      member = closure_9.getMember(tmp2, request.userId);
                      if (null != member) {
                        if (!member.isPending) {
                          tmp9 = closure_0;
                          tmp10 = closure_2;
                          obj = closure_0(closure_2[14]);
                        }
                      }
                      return request.applicationStatus;
                    }
                  }
                }
              }
              return;
            }
          }
          cResult[22] = tmp36;
          cResult[23] = guildActivityIndicatorSource;
        }
        const items4 = [tmp4.topRightBadge, tmp25];
        class C {
          constructor() {
            if (closure_1) {
              tmp = closure_8;
              tmp2 = closure_0;
              request = closure_8.getRequest(closure_0);
              tmp4 = closure_12;
              currentUser = closure_12.getCurrentUser();
              tmp6 = null;
              if (null != currentUser) {
                if (null != request) {
                  if (request.userId === currentUser.id) {
                    tmp7 = closure_9;
                    member = closure_9.getMember(tmp2, request.userId);
                    if (null != member) {
                      if (!member.isPending) {
                        tmp9 = closure_0;
                        tmp10 = closure_2;
                        obj = closure_0(closure_2[14]);
                      }
                    }
                    return request.applicationStatus;
                  }
                }
              }
            }
            return;
          }
        }
        cResult[14] = tmp4.topRightBadge;
        cResult[15] = tmp25;
        cResult[16] = items4;
        const tmpResult8 = tmp(4779);
      }
      class C {
        constructor() {
          if (closure_1) {
            tmp = closure_8;
            tmp2 = closure_0;
            request = closure_8.getRequest(closure_0);
            tmp4 = closure_12;
            currentUser = closure_12.getCurrentUser();
            tmp6 = null;
            if (null != currentUser) {
              if (null != request) {
                if (request.userId === currentUser.id) {
                  tmp7 = closure_9;
                  member = closure_9.getMember(tmp2, request.userId);
                  if (null != member) {
                    if (!member.isPending) {
                      tmp9 = closure_0;
                      tmp10 = closure_2;
                      obj = closure_0(closure_2[14]);
                    }
                  }
                  return request.applicationStatus;
                }
              }
            }
          }
          return;
        }
      }
      items5 = [arg0, stateFromStores];
      cResult[4] = arg0;
      cResult[5] = stateFromStores;
      cResult[6] = C;
      cResult[7] = items5;
      const tmpResult = require("initialize");
    }
  : function useGuildsBarBadges(arg0, mentionCount, isMentionLowImportance) {
      _require = arg0;
      const tmp = closure_16();
      importDefault = tmp;
      let items = [GuildStore];
      stateFromStores = require("initialize").useStateFromStores(items, () => {
        guild = GuildStore.getGuild(closure_0);
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
      const items1 = [cutout, UserStore, GuildMemberStore];
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
        },
        items2,
      );
      let obj2 = require("initialize");
      const items3 = [PermissionStore, GuildStore, cutoutTopRight];
      const items4 = [arg0];
      const stateFromStores2 = require("initialize").useStateFromStores(
        items3,
        () => {
          guild = GuildStore.getGuild(closure_0);
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
      let obj3 = require("initialize");
      const token = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
      let obj4 = require("useToken");
      const token1 = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
      const items5 = [tmp.topRightBadge, token1];
      memo = memo.useMemo(() => {
        const items = [topRightBadge.topRightBadge, { top: token1 - native.BADGE_PADDING }];
        return items;
      }, items5);
      const items6 = [tmp5, memo, token];
      const memo1 = memo.useMemo(() => {
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
        const tmp7 = _objectWithoutProperties(obj2, closure_4);
        let tmp8 = null;
        if (null != guildActivityIndicatorSource) {
          const obj3 = { style: memo, source: guildActivityIndicatorSource };
          const merged = Object.assign(tmp7);
          tmp8 = jsx(GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase, {
            style: memo,
            source: guildActivityIndicatorSource,
          });
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
      let tmp10 = require("useGuildsBarBottomRightBadge")({
        mentionCount,
        isMentionLowImportance,
        joinRequestState: stateFromStores1,
        shouldShowInvitesDisabled: stateFromStores2,
      });
      cutout = tmp10.cutout;
      const obj7 = {
        badgeTopRight: memo1.badgeTopRight,
        badgeBottomRight: tmp10.badge,
        cutouts: null,
        mediaState: tmp5,
      };
      const items7 = [cutoutTopRight, cutout];
      obj7.cutouts = memo.useMemo(() => {
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
