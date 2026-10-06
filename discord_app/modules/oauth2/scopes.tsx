// discord_app/modules/oauth2/scopes.tsx
import intl65 from "../../intl/index.native.tsx";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items = [
  () => {
    const intl = intl65.intl;
    return intl.string(intl65.t["6xfSCq"]);
  },
  () => {
    const intl = intl65.intl;
    return intl.string(intl65.t.ymSk0r);
  },
  () => {
    const intl = intl65.intl;
    return intl.string(intl65.t.EnN7c5);
  },
  () => {
    const intl = intl65.intl;
    return intl.string(intl65.t["4wMpBs"]);
  },
  () => {
    const intl = intl65.intl;
    return intl.string(intl65.t.CncpnK);
  },
  () => {
    const intl = intl65.intl;
    return intl.string(intl65.t.X9pGvJ);
  },
  () => {
    const intl = intl65.intl;
    return intl.string(intl65.t.sGOSG4);
  },
  () => {
    const intl = intl65.intl;
    return intl.string(intl65.t.JfibUq);
  },
];
let items1 = [
  OAuth2Scopes.OAuth2Scopes.BOT,
  OAuth2Scopes.OAuth2Scopes.OPENID,
  OAuth2Scopes.OAuth2Scopes.IDENTIFY,
  OAuth2Scopes.OAuth2Scopes.IDENTIFY_PREMIUM,
  OAuth2Scopes.OAuth2Scopes.EMAIL,
  OAuth2Scopes.OAuth2Scopes.CONNECTIONS,
  OAuth2Scopes.OAuth2Scopes.MESSAGES_READ,
  OAuth2Scopes.OAuth2Scopes.GUILDS,
  OAuth2Scopes.OAuth2Scopes.GUILDS_JOIN,
  OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ,
  OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ,
  OAuth2Scopes.OAuth2Scopes.GDM_JOIN,
  OAuth2Scopes.OAuth2Scopes.RPC,
  OAuth2Scopes.OAuth2Scopes.RPC_NOTIFICATIONS_READ,
  OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ,
  OAuth2Scopes.OAuth2Scopes.RPC_VOICE_WRITE,
  OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_READ,
  OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_WRITE,
  OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_READ,
  OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_WRITE,
  OAuth2Scopes.OAuth2Scopes.RPC_ACTIVITIES_WRITE,
  OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE,
  OAuth2Scopes.OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE,
  OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD,
  OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_READ,
  OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS,
  OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE,
  OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE,
  OAuth2Scopes.OAuth2Scopes.APPLICATIONS_STORE_UPDATE,
  OAuth2Scopes.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS,
  OAuth2Scopes.OAuth2Scopes.ACTIVITIES_INVITES_WRITE,
  OAuth2Scopes.OAuth2Scopes.ACTIVITIES_READ,
  OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE,
  OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_READ,
  OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_WRITE,
  OAuth2Scopes.OAuth2Scopes.VOICE,
  OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ,
  OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ,
  OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_RELATIONSHIPS_READ,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_READ,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_MESSAGES_READ,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_CHANNELS_READ,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_CHANNELS_MESSAGES_READ,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_ACTIVITIES_WRITE,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_MENTIONS_READ,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_MESSAGES_SEARCH,
  OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_MESSAGES_SEARCH,
  OAuth2Scopes.OAuth2Scopes.ROLE_CONNECTIONS_WRITE,
  OAuth2Scopes.OAuth2Scopes.PRESENCES_READ,
  OAuth2Scopes.OAuth2Scopes.PRESENCES_WRITE,
  OAuth2Scopes.OAuth2Scopes.GATEWAY_CONNECT,
  OAuth2Scopes.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE,
  OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE,
  OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER,
];
const concat = items1.concat;
let items2 = [OAuth2Scopes.OAuth2Scopes.WEBHOOK_INCOMING, OAuth2Scopes.OAuth2Scopes.BOT];
const combined = concat(items2);
const result = size.fileFinishedImporting("modules/oauth2/scopes.tsx");

export const FAKE_SCOPES = items;
export const OrderedAccountScopes = items1;
export const ValidScopes = combined;
export const RemovedScopes = ["rpc.api"];
export const getScopeNames = function getScopeNames(nextResult, c2) {
  if (OAuth2Scopes.OAuth2Scopes.IDENTIFY === nextResult) {
    const intl64 = intl65.intl;
    const items = [intl64.string(intl65.t.DD9KQh)];
    return items;
  } else if (OAuth2Scopes.OAuth2Scopes.IDENTIFY_PREMIUM === nextResult) {
    const intl63 = intl65.intl;
    const items1 = [intl63.string(intl65.t.xhQsxx)];
    return items1;
  } else if (OAuth2Scopes.OAuth2Scopes.OPENID === nextResult) {
    const intl62 = intl65.intl;
    const items2 = [intl62.string(intl65.t.R5IKv1)];
    return items2;
  } else if (OAuth2Scopes.OAuth2Scopes.EMAIL === nextResult) {
    const intl61 = intl65.intl;
    const items3 = [intl61.string(intl65.t.rvFS2t)];
    return items3;
  } else if (OAuth2Scopes.OAuth2Scopes.BOT === nextResult) {
    const intl60 = intl65.intl;
    const items4 = [intl60.string(intl65.t.pRpdox)];
    return items4;
  } else if (OAuth2Scopes.OAuth2Scopes.CONNECTIONS === nextResult) {
    const intl59 = intl65.intl;
    const items5 = [intl59.string(intl65.t["1AwaU1"])];
    return items5;
  } else if (OAuth2Scopes.OAuth2Scopes.MESSAGES_READ === nextResult) {
    const intl58 = intl65.intl;
    const items6 = [intl58.string(intl65.t.jVXrHb)];
    return items6;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS === nextResult) {
    const intl57 = intl65.intl;
    const items7 = [intl57.string(intl65.t.QKGJkC)];
    return items7;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_JOIN === nextResult) {
    const intl56 = intl65.intl;
    const items8 = [intl56.string(intl65.t.ETGDR9)];
    return items8;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ === nextResult) {
    let items10;
    const hasItem = c2.includes(OAuth2Scopes.OAuth2Scopes.VOICE);
    const intl55 = intl65.intl;
    const string = intl55.string;
    const t = intl65.t;
    if (hasItem) {
      const items9 = [string(t.OSvmfH)];
      items10 = items9;
    } else {
      items10 = [string(t.o6M1aS)];
    }
    return items10;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ === nextResult) {
    const intl54 = intl65.intl;
    const items11 = [intl54.string(intl65.t.BWGAgt)];
    return items11;
  } else if (OAuth2Scopes.OAuth2Scopes.GDM_JOIN === nextResult) {
    const intl53 = intl65.intl;
    const items12 = [intl53.string(intl65.t["55B4wA"])];
    return items12;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC === nextResult) {
    const intl52 = intl65.intl;
    const items13 = [intl52.string(intl65.t.EDBEeK)];
    return items13;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_NOTIFICATIONS_READ === nextResult) {
    const intl51 = intl65.intl;
    const items14 = [intl51.string(intl65.t["6kDHWV"])];
    return items14;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VOICE_WRITE === nextResult) {
    const intl50 = intl65.intl;
    const items15 = [intl50.string(intl65.t["531s7c"])];
    return items15;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_READ === nextResult) {
    const intl49 = intl65.intl;
    const items16 = [intl49.string(intl65.t.zbUSWO)];
    return items16;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_WRITE === nextResult) {
    const intl48 = intl65.intl;
    const items17 = [intl48.string(intl65.t["y+MdAM"])];
    return items17;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_READ === nextResult) {
    const intl47 = intl65.intl;
    const items18 = [intl47.string(intl65.t.b0i0CO)];
    return items18;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_WRITE === nextResult) {
    const intl46 = intl65.intl;
    const items19 = [intl46.string(intl65.t["9Rmxux"])];
    return items19;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ === nextResult) {
    const intl45 = intl65.intl;
    const items20 = [intl45.string(intl65.t.rznmpz)];
    return items20;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_ACTIVITIES_WRITE === nextResult) {
    const intl44 = intl65.intl;
    const items21 = [intl44.string(intl65.t.KQwJDf)];
    return items21;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD === nextResult) {
    const intl43 = intl65.intl;
    const items22 = [intl43.string(intl65.t.Iwbtgk)];
    return items22;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_READ === nextResult) {
    const intl42 = intl65.intl;
    const items23 = [intl42.string(intl65.t.ZkZCCW)];
    return items23;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS === nextResult) {
    const intl41 = intl65.intl;
    const items24 = [intl41.string(intl65.t.H4q49X)];
    return items24;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE === nextResult) {
    const intl40 = intl65.intl;
    const items25 = [intl40.string(intl65.t.mxeq6u)];
    return items25;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE === nextResult) {
    const intl39 = intl65.intl;
    const items26 = [intl39.string(intl65.t["7SIoW7"])];
    return items26;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_STORE_UPDATE === nextResult) {
    const intl38 = intl65.intl;
    const items27 = [intl38.string(intl65.t["Rba/Xn"])];
    return items27;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS === nextResult) {
    const intl37 = intl65.intl;
    const items28 = [intl37.string(intl65.t.xeNgGI)];
    return items28;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_READ === nextResult) {
    const intl36 = intl65.intl;
    const items29 = [intl36.string(intl65.t["4+tSce"])];
    return items29;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE === nextResult) {
    const intl35 = intl65.intl;
    const items30 = [intl35.string(intl65.t["6OsWXX"])];
    return items30;
  } else if (OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_READ === nextResult) {
    const intl34 = intl65.intl;
    const items31 = [intl34.string(intl65.t["521/7W"])];
    return items31;
  } else if (OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_WRITE === nextResult) {
    const intl33 = intl65.intl;
    const items32 = [intl33.string(intl65.t["qR/txQ"])];
    return items32;
  } else if (OAuth2Scopes.OAuth2Scopes.VOICE === nextResult) {
    const intl32 = intl65.intl;
    const items33 = [intl32.string(intl65.t.XK5zdO)];
    return items33;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ === nextResult) {
    const intl31 = intl65.intl;
    const items34 = [intl31.string(intl65.t.w8emlT)];
    return items34;
  } else if (OAuth2Scopes.OAuth2Scopes.ROLE_CONNECTIONS_WRITE === nextResult) {
    const intl30 = intl65.intl;
    const items35 = [intl30.string(intl65.t.Bv0wZj)];
    return items35;
  } else if (OAuth2Scopes.OAuth2Scopes.PRESENCES_READ === nextResult) {
    const intl29 = intl65.intl;
    const items36 = [intl29.string(intl65.t.JUWeyf)];
    return items36;
  } else if (OAuth2Scopes.OAuth2Scopes.PRESENCES_WRITE === nextResult) {
    const intl28 = intl65.intl;
    const items37 = [intl28.string(intl65.t.apHLwv)];
    return items37;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ === nextResult) {
    const intl27 = intl65.intl;
    const items38 = [intl27.string(intl65.t.FHeB8p)];
    return items38;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE === nextResult) {
    const intl26 = intl65.intl;
    const items39 = [intl26.string(intl65.t["mdh+xY"])];
    return items39;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_RELATIONSHIPS_READ === nextResult) {
    const intl25 = intl65.intl;
    const items40 = [intl25.string(intl65.t["521/7W"])];
    return items40;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_READ === nextResult) {
    const intl24 = intl65.intl;
    const items41 = [intl24.string(intl65.t.w8emlT)];
    return items41;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_MESSAGES_READ === nextResult) {
    const intl23 = intl65.intl;
    const items42 = [intl23.string(intl65.t.FHeB8p)];
    return items42;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_DM_CHANNELS_MESSAGES_SEARCH === nextResult) {
    const intl22 = intl65.intl;
    const items43 = [intl22.string(intl65.t.UVkUVk)];
    return items43;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_CHANNELS_READ === nextResult) {
    const intl21 = intl65.intl;
    const items44 = [intl21.string(intl65.t.BWGAgt)];
    return items44;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_CHANNELS_MESSAGES_READ === nextResult) {
    const intl20 = intl65.intl;
    const items45 = [intl20.string(intl65.t["+7+Hvl"])];
    return items45;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_GUILDS_MESSAGES_SEARCH === nextResult) {
    const intl19 = intl65.intl;
    const items46 = [intl19.string(intl65.t.N1P8Wp)];
    return items46;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_MENTIONS_READ === nextResult) {
    const intl18 = intl65.intl;
    const items47 = [intl18.string(intl65.t.Alcf2G)];
    return items47;
  } else if (OAuth2Scopes.OAuth2Scopes.PERSONAL_ACTIVITIES_WRITE === nextResult) {
    const intl17 = intl65.intl;
    const items48 = [intl17.string(intl65.t["6OsWXX"])];
    return items48;
  } else if (OAuth2Scopes.OAuth2Scopes.GATEWAY_CONNECT === nextResult) {
    const intl16 = intl65.intl;
    const items49 = [intl16.string(intl65.t["uJd+85"])];
    return items49;
  } else if (OAuth2Scopes.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE === nextResult) {
    const intl15 = intl65.intl;
    const items50 = [intl15.string(intl65.t.hycwLK)];
    return items50;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_INVITES_WRITE === nextResult) {
    const intl14 = intl65.intl;
    const items51 = [intl14.string(intl65.t.IM4Cje)];
    return items51;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl13 = intl65.intl;
    const items52 = [intl13.string(intl65.t["1zioRF"])];
    return items52;
  } else if (OAuth2Scopes.OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl12 = intl65.intl;
    const items53 = [intl12.string(intl65.t["4l1DWw"])];
    return items53;
  } else if (OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE === nextResult) {
    const intl7 = intl65.intl;
    const items54 = [intl7.string(intl65.t.Pl1dTW), , ,];
    const intl8 = intl65.intl;
    items54[1] = intl8.string(intl65.t.mPRcyT);
    const intl9 = intl65.intl;
    items54[2] = intl9.string(intl65.t.F7J4NE);
    const intl10 = intl65.intl;
    items54[3] = intl10.string(intl65.t.syJLx9);
    if (!c2.includes(OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const push2 = items54.push;
      const intl11 = intl65.intl;
      push2(intl11.string(intl65.t["1zioRF"]));
    }
    return items54;
  } else if (OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER === nextResult) {
    const intl = intl65.intl;
    const items55 = [intl.string(intl65.t.Pl1dTW), , , ,];
    const intl2 = intl65.intl;
    items55[1] = intl2.string(intl65.t["hc/+yg"]);
    const intl3 = intl65.intl;
    items55[2] = intl3.string(intl65.t.mPRcyT);
    const intl4 = intl65.intl;
    items55[3] = intl4.string(intl65.t.F7J4NE);
    const intl5 = intl65.intl;
    items55[4] = intl5.string(intl65.t["2wxXX9"]);
    if (!c2.includes(OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const push = items55.push;
      const intl6 = intl65.intl;
      push(intl6.string(intl65.t["1zioRF"]));
    }
    return items55;
  } else {
    const items56 = [nextResult];
    return items56;
  }
};
export const isSocialLayerUmbrellaScope = function isSocialLayerUmbrellaScope(item) {
  const tmp3 =
    item === OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE || item === OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER;
  return tmp3;
};
export const getSecurityMessage = function getSecurityMessage(scopes) {
  if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE)) {
    let formatResult;
    if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER)) {
      const someResult = scopes.some((item) => {
        const SCOPES_CAN_READ_MESSAGES = OAuth2Scopes.OAuth2ScopesSets.SCOPES_CAN_READ_MESSAGES;
        return SCOPES_CAN_READ_MESSAGES.has(item);
      });
      const intl = intl65.intl;
      const format = intl.format;
      const t = intl65.t;
      if (someResult) {
        formatResult = format(t.Soy7jJ, {});
      } else {
        formatResult = format(t["TeL+Ct"], {});
      }
    }
    return formatResult;
  }
  const intl2 = intl65.intl;
  formatResult = intl2.format(intl65.t.o0GMBD, {});
};
