// === Module 9131: FormComponents ===

// Module 9131 (FormComponents)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import NativeViewDefault from "NativeView" /* 5901 */;
import TableRowGroup from "TableRowGroup" /* 5999 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7157 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7624 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9132 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9194 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4876 */;

require = fn;
function VoiceBadges(arg0) {
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.voiceBadgesContainer, children: null };
  let tmp6 = null;
  if (null != muteDeafenIconState) {
    const obj2 = { style: tmp.iconWrapper, children: null };
    const obj3 = { state: muteDeafenIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    obj2.children = hasOwnProperty(VoiceStateIcons.MuteDeafenIcon, obj3);
    tmp6 = hasOwnProperty(NativeViewDefault, obj2);
    const tmp3Result = NativeViewDefault;
  }
  const items = [tmp6, ];
  let tmp10 = null;
  if (null != videoIconState) {
    const obj4 = { style: tmp.iconWrapper, children: null };
    const obj5 = { state: videoIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    obj4.children = hasOwnProperty(VoiceStateIcons.VideoIcon, obj5);
    tmp10 = hasOwnProperty(NativeViewDefault, obj4);
    const tmp3Result2 = NativeViewDefault;
  }
  items[1] = tmp10;
  obj.children = items;
  return timestampProducer(NativeViewDefault, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4836);
let obj2 = { container: { marginHorizontal: 16 }, voiceBadgesContainer: { flexDirection: "row" }, iconWrapper: { marginLeft: 8, padding: 6, backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: nativeDefault.radii.round }, icon: null, notConnectedAvatar: null, memberRow: null, trailingContainer: null };
let size = { width: 16, height: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.icon = size;
obj2.notConnectedAvatar = { opacity: 0.5 };
obj2.memberRow = { flexDirection: "row", alignItems: "center", gap: 4 };
obj2.trailingContainer = { flexDirection: "row", alignItems: "center", gap: 8 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  const obj = { style: null, children: null };
  const items = [closure_7().container, style.style];
  obj.style = items;
  const tmp2 = closure_7();
  const merged1 = Object.assign(merged);
  obj.children = hasOwnProperty(TableRowGroup.TableRowGroup, {});
  return hasOwnProperty(NativeViewDefault, obj);
};
export const MemberRowItem = function MemberRowItem(user) {
  user = user.user;
  const channelId = user.channelId;
  let flag = user.selfStream;
  if (flag === undefined) {
    flag = false;
  }
  ({ nick, guildId, notConnected } = user);
  if (notConnected === undefined) {
    notConnected = false;
  }
  ({ showSecureFramesUI, showRing } = user);
  if (showSecureFramesUI === undefined) {
    showSecureFramesUI = false;
  }
  let flag2 = user.showGameActivity;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = closure_7();
  const analyticsLocations = channelId(flag[9])().analyticsLocations;
  const muteDeafenIconState = user(flag[10]).useMuteDeafenIconState(user.id, guildId);
  let obj = user(flag[10]);
  const videoIconState = user(flag[10]).useVideoIconState(user.id, guildId);
  const id = user.id;
  let obj2 = user(flag[10]);
  const isUserSecureFramesVerified = user(flag[11]).useIsUserSecureFramesVerified({ userId: id, channelId });
  const obj3 = user(flag[11]);
  const canRing = user(flag[12]).useCanRing(user);
  const obj4 = user(flag[12]);
  const obj5 = { userId: user.id, guildId };
  const tmp9 = channelId(flag[13])({ userId: user.id, guildId });
  const displayNameStylesFont = user(flag[14]).useDisplayNameStylesFont({ displayNameStyles: tmp9 });
  let items = [id, channelId, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    showUserProfileActionSheetDefault({ userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  const obj6 = user(flag[14]);
  const obj7 = analyticsLocations;
  const items1 = [id];
  const stateFromStores = user(flag[16]).useStateFromStores(items1, () => StreamerApplicationSelectors.getStreamerActivityByUserId(id, PresenceStore));
  let tmp13 = channelId(flag[18])("voice_member_row");
  const obj8 = user(flag[16]);
  if (tmp13) {
    tmp13 = flag2;
  }
  const first = channelId(flag[19])(id, guildId, tmp13)[0];
  let application_id;
  if (first != null) {
    application_id = first.application_id;
  }
  const gameRecord = tmp2(tmp3[20])(application_id).gameRecord;
  const items2 = [stateFromStores, flag];
  let tmp18 = true === showRing;
  const memo = obj7.useMemo(() => {
    if (!flag) {
      return null;
    } else {
      let obj = stateFromStores;
      if (null == stateFromStores) {
        const intl = util.intl;
        intl.string(util.t.eXan7B);
      }
      const intl2 = util.intl;
      if (null == obj.details) {
        obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
        const obj2 = { name: obj.name };
        obj.children = intl2.format(tmp12, obj2);
        hasOwnProperty(Text_Text.Text, obj);
      }
      const details = obj.details;
    }
  }, items2);
  if (tmp18) {
    tmp18 = canRing;
  }
  const obj9 = { onPress: callback, icon: null, subLabel: null, trailing: null, label: null };
  const obj10 = { user, guildId, size: user(flag[8]).AvatarSizes.REFRESH_MEDIUM_32, style: null };
  let notConnectedAvatar;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  obj10.style = notConnectedAvatar;
  obj9.icon = stateFromStores(user(flag[8]).Avatar, obj10);
  obj9.subLabel = memo;
  if (!tmp18) {
    obj9.trailing = tmp23Result;
    if (nick == null) {
      nick = tmp4(tmp3[27]).getName(user);
      const tmp4Result = tmp4(tmp3[27]);
    }
    const obj11 = { style: tmp.memberRow, children: null };
    let str = "text-default";
    if (notConnected) {
      str = "text-muted";
    }
    const obj12 = { variant: "text-md/semibold", color: str, style: null, children: null };
    let tmp30 = null != displayNameStylesFont;
    if (tmp30) {
      const obj13 = { fontFamily: displayNameStylesFont };
      tmp30 = obj13;
    }
    obj12.style = tmp30;
    obj12.children = nick;
    const items3 = [tmp20(tmp4(tmp3[21]).Text, obj12), , ];
    const obj14 = { userId: user.id };
    items3[1] = tmp20(tmp2(tmp3[28]), obj14);
    let tmp20Result = null;
    if (showSecureFramesUI) {
      tmp20Result = null;
      if (isUserSecureFramesVerified) {
        const obj15 = { size: "xs", style: tmp.icon };
        tmp20Result = tmp20(tmp4(tmp3[29]).ShieldLockIcon, obj15);
      }
    }
    items3[2] = tmp20Result;
    obj11.children = items3;
    obj9.label = closure_6(tmp2(tmp3[5]), obj11);
    return tmp20(tmp4(tmp3[23]).TableRow, obj9);
  }
  const obj16 = { style: tmp.trailingContainer, children: null };
  const tmp14 = channelId(flag[19]);
  const tmp19 = null != muteDeafenIconState || null != videoIconState;
  if (tmp18) {
    const obj17 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          const items = [user.id];
          return CallActionCreatorsDefault.ring(channelId, items, "voice_panel_floating_cta");
        },
      text: null
    };
    let intl = tmp4(tmp3[22]).intl;
    obj17.text = intl.string(tmp4(tmp3[22]).t.bHa9kN);
    let tmp20Result3 = tmp20(tmp4(tmp3[24]).Button, obj17);
  } else {
    tmp20Result3 = null;
    if (tmp19) {
      const obj18 = { muteDeafenIconState, videoIconState };
      tmp20Result3 = tmp20(VoiceBadges, obj18);
    }
  }
  const items4 = [tmp20Result3, ];
  let tmp20Result4 = null;
  if (null != gameRecord) {
    const obj19 = { game: gameRecord, size: 24, fallback: "placeholder" };
    tmp20Result4 = tmp20(tmp2(tmp3[26]), obj19);
  }
  items4[1] = tmp20Result4;
  obj16.children = items4;
  const tmp2Result2 = channelId(flag[5]);
  tmp23Result = closure_6(channelId(flag[5]), obj16);
};