// discord_app/modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../../stores/PermissionStore.tsx";
import closure_5 from "../../../../stores/UserStore.tsx";
import { Permissions } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
createCacheKey = { container: null, guildInfoRow: null, divider: null, formQuestion: null };
createCacheKey = {
  width: "100%",
  marginTop: 12,
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  padding: 16,
  backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  borderWidth: 1,
  borderRadius: ThemesDefault.radii.lg,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
createCacheKey[2] = {
  backgroundColor: ThemesDefault.colors.BORDER_SUBTLE,
  height: 1,
  border: "none",
  marginVertical: 16,
};
createCacheKey[3] = { marginBottom: 4 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
const result = require("set").fileFinishedImporting(
  "modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx",
);

export default function ChatBeginningRowJoinRequest(channelId) {
  channelId = channelId.channelId;
  let _require;
  let joinRequest;
  let joinRequestGuild;
  const tmp = callback2();
  _require = tmp;
  const tmp4 = joinRequest(joinRequestGuild[8])(channelId);
  joinRequest = tmp4.joinRequest;
  joinRequestGuild = tmp4.joinRequestGuild;
  let obj = _require(joinRequestGuild[9]);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let userId;
    if (joinRequest != null) {
      userId = joinRequest.userId;
    }
    return closure_1_5.getUser(userId);
  });
  obj1 = _require(joinRequestGuild[10]);
  const joinRequestButtonActions = obj1.useJoinRequestButtonActions(joinRequest, channelId);
  ({ approveRequest, rejectRequest } = joinRequestButtonActions);
  let obj2 = _require(joinRequestGuild[9]);
  const items1 = [closure_4];
  let stateFromStores1 = obj2.useStateFromStores(items1, () =>
    closure_1_4.can(closure_1_6.KICK_MEMBERS, joinRequestGuild),
  );
  let tmp10Result = null;
  if (null != joinRequest) {
    tmp10Result = null;
    if (null != joinRequest.formResponses) {
      obj = { style: null, children: null };
      obj[0] = tmp.container;
      tmp10Result = null != joinRequestGuild;
      if (tmp10Result) {
        obj = { style: null, children: null };
        obj[0] = tmp.guildInfoRow;
        obj1 = { guild: null, size: null };
        obj1[0] = joinRequestGuild;
        obj1[1] = tmp5(tmp3[11]).GuildIconSizes.XXSMALL;
        const items2 = [callback(joinRequest(tmp3[11]), obj1)];
        obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
        obj2[2] = joinRequestGuild.name;
        items2[1] = callback(tmp5(tmp3[12]).Text, obj2);
        obj[1] = items2;
        tmp10Result = tmp10(tmp12, obj);
        const tmp2Result = joinRequest(tmp3[11]);
      }
      const items3 = [tmp10Result, ,];
      let tmp16 = null != stateFromStores;
      if (tmp16) {
        const obj3 = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: null };
        const intl = tmp5(tmp3[13]).intl;
        const obj4 = { username: null };
        obj4[0] = stateFromStores.globalName;
        obj3[2] = intl.format(tmp5(tmp3[13]).t.jDV3i6, obj4);
        tmp16 = callback(tmp5(tmp3[12]).Text, obj3);
      }
      items3[1] = tmp16;
      const formResponses = joinRequest.formResponses;
      const found = formResponses.filter(
        (field_type) => field_type.field_type !== lib(joinRequestGuild[14]).VerificationFormFieldTypes.TERMS,
      );
      items3[2] = found.map((field_type) => {
        if (field_type.field_type === lib(joinRequestGuild[14]).VerificationFormFieldTypes.MULTIPLE_CHOICE) {
          if (null != field_type.response) {
            let response = field_type.choices[field_type.response];
          }
          let obj = { children: null };
          obj = { style: null };
          obj[0] = lib.divider;
          const items = [closure_1_7(closure_1_3, obj), ,];
          obj = { style: null, variant: "text-xs/semibold", color: "text-muted", children: null };
          obj[0] = lib.formQuestion;
          obj[3] = field_type.label;
          items[1] = closure_1_7(tmp(tmp2[12]).Text, obj);
          obj1 = { variant: "text-md/medium", color: "text-strong", children: null };
          obj1[2] = response;
          items[2] = closure_1_7(tmp(tmp2[12]).Text, obj1);
          obj[0] = items;
          const _HermesInternal = HermesInternal;
          return closure_1_8(closure_1_3, obj, "form-response-" + arg1);
        }
        response = field_type.response;
      });
      obj[1] = items3;
      const items4 = [closure_8(View, obj)];
      if (stateFromStores1) {
        stateFromStores1 =
          joinRequest.applicationStatus === tmp5(tmp3[14]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      }
      if (stateFromStores1) {
        const obj5 = { direction: "horizontal", align: "center", children: null };
        const obj6 = { grow: true, size: "md", variant: "primary", onPress: null, text: null };
        obj6[3] = approveRequest;
        const intl2 = tmp5(tmp3[13]).intl;
        obj6[4] = intl2.string(tmp5(tmp3[13]).t.BzjDQJ);
        const items5 = [callback(tmp5(tmp3[16]).Button, obj6)];
        const obj7 = { grow: true, size: "md", variant: "destructive", onPress: null, text: null };
        obj7[3] = rejectRequest;
        const intl3 = tmp5(tmp3[13]).intl;
        obj7[4] = intl3.string(tmp5(tmp3[13]).t.hDtbsz);
        items5[1] = callback(tmp5(tmp3[16]).Button, obj7);
        obj5[2] = items5;
        stateFromStores1 = tmp10(tmp5(tmp3[15]).ButtonGroup, obj5);
      }
      const obj8 = { children: null };
      items4[1] = stateFromStores1;
      obj8[0] = items4;
      tmp10Result = tmp10(closure_9, obj8);
      const tmp11 = closure_9;
    }
  }
  return tmp10Result;
}
