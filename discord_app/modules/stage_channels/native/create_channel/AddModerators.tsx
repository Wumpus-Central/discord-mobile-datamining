// === Module 9763: AddModerators ===

// Module 9763 (AddModerators)
import nativeDefault from "native" /* 576 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
const View = fn(17).View;
const RowType = fn(8401).RowType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { addMembersContainer: null, moderatorDescriptionContainer: null, errorMessage: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles.addMembersContainer = createStyles;
createStyles.moderatorDescriptionContainer = { margin: 16 };
createStyles.errorMessage = { margin: 16, marginBottom: 0 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/create_channel/AddModerators.tsx");

export default function AddModerators(guildId) {
  guildId = guildId.guildId;
  let tmp = null;
  let merged = Object.assign(guildId, Object.assign({ guildId: 0, onChannelCreated: 0 }));
  let navigation;
  let first;
  let onPress;
  const tmp3 = closure_10();
  let obj = guildId(navigation[8]);
  navigation = obj.useNavigation();
  const guild = onPress.getGuild(guildId);
  merged(navigation[9])(null != guild, "Guild must not be null");
  const tmp10 = first(merged(navigation[10])(guildId.onChannelCreated), 3);
  first = tmp10[0];
  noop = tmp13;
  const tmp14 = first(noop.useState({}), 2);
  const first1 = tmp14[0];
  let items = [tmp10[2], first1, merged, guildId];
  onPress = noop.useCallback(() => {
    const values = Object.values(first1);
    const found = values.filter((row) => null != row.row.id);
    const mapped = found.map((row) => {
      row = row.row;
      if (row.rowType === constants.ROLE) {
        let moderatorOverwrite = guildId(5415).createModeratorOverwrite(row.id, guildId(1894).PermissionOverwriteType.ROLE);
        const obj2 = guildId(5415);
      } else {
        moderatorOverwrite = guildId(5415).createModeratorOverwrite(row.id, guildId(1894).PermissionOverwriteType.MEMBER);
        const obj = guildId(5415);
      }
      return moderatorOverwrite;
    });
    let obj = {};
    merged = Object.assign(merged);
    obj.guildId = guildId;
    const items = [...mapped];
    let overwrites = merged.overwrites;
    if (overwrites == null) {
      overwrites = [];
    }
    HermesBuiltin.arraySpread(overwrites, tmp4);
    obj.overwrites = items;
    return closure_4(obj);
  }, items);
  const items1 = [onPress, navigation, first1, first];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (Object.keys(first1).length > 0) {
      const intl2 = guildId(navigation[13]).intl;
      let stringResult = intl2.string(guildId(navigation[13]).t.CumH4u);
    } else {
      const intl = guildId(navigation[13]).intl;
      stringResult = intl.string(guildId(navigation[13]).t["5Wxrcd"]);
    }
    guildId = stringResult;
    navigation.setOptions({ headerRight: first ? (() => closure_1_8(stringResult(navigation[14]).HeaderSubmittingIndicator, {})) : (() => React6(HeaderActionButton.HeaderActionButton, { text: stringResult, onPress })) });
  }, items1);
  obj = { style: tmp3.addMembersContainer, children: null };
  obj = { style: tmp3.moderatorDescriptionContainer, children: null };
  const obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl = guildId(navigation[13]).intl;
  obj1.children = intl.string(guildId(navigation[13]).t.f7VbhF);
  obj.children = closure_8(guildId(navigation[16]).Text, obj1);
  const items2 = [closure_8(first1, obj), , ];
  if (null != tmp10[1].message) {
    let obj2 = { style: tmp3.errorMessage, children: null };
    const obj3 = { messageType: tmp4(tmp5[17]).HelpMessageTypes.ERROR, children: tmp12.message };
    obj2.children = tmp20(tmp4(tmp5[17]).HelpMessage, obj3);
    tmp = tmp20(tmp19, obj2);
  }
  items2[1] = tmp;
  const obj4 = { channel: null, guild, permission: guildId(navigation[19]).MODERATE_STAGE_CHANNEL_PERMISSIONS, inputDesc: null, pendingAdditions: null, setPendingAdditions: null };
  let intl2 = tmp4(tmp5[13]).intl;
  obj4.inputDesc = intl2.string(guildId(navigation[13]).t["Ch6+n4"]);
  obj4.pendingAdditions = first1;
  obj4.setPendingAdditions = tmp14[1];
  items2[2] = closure_8(merged(navigation[18]), obj4);
  obj.children = items2;
  return closure_9(first1, obj);
};