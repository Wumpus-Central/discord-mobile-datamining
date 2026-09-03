// === Module 10441: getAutocompleteOptions ===

// Module 10441 (getAutocompleteOptions)
import applyDefault from "apply" /* 12 */;
import _executeCommandDefault from "_executeCommand" /* 8451 */;
import closure_3 from "handleInit" /* 7534 */;
import closure_4 from "handleInit" /* 7535 */;
import closure_5 from "set" /* 5062 */;
import closure_6 from "loadSavedGuildStickers" /* 5453 */;
import closure_7 from "ensureGuildLoaded" /* 1386 */;
import closure_8 from "trackCommunicationDisabled" /* 1991 */;
import closure_9 from "createGuildRecordFromRust" /* 1908 */;
import ME from "ME" /* 673 */;
import regExp from "regExp" /* 4954 */;
import { AutocompleteTypes } from "AutocompleteTypes" /* 10442 */;
import set from "set" /* 1924 */;

const require = arg1;
({ AutoCompleteResultTypes: c10, MAX_AUTOCOMPLETE_RESULTS: unpackModuleId } = ME);
({ MENTION_SENTINEL: closure_12, EMOJI_SENTINEL: map1, CHANNEL_SENTINEL: closure_14, COMMAND_SENTINEL: closure_15 } = regExp);
({ EmojiIntention: closure_17, EMOJI_MAX_LENGTH: closure_18, EMOJI_URL_BASE_SIZE: closure_19 } = set);
let c20 = false;
let closure_21 = applyDefault.debounce(_executeCommandDefault, require("TRUE_OPTION_NAME").AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { leading: true, trailing: true });
let result = set.fileFinishedImporting("modules/autocompleter/native/AutocompleteOptions.tsx");

export const getAutocompleteOptions = function getAutocompleteOptions(channel, arg1, setting) {
  closure_0 = channel;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = setting;
  if (setting === undefined) {
    flag2 = true;
  }
  let obj = {
    stores: items,
    queryResults(query, canMentionEveryone) {
      let obj = flag(flag2[14]);
      obj = { query, channel: closure_0, canMentionEveryone: null, canMentionHere: null, canMentionUsers: null, canMentionRoles: null, includeAllGuildUsers: null, includeNonMentionableRoles: null, request: null };
      canMentionEveryone = undefined;
      if (canMentionEveryone != null) {
        canMentionEveryone = canMentionEveryone.canMentionEveryone;
      }
      obj[2] = canMentionEveryone;
      let canMentionHere;
      if (canMentionEveryone != null) {
        canMentionHere = canMentionEveryone.canMentionHere;
      }
      obj[3] = canMentionHere;
      let canMentionUsers;
      if (canMentionEveryone != null) {
        canMentionUsers = canMentionEveryone.canMentionUsers;
      }
      obj[4] = canMentionUsers;
      let canMentionRoles;
      if (canMentionEveryone != null) {
        canMentionRoles = canMentionEveryone.canMentionRoles;
      }
      obj[5] = canMentionRoles;
      let prop;
      if (canMentionEveryone != null) {
        prop = canMentionEveryone.canMentionAnyGuildUser;
      }
      obj[6] = prop;
      let prop1;
      if (canMentionEveryone != null) {
        prop1 = canMentionEveryone.canMentionNonMentionableRoles;
      }
      obj[7] = prop1;
      obj[8] = arg2;
      ({ users, globals, roles } = obj.queryMentionResults(obj));
      const queryMentionResultsResult = obj.queryMentionResults(obj);
      const tmp = flag;
      const tmp2 = flag2;
      const items = [
        ...users.map((arg0) => {
          const merged = Object.assign(arg0);
          return { type: constants.USER };
        }),
        ...globals.map((arg0) => {
          const merged = Object.assign(arg0);
          return { type: constants.GLOBAL };
        }),
        ...roles.map((arg0) => {
          const merged = Object.assign(arg0);
          return { type: constants.ROLE };
        })
      ];
      const tmpResult = flag(flag2[12]);
      return flag(flag2[12])(items).value();
    },
    matches(arg0, arg1) {
      return flag(flag2[14]).matchSentinel(arg0, arg1, closure_12);
    }
  };
  items = [closure_8, closure_5];
  obj = {
    stores: items1,
    queryResults(query) {
      const IncludeGameMentionsInAutocomplete = _private(flag2[15]).IncludeGameMentionsInAutocomplete;
      if (IncludeGameMentionsInAutocomplete.getSetting()) {
        if (0 !== query.length) {
          let result = _private(flag2[16]).queryGamesAutocomplete(query);
          if (result == null) {
            result = [];
          }
          const substr = result.slice(0, closure_11);
          const mapped = substr.map((game) => ({ type: constants.GAME_MENTION, game }));
          const tmpResult = _private(flag2[16]);
        }
        return [];
      }
    },
    matches() {
      return false;
    }
  };
  items1 = [closure_5];
  obj = {
    queryResults(str) {
      const TimestampAutocompleteMobileExperiment = _private(flag2[17]).TimestampAutocompleteMobileExperiment;
      const items = [];
      if (TimestampAutocompleteMobileExperiment.getConfig({ location: "timestamps autocomplete" }).enabled) {
        const result = tmp(tmp2[18]).queryTimestampSuggestions(str.trim());
        const iter = result[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp10 = nextResult;
          if (null != nextResult.mention) {
            let obj = { type: null, mention: null, description: null };
            let tmp11 = constants;
            obj[0] = constants.TIMESTAMP_MENTION;
            let tmp12 = nextResult;
            ({ mention: obj2[1], description: obj2[2] } = tmp10);
            let arr = items.push(obj);
          }
          continue;
        }
        return items;
      } else {
        return items;
      }
      tmp = _private;
      tmp2 = flag2;
    },
    matches() {
      return false;
    }
  };
  let items2 = [closure_4, closure_3];
  return {
    [closure_16.MENTIONS]: obj,
    [closure_16.GAME_MENTIONS]: obj,
    [closure_16.TIMESTAMPS]: obj,
    [closure_16.CHANNELS]: {
      queryResults(arg0, channelTypes) {
        if (channelTypes != null) {
          channelTypes = channelTypes.channelTypes;
        }
        let prop;
        if (channelTypes != null) {
          prop = channelTypes.isActiveApplicationCommand;
        }
        let obj = flag(flag2[14]);
        if (prop) {
          obj = { query: null, channel: null, channelTypes: null };
          obj[0] = arg0;
          obj[1] = closure_0;
          obj[2] = channelTypes;
          let result = obj.queryApplicationCommandChannelResults(obj);
        } else {
          obj = { query: null, channel: null };
          obj[0] = arg0;
          obj[1] = closure_0;
          result = obj.queryChannelResults(obj);
        }
        const channels = result.channels;
        return channels.map((channel) => ({ type: constants.CHANNEL, channel, category: channel.getChannel(channel.parent_id) }));
      },
      matches(arg0, arg1) {
        const isPrivateResult = _private.isPrivate();
        let matchSentinelResult = !isPrivateResult;
        if (!isPrivateResult) {
          matchSentinelResult = flag(flag2[14]).matchSentinel(arg0, arg1, closure_1_14);
          const obj = flag(flag2[14]);
        }
        return matchSentinelResult;
      }
    },
    [closure_16.EMOJIS_AND_STICKERS]: {
      queryResults(query, includeEmojiPremiumUpsell) {
        let num = 40;
        if (flag2) {
          num = 0;
        }
        let obj = flag(flag2[14]);
        obj = { query, channel: _private, intention: closure_1_17.CHAT, maxCount: closure_1_11 + num };
        const queryEmojiResultsResult = obj.queryEmojiResults(obj);
        let prop;
        if (includeEmojiPremiumUpsell != null) {
          prop = includeEmojiPremiumUpsell.includeEmojiPremiumUpsell;
        }
        if (prop) {
          if (queryEmojiResultsResult.emojis.locked.length > 0) {
            if (queryEmojiResultsResult.emojis.unlocked.length < 4) {
              obj = { type: null, results: null };
              obj[0] = closure_1_10.EMOJI_PREMIUM_UPSELL;
              obj[1] = queryEmojiResultsResult.emojis.locked;
              const items = [obj];
              let items5 = items;
            }
            let items1 = [];
            if (flag2) {
              let hasLoadedStickerPacks = c20;
              if (!c20) {
                hasLoadedStickerPacks = closure_1_6.hasLoadedStickerPacks;
              }
              if (!hasLoadedStickerPacks) {
                c20 = true;
                const stickerPacks = _private(tmp3[19]).fetchStickerPacks();
                const obj4 = _private(tmp3[19]);
              }
              const items2 = [query];
              const items3 = [_private, (arg0, arg1) => arg1 === callback(6191).StickerSendability.SENDABLE];
              items1 = flag(tmp3[14]).queryStickers(items2, true, items3);
              const tmp2Result = flag(tmp3[14]);
            }
            const items4 = [];
            const unlocked = queryEmojiResultsResult.emojis.unlocked;
            let arraySpreadResult = HermesBuiltin.arraySpread(items1.map((sticker) => {
              sticker = sticker.sticker;
              return { type: constants.STICKER, name: sticker.name, sticker };
            }), 0);
            arraySpreadResult = HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(unlocked.map((name) => {
              let obj = { type: constants.EMOJI, name: name.name, url: null, surrogates: null };
              if (null != name.id) {
                obj = { id: null, animated: null, size: null };
                ({ id: obj3[0], animated: obj3[1] } = name);
                obj[2] = closure_19;
                let url = callback2(1430).getEmojiURL(obj);
                const obj2 = callback2(1430);
              } else {
                url = name.url;
              }
              obj[2] = url;
              let surrogates;
              if (null == name.id) {
                surrogates = name.surrogates;
              }
              obj[3] = surrogates;
              return obj;
            }), arraySpreadResult));
            return items4;
          }
        }
        items5 = [];
      },
      matches(arg0, arr) {
        let tmp2 = arg0 === closure_13;
        if (tmp2) {
          let tmp4 = arr.length < 2;
          if (!tmp4) {
            tmp4 = arr.length > closure_18;
          }
          let tmp6 = !tmp4;
          if (!tmp4) {
            tmp6 = !arr.includes(tmp);
          }
          tmp2 = tmp6;
        }
        return tmp2;
      }
    },
    [closure_16.SLASHES]: {
      queryResults() {
        return [];
      },
      matches(arg0, arg1, arg2) {
        let tmp = 0 === arg2;
        if (tmp) {
          tmp = arg0 === closure_1_15;
        }
        if (tmp) {
          let tmp4 = flag;
          if (flag) {
            tmp4 = 0 === arg1.length;
          }
          tmp = !tmp4;
        }
        return tmp;
      }
    },
    [closure_16.SLASHES_DISCOVERY]: {
      queryResults() {
        return [];
      },
      matches(arg0, arg1, arg2) {
        let tmp = flag;
        if (flag) {
          tmp = 0 === arg2;
        }
        if (tmp) {
          tmp = arg0 === closure_1_15;
        }
        if (tmp) {
          tmp = 0 === arg1.length;
        }
        return tmp;
      }
    },
    [closure_16.CHOICES]: {
      stores: items2,
      queryResults(first, option) {
        let autocomplete;
        if (option != null) {
          option = option.option;
          if (option != null) {
            autocomplete = option.autocomplete;
          }
        }
        if (autocomplete) {
          let activeCommand;
          if (option != null) {
            activeCommand = option.activeCommand;
          }
          if (null != activeCommand) {
            let optionValues;
            if (option != null) {
              optionValues = option.optionValues;
            }
            if (null != optionValues) {
              let obj = { command: null, optionValues: null, context: null };
              ({ activeCommand: obj3[0], optionValues: obj3[1] } = option);
              obj = { channel: null, guild: null, autocomplete: null };
              obj[0] = _private;
              obj[1] = closure_1_9.getGuild(_private.guild_id);
              obj1 = { name: null, query: null };
              obj1[0] = option.option.name;
              obj1[1] = first;
              obj[2] = obj1;
              obj[2] = obj;
              closure_1_21(obj);
              const autocompleteChoices = closure_1_3.getAutocompleteChoices(_private.id, option.option.name, first);
              if (null == autocompleteChoices) {
                const _Array = Array;
                const array = new Array(4);
                const obj2 = { type: null };
                obj2[0] = closure_1_10.CHOICE_LOADING;
                let fillResult = array.fill(obj2);
              } else if (0 === autocompleteChoices.length) {
                const obj3 = { type: null, label: null };
                obj3[0] = closure_1_10.LABEL;
                const intl = _private(flag2[22]).intl;
                obj3[1] = intl.string(_private(flag2[22]).t["41014u"]);
                const items = [obj3];
                fillResult = items;
              } else {
                fillResult = autocompleteChoices.map((choice) => ({ type: constants.CHOICE, choice }));
              }
              return fillResult;
            }
          }
        }
        let choices;
        if (option != null) {
          choices = option.choices;
        }
        if (null == choices) {
          let items1 = [];
        } else {
          obj = flag(flag2[14]);
          const obj4 = { query: null, choices: null };
          obj4[0] = first;
          obj4[1] = choices;
          const choices1 = obj.queryChoiceResults(obj4).choices;
          items1 = choices1.map((choice) => ({ type: constants.CHOICE, choice }));
        }
        return items1;
      },
      matches() {
        return false;
      }
    }
  };
};