// discord_app/modules/create_guild/native/components/JoinServer.tsx
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import InstantInviteActionCreatorsDefault from "../../../../actions/InstantInviteActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const CreateGuildConstants = fn(6980);
({ CreateGuildModalStates: hasOwnProperty, NUXGuildTemplatesAnalytics: metroRequire } = CreateGuildConstants);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { flex: { flex: 1 }, contentContainer: null };
createStyles = { marginTop: fn(5682).NAV_BAR_HEIGHT };
createStyles.contentContainer = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
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
  let obj = initialRoute(location[6]);
  const navigation = obj.useNavigation();
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
  const items1 = [,];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  rect.style = items1;
  obj = { inviteString, error: null, submitting: null, onInviteChange: null, onDone: null };
  let stringResult = null;
  const tmp4 = inviteString(noop.useState(false), 2);
  if (tmp5) {
    const intl = tmp7(tmp8[11]).intl;
    stringResult = intl.string(tmp7(tmp8[11]).t.IRq5ah);
  }
  obj.error = stringResult;
  obj.submitting = tmp6[0];
  obj.onInviteChange = function onInviteChange(arg0) {
    closure_4(arg0);
  };
  obj.onDone = function onDone() {
    const str = first.trim();
    if ("" !== str) {
      closure_6(true);
      _undefined(false);
      const parts = str.split("/");
      let arr = parts.pop();
      let obj = InstantInviteActionCreatorsDefault;
      let str3 = location;
      if (location == null) {
        str3 = "Join Guild Modal";
      }
      const invite = obj.resolveInvite(arr, str3);
      invite.then(() => {
        closure_1_6(false);
      });
      obj = { code: arr };
      arr = navigation.push(constants.ACCEPT_INVITE, obj);
    } else {
      _undefined(true);
    }
  };
  rect.children = navigation(onClose(location[10]), obj);
  return navigation(initialRoute(location[9]).SafeAreaPaddingView, rect);
}
