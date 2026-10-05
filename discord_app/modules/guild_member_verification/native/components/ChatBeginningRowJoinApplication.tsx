// discord_app/modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import MemberVerificationTypes from "../../MemberVerificationTypes.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, channelId;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const Permissions = Constants.Permissions;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  guildInfoRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 },
  divider: obj3,
  formQuestion: { marginBottom: 4 },
};
obj2 = {
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
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
let closure_10 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let approveRequest;
      let closure_0;
      let first;
      let joinRequest;
      let joinRequestGuild;
      let rejectRequest;
      let tmp10;
      let tmp14;
      let obj = require("react");
      const cResult = obj.c(32);
      channelId = channelId.channelId;
      _require = closure_10();
      const tmp4 = closure_10();
      const tmp5 = joinRequest(joinRequestGuild[10])(channelId);
      joinRequest = tmp5.joinRequest;
      joinRequestGuild = tmp5.joinRequestGuild;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      let userId;
      const tmp8 = cResult[1];
      if (joinRequest != null) {
        userId = joinRequest.userId;
      }
      if (tmp8 !== userId) {
        let userId1;
        if (joinRequest != null) {
          userId1 = joinRequest.userId;
        }
        const fn = function f() {
          let userId;
          const getUser = UserStore.getUser;
          if (joinRequest != null) {
            userId = joinRequest.userId;
          }
          return getUser(userId);
        };
        cResult[1] = userId1;
        cResult[2] = fn;
        tmp10 = fn;
      } else {
        tmp10 = cResult[2];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(first, tmp10);
      const tmpResult3 = require("useJoinRequestButtonActions");
      const joinRequestButtonActions = tmpResult3.useJoinRequestButtonActions(joinRequest, channelId);
      ({ approveRequest, rejectRequest } = joinRequestButtonActions);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [PermissionStore];
        cResult[3] = items1;
        tmp14 = items1;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] !== joinRequestGuild) {
        class I {
          constructor() {
            return PermissionStore.can(Permissions.KICK_MEMBERS, joinRequestGuild);
          }
        }
        cResult[4] = joinRequestGuild;
        cResult[5] = I;
      } else {
        class I {
          constructor() {
            return PermissionStore.can(Permissions.KICK_MEMBERS, joinRequestGuild);
          }
        }
      }
      const tmpResult4 = require("get initialized");
      const stateFromStores1 = tmpResult4.useStateFromStores(tmp14, I);
      if (null != joinRequest) {
        class I {
          constructor() {
            return PermissionStore.can(Permissions.KICK_MEMBERS, joinRequestGuild);
          }
        }
      }
      return null;
    }
  : (channelId) => {
      let approveRequest;
      let closure_0;
      let intl;
      let intl2;
      let intl3;
      let items2;
      let items3;
      let items5;
      let obj9;
      let rejectRequest;
      channelId = channelId.channelId;
      let joinRequest;
      let joinRequestGuild;
      const tmp = closure_10();
      _require = tmp;
      const tmp4 = joinRequest(joinRequestGuild[10])(channelId);
      const tmp2 = joinRequest;
      joinRequest = tmp4.joinRequest;
      joinRequestGuild = tmp4.joinRequestGuild;
      let obj = require("get initialized");
      let items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let userId;
        const getUser = UserStore.getUser;
        if (joinRequest != null) {
          userId = joinRequest.userId;
        }
        return getUser(userId);
      });
      let obj2 = require("useJoinRequestButtonActions");
      const joinRequestButtonActions = obj2.useJoinRequestButtonActions(joinRequest, channelId);
      ({ approveRequest, rejectRequest } = joinRequestButtonActions);
      let obj3 = require("get initialized");
      const items1 = [PermissionStore];
      let stateFromStores1 = obj3.useStateFromStores(items1, () =>
        PermissionStore.can(Permissions.KICK_MEMBERS, joinRequestGuild),
      );
      let tmp10Result2 = null;
      if (null != joinRequest) {
        tmp10Result2 = null;
        if (null != joinRequest.formResponses) {
          let obj4 = { style: tmp.container, children: items3 };
          let tmp10Result = null != joinRequestGuild;
          if (tmp10Result) {
            const obj5 = { style: tmp.guildInfoRow, children: items2 };
            const obj6 = { guild: joinRequestGuild, size: require("GuildIcon").GuildIconSizes.XXSMALL };
            const tmp2Result = tmp2(joinRequestGuild[13]);
            items2 = [closure_7(tmp2Result, obj6)];
            const obj7 = {
              variant: "heading-sm/semibold",
              color: "mobile-text-heading-primary",
              children: joinRequestGuild.name,
            };
            items2[1] = closure_7(require("Text/Text").Text, obj7);
            tmp10Result = closure_8(View, obj5);
          }
          items3 = [tmp10Result, ,];
          let tmp16 = null != stateFromStores;
          if (tmp16) {
            const obj8 = {
              variant: "heading-xl/semibold",
              color: "mobile-text-heading-primary",
              children: intl.format(require("intl").t.jDV3i6, obj9),
            };
            const Text = tmp5(tmp3[14]).Text;
            intl = tmp5(tmp3[15]).intl;
            obj9 = { username: stateFromStores.globalName };
            tmp16 = closure_7(Text, obj8);
          }
          items3[1] = tmp16;
          const formResponses = joinRequest.formResponses;
          const found = formResponses.filter(
            (field_type) => field_type.field_type !== closure_0(joinRequestGuild[16]).VerificationFormFieldTypes.TERMS,
          );
          items3[2] = found.map((field_type, index) => {
            let items;
            if (field_type.field_type === MemberVerificationTypes.VerificationFormFieldTypes.MULTIPLE_CHOICE) {
              let response;
              if (null != field_type.response) {
                response = field_type.choices[field_type.response];
              }
              const obj = { children: items };
              const obj2 = { style: closure_0.divider };
              items = [metroImportDefault(View, obj2), ,];
              const obj3 = {
                style: closure_0.formQuestion,
                variant: "text-xs/semibold",
                color: "text-muted",
                children: field_type.label,
              };
              items[1] = metroImportDefault(Text_Text.Text, obj3);
              const obj4 = { variant: "text-md/medium", color: "text-strong", children: response };
              items[2] = metroImportDefault(Text_Text.Text, obj4);
              const _HermesInternal = HermesInternal;
              return metroImportAll(View, obj, "form-response-" + index);
            }
            response = field_type.response;
          });
          const items4 = [closure_8(View, obj4)];
          if (stateFromStores1) {
            stateFromStores1 =
              joinRequest.applicationStatus === tmp5(tmp3[16]).GuildJoinRequestApplicationStatuses.SUBMITTED;
          }
          if (stateFromStores1) {
            const obj10 = { direction: "horizontal", align: "center", children: items5 };
            const ButtonGroup = tmp5(tmp3[17]).ButtonGroup;
            const obj11 = {
              grow: true,
              size: "md",
              variant: "primary",
              onPress: approveRequest,
              text: intl2.string(require("intl").t.BzjDQJ),
            };
            const Button = tmp5(tmp3[18]).Button;
            intl2 = tmp5(tmp3[15]).intl;
            items5 = [closure_7(Button, obj11)];
            const obj12 = {
              grow: true,
              size: "md",
              variant: "destructive",
              onPress: rejectRequest,
              text: intl3.string(require("intl").t.hDtbsz),
            };
            const Button2 = tmp5(tmp3[18]).Button;
            intl3 = tmp5(tmp3[15]).intl;
            items5[1] = closure_7(Button2, obj12);
            stateFromStores1 = closure_8(ButtonGroup, obj10);
          }
          const obj13 = { children: items4 };
          items4[1] = stateFromStores1;
          tmp10Result2 = closure_8(closure_9, obj13);
        }
      }
      return tmp10Result2;
    };
const result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx",
);

export default tmp5;
