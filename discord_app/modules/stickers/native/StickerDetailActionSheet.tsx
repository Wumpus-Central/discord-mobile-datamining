// discord_app/modules/stickers/native/StickerDetailActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import StickersUtils from "../StickersUtils.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import Sheet_BottomSheet from "../../../design/components/Sheet/native/BottomSheet.native.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import StarIcon from "../../../design/components/Icon/native/redesign/generated/StarIcon.tsx";
import StarOutlineIcon2 from "../../../design/components/Icon/native/redesign/generated/StarOutlineIcon.tsx";
import StickersHooks from "../StickersHooks.tsx";
import StickersActionCreators from "../StickersActionCreators.tsx";
import openStickersPremiumUpsellAlertDefault from "premium/openStickersPremiumUpsellAlert.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import StickersStore from "../StickersStore.tsx";

require = fn;
function StandardStickerDetail(chatInputRef) {
  ({ sticker, channel } = chatInputRef);
  chatInputRef = chatInputRef.chatInputRef;
  let stateFromStores;
  let memo;
  const pack_id = sticker.pack_id;
  const tmp = closure_24();
  const items = [StickersStore];
  stateFromStores = stateFromStores(pack_id[22]).useStateFromStores(items, () => StickersStore.getStickerPack(pack_id));
  let obj = stateFromStores(pack_id[22]);
  const items1 = [StickersStore];
  const stateFromStores1 = stateFromStores(pack_id[22]).useStateFromStores(items1, () =>
    StickersStore.isPremiumPack(pack_id),
  );
  let obj2 = stateFromStores(pack_id[22]);
  const fetchStickerPack = stateFromStores(pack_id[14]).useFetchStickerPack(pack_id);
  const diff = chatInputRef(pack_id[23])().width - 2 * closure_12;
  const rounded = Math.floor(Math.min(ACTION_SHEET_MAX_WIDTH, diff - closure_13) / (closure_14 + closure_13));
  const items2 = [channel.guild_id];
  memo = memo.useMemo(() => {
    if (null != stateFromStores.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items2);
  const items3 = [memo, stateFromStores];
  const effect = memo.useEffect(() => {
    if (null != stateFromStores) {
      const obj2 = { location: memo, type: "Sticker Upsell Sheet", sticker_pack_id: tmp.id };
      AnalyticsUtilsDefault.track(constants3.OPEN_POPOUT, obj2);
    }
  }, items3);
  if (null == stateFromStores) {
    let tmp13Result = closure_21(closure_7, { size: "large" });
  } else {
    const intl2 = tmp2(tmp3[19]).intl;
    const format = intl2.format;
    const t = tmp2(tmp3[19]).t;
    if (stateFromStores1) {
      const obj4 = { stickerPackName: stateFromStores.name };
      let formatResult = format(t.auckXz, obj4);
    } else {
      const obj5 = { stickerPackName: stateFromStores.name };
      formatResult = format(t.OzB6e3, obj5);
    }
    const obj6 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
    const items4 = [closure_21(tmp2(tmp3[18]).Text, obj6), , , ,];
    const obj7 = { style: tmp.description, variant: "text-sm/medium", children: formatResult };
    items4[1] = closure_21(tmp2(tmp3[18]).Text, obj7);
    const obj8 = { containerWidth: diff, stickers: null, rowSize: null };
    const stickers = stateFromStores.stickers;
    obj8.stickers = stickers.slice(0, rounded);
    obj8.rowSize = rounded;
    items4[2] = closure_21(tmp7(tmp3[25]), obj8);
    let tmp15Result = null;
    if (stateFromStores1) {
      const obj9 = { style: null };
      const obj10 = { height: tmp7(tmp3[13]).space.PX_16 };
      obj9.style = obj10;
      tmp15Result = closure_21(closure_6, obj9);
    }
    items4[3] = tmp15Result;
    let tmp15Result2 = stateFromStores1;
    if (stateFromStores1) {
      const obj11 = { variant: "secondary", text: null, onPress: null };
      const intl = tmp2(tmp3[19]).intl;
      obj11.text = intl.string(tmp2(tmp3[19]).t.GPy3Ar);
      obj11.onPress = function onPress() {
        const result = stateFromStores(pack_id[27]).hideStickerDetailActionSheet();
        if (null != stateFromStores) {
          if (_slicedToArray) {
            if (null != importDefault) {
              const result1 = stateFromStores(pack_id[28]).openStickerPickerToPackId(tmp6, dependencyMap);
              const tmpResult = stateFromStores(pack_id[28]);
            }
          }
        }
        const obj2 = { analyticsLocation: noop, analyticsPopoutType: null, stickerPack: null };
        const obj = stateFromStores(pack_id[27]);
        obj2.analyticsPopoutType = stateFromStores(pack_id[29]).AnalyticsPopoutType.STICKER_PACK_UPSELL;
        obj2.stickerPack = stateFromStores;
        chatInputRef(pack_id[29])(obj2);
        const tmp7 = chatInputRef(pack_id[29]);
      };
      tmp15Result2 = closure_21(tmp2(tmp3[26]).Button, obj11);
    }
    const obj12 = { children: null };
    items4[4] = tmp15Result2;
    obj12.children = items4;
    tmp13Result = closure_23(closure_22, obj12);
    const tmp7Result = tmp7(tmp3[25]);
  }
  return tmp13Result;
}
function UnavailableStickerDetail(arg0) {
  ({ renderableSticker, channel } = arg0);
  importDefault = undefined;
  let stickerAssetUrl;
  const tmp = closure_24();
  const currentUser = UserStore.getCurrentUser();
  const items = [channel.guild_id];
  const result = require("PremiumUtils").canUseCustomStickersEverywhere(currentUser);
  importDefault = noop.useMemo(() => {
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items);
  let obj = require("PremiumUtils");
  let tidaWebformEnabled = require("TidaWebformExperiment").useExperiment(
    { location: "StickerDetailActionSheet" },
    { autoTrackExposure: false },
  ).tidaWebformEnabled;
  const DeveloperMode = channel(stickerAssetUrl[32]).DeveloperMode;
  if (tidaWebformEnabled) {
    tidaWebformEnabled = DeveloperMode.useSetting();
  }
  let obj3 = require("TidaWebformExperiment");
  stickerAssetUrl = channel(stickerAssetUrl[33]).getStickerAssetUrl(renderableSticker);
  const items1 = [stickerAssetUrl];
  const obj4 = { style: tmp.guildEmojiTopContainer, children: null };
  const callback = noop.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequireImpl(9856, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items1);
  const items2 = [closure_21(require("Sticker"), { sticker: renderableSticker, size: 48 }), ,];
  const obj5 = { style: tmp.guildEmojiDescription, children: null };
  const items3 = [
    closure_21(channel(stickerAssetUrl[18]).Text, {
      variant: "heading-md/extrabold",
      color: "mobile-text-heading-primary",
      children: renderableSticker.name,
    }),
  ];
  const obj7 = { style: tmp.description, variant: "text-sm/medium", children: null };
  const intl = channel(tmp4[19]).intl;
  if (result) {
    let stringResult = intl.string(channel(tmp4[19]).t.vZaScH);
  } else {
    const obj8 = {
      openPremiumSettings() {
        ActionSheetActionCreatorsDefault.hideActionSheet();
        AnalyticsUtilsDefault.track(constants3.PREMIUM_PROMOTION_OPENED, {
          location_page: analyticsLocation.page,
          location_section: analyticsLocation.section,
        });
        const obj3 = { location_page: analyticsLocation.page, location_section: analyticsLocation.section };
        openUserSettings.openUserSettings({ screen: constants5.PREMIUM, params: { analyticsLocation } });
      },
    };
    stringResult = intl.format(channel(tmp4[19]).t.hGWuxU, obj8);
  }
  obj7.children = stringResult;
  items3[1] = closure_21(channel(stickerAssetUrl[18]).Text, obj7);
  obj5.children = items3;
  items2[1] = closure_23(closure_6, obj5);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = null != stickerAssetUrl;
  }
  if (tidaWebformEnabled) {
    const obj9 = { accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl2 = channel(tmp4[19]).intl;
    obj9.accessibilityLabel = intl2.string(channel(tmp4[19]).t.PdRCRg);
    obj9.style = tmp.moreMenuIcon;
    obj9.onPress = callback;
    const obj10 = { color: tmp3(tmp4[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj9.children = closure_21(channel(tmp4[41]).MoreHorizontalIcon, obj10);
    tidaWebformEnabled = closure_21(closure_8, obj9);
  }
  items2[2] = tidaWebformEnabled;
  obj4.children = items2;
  return closure_23(closure_6, obj4);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const StickerPickerConstants = fn(9725);
({ PADDING_HORIZONTAL: closure_12, MIN_MARGIN: map1, STICKER_SIZE: closure_14 } = StickerPickerConstants);
const Constants = fn(1074);
({
  AnalyticsPages: closure_15,
  AnalyticsSections: closure_16,
  AnalyticEvents: closure_17,
  GuildFeatures: closure_18,
  UserSettingsSections: closure_19,
} = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(6567).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
const createStyles = fn(4829);
const PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj = {
  content: { padding: 16, paddingBottom: num },
  description: { lineHeight: 18, marginTop: 4 },
  guildEmojiTopContainer: { flexDirection: "row", alignItems: "center" },
  buttonContainer: { marginTop: nativeDefault.space.PX_12 },
  guildEmojiDescription: { paddingLeft: 16, flex: 1 },
  divider: null,
  moreMenuIcon: null,
  favoriteContainer: null,
  starIcon: null,
  starIconSelected: null,
  starIconUnselected: null,
};
let obj4 = { marginTop: nativeDefault.space.PX_12 };
obj.divider = {
  marginLeft: 0,
  marginTop: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.moreMenuIcon = { height: 32, width: 32, justifyContent: "center", alignItems: "center" };
let obj5 = {
  marginLeft: 0,
  marginTop: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.favoriteContainer = { paddingTop: nativeDefault.space.PX_4 };
obj.starIcon = { height: 32, width: 32 };
let obj6 = { paddingTop: nativeDefault.space.PX_4 };
obj.starIconSelected = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj7 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj.starIconUnselected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_24 = createStyles.createStyles(obj);
function GuildStickerDetail(sticker) {
  sticker = sticker.sticker;
  const channel = sticker.channel;
  let first1;
  noop = undefined;
  let stickerAssetUrl;
  let analyticsLocation;
  let obj7;
  let ref;
  const tmp2 = closure_24();
  const tmp4 = first1(noop.useState(null), 2);
  let guild = tmp4[0];
  closure_3 = tmp4[1];
  const items = [ref];
  const stateFromStores = sticker(guild[22]).useStateFromStores(items, () => GuildStore.getGuild(sticker.guild_id));
  let hasItem = null == stateFromStores;
  if (!hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants4.DISCOVERABLE);
  }
  const tmp3Result = first1(noop.useState(!hasItem), 2);
  first1 = tmp3Result[0];
  noop = tmp3Result[1];
  const currentUser = UserStore.getCurrentUser();
  let obj2 = sticker(guild[22]);
  let result = channel(guild[30]).canUseCustomStickersEverywhere(currentUser);
  let obj3 = channel(guild[30]);
  let tidaWebformEnabled = channel(guild[31]).useExperiment(
    { location: "StickerDetailActionSheet" },
    { autoTrackExposure: false },
  ).tidaWebformEnabled;
  const DeveloperMode = tmp6(tmp7[32]).DeveloperMode;
  let id = sticker.id;
  closure_129_0 = id;
  const setting = DeveloperMode.useSetting();
  let tmpResult = closure_24();
  closure_129_1 = tmpResult;
  let obj4 = channel(guild[31]);
  const favoriteStickerIds = sticker(guild[14]).useFavoriteStickerIds();
  const hasItem1 = favoriteStickerIds.includes(id);
  closure_129_2 = hasItem1;
  const items1 = [tmpResult];
  const callback = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(channel.starIcon);
    if (arg0) {
      const merged1 = Object.assign(channel.starIconSelected);
      let style = obj;
    } else {
      const merged2 = Object.assign(channel.starIconUnselected);
      style = obj;
    }
    if (arg0) {
      let StarOutlineIcon = StarIcon.StarIcon;
    } else {
      StarOutlineIcon = StarOutlineIcon2.StarOutlineIcon;
    }
    return __initData(StarOutlineIcon, { style });
  }, items1);
  closure_129_3 = callback;
  const items2 = [hasItem1, id, callback];
  const callback1 = obj.useCallback(() => {
    function content() {
      const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
      const intl = sticker(first[19]).intl;
      const string = intl.string;
      const t = sticker(first[19]).t;
      if (guild) {
        let stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      obj.children = stringResult;
      return closure_2_21(sticker(first[18]).Text, obj);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
    const obj2 = StickersActionCreators;
    if (first) {
      obj2.unfavoriteSticker(sticker);
      const obj3 = {
        key: "STICKER_UNFAVORITED",
        icon() {
          return closure_1_3(false);
        },
        content,
      };
      ToastActionCreatorsDefault.open(obj3);
      const tmpResult = ToastActionCreatorsDefault;
    } else {
      obj2.favoriteSticker(sticker);
      const obj4 = {
        key: "STICKER_FAVORITED",
        icon() {
          return closure_1_3(true);
        },
        content,
      };
      ToastActionCreatorsDefault.open(obj4);
      const tmpResult2 = ToastActionCreatorsDefault;
    }
  }, items2);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = setting;
  }
  const tmp6Result = sticker(guild[14]);
  stickerAssetUrl = sticker(guild[33]).getStickerAssetUrl(sticker);
  const items3 = [stickerAssetUrl];
  const items4 = [channel.guild_id];
  const callback2 = obj.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { stickerUrl: tmp };
      obj.openLazy(asyncRequireImpl(9856, dependencyMap.paths), "StickerOptionsActionSheet", obj2, "stack");
    }
  }, items3);
  analyticsLocation = obj.useMemo(() => {
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items4);
  const tmp6Result3 = sticker(guild[33]);
  const obj5 = { guild_id: channel.getGuildId() };
  let merged = Object.assign(sticker(guild[36]).collectChannelAnalyticsMetadata(channel));
  const items5 = [sticker.id, first1];
  const effect = obj.useEffect(() => {
    closure_0 = async function _fetchDiscoverableGuild() {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              c2 = 1;
              v3 = 1;
              const obj4 = { value: channel(guild[38])(tmp2.id), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            v3(closure_128_0);
            closure_1_5(true);
            v3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp16) {
          v3 = tmp;
          throw tmp16;
        }
      }
    };
    if (!first1) {
      (function fetchDiscoverableGuild() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })();
    }
  }, items5);
  const tmp26 = sticker.guild_id === channel.getGuildId();
  let intl = tmp6(tmp7[19]).intl;
  if (result) {
    const string2 = intl.string;
    let fZ0DiG = tmp6(tmp7[19]).t;
    if (!tmp9) {
      if (tmp27) {
        let string2Result = string2(fZ0DiG.yHmoR9);
      } else {
        string2Result = string2(fZ0DiG.vZaScH);
      }
    }
    if (tmp26) {
      fZ0DiG = fZ0DiG.fZ0DiG;
      let string2Result1 = string2(fZ0DiG);
    } else {
      string2Result1 = string2(fZ0DiG["1f6D9m"]);
    }
  } else {
    if (tmp9) {
      let string = intl.string;
      let t = tmp6(tmp7[19]).t;
      if (tmp26) {
        let stringResult = string(t.jNphpt);
        let flag = true;
        let str = "Custom Sticker Popout (Upsell)";
        let flag2 = true;
      } else {
        stringResult = string(t.lyD5ZW);
        flag = true;
        str = "Custom Sticker Popout (Upsell)";
        flag2 = true;
      }
    } else if (tmp27) {
      stringResult = intl.string(tmp6(tmp7[19]).t.IuXYch);
      flag = true;
      str = "Custom Sticker Popout (Upsell)";
      flag2 = true;
    } else {
      const obj6 = {
        openPremiumSettings() {
          ActionSheetActionCreatorsDefault.hideActionSheet();
          AnalyticsUtilsDefault.track(constants3.PREMIUM_PROMOTION_OPENED, {
            location_page: analyticsLocation.page,
            location_section: analyticsLocation.section,
          });
          const obj3 = { location_page: analyticsLocation.page, location_section: analyticsLocation.section };
          openUserSettings.openUserSettings({ screen: constants5.PREMIUM, params: { analyticsLocation } });
        },
      };
      stringResult = intl.format(tmp6(tmp7[19]).t.hGWuxU, obj6);
      flag = false;
      str = "Custom Sticker Popout (Soft Upsell)";
      flag2 = false;
    }
    let tmp33 = !flag2;
    if (!flag2) {
      tmp33 = !tmp9;
    }
    if (tmp33) {
      tmp33 = tmp27;
    }
    obj7 = { popoutAnalyticsConfig: obj.useRef(obj5).current, popoutType: str };
    ref = obj.useRef(obj7);
    const effect1 = obj.useEffect(() => {
      closure_9.current = obj7;
    });
    const items6 = [first1];
    const effect2 = obj.useEffect(() => {
      const popoutAnalyticsConfig = ref.current.popoutAnalyticsConfig;
      if (first1) {
        const obj2 = { type: tmp };
        const merged = Object.assign(popoutAnalyticsConfig);
        AnalyticsUtilsDefault.track(constants3.OPEN_POPOUT, obj2);
      }
    }, items6);
    let tmp37Result3 = null;
    if (first1) {
      const obj8 = { style: tmp2.guildEmojiTopContainer, children: null };
      const obj9 = { sticker, size: 48 };
      const items7 = [closure_21(tmp15(tmp7[40]), obj9), ,];
      const obj10 = { style: tmp2.guildEmojiDescription, children: null };
      const obj11 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
      const items8 = [closure_21(tmp6(tmp7[18]).Text, obj11)];
      const obj12 = { style: tmp2.description, variant: "text-sm/medium", children: stringResult };
      items8[1] = closure_21(tmp6(tmp7[18]).Text, obj12);
      obj10.children = items8;
      items7[1] = closure_23(stickerAssetUrl, obj10);
      let tmp40Result = tidaWebformEnabled;
      if (tidaWebformEnabled) {
        tmp40Result = null != stickerAssetUrl;
      }
      if (tmp40Result) {
        const obj13 = { accessibilityLabel: null, style: null, onPress: null, children: null };
        const intl2 = tmp6(tmp7[19]).intl;
        obj13.accessibilityLabel = intl2.string(tmp6(tmp7[19]).t.PdRCRg);
        obj13.style = tmp2.moreMenuIcon;
        obj13.onPress = callback2;
        const obj14 = { color: tmp15(tmp7[13]).colors.INTERACTIVE_TEXT_DEFAULT };
        obj13.children = closure_21(tmp6(tmp7[41]).MoreHorizontalIcon, obj14);
        tmp40Result = closure_21(obj7, obj13);
      }
      items7[2] = tmp40Result;
      obj8.children = items7;
      const items9 = [closure_23(stickerAssetUrl, obj8), , , ,];
      if (flag) {
        const obj15 = { style: tmp2.buttonContainer, children: null };
        const obj16 = { text: null, onPress: null };
        const intl3 = tmp6(tmp7[19]).intl;
        obj16.text = intl3.string(tmp6(tmp7[19]).t["gl/XHJ"]);
        obj16.onPress = function onPress() {
          return openStickersPremiumUpsellAlertDefault(closure_7);
        };
        const items10 = [closure_21(tmp15(tmp7[42]), obj16)];
        const obj17 = { style: null };
        const obj18 = { height: tmp15(tmp7[13]).space.PX_16 };
        obj17.style = obj18;
        items10[1] = closure_21(tmp39, obj17);
        obj15.children = items10;
        flag = closure_23(tmp39, obj15);
        const tmp15Result = tmp15(tmp7[42]);
      }
      items9[1] = flag;
      let tmp37Result = tmp33;
      if (tmp33) {
        const obj19 = { style: tmp2.buttonContainer, children: null };
        const obj20 = { text: null, onPress: null };
        const intl4 = tmp6(tmp7[19]).intl;
        obj20.text = intl4.string(tmp6(tmp7[19]).t.riu2R5);
        obj20.onPress = function onPress() {
          if (null != first) {
            const id = first.id;
            GuildActionCreatorsDefault.joinGuild(id).then(() => {
              const result = channel(first[37]).transitionToGuildSync(id);
            });
            const joinGuildResult = GuildActionCreatorsDefault.joinGuild(id);
          }
        };
        const items11 = [closure_21(tmp6(tmp7[26]).Button, obj20)];
        const obj21 = { style: null };
        const obj22 = { height: tmp15(tmp7[13]).space.PX_16 };
        obj21.style = obj22;
        items11[1] = closure_21(tmp39, obj21);
        obj19.children = items11;
        tmp37Result = closure_23(tmp39, obj19);
      }
      items9[2] = tmp37Result;
      if (!(null != stateFromStores || null != guild)) {
        items9[3] = tmp45;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = tmp9;
        }
        if (tidaWebformEnabled) {
          const obj23 = { style: tmp2.divider };
          const items12 = [closure_21(tmp6(tmp7[44]).FormDivider, obj23)];
          const obj24 = { style: tmp2.favoriteContainer, children: null };
          const intl6 = tmp6(tmp7[19]).intl;
          const string4 = intl6.string;
          const t2 = tmp6(tmp7[19]).t;
          if (hasItem1) {
            let string4Result = string4(t2.XhzKyF);
          } else {
            string4Result = string4(t2.kWmiPW);
          }
          const obj25 = { text: string4Result, variant: null, size: "md", onPress: null };
          let str3 = "primary";
          if (hasItem1) {
            str3 = "tertiary";
          }
          const obj26 = { children: null };
          obj25.variant = str3;
          obj25.onPress = callback1;
          obj24.children = closure_21(tmp6(tmp7[26]).Button, obj25);
          items12[1] = closure_21(tmp39, obj24);
          obj26.children = items12;
          tidaWebformEnabled = closure_23(closure_22, obj26);
        }
        const obj27 = { children: null };
        items9[4] = tidaWebformEnabled;
        obj27.children = items9;
        tmp37Result3 = closure_23(closure_22, obj27);
      } else {
        const obj28 = { style: tmp2.divider };
        const items13 = [closure_21(tmp6(tmp7[44]).FormDivider, obj28)];
        if (guild == null) {
          guild = stateFromStores;
        }
        let obj29 = { guild, showingJoinGuildCta: tmp33, hasJoinedGuild: tmp9, title: null };
        const intl5 = tmp6(tmp7[19]).intl;
        const string3 = intl5.string;
        let t1 = tmp6(tmp7[19]).t;
        if (tmp9) {
          let string3Result = string3(t1.kx6pEG);
        } else {
          string3Result = string3(t1.pDE7Gb);
        }
        t1 = { children: null };
        obj29.title = string3Result;
        obj29 = closure_21(tmp15(tmp7[45]), obj29);
        items13[1] = obj29;
        t1.children = items13;
        closure_23(closure_22, t1);
        const tmp15Result2 = tmp15(tmp7[45]);
      }
    }
    return tmp37Result3;
  }
  const tmp6Result4 = sticker(guild[36]);
}
let obj8 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerDetailActionSheet.tsx");

export default noop.memo(function StickerDetailActionSheet(chatInputRef) {
  ({ renderableSticker, channel } = chatInputRef);
  const tmp = closure_24();
  const tmp4 = _slicedToArray(StickersHooks.useStickerForRenderableSticker(renderableSticker, true), 2);
  const first = tmp4[0];
  let tmp6Result2 = __initData(React5, { size: "large" });
  if (null == first) {
    if (tmp4[1]) {
      const obj2 = { renderableSticker, channel };
      let tmp6Result = __initData(UnavailableStickerDetail, obj2);
    }
    const obj3 = { startExpanded: true, children: null };
    const obj4 = { style: tmp.content, children: tmp6Result };
    obj3.children = __initData(timestampProducer, obj4);
    return __initData(Sheet_BottomSheet.BottomSheet, obj3);
  }
  tmp6Result = tmp6Result2;
  if (null != first) {
    if (tmp2Result.isStandardSticker(first)) {
      const obj5 = { sticker: first, channel, chatInputRef: chatInputRef.chatInputRef };
      tmp6Result2 = __initData(StandardStickerDetail, obj5);
    } else {
      if (tmp2Result2.isGuildSticker(first)) {
        const obj6 = { sticker: first, channel };
        tmp6Result2 = __initData(GuildStickerDetail, obj6);
      }
      tmp2Result2 = StickersUtils;
    }
    tmp6Result = tmp6Result2;
    tmp2Result = StickersUtils;
  }
});
