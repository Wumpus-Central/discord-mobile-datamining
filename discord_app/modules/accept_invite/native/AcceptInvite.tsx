// discord_app/modules/accept_invite/native/AcceptInvite.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import get_ActivityIndicator from "set";
import { InviteStates } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { PressableCard } from "../../../design/components/Card/native/Card.native.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { isDiscordFrontendDevelopment } from "../../../utils/GlobalUtils.tsx";
import { handleImageLoad } from "../../image_upload/ImageLoaderUtils.tsx";
import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";

let c10;
let c5;
let c9;
let closure_6;
let error;
const require = arg1;
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
  obj = { style: createCacheKey().resolvingContainer, children: null };
  obj = { color: obj.useToken(Themes.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  obj[1] = callback2(closure_5, obj);
  return callback2(closure_7, obj);
}
function AcceptInviteCardComponent(invite) {
  invite = invite.invite;
  let tmp = callback(React.useState(getInviteState(invite)), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const items = [invite, first];
  const effect = React.useEffect(() => {
    const tmp = outer1_13(invite);
    if (tmp !== first) {
      const result = invite(5411).DeprecatedLayoutAnimation();
      dependencyMap(tmp);
      const obj = invite(5411);
    }
  }, items);
  if (null == invite) {
    return callback2(InviteResolving, {});
  } else if (constants.DETAILS === first) {
    let obj = {};
    const merged = Object.assign(invite);
    obj.invite = invite;
    return callback2(first(12136), obj);
  } else if (tmp22.ERROR === first) {
    obj = {};
    const merged1 = Object.assign(invite);
    obj.invite = invite;
    return callback2(first(12139), obj);
  } else {
    return callback2(InviteResolving, {});
  }
}
({ ActivityIndicator: c5, ImageBackground: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { parentContainer: null, imageStyle: null, cardContainer: null, cardContent: null, resolvingContainer: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginVertical: 0, resizeMode: "cover" };
createCacheKey[2] = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[3] = { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" };
createCacheKey[4] = { padding: 64 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let closure_12 = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
const obj1 = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  let height;
  let width;
  invite = invite.invite;
  const merged = Object.assign(invite, Object.create(null));
  const tmp2 = createCacheKey();
  ({ height, width } = useWindowDimensions());
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
    let guildSplashSource = tmp3(12144);
  } else {
    obj = { id: null, splash: null, size: null };
    ({ id: obj3[0], splash: obj3[1] } = guild);
    let obj3 = handleImageLoad;
    obj[2] = width * obj3.getDevicePixelRatio();
    guildSplashSource = tmp3(1435).getGuildSplashSource(obj);
    const tmp3Result = tmp3(1435);
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