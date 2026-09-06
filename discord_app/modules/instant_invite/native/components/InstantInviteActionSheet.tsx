// === Module 9828: InstantInviteActionSheet ===

// Module 9828 (InstantInviteActionSheet)
import nativeDefault from "native" /* 576 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4545 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9820 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9829 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9830 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9821 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

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
  obj = { children: null };
  obj = { style: tmp.placeholderHeader };
  const items1 = [map1(hasOwnProperty, obj), map1(hasOwnProperty, { style: tmp.placeholderLabel }), items];
  obj.children = items1;
  return __initData(closure_1_14, obj);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const InviteTargetTypes = fn(7736).InviteTargetTypes;
const Permissions = fn(1074).Permissions;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
fn(4560);
let createStyles = { placeholderHeader: null, placeholderLabel: null, errorEmptyState: null, searchAndShareContainer: null, inviteAgeText: null, shareApps: null };
let size = { height: 16, width: "80%", margin: 16, marginBottom: 8, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.placeholderHeader = size;
const size1 = { height: 16, width: "40%", margin: 16, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.placeholderLabel = size1;
createStyles.errorEmptyState = { backgroundColor: "transparent" };
createStyles = { borderTopWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, flexDirection: "column", gap: nativeDefault.space.PX_12 };
createStyles.searchAndShareContainer = createStyles;
createStyles.inviteAgeText = { paddingBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_4 };
createStyles.shareApps = { paddingVertical: 0 };
let closure_16 = createStyles.createStyles(createStyles);
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
  const analyticsLocations = source(vanityURLCode[14])(source(vanityURLCode[15]).INSTANT_INVITE_MODAL).analyticsLocations;
  const tmp4 = source(vanityURLCode[14]);
  if (null != targetApplicationId) {
    const items = [targetApplicationId];
    let items1 = items;
  } else {
    items1 = [];
  }
  let name = _slicedToArray(source(vanityURLCode[16])(items1), 1)[0];
  let obj = channel(tmp3[17]);
  const items2 = [PermissionStore, CreateInviteModalStore, str];
  stateFromStores = obj.useStateFromStores(items2, () => {
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
          let obj = { baseCode: vanityURLCode, guildScheduledEventId: tmp12 };
          inviteKeyFromExtraData = InviteCodeUtils.generateInviteKeyFromExtraData(obj);
        }
        return inviteKeyFromExtraData;
      } else {
        code = CreateInviteModalStore.getInvite();
        if (null != code) {
          if (null != _slicedToArray) {
            obj = { baseCode: null, guildScheduledEventId: null };
            code = code.code;
            obj.baseCode = code;
            obj.guildScheduledEventId = tmp8;
            let code2 = obj.generateInviteKeyFromExtraData(obj);
          } else {
            code2 = code.code;
          }
        }
      }
    }
  });
  let obj1 = channel(tmp3[17]);
  const items3 = [CreateInviteModalStore];
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
  const callback = code.useCallback((userId) => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    obj = { userId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items4);
  const items6 = [channel];
  const callback1 = code.useCallback((fn) => {
    if (null != stateFromStores) {
      const obj = { channel, code: tmp, message: str, location: source };
      fn(obj);
      const guildId = channel.getGuildId();
      const result = HubProgressActionCreators.setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
    }
  }, items5);
  const items7 = [stateFromStores, channel, source];
  const callback2 = code.useCallback(() => {
    const guildId = channel.getGuildId();
    const result = HubProgressActionCreators.setHubProgressActionComplete(guildId, preloaded_user_settings.HubProgressStep.INVITE_USER);
  }, items6);
  const items8 = [stateFromStores, channel, str, source];
  const callback3 = code.useCallback(() => instant_invite_InstantInviteUtils.handleCopy(stateFromStores, channel, source), items7);
  const items9 = [channel];
  const callback4 = code.useCallback(() => instant_invite_InstantInviteUtils.handleOpenShareSheet(stateFromStores, channel, str, source), items8);
  const callback5 = code.useCallback(() => instant_invite_InstantInviteUtils.handlePressSettings(channel), items9);
  const tmp5 = source(vanityURLCode[16]);
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
  const first = _slicedToArray(obj3.useState(tmp22), 1)[0];
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
      obj1.applicationName = name;
      let formatToPlainStringResult = intl3.formatToPlainString(tmp7(tmp3[28]).t.ZdK3dW, obj1);
    } else {
      const intl2 = tmp7(tmp3[28]).intl;
      formatToPlainStringResult = intl2.string(tmp7(tmp3[28]).t["OzOM/q"]);
    }
  } else {
    const intl = tmp7(tmp3[28]).intl;
    let obj2 = { title: intl.string(tmp7(tmp3[28]).t["f1+QIK"]) };
    obj.header = closure_13(tmp26, obj2);
    if (null != stateFromStores1) {
      obj3 = { style: tmp.errorEmptyState, Illustration: tmp7(tmp3[30]).AppCrash, title: stateFromStores1 };
      let tmp29Result = closure_13(tmp7(tmp3[29]).EmptyState, obj3);
    } else if (tmp20) {
      tmp29Result = closure_13(Loading, {});
    } else if (first) {
      const obj4 = { contentContainerStyle: null, children: null };
      const obj5 = { paddingBottom: source(vanityURLCode[13])().bottom + 16 };
      obj4.contentContainerStyle = obj5;
      const obj6 = { link: tmp10, onCopy: callback3, onShare: callback4, onPressSettings: callback5 };
      obj4.children = closure_13(tmp2(tmp3[31]), obj6);
      tmp29Result = closure_13(stateFromStores, obj4);
    } else {
      const obj7 = { contentContainerStyle: tmp.shareApps, onItemPressed: callback1 };
      const items10 = [closure_13(tmp2(tmp3[32]), obj7), ];
      const obj8 = { style: tmp.searchAndShareContainer, children: null };
      const obj9 = { size: "md", isRound: true, onChange: tmp7(tmp3[34]).searchInviteSuggestions, placeholder: null };
      if (null != targetApplicationId) {
        const intl5 = tmp7(tmp3[28]).intl;
        let stringResult = intl5.string(tmp7(tmp3[28]).t.iI1gMg);
      } else {
        const intl4 = tmp7(tmp3[28]).intl;
        const guild = GuildStore.getGuild(channel.guild_id);
        name = undefined;
        if (guild != null) {
          name = guild.name;
        }
        const obj10 = { groupname: name };
        stringResult = intl4.formatToPlainString(tmp7(tmp3[28]).t["1UgGdm"], obj10);
      }
      obj9.placeholder = stringResult;
      const items11 = [closure_13(tmp7(tmp3[33]).SearchField, obj9), ];
      let tmp24Result = null == vanityURLCode;
      if (tmp24Result) {
        const obj11 = { style: tmp.inviteAgeText, channel, canEditInvite: null == code };
        tmp24Result = closure_13(tmp2(tmp3[35]), obj11);
      }
      const obj12 = { children: null };
      items11[1] = tmp24Result;
      obj8.children = items11;
      items10[1] = closure_15(analyticsLocations, obj8);
      obj12.children = items10;
      const items12 = [closure_15(analyticsLocations, obj12), ];
      const obj13 = { data: rows, code: stateFromStores, source: null, onPressAvatar: null, onInviteSent: null };
      const obj14 = { children: null };
      obj13.source = source;
      obj13.onPressAvatar = callback;
      obj13.onInviteSent = callback2;
      items12[1] = closure_13(tmp2(tmp3[36]), obj13);
      obj14.children = items12;
      tmp29Result = closure_15(closure_14, obj14);
      const tmp2Result = tmp2(tmp3[36]);
    }
    obj.children = tmp29Result;
    obj.children = closure_13(tmp7(tmp3[26]).BottomSheet, obj);
    return closure_13(tmp7(tmp3[14]).AnalyticsLocationProvider, obj);
  }
  const tmp19 = source(vanityURLCode[25])(channel, source, EMBEDDED_APPLICATION, targetApplicationId);
};