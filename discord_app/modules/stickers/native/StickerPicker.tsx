// discord_app/modules/stickers/native/StickerPicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import StickersUtils from "../StickersUtils.tsx";
import StickerSendability from "../StickerSendability.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import StickersSearchUtils from "../StickersSearchUtils.tsx";
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet.tsx";
import showStickerDetailActionSheet from "showStickerDetailActionSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import StickersStore from "../StickersStore.tsx";

const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: closure_6 } = get_ActivityIndicator);
const Constants = fn(1072);
({
  AnalyticEvents: closure_9,
  AnalyticsObjects: closure_10,
  AnalyticsPages: closure_11,
  AnalyticsSections: closure_12,
  UpsellTypes: map1,
  ChatInputComponentViewedTypes: closure_14,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5170);
let obj = {
  container: { flex: 1 },
  header: { paddingVertical: nativeDefault.space.PX_8 },
  loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 },
  emptyState: {
    marginTop: fn(4998).STICKER_SEARCH_HEADER_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
};
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
  const fetchStickerPacks = channel(10402).useFetchStickerPacks();
  let obj = channel(10402);
  const stickerCategories = channel(10404).useStickerCategories(channel);
  let obj2 = channel(10404);
  items = [StickersStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  let obj3 = channel(504);
  analyticsLocations = onPressSticker(7410)(onPressSticker(7435).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7410);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  let items1 = [channel];
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10376)({ hasCategories: true }));
  const items2 = [,];
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
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, {
      type: constants6.STICKER,
      channel_id: channel.id,
      guild_id: channel.guild_id,
    });
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
          const obj7 = {
            initialUpsellKey: constants5.GLOBAL_STICKER,
            analyticsLocation: null,
            analyticsLocations: null,
          };
          const obj8 = {
            page: null != channel.guild_id ? tmp8.GUILD_CHANNEL : tmp8.DM_CHANNEL,
            section: constants4.STICKER_PICKER_UPSELL,
          };
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
  const callback2 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, {
      type: constants6.STICKER_SEARCH,
      channel_id: channel.id,
      guild_id: channel.guild_id,
    });
  }, items4);
  const tmp12 = onPressSticker(10376)({ hasCategories: true });
  const items5 = [channel];
  const isTidaMediaTakedownRegion = channel(5847).useIsTidaMediaTakedownRegion();
  const callback3 = noop.useCallback((renderableSticker) => {
    const result = showStickerDetailActionSheet.showStickerDetailActionSheet({ renderableSticker, channel });
  }, items5);
  let obj5 = { value: analyticsLocations, children: null };
  let obj6 = { style: tmp.container, children: null };
  let tmp19Result = null;
  if (0 !== stickerCategories.length) {
    let obj7 = { style: tmp.header, children: null };
    let obj8 = { size: "md", placeholder: null, onChange: null, onFocus: null, round: true };
    let intl = tmp2(1113).intl;
    obj8.placeholder = intl.string(tmp2(1113).t.dt5h1C);
    obj8.onChange = callback;
    obj8.onFocus = callback2;
    obj7.children = closure_15(tmp2(7305).SearchBar, obj8);
    tmp19Result = closure_15(closure_5, obj7);
  }
  const items6 = [tmp19Result, ,];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      let obj9 = { style: tmp.emptyState, children: null };
      tmp = closure_15(tmp8(10433), {});
      obj9.children = tmp;
      let tmp19Result2 = closure_15(closure_5, obj9);
    } else {
      const obj10 = {
        bottomSheetRef,
        bottomSheetIndex,
        setCategoryIndex: tmp7,
        onPressSticker: callback1,
        onLongPressStickerDetail: null,
        insetBottom: null,
        insetTop: null,
        channel: null,
        stickerFormats: null,
        searchResults: null,
        inPortalKeyboard: null,
      };
      let tmp25;
      if (isTidaMediaTakedownRegion) {
        tmp25 = callback3;
      }
      obj10.onLongPressStickerDetail = tmp25;
      obj10.insetBottom = safeAreaBottomKeyboardAware;
      obj10.insetTop = paddingTop;
      obj10.channel = channel;
      obj10.stickerFormats = stickerFormats;
      obj10.searchResults = tmp11;
      obj10.inPortalKeyboard = inPortalKeyboard;
      tmp19Result2 = closure_15(tmp8(10434), obj10);
      const tmp8Result = tmp8(10434);
    }
  } else {
    const obj11 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items6[1] = closure_15(closure_6, obj11);
    let obj12 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items6[2] = closure_15(tmp8(10440), obj12);
    obj6.children = items6;
    obj5.children = closure_16(closure_5, obj6);
    return closure_15(channel(7410).AnalyticsLocationProvider, obj5);
  }
  let obj4 = channel(5847);
});
