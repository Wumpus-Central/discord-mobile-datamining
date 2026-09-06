// discord_app/modules/messages/native/renderer/transformContentInventoryEntryMessageComponent.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import DurationsDefault from "../../../../utils/Durations.tsx";
import util from "../../../../intl/index.native.tsx";
import utils_AvatarUtils from "../../../../utils/native/AvatarUtils.tsx";
import Constants from "../../../activities/Constants.tsx";
import ColorUtils from "../../../../utils/ColorUtils.tsx";
import NicknameUtilsDefault from "../../../../utils/NicknameUtils.tsx";
import _modDef5033 from "../../../../../_runtime/metro/05033__.js";
import ContentInventoryEntryType from "../../../../../discord_common/js/shared/shared-constants/ContentInventoryEntryType.tsx";
import _modDef8131 from "../../../../../_runtime/metro/08131__.js";
import useAvatarColor from "../../../avatar/useAvatarColor.tsx";
import useHeroColors from "../../../content_inventory/memberlist/useHeroColors.tsx";
import utils from "../../../content_inventory/utils.tsx";
import ContentInventoryTraitType from "../../../../../discord_common/js/shared/shared-constants/ContentInventoryTraitType.tsx";
import _modDef8137 from "../../../../../_runtime/metro/08137__.js";
import _modDef8138 from "../../../../../_runtime/metro/08138__.js";
import ApplicationAssetUtils from "../../../../utils/ApplicationAssetUtils.tsx";
import _modDef8141 from "../../../../../_runtime/metro/08141__.js";
import _modDef8142 from "../../../../../_runtime/metro/08142__.js";
import ApplicationStore from "../../../applications/ApplicationStore.tsx";
import LocaleStore from "../../../user_settings/LocaleStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Image = _mod17.Image;
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
    const contentInventoryEntry = component.component.contentInventoryEntry;
    const message = component.message;
    const content_type = contentInventoryEntry.content_type;
    if (ContentInventoryEntryType.ContentInventoryEntryType.PLAYED_GAME !== content_type) {
      if (ContentInventoryEntryType.ContentInventoryEntryType.TOP_GAME !== content_type) {
        if (ContentInventoryEntryType.ContentInventoryEntryType.WATCHED_MEDIA === content_type) {
          let tmpResult = ApplicationAssetUtils;
          items = [,];
          ({ LARGE: arr7[0], LARGE: arr7[1] } = ImageSizes);
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
            iconURL = Image.resolveAssetSource(_modDef8131).uri;
          }
          let tmp45 = assetImage;
          if (assetImage == null) {
            tmp45 = iconURL;
          }
          if (tmp45 === Image.resolveAssetSource(_modDef8131).uri) {
            let tmp47 = items;
          } else {
            tmpResult = useAvatarColor;
            if (tmpResult.hasFetchedColors(tmp45)) {
              const heroColors = useHeroColors.getHeroColors(tmp45);
              ({ primaryColor: primaryColor4, secondaryColor: secondaryColor4 } = heroColors);
              const tmpResult1 = useHeroColors;
              const items1 = [ColorUtils.hexToRgba(primaryColor4)];
              const tmpResult2 = ColorUtils;
              items1[1] = ColorUtils.hexToRgba(secondaryColor4);
              tmp47 = items1;
              const tmpResult3 = ColorUtils;
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
              const intl4 = util.intl;
              let obj = { seasonNum: match[1], episodeNum: match[2] };
              const formatToPlainStringResult = intl4.formatToPlainString(util.t.ijVm6y, obj);
              let sum = formatToPlainStringResult;
              if (null != contentInventoryEntry.extra.media_title) {
                const _HermesInternal = HermesInternal;
                sum = formatToPlainStringResult + " \u00B7 " + contentInventoryEntry.extra.media_subtitle;
              }
              obj = { text: sum };
              items2.push(obj);
            }
            const obj1 = {
              imageUrl: tmp45,
              title: contentInventoryEntry.extra.media_title,
              subtitles: items2,
              gradientColors: tmp47,
              platformIconUrl: Image.resolveAssetSource(_modDef8141).uri,
            };
            tmp49 = obj1;
            const obj33 = /\w+ (\d+), \w+ (\d+)/;
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
              const items3 = [ColorUtils.hexToRgba(primaryColor3)];
              const tmpResult6 = ColorUtils;
              items3[1] = ColorUtils.hexToRgba(secondaryColor3);
              const tmpResult7 = ColorUtils;
              const trait = utils.getTrait(
                contentInventoryEntry,
                ContentInventoryTraitType.ContentInventoryTraitType.AGGREGATE_COUNT,
              );
              let count;
              if (trait != null) {
                count = trait.count;
              }
              if (null != count) {
                const items4 = [];
                const intl = util.intl;
                const obj2 = { count };
                const obj3 = {
                  badgeUrl: Image.resolveAssetSource(_modDef8137).uri,
                  text: intl.formatToPlainString(util.t.HtifnG, obj2),
                };
                items4.push(obj3);
                const obj4 = {
                  imageUrl: image_url2,
                  title: contentInventoryEntry.extra.artist.name,
                  subtitles: items4,
                  gradientColors: items3,
                  platformIconUrl: Image.resolveAssetSource(_modDef8142).uri,
                };
                tmp30 = obj4;
                const formatToPlainStringResult1 = intl.formatToPlainString(util.t.HtifnG, obj2);
              }
              const tmpResult8 = utils;
            }
            tmpResult4 = useAvatarColor;
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
              const items5 = [ColorUtils.hexToRgba(primaryColor2)];
              const tmpResult11 = ColorUtils;
              items5[1] = ColorUtils.hexToRgba(secondaryColor2);
              const obj5 = {
                imageUrl: image_url,
                title: first.media.title,
                subtitles: null,
                gradientColors: null,
                platformIconUrl: null,
              };
              const obj6 = { text: name };
              const items6 = [obj6];
              obj5.subtitles = items6;
              obj5.gradientColors = items5;
              obj5.platformIconUrl = Image.resolveAssetSource(_modDef8142).uri;
              tmp25 = obj5;
              const tmpResult12 = ColorUtils;
            }
            tmpResult9 = useAvatarColor;
          }
          tmp20 = tmp25;
        } else if (ContentInventoryEntryType.ContentInventoryEntryType.LAUNCHED_ACTIVITY === content_type) {
          const application1 = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
          let tmp9;
          if (null != application1) {
            let uri = application1.getIconURL(ImageSizes.LARGE);
            if (uri == null) {
              uri = Image.resolveAssetSource(_modDef8131).uri;
            }
            obj = Image;
            if (uri === Image.resolveAssetSource(_modDef8131).uri) {
              let tmp7 = items;
            } else {
              if (tmpResult13.hasFetchedColors(uri)) {
                const heroColors3 = useHeroColors.getHeroColors(uri);
                ({ primaryColor, secondaryColor } = heroColors3);
                const tmpResult14 = useHeroColors;
                const items7 = [ColorUtils.hexToRgba(primaryColor)];
                const tmpResult15 = ColorUtils;
                items7[1] = ColorUtils.hexToRgba(secondaryColor);
                tmp7 = items7;
                const tmpResult16 = ColorUtils;
              }
              tmpResult13 = useAvatarColor;
            }
            if (null != tmp7) {
              const items8 = [];
              const obj7 = { badgeUrl: obj.resolveAssetSource(_modDef5033).uri };
              const timestamp = message.timestamp;
              const time = timestamp.getTime();
              const obj8 = {};
              const merged = Object.assign(obj7);
              obj8.text = utils.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time);
              const tmpResult18 = utils;
              const obj9 = { formatSet: utils.A11Y_FORMAT_SET };
              obj8.ariaDescription = tmpResult18.formatEntryTimestamp(
                contentInventoryEntry,
                LocaleStore.locale,
                time,
                obj9,
              );
              items8.push(obj8);
              const obj10 = {
                imageUrl: uri,
                title: contentInventoryEntry.extra.activity_name,
                subtitles: items8,
                gradientColors: tmp7,
              };
              tmp9 = obj10;
              const tmpResult17 = utils;
            }
          }
          tmp20 = tmp9;
        }
      }
      const user = UserStore.getUser(contentInventoryEntry.author_id);
      if (null != user) {
        const name1 = NicknameUtilsDefault.getName(undefined, undefined, user);
        const obj11 = {
          authorId: contentInventoryEntry.author_id,
          avatarUrl: null,
          userActionDescription: null,
          userClickable: null,
        };
        const ensureAvatarSourceResult = utils_AvatarUtils.ensureAvatarSource(
          user.getAvatarSource(null, undefined, 80),
        );
        uri = undefined;
        if (ensureAvatarSourceResult != null) {
          uri = ensureAvatarSourceResult.uri;
        }
        obj11.avatarUrl = uri;
        obj11.userActionDescription = name1;
        const obj12 = { ariaDescription: name1 };
        obj11.userClickable = obj12;
        const tmpResult19 = utils_AvatarUtils;
      }
      if (null != tmp20) {
        if (null != tmp81) {
          const obj13 = { contentId: contentInventoryEntry.id };
          const merged1 = Object.assign(tmp20);
          const merged2 = Object.assign(tmp81);
          return obj13;
        }
      }
    }
    const application2 = ApplicationStore.getApplication(contentInventoryEntry.extra.application_id);
    let tmp54 = null;
    if (null != application2) {
      let game_name = application2.getIconURL(ImageSizes.LARGE);
      if (game_name == tmp54) {
        game_name = Image.resolveAssetSource(_modDef8131).uri;
      }
      if (game_name === Image.resolveAssetSource(_modDef8131).uri) {
        let tmp60 = items;
      } else {
        if (tmpResult20.hasFetchedColors(game_name)) {
          const heroColors4 = useHeroColors.getHeroColors(game_name);
          ({ primaryColor: primaryColor5, secondaryColor: secondaryColor5 } = heroColors4);
          const tmpResult21 = useHeroColors;
          const items9 = [ColorUtils.hexToRgba(primaryColor5)];
          const tmpResult22 = ColorUtils;
          items9[1] = ColorUtils.hexToRgba(secondaryColor5);
          tmp60 = items9;
          const tmpResult23 = ColorUtils;
        }
        tmpResult20 = useAvatarColor;
      }
      if (tmp54 != tmp60) {
        const items10 = [];
        if (tmpResult24.isEntryTopGame(contentInventoryEntry)) {
          const entryDuration = utils.getEntryDuration(contentInventoryEntry);
          tmp54 = tmp54 == entryDuration;
          if (!tmp54) {
            const _Math = Math;
            const rounded = Math.round(entryDuration / DurationsDefault.Seconds.HOUR);
            const intl2 = util.intl;
            const intl3 = util.intl;
            const obj14 = { hours: rounded };
            const _HermesInternal2 = HermesInternal;
            const obj15 = { badgeUrl: null, text: null };
            const combined =
              "" + intl2.string(util.t["/50eHi"]) + " - " + intl3.formatToPlainString(util.t.C0AxoR, obj14);
            obj15.badgeUrl = Image.resolveAssetSource(_modDef8137).uri;
            obj15.text = combined;
            items10.push(obj15);
            const stringResult = intl2.string(util.t["/50eHi"]);
          }
          const tmpResult25 = utils;
        } else {
          const obj16 = { badgeUrl: Image.resolveAssetSource(_modDef8138).uri };
          const timestamp2 = message.timestamp;
          const time1 = timestamp2.getTime();
          const obj17 = {};
          const merged3 = Object.assign(obj16);
          obj17.text = utils.formatEntryTimestamp(contentInventoryEntry, LocaleStore.locale, time1);
          const tmpResult27 = utils;
          const obj18 = { formatSet: utils.A11Y_FORMAT_SET };
          obj17.ariaDescription = tmpResult27.formatEntryTimestamp(
            contentInventoryEntry,
            LocaleStore.locale,
            time1,
            obj18,
          );
          items10.push(obj17);
          const tmpResult26 = utils;
        }
        const obj19 = { imageUrl: game_name, title: null, subtitles: null, gradientColors: null };
        game_name = contentInventoryEntry.extra.game_name;
        obj19.title = game_name;
        obj19.subtitles = items10;
        obj19.gradientColors = tmp60;
        tmpResult24 = utils;
      }
    }
    tmp20 = tmp55;
  };
