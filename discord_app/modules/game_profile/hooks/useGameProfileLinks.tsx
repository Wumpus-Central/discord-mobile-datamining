// discord_app/modules/game_profile/hooks/useGameProfileLinks.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import GameProfileMobileStoreLinkUtils from "../GameProfileMobileStoreLinkUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/hooks/useGameProfileLinks.tsx");

export const useGameProfileLinks = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGameProfileLinks(websites) {
      _require = websites;
      const cResult = require("c").c(4);
      if (cResult[0] !== websites) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              category = websites.category;
              tmp = closure_0;
              tmp2 = closure_1_1;
              GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = closure_0(
                closure_1_1[3],
              ).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
              hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
              if (hasItem) {
                MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
                hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
              }
              return hasItem;
            }
          }
          cResult[2] = I;
        } else {
          class I {
            constructor(arg0) {
              category = websites.category;
              tmp = closure_0;
              tmp2 = closure_1_1;
              GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = closure_0(
                closure_1_1[3],
              ).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
              hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
              if (hasItem) {
                MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
                hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
              }
              return hasItem;
            }
          }
        }
        websites = websites.websites;
        const found = websites.filter(I);
        const _Object = Object;
        const values = Object.values(tmp(9298).MOBILE_STORES);
        const mapped = values.map((item) => GameProfileMobileStoreLinkUtils.getMobileStoreLink(closure_0, item));
        const _Symbol2 = Symbol;
        const found1 = mapped.filter(tmp(1388).isNotNullish);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              category = websites.category;
              tmp = closure_0;
              tmp2 = closure_1_1;
              GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = closure_0(
                closure_1_1[3],
              ).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
              hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
              if (hasItem) {
                MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
                hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
              }
              return hasItem;
            }
          }
          cResult[3] = tmp8;
        } else {
          class I {
            constructor(arg0) {
              category = websites.category;
              tmp = closure_0;
              tmp2 = closure_1_1;
              GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = closure_0(
                closure_1_1[3],
              ).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
              hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
              if (hasItem) {
                MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
                hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
              }
              return hasItem;
            }
          }
        }
        const sorted = found.sort(tmp8);
        const combined = sorted.concat(found1);
        cResult[0] = websites;
        cResult[1] = combined;
      } else {
        class I {
          constructor(arg0) {
            category = websites.category;
            tmp = closure_0;
            tmp2 = closure_1_1;
            GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = closure_0(closure_1_1[3]).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
            hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
            if (hasItem) {
              MOBILE_STORE_WEBSITE_CATEGORIES = tmp(tmp2[4]).MOBILE_STORE_WEBSITE_CATEGORIES;
              hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
            }
            return hasItem;
          }
        }
      }
      const obj = require("c");
    }
  : function useGameProfileLinks(arg0) {
      let websites = arg0;
      const items = [arg0];
      return noop.useMemo(() => {
        websites = websites.websites;
        const found = websites.filter((category) => {
          category = category.category;
          const GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES = websites(9249).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
          let hasItem = GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES.includes(category);
          if (hasItem) {
            const MOBILE_STORE_WEBSITE_CATEGORIES = websites(9298).MOBILE_STORE_WEBSITE_CATEGORIES;
            hasItem = !MOBILE_STORE_WEBSITE_CATEGORIES.has(category);
          }
          return hasItem;
        });
        const values = Object.values(GameProfileMobileStoreLinkUtils.MOBILE_STORES);
        const mapped = values.map((item) => closure_0(dependencyMap[4]).getMobileStoreLink(websites, item));
        const found1 = mapped.filter(GlobalUtils.isNotNullish);
        const sorted = found.sort((category, category2) => {
          const prop = websites(9249).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
          const index = prop.indexOf(category.category);
          const prop1 = websites(9249).GAME_PROFILE_VISIBLE_WEBSITE_CATEGORIES;
          return index - prop1.indexOf(category2.category);
        });
        return sorted.concat(found1);
      }, items);
    };
