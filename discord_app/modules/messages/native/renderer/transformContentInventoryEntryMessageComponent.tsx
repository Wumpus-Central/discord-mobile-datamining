// === Module 8397: transformContentInventoryEntryMessageComponent ===

// Module 8397 (transformContentInventoryEntryMessageComponent)
import _mod17 from "module_17" /* 17 */;
import DurationsDefault from "Durations" /* 1091 */;
import util from "util" /* 1115 */;
import utils_AvatarUtils from "utils/AvatarUtils" /* 1400 */;
import Constants from "Constants" /* 2004 */;
import ColorUtils from "ColorUtils" /* 4605 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4908 */;
import _modDef5244 from "module_5244" /* 5244 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8398 */;
import _modDef8399 from "module_8399" /* 8399 */;
import useAvatarColor from "useAvatarColor" /* 8400 */;
import useHeroColors from "useHeroColors" /* 8401 */;
import utils from "utils" /* 8403 */;
import ContentInventoryTraitType from "ContentInventoryTraitType" /* 8404 */;
import _modDef8405 from "module_8405" /* 8405 */;
import _modDef8406 from "module_8406" /* 8406 */;
import ApplicationAssetUtils from "ApplicationAssetUtils" /* 8407 */;
import _modDef8409 from "module_8409" /* 8409 */;
import _modDef8410 from "module_8410" /* 8410 */;
import ApplicationStore from "ApplicationStore" /* 4983 */;
import LocaleStore from "LocaleStore" /* 2109 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const Image = _mod17.Image;
const ImageSizes = Constants.ImageSizes;
let items = [{ r: 0, g: 0, b: 0, a: 1 }, { r: 0, g: 0, b: 0, a: 1 }];
const result = size.fileFinishedImporting("modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx");

export const transformToRowGeneratedContentInventoryEntryComponent = function transformToRowGeneratedContentInventoryEntryComponent(component) {
  const contentInventoryEntry = component.component.contentInventoryEntry;
  const message = component.message;
  const content_type = contentInventoryEntry.content_type;
  if (ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME !== content_type) {
    if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (ContentInventoryEntryType.ContentInventoryEntryType.WATCHED_MEDIA === content_type) {
        items = [, ];
        ({ LARGE: arr7[0], LARGE: arr7[1] } = ImageSizes);
        const assetImage = ApplicationAssetUtils.getAssetImage(contentInventoryEntry.extra.application_id, contentInventoryEntry.extra.media_assets_large_image, items);
        const application = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(ImageSizes.LARGE);
        }
        if (iconURL == null) {
          iconURL = Image.resolveAssetSource(_modDef8399).uri;
        }
        let tmp45 = assetImage;
        if (assetImage == null) {
          tmp45 = iconURL;
        }
        if (tmp45 === Image.resolveAssetSource(_modDef8399).uri) {
          let tmp47 = items;
        } else {
          if (tmpResult29.hasFetchedColors(tmp45)) {
            const heroColors = useHeroColors.getHeroColors(tmp45);
            ({ primaryColor: primaryColor4, secondaryColor: secondaryColor4 } = heroColors);
            const tmpResult30 = useHeroColors;
            const items1 = [ColorUtils.hexToRgba(primaryColor4), ];
            const tmpResult31 = ColorUtils;
            items1[1] = ColorUtils.hexToRgba(secondaryColor4);
            tmp47 = items1;
            const tmpResult32 = ColorUtils;
          }
          tmpResult29 = useAvatarColor;
        }
        let tmp49;
        if (null != tmp47) {
          let str = contentInventoryEntry.extra.media_assets_large_text;
          if (str == null) {
            str = "";
          }
          const items2 = [];
          const match = /\w+ (\d+), \w+ (\d+)/.exec(str);
          if (null != match) {
            const intl4 = util.intl;
            const obj2 = { seasonNum: match[1], episodeNum: match[2] };
            const formatToPlainStringResult = intl4.formatToPlainString(util.t.ijVm6y, obj2);
            let sum = formatToPlainStringResult;
            if (null != contentInventoryEntry.extra.media_title) {
              const _HermesInternal = HermesInternal;
              sum = formatToPlainStringResult + " \u00B7 " + contentInventoryEntry.extra.media_subtitle;
            }
            const obj3 = { text: sum };
            items2.push(obj3);
          }
          const obj4 = { imageUrl: tmp45, title: contentInventoryEntry.extra.media_title, subtitles: items2, gradientColors: tmp47, platformIconUrl: Image.resolveAssetSource(_modDef8409).uri };
          tmp49 = obj4;
          const obj33 = /\w+ (\d+), \w+ (\d+)/;
        }
        let tmp20 = tmp49;
        const tmpResult = ApplicationAssetUtils;
      } else if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_ARTIST === content_type) {
        const image_url2 = contentInventoryEntry.extra.media.image_url;
        let tmp30;
        if (null != image_url2) {
          if (tmpResult33.hasFetchedColors(image_url2)) {
            const heroColors1 = useHeroColors.getHeroColors(image_url2);
            ({ primaryColor: primaryColor3, secondaryColor: secondaryColor3 } = heroColors1);
            const tmpResult34 = useHeroColors;
            const items3 = [ColorUtils.hexToRgba(primaryColor3), ];
            const tmpResult35 = ColorUtils;
            items3[1] = ColorUtils.hexToRgba(secondaryColor3);
            const tmpResult36 = ColorUtils;
            const trait = utils.getTrait(contentInventoryEntry, ContentInventoryTraitType.ContentInventoryTraitType.AGGREGATE_COUNT);
            let count;
            if (trait != null) {
              count = trait.count;
            }
            if (null != count) {
              const items4 = [];
              const intl = util.intl;
              const obj5 = { count };
              const obj6 = { badgeUrl: Image.resolveAssetSource(_modDef8405).uri, text: intl.formatToPlainString(util.t.HtifnG, obj5) };
              items4.push(obj6);
              const obj7 = { imageUrl: image_url2, title: contentInventoryEntry.extra.artist.name, subtitles: items4, gradientColors: items3, platformIconUrl: Image.resolveAssetSource(_modDef8410).uri };
              tmp30 = obj7;
              const formatToPlainStringResult1 = intl.formatToPlainString(util.t.HtifnG, obj5);
            }
            const tmpResult37 = utils;
          }
          tmpResult33 = useAvatarColor;
        }
        tmp20 = tmp30;
      } else if (ContentInventoryEntryType.ContentInventoryEntryType.LISTENED_SESSION === content_type) {
        const first = contentInventoryEntry.extra.entries[0];
        const image_url = first.media.image_url;
        const first1 = first.media.artists[0];
        let name;
        if (first1 != null) {
          name = first1.name;
        }
        if (name == null) {
          name = first.media.title;
        }
        let tmp25;
        if (null != image_url) {
          if (tmpResult38.hasFetchedColors(image_url)) {
            const heroColors2 = useHeroColors.getHeroColors(image_url);
            ({ primaryColor: primaryColor2, secondaryColor: secondaryColor2 } = heroColors2);
            const tmpResult39 = useHeroColors;
            const items5 = [ColorUtils.hexToRgba(primaryColor2), ];
            const tmpResult40 = ColorUtils;
            items5[1] = ColorUtils.hexToRgba(secondaryColor2);
            const obj8 = { imageUrl: image_url, title: first.media.title, subtitles: null, gradientColors: null, platformIconUrl: null };
            const obj9 = { text: name };
            const items6 = [obj9];
            obj8.subtitles = items6;
            obj8.gradientColors = items5;
            obj8.platformIconUrl = Image.resolveAssetSource(_modDef8410).uri;
            tmp25 = obj8;
            const tmpResult41 = ColorUtils;
          }
          tmpResult38 = useAvatarColor;
        }
        tmp20 = tmp25;
      } else if (ContentInventoryEntryType.ContentInventoryEntryType.LAUNCHED_ACTIVITY === content_type) {
        const application1 = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
        let tmp9;
        if (null != application1) {
          let uri = application1.getIconURL(ImageSizes.LARGE);
          if (uri == null) {
            uri = Image.resolveAssetSource(_modDef8399).uri;
          }
          if (uri === Image.resolveAssetSource(_modDef8399).uri) {
            let tmp7 = items;
          } else {
            if (tmpResult42.hasFetchedColors(uri)) {
              const heroColors3 = useHeroColors.getHeroColors(uri);
              ({ primaryColor, secondaryColor } = heroColors3);
              const tmpResult43 = useHeroColors;
              const items7 = [ColorUtils.hexToRgba(primaryColor), ];
              const tmpResult44 = ColorUtils;
              items7[1] = ColorUtils.hexToRgba(secondaryColor);
              tmp7 = items7;
              const tmpResult45 = ColorUtils;
            }
            tmpResult42 = useAvatarColor;
          }
          if (null != tmp7) {
            const items8 = [];
            const obj10 = { badgeUrl: Image.resolveAssetSource(_modDef5244).uri };
            const timestamp = message.timestamp;
            const time = timestamp.getTime();
            const obj11 = {};
            const merged = Object.assign(obj10);
            obj11.text = utils.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time);
            const tmpResult47 = utils;
            const obj12 = { formatSet: utils.A11Y_FORMAT_SET };
            obj11.ariaDescription = tmpResult47.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time, obj12);
            items8.push(obj11);
            const obj13 = { imageUrl: uri, title: contentInventoryEntry.extra.activity_name, subtitles: items8, gradientColors: tmp7 };
            tmp9 = obj13;
            const tmpResult46 = utils;
          }
        }
        tmp20 = tmp9;
      }
    }
    const user = UserStore.getUser(contentInventoryEntry.author_id);
    if (null != user) {
      const name1 = NicknameUtilsDefault.getName(undefined, undefined, user);
      const obj14 = { authorId: contentInventoryEntry.author_id, avatarUrl: null, userActionDescription: null, userClickable: null };
      const ensureAvatarSourceResult = utils_AvatarUtils.ensureAvatarSource(user.getAvatarSource(null, undefined, 80));
      let uri1;
      if (ensureAvatarSourceResult != null) {
        uri1 = ensureAvatarSourceResult.uri;
      }
      obj14.avatarUrl = uri1;
      obj14.userActionDescription = name1;
      const obj15 = { ariaDescription: name1 };
      obj14.userClickable = obj15;
      const tmpResult48 = utils_AvatarUtils;
    }
    if (null != tmp20) {
      if (null != tmp81) {
        const obj16 = { contentId: contentInventoryEntry.id };
        const merged1 = Object.assign(tmp20);
        const merged2 = Object.assign(tmp81);
        return obj16;
      }
    }
  }
  const application2 = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
  let tmp54 = null;
  if (null != application2) {
    let game_name = application2.getIconURL(ImageSizes.LARGE);
    if (game_name == tmp54) {
      game_name = Image.resolveAssetSource(_modDef8399).uri;
    }
    if (game_name === Image.resolveAssetSource(_modDef8399).uri) {
      let tmp60 = items;
    } else {
      if (tmpResult49.hasFetchedColors(game_name)) {
        const heroColors4 = useHeroColors.getHeroColors(game_name);
        ({ primaryColor: primaryColor5, secondaryColor: secondaryColor5 } = heroColors4);
        const tmpResult50 = useHeroColors;
        const items9 = [ColorUtils.hexToRgba(primaryColor5), ];
        const tmpResult51 = ColorUtils;
        items9[1] = ColorUtils.hexToRgba(secondaryColor5);
        tmp60 = items9;
        const tmpResult52 = ColorUtils;
      }
      tmpResult49 = useAvatarColor;
    }
    if (tmp54 != tmp60) {
      const items10 = [];
      if (tmpResult53.isEntryTopGame(contentInventoryEntry)) {
        const entryDuration = utils.getEntryDuration(contentInventoryEntry);
        tmp54 = tmp54 == entryDuration;
        if (!tmp54) {
          const _Math = Math;
          const rounded = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
          const intl2 = util.intl;
          const intl3 = util.intl;
          const obj17 = { hours: rounded };
          const _HermesInternal2 = HermesInternal;
          const obj18 = { badgeUrl: null, text: null };
          const combined = "" + intl2.string(util.t["/50eHi"]) + " - " + intl3.formatToPlainString(util.t.C0AxoR, obj17);
          obj18.badgeUrl = Image.resolveAssetSource(_modDef8405).uri;
          obj18.text = combined;
          items10.push(obj18);
          const stringResult = intl2.string(util.t["/50eHi"]);
        }
        const tmpResult54 = utils;
      } else {
        const obj19 = { badgeUrl: Image.resolveAssetSource(_modDef8406).uri };
        const timestamp2 = message.timestamp;
        const time1 = timestamp2.getTime();
        const obj20 = {};
        const merged3 = Object.assign(obj19);
        obj20.text = utils.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time1);
        const tmpResult56 = utils;
        const obj21 = { formatSet: utils.A11Y_FORMAT_SET };
        obj20.ariaDescription = tmpResult56.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time1, obj21);
        items10.push(obj20);
        const tmpResult55 = utils;
      }
      const obj22 = { imageUrl: game_name, title: null, subtitles: null, gradientColors: null };
      game_name = contentInventoryEntry.extra.game_name;
      obj22.title = game_name;
      obj22.subtitles = items10;
      obj22.gradientColors = tmp60;
      tmpResult53 = utils;
    }
  }
  tmp20 = tmp55;
};