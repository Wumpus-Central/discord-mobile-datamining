// discord_app/modules/favorites/native/buildFavoritesSectionButtons.tsx
import _modDef3412 from "../intl/FavoritesGuild.messages.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _addChannelToFavorites(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: require("asyncRequireImpl")(paths[1], paths.paths), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const obj = { channelIds: null, source: "channel_context_menu" };
        const items = [closure_129_0];
        obj.channelIds = items;
        value.addFavoriteChannels(obj);
        c3 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
let closure_5 = async function _removeChannelFromFavorites(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          c2 = 1;
          c3 = 1;
          const obj4 = { value: require("asyncRequireImpl")(paths[1], paths.paths), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const result = value.removeFavoriteChannel(closure_129_0);
        c3 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

export default function buildFavoritesSectionButtons(channelId) {
  channelId = channelId.channelId;
  if (!channelId.canFavoriteChannel) {
    return null;
  } else if (tmp) {
    const obj2 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
    const intl2 = channelId(1128).intl;
    obj2.label = intl2.string(_modDef3412.TN4nAX);
    obj2.IconComponent = channelId(9919).StarIcon;
    obj2.onPress = function onPress() {
      return (function removeChannelFromFavorites() {
        const self = this;
        const apply = closure_1_5.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(channelId);
    };
  } else if (!tmp2) {
    const obj = { label: null, IconComponent: null, onPress: null };
    const intl = channelId(1128).intl;
    obj.label = intl.string(_modDef3412.G9fGlP);
    obj.IconComponent = channelId(9917).StarOutlineIcon;
    obj.onPress = function onPress() {
      return (function addChannelToFavorites() {
        const self = this;
        const apply = closure_1_4.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(channelId);
    };
  }
}
