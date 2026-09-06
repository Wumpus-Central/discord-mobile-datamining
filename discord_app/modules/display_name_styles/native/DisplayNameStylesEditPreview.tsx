// === Module 15353: DisplayNameStylesEditPreview ===

// Module 15353 (DisplayNameStylesEditPreview)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import utils from "utils" /* 1886 */;
import _modDef2786 from "module_2786" /* 2786 */;
import DateUtils from "DateUtils" /* 4242 */;
import Text_Text from "Text/Text" /* 4556 */;
import ProfileCustomizationUtils from "ProfileCustomizationUtils" /* 8166 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10899 */;
import types from "types" /* 10900 */;
import UserProfilePreviewDefault from "UserProfilePreview" /* 11109 */;
import NameplatePreview from "NameplatePreview" /* 11220 */;
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
  obj = { user, size: native.AvatarSizes.NORMAL, guildId };
  const items = [hasOwnProperty(native.Avatar, obj), ];
  obj = { style: tmp.chatContent, children: null };
  const obj1 = { style: tmp.chatHeader, children: null };
  const obj2 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: types.EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles, style: tmp.chatUsername };
  const items1 = [hasOwnProperty(UsernameWithEffectsDefault, obj2), hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo })];
  obj1.children = items1;
  const items2 = [timestampProducer(View, obj1), ];
  const obj4 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
  const intl = util.intl;
  obj4.children = intl.string(_modDef2786.h5Cuej);
  items2[1] = hasOwnProperty(Text_Text.Text, obj4);
  obj.children = items2;
  items[1] = timestampProducer(View, obj);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { previewSection: null, chatPreviewWrapper: null, nameplatePreviewWrapper: null, chatContainer: null, chatContent: null, chatHeader: null, chatUsername: null, chatTimestamp: null, chatMessageText: null };
createStyles = { marginBottom: nativeDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
createStyles.previewSection = createStyles;
createStyles.chatPreviewWrapper = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.nameplatePreviewWrapper = { marginTop: -6, width: 260 };
let obj1 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.chatContainer = { flexDirection: "row", borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, gap: nativeDefault.space.PX_12 };
createStyles.chatContent = { flex: 1 };
createStyles.chatHeader = { flexDirection: "row", alignItems: "baseline", gap: 6 };
createStyles.chatUsername = { flexShrink: 1, minWidth: 0 };
createStyles.chatTimestamp = { marginTop: -8, flexShrink: 0 };
createStyles.chatMessageText = {};
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(selectedEffectId) {
  ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
  selectedEffectId = selectedEffectId.selectedEffectId;
  const selectedColors = selectedEffectId.selectedColors;
  const tmp = closure_7();
  let obj = ProfileCustomizationUtils;
  const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  let obj1 = utils;
  let nameplateData = obj1.getNameplateData(guildNameplate);
  const items = [selectedFontId, selectedEffectId, selectedColors];
  const memo = noop.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items);
  obj = { style: tmp.previewSection, children: null };
  obj = { user, displayName, guildId, displayNameStylesOverride: memo, compact: true, hideFrame: true, maxWidth: 320, accessibilityLabel: null };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(_modDef2786.zoh6MT);
  const items1 = [hasOwnProperty(UserProfilePreviewDefault, obj), , ];
  obj1 = { style: tmp.chatPreviewWrapper, children: hasOwnProperty(ChatPreview, { user, displayName, displayNameStyles: memo, guildId }) };
  items1[1] = hasOwnProperty(View, obj1);
  const obj2 = { style: tmp.nameplatePreviewWrapper, children: null };
  const obj3 = { user, nameplate: pendingNameplate, nameplateData: null, guildId: null, pendingDisplayNameStyles: null, pendingGlobalName: null };
  let tmp9;
  if (null == pendingNameplate) {
    if (nameplateData == null) {
      nameplateData = userNameplate;
    }
    tmp9 = nameplateData;
  }
  obj3.nameplateData = tmp9;
  obj3.guildId = guildId;
  obj3.pendingDisplayNameStyles = memo;
  obj3.pendingGlobalName = displayName;
  obj2.children = hasOwnProperty(NameplatePreview.NameplatePreview, obj3);
  items1[2] = hasOwnProperty(View, obj2);
  obj.children = items1;
  return timestampProducer(View, obj);
};