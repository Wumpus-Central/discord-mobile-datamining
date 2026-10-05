// discord_app/modules/game_profile/native/components/GameProfileLinkAccount.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsWindowLargeDefault from "../../../screen/native/useIsWindowLarge.tsx";
import GameProfileAnalyticUtils from "../../GameProfileAnalyticUtils.tsx";
import GameProfileSkeleton from "GameProfileSkeleton.tsx";
import GameProfileSection from "GameProfileSection.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const GameProfileSkeletonDefault = GameProfileSkeleton;
let analyticsLocations;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let size3;
let size4;
let size5;
let size6;
let size7;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 48;
let createStyles = createStyles_mod;
let obj = {
  card: obj2,
  cardImagesContainer: obj3,
  ellipseGroup: obj4,
  ellipse: size,
  cardImageApplication: size1,
  userAvatar: obj5,
  cardContent: obj6,
  cardText: { textAlign: "center" },
  skeletonCardImage: size2,
  skeletonUserAvatar: size3,
  skeletonEllipse: size4,
  skeletonCardContent: obj7,
  skeletonAnimationRoot: obj8,
  skeletonCardImagesContainerSmall: obj9,
  skeletonCardContentHeading: size5,
  skeletonCardContentBody: size6,
  skeletonCardContentBodySecondary: size7,
};
obj2 = {
  borderRadius: nativeDefault.radii.lg,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  padding: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center" };
obj4 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
size = {
  width: 4,
  height: 4,
  backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY,
  opacity: 0.3,
  borderRadius: nativeDefault.radii.round,
};
size1 = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj5 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj6 = {
  gap: nativeDefault.space.PX_4,
  alignSelf: "center",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_24,
};
size2 = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
size3 = { width: 48, height: 48, borderRadius: nativeDefault.radii.round };
size4 = { width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round };
obj7 = { gap: nativeDefault.space.PX_8, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
obj8 = { gap: nativeDefault.space.PX_16 };
obj9 = { marginBottom: nativeDefault.space.PX_4 };
size5 = { width: "92%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
size6 = { width: "83%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
size7 = {
  width: "55%",
  height: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.xs,
  marginBottom: nativeDefault.space.PX_4,
};
let closure_10 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let items;
        let items1;
        let items2;
        let items3;
        let obj10;
        const obj = react2;
        const cResult = obj.c(41);
        const tmp4 = closure_10();
        const tmp6 = useIsWindowLargeDefault();
        if (cResult[0] === tmp4.cardImagesContainer) {
          let tmp8;
          let tmp9;
          let tmp14;
          let tmp13;
          let tmp12;
          if (cResult[1] === (!tmp6 && tmp4.skeletonCardImagesContainerSmall)) {
            tmp8 = cResult[2];
          }
          if (cResult[3] !== tmp4.skeletonCardImage) {
            const obj2 = { style: tmp4.skeletonCardImage };
            const tmp11 = metroImportDefault(GameProfileSkeletonDefault, obj2);
            cResult[3] = tmp4.skeletonCardImage;
            cResult[4] = tmp11;
            tmp9 = tmp11;
          } else {
            tmp9 = cResult[4];
          }
          if (cResult[5] !== tmp4.skeletonEllipse) {
            const obj3 = { style: tmp4.skeletonEllipse };
            const tmp16 = metroImportDefault(GameProfileSkeletonDefault, obj3);
            const obj4 = { style: tmp4.skeletonEllipse };
            const tmp17 = metroImportDefault(GameProfileSkeletonDefault, obj4);
            const obj5 = { style: tmp4.skeletonEllipse };
            const tmp18 = metroImportDefault(GameProfileSkeletonDefault, obj5);
            cResult[5] = tmp4.skeletonEllipse;
            cResult[6] = tmp16;
            cResult[7] = tmp17;
            cResult[8] = tmp18;
            tmp14 = tmp18;
            tmp13 = tmp17;
            tmp12 = tmp16;
          } else {
            tmp12 = cResult[6];
            tmp13 = cResult[7];
            tmp14 = cResult[8];
          }
          if (cResult[9] === tmp4.ellipseGroup) {
            if (cResult[10] === tmp12) {
              if (cResult[11] === tmp13) {
                let tmp19;
                let tmp23;
                if (cResult[12] === tmp14) {
                  tmp19 = cResult[13];
                }
                if (cResult[14] !== tmp4.skeletonUserAvatar) {
                  const obj6 = { style: tmp4.skeletonUserAvatar };
                  const tmp25 = metroImportDefault(GameProfileSkeletonDefault, obj6);
                  cResult[14] = tmp4.skeletonUserAvatar;
                  cResult[15] = tmp25;
                  tmp23 = tmp25;
                } else {
                  tmp23 = cResult[15];
                }
                if (cResult[16] === tmp8) {
                  if (cResult[17] === tmp9) {
                    if (cResult[18] === tmp19) {
                      let tmp26;
                      let tmp30;
                      let tmp33;
                      if (cResult[19] === tmp23) {
                        tmp26 = cResult[20];
                      }
                      if (cResult[21] !== tmp4.skeletonCardContentHeading) {
                        const obj7 = { style: tmp4.skeletonCardContentHeading };
                        const tmp32 = metroImportDefault(GameProfileSkeletonDefault, obj7);
                        cResult[21] = tmp4.skeletonCardContentHeading;
                        cResult[22] = tmp32;
                        tmp30 = tmp32;
                      } else {
                        tmp30 = cResult[22];
                      }
                      if (cResult[23] !== tmp4.skeletonCardContentBody) {
                        const obj8 = { style: tmp4.skeletonCardContentBody };
                        const tmp35 = metroImportDefault(GameProfileSkeletonDefault, obj8);
                        cResult[23] = tmp4.skeletonCardContentBody;
                        cResult[24] = tmp35;
                        tmp33 = tmp35;
                      } else {
                        tmp33 = cResult[24];
                      }
                      if (cResult[25] === tmp6) {
                        let tmp36;
                        if (cResult[26] === tmp4.skeletonCardContentBodySecondary) {
                          tmp36 = cResult[27];
                        }
                        if (cResult[28] === tmp4.skeletonCardContent) {
                          if (cResult[29] === tmp33) {
                            if (cResult[30] === tmp36) {
                              let tmp39;
                              let tmp44;
                              if (cResult[31] === tmp30) {
                                tmp39 = cResult[32];
                              }
                              const _Symbol = Symbol;
                              if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
                                const tmp46 = metroImportDefault(GameProfileSkeleton.GameProfileSkeletonButton, {});
                                cResult[33] = tmp46;
                                tmp44 = tmp46;
                              } else {
                                tmp44 = cResult[33];
                              }
                              if (cResult[34] === tmp4.skeletonAnimationRoot) {
                                if (cResult[35] === tmp39) {
                                  let tmp47;
                                  if (cResult[36] === tmp26) {
                                    tmp47 = cResult[37];
                                  }
                                  if (cResult[38] === tmp4.card) {
                                    let tmp50;
                                    if (cResult[39] === tmp47) {
                                      tmp50 = cResult[40];
                                    }
                                    return tmp50;
                                  }
                                  const obj9 = {
                                    showViewAllSkeleton: false,
                                    skeletonTitleWidth: 90,
                                    children: metroImportDefault(View, obj10),
                                  };
                                  obj10 = { style: tmp4.card, children: tmp47 };
                                  const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
                                  const tmp53 = metroImportDefault(GameProfileSectionSkeleton, obj9);
                                  cResult[38] = tmp4.card;
                                  cResult[39] = tmp47;
                                  cResult[40] = tmp53;
                                  tmp50 = tmp53;
                                }
                              }
                              const obj11 = { style: tmp4.skeletonAnimationRoot, children: items };
                              items = [tmp26, tmp39, tmp44];
                              const tmp49 = metroImportAll(GameProfileSkeleton.GameProfileSkeletonContainer, obj11);
                              cResult[34] = tmp4.skeletonAnimationRoot;
                              cResult[35] = tmp39;
                              cResult[36] = tmp26;
                              cResult[37] = tmp49;
                              tmp47 = tmp49;
                            }
                          }
                        }
                        const obj12 = { style: tmp4.skeletonCardContent, children: items1 };
                        items1 = [tmp30, tmp33, tmp36];
                        const tmp42 = metroImportAll(View, obj12);
                        cResult[28] = tmp4.skeletonCardContent;
                        cResult[29] = tmp33;
                        cResult[30] = tmp36;
                        cResult[31] = tmp30;
                        cResult[32] = tmp42;
                        tmp39 = tmp42;
                      }
                      let tmp37 = !tmp6;
                      if (tmp37) {
                        const obj13 = { style: tmp4.skeletonCardContentBodySecondary };
                        tmp37 = metroImportDefault(GameProfileSkeletonDefault, obj13);
                      }
                      cResult[25] = tmp6;
                      cResult[26] = tmp4.skeletonCardContentBodySecondary;
                      cResult[27] = tmp37;
                      tmp36 = tmp37;
                    }
                  }
                }
                const obj14 = { style: tmp8, children: items2 };
                items2 = [tmp9, tmp19, tmp23];
                const tmp29 = metroImportAll(View, obj14);
                cResult[16] = tmp8;
                cResult[17] = tmp9;
                cResult[18] = tmp19;
                cResult[19] = tmp23;
                cResult[20] = tmp29;
                tmp26 = tmp29;
              }
            }
          }
          const obj15 = { style: tmp4.ellipseGroup, children: items3 };
          items3 = [tmp12, tmp13, tmp14];
          const tmp22 = metroImportAll(View, obj15);
          cResult[9] = tmp4.ellipseGroup;
          cResult[10] = tmp12;
          cResult[11] = tmp13;
          cResult[12] = tmp14;
          cResult[13] = tmp22;
          tmp19 = tmp22;
        }
        const items4 = [tmp4.cardImagesContainer, !tmp6 && tmp4.skeletonCardImagesContainerSmall];
        cResult[0] = tmp4.cardImagesContainer;
        cResult[1] = !tmp6 && tmp4.skeletonCardImagesContainerSmall;
        cResult[2] = items4;
        tmp8 = items4;
      }
    : () => {
        let GameProfileSkeletonContainer;
        let items1;
        let items2;
        let items3;
        let items4;
        let obj2;
        const tmp = closure_10();
        const tmp4 = useIsWindowLargeDefault();
        const obj = { style: tmp.card, children: metroImportAll(GameProfileSkeletonContainer, obj2) };
        const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
        const items = [tmp.cardImagesContainer];
        let skeletonCardImagesContainerSmall = !tmp4;
        obj2 = { style: tmp.skeletonAnimationRoot, children: items3 };
        GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
        if (!tmp4) {
          skeletonCardImagesContainerSmall = tmp.skeletonCardImagesContainerSmall;
        }
        const obj3 = { style: items, children: items1 };
        items[1] = skeletonCardImagesContainerSmall;
        items1 = [, ,];
        const obj4 = { style: tmp.skeletonCardImage };
        items1[0] = metroImportDefault(GameProfileSkeletonDefault, obj4);
        const obj5 = { style: tmp.ellipseGroup, children: items2 };
        items2 = [, ,];
        const obj6 = { style: tmp.skeletonEllipse };
        items2[0] = metroImportDefault(GameProfileSkeletonDefault, obj6);
        const obj7 = { style: tmp.skeletonEllipse };
        items2[1] = metroImportDefault(GameProfileSkeletonDefault, obj7);
        const obj8 = { style: tmp.skeletonEllipse };
        items2[2] = metroImportDefault(GameProfileSkeletonDefault, obj8);
        items1[1] = metroImportAll(View, obj5);
        const obj9 = { style: tmp.skeletonUserAvatar };
        items1[2] = metroImportDefault(GameProfileSkeletonDefault, obj9);
        items3 = [metroImportAll(View, obj3), ,];
        const obj10 = { style: tmp.skeletonCardContent, children: items4 };
        items4 = [, ,];
        const obj11 = { style: tmp.skeletonCardContentHeading };
        items4[0] = metroImportDefault(GameProfileSkeletonDefault, obj11);
        const obj12 = { style: tmp.skeletonCardContentBody };
        items4[1] = metroImportDefault(GameProfileSkeletonDefault, obj12);
        let tmp5Result = !tmp4;
        if (tmp5Result) {
          const obj13 = { style: tmp.skeletonCardContentBodySecondary };
          tmp5Result = metroImportDefault(GameProfileSkeletonDefault, obj13);
        }
        items4[2] = tmp5Result;
        const obj14 = { showViewAllSkeleton: false, skeletonTitleWidth: 90, children: metroImportDefault(View, obj) };
        items3[1] = metroImportAll(View, obj10);
        items3[2] = metroImportDefault(GameProfileSkeleton.GameProfileSkeletonButton, {});
        return metroImportDefault(GameProfileSectionSkeleton, obj14);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (analyticsLocations) => {
      let canStartAuthorization;
      let currentUser;
      let fetched;
      let game;
      let hasAlreadyLinked;
      let startAuthorization;
      let tmp10;
      let tmp6;
      let tmp7;
      let trackAction;
      let obj = trackAction(startAuthorization[8]);
      const cResult = obj.c(46);
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
      const tmpResult = trackAction(startAuthorization[13]);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[2] !== game) {
        const officialApplicationId = game.getOfficialApplicationId();
        cResult[2] = game;
        cResult[3] = officialApplicationId;
        tmp10 = officialApplicationId;
      } else {
        tmp10 = cResult[3];
      }
      let closure_3 = tmp10;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [ApplicationStore];
        cResult[4] = items1;
      }
      if (cResult[5] !== tmp10) {
        class E {
          constructor() {
            const result = null != closure_3 && ApplicationStore.didFetchingApplicationFail(tmp);
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
            const result = null != closure_3 && ApplicationStore.didFetchingApplicationFail(tmp);
            return result;
          }
        }
      }
      trackAction(startAuthorization[13]);
      if (cResult[8] === analyticsLocations) {
        class E {
          constructor() {
            const result = null != closure_3 && ApplicationStore.didFetchingApplicationFail(tmp);
            return result;
          }
        }
      }
      class L {
        constructor() {
          trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.LinkAccount);
          const obj = { analyticsLocations };
          startAuthorization(obj);
        }
      }
      cResult[8] = analyticsLocations;
      cResult[9] = startAuthorization;
      cResult[10] = trackAction;
      cResult[11] = L;
    }
  : (analyticsLocations) => {
      let canStartAuthorization;
      let currentUser;
      let fetched;
      let game;
      let hasAlreadyLinked;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items4;
      let items5;
      let items6;
      let items7;
      let obj14;
      let obj4;
      let trackAction;
      ({ game, trackAction } = analyticsLocations);
      analyticsLocations = analyticsLocations.analyticsLocations;
      let startAuthorization;
      const tmp = closure_10();
      const tmp4 = analyticsLocations(startAuthorization[12])(game);
      startAuthorization = tmp4.startAuthorization;
      const connectionApp = tmp4.connectionApp;
      ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp4);
      let obj = trackAction(startAuthorization[13]);
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const officialApplicationId = game.getOfficialApplicationId();
      const items1 = [ApplicationStore];
      const items2 = [officialApplicationId];
      const items3 = [trackAction, startAuthorization, analyticsLocations];
      const obj2 = trackAction(startAuthorization[13]);
      const stateFromStores1 = obj2.useStateFromStores(
        items1,
        () => {
          const result = null != officialApplicationId && ApplicationStore.didFetchingApplicationFail(tmp);
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
                    const obj3 = {
                      title: intl.string(trackAction(startAuthorization[15]).t["VDAhr+"]),
                      children: closure_8(View, obj4),
                    };
                    const tmp2Result = analyticsLocations(startAuthorization[11]);
                    intl = trackAction(tmp3[15]).intl;
                    let tmp16Result = null;
                    obj4 = { style: tmp.card, children: items6 };
                    if (null != iconSource) {
                      const obj5 = { style: tmp.cardImagesContainer, children: items4 };
                      const obj6 = { source: iconSource, style: tmp.cardImageApplication };
                      items4 = [closure_7(tmp2(startAuthorization[16]), obj6), ,];
                      const obj7 = { style: tmp.ellipseGroup, children: items5 };
                      const obj8 = { style: tmp.ellipse };
                      items5 = [closure_7(View, obj8), ,];
                      const obj9 = { style: tmp.ellipse };
                      items5[1] = closure_7(View, obj9);
                      const obj10 = { style: tmp.ellipse };
                      items5[2] = closure_7(View, obj10);
                      items4[1] = closure_8(View, obj7);
                      const obj11 = {
                        size: trackAction(startAuthorization[17]).AvatarSizes.LARGE_48,
                        user: stateFromStores,
                        guildId: "Array",
                        style: tmp.userAvatar,
                      };
                      const Avatar = trackAction(tmp3[17]).Avatar;
                      items4[2] = closure_7(Avatar, obj11);
                      tmp16Result = closure_8(View, obj5);
                    }
                    items6 = [tmp16Result, ,];
                    const obj12 = { style: tmp.cardContent, children: items7 };
                    const obj13 = {
                      variant: "heading-md/semibold",
                      color: "mobile-text-heading-primary",
                      style: tmp.cardText,
                      children: intl2.formatToPlainString(trackAction(startAuthorization[15]).t.hUbQT2, obj14),
                    };
                    const Text = trackAction(tmp3[18]).Text;
                    intl2 = trackAction(tmp3[15]).intl;
                    obj14 = { gameName: connectionApp.name };
                    items7 = [closure_7(Text, obj13)];
                    const obj15 = {
                      variant: "text-sm/medium",
                      color: "text-default",
                      style: tmp.cardText,
                      children: intl3.string(trackAction(startAuthorization[15]).t["JKqu+4"]),
                    };
                    const Text2 = trackAction(tmp3[18]).Text;
                    intl3 = trackAction(tmp3[15]).intl;
                    items7[1] = closure_7(Text2, obj15);
                    items6[1] = closure_8(View, obj12);
                    const obj16 = {
                      variant: "secondary",
                      size: "md",
                      text: intl4.string(trackAction(startAuthorization[15]).t.jynBQ5),
                      onPress: tmp9,
                      icon: closure_7(trackAction(startAuthorization[19]).ExperimentalGameControllerLinkIcon, {
                        size: "sm",
                      }),
                    };
                    const Button = trackAction(tmp3[20]).Button;
                    intl4 = trackAction(tmp3[15]).intl;
                    items6[2] = closure_7(Button, obj16);
                    return closure_7(tmp2Result, obj3);
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
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default tmp5;
