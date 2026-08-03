// === Module 11585: GuildPowerupsModal ===

// Module 11585 (GuildPowerupsModal)
import messagesProxy from "messagesProxy";
import get_ActivityIndicator from "Background";
import BoostedGuildTiers from "BoostedGuildTiers";
import jsxProd from "HeaderBackImage";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ ScrollView: c4, View: c5 } = get_ActivityIndicator);
({ BoostInfoType: closure_6, GuildPowerupType: error } = BoostedGuildTiers);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { container: null, headerContainer: null, boostInfoContainer: null, boostInfoSeparator: null, scrollView: null, boostButtonContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_SUBTLE, marginBottom: require("Themes").space.PX_16 };
let obj2 = { flexDirection: "row", justifyContent: "space-between", borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_SUBTLE, marginBottom: require("Themes").space.PX_16 };
createCacheKey[3] = { width: 1, height: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let obj3 = { width: 1, height: "100%", backgroundColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey[4] = { paddingBottom: require("Themes").space.PX_96 };
let obj4 = { paddingBottom: require("Themes").space.PX_96 };
createCacheKey[5] = { paddingHorizontal: require("Themes").space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj5 = { paddingHorizontal: require("Themes").space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
const result = require("BoostedGuildTiers").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsModal.tsx");

export default function GuildPowerupsModal(guildId) {
  let analyticsLocation;
  let autoOpenPerkId;
  let available;
  let spent;
  let total;
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  const autoOpenRequestId = guildId.autoOpenRequestId;
  let buildGuildPowerupsSections;
  let closure_4;
  let obj = guildId(autoOpenRequestId[6]);
  const gameServerEnabled = obj.useGameServerEnabled(guildId, "GuildPowerupsModal");
  autoOpenPerkId(autoOpenRequestId[7])(guildId);
  let obj1 = guildId(autoOpenRequestId[8]);
  const autoDismissGuildPowerupsNotifications = obj1.useAutoDismissGuildPowerupsNotifications(guildId);
  autoOpenPerkId(autoOpenRequestId[9])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  let tmp8 = createCacheKey();
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
  let tmp9 = autoOpenPerkId(autoOpenRequestId[11]);
  ({ available, spent, total } = autoOpenPerkId(autoOpenRequestId[16])(guildId));
  obj = { value: tmp9(...items1).analyticsLocations, children: null };
  obj = { style: tmp8.container, children: null };
  obj1 = { style: tmp8.headerContainer, children: null };
  const obj2 = { title: null, headerTitle: null, headerTitleAlign: "center", headerLeft: null };
  let intl = tmp(tmp2[18]).intl;
  obj2[0] = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
  obj2[1] = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(autoOpenRequestId[18]).intl;
    obj[0] = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
    return callback(guildId(autoOpenRequestId[20]).GenericHeaderTitle, obj);
  };
  tmpResult = tmp(tmp2[21]);
  obj2[3] = tmpResult.getHeaderCloseButton(callback);
  obj1[1] = callback(guildId(autoOpenRequestId[17]).Header, obj2);
  const items3 = [callback(closure_5, obj1), , ];
  const obj3 = { contentContainerStyle: tmp8.scrollView, children: null };
  const obj4 = { style: tmp8.boostInfoContainer, children: null };
  const items4 = [callback(autoOpenPerkId(autoOpenRequestId[22]), { count: available, type: constants.AVAILABLE }), callback(closure_5, { style: tmp8.boostInfoSeparator }), callback(autoOpenPerkId(autoOpenRequestId[22]), { count: spent, type: constants.SPENT }), callback(closure_5, { style: tmp8.boostInfoSeparator }), callback(autoOpenPerkId(autoOpenRequestId[22]), { count: total, type: constants.TOTAL })];
  obj4[1] = items4;
  const items5 = [
    callback2(closure_5, obj4),
    callback(autoOpenPerkId(autoOpenRequestId[23]), { guildId }),
    buildGuildPowerupsSections.map((type) => {
      type = type.type;
      if (outer1_7.LEVEL === type) {
        let obj = { guildId: null, listings: null };
        obj[0] = guildId;
        obj[1] = type.listings;
        return outer1_8(autoOpenPerkId(autoOpenRequestId[24]), obj, type.type);
      } else if (tmp.PERK === type) {
        obj = { guildId: null, listings: null };
        obj[0] = guildId;
        obj[1] = type.listings;
        return outer1_8(autoOpenPerkId(autoOpenRequestId[25]), obj, type.type);
      } else {
        return null;
      }
    }),
    callback(autoOpenPerkId(autoOpenRequestId[26]), { guildId })
  ];
  obj3[1] = items5;
  items3[1] = callback2(closure_4, obj3);
  const obj5 = { count: available, type: constants.AVAILABLE };
  const obj6 = { style: tmp8.boostInfoSeparator };
  const obj7 = { count: spent, type: constants.SPENT };
  const obj8 = { style: tmp8.boostInfoSeparator };
  const obj9 = { count: total, type: constants.TOTAL };
  let tmp12 = autoOpenPerkId(autoOpenRequestId[16])(guildId);
  const items6 = [tmp8.boostButtonContainer, { paddingBottom: autoOpenPerkId(autoOpenRequestId[10])().bottom }];
  items3[2] = callback(closure_5, { style: items6, children: callback(guildId(autoOpenRequestId[27]).GuildPowerupsBoostButton, { guildId }) });
  obj[1] = items3;
  obj[1] = callback2(closure_5, obj);
  return callback(guildId(autoOpenRequestId[11]).AnalyticsLocationProvider, obj);
};