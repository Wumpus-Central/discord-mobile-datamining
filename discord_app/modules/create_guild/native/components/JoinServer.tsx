// === Module 12477: JoinServerContainer ===

// Module 12477 (JoinServerContainer)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 7762 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ CreateGuildModalStates: c5, NUXGuildTemplatesAnalytics: closure_6 } = NUXGuildTemplatesAnalytics);
createCacheKey = { flex: { flex: 1 }, contentContainer: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/create_guild/native/components/JoinServer.tsx");

export default function JoinServerContainer(initialRoute) {
  initialRoute = initialRoute.initialRoute;
  const onClose = initialRoute.onClose;
  const location = initialRoute.location;
  let first;
  let React;
  c5 = undefined;
  closure_6 = undefined;
  let navigation;
  const tmp2 = first(React.useState(""), 2);
  first = tmp2[0];
  React = tmp2[1];
  const tmp = callback();
  [tmp5, c5] = first(React.useState(false), 2);
  const tmp6 = first(React.useState(false), 2);
  closure_6 = tmp6[1];
  let obj = initialRoute(location[6]);
  navigation = obj.useNavigation();
  const items = [navigation, initialRoute, onClose];
  const layoutEffect = React.useLayoutEffect(() => {
    if (initialRoute === _undefined.JOIN_SERVER) {
      let headerCloseButton = initialRoute(location[7]).getHeaderCloseButton(() => {
        closure_1_0(closure_1_2[8]).trackNUFStep(closure_1_6.STEP_GUILD_JOIN, closure_1_6.STEP_FRIEND_LIST, { skip: true });
        callback();
      });
      const obj2 = initialRoute(location[7]);
    } else {
      headerCloseButton = initialRoute(location[7]).getHeaderBackButton(() => {
        callback();
      });
      const obj = initialRoute(location[7]);
    }
    navigation.setOptions({ headerLeft: headerCloseButton });
  }, items);
  obj = { top: true, left: true, right: true, style: items1, children: null };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  obj = { inviteString: first, error: null, submitting: null, onInviteChange: null, onDone: null };
  let stringResult = null;
  const tmp4 = first(React.useState(false), 2);
  if (tmp5) {
    const intl = tmp7(tmp8[11]).intl;
    stringResult = intl.string(tmp7(tmp8[11]).t.IRq5ah);
  }
  obj[1] = stringResult;
  obj[2] = tmp6[0];
  obj[3] = function onInviteChange(arg0) {
    callback(arg0);
  };
  obj[4] = function onDone(arg0) {
    const str = first.trim();
    if ("" !== str) {
      callback2(true);
      _undefined(false);
      const parts = str.split("/");
      let arr = parts.pop();
      let obj = onClose(location[12]);
      let str3 = location;
      if (location == null) {
        str3 = "Join Guild Modal";
      }
      const invite = obj.resolveInvite(arr, str3);
      invite.then(() => {
        callback(false);
      });
      obj = { code: null };
      obj[0] = arr;
      arr = navigation.push(_undefined.ACCEPT_INVITE, obj);
    } else {
      _undefined(true);
    }
  };
  obj[4] = navigation(onClose(location[10]), obj);
  return navigation(initialRoute(location[9]).SafeAreaPaddingView, obj);
};