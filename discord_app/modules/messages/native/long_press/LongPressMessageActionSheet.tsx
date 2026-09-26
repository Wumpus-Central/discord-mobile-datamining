// discord_app/modules/messages/native/long_press/LongPressMessageActionSheet.tsx
import FlagUtils from "../../../../../discord_common/js/shared/utils/FlagUtils.tsx";
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
let isMessageComponentsV2 = fn(4480).isMessageComponentsV2;
const FileUploadErrorTypes = fn(4829).FileUploadErrorTypes;
const Constants = fn(1074);
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
  const guild = GuildStore.getGuild(channel.guild_id);
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
  GuildStore = tmp8(tmp3[20]).useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    const isNonUserBotResult = user.isNonUserBot();
  }
  const id2 = AuthenticationStore.getId();
  const DeveloperMode = tmp8(tmp3[23]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = props.can(props17.MANAGE_MESSAGES, channel);
  const tmp8Result = tmp8(tmp3[20]);
  const canResult1 = props.can(props17.SEND_MESSAGES, channel);
  const canToggleGuildOfficialMessages = tmp8(tmp3[24]).useCanToggleGuildOfficialMessages(
    message,
    channel,
    "LongPressMessageActionSheet",
  );
  let hasFlagResult = message.hasFlag(props13.CROSSPOSTED);
  let tmp33 = !hasFlagResult;
  const tmp8Result15 = tmp8(tmp3[24]);
  if (!hasFlagResult) {
    tmp33 = channel.type === props4.GUILD_ANNOUNCEMENT;
  }
  if (tmp33) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(props8.NEWS);
    }
    tmp33 = hasItem;
  }
  if (tmp33) {
    tmp33 = canResult1;
  }
  if (tmp33) {
    tmp33 = message.author.id === id2 || canResult;
    const tmp37 = message.author.id === id2 || canResult;
  }
  if (tmp33) {
    tmp33 = message.type === props15.DEFAULT;
  }
  if (tmp33) {
    tmp33 = !message.isPoll();
  }
  const tmp32 = analyticsLocations(tmp3[25])(message, channel);
  const canStartPublicThread = tmp8(tmp3[20]).computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    let allTextDisplayContent = tmp8(tmp3[26]).getAllTextDisplayContent(contentMessage.components);
    const tmp8Result17 = tmp8(tmp3[26]);
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
    canDeleteOwnMessageResult = message.author.id !== props11;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = !tmp8(tmp3[27]).hasFlag(message.flags, tmp30.EPHEMERAL);
    const tmp8Result18 = tmp8(tmp3[27]);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = tmp(tmp3[28])(message) >= 1;
  }
  let tmp48 = !tmp21;
  if (!tmp21) {
    tmp48 = message.interactionError !== props1.EXPLICIT_CONTENT;
  }
  if (tmp48) {
    let result = null == message.interactionData;
    if (!result) {
      result = tmp8(tmp3[29]).canRetryInteractionData(message.interactionData);
      const tmp8Result19 = tmp8(tmp3[29]);
    }
    tmp48 = result;
  }
  const attachments1 = message.attachments;
  let tmp52 = message.author.id === id2;
  if (tmp52) {
    let tmp53 =
      attachments1.filter((flags) => {
        let tmp = null == flags.flags;
        if (!tmp) {
          tmp = !analyticsLocation(analyticsLocation[27]).hasFlag(flags.flags, props12.IS_THUMBNAIL);
          const obj = analyticsLocation(analyticsLocation[27]);
        }
        return tmp;
      }).length > 1;
    if (!tmp53) {
      tmp53 = "" !== message.content;
    }
    tmp52 = tmp53;
  }
  const tmp8Result16 = tmp8(tmp3[20]);
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
      icon: props18(analyticsLocation(analyticsLocation[31]).ActionSheetRow.Icon, { IconComponent }),
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
    let shouldShowEmojiRowResult = EmojiRowUtils.shouldShowEmojiRow(closure_8, message, closure_10);
    if (shouldShowEmojiRowResult) {
      const obj5 = { message, channel };
      shouldShowEmojiRowResult = jsx(EmojiRowDefault, { message, channel });
    }
    obj2.header = shouldShowEmojiRowResult;
    let mapped;
    if (items5 != null) {
      mapped = items5.map((arr, index) =>
        props18(
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
  if (message.state === props14.SEND_FAILED) {
    const items4 = [];
    if (tmp48) {
      let obj = { label: null, IconComponent: null };
      const intl17 = tmp8(tmp3[37]).intl;
      obj.label = intl17.string(tmp8(tmp3[37]).t["5911Lb"]);
      obj.IconComponent = tmp8(tmp3[38]).RetryIcon;
      items4.push(getProps(obj));
    }
    let tmp198 = null != allTextDisplayContent;
    if (tmp198) {
      tmp198 = allTextDisplayContent.length > 0;
    }
    if (tmp198) {
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
  } else if (message.state === tmp57.SENDING) {
    let tmp188 = null != allTextDisplayContent;
    if (tmp188) {
      tmp188 = allTextDisplayContent.length > 0;
    }
    const items6 = [];
    if (tmp188) {
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
  } else if (message.type === props15.THREAD_STARTER_MESSAGE) {
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
    props = getProps(obj14);
    const obj15 = { label: null, IconComponent: null };
    const intl21 = tmp8(tmp3[37]).intl;
    obj15.label = intl21.string(tmp8(tmp3[37]).t.Y8ujqr);
    obj15.IconComponent = tmp8(tmp3[42]).PencilIcon;
    props1 = getProps(obj15);
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
    props4 = getProps(obj19);
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
    props8 = getProps(obj23);
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
    props11 = getProps(obj26);
    const obj27 = { label: null, IconComponent: null };
    const intl32 = tmp8(tmp3[37]).intl;
    obj27.label = intl32.string(tmp8(tmp3[37]).t.CvQ18w);
    obj27.IconComponent = tmp8(tmp3[51]).PinIcon;
    const props12 = getProps(obj27);
    const obj28 = { label: null, IconComponent: null };
    const intl33 = tmp8(tmp3[37]).intl;
    obj28.label = intl33.string(tmp8(tmp3[37]).t["Bse+F/"]);
    obj28.IconComponent = tmp8(tmp3[51]).PinIcon;
    props13 = getProps(obj28);
    const obj29 = { label: null, IconComponent: null };
    const intl34 = tmp8(tmp3[37]).intl;
    obj29.label = intl34.string(tmp8(tmp3[37]).t["lE/PG3"]);
    obj29.IconComponent = tmp8(tmp3[52]).StampIcon;
    props14 = getProps(obj29);
    const obj30 = { label: null, IconComponent: null };
    const intl35 = tmp8(tmp3[37]).intl;
    obj30.label = intl35.string(tmp8(tmp3[37]).t["2km5Gf"]);
    obj30.IconComponent = tmp8(tmp3[53]).StampXIcon;
    props15 = getProps(obj30);
    const obj31 = { label: null, IconComponent: null };
    const intl36 = tmp8(tmp3[37]).intl;
    obj31.label = intl36.string(tmp8(tmp3[37]).t.tpxJto);
    obj31.IconComponent = tmp8(tmp3[54]).NitroWheelIcon;
    const props16 = getProps(obj31);
    const obj32 = { label: null, IconComponent: null };
    const intl37 = tmp8(tmp3[37]).intl;
    obj32.label = intl37.string(tmp8(tmp3[37]).t.tpxJto);
    obj32.IconComponent = tmp8(tmp3[55]).BookmarkOutlineIcon;
    props17 = getProps(obj32);
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
    const obj37 = { label: null, IconComponent: null, arrow: true };
    const intl41 = tmp8(tmp3[37]).intl;
    obj37.label = intl41.string(tmp8(tmp3[37]).t.PHjkRE);
    obj37.IconComponent = tmp8(tmp3[58]).RobotIcon;
    const props21 = getProps(obj37);
    const obj38 = { label: null, IconComponent: null };
    const intl42 = tmp8(tmp3[37]).intl;
    obj38.label = intl42.string(tmp8(tmp3[37]).t["g33r/P"]);
    obj38.IconComponent = tmp8(tmp3[59]).ChatIcon;
    const props22 = getProps(obj38);
    const obj39 = { label: null, IconComponent: null };
    const intl43 = tmp8(tmp3[37]).intl;
    obj39.label = intl43.string(tmp8(tmp3[37]).t.P8tvKG);
    obj39.IconComponent = tmp8(tmp3[60]).AtIcon;
    const props23 = getProps(obj39);
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
        isMatch = null != tmp63;
      }
      if (isMatch) {
        isMatch = "cdn.discordapp.com" === tmp63.hostname;
      }
      if (isMatch) {
        isMatch = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i.test(uRL.pathname);
        const obj16 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
      }
      const intl = tmp8(tmp3[37]).intl;
      const t = tmp8(tmp3[37]).t;
      if (tmp68) {
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
      let set = (() => {
        let hasFlagResult = "Preview" === actionSheetSource;
        if (!hasFlagResult) {
          hasFlagResult = FlagUtils.hasFlag(message.flags, constants2.EPHEMERAL);
        }
        const items = [];
        if (hasFlagResult) {
          items.push(
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
        let tmp23 = closure_10;
        if (closure_10) {
          tmp23 = !FlagUtils.hasFlag(message.flags, constants2.EPHEMERAL);
        }
        if (!tmp23) {
          items.push(
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
        if (obj3.hasFlag(message.flags, constants2.EPHEMERAL)) {
          items.push(props3, props2, props28, props34, props35, props36);
        }
        obj3 = FlagUtils;
        return new Set(items);
      })();
      const items10 = [];
      if ("Preview" === tmp5) {
        items10.unshift(props6);
      }
      if (canStartPublicThread) {
        items10.unshift(props4);
      } else if (message.hasFlag(tmp30.HAS_THREAD)) {
        items10.unshift(props5);
      }
      items10.unshift(props28);
      if (setting) {
        items10.unshift(props30);
      }
      if (tmp56) {
        if (tmp8Result22.canReportMessageToMods(message)) {
          items10.unshift(props35);
          items10.unshift(props36);
        }
        items10.unshift(props8);
        if (isForLaterExperimentOn) {
          let isPrivateResult = tmp15;
          if (!tmp15) {
            isPrivateResult = tmp14;
          }
          if (!isPrivateResult) {
            isPrivateResult = channel.isPrivate();
          }
          if (!isPrivateResult) {
            isPrivateResult = obj9.can(tmp26.READ_MESSAGE_HISTORY, channel);
          }
          isForLaterExperimentOn = isPrivateResult;
        }
        if (isForLaterExperimentOn) {
          if (!hasForLaterAccess) {
            if (!tmp15) {
              if (!tmp14) {
                items10.unshift(props16);
              }
            }
          }
          let tmp114 = props17;
          if (tmp15) {
            tmp114 = props18;
          }
          items10.unshift(tmp114);
          let tmp116 = props19;
          if (tmp14) {
            tmp116 = props20;
          }
          items10.unshift(tmp116);
        }
        if (canDeleteOwnMessageResult) {
          items10.unshift(props31);
        }
        let hasItem1 = !canResult;
        if (!canResult) {
          hasItem1 = !message.canDeleteOwnMessage(id2);
        }
        if (!hasItem1) {
          const UNDELETABLE = props16.UNDELETABLE;
          hasItem1 = UNDELETABLE.has(message.type);
        }
        if (!hasItem1) {
          items10.unshift(props38);
        }
        let tmp123 = tmp(tmp3[70])(message, id2);
        if (tmp123) {
          tmp123 = !isNonModInLockedThread;
        }
        if (tmp123) {
          items10.unshift(props);
        }
        if (tmp33) {
          items10.unshift(props11);
        }
        let isPrivateResult1 = channel.isPrivate();
        if (isPrivateResult1) {
          isPrivateResult1 = !tmp127;
        }
        if (!isPrivateResult1) {
          isPrivateResult1 = true === isNonUserBotResult;
        }
        if (!isPrivateResult1) {
          let canResult2 = obj9.can(tmp26.SEND_MESSAGES, channel);
          if (!canResult2) {
            canResult2 = tmp127;
          }
          if (canResult2) {
            items10.unshift(props23);
          }
          let id3;
          if (user != null) {
            id3 = user.id;
          }
          if (id2 !== id3) {
            items10.unshift(props22);
          }
        }
        if (tmp32) {
          let tmp133 = props12;
          if (message.pinned) {
            tmp133 = props13;
          }
          items10.unshift(tmp133);
        }
        if (canToggleGuildOfficialMessages) {
          let tmp137 = props14;
          if (tmp8Result23.hasFlag(message.flags, tmp30.IS_GUILD_OFFICIAL)) {
            tmp137 = props15;
          }
          items10.unshift(tmp137);
          tmp8Result23 = tmp8(tmp3[27]);
        }
        let tmp139 = null != allTextDisplayContent;
        if (tmp139) {
          tmp139 = allTextDisplayContent.length > 0;
        }
        if (tmp139) {
          items10.unshift(props7);
        }
        if (canReplyToMessage) {
          items10.unshift(props2);
        }
        if (canForwardMessage) {
          items10.unshift(props3);
        }
        let sourceType;
        if (selectedMedia != null) {
          sourceType = selectedMedia.sourceType;
        }
        let tmp144 = "attachment" !== sourceType;
        if (!tmp144) {
          let tmp145 = "image" !== selectedMedia.mediaType;
          if (tmp145) {
            tmp145 = "video" !== selectedMedia.mediaType;
          }
          tmp144 = tmp145;
        }
        if (!tmp144) {
          tmp144 = !tmp(tmp3[70])(message, id2);
        }
        if (!tmp144) {
          tmp144 = isNonModInLockedThread;
        }
        if (!tmp144) {
          const attachments = message.attachments;
          tmp144 = !attachments.some((id) => id.id === selectedMedia.source.id);
        }
        if (!tmp144) {
          items10.unshift(props1);
        }
        let tmp148 = null == selectedMedia;
        if (!tmp148) {
          tmp148 = tmpResultResult;
        }
        if (!tmp148) {
          items10.unshift(props27);
          if ("image" === selectedMedia.mediaType) {
            items10.unshift(props24);
          } else {
            if ("video" === selectedMedia.mediaType) {
              if (!tmp8Result24.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
                items10.unshift(props25);
              }
              tmp8Result24 = tmp8(tmp3[71]);
            }
            let tmp153 = "audio" !== selectedMedia.mediaType;
            if (tmp153) {
              tmp153 = "file" !== selectedMedia.mediaType;
            }
            if (!tmp153) {
              items10.unshift(props26);
            }
          }
          if (tmp8Result25.messageHasObscurableMedia(message)) {
            items10.unshift(props37);
          }
          let tmp159 = "attachment" === selectedMedia.sourceType;
          if (tmp159) {
            tmp159 = tmp52;
          }
          if (tmp159) {
            items10.unshift(props33);
          }
          tmp8Result25 = tmp8(tmp3[72]);
        }
        let tmp161 = message.reactions.length > 0;
        if (tmp161) {
          const isPollResult = message.isPoll();
          let hasNonVoteReactionsResult = !isPollResult;
          if (isPollResult) {
            hasNonVoteReactionsResult = tmp8(tmp3[73]).hasNonVoteReactions(message);
            const tmp8Result26 = tmp8(tmp3[73]);
          }
          tmp161 = hasNonVoteReactionsResult;
        }
        if (tmp161) {
          items10.unshift(props10);
          if (canResult) {
            items10.unshift(props32);
          }
        }
        for (const item10626 of tmp22) {
          if (item10626 === require("usePollMessageContextItemTypes").PollMessageContextItemTypes.END_EARLY) {
            let arr76 = items10.unshift(props9);
          }
          continue;
        }
        items10.unshift(props21);
        tmp8Result22 = tmp8(tmp3[68]);
        if (obj36.canViewInteractionInfo(message)) {
          items10.unshift(props29);
        }
        const _Set = Set;
        set = new Set(items10.filter((item) => !set.has(item)));
        const items11 = [props, props1, props2, props3, props4];
        const items12 = [items11, ,];
        const items13 = [
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
        items12[1] = items13;
        const items14 = [props31, props32, props33, props34, props35, props36, props37, props38];
        items12[2] = items14;
        let mapped = items12.map((arr) => arr.filter((item) => set.has(item)));
        return render(mapped.filter((item) => item.length > 0));
      }
      let canReportUserResult = null != user;
      if (canReportUserResult) {
        canReportUserResult = tmp8(tmp3[69]).canReportUser(user);
        const tmp8Result27 = tmp8(tmp3[69]);
      }
      if (canReportUserResult) {
        canReportUserResult = tmp8(tmp3[69]).canReportMessage(message);
        const tmp8Result28 = tmp8(tmp3[69]);
      }
      if (canReportUserResult) {
        items10.unshift(props34);
      }
      tmp68 = isMatch;
    } catch (err) {}
  }
}
