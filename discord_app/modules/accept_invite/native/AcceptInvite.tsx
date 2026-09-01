// === Module 12255: getInviteState ===

// Module 12255 (getInviteState)
import ThemesDefault from "Themes" /* 712 */;
import handleImageLoad from "handleImageLoad" /* 1465 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1471 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import map from "map" /* 4197 */;
import PressableCard from "PressableCard" /* 5601 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { InviteStates } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
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
                            isDiscordFrontendDevelopment.assertNever(state);
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
  let obj = map;
  obj = { style: callback4().resolvingContainer, children: null };
  obj = { color: obj.useToken(ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  obj[1] = callback2(closure_5, obj);
  return callback2(closure_7, obj);
}
function AcceptInviteCardComponent(invite) {
  invite = invite.invite;
  let tmp = callback(React.useState(getInviteState(invite)), 2);
  const first = tmp[0];
  dependencyMap = tmp[1];
  const items = [invite, first];
  const effect = React.useEffect(() => {
    const tmp = closure_1_13(invite);
    if (tmp !== first) {
      const result = invite(5596).DeprecatedLayoutAnimation();
      dependencyMap(tmp);
      const obj = invite(5596);
    }
  }, items);
  if (null == invite) {
    return callback2(InviteResolving, {});
  } else if (constants.DETAILS === first) {
    let obj = {};
    const merged = Object.assign(invite);
    obj.invite = invite;
    return callback2(first(12256), obj);
  } else if (tmp22.ERROR === first) {
    obj = {};
    const merged1 = Object.assign(invite);
    obj.invite = invite;
    return callback2(first(12259), obj);
  } else {
    return callback2(InviteResolving, {});
  }
}
({ ActivityIndicator: c5, ImageBackground: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { parentContainer: null, imageStyle: null, cardContainer: null, cardContent: null, resolvingContainer: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: 0, resizeMode: "cover" };
createCacheKey[2] = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" };
createCacheKey[4] = { padding: 64 };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let closure_12 = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
const obj1 = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let result = require("set").fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  invite = invite.invite;
  const merged = Object.assign(invite, Object.create(null));
  const tmp2 = callback4();
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
    let guildSplashSource = tmp3(12264);
  } else {
    obj = { id: null, splash: null, size: null };
    ({ id: obj3[0], splash: obj3[1] } = guild);
    let obj3 = handleImageLoad;
    obj[2] = width * obj3.getDevicePixelRatio();
    guildSplashSource = tmp3(1431).getGuildSplashSource(obj);
    const tmp3Result = tmp3(1431);
  }
  obj = { style: items, children: null };
  items = [tmp2.parentContainer, { height, width }];
  const items1 = [callback2(closure_6, { source: guildSplashSource, imageStyle: tmp2.imageStyle, style: { height, width } }), ];
  const obj2 = { style: tmp2.cardContainer, children: null };
  obj3 = { style: tmp2.cardContent, children: null };
  const merged1 = Object.assign(merged);
  obj3[1] = callback2(AcceptInviteCardComponent, { invite });
  obj2[1] = callback2(closure_7, obj3);
  items1[1] = callback2(PressableCard.Card, obj2);
  obj[1] = items1;
  return callback3(closure_7, obj);
};