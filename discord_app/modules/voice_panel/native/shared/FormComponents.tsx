// === Module 9118: FormComponents ===

// Module 9118 (FormComponents)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4556 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import StreamerApplicationSelectors from "StreamerApplicationSelectors" /* 7738 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import VoiceStateIcons from "VoiceStateIcons" /* 9119 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9182 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4600 */;

require = fn;
function VoiceBadges(arg0) {
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = closure_7();
  let obj = { style: tmp.voiceBadgesContainer, children: null };
  let tmp6 = null;
  if (null != muteDeafenIconState) {
    obj = { style: tmp.iconWrapper, children: null };
    let tmp3Result = tmp3(5589);
    obj = { state: muteDeafenIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    obj.children = hasOwnProperty(VoiceStateIcons.MuteDeafenIcon, obj);
    tmp6 = hasOwnProperty(tmp3Result, obj);
  }
  const items = [tmp6, ];
  let tmp10 = null;
  if (null != videoIconState) {
    const obj1 = { style: tmp.iconWrapper, children: null };
    tmp3Result = tmp3(5589);
    const obj2 = { state: videoIconState, size: native.IconSizes.SMALL, style: tmp.icon };
    obj1.children = hasOwnProperty(VoiceStateIcons.VideoIcon, obj2);
    tmp10 = hasOwnProperty(tmp3Result, obj1);
  }
  items[1] = tmp10;
  obj.children = items;
  return timestampProducer(NativeViewDefault, obj);
}
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: { marginHorizontal: 16 }, voiceBadgesContainer: { flexDirection: "row" }, iconWrapper: null, icon: null, notConnectedAvatar: null, memberRow: null, trailingContainer: null };
createStyles = { marginLeft: 8, padding: 6, backgroundColor: nativeDefault.colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: nativeDefault.radii.round };
createStyles.iconWrapper = createStyles;
let size = { width: 16, height: 16, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.icon = size;
createStyles.notConnectedAvatar = { opacity: 0.5 };
createStyles.memberRow = { flexDirection: "row", alignItems: "center", gap: 4 };
createStyles.trailingContainer = { flexDirection: "row", alignItems: "center", gap: 8 };
let closure_7 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
  const merged = Object.assign(style, Object.assign({ style: 0 }));
  let obj = { style: null, children: null };
  const items = [closure_7().container, style.style];
  obj.style = items;
  const tmp2 = closure_7();
  obj = {};
  const merged1 = Object.assign(merged);
  obj.children = hasOwnProperty(TableRowGroup.TableRowGroup, obj);
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
  let obj = user(flag[10]);
  const muteDeafenIconState = obj.useMuteDeafenIconState(user.id, guildId);
  let obj1 = user(flag[10]);
  const videoIconState = obj1.useVideoIconState(user.id, guildId);
  const id = user.id;
  let obj2 = user(flag[11]);
  const isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified({ userId: id, channelId });
  let obj3 = user(flag[12]);
  const canRing = obj3.useCanRing(user, "MemberRowItem");
  obj = { userId: user.id, guildId };
  let obj5 = user(flag[14]);
  const displayNameStylesFont = obj5.useDisplayNameStylesFont({ displayNameStyles: channelId(flag[13])(obj) });
  let obj6 = analyticsLocations;
  let items = [id, channelId, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    showUserProfileActionSheetDefault({ userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  let obj7 = user(flag[16]);
  const items1 = [id];
  const stateFromStores = obj7.useStateFromStores(items1, () => StreamerApplicationSelectors.getStreamerActivityByUserId(id, PresenceStore));
  let tmp13 = channelId(flag[18])("voice_member_row");
  const tmp9 = channelId(flag[13])(obj);
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
  const memo = obj6.useMemo(() => {
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
        obj = { name: null };
        obj.name = obj.name;
        obj.children = intl2.format(tmp12, obj);
        tmp5(Text_Text.Text, obj);
      }
      const details = obj.details;
      tmp5 = hasOwnProperty;
    }
  }, items2);
  if (tmp18) {
    tmp18 = canRing;
  }
  obj = { onPress: callback, icon: null, subLabel: null, trailing: null, label: null };
  obj1 = { user, guildId, size: tmp4(tmp3[8]).AvatarSizes.REFRESH_MEDIUM_32, style: null };
  let notConnectedAvatar;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  obj1.style = notConnectedAvatar;
  obj.icon = stateFromStores(user(flag[8]).Avatar, obj1);
  obj.subLabel = memo;
  if (!tmp18) {
    obj.trailing = tmp23Result;
    if (nick == null) {
      nick = tmp4(tmp3[27]).getName(user);
      const tmp4Result = tmp4(tmp3[27]);
    }
    obj2 = { style: tmp.memberRow, children: null };
    let tmp2Result = tmp2(tmp3[5]);
    let str = "text-default";
    if (notConnected) {
      str = "text-muted";
    }
    obj3 = { variant: "text-md/semibold", color: str, style: null, children: null };
    let tmp30 = null != displayNameStylesFont;
    if (tmp30) {
      const obj4 = { fontFamily: displayNameStylesFont };
      tmp30 = obj4;
    }
    obj3.style = tmp30;
    obj3.children = nick;
    const items3 = [tmp20(tmp4(tmp3[21]).Text, obj3), , ];
    obj5 = { userId: user.id };
    items3[1] = tmp20(tmp2(tmp3[28]), obj5);
    let tmp20Result = null;
    if (showSecureFramesUI) {
      tmp20Result = null;
      if (isUserSecureFramesVerified) {
        obj6 = { size: "xs", style: tmp.icon };
        tmp20Result = tmp20(tmp4(tmp3[29]).ShieldLockIcon, obj6);
      }
    }
    items3[2] = tmp20Result;
    obj2.children = items3;
    obj.label = closure_6(tmp2Result, obj2);
    return tmp20(tmp4(tmp3[23]).TableRow, obj);
  }
  obj7 = { style: tmp.trailingContainer, children: null };
  tmp2Result = tmp2(tmp3[5]);
  if (tmp18) {
    const obj8 = {
      size: "sm",
      variant: "secondary",
      onPress() {
          const items = [user.id];
          return CallActionCreatorsDefault.ring(channelId, items, "voice_panel_floating_cta");
        },
      text: null
    };
    let intl = tmp4(tmp3[22]).intl;
    obj8.text = intl.string(tmp4(tmp3[22]).t.bHa9kN);
    tmp20Result = tmp20(tmp4(tmp3[24]).Button, obj8);
  } else {
    tmp20Result = null;
    if (tmp19) {
      const obj9 = { muteDeafenIconState, videoIconState };
      tmp20Result = tmp20(VoiceBadges, obj9);
    }
  }
  const items4 = [tmp20Result, ];
  let tmp20Result1 = null;
  if (null != gameRecord) {
    const obj10 = { game: gameRecord, size: 24, fallback: "placeholder" };
    tmp20Result1 = tmp20(tmp2(tmp3[26]), obj10);
  }
  items4[1] = tmp20Result1;
  obj7.children = items4;
  const tmp14 = channelId(flag[19]);
};