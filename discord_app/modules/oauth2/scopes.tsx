// discord_app/modules/oauth2/scopes.tsx
let items = [
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["6xfSCq"]);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ymSk0r);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.EnN7c5);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["4wMpBs"]);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.CncpnK);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.X9pGvJ);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.sGOSG4);
  },
  () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.JfibUq);
  }
];
let items1 = [require("set").OAuth2Scopes.BOT, require("set").OAuth2Scopes.OPENID, require("set").OAuth2Scopes.IDENTIFY, require("set").OAuth2Scopes.IDENTIFY_PREMIUM, require("set").OAuth2Scopes.EMAIL, require("set").OAuth2Scopes.CONNECTIONS, require("set").OAuth2Scopes.MESSAGES_READ, require("set").OAuth2Scopes.GUILDS, require("set").OAuth2Scopes.GUILDS_JOIN, require("set").OAuth2Scopes.GUILDS_MEMBERS_READ, require("set").OAuth2Scopes.GUILDS_CHANNELS_READ, require("set").OAuth2Scopes.GDM_JOIN, require("set").OAuth2Scopes.RPC, require("set").OAuth2Scopes.RPC_NOTIFICATIONS_READ, require("set").OAuth2Scopes.RPC_VOICE_READ, require("set").OAuth2Scopes.RPC_VOICE_WRITE, require("set").OAuth2Scopes.RPC_VIDEO_READ, require("set").OAuth2Scopes.RPC_VIDEO_WRITE, require("set").OAuth2Scopes.RPC_SCREENSHARE_READ, require("set").OAuth2Scopes.RPC_SCREENSHARE_WRITE, require("set").OAuth2Scopes.RPC_ACTIVITIES_WRITE, require("set").OAuth2Scopes.APPLICATION_IDENTITIES_WRITE, require("set").OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE, require("set").OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, require("set").OAuth2Scopes.APPLICATIONS_BUILDS_READ, require("set").OAuth2Scopes.APPLICATIONS_COMMANDS, require("set").OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, require("set").OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, require("set").OAuth2Scopes.APPLICATIONS_STORE_UPDATE, require("set").OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, require("set").OAuth2Scopes.ACTIVITIES_INVITES_WRITE, require("set").OAuth2Scopes.ACTIVITIES_READ, require("set").OAuth2Scopes.ACTIVITIES_WRITE, require("set").OAuth2Scopes.RELATIONSHIPS_READ, require("set").OAuth2Scopes.RELATIONSHIPS_WRITE, require("set").OAuth2Scopes.VOICE, require("set").OAuth2Scopes.DM_CHANNELS_READ, require("set").OAuth2Scopes.DM_CHANNELS_MESSAGES_READ, require("set").OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, require("set").OAuth2Scopes.ROLE_CONNECTIONS_WRITE, require("set").OAuth2Scopes.PRESENCES_READ, require("set").OAuth2Scopes.PRESENCES_WRITE, require("set").OAuth2Scopes.GATEWAY_CONNECT, require("set").OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE, require("set").OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE, require("set").OAuth2Scopes.SDK_SOCIAL_LAYER];
let items2 = [require("set").OAuth2Scopes.WEBHOOK_INCOMING, require("set").OAuth2Scopes.BOT];
const combined = items1.concat(items2);
const result = require("set").fileFinishedImporting("modules/oauth2/scopes.tsx");

export const FAKE_SCOPES = items;
export const OrderedAccountScopes = items1;
export const ValidScopes = combined;
export const RemovedScopes = ["rpc.api"];
export const getScopeNames = function getScopeNames(nextResult, c2) {
  const tmp = require;
  if (require(8824) /* set */.OAuth2Scopes.IDENTIFY === nextResult) {
    const intl55 = tmp(1236).intl;
    const items = [intl55.string(tmp(1236).t.DD9KQh)];
    return items;
  } else if (tmp(8824).OAuth2Scopes.IDENTIFY_PREMIUM === nextResult) {
    const intl54 = tmp(1236).intl;
    const items1 = [intl54.string(tmp(1236).t.xhQsxx)];
    return items1;
  } else if (tmp(8824).OAuth2Scopes.OPENID === nextResult) {
    const intl53 = tmp(1236).intl;
    const items2 = [intl53.string(tmp(1236).t.R5IKv1)];
    return items2;
  } else if (tmp(8824).OAuth2Scopes.EMAIL === nextResult) {
    const intl52 = tmp(1236).intl;
    const items3 = [intl52.string(tmp(1236).t.rvFS2t)];
    return items3;
  } else if (tmp(8824).OAuth2Scopes.BOT === nextResult) {
    const intl51 = tmp(1236).intl;
    const items4 = [intl51.string(tmp(1236).t.pRpdox)];
    return items4;
  } else if (tmp(8824).OAuth2Scopes.CONNECTIONS === nextResult) {
    const intl50 = tmp(1236).intl;
    const items5 = [intl50.string(tmp(1236).t["1AwaU1"])];
    return items5;
  } else if (tmp(8824).OAuth2Scopes.MESSAGES_READ === nextResult) {
    const intl49 = tmp(1236).intl;
    const items6 = [intl49.string(tmp(1236).t.jVXrHb)];
    return items6;
  } else if (tmp(8824).OAuth2Scopes.GUILDS === nextResult) {
    const intl48 = tmp(1236).intl;
    const items7 = [intl48.string(tmp(1236).t.QKGJkC)];
    return items7;
  } else if (tmp(8824).OAuth2Scopes.GUILDS_JOIN === nextResult) {
    const intl47 = tmp(1236).intl;
    const items8 = [intl47.string(tmp(1236).t.ETGDR9)];
    return items8;
  } else if (tmp(8824).OAuth2Scopes.GUILDS_MEMBERS_READ === nextResult) {
    const hasItem = c2.includes(tmp(8824).OAuth2Scopes.VOICE);
    const intl46 = tmp(1236).intl;
    const string = intl46.string;
    const t = tmp(1236).t;
    if (hasItem) {
      const items9 = [string(t.OSvmfH)];
      let items10 = items9;
    } else {
      items10 = [string(t.o6M1aS)];
    }
    return items10;
  } else if (tmp(8824).OAuth2Scopes.GUILDS_CHANNELS_READ === nextResult) {
    const intl45 = tmp(1236).intl;
    const items11 = [intl45.string(tmp(1236).t.BWGAgt)];
    return items11;
  } else if (tmp(8824).OAuth2Scopes.GDM_JOIN === nextResult) {
    const intl44 = tmp(1236).intl;
    const items12 = [intl44.string(tmp(1236).t["55B4wA"])];
    return items12;
  } else if (tmp(8824).OAuth2Scopes.RPC === nextResult) {
    const intl43 = tmp(1236).intl;
    const items13 = [intl43.string(tmp(1236).t.EDBEeK)];
    return items13;
  } else if (tmp(8824).OAuth2Scopes.RPC_NOTIFICATIONS_READ === nextResult) {
    const intl42 = tmp(1236).intl;
    const items14 = [intl42.string(tmp(1236).t["6kDHWV"])];
    return items14;
  } else if (tmp(8824).OAuth2Scopes.RPC_VOICE_WRITE === nextResult) {
    const intl41 = tmp(1236).intl;
    const items15 = [intl41.string(tmp(1236).t["531s7c"])];
    return items15;
  } else if (tmp(8824).OAuth2Scopes.RPC_VIDEO_READ === nextResult) {
    const intl40 = tmp(1236).intl;
    const items16 = [intl40.string(tmp(1236).t.zbUSWO)];
    return items16;
  } else if (tmp(8824).OAuth2Scopes.RPC_VIDEO_WRITE === nextResult) {
    const intl39 = tmp(1236).intl;
    const items17 = [intl39.string(tmp(1236).t["y+MdAM"])];
    return items17;
  } else if (tmp(8824).OAuth2Scopes.RPC_SCREENSHARE_READ === nextResult) {
    const intl38 = tmp(1236).intl;
    const items18 = [intl38.string(tmp(1236).t.b0i0CO)];
    return items18;
  } else if (tmp(8824).OAuth2Scopes.RPC_SCREENSHARE_WRITE === nextResult) {
    const intl37 = tmp(1236).intl;
    const items19 = [intl37.string(tmp(1236).t["9Rmxux"])];
    return items19;
  } else if (tmp(8824).OAuth2Scopes.RPC_VOICE_READ === nextResult) {
    const intl36 = tmp(1236).intl;
    const items20 = [intl36.string(tmp(1236).t.rznmpz)];
    return items20;
  } else if (tmp(8824).OAuth2Scopes.RPC_ACTIVITIES_WRITE === nextResult) {
    const intl35 = tmp(1236).intl;
    const items21 = [intl35.string(tmp(1236).t.KQwJDf)];
    return items21;
  } else if (tmp(8824).OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD === nextResult) {
    const intl34 = tmp(1236).intl;
    const items22 = [intl34.string(tmp(1236).t.Iwbtgk)];
    return items22;
  } else if (tmp(8824).OAuth2Scopes.APPLICATIONS_BUILDS_READ === nextResult) {
    const intl33 = tmp(1236).intl;
    const items23 = [intl33.string(tmp(1236).t.ZkZCCW)];
    return items23;
  } else if (tmp(8824).OAuth2Scopes.APPLICATIONS_COMMANDS === nextResult) {
    const intl32 = tmp(1236).intl;
    const items24 = [intl32.string(tmp(1236).t.H4q49X)];
    return items24;
  } else if (tmp(8824).OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE === nextResult) {
    const intl31 = tmp(1236).intl;
    const items25 = [intl31.string(tmp(1236).t.mxeq6u)];
    return items25;
  } else if (tmp(8824).OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE === nextResult) {
    const intl30 = tmp(1236).intl;
    const items26 = [intl30.string(tmp(1236).t["7SIoW7"])];
    return items26;
  } else if (tmp(8824).OAuth2Scopes.APPLICATIONS_STORE_UPDATE === nextResult) {
    const intl29 = tmp(1236).intl;
    const items27 = [intl29.string(tmp(1236).t["Rba/Xn"])];
    return items27;
  } else if (tmp(8824).OAuth2Scopes.APPLICATIONS_ENTITLEMENTS === nextResult) {
    const intl28 = tmp(1236).intl;
    const items28 = [intl28.string(tmp(1236).t.xeNgGI)];
    return items28;
  } else if (tmp(8824).OAuth2Scopes.ACTIVITIES_READ === nextResult) {
    const intl27 = tmp(1236).intl;
    const items29 = [intl27.string(tmp(1236).t["4+tSce"])];
    return items29;
  } else if (tmp(8824).OAuth2Scopes.ACTIVITIES_WRITE === nextResult) {
    const intl26 = tmp(1236).intl;
    const items30 = [intl26.string(tmp(1236).t["6OsWXX"])];
    return items30;
  } else if (tmp(8824).OAuth2Scopes.RELATIONSHIPS_READ === nextResult) {
    const intl25 = tmp(1236).intl;
    const items31 = [intl25.string(tmp(1236).t["521/7W"])];
    return items31;
  } else if (tmp(8824).OAuth2Scopes.RELATIONSHIPS_WRITE === nextResult) {
    const intl24 = tmp(1236).intl;
    const items32 = [intl24.string(tmp(1236).t["qR/txQ"])];
    return items32;
  } else if (tmp(8824).OAuth2Scopes.VOICE === nextResult) {
    const intl23 = tmp(1236).intl;
    const items33 = [intl23.string(tmp(1236).t.XK5zdO)];
    return items33;
  } else if (tmp(8824).OAuth2Scopes.DM_CHANNELS_READ === nextResult) {
    const intl22 = tmp(1236).intl;
    const items34 = [intl22.string(tmp(1236).t.w8emlT)];
    return items34;
  } else if (tmp(8824).OAuth2Scopes.ROLE_CONNECTIONS_WRITE === nextResult) {
    const intl21 = tmp(1236).intl;
    const items35 = [intl21.string(tmp(1236).t.Bv0wZj)];
    return items35;
  } else if (tmp(8824).OAuth2Scopes.PRESENCES_READ === nextResult) {
    const intl20 = tmp(1236).intl;
    const items36 = [intl20.string(tmp(1236).t.JUWeyf)];
    return items36;
  } else if (tmp(8824).OAuth2Scopes.PRESENCES_WRITE === nextResult) {
    const intl19 = tmp(1236).intl;
    const items37 = [intl19.string(tmp(1236).t.apHLwv)];
    return items37;
  } else if (tmp(8824).OAuth2Scopes.DM_CHANNELS_MESSAGES_READ === nextResult) {
    const intl18 = tmp(1236).intl;
    const items38 = [intl18.string(tmp(1236).t.FHeB8p)];
    return items38;
  } else if (tmp(8824).OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE === nextResult) {
    const intl17 = tmp(1236).intl;
    const items39 = [intl17.string(tmp(1236).t["mdh+xY"])];
    return items39;
  } else if (tmp(8824).OAuth2Scopes.GATEWAY_CONNECT === nextResult) {
    const intl16 = tmp(1236).intl;
    const items40 = [intl16.string(tmp(1236).t["uJd+85"])];
    return items40;
  } else if (tmp(8824).OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE === nextResult) {
    const intl15 = tmp(1236).intl;
    const items41 = [intl15.string(tmp(1236).t.hycwLK)];
    return items41;
  } else if (tmp(8824).OAuth2Scopes.ACTIVITIES_INVITES_WRITE === nextResult) {
    const intl14 = tmp(1236).intl;
    const items42 = [intl14.string(tmp(1236).t.IM4Cje)];
    return items42;
  } else if (tmp(8824).OAuth2Scopes.APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl13 = tmp(1236).intl;
    const items43 = [intl13.string(tmp(1236).t["1zioRF"])];
    return items43;
  } else if (tmp(8824).OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl12 = tmp(1236).intl;
    const items44 = [intl12.string(tmp(1236).t["4l1DWw"])];
    return items44;
  } else if (tmp(8824).OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE === nextResult) {
    const intl7 = tmp(1236).intl;
    const items45 = [intl7.string(tmp(1236).t.Pl1dTW), , , ];
    const intl8 = tmp(1236).intl;
    items45[1] = intl8.string(tmp(1236).t.mPRcyT);
    const intl9 = tmp(1236).intl;
    items45[2] = intl9.string(tmp(1236).t.F7J4NE);
    const intl10 = tmp(1236).intl;
    items45[3] = intl10.string(tmp(1236).t.syJLx9);
    if (!c2.includes(tmp(8824).OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl11 = tmp(1236).intl;
      items45.push(intl11.string(tmp(1236).t["1zioRF"]));
    }
    return items45;
  } else if (tmp(8824).OAuth2Scopes.SDK_SOCIAL_LAYER === nextResult) {
    const intl = tmp(1236).intl;
    const items46 = [intl.string(tmp(1236).t.Pl1dTW), , , , ];
    const intl2 = tmp(1236).intl;
    items46[1] = intl2.string(tmp(1236).t["hc/+yg"]);
    const intl3 = tmp(1236).intl;
    items46[2] = intl3.string(tmp(1236).t.mPRcyT);
    const intl4 = tmp(1236).intl;
    items46[3] = intl4.string(tmp(1236).t.F7J4NE);
    const intl5 = tmp(1236).intl;
    items46[4] = intl5.string(tmp(1236).t["2wxXX9"]);
    if (!c2.includes(tmp(8824).OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl6 = tmp(1236).intl;
      items46.push(intl6.string(tmp(1236).t["1zioRF"]));
    }
    return items46;
  } else {
    const items47 = [nextResult];
    return items47;
  }
};
export const isSocialLayerUmbrellaScope = function isSocialLayerUmbrellaScope(arg0) {
  return arg0 === require(8824) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE || arg0 === require(8824) /* set */.OAuth2Scopes.SDK_SOCIAL_LAYER;
};
export const getSecurityMessage = function getSecurityMessage(scopes) {
  if (!scopes.includes(require(8824) /* set */.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE)) {
    if (!scopes.includes(tmp(8824).OAuth2Scopes.SDK_SOCIAL_LAYER)) {
      if (!scopes.includes(tmp(8824).OAuth2Scopes.MESSAGES_READ)) {
        if (!scopes.includes(tmp(8824).OAuth2Scopes.DM_CHANNELS_MESSAGES_READ)) {
          const intl = tmp(1236).intl;
          let formatResult = intl.format(tmp(1236).t["TeL+Ct"], {});
        }
      }
      const intl2 = tmp(1236).intl;
      formatResult = intl2.format(tmp(1236).t.Soy7jJ, {});
    }
    return formatResult;
  }
  const intl3 = tmp(1236).intl;
  formatResult = intl3.format(tmp(1236).t.o0GMBD, {});
};