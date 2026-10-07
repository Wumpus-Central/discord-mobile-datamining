// === Module 8418: GameProfileLinkAccount ===

// Module 8418 (GameProfileLinkAccount)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6440 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8352 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8419 */;
import GameProfileSection from "GameProfileSection" /* 8421 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import UserStore from "UserStore" /* 1377 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 48;
const createStyles = fn(4896);
let obj = { card: { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, cardImagesContainer: null, ellipseGroup: null, ellipse: null, cardImageApplication: null, userAvatar: null, cardContent: null, cardText: null, skeletonCardImage: null, skeletonUserAvatar: null, skeletonEllipse: null, skeletonCardContent: null, skeletonAnimationRoot: null, skeletonCardImagesContainerSmall: null, skeletonCardContentHeading: null, skeletonCardContentBody: null, skeletonCardContentBodySecondary: null };
let obj3 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj.cardImagesContainer = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center" };
let obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center" };
obj.ellipseGroup = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
let size = { width: 4, height: 4, backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.3, borderRadius: nativeDefault.radii.round };
obj.ellipse = size;
const size1 = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.cardImageApplication = size1;
let obj5 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
obj.userAvatar = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
let obj6 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.cardContent = { gap: nativeDefault.space.PX_4, alignSelf: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_24 };
obj.cardText = { textAlign: "center" };
const size2 = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
obj.skeletonCardImage = size2;
const size3 = { width: 48, height: 48, borderRadius: nativeDefault.radii.round };
obj.skeletonUserAvatar = size3;
const size4 = { width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round };
obj.skeletonEllipse = size4;
let obj7 = { gap: nativeDefault.space.PX_4, alignSelf: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_24 };
obj.skeletonCardContent = { gap: nativeDefault.space.PX_8, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
let obj8 = { gap: nativeDefault.space.PX_8, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
obj.skeletonAnimationRoot = { gap: nativeDefault.space.PX_16 };
let obj9 = { gap: nativeDefault.space.PX_16 };
obj.skeletonCardImagesContainerSmall = { marginBottom: nativeDefault.space.PX_4 };
const size5 = { width: "92%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
obj.skeletonCardContentHeading = size5;
const size6 = { width: "83%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
obj.skeletonCardContentBody = size6;
const size7 = { width: "55%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs, marginBottom: nativeDefault.space.PX_4 };
obj.skeletonCardContentBodySecondary = size7;
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(41);
  const tmp4 = closure_10();
  const tmp6 = useIsWindowLargeDefault();
  let skeletonCardImagesContainerSmall = !tmp6;
  if (!tmp6) {
    skeletonCardImagesContainerSmall = tmp4.skeletonCardImagesContainerSmall;
  }
  if (cResult[0] === tmp4.cardImagesContainer) {
    if (cResult[1] === skeletonCardImagesContainerSmall) {
      let tmp7 = cResult[2];
    }
    if (cResult[3] !== tmp4.skeletonCardImage) {
      const obj2 = { style: tmp4.skeletonCardImage };
      const tmp10 = React5(GameProfileSkeletonDefault, obj2);
      cResult[3] = tmp4.skeletonCardImage;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== tmp4.skeletonEllipse) {
      const obj3 = { style: tmp4.skeletonEllipse };
      const tmp15 = React5(GameProfileSkeletonDefault, obj3);
      const obj4 = { style: tmp4.skeletonEllipse };
      const tmp16 = React5(GameProfileSkeletonDefault, obj4);
      const obj5 = { style: tmp4.skeletonEllipse };
      const tmp17 = React5(GameProfileSkeletonDefault, obj5);
      cResult[5] = tmp4.skeletonEllipse;
      cResult[6] = tmp15;
      cResult[7] = tmp16;
      cResult[8] = tmp17;
      let tmp13 = tmp17;
      let tmp12 = tmp16;
      let tmp11 = tmp15;
    } else {
      tmp11 = cResult[6];
      tmp12 = cResult[7];
      tmp13 = cResult[8];
    }
    if (cResult[9] === tmp4.ellipseGroup) {
      if (cResult[10] === tmp11) {
        if (cResult[11] === tmp12) {
          if (cResult[12] === tmp13) {
            let tmp18 = cResult[13];
          }
          if (cResult[14] !== tmp4.skeletonUserAvatar) {
            const obj6 = { style: tmp4.skeletonUserAvatar };
            const tmp24 = React5(GameProfileSkeletonDefault, obj6);
            cResult[14] = tmp4.skeletonUserAvatar;
            cResult[15] = tmp24;
            let tmp22 = tmp24;
          } else {
            tmp22 = cResult[15];
          }
          if (cResult[16] === tmp7) {
            if (cResult[17] === tmp8) {
              if (cResult[18] === tmp18) {
                if (cResult[19] === tmp22) {
                  let tmp25 = cResult[20];
                }
                if (cResult[21] !== tmp4.skeletonCardContentHeading) {
                  const obj7 = { style: tmp4.skeletonCardContentHeading };
                  const tmp31 = React5(GameProfileSkeletonDefault, obj7);
                  cResult[21] = tmp4.skeletonCardContentHeading;
                  cResult[22] = tmp31;
                  let tmp29 = tmp31;
                } else {
                  tmp29 = cResult[22];
                }
                if (cResult[23] !== tmp4.skeletonCardContentBody) {
                  const obj8 = { style: tmp4.skeletonCardContentBody };
                  const tmp34 = React5(GameProfileSkeletonDefault, obj8);
                  cResult[23] = tmp4.skeletonCardContentBody;
                  cResult[24] = tmp34;
                  let tmp32 = tmp34;
                } else {
                  tmp32 = cResult[24];
                }
                if (cResult[25] === tmp6) {
                  if (cResult[26] === tmp4.skeletonCardContentBodySecondary) {
                    let tmp35 = cResult[27];
                  }
                  if (cResult[28] === tmp4.skeletonCardContent) {
                    if (cResult[29] === tmp32) {
                      if (cResult[30] === tmp35) {
                        if (cResult[31] === tmp29) {
                          let tmp38 = cResult[32];
                        }
                        const _Symbol = Symbol;
                        if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp45 = React5(GameProfileSkeleton.GameProfileSkeletonButton, {});
                          cResult[33] = tmp45;
                          let tmp43 = tmp45;
                        } else {
                          tmp43 = cResult[33];
                        }
                        if (cResult[34] === tmp4.skeletonAnimationRoot) {
                          if (cResult[35] === tmp38) {
                            if (cResult[36] === tmp25) {
                              let tmp46 = cResult[37];
                            }
                            if (cResult[38] === tmp4.card) {
                              if (cResult[39] === tmp46) {
                                let tmp49 = cResult[40];
                              }
                              return tmp49;
                            }
                            const obj9 = { showViewAllSkeleton: false, skeletonTitleWidth: 90, children: null };
                            const obj10 = { style: tmp4.card, children: tmp46 };
                            obj9.children = React5(View, obj10);
                            const tmp52 = React5(GameProfileSection.GameProfileSectionSkeleton, obj9);
                            cResult[38] = tmp4.card;
                            cResult[39] = tmp46;
                            cResult[40] = tmp52;
                            tmp49 = tmp52;
                          }
                        }
                        const obj11 = { style: tmp4.skeletonAnimationRoot, children: null };
                        const items = [tmp25, tmp38, tmp43];
                        obj11.children = items;
                        const tmp48 = closure_1_8(GameProfileSkeleton.GameProfileSkeletonContainer, obj11);
                        cResult[34] = tmp4.skeletonAnimationRoot;
                        cResult[35] = tmp38;
                        cResult[36] = tmp25;
                        cResult[37] = tmp48;
                        tmp46 = tmp48;
                      }
                    }
                  }
                  const obj12 = { style: tmp4.skeletonCardContent, children: null };
                  const items1 = [tmp29, tmp32, tmp35];
                  obj12.children = items1;
                  const tmp41 = closure_1_8(View, obj12);
                  cResult[28] = tmp4.skeletonCardContent;
                  cResult[29] = tmp32;
                  cResult[30] = tmp35;
                  cResult[31] = tmp29;
                  cResult[32] = tmp41;
                  tmp38 = tmp41;
                }
                let tmp36 = !tmp6;
                if (!tmp6) {
                  const obj13 = { style: tmp4.skeletonCardContentBodySecondary };
                  tmp36 = React5(GameProfileSkeletonDefault, obj13);
                }
                cResult[25] = tmp6;
                cResult[26] = tmp4.skeletonCardContentBodySecondary;
                cResult[27] = tmp36;
                tmp35 = tmp36;
              }
            }
          }
          const obj14 = { style: tmp7, children: null };
          const items2 = [tmp8, tmp18, tmp22];
          obj14.children = items2;
          const tmp28 = closure_1_8(View, obj14);
          cResult[16] = tmp7;
          cResult[17] = tmp8;
          cResult[18] = tmp18;
          cResult[19] = tmp22;
          cResult[20] = tmp28;
          tmp25 = tmp28;
        }
      }
    }
    const obj15 = { style: tmp4.ellipseGroup, children: null };
    const items3 = [tmp11, tmp12, tmp13];
    obj15.children = items3;
    const tmp21 = closure_1_8(View, obj15);
    cResult[9] = tmp4.ellipseGroup;
    cResult[10] = tmp11;
    cResult[11] = tmp12;
    cResult[12] = tmp13;
    cResult[13] = tmp21;
    tmp18 = tmp21;
  }
  const items4 = [tmp4.cardImagesContainer, skeletonCardImagesContainerSmall];
  cResult[0] = tmp4.cardImagesContainer;
  cResult[1] = skeletonCardImagesContainerSmall;
  cResult[2] = items4;
  tmp7 = items4;
}) : (() => {
  const tmp = closure_10();
  const tmp4 = useIsWindowLargeDefault();
  const obj = { style: tmp.card, children: null };
  const obj2 = { style: tmp.skeletonAnimationRoot, children: null };
  const items = [tmp.cardImagesContainer, ];
  let skeletonCardImagesContainerSmall = !tmp4;
  if (!tmp4) {
    skeletonCardImagesContainerSmall = tmp.skeletonCardImagesContainerSmall;
  }
  const obj3 = { style: items, children: null };
  items[1] = skeletonCardImagesContainerSmall;
  const items1 = [React5(GameProfileSkeletonDefault, { style: tmp.skeletonCardImage }), , ];
  const obj5 = { style: tmp.ellipseGroup, children: null };
  const items2 = [React5(GameProfileSkeletonDefault, { style: tmp.skeletonEllipse }), React5(GameProfileSkeletonDefault, { style: tmp.skeletonEllipse }), React5(GameProfileSkeletonDefault, { style: tmp.skeletonEllipse })];
  obj5.children = items2;
  items1[1] = closure_1_8(View, obj5);
  items1[2] = React5(GameProfileSkeletonDefault, { style: tmp.skeletonUserAvatar });
  obj3.children = items1;
  const items3 = [closure_1_8(View, obj3), , ];
  const obj10 = { style: tmp.skeletonCardContent, children: null };
  const items4 = [React5(GameProfileSkeletonDefault, { style: tmp.skeletonCardContentHeading }), React5(GameProfileSkeletonDefault, { style: tmp.skeletonCardContentBody }), ];
  let tmp5Result = !tmp4;
  if (!tmp4) {
    const obj13 = { style: tmp.skeletonCardContentBodySecondary };
    tmp5Result = React5(GameProfileSkeletonDefault, obj13);
  }
  const obj14 = { showViewAllSkeleton: false, skeletonTitleWidth: 90, children: null };
  items4[2] = tmp5Result;
  obj10.children = items4;
  items3[1] = closure_1_8(View, obj10);
  items3[2] = React5(GameProfileSkeleton.GameProfileSkeletonButton, {});
  obj2.children = items3;
  obj.children = closure_1_8(GameProfileSkeleton.GameProfileSkeletonContainer, obj2);
  obj14.children = React5(View, obj);
  return React5(GameProfileSection.GameProfileSectionSkeleton, obj14);
}));
ReactCompilerGating = fn(558);
let obj10 = { marginBottom: nativeDefault.space.PX_4 };
size = fn(2);
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((analyticsLocations) => {
  const cResult = trackAction(startAuthorization[8]).c(46);
  ({ game, trackAction } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  closure_10();
  const tmp5 = analyticsLocations(startAuthorization[12])(game);
  startAuthorization = tmp5.startAuthorization;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const obj = trackAction(startAuthorization[8]);
  const stateFromStores = trackAction(startAuthorization[13]).useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== game) {
    const officialApplicationId = game.getOfficialApplicationId();
    cResult[2] = game;
    cResult[3] = officialApplicationId;
    let tmp10 = officialApplicationId;
  } else {
    tmp10 = cResult[3];
  }
  closure_3 = tmp10;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ApplicationStore];
    cResult[4] = items1;
  }
  if (cResult[5] !== tmp10) {
    class E {
      constructor() {
        result = null != closure_3;
        if (result) {
          tmp3 = closure_5;
          result = closure_5.didFetchingApplicationFail(tmp);
        }
        return result;
      }
    }
    const items2 = [tmp10];
    cResult[5] = tmp10;
    cResult[6] = E;
    cResult[7] = items2;
  } else {
    class E {
      constructor() {
        result = null != closure_3;
        if (result) {
          tmp3 = closure_5;
          result = closure_5.didFetchingApplicationFail(tmp);
        }
        return result;
      }
    }
  }
  trackAction(startAuthorization[13]);
  if (cResult[8] === analyticsLocations) {
    class E {
      constructor() {
        result = null != closure_3;
        if (result) {
          tmp3 = closure_5;
          result = closure_5.didFetchingApplicationFail(tmp);
        }
        return result;
      }
    }
  }
  class L {
    constructor() {
      tmp = trackAction(closure_0(closure_2[14]).GameProfileTrackActionActions.LinkAccount);
      obj = { analyticsLocations };
      tmp2 = startAuthorization(obj);
      return;
    }
  }
  cResult[8] = analyticsLocations;
  cResult[9] = startAuthorization;
  cResult[10] = trackAction;
  cResult[11] = L;
  const tmpResult = trackAction(startAuthorization[13]);
}) : ((analyticsLocations) => {
  ({ game, trackAction } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  let startAuthorization;
  const tmp = closure_10();
  const tmp4 = analyticsLocations(startAuthorization[12])(game);
  startAuthorization = tmp4.startAuthorization;
  const connectionApp = tmp4.connectionApp;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp4);
  const items = [UserStore];
  const stateFromStores = trackAction(startAuthorization[13]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const officialApplicationId = game.getOfficialApplicationId();
  const obj = trackAction(startAuthorization[13]);
  const items1 = [ApplicationStore];
  const items2 = [officialApplicationId];
  const items3 = [trackAction, startAuthorization, analyticsLocations];
  const stateFromStores1 = trackAction(startAuthorization[13]).useStateFromStores(items1, () => {
    let result = null != officialApplicationId;
    if (result) {
      result = ApplicationStore.didFetchingApplicationFail(tmp);
    }
    return result;
  }, items2);
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
                const intl = trackAction(tmp3[15]).intl;
                obj3.title = intl.string(trackAction(tmp3[15]).t["VDAhr+"]);
                const obj4 = { style: tmp.card, children: null };
                let tmp16Result = null;
                if (null != iconSource) {
                  const obj5 = { style: tmp.cardImagesContainer, children: null };
                  const obj6 = { source: iconSource, style: tmp.cardImageApplication };
                  const items4 = [closure_7(tmp2(tmp3[16]), obj6), , ];
                  const obj7 = { style: tmp.ellipseGroup, children: null };
                  const obj8 = { style: tmp.ellipse };
                  const items5 = [closure_7(View, obj8), , ];
                  const obj9 = { style: tmp.ellipse };
                  items5[1] = closure_7(View, obj9);
                  const obj10 = { style: tmp.ellipse };
                  items5[2] = closure_7(View, obj10);
                  obj7.children = items5;
                  items4[1] = closure_8(View, obj7);
                  const obj11 = { size: trackAction(tmp3[17]).AvatarSizes.LARGE_48, user: stateFromStores, guildId: "Array", style: tmp.userAvatar };
                  items4[2] = closure_7(trackAction(tmp3[17]).Avatar, obj11);
                  obj5.children = items4;
                  tmp16Result = closure_8(View, obj5);
                }
                const items6 = [tmp16Result, , ];
                const obj12 = { style: tmp.cardContent, children: null };
                const obj13 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp.cardText, children: null };
                const intl2 = trackAction(tmp3[15]).intl;
                const obj14 = { gameName: connectionApp.name };
                obj13.children = intl2.formatToPlainString(trackAction(tmp3[15]).t.hUbQT2, obj14);
                const items7 = [closure_7(trackAction(tmp3[18]).Text, obj13), ];
                const obj15 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardText, children: null };
                const intl3 = trackAction(tmp3[15]).intl;
                obj15.children = intl3.string(trackAction(tmp3[15]).t["JKqu+4"]);
                items7[1] = closure_7(trackAction(tmp3[18]).Text, obj15);
                obj12.children = items7;
                items6[1] = closure_8(View, obj12);
                const obj16 = { variant: "secondary", size: "md", text: null, onPress: null, icon: null };
                const intl4 = trackAction(tmp3[15]).intl;
                obj16.text = intl4.string(trackAction(tmp3[15]).t.jynBQ5);
                obj16.onPress = tmp9;
                obj16.icon = closure_7(trackAction(tmp3[19]).ExperimentalGameControllerLinkIcon, { size: "sm" });
                items6[2] = closure_7(trackAction(tmp3[20]).Button, obj16);
                obj4.children = items6;
                obj3.children = closure_8(View, obj4);
                return closure_7(tmp2(tmp3[11]), obj3);
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
});