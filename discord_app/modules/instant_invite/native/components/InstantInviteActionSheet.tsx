// discord_app/modules/instant_invite/native/components/InstantInviteActionSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import InviteCodeUtils from "../../InviteCodeUtils.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import instant_invite_InstantInviteUtils from "../InstantInviteUtils.tsx";
import UserPlaceholderRowDefault from "../../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import HubProgressActionCreators from "../../../hub/HubProgressActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import StageInstanceStore from "../../../stage_channels/StageInstanceStore.tsx";
import CreateInviteModalStore from "../../../../stores/CreateInviteModalStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

require = fn;
function Loading() {
  const tmp = closure_16();
  const items = [];
  let num = 0;
  do {
    let obj = { row: num };
    let arr = items.push(map1(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  const obj2 = { children: null };
  const items1 = [
    map1(hasOwnProperty, { style: tmp.placeholderHeader }),
    map1(hasOwnProperty, { style: tmp.placeholderLabel }),
    items,
  ];
  obj2.children = items1;
  return __initData(closure_1_14, obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const InviteTargetTypes = fn(7978).InviteTargetTypes;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  placeholderHeader: null,
  placeholderLabel: null,
  errorEmptyState: null,
  searchAndShareContainer: null,
  inviteAgeText: null,
  shareApps: null,
};
let size = {
  height: 16,
  width: "80%",
  margin: 16,
  marginBottom: 8,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.placeholderHeader = size;
const size1 = {
  height: 16,
  width: "40%",
  margin: 16,
  borderRadius: nativeDefault.radii.sm,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.placeholderLabel = size1;
obj2.errorEmptyState = { backgroundColor: "transparent" };
obj2.searchAndShareContainer = {
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexDirection: "column",
  gap: nativeDefault.space.PX_12,
};
let obj3 = {
  borderTopWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: nativeDefault.space.PX_8,
  paddingVertical: nativeDefault.space.PX_8,
  paddingHorizontal: nativeDefault.space.PX_12,
  flexDirection: "column",
  gap: nativeDefault.space.PX_12,
};
obj2.inviteAgeText = { paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_4 };
obj2.shareApps = { paddingVertical: 0 };
let closure_16 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/instant_invite/native/components/InstantInviteActionSheet.tsx");

export default function InstantInviteActionSheet(channel) {
  channel = channel.channel;
  const source = channel.source;
  const vanityURLCode = channel.vanityURLCode;
  ({ guildScheduledEventId: _slicedToArray, targetApplicationId, code } = channel);
  let stateFromStores;
  let str;
  const tmp = closure_16();
  const analyticsLocations = source(vanityURLCode[14])(
    source(vanityURLCode[15]).INSTANT_INVITE_MODAL,
  ).analyticsLocations;
  const tmp4 = source(vanityURLCode[14]);
  if (null != targetApplicationId) {
    const items = [targetApplicationId];
    let items1 = items;
  } else {
    items1 = [];
  }
  let name = _slicedToArray(source(vanityURLCode[16])(items1), 1)[0];
  const tmp5 = source(vanityURLCode[16]);
  const items2 = [PermissionStore, CreateInviteModalStore, str];
  stateFromStores = channel(vanityURLCode[17]).useStateFromStores(items2, () => {
    if (null != code) {
      return code;
    } else {
      if (channel.isGuildStageVoice()) {
        if (!PermissionStore.can(Permissions.CREATE_INSTANT_INVITE, channel)) {
          const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
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
        let inviteKeyFromExtraData = vanityURLCode;
        if (null != _slicedToArray) {
          const obj2 = { baseCode: vanityURLCode, guildScheduledEventId: tmp12 };
          inviteKeyFromExtraData = InviteCodeUtils.generateInviteKeyFromExtraData(obj2);
        }
        return inviteKeyFromExtraData;
      } else {
        code = CreateInviteModalStore.getInvite();
        if (null != code) {
          if (null != _slicedToArray) {
            const obj4 = { baseCode: null, guildScheduledEventId: null };
            code = code.code;
            obj4.baseCode = code;
            obj4.guildScheduledEventId = tmp8;
            let code2 = InviteCodeUtils.generateInviteKeyFromExtraData(obj4);
          } else {
            code2 = code.code;
          }
        }
      }
    }
  });
  let obj = channel(vanityURLCode[17]);
  const items3 = [CreateInviteModalStore];
  const stateFromStores1 = channel(vanityURLCode[17]).useStateFromStores(items3, () => error.getError());
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
  const items4 = [channel, analyticsLocations];
  const items5 = [channel, stateFromStores, str, source];
  const callback = code.useCallback((userId) => {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    showUserProfileActionSheetDefault({ userId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations });
  }, items4);
  const items6 = [channel];
  const callback1 = code.useCallback((fn) => {
    if (null != stateFromStores) {
      const obj = { channel, code: tmp, message: str, location: source };
      fn(obj);
      const guildId = channel.getGuildId();
      const result = HubProgressActionCreators.setHubProgressActionComplete(
        guildId,
        preloaded_user_settings.HubProgressStep.INVITE_USER,
      );
    }
  }, items5);
  const items7 = [stateFromStores, channel, source];
  const callback2 = code.useCallback(() => {
    const guildId = channel.getGuildId();
    const result = HubProgressActionCreators.setHubProgressActionComplete(
      guildId,
      preloaded_user_settings.HubProgressStep.INVITE_USER,
    );
  }, items6);
  const items8 = [stateFromStores, channel, str, source];
  const callback3 = code.useCallback(
    () => instant_invite_InstantInviteUtils.handleCopy(stateFromStores, channel, source),
    items7,
  );
  const items9 = [channel];
  const callback4 = code.useCallback(
    () => instant_invite_InstantInviteUtils.handleOpenShareSheet(stateFromStores, channel, str, source),
    items8,
  );
  const callback5 = code.useCallback(() => instant_invite_InstantInviteUtils.handlePressSettings(channel), items9);
  let obj2 = channel(vanityURLCode[17]);
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
  const first = _slicedToArray(code.useState(tmp22), 1)[0];
  let obj3 = { value: analyticsLocations, children: null };
  let tmp25 = null != stateFromStores1;
  if (!tmp25) {
    tmp25 = !tmp20;
  }
  if (!tmp25) {
    tmp25 = !first;
  }
  const obj5 = { showGradient: tmp25, scrollable: true, startExpanded: true, header: null, children: null };
  if (null != targetApplicationId) {
    if (null != name) {
      const intl3 = tmp7(tmp3[28]).intl;
      const obj6 = { applicationName: null };
      name = name.name;
      obj6.applicationName = name;
      let formatToPlainStringResult = intl3.formatToPlainString(tmp7(tmp3[28]).t.ZdK3dW, obj6);
    } else {
      const intl2 = tmp7(tmp3[28]).intl;
      formatToPlainStringResult = intl2.string(tmp7(tmp3[28]).t["OzOM/q"]);
    }
  } else {
    const intl = tmp7(tmp3[28]).intl;
    const obj7 = { title: intl.string(tmp7(tmp3[28]).t["f1+QIK"]) };
    obj5.header = closure_13(tmp26, obj7);
    if (null != stateFromStores1) {
      const obj8 = { style: tmp.errorEmptyState, Illustration: tmp7(tmp3[30]).AppCrash, title: stateFromStores1 };
      let tmp29Result = closure_13(tmp7(tmp3[29]).EmptyState, obj8);
    } else if (tmp20) {
      tmp29Result = closure_13(Loading, {});
    } else if (first) {
      const obj9 = { contentContainerStyle: null, children: null };
      const obj10 = { paddingBottom: source(vanityURLCode[13])().bottom + 16 };
      obj9.contentContainerStyle = obj10;
      const obj11 = { link: tmp10, onCopy: callback3, onShare: callback4, onPressSettings: callback5 };
      obj9.children = closure_13(tmp2(tmp3[31]), obj11);
      tmp29Result = closure_13(stateFromStores, obj9);
    } else {
      const obj12 = { contentContainerStyle: tmp.shareApps, onItemPressed: callback1 };
      const items10 = [closure_13(tmp2(tmp3[32]), obj12)];
      const obj13 = { style: tmp.searchAndShareContainer, children: null };
      const obj14 = { size: "md", round: true, onChange: tmp7(tmp3[34]).searchInviteSuggestions, placeholder: null };
      if (null != targetApplicationId) {
        const intl5 = tmp7(tmp3[28]).intl;
        let stringResult = intl5.string(tmp7(tmp3[28]).t.iI1gMg);
      } else {
        const intl4 = tmp7(tmp3[28]).intl;
        const guild = GuildStore.getGuild(channel.guild_id);
        let name1;
        if (guild != null) {
          name1 = guild.name;
        }
        const obj15 = { groupname: name1 };
        stringResult = intl4.formatToPlainString(tmp7(tmp3[28]).t["1UgGdm"], obj15);
      }
      obj14.placeholder = stringResult;
      const items11 = [closure_13(tmp7(tmp3[33]).SearchField, obj14)];
      let tmp24Result2 = null == vanityURLCode;
      if (tmp24Result2) {
        const obj16 = { style: tmp.inviteAgeText, channel, canEditInvite: null == code };
        tmp24Result2 = closure_13(tmp2(tmp3[35]), obj16);
      }
      const obj17 = { children: null };
      items11[1] = tmp24Result2;
      obj13.children = items11;
      items10[1] = closure_15(analyticsLocations, obj13);
      obj17.children = items10;
      const items12 = [closure_15(analyticsLocations, obj17)];
      const obj18 = { data: rows, code: stateFromStores, source: null, onPressAvatar: null, onInviteSent: null };
      const obj19 = { children: null };
      obj18.source = source;
      obj18.onPressAvatar = callback;
      obj18.onInviteSent = callback2;
      items12[1] = closure_13(tmp2(tmp3[36]), obj18);
      obj19.children = items12;
      tmp29Result = closure_15(closure_14, obj19);
      const tmp2Result = tmp2(tmp3[36]);
    }
    obj5.children = tmp29Result;
    obj3.children = closure_13(tmp7(tmp3[26]).BottomSheet, obj5);
    return closure_13(tmp7(tmp3[14]).AnalyticsLocationProvider, obj3);
  }
  const tmp19 = source(vanityURLCode[25])(channel, source, EMBEDDED_APPLICATION, targetApplicationId);
}
