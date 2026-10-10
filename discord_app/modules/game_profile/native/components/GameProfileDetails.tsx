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
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const IGDB_ATTRIBUTION_LINK = fn(8469).IGDB_ATTRIBUTION_LINK;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5092);
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
      const cResult = trackAction(576).c(71);
      ({ game: platformsContainer, trackAction } = arg0);
      const tmp4 = closure_10();
      closure_1 = tmp4;
      if (null != platformsContainer) {
        if (cResult[1] === platformsContainer) {
          if (cResult[2] === tmp4.linksContainer) {
            if (cResult[3] === tmp4.platformsContainer) {
            }
          }
        }
        let genres;
        if (platformsContainer != null) {
          genres = platformsContainer.genres;
        }
        if (cResult[6] !== genres) {
          let joined;
          if (platformsContainer != null) {
            const genres1 = platformsContainer.genres;
            const mapped = genres1.map(trackAction(8922).getGenreText);
            joined = mapped.join(", ");
          }
          let genres2;
          if (platformsContainer != null) {
            genres2 = platformsContainer.genres;
          }
          cResult[6] = genres2;
          cResult[7] = joined;
          let tmp8 = joined;
        } else {
          tmp8 = cResult[7];
        }
        let items = [];
        if (null != tmp8) {
          if ("" !== tmp8) {
            if (cResult[8] !== platformsContainer.genres.length) {
              if (1 !== platformsContainer.genres.length) {
                const intl2 = trackAction(1126).intl;
                let stringResult = intl2.string(trackAction(1126).t.pDgwYB);
              } else {
                const intl = trackAction(1126).intl;
                stringResult = intl.string(trackAction(1126).t.mjFKqn);
              }
              cResult[8] = platformsContainer.genres.length;
              cResult[9] = stringResult;
            } else {
              if (cResult[10] === tmp8) {
                if (cResult[11] === tmp11) {
                  let tmp14 = cResult[12];
                }
                items.push(tmp14);
              }
              const obj2 = { label: cResult[9], value: tmp8 };
              cResult[10] = tmp8;
              cResult[11] = cResult[9];
              cResult[12] = obj2;
              tmp14 = obj2;
            }
          }
        }
        if (cResult[13] !== platformsContainer) {
          let companyByRole;
          if (platformsContainer != null) {
            companyByRole = platformsContainer.getCompanyByRole(trackAction(1998).GameCompanyRole.PUBLISHER);
          }
          const _Symbol2 = Symbol;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor(arg0) {
                return arg0.name;
              }
            }
            cResult[16] = P;
          } else {
            class P {
              constructor(arg0) {
                return arg0.name;
              }
            }
          }
          const mapped1 = companyByRole.map(P);
          const joined1 = mapped1.join(", ");
          cResult[13] = platformsContainer;
          cResult[14] = companyByRole;
          cResult[15] = joined1;
        } else {
          class P {
            constructor(arg0) {
              return arg0.name;
            }
          }
          if (null != cResult[15]) {
            class P {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if ("" !== tmp16) {
              class P {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
          }
          if (cResult[22] !== platformsContainer) {
            class P {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if (platformsContainer != null) {
              class P {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              const tmp24Result = tmp24(trackAction(1998).GameCompanyRole.DEVELOPER);
            }
            const _Symbol3 = Symbol;
            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              cResult[25] = S;
            } else {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            const mapped2 = tmp24Result.map(S);
            const joined2 = mapped2.join(", ");
            cResult[22] = platformsContainer;
            cResult[23] = tmp24Result;
            cResult[24] = joined2;
          } else {
            class S {
              constructor(arg0) {
                return arg0.name;
              }
            }
            if (null != cResult[24]) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if ("" !== tmp23) {
                class S {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
              }
            }
            if (platformsContainer != null) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            if (null != undefined) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if ("" !== tmp30) {
                class S {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
                const _Symbol4 = Symbol;
                if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                  class S {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  const stringResult1 = obj6.string(trackAction(1126).t.H3mPDT);
                  cResult[31] = stringResult1;
                  const tmp31 = stringResult1;
                } else {
                  class S {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                if (cResult[32] !== tmp30) {
                  class S {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  const _Date = Date;
                  const date = new Date(tmp30);
                  const dateFormatResult = tmp5(4793).dateFormat(date, "LL");
                  cResult[32] = tmp30;
                  cResult[33] = dateFormatResult;
                  const obj7 = tmp5(4793);
                } else {
                  class S {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                if (cResult[34] !== tmp33) {
                  class S {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  tmp41[0] = tmp31;
                  tmp41[1] = tmp33;
                  cResult[34] = tmp33;
                  cResult[35] = tmp41;
                } else {
                  class S {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                items.push(tmp41);
              }
            }
            if (platformsContainer != null) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            if (null != undefined) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if (tmp43.length > 0) {
                class S {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
              }
            }
            let found;
            if (platformsContainer != null) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if (tmp45 != null) {
                class S {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
                found = arr5.filter((item) => null != item);
              }
            }
            if (found == null) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
            }
            if (null != found) {
              class S {
                constructor(arg0) {
                  return arg0.name;
                }
              }
              if (found.length > 0) {
                class S {
                  constructor(arg0) {
                    return arg0.name;
                  }
                }
                const _Symbol5 = Symbol;
                if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
                  class S {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                  const stringResult2 = obj8.string(trackAction(1126).t["Oj3o1/"]);
                  cResult[47] = stringResult2;
                  const tmp46 = stringResult2;
                } else {
                  class S {
                    constructor(arg0) {
                      return arg0.name;
                    }
                  }
                }
                if (cResult[48] !== trackAction) {
                  class Z {
                    constructor(arg0) {
                      url = arg0.url;
                      obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                      return jsx(GameProfileWebsiteButton, obj, url);
                    }
                  }
                  cResult[48] = trackAction;
                  cResult[49] = Z;
                } else {
                  class Z {
                    constructor(arg0) {
                      url = arg0.url;
                      obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                      return jsx(GameProfileWebsiteButton, obj, url);
                    }
                  }
                }
                let obj3 = { style: tmp4.linksContainer, children: found.map(Z) };
                const tmp51 = closure_8(closure_5, obj3);
                if (cResult[50] !== tmp51) {
                  class Z {
                    constructor(arg0) {
                      url = arg0.url;
                      obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                      return jsx(GameProfileWebsiteButton, obj, url);
                    }
                  }
                  tmp53[0] = tmp46;
                  tmp53[1] = tmp51;
                  cResult[50] = tmp51;
                  cResult[51] = tmp53;
                } else {
                  class Z {
                    constructor(arg0) {
                      url = arg0.url;
                      obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                      return jsx(GameProfileWebsiteButton, obj, url);
                    }
                  }
                }
                items.push(tmp53);
              }
            }
            if (items.length <= 0) {
              class Z {
                constructor(arg0) {
                  url = arg0.url;
                  obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                  return jsx(GameProfileWebsiteButton, obj, url);
                }
              }
              cResult[1] = platformsContainer;
              ({ linksContainer: tmp3[2], platformsContainer } = tmp4);
              cResult[3] = platformsContainer;
              cResult[4] = trackAction;
              cResult[5] = items;
            } else {
              class Z {
                constructor(arg0) {
                  url = arg0.url;
                  obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                  return jsx(GameProfileWebsiteButton, obj, url);
                }
              }
              const _Symbol6 = Symbol;
              if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
                class Z {
                  constructor(arg0) {
                    url = arg0.url;
                    obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                    return jsx(GameProfileWebsiteButton, obj, url);
                  }
                }
                const stringResult3 = obj10.string(trackAction(1126).t["BwQ+9e"]);
                const intl3 = trackAction(1126).intl;
                const obj4 = { igdbLink: IGDB_ATTRIBUTION_LINK };
                const formatResult = intl3.format(trackAction(1126).t.XPFZVl, obj4);
                cResult[52] = stringResult3;
                cResult[53] = formatResult;
                let tmp56 = formatResult;
                const tmp55 = stringResult3;
              } else {
                class Z {
                  constructor(arg0) {
                    url = arg0.url;
                    obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                    return jsx(GameProfileWebsiteButton, obj, url);
                  }
                }
                tmp56 = cResult[53];
              }
              if (cResult[54] !== tmp56) {
                class Z {
                  constructor(arg0) {
                    url = arg0.url;
                    obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                    return jsx(GameProfileWebsiteButton, obj, url);
                  }
                }
                tmp61[0] = tmp55;
                tmp61[1] = tmp56;
                cResult[54] = tmp56;
                cResult[55] = tmp61;
              } else {
                class Z {
                  constructor(arg0) {
                    url = arg0.url;
                    obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                    return jsx(GameProfileWebsiteButton, obj, url);
                  }
                }
              }
              items.push(tmp61);
            }
          }
        }
      } else {
        class Z {
          constructor(arg0) {
            url = arg0.url;
            obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
            return jsx(GameProfileWebsiteButton, obj, url);
          }
        }
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          class Z {
            constructor(arg0) {
              url = arg0.url;
              obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
              return jsx(GameProfileWebsiteButton, obj, url);
            }
          }
          cResult[0] = tmp5;
        } else {
          class Z {
            constructor(arg0) {
              url = arg0.url;
              obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
              return jsx(GameProfileWebsiteButton, obj, url);
            }
          }
        }
        if (0 === tmp5.length) {
          class Z {
            constructor(arg0) {
              url = arg0.url;
              obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
              return jsx(GameProfileWebsiteButton, obj, url);
            }
          }
        } else {
          class Z {
            constructor(arg0) {
              url = arg0.url;
              obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
              return jsx(GameProfileWebsiteButton, obj, url);
            }
          }
          const _Symbol7 = Symbol;
          ({ container, headerText } = tmp4);
          if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
            class Z {
              constructor(arg0) {
                url = arg0.url;
                obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                return jsx(GameProfileWebsiteButton, obj, url);
              }
            }
            const stringResult4 = obj12.string(trackAction(1126).t["7OjmmH"]);
            cResult[56] = stringResult4;
            const tmp64 = stringResult4;
          } else {
            class Z {
              constructor(arg0) {
                url = arg0.url;
                obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                return jsx(GameProfileWebsiteButton, obj, url);
              }
            }
          }
          if (cResult[57] !== tmp4.headerText) {
            class Z {
              constructor(arg0) {
                url = arg0.url;
                obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                return jsx(GameProfileWebsiteButton, obj, url);
              }
            }
            const obj5 = {
              variant: "heading-sm/semibold",
              color: "mobile-text-heading-primary",
              style: headerText,
              children: tmp64,
            };
            const tmp67 = closure_8(trackAction(5088).Text, obj5);
            cResult[57] = tmp4.headerText;
            cResult[58] = tmp67;
          } else {
            class Z {
              constructor(arg0) {
                url = arg0.url;
                obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                return jsx(GameProfileWebsiteButton, obj, url);
              }
            }
          }
          if (cResult[59] === tmp5) {
            class Z {
              constructor(arg0) {
                url = arg0.url;
                obj = { icon: arg0.icon, action: arg0.action, title: arg0.title, url, trackAction };
                return jsx(GameProfileWebsiteButton, obj, url);
              }
            }
          }
          const mapped3 = tmp5.map((children, index) => {
            const items = [closure_1.detailsRow];
            let prop = null;
            if (arr.length > 1) {
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
            return options(hasOwnProperty, obj, children.label);
          });
          cResult[59] = tmp5;
          cResult[60] = tmp4.detailsRow;
          cResult[61] = tmp4.detailsRowBottomBorder;
          cResult[62] = tmp4.detailsRowValue;
          cResult[63] = mapped3;
        }
      }
      let obj = trackAction(576);
    }
  : function GameProfileDetails(game) {
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
                      const mapped3 = websites.map((item) =>
                        trackAction(9102)(item, trackAction(587).colors.ICON_SUBTLE),
                      );
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
                        game(9095).GameUpdatePlatformIcon,
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
      let tmp2 = null;
      if (0 !== memo.length) {
        let obj = { style: tmp.container, children: null };
        let obj2 = {
          variant: "heading-sm/semibold",
          color: "mobile-text-heading-primary",
          style: tmp.headerText,
          children: null,
        };
        let intl = game(memo[10]).intl;
        obj2.children = intl.string(game(memo[10]).t["7OjmmH"]);
        let items1 = [closure_8(game(memo[15]).Text, obj2)];
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
            return options(hasOwnProperty, obj, children.label);
          }),
        };
        items1[1] = closure_8(closure_5, obj3);
        obj.children = items1;
        tmp2 = closure_9(closure_5, obj);
      }
      return tmp2;
    };
