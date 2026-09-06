// discord_app/modules/stickers/native/StickerDetailActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
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
  let obj = stateFromStores(pack_id[22]);
  const items = [StickersStore];
  stateFromStores = obj.useStateFromStores(items, () => StickersStore.getStickerPack(pack_id));
  let obj1 = stateFromStores(pack_id[22]);
  const items1 = [StickersStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => StickersStore.isPremiumPack(pack_id));
  let obj2 = stateFromStores(pack_id[14]);
  const fetchStickerPack = obj2.useFetchStickerPack(pack_id);
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
      const obj = { location: memo, type: "Sticker Upsell Sheet", sticker_pack_id: tmp.id };
      obj.track(constants3.OPEN_POPOUT, obj);
    }
  }, items3);
  if (null == stateFromStores) {
    let tmp13Result = closure_21(closure_7, { size: "large" });
  } else {
    const intl2 = tmp2(tmp3[19]).intl;
    const format = intl2.format;
    const t = tmp2(tmp3[19]).t;
    if (stateFromStores1) {
      obj = { stickerPackName: stateFromStores.name };
      let formatResult = format(t.auckXz, obj);
    } else {
      obj = { stickerPackName: stateFromStores.name };
      formatResult = format(t.OzB6e3, obj);
    }
    obj1 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
    const items4 = [closure_21(tmp2(tmp3[18]).Text, obj1), , , ,];
    obj2 = { style: tmp.description, variant: "text-sm/medium", children: formatResult };
    items4[1] = closure_21(tmp2(tmp3[18]).Text, obj2);
    const obj3 = { containerWidth: diff, stickers: null, rowSize: null };
    const stickers = stateFromStores.stickers;
    obj3.stickers = stickers.slice(0, rounded);
    obj3.rowSize = rounded;
    items4[2] = closure_21(tmp7(tmp3[25]), obj3);
    let tmp15Result = null;
    if (stateFromStores1) {
      const obj4 = { style: null };
      const obj5 = { height: tmp7(tmp3[13]).space.PX_16 };
      obj4.style = obj5;
      tmp15Result = closure_21(closure_6, obj4);
    }
    items4[3] = tmp15Result;
    tmp15Result = stateFromStores1;
    if (stateFromStores1) {
      const obj6 = { variant: "secondary", text: null, onPress: null };
      const intl = tmp2(tmp3[19]).intl;
      obj6.text = intl.string(tmp2(tmp3[19]).t.GPy3Ar);
      obj6.onPress = function onPress() {
        let obj = stateFromStores(pack_id[27]);
        const result = obj.hideStickerDetailActionSheet();
        if (null != stateFromStores) {
          if (_slicedToArray) {
            if (null != importDefault) {
              const result1 = stateFromStores(pack_id[28]).openStickerPickerToPackId(tmp6, dependencyMap);
              const tmpResult = stateFromStores(pack_id[28]);
            }
          }
        }
        obj = {
          analyticsLocation: noop,
          analyticsPopoutType: stateFromStores(pack_id[29]).AnalyticsPopoutType.STICKER_PACK_UPSELL,
          stickerPack: stateFromStores,
        };
        chatInputRef(pack_id[29])(obj);
        const tmp7 = chatInputRef(pack_id[29]);
      };
      tmp15Result = closure_21(tmp2(tmp3[26]).Button, obj6);
    }
    const obj7 = { children: null };
    items4[4] = tmp15Result;
    obj7.children = items4;
    tmp13Result = closure_23(closure_22, obj7);
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
  let obj = require("PremiumUtils");
  let obj1 = noop;
  const items = [channel.guild_id];
  const result = obj.canUseCustomStickersEverywhere(currentUser);
  importDefault = noop.useMemo(() => {
    if (null != channel.guild_id) {
      let DM_CHANNEL = constants.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = constants.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: constants2.STICKER_POPOUT };
  }, items);
  let obj2 = require("TidaWebformExperiment");
  let tidaWebformEnabled = obj2.useExperiment(
    { location: "StickerDetailActionSheet" },
    { autoTrackExposure: false },
  ).tidaWebformEnabled;
  const DeveloperMode = channel(stickerAssetUrl[32]).DeveloperMode;
  if (tidaWebformEnabled) {
    tidaWebformEnabled = DeveloperMode.useSetting();
  }
  stickerAssetUrl = channel(stickerAssetUrl[33]).getStickerAssetUrl(renderableSticker);
  const items1 = [stickerAssetUrl];
  obj = { style: tmp.guildEmojiTopContainer, children: null };
  const callback = obj1.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = { stickerUrl: tmp };
      obj.openLazy(asyncRequireImpl(10405, dependencyMap.paths), "StickerOptionsActionSheet", obj, "stack");
    }
  }, items1);
  const items2 = [closure_21(require("Sticker"), { sticker: renderableSticker, size: 48 }), ,];
  obj = { style: tmp.guildEmojiDescription, children: null };
  obj1 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: renderableSticker.name };
  const items3 = [closure_21(channel(stickerAssetUrl[18]).Text, obj1)];
  obj2 = { style: tmp.description, variant: "text-sm/medium", children: null };
  const intl = channel(tmp4[19]).intl;
  if (result) {
    let stringResult = intl.string(channel(tmp4[19]).t.vZaScH);
  } else {
    const obj3 = {
      openPremiumSettings() {
        let obj = ActionSheetActionCreatorsDefault;
        obj.hideActionSheet();
        obj = { location_page: analyticsLocation.page, location_section: analyticsLocation.section };
        AnalyticsUtilsDefault.track(constants3.PREMIUM_PROMOTION_OPENED, obj);
        obj = { screen: constants5.PREMIUM, params: { analyticsLocation } };
        openUserSettings.openUserSettings(obj);
      },
    };
    stringResult = intl.format(channel(tmp4[19]).t.hGWuxU, obj3);
  }
  obj2.children = stringResult;
  items3[1] = closure_21(channel(stickerAssetUrl[18]).Text, obj2);
  obj.children = items3;
  items2[1] = closure_23(closure_6, obj);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = null != stickerAssetUrl;
  }
  if (tidaWebformEnabled) {
    const obj4 = { accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl2 = channel(tmp4[19]).intl;
    obj4.accessibilityLabel = intl2.string(channel(tmp4[19]).t.PdRCRg);
    obj4.style = tmp.moreMenuIcon;
    obj4.onPress = callback;
    const obj5 = { color: tmp3(tmp4[13]).colors.INTERACTIVE_TEXT_DEFAULT };
    obj4.children = closure_21(channel(tmp4[41]).MoreHorizontalIcon, obj5);
    tidaWebformEnabled = closure_21(closure_8, obj4);
  }
  items2[2] = tidaWebformEnabled;
  obj.children = items2;
  return closure_23(closure_6, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ActivityIndicator: closure_7, Pressable: closure_8 } = get_ActivityIndicator);
const StickerPickerConstants = fn(10273);
({ PADDING_HORIZONTAL: closure_12, MIN_MARGIN: map1, STICKER_SIZE: closure_14 } = StickerPickerConstants);
const Constants = fn(1074);
({
  AnalyticsPages: closure_15,
  AnalyticsSections: closure_16,
  AnalyticEvents: closure_17,
  GuildFeatures: closure_18,
  UserSettingsSections: closure_19,
} = Constants);
const ACTION_SHEET_MAX_WIDTH = fn(7151).ACTION_SHEET_MAX_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let createStyles = fn(4560);
let PlatformUtils = fn(1115);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = 16;
}
let obj = {
  content: { padding: 16, paddingBottom: num },
  description: { lineHeight: 18, marginTop: 4 },
  guildEmojiTopContainer: { flexDirection: "row", alignItems: "center" },
  buttonContainer: null,
  guildEmojiDescription: null,
  divider: null,
  moreMenuIcon: null,
  favoriteContainer: null,
  starIcon: null,
  starIconSelected: null,
  starIconUnselected: null,
};
obj = { marginTop: nativeDefault.space.PX_12 };
obj.buttonContainer = obj;
obj.guildEmojiDescription = { paddingLeft: 16, flex: 1 };
createStyles = {
  marginLeft: 0,
  marginTop: nativeDefault.space.PX_16,
  marginBottom: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.divider = createStyles;
obj.moreMenuIcon = { height: 32, width: 32, justifyContent: "center", alignItems: "center" };
PlatformUtils = { paddingTop: nativeDefault.space.PX_4 };
obj.favoriteContainer = PlatformUtils;
obj.starIcon = { height: 32, width: 32 };
obj.starIconSelected = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
let obj3 = { tintColor: nativeDefault.colors.ICON_FEEDBACK_WARNING };
obj.starIconUnselected = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_24 = createStyles.createStyles(obj);
function GuildStickerDetail(sticker) {
  sticker = sticker.sticker;
  const channel = sticker.channel;
  let first1;
  noop = undefined;
  let stickerAssetUrl;
  let analyticsLocation;
  let ref;
  const tmp2 = closure_24();
  let obj = noop;
  const tmp4 = first1(noop.useState(null), 2);
  let guild = tmp4[0];
  closure_3 = tmp4[1];
  let obj1 = sticker(guild[22]);
  const items = [ref];
  const stateFromStores = obj1.useStateFromStores(items, () => GuildStore.getGuild(sticker.guild_id));
  let hasItem = null == stateFromStores;
  if (!hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants4.DISCOVERABLE);
  }
  const tmp3Result = first1(obj.useState(!hasItem), 2);
  first1 = tmp3Result[0];
  noop = tmp3Result[1];
  const currentUser = UserStore.getCurrentUser();
  let obj2 = channel(tmp7[30]);
  let result = obj2.canUseCustomStickersEverywhere(currentUser);
  let obj3 = channel(tmp7[31]);
  let tidaWebformEnabled = obj3.useExperiment(
    { location: "StickerDetailActionSheet" },
    { autoTrackExposure: false },
  ).tidaWebformEnabled;
  const DeveloperMode = tmp6(tmp7[32]).DeveloperMode;
  let id = sticker.id;
  closure_129_0 = id;
  const setting = DeveloperMode.useSetting();
  let tmpResult = closure_24();
  closure_129_1 = tmpResult;
  let tmp6Result = tmp6(tmp7[14]);
  const favoriteStickerIds = tmp6Result.useFavoriteStickerIds();
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
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    const obj2 = StickersActionCreators;
    if (first) {
      obj2.unfavoriteSticker(sticker);
      let tmpResult = ToastActionCreatorsDefault;
      obj = {
        key: "STICKER_UNFAVORITED",
        icon() {
          return closure_1_3(false);
        },
        content,
      };
      tmpResult.open(obj);
    } else {
      obj2.favoriteSticker(sticker);
      tmpResult = ToastActionCreatorsDefault;
      obj = {
        key: "STICKER_FAVORITED",
        icon() {
          return closure_1_3(true);
        },
        content,
      };
      tmpResult.open(obj);
    }
  }, items2);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = setting;
  }
  tmp6Result = tmp6(tmp7[33]);
  stickerAssetUrl = tmp6Result.getStickerAssetUrl(sticker);
  const items3 = [stickerAssetUrl];
  const items4 = [channel.guild_id];
  const callback2 = obj.useCallback(() => {
    if (null != stickerAssetUrl) {
      const obj = { stickerUrl: tmp };
      obj.openLazy(asyncRequireImpl(10405, dependencyMap.paths), "StickerOptionsActionSheet", obj, "stack");
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
  obj = { guild_id: channel.getGuildId() };
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
          let obj = { value, done: true };
          return obj;
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
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp5;
              closure_128_0 = undefined;
              c2 = 1;
              v3 = 1;
              obj1 = { value: channel(guild[38])(tmp2.id), done: false };
              return obj1;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            obj = { value, done: true };
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
      obj = {
        openPremiumSettings() {
          let obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          obj = { location_page: analyticsLocation.page, location_section: analyticsLocation.section };
          AnalyticsUtilsDefault.track(constants3.PREMIUM_PROMOTION_OPENED, obj);
          obj = { screen: constants5.PREMIUM, params: { analyticsLocation } };
          openUserSettings.openUserSettings(obj);
        },
      };
      stringResult = intl.format(tmp6(tmp7[19]).t.hGWuxU, obj);
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
    obj1 = { popoutAnalyticsConfig: obj.useRef(obj).current, popoutType: str };
    ref = obj.useRef(obj1);
    const effect1 = obj.useEffect(() => {
      closure_9.current = obj1;
    });
    const items6 = [first1];
    const effect2 = obj.useEffect(() => {
      const popoutAnalyticsConfig = ref.current.popoutAnalyticsConfig;
      if (first1) {
        const obj = { type: tmp };
        const merged = Object.assign(popoutAnalyticsConfig);
        obj.track(constants3.OPEN_POPOUT, obj);
      }
    }, items6);
    let tmp37Result = null;
    if (first1) {
      obj2 = { style: tmp2.guildEmojiTopContainer, children: null };
      obj3 = { sticker, size: 48 };
      const items7 = [closure_21(tmp15(tmp7[40]), obj3), ,];
      const obj4 = { style: tmp2.guildEmojiDescription, children: null };
      const obj5 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: sticker.name };
      const items8 = [closure_21(tmp6(tmp7[18]).Text, obj5)];
      const obj6 = { style: tmp2.description, variant: "text-sm/medium", children: stringResult };
      items8[1] = closure_21(tmp6(tmp7[18]).Text, obj6);
      obj4.children = items8;
      items7[1] = closure_23(stickerAssetUrl, obj4);
      let tmp40Result = tidaWebformEnabled;
      if (tidaWebformEnabled) {
        tmp40Result = null != stickerAssetUrl;
      }
      if (tmp40Result) {
        const obj7 = { accessibilityLabel: null, style: null, onPress: null, children: null };
        const intl2 = tmp6(tmp7[19]).intl;
        obj7.accessibilityLabel = intl2.string(tmp6(tmp7[19]).t.PdRCRg);
        obj7.style = tmp2.moreMenuIcon;
        obj7.onPress = callback2;
        const obj8 = { color: tmp15(tmp7[13]).colors.INTERACTIVE_TEXT_DEFAULT };
        obj7.children = closure_21(tmp6(tmp7[41]).MoreHorizontalIcon, obj8);
        tmp40Result = closure_21(obj1, obj7);
      }
      items7[2] = tmp40Result;
      obj2.children = items7;
      const items9 = [closure_23(stickerAssetUrl, obj2), , , ,];
      if (flag) {
        const obj9 = { style: tmp2.buttonContainer, children: null };
        const obj10 = { text: null, onPress: null };
        let tmp15Result = tmp15(tmp7[42]);
        const intl3 = tmp6(tmp7[19]).intl;
        obj10.text = intl3.string(tmp6(tmp7[19]).t["gl/XHJ"]);
        obj10.onPress = function onPress() {
          return openStickersPremiumUpsellAlertDefault(closure_7);
        };
        const items10 = [closure_21(tmp15Result, obj10)];
        const obj11 = { style: null };
        const obj12 = { height: tmp15(tmp7[13]).space.PX_16 };
        obj11.style = obj12;
        items10[1] = closure_21(tmp39, obj11);
        obj9.children = items10;
        flag = closure_23(tmp39, obj9);
      }
      items9[1] = flag;
      tmp37Result = tmp33;
      if (tmp33) {
        const obj13 = { style: tmp2.buttonContainer, children: null };
        const obj14 = { text: null, onPress: null };
        const intl4 = tmp6(tmp7[19]).intl;
        obj14.text = intl4.string(tmp6(tmp7[19]).t.riu2R5);
        obj14.onPress = function onPress() {
          if (null != first) {
            const id = first.id;
            GuildActionCreatorsDefault.joinGuild(id).then(() => {
              const result = channel(first[37]).transitionToGuildSync(id);
            });
            const joinGuildResult = GuildActionCreatorsDefault.joinGuild(id);
          }
        };
        const items11 = [closure_21(tmp6(tmp7[26]).Button, obj14)];
        const obj15 = { style: null };
        const obj16 = { height: tmp15(tmp7[13]).space.PX_16 };
        obj15.style = obj16;
        items11[1] = closure_21(tmp39, obj15);
        obj13.children = items11;
        tmp37Result = closure_23(tmp39, obj13);
      }
      items9[2] = tmp37Result;
      if (!(null != stateFromStores || null != guild)) {
        items9[3] = tmp45;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = tmp9;
        }
        if (tidaWebformEnabled) {
          const obj17 = { style: tmp2.divider };
          const items12 = [closure_21(tmp6(tmp7[44]).FormDivider, obj17)];
          const obj18 = { style: tmp2.favoriteContainer, children: null };
          const intl6 = tmp6(tmp7[19]).intl;
          const string4 = intl6.string;
          const t2 = tmp6(tmp7[19]).t;
          if (hasItem1) {
            let string4Result = string4(t2.XhzKyF);
          } else {
            string4Result = string4(t2.kWmiPW);
          }
          const obj19 = { text: string4Result, variant: null, size: "md", onPress: null };
          let str3 = "primary";
          if (hasItem1) {
            str3 = "tertiary";
          }
          const obj20 = { children: null };
          obj19.variant = str3;
          obj19.onPress = callback1;
          obj18.children = closure_21(tmp6(tmp7[26]).Button, obj19);
          items12[1] = closure_21(tmp39, obj18);
          obj20.children = items12;
          tidaWebformEnabled = closure_23(closure_22, obj20);
        }
        const obj21 = { children: null };
        items9[4] = tidaWebformEnabled;
        obj21.children = items9;
        tmp37Result = closure_23(closure_22, obj21);
      } else {
        const obj22 = { style: tmp2.divider };
        const items13 = [closure_21(tmp6(tmp7[44]).FormDivider, obj22)];
        tmp15Result = tmp15(tmp7[45]);
        if (guild == null) {
          guild = stateFromStores;
        }
        let obj23 = { guild, showingJoinGuildCta: tmp33, hasJoinedGuild: tmp9, title: null };
        const intl5 = tmp6(tmp7[19]).intl;
        const string3 = intl5.string;
        t = tmp6(tmp7[19]).t;
        if (tmp9) {
          let string3Result = string3(t.kx6pEG);
        } else {
          string3Result = string3(t.pDE7Gb);
        }
        t = { children: null };
        obj23.title = string3Result;
        obj23 = closure_21(tmp15Result, obj23);
        items13[1] = obj23;
        t.children = items13;
        closure_23(closure_22, t);
      }
    }
    return tmp37Result;
  }
  const tmp6Result1 = sticker(guild[36]);
}
let obj4 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerDetailActionSheet.tsx");

export default noop.memo(function StickerDetailActionSheet(chatInputRef) {
  ({ renderableSticker, channel } = chatInputRef);
  let obj = StickersHooks;
  const tmp4 = _slicedToArray(obj.useStickerForRenderableSticker(renderableSticker, true), 2);
  const first = tmp4[0];
  let tmp6Result = __initData(React5, { size: "large" });
  if (null == first) {
    if (tmp4[1]) {
      obj = { renderableSticker, channel };
      tmp6Result = __initData(UnavailableStickerDetail, obj);
    }
    obj = { startExpanded: true, children: null };
    const obj1 = { style: tmp.content, children: tmp6Result };
    obj.children = __initData(timestampProducer, obj1);
    return __initData(Sheet_BottomSheet.BottomSheet, obj);
  }
  if (null != first) {
    let tmp2Result = StickersUtils;
    if (tmp2Result.isStandardSticker(first)) {
      const obj2 = { sticker: first, channel, chatInputRef: chatInputRef.chatInputRef };
      tmp6Result = __initData(StandardStickerDetail, obj2);
    } else {
      tmp2Result = StickersUtils;
      if (tmp2Result.isGuildSticker(first)) {
        const obj3 = { sticker: first, channel };
        tmp6Result = __initData(GuildStickerDetail, obj3);
      }
    }
  }
  tmp = closure_24();
});
