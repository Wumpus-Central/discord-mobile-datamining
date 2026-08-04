// discord_app/modules/icymi/native/ICYMIShareModal.tsx
import dispatcher from "dispatcher";
import handleChanged from "handleChanged";
import useGradientBottom from "useGradientBottom";
import { View } from "useWindowDimensions";
import ensureGuildLoaded from "ensureGuildLoaded";
import { DraftType } from "handleChanged";
import map from "map";
import { AbortCodes } from "ME";
import { UserRowModes } from "UserRowModes";
import { MessageSendLocation } from "MESSAGE_GROUP_SPACING";
import jsxProd from "getMixedGradientColor";
import createCacheKey from "createCacheKey";

let closure_14;
let map1;
const require = arg1;
function Screenshot(setUri) {
  setUri = setUri.setUri;
  let ref;
  const tmp = createCacheKey();
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
  let obj = setUri(8833);
  obj = { style: { position: "absolute", top: -1000, overflow: "hidden" }, children: null };
  obj = { style: items1, children: null };
  items1 = [tmp.preview, { width: ref(1474)().width }];
  const clientThemesOverride = obj.useClientThemesOverride();
  const obj1 = { ref, options: { fileName: "icymi_content", format: "png", quality: 1 }, children: null };
  const obj2 = { style: tmp.base, children: null };
  const tmp4 = ref(4040)();
  const obj3 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
  const obj4 = { dark: null, light: null };
  const tmp6 = ref(15396);
  obj4[0] = setUri(4004).OverlayOpacity.LEVEL_7;
  obj4[1] = setUri(4004).OverlayOpacity.LEVEL_8;
  obj3[4] = obj4;
  const items2 = [callback3(ref(4723), obj3), ];
  const obj5 = { gradient: tmp4, children: null };
  const obj6 = { style: items3, children: null };
  items3 = [tmp.contentContainer, clientThemesOverride];
  obj6[1] = setUri.render();
  obj5[1] = callback3(View, obj6);
  items2[1] = callback3(setUri(3905).ThemeContextProvider, obj5);
  obj2[1] = items2;
  obj1[2] = callback4(View, obj2);
  obj[1] = callback3(tmp6, obj1);
  obj[1] = callback3(View, obj);
  return callback3(View, obj);
}
function GravityShareFooter(arg0) {
  let count;
  let handleMessageBlur;
  let handleMessageFocus;
  let handlePressEmoji;
  let handleSelectionChange;
  let isSending;
  let onSend;
  let textInputRef;
  ({ count, isSending, onSend } = arg0);
  let importDefault;
  let first;
  let insets;
  const tmp = createCacheKey();
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
    const obj1 = { inputRef: null, text: null, onChange: null, onSelectionChange: null, onFocus: null, onBlur: null, onPressEmoji: null, onSend: null, disabled: null };
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
    _handleSendForwards = undefined;
    useState = undefined;
    useState = undefined;
    c9 = undefined;
    height = undefined;
    _handleSendForwards = function _handleSendForwards() {
      let self = this;
      const tmp = outer1_4((arg0) => {
        let closure_0 = arg0;
        let c3 = 0;
        let c4 = 0;
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
                  let closure_2 = tmp2;
                  let closure_1 = tmp3;
                  outer1_6(true);
                  let tmp8 = null == outer1_2;
                  if (!tmp8) {
                    tmp8 = null != outer1_7;
                  }
                  if (tmp8) {
                    c3 = 1;
                    v0 = 1;
                    let obj1 = { value: null, done: false };
                    obj1[0] = Promise.all(outer1_5.map(callback(outer1_2[29]).getOrResolveChannelIdFromDestinationId));
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
                const found = mapped.filter(callback(outer1_2[30]).isNotNullish);
                const item = found.forEach((() => {
                  let closure_0 = v3((arg0) => {
                    let closure_0 = arg0;
                    let c2 = 0;
                    let c1 = 0;
                    return (/* F119290 */ function*() { ... })();
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
                outer1_1(outer1_2[28]).pop();
                if (null != v0) {
                  v0();
                }
                const arr3 = outer1_1(outer1_2[28]);
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
      const _handleSendForwards = tmp;
      let apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    tmp = forwardToChannel(_handleSendForwards.useState([]), 2);
    first = tmp[0];
    _handleSendForwards = first;
    tmp2 = forwardToChannel(_handleSendForwards.useState(false), 2);
    useState = tmp2[1];
    tmp3 = forwardToChannel(_handleSendForwards.useState(null), 2);
    [useState, tmp4] = tmp3;
    callback = _handleSendForwards.useCallback(() => {
      let arr = callback(render[28]);
      arr = arr.pop();
    }, []);
    tmp7 = linkText;
    tmp8 = render;
    tmp6 = jsxs();
    tmp9 = require("useSafeAreaInsets")();
    c9 = tmp9;
    height = require("useWindowDimensions")().height;
    items = [, ];
    items[0] = tmp9.bottom;
    items[1] = height;
    tmp11 = useState;
    obj = {
      style: _handleSendForwards.useMemo(() => {
            let height = "100%";
            if (obj.isAndroid()) {
              height = height + _undefined.bottom;
            }
            return { height };
          }, items),
      children: null
    };
    tmp12 = jsx;
    obj = { style: tmp6.headerContainer, children: null };
    tmp10 = jsxs;
    tmp13 = title;
    obj1 = {
      title,
      headerTitle() {
            return outer1_13(title(render[40]).GenericHeaderTitle, { title });
          },
      headerTitleAlign: "center",
      headerStatusBarHeight: null,
      headerLeft: null
    };
    obj4 = require("set");
    num = undefined;
    if (obj4.isIOS()) {
      num = 0;
    }
    obj1[3] = num;
    tmp13Result = require("HeaderBackImage");
    obj1[4] = tmp13Result.getHeaderCloseButton(callback);
    obj[1] = tmp12(require("Background").Header, obj1);
    items1 = [, , , ];
    items1[0] = tmp12(tmp11, obj);
    tmp12Result = null != render;
    if (tmp12Result) {
      tmp15 = Screenshot;
      obj2 = { render: null, setUri: null };
      obj2[0] = render;
      obj2[1] = tmp4;
      tmp12Result = tmp12(Screenshot, obj2);
    }
    items1[1] = tmp12Result;
    obj3 = { rowMode: UserRowModes.TOGGLE, onSelectedDestinationChange: tmp[1], originDestination: global.originDestinationId, insetEnd: null, disableGradient: true, disableStickySections: true };
    tmp7Result = require("SearchableDestinationList");
    sum = tmp9.bottom + require("Themes").space.PX_8;
    obj3[3] = sum + require("Themes").space.PX_96;
    items1[2] = tmp12(tmp7Result, obj3);
    obj4 = {
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
    items1[3] = tmp12(GravityShareFooter, obj4);
    obj[1] = items1;
    return tmp10(tmp11, obj);
  }
}
({ jsx: map1, jsxs: closure_14 } = jsxProd);
createCacheKey = { headerContainer: null, preview: null, base: null, contentContainer: null, footer: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingTop: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderRadius: require("Themes").radii.md, overflow: "hidden", borderWidth: 1, borderColor: require("Themes").colors.BORDER_STRONG };
createCacheKey[2] = { position: "relative" };
let obj1 = { borderRadius: require("Themes").radii.md, overflow: "hidden", borderWidth: 1, borderColor: require("Themes").colors.BORDER_STRONG };
createCacheKey[3] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let obj2 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[4] = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, gap: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { display: "flex", flexDirection: "row", alignItems: "flex-end", paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_12, gap: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: require("Themes").colors.BORDER_SUBTLE };
let result = require("noop").fileFinishedImporting("modules/icymi/native/ICYMIShareModal.tsx");

export default ICYMIShareModal;
export const GuildEventShareModal = function GuildEventShareModal(event) {
  event = event.event;
  let obj = require(8232) /* SHARE_EVENT_DETAILS_LINK */;
  obj = { guildId: event.guild_id, guildEventId: event.id };
  obj = { title: null, originDestinationId: null, linkText: null };
  const result = obj.SHARE_EVENT_DETAILS_LINK(obj);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["7TVSLK"]);
  let tmp4;
  if (null != event.channel_id) {
    const obj1 = { type: "channel", id: null };
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
  let intl = _require(1236).intl;
  obj[0] = intl.string(_require(1236).t["59CWHK"]);
  _require = undefined;
  _require = callback2((arg0) => {
    let closure_0 = arg0;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
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
              let closure_2 = tmp3;
              let closure_1 = tmp7;
              let c0;
              let c4 = 1;
              let obj3 = callback(outer2_2[15]);
              let obj1 = { channel: null, content: "", entry: null, whenReady: false, doNotNotifyOnError: true, location: null };
              obj1[0] = c0;
              obj1[2] = callback;
              obj1[5] = outer2_12.ICYMI;
              c5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj3.sendMessageWithEmbed(obj1);
              return obj2;
            }
          } else if (1 === tmp7) {
            c4 = 0;
            closure_1 = dispatcher;
            let tmp12 = null != closure_1.body;
            if (tmp12) {
              tmp12 = closure_1.body.code === outer2_10.CONTENT_INVENTORY_ENTRY_INVALID_PERMISSION;
            }
            callback = tmp12;
            obj1 = outer2_1(outer2_2[16]);
            const intl = callback(outer2_2[14]).intl;
            const string = intl.string;
            let t = callback(outer2_2[14]).t;
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
          dispatcher = tmp33;
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