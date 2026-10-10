// === Module 10329: buildFavoritesSectionButtons ===

// Module 10329 (buildFavoritesSectionButtons)
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import _modDef3442 from "module_3442" /* 3442 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import NitroWheelIcon from "NitroWheelIcon" /* 9035 */;
import StarOutlineIcon from "StarOutlineIcon" /* 9550 */;
import StarIcon from "StarIcon" /* 9552 */;
import openFavoritesGuildLimitUpsell from "openFavoritesGuildLimitUpsell" /* 10315 */;
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
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          const obj4 = { value: require("asyncRequireImpl")(paths[2], paths.paths), done: false };
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
        return { value: "IconComponent", done: "+51" };
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
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+51" };
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
          const obj4 = { value: require("asyncRequireImpl")(paths[2], paths.paths), done: false };
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
        return { value: "IconComponent", done: "+51" };
      }
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
function openNoAccessUpsell() {
  const obj = ActionSheetActionCreatorsDefault;
  obj.openLazy(asyncRequireImpl(10316, dependencyMap.paths), openFavoritesGuildLimitUpsell.FAVORITES_UPSELL_SHEET_KEY, { source: "channel_context_menu" });
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
        const obj = { label: null, IconComponent: null, onPress: null };
        const intl = util.intl;
        obj.label = intl.string(_modDef3442.G9fGlP);
        obj.IconComponent = NitroWheelIcon.NitroWheelIcon;
        obj.onPress = openNoAccessUpsell;
      }
      if (tmp3) {
        const obj2 = { label: null, IconComponent: null, isDestructive: true, onPress: null };
        const intl3 = util.intl;
        obj2.label = intl3.string(_modDef3442.TN4nAX);
        obj2.IconComponent = StarIcon.StarIcon;
        obj2.onPress = function onPress() {
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
        const obj3 = { label: null, IconComponent: null, trailing: null, onPress: null };
        const intl2 = util.intl;
        obj3.label = intl2.string(_modDef3442.G9fGlP);
        obj3.IconComponent = StarOutlineIcon.StarOutlineIcon;
        let tmp15;
        if (tmp5) {
          const obj4 = { size: native.BetaSizes.SMALL };
          tmp15 = jsx(native.BetaTag, { size: native.BetaSizes.SMALL });
        }
        obj3.trailing = tmp15;
        obj3.onPress = function onPress() {
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