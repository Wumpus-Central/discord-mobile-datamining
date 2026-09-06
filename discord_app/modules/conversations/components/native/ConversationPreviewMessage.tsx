// === Module 7931: ConversationPreviewMessage ===

// Module 7931 (ConversationPreviewMessage)
import nativeDefault from "native" /* 576 */;
import DateUtils from "DateUtils" /* 4242 */;
import RowGeneratorDefault from "RowGenerator" /* 7932 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8126 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

require = fn;
function modifyRow(arg0) {
  arg0.contextType = RowGeneratorTypes.MessageContextType.SEARCH;
  arg0.renderContentOnly = true;
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let container = new RowGeneratorDefault();
container.setOptions({ renderReplies: false, renderReactions: false });
fn(4560);
container = { container: null, header: null, authorRow: null, headerTimestamp: null };
container = { gap: nativeDefault.space.PX_4 };
container.container = container;
const createStyles = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
container.header = createStyles;
container.authorRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
container.headerTimestamp = { flex: 1 };
let closure_11 = createStyles.createStyles(container);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewMessage.tsx");

export default function ConversationPreviewMessage(message) {
  message = message.message;
  const guildId = message.guildId;
  let setting;
  const tmp = closure_11();
  let rowGenerator = message(setting[9]);
  const items = [AccessibilityStore];
  const stateFromStores = rowGenerator.useStateFromStores(items, () => roleStyle.roleStyle);
  let obj1 = message(setting[9]);
  const items1 = [GuildMemberStore];
  const items2 = [guildId, message.author.id];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => GuildMemberStore.getMember(guildId, message.author.id), items2);
  message(setting[10]);
  if ("username" === stateFromStores) {
    let colorString;
    if (stateFromStores1 != null) {
      colorString = stateFromStores1.colorString;
    }
    if (null != colorString) {
      rowGenerator = { color: stateFromStores1.colorString };
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
    rowGenerator = { style: tmp.container, children: null };
    obj1 = { style: tmp.header, children: null };
    const memo = noop.useMemo(() => DateUtils.calendarFormat(message.timestamp, true, setting), items3);
    const obj2 = { user: message.author, guildId, size: tmp2(tmp3[14]).AvatarSizes.XXSMALL };
    const items4 = [closure_7(tmp2(tmp3[14]).Avatar, obj2), , ];
    const obj3 = { style: tmp.authorRow, children: null };
    let tmp24Result = "dot" === stateFromStores;
    if (tmp24Result) {
      let colorString1;
      if (stateFromStores1 != null) {
        colorString1 = stateFromStores1.colorString;
      }
      tmp24Result = null != colorString1;
    }
    if (tmp24Result) {
      ({ colorString: obj10.color, colorStrings: obj10.colors } = stateFromStores1);
      tmp24Result = tmp24(tmp2(tmp3[14]).RoleDot, { size: "small", color: null, colors: null });
      const obj4 = { size: "small", color: null, colors: null };
    }
    const items5 = [tmp24Result, ];
    const obj5 = { variant: "text-md/medium", lineClamp: 1, style: {}, gradientColors: null, children: null };
    let tmp27;
    if (isRoleStyleAndRoleColorsEligibleForERC) {
      tmp27 = processColorStringsArray;
    }
    obj5.gradientColors = tmp27;
    obj5.children = tmp7;
    items5[1] = closure_7(tmp2(tmp3[15]).Text, obj5);
    obj3.children = items5;
    items4[1] = closure_8(View, obj3);
    const obj6 = { variant: "text-xs/normal", color: "text-muted", lineClamp: 1, style: tmp.headerTimestamp, children: memo };
    items4[2] = closure_7(tmp2(tmp3[15]).Text, obj6);
    obj1.children = items4;
    const items6 = [closure_8(View, obj1), ];
    const obj7 = { pointerEvents: "none", horizontalOffset: 0, modifyRow, message, rowGenerator };
    items6[1] = closure_7(guildId(tmp3[16]), obj7);
    rowGenerator.children = items6;
    return closure_8(View, rowGenerator);
  }
};