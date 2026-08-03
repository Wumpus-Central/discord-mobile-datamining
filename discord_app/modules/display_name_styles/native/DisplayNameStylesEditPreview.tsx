import noop from "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
function ChatPreview(arg0) {
  let displayName;
  let displayNameStyles;
  let guildId;
  let user;
  ({ user, guildId } = arg0);
  ({ displayName, displayNameStyles } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.chatContainer, pointerEvents: "none", children: null };
  const memo = React.useMemo(() => {
    const obj = callback(table[11]);
    return obj.calendarFormat(new Date(), true);
  }, []);
  obj = { user, size: null, guildId: null };
  obj[1] = require(1297) /* Button */.AvatarSizes.NORMAL;
  obj[2] = guildId;
  const items = [callback(require(1297) /* Button */.Avatar, obj), ];
  obj = { style: tmp.chatContent, children: null };
  const obj1 = { style: tmp.chatHeader, children: null };
  const obj2 = { userId: user.id, guildId, userName: displayName, variant: "text-md/semibold", effectDisplayType: null, lineClamp: 1, pendingDisplayNameStyles: null, style: null };
  obj2[4] = require(8391) /* DisplayNameStyleColorPreset */.EffectDisplayType.PLAIN;
  obj2[6] = displayNameStyles;
  obj2[7] = tmp.chatUsername;
  const items1 = [callback(importDefault(8390), obj2), callback(require(4189) /* Text */.Text, { variant: "text-xs/medium", color: "text-muted", style: tmp.chatTimestamp, children: memo })];
  obj1[1] = items1;
  const items2 = [callback2(View, obj1), ];
  const obj4 = { variant: "text-md/normal", color: "text-default", style: tmp.chatMessageText, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj4[3] = intl.string(importDefault(2583).h5Cuej);
  items2[1] = callback(require(4189) /* Text */.Text, obj4);
  obj[1] = items2;
  items[1] = callback2(View, obj);
  obj[2] = items;
  return callback2(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { previewSection: null, chatPreviewWrapper: null, nameplatePreviewWrapper: null, chatContainer: null, chatContent: null, chatHeader: null, chatUsername: null, chatTimestamp: null, chatMessageText: null };
createCacheKey = { marginBottom: require("Themes").space.PX_24, alignItems: "center", alignSelf: "center", width: "100%", maxWidth: 360 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[2] = { marginTop: -6, width: 260 };
let obj1 = { marginTop: -18, alignSelf: "flex-end", width: 260, borderRadius: require("Themes").radii.sm, borderWidth: 1, borderColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[3] = { flexDirection: "row", borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, gap: require("Themes").space.PX_12 };
createCacheKey[4] = { flex: 1 };
createCacheKey[5] = { flexDirection: "row", alignItems: "baseline", gap: 6 };
createCacheKey[6] = { flexShrink: 1, minWidth: 0 };
createCacheKey[7] = { marginTop: -8, flexShrink: 0 };
createCacheKey[8] = {};
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { flexDirection: "row", borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, gap: require("Themes").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEditPreview.tsx");

export default function DisplayNameStylesEditPreview(selectedEffectId) {
  let displayName;
  let guildId;
  let guildNameplate;
  let pendingNameplate;
  let selectedFontId;
  let user;
  let userNameplate;
  ({ user, displayName, guildId, selectedFontId } = selectedEffectId);
  selectedEffectId = selectedEffectId.selectedEffectId;
  const selectedColors = selectedEffectId.selectedColors;
  const tmp = createCacheKey();
  let obj = selectedFontId(selectedColors[5]);
  const guildMemberAndUserPendingNameplate = obj.useGuildMemberAndUserPendingNameplate(user, guildId);
  ({ pendingNameplate, userNameplate, guildNameplate } = guildMemberAndUserPendingNameplate);
  let obj1 = selectedFontId(selectedColors[6]);
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