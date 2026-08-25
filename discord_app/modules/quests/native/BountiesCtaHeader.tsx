// discord_app/modules/quests/native/BountiesCtaHeader.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import openBountiesNuxPromoSheetDefault from "openBountiesNuxPromoSheet.tsx";
import _modDef14536 from "BountiesBannerBackground.tsx";
import metadataDefault from "../../../../discord_assets/assets/quests/bounties/bounty_banner.mp4.js";
import importAllResult from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../a11y/AccessibilityStore.tsx";
import closure_6 from "../AdContentSeenStore.tsx";
import QuestsExperimentLocations from "../QuestConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { useTrackQuestEventWithImpression } from "../lib/analytics/AnalyticsHooks.tsx";

require = arg1;
function BountiesCtaDescription(isEmptyOrCompleted) {
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  const t = getSystemLocale.t;
  if (isEmptyOrCompleted) {
    let AZGGo1 = t.q4wlOE;
    let tmp5 = tmp2;
  } else {
    AZGGo1 = t.AZGGo1;
    tmp5 = tmp2;
  }
  let obj = { variant: "text-sm/medium", color: "text-subtle", children: null };
  const intl = tmp5(1236).intl;
  obj[2] = intl.string(AZGGo1);
  const tmp7 = callback(tmp5(4376).Text, obj);
  const intl2 = tmp5(1236).intl;
  obj = { onClick: openBountiesNuxPromoSheetDefault };
  const formatResult = intl2.format(tmp5(1236).t.fjSvsC, obj);
  if (isEmptyOrCompleted) {
    obj = { variant: "text-sm/medium", children: null };
    const items = [tmp7, " ", formatResult];
    obj[1] = items;
    let tmp9Result = tmp9(tmp5(4376).Text, obj);
  } else {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.description;
    const items1 = [tmp7, ];
    const obj2 = { variant: "text-sm/medium", children: null };
    obj2[1] = formatResult;
    items1[1] = callback(tmp5(4376).Text, obj2);
    obj1[1] = items1;
    tmp9Result = tmp9(closure_4, obj1);
  }
  return tmp9Result;
}
function BountiesCtaHeaderInner(bounties) {
  bounties = bounties.bounties;
  let flag = bounties.isEmptyOrCompleted;
  if (flag === undefined) {
    flag = false;
  }
  importDefault = undefined;
  const tmp = callback2();
  let obj = bounties(589);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj1 = bounties(589);
  const items1 = [closure_6];
  const items2 = [bounties];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => bounties.some((id) => !closure_6.hasSeen(callback(table[12]).AdCreativeType.BOUNTY, id.id)), items2);
  let obj2 = bounties(11068);
  const QuestContent = bounties(5271).QuestContent;
  const tmp6 = obj2.useBountiesExperience(constants2.QUEST_HOME_MOBILE).verticalScrollEnabled ? QuestContent.VIDEO_MODAL_MOBILE : QuestContent.QUEST_HOME_MOBILE_CAROUSEL;
  importDefault = tmp6;
  const items3 = [bounties, tmp6];
  obj = { ref: bounties.containerRef, style: tmp.container, children: null };
  const callback = importAllResult.useCallback(() => {
    let obj = bounties(closure_1_2[15]);
    obj = { adContentId: closure_1_8, adCreativeType: bounties(closure_1_2[12]).AdCreativeType.BOUNTY, questContent: bounties(closure_1_2[14]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentCTA: bounties(closure_1_2[16]).QuestContentCTA.START_BOUNTY, sourceQuestContent: bounties(closure_1_2[14]).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE, questContentPosition: 0 };
    const result = obj.trackAdContentClicked(obj);
    obj = { bountyId: bounties[0].id, sourceQuestContent: callback };
    callback(closure_1_2[17]).showModal(obj);
  }, items3);
  obj = { uri: metadataDefault, style: items4, children: null };
  items4 = [, ];
  ({ header: arr5[0], headerRoundedBottom: arr5[1] } = tmp);
  let tmp11 = stateFromStores1;
  if (stateFromStores1) {
    obj1 = { variant: "text-xs/bold", containerStyle: null, textStyle: null };
    ({ newPill: obj6[1], newPillText: obj6[2] } = tmp);
    tmp11 = callback(tmp2(1297).NewTag, obj1);
  }
  const items5 = [tmp11, ];
  obj2 = { style: tmp.headerTextBox, children: null };
  const obj3 = { variant: "text-lg/semibold", color: "text-strong", children: null };
  const intl = tmp2(1236).intl;
  obj3[2] = intl.string(bounties(1236).t.qetVDw);
  const items6 = [callback(bounties(4376).Text, obj3), callback(BountiesCtaDescription, { isEmptyOrCompleted: flag }), ];
  let tmp13Result = !flag;
  if (!flag) {
    const obj4 = { grow: true, size: "md", variant: "primary-overlay", text: null, onPress: null };
    const intl2 = tmp2(1236).intl;
    obj4[3] = intl2.string(tmp2(1236).t["1kkbKw"]);
    obj4[4] = callback;
    tmp13Result = callback(tmp2(4815).Button, obj4);
  }
  items6[2] = tmp13Result;
  obj2[1] = items6;
  items5[1] = closure_11(closure_4, obj2);
  obj[2] = items5;
  const items7 = [closure_11(_modDef14536, obj), false];
  obj[2] = items7;
  return closure_11(closure_4, obj);
}
let c3 = importAllResult;
({ StyleSheet, View: c4 } = get_ActivityIndicator);
({ BountyCarouselEmptyStateReason: error, DEFAULT_PLACEHOLDER_ENTRYPOINT_BOUNTY_ID: closure_8, QuestsExperimentLocations: c9 } = QuestsExperimentLocations);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles(() => {
  let obj = { container: null, header: null, headerRoundedBottom: null, newPill: null, newPillText: null, headerTextBox: null, description: null, bottomSection: null, bottomContent: null, placeholderCards: null };
  obj = { width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_MUTED, borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl, overflow: "hidden" };
  obj[0] = obj;
  obj = { width: "100%", minHeight: 296, justifyContent: "flex-end", overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
  obj[1] = obj;
  obj[2] = { borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl };
  obj1 = { borderBottomLeftRadius: ThemesDefault.radii.xxl, borderBottomRightRadius: ThemesDefault.radii.xxl };
  obj[3] = { position: "absolute", top: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_12, zIndex: 1, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
  const obj2 = { position: "absolute", top: ThemesDefault.space.PX_12, left: ThemesDefault.space.PX_12, zIndex: 1, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_BACKGROUND_DEFAULT, borderRadius: ThemesDefault.radii.round, paddingHorizontal: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_4 };
  obj[4] = { color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  const obj3 = { color: ThemesDefault.colors.CONTROL_OVERLAY_PRIMARY_TEXT_DEFAULT };
  obj[5] = { paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20, gap: ThemesDefault.space.PX_8 };
  obj[6] = { marginBottom: 16 };
  const obj4 = { paddingBottom: ThemesDefault.space.PX_24, paddingHorizontal: ThemesDefault.space.PX_20, gap: ThemesDefault.space.PX_8 };
  obj[7] = { width: "100%", overflow: "hidden", borderBottomLeftRadius: ThemesDefault.radii.xl, borderBottomRightRadius: ThemesDefault.radii.xl };
  const obj5 = { width: "100%", overflow: "hidden", borderBottomLeftRadius: ThemesDefault.radii.xl, borderBottomRightRadius: ThemesDefault.radii.xl };
  obj[8] = { paddingBottom: 24, paddingHorizontal: 20, gap: ThemesDefault.space.PX_12 };
  const obj6 = { paddingBottom: 24, paddingHorizontal: 20, gap: ThemesDefault.space.PX_12 };
  obj[9] = { alignSelf: "stretch", height: 160, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
  return obj;
});
const memoResult = importAllResult.memo(function BountiesCtaHeader(isEmptyOrCompleted) {
  const _require = isEmptyOrCompleted;
  const tmp2 = containerRef(14530)();
  containerRef = tmp2.containerRef;
  isEmptyOrCompleted = isEmptyOrCompleted.isEmptyOrCompleted;
  let tmp3 = undefined !== isEmptyOrCompleted;
  if (tmp3) {
    tmp3 = isEmptyOrCompleted;
  }
  if (!tmp3) {
    let obj = useTrackQuestEventWithImpression;
    const bountyCarouselEmptyStateAnalytics = obj.useBountyCarouselEmptyStateAnalytics(null);
    obj = { theme: null, children: null };
    obj[0] = require("../../../../discord_common/js/packages/design/shared/ThemeTypes.tsx").ThemeTypes.DARKER;
    if (tmp3) {
      obj = {};
      let merged = Object.assign(isEmptyOrCompleted);
      obj.containerRef = containerRef;
      let tmp9Result = tmp9(BountiesCtaHeaderInner, obj);
    } else {
      obj1 = { adContentId: null, adCreativeType: null, questContent: null, questContentPosition: 0, overrideVisibility: null, sourceQuestContent: null, children: null };
      obj1[0] = closure_8;
      obj1[1] = tmp7(7321).AdCreativeType.BOUNTY;
      obj1[2] = tmp7(5271).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE;
      obj1[4] = tmp2.isInView;
      obj1[5] = tmp7(5271).QuestContent.QUEST_HOME_ENTRYPOINT_MOBILE;
      obj1[6] = function children() {
        const obj = {};
        const merged = Object.assign(closure_0);
        obj.containerRef = containerRef;
        return closure_1_10(closure_1_14, obj);
      };
      tmp9Result = tmp9(tmp7(11336).QuestContentImpressionTrackerNative, obj1);
    }
    obj[1] = tmp9Result;
    return closure_10(require("../../../../discord_common/js/packages/design/native.tsx").ThemeContextProvider, obj);
  } else if (0 === isEmptyOrCompleted.bounties.length) {
    let COMPLETED = constants.EMPTY;
  } else {
    COMPLETED = constants.COMPLETED;
  }
});
let result = require("set").fileFinishedImporting("modules/quests/native/BountiesCtaHeader.tsx");

export default memoResult;