// === Module 11367: StickerPicker ===

// Module 11367 (StickerPicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1262 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import StickersUtils from "StickersUtils" /* 6386 */;
import StickerSendability from "StickerSendability" /* 6829 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 10459 */;
import StickersSearchUtils from "StickersSearchUtils" /* 11375 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 11376 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 11385 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1386 */;
import StickersStore from "StickersStore" /* 6614 */;

const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: closure_6 } = get_ActivityIndicator);
const Constants = fn(1071);
({ AnalyticEvents: closure_9, AnalyticsObjects: closure_10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, UpsellTypes: map1, ChatInputComponentViewedTypes: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4913);
let obj = { container: { flex: 1 }, header: { paddingVertical: nativeDefault.space.PX_8 }, loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 }, emptyState: { marginTop: fn(4741).STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 } };
let closure_17 = createStyles.createStyles(obj);
let obj3 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default noop.memo(function StickerPicker(channel) {
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  let analyticsLocations;
  noop = undefined;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = closure_17();
  const fetchStickerPacks = channel(11368).useFetchStickerPacks();
  let obj = channel(11368);
  const stickerCategories = channel(11370).useStickerCategories(channel);
  let obj2 = channel(11370);
  items = [StickersStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  let obj3 = channel(504);
  analyticsLocations = onPressSticker(7520)(onPressSticker(7539).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7520);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  let items1 = [channel];
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(11277)({ hasCategories: true }));
  const items2 = [, ];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  const callback = noop.useCallback((arg0) => {
    if ("" !== arg0) {
      const searchAllStickersResult = StickersSearchUtils.searchAllStickers(arg0);
      items = [];
      const items1 = [];
      for (const item10025 of searchAllStickersResult) {
        let obj3 = StickerSendability;
        let stickerSendability = obj3.getStickerSendability(item10025, tmp8, channel);
        if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
          let obj4 = StickersUtils;
          if (obj4.isGuildSticker(item10025)) {
            let arr = items.push(item10025);
            continue;
          }
        }
        let arr2 = items1.push(item10025);
      }
      const obj5 = { nitroLocked: items, rest: items1 };
      _undefined(obj5);
    } else {
      ReactBatchUpdates.batchUpdates(() => {
        closure_1_2(0);
        _undefined(null);
      });
    }
  }, items1);
  const effect = noop.useEffect(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants6.STICKER, channel_id: channel.id, guild_id: channel.guild_id });
  }, items2);
  const items3 = [channel, onPressSticker, analyticsLocations];
  const items4 = [channel];
  const callback1 = noop.useCallback((pack_id) => {
    const stickerSendability = StickerSendability.getStickerSendability(pack_id, UserStore.getCurrentUser(), channel);
    if (stickerSendability === StickerSendability.StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
      if (tmpResult.isStandardSticker(pack_id)) {
        const stickerPack = StickersStore.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          if (null != channel.guild_id) {
            let DM_CHANNEL2 = constants3.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = constants3.DM_CHANNEL;
          }
          const obj2 = { analyticsLocation: null, analyticsPopoutType: null, stickerPack: null };
          const obj3 = { page: DM_CHANNEL2 };
          obj2.analyticsLocation = obj3;
          obj2.analyticsPopoutType = openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_DETAIL;
          obj2.stickerPack = stickerPack;
          openStickerPackDetailActionSheetDefault(obj2);
        }
      } else {
        if (tmpResult2.isGuildSticker(pack_id)) {
          if (null != channel.guild_id) {
            let DM_CHANNEL = constants3.GUILD_CHANNEL;
            let tmp8 = constants3;
          } else {
            tmp8 = constants3;
            DM_CHANNEL = constants3.DM_CHANNEL;
          }
          const obj5 = { location: null };
          const obj6 = { page: DM_CHANNEL, section: constants4.STICKER_PICKER_UPSELL, object: constants2.STICKER };
          obj5.location = obj6;
          AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj5);
          const obj7 = { initialUpsellKey: constants5.GLOBAL_STICKER, analyticsLocation: null, analyticsLocations: null };
          const obj8 = { page: null != channel.guild_id ? tmp8.GUILD_CHANNEL : tmp8.DM_CHANNEL, section: constants4.STICKER_PICKER_UPSELL };
          obj7.analyticsLocation = obj8;
          obj7.analyticsLocations = analyticsLocations;
          const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj7);
          const tmp5Result = PremiumUpsellUtilsDefault;
        }
        tmpResult2 = StickersUtils;
      }
      tmpResult = StickersUtils;
    } else if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD) {
      const obj9 = { text: null };
      const intl = util.intl;
      obj9.text = intl.string(util.t.UTExh3);
      ToastActionCreatorsDefault.open("STICKER_PICKER_LIST_PRESS_DISABLED", obj9);
    }
  }, items3);
  const items5 = [channel];
  const callback2 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants6.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id });
  }, items4);
  const callback3 = noop.useCallback((renderableSticker) => {
    const result = showStickerDetailActionSheet.showStickerDetailActionSheet({ renderableSticker, channel });
  }, items5);
  let obj4 = { value: analyticsLocations, children: null };
  let obj5 = { style: tmp.container, children: null };
  let tmp18Result = null;
  if (0 !== stickerCategories.length) {
    let obj6 = { style: tmp.header, children: null };
    let obj7 = { size: "md", placeholder: null, onChange: null, onFocus: null, round: true };
    let intl = tmp2(1112).intl;
    obj7.placeholder = intl.string(tmp2(1112).t.dt5h1C);
    obj7.onChange = callback;
    obj7.onFocus = callback2;
    obj6.children = closure_15(tmp2(7427).SearchBar, obj7);
    tmp18Result = closure_15(closure_5, obj6);
  }
  const items6 = [tmp18Result, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      let obj8 = { style: tmp.emptyState, children: null };
      tmp = closure_15(tmp8(11395), {});
      obj8.children = tmp;
      let tmp18Result2 = closure_15(closure_5, obj8);
    } else {
      let obj9 = { bottomSheetRef, bottomSheetIndex, setCategoryIndex: tmp7, onPressSticker: callback1, onLongPressStickerDetail: callback3, insetBottom: safeAreaBottomKeyboardAware, insetTop: paddingTop, channel, stickerFormats, searchResults: tmp11, inPortalKeyboard };
      tmp18Result2 = closure_15(tmp8(11396), obj9);
    }
  } else {
    const obj10 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items6[1] = closure_15(closure_6, obj10);
    const obj11 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items6[2] = closure_15(tmp8(11402), obj11);
    obj5.children = items6;
    obj4.children = closure_16(closure_5, obj5);
    return closure_15(channel(7520).AnalyticsLocationProvider, obj4);
  }
  const tmp12 = onPressSticker(11277)({ hasCategories: true });
});