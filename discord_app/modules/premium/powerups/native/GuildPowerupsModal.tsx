// discord_app/modules/premium/powerups/native/GuildPowerupsModal.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import openGuildPowerupsBottomSheetDefault from "utils/openGuildPowerupsBottomSheet.tsx";
import openGuildPowerupsMultiPerkBottomSheetDefault from "utils/openGuildPowerupsMultiPerkBottomSheet.tsx";
import GuildPowerupsLevelsSectionDefault from "GuildPowerupsLevelsSection.tsx";
import GuildPowerupsPerksSectionDefault from "GuildPowerupsPerksSection.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const GuildPowerupsConstants = fn(4529);
({ BoostInfoType: metroRequire, GuildPowerupType: closure_7 } = GuildPowerupsConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  headerLeftContainer: null,
  headerRightContainer: null,
  boostInfoContainer: null,
  boostInfoSeparator: null,
  scrollView: null,
  boostButtonContainer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.headerLeftContainer = { paddingLeft: nativeDefault.space.PX_16 };
let obj4 = { paddingLeft: nativeDefault.space.PX_16 };
obj2.headerRightContainer = { paddingRight: nativeDefault.space.PX_16 };
let obj5 = { paddingRight: nativeDefault.space.PX_16 };
obj2.boostInfoContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_16,
};
let size = { width: 1, height: "100%", backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.boostInfoSeparator = size;
const obj6 = {
  flexDirection: "row",
  justifyContent: "space-between",
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginBottom: nativeDefault.space.PX_16,
};
obj2.scrollView = { paddingBottom: nativeDefault.space.PX_96 };
const rect = { paddingHorizontal: nativeDefault.space.PX_16, position: "absolute", bottom: 0, left: 0, right: 0 };
obj2.boostButtonContainer = rect;
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsModal.tsx");

export default function GuildPowerupsModal(guildId) {
  guildId = guildId.guildId;
  ({ analyticsLocation, autoOpenPerkId } = guildId);
  const autoOpenRequestId = guildId.autoOpenRequestId;
  let buildGuildPowerupsSections;
  let ref;
  const gameServerEnabled = guildId(autoOpenRequestId[6]).useGameServerEnabled(guildId, "GuildPowerupsModal");
  autoOpenPerkId(autoOpenRequestId[7])(guildId);
  let obj = guildId(autoOpenRequestId[6]);
  const autoDismissGuildPowerupsNotifications = guildId(autoOpenRequestId[8]).useAutoDismissGuildPowerupsNotifications(
    guildId,
  );
  autoOpenPerkId(autoOpenRequestId[9])(guildId, "GuildPowerupsModal", null != autoOpenPerkId);
  let obj2 = guildId(autoOpenRequestId[8]);
  ({ bottom, top } = autoOpenPerkId(autoOpenRequestId[10])());
  const tmp9 = closure_10();
  const tmp8 = autoOpenPerkId(autoOpenRequestId[10])();
  if (null != analyticsLocation) {
    const items = [analyticsLocation];
    let items1 = items;
  } else {
    items1 = [];
  }
  const tmp10 = autoOpenPerkId(autoOpenRequestId[11]);
  buildGuildPowerupsSections = guildId(autoOpenRequestId[12]).useBuildGuildPowerupsSections(guildId, gameServerEnabled);
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
                    return autoOpenPerkId(autoOpenRequestId[15]).pop();
                  },
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
    autoOpenPerkId(autoOpenRequestId[15]).pop();
  }, []);
  const tmpResult = guildId(autoOpenRequestId[12]);
  ({ available, spent, total } = autoOpenPerkId(autoOpenRequestId[16])(guildId));
  let obj3 = { value: tmp10(...items1).analyticsLocations, children: null };
  const obj4 = { style: tmp9.container, children: null };
  const obj5 = {
    title: null,
    headerTitle: null,
    headerTitleAlign: "center",
    headerStatusBarHeight: null,
    headerLeft: null,
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
  };
  let intl = tmp(tmp2[18]).intl;
  obj5.title = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
  obj5.headerTitle = function headerTitle() {
    const obj = { title: null };
    const intl = guildId(autoOpenRequestId[18]).intl;
    obj.title = intl.string(autoOpenPerkId(autoOpenRequestId[19]).hjvcLO);
    return closure_1_8(guildId(autoOpenRequestId[20]).GenericHeaderTitle, obj);
  };
  obj5.headerStatusBarHeight = top + autoOpenPerkId(autoOpenRequestId[5]).space.PX_8;
  const tmp13 = autoOpenPerkId(autoOpenRequestId[16])(guildId);
  obj5.headerLeft = guildId(autoOpenRequestId[21]).getHeaderCloseButton(callback);
  ({ headerLeftContainer: obj6.headerLeftContainerStyle, headerRightContainer: obj6.headerRightContainerStyle } = tmp9);
  const items3 = [closure_8(guildId(autoOpenRequestId[17]).Header, obj5), ,];
  const obj7 = { contentContainerStyle: tmp9.scrollView, children: null };
  const obj8 = { style: tmp9.boostInfoContainer, children: null };
  const items4 = [
    closure_8(autoOpenPerkId(autoOpenRequestId[22]), { count: available, type: constants.AVAILABLE }),
    closure_8(closure_5, { style: tmp9.boostInfoSeparator }),
    closure_8(autoOpenPerkId(autoOpenRequestId[22]), { count: spent, type: constants.SPENT }),
    closure_8(closure_5, { style: tmp9.boostInfoSeparator }),
    closure_8(autoOpenPerkId(autoOpenRequestId[22]), { count: total, type: constants.TOTAL }),
  ];
  obj8.children = items4;
  const items5 = [
    closure_9(closure_5, obj8),
    closure_8(autoOpenPerkId(autoOpenRequestId[23]), { guildId }),
    buildGuildPowerupsSections.map((type) => {
      type = type.type;
      if (constants2.LEVEL === type) {
        const obj2 = { guildId, listings: type.listings };
        return React6(GuildPowerupsLevelsSectionDefault, obj2, type.type);
      } else if (tmp.PERK === type) {
        const obj = { guildId, listings: type.listings };
        return React6(GuildPowerupsPerksSectionDefault, obj, type.type);
      } else {
        return null;
      }
    }),
    closure_8(autoOpenPerkId(autoOpenRequestId[26]), { guildId }),
  ];
  obj7.children = items5;
  items3[1] = closure_9(ref, obj7);
  const obj14 = {
    style: null,
    children: closure_8(guildId(autoOpenRequestId[27]).GuildPowerupsBoostButton, { guildId }),
  };
  const items6 = [tmp9.boostButtonContainer, { paddingBottom: bottom }];
  obj14.style = items6;
  items3[2] = closure_8(closure_5, obj14);
  obj4.children = items3;
  obj3.children = closure_9(closure_5, obj4);
  return closure_8(guildId(autoOpenRequestId[11]).AnalyticsLocationProvider, obj3);
}
