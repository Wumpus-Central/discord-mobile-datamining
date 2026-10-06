// === Module 8575: GameProfileDetails ===

// Module 8575 (GameProfileDetails)
import nativeDefault from "native" /* 587 */;
import intl13 from "intl" /* 1126 */;
import Server from "Server" /* 1985 */;
import DateUtilsAll from "DateUtils" /* 4558 */;
import LinkingDefault from "Linking" /* 4571 */;
import Text_Text from "Text/Text" /* 4892 */;
import ContentInventoryConstants from "ContentInventoryConstants" /* 8037 */;
import SKUUtils from "SKUUtils" /* 8394 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
const IGDB_ATTRIBUTION_LINK = ContentInventoryConstants.IGDB_ATTRIBUTION_LINK;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerText: obj3, detailsContainer: obj4, detailsRow: obj5, detailsRowValue: obj6, detailsRowBottomBorder: obj7, platformsContainer: obj8, linksContainer: obj9 };
obj2 = { gap: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_8 };
obj4 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: nativeDefault.space.PX_12 };
obj6 = { flexDirection: "column", flexShrink: 1, paddingLeft: nativeDefault.space.PX_32 };
obj7 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((url) => {
  let action;
  let icon;
  let title;
  let trackAction;
  let obj = action(576);
  const cResult = obj.c(8);
  ({ icon, action } = url);
  ({ title, trackAction } = url);
  url = url.url;
  if (cResult[0] === action) {
    if (cResult[1] === trackAction) {
      let tmp3;
      if (cResult[2] === url) {
        tmp3 = cResult[3];
      }
      if (cResult[4] === tmp3) {
        if (cResult[5] === icon) {
          let tmp4;
          if (cResult[6] === title) {
            tmp4 = cResult[7];
          }
          return tmp4;
        }
      }
      const obj2 = { accessibilityRole: "button", accessibilityLabel: title, onPress: tmp3, hitSlop: trackAction(587).space.PX_4, children: icon };
      const tmp8 = closure_8(closure_6, obj2);
      cResult[4] = tmp3;
      cResult[5] = icon;
      cResult[6] = title;
      cResult[7] = tmp8;
      tmp4 = tmp8;
    }
  }
  const fn = function l() {
    const obj = LinkingDefault;
    obj.openURL(url);
    trackAction(action);
  };
  cResult[0] = action;
  cResult[1] = trackAction;
  cResult[2] = url;
  cResult[3] = fn;
  tmp3 = fn;
}) : ((action) => {
  let icon;
  let title;
  action = action.action;
  const trackAction = action.trackAction;
  const url = action.url;
  const items = [trackAction, action, url];
  ({ icon, title } = action);
  let obj = {
    accessibilityRole: "button",
    accessibilityLabel: title,
    onPress: react.useCallback(() => {
      const obj = LinkingDefault;
      obj.openURL(url);
      trackAction(action);
    }, items),
    hitSlop: trackAction(587).space.PX_4,
    children: icon
  };
  return closure_8(closure_6, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let arr;
  let closure_1;
  let container;
  let game;
  let headerText;
  let tmp57;
  let trackAction;
  let obj = trackAction(576);
  const cResult = obj.c(71);
  ({ game, trackAction } = arg0);
  const tmp4 = closure_10();
  importDefault = tmp4;
  if (null != game) {
    let tmp9;
    let tmp16;
    let arr4;
    let tmp25;
    let arr5;
    if (cResult[1] === game) {
      if (cResult[2] === tmp4.linksContainer) {
        if (cResult[3] === tmp4.platformsContainer) {
          let tmp6;
          if (cResult[4] === trackAction) {
            tmp6 = cResult[5];
          }
          arr = tmp6;
        }
      }
    }
    let genres;
    const tmp7 = cResult[6];
    if (game != null) {
      genres = game.genres;
    }
    if (tmp7 !== genres) {
      let joined;
      if (game != null) {
        const genres1 = game.genres;
        const mapped = genres1.map(trackAction(8394).getGenreText);
        joined = mapped.join(", ");
      }
      let genres2;
      if (game != null) {
        genres2 = game.genres;
      }
      cResult[6] = genres2;
      cResult[7] = joined;
      tmp9 = joined;
    } else {
      tmp9 = cResult[7];
    }
    let items = [];
    if (null != tmp9) {
      if ("" !== tmp9) {
        let tmp12;
        if (cResult[8] !== game.genres.length) {
          let stringResult;
          if (1 !== game.genres.length) {
            const intl2 = trackAction(1126).intl;
            stringResult = intl2.string(trackAction(1126).t.pDgwYB);
          } else {
            const intl = trackAction(1126).intl;
            stringResult = intl.string(trackAction(1126).t.mjFKqn);
          }
          cResult[8] = game.genres.length;
          cResult[9] = stringResult;
          tmp12 = stringResult;
        } else {
          tmp12 = cResult[9];
        }
        if (cResult[10] === tmp9) {
          let tmp14;
          if (cResult[11] === tmp12) {
            tmp14 = cResult[12];
          }
          const arr2 = items.push(tmp14);
        }
        let obj2 = { label: tmp12, value: tmp9 };
        cResult[10] = tmp9;
        cResult[11] = tmp12;
        cResult[12] = obj2;
        tmp14 = obj2;
      }
    }
    if (cResult[13] !== game) {
      let tmp19;
      let companyByRole;
      if (game != null) {
        companyByRole = game.getCompanyByRole(trackAction(1985).GameCompanyRole.PUBLISHER);
      }
      const _Symbol2 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function w(name) {
          return name.name;
        };
        cResult[16] = fn;
        tmp19 = fn;
      } else {
        tmp19 = cResult[16];
      }
      const mapped1 = companyByRole.map(tmp19);
      const joined1 = mapped1.join(", ");
      cResult[13] = game;
      cResult[14] = companyByRole;
      cResult[15] = joined1;
      tmp16 = joined1;
      arr4 = companyByRole;
    } else {
      arr4 = cResult[14];
      tmp16 = cResult[15];
    }
    if (null != tmp16) {
      if ("" !== tmp16) {
        let tmp21;
        if (cResult[17] !== arr4.length) {
          let stringResult1;
          if (1 !== arr4.length) {
            const intl4 = trackAction(1126).intl;
            stringResult1 = intl4.string(trackAction(1126).t.Hc7Enk);
          } else {
            const intl3 = trackAction(1126).intl;
            stringResult1 = intl3.string(trackAction(1126).t["4Byy/G"]);
          }
          cResult[17] = arr4.length;
          cResult[18] = stringResult1;
          tmp21 = stringResult1;
        } else {
          tmp21 = cResult[18];
        }
        if (cResult[19] === tmp16) {
          let tmp23;
          if (cResult[20] === tmp21) {
            tmp23 = cResult[21];
          }
          items.push(tmp23);
        }
        let obj3 = { label: tmp21, value: tmp16 };
        cResult[19] = tmp16;
        cResult[20] = tmp21;
        cResult[21] = obj3;
        tmp23 = obj3;
      }
    }
    if (cResult[22] !== game) {
      let tmp28;
      let companyByRole1;
      if (game != null) {
        companyByRole1 = game.getCompanyByRole(trackAction(1985).GameCompanyRole.DEVELOPER);
      }
      const _Symbol3 = Symbol;
      if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function k(name) {
          return name.name;
        };
        cResult[25] = fn2;
        tmp28 = fn2;
      } else {
        tmp28 = cResult[25];
      }
      const mapped2 = companyByRole1.map(tmp28);
      const joined2 = mapped2.join(", ");
      cResult[22] = game;
      cResult[23] = companyByRole1;
      cResult[24] = joined2;
      tmp25 = joined2;
      arr5 = companyByRole1;
    } else {
      arr5 = cResult[23];
      tmp25 = cResult[24];
    }
    if (null != tmp25) {
      if ("" !== tmp25) {
        let tmp30;
        if (cResult[26] !== arr5.length) {
          let stringResult2;
          if (1 !== arr5.length) {
            const intl6 = trackAction(1126).intl;
            stringResult2 = intl6.string(trackAction(1126).t.KATEJB);
          } else {
            const intl5 = trackAction(1126).intl;
            stringResult2 = intl5.string(trackAction(1126).t.na3PT0);
          }
          cResult[26] = arr5.length;
          cResult[27] = stringResult2;
          tmp30 = stringResult2;
        } else {
          tmp30 = cResult[27];
        }
        if (cResult[28] === tmp25) {
          let tmp32;
          if (cResult[29] === tmp30) {
            tmp32 = cResult[30];
          }
          items.push(tmp32);
        }
        const obj4 = { label: tmp30, value: tmp25 };
        cResult[28] = tmp25;
        cResult[29] = tmp30;
        cResult[30] = obj4;
        tmp32 = obj4;
      }
    }
    let firstReleaseDate;
    if (game != null) {
      firstReleaseDate = game.firstReleaseDate;
    }
    if (null != firstReleaseDate) {
      if ("" !== firstReleaseDate) {
        let tmp35;
        let tmp37;
        let tmp44;
        const _Symbol5 = Symbol;
        if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
          const intl7 = trackAction(1126).intl;
          const stringResult3 = intl7.string(trackAction(1126).t.H3mPDT);
          cResult[31] = stringResult3;
          tmp35 = stringResult3;
        } else {
          tmp35 = cResult[31];
        }
        if (cResult[32] !== firstReleaseDate) {
          const _Date = Date;
          const self = this;
          const self2 = this;
          const dateFormat = arr(4558).dateFormat;
          arr(4558);
          const date = new Date(firstReleaseDate);
          const dateFormatResult = dateFormat(date, "LL");
          cResult[32] = firstReleaseDate;
          cResult[33] = dateFormatResult;
          tmp37 = dateFormatResult;
        } else {
          tmp37 = cResult[33];
        }
        if (cResult[34] !== tmp37) {
          const obj5 = { label: tmp35, value: tmp37 };
          cResult[34] = tmp37;
          cResult[35] = obj5;
          tmp44 = obj5;
        } else {
          tmp44 = cResult[35];
        }
        items.push(tmp44);
      }
    }
    let platforms;
    if (game != null) {
      platforms = game.platforms;
    }
    if (null != platforms) {
      if (platforms.length > 0) {
        let tmp47;
        if (cResult[36] !== game.platforms.length) {
          let stringResult4;
          if (1 !== game.platforms.length) {
            const intl9 = trackAction(1126).intl;
            stringResult4 = intl9.string(trackAction(1126).t.PNqxNe);
          } else {
            const intl8 = trackAction(1126).intl;
            stringResult4 = intl8.string(trackAction(1126).t["UxAag+"]);
          }
          cResult[36] = game.platforms.length;
          cResult[37] = stringResult4;
          tmp47 = stringResult4;
        } else {
          tmp47 = cResult[37];
        }
        const platformsContainer = tmp4.platformsContainer;
        if (cResult[38] !== platforms) {
          const _Symbol4 = Symbol;
          if (cResult[40] === Symbol.for("react.memo_cache_sentinel")) {
            class F {
              constructor(platform) {
                const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
                const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
                return closure_1_8(GameUpdatePlatformIcon, obj, platform);
              }
            }
            cResult[40] = F;
          } else {
            class F {
              constructor(platform) {
                const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
                const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
                return closure_1_8(GameUpdatePlatformIcon, obj, platform);
              }
            }
          }
          const mapped3 = platforms.map(F);
          cResult[38] = platforms;
          cResult[39] = mapped3;
        } else {
          class F {
            constructor(platform) {
              const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
              const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
              return closure_1_8(GameUpdatePlatformIcon, obj, platform);
            }
          }
        }
        if (cResult[41] === tmp4.platformsContainer) {
          class F {
            constructor(platform) {
              const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
              const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
              return closure_1_8(GameUpdatePlatformIcon, obj, platform);
            }
          }
          if (cResult[44] === tmp47) {
            class F {
              constructor(platform) {
                const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
                const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
                return closure_1_8(GameUpdatePlatformIcon, obj, platform);
              }
            }
            items.push(tmp57);
          }
          const obj6 = { label: tmp47, value: tmp53 };
          cResult[44] = tmp47;
          cResult[45] = tmp53;
          cResult[46] = obj6;
          tmp57 = obj6;
        }
        const obj7 = { style: platformsContainer, children: tmp49 };
        cResult[41] = tmp4.platformsContainer;
        cResult[42] = tmp49;
        cResult[43] = closure_8(closure_5, obj7);
        const tmp56 = closure_8(closure_5, obj7);
      }
    }
    let found;
    if (game != null) {
      class F {
        constructor(platform) {
          const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
          const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
          return closure_1_8(GameUpdatePlatformIcon, obj, platform);
        }
      }
      if (tmp60 != null) {
        class F {
          constructor(platform) {
            const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
            const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
            return closure_1_8(GameUpdatePlatformIcon, obj, platform);
          }
        }
        found = arr6.filter((item) => null != item);
      }
    }
    if (found == null) {
      class F {
        constructor(platform) {
          const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
          const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
          return closure_1_8(GameUpdatePlatformIcon, obj, platform);
        }
      }
    }
    if (null != found) {
      class F {
        constructor(platform) {
          const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
          const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
          return closure_1_8(GameUpdatePlatformIcon, obj, platform);
        }
      }
      if (found.length > 0) {
        let tmp61;
        class F {
          constructor(platform) {
            const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
            const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
            return closure_1_8(GameUpdatePlatformIcon, obj, platform);
          }
        }
        const _Symbol6 = Symbol;
        if (cResult[47] === Symbol.for("react.memo_cache_sentinel")) {
          class F {
            constructor(platform) {
              const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
              const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
              return closure_1_8(GameUpdatePlatformIcon, obj, platform);
            }
          }
          const stringResult5 = obj11.string(trackAction(1126).t["Oj3o1/"]);
          cResult[47] = stringResult5;
          tmp61 = stringResult5;
        } else {
          class F {
            constructor(platform) {
              const obj = { platform, size: "md", color: closure_1(dependencyMap[5]).colors.ICON_SUBTLE };
              const GameUpdatePlatformIcon = trackAction(dependencyMap[13]).GameUpdatePlatformIcon;
              return closure_1_8(GameUpdatePlatformIcon, obj, platform);
            }
          }
        }
        if (cResult[48] !== trackAction) {
          class Z {
            constructor(icon) {
              const url = icon.url;
              const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
              return metroImportAll(closure_11, obj, url);
            }
          }
          cResult[48] = trackAction;
          cResult[49] = Z;
        } else {
          class Z {
            constructor(icon) {
              const url = icon.url;
              const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
              return metroImportAll(closure_11, obj, url);
            }
          }
        }
        const obj8 = { style: tmp4.linksContainer, children: found.map(Z) };
        const tmp66 = closure_8(closure_5, obj8);
        if (cResult[50] !== tmp66) {
          class Z {
            constructor(icon) {
              const url = icon.url;
              const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
              return metroImportAll(closure_11, obj, url);
            }
          }
          tmp68[0] = tmp61;
          tmp68[1] = tmp66;
          cResult[50] = tmp66;
          cResult[51] = tmp68;
        } else {
          class Z {
            constructor(icon) {
              const url = icon.url;
              const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
              return metroImportAll(closure_11, obj, url);
            }
          }
        }
        items.push(tmp68);
      }
    }
    if (items.length > 0) {
      let tmp71;
      let tmp70;
      class Z {
        constructor(icon) {
          const url = icon.url;
          const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
          return metroImportAll(closure_11, obj, url);
        }
      }
      const _Symbol7 = Symbol;
      if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
        class Z {
          constructor(icon) {
            const url = icon.url;
            const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
            return metroImportAll(closure_11, obj, url);
          }
        }
        const stringResult6 = obj13.string(trackAction(1126).t["BwQ+9e"]);
        const intl10 = trackAction(1126).intl;
        const obj9 = { igdbLink: IGDB_ATTRIBUTION_LINK };
        const formatResult = intl10.format(trackAction(1126).t.XPFZVl, obj9);
        cResult[52] = stringResult6;
        cResult[53] = formatResult;
        tmp71 = formatResult;
        tmp70 = stringResult6;
      } else {
        class Z {
          constructor(icon) {
            const url = icon.url;
            const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
            return metroImportAll(closure_11, obj, url);
          }
        }
        tmp71 = cResult[53];
      }
      if (cResult[54] !== tmp71) {
        class Z {
          constructor(icon) {
            const url = icon.url;
            const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
            return metroImportAll(closure_11, obj, url);
          }
        }
        tmp76[0] = tmp70;
        tmp76[1] = tmp71;
        cResult[54] = tmp71;
        cResult[55] = tmp76;
      } else {
        class Z {
          constructor(icon) {
            const url = icon.url;
            const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
            return metroImportAll(closure_11, obj, url);
          }
        }
      }
      items.push(tmp76);
    }
    cResult[1] = game;
    cResult[2] = tmp4.linksContainer;
    cResult[3] = tmp4.platformsContainer;
    cResult[4] = trackAction;
    cResult[5] = items;
    tmp6 = items;
  } else {
    class Z {
      constructor(icon) {
        const url = icon.url;
        const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
        return metroImportAll(closure_11, obj, url);
      }
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor(icon) {
          const url = icon.url;
          const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
          return metroImportAll(closure_11, obj, url);
        }
      }
      cResult[0] = tmp5;
      arr = tmp5;
    } else {
      class Z {
        constructor(icon) {
          const url = icon.url;
          const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
          return metroImportAll(closure_11, obj, url);
        }
      }
    }
  }
  if (0 === arr.length) {
    class Z {
      constructor(icon) {
        const url = icon.url;
        const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
        return metroImportAll(closure_11, obj, url);
      }
    }
  } else {
    let tmp78;
    class Z {
      constructor(icon) {
        const url = icon.url;
        const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
        return metroImportAll(closure_11, obj, url);
      }
    }
    const _Symbol8 = Symbol;
    ({ container, headerText } = tmp4);
    if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
      class Z {
        constructor(icon) {
          const url = icon.url;
          const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
          return metroImportAll(closure_11, obj, url);
        }
      }
      const stringResult7 = obj15.string(trackAction(1126).t["7OjmmH"]);
      cResult[56] = stringResult7;
      tmp78 = stringResult7;
    } else {
      class Z {
        constructor(icon) {
          const url = icon.url;
          const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
          return metroImportAll(closure_11, obj, url);
        }
      }
    }
    if (cResult[57] !== tmp4.headerText) {
      class Z {
        constructor(icon) {
          const url = icon.url;
          const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
          return metroImportAll(closure_11, obj, url);
        }
      }
      const obj10 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: headerText, children: tmp78 };
      cResult[57] = tmp4.headerText;
      cResult[58] = closure_8(trackAction(4892).Text, obj10);
      const tmp81 = closure_8(trackAction(4892).Text, obj10);
    } else {
      class Z {
        constructor(icon) {
          const url = icon.url;
          const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
          return metroImportAll(closure_11, obj, url);
        }
      }
    }
    if (cResult[59] === arr) {
      class Z {
        constructor(icon) {
          const url = icon.url;
          const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
          return metroImportAll(closure_11, obj, url);
        }
      }
    }
    const mapped4 = arr.map((children, index) => {
      let items1;
      let value;
      const items = [closure_1.detailsRow, ];
      let prop = null;
      if (arr.length > 1) {
        prop = null;
        if (index < arr2.length - 1) {
          prop = closure_1.detailsRowBottomBorder;
        }
      }
      const obj = { style: items, children: items1 };
      items[1] = prop;
      items1 = [, ];
      const obj2 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: children.label };
      items1[0] = metroImportAll(Text_Text.Text, obj2);
      if (typeof children.value === "string") {
        const obj3 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, style: closure_1.detailsRowValue, children: children.value };
        value = metroImportAll(Text_Text.Text, obj3);
      } else {
        value = children.value;
      }
      items1[1] = value;
      return React4(hasOwnProperty, obj, children.label);
    });
    cResult[59] = arr;
    cResult[60] = tmp4.detailsRow;
    cResult[61] = tmp4.detailsRowBottomBorder;
    cResult[62] = tmp4.detailsRowValue;
    cResult[63] = mapped4;
  }
}) : ((game) => {
  let intl;
  let items1;
  game = game.game;
  const trackAction = game.trackAction;
  let tmp = closure_10();
  let closure_2 = tmp;
  let items = [, , , ];
  ({ linksContainer: arr[0], platformsContainer: arr[1] } = tmp);
  items[2] = game;
  items[3] = trackAction;
  const memo = react.useMemo(function() {
    let date;
    let dateFormat;
    let intl10;
    let intl11;
    let intl12;
    let intl7;
    let obj11;
    let obj7;
    let obj9;
    if (null == game) {
      return [];
    } else {
      let joined;
      if (game != null) {
        const genres = game.genres;
        const mapped = genres.map(SKUUtils.getGenreText);
        joined = mapped.join(", ");
      }
      const items = [];
      const tmp4 = null != joined && "" !== joined;
      if (tmp4) {
        let stringResult;
        const push = items.push;
        if (1 !== game.genres.length) {
          const intl2 = intl13.intl;
          stringResult = intl2.string(intl13.t.pDgwYB);
        } else {
          const intl = intl13.intl;
          stringResult = intl.string(intl13.t.mjFKqn);
        }
        const obj2 = { label: stringResult, value: joined };
        push(obj2);
      }
      let companyByRole;
      if (game != null) {
        companyByRole = game.getCompanyByRole(Server.GameCompanyRole.PUBLISHER);
      }
      const mapped1 = companyByRole.map((name) => name.name);
      const joined1 = mapped1.join(", ");
      const tmp19 = null != joined1 && "" !== joined1;
      if (tmp19) {
        let stringResult1;
        const push2 = items.push;
        if (1 !== companyByRole.length) {
          const intl4 = intl13.intl;
          stringResult1 = intl4.string(intl13.t.Hc7Enk);
        } else {
          const intl3 = intl13.intl;
          stringResult1 = intl3.string(intl13.t["4Byy/G"]);
        }
        const obj3 = { label: stringResult1, value: joined1 };
        push2(obj3);
      }
      let companyByRole1;
      if (game != null) {
        companyByRole1 = game.getCompanyByRole(Server.GameCompanyRole.DEVELOPER);
      }
      const mapped2 = companyByRole1.map((name) => name.name);
      const joined2 = mapped2.join(", ");
      const tmp34 = null != joined2 && "" !== joined2;
      if (tmp34) {
        let stringResult2;
        const push3 = items.push;
        if (1 !== companyByRole1.length) {
          const intl6 = intl13.intl;
          stringResult2 = intl6.string(intl13.t.KATEJB);
        } else {
          const intl5 = intl13.intl;
          stringResult2 = intl5.string(intl13.t.na3PT0);
        }
        const obj4 = { label: stringResult2, value: joined2 };
        push3(obj4);
      }
      let firstReleaseDate;
      if (game != null) {
        firstReleaseDate = game.firstReleaseDate;
      }
      const tmp46 = null != firstReleaseDate && "" !== firstReleaseDate;
      if (tmp46) {
        const push4 = items.push;
        const obj5 = { label: intl7.string(intl13.t.H3mPDT), value: dateFormat(date, "LL") };
        intl7 = intl13.intl;
        const _Date = Date;
        const self = this;
        const self2 = this;
        dateFormat = DateUtilsAll.dateFormat;
        DateUtilsAll;
        date = new Date(firstReleaseDate);
        push4(obj5);
      }
      let platforms;
      if (game != null) {
        platforms = game.platforms;
      }
      const tmp60 = null != platforms && platforms.length > 0;
      if (tmp60) {
        let stringResult3;
        const push5 = items.push;
        if (1 !== game.platforms.length) {
          const intl9 = intl13.intl;
          stringResult3 = intl9.string(intl13.t.PNqxNe);
        } else {
          const intl8 = intl13.intl;
          stringResult3 = intl8.string(intl13.t["UxAag+"]);
        }
        const obj6 = { label: stringResult3, value: metroImportAll(hasOwnProperty, obj7) };
        obj7 = {
          style: closure_2.platformsContainer,
          children: platforms.map((platform) => {
                const obj = { platform, size: "md", color: trackAction(memo[5]).colors.ICON_SUBTLE };
                const GameUpdatePlatformIcon = game(memo[13]).GameUpdatePlatformIcon;
                return closure_1_8(GameUpdatePlatformIcon, obj, platform);
              })
        };
        push5(obj6);
      }
      let found;
      if (game != null) {
        const websites = game.websites;
        if (websites != null) {
          const mapped3 = websites.map((item) => {
            const tmp = trackAction(memo[14]);
            return tmp(item, trackAction(memo[5]).colors.ICON_SUBTLE);
          });
          found = mapped3.filter((item) => null != item);
        }
      }
      if (found == null) {
        found = [];
      }
      const tmp74 = null != found && found.length > 0;
      if (tmp74) {
        const push6 = items.push;
        const obj8 = { label: intl10.string(intl13.t["Oj3o1/"]), value: metroImportAll(hasOwnProperty, obj9) };
        intl10 = intl13.intl;
        obj9 = {
          style: closure_2.linksContainer,
          children: found.map((icon) => {
                const url = icon.url;
                const obj = { icon: icon.icon, action: icon.action, title: icon.title, url, trackAction };
                return closure_2_8(closure_2_11, obj, url);
              })
        };
        push6(obj8);
      }
      if (items.length > 0) {
        const push7 = items.push;
        const obj10 = { label: intl11.string(intl13.t["BwQ+9e"]), value: intl12.format(intl13.t.XPFZVl, obj11) };
        intl11 = intl13.intl;
        intl12 = intl13.intl;
        obj11 = { igdbLink: IGDB_ATTRIBUTION_LINK };
        push7(obj10);
      }
      return items;
    }
  }, items);
  let tmp2 = null;
  if (0 !== memo.length) {
    let obj = { style: tmp.container, children: items1 };
    let obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(game(memo[10]).t["7OjmmH"]) };
    const Text = game(memo[15]).Text;
    intl = game(memo[10]).intl;
    items1 = [closure_8(Text, obj2), ];
    let obj3 = {
      style: tmp.detailsContainer,
      children: memo.map((children, index) => {
          let items1;
          let value;
          const items = [closure_2.detailsRow, ];
          let prop = null;
          if (memo.length > 1) {
            prop = null;
            if (index < arr2.length - 1) {
              prop = closure_2.detailsRowBottomBorder;
            }
          }
          const obj = { style: items, children: items1 };
          items[1] = prop;
          items1 = [, ];
          const obj2 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, children: children.label };
          items1[0] = metroImportAll(Text_Text.Text, obj2);
          if (typeof children.value === "string") {
            const obj3 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, style: closure_2.detailsRowValue, children: children.value };
            value = metroImportAll(Text_Text.Text, obj3);
          } else {
            value = children.value;
          }
          items1[1] = value;
          return React4(hasOwnProperty, obj, children.label);
        })
    };
    items1[1] = closure_8(closure_5, obj3);
    tmp2 = closure_9(closure_5, obj);
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileDetails.tsx");

export default tmp5;