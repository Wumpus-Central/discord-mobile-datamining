import set from "set";
import set from "set";

const spotify = "spotify";
let c1 = "spotify:";
let obj = { TRACK: "track", ARTIST: "artist", ALBUM: "album", PLAYLIST: "playlist", EPISODE: "episode", SHOW: "show" };
obj = { PROFILE: null, NOTIFICATIONS_PLAYER: null, PLAYER: null, PLAYER_DEVICES: null, PLAYER_PLAY: null, PLAYER_PAUSE: null, PLAYER_REPEAT: null, WEB_OPEN: null, EMBED: null, PLAYER_OPEN: null, PREMIUM_SITE: null, INSTALL_ATTRIBUTION: null, APP_STORE: null, IOS_APP_STORE: "https://itunes.apple.com/us/app/spotify-music/id324684580?mt=8" };
obj[0] = "" + "https://api.spotify.com/v1" + "/me";
obj[1] = "" + "https://api.spotify.com/v1" + "/me/notifications/player";
obj[2] = "" + "https://api.spotify.com/v1" + "/me/player";
obj[3] = "" + "https://api.spotify.com/v1" + "/me/player/devices";
obj[4] = "" + "https://api.spotify.com/v1" + "/me/player/play";
obj[5] = "" + "https://api.spotify.com/v1" + "/me/player/pause";
obj[6] = "" + "https://api.spotify.com/v1" + "/me/player/repeat";
obj[7] = function WEB_OPEN(ALBUM, album_id, mobile) {
  let str = mobile;
  if (mobile === undefined) {
    str = "desktop";
  }
  const encodeURIComponentResult = encodeURIComponent(ALBUM);
  return "https://open.spotify.com/" + encodeURIComponentResult + "/" + encodeURIComponent(album_id) + "?utm_source=discord&utm_medium=" + str;
};
obj[8] = function EMBED(arg0) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "desktop";
  }
  return "https://open.spotify.com/embed" + arg0 + "?utm_source=discord&utm_medium=" + str;
};
obj[9] = function PLAYER_OPEN(TRACK, album_id, arg2, mobile) {
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
};
obj[10] = "https://www.spotify.com/premium/" + "?utm_source=discord&utm_medium=" + "desktop";
obj[11] = function INSTALL_ATTRIBUTION(Identifier) {
  return "https://app.adjust.com/bdyga9?campaign=" + Identifier;
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
export const SPOTIFY_PLATFORM_NAME = require("getPlatformUserUrl").get(require("ME").PlatformTypes.SPOTIFY).name;
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