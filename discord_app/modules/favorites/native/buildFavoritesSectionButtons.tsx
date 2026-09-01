// === Module 10305: _addChannelToFavorites ===

// Module 10305 (_addChannelToFavorites)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import messagesProxyDefault from "messagesProxy" /* 3179 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8096 */;
import StarIcon from "StarIcon" /* 9181 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9183 */;
import openFavoritesGuildLimitUpsell from "openFavoritesGuildLimitUpsell" /* 10310 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function _addChannelToFavorites() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
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
              closure_1 = tmp2;
              paths = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(paths[3])(paths[2], paths.paths);
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
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_5 = tmp;
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
    closure_0 = arg0;
    c2 = 0;
    c3 = 0;
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
              closure_1 = tmp2;
              paths = 1;
              c3 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(paths[3])(paths[2], paths.paths);
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
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function openNoAccessUpsell() {
  const obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj.openLazy(asyncRequireImpl(10311, dependencyMap.paths), openFavoritesGuildLimitUpsell.FAVORITES_UPSELL_SHEET_KEY, { source: "channel_context_menu" });
}
let result = require("set").fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

export default function buildFavoritesSectionButtons(isExperimentEnabled) {
  ({ channelId: require, dismissBetaTag: importDefault } = isExperimentEnabled);
  let tmp6 = null;
  if (isExperimentEnabled.isExperimentEnabled) {
    tmp6 = null;
    if (tmp2) {
      if (!tmp) {
        let obj = { label: null, IconComponent: null, onPress: null };
        const intl = getSystemLocale.intl;
        obj[0] = intl.string(messagesProxyDefault.G9fGlP);
        obj[1] = NitroWheelIcon.NitroWheelIcon;
        obj[2] = openNoAccessUpsell;
      }
      if (tmp3) {
        obj = { label: null, IconComponent: null, isDestructive: true, onPress: null };
        const intl3 = getSystemLocale.intl;
        obj[0] = intl3.string(messagesProxyDefault.TN4nAX);
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
        let tmp11 = obj;
      } else {
        tmp11 = null;
        if (!tmp4) {
          obj = { label: null, IconComponent: null, trailing: null, onPress: null };
          const intl2 = getSystemLocale.intl;
          obj[0] = intl2.string(messagesProxyDefault.G9fGlP);
          obj[1] = StarOutlineIcon.StarOutlineIcon;
          let tmp15;
          if (tmp5) {
            obj1 = { size: null };
            obj1[0] = tmp12(1297).BetaSizes.SMALL;
            tmp15 = jsx(tmp12(1297).BetaTag, { size: null });
          }
          obj[2] = tmp15;
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
          tmp11 = obj;
        }
      }
    }
  }
  return tmp6;
};