// discord_app/modules/oauth2/scopes.tsx
import util from "../../intl/index.native.tsx";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import size from "../../../_runtime/metro/00002__.js";

let items = [
  () => {
    const intl = util.intl;
    return intl.string(util.t["6xfSCq"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.ymSk0r);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.EnN7c5);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["4wMpBs"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.CncpnK);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.X9pGvJ);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.sGOSG4);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.JfibUq);
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
  OAuth2Scopes.OAuth2Scopes.ROLE_CONNECTIONS_WRITE,
  OAuth2Scopes.OAuth2Scopes.PRESENCES_READ,
  OAuth2Scopes.OAuth2Scopes.PRESENCES_WRITE,
  OAuth2Scopes.OAuth2Scopes.GATEWAY_CONNECT,
  OAuth2Scopes.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE,
  OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE,
  OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER,
];
let items2 = [OAuth2Scopes.OAuth2Scopes.WEBHOOK_INCOMING, OAuth2Scopes.OAuth2Scopes.BOT];
const combined = items1.concat(items2);
const result = size.fileFinishedImporting("modules/oauth2/scopes.tsx");

export const FAKE_SCOPES = items;
export const OrderedAccountScopes = items1;
export const ValidScopes = combined;
export const RemovedScopes = ["rpc.api"];
export const getScopeNames = function getScopeNames(nextResult, c2) {
  if (OAuth2Scopes.OAuth2Scopes.IDENTIFY === nextResult) {
    const intl55 = util.intl;
    const items = [intl55.string(util.t.DD9KQh)];
    return items;
  } else if (OAuth2Scopes.OAuth2Scopes.IDENTIFY_PREMIUM === nextResult) {
    const intl54 = util.intl;
    const items1 = [intl54.string(util.t.xhQsxx)];
    return items1;
  } else if (OAuth2Scopes.OAuth2Scopes.OPENID === nextResult) {
    const intl53 = util.intl;
    const items2 = [intl53.string(util.t.R5IKv1)];
    return items2;
  } else if (OAuth2Scopes.OAuth2Scopes.EMAIL === nextResult) {
    const intl52 = util.intl;
    const items3 = [intl52.string(util.t.rvFS2t)];
    return items3;
  } else if (OAuth2Scopes.OAuth2Scopes.BOT === nextResult) {
    const intl51 = util.intl;
    const items4 = [intl51.string(util.t.pRpdox)];
    return items4;
  } else if (OAuth2Scopes.OAuth2Scopes.CONNECTIONS === nextResult) {
    const intl50 = util.intl;
    const items5 = [intl50.string(util.t["1AwaU1"])];
    return items5;
  } else if (OAuth2Scopes.OAuth2Scopes.MESSAGES_READ === nextResult) {
    const intl49 = util.intl;
    const items6 = [intl49.string(util.t.jVXrHb)];
    return items6;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS === nextResult) {
    const intl48 = util.intl;
    const items7 = [intl48.string(util.t.QKGJkC)];
    return items7;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_JOIN === nextResult) {
    const intl47 = util.intl;
    const items8 = [intl47.string(util.t.ETGDR9)];
    return items8;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_MEMBERS_READ === nextResult) {
    const hasItem = c2.includes(OAuth2Scopes.OAuth2Scopes.VOICE);
    const intl46 = util.intl;
    const string = intl46.string;
    const t = util.t;
    if (hasItem) {
      const items9 = [string(t.OSvmfH)];
      let items10 = items9;
    } else {
      items10 = [string(t.o6M1aS)];
    }
    return items10;
  } else if (OAuth2Scopes.OAuth2Scopes.GUILDS_CHANNELS_READ === nextResult) {
    const intl45 = util.intl;
    const items11 = [intl45.string(util.t.BWGAgt)];
    return items11;
  } else if (OAuth2Scopes.OAuth2Scopes.GDM_JOIN === nextResult) {
    const intl44 = util.intl;
    const items12 = [intl44.string(util.t["55B4wA"])];
    return items12;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC === nextResult) {
    const intl43 = util.intl;
    const items13 = [intl43.string(util.t.EDBEeK)];
    return items13;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_NOTIFICATIONS_READ === nextResult) {
    const intl42 = util.intl;
    const items14 = [intl42.string(util.t["6kDHWV"])];
    return items14;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VOICE_WRITE === nextResult) {
    const intl41 = util.intl;
    const items15 = [intl41.string(util.t["531s7c"])];
    return items15;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_READ === nextResult) {
    const intl40 = util.intl;
    const items16 = [intl40.string(util.t.zbUSWO)];
    return items16;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VIDEO_WRITE === nextResult) {
    const intl39 = util.intl;
    const items17 = [intl39.string(util.t["y+MdAM"])];
    return items17;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_READ === nextResult) {
    const intl38 = util.intl;
    const items18 = [intl38.string(util.t.b0i0CO)];
    return items18;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_SCREENSHARE_WRITE === nextResult) {
    const intl37 = util.intl;
    const items19 = [intl37.string(util.t["9Rmxux"])];
    return items19;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_VOICE_READ === nextResult) {
    const intl36 = util.intl;
    const items20 = [intl36.string(util.t.rznmpz)];
    return items20;
  } else if (OAuth2Scopes.OAuth2Scopes.RPC_ACTIVITIES_WRITE === nextResult) {
    const intl35 = util.intl;
    const items21 = [intl35.string(util.t.KQwJDf)];
    return items21;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_UPLOAD === nextResult) {
    const intl34 = util.intl;
    const items22 = [intl34.string(util.t.Iwbtgk)];
    return items22;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_BUILDS_READ === nextResult) {
    const intl33 = util.intl;
    const items23 = [intl33.string(util.t.ZkZCCW)];
    return items23;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS === nextResult) {
    const intl32 = util.intl;
    const items24 = [intl32.string(util.t.H4q49X)];
    return items24;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_UPDATE === nextResult) {
    const intl31 = util.intl;
    const items25 = [intl31.string(util.t.mxeq6u)];
    return items25;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS_PERMISSIONS_UPDATE === nextResult) {
    const intl30 = util.intl;
    const items26 = [intl30.string(util.t["7SIoW7"])];
    return items26;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_STORE_UPDATE === nextResult) {
    const intl29 = util.intl;
    const items27 = [intl29.string(util.t["Rba/Xn"])];
    return items27;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATIONS_ENTITLEMENTS === nextResult) {
    const intl28 = util.intl;
    const items28 = [intl28.string(util.t.xeNgGI)];
    return items28;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_READ === nextResult) {
    const intl27 = util.intl;
    const items29 = [intl27.string(util.t["4+tSce"])];
    return items29;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_WRITE === nextResult) {
    const intl26 = util.intl;
    const items30 = [intl26.string(util.t["6OsWXX"])];
    return items30;
  } else if (OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_READ === nextResult) {
    const intl25 = util.intl;
    const items31 = [intl25.string(util.t["521/7W"])];
    return items31;
  } else if (OAuth2Scopes.OAuth2Scopes.RELATIONSHIPS_WRITE === nextResult) {
    const intl24 = util.intl;
    const items32 = [intl24.string(util.t["qR/txQ"])];
    return items32;
  } else if (OAuth2Scopes.OAuth2Scopes.VOICE === nextResult) {
    const intl23 = util.intl;
    const items33 = [intl23.string(util.t.XK5zdO)];
    return items33;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_READ === nextResult) {
    const intl22 = util.intl;
    const items34 = [intl22.string(util.t.w8emlT)];
    return items34;
  } else if (OAuth2Scopes.OAuth2Scopes.ROLE_CONNECTIONS_WRITE === nextResult) {
    const intl21 = util.intl;
    const items35 = [intl21.string(util.t.Bv0wZj)];
    return items35;
  } else if (OAuth2Scopes.OAuth2Scopes.PRESENCES_READ === nextResult) {
    const intl20 = util.intl;
    const items36 = [intl20.string(util.t.JUWeyf)];
    return items36;
  } else if (OAuth2Scopes.OAuth2Scopes.PRESENCES_WRITE === nextResult) {
    const intl19 = util.intl;
    const items37 = [intl19.string(util.t.apHLwv)];
    return items37;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_READ === nextResult) {
    const intl18 = util.intl;
    const items38 = [intl18.string(util.t.FHeB8p)];
    return items38;
  } else if (OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE === nextResult) {
    const intl17 = util.intl;
    const items39 = [intl17.string(util.t["mdh+xY"])];
    return items39;
  } else if (OAuth2Scopes.OAuth2Scopes.GATEWAY_CONNECT === nextResult) {
    const intl16 = util.intl;
    const items40 = [intl16.string(util.t["uJd+85"])];
    return items40;
  } else if (OAuth2Scopes.OAuth2Scopes.PAYMENT_SOURCES_COUNTRY_CODE === nextResult) {
    const intl15 = util.intl;
    const items41 = [intl15.string(util.t.hycwLK)];
    return items41;
  } else if (OAuth2Scopes.OAuth2Scopes.ACTIVITIES_INVITES_WRITE === nextResult) {
    const intl14 = util.intl;
    const items42 = [intl14.string(util.t.IM4Cje)];
    return items42;
  } else if (OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl13 = util.intl;
    const items43 = [intl13.string(util.t["1zioRF"])];
    return items43;
  } else if (OAuth2Scopes.OAuth2Scopes.MANAGED_PLATFORM_APPLICATION_IDENTITIES_WRITE === nextResult) {
    const intl12 = util.intl;
    const items44 = [intl12.string(util.t["4l1DWw"])];
    return items44;
  } else if (OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE === nextResult) {
    const intl7 = util.intl;
    const items45 = [intl7.string(util.t.Pl1dTW), , ,];
    const intl8 = util.intl;
    items45[1] = intl8.string(util.t.mPRcyT);
    const intl9 = util.intl;
    items45[2] = intl9.string(util.t.F7J4NE);
    const intl10 = util.intl;
    items45[3] = intl10.string(util.t.syJLx9);
    if (!c2.includes(OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl11 = util.intl;
      items45.push(intl11.string(util.t["1zioRF"]));
    }
    return items45;
  } else if (OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER === nextResult) {
    const intl = util.intl;
    const items46 = [intl.string(util.t.Pl1dTW), , , ,];
    const intl2 = util.intl;
    items46[1] = intl2.string(util.t["hc/+yg"]);
    const intl3 = util.intl;
    items46[2] = intl3.string(util.t.mPRcyT);
    const intl4 = util.intl;
    items46[3] = intl4.string(util.t.F7J4NE);
    const intl5 = util.intl;
    items46[4] = intl5.string(util.t["2wxXX9"]);
    if (!c2.includes(OAuth2Scopes.OAuth2Scopes.APPLICATION_IDENTITIES_WRITE)) {
      const intl6 = util.intl;
      items46.push(intl6.string(util.t["1zioRF"]));
    }
    return items46;
  } else {
    const items47 = [nextResult];
    return items47;
  }
};
export const isSocialLayerUmbrellaScope = function isSocialLayerUmbrellaScope(item) {
  return (
    item === OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER_PRESENCE || item === OAuth2Scopes.OAuth2Scopes.SDK_SOCIAL_LAYER
  );
};
export const getSecurityMessage = function getSecurityMessage(scopes) {
  if (!scopes.includes(OAuth2Scopes.OAuth2Scopes.DM_CHANNELS_MESSAGES_WRITE)) {
    if (!scopes.includes(tmp(8339).OAuth2Scopes.SDK_SOCIAL_LAYER)) {
      if (!scopes.includes(tmp(8339).OAuth2Scopes.MESSAGES_READ)) {
        if (!scopes.includes(tmp(8339).OAuth2Scopes.DM_CHANNELS_MESSAGES_READ)) {
          const intl = tmp(1114).intl;
          let formatResult = intl.format(tmp(1114).t["TeL+Ct"], {});
        }
      }
      const intl2 = tmp(1114).intl;
      formatResult = intl2.format(tmp(1114).t.Soy7jJ, {});
    }
    return formatResult;
  }
  const intl3 = tmp(1114).intl;
  formatResult = intl3.format(tmp(1114).t.o0GMBD, {});
};
