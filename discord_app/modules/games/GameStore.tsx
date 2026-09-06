// === Module 1916: createGamesFromMessage ===

// Module 1916 (createGamesFromMessage)
import initializeDefault from "initialize" /* 504 */;
import dispatcherDefault from "dispatcher" /* 573 */;
import isDiscordProxiedAssetUrlDefault from "isDiscordProxiedAssetUrl" /* 1365 */;
import closure_2 from "getOfficialApplicationId" /* 1917 */;
import set from "set" /* 2 */;

function createGamesFromMessage(referenced_message) {
  closure_0 = false;
  const mention_games = referenced_message.mention_games;
  if (mention_games != null) {
    const item = mention_games.forEach((game_flags) => {
      if (tmp) {
        if (!closure_1_3.has(game_flags.id)) {
          const tmp8 = new closure_1_2(game_flags);
          const result = closure_1_3.set(game_flags.id, tmp8);
          c0 = true;
          closure_1_6.delete(game_flags.id);
          closure_1_5.delete(game_flags.id);
        }
      }
    });
  }
  if (null != referenced_message.referenced_message) {
    closure_0 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
    const tmp3 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
  }
  return closure_0;
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  return messages.reduce((arg0, mention_games) => {
    closure_0 = false;
    mention_games = mention_games.mention_games;
    if (mention_games != null) {
      const item = mention_games.forEach((game_flags) => {
        if (tmp) {
          if (!closure_1_3.has(game_flags.id)) {
            const tmp8 = new closure_1_2(game_flags);
            const result = closure_1_3.set(game_flags.id, tmp8);
            c0 = true;
            closure_1_6.delete(game_flags.id);
            closure_1_5.delete(game_flags.id);
          }
        }
      });
    }
    if (null != mention_games.referenced_message) {
      const referenced_message = mention_games.referenced_message;
      closure_0 = false;
      const mention_games1 = referenced_message.mention_games;
      if (mention_games1 != null) {
        const item1 = mention_games1.forEach((game_flags) => {
          if (tmp) {
            if (!closure_1_3.has(game_flags.id)) {
              const tmp8 = new closure_1_2(game_flags);
              const result = closure_1_3.set(game_flags.id, tmp8);
              c0 = true;
              closure_1_6.delete(game_flags.id);
              closure_1_5.delete(game_flags.id);
            }
          }
        });
      }
      if (null != referenced_message.referenced_message) {
        closure_0 = callback(referenced_message.referenced_message) || closure_0;
        const tmp4 = callback(referenced_message.referenced_message) || closure_0;
      }
      let tmp5 = closure_0;
      if (!closure_0) {
        tmp5 = closure_0;
      }
      closure_0 = tmp5;
    }
    let tmp6 = closure_0;
    if (!closure_0) {
      tmp6 = arg0;
    }
    return tmp6;
  }, false);
}
function handleLoadSearchResults(data) {
  data = data.data;
  c0 = false;
  let item = data.forEach((messages) => {
    messages = messages.messages;
    let item = messages.forEach((arr) => {
      let item = arr.forEach((mention_games) => {
        closure_0 = false;
        mention_games = mention_games.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach((game_flags) => {
            if (tmp) {
              if (!closure_1_3.has(game_flags.id)) {
                const tmp8 = new closure_1_2(game_flags);
                const result = closure_1_3.set(game_flags.id, tmp8);
                c0 = true;
                closure_1_6.delete(game_flags.id);
                closure_1_5.delete(game_flags.id);
              }
            }
          });
        }
        if (null != mention_games.referenced_message) {
          const referenced_message = mention_games.referenced_message;
          closure_0 = false;
          const mention_games1 = referenced_message.mention_games;
          if (mention_games1 != null) {
            const item1 = mention_games1.forEach((game_flags) => {
              if (tmp) {
                if (!closure_1_3.has(game_flags.id)) {
                  const tmp8 = new closure_1_2(game_flags);
                  const result = closure_1_3.set(game_flags.id, tmp8);
                  c0 = true;
                  closure_1_6.delete(game_flags.id);
                  closure_1_5.delete(game_flags.id);
                }
              }
            });
          }
          if (null != referenced_message.referenced_message) {
            closure_0 = closure_1_7(referenced_message.referenced_message) || closure_0;
            const tmp4 = closure_1_7(referenced_message.referenced_message) || closure_0;
          }
          let tmp5 = closure_0;
          if (!closure_0) {
            tmp5 = closure_0;
          }
          closure_0 = tmp5;
        }
        let tmp6 = closure_0;
        if (!closure_0) {
          tmp6 = closure_0;
        }
        closure_0 = tmp6;
      });
    });
  });
  return c0;
}
function handleIncomingMessage(message) {
  message = message.message;
  closure_0 = false;
  const mention_games = message.mention_games;
  if (mention_games != null) {
    const item = mention_games.forEach((game_flags) => {
      if (tmp) {
        if (!closure_1_3.has(game_flags.id)) {
          const tmp8 = new closure_1_2(game_flags);
          const result = closure_1_3.set(game_flags.id, tmp8);
          c0 = true;
          closure_1_6.delete(game_flags.id);
          closure_1_5.delete(game_flags.id);
        }
      }
    });
  }
  if (null != message.referenced_message) {
    const referenced_message = message.referenced_message;
    closure_0 = false;
    const mention_games1 = referenced_message.mention_games;
    if (mention_games1 != null) {
      const item1 = mention_games1.forEach((game_flags) => {
        if (tmp) {
          if (!closure_1_3.has(game_flags.id)) {
            const tmp8 = new closure_1_2(game_flags);
            const result = closure_1_3.set(game_flags.id, tmp8);
            c0 = true;
            closure_1_6.delete(game_flags.id);
            closure_1_5.delete(game_flags.id);
          }
        }
      });
    }
    if (null != referenced_message.referenced_message) {
      closure_0 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
      const tmp4 = createGamesFromMessage(referenced_message.referenced_message) || closure_0;
    }
    let tmp5 = closure_0;
    if (!closure_0) {
      tmp5 = closure_0;
    }
    closure_0 = tmp5;
  }
  return closure_0;
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
    let str = isDiscordProxiedAssetUrlDefault.toURLSafe(tmp);
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
const gameStore = new GameStore(dispatcherDefault, {
  LOGOUT: function handleLogout() {
    map = new Map();
    set = new Set();
    set1 = new Set();
    set2 = new Set();
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
    ({ gameIds, games } = arg0);
    set = undefined;
    set = new Set(gameIds);
    const item = gameIds.forEach((arg0) => {
      set2.delete(arg0);
      set3.delete(arg0);
    });
    const item1 = games.forEach((id) => {
      set.delete(id.id);
      const result = closure_1_3.set(id.id, new closure_1_2(id));
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
      closure_0 = false;
      mention_games = mention_games.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach((game_flags) => {
          if (tmp) {
            if (!closure_1_3.has(game_flags.id)) {
              const tmp8 = new closure_1_2(game_flags);
              const result = closure_1_3.set(game_flags.id, tmp8);
              c0 = true;
              closure_1_6.delete(game_flags.id);
              closure_1_5.delete(game_flags.id);
            }
          }
        });
      }
      if (null != mention_games.referenced_message) {
        const referenced_message = mention_games.referenced_message;
        closure_0 = false;
        const mention_games1 = referenced_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach((game_flags) => {
            if (tmp) {
              if (!closure_1_3.has(game_flags.id)) {
                const tmp8 = new closure_1_2(game_flags);
                const result = closure_1_3.set(game_flags.id, tmp8);
                c0 = true;
                closure_1_6.delete(game_flags.id);
                closure_1_5.delete(game_flags.id);
              }
            }
          });
        }
        if (null != referenced_message.referenced_message) {
          closure_0 = callback(referenced_message.referenced_message) || closure_0;
          const tmp4 = callback(referenced_message.referenced_message) || closure_0;
        }
        let tmp5 = closure_0;
        if (!closure_0) {
          tmp5 = closure_0;
        }
        closure_0 = tmp5;
      }
      let tmp6 = closure_0;
      if (!closure_0) {
        tmp6 = arg0;
      }
      return tmp6;
    }, false);
  },
  CONVERSATIONS_FETCH_SUCCESS: function handleConversationsFetchSuccess(rawConversations) {
    rawConversations = rawConversations.rawConversations;
    c0 = false;
    let item = rawConversations.forEach((messages) => {
      messages = messages.messages;
      if (messages != null) {
        let item = messages.forEach((mention_games) => {
          closure_0 = false;
          mention_games = mention_games.mention_games;
          if (mention_games != null) {
            const item = mention_games.forEach((game_flags) => {
              if (tmp) {
                if (!closure_1_3.has(game_flags.id)) {
                  const tmp8 = new closure_1_2(game_flags);
                  const result = closure_1_3.set(game_flags.id, tmp8);
                  c0 = true;
                  closure_1_6.delete(game_flags.id);
                  closure_1_5.delete(game_flags.id);
                }
              }
            });
          }
          if (null != mention_games.referenced_message) {
            const referenced_message = mention_games.referenced_message;
            closure_0 = false;
            const mention_games1 = referenced_message.mention_games;
            if (mention_games1 != null) {
              const item1 = mention_games1.forEach((game_flags) => {
                if (tmp) {
                  if (!closure_1_3.has(game_flags.id)) {
                    const tmp8 = new closure_1_2(game_flags);
                    const result = closure_1_3.set(game_flags.id, tmp8);
                    c0 = true;
                    closure_1_6.delete(game_flags.id);
                    closure_1_5.delete(game_flags.id);
                  }
                }
              });
            }
            if (null != referenced_message.referenced_message) {
              closure_0 = closure_1_7(referenced_message.referenced_message) || closure_0;
              const tmp4 = closure_1_7(referenced_message.referenced_message) || closure_0;
            }
            let tmp5 = closure_0;
            if (!closure_0) {
              tmp5 = closure_0;
            }
            closure_0 = tmp5;
          }
          let tmp6 = closure_0;
          if (!closure_0) {
            tmp6 = closure_0;
          }
          closure_0 = tmp6;
        });
      }
    });
    return c0;
  },
  LOAD_PINNED_MESSAGES_SUCCESS: function handleLoadPinnedMessages(pins) {
    pins = pins.pins;
    return pins.reduce((arg0, message) => {
      message = message.message;
      closure_0 = false;
      const mention_games = message.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach((game_flags) => {
          if (tmp) {
            if (!closure_1_3.has(game_flags.id)) {
              const tmp8 = new closure_1_2(game_flags);
              const result = closure_1_3.set(game_flags.id, tmp8);
              c0 = true;
              closure_1_6.delete(game_flags.id);
              closure_1_5.delete(game_flags.id);
            }
          }
        });
      }
      if (null != message.referenced_message) {
        const referenced_message = message.referenced_message;
        closure_0 = false;
        const mention_games1 = referenced_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach((game_flags) => {
            if (tmp) {
              if (!closure_1_3.has(game_flags.id)) {
                const tmp8 = new closure_1_2(game_flags);
                const result = closure_1_3.set(game_flags.id, tmp8);
                c0 = true;
                closure_1_6.delete(game_flags.id);
                closure_1_5.delete(game_flags.id);
              }
            }
          });
        }
        if (null != referenced_message.referenced_message) {
          closure_0 = callback(referenced_message.referenced_message) || closure_0;
          const tmp4 = callback(referenced_message.referenced_message) || closure_0;
        }
        let tmp5 = closure_0;
        if (!closure_0) {
          tmp5 = closure_0;
        }
        closure_0 = tmp5;
      }
      let tmp6 = closure_0;
      if (!closure_0) {
        tmp6 = arg0;
      }
      return tmp6;
    }, false);
  },
  THREAD_LIST_SYNC: function handleThreadListSync(mostRecentMessages) {
    mostRecentMessages = mostRecentMessages.mostRecentMessages;
    if (mostRecentMessages == null) {
      mostRecentMessages = [];
    }
    return mostRecentMessages.reduce((arg0, mention_games) => {
      closure_0 = false;
      mention_games = mention_games.mention_games;
      if (mention_games != null) {
        const item = mention_games.forEach((game_flags) => {
          if (tmp) {
            if (!closure_1_3.has(game_flags.id)) {
              const tmp8 = new closure_1_2(game_flags);
              const result = closure_1_3.set(game_flags.id, tmp8);
              c0 = true;
              closure_1_6.delete(game_flags.id);
              closure_1_5.delete(game_flags.id);
            }
          }
        });
      }
      if (null != mention_games.referenced_message) {
        const referenced_message = mention_games.referenced_message;
        closure_0 = false;
        const mention_games1 = referenced_message.mention_games;
        if (mention_games1 != null) {
          const item1 = mention_games1.forEach((game_flags) => {
            if (tmp) {
              if (!closure_1_3.has(game_flags.id)) {
                const tmp8 = new closure_1_2(game_flags);
                const result = closure_1_3.set(game_flags.id, tmp8);
                c0 = true;
                closure_1_6.delete(game_flags.id);
                closure_1_5.delete(game_flags.id);
              }
            }
          });
        }
        if (null != referenced_message.referenced_message) {
          closure_0 = callback(referenced_message.referenced_message) || closure_0;
          const tmp4 = callback(referenced_message.referenced_message) || closure_0;
        }
        let tmp5 = closure_0;
        if (!closure_0) {
          tmp5 = closure_0;
        }
        closure_0 = tmp5;
      }
      let tmp6 = closure_0;
      if (!closure_0) {
        tmp6 = arg0;
      }
      return tmp6;
    }, false);
  },
  MESSAGE_CREATE: handleIncomingMessage,
  MESSAGE_UPDATE: handleIncomingMessage,
  LOAD_FORUM_POSTS: function handleLoadForumPosts(threads) {
    c0 = false;
    const values = Object.values(threads.threads);
    let item = values.forEach((arg0) => {
      ({ first_message, most_recent_message } = arg0);
      if (null != first_message) {
        closure_0 = false;
        const mention_games = first_message.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach((game_flags) => {
            if (tmp) {
              if (!closure_1_3.has(game_flags.id)) {
                const tmp8 = new closure_1_2(game_flags);
                const result = closure_1_3.set(game_flags.id, tmp8);
                c0 = true;
                closure_1_6.delete(game_flags.id);
                closure_1_5.delete(game_flags.id);
              }
            }
          });
        }
        if (null != first_message.referenced_message) {
          const referenced_message = first_message.referenced_message;
          closure_0 = false;
          const mention_games1 = referenced_message.mention_games;
          if (mention_games1 != null) {
            const item1 = mention_games1.forEach((game_flags) => {
              if (tmp) {
                if (!closure_1_3.has(game_flags.id)) {
                  const tmp8 = new closure_1_2(game_flags);
                  const result = closure_1_3.set(game_flags.id, tmp8);
                  c0 = true;
                  closure_1_6.delete(game_flags.id);
                  closure_1_5.delete(game_flags.id);
                }
              }
            });
          }
          if (null != referenced_message.referenced_message) {
            closure_0 = closure_1_7(referenced_message.referenced_message) || closure_0;
            const tmp4 = closure_1_7(referenced_message.referenced_message) || closure_0;
          }
          let tmp5 = closure_0;
          if (!closure_0) {
            tmp5 = closure_0;
          }
          closure_0 = tmp5;
        }
        let tmp6 = closure_0;
        if (!closure_0) {
          tmp6 = closure_0;
        }
        closure_0 = tmp6;
      }
      if (null != most_recent_message) {
        closure_0 = false;
        const mention_games2 = most_recent_message.mention_games;
        if (mention_games2 != null) {
          const item2 = mention_games2.forEach((game_flags) => {
            if (tmp) {
              if (!closure_1_3.has(game_flags.id)) {
                const tmp8 = new closure_1_2(game_flags);
                const result = closure_1_3.set(game_flags.id, tmp8);
                c0 = true;
                closure_1_6.delete(game_flags.id);
                closure_1_5.delete(game_flags.id);
              }
            }
          });
        }
        if (null != most_recent_message.referenced_message) {
          const referenced_message2 = most_recent_message.referenced_message;
          closure_0 = false;
          const mention_games3 = referenced_message2.mention_games;
          if (mention_games3 != null) {
            const item3 = mention_games3.forEach((game_flags) => {
              if (tmp) {
                if (!closure_1_3.has(game_flags.id)) {
                  const tmp8 = new closure_1_2(game_flags);
                  const result = closure_1_3.set(game_flags.id, tmp8);
                  c0 = true;
                  closure_1_6.delete(game_flags.id);
                  closure_1_5.delete(game_flags.id);
                }
              }
            });
          }
          if (null != referenced_message2.referenced_message) {
            closure_0 = closure_1_7(referenced_message2.referenced_message) || closure_0;
            const tmp10 = closure_1_7(referenced_message2.referenced_message) || closure_0;
          }
          let tmp11 = closure_0;
          if (!closure_0) {
            tmp11 = closure_0;
          }
          closure_0 = tmp11;
        }
        let tmp12 = closure_0;
        if (!closure_0) {
          tmp12 = closure_0;
        }
        closure_0 = tmp12;
      }
    });
    return c0;
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
    supplementalData = supplementalData.supplementalData;
    c0 = false;
    let item = supplementalData.forEach((message_preview) => {
      message_preview = message_preview.message_preview;
      if (null != message_preview) {
        closure_0 = false;
        const mention_games = message_preview.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach((game_flags) => {
            if (tmp) {
              if (!closure_1_3.has(game_flags.id)) {
                const tmp8 = new closure_1_2(game_flags);
                const result = closure_1_3.set(game_flags.id, tmp8);
                c0 = true;
                closure_1_6.delete(game_flags.id);
                closure_1_5.delete(game_flags.id);
              }
            }
          });
        }
        if (null != message_preview.referenced_message) {
          const referenced_message = message_preview.referenced_message;
          closure_0 = false;
          const mention_games1 = referenced_message.mention_games;
          if (mention_games1 != null) {
            const item1 = mention_games1.forEach((game_flags) => {
              if (tmp) {
                if (!closure_1_3.has(game_flags.id)) {
                  const tmp8 = new closure_1_2(game_flags);
                  const result = closure_1_3.set(game_flags.id, tmp8);
                  c0 = true;
                  closure_1_6.delete(game_flags.id);
                  closure_1_5.delete(game_flags.id);
                }
              }
            });
          }
          if (null != referenced_message.referenced_message) {
            closure_0 = closure_1_7(referenced_message.referenced_message) || closure_0;
            const tmp4 = closure_1_7(referenced_message.referenced_message) || closure_0;
          }
          let tmp5 = closure_0;
          if (!closure_0) {
            tmp5 = closure_0;
          }
          closure_0 = tmp5;
        }
        let tmp6 = closure_0;
        if (!closure_0) {
          tmp6 = closure_0;
        }
        closure_0 = tmp6;
      }
    });
    return c0;
  },
  LOAD_ICYMI_HYDRATED: function handleLoadICYMIHydratedItems(messageItems) {
    messageItems = messageItems.messageItems;
    c0 = false;
    let item = messageItems.forEach((message) => {
      if (null != message.message) {
        message = message.message;
        closure_0 = false;
        const mention_games = message.mention_games;
        if (mention_games != null) {
          const item = mention_games.forEach((game_flags) => {
            if (tmp) {
              if (!closure_1_3.has(game_flags.id)) {
                const tmp8 = new closure_1_2(game_flags);
                const result = closure_1_3.set(game_flags.id, tmp8);
                c0 = true;
                closure_1_6.delete(game_flags.id);
                closure_1_5.delete(game_flags.id);
              }
            }
          });
        }
        if (null != message.referenced_message) {
          const referenced_message = message.referenced_message;
          closure_0 = false;
          const mention_games1 = referenced_message.mention_games;
          if (mention_games1 != null) {
            const item1 = mention_games1.forEach((game_flags) => {
              if (tmp) {
                if (!closure_1_3.has(game_flags.id)) {
                  const tmp8 = new closure_1_2(game_flags);
                  const result = closure_1_3.set(game_flags.id, tmp8);
                  c0 = true;
                  closure_1_6.delete(game_flags.id);
                  closure_1_5.delete(game_flags.id);
                }
              }
            });
          }
          if (null != referenced_message.referenced_message) {
            closure_0 = closure_1_7(referenced_message.referenced_message) || closure_0;
            const tmp4 = closure_1_7(referenced_message.referenced_message) || closure_0;
          }
          let tmp5 = closure_0;
          if (!closure_0) {
            tmp5 = closure_0;
          }
          closure_0 = tmp5;
        }
        let tmp6 = closure_0;
        if (!closure_0) {
          tmp6 = closure_0;
        }
        closure_0 = tmp6;
      }
    });
    return c0;
  }
});
let result = set.fileFinishedImporting("modules/games/GameStore.tsx");

export default gameStore;