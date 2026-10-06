// discord_app/modules/autocompleter/native/AutocompleteOptions.tsx
import intl2 from "../../../intl/index.native.tsx";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import ApplicationCommandConstants from "../../application_commands/ApplicationCommandConstants.tsx";
import executeCommandDefault from "../../application_commands/executeCommand.tsx";
import StickersActionCreators from "../../stickers/StickersActionCreators.tsx";
import channel_text_area_ChannelAutocompleteConstants from "../../channel_text_area/native/ChannelAutocompleteConstants.tsx";
import ApplicationCommandAutocompleteStore from "../../application_commands/ApplicationCommandAutocompleteStore.tsx";
import ApplicationCommandStore from "../../application_commands/ApplicationCommandStore.tsx";
import GameAutocompleteStore from "../../games/autocomplete/GameAutocompleteStore.tsx";
import StickersStore from "../../stickers/StickersStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import Constants from "../../../Constants.tsx";
import ChannelAutocompleteConstants from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import EmojiConstants from "../../emojis/EmojiConstants.tsx";
import 00012__ from "../../../../_runtime/metro/00012__.js";
import size from "../../../../_runtime/metro/00002__.js";

let sticker;

let c10;
let closure_12;
let closure_14;
let closure_15;
let closure_17;
let closure_18;
let closure_19;
let map1;
let unpackModuleId;
({ AutoCompleteResultTypes: c10, MAX_AUTOCOMPLETE_RESULTS: unpackModuleId } = Constants);
const AUTOCOMPLETE_OPTION_DEBOUNCE_TIME = ApplicationCommandConstants.AUTOCOMPLETE_OPTION_DEBOUNCE_TIME;
({ MENTION_SENTINEL: closure_12, EMOJI_SENTINEL: map1, CHANNEL_SENTINEL: closure_14, COMMAND_SENTINEL: closure_15 } = ChannelAutocompleteConstants);
const AutocompleteTypes = channel_text_area_ChannelAutocompleteConstants.AutocompleteTypes;
({ EmojiIntention: closure_17, EMOJI_MAX_LENGTH: closure_18, EMOJI_URL_BASE_SIZE: closure_19 } = EmojiConstants);
let c20 = false;
const executeCommand = module_12.debounce(executeCommandDefault, AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { leading: true, trailing: true });
let result = size.fileFinishedImporting("modules/autocompleter/native/AutocompleteOptions.tsx");

export const getAutocompleteOptions = function getAutocompleteOptions(channel, arg1) {
  let items;
  let items1;
  let items2;
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
    queryResults(query, canMentionEveryone, request) {
      let canMentionHere;
      let canMentionRoles;
      let canMentionUsers;
      let globals;
      let prop;
      let prop1;
      let prop2;
      let roles;
      let users;
      let obj = { query, channel, canMentionEveryone, canMentionHere, canMentionUsers, canMentionRoles, includeAllGuildUsers: prop, includeNonMentionableRoles: prop1, canMentionOtherGlobals: prop2, request };
      canMentionEveryone = undefined;
      const queryMentionResults = AutocompleteUtilsDefault.queryMentionResults;
      if (canMentionEveryone != null) {
        canMentionEveryone = canMentionEveryone.canMentionEveryone;
      }
      canMentionHere = undefined;
      if (canMentionEveryone != null) {
        canMentionHere = canMentionEveryone.canMentionHere;
      }
      canMentionUsers = undefined;
      if (canMentionEveryone != null) {
        canMentionUsers = canMentionEveryone.canMentionUsers;
      }
      canMentionRoles = undefined;
      if (canMentionEveryone != null) {
        canMentionRoles = canMentionEveryone.canMentionRoles;
      }
      prop = undefined;
      if (canMentionEveryone != null) {
        prop = canMentionEveryone.canMentionAnyGuildUser;
      }
      prop1 = undefined;
      if (canMentionEveryone != null) {
        prop1 = canMentionEveryone.canMentionNonMentionableRoles;
      }
      prop2 = undefined;
      if (canMentionEveryone != null) {
        prop2 = canMentionEveryone.canMentionOtherGlobals;
      }
      ({ users, globals, roles } = queryMentionResults(obj));
      queryMentionResults(obj);
      const items = [
        ...users.map((item) => {
          const obj = { type: constants.USER };
          const merged = Object.assign(item);
          return obj;
        }),
        ...globals.map((item) => {
          const obj = { type: constants.GLOBAL };
          const merged = Object.assign(item);
          return obj;
        }),
        ...roles.map((item) => {
          const obj = { type: constants.ROLE };
          const merged = Object.assign(item);
          return obj;
        })
      ];
      const tmpResult = module_12;
      const iter = tmpResult(items);
      return iter.value();
    },
    matches(arg0, arg1) {
      const obj = flag(flag2[14]);
      return obj.matchSentinel(arg0, arg1, closure_1_12);
    }
  };
  items = [GuildMemberStore, GameAutocompleteStore];
  let obj2 = {
    stores: items1,
    queryResults(query) {
      const IncludeGameMentionsInAutocomplete = channel(flag2[15]).IncludeGameMentionsInAutocomplete;
      if (IncludeGameMentionsInAutocomplete.getSetting()) {
        if (0 !== query.length) {
          const tmpResult = channel(flag2[16]);
          let result = tmpResult.queryGamesAutocomplete(query, channel(flag2[17]).GameSearchSurface.CHAT_MENTION);
          if (result == null) {
            result = [];
          }
          const substr = result.slice(0, closure_1_11);
          const mapped = substr.map((game) => ({ type: constants.GAME_MENTION, game }));
        }
        return [];
      }
    },
    matches() {
      return false;
    }
  };
  items1 = [GameAutocompleteStore];
  let obj3 = {
    queryResults(str) {
      const TimestampAutocompleteMobileExperiment = channel(flag2[18]).TimestampAutocompleteMobileExperiment;
      const items = [];
      if (TimestampAutocompleteMobileExperiment.getConfig({ location: "timestamps autocomplete" }).enabled) {
        const tmpResult = channel(flag2[19]);
        const result = tmpResult.queryTimestampSuggestions(str.trim());
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
    }
  };
  let obj4 = {
    queryResults(query, channelTypes) {
      let result;
      if (channelTypes != null) {
        channelTypes = channelTypes.channelTypes;
      }
      let prop;
      if (channelTypes != null) {
        prop = channelTypes.isActiveApplicationCommand;
      }
      let obj = AutocompleteUtilsDefault;
      if (prop) {
        const obj2 = { query, channel, channelTypes };
        result = obj.queryApplicationCommandChannelResults(obj2);
      } else {
        const obj3 = { query, channel };
        result = obj.queryChannelResults(obj3);
      }
      const channels = result.channels;
      return channels.map((channel) => {
        const obj = { type: constants.CHANNEL, channel, category: channel.getChannel(channel.parent_id) };
        return obj;
      });
    },
    matches(arg0, arg1) {
      let matchSentinelResult = !channel.isPrivate();
      channel.isPrivate();
      if (matchSentinelResult) {
        const obj = AutocompleteUtilsDefault;
        matchSentinelResult = obj.matchSentinel(arg0, arg1, authStore2);
      }
      return matchSentinelResult;
    }
  };
  let obj5 = {
    queryResults(query, includeEmojiPremiumUpsell) {
      let num = 40;
      if (flag2) {
        num = 0;
      }
      let obj = AutocompleteUtilsDefault;
      let obj2 = { query, channel, intention: constants2.CHAT, maxCount: unpackModuleId + num };
      const queryEmojiResultsResult = obj.queryEmojiResults(obj2);
      let prop;
      if (includeEmojiPremiumUpsell != null) {
        prop = includeEmojiPremiumUpsell.includeEmojiPremiumUpsell;
      }
      if (prop) {
        if (queryEmojiResultsResult.emojis.locked.length > 0) {
          let items5;
          if (queryEmojiResultsResult.emojis.unlocked.length < 4) {
            const obj3 = { type: constants.EMOJI_PREMIUM_UPSELL, results: queryEmojiResultsResult.emojis.locked };
            const items = [obj3];
            items5 = items;
          }
          let items1 = [];
          if (flag2) {
            const hasLoadedStickerPacks = c20 || StickersStore.hasLoadedStickerPacks;
            if (!hasLoadedStickerPacks) {
              flag = true;
              c20 = true;
              let obj4 = StickersActionCreators;
              const stickerPacks = obj4.fetchStickerPacks();
            }
            const items2 = [query];
            const items3 = [channel, (arg0, arg1) => arg1 === channel(flag2[21]).StickerSendability.SENDABLE];
            flag2 = true;
            const tmp3Result = AutocompleteUtilsDefault;
            items1 = tmp3Result.queryStickers(items2, true, items3);
          }
          const items4 = [];
          const unlocked = queryEmojiResultsResult.emojis.unlocked;
          const arraySpreadResult = HermesBuiltin.arraySpread(items4, items1.map((sticker) => {
            sticker = sticker.sticker;
            return { type: constants.STICKER, name: sticker.name, sticker };
          }), 0);
          HermesBuiltin.arraySpread(items4, items5, HermesBuiltin.arraySpread(items4, unlocked.map((name) => {
            let surrogates;
            let url;
            const obj = { type: constants.EMOJI, name: name.name, url, surrogates };
            if (null != name.id) {
              const obj4 = { id: null, animated: null, size };
              ({ id: obj3.id, animated: obj3.animated } = name);
              const obj2 = flag(flag2[22]);
              url = obj2.getEmojiURL(obj4);
            } else {
              url = name.url;
            }
            surrogates = undefined;
            if (null == name.id) {
              surrogates = name.surrogates;
            }
            return obj;
          }), arraySpreadResult));
          return items4;
        }
      }
      items5 = [];
    },
    matches(arg0, arr) {
      let tmp2 = arg0 === closure_1_13;
      if (tmp2) {
        tmp2 = !tmp4 && !arr.includes(tmp);
        !(arr.length < 2 || arr.length > closure_1_18) && !arr.includes(tmp);
      }
      return tmp2;
    }
  };
  let obj6 = {
    queryResults() {
      return [];
    },
    matches(arg0, arg1, arg2) {
      let tmp = 0 === arg2 && arg0 === closure_15;
      if (tmp) {
        tmp = !(flag && 0 === arg1.length);
        const tmp4 = flag && 0 === arg1.length;
      }
      return tmp;
    }
  };
  let obj7 = {
    queryResults() {
      return [];
    },
    matches(arg0, arg1, arg2) {
      return flag && 0 === arg2 && arg0 === closure_15 && 0 === arg1.length;
    }
  };
  let obj8 = {
    stores: items2,
    queryResults(query, option) {
      let intl;
      let items1;
      let obj4;
      let obj5;
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
            let fillResult;
            const obj2 = { command: null, optionValues: null, context: obj4 };
            ({ activeCommand: obj3.command, optionValues: obj3.optionValues } = option);
            obj4 = { channel, guild: GuildStore.getGuild(channel.guild_id), autocomplete: obj5 };
            obj5 = { name: option.option.name, query };
            executeCommand(obj2);
            const autocompleteChoices = ApplicationCommandAutocompleteStore.getAutocompleteChoices(channel.id, option.option.name, query);
            if (null == autocompleteChoices) {
              const _Array = Array;
              const self = this;
              const self2 = this;
              const array = new Array(4);
              const obj6 = { type: constants.CHOICE_LOADING };
              fillResult = array.fill(obj6);
            } else if (0 === autocompleteChoices.length) {
              const obj7 = { type: constants.LABEL, label: intl.string(intl2.t["41014u"]) };
              intl = intl2.intl;
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
        items1 = [];
      } else {
        const obj = AutocompleteUtilsDefault;
        const obj8 = { query, choices };
        const choices1 = obj.queryChoiceResults(obj8).choices;
        items1 = choices1.map((choice) => ({ type: constants.CHOICE, choice }));
      }
      return items1;
    },
    matches() {
      return false;
    }
  };
  items2 = [ApplicationCommandStore, ApplicationCommandAutocompleteStore];
  return { [closure_16.MENTIONS]: obj, [closure_16.GAME_MENTIONS]: obj2, [closure_16.TIMESTAMPS]: obj3, [closure_16.CHANNELS]: obj4, [closure_16.EMOJIS_AND_STICKERS]: obj5, [closure_16.SLASHES]: obj6, [closure_16.SLASHES_DISCOVERY]: obj7, [closure_16.CHOICES]: obj8 };
};