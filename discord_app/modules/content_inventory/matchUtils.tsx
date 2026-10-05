// discord_app/modules/content_inventory/matchUtils.tsx
import Constants from "../../Constants.tsx";
import CrunchyrollConnectionConstants from "../connections/CrunchyrollConnectionConstants.tsx";
import SpotifyConstants from "../spotify/SpotifyConstants.tsx";
import ContentInventoryTypes from "ContentInventoryTypes.tsx";
import ContentInventoryListenedMediaProvider from "../../../discord_common/js/shared/shared-constants/ContentInventoryListenedMediaProvider.tsx";
import isCrunchyrollActivityDefault from "../activities/utils/isCrunchyrollActivity.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function isMatchingListeningActivity(extra, party) {
  let isTopArtistEntryResult;
  const obj = ContentInventoryTypes;
  if (obj.isListenedSessionEntry(extra)) {
    const first = extra.extra.entries[0];
    let provider;
    if (first != null) {
      const media = first.media;
      if (media != null) {
        provider = media.provider;
      }
    }
    isTopArtistEntryResult =
      provider === ContentInventoryListenedMediaProvider.ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    const tmpResult = ContentInventoryTypes;
    isTopArtistEntryResult =
      tmpResult.isTopArtistEntry(extra) &&
      extra.extra.media.provider ===
        ContentInventoryListenedMediaProvider.ContentInventoryListenedMediaProvider.SPOTIFY;
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
  let isTopArtistEntryResult;
  const obj = ContentInventoryTypes;
  if (obj.isListenedSessionEntry(extra)) {
    const first = extra.extra.entries[0];
    let provider;
    if (first != null) {
      const media = first.media;
      if (media != null) {
        provider = media.provider;
      }
    }
    isTopArtistEntryResult =
      provider === ContentInventoryListenedMediaProvider.ContentInventoryListenedMediaProvider.SPOTIFY;
  } else {
    const tmpResult = ContentInventoryTypes;
    isTopArtistEntryResult =
      tmpResult.isTopArtistEntry(extra) &&
      extra.extra.media.provider ===
        ContentInventoryListenedMediaProvider.ContentInventoryListenedMediaProvider.SPOTIFY;
  }
  return isTopArtistEntryResult;
};
export const isCrunchyrollEntry = function isCrunchyrollEntry(extra) {
  const obj = ContentInventoryTypes;
  const isWatchedMediaEntryResult =
    obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
  return isWatchedMediaEntryResult;
};
export const isMatchingApplicationActivity = function isMatchingApplicationActivity(extra, application_id) {
  extra = extra.extra;
  let tmp = null != extra;
  if (tmp) {
    let tmp3 = "application_id" in application_id && application_id.application_id === extra.application_id;
    if (!tmp3) {
      let tmp4;
      if ("game_name" in extra) {
        tmp4 = application_id.name === extra.game_name;
      } else {
        tmp4 = "activity_name" in extra && application_id.name === extra.activity_name;
      }
      tmp3 = tmp4;
    }
    tmp = tmp3;
  }
  return tmp;
};
export { isMatchingListeningActivity };
export const isMatchingWatchActivity = function isMatchingWatchActivity(extra, details) {
  const tmp2 = isCrunchyrollActivityDefault(details);
  let tmp3 = !tmp2;
  if (tmp2) {
    const obj = ContentInventoryTypes;
    tmp3 = !(obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID);
    const isWatchedMediaEntryResult =
      obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
  }
  return !tmp3 && extra.extra.media_title === details.details;
};
export const findMatchingEntry = function findMatchingEntry(entries, activity) {
  let found2;
  _require = activity;
  const found = entries.filter(require("utils").isEntryActive);
  if (activity.type === ActivityTypes.PLAYING) {
    const found1 = found.filter(tmp(8017).isGamingLikeEntry);
    found2 = found1.find((extra) => {
      extra = extra.extra;
      let tmp2 = null != extra;
      if (tmp2) {
        let tmp3 = "application_id" in activity && activity.application_id === extra.application_id;
        if (!tmp3) {
          let tmp4;
          if ("game_name" in extra) {
            tmp4 = activity.name === extra.game_name;
          } else {
            tmp4 = "activity_name" in extra && activity.name === extra.activity_name;
          }
          tmp3 = tmp4;
        }
        tmp2 = tmp3;
      }
      return tmp2;
    });
  } else if (activity.type === ActivityTypes.LISTENING) {
    const found3 = found.filter(tmp(8017).isListenedSessionEntry);
    found2 = found3.find((item) => isMatchingListeningActivity(item, activity));
  } else if (activity.type === ActivityTypes.WATCHING) {
    const found4 = entries.filter(tmp(8017).isWatchedMediaEntry);
    found2 = found4.find((extra) => {
      const tmp3 = isCrunchyrollActivityDefault(activity);
      let tmp4 = !tmp3;
      if (tmp3) {
        const obj = ContentInventoryTypes;
        tmp4 = !(obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID);
        const isWatchedMediaEntryResult =
          obj.isWatchedMediaEntry(extra) && extra.extra.application_id === CRUNCHYROLL_CLIENT_ID;
      }
      return !tmp4 && extra.extra.media_title === activity.details;
    });
  }
  return found2;
};
