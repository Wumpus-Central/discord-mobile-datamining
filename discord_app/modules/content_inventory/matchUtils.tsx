// === Module 8554: isMatchingListeningActivity ===

// Module 8554 (isMatchingListeningActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import CRUNCHYROLL_LINK_DEST_ORIGIN from "CRUNCHYROLL_LINK_DEST_ORIGIN" /* 8555 */;
import SPOTIFY_APP_PROTOCOL from "SPOTIFY_APP_PROTOCOL" /* 8557 */;
import isPlayedGameEntry from "isPlayedGameEntry" /* 8558 */;
import isCrunchyrollActivityDefault from "isCrunchyrollActivity" /* 8561 */;

function isMatchingListeningActivity(closure_0, party) {
  if (obj.isListenedSessionEntry(closure_0)) {
    const first = closure_0.extra.entries[0];
    let provider;
    if (first != null) {
      const media = first.media;
      if (media != null) {
        provider = media.provider;
      }
    }
    let isTopArtistEntryResult = provider === tmp(8560).ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    isTopArtistEntryResult = tmp(8558).isTopArtistEntry(closure_0);
    if (isTopArtistEntryResult) {
      isTopArtistEntryResult = closure_0.extra.media.provider === tmp(8560).ContentInventoryListenedMediaProvider.SPOTIFY;
    }
    const tmpResult = tmp(8558);
  }
  let tmp9Result = isTopArtistEntryResult;
  if (tmp9Result) {
    party = party.party;
    let id;
    if (party != null) {
      id = party.id;
    }
    tmp9Result = isSpotifyParty(id);
    const tmp9 = isSpotifyParty;
  }
  return tmp9Result;
}
const ActivityTypes = ME.ActivityTypes;
const CRUNCHYROLL_CLIENT_ID = CRUNCHYROLL_LINK_DEST_ORIGIN.CRUNCHYROLL_CLIENT_ID;
const isSpotifyParty = SPOTIFY_APP_PROTOCOL.isSpotifyParty;
const result = set.fileFinishedImporting("modules/content_inventory/matchUtils.tsx");

export const isSpotifyEntry = function isSpotifyEntry(extra) {
  if (obj.isListenedSessionEntry(extra)) {
    const first = extra.extra.entries[0];
    let provider;
    if (first != null) {
      const media = first.media;
      if (media != null) {
        provider = media.provider;
      }
    }
    let isTopArtistEntryResult = provider === tmp(8560).ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    isTopArtistEntryResult = tmp(8558).isTopArtistEntry(extra);
    if (isTopArtistEntryResult) {
      isTopArtistEntryResult = extra.extra.media.provider === tmp(8560).ContentInventoryListenedMediaProvider.SPOTIFY;
    }
    const tmpResult = tmp(8558);
  }
  return isTopArtistEntryResult;
};
export const isCrunchyrollEntry = function isCrunchyrollEntry(extra) {
  let isWatchedMediaEntryResult = isPlayedGameEntry.isWatchedMediaEntry(extra);
  if (isWatchedMediaEntryResult) {
    isWatchedMediaEntryResult = extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
  }
  return isWatchedMediaEntryResult;
};
export const isMatchingApplicationActivity = function isMatchingApplicationActivity(extra, type) {
  let game_name = extra.extra;
  let tmp = null != game_name;
  if (tmp) {
    let name = type;
    if ("application_id" in type && name.application_id === game_name.application_id) {
      tmp = tmp2;
    } else if ("game_name" in game_name) {
      name = name.name;
      game_name = game_name.game_name;
      let tmp3 = name === game_name;
    } else {
      tmp3 = "activity_name" in game_name && name.name === game_name.activity_name;
    }
  }
  return tmp;
};
export { isMatchingListeningActivity };
export const isMatchingWatchActivity = function isMatchingWatchActivity(closure_0, details) {
  const tmp2 = isCrunchyrollActivityDefault(details);
  let tmp3 = !tmp2;
  if (tmp2) {
    let isWatchedMediaEntryResult = isPlayedGameEntry.isWatchedMediaEntry(closure_0);
    if (isWatchedMediaEntryResult) {
      isWatchedMediaEntryResult = closure_0.extra.application_id === CRUNCHYROLL_CLIENT_ID;
    }
    tmp3 = !isWatchedMediaEntryResult;
    const obj = isPlayedGameEntry;
  }
  let tmp7 = !tmp3;
  if (!tmp3) {
    tmp7 = closure_0.extra.media_title === details.details;
  }
  return tmp7;
};
export const findMatchingEntry = function findMatchingEntry(entries, activity) {
  const _require = activity;
  const found = entries.filter(_require(7990).isEntryActive);
  if (activity.type === ActivityTypes.PLAYING) {
    const found1 = found.filter(tmp(8558).isGamingLikeEntry);
    let found2 = found1.find((extra) => {
      let name = closure_0;
      let game_name = extra.extra;
      let tmp = null != game_name;
      if (tmp) {
        if ("application_id" in name && name.application_id === game_name.application_id) {
          tmp = tmp2;
        } else if ("game_name" in game_name) {
          name = name.name;
          game_name = game_name.game_name;
          let tmp3 = name === game_name;
        } else {
          tmp3 = "activity_name" in game_name && name.name === game_name.activity_name;
        }
      }
      return tmp;
    });
  } else if (activity.type === tmp3.LISTENING) {
    const found3 = found.filter(tmp(8558).isListenedSessionEntry);
    found2 = found3.find((arg0) => closure_1_6(arg0, closure_0));
  } else if (activity.type === tmp3.WATCHING) {
    const found4 = entries.filter(tmp(8558).isWatchedMediaEntry);
    found2 = found4.find((extra) => {
      const tmp3 = closure_1_1(closure_1_2[5])(activity);
      let tmp4 = !tmp3;
      if (tmp3) {
        let isWatchedMediaEntryResult = activity(closure_1_2[3]).isWatchedMediaEntry(extra);
        if (isWatchedMediaEntryResult) {
          isWatchedMediaEntryResult = extra.extra.application_id === closure_1_4;
        }
        tmp4 = !isWatchedMediaEntryResult;
        const obj = activity(closure_1_2[3]);
      }
      let tmp8 = !tmp4;
      if (!tmp4) {
        tmp8 = extra.extra.media_title === activity.details;
      }
      return tmp8;
    });
  }
  return found2;
};