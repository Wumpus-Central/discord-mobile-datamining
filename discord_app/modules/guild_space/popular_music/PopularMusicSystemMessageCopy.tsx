// === Module 8410: PopularMusicSystemMessageCopy ===

// Module 8410 (PopularMusicSystemMessageCopy)
import _modDef2440 from "module_2440" /* 2440 */;
import PopularMusicSystemMessageTypes from "PopularMusicSystemMessageTypes" /* 8409 */;
import size from "module_2" /* 2 */;

function getMusicSystemMessageFor(trackTitle, name2, BlHpAk) {
  let str = trackTitle.trackTitle;
  if (str == null) {
    str = "";
  }
  const obj = { trackTitle: str, artistName: null, username: null };
  let str2 = trackTitle.artistName;
  if (str2 == null) {
    str2 = "";
  }
  obj.artistName = str2;
  let str3 = name2;
  if (name2 == null) {
    str3 = "";
  }
  obj.username = str3;
  const event = trackTitle.event;
  if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_SONG_CHANGED === event) {
    if (null != trackTitle.trackTitle) {
      let Cf11AE = _modDef2440.vqPR3w;
    } else {
      Cf11AE = _modDef2440.Cf11AE;
    }
    const obj2 = { message: Cf11AE, values: obj };
    return obj2;
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_ARTIST_CHANGED === event) {
    if (null != trackTitle.artistName) {
      let ygm9YB = _modDef2440.ZbrKrk;
    } else {
      ygm9YB = _modDef2440.ygm9YB;
    }
    const obj3 = { message: ygm9YB, values: obj };
    return obj3;
  } else if (PopularMusicSystemMessageTypes.GuildSpaceMusicEvent.TOP_LISTENER_CHANGED === event) {
    if (null == name2) {
      let OlxQF3 = _modDef2440.OlxQF3;
    } else {
      OlxQF3 = BlHpAk;
    }
    const obj4 = { message: OlxQF3, values: obj };
    return obj4;
  } else {
    return null;
  }
}
const result = size.fileFinishedImporting("modules/guild_space/popular_music/PopularMusicSystemMessageCopy.tsx");

export function getMusicSystemMessage(result, name2) {
  return getMusicSystemMessageFor(result, name2, _modDef2440["k41/aX"]);
}
export function getMobileMusicSystemMessage(result, name) {
  return getMusicSystemMessageFor(result, name, _modDef2440.BlHpAk);
}