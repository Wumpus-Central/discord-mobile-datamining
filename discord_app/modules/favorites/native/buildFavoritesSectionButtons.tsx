// === Module 10222: buildFavoritesSectionButtons ===

// Module 10222 (buildFavoritesSectionButtons)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef3225 from "module_3225" /* 3225 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8662 */;
import openFavoritesGuildLimitUpsell from "openFavoritesGuildLimitUpsell" /* 10227 */;
import StarIcon from "StarIcon" /* 10235 */;
import StarOutlineIcon from "StarOutlineIcon" /* 10241 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _addChannelToFavorites(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[2], paths.paths), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        obj = { channelIds: null, source: "channel_context_menu" };
        const items = [closure_129_0];
        obj.channelIds = items;
        value.addFavoriteChannels(obj);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
let closure_6 = async function _removeChannelFromFavorites(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: require("asyncRequireImpl")(paths[2], paths.paths), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        const result = value.removeFavoriteChannel(closure_129_0);
        c3 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
function openNoAccessUpsell() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(10228, dependencyMap.paths), openFavoritesGuildLimitUpsell.FAVORITES_UPSELL_SHEET_KEY, { source: "channel_context_menu" });
}
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/favorites/native/buildFavoritesSectionButtons.tsx");

export default function buildFavoritesSectionButtons(isExperimentEnabled) {
  ({ channelId: require, dismissBetaTag: importDefault } = isExperimentEnabled);
  let tmp6 = null;
  if (isExperimentEnabled.isExperimentEnabled) {
    tmp6 = null;
    if (tmp2) {
      if (!tmp) {
        let obj = { label: null, IconComponent: null, onPress: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3225.G9fGlP);
        obj.IconComponent = NitroWheelIcon.NitroWheelIcon;
        obj.onPress = openNoAccessUpsell;
      }
      if (tmp3) {
        obj = { label: null, IconComponent: null, isDestructive: true, onPress: null };
        const intl3 = util.intl;
        obj.label = intl3.string(_modDef3225.TN4nAX);
        obj.IconComponent = StarIcon.StarIcon;
        obj.onPress = function onPress() {
          return (function removeChannelFromFavorites() {
            const self = this;
            const apply = closure_1_6.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(require);
        };
      } else if (!tmp4) {
        obj = { label: null, IconComponent: null, trailing: null, onPress: null };
        const intl2 = util.intl;
        obj.label = intl2.string(_modDef3225.G9fGlP);
        obj.IconComponent = StarOutlineIcon.StarOutlineIcon;
        let tmp15;
        if (tmp5) {
          const obj1 = { size: native.BetaSizes.SMALL };
          tmp15 = jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
        }
        obj.trailing = tmp15;
        obj.onPress = function onPress() {
          importDefault();
          (function addChannelToFavorites() {
            const self = this;
            const apply = closure_1_5.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(require);
        };
      }
    }
  }
  return tmp6;
};