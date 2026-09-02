// === Module 7849: modifyRow ===

// Module 7849 (modifyRow)
import ThemesDefault from "Themes" /* 709 */;
import setOptionsDefault from "setOptions" /* 7850 */;
import MediaGalleryItemType from "MediaGalleryItemType" /* 8044 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4470 */;
import closure_6 from "trackCommunicationDisabled" /* 1991 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function modifyRow(arg0) {
  arg0.contextType = MediaGalleryItemType.MessageContextType.SEARCH;
  arg0.renderContentOnly = true;
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = new setOptionsDefault();
obj.setOptions({ renderReplies: false, renderReactions: false });
obj = { container: null, header: null, authorRow: null, headerTimestamp: null };
obj = { gap: ThemesDefault.space.PX_4 };
obj[0] = obj;
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
obj[1] = createCacheKey;
obj[2] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[3] = { flex: 1 };
let closure_11 = createCacheKey.createStyles(obj);
let obj2 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/conversations/components/native/ConversationPreviewMessage.tsx");

export default function ConversationPreviewMessage(message) {
  message = message.message;
  const guildId = message.guildId;
  let setting;
  const tmp = callback2();
  obj = message(setting[9]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => roleStyle.roleStyle);
  obj1 = message(setting[9]);
  const items1 = [closure_6];
  const items2 = [guildId, message.author.id];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_6.getMember(guildId, message.author.id), items2);
  message(setting[10]);
  if ("username" === stateFromStores) {
    let colorString;
    if (stateFromStores1 != null) {
      colorString = stateFromStores1.colorString;
    }
    if (null != colorString) {
      obj = { color: null };
      obj[0] = stateFromStores1.colorString;
    }
    let tmp2Result = tmp2(tmp3[11]);
    let colorStrings;
    if (stateFromStores1 != null) {
      colorStrings = stateFromStores1.colorStrings;
    }
    const processColorStringsArray = tmp2Result.useProcessColorStringsArray(colorStrings);
    tmp2Result = tmp2(tmp3[11]);
    const isRoleStyleAndRoleColorsEligibleForERC = tmp2Result.useIsRoleStyleAndRoleColorsEligibleForERC(guildId, message.author.id, stateFromStores, processColorStringsArray);
    const TimestampHourCycle = tmp2(tmp3[12]).TimestampHourCycle;
    setting = TimestampHourCycle.useSetting();
    const items3 = [message.timestamp, setting];
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj1 = { style: null, children: null };
    obj1[0] = tmp.header;
    const memo = React.useMemo(() => message(setting[13]).calendarFormat(message.timestamp, true, setting), items3);
    const obj2 = { user: null, guildId: null, size: null };
    obj2[0] = message.author;
    obj2[1] = guildId;
    obj2[2] = tmp2(tmp3[14]).AvatarSizes.XXSMALL;
    const items4 = [callback(tmp2(tmp3[14]).Avatar, obj2), , ];
    const obj3 = { style: null, children: null };
    obj3[0] = tmp.authorRow;
    let tmp24Result = "dot" === stateFromStores;
    if (tmp24Result) {
      let colorString1;
      if (stateFromStores1 != null) {
        colorString1 = stateFromStores1.colorString;
      }
      tmp24Result = null != colorString1;
    }
    if (tmp24Result) {
      ({ colorString: obj10[1], colorStrings: obj10[2] } = stateFromStores1);
      tmp24Result = tmp24(tmp2(tmp3[14]).RoleDot, { size: "small", color: null, colors: null });
      const obj4 = { size: "small", color: null, colors: null };
    }
    const items5 = [tmp24Result, ];
    const obj5 = { variant: "text-md/medium", lineClamp: 1, style: null, gradientColors: null, children: null };
    obj5[2] = {};
    let tmp27;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp27 = processColorStringsArray;
    }
    obj5[3] = tmp27;
    obj5[4] = tmp7;
    items5[1] = callback(tmp2(tmp3[15]).Text, obj5);
    obj3[1] = items5;
    items4[1] = closure_8(View, obj3);
    const obj6 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: null, children: null };
    obj6[3] = tmp.headerTimestamp;
    obj6[4] = memo;
    items4[2] = callback(tmp2(tmp3[15]).Text, obj6);
    obj1[1] = items4;
    const items6 = [closure_8(View, obj1), ];
    const obj7 = { pointerEvents: "none", horizontalOffset: 0, modifyRow: null, message: null, rowGenerator: null };
    obj7[2] = modifyRow;
    obj7[3] = message;
    obj7[4] = obj;
    items6[1] = callback(guildId(tmp3[16]), obj7);
    obj[1] = items6;
    return closure_8(View, obj);
  }
};