// === Module 14963: AcceptInvite ===

// Module 14963 (AcceptInvite)
import nativeDefault from "native" /* 575 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1446 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5839 */;
import FastImageDefault from "FastImage" /* 5957 */;
import useEaseInEaseOutLayoutAnimationsDefault from "useEaseInEaseOutLayoutAnimations" /* 14964 */;
import InviteDetailsDefault from "InviteDetails" /* 14965 */;
import InviteErrorDefault from "InviteError" /* 14968 */;
import _modDef14973 from "module_14973" /* 14973 */;
import noop from "module_19" /* 19 */;

const module_1652 = _mod1652;

require = fn;
function InviteResolving() {
  const tmp = closure_8();
  const obj2 = { style: tmp.resolvingContainer, children: null };
  obj2.children = timestampProducer(React3, { color: useToken.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" });
  return timestampProducer(React4, obj2);
}
function AcceptInviteCardComponent(invite) {
  invite = invite.invite;
  const tmp = closure_8();
  let state1;
  ({ entering, exiting } = useEaseInEaseOutLayoutAnimationsDefault());
  if (invite != null) {
    state1 = invite.state;
  }
  let tmp6 = null == state1;
  if (tmp6) {
    let channel;
    if (invite != null) {
      channel = invite.channel;
    }
    tmp6 = null == channel;
  }
  if (null != invite) {
    if (null != invite.state) {
      if (!tmp6) {
        state = invite.state;
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
                  let LOADING = constants.LOADING;
                }
              }
            }
            LOADING = constants.ERROR;
          }
        }
        LOADING = constants.DETAILS;
      }
      let tmp14Result = timestampProducer(InviteResolving, {});
      if (null != invite) {
        if (LOADING === constants.DETAILS) {
          const obj2 = {};
          const merged = Object.assign(invite);
          obj2.invite = invite;
          tmp14Result = timestampProducer(InviteDetailsDefault, obj2);
          const tmp2Result = InviteDetailsDefault;
        }
        const obj3 = { style: tmp.cardState, entering, exiting, children: tmp14Result };
        return timestampProducer(module_1652.View, obj3, LOADING);
      }
      let tmp18 = null != invite;
      if (tmp18) {
        tmp18 = LOADING === constants.ERROR;
      }
      if (tmp18) {
        const obj4 = {};
        const merged1 = Object.assign(invite);
        obj4.invite = invite;
        tmp14Result = timestampProducer(InviteErrorDefault, obj4);
        const tmp2Result2 = InviteErrorDefault;
      }
    }
  }
  LOADING = constants.LOADING;
  const tmp4 = useEaseInEaseOutLayoutAnimationsDefault();
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const InviteStates = fn(1072).InviteStates;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let obj2 = { parentContainer: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" }, imageStyle: null, cardContainer: null, cardContent: null, cardState: null, resolvingContainer: null };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.marginVertical = 0;
obj4.resizeMode = "cover";
obj2.imageStyle = obj4;
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
obj2.cardContainer = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.cardContent = { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" };
obj2.cardState = { alignSelf: "stretch", alignItems: "center", justifyContent: "center" };
obj2.resolvingContainer = { padding: 64 };
let closure_8 = createStyles.createStyles(obj2);
let closure_9 = module_1652.createAnimatedComponent(fn(7381).Card);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  invite = invite.invite;
  const merged = Object.assign(invite, Object.assign({ invite: 0 }));
  const tmp2 = closure_8();
  ({ height, width } = useWindowDimensionsDefault());
  let obj = invite;
  if (invite == null) {
    obj = {};
  }
  guild = obj.guild;
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null == splash) {
    let guildSplashSource = _modDef14973;
  } else {
    const obj2 = { id: null, splash: null, size: null };
    ({ id: obj3.id, splash: obj3.splash } = guild);
    const tmp3Result2 = AvatarUtilsDefault;
    obj2.size = width * ImageLoaderUtils.getDevicePixelRatio();
    guildSplashSource = tmp3Result2.getGuildSplashSource(obj2);
  }
  const obj5 = { style: null, children: null };
  items = [tmp2.parentContainer, { height, width }];
  obj5.style = items;
  const obj6 = { style: { height, width }, children: null };
  const obj7 = { source: guildSplashSource, style: null };
  const items1 = [tmp2.imageStyle, { height, width }];
  obj7.style = items1;
  obj6.children = timestampProducer(FastImageDefault, obj7);
  const items2 = [timestampProducer(React4, obj6), ];
  const obj8 = { skipEntering: true, children: null };
  const obj9 = { style: tmp2.cardContainer, layout: useEaseInEaseOutLayoutAnimationsDefault().layout, children: null };
  const obj10 = { style: tmp2.cardContent, children: null };
  const merged1 = Object.assign(merged);
  obj10.children = timestampProducer(AcceptInviteCardComponent, { invite });
  obj9.children = timestampProducer(React4, obj10);
  obj8.children = timestampProducer(closure_9, obj9);
  items2[1] = timestampProducer(_mod1652.LayoutAnimationConfig, obj8);
  obj5.children = items2;
  return metroImportDefault(React4, obj5);
};