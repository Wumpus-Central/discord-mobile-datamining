// discord_app/modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const Permissions = fn(1085).Permissions;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  container: {
    width: "100%",
    marginTop: 12,
    display: "flex",
    flexDirection: "column",
    alignSelf: "flex-start",
    padding: 16,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderWidth: 1,
    borderRadius: nativeDefault.radii.lg,
  },
  guildInfoRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 },
  divider: null,
  formQuestion: null,
};
let obj3 = {
  width: "100%",
  marginTop: 12,
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  padding: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
  borderRadius: nativeDefault.radii.lg,
};
obj2.divider = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
obj2.formQuestion = { marginBottom: 4 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const cResult = require("c").c(32);
      channelId = channelId.channelId;
      let obj = require("c");
      _require = closure_10();
      const tmp5 = joinRequest(joinRequestGuild[10])(channelId);
      joinRequest = tmp5.joinRequest;
      joinRequestGuild = tmp5.joinRequestGuild;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      let userId;
      if (joinRequest != null) {
        userId = joinRequest.userId;
      }
      if (cResult[1] !== userId) {
        let userId1;
        if (joinRequest != null) {
          userId1 = joinRequest.userId;
        }
        const fn = function f() {
          let userId;
          if (joinRequest != null) {
            userId = joinRequest.userId;
          }
          return UserStore.getUser(userId);
        };
        cResult[1] = userId1;
        cResult[2] = fn;
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      const tmp4 = closure_10();
      const stateFromStores = require("initialize").useStateFromStores(first, tmp9);
      const tmpResult = require("initialize");
      const joinRequestButtonActions = require("useJoinRequestButtonActions").useJoinRequestButtonActions(
        joinRequest,
        channelId,
      );
      ({ approveRequest, rejectRequest } = joinRequestButtonActions);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[3] = items1;
        let tmp13 = items1;
      } else {
        tmp13 = cResult[3];
      }
      if (cResult[4] !== joinRequestGuild) {
        class I {
          constructor() {
            return closure_4.can(Permissions.KICK_MEMBERS, joinRequestGuild);
          }
        }
        cResult[4] = joinRequestGuild;
        cResult[5] = I;
      } else {
        class I {
          constructor() {
            return closure_4.can(Permissions.KICK_MEMBERS, joinRequestGuild);
          }
        }
      }
      const tmpResult3 = require("useJoinRequestButtonActions");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp13, I);
      if (null != joinRequest) {
        class I {
          constructor() {
            return closure_4.can(Permissions.KICK_MEMBERS, joinRequestGuild);
          }
        }
      }
      return null;
    }
  : (channelId) => {
      channelId = channelId.channelId;
      let joinRequest;
      let joinRequestGuild;
      const tmp = closure_10();
      _require = tmp;
      const tmp4 = joinRequest(joinRequestGuild[10])(channelId);
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
      const joinRequestButtonActions = require("useJoinRequestButtonActions").useJoinRequestButtonActions(
        joinRequest,
        channelId,
      );
      ({ approveRequest, rejectRequest } = joinRequestButtonActions);
      let obj2 = require("useJoinRequestButtonActions");
      const items1 = [PermissionStore];
      let stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
        PermissionStore.can(Permissions.KICK_MEMBERS, joinRequestGuild),
      );
      let tmp10Result2 = null;
      if (null != joinRequest) {
        tmp10Result2 = null;
        if (null != joinRequest.formResponses) {
          let obj4 = { style: tmp.container, children: null };
          let tmp10Result = null != joinRequestGuild;
          if (tmp10Result) {
            const obj5 = { style: tmp.guildInfoRow, children: null };
            const obj6 = { guild: joinRequestGuild, size: tmp5(tmp3[13]).GuildIconSizes.XXSMALL };
            const items2 = [closure_7(tmp2(tmp3[13]), obj6)];
            const obj7 = {
              variant: "heading-sm/semibold",
              color: "mobile-text-heading-primary",
              children: joinRequestGuild.name,
            };
            items2[1] = closure_7(tmp5(tmp3[14]).Text, obj7);
            obj5.children = items2;
            tmp10Result = closure_8(View, obj5);
            const tmp2Result = tmp2(tmp3[13]);
          }
          const items3 = [tmp10Result, ,];
          let tmp16 = null != stateFromStores;
          if (tmp16) {
            const obj8 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
            const intl = tmp5(tmp3[15]).intl;
            const obj9 = { username: stateFromStores.globalName };
            obj8.children = intl.format(tmp5(tmp3[15]).t.jDV3i6, obj9);
            tmp16 = closure_7(tmp5(tmp3[14]).Text, obj8);
          }
          items3[1] = tmp16;
          const formResponses = joinRequest.formResponses;
          const found = formResponses.filter(
            (field_type) => field_type.field_type !== closure_0(joinRequestGuild[16]).VerificationFormFieldTypes.TERMS,
          );
          items3[2] = found.map((field_type, index) => {
            if (field_type.field_type === MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE) {
              if (null != field_type.response) {
                let response = field_type.choices[field_type.response];
              }
              const obj = { children: null };
              const obj2 = { style: closure_0.divider };
              const items = [React5(View, obj2), ,];
              const obj3 = {
                style: closure_0.formQuestion,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: field_type.label,
              };
              items[1] = React5(Text_Text.Text, obj3);
              const obj4 = { variant: "text-md/medium", color: "text-strong", children: response };
              items[2] = React5(Text_Text.Text, obj4);
              obj.children = items;
              const _HermesInternal = HermesInternal;
              return closure_2_8(View, obj, "form-response-" + index);
            }
            response = field_type.response;
          });
          obj4.children = items3;
          const items4 = [closure_8(View, obj4)];
          if (stateFromStores1) {
            stateFromStores1 =
              joinRequest.applicationStatus === tmp5(tmp3[16]).GuildJoinRequestApplicationStatuses.SUBMITTED;
          }
          if (stateFromStores1) {
            const obj10 = { direction: "horizontal", align: "center", children: null };
            const obj11 = { grow: true, size: "md", variant: "primary", onPress: approveRequest, text: null };
            const intl2 = tmp5(tmp3[15]).intl;
            obj11.text = intl2.string(tmp5(tmp3[15]).t.BzjDQJ);
            const items5 = [closure_7(tmp5(tmp3[18]).Button, obj11)];
            const obj12 = { grow: true, size: "md", variant: "destructive", onPress: rejectRequest, text: null };
            const intl3 = tmp5(tmp3[15]).intl;
            obj12.text = intl3.string(tmp5(tmp3[15]).t.hDtbsz);
            items5[1] = closure_7(tmp5(tmp3[18]).Button, obj12);
            obj10.children = items5;
            stateFromStores1 = closure_8(tmp5(tmp3[17]).ButtonGroup, obj10);
          }
          const obj13 = { children: null };
          items4[1] = stateFromStores1;
          obj13.children = items4;
          tmp10Result2 = closure_8(closure_9, obj13);
        }
      }
      return tmp10Result2;
    };
