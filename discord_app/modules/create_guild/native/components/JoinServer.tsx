// === Module 12381: components/JoinServer ===

// Module 12381 (components/JoinServer)
import Fragment from "Fragment" /* 21 */;
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8054 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6468 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let initialRoute, navigation;

let hasOwnProperty;
let metroRequire;
let obj2;
let react = react_mod;
({ CreateGuildModalStates: hasOwnProperty, NUXGuildTemplatesAnalytics: metroRequire } = CreateGuildConstants);
const jsx = Fragment.jsx;
let obj = { flex: { flex: 1 }, contentContainer: obj2 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((initialRoute) => {
  let _location;
  let closure_4;
  let closure_5;
  let closure_6;
  let inviteString;
  let tmp10;
  let tmp8;
  let obj = initialRoute(_location[7]);
  const cResult = obj.c(23);
  initialRoute = initialRoute.initialRoute;
  const onClose = initialRoute.onClose;
  _location = initialRoute.location;
  const tmp4 = closure_8();
  let obj2 = react;
  const tmp5 = inviteString(react.useState(""), 2);
  inviteString = tmp5[0];
  react = tmp5[1];
  [tmp8, closure_5] = inviteString(react.useState(false), 2);
  inviteString(react.useState(false), 2);
  [tmp10, closure_6] = inviteString(react.useState(false), 2);
  inviteString(react.useState(false), 2);
  const obj3 = initialRoute(_location[8]);
  navigation = obj3.useNavigation();
  if (cResult[0] === initialRoute) {
    if (cResult[1] === navigation) {
      let tmp12;
      let tmp13;
      let tmp16;
      if (cResult[2] === onClose) {
        tmp12 = cResult[3];
        tmp13 = cResult[4];
      }
      const layoutEffect = obj2.useLayoutEffect(tmp12, tmp13);
      const _Symbol = Symbol;
      let str = "react.memo_cache_sentinel";
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function p(arg0) {
          closure_4(arg0);
        };
        cResult[5] = fn2;
        tmp16 = fn2;
      } else {
        tmp16 = cResult[5];
      }
      if (cResult[6] === _location) {
        if (cResult[7] === navigation) {
          let tmp17;
          if (cResult[8] === inviteString) {
            tmp17 = cResult[9];
          }
          if (cResult[10] === tmp4.contentContainer) {
            let tmp18;
            let tmp19;
            if (cResult[11] === tmp4.flex) {
              tmp18 = cResult[12];
            }
            if (cResult[13] !== tmp8) {
              let stringResult = null;
              if (tmp8) {
                const intl = tmp(tmp2[12]).intl;
                stringResult = intl.string(tmp(tmp2[12]).t.IRq5ah);
              }
              cResult[13] = tmp8;
              cResult[14] = stringResult;
              tmp19 = stringResult;
            } else {
              tmp19 = cResult[14];
            }
            if (cResult[15] === tmp17) {
              if (cResult[16] === inviteString) {
                if (cResult[17] === tmp10) {
                  let tmp21;
                  if (cResult[18] === tmp19) {
                    tmp21 = cResult[19];
                  }
                  if (cResult[20] === tmp18) {
                    let tmp25;
                    if (cResult[21] === tmp21) {
                      tmp25 = cResult[22];
                    }
                    return tmp25;
                  }
                  const rect = { top: true, left: true, right: true, style: tmp18, children: tmp21 };
                  const tmp27 = navigation(initialRoute(_location[14]).SafeAreaPaddingView, rect);
                  class V {
                    constructor() {
                      const str = first.trim();
                      if ("" !== str) {
                        closure_6(true);
                        closure_5(false);
                        const parts = str.split("/");
                        const arr = parts.pop();
                        let str3 = _location;
                        const resolveInvite = InstantInviteActionCreatorsDefault.resolveInvite;
                        InstantInviteActionCreatorsDefault;
                        if (_location == null) {
                          str3 = "Join Guild Modal";
                        }
                        const invite = resolveInvite(arr, str3);
                        invite.then(() => {
                          closure_1_6(false);
                        });
                        const obj = { code: arr };
                        navigation.push(hasOwnProperty.ACCEPT_INVITE, obj);
                      } else {
                        closure_5(true);
                      }
                    }
                  }
                  cResult[21] = tmp21;
                  cResult[22] = tmp27;
                  tmp25 = tmp27;
                }
              }
            }
            const obj4 = { inviteString, error: tmp19, submitting: null, onInviteChange: tmp16, onDone: tmp17 };
            class V {
              constructor() {
                const str = first.trim();
                if ("" !== str) {
                  closure_6(true);
                  closure_5(false);
                  const parts = str.split("/");
                  const arr = parts.pop();
                  let str3 = _location;
                  const resolveInvite = InstantInviteActionCreatorsDefault.resolveInvite;
                  InstantInviteActionCreatorsDefault;
                  if (_location == null) {
                    str3 = "Join Guild Modal";
                  }
                  const invite = resolveInvite(arr, str3);
                  invite.then(() => {
                    closure_1_6(false);
                  });
                  const obj = { code: arr };
                  navigation.push(hasOwnProperty.ACCEPT_INVITE, obj);
                } else {
                  closure_5(true);
                }
              }
            }
            const tmp24 = navigation(onClose(_location[13]), obj4);
            cResult[15] = tmp17;
            cResult[16] = inviteString;
            cResult[17] = tmp10;
            cResult[18] = tmp19;
            cResult[19] = tmp24;
            tmp21 = tmp24;
          }
          const items = [, ];
          ({ flex: arr2[0], contentContainer: arr2[1] } = tmp4);
          cResult[10] = tmp4.contentContainer;
          class V {
            constructor() {
              const str = first.trim();
              if ("" !== str) {
                closure_6(true);
                closure_5(false);
                const parts = str.split("/");
                const arr = parts.pop();
                let str3 = _location;
                const resolveInvite = InstantInviteActionCreatorsDefault.resolveInvite;
                InstantInviteActionCreatorsDefault;
                if (_location == null) {
                  str3 = "Join Guild Modal";
                }
                const invite = resolveInvite(arr, str3);
                invite.then(() => {
                  closure_1_6(false);
                });
                const obj = { code: arr };
                navigation.push(hasOwnProperty.ACCEPT_INVITE, obj);
              } else {
                closure_5(true);
              }
            }
          }
          cResult[12] = items;
          tmp18 = items;
        }
      }
      class V {
        constructor() {
          const str = first.trim();
          if ("" !== str) {
            closure_6(true);
            closure_5(false);
            const parts = str.split("/");
            const arr = parts.pop();
            let str3 = _location;
            const resolveInvite = InstantInviteActionCreatorsDefault.resolveInvite;
            InstantInviteActionCreatorsDefault;
            if (_location == null) {
              str3 = "Join Guild Modal";
            }
            const invite = resolveInvite(arr, str3);
            invite.then(() => {
              closure_1_6(false);
            });
            const obj = { code: arr };
            navigation.push(hasOwnProperty.ACCEPT_INVITE, obj);
          } else {
            closure_5(true);
          }
        }
      }
      cResult[6] = _location;
      cResult[7] = navigation;
      cResult[8] = inviteString;
      cResult[9] = V;
      tmp17 = V;
    }
  }
  const fn = function f() {
    let headerCloseButton;
    const setOptions = navigation.setOptions;
    if (initialRoute === hasOwnProperty.JOIN_SERVER) {
      const obj2 = NavigatorHeader;
      headerCloseButton = obj2.getHeaderCloseButton(() => {
        const obj = initialRoute(_location[10]);
        obj.trackNUFStep(constants.STEP_GUILD_JOIN, constants.STEP_FRIEND_LIST, { skip: true });
        onClose();
      });
    } else {
      let obj = NavigatorHeader;
      headerCloseButton = obj.getHeaderBackButton(() => {
        onClose();
      });
    }
    setOptions({ headerLeft: headerCloseButton });
  };
  const items1 = [navigation, initialRoute, onClose];
  cResult[0] = initialRoute;
  cResult[1] = navigation;
  cResult[2] = onClose;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp13 = items1;
  tmp12 = fn;
}) : ((initialRoute) => {
  let _undefined;
  let c5;
  let closure_4;
  let items1;
  let obj2;
  let stringResult;
  let tmp13;
  let tmp5;
  initialRoute = initialRoute.initialRoute;
  const onClose = initialRoute.onClose;
  const location = initialRoute.location;
  let inviteString;
  react = undefined;
  c5 = undefined;
  const tmp = closure_8();
  const tmp2 = inviteString(react.useState(""), 2);
  inviteString = tmp2[0];
  react = tmp2[1];
  [tmp5, c5] = inviteString(react.useState(false), 2);
  const tmp4 = inviteString(react.useState(false), 2);
  const tmp6 = inviteString(react.useState(false), 2);
  let closure_6 = tmp6[1];
  const first1 = tmp6[0];
  let obj = initialRoute(location[8]);
  navigation = obj.useNavigation();
  const items = [navigation, initialRoute, onClose];
  const layoutEffect = react.useLayoutEffect(() => {
    let headerCloseButton;
    const setOptions = navigation.setOptions;
    if (initialRoute === hasOwnProperty.JOIN_SERVER) {
      const obj2 = NavigatorHeader;
      headerCloseButton = obj2.getHeaderCloseButton(() => {
        const obj = initialRoute(location[10]);
        obj.trackNUFStep(constants.STEP_GUILD_JOIN, constants.STEP_FRIEND_LIST, { skip: true });
        onClose();
      });
    } else {
      let obj = NavigatorHeader;
      headerCloseButton = obj.getHeaderBackButton(() => {
        onClose();
      });
    }
    setOptions({ headerLeft: headerCloseButton });
  }, items);
  const rect = { top: true, left: true, right: true, style: items1, children: navigation(tmp13, obj2) };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  const SafeAreaPaddingView = initialRoute(location[14]).SafeAreaPaddingView;
  obj2 = {
    inviteString,
    error: stringResult,
    submitting: first1,
    onInviteChange(arg0) {
      closure_4(arg0);
    },
    onDone() {
      const str = first.trim();
      if ("" !== str) {
        closure_6(true);
        _undefined(false);
        const parts = str.split("/");
        const arr = parts.pop();
        let str3 = location;
        const resolveInvite = InstantInviteActionCreatorsDefault.resolveInvite;
        InstantInviteActionCreatorsDefault;
        if (location == null) {
          str3 = "Join Guild Modal";
        }
        const invite = resolveInvite(arr, str3);
        invite.then(() => {
          closure_1_6(false);
        });
        const obj = { code: arr };
        navigation.push(hasOwnProperty.ACCEPT_INVITE, obj);
      } else {
        _undefined(true);
      }
    }
  };
  stringResult = null;
  tmp13 = onClose(location[13]);
  if (tmp5) {
    const intl = tmp8(tmp9[12]).intl;
    stringResult = intl.string(tmp8(tmp9[12]).t.IRq5ah);
  }
  return navigation(SafeAreaPaddingView, rect);
});
const result = size.fileFinishedImporting("modules/create_guild/native/components/JoinServer.tsx");

export default tmp3;