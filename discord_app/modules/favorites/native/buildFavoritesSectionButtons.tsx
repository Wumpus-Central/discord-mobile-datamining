// discord_app/modules/favorites/native/buildFavoritesSectionButtons.tsx
import _slicedToArray from "_slicedToArray";
import StarIcon from "StarIcon";
import { jsx } from "jsxProd";

const require = arg1;
function _addChannelToFavorites() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === v0) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let dependencyMap = tmp2;
              let closure_1 = tmp5;
              closure_1 = undefined;
              dependencyMap = undefined;
              v0 = undefined;
              const obj1 = { key: "FAVORITE_ADDED", content: null, IconComponent: null };
              const intl = callback(outer1_2[4]).intl;
              obj1[1] = intl.string(callback(outer1_2[4]).t["4tSWQg"]);
              obj1[2] = callback(outer1_2[5]).StarIcon;
              outer1_1(outer1_2[3]).open(obj1);
              const items = [callback(outer1_2[7])(outer1_2[6], outer1_2.paths), callback(outer1_2[7])(outer1_2[8], outer1_2.paths)];
              v0 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = Promise.all(items);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = arg1;
            dependencyMap = v0(closure_1, 2);
            v0 = 32;
            if (!5.getIsFavoritesGuildEnabled()) {
              const result = v0.setFavoritesGuildVisibility(true, "channel_context_menu");
            }
            v0.addFavoriteChannel(callback, null, "channel_context_menu");
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp14) {
          c4 = tmp;
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
              obj1[0] = callback(paths[7])(paths[6], paths.paths);
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
let result = require("jsxProd").fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

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
        const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
        obj[0] = intl2.string(require("../intl/FavoritesGuild.messages.js").TN4nAX);
        obj[1] = require("../../../design/components/Icon/native/redesign/generated/StarIcon.tsx") /* StarIcon */.StarIcon;
        obj[3] = function onPress() {
          return (function removeChannelFromFavorites(closure_0) {
            const self = this;
            const apply = closure_7.apply;
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
          const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
          obj[0] = intl.string(require("../intl/FavoritesGuild.messages.js").G9fGlP);
          obj[1] = require("../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx") /* StarOutlineIcon */.StarOutlineIcon;
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
              const apply = closure_6.apply;
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