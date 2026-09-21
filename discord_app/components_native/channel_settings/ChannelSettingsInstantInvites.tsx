// discord_app/components_native/channel_settings/ChannelSettingsInstantInvites.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../modules/safe_area/useSafeAreaInsets.native.tsx";
import InstantInvite from "../../modules/guild_instant_invites/native/InstantInvite.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";
import ChannelSettingsStore from "../../stores/ChannelSettingsStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = globalThis.__r;
const InstantInviteDefault = InstantInvite;

const FastestListDefault = tmp2(7300);
const _modDef11214 = tmp2(11214);
const _modDef11215 = tmp2(11215);
const InstantInviteSelfMeasurerDefault = tmp2(17288);
require = fn;
const View = fn(17).View;
const ChannelSettingsSections = fn(1074).ChannelSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4756);
let obj2 = {
  content: {
    paddingHorizontal: nativeDefault.space.PX_16,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
    flex: 1,
  },
  gap: null,
};
let obj3 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  flex: 1,
};
obj2.gap = { height: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj2);
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
  const tmp3 = invites(memo.useState(undefined), 2);
  const items1 = [memo1];
  dependencyMap = require("initialize").useStateFromStores(items1, () => memo1.getChannel());
  let obj2 = require("initialize");
  const items2 = [memo1];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items2, () => memo1.getInvites());
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
  const obj3 = require("initialize");
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
    const items = [
      ...memo.map((data) => ({ type: "invite", data })),
      ...stateFromStoresArray.map((data) => ({ type: "channel", data })),
    ];
    return items;
  }, items5);
  const items6 = [memo1.length];
  const effect = memo.useEffect(() => {
    require("ChannelSettingsActionCreators").setSection(constants.INSTANT_INVITES);
  }, []);
  const items7 = [memo1];
  const callback1 = memo.useCallback((arg0, arg1) => {
    if ("invite" === memo1[arg1].type) {
      const obj2 = { invite: tmp.data };
      let tmp5 = React7(InstantInviteDefault, obj2);
    } else {
      const obj = { channel: tmp.data };
      tmp5 = React7(InstantInvite.LinkedChannelInvite, obj);
    }
    return tmp5;
  }, items7);
  if (!loading) {
    if (0 === memo1.length) {
      const obj5 = { lightSource: _modDef11214, darkSource: _modDef11215, title: null, body: null };
      const intl = tmpResult(1115).intl;
      obj5.title = intl.string(tmpResult(1115).t["+nLJkZ"]);
      const intl2 = tmpResult(1115).intl;
      obj5.body = intl2.string(tmpResult(1115).t.F53CAc);
      return closure_9(tmpResult(1177).EmptyState, obj5);
    }
  }
  if (!loading) {
    if (null != tmp4) {
      const obj6 = { style: tmp.content, children: null };
      const obj7 = {
        sections: items6,
        estimatedListSize: "windowSize",
        itemSize: tmp4,
        renderItem: callback1,
        insetStart: tmp.gap.height,
        insetEnd: useSafeAreaInsetsDefault().bottom,
      };
      obj6.children = closure_9(FastestListDefault, obj7);
      let tmp16Result = closure_9(stateFromStoresArray, obj6);
    }
  }
  const obj8 = { style: tmp.content, children: null };
  tmp = closure_9;
  const items8 = [closure_9(tmpResult(7284).SceneLoadingIndicator, {})];
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
  obj8.children = items8;
  tmp16Result = closure_10(stateFromStoresArray, obj8);
  const obj4 = require("initialize");
}
