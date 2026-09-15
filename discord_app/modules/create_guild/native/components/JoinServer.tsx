// === Module 12850: components/JoinServer ===

// Module 12850 (components/JoinServer)
import NavigatorHeader from "NavigatorHeader" /* 5709 */;
import InstantInviteActionCreatorsDefault from "InstantInviteActionCreators" /* 8499 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const CreateGuildConstants = fn(7085);
({ CreateGuildModalStates: hasOwnProperty, NUXGuildTemplatesAnalytics: metroRequire } = CreateGuildConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = { flex: { flex: 1 }, contentContainer: { marginTop: fn(5767).NAV_BAR_HEIGHT } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/native/components/JoinServer.tsx");

export default function JoinServerContainer(initialRoute) {
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
  const navigation = initialRoute(location[6]).useNavigation();
  const items = [navigation, initialRoute, onClose];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (initialRoute === constants.JOIN_SERVER) {
      let headerCloseButton = NavigatorHeader.getHeaderCloseButton(() => {
        initialRoute(location[8]).trackNUFStep(constants.STEP_GUILD_JOIN, constants.STEP_FRIEND_LIST, { skip: true });
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
  const items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  rect.style = items1;
  let obj2 = { inviteString, error: null, submitting: null, onInviteChange: null, onDone: null };
  let stringResult = null;
  let obj = initialRoute(location[6]);
  if (tmp5) {
    const intl = tmp7(tmp8[11]).intl;
    stringResult = intl.string(tmp7(tmp8[11]).t.IRq5ah);
  }
  obj2.error = stringResult;
  obj2.submitting = tmp6[0];
  obj2.onInviteChange = function onInviteChange(arg0) {
    closure_4(arg0);
  };
  obj2.onDone = function onDone() {
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
  rect.children = navigation(onClose(location[10]), obj2);
  return navigation(initialRoute(location[9]).SafeAreaPaddingView, rect);
};