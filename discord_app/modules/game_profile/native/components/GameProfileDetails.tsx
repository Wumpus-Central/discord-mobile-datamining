// discord_app/modules/game_profile/native/components/GameProfileDetails.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { IGDB_ATTRIBUTION_LINK } from "ContentInventoryFeedKey";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let metroImportAll;
const require = arg1;
function GameProfileWebsiteButton(action) {
  let icon;
  let title;
  action = action.action;
  const trackAction = action.trackAction;
  const url = action.url;
  const items = [trackAction, action, url];
  ({ icon, title } = action);
  return callback(closure_6, {
    accessibilityRole: "button",
    accessibilityLabel: title,
    onPress: React.useCallback(() => {
      trackAction(outer1_3[6]).openURL(url);
      trackAction(action);
    }, items),
    hitSlop: trackAction(712).space.PX_4,
    children: icon
  });
}
({ View: c5, Pressable: closure_6 } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, headerText: null, detailsContainer: null, detailsRow: null, detailsRowValue: null, detailsRowBottomBorder: null, platformsContainer: null, linksContainer: null };
createCacheKey = { gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_8 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_8 };
createCacheKey[2] = { borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let obj2 = { borderRadius: require("Themes").radii.lg, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[3] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("Themes").space.PX_12 };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: require("Themes").space.PX_12 };
createCacheKey[4] = { flexDirection: "column", flexShrink: 1, paddingLeft: require("Themes").space.PX_32 };
let obj4 = { flexDirection: "column", flexShrink: 1, paddingLeft: require("Themes").space.PX_32 };
createCacheKey[5] = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
let obj5 = { borderBottomWidth: 1, borderBottomColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
let obj6 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj7 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
const result = require("ContentInventoryFeedKey").fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default function GameProfileDetails(game) {
  game = game.game;
  const trackAction = game.trackAction;
  let c2;
  let memo;
  const tmp = createCacheKey();
  c2 = tmp;
  let items = [, , , ];
  ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
  items[2] = game;
  items[3] = trackAction;
  memo = React.useMemo(() => {
    let obj = game;
    if (null == game) {
      return [];
    } else {
      let joined;
      if (obj != null) {
        const genres = obj.genres;
        const mapped = genres.map(game(memo[7]).getGenreText);
        joined = mapped.join(", ");
      }
      let tmp4 = null != joined;
      if (tmp4) {
        tmp4 = "" !== joined;
      }
      const items = [];
      if (!tmp4) {
        let companyByRole;
        if (obj != null) {
          companyByRole = obj.getCompanyByRole(game(memo[9]).GameCompanyRole.PUBLISHER);
        }
        const mapped1 = companyByRole.map((name) => name.name);
        const joined1 = mapped1.join(", ");
        let tmp19 = null != joined1;
        if (tmp19) {
          tmp19 = "" !== joined1;
        }
        if (!tmp19) {
          let companyByRole1;
          if (obj != null) {
            companyByRole1 = obj.getCompanyByRole(game(memo[9]).GameCompanyRole.DEVELOPER);
          }
          const mapped2 = companyByRole1.map((name) => name.name);
          const joined2 = mapped2.join(", ");
          let tmp34 = null != joined2;
          if (tmp34) {
            tmp34 = "" !== joined2;
          }
          if (!tmp34) {
            let firstReleaseDate;
            if (obj != null) {
              firstReleaseDate = obj.firstReleaseDate;
            }
            let tmp46 = null != firstReleaseDate;
            if (tmp46) {
              tmp46 = "" !== firstReleaseDate;
            }
            if (tmp46) {
              obj = { label: null, value: null };
              const intl7 = game(memo[8]).intl;
              obj[0] = intl7.string(game(memo[8]).t.H3mPDT);
              let obj8 = _undefined(memo[10]);
              const _Date = Date;
              const date = new Date(firstReleaseDate);
              obj[1] = obj8.dateFormat(date, "LL");
              items.push(obj);
            }
            let platforms;
            if (obj != null) {
              platforms = obj.platforms;
            }
            let tmp61 = null != platforms;
            if (tmp61) {
              tmp61 = platforms.length > 0;
            }
            if (!tmp61) {
              let found;
              if (obj != null) {
                const websites = obj.websites;
                if (websites != null) {
                  const mapped3 = websites.map((arg0) => callback2(11948)(arg0, callback2(712).colors.ICON_SUBTLE));
                  found = mapped3.filter((arg0) => null != arg0);
                }
              }
              if (found == null) {
                found = [];
              }
              let tmp75 = null != found;
              if (tmp75) {
                tmp75 = found.length > 0;
              }
              if (tmp75) {
                obj = { label: null, value: null };
                const intl10 = game(memo[8]).intl;
                obj[0] = intl10.string(game(memo[8]).t["Oj3o1/"]);
                const obj1 = { style: null, children: null };
                obj1[0] = _undefined.linksContainer;
                obj1[1] = found.map((icon) => {
                  const url = icon.url;
                  return outer1_8(outer1_11, { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction: closure_1 }, url);
                });
                obj[1] = outer1_8(outer1_5, obj1);
                items.push(obj);
              }
              if (items.length > 0) {
                const obj2 = { label: null, value: null };
                const intl11 = game(memo[8]).intl;
                obj2[0] = intl11.string(game(memo[8]).t["BwQ+9e"]);
                const intl12 = game(memo[8]).intl;
                const obj3 = { igdbLink: null };
                obj3[0] = outer1_7;
                obj2[1] = intl12.format(game(memo[8]).t.XPFZVl, obj3);
                items.push(obj2);
              }
              return items;
            } else {
              if (1 !== obj.platforms.length) {
                const intl9 = game(memo[8]).intl;
                let stringResult = intl9.string(game(memo[8]).t.PNqxNe);
              } else {
                const intl8 = game(memo[8]).intl;
                stringResult = intl8.string(game(memo[8]).t["UxAag+"]);
              }
              const obj4 = { label: null, value: null };
              obj4[0] = stringResult;
              const obj5 = { style: null, children: null };
              obj5[0] = _undefined.platformsContainer;
              obj5[1] = platforms.map((platform) => {
                const obj = { platform, size: "md", color: null };
                obj[2] = callback2(712).colors.ICON_SUBTLE;
                return callback3(callback(11939).GameUpdatePlatformIcon, obj, platform);
              });
              obj4[1] = outer1_8(outer1_5, obj5);
              items.push(obj4);
            }
          } else {
            if (1 !== companyByRole1.length) {
              const intl6 = game(memo[8]).intl;
              let stringResult1 = intl6.string(game(memo[8]).t.KATEJB);
            } else {
              const intl5 = game(memo[8]).intl;
              stringResult1 = intl5.string(game(memo[8]).t.na3PT0);
            }
            const obj6 = { label: null, value: null };
            obj6[0] = stringResult1;
            obj6[1] = joined2;
            items.push(obj6);
          }
        } else {
          if (1 !== companyByRole.length) {
            const intl4 = game(memo[8]).intl;
            let stringResult2 = intl4.string(game(memo[8]).t.Hc7Enk);
          } else {
            const intl3 = game(memo[8]).intl;
            stringResult2 = intl3.string(game(memo[8]).t["4Byy/G"]);
          }
          const obj7 = { label: null, value: null };
          obj7[0] = stringResult2;
          obj7[1] = joined1;
          items.push(obj7);
        }
      } else {
        if (1 !== obj.genres.length) {
          const intl2 = game(memo[8]).intl;
          let stringResult3 = intl2.string(game(memo[8]).t.pDgwYB);
        } else {
          const intl = game(memo[8]).intl;
          stringResult3 = intl.string(game(memo[8]).t.mjFKqn);
        }
        obj8 = { label: null, value: null };
        obj8[0] = stringResult3;
        obj8[1] = joined;
        items.push(obj8);
      }
    }
  }, items);
  let tmp2 = null;
  if (0 !== memo.length) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: null, children: null };
    obj[2] = tmp.headerText;
    let intl = game(memo[8]).intl;
    obj[3] = intl.string(game(memo[8]).t["7OjmmH"]);
    let items1 = [callback(game(memo[13]).Text, obj), ];
    obj = { style: null, children: null };
    obj[0] = tmp.detailsContainer;
    obj[1] = memo.map((children) => {
      const items = [_undefined.detailsRow, ];
      let prop = null;
      if (memo.length > 1) {
        prop = null;
        if (arg1 < arr2.length - 1) {
          prop = tmp3.detailsRowBottomBorder;
        }
      }
      let obj = { style: items, children: null };
      items[1] = prop;
      obj = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: children.label };
      const items1 = [outer1_8(game(memo[13]).Text, obj), ];
      if (typeof children.value === "y") {
        obj = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, style: null, children: null };
        obj[3] = tmp3.detailsRowValue;
        obj[4] = children.value;
        let value = outer1_8(game(memo[13]).Text, obj);
      } else {
        value = children.value;
      }
      items1[1] = value;
      obj[1] = items1;
      return outer1_9(outer1_5, obj, children.label);
    });
    items1[1] = callback(closure_5, obj);
    obj[1] = items1;
    tmp2 = callback2(closure_5, obj);
  }
  return tmp2;
};