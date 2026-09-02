// === Module 11464: LongPressMessageActionSheet ===

// Module 11464 (LongPressMessageActionSheet)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "handleMessageSendFailedAutomod" /* 7856 */;
import closure_6 from "handleSelectedGuildChange" /* 11465 */;
import closure_7 from "getTimeSafe" /* 11466 */;
import { isMessageComponentsV2 } from "hasFlag" /* 4131 */;
import closure_9 from "fetchFingerprint" /* 1215 */;
import closure_10 from "createGuildRecordFromRust" /* 1908 */;
import closure_11 from "getUncachedChannelPermissions" /* 4120 */;
import { FileUploadErrorTypes } from "MESSAGE_GROUP_SPACING" /* 4471 */;
import ME from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
({ AnalyticEvents: map1, AnalyticsPages: closure_14, ChannelTypes: closure_15, GuildFeatures: closure_16, LOCAL_BOT_ID: closure_17, MessageAttachmentFlags: closure_18, MessageFlags: closure_19, MessageStates: closure_20, MessageTypes: closure_21, MessageTypesSets: closure_22, Permissions: closure_23 } = ME);
let result = require("set").fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  const _require = analyticsLocation;
  let props = analyticsLocations;
  const tmp3 = analyticsLocation;
  analyticsLocations = analyticsLocations(analyticsLocation[12])(analyticsLocations(analyticsLocation[13]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
  analyticsLocation = analyticsLocation.analyticsLocation;
  if (undefined === analyticsLocation) {
    analyticsLocation = {};
  }
  ({ user, message } = analyticsLocation);
  const channel = analyticsLocation.channel;
  ({ chatInputRef: closure_5, selectedMedia } = analyticsLocation);
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
    let obj = analyticsLocations(analyticsLocation[14]);
    obj = { channel_id: channel.id, guild_id: channel.guild_id, location: null };
    obj = { page: channel.isPrivate() ? tmp.DM_CHANNEL : tmp.GUILD_CHANNEL };
    const merged = Object.assign(analyticsLocation);
    obj[2] = obj;
    obj.trackWithMetadata(props.MESSAGE_ACTION_SHEET_OPENED, obj);
  }, items);
  const items1 = [analyticsLocation];
  let id = channel.useCallback(() => {
    const result = analyticsLocation(analyticsLocation[15]).showLongPressMessageActionSheet(analyticsLocation);
  }, items1);
  const tmp8 = _require;
  obj1 = _require(tmp3[16]);
  const canReplyToMessage = obj1.useCanReplyToMessage(channel, message);
  let obj2 = _require(tmp3[17]);
  const canForwardMessage = obj2.useCanForwardMessage(message);
  guild = guild.getGuild(channel.guild_id);
  let obj3 = _require(tmp3[18]);
  let isForLaterExperimentOn = obj3.useIsForLaterExperimentOn("LongPressMessageActionSheet");
  let obj4 = _require(tmp3[19]);
  const items2 = [actionSheetSource];
  const tmp4 = analyticsLocations(analyticsLocation[12]);
  [tmp14, tmp15] = message(obj4.useStateFromStoresArray(items2, () => {
    const items = [actionSheetSource.isMessageReminder(channel.id, message.id), actionSheetSource.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  let obj5 = _require(tmp3[18]);
  const hasForLaterAccess = obj5.useHasForLaterAccess("LongPressMessageActionSheet");
  let obj6 = _require(tmp3[20]);
  const isNonModInLockedThread = obj6.useIsNonModInLockedThread(channel);
  id = undefined;
  const tmp13 = message(obj4.useStateFromStoresArray(items2, () => {
    const items = [actionSheetSource.isMessageReminder(channel.id, message.id), actionSheetSource.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  if (channel != null) {
    id = channel.id;
  }
  const arrResult = props(tmp3[21]);
  const tmp21 = null != message.getMessage(message.id);
  let tmp22 = props(tmp3[22])(message);
  let tmp8Result = tmp8(tmp3[20]);
  guild = tmp8Result.useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    const isNonUserBotResult = user.isNonUserBot();
  }
  const id1 = id.getId();
  const DeveloperMode = tmp8(tmp3[23]).DeveloperMode;
  let obj8 = props;
  const setting = DeveloperMode.getSetting();
  const canResult = props.can(props.MANAGE_MESSAGES, channel);
  const tmpResultResult = props(tmp3[21])(id);
  tmp8Result = tmp8(tmp3[24]);
  const canToggleGuildOfficialMessages = tmp8Result.useCanToggleGuildOfficialMessages(message, channel, "LongPressMessageActionSheet");
  let hasFlagResult = message.hasFlag(props.CROSSPOSTED);
  let tmp33 = !hasFlagResult;
  const canResult1 = props.can(props.SEND_MESSAGES, channel);
  if (!hasFlagResult) {
    tmp33 = channel.type === props.GUILD_ANNOUNCEMENT;
  }
  if (tmp33) {
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(props.NEWS);
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
    tmp33 = message.type === props.DEFAULT;
  }
  if (tmp33) {
    tmp33 = !message.isPoll();
  }
  const tmp32 = props(tmp3[25])(message, channel);
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
    canDeleteOwnMessageResult = message.author.id !== props;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = !tmp8(tmp3[27]).hasFlag(message.flags, tmp30.EPHEMERAL);
    const tmp8Result3 = tmp8(tmp3[27]);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = props(tmp3[28])(message) >= 1;
  }
  let tmp48 = !tmp21;
  if (!tmp21) {
    tmp48 = message.interactionError !== props.EXPLICIT_CONTENT;
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
        tmp = !analyticsLocation(analyticsLocation[27]).hasFlag(flags.flags, props.IS_THUMBNAIL);
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
  const stateFromStores = tmp8(tmp3[19]).useStateFromStores(items3, () => selectedMedia.hasReportedMessage(message.channel_id, message.id));
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
      icon: props(analyticsLocation(analyticsLocation[31]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        const result = label(analyticsLocation[32]).longPressMessageOptionHandler({ actionSheetSource: closure_1_7, analyticsLocations: closure_1_1, channel: closure_1_4, chatInputRef: closure_1_5, label, message: closure_1_3, onBack: closure_1_9, onActionExecuted: closure_1, selectedMedia: closure_1_6, disabled });
      },
      variant,
      disabled
    };
  }
  function render(items5) {
    let obj = { value: analyticsLocations, children: null };
    obj = { showGradient: true, startExpanded: analyticsLocation(analyticsLocation[34]).isMetaQuest(), header: null, children: null };
    const obj3 = analyticsLocation(analyticsLocation[34]);
    const tmp2 = analyticsLocation;
    let shouldShowEmojiRowResult = analyticsLocation(analyticsLocation[35]).shouldShowEmojiRow(closure_8, message, closure_10);
    if (shouldShowEmojiRowResult) {
      obj = { message: null, channel: null };
      obj[0] = message;
      obj[1] = channel;
      shouldShowEmojiRowResult = tmp(analyticsLocations(tmp2[36]), obj);
    }
    obj[2] = shouldShowEmojiRowResult;
    let mapped;
    if (items5 != null) {
      mapped = items5.map((arr) => callback2(callback(table[31]).ActionSheetRow.Group, {
        hasIcons: true,
        children: arr.map((arg0, arg1) => {
          ({ icon, arrow, label, onPress, variant, disabled } = arg0);
          return callback2(callback(table[31]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, arg1);
        })
      }, arg1));
    }
    obj[3] = mapped;
    obj[1] = props(analyticsLocation(analyticsLocation[33]).ActionSheet, obj);
    return props(analyticsLocation(analyticsLocation[12]).AnalyticsLocationProvider, obj);
  }
  if (message.state === props.SEND_FAILED) {
    const items4 = [];
    if (tmp48) {
      let obj = { label: null, IconComponent: null };
      props = tmp7;
      props = tmp2;
      const intl17 = tmp8(tmp3[37]).intl;
      obj[0] = intl17.string(tmp8(tmp3[37]).t["5911Lb"]);
      obj[1] = tmp8(tmp3[38]).RetryIcon;
      props = items4.push(getProps(obj));
    }
    props = null != allTextDisplayContent;
    if (props) {
      props = allTextDisplayContent.length > 0;
    }
    if (props) {
      obj = { label: null, IconComponent: null };
      props = tmp7;
      props = tmp2;
      const intl18 = tmp8(tmp3[37]).intl;
      obj[0] = intl18.string(tmp8(tmp3[37]).t.JrGD7E);
      obj[1] = tmp8(tmp3[39]).CopyIcon;
      props = items4.push(getProps(obj));
    }
    obj1 = { label: null, IconComponent: null, variant: "danger" };
    const intl19 = tmp7(tmp2[37]).intl;
    obj1[0] = intl19.string(tmp7(tmp2[37]).t.xwMqD7);
    obj1[1] = tmp7(tmp2[40]).TrashIcon;
    props = items4.push(getProps(obj1));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp57.SENDING) {
    props = null != allTextDisplayContent;
    if (props) {
      props = allTextDisplayContent.length > 0;
    }
    const items6 = [];
    if (props) {
      obj2 = { label: null, IconComponent: null };
      props = tmp7;
      props = tmp2;
      const intl15 = tmp8(tmp3[37]).intl;
      obj2[0] = intl15.string(tmp8(tmp3[37]).t.JrGD7E);
      obj2[1] = tmp8(tmp3[39]).CopyIcon;
      props = items6.push(getProps(obj2));
    }
    obj3 = { label: null, IconComponent: null, variant: "danger" };
    props = tmp7;
    props = tmp2;
    const intl16 = tmp8(tmp3[37]).intl;
    obj3[0] = intl16.string(tmp8(tmp3[37]).t.xwMqD7);
    obj3[1] = tmp8(tmp3[40]).TrashIcon;
    props = items6.push(getProps(obj3));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === props.THREAD_STARTER_MESSAGE) {
    obj4 = { label: null, IconComponent: null };
    props = tmp7;
    props = tmp2;
    const intl14 = tmp8(tmp3[37]).intl;
    obj4[0] = intl14.string(tmp8(tmp3[37]).t.k5WiPf);
    obj4[1] = tmp8(tmp3[41]).LinkIcon;
    const items8 = [getProps(obj4)];
    const items9 = [items8];
    return render(items9);
  } else {
    obj5 = { label: null, IconComponent: null };
    props = tmp7;
    props = tmp2;
    const intl20 = tmp8(tmp3[37]).intl;
    obj5[0] = intl20.string(tmp8(tmp3[37]).t.fsBWmS);
    obj5[1] = tmp8(tmp3[42]).PencilIcon;
    props = getProps(obj5);
    obj6 = { label: null, IconComponent: null };
    const intl21 = tmp8(tmp3[37]).intl;
    obj6[0] = intl21.string(tmp8(tmp3[37]).t["5IEsGx"]);
    obj6[1] = tmp8(tmp3[43]).ArrowAngleLeftUpIcon;
    props = getProps(obj6);
    const obj7 = { label: null, IconComponent: null };
    const intl22 = tmp8(tmp3[37]).intl;
    obj7[0] = intl22.string(tmp8(tmp3[37]).t.I3ltXO);
    obj7[1] = props(tmp3[44]);
    props = getProps(obj7);
    obj8 = { label: null, IconComponent: null };
    const intl23 = tmp8(tmp3[37]).intl;
    obj8[0] = intl23.string(tmp8(tmp3[37]).t.rBIGBL);
    obj8[1] = tmp8(tmp3[45]).ThreadIcon;
    props = getProps(obj8);
    const obj9 = { label: null, IconComponent: null };
    const intl24 = tmp8(tmp3[37]).intl;
    obj9[0] = intl24.string(tmp8(tmp3[37]).t["39d0Wj"]);
    obj9[1] = tmp8(tmp3[45]).ThreadIcon;
    props = getProps(obj9);
    const obj10 = { label: null, IconComponent: null };
    const intl25 = tmp8(tmp3[37]).intl;
    obj10[0] = intl25.string(tmp8(tmp3[37]).t["+TSRGD"]);
    obj10[1] = tmp8(tmp3[46]).ChatArrowRightIcon;
    props = getProps(obj10);
    const obj11 = { label: null, IconComponent: null };
    const intl26 = tmp8(tmp3[37]).intl;
    obj11[0] = intl26.string(tmp8(tmp3[37]).t.JrGD7E);
    obj11[1] = tmp8(tmp3[39]).CopyIcon;
    props = getProps(obj11);
    const obj12 = { label: null, IconComponent: null };
    const intl27 = tmp8(tmp3[37]).intl;
    obj12[0] = intl27.string(tmp8(tmp3[37]).t.RpE9k7);
    obj12[1] = tmp8(tmp3[47]).ChatMarkUnreadIcon;
    props = getProps(obj12);
    const obj13 = { label: null, IconComponent: null };
    const intl28 = tmp8(tmp3[37]).intl;
    obj13[0] = intl28.string(tmp8(tmp3[37]).t.grdwwt);
    obj13[1] = tmp8(tmp3[48]).ClockXIcon;
    props = getProps(obj13);
    const obj14 = { label: null, IconComponent: null };
    const intl29 = tmp8(tmp3[37]).intl;
    obj14[0] = intl29.string(tmp8(tmp3[37]).t.gHp0C4);
    obj14[1] = tmp8(tmp3[49]).ReactionIcon;
    props = getProps(obj14);
    let obj15 = { label: null, IconComponent: null };
    const intl30 = tmp8(tmp3[37]).intl;
    obj15[0] = intl30.string(tmp8(tmp3[37]).t.MFGE51);
    obj15[1] = tmp8(tmp3[50]).AnnouncementsIcon;
    props = getProps(obj15);
    const obj16 = { label: null, IconComponent: null };
    const intl31 = tmp8(tmp3[37]).intl;
    obj16[0] = intl31.string(tmp8(tmp3[37]).t.CvQ18w);
    obj16[1] = tmp8(tmp3[51]).PinIcon;
    props = getProps(obj16);
    const obj17 = { label: null, IconComponent: null };
    const intl32 = tmp8(tmp3[37]).intl;
    obj17[0] = intl32.string(tmp8(tmp3[37]).t["Bse+F/"]);
    obj17[1] = tmp8(tmp3[51]).PinIcon;
    props = getProps(obj17);
    const obj18 = { label: null, IconComponent: null };
    const intl33 = tmp8(tmp3[37]).intl;
    obj18[0] = intl33.string(tmp8(tmp3[37]).t["lE/PG3"]);
    obj18[1] = tmp8(tmp3[52]).StampIcon;
    props = getProps(obj18);
    const obj19 = { label: null, IconComponent: null };
    const intl34 = tmp8(tmp3[37]).intl;
    obj19[0] = intl34.string(tmp8(tmp3[37]).t["2km5Gf"]);
    obj19[1] = tmp8(tmp3[53]).StampXIcon;
    props = getProps(obj19);
    const obj20 = { label: null, IconComponent: null };
    const intl35 = tmp8(tmp3[37]).intl;
    obj20[0] = intl35.string(tmp8(tmp3[37]).t.tpxJto);
    obj20[1] = tmp8(tmp3[54]).NitroWheelIcon;
    props = getProps(obj20);
    const obj21 = { label: null, IconComponent: null };
    const intl36 = tmp8(tmp3[37]).intl;
    obj21[0] = intl36.string(tmp8(tmp3[37]).t.tpxJto);
    obj21[1] = tmp8(tmp3[55]).BookmarkOutlineIcon;
    props = getProps(obj21);
    const obj22 = { label: null, IconComponent: null };
    const intl37 = tmp8(tmp3[37]).intl;
    obj22[0] = intl37.string(tmp8(tmp3[37]).t.SvXS1Z);
    obj22[1] = tmp8(tmp3[56]).BookmarkIcon;
    props = getProps(obj22);
    const obj23 = { label: null, IconComponent: null, arrow: true };
    const intl38 = tmp8(tmp3[37]).intl;
    obj23[0] = intl38.string(tmp8(tmp3[37]).t.mJ3P0N);
    obj23[1] = tmp8(tmp3[57]).ClockIcon;
    props = getProps(obj23);
    const obj24 = { label: null, IconComponent: null, arrow: true };
    const intl39 = tmp8(tmp3[37]).intl;
    obj24[0] = intl39.string(tmp8(tmp3[37]).t.vrbqs1);
    obj24[1] = tmp8(tmp3[57]).ClockIcon;
    props = getProps(obj24);
    const obj25 = { label: null, IconComponent: null, arrow: true };
    const intl40 = tmp8(tmp3[37]).intl;
    obj25[0] = intl40.string(tmp8(tmp3[37]).t.PHjkRE);
    obj25[1] = tmp8(tmp3[58]).RobotIcon;
    props = getProps(obj25);
    const obj26 = { label: null, IconComponent: null };
    const intl41 = tmp8(tmp3[37]).intl;
    obj26[0] = intl41.string(tmp8(tmp3[37]).t["g33r/P"]);
    obj26[1] = tmp8(tmp3[59]).ChatIcon;
    props = getProps(obj26);
    const obj27 = { label: null, IconComponent: null };
    const intl42 = tmp8(tmp3[37]).intl;
    obj27[0] = intl42.string(tmp8(tmp3[37]).t.P8tvKG);
    obj27[1] = tmp8(tmp3[60]).AtIcon;
    props = getProps(obj27);
    const obj28 = { label: null, IconComponent: null };
    const intl43 = tmp8(tmp3[37]).intl;
    obj28[0] = intl43.string(tmp8(tmp3[37]).t["S/xNKV"]);
    obj28[1] = tmp8(tmp3[61]).DownloadIcon;
    props = getProps(obj28);
    const obj29 = { label: null, IconComponent: null };
    const intl44 = tmp8(tmp3[37]).intl;
    obj29[0] = intl44.string(tmp8(tmp3[37]).t.JVuuz3);
    obj29[1] = tmp8(tmp3[61]).DownloadIcon;
    props = getProps(obj29);
    const obj30 = { label: null, IconComponent: null };
    const intl45 = tmp8(tmp3[37]).intl;
    obj30[0] = intl45.string(tmp8(tmp3[37]).t.vbAEaA);
    obj30[1] = tmp8(tmp3[61]).DownloadIcon;
    props = getProps(obj30);
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
      } else {
      }
      const obj31 = { label: null, IconComponent: null };
      obj31[0] = intl.string(_92CPQ_);
      obj31[1] = tmp8(tmp3[41]).LinkIcon;
      props = getProps(obj31);
      const obj32 = { label: null, IconComponent: null };
      const intl2 = tmp8(tmp3[37]).intl;
      obj32[0] = intl2.string(tmp8(tmp3[37]).t.Xrt5Po);
      obj32[1] = tmp8(tmp3[41]).LinkIcon;
      const props1 = getProps(obj32);
      const obj33 = { label: null, IconComponent: null, arrow: true };
      const intl3 = tmp8(tmp3[37]).intl;
      obj33[0] = intl3.string(tmp8(tmp3[37]).t.Rjezbz);
      obj33[1] = tmp8(tmp3[57]).ClockIcon;
      const props2 = getProps(obj33);
      const obj34 = { label: null, IconComponent: null };
      const intl4 = tmp8(tmp3[37]).intl;
      obj34[0] = intl4.string(tmp8(tmp3[37]).t.zBoHlf);
      obj34[1] = tmp8(tmp3[62]).IdIcon;
      const props3 = getProps(obj34);
      if (length > 1) {
        const intl6 = tmp8(tmp3[37]).intl;
        let stringResult = intl6.string(tmp8(tmp3[37]).t.wUIMqa);
      } else {
        const intl5 = tmp8(tmp3[37]).intl;
        stringResult = intl5.string(tmp8(tmp3[37]).t["4sxKOb"]);
      }
      let obj35 = { label: null, IconComponent: null, variant: "danger" };
      obj35[0] = stringResult;
      obj35[1] = tmp8(tmp3[63]).XSmallBoldIcon;
      const props4 = getProps(obj35);
      const obj36 = { label: null, IconComponent: null, variant: "danger" };
      const intl7 = tmp8(tmp3[37]).intl;
      obj36[0] = intl7.string(tmp8(tmp3[37]).t.ZbtGBm);
      obj36[1] = tmp8(tmp3[40]).TrashIcon;
      const props5 = getProps(obj36);
      const obj37 = { label: null, IconComponent: null, variant: "danger" };
      const intl8 = tmp8(tmp3[37]).intl;
      obj37[0] = intl8.string(tmp8(tmp3[37]).t.kFwAsa);
      obj37[1] = tmp8(tmp3[40]).TrashIcon;
      const props6 = getProps(obj37);
      const obj38 = { label: null, IconComponent: null, variant: "danger" };
      const intl9 = tmp8(tmp3[37]).intl;
      obj38[0] = intl9.string(tmp8(tmp3[37]).t["+78Pfm"]);
      obj38[1] = tmp8(tmp3[64]).FlagIcon;
      const props7 = getProps(obj38);
      const obj39 = { label: null, variant: "danger", IconComponent: null };
      const intl10 = tmp8(tmp3[37]).intl;
      obj39[0] = intl10.string(tmp8(tmp3[37]).t.n5EBAJ);
      obj39[2] = tmp8(tmp3[65]).ClydeIcon;
      const props8 = getProps(obj39);
      const obj40 = { label: null, IconComponent: null, disabled: null };
      const intl11 = tmp8(tmp3[37]).intl;
      obj40[0] = intl11.string(props(tmp3[66])["1D+vqy"]);
      obj40[1] = tmp8(tmp3[64]).FlagIcon;
      obj40[2] = stateFromStores;
      const props9 = getProps(obj40);
      const obj41 = { label: null, IconComponent: null };
      const intl12 = tmp8(tmp3[37]).intl;
      obj41[0] = intl12.string(tmp8(tmp3[37]).t.ZH7P2h);
      obj41[1] = tmp8(tmp3[67]).ImageWarningIcon;
      const props10 = getProps(obj41);
      const obj42 = { label: null, IconComponent: null, variant: "danger" };
      const intl13 = tmp8(tmp3[37]).intl;
      obj42[0] = intl13.string(tmp8(tmp3[37]).t.xwMqD7);
      obj42[1] = tmp8(tmp3[40]).TrashIcon;
      const props11 = getProps(obj42);
      closure_37 = (() => {
        let hasFlagResult = "Preview" === actionSheetSource;
        if (!hasFlagResult) {
          hasFlagResult = analyticsLocation(analyticsLocation[27]).hasFlag(message.flags, props.EPHEMERAL);
          const obj = analyticsLocation(analyticsLocation[27]);
        }
        const items = [];
        if (hasFlagResult) {
          items.push(props, props, props, props, props, props, props, props4, props11, props, props, props, props, props5);
        }
        let tmp22 = closure_10;
        if (closure_10) {
          tmp22 = !analyticsLocation(analyticsLocation[27]).hasFlag(message.flags, props.EPHEMERAL);
          const obj2 = analyticsLocation(analyticsLocation[27]);
        }
        if (!tmp22) {
          items.push(props, props, props4, props6, props11, props, props, props, props, props, props, props, props, props5);
        }
        if (obj3.hasFlag(message.flags, props.EPHEMERAL)) {
          items.push(props, props, props1, props7, props8, props9);
        }
        obj3 = analyticsLocation(analyticsLocation[27]);
        return new Set(items);
      })();
      const items10 = [];
      if ("Preview" === tmp5) {
        items10.unshift(props);
      }
      if (canStartPublicThread) {
        items10.unshift(props);
      } else if (message.hasFlag(tmp30.HAS_THREAD)) {
        items10.unshift(props);
      }
      items10.unshift(props1);
      if (setting) {
        items10.unshift(props3);
      }
      if (tmp56) {
        props = tmp7;
        props = tmp2;
        if (tmp8Result7.canReportMessageToMods(message)) {
          props = items10.unshift(props8);
          props = items10.unshift(props9);
        }
        props = items10.unshift(props);
        if (isForLaterExperimentOn) {
          props = tmp15;
          if (!tmp15) {
            props = tmp14;
          }
          if (!props) {
            props = channel.isPrivate();
          }
          if (!props) {
            props = obj8.can(tmp26.READ_MESSAGE_HISTORY, channel);
          }
          isForLaterExperimentOn = props;
        }
        if (isForLaterExperimentOn) {
          if (!hasForLaterAccess) {
            if (!tmp15) {
              if (!tmp14) {
                props = items10.unshift(props);
              }
            }
          }
          props = items10.unshift(props);
          props = items10.unshift(props);
        }
        if (canDeleteOwnMessageResult) {
          props = items10.unshift(props4);
        }
        props = !canResult;
        if (!canResult) {
          props = !message.canDeleteOwnMessage(id1);
        }
        if (!props) {
          const UNDELETABLE = props.UNDELETABLE;
          props = UNDELETABLE.has(message.type);
        }
        if (!props) {
          props = items10.unshift(props11);
        }
        props = tmp2;
        props = props(tmp3[70])(message, id1);
        if (props) {
          props = !isNonModInLockedThread;
        }
        if (props) {
          props = items10.unshift(props);
        }
        if (tmp33) {
          props = items10.unshift(props);
        }
        props = channel.type === props.GROUP_DM;
        props = channel.isPrivate();
        if (props) {
          props = !props;
        }
        if (!props) {
          props = true === isNonUserBotResult;
        }
        if (!props) {
          props = obj8.can(tmp26.SEND_MESSAGES, channel);
          if (props) {
            props = items10.unshift(props);
          }
          props = undefined;
          if (user != null) {
            props = user.id;
          }
          if (id1 !== props) {
            props = items10.unshift(props);
          }
        }
        if (tmp32) {
          props = items10.unshift(props);
        }
        if (canToggleGuildOfficialMessages) {
          props = tmp7;
          props = tmp2;
          props = items10.unshift(props);
          const tmp8Result8 = tmp8(tmp3[27]);
        }
        props = null != allTextDisplayContent;
        if (props) {
          props = allTextDisplayContent.length > 0;
        }
        if (props) {
          props = items10.unshift(props);
        }
        if (canReplyToMessage) {
          props = items10.unshift(props);
        }
        if (canForwardMessage) {
          props = items10.unshift(props);
        }
        props = null == selectedMedia;
        if (!props) {
          props = tmpResultResult;
        }
        if (!props) {
          props = items10.unshift(props);
          if ("image" === selectedMedia.mediaType) {
            props = items10.unshift(props);
          } else {
            if ("video" === selectedMedia.mediaType) {
              props = tmp7;
              props = tmp2;
              if (!tmp8Result9.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
                props = items10.unshift(props);
              }
              tmp8Result9 = tmp8(tmp3[71]);
            }
            props = "audio" !== selectedMedia.mediaType;
            if (props) {
              props = "file" !== selectedMedia.mediaType;
            }
            if (!props) {
              props = items10.unshift(props);
            }
          }
          props = tmp7;
          props = tmp2;
          if (tmp8Result10.messageHasObscurableMedia(message)) {
            props = items10.unshift(props10);
          }
          props = "attachment" === selectedMedia.sourceType;
          if (props) {
            props = tmp52;
          }
          if (props) {
            props = items10.unshift(props6);
          }
          tmp8Result10 = tmp8(tmp3[72]);
        }
        props = message.reactions.length > 0;
        if (props) {
          props = message.isPoll();
          props = !props;
          if (props) {
            props = tmp7;
            props = tmp2;
            props = tmp8(tmp3[73]).hasNonVoteReactions(message);
            const tmp8Result11 = tmp8(tmp3[73]);
          }
        }
        if (props) {
          props = items10.unshift(props);
          if (canResult) {
            props = items10.unshift(props5);
          }
        }
        props = tmp22;
        props = tmp22;
        for (const item10608 of tmp22) {
          props = _require;
          props = _require;
          props = analyticsLocation;
          props = analyticsLocation;
          if (item10608 === _require(analyticsLocation[22]).PollMessageContextItemTypes.END_EARLY) {
            props = items10.unshift(props);
          }
          continue;
        }
        props = items10.unshift(props);
        props = _require;
        props = _require;
        props = analyticsLocation;
        props = analyticsLocation;
        obj35 = _require(analyticsLocation[74]);
        if (obj35.canViewInteractionInfo(message)) {
          props = items10.unshift(props2);
        }
        props = globalThis;
        const _Set = Set;
        props = new.target;
        props = new.target;
        props = new Set(items10.filter((arg0) => !set.has(arg0)));
        const items11 = [props, props, props, props];
        const items12 = [items11, , ];
        const items13 = [props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props, props1, props2, props3];
        items12[1] = items13;
        const items14 = [props4, props5, props6, props7, props8, props9, props10, props11];
        items12[2] = items14;
        let mapped = items12.map((arr) => arr.filter((arg0) => set.has(arg0)));
        return render(mapped.filter((arg0) => arg0.length > 0));
      }
      props = null != user;
      if (props) {
        props = tmp7;
        props = tmp2;
        props = tmp8(tmp3[69]).canReportUser(user);
        const tmp8Result12 = tmp8(tmp3[69]);
      }
      if (props) {
        props = tmp7;
        props = tmp2;
        props = tmp8(tmp3[69]).canReportMessage(message);
        const tmp8Result13 = tmp8(tmp3[69]);
      }
      if (props) {
        props = items10.unshift(props7);
      }
      tmp68 = isMatch;
    } catch (err) {
    }
  }
};