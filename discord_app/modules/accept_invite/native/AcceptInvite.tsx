// === Module 12717: AcceptInvite ===

// Module 12717 (AcceptInvite)
import nativeDefault from "native" /* 576 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1430 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import useToken from "useToken" /* 4262 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5581 */;
import Card from "Card" /* 5607 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function getInviteState(invite) {
  let state;
  if (invite != null) {
    state = invite.state;
  }
  let tmp2 = null == state;
  if (tmp2) {
    let channel;
    if (invite != null) {
      channel = invite.channel;
    }
    tmp2 = null == channel;
  }
  if (null != invite) {
    if (null != invite.state) {
      if (!tmp2) {
        state = invite.state;
        if (InviteStates.RESOLVED !== state) {
          if (tmp4.ACCEPTED !== state) {
            if (tmp4.EXPIRED !== state) {
              if (tmp4.BANNED !== state) {
                if (tmp4.ERROR !== state) {
                  if (tmp4.RESOLVING !== state) {
                    if (tmp4.APP_NOT_OPENED !== state) {
                      if (tmp4.APP_OPENED !== state) {
                        if (tmp4.APP_OPENING !== state) {
                          if (tmp4.ACCEPTING !== state) {
                            GlobalUtils.assertNever(state);
                          }
                        }
                      }
                    }
                  }
                  return constants.LOADING;
                }
              }
            }
            return constants.ERROR;
          }
        }
        return constants.DETAILS;
      }
    }
  }
  return constants.LOADING;
}
function InviteResolving() {
  let obj = { style: closure_11().resolvingContainer, children: null };
  obj = { color: obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  obj.children = React7(hasOwnProperty, obj);
  return React7(React5, obj);
}
function AcceptInviteCardComponent(invite) {
  invite = invite.invite;
  let tmp = _slicedToArray(noop.useState(getInviteState(invite)), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [invite, first];
  const effect = noop.useEffect(() => {
    const tmp = getInviteState(invite);
    if (tmp !== first) {
      const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
      closure_2(tmp);
    }
  }, items);
  if (null == invite) {
    return closure_9(InviteResolving, {});
  } else if (constants.DETAILS === first) {
    let obj = {};
    const merged = Object.assign(invite);
    obj.invite = invite;
    return closure_9(first(12718), obj);
  } else if (tmp22.ERROR === first) {
    obj = {};
    const merged1 = Object.assign(invite);
    obj.invite = invite;
    return closure_9(first(12721), obj);
  } else {
    return closure_9(InviteResolving, {});
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, ImageBackground: metroRequire, View: closure_7 } = get_ActivityIndicator);
const InviteStates = fn(1074).InviteStates;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { parentContainer: null, imageStyle: null, cardContainer: null, cardContent: null, resolvingContainer: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles.parentContainer = createStyles;
createStyles.imageStyle = { marginVertical: 0, resizeMode: "cover" };
createStyles.cardContainer = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles.cardContent = { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" };
createStyles.resolvingContainer = { padding: 64 };
let closure_11 = createStyles.createStyles(createStyles);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  invite = invite.invite;
  const merged = Object.assign(invite, Object.assign({ invite: 0 }));
  const tmp2 = closure_11();
  ({ height, width } = useWindowDimensionsDefault());
  let obj = invite;
  if (invite == null) {
    obj = {};
  }
  const guild = obj.guild;
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null == splash) {
    let guildSplashSource = tmp3(12726);
  } else {
    obj = { id: null, splash: null, size: null };
    ({ id: obj3.id, splash: obj3.splash } = guild);
    let obj3 = ImageLoaderUtils;
    obj.size = width * obj3.getDevicePixelRatio();
    guildSplashSource = tmp3(1396).getGuildSplashSource(obj);
    const tmp3Result = tmp3(1396);
  }
  obj = { style: null, children: null };
  const items = [tmp2.parentContainer, { height, width }];
  obj.style = items;
  const items1 = [React7(timestampProducer, { source: guildSplashSource, imageStyle: tmp2.imageStyle, style: { height, width } }), ];
  const obj2 = { style: tmp2.cardContainer, children: null };
  obj3 = { style: tmp2.cardContent, children: null };
  const merged1 = Object.assign(merged);
  obj3.children = React7(AcceptInviteCardComponent, { invite });
  obj2.children = React7(React5, obj3);
  items1[1] = React7(Card.Card, obj2);
  obj.children = items1;
  return closure_1_10(React5, obj);
};