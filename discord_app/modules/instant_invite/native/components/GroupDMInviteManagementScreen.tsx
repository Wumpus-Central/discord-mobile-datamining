// discord_app/modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import InviteRecord from "../../../../records/InviteRecord.tsx";
import ChannelSettingsStore from "../../../../stores/ChannelSettingsStore.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let catchPromise, dependencyMap, inviter;

let Platform;
let c10;
let c9;
let metroImportDefault;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ Platform, View: metroRequire, FlatList: metroImportDefault } = react_native);
({ ChannelSettingsSections: c9, Endpoints: c10 } = Constants);
const jsx = Fragment.jsx;
let closure_12 = createStyles.createStyles({ list: { paddingTop: 8 } });
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let closure_2;
      let first;
      let first1;
      let tmp14;
      let tmp20;
      let tmp26;
      let tmp9;
      const tmp = channelId;
      let tmp2 = dependencyMap;
      let obj = channelId(576);
      const cResult = obj.c(18);
      channelId = channelId.channelId;
      let tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      [first1, dependencyMap] = react.useState(first);
      [tmp9, _asyncToGenerator] = _slicedToArray(react.useState(true), 2);
      const tmp8 = _slicedToArray(react.useState(true), 2);
      if (cResult[1] !== channelId) {
        class T {
          constructor() {
            closure_0 = closure_3(function () {
              /* body not rendered: F152268 */
            });
            promise = (function fetchInvites() {
              /* body not rendered: F152269 */
            })();
            catchPromise = promise.catch(() => {
              /* body not rendered: F140619 */
            });
            return;
          }
        }
        cResult[1] = channelId;
        cResult[2] = T;
      } else {
        class T {
          constructor() {
            closure_0 = closure_3(function () {
              /* body not rendered: F152268 */
            });
            promise = (function fetchInvites() {
              /* body not rendered: F152269 */
            })();
            catchPromise = promise.catch(() => {
              /* body not rendered: F140619 */
            });
            return;
          }
        }
      }
      const tmp12 = first1(5590)(T);
      const tmp6Result = _slicedToArray(react.useState(21), 2);
      [tmp14, _slicedToArray] = tmp6Result;
      if (cResult[3] !== first1) {
        class T {
          constructor() {
            closure_0 = closure_3(function () {
              /* body not rendered: F152268 */
            });
            promise = (function fetchInvites() {
              /* body not rendered: F152269 */
            })();
            catchPromise = promise.catch(() => {
              /* body not rendered: F140619 */
            });
            return;
          }
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class T {
            constructor() {
              closure_0 = closure_3(function () {
                /* body not rendered: F152268 */
              });
              promise = (function fetchInvites() {
                /* body not rendered: F152269 */
              })();
              catchPromise = promise.catch(() => {
                /* body not rendered: F140619 */
              });
              return;
            }
          }
          cResult[5] = tmp17;
        } else {
          class T {
            constructor() {
              closure_0 = closure_3(function () {
                /* body not rendered: F152268 */
              });
              promise = (function fetchInvites() {
                /* body not rendered: F152269 */
              })();
              catchPromise = promise.catch(() => {
                /* body not rendered: F140619 */
              });
              return;
            }
          }
        }
        const tmp11Result = first1(12);
        cResult[3] = first1;
        cResult[4] = tmp11Result.sortBy(first1, tmp17);
        const sortByResult = tmp11Result.sortBy(first1, tmp17);
      } else {
        class T {
          constructor() {
            closure_0 = closure_3(function () {
              /* body not rendered: F152268 */
            });
            promise = (function fetchInvites() {
              /* body not rendered: F152269 */
            })();
            catchPromise = promise.catch(() => {
              /* body not rendered: F140619 */
            });
            return;
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            tmp = closure_4(21);
            return;
          }
        }
        const items1 = [];
        cResult[6] = F;
        cResult[7] = items1;
        tmp20 = items1;
      } else {
        class F {
          constructor() {
            tmp = closure_4(21);
            return;
          }
        }
        tmp20 = cResult[7];
      }
      const effect = react.useEffect(F, tmp20);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
        cResult[8] = H;
      } else {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
      }
      if (cResult[9] !== first1) {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
        cResult[9] = first1;
        cResult[10] = tmp24;
      } else {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
      }
      if (cResult[11] === first1.length) {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
      }
      if (tmp9) {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
        tmp26 = jsx(tmp(6535).SceneLoadingIndicator, {});
      } else {
        class H {
          constructor(arg0) {
            return channelId.code;
          }
        }
        if (0 === first1.length) {
          class H {
            constructor(arg0) {
              return channelId.code;
            }
          }
          const EmptyState = tmp(1188).EmptyState;
          const intl = tmp(1126).intl;
          const intl2 = tmp(1126).intl;
          tmp26 = (
            <EmptyState
              lightSource={tmp11(10687)}
              darkSource={tmp11(10688)}
              title={intl.string(tmp(1126).t["+nLJkZ"])}
              body={intl2.string(tmp(1126).t.F53CAc)}
            />
          );
        } else {
          class H {
            constructor(arg0) {
              return channelId.code;
            }
          }
          tmp26 = (
            <closure_7
              style={tmp4.list}
              data={tmp15}
              keyExtractor={H}
              renderItem={tmp24}
              initialNumToRender={10}
              windowSize={tmp14}
            />
          );
        }
      }
      cResult[11] = first1.length;
      cResult[12] = tmp9;
      cResult[13] = tmp24;
      cResult[14] = tmp15;
      cResult[15] = tmp4;
      cResult[16] = tmp14;
      cResult[17] = tmp26;
    }
  : (channelId) => {
      let closure_2;
      let closure_3;
      let closure_4;
      let first;
      let first1;
      let first2;
      let tmp16;
      channelId = channelId.channelId;
      first = undefined;
      dependencyMap = undefined;
      closure_3 = undefined;
      _slicedToArray = undefined;
      const tmp = closure_12();
      [first, dependencyMap] = react.useState([]);
      [first1, closure_3] = react.useState(true);
      first(5590)(() => {
        function fetchInvites() {
          return obj(...arguments);
        }
        let obj = function _fetchInvites2() {
          obj = _asyncToGenerator(async () => {
            let v1;
            let v3;
            if (v3 === 2) {
              v3 = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
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
                let closure_0;
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
                    let closure_1 = tmp;
                    closure_0 = undefined;
                    const HTTP = closure_2_0(closure_2_2[11]).HTTP;
                    const obj4 = {
                      url: closure_2_10.INSTANT_INVITES(closure_0),
                      retries: 3,
                      oldFormErrors: true,
                      rejectWithError: true,
                    };
                    const get = HTTP.get;
                    v1 = 1;
                    v3 = 1;
                    const obj5 = { value: get(obj4), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  v3 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  v3 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  const body = value.body;
                  closure_0 = body.map((item) => {
                    obj = {};
                    const merged = Object.assign(item);
                    ({ max_uses: obj.maxUses, max_age: obj.maxAge, created_at: obj.createdAt } = item);
                    const tmp2 = new closure_1_8(obj);
                    return tmp2;
                  });
                  v1(closure_0);
                  v3(false);
                  v3 = 3;
                  return { value: "IconComponent", done: null };
                }
              } catch (tmp12) {
                v3 = 3;
                throw tmp12;
              }
            }
          });
          return obj(...arguments);
        };
        const promise = fetchInvites();
        promise.catch(() => {
          closure_1_3(false);
        });
      });
      [first2, _slicedToArray] = react.useState(21);
      const items = [first];
      const memo = react.useMemo(() => {
        const obj = _modDef12;
        return obj.sortBy(first, (inviter) => {
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
        });
      }, items);
      const effect = react.useEffect(() => {
        closure_4(21);
      }, []);
      [][0] = first;
      const callback = react.useCallback((code) => code.code, []);
      if (first1) {
        tmp16 = jsx(channelId(6535).SceneLoadingIndicator, {});
      } else if (0 === first.length) {
        const EmptyState = channelId(1188).EmptyState;
        const intl = channelId(1126).intl;
        const intl2 = channelId(1126).intl;
        tmp16 = (
          <EmptyState
            lightSource={tmp5(10687)}
            darkSource={tmp5(10688)}
            title={intl.string(channelId(1126).t["+nLJkZ"])}
            body={intl2.string(channelId(1126).t.F53CAc)}
          />
        );
      } else {
        tmp16 = (
          <closure_7
            style={tmp.list}
            data={memo}
            keyExtractor={callback}
            renderItem={tmp13}
            initialNumToRender={10}
            windowSize={first2}
          />
        );
      }
      return tmp16;
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function GroupDMInviteManagementScreen(arg0) {
        let channelId;
        let intl;
        let onClose;
        let tmpResult;
        const obj = channelId(576);
        const cResult = obj.c(5);
        ({ channelId, onClose } = arg0);
        if (cResult[0] === channelId) {
          let tmp4;
          let tmp5;
          if (cResult[1] === onClose) {
            tmp4 = cResult[2];
          }
          if (cResult[3] !== tmp4) {
            const tmp8 = jsx(channelId(6496).Navigator, {
              screens: tmp4,
              initialRouteName: constants.INSTANT_INVITES_MANAGEMENT,
            });
            cResult[3] = tmp4;
            cResult[4] = tmp8;
            tmp5 = tmp8;
          } else {
            tmp5 = cResult[4];
          }
          return tmp5;
        }
        const obj3 = {};
        const INSTANT_INVITES_MANAGEMENT = constants.INSTANT_INVITES_MANAGEMENT;
        const obj4 = {
          title: intl.string(channelId(1126).t.OQ9MKu),
          headerLeft: tmpResult.getHeaderCloseButton(onClose),
          render() {
            const obj = { channelId };
            return closure_2_11(closure_2_13, obj);
          },
          impressionName: channelId(1260).ImpressionNames.GDM_SETTINGS_INVITES,
        };
        intl = channelId(1126).intl;
        obj3[INSTANT_INVITES_MANAGEMENT] = obj4;
        cResult[0] = channelId;
        cResult[1] = onClose;
        cResult[2] = obj3;
        tmp4 = obj3;
        tmpResult = channelId(6010);
      }
    : function GroupDMInviteManagementScreen(channelId) {
        channelId = channelId.channelId;
        const onClose = channelId.onClose;
        const items = [channelId, onClose];
        const memo = react.useMemo(() => {
          let intl;
          let obj3;
          let closure_0 = channelId;
          let obj = {};
          const INSTANT_INVITES_MANAGEMENT = constants.INSTANT_INVITES_MANAGEMENT;
          const obj2 = {
            title: intl.string(intl3.t.OQ9MKu),
            headerLeft: obj3.getHeaderCloseButton(onClose),
            render() {
              const obj = { channelId };
              return closure_2_11(closure_2_13, obj);
            },
            impressionName: discord_common_AnalyticsUtils.ImpressionNames.GDM_SETTINGS_INVITES,
          };
          intl = intl3.intl;
          obj[INSTANT_INVITES_MANAGEMENT] = obj2;
          obj3 = NavigatorHeader;
          return obj;
        }, items);
        return jsx(channelId(6496).Navigator, {
          screens: memo,
          initialRouteName: constants.INSTANT_INVITES_MANAGEMENT,
        });
      },
);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/GroupDMInviteManagementScreen.tsx");

export default memoResult;
