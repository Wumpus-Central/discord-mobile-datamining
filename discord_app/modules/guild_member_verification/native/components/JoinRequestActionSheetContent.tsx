import importAllResult from "initialize";
import { View } from "CustomStatusBubble";
import ensureGuildLoaded from "ensureGuildLoaded";
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO";
import { PROFILE_CONTENT_WITHOUT_STATUS_TOP_PADDING as closure_7 } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "isActionedApplicationStatus";
import createCacheKey from "createCacheKey";

let c10;
let c9;
let metroImportAll;
const require = arg1;
function OpenInterviewButton(arg0) {
  let handleOpenInterview;
  let joinRequest;
  let label;
  let submitting;
  ({ joinRequest, label } = arg0);
  let interviewChannelId;
  interviewChannelId = joinRequest.interviewChannelId;
  let obj = interviewChannelId(589);
  const items = [ensureGuildLoaded];
  const items1 = [interviewChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null != interviewChannelId;
    if (tmp2) {
      tmp2 = null != outer1_5.getChannel(tmp);
    }
    return tmp2;
  }, items1);
  const joinRequestButtonActions = interviewChannelId(11843).useJoinRequestButtonActions(joinRequest, interviewChannelId);
  ({ handleOpenInterview, submitting } = joinRequestButtonActions);
  const obj2 = interviewChannelId(11843);
  if (!obj3.isActionedApplicationStatus(joinRequest.applicationStatus)) {
    obj = { variant: "secondary", size: "md", icon: null, text: null, onPress: null, disabled: null };
    obj = { color: null, size: "sm" };
    obj[0] = importDefault(712).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
    obj[2] = callback(tmp(4752).ChatIcon, obj);
    if (label == null) {
      const intl = tmp(1236).intl;
      label = intl.string(tmp(1236).t["2simqN"]);
    }
    obj[3] = label;
    obj[4] = handleOpenInterview;
    obj[5] = submitting;
    let tmp6Result = callback(tmp(4666).Button, obj);
    const tmp6 = callback;
  } else {
    tmp6Result = null;
  }
  return tmp6Result;
}
let c3 = importAllResult;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = jsxProd);
let obj = { responsesContainer: null, formQuestion: null, formResponse: null, formResponseMargin: null, termsField: null, statusContainer: null, statusRow: null, actionedInfo: null, dot: null, accountInfoLabel: null, accountInfoContainer: null, accountInfoRow: null, divider: null };
obj = { paddingHorizontal: 16, paddingTop: 24, borderTopColor: require("Themes").colors.BORDER_SUBTLE, borderTopWidth: 1 };
obj[0] = obj;
obj[1] = { marginBottom: 8 };
createCacheKey = { padding: 12, width: "100%", borderRadius: require("Themes").radii.md, lineHeight: 20, backgroundColor: require("Themes").colors.INPUT_BACKGROUND_DEFAULT };
obj[2] = createCacheKey;
obj[3] = { marginBottom: 16 };
obj[4] = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj[5] = { flexDirection: "column", gap: 12, paddingHorizontal: 16, paddingVertical: 12, marginTop: 8, marginBottom: 16, marginHorizontal: 16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.md };
obj[6] = { flexDirection: "row", alignItems: "center", gap: 12 };
obj[7] = { flexDirection: "row", gap: 8, alignItems: "center" };
let obj2 = { flexDirection: "column", gap: 12, paddingHorizontal: 16, paddingVertical: 12, marginTop: 8, marginBottom: 16, marginHorizontal: 16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderRadius: require("Themes").radii.md };
obj[8] = { height: 4, width: 4, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.TEXT_DEFAULT };
obj[9] = { marginTop: 16, marginHorizontal: 16, marginBottom: 8 };
let obj3 = { height: 4, width: 4, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.TEXT_DEFAULT };
obj[10] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 16, borderRadius: require("Themes").radii.md };
obj[11] = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 16 };
let obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, marginHorizontal: 16, marginBottom: 16, borderRadius: require("Themes").radii.md };
obj[12] = { width: "100%", height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
let closure_11 = createCacheKey.createStyles(obj);
let closure_12 = importAllResult.memo((user) => {
  let avatarBackground;
  let containerBackground;
  let displayProfile;
  let gradientFallbackBackground;
  let joinRequest;
  let primaryColor;
  let secondaryColor;
  let statusBackground;
  let theme;
  user = user.user;
  ({ displayProfile, joinRequest } = user);
  const tmp3 = joinRequest(8414)();
  const tmp4 = joinRequest(8682)(ACTION_SHEET_MAX_WIDTH);
  ({ primaryColor, secondaryColor, theme } = joinRequest(8412)({ user, displayProfile }));
  let obj = user(8416);
  const userProfileColors = obj.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const items = [joinRequest, user.id];
  ({ gradientFallbackBackground, containerBackground, avatarBackground, statusBackground } = userProfileColors);
  let tmp9 = null;
  if (null != user) {
    obj = { children: null };
    obj = { user: null, displayProfile: null, bannerHeight: null };
    obj[0] = user;
    obj[1] = displayProfile;
    obj[2] = tmp4;
    const items1 = [callback(tmp(8436), obj), ];
    const obj1 = { children: null };
    const obj2 = { user: null, disableStatus: true, backgroundColor: null, statusStyle: null, onPress: null };
    obj2[0] = user;
    obj2[2] = avatarBackground;
    const obj3 = { backgroundColor: null };
    obj3[0] = statusBackground;
    obj2[3] = obj3;
    obj2[4] = tmp8;
    const items2 = [callback(tmp(8439), obj2), ];
    const obj4 = { fallbackBackground: null, primaryColor: null, secondaryColor: null, containerStyle: null, children: null };
    obj4[0] = gradientFallbackBackground;
    obj4[1] = primaryColor;
    obj4[2] = secondaryColor;
    const items3 = [, , ];
    ({ profileContentWrapper: arr4[0], profileContent: arr4[1] } = tmp3);
    const obj5 = { paddingTop: null, paddingBottom: 0 };
    obj5[0] = closure_7;
    items3[2] = obj5;
    obj4[3] = items3;
    const obj6 = { style: null, children: null };
    obj6[0] = tmp3.primaryInfo;
    const obj7 = { user: null, displayProfile: null, badgeContainerBackground: null, isPreviewingChanges: false };
    obj7[0] = user;
    obj7[1] = displayProfile;
    obj7[2] = containerBackground;
    const items4 = [callback(user(12161).PrimaryInfo, obj7), ];
    const obj8 = { user: null };
    obj8[0] = user;
    items4[1] = callback(tmp(12334), obj8);
    obj6[1] = items4;
    obj4[4] = callback2(View, obj6);
    items2[1] = callback(tmp(12088), obj4);
    obj1[0] = items2;
    items1[1] = callback2(View, obj1);
    obj[0] = items1;
    tmp9 = callback2(closure_10, obj);
    const tmpResult = tmp(12088);
  }
  return tmp9;
});
let closure_14 = importAllResult.memo((joinRequest) => {
  let actionedAt;
  let actionedByUser;
  let applicationStatus;
  let rejectionReason;
  joinRequest = joinRequest.joinRequest;
  ({ actionedAt, actionedByUser, rejectionReason, applicationStatus } = joinRequest);
  const tmp = callback3();
  if (applicationStatus === require(4075) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.SUBMITTED) {
    if (null != joinRequest.interviewChannelId) {
      let obj = { style: null, children: null };
      obj[0] = tmp.statusContainer;
      obj = { style: null, children: null };
      obj[0] = tmp.statusRow;
      const obj1 = { size: "lg", color: null };
      obj1[1] = importDefault(712).colors.STATUS_WARNING;
      const items = [callback(tmp2(12105).HourglassIcon, obj1), ];
      const obj2 = { children: null };
      const obj3 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
      const intl6 = tmp2(1236).intl;
      obj3[2] = intl6.string(tmp2(1236).t["Vr+7eO"]);
      obj2[0] = callback(tmp2(4251).Text, obj3);
      items[1] = callback(View, obj2);
      obj[1] = items;
      const items1 = [callback2(View, obj), ];
      const obj4 = { joinRequest: null, label: null };
      obj4[0] = joinRequest;
      const intl7 = tmp2(1236).intl;
      obj4[1] = intl7.string(tmp2(1236).t.rcqdhN);
      items1[1] = callback(OpenInterviewButton, obj4);
      obj[1] = items1;
      return callback2(View, obj);
    }
  }
  if (require(4075) /* MAX_RESULTS_PER_PAGE */.GuildJoinRequestApplicationStatuses.REJECTED === applicationStatus) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.statusContainer;
    const obj6 = { style: null, children: null };
    obj6[0] = tmp.statusRow;
    const obj7 = { size: "lg", color: null, secondaryColor: null };
    obj7[1] = importDefault(712).colors.ICON_FEEDBACK_CRITICAL;
    obj7[2] = importDefault(712).colors.WHITE;
    const items2 = [callback(tmp2(5895).CircleXIcon, obj7), ];
    const obj8 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl3 = tmp2(1236).intl;
    obj8[2] = intl3.string(tmp2(1236).t.bSZkla);
    const items3 = [callback(tmp2(4251).Text, obj8), , ];
    let tmp18Result = null;
    if (null != actionedByUser) {
      tmp18Result = null;
      if (null != actionedAt) {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp.actionedInfo;
        const intl4 = tmp2(1236).intl;
        let username2 = actionedByUser.global_name;
        if (username2 == null) {
          username2 = actionedByUser.username;
        }
        const obj10 = { variant: "text-sm/normal", color: "text-default", children: null };
        const obj11 = { username: null };
        obj11[0] = username2;
        obj10[2] = intl4.formatToPlainString(tmp2(1236).t.qnimbL, obj11);
        const items4 = [tmp20(tmp2(4251).Text, obj10), , ];
        const obj12 = { style: null };
        obj12[0] = tmp.dot;
        items4[1] = tmp20(tmp19, obj12);
        const obj13 = { variant: "text-sm/normal", color: "text-default", children: null };
        let tmp2Result = tmp2(3925);
        const _Date2 = Date;
        const date = new Date(importDefault(11).extractTimestamp(actionedAt));
        obj13[2] = tmp2Result.dateFormat(date, "LL");
        items4[2] = tmp20(tmp2(4251).Text, obj13);
        obj9[1] = items4;
        tmp18Result = tmp18(tmp19, obj9);
        const tmp21Result = importDefault(11);
      }
    }
    items3[1] = tmp18Result;
    let tmp20Result = null != rejectionReason;
    if (tmp20Result) {
      const obj14 = { variant: "text-sm/normal", color: "text-default", children: null };
      const intl5 = tmp2(1236).intl;
      const obj15 = { rejectionReason: null };
      obj15[0] = rejectionReason;
      obj14[2] = intl5.formatToPlainString(tmp2(1236).t.fU5PPM, obj15);
      tmp20Result = tmp20(tmp2(4251).Text, obj14);
    }
    const obj16 = { children: null };
    items3[2] = tmp20Result;
    obj16[0] = items3;
    items2[1] = callback2(View, obj16);
    obj6[1] = items2;
    const items5 = [callback2(View, obj6), ];
    const obj17 = { joinRequest: null };
    obj17[0] = joinRequest;
    items5[1] = callback(OpenInterviewButton, obj17);
    obj5[1] = items5;
    return callback2(View, obj5);
  } else if (tmp2(4075).GuildJoinRequestApplicationStatuses.APPROVED === applicationStatus) {
    obj = { style: null, children: null };
    obj[0] = tmp.statusContainer;
    const obj18 = { style: null, children: null };
    obj18[0] = tmp.statusRow;
    const obj19 = { size: "lg", color: null, secondaryColor: null };
    obj19[1] = importDefault(712).colors.STATUS_POSITIVE_BACKGROUND;
    obj19[2] = importDefault(712).colors.STATUS_POSITIVE_TEXT;
    const items6 = [callback(tmp2(4216).CircleCheckIcon, obj19), ];
    const obj20 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(1236).intl;
    obj20[2] = intl.string(tmp2(1236).t.aURgY2);
    const items7 = [callback(tmp2(4251).Text, obj20), ];
    let tmp6Result = null;
    if (null != actionedByUser) {
      tmp6Result = null;
      if (null != actionedAt) {
        const obj21 = { style: null, children: null };
        obj21[0] = tmp.actionedInfo;
        const intl2 = tmp2(1236).intl;
        let username = actionedByUser.global_name;
        if (username == null) {
          username = actionedByUser.username;
        }
        const obj22 = { variant: "text-sm/normal", color: "text-default", children: null };
        const obj23 = { username: null };
        obj23[0] = username;
        obj22[2] = intl2.formatToPlainString(tmp2(1236).t.qnimbL, obj23);
        const items8 = [tmp8(tmp2(4251).Text, obj22), , ];
        const obj24 = { style: null };
        obj24[0] = tmp.dot;
        items8[1] = tmp8(tmp7, obj24);
        const obj25 = { variant: "text-sm/normal", color: "text-default", children: null };
        tmp2Result = tmp2(3925);
        const _Date = Date;
        const date1 = new Date(importDefault(11).extractTimestamp(actionedAt));
        obj25[2] = tmp2Result.dateFormat(date1, "LL");
        items8[2] = tmp8(tmp2(4251).Text, obj25);
        obj21[1] = items8;
        tmp6Result = tmp6(tmp7, obj21);
        const tmp9Result = importDefault(11);
      }
    }
    const obj26 = { children: null };
    items7[1] = tmp6Result;
    obj26[0] = items7;
    items6[1] = callback2(View, obj26);
    obj18[1] = items6;
    const items9 = [callback2(View, obj18), ];
    const obj27 = { joinRequest: null };
    obj27[0] = joinRequest;
    items9[1] = callback(OpenInterviewButton, obj27);
    obj[1] = items9;
    return callback2(View, obj);
  } else {
    return null;
  }
});
let closure_15 = importAllResult.memo((joinRequest) => {
  let approveRequest;
  let handleOpenInterview;
  let rejectRequest;
  let submitting;
  joinRequest = joinRequest.joinRequest;
  const items = [joinRequest];
  const callback = importAllResult.useCallback(() => {
    outer1_1(outer1_2[13])(joinRequest);
  }, items);
  let obj = joinRequest(11843);
  const joinRequestButtonActions = obj.useJoinRequestButtonActions(joinRequest, joinRequest.interviewChannelId, callback);
  ({ submitting, approveRequest, rejectRequest, handleOpenInterview } = joinRequestButtonActions);
  obj = { variant: "primary", icon: null, label: null, onPress: null, disabled: null };
  obj = { color: null, size: "lg" };
  obj[0] = importDefault(712).colors.WHITE;
  obj[1] = callback(joinRequest(4207).CheckmarkLargeIcon, obj);
  const intl = joinRequest(1236).intl;
  obj[2] = intl.string(joinRequest(1236).t.BzjDQJ);
  obj[3] = approveRequest;
  obj[4] = submitting;
  const children = [callback(joinRequest(7660).IconButton, obj), , ];
  const obj1 = { variant: "destructive", icon: null, label: null, onPress: null, disabled: null };
  const obj2 = { color: null, size: "lg" };
  obj2[0] = importDefault(712).colors.WHITE;
  obj1[1] = callback(joinRequest(4209).XLargeIcon, obj2);
  const intl2 = joinRequest(1236).intl;
  obj1[2] = intl2.string(joinRequest(1236).t.hDtbsz);
  obj1[3] = rejectRequest;
  obj1[4] = submitting;
  children[1] = callback(joinRequest(7660).IconButton, obj1);
  let tmp6Result = null == joinRequest.interviewChannelId;
  if (tmp6Result) {
    const obj3 = { variant: "secondary", icon: null, label: null, onPress: null, disabled: null };
    const obj4 = { color: null, size: "lg" };
    obj4[0] = importDefault(712).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
    obj3[1] = tmp6(tmp2(4752).ChatIcon, obj4);
    const intl3 = tmp2(1236).intl;
    obj3[2] = intl3.string(tmp2(1236).t.KQeYoC);
    obj3[3] = handleOpenInterview;
    obj3[4] = submitting;
    tmp6Result = tmp6(tmp2(7660).IconButton, obj3);
  }
  children[2] = tmp6Result;
  return closure_9(joinRequest(5088).ButtonGroup, { direction: "horizontal", align: "flex-start", justify: "space-evenly", children });
});
let closure_16 = importAllResult.memo((arg0) => {
  let field;
  let isLastField;
  ({ field, isLastField } = arg0);
  const tmp = callback3();
  const field_type = field.field_type;
  if (require(4075) /* MAX_RESULTS_PER_PAGE */.VerificationFormFieldTypes.TERMS === field_type) {
    const items = [, , ];
    ({ termsField: arr3[0], formResponse: arr3[1] } = tmp);
    let formResponseMargin = null;
    if (!isLastField) {
      formResponseMargin = tmp.formResponseMargin;
    }
    let obj = { style: null, children: null };
    items[2] = formResponseMargin;
    obj[0] = items;
    obj = { variant: "text-md/medium", color: "text-default", children: null };
    obj[2] = field.label;
    const items1 = [callback(tmp2(4251).Text, obj), ];
    const obj1 = { size: "sm", color: null, secondaryColor: null };
    obj1[1] = importDefault(712).colors.STATUS_POSITIVE_BACKGROUND;
    obj1[2] = importDefault(712).colors.STATUS_POSITIVE_TEXT;
    items1[1] = callback(tmp2(4216).CircleCheckIcon, obj1);
    obj[1] = items1;
    return closure_9(View, obj);
  } else if (tmp2(4075).VerificationFormFieldTypes.MULTIPLE_CHOICE === field_type) {
    const obj2 = { style: null, variant: "text-sm/semibold", color: "text-subtle", children: null };
    obj2[0] = tmp.formQuestion;
    obj2[3] = field.label;
    const items2 = [callback(tmp2(4251).Text, obj2), ];
    const items3 = [tmp.formResponse, ];
    let formResponseMargin1 = null;
    if (!isLastField) {
      formResponseMargin1 = tmp.formResponseMargin;
    }
    const obj3 = { style: null, children: null };
    items3[1] = formResponseMargin1;
    obj3[0] = items3;
    let tmp10 = null;
    if (null != field.response) {
      tmp10 = field.choices[field.response];
    }
    const obj4 = { children: null };
    const obj5 = { variant: "text-md/medium", color: "text-default", children: null };
    obj5[2] = tmp10;
    obj3[1] = callback(tmp2(4251).Text, obj5);
    items2[1] = callback(View, obj3);
    obj4[0] = items2;
    return closure_9(View, obj4);
  } else {
    const obj6 = { style: null, variant: "text-sm/semibold", color: "text-subtle", children: null };
    obj6[0] = tmp.formQuestion;
    obj6[3] = field.label;
    const items4 = [callback(tmp2(4251).Text, obj6), ];
    const items5 = [tmp.formResponse, ];
    let formResponseMargin2 = null;
    if (!isLastField) {
      formResponseMargin2 = tmp.formResponseMargin;
    }
    obj = { children: null };
    const obj7 = { style: null, children: null };
    items5[1] = formResponseMargin2;
    obj7[0] = items5;
    const obj8 = { variant: "text-md/medium", color: "text-default", children: null };
    obj8[2] = field.response;
    obj7[1] = callback(tmp2(4251).Text, obj8);
    items4[1] = callback(View, obj7);
    obj[0] = items4;
    return closure_9(View, obj);
  }
});
let closure_17 = importAllResult.memo((arg0) => {
  let joinRequest;
  let user;
  ({ joinRequest, user } = arg0);
  const tmp = callback3();
  let obj = { children: null };
  obj = { variant: "text-sm/semibold", color: "text-subtle", style: tmp.accountInfoLabel, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.string(require(1236) /* getSystemLocale */.t["ldCE/p"]);
  const items = [callback(require(4251) /* Text */.Text, obj), ];
  obj = { style: tmp.accountInfoContainer, children: null };
  const obj1 = { style: tmp.accountInfoRow, children: null };
  const obj2 = { variant: "text-sm/semibold", color: "text-strong", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[2] = intl2.string(require(1236) /* getSystemLocale */.t.SaDIpL);
  const items1 = [callback(require(4251) /* Text */.Text, obj2), ];
  const obj3 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  let obj6 = require(3925) /* resetCache */;
  let obj7 = importDefault(11);
  obj3[2] = obj6.dateFormat(new Date(obj7.extractTimestamp(user.id)), "LL");
  items1[1] = callback(require(4251) /* Text */.Text, obj3);
  obj1[1] = items1;
  const items2 = [callback2(View, obj1), callback(View, { style: tmp.divider }), ];
  const obj5 = { style: tmp.accountInfoRow, children: null };
  obj6 = { variant: "text-sm/semibold", color: "text-strong", children: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj6[2] = intl3.string(require(1236) /* getSystemLocale */.t["Vt4cn+"]);
  const items3 = [callback(require(4251) /* Text */.Text, obj6), ];
  obj7 = { variant: "text-sm/normal", color: "text-subtle", children: null };
  const date = new Date(obj7.extractTimestamp(user.id));
  const obj4 = { style: tmp.divider };
  const obj13 = require(3925) /* resetCache */;
  obj7[2] = obj13.dateFormat(new Date(joinRequest.createdAt), "LL");
  items3[1] = callback(require(4251) /* Text */.Text, obj7);
  obj5[1] = items3;
  items2[2] = callback2(View, obj5);
  obj[1] = items2;
  items[1] = callback2(View, obj);
  obj[0] = items;
  return callback2(closure_10, obj);
});
let obj5 = { width: "100%", height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
const memoResult = importAllResult.memo(function JoinRequestActionSheetContent(displayProfile) {
  let joinRequest;
  let user;
  ({ user, joinRequest } = displayProfile);
  let memo;
  let formResponses;
  if (joinRequest != null) {
    formResponses = joinRequest.formResponses;
  }
  const items = [formResponses];
  memo = importAllResult.useMemo(() => {
    let formResponses;
    if (joinRequest != null) {
      formResponses = joinRequest.formResponses;
    }
    if (formResponses == null) {
      formResponses = [];
    }
    return formResponses;
  }, items);
  let obj = { style: { paddingBottom: memo(1581)().bottom }, children: null };
  const items1 = [callback(closure_12, { joinRequest, user, displayProfile: displayProfile.displayProfile }), , , , ];
  if (joinRequest.applicationStatus === joinRequest(4075).GuildJoinRequestApplicationStatuses.SUBMITTED) {
    let tmp8Result = null != joinRequest.interviewChannelId;
    if (tmp8Result) {
      obj = { joinRequest: null };
      obj[0] = joinRequest;
      tmp8Result = tmp8(closure_14, obj);
    }
    obj = { children: null };
    const items2 = [tmp8Result, ];
    const obj1 = { joinRequest: null };
    obj1[0] = joinRequest;
    items2[1] = tmp8(closure_15, obj1);
    obj[0] = items2;
    tmp8Result = tmp6(closure_10, obj);
    const tmp11 = closure_10;
  } else {
    const obj2 = { joinRequest: null };
    obj2[0] = joinRequest;
    tmp8Result = tmp8(closure_14, obj2);
  }
  items1[1] = tmp8Result;
  const obj3 = { style: callback3().responsesContainer, children: null };
  let mapped;
  if (memo != null) {
    mapped = memo.map((field) => outer1_8(outer1_16, { field, isLastField: arg1 === memo.length - 1 }, "response-" + arg1 + "-" + field.field_type + "-" + field.label + "-" + arg1 === memo.length - 1));
  }
  obj3[1] = mapped;
  items1[2] = callback(View, obj3);
  items1[3] = callback(closure_17, { joinRequest, user });
  items1[4] = callback(memo(15540), { guildId: joinRequest.guildId, userId: joinRequest.userId, selectedJoinRequestId: joinRequest.joinRequestId });
  obj[1] = items1;
  return closure_9(View, obj);
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheetContent.tsx");

export default memoResult;