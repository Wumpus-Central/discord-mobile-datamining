// discord_app/modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ContentInventoryEntryType from "../../../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import utils from "../../../content_inventory/utils.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import BadgesAll from "Badges.tsx";
import TrendingType from "../../../../../discord_common/js/shared/shared-constants/TrendingType.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
let items = [{ Badge: BadgesAll.NewGameBadge, predicate: fn(8365).isEntryNew }, , , ,];
let obj = { Badge: BadgesAll.NewGameBadge, predicate: fn(8365).isEntryNew };
items[1] = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    let num = utils.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  },
};
let obj2 = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    let num = utils.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  },
};
items[2] = {
  Badge: BadgesAll.TrendingBadge,
  predicate(entry) {
    const trendingType = utils.getTrendingType(entry);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  },
};
let obj3 = {
  Badge: BadgesAll.TrendingBadge,
  predicate(entry) {
    const trendingType = utils.getTrendingType(entry);
    return null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
  },
};
items[3] = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate() {
    return true;
  },
};
let obj4 = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate() {
    return true;
  },
};
items[4] = {
  Badge: BadgesAll.MarathonBadge,
  predicate(entry) {
    return true === utils.isEntryMarathon(entry);
  },
};
const createICYMIStyles = fn(16709);
let closure_11 = createICYMIStyles.createICYMIStyles((gap) => {
  const obj = { card: null, cardInnerContainer: null, image: null, gameName: null, badges: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  obj.card = {
    flexDirection: "row",
    gap: gap.margin,
    alignItems: "center",
    padding: gap.margin,
    marginLeft: gap.inset,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.cardInnerContainer = { overflow: "hidden", flex: 1 };
  const size = { width: 72, height: 72, borderRadius: nativeDefault.radii.sm };
  obj.image = size;
  const obj2 = {
    flexDirection: "row",
    gap: gap.margin,
    alignItems: "center",
    padding: gap.margin,
    marginLeft: gap.inset,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  obj.gameName = { maxWidth: 275, color: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY };
  const obj3 = { maxWidth: 275, color: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY };
  obj.badges = {
    display: "flex",
    flexDirection: "row",
    gap: nativeDefault.space.PX_8,
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 6,
  };
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
  items = [UserStore];
  const stateFromStores = content(openReplyActionSheet[9]).useStateFromStores(items, () =>
    UserStore.getUser(author_id),
  );
  let obj = content(openReplyActionSheet[9]);
  const tmp6 = author_id(openReplyActionSheet[10])({ userId: author_id });
  const displayNameStylesFont = content(openReplyActionSheet[11]).useDisplayNameStylesFont({ displayNameStyles: tmp6 });
  let obj2 = content(openReplyActionSheet[11]);
  const getOrFetchApplication = content(openReplyActionSheet[12]).useGetOrFetchApplication(application_id);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(72);
  }
  const primaryColor = tmp5(tmp3[13])(iconURL).primaryColor;
  if (getOrFetchApplication != null) {
    const iconURL1 = getOrFetchApplication.getIconURL(240);
  }
  let obj4 = {
    location: "ICYMI Activity Card",
    applicationId: application_id,
    source: null,
    trackEntryPointImpression: true,
    sourceUserId: null,
  };
  let obj3 = content(openReplyActionSheet[12]);
  obj4.source = content(openReplyActionSheet[15]).GameProfileSources.ActivityCard;
  obj4.sourceUserId = author_id;
  const tmp5ResultResult = author_id(openReplyActionSheet[14])(obj4);
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
    asyncRequireImpl(16759, dependencyMap.paths).then((GameShareModal) => {
      GameShareModal = GameShareModal.GameShareModal;
      if (null != GameShareModal) {
        author_id(openReplyActionSheet[19]).itemInteracted(content.id, "hotwheels_gaming_activity", "press_forward");
        const obj = author_id(openReplyActionSheet[19]);
        const obj3 = {
          itemId: content.id,
          itemType: "hotwheels_gaming_activity",
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "forward_button",
            actionIntentType: "share",
            actionDestinationType: null,
          },
        };
        author_id(openReplyActionSheet[19]).feedItemActioned(obj3);
        const obj4 = author_id(openReplyActionSheet[20]);
        const obj5 = { content };
        obj4.pushLazy(() => Promise.resolve(GameShareModal), obj5, "GameShareModal", { presentation: "modal" });
        const obj2 = author_id(openReplyActionSheet[19]);
      }
    });
  }, items3);
  const tmp5Result = author_id(openReplyActionSheet[14]);
  openReplyActionSheet = content(openReplyActionSheet[21]).useReplyActions({ content }).openReplyActionSheet;
  const items4 = [content, openReplyActionSheet];
  if (null != getOrFetchApplication) {
    if (null != stateFromStores) {
      if (null != iconURL1) {
        const tmp2Result4 = tmp2(tmp3[5]);
        const intl4 = tmp2(tmp3[22]).intl;
        const string = intl4.string;
        const t = tmp2(tmp3[22]).t;
        if (isEntryActiveResult) {
          let stringResult = string(t.Gk1P8Z);
        } else {
          stringResult = string(t.ktOTRQ);
        }
        const element = {
          contentId: null,
          userId: null,
          type: "hotwheels_gaming_activity",
          renderForScreenshot: null,
          onPress: null,
          title: null,
          subtitle: null,
          children: null,
        };
        ({ id: obj7.contentId, author_id: obj7.userId } = content);
        element.renderForScreenshot = renderForScreenshot;
        element.onPress = tmp14;
        isEntryActiveResult = tmp2(tmp3[5]).isEntryActive(content);
        let tmp20;
        if (null != displayNameStylesFont) {
          let obj5 = { fontFamily: displayNameStylesFont };
          tmp20 = obj5;
        }
        const obj6 = { children: null };
        const obj8 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          style: tmp20,
          children: null,
        };
        const tmp5Result5 = tmp5(tmp3[23]);
        obj8.children = tmp5(tmp3[25]).getName(stateFromStores);
        const items5 = [closure_7(tmp2(tmp3[24]).Text, obj8)];
        const obj9 = { lineClamp: 1, variant: "text-xs/normal", color: "text-muted", children: null };
        const tmp5Result6 = tmp5(tmp3[25]);
        const tmp2Result5 = tmp2(tmp3[26]);
        obj9.children = tmp2Result5.getRelativeTimestamp(tmp5(tmp3[27]).extractTimestamp(content.id));
        items5[1] = closure_7(tmp2(tmp3[24]).Text, obj9);
        obj6.children = items5;
        element.title = closure_9(closure_8, obj6);
        const tmp5Result7 = tmp5(tmp3[27]);
        let str = "text-default";
        if (tmp2Result6.isEntryActive(content)) {
          str = "status-positive";
        }
        const obj10 = { variant: "text-sm/normal", lineClamp: 1, color: str, children: stringResult };
        element.subtitle = closure_7(tmp2(tmp3[24]).Text, obj10);
        const items6 = [tmp.card];
        let tmp22 = null;
        if (null != primaryColor) {
          const obj11 = { backgroundColor: null };
          const obj18 = tmp5(tmp3[28])(primaryColor);
          obj11.backgroundColor = tmp5(tmp3[28])(primaryColor).alpha(0.5).hex();
          tmp22 = obj11;
          const alphaResult = tmp5(tmp3[28])(primaryColor).alpha(0.5);
        }
        const obj12 = { style: null, children: null };
        items6[1] = tmp22;
        obj12.style = items6;
        const obj13 = {
          onPress: callback,
          disabled: null == tmp5ResultResult,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = tmp2(tmp3[22]).intl;
        const obj14 = { gameName: getOrFetchApplication.name };
        obj13.accessibilityLabel = intl.formatToPlainString(tmp2(tmp3[22]).t["9sZWVp"], obj14);
        const obj15 = { source: null, style: null };
        const obj16 = { uri: iconURL1 };
        obj15.source = obj16;
        obj15.style = tmp.image;
        obj13.children = closure_7(tmp5(tmp3[30]), obj15);
        const items7 = [closure_7(tmp2(tmp3[29]).PressableOpacity, obj13)];
        const obj17 = { style: tmp.cardInnerContainer, children: null };
        const obj19 = {
          onPress: callback,
          disabled: null == tmp5ResultResult,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl2 = tmp2(tmp3[22]).intl;
        const obj20 = { gameName: getOrFetchApplication.name };
        obj19.accessibilityLabel = intl2.formatToPlainString(tmp2(tmp3[22]).t["9sZWVp"], obj20);
        const obj21 = { variant: "text-md/semibold", style: tmp.gameName, children: getOrFetchApplication.name };
        obj19.children = closure_7(tmp2(tmp3[24]).Text, obj21);
        const items8 = [closure_7(tmp2(tmp3[29]).PressableOpacity, obj19)];
        let tmp16Result = null != memo;
        if (tmp16Result) {
          tmp16Result = memo.length > 0;
        }
        if (tmp16Result) {
          const obj22 = { style: tmp.badges, children: memo };
          tmp16Result = closure_7(View, obj22);
        }
        items8[1] = tmp16Result;
        obj17.children = items8;
        items7[1] = closure_9(View, obj17);
        obj12.children = items7;
        const items9 = [closure_9(View, obj12)];
        let tmp16Result2 = null;
        if (!renderForScreenshot) {
          const obj23 = { reactText: null, onReply: null, onForward: null };
          const intl3 = tmp2(tmp3[22]).intl;
          const obj24 = { username: tmp5(tmp3[25]).getName(stateFromStores) };
          obj23.reactText = intl3.formatToPlainString(tmp2(tmp3[22]).t.ghWi8V, obj24);
          obj23.onReply = openReplyActionSheet;
          obj23.onForward = callback1;
          tmp16Result2 = closure_7(tmp2(tmp3[31]).ContentInventoryReplyRow, obj23);
          const tmp5Result8 = tmp5(tmp3[25]);
        }
        const obj25 = { children: null };
        items9[1] = tmp16Result2;
        obj25.children = items9;
        element.children = closure_9(View, obj25);
        return closure_7(tmp5Result5, element);
      }
    }
  }
  return null;
}
