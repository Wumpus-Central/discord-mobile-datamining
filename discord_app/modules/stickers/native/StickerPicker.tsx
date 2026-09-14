// discord_app/modules/stickers/native/StickerPicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ReactBatchUpdates from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import StickersUtils from "../StickersUtils.tsx";
import StickerSendability from "../StickerSendability.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import MobileStickerPickerUpsellRestyleExperiment from "../../premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx";
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
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({
  AnalyticEvents: closure_9,
  AnalyticsPages: c10,
  AnalyticsSections: closure_11,
  UpsellTypes: closure_12,
  ChatInputComponentViewedTypes: map1,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const createStyles = fn(4636);
let obj = {
  container: { flex: 1 },
  header: { paddingVertical: nativeDefault.space.PX_8 },
  loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 },
  emptyState: {
    marginTop: fn(1938).STICKER_SEARCH_HEADER_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
};
let closure_16 = createStyles.createStyles(obj);
let obj3 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default noop.memo(function StickerPicker(channel) {
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  let analyticsLocations;
  noop = undefined;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = closure_16();
  const fetchStickerPacks = channel(10516).useFetchStickerPacks();
  let obj = channel(10516);
  const stickerCategories = channel(10518).useStickerCategories(channel);
  let obj2 = channel(10518);
  const items = [StickersStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  let obj3 = channel(504);
  analyticsLocations = onPressSticker(7265)(onPressSticker(7285).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7265);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10412)({ hasCategories: true }));
  const items1 = [,];
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
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, {
      type: constants5.STICKER,
      channel_id: channel.id,
      guild_id: channel.guild_id,
    });
  }, items1);
  const items2 = [channel, onPressSticker, analyticsLocations];
  const items3 = [channel];
  const callback1 = noop.useCallback((pack_id) => {
    const stickerSendability = StickerSendability.getStickerSendability(pack_id, UserStore.getCurrentUser(), channel);
    if (stickerSendability === StickerSendability.StickerSendability.SENDABLE) {
      onPressSticker(pack_id);
    } else if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
      if (tmpResult.isStandardSticker(pack_id)) {
        const stickerPack = StickersStore.getStickerPack(pack_id.pack_id);
        if (null != stickerPack) {
          if (null != channel.guild_id) {
            let DM_CHANNEL2 = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL2 = constants2.DM_CHANNEL;
          }
          const obj2 = { analyticsLocation: null, analyticsPopoutType: null, stickerPack: null };
          const obj4 = { page: DM_CHANNEL2 };
          obj2.analyticsLocation = obj4;
          obj2.analyticsPopoutType = openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_DETAIL;
          obj2.stickerPack = stickerPack;
          openStickerPackDetailActionSheetDefault(obj2);
        }
      } else {
        if (tmpResult3.isGuildSticker(pack_id)) {
          const obj5 = {
            initialUpsellKey: constants4.GLOBAL_STICKER,
            analyticsLocation: null,
            analyticsLocations: null,
            isDismissable: true,
          };
          if (null != channel.guild_id) {
            let DM_CHANNEL = constants2.GUILD_CHANNEL;
          } else {
            DM_CHANNEL = constants2.DM_CHANNEL;
          }
          const obj6 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL };
          obj5.analyticsLocation = obj6;
          obj5.analyticsLocations = analyticsLocations;
          const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj5);
        }
        tmpResult3 = StickersUtils;
      }
      tmpResult = StickersUtils;
    } else {
      let mobileStickerPickerUpsellRestyleEnabled =
        stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        mobileStickerPickerUpsellRestyleEnabled =
          MobileStickerPickerUpsellRestyleExperiment.getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
        const tmpResult4 = MobileStickerPickerUpsellRestyleExperiment;
      }
      if (mobileStickerPickerUpsellRestyleEnabled) {
        const obj8 = { key: "STICKER_PICKER_LIST_PRESS_DISABLED", content: null };
        const intl = util.intl;
        obj8.content = intl.string(util.t.UTExh3);
        ToastActionCreatorsDefault.open(obj8);
      }
    }
  }, items2);
  const callback2 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, {
      type: constants5.STICKER_SEARCH,
      channel_id: channel.id,
      guild_id: channel.guild_id,
    });
  }, items3);
  const tmp12 = onPressSticker(10412)({ hasCategories: true });
  const items4 = [channel];
  const callback3 = noop.useCallback((renderableSticker) => {
    const result = showStickerDetailActionSheet.showStickerDetailActionSheet({ renderableSticker, channel });
  }, items4);
  let obj5 = { value: analyticsLocations, children: null };
  let obj6 = { style: tmp.container, children: null };
  let tmp18Result = null;
  if (0 !== stickerCategories.length) {
    let obj7 = { style: tmp.header, children: null };
    let obj8 = { size: "md", placeholder: null, onChange: null, onFocus: null, isRound: true };
    let intl = tmp2(1114).intl;
    obj8.placeholder = intl.string(tmp2(1114).t.dt5h1C);
    obj8.onChange = callback;
    obj8.onFocus = callback2;
    obj7.children = closure_14(tmp2(7153).SearchField, obj8);
    tmp18Result = closure_14(closure_5, obj7);
  }
  const items5 = [tmp18Result, ,];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      const obj9 = { style: tmp.emptyState, children: null };
      tmp = closure_14(tmp8(10542), {});
      obj9.children = tmp;
      let tmp18Result2 = closure_14(closure_5, obj9);
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
      let tmp24;
      if (obj4.useExperiment({ location: "StickerPicker" }, { autoTrackExposure: false }).tidaWebformEnabled) {
        tmp24 = callback3;
      }
      obj10.onLongPressStickerDetail = tmp24;
      obj10.insetBottom = safeAreaBottomKeyboardAware;
      obj10.insetTop = paddingTop;
      obj10.channel = channel;
      obj10.stickerFormats = stickerFormats;
      obj10.searchResults = tmp11;
      obj10.inPortalKeyboard = inPortalKeyboard;
      tmp18Result2 = closure_14(tmp8(10543), obj10);
      const tmp8Result = tmp8(10543);
    }
  } else {
    const obj11 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items5[1] = closure_14(closure_6, obj11);
    const obj12 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items5[2] = closure_14(tmp8(10548), obj12);
    obj6.children = items5;
    obj5.children = closure_15(closure_5, obj6);
    return closure_14(channel(7265).AnalyticsLocationProvider, obj5);
  }
  obj4 = onPressSticker(7291);
});
