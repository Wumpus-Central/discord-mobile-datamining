// === Module 9048: isPlayedGameEntry ===

// Module 9048 (isPlayedGameEntry)
import obj132 from "obj132" /* 2 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8344 */;
import PlatformType from "PlatformType" /* 9049 */;

const result = obj132.fileFinishedImporting("modules/content_inventory/ContentInventoryTypes.tsx");

export const isPlayedGameEntry = function isPlayedGameEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
};
export const isTopGameEntry = function isTopGameEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
};
export const isGamingLikeEntry = function isGamingLikeEntry(content) {
  let content_type;
  if (content != null) {
    content_type = content.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (content != null) {
      content_type1 = content.content_type;
    }
    tmp4 = content_type1 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
  }
  return tmp4;
};
export const isApplicationEntry = function isApplicationEntry(closure_0) {
  let extra;
  if (_require != null) {
    extra = _require.extra;
  }
  let tmp2 = null != extra;
  if (tmp2) {
    let extra1;
    if (_require != null) {
      extra1 = _require.extra;
    }
    tmp2 = "application_id" in extra1;
  }
  return tmp2;
};
export const isListenedSessionEntry = function isListenedSessionEntry(closure_0) {
  let content_type;
  if (_require != null) {
    content_type = _require.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.LISTENED_SESSION;
};
export const isTopArtistEntry = function isTopArtistEntry(entry) {
  let content_type;
  if (entry != null) {
    content_type = entry.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.TOP_ARTIST;
};
export const isListeningLikeEntry = function isListeningLikeEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.LISTENED_SESSION;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_ARTIST;
  }
  return tmp4;
};
export const isWatchedMediaEntry = function isWatchedMediaEntry(entry) {
  let content_type;
  if (entry != null) {
    content_type = entry.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.WATCHED_MEDIA;
};
export const isXboxEntry = function isXboxEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
  }
  let tmp6 = tmp4;
  if (tmp6) {
    tmp6 = content_type.extra.platform === PlatformType.PlatformType.XBOX;
  }
  return tmp6;
};
export const isPlaystationEntry = function isPlaystationEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
  }
  let tmp6 = tmp4;
  if (tmp6) {
    tmp6 = content_type.extra.platform === PlatformType.PlatformType.PLAYSTATION;
  }
  return tmp6;
};
export const isConsoleEntry = function isConsoleEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (content_type != null) {
      content_type1 = content_type.content_type;
    }
    tmp4 = content_type1 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
  }
  let tmp6 = tmp4;
  if (tmp6) {
    tmp6 = content_type.extra.platform === PlatformType.PlatformType.XBOX;
  }
  if (!tmp6) {
    let content_type2;
    if (content_type != null) {
      content_type2 = content_type.content_type;
    }
    let tmp8 = content_type2 === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
    if (!tmp8) {
      let content_type3;
      if (content_type != null) {
        content_type3 = content_type.content_type;
      }
      tmp8 = content_type3 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
    }
    let tmp10 = tmp8;
    if (tmp10) {
      tmp10 = content_type.extra.platform === PlatformType.PlatformType.PLAYSTATION;
    }
    tmp6 = tmp10;
  }
  return tmp6;
};
export const isLaunchedActivityEntry = function isLaunchedActivityEntry(content_type) {
  content_type = undefined;
  if (content_type != null) {
    content_type = content_type.content_type;
  }
  return content_type === ContentInventoryEntryType.ContentInventoryEntryType.LAUNCHED_ACTIVITY;
};
export const isRecentActivityEntry = function isRecentActivityEntry(length) {
  let content_type;
  if (length != null) {
    content_type = length.content_type;
  }
  let tmp4 = content_type === ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME;
  if (!tmp4) {
    let content_type1;
    if (length != null) {
      content_type1 = length.content_type;
    }
    tmp4 = content_type1 === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME;
  }
  if (!tmp4) {
    let content_type2;
    if (length != null) {
      content_type2 = length.content_type;
    }
    tmp4 = content_type2 === ContentInventoryEntryType.ContentInventoryEntryType.LISTENED_SESSION;
  }
  if (!tmp4) {
    let content_type3;
    if (length != null) {
      content_type3 = length.content_type;
    }
    tmp4 = content_type3 === ContentInventoryEntryType.ContentInventoryEntryType.WATCHED_MEDIA;
  }
  if (!tmp4) {
    let extra;
    if (length != null) {
      extra = length.extra;
    }
    let tmp9 = null != extra;
    if (tmp9) {
      let extra1;
      if (length != null) {
        extra1 = length.extra;
      }
      tmp9 = "application_id" in extra1;
    }
    tmp4 = tmp9;
  }
  return tmp4;
};