// === Module 16501: GamingLikeEntryRow ===

// Module 16501 (GamingLikeEntryRow)
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8130 */;
import utils from "utils" /* 8135 */;
import ICYMIActionCreatorsDefault from "ICYMIActionCreators" /* 8351 */;
import BadgesAll from "Badges" /* 13008 */;
import TrendingType from "TrendingType" /* 13013 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let obj = { Badge: BadgesAll.NewGameBadge, predicate: fn(8135).isEntryNew };
let items = [obj, , , , ];
obj = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    let num = utils.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  }
};
items[1] = obj;
obj = {
  Badge: BadgesAll.TrendingBadge,
  predicate(entry) {
    const trendingType = utils.getTrendingType(entry);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  }
};
items[2] = obj;
items[3] = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate() {
    return true;
  }
};
let obj1 = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate() {
    return true;
  }
};
items[4] = {
  Badge: BadgesAll.MarathonBadge,
  predicate(entry) {
    return true === utils.isEntryMarathon(entry);
  }
};
const createICYMIStyles = fn(16452);
let closure_11 = createICYMIStyles.createICYMIStyles((gap) => {
  let obj = { card: null, cardInnerContainer: null, image: null, gameName: null, badges: null };
  obj = { flexDirection: "row", gap: gap.margin, alignItems: "center", padding: gap.margin, marginLeft: gap.inset, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.card = obj;
  obj.cardInnerContainer = { overflow: "hidden", flex: 1 };
  const size = { width: 72, height: 72, borderRadius: nativeDefault.radii.sm };
  obj.image = size;
  obj = { maxWidth: 275, color: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY };
  obj.gameName = obj;
  obj.badges = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8, flexWrap: "wrap", alignItems: "center", marginTop: 6 };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx");

export default function GamingLikeEntryRow(content) {
  content = content.content;
  const renderForScreenshot = content.renderForScreenshot;
  closure_2 = undefined;
  let openReplyActionSheet;
  const tmp = closure_11();
  const application_id = content.extra.application_id;
  const author_id = content.author_id;
  let obj = content(openReplyActionSheet[9]);
  items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(author_id));
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
  obj.source = content(openReplyActionSheet[15]).GameProfileSources.ActivityCard;
  obj.sourceUserId = author_id;
  const tmp5ResultResult = tmp5Result(obj);
  closure_2 = tmp5ResultResult;
  const items1 = [tmp5ResultResult];
  const callback = noop.useCallback(() => {
    if (null != closure_2) {
      tmp();
    }
  }, items1);
  const items2 = [content];
  const memo = noop.useMemo(() => {
    if (content.content_type === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME) {
      let obj = { entry: content };
      items = [React5(BadgesAll.TopGameBadge, obj, "topgame")];
      let found = items;
    } else {
      const mapped = items.map((Badge) => {
        Badge = Badge.Badge;
        let tmp2 = null;
        if (Badge.predicate(content)) {
          const obj = { entry: content };
          tmp2 = closure_2_7(Badge, obj, Badge.name);
        }
        return tmp2;
      });
      const _Boolean = Boolean;
      found = mapped.filter(Boolean);
    }
    return found;
  }, items2);
  const items3 = [content];
  const callback1 = noop.useCallback(() => {
    asyncRequireImpl(16502, dependencyMap.paths).then((GameShareModal) => {
      GameShareModal = GameShareModal.GameShareModal;
      if (null != GameShareModal) {
        let obj = author_id(openReplyActionSheet[19]);
        obj.itemInteracted(content.id, "hotwheels_gaming_activity", "press_forward");
        obj = { itemId: content.id, itemType: "hotwheels_gaming_activity", actionParameters: { actionGestureType: "press", actionTargetElement: "forward_button", actionIntentType: "share", actionDestinationType: null } };
        author_id(openReplyActionSheet[19]).feedItemActioned(obj);
        const obj4 = author_id(openReplyActionSheet[20]);
        obj = { content };
        obj4.pushLazy(() => Promise.resolve(GameShareModal), obj, "GameShareModal", { presentation: "modal" });
        const obj2 = author_id(openReplyActionSheet[19]);
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
        const element = { contentId: null, userId: null, type: "hotwheels_gaming_activity", renderForScreenshot: null, onPress: null, title: null, subtitle: null, children: null };
        ({ id: obj7.contentId, author_id: obj7.userId } = content);
        element.renderForScreenshot = renderForScreenshot;
        element.onPress = tmp14;
        tmp5Result = tmp5(tmp3[23]);
        let tmp20;
        if (null != displayNameStylesFont) {
          obj = { fontFamily: displayNameStylesFont };
          tmp20 = obj;
        }
        obj1 = { children: null };
        obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp20, children: null };
        isEntryActiveResult = tmp2Result.isEntryActive(content);
        obj2.children = tmp5(tmp3[25]).getName(stateFromStores);
        const items5 = [closure_7(tmp2(tmp3[24]).Text, obj2), ];
        const obj3 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
        const tmp5Result1 = tmp5(tmp3[25]);
        const tmp2Result1 = tmp2(tmp3[26]);
        obj3.children = tmp2Result1.getRelativeTimestamp(tmp5(tmp3[27]).extractTimestamp(content.id));
        items5[1] = closure_7(tmp2(tmp3[24]).Text, obj3);
        obj1.children = items5;
        element.title = closure_9(closure_8, obj1);
        const tmp5Result2 = tmp5(tmp3[27]);
        let str = "text-default";
        if (tmp2Result2.isEntryActive(content)) {
          str = "status-positive";
        }
        let obj4 = { variant: "text-sm/normal", lineClamp: 1, color: str, children: stringResult };
        element.subtitle = closure_7(tmp2(tmp3[24]).Text, obj4);
        const items6 = [tmp.card, ];
        let tmp22 = null;
        if (null != primaryColor) {
          const obj5 = { backgroundColor: null };
          let obj17 = tmp5(tmp3[28])(primaryColor);
          obj5.backgroundColor = obj17.alpha(0.5).hex();
          tmp22 = obj5;
          const alphaResult = obj17.alpha(0.5);
        }
        const obj6 = { style: null, children: null };
        items6[1] = tmp22;
        obj6.style = items6;
        const obj7 = { onPress: callback, disabled: null == tmp5ResultResult, accessibilityRole: "button", accessibilityLabel: null, children: null };
        const intl = tmp2(tmp3[22]).intl;
        const obj8 = { gameName: getOrFetchApplication.name };
        obj7.accessibilityLabel = intl.formatToPlainString(tmp2(tmp3[22]).t["9sZWVp"], obj8);
        const obj9 = { source: null, style: null };
        const obj10 = { uri: iconURL1 };
        obj9.source = obj10;
        obj9.style = tmp.image;
        obj7.children = closure_7(tmp5(tmp3[30]), obj9);
        const items7 = [closure_7(tmp2(tmp3[29]).PressableOpacity, obj7), ];
        const obj11 = { style: tmp.cardInnerContainer, children: null };
        const obj12 = { onPress: callback, disabled: null == tmp5ResultResult, accessibilityRole: "button", accessibilityLabel: null, children: null };
        const intl2 = tmp2(tmp3[22]).intl;
        const obj13 = { gameName: getOrFetchApplication.name };
        obj12.accessibilityLabel = intl2.formatToPlainString(tmp2(tmp3[22]).t["9sZWVp"], obj13);
        const obj14 = { variant: "text-md/semibold", style: tmp.gameName, children: getOrFetchApplication.name };
        obj12.children = closure_7(tmp2(tmp3[24]).Text, obj14);
        const items8 = [closure_7(tmp2(tmp3[29]).PressableOpacity, obj12), ];
        let tmp16Result = null != memo;
        if (tmp16Result) {
          tmp16Result = memo.length > 0;
        }
        if (tmp16Result) {
          const obj15 = { style: tmp.badges, children: memo };
          tmp16Result = closure_7(View, obj15);
        }
        items8[1] = tmp16Result;
        obj11.children = items8;
        items7[1] = closure_9(View, obj11);
        obj6.children = items7;
        const items9 = [closure_9(View, obj6), ];
        tmp16Result = null;
        if (!renderForScreenshot) {
          const obj16 = { reactText: null, onReply: null, onForward: null };
          const intl3 = tmp2(tmp3[22]).intl;
          obj17 = { username: tmp5(tmp3[25]).getName(stateFromStores) };
          obj16.reactText = intl3.formatToPlainString(tmp2(tmp3[22]).t.ghWi8V, obj17);
          obj16.onReply = openReplyActionSheet;
          obj16.onForward = callback1;
          tmp16Result = closure_7(tmp2(tmp3[31]).ContentInventoryReplyRow, obj16);
          const tmp5Result3 = tmp5(tmp3[25]);
        }
        const obj18 = { children: null };
        items9[1] = tmp16Result;
        obj18.children = items9;
        element.children = closure_9(View, obj18);
        return closure_7(tmp5Result, element);
      }
    }
  }
  return null;
};