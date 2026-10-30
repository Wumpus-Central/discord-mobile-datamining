// === Module 10169: LongPressMessageActionSheet ===

// Module 10169 (LongPressMessageActionSheet)
import FlagUtils from "FlagUtils" /* 1397 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1623 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5755 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7320 */;
import ActionSheet from "ActionSheet" /* 7360 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 10168 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 10179 */;
import EmojiRowUtils from "EmojiRowUtils" /* 14487 */;
import EmojiRowDefault from "EmojiRow" /* 14488 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8375 */;
import ReportToModStore from "ReportToModStore" /* 10170 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10171 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4880 */;
import PermissionStore from "PermissionStore" /* 4941 */;

const require = globalThis.__r;

require = fn;
let isMessageComponentsV2 = fn(4952).isMessageComponentsV2;
const FileUploadErrorTypes = fn(5014).FileUploadErrorTypes;
const Constants = fn(1072);
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16, LOCAL_BOT_ID: closure_17, MessageAttachmentFlags: closure_18, MessageFlags: closure_19, MessageStates: closure_20, MessageTypes: closure_21, MessageTypesSets: closure_22, Permissions: closure_23 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  _require = analyticsLocation;
  const tmp3 = analyticsLocation;
  analyticsLocations = analyticsLocations(analyticsLocation[12])(analyticsLocations(analyticsLocation[13]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
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
  const items2 = [actionSheetSource];
  const obj4 = require("initialize");
  [tmp13, tmp14] = message(require("initialize").useStateFromStoresArray(items2, () => {
    const items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  const tmp12 = message(require("initialize").useStateFromStoresArray(items2, () => {
    const items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  const isNonModInLockedThread = require("ThreadHooks").useIsNonModInLockedThread(channel);
  let id1;
  let obj5 = require("ThreadHooks");
  if (channel != null) {
    id1 = channel.id;
  }
  const tmpResult = analyticsLocations(tmp3[20]);
  const tmp19 = null != GuildAutomodMessageStore.getMessage(message.id);
  const tmp20 = analyticsLocations(tmp3[21])(message);
  const tmpResultResult = analyticsLocations(tmp3[20])(id1);
  GuildStore = tmp8(tmp3[19]).useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    const isNonUserBotResult = user.isNonUserBot();
  }
  const id2 = AuthenticationStore.getId();
  const DeveloperMode = tmp8(tmp3[22]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = props.can(props17.MANAGE_MESSAGES, channel);
  const tmp8Result = tmp8(tmp3[19]);
  const canResult1 = props.can(props17.SEND_MESSAGES, channel);
  const canToggleGuildOfficialMessages = tmp8(tmp3[23]).useCanToggleGuildOfficialMessages(message, channel, "LongPressMessageActionSheet");
  let hasFlagResult = message.hasFlag(props13.CROSSPOSTED);
  let tmp31 = !hasFlagResult;
  const tmp8Result15 = tmp8(tmp3[23]);
  if (!hasFlagResult) {
    tmp31 = channel.type === props4.GUILD_ANNOUNCEMENT;
  }
  if (tmp31) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(props8.NEWS);
    }
    tmp31 = hasItem;
  }
  if (tmp31) {
    tmp31 = canResult1;
  }
  if (tmp31) {
    tmp31 = message.author.id === id2 || canResult;
    const tmp35 = message.author.id === id2 || canResult;
  }
  if (tmp31) {
    tmp31 = message.type === props15.DEFAULT;
  }
  if (tmp31) {
    tmp31 = !message.isPoll();
  }
  const tmp30 = analyticsLocations(tmp3[24])(message, channel);
  const canStartPublicThread = tmp8(tmp3[19]).computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    let allTextDisplayContent = tmp8(tmp3[25]).getAllTextDisplayContent(contentMessage.components);
    const tmp8Result17 = tmp8(tmp3[25]);
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
    canDeleteOwnMessageResult = !tmp8(tmp3[26]).hasFlag(message.flags, tmp28.EPHEMERAL);
    const tmp8Result18 = tmp8(tmp3[26]);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = tmp(tmp3[27])(message) >= 1;
  }
  let tmp46 = !tmp19;
  if (!tmp19) {
    tmp46 = message.interactionError !== props1.EXPLICIT_CONTENT;
  }
  if (tmp46) {
    let result = null == message.interactionData;
    if (!result) {
      result = tmp8(tmp3[28]).canRetryInteractionData(message.interactionData);
      const tmp8Result19 = tmp8(tmp3[28]);
    }
    tmp46 = result;
  }
  const attachments1 = message.attachments;
  let tmp50 = message.author.id === id2;
  if (tmp50) {
    let tmp51 = attachments1.filter((flags) => {
      let tmp = null == flags.flags;
      if (!tmp) {
        tmp = !analyticsLocation(analyticsLocation[26]).hasFlag(flags.flags, props12.IS_THUMBNAIL);
        const obj = analyticsLocation(analyticsLocation[26]);
      }
      return tmp;
    }).length > 1;
    if (!tmp51) {
      tmp51 = "" !== message.content;
    }
    tmp50 = tmp51;
  }
  const tmp8Result16 = tmp8(tmp3[19]);
  const items3 = [selectedMedia];
  const stateFromStores = tmp8(tmp3[18]).useStateFromStores(items3, () => ReportToModStore.hasReportedMessage(message.channel_id, message.id));
  tmp8(tmp3[29]);
  if (guild != null) {
    const id = guild.id;
  }
  function getProps(arrow) {
    const label = arrow.label;
    ({ onActionExecuted: analyticsLocations, disabled } = arrow);
    ({ IconComponent, variant } = arrow);
    return {
      arrow: arrow.arrow,
      icon: props18(analyticsLocation(analyticsLocation[30]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        const result = LongPressMessageActionSheetUtils.longPressMessageOptionHandler({ actionSheetSource, analyticsLocations, channel, chatInputRef, label, message, onBack, onActionExecuted, selectedMedia, disabled });
      },
      variant,
      disabled
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
      mapped = items5.map((arr, index) => props18(closure_1_0(closure_1_2[30]).ActionSheetRow.Group, {
        hasIcons: true,
        children: arr.map((item, index) => {
          ({ icon, arrow, label, onPress, variant, disabled } = item);
          return closure_1_24(closure_1_0(closure_1_2[30]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, index);
        })
      }, index));
    }
    obj2.children = mapped;
    obj.children = jsx(ActionSheet.ActionSheet, { showGradient: true, startExpanded: MetaQuestUtils.isMetaQuest(), header: null, children: null });
    return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  }
  if (message.state === props14.SEND_FAILED) {
    const items4 = [];
    if (tmp46) {
      let obj = { label: null, IconComponent: null };
      const intl17 = tmp8(tmp3[36]).intl;
      obj.label = intl17.string(tmp8(tmp3[36]).t["5911Lb"]);
      obj.IconComponent = tmp8(tmp3[37]).RetryIcon;
      items4.push(getProps(obj));
    }
    let tmp195 = null != allTextDisplayContent;
    if (tmp195) {
      tmp195 = allTextDisplayContent.length > 0;
    }
    if (tmp195) {
      const obj6 = { label: null, IconComponent: null };
      const intl18 = tmp8(tmp3[36]).intl;
      obj6.label = intl18.string(tmp8(tmp3[36]).t.JrGD7E);
      obj6.IconComponent = tmp8(tmp3[38]).CopyIcon;
      items4.push(getProps(obj6));
    }
    const obj8 = { label: null, IconComponent: null, variant: "danger" };
    const intl19 = tmp7(tmp2[36]).intl;
    obj8.label = intl19.string(tmp7(tmp2[36]).t.xwMqD7);
    obj8.IconComponent = tmp7(tmp2[39]).TrashIcon;
    items4.push(getProps(obj8));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp55.SENDING) {
    let tmp185 = null != allTextDisplayContent;
    if (tmp185) {
      tmp185 = allTextDisplayContent.length > 0;
    }
    const items6 = [];
    if (tmp185) {
      const obj9 = { label: null, IconComponent: null };
      const intl15 = tmp8(tmp3[36]).intl;
      obj9.label = intl15.string(tmp8(tmp3[36]).t.JrGD7E);
      obj9.IconComponent = tmp8(tmp3[38]).CopyIcon;
      items6.push(getProps(obj9));
    }
    const obj10 = { label: null, IconComponent: null, variant: "danger" };
    const intl16 = tmp8(tmp3[36]).intl;
    obj10.label = intl16.string(tmp8(tmp3[36]).t.xwMqD7);
    obj10.IconComponent = tmp8(tmp3[39]).TrashIcon;
    items6.push(getProps(obj10));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === props15.THREAD_STARTER_MESSAGE) {
    const obj11 = { label: null, IconComponent: null };
    const intl14 = tmp8(tmp3[36]).intl;
    obj11.label = intl14.string(tmp8(tmp3[36]).t.k5WiPf);
    obj11.IconComponent = tmp8(tmp3[40]).LinkIcon;
    const items8 = [getProps(obj11)];
    const items9 = [items8];
    return render(items9);
  } else {
    const obj12 = { label: null, IconComponent: null };
    const intl20 = tmp8(tmp3[36]).intl;
    obj12.label = intl20.string(tmp8(tmp3[36]).t.fsBWmS);
    obj12.IconComponent = tmp8(tmp3[41]).PencilIcon;
    props = getProps(obj12);
    const obj13 = { label: null, IconComponent: null };
    const intl21 = tmp8(tmp3[36]).intl;
    obj13.label = intl21.string(tmp8(tmp3[36]).t.Y8ujqr);
    obj13.IconComponent = tmp8(tmp3[41]).PencilIcon;
    props1 = getProps(obj13);
    const obj15 = { label: null, IconComponent: null };
    const intl22 = tmp8(tmp3[36]).intl;
    obj15.label = intl22.string(tmp8(tmp3[36]).t["5IEsGx"]);
    obj15.IconComponent = tmp8(tmp3[42]).ArrowAngleLeftUpIcon;
    const props2 = getProps(obj15);
    const obj16 = { label: null, IconComponent: null };
    const intl23 = tmp8(tmp3[36]).intl;
    obj16.label = intl23.string(tmp8(tmp3[36]).t.I3ltXO);
    obj16.IconComponent = tmp(tmp3[43]);
    const props3 = getProps(obj16);
    const obj17 = { label: null, IconComponent: null };
    const intl24 = tmp8(tmp3[36]).intl;
    obj17.label = intl24.string(tmp8(tmp3[36]).t.rBIGBL);
    obj17.IconComponent = tmp8(tmp3[44]).ThreadIcon;
    props4 = getProps(obj17);
    const obj18 = { label: null, IconComponent: null };
    const intl25 = tmp8(tmp3[36]).intl;
    obj18.label = intl25.string(tmp8(tmp3[36]).t["39d0Wj"]);
    obj18.IconComponent = tmp8(tmp3[44]).ThreadIcon;
    const props5 = getProps(obj18);
    const obj19 = { label: null, IconComponent: null };
    const intl26 = tmp8(tmp3[36]).intl;
    obj19.label = intl26.string(tmp8(tmp3[36]).t["+TSRGD"]);
    obj19.IconComponent = tmp8(tmp3[45]).ChatArrowRightIcon;
    const props6 = getProps(obj19);
    const obj20 = { label: null, IconComponent: null };
    const intl27 = tmp8(tmp3[36]).intl;
    obj20.label = intl27.string(tmp8(tmp3[36]).t.JrGD7E);
    obj20.IconComponent = tmp8(tmp3[38]).CopyIcon;
    const props7 = getProps(obj20);
    const obj21 = { label: null, IconComponent: null };
    const intl28 = tmp8(tmp3[36]).intl;
    obj21.label = intl28.string(tmp8(tmp3[36]).t.RpE9k7);
    obj21.IconComponent = tmp8(tmp3[46]).ChatMarkUnreadIcon;
    props8 = getProps(obj21);
    const obj22 = { label: null, IconComponent: null };
    const intl29 = tmp8(tmp3[36]).intl;
    obj22.label = intl29.string(tmp8(tmp3[36]).t.grdwwt);
    obj22.IconComponent = tmp8(tmp3[47]).ClockXIcon;
    const props9 = getProps(obj22);
    const obj23 = { label: null, IconComponent: null };
    const intl30 = tmp8(tmp3[36]).intl;
    obj23.label = intl30.string(tmp8(tmp3[36]).t.gHp0C4);
    obj23.IconComponent = tmp8(tmp3[48]).ReactionIcon;
    const props10 = getProps(obj23);
    const obj24 = { label: null, IconComponent: null };
    const intl31 = tmp8(tmp3[36]).intl;
    obj24.label = intl31.string(tmp8(tmp3[36]).t.MFGE51);
    obj24.IconComponent = tmp8(tmp3[49]).AnnouncementsIcon;
    props11 = getProps(obj24);
    const obj25 = { label: null, IconComponent: null };
    const intl32 = tmp8(tmp3[36]).intl;
    obj25.label = intl32.string(tmp8(tmp3[36]).t.CvQ18w);
    obj25.IconComponent = tmp8(tmp3[50]).PinIcon;
    const props12 = getProps(obj25);
    const obj26 = { label: null, IconComponent: null };
    const intl33 = tmp8(tmp3[36]).intl;
    obj26.label = intl33.string(tmp8(tmp3[36]).t["Bse+F/"]);
    obj26.IconComponent = tmp8(tmp3[50]).PinIcon;
    props13 = getProps(obj26);
    const obj27 = { label: null, IconComponent: null };
    const intl34 = tmp8(tmp3[36]).intl;
    obj27.label = intl34.string(tmp8(tmp3[36]).t["lE/PG3"]);
    obj27.IconComponent = tmp8(tmp3[51]).StampIcon;
    props14 = getProps(obj27);
    const obj28 = { label: null, IconComponent: null };
    const intl35 = tmp8(tmp3[36]).intl;
    obj28.label = intl35.string(tmp8(tmp3[36]).t["2km5Gf"]);
    obj28.IconComponent = tmp8(tmp3[52]).StampXIcon;
    props15 = getProps(obj28);
    const obj29 = { label: null, IconComponent: null };
    const intl36 = tmp8(tmp3[36]).intl;
    obj29.label = intl36.string(tmp8(tmp3[36]).t.tpxJto);
    obj29.IconComponent = tmp8(tmp3[53]).BookmarkOutlineIcon;
    const props16 = getProps(obj29);
    const obj30 = { label: null, IconComponent: null };
    const intl37 = tmp8(tmp3[36]).intl;
    obj30.label = intl37.string(tmp8(tmp3[36]).t.SvXS1Z);
    obj30.IconComponent = tmp8(tmp3[54]).BookmarkIcon;
    props17 = getProps(obj30);
    const obj31 = { label: null, IconComponent: null, arrow: true };
    const intl38 = tmp8(tmp3[36]).intl;
    obj31.label = intl38.string(tmp8(tmp3[36]).t.mJ3P0N);
    obj31.IconComponent = tmp8(tmp3[55]).ClockIcon;
    const props18 = getProps(obj31);
    const obj32 = { label: null, IconComponent: null, arrow: true };
    const intl39 = tmp8(tmp3[36]).intl;
    obj32.label = intl39.string(tmp8(tmp3[36]).t.vrbqs1);
    obj32.IconComponent = tmp8(tmp3[55]).ClockIcon;
    const props19 = getProps(obj32);
    const obj33 = { label: null, IconComponent: null, arrow: true };
    const intl40 = tmp8(tmp3[36]).intl;
    obj33.label = intl40.string(tmp8(tmp3[36]).t.PHjkRE);
    obj33.IconComponent = tmp8(tmp3[56]).RobotIcon;
    const props20 = getProps(obj33);
    const obj35 = { label: null, IconComponent: null };
    const intl41 = tmp8(tmp3[36]).intl;
    obj35.label = intl41.string(tmp8(tmp3[36]).t["g33r/P"]);
    obj35.IconComponent = tmp8(tmp3[57]).ChatIcon;
    const props21 = getProps(obj35);
    const obj36 = { label: null, IconComponent: null };
    const intl42 = tmp8(tmp3[36]).intl;
    obj36.label = intl42.string(tmp8(tmp3[36]).t.P8tvKG);
    obj36.IconComponent = tmp8(tmp3[58]).AtIcon;
    const props22 = getProps(obj36);
    const obj37 = { label: null, IconComponent: null };
    const intl43 = tmp8(tmp3[36]).intl;
    obj37.label = intl43.string(tmp8(tmp3[36]).t["S/xNKV"]);
    obj37.IconComponent = tmp8(tmp3[59]).DownloadIcon;
    const props23 = getProps(obj37);
    const obj38 = { label: null, IconComponent: null };
    const intl44 = tmp8(tmp3[36]).intl;
    obj38.label = intl44.string(tmp8(tmp3[36]).t.JVuuz3);
    obj38.IconComponent = tmp8(tmp3[59]).DownloadIcon;
    const props24 = getProps(obj38);
    const obj39 = { label: null, IconComponent: null };
    const intl45 = tmp8(tmp3[36]).intl;
    obj39.label = intl45.string(tmp8(tmp3[36]).t.vbAEaA);
    obj39.IconComponent = tmp8(tmp3[59]).DownloadIcon;
    const props25 = getProps(obj39);
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
        isMatch = null != tmp61;
      }
      if (isMatch) {
        isMatch = "cdn.discordapp.com" === tmp61.hostname;
      }
      if (isMatch) {
        isMatch = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i.test(uRL.pathname);
        const obj14 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
      }
      const intl = tmp8(tmp3[36]).intl;
      const t = tmp8(tmp3[36]).t;
      if (tmp66) {
        let v8xHmxo = t["8xHmxo"];
      } else {
        v8xHmxo = t["92CPQ+"];
      }
      const obj40 = { label: intl.string(v8xHmxo), IconComponent: tmp8(tmp3[40]).LinkIcon };
      const props26 = getProps(obj40);
      const obj41 = { label: null, IconComponent: null };
      const intl2 = tmp8(tmp3[36]).intl;
      obj41.label = intl2.string(tmp8(tmp3[36]).t.Xrt5Po);
      obj41.IconComponent = tmp8(tmp3[40]).LinkIcon;
      const props27 = getProps(obj41);
      const obj42 = { label: null, IconComponent: null, arrow: true };
      const intl3 = tmp8(tmp3[36]).intl;
      obj42.label = intl3.string(tmp8(tmp3[36]).t.Rjezbz);
      obj42.IconComponent = tmp8(tmp3[55]).ClockIcon;
      const props28 = getProps(obj42);
      const obj43 = { label: null, IconComponent: null };
      const intl4 = tmp8(tmp3[36]).intl;
      obj43.label = intl4.string(tmp8(tmp3[36]).t.zBoHlf);
      obj43.IconComponent = tmp8(tmp3[60]).IdIcon;
      const props29 = getProps(obj43);
      if (length > 1) {
        const intl6 = tmp8(tmp3[36]).intl;
        let stringResult = intl6.string(tmp8(tmp3[36]).t.wUIMqa);
      } else {
        const intl5 = tmp8(tmp3[36]).intl;
        stringResult = intl5.string(tmp8(tmp3[36]).t["4sxKOb"]);
      }
      const obj44 = { label: stringResult, IconComponent: tmp8(tmp3[61]).XSmallBoldIcon, variant: "danger" };
      const props30 = getProps(obj44);
      const obj45 = { label: null, IconComponent: null, variant: "danger" };
      const intl7 = tmp8(tmp3[36]).intl;
      obj45.label = intl7.string(tmp8(tmp3[36]).t.ZbtGBm);
      obj45.IconComponent = tmp8(tmp3[39]).TrashIcon;
      const props31 = getProps(obj45);
      const obj46 = { label: null, IconComponent: null, variant: "danger" };
      const intl8 = tmp8(tmp3[36]).intl;
      obj46.label = intl8.string(tmp8(tmp3[36]).t.kFwAsa);
      obj46.IconComponent = tmp8(tmp3[39]).TrashIcon;
      const props32 = getProps(obj46);
      const obj47 = { label: null, IconComponent: null, variant: "danger" };
      const intl9 = tmp8(tmp3[36]).intl;
      obj47.label = intl9.string(tmp8(tmp3[36]).t["+78Pfm"]);
      obj47.IconComponent = tmp8(tmp3[62]).FlagIcon;
      const props33 = getProps(obj47);
      const obj48 = { label: null, variant: "danger", IconComponent: null };
      const intl10 = tmp8(tmp3[36]).intl;
      obj48.label = intl10.string(tmp8(tmp3[36]).t.n5EBAJ);
      obj48.IconComponent = tmp8(tmp3[63]).ClydeIcon;
      const props34 = getProps(obj48);
      const obj49 = { label: null, IconComponent: null, disabled: null };
      const intl11 = tmp8(tmp3[36]).intl;
      obj49.label = intl11.string(tmp(tmp3[64])["1D+vqy"]);
      obj49.IconComponent = tmp8(tmp3[62]).FlagIcon;
      obj49.disabled = stateFromStores;
      const props35 = getProps(obj49);
      const obj50 = { label: null, IconComponent: null };
      const intl12 = tmp8(tmp3[36]).intl;
      obj50.label = intl12.string(tmp8(tmp3[36]).t.ZH7P2h);
      obj50.IconComponent = tmp8(tmp3[65]).ImageWarningIcon;
      const props36 = getProps(obj50);
      const obj51 = { label: null, IconComponent: null, variant: "danger" };
      const intl13 = tmp8(tmp3[36]).intl;
      obj51.label = intl13.string(tmp8(tmp3[36]).t.xwMqD7);
      obj51.IconComponent = tmp8(tmp3[39]).TrashIcon;
      const props37 = getProps(obj51);
      let set = (() => {
        let hasFlagResult = "Preview" === actionSheetSource;
        if (!hasFlagResult) {
          hasFlagResult = FlagUtils.hasFlag(message.flags, constants2.EPHEMERAL);
        }
        const items = [];
        if (hasFlagResult) {
          items.push(props4, props8, props16, props17, props18, props19, props30, props37, props, props1, props22, props21, props20, props31);
        }
        let tmp22 = closure_10;
        if (closure_10) {
          tmp22 = !FlagUtils.hasFlag(message.flags, constants2.EPHEMERAL);
        }
        if (!tmp22) {
          items.push(props, props1, props2, props30, props32, props37, props11, props12, props13, props14, props15, props8, props22, props20, props31);
        }
        if (obj3.hasFlag(message.flags, constants2.EPHEMERAL)) {
          items.push(props3, props2, props27, props33, props34, props35);
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
      } else if (message.hasFlag(tmp28.HAS_THREAD)) {
        items10.unshift(props5);
      }
      items10.unshift(props27);
      if (setting) {
        items10.unshift(props29);
      }
      if (tmp54) {
        if (tmp8Result22.canReportMessageToMods(message)) {
          items10.unshift(props34);
          items10.unshift(props35);
        }
        items10.unshift(props8);
        let isPrivateResult = tmp14;
        if (!tmp14) {
          isPrivateResult = tmp13;
        }
        if (!isPrivateResult) {
          isPrivateResult = channel.isPrivate();
        }
        if (!isPrivateResult) {
          isPrivateResult = obj7.can(tmp24.READ_MESSAGE_HISTORY, channel);
        }
        if (isPrivateResult) {
          if (!tmp13) {
            let tmp111 = props16;
            if (tmp14) {
              tmp111 = props17;
            }
            items10.unshift(tmp111);
          }
          let tmp113 = props18;
          if (tmp13) {
            tmp113 = props19;
          }
          items10.unshift(tmp113);
        }
        if (canDeleteOwnMessageResult) {
          items10.unshift(props30);
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
          items10.unshift(props37);
        }
        let tmp120 = tmp(tmp3[68])(message, id2);
        if (tmp120) {
          tmp120 = !isNonModInLockedThread;
        }
        if (tmp120) {
          items10.unshift(props);
        }
        if (tmp31) {
          items10.unshift(props11);
        }
        let isPrivateResult1 = channel.isPrivate();
        if (isPrivateResult1) {
          isPrivateResult1 = !tmp124;
        }
        if (!isPrivateResult1) {
          isPrivateResult1 = true === isNonUserBotResult;
        }
        if (!isPrivateResult1) {
          let canResult2 = obj7.can(tmp24.SEND_MESSAGES, channel);
          if (!canResult2) {
            canResult2 = tmp124;
          }
          if (canResult2) {
            items10.unshift(props22);
          }
          let id3;
          if (user != null) {
            id3 = user.id;
          }
          if (id2 !== id3) {
            items10.unshift(props21);
          }
        }
        if (tmp30) {
          let tmp130 = props12;
          if (message.pinned) {
            tmp130 = props13;
          }
          items10.unshift(tmp130);
        }
        if (canToggleGuildOfficialMessages) {
          let tmp134 = props14;
          if (tmp8Result23.hasFlag(message.flags, tmp28.IS_GUILD_OFFICIAL)) {
            tmp134 = props15;
          }
          items10.unshift(tmp134);
          tmp8Result23 = tmp8(tmp3[26]);
        }
        let tmp136 = null != allTextDisplayContent;
        if (tmp136) {
          tmp136 = allTextDisplayContent.length > 0;
        }
        if (tmp136) {
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
        let tmp141 = "attachment" !== sourceType;
        if (!tmp141) {
          let tmp142 = "image" !== selectedMedia.mediaType;
          if (tmp142) {
            tmp142 = "video" !== selectedMedia.mediaType;
          }
          tmp141 = tmp142;
        }
        if (!tmp141) {
          tmp141 = !tmp(tmp3[68])(message, id2);
        }
        if (!tmp141) {
          tmp141 = isNonModInLockedThread;
        }
        if (!tmp141) {
          const attachments = message.attachments;
          tmp141 = !attachments.some((id) => id.id === selectedMedia.source.id);
        }
        if (!tmp141) {
          items10.unshift(props1);
        }
        let tmp145 = null == selectedMedia;
        if (!tmp145) {
          tmp145 = tmpResultResult;
        }
        if (!tmp145) {
          items10.unshift(props26);
          if ("image" === selectedMedia.mediaType) {
            items10.unshift(props23);
          } else {
            if ("video" === selectedMedia.mediaType) {
              if (!tmp8Result24.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
                items10.unshift(props24);
              }
              tmp8Result24 = tmp8(tmp3[69]);
            }
            let tmp150 = "audio" !== selectedMedia.mediaType;
            if (tmp150) {
              tmp150 = "file" !== selectedMedia.mediaType;
            }
            if (!tmp150) {
              items10.unshift(props25);
            }
          }
          if (tmp8Result25.messageHasObscurableMedia(message)) {
            items10.unshift(props36);
          }
          let tmp156 = "attachment" === selectedMedia.sourceType;
          if (tmp156) {
            tmp156 = tmp50;
          }
          if (tmp156) {
            items10.unshift(props32);
          }
          tmp8Result25 = tmp8(tmp3[70]);
        }
        let tmp158 = message.reactions.length > 0;
        if (tmp158) {
          const isPollResult = message.isPoll();
          let hasNonVoteReactionsResult = !isPollResult;
          if (isPollResult) {
            hasNonVoteReactionsResult = tmp8(tmp3[71]).hasNonVoteReactions(message);
            const tmp8Result26 = tmp8(tmp3[71]);
          }
          tmp158 = hasNonVoteReactionsResult;
        }
        if (tmp158) {
          items10.unshift(props10);
          if (canResult) {
            items10.unshift(props31);
          }
        }
        for (const item10615 of tmp20) {
          if (item10615 === require("usePollMessageContextItemTypes").PollMessageContextItemTypes.END_EARLY) {
            let arr74 = items10.unshift(props9);
          }
          continue;
        }
        items10.unshift(props20);
        tmp8Result22 = tmp8(tmp3[66]);
        if (obj34.canViewInteractionInfo(message)) {
          items10.unshift(props28);
        }
        const _Set = Set;
        set = new Set(items10.filter((item) => !set.has(item)));
        const items11 = [props, props1, props2, props3, props4];
        const items12 = [items11, , ];
        const items13 = [props6, props5, props7, props8, props9, props10, props11, props12, props13, props14, props15, props16, props17, props18, props19, props20, props21, props22, props23, props24, props25, props26, props27, props28, props29];
        items12[1] = items13;
        const items14 = [props30, props31, props32, props33, props34, props35, props36, props37];
        items12[2] = items14;
        let mapped = items12.map((arr) => arr.filter((item) => set.has(item)));
        return render(mapped.filter((item) => item.length > 0));
      }
      let canReportUserResult = null != user;
      if (canReportUserResult) {
        canReportUserResult = tmp8(tmp3[67]).canReportUser(user);
        const tmp8Result27 = tmp8(tmp3[67]);
      }
      if (canReportUserResult) {
        canReportUserResult = tmp8(tmp3[67]).canReportMessage(message);
        const tmp8Result28 = tmp8(tmp3[67]);
      }
      if (canReportUserResult) {
        items10.unshift(props33);
      }
      tmp66 = isMatch;
    } catch (err) {
    }
  }
};