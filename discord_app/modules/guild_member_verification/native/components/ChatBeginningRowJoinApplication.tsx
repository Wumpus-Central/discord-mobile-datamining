// === Module 12766: ChatBeginningRowJoinApplication ===

// Module 12766 (ChatBeginningRowJoinApplication)
import nativeDefault from "native" /* 576 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4464 */;
import Text_Text from "Text/Text" /* 4635 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4278 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4639);
let obj2 = { container: { width: "100%", marginTop: 12, display: "flex", flexDirection: "column", alignSelf: "flex-start", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg }, guildInfoRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }, divider: null, formQuestion: null };
let obj3 = { width: "100%", marginTop: 12, display: "flex", flexDirection: "column", alignSelf: "flex-start", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg };
obj2.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
obj2.formQuestion = { marginBottom: 4 };
let closure_10 = createStyles.createStyles(obj2);
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
  let items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let userId;
    if (joinRequest != null) {
      userId = joinRequest.userId;
    }
    return UserStore.getUser(userId);
  });
  let obj = require("initialize");
  const tmp2 = joinRequest;
  const joinRequestButtonActions = require("useJoinRequestButtonActions").useJoinRequestButtonActions(joinRequest, channelId);
  ({ approveRequest, rejectRequest } = joinRequestButtonActions);
  let obj2 = require("useJoinRequestButtonActions");
  const items1 = [PermissionStore];
  let stateFromStores1 = require("initialize").useStateFromStores(items1, () => PermissionStore.can(Permissions.KICK_MEMBERS, joinRequestGuild));
  let tmp10Result2 = null;
  if (null != joinRequest) {
    tmp10Result2 = null;
    if (null != joinRequest.formResponses) {
      let obj4 = { style: tmp.container, children: null };
      let tmp10Result = null != joinRequestGuild;
      if (tmp10Result) {
        const obj5 = { style: tmp.guildInfoRow, children: null };
        const obj6 = { guild: joinRequestGuild, size: tmp5(tmp3[11]).GuildIconSizes.XXSMALL };
        const items2 = [closure_7(tmp2(tmp3[11]), obj6), ];
        const obj7 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: joinRequestGuild.name };
        items2[1] = closure_7(tmp5(tmp3[12]).Text, obj7);
        obj5.children = items2;
        tmp10Result = closure_8(View, obj5);
        const tmp2Result = tmp2(tmp3[11]);
      }
      const items3 = [tmp10Result, , ];
      let tmp16 = null != stateFromStores;
      if (tmp16) {
        const obj8 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp5(tmp3[13]).intl;
        const obj9 = { username: stateFromStores.globalName };
        obj8.children = intl.format(tmp5(tmp3[13]).t.jDV3i6, obj9);
        tmp16 = closure_7(tmp5(tmp3[12]).Text, obj8);
      }
      items3[1] = tmp16;
      const formResponses = joinRequest.formResponses;
      const found = formResponses.filter((field_type) => field_type.field_type !== closure_0(joinRequestGuild[14]).VerificationFormFieldTypes.TERMS);
      items3[2] = found.map((field_type, index) => {
        if (field_type.field_type === MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE) {
          if (null != field_type.response) {
            let response = field_type.choices[field_type.response];
          }
          const obj = { children: null };
          const obj2 = { style: closure_0.divider };
          const items = [React5(View, obj2), , ];
          const obj3 = { style: closure_0.formQuestion, variant: "text-xs/semibold", color: "text-muted", children: field_type.label };
          items[1] = React5(Text_Text.Text, obj3);
          const obj4 = { variant: "text-md/medium", color: "text-strong", children: response };
          items[2] = React5(Text_Text.Text, obj4);
          obj.children = items;
          const _HermesInternal = HermesInternal;
          return React6(View, obj, "form-response-" + index);
        }
        response = field_type.response;
      });
      obj4.children = items3;
      const items4 = [closure_8(View, obj4), ];
      if (stateFromStores1) {
        stateFromStores1 = joinRequest.applicationStatus === tmp5(tmp3[14]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      }
      if (stateFromStores1) {
        const obj10 = { direction: "horizontal", align: "center", children: null };
        const obj11 = { grow: true, size: "md", variant: "primary", onPress: approveRequest, text: null };
        const intl2 = tmp5(tmp3[13]).intl;
        obj11.text = intl2.string(tmp5(tmp3[13]).t.BzjDQJ);
        const items5 = [closure_7(tmp5(tmp3[16]).Button, obj11), ];
        const obj12 = { grow: true, size: "md", variant: "destructive", onPress: rejectRequest, text: null };
        const intl3 = tmp5(tmp3[13]).intl;
        obj12.text = intl3.string(tmp5(tmp3[13]).t.hDtbsz);
        items5[1] = closure_7(tmp5(tmp3[16]).Button, obj12);
        obj10.children = items5;
        stateFromStores1 = closure_8(tmp5(tmp3[15]).ButtonGroup, obj10);
      }
      const obj13 = { children: null };
      items4[1] = stateFromStores1;
      obj13.children = items4;
      tmp10Result2 = closure_8(closure_9, obj13);
    }
  }
  return tmp10Result2;
};