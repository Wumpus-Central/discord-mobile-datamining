// === Module 15353: ChatPreview ===

// Module 15353 (ChatPreview)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 1178 */;
import messagesProxyDefault from "messagesProxy" /* 2786 */;
import Text from "Text" /* 4556 */;
import AVERAGE_FONT_WIDTH_RATIODefault from "AVERAGE_FONT_WIDTH_RATIO" /* 10899 */;
import DisplayNameStyleColorPreset from "DisplayNameStyleColorPreset" /* 10900 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function ChatPreview(arg0) {
  ({ user, guildId } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  const tmp = callback3();
  let obj = { style: tmp.chatContainer, pointerEvents: "none", children: null };
  const memo = React.useMemo(() => {
    const obj = callback(table[11]);
    return obj.calendarFormat(new Date(), true);
  }, []);
  obj = { user, size: Button.AvatarSizes.NORMAL, guildId };
  const items = [callback(Button.Avatar, obj), ];
  obj = { style: tmp.chatContent, children: null };
  obj1 = { style: tmp.chatHeader, children: null };
  const obj2 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: DisplayNameStyleColorPreset.EffectDisplayType.PLAIN, lineClamp: 1, pendingDisplayNameStyles: displayNameStyles, style: tmp.chatUsername };
  const items1 = [callback(AVERAGE_FONT_WIDTH_RATIODefault, obj2), callback(Text.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo })];
  obj1[1] = items1;
  const items2 = [callback2(View, obj1), ];
  const obj4 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
  const intl = getSystemLocale.intl;
  obj4[3] = intl.string(messagesProxyDefault.h5Cuej);
  items2[1] = callback(Text.Text, obj4);
  obj[1] = items2;
  items[1] = callback2(View, obj);
  obj[2] = items;
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { previewSection: null, chatPreviewWrapper: null, nameplatePreviewWrapper: null, chatContainer: null, chatContent: null, chatHeader: null, chatUsername: null, chatTimestamp: null, chatMessageText: null };
createCacheKey = { marginBottom: ThemesDefault.space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[2] = { marginTop: -6, width: 260 };
let obj1 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[3] = { flexDirection: "row", borderRadius: ThemesDefault.radii.sm, padding: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, gap: ThemesDefault.space.PX_12 };
createCacheKey[4] = { flex: 1 };
createCacheKey[5] = { flexDirection: "row", alignItems: "baseline", gap: 6 };
createCacheKey[6] = { flexShrink: 1, minWidth: 0 };
createCacheKey[7] = { marginTop: -8, flexShrink: 0 };
createCacheKey[8] = {};
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj2 = { flexDirection: "row", borderRadius: ThemesDefault.radii.sm, padding: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, gap: ThemesDefault.space.PX_12 };
const result = require("set").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(selectedEffectId) {
  ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
  selectedEffectId = selectedEffectId.selectedEffectId;
  const selectedColors = selectedEffectId.selectedColors;
  const tmp = callback3();
  let obj = selectedFontId(selectedColors[5]);
  const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  obj1 = selectedFontId(selectedColors[6]);
  let nameplateData = obj1.getNameplateData(guildNameplate);
  const items = [selectedFontId, selectedEffectId, selectedColors];
  const memo = React.useMemo(() => ({ fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors }), items);
  obj = { style: tmp.previewSection, children: null };
  obj = { user, displayName, guildId, displayNameStylesOverride: memo, compact: true, hideFrame: true, maxWidth: 320, accessibilityLabel: null };
  const intl = selectedFontId(selectedColors[8]).intl;
  obj[7] = intl.string(selectedEffectId(selectedColors[9]).zoh6MT);
  const items1 = [callback(selectedEffectId(selectedColors[7]), obj), , ];
  obj1 = { style: tmp.chatPreviewWrapper, children: callback(ChatPreview, { user, displayName, displayNameStyles: memo, guildId }) };
  items1[1] = callback(View, obj1);
  const obj2 = { style: tmp.nameplatePreviewWrapper, children: null };
  const obj3 = { user, nameplate: pendingNameplate, nameplateData: null, guildId: null, pendingDisplayNameStyles: null, pendingGlobalName: null };
  let tmp9;
  if (null == pendingNameplate) {
    if (nameplateData == null) {
      nameplateData = userNameplate;
    }
    tmp9 = nameplateData;
  }
  obj3[2] = tmp9;
  obj3[3] = guildId;
  obj3[4] = memo;
  obj3[5] = displayName;
  obj2[1] = callback(selectedFontId(selectedColors[10]).NameplatePreview, obj3);
  items1[2] = callback(View, obj2);
  obj[1] = items1;
  return closure_6(View, obj);
};