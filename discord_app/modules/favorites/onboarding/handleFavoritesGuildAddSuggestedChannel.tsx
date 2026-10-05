// discord_app/modules/favorites/onboarding/handleFavoritesGuildAddSuggestedChannel.tsx
import formatResults from "../../share/formatResults.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

let c3, c4;

let obj = function _handleFavoritesGuildAddSuggestedChannel() {
  obj = _asyncToGenerator(async (arg0) => {
    let intl;
    let items;
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp4;
            let closure_1 = tmp;
            closure_0 = undefined;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: obj5.getOrResolveChannelIdFromDestinationId(closure_0), done: false };
            obj5 = formatResults;
            return obj4;
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_0 = value;
              if (null != closure_0) {
                const obj7 = {
                  channelIds: items,
                  categoryName: intl.string(closure_130_0(closure_130_1[3]).t.OGiMXJ),
                  source: "suggestions",
                };
                items = [closure_0];
                const addFavoriteChannelsToCategory = closure_130_0(closure_130_1[2]).addFavoriteChannelsToCategory;
                const tmp9 = closure_130_0(closure_130_1[2]);
                intl = closure_130_0(closure_130_1[3]).intl;
                c3 = 2;
                c4 = 1;
                const obj8 = { value: addFavoriteChannelsToCategory(obj7), done: false };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp18) {
        c4 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/favorites/onboarding/handleFavoritesGuildAddSuggestedChannel.tsx");

export default function handleFavoritesGuildAddSuggestedChannel() {
  return obj(...arguments);
}
