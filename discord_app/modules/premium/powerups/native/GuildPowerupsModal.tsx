// === Module 12044: GuildPowerupsModal ===

// Module 12044 (GuildPowerupsModal)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4365 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ BoostInfoType: closure_6, GuildPowerupType: error } = BoostedGuildTiers);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, headerLeftContainer: null, headerRightContainer: null, boostInfoContainer: null, boostInfoSeparator: null, scrollView: null, boostButtonContainer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingLeft: ThemesDefault.space.PX_16 };
let obj1 = { paddingLeft: ThemesDefault.space.PX_16 };
createCacheKey[2] = { paddingRight: ThemesDefault.space.PX_16 };
let obj2 = { paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[3] = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: ThemesDefault.space.PX_16 };
let obj3 = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[4] = { width: 1, height: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj4 = { width: 1, height: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[5] = { paddingBottom: ThemesDefault.space.PX_96 };
let obj5 = { paddingBottom: ThemesDefault.space.PX_96 };
createCacheKey[6] = { paddingHorizontal: ThemesDefault.space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj6 = { paddingHorizontal: ThemesDefault.space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
const result = require("set").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsModal.tsx");

export default function GuildPowerupsModal(guildId) {
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  const autoOpenRequestId = guildId.autoOpenRequestId;
  let buildGuildPowerupsSections;
  closure_4 = undefined;
  let obj = guildId(autoOpenRequestId[6]);
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "GuildPowerupsModal");
  autoOpenPerkId(autoOpenRequestId[7])(guildId);
  obj1 = guildId(autoOpenRequestId[8]);
  const autoDismissGuildPowerupsNotifications = obj1.useAutoDismissGuildPowerupsNotifications(guildId);
  autoOpenPerkId(autoOpenRequestId[9])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  ({ bottom, top } = autoOpenPerkId(autoOpenRequestId[10])());
  let tmp9 = callback3();
  let tmp8 = autoOpenPerkId(autoOpenRequestId[10])();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmpResult = tmp(tmp2[12]);
  buildGuildPowerupsSections = tmpResult.useBuildGuildPowerupsSections(guildId, gameServerEnabled);
  closure_4 = buildGuildPowerupsSections.useRef(undefined);
  const items2 = [autoOpenPerkId, autoOpenRequestId, guildId, buildGuildPowerupsSections];
  const effect = buildGuildPowerupsSections.useEffect(() => {
    if (null != autoOpenPerkId) {
      if (null != autoOpenRequestId) {
        if (ref.current !== tmp33) {
          const iter = buildGuildPowerupsSections[Symbol.iterator]();
          while (iter !== undefined) {
            let listings = iter.next().listings;
            let tmp3 = listings;
            let tmp4 = listings;
            for (const item10011 of listings) {
              let tmp5 = item10011;
              if ("singlePerk" === item10011.type) {
                let tmp6 = item10011;
                let tmp7 = autoOpenPerkId;
                if (tmp5.powerup.skuId === autoOpenPerkId) {
                  let tmp22 = ref;
                  let tmp23 = autoOpenRequestId;
                  let tmp24 = autoOpenRequestId;
                  ref.current = autoOpenRequestId;
                  let tmp25 = autoOpenPerkId;
                  let tmp26 = autoOpenRequestId;
                  let obj = { guildId: null, powerup: null };
                  let tmp27 = guildId;
                  obj[0] = guildId;
                  let tmp28 = item10011;
                  obj[1] = tmp5.powerup;
                  let tmp29 = autoOpenPerkId(autoOpenRequestId[13])(obj);
                  let tmp30 = obj;
                  obj.return();
                  let tmp31 = iter;
                  iter.return();
                }
              }
              let tmp8 = item10011;
              if ("multiPerk" === tmp5.type) {
                let tmp9 = item10011;
                let tmp10 = autoOpenPerkId;
                if (tmp5.group !== autoOpenPerkId) {
                  let tmp11 = item10011;
                  let powerups = tmp5.powerups;
                }
                let tmp12 = ref;
                let tmp13 = autoOpenRequestId;
                let tmp14 = autoOpenRequestId;
                ref.current = autoOpenRequestId;
                let tmp15 = autoOpenPerkId;
                let tmp16 = autoOpenRequestId;
                obj = { guildId: null, listing: null, onDismiss: null };
                let tmp17 = guildId;
                obj[0] = guildId;
                let tmp18 = item10011;
                obj[1] = tmp5;
                obj[2] = function onDismiss() {
                  return callback(table[15]).pop();
                };
                let tmp19 = autoOpenPerkId(autoOpenRequestId[14])(obj);
                let tmp20 = obj;
                obj.return();
                let tmp21 = iter;
                iter.return();
              }
              continue;
            }
            continue;
          }
          const tmp36 = buildGuildPowerupsSections;
        }
      }
    }
  }, items2);
  const callback = buildGuildPowerupsSections.useCallback(() => {
    let arr = autoOpenPerkId(autoOpenRequestId[15]);
    arr = arr.pop();
  }, []);
  let tmp10 = autoOpenPerkId(autoOpenRequestId[11]);
  ({ available, spent, total } = autoOpenPerkId(autoOpenRequestId[16])(guildId));
  obj = { value: tmp10(...items1).analyticsLocations, children: null };
  obj = { style: tmp9.container, children: null };
  obj1 = { title: null, headerTitle: null, headerTitleAlign: "center", headerStatusBarHeight: null, headerLeft: null, headerLeftContainerStyle: null, headerRightContainerStyle: null };
  let intl = tmp(tmp2[18]).intl;
  obj1[0] = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
  obj1[1] = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(autoOpenRequestId[18]).intl;
    obj[0] = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
    return callback(guildId(autoOpenRequestId[20]).GenericHeaderTitle, obj);
  };
  obj1[3] = top + autoOpenPerkId(autoOpenRequestId[5]).space.PX_8;
  tmpResult = tmp(tmp2[21]);
  obj1[4] = tmpResult.getHeaderCloseButton(callback);
  ({ headerLeftContainer: obj6[5], headerRightContainer: obj6[6] } = tmp9);
  const items3 = [callback(guildId(autoOpenRequestId[17]).Header, obj1), , ];
  const obj2 = { contentContainerStyle: tmp9.scrollView, children: null };
  const obj3 = { style: tmp9.boostInfoContainer, children: null };
  const items4 = [callback(autoOpenPerkId(autoOpenRequestId[22]), { count: available, type: constants.AVAILABLE }), callback(closure_5, { style: tmp9.boostInfoSeparator }), , , ];
  const obj6 = { count: spent, type: constants.SPENT };
  items4[2] = callback(autoOpenPerkId(autoOpenRequestId[22]), obj6);
  items4[3] = callback(closure_5, { style: tmp9.boostInfoSeparator });
  items4[4] = callback(autoOpenPerkId(autoOpenRequestId[22]), { count: total, type: constants.TOTAL });
  obj3[1] = items4;
  const items5 = [
    callback2(closure_5, obj3),
    callback(autoOpenPerkId(autoOpenRequestId[23]), { guildId }),
    buildGuildPowerupsSections.map((type) => {
      type = type.type;
      if (closure_1_7.LEVEL === type) {
        let obj = { guildId: null, listings: null };
        obj[0] = guildId;
        obj[1] = type.listings;
        return closure_1_8(autoOpenPerkId(autoOpenRequestId[24]), obj, type.type);
      } else if (tmp.PERK === type) {
        obj = { guildId: null, listings: null };
        obj[0] = guildId;
        obj[1] = type.listings;
        return closure_1_8(autoOpenPerkId(autoOpenRequestId[25]), obj, type.type);
      } else {
        return null;
      }
    }),
    callback(autoOpenPerkId(autoOpenRequestId[26]), { guildId })
  ];
  obj2[1] = items5;
  items3[1] = callback2(closure_4, obj2);
  const obj4 = { count: available, type: constants.AVAILABLE };
  const obj5 = { style: tmp9.boostInfoSeparator };
  const obj7 = { style: tmp9.boostInfoSeparator };
  const obj8 = { count: total, type: constants.TOTAL };
  let tmp13 = autoOpenPerkId(autoOpenRequestId[16])(guildId);
  const items6 = [tmp9.boostButtonContainer, { paddingBottom: bottom }];
  items3[2] = callback(closure_5, { style: items6, children: callback(guildId(autoOpenRequestId[27]).GuildPowerupsBoostButton, { guildId }) });
  obj[1] = items3;
  obj[1] = callback2(closure_5, obj);
  return callback(guildId(autoOpenRequestId[11]).AnalyticsLocationProvider, obj);
};