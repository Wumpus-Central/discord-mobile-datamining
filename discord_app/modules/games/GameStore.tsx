// discord_app/modules/games/GameStore.tsx
import applicationId from "applicationId";
import { Store } from "initialize";
import set from "isDiscordProxiedAssetUrl";
import { isDiscordProxiedAssetUrl } from "../../utils/URLUtils.tsx";

function handleLoadMessages(messages) {
  messages = messages.messages;
  return messages.reduce((arg0, mention_games) => {
    let c0 = false;
    mention_games = mention_games.mention_games;
    if (mention_games != null) {
      const item = mention_games.forEach((game_flags) => {
        if (tmp) {
          if (!outer1_3.has(game_flags.id)) {
            const tmp8 = new outer1_2(game_flags);
            const result = outer1_3.set(game_flags.id, tmp8);
            let c0 = true;
            outer1_6.delete(game_flags.id);
            outer1_5.delete(game_flags.id);
          }
        }
      });
    }
    let tmp2 = c0;
    if (!c0) {
      tmp2 = arg0;
    }
    return tmp2;
  }, false);
}
function handleLoadSearchResults(data) {
  data = data.data;
  let c0 = false;
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      let item = arr.forEach((mention_games) => {
        let c0 = false;
        mention_games = mention_games.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach((game_flags) => {
            if (tmp) {
              if (!outer1_3.has(game_flags.id)) {
                const tmp8 = new outer1_2(game_flags);
                const result = outer1_3.set(game_flags.id, tmp8);
                let c0 = true;
                outer1_6.delete(game_flags.id);
                outer1_5.delete(game_flags.id);
              }
            }
          });
        }
        let tmp2 = c0;
        if (!c0) {
          tmp2 = c0;
        }
        c0 = tmp2;
      });
    });
  });
  return c0;
}
function handleIncomingMessage(message) {
  let c0 = false;
  const mention_games = message.message.mention_games;
  if (mention_games != null) {
    const item = mention_games.forEach((game_flags) => {
      if (tmp) {
        if (!outer1_3.has(game_flags.id)) {
          const tmp8 = new outer1_2(game_flags);
          const result = outer1_3.set(game_flags.id, tmp8);
          let c0 = true;
          outer1_6.delete(game_flags.id);
          outer1_5.delete(game_flags.id);
        }
      }
    });
  }
  return c0;
}
let map = new Map();
let set = new Set();
let set1 = new Set();
let set2 = new Set();
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
prototype["didFetchingFail"] = function didFetchingFail(closure_0) {
  let hasItem = null != closure_0;
  if (hasItem) {
    hasItem = set1.has(closure_0);
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
prototype["hasNoData"] = function hasNoData(closure_0) {
  let hasItem = null != closure_0;
  if (hasItem) {
    hasItem = set2.has(closure_0);
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
    let str = isDiscordProxiedAssetUrl.toURLSafe(tmp);
    str = tmp;
    if (null != str) {
      const searchParams = str.searchParams;
      const result = searchParams.set("size", size.size.toString());
      str = str.toString();
      const str2 = size.size;
    }
    return str;
  }
};
GameStore.displayName = "NewGameStore";
const gameStore = new GameStore(require("dispatcher"), {
  LOGOUT: function handleLogout() {
    const map = new Map();
    const set = new Set();
    const set1 = new Set();
    const set2 = new Set();
  },
  GAME_FETCH: function handleFetch(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => {
      set.add(arg0);
      set2.delete(arg0);
    });
  },
  GAME_FETCH_CANCELLED: function handleFetchCancelled(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => set.delete(arg0));
  },
  GAME_FETCH_SUCCESS: function handleFetchSuccess(arg0) {
    let gameIds;
    let games;
    ({ gameIds, games } = arg0);
    let set;
    set = new Set(gameIds);
    const item = gameIds.forEach((arg0) => {
      set2.delete(arg0);
      set3.delete(arg0);
    });
    const item1 = games.forEach((id) => {
      set.delete(id.id);
      const result = outer1_3.set(id.id, new outer1_2(id));
    });
    const item2 = set.forEach((arg0) => {
      if (!set.has(arg0)) {
        set4.add(arg0);
      }
    });
  },
  GAME_FETCH_FAILURE: function handleFetchFailure(gameIds) {
    gameIds = gameIds.gameIds;
    const item = gameIds.forEach((arg0) => {
      set.delete(arg0);
      set2.add(arg0);
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
    return combined.reduce((arg0, mention_games) => {
      let c0 = false;
      mention_games = mention_games.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach((game_flags) => {
          if (tmp) {
            if (!outer1_3.has(game_flags.id)) {
              const tmp8 = new outer1_2(game_flags);
              const result = outer1_3.set(game_flags.id, tmp8);
              let c0 = true;
              outer1_6.delete(game_flags.id);
              outer1_5.delete(game_flags.id);
            }
          }
        });
      }
      let tmp2 = c0;
      if (!c0) {
        tmp2 = arg0;
      }
      return tmp2;
    }, false);
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    rawConversations = rawConversations.rawConversations;
    let c0 = false;
    let item = rawConversations.forEach((messages) => {
      messages = messages.messages;
      if (messages != null) {
        let item = messages.forEach((mention_games) => {
          let c0 = false;
          mention_games = mention_games.mention_games;
          if (mention_games != null) {
            const item = mention_games.forEach((game_flags) => {
              if (tmp) {
                if (!outer1_3.has(game_flags.id)) {
                  const tmp8 = new outer1_2(game_flags);
                  const result = outer1_3.set(game_flags.id, tmp8);
                  let c0 = true;
                  outer1_6.delete(game_flags.id);
                  outer1_5.delete(game_flags.id);
                }
              }
            });
          }
          let tmp2 = c0;
          if (!c0) {
            tmp2 = c0;
          }
          c0 = tmp2;
        });
      }
    });
    return c0;
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    return pins.reduce((arg0, message) => {
      let c0 = false;
      const mention_games = message.message.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach((game_flags) => {
          if (tmp) {
            if (!outer1_3.has(game_flags.id)) {
              const tmp8 = new outer1_2(game_flags);
              const result = outer1_3.set(game_flags.id, tmp8);
              let c0 = true;
              outer1_6.delete(game_flags.id);
              outer1_5.delete(game_flags.id);
            }
          }
        });
      }
      let tmp2 = c0;
      if (!c0) {
        tmp2 = arg0;
      }
      return tmp2;
    }, false);
  },
  THREAD_LIST_SYNC: function handleThreadListSync(mostRecentMessages) {
    mostRecentMessages = mostRecentMessages.mostRecentMessages;
    if (mostRecentMessages == null) {
      mostRecentMessages = [];
    }
    return mostRecentMessages.reduce((arg0, mention_games) => {
      let c0 = false;
      mention_games = mention_games.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach((game_flags) => {
          if (tmp) {
            if (!outer1_3.has(game_flags.id)) {
              const tmp8 = new outer1_2(game_flags);
              const result = outer1_3.set(game_flags.id, tmp8);
              let c0 = true;
              outer1_6.delete(game_flags.id);
              outer1_5.delete(game_flags.id);
            }
          }
        });
      }
      let tmp2 = c0;
      if (!c0) {
        tmp2 = arg0;
      }
      return tmp2;
    }, false);
  },
  MESSAGE_CREATE: handleIncomingMessage,
  MESSAGE_UPDATE: handleIncomingMessage,
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    let c0 = false;
    const values = Object.values(threads.threads);
    let item = values.forEach((arg0) => {
      let first_message;
      let most_recent_message;
      ({ first_message, most_recent_message } = arg0);
      if (null != first_message) {
        let c0 = false;
        const mention_games = first_message.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach((game_flags) => {
            if (tmp) {
              if (!outer1_3.has(game_flags.id)) {
                const tmp8 = new outer1_2(game_flags);
                const result = outer1_3.set(game_flags.id, tmp8);
                let c0 = true;
                outer1_6.delete(game_flags.id);
                outer1_5.delete(game_flags.id);
              }
            }
          });
        }
        let tmp2 = c0;
        if (!c0) {
          tmp2 = c0;
        }
        c0 = tmp2;
      }
      if (null != most_recent_message) {
        c0 = false;
        const mention_games1 = most_recent_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach((game_flags) => {
            if (tmp) {
              if (!outer1_3.has(game_flags.id)) {
                const tmp8 = new outer1_2(game_flags);
                const result = outer1_3.set(game_flags.id, tmp8);
                let c0 = true;
                outer1_6.delete(game_flags.id);
                outer1_5.delete(game_flags.id);
              }
            }
          });
        }
        let tmp4 = c0;
        if (!c0) {
          tmp4 = c0;
        }
        c0 = tmp4;
      }
    });
    return c0;
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
    supplementalData = supplementalData.supplementalData;
    let c0 = false;
    let item = supplementalData.forEach((message_preview) => {
      message_preview = message_preview.message_preview;
      if (null != message_preview) {
        let c0 = false;
        const mention_games = message_preview.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach((game_flags) => {
            if (tmp) {
              if (!outer1_3.has(game_flags.id)) {
                const tmp8 = new outer1_2(game_flags);
                const result = outer1_3.set(game_flags.id, tmp8);
                let c0 = true;
                outer1_6.delete(game_flags.id);
                outer1_5.delete(game_flags.id);
              }
            }
          });
        }
        let tmp2 = c0;
        if (!c0) {
          tmp2 = c0;
        }
        c0 = tmp2;
      }
    });
    return c0;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadICYMIHydratedItems(messageItems) {
    messageItems = messageItems.messageItems;
    let c0 = false;
    let item = messageItems.forEach((message) => {
      if (null != message.message) {
        let c0 = false;
        const mention_games = message.message.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach((game_flags) => {
            if (tmp) {
              if (!outer1_3.has(game_flags.id)) {
                const tmp8 = new outer1_2(game_flags);
                const result = outer1_3.set(game_flags.id, tmp8);
                let c0 = true;
                outer1_6.delete(game_flags.id);
                outer1_5.delete(game_flags.id);
              }
            }
          });
        }
        let tmp2 = c0;
        if (!c0) {
          tmp2 = c0;
        }
        c0 = tmp2;
      }
    });
    return c0;
  }
});
let result = set.fileFinishedImporting("modules/games/GameStore.tsx");

export default gameStore;