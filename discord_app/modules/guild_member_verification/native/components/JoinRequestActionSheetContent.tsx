// discord_app/modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import CircleCheckIcon from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import CircleXIcon from "../../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import HourglassIcon from "../../../../design/components/Icon/native/redesign/generated/HourglassIcon.tsx";
import openJoinRequestActionSheetDefault from "../openJoinRequestActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(6837).ACTION_SHEET_MAX_WIDTH;
const paddingTop = fn(6898).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(5091);
let obj = {
  responsesContainer: {
    paddingHorizontal: 16,
    paddingTop: 24,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
    borderTopWidth: 1,
  },
  formQuestion: { marginBottom: 8 },
  formResponse: null,
  formResponseMargin: null,
  termsField: null,
  statusContainer: null,
  statusRow: null,
  actionedInfo: null,
  dot: null,
  accountInfoLabel: null,
  accountInfoContainer: null,
  accountInfoRow: null,
  divider: null,
};
let obj3 = {
  paddingHorizontal: 16,
  paddingTop: 24,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  borderTopWidth: 1,
};
obj.formResponse = {
  padding: 12,
  width: "100%",
  borderRadius: nativeDefault.radii.md,
  lineHeight: 20,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
};
obj.formResponseMargin = { marginBottom: 16 };
obj.termsField = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
let obj4 = {
  padding: 12,
  width: "100%",
  borderRadius: nativeDefault.radii.md,
  lineHeight: 20,
  backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT,
};
obj.statusContainer = {
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
obj.statusRow = { flexDirection: "row", alignItems: "center", gap: 12 };
obj.actionedInfo = { flexDirection: "row", gap: 8, alignItems: "center" };
let size = {
  height: 4,
  width: 4,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.TEXT_DEFAULT,
};
obj.dot = size;
obj.accountInfoLabel = { marginTop: 16, marginHorizontal: 16, marginBottom: 8 };
let obj5 = {
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
obj.accountInfoContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginHorizontal: 16,
  marginBottom: 16,
  borderRadius: nativeDefault.radii.md,
};
obj.accountInfoRow = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 };
const size1 = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.divider = size1;
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_12 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function JoinRequestActionSheetHeader(user) {
        const cResult = user(576).c(47);
        user = user.user;
        ({ displayProfile, joinRequest } = user);
        const tmp5 = joinRequest(8351)();
        const tmp6 = joinRequest(8340)(ACTION_SHEET_MAX_WIDTH);
        if (cResult[0] === displayProfile) {
          if (cResult[1] === user) {
            let tmp7 = cResult[2];
          }
          ({ theme, primaryColor, secondaryColor } = joinRequest(8337)(tmp7));
          if (cResult[3] === primaryColor) {
            if (cResult[4] === secondaryColor) {
              if (cResult[5] === theme) {
                let tmp9 = cResult[6];
              }
              const userProfileColors = tmp(8348).useUserProfileColors(tmp9);
              ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } =
                userProfileColors);
              if (cResult[7] === joinRequest) {
                if (cResult[8] === user.id) {
                  let tmp11 = cResult[9];
                }
                if (null == user) {
                  return null;
                } else {
                  if (cResult[10] === tmp6) {
                    if (cResult[11] === displayProfile) {
                      if (cResult[12] === user) {
                        let tmp13 = cResult[13];
                      }
                      if (cResult[14] !== statusBackground) {
                        const obj2 = { backgroundColor: statusBackground };
                        cResult[14] = statusBackground;
                        cResult[15] = obj2;
                        let tmp16 = obj2;
                      } else {
                        tmp16 = cResult[15];
                      }
                      if (cResult[16] === avatarBackground) {
                        if (cResult[17] === tmp11) {
                          if (cResult[18] === tmp16) {
                            if (cResult[19] === user) {
                              let tmp17 = cResult[20];
                            }
                            const _Symbol = Symbol;
                            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                              const obj3 = { paddingTop, paddingBottom: 0 };
                              cResult[21] = obj3;
                              let tmp21 = obj3;
                            } else {
                              tmp21 = cResult[21];
                            }
                            if (cResult[22] === tmp5.profileContent) {
                              if (cResult[23] === tmp5.profileContentWrapper) {
                                let tmp23 = cResult[24];
                              }
                              if (cResult[25] === containerBackground) {
                                if (cResult[26] === displayProfile) {
                                  if (cResult[27] === user) {
                                    let tmp24 = cResult[28];
                                  }
                                  if (cResult[29] !== user) {
                                    const obj4 = { user };
                                    const tmp29 = closure_8(joinRequest(13340), obj4);
                                    cResult[29] = user;
                                    cResult[30] = tmp29;
                                    let tmp27 = tmp29;
                                  } else {
                                    tmp27 = cResult[30];
                                  }
                                  if (cResult[31] === tmp5.primaryInfo) {
                                    if (cResult[32] === tmp27) {
                                      if (cResult[33] === tmp24) {
                                        let tmp30 = cResult[34];
                                      }
                                      if (cResult[35] === gradientFallbackBackground) {
                                        if (cResult[36] === primaryColor) {
                                          if (cResult[37] === secondaryColor) {
                                            if (cResult[38] === tmp30) {
                                              if (cResult[39] === tmp23) {
                                                let tmp34 = cResult[40];
                                              }
                                              if (cResult[41] === tmp34) {
                                                if (cResult[42] === tmp17) {
                                                  let tmp37 = cResult[43];
                                                }
                                                if (cResult[44] === tmp37) {
                                                }
                                                const obj5 = { children: null };
                                                const items = [tmp13, tmp37];
                                                obj5.children = items;
                                                const tmp44 = closure_9(closure_10, obj5);
                                                cResult[44] = tmp37;
                                                cResult[45] = tmp13;
                                                cResult[46] = tmp44;
                                              }
                                              const obj6 = { children: null };
                                              const items1 = [tmp17, tmp34];
                                              obj6.children = items1;
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
                                        children: tmp30,
                                      };
                                      const tmp36 = closure_8(joinRequest(10496), obj7);
                                      cResult[35] = gradientFallbackBackground;
                                      cResult[36] = primaryColor;
                                      cResult[37] = secondaryColor;
                                      cResult[38] = tmp30;
                                      cResult[39] = tmp23;
                                      cResult[40] = tmp36;
                                      tmp34 = tmp36;
                                    }
                                  }
                                  const obj8 = { style: tmp5.primaryInfo, children: null };
                                  const items2 = [tmp24, tmp27];
                                  obj8.children = items2;
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
                              const tmp26 = closure_8(tmp(13131).PrimaryInfo, obj9);
                              cResult[25] = containerBackground;
                              cResult[26] = displayProfile;
                              cResult[27] = user;
                              cResult[28] = tmp26;
                              tmp24 = tmp26;
                            }
                            const items3 = [, ,];
                            ({ profileContentWrapper: arr[0], profileContent: arr[1] } = tmp5);
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
                        onPress: tmp11,
                      };
                      const tmp19 = closure_8(joinRequest(8365), obj10);
                      cResult[16] = avatarBackground;
                      cResult[17] = tmp11;
                      cResult[18] = tmp16;
                      cResult[19] = user;
                      cResult[20] = tmp19;
                      tmp17 = tmp19;
                    }
                  }
                  const obj11 = { user, displayProfile, bannerHeight: tmp6 };
                  const tmp15 = closure_8(joinRequest(8356), obj11);
                  cResult[10] = tmp6;
                  cResult[11] = displayProfile;
                  cResult[12] = user;
                  cResult[13] = tmp15;
                  tmp13 = tmp15;
                }
              }
              const fn = function _() {
                showUserProfileActionSheetDefault({
                  userId: user.id,
                  onClose: function handleCloseProfile() {
                    joinRequest(dependencyMap[15])(closure_1_1);
                  },
                });
              };
              cResult[7] = joinRequest;
              cResult[8] = user.id;
              cResult[9] = fn;
              tmp11 = fn;
              const tmpResult = tmp(8348);
            }
          }
          const obj12 = { theme, primaryColor, secondaryColor };
          cResult[3] = primaryColor;
          cResult[4] = secondaryColor;
          cResult[5] = theme;
          cResult[6] = obj12;
          tmp9 = obj12;
          const tmp8 = joinRequest(8337)(tmp7);
        }
        const obj13 = { user, displayProfile };
        cResult[0] = displayProfile;
        cResult[1] = user;
        cResult[2] = obj13;
        tmp7 = obj13;
        const obj = user(576);
      }
    : function JoinRequestActionSheetHeader(user) {
        user = user.user;
        ({ displayProfile, joinRequest } = user);
        const tmp3 = joinRequest(8351)();
        const tmp4 = joinRequest(8340)(ACTION_SHEET_MAX_WIDTH);
        ({ primaryColor, secondaryColor, theme } = joinRequest(8337)({ user, displayProfile }));
        const tmp5 = joinRequest(8337)({ user, displayProfile });
        const tmp6 = user;
        const userProfileColors = user(8348).useUserProfileColors({ theme, primaryColor, secondaryColor });
        const items = [joinRequest, user.id];
        ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } = userProfileColors);
        let tmp9 = null;
        if (null != user) {
          const obj2 = { children: null };
          const obj3 = { user, displayProfile, bannerHeight: tmp4 };
          const items1 = [closure_8(joinRequest(8356), obj3)];
          const obj4 = { children: null };
          const obj5 = {
            user,
            disableStatus: true,
            backgroundColor: avatarBackground,
            statusStyle: null,
            onPress: null,
          };
          const obj6 = { backgroundColor: statusBackground };
          obj5.statusStyle = obj6;
          obj5.onPress = tmp8;
          const items2 = [closure_8(joinRequest(8365), obj5)];
          const obj7 = {
            fallbackBackground: gradientFallbackBackground,
            primaryColor,
            secondaryColor,
            containerStyle: null,
            children: null,
          };
          const items3 = [, ,];
          ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
          const obj8 = { paddingTop, paddingBottom: 0 };
          items3[2] = obj8;
          obj7.containerStyle = items3;
          const obj9 = { style: tmp3.primaryInfo, children: null };
          const obj10 = {
            user,
            displayProfile,
            badgeContainerBackground: containerBackground,
            isPreviewingChanges: false,
          };
          const items4 = [closure_8(tmp6(13131).PrimaryInfo, obj10)];
          const obj11 = { user };
          items4[1] = closure_8(joinRequest(13340), obj11);
          obj9.children = items4;
          obj7.children = closure_9(View, obj9);
          items2[1] = closure_8(joinRequest(10496), obj7);
          obj4.children = items2;
          items1[1] = closure_9(View, obj4);
          obj2.children = items1;
          tmp9 = closure_9(closure_10, obj2);
          const tmpResult = joinRequest(10496);
        }
        return tmp9;
      },
);
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function OpenInterviewButton(arg0) {
      let Button = interviewChannelId;
      let tmp = dependencyMap;
      const cResult = interviewChannelId(576).c(11);
      ({ joinRequest, label } = arg0);
      interviewChannelId = joinRequest.interviewChannelId;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== interviewChannelId) {
        const fn = function l() {
          let tmp2 = null != interviewChannelId;
          if (tmp2) {
            tmp2 = null != ChannelStore.getChannel(tmp);
          }
          return tmp2;
        };
        const items1 = [interviewChannelId];
        cResult[1] = interviewChannelId;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp6 = items1;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const obj = interviewChannelId(576);
      const stateFromStores = Button(504).useStateFromStores(first, tmp5, tmp6);
      const ButtonResult = Button(504);
      const joinRequestButtonActions = Button(12330).useJoinRequestButtonActions(joinRequest, interviewChannelId);
      ({ handleOpenInterview, submitting } = joinRequestButtonActions);
      const ButtonResult1 = Button(12330);
      if (ButtonResult2.isActionedApplicationStatus(joinRequest.applicationStatus)) {
        if (!stateFromStores) {
          return null;
        }
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
        const tmp13 = closure_8(Button(8182).ChatIcon, obj2);
        cResult[4] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== label) {
        let stringResult = label;
        if (label == null) {
          const intl = Button(1126).intl;
          stringResult = intl.string(Button(1126).t["2simqN"]);
        }
        cResult[5] = label;
        cResult[6] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[6];
      }
      if (cResult[7] === handleOpenInterview) {
        if (cResult[8] === submitting) {
        }
      }
      Button = Button(5376).Button;
      tmp = closure_8(Button, {
        variant: "secondary",
        size: "md",
        icon: tmp10,
        text: tmp14,
        onPress: handleOpenInterview,
        disabled: submitting,
      });
      cResult[7] = handleOpenInterview;
      cResult[8] = submitting;
      cResult[9] = tmp14;
      cResult[10] = tmp;
      ButtonResult2 = Button(4902);
    }
  : function OpenInterviewButton(arg0) {
      ({ joinRequest, label } = arg0);
      const interviewChannelId = joinRequest.interviewChannelId;
      const items = [ChannelStore];
      const items1 = [interviewChannelId];
      const stateFromStores = interviewChannelId(504).useStateFromStores(
        items,
        () => {
          let tmp2 = null != interviewChannelId;
          if (tmp2) {
            tmp2 = null != ChannelStore.getChannel(tmp);
          }
          return tmp2;
        },
        items1,
      );
      const obj = interviewChannelId(504);
      const joinRequestButtonActions = interviewChannelId(12330).useJoinRequestButtonActions(
        joinRequest,
        interviewChannelId,
      );
      ({ handleOpenInterview, submitting } = joinRequestButtonActions);
      const obj2 = interviewChannelId(12330);
      if (!obj3.isActionedApplicationStatus(joinRequest.applicationStatus)) {
        const obj4 = { variant: "secondary", size: "md", icon: null, text: null, onPress: null, disabled: null };
        const obj5 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
        obj4.icon = closure_8(tmp(8182).ChatIcon, obj5);
        if (label == null) {
          const intl = tmp(1126).intl;
          label = intl.string(tmp(1126).t["2simqN"]);
        }
        obj4.text = label;
        obj4.onPress = handleOpenInterview;
        obj4.disabled = submitting;
        let tmp6Result = closure_8(tmp(5376).Button, obj4);
      } else {
        tmp6Result = null;
      }
      return tmp6Result;
    };
ReactCompilerGating = fn(558);
let closure_14 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function JoinRequestActionSheetApplicationActions(joinRequest) {
        const cResult = c.c(50);
        joinRequest = joinRequest.joinRequest;
        ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
        const tmp4 = closure_11();
        if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
          if (null != joinRequest.interviewChannelId) {
            const _Symbol5 = Symbol;
            if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
              const obj2 = { size: "lg", color: nativeDefault.colors.STATUS_WARNING };
              const tmp85 = closure_1_8(HourglassIcon.HourglassIcon, obj2);
              cResult[0] = tmp85;
              let first = tmp85;
            } else {
              first = cResult[0];
            }
            const _Symbol6 = Symbol;
            if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { children: null };
              const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
              const intl6 = util.intl;
              obj4.children = intl6.string(util.t["Vr+7eO"]);
              obj3.children = closure_1_8(Text_Text.Text, obj4);
              const tmp89 = closure_1_8(View, obj3);
              cResult[1] = tmp89;
              let tmp86 = tmp89;
            } else {
              tmp86 = cResult[1];
            }
            if (cResult[2] !== tmp4.statusRow) {
              const obj5 = { style: tmp4.statusRow, children: null };
              const items = [first, tmp86];
              obj5.children = items;
              const tmp93 = options(View, obj5);
              cResult[2] = tmp4.statusRow;
              cResult[3] = tmp93;
              let tmp90 = tmp93;
            } else {
              tmp90 = cResult[3];
            }
            const _Symbol7 = Symbol;
            if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
              const intl7 = util.intl;
              const stringResult = intl7.string(util.t.rcqdhN);
              cResult[4] = stringResult;
              let tmp94 = stringResult;
            } else {
              tmp94 = cResult[4];
            }
            if (cResult[5] !== joinRequest) {
              const obj6 = { joinRequest, label: tmp94 };
              const tmp99 = closure_1_8(closure_13, obj6);
              cResult[5] = joinRequest;
              cResult[6] = tmp99;
              let tmp96 = tmp99;
            } else {
              tmp96 = cResult[6];
            }
            if (cResult[7] === tmp4.statusContainer) {
              if (cResult[8] === tmp90) {
                if (cResult[9] === tmp96) {
                  let tmp100 = cResult[10];
                }
                return tmp100;
              }
            }
            const obj7 = { style: tmp4.statusContainer, children: null };
            const items1 = [tmp90, tmp96];
            obj7.children = items1;
            const tmp103 = options(View, obj7);
            cResult[7] = tmp4.statusContainer;
            cResult[8] = tmp90;
            cResult[9] = tmp96;
            cResult[10] = tmp103;
            tmp100 = tmp103;
          }
        }
        if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const _Symbol3 = Symbol;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const obj8 = {
              size: "lg",
              color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
              secondaryColor: nativeDefault.colors.WHITE,
            };
            const tmp46 = closure_1_8(CircleXIcon.CircleXIcon, obj8);
            cResult[11] = tmp46;
            let tmp43 = tmp46;
          } else {
            tmp43 = cResult[11];
          }
          const _Symbol4 = Symbol;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            const obj9 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
            const intl3 = util.intl;
            obj9.children = intl3.string(util.t.bSZkla);
            const tmp49 = closure_1_8(Text_Text.Text, obj9);
            cResult[12] = tmp49;
            let tmp47 = tmp49;
          } else {
            tmp47 = cResult[12];
          }
          if (cResult[13] === actionedAt) {
            if (cResult[14] === actionedByUser) {
              if (cResult[15] === tmp4.actionedInfo) {
                if (cResult[16] === tmp4.dot) {
                  let tmp50 = cResult[17];
                }
                if (cResult[18] !== rejectionReason) {
                  let tmp63 = null != rejectionReason;
                  if (tmp63) {
                    const obj11 = { variant: "text-sm/normal", color: "text-default", children: null };
                    const intl5 = util.intl;
                    const obj12 = { rejectionReason };
                    obj11.children = intl5.formatToPlainString(util.t.fU5PPM, obj12);
                    tmp63 = closure_1_8(Text_Text.Text, obj11);
                  }
                  cResult[18] = rejectionReason;
                  cResult[19] = tmp63;
                  let tmp61 = tmp63;
                } else {
                  tmp61 = cResult[19];
                }
                if (cResult[20] === tmp50) {
                  if (cResult[21] === tmp61) {
                    let tmp65 = cResult[22];
                  }
                  if (cResult[23] === tmp4.statusRow) {
                    if (cResult[24] === tmp65) {
                      let tmp69 = cResult[25];
                    }
                    if (cResult[26] !== joinRequest) {
                      const obj13 = { joinRequest };
                      const tmp76 = closure_1_8(closure_13, obj13);
                      cResult[26] = joinRequest;
                      cResult[27] = tmp76;
                      let tmp73 = tmp76;
                    } else {
                      tmp73 = cResult[27];
                    }
                    if (cResult[28] === tmp4.statusContainer) {
                      if (cResult[29] === tmp69) {
                        if (cResult[30] === tmp73) {
                          let tmp77 = cResult[31];
                        }
                        return tmp77;
                      }
                    }
                    const obj14 = { style: tmp4.statusContainer, children: null };
                    const items2 = [tmp69, tmp73];
                    obj14.children = items2;
                    const tmp80 = options(View, obj14);
                    cResult[28] = tmp4.statusContainer;
                    cResult[29] = tmp69;
                    cResult[30] = tmp73;
                    cResult[31] = tmp80;
                    tmp77 = tmp80;
                  }
                  const obj15 = { style: tmp4.statusRow, children: null };
                  const items3 = [tmp43, tmp65];
                  obj15.children = items3;
                  const tmp72 = options(View, obj15);
                  cResult[23] = tmp4.statusRow;
                  cResult[24] = tmp65;
                  cResult[25] = tmp72;
                  tmp69 = tmp72;
                }
                const obj16 = { children: null };
                const items4 = [tmp47, tmp50, tmp61];
                obj16.children = items4;
                const tmp68 = options(View, obj16);
                cResult[20] = tmp50;
                cResult[21] = tmp61;
                cResult[22] = tmp68;
                tmp65 = tmp68;
              }
            }
          }
          let tmp53Result = null;
          if (null != actionedByUser) {
            tmp53Result = null;
            if (null != actionedAt) {
              const obj17 = { style: tmp4.actionedInfo, children: null };
              const intl4 = util.intl;
              let username2 = actionedByUser.global_name;
              if (username2 == null) {
                username2 = actionedByUser.username;
              }
              const obj18 = { variant: "text-sm/normal", color: "text-default", children: null };
              const obj19 = { username: username2 };
              obj18.children = intl4.formatToPlainString(util.t.qnimbL, obj19);
              const items5 = [closure_1_8(Text_Text.Text, obj18), ,];
              const obj20 = { style: tmp4.dot };
              items5[1] = closure_1_8(View, obj20);
              const obj21 = { variant: "text-sm/normal", color: "text-default", children: null };
              const _Date2 = Date;
              const tmpResult = DateUtils;
              const date = new Date(SnowflakeUtilsDefault.extractTimestamp(actionedAt));
              obj21.children = tmpResult.dateFormat(date, "LL");
              items5[2] = closure_1_8(Text_Text.Text, obj21);
              obj17.children = items5;
              tmp53Result = options(View, obj17);
            }
          }
          cResult[13] = actionedAt;
          cResult[14] = actionedByUser;
          cResult[15] = tmp4.actionedInfo;
          cResult[16] = tmp4.dot;
          cResult[17] = tmp53Result;
          tmp50 = tmp53Result;
        } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
          const _Symbol = Symbol;
          if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
            const obj22 = {
              size: "lg",
              color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
              secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
            };
            const tmp11 = closure_1_8(CircleCheckIcon.CircleCheckIcon, obj22);
            cResult[32] = tmp11;
            let tmp8 = tmp11;
          } else {
            tmp8 = cResult[32];
          }
          const _Symbol2 = Symbol;
          if (cResult[33] === Symbol.for("react.memo_cache_sentinel")) {
            const obj24 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
            const intl = util.intl;
            obj24.children = intl.string(util.t.aURgY2);
            const tmp14 = closure_1_8(Text_Text.Text, obj24);
            cResult[33] = tmp14;
            let tmp12 = tmp14;
          } else {
            tmp12 = cResult[33];
          }
          if (cResult[34] === actionedAt) {
            if (cResult[35] === actionedByUser) {
              if (cResult[36] === tmp4.actionedInfo) {
                if (cResult[37] === tmp4.dot) {
                  let tmp15 = cResult[38];
                }
                if (cResult[39] !== tmp15) {
                  const obj25 = { children: null };
                  const items6 = [tmp12, tmp15];
                  obj25.children = items6;
                  const tmp29 = options(View, obj25);
                  cResult[39] = tmp15;
                  cResult[40] = tmp29;
                  let tmp26 = tmp29;
                } else {
                  tmp26 = cResult[40];
                }
                if (cResult[41] === tmp4.statusRow) {
                  if (cResult[42] === tmp26) {
                    let tmp30 = cResult[43];
                  }
                  if (cResult[44] !== joinRequest) {
                    const obj26 = { joinRequest };
                    const tmp37 = closure_1_8(closure_13, obj26);
                    cResult[44] = joinRequest;
                    cResult[45] = tmp37;
                    let tmp34 = tmp37;
                  } else {
                    tmp34 = cResult[45];
                  }
                  if (cResult[46] === tmp4.statusContainer) {
                    if (cResult[47] === tmp30) {
                      if (cResult[48] === tmp34) {
                        let tmp38 = cResult[49];
                      }
                      return tmp38;
                    }
                  }
                  const obj27 = { style: tmp4.statusContainer, children: null };
                  const items7 = [tmp30, tmp34];
                  obj27.children = items7;
                  const tmp41 = options(View, obj27);
                  cResult[46] = tmp4.statusContainer;
                  cResult[47] = tmp30;
                  cResult[48] = tmp34;
                  cResult[49] = tmp41;
                  tmp38 = tmp41;
                }
                const obj28 = { style: tmp4.statusRow, children: null };
                const items8 = [tmp8, tmp26];
                obj28.children = items8;
                const tmp33 = options(View, obj28);
                cResult[41] = tmp4.statusRow;
                cResult[42] = tmp26;
                cResult[43] = tmp33;
                tmp30 = tmp33;
              }
            }
          }
          let tmp18Result = null;
          if (null != actionedByUser) {
            tmp18Result = null;
            if (null != actionedAt) {
              const obj29 = { style: tmp4.actionedInfo, children: null };
              const intl2 = util.intl;
              let username = actionedByUser.global_name;
              if (username == null) {
                username = actionedByUser.username;
              }
              const obj30 = { variant: "text-sm/normal", color: "text-default", children: null };
              const obj31 = { username };
              obj30.children = intl2.formatToPlainString(util.t.qnimbL, obj31);
              const items9 = [closure_1_8(Text_Text.Text, obj30), ,];
              const obj32 = { style: tmp4.dot };
              items9[1] = closure_1_8(View, obj32);
              const obj33 = { variant: "text-sm/normal", color: "text-default", children: null };
              const _Date = Date;
              const tmpResult2 = DateUtils;
              const date1 = new Date(SnowflakeUtilsDefault.extractTimestamp(actionedAt));
              obj33.children = tmpResult2.dateFormat(date1, "LL");
              items9[2] = closure_1_8(Text_Text.Text, obj33);
              obj29.children = items9;
              tmp18Result = options(View, obj29);
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
    : function JoinRequestActionSheetApplicationActions(joinRequest) {
        joinRequest = joinRequest.joinRequest;
        ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
        const tmp = closure_11();
        if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
          if (null != joinRequest.interviewChannelId) {
            const obj2 = { style: tmp.statusContainer, children: null };
            const obj3 = { style: tmp.statusRow, children: null };
            const obj4 = { size: "lg", color: nativeDefault.colors.STATUS_WARNING };
            const items = [closure_1_8(HourglassIcon.HourglassIcon, obj4)];
            const obj5 = { children: null };
            const obj6 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
            const intl6 = util.intl;
            obj6.children = intl6.string(util.t["Vr+7eO"]);
            obj5.children = closure_1_8(Text_Text.Text, obj6);
            items[1] = closure_1_8(View, obj5);
            obj3.children = items;
            const items1 = [options(View, obj3)];
            const obj7 = { joinRequest, label: null };
            const intl7 = util.intl;
            obj7.label = intl7.string(util.t.rcqdhN);
            items1[1] = closure_1_8(closure_13, obj7);
            obj2.children = items1;
            return options(View, obj2);
          }
        }
        if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
          const obj8 = { style: tmp.statusContainer, children: null };
          const obj9 = { style: tmp.statusRow, children: null };
          const obj10 = {
            size: "lg",
            color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL,
            secondaryColor: nativeDefault.colors.WHITE,
          };
          const items2 = [closure_1_8(CircleXIcon.CircleXIcon, obj10)];
          const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
          const intl3 = util.intl;
          obj11.children = intl3.string(util.t.bSZkla);
          const items3 = [closure_1_8(Text_Text.Text, obj11), ,];
          let tmp18Result = null;
          if (null != actionedByUser) {
            tmp18Result = null;
            if (null != actionedAt) {
              const obj12 = { style: tmp.actionedInfo, children: null };
              const intl4 = util.intl;
              let username2 = actionedByUser.global_name;
              if (username2 == null) {
                username2 = actionedByUser.username;
              }
              const obj13 = { variant: "text-sm/normal", color: "text-default", children: null };
              const obj14 = { username: username2 };
              obj13.children = intl4.formatToPlainString(util.t.qnimbL, obj14);
              const items4 = [closure_1_8(Text_Text.Text, obj13), ,];
              const obj15 = { style: tmp.dot };
              items4[1] = closure_1_8(View, obj15);
              const obj16 = { variant: "text-sm/normal", color: "text-default", children: null };
              const _Date2 = Date;
              const tmp2Result = DateUtils;
              const date = new Date(SnowflakeUtilsDefault.extractTimestamp(actionedAt));
              obj16.children = tmp2Result.dateFormat(date, "LL");
              items4[2] = closure_1_8(Text_Text.Text, obj16);
              obj12.children = items4;
              tmp18Result = options(View, obj12);
              const tmp21Result = SnowflakeUtilsDefault;
            }
          }
          items3[1] = tmp18Result;
          let tmp20Result = null != rejectionReason;
          if (tmp20Result) {
            const obj17 = { variant: "text-sm/normal", color: "text-default", children: null };
            const intl5 = util.intl;
            const obj18 = { rejectionReason };
            obj17.children = intl5.formatToPlainString(util.t.fU5PPM, obj18);
            tmp20Result = closure_1_8(Text_Text.Text, obj17);
          }
          const obj19 = { children: null };
          items3[2] = tmp20Result;
          obj19.children = items3;
          items2[1] = options(View, obj19);
          obj9.children = items2;
          const items5 = [options(View, obj9)];
          const obj20 = { joinRequest };
          items5[1] = closure_1_8(closure_13, obj20);
          obj8.children = items5;
          return options(View, obj8);
        } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
          const obj = { style: tmp.statusContainer, children: null };
          const obj21 = { style: tmp.statusRow, children: null };
          const obj22 = {
            size: "lg",
            color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
            secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
          };
          const items6 = [closure_1_8(CircleCheckIcon.CircleCheckIcon, obj22)];
          const obj23 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
          const intl = util.intl;
          obj23.children = intl.string(util.t.aURgY2);
          const items7 = [closure_1_8(Text_Text.Text, obj23)];
          let tmp6Result = null;
          if (null != actionedByUser) {
            tmp6Result = null;
            if (null != actionedAt) {
              const obj24 = { style: tmp.actionedInfo, children: null };
              const intl2 = util.intl;
              let username = actionedByUser.global_name;
              if (username == null) {
                username = actionedByUser.username;
              }
              const obj25 = { variant: "text-sm/normal", color: "text-default", children: null };
              const obj26 = { username };
              obj25.children = intl2.formatToPlainString(util.t.qnimbL, obj26);
              const items8 = [closure_1_8(Text_Text.Text, obj25), ,];
              const obj27 = { style: tmp.dot };
              items8[1] = closure_1_8(View, obj27);
              const obj28 = { variant: "text-sm/normal", color: "text-default", children: null };
              const _Date = Date;
              const tmp2Result2 = DateUtils;
              const date1 = new Date(SnowflakeUtilsDefault.extractTimestamp(actionedAt));
              obj28.children = tmp2Result2.dateFormat(date1, "LL");
              items8[2] = closure_1_8(Text_Text.Text, obj28);
              obj24.children = items8;
              tmp6Result = options(View, obj24);
              const tmp9Result = SnowflakeUtilsDefault;
            }
          }
          const obj29 = { children: null };
          items7[1] = tmp6Result;
          obj29.children = items7;
          items6[1] = options(View, obj29);
          obj21.children = items6;
          const items9 = [options(View, obj21)];
          const obj30 = { joinRequest };
          items9[1] = closure_1_8(closure_13, obj30);
          obj.children = items9;
          return options(View, obj);
        } else {
          return null;
        }
      },
);
ReactCompilerGating = fn(558);
let closure_15 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function JoinRequestActionSheetApplicationActions(joinRequest) {
        const cResult = joinRequest(576).c(20);
        joinRequest = joinRequest.joinRequest;
        if (cResult[0] !== joinRequest) {
          const fn = function n() {
            openJoinRequestActionSheetDefault(joinRequest);
          };
          cResult[0] = joinRequest;
          cResult[1] = fn;
          let tmp4 = fn;
        } else {
          tmp4 = cResult[1];
        }
        const obj = joinRequest(576);
        const joinRequestButtonActions = joinRequest(12330).useJoinRequestButtonActions(
          joinRequest,
          joinRequest.interviewChannelId,
          tmp4,
        );
        ({ approveRequest, rejectRequest, handleOpenInterview, submitting } = joinRequestButtonActions);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { color: nativeDefault.colors.WHITE, size: "lg" };
          const tmp10 = closure_8(tmp(4776).CheckmarkLargeIcon, obj2);
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.BzjDQJ);
          cResult[2] = tmp10;
          cResult[3] = stringResult;
          let tmp7 = stringResult;
          let tmp6 = tmp10;
        } else {
          tmp6 = cResult[2];
          tmp7 = cResult[3];
        }
        if (cResult[4] === approveRequest) {
          if (cResult[5] === submitting) {
            let tmp12 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { color: nativeDefault.colors.WHITE, size: "lg" };
            const tmp18 = closure_8(tmp(4996).XLargeIcon, obj3);
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t.hDtbsz);
            cResult[7] = tmp18;
            cResult[8] = stringResult1;
            let tmp15 = stringResult1;
            let tmp14 = tmp18;
          } else {
            tmp14 = cResult[7];
            tmp15 = cResult[8];
          }
          if (cResult[9] === rejectRequest) {
            if (cResult[10] === submitting) {
              let tmp20 = cResult[11];
            }
            if (cResult[12] === handleOpenInterview) {
              if (cResult[13] === joinRequest.interviewChannelId) {
                if (cResult[14] === submitting) {
                  let tmp23 = cResult[15];
                }
                if (cResult[16] === tmp12) {
                  if (cResult[17] === tmp20) {
                    if (cResult[18] === tmp23) {
                      let tmp28 = cResult[19];
                    }
                    return tmp28;
                  }
                }
                const obj4 = { direction: "horizontal", align: "flex-start", justify: "space-evenly", children: null };
                const items = [tmp12, tmp20, tmp23];
                obj4.children = items;
                const tmp30 = closure_9(tmp(5965).ButtonGroup, obj4);
                cResult[16] = tmp12;
                cResult[17] = tmp20;
                cResult[18] = tmp23;
                cResult[19] = tmp30;
                tmp28 = tmp30;
              }
            }
            let tmp25 = null == joinRequest.interviewChannelId;
            if (tmp25) {
              const obj5 = { variant: "secondary", icon: null, label: null, onPress: null, disabled: null };
              const obj6 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
              obj5.icon = closure_8(tmp(8182).ChatIcon, obj6);
              const intl3 = tmp(1126).intl;
              obj5.label = intl3.string(tmp(1126).t.KQeYoC);
              obj5.onPress = handleOpenInterview;
              obj5.disabled = submitting;
              tmp25 = closure_8(tmp(8114).IconButton, obj5);
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
          const tmp22 = closure_8(tmp(8114).IconButton, obj7);
          cResult[9] = rejectRequest;
          cResult[10] = submitting;
          cResult[11] = tmp22;
          tmp20 = tmp22;
        }
        const tmp13 = closure_8(joinRequest(8114).IconButton, {
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
        const tmpResult = joinRequest(12330);
      }
    : function JoinRequestActionSheetApplicationActions(joinRequest) {
        joinRequest = joinRequest.joinRequest;
        const items = [joinRequest];
        const callback = noop.useCallback(() => {
          openJoinRequestActionSheetDefault(joinRequest);
        }, items);
        const joinRequestButtonActions = joinRequest(12330).useJoinRequestButtonActions(
          joinRequest,
          joinRequest.interviewChannelId,
          callback,
        );
        ({ submitting, approveRequest, rejectRequest, handleOpenInterview } = joinRequestButtonActions);
        const obj2 = { variant: "primary", icon: null, label: null, onPress: null, disabled: null };
        const obj = joinRequest(12330);
        obj2.icon = closure_8(joinRequest(4776).CheckmarkLargeIcon, { color: nativeDefault.colors.WHITE, size: "lg" });
        const intl = joinRequest(1126).intl;
        obj2.label = intl.string(joinRequest(1126).t.BzjDQJ);
        obj2.onPress = approveRequest;
        obj2.disabled = submitting;
        const children = [closure_8(joinRequest(8114).IconButton, obj2), ,];
        const obj4 = { variant: "destructive", icon: null, label: null, onPress: null, disabled: null };
        const obj3 = { color: nativeDefault.colors.WHITE, size: "lg" };
        obj4.icon = closure_8(joinRequest(4996).XLargeIcon, { color: nativeDefault.colors.WHITE, size: "lg" });
        const intl2 = joinRequest(1126).intl;
        obj4.label = intl2.string(joinRequest(1126).t.hDtbsz);
        obj4.onPress = rejectRequest;
        obj4.disabled = submitting;
        children[1] = closure_8(joinRequest(8114).IconButton, obj4);
        let tmp6Result = null == joinRequest.interviewChannelId;
        if (tmp6Result) {
          const obj6 = { variant: "secondary", icon: null, label: null, onPress: null, disabled: null };
          const obj7 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
          obj6.icon = closure_8(tmp2(8182).ChatIcon, obj7);
          const intl3 = tmp2(1126).intl;
          obj6.label = intl3.string(tmp2(1126).t.KQeYoC);
          obj6.onPress = handleOpenInterview;
          obj6.disabled = submitting;
          tmp6Result = closure_8(tmp2(8114).IconButton, obj6);
        }
        children[2] = tmp6Result;
        return closure_9(joinRequest(5965).ButtonGroup, {
          direction: "horizontal",
          align: "flex-start",
          justify: "space-evenly",
          children,
        });
      },
);
ReactCompilerGating = fn(558);
let closure_16 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function VerificationFormResponse(arg0) {
        const cResult = c.c(38);
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
              if (cResult[2] === formResponseMargin) {
                let tmp40 = cResult[3];
              }
              if (cResult[4] !== field.label) {
                const obj2 = { variant: "text-md/medium", color: "text-default", children: field.label };
                const tmp43 = closure_1_8(Text_Text.Text, obj2);
                cResult[4] = field.label;
                cResult[5] = tmp43;
                let tmp41 = tmp43;
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
                const tmp48 = closure_1_8(CircleCheckIcon.CircleCheckIcon, obj3);
                cResult[6] = tmp48;
                let tmp45 = tmp48;
              } else {
                tmp45 = cResult[6];
              }
              if (cResult[7] === tmp40) {
                if (cResult[8] === tmp41) {
                  let tmp49 = cResult[9];
                }
                return tmp49;
              }
              const obj4 = { style: tmp40, children: null };
              const items = [tmp41, tmp45];
              obj4.children = items;
              const tmp52 = options(View, obj4);
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
            if (cResult[11] === tmp4.formQuestion) {
              let tmp21 = cResult[12];
            }
            let formResponseMargin1 = null;
            if (!isLastField) {
              formResponseMargin1 = tmp4.formResponseMargin;
            }
            if (cResult[13] === tmp4.formResponse) {
              if (cResult[14] === formResponseMargin1) {
                let tmp26 = cResult[15];
              }
              let tmp27 = null;
              if (null != field.response) {
                tmp27 = field.choices[field.response];
              }
              if (cResult[16] !== tmp27) {
                const obj5 = { variant: "text-md/medium", color: "text-default", children: tmp27 };
                const tmp30 = closure_1_8(Text_Text.Text, obj5);
                cResult[16] = tmp27;
                cResult[17] = tmp30;
                let tmp28 = tmp30;
              } else {
                tmp28 = cResult[17];
              }
              if (cResult[18] === tmp26) {
                if (cResult[19] === tmp28) {
                  let tmp31 = cResult[20];
                }
                if (cResult[21] === tmp21) {
                  if (cResult[22] === tmp31) {
                    let tmp35 = cResult[23];
                  }
                  return tmp35;
                }
                const obj6 = { children: null };
                const items2 = [tmp21, tmp31];
                obj6.children = items2;
                const tmp38 = options(View, obj6);
                cResult[21] = tmp21;
                cResult[22] = tmp31;
                cResult[23] = tmp38;
                tmp35 = tmp38;
              }
              const obj7 = { style: tmp26, children: tmp28 };
              const tmp34 = closure_1_8(View, obj7);
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
          const tmp23 = closure_1_8(Text_Text.Text, obj8);
          cResult[10] = field.label;
          cResult[11] = tmp4.formQuestion;
          cResult[12] = tmp23;
          tmp21 = tmp23;
        } else {
          if (cResult[24] === field.label) {
            if (cResult[25] === tmp4.formQuestion) {
              let tmp5 = cResult[26];
            }
            let formResponseMargin2 = null;
            if (!isLastField) {
              formResponseMargin2 = tmp4.formResponseMargin;
            }
            if (cResult[27] === tmp4.formResponse) {
              if (cResult[28] === formResponseMargin2) {
                let tmp9 = cResult[29];
              }
              if (cResult[30] !== field.response) {
                const obj9 = { variant: "text-md/medium", color: "text-default", children: field.response };
                const tmp12 = closure_1_8(Text_Text.Text, obj9);
                cResult[30] = field.response;
                cResult[31] = tmp12;
                let tmp10 = tmp12;
              } else {
                tmp10 = cResult[31];
              }
              if (cResult[32] === tmp9) {
                if (cResult[33] === tmp10) {
                  let tmp13 = cResult[34];
                }
                if (cResult[35] === tmp5) {
                  if (cResult[36] === tmp13) {
                    let tmp17 = cResult[37];
                  }
                  return tmp17;
                }
                const obj10 = { children: null };
                const items4 = [tmp5, tmp13];
                obj10.children = items4;
                const tmp20 = options(View, obj10);
                cResult[35] = tmp5;
                cResult[36] = tmp13;
                cResult[37] = tmp20;
                tmp17 = tmp20;
              }
              const obj11 = { style: tmp9, children: tmp10 };
              const tmp16 = closure_1_8(View, obj11);
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
          const tmp7 = closure_1_8(Text_Text.Text, obj12);
          cResult[24] = field.label;
          cResult[25] = tmp4.formQuestion;
          cResult[26] = tmp7;
          tmp5 = tmp7;
        }
      }
    : function VerificationFormResponse(arg0) {
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
          const obj2 = { style: null, children: null };
          items[2] = formResponseMargin;
          obj2.style = items;
          const obj3 = { variant: "text-md/medium", color: "text-default", children: field.label };
          const items1 = [closure_1_8(Text_Text.Text, obj3)];
          const obj4 = {
            size: "sm",
            color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
            secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
          };
          items1[1] = closure_1_8(CircleCheckIcon.CircleCheckIcon, obj4);
          obj2.children = items1;
          return options(View, obj2);
        } else if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
          const obj5 = {
            style: tmp.formQuestion,
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: field.label,
          };
          const items2 = [closure_1_8(Text_Text.Text, obj5)];
          const items3 = [tmp.formResponse];
          let formResponseMargin1 = null;
          if (!isLastField) {
            formResponseMargin1 = tmp.formResponseMargin;
          }
          const obj6 = { style: null, children: null };
          items3[1] = formResponseMargin1;
          obj6.style = items3;
          let tmp10 = null;
          if (null != field.response) {
            tmp10 = field.choices[field.response];
          }
          const obj7 = { children: null };
          const obj8 = { variant: "text-md/medium", color: "text-default", children: tmp10 };
          obj6.children = closure_1_8(Text_Text.Text, obj8);
          items2[1] = closure_1_8(View, obj6);
          obj7.children = items2;
          return options(View, obj7);
        } else {
          const obj9 = {
            style: tmp.formQuestion,
            variant: "text-sm/semibold",
            color: "text-subtle",
            children: field.label,
          };
          const items4 = [closure_1_8(Text_Text.Text, obj9)];
          const items5 = [tmp.formResponse];
          let formResponseMargin2 = null;
          if (!isLastField) {
            formResponseMargin2 = tmp.formResponseMargin;
          }
          const obj = { children: null };
          const obj10 = { style: null, children: null };
          items5[1] = formResponseMargin2;
          obj10.style = items5;
          const obj11 = { variant: "text-md/medium", color: "text-default", children: field.response };
          obj10.children = closure_1_8(Text_Text.Text, obj11);
          items4[1] = closure_1_8(View, obj10);
          obj.children = items4;
          return options(View, obj);
        }
      },
);
ReactCompilerGating = fn(558);
let closure_17 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function JoinRequestAboutView(arg0) {
        const cResult = c.c(29);
        ({ joinRequest, user } = arg0);
        const tmp4 = closure_11();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["ldCE/p"]);
          cResult[0] = stringResult;
          let first = stringResult;
        } else {
          first = cResult[0];
        }
        if (cResult[1] !== tmp4.accountInfoLabel) {
          const obj2 = {
            variant: "text-sm/semibold",
            color: "text-subtle",
            style: tmp4.accountInfoLabel,
            children: first,
          };
          const tmp9 = closure_1_8(Text_Text.Text, obj2);
          cResult[1] = tmp4.accountInfoLabel;
          cResult[2] = tmp9;
          let tmp7 = tmp9;
        } else {
          tmp7 = cResult[2];
        }
        ({ accountInfoContainer, accountInfoRow } = tmp4);
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { variant: "text-sm/semibold", color: "text-strong", children: null };
          const intl2 = util.intl;
          obj3.children = intl2.string(util.t.SaDIpL);
          const tmp12 = closure_1_8(Text_Text.Text, obj3);
          cResult[3] = tmp12;
          let tmp10 = tmp12;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== user.id) {
          const _Date = Date;
          const tmpResult = DateUtils;
          const date = new Date(SnowflakeUtilsDefault.extractTimestamp(user.id));
          const dateFormatResult = tmpResult.dateFormat(date, "LL");
          cResult[4] = user.id;
          cResult[5] = dateFormatResult;
          let tmp13 = dateFormatResult;
        } else {
          tmp13 = cResult[5];
        }
        if (cResult[6] !== tmp13) {
          const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: tmp13 };
          const tmp22 = closure_1_8(Text_Text.Text, obj4);
          cResult[6] = tmp13;
          cResult[7] = tmp22;
          let tmp20 = tmp22;
        } else {
          tmp20 = cResult[7];
        }
        if (cResult[8] === tmp4.accountInfoRow) {
          if (cResult[9] === tmp20) {
            let tmp23 = cResult[10];
          }
          if (cResult[11] !== tmp4.divider) {
            const obj6 = { style: tmp4.divider };
            const tmp28 = closure_1_8(View, obj6);
            cResult[11] = tmp4.divider;
            cResult[12] = tmp28;
            let tmp25 = tmp28;
          } else {
            tmp25 = cResult[12];
          }
          const _Symbol = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const obj7 = { variant: "text-sm/semibold", color: "text-strong", children: null };
            const intl3 = util.intl;
            obj7.children = intl3.string(util.t["Vt4cn+"]);
            const tmp31 = closure_1_8(Text_Text.Text, obj7);
            cResult[13] = tmp31;
            let tmp29 = tmp31;
          } else {
            tmp29 = cResult[13];
          }
          if (cResult[14] !== joinRequest.createdAt) {
            const _Date2 = Date;
            const date1 = new Date(joinRequest.createdAt);
            const dateFormatResult1 = DateUtils.dateFormat(date1, "LL");
            cResult[14] = joinRequest.createdAt;
            cResult[15] = dateFormatResult1;
            let tmp32 = dateFormatResult1;
            const tmpResult2 = DateUtils;
          } else {
            tmp32 = cResult[15];
          }
          if (cResult[16] !== tmp32) {
            const obj8 = { variant: "text-sm/normal", color: "text-subtle", children: tmp32 };
            const tmp40 = closure_1_8(Text_Text.Text, obj8);
            cResult[16] = tmp32;
            cResult[17] = tmp40;
            let tmp38 = tmp40;
          } else {
            tmp38 = cResult[17];
          }
          if (cResult[18] === tmp4.accountInfoRow) {
            if (cResult[19] === tmp38) {
              let tmp41 = cResult[20];
            }
            if (cResult[21] === tmp4.accountInfoContainer) {
              if (cResult[22] === tmp25) {
                if (cResult[23] === tmp41) {
                  if (cResult[24] === tmp23) {
                    let tmp45 = cResult[25];
                  }
                  if (cResult[26] === tmp45) {
                    if (cResult[27] === tmp7) {
                      let tmp49 = cResult[28];
                    }
                    return tmp49;
                  }
                  const obj9 = { children: null };
                  const items = [tmp7, tmp45];
                  obj9.children = items;
                  const tmp52 = options(collapsed, obj9);
                  cResult[26] = tmp45;
                  cResult[27] = tmp7;
                  cResult[28] = tmp52;
                  tmp49 = tmp52;
                }
              }
            }
            const obj10 = { style: accountInfoContainer, children: null };
            const items1 = [tmp23, tmp25, tmp41];
            obj10.children = items1;
            const tmp48 = options(View, obj10);
            cResult[21] = tmp4.accountInfoContainer;
            cResult[22] = tmp25;
            cResult[23] = tmp41;
            cResult[24] = tmp23;
            cResult[25] = tmp48;
            tmp45 = tmp48;
          }
          const obj11 = { style: tmp4.accountInfoRow, children: null };
          const items2 = [tmp29, tmp38];
          obj11.children = items2;
          const tmp44 = options(View, obj11);
          cResult[18] = tmp4.accountInfoRow;
          cResult[19] = tmp38;
          cResult[20] = tmp44;
          tmp41 = tmp44;
        }
        const obj12 = { style: accountInfoRow, children: null };
        const items3 = [tmp10, tmp20];
        obj12.children = items3;
        const tmp24 = options(View, obj12);
        cResult[8] = tmp4.accountInfoRow;
        cResult[9] = tmp20;
        cResult[10] = tmp24;
        tmp23 = tmp24;
      }
    : function JoinRequestAboutView(arg0) {
        ({ joinRequest, user } = arg0);
        const tmp = closure_11();
        const obj = { children: null };
        const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.accountInfoLabel, children: null };
        const intl = util.intl;
        obj2.children = intl.string(util.t["ldCE/p"]);
        const items = [closure_1_8(Text_Text.Text, obj2)];
        const obj3 = { style: tmp.accountInfoContainer, children: null };
        const obj4 = { style: tmp.accountInfoRow, children: null };
        const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: null };
        const intl2 = util.intl;
        obj5.children = intl2.string(util.t.SaDIpL);
        const items1 = [closure_1_8(Text_Text.Text, obj5)];
        const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: null };
        const obj7 = DateUtils;
        obj6.children = obj7.dateFormat(new Date(SnowflakeUtilsDefault.extractTimestamp(user.id)), "LL");
        items1[1] = closure_1_8(Text_Text.Text, obj6);
        obj4.children = items1;
        const items2 = [options(View, obj4), closure_1_8(View, { style: tmp.divider })];
        const obj10 = { style: tmp.accountInfoRow, children: null };
        const obj11 = { variant: "text-sm/semibold", color: "text-strong", children: null };
        const intl3 = util.intl;
        obj11.children = intl3.string(util.t["Vt4cn+"]);
        const items3 = [closure_1_8(Text_Text.Text, obj11)];
        const obj12 = { variant: "text-sm/normal", color: "text-subtle", children: null };
        const date = new Date(SnowflakeUtilsDefault.extractTimestamp(user.id));
        const obj9 = { style: tmp.divider };
        const obj13 = DateUtils;
        obj12.children = obj13.dateFormat(new Date(joinRequest.createdAt), "LL");
        items3[1] = closure_1_8(Text_Text.Text, obj12);
        obj10.children = items3;
        items2[2] = options(View, obj10);
        obj3.children = items2;
        items[1] = options(View, obj3);
        obj.children = items;
        return options(collapsed, obj);
      },
);
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  marginHorizontal: 16,
  marginBottom: 16,
  borderRadius: nativeDefault.radii.md,
};
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx",
);

export default noop.memo(function JoinRequestActionSheetContent(displayProfile) {
  ({ user, joinRequest } = displayProfile);
  let memo;
  let formResponses;
  if (joinRequest != null) {
    formResponses = joinRequest.formResponses;
  }
  const items = [formResponses];
  memo = noop.useMemo(() => {
    let formResponses;
    if (joinRequest != null) {
      formResponses = joinRequest.formResponses;
    }
    if (formResponses == null) {
      formResponses = [];
    }
    return formResponses;
  }, items);
  const obj = { style: { paddingBottom: memo(1631)().bottom }, children: null };
  const items1 = [closure_8(closure_12, { joinRequest, user, displayProfile: displayProfile.displayProfile }), , , ,];
  if (joinRequest.applicationStatus === joinRequest(4903).GuildJoinRequestApplicationStatuses.SUBMITTED) {
    let tmp8Result = null != joinRequest.interviewChannelId;
    if (tmp8Result) {
      const obj2 = { joinRequest };
      tmp8Result = closure_8(closure_14, obj2);
    }
    const obj3 = { children: null };
    const items2 = [tmp8Result];
    const obj4 = { joinRequest };
    items2[1] = closure_8(closure_15, obj4);
    obj3.children = items2;
    let tmp8Result1 = closure_9(closure_10, obj3);
  } else {
    const obj5 = { joinRequest };
    tmp8Result1 = closure_8(closure_14, obj5);
  }
  items1[1] = tmp8Result1;
  const obj6 = { style: closure_11().responsesContainer, children: null };
  let mapped;
  if (memo != null) {
    mapped = memo.map((field, index) =>
      closure_2_8(
        closure_16,
        { field, isLastField: index === memo.length - 1 },
        "response-" + index + "-" + field.field_type + "-" + field.label + "-" + index === memo.length - 1,
      ),
    );
  }
  obj6.children = mapped;
  items1[2] = closure_8(View, obj6);
  items1[3] = closure_8(closure_17, { joinRequest, user });
  items1[4] = closure_8(memo(16957), {
    guildId: joinRequest.guildId,
    userId: joinRequest.userId,
    selectedJoinRequestId: joinRequest.joinRequestId,
  });
  obj.children = items1;
  return closure_9(View, obj);
});
