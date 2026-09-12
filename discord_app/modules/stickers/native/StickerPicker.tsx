// === Module 10514: StickerPicker ===

// Module 10514 (StickerPicker)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1249 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import StickersUtils from "StickersUtils" /* 4975 */;
import StickerSendability from "StickerSendability" /* 7440 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 9443 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 9451 */;
import StickersSearchUtils from "StickersSearchUtils" /* 10521 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 10522 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10531 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import StickersStore from "StickersStore" /* 5583 */;

const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsPages: c10, AnalyticsSections: closure_11, UpsellTypes: closure_12, ChatInputComponentViewedTypes: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4636);
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
  let obj = channel(10515);
  const fetchStickerPacks = obj.useFetchStickerPacks();
  let obj1 = channel(10517);
  const stickerCategories = obj1.useStickerCategories(channel);
  let obj2 = channel(504);
  const items = [StickersStore];
  const stateFromStores = obj2.useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  analyticsLocations = onPressSticker(7265)(onPressSticker(7285).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7265);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10411)({ hasCategories: true }));
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
    } else if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
      let tmpResult = StickersUtils;
      if (tmpResult.isStandardSticker(pack_id)) {
        const stickerPack = StickersStore.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          if (null != channel.guild_id) {
            let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = constants2.DM_CHANNEL;
          }
          obj = { analyticsLocation: null, analyticsPopoutType: null, stickerPack: null };
          obj = { page: DM_CHANNEL2 };
          obj.analyticsLocation = obj;
          obj.analyticsPopoutType = openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_DETAIL;
          obj.stickerPack = stickerPack;
          openStickerPackDetailActionSheetDefault(obj);
        }
      } else {
        tmpResult = StickersUtils;
        if (tmpResult.isGuildSticker(pack_id)) {
          const obj1 = { initialUpsellKey: constants4.GLOBAL_STICKER, analyticsLocation: null, analyticsLocations: null, isDismissable: true };
          if (null != channel.guild_id) {
            let DM_CHANNEL = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = constants2.DM_CHANNEL;
          }
          let obj2 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL };
          obj1.analyticsLocation = obj2;
          obj1.analyticsLocations = analyticsLocations;
          const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj1);
        }
      }
    } else {
      let mobileStickerPickerUpsellRestyleEnabled = stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        mobileStickerPickerUpsellRestyleEnabled = MobileStickerPickerUpsellRestyleExperiment.getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
        const tmpResult1 = MobileStickerPickerUpsellRestyleExperiment;
      }
      if (mobileStickerPickerUpsellRestyleEnabled) {
        obj2 = ToastActionCreatorsDefault;
        const obj3 = { key: "STICKER_PICKER_LIST_PRESS_DISABLED", content: null };
        const intl = util.intl;
        obj3.content = intl.string(util.t.UTExh3);
        obj2.open(obj3);
      }
    }
  }, items2);
  const callback2 = noop.useCallback(() => {
    const obj = { type: constants5.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
    obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj);
  }, items3);
  let obj3 = onPressSticker(7291);
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
    let intl = tmp2(1114).intl;
    obj2.placeholder = intl.string(tmp2(1114).t.dt5h1C);
    obj2.onChange = callback;
    obj2.onFocus = callback2;
    obj1.children = closure_14(tmp2(7153).SearchField, obj2);
    tmp18Result = closure_14(closure_5, obj1);
  }
  const items5 = [tmp18Result, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      obj3 = { style: tmp.emptyState, children: null };
      tmp = closure_14(tmp8(10541), {});
      obj3.children = tmp;
      tmp18Result = closure_14(closure_5, obj3);
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
      tmp18Result = closure_14(tmp8(10542), obj4);
      const tmp8Result = tmp8(10542);
    }
  } else {
    const obj5 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items5[1] = closure_14(closure_6, obj5);
    const obj6 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items5[2] = closure_14(tmp8(10547), obj6);
    obj.children = items5;
    obj.children = closure_15(closure_5, obj);
    return closure_14(channel(7265).AnalyticsLocationProvider, obj);
  }
  const tmp12 = onPressSticker(10411)({ hasCategories: true });
});