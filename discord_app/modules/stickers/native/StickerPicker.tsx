// discord_app/modules/stickers/native/StickerPicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import react_native from "../../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";
import StickersConstants from "../StickersConstants.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import StickersUtils from "../StickersUtils.tsx";
import StickerSendability from "../StickerSendability.tsx";
import PremiumUpsellUtilsDefault from "../../../utils/native/PremiumUpsellUtils.tsx";
import MobileStickerPickerUpsellRestyleExperiment from "../../premium/experiments/MobileStickerPickerUpsellRestyleExperiment.tsx";
import StickersSearchUtils from "../StickersSearchUtils.tsx";
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet.tsx";
import showStickerDetailActionSheet from "showStickerDetailActionSheet.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native2 from "../../../../_runtime/00017_react-native.js";
import UserStore from "../../../stores/UserStore.tsx";
import StickersStore from "../StickersStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const openStickerPackDetailActionSheetDefault = openStickerPackDetailActionSheet;
let arr1,
  arr3,
  batchUpdatesResult,
  dependencyMap,
  obj1,
  tmp16,
  tmp19,
  tmp2,
  tmp22,
  tmp23,
  tmp24,
  tmp26,
  tmp28,
  tmp29,
  tmp4,
  tmp5,
  tmp9,
  trackResult;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let unpackModuleId;
let react = react_mod;
({ View: hasOwnProperty, ActivityIndicator: metroRequire } = react_native2);
const STICKER_SEARCH_HEADER_HEIGHT = StickersConstants.STICKER_SEARCH_HEADER_HEIGHT;
({
  AnalyticEvents: c9,
  AnalyticsObjects: c10,
  AnalyticsPages: unpackModuleId,
  AnalyticsSections: closure_12,
  UpsellTypes: map1,
  ChatInputComponentViewedTypes: closure_14,
} = Constants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = {
  container: { flex: 1 },
  header: obj2,
  loadingIndicator: { alignItems: "center", justifyContent: "center", flex: 1 },
  emptyState: { marginTop: STICKER_SEARCH_HEADER_HEIGHT, alignItems: "center", justifyContent: "center", flex: 1 },
};
obj2 = { paddingVertical: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        let analyticsLocations;
        let bottomSheetIndex;
        let bottomSheetRef;
        let channel;
        let closure_2;
        let inPortalKeyboard;
        let onPressSticker;
        let paddingTop;
        let safeAreaBottomKeyboardAware;
        let safeAreaStyle;
        let stickerFormats;
        let tmp12;
        let tmp17;
        let tmp25;
        let tmp7;
        let tmp8;
        let obj = channel(576);
        const cResult = obj.c(53);
        ({ bottomSheetRef, bottomSheetIndex, channel } = arg0);
        ({ paddingTop, onPressSticker } = arg0);
        ({ stickerFormats, inPortalKeyboard } = arg0);
        closure_17();
        let obj2 = channel(10124);
        const fetchStickerPacks = obj2.useFetchStickerPacks();
        let obj3 = channel(10126);
        const stickerCategories = obj3.useStickerCategories(channel);
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
        let tmpResult = channel(504);
        const stateFromStores = tmpResult.useStateFromStores(tmp7, U);
        const tmp11 = analyticsLocations(react.useState(0), 2);
        [r10050, tmp12] = tmp11;
        dependencyMap = tmp12;
        const tmp14 = onPressSticker(6664);
        analyticsLocations = tmp14(onPressSticker(6688).STICKER_PICKER).analyticsLocations;
        const tmp15 = analyticsLocations(react.useState(null), 2);
        [r10064, react] = tmp15;
        const tmpResult2 = channel(8856);
        let mobileStickerPickerUpsellRestyleEnabled =
          tmpResult2.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          let obj4 = { hasCategories: true };
          cResult[2] = obj4;
          tmp17 = obj4;
        } else {
          tmp17 = cResult[2];
        }
        ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10099)(tmp17));
        onPressSticker(10099)(tmp17);
        if (cResult[3] === channel) {
          if (cResult[6] === channel.guild_id) {
            let tmp20;
            let tmp21;
            if (cResult[7] === channel.id) {
              tmp20 = cResult[8];
              tmp21 = cResult[9];
            }
            const effect = react.useEffect(tmp20, tmp21);
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
              if (tmp7) {
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
              batchUpdatesResult = obj.batchUpdates(() => {
                /* body not rendered: F140423 */
              });
            }
            return;
          }
        }
        cResult[3] = channel;
        cResult[4] = mobileStickerPickerUpsellRestyleEnabled;
        cResult[5] = X;
      }
    : (channel) => {
        let SearchField;
        let _undefined;
        let bottomSheetIndex;
        let bottomSheetRef;
        let c4;
        let closure_2;
        let inPortalKeyboard;
        let intl;
        let items6;
        let obj7;
        let obj9;
        let paddingTop;
        let safeAreaBottomKeyboardAware;
        let safeAreaStyle;
        let stickerFormats;
        let tmp12;
        let tmp20Result4;
        let tmp27;
        channel = channel.channel;
        const onPressSticker = channel.onPressSticker;
        let analyticsLocations;
        react = undefined;
        ({ bottomSheetRef, bottomSheetIndex, paddingTop, stickerFormats, inPortalKeyboard } = channel);
        const tmp = closure_17();
        let obj = channel(10124);
        const fetchStickerPacks = obj.useFetchStickerPacks();
        let obj2 = channel(10126);
        const stickerCategories = obj2.useStickerCategories(channel);
        let obj3 = channel(504);
        let items = [StickersStore];
        const stateFromStores = obj3.useStateFromStores(items, () => StickersStore.hasLoadedStickerPacks);
        const tmp6 = analyticsLocations(react.useState(0), 2);
        dependencyMap = tmp8;
        const first = tmp6[0];
        const tmp10 = onPressSticker(6664);
        analyticsLocations = tmp10(onPressSticker(6688).STICKER_PICKER).analyticsLocations;
        const tmp11 = analyticsLocations(react.useState(null), 2);
        [tmp12, c4] = tmp11;
        let obj4 = channel(8856);
        let mobileStickerPickerUpsellRestyleEnabled =
          obj4.useMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
        let items1 = [channel, mobileStickerPickerUpsellRestyleEnabled];
        ({ safeAreaStyle, safeAreaBottomKeyboardAware } = onPressSticker(10099)({ hasCategories: true }));
        const items2 = [,];
        ({ id: arr4[0], guild_id: arr4[1] } = channel);
        onPressSticker(10099)({ hasCategories: true });
        const callback = react.useCallback((arg0) => {
          if ("" !== arg0) {
            const obj2 = StickersSearchUtils;
            const searchAllStickersResult = obj2.searchAllStickers(arg0);
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
            const obj = react_native;
            obj.batchUpdates(() => {
              closure_1_2(0);
              _undefined(null);
            });
          }
        }, items1);
        const effect = react.useEffect(() => {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type: constants4.STICKER, channel_id: channel.id, guild_id: channel.guild_id };
          obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj2);
        }, items2);
        const items3 = [channel, onPressSticker, analyticsLocations];
        const items4 = [channel];
        const callback1 = react.useCallback((pack_id) => {
          let intl;
          let obj3;
          let obj5;
          let obj7;
          const obj = StickerSendability;
          const stickerSendability = obj.getStickerSendability(pack_id, UserStore.getCurrentUser(), channel);
          if (stickerSendability === StickerSendability.StickerSendability.SENDABLE) {
            onPressSticker(pack_id);
          } else if (stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_PREMIUM) {
            const tmpResult = StickersUtils;
            if (tmpResult.isStandardSticker(pack_id)) {
              const stickerPack = StickersStore.getStickerPack(pack_id.pack_id);
              if (null != stickerPack) {
                let DM_CHANNEL2;
                const tmp25 = openStickerPackDetailActionSheetDefault;
                if (null != channel.guild_id) {
                  DM_CHANNEL2 = unpackModuleId.GUILD_CHANNEL;
                } else {
                  DM_CHANNEL2 = unpackModuleId.DM_CHANNEL;
                }
                const obj2 = {
                  analyticsLocation: obj3,
                  analyticsPopoutType: openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_DETAIL,
                  stickerPack,
                };
                obj3 = { page: DM_CHANNEL2 };
                tmp25(obj2);
              }
            } else {
              const tmpResult3 = StickersUtils;
              if (tmpResult3.isGuildSticker(pack_id)) {
                let DM_CHANNEL;
                let tmp13;
                const track = AnalyticsUtilsDefault.track;
                const PREMIUM_PROMOTION_OPENED = constants.PREMIUM_PROMOTION_OPENED;
                AnalyticsUtilsDefault;
                if (null != channel.guild_id) {
                  DM_CHANNEL = unpackModuleId.GUILD_CHANNEL;
                  tmp13 = unpackModuleId;
                } else {
                  tmp13 = unpackModuleId;
                  DM_CHANNEL = unpackModuleId.DM_CHANNEL;
                }
                const obj4 = { location: obj5 };
                obj5 = { page: DM_CHANNEL, section: constants3.STICKER_PICKER_UPSELL, object: constants2.STICKER };
                track(PREMIUM_PROMOTION_OPENED, obj4);
                const obj6 = {
                  initialUpsellKey: map1.GLOBAL_STICKER,
                  analyticsLocation: obj7,
                  analyticsLocations,
                  isDismissable: true,
                };
                obj7 = {
                  page: null != channel.guild_id ? tmp13.GUILD_CHANNEL : tmp13.DM_CHANNEL,
                  section: constants3.STICKER_PICKER_UPSELL,
                };
                const tmp9Result = PremiumUpsellUtilsDefault;
                const result = tmp9Result.handleShowUpsellAlert(obj6);
              }
            }
          } else {
            mobileStickerPickerUpsellRestyleEnabled =
              stickerSendability === StickerSendability.StickerSendability.SENDABLE_WITH_BOOSTED_GUILD;
            if (mobileStickerPickerUpsellRestyleEnabled) {
              const tmpResult4 = MobileStickerPickerUpsellRestyleExperiment;
              mobileStickerPickerUpsellRestyleEnabled =
                tmpResult4.getMobileStickerPickerUpsellRestyleEnabled("native.StickerPicker");
            }
            if (mobileStickerPickerUpsellRestyleEnabled) {
              const obj8 = { key: "STICKER_PICKER_LIST_PRESS_DISABLED", content: intl.string(intl2.t.UTExh3) };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl2.intl;
              open(obj8);
            }
          }
        }, items3);
        const callback2 = react.useCallback(() => {
          const obj = AnalyticsUtilsDefault;
          const obj2 = { type: constants4.STICKER_SEARCH, channel_id: channel.id, guild_id: channel.guild_id };
          obj.track(constants.CHAT_INPUT_COMPONENT_VIEWED, obj2);
        }, items4);
        let obj5 = onPressSticker(6694);
        const items5 = [channel];
        const tidaWebformEnabled = obj5.useExperiment(
          { location: "StickerPicker" },
          { autoTrackExposure: false },
        ).tidaWebformEnabled;
        const callback3 = react.useCallback((renderableSticker) => {
          const obj = showStickerDetailActionSheet;
          const obj2 = { renderableSticker, channel };
          const result = obj.showStickerDetailActionSheet(obj2);
        }, items5);
        let obj6 = { value: analyticsLocations, children: closure_16(mobileStickerPickerUpsellRestyleEnabled, obj7) };
        obj7 = { style: tmp.container, children: items6 };
        let tmp20Result = null;
        const AnalyticsLocationProvider = channel(6664).AnalyticsLocationProvider;
        if (0 !== stickerCategories.length) {
          let obj8 = { style: tmp.header, children: closure_15(SearchField, obj9) };
          obj9 = {
            size: "md",
            placeholder: intl.string(channel(1126).t.dt5h1C),
            onChange: callback,
            onFocus: callback2,
            round: true,
          };
          SearchField = tmp2(6554).SearchField;
          intl = tmp2(1126).intl;
          tmp20Result = closure_15(tmp22, obj8);
        }
        items6 = [tmp20Result, ,];
        if (stateFromStores) {
          let tmp20Result3;
          if (0 === stickerCategories.length) {
            const obj10 = { style: tmp.emptyState, children: closure_15(onPressSticker(10154), {}) };
            tmp20Result3 = closure_15(tmp22, obj10);
          } else {
            const obj11 = {
              bottomSheetRef,
              bottomSheetIndex,
              setCategoryIndex: tmp6[1],
              onPressSticker: callback1,
              onLongPressStickerDetail: tmp27,
              insetBottom: safeAreaBottomKeyboardAware,
              insetTop: paddingTop,
              channel,
              stickerFormats,
              searchResults: tmp12,
              inPortalKeyboard,
            };
            tmp27 = undefined;
            let tmp9Result = tmp9(10155);
            if (tidaWebformEnabled) {
              tmp27 = callback3;
            }
            tmp20Result3 = closure_15(tmp9Result, obj11);
          }
          tmp20Result4 = tmp20Result3;
        } else {
          const obj12 = { animating: true, size: "large", style: tmp.loadingIndicator };
          tmp20Result4 = closure_15(closure_6, obj12);
        }
        items6[1] = tmp20Result4;
        items6[2] = closure_15(onPressSticker(10161), {
          categories: stickerCategories,
          categoryIndex: first,
          style: safeAreaStyle,
        });
        return closure_15(AnalyticsLocationProvider, obj6);
      },
);
let result = size.fileFinishedImporting("modules/stickers/native/StickerPicker.tsx");

export default memoResult;
