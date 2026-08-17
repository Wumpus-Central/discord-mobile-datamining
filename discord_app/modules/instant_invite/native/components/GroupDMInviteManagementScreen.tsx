// discord_app/modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../records/InviteRecord.tsx";
import normalizeChannelPropertyForCompare from "../../../../stores/ChannelSettingsStore.tsx";
import ME from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function GroupDMInviteManagement(channelId) {
  channelId = channelId.channelId;
  let first;
  dependencyMap = undefined;
  closure_3 = undefined;
  let callback;
  const tmp2 = callback(importAllResult.useState([]), 2);
  first = tmp2[0];
  dependencyMap = tmp2[1];
  const tmp3 = callback(importAllResult.useState(true), 2);
  closure_3 = tmp3[1];
  first(4761)(() => {
    function _fetchInvites() {
      const self = this;
      const tmp = callback(function*() {
        if (v02 === 2) {
          v02 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            v02 = 2;
            if (0 === v0) {
              if (arg0 === 1) {
                v02 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v02 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp2;
                let callback = tmp5;
                callback = undefined;
                const HTTP = callback(closure_2_2[10]).HTTP;
                obj1 = { url: null, retries: 3, oldFormErrors: true, rejectWithError: true };
                obj1[0] = closure_2_10.INSTANT_INVITES(closure_1_0);
                v0 = 1;
                v02 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = HTTP.get(obj1);
                return obj2;
              }
            } else if (arg0 === 1) {
              v02 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v02 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const body = arg1.body;
              callback = body.map((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                ({ max_uses: obj.maxUses, max_age: obj.maxAge, created_at: obj.createdAt } = arg0);
                return new closure_8(obj);
              });
              v0(callback);
              v02(false);
              v02 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp13) {
            v02 = tmp;
            throw tmp13;
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    (function fetchInvites() {
      const self = this;
      const apply = _fetchInvites.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })().catch(() => {
      callback(false);
    });
  });
  const tmp7 = callback(importAllResult.useState(21), 2);
  callback = tmp7[1];
  const items = [first];
  const memo = importAllResult.useMemo(() => first(12).sortBy(first, (inviter) => {
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
  }), items);
  const effect = importAllResult.useEffect(() => {
    callback(21);
  }, []);
  [][0] = first;
  callback = importAllResult.useCallback((code) => code.code, []);
  if (tmp3[0]) {
    let tmp14 = jsx(channelId(6549).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    let obj = { lightSource: null, darkSource: null, title: null, body: null };
    obj[0] = tmp4(9973);
    obj[1] = tmp4(9974);
    const intl = channelId(1236).intl;
    obj[2] = intl.string(channelId(1236).t["+nLJkZ"]);
    const intl2 = channelId(1236).intl;
    obj[3] = intl2.string(channelId(1236).t.F53CAc);
    tmp14 = jsx(channelId(1297).EmptyState, { lightSource: null, darkSource: null, title: null, body: null });
  } else {
    obj = { style: null, data: null, keyExtractor: null, renderItem: null, initialNumToRender: 10, windowSize: null };
    obj[0] = tmp.list;
    obj[1] = memo;
    obj[2] = callback;
    obj[3] = tmp11;
    obj[5] = tmp7[0];
    tmp14 = <closure_7 style={null} data={null} keyExtractor={null} renderItem={null} initialNumToRender={10} windowSize={null} />;
  }
  return tmp14;
}
let c5 = importAllResult;
({ Platform, View: closure_6, FlatList: error } = get_ActivityIndicator);
({ ChannelSettingsSections: c9, Endpoints: c10 } = ME);
let closure_12 = createCacheKey.createStyles({ list: { paddingTop: 8 } });
const memoResult = importAllResult.memo(function GroupDMInviteManagementScreen(channelId) {
  channelId = channelId.channelId;
  const onClose = channelId.onClose;
  const items = [channelId, onClose];
  const memo = importAllResult.useMemo(() => {
    let obj = {};
    obj = { title: null, headerLeft: null, render: null, impressionName: null };
    const intl = channelId(closure_1_2[18]).intl;
    obj[0] = intl.string(channelId(closure_1_2[18]).t.OQ9MKu);
    obj[1] = channelId(closure_1_2[19]).getHeaderCloseButton(onClose);
    obj[2] = function render() {
      return closure_1_11(closure_1_13, { channelId: closure_0 });
    };
    obj[3] = channelId(closure_1_2[20]).ImpressionNames.GDM_SETTINGS_INVITES;
    obj[closure_1_9.INSTANT_INVITES_MANAGEMENT] = obj;
    return obj;
  }, items);
  return jsx(channelId(6312).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
});
const result = require("set").fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default memoResult;