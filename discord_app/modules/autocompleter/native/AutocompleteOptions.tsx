// discord_app/modules/autocompleter/native/AutocompleteOptions.tsx
import handleInit from "handleInit";
import closure_4 from "handleInit";
import closure_5 from "set";
import loadSavedGuildStickers from "loadSavedGuildStickers";
import ensureGuildLoaded from "ensureGuildLoaded";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import ME from "ME";
import regExp from "regExp";
import { AutocompleteTypes } from "AutocompleteTypes";
import set from "set";
import _executeCommand from "_executeCommand";
import set from "set";

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let map1;
let unpackModuleId;
const require = arg1;
({ AutoCompleteResultTypes: c10, MAX_AUTOCOMPLETE_RESULTS: unpackModuleId } = ME);
({ MENTION_SENTINEL: closure_12, EMOJI_SENTINEL: map1, CHANNEL_SENTINEL: closure_14, COMMAND_SENTINEL: closure_15 } = regExp);
({ EmojiIntention: closure_17, EMOJI_MAX_LENGTH: closure_18, EMOJI_URL_BASE_SIZE: closure_19 } = set);
let c20 = false;
let result = set.fileFinishedImporting("modules/autocompleter/native/AutocompleteOptions.tsx");

export const getAutocompleteOptions = function getAutocompleteOptions(channel, arg1, setting) {
  let closure_0 = channel;
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
      let globals;
      let roles;
      let users;
      let obj = flag(flag2[14]);
      obj = { query, channel: _private, canMentionEveryone: null, canMentionHere: null, canMentionUsers: null, canMentionRoles: null, includeAllGuildUsers: null, includeNonMentionableRoles: null, request: null };
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
      const tmp10 = _private;
      const gameMentionsAutocompleteConfig = _private(flag2[15]).getGameMentionsAutocompleteConfig("mentions autocomplete");
      let canMentionGames;
      if (canMentionEveryone != null) {
        canMentionGames = canMentionEveryone.canMentionGames;
      }
      if (true === canMentionGames) {
        if (gameMentionsAutocompleteConfig.enabled) {
          if (gameMentionsAutocompleteConfig.combineMentionAutocomplete) {
            if (query.length > 0) {
              let prop2;
              if (canMentionEveryone != null) {
                prop2 = canMentionEveryone.isActiveApplicationCommand;
              }
              if (!prop2) {
                let result = tmp10(tmp2[16]).queryGamesAutocomplete(query);
                if (result == null) {
                  result = [];
                }
                const substr = result.slice(0, 1);
                let mapped = substr.map((game) => ({ type: constants.GAME_MENTION, game }));
                const tmp10Result = tmp10(tmp2[16]);
              }
              const items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(users.map((arg0) => {
                const merged = Object.assign(arg0);
                return { type: constants.USER };
              }), 0);
              arraySpreadResult = HermesBuiltin.arraySpread(globals.map((arg0) => {
                const merged = Object.assign(arg0);
                return { type: constants.GLOBAL };
              }), arraySpreadResult);
              HermesBuiltin.arraySpread(mapped, HermesBuiltin.arraySpread(roles.map((arg0) => {
                const merged = Object.assign(arg0);
                return { type: constants.ROLE };
              }), arraySpreadResult));
              const tmpResult = tmp(tmp2[12]);
              return tmp(tmp2[12])(items).value();
            }
          }
        }
      }
      mapped = [];
    },
    matches(arg0, arg1) {
      return flag(flag2[14]).matchSentinel(arg0, arg1, closure_12);
    }
  };
  items = [trackCommunicationDisabled, closure_5];
  obj = {
    stores: items1,
    queryResults(query) {
      const gameMentionsAutocompleteConfig = _private(flag2[15]).getGameMentionsAutocompleteConfig("game_mentions autocomplete");
      if (gameMentionsAutocompleteConfig.enabled) {
        if (!gameMentionsAutocompleteConfig.combineMentionAutocomplete) {
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
      }
    },
    matches() {
      return false;
    }
  };
  items1 = [closure_5];
  obj = {
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
        matchSentinelResult = flag(flag2[14]).matchSentinel(arg0, arg1, outer1_14);
        const obj = flag(flag2[14]);
      }
      return matchSentinelResult;
    }
  };
  let items2 = [closure_4, handleInit];
  return {
    [closure_16.MENTIONS]: obj,
    [closure_16.GAME_MENTIONS]: obj,
    [closure_16.CHANNELS]: obj,
    [closure_16.EMOJIS_AND_STICKERS]: {
      queryResults(query, includeEmojiPremiumUpsell) {
        let num = 40;
        if (flag2) {
          num = 0;
        }
        let obj = flag(flag2[14]);
        obj = { query, channel: _private, intention: outer1_17.CHAT, maxCount: outer1_11 + num };
        const queryEmojiResultsResult = obj.queryEmojiResults(obj);
        let prop;
        if (includeEmojiPremiumUpsell != null) {
          prop = includeEmojiPremiumUpsell.includeEmojiPremiumUpsell;
        }
        if (prop) {
          if (queryEmojiResultsResult.emojis.locked.length > 0) {
            if (queryEmojiResultsResult.emojis.unlocked.length < 4) {
              obj = { type: null, results: null };
              obj[0] = outer1_10.EMOJI_PREMIUM_UPSELL;
              obj[1] = queryEmojiResultsResult.emojis.locked;
              const items = [obj];
              let items5 = items;
            }
            let items1 = [];
            if (flag2) {
              let hasLoadedStickerPacks = outer1_20;
              if (!outer1_20) {
                hasLoadedStickerPacks = outer1_6.hasLoadedStickerPacks;
              }
              if (!hasLoadedStickerPacks) {
                outer1_20 = true;
                const stickerPacks = _private(tmp3[17]).fetchStickerPacks();
                const obj4 = _private(tmp3[17]);
              }
              const items2 = [query];
              const items3 = [_private, (arg0, arg1) => arg1 === callback(9633).StickerSendability.SENDABLE];
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
                let url = callback2(1416).getEmojiURL(obj);
                const obj2 = callback2(1416);
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
          tmp = arg0 === outer1_15;
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
          tmp = arg0 === outer1_15;
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
              obj[1] = outer1_9.getGuild(_private.guild_id);
              const obj1 = { name: null, query: null };
              obj1[0] = option.option.name;
              obj1[1] = first;
              obj[2] = obj1;
              obj[2] = obj;
              outer1_21(obj);
              const autocompleteChoices = outer1_3.getAutocompleteChoices(_private.id, option.option.name, first);
              if (null == autocompleteChoices) {
                const _Array = Array;
                const array = new Array(4);
                const obj2 = { type: null };
                obj2[0] = outer1_10.CHOICE_LOADING;
                let fillResult = array.fill(obj2);
              } else if (0 === autocompleteChoices.length) {
                const obj3 = { type: null, label: null };
                obj3[0] = outer1_10.LABEL;
                const intl = _private(flag2[20]).intl;
                obj3[1] = intl.string(_private(flag2[20]).t["41014u"]);
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