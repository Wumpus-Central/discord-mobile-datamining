// discord_app/modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import CircleCheckIcon from "../../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CircleXIcon from "../../../../design/components/Icon/native/redesign/generated/CircleXIcon.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import HourglassIcon from "../../../../design/components/Icon/native/redesign/generated/HourglassIcon.tsx";
import openJoinRequestActionSheetDefault from "../openJoinRequestActionSheet.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
function OpenInterviewButton(arg0) {
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
  const joinRequestButtonActions = interviewChannelId(12784).useJoinRequestButtonActions(
    joinRequest,
    interviewChannelId,
  );
  ({ handleOpenInterview, submitting } = joinRequestButtonActions);
  const obj2 = interviewChannelId(12784);
  if (!obj3.isActionedApplicationStatus(joinRequest.applicationStatus)) {
    const obj4 = { variant: "secondary", size: "md", icon: null, text: null, onPress: null, disabled: null };
    const obj5 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
    obj4.icon = closure_8(tmp(5158).ChatIcon, obj5);
    if (label == null) {
      const intl = tmp(1115).intl;
      label = intl.string(tmp(1115).t["2simqN"]);
    }
    obj4.text = label;
    obj4.onPress = handleOpenInterview;
    obj4.disabled = submitting;
    let tmp6Result = closure_8(tmp(5062).Button, obj4);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7265).ACTION_SHEET_MAX_WIDTH;
const paddingTop = fn(7322).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const createStyles = fn(4640);
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
let closure_12 = noop.memo((user) => {
  user = user.user;
  ({ displayProfile, joinRequest } = user);
  const tmp3 = joinRequest(8388)();
  const tmp4 = joinRequest(8377)(ACTION_SHEET_MAX_WIDTH);
  ({ primaryColor, secondaryColor, theme } = joinRequest(8374)({ user, displayProfile }));
  const tmp5 = joinRequest(8374)({ user, displayProfile });
  const tmp6 = user;
  const userProfileColors = user(8385).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [joinRequest, user.id];
  ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } = userProfileColors);
  let tmp9 = null;
  if (null != user) {
    const obj2 = { children: null };
    const obj3 = { user, displayProfile, bannerHeight: tmp4 };
    const items1 = [closure_8(joinRequest(8393), obj3)];
    const obj4 = { children: null };
    const obj5 = { user, disableStatus: true, backgroundColor: avatarBackground, statusStyle: null, onPress: null };
    const obj6 = { backgroundColor: statusBackground };
    obj5.statusStyle = obj6;
    obj5.onPress = tmp8;
    const items2 = [closure_8(joinRequest(8403), obj5)];
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
    const obj10 = { user, displayProfile, badgeContainerBackground: containerBackground, isPreviewingChanges: false };
    const items4 = [closure_8(tmp6(13215).PrimaryInfo, obj10)];
    const obj11 = { user };
    items4[1] = closure_8(joinRequest(13275), obj11);
    obj9.children = items4;
    obj7.children = closure_9(View, obj9);
    items2[1] = closure_8(joinRequest(11272), obj7);
    obj4.children = items2;
    items1[1] = closure_9(View, obj4);
    obj2.children = items1;
    tmp9 = closure_9(closure_10, obj2);
    const tmpResult = joinRequest(11272);
  }
  return tmp9;
});
let closure_14 = noop.memo((joinRequest) => {
  joinRequest = joinRequest.joinRequest;
  ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
  const tmp = closure_11();
  if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
    if (null != joinRequest.interviewChannelId) {
      const obj2 = { style: tmp.statusContainer, children: null };
      const obj3 = { style: tmp.statusRow, children: null };
      const obj4 = { size: "lg", color: nativeDefault.colors.STATUS_WARNING };
      const items = [React6(HourglassIcon.HourglassIcon, obj4)];
      const obj5 = { children: null };
      const obj6 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
      const intl6 = util.intl;
      obj6.children = intl6.string(util.t["Vr+7eO"]);
      obj5.children = React6(Text_Text.Text, obj6);
      items[1] = React6(View, obj5);
      obj3.children = items;
      const items1 = [React7(View, obj3)];
      const obj7 = { joinRequest, label: null };
      const intl7 = util.intl;
      obj7.label = intl7.string(util.t.rcqdhN);
      items1[1] = React6(OpenInterviewButton, obj7);
      obj2.children = items1;
      return React7(View, obj2);
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
    const items2 = [React6(CircleXIcon.CircleXIcon, obj10)];
    const obj11 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl3 = util.intl;
    obj11.children = intl3.string(util.t.bSZkla);
    const items3 = [React6(Text_Text.Text, obj11), ,];
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
        const items4 = [React6(Text_Text.Text, obj13), ,];
        const obj15 = { style: tmp.dot };
        items4[1] = React6(View, obj15);
        const obj16 = { variant: "text-sm/normal", color: "text-default", children: null };
        const _Date2 = Date;
        const tmp2Result = DateUtils;
        const date = new Date(SnowflakeUtilsDefault.extractTimestamp(actionedAt));
        obj16.children = tmp2Result.dateFormat(date, "LL");
        items4[2] = React6(Text_Text.Text, obj16);
        obj12.children = items4;
        tmp18Result = React7(View, obj12);
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
      tmp20Result = React6(Text_Text.Text, obj17);
    }
    const obj19 = { children: null };
    items3[2] = tmp20Result;
    obj19.children = items3;
    items2[1] = React7(View, obj19);
    obj9.children = items2;
    const items5 = [React7(View, obj9)];
    const obj20 = { joinRequest };
    items5[1] = React6(OpenInterviewButton, obj20);
    obj8.children = items5;
    return React7(View, obj8);
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    const obj = { style: tmp.statusContainer, children: null };
    const obj21 = { style: tmp.statusRow, children: null };
    const obj22 = {
      size: "lg",
      color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
      secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
    };
    const items6 = [React6(CircleCheckIcon.CircleCheckIcon, obj22)];
    const obj23 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj23.children = intl.string(util.t.aURgY2);
    const items7 = [React6(Text_Text.Text, obj23)];
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
        const items8 = [React6(Text_Text.Text, obj25), ,];
        const obj27 = { style: tmp.dot };
        items8[1] = React6(View, obj27);
        const obj28 = { variant: "text-sm/normal", color: "text-default", children: null };
        const _Date = Date;
        const tmp2Result2 = DateUtils;
        const date1 = new Date(SnowflakeUtilsDefault.extractTimestamp(actionedAt));
        obj28.children = tmp2Result2.dateFormat(date1, "LL");
        items8[2] = React6(Text_Text.Text, obj28);
        obj24.children = items8;
        tmp6Result = React7(View, obj24);
        const tmp9Result = SnowflakeUtilsDefault;
      }
    }
    const obj29 = { children: null };
    items7[1] = tmp6Result;
    obj29.children = items7;
    items6[1] = React7(View, obj29);
    obj21.children = items6;
    const items9 = [React7(View, obj21)];
    const obj30 = { joinRequest };
    items9[1] = React6(OpenInterviewButton, obj30);
    obj.children = items9;
    return React7(View, obj);
  } else {
    return null;
  }
});
let closure_15 = noop.memo((joinRequest) => {
  joinRequest = joinRequest.joinRequest;
  const items = [joinRequest];
  const callback = noop.useCallback(() => {
    openJoinRequestActionSheetDefault(joinRequest);
  }, items);
  const joinRequestButtonActions = joinRequest(12784).useJoinRequestButtonActions(
    joinRequest,
    joinRequest.interviewChannelId,
    callback,
  );
  ({ submitting, approveRequest, rejectRequest, handleOpenInterview } = joinRequestButtonActions);
  const obj2 = { variant: "primary", icon: null, label: null, onPress: null, disabled: null };
  const obj = joinRequest(12784);
  obj2.icon = closure_8(joinRequest(4590).CheckmarkLargeIcon, { color: nativeDefault.colors.WHITE, size: "lg" });
  const intl = joinRequest(1115).intl;
  obj2.label = intl.string(joinRequest(1115).t.BzjDQJ);
  obj2.onPress = approveRequest;
  obj2.disabled = submitting;
  const children = [closure_8(joinRequest(8057).IconButton, obj2), ,];
  const obj4 = { variant: "destructive", icon: null, label: null, onPress: null, disabled: null };
  const obj3 = { color: nativeDefault.colors.WHITE, size: "lg" };
  obj4.icon = closure_8(joinRequest(4592).XLargeIcon, { color: nativeDefault.colors.WHITE, size: "lg" });
  const intl2 = joinRequest(1115).intl;
  obj4.label = intl2.string(joinRequest(1115).t.hDtbsz);
  obj4.onPress = rejectRequest;
  obj4.disabled = submitting;
  children[1] = closure_8(joinRequest(8057).IconButton, obj4);
  let tmp6Result = null == joinRequest.interviewChannelId;
  if (tmp6Result) {
    const obj6 = { variant: "secondary", icon: null, label: null, onPress: null, disabled: null };
    const obj7 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
    obj6.icon = closure_8(tmp2(5158).ChatIcon, obj7);
    const intl3 = tmp2(1115).intl;
    obj6.label = intl3.string(tmp2(1115).t.KQeYoC);
    obj6.onPress = handleOpenInterview;
    obj6.disabled = submitting;
    tmp6Result = closure_8(tmp2(8057).IconButton, obj6);
  }
  children[2] = tmp6Result;
  return closure_9(joinRequest(5521).ButtonGroup, {
    direction: "horizontal",
    align: "flex-start",
    justify: "space-evenly",
    children,
  });
});
let closure_16 = noop.memo((arg0) => {
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
    const items1 = [React6(Text_Text.Text, obj3)];
    const obj4 = {
      size: "sm",
      color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND,
      secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT,
    };
    items1[1] = React6(CircleCheckIcon.CircleCheckIcon, obj4);
    obj2.children = items1;
    return React7(View, obj2);
  } else if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
    const obj5 = { style: tmp.formQuestion, variant: "text-sm/semibold", color: "text-subtle", children: field.label };
    const items2 = [React6(Text_Text.Text, obj5)];
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
    obj6.children = React6(Text_Text.Text, obj8);
    items2[1] = React6(View, obj6);
    obj7.children = items2;
    return React7(View, obj7);
  } else {
    const obj9 = { style: tmp.formQuestion, variant: "text-sm/semibold", color: "text-subtle", children: field.label };
    const items4 = [React6(Text_Text.Text, obj9)];
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
    obj10.children = React6(Text_Text.Text, obj11);
    items4[1] = React6(View, obj10);
    obj.children = items4;
    return React7(View, obj);
  }
});
let closure_17 = noop.memo((arg0) => {
  ({ joinRequest, user } = arg0);
  const tmp = closure_11();
  const obj = { children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.accountInfoLabel, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["ldCE/p"]);
  const items = [React6(Text_Text.Text, obj2)];
  const obj3 = { style: tmp.accountInfoContainer, children: null };
  const obj4 = { style: tmp.accountInfoRow, children: null };
  const obj5 = { variant: "text-sm/semibold", color: "text-strong", children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.SaDIpL);
  const items1 = [React6(Text_Text.Text, obj5)];
  const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const obj7 = DateUtils;
  obj6.children = obj7.dateFormat(new Date(SnowflakeUtilsDefault.extractTimestamp(user.id)), "LL");
  items1[1] = React6(Text_Text.Text, obj6);
  obj4.children = items1;
  const items2 = [React7(View, obj4), React6(View, { style: tmp.divider })];
  const obj10 = { style: tmp.accountInfoRow, children: null };
  const obj11 = { variant: "text-sm/semibold", color: "text-strong", children: null };
  const intl3 = util.intl;
  obj11.children = intl3.string(util.t["Vt4cn+"]);
  const items3 = [React6(Text_Text.Text, obj11)];
  const obj12 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const date = new Date(SnowflakeUtilsDefault.extractTimestamp(user.id));
  const obj9 = { style: tmp.divider };
  const obj13 = DateUtils;
  obj12.children = obj13.dateFormat(new Date(joinRequest.createdAt), "LL");
  items3[1] = React6(Text_Text.Text, obj12);
  obj10.children = items3;
  items2[2] = React7(View, obj10);
  obj3.children = items2;
  items[1] = React7(View, obj3);
  obj.children = items;
  return React7(closure_1_10, obj);
});
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
  const obj = { style: { paddingBottom: memo(1612)().bottom }, children: null };
  const items1 = [closure_8(closure_12, { joinRequest, user, displayProfile: displayProfile.displayProfile }), , , ,];
  if (joinRequest.applicationStatus === joinRequest(4464).GuildJoinRequestApplicationStatuses.SUBMITTED) {
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
      React6(
        closure_16,
        { field, isLastField: index === memo.length - 1 },
        "response-" + index + "-" + field.field_type + "-" + field.label + "-" + index === memo.length - 1,
      ),
    );
  }
  obj6.children = mapped;
  items1[2] = closure_8(View, obj6);
  items1[3] = closure_8(closure_17, { joinRequest, user });
  items1[4] = closure_8(memo(16747), {
    guildId: joinRequest.guildId,
    userId: joinRequest.userId,
    selectedJoinRequestId: joinRequest.joinRequestId,
  });
  obj.children = items1;
  return closure_9(View, obj);
});
