// discord_app/modules/content_inventory/matchUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";
import SPOTIFY_APP_PROTOCOL from "../spotify/SpotifyConstants.tsx";
import CRUNCHYROLL_LINK_DEST_ORIGIN from "../connections/CrunchyrollConnectionConstants.tsx";
import isPlayedGameEntry from "ContentInventoryTypes.tsx";
import ContentInventoryListenedMediaProvider from "../../../discord_common/js/shared/shared-constants/ContentInventoryListenedMediaProvider.tsx";
import isCrunchyrollActivityDefault from "../activities/utils/isCrunchyrollActivity.tsx";

function isMatchingListeningActivity(closure_0, party) {
  if (obj.isListenedSessionEntry(_require)) {
    const first = _require.extra.entries[0];
    let provider;
    if (first != null) {
      const media = first.media;
      if (media != null) {
        provider = media.provider;
      }
    }
    let isTopArtistEntryResult = provider === ContentInventoryListenedMediaProvider.ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    isTopArtistEntryResult = isPlayedGameEntry.isTopArtistEntry(_require);
    if (isTopArtistEntryResult) {
      isTopArtistEntryResult = _require.extra.media.provider === ContentInventoryListenedMediaProvider.ContentInventoryListenedMediaProvider.SPOTIFY;
    }
    const tmpResult = isPlayedGameEntry;
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
const ActivityTypes = ME.ActivityTypes;
const CRUNCHYROLL_CLIENT_ID = CRUNCHYROLL_LINK_DEST_ORIGIN.CRUNCHYROLL_CLIENT_ID;
const isSpotifyParty = SPOTIFY_APP_PROTOCOL.isSpotifyParty;
const result = obj132.fileFinishedImporting("modules/content_inventory/matchUtils.tsx");

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
    let isTopArtistEntryResult = provider === ContentInventoryListenedMediaProvider.ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    isTopArtistEntryResult = isPlayedGameEntry.isTopArtistEntry(extra);
    if (isTopArtistEntryResult) {
      isTopArtistEntryResult = extra.extra.media.provider === ContentInventoryListenedMediaProvider.ContentInventoryListenedMediaProvider.SPOTIFY;
    }
    const tmpResult = isPlayedGameEntry;
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
export const isMatchingApplicationActivity = function isMatchingApplicationActivity(closure_0, item) {
  let game_name = _require.extra;
  let tmp = null != game_name;
  if (tmp) {
    let name = item;
    if ("application_id" in item && name.application_id === game_name.application_id) {
      tmp = tmp2;
    } else if ("game_name" in game_name) {
      name = name.name;
      game_name = game_name.game_name;
    }
  }
  return tmp;
};
export { isMatchingListeningActivity };
export const isMatchingWatchActivity = function isMatchingWatchActivity(closure_0, details) {
  const tmp2 = isCrunchyrollActivityDefault(details);
  let tmp3 = !tmp2;
  if (tmp2) {
    let isWatchedMediaEntryResult = isPlayedGameEntry.isWatchedMediaEntry(_require);
    if (isWatchedMediaEntryResult) {
      isWatchedMediaEntryResult = _require.extra.application_id === CRUNCHYROLL_CLIENT_ID;
    }
    tmp3 = !isWatchedMediaEntryResult;
  }
  let tmp7 = !tmp3;
  if (!tmp3) {
    tmp7 = _require.extra.media_title === details.details;
  }
  return tmp7;
};
export const findMatchingEntry = function findMatchingEntry(entries, activity) {
  const _require = activity;
  const found = entries.filter(require("utils.tsx").isEntryActive);
  if (activity.type === ActivityTypes.PLAYING) {
    const found1 = found.filter(tmp(9048).isGamingLikeEntry);
    let found2 = found1.find((item, index) => {
      let name = closure_0;
      let game_name = item.extra;
      let tmp = null != game_name;
      if (tmp) {
        if ("application_id" in name && name.application_id === game_name.application_id) {
          tmp = tmp2;
        } else if ("game_name" in game_name) {
          name = name.name;
          game_name = game_name.game_name;
        }
      }
      return tmp;
    });
  } else if (activity.type === ActivityTypes.LISTENING) {
    const found3 = found.filter(tmp(9048).isListenedSessionEntry);
    found2 = found3.find((item, index) => isMatchingListeningActivity(item, closure_0));
  } else if (activity.type === ActivityTypes.WATCHING) {
    const found4 = entries.filter(tmp(9048).isWatchedMediaEntry);
    found2 = found4.find((item, index) => {
      const tmp3 = isCrunchyrollActivityDefault(activity);
      let tmp4 = !tmp3;
      if (tmp3) {
        let isWatchedMediaEntryResult = activity(dependencyMap[3]).isWatchedMediaEntry(item);
        if (isWatchedMediaEntryResult) {
          isWatchedMediaEntryResult = item.extra.application_id === CRUNCHYROLL_CLIENT_ID;
        }
        tmp4 = !isWatchedMediaEntryResult;
        const obj = activity(dependencyMap[3]);
      }
      let tmp8 = !tmp4;
      if (!tmp4) {
        tmp8 = item.extra.media_title === activity.details;
      }
      return tmp8;
    });
  }
  return found2;
};