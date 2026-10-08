// discord_app/modules/create_guild/native/components/JoinServer.tsx
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import InstantInviteActionCreatorsDefault from "../../../../actions/InstantInviteActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const CreateGuildConstants = fn(6653);
({ CreateGuildModalStates: hasOwnProperty, NUXGuildTemplatesAnalytics: metroRequire } = CreateGuildConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { flex: { flex: 1 }, contentContainer: { marginTop: fn(6261).NAV_BAR_HEIGHT } };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = { marginTop: fn(6261).NAV_BAR_HEIGHT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/native/components/JoinServer.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function JoinServerContainer(initialRoute) {
      const cResult = initialRoute(_location[7]).c(23);
      initialRoute = initialRoute.initialRoute;
      const onClose = initialRoute.onClose;
      _location = initialRoute.location;
      const tmp4 = closure_8();
      const tmp5 = inviteString(noop.useState(""), 2);
      inviteString = tmp5[0];
      noop = tmp5[1];
      let obj = initialRoute(_location[7]);
      let obj2 = noop;
      [tmp8, closure_5] = inviteString(noop.useState(false), 2);
      const tmp7 = inviteString(noop.useState(false), 2);
      [tmp10, closure_6] = inviteString(noop.useState(false), 2);
      const tmp9 = inviteString(noop.useState(false), 2);
      const navigation = initialRoute(_location[8]).useNavigation();
      if (cResult[0] === initialRoute) {
        if (cResult[1] === navigation) {
          if (cResult[2] === onClose) {
            let tmp12 = cResult[3];
            let tmp13 = cResult[4];
          }
          const layoutEffect = obj2.useLayoutEffect(tmp12, tmp13);
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            function handleInviteChange(arg0) {
              closure_4(arg0);
            }
            cResult[5] = handleInviteChange;
            let tmp16 = handleInviteChange;
          } else {
            tmp16 = cResult[5];
          }
          if (cResult[6] === _location) {
            if (cResult[7] === navigation) {
              if (cResult[8] === inviteString) {
                let tmp17 = cResult[9];
              }
              if (cResult[10] === tmp4.contentContainer) {
                if (cResult[11] === tmp4.flex) {
                  let tmp18 = cResult[12];
                }
                if (cResult[13] !== tmp8) {
                  let stringResult = null;
                  if (tmp8) {
                    const intl = tmp(tmp2[12]).intl;
                    stringResult = intl.string(tmp(tmp2[12]).t.IRq5ah);
                  }
                  cResult[13] = tmp8;
                  cResult[14] = stringResult;
                  let tmp19 = stringResult;
                } else {
                  tmp19 = cResult[14];
                }
                if (cResult[15] === tmp17) {
                  if (cResult[16] === inviteString) {
                    if (cResult[17] === tmp10) {
                      if (cResult[18] === tmp19) {
                        let tmp21 = cResult[19];
                      }
                      if (cResult[20] === tmp18) {
                        if (cResult[21] === tmp21) {
                          let tmp25 = cResult[22];
                        }
                        return tmp25;
                      }
                      const rect = { top: true, left: true, right: true, style: tmp18, children: tmp21 };
                      const tmp27 = navigation(tmp(tmp2[14]).SafeAreaPaddingView, rect);
                      cResult[20] = tmp18;
                      cResult[21] = tmp21;
                      cResult[22] = tmp27;
                      tmp25 = tmp27;
                    }
                  }
                }
                const obj4 = { inviteString, error: tmp19, submitting: tmp10, onInviteChange: tmp16, onDone: tmp17 };
                const tmp24 = navigation(onClose(tmp2[13]), obj4);
                cResult[15] = tmp17;
                cResult[16] = inviteString;
                cResult[17] = tmp10;
                cResult[18] = tmp19;
                cResult[19] = tmp24;
                tmp21 = tmp24;
              }
              const items = [,];
              ({ flex: arr2[0], contentContainer: arr2[1] } = tmp4);
              cResult[10] = tmp4.contentContainer;
              cResult[11] = tmp4.flex;
              cResult[12] = items;
              tmp18 = items;
            }
          }
          function handleJoinServer() {
            const str = first.trim();
            if ("" !== str) {
              closure_1_6(true);
              closure_1_5(false);
              const parts = str.split("/");
              const arr = parts.pop();
              let str3 = _location;
              if (_location == null) {
                str3 = "Join Guild Modal";
              }
              const invite = InstantInviteActionCreatorsDefault.resolveInvite(arr, str3);
              invite.then(() => {
                closure_1_6(false);
              });
              const obj2 = { code: arr };
              navigation.push(constants.ACCEPT_INVITE, obj2);
            } else {
              closure_1_5(true);
            }
          }
          cResult[6] = _location;
          cResult[7] = navigation;
          cResult[8] = inviteString;
          cResult[9] = handleJoinServer;
          tmp17 = handleJoinServer;
        }
      }
      const fn = function f() {
        if (initialRoute === constants.JOIN_SERVER) {
          let headerCloseButton = NavigatorHeader.getHeaderCloseButton(() => {
            initialRoute(_location[10]).trackNUFStep(closure_2_6.STEP_GUILD_JOIN, closure_2_6.STEP_FRIEND_LIST, {
              skip: true,
            });
            onClose();
          });
        } else {
          headerCloseButton = NavigatorHeader.getHeaderBackButton(() => {
            onClose();
          });
        }
        navigation.setOptions({ headerLeft: headerCloseButton });
      };
      const items1 = [navigation, initialRoute, onClose];
      cResult[0] = initialRoute;
      cResult[1] = navigation;
      cResult[2] = onClose;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp13 = items1;
      tmp12 = fn;
    }
  : function JoinServerContainer(initialRoute) {
      initialRoute = initialRoute.initialRoute;
      const onClose = initialRoute.onClose;
      const location = initialRoute.location;
      let inviteString;
      noop = undefined;
      c5 = undefined;
      const tmp2 = inviteString(noop.useState(""), 2);
      inviteString = tmp2[0];
      noop = tmp2[1];
      const tmp = closure_8();
      [tmp5, c5] = inviteString(noop.useState(false), 2);
      const tmp6 = inviteString(noop.useState(false), 2);
      closure_6 = tmp6[1];
      const tmp4 = inviteString(noop.useState(false), 2);
      const navigation = initialRoute(location[8]).useNavigation();
      const items = [navigation, initialRoute, onClose];
      const layoutEffect = noop.useLayoutEffect(() => {
        if (initialRoute === constants.JOIN_SERVER) {
          let headerCloseButton = NavigatorHeader.getHeaderCloseButton(() => {
            initialRoute(location[10]).trackNUFStep(constants.STEP_GUILD_JOIN, constants.STEP_FRIEND_LIST, {
              skip: true,
            });
            onClose();
          });
        } else {
          headerCloseButton = NavigatorHeader.getHeaderBackButton(() => {
            onClose();
          });
        }
        navigation.setOptions({ headerLeft: headerCloseButton });
      }, items);
      const rect = { top: true, left: true, right: true, style: null, children: null };
      const items1 = [,];
      ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
      rect.style = items1;
      let obj2 = { inviteString, error: null, submitting: null, onInviteChange: null, onDone: null };
      let stringResult = null;
      let obj = initialRoute(location[8]);
      if (tmp5) {
        const intl = tmp7(tmp8[12]).intl;
        stringResult = intl.string(tmp7(tmp8[12]).t.IRq5ah);
      }
      obj2.error = stringResult;
      obj2.submitting = tmp6[0];
      obj2.onInviteChange = function handleInviteChange(arg0) {
        closure_4(arg0);
      };
      obj2.onDone = function handleJoinServer() {
        const str = first.trim();
        if ("" !== str) {
          closure_6(true);
          _undefined(false);
          const parts = str.split("/");
          const arr = parts.pop();
          let str3 = location;
          if (location == null) {
            str3 = "Join Guild Modal";
          }
          const invite = InstantInviteActionCreatorsDefault.resolveInvite(arr, str3);
          invite.then(() => {
            closure_1_6(false);
          });
          const obj2 = { code: arr };
          navigation.push(constants.ACCEPT_INVITE, obj2);
        } else {
          _undefined(true);
        }
      };
      rect.children = navigation(onClose(location[13]), obj2);
      return navigation(initialRoute(location[14]).SafeAreaPaddingView, rect);
    };
