// === Module 15465: DisplayNameStylesEditPreview ===

// Module 15465 (DisplayNameStylesEditPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import utils from "utils" /* 1887 */;
import _modDef2787 from "module_2787" /* 2787 */;
import DateUtils from "DateUtils" /* 4319 */;
import Text_Text from "Text/Text" /* 4634 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8295 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 11045 */;
import types from "types" /* 11046 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 11262 */;
import NameplatePreview from "NameplatePreview" /* 11366 */;
import noop from "module_19" /* 19 */;

require = fn;
function ChatPreview(arg0) {
  ({ user, guildId } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  const tmp = closure_7();
  let obj = { style: tmp.chatContainer, pointerEvents: "none", children: null };
  const memo = noop.useMemo(() => {
    const obj = DateUtils;
    return obj.calendarFormat(new Date(), true);
  }, []);
  const items = [hasOwnProperty(native.Avatar, { user, size: native.AvatarSizes.NORMAL, guildId }), ];
  const obj3 = { style: tmp.chatContent, children: null };
  const obj4 = { style: tmp.chatHeader, children: null };
  const obj5 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: null, lineClamp: 1, pendingDisplayNameStyles: null, style: null };
  const obj2 = { user, size: native.AvatarSizes.NORMAL, guildId };
  obj5.effectDisplayType = types.EffectDisplayType.PLAIN;
  obj5.pendingDisplayNameStyles = displayNameStyles;
  obj5.style = tmp.chatUsername;
  const items1 = [hasOwnProperty(UsernameWithEffectsDefault, obj5), hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo })];
  obj4.children = items1;
  const items2 = [timestampProducer(View, obj4), ];
  const obj7 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
  const intl = util.intl;
  obj7.children = intl.string(_modDef2787.h5Cuej);
  items2[1] = hasOwnProperty(Text_Text.Text, obj7);
  obj3.children = items2;
  items[1] = timestampProducer(View, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
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
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(selectedEffectId) {
  ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
  selectedEffectId = selectedEffectId.selectedEffectId;
  const selectedColors = selectedEffectId.selectedColors;
  const tmp = closure_7();
  const guildMemberAndUserPendingNameplate = ProfileCustomizationUtils.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  let nameplateData = utils.getNameplateData(guildNameplate);
  const items = [selectedFontId, selectedEffectId, selectedColors];
  const memo = noop.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items);
  const obj3 = { style: tmp.previewSection, children: null };
  const obj4 = { user, displayName, guildId, displayNameStylesOverride: memo, compact: true, hideFrame: true, maxWidth: 320, accessibilityLabel: null };
  const intl = util.intl;
  obj4.accessibilityLabel = intl.string(_modDef2787.zoh6MT);
  const items1 = [hasOwnProperty(UserProfilePreviewDefault, obj4), , ];
  items1[1] = hasOwnProperty(View, { style: tmp.chatPreviewWrapper, children: hasOwnProperty(ChatPreview, { user, displayName, displayNameStyles: memo, guildId }) });
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
  obj6.children = hasOwnProperty(NameplatePreview.NameplatePreview, obj7);
  items1[2] = hasOwnProperty(View, obj6);
  obj3.children = items1;
  return timestampProducer(View, obj3);
};