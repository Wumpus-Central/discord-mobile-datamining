// discord_app/modules/autocompleter/native/AutocompleteOptions.tsx
import _executeCommandDefault from "../../application_commands/executeCommand.tsx";
import handleInit from "../../application_commands/ApplicationCommandAutocompleteStore.tsx";
import handleInit2 from "../../application_commands/ApplicationCommandStore.tsx";
import set from "../../games/autocomplete/GameAutocompleteStore.tsx";
import loadSavedGuildStickers from "../../stickers/StickersStore.tsx";
import ensureGuildLoaded from "../../../stores/ChannelStore.tsx";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import ME from "../../../Constants.tsx";
import regExp from "../../channel_autocomplete/ChannelAutocompleteConstants.tsx";
import { AutocompleteTypes } from "../../channel_text_area/native/ChannelAutocompleteConstants.tsx";
import importDefaultResult from "../../../../_runtime/00012_apply.js";

const require = fn;
({ AutoCompleteResultTypes: c10, MAX_AUTOCOMPLETE_RESULTS: unpackModuleId } = ME);
({ MENTION_SENTINEL: closure_12, EMOJI_SENTINEL: map1, CHANNEL_SENTINEL: closure_14, COMMAND_SENTINEL: closure_15 } = regExp);
({ EmojiIntention: closure_17, EMOJI_MAX_LENGTH: closure_18, EMOJI_URL_BASE_SIZE: closure_19 } = require("set"));
let c20 = false;
let closure_21 = importDefaultResult.debounce(_executeCommandDefault, require("TRUE_OPTION_NAME").AUTOCOMPLETE_OPTION_DEBOUNCE_TIME, { leading: true, trailing: true });
let result = require("obj132").fileFinishedImporting("modules/autocompleter/native/AutocompleteOptions.tsx");

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
  let items = [closure_8, closure_5];
  let items1 = [closure_5];
  let obj = {
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
      return channels.map((item, index) => ({ type: constants.CHANNEL, channel: item, category: channel.getChannel(item.parent_id) }));
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
  };
  let items2 = [closure_4, closure_3];
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
        flag(flag2[14]);
        let obj = { query, channel: _private, intention: closure_1_17.CHAT, maxCount: closure_1_11 + num };
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
            if (tmp) {
              let hasLoadedStickerPacks = c20;
              if (!c20) {
                hasLoadedStickerPacks = closure_1_6.hasLoadedStickerPacks;
              }
              if (!hasLoadedStickerPacks) {
                c20 = true;
                const stickerPacks = _private(tmp3[18]).fetchStickerPacks();
                const obj4 = _private(tmp3[18]);
              }
              const items2 = [query];
              const items3 = [_private, (arg0, arg1) => arg1 === callback(7298).StickerSendability.SENDABLE];
              items1 = tmp2(tmp3[14]).queryStickers(items2, true, items3);
              const tmp2Result = tmp2(tmp3[14]);
            }
            const items4 = [];
            const unlocked = queryEmojiResultsResult.emojis.unlocked;
            let arraySpreadResult = HermesBuiltin.arraySpread(items1.map((item, index) => {
              const sticker = item.sticker;
              return { type: constants.STICKER, name: sticker.name, sticker };
            }), 0);
            arraySpreadResult = HermesBuiltin.arraySpread(items5, HermesBuiltin.arraySpread(unlocked.map((item, index) => {
              let obj = { type: constants.EMOJI, name: item.name, url: null, surrogates: null };
              if (null != item.id) {
                obj = { id: null, animated: null, size: null };
                ({ id: obj3[0], animated: obj3[1] } = item);
                obj[2] = closure_19;
                let url = callback2(1435).getEmojiURL(obj);
                const obj2 = callback2(1435);
              } else {
                url = item.url;
              }
              obj[2] = url;
              let surrogates;
              if (null == item.id) {
                surrogates = item.surrogates;
              }
              obj[3] = surrogates;
              return obj;
            }), arraySpreadResult));
            return items4;
          }
        }
        items5 = [];
        tmp = flag2;
        tmp2 = flag;
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
              ({ activeCommand: obj3[0], optionValues: obj3[1] } = option);
              let obj = { channel: null, guild: null, autocomplete: null };
              obj[0] = _private;
              obj[1] = closure_1_9.getGuild(_private.guild_id);
              obj1 = { name: null, query: null };
              obj1[0] = option.option.name;
              obj1[1] = query;
              obj[2] = obj1;
              obj[2] = obj;
              closure_1_21(obj);
              const autocompleteChoices = closure_1_3.getAutocompleteChoices(_private.id, option.option.name, query);
              if (null == autocompleteChoices) {
                const _Array = Array;
                const array = new Array(4);
                const obj2 = { type: null };
                obj2[0] = closure_1_10.CHOICE_LOADING;
                let fillResult = array.fill(obj2);
              } else if (0 === autocompleteChoices.length) {
                const obj3 = { type: null, label: null };
                obj3[0] = closure_1_10.LABEL;
                const intl = _private(flag2[21]).intl;
                obj3[1] = intl.string(_private(flag2[21]).t["41014u"]);
                const items = [obj3];
                fillResult = items;
              } else {
                fillResult = autocompleteChoices.map((item, index) => ({ type: constants.CHOICE, choice: item }));
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
          obj4[0] = query;
          obj4[1] = choices;
          const choices1 = obj.queryChoiceResults(obj4).choices;
          items1 = choices1.map((item, index) => ({ type: constants.CHOICE, choice: item }));
        }
        return items1;
      },
      matches() {
        return false;
      }
    }
  };
};