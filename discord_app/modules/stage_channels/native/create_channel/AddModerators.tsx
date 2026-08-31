// === Module 9685: AddModerators ===

// Module 9685 (AddModerators)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "createGuildRecordFromRust" /* 1909 */;
import { RowType } from "RowType" /* 8640 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

const require = arg1;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
createCacheKey = { addMembersContainer: null, moderatorDescriptionContainer: null, errorMessage: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { margin: 16 };
createCacheKey[2] = { margin: 16, marginBottom: 0 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/stage_channels/native/create_channel/AddModerators.tsx");

export default function AddModerators(guildId) {
  guildId = guildId.guildId;
  let tmp = null;
  let merged = Object.assign(guildId, Object.create(null));
  let navigation;
  let first;
  let React;
  let first1;
  let callback;
  const tmp3 = callback2();
  let obj = guildId(navigation[8]);
  navigation = obj.useNavigation();
  const guild = callback.getGuild(guildId);
  merged(navigation[9])(null != guild, "Guild must not be null");
  const tmp10 = first(merged(navigation[10])(guildId.onChannelCreated), 3);
  first = tmp10[0];
  React = tmp13;
  const tmp14 = first(React.useState({}), 2);
  first1 = tmp14[0];
  let items = [tmp10[2], first1, merged, guildId];
  callback = React.useCallback(() => {
    const values = Object.values(first1);
    const found = values.filter((row) => null != row.row.id);
    const mapped = found.map((row) => {
      row = row.row;
      if (row.rowType === constants.ROLE) {
        let moderatorOverwrite = callback(5327).createModeratorOverwrite(row.id, callback(1955).PermissionOverwriteType.ROLE);
        const obj2 = callback(5327);
      } else {
        moderatorOverwrite = callback(5327).createModeratorOverwrite(row.id, callback(1955).PermissionOverwriteType.MEMBER);
        const obj = callback(5327);
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
  const items1 = [callback, navigation, first1, first];
  const layoutEffect = React.useLayoutEffect(() => {
    if (Object.keys(first1).length > 0) {
      const intl2 = guildId(navigation[13]).intl;
      let stringResult = intl2.string(guildId(navigation[13]).t.CumH4u);
    } else {
      const intl = guildId(navigation[13]).intl;
      stringResult = intl.string(guildId(navigation[13]).t["5Wxrcd"]);
    }
    guildId = stringResult;
    navigation.setOptions({ headerRight: first ? (() => callback(stringResult(table[14]).HeaderSubmittingIndicator, {})) : (() => closure_2_8(guildId(navigation[15]).HeaderActionButton, { text: closure_0, onPress: closure_1_6 })) });
  }, items1);
  obj = { style: tmp3.addMembersContainer, children: null };
  obj = { style: tmp3.moderatorDescriptionContainer, children: null };
  obj1 = { variant: "text-sm/medium", color: "text-default", children: null };
  let intl = guildId(navigation[13]).intl;
  obj1[2] = intl.string(guildId(navigation[13]).t.f7VbhF);
  obj[1] = callback(guildId(navigation[16]).Text, obj1);
  const items2 = [callback(first1, obj), , ];
  if (null != tmp10[1].message) {
    let obj2 = { style: null, children: null };
    obj2[0] = tmp3.errorMessage;
    const obj3 = { messageType: null, children: null };
    obj3[0] = tmp4(tmp5[17]).HelpMessageTypes.ERROR;
    obj3[1] = tmp12.message;
    obj2[1] = tmp20(tmp4(tmp5[17]).HelpMessage, obj3);
    tmp = tmp20(tmp19, obj2);
  }
  items2[1] = tmp;
  const obj4 = { channel: null, guild, permission: guildId(navigation[19]).MODERATE_STAGE_CHANNEL_PERMISSIONS, inputDesc: null, pendingAdditions: null, setPendingAdditions: null };
  let intl2 = tmp4(tmp5[13]).intl;
  obj4[3] = intl2.string(guildId(navigation[13]).t["Ch6+n4"]);
  obj4[4] = first1;
  obj4[5] = tmp14[1];
  items2[2] = callback(merged(navigation[18]), obj4);
  obj[1] = items2;
  return closure_9(first1, obj);
};