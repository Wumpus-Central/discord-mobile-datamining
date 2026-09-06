// === Module 16580: JoinRequestActionSheetContent ===

// Module 16580 (JoinRequestActionSheetContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import DateUtils from "DateUtils" /* 4242 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;
import CircleCheckIcon from "CircleCheckIcon" /* 4520 */;
import Text_Text from "Text/Text" /* 4556 */;
import CircleXIcon from "CircleXIcon" /* 6616 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import HourglassIcon from "HourglassIcon" /* 9030 */;
import openJoinRequestActionSheetDefault from "openJoinRequestActionSheet" /* 16578 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function OpenInterviewButton(arg0) {
  ({ joinRequest, label } = arg0);
  const interviewChannelId = joinRequest.interviewChannelId;
  let obj = interviewChannelId(504);
  const items = [ChannelStore];
  const items1 = [interviewChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != interviewChannelId;
    if (tmp2) {
      tmp2 = null != ChannelStore.getChannel(tmp);
    }
    return tmp2;
  }, items1);
  const joinRequestButtonActions = interviewChannelId(12633).useJoinRequestButtonActions(joinRequest, interviewChannelId);
  ({ handleOpenInterview, submitting } = joinRequestButtonActions);
  const obj2 = interviewChannelId(12633);
  if (!obj3.isActionedApplicationStatus(joinRequest.applicationStatus)) {
    obj = { variant: "secondary", size: "md", icon: null, text: null, onPress: null, disabled: null };
    obj = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "sm" };
    obj.icon = closure_8(tmp(5071).ChatIcon, obj);
    if (label == null) {
      const intl = tmp(1114).intl;
      label = intl.string(tmp(1114).t["2simqN"]);
    }
    obj.text = label;
    obj.onPress = handleOpenInterview;
    obj.disabled = submitting;
    let tmp6Result = closure_8(tmp(4975).Button, obj);
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
const View = fn(17).View;
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const paddingTop = fn(7208).PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
fn(4560);
let obj = { responsesContainer: null, formQuestion: null, formResponse: null, formResponseMargin: null, termsField: null, statusContainer: null, statusRow: null, actionedInfo: null, dot: null, accountInfoLabel: null, accountInfoContainer: null, accountInfoRow: null, divider: null };
obj = { paddingHorizontal: 16, paddingTop: 24, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, borderTopWidth: 1 };
obj.responsesContainer = obj;
obj.formQuestion = { marginBottom: 8 };
const createStyles = { padding: 12, width: "100%", borderRadius: nativeDefault.radii.md, lineHeight: 20, backgroundColor: nativeDefault.colors.INPUT_BACKGROUND_DEFAULT };
obj.formResponse = createStyles;
obj.formResponseMargin = { marginBottom: 16 };
obj.termsField = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.statusContainer = { flexDirection: "column", gap: 12, paddingHorizontal: 16, paddingVertical: 12, marginTop: 8, marginBottom: 16, marginHorizontal: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
obj.statusRow = { flexDirection: "row", alignItems: "center", gap: 12 };
obj.actionedInfo = { flexDirection: "row", gap: 8, alignItems: "center" };
let size = { height: 4, width: 4, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.TEXT_DEFAULT };
obj.dot = size;
obj.accountInfoLabel = { marginTop: 16, marginHorizontal: 16, marginBottom: 8 };
let obj2 = { flexDirection: "column", gap: 12, paddingHorizontal: 16, paddingVertical: 12, marginTop: 8, marginBottom: 16, marginHorizontal: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.md };
obj.accountInfoContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 16, borderRadius: nativeDefault.radii.md };
obj.accountInfoRow = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 };
const size1 = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj.divider = size1;
let closure_11 = createStyles.createStyles(obj);
let closure_12 = noop.memo((user) => {
  user = user.user;
  ({ displayProfile, joinRequest } = user);
  const tmp3 = joinRequest(8241)();
  const tmp4 = joinRequest(8230)(ACTION_SHEET_MAX_WIDTH);
  ({ primaryColor, secondaryColor, theme } = joinRequest(8227)({ user, displayProfile }));
  let obj = user(8238);
  const userProfileColors = obj.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [joinRequest, user.id];
  ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } = userProfileColors);
  let tmp9 = null;
  if (null != user) {
    obj = { children: null };
    obj = { user, displayProfile, bannerHeight: tmp4 };
    const items1 = [closure_8(joinRequest(8246), obj), ];
    const obj1 = { children: null };
    const obj2 = { user, disableStatus: true, backgroundColor: avatarBackground, statusStyle: null, onPress: null };
    const obj3 = { backgroundColor: statusBackground };
    obj2.statusStyle = obj3;
    obj2.onPress = tmp8;
    const items2 = [closure_8(joinRequest(8256), obj2), ];
    const obj4 = { fallbackBackground: gradientFallbackBackground, primaryColor, secondaryColor, containerStyle: null, children: null };
    const items3 = [, , ];
    ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
    const obj5 = { paddingTop, paddingBottom: 0 };
    items3[2] = obj5;
    obj4.containerStyle = items3;
    const obj6 = { style: tmp3.primaryInfo, children: null };
    const obj7 = { user, displayProfile, badgeContainerBackground: containerBackground, isPreviewingChanges: false };
    const items4 = [closure_8(user(13060).PrimaryInfo, obj7), ];
    const obj8 = { user };
    items4[1] = closure_8(joinRequest(13117), obj8);
    obj6.children = items4;
    obj4.children = closure_9(View, obj6);
    items2[1] = closure_8(joinRequest(11111), obj4);
    obj1.children = items2;
    items1[1] = closure_9(View, obj1);
    obj.children = items1;
    tmp9 = closure_9(closure_10, obj);
    const tmpResult = joinRequest(11111);
  }
  return tmp9;
});
let closure_14 = noop.memo((joinRequest) => {
  joinRequest = joinRequest.joinRequest;
  ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
  const tmp = closure_11();
  if (applicationStatus === MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED) {
    if (null != joinRequest.interviewChannelId) {
      let obj = { style: tmp.statusContainer, children: null };
      obj = { style: tmp.statusRow, children: null };
      const obj1 = { size: "lg", color: nativeDefault.colors.STATUS_WARNING };
      const items = [React6(HourglassIcon.HourglassIcon, obj1), ];
      const obj2 = { children: null };
      const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
      const intl6 = util.intl;
      obj3.children = intl6.string(util.t["Vr+7eO"]);
      obj2.children = React6(Text_Text.Text, obj3);
      items[1] = React6(View, obj2);
      obj.children = items;
      const items1 = [React7(View, obj), ];
      const obj4 = { joinRequest, label: null };
      const intl7 = util.intl;
      obj4.label = intl7.string(util.t.rcqdhN);
      items1[1] = React6(OpenInterviewButton, obj4);
      obj.children = items1;
      return React7(View, obj);
    }
  }
  if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const obj5 = { style: tmp.statusContainer, children: null };
    const obj6 = { style: tmp.statusRow, children: null };
    const obj7 = { size: "lg", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, secondaryColor: nativeDefault.colors.WHITE };
    const items2 = [React6(CircleXIcon.CircleXIcon, obj7), ];
    const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl3 = util.intl;
    obj8.children = intl3.string(util.t.bSZkla);
    const items3 = [React6(Text_Text.Text, obj8), , ];
    let tmp18Result = null;
    if (null != actionedByUser) {
      tmp18Result = null;
      if (null != actionedAt) {
        const obj9 = { style: tmp.actionedInfo, children: null };
        const intl4 = util.intl;
        let username2 = actionedByUser.global_name;
        if (username2 == null) {
          username2 = actionedByUser.username;
        }
        const obj10 = { variant: "text-sm/normal", color: "text-default", children: null };
        const obj11 = { username: username2 };
        obj10.children = intl4.formatToPlainString(util.t.qnimbL, obj11);
        const items4 = [React6(Text_Text.Text, obj10), , ];
        const obj12 = { style: tmp.dot };
        items4[1] = React6(View, obj12);
        const obj13 = { variant: "text-sm/normal", color: "text-default", children: null };
        let tmp2Result = DateUtils;
        const _Date2 = Date;
        const date = new Date(SnowflakeUtilsDefault.extractTimestamp(actionedAt));
        obj13.children = tmp2Result.dateFormat(date, "LL");
        items4[2] = React6(Text_Text.Text, obj13);
        obj9.children = items4;
        tmp18Result = React7(View, obj9);
        const tmp21Result = SnowflakeUtilsDefault;
      }
    }
    items3[1] = tmp18Result;
    let tmp20Result = null != rejectionReason;
    if (tmp20Result) {
      const obj14 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl5 = util.intl;
      const obj15 = { rejectionReason };
      obj14.children = intl5.formatToPlainString(util.t.fU5PPM, obj15);
      tmp20Result = React6(Text_Text.Text, obj14);
    }
    const obj16 = { children: null };
    items3[2] = tmp20Result;
    obj16.children = items3;
    items2[1] = React7(View, obj16);
    obj6.children = items2;
    const items5 = [React7(View, obj6), ];
    const obj17 = { joinRequest };
    items5[1] = React6(OpenInterviewButton, obj17);
    obj5.children = items5;
    return React7(View, obj5);
  } else if (MemberVerificationTypes.GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    obj = { style: tmp.statusContainer, children: null };
    const obj18 = { style: tmp.statusRow, children: null };
    const obj19 = { size: "lg", color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT };
    const items6 = [React6(CircleCheckIcon.CircleCheckIcon, obj19), ];
    const obj20 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj20.children = intl.string(util.t.aURgY2);
    const items7 = [React6(Text_Text.Text, obj20), ];
    let tmp6Result = null;
    if (null != actionedByUser) {
      tmp6Result = null;
      if (null != actionedAt) {
        const obj21 = { style: tmp.actionedInfo, children: null };
        const intl2 = util.intl;
        let username = actionedByUser.global_name;
        if (username == null) {
          username = actionedByUser.username;
        }
        const obj22 = { variant: "text-sm/normal", color: "text-default", children: null };
        const obj23 = { username };
        obj22.children = intl2.formatToPlainString(util.t.qnimbL, obj23);
        const items8 = [React6(Text_Text.Text, obj22), , ];
        const obj24 = { style: tmp.dot };
        items8[1] = React6(View, obj24);
        const obj25 = { variant: "text-sm/normal", color: "text-default", children: null };
        tmp2Result = DateUtils;
        const _Date = Date;
        const date1 = new Date(SnowflakeUtilsDefault.extractTimestamp(actionedAt));
        obj25.children = tmp2Result.dateFormat(date1, "LL");
        items8[2] = React6(Text_Text.Text, obj25);
        obj21.children = items8;
        tmp6Result = React7(View, obj21);
        const tmp9Result = SnowflakeUtilsDefault;
      }
    }
    const obj26 = { children: null };
    items7[1] = tmp6Result;
    obj26.children = items7;
    items6[1] = React7(View, obj26);
    obj18.children = items6;
    const items9 = [React7(View, obj18), ];
    const obj27 = { joinRequest };
    items9[1] = React6(OpenInterviewButton, obj27);
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
  let obj = joinRequest(12633);
  const joinRequestButtonActions = obj.useJoinRequestButtonActions(joinRequest, joinRequest.interviewChannelId, callback);
  ({ submitting, approveRequest, rejectRequest, handleOpenInterview } = joinRequestButtonActions);
  obj = { variant: "primary", icon: null, label: null, onPress: null, disabled: null };
  obj = { color: nativeDefault.colors.WHITE, size: "lg" };
  obj.icon = closure_8(joinRequest(4511).CheckmarkLargeIcon, obj);
  const intl = joinRequest(1114).intl;
  obj.label = intl.string(joinRequest(1114).t.BzjDQJ);
  obj.onPress = approveRequest;
  obj.disabled = submitting;
  const children = [closure_8(joinRequest(8097).IconButton, obj), , ];
  const obj1 = { variant: "destructive", icon: closure_8(joinRequest(4513).XLargeIcon, { color: nativeDefault.colors.WHITE, size: "lg" }), label: null, onPress: null, disabled: null };
  const intl2 = joinRequest(1114).intl;
  obj1.label = intl2.string(joinRequest(1114).t.hDtbsz);
  obj1.onPress = rejectRequest;
  obj1.disabled = submitting;
  children[1] = closure_8(joinRequest(8097).IconButton, obj1);
  let tmp6Result = null == joinRequest.interviewChannelId;
  if (tmp6Result) {
    const obj3 = { variant: "secondary", icon: null, label: null, onPress: null, disabled: null };
    const obj4 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT, size: "lg" };
    obj3.icon = closure_8(tmp2(5071).ChatIcon, obj4);
    const intl3 = tmp2(1114).intl;
    obj3.label = intl3.string(tmp2(1114).t.KQeYoC);
    obj3.onPress = handleOpenInterview;
    obj3.disabled = submitting;
    tmp6Result = closure_8(tmp2(8097).IconButton, obj3);
  }
  children[2] = tmp6Result;
  return closure_9(joinRequest(5433).ButtonGroup, { direction: "horizontal", align: "flex-start", justify: "space-evenly", children });
});
let closure_16 = noop.memo((arg0) => {
  ({ field, isLastField } = arg0);
  const tmp = closure_11();
  const field_type = field.field_type;
  if (MemberVerificationTypes.VerificationFormFieldTypes.TERMS === field_type) {
    const items = [, , ];
    ({ termsField: arr3[0], formResponse: arr3[1] } = tmp);
    let formResponseMargin = null;
    if (!isLastField) {
      formResponseMargin = tmp.formResponseMargin;
    }
    let obj = { style: null, children: null };
    items[2] = formResponseMargin;
    obj.style = items;
    obj = { variant: "text-md/medium", color: "text-default", children: field.label };
    const items1 = [React6(Text_Text.Text, obj), ];
    const obj1 = { size: "sm", color: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, secondaryColor: nativeDefault.colors.STATUS_POSITIVE_TEXT };
    items1[1] = React6(CircleCheckIcon.CircleCheckIcon, obj1);
    obj.children = items1;
    return React7(View, obj);
  } else if (MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
    const obj2 = { style: tmp.formQuestion, variant: "text-sm/semibold", color: "text-subtle", children: field.label };
    const items2 = [React6(Text_Text.Text, obj2), ];
    const items3 = [tmp.formResponse, ];
    let formResponseMargin1 = null;
    if (!isLastField) {
      formResponseMargin1 = tmp.formResponseMargin;
    }
    const obj3 = { style: null, children: null };
    items3[1] = formResponseMargin1;
    obj3.style = items3;
    let tmp10 = null;
    if (null != field.response) {
      tmp10 = field.choices[field.response];
    }
    const obj4 = { children: null };
    const obj5 = { variant: "text-md/medium", color: "text-default", children: tmp10 };
    obj3.children = React6(Text_Text.Text, obj5);
    items2[1] = React6(View, obj3);
    obj4.children = items2;
    return React7(View, obj4);
  } else {
    const obj6 = { style: tmp.formQuestion, variant: "text-sm/semibold", color: "text-subtle", children: field.label };
    const items4 = [React6(Text_Text.Text, obj6), ];
    const items5 = [tmp.formResponse, ];
    let formResponseMargin2 = null;
    if (!isLastField) {
      formResponseMargin2 = tmp.formResponseMargin;
    }
    obj = { children: null };
    const obj7 = { style: null, children: null };
    items5[1] = formResponseMargin2;
    obj7.style = items5;
    const obj8 = { variant: "text-md/medium", color: "text-default", children: field.response };
    obj7.children = React6(Text_Text.Text, obj8);
    items4[1] = React6(View, obj7);
    obj.children = items4;
    return React7(View, obj);
  }
});
let closure_17 = noop.memo((arg0) => {
  ({ joinRequest, user } = arg0);
  const tmp = closure_11();
  let obj = { children: null };
  obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.accountInfoLabel, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["ldCE/p"]);
  const items = [React6(Text_Text.Text, obj), ];
  obj = { style: tmp.accountInfoContainer, children: null };
  const obj1 = { style: tmp.accountInfoRow, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-strong", children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.SaDIpL);
  const items1 = [React6(Text_Text.Text, obj2), ];
  const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  let obj6 = DateUtils;
  let obj7 = SnowflakeUtilsDefault;
  obj3.children = obj6.dateFormat(new Date(obj7.extractTimestamp(user.id)), "LL");
  items1[1] = React6(Text_Text.Text, obj3);
  obj1.children = items1;
  const items2 = [React7(View, obj1), React6(View, { style: tmp.divider }), ];
  const obj5 = { style: tmp.accountInfoRow, children: null };
  obj6 = { variant: "text-sm/semibold", color: "text-strong", children: null };
  const intl3 = util.intl;
  obj6.children = intl3.string(util.t["Vt4cn+"]);
  const items3 = [React6(Text_Text.Text, obj6), ];
  obj7 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const date = new Date(obj7.extractTimestamp(user.id));
  const obj4 = { style: tmp.divider };
  const obj13 = DateUtils;
  obj7.children = obj13.dateFormat(new Date(joinRequest.createdAt), "LL");
  items3[1] = React6(Text_Text.Text, obj7);
  obj5.children = items3;
  items2[2] = React7(View, obj5);
  obj.children = items2;
  items[1] = React7(View, obj);
  obj.children = items;
  return React7(closure_1_10, obj);
});
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 16, borderRadius: nativeDefault.radii.md };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx");

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
  let obj = { style: { paddingBottom: memo(1611)().bottom }, children: null };
  const items1 = [closure_8(closure_12, { joinRequest, user, displayProfile: displayProfile.displayProfile }), , , , ];
  if (joinRequest.applicationStatus === joinRequest(4384).GuildJoinRequestApplicationStatuses.SUBMITTED) {
    let tmp8Result = null != joinRequest.interviewChannelId;
    if (tmp8Result) {
      obj = { joinRequest };
      tmp8Result = closure_8(closure_14, obj);
    }
    obj = { children: null };
    const items2 = [tmp8Result, ];
    const obj1 = { joinRequest };
    items2[1] = closure_8(closure_15, obj1);
    obj.children = items2;
    tmp8Result = closure_9(closure_10, obj);
  } else {
    const obj2 = { joinRequest };
    tmp8Result = closure_8(closure_14, obj2);
  }
  items1[1] = tmp8Result;
  const obj3 = { style: closure_11().responsesContainer, children: null };
  let mapped;
  if (memo != null) {
    mapped = memo.map((field, index) => React6(closure_16, { field, isLastField: index === memo.length - 1 }, "response-" + index + "-" + field.field_type + "-" + field.label + "-" + index === memo.length - 1));
  }
  obj3.children = mapped;
  items1[2] = closure_8(View, obj3);
  items1[3] = closure_8(closure_17, { joinRequest, user });
  items1[4] = closure_8(memo(16581), { guildId: joinRequest.guildId, userId: joinRequest.userId, selectedJoinRequestId: joinRequest.joinRequestId });
  obj.children = items1;
  return closure_9(View, obj);
});