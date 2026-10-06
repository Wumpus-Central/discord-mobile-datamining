// discord_app/modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import DurationsDefault from "../../../../utils/Durations.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import utils_AvatarUtils from "../../../../utils/native/AvatarUtils.tsx";
import Constants from "../../../activities/Constants.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import AssetRegistryDefault from "../../../../../_runtime/05824_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../../_runtime/07770_AssetRegistry.js";
import ContentInventoryEntryType from "../../../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import AssetRegistryDefault3 from "../../../../../_runtime/07825_AssetRegistry.js";
import useAvatarColor from "../../../avatar/useAvatarColor.tsx";
import useHeroColors from "../../../content_inventory/memberlist/useHeroColors.tsx";
import utils from "../../../content_inventory/utils.tsx";
import ContentInventoryTraitType from "../../../../../discord_common/js/shared/shared-constants/ContentInventoryTraitType.tsx";
import AssetRegistryDefault4 from "../../../../../_runtime/07831_AssetRegistry.js";
import ApplicationAssetUtils from "../../../../utils/ApplicationAssetUtils.tsx";
import AssetRegistryDefault5 from "../../../../../_runtime/07834_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../../../_runtime/07835_AssetRegistry.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Image = react_native.Image;
const ImageSizes = Constants.ImageSizes;
let items = [
  { r: 0, g: 0, b: 0, a: 1 },
  { r: 0, g: 0, b: 0, a: 1 },
];
const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx",
);

export const transformToRowGeneratedContentInventoryEntryComponent =
  function transformToRowGeneratedContentInventoryEntryComponent(component) {
    let combined;
    let formatEntryTimestamp;
    let formatEntryTimestamp2;
    let formatToPlainStringResult1;
    let items6;
    let locale;
    let locale2;
    let obj12;
    let obj21;
    let primaryColor;
    let primaryColor2;
    let primaryColor3;
    let primaryColor4;
    let primaryColor5;
    let secondaryColor;
    let secondaryColor2;
    let secondaryColor3;
    let secondaryColor4;
    let secondaryColor5;
    let tmpResult46;
    let tmpResult55;
    const contentInventoryEntry = component.component.contentInventoryEntry;
    const message = component.message;
    const content_type = contentInventoryEntry.content_type;
    if (ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      let tmp21;
      if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME !== content_type) {
        if (ContentInventoryEntryType.ContentInventoryEntryType.WATCHED_MEDIA === content_type) {
          let tmp48;
          items = [,];
          ({ LARGE: arr7[0], LARGE: arr7[1] } = ImageSizes);
          const tmpResult = ApplicationAssetUtils;
          const assetImage = tmpResult.getAssetImage(
            contentInventoryEntry.extra.application_id,
            contentInventoryEntry.extra.media_assets_large_image,
            items,
          );
          const application = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
          let iconURL;
          if (application != null) {
            iconURL = application.getIconURL(ImageSizes.LARGE);
          }
          if (iconURL == null) {
            iconURL = Image.resolveAssetSource(AssetRegistryDefault3).uri;
          }
          let tmp46 = assetImage;
          if (assetImage == null) {
            tmp46 = iconURL;
          }
          if (tmp46 === Image.resolveAssetSource(AssetRegistryDefault3).uri) {
            tmp48 = items;
          } else {
            const tmpResult29 = useAvatarColor;
            if (tmpResult29.hasFetchedColors(tmp46)) {
              const tmpResult30 = useHeroColors;
              const heroColors = tmpResult30.getHeroColors(tmp46);
              ({ primaryColor: primaryColor4, secondaryColor: secondaryColor4 } = heroColors);
              const items1 = [,];
              const tmpResult31 = ColorUtils;
              items1[0] = tmpResult31.hexToRgba(primaryColor4);
              const tmpResult32 = ColorUtils;
              items1[1] = tmpResult32.hexToRgba(secondaryColor4);
              tmp48 = items1;
            }
          }
          let tmp50;
          if (null != tmp48) {
            let str = contentInventoryEntry.extra.media_assets_large_text;
            const exec = /\w+ (\d+), \w+ (\d+)/.exec;
            if (str == null) {
              str = "";
            }
            const items2 = [];
            const match = exec(str);
            if (null != match) {
              const intl4 = intl5.intl;
              const obj2 = { seasonNum: match[1], episodeNum: match[2] };
              const formatToPlainStringResult = intl4.formatToPlainString(intl5.t.ijVm6y, obj2);
              let sum = formatToPlainStringResult;
              if (null != contentInventoryEntry.extra.media_title) {
                const _HermesInternal = HermesInternal;
                sum = formatToPlainStringResult + " \u00B7 " + contentInventoryEntry.extra.media_subtitle;
              }
              const obj3 = { text: sum };
              items2.push(obj3);
            }
            tmp50 = {
              imageUrl: tmp46,
              title: contentInventoryEntry.extra.media_title,
              subtitles: items2,
              gradientColors: tmp48,
              platformIconUrl: Image.resolveAssetSource(AssetRegistryDefault5).uri,
            };
            const obj4 = {
              imageUrl: tmp46,
              title: contentInventoryEntry.extra.media_title,
              subtitles: items2,
              gradientColors: tmp48,
              platformIconUrl: Image.resolveAssetSource(AssetRegistryDefault5).uri,
            };
          }
          tmp21 = tmp50;
        } else if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_ARTIST === content_type) {
          const image_url2 = contentInventoryEntry.extra.media.image_url;
          let tmp31;
          if (null != image_url2) {
            const tmpResult33 = useAvatarColor;
            if (tmpResult33.hasFetchedColors(image_url2)) {
              const tmpResult34 = useHeroColors;
              const heroColors1 = tmpResult34.getHeroColors(image_url2);
              ({ primaryColor: primaryColor3, secondaryColor: secondaryColor3 } = heroColors1);
              const items3 = [,];
              const tmpResult35 = ColorUtils;
              items3[0] = tmpResult35.hexToRgba(primaryColor3);
              const tmpResult36 = ColorUtils;
              items3[1] = tmpResult36.hexToRgba(secondaryColor3);
              const tmpResult37 = utils;
              const trait = tmpResult37.getTrait(
                contentInventoryEntry,
                ContentInventoryTraitType.ContentInventoryTraitType.AGGREGATE_COUNT,
              );
              let count;
              if (trait != null) {
                count = trait.count;
              }
              if (null != count) {
                const items4 = [];
                const intl = intl5.intl;
                const obj5 = { count };
                const push2 = items4.push;
                const obj6 = {
                  badgeUrl: Image.resolveAssetSource(AssetRegistryDefault2).uri,
                  text: formatToPlainStringResult1,
                };
                formatToPlainStringResult1 = intl.formatToPlainString(intl5.t.HtifnG, obj5);
                push2(obj6);
                tmp31 = {
                  imageUrl: image_url2,
                  title: contentInventoryEntry.extra.artist.name,
                  subtitles: items4,
                  gradientColors: items3,
                  platformIconUrl: Image.resolveAssetSource(AssetRegistryDefault6).uri,
                };
                const obj7 = {
                  imageUrl: image_url2,
                  title: contentInventoryEntry.extra.artist.name,
                  subtitles: items4,
                  gradientColors: items3,
                  platformIconUrl: Image.resolveAssetSource(AssetRegistryDefault6).uri,
                };
              }
            }
          }
          tmp21 = tmp31;
        } else if (ContentInventoryEntryType.ContentInventoryEntryType.LISTENED_SESSION === content_type) {
          const first = contentInventoryEntry.extra.entries[0];
          const image_url = first.media.image_url;
          const first1 = first.media.artists[0];
          let name;
          const title = first.media.title;
          if (first1 != null) {
            name = first1.name;
          }
          if (name == null) {
            name = first.media.title;
          }
          let tmp26;
          if (null != image_url) {
            const tmpResult38 = useAvatarColor;
            if (tmpResult38.hasFetchedColors(image_url)) {
              const tmpResult39 = useHeroColors;
              const heroColors2 = tmpResult39.getHeroColors(image_url);
              ({ primaryColor: primaryColor2, secondaryColor: secondaryColor2 } = heroColors2);
              const items5 = [,];
              const tmpResult40 = ColorUtils;
              items5[0] = tmpResult40.hexToRgba(primaryColor2);
              const tmpResult41 = ColorUtils;
              items5[1] = tmpResult41.hexToRgba(secondaryColor2);
              const obj8 = {
                imageUrl: image_url,
                title,
                subtitles: items6,
                gradientColors: items5,
                platformIconUrl: Image.resolveAssetSource(AssetRegistryDefault6).uri,
              };
              items6 = [{ text: name }];
              tmp26 = obj8;
              const obj9 = { text: name };
            }
          }
          tmp21 = tmp26;
        } else if (ContentInventoryEntryType.ContentInventoryEntryType.LAUNCHED_ACTIVITY === content_type) {
          const application1 = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
          let tmp9;
          if (null != application1) {
            let tmp7;
            let uri = application1.getIconURL(ImageSizes.LARGE);
            if (uri == null) {
              uri = Image.resolveAssetSource(AssetRegistryDefault3).uri;
            }
            if (uri === Image.resolveAssetSource(AssetRegistryDefault3).uri) {
              tmp7 = items;
            } else {
              const tmpResult42 = useAvatarColor;
              if (tmpResult42.hasFetchedColors(uri)) {
                const tmpResult43 = useHeroColors;
                const heroColors3 = tmpResult43.getHeroColors(uri);
                ({ primaryColor, secondaryColor } = heroColors3);
                const items7 = [,];
                const tmpResult44 = ColorUtils;
                items7[0] = tmpResult44.hexToRgba(primaryColor);
                const tmpResult45 = ColorUtils;
                items7[1] = tmpResult45.hexToRgba(secondaryColor);
                tmp7 = items7;
              }
            }
            if (null != tmp7) {
              const items8 = [];
              const push = items8.push;
              const timestamp = message.timestamp;
              const obj10 = { badgeUrl: Image.resolveAssetSource(AssetRegistryDefault).uri };
              const time = timestamp.getTime();
              const obj11 = {
                text: tmpResult46.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time),
                ariaDescription: formatEntryTimestamp(contentInventoryEntry, locale, time, obj12),
              };
              const merged = Object.assign(obj10);
              tmpResult46 = utils;
              const tmpResult47 = utils;
              formatEntryTimestamp = tmpResult47.formatEntryTimestamp;
              locale = LocaleStore.locale;
              obj12 = { formatSet: utils.A11Y_FORMAT_SET };
              push(obj11);
              tmp9 = {
                imageUrl: uri,
                title: contentInventoryEntry.extra.activity_name,
                subtitles: items8,
                gradientColors: tmp7,
              };
              const obj13 = {
                imageUrl: uri,
                title: contentInventoryEntry.extra.activity_name,
                subtitles: items8,
                gradientColors: tmp7,
              };
            }
          }
          tmp21 = tmp9;
        }
      }
      const user = UserStore.getUser(contentInventoryEntry.author_id);
      if (null != user) {
        const obj50 = NicknameUtilsDefault;
        const name1 = obj50.getName(undefined, undefined, user);
        const tmpResult48 = utils_AvatarUtils;
        const ensureAvatarSourceResult = tmpResult48.ensureAvatarSource(user.getAvatarSource(null, undefined, 80));
        let uri1;
        if (ensureAvatarSourceResult != null) {
          uri1 = ensureAvatarSourceResult.uri;
        }
        const obj15 = { ariaDescription: name1 };
      }
      if (null != tmp21) {
        if (null != tmp82) {
          const obj16 = { contentId: contentInventoryEntry.id };
          const merged1 = Object.assign(tmp21);
          const merged2 = Object.assign(tmp82);
          return obj16;
        }
      }
    }
    const application2 = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
    let tmp56;
    if (null != application2) {
      let tmp61;
      let uri2 = application2.getIconURL(ImageSizes.LARGE);
      if (uri2 == null) {
        uri2 = Image.resolveAssetSource(AssetRegistryDefault3).uri;
      }
      if (uri2 === Image.resolveAssetSource(AssetRegistryDefault3).uri) {
        tmp61 = items;
      } else {
        const tmpResult49 = useAvatarColor;
        if (tmpResult49.hasFetchedColors(uri2)) {
          const tmpResult50 = useHeroColors;
          const heroColors4 = tmpResult50.getHeroColors(uri2);
          ({ primaryColor: primaryColor5, secondaryColor: secondaryColor5 } = heroColors4);
          const items9 = [,];
          const tmpResult51 = ColorUtils;
          items9[0] = tmpResult51.hexToRgba(primaryColor5);
          const tmpResult52 = ColorUtils;
          items9[1] = tmpResult52.hexToRgba(secondaryColor5);
          tmp61 = items9;
        }
      }
      if (null != tmp61) {
        const items10 = [];
        const tmpResult53 = utils;
        if (tmpResult53.isEntryTopGame(contentInventoryEntry)) {
          const tmpResult54 = utils;
          const entryDuration = tmpResult54.getEntryDuration(contentInventoryEntry);
          if (null != entryDuration) {
            const _Math = Math;
            const rounded = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
            const intl2 = intl5.intl;
            const stringResult = intl2.string(intl5.t["/50eHi"]);
            const intl3 = intl5.intl;
            const _HermesInternal2 = HermesInternal;
            const obj17 = { hours: rounded };
            const obj18 = { badgeUrl: Image.resolveAssetSource(AssetRegistryDefault2).uri, text: combined };
            combined = "" + stringResult + " - " + intl3.formatToPlainString(intl5.t.C0AxoR, obj17);
            const push4 = items10.push;
            push4(obj18);
          }
        } else {
          const push3 = items10.push;
          const timestamp2 = message.timestamp;
          const obj19 = { badgeUrl: Image.resolveAssetSource(AssetRegistryDefault4).uri };
          const time1 = timestamp2.getTime();
          const obj20 = {
            text: tmpResult55.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time1),
            ariaDescription: formatEntryTimestamp2(contentInventoryEntry, locale2, time1, obj21),
          };
          const merged3 = Object.assign(obj19);
          tmpResult55 = utils;
          const tmpResult56 = utils;
          formatEntryTimestamp2 = tmpResult56.formatEntryTimestamp;
          locale2 = LocaleStore.locale;
          obj21 = { formatSet: utils.A11Y_FORMAT_SET };
          push3(obj20);
        }
        tmp56 = {
          imageUrl: uri2,
          title: contentInventoryEntry.extra.game_name,
          subtitles: items10,
          gradientColors: tmp61,
        };
        const obj22 = {
          imageUrl: uri2,
          title: contentInventoryEntry.extra.game_name,
          subtitles: items10,
          gradientColors: tmp61,
        };
      }
    }
    tmp21 = tmp56;
  };
