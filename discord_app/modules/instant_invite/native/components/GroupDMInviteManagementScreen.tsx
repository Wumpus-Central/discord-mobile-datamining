// === Module 10287: GroupDMInviteManagementScreen ===

// Module 10287 (GroupDMInviteManagementScreen)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1273 */;
import NavigatorHeader from "NavigatorHeader" /* 6200 */;
import InstantInviteDefault from "InstantInvite" /* 10288 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import InviteRecord from "InviteRecord" /* 8498 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: metroRequire, FlatList: closure_7 } = get_ActivityIndicator);
const ChannelSettingsStore = fn(9697);
const Constants = fn(1085);
({ ChannelSettingsSections: closure_9, Endpoints: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_12 = createStyles.createStyles({ list: { paddingTop: 8 } });
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMInviteManagement(channelId) {
  let SceneLoadingIndicator = channelId;
  const cResult = channelId(576).c(18);
  channelId = channelId.channelId;
  const tmp2 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  [first1, dependencyMap] = noop.useState(first);
  let obj2 = channelId(576);
  [tmp7, asyncGeneratorStep] = noop.useState(true);
  if (cResult[1] !== channelId) {
    class T {
      constructor() {
        closure_0 = closure_3(/* F154384 */ function() { ... });
        promise = (function fetchInvites() { ... })();
        catchPromise = promise.catch(() => { ... });
        return;
      }
    }
    cResult[1] = channelId;
    cResult[2] = T;
  } else {
    class T {
      constructor() {
        closure_0 = closure_3(/* F154384 */ function() { ... });
        promise = (function fetchInvites() { ... })();
        catchPromise = promise.catch(() => { ... });
        return;
      }
    }
  }
  first1(5396)(T);
  const tmp6 = _slicedToArray(noop.useState(true), 2);
  [tmp12, _slicedToArray] = noop.useState(21);
  if (cResult[3] !== first1) {
    class T {
      constructor() {
        closure_0 = closure_3(/* F154384 */ function() { ... });
        promise = (function fetchInvites() { ... })();
        catchPromise = promise.catch(() => { ... });
        return;
      }
    }
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          inviter = channelId.inviter;
          str = undefined;
          if (inviter != null) {
            str2 = inviter.username;
            if (str2 != null) {
              str = str2.toLowerCase();
            }
          }
          if (str == null) {
            str = "";
          }
          return str;
        }
      }
      cResult[5] = G;
    } else {
      class G {
        constructor(arg0) {
          inviter = channelId.inviter;
          str = undefined;
          if (inviter != null) {
            str2 = inviter.username;
            if (str2 != null) {
              str = str2.toLowerCase();
            }
          }
          if (str == null) {
            str = "";
          }
          return str;
        }
      }
    }
    const sortByResult = tmp9(12).sortBy(first1, G);
    cResult[3] = first1;
    cResult[4] = sortByResult;
    const tmp9Result = tmp9(12);
  } else {
    class G {
      constructor(arg0) {
        inviter = channelId.inviter;
        str = undefined;
        if (inviter != null) {
          str2 = inviter.username;
          if (str2 != null) {
            str = str2.toLowerCase();
          }
        }
        if (str == null) {
          str = "";
        }
        return str;
      }
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          tmp = closure_4(21);
          return;
        }
      }
      const items1 = [];
      cResult[6] = D;
      cResult[7] = items1;
      let tmp18 = items1;
    } else {
      class D {
        constructor() {
          tmp = closure_4(21);
          return;
        }
      }
      tmp18 = cResult[7];
    }
    const effect = noop.useEffect(D, tmp18);
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0) {
          return channelId.code;
        }
      }
      cResult[8] = P;
    } else {
      class P {
        constructor(arg0) {
          return channelId.code;
        }
      }
    }
    if (cResult[9] !== first1) {
      class P {
        constructor(arg0) {
          return channelId.code;
        }
      }
      cResult[9] = first1;
      cResult[10] = tmp22;
    } else {
      class P {
        constructor(arg0) {
          return channelId.code;
        }
      }
    }
    if (cResult[11] === first1.length) {
      class P {
        constructor(arg0) {
          return channelId.code;
        }
      }
    }
    if (tmp7) {
      class P {
        constructor(arg0) {
          return channelId.code;
        }
      }
      SceneLoadingIndicator = SceneLoadingIndicator(6726).SceneLoadingIndicator;
      let obj = {};
      let tmp24 = <SceneLoadingIndicator />;
    } else {
      class P {
        constructor(arg0) {
          return channelId.code;
        }
      }
      if (0 === first1.length) {
        class P {
          constructor(arg0) {
            return channelId.code;
          }
        }
        let obj4 = { lightSource: tmp9(10306), darkSource: tmp9(10307), title: null, body: null };
        const intl = SceneLoadingIndicator(1126).intl;
        obj4.title = intl.string(SceneLoadingIndicator(1126).t["+nLJkZ"]);
        const intl2 = SceneLoadingIndicator(1126).intl;
        obj4.body = intl2.string(SceneLoadingIndicator(1126).t.F53CAc);
        tmp24 = jsx(SceneLoadingIndicator(1200).EmptyState, { lightSource: tmp9(10306), darkSource: tmp9(10307), title: null, body: null });
      } else {
        class P {
          constructor(arg0) {
            return channelId.code;
          }
        }
        let obj5 = { style: tmp2.list, data: tmp13, keyExtractor: P, renderItem: tmp22, initialNumToRender: 10, windowSize: tmp12 };
        tmp24 = <closure_7 style={tmp2.list} data={tmp13} keyExtractor={P} renderItem={tmp22} initialNumToRender={10} windowSize={tmp12} />;
      }
    }
    first1 = first1.length;
    cResult[11] = first1;
    cResult[12] = tmp7;
    cResult[13] = tmp22;
    cResult[14] = tmp13;
    cResult[15] = tmp2;
    cResult[16] = tmp12;
    cResult[17] = tmp24;
  }
  const tmp4Result = _slicedToArray(noop.useState(21), 2);
}) : (function GroupDMInviteManagement(channelId) {
  channelId = channelId.channelId;
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  [first, dependencyMap] = noop.useState([]);
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  closure_3 = tmp3[1];
  first(5396)(() => {
    closure_0 = async function _fetchInvites2() {
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
          return { value: "IconComponent", done: "+51" };
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
              const obj4 = { url: closure_2_10.INSTANT_INVITES(closure_0), retries: 3, oldFormErrors: true, rejectWithError: true };
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
              return new closure_1_8(obj);
            });
            v1(closure_128_0);
            v3(false);
            v3 = 3;
            return { value: "IconComponent", done: "+51" };
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
  const tmp7 = _slicedToArray(noop.useState(21), 2);
  _slicedToArray = tmp7[1];
  const items = [first];
  const memo = noop.useMemo(() => _modDef12.sortBy(first, (inviter) => {
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
  const effect = noop.useEffect(() => {
    closure_4(21);
  }, []);
  [][0] = first;
  const callback = noop.useCallback((code) => code.code, []);
  if (tmp3[0]) {
    let tmp14 = jsx(channelId(6726).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    let obj2 = { lightSource: tmp4(10306), darkSource: tmp4(10307), title: null, body: null };
    const intl = channelId(1126).intl;
    obj2.title = intl.string(channelId(1126).t["+nLJkZ"]);
    const intl2 = channelId(1126).intl;
    obj2.body = intl2.string(channelId(1126).t.F53CAc);
    tmp14 = jsx(channelId(1200).EmptyState, { lightSource: tmp4(10306), darkSource: tmp4(10307), title: null, body: null });
  } else {
    let obj = { style: tmp.list, data: memo, keyExtractor: callback, renderItem: tmp11, initialNumToRender: 10, windowSize: tmp7[0] };
    tmp14 = <closure_7 style={tmp.list} data={memo} keyExtractor={callback} renderItem={tmp11} initialNumToRender={10} windowSize={tmp7[0]} />;
  }
  return tmp14;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMInviteManagementScreen(arg0) {
  const cResult = channelId(576).c(5);
  ({ channelId, onClose } = arg0);
  if (cResult[0] === channelId) {
    if (cResult[1] === onClose) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] !== tmp4) {
      const obj2 = { screens: tmp4, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT };
      const tmp8 = jsx(channelId(6687).Navigator, { screens: tmp4, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
      cResult[3] = tmp4;
      cResult[4] = tmp8;
      let tmp5 = tmp8;
    } else {
      tmp5 = cResult[4];
    }
    return tmp5;
  }
  const obj3 = {};
  const obj4 = { title: null, headerLeft: null, render: null, impressionName: null };
  const intl = channelId(1126).intl;
  obj4.title = intl.string(channelId(1126).t.OQ9MKu);
  const obj = channelId(576);
  obj4.headerLeft = channelId(6200).getHeaderCloseButton(onClose);
  obj4.render = function render() {
    return <closure_2_13 channelId={channelId} />;
  };
  obj4.impressionName = channelId(1273).ImpressionNames.GDM_SETTINGS_INVITES;
  obj3[constants.INSTANT_INVITES_MANAGEMENT] = obj4;
  cResult[0] = channelId;
  cResult[1] = onClose;
  cResult[2] = obj3;
  tmp4 = obj3;
  const tmpResult = channelId(6200);
}) : (function GroupDMInviteManagementScreen(channelId) {
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
      return <closure_2_13 channelId={channelId} />;
    };
    obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GDM_SETTINGS_INVITES;
    obj[constants.INSTANT_INVITES_MANAGEMENT] = obj2;
    return obj;
  }, items);
  return jsx(channelId(6687).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
}));