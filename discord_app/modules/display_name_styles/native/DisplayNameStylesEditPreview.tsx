// === Module 15638: DisplayNameStylesEditPreview ===

// Module 15638 (DisplayNameStylesEditPreview)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import utils from "utils" /* 1970 */;
import _modDef2872 from "module_2872" /* 2872 */;
import DateUtils from "DateUtils" /* 4439 */;
import Text_Text from "Text/Text" /* 4753 */;
import usePendingAvatarSettingsDefault from "usePendingAvatarSettings" /* 8432 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8439 */;
import useAvatarDecoration from "useAvatarDecoration" /* 8489 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 11166 */;
import types from "types" /* 11167 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 11381 */;
import NameplatePreview from "NameplatePreview" /* 11490 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4749 */;

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
  const items1 = [timestampProducer(native.Avatar, { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp8, animate: !stateFromStores }), ];
  const obj5 = { style: tmp.chatContent, children: null };
  const obj6 = { style: tmp.chatHeader, children: null };
  const obj7 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: null, lineClamp: 1, pendingDisplayNameStyles: null, style: null };
  const obj4 = { user, size: native.AvatarSizes.NORMAL, guildId, avatarDecoration: tmp8, animate: !stateFromStores };
  obj7.effectDisplayType = types.EffectDisplayType.PLAIN;
  obj7.pendingDisplayNameStyles = displayNameStyles;
  obj7.style = tmp.chatUsername;
  const items2 = [timestampProducer(UsernameWithEffectsDefault, obj7), timestampProducer(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo })];
  obj6.children = items2;
  const items3 = [React5(View, obj6), ];
  const obj9 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
  const intl = util.intl;
  obj9.children = intl.string(_modDef2872.h5Cuej);
  items3[1] = timestampProducer(Text_Text.Text, obj9);
  obj5.children = items3;
  items1[1] = React5(View, obj5);
  obj3.children = items1;
  return React5(View, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4757);
let obj2 = { previewSection: { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 }, chatPreviewWrapper: null, nameplatePreviewWrapper: null, chatContainer: null, chatContent: null, chatHeader: null, chatUsername: null, chatTimestamp: null, chatMessageText: null };
let obj3 = { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
obj2.chatPreviewWrapper = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.nameplatePreviewWrapper = { marginTop: -6, width: 260 };
let obj4 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.chatContainer = { flexDirection: "row", borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_12 };
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
  const guildMemberAndUserPendingNameplate = ProfileCustomizationUtils.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  let nameplateData = utils.getNameplateData(guildNameplate);
  const items = [selectedFontId, selectedEffectId, selectedColors];
  const memo = noop.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items);
  const obj3 = { style: tmp.previewSection, children: null };
  const obj4 = { user, displayName, guildId, displayNameStylesOverride: memo, compact: true, hideFrame: true, maxWidth: 320, accessibilityLabel: null };
  const intl = util.intl;
  obj4.accessibilityLabel = intl.string(_modDef2872.zoh6MT);
  const items1 = [timestampProducer(UserProfilePreviewDefault, obj4), , ];
  items1[1] = timestampProducer(View, { style: tmp.chatPreviewWrapper, children: timestampProducer(ChatPreview, { user, displayName, displayNameStyles: memo, guildId }) });
  const obj6 = { style: tmp.nameplatePreviewWrapper, children: null };
  const obj7 = { user, nameplate: pendingNameplate, nameplateData: null, guildId: null, pendingDisplayNameStyles: null, pendingGlobalName: null };
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
};