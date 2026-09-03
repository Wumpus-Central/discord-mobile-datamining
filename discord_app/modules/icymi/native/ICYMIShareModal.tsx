// discord_app/modules/icymi/native/ICYMIShareModal.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import SHARE_EVENT_DETAILS_LINK from "../../guild_scheduled_events/utils/ShareEventUtils.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/ChannelStore.tsx";
import { DraftType } from "../../../stores/DraftStore.tsx";
import closure_9 from "../../../stores/UploadAttachmentStore.tsx";
import { AbortCodes } from "../../../Constants.tsx";
import { UserRowModes } from "../../main_tabs_v2/native/shared_components/user_list/UserRowConstants.tsx";
import { MessageSendLocation } from "../../messages/MessageConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function Screenshot(setUri) {
  setUri = setUri.setUri;
  let ref;
  const tmp = callback5();
  ref = React.useRef(null);
  const items = [setUri];
  const effect = React.useEffect(() => {
    const timerId = setTimeout(() => {
      const current = ref.current;
      let nextPromise;
      if (current != null) {
        const capture = current.capture;
        if (capture != null) {
          nextPromise = capture().then((arg0) => {
            callback(arg0);
          });
          const captureResult = capture();
        }
      }
      return nextPromise;
    }, 500);
  }, items);
  let obj = setUri(7627);
  obj = { style: { position: "absolute", top: -1000, overflow: "hidden" }, children: null };
  obj = { style: items1, children: null };
  items1 = [tmp.preview, { width: ref(1492)().width }];
  const clientThemesOverride = obj.useClientThemesOverride();
  obj1 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: null };
  const obj2 = { style: tmp.base, children: null };
  const tmp4 = ref(4328)();
  const obj3 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
  const obj4 = { dark: null, light: null };
  const tmp6 = ref(16342);
  obj4[0] = setUri(4296).OverlayOpacity.LEVEL_7;
  obj4[1] = setUri(4296).OverlayOpacity.LEVEL_8;
  obj3[4] = obj4;
  const items2 = [callback3(ref(5079), obj3), ];
  const obj5 = { gradient: tmp4, children: null };
  const tmp7 = ref(5079);
  const items3 = [tmp.contentContainer, clientThemesOverride];
  obj5[1] = callback3(View, { style: items3, children: setUri.render() });
  items2[1] = callback3(setUri(4204).ThemeContextProvider, obj5);
  obj2[1] = items2;
  obj1[2] = callback4(View, obj2);
  obj[1] = callback3(tmp6, obj1);
  obj[1] = callback3(View, obj);
  return callback3(View, obj);
}
function GravityShareFooter(arg0) {
  ({ count, isSending, onSend } = arg0);
  importDefault = undefined;
  let first;
  let insets;
  const tmp = callback5();
  importDefault = tmp;
  const tmp2 = insets(React.useState(""), 2);
  first = tmp2[0];
  insets = importDefault(first[24])({ includeKeyboardHeight: true }).insets;
  let obj = onSend(first[25]);
  const shareChatInputActions = obj.useShareChatInputActions(tmp4);
  let items = [first, onSend];
  ({ textInputRef, handleSelectionChange, handleMessageFocus, handleMessageBlur, handlePressEmoji } = shareChatInputActions);
  const callback = React.useCallback(() => {
    onSend(first);
  }, items);
  if (count <= 1) {
    const intl2 = tmp7(tmp6[14]).intl;
    let stringResult = intl2.string(tmp7(tmp6[14]).t.TXNS7S);
  } else {
    const intl = tmp7(tmp6[14]).intl;
    obj = { count: null };
    obj[0] = count;
    stringResult = intl.formatToPlainString(tmp7(tmp6[14]).t.jWtYUm, obj);
  }
  const items1 = [tmp.footer, insets.bottom];
  let tmp14Result = null;
  if (0 !== count) {
    obj = { style: null, children: null };
    obj[0] = tmp11;
    obj1 = { inputRef: null, text: null, onChange: null, onSelectionChange: null, onFocus: null, onBlur: null, onPressEmoji: null, onSend: null, disabled: null };
    obj1[0] = textInputRef;
    obj1[1] = first;
    obj1[2] = tmp4;
    obj1[3] = handleSelectionChange;
    obj1[4] = handleMessageFocus;
    obj1[5] = handleMessageBlur;
    obj1[6] = handlePressEmoji;
    obj1[7] = callback;
    obj1[8] = isSending;
    const items2 = [callback3(importDefault(tmp6[26]), obj1), ];
    const obj2 = { variant: "primary", size: "md", text: null, disabled: null, onPress: null, loading: null };
    obj2[2] = stringResult;
    obj2[3] = tmp12;
    let tmp17;
    if (!isSending) {
      tmp17 = callback;
    }
    obj2[4] = tmp17;
    obj2[5] = isSending;
    items2[1] = callback3(tmp7(tmp6[27]).Button, obj2);
    obj[1] = items2;
    tmp14Result = closure_14(View, obj);
    const tmp14 = closure_14;
    const tmp15 = View;
    const tmp16 = callback3;
  }
  return tmp14Result;
}
class ICYMIShareModal {
  constructor(arg0) {
    title = global.title;
    ({ linkText, render } = global);
    ({ forwardToChannel, onShare } = global);
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_9 = undefined;
    height = undefined;
    _handleSendForwards = function _handleSendForwards() {
      let self = this;
      const tmp = closure_1_4((arg0) => {
        closure_0 = arg0;
        c3 = 0;
        c4 = 0;
        return (function*(arg0, arr) {
          if (v0 === 2) {
            v0 = 3;
            HermesBuiltin.throwTypeError();
          } else if (tmp5 === 3) {
            if (arg0 === 1) {
              throw arr;
            } else if (arg0 === 2) {
              let obj = { value: null, done: true };
              obj[0] = arr;
              return obj;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              v0 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  v0 = 3;
                  throw arr;
                } else if (arg0 === 2) {
                  v0 = 3;
                  obj = { value: null, done: true };
                  obj[0] = arr;
                  return obj;
                } else {
                  closure_2 = tmp2;
                  closure_1 = tmp3;
                  closure_1_6(true);
                  let tmp8 = null == closure_1_2;
                  if (!tmp8) {
                    tmp8 = null != closure_1_7;
                  }
                  if (tmp8) {
                    c3 = 1;
                    v0 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = Promise.all(closure_1_5.map(callback(closure_1_2[29]).getOrResolveChannelIdFromDestinationId));
                    return obj1;
                  } else {
                    v0 = 3;
                  }
                }
              } else if (arg0 === 1) {
                v0 = 3;
                throw arr;
              } else if (arg0 !== 2) {
                const mapped = arr.map((arg0) => channel.getChannel(arg0));
                const found = mapped.filter(callback(closure_1_2[30]).isNotNullish);
                const item = found.forEach((() => {
                  closure_0 = v3((arg0) => {
                    closure_0 = arg0;
                    c2 = 0;
                    c1 = 0;
                    return (/* F125291 */ function*() { ... })();
                  });
                  return function(arg0) {
                    const self = this;
                    const apply = closure_0.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                })());
                closure_1_1(closure_1_2[28]).pop();
                if (null != v0) {
                  v0();
                }
                const arr3 = closure_1_1(closure_1_2[28]);
              }
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arr;
              return obj;
            } catch (tmp13) {
              v0 = tmp;
              throw tmp13;
            }
          }
        })();
      });
      closure_8 = tmp;
      let apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp = forwardToChannel(closure_5.useState([]), 2);
    first = tmp[0];
    closure_5 = first;
    tmp2 = forwardToChannel(closure_5.useState(false), 2);
    closure_6 = tmp2[1];
    tmp3 = forwardToChannel(closure_5.useState(null), 2);
    [closure_7, tmp4] = tmp3;
    callback = closure_5.useCallback(() => {
      let arr = callback(render[28]);
      arr = arr.pop();
    }, []);
    tmp6 = closure_15();
    tmp7 = linkText;
    tmp8 = render;
    rect = require("useSafeAreaInsets")();
    closure_9 = rect;
    height = require("useWindowDimensions")().height;
    items = [, ];
    items[0] = rect.bottom;
    items[1] = height;
    obj = {
      style: closure_5.useMemo(() => {
            height = "100%";
            if (obj.isAndroid()) {
              height = height + rect.bottom;
            }
            return { height };
          }, items),
      children: null
    };
    tmp11 = jsx;
    tmp9 = jsxs;
    tmp10 = closure_6;
    tmp12 = title;
    obj = {
      title,
      headerTitle() {
            return closure_1_13(title(render[40]).GenericHeaderTitle, { title });
          },
      headerTitleAlign: "center",
      headerStatusBarHeight: null,
      headerLeft: null,
      headerLeftContainerStyle: null,
      headerRightContainerStyle: null
    };
    obj3 = require("set");
    num = 0;
    if (!obj3.isIOS()) {
      num = rect.top;
    }
    obj[3] = num + require("Themes").space.PX_8;
    tmp12Result = require("HeaderBackImage");
    obj[4] = tmp12Result.getHeaderCloseButton(callback);
    ({ headerLeftContainer: obj2[5], headerRightContainer: obj2[6] } = tmp6);
    items1 = [, , , ];
    items1[0] = tmp11(require("Background").Header, obj);
    tmp11Result = null != render;
    if (tmp11Result) {
      tmp14 = Screenshot;
      obj1 = { render: null, setUri: null };
      obj1[0] = render;
      obj1[1] = tmp4;
      tmp11Result = tmp11(Screenshot, obj1);
    }
    items1[1] = tmp11Result;
    obj2 = { rowMode: UserRowModes.TOGGLE, onSelectedDestinationChange: tmp[1], originDestination: global.originDestinationId, insetEnd: null, disableGradient: true, disableStickySections: true };
    tmp7Result = require("SearchableDestinationList");
    sum = rect.bottom + require("Themes").space.PX_8;
    obj2[3] = sum + require("Themes").space.PX_96;
    items1[2] = tmp11(tmp7Result, obj2);
    obj3 = {
      count: first.length,
      isSending: tmp2[0],
      onSend: function handleSendForwards(arg0) {
            const self = this;
            const apply = _handleSendForwards.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          }
    };
    items1[3] = tmp11(GravityShareFooter, obj3);
    obj[1] = items1;
    return tmp9(tmp10, obj);
  }
}
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { headerLeftContainer: null, headerRightContainer: null, preview: null, base: null, contentContainer: null, footer: null };
createCacheKey = { paddingLeft: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingRight: ThemesDefault.space.PX_16 };
let obj1 = { paddingRight: ThemesDefault.space.PX_16 };
createCacheKey[2] = { borderRadius: ThemesDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[3] = { position: "relative" };
let obj2 = { borderRadius: ThemesDefault.radii.md, overflow: "hidden", borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_STRONG };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[5] = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj4 = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE };
let result = require("set").fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export const GuildEventShareModal = function GuildEventShareModal(event) {
  event = event.event;
  let obj = SHARE_EVENT_DETAILS_LINK;
  obj = { guildId: event.guild_id, guildEventId: event.id };
  obj = { title: null, originDestinationId: null, linkText: null };
  const result = obj.SHARE_EVENT_DETAILS_LINK(obj);
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["7TVSLK"]);
  let tmp4;
  if (null != event.channel_id) {
    obj1 = { type: "channel", id: null };
    obj1[1] = event.channel_id;
    tmp4 = obj1;
  }
  obj[1] = tmp4;
  obj[2] = result;
  return closure_13(ICYMIShareModal, obj);
};
export const GameShareModal = function GameShareModal(content) {
  let _require = content.content;
  let obj = { title: null, linkText: "", forwardToChannel: null };
  let intl = require("../../../intl/index.native.tsx").intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx").t["59CWHK"]);
  _require = undefined;
  _require = callback2((arg0) => {
    closure_0 = arg0;
    c5 = 0;
    c6 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              closure_1 = tmp7;
              c0 = undefined;
              c4 = 1;
              let obj3 = callback(closure_2_2[15]);
              obj1 = { channel: null, content: "", entry: null, whenReady: false, doNotNotifyOnError: true, location: null };
              obj1[0] = c0;
              obj1[2] = callback;
              obj1[5] = closure_2_12.ICYMI;
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj3.sendMessageWithEmbed(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_1 = closure_3;
            let tmp12 = null != closure_1.body;
            if (tmp12) {
              tmp12 = closure_1.body.code === closure_2_10.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
            }
            callback = tmp12;
            obj1 = closure_2_1(closure_2_2[16]);
            const intl = callback(closure_2_2[14]).intl;
            const string = intl.string;
            let t = callback(closure_2_2[14]).t;
            if (callback) {
              let stringResult = string(t.BC5vfD);
            } else {
              stringResult = string(t.F8FvUy);
            }
            obj3 = { key: "FORWARD_CONTENT_INVENTORY_ENTRY_ERROR", content: null };
            obj3[1] = stringResult;
            t = obj1.open(obj3);
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else {
            if (arg0 !== 2) {
              c4 = 0;
              c6 = 3;
            }
            c4 = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp33) {
          closure_3 = tmp33;
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp33;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
  });
  obj[2] = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return callback3(ICYMIShareModal, obj);
};