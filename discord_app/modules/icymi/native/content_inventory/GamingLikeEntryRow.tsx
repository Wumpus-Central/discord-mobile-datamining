// discord_app/modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ContentInventoryEntryType from "../../../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import utils from "../../../content_inventory/utils.tsx";
import ICYMIActionCreatorsDefault from "../../ICYMIActionCreators.tsx";
import BadgesAll from "Badges.tsx";
import TrendingType from "../../../../../discord_common/js/shared/shared-constants/TrendingType.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createICYMIStyles from "../createICYMIStyles.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let Badge, GameShareModal;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { Badge: BadgesAll.NewGameBadge, predicate: utils.isEntryNew };
let items = [obj, , , ,];
let obj2 = {
  Badge: BadgesAll.StreakBadge,
  predicate(entry) {
    const obj = utils;
    let num = obj.getStreakCount(entry);
    if (num == null) {
      num = 0;
    }
    return num >= 2;
  },
};
items[1] = obj2;
let obj3 = {
  Badge: BadgesAll.TrendingBadge,
  predicate(traits) {
    const obj = utils;
    const trendingType = obj.getTrendingType(traits);
    const tmp4 = null != trendingType && trendingType !== TrendingType.TrendingType.TRENDING_TYPE_UNSPECIFIED;
    return tmp4;
  },
};
items[2] = obj3;
let obj4 = {
  Badge: BadgesAll.ResurrectedBadge,
  predicate() {
    return true;
  },
};
items[3] = obj4;
let obj5 = {
  Badge: BadgesAll.MarathonBadge,
  predicate(entry) {
    const obj = utils;
    return true === obj.isEntryMarathon(entry);
  },
};
items[4] = obj5;
let closure_11 = createICYMIStyles.createICYMIStyles((gap) => {
  let obj2;
  const obj = {
    card: obj2,
    cardInnerContainer: { overflow: "hidden", flex: 1 },
    image: size,
    gameName: { maxWidth: 275, color: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY },
    badges: {
      display: "flex",
      flexDirection: "row",
      gap: nativeDefault.space.PX_8,
      flexWrap: "wrap",
      alignItems: "center",
      marginTop: 6,
    },
  };
  obj2 = {
    flexDirection: "row",
    gap: gap.margin,
    alignItems: "center",
    padding: gap.margin,
    marginLeft: gap.inset,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
  size = { width: 72, height: 72, borderRadius: nativeDefault.radii.sm };
  ({ maxWidth: 275, color: nativeDefault.colors.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY });
  ({
    display: "flex",
    flexDirection: "row",
    gap: nativeDefault.space.PX_8,
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 6,
  });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/GamingLikeEntryRow.tsx");

export default function GamingLikeEntryRow(content) {
  let Text3;
  let alphaResult;
  let formatToPlainString;
  let getRelativeTimestamp;
  let ghWi8V;
  let iconURL1;
  let intl;
  let intl2;
  let items5;
  let items7;
  let items8;
  let obj10;
  let obj14;
  let obj15;
  let obj16;
  let obj20;
  let obj21;
  let obj24;
  let obj25;
  let obj6;
  let tmp5Result6;
  let tmp5Result7;
  let tmp5Result8;
  content = content.content;
  const renderForScreenshot = content.renderForScreenshot;
  let closure_2;
  let openReplyActionSheet;
  const tmp = closure_11();
  const application_id = content.extra.application_id;
  const author_id = content.author_id;
  let tmp2 = content;
  let obj = content(openReplyActionSheet[9]);
  items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(author_id));
  const tmp6 = author_id(openReplyActionSheet[10])({ userId: author_id });
  let obj2 = content(openReplyActionSheet[11]);
  const displayNameStylesFont = obj2.useDisplayNameStylesFont({ displayNameStyles: tmp6 });
  let obj3 = content(openReplyActionSheet[12]);
  const getOrFetchApplication = obj3.useGetOrFetchApplication(application_id);
  let iconURL;
  if (getOrFetchApplication != null) {
    iconURL = getOrFetchApplication.getIconURL(72);
  }
  const primaryColor = tmp5(tmp3[13])(iconURL).primaryColor;
  if (getOrFetchApplication != null) {
    iconURL1 = getOrFetchApplication.getIconURL(240);
  }
  let obj4 = {
    location: "ICYMI Activity Card",
    applicationId: application_id,
    source: tmp2(tmp3[15]).GameProfileSources.ActivityCard,
    trackEntryPointImpression: true,
    sourceUserId: author_id,
  };
  const tmp5Result = author_id(openReplyActionSheet[14]);
  const tmp5ResultResult = tmp5Result(obj4);
  closure_2 = tmp5ResultResult;
  const items1 = [tmp5ResultResult];
  const callback = react.useCallback(() => {
    if (null != closure_2) {
      tmp();
    }
  }, items1);
  const items2 = [content];
  const memo = react.useMemo(() => {
    let found;
    if (content.content_type === ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME) {
      let obj = { entry: content };
      items = [metroImportDefault(BadgesAll.TopGameBadge, obj, "topgame")];
      found = items;
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
  const callback1 = react.useCallback(() => {
    const promise = asyncRequire(16446, dependencyMap.paths);
    promise.then((GameShareModal) => {
      GameShareModal = GameShareModal.GameShareModal;
      if (null != GameShareModal) {
        const obj = author_id(openReplyActionSheet[19]);
        obj.itemInteracted(content.id, "hotwheels_gaming_activity", "press_forward");
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
        const obj2 = author_id(openReplyActionSheet[19]);
        obj2.feedItemActioned(obj3);
        const obj4 = author_id(openReplyActionSheet[20]);
        const obj5 = { content };
        obj4.pushLazy(() => Promise.resolve(GameShareModal), obj5, "GameShareModal", { presentation: "modal" });
      }
    });
  }, items3);
  const tmp2Result = tmp2(openReplyActionSheet[21]);
  openReplyActionSheet = tmp2Result.useReplyActions({ content }).openReplyActionSheet;
  const items4 = [content, openReplyActionSheet];
  if (null != getOrFetchApplication) {
    if (null != stateFromStores) {
      if (null != iconURL1) {
        let stringResult;
        const tmp2Result4 = tmp2(openReplyActionSheet[5]);
        const isEntryActiveResult = tmp2Result4.isEntryActive(content);
        const intl4 = tmp2(tmp3[22]).intl;
        const string = intl4.string;
        const t = tmp2(tmp3[22]).t;
        if (isEntryActiveResult) {
          stringResult = string(t.Gk1P8Z);
        } else {
          stringResult = string(t.ktOTRQ);
        }
        const element = {
          contentId: null,
          userId: null,
          type: "hotwheels_gaming_activity",
          renderForScreenshot,
          onPress: tmp14,
          title: closure_9(closure_8, obj6),
          subtitle: closure_7(Text3, obj10),
          children: closure_9(View, obj25),
        };
        ({ id: obj7.contentId, author_id: obj7.userId } = content);
        let tmp20;
        const tmp5Result5 = author_id(openReplyActionSheet[23]);
        const Text = tmp2(tmp3[24]).Text;
        if (null != displayNameStylesFont) {
          let obj5 = { fontFamily: displayNameStylesFont };
          tmp20 = obj5;
        }
        obj6 = { children: items5 };
        const obj8 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          style: tmp20,
          children: tmp5Result6.getName(stateFromStores),
        };
        tmp5Result6 = author_id(openReplyActionSheet[25]);
        items5 = [closure_7(Text, obj8)];
        const obj9 = {
          lineClamp: 1,
          variant: "text-xs/normal",
          color: "text-muted",
          children: getRelativeTimestamp(tmp5Result7.extractTimestamp(content.id)),
        };
        const Text2 = tmp2(tmp3[24]).Text;
        getRelativeTimestamp = tmp2(tmp3[26]).getRelativeTimestamp;
        tmp2(openReplyActionSheet[26]);
        tmp5Result7 = author_id(openReplyActionSheet[27]);
        items5[1] = closure_7(Text2, obj9);
        Text3 = tmp2(tmp3[24]).Text;
        let str = "text-default";
        const tmp2Result6 = tmp2(openReplyActionSheet[5]);
        if (tmp2Result6.isEntryActive(content)) {
          str = "status-positive";
        }
        const items6 = [tmp.card];
        let tmp23 = null;
        obj10 = { variant: "text-sm/normal", lineClamp: 1, color: str, children: stringResult };
        if (null != primaryColor) {
          const obj11 = { backgroundColor: alphaResult.hex() };
          const obj17 = author_id(openReplyActionSheet[28])(primaryColor);
          tmp23 = obj11;
          alphaResult = obj17.alpha(0.5);
        }
        const obj12 = { style: items6, children: items7 };
        items6[1] = tmp23;
        const obj13 = {
          onPress: callback,
          disabled: null == tmp5ResultResult,
          accessibilityRole: "button",
          accessibilityLabel: intl.formatToPlainString(tmp2(openReplyActionSheet[22]).t["9sZWVp"], obj14),
          children: closure_7(author_id(openReplyActionSheet[30]), obj15),
        };
        const PressableOpacity = tmp2(tmp3[29]).PressableOpacity;
        intl = tmp2(tmp3[22]).intl;
        obj15 = { source: obj16, style: tmp.image };
        obj14 = { gameName: getOrFetchApplication.name };
        obj16 = { uri: iconURL1 };
        items7 = [closure_7(PressableOpacity, obj13)];
        const obj18 = { style: tmp.cardInnerContainer, children: items8 };
        const obj19 = {
          onPress: callback,
          disabled: null == tmp5ResultResult,
          accessibilityRole: "button",
          accessibilityLabel: intl2.formatToPlainString(tmp2(openReplyActionSheet[22]).t["9sZWVp"], obj20),
          children: closure_7(tmp2(openReplyActionSheet[24]).Text, obj21),
        };
        const PressableOpacity2 = tmp2(tmp3[29]).PressableOpacity;
        intl2 = tmp2(tmp3[22]).intl;
        obj20 = { gameName: getOrFetchApplication.name };
        obj21 = { variant: "text-md/semibold", style: tmp.gameName, children: getOrFetchApplication.name };
        items8 = [closure_7(PressableOpacity2, obj19)];
        let tmp16Result = null != memo && memo.length > 0;
        if (tmp16Result) {
          const obj22 = { style: tmp.badges, children: memo };
          tmp16Result = closure_7(View, obj22);
        }
        items8[1] = tmp16Result;
        items7[1] = closure_9(View, obj18);
        const items9 = [closure_9(View, obj12)];
        let tmp16Result2 = null;
        if (!renderForScreenshot) {
          const obj23 = {
            reactText: formatToPlainString(ghWi8V, obj24),
            onReply: openReplyActionSheet,
            onForward: callback1,
          };
          const ContentInventoryReplyRow = tmp2(tmp3[31]).ContentInventoryReplyRow;
          const intl3 = tmp2(tmp3[22]).intl;
          formatToPlainString = intl3.formatToPlainString;
          obj24 = { username: tmp5Result8.getName(stateFromStores) };
          ghWi8V = tmp2(tmp3[22]).t.ghWi8V;
          tmp5Result8 = author_id(openReplyActionSheet[25]);
          tmp16Result2 = closure_7(ContentInventoryReplyRow, obj23);
        }
        obj25 = { children: items9 };
        items9[1] = tmp16Result2;
        return closure_7(tmp5Result5, element);
      }
    }
  }
  return null;
}
