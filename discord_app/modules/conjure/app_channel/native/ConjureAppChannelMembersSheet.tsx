// === Module 14499: ConjureAppChannelMembersSheet ===

// Module 14499 (ConjureAppChannelMembersSheet)
import openConjureAppChannelSheet from "openConjureAppChannelSheet" /* 14498 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;

require = fn;
const UsersFastListConstants = fn(10691);
({ USERS_LIST_PADDING_BETWEEN_SECTIONS, USERS_LIST_SECTION_BOTTOM_PADDING } = UsersFastListConstants);
const jsx = fn(21).jsx;
const diff = USERS_LIST_PADDING_BETWEEN_SECTIONS - USERS_LIST_SECTION_BOTTOM_PADDING;
const createStyles = fn(5005);
let closure_6 = createStyles.createStyles({ body: { overflow: "hidden" }, list: { marginTop: -diff } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/app_channel/native/ConjureAppChannelMembersSheet.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppChannelMembersSheet(channelId) {
  BottomSheet = channelId;
  let tmp = dependencyMap;
  const cResult = channelId(576).c(14);
  channelId = channelId.channelId;
  let body = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp6 = items1;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  let obj = channelId(576);
  const stateFromStores = BottomSheet(504).useStateFromStores(first, tmp5, tmp6);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (cResult[4] !== guild_id) {
    const fn2 = function _() {
      if (null == guild_id) {
        const result = openConjureAppChannelSheet.closeConjureAppChannelMembersSheet();
      }
    };
    const items2 = [guild_id];
    cResult[4] = guild_id;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp10 = items2;
    let tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  const effect = noop.useEffect(tmp9, tmp10);
  if (null == guild_id) {
    return null;
  } else {
    if (cResult[7] === channelId) {
      if (cResult[8] === guild_id) {
        if (cResult[9] === body.list) {
          let tmp12 = cResult[10];
        }
        if (cResult[11] === body.body) {
        }
        BottomSheet = BottomSheet(5302).BottomSheet;
        const obj2 = { startExpanded: true, scrollable: true, bodyStyles: body.body, children: tmp12 };
        tmp = <BottomSheet startExpanded scrollable bodyStyles={body.body}>{tmp12}</BottomSheet>;
        body = body.body;
        cResult[11] = body;
        cResult[12] = tmp12;
        cResult[13] = tmp;
      }
    }
    const obj3 = { channelId, guildId: guild_id, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true, listStyleOverride: body.list };
    const tmp15 = jsx(guild_id(11381), { channelId, guildId: guild_id, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true, listStyleOverride: body.list });
    cResult[7] = channelId;
    cResult[8] = guild_id;
    cResult[9] = body.list;
    cResult[10] = tmp15;
    tmp12 = tmp15;
  }
  const BottomSheetResult = BottomSheet(504);
}) : (function ConjureAppChannelMembersSheet(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_6();
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  const items2 = [guild_id];
  const effect = noop.useEffect(() => {
    if (null == guild_id) {
      const result = openConjureAppChannelSheet.closeConjureAppChannelMembersSheet();
    }
  }, items2);
  let tmp7 = null;
  if (null != guild_id) {
    const obj2 = { startExpanded: true, scrollable: true, bodyStyles: tmp.body, children: null };
    const obj3 = { channelId, guildId: guild_id, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true, listStyleOverride: tmp.list };
    obj2.children = jsx(guild_id(11381), { channelId, guildId: guild_id, headerShown: false, inActionSheet: true, disableStickySections: true, disableThemedGradient: true, listStyleOverride: tmp.list });
    tmp7 = jsx(channelId(5302).BottomSheet, { startExpanded: true, scrollable: true, bodyStyles: tmp.body, children: null });
  }
  return tmp7;
}));