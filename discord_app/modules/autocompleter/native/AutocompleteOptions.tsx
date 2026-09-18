// discord_app/modules/autocompleter/native/AutocompleteOptions.tsx
import util from "../../../intl/index.native.tsx";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import executeCommandDefault from "../../application_commands/executeCommand.tsx";
import StickersActionCreators from "../../stickers/StickersActionCreators.tsx";
import ApplicationCommandAutocompleteStore from "../../application_commands/ApplicationCommandAutocompleteStore.tsx";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import GameAutocompleteStore from "../../games/autocomplete/GameAutocompleteStore.tsx";
import StickersStore from "../../stickers/StickersStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import apply from "../../../../_runtime/metro/00012__.js";

require = fn;
const Constants = fn(1074);
({ AutoCompleteResultTypes: c10, MAX_AUTOCOMPLETE_RESULTS: closure_11 } = Constants);
const ChannelAutocompleteConstants = fn(5169);
({
  MENTION_SENTINEL: closure_12,
  EMOJI_SENTINEL: map1,
  CHANNEL_SENTINEL: closure_14,
  COMMAND_SENTINEL: closure_15,
} = ChannelAutocompleteConstants);
const AutocompleteTypes = fn(10667).AutocompleteTypes;
const EmojiConstants = fn(1375);
({ EmojiIntention: closure_17, EMOJI_MAX_LENGTH: closure_18, EMOJI_URL_BASE_SIZE: closure_19 } = EmojiConstants);
let c20 = false;
const executeCommand = apply.debounce(executeCommandDefault, fn(5168).AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, {
  leading: true,
  trailing: true,
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteOptions.tsx");

export const getAutocompleteOptions = function getAutocompleteOptions(channel, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let flag2 = setting;
  if (setting === undefined) {
    flag2 = true;
  }
  let obj = {
    stores: null,
    queryResults(query, canMentionEveryone, request) {
      const obj2 = {
        query,
        channel,
        canMentionEveryone: null,
        canMentionHere: null,
        canMentionUsers: null,
        canMentionRoles: null,
        includeAllGuildUsers: null,
        includeNonMentionableRoles: null,
        canMentionOtherGlobals: null,
        request: null,
      };
      canMentionEveryone = undefined;
      if (canMentionEveryone != null) {
        canMentionEveryone = canMentionEveryone.canMentionEveryone;
      }
      obj2.canMentionEveryone = canMentionEveryone;
      let canMentionHere;
      if (canMentionEveryone != null) {
        canMentionHere = canMentionEveryone.canMentionHere;
      }
      obj2.canMentionHere = canMentionHere;
      let canMentionUsers;
      if (canMentionEveryone != null) {
        canMentionUsers = canMentionEveryone.canMentionUsers;
      }
      obj2.canMentionUsers = canMentionUsers;
      let canMentionRoles;
      if (canMentionEveryone != null) {
        canMentionRoles = canMentionEveryone.canMentionRoles;
      }
      obj2.canMentionRoles = canMentionRoles;
      let prop;
      if (canMentionEveryone != null) {
        prop = canMentionEveryone.canMentionAnyGuildUser;
      }
      obj2.includeAllGuildUsers = prop;
      let prop1;
      if (canMentionEveryone != null) {
        prop1 = canMentionEveryone.canMentionNonMentionableRoles;
      }
      obj2.includeNonMentionableRoles = prop1;
      let prop2;
      if (canMentionEveryone != null) {
        prop2 = canMentionEveryone.canMentionOtherGlobals;
      }
      obj2.canMentionOtherGlobals = prop2;
      obj2.request = request;
      ({ users, globals, roles } = AutocompleteUtilsDefault.queryMentionResults(obj2));
      const queryMentionResultsResult = AutocompleteUtilsDefault.queryMentionResults(obj2);
      const items = [
        ...users.map((item) => {
          const merged = Object.assign(item);
          return { type: constants.USER };
        }),
        ...globals.map((item) => {
          const merged = Object.assign(item);
          return { type: constants.GLOBAL };
        }),
        ...roles.map((item) => {
          const merged = Object.assign(item);
          return { type: constants.ROLE };
        }),
      ];
      const tmpResult = apply;
      return apply(items).value();
    },
    matches(arg0, arg1) {
      return flag(flag2[14]).matchSentinel(arg0, arg1, closure_1_12);
    },
  };
  let items = [GuildMemberStore, GameAutocompleteStore];
  obj.stores = items;
  let obj2 = {
    stores: null,
    queryResults(query) {
      const IncludeGameMentionsInAutocomplete = channel(flag2[15]).IncludeGameMentionsInAutocomplete;
      if (IncludeGameMentionsInAutocomplete.getSetting()) {
        if (0 !== query.length) {
          let result = channel(flag2[16]).queryGamesAutocomplete(query);
          if (result == null) {
            result = [];
          }
          const substr = result.slice(0, closure_1_11);
          const mapped = substr.map((game) => ({ type: constants.GAME_MENTION, game }));
          const tmpResult = channel(flag2[16]);
        }
        return [];
      }
    },
    matches() {
      return false;
    },
  };
  let items1 = [GameAutocompleteStore];
  obj2.stores = items1;
  let obj8 = {
    stores: null,
    queryResults(query, option) {
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
            const obj2 = { command: null, optionValues: null, context: null };
            ({ activeCommand: obj3.command, optionValues: obj3.optionValues } = option);
            const obj4 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: null };
            const obj5 = { name: option.option.name, query };
            obj4.autocomplete = obj5;
            obj2.context = obj4;
            executeCommand(obj2);
            const autocompleteChoices = ApplicationCommandAutocompleteStore.getAutocompleteChoices(
              channel.id,
              option.option.name,
              query,
            );
            if (null == autocompleteChoices) {
              const _Array = Array;
              const array = new Array(4);
              const obj6 = { type: constants.CHOICE_LOADING };
              let fillResult = array.fill(obj6);
            } else if (0 === autocompleteChoices.length) {
              const obj7 = { type: constants.LABEL, label: null };
              const intl = util.intl;
              obj7.label = intl.string(util.t["41014u"]);
              const items = [obj7];
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
        const obj8 = { query, choices };
        const choices1 = AutocompleteUtilsDefault.queryChoiceResults(obj8).choices;
        items1 = choices1.map((choice) => ({ type: constants.CHOICE, choice }));
      }
      return items1;
    },
    matches() {
      return false;
    },
  };
  let items2 = [ApplicationCommandStore, ApplicationCommandAutocompleteStore];
  obj8.stores = items2;
  return {
    [closure_16.MENTIONS]: obj,
    [closure_16.GAME_MENTIONS]: obj2,
    [closure_16.TIMESTAMPS]: {
      queryResults(str) {
        const TimestampAutocompleteMobileExperiment = channel(flag2[17]).TimestampAutocompleteMobileExperiment;
        const items = [];
        if (TimestampAutocompleteMobileExperiment.getConfig({ location: "timestamps autocomplete" }).enabled) {
          const result = channel(flag2[18]).queryTimestampSuggestions(str.trim());
          const iter = result[Symbol.iterator]();
          const nextResult = iter.next();
          while (iter !== undefined) {
            let tmp10 = nextResult;
            if (null != nextResult.mention) {
              let obj = { type: constants.TIMESTAMP_MENTION, mention: null, description: null };
              ({ mention: obj2.mention, description: obj2.description } = tmp10);
              let arr = items.push(obj);
            }
            continue;
          }
          return items;
        } else {
          return items;
        }
      },
      matches() {
        return false;
      },
    },
    [closure_16.CHANNELS]: {
      queryResults(query, channelTypes) {
        if (channelTypes != null) {
          channelTypes = channelTypes.channelTypes;
        }
        let prop;
        if (channelTypes != null) {
          prop = channelTypes.isActiveApplicationCommand;
        }
        const obj = AutocompleteUtilsDefault;
        if (prop) {
          const obj2 = { query, channel, channelTypes };
          let result = obj.queryApplicationCommandChannelResults(obj2);
        } else {
          const obj3 = { query, channel };
          result = obj.queryChannelResults(obj3);
        }
        const channels = result.channels;
        return channels.map((channel) => ({
          type: constants.CHANNEL,
          channel,
          category: channel.getChannel(channel.parent_id),
        }));
      },
      matches(arg0, arg1) {
        const isPrivateResult = channel.isPrivate();
        let matchSentinelResult = !isPrivateResult;
        if (!isPrivateResult) {
          matchSentinelResult = AutocompleteUtilsDefault.matchSentinel(arg0, arg1, closure_2_14);
        }
        return matchSentinelResult;
      },
    },
    [closure_16.EMOJIS_AND_STICKERS]: {
      queryResults(query, includeEmojiPremiumUpsell) {
        let num = 40;
        if (flag2) {
          num = 0;
        }
        const queryEmojiResultsResult = AutocompleteUtilsDefault.queryEmojiResults({
          query,
          channel,
          intention: constants2.CHAT,
          maxCount: closure_2_11 + num,
        });
        let prop;
        if (includeEmojiPremiumUpsell != null) {
          prop = includeEmojiPremiumUpsell.includeEmojiPremiumUpsell;
        }
        if (prop) {
          if (queryEmojiResultsResult.emojis.locked.length > 0) {
            if (queryEmojiResultsResult.emojis.unlocked.length < 4) {
              const obj3 = { type: constants.EMOJI_PREMIUM_UPSELL, results: queryEmojiResultsResult.emojis.locked };
              const items = [obj3];
              let items5 = items;
            }
            let items1 = [];
            if (tmp) {
              let hasLoadedStickerPacks = c20;
              if (!c20) {
                hasLoadedStickerPacks = StickersStore.hasLoadedStickerPacks;
              }
              if (!hasLoadedStickerPacks) {
                c20 = true;
                const stickerPacks = StickersActionCreators.fetchStickerPacks();
              }
              const items2 = [query];
              const items3 = [channel, (arg0, arg1) => arg1 === channel(7533).StickerSendability.SENDABLE];
              items1 = AutocompleteUtilsDefault.queryStickers(items2, true, items3);
              const tmp2Result = AutocompleteUtilsDefault;
            }
            const items4 = [];
            const unlocked = queryEmojiResultsResult.emojis.unlocked;
            HermesBuiltin.arraySpread(
              items5,
              HermesBuiltin.arraySpread(
                unlocked.map((name) => {
                  const obj = { type: constants.EMOJI, name: name.name, url: null, surrogates: null };
                  if (null != name.id) {
                    const obj4 = { id: null, animated: null, size: null };
                    ({ id: obj3.id, animated: obj3.animated } = name);
                    obj4.size = size;
                    let url = flag(1397).getEmojiURL(obj4);
                    const obj2 = flag(1397);
                  } else {
                    url = name.url;
                  }
                  obj.url = url;
                  let surrogates;
                  if (null == name.id) {
                    surrogates = name.surrogates;
                  }
                  obj.surrogates = surrogates;
                  return obj;
                }),
                HermesBuiltin.arraySpread(
                  items1.map((sticker) => {
                    sticker = sticker.sticker;
                    return { type: constants.STICKER, name: sticker.name, sticker };
                  }),
                  0,
                ),
              ),
            );
            return items4;
          }
        }
        items5 = [];
        let obj2 = { query, channel, intention: constants2.CHAT, maxCount: closure_2_11 + num };
        tmp = flag2;
      },
      matches(arg0, arr) {
        let tmp2 = arg0 === closure_1_13;
        if (tmp2) {
          let tmp4 = arr.length < 2;
          if (!tmp4) {
            tmp4 = arr.length > closure_1_18;
          }
          let tmp6 = !tmp4;
          if (!tmp4) {
            tmp6 = !arr.includes(tmp);
          }
          tmp2 = tmp6;
        }
        return tmp2;
      },
    },
    [closure_16.SLASHES]: {
      queryResults() {
        return [];
      },
      matches(arg0, arg1, arg2) {
        let tmp = 0 === arg2;
        if (tmp) {
          tmp = arg0 === __initData;
        }
        if (tmp) {
          let tmp4 = flag;
          if (flag) {
            tmp4 = 0 === arg1.length;
          }
          tmp = !tmp4;
        }
        return tmp;
      },
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
          tmp = arg0 === __initData;
        }
        if (tmp) {
          tmp = 0 === arg1.length;
        }
        return tmp;
      },
    },
    [closure_16.CHOICES]: obj8,
  };
};
