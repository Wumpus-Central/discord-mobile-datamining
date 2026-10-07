// === Module 10123: StickerPicker ===

// Module 10123 (StickerPicker)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ReactBatchUpdates from "ReactBatchUpdates" /* 1259 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4574 */;
import StickersUtils from "StickersUtils" /* 5435 */;
import StickerSendability from "StickerSendability" /* 6850 */;
import PremiumUpsellUtilsDefault from "PremiumUpsellUtils" /* 8848 */;
import MobileStickerPickerUpsellRestyleExperiment from "MobileStickerPickerUpsellRestyleExperiment" /* 8856 */;
import StickersSearchUtils from "StickersSearchUtils" /* 10131 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 10132 */;
import showStickerDetailActionSheet from "showStickerDetailActionSheet" /* 10144 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import StickersStore from "StickersStore" /* 5694 */;

const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_9, AnalyticsObjects: c10, AnalyticsPages: closure_11, AnalyticsSections: closure_12, UpsellTypes: map1, ChatInputComponentViewedTypes: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4896);
let obj = { container: { flex: 1 }, header: { paddingVertical: nativeDefault.space.PX_8 }, loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 }, emptyState: { marginTop: fn(2031).STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 } };
let closure_17 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { paddingVertical: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = channel(576).c(53);
  ({ bottomSheetRef, bottomSheetIndex, channel } = arg0);
  ({ paddingTop, onPressSticker } = arg0);
  ({ stickerFormats, inPortalKeyboard } = arg0);
  closure_17();
  let obj = channel(576);
  const fetchStickerPacks = channel(10124).useFetchStickerPacks();
  let obj2 = channel(10124);
  const stickerCategories = channel(10126).useStickerCategories(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [StickersStore];
    class U {
      constructor() {
        return closure_1_8.hasLoadedStickerPacks;
      }
    }
    cResult[0] = items;
    cResult[1] = U;
    tmp7 = items;
  } else {
    [tmp7, tmp8] = cResult;
  }
  let obj3 = channel(10126);
  const stateFromStores = channel(504).useStateFromStores(tmp7, U);
  let tmpResult = channel(504);
  [r10050, tmp12] = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp12;
  let tmp11 = analyticsLocations(noop.useState(0), 2);
  analyticsLocations = onPressSticker(6664)(onPressSticker(6688).STICKER_PICKER).analyticsLocations;
  const tmp14 = onPressSticker(6664);
  [r10064, noop] = analyticsLocations(noop.useState(null), 2);
  const tmp15 = analyticsLocations(noop.useState(null), 2);
  let mobileStickerPickerUpsellRestyleEnabled = channel(8856).useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { hasCategories: true };
    cResult[2] = obj4;
    let tmp17 = obj4;
  } else {
    tmp17 = cResult[2];
  }
  const tmpResult2 = channel(8856);
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10099)(tmp17));
  if (cResult[3] === channel) {
    if (cResult[6] === channel.guild_id) {
      if (cResult[7] === channel.id) {
        let tmp20 = cResult[8];
        let tmp21 = cResult[9];
      }
      const effect = noop.useEffect(tmp20, tmp21);
      class Y {
        constructor() {
          obj = closure_1(closure_2[10]);
          obj1 = { type: closure_14.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
          trackResult = obj.track(AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED, obj1);
          return;
        }
      }
      class U {
        constructor() {
          return closure_1_8.hasLoadedStickerPacks;
        }
      }
      cResult[10] = analyticsLocations;
      cResult[11] = channel;
      cResult[12] = onPressSticker;
      cResult[13] = tmp25;
    }
    class Y {
      constructor() {
        obj = closure_1(closure_2[10]);
        obj1 = { type: closure_14.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
        trackResult = obj.track(AnalyticEvents.CHAT_INPUT_COMPONENT_VIEWED, obj1);
        return;
      }
    }
    class U {
      constructor() {
        return closure_1_8.hasLoadedStickerPacks;
      }
    }
    ({ id: tmp22[0], guild_id: tmp22[1] } = channel);
    cResult[6] = channel.guild_id;
    cResult[7] = channel.id;
    cResult[8] = Y;
    cResult[9] = tmp22;
    tmp21 = tmp22;
    tmp20 = Y;
  }
  class X {
    constructor(arg0) {
      if ("" !== arg0) {
        tmp4 = closure_0;
        tmp5 = closure_2;
        obj2 = closure_0(closure_2[21]);
        searchAllStickersResult = obj2.searchAllStickers(arg0);
        tmp7 = closure_5;
        if (closure_5) {
          tmp10 = closure_7;
          items = [];
          items1 = [];
          tmp12 = searchAllStickersResult;
          tmp13 = searchAllStickersResult;
          for (const item10030 of searchAllStickersResult) {
            tmp14 = item10030;
            tmp15 = closure_0;
            tmp16 = closure_2;
            obj4 = closure_0(closure_2[22]);
            tmp17 = channel;
            tmp19 = closure_0;
            tmp20 = closure_2;
            stickerSendability = obj4.getStickerSendability(item10030, tmp11, channel);
            if (stickerSendability !== closure_0(closure_2[22]).StickerSendability.SENDABLE_WITH_PREMIUM) {
            } else {
              tmp21 = closure_0;
              tmp22 = closure_2;
              obj5 = closure_0(closure_2[23]);
              tmp23 = item10030;
              if (obj5.isGuildSticker(tmp14)) {
                tmp26 = item10030;
                arr1 = items.push(tmp14);
                continue;
              }
            }
            tmp24 = item10030;
            arr3 = items1.push(tmp14);
          }
          tmp28 = closure_4;
          obj1 = { nitroLocked: null, rest: null };
          obj1.nitroLocked = items;
          obj1.rest = items1;
          tmp29 = closure_4(obj1);
        } else {
          tmp8 = closure_4;
          obj7 = { nitroLocked: null, rest: null };
          obj7.nitroLocked = [];
          obj7.rest = searchAllStickersResult;
          tmp9 = closure_4(obj7);
        }
      } else {
        tmp = closure_0;
        tmp2 = closure_2;
        obj = closure_0(closure_2[20]);
        batchUpdatesResult = obj.batchUpdates(() => { ... });
      }
      return;
    }
  }
  cResult[3] = channel;
  cResult[4] = mobileStickerPickerUpsellRestyleEnabled;
  cResult[5] = X;
  const tmp18 = onPressSticker(10099)(tmp17);
}) : ((channel) => {
  channel = channel.channel;
  const onPressSticker = channel.onPressSticker;
  let analyticsLocations;
  noop = undefined;
  ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
  let tmp = closure_17();
  const fetchStickerPacks = channel(10124).useFetchStickerPacks();
  let obj = channel(10124);
  const stickerCategories = channel(10126).useStickerCategories(channel);
  let obj2 = channel(10126);
  let items = [StickersStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
  const tmp6 = analyticsLocations(noop.useState(0), 2);
  dependencyMap = tmp7;
  let obj3 = channel(504);
  analyticsLocations = onPressSticker(6664)(onPressSticker(6688).STICKER_PICKER).analyticsLocations;
  const tmp9 = onPressSticker(6664);
  [tmp11, c4] = analyticsLocations(noop.useState(null), 2);
  const tmp10 = analyticsLocations(noop.useState(null), 2);
  let mobileStickerPickerUpsellRestyleEnabled = channel(8856).useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
  let obj4 = channel(8856);
  let items1 = [channel, mobileStickerPickerUpsellRestyleEnabled];
  ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10099)({ hasCategories: true }));
  const items2 = [, ];
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
          const obj8 = { initialUpsellKey: constants5.GLOBAL_STICKER, analyticsLocation: null, analyticsLocations: null, isDismissable: true };
          const obj9 = { page: null != channel.guild_id ? tmp11.GUILD_CHANNEL : tmp11.DM_CHANNEL, section: constants4.STICKER_PICKER_UPSELL };
          obj8.analyticsLocation = obj9;
          obj8.analyticsLocations = analyticsLocations;
          const result = PremiumUpsellUtilsDefault.handleShowUpsellAlert(obj8);
          const tmp8Result = PremiumUpsellUtilsDefault;
        }
        tmpResult3 = StickersUtils;
      }
      tmpResult = StickersUtils;
    } else {
      mobileStickerPickerUpsellRestyleEnabled = stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
      if (mobileStickerPickerUpsellRestyleEnabled) {
        mobileStickerPickerUpsellRestyleEnabled = MobileStickerPickerUpsellRestyleExperiment.getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
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
    AnalyticsUtilsDefault.track(constants.CHAT_INPUT_COMPONENT_VIEWED, { type: constants6.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id });
  }, items4);
  const tmp13 = onPressSticker(10099)({ hasCategories: true });
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
    let intl = tmp2(1126).intl;
    obj9.placeholder = intl.string(tmp2(1126).t.dt5h1C);
    obj9.onChange = callback;
    obj9.onFocus = callback2;
    obj8.children = closure_15(tmp2(6554).SearchField, obj9);
    tmp19Result = closure_15(tmp21, obj8);
  }
  const items6 = [tmp19Result, , ];
  if (stateFromStores) {
    if (0 === stickerCategories.length) {
      let obj10 = { style: tmp.emptyState, children: null };
      tmp = closure_15(tmp8(10154), {});
      obj10.children = tmp;
      let tmp19Result2 = closure_15(tmp21, obj10);
    } else {
      const obj11 = { bottomSheetRef, bottomSheetIndex, setCategoryIndex: tmp7, onPressSticker: callback1, onLongPressStickerDetail: null, insetBottom: null, insetTop: null, channel: null, stickerFormats: null, searchResults: null, inPortalKeyboard: null };
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
      tmp19Result2 = closure_15(tmp8(10155), obj11);
      let tmp8Result = tmp8(10155);
    }
  } else {
    const obj12 = { animating: true, size: "large", style: tmp.loadingIndicator };
    items6[1] = closure_15(closure_6, obj12);
    const obj13 = { categories: stickerCategories, categoryIndex: tmp6[0], style: safeAreaStyle };
    items6[2] = closure_15(tmp8(10161), obj13);
    obj7.children = items6;
    obj6.children = closure_16(tmp21, obj7);
    return closure_15(channel(6664).AnalyticsLocationProvider, obj6);
  }
  obj5 = onPressSticker(6694);
}));