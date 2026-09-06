// === Module 12631: ChatBeginningRowJoinApplication ===

// Module 12631 (ChatBeginningRowJoinApplication)
import nativeDefault from "native" /* 576 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4384 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, guildInfoRow: null, divider: null, formQuestion: null };
createStyles = { width: "100%", marginTop: 12, display: "flex", flexDirection: "column", alignSelf: "flex-start", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
createStyles.container = createStyles;
createStyles.guildInfoRow = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
createStyles.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
createStyles.formQuestion = { marginBottom: 4 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx");

export default function ChatBeginningRowJoinRequest(channelId) {
  channelId = channelId.channelId;
  let joinRequest;
  let joinRequestGuild;
  const tmp = closure_10();
  _require = tmp;
  const tmp4 = joinRequest(joinRequestGuild[8])(channelId);
  joinRequest = tmp4.joinRequest;
  joinRequestGuild = tmp4.joinRequestGuild;
  let obj = require("initialize");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let userId;
    if (joinRequest != null) {
      userId = joinRequest.userId;
    }
    return UserStore.getUser(userId);
  });
  let obj1 = require("useJoinRequestButtonActions");
  const joinRequestButtonActions = obj1.useJoinRequestButtonActions(joinRequest, channelId);
  ({ approveRequest, rejectRequest } = joinRequestButtonActions);
  let obj2 = require("initialize");
  const items1 = [PermissionStore];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(Permissions.KICK_MEMBERS, joinRequestGuild));
  let tmp10Result = null;
  if (null != joinRequest) {
    tmp10Result = null;
    if (null != joinRequest.formResponses) {
      obj = { style: tmp.container, children: null };
      tmp10Result = null != joinRequestGuild;
      if (tmp10Result) {
        obj = { style: tmp.guildInfoRow, children: null };
        obj1 = { guild: joinRequestGuild, size: tmp5(tmp3[11]).GuildIconSizes.XXSMALL };
        const items2 = [closure_7(joinRequest(tmp3[11]), obj1), ];
        obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: joinRequestGuild.name };
        items2[1] = closure_7(tmp5(tmp3[12]).Text, obj2);
        obj.children = items2;
        tmp10Result = tmp10(tmp12, obj);
        const tmp2Result = joinRequest(tmp3[11]);
      }
      const items3 = [tmp10Result, , ];
      let tmp16 = null != stateFromStores;
      if (tmp16) {
        const obj3 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp5(tmp3[13]).intl;
        const obj4 = { username: stateFromStores.globalName };
        obj3.children = intl.format(tmp5(tmp3[13]).t.jDV3i6, obj4);
        tmp16 = closure_7(tmp5(tmp3[12]).Text, obj3);
      }
      items3[1] = tmp16;
      const formResponses = joinRequest.formResponses;
      const found = formResponses.filter((field_type) => field_type.field_type !== closure_0(joinRequestGuild[14]).VerificationFormFieldTypes.TERMS);
      items3[2] = found.map((field_type, index) => {
        if (field_type.field_type === MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE) {
          if (null != field_type.response) {
            let response = field_type.choices[field_type.response];
          }
          let obj = { children: null };
          obj = { style: closure_0.divider };
          const items = [React5(View, obj), , ];
          obj = { style: closure_0.formQuestion, variant: "text-xs/semibold", color: "text-muted", children: field_type.label };
          items[1] = React5(tmp(4556).Text, obj);
          const obj1 = { variant: "text-md/medium", color: "text-strong", children: response };
          items[2] = React5(tmp(4556).Text, obj1);
          obj.children = items;
          const _HermesInternal = HermesInternal;
          return React6(View, obj, "form-response-" + index);
        }
        response = field_type.response;
      });
      obj.children = items3;
      const items4 = [closure_8(View, obj), ];
      if (stateFromStores1) {
        stateFromStores1 = joinRequest.applicationStatus === tmp5(tmp3[14]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      }
      if (stateFromStores1) {
        const obj5 = { direction: "horizontal", align: "center", children: null };
        const obj6 = { grow: true, size: "md", variant: "primary", onPress: approveRequest, text: null };
        const intl2 = tmp5(tmp3[13]).intl;
        obj6.text = intl2.string(tmp5(tmp3[13]).t.BzjDQJ);
        const items5 = [closure_7(tmp5(tmp3[16]).Button, obj6), ];
        const obj7 = { grow: true, size: "md", variant: "destructive", onPress: rejectRequest, text: null };
        const intl3 = tmp5(tmp3[13]).intl;
        obj7.text = intl3.string(tmp5(tmp3[13]).t.hDtbsz);
        items5[1] = closure_7(tmp5(tmp3[16]).Button, obj7);
        obj5.children = items5;
        stateFromStores1 = tmp10(tmp5(tmp3[15]).ButtonGroup, obj5);
      }
      const obj8 = { children: null };
      items4[1] = stateFromStores1;
      obj8.children = items4;
      tmp10Result = tmp10(closure_9, obj8);
    }
  }
  return tmp10Result;
};