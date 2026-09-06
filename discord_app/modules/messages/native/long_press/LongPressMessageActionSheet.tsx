// === Module 11658: LongPressMessageActionSheet ===

// Module 11658 (LongPressMessageActionSheet)
import FlagUtils from "FlagUtils" /* 1384 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1608 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 4740 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7162 */;
import ActionSheet from "ActionSheet" /* 7198 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 11657 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 11667 */;
import EmojiRowUtils from "EmojiRowUtils" /* 11729 */;
import EmojiRowDefault from "EmojiRow" /* 11730 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 7938 */;
import ReportToModStore from "ReportToModStore" /* 11659 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11660 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 1979 */;
import PermissionStore from "PermissionStore" /* 4199 */;

require = fn;
let isMessageComponentsV2 = fn(4210).isMessageComponentsV2;
const FileUploadErrorTypes = fn(4553).FileUploadErrorTypes;
const Constants = fn(1074);
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
    let obj = { channel_id: channel.id, guild_id: channel.guild_id, location: null };
    obj = { page: channel.isPrivate() ? tmp.DM_CHANNEL : tmp.GUILD_CHANNEL };
    const merged = Object.assign(analyticsLocation);
    obj.location = obj;
    obj.trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPENED, obj);
  }, items);
  const items1 = [analyticsLocation];
  AuthenticationStore = channel.useCallback(() => {
    const result = showLongPressMessageActionSheet.showLongPressMessageActionSheet(closure_0);
  }, items1);
  const tmp8 = _require;
  let obj1 = require("canReplyToMessage");
  const canReplyToMessage = obj1.useCanReplyToMessage(channel, message);
  let obj2 = require("canForwardMessage");
  const canForwardMessage = obj2.useCanForwardMessage(message);
  const guild = GuildStore.getGuild(channel.guild_id);
  let obj3 = require("ForLaterExperiment");
  let isForLaterExperimentOn = obj3.useIsForLaterExperimentOn("LongPressMessageActionSheet");
  let obj4 = require("initialize");
  const items2 = [actionSheetSource];
  const tmp4 = analyticsLocations(analyticsLocation[12]);
  [tmp14, tmp15] = message(obj4.useStateFromStoresArray(items2, () => {
    const items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  let obj5 = require("ForLaterExperiment");
  const hasForLaterAccess = obj5.useHasForLaterAccess("LongPressMessageActionSheet");
  let obj6 = require("ThreadHooks");
  const isNonModInLockedThread = obj6.useIsNonModInLockedThread(channel);
  let id;
  const tmp13 = message(obj4.useStateFromStoresArray(items2, () => {
    const items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  if (channel != null) {
    id = channel.id;
  }
  const tmpResult = analyticsLocations(tmp3[21]);
  const tmp21 = null != GuildAutomodMessageStore.getMessage(message.id);
  let tmp22 = analyticsLocations(tmp3[22])(message);
  let tmp8Result = tmp8(tmp3[20]);
  GuildStore = tmp8Result.useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    const isNonUserBotResult = user.isNonUserBot();
  }
  const id1 = AuthenticationStore.getId();
  const DeveloperMode = tmp8(tmp3[23]).DeveloperMode;
  let obj8 = props;
  const setting = DeveloperMode.getSetting();
  const canResult = props.can(props17.MANAGE_MESSAGES, channel);
  const tmpResultResult = analyticsLocations(tmp3[21])(id);
  tmp8Result = tmp8(tmp3[24]);
  const canToggleGuildOfficialMessages = tmp8Result.useCanToggleGuildOfficialMessages(message, channel, "LongPressMessageActionSheet");
  let hasFlagResult = message.hasFlag(props13.CROSSPOSTED);
  let tmp33 = !hasFlagResult;
  const canResult1 = props.can(props17.SEND_MESSAGES, channel);
  if (!hasFlagResult) {
    tmp33 = channel.type === props7.GUILD_ANNOUNCEMENT;
  }
  if (tmp33) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(props10.NEWS);
    }
    tmp33 = hasItem;
  }
  if (tmp33) {
    tmp33 = canResult1;
  }
  if (tmp33) {
    tmp33 = message.author.id === id1 || canResult;
    const tmp37 = message.author.id === id1 || canResult;
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
    const tmp8Result2 = tmp8(tmp3[26]);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let canDeleteOwnMessageResult = canResult;
  if (!canResult) {
    canDeleteOwnMessageResult = message.canDeleteOwnMessage(id1);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = length > 0;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = message.author.id !== props11;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = !tmp8(tmp3[27]).hasFlag(message.flags, tmp30.EPHEMERAL);
    const tmp8Result3 = tmp8(tmp3[27]);
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
      const tmp8Result4 = tmp8(tmp3[29]);
    }
    tmp48 = result;
  }
  const attachments = message.attachments;
  let tmp52 = message.author.id === id1;
  if (tmp52) {
    let tmp53 = attachments.filter((flags) => {
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
  const tmp8Result1 = tmp8(tmp3[20]);
  const items3 = [selectedMedia];
  const stateFromStores = tmp8(tmp3[19]).useStateFromStores(items3, () => ReportToModStore.hasReportedMessage(message.channel_id, message.id));
  tmp8(tmp3[30]);
  if (guild != null) {
    id = guild.id;
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
        const result = LongPressMessageActionSheetUtils.longPressMessageOptionHandler({ actionSheetSource, analyticsLocations, channel, chatInputRef, label, message, onBack, onActionExecuted, selectedMedia, disabled });
      },
      variant,
      disabled
    };
  }
  function render(items5) {
    let obj = { value: analyticsLocations, children: null };
    obj = { showGradient: true, startExpanded: MetaQuestUtils.isMetaQuest(), header: null, children: null };
    let shouldShowEmojiRowResult = EmojiRowUtils.shouldShowEmojiRow(closure_8, message, closure_10);
    if (shouldShowEmojiRowResult) {
      obj = { message, channel };
      shouldShowEmojiRowResult = tmp(EmojiRowDefault, obj);
    }
    obj.header = shouldShowEmojiRowResult;
    let mapped;
    if (items5 != null) {
      mapped = items5.map((arr, index) => props18(closure_1_0(closure_1_2[31]).ActionSheetRow.Group, {
        hasIcons: true,
        children: arr.map((item, index) => {
          ({ icon, arrow, label, onPress, variant, disabled } = item);
          return closure_1_24(closure_1_0(closure_1_2[31]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, index);
        })
      }, index));
    }
    obj.children = mapped;
    obj.children = jsx(ActionSheet.ActionSheet, { showGradient: true, startExpanded: MetaQuestUtils.isMetaQuest(), header: null, children: null });
    return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { showGradient: true, startExpanded: MetaQuestUtils.isMetaQuest(), header: null, children: null });
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
    let tmp193 = null != allTextDisplayContent;
    if (tmp193) {
      tmp193 = allTextDisplayContent.length > 0;
    }
    if (tmp193) {
      obj = { label: null, IconComponent: null };
      const intl18 = tmp8(tmp3[37]).intl;
      obj.label = intl18.string(tmp8(tmp3[37]).t.JrGD7E);
      obj.IconComponent = tmp8(tmp3[39]).CopyIcon;
      items4.push(getProps(obj));
    }
    obj1 = { label: null, IconComponent: null, variant: "danger" };
    const intl19 = tmp7(tmp2[37]).intl;
    obj1.label = intl19.string(tmp7(tmp2[37]).t.xwMqD7);
    obj1.IconComponent = tmp7(tmp2[40]).TrashIcon;
    items4.push(getProps(obj1));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp57.SENDING) {
    let tmp183 = null != allTextDisplayContent;
    if (tmp183) {
      tmp183 = allTextDisplayContent.length > 0;
    }
    const items6 = [];
    if (tmp183) {
      obj2 = { label: null, IconComponent: null };
      const intl15 = tmp8(tmp3[37]).intl;
      obj2.label = intl15.string(tmp8(tmp3[37]).t.JrGD7E);
      obj2.IconComponent = tmp8(tmp3[39]).CopyIcon;
      items6.push(getProps(obj2));
    }
    obj3 = { label: null, IconComponent: null, variant: "danger" };
    const intl16 = tmp8(tmp3[37]).intl;
    obj3.label = intl16.string(tmp8(tmp3[37]).t.xwMqD7);
    obj3.IconComponent = tmp8(tmp3[40]).TrashIcon;
    items6.push(getProps(obj3));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === props15.THREAD_STARTER_MESSAGE) {
    obj4 = { label: null, IconComponent: null };
    const intl14 = tmp8(tmp3[37]).intl;
    obj4.label = intl14.string(tmp8(tmp3[37]).t.k5WiPf);
    obj4.IconComponent = tmp8(tmp3[41]).LinkIcon;
    const items8 = [getProps(obj4)];
    const items9 = [items8];
    return render(items9);
  } else {
    obj5 = { label: null, IconComponent: null };
    const intl20 = tmp8(tmp3[37]).intl;
    obj5.label = intl20.string(tmp8(tmp3[37]).t.fsBWmS);
    obj5.IconComponent = tmp8(tmp3[42]).PencilIcon;
    props = getProps(obj5);
    obj6 = { label: null, IconComponent: null };
    const intl21 = tmp8(tmp3[37]).intl;
    obj6.label = intl21.string(tmp8(tmp3[37]).t["5IEsGx"]);
    obj6.IconComponent = tmp8(tmp3[43]).ArrowAngleLeftUpIcon;
    props1 = getProps(obj6);
    const obj7 = { label: null, IconComponent: null };
    const intl22 = tmp8(tmp3[37]).intl;
    obj7.label = intl22.string(tmp8(tmp3[37]).t.I3ltXO);
    obj7.IconComponent = tmp(tmp3[44]);
    const props2 = getProps(obj7);
    obj8 = { label: null, IconComponent: null };
    const intl23 = tmp8(tmp3[37]).intl;
    obj8.label = intl23.string(tmp8(tmp3[37]).t.rBIGBL);
    obj8.IconComponent = tmp8(tmp3[45]).ThreadIcon;
    const props3 = getProps(obj8);
    const obj9 = { label: null, IconComponent: null };
    const intl24 = tmp8(tmp3[37]).intl;
    obj9.label = intl24.string(tmp8(tmp3[37]).t["39d0Wj"]);
    obj9.IconComponent = tmp8(tmp3[45]).ThreadIcon;
    const props4 = getProps(obj9);
    const obj10 = { label: null, IconComponent: null };
    const intl25 = tmp8(tmp3[37]).intl;
    obj10.label = intl25.string(tmp8(tmp3[37]).t["+TSRGD"]);
    obj10.IconComponent = tmp8(tmp3[46]).ChatArrowRightIcon;
    const props5 = getProps(obj10);
    const obj11 = { label: null, IconComponent: null };
    const intl26 = tmp8(tmp3[37]).intl;
    obj11.label = intl26.string(tmp8(tmp3[37]).t.JrGD7E);
    obj11.IconComponent = tmp8(tmp3[39]).CopyIcon;
    const props6 = getProps(obj11);
    const obj12 = { label: null, IconComponent: null };
    const intl27 = tmp8(tmp3[37]).intl;
    obj12.label = intl27.string(tmp8(tmp3[37]).t.RpE9k7);
    obj12.IconComponent = tmp8(tmp3[47]).ChatMarkUnreadIcon;
    props7 = getProps(obj12);
    const obj13 = { label: null, IconComponent: null };
    const intl28 = tmp8(tmp3[37]).intl;
    obj13.label = intl28.string(tmp8(tmp3[37]).t.grdwwt);
    obj13.IconComponent = tmp8(tmp3[48]).ClockXIcon;
    const props8 = getProps(obj13);
    const obj14 = { label: null, IconComponent: null };
    const intl29 = tmp8(tmp3[37]).intl;
    obj14.label = intl29.string(tmp8(tmp3[37]).t.gHp0C4);
    obj14.IconComponent = tmp8(tmp3[49]).ReactionIcon;
    const props9 = getProps(obj14);
    let obj15 = { label: null, IconComponent: null };
    const intl30 = tmp8(tmp3[37]).intl;
    obj15.label = intl30.string(tmp8(tmp3[37]).t.MFGE51);
    obj15.IconComponent = tmp8(tmp3[50]).AnnouncementsIcon;
    props10 = getProps(obj15);
    const obj16 = { label: null, IconComponent: null };
    const intl31 = tmp8(tmp3[37]).intl;
    obj16.label = intl31.string(tmp8(tmp3[37]).t.CvQ18w);
    obj16.IconComponent = tmp8(tmp3[51]).PinIcon;
    props11 = getProps(obj16);
    const obj17 = { label: null, IconComponent: null };
    const intl32 = tmp8(tmp3[37]).intl;
    obj17.label = intl32.string(tmp8(tmp3[37]).t["Bse+F/"]);
    obj17.IconComponent = tmp8(tmp3[51]).PinIcon;
    const props12 = getProps(obj17);
    const obj18 = { label: null, IconComponent: null };
    const intl33 = tmp8(tmp3[37]).intl;
    obj18.label = intl33.string(tmp8(tmp3[37]).t["lE/PG3"]);
    obj18.IconComponent = tmp8(tmp3[52]).StampIcon;
    props13 = getProps(obj18);
    const obj19 = { label: null, IconComponent: null };
    const intl34 = tmp8(tmp3[37]).intl;
    obj19.label = intl34.string(tmp8(tmp3[37]).t["2km5Gf"]);
    obj19.IconComponent = tmp8(tmp3[53]).StampXIcon;
    props14 = getProps(obj19);
    const obj20 = { label: null, IconComponent: null };
    const intl35 = tmp8(tmp3[37]).intl;
    obj20.label = intl35.string(tmp8(tmp3[37]).t.tpxJto);
    obj20.IconComponent = tmp8(tmp3[54]).NitroWheelIcon;
    props15 = getProps(obj20);
    const obj21 = { label: null, IconComponent: null };
    const intl36 = tmp8(tmp3[37]).intl;
    obj21.label = intl36.string(tmp8(tmp3[37]).t.tpxJto);
    obj21.IconComponent = tmp8(tmp3[55]).BookmarkOutlineIcon;
    const props16 = getProps(obj21);
    const obj22 = { label: null, IconComponent: null };
    const intl37 = tmp8(tmp3[37]).intl;
    obj22.label = intl37.string(tmp8(tmp3[37]).t.SvXS1Z);
    obj22.IconComponent = tmp8(tmp3[56]).BookmarkIcon;
    props17 = getProps(obj22);
    const obj23 = { label: null, IconComponent: null, arrow: true };
    const intl38 = tmp8(tmp3[37]).intl;
    obj23.label = intl38.string(tmp8(tmp3[37]).t.mJ3P0N);
    obj23.IconComponent = tmp8(tmp3[57]).ClockIcon;
    const props18 = getProps(obj23);
    const obj24 = { label: null, IconComponent: null, arrow: true };
    const intl39 = tmp8(tmp3[37]).intl;
    obj24.label = intl39.string(tmp8(tmp3[37]).t.vrbqs1);
    obj24.IconComponent = tmp8(tmp3[57]).ClockIcon;
    const props19 = getProps(obj24);
    const obj25 = { label: null, IconComponent: null, arrow: true };
    const intl40 = tmp8(tmp3[37]).intl;
    obj25.label = intl40.string(tmp8(tmp3[37]).t.PHjkRE);
    obj25.IconComponent = tmp8(tmp3[58]).RobotIcon;
    const props20 = getProps(obj25);
    const obj26 = { label: null, IconComponent: null };
    const intl41 = tmp8(tmp3[37]).intl;
    obj26.label = intl41.string(tmp8(tmp3[37]).t["g33r/P"]);
    obj26.IconComponent = tmp8(tmp3[59]).ChatIcon;
    const props21 = getProps(obj26);
    const obj27 = { label: null, IconComponent: null };
    const intl42 = tmp8(tmp3[37]).intl;
    obj27.label = intl42.string(tmp8(tmp3[37]).t.P8tvKG);
    obj27.IconComponent = tmp8(tmp3[60]).AtIcon;
    const props22 = getProps(obj27);
    const obj28 = { label: null, IconComponent: null };
    const intl43 = tmp8(tmp3[37]).intl;
    obj28.label = intl43.string(tmp8(tmp3[37]).t["S/xNKV"]);
    obj28.IconComponent = tmp8(tmp3[61]).DownloadIcon;
    const props23 = getProps(obj28);
    const obj29 = { label: null, IconComponent: null };
    const intl44 = tmp8(tmp3[37]).intl;
    obj29.label = intl44.string(tmp8(tmp3[37]).t.JVuuz3);
    obj29.IconComponent = tmp8(tmp3[61]).DownloadIcon;
    const props24 = getProps(obj29);
    const obj30 = { label: null, IconComponent: null };
    const intl45 = tmp8(tmp3[37]).intl;
    obj30.label = intl45.string(tmp8(tmp3[37]).t.vbAEaA);
    obj30.IconComponent = tmp8(tmp3[61]).DownloadIcon;
    const props25 = getProps(obj30);
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
        obj15 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
        isMatch = obj15.test(uRL.pathname);
      }
      const intl = tmp8(tmp3[37]).intl;
      const t = tmp8(tmp3[37]).t;
      if (tmp68) {
        let v8xHmxo = t["8xHmxo"];
      } else {
        v8xHmxo = t["92CPQ+"];
      }
      const obj31 = { label: intl.string(v8xHmxo), IconComponent: tmp8(tmp3[41]).LinkIcon };
      const props26 = getProps(obj31);
      const obj32 = { label: null, IconComponent: null };
      const intl2 = tmp8(tmp3[37]).intl;
      obj32.label = intl2.string(tmp8(tmp3[37]).t.Xrt5Po);
      obj32.IconComponent = tmp8(tmp3[41]).LinkIcon;
      const props27 = getProps(obj32);
      const obj33 = { label: null, IconComponent: null, arrow: true };
      const intl3 = tmp8(tmp3[37]).intl;
      obj33.label = intl3.string(tmp8(tmp3[37]).t.Rjezbz);
      obj33.IconComponent = tmp8(tmp3[57]).ClockIcon;
      const props28 = getProps(obj33);
      const obj34 = { label: null, IconComponent: null };
      const intl4 = tmp8(tmp3[37]).intl;
      obj34.label = intl4.string(tmp8(tmp3[37]).t.zBoHlf);
      obj34.IconComponent = tmp8(tmp3[62]).IdIcon;
      const props29 = getProps(obj34);
      if (length > 1) {
        const intl6 = tmp8(tmp3[37]).intl;
        let stringResult = intl6.string(tmp8(tmp3[37]).t.wUIMqa);
      } else {
        const intl5 = tmp8(tmp3[37]).intl;
        stringResult = intl5.string(tmp8(tmp3[37]).t["4sxKOb"]);
      }
      let obj35 = { label: stringResult, IconComponent: tmp8(tmp3[63]).XSmallBoldIcon, variant: "danger" };
      const props30 = getProps(obj35);
      const obj36 = { label: null, IconComponent: null, variant: "danger" };
      const intl7 = tmp8(tmp3[37]).intl;
      obj36.label = intl7.string(tmp8(tmp3[37]).t.ZbtGBm);
      obj36.IconComponent = tmp8(tmp3[40]).TrashIcon;
      const props31 = getProps(obj36);
      const obj37 = { label: null, IconComponent: null, variant: "danger" };
      const intl8 = tmp8(tmp3[37]).intl;
      obj37.label = intl8.string(tmp8(tmp3[37]).t.kFwAsa);
      obj37.IconComponent = tmp8(tmp3[40]).TrashIcon;
      const props32 = getProps(obj37);
      const obj38 = { label: null, IconComponent: null, variant: "danger" };
      const intl9 = tmp8(tmp3[37]).intl;
      obj38.label = intl9.string(tmp8(tmp3[37]).t["+78Pfm"]);
      obj38.IconComponent = tmp8(tmp3[64]).FlagIcon;
      const props33 = getProps(obj38);
      const obj39 = { label: null, variant: "danger", IconComponent: null };
      const intl10 = tmp8(tmp3[37]).intl;
      obj39.label = intl10.string(tmp8(tmp3[37]).t.n5EBAJ);
      obj39.IconComponent = tmp8(tmp3[65]).ClydeIcon;
      const props34 = getProps(obj39);
      const obj40 = { label: null, IconComponent: null, disabled: null };
      const intl11 = tmp8(tmp3[37]).intl;
      obj40.label = intl11.string(tmp(tmp3[66])["1D+vqy"]);
      obj40.IconComponent = tmp8(tmp3[64]).FlagIcon;
      obj40.disabled = stateFromStores;
      const props35 = getProps(obj40);
      const obj41 = { label: null, IconComponent: null };
      const intl12 = tmp8(tmp3[37]).intl;
      obj41.label = intl12.string(tmp8(tmp3[37]).t.ZH7P2h);
      obj41.IconComponent = tmp8(tmp3[67]).ImageWarningIcon;
      const props36 = getProps(obj41);
      const obj42 = { label: null, IconComponent: null, variant: "danger" };
      const intl13 = tmp8(tmp3[37]).intl;
      obj42.label = intl13.string(tmp8(tmp3[37]).t.xwMqD7);
      obj42.IconComponent = tmp8(tmp3[40]).TrashIcon;
      const props37 = getProps(obj42);
      let set = (() => {
        let hasFlagResult = "Preview" === actionSheetSource;
        if (!hasFlagResult) {
          hasFlagResult = FlagUtils.hasFlag(message.flags, constants2.EPHEMERAL);
        }
        const items = [];
        if (hasFlagResult) {
          items.push(props3, props7, props16, props17, props15, props18, props19, props30, props37, props, props22, props21, props20, props31);
        }
        let tmp22 = closure_10;
        if (closure_10) {
          tmp22 = !FlagUtils.hasFlag(message.flags, constants2.EPHEMERAL);
        }
        if (!tmp22) {
          items.push(props, props1, props30, props32, props37, props10, props11, props12, props13, props14, props7, props22, props20, props31);
        }
        if (obj3.hasFlag(message.flags, constants2.EPHEMERAL)) {
          items.push(props2, props1, props27, props33, props34, props35);
        }
        obj3 = FlagUtils;
        return new Set(items);
      })();
      const items10 = [];
      if ("Preview" === tmp5) {
        items10.unshift(props5);
      }
      if (canStartPublicThread) {
        items10.unshift(props3);
      } else if (message.hasFlag(tmp30.HAS_THREAD)) {
        items10.unshift(props4);
      }
      items10.unshift(props27);
      if (setting) {
        items10.unshift(props29);
      }
      if (tmp56) {
        if (tmp8Result7.canReportMessageToMods(message)) {
          items10.unshift(props34);
          items10.unshift(props35);
        }
        items10.unshift(props7);
        if (isForLaterExperimentOn) {
          let isPrivateResult = tmp15;
          if (!tmp15) {
            isPrivateResult = tmp14;
          }
          if (!isPrivateResult) {
            isPrivateResult = channel.isPrivate();
          }
          if (!isPrivateResult) {
            isPrivateResult = obj8.can(tmp26.READ_MESSAGE_HISTORY, channel);
          }
          isForLaterExperimentOn = isPrivateResult;
        }
        if (isForLaterExperimentOn) {
          if (!hasForLaterAccess) {
            if (!tmp15) {
              if (!tmp14) {
                items10.unshift(props15);
              }
            }
          }
          let tmp114 = props16;
          if (tmp15) {
            tmp114 = props17;
          }
          items10.unshift(tmp114);
          let tmp116 = props18;
          if (tmp14) {
            tmp116 = props19;
          }
          items10.unshift(tmp116);
        }
        if (canDeleteOwnMessageResult) {
          items10.unshift(props30);
        }
        let hasItem1 = !canResult;
        if (!canResult) {
          hasItem1 = !message.canDeleteOwnMessage(id1);
        }
        if (!hasItem1) {
          const UNDELETABLE = props16.UNDELETABLE;
          hasItem1 = UNDELETABLE.has(message.type);
        }
        if (!hasItem1) {
          items10.unshift(props37);
        }
        let tmp123 = tmp(tmp3[70])(message, id1);
        if (tmp123) {
          tmp123 = !isNonModInLockedThread;
        }
        if (tmp123) {
          items10.unshift(props);
        }
        if (tmp33) {
          items10.unshift(props10);
        }
        let isPrivateResult1 = channel.isPrivate();
        if (isPrivateResult1) {
          isPrivateResult1 = !tmp127;
        }
        if (!isPrivateResult1) {
          isPrivateResult1 = true === isNonUserBotResult;
        }
        if (!isPrivateResult1) {
          let canResult2 = obj8.can(tmp26.SEND_MESSAGES, channel);
          if (!canResult2) {
            canResult2 = tmp127;
          }
          if (canResult2) {
            items10.unshift(props22);
          }
          let id2;
          if (user != null) {
            id2 = user.id;
          }
          if (id1 !== id2) {
            items10.unshift(props21);
          }
        }
        if (tmp32) {
          let tmp133 = props11;
          if (message.pinned) {
            tmp133 = props12;
          }
          items10.unshift(tmp133);
        }
        if (canToggleGuildOfficialMessages) {
          let tmp137 = props13;
          if (tmp8Result8.hasFlag(message.flags, tmp30.IS_GUILD_OFFICIAL)) {
            tmp137 = props14;
          }
          items10.unshift(tmp137);
          tmp8Result8 = tmp8(tmp3[27]);
        }
        let tmp139 = null != allTextDisplayContent;
        if (tmp139) {
          tmp139 = allTextDisplayContent.length > 0;
        }
        if (tmp139) {
          items10.unshift(props6);
        }
        if (canReplyToMessage) {
          items10.unshift(props1);
        }
        if (canForwardMessage) {
          items10.unshift(props2);
        }
        let tmp143 = null == selectedMedia;
        if (!tmp143) {
          tmp143 = tmpResultResult;
        }
        if (!tmp143) {
          items10.unshift(props26);
          if ("image" === selectedMedia.mediaType) {
            items10.unshift(props23);
          } else {
            if ("video" === selectedMedia.mediaType) {
              if (!tmp8Result9.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
                items10.unshift(props24);
              }
              tmp8Result9 = tmp8(tmp3[71]);
            }
            let tmp148 = "audio" !== selectedMedia.mediaType;
            if (tmp148) {
              tmp148 = "file" !== selectedMedia.mediaType;
            }
            if (!tmp148) {
              items10.unshift(props25);
            }
          }
          if (tmp8Result10.messageHasObscurableMedia(message)) {
            items10.unshift(props36);
          }
          let tmp154 = "attachment" === selectedMedia.sourceType;
          if (tmp154) {
            tmp154 = tmp52;
          }
          if (tmp154) {
            items10.unshift(props32);
          }
          tmp8Result10 = tmp8(tmp3[72]);
        }
        let tmp156 = message.reactions.length > 0;
        if (tmp156) {
          const isPollResult = message.isPoll();
          let hasNonVoteReactionsResult = !isPollResult;
          if (isPollResult) {
            hasNonVoteReactionsResult = tmp8(tmp3[73]).hasNonVoteReactions(message);
            const tmp8Result11 = tmp8(tmp3[73]);
          }
          tmp156 = hasNonVoteReactionsResult;
        }
        if (tmp156) {
          items10.unshift(props9);
          if (canResult) {
            items10.unshift(props31);
          }
        }
        for (const item10608 of tmp22) {
          if (item10608 === require("usePollMessageContextItemTypes").PollMessageContextItemTypes.END_EARLY) {
            let arr34 = items10.unshift(props8);
          }
          continue;
        }
        items10.unshift(props20);
        obj35 = require("ApplicationInteractionInfoUtils");
        if (obj35.canViewInteractionInfo(message)) {
          items10.unshift(props28);
        }
        const _Set = Set;
        set = new Set(items10.filter((item) => !set.has(item)));
        const items11 = [props, props1, props2, props3];
        const items12 = [items11, , ];
        const items13 = [props5, props4, props6, props7, props8, props9, props10, props11, props12, props13, props14, props15, props16, props17, props18, props19, props20, props21, props22, props23, props24, props25, props26, props27, props28, props29];
        items12[1] = items13;
        const items14 = [props30, props31, props32, props33, props34, props35, props36, props37];
        items12[2] = items14;
        let mapped = items12.map((arr) => arr.filter((item) => set.has(item)));
        return render(mapped.filter((item) => item.length > 0));
      }
      let canReportUserResult = null != user;
      if (canReportUserResult) {
        canReportUserResult = tmp8(tmp3[69]).canReportUser(user);
        const tmp8Result12 = tmp8(tmp3[69]);
      }
      if (canReportUserResult) {
        canReportUserResult = tmp8(tmp3[69]).canReportMessage(message);
        const tmp8Result13 = tmp8(tmp3[69]);
      }
      if (canReportUserResult) {
        items10.unshift(props33);
      }
      tmp68 = isMatch;
    } catch (err) {
    }
  }
};