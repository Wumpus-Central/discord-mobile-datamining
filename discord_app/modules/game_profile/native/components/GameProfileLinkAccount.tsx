// discord_app/modules/game_profile/native/components/GameProfileLinkAccount.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileSection from "GameProfileSection.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 48;
const createStyles = fn(4639);
let obj = {
  card: {
    borderRadius: nativeDefault.radii.lg,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    padding: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_16,
  },
  cardImagesContainer: null,
  ellipseGroup: null,
  ellipse: null,
  cardImageApplication: null,
  userAvatar: null,
  cardContent: null,
  cardText: null,
  skeletonCardImage: null,
  skeletonUserAvatar: null,
  skeletonEllipse: null,
  skeletonCardContent: null,
  skeletonAnimationRoot: null,
  skeletonCardImagesContainerSmall: null,
  skeletonCardContentHeading: null,
  skeletonCardContentBody: null,
  skeletonCardContentBodySecondary: null,
};
let obj3 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
obj.cardImagesContainer = {
  flexDirection: "row",
  gap: nativeDefault.space.PX_8,
  alignItems: "center",
  alignSelf: "center",
};
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center" };
obj.ellipseGroup = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
let size = {
  width: 4,
  height: 4,
  backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  opacity: 0.3,
  borderRadius: nativeDefault.radii.round,
};
obj.ellipse = size;
const size1 = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj.cardImageApplication = size1;
let obj5 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
obj.userAvatar = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let obj6 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.cardContent = {
  gap: nativeDefault.space.PX_4,
  alignSelf: "center",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_24,
};
obj.cardText = { textAlign: "center" };
const size2 = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
obj.skeletonCardImage = size2;
const size3 = { width: 48, height: 48, borderRadius: nativeDefault.radii.round };
obj.skeletonUserAvatar = size3;
const size4 = {
  width: nativeDefault.space.PX_4,
  height: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
};
obj.skeletonEllipse = size4;
let obj7 = {
  gap: nativeDefault.space.PX_4,
  alignSelf: "center",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_24,
};
obj.skeletonCardContent = {
  gap: nativeDefault.space.PX_8,
  alignItems: "center",
  paddingHorizontal: nativeDefault.space.PX_24,
};
let obj8 = { gap: nativeDefault.space.PX_8, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
obj.skeletonAnimationRoot = { gap: nativeDefault.space.PX_16 };
let obj9 = { gap: nativeDefault.space.PX_16 };
obj.skeletonCardImagesContainerSmall = { marginBottom: nativeDefault.space.PX_4 };
const size5 = { width: "92%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
obj.skeletonCardContentHeading = size5;
const size6 = { width: "83%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
obj.skeletonCardContentBody = size6;
const size7 = {
  width: "55%",
  height: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.xs,
  marginBottom: nativeDefault.space.PX_4,
};
obj.skeletonCardContentBodySecondary = size7;
let closure_10 = createStyles.createStyles(obj);
let closure_11 = noop.memo(() => {
  const tmp = closure_10();
  const tmp4 = useIsWindowLargeDefault();
  const obj = { style: tmp.card, children: null };
  const obj2 = { style: tmp.skeletonAnimationRoot, children: null };
  const items = [tmp.cardImagesContainer];
  let skeletonCardImagesContainerSmall = !tmp4;
  if (!tmp4) {
    skeletonCardImagesContainerSmall = tmp.skeletonCardImagesContainerSmall;
  }
  const obj3 = { style: items, children: null };
  items[1] = skeletonCardImagesContainerSmall;
  const items1 = [React5(GameProfileSkeletonDefault, { style: tmp.skeletonCardImage }), ,];
  const obj5 = { style: tmp.ellipseGroup, children: null };
  const items2 = [
    React5(GameProfileSkeletonDefault, { style: tmp.skeletonEllipse }),
    React5(GameProfileSkeletonDefault, { style: tmp.skeletonEllipse }),
    React5(GameProfileSkeletonDefault, { style: tmp.skeletonEllipse }),
  ];
  obj5.children = items2;
  items1[1] = React6(View, obj5);
  items1[2] = React5(GameProfileSkeletonDefault, { style: tmp.skeletonUserAvatar });
  obj3.children = items1;
  const items3 = [React6(View, obj3), ,];
  const obj10 = { style: tmp.skeletonCardContent, children: null };
  const items4 = [
    React5(GameProfileSkeletonDefault, { style: tmp.skeletonCardContentHeading }),
    React5(GameProfileSkeletonDefault, { style: tmp.skeletonCardContentBody }),
  ];
  let tmp5Result = !tmp4;
  if (!tmp4) {
    const obj13 = { style: tmp.skeletonCardContentBodySecondary };
    tmp5Result = React5(GameProfileSkeletonDefault, obj13);
  }
  const obj14 = { showViewAllSkeleton: false, skeletonTitleWidth: 90, children: null };
  items4[2] = tmp5Result;
  obj10.children = items4;
  items3[1] = React6(View, obj10);
  items3[2] = React5(GameProfileSkeleton.GameProfileSkeletonButton, {});
  obj2.children = items3;
  obj.children = React6(GameProfileSkeleton.GameProfileSkeletonContainer, obj2);
  obj14.children = React5(View, obj);
  return React5(GameProfileSection.GameProfileSectionSkeleton, obj14);
});
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default function GameProfileLinkAccount(analyticsLocations) {
  ({ game, trackAction } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  let startAuthorization;
  const tmp = closure_10();
  const tmp4 = analyticsLocations(startAuthorization[10])(game);
  startAuthorization = tmp4.startAuthorization;
  const connectionApp = tmp4.connectionApp;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp4);
  const items = [UserStore];
  const stateFromStores = trackAction(startAuthorization[11]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  const officialApplicationId = game.getOfficialApplicationId();
  const obj = trackAction(startAuthorization[11]);
  const items1 = [ApplicationStore];
  const items2 = [officialApplicationId];
  const items3 = [trackAction, startAuthorization, analyticsLocations];
  const stateFromStores1 = trackAction(startAuthorization[11]).useStateFromStores(
    items1,
    () => {
      let result = null != officialApplicationId;
      if (result) {
        result = ApplicationStore.didFetchingApplicationFail(tmp);
      }
      return result;
    },
    items2,
  );
  if (null != officialApplicationId) {
    if (!stateFromStores1) {
      if (null != stateFromStores) {
        if (null == connectionApp) {
          return closure_7(closure_11, {});
        } else {
          if (canStartAuthorization) {
            if (!hasAlreadyLinked) {
              if (fetched) {
                const iconSource = connectionApp.getIconSource(c9);
                const obj3 = { title: null, children: null };
                const intl = trackAction(tmp3[13]).intl;
                obj3.title = intl.string(trackAction(tmp3[13]).t["VDAhr+"]);
                const obj4 = { style: tmp.card, children: null };
                let tmp16Result = null;
                if (null != iconSource) {
                  const obj5 = { style: tmp.cardImagesContainer, children: null };
                  const obj6 = { source: iconSource, style: tmp.cardImageApplication };
                  const items4 = [closure_7(tmp2(tmp3[14]), obj6), ,];
                  const obj7 = { style: tmp.ellipseGroup, children: null };
                  const obj8 = { style: tmp.ellipse };
                  const items5 = [closure_7(View, obj8), ,];
                  const obj9 = { style: tmp.ellipse };
                  items5[1] = closure_7(View, obj9);
                  const obj10 = { style: tmp.ellipse };
                  items5[2] = closure_7(View, obj10);
                  obj7.children = items5;
                  items4[1] = closure_8(View, obj7);
                  const obj11 = {
                    size: trackAction(tmp3[15]).AvatarSizes.LARGE_48,
                    user: stateFromStores,
                    guildId: "Array",
                    style: tmp.userAvatar,
                  };
                  items4[2] = closure_7(trackAction(tmp3[15]).Avatar, obj11);
                  obj5.children = items4;
                  tmp16Result = closure_8(View, obj5);
                }
                const items6 = [tmp16Result, ,];
                const obj12 = { style: tmp.cardContent, children: null };
                const obj13 = {
                  variant: "heading-md/semibold",
                  color: "mobile-text-heading-primary",
                  style: tmp.cardText,
                  children: null,
                };
                const intl2 = trackAction(tmp3[13]).intl;
                const obj14 = { gameName: connectionApp.name };
                obj13.children = intl2.formatToPlainString(trackAction(tmp3[13]).t.hUbQT2, obj14);
                const items7 = [closure_7(trackAction(tmp3[16]).Text, obj13)];
                const obj15 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardText, children: null };
                const intl3 = trackAction(tmp3[13]).intl;
                obj15.children = intl3.string(trackAction(tmp3[13]).t["JKqu+4"]);
                items7[1] = closure_7(trackAction(tmp3[16]).Text, obj15);
                obj12.children = items7;
                items6[1] = closure_8(View, obj12);
                const obj16 = { variant: "secondary", size: "md", text: null, onPress: null, icon: null };
                const intl4 = trackAction(tmp3[13]).intl;
                obj16.text = intl4.string(trackAction(tmp3[13]).t.jynBQ5);
                obj16.onPress = tmp9;
                obj16.icon = closure_7(trackAction(tmp3[18]).ExperimentalGameControllerLinkIcon, { size: "sm" });
                items6[2] = closure_7(trackAction(tmp3[17]).Button, obj16);
                obj4.children = items6;
                obj3.children = closure_8(View, obj4);
                return closure_7(tmp2(tmp3[8]), obj3);
              } else {
                return closure_7(closure_11, {});
              }
            }
          }
          return null;
        }
      }
    }
  }
  return null;
}
