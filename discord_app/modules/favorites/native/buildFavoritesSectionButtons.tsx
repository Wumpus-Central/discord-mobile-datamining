// discord_app/modules/favorites/native/buildFavoritesSectionButtons.tsx
import getSystemLocale from "getSystemLocale";
import { jsx } from "jsxProd";
import { StarIcon } from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import { StarOutlineIcon } from "../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { messagesProxy } from "../intl/FavoritesGuild.messages.js";

const require = arg1;
function _addChannelToFavorites() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, addFavoriteChannels) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw addFavoriteChannels;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = addFavoriteChannels;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw addFavoriteChannels;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = addFavoriteChannels;
              return obj;
            } else {
              let closure_1 = tmp2;
              outer1_1(paths[2])();
              paths = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(paths[4])(paths[3], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw addFavoriteChannels;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = addFavoriteChannels;
            return obj2;
          } else {
            obj = { channelIds: null, source: "channel_context_menu" };
            const items = [callback];
            obj[0] = items;
            addFavoriteChannels.addFavoriteChannels(obj);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c3 = tmp;
          throw tmp14;
        }
      }
    })();
  });
  const _addChannelToFavorites = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _removeChannelFromFavorites() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c3 = 0;
    return (function*(arg0, removeFavoriteChannel) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw removeFavoriteChannel;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = removeFavoriteChannel;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === paths) {
            if (arg0 === 1) {
              c3 = 3;
              throw removeFavoriteChannel;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = removeFavoriteChannel;
              return obj;
            } else {
              let closure_1 = tmp2;
              paths = 1;
              c3 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = callback(paths[4])(paths[3], paths.paths);
              return obj1;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw removeFavoriteChannel;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = removeFavoriteChannel;
            return obj;
          } else {
            const result = removeFavoriteChannel.removeFavoriteChannel(callback);
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const _removeChannelFromFavorites = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("showFavoritesGuildAddedToast").fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

export default function buildFavoritesSectionButtons(hasFavoritesAccess) {
  let importDefault;
  let require;
  ({ channelId: require, dismissBetaTag: importDefault } = hasFavoritesAccess);
  let tmp5 = null;
  if (hasFavoritesAccess.hasFavoritesAccess) {
    tmp5 = null;
    if (tmp) {
      if (tmp2) {
        let obj = { label: null, IconComponent: null, isDestructive: true, onPress: null };
        const intl2 = getSystemLocale.intl;
        obj[0] = intl2.string(messagesProxy.TN4nAX);
        obj[1] = StarIcon.StarIcon;
        obj[3] = function onPress() {
          return (function removeChannelFromFavorites(closure_0) {
            const self = this;
            const apply = closure_6.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(closure_0);
        };
        let tmp6 = obj;
      } else {
        tmp6 = null;
        if (!tmp3) {
          obj = { label: null, IconComponent: null, trailing: null, onPress: null };
          const intl = getSystemLocale.intl;
          obj[0] = intl.string(messagesProxy.G9fGlP);
          obj[1] = StarOutlineIcon.StarOutlineIcon;
          let tmp10;
          if (tmp4) {
            obj = { size: null };
            obj[0] = tmp7(1297).BetaSizes.SMALL;
            tmp10 = jsx(tmp7(1297).BetaTag, { size: null });
          }
          obj[2] = tmp10;
          obj[3] = function onPress() {
            callback();
            (function addChannelToFavorites(closure_0) {
              const self = this;
              const apply = closure_5.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_0);
          };
          tmp6 = obj;
        }
      }
    }
  }
  return tmp5;
};