// discord_app/modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import native from "../../../../design/void/native.tsx";
import GuildJoinRequestUtils from "../../../guild_member_verification/GuildJoinRequestUtils.tsx";
import computeGuildsBarCutoutDefault from "../utils/computeGuildsBarCutout.tsx";
import GuildsBarActivityIndicator from "../GuildsBarActivityIndicator.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildIncidentsStore from "../../../guild_antiraid/GuildIncidentsStore.tsx";
import UserGuildJoinRequestStore from "../../../guild_member_verification/UserGuildJoinRequestStore.tsx";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, tmp11, tmp15, tmp2;

let closure_14;
let map1;
let closure_3 = ["guildActivityIndicatorSource"];
let closure_4 = ["guildActivityIndicatorSource"];
({ GuildFeatures: map1, Permissions: closure_14 } = Constants);
const jsx = Fragment.jsx;
let closure_16 = createStyles.createStyles({
  topRightBadge: { position: "absolute", right: 9, backgroundColor: "transparent", borderColor: "transparent" },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1, arg2) => {
      let closure_0;
      let first;
      let items5;
      let tmp9;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(47);
      const tmp4 = closure_16();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        class D {
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
        cResult[2] = D;
      } else {
        class D {
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
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, D);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
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
        tmp9 = items1;
      } else {
        class D {
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
        let tmp13;
        let tmp17;
        class D {
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
        const tmpResult5 = require("get initialized");
        const stateFromStores1 = tmpResult5.useStateFromStores(tmp9, C, items5);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
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
          tmp13 = items2;
        } else {
          class D {
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
                      self = this;
                      self2 = this;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      self3 = this;
                      self4 = this;
                      date1 = new Date();
                      tmp14 = date1;
                      tmp15 = date;
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
          tmp17 = items3;
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
                      self = this;
                      self2 = this;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      self3 = this;
                      self4 = this;
                      date1 = new Date();
                      tmp14 = date1;
                      tmp15 = date;
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
        const tmpResult6 = require("get initialized");
        const stateFromStores2 = tmpResult6.useStateFromStores(tmp13, U, tmp17);
        const tmp20 = stateFromStores(16310)(arg0);
        const tmpResult7 = require("useToken");
        const token = tmpResult7.useToken(stateFromStores(587).modules.mobile.GUILD_BAR_ITEM_SIZE);
        const tmpResult8 = require("useToken");
        const token1 = tmpResult8.useToken(stateFromStores(587).modules.mobile.GUILD_BAR_ITEM_MARGIN);
        const diff = token1 - tmp(1188).BADGE_PADDING;
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
                      self = this;
                      self2 = this;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      self3 = this;
                      self4 = this;
                      date1 = new Date();
                      tmp14 = date1;
                      tmp15 = date;
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
                      self = this;
                      self2 = this;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      self3 = this;
                      self4 = this;
                      date1 = new Date();
                      tmp14 = date1;
                      tmp15 = date;
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
                      self = this;
                      self2 = this;
                      date = new Date(guildIncident.invitesDisabledUntil);
                      _Date2 = Date;
                      self3 = this;
                      self4 = this;
                      date1 = new Date();
                      tmp14 = date1;
                      tmp15 = date;
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
                        self = this;
                        self2 = this;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        self3 = this;
                        self4 = this;
                        date1 = new Date();
                        tmp14 = date1;
                        tmp15 = date;
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
                        self = this;
                        self2 = this;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        self3 = this;
                        self4 = this;
                        date1 = new Date();
                        tmp14 = date1;
                        tmp15 = date;
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
                        self = this;
                        self2 = this;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        self3 = this;
                        self4 = this;
                        date1 = new Date();
                        tmp14 = date1;
                        tmp15 = date;
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
                        self = this;
                        self2 = this;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        self3 = this;
                        self4 = this;
                        date1 = new Date();
                        tmp14 = date1;
                        tmp15 = date;
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
                        self = this;
                        self2 = this;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        self3 = this;
                        self4 = this;
                        date1 = new Date();
                        tmp14 = date1;
                        tmp15 = date;
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
                        self = this;
                        self2 = this;
                        date = new Date(guildIncident.invitesDisabledUntil);
                        _Date2 = Date;
                        self3 = this;
                        self4 = this;
                        date1 = new Date();
                        tmp14 = date1;
                        tmp15 = date;
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
          cResult[19] = tmp20.isCurrentUserConnected;
          cResult[20] = undefined;
          cResult[21] = undefined;
          const tmp36 = _objectWithoutProperties(obj2, closure_3);
          class C {
            constructor() {
              tmp = closure_1;
              if (tmp) {
                tmp2 = closure_8;
                tmp3 = closure_0;
                request = closure_8.getRequest(closure_0);
                tmp5 = closure_12;
                currentUser = closure_12.getCurrentUser();
                tmp7 = null;
                if (null != currentUser) {
                  if (null != request) {
                    if (request.userId === currentUser.id) {
                      tmp8 = closure_9;
                      member = closure_9.getMember(tmp3, request.userId);
                      if (null != member) {
                        if (!member.isPending) {
                          tmp10 = closure_0;
                          tmp11 = closure_2;
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
            tmp = closure_1;
            if (tmp) {
              tmp2 = closure_8;
              tmp3 = closure_0;
              request = closure_8.getRequest(closure_0);
              tmp5 = closure_12;
              currentUser = closure_12.getCurrentUser();
              tmp7 = null;
              if (null != currentUser) {
                if (null != request) {
                  if (request.userId === currentUser.id) {
                    tmp8 = closure_9;
                    member = closure_9.getMember(tmp3, request.userId);
                    if (null != member) {
                      if (!member.isPending) {
                        tmp10 = closure_0;
                        tmp11 = closure_2;
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
      }
      class C {
        constructor() {
          tmp = closure_1;
          if (tmp) {
            tmp2 = closure_8;
            tmp3 = closure_0;
            request = closure_8.getRequest(closure_0);
            tmp5 = closure_12;
            currentUser = closure_12.getCurrentUser();
            tmp7 = null;
            if (null != currentUser) {
              if (null != request) {
                if (request.userId === currentUser.id) {
                  tmp8 = closure_9;
                  member = closure_9.getMember(tmp3, request.userId);
                  if (null != member) {
                    if (!member.isPending) {
                      tmp10 = closure_0;
                      tmp11 = closure_2;
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
    }
  : (arg0, mentionCount, isMentionLowImportance) => {
      let closure_0;
      let cutout;
      let cutoutTopRight;
      let items7;
      let memo;
      let stateFromStores;
      let topRightBadge;
      _require = arg0;
      const tmp = closure_16();
      importDefault = tmp;
      let obj = require("get initialized");
      let items = [GuildStore];
      stateFromStores = obj.useStateFromStores(items, () => {
        const guild = GuildStore.getGuild(closure_0);
        let flag;
        if (guild != null) {
          const features = guild.features;
          flag = features.has(map1.MEMBER_VERIFICATION_MANUAL_APPROVAL);
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      });
      let obj2 = require("get initialized");
      const items1 = [cutout, UserStore, GuildMemberStore];
      const items2 = [arg0, stateFromStores];
      const stateFromStores1 = obj2.useStateFromStores(
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
      const items3 = [PermissionStore, GuildStore, cutoutTopRight];
      const items4 = [arg0];
      const obj3 = require("get initialized");
      const stateFromStores2 = obj3.useStateFromStores(
        items3,
        function () {
          const guild = GuildStore.getGuild(closure_0);
          if (null != guild) {
            if (PermissionStore.can(constants.MANAGE_GUILD, guild)) {
              const guildIncident = GuildIncidentsStore.getGuildIncident(closure_0);
              let hasItem;
              if (guild != null) {
                const features = guild.features;
                const has = features.has;
                if (has != null) {
                  hasItem = has(map1.INVITES_DISABLED);
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
                  const self = this;
                  const self2 = this;
                  const _Date2 = Date;
                  const self3 = this;
                  const self4 = this;
                  const date = new Date(guildIncident.invitesDisabledUntil);
                  tmp10 = date > new Date();
                  const date1 = new Date();
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
      let obj4 = require("useToken");
      const token = obj4.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_SIZE);
      let obj5 = require("useToken");
      const token1 = obj5.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
      const items5 = [tmp.topRightBadge, token1];
      memo = memo.useMemo(() => {
        const items = [topRightBadge.topRightBadge, { top: token1 - native.BADGE_PADDING }];
        ({ top: token1 - native.BADGE_PADDING });
        return items;
      }, items5);
      const items6 = [tmp5, memo, token];
      const memo1 = memo.useMemo(() => {
        let icon;
        let tmp14;
        const obj = GuildsBarActivityIndicator;
        const mediaIcon = obj.getMediaIcon(closure_3);
        let source;
        if (mediaIcon != null) {
          source = mediaIcon.source;
        }
        if (source == null) {
          source = null;
        }
        const obj2 = {
          guildActivityIndicatorSource: source,
          IconComponent: icon,
          isCurrentUserConnected: closure_3.isCurrentUserConnected,
        };
        icon = undefined;
        if (mediaIcon != null) {
          icon = mediaIcon.icon;
        }
        const guildActivityIndicatorSource = obj2.guildActivityIndicatorSource;
        let tmp8 = null;
        const tmp7 = _objectWithoutProperties(obj2, closure_4);
        if (null != guildActivityIndicatorSource) {
          const GuildsBarActivityIndicatorBase = GuildsBarActivityIndicator.GuildsBarActivityIndicatorBase;
          const merged = Object.assign(tmp7);
          tmp8 = <GuildsBarActivityIndicatorBase style={memo} source={guildActivityIndicatorSource} />;
        }
        const obj4 = { badgeTopRight: tmp8, cutoutTopRight: tmp14 };
        tmp14 = undefined;
        if (null != guildActivityIndicatorSource) {
          const obj5 = { position: "top-right", containerSize: token };
          tmp14 = computeGuildsBarCutoutDefault(obj5);
        }
        return obj4;
      }, items6);
      cutoutTopRight = memo1.cutoutTopRight;
      const badgeTopRight = memo1.badgeTopRight;
      const obj6 = {
        mentionCount,
        isMentionLowImportance,
        joinRequestState: stateFromStores1,
        shouldShowInvitesDisabled: stateFromStores2,
      };
      let tmp10 = require("useGuildsBarBottomRightBadge")(obj6);
      cutout = tmp10.cutout;
      const obj7 = {
        badgeTopRight,
        badgeBottomRight: tmp10.badge,
        cutouts: memo.useMemo(() => {
          const items = [];
          if (null != cutoutTopRight) {
            items.push(tmp);
          }
          if (null != cutout) {
            items.push(tmp3);
          }
          return items;
        }, items7),
        mediaState: tmp5,
      };
      items7 = [cutoutTopRight, cutout];
      return obj7;
    };
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarBadges.tsx");

export default tmp3;
