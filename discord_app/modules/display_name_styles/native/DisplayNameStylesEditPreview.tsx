// discord_app/modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import utils from "../../collectibles/nameplates/utils.tsx";
import _modDef2870 from "../intl/DisplayNameStyles.messages.js";
import DateUtils from "../../../utils/DateUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import usePendingAvatarSettingsDefault from "../../user_profile/hooks/usePendingAvatarSettings.tsx";
import ProfileCustomizationUtils from "../../profile_customization/ProfileCustomizationUtils.tsx";
import useAvatarDecoration from "../../collectibles/avatar_decorations/useAvatarDecoration.tsx";
import UsernameWithEffectsDefault from "UsernameWithEffects.tsx";
import types from "../types.tsx";
import UserProfilePreviewDefault from "../../user_profile/native/UserProfilePreview.tsx";
import NameplatePreview from "../../collectibles/nameplates/native/NameplatePreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

require = fn;
function ChatPreview(arg0) {
  ({ user, guildId } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  const tmp = closure_8();
  const avatarDecoration = useAvatarDecoration.useAvatarDecoration(user, guildId);
  const pendingAvatarDecoration = usePendingAvatarSettingsDefault({ guildId }).pendingAvatarDecoration;
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
  const items1 = [
    timestampProducer(native.Avatar, {
      user,
      size: native.AvatarSizes.NORMAL,
      guildId,
      avatarDecoration: tmp8,
      animate: !stateFromStores,
    }),
  ];
  const obj5 = { style: tmp.chatContent, children: null };
  const obj6 = { style: tmp.chatHeader, children: null };
  const obj7 = {
    userId: user.id,
    guildId,
    userName: displayName,
    variant: "text-md/semibold",
    effectDisplayType: null,
    lineClamp: 1,
    pendingDisplayNameStyles: null,
    style: null,
  };
  const obj4 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp8, animate: !stateFromStores };
  obj7.effectDisplayType = types.EffectDisplayType.PLAIN;
  obj7.pendingDisplayNameStyles = displayNameStyles;
  obj7.style = tmp.chatUsername;
  const items2 = [
    timestampProducer(UsernameWithEffectsDefault, obj7),
    timestampProducer(Text_Text.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      style: tmp.chatTimestamp,
      children: memo,
    }),
  ];
  obj6.children = items2;
  const items3 = [React5(View, obj6)];
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
  const intl = util.intl;
  obj9.children = intl.string(_modDef2870.h5Cuej);
  items3[1] = timestampProducer(Text_Text.Text, obj9);
  obj5.children = items3;
  items1[1] = React5(View, obj5);
  obj3.children = items1;
  return React5(View, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  previewSection: {
    marginBottom: nativeDefault.space.PX_24,
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: 360,
  },
  chatPreviewWrapper: null,
  nameplatePreviewWrapper: null,
  chatContainer: null,
  chatContent: null,
  chatHeader: null,
  chatUsername: null,
  chatTimestamp: null,
  chatMessageText: null,
};
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
obj2.nameplatePreviewWrapper = { marginTop: -6, width: 260 };
let obj4 = {
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
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(selectedEffectId) {
  ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
  selectedEffectId = selectedEffectId.selectedEffectId;
  const selectedColors = selectedEffectId.selectedColors;
  const tmp = closure_8();
  const guildMemberAndUserPendingNameplate = ProfileCustomizationUtils.useGuildMemberAndUserPendingNameplate(
    user,
    guildId,
  );
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  let nameplateData = utils.getNameplateData(guildNameplate);
  const items = [selectedFontId, selectedEffectId, selectedColors];
  const memo = noop.useMemo(
    () => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }),
    items,
  );
  const obj3 = { style: tmp.previewSection, children: null };
  const obj4 = {
    user,
    displayName,
    guildId,
    displayNameStylesOverride: memo,
    compact: true,
    hideFrame: true,
    maxWidth: 320,
    accessibilityLabel: null,
  };
  const intl = util.intl;
  obj4.accessibilityLabel = intl.string(_modDef2870.zoh6MT);
  const items1 = [timestampProducer(UserProfilePreviewDefault, obj4), ,];
  items1[1] = timestampProducer(View, {
    style: tmp.chatPreviewWrapper,
    children: timestampProducer(ChatPreview, { user, displayName, displayNameStyles: memo, guildId }),
  });
  const obj6 = { style: tmp.nameplatePreviewWrapper, children: null };
  const obj7 = {
    user,
    nameplate: pendingNameplate,
    nameplateData: null,
    guildId: null,
    pendingDisplayNameStyles: null,
    pendingGlobalName: null,
  };
  let tmp9;
  if (null == pendingNameplate) {
    if (nameplateData == null) {
      nameplateData = userNameplate;
    }
    tmp9 = nameplateData;
  }
  obj7.nameplateData = tmp9;
  obj7.guildId = guildId;
  obj7.pendingDisplayNameStyles = memo;
  obj7.pendingGlobalName = displayName;
  obj6.children = timestampProducer(NameplatePreview.NameplatePreview, obj7);
  items1[2] = timestampProducer(View, obj6);
  obj3.children = items1;
  return React5(View, obj3);
}
