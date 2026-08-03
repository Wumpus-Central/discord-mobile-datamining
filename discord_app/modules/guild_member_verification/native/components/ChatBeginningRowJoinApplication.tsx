// === Module 11841: ChatBeginningRowJoinRequest ===

// Module 11841 (ChatBeginningRowJoinRequest)
import "noop";
import { View } from "set";
import getUncachedChannelPermissions from "getUncachedChannelPermissions";
import mergeGuildAvatar from "mergeGuildAvatar";
import { Permissions } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
createCacheKey = { container: null, guildInfoRow: null, divider: null, formQuestion: null };
createCacheKey = { width: "100%", marginTop: 12, display: "flex", flexDirection: "column", alignSelf: "flex-start", padding: 16, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderColor: require("Themes").colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: require("Themes").radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 4 };
createCacheKey[2] = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
createCacheKey[3] = { marginBottom: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.BORDER_SUBTLE, height: 1, border: "none", marginVertical: 16 };
const result = require("getUncachedChannelPermissions").fileFinishedImporting("modules/guild_member_verification/native/components/ChatBeginningRowJoinApplication.tsx");

export default function ChatBeginningRowJoinRequest(channelId) {
  let approveRequest;
  let rejectRequest;
  channelId = channelId.channelId;
  let _require;
  let joinRequest;
  let joinRequestGuild;
  const tmp = createCacheKey();
  _require = tmp;
  const tmp4 = joinRequest(joinRequestGuild[8])(channelId);
  joinRequest = tmp4.joinRequest;
  joinRequestGuild = tmp4.joinRequestGuild;
  let obj = _require(joinRequestGuild[9]);
  let items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let userId;
    if (joinRequest != null) {
      userId = joinRequest.userId;
    }
    return outer1_5.getUser(userId);
  });
  let obj1 = _require(joinRequestGuild[10]);
  const joinRequestButtonActions = obj1.useJoinRequestButtonActions(joinRequest, channelId);
  ({ approveRequest, rejectRequest } = joinRequestButtonActions);
  let obj2 = _require(joinRequestGuild[9]);
  const items1 = [getUncachedChannelPermissions];
  let stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_4.can(outer1_6.KICK_MEMBERS, joinRequestGuild));
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
        const items2 = [callback(joinRequest(tmp3[11]), obj1), ];
        obj2 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", children: null };
        obj2[2] = joinRequestGuild.name;
        items2[1] = callback(tmp5(tmp3[12]).Text, obj2);
        obj[1] = items2;
        tmp10Result = tmp10(tmp12, obj);
        const tmp2Result = joinRequest(tmp3[11]);
      }
      const items3 = [tmp10Result, , ];
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
      const found = formResponses.filter((field_type) => field_type.field_type !== _undefined(joinRequestGuild[14]).VerificationFormFieldTypes.TERMS);
      items3[2] = found.map((field_type) => {
        if (field_type.field_type === _undefined(joinRequestGuild[14]).VerificationFormFieldTypes.MULTIPLE_CHOICE) {
          if (null != field_type.response) {
            let response = field_type.choices[field_type.response];
          }
          let obj = { children: null };
          obj = { style: null };
          obj[0] = _undefined.divider;
          const items = [outer1_7(outer1_3, obj), , ];
          obj = { style: null, variant: "text-xs/semibold", color: "text-muted", children: null };
          obj[0] = _undefined.formQuestion;
          obj[3] = field_type.label;
          items[1] = outer1_7(tmp(tmp2[12]).Text, obj);
          const obj1 = { variant: "text-md/medium", color: "text-strong", children: null };
          obj1[2] = response;
          items[2] = outer1_7(tmp(tmp2[12]).Text, obj1);
          obj[0] = items;
          const _HermesInternal = HermesInternal;
          return outer1_8(outer1_3, obj, "form-response-" + arg1);
        }
        response = field_type.response;
      });
      obj[1] = items3;
      const items4 = [closure_8(View, obj), ];
      if (stateFromStores1) {
        stateFromStores1 = joinRequest.applicationStatus === tmp5(tmp3[14]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      }
      if (stateFromStores1) {
        const obj5 = { direction: "horizontal", align: "center", children: null };
        const obj6 = { grow: true, size: "md", variant: "primary", onPress: null, text: null };
        obj6[3] = approveRequest;
        const intl2 = tmp5(tmp3[13]).intl;
        obj6[4] = intl2.string(tmp5(tmp3[13]).t.BzjDQJ);
        const items5 = [callback(tmp5(tmp3[16]).Button, obj6), ];
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
};