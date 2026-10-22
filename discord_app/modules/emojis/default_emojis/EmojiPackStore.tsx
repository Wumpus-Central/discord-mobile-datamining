// discord_app/modules/emojis/default_emojis/EmojiPackStore.tsx
import initializeDefault from "../../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import DefaultEmojisExperiment2 from "DefaultEmojisExperiment.tsx";
import emojiPacksFromServer from "emojiPacksFromServer.tsx";
import ApexExperimentStore from "../../experiments/apex/ApexExperimentStore.tsx";

require = fn;
function handleExperimentChange() {
  const DefaultEmojisExperiment = DefaultEmojisExperiment2.DefaultEmojisExperiment;
  enabled = DefaultEmojisExperiment.getConfig({ location: "emoji_pack_store" }, { autoTrackExposure: false }).enabled;
  let flag = enabled !== enabled;
  if (flag) {
    if (enabled) {
      const packs = obj.packs;
      let flatMapResult = packs.flatMap((available) => {
        if (available.available) {
          const emojis = available.emojis;
          let found = emojis.filter((available) => available.available);
        } else {
          found = [];
        }
        return found;
      });
    } else {
      flatMapResult = items;
    }
    if (flatMapResult.length <= 0) {
      flatMapResult = items;
    }
    items = flatMapResult;
    const _Set = Set;
    flag = true;
    set = new Set(items.map((id) => id.id));
  }
  return flag;
}
let obj = { packs: [], packsById: {}, packIdByEmojiId: {}, fetchState: "NOT_FETCHED" };
let items = [];
let enabled = false;
let set = new Set();
const PersistedStore = initializeDefault.PersistedStore;
class EmojiPackStore extends PersistedStore {}
const prototype = EmojiPackStore.prototype;
prototype["initialize"] = function initialize(packs) {
  let packs1;
  if (packs != null) {
    packs1 = packs.packs;
  }
  obj = {};
  const tmp2 = Array.isArray(packs1) ? packs.packs : [];
  const merged = Object.assign(emojiPacksFromServer.indexEmojiPacks(tmp2));
  obj.fetchState = "NOT_FETCHED";
  const DefaultEmojisExperiment = DefaultEmojisExperiment2.DefaultEmojisExperiment;
  enabled = DefaultEmojisExperiment.getConfig({ location: "emoji_pack_store" }, { autoTrackExposure: false }).enabled;
  if (enabled) {
    packs = obj.packs;
    let flatMapResult = packs.flatMap((available) => {
      if (available.available) {
        const emojis = available.emojis;
        let found = emojis.filter((available) => available.available);
      } else {
        found = [];
      }
      return found;
    });
  } else {
    flatMapResult = items;
  }
  if (flatMapResult.length <= 0) {
    flatMapResult = items;
  }
  items = flatMapResult;
  set = new Set(items.map((id) => id.id));
  items = [ApexExperimentStore];
  this.syncWith(items, handleExperimentChange);
};
prototype["getState"] = function getState() {
  obj = { packs: obj.packs };
  return obj;
};
prototype["getFetchState"] = function getFetchState() {
  return obj.fetchState;
};
prototype["getPacks"] = function getPacks() {
  return obj.packs;
};
prototype["getIndexablePackEmojis"] = function getIndexablePackEmojis() {
  return items;
};
prototype["isPackEmojiUsable"] = function isPackEmojiUsable(emoji) {
  return set.has(emoji.id);
};
prototype["getPack"] = function getPack(arg0) {
  return obj.packsById[arg0];
};
prototype["getPackForEmoji"] = function getPackForEmoji(arg0) {
  let tmp2;
  if (null != obj.packIdByEmojiId[arg0]) {
    tmp2 = obj.packsById[tmp];
  }
  return tmp2;
};
prototype["getEmoji"] = function getEmoji(arg0) {
  closure_0 = arg0;
  const packForEmoji = this.getPackForEmoji(arg0);
  let found;
  if (packForEmoji != null) {
    const emojis = packForEmoji.emojis;
    found = emojis.find((id) => id.id === closure_0);
  }
  return found;
};
EmojiPackStore.displayName = "EmojiPackStore";
EmojiPackStore.persistKey = "EmojiPackStore";
const emojiPackStore = new EmojiPackStore(DispatcherDefault, {
  LOGOUT: function handleReset() {
    if (enabled) {
      const packs = obj.packs;
      let flatMapResult = packs.flatMap((available) => {
        if (available.available) {
          const emojis = available.emojis;
          let found = emojis.filter((available) => available.available);
        } else {
          found = [];
        }
        return found;
      });
    } else {
      flatMapResult = items;
    }
    if (flatMapResult.length <= 0) {
      flatMapResult = items;
    }
    items = flatMapResult;
    set = new Set(items.map((id) => id.id));
  },
  EMOJI_PACKS_FETCH_START: function handleFetchStart() {
    if ("FETCHING" === obj.fetchState) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj);
      obj.fetchState = "FETCHING";
    }
  },
  EMOJI_PACKS_FETCH_SUCCESS: function handleFetchSuccess(packs) {
    obj = {};
    const merged = Object.assign(emojiPacksFromServer.emojiPacksFromServer(packs.packs));
    obj.fetchState = "FETCHED";
    if (enabled) {
      packs = obj.packs;
      let flatMapResult = packs.flatMap((available) => {
        if (available.available) {
          const emojis = available.emojis;
          let found = emojis.filter((available) => available.available);
        } else {
          found = [];
        }
        return found;
      });
    } else {
      flatMapResult = items;
    }
    if (flatMapResult.length <= 0) {
      flatMapResult = items;
    }
    items = flatMapResult;
    set = new Set(items.map((id) => id.id));
  },
  EMOJI_PACKS_FETCH_FAIL: function handleFetchFail() {
    obj = {};
    const merged = Object.assign(obj);
    obj.fetchState = "FAILED";
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/emojis/default_emojis/EmojiPackStore.tsx");

export default emojiPackStore;
