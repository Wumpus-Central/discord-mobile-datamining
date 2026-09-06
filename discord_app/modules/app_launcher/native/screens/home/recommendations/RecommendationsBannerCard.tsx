// === Module 12091: RecommendationsBannerCard ===

// Module 12091 (RecommendationsBannerCard)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8187 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, banner: null, appDetailsContainer: null, appDetails: null, appIconContainer: null, notifsContainer: null, badge: null, promotedLabelWrapper: null };
createStyles = { borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, width: "100%", overflow: "hidden" };
createStyles.container = createStyles;
createStyles.banner = { width: "100%", height: 106, overflow: "hidden" };
createStyles.appDetailsContainer = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj1 = { padding: nativeDefault.space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles.appDetails = { marginLeft: nativeDefault.space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
createStyles.appIconContainer = { flexShrink: 0 };
const rect = { position: "absolute", display: "flex", gap: nativeDefault.space.PX_4, right: nativeDefault.space.PX_8, top: nativeDefault.space.PX_8, alignItems: "flex-end" };
createStyles.notifsContainer = rect;
createStyles.badge = {};
let obj2 = { marginLeft: nativeDefault.space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
createStyles.promotedLabelWrapper = { paddingVertical: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: nativeDefault.radii.lg };
let closure_8 = createStyles.createStyles(createStyles);
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
    let obj = application(9289);
    showsPromoted = obj.isPromotedApplication(application);
  }
  let obj1 = application(9289);
  const shelfBadgeTypeIfActive = obj1.getShelfBadgeTypeIfActive(application);
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
  let obj2 = AvatarUtilsDefault;
  obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const applicationIconSource = obj2.getApplicationIconSource(obj);
  if (isLandscape) {
    obj = { application, iconSource: applicationIconSource, onPress, isFirstRow: isFirst, isLastRow: isLast };
    let tmp12Result = closure_6(tmp4(12083).BaseAppRow, obj);
  } else {
    const items1 = [tmp.container, , ];
    let num = 8;
    let num2 = 8;
    if (isFirst) {
      num2 = 0;
    }
    obj1 = { marginTop: num2, marginBottom: null };
    if (isLast) {
      num = 0;
    }
    obj2 = { style: null, onPress: null, children: null };
    obj1.marginBottom = num;
    items1[1] = obj1;
    items1[2] = style;
    obj2.style = items1;
    obj2.onPress = onPress;
    const obj3 = { style: tmp.banner, children: null };
    const obj4 = { applicationBot: application.bot, applicationEmbedded: null, applicationId: null, applicationIcon: null, overrideImageUrl: null };
    const tmp10Result = tmp10(12092);
    obj4.applicationEmbedded = tmp4(9289).isEmbeddedApp(application);
    ({ id: obj8.applicationId, icon } = application);
    obj4.applicationIcon = icon;
    obj4.overrideImageUrl = application.overrideImageUrl;
    const items2 = [closure_6(tmp10Result, obj4), ];
    if (showsPromoted) {
      const obj5 = { style: tmp.notifsContainer, children: null };
      const obj6 = { labelType: shelfBadgeTypeIfActive, replacementStyles: tmp.badge };
      const items3 = [tmp14(tmp10(12086), obj6), ];
      if (showsPromoted) {
        const obj7 = { style: tmp.promotedLabelWrapper, children: null };
        const obj8 = { variant: "text-xxs/medium", color: "mobile-text-heading-primary", children: null };
        const intl = tmp4(1114).intl;
        obj8.children = intl.string(tmp4(1114).t["/eVltv"]);
        obj7.children = tmp14(tmp4(4556).Text, obj8);
        showsPromoted = tmp14(tmp13, obj7);
      }
      items3[1] = showsPromoted;
      obj5.children = items3;
      tmp12Result = tmp12(tmp13, obj5);
    } else {
      tmp12Result = null;
    }
    items2[1] = tmp12Result;
    obj3.children = items2;
    const items4 = [closure_7(View, obj3), ];
    const obj9 = { style: tmp.appDetailsContainer, children: null };
    let tmp14Result = null != applicationIconSource;
    if (tmp14Result) {
      const obj10 = { iconSource: applicationIconSource, iconSize: 36, wrapperStyle: tmp.appIconContainer };
      tmp14Result = tmp14(tmp10(12056), obj10);
    }
    const items5 = [tmp14Result, , ];
    const obj11 = { style: tmp.appDetails, children: null };
    const obj12 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: application.name };
    const items6 = [closure_6(tmp4(4556).Text, obj12), ];
    const obj13 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: application.description };
    items6[1] = closure_6(tmp4(4556).Text, obj13);
    obj11.children = items6;
    items5[1] = closure_7(View, obj11);
    items5[2] = closure_6(tmp4(5612).TableRowArrow, {});
    obj9.children = items5;
    items4[1] = closure_7(View, obj9);
    obj2.children = items4;
    tmp12Result = tmp12(tmp4(5123).PressableOpacity, obj2);
    const tmp4Result = tmp4(9289);
  }
  return tmp12Result;
};