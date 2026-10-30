// discord_app/modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import _modDef2931 from "../intl/DisplayNameStyles.messages.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useAvatarDecoration from "../../collectibles/avatar_decorations/useAvatarDecoration.tsx";
import usePendingAvatarSettingsDefault from "../../user_profile/hooks/usePendingAvatarSettings.tsx";
import RecentAvatarUtils from "../../recent_avatars/RecentAvatarUtils.tsx";
import profile_customization_ProfileCustomizationUtils from "../../profile_customization/native/ProfileCustomizationUtils.tsx";
import UsernameWithEffectsDefault from "UsernameWithEffects.tsx";
import types from "../types.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import UserProfileSettingsStore from "../../user_profile/UserProfileSettingsStore.tsx";

require = fn;
function ChatPreview(chatMessage) {
  ({ user, guildId, avatarSrcOverride, isTryItOut } = chatMessage);
  ({ displayName, displayNameStyles } = chatMessage);
  if (isTryItOut === undefined) {
    isTryItOut = false;
  }
  chatMessage = chatMessage.chatMessage;
  const tmp = closure_9();
  const avatarDecoration = useAvatarDecoration.useAvatarDecoration(user, guildId);
  const pendingAvatarDecoration = usePendingAvatarSettingsDefault({ guildId, isTryItOut }).pendingAvatarDecoration;
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let tmp8 = avatarDecoration;
  const memo = noop.useMemo(() => {
    const obj = DateUtils;
    return obj.calendarFormat(new Date(), true);
  }, []);
  if (undefined !== pendingAvatarDecoration) {
    tmp8 = pendingAvatarDecoration;
  }
  const obj3 = { style: tmp.chatContainer, pointerEvents: "none", children: null };
  if (undefined !== avatarSrcOverride) {
    const obj4 = { source: null, size: null, avatarDecoration: null };
    const tmp2Result = profile_customization_ProfileCustomizationUtils;
    obj4.source = tmp2Result.getAvatarSource(user, guildId, avatarSrcOverride, stateFromStores);
    obj4.size = native.AvatarSizes.NORMAL;
    obj4.avatarDecoration = tmp8;
    let obj5 = obj4;
  } else {
    obj5 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp8, animate: !stateFromStores };
  }
  const items1 = [React5(native.Avatar, obj5)];
  const obj6 = { style: tmp.chatContent, children: null };
  const obj7 = { style: tmp.chatHeader, children: null };
  const obj8 = {
    userId: user.id,
    guildId,
    userName: displayName,
    variant: "text-md/semibold",
    effectDisplayType: null,
    lineClamp: 1,
    pendingDisplayNameStyles: null,
    style: null,
  };
  obj8.effectDisplayType = types.EffectDisplayType.PLAIN;
  obj8.pendingDisplayNameStyles = displayNameStyles;
  obj8.style = tmp.chatUsername;
  const items2 = [
    React5(UsernameWithEffectsDefault, obj8),
    React5(Text_Text.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      style: tmp.chatTimestamp,
      children: memo,
    }),
  ];
  obj7.children = items2;
  const items3 = [React6(View, obj7)];
  const obj10 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
  if (chatMessage == null) {
    const intl = util.intl;
    chatMessage = intl.string(_modDef2931.h5Cuej);
  }
  obj10.children = chatMessage;
  items3[1] = React5(Text_Text.Text, obj10);
  obj6.children = items3;
  items1[1] = React6(View, obj6);
  obj3.children = items1;
  return React6(View, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(5009);
let obj2 = {
  previewSection: {
    marginBottom: nativeDefault.space.PX_24,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: 360,
  },
  previewSectionTilted: { marginBottom: 0 },
  profilePreviewTilted: null,
  chatPreviewWrapper: null,
  chatPreviewWrapperTilted: null,
  nameplatePreviewWrapper: null,
  chatContainer: null,
  chatContent: null,
  chatHeader: null,
  chatUsername: null,
  chatTimestamp: null,
  chatMessageText: null,
};
let obj4 = { transform: null };
let items = [{ rotate: "-2.63deg" }];
obj4.transform = items;
obj2.profilePreviewTilted = obj4;
let obj3 = {
  marginBottom: nativeDefault.space.PX_24,
  alignItems: "center",
  alignSelf: "center",
  width: "100%",
  maxWidth: 360,
};
obj2.chatPreviewWrapper = {
  marginTop: -18,
  alignSelf: "flex-end",
  width: 260,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
let obj6 = { alignSelf: "flex-start", marginLeft: 88, transform: null };
let items1 = [{ rotate: "3.36deg" }];
obj6.transform = items1;
obj2.chatPreviewWrapperTilted = obj6;
obj2.nameplatePreviewWrapper = { marginTop: -6, width: 260 };
let obj5 = {
  marginTop: -18,
  alignSelf: "flex-end",
  width: 260,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
};
obj2.chatContainer = {
  flexDirection: "row",
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  gap: nativeDefault.space.PX_12,
};
obj2.chatContent = { flex: 1 };
obj2.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
obj2.chatUsername = { flexShrink: 1, minWidth: 0 };
obj2.chatTimestamp = { marginTop: -8, flexShrink: 0 };
obj2.chatMessageText = {};
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(5009);
let closure_10 = createStyles.createStyles((scale) => {
  const obj = { appIconTilted: null };
  const rect = {
    position: "absolute",
    top: 64,
    right: 0,
    borderRadius: nativeDefault.radii.xl,
    borderCurve: "continuous",
    borderWidth: 0,
    transform: null,
  };
  const items = [{ rotate: "15deg" }, { scale }];
  rect.transform = items;
  obj.appIconTilted = rect;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(chatMessage) {
  const user = chatMessage.user;
  ({ displayName, guildId } = chatMessage);
  const selectedFontId = chatMessage.selectedFontId;
  const selectedEffectId = chatMessage.selectedEffectId;
  const selectedColors = chatMessage.selectedColors;
  let flag = chatMessage.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  ({ appIconId, appIconScale } = chatMessage);
  if (appIconScale === undefined) {
    appIconScale = 1;
  }
  let flag2 = chatMessage.hideNameplate;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = chatMessage.hideBadges;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = chatMessage.hidePronouns;
  if (flag4 === undefined) {
    flag4 = false;
  }
  let flag5 = chatMessage.hideGuildTag;
  if (flag5 === undefined) {
    flag5 = false;
  }
  let flag6 = chatMessage.tilted;
  if (flag6 === undefined) {
    flag6 = false;
  }
  const tmp = closure_9();
  const tmp2 = closure_10(appIconScale);
  const guildMemberAndUserPendingNameplate = user(selectedFontId[7]).useGuildMemberAndUserPendingNameplate(
    user,
    guildId,
  );
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  const obj = user(selectedFontId[7]);
  let nameplateData = user(selectedFontId[8]).getNameplateData(guildNameplate);
  const obj2 = user(selectedFontId[8]);
  const items = [UserProfileSettingsStore];
  const stateFromStores = user(selectedFontId[9]).useStateFromStores(items, () => {
    if (flag) {
      let pendingAvatar = UserProfileSettingsStore.getTryItOutChanges().tryItOutAvatar;
    } else {
      pendingAvatar = UserProfileSettingsStore.getPendingChanges(guildId).pendingAvatar;
    }
    return RecentAvatarUtils.getPendingAvatarSrc({ userId: user.id, image: pendingAvatar });
  });
  const items1 = [selectedFontId, selectedEffectId, selectedColors];
  const memo = selectedEffectId.useMemo(
    () => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }),
    items1,
  );
  const items2 = [tmp.previewSection];
  let previewSectionTilted = flag6;
  if (flag6) {
    previewSectionTilted = tmp.previewSectionTilted;
  }
  const obj4 = { style: items2, children: null };
  items2[1] = previewSectionTilted;
  const obj5 = {
    user,
    displayName,
    guildId,
    displayNameStylesOverride: memo,
    isPremiumTryItOut: flag,
    compact: true,
    hideFrame: true,
    hideBadges: flag3,
    hidePronouns: flag4,
    hideGuildTag: flag5,
    maxWidth: 320,
    style: null,
    accessibilityLabel: null,
  };
  let profilePreviewTilted;
  const obj3 = user(selectedFontId[9]);
  if (flag6) {
    profilePreviewTilted = tmp.profilePreviewTilted;
  }
  obj5.style = profilePreviewTilted;
  const intl = tmp3(tmp4[12]).intl;
  obj5.accessibilityLabel = intl.string(guildId(selectedFontId[13]).zoh6MT);
  const items3 = [closure_7(guildId(selectedFontId[11]), obj5), , ,];
  const items4 = [tmp.chatPreviewWrapper];
  if (flag6) {
    flag6 = tmp.chatPreviewWrapperTilted;
  }
  const tmp13 = guildId(selectedFontId[11]);
  items4[1] = flag6;
  items3[1] = closure_7(selectedColors, {
    style: items4,
    children: closure_7(ChatPreview, {
      user,
      displayName,
      displayNameStyles: memo,
      guildId,
      avatarSrcOverride: stateFromStores,
      isTryItOut: flag,
      chatMessage: chatMessage.chatMessage,
    }),
  });
  let tmp11Result = !flag2;
  if (!flag2) {
    const obj7 = { style: tmp.nameplatePreviewWrapper, children: null };
    const obj8 = {
      user,
      nameplate: pendingNameplate,
      nameplateData: null,
      guildId: null,
      pendingAvatarSrc: null,
      pendingDisplayNameStyles: null,
      pendingGlobalName: null,
    };
    let tmp17;
    if (null == pendingNameplate) {
      if (nameplateData == null) {
        nameplateData = userNameplate;
      }
      tmp17 = nameplateData;
    }
    obj8.nameplateData = tmp17;
    obj8.guildId = guildId;
    obj8.pendingAvatarSrc = stateFromStores;
    obj8.pendingDisplayNameStyles = memo;
    obj8.pendingGlobalName = displayName;
    obj7.children = closure_7(tmp3(tmp4[14]).NameplatePreview, obj8);
    tmp11Result = closure_7(tmp10, obj7);
  }
  items3[2] = tmp11Result;
  let tmp11Result2 = null != appIconId;
  if (tmp11Result2) {
    const obj9 = { id: appIconId, size: 102, style: tmp2.appIconTilted };
    tmp11Result2 = closure_7(guildId(tmp4[15]), obj9);
  }
  items3[3] = tmp11Result2;
  obj4.children = items3;
  return closure_8(selectedColors, obj4);
}
