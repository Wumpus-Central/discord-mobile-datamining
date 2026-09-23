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
const createStyles = fn(4827);
let obj = {
  container: { flex: 1 },
  header: { paddingVertical: nativeDefault.space.PX_8 },
  loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 },
  emptyState: {
    marginTop: fn(2023).STICKER_SEARCH_HEADER_HEIGHT,
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
  const fetchStickerPacks = channel(10728).useFetchStickerPacks();
  let obj = channel(10728);
  const stickerCategories = channel(10730).useStickerCategories(channel);
  let obj2 = channel(10730);
  let items = [StickersStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  let obj3 = channel(504);
  analyticsLocations = onPressSticker(7493)(onPressSticker(7513).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(7493);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  let mobileStickerPickerUpsellRestyleEnabled =
    channel(9512).useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  let obj4 = channel(9512);
  let items1 = [channel, mobileStickerPickerUpsellRestyleEnabled];
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10626)({ hasCategories: true }));
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
      type: constants5.STICKER,
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
      mobileStickerPickerUpsellRestyleEnabled =
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
  }, items3);
  const callback2 = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, {
      type: constants5.STICKER_SEARCH,
      channel_id: channel.id,
      guild_id: channel.guild_id,
    });
  }, items4);
  const tmp13 = onPressSticker(10626)({ hasCategories: true });
  const items5 = [channel];
  const callback3 = noop.useCallback((renderableSticker) => {
    const result = showStickerDetailActionSheet.showStickerDetailActionSheet({ renderableSticker, channel });
  }, items5);
  let obj6 = { value: analyticsLocations, children: null };
  let obj7 = { style: tmp.container, children: null };
  let tmp19Result = null;
  if (0 !== stickerCategories.length) {
    let obj8 = { style: tmp.header, children: null };
    const obj9 = { size: "md", placeholder: null, onChange: null, onFocus: null, round: true };
    let intl = tmp2(1115).intl;
    obj9.placeholder = intl.string(tmp2(1115).t.dt5h1C);
    obj9.onChange = callback;
    obj9.onFocus = callback2;
    obj8.children = closure_14(tmp2(7381).SearchField, obj9);
    tmp19Result = closure_14(tmp21, obj8);
  }
  const items6 = [tmp19Result, ,];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      const obj10 = { style: tmp.emptyState, children: null };
      tmp = closure_14(tmp8(10754), {});
      obj10.children = tmp;
      let tmp19Result2 = closure_14(tmp21, obj10);
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
      tmp19Result2 = closure_14(tmp8(10755), obj11);
      const tmp8Result = tmp8(10755);
    }
  } else {
    const obj12 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items6[1] = closure_14(closure_6, obj12);
    const obj13 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items6[2] = closure_14(tmp8(10761), obj13);
    obj7.children = items6;
    obj6.children = closure_15(tmp21, obj7);
    return closure_14(channel(7493).AnalyticsLocationProvider, obj6);
  }
  obj5 = onPressSticker(7519);
});
