// === Module 10768: GroupDMInviteManagementScreen ===

// Module 10768 (GroupDMInviteManagementScreen)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1275 */;
import useMountEffectDefault from "useMountEffect" /* 5245 */;
import NavigatorHeader from "NavigatorHeader" /* 6903 */;
import InstantInviteDefault from "InstantInvite" /* 10769 */;
import _modDef10787 from "module_10787" /* 10787 */;
import _modDef10788 from "module_10788" /* 10788 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import InviteRecord from "InviteRecord" /* 8827 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: metroRequire } = get_ActivityIndicator);
const ChannelSettingsStore = fn(10052);
const Constants = fn(1087);
({ ChannelSettingsSections: closure_8, Endpoints: closure_9 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4966);
let obj = { listContent: { paddingTop: nativeDefault.space.PX_8 } };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GroupDMInviteManagement(channelId) {
  let SceneLoadingIndicator = channelId;
  const cResult = channelId(576).c(13);
  channelId = channelId.channelId;
  const tmp2 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  let obj2 = channelId(576);
  [arr2, importDefault] = noop.useState(first);
  const tmp4 = _slicedToArray(noop.useState(first), 2);
  [tmp6, dependencyMap] = noop.useState(true);
  if (cResult[1] !== channelId) {
    const fn = function f() {
      closure_0 = asyncGeneratorStep(async () => {
        if (c3 === 2) {
          c3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c3 = 2;
            if (0 === v1) {
              if (arg0 === 1) {
                c3 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = undefined;
                const HTTP = tmp5(1297).HTTP;
                const obj4 = { url: closure_2_9.INSTANT_INVITES(tmp5), retries: 3, oldFormErrors: true, rejectWithError: true };
                v1 = 1;
                c3 = 1;
                const obj5 = { value: HTTP.get(obj4), done: false };
                return obj5;
              }
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
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
              tmp2(closure_128_0);
              v1(false);
              c3 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp13) {
            c3 = tmp;
            throw tmp13;
          }
        }
      });
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
        dependencyMap(false);
      });
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  useMountEffectDefault(tmp7);
  if (cResult[3] !== arr2) {
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class T {
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
      cResult[5] = T;
    } else {
      class T {
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
    const sortByResult = _modDef12.sortBy(arr2, T);
    cResult[3] = arr2;
    cResult[4] = sortByResult;
    const tmp8Result = _modDef12;
  } else {
    class T {
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
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          return channelId.code;
        }
      }
      cResult[6] = G;
    } else {
      class G {
        constructor(arg0) {
          return channelId.code;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor(arg0) {
          obj = { style: null, children: null };
          obj1 = { marginHorizontal: closure_1(closure_2[9]).space.PX_12 };
          obj.style = obj1;
          obj4 = {
            invite: channelId.item,
            onInviteRevoked(arg0) {
                      closure_0 = arg0;
                      return closure_1_1((arr) => arr.filter((code) => code.code !== code.code));
                    }
          };
          obj.children = jsx(closure_1(closure_2[15]), obj4);
          return jsx(View, obj);
        }
      }
      cResult[7] = F;
    } else {
      class F {
        constructor(arg0) {
          obj = { style: null, children: null };
          obj1 = { marginHorizontal: closure_1(closure_2[9]).space.PX_12 };
          obj.style = obj1;
          obj4 = {
            invite: channelId.item,
            onInviteRevoked(arg0) {
                      closure_0 = arg0;
                      return closure_1_1((arr) => arr.filter((code) => code.code !== code.code));
                    }
          };
          obj.children = jsx(closure_1(closure_2[15]), obj4);
          return jsx(View, obj);
        }
      }
    }
    if (cResult[8] === arr2) {
      class F {
        constructor(arg0) {
          obj = { style: null, children: null };
          obj1 = { marginHorizontal: closure_1(closure_2[9]).space.PX_12 };
          obj.style = obj1;
          obj4 = {
            invite: channelId.item,
            onInviteRevoked(arg0) {
                      closure_0 = arg0;
                      return closure_1_1((arr) => arr.filter((code) => code.code !== code.code));
                    }
          };
          obj.children = jsx(closure_1(closure_2[15]), obj4);
          return jsx(View, obj);
        }
      }
    }
    if (tmp6) {
      class F {
        constructor(arg0) {
          obj = { style: null, children: null };
          obj1 = { marginHorizontal: closure_1(closure_2[9]).space.PX_12 };
          obj.style = obj1;
          obj4 = {
            invite: channelId.item,
            onInviteRevoked(arg0) {
                      closure_0 = arg0;
                      return closure_1_1((arr) => arr.filter((code) => code.code !== code.code));
                    }
          };
          obj.children = jsx(closure_1(closure_2[15]), obj4);
          return jsx(View, obj);
        }
      }
      SceneLoadingIndicator = SceneLoadingIndicator(7113).SceneLoadingIndicator;
      let obj = {};
      let tmp16 = <SceneLoadingIndicator />;
    } else {
      class F {
        constructor(arg0) {
          obj = { style: null, children: null };
          obj1 = { marginHorizontal: closure_1(closure_2[9]).space.PX_12 };
          obj.style = obj1;
          obj4 = {
            invite: channelId.item,
            onInviteRevoked(arg0) {
                      closure_0 = arg0;
                      return closure_1_1((arr) => arr.filter((code) => code.code !== code.code));
                    }
          };
          obj.children = jsx(closure_1(closure_2[15]), obj4);
          return jsx(View, obj);
        }
      }
      if (0 === arr2.length) {
        class F {
          constructor(arg0) {
            obj = { style: null, children: null };
            obj1 = { marginHorizontal: closure_1(closure_2[9]).space.PX_12 };
            obj.style = obj1;
            obj4 = {
              invite: channelId.item,
              onInviteRevoked(arg0) {
                          closure_0 = arg0;
                          return closure_1_1((arr) => arr.filter((code) => code.code !== code.code));
                        }
            };
            obj.children = jsx(closure_1(closure_2[15]), obj4);
            return jsx(View, obj);
          }
        }
        let obj3 = { lightSource: _modDef10787, darkSource: _modDef10788, title: null, body: null };
        const intl = SceneLoadingIndicator(1128).intl;
        obj3.title = intl.string(SceneLoadingIndicator(1128).t["+nLJkZ"]);
        const intl2 = SceneLoadingIndicator(1128).intl;
        obj3.body = intl2.string(SceneLoadingIndicator(1128).t.F53CAc);
        tmp16 = jsx(SceneLoadingIndicator(1202).EmptyState, { lightSource: _modDef10787, darkSource: _modDef10788, title: null, body: null });
      } else {
        class F {
          constructor(arg0) {
            obj = { style: null, children: null };
            obj1 = { marginHorizontal: closure_1(closure_2[9]).space.PX_12 };
            obj.style = obj1;
            obj4 = {
              invite: channelId.item,
              onInviteRevoked(arg0) {
                          closure_0 = arg0;
                          return closure_1_1((arr) => arr.filter((code) => code.code !== code.code));
                        }
            };
            obj.children = jsx(closure_1(closure_2[15]), obj4);
            return jsx(View, obj);
          }
        }
        let obj4 = { contentContainerStyle: tmp2.listContent, data: tmp10, keyExtractor: G, renderItem: F };
        tmp16 = jsx(SceneLoadingIndicator(7199).FlashList, { contentContainerStyle: tmp2.listContent, data: tmp10, keyExtractor: G, renderItem: F });
      }
    }
    cResult[8] = arr2;
    cResult[9] = tmp6;
    cResult[10] = tmp10;
    cResult[11] = tmp2;
    cResult[12] = tmp16;
  }
  const tmp5 = _slicedToArray(noop.useState(true), 2);
}) : (function GroupDMInviteManagement(channelId) {
  channelId = channelId.channelId;
  first = undefined;
  dependencyMap = undefined;
  [first, dependencyMap] = noop.useState([]);
  const tmp3 = _slicedToArray(noop.useState(true), 2);
  closure_3 = tmp3[1];
  first(5245)(() => {
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
          return { value: "IconComponent", done: null };
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
              const HTTP = channelId(closure_2_2[12]).HTTP;
              const obj4 = { url: closure_2_9.INSTANT_INVITES(closure_0), retries: 3, oldFormErrors: true, rejectWithError: true };
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
            return { value: "IconComponent", done: null };
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
  const callback = noop.useCallback((code) => code.code, []);
  if (tmp3[0]) {
    let tmp12 = jsx(channelId(7113).SceneLoadingIndicator, {});
  } else if (0 === first.length) {
    let obj2 = { lightSource: tmp4(10787), darkSource: tmp4(10788), title: null, body: null };
    const intl = channelId(1128).intl;
    obj2.title = intl.string(channelId(1128).t["+nLJkZ"]);
    const intl2 = channelId(1128).intl;
    obj2.body = intl2.string(channelId(1128).t.F53CAc);
    tmp12 = jsx(channelId(1202).EmptyState, { lightSource: tmp4(10787), darkSource: tmp4(10788), title: null, body: null });
  } else {
    let obj = { contentContainerStyle: tmp.listContent, data: memo, keyExtractor: callback, renderItem: tmp9 };
    tmp12 = jsx(channelId(7199).FlashList, { contentContainerStyle: tmp.listContent, data: memo, keyExtractor: callback, renderItem: tmp9 });
  }
  return tmp12;
});
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
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
      const tmp8 = jsx(channelId(7074).Navigator, { screens: tmp4, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
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
  const intl = channelId(1128).intl;
  obj4.title = intl.string(channelId(1128).t.OQ9MKu);
  const obj = channelId(576);
  obj4.headerLeft = channelId(6903).getHeaderCloseButton(onClose);
  obj4.render = function render() {
    return <closure_2_12 channelId={channelId} />;
  };
  obj4.impressionName = channelId(1275).ImpressionNames.GDM_SETTINGS_INVITES;
  obj3[constants.INSTANT_INVITES_MANAGEMENT] = obj4;
  cResult[0] = channelId;
  cResult[1] = onClose;
  cResult[2] = obj3;
  tmp4 = obj3;
  const tmpResult = channelId(6903);
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
      return <closure_2_12 channelId={channelId} />;
    };
    obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GDM_SETTINGS_INVITES;
    obj[constants.INSTANT_INVITES_MANAGEMENT] = obj2;
    return obj;
  }, items);
  return jsx(channelId(7074).Navigator, { screens: memo, initialRouteName: constants.INSTANT_INVITES_MANAGEMENT });
}));