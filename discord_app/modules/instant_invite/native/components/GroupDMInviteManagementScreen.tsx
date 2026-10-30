// discord_app/modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import InstantInviteDefault from "../../../guild_instant_invites/native/InstantInvite.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import InviteRecord from "../../../../records/InviteRecord.tsx";

require = fn;
function GroupDMInviteManagement(channelId) {
  channelId = channelId.channelId;
  first = undefined;
  dependencyMap = undefined;
  [first, dependencyMap] = noop.useState([]);
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  closure_3 = tmp3[1];
  first(5588)(() => {
    closure_0 = async function _fetchInvites() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp2;
              closure_0 = tmp5;
              closure_128_0 = undefined;
              const HTTP = channelId(closure_2_2[11]).HTTP;
              const obj4 = {
                url: closure_2_9.INSTANT_INVITES(closure_0),
                retries: 3,
                oldFormErrors: true,
                rejectWithError: true,
              };
              v1 = 1;
              v3 = 1;
              const obj5 = { value: HTTP.get(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            const body = value.body;
            closure_128_0 = body.map((item) => {
              const obj = {};
              const merged = Object.assign(item);
              ({ max_uses: obj.maxUses, max_age: obj.maxAge, created_at: obj.createdAt } = item);
              return new closure_1_7(obj);
            });
            v1(closure_128_0);
            v3(false);
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp13) {
          v3 = tmp;
          throw tmp13;
        }
      }
    };
    (function fetchInvites() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })().catch(() => {
      closure_1_3(false);
    });
  });
  const items = [first];
  const memo = noop.useMemo(
    () =>
      _modDef12.sortBy(first, (inviter) => {
        inviter = inviter.inviter;
        let str;
        if (inviter != null) {
          if (inviter.username != null) {
            str = str2.toLowerCase();
          }
        }
        if (str == null) {
          str = "";
        }
        return str;
      }),
    items,
  );
  const callback = noop.useCallback((code) => code.code, []);
  if (tmp3[0]) {
    let tmp12 = jsx(channelId(7202).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    let obj2 = { lightSource: tmp4(10806), darkSource: tmp4(10807), title: null, body: null };
    const intl = channelId(1114).intl;
    obj2.title = intl.string(channelId(1114).t["+nLJkZ"]);
    const intl2 = channelId(1114).intl;
    obj2.body = intl2.string(channelId(1114).t.F53CAc);
    tmp12 = jsx(channelId(1188).EmptyState, {
      lightSource: tmp4(10806),
      darkSource: tmp4(10807),
      title: null,
      body: null,
    });
  } else {
    let obj = { contentContainerStyle: tmp.listContent, data: memo, keyExtractor: callback, renderItem: tmp9 };
    tmp12 = jsx(channelId(7288).FlashList, {
      contentContainerStyle: tmp.listContent,
      data: memo,
      keyExtractor: callback,
      renderItem: tmp9,
    });
  }
  return tmp12;
}
get_ActivityIndicator = fn(17);
({ Platform, View: metroRequire } = get_ActivityIndicator);
const ChannelSettingsStore = fn(8192);
const Constants = fn(1072);
({ ChannelSettingsSections: closure_8, Endpoints: closure_9 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj = { listContent: { paddingTop: nativeDefault.space.PX_8 } };
let closure_11 = createStyles.createStyles(obj);
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default noop.memo(function GroupDMInviteManagementScreen(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const memo = noop.useMemo(() => {
    const obj = {};
    const obj2 = { title: null, headerLeft: null, render: null, impressionName: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.OQ9MKu);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(onClose);
    obj2.render = function render() {
      return <GroupDMInviteManagement channelId={channelId} />;
    };
    obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GDM_SETTINGS_INVITES;
    obj[constants.INSTANT_INVITES_MANAGEMENT] = obj2;
    return obj;
  }, items);
  return jsx(channelId(7163).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
});
