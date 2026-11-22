// === Module 12123: LongPressMessageActionSheet ===

// Module 12123 (LongPressMessageActionSheet)
import MetaQuestUtils from "MetaQuestUtils" /* 1625 */;
import AppAnalyticsUtilsDefault from "AppAnalyticsUtils" /* 5650 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7520 */;
import ActionSheet from "ActionSheet" /* 7553 */;
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet" /* 12122 */;
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils" /* 12138 */;
import EmojiRowUtils from "EmojiRowUtils" /* 12164 */;
import EmojiRowDefault from "EmojiRow" /* 12165 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8675 */;
import ReportToModStore from "ReportToModStore" /* 12124 */;
import SavedMessagesStore from "SavedMessagesStore" /* 11684 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4784 */;
import PermissionStore from "PermissionStore" /* 4845 */;

const require = globalThis.__r;

require = fn;
let isMessageComponentsV2 = fn(4856).isMessageComponentsV2;
let FileUploadErrorTypes = fn(4918).FileUploadErrorTypes;
const Constants = fn(1071);
({ AnalyticEvents: closure_14, AnalyticsPages: closure_15, ChannelTypes: closure_16, GuildFeatures: closure_17, LOCAL_BOT_ID: closure_18, MessageAttachmentFlags: closure_19, MessageFlags: closure_20, MessageStates: closure_21, MessageTypes: closure_22, MessageTypesSets: closure_23, Permissions: closure_24 } = Constants);
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  _require = analyticsLocation;
  PermissionStore = async function _handleSaveCheckpointCharacter() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        dependencyMap = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (null != checkpoint2026CharacterFromMessage) {
            const result = tmp2(12126).trackCheckpoint2026CharacterSaveClicked();
            GuildStore(true);
            const obj2 = tmp2(12126);
            c1 = 1;
            dependencyMap = 1;
            const obj6 = { value: tmp2(12133).saveCheckpointCharacterImage(tmp19), done: false };
            return obj6;
          } else {
            dependencyMap = 3;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_11(false);
        }
        dependencyMap = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp14) {
        dependencyMap = tmp;
        throw tmp14;
      }
    }
  };
  const tmp3 = analyticsLocation;
  analyticsLocations = analyticsLocations(analyticsLocation[13])(analyticsLocations(analyticsLocation[14]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
  analyticsLocation = analyticsLocation.analyticsLocation;
  if (undefined === analyticsLocation) {
    analyticsLocation = {};
  }
  ({ user, message } = analyticsLocation);
  const channel = analyticsLocation.channel;
  ({ chatInputRef: noop, selectedMedia: GuildAutomodMessageStore, actionSheetSource } = analyticsLocation);
  let tmp5;
  if (undefined !== actionSheetSource) {
    tmp5 = actionSheetSource;
  }
  actionSheetSource = tmp5;
  const canAddNewReactions = analyticsLocation.canAddNewReactions;
  closure_8 = undefined !== canAddNewReactions && canAddNewReactions;
  items = [analyticsLocation, channel];
  const effect = noop.useEffect(() => {
    const obj2 = { channel_id: channel.id, guild_id: channel.guild_id, location: null };
    const obj = AppAnalyticsUtilsDefault;
    const merged = Object.assign(analyticsLocation);
    obj2.location = { page: channel.isPrivate() ? constants.DM_CHANNEL : constants.GUILD_CHANNEL };
    obj.trackWithMetadata(constants.MESSAGE_ACTION_SHEET_OPENED, obj2);
    const obj3 = { page: channel.isPrivate() ? constants.DM_CHANNEL : constants.GUILD_CHANNEL };
  }, items);
  const items1 = [analyticsLocation];
  isMessageComponentsV2 = noop.useCallback(() => {
    const result = showLongPressMessageActionSheet.showLongPressMessageActionSheet(closure_0);
  }, items1);
  const tmp8 = _require;
  const tmp4 = analyticsLocations(analyticsLocation[13]);
  const canReplyToMessage = require("canReplyToMessage").useCanReplyToMessage(channel, message);
  let obj3 = require("canReplyToMessage");
  const canForwardMessage = require("canForwardMessage").useCanForwardMessage(message);
  guild = GuildStore.getGuild(channel.guild_id);
  let obj4 = require("canForwardMessage");
  const items2 = [closure_8];
  let obj5 = require("initialize");
  const tmp12 = channel;
  [r10059, r10060] = channel(require("initialize").useStateFromStoresArray(items2, () => {
    items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  const tmp13 = channel(require("initialize").useStateFromStoresArray(items2, () => {
    items = [SavedMessagesStore.isMessageReminder(channel.id, message.id), SavedMessagesStore.isMessageBookmarked(channel.id, message.id)];
    return items;
  }), 2);
  const isNonModInLockedThread = require("ThreadHooks").useIsNonModInLockedThread(channel);
  let id;
  let obj6 = require("ThreadHooks");
  if (channel != null) {
    id = channel.id;
  }
  analyticsLocations(tmp3[21])(id);
  const tmp18 = null != GuildAutomodMessageStore.getMessage(message.id);
  analyticsLocations(tmp3[22])(message);
  const tmpResult = analyticsLocations(tmp3[21]);
  const checkpoint2026CharacterFromMessage = tmp8(tmp3[23]).getCheckpoint2026CharacterFromMessage(message.getContentMessage());
  if (null != checkpoint2026CharacterFromMessage) {
    let result = tmp8(tmp3[24]).isCheckpointCharacterSaveEnabled("message_long_press");
    const tmp8Result11 = tmp8(tmp3[24]);
  }
  const tmp8Result = tmp8(tmp3[23]);
  [obj9, GuildStore] = tmp12(noop.useState(false), 2);
  const tmp12Result = tmp12(noop.useState(false), 2);
  let intl = tmp8(tmp3[25]).useToken(tmp(tmp3[26]).colors.TABLEROW_ICON_COLOR_DEFAULT);
  const tmp8Result12 = tmp8(tmp3[25]);
  FileUploadErrorTypes = tmp8(tmp3[20]).useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    user.isNonUserBot();
  }
  const id1 = checkpoint2026CharacterFromMessage.getId();
  const DeveloperMode = tmp8(tmp3[29]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = PermissionStore.can(constants7.MANAGE_MESSAGES, channel);
  const tmp8Result13 = tmp8(tmp3[20]);
  const canResult1 = PermissionStore.can(constants7.SEND_MESSAGES, channel);
  const canToggleGuildOfficialMessages = tmp8(tmp3[30]).useCanToggleGuildOfficialMessages(message, channel, "LongPressMessageActionSheet");
  const hasFlagResult = message.hasFlag(constants4.CROSSPOSTED);
  analyticsLocations(tmp3[31])(message, channel);
  let tmp34 = !hasFlagResult;
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
    tmp34 = message.author.id === id1 || canResult;
    const tmp38 = message.author.id === id1 || canResult;
  }
  if (tmp34) {
    tmp34 = message.type === constants6.DEFAULT;
  }
  if (tmp34) {
    !message.isPoll();
  }
  const tmp31 = constants4;
  const tmp8Result14 = tmp8(tmp3[30]);
  const canStartPublicThread = tmp8(tmp3[20]).computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    let allTextDisplayContent = tmp8(tmp3[32]).getAllTextDisplayContent(contentMessage.components);
    const tmp8Result16 = tmp8(tmp3[32]);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let canDeleteOwnMessageResult = canResult;
  if (!canResult) {
    canDeleteOwnMessageResult = message.canDeleteOwnMessage(id1);
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = contentMessage.embeds.length > 0;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = message.author.id !== closure_18;
  }
  if (canDeleteOwnMessageResult) {
    canDeleteOwnMessageResult = !tmp8(tmp3[33]).hasFlag(message.flags, tmp31.EPHEMERAL);
    const tmp8Result17 = tmp8(tmp3[33]);
  }
  if (canDeleteOwnMessageResult) {
    tmp(tmp3[34])(message) >= 1;
  }
  let tmp51 = !tmp18;
  if (!tmp18) {
    tmp51 = message.interactionError !== FileUploadErrorTypes.EXPLICIT_CONTENT;
  }
  if (tmp51) {
    let result1 = null == message.interactionData;
    if (!result1) {
      result1 = tmp8(tmp3[35]).canRetryInteractionData(message.interactionData);
      const tmp8Result18 = tmp8(tmp3[35]);
    }
    tmp51 = result1;
  }
  const attachments = message.attachments;
  if (message.author.id === id1) {
    let tmp55 = attachments.filter((flags) => {
      let tmp = null == flags.flags;
      if (!tmp) {
        tmp = !analyticsLocation(analyticsLocation[33]).hasFlag(flags.flags, constants.IS_THUMBNAIL);
        const obj = analyticsLocation(analyticsLocation[33]);
      }
      return tmp;
    }).length > 1;
    if (!tmp55) {
      tmp55 = "" !== message.content;
    }
  }
  const tmp8Result15 = tmp8(tmp3[20]);
  const items3 = [actionSheetSource];
  const stateFromStores = tmp8(tmp3[19]).useStateFromStores(items3, () => ReportToModStore.hasReportedMessage(message.channel_id, message.id));
  const tmp8Result19 = tmp8(tmp3[19]);
  let id2;
  if (guild != null) {
    id2 = guild.id;
  }
  function getProps(arrow) {
    const label = arrow.label;
    ({ onActionExecuted: analyticsLocations, disabled } = arrow);
    ({ IconComponent, variant } = arrow);
    return {
      arrow: arrow.arrow,
      icon: closure_25(analyticsLocation(analyticsLocation[37]).ActionSheetRow.Icon, { IconComponent }),
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
    let shouldShowEmojiRowResult = EmojiRowUtils.shouldShowEmojiRow(closure_8, message, closure_13);
    if (shouldShowEmojiRowResult) {
      const obj5 = { message, channel };
      shouldShowEmojiRowResult = jsx(EmojiRowDefault, { message, channel });
    }
    obj2.header = shouldShowEmojiRowResult;
    let mapped;
    if (items5 != null) {
      mapped = items5.map((arr, index) => closure_1_25(closure_1_0(closure_1_2[37]).ActionSheetRow.Group, {
        hasIcons: true,
        children: arr.map((item, index) => {
          ({ icon, arrow, label, onPress, variant, disabled } = item);
          return closure_1_25(closure_1_0(closure_1_2[37]).ActionSheetRow, { icon, arrow, label, onPress, variant, disabled }, index);
        })
      }, index));
    }
    obj2.children = mapped;
    obj.children = jsx(ActionSheet.ActionSheet, { showGradient: true, startExpanded: MetaQuestUtils.isMetaQuest(), header: null, children: null });
    return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: null });
  }
  const isReportToModEnabled = tmp8(tmp3[36]).useIsReportToModEnabled(id2);
  if (message.state === constants5.SEND_FAILED) {
    const items4 = [];
    if (tmp51) {
      let obj = { label: null, IconComponent: null };
      const intl8 = tmp8(tmp3[43]).intl;
      obj.label = intl8.string(tmp8(tmp3[43]).t["5911Lb"]);
      obj.IconComponent = tmp8(tmp3[44]).RetryIcon;
      items4.push(getProps(obj));
    }
    let tmp80 = null != allTextDisplayContent;
    if (tmp80) {
      tmp80 = allTextDisplayContent.length > 0;
    }
    if (tmp80) {
      const obj7 = { label: null, IconComponent: null };
      const intl9 = tmp8(tmp3[43]).intl;
      obj7.label = intl9.string(tmp8(tmp3[43]).t.JrGD7E);
      obj7.IconComponent = tmp8(tmp3[45]).CopyIcon;
      items4.push(getProps(obj7));
    }
    const obj8 = { label: null, IconComponent: null, variant: "danger" };
    const intl10 = tmp7(tmp2[43]).intl;
    obj8.label = intl10.string(tmp7(tmp2[43]).t.xwMqD7);
    obj8.IconComponent = tmp7(tmp2[46]).TrashIcon;
    items4.push(getProps(obj8));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp60.SENDING) {
    let tmp70 = null != allTextDisplayContent;
    if (tmp70) {
      tmp70 = allTextDisplayContent.length > 0;
    }
    const items6 = [];
    if (tmp70) {
      const obj10 = { label: null, IconComponent: null };
      const intl6 = tmp8(tmp3[43]).intl;
      obj10.label = intl6.string(tmp8(tmp3[43]).t.JrGD7E);
      obj10.IconComponent = tmp8(tmp3[45]).CopyIcon;
      items6.push(getProps(obj10));
    }
    const obj11 = { label: null, IconComponent: null, variant: "danger" };
    const intl7 = tmp8(tmp3[43]).intl;
    obj11.label = intl7.string(tmp8(tmp3[43]).t.xwMqD7);
    obj11.IconComponent = tmp8(tmp3[46]).TrashIcon;
    items6.push(getProps(obj11));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === constants6.THREAD_STARTER_MESSAGE) {
    const obj12 = { label: null, IconComponent: null };
    const intl5 = tmp8(tmp3[43]).intl;
    obj12.label = intl5.string(tmp8(tmp3[43]).t.k5WiPf);
    obj12.IconComponent = tmp8(tmp3[47]).LinkIcon;
    const items8 = [getProps(obj12)];
    const items9 = [items8];
    return render(items9);
  } else {
    const obj13 = { label: null, IconComponent: null };
    const intl11 = tmp8(tmp3[43]).intl;
    obj13.label = intl11.string(tmp8(tmp3[43]).t.fsBWmS);
    obj13.IconComponent = tmp8(tmp3[48]).PencilIcon;
    closure_14 = getProps(obj13);
    const obj14 = { label: null, IconComponent: null };
    const intl12 = tmp8(tmp3[43]).intl;
    obj14.label = intl12.string(tmp8(tmp3[43]).t.Y8ujqr);
    obj14.IconComponent = tmp8(tmp3[48]).PencilIcon;
    closure_15 = getProps(obj14);
    const obj15 = { label: null, IconComponent: null };
    const intl13 = tmp8(tmp3[43]).intl;
    obj15.label = intl13.string(tmp8(tmp3[43]).t["5IEsGx"]);
    obj15.IconComponent = tmp8(tmp3[49]).ArrowAngleLeftUpIcon;
    constants2 = getProps(obj15);
    const obj16 = { label: null, IconComponent: null };
    const intl14 = tmp8(tmp3[43]).intl;
    obj16.label = intl14.string(tmp8(tmp3[43]).t.I3ltXO);
    obj16.IconComponent = tmp(tmp3[50]);
    constants3 = getProps(obj16);
    const obj17 = { label: null, IconComponent: null };
    const intl15 = tmp8(tmp3[43]).intl;
    obj17.label = intl15.string(tmp8(tmp3[43]).t.rBIGBL);
    obj17.IconComponent = tmp8(tmp3[51]).ThreadIcon;
    closure_18 = getProps(obj17);
    const obj18 = { label: null, IconComponent: null };
    const intl16 = tmp8(tmp3[43]).intl;
    obj18.label = intl16.string(tmp8(tmp3[43]).t["39d0Wj"]);
    obj18.IconComponent = tmp8(tmp3[51]).ThreadIcon;
    const props = getProps(obj18);
    const obj19 = { label: null, IconComponent: null };
    const intl17 = tmp8(tmp3[43]).intl;
    obj19.label = intl17.string(tmp8(tmp3[43]).t["+TSRGD"]);
    obj19.IconComponent = tmp8(tmp3[52]).ChatArrowRightIcon;
    const props1 = getProps(obj19);
    const obj20 = { label: null, IconComponent: null };
    const intl18 = tmp8(tmp3[43]).intl;
    obj20.label = intl18.string(tmp8(tmp3[43]).t.JrGD7E);
    obj20.IconComponent = tmp8(tmp3[45]).CopyIcon;
    const props2 = getProps(obj20);
    const obj21 = { label: null, IconComponent: null };
    const intl19 = tmp8(tmp3[43]).intl;
    obj21.label = intl19.string(tmp8(tmp3[43]).t.RpE9k7);
    obj21.IconComponent = tmp8(tmp3[53]).ChatMarkUnreadIcon;
    constants = getProps(obj21);
    const obj22 = { label: null, IconComponent: null };
    const intl20 = tmp8(tmp3[43]).intl;
    obj22.label = intl20.string(tmp8(tmp3[43]).t.grdwwt);
    obj22.IconComponent = tmp8(tmp3[54]).ClockXIcon;
    const props3 = getProps(obj22);
    const obj23 = { label: null, IconComponent: null };
    const intl21 = tmp8(tmp3[43]).intl;
    obj23.label = intl21.string(tmp8(tmp3[43]).t.gHp0C4);
    obj23.IconComponent = tmp8(tmp3[55]).ReactionIcon;
    const props4 = getProps(obj23);
    const obj24 = { label: null, IconComponent: null };
    const intl22 = tmp8(tmp3[43]).intl;
    obj24.label = intl22.string(tmp8(tmp3[43]).t.MFGE51);
    obj24.IconComponent = tmp8(tmp3[56]).AnnouncementsIcon;
    constants4 = getProps(obj24);
    const obj25 = { label: null, IconComponent: null };
    const intl23 = tmp8(tmp3[43]).intl;
    obj25.label = intl23.string(tmp8(tmp3[43]).t.CvQ18w);
    obj25.IconComponent = tmp8(tmp3[57]).PinIcon;
    constants5 = getProps(obj25);
    const obj26 = { label: null, IconComponent: null };
    const intl24 = tmp8(tmp3[43]).intl;
    obj26.label = intl24.string(tmp8(tmp3[43]).t["Bse+F/"]);
    obj26.IconComponent = tmp8(tmp3[57]).PinIcon;
    constants6 = getProps(obj26);
    const obj27 = { label: null, IconComponent: null };
    const intl25 = tmp8(tmp3[43]).intl;
    obj27.label = intl25.string(tmp8(tmp3[43]).t["lE/PG3"]);
    obj27.IconComponent = tmp8(tmp3[58]).StampIcon;
    closure_23 = getProps(obj27);
    const obj28 = { label: null, IconComponent: null };
    const intl26 = tmp8(tmp3[43]).intl;
    obj28.label = intl26.string(tmp8(tmp3[43]).t["2km5Gf"]);
    obj28.IconComponent = tmp8(tmp3[59]).StampXIcon;
    constants7 = getProps(obj28);
    const obj29 = { label: null, IconComponent: null };
    const intl27 = tmp8(tmp3[43]).intl;
    obj29.label = intl27.string(tmp8(tmp3[43]).t.tpxJto);
    obj29.IconComponent = tmp8(tmp3[60]).BookmarkOutlineIcon;
    closure_25 = getProps(obj29);
    const obj30 = { label: null, IconComponent: null };
    const intl28 = tmp8(tmp3[43]).intl;
    obj30.label = intl28.string(tmp8(tmp3[43]).t.SvXS1Z);
    obj30.IconComponent = tmp8(tmp3[61]).BookmarkIcon;
    closure_26 = getProps(obj30);
    const obj31 = { label: null, IconComponent: null, arrow: true };
    const intl29 = tmp8(tmp3[43]).intl;
    obj31.label = intl29.string(tmp8(tmp3[43]).t.mJ3P0N);
    obj31.IconComponent = tmp8(tmp3[62]).ClockIcon;
    closure_27 = getProps(obj31);
    const obj32 = { label: null, IconComponent: null, arrow: true };
    const intl30 = tmp8(tmp3[43]).intl;
    obj32.label = intl30.string(tmp8(tmp3[43]).t.vrbqs1);
    obj32.IconComponent = tmp8(tmp3[62]).ClockIcon;
    closure_28 = getProps(obj32);
    const obj33 = { label: null, IconComponent: null, arrow: true };
    const intl31 = tmp8(tmp3[43]).intl;
    obj33.label = intl31.string(tmp8(tmp3[43]).t.PHjkRE);
    obj33.IconComponent = tmp8(tmp3[63]).RobotIcon;
    closure_29 = getProps(obj33);
    const obj34 = { label: null, IconComponent: null };
    const intl32 = tmp8(tmp3[43]).intl;
    obj34.label = intl32.string(tmp8(tmp3[43]).t["g33r/P"]);
    obj34.IconComponent = tmp8(tmp3[64]).ChatIcon;
    closure_30 = getProps(obj34);
    const obj35 = { label: null, IconComponent: null };
    const intl33 = tmp8(tmp3[43]).intl;
    obj35.label = intl33.string(tmp8(tmp3[43]).t.P8tvKG);
    obj35.IconComponent = tmp8(tmp3[65]).AtIcon;
    closure_31 = getProps(obj35);
    const obj36 = { label: null, IconComponent: null };
    const intl34 = tmp8(tmp3[43]).intl;
    obj36.label = intl34.string(tmp8(tmp3[43]).t["S/xNKV"]);
    obj36.IconComponent = tmp8(tmp3[66]).DownloadIcon;
    const props5 = getProps(obj36);
    let string = closure_25;
    let stringResult1 = tmp7;
    let tmp62 = tmp2;
    if (obj42) {
      const obj37 = { size: "small", color: intl };
      let stringResult = string(stringResult1(tmp62[67]).ActivityIndicator, obj37);
    } else {
      const obj38 = { IconComponent: stringResult1(tmp62[66]).DownloadIcon };
      stringResult = string(stringResult1(tmp62[37]).ActionSheetRow.Icon, obj38);
    }
    const obj39 = { icon: stringResult, label: null, onPress: null, disabled: null };
    tmp62 = tmp7;
    const intl2 = tmp7(tmp3[43]).intl;
    obj39.label = intl2.string(tmp(tmp3[68]).CYcfZo);
    obj39.onPress = function handleSaveCheckpointCharacter() {
      const self = this;
      const apply = closure_12.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj39.disabled = obj42;
    const obj40 = { label: null, IconComponent: null };
    const intl3 = tmp7(tmp3[43]).intl;
    obj40.label = intl3.string(tmp(tmp3[68]).DqUBGM);
    obj40.IconComponent = tmp7(tmp3[69]).ShareIcon;
    const props6 = getProps(obj40);
    const obj41 = { label: null, IconComponent: null };
    const intl4 = tmp7(tmp3[43]).intl;
    obj41.label = intl4.string(tmp7(tmp3[43]).t.JVuuz3);
    obj41.IconComponent = tmp7(tmp3[66]).DownloadIcon;
    const props7 = getProps(obj41);
    obj42 = { label: null, IconComponent: null };
    intl = tmp7(tmp3[43]).intl;
    string = intl.string;
    stringResult1 = string(tmp7(tmp3[43]).t.vbAEaA);
    obj42.label = stringResult1;
    obj42.IconComponent = tmp7(tmp3[66]).DownloadIcon;
    const props8 = getProps(obj42);
  }
  const tmp8Result20 = tmp8(tmp3[36]);
};