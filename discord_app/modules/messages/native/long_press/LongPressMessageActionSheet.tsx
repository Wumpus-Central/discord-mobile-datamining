// discord_app/modules/messages/native/long_press/LongPressMessageActionSheet.tsx
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import ActionSheet from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet.tsx";
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils.tsx";
import EmojiRowUtils from "../../../action_sheet/native/components/EmojiRowUtils.tsx";
import EmojiRowDefault from "../../../action_sheet/native/components/EmojiRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildAutomodMessageStore from "../../../guild_automod/GuildAutomodMessageStore.tsx";
import ReportToModStore from "../../../report_to_mod/ReportToModStore.tsx";
import SavedMessagesStore from "../../../saved_messages/SavedMessagesStore.tsx";
import AuthenticationStore from "../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = globalThis.__r;

require = fn;
let isMessageComponentsV2 = fn(4526).isMessageComponentsV2;
const FileUploadErrorTypes = fn(4889).FileUploadErrorTypes;
const Constants = fn(1085);
({
  AnalyticEvents: map1,
  AnalyticsPages: closure_14,
  ChannelTypes: closure_15,
  GuildFeatures: closure_16,
  LOCAL_BOT_ID: closure_17,
  MessageAttachmentFlags: closure_18,
  MessageFlags: closure_19,
  MessageStates: closure_20,
  MessageTypes: closure_21,
  MessageTypesSets: closure_22,
  Permissions: closure_23,
} = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  _require = analyticsLocation;
  const tmp3 = analyticsLocation;
  analyticsLocations = analyticsLocations(analyticsLocation[12])(
    analyticsLocations(analyticsLocation[13]).MESSAGE_LONG_PRESS_MENU,
  ).analyticsLocations;
  analyticsLocation = analyticsLocation.analyticsLocation;
  if (undefined === analyticsLocation) {
    analyticsLocation = {};
  }
  ({ user, message } = analyticsLocation);
  const channel = analyticsLocation.channel;
  ({ chatInputRef: GuildAutomodMessageStore, selectedMedia } = analyticsLocation);
  let actionSheetSource = analyticsLocation.actionSheetSource;
  let tmp5;
  if (undefined !== actionSheetSource) {
    tmp5 = actionSheetSource;
  }
  actionSheetSource = tmp5;
  const canAddNewReactions = analyticsLocation.canAddNewReactions;
  isMessageComponentsV2 = undefined !== canAddNewReactions && canAddNewReactions;
  let items = [analyticsLocation, channel];
  const effect = channel.useEffect(() => {
    const obj2 = { channel_id: channel.id, guild_id: channel.guild_id, location: null };
    const obj = AppAnalyticsUtilsDefault;
    const merged = Object.assign(analyticsLocation);
    obj2.location = { page: channel.isPrivate() ? constants.DM_CHANNEL : constants.GUILD_CHANNEL };
    obj.trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPENED, obj2);
    const obj3 = { page: channel.isPrivate() ? constants.DM_CHANNEL : constants.GUILD_CHANNEL };
  }, items);
  const items1 = [analyticsLocation];
  AuthenticationStore = channel.useCallback(() => {
    const result = showLongPressMessageActionSheet.showLongPressMessageActionSheet(closure_0);
  }, items1);
  const tmp8 = _require;
  const tmp4 = analyticsLocations(analyticsLocation[12]);
  const canReplyToMessage = require("canReplyToMessage").useCanReplyToMessage(channel, message);
  let obj2 = require("canReplyToMessage");
  const canForwardMessage = require("canForwardMessage").useCanForwardMessage(message);
  guild = isActiveChannelOrUnarchivableThread.getGuild(channel.guild_id);
  let obj3 = require("canForwardMessage");
  let isForLaterExperimentOn = require("ForLaterExperiment").useIsForLaterExperimentOn("LongPressMessageActionSheet");
  const obj4 = require("ForLaterExperiment");
  const items2 = [actionSheetSource];
  let obj5 = require("initialize");
  [tmp14, tmp15] = message(
    require("initialize").useStateFromStoresArray(items2, () => {
      const items = [
        SavedMessagesStore.isMessageReminder(channel.id, message.id),
        SavedMessagesStore.isMessageBookmarked(channel.id, message.id),
      ];
      return items;
    }),
    2,
  );
  const tmp13 = message(
    require("initialize").useStateFromStoresArray(items2, () => {
      const items = [
        SavedMessagesStore.isMessageReminder(channel.id, message.id),
        SavedMessagesStore.isMessageBookmarked(channel.id, message.id),
      ];
      return items;
    }),
    2,
  );
  const hasForLaterAccess = require("ForLaterExperiment").useHasForLaterAccess("LongPressMessageActionSheet");
  const obj6 = require("ForLaterExperiment");
  const isNonModInLockedThread = require("ThreadHooks").useIsNonModInLockedThread(channel);
  let id1;
  const obj7 = require("ThreadHooks");
  if (channel != null) {
    id1 = channel.id;
  }
  const tmpResult = analyticsLocations(tmp3[21]);
  const tmp21 = null != GuildAutomodMessageStore.getMessage(message.id);
  const tmp22 = analyticsLocations(tmp3[22])(message);
  const tmpResultResult = analyticsLocations(tmp3[21])(id1);
  isActiveChannelOrUnarchivableThread = tmp8(tmp3[20]).useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    const isNonUserBotResult = user.isNonUserBot();
  }
  const id2 = AuthenticationStore.getId();
  const DeveloperMode = tmp8(tmp3[23]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = set.can(constants8.MANAGE_MESSAGES, channel);
  const tmp8Result = tmp8(tmp3[20]);
  const canResult1 = set.can(constants8.SEND_MESSAGES, channel);
  const canToggleGuildOfficialMessages = tmp8(tmp3[24]).useCanToggleGuildOfficialMessages(
    message,
    channel,
    "LongPressMessageActionSheet",
  );
  const hasFlagResult = message.hasFlag(constants4.CROSSPOSTED);
  let tmp34 = !hasFlagResult;
  const tmp8Result18 = tmp8(tmp3[24]);
  if (!hasFlagResult) {
    tmp34 = channel.type === constants2.GUILD_ANNOUNCEMENT;
  }
  if (tmp34) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants3.NEWS);
    }
    tmp34 = hasItem;
  }
  if (tmp34) {
    tmp34 = canResult1;
  }
  if (tmp34) {
    tmp34 = message.author.id === id2 || canResult;
    const tmp38 = message.author.id === id2 || canResult;
  }
  if (tmp34) {
    tmp34 = message.type === constants6.DEFAULT;
  }
  if (tmp34) {
    tmp34 = !message.isPoll();
  }
  const tmp33 = analyticsLocations(tmp3[25])(message, channel);
  const canStartPublicThread = tmp8(tmp3[20]).computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    let allTextDisplayContent = tmp8(tmp3[26]).getAllTextDisplayContent(contentMessage.components);
    const tmp8Result20 = tmp8(tmp3[26]);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let canDeleteOwnMessageResult = canResult;
  if (!canResult) {
    canDeleteOwnMessageResult = message.canDeleteOwnMessage(id2);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = length > 0;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = message.author.id !== closure_17;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = !tmp8(tmp3[27]).hasFlag(message.flags, constants4.EPHEMERAL);
    const tmp8Result21 = tmp8(tmp3[27]);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = tmp(tmp3[28])(message) >= 1;
  }
  let tmp49 = !tmp21;
  if (!tmp21) {
    tmp49 = message.interactionError !== set1.EXPLICIT_CONTENT;
  }
  if (tmp49) {
    let result = null == message.interactionData;
    if (!result) {
      result = tmp8(tmp3[29]).canRetryInteractionData(message.interactionData);
      const tmp8Result22 = tmp8(tmp3[29]);
    }
    tmp49 = result;
  }
  const attachments1 = message.attachments;
  let tmp53 = message.author.id === id2;
  if (tmp53) {
    let tmp54 =
      attachments1.filter((flags) => {
        let tmp = null == flags.flags;
        if (!tmp) {
          tmp = !analyticsLocation(analyticsLocation[27]).hasFlag(flags.flags, constants.IS_THUMBNAIL);
          const obj = analyticsLocation(analyticsLocation[27]);
        }
        return tmp;
      }).length > 1;
    if (!tmp54) {
      tmp54 = "" !== message.content;
    }
    tmp53 = tmp54;
  }
  const tmp8Result19 = tmp8(tmp3[20]);
  const items3 = [selectedMedia];
  const stateFromStores = tmp8(tmp3[19]).useStateFromStores(items3, () =>
    ReportToModStore.hasReportedMessage(message.channel_id, message.id),
  );
  tmp8(tmp3[30]);
  if (guild != null) {
    const id = guild.id;
  }
  function getProps(arrow) {
    const label = arrow.label;
    ({ onActionExecuted: analyticsLocations, disabled } = arrow);
    ({ IconComponent, variant } = arrow);
    return {
      arrow: arrow.arrow,
      icon: jsx(analyticsLocation(analyticsLocation[31]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        const result = LongPressMessageActionSheetUtils.longPressMessageOptionHandler({
          actionSheetSource,
          analyticsLocations,
          channel,
          chatInputRef,
          label,
          message,
          onBack,
          onActionExecuted,
          selectedMedia,
          disabled,
        });
      },
      variant,
      disabled,
    };
  }
  function render(items5) {
    const obj = { value: analyticsLocations, children: null };
    const obj2 = { showGradient: true, startExpanded: MetaQuestUtils.isMetaQuest(), header: null, children: null };
    let shouldShowEmojiRowResult = EmojiRowUtils.shouldShowEmojiRow(
      closure_8,
      message,
      isActiveChannelOrUnarchivableThread,
    );
    if (shouldShowEmojiRowResult) {
      const obj5 = { message, channel };
      shouldShowEmojiRowResult = jsx(EmojiRowDefault, { message, channel });
    }
    obj2.header = shouldShowEmojiRowResult;
    let mapped;
    if (items5 != null) {
      mapped = items5.map((arr, index) =>
        closure_1_24(
          closure_1_0(closure_1_2[31]).ActionSheetRow.Group,
          {
            hasIcons: true,
            children: arr.map((item, index) => {
              ({ icon, arrow, label, onPress, variant, disabled } = item);
              return closure_1_24(
                closure_1_0(closure_1_2[31]).ActionSheetRow,
                { icon, arrow, label, onPress, variant, disabled },
                index,
              );
            }),
          },
          index,
        ),
      );
    }
    obj2.children = mapped;
    obj.children = jsx(ActionSheet.ActionSheet, {
      showGradient: true,
      startExpanded: MetaQuestUtils.isMetaQuest(),
      header: null,
      children: null,
    });
    return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  }
  if (message.state === constants5.SEND_FAILED) {
    const items4 = [];
    if (tmp49) {
      let obj = { label: null, IconComponent: null };
      const intl17 = tmp8(tmp3[37]).intl;
      obj.label = intl17.string(tmp8(tmp3[37]).t["5911Lb"]);
      obj.IconComponent = tmp8(tmp3[38]).RetryIcon;
      items4.push(getProps(obj));
    }
    let tmp254 = null != allTextDisplayContent;
    if (tmp254) {
      tmp254 = allTextDisplayContent.length > 0;
    }
    if (tmp254) {
      const obj8 = { label: null, IconComponent: null };
      const intl18 = tmp8(tmp3[37]).intl;
      obj8.label = intl18.string(tmp8(tmp3[37]).t.JrGD7E);
      obj8.IconComponent = tmp8(tmp3[39]).CopyIcon;
      items4.push(getProps(obj8));
    }
    const obj10 = { label: null, IconComponent: null, variant: "danger" };
    const intl19 = tmp7(tmp2[37]).intl;
    obj10.label = intl19.string(tmp7(tmp2[37]).t.xwMqD7);
    obj10.IconComponent = tmp7(tmp2[40]).TrashIcon;
    items4.push(getProps(obj10));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp58.SENDING) {
    let tmp244 = null != allTextDisplayContent;
    if (tmp244) {
      tmp244 = allTextDisplayContent.length > 0;
    }
    const items6 = [];
    if (tmp244) {
      const obj11 = { label: null, IconComponent: null };
      const intl15 = tmp8(tmp3[37]).intl;
      obj11.label = intl15.string(tmp8(tmp3[37]).t.JrGD7E);
      obj11.IconComponent = tmp8(tmp3[39]).CopyIcon;
      items6.push(getProps(obj11));
    }
    const obj12 = { label: null, IconComponent: null, variant: "danger" };
    const intl16 = tmp8(tmp3[37]).intl;
    obj12.label = intl16.string(tmp8(tmp3[37]).t.xwMqD7);
    obj12.IconComponent = tmp8(tmp3[40]).TrashIcon;
    items6.push(getProps(obj12));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === constants6.THREAD_STARTER_MESSAGE) {
    const obj13 = { label: null, IconComponent: null };
    const intl14 = tmp8(tmp3[37]).intl;
    obj13.label = intl14.string(tmp8(tmp3[37]).t.k5WiPf);
    obj13.IconComponent = tmp8(tmp3[41]).LinkIcon;
    const items8 = [getProps(obj13)];
    const items9 = [items8];
    return render(items9);
  } else {
    const obj14 = { label: null, IconComponent: null };
    const intl20 = tmp8(tmp3[37]).intl;
    obj14.label = intl20.string(tmp8(tmp3[37]).t.fsBWmS);
    obj14.IconComponent = tmp8(tmp3[42]).PencilIcon;
    const props = getProps(obj14);
    const obj15 = { label: null, IconComponent: null };
    const intl21 = tmp8(tmp3[37]).intl;
    obj15.label = intl21.string(tmp8(tmp3[37]).t.Y8ujqr);
    obj15.IconComponent = tmp8(tmp3[42]).PencilIcon;
    const props1 = getProps(obj15);
    const obj17 = { label: null, IconComponent: null };
    const intl22 = tmp8(tmp3[37]).intl;
    obj17.label = intl22.string(tmp8(tmp3[37]).t["5IEsGx"]);
    obj17.IconComponent = tmp8(tmp3[43]).ArrowAngleLeftUpIcon;
    const props2 = getProps(obj17);
    const obj18 = { label: null, IconComponent: null };
    const intl23 = tmp8(tmp3[37]).intl;
    obj18.label = intl23.string(tmp8(tmp3[37]).t.I3ltXO);
    obj18.IconComponent = tmp(tmp3[44]);
    const props3 = getProps(obj18);
    const obj19 = { label: null, IconComponent: null };
    const intl24 = tmp8(tmp3[37]).intl;
    obj19.label = intl24.string(tmp8(tmp3[37]).t.rBIGBL);
    obj19.IconComponent = tmp8(tmp3[45]).ThreadIcon;
    const props4 = getProps(obj19);
    const obj20 = { label: null, IconComponent: null };
    const intl25 = tmp8(tmp3[37]).intl;
    obj20.label = intl25.string(tmp8(tmp3[37]).t["39d0Wj"]);
    obj20.IconComponent = tmp8(tmp3[45]).ThreadIcon;
    const props5 = getProps(obj20);
    const obj21 = { label: null, IconComponent: null };
    const intl26 = tmp8(tmp3[37]).intl;
    obj21.label = intl26.string(tmp8(tmp3[37]).t["+TSRGD"]);
    obj21.IconComponent = tmp8(tmp3[46]).ChatArrowRightIcon;
    const props6 = getProps(obj21);
    const obj22 = { label: null, IconComponent: null };
    const intl27 = tmp8(tmp3[37]).intl;
    obj22.label = intl27.string(tmp8(tmp3[37]).t.JrGD7E);
    obj22.IconComponent = tmp8(tmp3[39]).CopyIcon;
    const props7 = getProps(obj22);
    const obj23 = { label: null, IconComponent: null };
    const intl28 = tmp8(tmp3[37]).intl;
    obj23.label = intl28.string(tmp8(tmp3[37]).t.RpE9k7);
    obj23.IconComponent = tmp8(tmp3[47]).ChatMarkUnreadIcon;
    const props8 = getProps(obj23);
    const obj24 = { label: null, IconComponent: null };
    const intl29 = tmp8(tmp3[37]).intl;
    obj24.label = intl29.string(tmp8(tmp3[37]).t.grdwwt);
    obj24.IconComponent = tmp8(tmp3[48]).ClockXIcon;
    const props9 = getProps(obj24);
    const obj25 = { label: null, IconComponent: null };
    const intl30 = tmp8(tmp3[37]).intl;
    obj25.label = intl30.string(tmp8(tmp3[37]).t.gHp0C4);
    obj25.IconComponent = tmp8(tmp3[49]).ReactionIcon;
    const props10 = getProps(obj25);
    const obj26 = { label: null, IconComponent: null };
    const intl31 = tmp8(tmp3[37]).intl;
    obj26.label = intl31.string(tmp8(tmp3[37]).t.MFGE51);
    obj26.IconComponent = tmp8(tmp3[50]).AnnouncementsIcon;
    const props11 = getProps(obj26);
    const obj27 = { label: null, IconComponent: null };
    const intl32 = tmp8(tmp3[37]).intl;
    obj27.label = intl32.string(tmp8(tmp3[37]).t.CvQ18w);
    obj27.IconComponent = tmp8(tmp3[51]).PinIcon;
    const props12 = getProps(obj27);
    const obj28 = { label: null, IconComponent: null };
    const intl33 = tmp8(tmp3[37]).intl;
    obj28.label = intl33.string(tmp8(tmp3[37]).t["Bse+F/"]);
    obj28.IconComponent = tmp8(tmp3[51]).PinIcon;
    const props13 = getProps(obj28);
    const obj29 = { label: null, IconComponent: null };
    const intl34 = tmp8(tmp3[37]).intl;
    obj29.label = intl34.string(tmp8(tmp3[37]).t["lE/PG3"]);
    obj29.IconComponent = tmp8(tmp3[52]).StampIcon;
    const props14 = getProps(obj29);
    const obj30 = { label: null, IconComponent: null };
    const intl35 = tmp8(tmp3[37]).intl;
    obj30.label = intl35.string(tmp8(tmp3[37]).t["2km5Gf"]);
    obj30.IconComponent = tmp8(tmp3[53]).StampXIcon;
    const props15 = getProps(obj30);
    const obj31 = { label: null, IconComponent: null };
    const intl36 = tmp8(tmp3[37]).intl;
    obj31.label = intl36.string(tmp8(tmp3[37]).t.tpxJto);
    obj31.IconComponent = tmp8(tmp3[54]).NitroWheelIcon;
    const props16 = getProps(obj31);
    const obj32 = { label: null, IconComponent: null };
    const intl37 = tmp8(tmp3[37]).intl;
    obj32.label = intl37.string(tmp8(tmp3[37]).t.tpxJto);
    obj32.IconComponent = tmp8(tmp3[55]).BookmarkOutlineIcon;
    const props17 = getProps(obj32);
    const obj33 = { label: null, IconComponent: null };
    const intl38 = tmp8(tmp3[37]).intl;
    obj33.label = intl38.string(tmp8(tmp3[37]).t.SvXS1Z);
    obj33.IconComponent = tmp8(tmp3[56]).BookmarkIcon;
    const props18 = getProps(obj33);
    const obj34 = { label: null, IconComponent: null, arrow: true };
    const intl39 = tmp8(tmp3[37]).intl;
    obj34.label = intl39.string(tmp8(tmp3[37]).t.mJ3P0N);
    obj34.IconComponent = tmp8(tmp3[57]).ClockIcon;
    const props19 = getProps(obj34);
    const obj35 = { label: null, IconComponent: null, arrow: true };
    const intl40 = tmp8(tmp3[37]).intl;
    obj35.label = intl40.string(tmp8(tmp3[37]).t.vrbqs1);
    obj35.IconComponent = tmp8(tmp3[57]).ClockIcon;
    const props20 = getProps(obj35);
    const obj36 = { label: null, IconComponent: null, arrow: true };
    const intl41 = tmp8(tmp3[37]).intl;
    obj36.label = intl41.string(tmp8(tmp3[37]).t.PHjkRE);
    obj36.IconComponent = tmp8(tmp3[58]).RobotIcon;
    const props21 = getProps(obj36);
    const obj37 = { label: null, IconComponent: null };
    const intl42 = tmp8(tmp3[37]).intl;
    obj37.label = intl42.string(tmp8(tmp3[37]).t["g33r/P"]);
    obj37.IconComponent = tmp8(tmp3[59]).ChatIcon;
    const props22 = getProps(obj37);
    const obj38 = { label: null, IconComponent: null };
    const intl43 = tmp8(tmp3[37]).intl;
    obj38.label = intl43.string(tmp8(tmp3[37]).t.P8tvKG);
    obj38.IconComponent = tmp8(tmp3[60]).AtIcon;
    const props23 = getProps(obj38);
    const obj40 = { label: null, IconComponent: null };
    const intl44 = tmp8(tmp3[37]).intl;
    obj40.label = intl44.string(tmp8(tmp3[37]).t["S/xNKV"]);
    obj40.IconComponent = tmp8(tmp3[61]).DownloadIcon;
    const props24 = getProps(obj40);
    const obj41 = { label: null, IconComponent: null };
    const intl45 = tmp8(tmp3[37]).intl;
    obj41.label = intl45.string(tmp8(tmp3[37]).t.JVuuz3);
    obj41.IconComponent = tmp8(tmp3[61]).DownloadIcon;
    const props25 = getProps(obj41);
    const obj42 = { label: null, IconComponent: null };
    const intl46 = tmp8(tmp3[37]).intl;
    obj42.label = intl46.string(tmp8(tmp3[37]).t.vbAEaA);
    obj42.IconComponent = tmp8(tmp3[61]).DownloadIcon;
    const props26 = getProps(obj42);
    try {
      let mediaUrl;
      if (selectedMedia != null) {
        mediaUrl = selectedMedia.mediaUrl;
      }
      let uRL = null;
      if (null != mediaUrl) {
        const _URL = URL;
        uRL = new URL(selectedMedia.mediaUrl);
      }
      let mediaType;
      if (selectedMedia != null) {
        mediaType = selectedMedia.mediaType;
      }
      let isMatch = "image" === mediaType;
      if (isMatch) {
        isMatch = null != tmp64;
      }
      if (isMatch) {
        isMatch = "cdn.discordapp.com" === tmp64.hostname;
      }
      if (isMatch) {
        isMatch = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i.test(uRL.pathname);
        const obj16 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
      }
      const intl = tmp8(tmp3[37]).intl;
      const t = tmp8(tmp3[37]).t;
      if (tmp69) {
        let v8xHmxo = t["8xHmxo"];
      } else {
        v8xHmxo = t["92CPQ+"];
      }
      const obj43 = { label: intl.string(v8xHmxo), IconComponent: tmp8(tmp3[41]).LinkIcon };
      const props27 = getProps(obj43);
      const obj44 = { label: null, IconComponent: null };
      const intl2 = tmp8(tmp3[37]).intl;
      obj44.label = intl2.string(tmp8(tmp3[37]).t.Xrt5Po);
      obj44.IconComponent = tmp8(tmp3[41]).LinkIcon;
      const props28 = getProps(obj44);
      const obj45 = { label: null, IconComponent: null, arrow: true };
      const intl3 = tmp8(tmp3[37]).intl;
      obj45.label = intl3.string(tmp8(tmp3[37]).t.Rjezbz);
      obj45.IconComponent = tmp8(tmp3[57]).ClockIcon;
      const props29 = getProps(obj45);
      const obj46 = { label: null, IconComponent: null };
      const intl4 = tmp8(tmp3[37]).intl;
      obj46.label = intl4.string(tmp8(tmp3[37]).t.zBoHlf);
      obj46.IconComponent = tmp8(tmp3[62]).IdIcon;
      const props30 = getProps(obj46);
      if (length > 1) {
        const intl6 = tmp8(tmp3[37]).intl;
        let stringResult = intl6.string(tmp8(tmp3[37]).t.wUIMqa);
      } else {
        const intl5 = tmp8(tmp3[37]).intl;
        stringResult = intl5.string(tmp8(tmp3[37]).t["4sxKOb"]);
      }
      const obj47 = { label: stringResult, IconComponent: tmp8(tmp3[63]).XSmallBoldIcon, variant: "danger" };
      const props31 = getProps(obj47);
      const obj48 = { label: null, IconComponent: null, variant: "danger" };
      const intl7 = tmp8(tmp3[37]).intl;
      obj48.label = intl7.string(tmp8(tmp3[37]).t.ZbtGBm);
      obj48.IconComponent = tmp8(tmp3[40]).TrashIcon;
      const props32 = getProps(obj48);
      const obj49 = { label: null, IconComponent: null, variant: "danger" };
      const intl8 = tmp8(tmp3[37]).intl;
      obj49.label = intl8.string(tmp8(tmp3[37]).t.kFwAsa);
      obj49.IconComponent = tmp8(tmp3[40]).TrashIcon;
      const props33 = getProps(obj49);
      const obj50 = { label: null, IconComponent: null, variant: "danger" };
      const intl9 = tmp8(tmp3[37]).intl;
      obj50.label = intl9.string(tmp8(tmp3[37]).t["+78Pfm"]);
      obj50.IconComponent = tmp8(tmp3[64]).FlagIcon;
      const props34 = getProps(obj50);
      const obj51 = { label: null, variant: "danger", IconComponent: null };
      const intl10 = tmp8(tmp3[37]).intl;
      obj51.label = intl10.string(tmp8(tmp3[37]).t.n5EBAJ);
      obj51.IconComponent = tmp8(tmp3[65]).ClydeIcon;
      const props35 = getProps(obj51);
      const obj52 = { label: null, IconComponent: null, disabled: null };
      const intl11 = tmp8(tmp3[37]).intl;
      obj52.label = intl11.string(tmp(tmp3[66])["1D+vqy"]);
      obj52.IconComponent = tmp8(tmp3[64]).FlagIcon;
      obj52.disabled = stateFromStores;
      const props36 = getProps(obj52);
      const obj53 = { label: null, IconComponent: null };
      const intl12 = tmp8(tmp3[37]).intl;
      obj53.label = intl12.string(tmp8(tmp3[37]).t.ZH7P2h);
      obj53.IconComponent = tmp8(tmp3[67]).ImageWarningIcon;
      const props37 = getProps(obj53);
      const obj54 = { label: null, IconComponent: null, variant: "danger" };
      const intl13 = tmp8(tmp3[37]).intl;
      obj54.label = intl13.string(tmp8(tmp3[37]).t.xwMqD7);
      obj54.IconComponent = tmp8(tmp3[40]).TrashIcon;
      const props38 = getProps(obj54);
      let hasFlagResult1 = tmp97;
      if ("Preview" !== tmp5) {
        hasFlagResult1 = tmp8(tmp3[27]).hasFlag(message.flags, constants4.EPHEMERAL);
        const tmp8Result25 = tmp8(tmp3[27]);
      }
      const items10 = [];
      if (hasFlagResult1) {
        items10.push(
          props4,
          props8,
          props17,
          props18,
          props16,
          props19,
          props20,
          props31,
          props38,
          props,
          props1,
          props23,
          props22,
          props21,
          props32,
        );
      }
      if (isActiveChannelOrUnarchivableThread) {
        isActiveChannelOrUnarchivableThread = !tmp8(tmp3[27]).hasFlag(message.flags, constants4.EPHEMERAL);
        const tmp8Result26 = tmp8(tmp3[27]);
      }
      if (!isActiveChannelOrUnarchivableThread) {
        items10.push(
          props,
          props1,
          props2,
          props31,
          props33,
          props38,
          props11,
          props12,
          props13,
          props14,
          props15,
          props8,
          props23,
          props21,
          props32,
        );
      }
      if (tmp8Result27.hasFlag(message.flags, constants4.EPHEMERAL)) {
        items10.push(props3, props2, props28, props34, props35, props36);
      }
      const _Set = Set;
      set = new Set(items10);
      const items11 = [];
      if ("Preview" === tmp5) {
        items11.unshift(props6);
      }
      if (canStartPublicThread) {
        items11.unshift(props4);
      } else if (message.hasFlag(constants4.HAS_THREAD)) {
        items11.unshift(props5);
      }
      items11.unshift(props28);
      if (setting) {
        items11.unshift(props30);
      }
      if (tmp57) {
        if (tmp8Result28.canReportMessageToMods(message)) {
          items11.unshift(props35);
          items11.unshift(props36);
        }
        items11.unshift(props8);
        if (isForLaterExperimentOn) {
          let isPrivateResult = tmp15;
          if (!tmp15) {
            isPrivateResult = tmp14;
          }
          if (!isPrivateResult) {
            isPrivateResult = channel.isPrivate();
          }
          if (!isPrivateResult) {
            isPrivateResult = obj9.can(constants8.READ_MESSAGE_HISTORY, channel);
          }
          isForLaterExperimentOn = isPrivateResult;
        }
        if (isForLaterExperimentOn) {
          if (!hasForLaterAccess) {
            if (!tmp15) {
              if (!tmp14) {
                items11.unshift(props16);
              }
            }
          }
          let tmp171 = props17;
          if (tmp15) {
            tmp171 = props18;
          }
          items11.unshift(tmp171);
          let tmp173 = props19;
          if (tmp14) {
            tmp173 = props20;
          }
          items11.unshift(tmp173);
        }
        if (canDeleteOwnMessageResult) {
          items11.unshift(props31);
        }
        let hasItem1 = !canResult;
        if (!canResult) {
          hasItem1 = !message.canDeleteOwnMessage(id2);
        }
        if (!hasItem1) {
          const UNDELETABLE = constants7.UNDELETABLE;
          hasItem1 = UNDELETABLE.has(message.type);
        }
        if (!hasItem1) {
          items11.unshift(props38);
        }
        let tmp180 = tmp(tmp3[70])(message, id2);
        if (tmp180) {
          tmp180 = !isNonModInLockedThread;
        }
        if (tmp180) {
          items11.unshift(props);
        }
        if (tmp34) {
          items11.unshift(props11);
        }
        let isPrivateResult1 = channel.isPrivate();
        if (isPrivateResult1) {
          isPrivateResult1 = !tmp184;
        }
        if (!isPrivateResult1) {
          isPrivateResult1 = true === isNonUserBotResult;
        }
        if (!isPrivateResult1) {
          let canResult2 = obj9.can(constants8.SEND_MESSAGES, channel);
          if (!canResult2) {
            canResult2 = tmp184;
          }
          if (canResult2) {
            items11.unshift(props23);
          }
          let id3;
          if (user != null) {
            id3 = user.id;
          }
          if (id2 !== id3) {
            items11.unshift(props22);
          }
        }
        if (tmp33) {
          let tmp190 = props12;
          if (message.pinned) {
            tmp190 = props13;
          }
          items11.unshift(tmp190);
        }
        if (canToggleGuildOfficialMessages) {
          let tmp194 = props14;
          if (tmp8Result29.hasFlag(message.flags, constants4.IS_GUILD_OFFICIAL)) {
            tmp194 = props15;
          }
          items11.unshift(tmp194);
          tmp8Result29 = tmp8(tmp3[27]);
        }
        let tmp196 = null != allTextDisplayContent;
        if (tmp196) {
          tmp196 = allTextDisplayContent.length > 0;
        }
        if (tmp196) {
          items11.unshift(props7);
        }
        if (canReplyToMessage) {
          items11.unshift(props2);
        }
        if (canForwardMessage) {
          items11.unshift(props3);
        }
        let sourceType;
        if (selectedMedia != null) {
          sourceType = selectedMedia.sourceType;
        }
        let tmp201 = "attachment" !== sourceType;
        if (!tmp201) {
          let tmp202 = "image" !== selectedMedia.mediaType;
          if (tmp202) {
            tmp202 = "video" !== selectedMedia.mediaType;
          }
          tmp201 = tmp202;
        }
        if (!tmp201) {
          tmp201 = !tmp(tmp3[70])(message, id2);
        }
        if (!tmp201) {
          tmp201 = isNonModInLockedThread;
        }
        if (!tmp201) {
          const attachments = message.attachments;
          tmp201 = !attachments.some((id) => id.id === selectedMedia.source.id);
        }
        if (!tmp201) {
          items11.unshift(props1);
        }
        let tmp205 = null == selectedMedia;
        if (!tmp205) {
          tmp205 = tmpResultResult;
        }
        if (!tmp205) {
          items11.unshift(props27);
          if ("image" === selectedMedia.mediaType) {
            items11.unshift(props24);
          } else {
            if ("video" === selectedMedia.mediaType) {
              if (!tmp8Result30.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
                items11.unshift(props25);
              }
              tmp8Result30 = tmp8(tmp3[71]);
            }
            let tmp210 = "audio" !== selectedMedia.mediaType;
            if (tmp210) {
              tmp210 = "file" !== selectedMedia.mediaType;
            }
            if (!tmp210) {
              items11.unshift(props26);
            }
          }
          if (tmp8Result31.messageHasObscurableMedia(message)) {
            items11.unshift(props37);
          }
          let tmp216 = "attachment" === selectedMedia.sourceType;
          if (tmp216) {
            tmp216 = tmp53;
          }
          if (tmp216) {
            items11.unshift(props33);
          }
          tmp8Result31 = tmp8(tmp3[72]);
        }
        let tmp218 = message.reactions.length > 0;
        if (tmp218) {
          const isPollResult = message.isPoll();
          let hasNonVoteReactionsResult = !isPollResult;
          if (isPollResult) {
            hasNonVoteReactionsResult = tmp8(tmp3[73]).hasNonVoteReactions(message);
            const tmp8Result32 = tmp8(tmp3[73]);
          }
          tmp218 = hasNonVoteReactionsResult;
        }
        if (tmp218) {
          items11.unshift(props10);
          if (canResult) {
            items11.unshift(props32);
          }
        }
        for (const item10702 of tmp22) {
          if (item10702 === require("usePollMessageContextItemTypes").PollMessageContextItemTypes.END_EARLY) {
            let arr82 = items11.unshift(props9);
          }
          continue;
        }
        items11.unshift(props21);
        tmp8Result28 = tmp8(tmp3[68]);
        if (obj39.canViewInteractionInfo(message)) {
          items11.unshift(props29);
        }
        const _Set2 = Set;
        set1 = new Set(items11.filter((item) => !set.has(item)));
        const items12 = [props, props1, props2, props3, props4];
        const items13 = [items12, ,];
        const items14 = [
          props6,
          props5,
          props7,
          props8,
          props9,
          props10,
          props11,
          props12,
          props13,
          props14,
          props15,
          props16,
          props17,
          props18,
          props19,
          props20,
          props21,
          props22,
          props23,
          props24,
          props25,
          props26,
          props27,
          props28,
          props29,
          props30,
        ];
        items13[1] = items14;
        const items15 = [props31, props32, props33, props34, props35, props36, props37, props38];
        items13[2] = items15;
        let mapped = items13.map((arr) => arr.filter((item) => set.has(item)));
        return render(mapped.filter((item) => item.length > 0));
      }
      let canReportUserResult = null != user;
      if (canReportUserResult) {
        canReportUserResult = tmp8(tmp3[69]).canReportUser(user);
        const tmp8Result33 = tmp8(tmp3[69]);
      }
      if (canReportUserResult) {
        canReportUserResult = tmp8(tmp3[69]).canReportMessage(message);
        const tmp8Result34 = tmp8(tmp3[69]);
      }
      if (canReportUserResult) {
        items11.unshift(props34);
      }
      tmp69 = isMatch;
      tmp8Result27 = tmp8(tmp3[27]);
    } catch (err) {}
  }
  const tmp8Result23 = tmp8(tmp3[19]);
}
