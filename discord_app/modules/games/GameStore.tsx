// discord_app/modules/games/GameStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import isDiscordProxiedAssetUrlDefault from "../../utils/URLUtils.tsx";
import getOfficialApplicationId from "GameRecord.tsx";

function handleLoadMessages(messages) {
  messages = messages.messages;
  return messages.reduce((acc, item, index) => {
    c0 = false;
    const mention_games = item.mention_games;
    if (mention_games != null) {
      item = mention_games.forEach((item, index) => {
        if (tmp) {
          if (!closure_1_3.has(item.id)) {
            const tmp8 = new closure_1_2(item);
            const result = closure_1_3.set(item.id, tmp8);
            c0 = true;
            closure_1_6.delete(item.id);
            closure_1_5.delete(item.id);
          }
        }
        tmp = "game_flags" in item && typeof item.game_flags === "number";
      });
    }
    let tmp2 = c0;
    if (!c0) {
      tmp2 = acc;
    }
    return tmp2;
  }, false);
}
function handleLoadSearchResults(data) {
  data = data.data;
  c0 = false;
  let item = data.forEach((item, index) => {
    const messages = item.messages;
    item = messages.forEach((item, index) => {
      item = item.forEach((item, index) => {
        closure_0 = false;
        const mention_games = item.mention_games;
        if (mention_games != null) {
          item = mention_games.forEach((item, index) => {
            if (tmp) {
              if (!closure_1_3.has(item.id)) {
                const tmp8 = new closure_1_2(item);
                const result = closure_1_3.set(item.id, tmp8);
                c0 = true;
                closure_1_6.delete(item.id);
                closure_1_5.delete(item.id);
              }
            }
            tmp = "game_flags" in item && typeof item.game_flags === "number";
          });
        }
        let tmp2 = closure_0;
        if (!closure_0) {
          tmp2 = closure_0;
        }
        closure_0 = tmp2;
      });
    });
  });
  return c0;
}
function handleIncomingMessage(message) {
  c0 = false;
  const mention_games = message.message.mention_games;
  if (mention_games != null) {
    const item = mention_games.forEach((item, index) => {
      if (tmp) {
        if (!closure_1_3.has(item.id)) {
          const tmp8 = new closure_1_2(item);
          const result = closure_1_3.set(item.id, tmp8);
          c0 = true;
          closure_1_6.delete(item.id);
          closure_1_5.delete(item.id);
        }
      }
      tmp = "game_flags" in item && typeof item.game_flags === "number";
    });
  }
  return c0;
}
let map = new Map();
let set = new Set();
let set1 = new Set();
let set2 = new Set();
const Store = initializeDefault.Store;
class GameStore extends Store {
}
const prototype = GameStore.prototype;
prototype["isFetching"] = function isFetching(arg0) {
  let hasItem = null != arg0;
  if (hasItem) {
    hasItem = set.has(arg0);
  }
  return hasItem;
};
prototype["didFetchingFail"] = function didFetchingFail(item) {
  let hasItem = null != item;
  if (hasItem) {
    hasItem = set1.has(item);
  }
  return hasItem;
};
prototype["getGame"] = function getGame(closure_0) {
  let value;
  if (null != closure_0) {
    value = map.get(closure_0);
  }
  return value;
};
prototype["hasNoData"] = function hasNoData(item) {
  let hasItem = null != item;
  if (hasItem) {
    hasItem = set2.has(item);
  }
  return hasItem;
};
prototype["getCoverImageUrl"] = function getCoverImageUrl(arg0, size) {
  let tmp = null;
  if (null != arg0) {
    const value = map.get(arg0);
    let coverURL;
    if (value != null) {
      coverURL = value.getCoverURL();
    }
    tmp = coverURL;
  }
  if (null == tmp) {
    return null;
  } else if (null == size) {
    return tmp;
  } else {
    isDiscordProxiedAssetUrlDefault.toURLSafe(tmp);
    let str = tmp;
    if (null != str) {
      const searchParams = str.searchParams;
      const result = searchParams.set("size", size.size.toString());
      str = str.toString();
    }
    return str;
  }
};
GameStore.displayName = "NewGameStore";
const gameStore = new GameStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    map = new Map();
    set = new Set();
    set1 = new Set();
    set2 = new Set();
  },
  GAME_FETCH: function handleFetch(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((item, index) => {
      set.add(item);
      set2.delete(item);
    });
  },
  GAME_FETCH_CANCELLED: function handleFetchCancelled(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((item, index) => set.delete(item));
  },
  GAME_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    ({ gameIds, games } = arg0);
    set = new Set(gameIds);
    const item = gameIds.forEach((item, index) => {
      set2.delete(item);
      set3.delete(item);
    });
    const item1 = games.forEach((item, index) => {
      set.delete(item.id);
      const result = map.set(item.id, new closure_1_2(item));
    });
    const item2 = set.forEach((item, index) => {
      if (!set.has(item)) {
        set4.add(item);
      }
    });
  },
  GAME_FETCH_FAILURE: function handleFetchFailure(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((item, index) => {
      set.delete(item);
      set2.add(item);
    });
  },
  SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
  CONVERSATION_FETCH_SUCCESS: function handleConversationFetchSuccess(messages) {
    messages = messages.messages;
    const combined = messages.concat(messages.messageReferences);
    return combined.reduce((acc, item, index) => {
      c0 = false;
      const mention_games = item.mention_games;
      if (mention_games != null) {
        item = mention_games.forEach((item, index) => {
          if (tmp) {
            if (!closure_1_3.has(item.id)) {
              const tmp8 = new closure_1_2(item);
              const result = closure_1_3.set(item.id, tmp8);
              c0 = true;
              closure_1_6.delete(item.id);
              closure_1_5.delete(item.id);
            }
          }
          tmp = "game_flags" in item && typeof item.game_flags === "number";
        });
      }
      let tmp2 = c0;
      if (!c0) {
        tmp2 = acc;
      }
      return tmp2;
    }, false);
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    rawConversations = rawConversations.rawConversations;
    c0 = false;
    let item = rawConversations.forEach((item, index) => {
      const messages = item.messages;
      if (messages != null) {
        item = messages.forEach((item, index) => {
          closure_0 = false;
          const mention_games = item.mention_games;
          if (mention_games != null) {
            item = mention_games.forEach((item, index) => {
              if (tmp) {
                if (!closure_1_3.has(item.id)) {
                  const tmp8 = new closure_1_2(item);
                  const result = closure_1_3.set(item.id, tmp8);
                  c0 = true;
                  closure_1_6.delete(item.id);
                  closure_1_5.delete(item.id);
                }
              }
              tmp = "game_flags" in item && typeof item.game_flags === "number";
            });
          }
          let tmp2 = closure_0;
          if (!closure_0) {
            tmp2 = closure_0;
          }
          closure_0 = tmp2;
        });
      }
    });
    return c0;
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    return pins.reduce((acc, item, index) => {
      c0 = false;
      const mention_games = item.message.mention_games;
      if (mention_games != null) {
        item = mention_games.forEach((item, index) => {
          if (tmp) {
            if (!closure_1_3.has(item.id)) {
              const tmp8 = new closure_1_2(item);
              const result = closure_1_3.set(item.id, tmp8);
              c0 = true;
              closure_1_6.delete(item.id);
              closure_1_5.delete(item.id);
            }
          }
          tmp = "game_flags" in item && typeof item.game_flags === "number";
        });
      }
      let tmp2 = c0;
      if (!c0) {
        tmp2 = acc;
      }
      return tmp2;
    }, false);
  },
  THREAD_LIST_SYNC: function handleThreadListSync(mostRecentMessages) {
    mostRecentMessages = mostRecentMessages.mostRecentMessages;
    if (mostRecentMessages == null) {
      mostRecentMessages = [];
    }
    return mostRecentMessages.reduce((acc, item, index) => {
      c0 = false;
      const mention_games = item.mention_games;
      if (mention_games != null) {
        item = mention_games.forEach((item, index) => {
          if (tmp) {
            if (!closure_1_3.has(item.id)) {
              const tmp8 = new closure_1_2(item);
              const result = closure_1_3.set(item.id, tmp8);
              c0 = true;
              closure_1_6.delete(item.id);
              closure_1_5.delete(item.id);
            }
          }
          tmp = "game_flags" in item && typeof item.game_flags === "number";
        });
      }
      let tmp2 = c0;
      if (!c0) {
        tmp2 = acc;
      }
      return tmp2;
    }, false);
  },
  MESSAGE_CREATE: handleIncomingMessage,
  MESSAGE_UPDATE: handleIncomingMessage,
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    c0 = false;
    const values = Object.values(threads.threads);
    let item = values.forEach((item, index) => {
      ({ first_message, most_recent_message } = item);
      if (null != first_message) {
        closure_0 = false;
        const mention_games = first_message.mention_games;
        if (mention_games != null) {
          item = mention_games.forEach((item, index) => {
            if (tmp) {
              if (!closure_1_3.has(item.id)) {
                const tmp8 = new closure_1_2(item);
                const result = closure_1_3.set(item.id, tmp8);
                c0 = true;
                closure_1_6.delete(item.id);
                closure_1_5.delete(item.id);
              }
            }
            tmp = "game_flags" in item && typeof item.game_flags === "number";
          });
        }
        let tmp2 = closure_0;
        if (!closure_0) {
          tmp2 = closure_0;
        }
        closure_0 = tmp2;
      }
      if (null != most_recent_message) {
        closure_0 = false;
        const mention_games1 = most_recent_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach((item, index) => {
            if (tmp) {
              if (!closure_1_3.has(item.id)) {
                const tmp8 = new closure_1_2(item);
                const result = closure_1_3.set(item.id, tmp8);
                c0 = true;
                closure_1_6.delete(item.id);
                closure_1_5.delete(item.id);
              }
            }
            tmp = "game_flags" in item && typeof item.game_flags === "number";
          });
        }
        let tmp4 = closure_0;
        if (!closure_0) {
          tmp4 = closure_0;
        }
        closure_0 = tmp4;
      }
    });
    return c0;
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
    supplementalData = supplementalData.supplementalData;
    c0 = false;
    let item = supplementalData.forEach((item, index) => {
      const message_preview = item.message_preview;
      if (null != message_preview) {
        closure_0 = false;
        const mention_games = message_preview.mention_games;
        if (mention_games != null) {
          item = mention_games.forEach((item, index) => {
            if (tmp) {
              if (!closure_1_3.has(item.id)) {
                const tmp8 = new closure_1_2(item);
                const result = closure_1_3.set(item.id, tmp8);
                c0 = true;
                closure_1_6.delete(item.id);
                closure_1_5.delete(item.id);
              }
            }
            tmp = "game_flags" in item && typeof item.game_flags === "number";
          });
        }
        let tmp2 = closure_0;
        if (!closure_0) {
          tmp2 = closure_0;
        }
        closure_0 = tmp2;
      }
    });
    return c0;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadICYMIHydratedItems(messageItems) {
    messageItems = messageItems.messageItems;
    c0 = false;
    let item = messageItems.forEach((item, index) => {
      if (null != item.message) {
        closure_0 = false;
        const mention_games = item.message.mention_games;
        if (mention_games != null) {
          item = mention_games.forEach((item, index) => {
            if (tmp) {
              if (!closure_1_3.has(item.id)) {
                const tmp8 = new closure_1_2(item);
                const result = closure_1_3.set(item.id, tmp8);
                c0 = true;
                closure_1_6.delete(item.id);
                closure_1_5.delete(item.id);
              }
            }
            tmp = "game_flags" in item && typeof item.game_flags === "number";
          });
        }
        let tmp2 = closure_0;
        if (!closure_0) {
          tmp2 = closure_0;
        }
        closure_0 = tmp2;
      }
    });
    return c0;
  }
});
let result = require("obj132").fileFinishedImporting("modules/games/GameStore.tsx");

export default gameStore;