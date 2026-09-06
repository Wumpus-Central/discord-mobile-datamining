// discord_app/modules/content_inventory/matchUtils.tsx
import Constants from "../../Constants.tsx";
import CrunchyrollConnectionConstants from "../connections/CrunchyrollConnectionConstants.tsx";
import SpotifyConstants from "../spotify/SpotifyConstants.tsx";
import ContentInventoryTypes from "ContentInventoryTypes.tsx";
import isCrunchyrollActivityDefault from "../activities/utils/isCrunchyrollActivity.tsx";
import size from "../../../_runtime/metro/00002__.js";

function isMatchingListeningActivity(extra, party) {
  if (obj.isListenedSessionEntry(extra)) {
    const first = extra.extra.entries[0];
    let provider;
    if (first != null) {
      const media = first.media;
      if (media != null) {
        provider = media.provider;
      }
    }
    let isTopArtistEntryResult = provider === tmp(8343).ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    isTopArtistEntryResult = tmp(8341).isTopArtistEntry(extra);
    if (isTopArtistEntryResult) {
      isTopArtistEntryResult = extra.extra.media.provider === tmp(8343).ContentInventoryListenedMediaProvider.SPOTIFY;
    }
    const tmpResult = tmp(8341);
  }
  let tmp9Result = isTopArtistEntryResult;
  if (tmp9Result) {
    party = party.party;
    let id;
    if (party != null) {
      id = party.id;
    }
    tmp9Result = isSpotifyParty(id);
  }
  return tmp9Result;
}
const ActivityTypes = Constants.ActivityTypes;
const CRUNCHYROLL_CLIENT_ID = CrunchyrollConnectionConstants.CRUNCHYROLL_CLIENT_ID;
const isSpotifyParty = SpotifyConstants.isSpotifyParty;
const result = size.fileFinishedImporting("modules/content_inventory/matchUtils.tsx");

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
    let isTopArtistEntryResult = provider === tmp(8343).ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    isTopArtistEntryResult = tmp(8341).isTopArtistEntry(extra);
    if (isTopArtistEntryResult) {
      isTopArtistEntryResult = extra.extra.media.provider === tmp(8343).ContentInventoryListenedMediaProvider.SPOTIFY;
    }
    const tmpResult = tmp(8341);
  }
  return isTopArtistEntryResult;
};
export const isCrunchyrollEntry = function isCrunchyrollEntry(extra) {
  let isWatchedMediaEntryResult = ContentInventoryTypes.isWatchedMediaEntry(extra);
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
export const isMatchingWatchActivity = function isMatchingWatchActivity(extra, details) {
  const tmp2 = isCrunchyrollActivityDefault(details);
  let tmp3 = !tmp2;
  if (tmp2) {
    let isWatchedMediaEntryResult = ContentInventoryTypes.isWatchedMediaEntry(extra);
    if (isWatchedMediaEntryResult) {
      isWatchedMediaEntryResult = extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
    }
    tmp3 = !isWatchedMediaEntryResult;
  }
  let tmp7 = !tmp3;
  if (!tmp3) {
    tmp7 = extra.extra.media_title === details.details;
  }
  return tmp7;
};
export const findMatchingEntry = function findMatchingEntry(entries, activity) {
  _require = activity;
  const found = entries.filter(require("utils").isEntryActive);
  if (activity.type === ActivityTypes.PLAYING) {
    const found1 = found.filter(tmp(8341).isGamingLikeEntry);
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
    const found3 = found.filter(tmp(8341).isListenedSessionEntry);
    found2 = found3.find((item) => isMatchingListeningActivity(item, closure_0));
  } else if (activity.type === tmp3.WATCHING) {
    const found4 = entries.filter(tmp(8341).isWatchedMediaEntry);
    found2 = found4.find((extra) => {
      const tmp3 = isCrunchyrollActivityDefault(activity);
      let tmp4 = !tmp3;
      if (tmp3) {
        let isWatchedMediaEntryResult = ContentInventoryTypes.isWatchedMediaEntry(extra);
        if (isWatchedMediaEntryResult) {
          isWatchedMediaEntryResult = extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
        }
        tmp4 = !isWatchedMediaEntryResult;
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
