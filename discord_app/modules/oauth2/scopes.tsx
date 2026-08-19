// === Module 4374: items ===

// Module 4374 (items)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import set from "set" /* 4375 */;

let items = [
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["6xfSCq"]);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ymSk0r);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.EnN7c5);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["4wMpBs"]);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.CncpnK);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.X9pGvJ);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.sGOSG4);
  },
  () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.JfibUq);
  }
];
let items1 = [set.OAuth2Scopes.BOT, set.OAuth2Scopes.OPENID, set.OAuth2Scopes.IDENTIFY, set.OAuth2Scopes.IDENTIFY_PREMIUM, set.OAuth2Scopes.EMAIL, set.OAuth2Scopes.CONNECTIONS, set.OAuth2Scopes.MESSAGES_READ, set.OAuth2Scopes.GUILDS, set.OAuth2Scopes.GUILDS_JOIN, set.OAuth2Scopes.GUILDS_MEMBERS_READ, set.OAuth2Scopes.GUILDS_CHANNELS_READ, set.OAuth2Scopes.GDM_JOIN, set.OAuth2Scopes.RPC, set.OAuth2Scopes.RPC_NOTIFICATIONS_READ, set.OAuth2Scopes.RPC_VOICE_READ, set.OAuth2Scopes.RPC_VOICE_WRITE, set.OAuth2Scopes.RPC_VIDEO_READ, set.OAuth2Scopes.RPC_VIDEO_WRITE, set.OAuth2Scopes.RPC_SCREENSHARE_READ, set.OAuth2Scopes.RPC_SCREENSHARE_WRITE, set.OAuth2Scopes.RPC_ACTIVITIES_WRITE, set.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE, set.OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE, set.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD, set.OAuth2Scopes.APPLICATIONS_BUILDS_READ, set.OAuth2Scopes.APPLICATIONS_COMMANDS, set.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE, set.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE, set.OAuth2Scopes.APPLICATIONS_STORE_UPDATE, set.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS, set.OAuth2Scopes.ACTIVITIES_INVITES_WRITE, set.OAuth2Scopes.ACTIVITIES_READ, set.OAuth2Scopes.ACTIVITIES_WRITE, set.OAuth2Scopes.RELATIONSHIPS_READ, set.OAuth2Scopes.RELATIONSHIPS_WRITE, set.OAuth2Scopes.VOICE, set.OAuth2Scopes.DM_CHANNELS_READ, set.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ, set.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE, set.OAuth2Scopes.ROLE_CONNECTIONS_WRITE, set.OAuth2Scopes.PRESENCES_READ, set.OAuth2Scopes.PRESENCES_WRITE, set.OAuth2Scopes.GATEWAY_CONNECT, set.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE, set.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE, set.OAuth2Scopes.SDK_SOCIAL_LAYER];
let items2 = [set.OAuth2Scopes.WEBHOOK_INCOMING, set.OAuth2Scopes.BOT];
const combined = items1.concat(items2);
const result = obj132.fileFinishedImporting("modules/oauth2/scopes.tsx");

export const FAKE_SCOPES = items;
export const OrderedAccountScopes = items1;
export const ValidScopes = combined;
export const RemovedScopes = ["rpc.api"];
export const getScopeNames = function getScopeNames(nextResult, c2) {
  if (set.OAuth2Scopes.IDENTIFY === nextResult) {
    const intl55 = getSystemLocale.intl;
    const items = [intl55.string(getSystemLocale.t.DD9KQh)];
    return items;
  } else if (set.OAuth2Scopes.IDENTIFY_PREMIUM === nextResult) {
    const intl54 = getSystemLocale.intl;
    const items1 = [intl54.string(getSystemLocale.t.xhQsxx)];
    return items1;
  } else if (set.OAuth2Scopes.OPENID === nextResult) {
    const intl53 = getSystemLocale.intl;
    const items2 = [intl53.string(getSystemLocale.t.R5IKv1)];
    return items2;
  } else if (set.OAuth2Scopes.EMAIL === nextResult) {
    const intl52 = getSystemLocale.intl;
    const items3 = [intl52.string(getSystemLocale.t.rvFS2t)];
    return items3;
  } else if (set.OAuth2Scopes.BOT === nextResult) {
    const intl51 = getSystemLocale.intl;
    const items4 = [intl51.string(getSystemLocale.t.pRpdox)];
    return items4;
  } else if (set.OAuth2Scopes.CONNECTIONS === nextResult) {
    const intl50 = getSystemLocale.intl;
    const items5 = [intl50.string(getSystemLocale.t["1AwaU1"])];
    return items5;
  } else if (set.OAuth2Scopes.MESSAGES_READ === nextResult) {
    const intl49 = getSystemLocale.intl;
    const items6 = [intl49.string(getSystemLocale.t.jVXrHb)];
    return items6;
  } else if (set.OAuth2Scopes.GUILDS === nextResult) {
    const intl48 = getSystemLocale.intl;
    const items7 = [intl48.string(getSystemLocale.t.QKGJkC)];
    return items7;
  } else if (set.OAuth2Scopes.GUILDS_JOIN === nextResult) {
    const intl47 = getSystemLocale.intl;
    const items8 = [intl47.string(getSystemLocale.t.ETGDR9)];
    return items8;
  } else if (set.OAuth2Scopes.GUILDS_MEMBERS_READ === nextResult) {
    const hasItem = c2.includes(set.OAuth2Scopes.VOICE);
    const intl46 = getSystemLocale.intl;
    const string = intl46.string;
    const t = getSystemLocale.t;
    if (hasItem) {
      const items9 = [string(t.OSvmfH)];
      let items10 = items9;
    } else {
      items10 = [string(t.o6M1aS)];
    }
    return items10;
  } else if (set.OAuth2Scopes.GUILDS_CHANNELS_READ === nextResult) {
    const intl45 = getSystemLocale.intl;
    const items11 = [intl45.string(getSystemLocale.t.BWGAgt)];
    return items11;
  } else if (set.OAuth2Scopes.GDM_JOIN === nextResult) {
    const intl44 = getSystemLocale.intl;
    const items12 = [intl44.string(getSystemLocale.t["55B4wA"])];
    return items12;
  } else if (set.OAuth2Scopes.RPC === nextResult) {
    const intl43 = getSystemLocale.intl;
    const items13 = [intl43.string(getSystemLocale.t.EDBEeK)];
    return items13;
  } else if (set.OAuth2Scopes.RPC_NOTIFICATIONS_READ === nextResult) {
    const intl42 = getSystemLocale.intl;
    const items14 = [intl42.string(getSystemLocale.t["6kDHWV"])];
    return items14;
  } else if (set.OAuth2Scopes.RPC_VOICE_WRITE === nextResult) {
    const intl41 = getSystemLocale.intl;
    const items15 = [intl41.string(getSystemLocale.t["531s7c"])];
    return items15;
  } else if (set.OAuth2Scopes.RPC_VIDEO_READ === nextResult) {
    const intl40 = getSystemLocale.intl;
    const items16 = [intl40.string(getSystemLocale.t.zbUSWO)];
    return items16;
  } else if (set.OAuth2Scopes.RPC_VIDEO_WRITE === nextResult) {
    const intl39 = getSystemLocale.intl;
    const items17 = [intl39.string(getSystemLocale.t["y+MdAM"])];
    return items17;
  } else if (set.OAuth2Scopes.RPC_SCREENSHARE_READ === nextResult) {
    const intl38 = getSystemLocale.intl;
    const items18 = [intl38.string(getSystemLocale.t.b0i0CO)];
    return items18;
  } else if (set.OAuth2Scopes.RPC_SCREENSHARE_WRITE === nextResult) {
    const intl37 = getSystemLocale.intl;
    const items19 = [intl37.string(getSystemLocale.t["9Rmxux"])];
    return items19;
  } else if (set.OAuth2Scopes.RPC_VOICE_READ === nextResult) {
    const intl36 = getSystemLocale.intl;
    const items20 = [intl36.string(getSystemLocale.t.rznmpz)];
    return items20;
  } else if (set.OAuth2Scopes.RPC_ACTIVITIES_WRITE === nextResult) {
    const intl35 = getSystemLocale.intl;
    const items21 = [intl35.string(getSystemLocale.t.KQwJDf)];
    return items21;
  } else if (set.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD === nextResult) {
    const intl34 = getSystemLocale.intl;
    const items22 = [intl34.string(getSystemLocale.t.Iwbtgk)];
    return items22;
  } else if (set.OAuth2Scopes.APPLICATIONS_BUILDS_READ === nextResult) {
    const intl33 = getSystemLocale.intl;
    const items23 = [intl33.string(getSystemLocale.t.ZkZCCW)];
    return items23;
  } else if (set.OAuth2Scopes.APPLICATIONS_COMMANDS === nextResult) {
    const intl32 = getSystemLocale.intl;
    const items24 = [intl32.string(getSystemLocale.t.H4q49X)];
    return items24;
  } else if (set.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE === nextResult) {
    const intl31 = getSystemLocale.intl;
    const items25 = [intl31.string(getSystemLocale.t.mxeq6u)];
    return items25;
  } else if (set.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE === nextResult) {
    const intl30 = getSystemLocale.intl;
    const items26 = [intl30.string(getSystemLocale.t["7SIoW7"])];
    return items26;
  } else if (set.OAuth2Scopes.APPLICATIONS_STORE_UPDATE === nextResult) {
    const intl29 = getSystemLocale.intl;
    const items27 = [intl29.string(getSystemLocale.t["Rba/Xn"])];
    return items27;
  } else if (set.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS === nextResult) {
    const intl28 = getSystemLocale.intl;
    const items28 = [intl28.string(getSystemLocale.t.xeNgGI)];
    return items28;
  } else if (set.OAuth2Scopes.ACTIVITIES_READ === nextResult) {
    const intl27 = getSystemLocale.intl;
    const items29 = [intl27.string(getSystemLocale.t["4+tSce"])];
    return items29;
  } else if (set.OAuth2Scopes.ACTIVITIES_WRITE === nextResult) {
    const intl26 = getSystemLocale.intl;
    const items30 = [intl26.string(getSystemLocale.t["6OsWXX"])];
    return items30;
  } else if (set.OAuth2Scopes.RELATIONSHIPS_READ === nextResult) {
    const intl25 = getSystemLocale.intl;
    const items31 = [intl25.string(getSystemLocale.t["521/7W"])];
    return items31;
  } else if (set.OAuth2Scopes.RELATIONSHIPS_WRITE === nextResult) {
    const intl24 = getSystemLocale.intl;
    const items32 = [intl24.string(getSystemLocale.t["qR/txQ"])];
    return items32;
  } else if (set.OAuth2Scopes.VOICE === nextResult) {
    const intl23 = getSystemLocale.intl;
    const items33 = [intl23.string(getSystemLocale.t.XK5zdO)];
    return items33;
  } else if (set.OAuth2Scopes.DM_CHANNELS_READ === nextResult) {
    const intl22 = getSystemLocale.intl;
    const items34 = [intl22.string(getSystemLocale.t.w8emlT)];
    return items34;
  } else if (set.OAuth2Scopes.ROLE_CONNECTIONS_WRITE === nextResult) {
    const intl21 = getSystemLocale.intl;
    const items35 = [intl21.string(getSystemLocale.t.Bv0wZj)];
    return items35;
  } else if (set.OAuth2Scopes.PRESENCES_READ === nextResult) {
    const intl20 = getSystemLocale.intl;
    const items36 = [intl20.string(getSystemLocale.t.JUWeyf)];
    return items36;
  } else if (set.OAuth2Scopes.PRESENCES_WRITE === nextResult) {
    const intl19 = getSystemLocale.intl;
    const items37 = [intl19.string(getSystemLocale.t.apHLwv)];
    return items37;
  } else if (set.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ === nextResult) {
    const intl18 = getSystemLocale.intl;
    const items38 = [intl18.string(getSystemLocale.t.FHeB8p)];
    return items38;
  } else if (set.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE === nextResult) {
    const intl17 = getSystemLocale.intl;
    const items39 = [intl17.string(getSystemLocale.t["mdh+xY"])];
    return items39;
  } else if (set.OAuth2Scopes.GATEWAY_CONNECT === nextResult) {
    const intl16 = getSystemLocale.intl;
    const items40 = [intl16.string(getSystemLocale.t["uJd+85"])];
    return items40;
  } else if (set.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE === nextResult) {
    const intl15 = getSystemLocale.intl;
    const items41 = [intl15.string(getSystemLocale.t.hycwLK)];
    return items41;
  } else if (set.OAuth2Scopes.ACTIVITIES_INVITES_WRITE === nextResult) {
    const intl14 = getSystemLocale.intl;
    const items42 = [intl14.string(getSystemLocale.t.IM4Cje)];
    return items42;
  } else if (set.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl13 = getSystemLocale.intl;
    const items43 = [intl13.string(getSystemLocale.t["1zioRF"])];
    return items43;
  } else if (set.OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl12 = getSystemLocale.intl;
    const items44 = [intl12.string(getSystemLocale.t["4l1DWw"])];
    return items44;
  } else if (set.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE === nextResult) {
    const intl7 = getSystemLocale.intl;
    const items45 = [intl7.string(getSystemLocale.t.Pl1dTW), , , ];
    const intl8 = getSystemLocale.intl;
    items45[1] = intl8.string(getSystemLocale.t.mPRcyT);
    const intl9 = getSystemLocale.intl;
    items45[2] = intl9.string(getSystemLocale.t.F7J4NE);
    const intl10 = getSystemLocale.intl;
    items45[3] = intl10.string(getSystemLocale.t.syJLx9);
    if (!c2.includes(set.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl11 = getSystemLocale.intl;
      items45.push(intl11.string(getSystemLocale.t["1zioRF"]));
    }
    return items45;
  } else if (set.OAuth2Scopes.SDK_SOCIAL_LAYER === nextResult) {
    const intl = getSystemLocale.intl;
    const items46 = [intl.string(getSystemLocale.t.Pl1dTW), , , , ];
    const intl2 = getSystemLocale.intl;
    items46[1] = intl2.string(getSystemLocale.t["hc/+yg"]);
    const intl3 = getSystemLocale.intl;
    items46[2] = intl3.string(getSystemLocale.t.mPRcyT);
    const intl4 = getSystemLocale.intl;
    items46[3] = intl4.string(getSystemLocale.t.F7J4NE);
    const intl5 = getSystemLocale.intl;
    items46[4] = intl5.string(getSystemLocale.t["2wxXX9"]);
    if (!c2.includes(set.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl6 = getSystemLocale.intl;
      items46.push(intl6.string(getSystemLocale.t["1zioRF"]));
    }
    return items46;
  } else {
    const items47 = [nextResult];
    return items47;
  }
};
export const isSocialLayerUmbrellaScope = function isSocialLayerUmbrellaScope(item) {
  return item === set.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE || item === set.OAuth2Scopes.SDK_SOCIAL_LAYER;
};
export const getSecurityMessage = function getSecurityMessage(scopes) {
  if (!scopes.includes(set.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE)) {
    if (!scopes.includes(set.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
      if (!scopes.includes(set.OAuth2Scopes.MESSAGES_READ)) {
        if (!scopes.includes(set.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ)) {
          const intl = getSystemLocale.intl;
          let formatResult = intl.format(getSystemLocale.t["TeL+Ct"], {});
        }
      }
      const intl2 = getSystemLocale.intl;
      formatResult = intl2.format(getSystemLocale.t.Soy7jJ, {});
    }
    return formatResult;
  }
  const intl3 = getSystemLocale.intl;
  formatResult = intl3.format(getSystemLocale.t.o0GMBD, {});
};