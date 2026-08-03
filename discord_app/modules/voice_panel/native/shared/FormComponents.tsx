// === Module 9046: VoiceBadges ===

// Module 9046 (VoiceBadges)
import getSystemLocale from "getSystemLocale";
import sortActivity from "sortActivity";
import jsxProd from "Button";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function VoiceBadges(arg0) {
  let muteDeafenIconState;
  let videoIconState;
  ({ muteDeafenIconState, videoIconState } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.voiceBadgesContainer, children: null };
  let tmp6 = null;
  if (null != muteDeafenIconState) {
    obj = { style: null, children: null };
    obj[0] = tmp.iconWrapper;
    let tmp3Result = tmp3(5634);
    obj = { state: null, size: null, style: null };
    obj[0] = muteDeafenIconState;
    obj[1] = require(1297) /* Button */.IconSizes.SMALL;
    obj[2] = tmp.icon;
    obj[1] = callback(require(9047) /* VideoDisabledSvgIcon */.MuteDeafenIcon, obj);
    tmp6 = callback(tmp3Result, obj);
  }
  const items = [tmp6, ];
  let tmp10 = null;
  if (null != videoIconState) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.iconWrapper;
    tmp3Result = tmp3(5634);
    const obj2 = { state: null, size: null, style: null };
    obj2[0] = videoIconState;
    obj2[1] = require(1297) /* Button */.IconSizes.SMALL;
    obj2[2] = tmp.icon;
    obj1[1] = callback(require(9047) /* VideoDisabledSvgIcon */.VideoIcon, obj2);
    tmp10 = callback(tmp3Result, obj1);
  }
  items[1] = tmp10;
  obj[1] = items;
  return closure_6(importDefault(5634), obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: { marginHorizontal: 16 }, voiceBadgesContainer: { flexDirection: "row" }, iconWrapper: null, icon: null, notConnectedAvatar: null, memberRow: null };
createCacheKey = { marginLeft: 8, padding: 6, backgroundColor: require("Themes").colors.MOBILE_VOICE_PANEL_BADGE_BACKGROUND, borderRadius: require("Themes").radii.round };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { width: 16, height: 16, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[4] = { opacity: 0.5 };
createCacheKey[5] = { flexDirection: "row", alignItems: "center", gap: 4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { width: 16, height: 16, tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/shared/FormComponents.tsx");

export const VoicePanelFormSection = function VoicePanelFormSection(style) {
  const merged = Object.assign(style, Object.create(null));
  let obj = { style: items, children: null };
  items = [createCacheKey().container, style.style];
  const tmp2 = createCacheKey();
  obj = {};
  const merged1 = Object.assign(merged);
  obj[1] = callback(require(5620) /* TableRowGroupTitle */.TableRowGroup, obj);
  return callback(importDefault(5634), obj);
};
export const MemberRowItem = function MemberRowItem(user) {
  let guildId;
  let nick;
  let notConnected;
  let showRing;
  let showSecureFramesUI;
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
  let analyticsLocations;
  let id;
  let stateFromStores;
  const tmp = createCacheKey();
  analyticsLocations = channelId(flag[9])().analyticsLocations;
  let obj = user(flag[10]);
  const muteDeafenIconState = obj.useMuteDeafenIconState(user.id, guildId);
  let obj1 = user(flag[10]);
  const videoIconState = obj1.useVideoIconState(user.id, guildId);
  id = user.id;
  let obj2 = user(flag[11]);
  const isUserSecureFramesVerified = obj2.useIsUserSecureFramesVerified({ userId: id, channelId });
  let obj3 = user(flag[12]);
  const canRing = obj3.useCanRing(user, "MemberRowItem");
  obj = { userId: user.id, guildId };
  let obj5 = user(flag[14]);
  const displayNameStylesFont = obj5.useDisplayNameStylesFont({ displayNameStyles: channelId(flag[13])(obj) });
  let items = [id, channelId, analyticsLocations];
  const callback = analyticsLocations.useCallback(() => {
    channelId(flag[15])({ userId: id, channelId, isVoiceContext: true, sourceAnalyticsLocations: analyticsLocations });
  }, items);
  let obj6 = user(flag[16]);
  const items1 = [id];
  stateFromStores = obj6.useStateFromStores(items1, () => user(flag[17]).getStreamerActivityByUserId(id, id));
  const items2 = [stateFromStores, flag];
  const memo = analyticsLocations.useMemo(() => {
    if (!flag) {
      return null;
    } else {
      let obj = stateFromStores;
      if (null == stateFromStores) {
        const intl = user(flag[19]).intl;
        intl.string(user(flag[19]).t.eXan7B);
      }
      const intl2 = user(flag[19]).intl;
      if (null == obj.details) {
        obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
        obj = { name: null };
        obj[0] = obj.name;
        obj[3] = intl2.format(tmp12, obj);
        tmp5(user(flag[18]).Text, obj);
      }
      const details = obj.details;
      tmp5 = stateFromStores;
    }
  }, items2);
  obj = { onPress: callback, icon: null, subLabel: null, trailing: null, label: null };
  obj1 = { user, guildId, size: null, style: null };
  obj1[2] = user(flag[8]).AvatarSizes.REFRESH_MEDIUM_32;
  let notConnectedAvatar;
  if (notConnected) {
    notConnectedAvatar = tmp.notConnectedAvatar;
  }
  obj1[3] = notConnectedAvatar;
  obj[1] = stateFromStores(user(flag[8]).Avatar, obj1);
  obj[2] = memo;
  if (showRing) {
    if (canRing) {
      obj2 = { size: "sm", variant: "secondary", onPress: null, text: null };
      obj2[2] = function onPress() {
        const items = [user.id];
        return channelId(flag[22]).ring(channelId, items, "voice_panel_floating_cta");
      };
      let intl = tmp4(tmp3[19]).intl;
      obj2[3] = intl.string(tmp4(tmp3[19]).t.bHa9kN);
      let tmp14Result = tmp14(tmp4(tmp3[21]).Button, obj2);
    }
    obj[3] = tmp14Result;
    if (nick == null) {
      nick = tmp4(tmp3[23]).getName(user);
      const tmp4Result = tmp4(tmp3[23]);
    }
    obj3 = { style: null, children: null };
    obj3[0] = tmp.memberRow;
    let str = "text-default";
    if (notConnected) {
      str = "text-muted";
    }
    const obj4 = { variant: "text-md/semibold", color: null, style: null, children: null };
    obj4[1] = str;
    let tmp21 = null != displayNameStylesFont;
    if (tmp21) {
      obj5 = { fontFamily: null };
      obj5[0] = displayNameStylesFont;
      tmp21 = obj5;
    }
    obj4[2] = tmp21;
    obj4[3] = nick;
    const items3 = [tmp14(tmp4(tmp3[18]).Text, obj4), , ];
    obj6 = { userId: null };
    obj6[0] = user.id;
    items3[1] = tmp14(tmp2(tmp3[24]), obj6);
    tmp14Result = null;
    if (showSecureFramesUI) {
      tmp14Result = null;
      if (isUserSecureFramesVerified) {
        const obj7 = { size: "xs", style: null };
        obj7[1] = tmp.icon;
        tmp14Result = tmp14(tmp4(tmp3[25]).ShieldLockIcon, obj7);
      }
    }
    items3[2] = tmp14Result;
    obj3[1] = items3;
    obj[4] = closure_6(tmp2(tmp3[5]), obj3);
    return tmp14(user(flag[20]).TableRow, obj);
  }
  if (null != muteDeafenIconState) {
    const obj8 = { muteDeafenIconState: null, videoIconState: null };
    obj8[0] = muteDeafenIconState;
    obj8[1] = videoIconState;
    tmp14Result = tmp14(VoiceBadges, obj8);
  }
};