// === Module 11573: RecommendationsBannerCard ===

// Module 11573 (RecommendationsBannerCard)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 7632 */;
import EntityBorderAppIconDefault from "EntityBorderAppIcon" /* 11538 */;
import ActivityShelfBadgeDefault from "ActivityShelfBadge" /* 11568 */;
import RecommendationsBannerDefault from "RecommendationsBanner" /* 11574 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, width: "100%", overflow: "hidden" }, banner: { width: "100%", height: 106, overflow: "hidden" }, appDetailsContainer: null, appDetails: null, appIconContainer: null, notifsContainer: null, badge: null, promotedLabelWrapper: null };
const obj3 = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, width: "100%", overflow: "hidden" };
obj2.appDetailsContainer = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
const obj4 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.appDetails = { marginLeft: nativeDefault.space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
obj2.appIconContainer = { flexShrink: 0 };
const rect = { position: "absolute", display: "flex", gap: nativeDefault.space.PX_4, right: nativeDefault.space.PX_8, top: nativeDefault.space.PX_8, alignItems: "flex-end" };
obj2.notifsContainer = rect;
obj2.badge = {};
let obj5 = { marginLeft: nativeDefault.space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
obj2.promotedLabelWrapper = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx");

export default function RecommendationsBannerCard(application) {
  application = application.application;
  ({ onPress, isFirst, isLast, showsPromoted } = application);
  ({ style, isLandscape } = application);
  if (showsPromoted === undefined) {
    showsPromoted = false;
  }
  const tmp = closure_8();
  if (!showsPromoted) {
    showsPromoted = application(8590).isPromotedApplication(application);
    const obj = application(8590);
  }
  const shelfBadgeTypeIfActive = application(8590).getShelfBadgeTypeIfActive(application);
  let bot = application.bot;
  let id;
  if (bot != null) {
    id = bot.id;
  }
  const items = [id];
  const effect = noop.useEffect(() => {
    const bot = application.bot;
    let id;
    if (bot != null) {
      id = bot.id;
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    maybeFetchUserProfileDefault(id);
  }, items);
  const obj2 = application(8590);
  const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true });
  if (isLandscape) {
    const obj5 = { application, iconSource: applicationIconSource, onPress, isFirstRow: isFirst, isLastRow: isLast };
    let tmp12Result2 = closure_6(tmp4(11565).BaseAppRow, obj5);
  } else {
    const items1 = [tmp.container, , ];
    let num = 8;
    let num2 = 8;
    if (isFirst) {
      num2 = 0;
    }
    const obj6 = { marginTop: num2, marginBottom: null };
    if (isLast) {
      num = 0;
    }
    const obj7 = { style: null, onPress: null, children: null };
    obj6.marginBottom = num;
    items1[1] = obj6;
    items1[2] = style;
    obj7.style = items1;
    obj7.onPress = onPress;
    const obj9 = { style: tmp.banner, children: null };
    const obj10 = { applicationBot: application.bot, applicationEmbedded: null, applicationId: null, applicationIcon: null, overrideImageUrl: null };
    const tmp10Result = RecommendationsBannerDefault;
    obj10.applicationEmbedded = tmp4(8590).isEmbeddedApp(application);
    ({ id: obj8.applicationId, icon } = application);
    obj10.applicationIcon = icon;
    obj10.overrideImageUrl = application.overrideImageUrl;
    const items2 = [closure_6(tmp10Result, obj10), ];
    if (showsPromoted) {
      const obj11 = { style: tmp.notifsContainer, children: null };
      const obj12 = { labelType: shelfBadgeTypeIfActive, replacementStyles: tmp.badge };
      const items3 = [closure_6(ActivityShelfBadgeDefault, obj12), ];
      if (showsPromoted) {
        const obj13 = { style: tmp.promotedLabelWrapper, children: null };
        const obj14 = { variant: "text-xxs/medium", color: "mobile-text-heading-primary", children: null };
        const intl = tmp4(1115).intl;
        obj14.children = intl.string(tmp4(1115).t["/eVltv"]);
        obj13.children = closure_6(tmp4(4832).Text, obj14);
        showsPromoted = closure_6(View, obj13);
      }
      items3[1] = showsPromoted;
      obj11.children = items3;
      let tmp12Result = closure_7(View, obj11);
    } else {
      tmp12Result = null;
    }
    items2[1] = tmp12Result;
    obj9.children = items2;
    const items4 = [closure_7(View, obj9), ];
    const obj15 = { style: tmp.appDetailsContainer, children: null };
    let tmp14Result = null != applicationIconSource;
    if (tmp14Result) {
      const obj16 = { iconSource: applicationIconSource, iconSize: 36, wrapperStyle: tmp.appIconContainer };
      tmp14Result = closure_6(EntityBorderAppIconDefault, obj16);
    }
    const items5 = [tmp14Result, , ];
    const obj17 = { style: tmp.appDetails, children: null };
    const obj18 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name };
    const items6 = [closure_6(tmp4(4832).Text, obj18), ];
    const obj19 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: application.description };
    items6[1] = closure_6(tmp4(4832).Text, obj19);
    obj17.children = items6;
    items5[1] = closure_7(View, obj17);
    items5[2] = closure_6(tmp4(5924).TableRowArrow, {});
    obj15.children = items5;
    items4[1] = closure_7(View, obj15);
    obj7.children = items4;
    tmp12Result2 = closure_7(tmp4(5435).PressableOpacity, obj7);
    const tmp4Result = tmp4(8590);
  }
  return tmp12Result2;
};