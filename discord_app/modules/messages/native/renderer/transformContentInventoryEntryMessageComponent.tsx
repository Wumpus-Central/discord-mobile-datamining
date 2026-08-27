// === Module 7970: items ===

// Module 7970 (items)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import items32 from "items3" /* 4473 */;
import getNicknameDefault from "getNickname" /* 4638 */;
import ContentInventoryEntryType from "ContentInventoryEntryType" /* 7971 */;
import registerAssetDefault from "registerAsset" /* 7972 */;
import registerAssetDefault2 from "registerAsset" /* 7978 */;
import registerAssetDefault3 from "registerAsset" /* 7984 */;
import closure_4 from "addApplication" /* 4486 */;
import closure_5 from "_getSystemLocale" /* 1996 */;
import closure_6 from "mergeGuildAvatar" /* 1922 */;

const Image = get_ActivityIndicator.Image;
const ImageSizes = items32.ImageSizes;
let items = [{ r: 0, g: 0, b: 0, a: 1 }, { r: 0, g: 0, b: 0, a: 1 }];
const result = set.fileFinishedImporting("modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx");

export const transformToRowGeneratedContentInventoryEntryComponent = function transformToRowGeneratedContentInventoryEntryComponent(component) {
  const contentInventoryEntry = component.component.contentInventoryEntry;
  const message = component.message;
  const content_type = contentInventoryEntry.content_type;
  if (ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME !== content_type) {
    if (tmp(7971).ContentInventoryEntryType.TOP_GAME !== content_type) {
      if (tmp(7971).ContentInventoryEntryType.WATCHED_MEDIA === content_type) {
        let tmpResult = tmp(7981);
        items = [, ];
        ({ LARGE: arr7[0], LARGE: arr7[1] } = ImageSizes);
        const assetImage = tmpResult.getAssetImage(contentInventoryEntry.extra.application_id, contentInventoryEntry.extra.media_assets_large_image, items);
        const application = store.getApplication(contentInventoryEntry.extra.application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(tmp38.LARGE);
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
          tmpResult = tmp(7973);
          if (tmpResult.hasFetchedColors(tmp45)) {
            const heroColors = tmp(7974).getHeroColors(tmp45);
            ({ primaryColor: primaryColor4, secondaryColor: secondaryColor4 } = heroColors);
            const tmpResult1 = tmp(7974);
            const items1 = [tmp(4293).hexToRgba(primaryColor4), ];
            const tmpResult2 = tmp(4293);
            items1[1] = tmp(4293).hexToRgba(secondaryColor4);
            tmp47 = items1;
            const tmpResult3 = tmp(4293);
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
            const intl4 = tmp(1236).intl;
            let obj = { seasonNum: null, episodeNum: null };
            obj[0] = match[1];
            obj[1] = match[2];
            const formatToPlainStringResult = intl4.formatToPlainString(tmp(1236).t.ijVm6y, obj);
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
          obj1[4] = obj28.resolveAssetSource(tmp46(7983)).uri;
          tmp49 = obj1;
          const obj33 = /\w+ (\d+), \w+ (\d+)/;
        }
        let tmp20 = tmp49;
        obj28 = Image;
        tmp38 = ImageSizes;
        tmp46 = importDefault;
      } else if (tmp(7971).ContentInventoryEntryType.TOP_ARTIST === content_type) {
        const image_url2 = contentInventoryEntry.extra.media.image_url;
        let tmp30;
        if (null != image_url2) {
          if (tmpResult4.hasFetchedColors(image_url2)) {
            const heroColors1 = tmp(7974).getHeroColors(image_url2);
            ({ primaryColor: primaryColor3, secondaryColor: secondaryColor3 } = heroColors1);
            const tmpResult5 = tmp(7974);
            const items3 = [tmp(4293).hexToRgba(primaryColor3), ];
            const tmpResult6 = tmp(4293);
            items3[1] = tmp(4293).hexToRgba(secondaryColor3);
            const tmpResult7 = tmp(4293);
            const trait = tmp(7976).getTrait(contentInventoryEntry, tmp(7977).ContentInventoryTraitType.AGGREGATE_COUNT);
            let count;
            if (trait != null) {
              count = trait.count;
            }
            if (null != count) {
              const items4 = [];
              const intl = tmp(1236).intl;
              const obj2 = { count: null };
              obj2[0] = count;
              const obj3 = { badgeUrl: null, text: null };
              obj3[0] = Image.resolveAssetSource(registerAssetDefault2).uri;
              obj3[1] = intl.formatToPlainString(tmp(1236).t.HtifnG, obj2);
              items4.push(obj3);
              const obj4 = { imageUrl: null, title: null, subtitles: null, gradientColors: null, platformIconUrl: null };
              obj4[0] = image_url2;
              obj4[1] = contentInventoryEntry.extra.artist.name;
              obj4[2] = items4;
              obj4[3] = items3;
              obj4[4] = Image.resolveAssetSource(registerAssetDefault3).uri;
              tmp30 = obj4;
              const formatToPlainStringResult1 = intl.formatToPlainString(tmp(1236).t.HtifnG, obj2);
            }
            const tmpResult8 = tmp(7976);
          }
          tmpResult4 = tmp(7973);
        }
        tmp20 = tmp30;
      } else if (tmp(7971).ContentInventoryEntryType.LISTENED_SESSION === content_type) {
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
            const heroColors2 = tmp(7974).getHeroColors(image_url);
            ({ primaryColor: primaryColor2, secondaryColor: secondaryColor2 } = heroColors2);
            const tmpResult10 = tmp(7974);
            const items5 = [tmp(4293).hexToRgba(primaryColor2), ];
            const tmpResult11 = tmp(4293);
            items5[1] = tmp(4293).hexToRgba(secondaryColor2);
            const obj5 = { imageUrl: null, title: null, subtitles: null, gradientColors: null, platformIconUrl: null };
            obj5[0] = image_url;
            obj5[1] = first.media.title;
            const obj6 = { text: null };
            obj6[0] = name;
            const items6 = [obj6];
            obj5[2] = items6;
            obj5[3] = items5;
            obj5[4] = Image.resolveAssetSource(registerAssetDefault3).uri;
            tmp25 = obj5;
            const tmpResult12 = tmp(4293);
          }
          tmpResult9 = tmp(7973);
        }
        tmp20 = tmp25;
      } else if (tmp(7971).ContentInventoryEntryType.LAUNCHED_ACTIVITY === content_type) {
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
              const heroColors3 = tmp(7974).getHeroColors(uri);
              ({ primaryColor, secondaryColor } = heroColors3);
              const tmpResult14 = tmp(7974);
              const items7 = [tmp(4293).hexToRgba(primaryColor), ];
              const tmpResult15 = tmp(4293);
              items7[1] = tmp(4293).hexToRgba(secondaryColor);
              tmp7 = items7;
              const tmpResult16 = tmp(4293);
            }
            tmpResult13 = tmp(7973);
          }
          if (null != tmp7) {
            const items8 = [];
            const obj7 = { badgeUrl: null };
            obj7[0] = obj.resolveAssetSource(tmp6(7980)).uri;
            const timestamp = message.timestamp;
            const time = timestamp.getTime();
            const obj8 = {};
            const merged = Object.assign(obj7);
            obj8.text = tmp(7976).formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time);
            const tmpResult18 = tmp(7976);
            const obj9 = { formatSet: null };
            obj9[0] = tmp(7976).A11Y_FORMAT_SET;
            obj8.ariaDescription = tmpResult18.formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time, obj9);
            items8.push(obj8);
            const obj10 = { imageUrl: null, title: null, subtitles: null, gradientColors: null };
            obj10[0] = uri;
            obj10[1] = contentInventoryEntry.extra.activity_name;
            obj10[2] = items8;
            obj10[3] = tmp7;
            tmp9 = obj10;
            const tmpResult17 = tmp(7976);
          }
          tmp6 = importDefault;
        }
        tmp20 = tmp9;
      }
    }
    user = user.getUser(contentInventoryEntry.author_id);
    if (null != user) {
      const name1 = getNicknameDefault.getName(undefined, undefined, user);
      const obj11 = { authorId: null, avatarUrl: null, userActionDescription: null, userClickable: null };
      obj11[0] = contentInventoryEntry.author_id;
      const obj53 = getNicknameDefault;
      const ensureAvatarSourceResult = tmp(1438).ensureAvatarSource(user.getAvatarSource(null, undefined, 80));
      uri = undefined;
      if (ensureAvatarSourceResult != null) {
        uri = ensureAvatarSourceResult.uri;
      }
      obj11[1] = uri;
      obj11[2] = name1;
      const obj12 = { ariaDescription: null };
      obj12[0] = name1;
      obj11[3] = obj12;
      const tmpResult19 = tmp(1438);
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
        const heroColors4 = tmp(7974).getHeroColors(game_name);
        ({ primaryColor: primaryColor5, secondaryColor: secondaryColor5 } = heroColors4);
        const tmpResult21 = tmp(7974);
        const items9 = [tmp(4293).hexToRgba(primaryColor5), ];
        const tmpResult22 = tmp(4293);
        items9[1] = tmp(4293).hexToRgba(secondaryColor5);
        tmp60 = items9;
        const tmpResult23 = tmp(4293);
      }
      tmpResult20 = tmp(7973);
    }
    if (tmp54 != tmp60) {
      const items10 = [];
      if (tmpResult24.isEntryTopGame(contentInventoryEntry)) {
        const entryDuration = tmp(7976).getEntryDuration(contentInventoryEntry);
        tmp54 = tmp54 == entryDuration;
        if (!tmp54) {
          const _Math = Math;
          const rounded = Math.round(entryDuration / tmp59(687).Seconds.HOUR);
          const intl2 = tmp(1236).intl;
          const intl3 = tmp(1236).intl;
          const obj14 = { hours: null };
          obj14[0] = rounded;
          const _HermesInternal2 = HermesInternal;
          const obj15 = { badgeUrl: null, text: null };
          const combined = "" + intl2.string(tmp(1236).t["/50eHi"]) + " - " + intl3.formatToPlainString(tmp(1236).t.C0AxoR, obj14);
          obj15[0] = obj37.resolveAssetSource(tmp59(7978)).uri;
          obj15[1] = combined;
          items10.push(obj15);
          const stringResult = intl2.string(tmp(1236).t["/50eHi"]);
        }
        const tmpResult25 = tmp(7976);
      } else {
        const obj16 = { badgeUrl: null };
        obj16[0] = obj37.resolveAssetSource(tmp59(7979)).uri;
        const timestamp2 = message.timestamp;
        const time1 = timestamp2.getTime();
        const obj17 = {};
        const merged3 = Object.assign(obj16);
        obj17.text = tmp(7976).formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time1);
        const tmpResult27 = tmp(7976);
        const obj18 = { formatSet: null };
        obj18[0] = tmp(7976).A11Y_FORMAT_SET;
        obj17.ariaDescription = tmpResult27.formatEntryTimestamp(contentInventoryEntry, closure_5.locale, time1, obj18);
        items10.push(obj17);
        const tmpResult26 = tmp(7976);
      }
      const obj19 = { imageUrl: null, title: null, subtitles: null, gradientColors: null };
      obj19[0] = game_name;
      game_name = contentInventoryEntry.extra.game_name;
      obj19[1] = game_name;
      obj19[2] = items10;
      obj19[3] = tmp60;
      tmpResult24 = tmp(7976);
    }
  }
  tmp20 = tmp55;
};