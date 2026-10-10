// discord_app/modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import maybeFetchUserProfileDefault from "../../../../../user_profile/maybeFetchUserProfile.tsx";
import EntityBorderAppIconDefault from "../../../base_components/EntityBorderAppIcon.tsx";
import ActivityShelfBadgeDefault from "../../../../../activities/native/ActivityShelfBadge.tsx";
import RecommendationsBannerDefault from "RecommendationsBanner.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT,
    width: "100%",
    overflow: "hidden",
  },
  banner: { width: "100%", height: 106, overflow: "hidden" },
  appDetailsContainer: null,
  appDetails: null,
  appIconContainer: null,
  notifsContainer: null,
  badge: null,
  promotedLabelWrapper: null,
};
let obj3 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT,
  width: "100%",
  overflow: "hidden",
};
obj2.appDetailsContainer = {
  padding: nativeDefault.space.PX_16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
let obj4 = {
  padding: nativeDefault.space.PX_16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj2.appDetails = { marginLeft: nativeDefault.space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
obj2.appIconContainer = { flexShrink: 0 };
const rect = {
  position: "absolute",
  display: "flex",
  gap: nativeDefault.space.PX_4,
  right: nativeDefault.space.PX_8,
  top: nativeDefault.space.PX_8,
  alignItems: "flex-end",
};
obj2.notifsContainer = rect;
obj2.badge = {};
let obj5 = { marginLeft: nativeDefault.space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
obj2.promotedLabelWrapper = {
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = {
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function RecommendationsBannerCard(arg0) {
      let BaseAppRow = application;
      let obj = dependencyMap;
      const cResult = application(576).c(25);
      ({ style, application } = arg0);
      ({ onPress, isFirst, isLast, isLandscape, showsPromoted, overrideImageUrl } = arg0);
      const tmp3 = closure_8();
      if (cResult[0] === application) {
        if (cResult[1] === tmp2) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== application) {
          const shelfBadgeTypeIfActive = BaseAppRow(9246).getShelfBadgeTypeIfActive(application);
          cResult[3] = application;
          cResult[4] = shelfBadgeTypeIfActive;
          let tmp6 = shelfBadgeTypeIfActive;
          const BaseAppRowResult = BaseAppRow(9246);
        } else {
          tmp6 = cResult[4];
        }
        let bot = application.bot;
        let id;
        if (bot != null) {
          id = bot.id;
        }
        if (cResult[5] !== id) {
          const bot2 = application.bot;
          let id1;
          if (bot2 != null) {
            id1 = bot2.id;
          }
          class T {
            constructor() {
              bot = application.bot;
              id = undefined;
              tmp = closure_1(closure_2[9]);
              if (bot != null) {
                id = bot.id;
              }
              if (id == null) {
                id = EMPTY_STRING_SNOWFLAKE_ID;
              }
              tmpResult = tmp(id);
              return;
            }
          }
          cResult[5] = id1;
          cResult[6] = T;
          let tmp10 = T;
        } else {
          tmp10 = cResult[6];
        }
        const bot3 = application.bot;
        let id2;
        if (bot3 != null) {
          id2 = bot3.id;
        }
        if (cResult[7] !== id2) {
          const items = [id2];
          class T {
            constructor() {
              bot = application.bot;
              id = undefined;
              tmp = closure_1(closure_2[9]);
              if (bot != null) {
                id = bot.id;
              }
              if (id == null) {
                id = EMPTY_STRING_SNOWFLAKE_ID;
              }
              tmpResult = tmp(id);
              return;
            }
          }
          cResult[8] = items;
          let tmp13 = items;
        } else {
          tmp13 = cResult[8];
        }
        const effect = noop.useEffect(tmp10, tmp13);
        if (cResult[9] === application.bot) {
          if (cResult[10] === application.icon) {
            if (cResult[11] === application.id) {
              let tmp16 = cResult[12];
            }
            if (cResult[13] === application) {
              if (cResult[14] === tmp6) {
                if (cResult[15] === tmp16) {
                  if (cResult[16] === isFirst) {
                    if (cResult[17] === isLandscape) {
                      if (cResult[18] === isLast) {
                        if (cResult[19] === onPress) {
                          if (cResult[20] === overrideImageUrl) {
                            if (cResult[21] === tmp4) {
                              if (cResult[22] === style) {
                                if (cResult[23] === tmp3) {
                                  return cResult[24];
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (isLandscape) {
              BaseAppRow = BaseAppRow(11755).BaseAppRow;
              obj = { application: null, iconSource: null, onPress: null, isFirstRow: null, isLastRow: null };
              class T {
                constructor() {
                  bot = application.bot;
                  id = undefined;
                  tmp = closure_1(closure_2[9]);
                  if (bot != null) {
                    id = bot.id;
                  }
                  if (id == null) {
                    id = EMPTY_STRING_SNOWFLAKE_ID;
                  }
                  tmpResult = tmp(id);
                  return;
                }
              }
              obj.iconSource = tmp16;
              obj.onPress = onPress;
              obj.isFirstRow = isFirst;
              obj.isLastRow = isLast;
              let tmp19Result2 = closure_6(BaseAppRow, obj);
            } else {
              const items1 = [tmp3.container, ,];
              class T {
                constructor() {
                  bot = application.bot;
                  id = undefined;
                  tmp = closure_1(closure_2[9]);
                  if (bot != null) {
                    id = bot.id;
                  }
                  if (id == null) {
                    id = EMPTY_STRING_SNOWFLAKE_ID;
                  }
                  tmpResult = tmp(id);
                  return;
                }
              }
              let num12 = 8;
              if (isFirst) {
                num12 = 0;
              }
              const obj3 = { marginTop: num12, marginBottom: null };
              const obj4 = { style: null, onPress: null, children: null };
              obj3.marginBottom = num11;
              items1[1] = obj3;
              items1[2] = style;
              obj4.style = items1;
              obj4.onPress = onPress;
              const obj7 = { style: tmp3.banner, children: null };
              const obj8 = {
                applicationBot: application.bot,
                isActivity: null,
                applicationId: null,
                applicationIcon: null,
                overrideImageUrl: null,
              };
              const tmp23 = RecommendationsBannerDefault;
              obj8.isActivity = BaseAppRow(9246).isActivityApp(application);
              ({ id: obj10.applicationId, icon } = application);
              obj8.applicationIcon = icon;
              obj8.overrideImageUrl = overrideImageUrl;
              const items2 = [closure_6(tmp23, obj8)];
              if (tmp4) {
                const obj9 = { style: tmp3.notifsContainer, children: null };
                const obj11 = { labelType: null, replacementStyles: null };
                class T {
                  constructor() {
                    bot = application.bot;
                    id = undefined;
                    tmp = closure_1(closure_2[9]);
                    if (bot != null) {
                      id = bot.id;
                    }
                    if (id == null) {
                      id = EMPTY_STRING_SNOWFLAKE_ID;
                    }
                    tmpResult = tmp(id);
                    return;
                  }
                }
                obj11.replacementStyles = tmp3.badge;
                const items3 = [closure_6(ActivityShelfBadgeDefault, obj11)];
                let tmp21Result = tmp4;
                if (tmp4) {
                  const obj12 = { style: tmp3.promotedLabelWrapper, children: null };
                  const obj13 = { variant: "text-xxs/medium", color: "mobile-text-heading-primary", children: null };
                  class T {
                    constructor() {
                      bot = application.bot;
                      id = undefined;
                      tmp = closure_1(closure_2[9]);
                      if (bot != null) {
                        id = bot.id;
                      }
                      if (id == null) {
                        id = EMPTY_STRING_SNOWFLAKE_ID;
                      }
                      tmpResult = tmp(id);
                      return;
                    }
                  }
                  const intl = BaseAppRow(1126).intl;
                  obj13.children = intl.string(BaseAppRow(1126).t["/eVltv"]);
                  obj12.children = closure_6(tmp26, obj13);
                  tmp21Result = closure_6(View, obj12);
                }
                items3[1] = tmp21Result;
                obj9.children = items3;
                let tmp19Result = closure_7(View, obj9);
              } else {
                tmp19Result = null;
              }
              items2[1] = tmp19Result;
              obj7.children = items2;
              const items4 = [closure_7(View, obj7)];
              const obj14 = { style: tmp3.appDetailsContainer, children: null };
              if (null != tmp16) {
                const obj15 = { iconSource: tmp16, iconSize: 36, wrapperStyle: tmp3.appIconContainer };
                class T {
                  constructor() {
                    bot = application.bot;
                    id = undefined;
                    tmp = closure_1(closure_2[9]);
                    if (bot != null) {
                      id = bot.id;
                    }
                    if (id == null) {
                      id = EMPTY_STRING_SNOWFLAKE_ID;
                    }
                    tmpResult = tmp(id);
                    return;
                  }
                }
              }
              const items5 = [null != tmp16, ,];
              const obj16 = { style: tmp3.appDetails, children: null };
              const obj17 = {
                variant: "heading-lg/semibold",
                color: "mobile-text-heading-primary",
                lineClamp: 1,
                children: application.name,
              };
              const items6 = [closure_6(BaseAppRow(5088).Text, obj17)];
              const obj18 = {
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 1,
                children: application.description,
              };
              items6[1] = closure_6(BaseAppRow(5088).Text, obj18);
              obj16.children = items6;
              items5[1] = closure_7(View, obj16);
              items5[2] = closure_6(BaseAppRow(6188).TableRowArrow, {});
              obj14.children = items5;
              items4[1] = closure_7(View, obj14);
              obj4.children = items4;
              tmp19Result2 = closure_7(BaseAppRow(6184).PressableOpacity, obj4);
              const BaseAppRowResult1 = BaseAppRow(9246);
            }
            class T {
              constructor() {
                bot = application.bot;
                id = undefined;
                tmp = closure_1(closure_2[9]);
                if (bot != null) {
                  id = bot.id;
                }
                if (id == null) {
                  id = EMPTY_STRING_SNOWFLAKE_ID;
                }
                tmpResult = tmp(id);
                return;
              }
            }
            cResult[13] = application;
            cResult[14] = tmp6;
            cResult[15] = tmp16;
            cResult[16] = isFirst;
            cResult[17] = isLandscape;
            cResult[18] = isLast;
            cResult[19] = onPress;
            cResult[20] = overrideImageUrl;
            cResult[21] = tmp4;
            cResult[22] = style;
            cResult[23] = tmp3;
            cResult[24] = tmp19Result2;
          }
        }
        ({ id: obj6.id, icon: obj6.icon, bot: obj6.bot } = application);
        const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({
          id: null,
          icon: null,
          bot: null,
          botIconFirst: true,
        });
        cResult[9] = application.bot;
        cResult[10] = application.icon;
        cResult[11] = application.id;
        cResult[12] = applicationIconSource;
        tmp16 = applicationIconSource;
        const obj19 = { id: null, icon: null, bot: null, botIconFirst: true };
      }
      let result = tmp2;
      if (!(undefined !== showsPromoted && showsPromoted)) {
        result = BaseAppRow(9246).isPromotedApplication(application);
        const BaseAppRowResult2 = BaseAppRow(9246);
      }
      cResult[0] = application;
      cResult[1] = undefined !== showsPromoted && showsPromoted;
      cResult[2] = result;
      tmp4 = result;
      const obj2 = application(576);
    }
  : function RecommendationsBannerCard(application) {
      application = application.application;
      ({ onPress, isFirst, isLast, showsPromoted } = application);
      ({ style, isLandscape } = application);
      if (showsPromoted === undefined) {
        showsPromoted = false;
      }
      const tmp = closure_8();
      if (!showsPromoted) {
        showsPromoted = application(9246).isPromotedApplication(application);
        const obj = application(9246);
      }
      const shelfBadgeTypeIfActive = application(9246).getShelfBadgeTypeIfActive(application);
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
      const obj2 = application(9246);
      const applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({
        id: application.id,
        icon: application.icon,
        bot: application.bot,
        botIconFirst: true,
      });
      if (isLandscape) {
        const obj5 = {
          application,
          iconSource: applicationIconSource,
          onPress,
          isFirstRow: isFirst,
          isLastRow: isLast,
        };
        let tmp12Result2 = closure_6(tmp4(11755).BaseAppRow, obj5);
      } else {
        const items1 = [tmp.container, ,];
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
        const obj10 = {
          applicationBot: application.bot,
          isActivity: null,
          applicationId: null,
          applicationIcon: null,
          overrideImageUrl: null,
        };
        const tmp10Result = RecommendationsBannerDefault;
        obj10.isActivity = tmp4(9246).isActivityApp(application);
        ({ id: obj8.applicationId, icon } = application);
        obj10.applicationIcon = icon;
        obj10.overrideImageUrl = application.overrideImageUrl;
        const items2 = [closure_6(tmp10Result, obj10)];
        if (showsPromoted) {
          const obj11 = { style: tmp.notifsContainer, children: null };
          const obj12 = { labelType: shelfBadgeTypeIfActive, replacementStyles: tmp.badge };
          const items3 = [closure_6(ActivityShelfBadgeDefault, obj12)];
          if (showsPromoted) {
            const obj13 = { style: tmp.promotedLabelWrapper, children: null };
            const obj14 = { variant: "text-xxs/medium", color: "mobile-text-heading-primary", children: null };
            const intl = tmp4(1126).intl;
            obj14.children = intl.string(tmp4(1126).t["/eVltv"]);
            obj13.children = closure_6(tmp4(5088).Text, obj14);
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
        const items4 = [closure_7(View, obj9)];
        const obj15 = { style: tmp.appDetailsContainer, children: null };
        let tmp14Result = null != applicationIconSource;
        if (tmp14Result) {
          const obj16 = { iconSource: applicationIconSource, iconSize: 36, wrapperStyle: tmp.appIconContainer };
          tmp14Result = closure_6(EntityBorderAppIconDefault, obj16);
        }
        const items5 = [tmp14Result, ,];
        const obj17 = { style: tmp.appDetails, children: null };
        const obj18 = {
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: application.name,
        };
        const items6 = [closure_6(tmp4(5088).Text, obj18)];
        const obj19 = {
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: application.description,
        };
        items6[1] = closure_6(tmp4(5088).Text, obj19);
        obj17.children = items6;
        items5[1] = closure_7(View, obj17);
        items5[2] = closure_6(tmp4(6188).TableRowArrow, {});
        obj15.children = items5;
        items4[1] = closure_7(View, obj15);
        obj7.children = items4;
        tmp12Result2 = closure_7(tmp4(6184).PressableOpacity, obj7);
        const tmp4Result = tmp4(9246);
      }
      return tmp12Result2;
    };
