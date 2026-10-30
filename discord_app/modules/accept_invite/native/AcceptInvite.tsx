// discord_app/modules/accept_invite/native/AcceptInvite.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import ImageLoaderUtils from "../../image_upload/ImageLoaderUtils.tsx";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import DeprecatedLayoutAnimation from "../../animations/native/DeprecatedLayoutAnimation.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import Card from "../../../design/components/Card/native/Card.native.tsx";
import _modDef14283 from "../../../../_runtime/metro/14283__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function getInviteState(invite) {
  let state1;
  if (invite != null) {
    state1 = invite.state;
  }
  let tmp2 = null == state1;
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
        const state = invite.state;
        if (InviteStates.RESOLVED !== state) {
          if (InviteStates.ACCEPTED !== state) {
            if (InviteStates.EXPIRED !== state) {
              if (InviteStates.BANNED !== state) {
                if (InviteStates.ERROR !== state) {
                  if (InviteStates.RESOLVING !== state) {
                    if (InviteStates.APP_NOT_OPENED !== state) {
                      if (InviteStates.APP_OPENED !== state) {
                        if (InviteStates.APP_OPENING !== state) {
                          if (InviteStates.ACCEPTING !== state) {
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
  const tmp = closure_10();
  const obj2 = { style: tmp.resolvingContainer, children: null };
  obj2.children = React6(hasOwnProperty, {
    color: useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT),
    size: "large",
  });
  return React6(timestampProducer, obj2);
}
function AcceptInviteCardComponent(invite) {
  invite = invite.invite;
  [first, dependencyMap] = noop.useState(getInviteState(invite));
  const items = [invite, first];
  const effect = noop.useEffect(() => {
    const tmp = getInviteState(invite);
    if (tmp !== first) {
      const result = DeprecatedLayoutAnimation.DeprecatedLayoutAnimation();
      closure_2(tmp);
    }
  }, items);
  if (null == invite) {
    return closure_8(InviteResolving, {});
  } else if (constants.DETAILS === first) {
    const obj2 = {};
    const merged = Object.assign(invite);
    obj2.invite = invite;
    return closure_8(first(14275), obj2);
  } else if (tmp22.ERROR === first) {
    let obj = {};
    const merged1 = Object.assign(invite);
    obj.invite = invite;
    return closure_8(first(14278), obj);
  } else {
    return closure_8(InviteResolving, {});
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: hasOwnProperty, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const InviteStates = fn(1072).InviteStates;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj2 = {
  parentContainer: {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: null,
  cardContainer: null,
  cardContent: null,
  resolvingContainer: null,
};
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.marginVertical = 0;
obj4.resizeMode = "cover";
obj2.imageStyle = obj4;
const obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  alignItems: "center",
  justifyContent: "center",
};
obj2.cardContainer = {
  position: "absolute",
  flex: 1,
  width: "90%",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.cardContent = { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" };
obj2.resolvingContainer = { padding: 64 };
let closure_10 = createStyles.createStyles(obj2);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  invite = invite.invite;
  const merged = Object.assign(invite, Object.assign({ invite: 0 }));
  const tmp2 = closure_10();
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
    let guildSplashSource = _modDef14283;
  } else {
    const obj2 = { id: null, splash: null, size: null };
    ({ id: obj3.id, splash: obj3.splash } = guild);
    const tmp3Result2 = AvatarUtilsDefault;
    obj2.size = width * ImageLoaderUtils.getDevicePixelRatio();
    guildSplashSource = tmp3Result2.getGuildSplashSource(obj2);
  }
  const obj5 = { style: null, children: null };
  const items = [tmp2.parentContainer, { height, width }];
  obj5.style = items;
  const obj6 = { style: { height, width }, children: null };
  const obj7 = { source: guildSplashSource, style: null };
  const items1 = [tmp2.imageStyle, { height, width }];
  obj7.style = items1;
  obj6.children = React6(FastImageDefault, obj7);
  const items2 = [React6(timestampProducer, obj6)];
  const obj8 = { style: tmp2.cardContainer, children: null };
  const obj9 = { style: tmp2.cardContent, children: null };
  const merged1 = Object.assign(merged);
  obj9.children = React6(AcceptInviteCardComponent, { invite });
  obj8.children = React6(timestampProducer, obj9);
  items2[1] = React6(Card.Card, obj8);
  obj5.children = items2;
  return React7(timestampProducer, obj5);
}
