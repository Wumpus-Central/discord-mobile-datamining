// discord_app/modules/instant_invite/native/components/InstantInviteActionSheet.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef9879 from "../../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stage_channels/StageInstanceStore.tsx";
import closure_8 from "../../../../stores/CreateInviteModalStore.tsx";
import closure_9 from "../../../../stores/GuildStore.tsx";
import closure_10 from "../../../../stores/PermissionStore.tsx";
import { InviteTargetTypes } from "../../Constants.tsx";
import { Permissions } from "../../../../Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function Loading() {
  let tmp2;
  const tmp = callback4();
  const items = [];
  let num = 0;
  do {
    tmp2 = callback2;
    let tmp3 = importDefault;
    let tmp4 = dependencyMap;
    let obj = { row: null };
    obj[0] = num;
    let arr = items.push(callback2(_modDef9879, obj, num));
    num = num + 1;
  } while (num < 10);
  obj = { children: null };
  obj = { style: tmp.placeholderHeader };
  const items1 = [tmp2(closure_5, obj), tmp2(closure_5, { style: tmp.placeholderLabel }), items];
  obj[0] = items1;
  return callback3(closure_14, obj);
}
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
createCacheKey = { placeholderHeader: null, placeholderLabel: null, errorEmptyState: null, searchAndShareContainer: null, inviteAgeText: null, shareApps: null };
createCacheKey = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 16, width: "40%", margin: 16, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[2] = { backgroundColor: "transparent" };
let obj1 = { height: 16, width: "40%", margin: 16, borderRadius: ThemesDefault.radii.sm, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
createCacheKey[3] = { borderTopWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_12, flexDirection: "column", gap: ThemesDefault.space.PX_12 };
let obj2 = { borderTopWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, marginTop: ThemesDefault.space.PX_8, paddingVertical: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_12, flexDirection: "column", gap: ThemesDefault.space.PX_12 };
createCacheKey[4] = { paddingBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_4 };
createCacheKey[5] = { paddingVertical: 0 };
let closure_16 = createCacheKey.createStyles(createCacheKey);
let obj3 = { paddingBottom: ThemesDefault.space.PX_8, paddingHorizontal: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/instant_invite/native/components/InstantInviteActionSheet.tsx");

export default function InstantInviteActionSheet(channel) {
  channel = channel.channel;
  const source = channel.source;
  const vanityURLCode = channel.vanityURLCode;
  ({ guildScheduledEventId: closure_3, targetApplicationId, code } = channel);
  let analyticsLocations;
  let stateFromStores;
  let str;
  const tmp = callback4();
  analyticsLocations = source(vanityURLCode[14])(source(vanityURLCode[15]).INSTANT_INVITE_MODAL).analyticsLocations;
  const tmp4 = source(vanityURLCode[14]);
  if (null != targetApplicationId) {
    const items = [targetApplicationId];
    let items1 = items;
  } else {
    items1 = [];
  }
  let name = callback(source(vanityURLCode[16])(items1), 1)[0];
  let obj = channel(tmp3[17]);
  const items2 = [closure_10, closure_8, str];
  stateFromStores = obj.useStateFromStores(items2, () => {
    if (null != code) {
      return code;
    } else {
      if (channel.isGuildStageVoice()) {
        if (!closure_1_10.can(closure_1_12.CREATE_INSTANT_INVITE, tmp16)) {
          const stageInstanceByChannel = str.getStageInstanceByChannel(tmp16.id);
          let invite_code;
          if (stageInstanceByChannel != null) {
            invite_code = stageInstanceByChannel.invite_code;
          }
          if (null != invite_code) {
            return stageInstanceByChannel.invite_code;
          }
        }
      }
      if (null != vanityURLCode) {
        let inviteKeyFromExtraData = tmp6;
        if (null != closure_3) {
          let obj = { baseCode: null, guildScheduledEventId: null };
          obj[0] = tmp6;
          obj[1] = tmp12;
          inviteKeyFromExtraData = channel(vanityURLCode[18]).generateInviteKeyFromExtraData(obj);
          const obj3 = channel(vanityURLCode[18]);
        }
        return inviteKeyFromExtraData;
      } else {
        code = closure_1_8.getInvite();
        if (null != code) {
          if (null != closure_3) {
            obj = channel(vanityURLCode[18]);
            obj = { baseCode: null, guildScheduledEventId: null };
            code = code.code;
            obj[0] = code;
            obj[1] = tmp8;
            let code2 = obj.generateInviteKeyFromExtraData(obj);
          } else {
            code2 = code.code;
          }
        }
      }
    }
  });
  obj1 = channel(tmp3[17]);
  const items3 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => error.getError());
  let tmp10 = null;
  if (null != stateFromStores) {
    tmp10 = tmp2(tmp3[19])(stateFromStores);
  }
  str = "";
  if (null != tmp10) {
    str = tmp7(tmp3[20]).getShareMessage(tmp10);
    const tmp7Result = tmp7(tmp3[20]);
  }
  let EMBEDDED_APPLICATION = null;
  if (null != targetApplicationId) {
    EMBEDDED_APPLICATION = InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  let obj3 = code;
  const items4 = [channel, analyticsLocations];
  const items5 = [channel, stateFromStores, str, source];
  callback = code.useCallback((userId) => {
    let obj = source(vanityURLCode[21]);
    obj.hideActionSheet();
    obj = { userId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
    source(vanityURLCode[22])(obj);
  }, items4);
  const items6 = [channel];
  const callback1 = code.useCallback((arg0) => {
    if (null != stateFromStores) {
      const obj = { channel: null, code: null, message: null, location: null };
      obj[0] = channel;
      obj[1] = tmp;
      obj[2] = str;
      obj[3] = source;
      arg0(obj);
      const guildId = channel.getGuildId();
      const result = channel(vanityURLCode[23]).setHubProgressActionComplete(guildId, channel(vanityURLCode[24]).HubProgressStep.INVITE_USER);
      const obj2 = channel(vanityURLCode[23]);
    }
  }, items5);
  const items7 = [stateFromStores, channel, source];
  const callback2 = code.useCallback(() => {
    const guildId = channel.getGuildId();
    const result = channel(vanityURLCode[23]).setHubProgressActionComplete(guildId, channel(vanityURLCode[24]).HubProgressStep.INVITE_USER);
  }, items6);
  const items8 = [stateFromStores, channel, str, source];
  const callback3 = code.useCallback(() => channel(vanityURLCode[20]).handleCopy(stateFromStores, channel, source), items7);
  const items9 = [channel];
  callback4 = code.useCallback(() => channel(vanityURLCode[20]).handleOpenShareSheet(stateFromStores, channel, str, source), items8);
  const callback5 = code.useCallback(() => channel(vanityURLCode[20]).handlePressSettings(channel), items9);
  const tmp5 = source(vanityURLCode[16]);
  const tmp6 = callback;
  ({ rows, isFetchingRows } = source(vanityURLCode[25])(channel, source, EMBEDDED_APPLICATION, targetApplicationId));
  let tmp20 = null == stateFromStores;
  if (!tmp20) {
    tmp20 = 0 === rows.length && isFetchingRows;
    const tmp21 = 0 === rows.length && isFetchingRows;
  }
  let tmp22 = null != stateFromStores;
  if (tmp22) {
    tmp22 = 0 === rows.length;
  }
  if (tmp22) {
    tmp22 = !isFetchingRows;
  }
  const first = tmp6(obj3.useState(tmp22), 1)[0];
  obj = { value: analyticsLocations, children: null };
  let tmp25 = null != stateFromStores1;
  if (!tmp25) {
    tmp25 = !tmp20;
  }
  if (!tmp25) {
    tmp25 = !first;
  }
  obj = { showGradient: tmp25, scrollable: true, startExpanded: true, header: null, children: null };
  if (null != targetApplicationId) {
    if (null != name) {
      const intl3 = tmp7(tmp3[28]).intl;
      obj1 = { applicationName: null };
      name = name.name;
      obj1[0] = name;
      let formatToPlainStringResult = intl3.formatToPlainString(tmp7(tmp3[28]).t.ZdK3dW, obj1);
    } else {
      const intl2 = tmp7(tmp3[28]).intl;
      formatToPlainStringResult = intl2.string(tmp7(tmp3[28]).t["OzOM/q"]);
    }
  } else {
    const intl = tmp7(tmp3[28]).intl;
    let obj2 = { title: null };
    obj2[0] = intl.string(tmp7(tmp3[28]).t["f1+QIK"]);
    obj[3] = tmp24(tmp26, obj2);
    if (null != stateFromStores1) {
      obj3 = { style: null, Illustration: null, title: null };
      obj3[0] = tmp.errorEmptyState;
      obj3[1] = tmp7(tmp3[30]).AppCrash;
      obj3[2] = stateFromStores1;
      let tmp29Result = tmp24(tmp7(tmp3[29]).EmptyState, obj3);
    } else if (tmp20) {
      tmp29Result = tmp24(Loading, {});
    } else if (first) {
      const obj4 = { contentContainerStyle: null, children: null };
      const obj5 = { paddingBottom: null };
      obj5[0] = source(vanityURLCode[13])().bottom + 16;
      obj4[0] = obj5;
      const obj6 = { link: null, onCopy: null, onShare: null, onPressSettings: null };
      obj6[0] = tmp10;
      obj6[1] = callback3;
      obj6[2] = callback4;
      obj6[3] = callback5;
      obj4[1] = tmp24(tmp2(tmp3[31]), obj6);
      tmp29Result = tmp24(stateFromStores, obj4);
    } else {
      const obj7 = { contentContainerStyle: null, onItemPressed: null };
      obj7[0] = tmp.shareApps;
      obj7[1] = callback1;
      const items10 = [tmp24(tmp2(tmp3[32]), obj7), ];
      const obj8 = { style: null, children: null };
      obj8[0] = tmp.searchAndShareContainer;
      const obj9 = { size: "md", isRound: true, onChange: null, placeholder: null };
      obj9[2] = tmp7(tmp3[34]).searchInviteSuggestions;
      if (null != targetApplicationId) {
        const intl5 = tmp7(tmp3[28]).intl;
        let stringResult = intl5.string(tmp7(tmp3[28]).t.iI1gMg);
      } else {
        const intl4 = tmp7(tmp3[28]).intl;
        guild = guild.getGuild(channel.guild_id);
        name = undefined;
        if (guild != null) {
          name = guild.name;
        }
        const obj10 = { groupname: null };
        obj10[0] = name;
        stringResult = intl4.formatToPlainString(tmp7(tmp3[28]).t["1UgGdm"], obj10);
      }
      obj9[3] = stringResult;
      const items11 = [tmp24(tmp7(tmp3[33]).SearchField, obj9), ];
      let tmp24Result = null == vanityURLCode;
      if (tmp24Result) {
        const obj11 = { style: null, channel: null, canEditInvite: null };
        obj11[0] = tmp.inviteAgeText;
        obj11[1] = channel;
        obj11[2] = null == code;
        tmp24Result = tmp24(tmp2(tmp3[35]), obj11);
      }
      const obj12 = { children: null };
      items11[1] = tmp24Result;
      obj8[1] = items11;
      items10[1] = closure_15(analyticsLocations, obj8);
      obj12[0] = items10;
      const items12 = [closure_15(analyticsLocations, obj12), ];
      const obj13 = { data: null, code: null, source: null, onPressAvatar: null, onInviteSent: null };
      obj13[0] = rows;
      obj13[1] = stateFromStores;
      const obj14 = { children: null };
      obj13[2] = source;
      obj13[3] = callback;
      obj13[4] = callback2;
      items12[1] = tmp24(tmp2(tmp3[36]), obj13);
      obj14[0] = items12;
      tmp29Result = tmp29(closure_14, obj14);
      const tmp2Result = tmp2(tmp3[36]);
      const tmp30 = closure_14;
      const tmp38 = source;
    }
    obj[4] = tmp29Result;
    obj[1] = tmp24(tmp7(tmp3[26]).BottomSheet, obj);
    return tmp24(tmp7(tmp3[14]).AnalyticsLocationProvider, obj);
  }
};