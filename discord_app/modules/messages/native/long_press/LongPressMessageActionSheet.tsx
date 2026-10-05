// discord_app/modules/messages/native/long_press/LongPressMessageActionSheet.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import MetaQuestUtils from "../../../device/MetaQuestUtils.android.tsx";
import MessageRecord from "../../../../records/MessageRecord.tsx";
import MessageConstants from "../../MessageConstants.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import useAnalyticsLocations from "../../../app_analytics/useAnalyticsLocations.tsx";
import ActionSheet2 from "../../../../design/components/Sheet/native/ActionSheet.native.tsx";
import showLongPressMessageActionSheet from "showLongPressMessageActionSheet.tsx";
import LongPressMessageActionSheetUtils from "LongPressMessageActionSheetUtils.tsx";
import EmojiRowUtils from "../../../action_sheet/native/components/EmojiRowUtils.tsx";
import EmojiRowDefault from "../../../action_sheet/native/components/EmojiRow.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import GuildAutomodMessageStore from "../../../guild_automod/GuildAutomodMessageStore.tsx";
import ReportToModStore from "../../../report_to_mod/ReportToModStore.tsx";
import SavedMessagesStore from "../../../saved_messages/SavedMessagesStore.tsx";
import AuthenticationStore_mod from "../../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import Constants from "../../../../Constants.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, set;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let map1;
let isMessageComponentsV2 = MessageRecord.isMessageComponentsV2;
let AuthenticationStore = AuthenticationStore_mod;
const FileUploadErrorTypes = MessageConstants.FileUploadErrorTypes;
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
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageActionSheet.tsx");

export default function LongPressMessageActionSheet(analyticsLocation) {
  let allTextDisplayContent;
  let analyticsLocations;
  let chatInputRef;
  let closure_8;
  let closure_9;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl36;
  let intl37;
  let intl38;
  let intl39;
  let intl4;
  let intl40;
  let intl41;
  let intl42;
  let intl43;
  let intl44;
  let intl45;
  let intl46;
  let intl7;
  let intl8;
  let intl9;
  let isActiveChannelOrUnarchivableThread;
  let isNonUserBotResult;
  let message;
  let selectedMedia;
  let set1;
  let tmp14;
  let tmp15;
  let user;
  const f107208 = () => {
    const items = [
      SavedMessagesStore.isMessageReminder(channel.id, message.id),
      SavedMessagesStore.isMessageBookmarked(channel.id, message.id),
    ];
    return items;
  };
  const f107209 = (flags) => {
    let tmp = null == flags.flags;
    if (!tmp) {
      const obj = analyticsLocation(analyticsLocation[27]);
      tmp = !obj.hasFlag(flags.flags, constants.IS_THUMBNAIL);
    }
    return tmp;
  };
  _require = analyticsLocation;
  let tmp = analyticsLocations;
  const tmp3 = analyticsLocation;
  const tmp4 = analyticsLocations(analyticsLocation[12]);
  analyticsLocations = tmp4(analyticsLocations(analyticsLocation[13]).MESSAGE_LONG_PRESS_MENU).analyticsLocations;
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
    let obj2;
    const obj = { channel_id: channel.id, guild_id: channel.guild_id, location: obj2 };
    const trackWithMetadata = AppAnalyticsUtilsDefault.trackWithMetadata;
    const MESSAGE_ACTION_SHEET_OPENED = map1.MESSAGE_ACTION_SHEET_OPENED;
    AppAnalyticsUtilsDefault;
    obj2 = { page: channel.isPrivate() ? authStore2.DM_CHANNEL : authStore2.GUILD_CHANNEL };
    const merged = Object.assign(analyticsLocation);
    trackWithMetadata(MESSAGE_ACTION_SHEET_OPENED, obj);
  }, items);
  const items1 = [analyticsLocation];
  AuthenticationStore = channel.useCallback(() => {
    const obj = showLongPressMessageActionSheet;
    const result = obj.showLongPressMessageActionSheet(analyticsLocation);
  }, items1);
  const tmp8 = _require;
  let obj2 = require("canReplyToMessage");
  const canReplyToMessage = obj2.useCanReplyToMessage(channel, message);
  let obj3 = require("canForwardMessage");
  const canForwardMessage = obj3.useCanForwardMessage(message);
  const guild = isActiveChannelOrUnarchivableThread.getGuild(channel.guild_id);
  let obj4 = require("ForLaterExperiment");
  let isForLaterExperimentOn = obj4.useIsForLaterExperimentOn("LongPressMessageActionSheet");
  const obj5 = require("get initialized");
  const items2 = [actionSheetSource];
  [tmp14, tmp15] = message(obj5.useStateFromStoresArray(items2, f107208), 2);
  message(obj5.useStateFromStoresArray(items2, f107208), 2);
  const obj6 = require("ForLaterExperiment");
  const hasForLaterAccess = obj6.useHasForLaterAccess("LongPressMessageActionSheet");
  const obj7 = require("ThreadHooks");
  const isNonModInLockedThread = obj7.useIsNonModInLockedThread(channel);
  let id1;
  const tmpResult = tmp(tmp3[21]);
  if (channel != null) {
    id1 = channel.id;
  }
  const interactionError = message.interactionError;
  const EXPLICIT_CONTENT = set1.EXPLICIT_CONTENT;
  const tmpResultResult = tmpResult(id1);
  const tmp21 = null != GuildAutomodMessageStore.getMessage(message.id);
  const tmp22 = tmp(tmp3[22])(message);
  const tmp8Result = tmp8(tmp3[20]);
  isActiveChannelOrUnarchivableThread = tmp8Result.useIsActiveChannelOrUnarchivableThread(channel);
  if (user != null) {
    isNonUserBotResult = user.isNonUserBot();
  }
  const id3 = AuthenticationStore.getId();
  const DeveloperMode = tmp8(tmp3[23]).DeveloperMode;
  const setting = DeveloperMode.getSetting();
  const canResult = set.can(constants8.MANAGE_MESSAGES, channel);
  const canResult1 = set.can(constants8.SEND_MESSAGES, channel);
  const tmp8Result18 = tmp8(tmp3[24]);
  const canToggleGuildOfficialMessages = tmp8Result18.useCanToggleGuildOfficialMessages(
    message,
    channel,
    "LongPressMessageActionSheet",
  );
  const id = message.author.id;
  const hasFlagResult = message.hasFlag(constants4.CROSSPOSTED);
  let tmp34 = !hasFlagResult;
  const tmp33 = tmp(tmp3[25])(message, channel);
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
    tmp34 = id === id3 || canResult;
  }
  if (tmp34) {
    tmp34 = message.type === constants6.DEFAULT;
  }
  if (tmp34) {
    tmp34 = !message.isPoll();
  }
  const tmp8Result19 = tmp8(tmp3[20]);
  const canStartPublicThread = tmp8Result19.computeCanStartPublicThread(channel, message);
  const contentMessage = message.getContentMessage();
  if (isMessageComponentsV2(contentMessage)) {
    const tmp8Result20 = tmp8(tmp3[26]);
    allTextDisplayContent = tmp8Result20.getAllTextDisplayContent(contentMessage.components);
  } else {
    allTextDisplayContent = contentMessage.content;
  }
  let tmp44 = (canResult || message.canDeleteOwnMessage(id3)) && length > 0 && message.author.id !== closure_17;
  if (tmp44) {
    const tmp8Result21 = tmp8(tmp3[27]);
    tmp44 = !tmp8Result21.hasFlag(message.flags, constants4.EPHEMERAL);
  }
  if (tmp44) {
    tmp44 = tmp(tmp3[28])(message) >= 1;
  }
  let tmp49 = !tmp21 && interactionError !== EXPLICIT_CONTENT;
  if (tmp49) {
    let result = null == message.interactionData;
    if (!result) {
      const tmp8Result22 = tmp8(tmp3[29]);
      result = tmp8Result22.canRetryInteractionData(message.interactionData);
    }
    tmp49 = result;
  }
  const attachments1 = message.attachments;
  let tmp53 = message.author.id === id3;
  if (tmp53) {
    tmp53 = attachments1.filter(f107209).length > 1 || "" !== message.content;
    const tmp54 = attachments1.filter(f107209).length > 1 || "" !== message.content;
  }
  const items3 = [selectedMedia];
  const tmp8Result23 = tmp8(tmp3[19]);
  const stateFromStores = tmp8Result23.useStateFromStores(items3, () =>
    ReportToModStore.hasReportedMessage(message.channel_id, message.id),
  );
  tmp8(tmp3[30]);
  if (guild != null) {
    const id2 = guild.id;
  }
  function getProps(arrow) {
    let IconComponent;
    let disabled;
    let onActionExecuted;
    let onBack;
    let variant;
    const label = arrow.label;
    ({ onActionExecuted: analyticsLocations, disabled } = arrow);
    let obj = {
      arrow: arrow.arrow,
      icon: jsx(analyticsLocation(analyticsLocation[31]).ActionSheetRow.Icon, { IconComponent }),
      label,
      onPress() {
        const obj = {
          actionSheetSource,
          analyticsLocations,
          channel,
          chatInputRef: GuildAutomodMessageStore,
          label,
          message,
          onBack,
          onActionExecuted: analyticsLocations,
          selectedMedia,
          disabled,
        };
        const result = LongPressMessageActionSheetUtils.longPressMessageOptionHandler(obj);
      },
      variant,
      disabled,
    };
    ({ IconComponent, variant } = arrow);
    return obj;
  }
  function render(items5) {
    let mapped;
    let obj3;
    let shouldShowEmojiRowResult;
    const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    ({ showGradient: true, startExpanded: obj3.isMetaQuest(), header: shouldShowEmojiRowResult, children: mapped });
    const ActionSheet = ActionSheet2.ActionSheet;
    obj3 = MetaQuestUtils;
    const obj4 = EmojiRowUtils;
    mapped = undefined;
    shouldShowEmojiRowResult =
      obj4.shouldShowEmojiRow(closure_8, message, isActiveChannelOrUnarchivableThread) &&
      jsx(EmojiRowDefault, { message, channel });
    if (items5 != null) {
      mapped = items5.map((arr, index) => {
        const obj = {
          hasIcons: true,
          children: arr.map((item, index) => {
            let arrow;
            let disabled;
            let icon;
            let label;
            let onPress;
            let variant;
            ({ icon, arrow, label, onPress, variant, disabled } = item);
            return closure_1_24(
              closure_1_0(closure_1_2[31]).ActionSheetRow,
              { icon, arrow, label, onPress, variant, disabled },
              index,
            );
          }),
        };
        const Group = closure_1_0(closure_1_2[31]).ActionSheetRow.Group;
        return closure_1_24(Group, obj, index);
      });
    }
    return <AnalyticsLocationProvider value={analyticsLocations}>{null}</AnalyticsLocationProvider>;
  }
  if (message.state === constants5.SEND_FAILED) {
    const items4 = [];
    if (tmp49) {
      let obj = { label: intl17.string(tmp8(tmp3[37]).t["5911Lb"]), IconComponent: tmp8(tmp3[38]).RetryIcon };
      const push3 = items4.push;
      intl17 = tmp8(tmp3[37]).intl;
      push3(getProps(obj));
    }
    const tmp246 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
    if (tmp246) {
      const push4 = items4.push;
      const obj8 = { label: intl18.string(tmp8(tmp3[37]).t.JrGD7E), IconComponent: tmp8(tmp3[39]).CopyIcon };
      intl18 = tmp8(tmp3[37]).intl;
      push4(getProps(obj8));
    }
    const push5 = items4.push;
    const obj10 = {
      label: intl19.string(require("intl").t.xwMqD7),
      IconComponent: require("TrashIcon").TrashIcon,
      variant: "danger",
    };
    intl19 = tmp7(tmp2[37]).intl;
    push5(getProps(obj10));
    const items5 = [items4];
    return render(items5);
  } else if (message.state === tmp58.SENDING) {
    const items6 = [];
    const tmp236 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
    if (tmp236) {
      const push = items6.push;
      const obj11 = { label: intl15.string(tmp8(tmp3[37]).t.JrGD7E), IconComponent: tmp8(tmp3[39]).CopyIcon };
      intl15 = tmp8(tmp3[37]).intl;
      const arr = push(getProps(obj11));
    }
    const push2 = items6.push;
    const obj12 = {
      label: intl16.string(tmp8(tmp3[37]).t.xwMqD7),
      IconComponent: tmp8(tmp3[40]).TrashIcon,
      variant: "danger",
    };
    intl16 = tmp8(tmp3[37]).intl;
    push2(getProps(obj12));
    const items7 = [items6];
    return render(items7);
  } else if (message.type === constants6.THREAD_STARTER_MESSAGE) {
    const obj13 = { label: intl14.string(tmp8(tmp3[37]).t.k5WiPf), IconComponent: tmp8(tmp3[41]).LinkIcon };
    intl14 = tmp8(tmp3[37]).intl;
    const items8 = [getProps(obj13)];
    const items9 = [items8];
    return render(items9);
  } else {
    let stringResult;
    const obj14 = { label: intl20.string(tmp8(tmp3[37]).t.fsBWmS), IconComponent: tmp8(tmp3[42]).PencilIcon };
    intl20 = tmp8(tmp3[37]).intl;
    const props = getProps(obj14);
    const obj15 = { label: intl21.string(tmp8(tmp3[37]).t.Y8ujqr), IconComponent: tmp8(tmp3[42]).PencilIcon };
    intl21 = tmp8(tmp3[37]).intl;
    const props1 = getProps(obj15);
    const obj17 = {
      label: intl22.string(tmp8(tmp3[37]).t["5IEsGx"]),
      IconComponent: tmp8(tmp3[43]).ArrowAngleLeftUpIcon,
    };
    intl22 = tmp8(tmp3[37]).intl;
    const props2 = getProps(obj17);
    const obj18 = { label: intl23.string(tmp8(tmp3[37]).t.I3ltXO), IconComponent: tmp(tmp3[44]) };
    intl23 = tmp8(tmp3[37]).intl;
    const props3 = getProps(obj18);
    const obj19 = { label: intl24.string(tmp8(tmp3[37]).t.rBIGBL), IconComponent: tmp8(tmp3[45]).ThreadIcon };
    intl24 = tmp8(tmp3[37]).intl;
    const props4 = getProps(obj19);
    const obj20 = { label: intl25.string(tmp8(tmp3[37]).t["39d0Wj"]), IconComponent: tmp8(tmp3[45]).ThreadIcon };
    intl25 = tmp8(tmp3[37]).intl;
    const props5 = getProps(obj20);
    const obj21 = {
      label: intl26.string(tmp8(tmp3[37]).t["+TSRGD"]),
      IconComponent: tmp8(tmp3[46]).ChatArrowRightIcon,
    };
    intl26 = tmp8(tmp3[37]).intl;
    const props6 = getProps(obj21);
    const obj22 = { label: intl27.string(tmp8(tmp3[37]).t.JrGD7E), IconComponent: tmp8(tmp3[39]).CopyIcon };
    intl27 = tmp8(tmp3[37]).intl;
    const props7 = getProps(obj22);
    const obj23 = { label: intl28.string(tmp8(tmp3[37]).t.RpE9k7), IconComponent: tmp8(tmp3[47]).ChatMarkUnreadIcon };
    intl28 = tmp8(tmp3[37]).intl;
    const props8 = getProps(obj23);
    const obj24 = { label: intl29.string(tmp8(tmp3[37]).t.grdwwt), IconComponent: tmp8(tmp3[48]).ClockXIcon };
    intl29 = tmp8(tmp3[37]).intl;
    const props9 = getProps(obj24);
    const obj25 = { label: intl30.string(tmp8(tmp3[37]).t.gHp0C4), IconComponent: tmp8(tmp3[49]).ReactionIcon };
    intl30 = tmp8(tmp3[37]).intl;
    const props10 = getProps(obj25);
    const obj26 = { label: intl31.string(tmp8(tmp3[37]).t.MFGE51), IconComponent: tmp8(tmp3[50]).AnnouncementsIcon };
    intl31 = tmp8(tmp3[37]).intl;
    const props11 = getProps(obj26);
    const obj27 = { label: intl32.string(tmp8(tmp3[37]).t.CvQ18w), IconComponent: tmp8(tmp3[51]).PinIcon };
    intl32 = tmp8(tmp3[37]).intl;
    const props12 = getProps(obj27);
    const obj28 = { label: intl33.string(tmp8(tmp3[37]).t["Bse+F/"]), IconComponent: tmp8(tmp3[51]).PinIcon };
    intl33 = tmp8(tmp3[37]).intl;
    const props13 = getProps(obj28);
    const obj29 = { label: intl34.string(tmp8(tmp3[37]).t["lE/PG3"]), IconComponent: tmp8(tmp3[52]).StampIcon };
    intl34 = tmp8(tmp3[37]).intl;
    const props14 = getProps(obj29);
    const obj30 = { label: intl35.string(tmp8(tmp3[37]).t["2km5Gf"]), IconComponent: tmp8(tmp3[53]).StampXIcon };
    intl35 = tmp8(tmp3[37]).intl;
    const props15 = getProps(obj30);
    const obj31 = { label: intl36.string(tmp8(tmp3[37]).t.tpxJto), IconComponent: tmp8(tmp3[54]).NitroWheelIcon };
    intl36 = tmp8(tmp3[37]).intl;
    const props16 = getProps(obj31);
    const obj32 = { label: intl37.string(tmp8(tmp3[37]).t.tpxJto), IconComponent: tmp8(tmp3[55]).BookmarkOutlineIcon };
    intl37 = tmp8(tmp3[37]).intl;
    const props17 = getProps(obj32);
    const obj33 = { label: intl38.string(tmp8(tmp3[37]).t.SvXS1Z), IconComponent: tmp8(tmp3[56]).BookmarkIcon };
    intl38 = tmp8(tmp3[37]).intl;
    const props18 = getProps(obj33);
    const obj34 = {
      label: intl39.string(tmp8(tmp3[37]).t.mJ3P0N),
      IconComponent: tmp8(tmp3[57]).ClockIcon,
      arrow: true,
    };
    intl39 = tmp8(tmp3[37]).intl;
    const props19 = getProps(obj34);
    const obj35 = {
      label: intl40.string(tmp8(tmp3[37]).t.vrbqs1),
      IconComponent: tmp8(tmp3[57]).ClockIcon,
      arrow: true,
    };
    intl40 = tmp8(tmp3[37]).intl;
    const props20 = getProps(obj35);
    const obj36 = {
      label: intl41.string(tmp8(tmp3[37]).t.PHjkRE),
      IconComponent: tmp8(tmp3[58]).RobotIcon,
      arrow: true,
    };
    intl41 = tmp8(tmp3[37]).intl;
    const props21 = getProps(obj36);
    const obj37 = { label: intl42.string(tmp8(tmp3[37]).t["g33r/P"]), IconComponent: tmp8(tmp3[59]).ChatIcon };
    intl42 = tmp8(tmp3[37]).intl;
    const props22 = getProps(obj37);
    const obj38 = { label: intl43.string(tmp8(tmp3[37]).t.P8tvKG), IconComponent: tmp8(tmp3[60]).AtIcon };
    intl43 = tmp8(tmp3[37]).intl;
    const props23 = getProps(obj38);
    const obj40 = { label: intl44.string(tmp8(tmp3[37]).t["S/xNKV"]), IconComponent: tmp8(tmp3[61]).DownloadIcon };
    intl44 = tmp8(tmp3[37]).intl;
    const props24 = getProps(obj40);
    const obj41 = { label: intl45.string(tmp8(tmp3[37]).t.JVuuz3), IconComponent: tmp8(tmp3[61]).DownloadIcon };
    intl45 = tmp8(tmp3[37]).intl;
    const props25 = getProps(obj41);
    const obj42 = { label: intl46.string(tmp8(tmp3[37]).t.vbAEaA), IconComponent: tmp8(tmp3[61]).DownloadIcon };
    intl46 = tmp8(tmp3[37]).intl;
    const props26 = getProps(obj42);
    let flag = false;
    try {
      let mediaUrl;
      if (selectedMedia != null) {
        mediaUrl = selectedMedia.mediaUrl;
      }
      let uRL = null;
      if (null != mediaUrl) {
        const _URL = URL;
        const self = this;
        const self2 = this;
        uRL = new URL(selectedMedia.mediaUrl);
      }
      let mediaType;
      if (selectedMedia != null) {
        mediaType = selectedMedia.mediaType;
      }
      let isMatch = "image" === mediaType && null != tmp62 && "cdn.discordapp.com" === tmp62.hostname;
      if (isMatch) {
        const obj16 = /\.(png|jpe?g|webp|avif|bmp|svg)(\?|$)/i;
        isMatch = obj16.test(uRL.pathname);
      }
      flag = isMatch;
    } catch (err) {}
    const intl = tmp8(tmp3[37]).intl;
    const string = intl.string;
    const t = tmp8(tmp3[37]).t;
    const obj43 = { label: string(flag ? t["8xHmxo"] : t["92CPQ+"]), IconComponent: tmp8(tmp3[41]).LinkIcon };
    const props27 = getProps(obj43);
    const obj44 = { label: intl2.string(tmp8(tmp3[37]).t.Xrt5Po), IconComponent: tmp8(tmp3[41]).LinkIcon };
    intl2 = tmp8(tmp3[37]).intl;
    const props28 = getProps(obj44);
    const obj45 = {
      label: intl3.string(tmp8(tmp3[37]).t.Rjezbz),
      IconComponent: tmp8(tmp3[57]).ClockIcon,
      arrow: true,
    };
    intl3 = tmp8(tmp3[37]).intl;
    const props29 = getProps(obj45);
    const obj46 = { label: intl4.string(tmp8(tmp3[37]).t.zBoHlf), IconComponent: tmp8(tmp3[62]).IdIcon };
    intl4 = tmp8(tmp3[37]).intl;
    const props30 = getProps(obj46);
    if (contentMessage.embeds.length > 1) {
      const intl6 = tmp8(tmp3[37]).intl;
      stringResult = intl6.string(tmp8(tmp3[37]).t.wUIMqa);
    } else {
      const intl5 = tmp8(tmp3[37]).intl;
      stringResult = intl5.string(tmp8(tmp3[37]).t["4sxKOb"]);
    }
    const obj47 = { label: stringResult, IconComponent: tmp8(tmp3[63]).XSmallBoldIcon, variant: "danger" };
    const props31 = getProps(obj47);
    const obj48 = {
      label: intl7.string(tmp8(tmp3[37]).t.ZbtGBm),
      IconComponent: tmp8(tmp3[40]).TrashIcon,
      variant: "danger",
    };
    intl7 = tmp8(tmp3[37]).intl;
    const props32 = getProps(obj48);
    const obj49 = {
      label: intl8.string(tmp8(tmp3[37]).t.kFwAsa),
      IconComponent: tmp8(tmp3[40]).TrashIcon,
      variant: "danger",
    };
    intl8 = tmp8(tmp3[37]).intl;
    const props33 = getProps(obj49);
    const obj50 = {
      label: intl9.string(tmp8(tmp3[37]).t["+78Pfm"]),
      IconComponent: tmp8(tmp3[64]).FlagIcon,
      variant: "danger",
    };
    intl9 = tmp8(tmp3[37]).intl;
    const props34 = getProps(obj50);
    const obj51 = {
      label: intl10.string(tmp8(tmp3[37]).t.n5EBAJ),
      variant: "danger",
      IconComponent: tmp8(tmp3[65]).ClydeIcon,
    };
    intl10 = tmp8(tmp3[37]).intl;
    const props35 = getProps(obj51);
    const obj52 = {
      label: intl11.string(tmp(tmp3[66])["1D+vqy"]),
      IconComponent: tmp8(tmp3[64]).FlagIcon,
      disabled: stateFromStores,
    };
    intl11 = tmp8(tmp3[37]).intl;
    const props36 = getProps(obj52);
    const obj53 = { label: intl12.string(tmp8(tmp3[37]).t.ZH7P2h), IconComponent: tmp8(tmp3[67]).ImageWarningIcon };
    intl12 = tmp8(tmp3[37]).intl;
    const props37 = getProps(obj53);
    const obj54 = {
      label: intl13.string(tmp8(tmp3[37]).t.xwMqD7),
      IconComponent: tmp8(tmp3[40]).TrashIcon,
      variant: "danger",
    };
    intl13 = tmp8(tmp3[37]).intl;
    const props38 = getProps(obj54);
    let hasFlagResult1 = tmp93;
    if (!hasFlagResult1) {
      const tmp8Result25 = tmp8(tmp3[27]);
      hasFlagResult1 = tmp8Result25.hasFlag(message.flags, constants4.EPHEMERAL);
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
      const tmp8Result26 = tmp8(tmp3[27]);
      isActiveChannelOrUnarchivableThread = !tmp8Result26.hasFlag(message.flags, constants4.EPHEMERAL);
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
    const tmp8Result27 = tmp8(tmp3[27]);
    if (tmp8Result27.hasFlag(message.flags, constants4.EPHEMERAL)) {
      items10.push(props3, props2, props28, props34, props35, props36);
    }
    const _Set = Set;
    const self3 = this;
    const self4 = this;
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
      const tmp8Result28 = tmp8(tmp3[68]);
      if (tmp8Result28.canReportMessageToMods(message)) {
        items11.unshift(props35);
        items11.unshift(props36);
      }
      items11.unshift(props8);
      if (isForLaterExperimentOn) {
        isForLaterExperimentOn =
          tmp15 || tmp14 || channel.isPrivate() || set.can(constants8.READ_MESSAGE_HISTORY, channel);
        tmp15 || tmp14 || channel.isPrivate() || set.can(constants8.READ_MESSAGE_HISTORY, channel);
      }
      if (isForLaterExperimentOn) {
        if (!hasForLaterAccess) {
          if (!tmp15) {
            if (!tmp14) {
              items11.unshift(props16);
            }
          }
        }
        let tmp165 = props17;
        const unshift = items11.unshift;
        if (tmp15) {
          tmp165 = props18;
        }
        unshift(tmp165);
        let tmp167 = props19;
        const unshift2 = items11.unshift;
        if (tmp14) {
          tmp167 = props20;
        }
        unshift2(tmp167);
      }
      if (tmp44) {
        items11.unshift(props31);
      }
      let hasItem1 = !canResult && !message.canDeleteOwnMessage(id3);
      if (!hasItem1) {
        const UNDELETABLE = constants7.UNDELETABLE;
        hasItem1 = UNDELETABLE.has(message.type);
      }
      if (!hasItem1) {
        items11.unshift(props38);
      }
      const tmp174 = tmp(tmp3[70])(message, id3) && !isNonModInLockedThread;
      if (tmp174) {
        items11.unshift(props);
      }
      if (tmp34) {
        items11.unshift(props11);
      }
      const tmp179 = (channel.isPrivate() && !tmp178) || true === isNonUserBotResult;
      if (!tmp179) {
        const tmp180 = set.can(constants8.SEND_MESSAGES, channel) || channel.type === constants2.GROUP_DM;
        if (tmp180) {
          items11.unshift(props23);
        }
        let id4;
        if (user != null) {
          id4 = user.id;
        }
        if (id3 !== id4) {
          items11.unshift(props22);
        }
      }
      if (tmp33) {
        let tmp184 = props12;
        const unshift3 = items11.unshift;
        if (message.pinned) {
          tmp184 = props13;
        }
        unshift3(tmp184);
      }
      if (canToggleGuildOfficialMessages) {
        const unshift4 = items11.unshift;
        let tmp188 = props14;
        const tmp8Result29 = tmp8(tmp3[27]);
        if (tmp8Result29.hasFlag(message.flags, constants4.IS_GUILD_OFFICIAL)) {
          tmp188 = props15;
        }
        unshift4(tmp188);
      }
      const tmp190 = null != allTextDisplayContent && allTextDisplayContent.length > 0;
      if (tmp190) {
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
      let tmp195 = "attachment" !== sourceType;
      if (!tmp195) {
        tmp195 = "image" !== selectedMedia.mediaType && "video" !== selectedMedia.mediaType;
        const tmp196 = "image" !== selectedMedia.mediaType && "video" !== selectedMedia.mediaType;
      }
      if (!tmp195) {
        tmp195 = !tmp(tmp3[70])(message, id3);
      }
      if (!tmp195) {
        tmp195 = isNonModInLockedThread;
      }
      if (!tmp195) {
        const attachments = message.attachments;
        tmp195 = !attachments.some((id) => id.id === selectedMedia.source.id);
      }
      if (!tmp195) {
        items11.unshift(props1);
      }
      const tmp199 = null == selectedMedia || tmpResultResult;
      if (!tmp199) {
        items11.unshift(props27);
        if ("image" === selectedMedia.mediaType) {
          items11.unshift(props24);
        } else {
          if ("video" === selectedMedia.mediaType) {
            const tmp8Result30 = tmp8(tmp3[71]);
            if (!tmp8Result30.isWebPlayerVideoUrl(selectedMedia.mediaUrl)) {
              items11.unshift(props25);
            }
          }
          const tmp204 = "audio" !== selectedMedia.mediaType && "file" !== selectedMedia.mediaType;
          if (!tmp204) {
            items11.unshift(props26);
          }
        }
        const tmp8Result31 = tmp8(tmp3[72]);
        if (tmp8Result31.messageHasObscurableMedia(message)) {
          items11.unshift(props37);
        }
        const tmp210 = "attachment" === selectedMedia.sourceType && tmp53;
        if (tmp210) {
          items11.unshift(props33);
        }
      }
      let tmp212 = message.reactions.length > 0;
      if (tmp212) {
        const isPollResult = message.isPoll();
        let hasNonVoteReactionsResult = !isPollResult;
        if (isPollResult) {
          const tmp8Result32 = tmp8(tmp3[73]);
          hasNonVoteReactionsResult = tmp8Result32.hasNonVoteReactions(message);
        }
        tmp212 = hasNonVoteReactionsResult;
      }
      if (tmp212) {
        items11.unshift(props10);
        if (canResult) {
          items11.unshift(props32);
        }
      }
      for (const item10702 of tmp22) {
        if (item10702 === require("usePollMessageContextItemTypes").PollMessageContextItemTypes.END_EARLY) {
          let arr68 = items11.unshift(props9);
        }
        continue;
      }
      items11.unshift(props21);
      const obj39 = require("ApplicationInteractionInfoUtils");
      if (obj39.canViewInteractionInfo(message)) {
        items11.unshift(props29);
      }
      const _Set2 = Set;
      const self5 = this;
      const self6 = this;
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
      set1 = new Set(items11.filter((item) => !set.has(item)));
      let mapped = items13.map((arr) => arr.filter((item) => set.has(item)));
      return render(mapped.filter((item) => item.length > 0));
    }
    let canReportUserResult = null != user;
    if (canReportUserResult) {
      const tmp8Result33 = tmp8(tmp3[69]);
      canReportUserResult = tmp8Result33.canReportUser(user);
    }
    if (canReportUserResult) {
      const tmp8Result34 = tmp8(tmp3[69]);
      canReportUserResult = tmp8Result34.canReportMessage(message);
    }
    if (canReportUserResult) {
      items11.unshift(props34);
    }
  }
}
