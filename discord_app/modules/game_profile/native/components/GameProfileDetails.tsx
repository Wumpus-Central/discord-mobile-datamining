// discord_app/modules/game_profile/native/components/GameProfileDetails.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Server from "../../../../flow/Server.tsx";
import DateUtilsAll from "../../../../utils/DateUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinkingDefault from "../../../../lib/native/Linking.tsx";
import SKUUtils from "../../../../utils/SKUUtils.tsx";
import useGameProfilePlatformsDefault from "../../hooks/useGameProfilePlatforms.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const IGDB_ATTRIBUTION_LINK = fn(8814).IGDB_ATTRIBUTION_LINK;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let obj = {};
obj[fn(8805).PlatformType.DESKTOP] = fn(9459).ScreenIcon;
obj.mobile = fn(7038).MobilePhoneIcon;
obj[fn(8805).PlatformType.XBOX] = fn(9268).XboxNeutralIcon;
obj[fn(8805).PlatformType.PLAYSTATION] = fn(9461).PlaystationNeutralIcon;
obj[fn(8805).PlatformType.NINTENDO] = fn(9463).NintendoSwitchNeutralIcon;
const createStyles = fn(4969);
let obj3 = {
  container: { gap: nativeDefault.space.PX_8 },
  headerText: null,
  detailsContainer: null,
  detailsRow: null,
  detailsRowValue: null,
  detailsRowBottomBorder: null,
  platformsContainer: null,
  linksContainer: null,
};
let obj4 = { gap: nativeDefault.space.PX_8 };
obj3.headerText = { paddingHorizontal: nativeDefault.space.PX_8 };
let obj5 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj3.detailsContainer = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
let obj6 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
obj3.detailsRow = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
let obj7 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: nativeDefault.space.PX_12,
};
obj3.detailsRowValue = { flexDirection: "column", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32 };
let obj8 = { flexDirection: "column", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32 };
obj3.detailsRowBottomBorder = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj9 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj3.platformsContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let obj10 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj3.linksContainer = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_11 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
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
      obj = action(576);
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
let obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameProfileDetails(arg0) {
      const cResult = trackAction(576).c(75);
      ({ game, trackAction } = arg0);
      const tmp4 = closure_11();
      importDefault = tmp4;
      obj = trackAction(576);
      const gameProfileLinks = trackAction(9465).useGameProfileLinks(game);
      const arr2 = useGameProfilePlatformsDefault(game);
      if (null != game) {
        if (cResult[1] === game) {
          if (cResult[2] === gameProfileLinks) {
            if (cResult[3] === arr2) {
              if (cResult[4] === tmp4.linksContainer) {
                if (cResult[5] === tmp4.platformsContainer) {
                }
              }
            }
          }
        }
        let genres;
        if (game != null) {
          genres = game.genres;
        }
        if (cResult[8] !== genres) {
          let joined;
          if (game != null) {
            const genres1 = game.genres;
            const mapped = genres1.map(trackAction(9279).getGenreText);
            joined = mapped.join(", ");
          }
          let genres2;
          if (game != null) {
            genres2 = game.genres;
          }
          cResult[8] = genres2;
          cResult[9] = joined;
          let tmp8 = joined;
        } else {
          tmp8 = cResult[9];
        }
        let items = [];
        if (null != tmp8) {
          if ("" !== tmp8) {
            if (cResult[10] !== game.genres.length) {
              if (1 !== game.genres.length) {
                const intl2 = trackAction(1128).intl;
                let stringResult = intl2.string(trackAction(1128).t.pDgwYB);
              } else {
                const intl = trackAction(1128).intl;
                stringResult = intl.string(trackAction(1128).t.mjFKqn);
              }
              cResult[10] = game.genres.length;
              cResult[11] = stringResult;
            } else {
              if (cResult[12] === tmp8) {
                if (cResult[13] === tmp11) {
                  let tmp14 = cResult[14];
                }
                items.push(tmp14);
              }
              let obj3 = { label: cResult[11], value: tmp8 };
              cResult[12] = tmp8;
              cResult[13] = cResult[11];
              cResult[14] = obj3;
              tmp14 = obj3;
            }
          }
        }
        if (cResult[15] !== game) {
          let companyByRole;
          if (game != null) {
            companyByRole = game.getCompanyByRole(trackAction(2000).GameCompanyRole.PUBLISHER);
          }
          const _Symbol2 = Symbol;
          if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor(arg0) {
                return arg0.name;
              }
            }
            cResult[18] = L;
          } else {
            class L {
              constructor(arg0) {
                return arg0.name;
              }
            }
          }
          const mapped1 = companyByRole.map(L);
          const joined1 = mapped1.join(", ");
          cResult[15] = game;
          cResult[16] = companyByRole;
          cResult[17] = joined1;
        } else {
          class L {
            constructor(arg0) {
              return arg0.name;
            }
          }
          if (null != cResult[17]) {
            class L {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if ("" !== tmp16) {
              class L {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
          }
          if (cResult[24] !== game) {
            class L {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if (game != null) {
              class L {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              const tmp24Result = tmp24(trackAction(2000).GameCompanyRole.DEVELOPER);
            }
            const _Symbol3 = Symbol;
            if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              cResult[27] = O;
            } else {
              class O {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            const mapped2 = tmp24Result.map(O);
            const joined2 = mapped2.join(", ");
            cResult[24] = game;
            cResult[25] = tmp24Result;
            cResult[26] = joined2;
          } else {
            class O {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if (null != cResult[26]) {
              class O {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if ("" !== tmp23) {
                class O {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
              }
            }
            if (game != null) {
              class O {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            if (null != undefined) {
              class O {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if ("" !== tmp30) {
                class O {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
                const _Symbol6 = Symbol;
                if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                  class O {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  const stringResult1 = obj7.string(trackAction(1128).t.H3mPDT);
                  cResult[33] = stringResult1;
                  const tmp31 = stringResult1;
                } else {
                  class O {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                if (cResult[34] !== tmp30) {
                  class O {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  const _Date = Date;
                  const date = new Date(tmp30);
                  const dateFormatResult = tmp5(4794).dateFormat(date, "LL");
                  cResult[34] = tmp30;
                  cResult[35] = dateFormatResult;
                  const obj8 = tmp5(4794);
                } else {
                  class O {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                if (cResult[36] !== tmp33) {
                  class O {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  tmp41[0] = tmp31;
                  tmp41[1] = tmp33;
                  cResult[36] = tmp33;
                  cResult[37] = tmp41;
                } else {
                  class O {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                items.push(tmp41);
              }
            }
            if (arr2.length <= 0) {
              class O {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              const _Symbol4 = Symbol;
              if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                class H {
                  constructor(arg0) {
                    tmp = closure_1(closure_1_3[21]);
                    return tmp(arg0, closure_1(closure_1_3[11]).colors.ICON_SUBTLE);
                  }
                }
                cResult[49] = H;
              } else {
                class H {
                  constructor(arg0) {
                    tmp = closure_1(closure_1_3[21]);
                    return tmp(arg0, closure_1(closure_1_3[11]).colors.ICON_SUBTLE);
                  }
                }
              }
              const _Symbol5 = Symbol;
              if (cResult[50] === Symbol.for("react.memo_cache_sentinel")) {
                class F {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
                cResult[50] = F;
              } else {
                class F {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
              }
              const mapped3 = gameProfileLinks.map(H);
              const found = mapped3.filter(F);
              if (found.length <= 0) {
                class F {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
              } else {
                class F {
                  constructor(arg0) {
                    return null != arg0;
                  }
                }
                if (cResult[51] === Symbol.for("react.memo_cache_sentinel")) {
                  class F {
                    constructor(arg0) {
                      return null != arg0;
                    }
                  }
                  const stringResult2 = obj9.string(trackAction(1128).t["Oj3o1/"]);
                  cResult[51] = stringResult2;
                  const tmp45 = stringResult2;
                } else {
                  class F {
                    constructor(arg0) {
                      return null != arg0;
                    }
                  }
                }
                if (cResult[52] !== trackAction) {
                  class F {
                    constructor(arg0) {
                      return null != arg0;
                    }
                  }
                  cResult[52] = trackAction;
                  cResult[53] = tmp48;
                } else {
                  class F {
                    constructor(arg0) {
                      return null != arg0;
                    }
                  }
                }
                const obj4 = { style: tmp4.linksContainer, children: found.map(tmp48) };
                const tmp51 = closure_8(closure_5, obj4);
                if (cResult[54] !== tmp51) {
                  class F {
                    constructor(arg0) {
                      return null != arg0;
                    }
                  }
                  tmp53[0] = tmp45;
                  tmp53[1] = tmp51;
                  cResult[54] = tmp51;
                  cResult[55] = tmp53;
                } else {
                  class F {
                    constructor(arg0) {
                      return null != arg0;
                    }
                  }
                }
                items.push(tmp53);
              }
            } else {
              class F {
                constructor(arg0) {
                  return null != arg0;
                }
              }
            }
          }
        }
      } else {
        class F {
          constructor(arg0) {
            return null != arg0;
          }
        }
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(arg0) {
              return null != arg0;
            }
          }
          cResult[0] = tmp5;
        } else {
          class F {
            constructor(arg0) {
              return null != arg0;
            }
          }
        }
        if (0 === tmp5.length) {
          class F {
            constructor(arg0) {
              return null != arg0;
            }
          }
        } else {
          class F {
            constructor(arg0) {
              return null != arg0;
            }
          }
          const _Symbol7 = Symbol;
          ({ container, headerText } = tmp4);
          if (cResult[60] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(arg0) {
                return null != arg0;
              }
            }
            const stringResult3 = obj11.string(trackAction(1128).t["7OjmmH"]);
            cResult[60] = stringResult3;
            const tmp56 = stringResult3;
          } else {
            class F {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          if (cResult[61] !== tmp4.headerText) {
            class F {
              constructor(arg0) {
                return null != arg0;
              }
            }
            const obj5 = {
              variant: "heading-sm/semibold",
              color: "mobile-text-heading-primary",
              style: headerText,
              children: tmp56,
            };
            const tmp59 = closure_8(trackAction(5220).Text, obj5);
            cResult[61] = tmp4.headerText;
            cResult[62] = tmp59;
          } else {
            class F {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          if (cResult[63] === tmp5) {
            class F {
              constructor(arg0) {
                return null != arg0;
              }
            }
          }
          const mapped4 = tmp5.map((children, index) => {
            const items = [closure_1.detailsRow];
            let prop = null;
            if (arr3.length > 1) {
              prop = null;
              if (index < arr2.length - 1) {
                prop = closure_1.detailsRowBottomBorder;
              }
            }
            obj = { style: items, children: null };
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
          cResult[63] = tmp5;
          cResult[64] = tmp4.detailsRow;
          cResult[65] = tmp4.detailsRowBottomBorder;
          cResult[66] = tmp4.detailsRowValue;
          cResult[67] = mapped4;
        }
      }
      const obj2 = trackAction(9465);
    }
  : function GameProfileDetails(game) {
      game = game.game;
      const trackAction = game.trackAction;
      let gameProfileLinks;
      const tmp = closure_11();
      closure_2 = tmp;
      gameProfileLinks = game(gameProfileLinks[15]).useGameProfileLinks(game);
      const tmp5 = trackAction(gameProfileLinks[16])(game);
      noop = tmp5;
      let items = [, , , , ,];
      ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
      items[2] = game;
      items[3] = gameProfileLinks;
      items[4] = tmp5;
      items[5] = trackAction;
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
                if (length.length <= 0) {
                  const mapped3 = gameProfileLinks.map((item) =>
                    trackAction(9467)(item, trackAction(587).colors.ICON_SUBTLE),
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
                          closure_2_12,
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
                  if (1 !== length.length) {
                    const intl9 = util.intl;
                    let stringResult = intl9.string(util.t.PNqxNe);
                  } else {
                    const intl8 = util.intl;
                    stringResult = intl8.string(util.t["UxAag+"]);
                  }
                  const obj7 = { label: stringResult, value: null };
                  const obj8 = {
                    style: closure_2.platformsContainer,
                    children: length.map((item) => {
                      obj = {
                        size: "md",
                        color: trackAction(587).colors.ICON_SUBTLE,
                        accessibilityLabel: game(9466).getGameProfilePlatformText(item),
                      };
                      return closure_1_8(closure_1_10[item], obj, item);
                    }),
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
      let tmp6 = null;
      if (0 !== memo.length) {
        let obj2 = { style: tmp.container, children: null };
        let obj3 = {
          variant: "heading-sm/semibold",
          color: "mobile-text-heading-primary",
          style: tmp.headerText,
          children: null,
        };
        let intl = tmp2(tmp3[18]).intl;
        obj3.children = intl.string(tmp2(tmp3[18]).t["7OjmmH"]);
        let items1 = [closure_8(tmp2(tmp3[22]).Text, obj3)];
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
            obj = { style: items, children: null };
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
        items1[1] = closure_8(memo, obj4);
        obj2.children = items1;
        tmp6 = closure_9(memo, obj2);
      }
      return tmp6;
    };
