// discord_app/modules/voice_panel/native/shared/FormComponents.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../../design/void/native.tsx";
import TableRowGroupTitle from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import obj132Default from "../../../core/native/NativeView.tsx";
import VideoDisabledSvgIcon from "VoiceStateIcons.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import sortActivity from "../../../../stores/PresenceStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function VoiceBadges(arg0) {
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = callback2();
  let obj = { style: tmp.voiceBadgesContainer, children: null };
  let tmp6 = null;
  if (null != muteDeafenIconState) {
    obj = { style: null, children: null };
    obj[0] = tmp.iconWrapper;
    let tmp3Result = obj132Default;
    obj = { state: null, size: null, style: null };
    obj[0] = muteDeafenIconState;
    obj[1] = Button.IconSizes.SMALL;
    obj[2] = tmp.icon;
    obj[1] = callback(VideoDisabledSvgIcon.MuteDeafenIcon, obj);
    tmp6 = callback(tmp3Result, obj);
  }
  const items = [tmp6, ];
  let tmp10 = null;
  if (null != videoIconState) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.iconWrapper;
    tmp3Result = obj132Default;
    const obj2 = { state: null, size: null, style: null };
    obj2[0] = videoIconState;
    obj2[1] = Button.IconSizes.SMALL;
    obj2[2] = tmp.icon;
    obj1[1] = callback(VideoDisabledSvgIcon.VideoIcon, obj2);
    tmp10 = callback(tmp3Result, obj1);
  }
  items[1] = tmp10;
  obj[1] = items;
  return callback(obj132Default, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { marginLeft: 8, padding: 6, backgroundColor: ThemesDefault.colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: ThemesDefault.radii.round };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { width: 16, height: 16, tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[4] = { opacity: 0.5 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", gap: 4 };
createCacheKey[6] = { flexDirection: "row", alignItems: "center", gap: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
  const merged = Object.assign(style, Object.create(null));
  const items = [callback2().container, style.style];
  const tmp2 = callback2();
  const obj = {};
  const merged1 = Object.assign(merged);
  obj[1] = callback(TableRowGroupTitle.TableRowGroup, obj);
  return callback(obj132Default, obj);
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
  const tmp = callback2();
  const analyticsLocations = channelId(flag[9])().analyticsLocations;
  let obj = user(flag[10]);
  const muteDeafenIconState = obj.useMuteDeafenIconState(user.id, guildId);
  obj1 = user(flag[10]);
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
    channelId(flag[15])({ userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  let obj7 = user(flag[16]);
  const items1 = [id];
  const stateFromStores = obj7.useStateFromStores(items1, () => user(flag[17]).getStreamerActivityByUserId(id, id));
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
        const intl = user(flag[22]).intl;
        intl.string(user(flag[22]).t.eXan7B);
      }
      const intl2 = user(flag[22]).intl;
      if (null == obj.details) {
        obj = { name: null };
        obj[0] = obj.name;
        obj[3] = intl2.format(tmp12, obj);
        stateFromStores(user(flag[21]).Text, obj);
      }
      const details = obj.details;
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
  obj1[3] = notConnectedAvatar;
  obj[1] = stateFromStores(user(flag[8]).Avatar, obj1);
  obj[2] = memo;
  if (!tmp18) {
    obj[3] = tmp23Result;
    if (nick == null) {
      nick = tmp4(tmp3[27]).getName(user);
      const tmp4Result = tmp4(tmp3[27]);
    }
    obj2 = { style: null, children: null };
    obj2[0] = tmp.memberRow;
    let tmp2Result = tmp2(tmp3[5]);
    let str = "text-default";
    if (notConnected) {
      str = "text-muted";
    }
    obj3 = { variant: "text-md/semibold", color: null, style: null, children: null };
    obj3[1] = str;
    let tmp30 = null != displayNameStylesFont;
    if (tmp30) {
      const obj4 = { fontFamily: null };
      obj4[0] = displayNameStylesFont;
      tmp30 = obj4;
    }
    obj3[2] = tmp30;
    obj3[3] = nick;
    const items3 = [tmp20(tmp4(tmp3[21]).Text, obj3), , ];
    obj5 = { userId: null };
    obj5[0] = user.id;
    items3[1] = tmp20(tmp2(tmp3[28]), obj5);
    let tmp20Result = null;
    if (showSecureFramesUI) {
      tmp20Result = null;
      if (isUserSecureFramesVerified) {
        obj6 = { size: "xs", style: null };
        obj6[1] = tmp.icon;
        tmp20Result = tmp20(tmp4(tmp3[29]).ShieldLockIcon, obj6);
      }
    }
    items3[2] = tmp20Result;
    obj2[1] = items3;
    obj[4] = callback(tmp2Result, obj2);
    return tmp20(tmp4(tmp3[23]).TableRow, obj);
  }
  obj7 = { style: tmp.trailingContainer, children: null };
  tmp2Result = tmp2(tmp3[5]);
  if (tmp18) {
    const obj8 = { size: "sm", variant: "secondary", onPress: null, text: null };
    obj8[2] = function onPress() {
      const items = [user.id];
      return channelId(flag[25]).ring(channelId, items, "voice_panel_floating_cta");
    };
    let intl = tmp4(tmp3[22]).intl;
    obj8[3] = intl.string(tmp4(tmp3[22]).t.bHa9kN);
    tmp20Result = tmp20(tmp4(tmp3[24]).Button, obj8);
  } else {
    tmp20Result = null;
    if (tmp19) {
      const obj9 = { muteDeafenIconState: null, videoIconState: null };
      obj9[0] = muteDeafenIconState;
      obj9[1] = videoIconState;
      tmp20Result = tmp20(VoiceBadges, obj9);
    }
  }
  const items4 = [tmp20Result, ];
  let tmp20Result1 = null;
  if (null != gameRecord) {
    const obj10 = { game: null, size: 24, fallback: "placeholder" };
    obj10[0] = gameRecord;
    tmp20Result1 = tmp20(tmp2(tmp3[26]), obj10);
  }
  items4[1] = tmp20Result1;
  obj7[1] = items4;
  const tmp14 = channelId(flag[19]);
  tmp19 = null != muteDeafenIconState || null != videoIconState;
  tmp23Result = callback(tmp2Result, obj7);
};