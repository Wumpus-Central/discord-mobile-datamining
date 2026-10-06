// discord_app/modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx
import react_native from "../../../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../../Constants.tsx";
import AvatarUtilsDefault from "../../../../../../utils/AvatarUtils.tsx";
import maybeFetchUserProfileDefault from "../../../../../user_profile/maybeFetchUserProfile.tsx";
import EntityBorderAppIconDefault from "../../../base_components/EntityBorderAppIcon.tsx";
import ActivityShelfBadgeDefault from "../../../../../activities/native/ActivityShelfBadge.tsx";
import RecommendationsBannerDefault from "RecommendationsBanner.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let rect;
const View = react_native.View;
const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  banner: { width: "100%", height: 106, overflow: "hidden" },
  appDetailsContainer: obj3,
  appDetails: obj4,
  appIconContainer: { flexShrink: 0 },
  notifsContainer: rect,
  badge: {},
  promotedLabelWrapper: obj5,
};
obj2 = {
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_APP_LAUNCHER_CARD_DEFAULT,
  width: "100%",
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj3 = {
  padding: nativeDefault.space.PX_16,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
obj4 = { marginLeft: nativeDefault.space.PX_16, flexDirection: "column", flexGrow: 1, flexShrink: 1 };
rect = {
  position: "absolute",
  display: "flex",
  gap: nativeDefault.space.PX_4,
  right: nativeDefault.space.PX_8,
  top: nativeDefault.space.PX_8,
  alignItems: "flex-end",
};
obj5 = {
  paddingVertical: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  borderRadius: nativeDefault.radii.lg,
};
let closure_8 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let application;
      let icon;
      let intl;
      let isFirst;
      let isLandscape;
      let isLast;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj13;
      let onPress;
      let overrideImageUrl;
      let showsPromoted;
      let style;
      let tmpResult3;
      const obj = application(576);
      const cResult = obj.c(25);
      ({ style, application } = arg0);
      ({ onPress, isFirst, isLast, isLandscape, showsPromoted, overrideImageUrl } = arg0);
      const tmp5 = closure_8();
      if (cResult[0] === application) {
        let tmp6;
        let tmp8;
        let tmp13;
        let tmp16;
        if (cResult[1] === (undefined !== showsPromoted && showsPromoted)) {
          tmp6 = cResult[2];
        }
        if (cResult[3] !== application) {
          const tmpResult = application(8826);
          const shelfBadgeTypeIfActive = tmpResult.getShelfBadgeTypeIfActive(application);
          cResult[3] = application;
          cResult[4] = shelfBadgeTypeIfActive;
          tmp8 = shelfBadgeTypeIfActive;
        } else {
          tmp8 = cResult[4];
        }
        let bot = application.bot;
        let id;
        const tmp10 = cResult[5];
        if (bot != null) {
          id = bot.id;
        }
        if (tmp10 !== id) {
          const bot2 = application.bot;
          let id1;
          if (bot2 != null) {
            id1 = bot2.id;
          }
          class S {
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
          cResult[6] = S;
          tmp13 = S;
        } else {
          tmp13 = cResult[6];
        }
        const bot3 = application.bot;
        let id2;
        if (bot3 != null) {
          id2 = bot3.id;
        }
        if (cResult[7] !== id2) {
          const items = [id2];
          class S {
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
          tmp16 = items;
        } else {
          tmp16 = cResult[8];
        }
        const effect = react.useEffect(tmp13, tmp16);
        if (cResult[9] === application.bot) {
          if (cResult[10] === application.icon) {
            let tmp19;
            let tmp23Result2;
            if (cResult[11] === application.id) {
              tmp19 = cResult[12];
            }
            if (cResult[13] === application) {
              if (cResult[14] === tmp8) {
                if (cResult[15] === tmp19) {
                  if (cResult[16] === isFirst) {
                    if (cResult[17] === isLandscape) {
                      if (cResult[18] === isLast) {
                        if (cResult[19] === onPress) {
                          if (cResult[20] === overrideImageUrl) {
                            if (cResult[21] === tmp6) {
                              if (cResult[22] === style) {
                                let tmp22;
                                if (cResult[23] === tmp5) {
                                  tmp22 = cResult[24];
                                }
                                return tmp22;
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
              const obj2 = { application, iconSource: null, onPress, isFirstRow: isFirst, isLastRow: isLast };
              class S {
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
              tmp23Result2 = closure_6(application(11708).BaseAppRow, obj2);
            } else {
              let tmp23Result;
              const items1 = [tmp5.container, ,];
              class S {
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
              const PressableOpacity = application(5916).PressableOpacity;
              if (isFirst) {
                num12 = 0;
              }
              const obj3 = { marginTop: num12, marginBottom: num11 };
              const obj6 = { style: items1, onPress, children: items4 };
              items1[1] = obj3;
              items1[2] = style;
              const obj7 = { style: tmp5.banner, children: items2 };
              const obj8 = {
                applicationBot: application.bot,
                isActivity: tmpResult3.isActivityApp(application),
                applicationId: null,
                applicationIcon: icon,
                overrideImageUrl,
              };
              const tmp27 = RecommendationsBannerDefault;
              ({ id: obj9.applicationId, icon } = application);
              tmpResult3 = application(8826);
              items2 = [closure_6(tmp27, obj8)];
              if (tmp6) {
                const obj10 = { style: tmp5.notifsContainer, children: items3 };
                const obj11 = { labelType: null, replacementStyles: tmp5.badge };
                class S {
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
                items3 = [closure_6(ActivityShelfBadgeDefault, obj11)];
                let tmp25Result = tmp6;
                if (tmp25Result) {
                  const obj12 = { style: tmp5.promotedLabelWrapper, children: closure_6(tmp30, obj13) };
                  obj13 = {
                    variant: "text-xxs/medium",
                    color: "mobile-text-heading-primary",
                    children: intl.string(application(1126).t["/eVltv"]),
                  };
                  class S {
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
                  intl = application(1126).intl;
                  tmp25Result = closure_6(View, obj12);
                }
                items3[1] = tmp25Result;
                tmp23Result = closure_7(View, obj10);
              } else {
                tmp23Result = null;
              }
              items2[1] = tmp23Result;
              items4 = [closure_7(View, obj7)];
              const obj14 = { style: tmp5.appDetailsContainer, children: items5 };
              if (null != tmp19) {
                class S {
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
              items5 = [null != tmp19, ,];
              const obj16 = { style: tmp5.appDetails, children: items6 };
              const obj17 = {
                variant: "heading-lg/semibold",
                color: "mobile-text-heading-primary",
                lineClamp: 1,
                children: application.name,
              };
              items6 = [closure_6(application(4892).Text, obj17)];
              const obj18 = {
                variant: "text-sm/normal",
                color: "text-subtle",
                lineClamp: 1,
                children: application.description,
              };
              items6[1] = closure_6(application(4892).Text, obj18);
              items5[1] = closure_7(View, obj16);
              items5[2] = closure_6(application(6007).TableRowArrow, {});
              items4[1] = closure_7(View, obj14);
              tmp23Result2 = closure_7(PressableOpacity, obj6);
            }
            class S {
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
            cResult[14] = tmp8;
            cResult[15] = tmp19;
            cResult[16] = isFirst;
            cResult[17] = isLandscape;
            cResult[18] = isLast;
            cResult[19] = onPress;
            cResult[20] = overrideImageUrl;
            cResult[21] = tmp6;
            cResult[22] = style;
            cResult[23] = tmp5;
            cResult[24] = tmp23Result2;
            tmp22 = tmp23Result2;
          }
        }
        const obj19 = { id: null, icon: null, bot: null, botIconFirst: true };
        ({ id: obj5.id, icon: obj5.icon, bot: obj5.bot } = application);
        const obj4 = AvatarUtilsDefault;
        const applicationIconSource = obj4.getApplicationIconSource(obj19);
        cResult[9] = application.bot;
        cResult[10] = application.icon;
        cResult[11] = application.id;
        cResult[12] = applicationIconSource;
        tmp19 = applicationIconSource;
      }
      let result = tmp4;
      if (!result) {
        const tmpResult4 = application(8826);
        result = tmpResult4.isPromotedApplication(application);
      }
      cResult[0] = application;
      cResult[1] = undefined !== showsPromoted && showsPromoted;
      cResult[2] = result;
      tmp6 = result;
    }
  : (application) => {
      let Text;
      let icon;
      let intl;
      let isFirst;
      let isLandscape;
      let isLast;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let obj14;
      let onPress;
      let showsPromoted;
      let style;
      let tmp12Result2;
      let tmp4Result;
      application = application.application;
      ({ onPress, isFirst, isLast, showsPromoted } = application);
      ({ style, isLandscape } = application);
      if (showsPromoted === undefined) {
        showsPromoted = false;
      }
      const overrideImageUrl = application.overrideImageUrl;
      let tmp = closure_8();
      if (!showsPromoted) {
        const obj = application(8826);
        showsPromoted = obj.isPromotedApplication(application);
      }
      const obj2 = application(8826);
      const shelfBadgeTypeIfActive = obj2.getShelfBadgeTypeIfActive(application);
      let bot = application.bot;
      let id;
      const useEffect = react.useEffect;
      if (bot != null) {
        id = bot.id;
      }
      const items = [id];
      const effect = useEffect(() => {
        const bot = application.bot;
        let id;
        const tmp = maybeFetchUserProfileDefault;
        if (bot != null) {
          id = bot.id;
        }
        if (id == null) {
          id = EMPTY_STRING_SNOWFLAKE_ID;
        }
        tmp(id);
      }, items);
      const obj3 = AvatarUtilsDefault;
      const obj4 = { id: application.id, icon: application.icon, bot: application.bot, botIconFirst: true };
      const applicationIconSource = obj3.getApplicationIconSource(obj4);
      if (isLandscape) {
        const obj5 = {
          application,
          iconSource: applicationIconSource,
          onPress,
          isFirstRow: isFirst,
          isLastRow: isLast,
        };
        tmp12Result2 = closure_6(tmp4(11708).BaseAppRow, obj5);
      } else {
        let tmp12Result;
        const items1 = [tmp.container, ,];
        let num = 8;
        let num2 = 8;
        const PressableOpacity = tmp4(5916).PressableOpacity;
        if (isFirst) {
          num2 = 0;
        }
        const obj6 = { marginTop: num2, marginBottom: num };
        if (isLast) {
          num = 0;
        }
        const obj7 = { style: items1, onPress, children: items4 };
        items1[1] = obj6;
        items1[2] = style;
        const obj9 = { style: tmp.banner, children: items2 };
        const obj10 = {
          applicationBot: application.bot,
          isActivity: tmp4Result.isActivityApp(application),
          applicationId: null,
          applicationIcon: icon,
          overrideImageUrl,
        };
        const tmp10Result = RecommendationsBannerDefault;
        ({ id: obj8.applicationId, icon } = application);
        tmp4Result = application(8826);
        items2 = [closure_6(tmp10Result, obj10)];
        if (showsPromoted) {
          const obj11 = { style: tmp.notifsContainer, children: items3 };
          const obj12 = { labelType: shelfBadgeTypeIfActive, replacementStyles: tmp.badge };
          items3 = [closure_6(ActivityShelfBadgeDefault, obj12)];
          if (showsPromoted) {
            const obj13 = { style: tmp.promotedLabelWrapper, children: closure_6(Text, obj14) };
            obj14 = {
              variant: "text-xxs/medium",
              color: "mobile-text-heading-primary",
              children: intl.string(application(1126).t["/eVltv"]),
            };
            Text = tmp4(4892).Text;
            intl = tmp4(1126).intl;
            showsPromoted = closure_6(View, obj13);
          }
          items3[1] = showsPromoted;
          tmp12Result = closure_7(View, obj11);
        } else {
          tmp12Result = null;
        }
        items2[1] = tmp12Result;
        items4 = [closure_7(View, obj9)];
        let tmp14Result = null != applicationIconSource;
        const obj15 = { style: tmp.appDetailsContainer, children: items5 };
        if (tmp14Result) {
          const obj16 = { iconSource: applicationIconSource, iconSize: 36, wrapperStyle: tmp.appIconContainer };
          tmp14Result = closure_6(EntityBorderAppIconDefault, obj16);
        }
        items5 = [tmp14Result, ,];
        const obj17 = { style: tmp.appDetails, children: items6 };
        const obj18 = {
          variant: "heading-lg/semibold",
          color: "mobile-text-heading-primary",
          lineClamp: 1,
          children: application.name,
        };
        items6 = [closure_6(application(4892).Text, obj18)];
        const obj19 = {
          variant: "text-sm/normal",
          color: "text-subtle",
          lineClamp: 1,
          children: application.description,
        };
        items6[1] = closure_6(application(4892).Text, obj19);
        items5[1] = closure_7(View, obj17);
        items5[2] = closure_6(application(6007).TableRowArrow, {});
        items4[1] = closure_7(View, obj15);
        tmp12Result2 = closure_7(PressableOpacity, obj7);
      }
      return tmp12Result2;
    };
let result = size.fileFinishedImporting(
  "modules/app_launcher/native/screens/home/recommendations/RecommendationsBannerCard.tsx",
);

export default tmp4;
