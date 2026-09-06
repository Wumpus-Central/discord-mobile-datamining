// === Module 10386: StickerPicker ===

// Module 10386 (StickerPicker)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import StickerSendability from "StickerSendability" /* 7337 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9313 */;
import StickersSearchUtils from "StickersSearchUtils" /* 10393 */;
import openStickerPackDetailActionSheetDefault from "openStickerPackDetailActionSheet" /* 10394 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10403 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import StickersStore from "StickersStore" /* 5502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsPages: c10, AnalyticsSections: closure_11, UpsellTypes: closure_12, ChatInputComponentViewedTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4560);
let obj = { container: { flex: 1 }, header: null, loadingIndicator: null, emptyState: null };
obj = { paddingVertical: nativeDefault.space.PX_8 };
obj.header = obj;
obj.loadingIndicator = { alignItems: "center", justifyContent: "center", flex: 1 };
obj.emptyState = { marginTop: fn(1938).STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 };
let closure_16 = createStyles.createStyles(obj);
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default noop.memo(function StickerPicker(channel) {
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  let analyticsLocations;
  noop = undefined;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = closure_16();
  let obj = channel(10387);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  let obj1 = channel(10389);
  const stickerCategories = obj1.useStickerCategories(channel);
  let obj2 = channel(504);
  const items = [StickersStore];
  const stateFromStores = obj2.useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  analyticsLocations = onPressSticker(7162)(onPressSticker(7182).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7162);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10283)({ hasCategories: true }));
  const items1 = [, ];
  ({ id: arr3[0], guild_id: arr3[1] } = channel);
  const callback = noop.useCallback((arg0) => {
    if ("" === arg0) {
      ReactBatchUpdates.batchUpdates(() => {
        closure_1_2(0);
        _undefined(null);
      });
    } else {
      _undefined(StickersSearchUtils.searchAllStickers(arg0));
    }
  }, []);
  const effect = noop.useEffect(() => {
    const obj = { type: constants5.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items1);
  const items2 = [channel, onPressSticker, analyticsLocations];
  const items3 = [channel];
  const callback1 = noop.useCallback((pack_id) => {
    let obj = StickerSendability;
    const stickerSendability = obj.getStickerSendability(pack_id, UserStore.getCurrentUser(), channel);
    if (stickerSendability === StickerSendability.StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === tmp(7337).StickerSendability.SENDABLE_WITH_PREMIUM) {
      let tmpResult = tmp(4899);
      if (tmpResult.isStandardSticker(pack_id)) {
        const stickerPack = StickersStore.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          if (null != tmp3.guild_id) {
            let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = constants2.DM_CHANNEL;
          }
          obj = { analyticsLocation: null, analyticsPopoutType: null, stickerPack: null };
          obj = { page: DM_CHANNEL2 };
          obj.analyticsLocation = obj;
          obj.analyticsPopoutType = tmp(10394).AnalyticsPopoutType.STICKER_PACK_DETAIL;
          obj.stickerPack = stickerPack;
          openStickerPackDetailActionSheetDefault(obj);
        }
      } else {
        tmpResult = tmp(4899);
        if (tmpResult.isGuildSticker(pack_id)) {
          let obj2 = PremiumUpsellUtilsDefault;
          const obj1 = { initialUpsellKey: constants4.GLOBAL_STICKER, analyticsLocation: null, analyticsLocations: null };
          if (null != tmp3.guild_id) {
            let DM_CHANNEL = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = constants2.DM_CHANNEL;
          }
          obj2 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL };
          obj1.analyticsLocation = obj2;
          obj1.analyticsLocations = analyticsLocations;
          const result = obj2.handleShowUpsellAlert(obj1);
        }
      }
    }
  }, items2);
  const callback2 = noop.useCallback(() => {
    const obj = { type: constants5.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items3);
  let obj3 = onPressSticker(7189);
  const items4 = [channel];
  const callback3 = noop.useCallback((renderableSticker) => {
    const obj = { renderableSticker, channel };
    const result = obj.showStickerDetailActionSheet(obj);
  }, items4);
  obj = { value: analyticsLocations, children: null };
  obj = { style: tmp.container, children: null };
  let tmp18Result = null;
  if (0 !== stickerCategories.length) {
    obj1 = { style: tmp.header, children: null };
    obj2 = { size: "md", placeholder: null, onChange: null, onFocus: null, isRound: true };
    const intl = tmp2(1114).intl;
    obj2.placeholder = intl.string(tmp2(1114).t.dt5h1C);
    obj2.onChange = callback;
    obj2.onFocus = callback2;
    obj1.children = tmp18(tmp2(7050).SearchField, obj2);
    tmp18Result = tmp18(tmp20, obj1);
  }
  const items5 = [tmp18Result, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      obj3 = { style: tmp.emptyState, children: null };
      tmp = tmp18(tmp8(10413), {});
      obj3.children = tmp;
      tmp18Result = tmp18(tmp20, obj3);
    } else {
      const obj4 = { bottomSheetRef, bottomSheetIndex, setCategoryIndex: tmp7, onPressSticker: callback1, onLongPressStickerDetail: null, insetBottom: null, insetTop: null, channel: null, stickerFormats: null, searchResults: null, inPortalKeyboard: null };
      let tmp24;
      if (obj3.useExperiment({ location: "StickerPicker" }, { autoTrackExposure: false }).tidaWebformEnabled) {
        tmp24 = callback3;
      }
      obj4.onLongPressStickerDetail = tmp24;
      obj4.insetBottom = safeAreaBottomKeyboardAware;
      obj4.insetTop = paddingTop;
      obj4.channel = channel;
      obj4.stickerFormats = stickerFormats;
      obj4.searchResults = tmp11;
      obj4.inPortalKeyboard = inPortalKeyboard;
      tmp18Result = tmp18(tmp8(10414), obj4);
      const tmp8Result = tmp8(10414);
    }
  } else {
    const obj5 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items5[1] = tmp18(closure_6, obj5);
    const obj6 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items5[2] = tmp18(tmp8(10419), obj6);
    obj.children = items5;
    obj.children = closure_15(tmp20, obj);
    return tmp18(channel(7162).AnalyticsLocationProvider, obj);
  }
});