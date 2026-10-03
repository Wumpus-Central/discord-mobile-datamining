// === Module 12139: GuildPowerupsModal ===

// Module 12139 (GuildPowerupsModal)
import nativeDefault from "native" /* 587 */;
import openGuildPowerupsBottomSheetDefault from "openGuildPowerupsBottomSheet" /* 12174 */;
import openGuildPowerupsMultiPerkBottomSheetDefault from "openGuildPowerupsMultiPerkBottomSheet" /* 12205 */;
import GuildPowerupsLevelsSectionDefault from "GuildPowerupsLevelsSection" /* 12222 */;
import GuildPowerupsPerksSectionDefault from "GuildPowerupsPerksSection" /* 12228 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildPowerupsConstants = fn(4768);
({ BoostInfoType: metroRequire, GuildPowerupType: closure_7 } = GuildPowerupsConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, headerLeftContainer: null, headerRightContainer: null, boostInfoContainer: null, boostInfoSeparator: null, scrollView: null, boostButtonContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj5 = { paddingRight: nativeDefault.space.PX_16 };
obj2.boostInfoContainer = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_16 };
let size = { width: 1, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.boostInfoSeparator = size;
const obj6 = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: nativeDefault.space.PX_16 };
obj2.scrollView = { paddingBottom: nativeDefault.space.PX_96 };
const rect = { paddingHorizontal: nativeDefault.space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
obj2.boostButtonContainer = rect;
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj7 = { paddingBottom: nativeDefault.space.PX_96 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(autoOpenRequestId[7]).c(66);
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  autoOpenRequestId = guildId.autoOpenRequestId;
  let obj = guildId(autoOpenRequestId[7]);
  const gameServerEnabled = guildId(autoOpenRequestId[8]).useGameServerEnabled(guildId, "GuildPowerupsModal");
  autoOpenPerkId(autoOpenRequestId[9])(guildId);
  let obj2 = guildId(autoOpenRequestId[8]);
  const autoDismissGuildPowerupsNotifications = guildId(autoOpenRequestId[10]).useAutoDismissGuildPowerupsNotifications(guildId);
  autoOpenPerkId(autoOpenRequestId[11])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  let obj3 = guildId(autoOpenRequestId[10]);
  const tmp10 = closure_10();
  if (cResult[0] !== analyticsLocation) {
    if (null != analyticsLocation) {
      const items = [analyticsLocation];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = analyticsLocation;
    cResult[1] = items1;
  } else {
    const items2 = [];
    HermesBuiltin.arraySpread(cResult[1], 0);
    const analyticsLocations = HermesBuiltin.apply(items2, undefined).analyticsLocations;
    const tmp5Result = autoOpenPerkId(tmp2[13]);
    const buildGuildPowerupsSections = tmp(tmp2[14]).useBuildGuildPowerupsSections(guildId, gameServerEnabled);
    buildGuildPowerupsSections.useRef(undefined);
    if (cResult[2] === autoOpenPerkId) {
      if (cResult[3] === autoOpenRequestId) {
        if (cResult[4] === guildId) {
          if (cResult[5] === buildGuildPowerupsSections) {
            let tmp20 = cResult[6];
            let tmp21 = cResult[7];
          }
          const effect = obj5.useEffect(tmp20, tmp21);
          const _Symbol = Symbol;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                arr = autoOpenPerkId(autoOpenRequestId[17]);
                arr1 = arr.pop();
                return;
              }
            }
            cResult[8] = R;
          } else {
            class R {
              constructor() {
                arr = autoOpenPerkId(autoOpenRequestId[17]);
                arr1 = arr.pop();
                return;
              }
            }
          }
          ({ available, spent, total } = autoOpenPerkId(tmp2[18])(guildId));
          const _Symbol2 = Symbol;
          const container = tmp10.container;
          if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                arr = autoOpenPerkId(autoOpenRequestId[17]);
                arr1 = arr.pop();
                return;
              }
            }
            const stringResult = obj6.string(autoOpenPerkId(tmp2[20]).hjvcLO);
            const fn2 = function k() {
              const obj = { title: null };
              const intl = guildId(autoOpenRequestId[19]).intl;
              obj.title = intl.string(autoOpenPerkId(autoOpenRequestId[20]).hjvcLO);
              return closure_1_8(guildId(autoOpenRequestId[21]).GenericHeaderTitle, obj);
            };
            cResult[9] = stringResult;
            cResult[10] = fn2;
            let tmp27 = fn2;
            const tmp26 = stringResult;
          } else {
            class R {
              constructor() {
                arr = autoOpenPerkId(autoOpenRequestId[17]);
                arr1 = arr.pop();
                return;
              }
            }
            tmp27 = cResult[10];
          }
          const sum = tmp9.top + autoOpenPerkId(tmp2[5]).space.PX_8;
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor() {
                arr = autoOpenPerkId(autoOpenRequestId[17]);
                arr1 = arr.pop();
                return;
              }
            }
            const headerCloseButton = obj7.getHeaderCloseButton(R);
            cResult[11] = headerCloseButton;
            const tmp30 = headerCloseButton;
          } else {
            class R {
              constructor() {
                arr = autoOpenPerkId(autoOpenRequestId[17]);
                arr1 = arr.pop();
                return;
              }
            }
          }
          if (cResult[12] === tmp10.headerLeftContainer) {
            class R {
              constructor() {
                arr = autoOpenPerkId(autoOpenRequestId[17]);
                arr1 = arr.pop();
                return;
              }
            }
          }
          const obj4 = { title: tmp26, headerTitle: tmp27, headerTitleAlign: "center", headerStatusBarHeight: sum, headerLeft: tmp30, headerLeftContainerStyle: null, headerRightContainerStyle: null };
          ({ headerLeftContainer: obj8.headerLeftContainerStyle, headerRightContainer: obj8.headerRightContainerStyle } = tmp10);
          const tmp34 = closure_8(tmp(tmp2[23]).Header, obj4);
          cResult[12] = tmp10.headerLeftContainer;
          cResult[13] = tmp10.headerRightContainer;
          cResult[14] = sum;
          cResult[15] = tmp34;
          const tmp25 = autoOpenPerkId(tmp2[18])(guildId);
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
                                  return autoOpenPerkId(autoOpenRequestId[17]).pop();
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
    const items3 = [autoOpenPerkId, autoOpenRequestId, guildId, buildGuildPowerupsSections];
    cResult[2] = autoOpenPerkId;
    cResult[3] = autoOpenRequestId;
    cResult[4] = guildId;
    cResult[5] = buildGuildPowerupsSections;
    cResult[6] = fn;
    cResult[7] = items3;
    tmp21 = items3;
    tmp20 = fn;
    obj5 = buildGuildPowerupsSections;
    const tmpResult = tmp(tmp2[14]);
  }
  tmp9 = autoOpenPerkId(autoOpenRequestId[12])();
}) : ((guildId) => {
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  const autoOpenRequestId = guildId.autoOpenRequestId;
  let buildGuildPowerupsSections;
  let ref;
  const gameServerEnabled = guildId(autoOpenRequestId[8]).useGameServerEnabled(guildId, "GuildPowerupsModal");
  autoOpenPerkId(autoOpenRequestId[9])(guildId);
  let obj = guildId(autoOpenRequestId[8]);
  const autoDismissGuildPowerupsNotifications = guildId(autoOpenRequestId[10]).useAutoDismissGuildPowerupsNotifications(guildId);
  autoOpenPerkId(autoOpenRequestId[11])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  let obj2 = guildId(autoOpenRequestId[10]);
  ({ bottom, top } = autoOpenPerkId(autoOpenRequestId[12])());
  const tmp9 = closure_10();
  const tmp8 = autoOpenPerkId(autoOpenRequestId[12])();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp10 = autoOpenPerkId(autoOpenRequestId[13]);
  buildGuildPowerupsSections = guildId(autoOpenRequestId[14]).useBuildGuildPowerupsSections(guildId, gameServerEnabled);
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
                                return autoOpenPerkId(autoOpenRequestId[17]).pop();
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
    autoOpenPerkId(autoOpenRequestId[17]).pop();
  }, []);
  const tmpResult = guildId(autoOpenRequestId[14]);
  ({ available, spent, total } = autoOpenPerkId(autoOpenRequestId[18])(guildId));
  let obj3 = { value: tmp10(...items1).analyticsLocations, children: null };
  const obj4 = { style: tmp9.container, children: null };
  const obj5 = { title: null, headerTitle: null, headerTitleAlign: "center", headerStatusBarHeight: null, headerLeft: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
  let intl = tmp(tmp2[19]).intl;
  obj5.title = intl.string(autoOpenPerkId(autoOpenRequestId[20]).hjvcLO);
  obj5.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(autoOpenRequestId[19]).intl;
    obj.title = intl.string(autoOpenPerkId(autoOpenRequestId[20]).hjvcLO);
    return closure_1_8(guildId(autoOpenRequestId[21]).GenericHeaderTitle, obj);
  };
  obj5.headerStatusBarHeight = top + autoOpenPerkId(autoOpenRequestId[5]).space.PX_8;
  const tmp13 = autoOpenPerkId(autoOpenRequestId[18])(guildId);
  obj5.headerLeft = guildId(autoOpenRequestId[22]).getHeaderCloseButton(callback);
  ({ headerLeftContainer: obj6.headerLeftContainerStyle, headerRightContainer: obj6.headerRightContainerStyle } = tmp9);
  const items3 = [closure_8(guildId(autoOpenRequestId[23]).Header, obj5), , ];
  const obj7 = { contentContainerStyle: tmp9.scrollView, children: null };
  const obj8 = { style: tmp9.boostInfoContainer, children: null };
  const items4 = [closure_8(autoOpenPerkId(autoOpenRequestId[24]), { count: available, type: constants.AVAILABLE }), closure_8(closure_5, { style: tmp9.boostInfoSeparator }), closure_8(autoOpenPerkId(autoOpenRequestId[24]), { count: spent, type: constants.SPENT }), closure_8(closure_5, { style: tmp9.boostInfoSeparator }), closure_8(autoOpenPerkId(autoOpenRequestId[24]), { count: total, type: constants.TOTAL })];
  obj8.children = items4;
  const items5 = [
    closure_9(closure_5, obj8),
    closure_8(autoOpenPerkId(autoOpenRequestId[25]), { guildId }),
    buildGuildPowerupsSections.map((type) => {
      type = type.type;
      if (constants2.LEVEL === type) {
        const obj2 = { guildId, listings: type.listings };
        return closure_2_8(GuildPowerupsLevelsSectionDefault, obj2, type.type);
      } else if (tmp.PERK === type) {
        const obj = { guildId, listings: type.listings };
        return closure_2_8(GuildPowerupsPerksSectionDefault, obj, type.type);
      } else {
        return null;
      }
    }),
    closure_8(autoOpenPerkId(autoOpenRequestId[28]), { guildId })
  ];
  obj7.children = items5;
  items3[1] = closure_9(ref, obj7);
  const obj14 = { style: null, children: closure_8(guildId(autoOpenRequestId[29]).GuildPowerupsBoostButton, { guildId }) };
  const items6 = [tmp9.boostButtonContainer, { paddingBottom: bottom }];
  obj14.style = items6;
  items3[2] = closure_8(closure_5, obj14);
  obj4.children = items3;
  obj3.children = closure_9(closure_5, obj4);
  return closure_8(guildId(autoOpenRequestId[13]).AnalyticsLocationProvider, obj3);
});