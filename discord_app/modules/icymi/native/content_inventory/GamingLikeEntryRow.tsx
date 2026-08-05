// discord_app/modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx
import ICYMIActionCreators from "../../ICYMIActionCreators.tsx";
import { View } from "Screenshot";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "useReplyActions";
import createICYMIStyles from "createICYMIStyles";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { TrendingType } from "../../../../../discord_common/js/shared/shared-constants/TrendingType.tsx";
import { calculateTimestampDurations } from "../../../content_inventory/utils.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { Badge: require("ActiveTimestamp").NewGameBadge, predicate: require("calculateTimestampDurations").isEntryNew };
let items = [obj, , , , ];
obj = {
  Badge: require("ActiveTimestamp").StreakBadge,
  predicate(entry) {
    let num = calculateTimestampDurations /* calculateTimestampDurations */.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  }
};
items[1] = obj;
obj = {
  Badge: require("ActiveTimestamp").TrendingBadge,
  predicate(entry) {
    const trendingType = calculateTimestampDurations /* calculateTimestampDurations */.getTrendingType(entry);
    const obj = calculateTimestampDurations /* calculateTimestampDurations */;
    const tmp = require;
    return null != trendingType && trendingType !== TrendingType /* TrendingType */.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  }
};
items[2] = obj;
items[3] = {
  Badge: require("ActiveTimestamp").ResurrectedBadge,
  predicate() {
    return true;
  }
};
let obj1 = {
  Badge: require("ActiveTimestamp").ResurrectedBadge,
  predicate() {
    return true;
  }
};
items[4] = {
  Badge: require("ActiveTimestamp").MarathonBadge,
  predicate(entry) {
    return true === calculateTimestampDurations /* calculateTimestampDurations */.isEntryMarathon(entry);
  }
};
let closure_11 = createICYMIStyles.createICYMIStyles((gap) => {
  let obj = { card: null, cardInnerContainer: null, image: null, gameName: null, badges: null };
  obj = { flexDirection: "row", gap: gap.margin, alignItems: "center", padding: gap.margin, marginLeft: gap.inset, borderRadius: Themes.radii.lg, backgroundColor: Themes.colors.BACKGROUND_SURFACE_HIGH };
  const merged = Object.assign(Themes.shadows.SHADOW_HIGH);
  obj[0] = obj;
  obj[1] = { overflow: "hidden", flex: 1 };
  obj = { width: 72, height: 72, borderRadius: Themes.radii.sm };
  obj[2] = obj;
  obj[3] = { maxWidth: 275, color: Themes.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY };
  const obj1 = { maxWidth: 275, color: Themes.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY };
  obj[4] = { display: "flex", flexDirection: "row", gap: Themes.space.PX_8, flexWrap: "wrap", alignItems: "center", marginTop: 6 };
  return obj;
});
let obj2 = {
  Badge: require("ActiveTimestamp").MarathonBadge,
  predicate(entry) {
    return true === calculateTimestampDurations /* calculateTimestampDurations */.isEntryMarathon(entry);
  }
};
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx");

export default function GamingLikeEntryRow(content) {
  content = content.content;
  const renderForScreenshot = content.renderForScreenshot;
  let author_id;
  let c2;
  let openReplyActionSheet;
  const tmp = callback();
  const application_id = content.extra.application_id;
  author_id = content.author_id;
  let obj = content(openReplyActionSheet[9]);
  let items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getUser(author_id));
  let obj1 = content(openReplyActionSheet[11]);
  const displayNameStylesFont = obj1.useDisplayNameStylesFont({ displayNameStyles: author_id(openReplyActionSheet[10])({ userId: author_id }) });
  let obj2 = content(openReplyActionSheet[12]);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(application_id);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(72);
  }
  const primaryColor = tmp5(tmp3[13])(iconURL).primaryColor;
  if (getOrFetchApplication != null) {
    const iconURL1 = getOrFetchApplication.getIconURL(240);
  }
  obj = { location: "ICYMI Activity Card", applicationId: application_id, source: null, trackEntryPointImpression: true, sourceUserId: null };
  let tmp5Result = tmp5(tmp3[14]);
  obj[2] = content(openReplyActionSheet[15]).GameProfileSources.ActivityCard;
  obj[4] = author_id;
  const tmp5ResultResult = tmp5Result(obj);
  c2 = tmp5ResultResult;
  const items1 = [tmp5ResultResult];
  callback = React.useCallback(() => {
    if (null != c2) {
      tmp();
    }
  }, items1);
  const items2 = [content];
  const memo = React.useMemo(() => {
    if (content.content_type === content(openReplyActionSheet[16]).ContentInventoryEntryType.TOP_GAME) {
      let obj = { entry: null };
      obj[0] = content;
      const items = [outer1_7(_undefined(openReplyActionSheet[4]).TopGameBadge, obj, "topgame")];
      let found = items;
    } else {
      const mapped = outer1_10.map((Badge) => {
        Badge = Badge.Badge;
        let tmp2 = null;
        if (Badge.predicate(closure_0)) {
          const obj = { entry: null };
          obj[0] = closure_0;
          tmp2 = outer1_7(Badge, obj, Badge.name);
        }
        return tmp2;
      });
      const _Boolean = Boolean;
      found = mapped.filter(Boolean);
    }
    return found;
  }, items2);
  const items3 = [content];
  const callback1 = React.useCallback(() => {
    content(openReplyActionSheet[18])(openReplyActionSheet[17], openReplyActionSheet.paths).then((GameShareModal) => {
      GameShareModal = GameShareModal.GameShareModal;
      if (null != GameShareModal) {
        let obj = outer1_1(outer1_3[19]);
        obj.itemInteracted(GameShareModal.id, "hotwheels_gaming_activity", "press_forward");
        obj = { itemId: null, itemType: "hotwheels_gaming_activity", actionParameters: null };
        obj[0] = GameShareModal.id;
        obj[2] = { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: null };
        outer1_1(outer1_3[19]).feedItemActioned(obj);
        const obj4 = outer1_1(outer1_3[20]);
        obj = { content: null };
        obj[0] = GameShareModal;
        obj4.pushLazy(() => Promise.resolve(GameShareModal), obj, "GameShareModal", { presentation: "modal" });
        const obj2 = outer1_1(outer1_3[19]);
      }
    });
  }, items3);
  let tmp2Result = tmp2(tmp3[21]);
  openReplyActionSheet = tmp2Result.useReplyActions({ content }).openReplyActionSheet;
  const items4 = [content, openReplyActionSheet];
  if (null != getOrFetchApplication) {
    if (null != stateFromStores) {
      if (null != iconURL1) {
        tmp2Result = tmp2(tmp3[5]);
        const intl4 = tmp2(tmp3[22]).intl;
        const string = intl4.string;
        const t = tmp2(tmp3[22]).t;
        if (isEntryActiveResult) {
          let stringResult = string(t.Gk1P8Z);
        } else {
          stringResult = string(t.ktOTRQ);
        }
        obj = { contentId: null, userId: null, type: "hotwheels_gaming_activity", renderForScreenshot: null, onPress: null, title: null, subtitle: null, children: null };
        ({ id: obj7[0], author_id: obj7[1] } = content);
        obj[3] = renderForScreenshot;
        obj[4] = tmp14;
        tmp5Result = tmp5(tmp3[23]);
        let tmp20;
        if (null != displayNameStylesFont) {
          obj1 = { fontFamily: null };
          obj1[0] = displayNameStylesFont;
          tmp20 = obj1;
        }
        obj2 = { children: null };
        const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
        obj3[2] = tmp20;
        isEntryActiveResult = tmp2Result.isEntryActive(content);
        const tmp19 = closure_8;
        obj3[3] = tmp5(tmp3[25]).getName(stateFromStores);
        const items5 = [closure_7(tmp2(tmp3[24]).Text, obj3), ];
        let obj4 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
        const tmp5Result1 = tmp5(tmp3[25]);
        const tmp2Result1 = tmp2(tmp3[26]);
        obj4[3] = tmp2Result1.getRelativeTimestamp(tmp5(tmp3[27]).extractTimestamp(content.id));
        items5[1] = closure_7(tmp2(tmp3[24]).Text, obj4);
        obj2[0] = items5;
        obj[5] = closure_9(tmp19, obj2);
        const tmp5Result2 = tmp5(tmp3[27]);
        let str = "text-default";
        if (tmp2Result2.isEntryActive(content)) {
          str = "status-positive";
        }
        const obj5 = { variant: "text-sm/normal", lineClamp: 1, color: null, children: null };
        obj5[2] = str;
        obj5[3] = stringResult;
        obj[6] = closure_7(tmp2(tmp3[24]).Text, obj5);
        const items6 = [tmp.card, ];
        let tmp22 = null;
        if (null != primaryColor) {
          const obj6 = { backgroundColor: null };
          let obj17 = tmp5(tmp3[28])(primaryColor);
          obj6[0] = obj17.alpha(0.5).hex();
          tmp22 = obj6;
          const alphaResult = obj17.alpha(0.5);
        }
        const obj7 = { style: null, children: null };
        items6[1] = tmp22;
        obj7[0] = items6;
        const obj8 = { onPress: null, disabled: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
        obj8[0] = callback;
        obj8[1] = null == tmp5ResultResult;
        const intl = tmp2(tmp3[22]).intl;
        const obj9 = { gameName: null };
        obj9[0] = getOrFetchApplication.name;
        obj8[3] = intl.formatToPlainString(tmp2(tmp3[22]).t["9sZWVp"], obj9);
        const obj10 = { source: null, style: null };
        const obj11 = { uri: null };
        obj11[0] = iconURL1;
        obj10[0] = obj11;
        obj10[1] = tmp.image;
        obj8[4] = closure_7(tmp5(tmp3[30]), obj10);
        const items7 = [closure_7(tmp2(tmp3[29]).PressableOpacity, obj8), ];
        const obj12 = { style: null, children: null };
        obj12[0] = tmp.cardInnerContainer;
        const obj13 = { onPress: null, disabled: null, accessibilityRole: "button", accessibilityLabel: null, children: null };
        obj13[0] = callback;
        obj13[1] = null == tmp5ResultResult;
        const intl2 = tmp2(tmp3[22]).intl;
        const obj14 = { gameName: null };
        obj14[0] = getOrFetchApplication.name;
        obj13[3] = intl2.formatToPlainString(tmp2(tmp3[22]).t["9sZWVp"], obj14);
        const obj15 = { variant: "text-md/semibold", style: null, children: null };
        obj15[1] = tmp.gameName;
        obj15[2] = getOrFetchApplication.name;
        obj13[4] = closure_7(tmp2(tmp3[24]).Text, obj15);
        const items8 = [closure_7(tmp2(tmp3[29]).PressableOpacity, obj13), ];
        let tmp16Result = null != memo;
        if (tmp16Result) {
          tmp16Result = memo.length > 0;
        }
        if (tmp16Result) {
          const obj16 = { style: null, children: null };
          obj16[0] = tmp.badges;
          obj16[1] = memo;
          tmp16Result = tmp16(tmp21, obj16);
        }
        items8[1] = tmp16Result;
        obj12[1] = items8;
        items7[1] = closure_9(View, obj12);
        obj7[1] = items7;
        const items9 = [closure_9(View, obj7), ];
        tmp16Result = null;
        if (!renderForScreenshot) {
          obj17 = { reactText: null, onReply: null, onForward: null };
          const intl3 = tmp2(tmp3[22]).intl;
          const obj18 = { username: null };
          obj18[0] = tmp5(tmp3[25]).getName(stateFromStores);
          obj17[0] = intl3.formatToPlainString(tmp2(tmp3[22]).t.ghWi8V, obj18);
          obj17[1] = openReplyActionSheet;
          obj17[2] = callback1;
          tmp16Result = tmp16(tmp2(tmp3[31]).ContentInventoryReplyRow, obj17);
          const tmp5Result3 = tmp5(tmp3[25]);
        }
        const obj19 = { children: null };
        items9[1] = tmp16Result;
        obj19[0] = items9;
        obj[7] = closure_9(View, obj19);
        return closure_7(tmp5Result, obj);
      }
    }
  }
  return null;
};