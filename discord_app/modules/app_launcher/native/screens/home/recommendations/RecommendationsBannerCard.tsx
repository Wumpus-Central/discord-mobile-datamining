// discord_app/modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx
import noop from "noop";
import { View } from "TableRowArrow";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { getAvatarURL } from "../../../../../../utils/AvatarUtils.tsx";

let closure_6;
let error;
const require = arg1;
({ jsx: closure_6, jsxs: error } = jsxProd);
createCacheKey = { container: null, banner: null, appDetailsContainer: null, appDetails: null, appIconContainer: null, notifsContainer: null, badge: null, promotedLabelWrapper: null };
createCacheKey = { borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT, width: "100%", overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "100%", height: 106, overflow: "hidden" };
createCacheKey[2] = { padding: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj1 = { padding: require("Themes").space.PX_16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createCacheKey[3] = { marginLeft: require("Themes").space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
createCacheKey[4] = { flexShrink: 0 };
let obj2 = { marginLeft: require("Themes").space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
createCacheKey[5] = { position: "absolute", display: "flex", gap: require("Themes").space.PX_4, right: require("Themes").space.PX_8, top: require("Themes").space.PX_8, alignItems: "flex-end" };
createCacheKey[6] = {};
let obj3 = { position: "absolute", display: "flex", gap: require("Themes").space.PX_4, right: require("Themes").space.PX_8, top: require("Themes").space.PX_8, alignItems: "flex-end" };
createCacheKey[7] = { paddingVertical: require("Themes").space.PX_4, paddingHorizontal: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.lg };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj4 = { paddingVertical: require("Themes").space.PX_4, paddingHorizontal: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT, borderRadius: require("Themes").radii.lg };
const result = require("ME").fileFinishedImporting("modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx");

export default function RecommendationsBannerCard(application) {
  let icon;
  let isFirst;
  let isLandscape;
  let isLast;
  let onPress;
  let showsPromoted;
  let style;
  application = application.application;
  ({ onPress, isFirst, isLast, showsPromoted } = application);
  ({ style, isLandscape } = application);
  if (showsPromoted === undefined) {
    showsPromoted = false;
  }
  const tmp = createCacheKey();
  if (!showsPromoted) {
    let obj = application(8338);
    showsPromoted = obj.isPromotedApplication(application);
  }
  let obj1 = application(8338);
  const shelfBadgeTypeIfActive = obj1.getShelfBadgeTypeIfActive(application);
  let bot = application.bot;
  let id;
  if (bot != null) {
    id = bot.id;
  }
  const items = [id];
  const effect = React.useEffect(() => {
    const bot = application.bot;
    let id;
    if (bot != null) {
      id = bot.id;
    }
    if (id == null) {
      id = outer1_5;
    }
    outer1_1(outer1_2[7])(id);
  }, items);
  let obj2 = getAvatarURL;
  obj = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
  const applicationIconSource = obj2.getApplicationIconSource(obj);
  if (isLandscape) {
    obj = { application: null, iconSource: null, onPress: null, isFirstRow: null, isLastRow: null };
    obj[0] = application;
    obj[1] = applicationIconSource;
    obj[2] = onPress;
    obj[3] = isFirst;
    obj[4] = isLast;
    let tmp12Result = callback(tmp4(11468).BaseAppRow, obj);
  } else {
    const items1 = [tmp.container, , ];
    let num = 8;
    let num2 = 8;
    if (isFirst) {
      num2 = 0;
    }
    obj1 = { marginTop: null, marginBottom: null };
    obj1[0] = num2;
    if (isLast) {
      num = 0;
    }
    obj2 = { style: null, onPress: null, children: null };
    obj1[1] = num;
    items1[1] = obj1;
    items1[2] = style;
    obj2[0] = items1;
    obj2[1] = onPress;
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.banner;
    const obj4 = { applicationBot: null, applicationEmbedded: null, applicationId: null, applicationIcon: null, overrideImageUrl: null };
    obj4[0] = application.bot;
    const tmp10Result = tmp10(11478);
    obj4[1] = tmp4(8338).isEmbeddedApp(application);
    ({ id: obj8[2], icon } = application);
    obj4[3] = icon;
    obj4[4] = application.overrideImageUrl;
    const items2 = [callback(tmp10Result, obj4), ];
    if (showsPromoted) {
      const obj5 = { style: null, children: null };
      obj5[0] = tmp.notifsContainer;
      const obj6 = { labelType: null, replacementStyles: null };
      obj6[0] = shelfBadgeTypeIfActive;
      obj6[1] = tmp.badge;
      const items3 = [tmp14(tmp10(11471), obj6), ];
      if (showsPromoted) {
        const obj7 = { style: null, children: null };
        obj7[0] = tmp.promotedLabelWrapper;
        const obj8 = { variant: "text-xxs/medium", color: "mobile-text-heading-primary", children: null };
        const intl = tmp4(1236).intl;
        obj8[2] = intl.string(tmp4(1236).t["/eVltv"]);
        obj7[1] = tmp14(tmp4(4299).Text, obj8);
        showsPromoted = tmp14(tmp13, obj7);
      }
      items3[1] = showsPromoted;
      obj5[1] = items3;
      tmp12Result = tmp12(tmp13, obj5);
    } else {
      tmp12Result = null;
    }
    items2[1] = tmp12Result;
    obj3[1] = items2;
    const items4 = [closure_7(View, obj3), ];
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.appDetailsContainer;
    let tmp14Result = null != applicationIconSource;
    if (tmp14Result) {
      const obj10 = { iconSource: null, iconSize: 36, wrapperStyle: null };
      obj10[0] = applicationIconSource;
      obj10[2] = tmp.appIconContainer;
      tmp14Result = tmp14(tmp10(11442), obj10);
    }
    const items5 = [tmp14Result, , ];
    const obj11 = { style: null, children: null };
    obj11[0] = tmp.appDetails;
    const obj12 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
    obj12[3] = application.name;
    const items6 = [callback(tmp4(4299).Text, obj12), ];
    const obj13 = { variant: "text-sm/normal", color: "text-subtle", lineClamp: 1, children: null };
    obj13[3] = application.description;
    items6[1] = callback(tmp4(4299).Text, obj13);
    obj11[1] = items6;
    items5[1] = closure_7(View, obj11);
    items5[2] = callback(tmp4(5381).TableRowArrow, {});
    obj9[1] = items5;
    items4[1] = closure_7(View, obj9);
    obj2[2] = items4;
    tmp12Result = tmp12(tmp4(4846).PressableOpacity, obj2);
    const tmp4Result = tmp4(8338);
  }
  return tmp12Result;
};