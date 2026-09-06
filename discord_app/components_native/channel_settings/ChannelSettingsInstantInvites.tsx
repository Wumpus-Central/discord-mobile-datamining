// === Module 16819: ChannelSettingsInstantInvites ===

// Module 16819 (ChannelSettingsInstantInvites)
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import InstantInvite from "InstantInvite" /* 10932 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelSettingsStore from "ChannelSettingsStore" /* 8626 */;
import ChannelStore from "ChannelStore" /* 1957 */;

const InstantInviteDefault = InstantInvite;

const FastestListDefault = tmp2(7055);
const _modDef10949 = tmp2(10949);
const _modDef10950 = tmp2(10950);
const InstantInviteSelfMeasurerDefault = tmp2(16820);
require = fn;
const View = fn(17).View;
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { content: null, gap: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, flex: 1 };
createStyles.content = createStyles;
createStyles.gap = { height: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/channel_settings/ChannelSettingsInstantInvites.tsx");

export default function ConnectedChannelSettingsInstantInvites() {
  let tmp = closure_11();
  _require = tmp;
  let tmp2 = importDefault;
  let obj = dependencyMap;
  [tmp4, importDefault] = invites(memo.useState(undefined), 2);
  let items = [tmp];
  let tmpResult = _require;
  const callback = memo.useCallback((arg0) => {
    importDefault(arg0 + gap.gap.height);
  }, items);
  let obj1 = require("initialize");
  const items1 = [memo1];
  dependencyMap = obj1.useStateFromStores(items1, () => memo1.getChannel());
  let obj2 = require("initialize");
  const items2 = [memo1];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => memo1.getInvites());
  invites = stateFromStoresObject.invites;
  const loading = stateFromStoresObject.loading;
  const items3 = [invites];
  memo = memo.useMemo(() => {
    const values = Object.values(invites);
    return values.sort((inviter, inviter2) => {
      inviter = inviter.inviter;
      let str;
      if (inviter != null) {
        str = inviter.username;
      }
      if (str == null) {
        str = "";
      }
      const formatted = str.toLowerCase();
      inviter2 = inviter2.inviter;
      let str2;
      if (inviter2 != null) {
        str2 = inviter2.username;
      }
      if (str2 == null) {
        str2 = "";
      }
      return formatted.localeCompare(str2.toLowerCase());
    });
  }, items3);
  const tmp3 = invites(memo.useState(undefined), 2);
  const items4 = [ChannelStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items4, () => {
    if (null != id) {
      const sortedLinkedChannelsForGuild = ChannelStore.getSortedLinkedChannelsForGuild(tmp.guild_id);
      let found = sortedLinkedChannelsForGuild.filter((id) => id.id === id.id);
    } else {
      found = [];
    }
    return found;
  });
  const items5 = [memo, stateFromStoresArray];
  memo1 = memo.useMemo(() => {
    const items = [...memo.map((data) => ({ type: "invite", data })), ...stateFromStoresArray.map((data) => ({ type: "channel", data }))];
    return items;
  }, items5);
  const items6 = [memo1.length];
  const effect = memo.useEffect(() => {
    require("ChannelSettingsActionCreators").setSection(constants.INSTANT_INVITES);
  }, []);
  const items7 = [memo1];
  const callback1 = memo.useCallback((arg0, arg1) => {
    if ("invite" === memo1[arg1].type) {
      let obj = { invite: tmp.data };
      let tmp5 = React7(InstantInviteDefault, obj);
    } else {
      obj = { channel: tmp.data };
      tmp5 = React7(InstantInvite.LinkedChannelInvite, obj);
    }
    return tmp5;
  }, items7);
  if (!loading) {
    if (0 === memo1.length) {
      obj = { lightSource: _modDef10949, darkSource: _modDef10950, title: null, body: null };
      const intl = tmpResult(1114).intl;
      obj.title = intl.string(tmpResult(1114).t["+nLJkZ"]);
      const intl2 = tmpResult(1114).intl;
      obj.body = intl2.string(tmpResult(1114).t.F53CAc);
      return closure_9(tmpResult(1178).EmptyState, obj);
    }
  }
  if (!loading) {
    if (null != tmp4) {
      obj = { style: tmp.content, children: null };
      obj1 = { sections: items6, estimatedListSize: "windowSize", itemSize: tmp4, renderItem: callback1, insetStart: tmp.gap.height, insetEnd: useSafeAreaInsetsDefault().bottom };
      obj.children = closure_9(FastestListDefault, obj1);
      let tmp16Result = closure_9(stateFromStoresArray, obj);
    }
  }
  obj2 = { style: tmp.content, children: null };
  tmp = closure_9;
  const items8 = [closure_9(tmpResult(7039).SceneLoadingIndicator, {}), ];
  tmpResult = null;
  if (memo1.length > 0) {
    tmp2 = InstantInviteSelfMeasurerDefault;
    obj = { item: null, onMeasured: null };
    memo1 = memo1[0];
    obj.item = memo1;
    obj.onMeasured = callback;
    tmpResult = tmp(tmp2, obj);
  }
  items8[1] = tmpResult;
  obj2.children = items8;
  tmp16Result = closure_10(stateFromStoresArray, obj2);
  const obj4 = require("initialize");
};