// discord_app/modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl8 from "../../../../intl/index.native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import CircleCheckIcon2 from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import CircleXIcon2 from "../../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ActionSheetConstants from "../../../action_sheet/native/ActionSheetConstants.tsx";
import Constants from "../../../user_profile/native/Constants.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import HourglassIcon2 from "../../../../design/components/Icon/native/redesign/generated/HourglassIcon.tsx";
import openJoinRequestActionSheetDefault from "../openJoinRequestActionSheet.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
const View = react_native.View;
const ACTION_SHEET_MAX_WIDTH = ActionSheetConstants.ACTION_SHEET_MAX_WIDTH;
const paddingTop = Constants.PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  responsesContainer: obj2,
  formQuestion: { marginBottom: 8 },
  formResponse: obj3,
  formResponseMargin: { marginBottom: 16 },
  termsField: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  statusContainer: obj4,
  statusRow: { flexDirection: "row", alignItems: "center", gap: 12 },
  actionedInfo: { flexDirection: "row", gap: 8, alignItems: "center" },
  dot: size,
  accountInfoLabel: { marginTop: 16, marginHorizontal: 16, marginBottom: 8 },
  accountInfoContainer: obj5,
  accountInfoRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 },
  divider: size1,
};
obj2 = { paddingHorizontal: 16, paddingTop: 24, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
createStyles = createStyles.createStyles;
obj3 = {
  padding: 12,
  width: "100%",
  borderRadius: nativeDefault.radii.md,
  lineHeight: 20,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
};
obj4 = {
  flexDirection: "column",
  gap: 12,
  paddingHorizontal: 16,
  paddingVertical: 12,
  marginTop: 8,
  marginBottom: 16,
  marginHorizontal: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.md,
};
size = {
  height: 4,
  width: 4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.TEXT_DEFAULT,
};
obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginHorizontal: 16,
  marginBottom: 16,
  borderRadius: nativeDefault.radii.md,
};
size1 = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_11 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (user) => {
        let avatarBackground;
        let containerBackground;
        let displayProfile;
        let gradientFallbackBackground;
        let items2;
        let joinRequest;
        let primaryColor;
        let secondaryColor;
        let statusBackground;
        let theme;
        const tmp = user;
        let obj = user(576);
        const cResult = obj.c(47);
        user = user.user;
        ({ displayProfile, joinRequest } = user);
        const tmp5 = joinRequest(7913)();
        const tmp6 = joinRequest(7902)(ACTION_SHEET_MAX_WIDTH);
        if (cResult[0] === displayProfile) {
          let tmp7;
          if (cResult[1] === user) {
            tmp7 = cResult[2];
          }
          ({ theme, primaryColor, secondaryColor } = joinRequest(7899)(tmp7));
          joinRequest(7899)(tmp7);
          if (cResult[3] === primaryColor) {
            if (cResult[4] === secondaryColor) {
              let tmp9;
              if (cResult[5] === theme) {
                tmp9 = cResult[6];
              }
              const tmpResult = tmp(7910);
              const userProfileColors = tmpResult.useUserProfileColors(tmp9);
              ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } =
                userProfileColors);
              if (cResult[7] === joinRequest) {
                let tmp11;
                if (cResult[8] === user.id) {
                  tmp11 = cResult[9];
                }
                let tmp12 = null;
                if (null != user) {
                  if (cResult[10] === tmp6) {
                    if (cResult[11] === displayProfile) {
                      let tmp13;
                      let tmp16;
                      if (cResult[12] === user) {
                        tmp13 = cResult[13];
                      }
                      if (cResult[14] !== statusBackground) {
                        const obj2 = { backgroundColor: statusBackground };
                        cResult[14] = statusBackground;
                        cResult[15] = obj2;
                        tmp16 = obj2;
                      } else {
                        tmp16 = cResult[15];
                      }
                      if (cResult[16] === avatarBackground) {
                        if (cResult[17] === tmp11) {
                          if (cResult[18] === tmp16) {
                            let tmp17;
                            let tmp21;
                            if (cResult[19] === user) {
                              tmp17 = cResult[20];
                            }
                            const _Symbol = Symbol;
                            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj3 = { paddingTop, paddingBottom: 0 };
                              cResult[21] = obj3;
                              tmp21 = obj3;
                            } else {
                              tmp21 = cResult[21];
                            }
                            if (cResult[22] === tmp5.profileContent) {
                              let tmp23;
                              if (cResult[23] === tmp5.profileContentWrapper) {
                                tmp23 = cResult[24];
                              }
                              if (cResult[25] === containerBackground) {
                                if (cResult[26] === displayProfile) {
                                  let tmp24;
                                  if (cResult[27] === user) {
                                    tmp24 = cResult[28];
                                  }
                                  if (cResult[29] !== user) {
                                    const obj4 = { user };
                                    cResult[29] = user;
                                    cResult[30] = closure_8(joinRequest(12949), obj4);
                                    closure_8(joinRequest(12949), obj4);
                                    class S {
                                      constructor() {
                                        obj = {
                                          userId: user.id,
                                          onClose() {
                                            /* body not rendered: F146088 */
                                          },
                                        };
                                        tmp = closure_1(closure_2[14])(obj);
                                        return;
                                      }
                                    }
                                  }
                                  if (cResult[31] === tmp5.primaryInfo) {
                                    if (cResult[32] === tmp27) {
                                      let tmp30;
                                      if (cResult[33] === tmp24) {
                                        tmp30 = cResult[34];
                                      }
                                      if (cResult[35] === gradientFallbackBackground) {
                                        if (cResult[36] === primaryColor) {
                                          if (cResult[37] === secondaryColor) {
                                            if (cResult[38] === tmp30) {
                                              let tmp34;
                                              if (cResult[39] === tmp23) {
                                                tmp34 = cResult[40];
                                              }
                                              if (cResult[41] === tmp34) {
                                                let tmp37;
                                                if (cResult[42] === tmp17) {
                                                  tmp37 = cResult[43];
                                                }
                                                if (cResult[44] === tmp37) {
                                                  let tmp41;
                                                  if (cResult[45] === tmp13) {
                                                    tmp41 = cResult[46];
                                                  }
                                                  tmp12 = tmp41;
                                                }
                                                const items = [,];
                                                const obj5 = { children: null };
                                                items[0] = tmp13;
                                                items[1] = tmp37;
                                                class S {
                                                  constructor() {
                                                    obj = {
                                                      userId: user.id,
                                                      onClose() {
                                                        /* body not rendered: F146088 */
                                                      },
                                                    };
                                                    tmp = closure_1(closure_2[14])(obj);
                                                    return;
                                                  }
                                                }
                                                const tmp44 = closure_9(closure_10, obj5);
                                                cResult[44] = tmp37;
                                                cResult[45] = tmp13;
                                                cResult[46] = tmp44;
                                                tmp41 = tmp44;
                                              }
                                              const items1 = [,];
                                              const obj6 = { children: null };
                                              items1[0] = tmp17;
                                              items1[1] = tmp34;
                                              class S {
                                                constructor() {
                                                  obj = {
                                                    userId: user.id,
                                                    onClose() {
                                                      /* body not rendered: F146088 */
                                                    },
                                                  };
                                                  tmp = closure_1(closure_2[14])(obj);
                                                  return;
                                                }
                                              }
                                              const tmp40 = closure_9(View, obj6);
                                              cResult[41] = tmp34;
                                              cResult[42] = tmp17;
                                              cResult[43] = tmp40;
                                              tmp37 = tmp40;
                                            }
                                          }
                                        }
                                      }
                                      const obj7 = {
                                        fallbackBackground: gradientFallbackBackground,
                                        primaryColor,
                                        secondaryColor,
                                        containerStyle: tmp23,
                                        children: null,
                                      };
                                      class S {
                                        constructor() {
                                          obj = {
                                            userId: user.id,
                                            onClose() {
                                              /* body not rendered: F146088 */
                                            },
                                          };
                                          tmp = closure_1(closure_2[14])(obj);
                                          return;
                                        }
                                      }
                                      const tmp36 = closure_8(joinRequest(10842), obj7);
                                      cResult[35] = gradientFallbackBackground;
                                      cResult[36] = primaryColor;
                                      cResult[37] = secondaryColor;
                                      cResult[38] = tmp30;
                                      cResult[39] = tmp23;
                                      cResult[40] = tmp36;
                                      tmp34 = tmp36;
                                    }
                                  }
                                  const obj8 = { style: tmp5.primaryInfo, children: items2 };
                                  items2 = [,];
                                  class S {
                                    constructor() {
                                      obj = {
                                        userId: user.id,
                                        onClose() {
                                          /* body not rendered: F146088 */
                                        },
                                      };
                                      tmp = closure_1(closure_2[14])(obj);
                                      return;
                                    }
                                  }
                                  items2[1] = tmp27;
                                  const tmp33 = closure_9(View, obj8);
                                  cResult[31] = tmp5.primaryInfo;
                                  cResult[32] = tmp27;
                                  cResult[33] = tmp24;
                                  cResult[34] = tmp33;
                                  tmp30 = tmp33;
                                }
                              }
                              const obj9 = {
                                user,
                                displayProfile,
                                badgeContainerBackground: containerBackground,
                                isPreviewingChanges: false,
                              };
                              const tmp26 = closure_8(tmp(12881).PrimaryInfo, obj9);
                              class S {
                                constructor() {
                                  obj = {
                                    userId: user.id,
                                    onClose() {
                                      /* body not rendered: F146088 */
                                    },
                                  };
                                  tmp = closure_1(closure_2[14])(obj);
                                  return;
                                }
                              }
                              cResult[25] = containerBackground;
                              cResult[26] = displayProfile;
                              cResult[27] = user;
                              cResult[28] = tmp26;
                              tmp24 = tmp26;
                            }
                            const items3 = [, ,];
                            class S {
                              constructor() {
                                obj = {
                                  userId: user.id,
                                  onClose() {
                                    /* body not rendered: F146088 */
                                  },
                                };
                                tmp = closure_1(closure_2[14])(obj);
                                return;
                              }
                            }
                            items3[1] = tmp5.profileContent;
                            items3[2] = tmp21;
                            cResult[22] = tmp5.profileContent;
                            cResult[23] = tmp5.profileContentWrapper;
                            cResult[24] = items3;
                            tmp23 = items3;
                          }
                        }
                      }
                      const obj10 = {
                        user,
                        disableStatus: true,
                        backgroundColor: avatarBackground,
                        statusStyle: tmp16,
                        onPress: null,
                      };
                      class S {
                        constructor() {
                          obj = {
                            userId: user.id,
                            onClose() {
                              /* body not rendered: F146088 */
                            },
                          };
                          tmp = closure_1(closure_2[14])(obj);
                          return;
                        }
                      }
                      const tmp19 = closure_8(joinRequest(7928), obj10);
                      cResult[16] = avatarBackground;
                      cResult[17] = tmp11;
                      cResult[18] = tmp16;
                      cResult[19] = user;
                      cResult[20] = tmp19;
                      tmp17 = tmp19;
                    }
                  }
                  const obj11 = { user, displayProfile, bannerHeight: tmp6 };
                  const tmp15 = closure_8(joinRequest(7918), obj11);
                  class S {
                    constructor() {
                      obj = {
                        userId: user.id,
                        onClose() {
                          /* body not rendered: F146088 */
                        },
                      };
                      tmp = closure_1(closure_2[14])(obj);
                      return;
                    }
                  }
                  cResult[11] = displayProfile;
                  cResult[12] = user;
                  cResult[13] = tmp15;
                  tmp13 = tmp15;
                }
                return tmp12;
              }
              class S {
                constructor() {
                  obj = {
                    userId: user.id,
                    onClose() {
                      /* body not rendered: F146088 */
                    },
                  };
                  tmp = closure_1(closure_2[14])(obj);
                  return;
                }
              }
              cResult[7] = joinRequest;
              cResult[8] = user.id;
              cResult[9] = S;
              tmp11 = S;
            }
          }
          const obj12 = { theme, primaryColor: null, secondaryColor };
          cResult[3] = primaryColor;
          cResult[4] = secondaryColor;
          cResult[5] = theme;
          cResult[6] = obj12;
          tmp9 = obj12;
        }
        const obj13 = { user, displayProfile };
        cResult[0] = displayProfile;
        cResult[1] = user;
        cResult[2] = obj13;
        tmp7 = obj13;
      }
    : (user) => {
        let avatarBackground;
        let containerBackground;
        let displayProfile;
        let gradientFallbackBackground;
        let items1;
        let items2;
        let items3;
        let items4;
        let joinRequest;
        let obj6;
        let obj9;
        let primaryColor;
        let secondaryColor;
        let statusBackground;
        let theme;
        user = user.user;
        ({ displayProfile, joinRequest } = user);
        const tmp3 = joinRequest(7913)();
        const tmp4 = joinRequest(7902)(ACTION_SHEET_MAX_WIDTH);
        ({ primaryColor, secondaryColor, theme } = joinRequest(7899)({ user, displayProfile }));
        joinRequest(7899)({ user, displayProfile });
        let obj = user(7910);
        const userProfileColors = obj.useUserProfileColors({ theme, primaryColor, secondaryColor });
        const items = [joinRequest, user.id];
        ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } = userProfileColors);
        let tmp9 = null;
        const tmp6 = user;
        if (null != user) {
          const obj2 = { children: items1 };
          const obj3 = { user, displayProfile, bannerHeight: tmp4 };
          items1 = [closure_8(joinRequest(7918), obj3)];
          const obj5 = {
            user,
            disableStatus: true,
            backgroundColor: avatarBackground,
            statusStyle: obj6,
            onPress: tmp8,
          };
          const obj4 = { children: items2 };
          obj6 = { backgroundColor: statusBackground };
          items2 = [closure_8(joinRequest(7928), obj5)];
          const obj7 = {
            fallbackBackground: gradientFallbackBackground,
            primaryColor,
            secondaryColor,
            containerStyle: items3,
            children: closure_9(View, obj9),
          };
          items3 = [, ,];
          ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
          const obj8 = { paddingTop, paddingBottom: 0 };
          items3[2] = obj8;
          obj9 = { style: tmp3.primaryInfo, children: items4 };
          items4 = [,];
          const obj10 = {
            user,
            displayProfile,
            badgeContainerBackground: containerBackground,
            isPreviewingChanges: false,
          };
          const tmpResult = joinRequest(10842);
          items4[0] = closure_8(tmp6(12881).PrimaryInfo, obj10);
          const obj11 = { user };
          items4[1] = closure_8(joinRequest(12949), obj11);
          items2[1] = closure_8(tmpResult, obj7);
          items1[1] = closure_9(View, obj4);
          tmp9 = closure_9(closure_10, obj2);
        }
        return tmp9;
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let handleOpenInterview;
      let interviewChannelId;
      let joinRequest;
      let label;
      let submitting;
      let tmp10;
      let tmp6;
      let tmp7;
      const tmp = interviewChannelId;
      const obj = interviewChannelId(576);
      const cResult = obj.c(11);
      ({ joinRequest, label } = arg0);
      interviewChannelId = joinRequest.interviewChannelId;
      const applicationStatus = joinRequest.applicationStatus;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== interviewChannelId) {
        const fn = function l() {
          const tmp2 = null != interviewChannelId && null != ChannelStore.getChannel(tmp);
          return tmp2;
        };
        const items1 = [interviewChannelId];
        cResult[1] = interviewChannelId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      const tmpResult3 = tmp(12299);
      const joinRequestButtonActions = tmpResult3.useJoinRequestButtonActions(joinRequest, interviewChannelId);
      ({ handleOpenInterview, submitting } = joinRequestButtonActions);
      const tmpResult4 = tmp(4701);
      if (!tmpResult4.isActionedApplicationStatus(applicationStatus)) {
        let tmp11;
        let tmp15;
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
          const ChatIcon = tmp(5855).ChatIcon;
          const tmp14 = closure_8(ChatIcon, obj2);
          cResult[4] = tmp14;
          tmp11 = tmp14;
        } else {
          tmp11 = cResult[4];
        }
        if (cResult[5] !== label) {
          let stringResult = label;
          if (label == null) {
            const intl = tmp(1126).intl;
            stringResult = intl.string(tmp(1126).t["2simqN"]);
          }
          cResult[5] = label;
          cResult[6] = stringResult;
          tmp15 = stringResult;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] === handleOpenInterview) {
          if (cResult[8] === submitting) {
            let tmp18;
            if (cResult[9] === tmp15) {
              tmp18 = cResult[10];
            }
            tmp10 = tmp18;
          }
        }
        const obj3 = {
          variant: "secondary",
          size: "md",
          icon: tmp11,
          text: tmp15,
          onPress: handleOpenInterview,
          disabled: submitting,
        };
        const tmp20 = closure_8(tmp(5594).Button, obj3);
        cResult[7] = handleOpenInterview;
        cResult[8] = submitting;
        cResult[9] = tmp15;
        cResult[10] = tmp20;
        tmp18 = tmp20;
      } else {
        tmp10 = null;
      }
      return tmp10;
    }
  : (arg0) => {
      let ChatIcon;
      let handleOpenInterview;
      let joinRequest;
      let label;
      let obj5;
      let submitting;
      let tmp6Result;
      ({ joinRequest, label } = arg0);
      const interviewChannelId = joinRequest.interviewChannelId;
      const tmp = interviewChannelId;
      const applicationStatus = joinRequest.applicationStatus;
      const items = [ChannelStore];
      const items1 = [interviewChannelId];
      const obj = interviewChannelId(504);
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          const tmp2 = null != interviewChannelId && null != ChannelStore.getChannel(tmp);
          return tmp2;
        },
        items1,
      );
      const obj2 = interviewChannelId(12299);
      const joinRequestButtonActions = obj2.useJoinRequestButtonActions(joinRequest, interviewChannelId);
      ({ handleOpenInterview, submitting } = joinRequestButtonActions);
      const obj3 = interviewChannelId(4701);
      if (!obj3.isActionedApplicationStatus(applicationStatus)) {
        const obj4 = {
          variant: "secondary",
          size: "md",
          icon: closure_8(ChatIcon, obj5),
          text: label,
          onPress: handleOpenInterview,
          disabled: submitting,
        };
        const Button = tmp(5594).Button;
        obj5 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
        ChatIcon = tmp(5855).ChatIcon;
        if (label == null) {
          const intl = tmp(1126).intl;
          label = intl.string(tmp(1126).t["2simqN"]);
        }
        tmp6Result = closure_8(Button, obj4);
      } else {
        tmp6Result = null;
      }
      return tmp6Result;
    };
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function (joinRequest) {
        let Text8;
        let actionedAt;
        let actionedByUser;
        let applicationStatus;
        let date;
        let date1;
        let dateFormat;
        let dateFormat2;
        let intl;
        let intl3;
        let intl5;
        let intl6;
        let items;
        let items1;
        let items2;
        let items3;
        let items4;
        let items5;
        let items6;
        let items7;
        let items8;
        let items9;
        let obj12;
        let obj19;
        let obj31;
        let obj4;
        let rejectionReason;
        const obj = react2;
        const cResult = obj.c(50);
        joinRequest = joinRequest.joinRequest;
        ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
        const interviewChannelId = joinRequest.interviewChannelId;
        const tmp4 = closure_11();
        if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
          if (null != interviewChannelId) {
            let first;
            let tmp84;
            let tmp88;
            let tmp92;
            let tmp94;
            const _Symbol5 = Symbol;
            const statusContainer = tmp4.statusContainer;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { size: "lg", color: nativeDefault.colors.STATUS_WARNING };
              const HourglassIcon = HourglassIcon2.HourglassIcon;
              const tmp83 = metroImportAll(HourglassIcon, obj2);
              cResult[0] = tmp83;
              first = tmp83;
            } else {
              first = cResult[0];
            }
            const _Symbol6 = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { children: metroImportAll(Text8, obj4) };
              obj4 = {
                variant: "text-md/medium",
                color: "mobile-text-heading-primary",
                children: intl6.string(intl8.t["Vr+7eO"]),
              };
              Text8 = Text_Text.Text;
              intl6 = intl8.intl;
              const tmp87 = metroImportAll(View, obj3);
              cResult[1] = tmp87;
              tmp84 = tmp87;
            } else {
              tmp84 = cResult[1];
            }
            if (cResult[2] !== tmp4.statusRow) {
              const obj5 = { style: tmp4.statusRow, children: items };
              items = [first, tmp84];
              const tmp91 = React4(View, obj5);
              cResult[2] = tmp4.statusRow;
              cResult[3] = tmp91;
              tmp88 = tmp91;
            } else {
              tmp88 = cResult[3];
            }
            const _Symbol7 = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const intl7 = intl8.intl;
              const stringResult = intl7.string(intl8.t.rcqdhN);
              cResult[4] = stringResult;
              tmp92 = stringResult;
            } else {
              tmp92 = cResult[4];
            }
            if (cResult[5] !== joinRequest) {
              const obj6 = { joinRequest, label: tmp92 };
              const tmp97 = metroImportAll(closure_13, obj6);
              cResult[5] = joinRequest;
              cResult[6] = tmp97;
              tmp94 = tmp97;
            } else {
              tmp94 = cResult[6];
            }
            if (cResult[7] === tmp4.statusContainer) {
              if (cResult[8] === tmp88) {
                let tmp98;
                if (cResult[9] === tmp94) {
                  tmp98 = cResult[10];
                }
                return tmp98;
              }
            }
            const obj7 = { style: statusContainer, children: items1 };
            items1 = [tmp88, tmp94];
            const tmp101 = React4(View, obj7);
            cResult[7] = tmp4.statusContainer;
            cResult[8] = tmp88;
            cResult[9] = tmp94;
            cResult[10] = tmp101;
            tmp98 = tmp101;
          }
        }
        if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          let tmp42;
          let tmp46;
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = {
              size: "lg",
              color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
              secondaryColor: nativeDefault.colors.WHITE,
            };
            const CircleXIcon = CircleXIcon2.CircleXIcon;
            const tmp45 = metroImportAll(CircleXIcon, obj8);
            cResult[11] = tmp45;
            tmp42 = tmp45;
          } else {
            tmp42 = cResult[11];
          }
          const _Symbol4 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj10 = {
              variant: "text-md/medium",
              color: "mobile-text-heading-primary",
              children: intl3.string(intl8.t.bSZkla),
            };
            const Text4 = Text_Text.Text;
            intl3 = intl8.intl;
            const tmp48 = metroImportAll(Text4, obj10);
            cResult[12] = tmp48;
            tmp46 = tmp48;
          } else {
            tmp46 = cResult[12];
          }
          if (cResult[13] === actionedAt) {
            if (cResult[14] === actionedByUser) {
              if (cResult[15] === tmp4.actionedInfo) {
                let tmp49;
                let tmp59;
                if (cResult[16] === tmp4.dot) {
                  tmp49 = cResult[17];
                }
                if (cResult[18] !== rejectionReason) {
                  let tmp61 = null != rejectionReason;
                  if (tmp61) {
                    const obj11 = {
                      variant: "text-sm/normal",
                      color: "text-default",
                      children: intl5.formatToPlainString(intl8.t.fU5PPM, obj12),
                    };
                    const Text7 = Text_Text.Text;
                    intl5 = intl8.intl;
                    obj12 = { rejectionReason };
                    tmp61 = metroImportAll(Text7, obj11);
                  }
                  cResult[18] = rejectionReason;
                  cResult[19] = tmp61;
                  tmp59 = tmp61;
                } else {
                  tmp59 = cResult[19];
                }
                if (cResult[20] === tmp49) {
                  let tmp63;
                  if (cResult[21] === tmp59) {
                    tmp63 = cResult[22];
                  }
                  if (cResult[23] === tmp4.statusRow) {
                    let tmp67;
                    let tmp71;
                    if (cResult[24] === tmp63) {
                      tmp67 = cResult[25];
                    }
                    if (cResult[26] !== joinRequest) {
                      const obj13 = { joinRequest };
                      const tmp74 = metroImportAll(closure_13, obj13);
                      cResult[26] = joinRequest;
                      cResult[27] = tmp74;
                      tmp71 = tmp74;
                    } else {
                      tmp71 = cResult[27];
                    }
                    if (cResult[28] === tmp4.statusContainer) {
                      if (cResult[29] === tmp67) {
                        let tmp75;
                        if (cResult[30] === tmp71) {
                          tmp75 = cResult[31];
                        }
                        return tmp75;
                      }
                    }
                    const obj14 = { style: tmp4.statusContainer, children: items2 };
                    items2 = [tmp67, tmp71];
                    const tmp78 = React4(View, obj14);
                    cResult[28] = tmp4.statusContainer;
                    cResult[29] = tmp67;
                    cResult[30] = tmp71;
                    cResult[31] = tmp78;
                    tmp75 = tmp78;
                  }
                  const obj15 = { style: tmp4.statusRow, children: items3 };
                  items3 = [tmp42, tmp63];
                  const tmp70 = React4(View, obj15);
                  cResult[23] = tmp4.statusRow;
                  cResult[24] = tmp63;
                  cResult[25] = tmp70;
                  tmp67 = tmp70;
                }
                const obj16 = { children: items4 };
                items4 = [tmp46, tmp49, tmp59];
                const tmp66 = React4(View, obj16);
                cResult[20] = tmp49;
                cResult[21] = tmp59;
                cResult[22] = tmp66;
                tmp63 = tmp66;
              }
            }
          }
          let tmp52Result = null;
          if (null != actionedByUser) {
            tmp52Result = null;
            if (null != actionedAt) {
              const obj17 = { style: tmp4.actionedInfo, children: items5 };
              const Text5 = Text_Text.Text;
              const intl4 = intl8.intl;
              const formatToPlainString2 = intl4.formatToPlainString;
              let username2 = actionedByUser.global_name;
              const qnimbL2 = intl8.t.qnimbL;
              if (username2 == null) {
                username2 = actionedByUser.username;
              }
              const obj18 = {
                variant: "text-sm/normal",
                color: "text-default",
                children: formatToPlainString2(qnimbL2, obj19),
              };
              obj19 = { username: username2 };
              items5 = [metroImportAll(Text5, obj18), ,];
              const obj20 = { style: tmp4.dot };
              items5[1] = metroImportAll(View, obj20);
              const obj22 = { variant: "text-sm/normal", color: "text-default", children: dateFormat2(date, "LL") };
              const Text6 = Text_Text.Text;
              const _Date2 = Date;
              dateFormat2 = DateUtils.dateFormat;
              DateUtils;
              const self3 = this;
              const self4 = this;
              const obj21 = SnowflakeUtilsDefault;
              date = new Date(obj21.extractTimestamp(actionedAt));
              items5[2] = metroImportAll(Text6, obj22);
              tmp52Result = React4(View, obj17);
            }
          }
          cResult[13] = actionedAt;
          cResult[14] = actionedByUser;
          cResult[15] = tmp4.actionedInfo;
          cResult[16] = tmp4.dot;
          cResult[17] = tmp52Result;
          tmp49 = tmp52Result;
        } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
          let tmp8;
          let tmp12;
          const _Symbol = Symbol;
          if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
            const obj23 = {
              size: "lg",
              color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
              secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
            };
            const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
            const tmp11 = metroImportAll(CircleCheckIcon, obj23);
            cResult[32] = tmp11;
            tmp8 = tmp11;
          } else {
            tmp8 = cResult[32];
          }
          const _Symbol2 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            const obj24 = {
              variant: "text-md/medium",
              color: "mobile-text-heading-primary",
              children: intl.string(intl8.t.aURgY2),
            };
            const Text = Text_Text.Text;
            intl = intl8.intl;
            const tmp14 = metroImportAll(Text, obj24);
            cResult[33] = tmp14;
            tmp12 = tmp14;
          } else {
            tmp12 = cResult[33];
          }
          if (cResult[34] === actionedAt) {
            if (cResult[35] === actionedByUser) {
              if (cResult[36] === tmp4.actionedInfo) {
                let tmp15;
                let tmp25;
                if (cResult[37] === tmp4.dot) {
                  tmp15 = cResult[38];
                }
                if (cResult[39] !== tmp15) {
                  const obj25 = { children: items6 };
                  items6 = [tmp12, tmp15];
                  const tmp28 = React4(View, obj25);
                  cResult[39] = tmp15;
                  cResult[40] = tmp28;
                  tmp25 = tmp28;
                } else {
                  tmp25 = cResult[40];
                }
                if (cResult[41] === tmp4.statusRow) {
                  let tmp29;
                  let tmp33;
                  if (cResult[42] === tmp25) {
                    tmp29 = cResult[43];
                  }
                  if (cResult[44] !== joinRequest) {
                    const obj26 = { joinRequest };
                    const tmp36 = metroImportAll(closure_13, obj26);
                    cResult[44] = joinRequest;
                    cResult[45] = tmp36;
                    tmp33 = tmp36;
                  } else {
                    tmp33 = cResult[45];
                  }
                  if (cResult[46] === tmp4.statusContainer) {
                    if (cResult[47] === tmp29) {
                      let tmp37;
                      if (cResult[48] === tmp33) {
                        tmp37 = cResult[49];
                      }
                      return tmp37;
                    }
                  }
                  const obj27 = { style: tmp4.statusContainer, children: items7 };
                  items7 = [tmp29, tmp33];
                  const tmp40 = React4(View, obj27);
                  cResult[46] = tmp4.statusContainer;
                  cResult[47] = tmp29;
                  cResult[48] = tmp33;
                  cResult[49] = tmp40;
                  tmp37 = tmp40;
                }
                const obj28 = { style: tmp4.statusRow, children: items8 };
                items8 = [tmp8, tmp25];
                const tmp32 = React4(View, obj28);
                cResult[41] = tmp4.statusRow;
                cResult[42] = tmp25;
                cResult[43] = tmp32;
                tmp29 = tmp32;
              }
            }
          }
          let tmp18Result = null;
          if (null != actionedByUser) {
            tmp18Result = null;
            if (null != actionedAt) {
              const obj29 = { style: tmp4.actionedInfo, children: items9 };
              const Text2 = Text_Text.Text;
              const intl2 = intl8.intl;
              const formatToPlainString = intl2.formatToPlainString;
              let username = actionedByUser.global_name;
              const qnimbL = intl8.t.qnimbL;
              if (username == null) {
                username = actionedByUser.username;
              }
              const obj30 = {
                variant: "text-sm/normal",
                color: "text-default",
                children: formatToPlainString(qnimbL, obj31),
              };
              obj31 = { username };
              items9 = [metroImportAll(Text2, obj30), ,];
              const obj32 = { style: tmp4.dot };
              items9[1] = metroImportAll(View, obj32);
              const obj33 = { variant: "text-sm/normal", color: "text-default", children: dateFormat(date1, "LL") };
              const Text3 = Text_Text.Text;
              const _Date = Date;
              dateFormat = DateUtils.dateFormat;
              DateUtils;
              const self = this;
              const self2 = this;
              const obj9 = SnowflakeUtilsDefault;
              date1 = new Date(obj9.extractTimestamp(actionedAt));
              items9[2] = metroImportAll(Text3, obj33);
              tmp18Result = React4(View, obj29);
            }
          }
          cResult[34] = actionedAt;
          cResult[35] = actionedByUser;
          cResult[36] = tmp4.actionedInfo;
          cResult[37] = tmp4.dot;
          cResult[38] = tmp18Result;
          tmp15 = tmp18Result;
        } else {
          return null;
        }
      }
    : function (joinRequest) {
        let Text8;
        let actionedAt;
        let actionedByUser;
        let applicationStatus;
        let date;
        let date1;
        let dateFormat;
        let dateFormat2;
        let intl;
        let intl3;
        let intl5;
        let intl6;
        let intl7;
        let items;
        let items1;
        let items2;
        let items4;
        let items5;
        let items6;
        let items8;
        let items9;
        let obj14;
        let obj18;
        let obj26;
        let obj6;
        let rejectionReason;
        joinRequest = joinRequest.joinRequest;
        ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
        const interviewChannelId = joinRequest.interviewChannelId;
        const tmp = closure_11();
        if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
          if (null != interviewChannelId) {
            const obj2 = { style: tmp.statusContainer, children: items1 };
            const obj3 = { style: tmp.statusRow, children: items };
            const obj4 = { size: "lg", color: nativeDefault.colors.STATUS_WARNING };
            const HourglassIcon = HourglassIcon2.HourglassIcon;
            items = [metroImportAll(HourglassIcon, obj4)];
            const obj5 = { children: metroImportAll(Text8, obj6) };
            obj6 = {
              variant: "text-md/medium",
              color: "mobile-text-heading-primary",
              children: intl6.string(intl8.t["Vr+7eO"]),
            };
            Text8 = Text_Text.Text;
            intl6 = intl8.intl;
            items[1] = metroImportAll(View, obj5);
            items1 = [React4(View, obj3)];
            const obj7 = { joinRequest, label: intl7.string(intl8.t.rcqdhN) };
            intl7 = intl8.intl;
            items1[1] = metroImportAll(closure_13, obj7);
            return React4(View, obj2);
          }
        }
        if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const obj8 = { style: tmp.statusContainer, children: items5 };
          const obj9 = { style: tmp.statusRow, children: items2 };
          const obj10 = {
            size: "lg",
            color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
            secondaryColor: nativeDefault.colors.WHITE,
          };
          const CircleXIcon = CircleXIcon2.CircleXIcon;
          items2 = [metroImportAll(CircleXIcon, obj10)];
          const obj11 = {
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: intl3.string(intl8.t.bSZkla),
          };
          const Text4 = Text_Text.Text;
          intl3 = intl8.intl;
          const items3 = [metroImportAll(Text4, obj11), ,];
          let tmp17Result = null;
          if (null != actionedByUser) {
            tmp17Result = null;
            if (null != actionedAt) {
              const obj12 = { style: tmp.actionedInfo, children: items4 };
              const Text5 = Text_Text.Text;
              const intl4 = intl8.intl;
              const formatToPlainString2 = intl4.formatToPlainString;
              let username2 = actionedByUser.global_name;
              const qnimbL2 = intl8.t.qnimbL;
              if (username2 == null) {
                username2 = actionedByUser.username;
              }
              const obj13 = {
                variant: "text-sm/normal",
                color: "text-default",
                children: formatToPlainString2(qnimbL2, obj14),
              };
              obj14 = { username: username2 };
              items4 = [metroImportAll(Text5, obj13), ,];
              const obj15 = { style: tmp.dot };
              items4[1] = metroImportAll(View, obj15);
              const obj16 = { variant: "text-sm/normal", color: "text-default", children: dateFormat2(date, "LL") };
              const Text6 = Text_Text.Text;
              const _Date2 = Date;
              dateFormat2 = DateUtils.dateFormat;
              DateUtils;
              const self3 = this;
              const self4 = this;
              const tmp20Result = SnowflakeUtilsDefault;
              date = new Date(tmp20Result.extractTimestamp(actionedAt));
              items4[2] = metroImportAll(Text6, obj16);
              tmp17Result = React4(View, obj12);
            }
          }
          items3[1] = tmp17Result;
          let tmp19Result = null != rejectionReason;
          if (tmp19Result) {
            const obj17 = {
              variant: "text-sm/normal",
              color: "text-default",
              children: intl5.formatToPlainString(intl8.t.fU5PPM, obj18),
            };
            const Text7 = Text_Text.Text;
            intl5 = intl8.intl;
            obj18 = { rejectionReason };
            tmp19Result = metroImportAll(Text7, obj17);
          }
          const obj19 = { children: items3 };
          items3[2] = tmp19Result;
          items2[1] = React4(View, obj19);
          items5 = [React4(View, obj9)];
          const obj20 = { joinRequest };
          items5[1] = metroImportAll(closure_13, obj20);
          return React4(View, obj8);
        } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
          const obj = { style: tmp.statusContainer, children: items9 };
          const obj21 = { style: tmp.statusRow, children: items6 };
          const obj22 = {
            size: "lg",
            color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
            secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
          };
          const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
          items6 = [metroImportAll(CircleCheckIcon, obj22)];
          const obj23 = {
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: intl.string(intl8.t.aURgY2),
          };
          const Text = Text_Text.Text;
          intl = intl8.intl;
          const items7 = [metroImportAll(Text, obj23)];
          let tmp6Result = null;
          if (null != actionedByUser) {
            tmp6Result = null;
            if (null != actionedAt) {
              const obj24 = { style: tmp.actionedInfo, children: items8 };
              const Text2 = Text_Text.Text;
              const intl2 = intl8.intl;
              const formatToPlainString = intl2.formatToPlainString;
              let username = actionedByUser.global_name;
              const qnimbL = intl8.t.qnimbL;
              if (username == null) {
                username = actionedByUser.username;
              }
              const obj25 = {
                variant: "text-sm/normal",
                color: "text-default",
                children: formatToPlainString(qnimbL, obj26),
              };
              obj26 = { username };
              items8 = [metroImportAll(Text2, obj25), ,];
              const obj27 = { style: tmp.dot };
              items8[1] = metroImportAll(View, obj27);
              const obj28 = { variant: "text-sm/normal", color: "text-default", children: dateFormat(date1, "LL") };
              const Text3 = Text_Text.Text;
              const _Date = Date;
              dateFormat = DateUtils.dateFormat;
              DateUtils;
              const self = this;
              const self2 = this;
              const tmp9Result = SnowflakeUtilsDefault;
              date1 = new Date(tmp9Result.extractTimestamp(actionedAt));
              items8[2] = metroImportAll(Text3, obj28);
              tmp6Result = React4(View, obj24);
            }
          }
          const obj29 = { children: items7 };
          items7[1] = tmp6Result;
          items6[1] = React4(View, obj29);
          items9 = [React4(View, obj21)];
          const obj30 = { joinRequest };
          items9[1] = metroImportAll(closure_13, obj30);
          return React4(View, obj);
        } else {
          return null;
        }
      },
);
const memo3 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo3(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (joinRequest) => {
        let ChatIcon;
        let approveRequest;
        let handleOpenInterview;
        let intl3;
        let items;
        let obj6;
        let rejectRequest;
        let submitting;
        let tmp4;
        let tmp6;
        let tmp7;
        const obj = joinRequest(576);
        const cResult = obj.c(20);
        joinRequest = joinRequest.joinRequest;
        if (cResult[0] !== joinRequest) {
          const fn = function n() {
            openJoinRequestActionSheetDefault(joinRequest);
          };
          cResult[0] = joinRequest;
          cResult[1] = fn;
          tmp4 = fn;
        } else {
          tmp4 = cResult[1];
        }
        const tmpResult = joinRequest(12299);
        const joinRequestButtonActions = tmpResult.useJoinRequestButtonActions(
          joinRequest,
          joinRequest.interviewChannelId,
          tmp4,
        );
        ({ approveRequest, rejectRequest, handleOpenInterview, submitting } = joinRequestButtonActions);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { color: nativeDefault.colors.WHITE, size: "lg" };
          const CheckmarkLargeIcon = tmp(4577).CheckmarkLargeIcon;
          const tmp10 = closure_8(CheckmarkLargeIcon, obj2);
          const intl = tmp(1126).intl;
          const stringResult = intl.string(joinRequest(1126).t.BzjDQJ);
          cResult[2] = tmp10;
          cResult[3] = stringResult;
          tmp7 = stringResult;
          tmp6 = tmp10;
        } else {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        if (cResult[4] === approveRequest) {
          let tmp12;
          let tmp15;
          let tmp14;
          if (cResult[5] === submitting) {
            tmp12 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { color: nativeDefault.colors.WHITE, size: "lg" };
            const XLargeIcon = tmp(4795).XLargeIcon;
            const tmp18 = closure_8(XLargeIcon, obj3);
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(joinRequest(1126).t.hDtbsz);
            cResult[7] = tmp18;
            cResult[8] = stringResult1;
            tmp15 = stringResult1;
            tmp14 = tmp18;
          } else {
            tmp14 = cResult[7];
            tmp15 = cResult[8];
          }
          if (cResult[9] === rejectRequest) {
            let tmp20;
            if (cResult[10] === submitting) {
              tmp20 = cResult[11];
            }
            if (cResult[12] === handleOpenInterview) {
              if (cResult[13] === joinRequest.interviewChannelId) {
                let tmp23;
                if (cResult[14] === submitting) {
                  tmp23 = cResult[15];
                }
                if (cResult[16] === tmp12) {
                  if (cResult[17] === tmp20) {
                    let tmp28;
                    if (cResult[18] === tmp23) {
                      tmp28 = cResult[19];
                    }
                    return tmp28;
                  }
                }
                const obj4 = { direction: "horizontal", align: "flex-start", justify: "space-evenly", children: items };
                items = [tmp12, tmp20, tmp23];
                const tmp30 = closure_9(joinRequest(5592).ButtonGroup, obj4);
                cResult[16] = tmp12;
                cResult[17] = tmp20;
                cResult[18] = tmp23;
                cResult[19] = tmp30;
                tmp28 = tmp30;
              }
            }
            let tmp25 = null == joinRequest.interviewChannelId;
            if (tmp25) {
              const obj5 = {
                variant: "secondary",
                icon: closure_8(ChatIcon, obj6),
                label: intl3.string(joinRequest(1126).t.KQeYoC),
                onPress: handleOpenInterview,
                disabled: submitting,
              };
              const IconButton = tmp(7575).IconButton;
              obj6 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
              ChatIcon = tmp(5855).ChatIcon;
              intl3 = tmp(1126).intl;
              tmp25 = closure_8(IconButton, obj5);
            }
            cResult[12] = handleOpenInterview;
            cResult[13] = joinRequest.interviewChannelId;
            cResult[14] = submitting;
            cResult[15] = tmp25;
            tmp23 = tmp25;
          }
          const obj7 = {
            variant: "destructive",
            icon: tmp14,
            label: tmp15,
            onPress: rejectRequest,
            disabled: submitting,
          };
          const tmp22 = closure_8(joinRequest(7575).IconButton, obj7);
          cResult[9] = rejectRequest;
          cResult[10] = submitting;
          cResult[11] = tmp22;
          tmp20 = tmp22;
        }
        const tmp13 = closure_8(joinRequest(7575).IconButton, {
          variant: "primary",
          icon: tmp6,
          label: tmp7,
          onPress: approveRequest,
          disabled: submitting,
        });
        cResult[4] = approveRequest;
        cResult[5] = submitting;
        cResult[6] = tmp13;
        tmp12 = tmp13;
      }
    : (joinRequest) => {
        let ChatIcon;
        let CheckmarkLargeIcon;
        let XLargeIcon;
        let approveRequest;
        let handleOpenInterview;
        let intl;
        let intl2;
        let intl3;
        let obj3;
        let obj5;
        let obj7;
        let rejectRequest;
        let submitting;
        joinRequest = joinRequest.joinRequest;
        const items = [joinRequest];
        const callback = react.useCallback(() => {
          openJoinRequestActionSheetDefault(joinRequest);
        }, items);
        const obj = joinRequest(12299);
        const joinRequestButtonActions = obj.useJoinRequestButtonActions(
          joinRequest,
          joinRequest.interviewChannelId,
          callback,
        );
        ({ submitting, approveRequest, rejectRequest, handleOpenInterview } = joinRequestButtonActions);
        const ButtonGroup = joinRequest(5592).ButtonGroup;
        const obj2 = {
          variant: "primary",
          icon: closure_8(CheckmarkLargeIcon, obj3),
          label: intl.string(joinRequest(1126).t.BzjDQJ),
          onPress: approveRequest,
          disabled: submitting,
        };
        const IconButton = joinRequest(7575).IconButton;
        obj3 = { color: nativeDefault.colors.WHITE, size: "lg" };
        CheckmarkLargeIcon = joinRequest(4577).CheckmarkLargeIcon;
        intl = joinRequest(1126).intl;
        const children = [closure_8(IconButton, obj2), ,];
        const obj4 = {
          variant: "destructive",
          icon: closure_8(XLargeIcon, obj5),
          label: intl2.string(joinRequest(1126).t.hDtbsz),
          onPress: rejectRequest,
          disabled: submitting,
        };
        const IconButton2 = joinRequest(7575).IconButton;
        obj5 = { color: nativeDefault.colors.WHITE, size: "lg" };
        XLargeIcon = joinRequest(4795).XLargeIcon;
        intl2 = joinRequest(1126).intl;
        children[1] = closure_8(IconButton2, obj4);
        let tmp6Result = null == joinRequest.interviewChannelId;
        if (tmp6Result) {
          const obj6 = {
            variant: "secondary",
            icon: closure_8(ChatIcon, obj7),
            label: intl3.string(joinRequest(1126).t.KQeYoC),
            onPress: handleOpenInterview,
            disabled: submitting,
          };
          const IconButton3 = tmp2(7575).IconButton;
          obj7 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
          ChatIcon = tmp2(5855).ChatIcon;
          intl3 = tmp2(1126).intl;
          tmp6Result = closure_8(IconButton3, obj6);
        }
        children[2] = tmp6Result;
        return closure_9(ButtonGroup, {
          direction: "horizontal",
          align: "flex-start",
          justify: "space-evenly",
          children,
        });
      },
);
const memo4 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = memo4(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let field;
        let isLastField;
        let items;
        let items2;
        let items4;
        const obj = react2;
        const cResult = obj.c(38);
        ({ field, isLastField } = arg0);
        const tmp4 = closure_11();
        const field_type = field.field_type;
        if (MemberVerificationTypes.VerificationFormFieldTypes.TERMS === field_type) {
          let formResponseMargin = null;
          if (!isLastField) {
            formResponseMargin = tmp4.formResponseMargin;
          }
          if (cResult[0] === tmp4.formResponse) {
            if (cResult[1] === tmp4.termsField) {
              let tmp40;
              let tmp41;
              let tmp45;
              if (cResult[2] === formResponseMargin) {
                tmp40 = cResult[3];
              }
              if (cResult[4] !== field.label) {
                const obj2 = { variant: "text-md/medium", color: "text-default", children: field.label };
                const tmp43 = metroImportAll(Text_Text.Text, obj2);
                cResult[4] = field.label;
                cResult[5] = tmp43;
                tmp41 = tmp43;
              } else {
                tmp41 = cResult[5];
              }
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const obj3 = {
                  size: "sm",
                  color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
                  secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
                };
                const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
                const tmp48 = metroImportAll(CircleCheckIcon, obj3);
                cResult[6] = tmp48;
                tmp45 = tmp48;
              } else {
                tmp45 = cResult[6];
              }
              if (cResult[7] === tmp40) {
                let tmp49;
                if (cResult[8] === tmp41) {
                  tmp49 = cResult[9];
                }
                return tmp49;
              }
              const obj4 = { style: tmp40, children: items };
              items = [tmp41, tmp45];
              const tmp52 = React4(View, obj4);
              cResult[7] = tmp40;
              cResult[8] = tmp41;
              cResult[9] = tmp52;
              tmp49 = tmp52;
            }
          }
          const items1 = [, ,];
          ({ termsField: arr5[0], formResponse: arr5[1] } = tmp4);
          items1[2] = formResponseMargin;
          cResult[0] = tmp4.formResponse;
          cResult[1] = tmp4.termsField;
          cResult[2] = formResponseMargin;
          cResult[3] = items1;
          tmp40 = items1;
        } else if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          if (cResult[10] === field.label) {
            let tmp21;
            if (cResult[11] === tmp4.formQuestion) {
              tmp21 = cResult[12];
            }
            let formResponseMargin1 = null;
            if (!isLastField) {
              formResponseMargin1 = tmp4.formResponseMargin;
            }
            if (cResult[13] === tmp4.formResponse) {
              let tmp26;
              let tmp28;
              if (cResult[14] === formResponseMargin1) {
                tmp26 = cResult[15];
              }
              let tmp27 = null;
              if (null != field.response) {
                tmp27 = field.choices[field.response];
              }
              if (cResult[16] !== tmp27) {
                const obj5 = { variant: "text-md/medium", color: "text-default", children: tmp27 };
                const tmp30 = metroImportAll(Text_Text.Text, obj5);
                cResult[16] = tmp27;
                cResult[17] = tmp30;
                tmp28 = tmp30;
              } else {
                tmp28 = cResult[17];
              }
              if (cResult[18] === tmp26) {
                let tmp31;
                if (cResult[19] === tmp28) {
                  tmp31 = cResult[20];
                }
                if (cResult[21] === tmp21) {
                  let tmp35;
                  if (cResult[22] === tmp31) {
                    tmp35 = cResult[23];
                  }
                  return tmp35;
                }
                const obj6 = { children: items2 };
                items2 = [tmp21, tmp31];
                const tmp38 = React4(View, obj6);
                cResult[21] = tmp21;
                cResult[22] = tmp31;
                cResult[23] = tmp38;
                tmp35 = tmp38;
              }
              const obj7 = { style: tmp26, children: tmp28 };
              const tmp34 = metroImportAll(View, obj7);
              cResult[18] = tmp26;
              cResult[19] = tmp28;
              cResult[20] = tmp34;
              tmp31 = tmp34;
            }
            const items3 = [tmp4.formResponse, formResponseMargin1];
            cResult[13] = tmp4.formResponse;
            cResult[14] = formResponseMargin1;
            cResult[15] = items3;
            tmp26 = items3;
          }
          const obj8 = {
            style: tmp4.formQuestion,
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: field.label,
          };
          const tmp23 = metroImportAll(Text_Text.Text, obj8);
          cResult[10] = field.label;
          cResult[11] = tmp4.formQuestion;
          cResult[12] = tmp23;
          tmp21 = tmp23;
        } else {
          if (cResult[24] === field.label) {
            let tmp5;
            if (cResult[25] === tmp4.formQuestion) {
              tmp5 = cResult[26];
            }
            let formResponseMargin2 = null;
            if (!isLastField) {
              formResponseMargin2 = tmp4.formResponseMargin;
            }
            if (cResult[27] === tmp4.formResponse) {
              let tmp9;
              let tmp10;
              if (cResult[28] === formResponseMargin2) {
                tmp9 = cResult[29];
              }
              if (cResult[30] !== field.response) {
                const obj9 = { variant: "text-md/medium", color: "text-default", children: field.response };
                const tmp12 = metroImportAll(Text_Text.Text, obj9);
                cResult[30] = field.response;
                cResult[31] = tmp12;
                tmp10 = tmp12;
              } else {
                tmp10 = cResult[31];
              }
              if (cResult[32] === tmp9) {
                let tmp13;
                if (cResult[33] === tmp10) {
                  tmp13 = cResult[34];
                }
                if (cResult[35] === tmp5) {
                  let tmp17;
                  if (cResult[36] === tmp13) {
                    tmp17 = cResult[37];
                  }
                  return tmp17;
                }
                const obj10 = { children: items4 };
                items4 = [tmp5, tmp13];
                const tmp20 = React4(View, obj10);
                cResult[35] = tmp5;
                cResult[36] = tmp13;
                cResult[37] = tmp20;
                tmp17 = tmp20;
              }
              const obj11 = { style: tmp9, children: tmp10 };
              const tmp16 = metroImportAll(View, obj11);
              cResult[32] = tmp9;
              cResult[33] = tmp10;
              cResult[34] = tmp16;
              tmp13 = tmp16;
            }
            const items5 = [tmp4.formResponse, formResponseMargin2];
            cResult[27] = tmp4.formResponse;
            cResult[28] = formResponseMargin2;
            cResult[29] = items5;
            tmp9 = items5;
          }
          const obj12 = {
            style: tmp4.formQuestion,
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: field.label,
          };
          const tmp7 = metroImportAll(Text_Text.Text, obj12);
          cResult[24] = field.label;
          cResult[25] = tmp4.formQuestion;
          cResult[26] = tmp7;
          tmp5 = tmp7;
        }
      }
    : (arg0) => {
        let Text;
        let field;
        let isLastField;
        let items1;
        let obj11;
        let obj8;
        ({ field, isLastField } = arg0);
        const tmp = closure_11();
        const field_type = field.field_type;
        if (MemberVerificationTypes.VerificationFormFieldTypes.TERMS === field_type) {
          const items = [, ,];
          ({ termsField: arr3[0], formResponse: arr3[1] } = tmp);
          let formResponseMargin = null;
          if (!isLastField) {
            formResponseMargin = tmp.formResponseMargin;
          }
          const obj2 = { style: items, children: items1 };
          items[2] = formResponseMargin;
          const obj3 = { variant: "text-md/medium", color: "text-default", children: field.label };
          items1 = [metroImportAll(Text_Text.Text, obj3)];
          const obj4 = {
            size: "sm",
            color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
            secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
          };
          const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
          items1[1] = metroImportAll(CircleCheckIcon, obj4);
          return React4(View, obj2);
        } else if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          const obj5 = {
            style: tmp.formQuestion,
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: field.label,
          };
          const items2 = [metroImportAll(Text_Text.Text, obj5)];
          const items3 = [tmp.formResponse];
          let formResponseMargin1 = null;
          if (!isLastField) {
            formResponseMargin1 = tmp.formResponseMargin;
          }
          items3[1] = formResponseMargin1;
          let tmp10 = null;
          const obj6 = { style: items3, children: metroImportAll(Text, obj8) };
          Text = Text_Text.Text;
          if (null != field.response) {
            tmp10 = field.choices[field.response];
          }
          const obj7 = { children: items2 };
          obj8 = { variant: "text-md/medium", color: "text-default", children: tmp10 };
          items2[1] = metroImportAll(View, obj6);
          return React4(View, obj7);
        } else {
          const obj9 = {
            style: tmp.formQuestion,
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: field.label,
          };
          const items4 = [metroImportAll(Text_Text.Text, obj9)];
          const items5 = [tmp.formResponse];
          let formResponseMargin2 = null;
          if (!isLastField) {
            formResponseMargin2 = tmp.formResponseMargin;
          }
          const obj = { children: items4 };
          items5[1] = formResponseMargin2;
          const obj10 = { style: items5, children: metroImportAll(Text_Text.Text, obj11) };
          obj11 = { variant: "text-md/medium", color: "text-default", children: field.response };
          items4[1] = metroImportAll(View, obj10);
          return React4(View, obj);
        }
      },
);
const memo5 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = memo5(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function (arg0) {
        let accountInfoContainer;
        let accountInfoRow;
        let first;
        let intl2;
        let intl3;
        let items;
        let items1;
        let items2;
        let items3;
        let joinRequest;
        let tmp10;
        let tmp13;
        let tmp19;
        let tmp7;
        let user;
        const obj = react2;
        const cResult = obj.c(29);
        ({ joinRequest, user } = arg0);
        const tmp4 = closure_11();
        const accountInfoLabel = tmp4.accountInfoLabel;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl8.intl;
          const stringResult = intl.string(intl8.t["ldCE/p"]);
          cResult[0] = stringResult;
          first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.accountInfoLabel) {
          const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: accountInfoLabel, children: first };
          const tmp9 = metroImportAll(Text_Text.Text, obj2);
          cResult[1] = tmp4.accountInfoLabel;
          cResult[2] = tmp9;
          tmp7 = tmp9;
        } else {
          tmp7 = cResult[2];
        }
        ({ accountInfoContainer, accountInfoRow } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/semibold", color: "text-strong", children: intl2.string(intl8.t.SaDIpL) };
          const Text = Text_Text.Text;
          intl2 = intl8.intl;
          const tmp12 = metroImportAll(Text, obj3);
          cResult[3] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== user.id) {
          const _Date = Date;
          const dateFormat = DateUtils.dateFormat;
          DateUtils;
          const self = this;
          const self2 = this;
          const obj4 = SnowflakeUtilsDefault;
          const date = new Date(obj4.extractTimestamp(user.id));
          const dateFormatResult = dateFormat(date, "LL");
          cResult[4] = user.id;
          cResult[5] = dateFormatResult;
          tmp13 = dateFormatResult;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== tmp13) {
          const obj5 = { variant: "text-sm/normal", color: "text-subtle", children: tmp13 };
          const tmp21 = metroImportAll(Text_Text.Text, obj5);
          cResult[6] = tmp13;
          cResult[7] = tmp21;
          tmp19 = tmp21;
        } else {
          tmp19 = cResult[7];
        }
        if (cResult[8] === tmp4.accountInfoRow) {
          let tmp22;
          let tmp24;
          let tmp28;
          let tmp31;
          let tmp36;
          if (cResult[9] === tmp19) {
            tmp22 = cResult[10];
          }
          if (cResult[11] !== tmp4.divider) {
            const obj6 = { style: tmp4.divider };
            const tmp27 = metroImportAll(View, obj6);
            cResult[11] = tmp4.divider;
            cResult[12] = tmp27;
            tmp24 = tmp27;
          } else {
            tmp24 = cResult[12];
          }
          const _Symbol = Symbol;
          const accountInfoRow2 = tmp4.accountInfoRow;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = {
              variant: "text-sm/semibold",
              color: "text-strong",
              children: intl3.string(intl8.t["Vt4cn+"]),
            };
            const Text2 = Text_Text.Text;
            intl3 = intl8.intl;
            const tmp30 = metroImportAll(Text2, obj7);
            cResult[13] = tmp30;
            tmp28 = tmp30;
          } else {
            tmp28 = cResult[13];
          }
          if (cResult[14] !== joinRequest.createdAt) {
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            const dateFormat2 = DateUtils.dateFormat;
            DateUtils;
            const date1 = new Date(joinRequest.createdAt);
            const dateFormat2Result = dateFormat2(date1, "LL");
            cResult[14] = joinRequest.createdAt;
            cResult[15] = dateFormat2Result;
            tmp31 = dateFormat2Result;
          } else {
            tmp31 = cResult[15];
          }
          if (cResult[16] !== tmp31) {
            const obj8 = { variant: "text-sm/normal", color: "text-subtle", children: tmp31 };
            const tmp38 = metroImportAll(Text_Text.Text, obj8);
            cResult[16] = tmp31;
            cResult[17] = tmp38;
            tmp36 = tmp38;
          } else {
            tmp36 = cResult[17];
          }
          if (cResult[18] === tmp4.accountInfoRow) {
            let tmp39;
            if (cResult[19] === tmp36) {
              tmp39 = cResult[20];
            }
            if (cResult[21] === tmp4.accountInfoContainer) {
              if (cResult[22] === tmp24) {
                if (cResult[23] === tmp39) {
                  let tmp43;
                  if (cResult[24] === tmp22) {
                    tmp43 = cResult[25];
                  }
                  if (cResult[26] === tmp43) {
                    let tmp47;
                    if (cResult[27] === tmp7) {
                      tmp47 = cResult[28];
                    }
                    return tmp47;
                  }
                  const obj9 = { children: items };
                  items = [tmp7, tmp43];
                  const tmp50 = React4(authStore, obj9);
                  cResult[26] = tmp43;
                  cResult[27] = tmp7;
                  cResult[28] = tmp50;
                  tmp47 = tmp50;
                }
              }
            }
            const obj10 = { style: accountInfoContainer, children: items1 };
            items1 = [tmp22, tmp24, tmp39];
            const tmp46 = React4(View, obj10);
            cResult[21] = tmp4.accountInfoContainer;
            cResult[22] = tmp24;
            cResult[23] = tmp39;
            cResult[24] = tmp22;
            cResult[25] = tmp46;
            tmp43 = tmp46;
          }
          const obj11 = { style: accountInfoRow2, children: items2 };
          items2 = [tmp28, tmp36];
          const tmp42 = React4(View, obj11);
          cResult[18] = tmp4.accountInfoRow;
          cResult[19] = tmp36;
          cResult[20] = tmp42;
          tmp39 = tmp42;
        }
        const obj12 = { style: accountInfoRow, children: items3 };
        items3 = [tmp10, tmp19];
        const tmp23 = React4(View, obj12);
        cResult[8] = tmp4.accountInfoRow;
        cResult[9] = tmp19;
        cResult[10] = tmp23;
        tmp22 = tmp23;
      }
    : (arg0) => {
        let date;
        let date1;
        let dateFormat;
        let dateFormat2;
        let intl;
        let intl2;
        let intl3;
        let items;
        let items1;
        let items2;
        let items3;
        let joinRequest;
        let user;
        ({ joinRequest, user } = arg0);
        const tmp = closure_11();
        const obj = { children: items };
        const obj2 = {
          variant: "text-sm/semibold",
          color: "text-subtle",
          style: tmp.accountInfoLabel,
          children: intl.string(intl8.t["ldCE/p"]),
        };
        const Text = Text_Text.Text;
        intl = intl8.intl;
        items = [metroImportAll(Text, obj2)];
        const obj3 = { style: tmp.accountInfoContainer, children: items2 };
        const obj4 = { style: tmp.accountInfoRow, children: items1 };
        const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: intl2.string(intl8.t.SaDIpL) };
        const Text2 = Text_Text.Text;
        intl2 = intl8.intl;
        items1 = [metroImportAll(Text2, obj5)];
        const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: dateFormat(date, "LL") };
        const Text3 = Text_Text.Text;
        dateFormat = DateUtils.dateFormat;
        DateUtils;
        const obj7 = SnowflakeUtilsDefault;
        date = new Date(obj7.extractTimestamp(user.id));
        items1[1] = metroImportAll(Text3, obj6);
        items2 = [React4(View, obj4), ,];
        const obj8 = { style: tmp.divider };
        items2[1] = metroImportAll(View, obj8);
        const obj9 = { style: tmp.accountInfoRow, children: items3 };
        const obj10 = { variant: "text-sm/semibold", color: "text-strong", children: intl3.string(intl8.t["Vt4cn+"]) };
        const Text4 = Text_Text.Text;
        intl3 = intl8.intl;
        items3 = [metroImportAll(Text4, obj10)];
        const obj11 = { variant: "text-sm/normal", color: "text-subtle", children: dateFormat2(date1, "LL") };
        const Text5 = Text_Text.Text;
        dateFormat2 = DateUtils.dateFormat;
        DateUtils;
        date1 = new Date(joinRequest.createdAt);
        items3[1] = metroImportAll(Text5, obj11);
        items2[2] = React4(View, obj9);
        items[1] = React4(View, obj3);
        return React4(authStore, obj);
      },
);
const memoResult = react.memo(function JoinRequestActionSheetContent(displayProfile) {
  let items1;
  let items2;
  let joinRequest;
  let mapped;
  let tmp8Result1;
  let user;
  ({ user, joinRequest } = displayProfile);
  let memo;
  displayProfile = displayProfile.displayProfile;
  let formResponses;
  const tmp = closure_11();
  const bottom = memo(1618)().bottom;
  const useMemo = react.useMemo;
  const tmp2 = memo;
  if (joinRequest != null) {
    formResponses = joinRequest.formResponses;
  }
  const items = [formResponses];
  memo = useMemo(() => {
    let formResponses;
    if (joinRequest != null) {
      formResponses = joinRequest.formResponses;
    }
    if (formResponses == null) {
      formResponses = [];
    }
    return formResponses;
  }, items);
  let obj = { style: { paddingBottom: bottom }, children: items1 };
  items1 = [closure_8(closure_12, { joinRequest, user, displayProfile }), , , ,];
  if (joinRequest.applicationStatus === joinRequest(4702).GuildJoinRequestApplicationStatuses.SUBMITTED) {
    let tmp8Result = null != joinRequest.interviewChannelId;
    if (tmp8Result) {
      const obj2 = { joinRequest };
      tmp8Result = closure_8(closure_14, obj2);
    }
    const obj3 = { children: items2 };
    items2 = [tmp8Result];
    const obj4 = { joinRequest };
    items2[1] = closure_8(closure_15, obj4);
    tmp8Result1 = closure_9(closure_10, obj3);
  } else {
    const obj5 = { joinRequest };
    tmp8Result1 = closure_8(closure_14, obj5);
  }
  items1[1] = tmp8Result1;
  const obj6 = { style: tmp.responsesContainer, children: mapped };
  mapped = undefined;
  if (memo != null) {
    mapped = memo.map((field, index) => {
      const obj = { field, isLastField: index === memo.length - 1 };
      return metroImportAll(
        closure_16,
        obj,
        "response-" + index + "-" + field.field_type + "-" + field.label + "-" + index === memo.length - 1,
      );
    });
  }
  items1[2] = closure_8(View, obj6);
  items1[3] = closure_8(closure_17, { joinRequest, user });
  const obj7 = {
    guildId: joinRequest.guildId,
    userId: joinRequest.userId,
    selectedJoinRequestId: joinRequest.joinRequestId,
  };
  items1[4] = closure_8(tmp2(16538), obj7);
  return closure_9(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx",
);

export default memoResult;
