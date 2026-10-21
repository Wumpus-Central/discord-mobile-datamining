// discord_app/modules/game_profile/native/components/GameProfileDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Server from "../../../../flow/Server.tsx";
import DateUtilsAll from "../../../../utils/DateUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import SKUUtils from "../../../../utils/SKUUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const IGDB_ATTRIBUTION_LINK = fn(8798).IGDB_ATTRIBUTION_LINK;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4966);
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
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileWebsiteButton(url) {
      const cResult = action(576).c(8);
      ({ icon, action } = url);
      ({ title, trackAction } = url);
      url = url.url;
      if (cResult[0] === action) {
        if (cResult[1] === trackAction) {
          if (cResult[2] === url) {
            let tmp3 = cResult[3];
          }
          if (cResult[4] === tmp3) {
            if (cResult[5] === icon) {
              if (cResult[6] === title) {
                let tmp4 = cResult[7];
              }
              return tmp4;
            }
          }
          const obj2 = {
            accessibilityRole: "button",
            accessibilityLabel: title,
            onPress: tmp3,
            hitSlop: trackAction(587).space.PX_4,
            children: icon,
          };
          const tmp8 = closure_8(closure_6, obj2);
          cResult[4] = tmp3;
          cResult[5] = icon;
          cResult[6] = title;
          cResult[7] = tmp8;
          tmp4 = tmp8;
        }
      }
      const fn = function l() {
        LinkingDefault.openURL(url);
        trackAction(action);
      };
      cResult[0] = action;
      cResult[1] = trackAction;
      cResult[2] = url;
      cResult[3] = fn;
      tmp3 = fn;
      const obj = action(576);
    }
  : function GameProfileWebsiteButton(action) {
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
        hitSlop: trackAction(587).space.PX_4,
        children: icon,
      });
    };
ReactCompilerGating = fn(558);
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileDetails(arg0) {
      const cResult = trackAction(576).c(74);
      ({ game, trackAction } = arg0);
      const tmp4 = closure_10();
      importDefault = tmp4;
      let obj = trackAction(576);
      const gameProfileLinks = trackAction(9441).useGameProfileLinks(game);
      if (null != game) {
        if (cResult[1] === game) {
          if (cResult[2] === gameProfileLinks) {
            if (cResult[3] === tmp4.linksContainer) {
              if (cResult[4] === tmp4.platformsContainer) {
              }
            }
          }
        }
        let genres;
        if (game != null) {
          genres = game.genres;
        }
        if (cResult[7] !== genres) {
          let joined;
          if (game != null) {
            const genres1 = game.genres;
            const mapped = genres1.map(trackAction(9263).getGenreText);
            joined = mapped.join(", ");
          }
          let genres2;
          if (game != null) {
            genres2 = game.genres;
          }
          cResult[7] = genres2;
          cResult[8] = joined;
          let tmp8 = joined;
        } else {
          tmp8 = cResult[8];
        }
        let items = [];
        if (null != tmp8) {
          if ("" !== tmp8) {
            if (cResult[9] !== game.genres.length) {
              if (1 !== game.genres.length) {
                const intl2 = trackAction(1128).intl;
                let stringResult = intl2.string(trackAction(1128).t.pDgwYB);
              } else {
                const intl = trackAction(1128).intl;
                stringResult = intl.string(trackAction(1128).t.mjFKqn);
              }
              cResult[9] = game.genres.length;
              cResult[10] = stringResult;
            } else {
              if (cResult[11] === tmp8) {
                if (cResult[12] === tmp11) {
                  let tmp14 = cResult[13];
                }
                items.push(tmp14);
              }
              let obj3 = { label: cResult[10], value: tmp8 };
              cResult[11] = tmp8;
              cResult[12] = cResult[10];
              cResult[13] = obj3;
              tmp14 = obj3;
            }
          }
        }
        if (cResult[14] !== game) {
          let companyByRole;
          if (game != null) {
            companyByRole = game.getCompanyByRole(trackAction(2000).GameCompanyRole.PUBLISHER);
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class T {
              constructor(arg0) {
                return arg0.name;
              }
            }
            cResult[17] = T;
          } else {
            class T {
              constructor(arg0) {
                return arg0.name;
              }
            }
          }
          const mapped1 = companyByRole.map(T);
          const joined1 = mapped1.join(", ");
          cResult[14] = game;
          cResult[15] = companyByRole;
          cResult[16] = joined1;
        } else {
          class T {
            constructor(arg0) {
              return arg0.name;
            }
          }
          if (null != cResult[16]) {
            class T {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if ("" !== tmp16) {
              class T {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
          }
          if (cResult[23] !== game) {
            class T {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if (game != null) {
              class T {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              const tmp24Result = tmp24(trackAction(2000).GameCompanyRole.DEVELOPER);
            }
            const _Symbol3 = Symbol;
            if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
              class D {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              cResult[26] = D;
            } else {
              class D {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            const mapped2 = tmp24Result.map(D);
            const joined2 = mapped2.join(", ");
            cResult[23] = game;
            cResult[24] = tmp24Result;
            cResult[25] = joined2;
          } else {
            class D {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if (null != cResult[25]) {
              class D {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if ("" !== tmp23) {
                class D {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
              }
            }
            if (game != null) {
              class D {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            if (null != undefined) {
              class D {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if ("" !== tmp30) {
                class D {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
                const _Symbol6 = Symbol;
                if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                  class D {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  const stringResult1 = obj7.string(trackAction(1128).t.H3mPDT);
                  cResult[32] = stringResult1;
                  const tmp31 = stringResult1;
                } else {
                  class D {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                if (cResult[33] !== tmp30) {
                  class D {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  const _Date = Date;
                  const date = new Date(tmp30);
                  const dateFormatResult = tmp5(4794).dateFormat(date, "LL");
                  cResult[33] = tmp30;
                  cResult[34] = dateFormatResult;
                  const obj8 = tmp5(4794);
                } else {
                  class D {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                if (cResult[35] !== tmp33) {
                  class D {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  tmp41[0] = tmp31;
                  tmp41[1] = tmp33;
                  cResult[35] = tmp33;
                  cResult[36] = tmp41;
                } else {
                  class D {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                items.push(tmp41);
              }
            }
            if (game != null) {
              class D {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            if (null != undefined) {
              class D {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if (tmp43.length > 0) {
                class D {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
              }
            }
            const _Symbol4 = Symbol;
            if (cResult[48] === Symbol.for("react.memo_cache_sentinel")) {
              class X {
                constructor(arg0) {
                  tmp = closure_1(closure_1_3[15]);
                  return tmp(arg0, closure_1(closure_1_3[5]).colors.ICON_SUBTLE);
                }
              }
              cResult[48] = X;
            } else {
              class X {
                constructor(arg0) {
                  tmp = closure_1(closure_1_3[15]);
                  return tmp(arg0, closure_1(closure_1_3[5]).colors.ICON_SUBTLE);
                }
              }
            }
            const _Symbol5 = Symbol;
            if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
              class H {
                constructor(arg0) {
                  return null != arg0;
                }
              }
              cResult[49] = H;
            } else {
              class H {
                constructor(arg0) {
                  return null != arg0;
                }
              }
            }
            const mapped3 = gameProfileLinks.map(X);
            const found = mapped3.filter(H);
            if (found.length <= 0) {
              class H {
                constructor(arg0) {
                  return null != arg0;
                }
              }
            } else {
              class H {
                constructor(arg0) {
                  return null != arg0;
                }
              }
              if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                class H {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
                const stringResult2 = obj9.string(trackAction(1128).t["Oj3o1/"]);
                cResult[50] = stringResult2;
                const tmp47 = stringResult2;
              } else {
                class H {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
              }
              if (cResult[51] !== trackAction) {
                class H {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
                cResult[51] = trackAction;
                cResult[52] = tmp50;
              } else {
                class H {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
              }
              const obj4 = { style: tmp4.linksContainer, children: found.map(tmp50) };
              const tmp53 = closure_8(closure_5, obj4);
              if (cResult[53] !== tmp53) {
                class H {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
                tmp55[0] = tmp47;
                tmp55[1] = tmp53;
                cResult[53] = tmp53;
                cResult[54] = tmp55;
              } else {
                class H {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
              }
              items.push(tmp55);
            }
          }
        }
      } else {
        class H {
          constructor(arg0) {
            return null != arg0;
          }
        }
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          class H {
            constructor(arg0) {
              return null != arg0;
            }
          }
          cResult[0] = tmp5;
        } else {
          class H {
            constructor(arg0) {
              return null != arg0;
            }
          }
        }
        if (0 === tmp5.length) {
          class H {
            constructor(arg0) {
              return null != arg0;
            }
          }
        } else {
          class H {
            constructor(arg0) {
              return null != arg0;
            }
          }
          const _Symbol7 = Symbol;
          ({ container, headerText } = tmp4);
          if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
            class H {
              constructor(arg0) {
                return null != arg0;
              }
            }
            const stringResult3 = obj11.string(trackAction(1128).t["7OjmmH"]);
            cResult[59] = stringResult3;
            const tmp58 = stringResult3;
          } else {
            class H {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          if (cResult[60] !== tmp4.headerText) {
            class H {
              constructor(arg0) {
                return null != arg0;
              }
            }
            const obj5 = {
              variant: "heading-sm/semibold",
              color: "mobile-text-heading-primary",
              style: headerText,
              children: tmp58,
            };
            const tmp61 = closure_8(trackAction(5216).Text, obj5);
            cResult[60] = tmp4.headerText;
            cResult[61] = tmp61;
          } else {
            class H {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          if (cResult[62] === tmp5) {
            class H {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          const mapped4 = tmp5.map((children, index) => {
            const items = [closure_1.detailsRow];
            let prop = null;
            if (arr2.length > 1) {
              prop = null;
              if (index < arr2.length - 1) {
                prop = closure_1.detailsRowBottomBorder;
              }
            }
            const obj = { style: items, children: null };
            items[1] = prop;
            const items1 = [
              closure_2_8(Text_Text.Text, {
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
                style: closure_1.detailsRowValue,
                children: children.value,
              };
              value = closure_2_8(Text_Text.Text, obj3);
            } else {
              value = children.value;
            }
            items1[1] = value;
            obj.children = items1;
            return React6(hasOwnProperty, obj, children.label);
          });
          cResult[62] = tmp5;
          cResult[63] = tmp4.detailsRow;
          cResult[64] = tmp4.detailsRowBottomBorder;
          cResult[65] = tmp4.detailsRowValue;
          cResult[66] = mapped4;
        }
      }
      const obj2 = trackAction(9441);
    }
  : function GameProfileDetails(game) {
      game = game.game;
      const trackAction = game.trackAction;
      let gameProfileLinks;
      let memo;
      const tmp = closure_10();
      closure_2 = tmp;
      gameProfileLinks = game(gameProfileLinks[9]).useGameProfileLinks(game);
      let items = [, , , ,];
      ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
      items[2] = game;
      items[3] = gameProfileLinks;
      items[4] = trackAction;
      memo = memo.useMemo(() => {
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
                  const mapped3 = gameProfileLinks.map((item) =>
                    trackAction(9449)(item, trackAction(587).colors.ICON_SUBTLE),
                  );
                  const found = mapped3.filter((item) => null != item);
                  if (found.length > 0) {
                    const obj3 = { label: null, value: null };
                    const intl10 = util.intl;
                    obj3.label = intl10.string(util.t["Oj3o1/"]);
                    const obj4 = {
                      style: closure_2.linksContainer,
                      children: found.map((icon) => {
                        const url = icon.url;
                        return closure_2_8(
                          closure_2_11,
                          { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction },
                          url,
                        );
                      }),
                    };
                    obj3.value = closure_2_8(hasOwnProperty, obj4);
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
                        game(9442).GameUpdatePlatformIcon,
                        { platform, size: "md", color: trackAction(587).colors.ICON_SUBTLE },
                        platform,
                      ),
                    ),
                  };
                  obj7.value = closure_2_8(hasOwnProperty, obj8);
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
      let tmp5 = null;
      if (0 !== memo.length) {
        let obj2 = { style: tmp.container, children: null };
        let obj3 = {
          variant: "heading-sm/semibold",
          color: "mobile-text-heading-primary",
          style: tmp.headerText,
          children: null,
        };
        let intl = tmp2(tmp3[11]).intl;
        obj3.children = intl.string(tmp2(tmp3[11]).t["7OjmmH"]);
        let items1 = [closure_8(tmp2(tmp3[16]).Text, obj3)];
        let obj4 = {
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
              closure_2_8(Text_Text.Text, {
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
              value = closure_2_8(Text_Text.Text, obj3);
            } else {
              value = children.value;
            }
            items1[1] = value;
            obj.children = items1;
            return React6(hasOwnProperty, obj, children.label);
          }),
        };
        items1[1] = closure_8(closure_5, obj4);
        obj2.children = items1;
        tmp5 = closure_9(closure_5, obj2);
      }
      return tmp5;
    };
