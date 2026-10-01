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
  AnalyticsObjects: c10,
  AnalyticsPages: closure_11,
  AnalyticsSections: closure_12,
  UpsellTypes: map1,
  ChatInputComponentViewedTypes: closure_14,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4845);
let obj = {
  container: { flex: 1 },
  header: { paddingVertical: nativeDefault.space.PX_8 },
  loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 },
  emptyState: {
    marginTop: fn(2024).STICKER_SEARCH_HEADER_HEIGHT,
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
  const fetchStickerPacks = channel(10041).useFetchStickerPacks();
  let obj = channel(10041);
  const stickerCategories = channel(10043).useStickerCategories(channel);
  let obj2 = channel(10043);
  let items = [StickersStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  let obj3 = channel(504);
  analyticsLocations = onPressSticker(6769)(onPressSticker(6789).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(6769);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  let mobileStickerPickerUpsellRestyleEnabled =
    channel(8813).useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  let obj4 = channel(8813);
  let items1 = [channel, mobileStickerPickerUpsellRestyleEnabled];
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(9939)({ hasCategories: true }));
  const items2 = [,];
  ({ id: arr4[0], guild_id: arr4[1] } = channel);
  const callback = noop.useCallback((arg0) => {
    if ("" !== arg0) {
      const searchAllStickersResult = StickersSearchUtils.searchAllStickers(arg0);
      if (mobileStickerPickerUpsellRestyleEnabled) {
        const items = [];
        const items1 = [];
        for (const item10030 of searchAllStickersResult) {
          let obj4 = StickerSendability;
          let stickerSendability = obj4.getStickerSendability(item10030, tmp11, channel);
          if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
            let obj5 = StickersUtils;
            if (obj5.isGuildSticker(item10030)) {
              let arr = items.push(item10030);
              continue;
            }
          }
          let arr2 = items1.push(item10030);
        }
        const obj3 = { nitroLocked: items, rest: items1 };
        _undefined(obj3);
      } else {
        const obj6 = { nitroLocked: [], rest: searchAllStickersResult };
        _undefined(obj6);
      }
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
          const obj4 = { page: DM_CHANNEL2 };
          obj2.analyticsLocation = obj4;
          obj2.analyticsPopoutType = openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_DETAIL;
          obj2.stickerPack = stickerPack;
          openStickerPackDetailActionSheetDefault(obj2);
        }
      } else {
        if (tmpResult3.isGuildSticker(pack_id)) {
          if (null != channel.guild_id) {
            let DM_CHANNEL = constants3.GUILD_CHANNEL;
            let tmp11 = constants3;
          } else {
            tmp11 = constants3;
            DM_CHANNEL = constants3.DM_CHANNEL;
          }
          const obj5 = { location: null };
          const obj6 = { page: DM_CHANNEL, section: constants4.STICKER_PICKER_UPSELL, object: constants2.STICKER };
          obj5.location = obj6;
          AnalyticsUtilsDefault.track(constants.PREMIUM_PROMOTION_OPENED, obj5);
          const obj8 = {
            initialUpsellKey: constants5.GLOBAL_STICKER,
            analyticsLocation: null,
            analyticsLocations: null,
            isDismissable: true,
          };
          const obj9 = {
            page: null != channel.guild_id ? tmp11.GUILD_CHANNEL : tmp11.DM_CHANNEL,
            section: constants4.STICKER_PICKER_UPSELL,
          };
          obj8.analyticsLocation = obj9;
          obj8.analyticsLocations = analyticsLocations;
          const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj8);
          const tmp8Result = PremiumUpsellUtilsDefault;
        }
        tmpResult3 = StickersUtils;
      }
      tmpResult = StickersUtils;
    } else {
      mobileStickerPickerUpsellRestyleEnabled =
        stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        mobileStickerPickerUpsellRestyleEnabled =
          MobileStickerPickerUpsellRestyleExperiment.getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
        const tmpResult4 = MobileStickerPickerUpsellRestyleExperiment;
      }
      if (mobileStickerPickerUpsellRestyleEnabled) {
        const obj10 = { key: "STICKER_PICKER_LIST_PRESS_DISABLED", content: null };
        const intl = util.intl;
        obj10.content = intl.string(util.t.UTExh3);
        ToastActionCreatorsDefault.open(obj10);
      }
    }
  }, items3);
  const callback2 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, {
      type: constants6.STICKER_SEARCH,
      channel_id: channel.id,
      guild_id: channel.guild_id,
    });
  }, items4);
  const tmp13 = onPressSticker(9939)({ hasCategories: true });
  const items5 = [channel];
  const callback3 = noop.useCallback((renderableSticker) => {
    const result = showStickerDetailActionSheet.showStickerDetailActionSheet({ renderableSticker, channel });
  }, items5);
  let obj6 = { value: analyticsLocations, children: null };
  let obj7 = { style: tmp.container, children: null };
  let tmp19Result = null;
  if (0 !== stickerCategories.length) {
    let obj8 = { style: tmp.header, children: null };
    let obj9 = { size: "md", placeholder: null, onChange: null, onFocus: null, round: true };
    let intl = tmp2(1115).intl;
    obj9.placeholder = intl.string(tmp2(1115).t.dt5h1C);
    obj9.onChange = callback;
    obj9.onFocus = callback2;
    obj8.children = closure_15(tmp2(6657).SearchField, obj9);
    tmp19Result = closure_15(tmp21, obj8);
  }
  const items6 = [tmp19Result, ,];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      let obj10 = { style: tmp.emptyState, children: null };
      tmp = closure_15(tmp8(10068), {});
      obj10.children = tmp;
      let tmp19Result2 = closure_15(tmp21, obj10);
    } else {
      const obj11 = {
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
      if (obj5.useExperiment({ location: "StickerPicker" }, { autoTrackExposure: false }).tidaWebformEnabled) {
        tmp25 = callback3;
      }
      obj11.onLongPressStickerDetail = tmp25;
      obj11.insetBottom = safeAreaBottomKeyboardAware;
      obj11.insetTop = paddingTop;
      obj11.channel = channel;
      obj11.stickerFormats = stickerFormats;
      obj11.searchResults = tmp11;
      obj11.inPortalKeyboard = inPortalKeyboard;
      tmp19Result2 = closure_15(tmp8(10069), obj11);
      let tmp8Result = tmp8(10069);
    }
  } else {
    const obj12 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items6[1] = closure_15(closure_6, obj12);
    const obj13 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items6[2] = closure_15(tmp8(10075), obj13);
    obj7.children = items6;
    obj6.children = closure_16(tmp21, obj7);
    return closure_15(channel(6769).AnalyticsLocationProvider, obj6);
  }
  obj5 = onPressSticker(6795);
});
