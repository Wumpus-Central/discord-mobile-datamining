// === Module 8343: items ===

// Module 8343 (items)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import obj132Default from "obj132" /* 687 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ensureAvatarSource from "ensureAvatarSource" /* 1438 */;
import hexToRgba from "hexToRgba" /* 4223 */;
import items32 from "items3" /* 4481 */;
import getNicknameDefault from "getNickname" /* 4796 */;
import registerAssetDefault from "registerAsset" /* 6684 */;
import updateAssets from "updateAssets" /* 7247 */;
import registerAssetDefault2 from "registerAsset" /* 7975 */;
import registerAssetDefault3 from "registerAsset" /* 8011 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 8344 */;
import hasFetchedColors from "hasFetchedColors" /* 8345 */;
import useHeroColors from "useHeroColors" /* 8346 */;
import calculateTimestampDurations from "calculateTimestampDurations" /* 8348 */;
import ContentInventoryTraitType from "ContentInventoryTraitType" /* 8349 */;
import registerAssetDefault4 from "registerAsset" /* 8350 */;
import registerAssetDefault5 from "registerAsset" /* 8351 */;
import registerAssetDefault6 from "registerAsset" /* 8352 */;
import addApplication from "addApplication" /* 4478 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;

const Image = get_ActivityIndicator.Image;
const ImageSizes = items32.ImageSizes;
let items = [{ r: 0, g: 0, b: 0, a: 1 }, { r: 0, g: 0, b: 0, a: 1 }];
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx");

export const transformToRowGeneratedContentInventoryEntryComponent = function transformToRowGeneratedContentInventoryEntryComponent(component) {
  const contentInventoryEntry = component.component.contentInventoryEntry;
  const message = component.message;
  const content_type = contentInventoryEntry.content_type;
  if (ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME !== content_type) {
    if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (ContentInventoryEntryType.ContentInventoryEntryType.WATCHED_MEDIA === content_type) {
        let tmpResult = updateAssets;
        items = [, ];
        ({ LARGE: arr7[0], LARGE: arr7[1] } = ImageSizes);
        const assetImage = tmpResult.getAssetImage(contentInventoryEntry.extra.application_id, contentInventoryEntry.extra.media_assets_large_image, items);
        const application = store.getApplication(contentInventoryEntry.extra.application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(ImageSizes.LARGE);
        }
        if (iconURL == null) {
          iconURL = Image.resolveAssetSource(registerAssetDefault).uri;
        }
        let tmp45 = assetImage;
        if (assetImage == null) {
          tmp45 = iconURL;
        }
        if (tmp45 === Image.resolveAssetSource(registerAssetDefault).uri) {
          let tmp47 = items;
        } else {
          tmpResult = hasFetchedColors;
          if (tmpResult.hasFetchedColors(tmp45)) {
            const heroColors = useHeroColors.getHeroColors(tmp45);
            ({ primaryColor: primaryColor4, secondaryColor: secondaryColor4 } = heroColors);
            const tmpResult1 = useHeroColors;
            const items1 = [hexToRgba.hexToRgba(primaryColor4), ];
            const tmpResult2 = hexToRgba;
            items1[1] = hexToRgba.hexToRgba(secondaryColor4);
            tmp47 = items1;
            const tmpResult3 = hexToRgba;
          }
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
            const intl4 = getSystemLocale.intl;
            let obj = { seasonNum: null, episodeNum: null };
            obj[0] = match[1];
            obj[1] = match[2];
            const formatToPlainStringResult = intl4.formatToPlainString(getSystemLocale.t.ijVm6y, obj);
            let sum = formatToPlainStringResult;
            if (null != contentInventoryEntry.extra.media_title) {
              const _HermesInternal = HermesInternal;
              sum = formatToPlainStringResult + " \u00B7 " + contentInventoryEntry.extra.media_subtitle;
            }
            obj = { text: null };
            obj[0] = sum;
            items2.push(obj);
          }
          obj1 = { imageUrl: null, title: null, subtitles: null, gradientColors: null, platformIconUrl: null };
          obj1[0] = tmp45;
          obj1[1] = contentInventoryEntry.extra.media_title;
          obj1[2] = items2;
          obj1[3] = tmp47;
          obj1[4] = Image.resolveAssetSource(registerAssetDefault5).uri;
          tmp49 = obj1;
        }
        let tmp20 = tmp49;
      } else if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_ARTIST === content_type) {
        const image_url2 = contentInventoryEntry.extra.media.image_url;
        let tmp30;
        if (null != image_url2) {
          if (tmpResult4.hasFetchedColors(image_url2)) {
            const heroColors1 = useHeroColors.getHeroColors(image_url2);
            ({ primaryColor: primaryColor3, secondaryColor: secondaryColor3 } = heroColors1);
            const tmpResult5 = useHeroColors;
            const items3 = [hexToRgba.hexToRgba(primaryColor3), ];
            const tmpResult6 = hexToRgba;
            items3[1] = hexToRgba.hexToRgba(secondaryColor3);
            const tmpResult7 = hexToRgba;
            const trait = calculateTimestampDurations.getTrait(contentInventoryEntry, ContentInventoryTraitType.ContentInventoryTraitType.AGGREGATE_COUNT);
            let count;
            if (trait != null) {
              count = trait.count;
            }
            if (null != count) {
              const items4 = [];
              const intl = getSystemLocale.intl;
              const obj2 = { count: null };
              obj2[0] = count;
              const obj3 = { badgeUrl: null, text: null };
              obj3[0] = Image.resolveAssetSource(registerAssetDefault3).uri;
              obj3[1] = intl.formatToPlainString(getSystemLocale.t.HtifnG, obj2);
              items4.push(obj3);
              const obj4 = { imageUrl: null, title: null, subtitles: null, gradientColors: null, platformIconUrl: null };
              obj4[0] = image_url2;
              obj4[1] = contentInventoryEntry.extra.artist.name;
              obj4[2] = items4;
              obj4[3] = items3;
              obj4[4] = Image.resolveAssetSource(registerAssetDefault6).uri;
              tmp30 = obj4;
              const formatToPlainStringResult1 = intl.formatToPlainString(getSystemLocale.t.HtifnG, obj2);
            }
            const tmpResult8 = calculateTimestampDurations;
          }
          tmpResult4 = hasFetchedColors;
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
          if (tmpResult9.hasFetchedColors(image_url)) {
            const heroColors2 = useHeroColors.getHeroColors(image_url);
            ({ primaryColor: primaryColor2, secondaryColor: secondaryColor2 } = heroColors2);
            const tmpResult10 = useHeroColors;
            const items5 = [hexToRgba.hexToRgba(primaryColor2), ];
            const tmpResult11 = hexToRgba;
            items5[1] = hexToRgba.hexToRgba(secondaryColor2);
            const obj5 = { imageUrl: null, title: null, subtitles: null, gradientColors: null, platformIconUrl: null };
            obj5[0] = image_url;
            obj5[1] = first.media.title;
            const obj6 = { text: null };
            obj6[0] = name;
            const items6 = [obj6];
            obj5[2] = items6;
            obj5[3] = items5;
            obj5[4] = Image.resolveAssetSource(registerAssetDefault6).uri;
            tmp25 = obj5;
            const tmpResult12 = hexToRgba;
          }
          tmpResult9 = hasFetchedColors;
        }
        tmp20 = tmp25;
      } else if (ContentInventoryEntryType.ContentInventoryEntryType.LAUNCHED_ACTIVITY === content_type) {
        const application1 = store.getApplication(contentInventoryEntry.extra.application_id);
        let tmp9;
        if (null != application1) {
          let uri = application1.getIconURL(ImageSizes.LARGE);
          if (uri == null) {
            uri = Image.resolveAssetSource(registerAssetDefault).uri;
          }
          obj = Image;
          if (uri === Image.resolveAssetSource(registerAssetDefault).uri) {
            let tmp7 = items;
          } else {
            if (tmpResult13.hasFetchedColors(uri)) {
              const heroColors3 = useHeroColors.getHeroColors(uri);
              ({ primaryColor, secondaryColor } = heroColors3);
              const tmpResult14 = useHeroColors;
              const items7 = [hexToRgba.hexToRgba(primaryColor), ];
              const tmpResult15 = hexToRgba;
              items7[1] = hexToRgba.hexToRgba(secondaryColor);
              tmp7 = items7;
              const tmpResult16 = hexToRgba;
            }
            tmpResult13 = hasFetchedColors;
          }
          if (null != tmp7) {
            const items8 = [];
            const obj7 = { badgeUrl: null };
            obj7[0] = obj.resolveAssetSource(registerAssetDefault2).uri;
            const timestamp = message.timestamp;
            const time = timestamp.getTime();
            const obj8 = {};
            const merged = Object.assign(obj7);
            obj8.text = calculateTimestampDurations.formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time);
            const tmpResult18 = calculateTimestampDurations;
            const obj9 = { formatSet: null };
            obj9[0] = calculateTimestampDurations.A11Y_FORMAT_SET;
            obj8.ariaDescription = tmpResult18.formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time, obj9);
            items8.push(obj8);
            const obj10 = { imageUrl: null, title: null, subtitles: null, gradientColors: null };
            obj10[0] = uri;
            obj10[1] = contentInventoryEntry.extra.activity_name;
            obj10[2] = items8;
            obj10[3] = tmp7;
            tmp9 = obj10;
            const tmpResult17 = calculateTimestampDurations;
          }
        }
        tmp20 = tmp9;
      }
    }
    user = user.getUser(contentInventoryEntry.author_id);
    if (null != user) {
      const name1 = getNicknameDefault.getName(undefined, undefined, user);
      const obj11 = { authorId: null, avatarUrl: null, userActionDescription: null, userClickable: null };
      obj11[0] = contentInventoryEntry.author_id;
      const ensureAvatarSourceResult = ensureAvatarSource.ensureAvatarSource(user.getAvatarSource(null, undefined, 80));
      uri = undefined;
      if (ensureAvatarSourceResult != null) {
        uri = ensureAvatarSourceResult.uri;
      }
      obj11[1] = uri;
      obj11[2] = name1;
      const obj12 = { ariaDescription: null };
      obj12[0] = name1;
      obj11[3] = obj12;
      const tmpResult19 = ensureAvatarSource;
    }
    if (null != tmp20) {
      if (null != tmp81) {
        const obj13 = { contentId: null };
        obj13[0] = contentInventoryEntry.id;
        const merged1 = Object.assign(tmp20);
        const merged2 = Object.assign(tmp81);
        return obj13;
      }
    }
  }
  const application2 = store.getApplication(contentInventoryEntry.extra.application_id);
  let tmp54 = null;
  if (null != application2) {
    let game_name = application2.getIconURL(ImageSizes.LARGE);
    if (game_name == tmp54) {
      game_name = Image.resolveAssetSource(registerAssetDefault).uri;
    }
    if (game_name === Image.resolveAssetSource(registerAssetDefault).uri) {
      let tmp60 = items;
    } else {
      if (tmpResult20.hasFetchedColors(game_name)) {
        const heroColors4 = useHeroColors.getHeroColors(game_name);
        ({ primaryColor: primaryColor5, secondaryColor: secondaryColor5 } = heroColors4);
        const tmpResult21 = useHeroColors;
        const items9 = [hexToRgba.hexToRgba(primaryColor5), ];
        const tmpResult22 = hexToRgba;
        items9[1] = hexToRgba.hexToRgba(secondaryColor5);
        tmp60 = items9;
        const tmpResult23 = hexToRgba;
      }
      tmpResult20 = hasFetchedColors;
    }
    if (tmp54 != tmp60) {
      const items10 = [];
      if (tmpResult24.isEntryTopGame(contentInventoryEntry)) {
        const entryDuration = calculateTimestampDurations.getEntryDuration(contentInventoryEntry);
        tmp54 = tmp54 == entryDuration;
        if (!tmp54) {
          const _Math = Math;
          const rounded = Math.round(entryDuration / obj132Default.Seconds.HOUR);
          const intl2 = getSystemLocale.intl;
          const intl3 = getSystemLocale.intl;
          const obj14 = { hours: null };
          obj14[0] = rounded;
          const _HermesInternal2 = HermesInternal;
          const obj15 = { badgeUrl: null, text: null };
          const combined = "" + intl2.string(getSystemLocale.t["/50eHi"]) + " - " + intl3.formatToPlainString(getSystemLocale.t.C0AxoR, obj14);
          obj15[0] = Image.resolveAssetSource(registerAssetDefault3).uri;
          obj15[1] = combined;
          items10.push(obj15);
          const stringResult = intl2.string(getSystemLocale.t["/50eHi"]);
        }
        const tmpResult25 = calculateTimestampDurations;
      } else {
        const obj16 = { badgeUrl: null };
        obj16[0] = Image.resolveAssetSource(registerAssetDefault4).uri;
        const timestamp2 = message.timestamp;
        const time1 = timestamp2.getTime();
        const obj17 = {};
        const merged3 = Object.assign(obj16);
        obj17.text = calculateTimestampDurations.formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time1);
        const tmpResult27 = calculateTimestampDurations;
        const obj18 = { formatSet: null };
        obj18[0] = calculateTimestampDurations.A11Y_FORMAT_SET;
        obj17.ariaDescription = tmpResult27.formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time1, obj18);
        items10.push(obj17);
        const tmpResult26 = calculateTimestampDurations;
      }
      const obj19 = { imageUrl: null, title: null, subtitles: null, gradientColors: null };
      obj19[0] = game_name;
      game_name = contentInventoryEntry.extra.game_name;
      obj19[1] = game_name;
      obj19[2] = items10;
      obj19[3] = tmp60;
      tmpResult24 = calculateTimestampDurations;
    }
  }
  tmp20 = tmp55;
};