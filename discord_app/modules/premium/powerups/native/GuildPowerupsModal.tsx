// === Module 12139: GuildPowerupsModal ===

// Module 12139 (GuildPowerupsModal)
import nativeDefault from "native" /* 587 */;
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 12174 */;
import openGuildPowerupsMultiPerkBottomSheetDefault from "openGuildPowerupsMultiPerkBottomSheet" /* 12205 */;
import GuildPowerupsLevelsSectionDefault from "GuildPowerupsLevelsSection" /* 12222 */;
import GuildPowerupsPerksSectionDefault from "GuildPowerupsPerksSection" /* 12228 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let guildId, type;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ BoostInfoType: metroRequire, GuildPowerupType: metroImportDefault } = GuildPowerupsConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerLeftContainer: obj3, headerRightContainer: obj4, boostInfoContainer: obj5, boostInfoSeparator: size, scrollView: obj6, boostButtonContainer: rect };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingLeft: nativeDefault.space.PX_16 };
obj4 = { paddingRight: nativeDefault.space.PX_16 };
obj5 = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_16 };
size = { width: 1, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj6 = { paddingBottom: nativeDefault.space.PX_96 };
rect = { paddingHorizontal: nativeDefault.space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
let closure_10 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let analyticsLocation;
  let autoOpenPerkId;
  let autoOpenRequestId;
  let available;
  let spent;
  let tmp11;
  let total;
  const tmp = guildId;
  let obj = guildId(autoOpenRequestId[7]);
  const cResult = obj.c(66);
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  autoOpenRequestId = guildId.autoOpenRequestId;
  let obj2 = guildId(autoOpenRequestId[8]);
  const gameServerEnabled = obj2.useGameServerEnabled(guildId, "GuildPowerupsModal");
  autoOpenPerkId(autoOpenRequestId[9])(guildId);
  let obj3 = guildId(autoOpenRequestId[10]);
  const autoDismissGuildPowerupsNotifications = obj3.useAutoDismissGuildPowerupsNotifications(guildId);
  autoOpenPerkId(autoOpenRequestId[11])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  const top = autoOpenPerkId(autoOpenRequestId[12])().top;
  autoOpenPerkId(autoOpenRequestId[12])();
  const tmp10 = closure_10();
  if (cResult[0] !== analyticsLocation) {
    let items1;
    if (null != analyticsLocation) {
      const items = [analyticsLocation];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = analyticsLocation;
    cResult[1] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[1];
  }
  const tmp5Result = autoOpenPerkId(autoOpenRequestId[13]);
  const analyticsLocations = tmp5Result(...tmp11).analyticsLocations;
  const tmpResult = tmp(autoOpenRequestId[14]);
  const buildGuildPowerupsSections = tmpResult.useBuildGuildPowerupsSections(guildId, gameServerEnabled);
  const ref = buildGuildPowerupsSections.useRef(undefined);
  const obj5 = buildGuildPowerupsSections;
  if (cResult[2] === autoOpenPerkId) {
    if (cResult[3] === autoOpenRequestId) {
      if (cResult[4] === guildId) {
        let tmp14;
        let tmp15;
        let tmp21;
        let tmp20;
        let tmp24;
        if (cResult[5] === buildGuildPowerupsSections) {
          tmp14 = cResult[6];
          tmp15 = cResult[7];
        }
        const effect = obj5.useEffect(tmp14, tmp15);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              const arr = autoOpenPerkId(autoOpenRequestId[17]);
              arr.pop();
            }
          }
          cResult[8] = R;
        } else {
          class R {
            constructor() {
              const arr = autoOpenPerkId(autoOpenRequestId[17]);
              arr.pop();
            }
          }
        }
        let tmp19 = autoOpenPerkId(tmp2[18])(guildId);
        ({ available, spent, total } = tmp19);
        const _Symbol2 = Symbol;
        const container = tmp10.container;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              const arr = autoOpenPerkId(autoOpenRequestId[17]);
              arr.pop();
            }
          }
          const stringResult = obj6.string(autoOpenPerkId(autoOpenRequestId[20]).hjvcLO);
          const fn2 = function k() {
            let intl;
            const obj = { title: intl.string(autoOpenPerkId(autoOpenRequestId[20]).hjvcLO) };
            const GenericHeaderTitle = guildId(autoOpenRequestId[21]).GenericHeaderTitle;
            intl = guildId(autoOpenRequestId[19]).intl;
            return closure_1_8(GenericHeaderTitle, obj);
          };
          cResult[9] = stringResult;
          cResult[10] = fn2;
          tmp21 = fn2;
          tmp20 = stringResult;
        } else {
          class R {
            constructor() {
              const arr = autoOpenPerkId(autoOpenRequestId[17]);
              arr.pop();
            }
          }
          tmp21 = cResult[10];
        }
        const sum = top + autoOpenPerkId(tmp2[5]).space.PX_8;
        const _Symbol3 = Symbol;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class R {
            constructor() {
              const arr = autoOpenPerkId(autoOpenRequestId[17]);
              arr.pop();
            }
          }
          const headerCloseButton = obj7.getHeaderCloseButton(R);
          cResult[11] = headerCloseButton;
          tmp24 = headerCloseButton;
        } else {
          class R {
            constructor() {
              const arr = autoOpenPerkId(autoOpenRequestId[17]);
              arr.pop();
            }
          }
        }
        if (cResult[12] === tmp10.headerLeftContainer) {
          class R {
            constructor() {
              const arr = autoOpenPerkId(autoOpenRequestId[17]);
              arr.pop();
            }
          }
        }
        const obj4 = { title: tmp20, headerTitle: tmp21, headerTitleAlign: "center", headerStatusBarHeight: sum, headerLeft: tmp24, headerLeftContainerStyle: null, headerRightContainerStyle: null };
        ({ headerLeftContainer: obj8.headerLeftContainerStyle, headerRightContainer: obj8.headerRightContainerStyle } = tmp10);
        cResult[12] = tmp10.headerLeftContainer;
        cResult[13] = tmp10.headerRightContainer;
        cResult[14] = sum;
        cResult[15] = closure_8(tmp(autoOpenRequestId[23]).Header, obj4);
        const tmp28 = closure_8(tmp(autoOpenRequestId[23]).Header, obj4);
      }
    }
  }
  const fn = function _() {
    if (null != autoOpenPerkId) {
      if (null != autoOpenRequestId) {
        if (ref.current !== tmp33) {
          const iter = buildGuildPowerupsSections[Symbol.iterator]();
          while (iter !== undefined) {
            let listings = iter.next().listings;
            for (const item10011 of listings) {
              if ("singlePerk" === item10011.type) {
                if (item10011.powerup.skuId === autoOpenPerkId) {
                  ref.current = autoOpenRequestId;
                  let obj2 = { guildId, powerup: item10011.powerup };
                  let tmp29 = openGuildPowerupsBottomSheetDefault(obj2);
                  obj.return();
                  iter.return();
                }
              }
              if ("multiPerk" === item10011.type) {
                if (item10011.group !== autoOpenPerkId) {
                  let powerups = item10011.powerups;
                }
                ref.current = autoOpenRequestId;
                let obj3 = {
                  guildId,
                  listing: item10011,
                  onDismiss() {
                                const arr = autoOpenPerkId(autoOpenRequestId[17]);
                                return arr.pop();
                              }
                };
                let tmp19 = openGuildPowerupsMultiPerkBottomSheetDefault(obj3);
                obj.return();
                iter.return();
              }
              continue;
            }
            continue;
          }
        }
      }
    }
  };
  const items2 = [autoOpenPerkId, autoOpenRequestId, guildId, buildGuildPowerupsSections];
  cResult[2] = autoOpenPerkId;
  cResult[3] = autoOpenRequestId;
  cResult[4] = guildId;
  cResult[5] = buildGuildPowerupsSections;
  cResult[6] = fn;
  cResult[7] = items2;
  tmp15 = items2;
  tmp14 = fn;
}) : ((guildId) => {
  let analyticsLocation;
  let autoOpenPerkId;
  let available;
  let bottom;
  let intl;
  let items1;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj4;
  let spent;
  let tmpResult2;
  let top;
  let total;
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  const autoOpenRequestId = guildId.autoOpenRequestId;
  let buildGuildPowerupsSections;
  let ref;
  const tmp = guildId;
  let obj = guildId(autoOpenRequestId[8]);
  let tmp4 = autoOpenPerkId;
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "GuildPowerupsModal");
  autoOpenPerkId(autoOpenRequestId[9])(guildId);
  let obj2 = guildId(autoOpenRequestId[10]);
  const autoDismissGuildPowerupsNotifications = obj2.useAutoDismissGuildPowerupsNotifications(guildId);
  autoOpenPerkId(autoOpenRequestId[11])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  ({ bottom, top } = autoOpenPerkId(autoOpenRequestId[12])());
  autoOpenPerkId(autoOpenRequestId[12])();
  const tmp9 = closure_10();
  const tmp10 = autoOpenPerkId(autoOpenRequestId[13]);
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    items1 = items;
  } else {
    items1 = [];
  }
  const analyticsLocations = tmp10(...items1).analyticsLocations;
  const tmpResult = tmp(autoOpenRequestId[14]);
  buildGuildPowerupsSections = tmpResult.useBuildGuildPowerupsSections(guildId, gameServerEnabled);
  ref = buildGuildPowerupsSections.useRef(undefined);
  const items2 = [autoOpenPerkId, autoOpenRequestId, guildId, buildGuildPowerupsSections];
  const effect = buildGuildPowerupsSections.useEffect(() => {
    if (null != autoOpenPerkId) {
      if (null != autoOpenRequestId) {
        if (ref.current !== tmp33) {
          const iter = buildGuildPowerupsSections[Symbol.iterator]();
          while (iter !== undefined) {
            let listings = iter.next().listings;
            for (const item10011 of listings) {
              if ("singlePerk" === item10011.type) {
                if (item10011.powerup.skuId === autoOpenPerkId) {
                  ref.current = autoOpenRequestId;
                  let obj2 = { guildId, powerup: item10011.powerup };
                  let tmp29 = openGuildPowerupsBottomSheetDefault(obj2);
                  obj.return();
                  iter.return();
                }
              }
              if ("multiPerk" === item10011.type) {
                if (item10011.group !== autoOpenPerkId) {
                  let powerups = item10011.powerups;
                }
                ref.current = autoOpenRequestId;
                let obj3 = {
                  guildId,
                  listing: item10011,
                  onDismiss() {
                                const arr = autoOpenPerkId(autoOpenRequestId[17]);
                                return arr.pop();
                              }
                };
                let tmp19 = openGuildPowerupsMultiPerkBottomSheetDefault(obj3);
                obj.return();
                iter.return();
              }
              continue;
            }
            continue;
          }
        }
      }
    }
  }, items2);
  const callback = buildGuildPowerupsSections.useCallback(() => {
    const arr = autoOpenPerkId(autoOpenRequestId[17]);
    arr.pop();
  }, []);
  ({ available, spent, total } = tmp4(autoOpenRequestId[18])(guildId));
  let obj3 = { value: analyticsLocations, children: closure_9(closure_5, obj4) };
  obj4 = { style: tmp9.container, children: items3 };
  tmp4(autoOpenRequestId[18])(guildId);
  const AnalyticsLocationProvider = tmp(tmp2[13]).AnalyticsLocationProvider;
  const obj5 = {
    title: intl.string(tmp4(autoOpenRequestId[20]).hjvcLO),
    headerTitle() {
      let intl;
      const obj = { title: intl.string(autoOpenPerkId(autoOpenRequestId[20]).hjvcLO) };
      const GenericHeaderTitle = guildId(autoOpenRequestId[21]).GenericHeaderTitle;
      intl = guildId(autoOpenRequestId[19]).intl;
      return closure_1_8(GenericHeaderTitle, obj);
    },
    headerTitleAlign: "center",
    headerStatusBarHeight: top + tmp4(autoOpenRequestId[5]).space.PX_8,
    headerLeft: tmpResult2.getHeaderCloseButton(callback),
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null
  };
  const Header = tmp(tmp2[23]).Header;
  intl = tmp(tmp2[19]).intl;
  ({ headerLeftContainer: obj6.headerLeftContainerStyle, headerRightContainer: obj6.headerRightContainerStyle } = tmp9);
  tmpResult2 = tmp(autoOpenRequestId[22]);
  items3 = [closure_8(Header, obj5), , ];
  const obj8 = { style: tmp9.boostInfoContainer, children: items4 };
  items4 = [, , , , ];
  const obj7 = { contentContainerStyle: tmp9.scrollView, children: items5 };
  const obj9 = { count: available, type: constants.AVAILABLE };
  items4[0] = closure_8(tmp4(autoOpenRequestId[24]), obj9);
  const obj10 = { style: tmp9.boostInfoSeparator };
  items4[1] = closure_8(closure_5, obj10);
  const obj11 = { count: spent, type: constants.SPENT };
  items4[2] = closure_8(tmp4(autoOpenRequestId[24]), obj11);
  const obj12 = { style: tmp9.boostInfoSeparator };
  items4[3] = closure_8(closure_5, obj12);
  const obj13 = { count: total, type: constants.TOTAL };
  items4[4] = closure_8(tmp4(autoOpenRequestId[24]), obj13);
  items5 = [
    closure_9(closure_5, obj8),
    closure_8(tmp4(tmp2[25]), { guildId }),
    buildGuildPowerupsSections.map((type) => {
      type = type.type;
      if (metroImportDefault.LEVEL === type) {
        const obj2 = { guildId, listings: type.listings };
        return metroImportAll(GuildPowerupsLevelsSectionDefault, obj2, type.type);
      } else if (tmp.PERK === type) {
        const obj = { guildId, listings: type.listings };
        return metroImportAll(GuildPowerupsPerksSectionDefault, obj, type.type);
      } else {
        return null;
      }
    }),
    closure_8(tmp4(tmp2[28]), { guildId })
  ];
  items3[1] = closure_9(ref, obj7);
  const obj14 = { style: items6, children: closure_8(tmp(autoOpenRequestId[29]).GuildPowerupsBoostButton, { guildId }) };
  items6 = [tmp9.boostButtonContainer, { paddingBottom: bottom }];
  items3[2] = closure_8(closure_5, obj14);
  return closure_8(AnalyticsLocationProvider, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsModal.tsx");

export default tmp6;