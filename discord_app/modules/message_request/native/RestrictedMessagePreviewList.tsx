// === Module 16390: HiddenMedia ===

// Module 16390 (HiddenMedia)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "reinjectEphemerals" /* 4688 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

const require = arg1;
function HiddenMedia(length) {
  let _require;
  const tmp = callback3();
  _require = tmp;
  let obj = { children: null };
  let items = [
    Array.from({ length: length.count }, (arg0, arg1) => {
      let obj = { style: lib.mediaPlaceholderCard, children: null };
      const items = [closure_1_6(lib(closure_1_2[7]).ImageWarningIcon, { size: "lg", color: "text-muted" }), ];
      obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = lib(closure_1_2[9]).intl;
      obj[2] = intl.string(lib(closure_1_2[9]).t.B2xSxL);
      items[1] = closure_1_6(lib(closure_1_2[8]).Text, obj);
      obj[1] = items;
      return closure_1_7(closure_1_4, obj, arg1);
    }),

  ];
  obj = { style: tmp.mediaHiddenRow, children: null };
  const items1 = [callback(_require(4400).CircleInformationIcon, { size: "sm", color: "text-muted" }), ];
  obj = { variant: "text-sm/normal", color: "text-muted", children: null };
  let intl = _require(1236).intl;
  obj[2] = intl.string(_require(1236).t["VGf+K3"]);
  items1[1] = callback(_require(4441).Text, obj);
  obj[1] = items1;
  items[1] = callback2(View, obj);
  obj[0] = items;
  return callback2(View, obj);
}
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
let closure_9 = { renderEmbeds: false, renderReactions: false, inlineEmbedMedia: false, inlineAttachmentMedia: false, animateEmoji: false, gifAutoPlay: false, timestampHourCycle: 0, renderCodedLinks: false, renderGiftCode: false, renderActivityInstanceEmbed: false, renderActivityInviteEmbed: false, renderComponents: false, renderThreadEmbeds: false, renderReplies: false, renderCommunicationDisabled: false, renderAttachments: false, renderExecutedCommands: false, renderPolls: false, renderSharedClientTheme: false, renderForumPostActions: false, ignoreMentioned: false, ignoreEmbedDescriptionCache: false, forceHideSimpleEmbedContent: false, enableSwipeActions: false, useAlternateEmbedColors: false, restrictedPreview: true };
createCacheKey = { container: { flexDirection: "column" }, hiddenMedia: null, messageRow: null, avatarHitbox: null, dateDivider: null, dividerLine: null, mediaPlaceholderCard: null, mediaHiddenRow: null };
createCacheKey = { marginLeft: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { position: "relative" };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, width: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET, height: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_AVATAR_SIZE };
let obj1 = { position: "absolute", top: 0, left: 0, width: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET, height: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_AVATAR_SIZE };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_12 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginVertical: ThemesDefault.space.PX_12 };
createCacheKey[5] = { flex: 1, height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj3 = { flex: 1, height: 1, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[6] = { alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_8, height: 160, marginTop: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj4 = { alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_8, height: 160, marginTop: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.md, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[7] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_4 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
const obj5 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8, marginTop: ThemesDefault.space.PX_8, marginBottom: ThemesDefault.space.PX_4 };
const result = require("set").fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewList.tsx");

export default function RestrictedMessagePreviewList(channelId) {
  channelId = channelId.channelId;
  importDefault = undefined;
  let analyticsLocations;
  let callback;
  let memo;
  closure_5 = undefined;
  let arr5;
  let tmp = callback3();
  importDefault = tmp;
  analyticsLocations = importDefault(analyticsLocations[12])().analyticsLocations;
  let obj = channelId(analyticsLocations[13]);
  let items = [closure_5];
  let items1 = [channelId];
  const items2 = [channelId, analyticsLocations];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
    messages = messages.getMessages(channelId);
    return messages.toArray();
  }, items1);
  callback = callback.useCallback((userId) => {
    lib(analyticsLocations[14])({ userId, channelId, sourceAnalyticsLocations: analyticsLocations });
  }, items2);
  memo = callback.useMemo(() => {
    const obj = new lib(analyticsLocations[15])();
    obj.setOptions(closure_9);
    return obj;
  }, []);
  const items3 = [tmp, memo, callback];
  closure_5 = callback.useCallback((message) => {
    closure_0 = message;
    const tmp = lib(analyticsLocations[16])(message);
    let obj = { style: lib.messageRow, children: null };
    obj = { pointerEvents: "none", message, rowGenerator: memo };
    const items = [arr5(lib(analyticsLocations[17]), obj), ];
    obj = { style: lib.avatarHitbox, accessibilityRole: "button", accessibilityLabel: null, onPress: null };
    const intl = channelId(analyticsLocations[9]).intl;
    obj[2] = intl.string(channelId(analyticsLocations[9]).t.iXAna6);
    obj[3] = function onPress() {
      return closure_1_3(message.author.id);
    };
    items[1] = arr5(channelId(analyticsLocations[18]).PressableOpacity, obj);
    obj[1] = items;
    const children = [closure_1_7(memo, obj), ];
    let tmp6Result = tmp > 0;
    if (tmp6Result) {
      obj1 = { style: null, children: null };
      obj1[0] = lib.hiddenMedia;
      const obj2 = { count: null };
      obj2[0] = tmp;
      obj1[1] = tmp6(closure_1_11, obj2);
      tmp6Result = tmp6(memo, obj1);
    }
    children[1] = tmp6Result;
    return closure_1_7(closure_1_8, { children });
  }, items3);
  arr5 = (function groupMessages(stateFromStoresArray) {
    const items = [];
    const iter = stateFromStoresArray[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if (nextResult.blocked) {
        let tmp5 = items[items.length - 1];
        let tmp7 = null;
        if (null != tmp5) {
          let tmp8 = tmp5;
          tmp7 = null;
          if ("blocked" === tmp6.type) {
            tmp7 = tmp5;
          }
        }
        let tmp9 = tmp7;
        if (null != tmp7) {
          let tmp10 = channelId;
          let tmp11 = analyticsLocations;
          let obj2 = channelId(analyticsLocations[11]);
          let tmp12 = tmp7;
          let tmp13 = nextResult;
          if (obj2.isSameDay(tmp9.messages[tmp9.messages.length - 1].timestamp, tmp2.timestamp)) {
            let tmp16 = tmp7;
            let messages = tmp9.messages;
            let tmp17 = nextResult;
            let arr = messages.push(tmp2);
          }
        }
        let obj = { type: "blocked", messages: null };
        let tmp14 = nextResult;
        let items1 = [tmp2];
        obj[1] = items1;
        arr = items.push(obj);
      } else {
        obj = { type: "message", message: null };
        let tmp3 = nextResult;
        obj[1] = tmp2;
        let arr1 = items.push(obj);
      }
      continue;
    }
    return items;
  })(stateFromStoresArray);
  obj = {
    style: tmp.container,
    children: arr5.map((type) => {
      if ("message" === type.type) {
        let message = type.message;
      } else {
        message = type.messages[0];
      }
      if (null == arr5[arg1 - 1]) {
        let tmp6Result = null == null;
        if (!tmp6Result) {
          let obj = channelId(analyticsLocations[11]);
          tmp6Result = !obj.isSameDay(null.timestamp, message.timestamp);
        }
        if (tmp6Result) {
          obj = { style: null, children: null };
          obj[0] = lib.dateDivider;
          obj = { style: null };
          obj[0] = lib.dividerLine;
          const items = [arr5(tmp7, obj), , ];
          obj1 = { variant: "text-xs/semibold", color: "text-muted", children: null };
          let obj4 = channelId(analyticsLocations[11]);
          obj1[2] = obj4.dateFormat(message.timestamp, "LL");
          items[1] = arr5(channelId(analyticsLocations[8]).Text, obj1);
          const obj2 = { style: null };
          obj2[0] = lib.dividerLine;
          items[2] = arr5(tmp7, obj2);
          obj[1] = items;
          tmp6Result = tmp6(tmp7, obj);
        }
        const items1 = [tmp6Result, ];
        if ("message" === type.type) {
          let tmp18 = messages(type.message);
        } else {
          const obj3 = { messages: null, renderMessage: null };
          obj3[0] = type.messages;
          obj3[1] = messages;
          tmp18 = arr5(lib(analyticsLocations[19]), obj3);
        }
        obj4 = { children: null };
        items1[1] = tmp18;
        obj4[0] = items1;
        if ("message" === type.type) {
          let id = type.message.id;
        } else {
          const _HermesInternal = HermesInternal;
          id = "blocked-" + message.id;
        }
        return closure_1_7(memo, obj4, id);
      } else if ("message" === tmp.type) {
        let message2 = tmp.message;
      } else {
        message2 = tmp.messages[tmp.messages.length - 1];
      }
    })
  };
  return arr5(memo, obj);
};