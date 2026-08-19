// === Module 10216: ? ===

// Module 10216
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import closure_8 from "loadSavedGuildStickers" /* 6769 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, ActivityIndicator: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: c9, AnalyticsPages: c10, AnalyticsSections: unpackModuleId, UpsellTypes: closure_12, ChatInputComponentViewedTypes: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let obj = { container: { flex: 1 }, header: null, loadingIndicator: null, emptyState: null };
obj = { paddingVertical: ThemesDefault.space.PX_8 };
obj[1] = obj;
obj[2] = { alignItems: "center", justifyContent: "center", flex: 1 };
obj[3] = { marginTop: require("STICKER_PICKER_TAB_PANEL_ID").STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 };
let closure_16 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function StickerPicker(channel) {
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  dependencyMap = undefined;
  let analyticsLocations;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = callback();
  let obj = channel(10217);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  obj1 = channel(10219);
  const stickerCategories = obj1.useStickerCategories(channel);
  let obj2 = channel(589);
  const items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => obj.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(undefined.useState(0), 2);
  dependencyMap = tmp7;
  analyticsLocations = onPressSticker(7139)(onPressSticker(7159).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7139);
  [tmp11, c4] = analyticsLocations(undefined.useState(null), 2);
  const tmp10 = analyticsLocations(undefined.useState(null), 2);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10191)({ hasCategories: true }));
  const items1 = [, ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  callback = importAllResult.useCallback((arg0) => {
    if ("" === arg0) {
      channel(705).batchUpdates(() => {
        callback(0);
        callback2(null);
      });
      const obj2 = channel(705);
    } else {
      _undefined(channel(10223).searchAllStickers(arg0));
      const obj = channel(10223);
    }
  }, []);
  const effect = importAllResult.useEffect(() => {
    let obj = onPressSticker(698);
    obj = { type: closure_1_13.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(closure_1_9.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items1);
  const items2 = [channel, onPressSticker, analyticsLocations];
  const items3 = [channel];
  const callback1 = importAllResult.useCallback((pack_id) => {
    let obj = channel(7298);
    const stickerSendability = obj.getStickerSendability(pack_id, closure_1_7.getCurrentUser(), channel);
    if (stickerSendability === channel(7298).StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === tmp(7298).StickerSendability.SENDABLE_WITH_PREMIUM) {
      let tmpResult = tmp(4823);
      if (tmpResult.isStandardSticker(pack_id)) {
        const stickerPack = closure_1_8.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          if (null != tmp3.guild_id) {
            let DM_CHANNEL2 = closure_1_10.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = closure_1_10.DM_CHANNEL;
          }
          obj = { analyticsLocation: null, analyticsPopoutType: null, stickerPack: null };
          obj = { page: null };
          obj[0] = DM_CHANNEL2;
          obj[0] = obj;
          obj[1] = tmp(10224).AnalyticsPopoutType.STICKER_PACK_DETAIL;
          obj[2] = stickerPack;
          onPressSticker(10224)(obj);
          const tmp17 = onPressSticker(10224);
        }
      } else {
        tmpResult = tmp(4823);
        if (tmpResult.isGuildSticker(pack_id)) {
          let obj2 = onPressSticker(8471);
          obj1 = { initialUpsellKey: null, analyticsLocation: null, analyticsLocations: null };
          obj1[0] = closure_1_12.GLOBAL_STICKER;
          if (null != tmp3.guild_id) {
            let DM_CHANNEL = closure_1_10.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = closure_1_10.DM_CHANNEL;
          }
          obj2 = { page: null, section: null };
          obj2[0] = DM_CHANNEL;
          obj2[1] = closure_1_11.STICKER_PICKER_UPSELL;
          obj1[1] = obj2;
          obj1[2] = analyticsLocations;
          const result = obj2.handleShowUpsellAlert(obj1);
        }
      }
    }
  }, items2);
  const callback2 = importAllResult.useCallback(() => {
    let obj = onPressSticker(698);
    obj = { type: closure_1_13.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(closure_1_9.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items3);
  let obj3 = onPressSticker(7166);
  const items4 = [channel];
  const callback3 = importAllResult.useCallback((renderableSticker) => {
    let obj = channel(10233);
    obj = { renderableSticker, channel };
    const result = obj.showStickerDetailActionSheet(obj);
  }, items4);
  obj = { value: analyticsLocations, children: null };
  obj = { style: tmp.container, children: null };
  let tmp18Result = null;
  if (0 !== stickerCategories.length) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.header;
    obj2 = { size: "md", placeholder: null, onChange: null, onFocus: null, isRound: true };
    const intl = tmp2(1236).intl;
    obj2[1] = intl.string(tmp2(1236).t.dt5h1C);
    obj2[2] = callback;
    obj2[3] = callback2;
    obj1[1] = tmp18(tmp2(7337).SearchField, obj2);
    tmp18Result = tmp18(tmp20, obj1);
  }
  const items5 = [tmp18Result, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      obj3 = { style: null, children: null };
      obj3[0] = tmp.emptyState;
      tmp = tmp18(tmp8(10243), {});
      obj3[1] = tmp;
      tmp18Result = tmp18(tmp20, obj3);
    } else {
      const obj4 = { bottomSheetRef: null, bottomSheetIndex: null, setCategoryIndex: null, onPressSticker: null, onLongPressStickerDetail: null, insetBottom: null, insetTop: null, channel: null, stickerFormats: null, searchResults: null, inPortalKeyboard: null };
      obj4[0] = bottomSheetRef;
      obj4[1] = bottomSheetIndex;
      obj4[2] = tmp7;
      obj4[3] = callback1;
      let tmp24;
      if (obj3.useExperiment({ location: "StickerPicker" }, { autoTrackExposure: false }).tidaWebformEnabled) {
        tmp24 = callback3;
      }
      obj4[4] = tmp24;
      obj4[5] = safeAreaBottomKeyboardAware;
      obj4[6] = paddingTop;
      obj4[7] = channel;
      obj4[8] = stickerFormats;
      obj4[9] = tmp11;
      obj4[10] = inPortalKeyboard;
      tmp18Result = tmp18(tmp8(10244), obj4);
      const tmp8Result = tmp8(10244);
    }
  } else {
    const obj5 = { animating: true, size: "large", style: null };
    obj5[2] = tmp.loadingIndicator;
    items5[1] = tmp18(closure_6, obj5);
    const obj6 = { categories: null, categoryIndex: null, style: null };
    obj6[0] = stickerCategories;
    obj6[1] = tmp6[0];
    obj6[2] = safeAreaStyle;
    items5[2] = tmp18(tmp8(10249), obj6);
    obj[1] = items5;
    obj[1] = closure_15(tmp20, obj);
    return tmp18(channel(7139).AnalyticsLocationProvider, obj);
  }
});
let result = require("set").fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default memoResult;