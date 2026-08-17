// discord_app/modules/spotify/SpotifyConstants.tsx
import getPlatformUserUrlDefault from "../../lib/Platforms.tsx";
import set from "../../utils/PlatformUtils.tsx";

const spotify = "spotify";
let c1 = "spotify:";
let obj = { TRACK: "track", ARTIST: "artist", ALBUM: "album", PLAYLIST: "playlist", EPISODE: "episode", SHOW: "show" };
obj = {
  PROFILE: "" + "https://api.spotify.com/v1" + "/me",
  NOTIFICATIONS_PLAYER: "" + "https://api.spotify.com/v1" + "/me/notifications/player",
  PLAYER: "" + "https://api.spotify.com/v1" + "/me/player",
  PLAYER_DEVICES: "" + "https://api.spotify.com/v1" + "/me/player/devices",
  PLAYER_PLAY: "" + "https://api.spotify.com/v1" + "/me/player/play",
  PLAYER_PAUSE: "" + "https://api.spotify.com/v1" + "/me/player/pause",
  PLAYER_REPEAT: "" + "https://api.spotify.com/v1" + "/me/player/repeat",
  WEB_OPEN(ALBUM, album_id, mobile) {
    let str = mobile;
    if (mobile === undefined) {
      str = "desktop";
    }
    const encodeURIComponentResult = encodeURIComponent(ALBUM);
    return "https://open.spotify.com/" + encodeURIComponentResult + "/" + encodeURIComponent(album_id) + "?utm_source=discord&utm_medium=" + str;
  },
  EMBED(arg0) {
    let str = arg1;
    if (arg1 === undefined) {
      str = "desktop";
    }
    return "https://open.spotify.com/embed" + arg0 + "?utm_source=discord&utm_medium=" + str;
  },
  PLAYER_OPEN(TRACK, album_id, arg2, mobile) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let str = mobile;
    if (mobile === undefined) {
      str = "desktop";
    }
    const encodeURIComponentResult = encodeURIComponent(TRACK);
    const tmp = spotify;
    let str2 = "";
    if (flag) {
      const _HermesInternal = HermesInternal;
      str2 = "?utm_source=discord&utm_medium=" + str;
    }
    return "" + tmp + ":" + encodeURIComponentResult + ":" + encodeURIComponent(album_id) + str2;
  },
  PREMIUM_SITE: "https://www.spotify.com/premium/" + "?utm_source=discord&utm_medium=" + "desktop",
  INSTALL_ATTRIBUTION(Identifier) {
    return "https://app.adjust.com/bdyga9?campaign=" + Identifier;
  },
  APP_STORE: null,
  IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
};
let str = "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8";
if (set.isAndroid()) {
  str = "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US";
}
obj[12] = str;
const frozen = Object.freeze(obj);
const result = set.fileFinishedImporting("modules/spotify/SpotifyConstants.tsx");

export const SPOTIFY_APP_PROTOCOL = "spotify";
export const SPOTIFY_PARTY_PREFIX = "spotify:";
export const SPOTIFY_PLATFORM_NAME = getPlatformUserUrlDefault.get(require("ME").PlatformTypes.SPOTIFY).name;
export const isSpotifyParty = function isSpotifyParty(id) {
  let startsWithResult = null != id;
  if (startsWithResult) {
    startsWithResult = id.startsWith(c1);
  }
  return startsWithResult;
};
export const SpotifyResourceTypes = obj;
export const SpotifyActionTypes = { USER_ACTIVITY_PLAY: "user_activity_play", USER_ACTIVITY_SYNC: "user_activity_sync", EMBED_SYNC: "embed_sync" };
export const SPOTIFY_HOSTNAMES = ["open.spotify.com", "www.spotify.com"];
export const SpotifyEndpoints = frozen;
export const getSpotifyResourceType = function getSpotifyResourceType(str) {
  if (typeof str !== "string") {
    return null;
  } else if ("track" === str) {
    return obj.TRACK;
  } else if ("artist" === str) {
    return obj.ARTIST;
  } else if ("album" === str) {
    return obj.ALBUM;
  } else if ("playlist" === str) {
    return obj.PLAYLIST;
  } else if ("episode" === str) {
    return obj.EPISODE;
  } else if ("show" === str) {
    return obj.SHOW;
  } else {
    return null;
  }
};