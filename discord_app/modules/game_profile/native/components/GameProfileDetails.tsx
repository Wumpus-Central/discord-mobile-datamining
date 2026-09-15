// discord_app/modules/game_profile/native/components/GameProfileDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Server from "../../../../flow/Server.tsx";
import DateUtilsAll from "../../../../utils/DateUtils.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import SKUUtils from "../../../../utils/SKUUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function GameProfileWebsiteButton(action) {
  action = action.action;
  const trackAction = action.trackAction;
  const url = action.url;
  const items = [trackAction, action, url];
  ({ icon, title } = action);
  return closure_8(closure_6, {
    accessibilityRole: "button",
    accessibilityLabel: title,
    onPress: noop.useCallback(() => {
      LinkingDefault.openURL(url);
      trackAction(action);
    }, items),
    hitSlop: trackAction(576).space.PX_4,
    children: icon,
  });
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const IGDB_ATTRIBUTION_LINK = fn(8479).IGDB_ATTRIBUTION_LINK;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: { gap: nativeDefault.space.PX_8 },
  headerText: null,
  detailsContainer: null,
  detailsRow: null,
  detailsRowValue: null,
  detailsRowBottomBorder: null,
  platformsContainer: null,
  linksContainer: null,
};
let obj3 = { gap: nativeDefault.space.PX_8 };
obj2.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj2.detailsContainer = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj5 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj2.detailsRow = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
let obj6 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
obj2.detailsRowValue = { flexDirection: "column", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32 };
let obj7 = { flexDirection: "column", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32 };
obj2.detailsRowBottomBorder = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj8 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.platformsContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.linksContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default function GameProfileDetails(game) {
  game = game.game;
  const trackAction = game.trackAction;
  const tmp = closure_10();
  closure_2 = tmp;
  let items = [, , ,];
  ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
  items[2] = game;
  items[3] = trackAction;
  const memo = noop.useMemo(() => {
    if (null == game) {
      return [];
    } else {
      let joined;
      if (game != null) {
        const genres = game.genres;
        const mapped = genres.map(SKUUtils.getGenreText);
        joined = mapped.join(", ");
      }
      let tmp4 = null != joined;
      if (tmp4) {
        tmp4 = "" !== joined;
      }
      const items = [];
      if (!tmp4) {
        let companyByRole;
        if (game != null) {
          companyByRole = game.getCompanyByRole(Server.GameCompanyRole.PUBLISHER);
        }
        const mapped1 = companyByRole.map((name) => name.name);
        const joined1 = mapped1.join(", ");
        let tmp19 = null != joined1;
        if (tmp19) {
          tmp19 = "" !== joined1;
        }
        if (!tmp19) {
          let companyByRole1;
          if (game != null) {
            companyByRole1 = game.getCompanyByRole(Server.GameCompanyRole.DEVELOPER);
          }
          const mapped2 = companyByRole1.map((name) => name.name);
          const joined2 = mapped2.join(", ");
          let tmp34 = null != joined2;
          if (tmp34) {
            tmp34 = "" !== joined2;
          }
          if (!tmp34) {
            let firstReleaseDate;
            if (game != null) {
              firstReleaseDate = game.firstReleaseDate;
            }
            let tmp46 = null != firstReleaseDate;
            if (tmp46) {
              tmp46 = "" !== firstReleaseDate;
            }
            if (tmp46) {
              const obj2 = { label: null, value: null };
              const intl7 = util.intl;
              obj2.label = intl7.string(util.t.H3mPDT);
              const _Date = Date;
              const date = new Date(firstReleaseDate);
              obj2.value = DateUtilsAll.dateFormat(date, "LL");
              items.push(obj2);
            }
            let platforms;
            if (game != null) {
              platforms = game.platforms;
            }
            let tmp61 = null != platforms;
            if (tmp61) {
              tmp61 = platforms.length > 0;
            }
            if (!tmp61) {
              let found;
              if (game != null) {
                const websites = game.websites;
                if (websites != null) {
                  const mapped3 = websites.map((item) => trackAction(9017)(item, trackAction(576).colors.ICON_SUBTLE));
                  found = mapped3.filter((item) => null != item);
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
                const obj3 = { label: null, value: null };
                const intl10 = util.intl;
                obj3.label = intl10.string(util.t["Oj3o1/"]);
                const obj4 = {
                  style: closure_2.linksContainer,
                  children: found.map((icon) => {
                    const url = icon.url;
                    return closure_2_8(
                      GameProfileWebsiteButton,
                      { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction },
                      url,
                    );
                  }),
                };
                obj3.value = React6(hasOwnProperty, obj4);
                items.push(obj3);
              }
              if (items.length > 0) {
                const obj5 = { label: null, value: null };
                const intl11 = util.intl;
                obj5.label = intl11.string(util.t["BwQ+9e"]);
                const intl12 = util.intl;
                const obj6 = { igdbLink: IGDB_ATTRIBUTION_LINK };
                obj5.value = intl12.format(util.t.XPFZVl, obj6);
                items.push(obj5);
              }
              return items;
            } else {
              if (1 !== game.platforms.length) {
                const intl9 = util.intl;
                let stringResult = intl9.string(util.t.PNqxNe);
              } else {
                const intl8 = util.intl;
                stringResult = intl8.string(util.t["UxAag+"]);
              }
              const obj7 = { label: stringResult, value: null };
              const obj8 = {
                style: closure_2.platformsContainer,
                children: platforms.map((platform) =>
                  closure_1_8(
                    game(9010).GameUpdatePlatformIcon,
                    { platform, size: "md", color: trackAction(576).colors.ICON_SUBTLE },
                    platform,
                  ),
                ),
              };
              obj7.value = React6(hasOwnProperty, obj8);
              items.push(obj7);
            }
          } else {
            if (1 !== companyByRole1.length) {
              const intl6 = util.intl;
              let stringResult1 = intl6.string(util.t.KATEJB);
            } else {
              const intl5 = util.intl;
              stringResult1 = intl5.string(util.t.na3PT0);
            }
            const obj10 = { label: stringResult1, value: joined2 };
            items.push(obj10);
          }
        } else {
          if (1 !== companyByRole.length) {
            const intl4 = util.intl;
            let stringResult2 = intl4.string(util.t.Hc7Enk);
          } else {
            const intl3 = util.intl;
            stringResult2 = intl3.string(util.t["4Byy/G"]);
          }
          const obj11 = { label: stringResult2, value: joined1 };
          items.push(obj11);
        }
      } else {
        if (1 !== game.genres.length) {
          const intl2 = util.intl;
          let stringResult3 = intl2.string(util.t.pDgwYB);
        } else {
          const intl = util.intl;
          stringResult3 = intl.string(util.t.mjFKqn);
        }
        const obj12 = { label: stringResult3, value: joined };
        items.push(obj12);
      }
    }
  }, items);
  let tmp2 = null;
  if (0 !== memo.length) {
    let obj = { style: tmp.container, children: null };
    let obj2 = {
      variant: "heading-sm/semibold",
      color: "mobile-text-heading-primary",
      style: tmp.headerText,
      children: null,
    };
    let intl = game(memo[8]).intl;
    obj2.children = intl.string(game(memo[8]).t["7OjmmH"]);
    let items1 = [closure_8(game(memo[13]).Text, obj2)];
    let obj3 = {
      style: tmp.detailsContainer,
      children: memo.map((children, index) => {
        const items = [closure_2.detailsRow];
        let prop = null;
        if (memo.length > 1) {
          prop = null;
          if (index < arr2.length - 1) {
            prop = closure_2.detailsRowBottomBorder;
          }
        }
        const obj = { style: items, children: null };
        items[1] = prop;
        const items1 = [
          React6(Text_Text.Text, {
            variant: "text-sm/medium",
            color: "text-subtle",
            lineClamp: 1,
            children: children.label,
          }),
        ];
        if (typeof children.value === "string") {
          const obj3 = {
            variant: "text-sm/normal",
            color: "text-subtle",
            lineClamp: 1,
            style: closure_2.detailsRowValue,
            children: children.value,
          };
          value = React6(Text_Text.Text, obj3);
        } else {
          value = children.value;
        }
        items1[1] = value;
        obj.children = items1;
        return React7(hasOwnProperty, obj, children.label);
      }),
    };
    items1[1] = closure_8(closure_5, obj3);
    obj.children = items1;
    tmp2 = closure_9(closure_5, obj);
  }
  return tmp2;
}
