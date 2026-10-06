// === Module 8026: SpotifyConstants ===

// Module 8026 (SpotifyConstants)
import Constants from "Constants" /* 1085 */;
import Platforms from "Platforms" /* 5449 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let str;
const spotify = "spotify";
let c1 = "spotify:";
const PlatformTypes = Constants.PlatformTypes;
const SpotifyResourceTypes = { TRACK: "track", ARTIST: "artist", ALBUM: "album", PLAYLIST: "playlist", EPISODE: "episode", SHOW: "show" };
const obj2 = {
  PROFILE: "" + "https://api.spotify.com/v1" + "/me",
  NOTIFICATIONS_PLAYER: "" + "https://api.spotify.com/v1" + "/me/notifications/player",
  PLAYER: "" + "https://api.spotify.com/v1" + "/me/player",
  PLAYER_DEVICES: "" + "https://api.spotify.com/v1" + "/me/player/devices",
  PLAYER_PLAY: "" + "https://api.spotify.com/v1" + "/me/player/play",
  PLAYER_PAUSE: "" + "https://api.spotify.com/v1" + "/me/player/pause",
  PLAYER_REPEAT: "" + "https://api.spotify.com/v1" + "/me/player/repeat",
  WEB_OPEN(ALBUM, album_id) {
    let str = mobile;
    if (mobile === undefined) {
      str = "desktop";
    }
    const encodeURIComponentResult = encodeURIComponent(ALBUM);
    const encodeURIComponentResult1 = encodeURIComponent(album_id);
    return "https://open.spotify.com/" + encodeURIComponentResult + "/" + encodeURIComponentResult1 + "?utm_source=discord&utm_medium=" + str;
  },
  IMAGE(arg0) {
    return "https://i.scdn.co/image/" + encodeURIComponent(arg0);
  },
  EMBED(arg0) {
    let str = arg1;
    if (arg1 === undefined) {
      str = "desktop";
    }
    return "https://open.spotify.com/embed" + arg0 + "?utm_source=discord&utm_medium=" + str;
  },
  PLAYER_OPEN(TRACK, sync_id, arg2) {
    let flag = arg2;
    if (arg2 === undefined) {
      flag = true;
    }
    let str = mobile;
    if (mobile === undefined) {
      str = "desktop";
    }
    let str2 = "";
    const encodeURIComponentResult = encodeURIComponent(TRACK);
    const encodeURIComponentResult1 = encodeURIComponent(sync_id);
    if (flag) {
      const _HermesInternal = HermesInternal;
      str2 = "?utm_source=discord&utm_medium=" + str;
    }
    return "" + spotify + ":" + encodeURIComponentResult + ":" + encodeURIComponentResult1 + str2;
  },
  WEB_HOME: "https://open.spotify.com/" + "?utm_source=discord&utm_medium=" + "desktop",
  PREMIUM_SITE: "https://www.spotify.com/premium/" + "?utm_source=discord&utm_medium=" + "desktop",
  INSTALL_ATTRIBUTION(Identifier) {
    return "https://app.adjust.com/bdyga9?campaign=" + Identifier;
  },
  APP_STORE: str,
  IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8"
};
const name = Platforms.get(PlatformTypes.SPOTIFY).name;
const _Object = Object;
str = "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8";
if (PlatformUtils.isAndroid()) {
  str = "https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US&gl=US";
}
const freezeResult = freeze(obj2);
const result = size.fileFinishedImporting("modules/spotify/SpotifyConstants.tsx");

export const SPOTIFY_APP_PROTOCOL = "spotify";
export const SPOTIFY_PARTY_PREFIX = "spotify:";
export const SPOTIFY_PLATFORM_NAME = name;
export const isSpotifyParty = function isSpotifyParty(id) {
  const startsWithResult = null != id && id.startsWith(c1);
  return startsWithResult;
};
export { SpotifyResourceTypes };
export const SpotifyActionTypes = { USER_ACTIVITY_PLAY: "user_activity_play", USER_ACTIVITY_SYNC: "user_activity_sync", EMBED_SYNC: "embed_sync" };
export const SPOTIFY_HOSTNAMES = ["open.spotify.com", "www.spotify.com"];
export const SpotifyEndpoints = freezeResult;
export const getSpotifyResourceType = function getSpotifyResourceType(str) {
  if (typeof str !== "string") {
    return null;
  } else if ("track" === str) {
    return obj.TRACK;
  } else if ("artist" === "artist") {
    return obj.ARTIST;
  } else if ("album" === "artist") {
    return obj.ALBUM;
  } else if ("playlist" === "artist") {
    return obj.PLAYLIST;
  } else if ("episode" === "artist") {
    return obj.EPISODE;
  } else if ("show" === "artist") {
    return obj.SHOW;
  } else {
    return null;
  }
};