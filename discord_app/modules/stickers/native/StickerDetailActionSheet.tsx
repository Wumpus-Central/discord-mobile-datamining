// === Module 10234: StandardStickerDetail ===

// Module 10234 (StandardStickerDetail)
import ThemesDefault from "Themes" /* 712 */;
import useStickerPackCategories from "useStickerPackCategories" /* 10217 */;
import openStickerPackDetailActionSheet from "openStickerPackDetailActionSheet" /* 10224 */;
import openStickerPackDetailActionSheetDefault from "openStickerPackDetailActionSheet" /* 10224 */;
import hideStickerDetailActionSheet from "hideStickerDetailActionSheet" /* 10233 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_9 from "createGuildRecordFromRust" /* 1910 */;
import closure_10 from "mergeGuildAvatar" /* 1922 */;
import closure_11 from "loadSavedGuildStickers" /* 6769 */;
import PADDING_HORIZONTAL from "PADDING_HORIZONTAL" /* 10187 */;
import ME from "ME" /* 676 */;
import { ACTION_SHEET_MAX_WIDTH } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 6951 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import set from "set" /* 500 */;

require = arg1;
function StandardStickerDetail(chatInputRef) {
  ({ sticker, channel } = chatInputRef);
  let stateFromStores = channel;
  chatInputRef = chatInputRef.chatInputRef;
  let pack_id;
  stateFromStores = undefined;
  let stateFromStores1;
  let memo;
  pack_id = sticker.pack_id;
  let obj = stateFromStores(pack_id[22]);
  const items = [closure_11];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getStickerPack(pack_id));
  obj1 = stateFromStores(pack_id[22]);
  const items1 = [closure_11];
  stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_11.isPremiumPack(pack_id));
  let obj2 = stateFromStores(pack_id[14]);
  const fetchStickerPack = obj2.useFetchStickerPack(pack_id);
  const diff = chatInputRef(pack_id[23])().width - 2 * closure_12;
  const rounded = Math.floor(Math.min(ACTION_SHEET_MAX_WIDTH, diff - closure_13) / (closure_14 + closure_13));
  const items2 = [channel.guild_id];
  memo = memo.useMemo(() => {
    if (null != stateFromStores.guild_id) {
      let DM_CHANNEL = closure_1_15.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = closure_1_15.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: closure_1_16.STICKER_POPOUT };
  }, items2);
  const items3 = [memo, stateFromStores];
  const effect = memo.useEffect(() => {
    if (null != stateFromStores) {
      let obj = chatInputRef(pack_id[24]);
      obj = { location: null, type: "Sticker Upsell Sheet", sticker_pack_id: null };
      obj[0] = memo;
      obj[2] = tmp.id;
      obj.track(closure_1_17.OPEN_POPOUT, obj);
    }
  }, items3);
  if (null == stateFromStores) {
    let tmp13Result = callback2(closure_7, { size: "large" });
  } else {
    const intl2 = tmp2(tmp3[19]).intl;
    const format = intl2.format;
    const t = tmp2(tmp3[19]).t;
    if (stateFromStores1) {
      obj = { stickerPackName: null };
      obj[0] = stateFromStores.name;
      let formatResult = format(t.auckXz, obj);
    } else {
      obj = { stickerPackName: null };
      obj[0] = stateFromStores.name;
      formatResult = format(t.OzB6e3, obj);
    }
    obj1 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
    obj1[2] = sticker.name;
    const items4 = [callback2(tmp2(tmp3[18]).Text, obj1), , , , ];
    obj2 = { style: null, variant: "text-sm/medium", children: null };
    obj2[0] = tmp.description;
    obj2[2] = formatResult;
    items4[1] = callback2(tmp2(tmp3[18]).Text, obj2);
    const obj3 = { containerWidth: null, stickers: null, rowSize: null };
    obj3[0] = diff;
    const stickers = stateFromStores.stickers;
    obj3[1] = stickers.slice(0, rounded);
    obj3[2] = rounded;
    items4[2] = callback2(tmp7(tmp3[25]), obj3);
    let tmp15Result = null;
    if (stateFromStores1) {
      const obj4 = { style: null };
      const obj5 = { height: null };
      obj5[0] = tmp7(tmp3[13]).space.PX_16;
      obj4[0] = obj5;
      tmp15Result = tmp15(closure_6, obj4);
    }
    items4[3] = tmp15Result;
    tmp15Result = stateFromStores1;
    if (stateFromStores1) {
      const obj6 = { variant: "secondary", text: null, onPress: null };
      const intl = tmp2(tmp3[19]).intl;
      obj6[1] = intl.string(tmp2(tmp3[19]).t.GPy3Ar);
      obj6[2] = function onPress() {
        let obj = hideStickerDetailActionSheet;
        const result = obj.hideStickerDetailActionSheet();
        if (null != stateFromStores) {
          if (stateFromStores1) {
            if (null != chatInputRef) {
              const result1 = tmp(10219).openStickerPickerToPackId(tmp6, pack_id);
              const tmpResult = tmp(10219);
            }
          }
        }
        obj = { analyticsLocation: memo, analyticsPopoutType: openStickerPackDetailActionSheet.AnalyticsPopoutType.STICKER_PACK_UPSELL, stickerPack: stateFromStores };
        openStickerPackDetailActionSheetDefault(obj);
      };
      tmp15Result = tmp15(tmp2(tmp3[26]).Button, obj6);
    }
    const obj7 = { children: null };
    items4[4] = tmp15Result;
    obj7[0] = items4;
    tmp13Result = closure_23(closure_22, obj7);
    const tmp13 = closure_23;
    const tmp14 = closure_22;
    const tmp7Result = tmp7(tmp3[25]);
  }
  return tmp13Result;
}
function UnavailableStickerDetail(arg0) {
  ({ renderableSticker, channel } = arg0);
  importDefault = undefined;
  let stickerAssetUrl;
  const tmp = callback4();
  const currentUser = authStore.getCurrentUser();
  let obj = importDefault(stickerAssetUrl[30]);
  obj1 = importAllResult;
  const items = [channel.guild_id];
  const result = obj.canUseCustomStickersEverywhere(currentUser);
  importDefault = importAllResult.useMemo(() => {
    if (null != channel.guild_id) {
      let DM_CHANNEL = closure_1_15.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = closure_1_15.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: closure_1_16.STICKER_POPOUT };
  }, items);
  let obj2 = importDefault(stickerAssetUrl[31]);
  let tidaWebformEnabled = obj2.useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = channel(stickerAssetUrl[32]).DeveloperMode;
  if (tidaWebformEnabled) {
    tidaWebformEnabled = DeveloperMode.useSetting();
  }
  stickerAssetUrl = channel(stickerAssetUrl[33]).getStickerAssetUrl(renderableSticker);
  const items1 = [stickerAssetUrl];
  obj = { style: tmp.guildEmojiTopContainer, children: null };
  const callback = obj1.useCallback(() => {
    if (null != stickerAssetUrl) {
      let obj = lib(stickerAssetUrl[17]);
      obj = { stickerUrl: null };
      obj[0] = tmp;
      obj.openLazy(channel(stickerAssetUrl[35])(stickerAssetUrl[34], stickerAssetUrl.paths), "StickerOptionsActionSheet", obj, "stack");
    }
  }, items1);
  const items2 = [callback2(importDefault(stickerAssetUrl[40]), { sticker: renderableSticker, size: 48 }), , ];
  obj = { style: tmp.guildEmojiDescription, children: null };
  obj1 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: renderableSticker.name };
  const items3 = [callback2(channel(stickerAssetUrl[18]).Text, obj1), ];
  obj2 = { style: tmp.description, variant: "text-sm/medium", children: null };
  const intl = tmp6(tmp4[19]).intl;
  if (result) {
    let stringResult = intl.string(tmp6(tmp4[19]).t.vZaScH);
  } else {
    const obj3 = { openPremiumSettings: null };
    obj3[0] = function openPremiumSettings() {
      let obj = lib(stickerAssetUrl[17]);
      obj.hideActionSheet();
      obj1 = lib(stickerAssetUrl[24]);
      obj = { location_page: lib.page, location_section: lib.section };
      obj1.track(closure_1_17.PREMIUM_PROMOTION_OPENED, obj);
      obj = { screen: closure_1_19.PREMIUM, params: obj1 };
      obj1 = { analyticsLocation: lib };
      channel(stickerAssetUrl[39]).openUserSettings(obj);
    };
    stringResult = intl.format(tmp6(tmp4[19]).t.hGWuxU, obj3);
  }
  obj2[2] = stringResult;
  items3[1] = callback2(channel(stickerAssetUrl[18]).Text, obj2);
  obj[1] = items3;
  items2[1] = closure_23(closure_6, obj);
  if (tidaWebformEnabled) {
    tidaWebformEnabled = null != stickerAssetUrl;
  }
  if (tidaWebformEnabled) {
    const obj4 = { accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl2 = tmp6(tmp4[19]).intl;
    obj4[0] = intl2.string(tmp6(tmp4[19]).t.PdRCRg);
    obj4[1] = tmp.moreMenuIcon;
    obj4[2] = callback;
    const obj5 = { color: null };
    obj5[0] = tmp3(tmp4[13]).colors.INTERACTIVE_TEXT_DEFAULT;
    obj4[3] = tmp11(tmp6(tmp4[41]).MoreHorizontalIcon, obj5);
    tidaWebformEnabled = tmp11(closure_8, obj4);
  }
  items2[2] = tidaWebformEnabled;
  obj[1] = items2;
  return closure_23(closure_6, obj);
}
let c5 = importAllResult;
({ View: closure_6, ActivityIndicator: error, Pressable: closure_8 } = get_ActivityIndicator);
({ PADDING_HORIZONTAL: closure_12, MIN_MARGIN: map1, STICKER_SIZE: closure_14 } = PADDING_HORIZONTAL);
({ AnalyticsPages: closure_15, AnalyticsSections: closure_16, AnalyticEvents: closure_17, GuildFeatures: closure_18, UserSettingsSections: closure_19 } = ME);
({ jsx: closure_21, Fragment: closure_22, jsxs: closure_23 } = jsxProd);
let num = 0;
if (set.isAndroid()) {
  num = 16;
}
let obj = { content: { padding: 16, paddingBottom: num }, description: { lineHeight: 18, marginTop: 4 }, guildEmojiTopContainer: { flexDirection: "row", alignItems: "center" }, buttonContainer: null, guildEmojiDescription: null, divider: null, moreMenuIcon: null, favoriteContainer: null, starIcon: null, starIconSelected: null, starIconUnselected: null };
obj = { marginTop: ThemesDefault.space.PX_12 };
obj[3] = obj;
obj[4] = { paddingLeft: 16, flex: 1 };
createCacheKey = { marginLeft: 0, marginTop: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
obj[5] = createCacheKey;
obj[6] = { height: 32, width: 32, justifyContent: "center", alignItems: "center" };
set = { paddingTop: ThemesDefault.space.PX_4 };
obj[7] = set;
obj[8] = { height: 32, width: 32 };
obj[9] = { tintColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
let obj3 = { tintColor: ThemesDefault.colors.ICON_FEEDBACK_WARNING };
obj[10] = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_24 = createCacheKey.createStyles(obj);
function GuildStickerDetail(sticker) {
  sticker = sticker.sticker;
  let id = sticker;
  const channel = sticker.channel;
  importDefault = channel;
  let hasItem1;
  let callback;
  let first1;
  importAllResult = undefined;
  let stickerAssetUrl;
  closure_7 = undefined;
  obj1 = undefined;
  closure_9 = undefined;
  const tmp2 = callback4();
  let obj = importAllResult;
  const tmp4 = first1(importAllResult.useState(null), 2);
  let first = tmp4[0];
  hasItem1 = first;
  callback = tmp4[1];
  obj1 = id(hasItem1[22]);
  const items = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items, () => ref.getGuild(id.guild_id));
  let hasItem = null == stateFromStores;
  if (!hasItem) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.DISCOVERABLE);
  }
  const tmp3Result = first1(obj.useState(!hasItem), 2);
  first1 = tmp3Result[0];
  importAllResult = tmp3Result[1];
  const currentUser = authStore.getCurrentUser();
  let obj2 = importDefault(tmp7[30]);
  let result = obj2.canUseCustomStickersEverywhere(currentUser);
  let obj3 = importDefault(tmp7[31]);
  let tidaWebformEnabled = obj3.useExperiment({ location: "StickerDetailActionSheet" }, { autoTrackExposure: false }).tidaWebformEnabled;
  const DeveloperMode = tmp6(tmp7[32]).DeveloperMode;
  id = sticker.id;
  importDefault = undefined;
  hasItem1 = undefined;
  callback = undefined;
  const setting = DeveloperMode.useSetting();
  let tmpResult = callback4();
  importDefault = tmpResult;
  let tmp6Result = tmp6(tmp7[14]);
  const favoriteStickerIds = tmp6Result.useFavoriteStickerIds();
  hasItem1 = favoriteStickerIds.includes(id);
  const items1 = [tmpResult];
  callback = obj.useCallback((arg0) => {
    const obj = {};
    const merged = Object.assign(lib.starIcon);
    if (arg0) {
      const merged1 = Object.assign(tmp.starIconSelected);
      let style = obj;
    } else {
      const merged2 = Object.assign(tmp.starIconUnselected);
      style = obj;
    }
    if (arg0) {
      let StarOutlineIcon = tmp9(tmp10[15]).StarIcon;
    } else {
      StarOutlineIcon = tmp9(tmp10[16]).StarOutlineIcon;
    }
    return closure_1_21(StarOutlineIcon, { style });
  }, items1);
  const items2 = [hasItem1, id, callback];
  const callback1 = obj.useCallback(() => {
    function content() {
      const obj = { style: { marginLeft: 8, marginTop: 2 }, variant: "text-md/bold", children: null };
      const intl = closure_1_0(closure_1_2[19]).intl;
      const string = intl.string;
      const t = closure_1_0(closure_1_2[19]).t;
      if (closure_2) {
        let stringResult = string(t.in1rga);
      } else {
        stringResult = string(t.mE2e8A);
      }
      obj[2] = stringResult;
      return closure_1_21(closure_1_0(closure_1_2[18]).Text, obj);
    }
    let obj = lib(hasItem1[17]);
    obj.hideActionSheet();
    const obj2 = id(hasItem1[20]);
    if (hasItem1) {
      obj2.unfavoriteSticker(id);
      let tmpResult = tmp(tmp2[21]);
      obj = { key: "STICKER_UNFAVORITED", icon: null, content: null };
      obj[1] = function icon() {
        return callback(false);
      };
      obj[2] = content;
      tmpResult.open(obj);
    } else {
      obj2.favoriteSticker(id);
      tmpResult = tmp(tmp2[21]);
      obj = { key: "STICKER_FAVORITED", icon: null, content: null };
      obj[1] = function icon() {
        return callback(true);
      };
      obj[2] = content;
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
      let obj = lib(hasItem1[17]);
      obj = { stickerUrl: null };
      obj[0] = tmp;
      obj.openLazy(id(hasItem1[35])(hasItem1[34], hasItem1.paths), "StickerOptionsActionSheet", obj, "stack");
    }
  }, items3);
  closure_7 = obj.useMemo(() => {
    if (null != lib.guild_id) {
      let DM_CHANNEL = closure_1_15.GUILD_CHANNEL;
    } else {
      DM_CHANNEL = closure_1_15.DM_CHANNEL;
    }
    return { page: DM_CHANNEL, section: closure_1_16.STICKER_POPOUT };
  }, items4);
  obj = { guild_id: channel.getGuildId() };
  let merged = Object.assign(id(hasItem1[36]).collectChannelAnalyticsMetadata(channel));
  const items5 = [sticker.id, first1];
  const effect = obj.useEffect(() => {
    function _fetchDiscoverableGuild() {
      const self = this;
      const tmp = callback(function*() {
        if (v0 === 2) {
          v0 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            v0 = 2;
            if (0 === c2) {
              if (arg0 === 1) {
                v0 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp5;
                closure_0 = tmp2;
                closure_0 = undefined;
                c2 = 1;
                v0 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_2_1(closure_2_2[38])(closure_1_0.id);
                return obj1;
              }
            } else if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_0 = arg1;
              v0(closure_0);
              closure_1_5(true);
              v0 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } catch (tmp16) {
            v0 = tmp;
            throw tmp16;
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    if (!first1) {
      (function fetchDiscoverableGuild() {
        const self = this;
        const apply = _fetchDiscoverableGuild.apply;
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
      obj = { openPremiumSettings: null };
      obj[0] = function openPremiumSettings() {
        let obj = lib(hasItem1[17]);
        obj.hideActionSheet();
        obj1 = lib(hasItem1[24]);
        obj = { location_page: closure_7.page, location_section: closure_7.section };
        obj1.track(closure_1_17.PREMIUM_PROMOTION_OPENED, obj);
        obj = { screen: closure_1_19.PREMIUM, params: obj1 };
        obj1 = { analyticsLocation: closure_7 };
        id(hasItem1[39]).openUserSettings(obj);
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
    obj1 = { popoutAnalyticsConfig: null, popoutType: null };
    obj1[0] = obj.useRef(obj).current;
    obj1[1] = str;
    closure_9 = obj.useRef(obj1);
    const effect1 = obj.useEffect(() => {
      closure_9.current = obj1;
    });
    const items6 = [first1];
    const effect2 = obj.useEffect(() => {
      const popoutAnalyticsConfig = ref.current.popoutAnalyticsConfig;
      if (first1) {
        let obj = lib(hasItem1[24]);
        obj = { type: null };
        obj[0] = tmp;
        const merged = Object.assign(popoutAnalyticsConfig);
        obj.track(closure_1_17.OPEN_POPOUT, obj);
      }
    }, items6);
    let tmp37Result = null;
    if (first1) {
      obj2 = { style: null, children: null };
      obj2[0] = tmp2.guildEmojiTopContainer;
      obj3 = { sticker: null, size: 48 };
      obj3[0] = sticker;
      const items7 = [callback2(tmp15(tmp7[40]), obj3), , ];
      const obj4 = { style: null, children: null };
      obj4[0] = tmp2.guildEmojiDescription;
      const obj5 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: null };
      obj5[2] = sticker.name;
      const items8 = [callback2(tmp6(tmp7[18]).Text, obj5), ];
      const obj6 = { style: null, variant: "text-sm/medium", children: null };
      obj6[0] = tmp2.description;
      obj6[2] = stringResult;
      items8[1] = callback2(tmp6(tmp7[18]).Text, obj6);
      obj4[1] = items8;
      items7[1] = callback3(stickerAssetUrl, obj4);
      let tmp40Result = tidaWebformEnabled;
      if (tidaWebformEnabled) {
        tmp40Result = null != stickerAssetUrl;
      }
      if (tmp40Result) {
        const obj7 = { accessibilityLabel: null, style: null, onPress: null, children: null };
        const intl2 = tmp6(tmp7[19]).intl;
        obj7[0] = intl2.string(tmp6(tmp7[19]).t.PdRCRg);
        obj7[1] = tmp2.moreMenuIcon;
        obj7[2] = callback2;
        const obj8 = { color: null };
        obj8[0] = tmp15(tmp7[13]).colors.INTERACTIVE_TEXT_DEFAULT;
        obj7[3] = tmp40(tmp6(tmp7[41]).MoreHorizontalIcon, obj8);
        tmp40Result = tmp40(obj1, obj7);
      }
      items7[2] = tmp40Result;
      obj2[1] = items7;
      const items9 = [callback3(stickerAssetUrl, obj2), , , , ];
      if (flag) {
        const obj9 = { style: null, children: null };
        obj9[0] = tmp2.buttonContainer;
        const obj10 = { text: null, onPress: null };
        let tmp15Result = tmp15(tmp7[42]);
        const intl3 = tmp6(tmp7[19]).intl;
        obj10[0] = intl3.string(tmp6(tmp7[19]).t["gl/XHJ"]);
        obj10[1] = function onPress() {
          return lib(hasItem1[43])(closure_7);
        };
        const items10 = [tmp40(tmp15Result, obj10), ];
        const obj11 = { style: null };
        const obj12 = { height: null };
        obj12[0] = tmp15(tmp7[13]).space.PX_16;
        obj11[0] = obj12;
        items10[1] = tmp40(tmp39, obj11);
        obj9[1] = items10;
        flag = tmp37(tmp39, obj9);
      }
      items9[1] = flag;
      tmp37Result = tmp33;
      if (tmp33) {
        const obj13 = { style: null, children: null };
        obj13[0] = tmp2.buttonContainer;
        const obj14 = { text: null, onPress: null };
        const intl4 = tmp6(tmp7[19]).intl;
        obj14[0] = intl4.string(tmp6(tmp7[19]).t.riu2R5);
        obj14[1] = function onPress() {
          if (null != hasItem1) {
            id = hasItem1.id;
            const obj = lib(hasItem1[37]);
            lib(hasItem1[37]).joinGuild(id).then(() => {
              const result = closure_1_1(closure_1_2[37]).transitionToGuildSync(id);
            });
            const joinGuildResult = lib(hasItem1[37]).joinGuild(id);
          }
        };
        const items11 = [tmp40(tmp6(tmp7[26]).Button, obj14), ];
        const obj15 = { style: null };
        const obj16 = { height: null };
        obj16[0] = tmp15(tmp7[13]).space.PX_16;
        obj15[0] = obj16;
        items11[1] = tmp40(tmp39, obj15);
        obj13[1] = items11;
        tmp37Result = tmp37(tmp39, obj13);
      }
      items9[2] = tmp37Result;
      if (!(null != stateFromStores || null != first)) {
        items9[3] = tmp45;
        if (tidaWebformEnabled) {
          tidaWebformEnabled = tmp9;
        }
        if (tidaWebformEnabled) {
          const obj17 = { style: null };
          obj17[0] = tmp2.divider;
          const items12 = [tmp40(tmp6(tmp7[44]).FormDivider, obj17), ];
          const obj18 = { style: null, children: null };
          obj18[0] = tmp2.favoriteContainer;
          const intl6 = tmp6(tmp7[19]).intl;
          const string4 = intl6.string;
          const t2 = tmp6(tmp7[19]).t;
          if (hasItem1) {
            let string4Result = string4(t2.XhzKyF);
          } else {
            string4Result = string4(t2.kWmiPW);
          }
          const obj19 = { text: null, variant: null, size: "md", onPress: null };
          obj19[0] = string4Result;
          let str3 = "primary";
          if (hasItem1) {
            str3 = "tertiary";
          }
          const obj20 = { children: null };
          obj19[1] = str3;
          obj19[3] = callback1;
          obj18[1] = tmp40(tmp6(tmp7[26]).Button, obj19);
          items12[1] = tmp40(tmp39, obj18);
          obj20[0] = items12;
          tidaWebformEnabled = tmp37(tmp38, obj20);
        }
        const obj21 = { children: null };
        items9[4] = tidaWebformEnabled;
        obj21[0] = items9;
        tmp37Result = tmp37(tmp38, obj21);
      } else {
        const obj22 = { style: null };
        obj22[0] = tmp2.divider;
        const items13 = [tmp40(tmp6(tmp7[44]).FormDivider, obj22), ];
        tmp15Result = tmp15(tmp7[45]);
        if (first == null) {
          first = stateFromStores;
        }
        let obj23 = { guild: null, showingJoinGuildCta: null, hasJoinedGuild: null, title: null };
        obj23[0] = first;
        obj23[1] = tmp33;
        obj23[2] = tmp9;
        const intl5 = tmp6(tmp7[19]).intl;
        const string3 = intl5.string;
        t = tmp6(tmp7[19]).t;
        if (tmp9) {
          let string3Result = string3(t.kx6pEG);
        } else {
          string3Result = string3(t.pDE7Gb);
        }
        t = { children: null };
        obj23[3] = string3Result;
        obj23 = tmp40(tmp15Result, obj23);
        items13[1] = obj23;
        t[0] = items13;
        tmp37(tmp38, t);
      }
    }
    return tmp37Result;
  }
}
let obj4 = { tintColor: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let result = set.fileFinishedImporting("modules/stickers/native/StickerDetailActionSheet.tsx");

export default importAllResult.memo(function StickerDetailActionSheet(chatInputRef) {
  ({ renderableSticker, channel } = chatInputRef);
  let obj = useStickerPackCategories;
  const tmp4 = callback(obj.useStickerForRenderableSticker(renderableSticker, true), 2);
  const first = tmp4[0];
  let tmp6Result = callback2(closure_7, { size: "large" });
  if (null == first) {
    if (tmp4[1]) {
      obj = { renderableSticker: null, channel: null };
      obj[0] = renderableSticker;
      obj[1] = channel;
      tmp6Result = tmp6(UnavailableStickerDetail, obj);
    }
    obj = { startExpanded: true, children: null };
    obj1 = { style: null, children: null };
    obj1[0] = tmp.content;
    obj1[1] = tmp6Result;
    obj[1] = tmp6(closure_6, obj1);
    return tmp6(tmp2(6950).BottomSheet, obj);
  }
  if (null != first) {
    let tmp2Result = tmp2(4823);
    if (tmp2Result.isStandardSticker(first)) {
      const obj2 = { sticker: null, channel: null, chatInputRef: null };
      obj2[0] = first;
      obj2[1] = channel;
      obj2[2] = chatInputRef.chatInputRef;
      tmp6Result = tmp6(StandardStickerDetail, obj2);
    } else {
      tmp2Result = tmp2(4823);
      if (tmp2Result.isGuildSticker(first)) {
        const obj3 = { sticker: null, channel: null };
        obj3[0] = first;
        obj3[1] = channel;
        tmp6Result = tmp6(GuildStickerDetail, obj3);
      }
    }
  }
});